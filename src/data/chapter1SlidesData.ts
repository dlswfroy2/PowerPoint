import { Slide } from '../types/presentation';

export const chapter1Slides: Slide[] = [
  {
    id: 1,
    chapter: 1,
    title: 'অধ্যায় ১: রসায়নের ধারণা',
    subtitle: 'Concepts of Chemistry — বিজ্ঞানের কেন্দ্রীয় স্তম্ভ, পরিধি ও জীবনাচরণ',
    category: 'সূচনা ও প্রেক্ষাপট',
    gallery: [
      {
        id: 'c1_s1_img1',
        url: '/src/assets/images/chemistry_daily_life_1790755220069.jpg',
        titleBn: 'রসায়নের বহুমাত্রিক জগত',
        titleEn: 'Multidimensional World of Chemistry',
        captionBn: 'দৈনন্দিন জীবন, ঔষধবিজ্ঞান, কৃষি ও নবায়নযোগ্য শক্তিতে রাসায়নিক পদার্থের কেন্দ্রীয় ভূমিকা',
        captionEn: 'Central role of chemical substances across daily life, pharmaceuticals, and agriculture',
        type: 'photo'
      },
      {
        id: 'c1_s1_img2',
        titleBn: 'বিজ্ঞানের কেন্দ্রীয় শাখা রসায়ন',
        titleEn: 'Chemistry as Central Science',
        captionBn: 'পদার্থবিজ্ঞান, জীববিজ্ঞান, ভূতত্ত্ব ও পরিবেশ বিজ্ঞানের সাথে রসায়নের আন্তঃসম্পর্কের রূপরেখা',
        captionEn: 'Schematic interconnecting chemistry with physics, biology, geology, and medicine',
        type: 'diagram',
        customDiagramType: 'scientificMethod'
      },
      {
        id: 'c1_s1_img3',
        url: '/src/assets/images/lab_safety_hazards_1790755190613.jpg',
        titleBn: 'আধুনিক রসায়নাগার ও গবেষণা',
        titleEn: 'Modern Chemistry Research Lab',
        captionBn: 'আধুনিক গবেষণাগারে রাসায়নিক পদার্থের বিশ্লেষণ, সংশ্লেষণ ও সুরক্ষা সরঞ্জামের সমাবেশ',
        captionEn: 'Synthesis, analytical instruments, and safety gear in modern chemical laboratory',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'পদার্থের রূপান্তর',
        labelEn: 'Transformation of Matter',
        symbol: 'Matter Δ',
        detailBn: 'পদার্থের গঠন, ধর্ম এবং পদার্থের বিভিন্ন পরিবর্তনের বৈজ্ঞানিক আলোচনা',
        detailEn: 'Scientific study of composition, properties, and transformative reactions of matter',
        badgeType: 'safety',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'কেন্দ্রীয় বিজ্ঞান',
        labelEn: 'Central Science',
        symbol: 'Core',
        detailBn: 'পদার্থের পরমাণু ও অণু স্তরের বোঝাপড়া জীব ও জড় জগতের সেতুবন্ধন রচনা করে',
        detailEn: 'Molecular understanding linking physical sciences with life and environmental processes',
        badgeType: 'quantum',
        position: { x: 70, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'রসায়ন কী? (What is Chemistry?)',
        description: 'বিজ্ঞানের যে শাখায় পদার্থের গঠন, পদার্থের ধর্ম এবং পদার্থের রাসায়নিক পরিবর্তন বা রূপান্তর নিয়ে বিস্তারিত আলোচনা ও গবেষণা করা হয়, তাকে রসায়ন (Chemistry) বলে।',
        highlight: 'গঠন, ধর্ম ও পরিবর্তন'
      },
      {
        heading: 'রসায়নের পরিধি (Scope of Chemistry)',
        description: 'বায়ুমণ্ডলের গ্যাসীয় উপাদান, পানের পানি, খাদ্য পরিপাক, কৃষি সার ও কীটনাশক, জীবনরক্ষাকারী ওষুধ থেকে শুরু করে আধুনিক ইলেকট্রনিক চিপ—সবকিছুতেই রসায়নের রাজত্ব।',
        highlight: 'জীবনের প্রতিটি ক্ষেত্রে পরিব্যাপ্ত'
      },
      {
        heading: 'পদার্থের চিরন্তন রূপান্তর',
        description: 'প্রকৃতিতে কোনো পদার্থ ধ্বংস বা সৃষ্টি হয় না, কেবল এক রূপ থেকে অন্য রূপে রূপান্তরিত হয়। যেমন: সালোকসংশ্লেষণে সৌরশক্তি ও রাসায়নিক বিক্রিয়ায় গ্লুকোজ তৈরি হয়।',
        formula: '6CO_2 + 6H_2O \\xrightarrow{\\text{আলো/ক্লোরোফিল}} C_6H_{12}O_6 + 6O_2'
      }
    ],
    callout: {
      type: 'info',
      title: 'রসায়নের মূলমন্ত্র',
      content: 'রসায়ন হলো পরমাণু এবং অণুর রূপান্তরের বিজ্ঞান। জড় ও জীবের ক্ষুদ্রতম গাঠনিক স্তরে যা কিছু ঘটে, তার মূল কারণ রাসায়নিক বন্ধন ও ইলেকট্রন বিনিময়।'
    },
    speakerNotes: 'শিক্ষার্থীদের উদ্বুদ্ধ করুন: আমরা যা খাই, যা পরিধান করি, নিঃশ্বাসে যা গ্রহণ করি—সবকিছুই রাসায়নিক অণু। রসায়ন কোনো দূরবর্তী বিষয় নয়, বরং আমাদের জীবনের অবিচ্ছেদ্য অংশ।',
    recommendedInteractiveTab: 'safety'
  },
  {
    id: 2,
    chapter: 1,
    title: 'রসায়নের ইতিহাস ও প্রাচীন আলকেমি',
    subtitle: 'History of Chemistry — From Ancient Metallurgy & Alchemy to Modern Science',
    category: 'ঐতিহাসিক বিবর্তন',
    gallery: [
      {
        id: 'c1_s2_img1',
        url: '/src/assets/images/ancient_alchemy_lab_1790755208632.jpg',
        titleBn: 'প্রাচীন আলকেমি ও পাতন যন্ত্র',
        titleEn: 'Ancient Alchemy & Alembic Distillation',
        captionBn: 'জাবির ইবনে হাইয়ানের আলকেমি গবেষণাগার, প্রাচীন পাতন যন্ত্র (Alembic) ও রাসায়নিক পান্ডুলিপি',
        captionEn: 'Historical alchemy laboratory with distillation retorts, crucibles, and early chemical apparatus',
        type: 'photo'
      },
      {
        id: 'c1_s2_img2',
        titleBn: 'রসায়ন বিজ্ঞানীদের ঐতিহাসিক কালরেখা',
        titleEn: 'Chronological Timeline of Chemists',
        captionBn: 'জাবির ইবনে হাইয়ান, রবার্ট বয়েল, অ্যান্থনি ল্যাভয়সিয়ে এবং জন ডাল্টনের মৌলিক অবদানের রূপরেখা',
        captionEn: 'Pioneering milestones from Jabir ibn Hayyan and Boyle to Lavoisier and Dalton',
        type: 'diagram',
        customDiagramType: 'periodicMini'
      },
      {
        id: 'c1_s2_img3',
        url: '/src/assets/images/chemistry_daily_life_1790755220069.jpg',
        titleBn: 'প্রাচীন ধাতু নিষ্কাশন ও স্থাপত্য',
        titleEn: 'Ancient Metallurgy & Chemical Crafts',
        captionBn: 'তামা, সোনা, ব্রোঞ্জ ও লোহার প্রাচীন গলন প্রযুক্তি এবং প্রাকৃতিক ভেষজ রঞ্জক নিষ্কাশন',
        captionEn: 'Ancient extraction of copper, gold, bronze, and extraction of natural plant dyes',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'জাবির ইবনে হাইয়ান',
        labelEn: 'Jabir ibn Hayyan (Father of Chemistry)',
        symbol: 'Geber (721–815 AD)',
        detailBn: 'রসায়নের আদি জনক; পাতন, ঊর্ধ্বপাতন, দ্রবণ ও ক্রিস্টালাইজেশনের প্রবর্তক',
        detailEn: 'Pioneered laboratory experimentation, distillation, and preparation of mineral acids',
        badgeType: 'safety',
        position: { x: 30, y: 45 }
      },
      {
        labelBn: 'অ্যান্টনি ল্যাভয়সিয়ে',
        labelEn: 'Antoine Lavoisier (Modern Chemistry)',
        symbol: 'Lavoisier (1743–1794)',
        detailBn: 'আধুনিক রসায়নের জনক; ভরের নিত্যতা সূত্র ও দহন বিক্রিয়ায় অক্সিজেনের ভূমিকা আবিষ্কার',
        detailEn: 'Father of modern chemistry; established law of conservation of mass and oxygen theory of combustion',
        badgeType: 'quantum',
        position: { x: 75, y: 55 }
      }
    ],
    keyPoints: [
      {
        heading: 'আলকেমি (Alchemy) কী?',
        description: 'মধ্যযুগীয় মুসলিম বিজ্ঞানী ও দার্শনিকদের দ্বারা অনুশীলিত আদি রসায়ন চর্চাকে "আলকেমি" এবং গবেষকদের "আলকেমিস্ট" বলা হতো। আরবি শব্দ "আল-কিমিয়া" থেকেই আধুনিক "Chemistry" শব্দের উৎপত্তি।',
        highlight: 'আল-কিমিয়া ➯ কেমিস্ট্রি'
      },
      {
        heading: 'জাবির ইবনে হাইয়ানের অবদান',
        description: 'তিনিই প্রথম রসায়নাগারে কাচপাত্র, পাতন যন্ত্র (আলেমবিক), বিকার ও চুল্লি ব্যবহার করে পরীক্ষা-নিরীক্ষা ভিত্তিক রসায়নের সূচনা করেন। তিনি হাইড্রোক্লোরিক এসিড ও নাইট্রিক এসিড তৈরি করেন।',
        highlight: 'রসায়নের আদি জনক'
      },
      {
        heading: 'আধুনিক রসায়নের ভিত্তিপ্রস্তর',
        description: 'রবার্ট বয়েল (Robert Boyle) প্রথম পদার্থের আধুনিক মৌলিক সংজ্ঞা দেন। অ্যান্টনি ল্যাভয়সিয়ে (Antoine Lavoisier) ভরের সংরক্ষণ সূত্র প্রতিষ্ঠা করে রসায়নকে পূর্ণাঙ্গ বিজ্ঞান হিসেবে প্রতিষ্ঠিত করেন।',
        formula: '\\sum \\text{বিক্রিয়কের ভর} = \\sum \\text{উৎপাদের ভর} \\quad [\\text{ল্যাভয়সিয়ের ভরের নিত্যতা}]'
      }
    ],
    callout: {
      type: 'tip',
      title: 'পরশ পাথরের মিথ (Philosopher’s Stone)',
      content: 'প্রাচীন আলকেমিস্টদের একটি বৃথা স্বপ্ন ছিল এমন এক স্পর্শমণি বা "পরশ পাথর" তৈরি করা যা সাধারণ লোহা বা তামাকে সোনায় রূপান্তরিত করবে এবং মানুষকে অমর করবে। যদিও তা সম্ভব হয়নি, তবে সেই প্রচেষ্টায় অনেক গুরুত্বপূর্ণ ল্যাব পদ্ধতি আবিষ্কৃত হয়।'
    },
    speakerNotes: 'শিক্ষার্থীদের বলুন যে রসায়নের ইতিহাস কেবল বিজ্ঞান নয়, মানব সভ্যতার ধাতুবিদ্যা, ঔষধ ও শিল্প বিপ্লবের এক গৌরবোজ্জ্বল রোমাঞ্চকর ইতিহাস।',
    recommendedInteractiveTab: 'safety'
  },
  {
    id: 3,
    chapter: 1,
    title: 'আমাদের দৈনন্দিন জীবনে রসায়ন',
    subtitle: 'Chemistry in Everyday Life — Food, Health, Agriculture and Sanitation',
    category: 'বাস্তব প্রয়োগ',
    gallery: [
      {
        id: 'c1_s3_img1',
        url: '/src/assets/images/chemistry_daily_life_1790755220069.jpg',
        titleBn: 'দৈনন্দিন পণ্যে রাসায়নিক যৌগ',
        titleEn: 'Chemical Compounds in Consumer Products',
        captionBn: 'খাবার লবণ (NaCl), খাবার সোডা (NaHCO₃), সাবান ও অ্যান্টিসেপটিকের নিয়মিত রাসায়নিক ব্যবহার',
        captionEn: 'Table salt, baking soda, detergents, and antiseptic pharmaceuticals in daily domestic life',
        type: 'photo'
      },
      {
        id: 'c1_s3_img2',
        titleBn: 'জীবন ও জীবিকায় রাসায়নিক বিক্রিয়া',
        titleEn: 'Chemical Reactions in Life & Living',
        captionBn: 'পরিপাক, শ্বসন, সাবানের ময়লা পরিষ্কারের ইমালসিফিকেশন ও উদ্ভিদের সালোকসংশ্লেষণ',
        captionEn: 'Digestion, respiration, saponification cleansing, and photosynthetic carbon fixation',
        type: 'diagram',
        customDiagramType: 'scientificMethod'
      },
      {
        id: 'c1_s3_img3',
        url: '/src/assets/images/lab_safety_hazards_1790755190613.jpg',
        titleBn: 'কৃষি ও খাদ্য সংরক্ষণে রসায়ন',
        titleEn: 'Chemistry in Agriculture & Preservation',
        captionBn: 'ইউরিয়া সার [CO(NH₂)₂], টিএসপি, ফসফেট এবং অনুমোদিত খাদ্য প্রিজারভেটিভের ভূমিকা',
        captionEn: 'Urea fertilizer, triple superphosphate, and food preservation against microbial decay',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'খাবার লবণ (NaCl)',
        labelEn: 'Table Salt (Sodium Chloride)',
        symbol: 'NaCl',
        detailBn: 'শরীরের ইলেক্ট্রোলাইট ভারসাম্য ও খাবারের স্বাদ নিয়ন্ত্রণে অপরিহার্য আয়নিক যৌগ',
        detailEn: 'Essential ionic compound maintaining osmotic and electrolyte balance in human physiology',
        badgeType: 'quantum',
        position: { x: 25, y: 60 }
      },
      {
        labelBn: 'সাবান ও ডিটারজেন্ট',
        labelEn: 'Soap & Surfactants',
        symbol: 'R-COONa',
        detailBn: 'উচ্চ আণবিক ভরের ফ্যাটি এসিডের সোডিয়াম লবণ; তেল ও ময়লাকে পানিতে দ্রবীভূত করে পরিষ্কার করে',
        detailEn: 'Sodium salts of fatty acids acting as amphipathic surfactants to wash hydrophobic grease',
        badgeType: 'safety',
        position: { x: 75, y: 55 }
      }
    ],
    keyPoints: [
      {
        heading: 'খাদ্য ও পরিপাকে রসায়ন',
        description: 'আমরা যা খাই (শ্বেতসার, আমিষ, চর্বি) তা পাকস্থলীতে হাইড্রোক্লোরিক এসিড (HCl) ও এনজাইমের উপস্থিতিতে ক্ষুদ্র অণুতে বিশ্লিষ্ট হয়ে কোষে গ্লুকোজ ও শক্তিতে রূপান্তরিত হয়।',
        formula: 'C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{শক্তি (ATP)}'
      },
      {
        heading: 'পরিষ্কারক সামগ্রীতে রসায়ন',
        description: 'সাবান [C₁₇H₃₅COONa] ও ডিটারজেন্টের অণুতে হাইড্রোফিলিক (পানিগ্রাহী) ও হাইড্রোফোবিক (পানিবিদ্বেষী) প্রান্ত থাকে, যা ময়লাকে ট্র্যাপ করে ফেনার সাহায্যে ভাসিয়ে নেয়।',
        highlight: 'হাইড্রোফিলিক ও হাইড্রোফোবিক প্রান্ত'
      },
      {
        heading: 'কৃষিক্ষেত্রে রসায়ন',
        description: 'মাটির পুষ্টি ও ফলন বৃদ্ধিতে ইউরিয়া [CO(NH₂)₂], অ্যামোনিয়াম সালফেট [(NH₄)₂SO₄] এবং ফসফেট সার ব্যবহৃত হয়। কীটনাশক ফসলের পোকা ধ্বংস করে খাদ্য নিরাপত্তা নিশ্চিত করে।',
        highlight: 'ইউরিয়া সার: নাইট্রোজেনের উৎস'
      }
    ],
    tableData: {
      headers: ['দৈনন্দিন বস্তু', 'প্রধান রাসায়নিক উপাদান', 'রাসায়নিক সংকেত'],
      rows: [
        ['খাবার লবণ', 'সোডিয়াম ক্লোরাইড', 'NaCl'],
        ['বেকিং সোডা', 'সোডিয়াম হাইড্রোজেন কার্বনেট', 'NaHCO₃'],
        ['ভিনেগার / সিরকা', 'অ্যাসিটিক এসিডের ৪-১০% জলীয় দ্রবণ', 'CH₃COOH (aq)'],
        ['ব্লিচিং পাউডার', 'ক্যালসিয়াম ক্লোরোহাইপোক্লোরাইট', 'Ca(OCl)Cl'],
        ['ইউরিয়া সার', 'কার্বামাইড', 'CO(NH₂)₂'],
        ['টুথপেস্ট', 'ক্যালসিয়াম কার্বনেট ও ফ্লোরাইড লবণ', 'CaCO₃ / NaF']
      ],
      caption: 'আমাদের গৃহস্থালিতে ব্যবহৃত নিত্যদিনের পরিচিত রাসায়নিক যৌগের তালিকা'
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন: খাবার সোডা ও লেবুর রস বা ভিনেগার মেশালে বুদবুদ আকারে কার্বন ডাই-অক্সাইড গ্যাস বের হয়—এটি ঘরে বসেই দেখার মতো চমৎকার রাসায়নিক বিক্রিয়া।',
    recommendedInteractiveTab: 'safety'
  },
  {
    id: 4,
    chapter: 1,
    title: 'বিজ্ঞানের অন্যান্য শাখার সাথে রসায়নের সম্পর্ক',
    subtitle: 'Relationship of Chemistry with Physics, Biology, Geology & Environmental Science',
    category: 'আন্তঃশৃঙ্খলা বিজ্ঞান',
    gallery: [
      {
        id: 'c1_s4_img1',
        titleBn: 'আন্তঃশৃঙ্খলা বিজ্ঞানের সংযোগ সেতু',
        titleEn: 'Interdisciplinary Scientific Matrix',
        captionBn: 'পদার্থবিজ্ঞান, জীববিজ্ঞান, ভূতত্ত্ব, ওষুধবিজ্ঞান ও গণিতের সাথে রসায়নের সংযোগরেখা',
        captionEn: 'Central interconnectivity matrix linking physics, genetics, geology, and medicine',
        type: 'diagram',
        customDiagramType: 'scientificMethod'
      },
      {
        id: 'c1_s4_img2',
        url: '/src/assets/images/chemistry_daily_life_1790755220069.jpg',
        titleBn: 'জৈব রসায়ন ও আণবিক জীববিজ্ঞান',
        titleEn: 'Biochemistry & Molecular Biology',
        captionBn: 'ডিএনএ (DNA), প্রোটিন ও এনজাইমের রাসায়নিক বন্ধন ও জেনেটিক কোডের আণবিক ক্রিয়া',
        captionEn: 'Hydrogen bonding in DNA double helix, protein folding, and biochemical metabolism',
        type: 'photo'
      },
      {
        id: 'c1_s4_img3',
        url: '/src/assets/images/lab_safety_hazards_1790755190613.jpg',
        titleBn: 'ভৌত রসায়ন ও পারমাণবিক শক্তি',
        titleEn: 'Physical Chemistry & Quantum Energy',
        captionBn: 'পদার্থের তাপগতিবিদ্যা, কোয়ান্টাম বলবিদ্যা ও ব্যাটারির তড়িৎ-রাসায়নিক শক্তি রূপান্তর',
        captionEn: 'Thermodynamics, quantum mechanics, and electrochemical energy storage in batteries',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'বায়োকেমিস্ট্রি (প্রাণরসায়ন)',
        labelEn: 'Biochemistry Connection',
        symbol: 'Bio + Chem',
        detailBn: 'জীবদেহের শ্বাস-প্রশ্বাস, রক্তের হিমোগ্লোবিনে অক্সিজেন পরিবহন ও বিপাকের রসায়ন',
        detailEn: 'Chemical pathways governing respiration, enzyme catalysis, and genetic replication',
        badgeType: 'safety',
        position: { x: 30, y: 40 }
      },
      {
        labelBn: 'ভৌত রসায়ন (Physical Chem)',
        labelEn: 'Physical Chemistry',
        symbol: 'Phys + Chem',
        detailBn: 'চৌম্বকত্ব, তাপগতিবিদ্যা, পারমাণবিক গঠন ও তেজস্ক্রিয়তার ভৌত সূত্রাবলী',
        detailEn: 'Physical principles governing reaction rates, quantum shells, and thermodynamics',
        badgeType: 'quantum',
        position: { x: 75, y: 55 }
      }
    ],
    keyPoints: [
      {
        heading: 'পদার্থবিজ্ঞানের সাথে সম্পর্ক (Physical Chemistry)',
        description: 'পরমাণুর ইলেকট্রন কাঠামো, বর্ণালী বিশ্লেষণ, তাপগতিবিদ্যা এবং ব্যাটারির তড়িৎ-রাসায়নিক শক্তি—পদার্থবিজ্ঞান ও রসায়নের যৌথ ফসল।',
        highlight: 'তড়িৎ-রসায়ন ও কোয়ান্টাম পরমাণু'
      },
      {
        heading: 'জীববিজ্ঞানের সাথে সম্পর্ক (Biochemistry)',
        description: 'উদ্ভিদের সালোকসংশ্লেষণ, প্রাণীদেহের পরিপাক ও শ্বসন, ডিএনএ-এর ডাবল হেলিক্স গঠন এবং রক্তের বাফার ক্ষমতা—সবই বিশুদ্ধ রাসায়নিক ক্রিয়াকলাপ।',
        highlight: 'প্রাণরসায়ন ও জেনেটিক্স'
      },
      {
        heading: 'ভূতত্ত্ব ও পরিবেশ বিজ্ঞানের সাথে সম্পর্ক',
        description: 'ভূগর্ভস্থ খনিজ আকরিক (লোহা, সোনা, পেট্রোলিয়াম), শিলার আবহবিকার, অ্যাসিড বৃষ্টি ও ওজোন স্তরের ক্ষয় বিশ্লেষণ সম্পূর্ণভাবে রাসায়নিক তথ্যের ওপর নির্ভরশীল।',
        formula: 'SO_3 + H_2O \\rightarrow H_2SO_4 \\quad [\\text{অ্যাসিড বৃষ্টির উৎপত্তি}]'
      }
    ],
    callout: {
      type: 'info',
      title: 'কেন রসায়নকে "বিজ্ঞানের কেন্দ্রবিন্দু" বলা হয়?',
      content: 'পদার্থবিজ্ঞানের মৌলিক বলসমূহ রসায়নের পরমাণুর মধ্যে বন্ধন তৈরি করে; আবার সেই রাসায়নিক অণুগুলোই জীববিজ্ঞানের জীবন্ত কোষ ও প্রাণের ভিত্তি গড়ে তোলে। এজন্য রসায়নকে বলা হয় বিজ্ঞানের কেন্দ্রীয় মিলনস্থল (The Central Science)।'
    },
    speakerNotes: 'শিক্ষার্থীদের দেখান যে বিজ্ঞানের কোনো শাখাই বিচ্ছিন্ন নয়; রসায়নের গভীর জ্ঞান পদার্থবিজ্ঞান ও জীববিজ্ঞানের যেকোনো জটিল সমস্যার নিখুঁত সমাধান দিতে পারে।',
    recommendedInteractiveTab: 'safety'
  },
  {
    id: 5,
    chapter: 1,
    title: 'রসায়নে অনুসন্ধান ও বৈজ্ঞানিক গবেষণা প্রক্রিয়া',
    subtitle: 'Scientific Method & Inquiry Process in Chemistry — From Problem to Conclusion',
    category: 'গবেষণা পদ্ধতি',
    gallery: [
      {
        id: 'c1_s5_img1',
        titleBn: 'বৈজ্ঞানিক অনুসন্ধানের ৬টি ধারাবাহিক ধাপ',
        titleEn: '6 Sequential Steps of Scientific Inquiry',
        captionBn: 'বিষয় নির্ধারণ ➔ তথ্য সংগ্রহ ➔ পরীক্ষণ পরিকল্পনা ➔ উপাত্ত সংগ্রহ ➔ ফলাফল বিশ্লেষণ ➔ সিদ্ধান্ত',
        captionEn: 'Problem identification, literature review, experiment planning, data collection, and conclusion',
        type: 'diagram',
        customDiagramType: 'scientificMethod'
      },
      {
        id: 'c1_s5_img2',
        url: '/src/assets/images/lab_safety_hazards_1790755190613.jpg',
        titleBn: 'নিয়ন্ত্রিত পরীক্ষাগার গবেষণা',
        titleEn: 'Controlled Laboratory Experimentation',
        captionBn: 'একটি চলক স্থির রেখে অন্য চলকের পরিবর্তন পর্যবেক্ষণ করার বৈজ্ঞানিক পদ্ধতি',
        captionEn: 'Controlled variable testing isolating dependent vs independent parameters',
        type: 'photo'
      },
      {
        id: 'c1_s5_img3',
        url: '/src/assets/images/ancient_alchemy_lab_1790755208632.jpg',
        titleBn: 'উপাত্ত নথিভুক্তকরণ ও পরীক্ষণ খাতা',
        titleEn: 'Data Logging & Research Notebook',
        captionBn: 'সততা ও নিষ্ঠার সাথে প্রতিটি পরীক্ষার পাঠ ও পর্যবেক্ষণ খাতায় লিপিবদ্ধ করার গুরুত্ব',
        captionEn: 'Meticulous data recording, quantitative measurements, and reproducibility',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'বিষয় বা সমস্যা নির্ধারণ',
        labelEn: 'Problem Identification',
        symbol: 'Step 1',
        detailBn: 'সুনির্দিষ্ট প্রশ্ন নির্ধারণ করা: যেমন "লোহায় মরিচা পড়ার জন্য কী কী উপাদান প্রয়োজন?"',
        detailEn: 'Formulating clear hypothesis: e.g., "What factors cause iron to corrode into rust?"',
        badgeType: 'safety',
        position: { x: 25, y: 35 }
      },
      {
        labelBn: 'নিয়ন্ত্রিত পরীক্ষণ ও উপাত্ত',
        labelEn: 'Controlled Testing & Data',
        symbol: 'Step 4',
        detailBn: 'নিয়ন্ত্রিত শর্তে পরীক্ষা সম্পাদন এবং নির্ভরযোগ্য সংখ্যাসূচক উপাত্ত সংগ্রহ',
        detailEn: 'Performing controlled trials, recording measurements and observable shifts',
        badgeType: 'quantum',
        position: { x: 75, y: 65 }
      }
    ],
    keyPoints: [
      {
        heading: '১. বিষয়বস্তু নির্ধারণ (Topic Selection)',
        description: 'গবেষণার শুরুতে কী বিষয়ে অনুসন্ধান করা হবে তা সুনির্দিষ্টভাবে চিহ্নিত করা হয়।',
        highlight: 'সুনির্দিষ্ট লক্ষ্য'
      },
      {
        heading: '২. বই বা পূর্বের গবেষণার তথ্য সংগ্রহ (Literature Review)',
        description: 'ঐ বিষয়ে পূর্বে অন্যান্য বিজ্ঞানীরা কী কাজ করেছেন এবং কী তথ্য লিপিবদ্ধ আছে তা অধ্যয়ন করা।',
        highlight: 'তথ্য ও ধারণা সংগ্রহ'
      },
      {
        heading: '৩. পরীক্ষণের পরিকল্পনা ও কার্যপদ্ধতি (Experimental Design)',
        description: 'কী কী উপকরণ লাগবে, কী সতর্কতা অবলম্বন করতে হবে এবং কীভাবে পরীক্ষাটি চালানো হবে তার ব্লু-প্রিন্ট তৈরি।',
        highlight: 'পরিকল্পনা প্রণয়ন'
      },
      {
        heading: '৪. পরীক্ষণ ও উপাত্ত সংগ্রহ (Experiment & Data Gathering)',
        description: 'সাবধানতার সাথে পরীক্ষা পরিচালনা করা এবং প্রাপ্ত ফলাফল ও পাঠ খাতায় লিপিবদ্ধ করা।',
        highlight: 'সততার সাথে উপাত্ত লিপিবদ্ধ'
      },
      {
        heading: '৫. তথ্য বিশ্লেষণ ও সিদ্ধান্ত গ্রহণ (Analysis & Conclusion)',
        description: 'সংগৃহীত উপাত্ত যাচাই করে মূল প্রশ্নের উত্তর পাওয়া গেল কি না তা নিশ্চিত করা এবং চূড়ান্ত বৈজ্ঞানিক সিদ্ধান্তে পৌঁছানো।',
        formula: '\\text{সমস্যা} \\rightarrow \\text{তথ্য} \\rightarrow \\text{পরীক্ষা} \\rightarrow \\text{উপাত্ত} \\rightarrow \\text{সিদ্ধান্ত}'
      }
    ],
    callout: {
      type: 'tip',
      title: 'নিয়ন্ত্রিত পরীক্ষা (Controlled Experiment) কী?',
      content: 'যখন পরীক্ষার সময় অন্য সকল শর্ত অপরিবর্তিত রেখে কেবল একটি নির্দিষ্ট চলক পরিবর্তন করে ফলাফল দেখা হয়, তাকে নিয়ন্ত্রিত পরীক্ষা বলে। যেমন মরিচা পরীক্ষায় বাতাস ও পানি উভয়কে আলাদা আলাদা টেস্টটিউবে নিয়ন্ত্রণ করা হয়।'
    },
    speakerNotes: 'শিক্ষার্থীদের ল্যাবরেটরি খাতা লেখার নিয়ম শেখান: কোনো উপাত্ত মনগড়াভাবে লেখা যাবে না; পরীক্ষা যা নির্দেশ করে হুবহু তা-ই লিপিবদ্ধ করতে হবে।',
    recommendedInteractiveTab: 'safety'
  },
  {
    id: 6,
    chapter: 1,
    title: 'গবেষণার বাস্তব উদাহরণ — লোহার মরিচা পড়ার পরীক্ষণ',
    subtitle: 'Case Study of Inquiry — The Factors Required for Iron Rusting (Fe₂O₃·nH₂O)',
    category: 'গবেষণা কেইস স্টাডি',
    gallery: [
      {
        id: 'c1_s6_img1',
        titleBn: 'লোহার মরিচা পরীক্ষার ৩টি টেস্টটিউব',
        titleEn: 'Three Test Tubes Rusting Experiment',
        captionBn: 'টিউব ১: পানি + বাতাস (মরিচা পড়ে); টিউব ২: কেবল সেদ্ধ পানি + তেল স্তর (মরিচা পড়ে না); টিউব ৩: কেবল শুষ্ক বাতাস ও শুষ্ক CaCl₂ (মরিচা পড়ে না)',
        captionEn: 'Tube 1: water + air (rusts); Tube 2: boiled water + oil layer (no rust); Tube 3: dry air + CaCl₂ (no rust)',
        type: 'diagram',
        customDiagramType: 'scientificMethod'
      },
      {
        id: 'c1_s6_img2',
        url: '/src/assets/images/lab_safety_hazards_1790755190613.jpg',
        titleBn: 'ল্যাবরেটরিতে মরিচা গঠনের প্রমাণ',
        titleEn: 'Laboratory Rusting Demonstration',
        captionBn: 'লোহার পেরেক কয়েকদিন রেখে দিলে জলযোজিত ফেরিক অক্সাইডের লালচে-বাদামি আস্তরণ সৃষ্টি',
        captionEn: 'Iron nails developing reddish brown hydrated ferric oxide coating over time',
        type: 'photo'
      },
      {
        id: 'c1_s6_img3',
        url: '/src/assets/images/chemistry_daily_life_1790755220069.jpg',
        titleBn: 'ধাতু ক্ষয় রোধের রাসায়নিক কৌশল',
        titleEn: 'Corrosion Prevention Technologies',
        captionBn: 'গ্যালভানাইজিং (জিঙ্কের প্রলেপ), রঙ করা এবং ইলেক্ট্রোলেটিংয়ের মাধ্যমে মরিচা প্রতিরোধ',
        captionEn: 'Galvanizing with zinc, painting, and electroplating to prevent iron degradation',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'মরিচা (Rust)',
        labelEn: 'Hydrated Ferric Oxide',
        symbol: 'Fe₂O₃·nH₂O',
        detailBn: 'লোহা, অক্সিজেন ও পানির রাসায়নিক বিক্রিয়ায় গঠিত লালচে-বাদামি ভঙ্গুর যৌগ',
        detailEn: 'Reddish brown flaky solid formed by redox reaction of iron with dissolved oxygen and moisture',
        badgeType: 'safety',
        position: { x: 50, y: 40 }
      },
      {
        labelBn: 'তেলের আস্তরণ (টিউব ২)',
        labelEn: 'Oil Protective Barrier',
        symbol: 'Oxygen Barrier',
        detailBn: 'সেদ্ধ পানির ওপর তেলের স্তর বাতাস থেকে অক্সিজেন দ্রবীভূত হতে বাধা দেয়',
        detailEn: 'Liquid oil seal preventing atmospheric oxygen from dissolving into boiled water',
        badgeType: 'quantum',
        position: { x: 75, y: 65 }
      }
    ],
    keyPoints: [
      {
        heading: 'পরীক্ষার প্রতিপাদ্য প্রশ্ন',
        description: 'লোহার পেরেকে মরিচা ধরার জন্য কেবল বাতাস, কেবল পানি, নাকি বাতাস ও পানি উভয়ের উপস্থিতি প্রয়োজন?',
        highlight: 'অনুসন্ধানের সমস্যা'
      },
      {
        heading: '৩টি টেস্টটিউবের নিয়ন্ত্রিত পরীক্ষণ',
        description: '১ম টিউব: সাধারণ পানি ও বাতাস রাখা হলো (উভয় উপস্থিত)। ২য় টিউব: সেদ্ধ পানি (বাতাসমুক্ত) এবং ওপর দিয়ে তেলের স্তর দেওয়া হলো (শুধু পানি, বাতাস নেই)। ৩য় টিউব: অনাদ্র CaCl₂ দিয়ে শুষ্ক বাতাস রাখা হলো (শুধু বাতাস, পানি নেই)।',
        highlight: 'নিয়ন্ত্রিত ৩টি পরিবেশ'
      },
      {
        heading: 'পর্যবেক্ষণ ও রাসায়নিক বিক্রিয়া',
        description: 'কয়েকদিন পর দেখা গেল কেবল ১ম টিউবের পেরেকেই লালচে মরিচা পড়েছে; ২য় ও ৩য় টিউবের পেরেকের কোনো ক্ষতি হয়নি। অর্থাৎ মরিচা পড়তে পানি ও অক্সিজেন উভয়ই অপরিহার্য।',
        formula: '4Fe + 3O_2 + 2nH_2O \\rightarrow 2Fe_2O_3 \\cdot nH_2O \\quad [\\text{মরিচা / Rust}]'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মরিচা প্রতিরোধের উপায়',
      content: '১. রঙ বা বার্নিশ করা।\n২. গ্রিজ বা তেল লাগানো।\n৩. গ্যালভানাইজিং (লোহার ওপর জিঙ্কের প্রলেপ দেওয়া)।\n৪. টিন প্লেটিং ও ইলেকট্রোপ্লেটিং।\n৫. স্টেইনলেস স্টিল বা সংকর ধাতু তৈরি করা।'
    },
    speakerNotes: 'শিক্ষার্থীদের দেখান কীভাবে বিজ্ঞানের একটি সাধারণ সিদ্ধান্ত নিখুঁত নিয়ন্ত্রিত পরীক্ষার মাধ্যমে চিরন্তন সত্য হিসেবে প্রতিষ্ঠিত হয়।',
    recommendedInteractiveTab: 'safety'
  },
  {
    id: 7,
    chapter: 1,
    title: 'রসায়নাগারে ব্যবহৃত রাসায়নিক পদার্থের ঝুঁকির মাত্রা ও সতর্কতা সংকেত',
    subtitle: 'Globally Harmonized System (GHS) Hazard Pictograms & Chemical Safety Symbols',
    category: 'ল্যাবরেটরি নিরাপত্তা',
    gallery: [
      {
        id: 'c1_s7_img1',
        titleBn: 'জাতিসংঘ অনুমোদিত জিএইচএস (GHS) হ্যাজার্ড প্রতীকসমূহ',
        titleEn: 'Official UN GHS Hazard Pictograms',
        captionBn: 'বিস্ফোরক, দাহ্য, জারক, বিষাক্ত, ক্ষয়কারী ও পরিবেশগত ঝুঁকির প্রমিত আন্তর্জাতিক প্রতীক',
        captionEn: 'International standard diamond pictograms for explosive, flammable, toxic, and corrosive risks',
        type: 'diagram',
        customDiagramType: 'hazardSymbols'
      },
      {
        id: 'c1_s7_img2',
        url: '/src/assets/images/lab_safety_hazards_1790755190613.jpg',
        titleBn: 'রাসায়নিক রিএজেন্ট বোতলে ঝুঁকি লেবেল',
        titleEn: 'Hazard Labels on Reagent Bottles',
        captionBn: 'বোতলের গায়ে সাঁটানো ঝুঁকির মাত্রা, ক্ষতিকর প্রভাব এবং জরুরি প্রাথমিক চিকিৎসার নির্দেশিকা',
        captionEn: 'Manufacturer label on chemical bottles showing pictograms, signal words, and precautionary advice',
        type: 'photo'
      },
      {
        id: 'c1_s7_img3',
        url: '/src/assets/images/chemistry_daily_life_1790755220069.jpg',
        titleBn: 'ল্যাবরেটরি সুরক্ষা ও ব্যক্তিগত সরঞ্জাম',
        titleEn: 'Personal Protective Equipment (PPE)',
        captionBn: 'সেফটি গগলস, এপ্রন, হ্যান্ড গ্লাভস এবং আই-ওয়াশ স্টেশনের সঠিক ব্যবহার',
        captionEn: 'Mandatory PPE usage including safety eyewear, lab coat, nitrile gloves, and eye-wash station',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'জিএইচএস হ্যাজার্ড ফ্রেম',
        labelEn: 'GHS Red Diamond Border',
        symbol: 'GHS Symbol',
        detailBn: 'লাল প্রান্তসীমার রম্বসাকার কাঠামোর মধ্যে কালো রঙের সুস্পষ্ট আন্তর্জাতিক সতর্কতা সংকেত',
        detailEn: 'Standard red bordered square set at a point containing specific risk symbol',
        badgeType: 'hazard',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'সতর্কতা নির্দেশিকা',
        labelEn: 'Precautionary Measures',
        symbol: 'Safety Rules',
        detailBn: 'ব্যবহারের পূর্বে ঝুঁকি জেনে নিয়ে নির্দিষ্ট সুরক্ষামূলক ব্যবস্থা গ্রহণ করতে হবে',
        detailEn: 'Consulting Material Safety Data Sheet (MSDS) prior to unsealing reagents',
        badgeType: 'safety',
        position: { x: 75, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'ঝুঁকি প্রতীকের উদ্দেশ্য (GHS Purpose)',
        description: 'ল্যাবরেটরিতে সংরক্ষিত রাসায়নিক দ্রব্য ব্যবহারের পূর্বে তার সম্ভাব্য বিপজ্জনক মাত্রা (বিস্ফোরক, বিষাক্ত, ক্ষয়কারী বা পরিবেশের ক্ষতিকর) এক নজরে বুঝে সতর্কতা অবলম্বন করার জন্য জাতিসংঘ এই সর্বজনীন প্রতীক প্রবর্তন করে।',
        highlight: 'আন্তর্জাতিক প্রমিত সংকেত'
      },
      {
        heading: 'প্রধান হ্যাজার্ড ক্যাটাগরি',
        description: '১. ভৌত ঝুঁকি (Physical Hazards): বিস্ফোরক, দাহ্য, জারক। ২. স্বাস্থ্য ঝুঁকি (Health Hazards): তীব্র বিষাক্ত, উত্তেজক, কার্সিনোজেনিক। ৩. পরিবেশগত ঝুঁকি (Environmental Hazards): জলজ ও মাটির ক্ষতিসাধনকারী।',
        highlight: 'ভৌত, স্বাস্থ্য ও পরিবেশ ঝুঁকি'
      }
    ],
    callout: {
      type: 'warning',
      title: 'ল্যাবরেটরির প্রধান নিয়ম',
      content: 'যেকোনো রাসায়নিক দ্রব্যের বোতল হাতে নেওয়ার আগে তার লেবেল ও ঝুঁকি প্রতীক ভালো করে পড়ে নিন। কোনো রাসায়নিক দ্রব্য কখনো খালি হাতে স্পর্শ করবেন না, ঘ্রাণ নেবেন না বা স্বাদ গ্রহণ করবেন না।'
    },
    speakerNotes: 'এসএসসি পরীক্ষার জন্য প্রতিটি প্রতীকের বাংলা নাম, ইংরেজি নাম, ঝুঁকির কারণ, উদাহরণ এবং সতর্কতা মুখস্থ রাখতে হবে। পরবর্তী স্লাইডগুলোতে প্রতিটি প্রতীক বিশদভাবে দেখানো হয়েছে।',
    recommendedInteractiveTab: 'safety'
  },
  {
    id: 8,
    chapter: 1,
    title: 'বিস্ফোরক, দাহ্য ও জারক পদার্থ',
    subtitle: 'Explosive, Flammable & Oxidizing Substances — Hazards & Precautions',
    category: 'হ্যাজার্ড প্রতীক বিশ্লেষণ',
    gallery: [
      {
        id: 'c1_s8_img1',
        titleBn: 'বিস্ফোরক, দাহ্য ও জারক প্রতীকের তুলনা',
        titleEn: 'Explosive, Flammable & Oxidizing Symbols',
        captionBn: 'বিস্ফোরিত বোমা (Exploding Bomb), প্রজ্বলিত অগ্নিশিখা (Flame) ও বলয়ের ওপর শিখা (Flame over circle)',
        captionEn: 'Exploding bomb for unstable explosives, flame for flammables, flame over circle for oxidizers',
        type: 'diagram',
        customDiagramType: 'hazardSymbols'
      },
      {
        id: 'c1_s8_img2',
        url: '/src/assets/images/lab_safety_hazards_1790755190613.jpg',
        titleBn: 'দাহ্য তরল সংরক্ষণ ফিউমহুড',
        titleEn: 'Flammable Storage & Fume Hood',
        captionBn: 'অ্যালকোহল ও ইথারের মতো উদ্বায়ী দাহ্য তরল অগ্নিশিখা হতে দূরে সুরক্ষিত অগ্নিনিরোধক ক্যাবিনেটে রাখা',
        captionEn: 'Volatile solvents stored away from ignition sources inside fireproof safety cabinets',
        type: 'photo'
      },
      {
        id: 'c1_s8_img3',
        url: '/src/assets/images/ancient_alchemy_lab_1790755208632.jpg',
        titleBn: 'জারক পদার্থের তীব্র ক্রিয়া',
        titleEn: 'Oxidizing Chemical Reactions',
        captionBn: 'পটাশিয়াম পারম্যাঙ্গানেট ও গাঢ় হাইড্রোজেন পারঅক্সাইডের মতো জারক অন্যান্য পদার্থে তীব্র দহন সৃষ্টি করে',
        captionEn: 'Strong oxidizers accelerating combustion of organic matters upon contact',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'বিস্ফোরক পদার্থ (Explosive)',
        labelEn: 'Exploding Bomb Symbol',
        symbol: 'টিএনটি / TNT',
        detailBn: 'আঘাত, ঘর্ষণ বা তাপে প্রচণ্ড শব্দে বিস্ফোরিত হয়ে বিপদ ডেকে আনে (যেমন: TNT, গানপাউডার, জৈব পারঅক্সাইড)',
        detailEn: 'Substances detonating upon shock, friction, or heat (e.g., TNT, organic peroxides)',
        badgeType: 'hazard',
        position: { x: 20, y: 50 }
      },
      {
        labelBn: 'দাহ্য পদার্থ (Flammable)',
        labelEn: 'Flame Symbol',
        symbol: 'ইথার / অ্যালকোহল',
        detailBn: 'বাতাসের উপস্থিতিতে সামান্য স্ফুলিঙ্গ বা তাপে দ্রুত আগুন ধরে যায় (যেমন: অ্যালকোহল, ইথার, এলপিজি গ্যাস)',
        detailEn: 'Easily ignites in air with low flashpoint (e.g., ethanol, diethyl ether, butane)',
        badgeType: 'hazard',
        position: { x: 50, y: 50 }
      },
      {
        labelBn: 'জারক পদার্থ (Oxidizing)',
        labelEn: 'Flame Over Circle',
        symbol: 'KMnO₄ / H₂O₂',
        detailBn: 'নিজে দাহ্য নয়, তবে অন্য বস্তুকে জ্বলতে তীব্রভাবে সাহায্য করে (যেমন: ক্লোরিন গ্যাস, KMnO₄, গাঢ় H₂O₂)',
        detailEn: 'Releases oxygen accelerating fires; keep strictly isolated from organic flammables',
        badgeType: 'hazard',
        position: { x: 80, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: '১. বিস্ফোরক পদার্থ (Explosive - প্রতীক: বিস্ফোরিত বোমা)',
        description: 'ঝুঁকি: সামান্য নাড়াচাড়া, ঘর্ষণ বা উত্তাপে তীব্র বিস্ফোরণ ঘটাতে পারে। উদাহরণ: ট্রাইনাইট্রোটলুইন (TNT), অ্যামোনিয়াম নাইট্রেট, জৈব পারঅক্সাইড। সতর্কতা: আঘাত থেকে রক্ষা করতে হবে এবং চরম সাবধানে হ্যান্ডেল করতে হবে।',
        highlight: 'টিএনটি, জৈব পারঅক্সাইড'
      },
      {
        heading: '২. দাহ্য পদার্থ (Flammable - প্রতীক: অগ্নিশিখা)',
        description: 'ঝুঁকি: খুব কম তাপমাত্রায় সহজেই আগুন ধরে যায়। উদাহরণ: ইথানল, ডাইইথাইল ইথার, পেট্রোল, সুগন্ধি এ্যারোসল। সতর্কতা: সর্বদা স্পিরিট ল্যাম্প, বুনসেন বার্নার বা যেকোনো আগুনের উৎস থেকে দূরে রাখতে হবে।',
        highlight: 'অ্যালকোহল, ইথার, পেট্রোল'
      },
      {
        heading: '৩. জারক পদার্থ (Oxidizing - প্রতীক: বৃত্তের ওপর শিখা)',
        description: 'ঝুঁকি: নিজেরা না জ্বললেও অন্য পদার্থকে দ্রুত প্রজ্বলিত করে এবং ত্বকে মারাত্মক ক্ষত সৃষ্টি করে। উদাহরণ: ক্লোরিন গ্যাস (Cl₂), পটাশিয়াম পারম্যাঙ্গানেট (KMnO₄), গাঢ় নাইট্রিক এসিড। সতর্কতা: দাহ্য পদার্থ হতে দূরে আলাদা ক্যাবিনেটে রাখতে হবে।',
        highlight: 'KMnO₄, ক্লোরিন গ্যাস, H₂O₂'
      }
    ],
    callout: {
      type: 'tip',
      title: 'দাহ্য বনাম জারক প্রতীকের পার্থক্য চেনার সহজ কৌশল',
      content: 'দাহ্য পদার্থের প্রতীকে কেবল সোজা আগুনের শিখা (Flame) থাকে। আর জারক পদার্থের প্রতীকে শিখার নিচে একটি বৃত্ত বা গোলক থাকে (Flame over Circle: বৃত্তটি মূলত অক্সিজেনের "O" অক্ষরের প্রতীক, যা বোঝায় এটি অক্সিজেন সরবরাহকারী জারক)।'
    },
    speakerNotes: 'এসএসসি পরীক্ষার বহু নির্বাচনী প্রশ্নে প্রায়ই আসে: "বৃত্তের ওপর শিখা কোনটির প্রতীক?" উত্তর: জারক পদার্থ। শিক্ষার্থীদের এই সূক্ষ্ম পার্থক্যটি ভালো করে ধরিয়ে দিন।',
    recommendedInteractiveTab: 'safety'
  },
  {
    id: 9,
    chapter: 1,
    title: 'বিষাক্ত, তীব্র বিষাক্ত ও স্বাস্থ্য ঝুঁকিপূর্ণ পদার্থ',
    subtitle: 'Toxic, Very Toxic & Health Hazard Substances — Biochemical Risks',
    category: 'হ্যাজার্ড প্রতীক বিশ্লেষণ',
    gallery: [
      {
        id: 'c1_s9_img1',
        titleBn: 'বিষাক্ত ও স্বাস্থ্য ঝুঁকি প্রতীক',
        titleEn: 'Toxic Skull & Health Hazard Silhouette',
        captionBn: 'মাথার খুলি ও আড়াআড়ি হাড় (Toxic / Poison) এবং মানব শরীরের তারা চিহ্ন (Chronic Health Hazard)',
        captionEn: 'Skull and crossbones for acute toxicity; exploding chest silhouette for chronic carcinogens',
        type: 'diagram',
        customDiagramType: 'hazardSymbols'
      },
      {
        id: 'c1_s9_img2',
        url: '/src/assets/images/lab_safety_hazards_1790755190613.jpg',
        titleBn: 'বিষাক্ত রাসায়নিকের ফিউমহুড ব্যবহার',
        titleEn: 'Fume Hood Exhaust Extraction',
        captionBn: 'উদ্বায়ী বিষাক্ত বাষ্পযুক্ত পদার্থের কাজ সর্বদা উচ্চমানের ফিউমহুডের ভেতরে মাস্ক পরে সম্পাদন করা',
        captionEn: 'Manipulating hazardous volatile chemicals exclusively inside ventilated fume extraction hood',
        type: 'photo'
      },
      {
        id: 'c1_s9_img3',
        url: '/src/assets/images/chemistry_daily_life_1790755220069.jpg',
        titleBn: 'ভারী ধাতু ও স্বাস্থ্য ঝুঁকি',
        titleEn: 'Heavy Metal Biological Toxicity',
        captionBn: 'সীসা (Pb), পারদ (Hg) ও ক্যাডমিয়ামের (Cd) মানবদেহে দীর্ঘমেয়াদী ক্ষতি ও স্নায়ুতন্ত্রের অবক্ষয়',
        captionEn: 'Bioaccumulation of lead, mercury, and cadmium causing neurological and kidney damage',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'বিষাক্ত পদার্থ (Toxic)',
        labelEn: 'Skull & Crossbones Symbol',
        symbol: 'মিথানল / CH₃OH',
        detailBn: 'শ্বাস বা ত্বকের মাধ্যমে প্রবেশ করলে দ্রুত মৃত্যু বা অন্ধত্ব ঘটতে পারে (যেমন: মিথানল, ক্লোরোবেনজিন)',
        detailEn: 'Causes fatal poisoning or blindness via inhalation, ingestion or absorption (e.g., methanol)',
        badgeType: 'hazard',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'স্বাস্থ্য ঝুঁকিপূর্ণ (Health Hazard)',
        labelEn: 'Chronic Health Hazard Silhouette',
        symbol: 'কার্সিনোজেন / ক্যান্সার সৃষ্টিকারী',
        detailBn: 'দীর্ঘমেয়াদে শ্বাসযন্ত্র বিকল, প্রজনন ক্ষতি বা ক্যান্সার সৃষ্টি করে (যেমন: বেনজিন, অ্যাসবেস্টস, সীসা)',
        detailEn: 'Chronic toxicity causing cancer, mutagenic mutations, or respiratory allergies (e.g., benzene)',
        badgeType: 'hazard',
        position: { x: 75, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: '১. বিষাক্ত পদার্থ (Toxic - প্রতীক: মাথার খুলি ও আড়াআড়ি হাড়)',
        description: 'ঝুঁকি: শরীরে প্রবেশ করলে বিষক্রিয়া সৃষ্টি হয় এবং তাৎক্ষণিক বা দ্রুত মৃত্যু ঘটাতে পারে। উদাহরণ: মিথানল (CH₃OH), ক্লোরোবেনজিন, সায়ানাইড লবণ। সতর্কতা: নাক-মুখ ঢেকে মাস্ক, অ্যাপ্রন ও চশমা পরে ফিউমহুডে কাজ করতে হবে।',
        highlight: 'মিথানল, সায়ানাইড'
      },
      {
        heading: '২. স্বাস্থ্য ঝুঁকিপূর্ণ পদার্থ (Health Hazard - প্রতীক: বুক ফাটা মানুষের অবয়ব)',
        description: 'ঝুঁকি: তাৎক্ষণিক তীব্র প্রতিক্রিয়া না হলেও দীর্ঘদিন সংস্পর্শে থাকলে ক্যান্সার (কার্সিনোজেনিক), ক্রনিক ফুসফুসের রোগ বা প্রজনন অঙ্গের ক্ষতিসাধন করে। উদাহরণ: বেনজিন, টলুইন, সীসা (Pb), ক্যাডমিয়াম (Cd)।',
        highlight: 'বেনজিন, ভারী ধাতু (ক্যান্সার ঝুঁকি)'
      },
      {
        heading: '৩. উত্তেজক পদার্থ (Irritant - প্রতীক: বিস্ময়সূচক চিহ্ন !)',
        description: 'ঝুঁকি: চোখ, ত্বক বা শ্বাসনালিতে চুলকানি ও অস্বস্তি তৈরি করে। উদাহরণ: ব্লিচিং পাউডার, লঘু এসিডের বাষ্প, সোডিয়াম হাইড্রোক্সাইডের লঘু দ্রবণ।',
        highlight: 'ত্বক ও চোখে জ্বালা সৃষ্টিকারী'
      }
    ],
    callout: {
      type: 'warning',
      title: 'মিথানলের মারাত্মক বিষক্রিয়া',
      content: 'মিথানল (Wood Alcohol) পান করলে শরীরে ফরমিক এসিড তৈরি হয়, যা চোখের অপটিক নার্ভ সম্পূর্ণ ধ্বংস করে চিরতরে অন্ধ করে দেয় এবং মাত্র ৩০ মিলিলিটার পানে মৃত্যু ঘটতে পারে। বিষাক্ত পণ্যের প্রতীক দেখে কখনোই এটিকে সাধারণ অ্যালকোহল ভেবে ভুল করবেন না।'
    },
    speakerNotes: 'শিক্ষার্থীদের সচেতন করুন: মিথানল ও ইথানলের গন্ধ প্রায় একই রকম হওয়ায় লেবেল এবং বিষাক্ত প্রতীক না দেখে কোনো তরল ব্যবহার করা চরম প্রাণঘাতী হতে পারে।',
    recommendedInteractiveTab: 'safety'
  },
  {
    id: 10,
    chapter: 1,
    title: 'ক্ষয়কারী, তেজস্ক্রিয় ও পরিবেশের জন্য ক্ষতিকর পদার্থ',
    subtitle: 'Corrosive, Radioactive & Environmental Hazard Symbols',
    category: 'হ্যাজার্ড প্রতীক বিশ্লেষণ',
    gallery: [
      {
        id: 'c1_s10_img1',
        titleBn: 'ক্ষয়কারী, তেজস্ক্রিয় ও পরিবেশ ঝুঁকি প্রতীক',
        titleEn: 'Corrosive, Trefoil Radioactive & Dead Fish/Tree Symbols',
        captionBn: 'টিউব হতে ক্ষয়কারী তরল নিঃসরণ, আন্তর্জাতিক ট্রিফয়েল তেজস্ক্রিয় সংকেত এবং মৃত বৃক্ষ ও জলজ মাছের প্রতীক',
        captionEn: 'Acid pouring on hand/metal, nuclear radioactive trefoil, and dead tree/fish environmental eco-toxicity',
        type: 'diagram',
        customDiagramType: 'hazardSymbols'
      },
      {
        id: 'c1_s10_img2',
        url: '/src/assets/images/lab_safety_hazards_1790755190613.jpg',
        titleBn: 'গাঢ় এসিড সংরক্ষণ ও ক্ষয়রোধ',
        titleEn: 'Acid Safety & Spill Prevention',
        captionBn: 'গাঢ় সালফিউরিক এসিড (H₂SO₄) ও নাইট্রিক এসিড (HNO₃) মোটা কাচের নিরাপদ কন্টেইনারে সংরক্ষণ',
        captionEn: 'Concentrated mineral acids stored in acid-resistant secondary containment vessels',
        type: 'photo'
      },
      {
        id: 'c1_s10_img3',
        url: '/src/assets/images/chemistry_daily_life_1790755220069.jpg',
        titleBn: 'পরিবেশ দূষণ ও রাসায়নিক বর্জ্য ব্যবস্থাপনা',
        titleEn: 'Environmental Waste Neutralization',
        captionBn: 'ভারী ধাতু ও ল্যাবরেটরি রাসায়নিক বর্জ্য সরাসরি সিঙ্কে না ফেলে রাসায়নিকভাবে নিষ্ক্রিয়করণ',
        captionEn: 'Neutralizing acid-base effluents and capturing toxic heavy metals before disposal',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ক্ষয়কারী পদার্থ (Corrosive)',
        labelEn: 'Corrosion Symbol',
        symbol: 'গাঢ় H₂SO₄ / NaOH',
        detailBn: 'ত্বকে লাগলে তীব্র ক্ষত তৈরি করে এবং ধাতু ও মেঝে দ্রুত ক্ষয় করে ফুটো করে ফেলে',
        detailEn: 'Destroys living tissue and chemically corrodes metals upon direct contact',
        badgeType: 'hazard',
        position: { x: 20, y: 50 }
      },
      {
        labelBn: 'তেজস্ক্রিয় পদার্থ (Radioactive)',
        labelEn: 'Radioactive Trefoil',
        symbol: 'ইউরেনিয়াম / রেডিয়াম',
        detailBn: 'ক্ষতিকর আলফা, বিটা বা গামা রশ্মি নির্গমন করে জীবকোষের ডিএনএ বিনষ্ট ও ক্যান্সার সৃষ্টি করে',
        detailEn: 'Emits ionizing radiation (alpha, beta, gamma); requires thick lead shielding',
        badgeType: 'hazard',
        position: { x: 50, y: 50 }
      },
      {
        labelBn: 'পরিবেশের ক্ষতিকর (Eco-Hazard)',
        labelEn: 'Environmental Hazard',
        symbol: 'লেড (Pb) / মার্কারি (Hg)',
        detailBn: 'পানিতে ফেললে জলজ উদ্ভিদ ও মাছ ধ্বংস করে এবং মাটিতে উদ্ভিদ জন্মাতে বাধা দেয়',
        detailEn: 'Toxic to aquatic organisms with long-lasting environmental persistence',
        badgeType: 'hazard',
        position: { x: 80, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: '১. ক্ষয়কারী পদার্থ (Corrosive - প্রতীক: কাচপাত্র থেকে হাত ও ধাতুর ওপর তরল পড়া)',
        description: 'ঝুঁকি: ত্বক স্পর্শ করলে মারাত্মক দাহ্য ক্ষত তৈরি করে এবং ধাতু, কাপড় ও কাঠ ক্ষয় করে। উদাহরণ: গাঢ় সালফিউরিক এসিড (H₂SO₄), গাঢ় হাইড্রোক্লোরিক এসিড (HCl), গাঢ় সোডিয়াম হাইড্রোক্সাইড (NaOH)। সতর্কতা: সর্বদা মোটা রাবার গ্লাভস ও অ্যাপ্রন পরে কাজ করতে হবে।',
        highlight: 'গাঢ় H₂SO₄, গাঢ় NaOH'
      },
      {
        heading: '২. তেজস্ক্রিয় পদার্থ (Radioactive - প্রতীক: ট্রিফয়েল বা তিন পাখাওয়ালা বৃত্ত)',
        description: 'ঝুঁকি: স্বতঃস্ফূর্তভাবে ক্ষতিকর অদৃশ্য আয়নাইজিং রশ্মি (α, β, γ) বিকিরণ করে জীবকোষকে ধ্বংস করে ও জিনগত মিউটেশন ঘটায়। উদাহরণ: ইউরেনিয়াম (U), রেডিয়াম (Ra), প্লুটোনিয়াম (Pu)। সতর্কতা: পুরু সীসার (Lead) পাত্রে সংরক্ষণ এবং বিশেষ সুরক্ষা স্যুট ব্যবহার বাধ্যতামূলক।',
        highlight: 'ট্রিফয়েল প্রতীক, সীসার প্রটেকশন'
      },
      {
        heading: '৩. পরিবেশের জন্য ক্ষতিকর (Environmental Hazard - প্রতীক: মৃত গাছ ও মাছ)',
        description: 'ঝুঁকি: এই রাসায়নিক মাটিতে বা নর্দমায় ফেললে পরিবেশ বিষাক্ত হয় এবং জলজ প্রাণী ও উদ্ভিদের ব্যাপক মৃত্যু ঘটে। উদাহরণ: ভারী ধাতু (লেড Pb, পারদ Hg, ক্যাডমিয়াম Cd)। সতর্কতা: কখনোই সরাসরি ড্রেন বা সিঙ্কে ফেলা যাবে না; নির্দিষ্ট বর্জ্য পাত্রে সংরক্ষণ করে রিসাইকেল করতে হবে।',
        highlight: 'লেড, পারদ, আর্সেনিক'
      }
    ],
    callout: {
      type: 'warning',
      title: 'এসিডে পানি কখনোই ঢালবেন না!',
      content: 'গাঢ় সালফিউরিক এসিডে পানি ঢাললে প্রচণ্ড তাপে পানি মুহূর্তেই ফুটন্ত বাষ্পে পরিণত হয়ে চারপাশে এসিড ছিটিয়ে মুখ ও শরীর ঝলসে দিতে পারে। সর্বদা "পানির ভেতর অল্প অল্প করে নাড়াচাড়া সহকারে এসিড ঢালতে হয়", কখনোই এসিডে পানি নয়!'
    },
    speakerNotes: 'শিক্ষার্থীদের বারবার মনে করিয়ে দিন: ল্যাবরেটরির কোনো কেমিক্যালই সাধারণ গৃহস্থালি ডাস্টবিনে বা সিঙ্কের সাধারণ পানিতে ফেলা যাবে না।',
    recommendedInteractiveTab: 'safety'
  },
  {
    id: 11,
    chapter: 1,
    title: 'ল্যাবরেটরি নিরাপত্তা বিধি, ব্যক্তিগত সুরক্ষা ও প্রাথমিক চিকিৎসা',
    subtitle: 'Laboratory Safety Protocol, PPE Compliance & First Aid Measures',
    category: 'নিরাপত্তা ও জরুরি ব্যবস্থা',
    gallery: [
      {
        id: 'c1_s11_img1',
        url: '/src/assets/images/lab_safety_hazards_1790755190613.jpg',
        titleBn: 'ল্যাবরেটরি পিপিই ও নিরাপত্তা পোশাক',
        titleEn: 'Personal Protective Equipment Standard',
        captionBn: 'সাদা সুতি এপ্রন, নিরাপত্তা চশমা (Goggles), নাইট্রাইল হ্যান্ড গ্লাভস এবং সুরক্ষা মাস্কের সঠিক ব্যবহার',
        captionEn: 'Full personal protective ensemble: 100% cotton lab coat, safety goggles, and nitrile gloves',
        type: 'photo'
      },
      {
        id: 'c1_s11_img2',
        titleBn: 'জরুরি ল্যাবরেটরি নিরাপত্তা মানচিত্র',
        titleEn: 'Emergency Lab Safety Blueprint',
        captionBn: 'আই-ওয়াশ স্টেশন, ফায়ার এক্সটিংগুইশার, ফাস্ট এইড বক্স এবং জরুরি নির্গমন পথের অবস্থান',
        captionEn: 'Emergency equipment layout including eye wash, fire blanket, first aid, and exit route',
        type: 'diagram',
        customDiagramType: 'hazardSymbols'
      },
      {
        id: 'c1_s11_img3',
        url: '/src/assets/images/chemistry_daily_life_1790755220069.jpg',
        titleBn: 'প্রাথমিক চিকিৎসা ও দুর্ঘটনা মোকাবেলা',
        titleEn: 'First Aid for Chemical Spills',
        captionBn: 'ত্বকে এসিড বা ক্ষার পড়লে প্রচুর ঠাণ্ডা পানি ও লঘু সোডিয়াম বাইকার্বনেট বা বোরিক এসিড দ্রবণ প্রয়োগ',
        captionEn: 'Immediate flushing with running water and applying mild neutralizing agent for chemical burns',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'সেফটি গগলস (চোখের সুরক্ষা)',
        labelEn: 'Safety Eyewear Goggles',
        symbol: 'Goggles',
        detailBn: 'রাসায়নিক দ্রবণ ছিটকে আসা বা বিষাক্ত বাষ্পের হাত থেকে চোখকে সুরক্ষিত রাখে',
        detailEn: 'Shields eyes against corrosive splashes, flying glass shards, and irritating vapors',
        badgeType: 'safety',
        position: { x: 30, y: 35 }
      },
      {
        labelBn: 'সুতি এপ্রন (পোশাক ও ত্বক সুরক্ষা)',
        labelEn: '100% Cotton Lab Coat',
        symbol: 'Apron',
        detailBn: 'সুতি কাপড়ে সহজে আগুন ধরে না এবং শরীরে রাসায়নিক সরাসরি পড়তে দেয় না',
        detailEn: 'Non-synthetic cotton apron protecting skin and clothing against corrosive chemical spills',
        badgeType: 'safety',
        position: { x: 50, y: 65 }
      },
      {
        labelBn: 'আই-ওয়াশ স্টেশন',
        labelEn: 'Emergency Eye-Wash Station',
        symbol: 'Eye Wash',
        detailBn: 'চোখে ভুলবশত কোনো রাসায়নিক গেলে একটানা ১৫ মিনিট মৃদু পানির প্রবাহে চোখ ধোয়ার ব্যবস্থা',
        detailEn: 'Emergency fountain for continuous 15-minute eye flush following direct chemical exposure',
        badgeType: 'safety',
        position: { x: 75, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: '১. ল্যাবরেটরির ব্যক্তিগত সুরক্ষা সরঞ্জাম (PPE)',
        description: '• সুতি এপ্রন (সিনথেটিক কাপড় পরিহার্য কারণ আগুনে গলে ত্বকে সেঁটে যায়)। • সেফটি গগলস (সাধারণ প্রেসক্রিপশন চশমা পর্যাপ্ত নয়)। • হ্যান্ড গ্লাভস (হাতে রাসায়নিক ক্ষতের হাত থেকে বাঁচাতে)। • ক্লোজড-টো জুতো (পায়ে রাসায়নিক বা কাচ পড়া রোধে)।',
        highlight: 'এপ্রন, গগলস, গ্লাভস ও বন্ধ জুতো'
      },
      {
        heading: '২. ল্যাবরেটরিতে আচরণের সুবর্ণ নিয়মাবলী',
        description: '১. ল্যাবে কোনো খাবার খাওয়া বা পানীয় পান সম্পূর্ণ নিষিদ্ধ। ২. অপ্রয়োজনে কোনো রাসায়নিক নাড়াচাড়া বা মেশানো যাবে না। ৩. টেস্টটিউব উত্তপ্ত করার সময় তার মুখ নিজের বা সহপাঠীর দিকে রাখা যাবে না।',
        highlight: 'খাওয়া-দাওয়া নিষিদ্ধ, নিরাপদ উত্তপ্তকরণ'
      },
      {
        heading: '৩. প্রাথমিক চিকিৎসা নির্দেশিকা (First Aid Protocol)',
        description: '• ত্বকে এসিড পড়লে: তাৎক্ষণিক প্রচুর প্রবাহিত পানিতে ধুয়ে ৫% সোডিয়াম বাইকার্বনেট দ্রবণ দিতে হবে। • ত্বকে ক্ষার পড়লে: প্রচুর পানিতে ধুয়ে লঘু বোরিক এসিড দ্রবণ দিতে হবে। • চোখে কেমিক্যাল গেলে: আই-ওয়াশ স্টেশনে চোখ মেলে ধরে ১৫ মিনিট পানি দিয়ে ধুতে হবে।',
        highlight: 'প্রচুর পরিষ্কার পানির প্রবাহ'
      }
    ],
    callout: {
      type: 'warning',
      title: 'জরুরি পরিস্থিতিতে প্রাথমিক পদক্ষেপ',
      content: 'ল্যাবে যেকোনো অনাকাঙ্ক্ষিত দুর্ঘটনা ঘটার সাথে সাথে কোনো দ্বিধা না করে প্রথমে উচ্চস্বরে শিক্ষক বা ল্যাব ইনচার্জকে অবহিত করুন। কোনো ঘটনা গোপন করার চেষ্টা করবেন না।'
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন: ভালো বিজ্ঞানী হওয়ার প্রথম শর্ত হলো একজন নিরাপদ ও দায়িত্বশীল গবেষক হওয়া। নিরাপত্তা সবার আগে।',
    recommendedInteractiveTab: 'safety'
  },
  {
    id: 12,
    chapter: 1,
    title: 'অধ্যায় ১ সারসংক্ষেপ ও বোর্ড পরীক্ষার প্রস্তুতি',
    subtitle: 'Chapter 1 Summary, High-Yield Board Topics & Transition to States of Matter',
    category: 'সারসংক্ষেপ ও প্রস্তুতি',
    gallery: [
      {
        id: 'c1_s12_img1',
        url: '/src/assets/images/lab_safety_hazards_1790755190613.jpg',
        titleBn: 'অধ্যায় ১ এর পূর্ণাঙ্গ রিভিশন চার্ট',
        titleEn: 'Chapter 1 Full Revision Blueprint',
        captionBn: 'রসায়নের সংজ্ঞা, ইতিহাস, দৈনন্দিন জীবন, গবেষণা পদ্ধতি এবং হ্যাজার্ড প্রতীকের সারসংক্ষেপ',
        captionEn: 'Comprehensive overview of chemistry concepts, historical alchemy, methodology and hazard signs',
        type: 'photo'
      },
      {
        id: 'c1_s12_img2',
        titleBn: 'হ্যাজার্ড প্রতীকের দ্রুত রিভিশন ম্যাট্রিক্স',
        titleEn: 'Quick Hazard Revision Matrix',
        captionBn: 'বিস্ফোরক, দাহ্য, জারক, বিষাক্ত, ক্ষয়কারী ও পরিবেশগত প্রতীকের তাৎক্ষণিক শনাক্তকরণ ছক',
        captionEn: 'Comparative quick recognition chart for all GHS international chemical safety diamonds',
        type: 'diagram',
        customDiagramType: 'hazardSymbols'
      },
      {
        id: 'c1_s12_img3',
        url: '/src/assets/images/chemistry_daily_life_1790755220069.jpg',
        titleBn: 'পরবর্তী অধ্যায় ২ এর প্রবেশদ্বার',
        titleEn: 'Gateway to Chapter 2: States of Matter',
        captionBn: 'রসায়নের মৌলিক ধারণা অর্জনের পর এবার আমরা পদার্থের তিন অবস্থা ও কণার গতিতত্ত্বে প্রবেশ করব',
        captionEn: 'Transitioning to physical behavior of matter: solids, liquids, gases, and particle dynamics',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'হ্যাজার্ড প্রতীক প্রস্তুতি',
        labelEn: 'Hazard Symbol Mastery',
        symbol: 'GHS Matrix',
        detailBn: 'এসএসসি পরীক্ষার বহুনির্বাচনী ও জ্ঞানমূলক প্রশ্নের জন্য সকল প্রতীকের নাম ও সতর্কতা প্রস্তুতি',
        detailEn: 'Essential board examination preparation for all GHS risk diamonds and chemical handling',
        badgeType: 'hazard',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'গবেষণা ধাপসমূহ',
        labelEn: 'Inquiry Steps Mastery',
        symbol: '6 Steps',
        detailBn: 'বিষয় নির্ধারণ হতে সিদ্ধান্ত পর্যন্ত ৬টি ধাপের ধারাবাহিকতা অনুধাবন প্রশ্ন হিসেবে কমন',
        detailEn: 'Sequential mastery of scientific research steps for creative exam questions',
        badgeType: 'safety',
        position: { x: 75, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'বোর্ড পরীক্ষার জন্য অতি গুরুত্বপূর্ণ টপিকসমূহ',
        description: '✓ জাবির ইবনে হাইয়ান ও অ্যান্টনি ল্যাভয়সিয়ের অবদান। ✓ খাবার লবণ, বেকিং সোডা, ভিনেগারের রাসায়নিক সংকেত। ✓ বৈজ্ঞানিক গবেষণা পদ্ধতির ৬টি ধারাবাহিক ধাপ। ✓ সকল হ্যাজার্ড প্রতীকের নাম, ঝুঁকি, উদাহরণ ও সতর্কতা। ✓ ল্যাবরেটরিতে এসিড বা ক্ষারীয় পোড়ায় প্রাথমিক চিকিৎসা।',
        highlight: 'পরীক্ষার সর্বাধিক কমন বিষয়'
      },
      {
        heading: 'পরবর্তী অধ্যায় ২: পদার্থের অবস্থা-র সাথে সংযোগ',
        description: 'আমরা শিখেছি যে রসায়ন হলো পদার্থের পরিবর্তনের বিজ্ঞান। পরবর্তী অধ্যায় ২-এ আমরা পদার্থের কণার ভেতরের আকর্ষণ ও গতির কারণে কীভাবে কঠিন, তরল ও গ্যাসীয় অবস্থার রূপান্তর ঘটে তা প্রত্যক্ষ করব!',
        highlight: 'পরবর্তী গন্তব্য: ২য় অধ্যায়'
      }
    ],
    callout: {
      type: 'tip',
      title: 'অধ্যায় ১ শেষ হলো!',
      content: 'এখন শিক্ষক ও শিক্ষার্থীরা উপরে থাকা "ল্যাব নিরাপত্তা" ল্যাব এবং "কুইজ টেস্ট" ট্যাবে গিয়ে অধ্যায় ১-এর অর্জিত জ্ঞান যাচাই করতে পারেন।'
    },
    speakerNotes: 'শিক্ষার্থীদের অভিনন্দন জানান! রসায়নের ভিত রচিত হলো। এবার তারা আত্মবিশ্বাসের সাথে অধ্যায় ২ ও ৩-এ প্রবেশ করতে প্রস্তুত।',
    recommendedInteractiveTab: 'safety'
  }
];
