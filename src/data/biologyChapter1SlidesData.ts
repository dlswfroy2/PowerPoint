/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Slide } from '../types/presentation';

export const biologyChapter1Slides: Slide[] = [
  // Slide 1: জীববিজ্ঞানের ধারণা ও পরিচিতি
  {
    id: 1,
    subject: 'biology',
    chapter: 1,
    title: 'জীববিজ্ঞানের ধারণা ও পরিচিতি',
    subtitle: 'Concept and Scope of Biology (Life Sciences)',
    category: 'জীববিজ্ঞান ১ম অধ্যায়: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s1.svg',
    gallery: [
      {
        id: 'bio1_s1_img1',
        titleBn: 'জীবজগতের বৈচিত্র্য',
        titleEn: 'Diversity of Life on Earth',
        captionBn: 'জীববিজ্ঞানের মূল কেন্দ্রবিন্দু হলো জীবন ও জীবের বৈচিত্র্য, গঠন এবং পরিবেশের সাথে তাদের আন্তঃসম্পর্ক।',
        captionEn: 'Biology deals with living organisms, their origin, diversity and interactions.',
        type: 'photo'
      },
      {
        id: 'bio1_s1_img2',
        titleBn: 'গ্রিক শব্দ Bios ও Logos',
        titleEn: 'Etymology of Biology',
        captionBn: 'গ্রিক শব্দ "Bios" (জীবন) এবং "Logos" (জ্ঞান বা আলোচনা) থেকে "Biology" শব্দের উৎপত্তি।',
        captionEn: 'Derived from Greek words Bios (life) and Logos (discourse/study).',
        type: 'diagram',
        customDiagramType: 'bioCh1_m1'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'Bios (জীবন ও প্রোটোপ্লাজম)',
        labelEn: 'Bios (Life & Protoplasm)',
        detailBn: 'জীবনের সকল প্রকার জৈবিক ক্রিয়া, বৃদ্ধি, বিস্তার ও সজীব প্রোটোপ্লাজমীয় ভিত্তি।',
        detailEn: 'Living organisms, respiration, reproduction, vitality and protoplasmic substance.',
        symbol: 'Bio',
        partId: 'protoplasm',
        badgeType: 'biology',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'Logos (জ্ঞান ও অনুসন্ধান)',
        labelEn: 'Logos (Knowledge / Study)',
        detailBn: 'বিজ্ঞানভিত্তিক সুশৃঙ্খল অনুসন্ধান, পরীক্ষণ ও জীবনরহস্যের গবেষণা।',
        detailEn: 'Scientific exploration and systematic understanding of living systems.',
        symbol: 'Log',
        partId: 'logos',
        badgeType: 'biology',
        position: { x: 70, y: 50 }
      },
      {
        labelBn: 'দ্বিসূত্রক ডিএনএ (জীবনের রাসায়নিক ভিত্তি)',
        labelEn: 'DNA Double Helix',
        detailBn: 'সকল সজীব কোষে বংশগতির তথ্য ও প্রোটিন তৈরির ব্লুপ্রিন্ট ধারণকারী হেলিক্স।',
        detailEn: 'Genetic blueprint and nucleotide base code of all living cells.',
        symbol: 'DNA',
        partId: 'dna',
        badgeType: 'biology',
        position: { x: 50, y: 30 }
      }
    ],
    keyPoints: [
      {
        heading: 'জীববিজ্ঞান কী? (Definition of Biology)',
        description: 'বিজ্ঞানের যে শাখায় জীবনের উৎপত্তি, জীবের দৈহিক গঠন, শারীরবৃত্তীয় কার্যাবলি, বংশগতি, বিবর্তন ও পরিবেশের সাথে জীবের পারস্পরিক সম্পর্ক নিয়ে বিশদ আলোচনা ও গবেষণা করা হয়, তাকে জীববিজ্ঞান (Biology) বলে।',
        highlight: 'জীবন ও জীববৈচিত্র্য সম্পর্কিত বিজ্ঞান।'
      },
      {
        heading: 'জীবের প্রধান মৌলিক বৈশিষ্ট্যসমূহ',
        description: '১. সুনির্দিষ্ট কোষীয় সংগঠন (Cellular organization)\n২. বিপাক ক্রিয়া (Metabolism - পুষ্টি, শ্বসন, রেচন)\n৩. উদ্দীপনায় সাড়া দান ও সংবেদনশীলতা (Irritability)\n৪. প্রজনন ও বংশরক্ষা (Reproduction)\n৫. অভিযোজন ও বিবর্তন ক্ষমতা (Adaptation)।',
        highlight: 'কোষীয় গঠন, বিপাক, বৃদ্ধি, প্রজনন ও সংবেদনশীলতা।'
      },
      {
        heading: 'শব্দটির ঐতিহাসিক পটভূমি',
        description: 'বিজ্ঞানী ল্যামার্ক (Jean-Baptiste Lamarck) এবং ট্রেভিরেনাস (Gottfried Reinhold Treviranus) ১৮০২ সালে প্রথম পৃথকভাবে "Biology" শব্দটি সার্বজনীনভাবে ব্যবহার শুরু করেন। প্রাচীন গ্রিক দার্শনিক এরিস্টটলকে (Aristotle) জীববিজ্ঞানের জনক বলা হয়।',
        highlight: 'জীববিজ্ঞানের জনক: এরিস্টটল (Aristotle)।'
      }
    ],
    realLifeRelevance: [
      'কৃষি উন্নয়ন, খাদ্য উৎপাদন ও উচ্চফলনশীল জাত উদ্ভাবন।',
      'চিকিৎসাবিজ্ঞান, নতুন অ্যান্টিবায়োটিক ও জীবনরক্ষাকারী ওষুধ আবিষ্কার।',
      'জলবায়ু পরিবর্তন মোকাবিলা ও পরিবেশ সংরক্ষণ।'
    ],
    formulas: [
      {
        nameBn: 'শব্দমূল সমীকরণ',
        nameEn: 'Etymological Equation',
        formula: 'Biology = Bios (জীবন) + Logos (জ্ঞান / আলোচনা)',
        meaningBn: 'জীবের গঠন, শারীরবৃত্ত ও পরিবেশীয় বিজ্ঞান'
      }
    ],
    didYouKnow: 'প্রাচীন গ্রিক দার্শনিক থিওফ্রাস্টাসকে (Theophrastus) উদ্ভিদবিজ্ঞানের জনক এবং এরিস্টটলকে প্রাণিবিজ্ঞানের জনক বলা হয়।'
  },

  // Slide 2: জীববিজ্ঞানের শাখাসমূহ: ভৌত ও ফলিত জীববিজ্ঞান
  {
    id: 2,
    subject: 'biology',
    chapter: 1,
    title: 'জীববিজ্ঞানের শাখাসমূহ: ভৌত ও ফলিত শাখা',
    subtitle: 'Branches of Biology: Basic (Theoretical) & Applied Sciences',
    category: 'জীববিজ্ঞান ১ম অধ্যায়: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s2.svg',
    gallery: [
      {
        id: 'bio1_s2_img1',
        titleBn: 'ভৌত জীববিজ্ঞান শাখা',
        titleEn: 'Basic / Pure Biological Disciplines',
        captionBn: 'অঙ্গসংস্থান (Morphology), শারীরবিদ্যা (Physiology), কোষবিদ্যা (Cytology), বংশগতিবিদ্যা (Genetics)।',
        captionEn: 'Core theoretical disciplines focusing on structure and fundamental laws.',
        type: 'diagram',
        customDiagramType: 'bioCh1_m2'
      },
      {
        id: 'bio1_s2_img2',
        titleBn: 'ফলিত জীববিজ্ঞান শাখা',
        titleEn: 'Applied Biological Disciplines',
        captionBn: 'কৃষি, চিকিৎসা, বনবিদ্যা, মৎস্যবিজ্ঞান, অণুজীববিজ্ঞান, জৈবপ্রযুক্তি ও পরিবেশবিজ্ঞান।',
        captionEn: 'Human welfare and economic applications of biological knowledge.',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ভৌত শাখা: অঙ্গসংস্থান ও শারীরবিদ্যা',
        labelEn: 'Morphology & Physiology',
        detailBn: 'জীবের বাহ্যিক গঠন (Morphology), অভ্যন্তরীণ অঙ্গসংস্থান ও জৈবরাসায়নিক শারীরবৃত্তীয় প্রক্রিয়া (Physiology)।',
        detailEn: 'External/internal anatomy and metabolic physiological functions.',
        symbol: 'Phys',
        partId: 'morphology',
        badgeType: 'biology',
        position: { x: 30, y: 40 }
      },
      {
        labelBn: 'ফলিত শাখা: অণুজীববিজ্ঞান ও জিনপ্রযুক্তি',
        labelEn: 'Microbiology & Biotechnology',
        detailBn: 'মানবকল্যাণে অনুজীবের ব্যবহার, ভ্যাকসিন প্রস্তুতি এবং রিকম্বিনেন্ট ডিএনএ প্রযুক্তি।',
        detailEn: 'Economic and therapeutic applications including recombinant insulin and vaccines.',
        symbol: 'Biotech',
        partId: 'biotechnology',
        badgeType: 'biology',
        position: { x: 70, y: 40 }
      },
      {
        labelBn: 'আলোক অণুবীক্ষণ যন্ত্র',
        labelEn: 'Compound Microscope',
        detailBn: 'কোষ ও টিস্যুর সূক্ষ্ম আণুবীক্ষণিক গঠন স্পষ্ট অবলোকনের জন্য ব্যবহৃত প্রধান বৈজ্ঞানিক যন্ত্র।',
        detailEn: 'Optical magnification instrument essential for cytology and histology.',
        symbol: 'Scope',
        partId: 'microscope',
        badgeType: 'biology',
        position: { x: 50, y: 70 }
      }
    ],
    keyPoints: [
      {
        heading: 'ভৌত জীববিজ্ঞান (Basic / Theoretical Biology)',
        description: 'যে শাখায় তত্ত্বীয় বিষয়াদি নিয়ে আলোকপাত করা হয়:\n• অঙ্গসংস্থানবিদ্যা (Morphology): জীবের বাহ্যিক ও অভ্যন্তরীণ গঠন।\n• শারীরবিদ্যা (Physiology): জৈবরাসায়নিক ও শারীরবৃত্তীয় প্রক্রিয়া (শ্বসন, প্রস্বেদন)।\n• হিস্টোলজি (Histology): টিস্যুর সূক্ষ্ম আণুবীক্ষণিক গঠন।\n• ভ্রূণবিদ্যা (Embryology): ভ্রূণের সৃষ্টি ও পরিস্ফুটন।\n• কোষবিদ্যা (Cytology): কোষের গঠন ও বিভাজন।\n• বংশগতিবিদ্যা (Genetics): জিনের গঠন ও বংশানুসরণ।\n• বাস্তুবিদ্যা (Ecology): জীবের সাথে পরিবেশের সম্পর্ক।',
        highlight: 'অঙ্গসংস্থান, শারীরবিদ্যা, সাইটোলজি, হিস্টোলজি, জেনেটিক্স, ইকোলজি।'
      },
      {
        heading: 'ফলিত জীববিজ্ঞান (Applied Biology)',
        description: 'জীবসম্পর্কিত প্রায়োগিক ও অর্থনৈতিক দিকসমূহ:\n• প্রত্নতত্ত্ববিদ্যা (Palaeontology): প্রাগৈতিহাসিক জীবের জীবাশ্ম আলোচনা।\n• কীটতত্ত্ব (Entomology): কীটপতঙ্গের উপকারিতা, অপকারিতা ও দমন।\n• অণুজীববিজ্ঞান (Microbiology): ভাইরাস, ব্যাকটেরিয়া, ছত্রাকের ব্যবহার।\n• মৎস্যবিজ্ঞান (Fisheries): মাছ চাষ ও প্রক্রিয়াজাতকরণ।\n• জিনপ্রযুক্তি ও বায়োটেকনোলজি (Biotechnology): জীবদেহে ডিএনএ পরিবর্তন করে মানবকল্যাণ।',
        highlight: 'এন্টোমোলজি, প্যালেন্টোলজি, মাইক্রোবায়োলজি, জেনেটিক ইঞ্জিনিয়ারিং।'
      }
    ],
    realLifeRelevance: [
      'কীটতত্ত্ব (Entomology) জেনে ফসলের ক্ষতিকর পোকা দমনে বায়োলজিক্যাল কন্ট্রোল পদ্ধতি প্রয়োগ।',
      'অণুজীববিজ্ঞান ও বায়োটেকনোলজি দিয়ে ইনসুলিন হরমোন ও ভ্যাকসিন প্রস্তুতকরণ।'
    ],
    didYouKnow: 'টিস্যু কালচার ও রিকম্বিনেন্ট ডিএনএ প্রযুক্তি আধুনিক ফলিত জীববিজ্ঞানের সবচেয়ে বৈপ্লবিক শাখা।'
  },

  // Slide 3: জীবের শ্রেণিবিন্যাস ও এর প্রয়োজনীয়তা
  {
    id: 3,
    subject: 'biology',
    chapter: 1,
    title: 'জীবের শ্রেণিবিন্যাস ও এর লক্ষ্য-উদ্দেশ্য',
    subtitle: 'Biological Classification (Taxonomy) & Objectives',
    category: 'জীববিজ্ঞান ১ম অধ্যায়: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s3.svg',
    gallery: [
      {
        id: 'bio1_s3_img1',
        titleBn: 'হুইটেকারের পঞ্চরাজ্য শ্রেণিবিন্যাস',
        titleEn: 'Whittaker Five Kingdoms Tree',
        captionBn: 'পারস্পরিক সাদৃশ্য ও বৈসাদৃশ্যের ভিত্তিতে জীবসমূহকে ৫টি রাজ্যে বিন্যস্ত করার প্রণালী।',
        captionEn: 'Arranging organisms into 5 kingdoms based on similarities and evolution.',
        type: 'diagram',
        customDiagramType: 'bioCh1_m3'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'সুপার কিংডম ১: প্রোক্যারিওটা (মনেরা)',
        labelEn: 'Super Kingdom 1: Prokaryota',
        detailBn: 'সুগঠিত নিউক্লিয়াসবিহীন আদি কোষীয় জীব; যেমন ব্যাকটেরিয়া।',
        detailEn: 'Unicellular prokaryotes lacking true nucleus.',
        symbol: 'SK1',
        partId: 'monera',
        badgeType: 'biology',
        position: { x: 25, y: 50 }
      },
      {
        labelBn: 'সুপার কিংডম ২: ইউক্যারিওটা (প্রকৃতকোষী)',
        labelEn: 'Super Kingdom 2: Eukaryota',
        detailBn: 'সুগঠিত নিউক্লিয়াসযুক্ত প্রকৃত কোষীয় ৪টি রাজ্য: প্রোটিস্টা, ফানজাই, প্লান্টি, অ্যানিম্যালিয়া।',
        detailEn: 'Eukaryotic organisms with membrane-bound organelles.',
        symbol: 'SK2',
        partId: 'eukaryota',
        badgeType: 'biology',
        position: { x: 75, y: 50 }
      },
      {
        labelBn: 'রাজ্য মনেরা (ব্যাকটেরিয়া)',
        labelEn: 'Kingdom Monera',
        detailBn: 'আদিকোষী, পেপটিডোগ্লাইকান প্রাচীর, 70S রাইবোসোম ও নগ্ন ডিএনএ।',
        detailEn: 'Prokaryotes with peptidoglycan walls and binary fission.',
        symbol: 'Mon',
        partId: 'monera',
        badgeType: 'biology',
        position: { x: 20, y: 75 }
      },
      {
        labelBn: 'রাজ্য প্রোটিস্টা (অ্যামিবা)',
        labelEn: 'Kingdom Protista',
        detailBn: 'এককোষী প্রকৃতকোষী; উদাহরণ: অ্যামিবা, প্যারামেসিয়াম, ডায়াটম।',
        detailEn: 'Unicellular eukaryotes with pseudopodia, cilia or flagella.',
        symbol: 'Prot',
        partId: 'protista',
        badgeType: 'biology',
        position: { x: 50, y: 75 }
      },
      {
        labelBn: 'রাজ্য ফানজাই (ছত্রাক)',
        labelEn: 'Kingdom Fungi',
        detailBn: 'কাইটিন প্রাচীরযুক্ত মৃতজীবী বা পরজীবী ছত্রাক; উদাহরণ: মাশরুম, ইস্ট, পেনিসিলিয়াম।',
        detailEn: 'Chitin-walled heterotrophs with mycelial hyphae.',
        symbol: 'Fung',
        partId: 'fungi',
        badgeType: 'biology',
        position: { x: 80, y: 75 }
      }
    ],
    keyPoints: [
      {
        heading: 'শ্রেণিবিন্যাস (Classification) কী?',
        description: 'বিশাল জীবজগৎকে সহজে, অল্প সময়ে এবং সুশৃঙ্খলভাবে জানার জন্য পারস্পরিক সাদৃশ্য ও বৈসাদৃশ্যের ভিত্তিতে দল ও উপদলে সজ্জিত করার বৈজ্ঞানিক পদ্ধতিকে শ্রেণিবিন্যাস বলে। শ্রেণিবিন্যাসের নিয়মাবলী আলোচনার শাখাকে শ্রেণিবিন্যাসবিদ্যা (Taxonomy) বলে।',
        highlight: 'সহজে ও সুশৃঙ্খলভাবে জীবজগৎকে জানার উপায়।'
      },
      {
        heading: 'শ্রেণিবিন্যাসের প্রধান উদ্দেশ্যসমূহ',
        description: '১. প্রতিটি জীবকে নিখুঁতভাবে শনাক্ত (Identify) করা।\n২. অল্প সময়ে সমগ্র জীবজগৎ সম্পর্কে সঠিক ধারণা লাভ করা।\n৩. নতুন আবিষ্কৃত জীবকে সহজে সঠিক দলভুক্ত করা।\n৪. জীবের মধ্যকার বিবর্তনীয় ও পারস্পরিক সম্পর্ক অনুধাবন করা।\n৫. অর্থকরী মূল্যবান উদ্ভিদ ও প্রাণীর সংরক্ষণ এবং মানবকল্যাণে সঠিক ব্যবহার নিশ্চিত করা।',
        highlight: 'শনাক্তকরণ, নামতাত্ত্বিক সুশৃঙ্খলা এবং বৈচিত্র্য অনুধাবন।'
      },
      {
        heading: 'শ্রেণিবিন্যাসবিদ্যার জনক',
        description: 'সুইডিশ বিজ্ঞানী ক্যারোলাস লিনিয়াসকে (Carolus Linnaeus, 1707–1778) আধুনিক শ্রেণিবিন্যাসবিদ্যা ও দ্বিপদ নামকরণের জনক বলা হয়।',
        highlight: 'ক্যারোলাস লিনিয়াস (Carolus Linnaeus)।'
      }
    ],
    realLifeRelevance: [
      'নতুন রোগ সৃষ্টিকারী জীবাণু শনাক্ত করে তার গোত্র নির্ণয় ও প্রতিষেধক উদ্ভাবন।',
      'বিলুপ্তপ্রায় বন্যপ্রাণী ও ভেষজ উদ্ভিদের শ্রেণিবিন্যাসিক সংরক্ষণ পরিকল্পনা।'
    ],
    didYouKnow: 'এখন পর্যন্ত আনুমানিক প্রায় ৪ লক্ষ উদ্ভিদ প্রজাতি এবং প্রায় ১৩ লক্ষ প্রাণী প্রজাতি শনাক্ত ও নামাঙ্কিত হয়েছে, যা মোট সম্ভাব্য প্রজাতির ক্ষুদ্র একটি অংশ মাত্র!'
  },

  // Slide 4: শ্রেণিবিন্যাসের স্তর বা ধাপ (Taxonomic Hierarchy)
  {
    id: 4,
    subject: 'biology',
    chapter: 1,
    title: 'শ্রেণিবিন্যাসের ধাপ বা ট্যাক্সনমিক হায়ারার্কি',
    subtitle: 'Hierarchical Ranks of Classification: Kingdom to Species',
    category: 'জীববিজ্ঞান ১ম অধ্যায়: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s4.svg',
    gallery: [
      {
        id: 'bio1_s4_img1',
        titleBn: '৭টি মৌলিক ট্যাক্সনমিক স্তর পিরামিড',
        titleEn: 'Seven Obligate Taxonomic Categories',
        captionBn: 'রাজ্য (Kingdom) -> পর্ব (Phylum) -> শ্রেণি (Class) -> বর্গ (Order) -> গোত্র (Family) -> গণ (Genus) -> প্রজাতি (Species)।',
        captionEn: 'Standard descending hierarchy introduced in biological taxonomy.',
        type: 'diagram',
        customDiagramType: 'bioCh1_m4'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: '১. রাজ্য (Kingdom: Animalia)',
        labelEn: 'Kingdom',
        detailBn: 'সর্বোচ্চ স্তর; সর্বাধিক বৈচিত্র্যপূর্ণ জীব দলভুক্ত থাকে। মানুষের রাজ্য Animalia।',
        detailEn: 'Broadest primary category encompassing related phyla.',
        symbol: 'K',
        partId: 'kingdom',
        badgeType: 'biology',
        position: { x: 50, y: 88 }
      },
      {
        labelBn: '২. পর্ব (Phylum: Chordata)',
        labelEn: 'Phylum',
        detailBn: 'নটোকর্ড ও গলবিলীয় ফুলকারন্ধ্রযুক্ত মেরুদণ্ডী প্রাণীদের পর্ব Chordata।',
        detailEn: 'Major animal group sharing a nerve cord and notochord.',
        symbol: 'P',
        partId: 'phylum',
        badgeType: 'biology',
        position: { x: 50, y: 76 }
      },
      {
        labelBn: '৩. শ্রেণি (Class: Mammalia)',
        labelEn: 'Class',
        detailBn: 'স্তনপায়ী, লোমযুক্ত ত্বক ও উষ্ণরক্তের প্রাণী। মানুষের শ্রেণি Mammalia।',
        detailEn: 'Warm-blooded vertebrates with mammary glands.',
        symbol: 'C',
        partId: 'class',
        badgeType: 'biology',
        position: { x: 50, y: 64 }
      },
      {
        labelBn: '৪. বর্গ (Order: Primates)',
        labelEn: 'Order',
        detailBn: 'আঁকড়ে ধরার হাত, ত্রিমাত্রিক দৃষ্টি ও উন্নত মস্তিষ্ক। মানুষের বর্গ Primates।',
        detailEn: 'Advanced mammalian order including humans and apes.',
        symbol: 'O',
        partId: 'order',
        badgeType: 'biology',
        position: { x: 50, y: 52 }
      },
      {
        labelBn: '৫. গোত্র (Family: Hominidae)',
        labelEn: 'Family',
        detailBn: 'নরবানর ও মানুষের পূর্বপুরুষীয় ধারা। মানুষের গোত্র Hominidae।',
        detailEn: 'Family of great apes and human lineage.',
        symbol: 'F',
        partId: 'family',
        badgeType: 'biology',
        position: { x: 50, y: 40 }
      },
      {
        labelBn: '৬. গণ (Genus: Homo)',
        labelEn: 'Genus',
        detailBn: 'দ্বিপদ নামকরণের ১ম পদ (ক্যাপিটাল ইনিশিয়াল)। মানুষের গণ Homo।',
        detailEn: 'Bipedal hominin toolmaker genus.',
        symbol: 'G',
        partId: 'genus',
        badgeType: 'biology',
        position: { x: 50, y: 28 }
      },
      {
        labelBn: '৭. প্রজাতি (Species: Homo sapiens)',
        labelEn: 'Species',
        detailBn: 'শ্রেণিবিন্যাসের ক্ষুদ্রতম ও মৌলিক একক। মানুষ Homo sapiens।',
        detailEn: 'Fundamental interbreeding reproductive biological unit.',
        symbol: 'Sp',
        partId: 'species',
        badgeType: 'biology',
        position: { x: 50, y: 15 }
      }
    ],
    keyPoints: [
      {
        heading: 'ট্যাক্সনমিক ক্যাটাগরি (৭টি আবশ্যক ধাপ)',
        description: 'ক্যারোলাস লিনিয়াস প্রস্তাবিত শ্রেণিবিন্যাসের ৭টি মূল ধাপ:\n১. রাজ্য (Kingdom): সর্বোচ্চ স্তর\n২. পর্ব / বিভাগ (Phylum / Division - উদ্ভিদের ক্ষেত্রে বিভাগ)\n৩. শ্রেণি (Class)\n৪. বর্গ (Order)\n৫. গোত্র (Family)\n৬. গণ (Genus)\n৭. প্রজাতি (Species): শ্রেণিবিন্যাসের মূল ভিত্তি বা ক্ষুদ্রতম একক।',
        highlight: 'Kingdom > Phylum > Class > Order > Family > Genus > Species'
      },
      {
        heading: 'মানুষের শ্রেণিবিন্যাসের আদর্শ উদাহরণ (Homo sapiens)',
        description: '• Kingdom: Animalia (বহুকোষী, সুকেন্দ্রিক, পরভোজী)\n• Phylum: Chordata (নটোকর্ড ও স্নায়ুরজ্জু বিদ্যমান)\n• Class: Mammalia (স্তন্যপায়ী, লোমযুক্ত ত্বক)\n• Order: Primates (আঁকড়ে ধরার হাত, উন্নত মস্তিষ্ক)\n• Family: Hominidae (দ্বিপদী চলন, চ্যাপ্টা মুখমণ্ডল)\n• Genus: Homo (খাড়া অবস্থান ও জটিল সরঞ্জাম ব্যবহারের ক্ষমতা)\n• Species: Homo sapiens (উন্নত চিন্তাশীল আধুনিক মানুষ)।',
        highlight: 'মানুষের পূর্ণাঙ্গ ট্যাক্সনমিক অবস্থান।'
      },
      {
        heading: 'ট্যাক্সন (Taxon)',
        description: 'শ্রেণিবিন্যাসের অন্তর্ভুক্ত প্রতিটি ধাপ বা একককে একবচনে "ট্যাক্সন" (Taxon) এবং বহুবচনে "ট্যাক্সা" (Taxa) বলা হয়।',
        highlight: 'ধাপসমূহের পারিভাষিক নাম।'
      }
    ],
    realLifeRelevance: [
      'নতুন প্রজাতি আবিষ্কারের সাথে সাথে জেনেটিক বৈশিষ্ট্য মিলিয়ে সঠিক ক্যাটাগরিতে স্থান নির্ধারণ।'
    ],
    didYouKnow: 'ইংরেজিতে ধাপগুলো সহজে মনে রাখার বহুল প্রচলিত বাক্য: "King Philip Came Over For Good Soup" (K, P, C, O, F, G, S)!'
  },

  // Slide 5: পঞ্চরাজ্য ব্যবস্থা ও মারগুলিসের শ্রেণিবিন্যাস
  {
    id: 5,
    subject: 'biology',
    chapter: 1,
    title: 'হুইটেকার ও মারগুলিসের পঞ্চরাজ্য ব্যবস্থা (Five Kingdoms)',
    subtitle: 'R.H. Whittaker (1969) & Lynn Margulis (1974) Classification',
    category: 'জীববিজ্ঞান ১ম অধ্যায়: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s5.svg',
    gallery: [
      {
        id: 'bio1_s5_img1',
        titleBn: 'মনেরা রাজ্য: ব্যাকটেরিয়ার পূর্ণাঙ্গ অঙ্গসংস্থান',
        titleEn: 'Kingdom Monera: Bacterial Ultrastructure',
        captionBn: 'পেপটিডোগ্লাইকান কোষপ্রাচীর, ক্যাপসুল, প্লাজমিড, নিউক্লিঅয়েড ডিএনএ ও ফ্ল্যাজেলা।',
        captionEn: 'Prokaryotic bacterium with peptidoglycan wall, nucleoid DNA and flagella.',
        type: 'diagram',
        customDiagramType: 'bioCh1_m5'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ফ্ল্যাজেলা (চলন অঙ্গাণু)',
        labelEn: 'Flagellum',
        detailBn: 'ফ্ল্যাজেলিন প্রোটিন নির্মিত চাবুকের মতো চলন অঙ্গাণু।',
        detailEn: 'Helical rotary organelle providing rapid swimming locomotion.',
        symbol: 'Flag',
        partId: 'flagellum',
        badgeType: 'biology',
        position: { x: 15, y: 50 }
      },
      {
        labelBn: 'ক্যাপসুল ও কোষপ্রাচীর',
        labelEn: 'Capsule & Cell Wall',
        detailBn: 'পেপটিডোগ্লাইকান নির্মিত সুদৃঢ় প্রাচীর ও সুরক্ষাকারী ক্যাপসুল।',
        detailEn: 'Peptidoglycan protective barrier resisting osmotic pressure.',
        symbol: 'Wall',
        partId: 'capsule_cellwall',
        badgeType: 'biology',
        position: { x: 50, y: 20 }
      },
      {
        labelBn: 'নিউক্লিঅয়েড ডিএনএ',
        labelEn: 'Nucleoid Circular DNA',
        detailBn: 'আদিকোষের নগ্ন বৃত্তাকার দ্বিসূত্রক ক্রোমোজোমীয় ডিএনএ।',
        detailEn: 'Supercoiled naked circular chromosome governing bacterial heredity.',
        symbol: 'DNA',
        partId: 'nucleoid',
        badgeType: 'biology',
        position: { x: 52, y: 52 }
      },
      {
        labelBn: 'প্লাজমিড (অতিরিক্ত ডিএনএ)',
        labelEn: 'Circular Plasmid Ring',
        detailBn: 'অ্যান্টিবায়োটিক প্রতিরোধী স্ব-প্রজননশীল ক্ষুদ্র বৃত্তাকার ডিএনএ।',
        detailEn: 'Extrachromosomal DNA ring conferring antibiotic resistance.',
        symbol: 'pDNA',
        partId: 'plasmid',
        badgeType: 'biology',
        position: { x: 38, y: 40 }
      },
      {
        labelBn: '৭০এস রাইবোসোম',
        labelEn: '70S Ribosomes',
        detailBn: 'প্রোটিন সংশ্লেষণের ক্ষুদ্র ৫০এস ও ৩০এস সাইটোপ্লাজমীয় দানা।',
        detailEn: 'Prokaryotic protein synthesis factories.',
        symbol: '70S',
        partId: 'ribosome_70s',
        badgeType: 'biology',
        position: { x: 70, y: 60 }
      }
    ],
    keyPoints: [
      {
        heading: 'পঞ্চরাজ্য ব্যবস্থার পটভূমি',
        description: '১৯৬৯ সালে আর. এইচ. হুইটেকার (R.H. Whittaker) সমগ্র জীবজগৎকে পাঁচটি রাজ্যে বিভক্ত করার প্রস্তাব করেন। পরবর্তীতে ১৯৭৪ সালে বিজ্ঞানী লিন মারগুলিস (Lynn Margulis) এটিকে আরও পরিমার্জিত করে জীবজগৎকে দুটি সুপার কিংডমে বিভক্ত করে তার অধীনে ৫টি রাজ্য বিন্যস্ত করেন।',
        highlight: 'হুইটেকার (১৯৬৯) এবং মারগুলিস (১৯৭৪)।'
      },
      {
        heading: 'সুপার কিংডম ১: প্রোক্যারিওটা (Prokaryota)',
        description: 'এরা এককোষী, নিউক্লিয়াস সুগঠিত নয় (আদিকোষী), মেমব্রেনবেষ্টিত অঙ্গাণু নেই, ক্রোমাটিনে শুধু মুক্ত বৃত্তাকার ডিএনএ থাকে।\n• রাজ্য ১: মনেরা (Monera) - যেমন: ব্যাকটেরিয়া (Bacteria), নীলাভ-সবুজ শৈবাল (Nostoc)।',
        highlight: 'রাজ্য ১: মনেরা (Monera)।'
      },
      {
        heading: 'সুপার কিংডম ২: ইউক্যারিওটা (Eukaryota)',
        description: 'সুগঠিত নিউক্লিয়াস ও আবরণীবেষ্টিত অঙ্গাণুযুক্ত প্রকৃত কোষীয় জীব।\n• রাজ্য ২: প্রোটিস্টা (Protista)\n• রাজ্য ৩: ফানজাই (Fungi)\n• রাজ্য ৪: প্লান্টি (Plantae)\n• রাজ্য ৫: অ্যানিম্যালিয়া (Animalia)।',
        highlight: '৪টি সুনির্দিষ্ট রাজ্য।'
      }
    ],
    realLifeRelevance: [
      'রোগ সৃষ্টিকারী ব্যাকটেরিয়া (মনেরা) এবং অ্যান্টিবায়োটিক সৃষ্টিকারী ছত্রাক (ফানজাই) এর স্বতন্ত্র পার্থক্য জানা।'
    ],
    didYouKnow: 'লুই পাস্তুর ও রবার্ট কচ ব্যাকটেরিয়া নিয়ে গবেষণার ভিত্তি স্থাপন করলেও মারগুলিসের কোষীয় বিবর্তন তত্ত্ব (এন্ডোসিম্বায়োসিস) আধুনিক জীববিজ্ঞানের ভিত্তি।'
  },

  // Slide 6: মনেরা ও প্রোটিস্টা রাজ্যের বৈশিষ্ট্য
  {
    id: 6,
    subject: 'biology',
    chapter: 1,
    title: 'রাজ্য মনেরা ও প্রোটিস্টার বৈশিষ্ট্য',
    subtitle: 'Characteristics of Kingdom Monera & Kingdom Protista',
    category: 'জীববিজ্ঞান ১ম অধ্যায়: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s6.svg',
    gallery: [
      {
        id: 'bio1_s6_img1',
        titleBn: 'প্রোটিস্টা: অ্যামিবার সূক্ষ্ম অঙ্গসংস্থান',
        titleEn: 'Kingdom Protista: Amoeba Proteus Anatomy',
        captionBn: 'এককোষী প্রকৃতকোষী, ক্ষণপদ (Pseudopodia), প্লাজমালেমা ও সংকোচনশীল গহ্বর।',
        captionEn: 'Eukaryotic unicellular organism with pseudopodia and contractile vacuoles.',
        type: 'diagram',
        customDiagramType: 'bioCh1_m6'
      },
      {
        id: 'bio1_s6_img2',
        titleBn: 'প্রোটিস্টা: অ্যামিবা ও প্যারামেসিয়াম',
        titleEn: 'Kingdom Protista: Amoeba & Euglena',
        captionBn: 'এককোষী বা কলোনিয়াল প্রকৃতকোষী, সুগঠিত নিউক্লিয়াস ও 80S রাইবোসোমযুক্ত।',
        captionEn: 'Eukaryotic unicellular organisms with true nucleus and organelle systems.',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ক্ষণপদ বা সিউডোপোডিয়া',
        labelEn: 'Pseudopodia (Lobopodia)',
        detailBn: 'অ্যামিবার অস্থায়ী চলন ও খাদ্য গ্রহণকারী প্রোটোপ্লাজমীয় অভিক্ষেপ।',
        detailEn: 'Cytoplasmic extensions for amoeboid crawling and phagocytosis.',
        symbol: 'Pseudo',
        partId: 'pseudopodia',
        badgeType: 'biology',
        position: { x: 22, y: 35 }
      },
      {
        labelBn: 'প্লাজমালেমা সীমানা পর্দা',
        labelEn: 'Plasmalemma Boundary',
        detailBn: 'স্থিতিস্থাপক নমনীয় ঝিল্লি যা অ্যামিবার আকার ও উপাদান ধরে রাখে।',
        detailEn: 'Elastic external plasma membrane bounding the amoeba.',
        symbol: 'Memb',
        partId: 'plasmalemma',
        badgeType: 'biology',
        position: { x: 75, y: 30 }
      },
      {
        labelBn: 'ইউক্যারিওটিক নিউক্লিয়াস',
        labelEn: 'True Eukaryotic Nucleus',
        detailBn: 'সুগঠিত দ্বি-স্তরী নিউক্লিয়ার ঝিল্লিযুক্ত প্রাণকেন্দ্র।',
        detailEn: 'Double-membrane organelle controlling eukaryotic cell functions.',
        symbol: 'Nuc',
        partId: 'nucleus',
        badgeType: 'biology',
        position: { x: 42, y: 45 }
      },
      {
        labelBn: 'সংকোচনশীল গহ্বর (অসমোরেগুলেশন)',
        labelEn: 'Contractile Vacuole',
        detailBn: 'অতিরিক্ত পানি দেহে জমা করে তা বাইরে বের করে পানি-ভারসাম্য রক্ষা করে।',
        detailEn: 'Pulsatile organelle expelling surplus cellular water.',
        symbol: 'CVac',
        partId: 'contractile_vacuole',
        badgeType: 'biology',
        position: { x: 62, y: 60 }
      },
      {
        labelBn: 'খাদ্য গহ্বর',
        labelEn: 'Food Vacuole (Phagosome)',
        detailBn: 'গৃহীত খাদ্যকণা এনজাইম দ্বারা পরিপাক করে পুষ্টি আহরণ।',
        detailEn: 'Digestive vacuole breaking down engulfed food particles.',
        symbol: 'FVac',
        partId: 'food_vacuole',
        badgeType: 'biology',
        position: { x: 46, y: 70 }
      }
    ],
    keyPoints: [
      {
        heading: 'রাজ্য ১: মনেরা (Kingdom Monera)',
        description: '১. এরা এককোষী, ফিলামেন্টাস বা কলোনিয়াল আদিকোষী জীব।\n২. কোষে কোনো নিউক্লিয়ার মেমব্রেন, নিউক্লিওলাস, মাইটোকন্ড্রিয়া বা প্লাস্টিড থাকে না (কেবল রাইবোসোম থাকে)।\n৩. কোষপ্রাচীর প্রধানত পেপটিডোগ্লাইকান ও পলিস্যাকারাইড নির্মিত।\n৪. দ্বি-বিভাজন (Binary Fission) পদ্ধতিতে প্রধানত অযৌন প্রজনন ঘটে।\nউদাহরণ: নীলাভ সবুজ শৈবাল (Nostoc), ব্যাকটেরিয়া (Bacillus, Escherichia coli)।',
        highlight: 'সুগঠিত নিউক্লিয়াসবিহীন, পেপটিডোগ্লাইকান প্রাচীর, দ্বি-বিভাজন।'
      },
      {
        heading: 'রাজ্য ২: প্রোটিস্টা (Kingdom Protista)',
        description: '১. এরা এককোষী বা বহুকোষী কিন্তু সুনির্দিষ্ট কলা বা টিস্যুতন্ত্রবিহীন প্রকৃতকোষী।\n২. নিউক্লিয়াস সুগঠিত (নিউক্লিয়ার মেমব্রেন ও ক্রোমাটিন জালিকাযুক্ত)।\n৩. কোষে মাইটোকন্ড্রিয়া, গলগি বস্তু ইত্যাদি ঝিল্লিযুক্ত অঙ্গাণু থাকে।\n৪. খাদ্যগ্রহণ শোষণ, গ্রহণ (Phagocytosis) বা সালোকসংশ্লেষণমূলক।\n৫. মাইটোসিস বিভাজনে অযৌন ও কনজুগেশনের মাধ্যমে যৌন প্রজনন ঘটে।\nউদাহরণ: অ্যামিবা (Amoeba), প্যারামেসিয়াম (Paramecium), ডায়াটম (Diatom)।',
        highlight: 'এককোষী প্রকৃতকোষী, সুগঠিত নিউক্লিয়াস, কনজুগেশন।'
      }
    ],
    realLifeRelevance: [
      'ব্যাকটেরিয়ার নাইট্রোজেন সংবন্ধন ক্ষমতা মাটির উর্বরতা বৃদ্ধি করে।',
      'প্রোটিস্টার অন্তর্ভুক্ত এন্টামিবা (Entamoeba histolytica) মানুষের আমাশয় রোগ সৃষ্টি করে।'
    ],
    didYouKnow: 'অ্যামিবা ক্ষণপদ বা সিউডোপোডিয়া (Pseudopodia) দ্বারা চলাচল ও খাদ্য গ্রহণ করে।'
  },

  // Slide 7: ফানজাই, প্লান্টি ও অ্যানিম্যালিয়া রাজ্যের বৈশিষ্ট্য
  {
    id: 7,
    subject: 'biology',
    chapter: 1,
    title: 'রাজ্য ফানজাই, প্লান্টি ও অ্যানিম্যালিয়া',
    subtitle: 'Characteristics of Kingdom Fungi, Plantae & Animalia',
    category: 'জীববিজ্ঞান ১ম অধ্যায়: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s7.svg',
    gallery: [
      {
        id: 'bio1_s7_img1',
        titleBn: 'ফানজাই (ছত্রাক)',
        titleEn: 'Kingdom Fungi: Mushrooms & Yeast',
        captionBn: 'ক্লোরোপ্লাস্টবিহীন পরভোজী ও মৃতজীবী, কোষপ্রাচীর কাইটিন (Chitin) নির্মিত, সঞ্চিত খাদ্য গ্লাইকোজেন।',
        captionEn: 'Heterotrophic organisms with chitinous cell walls, storing glycogen.',
        type: 'photo'
      },
      {
        id: 'bio1_s7_img2',
        titleBn: 'প্লান্টি ও অ্যানিম্যালিয়া',
        titleEn: 'Kingdom Plantae & Animalia',
        captionBn: 'প্লান্টি স্বভোজী ও ক্লোরোপ্লাস্টযুক্ত (সেলুলোজ প্রাচীর)। অ্যানিম্যালিয়া বহুকোষী পরভোজী (কোষপ্রাচীর ও প্লাস্টিডবিহীন)।',
        captionEn: 'Autotrophic plants versus heterotrophic multicellular animals.',
        type: 'diagram',
        customDiagramType: 'bioCh1_m7'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'পাইলিয়াস ও গিল (ফানজাই)',
        labelEn: 'Pileus & Gills (Fungi)',
        detailBn: 'কাইটিন প্রাচীরযুক্ত মাশরুমের ছাতার মতো অংশ (পাইলিয়াস) ও স্পোর উৎপাদনকারী গিল।',
        detailEn: 'Chitin-walled umbrella pileus with basidiospore bearing gills.',
        symbol: 'Pil',
        partId: 'pileus',
        badgeType: 'biology',
        position: { x: 20, y: 35 }
      },
      {
        labelBn: 'মাইসেলিয়াম সূত্রজালিকা',
        labelEn: 'Mycelial Hyphae Network',
        detailBn: 'ছত্রাকের সুতাকার দেহ যা খাদ্য শোষণ ও পুষ্টি আহরণ করে।',
        detailEn: 'Vegetative filament network absorbing organic nutrients.',
        symbol: 'Myc',
        partId: 'mycelium',
        badgeType: 'biology',
        position: { x: 20, y: 75 }
      },
      {
        labelBn: 'ক্লোরোপ্লাস্ট ও সেলুলোজ প্রাচীর (প্লান্টি)',
        labelEn: 'Chloroplast & Plant Cell Wall',
        detailBn: 'সালোকসংশ্লেষণকারী স্বভোজী অঙ্গাণু ও সেলুলোজ নির্মিত সুদৃঢ় বহিরাবরণ।',
        detailEn: 'Photosynthetic organelle and rigid cellulose protective wall.',
        symbol: 'Chl',
        partId: 'chloroplast',
        badgeType: 'biology',
        position: { x: 50, y: 50 }
      },
      {
        labelBn: 'কোষঝিল্লি ও সেন্ট্রোসোম (অ্যানিম্যালিয়া)',
        labelEn: 'Cell Membrane & Centrosome',
        detailBn: 'কোষপ্রাচীরবিহীন নমনীয় প্লাজমামেমব্রেন ও কোষ বিভাজনে সাহায্যকারী সেন্ট্রিওল।',
        detailEn: 'Flexible animal plasma membrane and mitotic spindle centrosome.',
        symbol: 'Cent',
        partId: 'centrosome',
        badgeType: 'biology',
        position: { x: 80, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'রাজ্য ৩: ফানজাই (Kingdom Fungi)',
        description: '• এরা এককোষী (ইস্ট) বা বহুকোষী সুতাকার মাইসেলিয়ামযুক্ত প্রকৃতকোষী।\n• ক্লোরোপ্লাস্ট অনুপস্থিত, তাই নিজের খাদ্য নিজে তৈরি করতে পারে না (মৃতজীবী বা পরজীবী)।\n• কোষপ্রাচীর কাইটিন (Chitin) দিয়ে গঠিত।\n• সঞ্চিত খাদ্য গ্লাইকোজেন। হ্যাপ্লয়েড স্পোর দিয়ে বংশবৃদ্ধি করে।\nউদাহরণ: ইস্ট (Saccharomyces), পেনিসিলিয়াম (Penicillium), মাশরুম (Agaricus)।',
        highlight: 'কাইটিন নির্মিত প্রাচীর, সঞ্চিত খাদ্য গ্লাইকোজেন, স্পোর তৈরি।'
      },
      {
        heading: 'রাজ্য ৪: প্লান্টি (Kingdom Plantae)',
        description: '• সুকেন্দ্রিক, উন্নত টিস্যুতন্ত্রযুক্ত বহুকোষী স্বভোজী জীব।\n• কোষে প্লাস্টিড ও ক্লোরোফিল থাকায় সালোকসংশ্লেষণ প্রক্রিয়ায় খাদ্য তৈরি করে।\n• কোষপ্রাচীর প্রধানত সেলুলোজ নির্মিত। সঞ্চিত খাদ্য শ্বেতসার (Starch)।\n• ভ্রূণ সৃষ্টি হয় এবং অ্যানাইসোগ্যামাস যৌন জনন ঘটে।\nউদাহরণ: স্পাইরোগাইরা (Spirogyra), ফার্ন, আমগাছ (Mangifera indica), কাঁঠাল।',
        highlight: 'সেলুলোজ নির্মিত প্রাচীর, প্লাস্টিড, স্বভোজী উৎপাদক।'
      },
      {
        heading: 'রাজ্য ৫: অ্যানিম্যালিয়া (Kingdom Animalia)',
        description: '• এরা বহুকোষী, ইউক্যারিওটিক পরভোজী জীব।\n• কোষে কোনো জড় কোষপ্রাচীর, প্লাস্টিড বা বড় কোষগহ্বর থাকে না।\n• খাদ্য গলাধঃকরণ করে (হলোজোয়িক পুষ্টি) এবং সঞ্চিত খাদ্য গ্লাইকোজেন।\n• সুনির্দিষ্ট জটিল টিস্যু, অঙ্গ ও অঙ্গতন্ত্র থাকে।\nউদাহরণ: রুই মাছ (Labeo rohita), রয়েল বেঙ্গল টাইগার (Panthera tigris), মানুষ।',
        highlight: 'কোষপ্রাচীরবিহীন, হলোজোয়িক পুষ্টি, উন্নত অঙ্গতন্ত্র।'
      }
    ],
    realLifeRelevance: [
      'পেনিসিলিয়াম নামক ছত্রাক থেকে চিকিৎসায় প্রথম অ্যান্টিবায়োটিক "পেনিসিলিন" প্রস্তুত করা হয়।',
      'উদ্ভিদ পৃথিবীর প্রাথমিক উৎপাদক হিসেবে কার্বন ডাই-অক্সাইড গ্রহণ ও অক্সিজেন সরবরাহ করে।'
    ],
    didYouKnow: 'ইস্ট (Yeast) এককোষী ছত্রাক হলেও বেকারি শিল্পে পাউরুটি ফোলাতে এবং অ্যালকোহল তৈরিতে বাণিজ্যিকভাবে ব্যবহৃত হয়।'
  },

  // Slide 8: দ্বিপদ নামকরণের নিয়মাবলী (Rules of Binomial Nomenclature)
  {
    id: 8,
    subject: 'biology',
    chapter: 1,
    title: 'দ্বিপদ নামকরণের পদ্ধতি ও নিয়মাবলী',
    subtitle: 'Rules of Binomial Nomenclature (ICBN & ICZN Codes)',
    category: 'জীববিজ্ঞান ১ম অধ্যায়: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s8.svg',
    gallery: [
      {
        id: 'bio1_s8_img1',
        titleBn: 'গণ ও প্রজাতির দুটি পদ',
        titleEn: 'Two Parts: Genus & Species',
        captionBn: 'প্রথম অংশটি গণ (Genus) এবং দ্বিতীয় অংশটি প্রজাতি (Species)। যেমন: Homo (গণ) + sapiens (প্রজাতি)।',
        captionEn: 'First epithet is genus and second is specific epithet.',
        type: 'diagram',
        customDiagramType: 'bioCh1_m8'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'গণ (Genus পদ)',
        labelEn: 'Genus (Capital Letter Initial)',
        detailBn: 'দ্বিপদ নামকরণের প্রথম পদ; এর প্রথম অক্ষর সর্বদা Capital letter হতে হবে (যেমন: Homo, Panthera)।',
        detailEn: 'First generic epithet, initialized with an upper-case letter.',
        symbol: 'Gen',
        partId: 'genus',
        badgeType: 'biology',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'প্রজাতি (Species পদ)',
        labelEn: 'Specific Epithet (Small Letters)',
        detailBn: 'দ্বিপদ নামকরণের দ্বিতীয় পদ; এর সবকটি অক্ষর সর্বদা Small letter হতে হবে (যেমন: sapiens, tigris)।',
        detailEn: 'Second specific epithet, completely in lower-case letters.',
        symbol: 'Sp',
        partId: 'species',
        badgeType: 'biology',
        position: { x: 70, y: 50 }
      },
      {
        labelBn: 'আলাদা আন্ডারলাইন বা ইটালিক্স',
        labelEn: 'Separate Underline or Italics',
        detailBn: 'মুদ্রণে বাঁকা ইটালিক্স (Homo sapiens) অথবা হাতে লিখলে দুটি পদের নিচে আলাদা দাগ দিতে হবে (<u>Homo</u> <u>sapiens</u>)।',
        detailEn: 'Underlined separately when handwritten or italicized when printed.',
        symbol: 'Line',
        partId: 'underlining',
        badgeType: 'biology',
        position: { x: 50, y: 75 }
      }
    ],
    keyPoints: [
      {
        heading: 'দ্বিপদ নামকরণ (Binomial Nomenclature) কী?',
        description: 'আন্তর্জাতিক নিয়মানুযায়ী প্রতিটি জীবের দুটি পদ (প্রথমটি গণ এবং দ্বিতীয়টি প্রজাতি) সমন্বয়ে একটি সর্বজনীন বৈজ্ঞানিক নাম প্রদানের পদ্ধতিকে দ্বিপদ নামকরণ বলে। এটি ল্যাটিন বা ল্যাটিনায়িত ভাষায় হতে হয়।',
        highlight: 'আন্তর্জাতিক নিয়ম মেনে দুই পদের বৈজ্ঞানিক নাম।'
      },
      {
        heading: 'নামকরণের আন্তর্জাতিক আচরণবিধি',
        description: '• উদ্ভিদের জন্য: ICBN (International Code of Botanical Nomenclature; বর্তমানে ICN)\n• প্রাণীর জন্য: ICZN (International Code of Zoological Nomenclature)।',
        highlight: 'ICBN ও ICZN কর্তৃক স্বীকৃত নিয়মাবলী।'
      },
      {
        heading: 'দ্বিপদ নামকরণের প্রধান নিয়মাবলি',
        description: '১. ভাষা: নাম অবশ্যই ল্যাটিন শব্দ বা ল্যাটিনের অনুরূপ হতে হবে।\n২. পদের সংখ্যা: নামের দুটি পদ থাকবে— ১ম পদটি গণ এবং ২য় পদটি প্রজাতি নির্দেশক।\n৩. অক্ষরের আকার: গণের প্রথম অক্ষরটি Capital letter এবং অবশিষ্ট সব অক্ষর ও প্রজাতির নাম Small letter হবে।\n৪. মুদ্রণ রীতি: ছাপার অক্ষরে সর্বদা ইটালিক (Italic) হরফে বাঁকা করে লিখতে হবে।\n৫. হস্তলিপি রীতি: হাতে লিখলে গণ ও প্রজাতির পদের নিচে পৃথকভাবে দাগ (Underline) দিতে হবে (যেমন: <u>Homo</u> <u>sapiens</u>)।\n৬. অগ্রাধিকার আইন (Law of Priority): একই জীবের একাধিক নাম থাকলে যিনি প্রথম বিজ্ঞানসম্মত নাম প্রকাশ করবেন, তাঁর নাম গৃহীত হবে।\n৭. বিজ্ঞানীর নাম: নামের শেষে আবিষ্কারক বিজ্ঞানীর নাম সংক্ষেপে যুক্ত করা যায় (যেমন: <i>Oryza sativa</i> L.)।',
        highlight: 'ল্যাটিন ভাষা, গণের ক্যাপিটাল লেটার, ইটালিক মুদ্রণ বা পৃথক আন্ডারলাইন।'
      }
    ],
    realLifeRelevance: [
      'সারা বিশ্বে ভাষার বিভিন্নতা সত্ত্বেও বৈজ্ঞানিক নামের মাধ্যমে বিভ্রান্তি ছাড়া নির্দিষ্ট জীবকে চেনা যায়।'
    ],
    didYouKnow: 'ধানকে বাংলায় "ধান", হিন্দিতে "চাওয়াল", ইংরেজিতে "Rice" বলা হলেও আন্তর্জাতিকভাবে সর্বত্র Oryza sativa নামে অভিহিত করা হয়।'
  },

  // Slide 9: গুরুত্বপূর্ণ জীবসমূহের বৈজ্ঞানিক নামের তালিকা
  {
    id: 9,
    subject: 'biology',
    chapter: 1,
    title: 'গুরুত্বপূর্ণ উদ্ভিদ ও প্রাণীর বৈজ্ঞানিক নাম',
    subtitle: 'Table of Standard Scientific Names of Plants & Animals',
    category: 'জীববিজ্ঞান ১ম অধ্যায়: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s9.svg',
    gallery: [
      {
        id: 'bio1_s9_img1',
        titleBn: 'বাংলাদেশের জাতীয় প্রতীকসমূহ',
        titleEn: 'National Symbols of Bangladesh',
        captionBn: 'দোয়েল, রয়েল বেঙ্গল টাইগার, শাপলা, কাঁঠাল ও ইলিশ মাছের বিজ্ঞানসম্মত নাম।',
        captionEn: 'Scientific nomenclature of national emblems of Bangladesh.',
        type: 'photo'
      },
      {
        id: 'bio1_s9_img2',
        titleBn: 'দ্বিপদ নামকরণের সচিত্র চার্ট',
        titleEn: 'Binomial Species Chart',
        captionBn: 'গণ ও প্রজাতির দ্বিপদ বৈজ্ঞানিক কাঠামোর ৩ডি ইন্টারঅ্যাক্টিভ বিশ্লেষণ।',
        captionEn: 'Interactive 3D model breakdown of genus and species nomenclature.',
        type: 'diagram',
        customDiagramType: 'bioCh1_m9'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'জাতীয় পাখি: দোয়েল (দ্বিপদ নাম)',
        labelEn: 'Copsychus saularis',
        detailBn: 'Magpie Robin — গণ: Copsychus, প্রজাতি: saularis।',
        detailEn: 'National bird of Bangladesh. Binary specific epithet standard.',
        symbol: 'Bird',
        partId: 'species',
        badgeType: 'biology',
        position: { x: 25, y: 40 }
      },
      {
        labelBn: 'জাতীয় ফুল: শাপলা (দ্বিপদ নাম)',
        labelEn: 'Nymphaea nouchali',
        detailBn: 'Water Lily — গণ: Nymphaea, প্রজাতি: nouchali।',
        detailEn: 'National flower of Bangladesh. Genus Nymphaea.',
        symbol: 'Flow',
        partId: 'genus',
        badgeType: 'biology',
        position: { x: 75, y: 40 }
      },
      {
        labelBn: 'রয়েল বেঙ্গল টাইগার',
        labelEn: 'Panthera tigris',
        detailBn: 'জাতীয় পশু — বিড়াল পরিবারের শীর্ষ শিকারি স্তন্যপায়ী প্রাণী।',
        detailEn: 'National animal of Bangladesh. Chordata, Mammalia, Carnivora.',
        symbol: 'Tiger',
        partId: 'underlining',
        badgeType: 'biology',
        position: { x: 50, y: 70 }
      }
    ],
    keyPoints: [
      {
        heading: 'জাতীয় প্রতীকসমূহের বৈজ্ঞানিক নাম',
        description: '• ধান: <i>Oryza sativa</i>\n• পাট: <i>Corchorus capsularis</i>\n• আম: <i>Mangifera indica</i>\n• কাঁঠাল (জাতীয় ফল): <i>Artocarpus heterophyllus</i>\n• শাপলা (জাতীয় ফুল): <i>Nymphaea nouchali</i>\n• দোয়েল (জাতীয় পাখি): <i>Copsychus saularis</i>\n• রয়েল বেঙ্গল টাইগার (জাতীয় পশু): <i>Panthera tigris</i>\n• ইলিশ (জাতীয় মাছ): <i>Tenualosa ilisha</i>।',
        highlight: 'জাতীয় প্রতীক ও গুরুত্বপূর্ণ শস্যের বৈজ্ঞানিক নাম।'
      },
      {
        heading: 'দৈনন্দিন জীবনের অন্যান্য পরিচিত জীবের বৈজ্ঞানিক নাম',
        description: '• মানুষ: <i>Homo sapiens</i>\n• ম্যালেরিয়া জীবাণু: <i>Plasmodium vivax</i>\n• গোলআলু: <i>Solanum tuberosum</i>\n• পেঁয়াজ: <i>Allium cepa</i>\n• মটরশুঁটি: <i>Pisum sativum</i>\n• তেলাপোকা: <i>Periplaneta americana</i>\n• রুই মাছ: <i>Labeo rohita</i>\n• কুনোব্যাঙ: <i>Duttaphrynus melanostictus</i>।',
        highlight: 'পরীক্ষায় বারবার আসা গুরুত্বপূর্ণ বৈজ্ঞানিক নামসমূহ।'
      }
    ],
    realLifeRelevance: [
      'এসএসসি বোর্ড পরীক্ষায় বহুনির্বাচনী ও জ্ঞানমূলক প্রশ্নে বৈজ্ঞানিক নাম ও বানান প্রায় প্রতি বছর আসে।'
    ],
    didYouKnow: 'ক্যারোলাস লিনিয়াস তাঁর "Systema Naturae" গ্রন্থের দশম সংস্করণে (১৭৫৮) প্রাণীদের নামকরণে দ্বিপদ পদ্ধতি আনুষ্ঠানিকভাবে প্রবর্তন করেন।'
  },

  // Slide 10: অধ্যায় সারসংক্ষেপ ও বোর্ড পরীক্ষার নির্দেশিকা
  {
    id: 10,
    subject: 'biology',
    chapter: 1,
    title: 'অধ্যায় সারসংক্ষেপ ও এসএসসি বোর্ড টিপস',
    subtitle: 'Summary, High-Yield Concepts & Board Exam Tips',
    category: 'জীববিজ্ঞান ১ম অধ্যায়: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s10.svg',
    gallery: [
      {
        id: 'bio1_s10_img1',
        titleBn: 'রিভিশন মাইন্ডম্যাপ',
        titleEn: 'Chapter 1 Revision Concept Map',
        captionBn: 'শাখাভিত্তিক বিভাজন, শ্রেণিবিন্যাসের স্তর, হুইটেকার-মারগুলিসের ৫ রাজ্য এবং দ্বিপদ নামকরণের প্রধান নিয়মাবলী।',
        captionEn: 'Quick summary flow chart for SSC Biology Chapter 1 revision.',
        type: 'diagram',
        customDiagramType: 'bioCh1_m10'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ভৌত ও ফলিত শাখা (অণুবীক্ষণ ও গবেষণা)',
        labelEn: 'Basic vs Applied Branches',
        detailBn: 'তত্ত্বীয় বিষয় বনাম প্রয়োগিক প্রয়োগ। অঙ্গসংস্থান ও বায়োটেকনোলজি।',
        detailEn: 'Key branch differentiation for CQ type questions.',
        symbol: 'Rev1',
        partId: 'microscope',
        badgeType: 'biology',
        position: { x: 25, y: 50 }
      },
      {
        labelBn: 'পঞ্চরাজ্যের পার্থক্য (মনেরা থেকে অ্যানিম্যালিয়া)',
        labelEn: '5 Kingdoms Comparison',
        detailBn: 'মনেরা, প্রোটিস্টা, ফানজাই, প্লান্টি, অ্যানিম্যালিয়ার কোষীয় বৈশিষ্ট্য ও বিবর্তনীয় ধারা।',
        detailEn: 'Comparison of cellular nature, cell wall, and mode of nutrition.',
        symbol: 'Rev2',
        partId: 'monera',
        badgeType: 'biology',
        position: { x: 75, y: 50 }
      },
      {
        labelBn: 'ট্যাক্সনমিক ৭ স্তর পিরামিড',
        labelEn: 'Taxonomic 7 Obligate Ranks',
        detailBn: 'রাজ্য থেকে প্রজাতি পর্যন্ত ৭টি ট্যাক্সনমিক ক্যাটাগরি।',
        detailEn: 'Seven obligate ranks of classification.',
        symbol: 'Rank',
        partId: 'kingdom',
        badgeType: 'biology',
        position: { x: 50, y: 25 }
      }
    ],
    keyPoints: [
      {
        heading: 'বোর্ড সৃজনশীল (CQ) গুরুত্বপূর্ণ টপিক',
        description: '১. "গ" বা প্রয়োগমূলক প্রশ্নে: উদ্দীপকে বর্ণিত কোনো জীবের বৈশিষ্ট্য উল্লেখ করে তা কোন রাজ্যের অন্তর্ভুক্ত ব্যাখ্যা করতে বলা হয় (যেমন: পেপটিডোগ্লাইকান প্রাচীর দেখে মনেরা বা কাইটিন দেখে ফানজাই শনাক্তকরণ)।\n২. "ঘ" বা উচ্চতর দক্ষতায়: হুইটেকার ও মারগুলিসের শ্রেণিবিন্যাসের উপযোগিতা বিশ্লেষণ অথবা উদ্ভিদ ও প্রাণীর মধ্যে রাজ্যের তুলনামূলক বিশ্লেষণ।\n৩. জ্ঞানমূলক ("ক"): দ্বিপদ নামকরণ কী? ট্যাক্সন কী? হিস্টোলজি কী?',
        highlight: 'উদ্দীপক দেখে রাজ্য শনাক্তকরণ ও দ্বিপদ নামকরণের নিয়মাবলী।'
      },
      {
        heading: 'এমসিকিউ এর জন্য হটস্পট',
        description: '• কোনটি ফলিত শাখা? (কীটতত্ত্ব, মৎস্যবিজ্ঞান, প্রত্নতত্ত্ববিদ্যা)\n• মনেরা রাজ্যের সঞ্চিত খাদ্য ও কোষপ্রাচীর উপাদান।\n• মানুষের বৈজ্ঞানিক নাম ও শ্রেণিবিন্যাসের পর্ব বা বর্গ।\n• দ্বিপদ নামকরণের সঠিক বানান ও নিয়ম (ইটালিক বা আন্ডারলাইন)।',
        highlight: 'বানান সতর্কতা ও বৈশিষ্ট্যের মিল-অমিল।'
      }
    ],
    realLifeRelevance: [
      'উচ্চশিক্ষায় জীববিজ্ঞান ও চিকিৎসাবিজ্ঞানের প্রতিটি ধাপের ভিত্তি হলো এই প্রথম অধ্যায়।'
    ],
    didYouKnow: 'ল্যাটিন একটি মৃত ভাষা (Dead language) হওয়ায় সময়ের সাথে সাথে এর শব্দের অর্থ পরিবর্তিত হয় না; এজন্য বৈজ্ঞানিক নামকরণে ল্যাটিন ভাষাকেই বেছে নেওয়া হয়েছে।'
  }
,
  {
    id: 11,
    subject: 'biology',
    chapter: 1,
    title: '১.১১ জীববিজ্ঞানের প্রায়োগিক ক্ষেত্র ও ভবিষ্যৎ',
    subtitle: 'Applied Frontiers: Bioinformatics & Astrobiology',
    category: 'অধ্যায় ১: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s11.svg',
    customDiagramType: 'bioCh1_m11',
    gallery: [
      {
        id: 'bio1_s11_img1',
        titleBn: 'জীববিজ্ঞানের প্রায়োগিক ক্ষেত্র ও ভবিষ্যৎ — পূর্ণাঙ্গ ডায়াগ্রাম',
        titleEn: 'Applied Frontiers: Bioinformatics & Astrobiology',
        captionBn: 'জীববিজ্ঞানের প্রায়োগিক ক্ষেত্র ও ভবিষ্যৎ সম্পর্কিত বিস্তারিত ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and scientific diagram for Applied Frontiers: Bioinformatics & Astrobiology.',
        type: 'diagram',
        customDiagramType: 'bioCh1_m11'
      },
      {
        id: 'bio1_s11_img2',
        titleBn: 'জীববিজ্ঞানের প্রায়োগিক ক্ষেত্র ও ভবিষ্যৎ — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Realistic Biological Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বাস্তব অণুবীক্ষণিক ও বৈজ্ঞানিক চিত্র।',
        captionEn: 'Realistic scientific illustration.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch1_s11.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'জীবতথ্যবিজ্ঞান',
        labelEn: 'Bioinformatics',
        detailBn: 'জীববিজ্ঞানের ডেটা সংরক্ষণে কম্পিউটার প্রযুক্তির ব্যবহার।',
        detailEn: 'Computational biology.',
        symbol: 'BIO',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: '১.১১ আধুনিক বিজ্ঞানের সংযোগ',
        description: 'বায়োইনফরমেটিক্স, জেনেটিক ইঞ্জিনিয়ারিং এবং ন্যানোবায়োটেকনোলজি জীববিজ্ঞানের ভবিষ্যৎকে দ্রুত এগিয়ে নিয়ে যাচ্ছে।'
      },
      {
        heading: 'বোর্ড টিপস',
        description: 'ভৌত ও ফলিত শাখার মধ্যে প্রায়োগিক পার্থক্য পরীক্ষায় অনুধাবনমূলক প্রশ্নে আসে।'
      },
    ]
  },
  {
    id: 12,
    subject: 'biology',
    chapter: 1,
    title: '১.১২ ট্যাক্সোনমির ঐতিহাসিক পটভূমি ও লিনিয়াস',
    subtitle: 'History of Taxonomy: Carolus Linnaeus (1707-1778)',
    category: 'অধ্যায় ১: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s12.svg',
    customDiagramType: 'bioCh1_m12',
    gallery: [
      {
        id: 'bio1_s12_img1',
        titleBn: 'ট্যাক্সোনমির ঐতিহাসিক পটভূমি ও লিনিয়াস — পূর্ণাঙ্গ ডায়াগ্রাম',
        titleEn: 'History of Taxonomy: Carolus Linnaeus (1707-1778)',
        captionBn: 'ট্যাক্সোনমির ঐতিহাসিক পটভূমি ও লিনিয়াস সম্পর্কিত বিস্তারিত ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and scientific diagram for History of Taxonomy: Carolus Linnaeus (1707-1778).',
        type: 'diagram',
        customDiagramType: 'bioCh1_m12'
      },
      {
        id: 'bio1_s12_img2',
        titleBn: 'ট্যাক্সোনমির ঐতিহাসিক পটভূমি ও লিনিয়াস — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Realistic Biological Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বাস্তব অণুবীক্ষণিক ও বৈজ্ঞানিক চিত্র।',
        captionEn: 'Realistic scientific illustration.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch1_s12.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ক্যারোলাস লিনিয়াস',
        labelEn: 'Carolus Linnaeus',
        detailBn: 'আধুনিক শ্রেণিবিন্যাস ও দ্বিপদ নামকরণের জনক।',
        detailEn: 'Father of Taxonomy.',
        symbol: 'LIN',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: '১.১২ লিনিয়াসের গ্রন্থসমূহ',
        description: 'Systema Naturae (1758) এবং Species Plantarum (1753) গ্রন্থে লিনিয়াস প্রথম প্রাকৃতিক শ্রেণিবিন্যাস প্রস্তাব করেন।'
      },
    ]
  },
  {
    id: 13,
    subject: 'biology',
    chapter: 1,
    title: '১.১৩ সুপার কিংডম ১: প্রোক্যারিওটা বৈশিষ্ট্য',
    subtitle: 'Super Kingdom 1: Prokaryota (Nucleus-less Primitive Cells)',
    category: 'অধ্যায় ১: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s13.svg',
    customDiagramType: 'bioCh1_m13',
    gallery: [
      {
        id: 'bio1_s13_img1',
        titleBn: 'সুপার কিংডম ১: প্রোক্যারিওটা বৈশিষ্ট্য — পূর্ণাঙ্গ ডায়াগ্রাম',
        titleEn: 'Super Kingdom 1: Prokaryota (Nucleus-less Primitive Cells)',
        captionBn: 'সুপার কিংডম ১: প্রোক্যারিওটা বৈশিষ্ট্য সম্পর্কিত বিস্তারিত ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and scientific diagram for Super Kingdom 1: Prokaryota (Nucleus-less Primitive Cells).',
        type: 'diagram',
        customDiagramType: 'bioCh1_m13'
      },
      {
        id: 'bio1_s13_img2',
        titleBn: 'সুপার কিংডম ১: প্রোক্যারিওটা বৈশিষ্ট্য — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Realistic Biological Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বাস্তব অণুবীক্ষণিক ও বৈজ্ঞানিক চিত্র।',
        captionEn: 'Realistic scientific illustration.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch1_s13.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'নিউক্লিওয়েড',
        labelEn: 'Nucleoid',
        detailBn: 'ঝিল্লিবিহীন আদি ডিএনএ অঞ্চল।',
        detailEn: 'Unbound DNA loop.',
        symbol: 'NUC',
        badgeType: 'cell',
        position: { x: 40, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: '১.১৩ আদিকোষের বৈশিষ্ট্য',
        description: 'সুনির্দিষ্ট নিউক্লিয়াস নেই, মাইটোকন্ড্রিয়া, ক্লোরোপ্লাস্ট ও এন্ডোপ্লাজমিক জালিকা অনুপস্থিত। শুধুমাত্র রাইবোসোম (70S) থাকে।'
      },
    ]
  },
  {
    id: 14,
    subject: 'biology',
    chapter: 1,
    title: '১.১৪ সুপার কিংডম ২: ইউক্যারিওটা বৈশিষ্ট্য',
    subtitle: 'Super Kingdom 2: Eukaryota (True Nucleated Living Cells)',
    category: 'অধ্যায় ১: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s14.svg',
    customDiagramType: 'bioCh1_m14',
    gallery: [
      {
        id: 'bio1_s14_img1',
        titleBn: 'সুপার কিংডম ২: ইউক্যারিওটা বৈশিষ্ট্য — পূর্ণাঙ্গ ডায়াগ্রাম',
        titleEn: 'Super Kingdom 2: Eukaryota (True Nucleated Living Cells)',
        captionBn: 'সুপার কিংডম ২: ইউক্যারিওটা বৈশিষ্ট্য সম্পর্কিত বিস্তারিত ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and scientific diagram for Super Kingdom 2: Eukaryota (True Nucleated Living Cells).',
        type: 'diagram',
        customDiagramType: 'bioCh1_m14'
      },
      {
        id: 'bio1_s14_img2',
        titleBn: 'সুপার কিংডম ২: ইউক্যারিওটা বৈশিষ্ট্য — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Realistic Biological Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বাস্তব অণুবীক্ষণিক ও বৈজ্ঞানিক চিত্র।',
        captionEn: 'Realistic scientific illustration.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch1_s14.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'আদর্শ নিউক্লিয়াস',
        labelEn: 'True Nucleus',
        detailBn: 'দ্বি-স্তরী নিউক্লিয়ার পর্দা ও নিউক্লিওলাসযুক্ত।',
        detailEn: 'Membrane-bound nucleus.',
        symbol: 'EUK',
        badgeType: 'cell',
        position: { x: 60, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: '১.১৪ প্রকৃতকোষী বৈচিত্র্য',
        description: 'নিউক্লিয়াস দ্বি-স্তরী পর্দা দ্বারা পরিবেষ্টিত, সুগঠিত ক্রোমোসোম থাকে এবং ঝিল্লিবদ্ধ সকল সাইটোপ্লাজমীয় অঙ্গাণু বিদ্যমান।'
      },
    ]
  },
  {
    id: 15,
    subject: 'biology',
    chapter: 1,
    title: '১.১৫ ট্যাক্সনমিক ক্যাটাগরির ধারাবাহিক ধাপ (Hierarchy)',
    subtitle: 'Taxonomic Hierarchy: Kingdom to Species Ranks',
    category: 'অধ্যায় ১: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s15.svg',
    customDiagramType: 'bioCh1_m15',
    gallery: [
      {
        id: 'bio1_s15_img1',
        titleBn: 'ট্যাক্সনমিক ক্যাটাগরির ধারাবাহিক ধাপ (Hierarchy) — পূর্ণাঙ্গ ডায়াগ্রাম',
        titleEn: 'Taxonomic Hierarchy: Kingdom to Species Ranks',
        captionBn: 'ট্যাক্সনমিক ক্যাটাগরির ধারাবাহিক ধাপ (Hierarchy) সম্পর্কিত বিস্তারিত ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and scientific diagram for Taxonomic Hierarchy: Kingdom to Species Ranks.',
        type: 'diagram',
        customDiagramType: 'bioCh1_m15'
      },
      {
        id: 'bio1_s15_img2',
        titleBn: 'ট্যাক্সনমিক ক্যাটাগরির ধারাবাহিক ধাপ (Hierarchy) — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Realistic Biological Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বাস্তব অণুবীক্ষণিক ও বৈজ্ঞানিক চিত্র।',
        captionEn: 'Realistic scientific illustration.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch1_s15.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'প্রজাতি (Species)',
        labelEn: 'Species',
        detailBn: 'শ্রেণিবিন্যাসের মূল এবং ক্ষুদ্রতম একক।',
        detailEn: 'Fundamental basic rank.',
        symbol: 'SP',
        badgeType: 'cell',
        position: { x: 50, y: 80 }
      },
    ],
    keyPoints: [
      {
        heading: '১.১৫ ৭টি আবশ্যকীয় ধাপ',
        description: 'জগৎ (Kingdom) -> পর্ব (Phylum) -> শ্রেণি (Class) -> বর্গ (Order) -> গোত্র (Family) -> গণ (Genus) -> প্রজাতি (Species)।'
      },
    ]
  },
  {
    id: 16,
    subject: 'biology',
    chapter: 1,
    title: '১.১৬ দ্বিপদ নামকরণের আন্তর্জাতিক কোড ও নিয়ম',
    subtitle: 'International Rules of Nomenclature (ICBN & ICZN Codes)',
    category: 'অধ্যায় ১: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s16.svg',
    customDiagramType: 'bioCh1_m16',
    gallery: [
      {
        id: 'bio1_s16_img1',
        titleBn: 'দ্বিপদ নামকরণের আন্তর্জাতিক কোড ও নিয়ম — পূর্ণাঙ্গ ডায়াগ্রাম',
        titleEn: 'International Rules of Nomenclature (ICBN & ICZN Codes)',
        captionBn: 'দ্বিপদ নামকরণের আন্তর্জাতিক কোড ও নিয়ম সম্পর্কিত বিস্তারিত ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and scientific diagram for International Rules of Nomenclature (ICBN & ICZN Codes).',
        type: 'diagram',
        customDiagramType: 'bioCh1_m16'
      },
      {
        id: 'bio1_s16_img2',
        titleBn: 'দ্বিপদ নামকরণের আন্তর্জাতিক কোড ও নিয়ম — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Realistic Biological Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বাস্তব অণুবীক্ষণিক ও বৈজ্ঞানিক চিত্র।',
        captionEn: 'Realistic scientific illustration.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch1_s16.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'গণ ও প্রজাতি',
        labelEn: 'Genus & Species',
        detailBn: 'নামের প্রথম পদটি গণ এবং দ্বিতীয় পদটি প্রজাতি নির্দেশ করে।',
        detailEn: 'Generic name capitalized.',
        symbol: 'GEN',
        badgeType: 'cell',
        position: { x: 45, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: '১.১৬ ৮টি আন্তর্জাতিক নিয়ম',
        description: 'ল্যাটিন ভাষা, গণপদ ক্যাপিটাল প্রজাতিপদ স্মল, মুদ্রণে ইটালিক হরফ এবং হাতে লিখলে পৃথক নিচে দাগ দেওয়া বাধ্যতামূলক।'
      },
    ]
  },
  {
    id: 17,
    subject: 'biology',
    chapter: 1,
    title: '১.১৭ বাংলাদেশের জাতীয় প্রতীক ও সাধারণ জীবের বৈজ্ঞানিক নাম',
    subtitle: 'Scientific Names: National Symbols of Bangladesh',
    category: 'অধ্যায় ১: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s17.svg',
    customDiagramType: 'bioCh1_m17',
    gallery: [
      {
        id: 'bio1_s17_img1',
        titleBn: 'বাংলাদেশের জাতীয় প্রতীক ও সাধারণ জীবের বৈজ্ঞানিক নাম — পূর্ণাঙ্গ ডায়াগ্রাম',
        titleEn: 'Scientific Names: National Symbols of Bangladesh',
        captionBn: 'বাংলাদেশের জাতীয় প্রতীক ও সাধারণ জীবের বৈজ্ঞানিক নাম সম্পর্কিত বিস্তারিত ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and scientific diagram for Scientific Names: National Symbols of Bangladesh.',
        type: 'diagram',
        customDiagramType: 'bioCh1_m17'
      },
      {
        id: 'bio1_s17_img2',
        titleBn: 'বাংলাদেশের জাতীয় প্রতীক ও সাধারণ জীবের বৈজ্ঞানিক নাম — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Realistic Biological Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বাস্তব অণুবীক্ষণিক ও বৈজ্ঞানিক চিত্র।',
        captionEn: 'Realistic scientific illustration.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch1_s17.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'রয়েল বেঙ্গল টাইগার',
        labelEn: 'Panthera tigris',
        detailBn: 'আমাদের জাতীয় পশু।',
        detailEn: 'Panthera tigris.',
        symbol: 'TGR',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: '১.১৭ জাতীয় প্রতীকসমূহ',
        description: 'দোয়েল: Copsychus saularis, শাপলা: Nymphaea nouchali, ইলিশ: Tenualosa ilisha, কাঁঠাল: Artocarpus heterophyllus, বাঘ: Panthera tigris।'
      },
    ]
  },
  {
    id: 18,
    subject: 'biology',
    chapter: 1,
    title: '১.১৮ অর্থনৈতিক ও ভেষজ উদ্ভিদের বৈজ্ঞানিক নাম',
    subtitle: 'Scientific Names of Important Economic & Medicinal Plants',
    category: 'অধ্যায় ১: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s18.svg',
    customDiagramType: 'bioCh1_m18',
    gallery: [
      {
        id: 'bio1_s18_img1',
        titleBn: 'অর্থনৈতিক ও ভেষজ উদ্ভিদের বৈজ্ঞানিক নাম — পূর্ণাঙ্গ ডায়াগ্রাম',
        titleEn: 'Scientific Names of Important Economic & Medicinal Plants',
        captionBn: 'অর্থনৈতিক ও ভেষজ উদ্ভিদের বৈজ্ঞানিক নাম সম্পর্কিত বিস্তারিত ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and scientific diagram for Scientific Names of Important Economic & Medicinal Plants.',
        type: 'diagram',
        customDiagramType: 'bioCh1_m18'
      },
      {
        id: 'bio1_s18_img2',
        titleBn: 'অর্থনৈতিক ও ভেষজ উদ্ভিদের বৈজ্ঞানিক নাম — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Realistic Biological Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বাস্তব অণুবীক্ষণিক ও বৈজ্ঞানিক চিত্র।',
        captionEn: 'Realistic scientific illustration.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch1_s18.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ধান',
        labelEn: 'Oryza sativa',
        detailBn: 'প্রধান খাদ্যশস্য।',
        detailEn: 'Rice plant.',
        symbol: 'RIC',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: '১.১৮ অর্থনৈতিক নাম চার্ট',
        description: 'ধান: Oryza sativa, গম: Triticum aestivum, পাট: Corchorus capsularis, আম: Mangifera indica, জবা: Hibiscus rosa-sinensis।'
      },
    ]
  },
  {
    id: 19,
    subject: 'biology',
    chapter: 1,
    title: '১.১৯ জীববৈচিত্র্য ও সংরক্ষণ জীববিজ্ঞানের গুরুত্ব',
    subtitle: 'Biodiversity Conservation & Ecological Balance',
    category: 'অধ্যায় ১: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s19.svg',
    customDiagramType: 'bioCh1_m19',
    gallery: [
      {
        id: 'bio1_s19_img1',
        titleBn: 'জীববৈচিত্র্য ও সংরক্ষণ জীববিজ্ঞানের গুরুত্ব — পূর্ণাঙ্গ ডায়াগ্রাম',
        titleEn: 'Biodiversity Conservation & Ecological Balance',
        captionBn: 'জীববৈচিত্র্য ও সংরক্ষণ জীববিজ্ঞানের গুরুত্ব সম্পর্কিত বিস্তারিত ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and scientific diagram for Biodiversity Conservation & Ecological Balance.',
        type: 'diagram',
        customDiagramType: 'bioCh1_m19'
      },
      {
        id: 'bio1_s19_img2',
        titleBn: 'জীববৈচিত্র্য ও সংরক্ষণ জীববিজ্ঞানের গুরুত্ব — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Realistic Biological Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বাস্তব অণুবীক্ষণিক ও বৈজ্ঞানিক চিত্র।',
        captionEn: 'Realistic scientific illustration.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch1_s19.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'জীববৈচিত্র্য',
        labelEn: 'Biodiversity',
        detailBn: 'জিনগত, প্রজাতিগত ও বাস্তুতান্ত্রিক বৈচিত্র্য।',
        detailEn: 'Ecosystem richness.',
        symbol: 'DIV',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: '১.১৯ সংরক্ষণের প্রয়োজনীয়তা',
        description: 'জীববৈচিত্র্য প্রাকৃতিক ভারসাম্য ও খাদ্য শৃঙ্খলের ভিত্তি। আইইউসিএন (IUCN) রেড লিস্ট অনুযায়ী বিলুপ্তপ্রায় জীব সংরক্ষণ করা অপরিহার্য।'
      },
    ]
  },
  {
    id: 20,
    subject: 'biology',
    chapter: 1,
    title: '১.২০ অধ্যায় ১ সারসংক্ষেপ ও বোর্ড সৃজনশীল পূর্ণাঙ্গ গাইড',
    subtitle: 'Chapter 1 Complete Summary & SSC Board Exam Master Tips',
    category: 'অধ্যায় ১: জীবন পাঠ',
    image: '/src/assets/images/bio/bio_ch1_s20.svg',
    customDiagramType: 'bioCh1_m20',
    gallery: [
      {
        id: 'bio1_s20_img1',
        titleBn: 'অধ্যায় ১ সারসংক্ষেপ ও বোর্ড সৃজনশীল পূর্ণাঙ্গ গাইড — পূর্ণাঙ্গ ডায়াগ্রাম',
        titleEn: 'Chapter 1 Complete Summary & SSC Board Exam Master Tips',
        captionBn: 'অধ্যায় ১ সারসংক্ষেপ ও বোর্ড সৃজনশীল পূর্ণাঙ্গ গাইড সম্পর্কিত বিস্তারিত ২ডি ও ৩ডি সচিত্র বৈজ্ঞানিক রূপরেখা।',
        captionEn: 'Detailed anatomical and scientific diagram for Chapter 1 Complete Summary & SSC Board Exam Master Tips.',
        type: 'diagram',
        customDiagramType: 'bioCh1_m20'
      },
      {
        id: 'bio1_s20_img2',
        titleBn: 'অধ্যায় ১ সারসংক্ষেপ ও বোর্ড সৃজনশীল পূর্ণাঙ্গ গাইড — বাস্তব বৈজ্ঞানিক আলোকচিত্র',
        titleEn: 'Realistic Biological Illustration',
        captionBn: 'উচ্চ রেজোলিউশন বাস্তব অণুবীক্ষণিক ও বৈজ্ঞানিক চিত্র।',
        captionEn: 'Realistic scientific illustration.',
        type: 'photo',
        url: '/src/assets/images/bio/bio_ch1_s20.svg'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'বোর্ড টিপস',
        labelEn: 'Board Tips',
        detailBn: 'পূর্ণাঙ্গ ১০/১০ প্রাপ্তির মূল পয়েন্টস।',
        detailEn: 'High-yield topics.',
        symbol: 'CQ',
        badgeType: 'cell',
        position: { x: 50, y: 50 }
      },
    ],
    keyPoints: [
      {
        heading: '১.২০ বোর্ড রিভিশন নোটস',
        description: 'হুইটেকারের পঞ্চরাজ্যের তুলনা ছক, মানুষের ট্যাক্সনমিক স্তরক্রম এবং দ্বিপদ নামকরণের নিয়মাবলী মুখস্থ রাখলে নিশ্চিত পূর্ণ নম্বর পাওয়া যাবে।'
      },
    ]
  }
];
