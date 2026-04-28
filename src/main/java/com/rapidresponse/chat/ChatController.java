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
        String language = body.getOrDefault("language", "en").toLowerCase(Locale.ROOT);
        return Map.of("reply", responseFor(message, language));
    }

    private String responseFor(String message, String language) {
        String lang = supportedLanguage(language);
        if (hasAny(message, "road accident", "accident", "crash", "bike", "car", "scooter", "hit", "takra", "gir gaya", "road")) {
            return switch (lang) {
                case "hi" -> """
                        रोड एक्सीडेंट में तुरंत ये करें:

                        1. सबसे पहले जगह को सुरक्षित बनाएं, लेकिन गर्दन या पीठ की चोट का शक हो तो मरीज को जबरदस्ती न हिलाएं।
                        2. एम्बुलेंस को कॉल करें और अपनी लाइव लोकेशन शेयर करें।
                        3. मरीज होश में है या नहीं, और सांस ले रहा है या नहीं, यह जांचें।
                        4. खून बह रहा हो तो साफ कपड़े से सीधा दबाव दें।
                        5. हेलमेट लगा हो और गर्दन की चोट का शक हो तो हेलमेट जबरदस्ती न निकालें।
                        6. डॉक्टर की सलाह के बिना पानी, खाना या दवाई न दें।
                        """;
                case "bn" -> """
                        রোড অ্যাক্সিডেন্ট হলে এখনই যা করবেন:

                        1. জায়গাটি নিরাপদ করুন, তবে ঘাড় বা পিঠে আঘাতের সন্দেহ থাকলে রোগীকে জোর করে নড়াবেন না।
                        2. অ্যাম্বুলেন্সে কল করুন এবং লাইভ লোকেশন শেয়ার করুন।
                        3. রোগী সচেতন কি না এবং শ্বাস নিচ্ছে কি না দেখুন।
                        4. রক্তপাত হলে পরিষ্কার কাপড় দিয়ে সরাসরি চাপ দিন।
                        5. হেলমেট থাকলে এবং ঘাড়ে আঘাতের সন্দেহ থাকলে জোর করে খুলবেন না।
                        6. ডাক্তার না বলা পর্যন্ত পানি, খাবার বা ওষুধ দেবেন না।
                        """;
                case "ta" -> """
                        சாலை விபத்து என்றால் உடனே இதை செய்யுங்கள்:

                        1. சுற்றுப்புறம் பாதுகாப்பாக உள்ளதா பாருங்கள். கழுத்து அல்லது முதுகு காயம் சந்தேகம் இருந்தால் நோயாளியை அசைக்க வேண்டாம்.
                        2. ஆம்புலன்ஸை அழைத்து உங்கள் live location பகிருங்கள்.
                        3. நோயாளி விழித்திருக்கிறாரா, சுவாசிக்கிறாரா என்று பாருங்கள்.
                        4. ரத்தம் வந்தால் சுத்தமான துணியால் அழுத்தம் கொடுக்கவும்.
                        5. ஹெல்மெட் இருந்தால் மற்றும் neck injury சந்தேகம் இருந்தால் பலவந்தமாக அகற்றாதீர்கள்.
                        6. மருத்துவர் சொல்லும் வரை தண்ணீர், உணவு, மருந்து கொடுக்காதீர்கள்.
                        """;
                default -> """
                        Road accident emergency steps:

                        1. Make the scene safe, but do not force-move the patient if you suspect neck or back injury.
                        2. Call emergency services and share your live location.
                        3. Check if the patient is conscious and breathing.
                        4. If there is bleeding, apply firm pressure with a clean cloth.
                        5. Do not remove a helmet forcefully if neck injury is possible.
                        6. Do not give food, water, or medicine unless a clinician advises it.
                        """;
            };
        }
        if (hasAny(message, "cpr", "not breathing", "no breathing", "breathing nahi", "saans nahi", "pulse nahi")) {
            return switch (lang) {
                case "hi" -> """
                        CPR गाइडेंस:

                        1. तुरंत इमरजेंसी सर्विस को कॉल करें।
                        2. मरीज को आवाज देकर और कंधा थपथपाकर रिस्पॉन्स चेक करें।
                        3. सांस नहीं है तो छाती के बीच में तेज और लगातार कंप्रेशन दें।
                        4. रेट लगभग 100-120 कंप्रेशन प्रति मिनट रखें।
                        5. ट्रेनिंग हो तो 30 कंप्रेशन के बाद 2 रेस्क्यू ब्रीथ दें, वरना हैंड्स-ओनली CPR जारी रखें।
                        """;
                case "bn" -> """
                        CPR গাইডেন্স:

                        1. সঙ্গে সঙ্গে ইমার্জেন্সি সার্ভিসে কল করুন।
                        2. রোগী সাড়া দিচ্ছে কি না জোরে ডাকুন এবং কাঁধে ট্যাপ করুন।
                        3. শ্বাস না থাকলে বুকের মাঝখানে দ্রুত ও শক্ত চাপ দিন।
                        4. প্রতি মিনিটে প্রায় 100-120 কমপ্রেশন রাখুন।
                        5. ট্রেনিং থাকলে 30 কমপ্রেশনের পর 2 রেসকিউ ব্রেথ দিন, না হলে hands-only CPR চালিয়ে যান।
                        """;
                case "ta" -> """
                        CPR வழிகாட்டல்:

                        1. உடனே அவசர சேவைக்கு அழையுங்கள்.
                        2. நோயாளி பதில் தருகிறாரா என்று குரலில் அழைத்து தோளில் தொட்டு பாருங்கள்.
                        3. சுவாசம் இல்லையெனில் மார்பின் நடுப்பகுதியில் வேகமாக அழுத்தம் கொடுக்கவும்.
                        4. ஒரு நிமிடத்திற்கு 100-120 compression அளவில் தொடரவும்.
                        5. பயிற்சி இருந்தால் 30 compressionக்கு பின் 2 rescue breaths கொடுக்கலாம்; இல்லையெனில் hands-only CPR தொடரவும்.
                        """;
                default -> """
                        CPR guidance:

                        1. Call emergency services immediately.
                        2. Check response by speaking loudly and tapping the shoulder.
                        3. If the patient is not breathing, give hard and fast chest compressions in the center of the chest.
                        4. Keep the rate around 100-120 compressions per minute.
                        5. If trained, give 2 rescue breaths after every 30 compressions. Otherwise continue hands-only CPR.
                        """;
            };
        }
        if (hasAny(message, "chest", "heart", "heart attack", "breath", "breathing", "saans", "seene", "chati")) {
            return switch (lang) {
                case "hi" -> """
                        हार्ट या सांस की इमरजेंसी हो सकती है:

                        1. एम्बुलेंस को तुरंत कॉल करें।
                        2. मरीज को बैठाएं, आराम दें और टाइट कपड़े ढीले करें।
                        3. पहले से डॉक्टर द्वारा बताई गई दवा हो तभी दें।
                        4. मरीज बेहोश हो जाए या सांस बंद हो जाए तो CPR शुरू करें।
                        """;
                case "bn" -> """
                        এটি হার্ট বা শ্বাসকষ্টের ইমার্জেন্সি হতে পারে:

                        1. সঙ্গে সঙ্গে অ্যাম্বুলেন্সে কল করুন।
                        2. রোগীকে বসান, বিশ্রাম দিন, টাইট কাপড় ঢিলা করুন।
                        3. আগেই ডাক্তার বলে থাকলে তবেই নির্দিষ্ট ওষুধ দিন।
                        4. রোগী অচেতন হলে বা শ্বাস বন্ধ হলে CPR শুরু করুন।
                        """;
                case "ta" -> """
                        இது இதயம் அல்லது சுவாச அவசர நிலையாக இருக்கலாம்:

                        1. உடனே ஆம்புலன்ஸை அழையுங்கள்.
                        2. நோயாளியை உட்கார வைத்து ஓய்வு கொடுக்கவும், இறுக்கமான உடைகளை தளர்த்தவும்.
                        3. மருத்துவர் முன்பே கூறிய மருந்து இருந்தால் மட்டுமே கொடுக்கவும்.
                        4. நோயாளி மயங்கினால் அல்லது சுவாசம் நிறுத்தினால் CPR தொடங்கவும்.
                        """;
                default -> """
                        Possible heart or breathing emergency:

                        1. Call an ambulance immediately.
                        2. Sit the patient down, help them rest, and loosen tight clothing.
                        3. Only give previously prescribed medicine if the doctor has advised it.
                        4. Start CPR if the patient becomes unconscious or stops breathing.
                        """;
            };
        }
        if (hasAny(message, "bleed", "bleeding", "blood", "khoon", "injury", "zakhm")) {
            return switch (lang) {
                case "hi" -> """
                        ब्लीडिंग फर्स्ट-एड:

                        1. साफ कपड़े या गॉज से घाव पर सीधे दबाव दें।
                        2. कपड़ा भीग जाए तो उसके ऊपर दूसरा कपड़ा रखें, पहला न हटाएं।
                        3. चोट वाला हिस्सा संभव हो तो ऊपर रखें।
                        4. गहरा घाव, तेज ब्लीडिंग या सिर/गर्दन/छाती की चोट में तुरंत एम्बुलेंस बुलाएं।
                        """;
                case "bn" -> """
                        রক্তপাতের প্রাথমিক চিকিৎসা:

                        1. পরিষ্কার কাপড় বা গজ দিয়ে ক্ষতস্থানে চাপ দিন।
                        2. কাপড় ভিজে গেলে তার ওপর আরেকটি কাপড় দিন, প্রথমটি তুলবেন না।
                        3. সম্ভব হলে আহত অংশটি একটু উঁচুতে রাখুন।
                        4. গভীর ক্ষত, দ্রুত রক্তপাত বা মাথা/ঘাড়/বুকের আঘাতে সঙ্গে সঙ্গে অ্যাম্বুলেন্স ডাকুন।
                        """;
                case "ta" -> """
                        இரத்தப்போக்கு முதல் உதவி:

                        1. சுத்தமான துணி அல்லது gauze வைத்து காயத்தின் மேல் அழுத்தம் கொடுக்கவும்.
                        2. துணி நனைந்தால் அதற்கு மேல் இன்னொரு துணி வையுங்கள்; முதல் துணியை எடுக்காதீர்கள்.
                        3. சாத்தியமானால் காயமடைந்த பகுதியை உயர்த்தி வையுங்கள்.
                        4. ஆழமான காயம், அதிக ரத்தப்போக்கு அல்லது தலை/கழுத்து/மார்பு காயம் இருந்தால் உடனே ஆம்புலன்ஸ் அழையுங்கள்.
                        """;
                default -> """
                        Bleeding first aid:

                        1. Apply firm direct pressure with a clean cloth or gauze.
                        2. If the cloth soaks through, place another one on top and keep pressing.
                        3. Raise the injured area if possible.
                        4. Call an ambulance for deep wounds, heavy bleeding, or head, neck, or chest injury.
                        """;
            };
        }
        if (hasAny(message, "burn", "burns", "jala", "jal gaya", "fire", "acid")) {
            return switch (lang) {
                case "hi" -> """
                        जलने पर तुरंत ये करें:

                        1. जले हिस्से को 20 मिनट तक ठंडे बहते पानी से ठंडा करें।
                        2. बर्फ, टूथपेस्ट, तेल या घरेलू लेप न लगाएं।
                        3. टाइट ज्वेलरी या कपड़े हटाएं अगर त्वचा से चिपके न हों।
                        4. साफ non-stick कपड़े से हल्के से ढकें।
                        """;
                case "bn" -> """
                        পোড়া হলে এখনই যা করবেন:

                        1. পোড়া জায়গায় 20 মিনিট ঠান্ডা পানি দিন।
                        2. বরফ, টুথপেস্ট, তেল বা ঘরোয়া কিছু লাগাবেন না।
                        3. ত্বকে লেগে না থাকলে টাইট গয়না বা কাপড় খুলে দিন।
                        4. পরিষ্কার non-stick কাপড় দিয়ে আলতোভাবে ঢেকে রাখুন।
                        """;
                case "ta" -> """
                        தீக்காயம் என்றால் உடனே இதை செய்யுங்கள்:

                        1. தீக்காயம் ஏற்பட்ட இடத்தை 20 நிமிடம் குளிர்ந்த ஓடும் நீரில் குளிர்விக்கவும்.
                        2. ஐஸ், பற்பசை, எண்ணெய் அல்லது வீட்டுவைதியம் எதையும் போடாதீர்கள்.
                        3. தோலில் ஒட்டிக்கொள்ளவில்லை என்றால் இறுக்கமான ஆபரணம் அல்லது உடைகளை அகற்றவும்.
                        4. சுத்தமான non-stick துணியால் மெதுவாக மூடவும்.
                        """;
                default -> """
                        Burn first aid:

                        1. Cool the burned area under cool running water for 20 minutes.
                        2. Do not apply ice, toothpaste, oil, or home remedies.
                        3. Remove tight jewelry or clothing if it is not stuck to the skin.
                        4. Cover the burn loosely with a clean non-stick cloth.
                        """;
            };
        }
        if (hasAny(message, "unconscious", "behosh", "faint", "not responding")) {
            return switch (lang) {
                case "hi" -> """
                        बेहोश मरीज के लिए:

                        1. तुरंत इमरजेंसी सर्विस को कॉल करें।
                        2. सांस चेक करें। सांस नहीं है तो CPR शुरू करें।
                        3. सांस है तो मरीज को रिकवरी पोजिशन में करवट दिलाएं।
                        4. मुंह में दिखने वाली रुकावट हो तो सावधानी से हटाएं।
                        """;
                case "bn" -> """
                        অচেতন রোগীর জন্য:

                        1. সঙ্গে সঙ্গে ইমার্জেন্সি সার্ভিসে কল করুন।
                        2. শ্বাস পরীক্ষা করুন। শ্বাস না থাকলে CPR শুরু করুন।
                        3. শ্বাস থাকলে recovery position-এ পাশ ফিরিয়ে রাখুন।
                        4. মুখে দৃশ্যমান বাধা থাকলে সাবধানে সরান।
                        """;
                case "ta" -> """
                        மயங்கிய நோயாளிக்காக:

                        1. உடனே அவசர சேவையை அழையுங்கள்.
                        2. சுவாசம் இருக்கிறதா பாருங்கள். இல்லையெனில் CPR தொடங்குங்கள்.
                        3. சுவாசம் இருந்தால் recovery position-ல் பக்கமாக திருப்பி வையுங்கள்.
                        4. வாயில் தெரியும் தடையிருந்தால் கவனமாக அகற்றுங்கள்.
                        """;
                default -> """
                        For an unconscious person:

                        1. Call emergency services right away.
                        2. Check breathing. If there is no breathing, start CPR.
                        3. If breathing is present, place the patient in the recovery position.
                        4. Remove visible blockage from the mouth carefully.
                        """;
            };
        }
        if (hasAny(message, "stroke", "face droop", "arm weakness", "speech", "lakwa", "paralysis")) {
            return switch (lang) {
                case "hi" -> """
                        स्ट्रोक के संकेत:

                        1. FAST चेक करें: Face drooping, Arm weakness, Speech problem, Time to call ambulance.
                        2. लक्षण कब शुरू हुए, समय नोट करें।
                        3. मरीज को खाना, पानी या दवाई न दें।
                        4. स्ट्रोक-रेडी अस्पताल के लिए तुरंत निकलें।
                        """;
                case "bn" -> """
                        স্ট্রোকের সতর্ক সংকেত:

                        1. FAST চেক করুন: Face drooping, Arm weakness, Speech problem, Time to call ambulance.
                        2. উপসর্গ কখন শুরু হয়েছে সেটার সময় লিখে রাখুন।
                        3. রোগীকে খাবার, পানি বা ওষুধ দেবেন না।
                        4. দ্রুত stroke-ready হাসপাতালে নিয়ে যান।
                        """;
                case "ta" -> """
                        ஸ்ட்ரோக் எச்சரிக்கை அறிகுறிகள்:

                        1. FAST பாருங்கள்: Face drooping, Arm weakness, Speech problem, Time to call ambulance.
                        2. அறிகுறி தொடங்கிய நேரத்தை பதிவு செய்யுங்கள்.
                        3. நோயாளிக்கு உணவு, தண்ணீர், மருந்து கொடுக்காதீர்கள்.
                        4. உடனே stroke-ready மருத்துவமனைக்கு செல்லுங்கள்.
                        """;
                default -> """
                        Stroke warning signs:

                        1. Use FAST: Face drooping, Arm weakness, Speech problem, Time to call an ambulance.
                        2. Note the exact time the symptoms started.
                        3. Do not give food, water, or medicine.
                        4. Move urgently toward a stroke-ready hospital.
                        """;
            };
        }
        if (hasAny(message, "fever", "temperature", "bukhar", "infection", "vomit", "diarrhea")) {
            return switch (lang) {
                case "hi" -> """
                        बुखार या इन्फेक्शन गाइडेंस:

                        1. तापमान नोट करें और शरीर को हाइड्रेट रखें।
                        2. भ्रम, सांस की दिक्कत, बहुत तेज बुखार, डिहाइड्रेशन, या दौरा हो तो तुरंत डॉक्टर से मिलें।
                        3. एलर्जी, गर्भावस्था, बच्चों या गंभीर बीमारी में बिना सलाह दवा न लें।
                        """;
                case "bn" -> """
                        জ্বর বা সংক্রমণের জন্য গাইডেন্স:

                        1. তাপমাত্রা লিখে রাখুন এবং পর্যাপ্ত পানি দিন।
                        2. বিভ্রান্তি, শ্বাসকষ্ট, খুব বেশি জ্বর, ডিহাইড্রেশন বা খিঁচুনি হলে দ্রুত ডাক্তার দেখান।
                        3. অ্যালার্জি, গর্ভাবস্থা, শিশু বা গুরুতর অসুস্থতায় পরামর্শ ছাড়া ওষুধ দেবেন না।
                        """;
                case "ta" -> """
                        காய்ச்சல் அல்லது infection வழிகாட்டல்:

                        1. வெப்பநிலையை பதிவு செய்து fluids கொடுக்கவும்.
                        2. குழப்பம், சுவாச சிரமம், அதிக காய்ச்சல், dehydration அல்லது fits இருந்தால் உடனே மருத்துவரை காணுங்கள்.
                        3. allergy, pregnancy, குழந்தை அல்லது கடுமையான நோயில் ஆலோசனை இல்லாமல் மருந்து கொடுக்காதீர்கள்.
                        """;
                default -> """
                        Fever or infection guidance:

                        1. Note the temperature and give fluids.
                        2. Seek urgent care for confusion, breathing difficulty, very high fever, dehydration, or seizures.
                        3. Avoid self-medication in children, pregnancy, allergies, or chronic illness without advice.
                        """;
            };
        }
        if (hasAny(message, "ambulance", "hospital", "doctor", "nearest", "blood bank", "pharmacy", "clinic")) {
            return switch (lang) {
                case "hi" -> "मैं आपको तुरंत गाइड करूंगी। चैट के साथ लोकेशन शेयर करें, फिर मैं नजदीकी डॉक्टर, क्लिनिक या अस्पताल के नंबर भी दिखाऊंगी।";
                case "bn" -> "আমি সঙ্গে সঙ্গে সাহায্য করব। চ্যাটে লোকেশন শেয়ার করুন, তারপর আমি কাছাকাছি ডাক্তার, ক্লিনিক বা হাসপাতালের নম্বরও দেখাব।";
                case "ta" -> "நான் உடனே உதவுவேன். சாட்டில் இடத்தை பகிருங்கள், அப்புறம் அருகிலுள்ள டாக்டர், கிளினிக், மருத்துவமனை எண்களையும் காட்டுவேன்.";
                default -> "I can help right away. Share your location in chat and I will guide you with nearby doctors, clinics, and hospital contact numbers.";
            };
        }

        return switch (lang) {
            case "hi" -> """
                    अपनी समस्या आसान शब्दों में बताइए, जैसे:
                    - रोड एक्सीडेंट हो गया
                    - बहुत खून बह रहा है
                    - सांस नहीं आ रही
                    - सीने में दर्द है
                    - नजदीकी डॉक्टर चाहिए

                    अगर स्थिति जानलेवा है, तो तुरंत इमरजेंसी सर्विस को कॉल करें।
                    """;
            case "bn" -> """
                    সমস্যাটা সহজভাবে বলুন, যেমন:
                    - রোড অ্যাক্সিডেন্ট হয়েছে
                    - অনেক রক্তপাত হচ্ছে
                    - শ্বাস নিতে পারছে না
                    - বুকে ব্যথা
                    - কাছাকাছি ডাক্তার চাই

                    যদি অবস্থা গুরুতর হয়, সঙ্গে সঙ্গে ইমার্জেন্সি সার্ভিসে কল করুন।
                    """;
            case "ta" -> """
                    உங்கள் பிரச்சனையை எளிய வார்த்தையில் சொல்லுங்கள்:
                    - சாலை விபத்து நடந்தது
                    - அதிக இரத்தப்போக்கு உள்ளது
                    - சுவாசிக்க முடியவில்லை
                    - மார்பு வலி உள்ளது
                    - அருகிலுள்ள டாக்டர் வேண்டும்

                    நிலை ஆபத்தானது என்றால் உடனே அவசர சேவைக்கு அழையுங்கள்.
                    """;
            default -> """
                    Tell me the emergency in simple words, for example:
                    - There was a road accident
                    - There is heavy bleeding
                    - The patient is not breathing
                    - There is chest pain
                    - I need a nearby doctor

                    If the situation is life-threatening, call emergency services immediately.
                    """;
        };
    }

    private String supportedLanguage(String language) {
        return switch (language) {
            case "hi", "bn", "ta", "en" -> language;
            default -> "en";
        };
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
