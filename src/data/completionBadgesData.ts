export interface ChapterBadgeMeta {
  id: string; // e.g. "chemistry_ch1"
  subject: 'chemistry' | 'physics' | 'biology';
  chapter: number;
  badgeNameBn: string;
  badgeNameEn: string;
  chapterTitleBn: string;
  iconType: 'flask' | 'atom' | 'flame' | 'sparkles' | 'dna' | 'sun' | 'apple' | 'droplet' | 'zap' | 'waves' | 'book' | 'microscope' | 'heart' | 'eye' | 'activity' | 'leaf' | 'shield';
  descriptionBn: string;
  xpReward: number;
  tier: 'gold' | 'diamond' | 'master';
}

export const CHAPTER_BADGES_DATA: ChapterBadgeMeta[] = [
  // ==========================================
  // CHEMISTRY (রসায়ন) - ১২টি অধ্যায়
  // ==========================================
  {
    id: 'chemistry_ch1',
    subject: 'chemistry',
    chapter: 1,
    badgeNameBn: 'রসায়ন অনুসন্ধানকারী',
    badgeNameEn: 'Chemistry Explorer',
    chapterTitleBn: 'অধ্যায় ১: রসায়নের ধারণা',
    iconType: 'flask',
    descriptionBn: 'রসায়নের ক্ষেত্র, অনুসন্ধান ও ল্যাবরেটরি নিরাপত্তা বিধিমালার সকল স্লাইড সম্পন্ন করার বিশেষ সম্মাননা।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'chemistry_ch2',
    subject: 'chemistry',
    chapter: 2,
    badgeNameBn: 'পদার্থের অবস্থা মাস্টার',
    badgeNameEn: 'States of Matter Master',
    chapterTitleBn: 'অধ্যায় ২: পদার্থের অবস্থা',
    iconType: 'flame',
    descriptionBn: 'কণার গতিতত্ত্ব, ব্যাপন-নিঃসরণ, তাপীয় বক্ররেখা ও উর্ধ্বপাতনের সকল ২০টি টপিক সম্পূর্ণ সমাপ্তির মাস্টার ব্যাজ।',
    xpReward: 500,
    tier: 'master'
  },
  {
    id: 'chemistry_ch3',
    subject: 'chemistry',
    chapter: 3,
    badgeNameBn: 'পরমাণু গঠন চ্যাম্পিয়ন',
    badgeNameEn: 'Atomic Structure Champion',
    chapterTitleBn: 'অধ্যায় ৩: পদার্থের গঠন',
    iconType: 'atom',
    descriptionBn: 'রাদারফোর্ড-বোর মডেল, কোয়ান্টাম শক্তিস্তর ও ইলেকট্রন বিন্যাসের নীতি সফলভাবে সমাপ্ত করার মেডেল।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'chemistry_ch4',
    subject: 'chemistry',
    chapter: 4,
    badgeNameBn: 'পর্যায় সারণি বিশারদ',
    badgeNameEn: 'Periodic Table Virtuoso',
    chapterTitleBn: 'অধ্যায় ৪: পর্যায় সারণি',
    iconType: 'sparkles',
    descriptionBn: '১১৮টি মৌলের অবস্থান, পর্যায়বৃত্ত ধর্ম, আয়নীকরণ শক্তি ও তড়িৎ-ঋণাত্মকতার পূর্ণ দক্ষতা অর্জন।',
    xpReward: 500,
    tier: 'master'
  },
  {
    id: 'chemistry_ch5',
    subject: 'chemistry',
    chapter: 5,
    badgeNameBn: 'রাসায়নিক বন্ধন বিশেষজ্ঞ',
    badgeNameEn: 'Chemical Bond Specialist',
    chapterTitleBn: 'অধ্যায় ৫: রাসায়নিক বন্ধন',
    iconType: 'activity',
    descriptionBn: 'আয়নিক, সমযোজী, ধাতব বন্ধন ও আন্তঃআণবিক আকর্ষণ বলের সার্বিক পাঠ সাফল্যের সাথে সম্পন্ন।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'chemistry_ch6',
    subject: 'chemistry',
    chapter: 6,
    badgeNameBn: 'মোল ও স্টয়কিওমেট্রি জিনিয়াস',
    badgeNameEn: 'Mole & Stoichiometry Wizard',
    chapterTitleBn: 'অধ্যায় ৬: মোলের ধারণা ও রাসায়নিক গণনা',
    iconType: 'flask',
    descriptionBn: 'অ্যাভোগাড্রো সংখ্যা, মোলার আয়তন, লিমিটিং বিক্রিয়ক ও শতকারা সংযুতি গণনার পূর্ণাঙ্গ সমাপ্তি।',
    xpReward: 500,
    tier: 'master'
  },
  {
    id: 'chemistry_ch7',
    subject: 'chemistry',
    chapter: 7,
    badgeNameBn: 'রেডক্স ও বিক্রিয়া মাস্টার',
    badgeNameEn: 'Redox & Reaction Master',
    chapterTitleBn: 'অধ্যায় ৭: রাসায়নিক বিক্রিয়া',
    iconType: 'flame',
    descriptionBn: 'জারণ-বিজারণ, লা-শাতেলিয়ার নীতি, রাসায়নিক সাম্যাবস্থা ও মরিচা প্রতিরোধের সার্বিক পাঠ সমাপ্তি।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'chemistry_ch8',
    subject: 'chemistry',
    chapter: 8,
    badgeNameBn: 'রসায়ন ও শক্তি প্রফেশনাল',
    badgeNameEn: 'Chemical Energy Specialist',
    chapterTitleBn: 'অধ্যায় ৮: রসায়ন ও শক্তি',
    iconType: 'zap',
    descriptionBn: 'বন্ধন শক্তি হিসাব (B = B1 - B2), তড়িৎ রাসায়নিক কোষ ও গ্যালভানিক কোষের সাফল্য ব্যাজ।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'chemistry_ch9',
    subject: 'chemistry',
    chapter: 9,
    badgeNameBn: 'এসিড-ক্ষার সমতা বিশারদ',
    badgeNameEn: 'Acid-Base Equilibrium Scholar',
    chapterTitleBn: 'অধ্যায় ৯: এসিড-ক্ষার সমতা',
    iconType: 'droplet',
    descriptionBn: 'pH স্কেল, প্রসমন টাইট্রেশন ও অম্লবৃষ্টি মেকানিজমের সম্পূর্ণ স্লাইড সমাপ্তির মেডেল।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'chemistry_ch10',
    subject: 'chemistry',
    chapter: 10,
    badgeNameBn: 'ধাতুবিদ্যা ও খনিজ গবেষক',
    badgeNameEn: 'Mineral & Metallurgy Scholar',
    chapterTitleBn: 'অধ্যায় ১০: খনিজ সম্পদ: ধাতু-অধাতু',
    iconType: 'shield',
    descriptionBn: 'ব্লাস্ট ফার্নেসে আয়রন নিষ্কাশন, হল-হেরোল্ট পদ্ধতি ও ধাতু বিশোধনের সফল সমাপ্তি।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'chemistry_ch11',
    subject: 'chemistry',
    chapter: 11,
    badgeNameBn: 'জীবাশ্ম ও পলিমার বিজ্ঞানী',
    badgeNameEn: 'Fossil Fuels & Polymer Scientist',
    chapterTitleBn: 'অধ্যায় ১১: খনিজ সম্পদ: জীবাশ্ম',
    iconType: 'flame',
    descriptionBn: 'হাইড্রোকার্বন শ্রেণিবিভাগ, পলিমারকরণ ও জৈব যৌগের রূপান্তর কৌশলের পূর্ণাঙ্গ দক্ষতা।',
    xpReward: 500,
    tier: 'master'
  },
  {
    id: 'chemistry_ch12',
    subject: 'chemistry',
    chapter: 12,
    badgeNameBn: 'দৈনন্দিন রসায়ন প্র্যাকটিশনার',
    badgeNameEn: 'Everyday Chemistry Expert',
    chapterTitleBn: 'অধ্যায় ১২: আমাদের জীবনে রসায়ন',
    iconType: 'sparkles',
    descriptionBn: 'সাবান, ডিটারজেন্ট, ব্লিচিং পাউডার ও খাদ্য সংরক্ষকের রসায়ন সফলভাবে সম্পন্ন করার ট্রফি।',
    xpReward: 500,
    tier: 'gold'
  },

  // ==========================================
  // PHYSICS (পদার্থবিজ্ঞান) - ৪টি অধ্যায়
  // ==========================================
  {
    id: 'physics_ch4',
    subject: 'physics',
    chapter: 4,
    badgeNameBn: 'কাজ ও শক্তি ডাইনামিক হিরো',
    badgeNameEn: 'Work & Energy Champion',
    chapterTitleBn: 'অধ্যায় ৪: কাজ, ক্ষমতা ও শক্তি',
    iconType: 'zap',
    descriptionBn: 'গতিশক্তি, বিভব শক্তি, শক্তির সংরক্ষণশীলতা নীতি ও কর্মদক্ষতার (η) সকল স্লাইড সমাপ্তি।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'physics_ch5',
    subject: 'physics',
    chapter: 5,
    badgeNameBn: 'চাপ ও আর্কিমিডিস মাস্টার',
    badgeNameEn: 'Pressure & Buoyancy Master',
    chapterTitleBn: 'অধ্যায় ৫: পদার্থের অবস্থা ও চাপ',
    iconType: 'droplet',
    descriptionBn: 'প্লবতা, আর্কিমিডিসের নীতি, প্যাসকেলের সূত্র ও হাইড্রোলিক প্রেসের নিখুঁত দক্ষতা অর্জন।',
    xpReward: 500,
    tier: 'master'
  },
  {
    id: 'physics_ch6',
    subject: 'physics',
    chapter: 6,
    badgeNameBn: 'তাপ ও ক্যালরিমিত্রি স্পেশালিস্ট',
    badgeNameEn: 'Thermal Physics Virtuoso',
    chapterTitleBn: 'অধ্যায় ৬: বস্তুর উপর তাপের প্রভাব',
    iconType: 'flame',
    descriptionBn: 'তাপ প্রসারণ গুণাঙ্ক (α, β, γ), পানির ব্যতিক্রমী প্রসারণ ও ক্যালরিমিতির মূলনীতির সমাপ্তি ব্যাজ।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'physics_ch7',
    subject: 'physics',
    chapter: 7,
    badgeNameBn: 'শব্দ ও তরঙ্গ সায়েন্টিস্ট',
    badgeNameEn: 'Acoustic & Wave Scientist',
    chapterTitleBn: 'অধ্যায় ৭: তরঙ্গ ও শব্দ',
    iconType: 'waves',
    descriptionBn: 'তরঙ্গবেগ v = fλ, প্রতিধ্বনি ও সোনার (SONAR) নীতি সফলভাবে সমাপ্ত করার পুরস্কার।',
    xpReward: 500,
    tier: 'gold'
  },

  // ==========================================
  // BIOLOGY (জীববিজ্ঞান) - ১৪টি অধ্যায়
  // ==========================================
  {
    id: 'biology_ch1',
    subject: 'biology',
    chapter: 1,
    badgeNameBn: 'জীবন পাঠ পথিকৃৎ',
    badgeNameEn: 'Life Science Explorer',
    chapterTitleBn: 'অধ্যায় ১: জীবন পাঠ',
    iconType: 'book',
    descriptionBn: 'জীববিজ্ঞানের শাখাসমূহ, হুইটেকারের ৫ রাজ্য ও দ্বিপদ নামকরণের পূর্ণাঙ্গ পাঠ সমাপ্তি।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'biology_ch2',
    subject: 'biology',
    chapter: 2,
    badgeNameBn: 'কোষ ও টিস্যু অ্যানাটমিস্ট',
    badgeNameEn: 'Cell & Tissue Specialist',
    chapterTitleBn: 'অধ্যায় ২: জীবকোষ ও টিস্যু',
    iconType: 'microscope',
    descriptionBn: 'উদ্ভিদ ও প্রাণিকোষের অঙ্গাণু, সাইটোপ্লাজম ও প্রাণী টিস্যুর ২০টি টপিক সম্পূর্ণ সমাপ্তি।',
    xpReward: 500,
    tier: 'master'
  },
  {
    id: 'biology_ch3',
    subject: 'biology',
    chapter: 3,
    badgeNameBn: 'কোষ বিভাজন স্পেশালিস্ট',
    badgeNameEn: 'Cell Division Virtuoso',
    chapterTitleBn: 'অধ্যায় ৩: কোষ বিভাজন',
    iconType: 'dna',
    descriptionBn: 'মাইটোটিক মেটাকাফেজ, ক্রসিং ওভার ও মায়োসিস বিভাজনের সকল পর্যায়ের বিশদ সমাপ্তি।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'biology_ch4',
    subject: 'biology',
    chapter: 4,
    badgeNameBn: 'বায়োএনার্জি ও সালোকসংশ্লেষণ মাস্টার',
    badgeNameEn: 'Bioenergetics Master',
    chapterTitleBn: 'অধ্যায় ৪: জীবনীশক্তি',
    iconType: 'sun',
    descriptionBn: 'ATP শক্তি মুদ্রা, আলোক বিক্রিয়া, ক্যালভিন চক্র (C3-C4) ও ক্রেবস চক্রের দক্ষতা মেডেল।',
    xpReward: 500,
    tier: 'master'
  },
  {
    id: 'biology_ch5',
    subject: 'biology',
    chapter: 5,
    badgeNameBn: 'খাদ্য ও পুষ্টি বিশেষজ্ঞ',
    badgeNameEn: 'Nutrition & Digestion Scholar',
    chapterTitleBn: 'অধ্যায় ৫: খাদ্য, পুষ্টি এবং পরিপাক',
    iconType: 'apple',
    descriptionBn: 'পরিপাকতন্ত্রের উৎসেচক, BMI মান ও খাদ্য উপাদানের বিপাকীয় প্রক্রিয়ার সমাপ্তি ব্যাজ।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'biology_ch6',
    subject: 'biology',
    chapter: 6,
    badgeNameBn: 'রক্ত ও সংবহন বিশারদ',
    badgeNameEn: 'Circulation & Transport Scholar',
    chapterTitleBn: 'অধ্যায় ৬: জীবে পরিবহন',
    iconType: 'heart',
    descriptionBn: 'হৃদপিণ্ডের গঠন, রক্তচাপ ও উদ্ভিদে প্রস্বেদন প্রক্রিয়ার ২০টি টপিক সফল সমাপ্তি।',
    xpReward: 500,
    tier: 'master'
  },
  {
    id: 'biology_ch7',
    subject: 'biology',
    chapter: 7,
    badgeNameBn: 'শ্বসন ও গ্যাস বিনিময় গবেষক',
    badgeNameEn: 'Respiration & Exchange Scholar',
    chapterTitleBn: 'অধ্যায় ৭: গ্যাসীয় বিনিময়',
    iconType: 'activity',
    descriptionBn: 'অ্যালভিওলাই ও রক্তের মধ্যে O2-CO2 আদান-প্রদান এবং ফুসফুসীয় কার্যপ্রণালীর মেডেল।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'biology_ch8',
    subject: 'biology',
    chapter: 8,
    badgeNameBn: 'রেচনতন্ত্র ও কিডনি বিশেষজ্ঞ',
    badgeNameEn: 'Renal & Excretion Specialist',
    chapterTitleBn: 'অধ্যায় ৮: রেচন প্রক্রিয়া',
    iconType: 'droplet',
    descriptionBn: 'নেফ্রনের কার্যপ্রণালী, মূত্র তৈরি, ডায়ালাইসিস ও বৃক্ক প্রতিস্থাপনের সম্পূর্ণ পাঠ সমাপ্তি।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'biology_ch9',
    subject: 'biology',
    chapter: 9,
    badgeNameBn: 'কঙ্কাল ও চলন মেকানিক',
    badgeNameEn: 'Skeletal & Locomotion Master',
    chapterTitleBn: 'অধ্যায় ৯: দৃঢ়তা প্রদান ও চলন',
    iconType: 'shield',
    descriptionBn: 'অস্থি, তরুণাস্থি, সাইনোভিয়াল অস্থিসন্ধি ও পেশি সংকোচনের নিখুঁত শিক্ষা সমাপ্তি।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'biology_ch10',
    subject: 'biology',
    chapter: 10,
    badgeNameBn: 'স্নায়ু ও হরমোন সমন্বয়বিদ',
    badgeNameEn: 'Neurology & Coordination Master',
    chapterTitleBn: 'অধ্যায় ১০: সমন্বয়',
    iconType: 'zap',
    descriptionBn: 'নিউরন, প্রতিবর্ত ক্রিয়া (Reflex Arc), মস্তিষ্ক ও অন্তঃখরা গ্রন্থির হরমোন পাঠ সমাপ্তি।',
    xpReward: 500,
    tier: 'master'
  },
  {
    id: 'biology_ch11',
    subject: 'biology',
    chapter: 11,
    badgeNameBn: 'উদ্ভিদ ও প্রাণী প্রজনন বিজ্ঞানী',
    badgeNameEn: 'Reproduction Biologist',
    chapterTitleBn: 'অধ্যায় ১১: জীবের প্রজনন',
    iconType: 'leaf',
    descriptionBn: 'পরাগায়ন, নিষেক, ডিম্বক ও ভ্রূণ বিকাশ প্রক্রিয়ার ২০টি স্লাইড সম্পূর্ণ সমাপ্তি।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'biology_ch12',
    subject: 'biology',
    chapter: 12,
    badgeNameBn: 'বংশগতি ও ডিএনএ জিনিয়াস',
    badgeNameEn: 'Genetics & DNA Virtuoso',
    chapterTitleBn: 'অধ্যায় ১২: জীবের বংশগতি ও বিবর্তন',
    iconType: 'dna',
    descriptionBn: 'মেন্ডেলের সূত্র, ডিএনএ দ্বি-সূত্রক গঠন ও জেনেটিক ডিসঅর্ডার সফলভাবে সম্পন্ন করার ট্রফি।',
    xpReward: 500,
    tier: 'master'
  },
  {
    id: 'biology_ch13',
    subject: 'biology',
    chapter: 13,
    badgeNameBn: 'বাস্তুসংস্থান ও পরিবেশ রক্ষক',
    badgeNameEn: 'Ecology & Biosphere Guardian',
    chapterTitleBn: 'অধ্যায় ১৩: জীবের পরিবেশ',
    iconType: 'leaf',
    descriptionBn: 'খাদ্য শৃঙ্খল, পুষ্টি প্রবাহ, শক্তি পিরামিড ও জীববৈচিত্র্য সংরক্ষণের মেডেল।',
    xpReward: 500,
    tier: 'gold'
  },
  {
    id: 'biology_ch14',
    subject: 'biology',
    chapter: 14,
    badgeNameBn: 'জীবপ্রযুক্তি ও জিন প্রকৌশলী',
    badgeNameEn: 'Biotechnology Innovator',
    chapterTitleBn: 'অধ্যায় ১৪: জীবপ্রযুক্তি',
    iconType: 'microscope',
    descriptionBn: 'টিস্যু কালচার, রিকম্বিনেন্ট ডিএনএ প্রযুক্তি ও জিএমও ফসলের সকল স্লাইড সমাপ্তির সর্বোচ্চ সম্মাননা।',
    xpReward: 500,
    tier: 'master'
  }
];
