package com.rapidresponse.chat;

import java.util.Locale;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin
public class ChatController {
    @PostMapping
    public Map<String, String> chat(@RequestBody Map<String, String> body) {
        String message = body.getOrDefault("message", "").toLowerCase(Locale.ROOT);
        return Map.of("reply", responseFor(message));
    }

    private String responseFor(String message) {
        if (hasAny(message, "road accident", "accident", "crash", "bike", "car", "scooter", "hit", "takra", "takra gaya", "gir gaya", "gir gya", "ho gaya", "ho gya")) {
            return """
                    Road accident emergency steps:

                    1. Sabse pehle traffic se side/safe jagah par jao, lekin agar neck/back injury ka doubt ho to patient ko move mat karo.
                    2. Emergency number/ambulance ko call karo and exact live location share karo.
                    3. Check karo patient conscious hai ya nahi, breathing normal hai ya nahi.
                    4. Bleeding ho rahi hai to clean cloth se direct pressure lagao.
                    5. Helmet pehna hai aur neck injury ka doubt hai to helmet forcefully mat nikalo.
                    6. Patient ko pani/food/medicine mat do jab tak doctor/ambulance guide na kare.
                    7. Dashboard me Report Emergency Now dabao taaki location aur details save ho jaye.
                    """;
        }
        if (hasAny(message, "cpr", "not breathing", "no breathing", "breathing nahi", "saans nahi", "pulse nahi")) {
            return """
                    CPR guidance:

                    1. Emergency services ko turant call karo.
                    2. Patient response check karo: loudly bolo aur shoulder tap karo.
                    3. Breathing nahi hai to chest ke center par hard and fast compressions do.
                    4. Rate: about 100-120 compressions per minute, depth about 5-6 cm for adult.
                    5. Agar trained ho to 30 compressions ke baad 2 rescue breaths do. Trained nahi ho to hands-only CPR continue karo.
                    6. CPR tab tak continue karo jab tak ambulance, AED, ya trained help na aa jaye.
                    """;
        }
        if (hasAny(message, "chest", "heart", "heart attack", "breath", "breathing", "saans", "seene", "chati")) {
            return """
                    Possible heart/breathing emergency:

                    1. Ambulance ko turant call karo.
                    2. Patient ko baithao, rest karne do, tight clothes loosen karo.
                    3. Agar doctor ne aspirin/nitroglycerin pehle prescribe ki hai tabhi use follow karo.
                    4. Patient unconscious ya breathing stop ho jaye to CPR start karo.
                    5. Live location share karo and nearest hospital destination set karo.
                    """;
        }
        if (hasAny(message, "bleed", "bleeding", "blood", "khoon", "cut", "injury", "zakhm")) {
            return """
                    Bleeding first aid:

                    1. Clean cloth/gauze se wound par firm direct pressure lagao.
                    2. Cloth blood se soak ho jaye to uske upar dusra cloth rakho, pehla mat hatao.
                    3. Injured part ko possible ho to heart level se upar rakho.
                    4. Deep wound, fast bleeding, ya head/neck/chest injury ho to ambulance call karo.
                    5. Wound me fasa object ho to object mat nikalo, uske around pressure lagao.
                    """;
        }
        if (hasAny(message, "burn", "burns", "jala", "jal gaya", "fire", "acid")) {
            return """
                    Burn first aid:

                    1. Burn area ko clean running water ke neeche 20 minutes tak cool karo.
                    2. Ice, toothpaste, oil, butter, haldi, cream mat lagao.
                    3. Tight jewellery/clothes remove karo agar skin se chipke nahi hain.
                    4. Clean non-stick cloth se loosely cover karo.
                    5. Face, hand, private part, chemical/electric burn, ya large burn ho to urgent hospital jao.
                    """;
        }
        if (hasAny(message, "unconscious", "behosh", "faint", "chakkar", "not responding")) {
            return """
                    Unconscious person:

                    1. Emergency services ko call karo.
                    2. Breathing check karo. Breathing nahi hai to CPR start karo.
                    3. Breathing hai to recovery position me side par rakho.
                    4. Mouth me visible blockage ho to carefully remove karo, blind finger sweep mat karo.
                    5. Food, water, medicine mat do.
                    """;
        }
        if (hasAny(message, "stroke", "face droop", "arm weakness", "speech", "bol nahi", "lakwa", "paralysis")) {
            return """
                    Stroke warning signs:

                    1. FAST check karo: Face drooping, Arm weakness, Speech problem, Time to call ambulance.
                    2. Symptoms ka exact start time note karo.
                    3. Patient ko food/water/medicine mat do.
                    4. Patient ko rest position me rakho and urgent stroke-ready hospital le jao.
                    """;
        }
        if (hasAny(message, "fever", "temperature", "bukhar", "infection", "vomit", "diarrhea")) {
            return """
                    Fever/infection guidance:

                    1. Temperature note karo and fluids do.
                    2. Confusion, breathing difficulty, stiff neck, blue lips, dehydration, seizure, ya very high fever ho to urgent care lo.
                    3. Self-medication avoid karo if allergy, pregnancy, kidney/liver disease, or child patient.
                    """;
        }
        if (hasAny(message, "ambulance", "hospital", "doctor", "nearest", "blood bank", "pharmacy")) {
            return "Use Live Map Tracking to set the hospital destination. Press SOS Location to update your current location, then Report Emergency Now to save the case and distance.";
        }
        return """
                Tell me the emergency in simple words, for example:
                - Road accident ho gaya
                - Bleeding ho rahi hai
                - Patient saans nahi le raha
                - Chest pain hai
                - Burn injury hai

                If the situation is life-threatening, call emergency services immediately and share live location.
                """;
    }

    private boolean hasAny(String message, String... words) {
        for (String word : words) {
            if (message.contains(word)) {
                return true;
            }
        }
        return false;
    }
}
