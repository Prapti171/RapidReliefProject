const state = {
    user: JSON.parse(sessionStorage.getItem("rapidUser") || "null"),
    source: { lat: 28.7041, lng: 77.1025 },
    destination: { lat: 28.6139, lng: 77.2090 },
    map: null,
    sourceMarker: null,
    destinationMarker: null,
    routeLine: null,
    placeMarkers: []
};

const authPage = document.getElementById("authPage");
const dashboardPage = document.getElementById("dashboardPage");
const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const crisisForm = document.getElementById("crisisForm");
const chatForm = document.getElementById("chatForm");
const refreshReportsBtn = document.getElementById("refreshReportsBtn");
const findHospitalsBtn = document.getElementById("findHospitalsBtn");
const findBloodBtn = document.getElementById("findBloodBtn");
const isLocalPreview = ["127.0.0.1", "localhost"].includes(window.location.hostname)
    && !["8080", "8081"].includes(window.location.port);

const API_BASE = window.location.protocol === "file:" || isLocalPreview ? "http://localhost:8080" : "";

function formData(form) {
    return Object.fromEntries(new FormData(form).entries());
}

async function api(path, options = {}) {
    try {
        const response = await fetch(`${API_BASE}${path}`, {
            headers: { "Content-Type": "application/json" },
            ...options
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Something went wrong.");
        }
        return data;
    } catch (error) {
        if (error instanceof TypeError) {
            throw new Error("Backend is not connected. Run: mvn spring-boot:run and open http://localhost:8080");
        }
        throw error;
    }
}

function showMessage(id, text, isError = false) {
    const element = document.getElementById(id);
    element.textContent = text;
    element.classList.toggle("error", isError);
}

registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
        const data = await api("/api/auth/register", {
            method: "POST",
            body: JSON.stringify(formData(registerForm))
        });
        showMessage("registerMsg", `${data.message} You can login now.`);
        registerForm.reset();
    } catch (error) {
        showMessage("registerMsg", error.message, true);
    }
});

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
        const data = await api("/api/auth/login", {
            method: "POST",
            body: JSON.stringify(formData(loginForm))
        });
        state.user = data.user;
        sessionStorage.setItem("rapidUser", JSON.stringify(data.user));
        showDashboard();
    } catch (error) {
        showMessage("loginMsg", error.message, true);
    }
});

document.getElementById("logoutBtn").addEventListener("click", () => {
    sessionStorage.removeItem("rapidUser");
    state.user = null;
    authPage.classList.remove("hidden");
    dashboardPage.classList.add("hidden");
});

document.getElementById("locateBtn").addEventListener("click", useCurrentLocation);
document.getElementById("voiceBtn").addEventListener("click", startVoiceInput);
refreshReportsBtn.addEventListener("click", loadReports);
findHospitalsBtn.addEventListener("click", () => findNearbyPlaces("hospital"));
findBloodBtn.addEventListener("click", () => findNearbyPlaces("blood"));

document.querySelectorAll("[data-prompt]").forEach((button) => {
    button.addEventListener("click", () => sendChatMessage(button.dataset.prompt));
});

crisisForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = formData(crisisForm);
    state.destination = {
        lat: Number(data.destinationLat),
        lng: Number(data.destinationLng)
    };
    updateMap();

    try {
        const report = await api("/api/crisis/report", {
            method: "POST",
            body: JSON.stringify({
                userId: state.user.id,
                crisisType: data.crisisType,
                description: buildReportDescription(data),
                sourceLat: state.source.lat,
                sourceLng: state.source.lng,
                destinationLat: state.destination.lat,
                destinationLng: state.destination.lng
            })
        });
        showMessage("crisisMsg", `Saved. Estimated distance: ${report.distanceKm} km.`);
        loadReports();
    } catch (error) {
        showMessage("crisisMsg", error.message, true);
    }
});

chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const input = chatForm.elements.message;
    await sendChatMessage(input.value);
    input.value = "";
});

function showDashboard() {
    authPage.classList.add("hidden");
    dashboardPage.classList.remove("hidden");
    document.getElementById("userName").textContent = state.user.fullName;
    document.getElementById("userMeta").textContent = `${state.user.bloodGroup} blood group | ${state.user.phone}`;
    document.getElementById("userInitial").textContent = state.user.fullName.charAt(0).toUpperCase();
    document.getElementById("contact").value = state.user.phone;
    setTimeout(initMap, 50);
    loadReports();
}

function initMap() {
    if (!window.L) {
        document.getElementById("map").innerHTML = "<p class='message error'>Map library needs internet. Connect once or add local Leaflet files.</p>";
        return;
    }
    if (!state.map) {
        state.map = L.map("map").setView([state.source.lat, state.source.lng], 12);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "&copy; OpenStreetMap"
        }).addTo(state.map);
        state.map.on("click", (event) => {
            state.destination = { lat: event.latlng.lat, lng: event.latlng.lng };
            document.getElementById("destinationLat").value = state.destination.lat.toFixed(5);
            document.getElementById("destinationLng").value = state.destination.lng.toFixed(5);
            updateMap();
        });
    }
    updateMap();
}

function updateMap() {
    if (!state.map) return;
    if (state.sourceMarker) state.sourceMarker.remove();
    clearDestinationRoute();

    state.sourceMarker = L.marker([state.source.lat, state.source.lng]).addTo(state.map).bindPopup("Patient/source").openPopup();

    const distance = haversineKm(state.source, state.destination);
    document.getElementById("distanceValue").textContent = `${distance.toFixed(1)} km`;
    document.getElementById("locationValue").value = `${state.source.lat.toFixed(5)}, ${state.source.lng.toFixed(5)}`;
    state.map.setView([state.source.lat, state.source.lng], 12);
}

function showDestinationRoute() {
    clearDestinationRoute();
    state.destinationMarker = L.marker([state.destination.lat, state.destination.lng]).addTo(state.map).bindPopup("Hospital/destination");
    state.routeLine = L.polyline([
        [state.source.lat, state.source.lng],
        [state.destination.lat, state.destination.lng]
    ], { color: "#e3211b", weight: 5 }).addTo(state.map);
    state.map.fitBounds(state.routeLine.getBounds(), { padding: [50, 50] });
}

function clearDestinationRoute() {
    if (state.destinationMarker) state.destinationMarker.remove();
    if (state.routeLine) state.routeLine.remove();
    state.destinationMarker = null;
    state.routeLine = null;
}

async function findNearbyPlaces(type) {
    if (!state.map) return;

    const status = document.getElementById("placesStatus");
    const radiusMeters = 10000;
    const label = type === "blood" ? "blood banks and hospitals" : "hospitals";
    status.textContent = `Searching ${label} within 10 km...`;

    clearPlaceMarkers();

    const query = type === "blood" ? bloodHelpQuery(radiusMeters) : hospitalQuery(radiusMeters);
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Map search service is busy. Try again.");
        }
        const data = await response.json();
        const places = data.elements
            .map(toPlace)
            .filter(Boolean)
            .map((place) => ({
                ...place,
                distanceKm: haversineKm(state.source, { lat: place.lat, lng: place.lng })
            }))
            .filter((place) => place.distanceKm <= 10)
            .sort((a, b) => a.distanceKm - b.distanceKm)
            .slice(0, 15);

        if (!places.length) {
            status.textContent = `No ${label} found within 10 km. Try a nearby city location.`;
            return;
        }

        places.forEach((place) => addPlaceMarker(place, type));
        const bounds = L.featureGroup([
            state.sourceMarker,
            ...state.placeMarkers
        ]).getBounds();
        state.map.fitBounds(bounds, { padding: [45, 45] });
        status.textContent = `Showing ${places.length} nearest ${label} within 10 km.`;
    } catch (error) {
        status.textContent = `${error.message} Internet is required for live place search.`;
    }
}

function hospitalQuery(radiusMeters) {
    return `
        [out:json][timeout:25];
        (
          node["amenity"="hospital"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          way["amenity"="hospital"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          relation["amenity"="hospital"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          node["healthcare"="hospital"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          way["healthcare"="hospital"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          relation["healthcare"="hospital"](around:${radiusMeters},${state.source.lat},${state.source.lng});
        );
        out center tags;
    `;
}

function bloodHelpQuery(radiusMeters) {
    return `
        [out:json][timeout:25];
        (
          node["healthcare"="blood_donation"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          way["healthcare"="blood_donation"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          relation["healthcare"="blood_donation"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          node["amenity"="blood_bank"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          way["amenity"="blood_bank"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          relation["amenity"="blood_bank"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          node["amenity"="hospital"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          way["amenity"="hospital"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          relation["amenity"="hospital"](around:${radiusMeters},${state.source.lat},${state.source.lng});
        );
        out center tags;
    `;
}

function toPlace(element) {
    const lat = element.lat ?? element.center?.lat;
    const lng = element.lon ?? element.center?.lon;
    if (!lat || !lng) return null;

    const tags = element.tags || {};
    return {
        lat,
        lng,
        name: tags.name || tags["name:en"] || "Medical facility",
        phone: tags.phone || tags["contact:phone"] || "Phone not listed",
        address: [tags["addr:street"], tags["addr:city"]].filter(Boolean).join(", "),
        category: tags.healthcare === "blood_donation" || tags.amenity === "blood_bank" ? "Blood help" : "Hospital"
    };
}

function addPlaceMarker(place, type) {
    const color = type === "blood" || place.category === "Blood help" ? "#e11d48" : "#22c55e";
    const marker = L.circleMarker([place.lat, place.lng], {
        radius: 9,
        color,
        fillColor: color,
        fillOpacity: 0.85,
        weight: 2
    }).addTo(state.map);

    marker.bindPopup(`
        <strong>${place.name}</strong><br>
        ${place.category}<br>
        Distance: ${place.distanceKm.toFixed(1)} km<br>
        ${place.phone}<br>
        ${place.address || "Address not listed"}
    `);
    state.placeMarkers.push(marker);
}

function clearPlaceMarkers() {
    state.placeMarkers.forEach((marker) => marker.remove());
    state.placeMarkers = [];
}

function useCurrentLocation() {
    if (!navigator.geolocation) {
        showMessage("crisisMsg", "Geolocation is not supported in this browser.", true);
        return;
    }
    navigator.geolocation.watchPosition((position) => {
        state.source = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        updateMap();
        showMessage("crisisMsg", "Live location updated.");
    }, () => {
        showMessage("crisisMsg", "Location permission denied. Using sample Delhi location.", true);
    }, { enableHighAccuracy: true });
}

function startVoiceInput() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        showMessage("crisisMsg", "Voice input works in Chrome/Edge browsers.", true);
        return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.onresult = (event) => {
        document.getElementById("description").value = event.results[0][0].transcript;
    };
    recognition.start();
}

async function loadReports() {
    if (!state.user) return;
    const list = document.getElementById("reportList");
    list.innerHTML = "<li>Loading reports...</li>";
    try {
        const reports = await api(`/api/crisis/reports/${state.user.id}`);
        list.innerHTML = reports.length ? "" : "<li>No reports yet.</li>";
        reports.forEach((report) => {
            const item = document.createElement("li");
            item.innerHTML = `<strong>${report.crisisType}</strong><br>${report.distanceKm} km | ${new Date(report.createdAt).toLocaleString()}<br>${report.description || "No description"}`;
            list.appendChild(item);
        });
    } catch {
        list.innerHTML = "<li>Could not load reports.</li>";
    }
}

async function sendChatMessage(message) {
    const trimmed = message.trim();
    if (!trimmed) return;

    addChat(trimmed, "user");
    try {
        const data = await api("/api/chat", {
            method: "POST",
            body: JSON.stringify({ message: trimmed })
        });
        addChat(data.reply, "bot");
    } catch (error) {
        addChat(`${error.message}\n\nFor now: call emergency services, move to a safe place if possible, and share your location with a trusted person.`, "bot");
    }
}

function buildReportDescription(data) {
    const parts = [
        data.title ? `Title: ${data.title}` : "",
        data.severity ? `Severity: ${data.severity}` : "",
        data.contact ? `Contact: ${data.contact}` : "",
        data.affected ? `Affected: ${data.affected}` : "",
        data.description || ""
    ].filter(Boolean);
    return parts.join("\n");
}

function addChat(text, type) {
    const log = document.getElementById("chatLog");
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${type}`;
    bubble.textContent = text;
    log.appendChild(bubble);
    log.scrollTop = log.scrollHeight;
}

function haversineKm(a, b) {
    const radius = 6371;
    const dLat = toRad(b.lat - a.lat);
    const dLng = toRad(b.lng - a.lng);
    const startLat = toRad(a.lat);
    const endLat = toRad(b.lat);
    const value = Math.sin(dLat / 2) ** 2
        + Math.cos(startLat) * Math.cos(endLat) * Math.sin(dLng / 2) ** 2;
    return radius * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function toRad(value) {
    return value * Math.PI / 180;
}

if (state.user) {
    showDashboard();
}
