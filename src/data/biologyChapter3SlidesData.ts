import { Slide } from '../types/presentation';

export const biologyChapter3Slides: Slide[] = [
  // Slide 1: কোষ বিভাজনের ধারণা ও প্রকারভেদ
  {
    id: 1,
    subject: 'biology',
    chapter: 3,
    title: 'কোষ বিভাজনের ধারণা ও প্রকারভেদ',
    subtitle: 'Concept and Classification of Cell Division',
    category: 'জীববিজ্ঞান ৩য় অধ্যায়: কোষ বিভাজন',
    gallery: [
      {
        id: 'bio_s1_1',
        titleBn: 'কোষ বিভাজনের মৌলিক প্রকারভেদ',
        titleEn: 'Three Major Types of Cell Division',
        captionBn: 'জীবদেহের গঠন ও প্রজননের ভিত্তিতে কোষ বিভাজন প্রধানত তিন প্রকার: অ্যামাইটোসিস, মাইটোসিস ও মিয়োসিস।',
        captionEn: 'Three fundamental types of cell division: Amitosis, Mitosis, and Meiosis.',
        type: 'diagram'
      },
      {
        id: 'bio_s1_2',
        titleBn: 'কোষচক্রের সাধারণ রূপরেখা',
        titleEn: 'General Overview of Cell Division Cycles',
        captionBn: 'মাতৃকোষ (Mother cell) বিভাজিত হয়ে অপত্য কোষ (Daughter cells) সৃষ্টির মাধ্যমে জীবনের ধারাবাহিকতা বজায় থাকে।',
        captionEn: 'Continuity of life ensured through division of mother cells into daughter cells.',
        type: 'chart'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'মাতৃকোষ',
        labelEn: 'Mother Cell',
        detailBn: 'যে মূল কোষটি বিভাজিত হয়ে নতুন কোষ সৃষ্টি করে।',
        detailEn: 'Original cell that undergoes division to produce new cells.',
        symbol: '2n/n',
        badgeType: 'cell',
        position: { x: 50, y: 25 }
      },
      {
        labelBn: 'অ্যামাইটোসিস',
        labelEn: 'Amitosis',
        detailBn: 'কোনো জটিল পর্যায় ছাড়াই প্রত্যক্ষভাবে নিউক্লিয়াস ও সাইটোপ্লাজম সরাসরি বিভক্ত হয়।',
        detailEn: 'Direct cell division without formation of spindle apparatus.',
        symbol: 'Direct',
        badgeType: 'cell',
        position: { x: 20, y: 70 }
      },
      {
        labelBn: 'মাইটোসিস',
        labelEn: 'Mitosis',
        detailBn: 'দেহকোষে সংঘটিত সমীকরণিক বিভাজন; ক্রোমোজোম ও নিউক্লিয়াস একবার বিভক্ত হয়।',
        detailEn: 'Equational division occurring in somatic cells.',
        symbol: '2n→2n',
        badgeType: 'chromosome',
        position: { x: 50, y: 70 }
      },
      {
        labelBn: 'মিয়োসিস',
        labelEn: 'Meiosis',
        detailBn: 'জনন মাতৃকোষে সংঘটিত হ্রাসমূলক বিভাজন; অপত্য কোষে ক্রোমোজোম সংখ্যা অর্ধেক হয়।',
        detailEn: 'Reductional division occurring in germ mother cells.',
        symbol: '2n→n',
        badgeType: 'gene',
        position: { x: 80, y: 70 }
      }
    ],
    keyPoints: [
      {
        heading: 'কোষ বিভাজন কী?',
        description: 'যে জৈবিক প্রক্রিয়ায় একটি মাতৃকোষ বিভাজিত হয়ে দুই বা ততোধিক নতুন অপত্য কোষ সৃষ্টি করে, তাকে কোষ বিভাজন (Cell Division) বলে। বিজ্ঞানী ওয়াল্টার ফ্লেমিং (Walther Flemming, 1882) প্রথম সামুদ্রিক স্যালামান্ডার কোষে এ বিভাজন প্রত্যক্ষ করেন।',
        highlight: 'জীবদেহের বৃদ্ধি ও প্রজননের মূল ভিত্তি হলো কোষ বিভাজন।'
      },
      {
        heading: 'কোষ বিভাজনের প্রকারভেদ',
        description: 'জীবজগতে প্রধানত তিন প্রকার কোষ বিভাজন দেখা যায়:\n১. অ্যামাইটোসিস (প্রত্যক্ষ বিভাজন): এককোষী আদি কোষে ঘটে।\n২. মাইটোসিস (সমীকরণিক বিভাজন): উন্নত জীবের দৈহিক কোষে ঘটে।\n৩. মিয়োসিস (হ্রাসমূলক বিভাজন): যৌন প্রজননশীল জীবের জনন মাতৃকোষে ঘটে।',
        highlight: 'অ্যামাইটোসিস (প্রত্যক্ষ), মাইটোসিস (সমীকরণিক), মিয়োসিস (হ্রাসমূলক)'
      },
      {
        heading: 'জিনগত উপাদানের ভূমিকা',
        description: 'প্রতিটি কোষ বিভাজনে নিউক্লিয়াসের ক্রোমোজোম ও ডিএনএ অনুলিপন এবং সঠিক বিন্যাসের মাধ্যমে বংশগত বৈশিষ্ট্যসমূহ নতুন প্রজন্মে সঞ্চারিত হয়।',
        highlight: 'ডিএনএ রেপ্লিকেশন ও ক্রোমোজোম পৃথকীকরণ অপরিহার্য।'
      }
    ],
    tableData: {
      caption: 'কোষ বিভাজনের তিন প্রকারভেদের তুলনামূলক রূপরেখা',
      headers: ['বৈশিষ্ট্য', 'অ্যামাইটোসিস', 'মাইটোসিস', 'মিয়োসিস'],
      rows: [
        ['সংঘটন স্থল', 'ব্যাকটেরিয়া, ইস্ট, অ্যামিবা', 'উন্নত জীবের দেহকোষ', 'জনন মাতৃকোষ'],
        ['বিভাজনের প্রকৃতি', 'প্রত্যক্ষ (সরাসরি ডাম্বেল আকার)', 'সমীকরণিক (Equational)', 'হ্রাসমূলক (Reductional)'],
        ['সৃষ্ট অপত্য কোষ', '২টি কোষ', '২টি হুবহু সমগুণসম্পন্ন কোষ', '৪টি হ্যাপ্লয়েড (n) কোষ'],
        ['ক্রোমোজোম সংখ্যা', 'নির্দিষ্ট নিউক্লিয়ার গঠন নেই', 'মাতৃকোষের সমান (2n → 2n)', 'মাতৃকোষের অর্ধেক (2n → n)']
      ]
    },
    callout: {
      type: 'info',
      title: 'পরীক্ষার গুরুত্বপূর্ণ তথ্য',
      content: 'রুডলফ ফিরশাও (Rudolf Virchow, 1855) প্রথম ঘোষণা দেন: "Omnis cellula e cellula" অর্থাৎ পূর্বতন কোষ থেকেই নতুন কোষের উৎপত্তি হয়।'
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন যে কোষ বিভাজন কেবল নতুন কোষ তৈরির প্রক্রিয়া নয়, বরং এটি জীবনের কোটি কোটি বছরের জিনগত ধারাবাহিকতা রক্ষার মূল সেতু।',
    recommendedInteractiveTab: 'cellDivisionLab'
  },

  // Slide 2: অ্যামাইটোসিস বা প্রত্যক্ষ কোষ বিভাজন
  {
    id: 2,
    subject: 'biology',
    chapter: 3,
    title: 'অ্যামাইটোসিস বা প্রত্যক্ষ কোষ বিভাজন',
    subtitle: 'Amitosis: Direct Cell Division in Prokaryotes & Simple Organisms',
    category: 'জীববিজ্ঞান ৩য় অধ্যায়: কোষ বিভাজন',
    gallery: [
      {
        id: 'bio_s2_1',
        titleBn: 'অ্যামাইটোসিসের ধাপসমূহ',
        titleEn: 'Stepwise Amitosis Process',
        captionBn: 'নিউক্লিয়াসটি ধীরে ধীরে লম্বাটে ও ডাম্বেল আকার ধারণ করে মাঝখানে খাঁজ সৃষ্টির মাধ্যমে বিভক্ত হয়।',
        captionEn: 'Nucleus elongates, forms a constriction, and cleaves directly into two nuclei.',
        type: 'diagram'
      },
      {
        id: 'bio_s2_2',
        titleBn: 'ব্যাকটেরিয়ার দ্বি-বিভাজন (Binary Fission)',
        titleEn: 'Bacterial Binary Fission',
        captionBn: 'আদিকোষী জীবের সরল ডিএনএ অনুলিপন ও প্লাজমা মেমব্রেনের খাঁজের মাধ্যমে দ্বি-বিভাজন ঘটে।',
        captionEn: 'Direct binary division in bacteria through replication and furrowing.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'লম্বাটে নিউক্লিয়াস',
        labelEn: 'Elongated Nucleus',
        detailBn: 'বিভাজনের শুরুতে নিউক্লিয়াসটি দুপাশে প্রসারিত হয়ে ডাম্বেল আকার ধারণ করে।',
        detailEn: 'Nucleus stretches into a dumbbell shape during initiation.',
        symbol: 'Nucleus',
        badgeType: 'nucleus',
        position: { x: 50, y: 35 }
      },
      {
        labelBn: 'মধ্যবর্তী খাঁজ',
        labelEn: 'Central Furrow',
        detailBn: 'কোষের মাঝখানে সাইটোপ্লাজম ও মেমব্রেন ভেতরের দিকে সংকুচিত হয়।',
        detailEn: 'Constriction or furrow formed at the cell center.',
        symbol: 'Cleavage',
        badgeType: 'cell',
        position: { x: 50, y: 55 }
      },
      {
        labelBn: 'দুটি অপত্য কোষ',
        labelEn: 'Two Daughter Cells',
        detailBn: 'খাঁজটি গভীর হয়ে মিলিত হলে দুটি স্বাধীন অপত্য কোষ গঠিত হয়।',
        detailEn: 'Two new daughter unicellular organisms produced directly.',
        symbol: '2 Cells',
        badgeType: 'cell',
        position: { x: 50, y: 85 }
      }
    ],
    keyPoints: [
      {
        heading: 'অ্যামাইটোসিসের সংজ্ঞা',
        description: 'যে কোষ বিভাজন প্রক্রিয়ায় একটি মাতৃকোষ কোনো জটিল মাধ্যমিক পর্যায় বা স্পিন্ডল তন্তু গঠন ছাড়াই সরাসরি বিভক্ত হয়ে দুটি অপত্য কোষে পরিণত হয়, তাকে অ্যামাইটোসিস (Amitosis) বা প্রত্যক্ষ কোষ বিভাজন বলে।',
        highlight: 'কোনো স্পিন্ডল যন্ত্র গঠিত হয় না; সরাসরি নিউক্লিয়াস ও সাইটোপ্লাজম দ্বিখণ্ডিত হয়।'
      },
      {
        heading: 'বিভাজন কৌশল',
        description: '১. প্রথমে নিউক্লিয়াসটি ক্রমান্বয়ে লম্বাটে হয়ে ডাম্বেল (Dumbbell) আকার ধারণ করে।\n২. নিউক্লিয়াসের মাঝামাঝি অংশটি সরু হয়ে দুই ভাগে বিভক্ত হয়ে দুটি অপত্য নিউক্লিয়াস তৈরি করে।\n৩. একই সাথে কোষের মধ্যভাগে সাইটোপ্লাজমে খাঁজ সৃষ্টি হয় এবং ভেতরের দিকে প্রবেশ করে দুটি পৃথক কোষে রূপ নেয়।',
        highlight: 'ডাম্বেল আকৃতির নিউক্লিয়াস → মধ্যবর্তী খাঁজ সংকোচন → দুটি অপত্য কোষ।'
      },
      {
        heading: 'যেসব জীবে দেখা যায়',
        description: 'ব্যাকটেরিয়া (Bacteria), ইস্ট (Yeast), অ্যামিবা (Amoeba) ইত্যাদি এককোষী জীব এই প্রক্রিয়ায় বংশবৃদ্ধি সম্পন্ন করে। অনেক এককোষী জীবের ক্ষেত্রে একে দ্বি-বিভাজনও (Binary Fission) বলা হয়।',
        highlight: 'আদিকোষী ও সরল ইউক্যারিওটে বংশবৃদ্ধির প্রধান মাধ্যম।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার বিশেষ কৌশল',
      content: 'অ্যামাইটোসিসকে "প্রত্যক্ষ কোষ বিভাজন" বলা হয় কারণ এতে কোনো জটিল প্রোফেজ, মেটাফেজ বা স্পিন্ডল যন্ত্রের সহায়তা ছাড়া নিউক্লিয়াস সরাসরি বিভক্ত হয়ে যায়।'
    },
    speakerNotes: 'ব্যাকটেরিয়ার ক্ষেত্রে প্লাজমিড ও সার্কুলার ডিএনএ কীভাবে মেমব্রেন অ্যাটাচমেন্টের মাধ্যমে দুই মেরুতে সরে যায় তা উল্লেখ করুন।',
    recommendedInteractiveTab: 'cellDivisionLab'
  },

  // Slide 3: মাইটোসিস বা সমীকরণিক বিভাজন
  {
    id: 3,
    subject: 'biology',
    chapter: 3,
    title: 'মাইটোসিস বা সমীকরণিক বিভাজন',
    subtitle: 'Mitosis: Equational Somatic Cell Division and Cell Cycle',
    category: 'জীববিজ্ঞান ৩য় অধ্যায়: কোষ বিভাজন',
    gallery: [
      {
        id: 'bio_s3_1',
        titleBn: 'মাইটোসিসের সমীকরণিক ফলাফল (2n → 2n)',
        titleEn: 'Mitotic Equational Outcome',
        captionBn: 'মাতৃকোষের প্রতিটি ক্রোমোজোম অনুদৈর্ঘ্যে বিভক্ত হয়ে সমসংখ্যক ও সমগুণসম্পন্ন দুটি অপত্য কোষে স্থান পায়।',
        captionEn: 'Replicated sister chromatids separate equally into two diploid daughter cells.',
        type: 'diagram'
      },
      {
        id: 'bio_s3_2',
        titleBn: 'কোষচক্রের পর্যায়সমূহ (G1, S, G2 ও M পর্যায়)',
        titleEn: 'Eukaryotic Cell Cycle Stages',
        captionBn: 'কোষের প্রস্তুতিকালীন ইন্টারফেজ (Interphase: ৯০-৯৫%) এবং বিভাজনরত এম-পর্যায় (M-phase: ৫-১০%) নিয়ে কোষচক্র গঠিত।',
        captionEn: 'Cell cycle composed of preparatory Interphase and division M-phase.',
        type: 'chart'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ইন্টারফেজ',
        labelEn: 'Interphase (G1, S, G2)',
        detailBn: 'কোষ বিভাজনের পূর্বপ্রস্তুতি পর্ব; ডিএনএ রেপ্লিকেশন ও প্রয়োজনীয় প্রোটিন সংশ্লেষিত হয়।',
        detailEn: 'Preparatory phase where DNA replication occurs.',
        symbol: '90-95%',
        badgeType: 'cell',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'ক্যারিওকাইনেসিস',
        labelEn: 'Karyokinesis',
        detailBn: 'মাতৃকোষের নিউক্লিয়াসের ৫টি ধারাবাহিক পর্যায়ে বিভাজন প্রক্রিয়া।',
        detailEn: 'Division of the cell nucleus into two identical daughter nuclei.',
        symbol: 'Nucleus Div',
        badgeType: 'nucleus',
        position: { x: 70, y: 35 }
      },
      {
        labelBn: 'সাইটোকাইনেসিস',
        labelEn: 'Cytokinesis',
        detailBn: 'ক্যারওকাইনেসিসের পর কোষের সাইটোপ্লাজম বিভক্ত হয়ে দুটি স্বতন্ত্র কোষ গঠন।',
        detailEn: 'Division of cytoplasm following nuclear division.',
        symbol: 'Cytoplasm Div',
        badgeType: 'cell',
        position: { x: 70, y: 70 }
      }
    ],
    keyPoints: [
      {
        heading: 'মাইটোসিসের সংজ্ঞা',
        description: 'যে কোষ বিভাজন প্রক্রিয়ায় একটি প্রকৃত নিউক্লিয়াসযুক্ত দেহকোষ বিভাজিত হয়ে সমগুণসম্পন্ন, সমবৈশিষ্ট্যযুক্ত এবং মাতৃকোষের সমান সংখ্যক ক্রোমোজোমবিশিষ্ট দুটি অপত্য কোষ সৃষ্টি করে, তাকে মাইটোসিস (Mitosis) বলে।',
        highlight: 'ক্রোমোজোম সংখ্যা ও গুণাগুণ মাতৃকোষ ও অপত্য কোষে হুবহু সমান থাকে বলে একে সমীকরণিক বিভাজন (Equational division) বলে।'
      },
      {
        heading: 'মাইটোসিস কোথায় ঘটে?',
        description: 'উন্নত উদ্ভিদ ও প্রাণীর দৈহিক কোষে (Somatic cells) মাইটোসিস ঘটে। উদ্ভিদের বর্ধনশীল অঙ্গ যেমন— কাণ্ড ও মূলের শীর্ষস্থ ভাজক টিস্যু, ক্যাম্বিয়াম ইত্যাদিতে অত্যন্ত সক্রিয়ভাবে মাইটোসিস হয়।',
        highlight: 'দেহকোষ, উদ্ভিদের কাণ্ড ও মূলের বর্ধনশীল শীর্ষ, ভাজক টিস্যু।'
      },
      {
        heading: 'বিভাজনের দুটি প্রধান অংশ',
        description: 'মাইটোসিস সম্পূর্ণ হতে দুটি পর্যায়ক্রমিক প্রক্রিয়া ঘটে:\n১. ক্যারিওকাইনেসিস (Karyokinesis): নিউক্লিয়াসের ধারাবাহিক বিভাজন।\n২. সাইটোকাইনেসিস (Cytokinesis): সাইটোপ্লাজমের বিভাজন।',
        highlight: 'ক্যারওকাইনেসিস (৫টি পর্যায়) + সাইটোকাইনেসিস।'
      }
    ],
    callout: {
      type: 'formula',
      title: 'সমীকরণিক সমতা সূত্র',
      content: 'মাতৃকোষের ক্রোমোজোম (2n) ⟶ অপত্য কোষ ১ (2n) + অপত্য কোষ ২ (2n)। মানুষের ক্ষেত্রে: ৪৬টি ক্রোমোজোমবিশিষ্ট একটি দেহকোষ থেকে ৪৬টি ক্রোমোজোমবিশিষ্ট দুটি অপত্য দেহকোষ তৈরি হয়।'
    },
    speakerNotes: 'শিক্ষার্থীদের ইন্টারফেজের গুরুত্ব বোঝান; ইন্টারফেজ ছাড়া কোষ বিভাজিত হতে পারে না কারণ এস (S) উপপর্যায়েই ডিএনএ ডাবল হয়।',
    recommendedInteractiveTab: 'cellDivisionLab'
  },

  // Slide 4: মাইটোসিসের পর্যায় - প্রোফেজ
  {
    id: 4,
    subject: 'biology',
    chapter: 3,
    title: 'মাইটোসিসের পর্যায় ১: প্রোফেজ',
    subtitle: 'Prophase: Condensation of Chromatin and Dehydration',
    category: 'জীববিজ্ঞান ৩য় অধ্যায়: কোষ বিভাজন',
    gallery: [
      {
        id: 'bio_s4_1',
        titleBn: 'প্রোফেজ পর্যায়ের নিউক্লিয়াস',
        titleEn: 'Prophase Nucleus & Chromatin',
        captionBn: 'জল বিয়োজনের ফলে ক্রোমাটিন তন্তুগুলো পেঁচিয়ে খাটো ও মোটা হয়ে সুস্পষ্ট ক্রোমোজোমে রূপান্তরিত হয়।',
        captionEn: 'Dehydration leads to spiraling and condensation of chromosomes.',
        type: 'diagram'
      },
      {
        id: 'bio_s4_2',
        titleBn: 'ক্রোমাটিড ও সেন্ট্রোমিয়ার গঠন',
        titleEn: 'Sister Chromatids & Centromere',
        captionBn: 'প্রতিটি ক্রোমোজোম সেন্ট্রোমিয়ার ব্যতীত অনুদৈর্ঘ্যে দুটি ভগিনী ক্রোমাটিডে (Sister chromatids) বিভক্ত হয়।',
        captionEn: 'Each chromosome consists of two sister chromatids joined at the centromere.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'নিউক্লিওলাস',
        labelEn: 'Nucleolus',
        detailBn: 'প্রোফেজের শেষের দিকে নিউক্লিওলাসটি আকারে ছোট হতে থাকে এবং অবলুপ্তির পথে যায়।',
        detailEn: 'Gradual disappearance of the nucleolus.',
        symbol: 'Nucleolus',
        badgeType: 'nucleus',
        position: { x: 45, y: 35 }
      },
      {
        labelBn: 'সেন্ট্রোমিয়ার',
        labelEn: 'Centromere',
        detailBn: 'ক্রোমোজোমের দুটি ক্রোমাটিড যে অবিভক্ত প্রাথমিক খাঁজে যুক্ত থাকে।',
        detailEn: 'Primary constriction holding sister chromatids together.',
        symbol: 'Centromere',
        badgeType: 'chromosome',
        position: { x: 50, y: 55 }
      },
      {
        labelBn: 'ভগিনী ক্রোমাটিড',
        labelEn: 'Sister Chromatids',
        detailBn: 'অনুলিপনের মাধ্যমে সৃষ্ট দুটি হুবহু অভিন্ন সমান্তরাল বাহু।',
        detailEn: 'Identical duplicated chromosome strands.',
        symbol: 'Chromatid',
        badgeType: 'chromosome',
        position: { x: 65, y: 60 }
      },
      {
        labelBn: 'বিলুপ্তপ্রায় নিউক্লিয়ার মেমব্রেন',
        labelEn: 'Disintegrating Nuclear Membrane',
        detailBn: 'নিউক্লিয়ার আবরণী আস্তে আস্তে অদৃশ্য হতে শুরু করে।',
        detailEn: 'Nuclear envelope begins to break down.',
        symbol: 'Membrane',
        badgeType: 'cell',
        position: { x: 75, y: 25 }
      }
    ],
    keyPoints: [
      {
        heading: 'দীর্ঘতম প্রারম্ভিক পর্যায়',
        description: 'এটি মাইটোসিসের প্রথম এবং সবচেয়ে দীর্ঘস্থায়ী পর্যায়। এই পর্যায়ে কোষের নিউক্লিয়াস আকারে বড় হয়।',
        highlight: 'মাইটোসিসের দীর্ঘতম প্রাথমিক পর্যায়; নিউক্লিয়াস স্ফীত হয়।'
      },
      {
        heading: 'জল বিয়োজন ও ক্রোমোজোম দৃষ্টিগোচরতা',
        description: 'নিউক্লিয়াস থেকে অবিরাম জল বিয়োজন (Dehydration) ঘটতে থাকে। ফলে সূক্ষ্ম ক্রোমাটিন তন্তুগুলো ক্রমান্বয়ে কুণ্ডলিত ও ঘনীভূত হয়ে খাটো ও মোটা হতে থাকে এবং সাধারণ আলোক অণুবীক্ষণ যন্ত্রে দৃশ্যমান হয়।',
        highlight: 'জল বিয়োজন ⟶ ক্রোমাটিন ঘনীভবন ⟶ খাটো ও মোটা ক্রোমোজোম।'
      },
      {
        heading: 'ক্রোমাটিড সৃষ্টি',
        description: 'প্রতিটি ক্রোমোজোম সেন্ট্রোমিয়ার ছাড়া লম্বালম্বিভাবে বিভক্ত হয়ে দুটি সমান সুতার মতো ক্রোমাটিড গঠন করে, যা সেন্ট্রোমিয়ারে পরস্পরের সাথে যুক্ত থাকে। পর্যায়ের শেষে নিউক্লিওলাস ও নিউক্লিয়ার মেমব্রেনের অবলুপ্তি শুরু হয়।',
        highlight: 'প্রতি ক্রোমোজোমে ২টি ক্রোমাটিড সৃষ্টি ও নিউক্লিওলাসের বিলুপ্তির সূচনা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'বোর্ড পরীক্ষার টিপস',
      content: 'প্রোফেজের প্রধান লক্ষণ হলো "জল বিয়োজন" এবং ক্রোমোজোমগুলোর রঞ্জন ধারণ ক্ষমতা বৃদ্ধি পাওয়া।'
    },
    speakerNotes: 'হিস্টোন প্রোটিনের চারপাশে ডিএনএ কয়েল হয়ে কীভাবে সুপারকয়েলিং কাঠামো তৈরি করে তা চিত্র এঁকে ব্যাখ্যা করুন।',
    recommendedInteractiveTab: 'cellDivisionLab'
  },

  // Slide 5: মাইটোসিসের পর্যায় - প্রো-মেটাফেজ
  {
    id: 5,
    subject: 'biology',
    chapter: 3,
    title: 'মাইটোসিসের পর্যায় ২: প্রো-মেটাফেজ',
    subtitle: 'Prometaphase: Spindle Apparatus and Aster Rays',
    category: 'জীববিজ্ঞান ৩য় অধ্যায়: কোষ বিভাজন',
    gallery: [
      {
        id: 'bio_s5_1',
        titleBn: 'স্পিন্ডল যন্ত্রের গঠন',
        titleEn: 'Spindle Apparatus Architecture',
        captionBn: 'দুই মেরুবিশিষ্ট মাকু আকৃতির স্পিন্ডল তন্তু গঠিত হয় এবং ক্রোমোজোমের সেন্ট্রোমিয়ারের সাথে সংযুক্ত হয়।',
        captionEn: 'Bipolar spindle fibers assemble and attach to centromeric kinetochores.',
        type: 'diagram'
      },
      {
        id: 'bio_s5_2',
        titleBn: 'উদ্ভিদকোষ ও প্রাণীকোষের স্পিন্ডল তুলনা',
        titleEn: 'Plant vs Animal Spindle Contrast',
        captionBn: 'প্রাণীকোষে সেন্ট্রিওল থেকে অ্যাস্টার রশ্মি বিচ্ছুরিত হয়, কিন্তু উদ্ভিদকোষে সেন্ট্রিওল ছাড়াই স্পিন্ডল তৈরি হয়।',
        captionEn: 'Animal cells form aster rays from centrioles; plant cells lack centrioles.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'স্পিন্ডল মেরু',
        labelEn: 'Spindle Pole',
        detailBn: 'স্পিন্ডল যন্ত্রের উত্তর ও দক্ষিণ প্রান্ত বা দুই বিপরীত মেরু।',
        detailEn: 'Opposite poles of the spindle apparatus.',
        symbol: 'Pole',
        badgeType: 'spindle',
        position: { x: 50, y: 15 }
      },
      {
        labelBn: 'আকর্ষণ বা ক্রোমোজোমাল তন্তু',
        labelEn: 'Chromosomal / Traction Fiber',
        detailBn: 'যেসব স্পিন্ডল তন্তু ক্রোমোজোমের সেন্ট্রোমিয়ারের কাইনেটোকোরে যুক্ত হয়।',
        detailEn: 'Spindle fibers attaching directly to chromosome kinetochores.',
        symbol: 'Traction',
        badgeType: 'spindle',
        position: { x: 40, y: 45 }
      },
      {
        labelBn: 'স্পিন্ডল তন্তু',
        labelEn: 'Continuous Spindle Fiber',
        detailBn: 'যেসব তন্তু এক মেরু থেকে অপর মেরু পর্যন্ত বিস্তৃত থাকে কিন্তু ক্রোমোজোম ধরে না।',
        detailEn: 'Continuous fibers extending from pole to pole.',
        symbol: 'Spindle',
        badgeType: 'spindle',
        position: { x: 70, y: 45 }
      },
      {
        labelBn: 'অ্যাস্টার রশ্মি (প্রাণীকোষ)',
        labelEn: 'Aster Rays',
        detailBn: 'প্রাণীকোষের সেন্ট্রোসোম থেকে বিচ্ছুরিত তারকাসদৃশ মাইক্রোটিউবিউল রশ্মি।',
        detailEn: 'Radiating star-like microtubule rays in animal cells.',
        symbol: 'Aster',
        badgeType: 'cell',
        position: { x: 50, y: 90 }
      }
    ],
    keyPoints: [
      {
        heading: 'স্বল্পস্থায়ী পরিবর্তনশীল পর্যায়',
        description: 'এটি মাইটোসিসের দ্বিতীয় ও অত্যন্ত স্বল্পস্থায়ী রূপান্তর পর্যায়। এই পর্যায়ে উদ্ভিদকোষে প্রোটিন নির্মিত দুই মেরুবিশিষ্ট মাকু আকৃতির স্পিন্ডল যন্ত্র (Spindle apparatus) সৃষ্টি হয়।',
        highlight: 'দুই মেরুবিশিষ্ট মাকু আকৃতির স্পিন্ডল যন্ত্রের আত্মপ্রকাশ।'
      },
      {
        heading: 'আকর্ষণ তন্তু ও ক্রোমোজোমের নৃত্য',
        description: 'স্পিন্ডল যন্ত্রের যেসব তন্তু ক্রোমোজোমের সেন্ট্রোমিয়ারের সাথে যুক্ত হয়, সেগুলোকে আকর্ষণ তন্তু বা ক্রোমোজোমাল তন্তু (Traction/Chromosomal fibers) বলে। তন্তুগুলোর সংকোচনের ফলে ক্রোমোজোমগুলোতে একধরনের দোলন বা "ক্রোমোজোম নৃত্য" (Chromosome dance) দেখা যায়।',
        highlight: 'ক্রোমোজোমাল তন্তুর আকর্ষণ ও বিষুবীয় অঞ্চলের দিকে ক্রোমোজোমের সরণ।'
      },
      {
        heading: 'নিউক্লিওলাস ও মেমব্রেনের অবলুপ্তি',
        description: 'প্রো-মেটাফেজের শেষভাগে নিউক্লিয়ার মেমব্রেন ও নিউক্লিওলাস সম্পূর্ণভাবে বিলুপ্ত হয়ে যায়। প্রাণীকোষে সেন্ট্রিওল থেকে অ্যাস্টার রশ্মি (Aster rays) বিচ্ছুরিত হয়ে স্পিন্ডল মেরু নির্দেশ করে।',
        highlight: 'নিউক্লিয়ার মেমব্রেন ও নিউক্লিওলাসের পূর্ণ অবলুপ্তি।'
      }
    ],
    callout: {
      type: 'info',
      title: 'উদ্ভিদ বনাম প্রাণীকোষের পার্থক্য',
      content: 'উদ্ভিদকোষে সেন্ট্রিওল থাকে না, তাই অ্যাস্টার রশ্মি ছাড়াই সাইটোপ্লাজমীয় মাইক্রোটিউবিউল থেকে অ্যানাস্ট্রাল স্পিন্ডল গঠিত হয়। প্রাণীকোষে সেন্ট্রিওলের কারণে অ্যাম্ফিয়েস্ট্রাল স্পিন্ডল গঠিত হয়।'
    },
    speakerNotes: 'কাইনেটোকোর প্রোটিন কমপ্লেক্স কীভাবে এটিপি ভেঙে মাইক্রোটিউবিউল ট্র্যাকশনে শক্তি যোগায় তা ব্যাখ্যা করুন।',
    recommendedInteractiveTab: 'cellDivisionLab'
  },

  // Slide 6: মাইটোসিসের পর্যায় - মেটাফেজ
  {
    id: 6,
    subject: 'biology',
    chapter: 3,
    title: 'মাইটোসিসের পর্যায় ৩: মেটাফেজ',
    subtitle: 'Metaphase: Chromosome Alignment at the Equatorial Plate',
    category: 'জীববিজ্ঞান ৩য় অধ্যায়: কোষ বিভাজন',
    gallery: [
      {
        id: 'bio_s6_1',
        titleBn: 'মেটাফেজ প্লেটে ক্রোমোজোমের বিন্যাস',
        titleEn: 'Equatorial Metaphase Plate',
        captionBn: 'সকল ক্রোমোজোম স্পিন্ডল যন্ত্রের বিষুবীয় অঞ্চলে অবস্থান নেয়; একে মেটাকাইনেসিস বলে।',
        captionEn: 'All chromosomes align at the equatorial plane (Metakinesis).',
        type: 'diagram'
      },
      {
        id: 'bio_s6_2',
        titleBn: 'সর্বাধিক খাটো ও স্পষ্ট ক্রোমোজোম',
        titleEn: 'Maximum Chromosomal Condensation',
        captionBn: 'মেটাফেজে ক্রোমোজোমগুলো সর্বাধিক খাটো, মোটা ও দৃষ্টিগোচর থাকে। ক্যারিওটাইপ নির্ণয়ের আদর্শ পর্যায়।',
        captionEn: 'Chromosomes reach maximum condensation; ideal stage for karyotyping.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'বিষুবীয় অঞ্চল / মেটাফেজ প্লেট',
        labelEn: 'Equatorial Plate',
        detailBn: 'স্পিন্ডল যন্ত্রের দুই মেরুর ঠিক মাঝামাঝি সমতল রেখা যেখানে ক্রোমোজোমগুলো সাজানো থাকে।',
        detailEn: 'Central plane midway between the two spindle poles.',
        symbol: 'Equator',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
      {
        labelBn: 'সুপার কয়েল্ড ক্রোমোজোম',
        labelEn: 'Supercoiled Chromosome',
        detailBn: 'কণ্ডেনসেশনের চূড়ান্ত ধাপে থাকায় ক্রোমাটিডদ্বয় স্পষ্টতম দেখা যায়।',
        detailEn: 'Maximally condensed and distinctly visible chromosome.',
        symbol: 'Condense',
        badgeType: 'chromosome',
        position: { x: 35, y: 50 }
      },
      {
        labelBn: 'বিভাজনোন্মুখ সেন্ট্রোমিয়ার',
        labelEn: 'Dividing Centromere',
        detailBn: 'মেটাফেজের শেষভাগে প্রতিটি সেন্ট্রোমিয়ার লম্বালম্বিভাবে দুই খণ্ডে বিভক্ত হওয়ার সূচনা করে।',
        detailEn: 'Centromere prepares to split longitudinally into two.',
        symbol: 'Split Start',
        badgeType: 'chromosome',
        position: { x: 65, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'মেটাকাইনেসিস (Metakinesis)',
        description: 'মেটাফেজের শুরুতে সকল ক্রোমোজোম স্পিন্ডল যন্ত্রের বিষুবীয় অঞ্চলে (Equatorial plane) এসে সারিবদ্ধভাবে সজ্জিত হয়। ক্রোমোজোমগুলোর বিষুবীয় অঞ্চলে এই বিন্যস্ত হওয়াকে মেটাকাইনেসিস বলে।',
        highlight: 'ক্রোমোজোমের বিষুবীয় সমতলে বিন্যাসকে মেটাকাইনেসিস বলে।'
      },
      {
        heading: 'সর্বাধিক খাটো ও মোটা হওয়া (Condensation)',
        description: 'এই পর্যায়ে ক্রোমোজোমগুলো সর্বাধিক সংকুচিত, খাটো ও মোটা হয়। ফলে আলোক অণুবীক্ষণ যন্ত্রে ক্রোমোজোমগুলোর সংখ্যা, আকার ও আকৃতি (Karyotype) সবচেয়ে স্পষ্টভাবে গণনা ও বিশ্লেষণ করা যায়।',
        highlight: 'ক্রোমোজোম সর্বাধিক খাটো ও মোটা; সংখ্যা গণনার উপযুক্ত পর্যায়।'
      },
      {
        heading: 'সেন্ট্রোমিয়ারের বিভাজন সূচনা',
        description: 'ক্রোমোজোমের সেন্ট্রোমিয়ার বিষুবীয় অঞ্চলে এবং বাহু দুটি মেরুমুখী হয়ে অবস্থান করে। এই পর্যায়ের শেষভাগে প্রতিটি সেন্ট্রোমিয়ার পুরোপুরি বিভক্ত হয়ে দুটি স্বতন্ত্র সেন্ট্রোমিয়ারে পরিণত হওয়ার সূচনা ঘটে।',
        highlight: 'মেটাফেজের সমাপ্তিতে সেন্ট্রোমিয়ার বিভাজিত হয়ে প্রতিটি ক্রোমাটিড অপত্য ক্রোমোজোমে পরিণত হয়।'
      }
    ],
    callout: {
      type: 'warning',
      title: 'গুরুত্বপূর্ণ এমসিকিউ ফ্যাক্ট',
      content: 'প্রশ্ন আসে: "কোষ বিভাজনের কোন পর্যায়ে ক্রোমোজোম সবচেয়ে খাটো ও মোটা হয় এবং সেন্ট্রোমিয়ার বিভক্ত হয়?" উত্তর: মেটাফেজ।'
    },
    speakerNotes: 'কলচিসিন (Colchicine) নামক রাসায়নিক প্রয়োগ করে কীভাবে মেটাফেজ প্লেটে ক্রোমোজোম আটকে রেখে ক্যারিওটাইপ করা হয় তা তুলে ধরুন।',
    recommendedInteractiveTab: 'cellDivisionLab'
  },

  // Slide 7: মাইটোসিসের পর্যায় - অ্যানাফেজ
  {
    id: 7,
    subject: 'biology',
    chapter: 3,
    title: 'মাইটোসিসের পর্যায় ৪: অ্যানাফেজ',
    subtitle: 'Anaphase: Poleward Migration and Chromosomal Shapes',
    category: 'জীববিজ্ঞান ৩য় অধ্যায়: কোষ বিভাজন',
    gallery: [
      {
        id: 'bio_s7_1',
        titleBn: 'অপত্য ক্রোমোজোমের মেরুমুখী চলন',
        titleEn: 'Poleward Migration of Daughter Chromosomes',
        captionBn: 'সেন্ট্রোমিয়ার অগ্রগামী এবং বাহুদ্বয় অনুগামী হয়ে দুই বিপরীত মেরুর দিকে ধাবিত হয়।',
        captionEn: 'Centromeres lead towards poles while arms drag behind.',
        type: 'diagram'
      },
      {
        id: 'bio_s7_2',
        titleBn: 'সেন্ট্রোমিয়ারের অবস্থানের ভিত্তিতে ৪টি রূপ',
        titleEn: 'Chromosomal Morphology (V, L, J, I Shapes)',
        captionBn: 'মেটাসেন্ট্রিক (V), সাব-মেটাসেন্ট্রিক (L), অ্যাক্রোসেন্ট্রিক (J), এবং টেলোসেন্ট্রিক (I) আকৃতি।',
        captionEn: 'Metacentric (V), Sub-metacentric (L), Acrocentric (J), Telocentric (I).',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'অপত্য ক্রোমোজোম',
        labelEn: 'Daughter Chromosome',
        detailBn: 'সেন্ট্রোমিয়ার বিভক্ত হয়ে স্বতন্ত্র সেন্ট্রোমিয়ারযুক্ত দুটি পৃথক ক্রোমোজোম।',
        detailEn: 'Separated sister chromatids now termed daughter chromosomes.',
        symbol: 'Daughter Chr',
        badgeType: 'chromosome',
        position: { x: 50, y: 35 }
      },
      {
        labelBn: 'মেটাসেন্ট্রিক (V)',
        labelEn: 'Metacentric (V-shape)',
        detailBn: 'সেন্ট্রোমিয়ার ঠিক মাঝখানে থাকায় দুই বাহু সমান (V এর মতো)।',
        detailEn: 'Centromere exactly in the middle with equal arms.',
        symbol: 'V-shape',
        badgeType: 'chromosome',
        position: { x: 25, y: 25 }
      },
      {
        labelBn: 'সাব-মেটাসেন্ট্রিক (L)',
        labelEn: 'Sub-metacentric (L-shape)',
        detailBn: 'সেন্ট্রোমিয়ার মধ্যবিন্দুর সামান্য একপাশে থাকায় একটি বাহু কিছুটা বড় (L এর মতো)।',
        detailEn: 'Centromere slightly off-center with unequal arms.',
        symbol: 'L-shape',
        badgeType: 'chromosome',
        position: { x: 75, y: 25 }
      },
      {
        labelBn: 'অ্যাক্রোসেন্ট্রিক (J) ও টেলোসেন্ট্রিক (I)',
        labelEn: 'Acrocentric (J) & Telocentric (I)',
        detailBn: 'প্রান্তের কাছাকাছি সেন্ট্রোমিয়ার থাকলে J এবং একেবারে প্রান্তে থাকলে I আকার ধারণ করে।',
        detailEn: 'Near terminal centromere forms J-shape, terminal forms I-shape.',
        symbol: 'J & I',
        badgeType: 'chromosome',
        position: { x: 50, y: 80 }
      }
    ],
    keyPoints: [
      {
        heading: 'অপত্য ক্রোমোজোম সৃষ্টি (Daughter Chromosomes)',
        description: 'অ্যানাফেজের শুরুতে প্রতিটি ক্রোমোজোমের সেন্ট্রোমিয়ার সম্পূর্ণ দুভাগে বিভক্ত হয়ে যায়। ফলে প্রতিটি ক্রোমাটিড নিজস্ব স্বতন্ত্র সেন্ট্রোমিয়ার লাভ করে অপত্য ক্রোমোজোমে (Daughter chromosome) পরিণত হয়।',
        highlight: 'সেন্ট্রোমিয়ার পূর্ণ বিভক্ত ⟶ প্রতিটি ক্রোমাটিড স্বতন্ত্র অপত্য ক্রোমোজোম।'
      },
      {
        heading: 'মেরুমুখী চলন (Poleward Movement)',
        description: 'স্পিন্ডল তন্তুর সংকোচন এবং ইন্টারজোনাল তন্তুর প্রসারণের কারণে অপত্য ক্রোমোজোমগুলোর অর্ধেক উত্তর মেরুর দিকে এবং বাকি অর্ধেক দক্ষিণ মেরুর দিকে অগ্রসর হয়। চলনকালে সেন্ট্রোমিয়ার অগ্রগামী (Leading) এবং বাহুগুলো অনুগামী (Trailing) থাকে।',
        highlight: 'সেন্ট্রোমিয়ার সর্বদা মেরুর দিকে অগ্রগামী থাকে।'
      },
      {
        heading: 'V, L, J, I আকৃতি ধারণ',
        description: 'সেন্ট্রোমিয়ারের অবস্থানের ওপর ভিত্তি করে মেরুমুখী চলন্ত ক্রোমোজোমগুলো ইংরেজি অক্ষরের মতো দেখায়:\n• মেটাসেন্ট্রিক = V-আকার (মধ্যখানে সেন্ট্রোমিয়ার)\n• সাব-মেটাসেন্ট্রিক = L-আকার (উপ-মধ্যস্থানে)\n• অ্যাক্রোসেন্ট্রিক = J-আকার (প্রান্তের কাছাকাছি)\n• টেলোসেন্ট্রিক = I-আকার (একেবারে প্রান্তে)',
        highlight: 'V (মেটাসেন্ট্রিক), L (সাব-মেটাসেন্ট্রিক), J (অ্যাক্রোসেন্ট্রিক), I (টেলোসেন্ট্রিক)।'
      }
    ],
    tableData: {
      caption: 'সেন্ট্রোমিয়ারের অবস্থান অনুযায়ী ক্রোমোজোমের রূপভেদ',
      headers: ['নাম', 'সেন্ট্রোমিয়ারের অবস্থান', 'বাহুর অনুপাত', 'চলনকালীন ইংরেজি বর্ণ'],
      rows: [
        ['মেটাসেন্ট্রিক', 'ঠিক কেন্দ্রে/মাঝামাঝি', 'দুটি বাহু পরস্পর সমান', 'V-আকার'],
        ['সাব-মেটাসেন্ট্রিক', 'কেন্দ্রের কিছুটা একপাশে', 'একটি বাহু সামান্য দীর্ঘ', 'L-আকার'],
        ['অ্যাক্রোসেন্ট্রিক', 'একপ্রান্তের খুব কাছাকাছি', 'একটি বাহু খুব ছোট, অপরটি বড়', 'J-আকার'],
        ['টেলোসেন্ট্রিক', 'একেবারে শীর্ষে/প্রান্তে', 'কেবল একটি দৃশ্যমান বাহু', 'I-আকার']
      ]
    },
    callout: {
      type: 'tip',
      title: 'পরীক্ষার অবধারিত প্রশ্ন',
      content: 'মনে রাখার সহজ সূত্র: "V-L-J-I" = "মেটা-সাবমেটা-অ্যাক্রো-টেলো"। অ্যানাফেজেই কেবল এই আকৃতিগুলো দৃশ্যমান হয়।'
    },
    speakerNotes: 'ডাইনিন ও কাইনেসিন মোটর প্রোটিন এটিপি ব্যবহার করে কীভাবে মাইক্রোটিউবিউলে হেঁটে ক্রোমোজোমকে মেরুতে টানে তা শিক্ষার্থীদের সহজ ভাষায় ব্যাখ্যা করুন।',
    recommendedInteractiveTab: 'cellDivisionLab'
  },

  // Slide 8: মাইটোসিসের পর্যায় - টেলোফেজ ও সাইটোকাইনেসিস
  {
    id: 8,
    subject: 'biology',
    chapter: 3,
    title: 'মাইটোসিসের পর্যায় ৫: টেলোফেজ ও সাইটোকাইনেসিস',
    subtitle: 'Telophase and Cytokinesis: Nuclear Reformation & Cytoplasmic Cleavage',
    category: 'জীববিজ্ঞান ৩য় অধ্যায়: কোষ বিভাজন',
    gallery: [
      {
        id: 'bio_s8_1',
        titleBn: 'টেলোফেজ ও নিউক্লিয়াসের পুনর্গঠন',
        titleEn: 'Telophase Nuclear Envelope Reformation',
        captionBn: 'অপত্য ক্রোমোজোমগুলো দুই বিপরীত মেরুতে পৌঁছে জলযোজনের মাধ্যমে পুনরায় সূক্ষ্ম ক্রোমাটিন জালিকা গঠন করে।',
        captionEn: 'Chromosomes uncoil into chromatin; nuclear membrane & nucleolus reappear.',
        type: 'diagram'
      },
      {
        id: 'bio_s8_2',
        titleBn: 'সাইটোকাইনেসিস: উদ্ভিদকোষ বনাম প্রাণীকোষ',
        titleEn: 'Cytokinesis: Cell Plate vs Cleavage Furrow',
        captionBn: 'উদ্ভিদকোষে ফ্র্যাগমোপ্লাস্ট জমে কোষপ্লেট (Cell plate) তৈরি হয়; প্রাণীকোষে মেমব্রেন ফারোয়িং ঘটে।',
        captionEn: 'Cell plate formation in plants vs cleavage furrowing in animal cells.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'অপত্য নিউক্লিয়াস',
        labelEn: 'Daughter Nuclei',
        detailBn: 'দুই মেরুতে গঠিত দুটি সমগুণসম্পন্ন ও সমসংখ্যক ক্রোমোজোমধারী নিউক্লিয়াস।',
        detailEn: 'Two identical daughter nuclei reconstructed at opposite poles.',
        symbol: 'Daughter Nuclei',
        badgeType: 'nucleus',
        position: { x: 50, y: 25 }
      },
      {
        labelBn: 'কোষপ্লেট (উদ্ভিদকোষ)',
        labelEn: 'Cell Plate (Plant)',
        detailBn: 'গলগি বডি ও এন্ডোপ্লাজমিক রেটিকুলাম থেকে ফ্র্যাগমোপ্লাস্ট জমে সৃষ্ট প্রাথমিক কোষপ্রাচীর।',
        detailEn: 'Cell plate assembled by Golgi-derived phragmoplast vesicles.',
        symbol: 'Cell Plate',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
      {
        labelBn: 'ক্লিভেজ ফারো (প্রাণীকোষ)',
        labelEn: 'Cleavage Furrow (Animal)',
        detailBn: 'অ্যাক্টিন ও মায়োসিন মাইক্রোফিলামেন্ট রিং সংকুচিত হয়ে খাঁজ সৃষ্টি করে।',
        detailEn: 'Contractile actin-myosin ring pinching the animal plasma membrane.',
        symbol: 'Furrow',
        badgeType: 'cell',
        position: { x: 75, y: 50 }
      },
      {
        labelBn: 'পুনর্গঠিত নিউক্লিওলাস',
        labelEn: 'Reformed Nucleolus',
        detailBn: 'স্যাটেলাইট ক্রোমোজোমের নর (NOR) অঞ্চল থেকে নিউক্লিওলাস আবার আবির্ভূত হয়।',
        detailEn: 'Nucleolus reappears from the nucleolar organizer region (NOR).',
        symbol: 'Nucleolus',
        badgeType: 'nucleus',
        position: { x: 50, y: 75 }
      }
    ],
    keyPoints: [
      {
        heading: 'টেলোফেজ (ক্যারওকাইনেসিসের সমাপ্তি)',
        description: 'টেলোফেজ হলো প্রোফেজের ঠিক বিপরীত পর্যায়। এই পর্যায়ে অপত্য ক্রোমোজোমগুলো বিপরীত মেরুতে স্থির অবস্থান নেয় এবং এদের চারদিকে জলযোজন (Hydration) শুরু হয়। ক্রোমোজোমগুলো খুলে গিয়ে আবার সরু ও লম্বা হয়ে ক্রোমাটিন জালিকায় রূপান্তরিত হয়।',
        highlight: 'টেলোফেজ = প্রোফেজের বিপরীত পর্যায়; জলযোজন ঘটে।'
      },
      {
        heading: 'নিউক্লিওলাস ও মেমব্রেনের পুনরাবির্ভাব',
        description: 'প্রতিটি মেরুতে ক্রোমোজোমের চারিদিকে এন্ডোপ্লাজমিক জালিকার সহায়তায় নতুন নিউক্লিয়ার আবরণী এবং নির্দিষ্ট ক্রোমোজোমের নিউক্লিওলার অর্গানাইজার অঞ্চল থেকে নিউক্লিওলাস পুনর্গঠিত হয়। ফলে দুটি পূর্ণাঙ্গ অপত্য নিউক্লিয়াস সৃষ্টি হয়।',
        highlight: 'নিউক্লিয়ার মেমব্রেন ও নিউক্লিওলাস পুনরায় ফিরে আসে।'
      },
      {
        heading: 'সাইটোকাইনেসিস (সাইটোপ্লাজম বিভাজন)',
        description: 'ক্যারওকাইনেসিসের শেষে সাইটোপ্লাজম বিভক্ত হওয়ার প্রক্রিয়াকে সাইটোকাইনেসিস বলে:\n• উদ্ভিদকোষে: বিষুবীয় তলে ফ্র্যাগমোপ্লাস্ট ও ভেসিকল জমা হয়ে কোষপ্লেট (Cell plate) এবং পরবর্তীতে কোষপ্রাচীর গঠন করে।\n• প্রাণীকোষে: কোষের প্লাজমা মেমব্রেন মাঝ বরাবর খাঁজ (Furrowing/Cleavage) সৃষ্টি করে সংকুচিত হয়ে দুভাগে বিভক্ত হয়।',
        highlight: 'উদ্ভিদকোষে কোষপ্লেট (Cell plate); প্রাণীকোষে ক্লিভেজ ফারো (Furrowing)।'
      }
    ],
    callout: {
      type: 'warning',
      title: 'মুক্ত নিউক্লিয়ার বিভাজন (Free Nuclear Division)',
      content: 'যদি ক্যারওকাইনেসিস সম্পন্ন হওয়ার পরও সাইটোকাইনেসিস না ঘটে, তবে কোষে বহু নিউক্লিয়াস সৃষ্টি হয়। উদ্ভিদে এই অবস্থাকে সিনোসাইট (Coenocyte) এবং প্রাণীতে সিনসিটিয়াম (Syncytium) বলে (যেমন— ডাবের তরল শস্য)।'
    },
    speakerNotes: 'ডাবের পানির এন্ডোস্পার্ম বহু নিউক্লিয়াসযুক্ত হওয়ার কারণ যে সাইটোকাইনেসিসহীন ক্যারওকাইনেসিস, এই বাস্তব উদাহরণটি মনে করিয়ে দিন।',
    recommendedInteractiveTab: 'cellDivisionLab'
  },

  // Slide 9: মাইটোসিসের গুরুত্ব ও তাৎপর্য
  {
    id: 9,
    subject: 'biology',
    chapter: 3,
    title: 'মাইটোসিসের গুরুত্ব ও তাৎপর্য',
    subtitle: 'Biological Significance of Mitosis: Growth, Repair & Continuity',
    category: 'জীববিজ্ঞান ৩য় অধ্যায়: কোষ বিভাজন',
    gallery: [
      {
        id: 'bio_s9_1',
        titleBn: 'বহুকোষী জীবের বৃদ্ধি ও বিকাশ',
        titleEn: 'Multicellular Growth from Zygote',
        captionBn: 'এককোষী জাইগোট থেকে মাইটোসিস বিভাজনের মাধ্যমে ট্রিলিয়ন ট্রিলিয়ন কোষবিশিষ্ট পূর্ণাঙ্গ মানবদেহ গড়ে ওঠে।',
        captionEn: 'Trillions of cells formed from a single diploid zygote via mitosis.',
        type: 'diagram'
      },
      {
        id: 'bio_s9_2',
        titleBn: 'ক্ষতপূরণ ও কোষ প্রতিস্থাপন',
        titleEn: 'Wound Healing and Tissue Regeneration',
        captionBn: 'ত্বকের কাটাছেঁড়া, রক্তকোষের ক্ষয়পূরণ এবং অঙ্গের পুনরুৎপাদনে মাইটোসিস সক্রিয় ভূমিকা পালন করে।',
        captionEn: 'Mitosis regenerates damaged skin, replaces dead blood cells and heals wounds.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'দেহবৃদ্ধি',
        labelEn: 'Body Growth',
        detailBn: 'কোষের সংখ্যাবৃদ্ধির মাধ্যমে জীবের সামগ্রিক অঙ্গপ্রত্যঙ্গের আয়তন বৃদ্ধি।',
        detailEn: 'Increase in organ size and biomass through cell proliferation.',
        symbol: 'Growth',
        badgeType: 'cell',
        position: { x: 30, y: 35 }
      },
      {
        labelBn: 'জিনগত সমতা রক্ষা',
        labelEn: 'Genetic Stability',
        detailBn: 'মাতৃকোষ ও অপত্য কোষের ক্রোমোজোম সংখ্যা ও গুণাগুণ হুবহু এক রাখা।',
        detailEn: 'Maintaining identical chromosome number and gene fidelity.',
        symbol: '2n = 2n',
        badgeType: 'gene',
        position: { x: 70, y: 35 }
      },
      {
        labelBn: 'ক্ষত নিরাময়',
        labelEn: 'Wound Repair',
        detailBn: 'ক্ষতিগ্রস্ত টিস্যু পূরণ করে ত্বক ও নালীপ্রাচীরের মেরামত।',
        detailEn: 'Repairing lost or injured epidermal and vascular tissue.',
        symbol: 'Repair',
        badgeType: 'cell',
        position: { x: 50, y: 75 }
      }
    ],
    keyPoints: [
      {
        heading: '১. দৈহিক বৃদ্ধি ও বিকাশ',
        description: 'সকল বহুকোষী জীব এককোষী জাইগোট (Zygote) হিসেবে জীবন শুরু করে। মাইটোসিস বিভাজনের ফলেই একটি কোষ থেকে লক্ষ-কোটি কোষ সৃষ্টি হয়ে ভ্রূণ এবং পূর্ণাঙ্গ উদ্ভিদে বা প্রাণীতে পরিণত হয়।',
        highlight: 'এককোষী জাইগোট থেকে বহুকোষী জটিল জীবদেহের বিকাশ ঘটে।'
      },
      {
        heading: '২. ক্রোমোজোমের সংখ্যা ও গুণগত সমতা রক্ষা',
        description: 'মাইটোসিসে মাতৃকোষ ও অপত্য কোষে ক্রোমোজোম সংখ্যা ও ডিএনএ উপাদান হুবহু এক থাকে। ফলে জীবের প্রতিটি দেহকোষ একই জিনগত বৈশিষ্ট্য ধারণ করে।',
        highlight: 'জিনগত বৈশিষ্ট্য ও ক্রোমোজোম সংখ্যার ধ্রুবতা বজায় থাকে।'
      },
      {
        heading: '৩. ক্ষতপূরণ ও কোষ প্রতিস্থাপন',
        description: 'দেহের কোনো স্থান কেটে গেলে বা ক্ষতিগ্রস্ত হলে মাইটোসিসের মাধ্যমে নতুন কোষ তৈরি হয়ে ক্ষত নিরাময় করে। মানুষের লোহিত রক্তকণিকা (আয়ু ১২০ দিন), অন্ত্রের এপিথেলিয়াল কোষ ইত্যাদি নিয়মিত মাইটোসিস দ্বারা প্রতিস্থাপিত হয়।',
        highlight: 'ক্ষতপূরণ, পুনরুৎপাদন এবং বয়োবৃদ্ধ কোষের প্রতিস্থাপন।'
      },
      {
        heading: '৪. নির্দিষ্ট আকার-আয়তন রক্ষা',
        description: 'কোষের নিউক্লিয়াস ও সাইটোপ্লাজমের অনুপাত (Karyoplasmic ratio) নিয়ন্ত্রণ করে কোষের নির্দিষ্ট স্বাভাবিক আকার ও ভারসাম্য রক্ষা করে।',
        highlight: 'নিউক্লিয়াস ও সাইটোপ্লাজমের ভারসাম্য রক্ষা।'
      }
    ],
    callout: {
      type: 'info',
      title: 'রক্তকোষ প্রতিস্থাপনের তথ্য',
      content: 'মানুষের দেহে প্রতি সেকেন্ডে প্রায় ২০-২৫ লক্ষ লোহিত রক্তকণিকা বিনষ্ট হয় এবং সমসংখ্যক নতুন রক্তকণিকা অস্থিমজ্জার স্টেম সেলে মাইটোসিস বিভাজনের মাধ্যমে তৈরি হয়।'
    },
    speakerNotes: 'মাইটোসিস না থাকলে যে বহুকোষী জীবনের অস্তিত্বই অসম্ভব হতো, তা বিভিন্ন অঙ্গের উদাহরণ দিয়ে শিক্ষার্থীদের সামনে তুলে ধরুন।',
    recommendedInteractiveTab: 'cellDivisionLab'
  },

  // Slide 10: অনিয়ন্ত্রিত মাইটোসিস, টিউমার ও ক্যান্সার
  {
    id: 10,
    subject: 'biology',
    chapter: 3,
    title: 'অনিয়ন্ত্রিত মাইটোসিস, টিউমার ও ক্যান্সার',
    subtitle: 'Uncontrolled Mitosis: Cell Cycle Dysregulation, Tumors & Cancer',
    category: 'জীববিজ্ঞান ৩য় অধ্যায়: কোষ বিভাজন',
    gallery: [
      {
        id: 'bio_s10_1',
        titleBn: 'স্বাভাবিক বনাম অনিয়ন্ত্রিত কোষ বিভাজন',
        titleEn: 'Normal vs Cancerous Proliferation',
        captionBn: 'স্বাভাবিক কোষে সাইকেল চেকপয়েন্ট থাকে, কিন্তু মিউটেশনের ফলে ক্যান্সার কোষে অবিরাম বিভাজন ঘটে।',
        captionEn: 'Loss of cell cycle checkpoint control leads to erratic tumor formation.',
        type: 'diagram'
      },
      {
        id: 'bio_s10_2',
        titleBn: 'টিউমার থেকে ম্যালিগন্যান্ট ক্যান্সারে রূপান্তর',
        titleEn: 'Benign Tumor to Malignant Metastasis',
        captionBn: 'বিনাইন টিউমার সুনির্দিষ্ট স্থানে থাকে, কিন্তু ম্যালিগন্যান্ট ক্যান্সার কোষ রক্ত ও লসিকায় ছড়িয়ে পড়ে (Metastasis)।',
        captionEn: 'Malignant cancer cells spread through blood and lymph vessels (Metastasis).',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'অনকোজিন ও মিউটেশন',
        labelEn: 'Oncogene Activation',
        detailBn: 'প্রোটো-অনকোজিন পরিবর্তিত হয়ে অস্বাভাবিক সক্রিয় অনকোজিনে রূপ নিলে অবিরাম সিগন্যাল দেয়।',
        detailEn: 'Mutated proto-oncogenes signaling continuous division.',
        symbol: 'Oncogene',
        badgeType: 'gene',
        position: { x: 30, y: 35 }
      },
      {
        labelBn: 'টিউমার পিণ্ড (Tumor Mass)',
        labelEn: 'Tumor Mass',
        detailBn: 'নিয়ন্ত্রণহীন বিভাজনে সৃষ্ট কোষের অতিরিক্ত অস্বাভাবিক পিণ্ড।',
        detailEn: 'Abnormal mass of tissue formed by uncontrolled cell division.',
        symbol: 'Tumor',
        badgeType: 'cell',
        position: { x: 50, y: 65 }
      },
      {
        labelBn: 'মেটাস্ট্যাসিস (Metastasis)',
        labelEn: 'Metastasis',
        detailBn: 'ক্যান্সার কোষ রক্তস্রোতে বাহিত হয়ে দেহের অন্যান্য অঙ্গে ছড়িয়ে দ্বিতীয় টিউমার তৈরি করে।',
        detailEn: 'Dissemination of malignant cells to distant bodily organs.',
        symbol: 'Metastasis',
        badgeType: 'cell',
        position: { x: 75, y: 40 }
      }
    ],
    keyPoints: [
      {
        heading: 'কোষচক্রের নিয়ন্ত্রণ নষ্ট হওয়া',
        description: 'স্বাভাবিক মাইটোসিস সাইক্লিন (Cyclin) ও সিডিকে (CDK) প্রোটিন দ্বারা সুনিয়ন্ত্রিত থাকে। কিন্তু মিউটেশন বা কার্সিনোজেনের প্রভাবে কোষচক্রের নিয়ন্ত্রণকারী চেকপয়েন্ট (Checkpoints) নষ্ট হয়ে গেলে কোষ দ্রুত ও নিয়ন্ত্রণহীনভাবে বিভাজিত হতে থাকে।',
        highlight: 'সাইক্লিন-সিডিকে নিয়ন্ত্রণ ব্যবস্থা বিকল হলে অনিয়ন্ত্রিত মাইটোসিস ঘটে।'
      },
      {
        heading: 'টিউমার (Tumor) ও প্রকারভেদ',
        description: 'অনিয়ন্ত্রিত বিভাজনের ফলে সৃষ্ট অস্বাভাবিক কোষপিণ্ডকে টিউমার (Tumor) বলে।\n• বিনাইন টিউমার (Benign): পার্শ্ববর্তী কলায় ছড়ায় না, তুলনামূলক কম ক্ষতিকর।\n• ম্যালিগন্যান্ট টিউমার (Malignant): সংলগ্ন কলা ভেদ করে ছড়ায়; এটিই মূলত ক্যান্সার (Cancer)।',
        highlight: 'বিনাইন (সীমাবদ্ধ) বনাম ম্যালিগন্যান্ট (ঘাতক ক্যান্সার)।'
      },
      {
        heading: 'ক্যান্সারের কারণ ও মেটাস্ট্যাসিস',
        description: 'বিভিন্ন কার্সিনোজেন যেমন— তামাকের বিষাক্ত নিকোটিন ও টার, তেজস্ক্রিয় রঞ্জনরশ্মি, আল্ট্রাভায়োলেট রশ্মি, ক্ষতিকর রাসায়নিক এবং হিউম্যান প্যাপিলোমা ভাইরাস (HPV) কোষের জিনকে ক্ষতিগ্রস্ত করে ক্যান্সার সৃষ্টি করে। ক্যান্সার কোষ রক্ত ও লসিকার মাধ্যমে দূরবর্তী অঙ্গে ছড়িয়ে পড়াকে মেটাস্ট্যাসিস (Metastasis) বলে।',
        highlight: 'কার্সিনোজেন, অনকোভাইরাস (HPV) ও মেটাস্ট্যাসিস।'
      }
    ],
    callout: {
      type: 'warning',
      title: 'সচেতনতামূলক স্বাস্থ্য বার্তা',
      content: 'ধূমপান ফুসফুস ও মুখগহ্বরের ক্যান্সারের প্রধান কারণ। তামাকের টার ও বিষাক্ত রাসায়নিক সরাসরি শ্বাসনালীর কোষের ডিএনএ বিনষ্ট করে অনকোজিন সক্রিয় করে তোলে।'
    },
    speakerNotes: 'p53 টিউমার সাপ্রেসর জিন কীভাবে ক্ষতিকর মিউটেশন ধরা পড়লে কোষের অ্যাপোপটোসিস (আত্মহত্যা) ঘটায় তা সহজ ভাষায় ব্যাখ্যা করুন।',
    recommendedInteractiveTab: 'cellDivisionLab'
  },

  // Slide 11: মিয়োসিস বা হ্রাসমূলক বিভাজন ও ক্রসিং ওভার
  {
    id: 11,
    subject: 'biology',
    chapter: 3,
    title: 'মিয়োসিস বা হ্রাসমূলক বিভাজন ও ক্রসিং ওভার',
    subtitle: 'Meiosis: Reductional Division, Synapsis & Crossing Over',
    category: 'জীববিজ্ঞান ৩য় অধ্যায়: কোষ বিভাজন',
    gallery: [
      {
        id: 'bio_s11_1',
        titleBn: 'মিয়োসিস ১ ও মিয়োসিস ২ এর সামগ্রিক ধাপ',
        titleEn: 'Meiosis I & Meiosis II Overview',
        captionBn: 'মিয়োসিস-১ এ ক্রোমোজোম সংখ্যা অর্ধেক (2n → n) হয় এবং মিয়োসিস-২ মাইটোসিসের অনুরূপ সমীকরণিক বিভাজন।',
        captionEn: 'Meiosis I halves chromosome count (2n → n); Meiosis II is equational (n → n).',
        type: 'diagram'
      },
      {
        id: 'bio_s11_2',
        titleBn: 'ক্রসিং ওভার ও রিকম্বিনেশন প্রক্রিয়া',
        titleEn: 'Synapsis, Chiasma & Crossing Over Mechanism',
        captionBn: 'হোমোলোগাস ক্রোমোজোমের নন-সিস্টার ক্রোমাটিডের মধ্যে অংশ বিনিময়ের ফলে নতুন জিনগত প্রকরণ সৃষ্টি হয়।',
        captionEn: 'Genetic recombination through reciprocal segment exchange at chiasmata.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'হোমোলোগাস ক্রোমোজোম জোড়',
        labelEn: 'Homologous Pair',
        detailBn: 'আকার-আকৃতিতে অনুরূপ একজোড়া ক্রোমোজোম— একটি পিতার ও একটি মাতার।',
        detailEn: 'Pair of matching maternal and paternal chromosomes.',
        symbol: 'Homologs',
        badgeType: 'chromosome',
        position: { x: 35, y: 30 }
      },
      {
        labelBn: 'সিন্যাপসিস ও বাইভ্যালেন্ট',
        labelEn: 'Synapsis & Bivalent',
        detailBn: 'জাইগোটিন উপপর্যায়ে দুটি হোমোলোগাস ক্রোমোজোমের পাশাপাশি জোড় বাঁধাকে সিন্যাপসিস এবং জোড়াকে বাইভ্যালেন্ট বলে।',
        detailEn: 'Pairing of homologs (synapsis) forming a bivalent structure.',
        symbol: 'Bivalent',
        badgeType: 'chromosome',
        position: { x: 65, y: 30 }
      },
      {
        labelBn: 'কায়াজমা (Chiasma)',
        labelEn: 'Chiasma',
        detailBn: 'প্যাকাইটিনে নন-সিস্টার ক্রোমাটিডদ্বয়ের একে অপরকে এক্স (X) চিহ্নের মতো অতিক্রম করার স্থান।',
        detailEn: 'X-shaped point where non-sister chromatids intersect.',
        symbol: 'Chiasma (X)',
        badgeType: 'gene',
        position: { x: 50, y: 55 }
      },
      {
        labelBn: 'রিকম্বিন্যান্ট ক্রোমাটিড',
        labelEn: 'Recombinant Chromatids',
        detailBn: 'ক্রসিং ওভারের ফলে নতুন বৈশিষ্ট্যসম্পন্ন জিন সমন্বিত ক্রোমাটিড।',
        detailEn: 'Chromatids possessing novel parental gene combinations.',
        symbol: 'Recombinant',
        badgeType: 'gene',
        position: { x: 50, y: 80 }
      }
    ],
    keyPoints: [
      {
        heading: 'মিয়োসিস কী ও কোথায় ঘটে?',
        description: 'যে কোষ বিভাজন প্রক্রিয়ায় নিউক্লিয়াস দুবার কিন্তু ক্রোমোজোম মাত্র একবার বিভাজিত হয়, ফলে অপত্য কোষে ক্রোমোজোম সংখ্যা মাতৃকোষের ক্রোমোজোম সংখ্যার অর্ধেক হয়ে যায়, তাকে মিয়োসিস (Meiosis) বলে। এটি ডিপ্লয়েড জীবের জনন মাতৃকোষে (Germ mother cell) ঘটে এবং হ্যাপ্লয়েড গ্যামেট (শুক্রাণু ও ডিম্বাণু) সৃষ্টি করে।',
        highlight: 'নিউক্লিয়াস ২ বার, ক্রোমোজোম ১ বার বিভক্ত হয়; 2n ⟶ n (হ্রাসমূলক বিভাজন)।'
      },
      {
        heading: 'প্রোফেজ-১ এর ৫টি উপপর্যায়',
        description: 'মিয়োসিস-১ এর প্রোফেজ-১ অত্যন্ত দীর্ঘ ও জটিল। এটি ৫টি উপপর্যায়ে বিভক্ত:\n১. লেপ্টোটিন (Leptotene): ক্রোমোজোম দৃশ্যমান ও বোকে (Bouquet) তৈরি।\n২. জাইগোটিন (Zygotene): হোমোলোগাস ক্রোমোজোমের জোড় বাঁধার প্রক্রিয়া বা সিন্যাপসিস (Synapsis) ও বাইভ্যালেন্ট সৃষ্টি।\n৩. প্যাকাইটিন (Pachytene): টেট্রাড অবস্থা, কায়াজমা (Chiasma) ও ক্রসিং ওভার (Crossing over)।\n৪. ডিপ্লোটিন (Diplotene): কায়াজমা প্রান্তের দিকে সরে যাওয়া (Terminalization)।\n৫. ডায়াকাইনেসিস (Diakinesis): নিউক্লিওলাস ও মেমব্রেন অবলুপ্তি।',
        highlight: 'লেপ্টোটিন ⟶ জাইগোটিন ⟶ প্যাকাইটিন (ক্রসিং ওভার) ⟶ ডিপ্লোটিন ⟶ ডায়াকাইনেসিস।'
      },
      {
        heading: 'ক্রসিং ওভারের তাৎপর্য (Crossing Over)',
        description: 'বিজ্ঞানী থমাস হান্ট মর্গান (Thomas Hunt Morgan, 1909) প্রথম ক্রসিং ওভার প্রত্যক্ষ করেন। ক্রসিং ওভারের মাধ্যমে নন-সিস্টার ক্রোমাটিডের মধ্যে জিনের অংশ বিনিময় হয়। ফলে বংশধরে নতুন বৈশিষ্ট্যের সমাবেশ (Genetic recombination) ও প্রকরণ (Variation) তৈরি হয়, যা জৈব বিবর্তনের কাঁচামাল।',
        highlight: 'ক্রসিং ওভার জিনগত বৈচিত্র্য, নতুন প্রকরণ ও বিবর্তনের পথ সুগম করে।'
      }
    ],
    callout: {
      type: 'formula',
      title: 'ক্রোমোজোম সংখ্যা ধ্রুব রাখার সূত্র',
      content: 'জনন মাতৃকোষ (2n) ⟶ মায়োসিস ⟶ শুক্রাণু (n) + ডিম্বাণু (n)। নিষেক (Fertilization): n + n = জাইগোট (2n)। যদি মিয়োসিস না হতো, তবে প্রতি প্রজন্মে ক্রোমোজোম সংখ্যা দ্বিগুণ (4n, 8n, 16n...) হয়ে প্রজাতি ধ্বংস হয়ে যেত।'
    },
    speakerNotes: 'এন্ডোনিউক্লিয়েজ এনজাইম কীভাবে ক্রোমাটিড ভাঙে এবং লাইগেজ এনজাইম জোড়া লাগিয়ে ক্রসিং ওভার সম্পন্ন করে তা পরিষ্কার করে বলুন।',
    recommendedInteractiveTab: 'cellDivisionLab'
  },

  // Slide 12: মাইটোসিস ও মিয়োসিসের তুলনামূলক পার্থক্য ও সারসংক্ষেপ
  {
    id: 12,
    subject: 'biology',
    chapter: 3,
    title: 'মাইটোসিস ও মিয়োসিসের তুলনামূলক পার্থক্য ও সারসংক্ষেপ',
    subtitle: 'Comprehensive Comparison: Mitosis vs Meiosis and Chapter Summary',
    category: 'জীববিজ্ঞান ৩য় অধ্যায়: কোষ বিভাজন',
    gallery: [
      {
        id: 'bio_s12_1',
        titleBn: 'মাইটোসিস ও মিয়োসিসের পূর্ণাঙ্গ তুলনামূলক চার্ট',
        titleEn: 'Mitosis vs Meiosis Side-by-Side Schematic',
        captionBn: 'মাইটোসিসে ১টি বিভাজনে ২টি অভিন্ন দেহকোষ তৈরি হয়; মিয়োসিসে ২টি বিভাজনে ৪টি বৈচিত্র্যময় হ্যাপ্লয়েড গ্যামেট তৈরি হয়।',
        captionEn: 'Mitosis yields two identical diploid cells; meiosis yields four unique haploid gametes.',
        type: 'diagram'
      },
      {
        id: 'bio_s12_2',
        titleBn: 'কোষ বিভাজন অধ্যায়ের সারসংক্ষেপ রোডম্যাপ',
        titleEn: 'Chapter 3 Comprehensive Concept Map',
        captionBn: 'অ্যামাইটোসিস, মাইটোসিসের ৫টি পর্যায়, কোষচক্র, ক্যান্সার এবং মিয়োসিস ও ক্রসিং ওভারের সুষম সংযোগ।',
        captionEn: 'Holistic concept roadmap of amitosis, mitotic karyokinesis, cancer, and meiosis.',
        type: 'chart'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'মাইটোসিস ফলাফল',
        labelEn: 'Mitosis Outcome',
        detailBn: '১টি মাতৃকোষ (2n) থেকে ২টি অভিন্ন ডিপ্লয়েড অপত্য কোষ (2n)।',
        detailEn: 'One 2n mother cell yields 2 identical 2n daughter cells.',
        symbol: '2n → 2n',
        badgeType: 'cell',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'মিয়োসিস ফলাফল',
        labelEn: 'Meiosis Outcome',
        detailBn: '১টি জনন মাতৃকোষ (2n) থেকে ৪টি জিনগতভাবে বৈচিত্র্যপূর্ণ হ্যাপ্লয়েড গ্যামেট (n)।',
        detailEn: 'One 2n mother cell yields 4 recombinant n gametes.',
        symbol: '2n → 4n (n)',
        badgeType: 'gene',
        position: { x: 70, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'মৌলিক তুলনামূলক পার্থক্য',
        description: 'মাইটোসিস ও মিয়োসিসের মধ্যে অবস্থান, বিভাজন সংখ্যা, ক্রোমোজোম দশা এবং জিনগত ফলাফলে সুস্পষ্ট পার্থক্য রয়েছে। মাইটোসিস জীবের শারীরিক বৃদ্ধি নিশ্চিত করে, আর মিয়োসিস প্রজাতির অস্তিত্ব টিকিয়ে রাখে।',
        highlight: 'মাইটোসিস = দৈহিক বৃদ্ধি ও সমতা; মিয়োসিস = প্রজাতির ক্রোমোজোম সংরক্ষণ ও প্রকরণ।'
      },
      {
        heading: 'ক্রোমোজোম সংখ্যা নিয়ন্ত্রণ',
        description: 'যদি মিয়োসিস না হতো, তবে বংশপরম্পরায় ক্রোমোজোম সংখ্যা জ্যামিতিক হারে বৃদ্ধি পেত। মিয়োসিস গ্যামেটের ক্রোমোজোম সংখ্যা অর্ধেক করে নিষেক পরবর্তী জাইগোটে প্রজাতির বৈশিষ্ট্যমূলক ক্রোমোজোম সংখ্যা ধ্রুব রাখে।',
        highlight: 'প্রজাতির ক্রোমোজোম সংখ্যা বংশপরম্পরায় অপরিবর্তিত রাখা।'
      },
      {
        heading: 'অধ্যায়ের সারসংক্ষেপ রিকল',
        description: '১. অ্যামাইটোসিস: ব্যাকটেরিয়া ও অ্যামিবার সরাসরি দ্বি-বিভাজন।\n২. মাইটোসিস: প্রোফেজ, প্রো-মেটাফেজ, মেটাফেজ (খাটো-মোটা), অ্যানাফেজ (V, L, J, I), টেলোফেজ ও সাইটোকাইনেসিস।\n৩. অনিয়ন্ত্রিত মাইটোসিস: টিউমার ও ক্যান্সার।\n৪. মিয়োসিস: জাইগোটিনে সিন্যাপসিস, প্যাকাইটিনে ক্রসিং ওভার ও ৪টি অপত্য কোষ সৃষ্টি।',
        highlight: 'অ্যামাইটোসিস ⟶ মাইটোসিস (ক্যারও+সাইটোকাইনেসিস) ⟶ ক্যান্সার ⟶ মিয়োসিস ও ক্রসিং ওভার।'
      }
    ],
    tableData: {
      caption: 'এসএসসি পরীক্ষার জন্য মাইটোসিস ও মিয়োসিসের পূর্ণাঙ্গ তুলনামূলক ছক',
      headers: ['তুলনার বিষয়', 'মাইটোসিস (Mitosis)', 'মিয়োসিস (Meiosis)'],
      rows: [
        ['সংঘটন স্থল', 'জীবদেহের দৈহিক কোষে (Somatic cells)', 'যৌন প্রজননশীল জীবের জনন মাতৃকোষে'],
        ['কোষের বিভাজন সংখ্যা', 'একবার বিভক্ত হয়', 'পরপর দুইবার বিভক্ত হয়'],
        ['ক্রোমোজোমের বিভাজন', 'সেন্ট্রোমিয়ার সহ একবার লম্বালম্বি বিভক্ত', 'মিয়োসিস-১ এ ঘটে না, মিয়োসিস-২ এ ঘটে'],
        ['অপত্য কোষের সংখ্যা', '২টি অপত্য কোষ তৈরি হয়', '৪টি অপত্য কোষ তৈরি হয়'],
        ['ক্রোমোজোম সংখ্যা', 'মাতৃকোষের সমান (2n → 2n)', 'মাতৃকোষের অর্ধেক (2n → n)'],
        ['হোমোলোগাস ক্রোমোজোম', 'জোড় বাঁধে না (বাইভ্যালেন্ট হয় না)', 'জাইগোটিনে সিন্যাপসিসের মাধ্যমে বাইভ্যালেন্ট হয়'],
        ['ক্রসিং ওভার ও কায়াজমা', 'কখনোই ঘটে না', 'প্যাকাইটিনে ক্রসিং ওভার ও কায়াজমা ঘটে'],
        ['অপত্য কোষের বৈশিষ্ট্য', 'মাতৃকোষের হুবহু ক্লোন বা সমগুণসম্পন্ন', 'ক্রসিং ওভারের কারণে নতুন প্রকরণযুক্ত বৈচিত্র্যময়'],
        ['জীবদেহে ভূমিকা', 'দৈহিক বৃদ্ধি, ক্ষত নিরাময়, অঙ্গজনন', 'গ্যামেট সৃষ্টি, ক্রোমোজোম সংখ্যা ধ্রুব রাখা ও বিবর্তন']
      ]
    },
    callout: {
      type: 'tip',
      title: 'বোর্ড সৃজনশীল ফাইনাল রিভিশন',
      content: 'সৃজনশীল প্রশ্নের "গ" ও "ঘ" তে প্রায়শই অ্যানাফেজ পর্যায়ের V, L, J, I ক্রোমোজোমের চিত্রসহ বর্ণনা এবং জীবজগতের ভারসাম্য রক্ষায় মিয়োসিস ও ক্রসিং ওভারের গুরুত্ব জানতে চাওয়া হয়।'
    },
    speakerNotes: 'পুরো অধ্যায়টির একটি সামগ্রিক রিভিশন নিয়ে শিক্ষার্থীদের প্রশ্নোত্তর পর্বের জন্য প্রস্তুত করুন।',
    recommendedInteractiveTab: 'cellDivisionLab'
  }
];
