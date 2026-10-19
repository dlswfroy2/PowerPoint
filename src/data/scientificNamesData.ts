/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ScientificNameItem {
  id: number;
  bengaliName: string;
  scientificName: string;
  bengaliPronunciation: string;
  category: 
    | 'জাতীয় প্রতীক'
    | 'খাদ্যশস্য ও তৈলবীজ'
    | 'ফলমূল'
    | 'শাকসবজি ও কন্দ'
    | 'মসলা জাতীয় উদ্ভিদ'
    | 'ঔষধি ও ভেষজ উদ্ভিদ'
    | 'ফুল ও শোভাবর্ধক'
    | 'বনজ ও কাষ্ঠল বৃক্ষ'
    | 'স্তন্যপায়ী প্রাণী'
    | 'পাখি'
    | 'মাছ ও জলজ প্রাণী'
    | 'উভচর ও সরীসৃপ'
    | 'সন্ধিপদী ও কীটপতঙ্গ'
    | 'অণুজীব ও ব্যাকটেরিয়া'
    | 'ছত্রাক ও শৈবাল';
  importance: string;
}

export const SCIENTIFIC_NAMES_DIRECTORY: ScientificNameItem[] = [
  {
    id: 1,
    bengaliName: "রয়েল বেঙ্গল টাইগার",
    scientificName: "Panthera tigris",
    bengaliPronunciation: "প্যান্থেরা টাইগ্রিস",
    category: "জাতীয় প্রতীক",
    importance: "বাংলাদেশের জাতীয় পশু; সুন্দরবনের শীর্ষ খাদক ও প্রকৃতির ভারসাম্য রক্ষক।"
  },
  {
    id: 2,
    bengaliName: "দোয়েল",
    scientificName: "Copsychus saularis",
    bengaliPronunciation: "কপসাইকাস সলারিস",
    category: "জাতীয় প্রতীক",
    importance: "বাংলাদেশের জাতীয় পাখি; সুললিত শিষ ও গানের জন্য খ্যাত সুন্দর পতঙ্গভুক পাখি।"
  },
  {
    id: 3,
    bengaliName: "শাপলা (সাদা শাপলা)",
    scientificName: "Nymphaea nouchali",
    bengaliPronunciation: "নিম্ফিয়া নৌচালি",
    category: "জাতীয় প্রতীক",
    importance: "বাংলাদেশের জাতীয় ফুল; মিঠাপানির জলজ বহুবর্ষজীবী নয়নজুড়ানো উদ্ভিদ।"
  },
  {
    id: 4,
    bengaliName: "কাঁঠাল",
    scientificName: "Artocarpus heterophyllus",
    bengaliPronunciation: "আর্টোকার্পাস হেটেরোফাইলাস",
    category: "জাতীয় প্রতীক",
    importance: "বাংলাদেশের জাতীয় ফল; পুষ্টিকর দানাদার যৌগিক ফল ও মূল্যবান কাষ্ঠল বৃক্ষ।"
  },
  {
    id: 5,
    bengaliName: "ইলিশ",
    scientificName: "Tenualosa ilisha",
    bengaliPronunciation: "টেনুয়ালোসা ইলিশা",
    category: "জাতীয় প্রতীক",
    importance: "বাংলাদেশের জাতীয় মাছ; প্রজননে নদীতে আসা রূপালী চকচকে ঐতিহ্যবাহী মাছ।"
  },
  {
    id: 6,
    bengaliName: "মানুষ",
    scientificName: "Homo sapiens",
    bengaliPronunciation: "হোমো সেপিয়েন্স",
    category: "জাতীয় প্রতীক",
    importance: "দ্বিপদী চলন ও সর্বাপেক্ষা উন্নত মস্তিষ্কসম্পন্ন আধুনিক বুদ্ধিমান মানবজাতি।"
  },
  {
    id: 7,
    bengaliName: "পাট (দেশি পাট)",
    scientificName: "Corchorus capsularis",
    bengaliPronunciation: "কোরকোরাস ক্যাপসুলারিস",
    category: "জাতীয় প্রতীক",
    importance: "সোনালী আঁশ উৎপাদনকারী বাংলাদেশের প্রধান ঐতিহ্যবাহী অর্থকরী উদ্ভিদ।"
  },
  {
    id: 8,
    bengaliName: "তোষা পাট",
    scientificName: "Corchorus olitorius",
    bengaliPronunciation: "কোরকোরাস ওলিটোরিয়াস",
    category: "জাতীয় প্রতীক",
    importance: "উচ্চমানের মসৃণ চকচকে আঁশ ও পুষ্টিকর শাক হিসেবে ব্যবহৃত উদ্ভিদ।"
  },
  {
    id: 9,
    bengaliName: "ধান",
    scientificName: "Oryza sativa",
    bengaliPronunciation: "ওরাইজা স্যাটাইভা",
    category: "জাতীয় প্রতীক",
    importance: "বাঙালি জাতির প্রধান খাদ্যশস্য এবং প্রধানতম কৃষি ভিত্তি।"
  },
  {
    id: 10,
    bengaliName: "চা গাছ",
    scientificName: "Camellia sinensis",
    bengaliPronunciation: "ক্যামেলিয়া সাইনেনসিস",
    category: "জাতীয় প্রতীক",
    importance: "অর্থকরী পানীয় ফসল; উত্তর ও পূর্বাঞ্চলের সমৃদ্ধ রপ্তানিমুখী চা শিল্প।"
  },
  {
    id: 11,
    bengaliName: "গম",
    scientificName: "Triticum aestivum",
    bengaliPronunciation: "ট্রিটিকাম এসটিভাম",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "বিশ্বের অন্যতম প্রধান দানাদার খাদ্যশস্য; রুটি ও আটার মূল উৎস।"
  },
  {
    id: 12,
    bengaliName: "ভুট্টা",
    scientificName: "Zea mays",
    bengaliPronunciation: "জিয়া মেইজ",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "উচ্চ পুষ্টিসমৃদ্ধ C4 খাদ্যশস্য, পশুখাদ্য ও কর্নফ্লাওয়ার প্রস্তুতকারক।"
  },
  {
    id: 13,
    bengaliName: "যব / বার্লি",
    scientificName: "Hordeum vulgare",
    bengaliPronunciation: "হর্ডিয়াম ভালগেয়ার",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "সহজপাচ্য খাদ্যশস্য ও মল্ট উৎপাদনে ব্যবহৃত ঐতিহ্যবাহী দানাশস্য।"
  },
  {
    id: 14,
    bengaliName: "জোয়ার",
    scientificName: "Sorghum bicolor",
    bengaliPronunciation: "সরগাম বাইকালার",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "খরা-সহনশীল দানাদার পুষ্টিকর খাদ্য ও পশুখাদ্য।"
  },
  {
    id: 15,
    bengaliName: "বাজরা",
    scientificName: "Pennisetum glaucum",
    bengaliPronunciation: "পেনিসেটাম গ্লকম",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "ক্ষুদ্র দানাশস্য (মিলেট); আয়রন ও জিঙ্ক সমৃদ্ধ শক্তিবর্ধক খাদ্য।"
  },
  {
    id: 16,
    bengaliName: "কাউন",
    scientificName: "Setaria italica",
    bengaliPronunciation: "সিটেরিয়া ইটালিকা",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "ক্ষুদ্র দানাদার খাদ্যশস্য; সুস্বাদু পায়েস ও পিঠার জনপ্রিয় উপকরণ।"
  },
  {
    id: 17,
    bengaliName: "চিনা",
    scientificName: "Panicum miliaceum",
    bengaliPronunciation: "প্যানিকাম মিলিয়াসিয়াম",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "ঐতিহ্যবাহী শুষ্ক অঞ্চলের পুষ্টিকর ক্ষুদ্র দানাশস্য।"
  },
  {
    id: 18,
    bengaliName: "মসুর ডাল",
    scientificName: "Lens culinaris",
    bengaliPronunciation: "লেন্স কুলিনারিস",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "বাঙালির প্রধান প্রোটিনসমৃদ্ধ ডাল ফসল ও আমিষের মূল উৎস।"
  },
  {
    id: 19,
    bengaliName: "ছোলা / বুট",
    scientificName: "Cicer arietinum",
    bengaliPronunciation: "সিসের এরিটিনাম",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "উচ্চমানের উদ্ভিদ আমিষ, ফলিক এসিড ও ফাইবারযুক্ত পুষ্টিকর ডাল।"
  },
  {
    id: 20,
    bengaliName: "মুগ ডাল",
    scientificName: "Vigna radiata",
    bengaliPronunciation: "ভিগনা রেডিয়েটা",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "সহজপাচ্য পুষ্টিকর ডাল ও সুস্বাদু খিচুড়ির প্রধান উপকরণ।"
  },
  {
    id: 21,
    bengaliName: "মাষকলাই",
    scientificName: "Vigna mungo",
    bengaliPronunciation: "ভিগনা মুঙ্গো",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "সুস্বাদু ডাল, পিঠা ও মিষ্টি তৈরির সুপরিচিত লেগুমিনাস শস্য।"
  },
  {
    id: 22,
    bengaliName: "খেসারি ডাল",
    scientificName: "Lathyrus sativus",
    bengaliPronunciation: "ল্যাথাইরাস স্যাটাইভাস",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "সহনশীল ডাল ও পশুখাদ্য; অতিরিক্ত গ্রহণে ল্যাথাইরিজম হতে পারে।"
  },
  {
    id: 23,
    bengaliName: "মটরশুঁটি",
    scientificName: "Pisum sativum",
    bengaliPronunciation: "পিসাম স্যাটাইভাম",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "মেন্ডেলের বংশগতি গবেষণার মডেল উদ্ভিদ ও সুস্বাদু শীতকালীন ডাল।"
  },
  {
    id: 24,
    bengaliName: "অড়হর",
    scientificName: "Cajanus cajan",
    bengaliPronunciation: "কাজানাস কাজান",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "পুষ্টিকর ডাল ও জমির উর্বরতা বৃদ্ধিকারী নাইট্রোজেন সংবন্ধনকারী উদ্ভিদ।"
  },
  {
    id: 25,
    bengaliName: "সয়াবিন",
    scientificName: "Glycine max",
    bengaliPronunciation: "গ্লাইসিন ম্যাক্স",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "উচ্চমানের প্রোটিন (৪০%) এবং ভোজ্য তেলের সমৃদ্ধতম বৈশ্বিক উৎস।"
  },
  {
    id: 26,
    bengaliName: "শ্বেত সরিষা",
    scientificName: "Sinapis alba",
    bengaliPronunciation: "সিনাপিস আলবা",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "তেল ও ঝাঁঝালো মসলা তৈরিতে ব্যবহৃত ঔষধি তেলবীজ।"
  },
  {
    id: 27,
    bengaliName: "টরি সরিষা (মাঘী সরিষা)",
    scientificName: "Brassica campestris",
    bengaliPronunciation: "ব্রাসিকা ক্যাম্পেসট্রিস",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "বাংলাদেশের প্রধান ভোজ্য তেল উৎপাদনকারী ঐতিহ্যবাহী শীতকালীন ফসল।"
  },
  {
    id: 28,
    bengaliName: "রাই সরিষা",
    scientificName: "Brassica juncea",
    bengaliPronunciation: "ব্রাসিকা জুনসিয়া",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "উচ্চ ফলনশীল ঝাঁঝালো ভোজ্য তেলবীজ ও সবুজ শাক।"
  },
  {
    id: 29,
    bengaliName: "তিল",
    scientificName: "Sesamum indicum",
    bengaliPronunciation: "সিসামাম ইন্ডিকাম",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "পুষ্টিকর তৈলবীজ; অ্যান্টিঅক্সিডেন্ট ও মিষ্টি তৈরিতে ব্যবহৃত।"
  },
  {
    id: 30,
    bengaliName: "সূর্যমুখী",
    scientificName: "Helianthus annuus",
    bengaliPronunciation: "হ্যালিয়ান্থাস অ্যানুয়াস",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "হৃদবান্ধব আনস্যাচুরেটেড ফ্যাট সমৃদ্ধ স্বাস্থ্যকর ভোজ্য তেল।"
  },
  {
    id: 31,
    bengaliName: "চিনাবাদাম",
    scientificName: "Arachis hypogaea",
    bengaliPronunciation: "অ্যারাচিস হাইপোজিয়া",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "মাটির নিচে ফল উৎপাদনকারী প্রোটিন ও স্নেহসমৃদ্ধ তৈলবীজ।"
  },
  {
    id: 32,
    bengaliName: "তিসি",
    scientificName: "Linum usitatissimum",
    bengaliPronunciation: "লিনাম ইউসিটাটিসিমাম",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "ওমেগা-৩ ফ্যাটি এসিড সমৃদ্ধ তেল ও ফ্ল্যাক্স আঁশ উৎপাদনকারী উদ্ভিদ।"
  },
  {
    id: 33,
    bengaliName: "কুসুম ফুল (কুসুম তেলবীজ)",
    scientificName: "Carthamus tinctorius",
    bengaliPronunciation: "কার্থামাস টিঙ্কটোরিয়াস",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "ভোজ্য তেল ও প্রাকৃতিক রঞ্জক পদার্থ নিষ্কাশনে ব্যবহৃত।"
  },
  {
    id: 34,
    bengaliName: "ক্যানোলা / রেপসিড",
    scientificName: "Brassica napus",
    bengaliPronunciation: "ব্রাসিকা ন্যাপাস",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "নিম্ন ইউরুসিক এসিডযুক্ত স্বাস্থ্যকর ভোজ্য তেলের আন্তর্জাতিক ফসল।"
  },
  {
    id: 35,
    bengaliName: "রেড়ি / ক্যাস্টর",
    scientificName: "Ricinus communis",
    bengaliPronunciation: "রিসিনাস কমিউনিস",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "রেড়ির তেল (ক্যাস্টর অয়েল); লুব্রিকেন্ট ও রেচক ওষুধ হিসেবে ব্যবহৃত।"
  },
  {
    id: 36,
    bengaliName: "কার্পাস তুলা",
    scientificName: "Gossypium herbaceum",
    bengaliPronunciation: "গসিপিয়াম হার্বেসিয়াম",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "বস্ত্রশিল্পের মূল প্রাকৃতিক তন্তু এবং উপজাত হিসেবে তুলার বীজ তেল।"
  },
  {
    id: 37,
    bengaliName: "আমেরিকান তুলা",
    scientificName: "Gossypium hirsutum",
    bengaliPronunciation: "গসিপিয়াম হিরসুটাম",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "উচ্চ উৎপাদনশীল দীর্ঘ আঁশযুক্ত আন্তর্জাতিক তুলার প্রধান প্রজাতি।"
  },
  {
    id: 38,
    bengaliName: "ইক্ষু / আখ",
    scientificName: "Saccharum officinarum",
    bengaliPronunciation: "স্যাকারাম অফিসিনারাম",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "চিনি ও গুড়ের প্রধান কাঁচামাল; বৃহৎ বহুবর্ষজীবী মিষ্টি ঘাস।"
  },
  {
    id: 39,
    bengaliName: "চিনি বিট",
    scientificName: "Beta vulgaris",
    bengaliPronunciation: "বিটা ভালগারিস",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "চিনির দ্বিতীয় প্রধান বৈশ্বিক উৎস ও পুষ্টিকর অ্যান্টিঅক্সিডেন্ট মূল।"
  },
  {
    id: 40,
    bengaliName: "মেসতা পাট",
    scientificName: "Hibiscus sabdariffa",
    bengaliPronunciation: "হিবিসকাস সাবডারিফা",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "আঁশ উৎপাদনকারী উদ্ভিদ এবং এর বৃতি দিয়ে সুস্বাদু টক চা তৈরি হয়।"
  },
  {
    id: 41,
    bengaliName: "শনপাট",
    scientificName: "Crotalaria juncea",
    bengaliPronunciation: "ক্রোটালারিয়া জুনসিয়া",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "দড়ি ও কাগজ তৈরির আঁশ এবং জমিতে সবুজ সার (Green manure)।"
  },
  {
    id: 42,
    bengaliName: "ঢ্যাঁড়শ বীজ",
    scientificName: "Abelmoschus esculentus",
    bengaliPronunciation: "অ্যাবেলমোসকাস এসকুলেন্টাস",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "পুষ্টিকর সবজি এবং এর কাণ্ড থেকে মজবুত আঁশ তৈরি করা যায়।"
  },
  {
    id: 43,
    bengaliName: "রামতিল",
    scientificName: "Guizotia abyssinica",
    bengaliPronunciation: "গুইজোটিয়া এবিসিনিকা",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "ভোজ্য তেল ও পাখির পুষ্টিকর খাদ্য তৈরিতে ব্যবহৃত তেলবীজ।"
  },
  {
    id: 44,
    bengaliName: "চিয়া সিড",
    scientificName: "Salvia hispanica",
    bengaliPronunciation: "সালভিয়া হিসপানিকা",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "সুপারফুড; ওমেগা-৩ ও উচ্চ দ্রবণীয় ফাইবারযুক্ত আধুনিক খাদ্যবীজ।"
  },
  {
    id: 45,
    bengaliName: "কিনোয়া",
    scientificName: "Chenopodium quinoa",
    bengaliPronunciation: "চেনোপোডিয়াম কিনোয়া",
    category: "খাদ্যশস্য ও তৈলবীজ",
    importance: "সম্পূর্ণ উদ্ভিদ প্রোটিনসমৃদ্ধ গ্লুটেন-মুক্ত প্রাচীন পুষ্টিকর দানা।"
  },
  {
    id: 46,
    bengaliName: "আম",
    scientificName: "Mangifera indica",
    bengaliPronunciation: "ম্যাঞ্জিফেরা ইন্ডিকা",
    category: "ফলমূল",
    importance: "ফলের রাজা; সুমিষ্ট রসালো ফল ও সমৃদ্ধ ভিটামিন এ-এর চমৎকার উৎস।"
  },
  {
    id: 47,
    bengaliName: "কলা (কাঁচকলা)",
    scientificName: "Musa paradisiaca",
    bengaliPronunciation: "মুসা প্যারাডিসিয়াকা",
    category: "ফলমূল",
    importance: "সবজি হিসেবে রান্না করে খাওয়া আয়রনসমৃদ্ধ ঐতিহ্যবাহী কলা।"
  },
  {
    id: 48,
    bengaliName: "কলা (পাকাকলা)",
    scientificName: "Musa sapientum",
    bengaliPronunciation: "মুসা স্যাপিয়েনটাম",
    category: "ফলমূল",
    importance: "সহজলভ্য শক্তি ও পটাশিয়ামসমৃদ্ধ বহুল প্রচলিত সুস্বাদু ফল।"
  },
  {
    id: 49,
    bengaliName: "পেঁপে",
    scientificName: "Carica papaya",
    bengaliPronunciation: "ক্যারিকা পাপায়া",
    category: "ফলমূল",
    importance: "প্যাপাইন এনজাইম সমৃদ্ধ ফল; হজমে সাহায্যকারী চমৎকার পথ্য।"
  },
  {
    id: 50,
    bengaliName: "লিচু",
    scientificName: "Litchi chinensis",
    bengaliPronunciation: "লিচি চিনেনসিস",
    category: "ফলমূল",
    importance: "গ্রীষ্মকালীন রসালো ও অত্যন্ত সুমিষ্ট জনপ্রিয় সুস্বাদু ফল।"
  },
  {
    id: 51,
    bengaliName: "পেয়ারা",
    scientificName: "Psidium guajava",
    bengaliPronunciation: "সিদিয়াম গুয়াজাভা",
    category: "ফলমূল",
    importance: "বাংলার আপেল খ্যাত প্রচুর ভিটামিন সি ও পেকটিন সমৃদ্ধ ফল।"
  },
  {
    id: 52,
    bengaliName: "নারিকেল",
    scientificName: "Cocos nucifera",
    bengaliPronunciation: "কোকোস নিউসিফেরা",
    category: "ফলমূল",
    importance: "উপকূলীয় অঞ্চলে উৎপন্ন বহুমুখী উপকারী ডাব ও নারিকেল তেল প্রদানকারী বৃক্ষ।"
  },
  {
    id: 53,
    bengaliName: "সুপারি",
    scientificName: "Areca catechu",
    bengaliPronunciation: "অ্যারিকা ক্যাটেচু",
    category: "ফলমূল",
    importance: "ঐতিহ্যবাহী অর্থকরী পাম বৃক্ষ ও পানের সাথে সুপারি হিসেবে ব্যবহৃত।"
  },
  {
    id: 54,
    bengaliName: "তাল",
    scientificName: "Borassus flabellifer",
    bengaliPronunciation: "বোরাসাস ফ্ল্যাবেলিফার",
    category: "ফলমূল",
    importance: "গ্রীষ্মের তালশাঁস, রস, গুড় ও ভাদ্রের তালের পিঠার প্রধান উৎস।"
  },
  {
    id: 55,
    bengaliName: "খেজুর (দেশি খেজুর)",
    scientificName: "Phoenix sylvestris",
    bengaliPronunciation: "ফিনিক্স সিলভেসট্রিস",
    category: "ফলমূল",
    importance: "শীতের মিষ্টি খেজুরের রস ও সুস্বাদু নলেন গুড়ের প্রধান উৎস।"
  },
  {
    id: 56,
    bengaliName: "আরবি খেজুর",
    scientificName: "Phoenix dactylifera",
    bengaliPronunciation: "ফিনিক্স ড্যাকটাইলিফেরা",
    category: "ফলমূল",
    importance: "মরুভূমির সুমিষ্ট উচ্চ ক্যালরি ও আয়রনসমৃদ্ধ পুষ্টিকর খেজুর।"
  },
  {
    id: 57,
    bengaliName: "কমলালেবু",
    scientificName: "Citrus reticulata",
    bengaliPronunciation: "সাইট্রাস রেটিকুলাটা",
    category: "ফলমূল",
    importance: "ভিটামিন সি ও ফ্ল্যাভোনয়েড সমৃদ্ধ খোসা ছাড়ানো সুস্বাদু লেবু।"
  },
  {
    id: 58,
    bengaliName: "মাল্টা",
    scientificName: "Citrus sinensis",
    bengaliPronunciation: "সাইট্রাস সাইনেনসিস",
    category: "ফলমূল",
    importance: "মিষ্টি রসালো সাইট্রাস ফল ও ভিটামিন সি-এর চমৎকার উৎস।"
  },
  {
    id: 59,
    bengaliName: "বাতাবি লেবু / জাম্বুরা",
    scientificName: "Citrus grandis",
    bengaliPronunciation: "সাইট্রাস গ্র্যান্ডিস",
    category: "ফলমূল",
    importance: "বৃহদাকার সাইট্রাস ফল; রোগপ্রতিরোধ ক্ষমতা বৃদ্ধিকারী ফল।"
  },
  {
    id: 60,
    bengaliName: "কাগজি লেবু",
    scientificName: "Citrus aurantifolia",
    bengaliPronunciation: "সাইট্রাস অ্যারান্টিফোলিয়া",
    category: "ফলমূল",
    importance: "তীব্র সুগন্ধযুক্ত রসালো লেবু; স্কার্ভি প্রতিরোধক ও রুচিবর্ধক।"
  },
  {
    id: 61,
    bengaliName: "পাতি লেবু",
    scientificName: "Citrus limon",
    bengaliPronunciation: "সাইট্রাস লিমন",
    category: "ফলমূল",
    importance: "রান্নায় ও পানীয়তে ব্যাপকভাবে ব্যবহৃত সাইট্রিক এসিডযুক্ত লেবু।"
  },
  {
    id: 62,
    bengaliName: "কামরাঙ্গা",
    scientificName: "Averrhoa carambola",
    bengaliPronunciation: "অ্যাভেরোয়া ক্যারাম্বোলা",
    category: "ফলমূল",
    importance: "তারকাসদৃশ (Star fruit) ভিটামিন সি সমৃদ্ধ অ্যান্টিঅক্সিডেন্ট ফল।"
  },
  {
    id: 63,
    bengaliName: "বিলিম্বি",
    scientificName: "Averrhoa bilimbi",
    bengaliPronunciation: "অ্যাভেরোয়া বিলিম্বি",
    category: "ফলমূল",
    importance: "তীব্র টক স্বাদের ছোট ফল; মাছ রান্নায় ও চাটনিতে সুস্বাদু।"
  },
  {
    id: 64,
    bengaliName: "আনারস",
    scientificName: "Ananas comosus",
    bengaliPronunciation: "অ্যানানাস কোমোসাস",
    category: "ফলমূল",
    importance: "ব্রোমেলিন এনজাইম সমৃদ্ধ সুস্বাদু যৌগিক অম্ল-মধুর ফল।"
  },
  {
    id: 65,
    bengaliName: "আঙ্গুর",
    scientificName: "Vitis vinifera",
    bengaliPronunciation: "ভিটিস ভিনিফেরা",
    category: "ফলমূল",
    importance: "রেসভেরাট্রল সমৃদ্ধ অ্যান্টিঅক্সিডেন্ট যুক্ত বিশ্ববিখ্যাত মিষ্টি ফল।"
  },
  {
    id: 66,
    bengaliName: "আপেল",
    scientificName: "Malus domestica",
    bengaliPronunciation: "ম্যালাস ডোমেস্টিকা",
    category: "ফলমূল",
    importance: "পেলে ফাইবার ও ম্যালিক এসিডযুক্ত বিশ্বখ্যাত পুষ্টিকর পোম ফল।"
  },
  {
    id: 67,
    bengaliName: "নাশপাতি",
    scientificName: "Pyrus communis",
    bengaliPronunciation: "পাইরাস কমিউনিস",
    category: "ফলমূল",
    importance: "মিষ্টি ও রসালো দানাদার শাঁসযুক্ত জনপ্রিয় পুষ্টিকর ফল।"
  },
  {
    id: 68,
    bengaliName: "বেদানা / ডালিম",
    scientificName: "Punica granatum",
    bengaliPronunciation: "পিউনিকা গ্র্যানাটাম",
    category: "ফলমূল",
    importance: "রক্তবর্ধক অ্যান্টিঅক্সিডেন্ট ও পিউনিক্যালিন সমৃদ্ধ লাল ফল।"
  },
  {
    id: 69,
    bengaliName: "তরমুজ",
    scientificName: "Citrullus lanatus",
    bengaliPronunciation: "সিট্রুলাস ল্যানাটাস",
    category: "ফলমূল",
    importance: "গ্রীষ্মের তৃষ্ণা নিবারণকারী ৯২% পানিসমৃদ্ধ লাইকোপিনযুক্ত ফল।"
  },
  {
    id: 70,
    bengaliName: "বাঙ্গি / ফুটি",
    scientificName: "Cucumis melo",
    bengaliPronunciation: "কিউকামিস মেলো",
    category: "ফলমূল",
    importance: "গ্রীষ্মকালীন সুস্বাদু মিষ্টি সুবাসযুক্ত ভিটামিনসমৃদ্ধ ফল।"
  },
  {
    id: 71,
    bengaliName: "বেল",
    scientificName: "Aegle marmelos",
    bengaliPronunciation: "এগল মারমেলোস",
    category: "ফলমূল",
    importance: "পেটের অসুখে মহৌষধ; আমাশয় ও কোষ্ঠকাঠিন্য নিরাময়কারী আঁশযুক্ত ফল।"
  },
  {
    id: 72,
    bengaliName: "কদবেল",
    scientificName: "Limonia acidissima",
    bengaliPronunciation: "লিমোনিয়া অ্যাসিডিসিমা",
    category: "ফলমূল",
    importance: "শক্ত খোলসযুক্ত টক-মিষ্টি সুস্বাদু ভর্তা তৈরির পুষ্টিকর ফল।"
  },
  {
    id: 73,
    bengaliName: "জাম (কালোজাম)",
    scientificName: "Syzygium cumini",
    bengaliPronunciation: "সিজিজিয়াম কিউমিনি",
    category: "ফলমূল",
    importance: "ডায়াবেটিস রোগীদের জন্য উপকারী অ্যান্থোসায়ানিন সমৃদ্ধ ফল।"
  },
  {
    id: 74,
    bengaliName: "গোলাপজাম",
    scientificName: "Syzygium jambos",
    bengaliPronunciation: "সিজিজিয়াম জ্যাম্বোস",
    category: "ফলমূল",
    importance: "গোলাপের সুবাসযুক্ত হালকা মিষ্টি ও রসালো নরম ফল।"
  },
  {
    id: 75,
    bengaliName: "জামরুল",
    scientificName: "Syzygium samarangense",
    bengaliPronunciation: "সিজিজিয়াম সামারাঙ্গেন্স",
    category: "ফলমূল",
    importance: "গ্রীষ্মের জলীয় অংশে ভরপুর সাদা বা লাল রঙের হালকা মিষ্টি ফল।"
  },
  {
    id: 76,
    bengaliName: "আমলকী",
    scientificName: "Phyllanthus emblica",
    bengaliPronunciation: "ফাই্ল্যান্থাস এমব্লিকা",
    category: "ফলমূল",
    importance: "ভিটামিন সি-এর অন্যতম সেরা প্রাকৃতিক ভাণ্ডার ও ত্রিফলার প্রধান ফল।"
  },
  {
    id: 77,
    bengaliName: "হরতকী",
    scientificName: "Terminalia chebula",
    bengaliPronunciation: "টার্মিনালিয়া চেবুলা",
    category: "ফলমূল",
    importance: "ত্রিফলার অন্যতম উপাদান; পরিপাকতন্ত্রের মহৌষধ ও কষায় ফল।"
  },
  {
    id: 78,
    bengaliName: "বহেড়া",
    scientificName: "Terminalia bellirica",
    bengaliPronunciation: "টার্মিনালিয়া বেলেরিকা",
    category: "ফলমূল",
    importance: "ত্রিফলার তৃতীয় উপাদান; কফ ও শ্বাসনালীর উপশমে ব্যবহৃত ফল।"
  },
  {
    id: 79,
    bengaliName: "জলপাই (দেশি জলপাই)",
    scientificName: "Elaeocarpus serratus",
    bengaliPronunciation: "এলিওকার্পাস সেরাটাচ",
    category: "ফলমূল",
    importance: "টক স্বাদের মুখরোচক আচার ও চাটনি তৈরির জনপ্রিয় ফল।"
  },
  {
    id: 80,
    bengaliName: "ইউরোপীয় জলপাই (অলিভ)",
    scientificName: "Olea europaea",
    bengaliPronunciation: "ওলিয়া ইউরোপিয়া",
    category: "ফলমূল",
    importance: "মূল্যবান স্বাস্থ্যকর অলিভ অয়েল নিষ্কাশনে ব্যবহৃত ফল।"
  },
  {
    id: 81,
    bengaliName: "কুল / বরই (দেশি বরই)",
    scientificName: "Ziziphus mauritiana",
    bengaliPronunciation: "জিজিফাস মরিটিয়ানা",
    category: "ফলমূল",
    importance: "শীতকালীন ভিটামিন সি ও এ সমৃদ্ধ জনপ্রিয় টক-মিষ্টি ফল।"
  },
  {
    id: 82,
    bengaliName: "টক বরই",
    scientificName: "Ziziphus nummularia",
    bengaliPronunciation: "জিজিফাস নামুলারিয়া",
    category: "ফলমূল",
    importance: "ছোট আকারের তীব্র টক বরই; শুকনো আচার তৈরিতে জনপ্রিয়।"
  },
  {
    id: 83,
    bengaliName: "আতা / শরিফা",
    scientificName: "Annona squamosa",
    bengaliPronunciation: "অ্যানোনা স্কোয়ামোসা",
    category: "ফলমূল",
    importance: "নরম ক্রিমযুক্ত মিষ্টি দানাদার শাঁসবিশিষ্ট সুস্বাদু ফল।"
  },
  {
    id: 84,
    bengaliName: "নোনা ফল",
    scientificName: "Annona reticulata",
    bengaliPronunciation: "অ্যানোনা রেটিকুলাটা",
    category: "ফলমূল",
    importance: "আতার সমগোত্রীয় পুষ্টিকর মিষ্টি ফল; বলকারক খাদ্য।"
  },
  {
    id: 85,
    bengaliName: "রামবুটান",
    scientificName: "Nephelium lappaceum",
    bengaliPronunciation: "নেফেলিয়াম ল্যাপাসিয়াম",
    category: "ফলমূল",
    importance: "লোমশ বহিরাবরণযুক্ত দক্ষিণ-পূর্ব এশিয়ার লিচুর ন্যায় মিষ্টি ফল।"
  },
  {
    id: 86,
    bengaliName: "ড্রাগন ফল",
    scientificName: "Selenicereus undatus",
    bengaliPronunciation: "সেলেসিরাস আনডাটাচ",
    category: "ফলমূল",
    importance: "ক্যাকটাস জাতীয় অ্যান্টিঅক্সিডেন্ট ও ফাইবারসমৃদ্ধ আধুনিক ফল।"
  },
  {
    id: 87,
    bengaliName: "স্ট্রবেরি",
    scientificName: "Fragaria ananassa",
    bengaliPronunciation: "ফ্রাগারিয়া অ্যানানাসা",
    category: "ফলমূল",
    importance: "সুগন্ধি ও ভিটামিন সি সমৃদ্ধ উজ্জ্বল লাল এগ্রিগেট ফল।"
  },
  {
    id: 88,
    bengaliName: "আভোকাডো",
    scientificName: "Persea americana",
    bengaliPronunciation: "পার্সিয়া আমেরিকানা",
    category: "ফলমূল",
    importance: "স্বাস্থ্যকর মনোআনস্যাচুরেটেড ফ্যাট সমৃদ্ধ বাটার ফ্রুট।"
  },
  {
    id: 89,
    bengaliName: "কিউই",
    scientificName: "Actinidia deliciosa",
    bengaliPronunciation: "অ্যাক্টিনিডিয়া ডিলিসিওসা",
    category: "ফলমূল",
    importance: "উচ্চ পটাশিয়াম ও ভিটামিন সি সমৃদ্ধ সবুজ শাঁসের ফল।"
  },
  {
    id: 90,
    bengaliName: "চেরি",
    scientificName: "Prunus avium",
    bengaliPronunciation: "প্রুনাস এভিয়াম",
    category: "ফলমূল",
    importance: "মিষ্টি লাল রঙের ড্রুপ ফল; অ্যান্থোসায়ানিন সমৃদ্ধ পুষ্টিকর ফল।"
  },
  {
    id: 91,
    bengaliName: "পিচ ফল",
    scientificName: "Prunus persica",
    bengaliPronunciation: "প্রুনাস পারসিকা",
    category: "ফলমূল",
    importance: "মখমলি খোসাযুক্ত সুমিষ্ট শাঁসালো ও পুষ্টিকর ড্রুপ ফল।"
  },
  {
    id: 92,
    bengaliName: "আলুবোখারা / প্লাম",
    scientificName: "Prunus domestica",
    bengaliPronunciation: "প্রুনাস ডোমেস্টিকা",
    category: "ফলমূল",
    importance: "পোলাও ও বিরিয়ানির সুস্বাদু উপকরণ এবং কোষ্ঠকাঠিন্য দূরকারী ফল।"
  },
  {
    id: 93,
    bengaliName: "খুবানি / এপ্রিকট",
    scientificName: "Prunus armeniaca",
    bengaliPronunciation: "প্রুনাস আর্মেনিয়াকা",
    category: "ফলমূল",
    importance: "ভিটামিন এ ও ক্যারোটিনয়েড সমৃদ্ধ সোনালী রঙের ফল।"
  },
  {
    id: 94,
    bengaliName: "লটকন",
    scientificName: "Baccaurea motleyana",
    bengaliPronunciation: "ব্যাকাউরিয়া মোটলেয়ানা",
    category: "ফলমূল",
    importance: "কাণ্ডে থোকায় থোকায় ধরা ভিটামিন সি সমৃদ্ধ টক-মিষ্টি ফল।"
  },
  {
    id: 95,
    bengaliName: "সফেদা",
    scientificName: "Manilkara zapota",
    bengaliPronunciation: "ম্যানিলকারা জাপোটা",
    category: "ফলমূল",
    importance: "উচ্চ ফ্রুক্টোজ ও সুক্রোজ সমৃদ্ধ মিষ্টি বাদামী নরম ফল।"
  },
  {
    id: 96,
    bengaliName: "গাব (দেশি গাব)",
    scientificName: "Diospyros peregrina",
    bengaliPronunciation: "ডায়োস্পাইরস পেরিগ্রিনা",
    category: "ফলমূল",
    importance: "জাল টেকসই করার কষ ও আয়ুর্বেদিক ঔষধে ব্যবহৃত ফল।"
  },
  {
    id: 97,
    bengaliName: "বিলাতি গাব",
    scientificName: "Diospyros blancoi",
    bengaliPronunciation: "ডায়োস্পাইরস ব্ল্যাঙ্কই",
    category: "ফলমূল",
    importance: "ভেলভেটের মতো রোমযুক্ত সুস্বাদু সুমিষ্ট দেশীয় ফল।"
  },
  {
    id: 98,
    bengaliName: "ডুমুর (যজ্ঞডুমুর)",
    scientificName: "Ficus racemosa",
    bengaliPronunciation: "ফিকাস রেসিমোসা",
    category: "ফলমূল",
    importance: "সবজি হিসেবে রান্নায় ও পেটের পীড়ায় ব্যবহৃত সাইকোনাস ফল।"
  },
  {
    id: 99,
    bengaliName: "আঞ্জির / ত্বীন ফল",
    scientificName: "Ficus carica",
    bengaliPronunciation: "ফিকাস ক্যারিকা",
    category: "ফলমূল",
    importance: "উচ্চ পুষ্টি ও আয়রনসমৃদ্ধ ঐতিহ্যবাহী পবিত্র মরু ফল।"
  },
  {
    id: 100,
    bengaliName: "করমচা",
    scientificName: "Carissa carandas",
    bengaliPronunciation: "ক্যারিসা ক্যারান্ডাস",
    category: "ফলমূল",
    importance: "কাটাযুক্ত ঝোপের লাল রঙের তীব্র টক স্বাদের আচার তৈরির ফল।"
  },
  {
    id: 101,
    bengaliName: "আশফল / আঁশফল",
    scientificName: "Dimocarpus longan",
    bengaliPronunciation: "ডাইমোকার্পাস লংগান",
    category: "ফলমূল",
    importance: "লিচুর ক্ষুদ্র আত্মীয় ফল; মিষ্টি স্বাদযুক্ত গ্রীষ্মকালীন ফল।"
  },
  {
    id: 102,
    bengaliName: "চালতা",
    scientificName: "Dillenia indica",
    bengaliPronunciation: "ডিলেনিয়া ইন্ডিকা",
    category: "ফলমূল",
    importance: "মাংসল বৃতিবিশিষ্ট বড় ফল; চমৎকার টক ডাল ও আচারের উৎস।"
  },
  {
    id: 103,
    bengaliName: "তেঁতুল",
    scientificName: "Tamarindus indica",
    bengaliPronunciation: "ট্যামারিন্ডাস ইন্ডিকা",
    category: "ফলমূল",
    importance: "টারটারিক এসিডসমৃদ্ধ সুপরিচিত টক ফল; রক্তচাপ নিয়ন্ত্রণে সহায়ক।"
  },
  {
    id: 104,
    bengaliName: "জলপাই (আমড়া)",
    scientificName: "Spondias dulcis",
    bengaliPronunciation: "স্পন্ডিয়াস ডালসিস",
    category: "ফলমূল",
    importance: "ভিটামিন সি ও ক্যালসিয়াম সমৃদ্ধ মুখরোচক টক-মিষ্টি ফল।"
  },
  {
    id: 105,
    bengaliName: "দেশি আমড়া",
    scientificName: "Spondias pinnata",
    bengaliPronunciation: "স্পন্ডিয়াস পিনাটা",
    category: "ফলমূল",
    importance: "আচার ও চাটনির সুস্বাদু উপকরণ হিসেবে ব্যবহৃত বুনো আমড়া।"
  },
  {
    id: 106,
    bengaliName: "আলু (গোল আলু)",
    scientificName: "Solanum tuberosum",
    bengaliPronunciation: "সোরাসানাম টিউবারোসাম",
    category: "শাকসবজি ও কন্দ",
    importance: "বিশ্বের অন্যতম প্রধান শ্বেতসারযুক্ত কন্দ খাদ্য ফসল।"
  },
  {
    id: 107,
    bengaliName: "মিষ্টি আলু",
    scientificName: "Ipomoea batatas",
    bengaliPronunciation: "ইপোমিয়া বাটাটাস",
    category: "শাকসবজি ও কন্দ",
    importance: "বিটা-ক্যারোটিন ও জটিল শর্করাসমৃদ্ধ পুষ্টিকর মূল।"
  },
  {
    id: 108,
    bengaliName: "বেগুন",
    scientificName: "Solanum melongena",
    bengaliPronunciation: "সোলানাম মেলোনজেনা",
    category: "শাকসবজি ও কন্দ",
    importance: "বাঙালির অত্যন্ত প্রিয় সারা বছর উৎপন্ন বহুমুখী সবজি।"
  },
  {
    id: 109,
    bengaliName: "টমেটো",
    scientificName: "Solanum lycopersicum",
    bengaliPronunciation: "সোলানাম লাইকোপারসিকাম",
    category: "শাকসবজি ও কন্দ",
    importance: "লাইকোপিন ও ভিটামিন সি সমৃদ্ধ অ্যান্টিঅক্সিডেন্ট সবজি।"
  },
  {
    id: 110,
    bengaliName: "ঢ্যাঁড়শ / ভেন্ডি",
    scientificName: "Abelmoschus esculentus",
    bengaliPronunciation: "অ্যাবেলমোসকাস এসকুলেন্টাস",
    category: "শাকসবজি ও কন্দ",
    importance: "মিউসিলেজ ও দ্রবণীয় আঁশসমৃদ্ধ রক্তে শর্করা নিয়ন্ত্রক সবজি।"
  },
  {
    id: 111,
    bengaliName: "পটল",
    scientificName: "Trichosanthes dioica",
    bengaliPronunciation: "ট্রাইকোসান্থেস ডায়োইকা",
    category: "শাকসবজি ও কন্দ",
    importance: "গ্রীষ্মকালীন সহজপাচ্য পুষ্টিকর ও রুচিবর্ধক সবজি।"
  },
  {
    id: 112,
    bengaliName: "করলা / উচ্ছে",
    scientificName: "Momordica charantia",
    bengaliPronunciation: "মোমরডিকা চারান্টিয়া",
    category: "শাকসবজি ও কন্দ",
    importance: "মমোরডিসিনযুক্ত তিক্ত সবজি; ডায়াবেটিসে অত্যন্ত উপকারী।"
  },
  {
    id: 113,
    bengaliName: "কাকরোল",
    scientificName: "Momordica dioica",
    bengaliPronunciation: "মোমরডিকা ডায়োইকা",
    category: "শাকসবজি ও কন্দ",
    importance: "গ্রীষ্মকালীন আয়রন ও প্রোটিন সমৃদ্ধ জনপ্রিয় কাঁটাযুক্ত সবজি।"
  },
  {
    id: 114,
    bengaliName: "লাউ",
    scientificName: "Lagenaria siceraria",
    bengaliPronunciation: "ল্যাজেনেরিয়া সিসেরারিয়া",
    category: "শাকসবজি ও কন্দ",
    importance: "শীতকালীন শীতলকারক পানিসমৃদ্ধ সুস্বাদু লতানো সবজি।"
  },
  {
    id: 115,
    bengaliName: "মিষ্টি কুমড়া",
    scientificName: "Cucurbita moschata",
    bengaliPronunciation: "কুকুরবিটা মসকাটা",
    category: "শাকসবজি ও কন্দ",
    importance: "ভিটামিন এ ও ক্যারোটিন সমৃদ্ধ পুষ্টিকর হলুদ শাঁসের সবজি।"
  },
  {
    id: 116,
    bengaliName: "চাল কুমড়া",
    scientificName: "Benincasa hispida",
    bengaliPronunciation: "বেনিনকাসা হিসপিডা",
    category: "শাকসবজি ও কন্দ",
    importance: "মুরব্বা ও ডালিবড়া তৈরিতে ব্যবহৃত শীতলকারক সবজি।"
  },
  {
    id: 117,
    bengaliName: "ঝিঁঙে",
    scientificName: "Luffa acutangula",
    bengaliPronunciation: "লুফা একিউট্যাঙ্গুলা",
    category: "শাকসবজি ও কন্দ",
    importance: "কোণযুক্ত আঁশসমৃদ্ধ সহজপাচ্য গ্রীষ্মকালীন সবজি।"
  },
  {
    id: 118,
    bengaliName: "ধুন্দুল",
    scientificName: "Luffa aegyptiaca",
    bengaliPronunciation: "লুফা ইজিপ্টিয়াকা",
    category: "শাকসবজি ও কন্দ",
    importance: "মসৃণ ত্বকযুক্ত সবজি এবং পরিপক্ক খোসা প্রাকৃতিক স্পঞ্জ।"
  },
  {
    id: 119,
    bengaliName: "চিচিঙ্গা",
    scientificName: "Trichosanthes cucumerina",
    bengaliPronunciation: "ট্রাইকোসান্থেস কিউকামেরিনা",
    category: "শাকসবজি ও কন্দ",
    importance: "লম্বা সাপের মতো ডোরাকাটা সহজপাচ্য লতানো সবজি।"
  },
  {
    id: 120,
    bengaliName: "শসা",
    scientificName: "Cucumis sativus",
    bengaliPronunciation: "কিউকামিস স্যাটাইভাস",
    category: "শাকসবজি ও কন্দ",
    importance: "৯৫% পানিসমৃদ্ধ সালাদ ও তৃষ্ণা নিবারক জনপ্রিয় শীতল সবজি।"
  },
  {
    id: 121,
    bengaliName: "ক্ষীরা",
    scientificName: "Cucumis melo var. conomon",
    bengaliPronunciation: "কিউকামিস মেলো ভ্যারাইটি কোনমন",
    category: "শাকসবজি ও কন্দ",
    importance: "শসার সমগোত্রীয় হালকা মিষ্টি ও রসালো গ্রীষ্মকালীন সবজি।"
  },
  {
    id: 122,
    bengaliName: "ফুলকপি",
    scientificName: "Brassica oleracea var. botrytis",
    bengaliPronunciation: "ব্রাসিকা ওলেরাসিয়া ভ্যারাইটি বোট্রিটিস",
    category: "শাকসবজি ও কন্দ",
    importance: "শীতকালীন ভিটামিন সি ও সালফোরাফেন সমৃদ্ধ পুষ্পমঞ্জরি সবজি।"
  },
  {
    id: 123,
    bengaliName: "বাঁধাকপি",
    scientificName: "Brassica oleracea var. capitata",
    bengaliPronunciation: "ব্রাসিকা ওলেরাসিয়া ভ্যারাইটি ক্যাপিটাটা",
    category: "শাকসবজি ও কন্দ",
    importance: "পাতাবহুল ভিটামিন কে ও সি সমৃদ্ধ পুষ্টিকর শীতের সবজি।"
  },
  {
    id: 124,
    bengaliName: "ওলকপি",
    scientificName: "Brassica oleracea var. gongylodes",
    bengaliPronunciation: "ব্রাসিকা ওলেরাসিয়া ভ্যারাইটি গংগাইলোডেস",
    category: "শাকসবজি ও কন্দ",
    importance: "স্ফীত কাণ্ডবিশিষ্ট রসালো পুষ্টিকর শীতকালীন সবজি।"
  },
  {
    id: 125,
    bengaliName: "ব্রোকলি",
    scientificName: "Brassica oleracea var. italica",
    bengaliPronunciation: "ব্রাসিকা ওলেরাসিয়া ভ্যারাইটি ইটালিকা",
    category: "শাকসবজি ও কন্দ",
    importance: "ক্যান্সার প্রতিরোধী অ্যান্টিঅক্সিডেন্ট ও ফোলেটসমৃদ্ধ সবুজ ফুলকপি।"
  },
  {
    id: 126,
    bengaliName: "মুলা",
    scientificName: "Raphanus sativus",
    bengaliPronunciation: "রাফানাস স্যাটাইভাস",
    category: "শাকসবজি ও কন্দ",
    importance: "ঝাঁঝালো আইসোথায়োসায়ানেট সমৃদ্ধ শীতকালীন পুষ্টিকর মূল।"
  },
  {
    id: 127,
    bengaliName: "গাজর",
    scientificName: "Daucus carota",
    bengaliPronunciation: "ডকাস ক্যারোটা",
    category: "শাকসবজি ও কন্দ",
    importance: "বিটা-ক্যারোটিন (ভিটামিন এ) সমৃদ্ধ দৃষ্টিশক্তিবর্ধক মিষ্টি মূল।"
  },
  {
    id: 128,
    bengaliName: "শালগম",
    scientificName: "Brassica rapa",
    bengaliPronunciation: "ব্রাসিকা রাপা",
    category: "শাকসবজি ও কন্দ",
    importance: "শীতকালীন ভিটামিন সি ও ক্যালসিয়াম সমৃদ্ধ স্ফীত মূল সবজি।"
  },
  {
    id: 129,
    bengaliName: "পালং শাক",
    scientificName: "Spinacia oleracea",
    bengaliPronunciation: "স্পিনাসিয়া ওলেরাসিয়া",
    category: "শাকসবজি ও কন্দ",
    importance: "আয়রন, ফলিক এসিড ও ভিটামিন কে সমৃদ্ধ পুষ্টিকর শাক।"
  },
  {
    id: 130,
    bengaliName: "লাল শাক",
    scientificName: "Amaranthus tricolor",
    bengaliPronunciation: "অ্যামারান্থাস ট্রাইকালার",
    category: "শাকসবজি ও কন্দ",
    importance: "ক্যালসিয়াম ও আয়রনসমৃদ্ধ বাঙালির অতি প্রিয় রক্তবর্ধক শাক।"
  },
  {
    id: 131,
    bengaliName: "ডাঁটা শাক",
    scientificName: "Amaranthus lividus",
    bengaliPronunciation: "অ্যামারান্থাস লিভিডাস",
    category: "শাকসবজি ও কন্দ",
    importance: "মোটা কাণ্ডযুক্ত ভিটামিন এ ও আঁশসমৃদ্ধ সহজলভ্য শাক।"
  },
  {
    id: 132,
    bengaliName: "পুঁই শাক",
    scientificName: "Basella alba",
    bengaliPronunciation: "ব্যাসেল্লা আলবা",
    category: "শাকসবজি ও কন্দ",
    importance: "মিউসিলেজ ও ক্যালসিয়ামসমৃদ্ধ জনপ্রিয় লতানো পুষ্টিকর শাক।"
  },
  {
    id: 133,
    bengaliName: "কলমি শাক",
    scientificName: "Ipomoea aquatica",
    bengaliPronunciation: "ইপোমিয়া অ্যাকোয়াটিকা",
    category: "শাকসবজি ও কন্দ",
    importance: "জলজ ও স্যাঁতসেঁতে স্থানের আয়রন ও ভিটামিনসমৃদ্ধ শাক।"
  },
  {
    id: 134,
    bengaliName: "হেলেঞ্চা শাক",
    scientificName: "Enhydra fluctuans",
    bengaliPronunciation: "এনহাইড্রা ফ্লাকচুয়ান্স",
    category: "শাকসবজি ও কন্দ",
    importance: "লিভারের সুরক্ষা প্রদানকারী সামান্য তিতকুটে ভেষজ শাক।"
  },
  {
    id: 135,
    bengaliName: "ব্রাহ্মী শাক",
    scientificName: "Bacopa monnieri",
    bengaliPronunciation: "ব্যাকোপ্পা মনিয়েরি",
    category: "শাকসবজি ও কন্দ",
    importance: "স্মৃতিশক্তিবর্ধক ও মেধা বিকাশে সহায়ক সুপরিচিত ভেষজ শাক।"
  },
  {
    id: 136,
    bengaliName: "থানকুনি পাতা",
    scientificName: "Centella asiatica",
    bengaliPronunciation: "সেন্টেল্লা এশিয়াটিকা",
    category: "শাকসবজি ও কন্দ",
    importance: "পেটের অসুখ ও আমাশয় নিরাময়কারী শক্তিশালী ঔষধি শাক।"
  },
  {
    id: 137,
    bengaliName: "কচু (মুখীকচু)",
    scientificName: "Colocasia esculenta",
    bengaliPronunciation: "কলোকাশিয়া এসকুলেন্টা",
    category: "শাকসবজি ও কন্দ",
    importance: "আয়রন ও শ্বেতসার সমৃদ্ধ বহুল প্রচলিত পুষ্টিকর কন্দ।"
  },
  {
    id: 138,
    bengaliName: "মানকচু",
    scientificName: "Alocasia macrorrhizos",
    bengaliPronunciation: "অ্যালোকাশিয়া ম্যাক্রোরহাইজোস",
    category: "শাকসবজি ও কন্দ",
    importance: "বৃহৎ কাণ্ডবিশিষ্ট পথ্য ও পুষ্টিকর তরকারি হিসেবে সমাদৃত।"
  },
  {
    id: 139,
    bengaliName: "ওলকচু",
    scientificName: "Amorphophallus paeoniifolius",
    bengaliPronunciation: "অ্যামোরফোফালাস পিওনিফোলিয়াস",
    category: "শাকসবজি ও কন্দ",
    importance: "বৃহদাকার কন্দ; অর্শ্বরোগে বিশেষ উপকারী পুষ্টিকর কন্দ।"
  },
  {
    id: 140,
    bengaliName: "পানি কচু",
    scientificName: "Colocasia esculenta var. aquatilis",
    bengaliPronunciation: "কলোকাশিয়া এসকুলেন্টা একুয়াটিলিস",
    category: "শাকসবজি ও কন্দ",
    importance: "লতি ও ডাটা অত্যন্ত সুস্বাদু ও পুষ্টিকর জলজ কচু।"
  },
  {
    id: 141,
    bengaliName: "শিম (দেশি শিম)",
    scientificName: "Lablab purpureus",
    bengaliPronunciation: "ল্যাবলাব পারপুরিয়াস",
    category: "শাকসবজি ও কন্দ",
    importance: "শীতকালীন উচ্চ উদ্ভিদ প্রোটিন ও আঁশসমৃদ্ধ ফলবতী লতা।"
  },
  {
    id: 142,
    bengaliName: "বরবটি",
    scientificName: "Vigna unguiculata subsp. sesquipedalis",
    bengaliPronunciation: "ভিগনা আনগুইকুলাটা সেসকুইপিডালিস",
    category: "শাকসবজি ও কন্দ",
    importance: "লম্বা শুঁটিযুক্ত ভিটামিন এ ও সি সমৃদ্ধ জনপ্রিয় গ্রীষ্মের সবজি।"
  },
  {
    id: 143,
    bengaliName: "সজিনা ডাটা",
    scientificName: "Moringa oleifera",
    bengaliPronunciation: "মরিঙ্গা ওলিফেরা",
    category: "শাকসবজি ও কন্দ",
    importance: "মিরাকল ট্রি; অসাধারণ পুষ্টি ও খনিজসমৃদ্ধ সুস্বাদু সবজি।"
  },
  {
    id: 144,
    bengaliName: "কাঁচা কলা (তরকারি কলা)",
    scientificName: "Musa paradisiaca",
    bengaliPronunciation: "মুসা প্যারাডিসিয়াকা",
    category: "শাকসবজি ও কন্দ",
    importance: "পেটের স্বাস্থ্য রক্ষায় ও ডায়রিয়া উপশমে অনন্য পথ্য সবজি।"
  },
  {
    id: 145,
    bengaliName: "কাঁচা পেঁপে",
    scientificName: "Carica papaya",
    bengaliPronunciation: "ক্যারিকা পাপায়া",
    category: "শাকসবজি ও কন্দ",
    importance: "মাংস নরমকারী ও হজম সহায়ক পুষ্টিকর কাঁচা সবজি।"
  },
  {
    id: 146,
    bengaliName: "ডুমুর (সবজি ডুমুর)",
    scientificName: "Ficus hispida",
    bengaliPronunciation: "ফিকাস হিসপিডা",
    category: "শাকসবজি ও কন্দ",
    importance: "রক্তের শর্করারোধক ও যকৃতের সুরক্ষায় সহায়ক সুস্বাদু তরকারি।"
  },
  {
    id: 147,
    bengaliName: "শালুক (শাপলার মূল)",
    scientificName: "Nymphaea nouchali",
    bengaliPronunciation: "নিম্ফিয়া নৌচালি",
    category: "শাকসবজি ও কন্দ",
    importance: "পানিতে নিমজ্জিত শ্বেতসার সমৃদ্ধ পুষ্টিকর বুনো খাদ্য।"
  },
  {
    id: 148,
    bengaliName: "পানিফল",
    scientificName: "Trapa natans",
    bengaliPronunciation: "ট্রাপা নাটান্স",
    category: "শাকসবজি ও কন্দ",
    importance: "মিঠাপানির কাঁটাযুক্ত সুস্বাদু শীতল শ্বেতসারময় ফল।"
  },
  {
    id: 149,
    bengaliName: "মাশরুম (বাটন মাশরুম)",
    scientificName: "Agaricus bisporus",
    bengaliPronunciation: "অ্যাগারিকাস বাইস্পোরাস",
    category: "শাকসবজি ও কন্দ",
    importance: "উচ্চমানের প্রোটিন, ভিটামিন ডি ও খনিজসমৃদ্ধ ভোজ্য ছত্রাক।"
  },
  {
    id: 150,
    bengaliName: "ওয়েস্টার মাশরুম",
    scientificName: "Pleurotus ostreatus",
    bengaliPronunciation: "প্লিউরোটাস অস্টিয়াটাস",
    category: "শাকসবজি ও কন্দ",
    importance: "সহজ চাষযোগ্য সুস্বাদু কোলেস্টেরলমুক্ত পুষ্টিকর ছত্রাক।"
  },
  {
    id: 151,
    bengaliName: "বেবি কর্ন",
    scientificName: "Zea mays",
    bengaliPronunciation: "জিয়া মেইজ",
    category: "শাকসবজি ও কন্দ",
    importance: "কচি ভুট্টার মোচা; সালাদ ও স্যুপের সুস্বাদু ক্রাঞ্চি সবজি।"
  },
  {
    id: 152,
    bengaliName: "লেটুস",
    scientificName: "Lactuca sativa",
    bengaliPronunciation: "ল্যাকটুকা স্যাটাইভা",
    category: "শাকসবজি ও কন্দ",
    importance: "সালাদের প্রধান উপাদান; ভিটামিন এ ও কে সমৃদ্ধ হালকা পাতা।"
  },
  {
    id: 153,
    bengaliName: "সেলারি",
    scientificName: "Apium graveolens",
    bengaliPronunciation: "এপিয়াম গ্র্যাভিওল্যান্স",
    category: "শাকসবজি ও কন্দ",
    importance: "নিম্ন ক্যালরিযুক্ত রক্তচাপ নিয়ন্ত্রক ক্রাঞ্চি ডাঁটা সবজি।"
  },
  {
    id: 154,
    bengaliName: "অ্যাসপারাগাস",
    scientificName: "Asparagus officinalis",
    bengaliPronunciation: "অ্যাসপারাগাস অফিসিনালিস",
    category: "শাকসবজি ও কন্দ",
    importance: "উচ্চ মূল্যের পুষ্টিকর কচি অঙ্কুর; অ্যান্টিঅক্সিডেন্টসমৃদ্ধ সবজি।"
  },
  {
    id: 155,
    bengaliName: "আর্টিচোক",
    scientificName: "Cynara cardunculus",
    bengaliPronunciation: "সাইনারা কার্ডুনকুলাস",
    category: "শাকসবজি ও কন্দ",
    importance: "লিভারবান্ধব সাইনারিনযুক্ত ভূমধ্যসাগরীয় অনন্য সবজি।"
  },
  {
    id: 156,
    bengaliName: "পেঁয়াজ",
    scientificName: "Allium cepa",
    bengaliPronunciation: "অ্যালিয়াম সেপা",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "কোয়ারসেটিন ও সালফারযুক্ত রান্নার অপরিহার্য মৌলিক মসলা।"
  },
  {
    id: 157,
    bengaliName: "রসুন",
    scientificName: "Allium sativum",
    bengaliPronunciation: "অ্যালিয়াম স্যাটাইভাম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "অ্যালিসিন সমৃদ্ধ প্রাকৃতিক অ্যান্টিবায়োটিক ও কোলেস্টেরল কমায়।"
  },
  {
    id: 158,
    bengaliName: "আদা",
    scientificName: "Zingiber officinale",
    bengaliPronunciation: "জিঞ্জিবার অফিসিনাল",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "জিনজারলযুক্ত কন্দ; সর্দি-কাশি ও বদহজমের মহৌষধ মসলা।"
  },
  {
    id: 159,
    bengaliName: "হলুদ",
    scientificName: "Curcuma longa",
    bengaliPronunciation: "কারকিউমা লঙ্গা",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "কারকিউমিন সমৃদ্ধ শক্তিশালী অ্যান্টিঅক্সিডেন্ট ও অ্যান্টিসেপটিক।"
  },
  {
    id: 160,
    bengaliName: "মরিচ (কাঁচা ও শুকনা)",
    scientificName: "Capsicum annuum",
    bengaliPronunciation: "ক্যাপসিকাম অ্যানুয়াম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "ক্যাপসাইসিনযুক্ত ঝাল মসলা এবং প্রচুর ভিটামিন সি-এর উৎস।"
  },
  {
    id: 161,
    bengaliName: "গোলমরিচ",
    scientificName: "Piper nigrum",
    bengaliPronunciation: "পাইপার নাইগ্রাম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "মসলার রাজা; পাইপারিন সমৃদ্ধ হজমকারক ও ঝাঁঝালো মসলা।"
  },
  {
    id: 162,
    bengaliName: "চুইঝাল",
    scientificName: "Piper chaba",
    bengaliPronunciation: "পাইপার চাবা",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "মাংস রান্নার অনন্য কড়া ঝাঁঝালো ঐতিহ্যবাহী কাষ্ঠল লতা।"
  },
  {
    id: 163,
    bengaliName: "দারুচিনি",
    scientificName: "Cinnamomum verum",
    bengaliPronunciation: "সিনামোমাম ভেরাম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "সুগন্ধি গাছের বাকল; রক্তের শর্করা নিয়ন্ত্রণে চমৎকার সহায়ক।"
  },
  {
    id: 164,
    bengaliName: "তেজপাতা",
    scientificName: "Cinnamomum tamala",
    bengaliPronunciation: "সিনামোমাম তামালা",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "রান্নায় মনমাতানো সুবাস আনয়নকারী সুপরিচিত বৃক্ষের পাতা।"
  },
  {
    id: 165,
    bengaliName: "এলাচ (ছোট এলাচ)",
    scientificName: "Elettaria cardamomum",
    bengaliPronunciation: "ইলেট্টারিয়া কার্ডামোমাম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "মসলার রাণী; মিষ্টি ও মাংসের তীব্র সুবাসযুক্ত দামি মসলা।"
  },
  {
    id: 166,
    bengaliName: "বড় এলাচ / কালো এলাচ",
    scientificName: "Amomum subulatum",
    bengaliPronunciation: "অ্যামোমাম সাবুলেটাম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "বিরিয়ানি ও গরম মসলার ভারী ধোঁয়াটে সুবাসযুক্ত ফল।"
  },
  {
    id: 167,
    bengaliName: "লবঙ্গ",
    scientificName: "Syzygium aromaticum",
    bengaliPronunciation: "সিজিজিয়াম অ্যারোমেটিকাম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "ইউজেনল সমৃদ্ধ ফুলের কুঁড়ি; দাঁতের ব্যথানাশক মহৌষধ।"
  },
  {
    id: 168,
    bengaliName: "জায়ফল",
    scientificName: "Myristica fragrans",
    bengaliPronunciation: "মিরিসটিকা ফ্র্যাগ্রান্স",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "সুগন্ধি বাদাম; স্নায়ু শান্তকারী ও মিষ্টি রান্নার মসলা।"
  },
  {
    id: 169,
    bengaliName: "জয়ত্রী",
    scientificName: "Myristica fragrans (Aril)",
    bengaliPronunciation: "মিরিসটিকা ফ্র্যাগ্রান্স",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "জায়ফলের বীজের চারপাশের লাল জালিকাকার সুবাসিত খোসা।"
  },
  {
    id: 170,
    bengaliName: "জিরা",
    scientificName: "Cuminum cyminum",
    bengaliPronunciation: "কিউমিনাম সাইমিনাম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "কিউমিনালডিহাইডযুক্ত প্রধান পাচক ও সুগন্ধি রান্নার বীজ।"
  },
  {
    id: 171,
    bengaliName: "কালোজিরা",
    scientificName: "Nigella sativa",
    bengaliPronunciation: "নাইজেলা স্যাটাইভা",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "মৃত্যু ছাড়া সকল রোগের মহৌষধ খ্যাত থাইমোকুইনোনযুক্ত বীজ।"
  },
  {
    id: 172,
    bengaliName: "ধনে / ধনিয়া",
    scientificName: "Coriandrum sativum",
    bengaliPronunciation: "কোরিয়ান্ড্রাম স্যাটাইভাম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "সুগন্ধি বীজ ও তাজা পাতার বহুল প্রচলিত রান্নার মসলা।"
  },
  {
    id: 173,
    bengaliName: "মৌরি / মিষ্টি জিরা",
    scientificName: "Foeniculum vulgare",
    bengaliPronunciation: "ফেনিকুলাম ভালগেয়ার",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "এনেথোলযুক্ত মিষ্টি সুগন্ধি বীজ; মুখশুদ্ধি ও পাচক।"
  },
  {
    id: 174,
    bengaliName: "মেথি",
    scientificName: "Trigonella foenum-graecum",
    bengaliPronunciation: "ট্রাইগোনেলা ফিনাম-গ্রেকাম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "তিক্ত স্বাদের রক্তে গ্লুকোজ ও কোলেস্টেরল নিয়ন্ত্রক বীজ।"
  },
  {
    id: 175,
    bengaliName: "রাধুনি",
    scientificName: "Trachyspermum roxburghianum",
    bengaliPronunciation: "ট্র্যাকিস্পার্মাম রক্সবার্গিয়ানাম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "বাঙালির পাঁচফোড়ন ও মাছের ঝোলের স্বতন্ত্র ঝাঁঝালো মসলা।"
  },
  {
    id: 176,
    bengaliName: "জোয়ান / আজওয়াইন",
    scientificName: "Trachyspermum ammi",
    bengaliPronunciation: "ট্র্যাকিস্পার্মাম আম্মি",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "থাইমল সমৃদ্ধ গ্যাসের ও পেটের ব্যথানাশক ঝাঁঝালো বীজ।"
  },
  {
    id: 177,
    bengaliName: "জাফরান / কেশর",
    scientificName: "Crocus sativus",
    bengaliPronunciation: "ক্রোকাস স্যাটাইভাস",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "বিশ্বের সবচেয়ে মূল্যবান মসলা; ফুলের গর্ভদণ্ড থেকে সংগৃহীত।"
  },
  {
    id: 178,
    bengaliName: "পুদিনা",
    scientificName: "Mentha spicata",
    bengaliPronunciation: "মেন্থা স্পিকাটা",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "মেন্থলযুক্ত সুবাসিত শীতল পাতা; চাটনি ও পানীয়ের প্রাণ।"
  },
  {
    id: 179,
    bengaliName: "কারিপাতা",
    scientificName: "Murraya koenigii",
    bengaliPronunciation: "মুরাইয়া কোয়েনিগি",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "দক্ষিণ ভারতীয় রান্নার স্বতন্ত্র সুগন্ধযুক্ত অ্যান্টিঅক্সিডেন্ট পাতা।"
  },
  {
    id: 180,
    bengaliName: "ভ্যানিলা",
    scientificName: "Vanilla planifolia",
    bengaliPronunciation: "ভ্যানিলা প্ল্যানিফোলিয়া",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "অর্কিড জাতীয় উদ্ভিদের শুঁটি; মিষ্টি খাবারের বিশ্বসেরা সুবাস।"
  },
  {
    id: 181,
    bengaliName: "হিং",
    scientificName: "Ferula foetida",
    bengaliPronunciation: "ফেরুলা ফোটিডা",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "উগ্র গন্ধযুক্ত গাছের আঠা; হজম সহায়ক ও গ্যাস্ট্রিকের ওষুধ।"
  },
  {
    id: 182,
    bengaliName: "স্টার অ্যানিস",
    scientificName: "Illicium verum",
    bengaliPronunciation: "ইলিসিয়াম ভেরাম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "তারকাসদৃশ মসলা; তামিলু প্রস্তুতকারী অ্যান্টিভাইরাল উৎস।"
  },
  {
    id: 183,
    bengaliName: "পোস্তদানা / আফিম বীজ",
    scientificName: "Papaver somniferum",
    bengaliPronunciation: "পাপাভার সোমনিফেরাম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "পোস্ত বাটা ও রাজকীয় রান্নার ঘন স্বাদযুক্ত তেলবীজ।"
  },
  {
    id: 184,
    bengaliName: "ক্যাপসিকাম (মিষ্টি মরিচ)",
    scientificName: "Capsicum annuum var. grossum",
    bengaliPronunciation: "ক্যাপসিকাম অ্যানুয়াম গ্রোসাম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "মিষ্টি ক্রাঞ্চি বেল পেপার; ভিটামিন সি ও সালাদের উপাদান।"
  },
  {
    id: 185,
    bengaliName: "নাগা মরিচ / ভূত জোলোকিয়া",
    scientificName: "Capsicum chinense",
    bengaliPronunciation: "ক্যাপসিকাম চিনেন্সে",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "বিশ্বের অন্যতম তীব্র ঝাঁঝালো ঝাল মরিচ।"
  },
  {
    id: 186,
    bengaliName: "ধনেপাতা (বিলাতি ধনেপাতা)",
    scientificName: "Eryngium foetidum",
    bengaliPronunciation: "এরিনজিয়াম ফোটিডাম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "তীব্র ধনে গন্ধযুক্ত লম্বা কাঁটাযুক্ত পাতা।"
  },
  {
    id: 187,
    bengaliName: "লেমনগ্রাস",
    scientificName: "Cymbopogon citratus",
    bengaliPronunciation: "সিম্বোপোগন সাইট্রেটাস",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "লেবুর সুগন্ধি ঘাস; থাই স্যুপ ও চায়ে বহুল ব্যবহৃত।"
  },
  {
    id: 188,
    bengaliName: "লবঙ্গ তুলসী",
    scientificName: "Ocimum gratissimum",
    bengaliPronunciation: "ওসিমাম গ্র্যাটিসিমাম",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "ইউজেনল সমৃদ্ধ লবঙ্গের সুবাসযুক্ত ভেষজ মসলা পাতা।"
  },
  {
    id: 189,
    bengaliName: "অরিগানো",
    scientificName: "Origanum vulgare",
    bengaliPronunciation: "অরিগানাম ভালগেয়ার",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "পিৎজা ও পাস্তার ইতালীয় ঐতিহ্যবাহী সুগন্ধি পাতা।"
  },
  {
    id: 190,
    bengaliName: "রোজমেরি",
    scientificName: "Salvia rosmarinus",
    bengaliPronunciation: "সালভিয়া রোজমারিনাস",
    category: "মসলা জাতীয় উদ্ভিদ",
    importance: "মাংস ও রোস্ট রান্নার মনমাতানো পাইন সুবাসিত পাতা।"
  },
  {
    id: 191,
    bengaliName: "তুলসী (কৃষ্ণ তুলসী)",
    scientificName: "Ocimum tenuiflorum",
    bengaliPronunciation: "ওসিমাম টেনুইফ্লোরাম",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "সর্দি, কাশি ও রোগপ্রতিরোধে সনাতন ভারতের পবিত্র মহৌষধ।"
  },
  {
    id: 192,
    bengaliName: "রাম তুলসী",
    scientificName: "Ocimum gratissimum",
    bengaliPronunciation: "ওসিমাম গ্র্যাটিসিমাম",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "শ্বাসকষ্ট ও ফ্লু নিরাময়কারী অ্যান্টিব্যাকটেরিয়াল ভেষজ।"
  },
  {
    id: 193,
    bengaliName: "নিম",
    scientificName: "Azadirachta indica",
    bengaliPronunciation: "অ্যাজাডিরাকটা ইন্ডিকা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "প্রাকৃতিক জীবাণুনাশক; নিমবিডিন ও অ্যাজাডিরাকটিন সমৃদ্ধ বৃক্ষ।"
  },
  {
    id: 194,
    bengaliName: "চিরতা",
    scientificName: "Swertia chirayita",
    bengaliPronunciation: "সোয়ারসিয়া চিরায়তা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "তীব্র তিক্ত জীর্ণকারক; জ্বর ও রক্ত পরিশোধনে অনন্য ভেষজ।"
  },
  {
    id: 195,
    bengaliName: "কালমেঘ",
    scientificName: "Andrographis paniculata",
    bengaliPronunciation: "অ্যান্ড্রোগ্রাফিস প্যানিকুলাটা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "যকৃতের সুরক্ষায় ও কৃমিনাশে তিক্ততার রাজা খ্যাত ভেষজ।"
  },
  {
    id: 196,
    bengaliName: "ঘৃতকুমারী / অ্যালোভেরা",
    scientificName: "Aloe vera",
    bengaliPronunciation: "অ্যালো ভেরা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "ত্বকের যত্ন, পোড়া উপশম ও কোষ্ঠকাঠিন্যে ব্যবহৃত মাংসল উদ্ভিদ।"
  },
  {
    id: 197,
    bengaliName: "বাসক",
    scientificName: "Justicia adhatoda",
    bengaliPronunciation: "জাস্টিসিয়া আধাটোডা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "ভ্যাসিসিন সমৃদ্ধ কাশির প্রাকৃতিক নিরাময়কারী কফনাশক পাতা।"
  },
  {
    id: 198,
    bengaliName: "সর্পগন্ধা",
    scientificName: "Rauvolfia serpentina",
    bengaliPronunciation: "রাউলফিয়া সারপেন্টিনা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "রিসারপিন সমৃদ্ধ উচ্চ রক্তচাপ ও অনিদ্রার প্রাচীন ওষুধ।"
  },
  {
    id: 199,
    bengaliName: "অশ্বগন্ধা",
    scientificName: "Withania somnifera",
    bengaliPronunciation: "উইথানিয়া সোমনিফেরা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "উইথানোলাইডযুক্ত মানসিক চাপ কমায় ও শক্তিবর্ধক অ্যাডাপটোজেন।"
  },
  {
    id: 200,
    bengaliName: "শতমূলী",
    scientificName: "Asparagus racemosus",
    bengaliPronunciation: "অ্যাসপারাগাস রেসিমোসাস",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "মহিলাদের হরমোন ভারসাম্য ও বলকারক পুষ্টিকর মূল।"
  },
  {
    id: 201,
    bengaliName: "যষ্টিমধু",
    scientificName: "Glycyrrhiza glabra",
    bengaliPronunciation: "গ্লাইসিরিজা গ্লাবরা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "গলা ভাঙা ও গ্যাস্ট্রিক আলসার উপশমকারী মিষ্টি মূল।"
  },
  {
    id: 202,
    bengaliName: "অর্জুন",
    scientificName: "Terminalia arjuna",
    bengaliPronunciation: "টার্মিনালিয়া অর্জুনা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "হৃদরোগের মহৌষধ; রক্তচাপ ও হৃদপিণ্ডের পেশি সবলকারক গাছের ছাল।"
  },
  {
    id: 203,
    bengaliName: "আমলকী (ঔষধি)",
    scientificName: "Phyllanthus emblica",
    bengaliPronunciation: "ফাই্ল্যান্থাস এমব্লিকা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "চুল পড়া রোধ ও ভিটামিন সি সমৃদ্ধ কোষের পুনরুজ্জীবনকারী।"
  },
  {
    id: 204,
    bengaliName: "হরীতকী (ঔষধি)",
    scientificName: "Terminalia chebula",
    bengaliPronunciation: "টার্মিনালিয়া চেবুলা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "কোষ্ঠকাঠিন্য ও পরিপাকের প্রাচীন আয়ুর্বেদিক বিশোধক।"
  },
  {
    id: 205,
    bengaliName: "বহেড়া (ঔষধি)",
    scientificName: "Terminalia bellirica",
    bengaliPronunciation: "টার্মিনালিয়া বেলেরিকা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "স্বরভঙ্গ ও চোখের জ্যোতি বৃদ্ধিতে ব্যবহৃত ঐতিহ্যবাহী ফল।"
  },
  {
    id: 206,
    bengaliName: "ভূঁইআমলা",
    scientificName: "Phyllanthus niruri",
    bengaliPronunciation: "ফাই্ল্যান্থাস নিরুরি",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "হেপাটাইটিস বি ও জন্ডিস নিরাময়ে বৈজ্ঞানিকভাবে প্রমাণিত ভেষজ।"
  },
  {
    id: 207,
    bengaliName: "কুলেখাড়া",
    scientificName: "Hygrophila auriculata",
    bengaliPronunciation: "হাইগ্রোফিলা অরিকুলাটা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "রক্তে হিমোগ্লোবিন বৃদ্ধিতে অত্যন্ত কার্যকর কাঁটাযুক্ত শাক।"
  },
  {
    id: 208,
    bengaliName: "পুনর্নবা",
    scientificName: "Boerhavia diffusa",
    bengaliPronunciation: "বোরহাভিয়া ডিফিউসা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "মূত্রবর্ধক ও কিডনির কার্যকারিতা রক্ষাকারী ভেষজ উদ্ভিদ।"
  },
  {
    id: 209,
    bengaliName: "দাঁতমর্দন / শ্বেতদ্রোণ",
    scientificName: "Leucas aspera",
    bengaliPronunciation: "লিউকোস অ্যাসপেরা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "মাথাব্যথা, সর্দি ও শিশুদের কৃমিনাশে ব্যবহৃত বুনো ফুলগাছ।"
  },
  {
    id: 210,
    bengaliName: "লজ্জাবতী",
    scientificName: "Mimosa pudica",
    bengaliPronunciation: "মিমোসা পুডিকা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "স্পর্শে সংকুচিত হওয়া লতা; পাইলস ও রক্তক্ষরণ নিরাময়ক।"
  },
  {
    id: 211,
    bengaliName: "পাথরকুচি",
    scientificName: "Kalanchoe pinnata",
    bengaliPronunciation: "ক্যালানচো পিনাটা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "পাতা থেকে প্রজননক্ষম; কিডনির পাথর ও ক্ষত নিরাময়কারী।"
  },
  {
    id: 212,
    bengaliName: "আকন্দ",
    scientificName: "Calotropis gigantea",
    bengaliPronunciation: "ক্যালোট্রপিস জাইগান্টিয়া",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "বাতব্যথা নিবারক ও একজিমা উপশমে ব্যবহৃত দুধযুক্ত গুল্ম।"
  },
  {
    id: 213,
    bengaliName: "ধুতুরা",
    scientificName: "Datura metel",
    bengaliPronunciation: "ডাটুরা মেটেল",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "স্কোপোলামিন সমৃদ্ধ উপক্ষারযুক্ত ভেষজ; নিয়ন্ত্রিত ব্যথানাশক।"
  },
  {
    id: 214,
    bengaliName: "বেলেডোনা",
    scientificName: "Atropa belladonna",
    bengaliPronunciation: "অ্যাট্রোপা বেলাডোনা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "অ্যাট্রোপিন সমৃদ্ধ চক্ষু চিকিৎসার প্রাচীন বিষাক্ত ভেষজ।"
  },
  {
    id: 215,
    bengaliName: "সিনকোনা",
    scientificName: "Cinchona officinalis",
    bengaliPronunciation: "সিনকোনা অফিসিনালিস",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "কুইনাইন সমৃদ্ধ ম্যালেরিয়া নিরাময়কারী বিখ্যাত ঐতিহাসিক বৃক্ষ।"
  },
  {
    id: 216,
    bengaliName: "ইপিকাক",
    scientificName: "Carapichea ipecacuanha",
    bengaliPronunciation: "ক্যারাপিসিয়া ইপেকাকুয়ানহা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "বমি উদ্রেককারী ও অ্যামিবিক আমাশয়ের ঐতিহ্যবাহী ওষুধ।"
  },
  {
    id: 217,
    bengaliName: "ডিজিট্যালিস",
    scientificName: "Digitalis purpurea",
    bengaliPronunciation: "ডিজিট্যালিস পারপুরিয়া",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "ডিগক্সিন সমৃদ্ধ হৃদস্পন্দন নিয়ন্ত্রণকারী আন্তর্জাতিক ভেষজ।"
  },
  {
    id: 218,
    bengaliName: "নয়নতারা",
    scientificName: "Catharanthus roseus",
    bengaliPronunciation: "ক্যাথারান্থাস রোজিয়াস",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "ভিনক্রিস্টিন ও ভিনব্লাস্টিন সমৃদ্ধ ব্লাড ক্যান্সার প্রতিরোধী।"
  },
  {
    id: 219,
    bengaliName: "কালকাসুন্দা",
    scientificName: "Senna occidentalis",
    bengaliPronunciation: "সেন্না অক্সিডেন্টালিস",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "কাশি ও কোষ্ঠকাঠিন্য উপশমে ব্যবহৃত বুনো ঔষধি গুল্ম।"
  },
  {
    id: 220,
    bengaliName: "সোনাপাতা",
    scientificName: "Senna alexandrina",
    bengaliPronunciation: "সেন্না আলেকজান্দ্রিনা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "অন্ত্র পরিষ্কারক ও তীব্র কোষ্ঠকাঠিন্যের স্বীকৃত ভেষজ ওষুধ।"
  },
  {
    id: 221,
    bengaliName: "ইসবগুল",
    scientificName: "Plantago ovata",
    bengaliPronunciation: "প্ল্যান্টাগো ওভাটা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "ইসবগুলের ভুসি; কোষ্ঠকাঠিন্য ও পেটের অস্বস্তি নিরাময়ক ভুসি।"
  },
  {
    id: 222,
    bengaliName: "কালোমেঘ (দেশি)",
    scientificName: "Andrographis echioides",
    bengaliPronunciation: "অ্যান্ড্রোগ্রাফিস একিওয়েডেস",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "জ্বর ও পাকস্থলীর অসুখে ব্যবহৃত ক্ষুদ্র ঔষধি গুল্ম।"
  },
  {
    id: 223,
    bengaliName: "ঘোড়ানিম",
    scientificName: "Melia azedarach",
    bengaliPronunciation: "মেলিয়া অ্যাজেডারাক",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "নিমের সমগোত্রীয় চামড়ার রোগ ও কীট দমনে ব্যবহৃত বৃক্ষ।"
  },
  {
    id: 224,
    bengaliName: "তেলাকুচা",
    scientificName: "Coccinia grandis",
    bengaliPronunciation: "কক্সিনিয়া গ্র্যান্ডিস",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "ডায়াবেটিস রোগীদের প্রাকৃতিক ইনসুলিন সদৃশ বুনো লতা।"
  },
  {
    id: 225,
    bengaliName: "কেশররাজ / ভৃঙ্গরাজ",
    scientificName: "Eclipta prostrata",
    bengaliPronunciation: "এক্লিপ্টা প্রোস্ট্রাটা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "চুলের অকালপক্বতা রোধ ও লিভারের সুরক্ষায় শ্রেষ্ঠ ভেষজ।"
  },
  {
    id: 226,
    bengaliName: "অনন্তমূল",
    scientificName: "Hemidesmus indicus",
    bengaliPronunciation: "হেমিডেসমাচ ইন্ডিকাস",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "রক্ত পরিষ্কারক ও চর্মরোগের মিষ্টি সুবাসিত মূল।"
  },
  {
    id: 227,
    bengaliName: "গুলঞ্চ",
    scientificName: "Tinospora cordifolia",
    bengaliPronunciation: "টিনোস্পোরা কর্ডিফোলিয়া",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "ইমিউনিটি বুস্টার; ডেঙ্গু ও দীর্ঘস্থায়ী জ্বরের মহৌষধ গিলয়।"
  },
  {
    id: 228,
    bengaliName: "দাদমর্দন",
    scientificName: "Senna alata",
    bengaliPronunciation: "সেন্না আলাটা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "দাউদ, খোসপাঁচড়া ও চর্মরোগের কার্যকর ছত্রাকনাশক পাতা।"
  },
  {
    id: 229,
    bengaliName: "শিয়ালকাঁটা",
    scientificName: "Argemone mexicana",
    bengaliPronunciation: "আর্জেন্টমোন মেক্সিকানা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "হলুদ দুধযুক্ত বিষাক্ত বুনো গাছ; চর্মরোগে বাহ্যিক প্রয়োগ।"
  },
  {
    id: 230,
    bengaliName: "উলটকম্বল",
    scientificName: "Abroma augustum",
    bengaliPronunciation: "অ্যাব্রোমা অগাস্টাম",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "স্ত্রীব্যাধি ও মাসিকের জটিলতা দূরীকরণে নির্ভরযোগ্য ভেষজ।"
  },
  {
    id: 231,
    bengaliName: "আমলতকী / নাগেশ্বর",
    scientificName: "Mesua ferrea",
    bengaliPronunciation: "মেসুয়া ফেরিয়া",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "সুগন্ধি রক্ত আমাশয় ও অর্শরোগের ঔষধি ফুলযুক্ত বৃক্ষ।"
  },
  {
    id: 232,
    bengaliName: "কুর্চি / ইন্দ্রযব",
    scientificName: "Holarrhena pubescens",
    bengaliPronunciation: "হোলারহিনা পিউবেসেন্স",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "অ্যামিবিক আমাশয় ও পেটের ব্যথার অদ্বিতীয় বনজ ওষুধ।"
  },
  {
    id: 233,
    bengaliName: "গন্ধভাদালি",
    scientificName: "Paederia foetida",
    bengaliPronunciation: "পেডেরিয়া ফোটিডা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "বাতব্যথা ও পেটের পুরানো অসুখের সুপরিচিত ভেষজ পাতা।"
  },
  {
    id: 234,
    bengaliName: "দূর্বাঘাস",
    scientificName: "Cynodon dactylon",
    bengaliPronunciation: "সাইনোডন ড্যাকটাইলন",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "রক্তক্ষরণ বন্ধে ও ক্ষত সারাতে দ্রুত কার্যকরী ঘাস।"
  },
  {
    id: 235,
    bengaliName: "মান্দার",
    scientificName: "Erythrina variegata",
    bengaliPronunciation: "এরিথ্রিনা ভ্যারিগেটা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "কৃমিনাশক ও চোখের ব্যথায় ব্যবহৃত কাঁটাযুক্ত বৃক্ষ।"
  },
  {
    id: 236,
    bengaliName: "চিতা (শ্বেত চিতা)",
    scientificName: "Plumbago zeylanica",
    bengaliPronunciation: "প্লাম্বাগো জেইলানিকা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "প্লুম্বাগিনযুক্ত অগ্নিমান্দ্য ও হজমশক্তি বৃদ্ধিকারী ভেষজ।"
  },
  {
    id: 237,
    bengaliName: "রক্ত চিতা",
    scientificName: "Plumbago indica",
    bengaliPronunciation: "প্লাম্বাগো ইন্ডিকা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "তীব্র উত্তেজক ও বাত নিরাময়ে ব্যবহৃত লাল ফুলযুক্ত গুল্ম।"
  },
  {
    id: 238,
    bengaliName: "বিষকাটালী",
    scientificName: "Persicaria hydropiper",
    bengaliPronunciation: "পারসিক্যারিয়া হাইডরোপাইপার",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "জলাশয়ের তীরের ক্ষত নিবারক ও পোকা নিরোধক গাছ।"
  },
  {
    id: 239,
    bengaliName: "আদাবেজি / আদাপাত",
    scientificName: "Zingiber zerumbet",
    bengaliPronunciation: "জিঞ্জিবার জেরামবেট",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "বুনো আদা; ক্যান্সার ও প্রদাহরোধী বৈশিষ্ট্যে সমৃদ্ধ।"
  },
  {
    id: 240,
    bengaliName: "সাদা লজ্জাবতী",
    scientificName: "Biophytum sensitivum",
    bengaliPronunciation: "বায়োফাইটাম সংবেদনশীল",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "ডায়াবেটিস ও কিডনির প্রদাহে ব্যবহৃত সংবেদনশীল ভেষজ।"
  },
  {
    id: 241,
    bengaliName: "আপাং / চিচিংগা বুনো",
    scientificName: "Achyranthes aspera",
    bengaliPronunciation: "অ্যাকাইর্যান্থেস অ্যাসপেরা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "দাঁতের মাড়ি মজবুত ও হাঁপানি উপশমে ব্যবহৃত উল্টো কাঁটাযুক্ত গাছ।"
  },
  {
    id: 242,
    bengaliName: "বনকপাস",
    scientificName: "Thespesia populnea",
    bengaliPronunciation: "থেসফেসিয়া পপুলনিয়া",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "উপকূলীয় চর্মরোগ উপশমকারী ভেষজ বৃক্ষ।"
  },
  {
    id: 243,
    bengaliName: "চালমুগরা",
    scientificName: "Hydnocarpus wightianus",
    bengaliPronunciation: "হাইডনোকার্পাস উইটিয়ানাস",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "কুষ্ঠরোগের ঐতিহাসিক প্রাকৃতিক ওষুধ তৈরির বীজ তেল।"
  },
  {
    id: 244,
    bengaliName: "জটামাংসী",
    scientificName: "Nardostachys jatamansi",
    bengaliPronunciation: "নার্ডোস্ট্যাকিস জটামাংসী",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "উদ্বেগ ও অনিদ্রা দূরকারী স্নায়ু শান্তকারী সুগন্ধি শিকড়।"
  },
  {
    id: 245,
    bengaliName: "কস্তুরী হলুদ",
    scientificName: "Curcuma aromatica",
    bengaliPronunciation: "কারকিউমা অ্যারোমেটিকা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "রূপচর্চায় ব্রণের দাগ দূরকারী অসাধারণ সুগন্ধি হলুদ।"
  },
  {
    id: 246,
    bengaliName: "দারুহরিদ্রা",
    scientificName: "Berberis aristata",
    bengaliPronunciation: "বারবেরিস অ্যারিস্টাটা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "বারবেরিন সমৃদ্ধ চোখ ও ত্বকের ইনফেকশন দূরকারী ওষুধ।"
  },
  {
    id: 247,
    bengaliName: "গোরক্ষচাকুলে",
    scientificName: "Uraria picta",
    bengaliPronunciation: "ইউর্যারিয়া পিকটা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "দশমূলার অন্যতম উপাদান; হাড় জোড়া লাগাতে সাহায্যকারী।"
  },
  {
    id: 248,
    bengaliName: "শালপর্ণী",
    scientificName: "Desmodium gangeticum",
    bengaliPronunciation: "ডেসমোডিয়াম গ্যাঞ্জেটিকাম",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "হৃদপিণ্ড ও ফুসফুসের শক্তিবর্ধক প্রাচীন আয়ুর্বেদিক ভেষজ।"
  },
  {
    id: 249,
    bengaliName: "গোক্ষুর",
    scientificName: "Tribulus terrestris",
    bengaliPronunciation: "ট্রাইবুলাস টেরেস্ট্রিস",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "কিডনি ও মূত্রনালীর সুস্থতা এবং টেস্টোস্টেরন সহায়ক কাঁটাযুক্ত ফল।"
  },
  {
    id: 250,
    bengaliName: "বরাহীকন্দ",
    scientificName: "Dioscorea bulbifera",
    bengaliPronunciation: "ডায়োস্কোরিয়া বালবিফেরা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "ডায়োসবুলবিন সমৃদ্ধ হরমোন ও প্রদাহনাশক মিষ্টি কন্দ।"
  },
  {
    id: 251,
    bengaliName: "মহামেদ / মেদ",
    scientificName: "Polygonatum verticillatum",
    bengaliPronunciation: "পলিগোনাটাম ভার্টিসিলাটাম",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "অষ্টবর্গের বলকারক ও তারুণ্য ধরে রাখার হিমালয়ী ভেষজ।"
  },
  {
    id: 252,
    bengaliName: "জীবক",
    scientificName: "Malaxis acuminata",
    bengaliPronunciation: "ম্যালাক্সিস একিউমিনেটা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "রোগপ্রতিরোধ ও জীবনীশক্তি বর্ধক বিরল অর্কিড ভেষজ।"
  },
  {
    id: 253,
    bengaliName: "ঋষভক",
    scientificName: "Malaxis muscifera",
    bengaliPronunciation: "ম্যালাক্সিস মাসসিফেরা",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "শুক্র ও জীবনীশক্তি বৃদ্ধিকারী প্রাচীন অষ্টবর্গীয় ভেষজ।"
  },
  {
    id: 254,
    bengaliName: "কাকোলী",
    scientificName: "Fritillaria roylei",
    bengaliPronunciation: "ফ্রিটিলারিয়া রয়লি",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "কাশিনাশক ও ফুসফুস শক্তিশালীকারী মূল্যবান কন্দ।"
  },
  {
    id: 255,
    bengaliName: "ক্ষীরকাকোলী",
    scientificName: "Lilium polyphyllum",
    bengaliPronunciation: "লিলিয়াম পলিফাইলাম",
    category: "ঔষধি ও ভেষজ উদ্ভিদ",
    importance: "শারীরিক ক্লান্তি ও দুর্বলতা দূরকারী স্নিগ্ধ ভেষজ।"
  },
  {
    id: 256,
    bengaliName: "গোলাপ (দেশি গোলাপ)",
    scientificName: "Rosa damascena",
    bengaliPronunciation: "রোজা দামাসেনা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "গোলাপজল ও আতর উৎপাদনে ব্যবহৃত অতুলনীয় সুগন্ধি ফুল।"
  },
  {
    id: 257,
    bengaliName: "হাইব্রিড গোলাপ",
    scientificName: "Rosa hybrida",
    bengaliPronunciation: "রোজা হাইব্রিডা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "বাণিজ্যিক কাট ফ্লাওয়ারের বিশ্বখ্যাত বহুমুখী রঙের ফুল।"
  },
  {
    id: 258,
    bengaliName: "জবা",
    scientificName: "Hibiscus rosa-sinensis",
    bengaliPronunciation: "হিবিসকাস রোজা-সাইনেনসিস",
    category: "ফুল ও শোভাবর্ধক",
    importance: "পুষ্পপ্রতীকের আদর্শ উদাহরণ ও চুলের টনিক হিসেবে ব্যবহৃত।"
  },
  {
    id: 259,
    bengaliName: "গাঁদা (আফ্রিকান গাঁদা)",
    scientificName: "Tagetes erecta",
    bengaliPronunciation: "ট্যাজেটেস ইরেকটা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "শীতকালীন উৎসব ও মালা তৈরির জনপ্রিয় হলুদ-কমলা ফুল।"
  },
  {
    id: 260,
    bengaliName: "ফরাসি গাঁদা",
    scientificName: "Tagetes patula",
    bengaliPronunciation: "ট্যাজেটেস প্যাটুল্লা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "ছোট জাতের তীব্র সুগন্ধযুক্ত লালচে-কমলা বর্ণিল ফুল।"
  },
  {
    id: 261,
    bengaliName: "সূর্যমুখী (শোভাবর্ধক)",
    scientificName: "Helianthus annuus",
    bengaliPronunciation: "হ্যালিয়ান্থাস অ্যানুয়াস",
    category: "ফুল ও শোভাবর্ধক",
    importance: "সূর্যের দিকে মুখ ফেরানো দৃষ্টিনন্দন হলুদ পুষ্পমঞ্জরি।"
  },
  {
    id: 262,
    bengaliName: "রজনীগন্ধা",
    scientificName: "Polianthes tuberosa",
    bengaliPronunciation: "পলিঅ্যান্থেস টিউবারোসা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "রাত জাগা তীব্র মাদকতাময় সুগন্ধি সাদা কাট ফ্লাওয়ার।"
  },
  {
    id: 263,
    bengaliName: "বেলি / বেলিফুল",
    scientificName: "Jasminum sambac",
    bengaliPronunciation: "জ্যাসমিনাম সাম্বাক",
    category: "ফুল ও শোভাবর্ধক",
    importance: "বাঙালির খোঁপায় শোভা পাওয়া তীব্র মিষ্টি সুগন্ধি সাদা ফুল।"
  },
  {
    id: 264,
    bengaliName: "জুঁই",
    scientificName: "Jasminum auriculatum",
    bengaliPronunciation: "জ্যাসমিনাম অরিকুলাটাম",
    category: "ফুল ও শোভাবর্ধক",
    importance: "স্নিগ্ধ সুগন্ধযুক্ত সুপরিচিত শুভ্র ছোট ফুল।"
  },
  {
    id: 265,
    bengaliName: "চামেলি",
    scientificName: "Jasminum grandiflorum",
    bengaliPronunciation: "জ্যাসমিনাম গ্র্যান্ডিফ্লোরাম",
    category: "ফুল ও শোভাবর্ধক",
    importance: "সুগন্ধি তেল ও পারফিউমের কাঁচামাল উৎপাদক সাদা ফুল।"
  },
  {
    id: 266,
    bengaliName: "টগর (কাঠ টগর)",
    scientificName: "Tabernaemontana divaricata",
    bengaliPronunciation: "টাবারনিমন্টানা ডিভারিকাটা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "পাঁচ পাপড়িযুক্ত ঘন সবুজ পাতার মাঝে দুধসাদা চিরসবুজ ফুল।"
  },
  {
    id: 267,
    bengaliName: "হাসনাহেনা",
    scientificName: "Cestrum nocturnum",
    bengaliPronunciation: "সেসট্রাম নকটার্নাম",
    category: "ফুল ও শোভাবর্ধক",
    importance: "রাতের আঁধারে চারপাশ মাতাল করা তীব্র মিষ্টি সুবাসিত ফুল।"
  },
  {
    id: 268,
    bengaliName: "কামিনী",
    scientificName: "Murraya paniculata",
    bengaliPronunciation: "মুরাইয়া প্যানিকুলাটা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "ছোট সাদা ফুলের থোকা; বৃষ্টির দিনে তীব্র সুবাস ছড়ায়।"
  },
  {
    id: 269,
    bengaliName: "গন্ধরাজ",
    scientificName: "Gardenia jasminoides",
    bengaliPronunciation: "গার্ডেনিয়া জ্যাসমিনয়েডেস",
    category: "ফুল ও শোভাবর্ধক",
    importance: "মোমের মতো ঘন সাদা পাপড়ির রাজকীয় সুগন্ধি ফুল।"
  },
  {
    id: 270,
    bengaliName: "চাঁপা (স্বর্ণচাঁপা)",
    scientificName: "Magnolia champaca",
    bengaliPronunciation: "ম্যাগনোলিয়া চম্পাকা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "হলুদ রঙের অত্যন্ত তীব্র ও সুদূরপ্রসারী সুবাসযুক্ত বনজ ফুল।"
  },
  {
    id: 271,
    bengaliName: "দোলনচাঁপা",
    scientificName: "Hedychium coronarium",
    bengaliPronunciation: "হেডিচিয়াম করোনাৰিয়াম",
    category: "ফুল ও শোভাবর্ধক",
    importance: "সাদা প্রজাপতির ন্যায় মনমুগ্ধকর স্নিগ্ধ সুবাসিত জলজ ফুল।"
  },
  {
    id: 272,
    bengaliName: "কদম",
    scientificName: "Neolamarckia cadamba",
    bengaliPronunciation: "নিওলামারকিয়া কদাম্বা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "বর্ষার প্রতীক; সোনালী গোলকের মতো অপূর্ব রোমশ ফুল।"
  },
  {
    id: 273,
    bengaliName: "কৃষ্ণচূড়া",
    scientificName: "Delonix regia",
    bengaliPronunciation: "ডেলোনিক্স রেজিয়া",
    category: "ফুল ও শোভাবর্ধক",
    importance: "গ্রীষ্মের খরতাপে দিগন্ত রাঙিয়ে দেওয়া রক্তিম আগুনরঙা ফুল।"
  },
  {
    id: 274,
    bengaliName: "রাধাচূড়া",
    scientificName: "Peltophorum pterocarpum",
    bengaliPronunciation: "পেল্টোফোরাম টেরোকার্পাম",
    category: "ফুল ও শোভাবর্ধক",
    importance: "কৃষ্ণচূড়ার সমগোত্রীয় সোনালী হলুদ রঙের উজ্জ্বল ফুল।"
  },
  {
    id: 275,
    bengaliName: "সোনালু / বাঁদরলাঠি",
    scientificName: "Cassia fistula",
    bengaliPronunciation: "ক্যাসিয়া ফিস্টুলা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "হলুদ ঝাড়বাতির মতো ঝুলে থাকা গ্রীষ্মের অপূর্ব রূপসী ফুল।"
  },
  {
    id: 276,
    bengaliName: "জারুল",
    scientificName: "Lagerstroemia speciosa",
    bengaliPronunciation: "ল্যাজারস্ট্রোমিয়া স্পিসিওসা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "বাংলার গ্রীষ্ম-বর্ষার বেগুনি রঙের মায়াবী রূপসী বনফুল।"
  },
  {
    id: 277,
    bengaliName: "পলাশ",
    scientificName: "Butea monosperma",
    bengaliPronunciation: "বিউটিয়া মোনোস্পার্মা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "বসন্তের আগুন; ফাল্গুনে ফোটা টকটকে লাল বুনো ফুল।"
  },
  {
    id: 278,
    bengaliName: "শিমুল",
    scientificName: "Bombax ceiba",
    bengaliPronunciation: "বোম্বাক্স সিব্বা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "বসন্তের বিশাল রক্তিম ফুল ও প্রাকৃতিক নরম তুলার প্রধান বৃক্ষ।"
  },
  {
    id: 279,
    bengaliName: "বকুল",
    scientificName: "Mimusops elengi",
    bengaliPronunciation: "মিমুসোপ্স এলেঙ্গি",
    category: "ফুল ও শোভাবর্ধক",
    importance: "শুকিয়ে গেলেও সুবাস না হারানো তারকাসদৃশ স্নিগ্ধ ফুল।"
  },
  {
    id: 280,
    bengaliName: "শিউলি / শেফালি",
    scientificName: "Nyctanthes arbor-tristis",
    bengaliPronunciation: "নিকট্যান্থেস আর্বোর-ট্রিসটিস",
    category: "ফুল ও শোভাবর্ধক",
    importance: "শরতের ভোরে ঝরে পড়া কমলা বোঁটার শুভ্র স্বর্গীয় ফুল।"
  },
  {
    id: 281,
    bengaliName: "কাশফুল",
    scientificName: "Saccharum spontaneum",
    bengaliPronunciation: "স্যাকারাম স্পনটেনিয়াম",
    category: "ফুল ও শোভাবর্ধক",
    importance: "শরতের নীল আকাশের নিচে নদীর চরের শুভ্র রেশমি ঘাসফুল।"
  },
  {
    id: 282,
    bengaliName: "পদ্ম (নীল পদ্ম / রক্ত পদ্ম)",
    scientificName: "Nelumbo nucifera",
    bengaliPronunciation: "নেলুম্বো নিউসিফেরা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "পবিত্রতার প্রতীক জলজ পুষ্প; বৃহৎ পাতা ও সুদৃশ্য ফুল।"
  },
  {
    id: 283,
    bengaliName: "অপরাজিতা (নীল অপরাজিতা)",
    scientificName: "Clitoria ternatea",
    bengaliPronunciation: "ক্লিটোরিয়া টারনেটিয়া",
    category: "ফুল ও শোভাবর্ধক",
    importance: "নীল চা ও অ্যান্টিঅক্সিডেন্ট তৈরিতে ব্যবহৃত রূপসী লতানো ফুল।"
  },
  {
    id: 284,
    bengaliName: "সন্ধ্যামালতী",
    scientificName: "Mirabilis jalapa",
    bengaliPronunciation: "মিরাবিলিস জালাপা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "বিকালে ফোটা বহু রঙের ফুল; অসম্পূর্ণ প্রকটতার উদাহরণ।"
  },
  {
    id: 285,
    bengaliName: "নয়নতারা (শোভাবর্ধক)",
    scientificName: "Catharanthus roseus",
    bengaliPronunciation: "ক্যাথারান্থাস রোজিয়াস",
    category: "ফুল ও শোভাবর্ধক",
    importance: "গোলাপি বা সাদা রঙের বারোমাসি সহজলভ্য সুন্দর ফুল।"
  },
  {
    id: 286,
    bengaliName: "ডালিয়া",
    scientificName: "Dahlia pinnata",
    bengaliPronunciation: "ডালিয়া পিনাটা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "শীতের বাগানের সবচেয়ে বড় ও নজরকাড়া বর্ণিল পুষ্পস্তবক।"
  },
  {
    id: 287,
    bengaliName: "গ্ল্যাডিওলাস",
    scientificName: "Gladiolus grandiflorus",
    bengaliPronunciation: "গ্ল্যাডিওলাস গ্র্যান্ডিফ্লোরাস",
    category: "ফুল ও শোভাবর্ধক",
    importance: "বাণিজ্যিক তোড়া তৈরির তরবারি আকৃতির পাতার স্টিক ফুল।"
  },
  {
    id: 288,
    bengaliName: "জারবেরা",
    scientificName: "Gerbera jamesonii",
    bengaliPronunciation: "জারবেরা জেমসনি",
    category: "ফুল ও শোভাবর্ধক",
    importance: "আধুনিক বাণিজ্যিক কাট ফ্লাওয়ারের প্রাণবন্ত রঙের ফুল।"
  },
  {
    id: 289,
    bengaliName: "অর্কিড (ডেনড্রোবিয়াম)",
    scientificName: "Dendrobium nobile",
    bengaliPronunciation: "ডেনড্রোবিয়াম নোবাইল",
    category: "ফুল ও শোভাবর্ধক",
    importance: "পরাশ্রয়ী মূল্যবান দীর্ঘস্থায়ী বিদেশি রূপসী ফুল।"
  },
  {
    id: 290,
    bengaliName: "অ্যান্থুরিয়াম",
    scientificName: "Anthurium andraeanum",
    bengaliPronunciation: "অ্যান্থুরিয়াম অ্যান্ড্রেয়েনাম",
    category: "ফুল ও শোভাবর্ধক",
    importance: "চকচকে লাল রঙের মোমের মতো স্প্যাথযুক্ত আধুনিক ফুল।"
  },
  {
    id: 291,
    bengaliName: "বোগানভিলিয়া / বাগানবিলাস",
    scientificName: "Bougainvillea spectabilis",
    bengaliPronunciation: "বোগানভিলিয়া স্পেকটাবিলিস",
    category: "ফুল ও শোভাবর্ধক",
    importance: "রঙিন পাতার মতো ব্র্যাক্টযুক্ত চিরসবুজ মনকাড়া লতা।"
  },
  {
    id: 292,
    bengaliName: "মাধবীলতা",
    scientificName: "Hiptage benghalensis",
    bengaliPronunciation: "হিপ্টেজ বেনঘালেনসিস",
    category: "ফুল ও শোভাবর্ধক",
    importance: "বসন্তের তীব্র সুবাসিত পাঁচ পাপড়ির ঐতিহ্যবাহী ক্লাসিক লতা।"
  },
  {
    id: 293,
    bengaliName: "মালতীলতা",
    scientificName: "Aganosma heynei",
    bengaliPronunciation: "অ্যাগানোসমা হেনেই",
    category: "ফুল ও শোভাবর্ধক",
    importance: "সাদা রঙের সুমিষ্ট গন্ধযুক্ত সাহিত্যের প্রিয় ফুল।"
  },
  {
    id: 294,
    bengaliName: "মধুমঞ্জরী",
    scientificName: "Combretum indicum",
    bengaliPronunciation: "কমব্রেটাম ইন্ডিকাম",
    category: "ফুল ও শোভাবর্ধক",
    importance: "সাদা থেকে গাঢ় লালে রঙ বদলানো সুবাসিত ঝুলন্ত ফুলের থোকা।"
  },
  {
    id: 295,
    bengaliName: "কুন্দ ফুল",
    scientificName: "Jasminum multiflorum",
    bengaliPronunciation: "জ্যাসমিনাম মাল্টিফ্লোরাম",
    category: "ফুল ও শোভাবর্ধক",
    importance: "শীতকালের গন্ধহীন কিন্তু রূপবতী বরফশুভ্র ছোট বেলি জাতের ফুল।"
  },
  {
    id: 296,
    bengaliName: "পারিজাত / রক্তমন্দার",
    scientificName: "Erythrina crista-galli",
    bengaliPronunciation: "এরিথ্রিনা ক্রিস্টা-গ্যালি",
    category: "ফুল ও শোভাবর্ধক",
    importance: "স্বর্গের ফুল খ্যাত প্রবাল রঙের চোখ জুড়ানো বৃক্ষ ফুল।"
  },
  {
    id: 297,
    bengaliName: "রঙ্গন",
    scientificName: "Ixora coccinea",
    bengaliPronunciation: "ইক্সোরা কক্সিনিয়া",
    category: "ফুল ও শোভাবর্ধক",
    importance: "থোকায় থোকায় ফোটা লাল, গোলাপি ও হলুদ রঙের চিরসবুজ ফুল।"
  },
  {
    id: 298,
    bengaliName: "কনকচাঁপা",
    scientificName: "Pterospermum acerifolium",
    bengaliPronunciation: "টেরোস্পার্মাম এসেরিফোলিয়াম",
    category: "ফুল ও শোভাবর্ধক",
    importance: "কলাপাতার মতো খোসা ফেটে বের হওয়া তীব্র সুবাসিত পাহাড়ি ফুল।"
  },
  {
    id: 299,
    bengaliName: "হিমচাঁপা / ম্যাগনোলিয়া",
    scientificName: "Magnolia grandiflora",
    bengaliPronunciation: "ম্যাগনোলিয়া গ্র্যান্ডিফ্লোরা",
    category: "ফুল ও শোভাবর্ধক",
    importance: "মোমের মতো পুরু সুবাসিত সুবিশাল শুভ্র রাজকীয় ফুল।"
  },
  {
    id: 300,
    bengaliName: "জলগোলাপ",
    scientificName: "Eichhornia crassipes",
    bengaliPronunciation: "আইকর্নিয়া ক্র্যাসিপেস",
    category: "ফুল ও শোভাবর্ধক",
    importance: "কচুরিপানার সুন্দর বেগুনি রঙের ফুল; দ্রুত বর্ধনশীল জলজ উদ্ভিদ।"
  },
  {
    id: 301,
    bengaliName: "সেগুন",
    scientificName: "Tectona grandis",
    bengaliPronunciation: "টেকটোনা গ্র্যান্ডিস",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "বিশ্বের সেরা আসবাব তৈরির দীর্ঘস্থায়ী মূল্যবান কাষ্ঠল বৃক্ষ।"
  },
  {
    id: 302,
    bengaliName: "মেহগনি",
    scientificName: "Swietenia mahagoni",
    bengaliPronunciation: "সুইটেনিয়া মাহাগোনি",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "লালচে চকচকে মজবুত আসবাবের বিশ্বখ্যাত প্রধান কাঠ।"
  },
  {
    id: 303,
    bengaliName: "শাল / গজারী",
    scientificName: "Shorea robusta",
    bengaliPronunciation: "শোরিয়া রোবাস্টা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "ভাওয়াল ও মধুপুর গড়ের মূল শক্তি; অত্যন্ত শক্ত ও ভারী কাঠ।"
  },
  {
    id: 304,
    bengaliName: "সুন্দরী",
    scientificName: "Heritiera fomes",
    bengaliPronunciation: "হেরিটিয়েরা ফোমেস",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "সুন্দরবনের প্রধান ম্যানগ্রোভ বৃক্ষ; শ্বাসমূল ও শক্ত কাঠের জন্য খ্যাত।"
  },
  {
    id: 305,
    bengaliName: "গেওয়া",
    scientificName: "Excoecaria agallocha",
    bengaliPronunciation: "এক্সকোইকারিয়া অগাল্লোচা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "সুন্দরবনের নিউজপ্রিন্ট কাগজের মণ্ড তৈরিতে ব্যবহৃত বৃক্ষ।"
  },
  {
    id: 306,
    bengaliName: "গরান",
    scientificName: "Ceriops decandra",
    bengaliPronunciation: "সেরিওপ্স ডিক্যান্ড্রা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "ম্যানগ্রোভ অঞ্চলের সেরা জ্বালানি কাঠ ও চামড়া পাকা করার ট্যানিন।"
  },
  {
    id: 307,
    bengaliName: "কেওড়া",
    scientificName: "Sonneratia apetala",
    bengaliPronunciation: "সোনেরাটিয়া অ্যাপেটালা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "উপকূলীয় চরের অগ্রগামী বৃক্ষ; হরিণের প্রিয় খাবার ও টক ফল।"
  },
  {
    id: 308,
    bengaliName: "বাইন",
    scientificName: "Avicennia marina",
    bengaliPronunciation: "অ্যাভিসেনিয়া মেরিনা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "উপকূলের লবণাক্ততা সহনশীল গুরুত্বপূর্ণ পেন্সিল শ্বাসমূলী বৃক্ষ।"
  },
  {
    id: 309,
    bengaliName: "কড়ই (রেনট্রি / শিরীষ)",
    scientificName: "Samanea saman",
    bengaliPronunciation: "সামানিয়া সামান",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "বিশাল ছায়াদানকারী রেইন ট্রি; মজবুত তক্তা তৈরির কাঠ।"
  },
  {
    id: 310,
    bengaliName: "শিশু গাছ",
    scientificName: "Dalbergia sissoo",
    bengaliPronunciation: "ডালবার্গিয়া সিসু",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "উচ্চমানের পালিশযোগ্য আসবাব ও রেলওয়ে স্লিপারের কাঠ।"
  },
  {
    id: 311,
    bengaliName: "গামারি",
    scientificName: "Gmelina arborea",
    bengaliPronunciation: "গমেলিনা আর্বোরিয়া",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "হালকা রঙের মসৃণ কাঠ; তবলা, বাদ্যযন্ত্র ও আসবাবে সমাদৃত।"
  },
  {
    id: 312,
    bengaliName: "চাপালিশ",
    scientificName: "Artocarpus chaplasha",
    bengaliPronunciation: "আর্টোকার্পাস চাপলাশা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "পাহাড়ের বিশাল বৃক্ষ; ঘরের ছাদ ও নৌকার তক্তায় ব্যবহৃত।"
  },
  {
    id: 313,
    bengaliName: "জারুল (কাষ্ঠল)",
    scientificName: "Lagerstroemia speciosa",
    bengaliPronunciation: "ল্যাজারস্ট্রোমিয়া স্পিসিওসা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "পানিতে নষ্ট না হওয়া নৌকার তলদেশ ও খুঁটির কাঠ।"
  },
  {
    id: 314,
    bengaliName: "বট গাছ",
    scientificName: "Ficus benghalensis",
    bengaliPronunciation: "ফিকাস বেনঘালেনসিস",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "স্তম্ভমূলযুক্ত বিশাল ছায়াবৃক্ষ; বহু পাখির আশ্রয়স্থল ও বাস্তুতন্ত্র।"
  },
  {
    id: 315,
    bengaliName: "অশ্বত্থ / পাকুড়",
    scientificName: "Ficus religiosa",
    bengaliPronunciation: "ফিকাস রিলিজিয়োসা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "হৃদয়াকৃতির অগ্রভাগযুক্ত পাতা; প্রচুর অক্সিজেন প্রদানকারী মহীরুহ।"
  },
  {
    id: 316,
    bengaliName: "নিম গাছ (কাষ্ঠল)",
    scientificName: "Azadirachta indica",
    bengaliPronunciation: "অ্যাজাডিরাকটা ইন্ডিকা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "ঘুণপোকা না ধরা স্বাস্থ্যকর ও জীবাণুমুক্ত ঔষধি কাঠ।"
  },
  {
    id: 317,
    bengaliName: "বাবলা",
    scientificName: "Vachellia nilotica",
    bengaliPronunciation: "ভ্যাচেলিয়া নাইলোটিকা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "আঠা (গাম অ্যারাবিক), ট্যানিন ও অত্যন্ত শক্ত কৃষিজ যন্ত্রপাতি কাঠ।"
  },
  {
    id: 318,
    bengaliName: "খয়ের",
    scientificName: "Senegalia catechu",
    bengaliPronunciation: "সেনেগালিয়া ক্যাটেচু",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "পানের মসলা খয়ের নিষ্কাশনকারী শক্ত কাষ্ঠল বৃক্ষ।"
  },
  {
    id: 319,
    bengaliName: "আমলকী বৃক্ষ",
    scientificName: "Phyllanthus emblica",
    bengaliPronunciation: "ফাই্ল্যান্থাস এমব্লিকা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "বনজ ফলদ বৃক্ষ; বন সংরক্ষণ ও স্বাস্থ্যসেবায় অপরিহার্য।"
  },
  {
    id: 320,
    bengaliName: "হিজল",
    scientificName: "Barringtonia acutangula",
    bengaliPronunciation: "ব্যারিংটোনিয়া একিউট্যাঙ্গুলা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "হাওর ও বিল অঞ্চলের পানিতে টিকে থাকা অপরূপ বনজ বৃক্ষ।"
  },
  {
    id: 321,
    bengaliName: "করচ গাছ",
    scientificName: "Pongamia pinnata",
    bengaliPronunciation: "পঙ্গামিয়া পিনাটা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "হাওরাঞ্চলের ঢেউ প্রতিরোধকারী বায়োডিজেল উৎপাদী বীজ বৃক্ষ।"
  },
  {
    id: 322,
    bengaliName: "তমাল",
    scientificName: "Diospyros montana",
    bengaliPronunciation: "ডায়োস্পাইরস মন্টানা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "ঐতিহাসিক গাঢ় বাকলের কাষ্ঠল ছায়াবৃক্ষ।"
  },
  {
    id: 323,
    bengaliName: "দেবদারু",
    scientificName: "Polyalthia longifolia",
    bengaliPronunciation: "পলিঅ্যালথিয়া লঙ্গিফোলিয়া",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "সুউচ্চ সোজা পিরামিডাল শোভাময় বৃক্ষ ও হালকা প্যাকিং কাঠ।"
  },
  {
    id: 324,
    bengaliName: "ইউক্যালিপটাস",
    scientificName: "Eucalyptus camaldulensis",
    bengaliPronunciation: "ইউক্যালিপটাস ক্যামালডুলেনসিস",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "দ্রুত বর্ধনশীল তেলের জন্য খ্যাত বিদেশি খুঁটি কাঠ।"
  },
  {
    id: 325,
    bengaliName: "আকাশমণি / অ্যাকাসিয়া",
    scientificName: "Acacia auriculiformis",
    bengaliPronunciation: "অ্যাকাসিয়া অরিকুলিফর্মিস",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "সামাজিক বনায়নে দ্রুত বর্ধনশীল জনপ্রিয় আসবাব কাঠ।"
  },
  {
    id: 326,
    bengaliName: "ইপিল ইপিল",
    scientificName: "Leucaena leucocephala",
    bengaliPronunciation: "লিউসিনা লিউকোসেফালা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "নাইট্রোজেন সংবন্ধনকারী দ্রুত বর্ধনশীল পশু খাদ্য ও জ্বালানি।"
  },
  {
    id: 327,
    bengaliName: "মেছো কদম / কদম বৃক্ষ",
    scientificName: "Neolamarckia cadamba",
    bengaliPronunciation: "নিওলামারকিয়া কদাম্বা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "দিয়াশলাই ও প্যাকিং বাক্সের কাঠ উৎপাদক দ্রুত বর্ধনশীল গাছ।"
  },
  {
    id: 328,
    bengaliName: "বাঁশ (তল্লা বাঁশ)",
    scientificName: "Bambusa tulda",
    bengaliPronunciation: "ব্যাম্বুসা তুল্ডা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "কাগজ মণ্ড, ঘরবাড়ি নির্মাণ ও মাচার শক্ত বহুপযোগী বাঁশ।"
  },
  {
    id: 329,
    bengaliName: "বাঁশ (বরাক বাঁশ)",
    scientificName: "Bambusa balcooa",
    bengaliPronunciation: "ব্যাম্বুসা বালকুয়া",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "গ্রামের সবচেয়ে মোটা ও মজবুত নির্মাণকাজের ঐতিহ্যবাহী বাঁশ।"
  },
  {
    id: 330,
    bengaliName: "বাঁশ (মূলী বাঁশ)",
    scientificName: "Melocanna baccifera",
    bengaliPronunciation: "মেলোক্যানা ব্যাকিফেরা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "পাহাড়ের ফলবতী বাঁশ; কর্ণফুলী কাগজ কলের প্রধান কাঁচামাল।"
  },
  {
    id: 331,
    bengaliName: "বেত (কেরাক বেত)",
    scientificName: "Calamus tenuis",
    bengaliPronunciation: "ক্যালামাস টেনুইস",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "হাতে তৈরি আসবাব, দোলনা ও ঝুড়ি বোনার টেকসই লতানো কাষ্ঠল উদ্ভিদ।"
  },
  {
    id: 332,
    bengaliName: "গোলপাতা",
    scientificName: "Nypa fruticans",
    bengaliPronunciation: "নাইপা ফ্রুটিক্যান্স",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "সুন্দরবনের ঘরের ছাউনি দেওয়ার পাতা ও গুড় তৈরিকারী পাম।"
  },
  {
    id: 333,
    bengaliName: "হোগলা পাতা",
    scientificName: "Typha domingensis",
    bengaliPronunciation: "টাইফা ডোমিঞ্জেনসিস",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "হোগলা পাটি ও হস্তশিল্প তৈরির উপকূলীয় জলাভূমির নলখাগড়া।"
  },
  {
    id: 334,
    bengaliName: "নলখাগড়া",
    scientificName: "Phragmites karka",
    bengaliPronunciation: "ফ্র্যাগমাইটিস কারকা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "কাগজের মণ্ড ও ছাদ ছাউনিতে ব্যবহৃত দ্রুত বর্ধনশীল জলজ ঘাস।"
  },
  {
    id: 335,
    bengaliName: "রবার গাছ",
    scientificName: "Hevea brasiliensis",
    bengaliPronunciation: "হেভিয়া ব্রাসিলিয়েনসিস",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "ল্যাটেক্স থেকে প্রাকৃতিক রবার ও উপজাত হিসেবে সাদা কাঠ উৎপাদনকারী।"
  },
  {
    id: 336,
    bengaliName: "রক্তচন্দন",
    scientificName: "Pterocarpus santalinus",
    bengaliPronunciation: "টেরোকার্পাস স্যান্টালিনাস",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "অত্যন্ত মূল্যবান ঔষধি লাল রঙের আসবাব কাঠ।"
  },
  {
    id: 337,
    bengaliName: "শ্বেতচন্দন",
    scientificName: "Santalum album",
    bengaliPronunciation: "স্যান্টালাম অ্যালবাম",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "সুগন্ধি তেল ও রাজকীয় অঙ্গরাগের বিশ্বখ্যাত বহুমূল্য কাঠ।"
  },
  {
    id: 338,
    bengaliName: "আগর গাছ",
    scientificName: "Aquilaria malaccensis",
    bengaliPronunciation: "অ্যাকুইলারিয়া ম্যালাক্কেনসিস",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "সিলেটের বিখ্যাত আতর ও মূল্যবান আগর তেল উৎপাদনকারী সুগন্ধি বৃক্ষ।"
  },
  {
    id: 339,
    bengaliName: "শাল (বনজ বৃক্ষ)",
    scientificName: "Shorea robusta",
    bengaliPronunciation: "শোরিয়া রোবাস্টা",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "রেলওয়ে স্লিপার ও ঘরের প্রধান ভারবহনকারী খুঁটির শক্ত কাঠ।"
  },
  {
    id: 340,
    bengaliName: "পাইন (চিড় পাইন)",
    scientificName: "Pinus roxburghii",
    bengaliPronunciation: "পাইনাস রক্সবার্ঘি",
    category: "বনজ ও কাষ্ঠল বৃক্ষ",
    importance: "নগ্নবীজী রজন ও টারপেনটাইন তেল উৎপাদক পাহাড়ী শঙ্কু বৃক্ষ।"
  },
  {
    id: 341,
    bengaliName: "সিংহ",
    scientificName: "Panthera leo",
    bengaliPronunciation: "প্যান্থেরা লিও",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "পশুর রাজা; আফ্রিকার তৃণভূমির দলবদ্ধ শিকারী শীর্ষ স্তন্যপায়ী।"
  },
  {
    id: 342,
    bengaliName: "চিতাবাঘ (লেপার্ড)",
    scientificName: "Panthera pardus",
    bengaliPronunciation: "প্যান্থেরা পারডাস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "গাছে চড়তে দক্ষ ক্ষিপ্রগতির বিন্দুযুক্ত শিকারী স্তন্যপায়ী।"
  },
  {
    id: 343,
    bengaliName: "জাগুয়ার",
    scientificName: "Panthera onca",
    bengaliPronunciation: "প্যান্থেরা ওনকা",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "আমাজনের সবচেয়ে শক্তিশালী ও পানিতে শিকারী শীর্ষ মার্জার।"
  },
  {
    id: 344,
    bengaliName: "চিতা (আসল চিতা)",
    scientificName: "Acinonyx jubatus",
    bengaliPronunciation: "অ্যাসিনোনিক্স জুবাটাস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "স্থলভাগের দ্রুততম প্রাণী; ঘণ্টায় ১১২ কিমি বেগে দৌড়াতে সক্ষম।"
  },
  {
    id: 345,
    bengaliName: "তুষার চিতা (স্নো লেপার্ড)",
    scientificName: "Panthera uncia",
    bengaliPronunciation: "প্যান্থেরা আনসিয়া",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "হিমালয়ের বরফাবৃত অঞ্চলের ধূসর রূপালী দুর্লভ শিকারী।"
  },
  {
    id: 346,
    bengaliName: "হাতি (এশীয় হাতি)",
    scientificName: "Elephas maximus",
    bengaliPronunciation: "এলিফাস ম্যাক্সিমাস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "স্থলভাগের বৃহত্তম স্তন্যপায়ী; বাংলাদেশের পাহাড়ের মহাবিপন্ন প্রাণী।"
  },
  {
    id: 347,
    bengaliName: "আফ্রিকান হাতি",
    scientificName: "Loxodonta africana",
    bengaliPronunciation: "লক্সোডন্টা আফ্রিকানা",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "বিশ্বের সবচেয়ে বড় কান ও দাঁতযুক্ত মহাকায় স্থলচর প্রাণী।"
  },
  {
    id: 348,
    bengaliName: "একশৃঙ্গ গণ্ডার",
    scientificName: "Rhinoceros unicornis",
    bengaliPronunciation: "গণ্ডার ইউনিকর্নিস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "এক শিং বিশিষ্ট কাজিরাঙ্গা ও তরাইয়ের মহাবিপন্ন আর্মার্ড স্তন্যপায়ী।"
  },
  {
    id: 349,
    bengaliName: "জলহস্তী",
    scientificName: "Hippopotamus amphibius",
    bengaliPronunciation: "হিপোপটেমাস অ্যাম্ফিবিয়াস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "আফ্রিকার আধা-জলচর ভারী ও অত্যন্ত শক্তিশালী স্তন্যপায়ী।"
  },
  {
    id: 350,
    bengaliName: "জিরাফ",
    scientificName: "Giraffa camelopardalis",
    bengaliPronunciation: "জিরাফা ক্যামেলোপার্ডালিস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "বিশ্বের সবচেয়ে দীর্ঘগ্রীব ও সুউচ্চ তৃণভোজী স্তন্যপায়ী প্রাণী।"
  },
  {
    id: 351,
    bengaliName: "জেব্রা (সমতল জেব্রা)",
    scientificName: "Equus quagga",
    bengaliPronunciation: "ইকুয়াস কোয়াগা",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "কালো-সাদা ডোরাকাটা বিশিষ্ট আফ্রিকার সামাজিক তৃণভোজী প্রাণী।"
  },
  {
    id: 352,
    bengaliName: "ঘোড়া",
    scientificName: "Equus caballus",
    bengaliPronunciation: "ইকুয়াস ক্যাবালাস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "দ্রুতগামী পরিবহণ ও ক্রীড়ায় ব্যবহৃত গৃহপালিত শক্তিশালী প্রাণী।"
  },
  {
    id: 353,
    bengaliName: "গাধা",
    scientificName: "Equus asinus",
    bengaliPronunciation: "ইকুয়াস অ্যাসিনাস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "ভারবাহী গৃহপালিত সহনশীল শক্ত খুরযুক্ত স্তন্যপায়ী।"
  },
  {
    id: 354,
    bengaliName: "গরু",
    scientificName: "Bos taurus",
    bengaliPronunciation: "বোস টরাস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "বিশ্বের প্রধান দুধ ও মাংস উৎপাদনকারী গৃহপালিত শান্ত স্তন্যপায়ী।"
  },
  {
    id: 355,
    bengaliName: "ভারতীয় গরু (কুঁজযুক্ত)",
    scientificName: "Bos indicus",
    bengaliPronunciation: "বোস ইন্ডিকাস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "উষ্ণমণ্ডলীয় সহনশীল কুঁজযুক্ত ঐতিহ্যবাহী দেশি গরু।"
  },
  {
    id: 356,
    bengaliName: "মহিষ (জল মহিষ)",
    scientificName: "Bubalus bubalis",
    bengaliPronunciation: "বুবালুস বুবালিস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "উচ্চ ফ্যাটযুক্ত ঘন দুধ ও কৃষি কাজের শক্তিশালী প্রাণী।"
  },
  {
    id: 357,
    bengaliName: "ছাগল (ব্ল্যাক বেঙ্গল ছাগল)",
    scientificName: "Capra hircus",
    bengaliPronunciation: "ক্যাপ্রা হিরকাস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "বিশ্ববিখ্যাত সুস্বাদু মাংস ও উন্নত চামড়ার দেশি ছাগল।"
  },
  {
    id: 358,
    bengaliName: "ভেড়া",
    scientificName: "Ovis aries",
    bengaliPronunciation: "ওভিস এরিস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "পশম (উল) ও মাংস প্রদানকারী শান্ত গৃহপালিত প্রাণী।"
  },
  {
    id: 359,
    bengaliName: "উট (এককুঁজ উট)",
    scientificName: "Camelus dromedarius",
    bengaliPronunciation: "ক্যামেলাস ড্রোমেডারিয়াস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "মরুভূমির জাহাজ; পানি ছাড়া দীর্ঘ পথ চলতে সক্ষম।"
  },
  {
    id: 360,
    bengaliName: "দুইকুঁজ উট",
    scientificName: "Camelus bactrianus",
    bengaliPronunciation: "ক্যামেলাস ব্যাকট্রিয়ানাস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "মধ্য এশিয়ার ঠান্ডা মরুভূমির ঘন পশমযুক্ত সহনশীল উট।"
  },
  {
    id: 361,
    bengaliName: "কুকুর",
    scientificName: "Canis lupus familiaris",
    bengaliPronunciation: "ক্যানিস লুপাস ফ্যামিলিয়ারিস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "মানুষের সবচেয়ে বিশ্বস্ত ও প্রথম গৃহপালিত শিকারী সঙ্গী।"
  },
  {
    id: 362,
    bengaliName: "নেকড়ে",
    scientificName: "Canis lupus",
    bengaliPronunciation: "ক্যানিস লুপাস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "দলবদ্ধ শিকারী ও কুকুরের বুনো পূর্বপুরুষ কার্নিভোর।"
  },
  {
    id: 363,
    bengaliName: "শিয়াল (পাতি শিয়াল)",
    scientificName: "Canis aureus",
    bengaliPronunciation: "ক্যানিস অরিয়াস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "সর্বভুক পরিবেশের মৃতদেহ পরিষ্কারক ধূর্ত স্তন্যপায়ী।"
  },
  {
    id: 364,
    bengaliName: "খেঁকশিয়াল",
    scientificName: "Vulpes bengalensis",
    bengaliPronunciation: "ভালপেস বেঙ্গলসিস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "বাংলাদেশের ফসলের মাঠের ইঁদুর ভক্ষক উপকারী ক্ষুদ্র শিয়াল।"
  },
  {
    id: 365,
    bengaliName: "বিড়াল",
    scientificName: "Felis catus",
    bengaliPronunciation: "ফেলিস ক্যাটাস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "জনপ্রিয় ক্ষুদ্র গৃহপালিত শিকারী মার্জার প্রাণী।"
  },
  {
    id: 366,
    bengaliName: "বনবিড়াল",
    scientificName: "Felis chaus",
    bengaliPronunciation: "ফেলিস চাউস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "গ্রামের ঝোপঝাড়ের ক্ষিপ্র বুনো ইঁদুর ও পাখি শিকারী বিড়াল।"
  },
  {
    id: 367,
    bengaliName: "মেছোবাঘ (মেছোবিড়াল)",
    scientificName: "Prionailurus viverrinus",
    bengaliPronunciation: "প্রিওনাইলুরাস ভিভারিনাস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "পানিতে সাঁতার কেটে মাছ শিকারে ওস্তাদ সুন্দরবনের বুনো বিড়াল।"
  },
  {
    id: 368,
    bengaliName: "চিতাবিড়াল (লেপার্ড ক্যাট)",
    scientificName: "Prionailurus bengalensis",
    bengaliPronunciation: "প্রিওনাইলুরাস বেঙ্গলসিস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "ছোট আকারের চিতাবাঘের মতো ফুটকিযুক্ত রূপসী বুনো বিড়াল।"
  },
  {
    id: 369,
    bengaliName: "ভাল্লুক (কালো ভাল্লুক)",
    scientificName: "Ursus thibetanus",
    bengaliPronunciation: "উরসাস থিবেটানাস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "বুকের মাঝে V আকৃতির দাগযুক্ত পাহাড়ের সর্বভুক স্তন্যপায়ী।"
  },
  {
    id: 370,
    bengaliName: "মেরু ভাল্লুক",
    scientificName: "Ursus maritimus",
    bengaliPronunciation: "উরসাস ম্যারিটিমাস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "উত্তর মেরুর বরফের বৃহত্তম সাদা মাংসাশী সামুদ্রিক স্তন্যপায়ী।"
  },
  {
    id: 371,
    bengaliName: "দৈত্য পান্ডা",
    scientificName: "Ailuropoda melanoleuca",
    bengaliPronunciation: "আইলুরোপোডা মেলানোনিউকা",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "বাঁশের পাতা ভক্ষক চীনের সংরক্ষিত কালো-সাদা অমায়িক ভাল্লুক।"
  },
  {
    id: 372,
    bengaliName: "লাল পান্ডা",
    scientificName: "Ailurus fulgens",
    bengaliPronunciation: "আইলুরাস ফালজেন্স",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "হিমালয়ের গাছের ডালে বাস করা সুন্দর লালচে মার্জার ভল্লুক।"
  },
  {
    id: 373,
    bengaliName: "শিম্পাঞ্জী",
    scientificName: "Pan troglodytes",
    bengaliPronunciation: "প্যান ট্রোগ্লোডাইটিস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "মানুষের সবচেয়ে নিকটাত্মীয় ৯৮.৭% ডিএনএ মিল থাকা প্রাইমেট।"
  },
  {
    id: 374,
    bengaliName: "বনমানুষ / গরিলা",
    scientificName: "Gorilla gorilla",
    bengaliPronunciation: "গরিলা গরিলা",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "আফ্রিকার বনের বৃহত্তম ও প্রবল শক্তিশালী নিরামিষাশী নরবানর।"
  },
  {
    id: 375,
    bengaliName: "ওরাংওটাং",
    scientificName: "Pongo pygmaeus",
    bengaliPronunciation: "পঙ্গো পিগমিয়াস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "বোর্নিওর লালচে লোমশ অত্যন্ত বুদ্ধিমান বৃক্ষবাসী নরবানর।"
  },
  {
    id: 376,
    bengaliName: "বানর (রেসাস বানর)",
    scientificName: "Macaca mulatta",
    bengaliPronunciation: "ম্যাকাও মুলাট্টা",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "চিকিৎসা গবেষণায় ব্যবহৃত Rh ফ্যাক্টর আবিষ্কৃত বানর।"
  },
  {
    id: 377,
    bengaliName: "হনুমান (মুখপোড়া হনুমান)",
    scientificName: "Trachypithecus phayrei",
    bengaliPronunciation: "ট্র্যাকিপিথেকাস ফেয়রি",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "লম্বা লেজ ও কালো মুখমণ্ডলযুক্ত পাতাভোজী বৃক্ষবাসী বানর।"
  },
  {
    id: 378,
    bengaliName: "উল্লুক (শ্বেত ভ্রূ উল্লুক)",
    scientificName: "Hoolock hoolock",
    bengaliPronunciation: "হুলক হুলক",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "বাংলাদেশের বনের একমাত্র লেজবিহীন লাজুক ক্ষুদ্র নরবানর।"
  },
  {
    id: 379,
    bengaliName: "নীল তিমি",
    scientificName: "Balaenoptera musculus",
    bengaliPronunciation: "ব্যালেনোপ্টেরা মাসকুলাস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "পৃথিবীর ইতিহাসের সর্বকালের বৃহত্তম স্তন্যপায়ী সামুদ্রিক জীব।"
  },
  {
    id: 380,
    bengaliName: "শুশুক (গঙ্গা ডলফিন)",
    scientificName: "Platanista gangetica",
    bengaliPronunciation: "প্ল্যাটানিস্তা গ্যাঞ্জেটিকা",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "পদ্মা-মেঘনার দৃষ্টিহীন ইকো-লোকেশন নির্ভর মিঠাপানির স্তন্যপায়ী।"
  },
  {
    id: 381,
    bengaliName: "ইরাবতী ডলফিন",
    scientificName: "Orcaella brevirostris",
    bengaliPronunciation: "অরসিলা ব্রেভিরোস্ট্রিস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "সুন্দরবনের খাঁড়িতে বাস করা ভোঁতা মাথার মিষ্টি স্বভাবের ডলফিন।"
  },
  {
    id: 382,
    bengaliName: "উদ্‌বিড়াল (ভোঁদড়)",
    scientificName: "Lutrogale perspicillata",
    bengaliPronunciation: "লুট্রোগেল পারসপিসিলাটা",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "নড়াইলে জেলেদের সাথে মাছ ধরতে প্রশিক্ষিত আধা-জলচর স্তন্যপায়ী।"
  },
  {
    id: 383,
    bengaliName: "বুনো শুকর",
    scientificName: "Sus scrofa",
    bengaliPronunciation: "সুস স্ক্রোফা",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "তীক্ষ্ণ দাঁতযুক্ত সুন্দরবন ও শালবনের সর্বভুক স্তন্যপায়ী।"
  },
  {
    id: 384,
    bengaliName: "চিত্রা হরিণ",
    scientificName: "Axis axis",
    bengaliPronunciation: "অ্যাক্সিস অ্যাক্সিস",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "সুন্দরবনের সাদা ফুটকিযুক্ত চোখজুড়ানো রূপসী প্রধান হরিণ।"
  },
  {
    id: 385,
    bengaliName: "মায়া হরিণ (বার্কিং ডিয়ার)",
    scientificName: "Muntiacus muntjak",
    bengaliPronunciation: "মুন্টিয়াকাস মুন্টজাক",
    category: "স্তন্যপায়ী প্রাণী",
    importance: "কুকুরের মতো ডাক দিয়ে বিপদ সংকেত দেওয়া পাহাড়ি ক্ষুদ্র হরিণ।"
  },
  {
    id: 386,
    bengaliName: "ময়ূর",
    scientificName: "Pavo cristatus",
    bengaliPronunciation: "পাভো ক্রিস্টাটাস",
    category: "পাখি",
    importance: "অপূর্ব বর্ণিল পেখম মেলা নয়নজুড়ানো বিখ্যাত রাজকীয় পাখি।"
  },
  {
    id: 387,
    bengaliName: "মাছরাঙা (ছোট মাছরাঙা)",
    scientificName: "Alcedo atthis",
    bengaliPronunciation: "আলসেডো আথিস",
    category: "পাখি",
    importance: "বিদ্যুৎগতিতে পানিতে ডুব দিয়ে মাছ শিকারী উজ্জ্বল নীল পাখি।"
  },
  {
    id: 388,
    bengaliName: "সাদা বুক মাছরাঙা",
    scientificName: "Halcyon smyrnensis",
    bengaliPronunciation: "হ্যালসায়ন স্মাইরনেনসিস",
    category: "পাখি",
    importance: "বাংলাদেশের সবচেয়ে পরিচিত লাল ঠোঁট ও সাদা বুকের মাছরাঙা।"
  },
  {
    id: 389,
    bengaliName: "কাক (পাতি কাক)",
    scientificName: "Corvus splendens",
    bengaliPronunciation: "করভাস স্প্লেনডেন্স",
    category: "পাখি",
    importance: "শহরের অত্যন্ত বুদ্ধিমান ও নোংরা আবর্জনা পরিষ্কারক পাখি।"
  },
  {
    id: 390,
    bengaliName: "দাঁড়কাক",
    scientificName: "Corvus macrorhynchos",
    bengaliPronunciation: "করভাস ম্যাক্রোরিনকোস",
    category: "পাখি",
    importance: "সম্পূর্ণ কালো রঙের ভারী ঠোঁটযুক্ত বৃহৎ বুদ্ধিমান কাক।"
  },
  {
    id: 391,
    bengaliName: "টিয়া (সবুজ টিয়া)",
    scientificName: "Psittacula krameri",
    bengaliPronunciation: "সিট্টাকুলা ক্র্যামেরি",
    category: "পাখি",
    importance: "লাল ঠোঁট ও গলায় কণ্ঠীযুক্ত মানুষের কথা নকল করতে সক্ষম পাখি।"
  },
  {
    id: 392,
    bengaliName: "চন্দনা টিয়া",
    scientificName: "Psittacula eupatria",
    bengaliPronunciation: "সিট্টাকুলা ইউপ্যাট্রিয়া",
    category: "পাখি",
    importance: "বৃহৎ আকারের কাঁধে লাল ছোপযুক্ত সুন্দর কথা বলা টিয়া।"
  },
  {
    id: 393,
    bengaliName: "ময়না",
    scientificName: "Gracula religiosa",
    bengaliPronunciation: "গ্রাকুলা রিলিজিয়োসা",
    category: "পাখি",
    importance: "মানুষের কণ্ঠ নিখুঁতভাবে অনুকরণে পৃথিবীর অন্যতম সেরা পাখি।"
  },
  {
    id: 394,
    bengaliName: "শ্যামা পাখি",
    scientificName: "Copsychus malabaricus",
    bengaliPronunciation: "কপসাইকাস মালাবারিকাচ",
    category: "পাখি",
    importance: "ঘন বনের মিষ্টি সুরের সেরা গায়ক লম্বা লেজযুক্ত পাখি।"
  },
  {
    id: 395,
    bengaliName: "টুনটুনি",
    scientificName: "Orthotomus sutorius",
    bengaliPronunciation: "অর্থোটোমাস সুটোরিয়াস",
    category: "পাখি",
    importance: "পাতা সেলাই করে চমৎকার বাসা বানানোর দর্জি পাখি (Tailorbird)।"
  },
  {
    id: 396,
    bengaliName: "বাবুই পাখি",
    scientificName: "Ploceus philippinus",
    bengaliPronunciation: "প্লোসিয়াস ফিলিপিনাস",
    category: "পাখি",
    importance: "তালগাছে বিস্ময়কর ঝুলন্ত বাসা বোনা প্রকৃতির প্রধান তাঁতি পাখি।"
  },
  {
    id: 397,
    bengaliName: "চড়ুই পাখি",
    scientificName: "Passer domesticus",
    bengaliPronunciation: "প্যাসার ডোমেস্টিকাস",
    category: "পাখি",
    importance: "মানুষের ঘরের ঘুলঘুলিতে বাস করা পরিচিত ছোট চঞ্চল পাখি।"
  },
  {
    id: 398,
    bengaliName: "শালিক (ভাত শালিক)",
    scientificName: "Acridotheres tristis",
    bengaliPronunciation: "অ্যাক্রিডোথিরেস ট্রিসটিস",
    category: "পাখি",
    importance: "হলুদ চোখের চারপাশযুক্ত পোকা ও শস্যভুক সামাজিক পাখি।"
  },
  {
    id: 399,
    bengaliName: "ঝুঁটি শালিক",
    scientificName: "Acridotheres fuscus",
    bengaliPronunciation: "অ্যাক্রিডোথিরেস ফাসকাস",
    category: "পাখি",
    importance: "কপালে সুন্দর ছোট্ট ঝুঁটিযুক্ত ধূসর রঙের শালিক।"
  },
  {
    id: 400,
    bengaliName: "বুলবুলি (সিপাহি বুলবুল)",
    scientificName: "Pycnonotus jocosus",
    bengaliPronunciation: "পিকনোনোটাচ জোকোসাস",
    category: "পাখি",
    importance: "মাথায় খাড়া ঝুঁটি ও লাল কানযুক্ত চঞ্চল মিষ্টি গানের পাখি।"
  },
  {
    id: 401,
    bengaliName: "কালচে বুলবুল",
    scientificName: "Pycnonotus cafer",
    bengaliPronunciation: "পিকনোনোটাচ ক্যাফার",
    category: "পাখি",
    importance: "লেজের নিচে লাল ছোপযুক্ত বাগানের অতি পরিচিত মিষ্টি পাখি।"
  },
  {
    id: 402,
    bengaliName: "কোকিল",
    scientificName: "Eudynamys scolopaceus",
    bengaliPronunciation: "ইউডিনামিস স্কোলোপাসিয়াস",
    category: "পাখি",
    importance: "বসন্তের কুহু ডাকের পাখি; পরের বাসায় (কাকের) ডিম পাড়ে।"
  },
  {
    id: 403,
    bengaliName: "পাপিয়া / চোখগেল পাখি",
    scientificName: "Hierococcyx varius",
    bengaliPronunciation: "হায়ারোকক্সিক্স ভ্যারিয়াস",
    category: "পাখি",
    importance: "গ্রীষ্মের চাতক পাখি; একটানা মিষ্টি সুরে গান গায়।"
  },
  {
    id: 404,
    bengaliName: "হাঁড়িচাচা",
    scientificName: "Dendrocitta vagabunda",
    bengaliPronunciation: "ডেনড্রোসিট্টা ভাগাবুন্ডা",
    category: "পাখি",
    importance: "লম্বা লেজযুক্ত কর্কশ ডাকের রূপসী বুনো সর্বভুক পাখি।"
  },
  {
    id: 405,
    bengaliName: "ফিঙে (কালো ফিঙে)",
    scientificName: "Dicrurus macrocercus",
    bengaliPronunciation: "ডিক্রুরাস ম্যাক্রোসারকাস",
    category: "পাখি",
    importance: "দ্বিখণ্ডিত লেজযুক্ত সাহসী শিকারী; অন্য পাখির আক্রমণকারী।"
  },
  {
    id: 406,
    bengaliName: "ঘুঘু (তিলা ঘুঘু)",
    scientificName: "Spilopelia chinensis",
    bengaliPronunciation: "স্পিলোপেলিয়া চিনেনসিস",
    category: "পাখি",
    importance: "ঘাড়ে মুক্তার মতো ফোঁটাযুক্ত অত্যন্ত নিরীহ শান্ত বুনো পাখি।"
  },
  {
    id: 407,
    bengaliName: "রাজঘুঘু",
    scientificName: "Streptopelia tranquebarica",
    bengaliPronunciation: "স্ট্রেপ্টোপেলিয়া ট্রাঙ্কুয়েবারিকা",
    category: "পাখি",
    importance: "লালচে রঙের দ্রুতগামী ছোট শান্ত ঘুঘু পাখি।"
  },
  {
    id: 408,
    bengaliName: "কবুতর / পায়রা",
    scientificName: "Columba livia",
    bengaliPronunciation: "কলাম্বা লিভিয়া",
    category: "পাখি",
    importance: "শান্তির প্রতীক; প্রাচীনকালের চিঠি বহনকারী গৃহপালিত পাখি।"
  },
  {
    id: 409,
    bengaliName: "বক (কানি বক)",
    scientificName: "Ardeola grayii",
    bengaliPronunciation: "আর্ডিওলা গ্রেই",
    category: "পাখি",
    importance: "জলাশয়ে ধ্যানমগ্ন হয়ে ধৈর্য ধরে মাছ শিকারী পরিচিত বক।"
  },
  {
    id: 410,
    bengaliName: "সাদা বক (ছোট বক)",
    scientificName: "Egretta garzetta",
    bengaliPronunciation: "ইগ্রেট্টা গারজেট্টা",
    category: "পাখি",
    importance: "দুধসাদা রঙের কালো ঠোঁট ও হলুদ পায়ের জলজ রূপসী বক।"
  },
  {
    id: 411,
    bengaliName: "পানকৌড়ি",
    scientificName: "Phalacrocorax niger",
    bengaliPronunciation: "ফ্যালাক্রোকোরাক্স নাইজার",
    category: "পাখি",
    importance: "পানিতে ডুবে মাছ শিকারের পর রোদে ডানা মেলা কালো পাখি।"
  },
  {
    id: 412,
    bengaliName: "চিল (ভুবন চিল)",
    scientificName: "Milvus migrans",
    bengaliPronunciation: "মিলভাস মাইগ্র্যান্স",
    category: "পাখি",
    importance: "আকাশে ডানা মেলে চক্কর দিয়ে ওপর থেকে শিকার ধরা শিকারী পাখি।"
  },
  {
    id: 413,
    bengaliName: "বাজপাখি (পেরেগ্রিন ফ্যালকন)",
    scientificName: "Falco peregrinus",
    bengaliPronunciation: "ফ্যালকো পেরেগ্রিনাস",
    category: "পাখি",
    importance: "বিশ্বের দ্রুততম জীব; ডাইভ দেওয়ার সময় ঘণ্টায় ৩৯০ কিমি গতিবেগ।"
  },
  {
    id: 414,
    bengaliName: "ঈগল (সোনালী ঈগল)",
    scientificName: "Aquila chrysaetos",
    bengaliPronunciation: "অ্যাকিউলা ক্রাইসিটোস",
    category: "পাখি",
    importance: "আকাশের রাজকীয় শক্তিশালী শিকারী পাখি।"
  },
  {
    id: 415,
    bengaliName: "শকুনি (বাংলা শকুনি)",
    scientificName: "Gyps bengalensis",
    bengaliPronunciation: "জিপ্স বেঙ্গলসিস",
    category: "পাখি",
    importance: "প্রকৃতির ঝাড়ুদার; ডাইক্লোফেনাকের বিষক্রিয়ায় মহাবিপন্ন পাখি।"
  },
  {
    id: 416,
    bengaliName: "হুতুম পেঁচা",
    scientificName: "Ketupa zeylonensis",
    bengaliPronunciation: "কেতূপা জেইলোনেনসিস",
    category: "পাখি",
    importance: "রাতের মাছ শিকারী সুবিশাল চোখ ও কানযুক্ত নিশাচর পাখি।"
  },
  {
    id: 417,
    bengaliName: "লক্ষ্মী পেঁচা",
    scientificName: "Tyto alba",
    bengaliPronunciation: "টাইটো আলবা",
    category: "পাখি",
    importance: "হৃদয়াকৃতির মুখমণ্ডলযুক্ত কৃষকের বন্ধু ও ইঁদুর শিকারী পেঁচা।"
  },
  {
    id: 418,
    bengaliName: "কাঠঠোকরা",
    scientificName: "Dendrocopos macei",
    bengaliPronunciation: "ডেনড্রোকোপস মেসি",
    category: "পাখি",
    importance: "শক্ত ঠোঁট দিয়ে গাছের গুঁড়ি খুঁড়ে পোকা বের করে খাওয়া পাখি।"
  },
  {
    id: 419,
    bengaliName: "মরু উটপাখি (অস্ট্রিচ)",
    scientificName: "Struthio camelus",
    bengaliPronunciation: "স্ট্রুথিও ক্যামেলাস",
    category: "পাখি",
    importance: "বিশ্বের বৃহত্তম পাখি ও ডিম; উড়তে অক্ষম তবে দ্রুত দৌড়ায়।"
  },
  {
    id: 420,
    bengaliName: "এমু",
    scientificName: "Dromaius novaehollandiae",
    bengaliPronunciation: "ড্রোমাইয়াস নোভাহোল্যান্ডি",
    category: "পাখি",
    importance: "অস্ট্রেলিয়ার দ্বিতীয় বৃহত্তম দ্রুতগামী উড্ডয়নহীন পাখি।"
  },
  {
    id: 421,
    bengaliName: "পেঙ্গুইন (সম্রাট পেঙ্গুইন)",
    scientificName: "Aptenodytes forsteri",
    bengaliPronunciation: "অ্যাপটেনোডাইটিস ফোরস্টেরি",
    category: "পাখি",
    importance: "অ্যান্টার্কটিকার হিমশীতল বরফে সাঁতারু উড্ডয়নহীন রাজকীয় পাখি।"
  },
  {
    id: 422,
    bengaliName: "রাজহাঁস",
    scientificName: "Anser anser domesticus",
    bengaliPronunciation: "আনসার আনসার ডোমেস্টিকাস",
    category: "পাখি",
    importance: "বড় আকারের দীর্ঘগ্রীব পাহারাদার স্বভাবের গৃহপালিত জলজ হাঁস।"
  },
  {
    id: 423,
    bengaliName: "পাতিহাঁস",
    scientificName: "Anas platyrhynchos domesticus",
    bengaliPronunciation: "আনাস প্ল্যাটিন্থিকস ডোমেস্টিকাস",
    category: "পাখি",
    importance: "সুস্বাদু ডিম ও মাংসের জন্য পালিত গৃহপালিত প্রধান হাঁস।"
  },
  {
    id: 424,
    bengaliName: "বুনো মুরগি (লাল বনমোরগ)",
    scientificName: "Gallus gallus",
    bengaliPronunciation: "গ্যালাস গ্যালাস",
    category: "পাখি",
    importance: "বিশ্বের সকল গৃহপালিত মুরগির বুনো পূর্বপুরুষ।"
  },
  {
    id: 425,
    bengaliName: "গৃহপালিত মুরগি",
    scientificName: "Gallus gallus domesticus",
    bengaliPronunciation: "গ্যালাস গ্যালাস ডোমেস্টিকাস",
    category: "পাখি",
    importance: "বিশ্বের সবচেয়ে বেশি ডিম ও ব্রয়লার মাংস উৎপাদনকারী পাখি।"
  },
  {
    id: 426,
    bengaliName: "রুই মাছ",
    scientificName: "Labeo rohita",
    bengaliPronunciation: "লেবিও রোহিতা",
    category: "মাছ ও জলজ প্রাণী",
    importance: "মিঠাপানির প্রধান কার্পজাতীয় সুস্বাদু ও দ্রুত বর্ধনশীল মাছ।"
  },
  {
    id: 427,
    bengaliName: "কাতলা মাছ",
    scientificName: "Gibelion catla",
    bengaliPronunciation: "জিবিলিয়ন কাতলা",
    category: "মাছ ও জলজ প্রাণী",
    importance: "জলাশয়ের ওপরের স্তরের প্ল্যাঙ্কটনভুক বিশাল মাথার মিষ্টি মাছ।"
  },
  {
    id: 428,
    bengaliName: "মৃগেল মাছ",
    scientificName: "Cirrhinus mrigala",
    bengaliPronunciation: "সিরহিনাস মৃগালা",
    category: "মাছ ও জলজ প্রাণী",
    importance: "জলাশয়ের তলদেশের পচা জৈববস্তু ভোজী অর্থকরী কার্প মাছ।"
  },
  {
    id: 429,
    bengaliName: "কালবাউশ",
    scientificName: "Labeo calbasu",
    bengaliPronunciation: "লেবিও ক্যালবাসু",
    category: "মাছ ও জলজ প্রাণী",
    importance: "গাঢ় কালো রঙের সুস্বাদু তলদেশবাসী দেশীয় কার্প মাছ।"
  },
  {
    id: 430,
    bengaliName: "বাটা মাছ",
    scientificName: "Labeo bata",
    bengaliPronunciation: "লেবিও বাটা",
    category: "মাছ ও জলজ প্রাণী",
    importance: "ছোট আকারের দ্রুত বর্ধনশীল সুস্বাদু দেশি কার্প মাছ।"
  },
  {
    id: 431,
    bengaliName: "পাঙ্গাশ (দেশি পাঙ্গাশ)",
    scientificName: "Pangasius pangasius",
    bengaliPronunciation: "পাঙ্গাসিয়াস পাঙ্গাসিয়াস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "নদীর তলদেশের সুবিশাল রূপালী চকচকে সুস্বাদু ক্যাটফিশ।"
  },
  {
    id: 432,
    bengaliName: "বোয়াল মাছ",
    scientificName: "Wallago attu",
    bengaliPronunciation: "ওয়ালাগো আটু",
    category: "মাছ ও জলজ প্রাণী",
    importance: "নদী ও বিলের মিঠাপানির শার্ক খ্যাত রাক্ষুসে ক্যাটফিশ।"
  },
  {
    id: 433,
    bengaliName: "আইড় মাছ",
    scientificName: "Sperata aor",
    bengaliPronunciation: "স্পেরাটা অর",
    category: "মাছ ও জলজ প্রাণী",
    importance: "লম্বা গোঁফ ও সুস্বাদু নরম কাঁটাহীন মাংসযুক্ত বড় নদী মাছ।"
  },
  {
    id: 434,
    bengaliName: "শিং মাছ",
    scientificName: "Heteropneustes fossilis",
    bengaliPronunciation: "হেটেরোপনিউস্টেস ফসিলিস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "অতিরিক্ত শ্বাসযন্ত্রযুক্ত রক্তবর্ধক ঔষধি পথ্য ক্যাটফিশ।"
  },
  {
    id: 435,
    bengaliName: "মাগুর মাছ",
    scientificName: "Clarias batrachus",
    bengaliPronunciation: "ক্ল্যারিয়াস বাট্রাকাস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "কাদায় টিকে থাকা পুষ্টিকর রোগমুক্তির ঐতিহ্যবাহী পথ্য মাছ।"
  },
  {
    id: 436,
    bengaliName: "কৈ মাছ (দেশি কৈ)",
    scientificName: "Anabas testudineus",
    bengaliPronunciation: "অ্যানাবাস টেস্টুডিনিয়াস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "কৈল্লা ফুলকার সাহায্যে ডাঙ্গায় হেঁটে চলা শক্ত মাছ।"
  },
  {
    id: 437,
    bengaliName: "টাকি মাছ",
    scientificName: "Channa punctata",
    bengaliPronunciation: "চান্না পাঙ্কটাটা",
    category: "মাছ ও জলজ প্রাণী",
    importance: "ছোট আকারের শিকারী মাছ; সুস্বাদু ভর্তা তৈরিতে অত্যন্ত প্রিয়।"
  },
  {
    id: 438,
    bengaliName: "শোল মাছ",
    scientificName: "Channa striata",
    bengaliPronunciation: "চান্না স্ট্রায়াটা",
    category: "মাছ ও জলজ প্রাণী",
    importance: "মাংসাশী ডোরাকাটা মাছ; ক্ষত নিরাময়কারী উচ্চ প্রোটিনযুক্ত।"
  },
  {
    id: 439,
    bengaliName: "গজার মাছ",
    scientificName: "Channa marulius",
    bengaliPronunciation: "চান্না মারুলিয়াস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "সাপের মতো ডোরাকাটা বিশাল আকৃতির রাক্ষুসে শিকারী মাছ।"
  },
  {
    id: 440,
    bengaliName: "পুঁটি (তিতপুঁটি)",
    scientificName: "Pethia ticto",
    bengaliPronunciation: "পেথিয়া টিকটো",
    category: "মাছ ও জলজ প্রাণী",
    importance: "ছোট চকচকে লালচে দাগযুক্ত দেশীয় অতি পরিচিত ঝাঁকের মাছ।"
  },
  {
    id: 441,
    bengaliName: "সরপুঁটি (দেশি)",
    scientificName: "Systomus sarana",
    bengaliPronunciation: "সিস্টোমাস সারানা",
    category: "মাছ ও জলজ প্রাণী",
    importance: "সুস্বাদু রুপালী বড় জাতের দেশীয় বিলুপ্তপ্রায় পুঁটি মাছ।"
  },
  {
    id: 442,
    bengaliName: "থাই সরপুঁটি (রাজপুঁটি)",
    scientificName: "Barbonymus gonionotus",
    bengaliPronunciation: "বার্বোনিমাস গনিওনোটাস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "পুকুরে দ্রুত বর্ধনশীল বিদেশি অর্থনৈতিক চাষের মাছ।"
  },
  {
    id: 443,
    bengaliName: "তেলাপিয়া (মোজাম্বিক)",
    scientificName: "Oreochromis mossambicus",
    bengaliPronunciation: "ওরিওক্রোমিস মোসাম্বিকাস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "সহনশীল ও দ্রুত বংশবৃদ্ধিকারী আফ্রিকান পরিচিত মাছ।"
  },
  {
    id: 444,
    bengaliName: "গ্রাস কার্প",
    scientificName: "Ctenopharyngodon idella",
    bengaliPronunciation: "টিনোফ্যারিঙ্গোডন ইডেলা",
    category: "মাছ ও জলজ প্রাণী",
    importance: "পুকুরের জলজ আগাছা ও ঘাস খেয়ে পরিবেশ পরিষ্কার রাখা মাছ।"
  },
  {
    id: 445,
    bengaliName: "সিলভার কার্প",
    scientificName: "Hypophthalmichthys molitrix",
    bengaliPronunciation: "হাইপোফথালমিচথিস মলিট্রিক্স",
    category: "মাছ ও জলজ প্রাণী",
    importance: "দ্রুত বর্ধনশীল ফাইটোপ্ল্যাঙ্কটন ভোজী রূপালী বিদেশি কার্প।"
  },
  {
    id: 446,
    bengaliName: "কমন কার্প / কার্পিও",
    scientificName: "Cyprinus carpio",
    bengaliPronunciation: "সাইপ্রিনাস কার্পিও",
    category: "মাছ ও জলজ প্রাণী",
    importance: "তলদেশে খাবার খোঁজা সর্বভুক বিশ্ববিখ্যাত চাষের মাছ।"
  },
  {
    id: 447,
    bengaliName: "পাবদা মাছ",
    scientificName: "Ompok pabda",
    bengaliPronunciation: "ওম্পক পাবদা",
    category: "মাছ ও জলজ প্রাণী",
    importance: "অত্যন্ত নরম, মিষ্টি ও কাঁটাহীন অভিজাত দেশি মাছ।"
  },
  {
    id: 448,
    bengaliName: "গুলশা মাছ",
    scientificName: "Mystus cavasius",
    bengaliPronunciation: "মিসটাস ক্যাভাসিয়াস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "ছোট ক্যাটফিশ; বাণিজ্যিক হ্যাচারিতে চাষ হওয়া দামি মাছ।"
  },
  {
    id: 449,
    bengaliName: "টেংরা মাছ",
    scientificName: "Mystus tengara",
    bengaliPronunciation: "মিসটাস টেঙ্গারা",
    category: "মাছ ও জলজ প্রাণী",
    importance: "বিল ও খালের ছোট গোঁফওয়ালা অত্যন্ত সুস্বাদু খাবার মাছ।"
  },
  {
    id: 450,
    bengaliName: "বাতাসী মাছ",
    scientificName: "Neotropius atherinoides",
    bengaliPronunciation: "নিওট্রোপিয়াস এথেরিনয়েডেস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "নদীর স্বচ্ছ পানির কাঁচের মতো পাতলা রূপালী মাছ।"
  },
  {
    id: 451,
    bengaliName: "কাঁচকি মাছ",
    scientificName: "Corica soborna",
    bengaliPronunciation: "কোরিকা সোবর্না",
    category: "মাছ ও জলজ প্রাণী",
    importance: "ভিটামিন এ ও ক্যালসিয়াম সমৃদ্ধ ক্ষুদ্র স্বচ্ছ মাছ।"
  },
  {
    id: 452,
    bengaliName: "মলা মাছ",
    scientificName: "Amblypharyngodon mola",
    bengaliPronunciation: "অ্যাম্বলিফ্যারিঙ্গোডন মোলা",
    category: "মাছ ও জলজ প্রাণী",
    importance: "রাতকানা রোগ প্রতিরোধক ভিটামিন এ-র অন্যতম প্রাকৃতিক উৎস।"
  },
  {
    id: 453,
    bengaliName: "ঢেলা মাছ",
    scientificName: "Osteobrama cotio",
    bengaliPronunciation: "অস্টিওব্রামা কোটিও",
    category: "মাছ ও জলজ প্রাণী",
    importance: "বিলুপ্তপ্রায় অতি পুষ্টিকর ক্ষুদ্র দেশীয় রূপালী মাছ।"
  },
  {
    id: 454,
    bengaliName: "বাইম (তারা বাইম)",
    scientificName: "Macrognathus aculeatus",
    bengaliPronunciation: "ম্যাক্রোগনাথাস একিউলিয়াটাস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "সাপের মতো দীর্ঘায়িত কাদার ভেতরে বাস করা সুস্বাদু মাছ।"
  },
  {
    id: 455,
    bengaliName: "শাল বাইম",
    scientificName: "Mastacembelus armatus",
    bengaliPronunciation: "মাস্টাসেম্বেলুস আর্মাটাস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "বৃহদাকার কাঁটাযুক্ত নদীর ও পাথুরে বিলের অতি সুস্বাদু বাইম।"
  },
  {
    id: 456,
    bengaliName: "চিতল মাছ",
    scientificName: "Chitala chitala",
    bengaliPronunciation: "চিতালা চিতালা",
    category: "মাছ ও জলজ প্রাণী",
    importance: "পিঠে ধনুকের মতো বাঁক ও পেটের পেটি সুস্বাদু মাছের রাজা।"
  },
  {
    id: 457,
    bengaliName: "ফলি মাছ",
    scientificName: "Notopterus notopterus",
    bengaliPronunciation: "নোটোপ্টেরাস নোটোপ্টেরাস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "চিতলের ছোট জাত; পাতলা কাঁটাযুক্ত পুষ্টিকর দেশি মাছ।"
  },
  {
    id: 458,
    bengaliName: "রুপচাঁদা (সাদা চান্দা)",
    scientificName: "Pampus argenteus",
    bengaliPronunciation: "প্যাম্পাস আর্জেন্টিনাস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "বঙ্গোপসাগরের অভিজাত রূপালী চ্যাপ্টা সুস্বাদু সামুদ্রিক মাছ।"
  },
  {
    id: 459,
    bengaliName: "কালো চান্দা / পমফ্রেট",
    scientificName: "Parastromateus niger",
    bengaliPronunciation: "প্যারাস্ট্রোমেটিয়াস নাইজার",
    category: "মাছ ও জলজ প্রাণী",
    importance: "সামুদ্রিক ডিশের বিখ্যাত কালো রঙের মাংসল সুস্বাদু মাছ।"
  },
  {
    id: 460,
    bengaliName: "কোরাল মাছ / ভেটকি",
    scientificName: "Lates calcarifer",
    bengaliPronunciation: "লেটেস ক্যালকারিফার",
    category: "মাছ ও জলজ প্রাণী",
    importance: "মোহনা ও উপকূলের অভিজাত সাদা ফিলে তৈরির দামি মাছ।"
  },
  {
    id: 461,
    bengaliName: "সুরমা মাছ / কিং ম্যাকারেল",
    scientificName: "Scomberomorus commerson",
    bengaliPronunciation: "স্কমবারোমোরস কমেরসন",
    category: "মাছ ও জলজ প্রাণী",
    importance: "ওমেগা-৩ ফ্যাটি এসিড সমৃদ্ধ দ্রুতগামী সামুদ্রিক মাছ।"
  },
  {
    id: 462,
    bengaliName: "টুনা (হলুদ পাখনা টুনা)",
    scientificName: "Thunnus albacares",
    bengaliPronunciation: "থান্নাস আলবাকারেস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "আন্তর্জাতিক ক্যানিং ও সুশি শিল্পের বিশ্বসেরা সামুদ্রিক মাছ।"
  },
  {
    id: 463,
    bengaliName: "লটকা মাছ / বোম্বে ডাক",
    scientificName: "Harpadon nehereus",
    bengaliPronunciation: "হার্পাডন নেহেরিয়াস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "উপকূলের নরম মাংসল মাছ ও শুঁটকি হিসেবে বিখ্যাত।"
  },
  {
    id: 464,
    bengaliName: "ছুরি মাছ",
    scientificName: "Trichiurus lepturus",
    bengaliPronunciation: "ট্রিকিউরাস লেপটুরাস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "চ্যাপ্টা ফিতার মতো ধারালো দাঁতের সামুদ্রিক শুঁটকি মাছ।"
  },
  {
    id: 465,
    bengaliName: "গলদা চিংড়ি",
    scientificName: "Macrobrachium rosenbergii",
    bengaliPronunciation: "ম্যাক্রোব্রাকিয়াম রোজেনবার্গি",
    category: "মাছ ও জলজ প্রাণী",
    importance: "মিঠাপানির বিশাল নীল পা ও মাথার রপ্তানিমুখী মূল্যবান ক্রাস্টাশিয়ান।"
  },
  {
    id: 466,
    bengaliName: "বাগদা চিংড়ি",
    scientificName: "Penaeus monodon",
    bengaliPronunciation: "পেনিয়াস মোনোডন",
    category: "মাছ ও জলজ প্রাণী",
    importance: "লবণাক্ত পানির কালো ডোরাকাটা প্রধান রপ্তানি পণ্য হোয়াইট গোল্ড।"
  },
  {
    id: 467,
    bengaliName: "হরিণা চিংড়ি",
    scientificName: "Metapenaeus monoceros",
    bengaliPronunciation: "মেটাপেনিয়াস মোনোসেরোস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "উপকূলের মোহনার ছোট সুস্বাদু বাদামী রঙের চিংড়ি।"
  },
  {
    id: 468,
    bengaliName: "কাঁকড়া (কাদা কাঁকড়া)",
    scientificName: "Scylla serrata",
    bengaliPronunciation: "সিলা সেরাটা",
    category: "মাছ ও জলজ প্রাণী",
    importance: "ম্যানগ্রোভের শক্ত খোলসযুক্ত আন্তর্জাতিক রপ্তানির জীবন্ত কাঁকড়া।"
  },
  {
    id: 469,
    bengaliName: "রাজ কাঁকড়া (অশ্বখুরাকৃতি)",
    scientificName: "Tachypleus gigas",
    bengaliPronunciation: "ট্যাকিপ্লিয়াস জাইগাস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "জীবন্ত জীবাশ্ম; নীল রক্ত চিকিৎসা বিজ্ঞানে ব্যাকটেরিয়াল টেস্টে ব্যবহৃত।"
  },
  {
    id: 470,
    bengaliName: "অক্টোপাস",
    scientificName: "Octopus vulgaris",
    bengaliPronunciation: "অক্টোপাস ভালগারিস",
    category: "মাছ ও জলজ প্রাণী",
    importance: "আটটি শুঁড় ও তিনটি হৃদপিণ্ডযুক্ত বুদ্ধিমান অমেরুদণ্ডী মোলাস্ক।"
  },
  {
    id: 471,
    bengaliName: "কুনোব্যাঙ",
    scientificName: "Duttaphrynus melanostictus",
    bengaliPronunciation: "দত্তাফ্রাইনাস মেলানোস্টিকটাস",
    category: "উভচর ও সরীসৃপ",
    importance: "খসখসে ত্বকযুক্ত ক্ষতিকর কীটভোজী উভচর স্থলচর ব্যাঙ।"
  },
  {
    id: 472,
    bengaliName: "সোনা ব্যাঙ / কোলা ব্যাঙ",
    scientificName: "Hoplobatrachus tigerinus",
    bengaliPronunciation: "হপ্লোবাট্রাকাস টাইগেরিনাস",
    category: "উভচর ও সরীসৃপ",
    importance: "জলাশয়ের বৃহত্তম হলুদ-সবুজ ডোরাকাটা শিকারী উভচর ব্যাঙ।"
  },
  {
    id: 473,
    bengaliName: "গেছো ব্যাঙ",
    scientificName: "Polypedates leucomystax",
    bengaliPronunciation: "পলিপেডেটস লিউকোমিসট্যাক্স",
    category: "উভচর ও সরীসৃপ",
    importance: "গাছের ডালে পাতার আঠালো প্যাড দিয়ে চড়ে বেড়ানো ব্যাঙ।"
  },
  {
    id: 474,
    bengaliName: "ঝিঝি ব্যাঙ",
    scientificName: "Fejervarya limnocharis",
    bengaliPronunciation: "ফেজেরভারিয়া লিমনোকারিস",
    category: "উভচর ও সরীসৃপ",
    importance: "ধানক্ষেতের ছোট একটানা ক্রিকেট পোকার মতো ডাকা ব্যাঙ।"
  },
  {
    id: 475,
    bengaliName: "সবুজ ব্যাঙ",
    scientificName: "Euphlyctis cyanophlyctis",
    bengaliPronunciation: "ইউফ্লিক্টিস সায়ানোফ্লিক্টিস",
    category: "উভচর ও সরীসৃপ",
    importance: "পানির ওপর ভেসে থাকা চোখ উঁচু স্কিপার ব্যাঙ।"
  },
  {
    id: 476,
    bengaliName: "গিরগিটি (রক্তচোষা গিরগিটি)",
    scientificName: "Calotes versicolor",
    bengaliPronunciation: "ক্যালোটস ভার্সিকালার",
    category: "উভচর ও সরীসৃপ",
    importance: "রং বদলাতে সক্ষম বাগানের ক্ষতিকর পোকা শিকারী সরীসৃপ।"
  },
  {
    id: 477,
    bengaliName: "টিকটিকি (দেয়াল টিকটিকি)",
    scientificName: "Hemidactylus frenatus",
    bengaliPronunciation: "হেমিড্যাকটাইলাস ফ্রেনাটাস",
    category: "উভচর ও সরীসৃপ",
    importance: "ঘরের দেয়ালে পোকা ও মশা নিধনকারী গৃহবাসী সরীসৃপ।"
  },
  {
    id: 478,
    bengaliName: "গোসাপ (সোনা গোসাপ)",
    scientificName: "Varanus flavescens",
    bengaliPronunciation: "ভারানাস ফ্ল্যাভেসেন্স",
    category: "উভচর ও সরীসৃপ",
    importance: "হলুদ ফুটকিযুক্ত ইঁদুর ও বিষাক্ত সাপ নিধনকারী বুনো সরীসৃপ।"
  },
  {
    id: 479,
    bengaliName: "কালো গোসাপ",
    scientificName: "Varanus salvator",
    bengaliPronunciation: "ভারানাস স্যালভেটর",
    category: "উভচর ও সরীসৃপ",
    importance: "বিশ্বের অন্যতম বৃহৎ আধা-জলচর শিকারী মনিটর লিজার্ড।"
  },
  {
    id: 480,
    bengaliName: "মেছো কুমির / লবণাক্ত পানির কুমির",
    scientificName: "Crocodylus porosus",
    bengaliPronunciation: "ক্রোকোডাইলাস পোরোসাস",
    category: "উভচর ও সরীসৃপ",
    importance: "সুন্দরবনের বিশ্বের বৃহত্তম জীবন্ত সরীসৃপ ও শীর্ষ খাদক।"
  },
  {
    id: 481,
    bengaliName: "মিঠাপানির কুমির",
    scientificName: "Crocodylus palustris",
    bengaliPronunciation: "ক্রোকোডাইলাস প্যালোস্ট্রিস",
    category: "উভচর ও সরীসৃপ",
    importance: "বিল ও নদীর শান্ত স্বভাবের বিলুপ্তপ্রায় মিঠাপানির কুমির।"
  },
  {
    id: 482,
    bengaliName: "ঘড়িয়াল",
    scientificName: "Gavialis gangeticus",
    bengaliPronunciation: "গ্যাভিয়ালিস গ্যাঞ্জেটিকাস",
    category: "উভচর ও সরীসৃপ",
    importance: "লম্বা সরু চোয়ালযুক্ত মাছভোজী মহাবিপন্ন পদ্মার সরীসৃপ।"
  },
  {
    id: 483,
    bengaliName: "গোখরা (খৈয়া গোখরা)",
    scientificName: "Naja naja",
    bengaliPronunciation: "নাজা নাজা",
    category: "উভচর ও সরীসৃপ",
    importance: "ফণার পেছনে চশমাকৃতির চিহ্নযুক্ত তীব্র নিউরোটক্সিক বিষধর সাপ।"
  },
  {
    id: 484,
    bengaliName: "পদ্ম গোখরা (মনোকল কোবরা)",
    scientificName: "Naja kaouthia",
    bengaliPronunciation: "নাজা কাউথিয়া",
    category: "উভচর ও সরীসৃপ",
    importance: "ফণার পেছনে একক বলয়যুক্ত বাংলাদেশের প্রধান বিষাক্ত সাপ।"
  },
  {
    id: 485,
    bengaliName: "শঙ্খচূড় / রাজগোখরা",
    scientificName: "Ophiophagus hannah",
    bengaliPronunciation: "ওফিওফ্যাগাস হান্নাহ",
    category: "উভচর ও সরীসৃপ",
    importance: "বিশ্বের দীর্ঘতম বিষধর সাপ; অন্য সাপ শিকার করে খায়।"
  },
  {
    id: 486,
    bengaliName: "চন্দ্রবোড়া / রাসেলস ভাইপার",
    scientificName: "Daboia russelii",
    bengaliPronunciation: "ড্যাবইয়া রাসেলাই",
    category: "উভচর ও সরীসৃপ",
    importance: "হিমোটক্সিক বিষযুক্ত সন্তান প্রসবকারী ত্রিভুজ মাথার বিষধর সাপ।"
  },
  {
    id: 487,
    bengaliName: "সবুজ বোড়া (কালা বোড়া)",
    scientificName: "Trimeresurus albolabris",
    bengaliPronunciation: "ট্রাইমেরেসুরাস অ্যালবোলাব্রিস",
    category: "উভচর ও সরীসৃপ",
    importance: "গাছের ডালে মিশে থাকা সবুজ পিট ভাইপার সাপ।"
  },
  {
    id: 488,
    bengaliName: "দাঁড়াশ সাপ",
    scientificName: "Ptyas mucosa",
    bengaliPronunciation: "টিয়াস মিউকোসা",
    category: "উভচর ও সরীসৃপ",
    importance: "সম্পূর্ণ নির্বিষ ক্ষিপ্রগতির কৃষকের পরম বন্ধু ইঁদুরখাদক সাপ।"
  },
  {
    id: 489,
    bengaliName: "ঢোঁড়া সাপ",
    scientificName: "Fowlea piscator",
    bengaliPronunciation: "ফাউলিয়া পিসকেটর",
    category: "উভচর ও সরীসৃপ",
    importance: "জলাশয়ের নিরীহ ব্যাঙ ও মাছ শিকারী নির্বিষ পানি সাপ।"
  },
  {
    id: 490,
    bengaliName: "অজগর (বার্মিজ অজগর)",
    scientificName: "Python bivittatus",
    bengaliPronunciation: "পাইথন বিভিটাটাস",
    category: "উভচর ও সরীসৃপ",
    importance: "সুন্দরবনের সুবিশাল শিকার পেঁচিয়ে শ্বাসরোধকারী নির্বিষ সাপ।"
  },
  {
    id: 491,
    bengaliName: "কাছিম (সুন্দরী কাছিম)",
    scientificName: "Nilssonia hurum",
    bengaliPronunciation: "নিলসোনিয়া হুরম",
    category: "উভচর ও সরীসৃপ",
    importance: "চোখের মতো দাগযুক্ত মিঠাপানির নরম খোলস বিশিষ্ট কাছিম।"
  },
  {
    id: 492,
    bengaliName: "বোস্তামীর কাছিম",
    scientificName: "Nilssonia nigricans",
    bengaliPronunciation: "নিলসোনিয়া নাইগ্রিক্যান্স",
    category: "উভচর ও সরীসৃপ",
    importance: "চট্টগ্রামের বায়েজিদ বোস্তামীর দরগাহ পুকুরের ঐতিহাসিক কাছিম।"
  },
  {
    id: 493,
    bengaliName: "কড়ি কচ্ছপ",
    scientificName: "Pangshura tecta",
    bengaliPronunciation: "প্যাংগুরা টেকটা",
    category: "উভচর ও সরীসৃপ",
    importance: "পিঠে তাঁবুর মতো শক্ত উঁচু খাঁজযুক্ত ছোট সুন্দর কচ্ছপ।"
  },
  {
    id: 494,
    bengaliName: "সবুজ সামুদ্রিক কচ্ছপ",
    scientificName: "Chelonia mydas",
    bengaliPronunciation: "চেলোনিয়া মাইডাস",
    category: "উভচর ও সরীসৃপ",
    importance: "সেন্টমার্টিন দ্বীপে ডিম পাড়তে আসা আন্তর্জাতিক সংরক্ষিত কচ্ছপ।"
  },
  {
    id: 495,
    bengaliName: "অলিভ রিডলে কচ্ছপ",
    scientificName: "Lepidochelys olivacea",
    bengaliPronunciation: "লেপিডোকিলিস অলিভাসিয়া",
    category: "উভচর ও সরীসৃপ",
    importance: "উপকূলের বালুকাবেলায় দলবদ্ধভাবে ডিম পাড়া সামুদ্রিক কচ্ছপ।"
  },
  {
    id: 496,
    bengaliName: "তেলাপোকা (আমেরিকান)",
    scientificName: "Periplaneta americana",
    bengaliPronunciation: "পেরিপ্ল্যানেটা আমেরিকানা",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "আর্থ্রোপোডার মডেল জীব; মুক্ত সংবহনতন্ত্র ও যৌগিক চোখযুক্ত।"
  },
  {
    id: 497,
    bengaliName: "জার্মান তেলাপোকা",
    scientificName: "Blattella germanica",
    bengaliPronunciation: "ব্লাটেলা জার্মানিকা",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "ছোট আকারের দ্রুত বংশবৃদ্ধিকারী ঘরের খাবার নষ্টকারী কীট।"
  },
  {
    id: 498,
    bengaliName: "মৌমাছি (এশীয় মৌমাছি)",
    scientificName: "Apis cerana",
    bengaliPronunciation: "এপিস সেরানা",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "মধু ও মোম উৎপাদনকারী সামাজিক পরাগায়নকারী উপকারী পতঙ্গ।"
  },
  {
    id: 499,
    bengaliName: "পাহাড়ী মৌমাছি",
    scientificName: "Apis dorsata",
    bengaliPronunciation: "এপিস ডোরসাটা",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "সুন্দরবনের গাছের উঁচুতে বড় চাক বাঁধানো বুনো মৌমাছি।"
  },
  {
    id: 500,
    bengaliName: "ইউরোপীয় মৌমাছি",
    scientificName: "Apis mellifera",
    bengaliPronunciation: "এপিস মেলিফেরা",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "বাণিজ্যিক মৌমাছি পালনে সর্বাধিক ব্যবহৃত বৈশ্বিক মৌমাছি।"
  },
  {
    id: 501,
    bengaliName: "রেশম মথ",
    scientificName: "Bombyx mori",
    bengaliPronunciation: "বোম্বিক্স মোরি",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "তুঁত পাতা খেয়ে কোকুন থেকে চকচকে রেশম সুতা প্রস্তুতকারী।"
  },
  {
    id: 502,
    bengaliName: "তসর রেশম কীট",
    scientificName: "Antheraea mylitta",
    bengaliPronunciation: "অ্যান্থেরিয়া মাইলিট্টা",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "শাল ও অর্জুন গাছে বাস করা বুনো তসর সুতা উৎপাদনকারী পোকা।"
  },
  {
    id: 503,
    bengaliName: "লাক্ষা কীট",
    scientificName: "Kerria lacca",
    bengaliPronunciation: "কেরিয়া লাক্কা",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "গাছের ডালে কোটিং থেকে প্রাকৃতিক রেজিন ও সিলিং লাক্ষা প্রস্তুতকারক।"
  },
  {
    id: 504,
    bengaliName: "অ্যানোফিলিস মশা",
    scientificName: "Anopheles stephensi",
    bengaliPronunciation: "অ্যানোফিলিস স্টিফেনসি",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "মানবদেহে ম্যালেরিয়া জীবাণুর রোগ সংবহনকারী স্ত্রী ভেক্টর।"
  },
  {
    id: 505,
    bengaliName: "এডিম মশা",
    scientificName: "Aedes aegypti",
    bengaliPronunciation: "এডিশ এজিপ্টি",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "ডেঙ্গু, চিকুনগুনিয়া ও জিকা ভাইরাসের বাহক ডোরাকাটা মশা।"
  },
  {
    id: 506,
    bengaliName: "কিউলেক্স মশা",
    scientificName: "Culex quinquefasciatus",
    bengaliPronunciation: "কিউলেক্স কুইনকিউফ্যাসিয়াটাস",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "ফাইলেরিয়াসিস বা গোদ রোগের পরজীবী কৃমি সংবহনকারী মশা।"
  },
  {
    id: 507,
    bengaliName: "মাছি (পাতি মাছি)",
    scientificName: "Musca domestica",
    bengaliPronunciation: "মাসকা ডোমেস্টিকা",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "কলেরা, টাইফয়েড ও ডায়রিয়ার জীবাণু ছড়ানো নোংরা পতঙ্গ।"
  },
  {
    id: 508,
    bengaliName: "ফলের মাছি (ড্রসোফিলা)",
    scientificName: "Drosophila melanogaster",
    bengaliPronunciation: "ড্রসোফিলা মেলানোগ্যাস্টার",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "বংশগতি ও জেনেটিক্স গবেষণার বিখ্যাত বিশ্বজনীন মডেল প্রাণী।"
  },
  {
    id: 509,
    bengaliName: "ঘাসফড়িং",
    scientificName: "Poekilocerus pictus",
    bengaliPronunciation: "পোকিলোসিরাস পিকটাস",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "আকন্দ পাতাভোজী রঙিন ঘাসফড়িং; বায়োলজি ল্যাবের আদর্শ ব্যবচ্ছেদ জীব।"
  },
  {
    id: 510,
    bengaliName: "মরু পঙ্গপাল",
    scientificName: "Schistocerca gregaria",
    bengaliPronunciation: "সিস্টোসারকা গ্রেগারিয়া",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "ঝাঁক বেঁধে উড়ে গিয়ে চোখের পলকে ফসল ধ্বংসকারী সর্বগ্রাসী পোকা।"
  },
  {
    id: 511,
    bengaliName: "উইপোকা",
    scientificName: "Odontotermes obesus",
    bengaliPronunciation: "ওডোন্টোটের্মিস ওবেসাস",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "সেলুলোজ পরিপাককারী ঢিবি নির্মাণকারী সামাজিক ক্ষতিকর পতঙ্গ।"
  },
  {
    id: 512,
    bengaliName: "লাল পিঁপড়া",
    scientificName: "Oecophylla smaragdina",
    bengaliPronunciation: "ইকোফাইলা স্মারাগডিনা",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "গাছের পাতা মুড়ে বাসা বানানো শিকারী আক্রমণাত্মক বনপিঁপড়া।"
  },
  {
    id: 513,
    bengaliName: "কালো পিঁপড়া",
    scientificName: "Camponotus compressus",
    bengaliPronunciation: "ক্যাম্পোনোটাস কমপ্রেসাস",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "ঘরের মিষ্টি ও খাবার সন্ধানী বড় কালো কার্পেন্টার পিঁপড়া।"
  },
  {
    id: 514,
    bengaliName: "ছারপোকা",
    scientificName: "Cimex lectularius",
    bengaliPronunciation: "সাইমেক্স লেক্টুলারিয়াস",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "বিছানা ও সোফায় বাস করা রাতে রক্তচোষা চ্যাপ্টা পরজীবী কীট।"
  },
  {
    id: 515,
    bengaliName: "মাথার উকুন",
    scientificName: "Pediculus humanus capitis",
    bengaliPronunciation: "পেডিকুলাস হিউম্যানাস ক্যাপিটিস",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "মানুষের মাথায় চুলের গোড়ায় রক্ত চুষে বেঁচে থাকা পরজীবী।"
  },
  {
    id: 516,
    bengaliName: "ধানের মাজরা পোকা",
    scientificName: "Scirpophaga incertulas",
    bengaliPronunciation: "সিরপোফাগা ইনসার্টুলাস",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "ধানের কাণ্ড ছিদ্র করে শিষ শুকিয়ে সাদা মরা শিষ সৃষ্টিকারী শত্রু।"
  },
  {
    id: 517,
    bengaliName: "ধানের বাদামী গাছফড়িং (বিপিএইচ)",
    scientificName: "Nilaparvata lugens",
    bengaliPronunciation: "নিলাপর্বতা লুজেন্স",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "হপার বার্ন সৃষ্টি করে সম্পূর্ণ ধানক্ষেত পুড়িয়ে ফেলা বিধ্বংসী পোকা।"
  },
  {
    id: 518,
    bengaliName: "পাট গাছের বিছা পোকা",
    scientificName: "Spilosoma obliqua",
    bengaliPronunciation: "স্পাইলোসোমা অবলিকুয়া",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "পাট গাছের পাতা খেয়ে কঙ্কাল বানিয়ে ফেলা রোমশ শুঁয়োপোকা।"
  },
  {
    id: 519,
    bengaliName: "মাকড়সা (সাধারণ ঘরের মাকড়সা)",
    scientificName: "Pholcus phalangioides",
    bengaliPronunciation: "ফলকাস ফ্যালানজিওইডেস",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "আট পা বিশিষ্ট জাল বুনে ক্ষতিকর মশা-মাছি শিকারী অ্যারাকনিড।"
  },
  {
    id: 520,
    bengaliName: "বিচ্ছু / বৃশ্চিক",
    scientificName: "Heterometrus swammerdami",
    bengaliPronunciation: "হেটেরোমেট্রাস সোয়ামারডামি",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "লেজে বিষাক্ত হুল ও দাঁড়া বিশিষ্ট নিশাচর মাংসাশী অ্যারাকনিড।"
  },
  {
    id: 521,
    bengaliName: "কেন্নো",
    scientificName: "Spirostreptus brachycerus",
    bengaliPronunciation: "স্পাইরোস্ট্রেপ্টাস ব্র্যাকিসেরাস",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "প্রতি খণ্ডে দুই জোড়া পা বিশিষ্ট পচা পাতাভোজী নলাকার জীব।"
  },
  {
    id: 522,
    bengaliName: "তেঁতুলবিছা (শতপদী)",
    scientificName: "Scolopendra morsitans",
    bengaliPronunciation: "স্কোলোপেনড্রা মরসিট্যান্স",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "প্রতি খণ্ডে এক জোড়া বিষাক্ত পা বিশিষ্ট দ্রুতগামী মাংসাশী পতঙ্গ।"
  },
  {
    id: 523,
    bengaliName: "কেঁচো (আদর্শ কেঁচো)",
    scientificName: "Metaphire posthuma",
    bengaliPronunciation: "মেটাফায়ার পোস্টহুমা",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "মাটি খুঁড়ে উর্বর করা এবং ভার্মিকম্পোস্ট তৈরির কৃষকের পরম বন্ধু।"
  },
  {
    id: 524,
    bengaliName: "জোঁক (রক্তচোষা জোঁক)",
    scientificName: "Hirudo medicinalis",
    bengaliPronunciation: "হিরুডো মেডিসিনালিস",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "হিরুডিন লালা নিঃসৃত করে রক্ত জমাট না বাঁধিয়ে রক্তচোষা অ্যানিলিডা।"
  },
  {
    id: 525,
    bengaliName: "শামুক (আপেল শামুক)",
    scientificName: "Pila globosa",
    bengaliPronunciation: "পাইলা গ্লোবোসা",
    category: "সন্ধিপদী ও কীটপতঙ্গ",
    importance: "ক্যালসিয়াম কার্বনেট খোলস ও র‌্যাডুলাযুক্ত মিঠাপানির আর্দ্র মোলাস্ক।"
  },
  {
    id: 526,
    bengaliName: "ই কোলাই ব্যাকটেরিয়া",
    scientificName: "Escherichia coli",
    bengaliPronunciation: "এশেরিকিয়া কোলাই",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "মানব অন্ত্রের গ্রাম-নেগেটিভ মডেল অণুজীব; জেনেটিক গবেষণার ভিত্তি।"
  },
  {
    id: 527,
    bengaliName: "কলেরা জীবাণু",
    scientificName: "Vibrio cholerae",
    bengaliPronunciation: "ভিব্রিও কলেরি",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "কমা আকৃতির মারাত্মক পানিবাহিত ডায়রিয়া সৃষ্টিকারী ব্যাকটেরিয়া।"
  },
  {
    id: 528,
    bengaliName: "যক্ষ্মা জীবাণু",
    scientificName: "Mycobacterium tuberculosis",
    bengaliPronunciation: "মাইকোব্যাকটেরিয়াম টিউবারকিউলোসিস",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "ফুসফুসে দীর্ঘমেয়াদী ক্ষয়রোগ ও কাশি সৃষ্টিকারী রড আকৃতির জীবাণু।"
  },
  {
    id: 529,
    bengaliName: "টাইফয়েড জীবাণু",
    scientificName: "Salmonella typhi",
    bengaliPronunciation: "সালমোনেলা টাইফি",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "দূষিত খাদ্য ও পানির মাধ্যমে উচ্চ জ্বর সৃষ্টিকারী মারাত্মক প্যাথোজেন।"
  },
  {
    id: 530,
    bengaliName: "ধনুষ্টংকার জীবাণু",
    scientificName: "Clostridium tetani",
    bengaliPronunciation: "ক্লোস্ট্রিডিয়াম টিটানি",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "মরচে ধরা লোহায় থাকা তীব্র পেশি সংকোচনকারী অবায়বীয় জীবাণু।"
  },
  {
    id: 531,
    bengaliName: "বটুলিজম জীবাণু",
    scientificName: "Clostridium botulinum",
    bengaliPronunciation: "ক্লোস্ট্রিডিয়াম বটুলিনাম",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "বটুলিনাম টক্সিন সৃষ্টিকারী টিনজাত খাদ্যের মারাত্মক বিষাক্ত জীবাণু।"
  },
  {
    id: 532,
    bengaliName: "অ্যানথ্রাক্স জীবাণু",
    scientificName: "Bacillus anthracis",
    bengaliPronunciation: "ব্যাসিলাস অ্যানথ্রাসিস",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "স্পোর সৃষ্টিকারী গবাদিপশু ও মানুষের মারাত্মক মারণাস্ত্র জীবাণু।"
  },
  {
    id: 533,
    bengaliName: "বায়োটেকনোলজি ব্যাসিলাস",
    scientificName: "Bacillus thuringiensis",
    bengaliPronunciation: "ব্যাসিলাস থুরিনজিয়েনসিস",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "বিটি জিন প্রদানকারী প্রাকৃতিক জৈব কীটনাশক সৃষ্টিকারী অণুজীব।"
  },
  {
    id: 534,
    bengaliName: "দইয়ের ল্যাকটিক ব্যাকটেরিয়া",
    scientificName: "Lactobacillus bulgaricus",
    bengaliPronunciation: "ল্যাকটোব্যাসিলাস বুলগারিকাস",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "দুধের ল্যাকটোজ ভেঙে সুস্বাদু ও প্রোবায়োটিক দই প্রস্তুতকারী বন্ধু।"
  },
  {
    id: 535,
    bengaliName: "অন্ত্রের প্রোবায়োটিক",
    scientificName: "Lactobacillus acidophilus",
    bengaliPronunciation: "ল্যাকটোব্যাসিলাস অ্যাসিডোফিলাস",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "হজম সহায়ক ও ক্ষতিকর জীবাণু ধ্বংসকারী অন্ত্রের উপকারী বন্ধু।"
  },
  {
    id: 536,
    bengaliName: "স্ট্রেপ্টোকক্কাস নিউমোনি",
    scientificName: "Streptococcus pneumoniae",
    bengaliPronunciation: "স্ট্রেপ্টোকক্কাস নিউমোনি",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "গ্রিফিথের রূপান্তর পরীক্ষার মডেল ও ফুসফুসে নিউমোনিয়া সৃষ্টিকারী।"
  },
  {
    id: 537,
    bengaliName: "ত্বকের গোল্ডেন স্ট্যাফাইলোকক্কাস",
    scientificName: "Staphylococcus aureus",
    bengaliPronunciation: "স্ট্যাফাইলোকক্কাস অরিয়াস",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "ত্বকের ফোড়া ও অ্যান্টিবায়োটিক প্রতিরোধী (MRSA) গোলকাকার জীবাণু।"
  },
  {
    id: 538,
    bengaliName: "সিফিলিস জীবাণু",
    scientificName: "Treponema pallidum",
    bengaliPronunciation: "ট্রেপোনেমা প্যালিডাম",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "স্পাইরোচেট সর্পিল আকৃতির যৌন সংক্রামক ব্যাধির জীবাণু।"
  },
  {
    id: 539,
    bengaliName: "কুষ্ঠরোগের জীবাণু",
    scientificName: "Mycobacterium leprae",
    bengaliPronunciation: "মাইকোব্যাকটেরিয়াম লেপ্রি",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "স্নায়ু ও ত্বক অবশকারী হ্যানসেন ডিজিজ সৃষ্টিকারী রড জীবাণু।"
  },
  {
    id: 540,
    bengaliName: "নাইট্রোজেন সংবন্ধনকারী রাইজোবিয়াম",
    scientificName: "Rhizobium leguminosarum",
    bengaliPronunciation: "রাইজোবিয়াম লেগুমিনোসারাম",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "ডাল ফসলের মূলে নডিউল তৈরি করে বাতাস থেকে নাইট্রোজেন জমায়।"
  },
  {
    id: 541,
    bengaliName: "মুক্তজীবী নাইট্রোজেন সংবন্ধক",
    scientificName: "Azotobacter chroococcum",
    bengaliPronunciation: "অ্যাজোটোব্যাকটার ক্রোকোকাম",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "মাটিতে মুক্তভাবে বাস করে উর্বরতা বৃদ্ধিকারী বায়োফার্টিলাইজার।"
  },
  {
    id: 542,
    bengaliName: "ফসফেট দ্রবীভূতকারী",
    scientificName: "Pseudomonas putida",
    bengaliPronunciation: "সিউডোমোনাস পুটিডা",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "মাটির অপ্রাপ্য ফসফরাস দ্রবীভূতকারী ও তেল দূষণ পরিষ্কারক জীবাণু।"
  },
  {
    id: 543,
    bengaliName: "বায়োগ্যাস মিথেন উৎপাদক",
    scientificName: "Methanobacterium formicicum",
    bengaliPronunciation: "মিথেনোব্যাকটেরিয়াম ফর্মিসিকাম",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "গোবর থেকে মিথেন গ্যাস (বায়োগ্যাস) প্রস্তুতকারী অবায়বীয় আর্কিওন।"
  },
  {
    id: 544,
    bengaliName: "থার্মোফিলিক পলিমারেজ ব্যাকটেরিয়া",
    scientificName: "Thermus aquaticus",
    bengaliPronunciation: "থার্মাস অ্যাকোয়াটিকাস",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "PCR প্রযুক্তিতে ব্যবহৃত তাপসহনশীল Taq DNA পলিমারেজের উৎস।"
  },
  {
    id: 545,
    bengaliName: "ব্লু-গ্রিন অ্যালজি (নস্টক)",
    scientificName: "Nostoc carneum",
    bengaliPronunciation: "নস্টক কারনেয়াম",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "হেটারোসিস্টযুক্ত মনেরা রাজ্যের নাইট্রোজেন সংবন্ধনকারী সায়ানোব্যাকটেরিয়া।"
  },
  {
    id: 546,
    bengaliName: "স্পিরুলিনা (সুপারফুড)",
    scientificName: "Arthrospira platensis",
    bengaliPronunciation: "আর্থ্রোস্পাইরা প্ল্যাটেনসিস",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "৭০% প্রোটিনসমৃদ্ধ মহাকাশচারীদের পুষ্টিকর খাদ্য সায়ানোব্যাকটেরিয়া।"
  },
  {
    id: 547,
    bengaliName: "অ্যানাবেনা সায়ানোব্যাকটেরিয়া",
    scientificName: "Anabaena azollae",
    bengaliPronunciation: "অ্যানাবেনা অ্যাজোলি",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "অ্যাজোলা ফার্নের সাথে মিথোজীবী হয়ে জমিতে নাইট্রোজেন যোগ করে।"
  },
  {
    id: 548,
    bengaliName: "ম্যালেরিয়া পরজীবী (ভাইভ্যাক্স)",
    scientificName: "Plasmodium vivax",
    bengaliPronunciation: "প্লাজমোডিয়াম ভাইভ্যাক্স",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "লোহিত রক্তকণিকা আক্রমণকারী কাঁপুনীসহ ম্যালেরিয়া সৃষ্টিকারী।"
  },
  {
    id: 549,
    bengaliName: "মারাত্মক ম্যালেরিয়া (ফ্যালসিপ্যারাম)",
    scientificName: "Plasmodium falciparum",
    bengaliPronunciation: "প্লাজমোডিয়াম ফ্যালসিপ্যারাম",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "মস্তিষ্কে আক্রমণকারী ম্যালিগন্যান্ট ম্যালেরিয়ার প্রাণঘাতী জীবাণু।"
  },
  {
    id: 550,
    bengaliName: "আমাশয় পরজীবী",
    scientificName: "Entamoeba histolytica",
    bengaliPronunciation: "এন্টামিবা হিস্টোলাইটিকা",
    category: "অণুজীব ও ব্যাকটেরিয়া",
    importance: "অন্ত্রে ক্ষত সৃষ্টি করে আমাশয় ও পেটব্যথা তৈরি করা প্রোটোজোয়া।"
  },
  {
    id: 551,
    bengaliName: "পেনিসিলিন আবিষ্কারক ছত্রাক",
    scientificName: "Penicillium notatum",
    bengaliPronunciation: "পেনিসিলিয়াম নোটেটাম",
    category: "ছত্রাক ও শৈবাল",
    importance: "আলেকজান্ডার ফ্লেমিং কর্তৃক বিশ্বের প্রথম অ্যান্টিবায়োটিক সৃষ্টিকারী।"
  },
  {
    id: 552,
    bengaliName: "ইস্ট (বেকার্স ইস্ট)",
    scientificName: "Saccharomyces cerevisiae",
    bengaliPronunciation: "স্যাকারোমাইসিস সেরিভিসি",
    category: "ছত্রাক ও শৈবাল",
    importance: "পাউরুটি ফোলাতে ও অ্যালকোহল গাঁজনে ব্যবহৃত এককোষী ছত্রাক।"
  },
  {
    id: 553,
    bengaliName: "মাশরুম (হোয়াইট বাটন)",
    scientificName: "Agaricus bisporus",
    bengaliPronunciation: "অ্যাগারিকাস বাইস্পোরাস",
    category: "ছত্রাক ও শৈবাল",
    importance: "বিশ্বের সবচেয়ে বেশি খাওয়া সুস্বাদু ভোজ্য ব্যাঙের ছাতা।"
  },
  {
    id: 554,
    bengaliName: "বুনো মাশরুম (মাঠের মাশরুম)",
    scientificName: "Agaricus campestris",
    bengaliPronunciation: "অ্যাগারিকাস ক্যাম্পেসট্রিস",
    category: "ছত্রাক ও শৈবাল",
    importance: "বর্ষাকালে ঘাসের মাঠে প্রাকৃতিকভাবে গজানো ভোজ্য ছত্রাক।"
  },
  {
    id: 555,
    bengaliName: "বিষাক্ত মাশরুম (ডেথ ক্যাপ)",
    scientificName: "Amanita phalloides",
    bengaliPronunciation: "অ্যামানিটা ফ্যালয়েডেস",
    category: "ছত্রাক ও শৈবাল",
    importance: "অ্যামানিটিন বিষযুক্ত মারাত্মক প্রাণঘাতী বিষাক্ত মাশরুম।"
  },
  {
    id: 556,
    bengaliName: "অ্যাসপারগিলাস ফাঙ্গাস",
    scientificName: "Aspergillus niger",
    bengaliPronunciation: "অ্যাসপারজিলাস নাইজার",
    category: "ছত্রাক ও শৈবাল",
    importance: "সাইট্রিক এসিড শিল্পোৎপাদনে ব্যবহৃত কালো ছত্রাক।"
  },
  {
    id: 557,
    bengaliName: "রুটির ছাতা (রাইজোপাস)",
    scientificName: "Rhizopus stolonifer",
    bengaliPronunciation: "রাইজোপাস স্টোলোনিফার",
    category: "ছত্রাক ও শৈবাল",
    importance: "বাসি রুটি ও ফলের ওপর কালো জালের মতো গজানো পিন মোল্ড।"
  },
  {
    id: 558,
    bengaliName: "আলুর নাভিধসা ছত্রাক",
    scientificName: "Phytophthora infestans",
    bengaliPronunciation: "ফাইটোপথোরা ইনফেসট্যান্স",
    category: "ছত্রাক ও শৈবাল",
    importance: "১৮৪৫ সালের আয়ারল্যান্ডের মহাদুর্ভিক্ষ সৃষ্টিকারী ধ্বংসাত্মক ছত্রাক।"
  },
  {
    id: 559,
    bengaliName: "ধানের বাদামী দাগ ছত্রাক",
    scientificName: "Bipolaris oryzae",
    bengaliPronunciation: "বাইপোল্যারিস ওরাইজি",
    category: "ছত্রাক ও শৈবাল",
    importance: "১৯৪৩ সালের বাংলার ৫০ লক্ষ মানুষের মৃত্যুর মন্বন্তর সৃষ্টিকারী ছত্রাক।"
  },
  {
    id: 560,
    bengaliName: "চর্মরোগের দাদ ছত্রাক",
    scientificName: "Trichophyton rubrum",
    bengaliPronunciation: "ট্রাইকোফাইটোন রুব্রাম",
    category: "ছত্রাক ও শৈবাল",
    importance: "মানবদেহে চুলকানি ও দাদ (Ringworm) সৃষ্টিকারী ছত্রাক।"
  },
  {
    id: 561,
    bengaliName: "স্পাইরোগাইরা শৈবাল",
    scientificName: "Spirogyra porticalis",
    bengaliPronunciation: "স্পাইরোগাইরা পোরটিকালিস",
    category: "ছত্রাক ও শৈবাল",
    importance: "জলাশয়ের পিচ্ছিল জলের রেশম; সর্পিলাকার ক্লোরোপ্লাস্টযুক্ত সবুজ শৈবাল।"
  },
  {
    id: 562,
    bengaliName: "ইউলোথ্রিক্স শৈবাল",
    scientificName: "Ulothrix zonata",
    bengaliPronunciation: "ইউলোথ্রিক্স জোনেটা",
    category: "ছত্রাক ও শৈবাল",
    importance: "মেখলা বা বেল্ট আকৃতির ক্লোরোপ্লাস্টবিশিষ্ট মিঠাপানির সবুজ শৈবাল।"
  },
  {
    id: 563,
    bengaliName: "ভলভক্স কলোনিয়াল শৈবাল",
    scientificName: "Volvox aureus",
    bengaliPronunciation: "ভলভক্স অরিয়াস",
    category: "ছত্রাক ও শৈবাল",
    importance: "হাজার হাজার কোষ মিলে গোলকের মতো ঘুরতে থাকা দৃষ্টিনন্দন শৈবাল।"
  },
  {
    id: 564,
    bengaliName: "ক্ল্যামাইডোমোনাস",
    scientificName: "Chlamydomonas reinhardtii",
    bengaliPronunciation: "ক্ল্যামাইডোমোনাস রেইনহার্ডটি",
    category: "ছত্রাক ও শৈবাল",
    importance: "দ্বি-ফ্ল্যাজেলাযুক্ত চোখের বিন্দু (Eyespot) বিশিষ্ট এককোষী সবুজ শৈবাল।"
  },
  {
    id: 565,
    bengaliName: "ক্লোরেলা শৈবাল",
    scientificName: "Chlorella vulgaris",
    bengaliPronunciation: "ক্লোরেলা ভালগারিস",
    category: "ছত্রাক ও শৈবাল",
    importance: "উচ্চ প্রোটিন ও অক্সিজেন উৎপাদক স্পেস বায়োলজির মডেল শৈবাল।"
  },
  {
    id: 566,
    bengaliName: "ডায়াটম (সিলিকা শৈবাল)",
    scientificName: "Navicula radiosa",
    bengaliPronunciation: "ন্যাভিকুলা রেডিয়োসা",
    category: "ছত্রাক ও শৈবাল",
    importance: "কাঁচের মতো সিলিকা নির্মিত নৌকাকৃতির সোনালী শৈবাল।"
  },
  {
    id: 567,
    bengaliName: "সারগাসাম (বাদামী শৈবাল)",
    scientificName: "Sargassum fluitans",
    bengaliPronunciation: "সারগাসাম ফ্লুইট্যান্স",
    category: "ছত্রাক ও শৈবাল",
    importance: "আটলান্টিকের সারগাসো সাগর তৈরিকারী ভাসমান সামুদ্রিক শৈবাল।"
  },
  {
    id: 568,
    bengaliName: "ফিউকাস বাদামী শৈবাল",
    scientificName: "Fucus vesiculosus",
    bengaliPronunciation: "ফিউকাস ভেসিকুলোসাস",
    category: "ছত্রাক ও শৈবাল",
    importance: "বাতাসের থলিযুক্ত আয়োডিন ও অ্যালজিন সমৃদ্ধ সামুদ্রিক কেল্প।"
  },
  {
    id: 569,
    bengaliName: "ল্যামিনেরিয়া সামুদ্রিক কেল্প",
    scientificName: "Laminaria digitata",
    bengaliPronunciation: "ল্যামিনেরিয়া ডিজিটাটা",
    category: "ছত্রাক ও শৈবাল",
    importance: "বিশাল আকার ধারণকারী আয়োডিনসমৃদ্ধ সামুদ্রিক কেল্প শৈবাল।"
  },
  {
    id: 570,
    bengaliName: "পলিসাইফোনিয়া (লোহিত শৈবাল)",
    scientificName: "Polysiphonia denudata",
    bengaliPronunciation: "পলিসাইফোনিয়া ডেনুডাটা",
    category: "ছত্রাক ও শৈবাল",
    importance: "ফাইকোইরিথ্রিন রঞ্জকযুক্ত শাখা-প্রশাখাময় লাল শৈবাল।"
  },
  {
    id: 571,
    bengaliName: "জেলিডিয়াম (আগার শৈবাল)",
    scientificName: "Gelidium corneum",
    bengaliPronunciation: "জেলিডিয়াম কর্নিয়াম",
    category: "ছত্রাক ও শৈবাল",
    importance: "মাইক্রোবায়োলজির মিডিয়াম বানানোর আগার-আগার উৎপাদনকারী লাল শৈবাল।"
  },
  {
    id: 572,
    bengaliName: "গ্র্যাসিলারিয়া লোহিত শৈবাল",
    scientificName: "Gracilaria verrucosa",
    bengaliPronunciation: "গ্র্যাসিলাইরিয়া ভেরুকোসা",
    category: "ছত্রাক ও শৈবাল",
    importance: "বাণিজ্যিক আগার ও খাদ্যশিল্পে ব্যবহৃত মূল্যবান সামুদ্রিক শৈবাল।"
  },
  {
    id: 573,
    bengaliName: "নরি শৈবাল (পরফাইরা)",
    scientificName: "Porphyra umbilicalis",
    bengaliPronunciation: "পরফাইরা আম্বিলিক্যালিস",
    category: "ছত্রাক ও শৈবাল",
    importance: "জাপানি সুশি রোলে ব্যবহৃত ভিটামিন ও খনিজসমৃদ্ধ ভোজ্য লাল শৈবাল।"
  },
  {
    id: 574,
    bengaliName: "উলভা (সমুদ্রের লেটুস)",
    scientificName: "Ulva lactuca",
    bengaliPronunciation: "উলভা ল্যাকটুকা",
    category: "ছত্রাক ও শৈবাল",
    importance: "পাতার মতো চ্যাপ্টা সবুজ খাদ্যোপযোগী উপকূলীয় সামুদ্রিক শৈবাল।"
  },
  {
    id: 575,
    bengaliName: "কারা শৈবাল (পাথুরে শৈবাল)",
    scientificName: "Chara zeylanica",
    bengaliPronunciation: "কারা জেইলানিকা",
    category: "ছত্রাক ও শৈবাল",
    importance: "মশা লার্ভা ধ্বংসকারী এবং উদ্ভিদের মতো জটিল প্রজননাঙ্গযুক্ত শৈবাল।"
  }
];

export const SCIENTIFIC_NAME_CATEGORIES = [
  'সকল ক্যাটাগরি',
  'জাতীয় প্রতীক',
  'খাদ্যশস্য ও তৈলবীজ',
  'ফলমূল',
  'শাকসবজি ও কন্দ',
  'মসলা জাতীয় উদ্ভিদ',
  'ঔষধি ও ভেষজ উদ্ভিদ',
  'ফুল ও শোভাবর্ধক',
  'বনজ ও কাষ্ঠল বৃক্ষ',
  'স্তন্যপায়ী প্রাণী',
  'পাখি',
  'মাছ ও জলজ প্রাণী',
  'উভচর ও সরীসৃপ',
  'সন্ধিপদী ও কীটপতঙ্গ',
  'অণুজীব ও ব্যাকটেরিয়া',
  'ছত্রাক ও শৈবাল'
] as const;
