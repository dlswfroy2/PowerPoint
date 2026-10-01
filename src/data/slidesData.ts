import { Slide } from '../types/presentation';

const rawSlides: Slide[] = [
  {
    id: 1,
    title: 'অধ্যায় ৩: পদার্থের গঠন',
    subtitle: 'Structure of Matter — পরমাণুর রহস্য, ইলেকট্রন ও কোয়ান্টাম ভিত্তি',
    category: 'সূচনা ও প্রেক্ষাপট',
    gallery: [
      {
        id: 's1_img1',
        url: '/src/assets/images/electron_particle_orbit_1790750719456.jpg',
        titleBn: 'ইলেকট্রন ও কোয়ান্টাম কক্ষপথ',
        titleEn: 'Electron (e⁻) & Quantum Orbit',
        captionBn: 'ইলেকট্রন (Electron, e⁻): ঋণাত্মক আধানযুক্ত মূল কণিকা, পরিভ্রমণরত কোয়ান্টাম কক্ষপথ ও শক্তিস্তরের চিত্রায়ন',
        captionEn: 'Electron (e⁻): Negatively charged fundamental particle orbiting in discrete quantum energy shells',
        type: 'photo'
      },
      {
        id: 's1_img2',
        url: '/src/assets/images/hero_chemistry_atom_1790749681138.jpg',
        titleBn: 'পরমাণুর ত্রিমাত্রিক কাঠামো',
        titleEn: '3D Atomic Structure & Nucleus',
        captionBn: 'পরমাণুর নিউক্লিয়াস ও পরিভ্রমণরত ইলেকট্রন মেঘের আধুনিক ত্রিমাত্রিক রূপরেখা',
        captionEn: 'Modern 3D representation of dense nucleus surrounded by orbiting electron clouds',
        type: 'photo'
      },
      {
        id: 's1_img3',
        titleBn: 'পরমাণু মডেলের ঐতিহাসিক বিবর্তন',
        titleEn: 'Atomic Models Evolution Timeline',
        captionBn: 'ডেমোক্রিটাস (খ্রিষ্টপূর্ব ৪০০) থেকে ডাল্টন, রাদারফোর্ড ও বোর কোয়ান্টাম মডেলের ধারাবাহিক রূপান্তর',
        captionEn: 'Chronological timeline from Democritus (400 BC) and Dalton to Rutherford and Bohr',
        type: 'diagram',
        customDiagramType: 'periodicMini'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ইলেকট্রন',
        labelEn: 'Electron',
        symbol: 'e⁻',
        detailBn: 'পরমাণুর ঋণাত্মক আধানযুক্ত মূল কণিকা (-1.60 × 10⁻¹⁹ C, ভর 9.11 × 10⁻³¹ kg)',
        detailEn: 'Negatively charged fundamental particle (-1.60 × 10⁻¹⁹ C, mass 9.11 × 10⁻³¹ kg)',
        badgeType: 'electron',
        position: { x: 70, y: 35 }
      },
      {
        labelBn: 'প্রোটন',
        labelEn: 'Proton',
        symbol: 'p⁺',
        detailBn: 'নিউক্লিয়াসে অবস্থিত ধনাত্মক আধানযুক্ত কণিকা (+1.60 × 10⁻¹⁹ C, ভর 1.673 × 10⁻²⁷ kg)',
        detailEn: 'Positively charged particle inside nucleus (+1.60 × 10⁻¹⁹ C, mass 1.673 × 10⁻²⁷ kg)',
        badgeType: 'proton',
        position: { x: 48, y: 46 }
      },
      {
        labelBn: 'নিউট্রন',
        labelEn: 'Neutron',
        symbol: 'n⁰',
        detailBn: 'নিউক্লিয়াসে অবস্থিত চার্জহীন বা নিরপেক্ষ কণিকা (ভর 1.675 × 10⁻²⁷ kg)',
        detailEn: 'Neutral particle with zero electric charge inside nucleus (mass 1.675 × 10⁻²⁷ kg)',
        badgeType: 'neutron',
        position: { x: 53, y: 53 }
      },
      {
        labelBn: 'কেন্দ্রীন / নিউক্লিয়াস',
        labelEn: 'Atomic Nucleus',
        symbol: 'Nucleus',
        detailBn: 'পরমাণুর কেন্দ্রে প্রোটন ও নিউট্রনের ঘন ভারী সমাবেশ যেখানে সমগ্র ভর কেন্দ্রীভূত',
        detailEn: 'Dense central core housing protons and neutrons where mass is concentrated',
        badgeType: 'nucleus',
        position: { x: 50, y: 49 }
      },
      {
        labelBn: 'কোয়ান্টাম কক্ষপথ',
        labelEn: 'Quantum Orbit / Shell',
        symbol: 'Shell (n)',
        detailBn: 'ইলেকট্রনের নির্দিষ্ট অনুমোদিত শক্তিস্তর (K, L, M, N...)',
        detailEn: 'Permitted circular stationary energy levels (K, L, M, N...)',
        badgeType: 'orbit',
        position: { x: 28, y: 28 }
      }
    ],
    keyPoints: [
      {
        heading: 'ইলেকট্রন (Electron, e⁻) এর স্বকীয়তা',
        description: '১৮৯৭ সালে স্যার জে. জে. থমসন কর্তৃক আবিষ্কৃত এই অতিপারমাণবিক ঋণাত্মক চার্জিত কণিকাটি (-1.60 × 10⁻¹⁹ C) নিউক্লিয়াসের চারপাশে অনুমোদিত কোয়ান্টাম কক্ষপথে তীব্র গতিতে আবর্তন করে এবং রাসায়নিক বন্ধন ও ধর্মের চালিকাশক্তি।'
      },
      {
        heading: 'অধ্যায়ের মূল প্রতিপাদ্য',
        description: 'মহাবিশ্বের যাবতীয় দৃশ্যমান বস্তু কীভাবে ক্ষুদ্রাতিক্ষুদ্র পরমাণু দিয়ে গঠিত এবং পরমাণুর ভেতর মূল কণিকাসমূহ (ইলেকট্রন, প্রোটন ও নিউট্রন) কীভাবে সজ্জিত থাকে তার বৈজ্ঞানিক বিশ্লেষণ।'
      },
      {
        heading: 'প্রাচীন ধারণা বনাম আধুনিক বিজ্ঞান',
        description: 'গ্রিক দার্শনিক ডেমোক্রিটাস (Democritus) কর্তৃক খ্রিষ্টপূর্ব ৪০০ অব্দে প্রবর্তিত "অ্যাটোমোস" (Atomos - অবিভাজ্য) ধারণা থেকে ১৮০৩ সালে জন ডাল্টনের পরমাণুবাদ এবং বিংশ শতাব্দীর কোয়ান্টাম মডেলের রূপান্তর।'
      },
      {
        heading: 'শিক্ষণফল',
        description: 'ইলেকট্রন ও মৌলিক কণিকাসমূহের বৈশিষ্ট্য, পারমাণবিক সংখ্যা ও ভর সংখ্যা, রাদারফোর্ড ও বোর মডেলের তুলনামূলক মূল্যায়ন, উপশক্তিস্তরভিত্তিক ইলেকট্রন বিন্যাস এবং আইসোটোপের প্রয়োগ নির্ণয়।'
      }
    ],
    callout: {
      type: 'info',
      title: 'বিজ্ঞানীর মন্তব্য',
      content: '"যদি কোনো বৈজ্ঞানিক বিপর্যয়ে সমস্ত বৈজ্ঞানিক জ্ঞান ধ্বংস হয়ে যায় এবং পরবর্তী প্রজন্মের জন্য কেবল একটি বাক্য রেখে যাওয়া সম্ভব হয়, তবে সেটি হবে—সব পদার্থই পরমাণু দ্বারা গঠিত।" — রিচার্ড ফাইনম্যান'
    },
    speakerNotes: 'প্রথম স্লাইডে প্রদর্শিত ইলেকট্রনের চিত্রটির প্রতি শিক্ষার্থীদের দৃষ্টি আকর্ষণ করুন। আলোচনা করুন কীভাবে ১৮৯৭ সালে ক্যাথোড রশ্মি পরীক্ষার মাধ্যমে জে. জে. থমসন প্রমাণ করেছিলেন যে পরমাণু অবিভাজ্য নয়, বরং এর ভেতরে ইলেকট্রন নামক অতিক্ষুদ্র ঋণাত্মক কণিকা বিদ্যমান।'
  },
  {
    id: 2,
    title: 'মৌলিক ও যৌগিক পদার্থ এবং প্রতীক ও সংকেত',
    subtitle: 'Elements, Compounds, Chemical Symbols and Formulas',
    category: 'মৌলিক ধারণা',
    gallery: [
      {
        id: 's2_img1',
        url: '/src/assets/images/elements_compounds_1790751385322.jpg',
        titleBn: 'মৌলিক ও যৌগিক অণুর জালিকা',
        titleEn: 'Elements & Compounds Lattices',
        captionBn: 'স্বর্ণের (Gold, Au) মতো মৌলিক পদার্থের ক্রিস্টাল জালিকা এবং পানির (Water, H₂O) মতো যৌগিক পদার্থের ত্রিমাত্রিক আণবিক বিন্যাস',
        captionEn: 'Crystalline lattices of pure chemical elements (Gold) and molecular structures of compounds (Water H₂O)',
        type: 'photo'
      },
      {
        id: 's2_img2',
        url: '/src/assets/images/hero_chemistry_atom_1790749681138.jpg',
        titleBn: 'মৌলের পরমাণু সত্তা',
        titleEn: 'Atomic Entity of Elements',
        captionBn: 'প্রতিটি মৌলিক পদার্থের বৈশিষ্ট্য নির্ধারিত হয় তার নিজস্ব পারমাণবিক গঠন ও প্রোটন সংখ্যা দ্বারা',
        captionEn: 'Unique properties of elements governed by fundamental atomic number and nuclear structure',
        type: 'photo'
      },
      {
        id: 's2_img3',
        titleBn: 'ঐতিহাসিক পরমাণু রূপান্তর',
        titleEn: 'Atomic Historical Transitions',
        captionBn: 'মৌলিক পদার্থের অবিভাজ্যতা থেকে আধুনিক পারমাণবিক ধারণার ক্রমান্বয়',
        captionEn: 'Chronology from indivisible atoms to modern subatomic structures',
        type: 'diagram',
        customDiagramType: 'periodicMini'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'গোল্ড ক্রিস্টাল জালিকা (স্বর্ণ)',
        labelEn: 'Gold Crystal Lattice (Au)',
        symbol: 'Au (Gold)',
        detailBn: 'মৌলিক পদার্থ: কেবল গোল্ড বা সোনার একই ধরণের পরমাণুর সুষম স্ফটিক জালিকা',
        detailEn: 'Pure element composed exclusively of identical Gold (Au) atoms in a cubic lattice',
        badgeType: 'gold',
        position: { x: 30, y: 40 }
      },
      {
        labelBn: 'পানির অণু (যৌগিক পদার্থ)',
        labelEn: 'Water Molecule (H₂O)',
        symbol: 'H₂O',
        detailBn: 'যৌগিক পদার্থ: হাইড্রোজেন ও অক্সিজেন পরমাণু নির্দিষ্ট ভরের অনুপাতে যুক্ত অণু',
        detailEn: 'Chemical compound formed by hydrogen and oxygen in fixed 2:1 atomic ratio',
        badgeType: 'orbit',
        position: { x: 72, y: 40 }
      },
      {
        labelBn: 'অক্সিজেন পরমাণু',
        labelEn: 'Oxygen Atom (O)',
        symbol: 'O (Z=8)',
        detailBn: 'পানির অণুর কেন্দ্রীয় দ্বি-যোজী পরমাণু',
        detailEn: 'Central electronegative atom in water molecule',
        badgeType: 'proton',
        position: { x: 67, y: 55 }
      },
      {
        labelBn: 'হাইড্রোজেন পরমাণু',
        labelEn: 'Hydrogen Atom (H)',
        symbol: 'H (Z=1)',
        detailBn: 'অক্সিজেনের সাথে সমযোজী বন্ধনে আবদ্ধ হালকা মৌল',
        detailEn: 'Lightest element sharing electrons with oxygen via covalent bond',
        badgeType: 'electron',
        position: { x: 80, y: 62 }
      }
    ],
    keyPoints: [
      {
        heading: 'মৌলিক পদার্থ (Elements)',
        description: 'যেসব পদার্থকে রাসায়নিকভাবে বিশ্লেষণ করলে ওই পদার্থ ছাড়া অন্য কোনো নতুন ধর্মের পদার্থ পাওয়া যায় না। বর্তমানে মোট ১১৮টি মৌলিক পদার্থ আবিষ্কৃত হয়েছে (প্রকৃতিতে প্রাপ্ত ৯৮টি, পরীক্ষাগারে সংশ্লেষিত ২০টি)।'
      },
      {
        heading: 'যৌগিক পদার্থ (Compounds)',
        description: 'দুই বা ততোধিক মৌলিক পদার্থ নির্দিষ্ট ভরের অনুপাতে রাসায়নিকভাবে যুক্ত হয়ে ভিন্ন ধর্মবিশিষ্ট যে নতুন পদার্থ সৃষ্টি করে (যেমন: জল H₂O, খাবার লবণ NaCl, মিথেন CH₄)।'
      },
      {
        heading: 'প্রতীক (Symbol) ও সংকেত (Formula)',
        description: 'কোনো মৌলের ইংরেজি বা ল্যাটিন নামের সংক্ষিপ্ত রূপকে প্রতীক বলে (যেমন: সোডিয়াম Natrium → Na, লোহা Ferrum → Fe, সোনা Aurum → Au)। অণুর গঠন সংক্ষিপ্তাকারে প্রকাশকে সংকেত বলে (যেমন: H₂SO₄, O₂, C₆H₁₂O₆)।'
      }
    ],
    tableData: {
      caption: 'ল্যাটিন নাম থেকে আগত গুরুত্বপূর্ণ রাসায়নিক প্রতীকসমূহ',
      headers: ['মৌলের প্রচলিত নাম', 'ল্যাটিন নাম', 'প্রতীক', 'পারমাণবিক সংখ্যা (Z)'],
      rows: [
        ['সোডিয়াম (Sodium)', 'Natrium', 'Na', 11],
        ['পটাশিয়াম (Potassium)', 'Kalium', 'K', 19],
        ['তামা (Copper)', 'Cuprum', 'Cu', 29],
        ['লোহা (Iron)', 'Ferrum', 'Fe', 26],
        ['রুপা (Silver)', 'Argentum', 'Ag', 47],
        ['সোনা (Gold)', 'Aurum', 'Au', 79],
        ['সীসা (Lead)', 'Plumbum', 'Pb', 82]
      ]
    },
    speakerNotes: 'বোর্ড পরীক্ষায় সোডিয়াম, পটাশিয়াম, কপার এবং সোনার ল্যাটিন নাম প্রায়ই বহুনির্বাচনী প্রশ্নে আসে। শিক্ষার্থীদের প্রতীকের প্রথম অক্ষর ক্যাপিটাল ও দ্বিতীয় অক্ষর স্মল লেখার আন্তর্জাতিক নিয়ম (IUPAC) স্মরণ করিয়ে দিন।'
  },
  {
    id: 3,
    title: 'পরমাণুর মূল কণিকাসমূহ',
    subtitle: 'Subatomic Particles — ইলেকট্রন, প্রোটন ও নিউট্রনের তুলনামূলক ধর্ম',
    category: 'পারমাণবিক কণা',
    gallery: [
      {
        id: 's3_img1',
        url: '/src/assets/images/hero_chemistry_atom_1790749681138.jpg',
        titleBn: 'কেন্দ্রীন ও ইলেকট্রন মেঘ',
        titleEn: 'Nucleus & Electron Cloud',
        captionBn: 'পরমাণুর মূল কণিকাসমূহ: কেন্দ্রীন নিউক্লিয়াসে প্রোটন ও নিউট্রন এবং বহিস্থ শক্তিস্তরে আবর্তনশীল ইলেকট্রন বলয়',
        captionEn: 'Core nucleus containing protons and neutrons surrounded by extra-nuclear electron shells',
        type: 'photo'
      },
      {
        id: 's3_img2',
        url: '/src/assets/images/electron_particle_orbit_1790750719456.jpg',
        titleBn: 'ইলেকট্রনের কোয়ান্টাম তরঙ্গ',
        titleEn: 'Electron Wave-Particle',
        captionBn: 'ইলেকট্রনের অতিক্ষুদ্র ভর (9.11 × 10⁻³¹ kg) ও ঋণাত্মক আধান (-1.60 × 10⁻¹⁹ C) বিশিষ্ট গতিশীল আচরণ',
        captionEn: 'Electron showing wave-particle behavior with mass 9.11 × 10⁻³¹ kg and negative charge -1.60 × 10⁻¹⁹ C',
        type: 'photo'
      },
      {
        id: 's3_img3',
        titleBn: 'মূল কণিকাসমূহের চার্ট',
        titleEn: 'Subatomic Particles Comparison',
        captionBn: 'ইলেকট্রন, প্রোটন ও নিউট্রনের আপেক্ষিক আধান, প্রকৃত ভর ও বৈশিষ্ট্যের তুলনামূলক চার্ট',
        captionEn: 'Comparison of charge, mass and discovery of electron, proton, and neutron',
        type: 'diagram',
        customDiagramType: 'subatomicChart'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ইলেকট্রন বলয়',
        labelEn: 'Electron Cloud / Orbits',
        symbol: 'e⁻',
        detailBn: 'নিউক্লিয়াসের বাইরে ঘূর্ণায়মান ঋণাত্মক ইলেকট্রন অঞ্চল (-1.60 × 10⁻¹⁹ C, ভর 9.11 × 10⁻³¹ kg)',
        detailEn: 'Extra-nuclear orbital region with orbiting electrons (-1.60 × 10⁻¹⁹ C, mass 9.11 × 10⁻³¹ kg)',
        badgeType: 'electron',
        position: { x: 75, y: 40 }
      },
      {
        labelBn: 'প্রোটন',
        labelEn: 'Proton',
        symbol: 'p⁺',
        detailBn: 'নিউক্লিয়াসে অবস্থিত ধনাত্মক কণা (+1.60 × 10⁻¹⁹ C, ভর 1.673 × 10⁻²⁷ kg)',
        detailEn: 'Positively charged particle inside nucleus (Mass: 1.673 × 10⁻²⁷ kg)',
        badgeType: 'proton',
        position: { x: 47, y: 47 }
      },
      {
        labelBn: 'নিউট্রন',
        labelEn: 'Neutron',
        symbol: 'n⁰',
        detailBn: 'নিউক্লিয়াসে অবস্থিত আধানহীন কণা (ভর 1.675 × 10⁻²⁷ kg)',
        detailEn: 'Electrically neutral particle inside nucleus (Mass: 1.675 × 10⁻²⁷ kg)',
        badgeType: 'neutron',
        position: { x: 53, y: 53 }
      },
      {
        labelBn: 'নিউক্লিয়াস বা কেন্দ্রীন',
        labelEn: 'Central Nucleus',
        symbol: 'Nucleus',
        detailBn: 'পরমাণুর ভরকেন্দ্র (প্রোটন + নিউট্রন = ভর সংখ্যা A)',
        detailEn: 'Center of atomic mass (Protons + Neutrons = Mass number A)',
        badgeType: 'nucleus',
        position: { x: 50, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'স্থায়ী মূল কণিকা (Fundamental Particles)',
        description: 'পরমাণু অবিভাজ্য নয়; প্রতিটি পরমাণু মূলত তিনটি স্থায়ী কণিকা নিয়ে গঠিত: ধনাত্মক চার্জের প্রোটন, চার্জহীন নিউট্রন এবং ঋণাত্মক চার্জের ইলেকট্রন। (ব্যতিক্রম: সাধারণ হাইড্রোজেন বা প্রোটিয়ামে কোনো নিউট্রন নেই)।'
      },
      {
        heading: 'কেন্দ্রীন বা নিউক্লিয়াস (Nucleus)',
        description: 'পরমাণুর কেন্দ্রে অতি ক্ষুদ্র স্থানে প্রোটন ও নিউট্রন একসঙ্গে অবস্থান করে, যাকে নিউক্লিয়ন (Nucleon) বলা হয়। পরমাণুর প্রায় সমগ্র ভরই নিউক্লিয়াসে পুঞ্জীভূত।'
      },
      {
        heading: 'ইলেকট্রন বলয় (Extra-nuclear Region)',
        description: 'নিউক্লিয়াসের বাইরে বিপুল শূন্যস্থান জুড়ে নির্দিষ্ট অনুমোদিত কক্ষপথে দ্রুতগতিতে ইলেকট্রনসমূহ আবর্তন করে।'
      }
    ],
    tableData: {
      caption: 'স্থায়ী মূল কণিকাসমূহের সুনির্দিষ্ট ভৌত বৈশিষ্ট্যসমূহ',
      headers: ['কণিকা', 'প্রতীক', 'আবিষ্কারক ও সাল', 'প্রকৃত ভর (kg)', 'প্রকৃত আধান (Coulomb)', 'আপেক্ষিক আধান', 'আপেক্ষিক ভর'],
      rows: [
        ['ইলেকট্রন', 'e⁻', 'জে. জে. থমসন (১৮৯৭)', '9.11 × 10⁻³¹ kg', '-1.60 × 10⁻¹⁹ C', '-1', '1/1840 (≈ 0)'],
        ['প্রোটন', 'p⁺', 'আর্নেস্ট রাদারফোর্ড (১৯১১)', '1.673 × 10⁻²⁷ kg', '+1.60 × 10⁻¹⁹ C', '+1', '1'],
        ['নিউট্রন', 'n⁰', 'জেমস চ্যাডউইক (১৯৩২)', '1.675 × 10⁻²⁷ kg', '0 (চার্জহীন)', '0', '1']
      ]
    },
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক',
      content: 'ইলেকট্রনের ভর প্রোটন বা নিউট্রনের ভরের তুলনায় প্রায় ১৮৪০ গুণ হালকা। তাই পরমাণুর আপেক্ষিক ভর গণনায় ইলেকট্রনের ভর অগ্রাহ্য করা হয়।'
    },
    speakerNotes: 'শিক্ষার্থীদের লক্ষ্য করান যে প্রোটন ও নিউট্রনের ভর প্রায় সমান হলেও নিউট্রন সামান্য ভারী। ইলেকট্রনের প্রকৃত আধান ও ভরের এসআই একক ও মান মুখস্থ রাখার নির্দেশ দিন।'
  },
  {
    id: 4,
    title: 'পারমাণবিক সংখ্যা ও ভর সংখ্যা',
    subtitle: 'Atomic Number (Z), Mass Number (A) & Isotopic Notation',
    category: 'গাণিতিক ভিত্তি',
    gallery: [
      {
        id: 's4_img1',
        titleBn: 'প্রমিত পরমাণু প্রতীকীয় সংকেত',
        titleEn: 'Standard Isotopic Notation',
        captionBn: 'প্রমিত সংকেত কাঠামো: বাম উপরে ভর সংখ্যা (A), বাম নিচে পারমাণবিক সংখ্যা (Z) এবং ডানে আধান',
        captionEn: 'Standard nuclear symbol notation displaying mass number A, atomic number Z, and charge',
        type: 'diagram',
        customDiagramType: 'notation'
      },
      {
        id: 's4_img2',
        url: '/src/assets/images/hero_chemistry_atom_1790749681138.jpg',
        titleBn: 'প্রোটন ও নিউট্রন নিউক্লিয়াস',
        titleEn: 'Proton & Neutron Nucleus',
        captionBn: 'নিউক্লিয়াসে প্রোটন ও নিউট্রনের সমন্বিত ভর সংখ্যা (A = Z + N) গঠন',
        captionEn: 'Composition of atomic mass number where total nucleons equal protons plus neutrons',
        type: 'photo'
      },
      {
        id: 's4_img3',
        titleBn: 'মৌলিক কণিকাসমূহের ধর্ম চার্ট',
        titleEn: 'Subatomic Particles Chart',
        captionBn: 'ইলেকট্রন, প্রোটন ও নিউট্রনের চার্জ ও ভরের নির্ভুল তুলনা',
        captionEn: 'Precise comparison of charges and rest masses of fundamental particles',
        type: 'diagram',
        customDiagramType: 'subatomicChart'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ভর সংখ্যা (A = p + n)',
        labelEn: 'Mass Number (A)',
        symbol: 'A (Top-Left)',
        detailBn: 'নিউক্লিয়াসের মোট প্রোটন ও নিউট্রন সংখ্যার যোগফল',
        detailEn: 'Total nucleons (protons + neutrons) inside atomic nucleus',
        badgeType: 'nucleus',
        position: { x: 35, y: 32 }
      },
      {
        labelBn: 'পারমাণবিক সংখ্যা (Z)',
        labelEn: 'Atomic Number (Z)',
        symbol: 'Z (Bottom-Left)',
        detailBn: 'নিউক্লিয়াসের মোট প্রোটন সংখ্যা (মৌলের মূল পরিচয় ও ইলেকট্রন সংখ্যা)',
        detailEn: 'Number of protons defining chemical elemental identity',
        badgeType: 'proton',
        position: { x: 35, y: 68 }
      },
      {
        labelBn: 'মৌলের রাসায়নিক প্রতীক',
        labelEn: 'Chemical Symbol (X)',
        symbol: 'X (Center)',
        detailBn: 'ল্যাটিন বা ইংরেজি নামের আন্তর্জাতিক সংক্ষিপ্ত রূপ (যেমন: Na, Cl, Fe)',
        detailEn: 'One or two letter IUPAC chemical designation',
        badgeType: 'orbit',
        position: { x: 50, y: 50 }
      },
      {
        labelBn: 'আয়ন আধান / চার্জ',
        labelEn: 'Ionic Charge (m⁺/⁻)',
        symbol: 'm⁺/⁻ (Top-Right)',
        detailBn: 'ইলেকট্রন গ্রহণ (অ্যানায়ন -) বা বর্জন (ক্যাটায়ন +) নির্দেশক',
        detailEn: 'Net electric charge caused by loss or gain of electrons',
        badgeType: 'electron',
        position: { x: 65, y: 32 }
      }
    ],
    keyPoints: [
      {
        heading: 'পারমাণবিক সংখ্যা (Atomic Number, Z)',
        description: 'কোনো মৌলের একটি পরমাণুর নিউক্লিয়াসে বিদ্যমান মোট প্রোটন সংখ্যাকে ওই মৌলের পারমাণবিক সংখ্যা বলে। পারমাণবিক সংখ্যাই একটি মৌলের নিজস্ব পরিচয় নির্ধারণ করে।'
      },
      {
        heading: 'ভর সংখ্যা (Mass Number, A)',
        description: 'কোনো মৌলের পরমাণুর নিউক্লিয়াসে বিদ্যমান মোট প্রোটন ও নিউট্রন সংখ্যার সমষ্টিকে ভর সংখ্যা বা নিউক্লিয়ন সংখ্যা বলে। সূত্র: A = Z + N।'
      },
      {
        heading: 'নিউট্রন সংখ্যা নির্ণয়',
        description: 'ভর সংখ্যা থেকে পারমাণবিক সংখ্যা বিয়োগ করলে নিউট্রন সংখ্যা পাওয়া যায়: N = A - Z।'
      }
    ],
    callout: {
      type: 'formula',
      title: 'প্রমিত পরমাণু প্রতীকীয় সংকেত (Standard Notation)',
      content: 'ᵃ_ᶻXᵐ⁺/ᵐ⁻ (যেমন: ²³₁₁Na⁺ বা ³⁵₁₇Cl⁻) \n\n• Z (বাম নিচে) = পারমাণবিক সংখ্যা = প্রোটন সংখ্যা \n• A (বাম উপরে) = ভর সংখ্যা (প্রোটন + নিউট্রন) \n• চার্জ (ডান উপরে) = প্রোটন ও ইলেকট্রনের সংখ্যার পার্থক্য'
    },
    tableData: {
      caption: 'উদাহরণসহ মূল কণিকা গণনার রূপরেখা',
      headers: ['প্রতীক', 'নাম', 'প্রোটন সংখ্যা (Z)', 'ভর সংখ্যা (A)', 'নিউট্রন সংখ্যা (A-Z)', 'ইলেকট্রন সংখ্যা'],
      rows: [
        ['²³₁₁Na', 'সোডিয়াম পরমাণু', 11, 23, '23 - 11 = 12', 11],
        ['²³₁₁Na⁺', 'সোডিয়াম আয়ন', 11, 23, '23 - 11 = 12', '11 - 1 = 10'],
        ['³⁵₁₇Cl⁻', 'ক্লোরাইড আয়ন', 17, 35, '35 - 17 = 18', '17 + 1 = 18'],
        ['⁵⁶₂₆Fe³⁺', 'ফেরিক আয়ন', 26, 56, '56 - 26 = 30', '26 - 3 = 23']
      ]
    },
    speakerNotes: 'শিক্ষার্থীদের ধনাত্মক ও ঋণাত্মক আয়নের ক্ষেত্রে ইলেকট্রন গণনা সতর্কতার সাথে বোঝান। ক্যাটায়নে ইলেকট্রন বিয়োগ হয় এবং অ্যানায়নে ইলেকট্রন যোগ হয়; প্রোটন বা নিউট্রন সংখ্যা কখনোই পরিবর্তিত হয় না।'
  },
  {
    id: 5,
    title: 'রাদারফোর্ডের পরমাণু মডেল (১৯১১)',
    subtitle: 'Alpha Particle Scattering Experiment & Solar Nuclear Model',
    category: 'পরমাণু মডেল',
    gallery: [
      {
        id: 's5_img1',
        url: '/src/assets/images/rutherford_experiment_1790749694910.jpg',
        titleBn: 'স্বর্ণপাত আলফা বিচ্ছুরণ পরীক্ষা',
        titleEn: 'Gold Foil Alpha Scattering',
        captionBn: 'আলফা কণা বিচ্ছুরণ পরীক্ষার চিত্র: বেশিরভাগ আলফা কণা স্বর্ণপাত ভেদ করে চলে যায়, গুটিকয়েক বেঁকে যায় এবং বিশ হাজারের মধ্যে একটি ঠিক বিপরীত দিকে ফিরে আসে',
        captionEn: 'Rutherford scattering showing majority alpha particles passing through gold foil with few high-angle rebounds',
        type: 'photo'
      },
      {
        id: 's5_img2',
        titleBn: 'সোনার পরমাণু ও আলফা গতিপথ রেখাচিত্র',
        titleEn: 'Gold Atom (Au) & Alpha Vector Trajectories',
        captionBn: 'গোল্ড এটম (সোনার পরমাণু, Au) এর নিউক্লিয়াস দ্বারা আলফা কণার বিক্ষেপণ ও জিঙ্ক সালফাইড প্রতিপ্রভা পর্দায় শনাক্তকরণ রেখাচিত্র',
        captionEn: 'Alpha particle trajectories deflected by Gold Atom (Au) heavy nucleus onto ZnS detection screen',
        type: 'diagram',
        customDiagramType: 'rutherfordVectors'
      },
      {
        id: 's5_img3',
        url: '/src/assets/images/hero_chemistry_atom_1790749681138.jpg',
        titleBn: 'সৌর পরমাণু মডেলের ধারণা',
        titleEn: 'Planetary Nuclear Model',
        captionBn: 'সৌরজগতের সাথে তুলনাকৃত মডেল: কেন্দ্রস্থলে ভারী নিউক্লিয়াস ও পরিভ্রমণরত গ্রহসম ইলেকট্রন',
        captionEn: 'Rutherford solar model comparing electrons orbiting the central nucleus like planets around the Sun',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'গোল্ড এটম (সোনার পরমাণু)',
        labelEn: 'Gold Atom (Au)',
        symbol: 'Au Atom (Z=79)',
        detailBn: 'পাতলা সোনার পাতের পরমাণু (Au, 0.0004 cm) যার নিউক্লিয়াস আলফা কণা বিক্ষেপণ ঘটায়',
        detailEn: 'Gold atom in ultra-thin gold foil target causing alpha particle scattering',
        badgeType: 'gold',
        position: { x: 48, y: 50 }
      },
      {
        labelBn: 'আলফা কণা উৎস',
        labelEn: 'Alpha (α) Particle Source',
        symbol: '⁴₂He²⁺',
        detailBn: 'দ্বিপজিটিভ হিলিয়াম নিউক্লিয়াস নির্গমনকারী তেজস্ক্রিয় কণা উৎস',
        detailEn: 'Radioactive alpha emitter (doubly-ionized helium nucleus ⁴₂He²⁺)',
        badgeType: 'radiation',
        position: { x: 18, y: 50 }
      },
      {
        labelBn: 'ভারী ধনাত্মক কেন্দ্রীন (নিউক্লিয়াস)',
        labelEn: 'Positive Heavy Nucleus',
        symbol: 'Nucleus (+79e)',
        detailBn: 'সোনার পরমাণুর কেন্দ্রে পুঞ্জীভূত ভারী ধনাত্মক আধান যার বিকর্ষণে আলফা কণা ফিরে আসে',
        detailEn: 'Dense positive core carrying almost all atomic mass causing sharp deflection',
        badgeType: 'nucleus',
        position: { x: 52, y: 48 }
      },
      {
        labelBn: 'জিঙ্ক সালফাইড পর্দা',
        labelEn: 'ZnS Detector Screen',
        symbol: 'ZnS Screen',
        detailBn: 'আলফা কণার স্পর্শে উজ্জ্বল প্রতিপ্রভা আলোর ঝলক (Scintillation) সৃষ্টি করে',
        detailEn: 'Zinc sulphide fluorescent screen detecting impacts with flashes of light',
        badgeType: 'orbit',
        position: { x: 88, y: 50 }
      },
      {
        labelBn: 'বিক্ষিপ্ত আলফা কণা',
        labelEn: 'Deflected Alpha Particles',
        symbol: 'Deflected α',
        detailBn: 'ধনাত্মক নিউক্লিয়াসের তীব্র বিকর্ষণে দিক পরিবর্তনকারী আলফা কণা',
        detailEn: 'Alpha particles repelled away from nucleus by Coulomb electrostatic repulsion',
        badgeType: 'radiation',
        position: { x: 70, y: 28 }
      },
      {
        labelBn: 'সোজা অতিক্রমকারী আলফা রশ্মি (৯৯%)',
        labelEn: 'Undeviated Alpha Rays (99%)',
        symbol: 'Straight α',
        detailBn: 'পরমাণুর বেশিরভাগ স্থান ফাঁকা হওয়ায় ৯৯% আলফা কণা সোজাসুজি চলে যায়',
        detailEn: 'Proof that over 99% of atomic volume is completely empty space',
        badgeType: 'electron',
        position: { x: 65, y: 65 }
      }
    ],
    keyPoints: [
      {
        heading: 'স্বর্ণপাত আলফা কণা পরীক্ষা (Alpha Scattering Experiment)',
        description: 'বিজ্ঞানী আর্নেস্ট রাদারফোর্ড 0.0004 cm পুরু সোনার পাতের ওপর দ্বিপজিটিভ হিলিয়াম নিউক্লিয়াস (⁴₂He²⁺) আলফা কণা চালনা করেন এবং পেছনে জিঙ্ক সালফাইড (ZnS) প্রতিপ্রভা পর্দা রাখেন।'
      },
      {
        heading: 'মডেলের মূল প্রস্তাবনাসমূহ',
        description: '১. পরমাণুর কেন্দ্রস্থলে অত্যন্ত ক্ষুদ্র, ধনাত্মক চার্জযুক্ত ও ঘন একটি কেন্দ্র রয়েছে যার নাম নিউক্লিয়াস। ২. পরমাণুর সামগ্রিক আকারের তুলনায় নিউক্লিয়াস অত্যন্ত ক্ষুদ্র এবং পরমাণুর বেশিরভাগ স্থান ফাঁকা। ৩. সৌরজগতের সূর্যের চারদিকে ঘূর্ণায়মান গ্রহের মতো ইলেকট্রনসমূহ নিউক্লিয়াসকে কেন্দ্র করে ঘুরছে।'
      },
      {
        heading: 'রাদারফোর্ড মডেলের সীমাবদ্ধতা (Limitations)',
        description: '১. সৌরজগতের গ্রহসমূহ সামগ্রিকভাবে চার্জহীন, কিন্তু ইলেকট্রন ও নিউক্লিয়াস চার্জযুক্ত। ২. ম্যাক্সওয়েলের তত্ত্বানুসারে চার্জিত কণা ঘুরলে ক্রমাগত শক্তি বিকিরণ করে নিউক্লিয়াসে পতিত হওয়ার কথা, যা পরমাণুর অস্তিত্ব বিলীন করে দিত। ৩. একাধিক ইলেকট্রন বিশিষ্ট পরমাণুর ঘূর্ণন পথ ও দিক সম্পর্কে কোনো ধারণা নেই। ৪. পরমাণুর রেখা বর্ণালী (Line Spectrum) ব্যাখ্যা করতে পারে না।'
      }
    ],
    callout: {
      type: 'warning',
      title: 'পরীক্ষার অন্যতম বিস্ময়কর ফলাফল',
      content: 'প্রায় ৯৯% আলফা কণা স্বর্ণপাত ভেদ করে সোজা চলে যায়। প্রতি ২০,০০০ আলফা কণার মধ্যে কেবল ১টি কণা সোজা ১৮০° কোণে পেছনে ফিরে আসে, যা প্রমাণ করে নিউক্লিয়াসের ভর ও আধান অতি সংকুচিত স্থানে কেন্দ্রীভূত।'
    },
    speakerNotes: 'ম্যাক্সওয়েলের বিদ্যুৎ-চৌম্বকীয় বিকিরণ তত্ত্বের কারণে রাদারফোর্ড মডেলের ব্যর্থতা সবচেয়ে গুরুত্বপূর্ণ কনসেপ্ট। পরবর্তী স্লাইডে কীভাবে বোর এই সমস্যা সমাধান করলেন তা উপস্থাপন করুন।'
  },
  {
    id: 6,
    title: 'বোর পরমাণু মডেল (১৯১৩)',
    subtitle: 'Niels Bohr Quantum Postulates — শক্তিস্তর ও কোয়ান্টাম লাফ',
    category: 'পরমাণু মডেল',
    gallery: [
      {
        id: 's6_img1',
        url: '/src/assets/images/bohr_orbits_quantum_1790751399239.jpg',
        titleBn: 'বোর অনুমোদিত কক্ষপথ ও কোয়ান্টাম ফোটন',
        titleEn: 'Bohr Quantum Orbits & Photons',
        captionBn: 'বোর পরমাণু মডেল: অনুমোদিত বৃত্তাকার কক্ষপথ (K, L, M) এবং শক্তি শোষণে বা বিকিরণে নির্দিষ্ট তরঙ্গদৈর্ঘ্যের ফোটন নির্গমন',
        captionEn: 'Niels Bohr quantum atomic model showing stationary discrete orbits and photon absorption/emission',
        type: 'photo'
      },
      {
        id: 's6_img2',
        titleBn: 'বোর শক্তিস্তর ও কোয়ান্টাম রূপান্তর রেখাচিত্র',
        titleEn: 'Bohr Orbits & Quantum Transitions Diagram',
        captionBn: 'বৃত্তাকার শক্তিস্তর (K, L, M) এবং কক্ষপথ পরিবর্তনের সময় ফোটন আলোকরশ্মি নিঃসরণের কোয়ান্টাম ডায়াগ্রাম',
        captionEn: 'Discrete circular orbits and photon emission ray diagram during electron quantum transitions',
        type: 'diagram',
        customDiagramType: 'bohrOrbits'
      },
      {
        id: 's6_img3',
        url: '/src/assets/images/electron_particle_orbit_1790750719456.jpg',
        titleBn: 'ইলেকট্রনের কৌণিক ভরবেগ',
        titleEn: 'Electron Angular Momentum',
        captionBn: 'নির্দিষ্ট স্থির কক্ষপথে আবর্তনকালে ইলেকট্রনের কৌণিক ভরবেগ mvr = nh / (2π)',
        captionEn: 'Quantized angular momentum postulate where mvr equals integer multiples of h/(2pi)',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'কেন্দ্রীন ধনাত্মক নিউক্লিয়াস',
        labelEn: 'Positive Atomic Nucleus',
        symbol: '+Ze',
        detailBn: 'পরমাণুর কেন্দ্রে স্থির অবস্থানে থাকা ধনাত্মক আধানযুক্ত নিউক্লিয়াস',
        detailEn: 'Positively charged nucleus attracting orbiting electrons',
        badgeType: 'nucleus',
        position: { x: 42, y: 50 }
      },
      {
        labelBn: 'K শেল (১ম প্রধান শক্তিস্তর)',
        labelEn: 'K Shell (n = 1)',
        symbol: 'n = 1 (2e⁻)',
        detailBn: 'নিউক্লিয়াসের নিকটতম অনুমোদিত বৃত্তাকার কক্ষপথ (সর্বোচ্চ ২টি ইলেকট্রন)',
        detailEn: 'Innermost stationary quantum orbit holding maximum 2 electrons',
        badgeType: 'orbit',
        position: { x: 36, y: 40 }
      },
      {
        labelBn: 'L শেল (২য় প্রধান শক্তিস্তর)',
        labelEn: 'L Shell (n = 2)',
        symbol: 'n = 2 (8e⁻)',
        detailBn: 'দ্বিতীয় বৃত্তাকার স্থায়ী কক্ষপথ (সর্বোচ্চ ৮টি ইলেকট্রন)',
        detailEn: 'Second principal energy shell holding maximum 8 electrons',
        badgeType: 'orbit',
        position: { x: 30, y: 32 }
      },
      {
        labelBn: 'M শেল (৩য় প্রধান শক্তিস্তর)',
        labelEn: 'M Shell (n = 3)',
        symbol: 'n = 3 (18e⁻)',
        detailBn: 'তৃতীয় বৃত্তাকার কক্ষপথ (সর্বোচ্চ ১৮টি ইলেকট্রন)',
        detailEn: 'Third principal energy shell holding maximum 18 electrons',
        badgeType: 'orbit',
        position: { x: 22, y: 24 }
      },
      {
        labelBn: 'কোয়ান্টাম ফোটন আলোকরশ্মি বিকিরণ',
        labelEn: 'Emitted Photon Radiation',
        symbol: 'hν = ΔE',
        detailBn: 'উচ্চ শক্তিস্তর থেকে নিম্ন স্তরে ইলেকট্রন লাফ দিলে নির্গত আলোকরশ্মি',
        detailEn: 'Quantized energy emitted as light when electron drops to lower level',
        badgeType: 'radiation',
        position: { x: 62, y: 38 }
      }
    ],
    keyPoints: [
      {
        heading: '১. স্থির কক্ষপথের ধারণা (Stationary Energy Levels)',
        description: 'ইলেকট্রন নিউক্লিয়াসকে কেন্দ্র করে ইচ্ছামতো যেকোনো কক্ষপথে ঘুরতে পারে না; বরং কিছু নির্দিষ্ট বৃত্তাকার অনুমোদিত স্থায়ী কক্ষপথে আবর্তন করে। এই কক্ষপথগুলোকে প্রধান শক্তিস্তর বা শেল (K, L, M, N... যেখানে n = 1, 2, 3, 4...) বলে। স্থির কক্ষপথে আবর্তনকালে কোনো শক্তি বিকিরণ বা শোষণ হয় না।'
      },
      {
        heading: '২. কৌণিক ভরবেগ সংক্রান্ত প্রস্তাবনা (Angular Momentum)',
        description: 'নির্দিষ্ট অনুমোদিত কক্ষপথে ঘূর্ণায়মান ইলেকট্রনের কৌণিক ভরবেগ h/(2π) এর পূর্ণসংখ্যার গুণিতক। অর্থাৎ, mvr = nh / (2π)। যেখানে m = ভর, v = বেগ, r = ব্যাসার্ধ, h = প্ল্যাঙ্কের ধ্রুবক (6.626 × 10⁻³⁴ J·s), n = প্রধান কোয়ান্টাম সংখ্যা।'
      },
      {
        heading: '৩. শক্তির শোষণ ও বিকিরণ (Energy Absorption & Emission)',
        description: 'ইলেকট্রন যখন নিম্ন শক্তিস্তর থেকে উচ্চ শক্তিস্তরে যায় তখন নির্দিষ্ট পরিমাণ শক্তি শোষণ করে। আবার উচ্চ শক্তিস্তর থেকে নিম্ন শক্তিস্তরে নামার সময় সমপরিমাণ শক্তি ফোটন বা আলোকরশ্মি হিসেবে বিকিরণ করে। সমীকরণ: ΔE = E₂ - E₁ = hν = hc/λ।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'বোর মডেলের সীমাবদ্ধতা (SSC পরীক্ষার হট টপিক)',
      content: '• বোর মডেল কেবল এক-ইলেকট্রন বিশিষ্ট পরমাণু বা আয়নের (H, He⁺, Li²⁺) বর্ণালী ব্যাখ্যা করতে পারে; বহু-ইলেকট্রনের পারে না।\n• বর্ণালীবীক্ষণ যন্ত্রে প্রতিটি রেখা একাধিক অতিসূক্ষ্ম রেখায় বিভক্ত দেখা যায় (Fine Spectrum), যা বোর মডেল দিয়ে ব্যাখ্যা করা যায় না।\n• চৌম্বক ক্ষেত্রের প্রভাবে বর্ণালী বিভাজন (Zeeman Effect) এবং বিদ্যুৎ ক্ষেত্রের প্রভাবে বিভাজন (Stark Effect) ব্যাখ্যা করতে পারে না।'
    },
    recommendedInteractiveTab: 'simulator',
    speakerNotes: 'বোর পরমাণু মডেল সিমুলেটরে গিয়ে ইলেকট্রনের শক্তি শোষণ ও বিকিরণের কোয়ান্টাম জাম্প লাইভ দেখান। এটি শিক্ষার্থীদের জন্য অত্যন্ত উপভোগ্য ও বোধগম্য হবে।'
  },
  {
    id: 7,
    title: 'শক্তিস্তর ও উপশক্তিস্তর (Shells & Subshells)',
    subtitle: 'Principal Quantum Number (n) & Azimuthal Subshells (s, p, d, f)',
    category: 'কোয়ান্টাম সংগঠন',
    gallery: [
      {
        id: 's7_img1',
        url: '/src/assets/images/orbitals_spdf_shapes_1790751412095.jpg',
        titleBn: 's, p, d অরবিটালের ত্রিমাত্রিক আকৃতি',
        titleEn: '3D Shapes of s, p, d Orbitals',
        captionBn: 'পারমাণবিক উপশক্তিস্তর: গোলকাকার s-অরবিটাল, ডাম্বেল আকৃতির p-অরবিটাল এবং ডাবল ডাম্বেল আকৃতির d-অরবিটালের ইলেকট্রন মেঘ',
        captionEn: 'Three-dimensional spatial shapes of atomic subshells: spherical s, dumbbell p, and cloverleaf d orbitals',
        type: 'photo'
      },
      {
        id: 's7_img2',
        titleBn: 'বোর অনুমোদিত উপশক্তিস্তর বিন্যাস',
        titleEn: 'Bohr Subshell Configuration Diagram',
        captionBn: 'প্রধান শক্তিস্তরের অভ্যন্তরে বিভিন্ন উপশক্তিস্তরের কোয়ান্টাম রূপরেখা',
        captionEn: 'Subshell configuration within principal quantum energy levels',
        type: 'diagram',
        customDiagramType: 'bohrOrbits'
      },
      {
        id: 's7_img3',
        titleBn: 'চারটি কোয়ান্টাম সংখ্যার পরিচিতি সারণি',
        titleEn: 'Four Quantum Numbers Chart',
        captionBn: 'প্রধান (n), সহকারী (l), চৌম্বক (m) ও ঘূর্ণন (s) কোয়ান্টাম সংখ্যার মান, তাৎপর্য ও ইলেকট্রন ধারণক্ষমতা',
        captionEn: 'Comprehensive reference of principal, azimuthal, magnetic, and spin quantum numbers',
        type: 'diagram',
        customDiagramType: 'quantumNumbersTable'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'গোলকাকার s-অরবিটাল',
        labelEn: 'Spherical s-Orbital',
        symbol: 's (l = 0)',
        detailBn: 'ত্রিমাত্রিক গোলকাকার সুষম উপশক্তিস্তর (ধারণক্ষমতা সর্বোচ্চ ২টি ইলেকট্রন)',
        detailEn: 'Spherically symmetric subshell holding up to 2 electrons',
        badgeType: 'orbit',
        position: { x: 25, y: 45 }
      },
      {
        labelBn: 'ডাম্বেল আকৃতির p-অরবিটাল',
        labelEn: 'Dumbbell p-Orbital (px, py, pz)',
        symbol: 'p (l = 1)',
        detailBn: 'দুটি পরস্পর লম্ব লোব বিশিষ্ট ডাম্বেল আকৃতি (ধারণক্ষমতা সর্বোচ্চ ৬টি ইলেকট্রন)',
        detailEn: 'Directional dumbbell subshell along x, y, z axes holding up to 6 electrons',
        badgeType: 'electron',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'ডাবল ডাম্বেল d-অরবিটাল',
        labelEn: 'Cloverleaf d-Orbital',
        symbol: 'd (l = 2)',
        detailBn: 'জটিল ৪টি লোব বিশিষ্ট ডাবল ডাম্বেল আকৃতি (ধারণক্ষমতা সর্বোচ্চ ১০টি ইলেকট্রন)',
        detailEn: 'Four-lobed spatial subshell holding up to 10 electrons',
        badgeType: 'proton',
        position: { x: 75, y: 45 }
      }
    ],
    keyPoints: [
      {
        heading: 'প্রধান শক্তিস্তর (Shells)',
        description: 'n = 1, 2, 3, 4... কে যথাক্রমে K, L, M, N শেল বলা হয়। কোনো প্রধান শক্তিস্তরে সর্বোচ্চ ইলেকট্রন ধারণক্ষমতা 2n² সূত্র দ্বারা নির্ধারিত।'
      },
      {
        heading: 'উপশক্তিস্তর (Subshells / Orbitals)',
        description: 'প্রতিটি প্রধান শক্তিস্তর আবার এক বা একাধিক উপশক্তিস্তরে বিভক্ত। উপশক্তিস্তরগুলোকে l দিয়ে প্রকাশ করা হয়, যার মান 0 থেকে (n - 1) পর্যন্ত। l = 0 হলে s, l = 1 হলে p, l = 2 হলে d এবং l = 3 হলে f উপশক্তিস্তর।'
      },
      {
        heading: 'উপশক্তিস্তরের ইলেকট্রন ধারণক্ষমতা',
        description: 'যেকোনো উপশক্তিস্তরে সর্বোচ্চ 2(2l + 1) সংখ্যক ইলেকট্রন থাকতে পারে। সে অনুযায়ী: s-এ সর্বোচ্চ ২টি, p-এ ৬টি, d-এ ১০টি এবং f-এ সর্বোচ্চ ১৪টি ইলেকট্রন থাকতে পারে।'
      }
    ],
    tableData: {
      caption: 'প্রধান শক্তিস্তর ও উপশক্তিস্তরে ইলেকট্রন বণ্টনের সম্পূর্ণ ছক',
      headers: ['শক্তিস্তর (n)', 'শেলের নাম', 'l এর মান', 'উপশক্তিস্তরসমূহ', 'প্রতি উপশক্তিস্তরে ইলেকট্রন', 'মোট ইলেকট্রন (2n²)'],
      rows: [
        ['n = 1', 'K শেল', '0', '1s', 's = 2', '2(1)² = 2'],
        ['n = 2', 'L শেল', '0, 1', '2s, 2p', 's = 2, p = 6', '2(2)² = 8'],
        ['n = 3', 'M শেল', '0, 1, 2', '3s, 3p, 3d', 's = 2, p = 6, d = 10', '2(3)² = 18'],
        ['n = 4', 'N শেল', '0, 1, 2, 3', '4s, 4p, 4d, 4f', 's = 2, p = 6, d = 10, f = 14', '2(4)² = 32']
      ]
    },
    speakerNotes: 'শিক্ষার্থীদের স্পষ্ট করুন যে M শেলে 3s, 3p, 3d তিনটি উপশক্তিস্তর থাকে। কিন্তু ইলেকট্রন বিন্যাসের সময় 3p এর পর 3d না গিয়ে আগে 4s-এ কেন যায়, তা পরবর্তী আউফবাউ স্লাইডে বিস্তারিত ব্যাখ্যা হবে।'
  },
  {
    id: 8,
    title: 'ইলেকট্রন বিন্যাস ও আউফবাউ নীতি',
    subtitle: 'Aufbau Principle & the (n + l) Energy Sequence',
    category: 'ইলেকট্রন বিন্যাস',
    gallery: [
      {
        id: 's8_img1',
        titleBn: 'আউফবাউ শক্তি মই ও (n + l) ক্রমধারা',
        titleEn: 'Aufbau Diagonal Ladder Diagram',
        captionBn: 'উপশক্তিস্তরের শক্তির ঊর্ধ্বক্রম: 1s → 2s → 2p → 3s → 3p → 4s → 3d... আউফবাউ আণবিক ক্রমধারা',
        captionEn: 'Aufbau energy sequence showing electron filling order based on (n + l) rule: 1s -> 2s -> 2p -> 3s -> 3p -> 4s -> 3d',
        type: 'diagram',
        customDiagramType: 'aufbauLadder'
      },
      {
        id: 's8_img2',
        url: '/src/assets/images/orbitals_spdf_shapes_1790751412095.jpg',
        titleBn: 'অরবিটাল শক্তি ক্লাউড',
        titleEn: 'Subshell Energy Clouds',
        captionBn: 'কম শক্তিসম্পন্ন 4s উপশক্তিস্তর (4+0=4) পূর্ণ হওয়ার পর উচ্চ শক্তিসম্পন্ন 3d-তে (3+2=5) ইলেকট্রন প্রবেশ করে',
        captionEn: 'Visual energy disparity between lower energy 4s orbital and higher energy 3d orbital',
        type: 'photo'
      },
      {
        id: 's8_img3',
        titleBn: 'হুন্ডের নীতি ও অরবিটাল স্পিন ডায়াগ্রাম',
        titleEn: "Hund's Rule Orbital Spin Diagram",
        captionBn: 'সমশক্তির p অরবিটালে (2px, 2py, 2pz) ইলেকট্রন প্রবেশের সময় বিজোড় স্পিন বিন্যাস (কার্বন, নাইট্রোজেন, অক্সিজেন)',
        captionEn: "Orbital box diagram showing parallel spins in degenerate p subshells according to Hund's rule",
        type: 'diagram',
        customDiagramType: 'hundRule'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: '1s নিম্নতম শক্তিস্তর',
        labelEn: '1s Lowest Energy State',
        symbol: '1s (n+l=1)',
        detailBn: 'পরমাণুর সর্বনিম্ন শক্তিসম্পন্ন উপশক্তিস্তর, যা সবার আগে ইলেকট্রন পূর্ণ করে',
        detailEn: 'Ground state subshell filled first before any higher energy levels',
        badgeType: 'orbit',
        position: { x: 20, y: 70 }
      },
      {
        labelBn: '4s নিম্ন শক্তিস্তর',
        labelEn: '4s Lower Energy Orbital',
        symbol: '4s (4+0 = 4)',
        detailBn: 'শক্তি কম হওয়ায় পটাশিয়ামের ১৯তম ইলেকট্রন 3d তে না গিয়ে আগে 4s-এ যায়',
        detailEn: 'Lower (n+l) value dictates filling 4s before 3d in Potassium (K)',
        badgeType: 'electron',
        position: { x: 55, y: 45 }
      },
      {
        labelBn: '3d উচ্চ শক্তিস্তর',
        labelEn: '3d Higher Energy Orbital',
        symbol: '3d (3+2 = 5)',
        detailBn: '(n+l) এর মান ৫ হওয়ায় 4s এর পর 3d তে ইলেকট্রন প্রবেশ করে',
        detailEn: 'Higher energy orbital filled only after 4s orbital is complete',
        badgeType: 'proton',
        position: { x: 72, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: 'আউফবাউ নীতি (Aufbau Principle)',
        description: '"Aufbau" একটি জার্মান শব্দ যার অর্থ "Building up" বা তৈরি করা। নীতিটি হলো: পরমাণুর বিভিন্ন উপশক্তিস্তরে ইলেকট্রন প্রবেশের সময় সর্বনিম্ন শক্তিসম্পন্ন উপশক্তিস্তর আগে পূর্ণ করে, অতঃপর ক্রমান্বয়ে উচ্চ শক্তিসম্পন্ন উপশক্তিস্তরে প্রবেশ করে।'
      },
      {
        heading: '(n + l) নিয়ম (Energy Comparison Rule)',
        description: 'দুটি উপশক্তিস্তরের মধ্যে যার (n + l) এর মান কম, তার শক্তি কম এবং সেটিতে আগে ইলেকট্রন প্রবেশ করবে। যদি দুটি উপশক্তিস্তরের (n + l) এর মান সমান হয়, তবে যার প্রধান কোয়ান্টাম সংখ্যা n এর মান কম সেটির শক্তি কম বিবেচনা করে আগে ইলেকট্রন প্রবেশ করবে।'
      },
      {
        heading: '3d বনাম 4s বিশ্লেষণ (বোর্ড পরীক্ষার সার্বজনীন প্রশ্ন)',
        description: '• 3d এর জন্য: n = 3, l = 2 ⇒ n + l = 3 + 2 = 5 \n• 4s এর জন্য: n = 4, l = 0 ⇒ n + l = 4 + 0 = 4 \nযেহেতু 4s এর শক্তি কম (4 < 5), তাই পটাশিয়াম (K-19) ও ক্যালসিয়ামের (Ca-20) ক্ষেত্রে ১৯তম ও ২০তম ইলেকট্রন 3d তে না গিয়ে আগে 4s-এ প্রবেশ করে!'
      },
      {
        heading: 'হুন্ডের নীতি ও পলির বর্জন নীতি (Hund & Pauli Rules)',
        description: '• হুন্ডের নীতি: সমশক্তির অরবিটালে (যেমন 2p_x, 2p_y, 2p_z) ইলেকট্রন প্রবেশের সময় তারা সর্বাধিক সংখ্যায় বিজোড় (Unpaired) থাকে এবং তাদের স্পিন একমুখী (↑) হয়।\n• পলির বর্জন নীতি: একই পরমাণুতে দুটি ইলেকট্রনের ৪টি কোয়ান্টাম সংখ্যার মান কখনোই এক হতে পারে না; একটি অরবিটালে বিপরীত স্পিনের (↑↓) সর্বোচ্চ ২টি ইলেকট্রন থাকতে পারে।',
        highlight: 'হুন্ডের বিজোড় নীতি ও পলির বর্জন'
      }
    ],
    callout: {
      type: 'formula',
      title: 'উপশক্তিস্তরের শক্তির ঊর্ধ্বক্রম (ইলেকট্রন প্রবেশের ক্রমধারা)',
      content: '1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p...'
    },
    recommendedInteractiveTab: 'aufbau',
    speakerNotes: 'পটাশিয়ামের ১৯তম ইলেকট্রনটি কেন ৩য় শক্তিস্তরের d-তে না গিয়ে ৪র্থ শক্তিস্তরের s-এ যায়, এই প্রশ্নের গাণিতিক ও ধারণাগত যুক্তি শিক্ষার্থীদের খাতায় লিখে অনুশীলন করান।'
  },
  {
    id: 9,
    title: 'ইলেকট্রন বিন্যাসের ব্যতিক্রম: ক্রোমিয়াম ও কপার',
    subtitle: 'Exceptions in Electron Configuration — Cr (24) & Cu (29)',
    category: 'ইলেকট্রন বিন্যাস',
    gallery: [
      {
        id: 's9_img1',
        titleBn: 'ক্রোমিয়াম ও কপারের d-অরবিটাল বক্স রেখাচিত্র',
        titleEn: 'Cr & Cu Orbital Box Diagram',
        captionBn: 'ক্রোমিয়ামের d⁵ (অর্ধপূর্ণ) এবং কপারের d¹⁰ (পূর্ণ) অরবিটালের প্রতিসাম্য ও স্থায়িত্ব অর্জনের বক্স ডায়াগ্রাম',
        captionEn: 'Spin state diagrams illustrating half-filled d5 (Cr) and fully-filled d10 (Cu) configurations',
        type: 'diagram',
        customDiagramType: 'crCuStability'
      },
      {
        id: 's9_img2',
        url: '/src/assets/images/orbitals_spdf_shapes_1790751412095.jpg',
        titleBn: 'd-অরবিটালের ত্রিমাত্রিক ইলেকট্রন ক্লাউড',
        titleEn: 'd-Orbital Spatial Symmetry',
        captionBn: 'd-অরবিটালের প্রতিসাম্য বিন্যাস পরমাণুর অভ্যন্তরীণ আকর্ষণ বল বৃদ্ধি করে',
        captionEn: 'Spatial symmetry of 5 equivalent d-orbitals yielding high exchange energy',
        type: 'photo'
      },
      {
        id: 's9_img3',
        url: '/src/assets/images/bohr_orbits_quantum_1790751399239.jpg',
        titleBn: '4s থেকে 3d তে ইলেকট্রন স্থানান্তর',
        titleEn: '4s to 3d Electron Promotion',
        captionBn: '4s স্তর থেকে একটি ইলেকট্রন 3d-তে স্থানান্তরিত হয়ে যথাক্রমে ...3d⁵ 4s¹ এবং ...3d¹⁰ 4s¹ বিন্যাস গঠন করে',
        captionEn: 'Promotion of single 4s electron into 3d orbital achieving exceptional ground state stability',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ক্রোমিয়াম অর্ধপূর্ণ 3d⁵ বিন্যাস',
        labelEn: 'Chromium Half-Filled 3d⁵',
        symbol: '²⁴Cr: 3d⁵ 4s¹',
        detailBn: 'd⁵ অর্ধপূর্ণ অরবিটাল সুষম প্রতিসাম্য ও উচ্চ বিনিময় স্থায়িত্ব লাভ করে',
        detailEn: 'Half-filled d-subshell with 5 parallel spins achieves remarkable symmetry',
        badgeType: 'gold',
        position: { x: 30, y: 40 }
      },
      {
        labelBn: 'কপার সম্পূর্ণরূপে পূর্ণ 3d¹⁰ বিন্যাস',
        labelEn: 'Copper Fully-Filled 3d¹⁰',
        symbol: '²⁹Cu: 3d¹⁰ 4s¹',
        detailBn: 'd¹⁰ পূর্ণ অরবিটালের কারণে 4s থেকে ইলেকট্রন 3d-তে উন্নীত হয়ে সর্বোচ্চ স্থায়িত্ব পায়',
        detailEn: 'Completely filled d-subshell with 10 paired electrons gives optimal stability',
        badgeType: 'electron',
        position: { x: 70, y: 40 }
      },
      {
        labelBn: 'স্থানান্তরিত 4s¹ ইলেকট্রন',
        labelEn: 'Promoted 4s¹ Electron',
        symbol: '4s¹ (Half-filled)',
        detailBn: 'অধিকতর স্থায়িত্বের জন্য 4s² থেকে ১টি ইলেকট্রন 3d-তে চলে আসে',
        detailEn: 'Single valence electron in 4s subshell after promotion to 3d',
        badgeType: 'orbit',
        position: { x: 50, y: 65 }
      }
    ],
    keyPoints: [
      {
        heading: 'অরবিটালের স্থায়িত্বের বিশেষ শর্ত',
        description: 'সমশক্তিস্তরের উপশক্তিস্তরসমূহ (যেমন d উপশক্তিস্তর) যদি ইলেকট্রন দ্বারা অর্ধপূর্ণ (Half-filled: d⁵) বা সম্পূর্ণরূপে পূর্ণ (Fully-filled: d¹⁰) থাকে, তবে তাদের প্রতিসাম্যতা ও বিনিময় শক্তির কারণে পরমাণু সর্বাধিক স্থায়িত্ব লাভ করে।'
      },
      {
        heading: 'ক্রোমিয়াম (Cr - 24) এর ব্যতিক্রম',
        description: 'সাধারণ আউফবাউ নিয়ম অনুসারে ক্রোমিয়ামের ইলেকট্রন বিন্যাস হওয়ার কথা ছিল: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁴ 4s²। কিন্তু d⁴ অবস্থার চেয়ে d⁵ অবস্থা অনেক বেশি স্থিতিশীল হওয়ায় 4s থেকে একটি ইলেকট্রন 3d-তে স্থানান্তরিত হয়ে সঠিক বিন্যাস হয়: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ 4s¹।'
      },
      {
        heading: 'কপার (Cu - 29) এর ব্যতিক্রম',
        description: 'সাধারণ নিয়ম অনুসারে কপারের বিন্যাস হওয়ার কথা ছিল: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁹ 4s²। কিন্তু d⁹ এর চেয়ে d¹⁰ পূর্ণ অরবিটাল অনেক বেশি স্থিতিশীল হওয়ায় 4s এর একটি ইলেকট্রন 3d তে গিয়ে সঠিক রূপ নেয়: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹।'
      }
    ],
    tableData: {
      caption: 'প্রত্যাশিত বনাম প্রকৃত ইলেকট্রন বিন্যাসের তুলনা',
      headers: ['মৌল', 'প্রত্যাশিত ভুল বিন্যাস', 'প্রকৃত সঠিক বিন্যাস', 'স্থায়িত্ব অর্জনের কারণ'],
      rows: [
        ['ক্রোমিয়াম (²⁴Cr)', '...3d⁴ 4s²', '...3d⁵ 4s¹', 'd⁵ অর্ধপূর্ণ অরবিটালের অধিক স্থিতিশীলতা'],
        ['কপার (²⁹Cu)', '...3d⁹ 4s²', '...3d¹⁰ 4s¹', 'd¹⁰ সম্পূর্ণরূপে পূর্ণ অরবিটালের অধিক স্থিতিশীলতা']
      ]
    },
    speakerNotes: 'বোর্ড পরীক্ষায় ক্রোমিয়াম ও কপারের ব্যতিক্রমী ইলেকট্রন বিন্যাসের কারণ দুই নম্বরের অনুধাবনমূলক প্রশ্নে সবচেয়ে বেশি আসে। শিক্ষার্থীদের d⁵ ও d¹⁰ এর প্রতিসাম্য ও স্থায়িত্ব উল্লেখ করতে বলুন।'
  },
  {
    id: 10,
    title: 'আইসোটোপ, আইসোবার ও আইসোটোন',
    subtitle: 'Isotopes, Isobars, and Isotones — তুলনামূলক সম্পর্ক',
    category: 'নিউক্লীয় রসায়ন',
    gallery: [
      {
        id: 's10_img1',
        url: '/src/assets/images/hydrogen_isotopes_1790751422746.jpg',
        titleBn: 'হাইড্রোজেনের ৩টি আইসোটোপ চিত্রায়ন',
        titleEn: 'Hydrogen Three Isotopes (¹H, ²H, ³H)',
        captionBn: 'প্রোটিয়াম (¹H: ১p, ০n), ডিউটেরিয়াম (²H: ১p, ১n) এবং তেজস্ক্রিয় ট্রিটিয়াম (³H: ১p, ২n) এর নিউক্লিয়াস কাঠামো',
        captionEn: 'Three natural isotopes of Hydrogen comparing nucleus composition: Protium (0n), Deuterium (1n), and Tritium (2n)',
        type: 'photo'
      },
      {
        id: 's10_img2',
        url: '/src/assets/images/hero_chemistry_atom_1790749681138.jpg',
        titleBn: 'আইসোটোপের রাসায়নিক সমতা',
        titleEn: 'Chemical Identity of Isotopes',
        captionBn: 'প্রোটন সংখ্যা ও ইলেকট্রন বিন্যাস অভিন্ন হওয়ায় সকল আইসোটোপের রাসায়নিক ধর্ম হুবহু এক',
        captionEn: 'Identical electron shell structure guarantees identical chemical reactivity across isotopes',
        type: 'photo'
      },
      {
        id: 's10_img3',
        titleBn: 'আইসোটোপের ভর ও প্রোটন চার্ট',
        titleEn: 'Isotopes Mass & Nucleon Chart',
        captionBn: 'প্রোটন সংখ্যা সমান কিন্তু নিউট্রন সংখ্যা ভিন্ন হওয়ার কারণে ভর সংখ্যার পরিবর্তন',
        captionEn: 'Visual variation in nucleon mass numbers for atoms having identical proton numbers',
        type: 'diagram',
        customDiagramType: 'notation'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'প্রোটিয়াম (সাধারণ হাইড্রোজেন)',
        labelEn: 'Protium (¹H: 1p, 0n)',
        symbol: '¹₁H (99.985%)',
        detailBn: 'প্রকৃতিতে সর্বাধিক প্রাপ্ত হাইড্রোজেন যার নিউক্লিয়াসে কোনো নিউট্রন নেই (কেবল ১টি প্রোটন)',
        detailEn: 'Standard hydrogen atom with 1 proton and 0 neutrons in its nucleus',
        badgeType: 'proton',
        position: { x: 25, y: 45 }
      },
      {
        labelBn: 'ডিউটেরিয়াম (ভারী হাইড্রোজেন)',
        labelEn: 'Deuterium (²H: 1p, 1n)',
        symbol: '²₁H (Heavy H)',
        detailBn: 'নিউক্লিয়াসে ১টি প্রোটন ও ১টি নিউট্রন বিদ্যমান; পারমাণবিক চুল্লিতে ভারী পানি (D₂O) হিসেবে ব্যবহৃত',
        detailEn: 'Nucleus containing 1 proton and 1 neutron used in heavy water reactors',
        badgeType: 'neutron',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'ট্রিটিয়াম (তেজস্ক্রিয় হাইড্রোজেন)',
        labelEn: 'Tritium (³H: 1p, 2n)',
        symbol: '³₁H (Radioactive)',
        detailBn: 'নিউক্লিয়াসে ১টি প্রোটন ও ২টি নিউট্রন; অস্থিতিশীল ও তেজস্ক্রিয় বিটা ক্ষয়শীল আইসোটোপ',
        detailEn: 'Radioactive isotope with 1 proton and 2 neutrons emitting beta particles',
        badgeType: 'radiation',
        position: { x: 75, y: 45 }
      }
    ],
    keyPoints: [
      {
        heading: 'আইসোটোপ (Isotopes)',
        description: 'যেসব পরমাণুর প্রোটন সংখ্যা (বা পারমাণবিক সংখ্যা Z) সমান কিন্তু ভর সংখ্যা (A) ভিন্ন, তাদের পরস্পরের আইসোটোপ বলে। আইসোটোপের রাসায়নিক ধর্ম অভিন্ন কারণ তাদের ইলেকট্রন সংখ্যা সমান, তবে ভৌত ধর্মে ভিন্নতা দেখা যায়।'
      },
      {
        heading: 'আইসোবার (Isobars)',
        description: 'যেসব পরমাণুর ভর সংখ্যা (A) সমান কিন্তু পারমাণবিক সংখ্যা (Z বা প্রোটন সংখ্যা) ভিন্ন, তাদের পরস্পরের আইসোবার বলে (যেমন: ⁴⁰₁₉K এবং ⁴⁰₂₀Ca)।'
      },
      {
        heading: 'আইসোটোন (Isotones)',
        description: 'যেসব পরমাণুর নিউট্রন সংখ্যা (N = A - Z) সমান কিন্তু পারমাণবিক সংখ্যা ও ভর সংখ্যা ভিন্ন, তাদের পরস্পরের আইসোটোন বলে (যেমন: ¹⁴₆C এবং ¹⁶₈O; উভয়ের নিউট্রন সংখ্যা ৮)।'
      }
    ],
    tableData: {
      caption: 'হাইড্রোজেনের তিনটি প্রধান প্রাকৃতিক আইসোটোপ',
      headers: ['আইসোটোপের নাম', 'প্রতীক', 'প্রোটন', 'নিউট্রন (A-Z)', 'ইলেকট্রন', 'বৈশিষ্ট্য'],
      rows: [
        ['প্রোটিয়াম (সাধারণ হাইড্রোজেন)', '¹₁H', 1, 0, 1, 'প্রকৃতিতে ৯৯.৯৮৫% বিদ্যমান, কোনো নিউট্রন নেই'],
        ['ডিউটেরিয়াম (ভারী হাইড্রোজেন)', '²₁H (D)', 1, 1, 1, 'ভারী পানি (D₂O) তৈরিতে ব্যবহৃত'],
        ['ট্রিটিয়াম (তেজস্ক্রিয় হাইড্রোজেন)', '³₁H (T)', 1, 2, 1, 'তেজস্ক্রিয় আইসোটোপ, বিটা কণা নির্গমন করে']
      ]
    },
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ শর্টকাট কৌশল',
      content: '• আইসো-টো-প (প = প্রোটন সংখ্যা সমান)\n• আইসো-বা-র (র/ভর = ভর সংখ্যা সমান)\n• আইসো-টো-ন (ন = নিউট্রন সংখ্যা সমান)'
    },
    speakerNotes: 'শর্টকাট ট্রিকটি (প-প্রোটন, র-ভর, ন-নিউট্রন) উপস্থাপন করলে শিক্ষার্থীরা কখনো আইসোটোপ, আইসোবার ও আইসোটোনের মাঝে বিভ্রান্ত হবে না।'
  },
  {
    id: 11,
    title: 'আপেক্ষিক পারমাণবিক ভর ও গড় পারমাণবিক ভর নির্ণয়',
    subtitle: 'Relative Atomic Mass Calculation from Isotopic Abundance',
    category: 'গাণিতিক সমস্যাবলি',
    gallery: [
      {
        id: 's11_img1',
        titleBn: 'ক্লোরিনের আইসোটোপ অনুপাত পাই-চার্ট',
        titleEn: 'Chlorine Isotopic Abundance Pie Chart',
        captionBn: 'প্রকৃতিতে ক্লোরিন-৩৫ (৭৫%) এবং ক্লোরিন-৩৭ (২৫%) এর প্রাকৃতিক অনুপাত থেকে গড় ভর ৩৫.৫ amu নির্ণয়',
        captionEn: 'Natural abundance donut chart showing Chlorine-35 (75%) and Chlorine-37 (25%) yielding average atomic mass 35.5',
        type: 'diagram',
        customDiagramType: 'massCalcPie'
      },
      {
        id: 's11_img2',
        url: '/src/assets/images/carbon_dating_science_1790751433247.jpg',
        titleBn: 'কার্বন-১২ ভিত্তিক পারমাণবিক ভর স্কেল',
        titleEn: 'Carbon-12 Standard Mass Scale',
        captionBn: 'কার্বন-১২ পরমাণুর ভরের ১/১২ অংশকে (1.66 × 10⁻²⁴ g) স্ট্যান্ডার্ড ধরে অন্যান্য মৌলের আপেক্ষিক ভর গণনা',
        captionEn: 'Standard relative atomic mass measured with reference to 1/12th the mass of Carbon-12 atom',
        type: 'photo'
      },
      {
        id: 's11_img3',
        titleBn: 'আপেক্ষিক আণবিক ভর নির্ণয় চার্ট',
        titleEn: 'Relative Molecular Mass Computation Chart',
        captionBn: 'সালফিউরিক এসিড (H₂SO₄), তুঁতে (CuSO₄·5H₂O) ও গ্লুকোজ (C₆H₁₂O₆)-এর আপেক্ষিক আণবিক ভর নির্ণয় রূপরেখা',
        captionEn: 'Step-by-step breakdown of molecular mass for sulfuric acid, blue vitriol with hydration water, and glucose',
        type: 'diagram',
        customDiagramType: 'molecularMassCalc'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ক্লোরিন-৩৫ আইসোটোপ (৭৫%)',
        labelEn: 'Chlorine-35 (³⁵Cl - 75%)',
        symbol: '³⁵Cl (75.77%)',
        detailBn: 'প্রকৃতিতে প্রাপ্ত প্রধান আইসোটোপ যাতে ১৭টি প্রোটন ও ১৮টি নিউট্রন রয়েছে',
        detailEn: 'Primary natural isotope carrying 17 protons and 18 neutrons',
        badgeType: 'orbit',
        position: { x: 35, y: 45 }
      },
      {
        labelBn: 'ক্লোরিন-৩৭ আইসোটোপ (২৫%)',
        labelEn: 'Chlorine-37 (³⁷Cl - 25%)',
        symbol: '³⁷Cl (24.23%)',
        detailBn: 'প্রকৃতিতে প্রাপ্ত দ্বিতীয় আইসোটোপ যাতে ১৭টি প্রোটন ও ২০টি নিউট্রন রয়েছে',
        detailEn: 'Secondary natural isotope carrying 17 protons and 20 neutrons',
        badgeType: 'electron',
        position: { x: 65, y: 45 }
      },
      {
        labelBn: 'কার্বন-১২ প্রমিত রেফারেন্স',
        labelEn: 'Carbon-12 Standard Reference',
        symbol: '1 amu = 1/12th ¹²C',
        detailBn: 'একটি ¹²C পরমাণুর ভরের ১/১২ অংশ = 1.66 × 10⁻²⁴ g',
        detailEn: 'International atomic mass unit defined as 1/12th the mass of carbon-12',
        badgeType: 'nucleus',
        position: { x: 50, y: 70 }
      }
    ],
    keyPoints: [
      {
        heading: 'আপেক্ষিক পারমাণবিক ভরের সংজ্ঞা',
        description: 'কোনো মৌলের একটি পরমাণুর প্রকৃত ভরকে একটি কার্বন-১২ (¹²C) আইসোটোপের ভরের ১/১২ অংশের (1.66 × 10⁻²⁴ g) সাথে তুলনা করলে যে সংখ্যা পাওয়া যায়, তাকে ওই মৌলের আপেক্ষিক পারমাণবিক ভর বলে। এটি দুটি ভরের অনুপাত হওয়ায় এর কোনো একক নেই।'
      },
      {
        heading: 'প্রাকৃতিক প্রাচুর্য থেকে গড় ভর নির্ণয়ের সূত্র',
        description: 'কোনো মৌলের দুটি আইসোটোপের ভর যথাক্রমে m ও n এবং প্রকৃতিতে শতকরা প্রাচুর্য p% ও q% হলে:\nগড় পারমাণবিক ভর = (m × p + n × q) / 100'
      },
      {
        heading: 'বাস্তব উদাহরণ: ক্লোরিনের গড় পারমাণবিক ভর',
        description: 'প্রকৃতিতে ক্লোরিনের দুটি আইসোটোপ রয়েছে: ³⁵Cl (৭৫%) এবং ³⁷Cl (২৫%)।\nঅতএব, ক্লোরিনের গড় পারমাণবিক ভর = (35 × 75 + 37 × 25) / 100 = (2625 + 925) / 100 = 3550 / 100 = 35.5 amu।'
      },
      {
        heading: 'আপেক্ষিক আণবিক ভর নির্ণয় (Relative Molecular Mass)',
        description: 'কোনো যৌগের অণুতে উপস্থিত সকল পরমাণুর আপেক্ষিক পারমাণবিক ভরকে তাদের নিজ নিজ পরমাণু সংখ্যা দিয়ে গুণ করে গুণফলগুলো যোগ করলে ওই যৌগের আপেক্ষিক আণবিক ভর পাওয়া যায়। স্ফটিক পানি থাকলে (যেমন CuSO₄·5H₂O) ৫ অণু পানির ভর (5 × 18 = 90) যোগ করতে হয়।'
      }
    ],
    tableData: {
      headers: ['যৌগের নাম ও সংকেত', 'গণনার বিস্তারিত ধাপ', 'আপেক্ষিক আণবিক ভর'],
      rows: [
        ['সালফিউরিক এসিড (H₂SO₄)', '(1 × 2) + 32 + (16 × 4) = 2 + 32 + 64', '98'],
        ['তুঁতে (CuSO₄·5H₂O)', '63.5 + 32 + (16 × 4) + 5(18) = 159.5 + 90', '249.5'],
        ['গ্লুকোজ (C₆H₁₂O₆)', '(12 × 6) + (1 × 12) + (16 × 6) = 72 + 12 + 96', '180'],
        ['কাপড় কাঁচা সোডা (Na₂CO₃·10H₂O)', '(23 × 2) + 12 + 48 + 10(18) = 106 + 180', '286']
      ],
      caption: 'এসএসসি পরীক্ষার বহুল জিজ্ঞাসিত আপেক্ষিক আণবিক ভর নির্ণয় তালিকা'
    },
    callout: {
      type: 'formula',
      title: 'বোর্ড পরীক্ষার বিপরীত সমস্যা (শতকরা প্রাচুর্য নির্ণয়)',
      content: 'যদি কপার (Cu) এর গড় পারমাণবিক ভর ৬৩.৫ এবং আইসোটোপ দুটি ⁶³Cu ও ⁶⁵Cu হয়, তবে ধরি ⁶³Cu এর প্রাচুর্য x% এবং ⁶⁵Cu এর প্রাচুর্য (100 - x)%।\nসূত্র: 63.5 = [63x + 65(100 - x)] / 100 ⇒ x = 75%। অর্থাৎ ⁶³Cu = ৭৫% ও ⁶⁵Cu = ২৫%।'
    },
    recommendedInteractiveTab: 'isotope',
    speakerNotes: 'ভর ক্যালকুলেটর ট্যাবে গিয়ে লাইভ স্লাইডার টেনে ক্লোরিন, কপার ও কার্বনের গড় পারমাণবিক ভর সমাধান করে শিক্ষার্থীদের দেখান।'
  },
  {
    id: 12,
    title: 'তেজস্ক্রিয় আইসোটোপ ও এদের বহুমাত্রিক ব্যবহার',
    subtitle: 'Radioactive Isotopes — Medicine, Agriculture, Industry & Carbon Dating',
    category: 'বাস্তব প্রয়োগ',
    gallery: [
      {
        id: 's12_img1',
        url: '/src/assets/images/isotope_medical_use_1790749708954.jpg',
        titleBn: 'চিকিৎসা বিজ্ঞানে রেডিও-আইসোটোপ',
        titleEn: 'Nuclear Medicine & Radiotherapy',
        captionBn: 'আধুনিক পারমাণবিক চিকিৎসা প্রযুক্তি: থাইরয়েড স্ক্যানিং (¹³¹I) ও ক্যানসার কোষ ধ্বংসে কোবাল্ট-৬০ (⁶⁰Co) রেডিও-আইসোটোপ',
        captionEn: 'Medical diagnosis and cancer tumor radiation therapy using Cobalt-60 and Iodine-131 tracers',
        type: 'photo'
      },
      {
        id: 's12_img2',
        url: '/src/assets/images/carbon_dating_science_1790751433247.jpg',
        titleBn: 'কার্বন ডেটিং ও প্রাচীন জীবাশ্মের বয়স',
        titleEn: 'Carbon-14 Dating & Archaeology',
        captionBn: 'কার্বন-১৪ (¹⁴C) এর অর্ধায়ু (৫৭৩০ বছর) গণনার মাধ্যমে অতি প্রাচীন প্রত্নতাত্ত্বিক নিদর্শন ও জীবাশ্মের বয়স নির্ধারণ',
        captionEn: 'Radiocarbon dating of ancient fossils and archaeological artifacts via Carbon-14 half-life decay',
        type: 'photo'
      },
      {
        id: 's12_img3',
        url: '/src/assets/images/elements_compounds_1790751385322.jpg',
        titleBn: 'কৃষিক্ষেত্রে ও শিল্পে ফসফরাস-৩২',
        titleEn: 'Agriculture & Industry (³²P)',
        captionBn: 'উদ্ভিদের ফসফেট শোষণ ও উন্নত ফলনশীল জাত উদ্ভাবনে ফসফরাস-৩২ (³²P) তেজস্ক্রিয় সারের ব্যবহার',
        captionEn: 'Phosphorus-32 isotope tracing in agriculture for plant nutrient uptake and pest management',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'রেডিও-ট্রেসার ইনজেকশন',
        labelEn: 'Radio-tracer Injection',
        symbol: '⁹⁹ᵐTc',
        detailBn: 'অঙ্গ স্ক্যানিং ও টিউমার সনাক্তকরণে টেকনিশিয়াম-৯৯এম তেজস্ক্রিয় ট্রেসার',
        detailEn: 'Technetium-99m tracer for medical diagnostic imaging and organ scanning',
        badgeType: 'radiation',
        position: { x: 45, y: 35 }
      },
      {
        labelBn: 'থাইরয়েড গ্রন্থি টার্গেট',
        labelEn: 'Thyroid Gland Target',
        symbol: '¹³¹I',
        detailBn: 'আয়োডিন-১৩১ আইসোটোপ দ্বারা গলগণ্ড ও থাইরয়েড ক্যানসার নিরাময়',
        detailEn: 'Iodine-131 targeted radiotherapy for goiter and thyroid carcinoma',
        badgeType: 'radiation',
        position: { x: 50, y: 55 }
      },
      {
        labelBn: 'ক্যান্সার থেরাপি রশ্মি (গামা)',
        labelEn: 'Radiation Therapy Beam',
        symbol: '⁶⁰Co (γ-ray)',
        detailBn: 'কোবাল্ট-৬০ হতে নির্গত উচ্চ শক্তির গামা রশ্মি টিউমার কোষ ধ্বংস করে',
        detailEn: 'High-energy gamma rays from Cobalt-60 destroying malignant tumor cells',
        badgeType: 'radiation',
        position: { x: 72, y: 45 }
      }
    ],
    keyPoints: [
      {
        heading: '১. চিকিৎসা ক্ষেত্রে রোগ নির্ণয় ও নিরাময়ে',
        description: '• থাইরয়েড গ্রন্থির অস্বাভাবিক বৃদ্ধি বা গলগণ্ড নিরাময়ে: আয়োডিন-১৩১ (¹³¹I) \n• ক্যানসার কোষের টিউমার ধ্বংস করতে: কোবাল্ট-৬০ (⁶⁰Co) এর গামা রশ্মি \n• রক্তের লিউকেমিয়া (রক্তের ক্যানসার) চিকিৎসায়: ফসফরাস-৩২ (³²P) \n• হাড় ও বিভিন্ন অঙ্গের টিউমার স্ক্যান ও উপস্থিতি নির্ণয়ে: টেকনিশিয়াম-99m (⁹⁹ᵐTc)'
      },
      {
        heading: '২. কৃষিক্ষেত্রে ফসলের সুরক্ষা ও ফলন বৃদ্ধি',
        description: 'ফসলের শিকড় মাটির কোন স্থান থেকে কী পরিমাণে ফসফেট গ্রহণ করছে তা জানতে ফসফরাস-৩২ (³²P) মিশ্রিত সার ব্যবহার করা হয়। এছাড়া তেজস্ক্রিয় বিকিরণের সাহায্যে বীজের জিনগত পরিবর্তন এনে ক্ষতিকর পোকামাকড় প্রতিরোধী অধিক ফলনশীল জাত উদ্ভাবন করা হয়।'
      },
      {
        heading: '৩. জীবাশ্মের বয়স নির্ধারণ (কার্বন ডেটিং - Carbon Dating)',
        description: 'জীবন্ত অবস্থায় উদ্ভিদে কার্বন-১২ ও তেজস্ক্রিয় কার্বন-১৪ (¹⁴C) এর অনুপাত ধ্রুব থাকে। মৃত্যুর পর ¹⁴C এর অর্ধায়ু (Half-life = ৫৭৩০ বছর) ক্ষয় গণনা করে অতি প্রাচীন মমি ও জীবাশ্মের বয়স নির্ধারণ করা হয়।'
      }
    ],
    callout: {
      type: 'warning',
      title: 'তেজস্ক্রিয়তার ক্ষতিকর প্রভাব ও নিরাপত্তা সতর্কতা',
      content: 'নিয়ন্ত্রিত ব্যবহার মানবজাতির জন্য আশীর্বাদ হলেও অসাবধানতা চরম বিপর্যয় ডেকে আনে। আলফা, বিটা ও গামা রশ্মির অতিরিক্ত বিকিরণ কোষের ডিএনএ বিনষ্ট করে বিকলাঙ্গ সন্তান ও লিউকেমিয়া সৃষ্টি করতে পারে (যেমন: চেরনোবিল ও ফুকুশিমা পারমাণবিক বিপর্যয়)।'
    },
    speakerNotes: 'মেডিকেলে কোন আইসোটোপ কোন রোগে ব্যবহৃত হয় (বিশেষ করে কোবাল্ট-৬০, আয়োডিন-১৩১, টেকনিশিয়াম-৯৯এম) তা এমসিকিউ ও জ্ঞানমূলক প্রশ্নের জন্য ১০০% গুরুত্বপূর্ণ।'
  },
  {
    id: 13,
    title: 'অধ্যায়ের সারসংক্ষেপ ও সাধারণ ভুলত্রুটি',
    subtitle: 'Key Takeaways & Common Pitfalls in SSC Chemistry Exam',
    category: 'পরীক্ষার প্রস্তুতি',
    gallery: [
      {
        id: 's13_img1',
        url: '/src/assets/images/hero_chemistry_atom_1790749681138.jpg',
        titleBn: 'পদার্থের গঠন সার্বিক চিত্রায়ন',
        titleEn: 'Matter Structure Complete Overview',
        captionBn: 'পরমাণুর নিউক্লিয়াস, আউফবাউ উপশক্তিস্তর বিন্যাস ও আইসোটোপীয় ভারসাম্যের পূর্ণাঙ্গ মনচিত্র',
        captionEn: 'Comprehensive synthesis of nucleus, electron orbital configurations, and isotopic fundamentals',
        type: 'photo'
      },
      {
        id: 's13_img2',
        titleBn: 'বোর্ড পরীক্ষার জরুরি সূত্রাবলি',
        titleEn: 'SSC High-Yield Formula Map',
        captionBn: 'ভর সংখ্যা A = Z + N, কৌণিক ভরবেগ mvr = nh/2π, শক্তি পার্থক্য ΔE = hν এবং গড় আপেক্ষিক পারমাণবিক ভর সূত্র',
        captionEn: 'Summary of critical formulas: A = Z + N, mvr = nh/2pi, and average atomic mass equations',
        type: 'diagram',
        customDiagramType: 'notation'
      },
      {
        id: 's13_img3',
        url: '/src/assets/images/orbitals_spdf_shapes_1790751412095.jpg',
        titleBn: 'কোয়ান্টাম অরবিটাল রিভিউ',
        titleEn: 'Quantum Orbitals Quick Review',
        captionBn: 's, p, d, f উপশক্তিস্তরের ধারণক্ষমতা (২, ৬, ১০, ১৪) এবং ক্রোমিয়াম-কপারের ব্যতিক্রম পুনর্বিবেচনা',
        captionEn: 'Capacity review of s, p, d, f subshells and review of Chromium/Copper configuration anomalies',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ভারী ধনাত্মক কেন্দ্রীন (নিউক্লিয়াস)',
        labelEn: 'Positive Atomic Nucleus',
        symbol: 'Nucleus (p⁺ + n⁰)',
        detailBn: 'পরমাণুর ভরকেন্দ্র যেখানে প্রোটন ও নিউট্রন পুঞ্জীভূত থাকে',
        detailEn: 'Concentrated atomic mass core housing nucleons',
        badgeType: 'nucleus',
        position: { x: 48, y: 50 }
      },
      {
        labelBn: 'ইলেকট্রন কোয়ান্টাম শক্তিস্তর',
        labelEn: 'Electron Quantum Shells',
        symbol: 'Shells (2n²)',
        detailBn: 'আউফবাউ ও (n+l) ক্রম অনুযায়ী আবর্তনশীল ইলেকট্রন বলয়',
        detailEn: 'Quantized energy shells populated according to Aufbau principle',
        badgeType: 'electron',
        position: { x: 28, y: 35 }
      },
      {
        labelBn: 'আইসোটোপ ও নিউক্লিয়ন অনুপাত',
        labelEn: 'Isotopic Nucleon Balance',
        symbol: 'Isotopes (A = Z + N)',
        detailBn: 'প্রোটন সংখ্যা স্থির রেখে নিউট্রন সংখ্যার তারতম্যে সৃষ্ট আইসোটোপ রূপভেদ',
        detailEn: 'Variants of same chemical element with different neutron numbers',
        badgeType: 'orbit',
        position: { x: 70, y: 60 }
      }
    ],
    keyPoints: [
      {
        heading: 'গুরুত্বপূর্ণ পুনরাবৃত্তি (Rapid Recap)',
        description: '• পরমাণু মূলত ফাঁকা, কেন্দ্রস্থল নিউক্লিয়াস ধনাত্মক।\n• শক্তিস্তরে সর্বোচ্চ ইলেকট্রন 2n², উপশক্তিস্তরে 2(2l+1)।\n• আউফবাউ নীতি অনুযায়ী (n+l) ক্রম মেনে ইলেকট্রন বিন্যাস ঘটে।\n• ক্রোমিয়াম (Cr-24) ও কপার (Cu-29) অর্ধপূর্ণ ও পূর্ণ d অরবিটালের অধিক স্থিতিশীলতার জন্য সাধারণ নিয়মের ব্যতিক্রম।\n• আইসোটোপের প্রোটন সংখ্যা সমান হওয়ায় রাসায়নিক ধর্ম অভিন্ন।'
      },
      {
        heading: 'শিক্ষার্থীদের সাধারণ ভুলসমূহ (Common Mistakes)',
        description: '১. পটাশিয়ামের ১৯তম ইলেকট্রন 3d তে না দিয়ে 4s-এ কেন গেল ব্যাখ্যায় শুধু 4s ছোট লিখলে নম্বর কাটা যায়; অবশ্যই n ও l এর মানসহ (n+l) এর মান ৪ ও ৫ হিসাব করে দেখাতে হবে।\n২. ক্যাটায়নের ইলেকট্রন বিন্যাসের সময় আগে বহিঃস্থ 4s থেকে ইলেকট্রন বের করতে হবে, 3d থেকে নয়। যেমন: Fe²⁺ = ...3d⁶ 4s⁰, ...3d⁴ 4s² নয়!'
      },
      {
        heading: 'সৃজনশীল প্রশ্নের প্রধান ৩টি ক্ষেত্র',
        description: 'ক. রাদারফোর্ড ও বোর মডেলের তুলনামূলক শ্রেষ্ঠত্ব বিচার।\nখ. (n+l) নীতি এবং Cr ও Cu এর ইলেকট্রন বিন্যাস বিশ্লেষণ।\nগ. আইসোটোপ থেকে গড় পারমাণবিক ভর বা শতকরা প্রাচুর্য নির্ণয়ের গাণিতিক সৃজনশীল।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'প্র্যাকটিস করার পরবর্তী ধাপ',
      content: 'আমাদের সাথে সরাসরি ইন্টারঅ্যাক্টিভ বোর সিমুলেটরে বিভিন্ন মৌল গঠন করুন, আউফবাউ ল্যাবে অরবিটাল পরীক্ষা করুন এবং কুইজে অংশ নিয়ে নিজের প্রস্তুতি যাচাই করুন!'
    },
    speakerNotes: 'শিক্ষার্থীদের স্লাইডের আলোচনা শেষ করে কুইজ টেস্ট দিতে অনুপ্রাণিত করুন।'
  }
];

export const slides: Slide[] = rawSlides.map(s => ({ ...s, chapter: 3 }));
