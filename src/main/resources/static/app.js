const translations = {
    en: {
        navHome: "Home",
        navAbout: "About Us",
        navLiveMap: "Live Map",
        heroHelp: "Emergency Help",
        heroTitle: "Medical Crisis Relief",
        heroSubtitle: "Register, log in, report emergencies, track hospitals, and get quick first-aid guidance.",
        heroCta: "Start Now",
        registerTitle: "Create Account",
        registerFullNameLabel: "Full name",
        registerFullNamePlaceholder: "Aarav Sharma",
        registerEmailLabel: "Email",
        registerEmailPlaceholder: "you@example.com",
        registerPhoneLabel: "Phone",
        registerPhonePlaceholder: "+91 98765 43210",
        registerBloodLabel: "Blood group",
        registerBloodPlaceholder: "O+",
        registerEmergencyLabel: "Emergency contact",
        registerEmergencyPlaceholder: "+91 90000 00000",
        registerPasswordLabel: "Password",
        registerPasswordPlaceholder: "Minimum 6 characters",
        registerButton: "Register",
        loginTitle: "Login",
        loginEmailLabel: "Email",
        loginEmailPlaceholder: "you@example.com",
        loginPasswordLabel: "Password",
        loginPasswordPlaceholder: "Your password",
        loginButton: "Login to Dashboard",
        aboutTitle: "Built for medical and health crises",
        aboutText: "Store responder-ready patient data, locate nearby care, record crisis reports, and guide users while help is on the way.",
        sideMain: "Main",
        sideDashboard: "Dashboard",
        sideLiveMap: "Live Map",
        sideVoice: "Voice SOS",
        sideCrisis: "Crisis",
        sideAlerts: "Active Alerts",
        sideReport: "Report Crisis",
        sideMedical: "Medical",
        sideHospitals: "Hospitals",
        sideBloodBanks: "Blood Banks",
        sidePharmacies: "Pharmacies",
        sideAi: "AI",
        sideAssistant: "AI Assistant",
        liveBadge: "Live",
        logoutButton: "Logout",
        dashboardTitle: "Medical Crisis Dashboard",
        topAiChat: "AI Chat",
        topLocation: "SOS Location",
        topReport: "Report",
        alertsTitle: "Live Crisis Alerts",
        refreshButton: "Refresh",
        reportTitle: "Report Medical Crisis",
        fieldTitle: "Title",
        fieldTitlePlaceholder: "Brief emergency title",
        fieldType: "Type",
        typeRoadAccident: "Road accident",
        typeMedicalEmergency: "Medical Emergency",
        typeHeartAttack: "Heart attack or breathing issue",
        typeBleeding: "Severe bleeding",
        typeBurns: "Burns",
        typeStroke: "Stroke symptoms",
        typeUnconscious: "Unconscious person",
        fieldSeverity: "Severity",
        severityMedium: "Medium",
        severityHigh: "High",
        severityCritical: "Critical",
        severityLow: "Low",
        fieldLocation: "Location",
        fieldContact: "Contact",
        fieldContactPlaceholder: "Phone",
        fieldAffected: "Affected",
        fieldAffectedPlaceholder: "Count",
        fieldDescription: "Description",
        fieldDescriptionPlaceholder: "Describe the emergency...",
        fieldHospitalLat: "Hospital lat",
        fieldHospitalLng: "Hospital lng",
        reportButton: "Report Emergency Now",
        assistantTag: "AI ASSISTANT",
        assistantTitle: "Doremi is ready",
        assistantText: "Ask in your preferred language, share your symptoms, and Doremi will guide you with urgent steps plus nearby doctor contacts.",
        assistantOpen: "Open Doremi",
        mapTitle: "Live Map Tracking",
        distanceLabel: "distance left",
        findHospitalsButton: "Find Hospitals 10 km",
        findBloodButton: "Find Blood Help 10 km",
        placesDefault: "Use SOS Location first for best results.",
        assistantHeaderSub: "Multilingual medical helper",
        languageLabel: "Language",
        shareLocationButton: "Share location",
        chatPlaceholder: "Talk to Doremi...",
        sendButton: "Send",
        chipEmergency: "Emergency steps",
        chipCpr: "CPR help",
        chipChestPain: "Chest pain",
        chipBurns: "Burn injury",
        chipUnconscious: "Unconscious person",
        chipDoctor: "Find nearby doctor",
        registerSuccessSuffix: "You can login now.",
        backendOffline: "Backend is not connected. Run the Spring app and open http://localhost:9090",
        locationUnsupported: "Geolocation is not supported in this browser.",
        locationUpdated: "Live location updated.",
        locationDenied: "Location permission denied. Using sample Delhi location.",
        reportsLoading: "Loading reports...",
        reportsEmpty: "No reports yet.",
        reportsFailed: "Could not load reports.",
        doctorsSearch: "Finding nearby doctors for you...",
        doctorsNeedLocation: "Live map location is not ready yet. Tap SOS Location once and try again.",
        doctorsNone: "No nearby doctor listings with phone numbers were found within 25 km.",
        doctorsUnavailable: "Doctor lookup needs internet access right now.",
        doctorsTitle: "Nearby doctors and contacts:",
        doctorsFooter: "This uses your live map area and nearby medical listings.",
        doctorsPhoneMissing: "Phone number not available",
        doctorsAddressMissing: "Address not available",
        doctorsDistance: "Distance",
        doctorsBasedOnSymptom: "Best match for your symptoms",
        doctorsNearbyFallback: "Closest available options",
        nearestHospitalTitle: "Nearest hospital from live map",
        nearestHospitalMissing: "No nearby hospital address could be found yet.",
        reportSaved: "Saved. Estimated distance:",
        placeSearchBusy: "Map search service is busy. Try again.",
        placeSearchInternet: "Internet is required for live place search.",
        placeSearchingHospitals: "Searching hospitals within 10 km...",
        placeSearchingBlood: "Searching blood banks and hospitals within 10 km...",
        placeNotFoundHospitals: "No hospitals found within 10 km. Try a nearby city location.",
        placeNotFoundBlood: "No blood banks and hospitals found within 10 km. Try a nearby city location.",
        placeShowingHospitals: "Showing nearest hospitals within 10 km.",
        placeShowingBlood: "Showing nearest blood banks and hospitals within 10 km.",
        greeting: "Hi! i am doremi 🎀 how can i help you today?",
        chatErrorFallback: "For now: call emergency services, move to a safe place if possible, and share your location with a trusted person.",
        reportDescriptionTitle: "Title",
        reportDescriptionSeverity: "Severity",
        reportDescriptionContact: "Contact",
        reportDescriptionAffected: "Affected",
        doctorProblemPrefix: "Problem",
        doctorLocationPrefix: "Detected location",
        doctorLanguagePrefix: "Language",
        languageOptionEn: "English",
        languageOptionHi: "Hindi",
        languageOptionBn: "Bengali",
        languageOptionTa: "Tamil",
        mapPatientSource: "Patient/source",
        mapHospitalDestination: "Hospital/destination",
        mapNeedsInternet: "Map library needs internet. Connect once or add local Leaflet files."
    },
    hi: {
        ...{},
        navHome: "होम",
        navAbout: "हमारे बारे में",
        navLiveMap: "लाइव मैप",
        heroHelp: "इमरजेंसी हेल्प",
        heroTitle: "मेडिकल क्राइसिस रिलीफ",
        heroSubtitle: "रजिस्टर करें, लॉग इन करें, इमरजेंसी रिपोर्ट करें, अस्पताल ट्रैक करें और तुरंत फर्स्ट-एड गाइडेंस पाएं।",
        heroCta: "अभी शुरू करें",
        registerTitle: "अकाउंट बनाएं",
        registerFullNameLabel: "पूरा नाम",
        registerEmailLabel: "ईमेल",
        registerPhoneLabel: "फोन",
        registerBloodLabel: "ब्लड ग्रुप",
        registerEmergencyLabel: "इमरजेंसी कॉन्टैक्ट",
        registerPasswordLabel: "पासवर्ड",
        registerPasswordPlaceholder: "कम से कम 6 अक्षर",
        registerButton: "रजिस्टर करें",
        loginTitle: "लॉगिन",
        loginPasswordPlaceholder: "अपना पासवर्ड",
        loginButton: "डैशबोर्ड खोलें",
        aboutTitle: "मेडिकल और हेल्थ क्राइसिस के लिए बनाया गया",
        aboutText: "रिस्पॉन्डर-रेडी पेशेंट डेटा सेव करें, नजदीकी इलाज ढूंढें, क्राइसिस रिपोर्ट रिकॉर्ड करें और मदद आने तक यूजर को गाइड करें।",
        sideMain: "मुख्य",
        sideDashboard: "डैशबोर्ड",
        sideLiveMap: "लाइव मैप",
        sideVoice: "वॉइस SOS",
        sideCrisis: "क्राइसिस",
        sideAlerts: "एक्टिव अलर्ट्स",
        sideReport: "क्राइसिस रिपोर्ट",
        sideMedical: "मेडिकल",
        sideHospitals: "अस्पताल",
        sideBloodBanks: "ब्लड बैंक",
        sidePharmacies: "फार्मेसी",
        sideAssistant: "एआई असिस्टेंट",
        logoutButton: "लॉगआउट",
        dashboardTitle: "मेडिकल क्राइसिस डैशबोर्ड",
        topAiChat: "एआई चैट",
        topLocation: "SOS लोकेशन",
        topReport: "रिपोर्ट",
        alertsTitle: "लाइव क्राइसिस अलर्ट्स",
        refreshButton: "रिफ्रेश",
        reportTitle: "मेडिकल क्राइसिस रिपोर्ट करें",
        fieldTitle: "टाइटल",
        fieldTitlePlaceholder: "इमरजेंसी का छोटा टाइटल",
        fieldType: "टाइप",
        typeRoadAccident: "रोड एक्सीडेंट",
        typeMedicalEmergency: "मेडिकल इमरजेंसी",
        typeHeartAttack: "हार्ट अटैक या सांस की दिक्कत",
        typeBleeding: "ज्यादा खून बहना",
        typeBurns: "जलना",
        typeStroke: "स्ट्रोक के लक्षण",
        typeUnconscious: "बेहोश व्यक्ति",
        fieldSeverity: "गंभीरता",
        severityMedium: "मध्यम",
        severityHigh: "उच्च",
        severityCritical: "क्रिटिकल",
        severityLow: "लो",
        fieldLocation: "लोकेशन",
        fieldContact: "कॉन्टैक्ट",
        fieldAffected: "प्रभावित",
        fieldAffectedPlaceholder: "संख्या",
        fieldDescription: "विवरण",
        fieldDescriptionPlaceholder: "इमरजेंसी के बारे में लिखें...",
        fieldHospitalLat: "अस्पताल लैट",
        fieldHospitalLng: "अस्पताल लंग",
        reportButton: "अभी इमरजेंसी रिपोर्ट करें",
        assistantTag: "एआई असिस्टेंट",
        assistantTitle: "डोरेमी तैयार है",
        assistantText: "अपनी पसंद की भाषा में पूछें, लक्षण बताएं और डोरेमी तुरंत मदद के स्टेप्स और नजदीकी डॉक्टर कॉन्टैक्ट देगी।",
        assistantOpen: "डोरेमी खोलें",
        mapTitle: "लाइव मैप ट्रैकिंग",
        distanceLabel: "बाकी दूरी",
        findHospitalsButton: "10 किमी में अस्पताल ढूंढें",
        findBloodButton: "10 किमी में ब्लड हेल्प ढूंढें",
        placesDefault: "बेहतर रिजल्ट्स के लिए पहले SOS Location दबाएं।",
        assistantHeaderSub: "मल्टीलैंग्वेज मेडिकल हेल्पर",
        languageLabel: "भाषा",
        shareLocationButton: "लोकेशन शेयर करें",
        chatPlaceholder: "डोरेमी से बात करें...",
        sendButton: "भेजें",
        chipEmergency: "इमरजेंसी स्टेप्स",
        chipCpr: "सीपीआर मदद",
        chipChestPain: "सीने में दर्द",
        chipBurns: "जलने की चोट",
        chipUnconscious: "बेहोश व्यक्ति",
        chipDoctor: "नजदीकी डॉक्टर",
        registerSuccessSuffix: "अब आप लॉगिन कर सकते हैं।",
        backendOffline: "बैकएंड कनेक्ट नहीं है। Spring app चलाकर http://localhost:9090 खोलें",
        locationUnsupported: "इस ब्राउज़र में लोकेशन सपोर्ट नहीं है।",
        locationUpdated: "लाइव लोकेशन अपडेट हो गई।",
        locationDenied: "लोकेशन परमिशन नहीं मिली। सैंपल दिल्ली लोकेशन इस्तेमाल हो रही है।",
        reportsLoading: "रिपोर्ट्स लोड हो रही हैं...",
        reportsEmpty: "अभी कोई रिपोर्ट नहीं है।",
        reportsFailed: "रिपोर्ट्स लोड नहीं हो सकीं।",
        doctorsSearch: "आपके लिए नजदीकी डॉक्टर ढूंढ रही हूं...",
        doctorsNeedLocation: "लाइव मैप लोकेशन अभी तैयार नहीं है। एक बार SOS Location दबाकर फिर कोशिश करें।",
        doctorsNone: "25 किमी के अंदर फोन नंबर वाली कोई नजदीकी मेडिकल लिस्टिंग नहीं मिली।",
        doctorsUnavailable: "डॉक्टर खोजने के लिए अभी इंटरनेट चाहिए।",
        doctorsTitle: "नजदीकी डॉक्टर और कॉन्टैक्ट:",
        doctorsFooter: "यह आपके लाइव मैप एरिया और आसपास की मेडिकल लिस्टिंग्स पर आधारित है।",
        doctorsPhoneMissing: "फोन नंबर उपलब्ध नहीं",
        doctorsAddressMissing: "पता उपलब्ध नहीं",
        doctorsDistance: "दूरी",
        doctorsBasedOnSymptom: "आपके लक्षणों के हिसाब से बेहतर मैच",
        doctorsNearbyFallback: "सबसे नजदीकी उपलब्ध विकल्प",
        nearestHospitalTitle: "लाइव मैप से नजदीकी अस्पताल",
        nearestHospitalMissing: "अभी नजदीकी अस्पताल का पता नहीं मिल पाया।",
        reportSaved: "सेव हो गया। अनुमानित दूरी:",
        placeSearchBusy: "मैप सर्च सर्विस व्यस्त है। फिर कोशिश करें।",
        placeSearchInternet: "लाइव प्लेस सर्च के लिए इंटरनेट चाहिए।",
        placeSearchingHospitals: "10 किमी के अंदर अस्पताल खोजे जा रहे हैं...",
        placeSearchingBlood: "10 किमी के अंदर ब्लड बैंक और अस्पताल खोजे जा रहे हैं...",
        placeNotFoundHospitals: "10 किमी के अंदर अस्पताल नहीं मिले। किसी नजदीकी शहर की लोकेशन ट्राई करें।",
        placeNotFoundBlood: "10 किमी के अंदर ब्लड बैंक या अस्पताल नहीं मिले। किसी नजदीकी शहर की लोकेशन ट्राई करें।",
        placeShowingHospitals: "10 किमी के अंदर सबसे नजदीकी अस्पताल दिखाए जा रहे हैं।",
        placeShowingBlood: "10 किमी के अंदर सबसे नजदीकी ब्लड बैंक और अस्पताल दिखाए जा रहे हैं।",
        doctorProblemPrefix: "समस्या",
        doctorLocationPrefix: "डिटेक्टेड लोकेशन",
        doctorLanguagePrefix: "भाषा",
        languageOptionEn: "अंग्रेज़ी",
        languageOptionHi: "हिंदी",
        languageOptionBn: "बंगाली",
        languageOptionTa: "तमिल",
        mapPatientSource: "रोगी/स्रोत",
        mapHospitalDestination: "अस्पताल/डेस्टिनेशन",
        mapNeedsInternet: "मैप लाइब्रेरी के लिए इंटरनेट चाहिए। एक बार कनेक्ट करें या लोकल Leaflet files जोड़ें।"
    },
    bn: {
        ...{},
        navHome: "হোম",
        navAbout: "আমাদের সম্পর্কে",
        navLiveMap: "লাইভ ম্যাপ",
        heroHelp: "ইমার্জেন্সি হেল্প",
        heroTitle: "মেডিক্যাল ক্রাইসিস রিলিফ",
        heroSubtitle: "রেজিস্টার করুন, লগ ইন করুন, ইমার্জেন্সি রিপোর্ট করুন, হাসপাতাল ট্র্যাক করুন এবং দ্রুত ফার্স্ট-এইড গাইডেন্স পান।",
        heroCta: "এখনই শুরু করুন",
        registerTitle: "অ্যাকাউন্ট তৈরি করুন",
        registerFullNameLabel: "পুরো নাম",
        registerEmailLabel: "ইমেইল",
        registerPhoneLabel: "ফোন",
        registerBloodLabel: "রক্তের গ্রুপ",
        registerEmergencyLabel: "জরুরি যোগাযোগ",
        registerPasswordLabel: "পাসওয়ার্ড",
        registerPasswordPlaceholder: "কমপক্ষে ৬ অক্ষর",
        registerButton: "রেজিস্টার করুন",
        loginTitle: "লগইন",
        loginPasswordPlaceholder: "আপনার পাসওয়ার্ড",
        loginButton: "ড্যাশবোর্ডে লগইন করুন",
        aboutTitle: "মেডিক্যাল ও হেলথ ক্রাইসিসের জন্য তৈরি",
        aboutText: "রেসপন্ডার-রেডি রোগীর তথ্য সংরক্ষণ করুন, কাছাকাছি চিকিৎসা খুঁজুন, ক্রাইসিস রিপোর্ট রাখুন এবং সাহায্য পৌঁছানো পর্যন্ত ব্যবহারকারীকে গাইড করুন।",
        sideMain: "মেইন",
        sideDashboard: "ড্যাশবোর্ড",
        sideLiveMap: "লাইভ ম্যাপ",
        sideVoice: "ভয়েস SOS",
        sideCrisis: "ক্রাইসিস",
        sideAlerts: "অ্যাকটিভ অ্যালার্টস",
        sideReport: "ক্রাইসিস রিপোর্ট",
        sideMedical: "মেডিক্যাল",
        sideHospitals: "হাসপাতাল",
        sideBloodBanks: "ব্লাড ব্যাংক",
        sidePharmacies: "ফার্মেসি",
        sideAssistant: "এআই অ্যাসিস্ট্যান্ট",
        logoutButton: "লগআউট",
        dashboardTitle: "মেডিক্যাল ক্রাইসিস ড্যাশবোর্ড",
        topAiChat: "এআই চ্যাট",
        topLocation: "SOS লোকেশন",
        topReport: "রিপোর্ট",
        alertsTitle: "লাইভ ক্রাইসিস অ্যালার্টস",
        refreshButton: "রিফ্রেশ",
        reportTitle: "মেডিক্যাল ক্রাইসিস রিপোর্ট করুন",
        fieldTitle: "শিরোনাম",
        fieldTitlePlaceholder: "জরুরি অবস্থার ছোট শিরোনাম",
        fieldType: "ধরন",
        typeRoadAccident: "সড়ক দুর্ঘটনা",
        typeMedicalEmergency: "মেডিক্যাল ইমার্জেন্সি",
        typeHeartAttack: "হার্ট অ্যাটাক বা শ্বাসকষ্ট",
        typeBleeding: "অতিরিক্ত রক্তপাত",
        typeBurns: "পোড়া",
        typeStroke: "স্ট্রোকের লক্ষণ",
        typeUnconscious: "অচেতন ব্যক্তি",
        fieldSeverity: "তীব্রতা",
        severityMedium: "মাঝারি",
        severityHigh: "উচ্চ",
        severityCritical: "জরুরি",
        severityLow: "কম",
        fieldLocation: "লোকেশন",
        fieldContact: "যোগাযোগ",
        fieldAffected: "আক্রান্ত",
        fieldAffectedPlaceholder: "সংখ্যা",
        fieldDescription: "বিবরণ",
        fieldDescriptionPlaceholder: "জরুরি পরিস্থিতি বর্ণনা করুন...",
        fieldHospitalLat: "হাসপাতাল ল্যাট",
        fieldHospitalLng: "হাসপাতাল লং",
        reportButton: "এখনই ইমার্জেন্সি রিপোর্ট করুন",
        assistantTag: "এআই অ্যাসিস্ট্যান্ট",
        assistantTitle: "ডোরেমি প্রস্তুত",
        assistantText: "আপনার পছন্দের ভাষায় জিজ্ঞেস করুন, উপসর্গ বলুন, আর ডোরেমি দ্রুত জরুরি গাইডলাইন ও কাছাকাছি ডাক্তার কনট্যাক্ট দেবে।",
        assistantOpen: "ডোরেমি খুলুন",
        mapTitle: "লাইভ ম্যাপ ট্র্যাকিং",
        distanceLabel: "বাকি দূরত্ব",
        findHospitalsButton: "১০ কিমির মধ্যে হাসপাতাল খুঁজুন",
        findBloodButton: "১০ কিমির মধ্যে ব্লাড হেল্প খুঁজুন",
        placesDefault: "ভালো ফলের জন্য আগে SOS Location ব্যবহার করুন।",
        assistantHeaderSub: "মাল্টিল্যাঙ্গুয়াল মেডিক্যাল হেল্পার",
        languageLabel: "ভাষা",
        shareLocationButton: "লোকেশন শেয়ার করুন",
        chatPlaceholder: "ডোরেমির সাথে কথা বলুন...",
        sendButton: "পাঠান",
        chipEmergency: "ইমার্জেন্সি ধাপ",
        chipCpr: "সিপিআর সাহায্য",
        chipChestPain: "বুকের ব্যথা",
        chipBurns: "পোড়ার আঘাত",
        chipUnconscious: "অচেতন ব্যক্তি",
        chipDoctor: "কাছের ডাক্তার",
        registerSuccessSuffix: "এখন আপনি লগইন করতে পারবেন।",
        backendOffline: "ব্যাকএন্ড সংযুক্ত নয়। Spring app চালিয়ে http://localhost:9090 খুলুন",
        locationUnsupported: "এই ব্রাউজারে লোকেশন সাপোর্ট নেই।",
        locationUpdated: "লাইভ লোকেশন আপডেট হয়েছে।",
        locationDenied: "লোকেশন পারমিশন মেলেনি। স্যাম্পল দিল্লি লোকেশন ব্যবহার হচ্ছে।",
        reportsLoading: "রিপোর্ট লোড হচ্ছে...",
        reportsEmpty: "এখনও কোনো রিপোর্ট নেই।",
        reportsFailed: "রিপোর্ট লোড করা যায়নি।",
        doctorsSearch: "আপনার জন্য কাছাকাছি ডাক্তার খোঁজা হচ্ছে...",
        doctorsNeedLocation: "লাইভ ম্যাপ লোকেশন এখনো প্রস্তুত নয়। একবার SOS Location ট্যাপ করে আবার চেষ্টা করুন।",
        doctorsNone: "২৫ কিমির মধ্যে ফোন নম্বরসহ কোনো কাছাকাছি মেডিক্যাল লিস্টিং পাওয়া যায়নি।",
        doctorsUnavailable: "ডাক্তার খুঁজতে এখন ইন্টারনেট দরকার।",
        doctorsTitle: "কাছাকাছি ডাক্তার ও যোগাযোগ:",
        doctorsFooter: "এটি আপনার লাইভ ম্যাপ এলাকা এবং আশপাশের মেডিক্যাল লিস্টিং ব্যবহার করে।",
        doctorsPhoneMissing: "ফোন নম্বর নেই",
        doctorsAddressMissing: "ঠিকানা নেই",
        doctorsDistance: "দূরত্ব",
        doctorsBasedOnSymptom: "আপনার উপসর্গ অনুযায়ী ভালো মিল",
        doctorsNearbyFallback: "সবচেয়ে কাছের বিকল্প",
        nearestHospitalTitle: "লাইভ ম্যাপ থেকে নিকটতম হাসপাতাল",
        nearestHospitalMissing: "এখনও কাছাকাছি হাসপাতালের ঠিকানা পাওয়া যায়নি।",
        reportSaved: "সেভ হয়েছে। আনুমানিক দূরত্ব:",
        placeSearchBusy: "ম্যাপ সার্চ সার্ভিস ব্যস্ত। আবার চেষ্টা করুন।",
        placeSearchInternet: "লাইভ প্লেস সার্চের জন্য ইন্টারনেট দরকার।",
        placeSearchingHospitals: "১০ কিমির মধ্যে হাসপাতাল খোঁজা হচ্ছে...",
        placeSearchingBlood: "১০ কিমির মধ্যে ব্লাড ব্যাংক ও হাসপাতাল খোঁজা হচ্ছে...",
        placeNotFoundHospitals: "১০ কিমির মধ্যে কোনো হাসপাতাল পাওয়া যায়নি। কাছের শহরের লোকেশন দিয়ে চেষ্টা করুন।",
        placeNotFoundBlood: "১০ কিমির মধ্যে ব্লাড ব্যাংক বা হাসপাতাল পাওয়া যায়নি। কাছের শহরের লোকেশন দিয়ে চেষ্টা করুন।",
        placeShowingHospitals: "১০ কিমির মধ্যে নিকটতম হাসপাতালগুলো দেখানো হচ্ছে।",
        placeShowingBlood: "১০ কিমির মধ্যে নিকটতম ব্লাড ব্যাংক ও হাসপাতাল দেখানো হচ্ছে।",
        doctorProblemPrefix: "সমস্যা",
        doctorLocationPrefix: "ডিটেক্টেড লোকেশন",
        doctorLanguagePrefix: "ভাষা",
        languageOptionEn: "ইংরেজি",
        languageOptionHi: "হিন্দি",
        languageOptionBn: "বাংলা",
        languageOptionTa: "তামিল",
        mapPatientSource: "রোগী/উৎস",
        mapHospitalDestination: "হাসপাতাল/গন্তব্য",
        mapNeedsInternet: "ম্যাপ লাইব্রেরির জন্য ইন্টারনেট দরকার। একবার সংযুক্ত করুন অথবা লোকাল Leaflet files যোগ করুন।"
    },
    ta: {
        ...{},
        navHome: "முகப்பு",
        navAbout: "எங்களை பற்றி",
        navLiveMap: "நேரடி மேப்",
        heroHelp: "அவசர உதவி",
        heroTitle: "மருத்துவ நெருக்கடி உதவி",
        heroSubtitle: "பதிவு செய்யுங்கள், உள்நுழையுங்கள், அவசர நிலையை பதிவு செய்யுங்கள், மருத்துவமனைகளை கண்காணியுங்கள், உடனடி முதல் உதவி வழிகாட்டலைப் பெறுங்கள்.",
        heroCta: "இப்போது தொடங்குங்கள்",
        registerTitle: "கணக்கு உருவாக்குங்கள்",
        registerFullNameLabel: "முழு பெயர்",
        registerEmailLabel: "மின்னஞ்சல்",
        registerPhoneLabel: "தொலைபேசி",
        registerBloodLabel: "இரத்த வகை",
        registerEmergencyLabel: "அவசர தொடர்பு",
        registerPasswordLabel: "கடவுச்சொல்",
        registerPasswordPlaceholder: "குறைந்தது 6 எழுத்துகள்",
        registerButton: "பதிவு செய்யுங்கள்",
        loginTitle: "உள்நுழைவு",
        loginPasswordPlaceholder: "உங்கள் கடவுச்சொல்",
        loginButton: "டாஷ்போர்டுக்கு உள்நுழைக",
        aboutTitle: "மருத்துவ மற்றும் சுகாதார நெருக்கடிக்காக உருவாக்கப்பட்டது",
        aboutText: "உதவியாளர்களுக்கு தயாரான நோயாளர் தகவலை சேமிக்கவும், அருகிலுள்ள சிகிச்சையை கண்டறியவும், நெருக்கடி அறிக்கைகளை பதிவு செய்யவும், உதவி வரும் வரை பயனர்களை வழிநடத்தவும்.",
        sideMain: "முதன்மை",
        sideDashboard: "டாஷ்போர்டு",
        sideLiveMap: "நேரடி மேப்",
        sideVoice: "வாய்ஸ் SOS",
        sideCrisis: "நெருக்கடி",
        sideAlerts: "செயலில் உள்ள அலர்ட்ஸ்",
        sideReport: "நெருக்கடி அறிக்கை",
        sideMedical: "மருத்துவம்",
        sideHospitals: "மருத்துவமனைகள்",
        sideBloodBanks: "இரத்த வங்கிகள்",
        sidePharmacies: "மருந்தகம்",
        sideAssistant: "ஏஐ உதவியாளர்",
        logoutButton: "லாக்அவுட்",
        dashboardTitle: "மருத்துவ நெருக்கடி டாஷ்போர்டு",
        topAiChat: "ஏஐ சாட்",
        topLocation: "SOS இடம்",
        topReport: "அறிக்கை",
        alertsTitle: "நேரடி நெருக்கடி அலர்ட்ஸ்",
        refreshButton: "புதுப்பிக்கவும்",
        reportTitle: "மருத்துவ நெருக்கடியை பதிவு செய்யவும்",
        fieldTitle: "தலைப்பு",
        fieldTitlePlaceholder: "சுருக்கமான அவசர தலைப்பு",
        fieldType: "வகை",
        typeRoadAccident: "சாலை விபத்து",
        typeMedicalEmergency: "மருத்துவ அவசரம்",
        typeHeartAttack: "இதய பிரச்சனை அல்லது சுவாச சிரமம்",
        typeBleeding: "அதிக இரத்தப்போக்கு",
        typeBurns: "தீக்காயம்",
        typeStroke: "ஸ்ட்ரோக் அறிகுறிகள்",
        typeUnconscious: "மயக்கநிலையிலுள்ள நபர்",
        fieldSeverity: "தீவிரம்",
        severityMedium: "மத்தியம்",
        severityHigh: "உயர்",
        severityCritical: "மிக அவசரம்",
        severityLow: "குறைவு",
        fieldLocation: "இடம்",
        fieldContact: "தொடர்பு",
        fieldAffected: "பாதிக்கப்பட்டோர்",
        fieldAffectedPlaceholder: "எண்ணிக்கை",
        fieldDescription: "விவரம்",
        fieldDescriptionPlaceholder: "அவசர நிலையை விவரிக்கவும்...",
        fieldHospitalLat: "மருத்துவமனை லாட்",
        fieldHospitalLng: "மருத்துவமனை லாங்",
        reportButton: "உடனே அவசரத்தை பதிவு செய்யவும்",
        assistantTag: "ஏஐ உதவியாளர்",
        assistantTitle: "டோரெமி தயாராக இருக்கிறாள்",
        assistantText: "உங்கள் மொழியில் கேளுங்கள், அறிகுறிகளை பகிருங்கள், டோரெமி உடனடி உதவி வழிகாட்டல் மற்றும் அருகிலுள்ள மருத்துவர் தொடர்புகளை தருவாள்.",
        assistantOpen: "டோரெமியை திறக்கவும்",
        mapTitle: "நேரடி மேப் கண்காணிப்பு",
        distanceLabel: "மீதமுள்ள தூரம்",
        findHospitalsButton: "10 கிமீவில் மருத்துவமனைகள்",
        findBloodButton: "10 கிமீவில் ரத்த உதவி",
        placesDefault: "சிறந்த முடிவுகளுக்கு முதலில் SOS Location பயன்படுத்தவும்.",
        assistantHeaderSub: "பலமொழி மருத்துவ உதவியாளர்",
        languageLabel: "மொழி",
        shareLocationButton: "இடத்தை பகிரவும்",
        chatPlaceholder: "டோரெமியிடம் பேசுங்கள்...",
        sendButton: "அனுப்பு",
        chipEmergency: "அவசர படிகள்",
        chipCpr: "CPR உதவி",
        chipChestPain: "மார்பு வலி",
        chipBurns: "தீக்காயம்",
        chipUnconscious: "மயக்கநிலையிலுள்ள நபர்",
        chipDoctor: "அருகிலுள்ள மருத்துவர்",
        registerSuccessSuffix: "இப்போது நீங்கள் உள்நுழையலாம்.",
        backendOffline: "பேக்கெண்ட் இணைக்கப்படவில்லை. Spring app ஓட்டி http://localhost:9090 திறக்கவும்",
        locationUnsupported: "இந்த உலாவியில் geolocation ஆதரவு இல்லை.",
        locationUpdated: "நேரடி இடம் புதுப்பிக்கப்பட்டது.",
        locationDenied: "இட அனுமதி மறுக்கப்பட்டது. மாதிரி டெல்லி இடம் பயன்படுத்தப்படுகிறது.",
        reportsLoading: "அறிக்கைகள் ஏற்றப்படுகின்றன...",
        reportsEmpty: "இன்னும் அறிக்கைகள் இல்லை.",
        reportsFailed: "அறிக்கைகளை ஏற்ற முடியவில்லை.",
        doctorsSearch: "உங்களுக்காக அருகிலுள்ள டாக்டர்களை தேடுகிறேன்...",
        doctorsNeedLocation: "நேரடி மேப் இடம் இன்னும் தயார் இல்லை. ஒருமுறை SOS Location தட்டி மீண்டும் முயற்சிக்கவும்.",
        doctorsNone: "25 கிமீ உள்ளே தொலைபேசி எண் கொண்ட அருகிலுள்ள மருத்துவ பட்டியல் கிடைக்கவில்லை.",
        doctorsUnavailable: "டாக்டர் தேட இப்போது இணையம் தேவை.",
        doctorsTitle: "அருகிலுள்ள டாக்டர்கள் மற்றும் தொடர்புகள்:",
        doctorsFooter: "இது உங்கள் live map பகுதி மற்றும் அருகிலுள்ள மருத்துவ பட்டியல்களை பயன்படுத்துகிறது.",
        doctorsPhoneMissing: "தொலைபேசி எண் இல்லை",
        doctorsAddressMissing: "முகவரி இல்லை",
        doctorsDistance: "தூரம்",
        doctorsBasedOnSymptom: "உங்கள் அறிகுறிக்கு சிறந்த பொருத்தம்",
        doctorsNearbyFallback: "அருகிலுள்ள விருப்பங்கள்",
        nearestHospitalTitle: "நேரடி மேப்பில் அருகிலுள்ள மருத்துவமனை",
        nearestHospitalMissing: "அருகிலுள்ள மருத்துவமனை முகவரி இன்னும் கிடைக்கவில்லை.",
        reportSaved: "சேமிக்கப்பட்டது. கணிக்கப்பட்ட தூரம்:",
        placeSearchBusy: "மேப் தேடல் சேவை பிஸியாக உள்ளது. மீண்டும் முயற்சிக்கவும்.",
        placeSearchInternet: "நேரடி இட தேடலுக்கு இணையம் தேவை.",
        placeSearchingHospitals: "10 கிமீ உள்ளே மருத்துவமனைகள் தேடப்படுகின்றன...",
        placeSearchingBlood: "10 கிமீ உள்ளே ரத்த வங்கிகள் மற்றும் மருத்துவமனைகள் தேடப்படுகின்றன...",
        placeNotFoundHospitals: "10 கிமீ உள்ளே மருத்துவமனைகள் கிடைக்கவில்லை. அருகிலுள்ள நகர இடத்தை முயற்சிக்கவும்.",
        placeNotFoundBlood: "10 கிமீ உள்ளே ரத்த வங்கி அல்லது மருத்துவமனைகள் கிடைக்கவில்லை. அருகிலுள்ள நகர இடத்தை முயற்சிக்கவும்.",
        placeShowingHospitals: "10 கிமீ உள்ளே அருகிலுள்ள மருத்துவமனைகள் காட்டப்படுகின்றன.",
        placeShowingBlood: "10 கிமீ உள்ளே அருகிலுள்ள ரத்த வங்கிகள் மற்றும் மருத்துவமனைகள் காட்டப்படுகின்றன.",
        doctorProblemPrefix: "பிரச்சனை",
        doctorLocationPrefix: "கண்டறியப்பட்ட இடம்",
        doctorLanguagePrefix: "மொழி",
        languageOptionEn: "ஆங்கிலம்",
        languageOptionHi: "ஹிந்தி",
        languageOptionBn: "பெங்காலி",
        languageOptionTa: "தமிழ்",
        mapPatientSource: "நோயாளர்/மூலம்",
        mapHospitalDestination: "மருத்துவமனை/இலக்கு",
        mapNeedsInternet: "மேப் நூலகத்திற்கு இணையம் தேவை. ஒருமுறை இணைக்கவும் அல்லது உள்ளூர் Leaflet files சேர்க்கவும்."
    }
};

const languageOptionLabels = {
    en: { en: "English", hi: "Hindi", bn: "Bengali", ta: "Tamil" },
    hi: { en: "अंग्रेज़ी", hi: "हिंदी", bn: "बंगाली", ta: "तमिल" },
    bn: { en: "ইংরেজি", hi: "হিন্দি", bn: "বাংলা", ta: "তামিল" },
    ta: { en: "ஆங்கிலம்", hi: "ஹிந்தி", bn: "பெங்காலி", ta: "தமிழ்" }
};

const state = {
    user: JSON.parse(sessionStorage.getItem("rapidUser") || "null"),
    language: sessionStorage.getItem("rapidLanguage") || "en",
    source: { lat: 28.7041, lng: 77.1025 },
    destination: { lat: 28.6139, lng: 77.2090 },
    map: null,
    sourceMarker: null,
    destinationMarker: null,
    routeLine: null,
    placeMarkers: [],
    widgetOpen: true,
    locationWatchId: null
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
const languageSelect = document.getElementById("languageSelect");
const widgetLauncher = document.getElementById("widgetLauncher");
const aiCard = document.getElementById("aiCard");
const openAiBtn = document.getElementById("openAiBtn");
const closeAiBtn = document.getElementById("closeAiBtn");
const chatLocateBtn = document.getElementById("chatLocateBtn");
const chatVoiceBtn = document.getElementById("chatVoiceBtn");
const isLocalPreview = ["127.0.0.1", "localhost"].includes(window.location.hostname)
    && !["9090"].includes(window.location.port);

const API_BASE = window.location.protocol === "file:" || isLocalPreview ? "http://localhost:9090" : "";

function t(key) {
    return translations[state.language]?.[key] ?? translations.en[key] ?? key;
}

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
            throw new Error(t("backendOffline"));
        }
        throw error;
    }
}

function showMessage(id, text, isError = false) {
    const element = document.getElementById(id);
    element.textContent = text;
    element.classList.toggle("error", isError);
}

function applyTranslations() {
    document.documentElement.lang = state.language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = t(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        element.placeholder = t(element.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-i18n-label]").forEach((element) => {
        const textNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE);
        if (textNode) {
            textNode.textContent = `${t(element.dataset.i18nLabel)} `;
        }
    });
    document.querySelectorAll("[data-prompt-key]").forEach((button) => {
        button.textContent = t(button.dataset.promptKey);
    });

    const greeting = document.querySelector("[data-greeting='true']");
    if (greeting) {
        greeting.textContent = t("greeting");
    }

    updateLanguageOptionLabels();
    languageSelect.value = state.language;
    sessionStorage.setItem("rapidLanguage", state.language);
}

function updateLanguageOptionLabels() {
    const labels = languageOptionLabels[state.language] || languageOptionLabels.en;
    languageSelect.querySelector("option[value='en']").textContent = labels.en;
    languageSelect.querySelector("option[value='hi']").textContent = labels.hi;
    languageSelect.querySelector("option[value='bn']").textContent = labels.bn;
    languageSelect.querySelector("option[value='ta']").textContent = labels.ta;
}

registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
        const data = await api("/api/auth/register", {
            method: "POST",
            body: JSON.stringify(formData(registerForm))
        });
        showMessage("registerMsg", `${data.message} ${t("registerSuccessSuffix")}`);
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

document.getElementById("locateBtn").addEventListener("click", () => useCurrentLocation({ watch: true }));
document.getElementById("voiceBtn").addEventListener("click", () => startVoiceInput("description"));
refreshReportsBtn.addEventListener("click", loadReports);
findHospitalsBtn.addEventListener("click", () => findNearbyPlaces("hospital"));
findBloodBtn.addEventListener("click", () => findNearbyPlaces("blood"));
languageSelect.addEventListener("change", () => {
    state.language = languageSelect.value;
    applyTranslations();
});
widgetLauncher.addEventListener("click", openAssistant);
openAiBtn.addEventListener("click", openAssistant);
closeAiBtn.addEventListener("click", closeAssistant);
chatLocateBtn.addEventListener("click", async () => {
    await useCurrentLocation({ watch: false });
    openAssistant();
});
chatVoiceBtn.addEventListener("click", () => startVoiceInput("message"));

document.querySelectorAll("[data-prompt-key]").forEach((button) => {
    button.addEventListener("click", () => sendChatMessage(t(button.dataset.promptKey)));
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
        showMessage("crisisMsg", `${t("reportSaved")} ${report.distanceKm} km.`);
        loadReports();
        showDestinationRoute();
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
    applyTranslations();
    openAssistant();
    setTimeout(initMap, 50);
    loadReports();
}

function initMap() {
    if (!window.L) {
        document.getElementById("map").innerHTML = `<p class='message error'>${t("mapNeedsInternet")}</p>`;
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
            showDestinationRoute();
        });
    }
    updateMap();
}

function updateMap() {
    if (!state.map) return;
    if (state.sourceMarker) state.sourceMarker.remove();
    clearDestinationRoute();

    state.sourceMarker = L.marker([state.source.lat, state.source.lng]).addTo(state.map).bindPopup(t("mapPatientSource")).openPopup();

    const distance = haversineKm(state.source, state.destination);
    document.getElementById("distanceValue").textContent = `${distance.toFixed(1)} km`;
    document.getElementById("locationValue").value = `${state.source.lat.toFixed(5)}, ${state.source.lng.toFixed(5)}`;
    state.map.setView([state.source.lat, state.source.lng], 12);
}

function showDestinationRoute() {
    if (!state.map) return;
    clearDestinationRoute();
    state.destinationMarker = L.marker([state.destination.lat, state.destination.lng]).addTo(state.map).bindPopup(t("mapHospitalDestination"));
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
    const label = type === "blood" ? "blood" : "hospitals";
    status.textContent = type === "blood" ? t("placeSearchingBlood") : t("placeSearchingHospitals");

    clearPlaceMarkers();

    const query = type === "blood" ? bloodHelpQuery(radiusMeters) : hospitalQuery(radiusMeters);
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(t("placeSearchBusy"));
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
            status.textContent = type === "blood" ? t("placeNotFoundBlood") : t("placeNotFoundHospitals");
            return;
        }

        places.forEach((place) => addPlaceMarker(place, type));
        const bounds = L.featureGroup([
            state.sourceMarker,
            ...state.placeMarkers
        ]).getBounds();
        state.map.fitBounds(bounds, { padding: [45, 45] });
        status.textContent = label === "blood" ? t("placeShowingBlood") : t("placeShowingHospitals");
    } catch (error) {
        status.textContent = `${error.message} ${t("placeSearchInternet")}`;
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

function doctorQuery(radiusMeters) {
    return `
        [out:json][timeout:25];
        (
          node["amenity"="doctors"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          way["amenity"="doctors"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          relation["amenity"="doctors"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          node["healthcare"="doctor"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          way["healthcare"="doctor"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          relation["healthcare"="doctor"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          node["amenity"="clinic"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          way["amenity"="clinic"](around:${radiusMeters},${state.source.lat},${state.source.lng});
          relation["amenity"="clinic"](around:${radiusMeters},${state.source.lat},${state.source.lng});
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
        phone: normalizePhone(
            tags.phone
            || tags["contact:phone"]
            || tags["contact:mobile"]
            || tags["contact:telephone"]
            || tags["phone:mobile"]
            || tags.mobile
            || ""
        ),
        address: [tags["addr:housenumber"], tags["addr:street"], tags["addr:city"]].filter(Boolean).join(", "),
        category: inferCategory(tags),
        specialty: [
            tags["healthcare:speciality"],
            tags["healthcare:specialty"],
            tags["medical_specialty"],
            tags.speciality,
            tags.specialty
        ].filter(Boolean).join(", ").toLowerCase()
    };
}

function normalizePhone(value) {
    return String(value || "")
        .split(/[;,]/)
        .map((part) => part.trim())
        .find(Boolean) || "";
}

function inferCategory(tags) {
    if (tags.healthcare === "blood_donation" || tags.amenity === "blood_bank") return "Blood help";
    if (tags.amenity === "doctors" || tags.healthcare === "doctor") return "Doctor";
    if (tags.amenity === "clinic") return "Clinic";
    return "Hospital";
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
        ${t("doctorsDistance")}: ${place.distanceKm.toFixed(1)} km<br>
        ${place.phone || t("doctorsPhoneMissing")}<br>
        ${place.address || t("doctorsAddressMissing")}
    `);
    state.placeMarkers.push(marker);
}

function clearPlaceMarkers() {
    state.placeMarkers.forEach((marker) => marker.remove());
    state.placeMarkers = [];
}

function useCurrentLocation({ watch = false } = {}) {
    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            showMessage("crisisMsg", t("locationUnsupported"), true);
            resolve(false);
            return;
        }

        const onSuccess = (position) => {
            state.source = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            updateMap();
            showMessage("crisisMsg", t("locationUpdated"));
            resolve(true);
        };

        const onError = () => {
            showMessage("crisisMsg", t("locationDenied"), true);
            resolve(false);
        };

        if (watch) {
            if (state.locationWatchId !== null) {
                navigator.geolocation.clearWatch(state.locationWatchId);
            }
            state.locationWatchId = navigator.geolocation.watchPosition(onSuccess, onError, { enableHighAccuracy: true });
        } else {
            navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true, timeout: 10000 });
        }
    });
}

function startVoiceInput(targetField) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        showMessage("crisisMsg", "Voice input works in Chrome/Edge browsers.", true);
        return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = voiceLanguageFor(state.language);
    recognition.interimResults = false;
    recognition.onresult = (event) => {
        const field = targetField === "message" ? chatForm.elements.message : document.getElementById("description");
        field.value = event.results[0][0].transcript;
        if (targetField === "message") {
            field.focus();
        }
    };
    recognition.start();
}

function voiceLanguageFor(language) {
    return {
        en: "en-IN",
        hi: "hi-IN",
        bn: "bn-IN",
        ta: "ta-IN"
    }[language] || "en-IN";
}

async function loadReports() {
    if (!state.user) return;
    const list = document.getElementById("reportList");
    list.innerHTML = `<li>${t("reportsLoading")}</li>`;
    try {
        const reports = await api(`/api/crisis/reports/${state.user.id}`);
        list.innerHTML = reports.length ? "" : `<li>${t("reportsEmpty")}</li>`;
        reports.forEach((report) => {
            const item = document.createElement("li");
            item.innerHTML = `<strong>${report.crisisType}</strong><br>${report.distanceKm} km | ${new Date(report.createdAt).toLocaleString()}<br>${report.description || "No description"}`;
            list.appendChild(item);
        });
    } catch {
        list.innerHTML = `<li>${t("reportsFailed")}</li>`;
    }
}

async function sendChatMessage(message) {
    const trimmed = message.trim();
    if (!trimmed) return;

    addChat(trimmed, "user");
    openAssistant();

    const wantsDoctorHelp = shouldFindDoctors(trimmed);
    const locationReady = wantsDoctorHelp ? await ensureAssistantLocation() : false;
    const doctorPromise = wantsDoctorHelp && locationReady ? fetchNearbyDoctors(trimmed) : Promise.resolve(null);

    try {
        const data = await api("/api/chat", {
            method: "POST",
            body: JSON.stringify({
                message: trimmed,
                language: state.language
            })
        });

        const doctorBlock = await doctorPromise;
        addChat(buildAssistantReply(data.reply, doctorBlock, trimmed, locationReady), "bot");
    } catch (error) {
        const doctorBlock = await doctorPromise;
        addChat(buildAssistantReply(`${error.message}\n\n${t("chatErrorFallback")}`, doctorBlock, trimmed, locationReady), "bot");
    }
}

function buildAssistantReply(reply, doctorBlock, message, locationReady) {
    if (!shouldFindDoctors(message)) {
        return reply;
    }
    if (!locationReady) {
        return `${reply}\n\n${t("doctorsNeedLocation")}`;
    }
    if (!doctorBlock) {
        return `${reply}\n\n${t("doctorsUnavailable")}`;
    }
    return `${reply}\n\n${doctorBlock}`;
}

async function ensureAssistantLocation() {
    return Number.isFinite(state.source?.lat) && Number.isFinite(state.source?.lng);
}

async function fetchNearbyDoctors(message) {
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(doctorQuery(25000))}`;
    const symptomProfile = classifySymptom(message);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(t("placeSearchBusy"));
        }
        const data = await response.json();
        const doctors = data.elements
            .map(toPlace)
            .filter(Boolean)
            .map((place) => ({
                ...place,
                distanceKm: haversineKm(state.source, { lat: place.lat, lng: place.lng })
            }))
            .filter((place) => place.distanceKm <= 25)
            .sort((a, b) => a.distanceKm - b.distanceKm);

        const nearestHospital = await fetchNearestHospitalInfo();
        if (!doctors.length) {
            return buildHospitalOnlyReply(message, nearestHospital);
        }

        const prioritized = prioritizeDoctorContacts(doctors, symptomProfile);
        const enriched = await enrichPlaces(prioritized.slice(0, 5), doctors, nearestHospital);
        const list = enriched.map((doctor, index) => {
            return `${index + 1}. ${doctor.name} - ${doctor.category}
${t("doctorsDistance")}: ${doctor.distanceKm.toFixed(1)} km
${doctor.phone || t("doctorsPhoneMissing")}
${doctor.address || t("doctorsAddressMissing")}`;
        }).join("\n\n");

        const heading = prioritized.some((item) => item.matchScore > 0) ? t("doctorsBasedOnSymptom") : t("doctorsNearbyFallback");
        const hospitalBlock = nearestHospital
            ? `${t("nearestHospitalTitle")}:
${nearestHospital.name}
${nearestHospital.phone || t("doctorsPhoneMissing")}
${nearestHospital.address || t("doctorsAddressMissing")}`
            : `${t("nearestHospitalTitle")}:
${t("nearestHospitalMissing")}`;
        return `${t("doctorsTitle")}
${heading}

${list}

${hospitalBlock}

${t("doctorProblemPrefix")}: ${message}
${t("doctorLocationPrefix")}: ${state.source.lat.toFixed(5)}, ${state.source.lng.toFixed(5)}
${t("doctorLanguagePrefix")}: ${languageSelect.options[languageSelect.selectedIndex].text}

${t("doctorsFooter")}`;
    } catch {
        return null;
    }
}

function prioritizeDoctorContacts(doctors, symptomProfile) {
    const matched = filterDoctorsForSymptom(doctors, symptomProfile);
    const matchedSet = new Set(matched.map((doctor) => `${doctor.name}|${doctor.lat}|${doctor.lng}`));
    return doctors
        .map((doctor) => ({
            ...doctor,
            matchScore: matchedSet.has(`${doctor.name}|${doctor.lat}|${doctor.lng}`) ? 2 : 0,
            phoneScore: doctor.phone ? 1 : 0,
            addressScore: doctor.address ? 1 : 0
        }))
        .sort((a, b) =>
            (b.matchScore + b.phoneScore + b.addressScore) - (a.matchScore + a.phoneScore + a.addressScore)
            || a.distanceKm - b.distanceKm
        );
}

async function enrichPlaces(places, allPlaces, nearestHospital) {
    const enriched = [];
    for (const place of places) {
        const fallbackPhone = place.phone || findNearbyPhone(place, allPlaces) || nearestHospital?.phone || "";
        const fallbackAddress = place.address || await reverseLookupAddress(place) || nearestHospital?.address || "";
        enriched.push({
            ...place,
            phone: fallbackPhone,
            address: fallbackAddress
        });
    }
    return enriched;
}

function findNearbyPhone(place, allPlaces) {
    const sameName = allPlaces.find((candidate) =>
        candidate.phone
        && candidate.name.toLowerCase() === place.name.toLowerCase()
    );
    if (sameName) return sameName.phone;

    const nearestWithPhone = allPlaces
        .filter((candidate) => candidate.phone)
        .sort((a, b) =>
            haversineKm(place, { lat: a.lat, lng: a.lng }) - haversineKm(place, { lat: b.lat, lng: b.lng })
        )[0];
    return nearestWithPhone?.phone || "";
}

async function reverseLookupAddress(place) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${place.lat}&lon=${place.lng}`);
        if (!response.ok) return "";
        const data = await response.json();
        return data.display_name || "";
    } catch {
        return "";
    }
}

async function fetchNearestHospitalInfo() {
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(hospitalQuery(10000))}`;
    try {
        const response = await fetch(url);
        if (!response.ok) return null;
        const data = await response.json();
        const nearest = data.elements
            .map(toPlace)
            .filter(Boolean)
            .map((place) => ({
                ...place,
                distanceKm: haversineKm(state.source, { lat: place.lat, lng: place.lng })
            }))
            .sort((a, b) => a.distanceKm - b.distanceKm)[0];

        if (!nearest) return null;
        return {
            ...nearest,
            phone: nearest.phone || "",
            address: nearest.address || await reverseLookupAddress(nearest) || ""
        };
    } catch {
        return null;
    }
}

function buildHospitalOnlyReply(message, nearestHospital) {
    if (!nearestHospital) {
        return t("doctorsNone");
    }
    return `${t("nearestHospitalTitle")}:
${nearestHospital.name}
${nearestHospital.phone || t("doctorsPhoneMissing")}
${nearestHospital.address || t("doctorsAddressMissing")}

${t("doctorProblemPrefix")}: ${message}
${t("doctorLocationPrefix")}: ${state.source.lat.toFixed(5)}, ${state.source.lng.toFixed(5)}
${t("doctorLanguagePrefix")}: ${languageSelect.options[languageSelect.selectedIndex].text}`;
}

function shouldFindDoctors(message) {
    return hasAny(message.toLowerCase(), "doctor", "dr", "nearby", "nearest", "hospital", "clinic", "pain", "bleeding", "burn", "fever", "stroke", "heart", "breath", "saans", "doctor chahiye", "doctor chai", "ডাক্তার", "மருத்துவர்");
}

function classifySymptom(message) {
    const text = message.toLowerCase();
    if (hasAny(text, "heart", "chest", "cardio", "breath", "saans", "cardiac")) return "cardiology";
    if (hasAny(text, "burn", "skin", "rash", "derma")) return "dermatology";
    if (hasAny(text, "stroke", "seizure", "brain", "neuro", "बेहोश", "অচেতন", "மயக்கம்")) return "neurology";
    if (hasAny(text, "bleed", "bone", "fracture", "injury", "accident")) return "orthopaedics";
    if (hasAny(text, "fever", "infection", "vomit", "stomach")) return "general";
    return "general";
}

function filterDoctorsForSymptom(doctors, symptomProfile) {
    const keywordSets = {
        cardiology: ["cardio", "heart", "cardiology", "chest"],
        dermatology: ["skin", "derma", "burn"],
        neurology: ["neuro", "stroke", "brain"],
        orthopaedics: ["ortho", "trauma", "injury", "bone"],
        general: ["general", "physician", "clinic", "doctor"]
    };
    const keywords = keywordSets[symptomProfile] || keywordSets.general;
    return doctors.filter((doctor) => {
        const haystack = `${doctor.name} ${doctor.specialty} ${doctor.category}`.toLowerCase();
        return keywords.some((keyword) => haystack.includes(keyword));
    });
}

function buildReportDescription(data) {
    const parts = [
        data.title ? `${t("reportDescriptionTitle")}: ${data.title}` : "",
        data.severity ? `${t("reportDescriptionSeverity")}: ${data.severity}` : "",
        data.contact ? `${t("reportDescriptionContact")}: ${data.contact}` : "",
        data.affected ? `${t("reportDescriptionAffected")}: ${data.affected}` : "",
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

function openAssistant() {
    state.widgetOpen = true;
    aiCard.classList.add("open");
    widgetLauncher.classList.add("hidden");
}

function closeAssistant() {
    state.widgetOpen = false;
    aiCard.classList.remove("open");
    widgetLauncher.classList.remove("hidden");
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

function hasAny(message, ...words) {
    return words.some((word) => message.includes(word));
}

applyTranslations();

if (state.user) {
    showDashboard();
}


