import { Slide } from '../types/presentation';

export const chapter5Slides: Slide[] = [
  {
    id: 1,
    chapter: 5,
    title: 'অধ্যায় ৫: রাসায়নিক বন্ধন',
    subtitle: 'Chemical Bond — পরমাণুসমূহের পারস্পরিক আকর্ষণ, অণু গঠন ও পদার্থের স্থায়িত্বের রহস্য',
    category: 'সূচনা ও প্রেক্ষাপট',
    gallery: [
      {
        id: 'c5_s1_img1',
        titleBn: 'রাসায়নিক বন্ধনের ত্রিধারা',
        titleEn: 'Three Primary Chemical Bonds',
        captionBn: 'আয়নিক বন্ধন (ইলেকট্রন স্থানান্তর), সমযোজী বন্ধন (ইলেকট্রন শেয়ারিং) ও ধাতব বন্ধন (ইলেকট্রন সাগর)',
        captionEn: 'Ionic (electron transfer), Covalent (electron sharing), and Metallic (electron sea) bonds',
        type: 'diagram',
        customDiagramType: 'ionicBondFormation'
      },
      {
        id: 'c5_s1_img2',
        url: '/src/assets/images/elements_compounds_1790751385322.jpg',
        titleBn: 'মৌল থেকে যৌগে রূপান্তর',
        titleEn: 'Elements to Compounds Transformation',
        captionBn: 'স্বাধীন পরমাণুসমূহ রাসায়নিক বন্ধনের মাধ্যমে যুক্ত হয়ে কোটি কোটি যৌগিক পদার্থ গঠন করে',
        captionEn: 'Isolated atoms bind through chemical bonds to create the vast universe of chemical compounds',
        type: 'photo'
      },
      {
        id: 'c5_s1_img3',
        titleBn: 'অষ্টক ও দুইয়ের নিয়মের সাম্যাবস্থা',
        titleEn: 'Octet and Duet Principles',
        captionBn: 'নিষ্ক্রিয় গ্যাসের মতো বহিঃস্থ স্তরে ৮টি বা ২টি ইলেকট্রন অর্জনের সার্বজনীন তাড়না',
        captionEn: 'Universal thermodynamic drive to attain stable octet or duet valence shell configurations',
        type: 'diagram',
        customDiagramType: 'octetVsDuet'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'রাসায়নিক বন্ধন (Chemical Bond)',
        labelEn: 'Chemical Bond',
        symbol: 'Attraction F',
        detailBn: 'অণুতে পরমাণুসমূহ যে তীব্র আকর্ষণ বল দ্বারা পরস্পরের সাথে আবদ্ধ থাকে, তাকে রাসায়নিক বন্ধন বলে।',
        detailEn: 'The attractive electrostatic force holding constituent atoms together in a molecule.',
        badgeType: 'bond',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'নিষ্ক্রিয় গ্যাস স্থিতিশীলতা',
        labelEn: 'Noble Gas Stability',
        symbol: 'ns² np⁶',
        detailBn: 'নিষ্ক্রিয় গ্যাসসমূহের সর্ববহিঃস্থ স্তর ইলেকট্রন দ্বারা পূর্ণ থাকায় এরা অন্য কোনো পরমাণুর সাথে বন্ধন তৈরি করে না।',
        detailEn: 'Noble gases possess filled valence shells (duet/octet), exhibiting maximum chemical stability.',
        badgeType: 'noble',
        position: { x: 70, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'রাসায়নিক বন্ধন কী? (What is Chemical Bond?)',
        description: 'যৌগের অণুতে পরমাণুসমূহ একে অপরের সাথে যে আকর্ষণ বলের মাধ্যমে যুক্ত থাকে, তাকে রাসায়নিক বন্ধন (Chemical Bond) বলে। একা থাকলে পরমাণুগুলোর শক্তি বেশি থাকে; বন্ধন গঠনের মাধ্যমে শক্তি নির্গত হয়ে অণু স্থিতিশীল অবস্থা লাভ করে।',
        highlight: 'পরমাণুসমূহের পারস্পরিক আকর্ষণ বল'
      },
      {
        heading: 'পরমাণুসমূহ কেন বন্ধন গঠন করে?',
        description: 'মহাবিশ্বের সকল বস্তুই অধিকতর স্থিতিশীল হতে চায়। পরমাণুসমূহ তাদের সবচেয়ে বাইরের শক্তিস্তরে নিকটস্থ নিষ্ক্রিয় গ্যাসের মতো ইলেকট্রন বিন্যাস (অষ্টক বা দ্বিত্ব) লাভ করে স্থিতিশীল হওয়ার জন্য ইলেকট্রন ত্যাগ, গ্রহণ বা শেয়ার করে রাসায়নিক বন্ধনে আবদ্ধ হয়।',
        formula: 'বন্ধন গঠন ⇒ শক্তি নির্গমন (ΔH < 0) ⇒ স্থিতিশীলতা বৃদ্ধি'
      },
      {
        heading: 'প্রধান তিন প্রকার রাসায়নিক বন্ধন',
        description: '১. আয়নিক বা তড়িৎযোজী বন্ধন (ধাতু + অধাতুর মধ্যে ইলেকট্রন স্থানান্তর)\n২. সমযোজী বন্ধন (অধাতু + অধাতুর মধ্যে ইলেকট্রন জোড় শেয়ারিং)\n৩. ধাতব বন্ধন (ধাতু পরমাণুসমূহের মধ্যে সঞ্চারণশীল ইলেকট্রনের আকর্ষণ)',
        highlight: 'আয়নিক, সমযোজী ও ধাতব বন্ধন'
      }
    ],
    callout: {
      type: 'info',
      title: 'রসায়নের মৌলিক সত্য',
      content: 'মুক্ত পরমাণুর চেয়ে বন্ধনযুক্ত অণুর স্থায়িত্ব অনেক বেশি এবং শক্তি কম। বন্ধন ভাঙতে বাইরে থেকে তাপশক্তি সরবরাহ করতে হয় (তাপহারী), আর বন্ধন সৃষ্টি হলে শক্তি নির্গত হয় (তাপোৎপাদী)।'
    },
    speakerNotes: 'শিক্ষার্থীদের বুঝিয়ে বলুন কেন পরমাণু একা না থেকে বন্ধন তৈরি করে। স্থিতিশীলতা ও শক্তির সম্পর্কটি পরিষ্কার করুন।',
    recommendedInteractiveTab: 'bondingLab'
  },
  {
    id: 2,
    chapter: 5,
    title: 'যোজ্যতা ইলেকট্রন (Valence Electrons)',
    subtitle: 'পরমাণুর সর্ববহিঃস্থ প্রধান শক্তিস্তরের ইলেকট্রন সংখ্যা ও রাসায়নিক সক্রিয়তার মাপকাঠি',
    category: 'মৌলিক ধারণা',
    gallery: [
      {
        id: 'c5_s2_img1',
        titleBn: 'বিভিন্ন গ্রুপের যোজ্যতা ইলেকট্রন চার্ট',
        titleEn: 'Valence Electrons by Group',
        captionBn: 'গ্রুপ ১-এ ১টি, গ্রুপ ২-এ ২টি, গ্রুপ ১৩-তে ৩টি, গ্রুপ ১৭-তে ৭টি এবং গ্রুপ ১৮-তে ৮টি যোজ্যতা ইলেকট্রন থাকে',
        captionEn: 'Valence count aligns with main group numbers: G1 has 1, G2 has 2, G17 has 7, G18 has 8',
        type: 'diagram',
        customDiagramType: 'octetVsDuet'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'যোজ্যতা স্তর (Valence Shell)',
        labelEn: 'Valence Shell',
        symbol: 'Outer Shell',
        detailBn: 'পরমাণুর ইলেকট্রন বিন্যাসের সর্বশেষ প্রধান শক্তিস্তরকে যোজ্যতা স্তর এবং এর ইলেকট্রনগুলোকে যোজ্যতা ইলেকট্রন বলে।',
        detailEn: 'Outermost occupied principal electron shell and its constituent electrons.',
        badgeType: 'electron',
        position: { x: 50, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'যোজ্যতা ইলেকট্রনের সংজ্ঞা (Definition)',
        description: 'কোনো মৌলের ইলেকট্রন বিন্যাসে সবচেয়ে বাইরের প্রধান শক্তিস্তরে মোট যে সংখ্যক ইলেকট্রন থাকে, সেই ইলেকট্রন সংখ্যাকে ঐ মৌলের যোজ্যতা ইলেকট্রন (Valence Electron) বলে।',
        highlight: 'সর্বশেষ প্রধান শক্তিস্তরের মোট ইলেকট্রন সংখ্যা'
      },
      {
        heading: 'যোজ্যতা ইলেকট্রন নির্ণয়ের উদাহরণ',
        description: '• ₁₁Na: 1s² 2s² 2p⁶ 3s¹ ➜ সর্বশেষ স্তর ৩য়, ইলেকট্রন = ১ (যোজ্যতা ইলেকট্রন = ১)\n• ₁₂Mg: 1s² 2s² 2p⁶ 3s² ➜ যোজ্যতা ইলেকট্রন = ২\n• ₁₅P: 1s² 2s² 2p⁶ 3s² 3p³ ➜ সর্বশেষ স্তরে ২+৩ = ৫টি যোজ্যতা ইলেকট্রন\n• ₁₇Cl: 1s² 2s² 2p⁶ 3s² 3p⁵ ➜ সর্বশেষ স্তরে ২+৫ = ৭টি যোজ্যতা ইলেকট্রন\n• ₁₈Ar: [Ne] 3s² 3p⁶ ➜ সর্বশেষ স্তরে ৮টি যোজ্যতা ইলেকট্রন (অষ্টক পূর্ণ)',
        formula: 'যোজ্যতা ইলেকট্রন = সর্ববহিঃস্থ স্তরের মোট ইলেকট্রন'
      },
      {
        heading: 'যোজ্যতা ইলেকট্রন বনাম যোজনী',
        description: 'যোজ্যতা ইলেকট্রন এবং যোজনী দুটি এক জিনিস নয়! যেমন—নাইট্রোজেনের যোজ্যতা ইলেকট্রন ৫টি, কিন্তু এর যোজনী ৩। অক্সিজেনের যোজ্যতা ইলেকট্রন ৬টি, কিন্তু যোজনী ২। ক্লোরিনের যোজ্যতা ইলেকট্রন ৭টি, কিন্তু যোজনী ১।',
        highlight: 'যোজ্যতা ইলেকট্রন ≠ যোজনী'
      }
    ],
    tableData: {
      caption: 'মৌলসমূহের যোজ্যতা ইলেকট্রন ও যোজনীর তুলনা',
      headers: ['মৌল ও প্রতীক', 'ইলেকট্রন বিন্যাস', 'সর্ববহিঃস্থ স্তর', 'যোজ্যতা ইলেকট্রন', 'যোজনী (Valency)'],
      rows: [
        ['₁H (হাইড্রোজেন)', '1s¹', '১ম', '১', '১'],
        ['₆C (কার্বন)', '1s² 2s² 2p²', '২য়', '৪', '২, ৪'],
        ['₇N (নাইট্রোজেন)', '1s² 2s² 2p³', '২য়', '৫', '৩, ৫'],
        ['₈O (অক্সিজেন)', '1s² 2s² 2p⁴', '২য়', '৬', '২'],
        ['₁₁Na (সোডিয়াম)', '[Ne] 3s¹', '৩য়', '১', '১'],
        ['₁₇Cl (ক্লোরিন)', '[Ne] 3s² 3p⁵', '৩য়', '৭', '১ (৩, ৫, ৭)'],
        ['₁₈Ar (আর্গন)', '[Ne] 3s² 3p⁶', '৩য়', '৮', '০ (নিষ্ক্রিয়)']
      ]
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন যে যোজ্যতা ইলেকট্রন হলো উপস্থিত মোট সংখ্যা, আর যোজনী হলো যুক্ত হওয়ার ক্ষমতা বা শেয়ার/আদান-প্রদানের সংখ্যা।',
    callout: {
      type: 'tip',
      title: 'কুইক রুল',
      content: 'ধাতুর ক্ষেত্রে সাধারণত যোজ্যতা ইলেকট্রন সংখ্যাই তার যোজনী (যেমন Na-এর ১, Mg-এর ২, Al-এর ৩)। অধাতুর ক্ষেত্রে যোজনী = (৮ - যোজ্যতা ইলেকট্রন সংখ্যা)।'
    }
  },
  {
    id: 3,
    chapter: 5,
    title: 'যোজনী বা যোজ্যতা (Valency)',
    subtitle: 'সংজ্ঞা, হাইড্রোজেন ও ক্লোরিন স্কেল এবং একযোজী থেকে চতুর্যোজি মৌলসমূহ',
    category: 'মৌলিক ধারণা',
    gallery: [
      {
        id: 'c5_s3_img1',
        titleBn: 'যোজনীর হাত মডেল (Valency Hand Concept)',
        titleEn: 'Valency Hands Model',
        captionBn: 'হাইড্রোজেনের ১টি হাত, অক্সিজেনের ২টি হাত, নাইট্রোজেনের ৩টি হাত এবং কার্বনের ৪টি হাত',
        captionEn: 'Atomic combining power pictured as valence bonds / hands',
        type: 'diagram',
        customDiagramType: 'covalentSharing'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'যুক্ত হওয়ার ক্ষমতা (Valency)',
        labelEn: 'Combining Capacity',
        symbol: 'Valency',
        detailBn: 'অণু গঠনকালে কোনো মৌলের একটি পরমাণুর সাথে অপর কোনো মৌলের পরমাণু যুক্ত হওয়ার সামর্থ্যকে যোজনী বলে।',
        detailEn: 'Combining capacity of an atom determined relative to Hydrogen (valency = 1).',
        badgeType: 'bond',
        position: { x: 50, y: 40 }
      }
    ],
    keyPoints: [
      {
        heading: 'যোজনী কী? (What is Valency?)',
        description: 'অণু গঠনকালে কোনো মৌলের একটি পরমাণু যতগুলো হাইড্রোজেন (H) বা ক্লোরিন (Cl) পরমাণুর সাথে যুক্ত হতে পারে, কিংবা যতগুলো একক যোজী পরমাণুকে প্রতিস্থাপিত করতে পারে, সেই সংখ্যাকে ঐ মৌলের যোজনী (Valency) বলে। হাইড্রোজেনের যোজনী সর্বদা ১ ধরা হয়।',
        highlight: 'যুক্ত হওয়ার সামর্থ্য বা ক্ষমতা'
      },
      {
        heading: 'যোজনীর শ্রেণিবিন্যাস',
        description: '• একযোজী (Monovalent): H, Na, K, Cl, F, Br, I (যোজনী = ১)\n• দ্বিযোজী (Divalent): O, Mg, Ca, Zn, Ba (যোজনী = ২)\n• ত্রিযোজী (Trivalent): N, P, Al, B, Fe(III) (যোজনী = ৩)\n• চতুর্যোজি (Tetravalent): C, Si, Sn(IV), Pb(IV) (যোজনী = ৪)',
        highlight: '১, ২, ৩, ৪ যোজী মৌল'
      },
      {
        heading: 'যোজনীকে "হাত" (Hands) হিসেবে কল্পনা',
        description: 'কোনো মৌলের যোজনীকে তার পরমাণুর "হাত" বিবেচনা করা যায়। যেমন—হাইড্রোজেনের ১টি হাত, অক্সিজেনের ২টি হাত। পানির অণুতে (H₂O) অক্সিজেনের ২টি হাত দিয়ে ২টি পৃথক হাইড্রোজেন পরমাণুর ১টি করে হাত ধরে যুক্ত থাকে। মিথেনে (CH₄) কার্বনের ৪টি হাত ৪টি হাইড্রোজেনের হাত ধরে।',
        formula: 'H–O–H (পানি) | H–Cl (হাইড্রোক্লোরিক অ্যাসিড)'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার কৌশল',
      content: 'যোজনী সবসময় একটি ধনাত্মক পূর্ণসংখ্যা হয় (১, ২, ৩, ৪)। যোজনীর কোনো ধনাত্মক বা ঋণাত্মক চিহ্ন (+/-) থাকে না; কিন্তু জারণ সংখ্যার বেলায় চিহ্ন থাকে।'
    },
    speakerNotes: 'শিক্ষার্থীদের হাত ধরার রূপক দিয়ে বন্ধন ও যোজনীর ধারণাটি স্পষ্টভাবে বুঝিয়ে দিন।'
  },
  {
    id: 4,
    chapter: 5,
    title: 'পরিবর্তনশীল যোজনী ও সুপ্ত যোজনী',
    subtitle: 'Variable Valency, Active Valency এবং Latent Valency নির্ণয়ের গাণিতিক হিসাব',
    category: 'যোজনীর প্রকারভেদ',
    gallery: [
      {
        id: 'c5_s4_img1',
        titleBn: 'আয়রনের পরিবর্তনশীল যোজনী (Fe²⁺ বনাম Fe³⁺)',
        titleEn: 'Variable Valency of Iron (Fe)',
        captionBn: 'ফেরাস ক্লোরাইড (FeCl₂)-এ যোজনী ২; ফেরিক ক্লোরাইড (FeCl₃)-এ যোজনী ৩',
        captionEn: 'Iron exhibits valency 2 in ferrous salts and valency 3 in ferric salts',
        type: 'chart'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'সুপ্ত যোজনী ফর্মুলা',
        labelEn: 'Latent Valency Formula',
        symbol: 'Latent = Max - Active',
        detailBn: 'সুপ্ত যোজনী = মৌলের সর্বোচ্চ যোজনী - যৌগে উপস্থিত সক্রিয় যোজনী।',
        detailEn: 'Latent Valency = (Maximum Valency) - (Active Valency in compound).',
        badgeType: 'bond',
        position: { x: 50, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'পরিবর্তনশীল যোজনী (Variable Valency)',
        description: 'কিছু মৌল ভিন্ন ভিন্ন যৌগে ভিন্ন ভিন্ন যোজনী প্রদর্শন করে। কোনো মৌলের একাধিক যোজনী থাকলে তাকে পরিবর্তনশীল যোজনী বলে। যেমন: কপার (১, ২), আয়রন (২, ৩), টিন (২, ৪), লেড (২, ৪), ফসফরাস (৩, ৫), সালফার (২, ৪, ৬), নাইট্রোজেন (৩, ৫), কার্বন (২, ৪)।',
        highlight: 'একাধিক যোজনী প্রদর্শন'
      },
      {
        heading: 'সক্রিয় যোজনী (Active Valency)',
        description: 'কোনো নির্দিষ্ট যৌগে কোনো মৌলের যে যোজনীটি প্রকৃতপক্ষে কার্যকর বা ব্যবহৃত হয়, তাকে ঐ যৌগে ঐ মৌলের সক্রিয় যোজনী বলে। যেমন: FeCl₂ যৌগে Fe-এর সক্রিয় যোজনী ২; কিন্তু FeCl₃ যৌগে Fe-এর সক্রিয় যোজনী ৩।',
        highlight: 'যৌগে ব্যবহৃত কার্যকর যোজনী'
      },
      {
        heading: 'সুপ্ত যোজনী (Latent Valency)',
        description: 'কোনো মৌলের সর্বোচ্চ যোজনী এবং কোনো যৌগে তার সক্রিয় যোজনীর পার্থক্যকে ঐ যৌগে মৌলটির সুপ্ত যোজনী (Latent Valency) বলে।',
        formula: 'সুপ্ত যোজনী = সর্বোচ্চ যোজনী – সক্রিয় যোজনী'
      }
    ],
    tableData: {
      caption: 'গুরুত্বপূর্ণ যৌগে সুপ্ত যোজনী গণনার উদাহরণ',
      headers: ['যৌগের সংকেত ও নাম', 'মৌল', 'সর্বোচ্চ যোজনী', 'সক্রিয় যোজনী', 'সুপ্ত যোজনী হিসাব'],
      rows: [
        ['FeCl₂ (ফেরাস ক্লোরাইড)', 'Fe (লোহা)', '৩', '২', '৩ – ২ = ১'],
        ['FeCl₃ (ফেরিক ক্লোরাইড)', 'Fe (লোহা)', '৩', '৩', '৩ – ৩ = ০'],
        ['CO (কার্বন মনোক্সাইড)', 'C (কার্বন)', '৪', '২', '৪ – ২ = ২'],
        ['CO₂ (কার্বন ডাই-অক্সাইড)', 'C (কার্বন)', '৪', '৪', '৪ – ৪ = ০'],
        ['SO₂ (সালফার ডাই-অক্সাইড)', 'S (সালফার)', '৬', '৪', '৬ – ৪ = ২'],
        ['PCl₃ (ফসফরাস ট্রাইক্লোরাইড)', 'P (ফসফরাস)', '৫', '৩', '৫ – ৩ = ২'],
        ['PCl₅ (ফসফরাস পেন্টাক্লোরাইড)', 'P (ফসফরাস)', '৫', '৫', '৫ – ৫ = ০']
      ]
    },
    callout: {
      type: 'formula',
      title: 'বোর্ড পরীক্ষার অত্যন্ত প্রিয় প্রশ্ন',
      content: '“FeCl₂ যৌগে আয়রনের সুপ্ত যোজনী কত?” ➜ আয়রনের সর্বোচ্চ যোজনী ৩, FeCl₂-এ সক্রিয় যোজনী ২, সুতরাং সুপ্ত যোজনী = ৩ – ২ = ১।'
    },
    speakerNotes: 'শিক্ষার্থীদের সুপ্ত যোজনী বের করার নিয়ম হাতে-কলমে অনুশীলন করান।',
    recommendedInteractiveTab: 'formulaBuilder'
  },
  {
    id: 5,
    chapter: 5,
    title: 'যৌগমূলক বা র্যাডিক্যাল (Radicals)',
    subtitle: 'পরমাণু গুচ্ছের পরিচয়, চার্জ ও ধনাত্মক ও ঋণাত্মক যৌগমূলকের পূর্ণাঙ্গ তালিকা',
    category: 'মৌলিক ধারণা',
    gallery: [
      {
        id: 'c5_s5_img1',
        titleBn: 'প্রধান যৌগমূলকসমূহের সংকেত ও চার্জ',
        titleEn: 'Common Radicals & Charges',
        captionBn: 'অ্যামোনিয়াম (NH₄⁺), সালফেট (SO₄²⁻), নাইট্রেট (NO₃⁻), কার্বনেট (CO₃²⁻), ফসফেট (PO₄³⁻)',
        captionEn: 'Polyatomic ions behaving chemically as a single unified atom with distinct ionic charge',
        type: 'chart'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'যৌগমূলক (Radical)',
        labelEn: 'Polyatomic Ion',
        symbol: 'Group of Atoms',
        detailBn: 'একাধিক মৌলের একাধিক পরমাণু একত্রিত হয়ে একটি পরমাণু গুচ্ছ তৈরি করে যা রাসায়নিক বিক্রিয়ায় একটি মাত্র পরমাণুর মতো আচরণ করে।',
        detailEn: 'Cluster of bonded atoms carrying an overall net charge and acting as a single chemical entity.',
        badgeType: 'radical',
        position: { x: 50, y: 40 }
      }
    ],
    keyPoints: [
      {
        heading: 'যৌগমূলক কী? (What is a Radical?)',
        description: 'একাধিক মৌলের কয়েকটি পরমাণু পরস্পর যুক্ত হয়ে যখন একটি পরমাণু গুচ্ছ গঠন করে এবং এটি বিভিন্ন রাসায়নিক বিক্রিয়ায় একটি মাত্র পরমাণুর ন্যায় আচরণ করে এবং নিজস্ব ধনাত্মক বা ঋণাত্মক আধান বহন করে, তখন তাকে যৌগমূলক (Radical / Polyatomic Ion) বলে।',
        highlight: 'একটি পরমাণুর ন্যায় আচরণকারী পরমাণু গুচ্ছ'
      },
      {
        heading: 'যৌগমূলকের যোজনী ও আধানের সম্পর্ক',
        description: 'কোনো যৌগমূলকের আধানের সংখ্যাই (চার্জের মান) হলো তার যোজনী। তবে চার্জের বেলায় + বা - চিহ্ন লিখতে হয়, কিন্তু যোজনী লেখার সময় কোনো চিহ্ন থাকে না। যেমন: সালফেট যৌগমূলকের আধান -২, কিন্তু এর যোজনী ২।',
        formula: 'আধান = -২ ⇒ যোজনী = ২'
      },
      {
        heading: 'ধনাত্মক বনাম ঋণাত্মক যৌগমূলক',
        description: '• ধনাত্মক যৌগমূলক: অ্যামোনিয়াম (NH₄⁺), ফসফোনিয়াম (PH₄⁺) — যোজনী ১।\n• ঋণাত্মক যৌগমূলক: নাইট্রেট (NO₃⁻), হাইড্রোক্সাইড (OH⁻), সালফেট (SO₄²⁻), কার্বনেট (CO₃²⁻), ফসফেট (PO₄³⁻) ইত্যাদি।',
        highlight: 'NH₄⁺ ও PH₄⁺ ধনাত্মক, বাকি অধিকাংশ ঋণাত্মক'
      }
    ],
    tableData: {
      caption: 'পাঠ্যবইয়ের গুরুত্বপূর্ণ যৌগমূলকসমূহের পূর্ণাঙ্গ তালিকা',
      headers: ['যৌগমূলকের নাম', 'সংকেত', 'আধান (Charge)', 'যোজনী (Valency)', 'প্রকৃতি'],
      rows: [
        ['অ্যামোনিয়াম', 'NH₄⁺', '+১', '১', 'ধনাত্মক'],
        ['ফসফোনিয়াম', 'PH₄⁺', '+১', '১', 'ধনাত্মক'],
        ['হাইড্রোক্সাইড', 'OH⁻', '-১', '১', 'ঋণাত্মক'],
        ['নাইট্রেট', 'NO₃⁻', '-১', '১', 'ঋণাত্মক'],
        ['নাইট্রাইট', 'NO₂⁻', '-১', '১', 'ঋণাত্মক'],
        ['হাইড্রোজেন কার্বনেট (বাইকার্বনেট)', 'HCO₃⁻', '-১', '১', 'ঋণাত্মক'],
        ['হাইড্রোজেন সালফেট (বাইসালফেট)', 'HSO₄⁻', '-১', '১', 'ঋণাত্মক'],
        ['সালফেট', 'SO₄²⁻', '-২', '২', 'ঋণাত্মক'],
        ['সালফাইট', 'SO₃²⁻', '-২', '২', 'ঋণাত্মক'],
        ['কার্বনেট', 'CO₃²⁻', '-২', '২', 'ঋণাত্মক'],
        ['ফসফেট', 'PO₄³⁻', '-৩', '৩', 'ঋণাত্মক']
      ]
    },
    speakerNotes: 'শিক্ষার্থীদের যৌগমূলকের সংকেত ও যোজনী মুখস্থ করতে উৎসাহিত করুন, কারণ এটি সঠিক রাসায়নিক সংকেত লেখার ভিত্তি।',
    recommendedInteractiveTab: 'formulaBuilder'
  },
  {
    id: 6,
    chapter: 5,
    title: 'যৌগের রাসায়নিক সংকেত লেখার নিয়মাবলী',
    subtitle: 'যোজনী বিনিময়, অনুপাত লঘুকরণ এবং বন্ধনী (Brackets) ব্যবহারের ৩টি আন্তর্জাতিক নিয়ম',
    category: 'নিয়মাবলী',
    gallery: [
      {
        id: 'c5_s6_img1',
        titleBn: 'যোজনী বিনিময়ের ক্রিস-ক্রস পদ্ধতি (Criss-Cross Rule)',
        titleEn: 'Criss-Cross Formula Method',
        captionBn: 'Al (যোজনী ৩) এবং SO₄ (যোজনী ২) বিনিময় হয়ে গঠিত হয় Al₂(SO₄)₃',
        captionEn: 'Valencies swap as subscripts: Al³⁺ and SO₄²⁻ yield Al₂(SO₄)₃',
        type: 'diagram',
        customDiagramType: 'covalentSharing'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'যোজনী বিনিময় (Swap Rule)',
        labelEn: 'Valency Swap',
        symbol: 'A_y B_x',
        detailBn: 'A মৌলের যোজনী x এবং B মৌলের যোজনী y হলে, সংকেত হবে A_y B_x।',
        detailEn: 'Valencies cross over to become subscripts of opposing atoms/radicals.',
        badgeType: 'bond',
        position: { x: 50, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'নিয়ম ১: যোজনী বিনিময় (Cross-over of Valency)',
        description: 'যৌগ গঠনকারী দুটি মৌল বা যৌগমূলকের প্রতীক পাশাপাশি লিখে ১ম টির যোজনী ২য় টির ডানে নিচে এবং ২য় টির যোজনী ১ম টির ডানে নিচে লিখতে হয়। কোনো মৌলের যোজনী ১ হলে তা লিখতে হয় না।\n• উদাহরণ: Al (যোজনী ৩) ও O (যোজনী ২) ➜ Al₂O₃। C (যোজনী ৪) ও H (যোজনী ১) ➜ CH₄।',
        formula: 'Aˣ + Bʸ ➜ AᵧBₓ'
      },
      {
        heading: 'নিয়ম ২: সাধারণ গুণনীয়ক থাকলে ভাগ (Simplification)',
        description: 'উভয় মৌলের যোজনী যদি একই হয় অথবা কোনো সাধারণ সংখ্যা দ্বারা বিভাজ্য হয়, তবে সেই সংখ্যা দ্বারা ভাগ করে ক্ষুদ্রতম পূর্ণসংখ্যার অনুপাতে রূপান্তর করতে হয়।\n• উদাহরণ: Ca (যোজনী ২) ও O (যোজনী ২) ➜ Ca₂O₂ না লিখে CaO লেখা হয়। C (৪) ও O (২) ➜ C₂O₄ না লিখে CO₂ লেখা হয়।',
        highlight: 'অনুপাত লঘুকরণ (যেমন: ২:২ ➜ ১:১)'
      },
      {
        heading: 'নিয়ম ৩: যৌগমূলকের ক্ষেত্রে বন্ধনীর ব্যবহার (Brackets)',
        description: 'যদি কোনো যৌগে যৌগমূলকের সংখ্যা ১-এর বেশি হয়, তবে যৌগমূলকটিকে প্রথম বন্ধনী () এর ভেতর রেখে বন্ধনীর বাইরে নিচে সংখ্যাটি লিখতে হয়। সংখ্যা ১ হলে বন্ধনীর প্রয়োজন নেই।\n• উদাহরণ: Al₂(SO₄)₃ (অ্যালুমিনিয়াম সালফেট), Ca(OH)₂ (ক্যালসিয়াম হাইড্রোক্সাইড), Na₂SO₄ (এখানে ১টি SO₄ তাই বন্ধনী নেই)।',
        highlight: 'একাধিক যৌগমূলক হলে বন্ধনী আবশ্যক'
      }
    ],
    callout: {
      type: 'tip',
      title: 'ভুল এড়ানোর টিপ',
      content: 'CaOH₂ লেখা সম্পূর্ণ ভুল! ক্যালসিয়াম হাইড্রোক্সাইড লিখতে হবে Ca(OH)₂; কারণ OH পুরো যৌগমূলকটি ২ দ্বারা গুণিত।'
    },
    speakerNotes: 'শিক্ষার্থীদের বিভিন্ন ধাতু ও যৌগমূলক দিয়ে সংকেত লেখার প্র্যাকটিস করান।',
    recommendedInteractiveTab: 'formulaBuilder'
  },
  {
    id: 7,
    chapter: 5,
    title: 'আণবিক সংকেত বনাম গাঁঠনিক সংকেত',
    subtitle: 'Molecular Formula এবং Structural Formula-এর পারস্পরিক সম্পর্ক ও বন্ধন রেখা',
    category: 'সংকেতের রূপরেখা',
    gallery: [
      {
        id: 'c5_s7_img1',
        titleBn: 'মিথেন, পানি ও কার্বন ডাই-অক্সাইডের গাঁঠনিক সংকেত',
        titleEn: 'Structural Formulas of CH₄, H₂O, CO₂',
        captionBn: 'একক বন্ধন (–), দ্বিবন্ধন (=) এবং ত্রিবন্ধন (≡) দ্বারা পরমাণুর অভ্যন্তরীণ সংযুক্তি প্রকাশ',
        captionEn: 'Atomic connectivity shown through single, double, and triple bond lines',
        type: 'diagram',
        customDiagramType: 'covalentSharing'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'গাঁঠনিক সংকেত (Structural Formula)',
        labelEn: 'Structural Formula',
        symbol: 'H–C–H',
        detailBn: 'প্রতীক ও বন্ধন রেখার (–) মাধ্যমে অণুতে পরমাণুগুলো কীভাবে পরস্পরের সাথে সাজানো আছে তা প্রকাশ করা।',
        detailEn: 'Graphic showing spatial arrangement and covalent bond lines connecting atoms.',
        badgeType: 'bond',
        position: { x: 50, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'আণবিক সংকেত কী? (Molecular Formula)',
        description: 'যে সংকেতের সাহায্যে যৌগের একটি অণুতে বিদ্যমান বিভিন্ন মৌলের পরমাণুর প্রকৃত সংখ্যা প্রকাশ করা হয়, তাকে আণবিক সংকেত বা রাসায়নিক সংকেত বলে। যেমন: পানির আণবিক সংকেত H₂O, মিথেনের আণবিক সংকেত CH₄, হাইড্রোজেন পারঅক্সাইডের H₂O₂।',
        highlight: 'পরমাণুর প্রকৃত সংখ্যা'
      },
      {
        heading: 'গাঁঠনিক সংকেত কী? (Structural Formula)',
        description: 'প্রতীকের সাহায্যে কোনো অণুতে পরমাণুগুলো কীভাবে পরস্পরের সাথে বন্ধন রেখা (–) দ্বারা যুক্ত থাকে তা প্রকাশ করার পদ্ধতিকে গাঁঠনিক সংকেত বলে। একটি একক বন্ধনের জন্য একটি দাগ (–), দ্বিবন্ধনের জন্য দুটি দাগ (=) এবং ত্রিবন্ধনের জন্য তিনটি দাগ (≡) দেওয়া হয়।',
        highlight: 'বন্ধন রেখার মাধ্যমে বিন্যাস প্রকাশ'
      },
      {
        heading: 'উদাহরণসমূহ',
        description: '• পানি (H₂O): H – O – H (অক্সিজেনের সাথে ২টি একক বন্ধনে ২টি H)\n• মিথেন (CH₄): কার্বনের চারপাশে ৪টি C–H একক বন্ধন\n• কার্বন ডাই-অক্সাইড (CO₂): O = C = O (কার্বনের সাথে দুই পাশে দুটি দ্বিবন্ধন)\n• হাইড্রোজেন পারঅক্সাইড (H₂O₂): H – O – O – H\n• নাইট্রোজেন (N₂): N ≡ N (একটি ত্রিবন্ধন)',
        formula: 'N ≡ N (ত্রিবন্ধন) | O = O (দ্বিবন্ধন) | H – H (একক বন্ধন)'
      }
    ],
    callout: {
      type: 'info',
      title: 'গাঁঠনিক সংকেতের গুরুত্ব',
      content: 'একই আণবিক সংকেত বিশিষ্ট দুটি ভিন্ন যৌগ হতে পারে (আইসোমার বা সমাণু), যাদের আলাদা করতে গাঁঠনিক সংকেত অপরিহার্য। যেমন C₂H₆O দিয়ে ইথানল (CH₃–CH₂–OH) এবং ডাইমিথাইল ইথার (CH₃–O–CH₃) উভয়ই বোঝায়।'
    },
    speakerNotes: 'শিক্ষার্থীদের বোর্ডে মিথেন, অ্যামোনিয়া এবং কার্বন ডাই-অক্সাইডের গাঁঠনিক সংকেত এঁকে দেখান।'
  },
  {
    id: 8,
    chapter: 5,
    title: 'অষ্টক নিয়ম ও দুইয়ের নিয়ম (Octet & Duet Rule)',
    subtitle: 'অষ্টক তত্ত্বের সাফল্য এবং অষ্টক সংকোচন ও সম্প্রসারণের সীমাবদ্ধতা বনাম আধুনিক দুইয়ের নিয়ম',
    category: 'নিয়মাবলী',
    gallery: [
      {
        id: 'c5_s8_img1',
        titleBn: 'অষ্টক ও দুইয়ের নিয়মের ভিজ্যুয়াল তুলনা',
        titleEn: 'Octet vs Duet Rule Comparison',
        captionBn: 'অষ্টক নিয়ম (বহিঃস্তরে ৮টি ইলেকট্রন) বনাম আধুনিক দুইয়ের নিয়ম (জোড়ায় জোড়ায় ইলেকট্রন লাভ)',
        captionEn: 'Classical Lewis octet rule compared with modern duet rule (electron pairs)',
        type: 'diagram',
        customDiagramType: 'octetVsDuet'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'অষ্টক নিয়ম (Octet Rule)',
        labelEn: 'Octet Rule (Rule of 8)',
        symbol: '8 e⁻',
        detailBn: 'পরমাণুসমূহ যৌগ গঠনকালে সর্বশেষ শক্তিস্তরে ৮টি ইলেকট্রন ধারণের মাধ্যমে নিষ্ক্রিয় গ্যাসের মতো রূপ ধারণ করে।',
        detailEn: 'Atoms tend to combine so that each has 8 valence electrons mimicking noble gases.',
        badgeType: 'electron',
        position: { x: 30, y: 40 }
      },
      {
        labelBn: 'দুইয়ের নিয়ম (Duet Rule)',
        labelEn: 'Duet Rule (Rule of 2)',
        symbol: 'Pair of e⁻',
        detailBn: 'পরমাণুসমূহ বন্ধন গঠনকালে বহিঃস্তরে ইলেকট্রন জোড় (জোড়ায় জোড়ায় ইলেকট্রন) গঠন করে হিলিয়ামের মতো স্থায়িত্ব পায়।',
        detailEn: 'Modern rule stating outer shells achieve stability with paired electrons like Helium.',
        badgeType: 'electron',
        position: { x: 70, y: 40 }
      }
    ],
    keyPoints: [
      {
        heading: '১. অষ্টক নিয়ম (Octet Rule)',
        description: 'অণু গঠনকালে কোনো মৌল ইলেকট্রন গ্রহণ, বর্জন বা ভাগাভাগি করার মাধ্যমে তার সবচেয়ে বাইরের শক্তিস্তরে ৮টি ইলেকট্রন অর্জন করে নিষ্ক্রিয় গ্যাসের ইলেকট্রন কাঠামো লাভ করার প্রবণতাকে অষ্টক নিয়ম (Octet Rule) বলে।',
        formula: 'বহিঃস্থ স্তরে ৮টি ইলেকট্রন (ns² np⁶)'
      },
      {
        heading: 'অষ্টক নিয়মের সীমাবদ্ধতা (Limitations)',
        description: '• অষ্টক সংকোচন (Incomplete Octet): বোরন ট্রাইফ্লুরাইড (BF₃)-এ বোরনের চারপাশে মাত্র ৬টি ইলেকট্রন থাকে (৮টির কম), তবুও যৌগটি সুস্থিত। একইভাবে BeCl₂-এ Be-এর চারপাশে ৪টি ইলেকট্রন থাকে।\n• অষ্টক সম্প্রসারণ (Expanded Octet): ফসফরাস পেন্টাক্লোরাইড (PCl₅)-এ P-এর চারপাশে ১০টি এবং সালফার হেক্সাফ্লুরাইড (SF₆)-এ S-এর চারপাশে ১২টি ইলেকট্রন থাকে (৮টির বেশি), যা অষ্টক নিয়ম লঙ্ঘন করে।',
        highlight: 'BF₃ (৬টি e⁻), PCl₅ (১০টি e⁻), SF₆ (১২টি e⁻)'
      },
      {
        heading: '২. দুইয়ের নিয়ম (Duet Rule)',
        description: 'অষ্টক নিয়মের সীমাবদ্ধতা দূর করতে বিজ্ঞানীরা "দুইয়ের নিয়ম" প্রবর্তন করেন। এই নিয়মানুসারে, পরমাণুগুলো বন্ধন গঠনকালে তাদের সবচেয়ে বাইরের শক্তিস্তরে ইলেকট্রনগুলো এক বা একাধিক জোড় (Pairs) আকারে সাজায় এবং হিলিয়ামের মতো দ্বিত্ব অর্জন করে। মিথেন (CH₄)-এ কার্বনের ৪ জোড়া এবং প্রতিটি হাইড্রোজেনের ১ জোড়া ইলেকট্রন থাকে। এটি অষ্টক নিয়মের চেয়ে অনেক বেশি সার্বজনীন ও আধুনিক।',
        highlight: 'ইলেকট্রন জোড় (Pairs) হিসেবে অবস্থান'
      }
    ],
    callout: {
      type: 'tip',
      title: 'বোর্ড পরীক্ষার অত্যন্ত জনপ্রিয় প্রশ্ন',
      content: '“অষ্টক নিয়মের চেয়ে দুইয়ের নিয়ম অধিকতর উপযোগী ও গ্রহণযোগ্য কেন?” ➜ কারণ অষ্টক নিয়ম BF₃ বা PCl₅-এর ক্ষেত্রে ব্যর্থ হয়, কিন্তু দুইয়ের নিয়ম সকল যৌগের বন্ধনজোড় গঠনের সন্তোষজনক ব্যাখ্যা দেয়।'
    },
    speakerNotes: 'শিক্ষার্থীদের BF₃ এবং PCl₅ এর লুইস ডট এঁকে দেখান কেন অষ্টক নিয়মে সীমাবদ্ধতা দেখা দেয়।',
    recommendedInteractiveTab: 'bondingLab'
  },
  {
    id: 9,
    chapter: 5,
    title: 'আয়নিক বন্ধন বা তড়িৎযোজী বন্ধন (Ionic Bond)',
    subtitle: 'ধাতু ও অধাতুর মধ্যে ইলেকট্রন স্থানান্তর, ক্যাটায়ন-অ্যানায়ন সৃষ্টি ও স্থিরবৈদ্যুতিক আকর্ষণ',
    category: 'রাসায়নিক বন্ধন',
    gallery: [
      {
        id: 'c5_s9_img1',
        titleBn: 'সোডিয়াম ক্লোরাইড (NaCl) আয়নিক বন্ধন সৃষ্টি',
        titleEn: 'NaCl Ionic Bond Formation Mechanism',
        captionBn: 'Na পরমাণু ১টি ইলেকট্রন ত্যাগ করে Na⁺ হয়; Cl পরমাণু সেই ইলেকট্রন গ্রহণ করে Cl⁻ হয়',
        captionEn: 'Sodium atom donates 1 electron becoming Na⁺; Chlorine accepts it becoming Cl⁻',
        type: 'diagram',
        customDiagramType: 'ionicBondFormation'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ক্যাটায়ন (Na⁺)',
        labelEn: 'Cation (Na⁺)',
        symbol: 'Na ➜ Na⁺ + e⁻',
        detailBn: 'ধাতু ইলেকট্রন ত্যাগ করে ধনাত্মক আধানযুক্ত ক্যাটায়ন সৃষ্টি করে। নিয়নের ইলেকট্রন বিন্যাস (2, 8) লাভ করে।',
        detailEn: 'Metal loses outer electron to form a stable positive cation with neon configuration.',
        badgeType: 'cation',
        position: { x: 30, y: 40 }
      },
      {
        labelBn: 'অ্যানায়ন (Cl⁻)',
        labelEn: 'Anion (Cl⁻)',
        symbol: 'Cl + e⁻ ➜ Cl⁻',
        detailBn: 'অধাতু ইলেকট্রন গ্রহণ করে ঋণাত্মক আধানযুক্ত অ্যানায়ন সৃষ্টি করে। আর্গনের বিন্যাস (2, 8, 8) লাভ করে।',
        detailEn: 'Non-metal gains electron to form stable negative anion with argon octet configuration.',
        badgeType: 'anion',
        position: { x: 70, y: 40 }
      }
    ],
    keyPoints: [
      {
        heading: 'আয়নিক বন্ধন কী? (What is Ionic Bond?)',
        description: 'ধাতু ও অধাতুর পরমাণুসমূহের মধ্যে ইলেকট্রন স্থানান্তরের (আদান-প্রদান) মাধ্যমে সৃষ্ট বিপরীত আধানযুক্ত ধনাত্মক ক্যাটায়ন এবং ঋণাত্মক অ্যানায়নসমূহ যে তীব্র স্থিরবৈদ্যুতিক আকর্ষণ বল (Electrostatic Force) দ্বারা পরস্পরের সাথে আবদ্ধ হয়, তাকে আয়নিক বন্ধন বা তড়িৎযোজী বন্ধন বলে।',
        formula: 'ধাতু (ক্যাটায়ন⁺) + অধাতু (অ্যানায়ন⁻) ➜ আয়নিক যৌগ'
      },
      {
        heading: 'NaCl সৃষ্টির ধাপসমূহ',
        description: '১. সোডিয়াম পরমাণু (Na: 2, 8, 1) সর্ববহিঃস্থ স্তরের ১টি ইলেকট্রন ত্যাগ করে স্থিতিশীল নিয়ন (2, 8)-এর মতো সোডিয়াম ক্যাটায়ন (Na⁺) তৈরি করে: Na ➜ Na⁺ + e⁻\n২. ক্লোরিন পরমাণু (Cl: 2, 8, 7) সেই বর্জিত ইলেকট্রনটি গ্রহণ করে স্থিতিশীল আর্গন (2, 8, 8)-এর মতো ক্লোরাইড অ্যানায়ন (Cl⁻) তৈরি করে: Cl + e⁻ ➜ Cl⁻\n৩. বিপরীত আধানের কারণে Na⁺ এবং Cl⁻ এর মধ্যে তীব্র আকর্ষণ বল তৈরি হয়: Na⁺ + Cl⁻ ➜ NaCl',
        highlight: 'ইলেকট্রন স্থানান্তর ও স্থিরবৈদ্যুতিক আকর্ষণ'
      },
      {
        heading: 'অন্যান্য আয়নিক যৌগের উদাহরণ',
        description: '• ম্যাগনেসিয়াম অক্সাইড (MgO): Mg²⁺ + O²⁻ ➜ MgO\n• ক্যালসিয়াম ক্লোরাইড (CaCl₂): Ca²⁺ + 2Cl⁻ ➜ CaCl₂\n• সোডিয়াম অক্সাইড (Na₂O): 2Na⁺ + O²⁻ ➜ Na₂O',
        formula: 'Mg (2,8,2) + O (2,6) ➜ Mg²⁺ (2,8) + O²⁻ (2,8)'
      }
    ],
    callout: {
      type: 'tip',
      title: 'আয়নিক বন্ধন গঠনের শর্ত',
      content: 'ধাতুর আয়নীকরণ শক্তি যত কম হবে এবং অধাতুর ইলেকট্রন আসক্তি যত বেশি হবে, আয়নিক বন্ধন তত সহজে ও শক্তিশালীভাবে গঠিত হবে।'
    },
    speakerNotes: 'শিক্ষার্থীদের অ্যানিমেশনের মাধ্যমে ইলেকট্রন কীভাবে কক্ষপথ থেকে বের হয়ে অন্য পরমাণুতে চলে যায় তা দেখান।',
    recommendedInteractiveTab: 'bondingLab'
  },
  {
    id: 10,
    chapter: 5,
    title: 'সমযোজী বন্ধন (Covalent Bond)',
    subtitle: 'অধাতুসমূহের মধ্যে ইলেকট্রন শেয়ারিং, বন্ধনজোড় ইলেকট্রন এবং একক, দ্বি ও ত্রিবন্ধন',
    category: 'রাসায়নিক বন্ধন',
    gallery: [
      {
        id: 'c5_s10_img1',
        titleBn: 'সমযোজী বন্ধনে ইলেকট্রন শেয়ারিং মেকানিজম',
        titleEn: 'Covalent Electron Sharing Mechanism',
        captionBn: 'একক বন্ধন (H₂, Cl₂, CH₄), দ্বিবন্ধন (O₂, CO₂) এবং ত্রিবন্ধন (N₂)-এর লুইস ইলেকট্রন শেয়ারিং',
        captionEn: 'Sharing of electron pairs forming single, double, and triple covalent bonds',
        type: 'diagram',
        customDiagramType: 'covalentSharing'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'বন্ধনজোড় ইলেকট্রন (Bond Pair)',
        labelEn: 'Bond Pair Electrons',
        symbol: 'Shared e⁻ pair',
        detailBn: 'দুটি পরমাণুর শেয়ারকৃত ইলেকট্রন যুগল উভয় পরমাণুর নিউক্লিয়াসের আকর্ষণে আবদ্ধ থেকে বন্ধন তৈরি করে।',
        detailEn: 'Pair of shared electrons held mutually by the attraction of both atomic nuclei.',
        badgeType: 'bond',
        position: { x: 50, y: 40 }
      },
      {
        labelBn: 'মুক্তজোড় ইলেকট্রন (Lone Pair)',
        labelEn: 'Lone Pair Electrons',
        symbol: 'Non-bonding e⁻',
        detailBn: 'যোজ্যতা স্তরের যে ইলেকট্রন জোড়গুলো বন্ধন গঠনে অংশ নেয় না, তাদের মুক্তজোড় ইলেকট্রন বলে (যেমন পানিতে ২টি লোন পেয়ার)।',
        detailEn: 'Pairs of valence electrons that do not participate in covalent bond formation.',
        badgeType: 'electron',
        position: { x: 50, y: 70 }
      }
    ],
    keyPoints: [
      {
        heading: 'সমযোজী বন্ধন কী? (What is Covalent Bond?)',
        description: 'দুটি অধাতব পরমাণু যখন পরস্পরের নিকটবর্তী হয়, তখন প্রত্যেকে নিজের যোজ্যতা স্তর থেকে সমান সংখ্যক ইলেকট্রন সরবরাহ করে এক বা একাধিক ইলেকট্রন জোড় (Electron Pairs) তৈরি করে এবং উভয় পরমাণু সমানভাবে সেই ইলেকট্রন জোড় শেয়ার করে যে বন্ধন তৈরি করে, তাকে সমযোজী বন্ধন (Covalent Bond) বলে।',
        highlight: 'ইলেকট্রন শেয়ারিংয়ের মাধ্যমে গঠিত বন্ধন'
      },
      {
        heading: 'সমযোজী বন্ধনের প্রকারভেদ',
        description: '• একক সমযোজী বন্ধন: ১ জোড়া ইলেকট্রন শেয়ার (যেমন: H₂, Cl₂, HCl, CH₄, H₂O, NH₃)\n• দ্বিবন্ধন: ২ জোড়া ইলেকট্রন শেয়ার (যেমন: O₂, CO₂, C₂H₄)\n• ত্রিবন্ধন: ৩ জোড়া ইলেকট্রন শেয়ার (যেমন: N₂, C₂H₂ বা অ্যাসিটিলিন)',
        formula: 'H–H (১ জোড়া) | O=O (২ জোড়া) | N≡N (৩ জোড়া)'
      },
      {
        heading: 'বন্ধনজোড় ও মুক্তজোড় ইলেকট্রন গণনা',
        description: '• মিথেন (CH₄): বন্ধনজোড় ৪টি, মুক্তজোড় ০টি\n• অ্যামোনিয়া (NH₃): বন্ধনজোড় ৩টি, মুক্তজোড় ১টি\n• পানি (H₂O): বন্ধনজোড় ২টি, মুক্তজোড় ২টি\n• অক্সিজেন (O₂): বন্ধনজোড় ২টি, মুক্তজোড় ৪টি',
        highlight: 'H₂O-এ ২ জোড়া বন্ধনজোড় ও ২ জোড়া মুক্তজোড়'
      }
    ],
    callout: {
      type: 'formula',
      title: 'পরীক্ষার জন্য গুরুত্বপূর্ণ তথ্য',
      content: 'পানির (H₂O) একটি অণুতে মোট ইলেকট্রন ১০টি; এর মধ্যে বন্ধনজোড় ইলেকট্রন ৪টি (২ জোড়া) এবং মুক্তজোড় ইলেকট্রন ৪টি (২ জোড়া)।'
    },
    speakerNotes: 'শিক্ষার্থীদের মিথেন, অ্যামোনিয়া ও পানির লুইস ডট স্ট্রাকচার এঁকে বন্ধনজোড় ও মুক্তজোড় স্পষ্টভাবে চিহ্নিত করে দেখান।',
    recommendedInteractiveTab: 'bondingLab'
  },
  {
    id: 11,
    chapter: 5,
    title: 'ধাতব বন্ধন (Metallic Bond)',
    subtitle: 'ইলেকট্রন সাগর মডেল (Electron Sea Model), পারমাণবিক শাঁস ও ধাতুর বিদ্যুৎ ও তাপ পরিবাহিতা',
    category: 'রাসায়নিক বন্ধন',
    gallery: [
      {
        id: 'c5_s11_img1',
        titleBn: 'ধাতব বন্ধনের ইলেকট্রন সাগর মডেল',
        titleEn: 'Electron Sea Model of Metallic Bond',
        captionBn: 'ধনাত্মক পারমাণবিক শাঁস (Atomic core) এবং মুক্ত সঞ্চারণশীল ইলেকট্রন মেঘের পারস্পরিক আকর্ষণ',
        captionEn: 'Fixed positive atomic cores enveloped by a mobile sea of delocalized valence electrons',
        type: 'diagram',
        customDiagramType: 'metallicElectronSea'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'পারমাণবিক শাঁস (Atomic Core)',
        labelEn: 'Atomic Core',
        symbol: 'M⁺ Kernels',
        detailBn: 'ধাতুর পরমাণু থেকে সর্ববহিঃস্থ যোজ্যতা ইলেকট্রন বেরিয়ে যাওয়ার পর অবশিষ্ট ধনাত্মক কেন্দ্রটিকে পারমাণবিক শাঁস বলে।',
        detailEn: 'Positively charged metal ions arranged in crystalline regular lattice structure.',
        badgeType: 'cation',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'সঞ্চারণশীল ইলেকট্রন (Delocalized e⁻)',
        labelEn: 'Delocalized Sea of Electrons',
        symbol: 'Free e⁻ Sea',
        detailBn: 'ধাতব স্ফটিকের ভেতর মুক্তভাবে চলাচলকারী ইলেকট্রন যা ধাতুর বিদ্যুৎ পরিবাহিতা ও তাপ পরিবাহিতার জন্য দায়ী।',
        detailEn: 'Mobile valence electrons free to move throughout the metallic crystal lattice.',
        badgeType: 'electron',
        position: { x: 70, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'ধাতব বন্ধন কী? (What is Metallic Bond?)',
        description: 'ধাতব পরমাণুসমূহ পরস্পরের সাথে যুক্ত হয়ে যে স্ফটিক বা ল্যাটিস গঠন করে, তাতে পরমাণুগুলোর মধ্যে যে বিশেষ আকর্ষণ বল কাজ করে, তাকে ধাতব বন্ধন (Metallic Bond) বলে। এক টুকরো সোডিয়াম, কপার বা লোহার পরমাণুগুলো ধাতব বন্ধন দ্বারা পরস্পরের সাথে আবদ্ধ থাকে।',
        highlight: 'ধাতুর পরমাণুসমূহের মধ্যকার বন্ধন'
      },
      {
        heading: 'ইলেকট্রন সাগর মডেল (Electron Sea Model)',
        description: 'ধাতুর পরমাণুসমূহের আয়নীকরণ শক্তি কম হওয়ায় এরা সহজেই সর্ববহিঃস্থ স্তরের ইলেকট্রন ত্যাগ করে ধনাত্মক আয়নে পরিণত হয়। এই ধনাত্মক আয়নগুলোকে পারমাণবিক শাঁস (Atomic Core) বলে। বর্জিত ইলেকট্রনগুলো নির্দিষ্ট কোনো পরমাণুর অধীনে না থেকে সমগ্র ধাতব স্ফটিকে মুক্তভাবে বিচরণ করে। একে সঞ্চারণশীল ইলেকট্রন সাগর বলে। ধনাত্মক পারমাণবিক শাঁস এবং ঋণাত্মক ইলেকট্রন সাগরের মধ্যবর্তী তীব্র আকর্ষণে ধাতব বন্ধন গঠিত হয়।',
        highlight: 'সঞ্চারণশীল মুক্ত ইলেকট্রন সাগর'
      },
      {
        heading: 'ধাতুর বিদ্যুৎ ও তাপ পরিবাহিতার কারণ',
        description: 'ধাতুর স্ফটিকে মুক্ত সঞ্চারণশীল ইলেকট্রন থাকার কারণে ধাতুর দুই প্রান্তে ব্যাটারি বা বিভব পার্থক্য প্রয়োগ করলেই ঋণাত্মক ইলেকট্রনগুলো দ্রুত ধনাত্মক প্রান্তের দিকে প্রবাহিত হয়; ফলে ধাতু অত্যন্ত উৎকৃষ্ট বিদ্যুৎ পরিবাহী। একইভাবে তাপ প্রয়োগ করলে মুক্ত ইলেকট্রনগুলো দ্রুত তাপশক্তি গ্রহণ করে এক প্রান্ত থেকে অন্য প্রান্তে পরিবহন করে।',
        formula: 'বিদ্যুৎ প্রবাহ = মুক্ত সঞ্চারণশীল ইলেকট্রনের বেগ'
      }
    ],
    callout: {
      type: 'tip',
      title: 'ধাতুর নমনীয়তা ও উজ্জ্বলতা',
      content: 'ধাতুর উপর আঘাত করলে পারমাণবিক শাঁসের স্তরগুলো সঞ্চারণশীল ইলেকট্রন সাগরের উপর পিছলে এক স্থান থেকে অন্য স্থানে সরে যায়, ফলে স্ফটিক ভেঙে না গিয়ে পাত বা তারে রূপান্তর হয় (ঘাতসহতা ও নমনীয়তা)।'
    },
    speakerNotes: 'শিক্ষার্থীদের বুঝিয়ে বলুন কেন গ্রাফাইট ছাড়া অন্য অধাতু বিদ্যুৎ পরিবহন করে না, কিন্তু তামা বা অ্যালুমিনিয়াম তার চমৎকার বিদ্যুৎ পরিবহন করে।',
    recommendedInteractiveTab: 'bondingLab'
  },
  {
    id: 12,
    chapter: 5,
    title: 'আয়নিক ও সমযোজী যৌগের বৈশিষ্ট্যের তুলনা',
    subtitle: 'গলনাঙ্ক, স্ফুটনাঙ্ক ও কেলাস জালির ত্রিমাত্রিক দৃঢ়তা বনাম দুর্বল ভ্যান ডার ওয়ালস আকর্ষণ বল',
    category: 'যৌগের ধর্মাবলী',
    gallery: [
      {
        id: 'c5_s12_img1',
        titleBn: 'গলনাঙ্ক ও স্ফুটনাঙ্কের তুলনামূলক স্কেল',
        titleEn: 'Melting & Boiling Points Comparison',
        captionBn: 'NaCl-এর গলনাঙ্ক ৮০১°C ও স্ফুটনাঙ্ক ১৪৬৫°C; অন্যদিকে মিথেনের গলনাঙ্ক -১৮২°C ও চিনির গলনাঙ্ক ১৮৬°C',
        captionEn: 'High thermal stability of ionic lattices compared to molecular covalent compounds',
        type: 'chart'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'আয়নিক কেলাস ল্যাটিস',
        labelEn: 'Ionic Crystal Lattice',
        symbol: 'NaCl 3D',
        detailBn: 'ধনাত্মক ও ঋণাত্মক আয়নসমূহ ত্রিমাত্রিকভাবে ঘনসন্নিবেশিত হয়ে বিশাল দৈত্যাকার কেলাস জালি তৈরি করে। ভাঙতে প্রচুর তাপশক্তি প্রয়োজন।',
        detailEn: 'Rigid 3D lattice of alternating cations and anions held by immense lattice energy.',
        badgeType: 'bond',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'ভ্যান ডার ওয়ালস বল',
        labelEn: 'Van der Waals Forces',
        symbol: 'Weak IMF',
        detailBn: 'সমযোজী অণুগুলোর পরস্পরের মধ্যে দুর্বল আন্তঃআণবিক আকর্ষণ বল কাজ করায় সামান্য তাপেই এরা গলে বা বাষ্পীভূত হয়।',
        detailEn: 'Weak intermolecular forces between neutral covalent molecules lead to low phase transition temperatures.',
        badgeType: 'bond',
        position: { x: 70, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'গলনাঙ্ক ও স্ফুটনাঙ্কের তুলনা (Melting & Boiling Points)',
        description: '• আয়নিক যৌগের গলনাঙ্ক ও স্ফুটনাঙ্ক অত্যন্ত উচ্চ হয়। কারণ আয়নিক যৌগে বিপরীত আধানযুক্ত আয়নগুলি ত্রিমাত্রিক ক্রিস্টাল ল্যাটিসে তীব্র স্থিরবৈদ্যুতিক আকর্ষণ বল দ্বারা দৃঢ়ভাবে আবদ্ধ থাকে। এই ল্যাটিস ভাঙতে প্রচুর তাপশক্তির প্রয়োজন হয় (যেমন NaCl এর গলনাঙ্ক ৮০১°C)।\n• সমযোজী যৌগের গলনাঙ্ক ও স্ফুটনাঙ্ক অনেক কম হয়। কারণ সমযোজী অণুগুলোর পরমাণুর মধ্যে শক্তিশালী বন্ধন থাকলেও একটি অণুর সাথে আরেকটি অণুর মধ্যকার আন্তঃআণবিক আকর্ষণ বল (ভ্যান ডার ওয়ালস বল) অত্যন্ত দুর্বল হয়। অল্প তাপেই অণুগুলো পরস্পর থেকে বিচ্ছিন্ন হয়ে যায়।',
        highlight: 'আয়নিক যৌগের গলনাঙ্ক উচ্চ, সমযোজী যৌগের নিম্ন'
      },
      {
        heading: 'ভৌত অবস্থা (Physical States)',
        description: '• আয়নিক যৌগসমূহ কক্ষ তাপমাত্রায় সাধারণত কঠিন ও শক্ত কেলাসাকার হয়।\n• সমযোজী যৌগসমূহ কক্ষ তাপমাত্রায় গ্যাসীয় (O₂, N₂, CO₂, CH₄), তরল (H₂O, অ্যালকোহল) অথবা নরম ও সহজে উদ্বায়ী কঠিন (মোম, ন্যাপথালিন, চিনি) হয়ে থাকে।',
        highlight: 'আয়নিক যৌগ কঠিন কেলাস; সমযোজী গ্যাস/তরল/নরম কঠিন'
      }
    ],
    tableData: {
      caption: 'আয়নিক ও সমযোজী যৌগের তাপীয় বৈশিষ্ট্যের তুলনা',
      headers: ['যৌগের নাম ও সংকেত', 'যৌগের প্রকৃতি', 'গলনাঙ্ক (°C)', 'স্ফুটনাঙ্ক (°C)', 'কক্ষ তাপমাত্রায় অবস্থা'],
      rows: [
        ['সোডিয়াম ক্লোরাইড (NaCl)', 'আয়নিক', '৮০১°C', '১৪৬৫°C', 'কঠিন কেলাস'],
        ['ম্যাগনেসিয়াম অক্সাইড (MgO)', 'আয়নিক', '২৮৫২°C', '৩৬০০°C', 'উচ্চ গলনাঙ্কের কঠিন'],
        ['ক্যালসিয়াম ক্লোরাইড (CaCl₂)', 'আয়নিক', '৭৭২°C', '১৯৩৫°C', 'কঠিন কেলাস'],
        ['পানি (H₂O)', 'পোলার সমযোজী', '০°C', '১০০°C', 'তরল'],
        ['মিথেন (CH₄)', 'অপোলার সমযোজী', '-১৮২°C', '-১৬১°C', 'গ্যাস'],
        ['গ্লুকোজ (C₆H₁₂O₆)', 'সমযোজী', '১৪৬°C', 'বিশ্লিষ্ট হয়', 'কঠিন']
      ]
    },
    speakerNotes: 'শিক্ষার্থীদের বোঝান যে সমযোজী বন্ধন ভাঙা আর সমযোজী যৌগকে গলানো এক জিনিস নয়—গলানোর সময় কেবল অণুগুলোর মধ্যকার দুর্বল আকর্ষণ বল ভাঙা হয়।',
    recommendedInteractiveTab: 'compoundProps'
  },
  {
    id: 13,
    chapter: 5,
    title: 'দ্রাব্যতা ও পোলারিটি (Solubility & Polarity)',
    subtitle: 'পানির ডাইপোল চরিত্র, আংশিক ধনাত্মক ও ঋণাত্মক চার্জ এবং আয়নিক কেলাসের হাইড্রেশন মেকানিজম',
    category: 'যৌগের ধর্মাবলী',
    gallery: [
      {
        id: 'c5_s13_img1',
        titleBn: 'পানির পোলারিটি ও লবণের হাইড্রেশন মেকানিজম',
        titleEn: 'Water Polarity & NaCl Hydration Mechanism',
        captionBn: 'পানির ঋণাত্মক অক্সিজেন Na⁺ আয়নকে এবং ধনাত্মক হাইড্রোজেন Cl⁻ আয়নকে ঘিরে ফেলে দ্রবীভূত করে',
        captionEn: 'Water dipoles surround Na⁺ with partial negative O and Cl⁻ with partial positive H',
        type: 'diagram',
        customDiagramType: 'waterPolarityHydration'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'পানির পোলারিটি (H₂O Dipole)',
        labelEn: 'Water Dipole',
        symbol: 'δ+ H, δ- O',
        detailBn: 'অক্সিজেনের উচ্চ তড়িৎ ঋণাত্মকতার (৩.৪৪) কারণে শেয়ারকৃত ইলেকট্রন অক্সিজেনের দিকে হেলে থাকে, ফলে O আংশিক ঋণাত্মক ও H আংশিক ধনাত্মক হয়।',
        detailEn: 'Electronegativity difference creates partial charges: δ- on Oxygen, δ+ on Hydrogen atoms.',
        badgeType: 'polar',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'হাইড্রেশন বল (Hydration Energy)',
        labelEn: 'Hydration Energy',
        symbol: 'Dissolution',
        detailBn: 'পানির ডাইপোলের তীব্র আকর্ষণ আয়নিক স্ফটিকের ল্যাটিস শক্তিকে পরাজিত করে আয়নগুলোকে দ্রবণে মুক্ত করে।',
        detailEn: 'Ion-dipole attractions overcome the crystal lattice energy, dissolving the ionic salt.',
        badgeType: 'polar',
        position: { x: 70, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'পোলারিটি কী? (What is Polarity?)',
        description: 'সমযোজী বন্ধনে আবদ্ধ দুটি পরমাণুর তড়িৎ ঋণাত্মকতার পার্থক্যের কারণে (সাধারণত ০.৫ থেকে ১.৯ হলে) শেয়ারকৃত ইলেকট্রন যুগল অধিক তড়িৎ ঋণাত্মক পরমাণুর দিকে স্থানান্তরিত হয়। এর ফলে অধিক ঋণাত্মক পরমাণুতে আংশিক ঋণাত্মক আধান (δ-) এবং অপর পরমাণুতে আংশিক ধনাত্মক আধান (δ+) সৃষ্টি হয়। এই আধান প্রান্তিকতাকে পোলারিটি এবং যৌগটিকে পোলার সমযোজী যৌগ বলে।',
        formula: 'H^(δ+) – O^(δ-) – H^(δ+) (পোলার পানি অণু)'
      },
      {
        heading: 'দ্রাব্যতার সার্বজনীন নীতি (Like Dissolves Like)',
        description: 'পোলার দ্রাবক পোলার যৌগকে এবং অপোলার দ্রাবক অপোলার যৌগকে দ্রবীভূত করে।\n• পানি একটি উৎকৃষ্ট পোলার দ্রাবক। তাই অধিকাংশ আয়নিক যৌগ (যেমন NaCl, CuSO₄, KNO₃) পানিতে চমৎকার দ্রবীভূত হয়।\n• অপোলার জৈব দ্রাবকে (যেমন কেরোসিন, বেনজিন, পেট্রোল, কার্বন টেট্রাক্লোরাইড) আয়নিক যৌগ সম্পূর্ণ অদ্রবণীয়, কিন্তু অপোলার সমযোজী যৌগ (তেল, চর্বি, মোম) দ্রবীভূত হয়।',
        highlight: 'পোলার দ্রাবকে আয়নিক যৌগ দ্রবীভূত হয়'
      },
      {
        heading: 'ব্যতিক্রমী সমযোজী যৌগ যা পানিতে দ্রবীভূত হয়',
        description: 'অ্যালকোহল (C₂H₅OH), গ্লুকোজ (C₆H₁₂O₆), চিনি এবং হাইড্রোজেন ক্লোরাইড (HCl) সমযোজী যৌগ হওয়া সত্ত্বেও এদের অণুতে পোলার –OH বা H–Cl বন্ধন থাকে। এরা পানির সাথে হাইড্রোজেন বন্ধন গঠন করে সহজেই পানিতে দ্রবীভূত হয়।',
        highlight: 'অ্যালকোহল ও চিনি পোলার হওয়ায় পানিতে দ্রবীভূত'
      }
    ],
    callout: {
      type: 'tip',
      title: 'বোর্ড পরীক্ষার অত্যন্ত জনপ্রিয় প্রশ্ন',
      content: '“পানি একটি পোলার সমযোজী যৌগ—ব্যাখ্যা করো।” ➜ অক্সিজেনের তড়িৎ ঋণাত্মকতা ৩.৪৪ এবং হাইড্রোজেনের ২.২০; পার্থক্যের কারণে আংশিক চার্জ (δ+, δ-) সৃষ্টি হওয়ায় পানি পোলার যৌগ।'
    },
    speakerNotes: 'শিক্ষার্থীদের পানির অণুর আকৃতি এবং কীভাবে পানি সোডিয়াম ক্লোরাইডের ক্রিস্টাল ভেঙে দ্রবীভূত করে তা ভিজ্যুয়ালাইজ করান।',
    recommendedInteractiveTab: 'compoundProps'
  },
  {
    id: 14,
    chapter: 5,
    title: 'বিদ্যুৎ পরিবাহিতা পরীক্ষা (Electrical Conductivity)',
    subtitle: 'আয়নিক যৌগ, সমযোজী যৌগ ও ধাতুর বিদ্যুৎ পরিবাহিতার মেকানিজম ও শর্ত',
    category: 'যৌগের ধর্মাবলী',
    gallery: [
      {
        id: 'c5_s14_img1',
        titleBn: 'বিদ্যুৎ পরিবাহিতা পরীক্ষার বর্তনী (Conductivity Circuit)',
        titleEn: 'Conductivity Circuit Experiment',
        captionBn: 'গলিত বা জলীয় দ্রবণে NaCl বিদ্যুৎ পরিবহন করে বাতি জ্বালায়; কিন্তু কঠিন NaCl বা চিনির দ্রবণ বিদ্যুৎ পরিবহন করে না',
        captionEn: 'Electrolyte solutions conduct electricity via free mobile ions closing the circuit',
        type: 'diagram',
        customDiagramType: 'waterPolarityHydration'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'মুক্ত আয়ন (Free Ions)',
        labelEn: 'Mobile Free Ions',
        symbol: 'Na⁺(aq), Cl⁻(aq)',
        detailBn: 'পানিতে দ্রবীভূত বা গলিত অবস্থায় আয়নগুলি ল্যাটিস থেকে মুক্ত হয়ে ধনাত্মক ও ঋণাত্মক ইলেক্ট্রোডের দিকে ধাবিত হয় এবং বিদ্যুৎ পরিবহন করে।',
        detailEn: 'Dissociated hydrated ions migrate toward oppositely charged electrodes carrying current.',
        badgeType: 'cation',
        position: { x: 50, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'বিদ্যুৎ পরিবহনের শর্ত',
        description: 'যেকোনো পদার্থের মধ্য দিয়ে বিদ্যুৎ প্রবাহিত হতে হলে হয় মুক্ত ইলেকট্রন (যেমন ধাতু) অথবা মুক্তভাবে চলাচলকারী আয়ন (যেমন ইলেক্ট্রোলাইট দ্রবণ) উপস্থিত থাকতে হবে।',
        highlight: 'মুক্ত ইলেকট্রন অথবা মুক্ত আয়নের উপস্থিতি আবশ্যক'
      },
      {
        heading: 'আয়নিক যৌগের বিদ্যুৎ পরিবাহিতা',
        description: '• কঠিন অবস্থায়: কঠিন NaCl-এর স্ফটিকে Na⁺ এবং Cl⁻ আয়নগুলি দৃঢ়ভাবে ল্যাটিসে আটকে থাকে, কোনো মুক্ত আয়ন থাকে না। তাই কঠিন আয়নিক যৌগ বিদ্যুৎ পরিবহন করে না।\n• গলিত বা জলীয় দ্রবণে: পানিতে দ্রবীভূত করলে বা উত্তাপে গলালে ক্রিস্টাল ল্যাটিস ভেঙে মুক্ত ও গতিশীল Na⁺ এবং Cl⁻ আয়ন তৈরি হয়। তাই গলিত বা দ্রবীভূত আয়নিক যৌগ চমৎকার বিদ্যুৎ পরিবাহী (তড়িৎবিশ্লেষ্য)।',
        formula: 'NaCl(s) ➜ অপরিবাহী | NaCl(aq) ➜ সুপরিবাহী'
      },
      {
        heading: 'সমযোজী যৌগের বিদ্যুৎ পরিবাহিতা',
        description: 'অধিকাংশ সমযোজী যৌগে কোনো আয়ন সৃষ্টি হয় না এবং কোনো মুক্ত ইলেকট্রন থাকে না (যেমন চিনির দ্রবণ, অ্যালকোহল, পেট্রোল)। তাই সমযোজী যৌগ বিদ্যুৎ পরিবহন করে না (তড়িৎ-অবিশ্লেষ্য)। তবে পোলার সমযোজী গ্যাস HCl পানিতে দ্রবীভূত হলে H⁺ ও Cl⁻ আয়ন তৈরি করায় এর দ্রবণ বিদ্যুৎ পরিবহন করে।',
        highlight: 'সমযোজী যৌগ সাধারণ অবস্থায় অপরিবাহী'
      }
    ],
    tableData: {
      caption: 'বিভিন্ন পদার্থের বিদ্যুৎ পরিবাহিতার তুলনামূলক সারসংক্ষেপ',
      headers: ['পদার্থ', 'শ্রেণি', 'কঠিন অবস্থায় পরিবাহিতা', 'জলীয় দ্রবণ / গলিত অবস্থায়', 'পরিবহনের বাহক'],
      rows: [
        ['তামার তার (Cu)', 'ধাতু', 'সুপরিবাহী (বাতি জ্বলে)', 'সুপরিবাহী', 'সঞ্চারণশীল মুক্ত ইলেকট্রন'],
        ['লবণ (NaCl)', 'আয়নিক', 'অপরিবাহী (বাতি জ্বলে না)', 'সুপরিবাহী (বাতি জ্বলে)', 'মুক্ত গতিশীল Na⁺ ও Cl⁻ আয়ন'],
        ['চিনি (C₁₂H₂₂O₁₁)', 'সমযোজী', 'অপরিবাহী', 'অপরিবাহী', 'কোনো মুক্ত আয়ন বা ইলেকট্রন নেই'],
        ['মোম (Wax)', 'সমযোজী', 'অপরিবাহী', 'অপরিবাহী', 'অপোলার অণু'],
        ['হাইড্রোক্লোরিক অ্যাসিড', 'পোলার সমযোজী', 'গ্যাস অবস্থায় অপরিবাহী', 'সুপরিবাহী (আয়নিত হয়)', 'H⁺(aq) ও Cl⁻(aq) আয়ন']
      ]
    },
    callout: {
      type: 'tip',
      title: 'বোর্ড পরীক্ষায় আসা অন্যতম প্রধান প্রশ্ন',
      content: '“কঠিন সোডিয়াম ক্লোরাইড বিদ্যুৎ পরিবহন করে না কিন্তু এর জলীয় দ্রবণ বিদ্যুৎ পরিবহন করে কেন?”—এর উত্তর মুক্ত আয়নের অনুপস্থিতি ও উপস্থিতির ভিত্তিতে ব্যাখ্যা করতে হবে।'
    },
    speakerNotes: 'শিক্ষার্থীদের বাতি, ব্যাটারি ও দুই তার পানিতে চুবিয়ে বাতি জ্বলার ল্যাবরেটরি এক্সপেরিমেন্ট বুঝিয়ে দিন।',
    recommendedInteractiveTab: 'compoundProps'
  },
  {
    id: 15,
    chapter: 5,
    title: 'অধ্যায় ৫-এর সম্পূর্ণ সারসংক্ষেপ ও পরীক্ষার প্রস্তুতি',
    subtitle: 'রাসায়নিক বন্ধন, যোজনী, সংকেত, আয়নিক ও সমযোজী ধর্মের দ্রুত রিভিশন ও সৃজনশীল টিপস',
    category: 'সারসংক্ষেপ ও প্রস্তুতি',
    gallery: [
      {
        id: 'c5_s15_img1',
        titleBn: 'অধ্যায় ৫-এর সমন্বিত রিভিশন মানচিত্র',
        titleEn: 'Comprehensive Chapter 5 Revision Map',
        captionBn: 'যোজ্যতা ইলেকট্রন ➜ যোজনী ➜ যৌগমূলক ➜ সংকেত ➜ বন্ধন প্রকার ➜ ধর্মের তুলনামূলক চিত্র',
        captionEn: 'Unified conceptual framework from valence electrons and valency to ionic and covalent properties',
        type: 'diagram',
        customDiagramType: 'ionicBondFormation'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'অধ্যায়ের মূল সিদ্ধান্ত',
        labelEn: 'Core Chapter Takeaway',
        symbol: 'Mastery',
        detailBn: 'ইলেকট্রন স্থানান্তর = আয়নিক বন্ধন (উচ্চ গলনাঙ্ক, বিদ্যুৎ পরিবাহী দ্রবণ)। ইলেকট্রন শেয়ারিং = সমযোজী বন্ধন (নিম্ন গলনাঙ্ক, সাধারণ অবস্থায় অপরিবাহী)।',
        detailEn: 'Electron transfer creates ionic bonds; sharing creates covalent bonds with stark property differences.',
        badgeType: 'bond',
        position: { x: 50, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'গুরুত্বপূর্ণ সংজ্ঞাসমূহ একঝলকে',
        description: '• যোজ্যতা ইলেকট্রন: পরমাণুর সর্ববহিঃস্থ প্রধান শক্তিস্তরের মোট ইলেকট্রন সংখ্যা।\n• যোজনী: পরমাণুর যুক্ত হওয়ার ক্ষমতা (H-এর সাপেক্ষে)।\n• পরিবর্তনশীল যোজনী: একাধিক যোজনী প্রদর্শনের সামর্থ্য (Fe, Cu, P, S)।\n• সুপ্ত যোজনী = সর্বোচ্চ যোজনী – সক্রিয় যোজনী।\n• আয়নিক বন্ধন: ধাতু ও অধাতুর মধ্যে ইলেকট্রন আদান-প্রদান দ্বারা গঠিত বন্ধন।\n• সমযোজী বন্ধন: অধাতুসমূহের মধ্যে ইলেকট্রন শেয়ারিং দ্বারা গঠিত বন্ধন।\n• পোলারিটি: তড়িৎ ঋণাত্মকতার পার্থক্যের কারণে আংশিক ধনাত্মক ও ঋণাত্মক চার্জ সৃষ্টি।',
        highlight: 'সংজ্ঞাসমূহ নির্ভুলভাবে মুখস্থ করুন'
      },
      {
        heading: 'সৃজনশীল প্রশ্নের সুপারহিট অনুধাবনমূলক প্রশ্নাবলি',
        description: '১. পানি একটি পোলার সমযোজী যৌগ কেন?\n২. কঠিন NaCl বিদ্যুৎ পরিবহন না করলেও গলিত বা দ্রবীভূত NaCl বিদ্যুৎ পরিবহন করে কেন?\n৩. অষ্টক নিয়মের চেয়ে দুইয়ের নিয়ম অধিকতর গ্রহণযোগ্য কেন?\n৪. FeCl₂-এ আয়রনের সুপ্ত যোজনী কত এবং কেন?\n৫. Na⁺ এবং Cl⁻ উভয়েই কোন কোন নিষ্ক্রিয় গ্যাসের ইলেকট্রন বিন্যাস লাভ করে?',
        highlight: 'খ-নম্বর প্রশ্নের পূর্ণাঙ্গ প্রস্তুতি'
      },
      {
        heading: 'সৃজনশীল উদ্দীপক সমাধান কৌশল',
        description: 'পরীক্ষায় মৌলগুলোর প্রকৃত প্রতীক না দিয়ে প্রায়শই কাল্পনিক প্রতীক (যেমন: A, B, D যাদের পারমাণবিক সংখ্যা যথাক্রমে ১১, ১২, ১৭) দেওয়া থাকে। আগে পারমাণবিক সংখ্যা থেকে ইলেকট্রন বিন্যাস করে মৌল শনাক্ত করবেন: A = Na (ধাতু), D = Cl (অধাতু)। ধাতু + অধাতু হলে গঠিত বন্ধন আয়নিক (AD বা NaCl); অধাতু + অধাতু হলে সমযোজী।',
        highlight: 'কাল্পনিক প্রতীক থেকে বন্ধনের ধরন শনাক্তকরণ'
      }
    ],
    callout: {
      type: 'tip',
      title: 'পরবর্তী ধাপ',
      content: 'এখন কুইজ টেস্ট সেকশনে গিয়ে অধ্যায় ৫-এর বহুনির্বাচনী প্রশ্ন সমাধান করুন এবং রাসায়নিক বন্ধন সিমুলেটর ও সংকেত বিল্ডার ল্যাব এক্সপ্লোর করুন!'
    },
    speakerNotes: 'শিক্ষার্থীদের সম্পূর্ণ অধ্যায়ের রিভিশন করিয়ে কুইজে অংশগ্রহণের জন্য অনুপ্রাণিত করুন।'
  }
];
