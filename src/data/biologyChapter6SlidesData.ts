/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Slide } from '../types/presentation';

export const biologyChapter6Slides: Slide[] = [
  {
    id: 1,
    subject: 'biology',
    chapter: 6,
    title: '৬.১ উদ্ভিদ ও পানির সম্পর্ক এবং ইমবাইবিশন',
    subtitle: 'Plant-Water Relationship, Protoplasm Hydration & Imbibition',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s1.svg',
    customDiagramType: 'bioCh6_m1',
    gallery: [
      {
        id: 'bio6_s1_img1',
        titleBn: 'উদ্ভিদ ও পানির সম্পর্ক এবং ইমবাইবিশন — বিস্তারিত চিত্র',
        titleEn: 'Plant-Water Relationship, Protoplasm Hydration & Imbibition',
        captionBn: 'উদ্ভিদ ও পানির সম্পর্ক এবং ইমবাইবিশন সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Plant-Water Relationship, Protoplasm Hydration & Imbibition.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m1'
      },
      {
        id: 'bio6_s1_img2',
        titleBn: 'উদ্ভিদ ও পানির সম্পর্ক এবং ইমবাইবিশন — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s1.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'সেলুলোজ প্রাচীর',
        labelEn: 'Cellulose Wall',
        detailBn: 'হাইড্রোফিলিক কলয়েডীয় পদার্থ যা দ্রুত পানি শোষণ করে।',
        detailEn: 'Hydrophilic colloidal matrix.',
        symbol: 'CW',
        badgeType: 'cell',
        position: { x: 25, y: 45 }
      },
      {
        labelBn: 'প্রোটোপ্লাজম',
        labelEn: 'Protoplasm',
        detailBn: 'শতকরা ৯০ ভাগই পানি, পানি কমে গেলে কোষের মৃত্যু ঘটে।',
        detailEn: 'Living fluid containing 90% water.',
        symbol: 'PRT',
        badgeType: 'cell',
        position: { x: 65, y: 55 }
      },
    ],
    keyPoints: [
      {
        heading: 'পানির অপর নাম জীবন',
        description: 'প্রোটোপ্লাজমকে জীবনের ভৌত ভিত্তি বলা হয়। প্রোটোপ্লাজমের ৯০% পানি। পানির সামান্যতম ঘাটতি হলে প্রোটোপ্লাজম সংকুচিত হয়ে প্লাজমোলাইসিস ঘটে এবং কোষ মৃত্যুমুখে পতিত হয়।'
      },
      {
        heading: 'ইমবাইবিশন (Imbibition) সংজ্ঞা ও প্রক্রিয়া',
        description: 'কলয়েডধর্মী শুষ্ক বা আধা-শুষ্ক পদার্থ (সেলুলোজ, স্টার্চ, পেকটিন, জيلاتিন) কর্তৃক তরল পদার্থ শোষণের বিশেষ ভৌত প্রক্রিয়াকে ইমবাইবিশন বলে। কাঠ, বীজ এবং কোষপ্রাচীর ইমবাইবিশন প্রক্রিয়ায় ফুলে ওঠে।'
      },
      {
        heading: 'এসএসসি বোর্ড প্রশ্নোত্তর ও গুরুত্ব',
        description: 'ইমবাইবিশন হলো উদ্ভিদে মূলরোম দ্বারা পানি শোষণের প্রথম প্রাথমিক ধাপ। এটি না ঘটলে কোষপ্রাচীর পানি ভেদ্য হতে পারত না।'
      },
    ]
  },
  {
    id: 2,
    subject: 'biology',
    chapter: 6,
    title: '৬.২ ব্যাপন ও অভিস্রবণ এবং কোষীয় পরিবহন',
    subtitle: 'Diffusion, Osmosis, Semi-permeable Membrane & Turgor Pressure',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s2.svg',
    customDiagramType: 'bioCh6_m2',
    gallery: [
      {
        id: 'bio6_s2_img1',
        titleBn: 'ব্যাপন ও অভিস্রবণ এবং কোষীয় পরিবহন — বিস্তারিত চিত্র',
        titleEn: 'Diffusion, Osmosis, Semi-permeable Membrane & Turgor Pressure',
        captionBn: 'ব্যাপন ও অভিস্রবণ এবং কোষীয় পরিবহন সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Diffusion, Osmosis, Semi-permeable Membrane & Turgor Pressure.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m2'
      },
      {
        id: 'bio6_s2_img2',
        titleBn: 'ব্যাপন ও অভিস্রবণ এবং কোষীয় পরিবহন — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s2.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'অর্ধভেদ্য পর্দা',
        labelEn: 'Semi-permeable Membrane',
        detailBn: 'কেবলমাত্র দ্রাবক অণুকে যাতায়াত করতে দেয় কিন্তু দ্রাব অণু বাধা পায়।',
        detailEn: 'Allows solvent (water) only.',
        symbol: 'SPM',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: 'ব্যাপন (Diffusion) প্রক্রিয়া',
        description: 'অধিক ঘনত্বের অঞ্চল থেকে কম ঘনত্বের অঞ্চলের দিকে অণুসমূহের স্বতঃস্ফূর্ত চলনকে ব্যাপন বলে। ব্যাপন চাপ ঘাটতি (DPD) উদ্ভিদের পানি পরিবহনে গুরুত্বপূর্ণ।'
      },
      {
        heading: 'অভিস্রবণ (Osmosis) ও এর শর্ত',
        description: 'একই দ্রাবকযুক্ত দুটি ভিন্ন ঘনত্বের দ্রবণ অর্ধভেদ্য পর্দা দ্বারা পৃথক থাকলে কম ঘন অঞ্চল থেকে দ্রাবক অণু অধিক ঘন অঞ্চলের দিকে প্রবাহিত হয়।'
      },
      {
        heading: 'অন্তঃঅভিস্রবণ ও বহিঃঅভিস্রবণ',
        description: 'কোষের বাইরে লঘু দ্রবণ থাকলে ভেতরে পানি ঢোকে (অন্তঃঅভিস্রবণ)। বাইরে অতিসারক দ্রবণ থাকলে কোষ থেকে পানি বের হয়ে সংকুচিত হয় (বহিঃঅভিস্রবণ)।'
      },
    ]
  },
  {
    id: 3,
    subject: 'biology',
    chapter: 6,
    title: '৬.৩ মূলরোম দ্বারা পানি শোষণ ও পরিবহনের গতিপথ',
    subtitle: 'Water Absorption Pathway: Apoplast & Symplast Pathways',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s3.svg',
    customDiagramType: 'bioCh6_m3',
    gallery: [
      {
        id: 'bio6_s3_img1',
        titleBn: 'মূলরোম দ্বারা পানি শোষণ ও পরিবহনের গতিপথ — বিস্তারিত চিত্র',
        titleEn: 'Water Absorption Pathway: Apoplast & Symplast Pathways',
        captionBn: 'মূলরোম দ্বারা পানি শোষণ ও পরিবহনের গতিপথ সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Water Absorption Pathway: Apoplast & Symplast Pathways.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m3'
      },
      {
        id: 'bio6_s3_img2',
        titleBn: 'মূলরোম দ্বারা পানি শোষণ ও পরিবহনের গতিপথ — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s3.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'মূলরোম',
        labelEn: 'Root Hair',
        detailBn: 'এককোষী বহিত্বকীয় অংশ যা মাটির কৈশিক পানির সংস্পর্শে থাকে।',
        detailEn: 'Unicellular tubular extension.',
        symbol: 'RH',
        badgeType: 'cell',
        position: { x: 15, y: 50 }
      },
      {
        labelBn: 'ক্যাসপেরিয়ান স্ট্রিপ',
        labelEn: 'Casparian Strip',
        detailBn: 'এন্ডোডার্মিসের সুবেরিনযুক্ত জল-অভেদ্য বলয় যা সিমপ্লাস্ট বাধ্য করে।',
        detailEn: 'Suberized band in endodermis.',
        symbol: 'CS',
        badgeType: 'cell',
        position: { x: 70, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: 'কৈশিক পানি (Capillary Water) শোষণ',
        description: 'মাটির কণার ফাঁকে ফাঁকে বিদ্যমান কৈশিক পানি মূলরোম কর্তৃক ইমবাইবিশন ও অন্তঃঅভিস্রবণ প্রক্রিয়ায় শোষিত হয়।'
      },
      {
        heading: 'অ্যাপোপ্লাস্ট ও সিমপ্লাস্ট পথ',
        description: 'অ্যাপোপ্লাস্ট পথে কোষপ্রাচীর ও আন্তঃকোষীয় ফাঁক দিয়ে পানি চলাচল করে। সিমপ্লাস্ট পথে প্লাজমোডেসমাটার মাধ্যমে প্রোটোপ্লাজম দিয়ে পানি বাহিত হয়।'
      },
      {
        heading: 'ক্যাসপেরিয়ান স্ট্রিপের বাধা',
        description: 'এন্ডোডার্মিসে ক্যাসপেরিয়ান স্ট্রিপ থাকায় পানি সরাসরি প্রাচীর ভেদ করতে পারে না, বাধ্য হয়ে কোষের সাইটোপ্লাজম দিয়ে জাইলেমে পৌঁছায়।'
      },
    ]
  },
  {
    id: 4,
    subject: 'biology',
    chapter: 6,
    title: '৬.৪ উদ্ভিদে খনিজ লবণ শোষণ পদ্ধতি (সক্রিয় ও নিষ্ক্রিয়)',
    subtitle: 'Active vs Passive Mineral Ion Absorption & Carrier Concepts',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s4.svg',
    customDiagramType: 'bioCh6_m4',
    gallery: [
      {
        id: 'bio6_s4_img1',
        titleBn: 'উদ্ভিদে খনিজ লবণ শোষণ পদ্ধতি (সক্রিয় ও নিষ্ক্রিয়) — বিস্তারিত চিত্র',
        titleEn: 'Active vs Passive Mineral Ion Absorption & Carrier Concepts',
        captionBn: 'উদ্ভিদে খনিজ লবণ শোষণ পদ্ধতি (সক্রিয় ও নিষ্ক্রিয়) সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Active vs Passive Mineral Ion Absorption & Carrier Concepts.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m4'
      },
      {
        id: 'bio6_s4_img2',
        titleBn: 'উদ্ভিদে খনিজ লবণ শোষণ পদ্ধতি (সক্রিয় ও নিষ্ক্রিয়) — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s4.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'এটিপি পাম্প',
        labelEn: 'ATP Proton Pump',
        detailBn: 'বিপাকীয় শক্তি ব্যবহার করে নতির বিপরীতে আয়ন পরিবহন।',
        detailEn: 'H+-ATPase active carrier pump.',
        symbol: 'ATP',
        badgeType: 'cell',
        position: { x: 45, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: 'খনিজ লবণের আয়নিক রূপ',
        description: 'উদ্ভিদ লবণকে কঠিন বা যৌগ অবস্থায় শোষণ করে না, বরং ক্যাটায়ন (K+, Ca2+, Mg2+) এবং অ্যানায়ন (NO3-, SO4--, H2PO4-) হিসেবে শোষণ করে।'
      },
      {
        heading: 'নিষ্ক্রিয় শোষণ (Passive Absorption)',
        description: 'কোনো প্রকার বিপাকীয় শক্তি (ATP) ছাড়াই স্বাভাবিক ব্যাপন বা আয়ন বিনিময় নিয়মে খনিজ লবণ কোষে প্রবেশ করে।'
      },
      {
        heading: 'সক্রিয় শোষণ (Active Absorption)',
        description: 'ঘনত্ব নতির বিপরীতে বিপাকীয় শক্তি বা শ্বসনে উৎপন্ন এটিপি ব্যয় করে বাহক প্রোটিন বা সাইটোক্রোম পাম্পের মাধ্যমে শোষণ সম্পন্ন হয়।'
      },
    ]
  },
  {
    id: 5,
    subject: 'biology',
    chapter: 6,
    title: '৬.৫ প্রস্বেদন বা বাষ্পমোচন: ধারণা ও প্রকারভেদ',
    subtitle: 'Transpiration Concept: Stomatal, Cuticular & Lenticular',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s5.svg',
    customDiagramType: 'bioCh6_m5',
    gallery: [
      {
        id: 'bio6_s5_img1',
        titleBn: 'প্রস্বেদন বা বাষ্পমোচন: ধারণা ও প্রকারভেদ — বিস্তারিত চিত্র',
        titleEn: 'Transpiration Concept: Stomatal, Cuticular & Lenticular',
        captionBn: 'প্রস্বেদন বা বাষ্পমোচন: ধারণা ও প্রকারভেদ সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Transpiration Concept: Stomatal, Cuticular & Lenticular.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m5'
      },
      {
        id: 'bio6_s5_img2',
        titleBn: 'প্রস্বেদন বা বাষ্পমোচন: ধারণা ও প্রকারভেদ — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s5.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'পত্ররন্ধ্র',
        labelEn: 'Stomata',
        detailBn: 'উদ্ভিদের ৯০-৯৫% প্রস্বেদন পত্ররন্ধ্রের মাধ্যমে সম্পন্ন হয়।',
        detailEn: 'Stomatal 90-95% water vapor loss.',
        symbol: 'STM',
        badgeType: 'cell',
        position: { x: 50, y: 40 }
      },
    ],
    keyPoints: [
      {
        heading: 'প্রস্বেদনের সংজ্ঞা',
        description: 'যে শারীরবৃত্তীয় প্রক্রিয়ায় উদ্ভিদ তার বায়বীয় অঙ্গের (প্রধানত পাতা) মাধ্যমে প্রয়োজনের অতিরিক্ত পানি বাষ্পাকারে বের করে দেয়, তাকে প্রস্বেদন বলে।'
      },
      {
        heading: '৩টি প্রধান প্রকারভেদ',
        description: '১. পত্ররন্ধ্রীয় (Stomatal): ৯০-৯৫% জলীয় বাষ্প বের হয়। ২. ত্বকীয় (Cuticular): কিউটিকল ভেদ করে সামান্য বাষ্পমোচন। ৩. লেন্টিসেলীয় (Lenticular): কাণ্ডের লেন্টিসেল দিয়ে ১% এর কম পানি নিষ্কাশন।'
      },
      {
        heading: 'প্রস্বেদন ও বাষ্পীভবনের পার্থক্য',
        description: 'বাষ্পীভবন একটি সাধারণ ভৌত প্রক্রিয়া, কিন্তু প্রস্বেদন একটি নিয়ন্ত্রিত শারীরবৃত্তীয় জৈবিক প্রক্রিয়া।'
      },
    ]
  },
  {
    id: 6,
    subject: 'biology',
    chapter: 6,
    title: '৬.৬ পত্ররন্ধ্রের গঠন ও রক্ষীকোষের কার্যপদ্ধতি',
    subtitle: 'Stomatal Apparatus: Guard Cells, Stoma Pore & Osmotic Turgor',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s6.svg',
    customDiagramType: 'bioCh6_m6',
    gallery: [
      {
        id: 'bio6_s6_img1',
        titleBn: 'পত্ররন্ধ্রের গঠন ও রক্ষীকোষের কার্যপদ্ধতি — বিস্তারিত চিত্র',
        titleEn: 'Stomatal Apparatus: Guard Cells, Stoma Pore & Osmotic Turgor',
        captionBn: 'পত্ররন্ধ্রের গঠন ও রক্ষীকোষের কার্যপদ্ধতি সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Stomatal Apparatus: Guard Cells, Stoma Pore & Osmotic Turgor.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m6'
      },
      {
        id: 'bio6_s6_img2',
        titleBn: 'পত্ররন্ধ্রের গঠন ও রক্ষীকোষের কার্যপদ্ধতি — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s6.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'রক্ষীকোষ',
        labelEn: 'Guard Cells',
        detailBn: 'অর্ধচন্দ্রাকার ক্লোরোপ্লাস্টযুক্ত কোষ যা স্ফীত হলে রন্ধ্র খোলে।',
        detailEn: 'Specialized turgid guard cells.',
        symbol: 'GC',
        badgeType: 'cell',
        position: { x: 40, y: 50 }
      },
      {
        labelBn: 'পত্ররন্ধ্রীয় ছিদ্র',
        labelEn: 'Stomatal Pore',
        detailBn: 'বাষ্পীয় পানি ও গ্যাস আদান-প্রদানের সূক্ষ্ম রন্ধ্র।',
        detailEn: 'Aperture for gas & vapor exchange.',
        symbol: 'POR',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: 'পত্ররন্ধ্রীয় যন্ত্রের অংশসমূহ',
        description: 'পত্ররন্ধ্রীয় যন্ত্রে রয়েছে: দুটি অর্ধচন্দ্রাকার রক্ষীকোষ (Guard cells), একটি রন্ধ্রীয় ছিদ্র (Stomatal pore), এবং চারপাশের সহকারী কোষ।'
      },
      {
        heading: 'খোলা ও বন্ধের কৌশল',
        description: 'দিনের বেলা আলোতে রক্ষীকোষে সালোকসংশ্লেষণ ঘটে, দ্রাব্য শর্করার পরিমাণ বাড়ে এবং K+ আয়ন প্রবেশ করে। ফলে পানি অন্তঃঅভিস্রবণে কোষে ঢোকে, অভ্যন্তরীণ প্রাচীর ধনুকের মতো বেঁকে রন্ধ্র উন্মুক্ত হয়।'
      },
      {
        heading: 'রাতের অবস্থা',
        description: 'রাতে সালোকসংশ্লেষণ বন্ধ থাকে, রক্ষীকোষ শিথিল (Flaccid) হয় এবং রন্ধ্র বন্ধ হয়ে যায়।'
      },
    ]
  },
  {
    id: 7,
    subject: 'biology',
    chapter: 6,
    title: '৬.৭ প্রস্বেদনের প্রভাবকসমূহ (বাহ্যিক ও অভ্যন্তরীণ)',
    subtitle: 'Factors Affecting Transpiration: Light, Temperature, Humidity, Wind',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s7.svg',
    customDiagramType: 'bioCh6_m7',
    gallery: [
      {
        id: 'bio6_s7_img1',
        titleBn: 'প্রস্বেদনের প্রভাবকসমূহ (বাহ্যিক ও অভ্যন্তরীণ) — বিস্তারিত চিত্র',
        titleEn: 'Factors Affecting Transpiration: Light, Temperature, Humidity, Wind',
        captionBn: 'প্রস্বেদনের প্রভাবকসমূহ (বাহ্যিক ও অভ্যন্তরীণ) সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Factors Affecting Transpiration: Light, Temperature, Humidity, Wind.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m7'
      },
      {
        id: 'bio6_s7_img2',
        titleBn: 'প্রস্বেদনের প্রভাবকসমূহ (বাহ্যিক ও অভ্যন্তরীণ) — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s7.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'আপেক্ষিক আর্দ্রতা',
        labelEn: 'Relative Humidity',
        detailBn: 'আর্দ্রতা বেশি হলে প্রস্বেদন কমে, আর্দ্রতা কম হলে বাড়ে।',
        detailEn: 'Inversely related to humidity.',
        symbol: 'RH%',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: 'বাহ্যিক প্রভাবকসমূহ',
        description: '১. আলো: আলোর উপস্থিতিতে পত্ররন্ধ্র খোলে। ২. তাপমাত্রা: তাপমাত্রা বাড়লে বাষ্পীভবন ও প্রস্বেদন বাড়ে। ৩. আর্দ্রতা: বায়ুর আপেক্ষিক আর্দ্রতা কমলে প্রস্বেদন দ্রুত হয়। ৪. বায়ুপ্রবাহ: বাতাস পাতার বাষ্প সরিয়ে প্রস্বেদন ত্বরান্বিত করে।'
      },
      {
        heading: 'অভ্যন্তরীণ প্রভাবকসমূহ',
        description: 'পাতার সংখ্যা ও ক্ষেত্রফল, কিউটিকলের পুরুত্ব, মেসোফিল টিস্যুর গঠন, পত্ররন্ধ্রের সংখ্যা ও অবস্থান।'
      },
      {
        heading: 'মরুজ উদ্ভিদের অভিযোজন',
        description: 'মরুভূমির উদ্ভিদে কিউটিকল অত্যন্ত পুরু হয় এবং পত্ররন্ধ্র গভীরে লুকায়িত (Sunken stoma) থাকে যাতে পানির অপচয় রোধ হয়।'
      },
    ]
  },
  {
    id: 8,
    subject: 'biology',
    chapter: 6,
    title: '৬.৮ প্রস্বেদন: প্রয়োজনীয় অমঙ্গল (Necessary Evil)',
    subtitle: 'Transpiration as a \'Necessary Evil\' — Curtis Hypothesis',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s8.svg',
    customDiagramType: 'bioCh6_m8',
    gallery: [
      {
        id: 'bio6_s8_img1',
        titleBn: 'প্রস্বেদন: প্রয়োজনীয় অমঙ্গল (Necessary Evil) — বিস্তারিত চিত্র',
        titleEn: 'Transpiration as a \'Necessary Evil\' — Curtis Hypothesis',
        captionBn: 'প্রস্বেদন: প্রয়োজনীয় অমঙ্গল (Necessary Evil) সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Transpiration as a \'Necessary Evil\' — Curtis Hypothesis.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m8'
      },
      {
        id: 'bio6_s8_img2',
        titleBn: 'প্রস্বেদন: প্রয়োজনীয় অমঙ্গল (Necessary Evil) — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s8.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'উইল্টিং বা নুয়ে পড়া',
        labelEn: 'Plant Wilting',
        detailBn: 'পানি শোষণের চেয়ে প্রস্বেদন বেশি হলে পাতা নুয়ে পড়ে।',
        detailEn: 'Loss of turgor causing wilting.',
        symbol: 'WLT',
        badgeType: 'cell',
        position: { x: 50, y: 70 }
      },
    ],
    keyPoints: [
      {
        heading: 'বিজ্ঞানী কার্টিসের মতামত',
        description: 'বিজ্ঞানী কার্টিস (Curtis, 1926) প্রস্বেদনকে \'Necessary Evil\' বা প্রয়োজনীয় অমঙ্গল বলেছেন।'
      },
      {
        heading: 'কেন এটি প্রয়োজনীয়?',
        description: '১. মূল থেকে পাতায় পানি ও খনিজ লবণের অবিরাম রস উত্তোলন বজায় রাখে। ২. পাতাকে প্রখর রোদে শীতল রাখে। ৩. কোষের স্ফীতি ও বৃদ্ধি সচল রাখে।'
      },
      {
        heading: 'কেন এটি অমঙ্গল?',
        description: 'মাটিতে পানির অভাব থাকা সত্ত্বেও প্রস্বেদন চলতে থাকলে উদ্ভিদ পানিশূন্য হয়ে নেতিয়ে পড়ে এবং মারা যেতে পারে।'
      },
    ]
  },
  {
    id: 9,
    subject: 'biology',
    chapter: 6,
    title: '৬.৯ রস উত্তোলন (Ascent of Sap) ও প্রস্বেদন টান',
    subtitle: 'Ascent of Sap: Cohesion-Tension Theory & Capillarity',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s9.svg',
    customDiagramType: 'bioCh6_m9',
    gallery: [
      {
        id: 'bio6_s9_img1',
        titleBn: 'রস উত্তোলন (Ascent of Sap) ও প্রস্বেদন টান — বিস্তারিত চিত্র',
        titleEn: 'Ascent of Sap: Cohesion-Tension Theory & Capillarity',
        captionBn: 'রস উত্তোলন (Ascent of Sap) ও প্রস্বেদন টান সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Ascent of Sap: Cohesion-Tension Theory & Capillarity.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m9'
      },
      {
        id: 'bio6_s9_img2',
        titleBn: 'রস উত্তোলন (Ascent of Sap) ও প্রস্বেদন টান — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s9.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'সংসক্তি বল',
        labelEn: 'Cohesion Force',
        detailBn: 'পানির অণুগুলোর পারস্পরিক আকর্ষণ যা অবিচ্ছিন্ন জলস্তম্ভ তৈরি করে।',
        detailEn: 'H-bonding between water molecules.',
        symbol: 'COH',
        badgeType: 'cell',
        position: { x: 40, y: 50 }
      },
      {
        labelBn: 'প্রস্বেদন টান',
        labelEn: 'Transpiration Pull',
        detailBn: 'পাতা থেকে পানি বাষ্পীভূত হয়ে সৃষ্ট শক্তিশালী ঋণাত্মক চাপ।',
        detailEn: 'Negative suction tension.',
        symbol: 'T-PULL',
        badgeType: 'cell',
        position: { x: 60, y: 30 }
      },
    ],
    keyPoints: [
      {
        heading: 'রস উত্তোলনের সংজ্ঞা',
        description: 'মূল দ্বারা শোষিত পানি ও খনিজ লবণের দ্রবণ জাইলেম বাহিকার মধ্য দিয়ে উদ্ভিদের শীর্ষে পাতায় পৌঁছানোর প্রক্রিয়াকে রস উত্তোলন বলে।'
      },
      {
        heading: 'ডিকসন ও জলির সংসক্তি-টান মতবাদ',
        description: 'বিজ্ঞানী Dixon & Joly প্রস্তাব করেন যে, পানির অণুসমূহের শক্তিশালী সংসক্তি (Cohesion) ও জাইলেম প্রাচীরের সাথে আসঞ্জন (Adhesion) বল অবিচ্ছিন্ন জলস্তম্ভ বজায় রাখে।'
      },
      {
        heading: 'প্রস্বেদন টানের ভূমিকা',
        description: 'পাতা থেকে বাষ্পাকারে পানি বের হয়ে মেসোফিল কোষে যে ব্যাপন চাপ ঘাটতি সৃষ্টি হয়, তা জাইলেমে ঋণাত্মক টান তৈরি করে এবং ১০০ মিটার উঁচু গাছেও পানি টেনে তোলে।'
      },
    ]
  },
  {
    id: 10,
    subject: 'biology',
    chapter: 6,
    title: '৬.১০ উদ্ভিদে খাদ্য পরিবহন ও ফ্লোয়েম টিস্যুর ভূমিকা',
    subtitle: 'Food Translocation in Phloem: Sieve Tubes & Companion Cells',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s10.svg',
    customDiagramType: 'bioCh6_m10',
    gallery: [
      {
        id: 'bio6_s10_img1',
        titleBn: 'উদ্ভিদে খাদ্য পরিবহন ও ফ্লোয়েম টিস্যুর ভূমিকা — বিস্তারিত চিত্র',
        titleEn: 'Food Translocation in Phloem: Sieve Tubes & Companion Cells',
        captionBn: 'উদ্ভিদে খাদ্য পরিবহন ও ফ্লোয়েম টিস্যুর ভূমিকা সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Food Translocation in Phloem: Sieve Tubes & Companion Cells.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m10'
      },
      {
        id: 'bio6_s10_img2',
        titleBn: 'উদ্ভিদে খাদ্য পরিবহন ও ফ্লোয়েম টিস্যুর ভূমিকা — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s10.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'সিভনল',
        labelEn: 'Sieve Tube',
        detailBn: 'ছিদ্রযুক্ত সিভপ্লেট দ্বারা পরস্পর যুক্ত নালিকা যা সুক্রোজ পরিবহন করে।',
        detailEn: 'Sieve elements with sieve plates.',
        symbol: 'ST',
        badgeType: 'cell',
        position: { x: 35, y: 50 }
      },
      {
        labelBn: 'সঙ্গীকোষ',
        labelEn: 'Companion Cell',
        detailBn: 'ঘন সাইটোপ্লাজম ও বড় নিউক্লিয়াসযুক্ত কোষ যা সিভনল নিয়ন্ত্রণ করে।',
        detailEn: 'Metabolically active helper cell.',
        symbol: 'CC',
        badgeType: 'cell',
        position: { x: 65, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: 'উৎস থেকে গ্রাহকে পরিবহন (Source to Sink)',
        description: 'পাতায় তৈরি গ্লুকোজ সুক্রোজে রূপান্তরিত হয়ে ফ্লোয়েম টিস্যুর সিভনল দিয়ে উদ্ভিদের বর্ধিষ্ণু অঞ্চল, কাণ্ড, মূল এবং ফলে বাহিত হয়।'
      },
      {
        heading: 'উভয়মুখী পরিবহন',
        description: 'জাইলেমে পানি কেবল ঊর্ধ্বমুখী বাহিত হয়, কিন্তু ফ্লোয়েমে খাদ্য নিম্নমুখী, ঊর্ধ্বমুখী ও পার্শ্বীয়—সকল দিকেই প্রবাহিত হয়।'
      },
      {
        heading: 'ম্যাস ফ্লো বা চাপ-প্রবাহ মতবাদ',
        description: 'উৎস কোষে শর্করার উচ্চ ঘনত্বের কারণে অসমোটিক চাপে তরল ফ্লোয়েম নল দিয়ে কম চাপের গ্রাহক অঞ্চলে প্রবাহিত হয়।'
      },
    ]
  },
  {
    id: 11,
    subject: 'biology',
    chapter: 6,
    title: '৬.১১ মানব রক্ত ও রক্তরস (Blood & Plasma) এর উপাদান',
    subtitle: 'Human Blood Composition: Plasma (91-92% water) & Formed Elements',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s11.svg',
    customDiagramType: 'bioCh6_m11',
    gallery: [
      {
        id: 'bio6_s11_img1',
        titleBn: 'মানব রক্ত ও রক্তরস (Blood & Plasma) এর উপাদান — বিস্তারিত চিত্র',
        titleEn: 'Human Blood Composition: Plasma (91-92% water) & Formed Elements',
        captionBn: 'মানব রক্ত ও রক্তরস (Blood & Plasma) এর উপাদান সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Human Blood Composition: Plasma (91-92% water) & Formed Elements.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m11'
      },
      {
        id: 'bio6_s11_img2',
        titleBn: 'মানব রক্ত ও রক্তরস (Blood & Plasma) এর উপাদান — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s11.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'রক্তরস (৫৫%)',
        labelEn: 'Plasma (55%)',
        detailBn: 'হালকা হলুদ বর্ণের তরল যাতে পানি ও প্রোটিন থাকে।',
        detailEn: 'Straw-colored liquid matrix.',
        symbol: 'PLS',
        badgeType: 'cell',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'রক্তকণিকা (৪৫%)',
        labelEn: 'Blood Cells (45%)',
        detailBn: 'লোহিত, শ্বেত ও অনুচক্রিকা কোষীয় উপাদান।',
        detailEn: 'RBC, WBC & Platelets.',
        symbol: 'CELL',
        badgeType: 'cell',
        position: { x: 70, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: 'রক্তের ভৌত বৈশিষ্ট্য',
        description: 'রক্ত একটি ক্ষারীয় (pH ৭.৩৫-৭.৪৫), অস্বচ্ছ, লবণাক্ত, তরল যোজক কলা (Fluid connective tissue)। একজন পূর্ণবয়স্ক মানুষের দেহে প্রায় ৫-৬ লিটার রক্ত থাকে।'
      },
      {
        heading: 'রক্তরসের (Plasma) উপাদান',
        description: 'রক্তরসের ৯১-৯২% পানি এবং ৮-৯% কঠিন পদার্থ। কঠিন উপাদানের মধ্যে প্রোটিন (অ্যালবুমিন, গ্লোবিউলিন, ফাইব্রিনোজেন, প্রোথ্রম্বিন), গ্লুকোজ, ফ্যাটি এসিড, ইউরিয়া, সোডিয়াম ও হরমোন উল্লেখযোগ্য।'
      },
      {
        heading: 'রক্তরসের প্রধান কাজ',
        description: 'কোষে পুষ্টি উপাদান, হরমোন ও অক্সিজেন পৌঁছে দেওয়া এবং কার্বন ডাই-অক্সাইড ও নাইট্রোজেনঘটিত বর্জ্য রেচন অঙ্গে পরিবহন করা।'
      },
    ]
  },
  {
    id: 12,
    subject: 'biology',
    chapter: 6,
    title: '৬.১২ লোহিত রক্তকণিকা (Erythrocytes / RBC)',
    subtitle: 'Erythrocytes: Biconcave Disc, Hemoglobin & 120 Days Life Span',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s12.svg',
    customDiagramType: 'bioCh6_m12',
    gallery: [
      {
        id: 'bio6_s12_img1',
        titleBn: 'লোহিত রক্তকণিকা (Erythrocytes / RBC) — বিস্তারিত চিত্র',
        titleEn: 'Erythrocytes: Biconcave Disc, Hemoglobin & 120 Days Life Span',
        captionBn: 'লোহিত রক্তকণিকা (Erythrocytes / RBC) সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Erythrocytes: Biconcave Disc, Hemoglobin & 120 Days Life Span.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m12'
      },
      {
        id: 'bio6_s12_img2',
        titleBn: 'লোহিত রক্তকণিকা (Erythrocytes / RBC) — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s12.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'হিমোগ্লোবিন',
        labelEn: 'Hemoglobin',
        detailBn: 'আয়রনযুক্ত লাল রঞ্জক প্রোটিন যা অক্সিজেন পরিবহন করে।',
        detailEn: 'Iron-containing pigment (Hb).',
        symbol: 'Hb',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: 'আকার ও গঠন',
        description: 'মানুষের লোহিত রক্তকণিকা দ্বি-অবতল (Biconcave) এবং গোল চাক্তির মতো। পরিণত মানব RBC-তে কোনো নিউক্লিয়াস থাকে না, ফলে অধিক পরিমাণ হিমোগ্লোবিন ধারণ করতে পারে।'
      },
      {
        heading: 'উৎপত্তি ও আয়ুষ্কাল',
        description: 'অস্থিমজ্জার (Red Bone Marrow) স্টেম সেল থেকে তৈরি হয়। এদের গড় আয়ু প্রায় ১২০ দিন (৪ মাস)। যকৃৎ ও প্লীহায় এদের ভাঙন ঘটে।'
      },
      {
        heading: 'কাজ ও অক্সিহিমোগ্লোবিন',
        description: 'হিমোগ্লোবিনের সাথে অক্সিজেন যুক্ত হয়ে অস্থায়ী অক্সিহিমোগ্লোবিন (Hb.O2) যৌগ গঠন করে ফুসফুস থেকে দেহকোষে O2 সরবরাহ করে।'
      },
    ]
  },
  {
    id: 13,
    subject: 'biology',
    chapter: 6,
    title: '৬.১৩ শ্বেত রক্তকণিকা (Leukocytes / WBC) ও ফ্যাগোসাইটোসিস',
    subtitle: 'Leukocytes Classification: Granulocytes & Agranulocytes & Immunity',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s13.svg',
    customDiagramType: 'bioCh6_m13',
    gallery: [
      {
        id: 'bio6_s13_img1',
        titleBn: 'শ্বেত রক্তকণিকা (Leukocytes / WBC) ও ফ্যাগোসাইটোসিস — বিস্তারিত চিত্র',
        titleEn: 'Leukocytes Classification: Granulocytes & Agranulocytes & Immunity',
        captionBn: 'শ্বেত রক্তকণিকা (Leukocytes / WBC) ও ফ্যাগোসাইটোসিস সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Leukocytes Classification: Granulocytes & Agranulocytes & Immunity.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m13'
      },
      {
        id: 'bio6_s13_img2',
        titleBn: 'শ্বেত রক্তকণিকা (Leukocytes / WBC) ও ফ্যাগোসাইটোসিস — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s13.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ফ্যাগোসাইটোসিস',
        labelEn: 'Phagocytosis',
        detailBn: 'নিউট্রোফিল ও মনোসাইট জীবাণু ভক্ষণ করে ধ্বংস করে।',
        detailEn: 'Engulfing pathogen by pseudopodia.',
        symbol: 'PHAG',
        badgeType: 'cell',
        position: { x: 45, y: 50 }
      },
      {
        labelBn: 'লিম্ফোসাইট',
        labelEn: 'Lymphocyte',
        detailBn: 'অ্যান্টিবডি তৈরি করে রোগ প্রতিরোধ ক্ষমতা গড়ে তোলে।',
        detailEn: 'Antibody producing B & T cells.',
        symbol: 'LYM',
        badgeType: 'cell',
        position: { x: 75, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: 'শ্রেণিবিভাগ (Classification)',
        description: '১. দানাদার (Granulocytes): নিউট্রোফিল, ইওসিনোফিল, বেসোফিল। ২. অদানাদার (Agranulocytes): লিম্ফোসাইট ও মনোসাইট।'
      },
      {
        heading: 'দেহের ভ্রাম্যমাণ প্রহরী (Mobile Soldiers)',
        description: 'শ্বেতকণিকাকে মানবদেহের অতন্দ্র প্রহরী বলা হয়। মনোসাইট ও নিউট্রোফিল ফ্যাগোসাইটোসিস প্রক্রিয়ায় রোগজীবাণু ভক্ষণ করে।'
      },
      {
        heading: 'অ্যান্টিবডি ও হেপারিন নিঃসরণ',
        description: 'লিম্ফোসাইট অ্যান্টিবডি সৃষ্টি করে এবং বেসোফিল হেপারিন নিঃসরণ করে রক্তনালির ভেতরে রক্ত জমাট বাঁধতে বাধা দেয়।'
      },
    ]
  },
  {
    id: 14,
    subject: 'biology',
    chapter: 6,
    title: '৬.১৪ অনুচক্রিকা (Platelets) ও রক্ত তঞ্চন (Blood Clotting)',
    subtitle: 'Thrombocytes & Blood Clotting Cascade: Thromboplastin to Fibrin',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s14.svg',
    customDiagramType: 'bioCh6_m14',
    gallery: [
      {
        id: 'bio6_s14_img1',
        titleBn: 'অনুচক্রিকা (Platelets) ও রক্ত তঞ্চন (Blood Clotting) — বিস্তারিত চিত্র',
        titleEn: 'Thrombocytes & Blood Clotting Cascade: Thromboplastin to Fibrin',
        captionBn: 'অনুচক্রিকা (Platelets) ও রক্ত তঞ্চন (Blood Clotting) সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Thrombocytes & Blood Clotting Cascade: Thromboplastin to Fibrin.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m14'
      },
      {
        id: 'bio6_s14_img2',
        titleBn: 'অনুচক্রিকা (Platelets) ও রক্ত তঞ্চন (Blood Clotting) — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s14.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ফাইব্রিন জালক',
        labelEn: 'Fibrin Mesh',
        detailBn: 'অদ্রবণীয় সুতার মতো জালক যা রক্তকণিকা আটকে ক্লট বানায়।',
        detailEn: 'Insoluble fibrin polymer trap.',
        symbol: 'FIB',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: 'অনুচক্রিকার গঠন',
        description: 'এরা প্রকৃত কোষ নয়, বরং অস্থিমজ্জার মেগাক্যারিওসাইট কোষের ভাঙা অংশ। এরা বর্ণহীন, নিউক্লিয়াসবিহীন এবং আয়ু ৫-১০ দিন।'
      },
      {
        heading: 'রক্ত তঞ্চনের ৪টি ধাপ',
        description: '১. ক্ষতস্থানে অনুচক্রিকা ভেঙে থ্রম্বোপ্লাস্টিন মুক্ত হয়। ২. ক্যালসিয়াম আয়ন (Ca2+) এর উপস্থিতিতে প্রোথ্রম্বিন সক্রিয় থ্রম্বিনে পরিণত হয়। ৩. থ্রম্বিন ফাইব্রিনোজেনকে অদ্রবণীয় ফাইব্রিন জালকে রূপান্তরিত করে। ৪. রক্ত জমাট বেঁধে রক্তপাত বন্ধ হয়।'
      },
      {
        heading: 'রক্তপাত সময় ও জমাট সময়',
        description: 'স্বাভাবিক রক্তপাত সময় (Bleeding Time) ১-৪ মিনিট এবং রক্ত তঞ্চন সময় (Clotting Time) ৪-৮ মিনিট।'
      },
    ]
  },
  {
    id: 15,
    subject: 'biology',
    chapter: 6,
    title: '৬.১৫ রক্তের গ্রুপ: ABO সিস্টেম ও অ্যান্টিজেন-অ্যান্টিবডি',
    subtitle: 'ABO Blood Grouping: Karl Landsteiner System (A, B, AB, O)',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s15.svg',
    customDiagramType: 'bioCh6_m15',
    gallery: [
      {
        id: 'bio6_s15_img1',
        titleBn: 'রক্তের গ্রুপ: ABO সিস্টেম ও অ্যান্টিজেন-অ্যান্টিবডি — বিস্তারিত চিত্র',
        titleEn: 'ABO Blood Grouping: Karl Landsteiner System (A, B, AB, O)',
        captionBn: 'রক্তের গ্রুপ: ABO সিস্টেম ও অ্যান্টিজেন-অ্যান্টিবডি সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for ABO Blood Grouping: Karl Landsteiner System (A, B, AB, O).',
        type: 'diagram',
        customDiagramType: 'bioCh6_m15'
      },
      {
        id: 'bio6_s15_img2',
        titleBn: 'রক্তের গ্রুপ: ABO সিস্টেম ও অ্যান্টিজেন-অ্যান্টিবডি — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s15.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'অ্যাগ্লুটিনিন (অ্যান্টিবডি)',
        labelEn: 'Plasma Agglutinin',
        detailBn: 'রক্তরসের অ্যান্টিবডি যা বিপরীত অ্যান্টিজেনকে জমাট বাধায়।',
        detailEn: 'Anti-A & Anti-B antibodies.',
        symbol: 'Ab',
        badgeType: 'cell',
        position: { x: 30, y: 40 }
      },
      {
        labelBn: 'অ্যাগ্লুটিনোজেন (অ্যান্টিজেন)',
        labelEn: 'RBC Agglutinogen',
        detailBn: 'RBC এর ঝিল্লিতে অবস্থিত A ও B গ্লাইকোপ্রোটিন।',
        detailEn: 'Antigen A & Antigen B on RBC.',
        symbol: 'Ag',
        badgeType: 'cell',
        position: { x: 70, y: 40 }
      },
    ],
    keyPoints: [
      {
        heading: 'কার্ল ল্যান্ডস্টেইনারের আবিষ্কার',
        description: 'বিজ্ঞানী কার্ল ল্যান্ডস্টেইনার (১৯০১) লোহিত রক্তকণিকার ঝিল্লির অ্যান্টিজেন A এবং B এর উপস্থিতির ওপর ভিত্তি করে রক্তকে ৪টি গ্রুপে ভাগ করেন।'
      },
      {
        heading: 'রক্তের ৪টি গ্রুপের চার্ট',
        description: '• গ্রুপ A: অ্যান্টিজেন A, অ্যান্টিবডি b। • গ্রুপ B: অ্যান্টিজেন B, অ্যান্টিবডি a। • গ্রুপ AB: অ্যান্টিজেন A ও B, কোনো অ্যান্টিবডি নেই (সর্বজনীন গ্রহীতা)। • গ্রুপ O: কোনো অ্যান্টিজেন নেই, অ্যান্টিবডি a ও b উভয়ই আছে (সর্বজনীন দাতা)।'
      },
      {
        heading: 'রক্ত সঞ্চালনের নিয়ম',
        description: 'দাতার লোহিত রক্তকণিকার অ্যান্টিজেন যেন গ্রহীতার রক্তরসের অনুরূপ অ্যান্টিবডির সংস্পর্শে না আসে, অন্যথায় রক্তপিণ্ড বা অ্যাগ্লুটিনেশন ঘটে মৃত্যু হতে পারে।'
      },
    ]
  },
  {
    id: 16,
    subject: 'biology',
    chapter: 6,
    title: '৬.১৬ Rh ফ্যাক্টর ও গর্ভধারণ জটিলতা (Erythroblastosis Fetalis)',
    subtitle: 'Rhesus Factor (+/-), Rh Incompatibility & Hemolytic Disease',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s16.svg',
    customDiagramType: 'bioCh6_m16',
    gallery: [
      {
        id: 'bio6_s16_img1',
        titleBn: 'Rh ফ্যাক্টর ও গর্ভধারণ জটিলতা (Erythroblastosis Fetalis) — বিস্তারিত চিত্র',
        titleEn: 'Rhesus Factor (+/-), Rh Incompatibility & Hemolytic Disease',
        captionBn: 'Rh ফ্যাক্টর ও গর্ভধারণ জটিলতা (Erythroblastosis Fetalis) সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Rhesus Factor (+/-), Rh Incompatibility & Hemolytic Disease.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m16'
      },
      {
        id: 'bio6_s16_img2',
        titleBn: 'Rh ফ্যাক্টর ও গর্ভধারণ জটিলতা (Erythroblastosis Fetalis) — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s16.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'Rh অ্যান্টিজেন (D)',
        labelEn: 'Rh(D) Antigen',
        detailBn: 'রেসাস বানরের RBC-র মতো বিশেষ প্রোটিন অ্যান্টিজেন।',
        detailEn: 'Present in Rh+ individuals.',
        symbol: 'Rh+',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: 'Rh ফ্যাক্টরের ধারণা',
        description: 'রেসাস বানরের (Rhesus macaque) রক্ত থেকে প্রথম আবিষ্কৃত বিশেষ অ্যান্টিজেনকে Rh ফ্যাক্টর বলা হয়। যাদের রক্তে এটি থাকে তারা Rh+ এবং যাদের থাকে না তারা Rh-।'
      },
      {
        heading: 'রক্ত সঞ্চালনে Rh জটিলতা',
        description: 'Rh- ব্যক্তিকে Rh+ রক্ত দিলে প্রথমবার সমস্যা না হলেও তার রক্তে অ্যান্টি-Rh অ্যান্টিবডি তৈরি হয়। দ্বিতীয়বার দিলে তীব্র রক্ত জমাট বাঁধে।'
      },
      {
        heading: 'ভ্রূণীয় জটিলতা (Erythroblastosis Fetalis)',
        description: 'Rh- নেগেটিভ মা এবং Rh+ পজিটিভ বাবার সন্তান Rh+ হলে প্রথম সন্তান স্বাভাবিক জন্মায়। কিন্তু দ্বিতীয় গর্ভধারণে মায়ের অ্যান্টি-Rh অ্যান্টিবডি গর্ভফুলের মাধ্যমে ভ্রূণের RBC ধ্বংস করে রক্তাল্পতা ও মৃত্যু ডেকে আনে।'
      },
    ]
  },
  {
    id: 17,
    subject: 'biology',
    chapter: 6,
    title: '৬.১৭ মানব হৃৎপিণ্ডের গঠন ও ৪টি প্রকোষ্ঠ',
    subtitle: 'Human Heart Anatomy: 4 Chambers, Pericardium & Valves (Tricuspid/Bicuspid)',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s17.svg',
    customDiagramType: 'bioCh6_m17',
    gallery: [
      {
        id: 'bio6_s17_img1',
        titleBn: 'মানব হৃৎপিণ্ডের গঠন ও ৪টি প্রকোষ্ঠ — বিস্তারিত চিত্র',
        titleEn: 'Human Heart Anatomy: 4 Chambers, Pericardium & Valves (Tricuspid/Bicuspid)',
        captionBn: 'মানব হৃৎপিণ্ডের গঠন ও ৪টি প্রকোষ্ঠ সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Human Heart Anatomy: 4 Chambers, Pericardium & Valves (Tricuspid/Bicuspid).',
        type: 'diagram',
        customDiagramType: 'bioCh6_m17'
      },
      {
        id: 'bio6_s17_img2',
        titleBn: 'মানব হৃৎপিণ্ডের গঠন ও ৪টি প্রকোষ্ঠ — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s17.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'বাম নিলয় (LV)',
        labelEn: 'Left Ventricle',
        detailBn: 'সবচেয়ে পুরু পেশিবহুল প্রকোষ্ঠ যা সারা শরীরে রক্ত পাঠায়।',
        detailEn: 'Thickest muscular chamber.',
        symbol: 'LV',
        badgeType: 'cell',
        position: { x: 65, y: 65 }
      },
      {
        labelBn: 'বাইকাসপিড কপাটিকা',
        labelEn: 'Bicuspid/Mitral Valve',
        detailBn: 'বাম অলিন্দ ও বাম নিলয়ের মধ্যবর্তী দুই পাল্লাবিশিষ্ট কপাটিকা।',
        detailEn: 'Mitral two-cusp valve.',
        symbol: 'BV',
        badgeType: 'cell',
        position: { x: 60, y: 45 }
      },
    ],
    keyPoints: [
      {
        heading: 'হৃৎপিণ্ডের অবস্থান ও পেরিকার্ডিয়াম',
        description: 'বক্ষগহ্বরের মাঝখানে দুই ফুসফুসের মধ্যবর্তী মিডিয়াটিনামে অবস্থিত ত্রিকোণাকার পাম্প অঙ্গ। এটি পেরিকার্ডিয়াম নামক দ্বি-স্তরী ঝিল্লি দ্বারা আবৃত এবং পেরিকার্ডিয়াল ফ্লুইডে পূর্ণ।'
      },
      {
        heading: 'হৃৎপ্রাচীরের ৩টি স্তর',
        description: '১. এপিকার্ডিয়াম (বহিঃস্তর)। ২. মায়োকার্ডিয়াম (মধ্যবর্তী অনৈচ্ছিক পেশিস্তর যা সংকোচনশীল)। ৩. এন্ডোকার্ডিয়াম (অন্তঃস্তর যা কপাটিকাকে আবৃত রাখে)।'
      },
      {
        heading: '৪টি প্রকোষ্ঠ ও কপাটিকাসমূহ',
        description: 'ডান অলিন্দ, ডান নিলয়, বাম অলিন্দ, বাম নিলয়। ট্রাইকাসপিড (ডান অলিন্দ-নিলয়), বাইকাসপিড বা মাইট্রাল (বাম অলিন্দ-নিলয়), এবং পালমোনারি ও অ্যাওর্টিক সেমিলুনার কপাটিকা রক্তপ্রবাহকে একমুখী রাখে।'
      },
    ]
  },
  {
    id: 18,
    subject: 'biology',
    chapter: 6,
    title: '৬.১৮ হৃৎপিণ্ডের রক্ত সঞ্চালন চক্র (দ্বি-সংবহন ও ডায়াস্টোল-সিস্টোল)',
    subtitle: 'Cardiac Cycle: Systemic & Pulmonary Circulation, Systole & Diastole',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s18.svg',
    customDiagramType: 'bioCh6_m18',
    gallery: [
      {
        id: 'bio6_s18_img1',
        titleBn: 'হৃৎপিণ্ডের রক্ত সঞ্চালন চক্র (দ্বি-সংবহন ও ডায়াস্টোল-সিস্টোল) — বিস্তারিত চিত্র',
        titleEn: 'Cardiac Cycle: Systemic & Pulmonary Circulation, Systole & Diastole',
        captionBn: 'হৃৎপিণ্ডের রক্ত সঞ্চালন চক্র (দ্বি-সংবহন ও ডায়াস্টোল-সিস্টোল) সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Cardiac Cycle: Systemic & Pulmonary Circulation, Systole & Diastole.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m18'
      },
      {
        id: 'bio6_s18_img2',
        titleBn: 'হৃৎপিণ্ডের রক্ত সঞ্চালন চক্র (দ্বি-সংবহন ও ডায়াস্টোল-সিস্টোল) — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s18.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'মহাধমনী (Aorta)',
        labelEn: 'Systemic Aorta',
        detailBn: 'অক্সিজেনসমৃদ্ধ বিশুদ্ধ রক্ত সমগ্র দেহে বহন করে।',
        detailEn: 'Carries oxygenated blood.',
        symbol: 'AO',
        badgeType: 'cell',
        position: { x: 50, y: 20 }
      },
      {
        labelBn: 'পালমোনারি ধমনী',
        labelEn: 'Pulmonary Artery',
        detailBn: 'একমাত্র ধমনী যা দূষিত CO2 রক্ত ফুসফুসে নিয়ে যায়।',
        detailEn: 'Deoxygenated blood to lungs.',
        symbol: 'PA',
        badgeType: 'cell',
        position: { x: 40, y: 25 }
      },
    ],
    keyPoints: [
      {
        heading: 'মানুষের দ্বি-সংবহন (Double Circulation)',
        description: 'প্রতিটি চক্রে রক্ত হৃৎপিণ্ডের মধ্য দিয়ে দু\'বার প্রবাহিত হয়: ১. পালমোনারি সংবহন (হৃৎপিণ্ড ⟶ ফুসফুস ⟶ হৃৎপিণ্ড) এবং ২. সিস্টেমিক সংবহন (হৃৎপিণ্ড ⟶ সমগ্র দেহ ⟶ হৃৎপিণ্ড)।'
      },
      {
        heading: 'অলিন্দ ও নিলয়ের পর্যায়ক্রমিক ছন্দ',
        description: '১. অলিন্দের ডায়াস্টোল: ঊর্ধ্ব ও নিম্ন মহাশিরা দিয়ে ডান অলিন্দে এবং ফুসফুসীয় শিরা দিয়ে বাম অলিন্দে রক্ত ভরে। ২. অলিন্দের সিস্টোল: রক্ত নিলয়ে নামে। ৩. নিলয়ের সিস্টোল: ডান নিলয় থেকে ফুসফুসে এবং বাম নিলয় থেকে মহাধমনী দিয়ে সারা শরীরে ছড়ায়। ৪. নিলয়ের ডায়াস্টোল।'
      },
      {
        heading: 'হৃদস্পন্দনের শব্দ (Lub-Dub)',
        description: 'কপাটিকাগুলো বন্ধ হওয়ার সময় উৎপন্ন শব্দ: ট্রাইকাসপিড ও বাইকাসপিড বন্ধ হলে \'Lub\' এবং সেমিলুনার কপাটিকা বন্ধ হলে \'Dub\' সৃষ্টি হয়।'
      },
    ]
  },
  {
    id: 19,
    subject: 'biology',
    chapter: 6,
    title: '৬.১৯ রক্তচাপ, স্ফিগমোম্যানোমিটার ও উচ্চ রক্তচাপ (Hypertension)',
    subtitle: 'Blood Pressure Measurement: Systolic/Diastolic (120/80 mmHg) & Health',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s19.svg',
    customDiagramType: 'bioCh6_m19',
    gallery: [
      {
        id: 'bio6_s19_img1',
        titleBn: 'রক্তচাপ, স্ফিগমোম্যানোমিটার ও উচ্চ রক্তচাপ (Hypertension) — বিস্তারিত চিত্র',
        titleEn: 'Blood Pressure Measurement: Systolic/Diastolic (120/80 mmHg) & Health',
        captionBn: 'রক্তচাপ, স্ফিগমোম্যানোমিটার ও উচ্চ রক্তচাপ (Hypertension) সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Blood Pressure Measurement: Systolic/Diastolic (120/80 mmHg) & Health.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m19'
      },
      {
        id: 'bio6_s19_img2',
        titleBn: 'রক্তচাপ, স্ফিগমোম্যানোমিটার ও উচ্চ রক্তচাপ (Hypertension) — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s19.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'স্ফিগমোম্যানোমিটার',
        labelEn: 'Sphygmomanometer',
        detailBn: 'রক্তচাপ পরিমাপক পারদ বা ডিজিটাল কাফ যন্ত্র।',
        detailEn: 'BP measuring cuff device.',
        symbol: 'BP',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: 'রক্তচাপের সংজ্ঞা',
        description: 'নিলয়ের সংকোচনের ফলে রক্ত যখন ধমনীর মধ্য দিয়ে প্রবাহিত হয়, তখন ধমনী প্রাচীরে যে পার্শ্বচাপ সৃষ্টি করে তাকে রক্তচাপ বলে।'
      },
      {
        heading: 'আদর্শ মান (120/80 mmHg)',
        description: 'সুস্থ প্রাপ্তবয়স্ক মানুষের স্বাভাবিক সিস্টোলিক চাপ ১১০-১৪০ mmHg (গড় ১২০) এবং ডায়াস্টোলিক চাপ ৬০-৯০ mmHg (গড় ৮০)।'
      },
      {
        heading: 'উচ্চ রক্তচাপ (Hypertension) ও প্রতিকার',
        description: 'যদি রক্তচাপ ক্রমাগত ১৪০/৯০ mmHg এর বেশি থাকে তবে তাকে হাইপারটেনশন বলে। অতিরিক্ত লবণ, চর্বি পরিহার, নিয়মিত ব্যায়াম এবং মানসিক চাপ হ্রাস এর প্রতিকার।'
      },
    ]
  },
  {
    id: 20,
    subject: 'biology',
    chapter: 6,
    title: '৬.২০ সংবহনতন্ত্রের রোগ: অ্যাথেরোস্ক্লেরোসিস, হার্ট অ্যাটাক ও বাইপাস',
    subtitle: 'Cardiovascular Diseases: Atherosclerosis, Angina, Heart Attack & Angioplasty',
    category: 'অধ্যায় ৬: জীবে পরিবহন',
    image: '/src/assets/images/bio/bio_ch6_s20.svg',
    customDiagramType: 'bioCh6_m20',
    gallery: [
      {
        id: 'bio6_s20_img1',
        titleBn: 'সংবহনতন্ত্রের রোগ: অ্যাথেরোস্ক্লেরোসিস, হার্ট অ্যাটাক ও বাইপাস — বিস্তারিত চিত্র',
        titleEn: 'Cardiovascular Diseases: Atherosclerosis, Angina, Heart Attack & Angioplasty',
        captionBn: 'সংবহনতন্ত্রের রোগ: অ্যাথেরোস্ক্লেরোসিস, হার্ট অ্যাটাক ও বাইপাস সম্পর্কিত বিশদ ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and physiological diagram for Cardiovascular Diseases: Atherosclerosis, Angina, Heart Attack & Angioplasty.',
        type: 'diagram',
        customDiagramType: 'bioCh6_m20'
      },
      {
        id: 'bio6_s20_img2',
        titleBn: 'সংবহনতন্ত্রের রোগ: অ্যাথেরোস্ক্লেরোসিস, হার্ট অ্যাটাক ও বাইপাস — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Scientific Microscopic Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বৈজ্ঞানিক ও অণুবীক্ষণিক চিত্র।',
        captionEn: 'Realistic scientific microscopic photography.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch6_s20.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'করোনারি ধমনী ব্লক',
        labelEn: 'Coronary Plaque Block',
        detailBn: 'কোলেস্টেরল জমে হৃৎপেশির রক্তপ্রবাহ বাধাগ্রস্ত হওয়া।',
        detailEn: 'Atheroma in coronary artery.',
        symbol: 'BLK',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: 'অ্যাথেরোস্ক্লেরোসিস (Atherosclerosis)',
        description: 'ধমনীর অভ্যন্তরীণ গাত্রে কোলেস্টেরল ও লিপিড জমে প্লাক তৈরি হয়, ধমনী সরু ও শক্ত হয়ে রক্ত চলাচল বাধাগ্রস্ত হয়।'
      },
      {
        heading: 'এনজাইনা ও হার্ট অ্যাটাক (Myocardial Infarction)',
        description: 'হৃৎপেশিতে রক্তস্বল্পতায় বুকে তীব্র চাপ ও ব্যথাকে এনজাইনা বলে। করোনারি ধমনী রক্তজমাটে সম্পূর্ণ বন্ধ হয়ে হৃৎপেশির টিস্যু মরে গেলে হার্ট অ্যাটাক হয়।'
      },
      {
        heading: 'এনজিওপ্লাস্টি ও করোনারি বাইপাস সার্জারি',
        description: 'স্টেন্ট বা রিং পরিয়ে সরু রক্তনালি প্রশস্ত করাকে এনজিওপ্লাস্টি বলে। বিকল্প সুস্থ রক্তনালি জোড়া লাগিয়ে রক্তপ্রবাহ সচল করাকে করোনারি বাইপাস (CABG) বলে।'
      },
    ]
  }
];
