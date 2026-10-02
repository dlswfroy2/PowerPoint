import { Slide } from '../types/presentation';

export const biologyChapter2Slides: Slide[] = [
  // Slide 1: জীবকোষের পরিচিতি ও শ্রেণিবিভাগ
  {
    id: 1,
    subject: 'biology',
    chapter: 2,
    title: 'জীবকোষের পরিচিতি ও শ্রেণিবিভাগ',
    subtitle: 'Introduction to Living Cells & Structural Classification',
    category: 'জীববিজ্ঞান ২য় অধ্যায়: জীবকোষ ও টিস্যু',
    gallery: [
      {
        id: 'bio2_s1_img1',
        titleBn: 'আদিকোষ ও প্রকৃতকোষের তুলনা',
        titleEn: 'Prokaryotic vs Eukaryotic Cell Structure',
        captionBn: 'সুগঠিত নিউক্লিয়াসের উপস্থিতি বা অনুপস্থিতির ভিত্তিতে জীবকোষ প্রধানত দুই প্রকার: আদিকোষ (Prokaryotic) ও প্রকৃতকোষ (Eukaryotic)।',
        captionEn: 'Classification of cells into prokaryotic and eukaryotic based on nuclear organization.',
        type: 'diagram'
      },
      {
        id: 'bio2_s1_img2',
        titleBn: 'উদ্ভিদকোষ বনাম প্রাণীকোষ',
        titleEn: 'Plant Cell vs Animal Cell Overview',
        captionBn: 'উদ্ভিদকোষে কোষপ্রাচীর, প্লাস্টিড ও বড় কোষগহ্বর থাকে; যা প্রাণীকোষে অনুপস্থিত থাকে।',
        captionEn: 'Distinct differences between plant cells and animal cells including cell wall and plastids.',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'আদিকোষ',
        labelEn: 'Prokaryote',
        detailBn: 'সুনির্দিষ্ট নিউক্লিয়ার আবরণী নেই, ডিএনএ সাইটোপ্লাজমে মুক্ত থাকে (নিউক্লিঅয়েড)। যেমন: ব্যাকটেরিয়া।',
        detailEn: 'Cell lacking a membrane-bound nucleus; naked circular DNA in nucleoid.',
        symbol: 'Pro',
        badgeType: 'cell',
        position: { x: 25, y: 50 }
      },
      {
        labelBn: 'প্রকৃতকোষ',
        labelEn: 'Eukaryote',
        detailBn: 'দ্বৈত মেমব্রেনযুক্ত সুগঠিত নিউক্লিয়াস ও ঝিল্লিযুক্ত অঙ্গাণু বিদ্যমান। যেমন: উদ্ভিদ ও প্রাণী।',
        detailEn: 'Cell with true membrane-bound nucleus and organized organelles.',
        symbol: 'Eu',
        badgeType: 'cell',
        position: { x: 75, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'কোষ কী? (What is a Cell?)',
        description: 'জীবদেহের গঠন ও কাজের মৌলিক একককে কোষ (Cell) বলে। ১৬৬৫ সালে বিজ্ঞানী রবার্ট হুক (Robert Hooke) বোতলের ছিপির পাতলা সেকশনে মৃত কোষপ্রাচীর প্রত্যক্ষ করে প্রথম "Cell" নামকরণ করেন।',
        highlight: 'জীবনের ক্ষুদ্রতম স্বয়ংসম্পূর্ণ গাঠনিক একক।'
      },
      {
        heading: 'নিউক্লিয়াসের গঠনের ভিত্তিতে শ্রেণিবিভাগ',
        description: '১. আদিকোষ (Prokaryotic): সুগঠিত নিউক্লিয়াস নেই, মেমব্রেনযুক্ত কোনো অঙ্গাণু থাকে না; কেবল রাইবোসোম (70S) থাকে।\n২. প্রকৃতকোষ (Eukaryotic): সুগঠিত নিউক্লিয়াস, মেমব্রেনবেষ্টিত অঙ্গাণু এবং 80S রাইবোসোম থাকে।',
        highlight: 'আদিকোষ (ব্যাকটেরিয়া) ও প্রকৃতকোষ (উদ্ভিদ, প্রাণী)'
      },
      {
        heading: 'কাজের ভিত্তিতে শ্রেণিবিভাগ',
        description: 'দেহকোষ (Somatic Cell) জীবদেহের অঙ্গ ও অঙ্গতন্ত্র গঠন করে (ডিপ্লয়েড 2n)। জননকোষ (Gamete) যৌন প্রজননে অংশ নেয় (হ্যাপ্লয়েড n; শুক্রাণু ও ডিম্বাণু)।',
        highlight: 'দেহকোষ (2n) ও জননকোষ (n)'
      }
    ],
    tableData: {
      caption: 'উদ্ভিদকোষ ও প্রাণীকোষের প্রধান প্রধান পার্থক্য',
      headers: ['বৈশিষ্ট্য', 'উদ্ভিদকোষ (Plant Cell)', 'প্রাণীকোষ (Animal Cell)'],
      rows: [
        ['কোষপ্রাচীর', 'সেলুলোজ নির্মিত জড় কোষপ্রাচীর বিদ্যমান', 'অনুপস্থিত (কেবল প্লাজমালেমা থাকে)'],
        ['প্লাস্টিড/ক্লোরোপ্লাস্ট', 'বিদ্যমান (সালোকসংশ্লেষণ ঘটায়)', 'অনুপস্থিত (পরভোজী)'],
        ['কোষগহ্বর', 'কেন্দ্রে সুবিশাল কোষগহ্বর থাকে', 'সাধারণত অনুপস্থিত বা অত্যন্ত ক্ষুদ্র'],
        ['সেন্ট্রোসোম/সেন্ট্রিওল', 'নিম্নশ্রেণির উদ্ভিদ ছাড়া অনুপস্থিত', 'সেন্ট্রিওলযুক্ত সেন্ট্রোসোম বিদ্যমান'],
        ['সঞ্চিত খাদ্য', 'প্রধানত স্টার্চ বা শ্বেতসার', 'প্রধানত গ্লাইকোজেন ও চর্বি']
      ]
    },
    callout: {
      type: 'info',
      title: 'কোষতত্ত্ব (Cell Theory)',
      content: '১৮৩৮-৩৯ সালে স্লাইডেন (Schleiden) ও শোয়ান (Schwann) কোষতত্ত্ব প্রদান করেন: "কোষ হলো জীবনের গঠন ও শারীরবৃত্তীয় একক এবং সকল জীব এক বা একাধিক কোষ দিয়ে গঠিত। পূর্বতন কোষ থেকেই নতুন কোষের সৃষ্টি হয়।"'
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন যে কোষ হলো একটি জীবন্ত বায়োকেমিক্যাল ফ্যাক্টরি, যেখানে প্রতি সেকেন্ডে হাজার হাজার রাসায়নিক বিক্রিয়া সমন্বিতভাবে পরিচালিত হচ্ছে।',
    recommendedInteractiveTab: 'cellExplorerLab'
  },

  // Slide 2: কোষপ্রাচীর ও প্লাজমা মেমব্রেন
  {
    id: 2,
    subject: 'biology',
    chapter: 2,
    title: 'কোষপ্রাচীর ও প্লাজমা মেমব্রেন',
    subtitle: 'Cell Wall Architecture & Fluid Mosaic Membrane Model',
    category: 'জীবকোষের আবরণী',
    gallery: [
      {
        id: 'bio2_s2_img1',
        titleBn: 'কোষপ্রাচীরের ত্রিমাত্রিক স্তরবিন্যাস',
        titleEn: 'Three-Layered Plant Cell Wall Architecture',
        captionBn: 'কোষপ্রাচীর মধ্যপর্দা (Middle lamella), প্রাথমিক প্রাচীর ও গৌণ প্রাচীর নিয়ে গঠিত। প্রধান উপাদান সেলুলোজ, হেমিসেলুলোজ ও লিগনিন।',
        captionEn: 'Ultrastructure of plant cell wall composed of cellulose microfibrils, hemicellulose, and pectin.',
        type: 'diagram'
      },
      {
        id: 'bio2_s2_img2',
        titleBn: 'প্লাজমা মেমব্রেনের ফ্লুইড মোজাইক মডেল',
        titleEn: 'Singer & Nicolson Fluid Mosaic Model (1972)',
        captionBn: 'ফসফোলিপিড বাইলেয়ারের মধ্যে প্রোটিন অণুগুলো মোজাইকের মতো ভাসমান অবস্থায় থাকে।',
        captionEn: 'Phospholipid bilayer with embedded integral, peripheral proteins and cholesterol.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ফসফোলিপিড বাইলেয়ার',
        labelEn: 'Phospholipid Bilayer',
        detailBn: 'হাইড্রোফিলিক পোলার মাথা (পানিগ্রাহী) বাইরে এবং হাইড্রোফোবিক লেজ (পানিবিদ্বেষী) ভেতরে থাকে।',
        detailEn: 'Double layer of lipid molecules forming the fluid core of the membrane.',
        symbol: 'Lipid 2x',
        badgeType: 'cell',
        position: { x: 50, y: 35 }
      },
      {
        labelBn: 'ইন্টিগ্রাল প্রোটিন',
        labelEn: 'Integral Protein',
        detailBn: 'ঝিল্লির এপার থেকে ওপার পর্যন্ত বিস্তৃত থেকে বিভিন্ন আয়ন ও অণু পরিবহণে টানেল হিসেবে কাজ করে।',
        detailEn: 'Transmembrane channels for selective molecular transport.',
        symbol: 'Channel',
        badgeType: 'cell',
        position: { x: 70, y: 60 }
      }
    ],
    keyPoints: [
      {
        heading: 'কোষপ্রাচীর (Cell Wall)',
        description: 'কেবল উদ্ভিদকোষে বিদ্যমান জড় ও ভেদ্য আবরণী। এটি কোষকে নির্দিষ্ট আকার দেয়, বাইরের আঘাত থেকে সজীব প্রোটোপ্লাজমকে রক্ষা করে এবং পানি ও খনিজ লবণের যাতায়াত নিয়ন্ত্রণ করে। প্লাজমোডেসমাটার (Plasmodesmata) মাধ্যমে পাশাপাশি দুটি কোষের মধ্যে সংযোগ স্থাপিত হয়।',
        highlight: 'সেলুলোজ, হেমিসেলুলোজ ও পেকটিন দ্বারা গঠিত।'
      },
      {
        heading: 'প্লাজমা মেমব্রেন বা কোষঝিল্লি (Cell Membrane)',
        description: 'প্রোটোপ্লাজমের বাইরে বিদ্যমান দ্বিস্তরী, স্থিতিস্থাপক ও বৈষম্যভেদ্য (Selectively Permeable) সজীব ঝিল্লি। বিজ্ঞানী সিঙ্গার ও নিকলসন (Singer & Nicolson, 1972) এর গঠন ব্যাখ্যার জন্য সর্বজনগ্রাহ্য "ফ্লুইড মোজাইক মডেল" প্রবর্তন করেন।',
        highlight: 'ফসফোলিপিড বাইলেয়ারে প্রোটিন বরফখণ্ডের মতো ভেসে থাকে।'
      },
      {
        heading: 'প্লাজমালেমার প্রধান কার্যাবলী',
        description: '১. সাইটোপ্লাজমীয় অঙ্গাণুসমূহকে রক্ষা করা।\n২. বৈষম্যভেদ্য ঝিল্লি হিসেবে অভিস্রবণ ও ব্যাপন নিয়ন্ত্রণ করা।\n৩. ফ্যাগোসাইটোসিস (কঠিন কণা গ্রহণ) ও পিনোসাইটোসিস (তরল কণা গ্রহণ) সম্পন্ন করা।',
        highlight: 'অভিস্রবণ, ব্যাপন ও সক্রিয় পরিবহণ নিয়ন্ত্রণ।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'ফ্লুইড মোজাইক মডেলের উপমা',
      content: 'ফসফোলিপিড অণুগুলো তরল পদার্থের মতো গতিশীল এবং প্রোটিন অণুগুলো তাতে সমুদ্রের পানিতে ভাসমান হিমশৈল বা আইসবার্গের মতো বিরাজ করে। এজন্য একে "Iceberg in lipid sea" বলা হয়।'
    },
    speakerNotes: 'শিক্ষার্থীদের বৈষম্যভেদ্য ঝিল্লির গুরুত্ব বোঝান: এই ঝিল্লি সচল না থাকলে কোষের ভেতরে কোনো ক্ষতিকর পদার্থ সহজেই ঢুকে যেত বা প্রয়োজনীয় খাদ্য বেরিয়ে যেত।',
    recommendedInteractiveTab: 'cellExplorerLab'
  },

  // Slide 3: মাইটোকন্ড্রিয়া — কোষের পাওয়ার হাউজ
  {
    id: 3,
    subject: 'biology',
    chapter: 2,
    title: 'মাইটোকন্ড্রিয়া — কোষের পাওয়ার হাউজ',
    subtitle: 'Mitochondria — The Powerhouse of Cellular Respiration & ATP Production',
    category: 'সাইটোপ্লাজমীয় অঙ্গাণু',
    gallery: [
      {
        id: 'bio2_s3_img1',
        titleBn: 'মাইটোকন্ড্রিয়ার দ্বৈত ঝিল্লি ও ক্রিস্টি',
        titleEn: 'Ultrastructure of Mitochondrion & Cristae',
        captionBn: 'মসৃণ বহিঃঝিল্লি এবং ভেতরের আঙুলের মতো ভাঁজযুক্ত অন্তঃঝিল্লি (ক্রিস্টি)। ভেতরে জেলিসদৃশ ম্যাট্রিক্স ও এটিপি সিনথেসেস থাকে।',
        captionEn: 'Double-membrane organelle containing folded cristae, matrix, circular DNA, and 70S ribosomes.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ক্রিস্টি (Cristae)',
        labelEn: 'Cristae',
        detailBn: 'অন্তঃমেমব্রেনের ভেতরের দিকের ভাঁজ, যা ইলেকট্রন ট্রান্সপোর্ট চেইনের ক্ষেত্রফল বহুগুণ বৃদ্ধি করে।',
        detailEn: 'Inner mitochondrial folds increasing surface area for oxidative phosphorylation.',
        symbol: 'Cristae',
        badgeType: 'cell',
        position: { x: 45, y: 55 }
      },
      {
        labelBn: 'ম্যাট্রিক্স (Matrix)',
        labelEn: 'Matrix',
        detailBn: 'ভেতরের তরল মাধ্যম যেখানে ক্রেবস চক্রের এনজাইম, নিজস্ব বৃত্তাকার ডিএনএ ও রাইবোসোম থাকে।',
        detailEn: 'Gel-like matrix containing enzymes for Krebs cycle, circular mtDNA, and ribosomes.',
        symbol: 'Matrix',
        badgeType: 'cell',
        position: { x: 65, y: 40 }
      }
    ],
    keyPoints: [
      {
        heading: 'মাইটোকন্ড্রিয়ার আবিষ্কার ও গঠন',
        description: 'বিজ্ঞানী কার্ল বেন্দা (Carl Benda, 1898) প্রথম এর নাম দেন "মাইটোকন্ড্রিয়া"। এটি দ্বৈত মেমব্রেন বেষ্টিত অঙ্গাণু। বহিঃমেমব্রেন মসৃণ ও ছিদ্রযুক্ত; অন্তঃমেমব্রেনটি ভেতরে আঙ্গুলের মতো ভাঁজ হয়ে ক্রিস্টি (Cristae) গঠন করে।',
        highlight: 'দ্বৈত মেমব্রেন, ক্রিস্টি, ম্যাট্রিক্স ও এটিপিসোম'
      },
      {
        heading: 'কেন পাওয়ার হাউজ (Powerhouse) বলা হয়?',
        description: 'সবাত শ্বসনের অত্যন্ত গুরুত্বপূর্ণ দুটি পর্যায়—ক্রেবস চক্র (Krebs cycle) ও ইলেকট্রন ট্রান্সপোর্ট সিস্টেম (ETS) মাইটোকন্ড্রিয়াতে সম্পন্ন হয়। খাদ্য জারিত হয়ে বিপুল পরিমাণ রাসায়নিক শক্তি এটিপি (ATP) রূপে সঞ্চিত হয়।',
        formula: 'C₆H₁₂O₆ + 6O₂ ➔ 6CO₂ + 6H₂O + ৩৮ ATP (শক্তি)'
      },
      {
        heading: 'স্বায়ত্তশাসিত অঙ্গাণু (Semi-autonomous)',
        description: 'মাইটোকন্ড্রিয়ার নিজস্ব বৃত্তাকার ডিএনএ (Circular DNA) এবং 70S রাইবোসোম রয়েছে, যার ফলে এটি সাইটোপ্লাজমে নিজের প্রোটিন আংশিক নিজেই তৈরি করতে পারে ও দ্বি-বিভাজনে সংখ্যা বৃদ্ধি করতে পারে।',
        highlight: 'নিজস্ব বৃত্তাকার ডিএনএ ও রাইবোসোম বিদ্যমান।'
      }
    ],
    callout: {
      type: 'formula',
      title: 'শক্তি উৎপাদনের কেন্দ্র',
      content: 'শ্বসনের পাইরুভিক এসিড জারণ, ক্রেবস চক্র ও অক্সিডেটিভ ফসফোরাইলেশনের মাধ্যমে উৎপন্ন সিংহভাগ এটিপি (ATP) মাইটোকন্ড্রিয়ার ভেতরেই তৈরি হয়। এজন্য প্রতিটি সক্রিয় দেহকোষে গড়ে ৩০০-৪০০টি মাইটোকন্ড্রিয়া থাকে।'
    },
    speakerNotes: 'শিক্ষার্থীদের লক্ষ্য করতে বলুন যে পেশিকোষ বা যকৃতকোষের মতো অত্যন্ত সক্রিয় কোষে মাইটোকন্ড্রিয়ার সংখ্যা হাজার হাজার হতে পারে।',
    recommendedInteractiveTab: 'cellExplorerLab'
  },

  // Slide 4: প্লাস্টিড ও ক্লোরোপ্লাস্ট — খাদ্য তৈরির কারখানা
  {
    id: 4,
    subject: 'biology',
    chapter: 2,
    title: 'প্লাস্টিড ও ক্লোরোপ্লাস্ট — খাদ্য তৈরির কারখানা',
    subtitle: 'Plastids & Chloroplast — The Kitchen of the Plant Cell',
    category: 'সাইটোপ্লাজমীয় অঙ্গাণু',
    gallery: [
      {
        id: 'bio2_s4_img1',
        titleBn: 'ক্লোরোপ্লাস্টের অভ্যন্তরীণ গঠন',
        titleEn: 'Ultrastructure of Chloroplast with Thylakoids',
        captionBn: 'দ্বৈত ঝিল্লি, স্ট্রোমা, থাইলাকয়েড থলে এবং থাইলাকয়েডের স্তূপ বা গ্রানাম (Granum) দ্বারা গঠিত।',
        captionEn: 'Organelle containing stroma, stacked thylakoid grana, circular DNA, and chlorophyll pigments.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'গ্রানাম (Granum)',
        labelEn: 'Granum',
        detailBn: 'মুদ্রার মতো সাজানো থাইলাকয়েডের স্তূপ; এখানে সালোকসংশ্লেষণের আলোক পর্যায় ঘটে।',
        detailEn: 'Stacks of thylakoids where the light-dependent reactions of photosynthesis occur.',
        symbol: 'Granum',
        badgeType: 'cell',
        position: { x: 35, y: 50 }
      },
      {
        labelBn: 'স্ট্রোমা (Stroma)',
        labelEn: 'Stroma',
        detailBn: 'ভেতরের বর্ণহীন জেলিসদৃশ ধাত্র; যেখানে আলোক-নিরপেক্ষ পর্যায়ে শর্করা তৈরি হয়।',
        detailEn: 'Aqueous fluid where Calvin cycle (dark reactions) synthesizes glucose.',
        symbol: 'Stroma',
        badgeType: 'cell',
        position: { x: 70, y: 40 }
      }
    ],
    keyPoints: [
      {
        heading: 'প্লাস্টিডের প্রকারভেদ (Types of Plastids)',
        description: 'উদ্ভিদকোষের অনন্য বৈশিষ্ট্য প্লাস্টিড। বর্ণের ভিত্তিতে এটি ৩ প্রকার:\n১. ক্লোরোপ্লাস্ট (সবুজ): ক্লোরোফিল রঞ্জকযুক্ত, খাদ্য তৈরি করে।\n২. ক্রোমোপ্লাস্ট (রঙিন): ক্যারোটিন ও জ্যান্থোফিলের কারণে ফুল ও ফল রঙিন হয়।\n৩. লিউকোপ্লাস্ট (বর্ণহীন): মূল ও ভূগর্ভস্থ কাণ্ডে খাদ্য সঞ্চয় করে।',
        highlight: 'ক্লোরোপ্লাস্ট (সবুজ), ক্রোমোপ্লাস্ট (রঙিন), লিউকোপ্লাস্ট (বর্ণহীন)'
      },
      {
        heading: 'ক্লোরোপ্লাস্টের গঠন ও কাজ',
        description: 'দ্বৈত ঝিল্লিবিশিষ্ট অঙ্গাণু। স্ট্রোমার ভেতরে ১০-১০০টি থাইলাকয়েডের স্তূপ থাকে যাদের গ্রানাম বলে। গ্রানামে থাকা ক্লোরোফিল অণু সৌরশক্তি শোষণ করে ফটোফসফোরাইলেশনের মাধ্যমে এটিপি ও এনএডিপিএইচ তৈরি করে।',
        formula: '6CO₂ + 6H₂O ──(আলো/ক্লোরোফিল)──➔ C₆H₁₂O₆ + 6O₂'
      },
      {
        heading: 'রূপান্তর ক্ষমতা',
        description: 'আলোর উপস্থিতিতে লিউকোপ্লাস্ট বা ক্রোমোপ্লাস্ট ক্লোরোপ্লাস্টে রূপান্তরিত হতে পারে। যেমন: আলু সূর্যের আলোয় এলে সবুজ বর্ণ ধারণ করে। আবার কাঁচা টমেটোর ক্লোরোপ্লাস্ট পাকার পর লাল লাইকোপেনসমৃদ্ধ ক্রোমোপ্লাস্টে পরিণত হয়।',
        highlight: 'প্লাস্টিডের পারস্পরিক রূপান্তর জীবজগতে অতি সাধারণ।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'প্লাস্টিডের গুরুত্ব',
      content: 'পৃথিবীর সমগ্র প্রাণীকুল তাদের খাদ্যের জন্য প্রত্যক্ষ বা পরোক্ষভাবে ক্লোরোপ্লাস্টের উপর নির্ভরশীল। এটি না থাকলে পৃথিবীতে কোনো বায়ুমণ্ডলীয় অক্সিজেন বা জৈব খাদ্য তৈরি হতো না।'
    },
    speakerNotes: 'শিক্ষার্থীদের বলুন: পৃথিবীর সকল প্রাণীর প্রতি লোকমা খাবার এবং প্রতিটি নিঃশ্বাসের অক্সিজেন এই ক্লোরোপ্লাস্টেরই উপহার।',
    recommendedInteractiveTab: 'cellExplorerLab'
  },

  // Slide 5: এন্ডোপ্লাজমিক জালিকা ও রাইবোসোম
  {
    id: 5,
    subject: 'biology',
    chapter: 2,
    title: 'এন্ডোপ্লাজমিক রেটিকুলাম ও রাইবোসোম',
    subtitle: 'Endoplasmic Reticulum & Ribosomes — Protein & Lipid Synthesis Hub',
    category: 'সাইটোপ্লাজমীয় অঙ্গাণু',
    gallery: [
      {
        id: 'bio2_s5_img1',
        titleBn: 'অমসৃণ ও মসৃণ এন্ডোপ্লাজমিক জালিকা',
        titleEn: 'Rough vs Smooth Endoplasmic Reticulum (RER & SER)',
        captionBn: 'রাইবোসোমযুক্ত অমসৃণ রেটিকুলাম প্রোটিন তৈরি করে; আর রাইবোসোমহীন মসৃণ রেটিকুলাম লিপিড ও হরমোন সংশ্লেষ করে।',
        captionEn: 'Network of folded membranous tubules: Rough ER studded with ribosomes and Smooth ER synthesizing lipids.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'রাইবোসোম',
        labelEn: 'Ribosome',
        detailBn: 'ঝিল্লিবিহীন অঙ্গাণু যা আরএনএ ও প্রোটিন দিয়ে তৈরি; একে প্রোটিন তৈরির কারখানা বলা হয়।',
        detailEn: 'Non-membrane organelle synthesizing polypeptide chains from mRNA.',
        symbol: 'Protein-70S/80S',
        badgeType: 'cell',
        position: { x: 40, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: 'এন্ডোপ্লাজমিক রেটিকুলাম (ER)',
        description: 'সাইটোপ্লাজমে বিস্তৃত নালিকাযুক্ত জালকাকার অঙ্গাণু যা নিউক্লিয়ার আবরণী থেকে প্লাজমা মেমব্রেন পর্যন্ত প্রসারিত থাকে। এটি কোষের অভ্যন্তরীণ কঙ্কাল হিসেবে কাজ করে এবং কোষের ভেতর পদার্থ পরিবহণে সাহায্য করে।',
        highlight: 'কোষের অভ্যন্তরীণ পরিবহণ ও কাঠামোগত ভিত্তি।'
      },
      {
        heading: 'অমসৃণ বনাম মসৃণ ER',
        description: '• অমসৃণ ER (Rough ER): গায়ে অসংখ্য রাইবোসোম দানা লেগে থাকে, তাই এটি প্রোটিন সংশ্লেষণে অংশ নেয়।\n• মসৃণ ER (Smooth ER): গায়ে কোনো রাইবোসোম থাকে না, এটি লিপিড, স্টেরয়েড হরমোন ও গ্লাইকোজেন সংশ্লেষণ করে।',
        highlight: 'Rough ER ➔ প্রোটিন | Smooth ER ➔ লিপিড'
      },
      {
        heading: 'রাইবোসোম (Ribosome) — প্রোটিন ফ্যাক্টরি',
        description: 'জর্জ প্যালাডে (George Palade) ১৯৫৫ সালে এটি আবিষ্কার করেন। এটি কোনো পর্দা দ্বারা আবৃত থাকে না। মেসেঞ্জার আরএনএ (mRNA)-র সংকেত পড়ে অ্যামিনো এসিড জোড়া লাগিয়ে প্রোটিন সংশ্লেষণ করাই এর একমাত্র কাজ।',
        highlight: 'প্রকৃতকোষে 80S (40S + 60S) এবং আদিকোষে 70S (30S + 50S)।'
      }
    ],
    callout: {
      type: 'info',
      title: 'প্রোটিনের পরিবহন পথ',
      content: 'রাইবোসোমে সংশ্লেষিত প্রোটিন এন্ডোপ্লাজমিক রেটিকুলামে প্রবেশ করে ভাঁজ হয়, সেখান থেকে ভেসিকলের মাধ্যমে গলগি বস্তুতে গিয়ে প্যাকেজিং হয় এবং পরিশেষে নির্দিষ্ট গন্তব্যে প্রেরিত হয়।'
    },
    speakerNotes: 'শিক্ষার্থীদের বুঝিয়ে বলুন কীভাবে কোষের ভেতরে ঠিক আধুনিক কুরিয়ার বা ডাক ব্যবস্থার মতো একটি স্বয়ংক্রিয় পরিবহণ নেটওয়ার্ক কাজ করছে।',
    recommendedInteractiveTab: 'cellExplorerLab'
  },

  // Slide 6: গলগি বস্তু ও লাইসোজোম
  {
    id: 6,
    subject: 'biology',
    chapter: 2,
    title: 'গলগি বস্তু ও লাইসোজোম — প্যাকেজিং ও প্রতিরক্ষাকেন্দ্র',
    subtitle: 'Golgi Apparatus & Lysosome — The Traffic Police & Recycling Center',
    category: 'সাইটোপ্লাজমীয় অঙ্গাণু',
    gallery: [
      {
        id: 'bio2_s6_img1',
        titleBn: 'গলগি বস্তু ও লাইসোজোম তৈরি',
        titleEn: 'Golgi Body Cisternae & Lysosome Budding',
        captionBn: 'গলগি বস্তুকে কোষের ট্রাফিক পুলিশ ও প্যাকেজিং কেন্দ্র বলা হয়। লাইসোজোম হাইড্রোলাইটিক এনজাইম ধারণ করে জীবাণু ধ্বংস করে।',
        captionEn: 'Cisternae stacks modifying proteins and budding off digestive lysosomes.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'সিসটার্নি',
        labelEn: 'Cisternae',
        detailBn: 'সমান্তরালভাবে সজ্জিত চ্যাপ্টা থলে যা গলগি বস্তুর মূল গঠন তৈরি করে।',
        detailEn: 'Flattened stacked membrane disks involved in post-translational sorting.',
        symbol: 'Cisterna',
        badgeType: 'cell',
        position: { x: 45, y: 40 }
      },
      {
        labelBn: 'লাইসোজোম',
        labelEn: 'Lysosome',
        detailBn: 'হাইড্রোলাইটিক এনজাইমপূর্ণ থলিকা যা ফ্যাগোসাইটোসিস প্রক্রিয়ায় রোগজীবাণু পরিপাক করে।',
        detailEn: 'Acidic vesicle filled with digestive hydrolytic enzymes.',
        symbol: 'Lytic',
        badgeType: 'cell',
        position: { x: 75, y: 65 }
      }
    ],
    keyPoints: [
      {
        heading: 'গলগি বস্তু (Golgi Body)',
        description: 'বিজ্ঞানী ক্যামিলো গলগি (Camillo Golgi, 1898) পেঁচা ও বিড়ালের মস্তিষ্কের কোষে এটি প্রত্যক্ষ করেন। এটি প্রধানত চ্যাপ্টা সিসটার্নি ও ভেসিকল নিয়ে গঠিত। এনজাইম, হরমোন ও প্রোটিনের রূপান্তর ও প্যাকেজিং নিয়ন্ত্রণ করায় একে কোষের "ট্রাফিক পুলিশ" বলা হয়।',
        highlight: 'কোষের প্যাকেজিং সেন্টার ও কার্বোহাইড্রেট ফ্যাক্টরি।'
      },
      {
        heading: 'লাইসোজোম (Lysosome)',
        description: 'একক পর্দা দ্বারা আবৃত থলে যাতে প্রায় ৪০-৫০ ধরনের তীব্র অম্লীয় হাইড্রোলাইটিক এনজাইম থাকে। ফ্যাগোসাইটোসিস প্রক্রিয়ায় এটি কোষে প্রবেশকারী ব্যাকটেরিয়া ও ভাইরাসকে ধ্বংস করে রোগ প্রতিরোধ করে।',
        highlight: 'জীবাণুনাশক এনজাইমের ধারক।'
      },
      {
        heading: 'স্বগ্রাস বা অটোলাইসিস (Autolysis / Suicidal Bag)',
        description: 'তীব্র খাদ্য সংকট বা অক্সিজেন ঘাটতি হলে লাইসোজোমের পর্দা ফেটে যায় এবং এর এনজাইম বেরিয়ে এসে সম্পূর্ণ কোষটিকে নিজেই পরিপাক করে ধ্বংস করে ফেলে। একারণে একে "আত্মঘাতী থলিকা" (Suicidal bag) বলা হয়।',
        highlight: 'অটোলাইসিসের মাধ্যমে মৃত ও অসুস্থ কোষ অপসারিত হয়।'
      }
    ],
    callout: {
      type: 'warning',
      title: 'লাইসোজোম পর্দা ফেটে গেলে কী হয়?',
      content: 'স্বাভাবিক অবস্থায় লাইসোজোমের ঝিল্লি অত্যন্ত সুরক্ষিত থাকে যাতে এর ভেতরের শক্তিশালী অ্যাসিডিক এনজাইম সাইটোপ্লাজমে ছড়িয়ে না পড়ে। কিন্তু কোষ চরম ক্ষতিগ্রস্ত হলে এটি নিয়ন্ত্রিত কোষীয় মৃত্যু (Apoptosis) ঘটিয়ে পুরো শরীরকে রক্ষা করে।'
    },
    speakerNotes: 'শিক্ষার্থীদের বলুন যে ব্যাঙাচির লেজ খসে পরিণত ব্যাঙে রূপ নেওয়ার পেছনেও লাইসোজোমের অটোলাইসিস কাজ করে।',
    recommendedInteractiveTab: 'cellExplorerLab'
  },

  // Slide 7: সেন্ট্রোসোম, সেন্ট্রিওল ও কোষগহ্বর
  {
    id: 7,
    subject: 'biology',
    chapter: 2,
    title: 'সেন্ট্রোসোম, সেন্ট্রিওল ও কোষগহ্বর',
    subtitle: 'Centrosome, Centrioles & Vacuole Dynamics in Cells',
    category: 'কোষীয় সহায়ক অঙ্গাণু',
    gallery: [
      {
        id: 'bio2_s7_img1',
        titleBn: 'সেন্ট্রিওলের গঠন ও স্পিন্ডল যন্ত্র তৈরি',
        titleEn: 'Centriole Triplet Microtubules & Spindle Poles',
        captionBn: 'প্রাণীকোষের সেন্ট্রিওল কোষ বিভাজনের সময় মাইটোটিক স্পিন্ডল যন্ত্র তৈরি করে ক্রোমোজোমের চলন নিশ্চিত করে।',
        captionEn: 'Pair of cylindrical centrioles made of nine triplet microtubules generating spindle fibers.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'সেন্ট্রিওল',
        labelEn: 'Centriole',
        detailBn: 'নয়টি ত্রয়ী অণুনালিকা (Triplet microtubules) দিয়ে তৈরি ফাঁপা নলাকার অঙ্গাণু।',
        detailEn: 'Cylindrical organelle involved in the development of spindle fibers.',
        symbol: 'Centriole',
        badgeType: 'chromosome',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'কোষগহ্বর',
        labelEn: 'Cell Vacuole',
        detailBn: 'টোনোপ্লাস্ট (Tonoplast) ঝিল্লি দ্বারা আবৃত রসপূর্ণ গহ্বর যা উদ্ভিদকোষের অভিস্রবণিক ভারসাম্য রক্ষা করে।',
        detailEn: 'Large central fluid-filled storage chamber maintaining turgor pressure.',
        symbol: 'Vacuole',
        badgeType: 'cell',
        position: { x: 75, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'সেন্ট্রোসোম ও সেন্ট্রিওল (Centrosome & Centrioles)',
        description: 'প্রধানত প্রাণীকোষে এবং কিছু নিম্নশ্রেণির উদ্ভিদকোষে নিউক্লিয়াসের কাছে সেন্ট্রোসোম থাকে। সেন্ট্রোস্ফিয়ারের মধ্যে একজোড়া ফাঁপা বেলনাকার সেন্ট্রিওল অবস্থান করে। এটি কোষ বিভাজনে স্পিন্ডল তন্তু তৈরি করে এবং শুক্রাণুর লেজ গঠন করে।',
        highlight: 'প্রাণীকোষ বিভাজনে স্পিন্ডল যন্ত্র সৃষ্টির উৎস।'
      },
      {
        heading: 'কোষগহ্বর (Cell Vacuole)',
        description: 'সাইটোপ্লাজমে বিদ্যমান ফাঁকা তরলপূর্ণ স্থান। উদ্ভিদকোষে কোষগহ্বর অত্যন্ত বিশাল ও কেন্দ্রীয়ভাবে অবস্থিত, যা নিউক্লিয়াসকে একপাশে ঠেলে দেয়। প্রাণীকোষে কোষগহ্বর সাধারণত অনুপস্থিত, থাকলেও সংখ্যায় কম ও খুব ছোট।',
        highlight: 'টোনোপ্লাস্ট (Tonoplast) ঝিল্লি দ্বারা বেষ্টিত।'
      },
      {
        heading: 'কোষগহ্বরের কাজ',
        description: '১. কোষরস (Cell sap) ধারণ করা, যার মধ্যে পানি, খনিজ লবণ, শর্করা ও জৈব অ্যাসিড দ্রবীভূত থাকে।\n২. কোষের স্ফীতিচাপ (Turgor pressure) ও অভিস্রবণিক চাপ বজায় রেখে উদ্ভিদ অঙ্গকে দৃঢ় রাখা।',
        highlight: 'উদ্ভিদকোষের রসস্ফীতি ও ক্ষতিকর বর্জ্য সঞ্চয়।'
      }
    ],
    callout: {
      type: 'info',
      title: 'টোনোপ্লাস্ট কী?',
      content: 'উদ্ভিদকোষের কেন্দ্রীয় বৃহৎ কোষগহ্বরটিকে ঘিরে থাকা বিশেষ বৈষম্যভেদ্য সজীব ঝিল্লিকে টোনোপ্লাস্ট (Tonoplast) বলে। এটি সাইটোপ্লাজম ও কোষরসের মধ্যে দ্রব্যের চলাচল সুনির্দিষ্টভাবে নিয়ন্ত্রণ করে।'
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন যে পানি না পেলে গাছ নেতিয়ে পড়ে কারণ কোষগহ্বরে পানি কমে গিয়ে স্ফীতিচাপ হ্রাস পায়।',
    recommendedInteractiveTab: 'cellExplorerLab'
  },

  // Slide 8: নিউক্লিয়াস — কোষের প্রাণকেন্দ্র
  {
    id: 8,
    subject: 'biology',
    chapter: 2,
    title: 'নিউক্লিয়াস — কোষের প্রাণকেন্দ্র',
    subtitle: 'Nucleus — The Master Control Center of Cellular Life',
    category: 'নিউক্লিয়াস ও জেনেটিক্স',
    gallery: [
      {
        id: 'bio2_s8_img1',
        titleBn: 'নিউক্লিয়াসের ৪টি প্রধান উপাদান',
        titleEn: 'Four Structural Components of the Cell Nucleus',
        captionBn: 'নিউক্লিয়ার মেমব্রেন, নিউক্লিওপ্লাজম, নিউক্লিওলাস এবং ক্রোমাটিন জালিকা—এই চারটি মূল অংশ নিয়ে সুগঠিত নিউক্লিয়াস গঠিত।',
        captionEn: 'Nuclear envelope with pores, nucleoplasm, dense nucleolus, and chromatin network.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'নিউক্লিয়ার রন্ধ্র',
        labelEn: 'Nuclear Pore',
        detailBn: 'মেমব্রেনের সূক্ষ্ম ছিদ্র যা নিউক্লিয়াস ও সাইটোপ্লাজমের মধ্যে আরএনএ ও প্রোটিনের চলাচল নিয়ন্ত্রণ করে।',
        detailEn: 'Protein-lined channel regulating macromolecular exchange with cytoplasm.',
        symbol: 'Pore',
        badgeType: 'cell',
        position: { x: 20, y: 35 }
      },
      {
        labelBn: 'নিউক্লিওলাস',
        labelEn: 'Nucleolus',
        detailBn: 'নিউক্লিয়াসের ভেতরে অপেক্ষাকৃত ঘন ও অন্ধকার গোলাকার অংশ, যা রাইবোসোমাল আরএনএ (rRNA) তৈরি করে।',
        detailEn: 'Dense subnuclear body site of ribosomal RNA synthesis and ribosome assembly.',
        symbol: 'Nucleolus',
        badgeType: 'gene',
        position: { x: 50, y: 55 }
      },
      {
        labelBn: 'ক্রোমাটিন জালিকা',
        labelEn: 'Chromatin',
        detailBn: 'ডিএনএ ও হিস্টোন প্রোটিন নির্মিত সুতার জালক যা কোষ বিভাজনের সময় স্পষ্ট ক্রোমোজোম গঠন করে।',
        detailEn: 'Complex of genomic DNA and histone proteins condensing into chromosomes.',
        symbol: 'DNA/Chr',
        badgeType: 'chromosome',
        position: { x: 75, y: 40 }
      }
    ],
    keyPoints: [
      {
        heading: 'নিউক্লিয়াসের আবিষ্কার ও পরিচয়',
        description: '১৮৩১ সালে বিজ্ঞানী রবার্ট ব্রাউন (Robert Brown) অর্কিড পাতার কোষে প্রথম নিউক্লিয়াস প্রত্যক্ষ ও নামকরণ করেন। কোষের যাবতীয় জৈবনিক ক্রিয়া ও বংশগতি পরিচালনা করায় একে কোষের "মস্তিষ্ক" বা প্রাণকেন্দ্র বলা হয়।',
        highlight: 'কোষের সকল বিপাকীয় কর্মকাণ্ড ও প্রজননের নিয়ন্ত্রক।'
      },
      {
        heading: 'নিউক্লিয়াসের ৪টি প্রধান গাঠনিক উপাদান',
        description: '১. নিউক্লিয়ার আবরণী: দ্বিস্তরী মেমব্রেন যাতে নিউক্লিয়ার রন্ধ্র (Pores) থাকে।\n২. নিউক্লিওপ্লাজম: স্বচ্ছ জেলিসদৃশ ক্যালিওলিম্ফ তরল।\n৩. নিউক্লিওলাস: ঘন গোলক যা রাইবোসোম ও আরএনএ তৈরি করে।\n৪. ক্রোমাটিন তন্তু: ডিএনএযুক্ত সুতা যা বংশগতির নকশা ধারণ করে।',
        highlight: 'আবরণী, নিউক্লিওপ্লাজম, নিউক্লিওলাস ও ক্রোমাটিন তন্তু।'
      },
      {
        heading: 'নিউক্লিয়াসবিহীন সজীব কোষ',
        description: 'উন্নত স্তন্যপায়ী প্রাণীর পরিণত লোহিত রক্তকণিকা (RBC) এবং আবৃতবীজী উদ্ভিদের পরিণত সিভনলে (Sieve tube) সক্রিয় নিউক্লিয়াস থাকে না। ফলে এদের আয়ুষ্কাল সুনির্দিষ্ট ও সীমিত।',
        highlight: 'পরিণত মানব লোহিত কণিকায় নিউক্লিয়াস থাকে না।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'পরীক্ষার গুরুত্বপূর্ণ তথ্য',
      content: 'একটি কোষে সাধারণত একটিই নিউক্লিয়াস থাকে। তবে কিছু শৈবাল (Vaucheria), ছত্রাক (Mucor) এবং প্রাণীর অস্থির কোষে একাধিক নিউক্লিয়াস থাকে। বহু নিউক্লিয়াসযুক্ত উদ্ভিদকোষকে "সিনোসাইট" (Coenocyte) এবং প্রাণীকোষকে "সিনসিসিয়াম" (Syncytium) বলে।'
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন যে নিউক্লিয়াস ছাড়া কোনো কোষ দীর্ঘকাল জীবিত থাকতে পারে না, কারণ প্রোটিন তৈরির মূল ব্লুপ্রিন্ট ডিএনএ নিউক্লিয়াসেই থাকে।',
    recommendedInteractiveTab: 'cellExplorerLab'
  },

  // Slide 9: ক্রোমোজোম, ডিএনএ ও জিন
  {
    id: 9,
    subject: 'biology',
    chapter: 2,
    title: 'ক্রোমোজোম, ডিএনএ ও জিন — বংশগতির মূল ভিত্তি',
    subtitle: 'Chromosomes, DNA Double Helix & Genes — The Blueprint of Heredity',
    category: 'নিউক্লিয়াস ও জেনেটিক্স',
    gallery: [
      {
        id: 'bio2_s9_img1',
        titleBn: 'ক্রোমোজোম থেকে ডিএনএ ডাবল হেলিক্স',
        titleEn: 'Chromosome Condensation to DNA Double Helix',
        captionBn: 'ক্রোমোজোম কুন্ডলিত হয়ে হিস্টোন প্রোটিনের সাথে নিউক্লিওসোম গঠন করে এবং মূল ডিএনএ অণু ডাবল হেলিক্স আকারে থাকে।',
        captionEn: 'Hierarchical packaging of genomic DNA into nucleosomes, chromatin fiber, and metaphase chromosome.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'সেন্ট্রোমিয়ার',
        labelEn: 'Centromere',
        detailBn: 'ক্রোমোজোমের খাঁজযুক্ত অংশ যা স্পিন্ডল তন্তুর সাথে কাইনেটোকোরের সাহায্যে যুক্ত হয়।',
        detailEn: 'Primary constriction site binding kinetochore and spindle fibers during division.',
        symbol: 'Centromere',
        badgeType: 'chromosome',
        position: { x: 35, y: 45 }
      },
      {
        labelBn: 'ডিএনএ ডাবল হেলিক্স',
        labelEn: 'DNA Double Helix',
        detailBn: 'ওয়াটসন ও ক্রিক (Watson & Crick, 1953) আবিষ্কৃত দ্বি-সূত্রক প্যাঁচানো সিঁড়ির মতো গঠন।',
        detailEn: 'Antiparallel double-stranded genetic polymer composed of nucleotides (A-T, G-C).',
        symbol: 'DNA',
        badgeType: 'gene',
        position: { x: 75, y: 55 }
      }
    ],
    keyPoints: [
      {
        heading: 'ক্রোমোজোমের পরিচয় ও সংখ্যা',
        description: 'বিজ্ঞানী স্ট্রাসবার্গার (Strasburger, 1875) প্রথম ক্রোমোজোম আবিষ্কার করেন এবং ওয়ালডায়ার (Waldeyer, 1888) এর নাম দেন। প্রতিটি প্রজাতির কোষে ক্রোমোজোম সংখ্যা নির্দিষ্ট। মানুষের দেহকোষে ২৩ জোড়া (৪৬টি) ক্রোমোজোম থাকে (২২ জোড়া অটোসোম + ১ জোড়া সেক্স ক্রোমোজোম)।',
        highlight: 'মানুষের ক্রোমোজোম সংখ্যা: ৪৬টি (২৩ জোড়া)'
      },
      {
        heading: 'ডিএনএ (DNA) — জীবনের আণবিক নকশা',
        description: 'ডিঅক্সিরাইবোনিউক্লিক এসিড (DNA) হলো বংশগতির মূল রাসায়নিক ভিত্তি। এটি ডিঅক্সিরাইবোজ সুগার, ফসফেট এবং ৪ ধরনের নাইট্রোজেন ঘটিত ক্ষারক (এডেনিন A, গুয়ানিন G, সাইটোসিন C, থাইমিন T) নিয়ে গঠিত। ক্ষারকগুলো হাইড্রোজেন বন্ধন দিয়ে জোড় বাঁধে: A = T এবং G ≡ C।',
        highlight: 'এডেনিন সর্বদা থাইমিনের সাথে এবং গুয়ানিন সাইটোসিনের সাথে যুক্ত হয়।'
      },
      {
        heading: 'জিন (Gene) কী?',
        description: 'ডিএনএ অণুর যে নির্দিষ্ট খণ্ডাংশ একটি নির্দিষ্ট প্রোটিন তৈরির সংকেত বহন করে জীবের একটি নির্দিষ্ট বৈশিষ্ট্য প্রকাশ করে, তাকে জিন (Gene) বলে। গ্রেগর জোহান মেন্ডেলকে বংশগতিবিদ্যার জনক বলা হয়।',
        highlight: 'জীবের সকল চারিত্রিক ও বংশগত বৈশিষ্ট্যের নিয়ন্ত্রক হলো জিন।'
      }
    ],
    callout: {
      type: 'info',
      title: 'ডিএনএ সিঁড়ির মাপজোখ',
      content: 'ডিএনএ ডাবল হেলিক্সের প্রতিটি পূর্ণ প্যাঁচের দৈর্ঘ্য ৩৪ Å (৩.৪ ন্যানোমিটার) এবং এতে ১০ জোড়া ক্ষারক থাকে। দুটি ক্ষারক জোড়ের মধ্যকার দূরত্ব ৩.৪ Å এবং পুরো ডাবল হেলিক্সের ব্যাস ২০ Å (২ ন্যানোমিটার)।'
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন যে মাত্র ৪টি নাইট্রোজেন বেস (A, T, G, C)-এর বিন্যাস ক্রম পরিবর্তনের মাধ্যমেই পৃথিবীর লক্ষ লক্ষ প্রজাতির মধ্যে বৈচিত্র্য তৈরি হয়েছে।',
    recommendedInteractiveTab: 'cellExplorerLab'
  },

  // Slide 10: উদ্ভিদ টিস্যু — সরল টিস্যু
  {
    id: 10,
    subject: 'biology',
    chapter: 2,
    title: 'উদ্ভিদ টিস্যু — সরল টিস্যুর শ্রেণিবিভাগ',
    subtitle: 'Plant Tissues — Simple Permanent Tissues (Parenchyma, Collenchyma, Sclerenchyma)',
    category: 'উদ্ভিদ ও প্রাণি টিস্যু',
    gallery: [
      {
        id: 'bio2_s10_img1',
        titleBn: '৩ প্রকার সরল টিস্যুর অনুচ্ছেদের তুলনা',
        titleEn: 'Comparison of Parenchyma, Collenchyma & Sclerenchyma',
        captionBn: 'প্যারেনকাইমা পাতলা প্রাচীরযুক্ত সজীব টিস্যু; কোলেনকাইমা অসমভাবে পুরু; এবং স্ক্লেরেনকাইমা মৃত ও লিগনিনযুক্ত অত্যন্ত শক্ত টিস্যু।',
        captionEn: 'Microscopic sections of thin-walled parenchyma, pectin-thickened collenchyma, and lignified sclerenchyma.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'প্যারেনকাইমা',
        labelEn: 'Parenchyma',
        detailBn: 'সমব্যাসের সজীব কোষ, পাতলা সেলুলোজ প্রাচীর ও স্পষ্ট আন্তঃকোষীয় ফাঁক থাকে। খাদ্য তৈরি ও সঞ্চয় করে।',
        detailEn: 'Living isodiametric cells with thin walls; primary sites of photosynthesis and storage.',
        symbol: 'Parenchyma',
        badgeType: 'cell',
        position: { x: 25, y: 50 }
      },
      {
        labelBn: 'স্ক্লেরেনকাইমা',
        labelEn: 'Sclerenchyma',
        detailBn: 'লিগনিনযুক্ত অতিপুরু মৃত কোষ, কোনো প্রোটোপ্লাজম থাকে না। উদ্ভিদকে দৃঢ়তা ও যান্ত্রিক শক্তি যোগায়।',
        detailEn: 'Dead cells with heavily lignified secondary walls providing structural rigidity.',
        symbol: 'Sclerenchyma',
        badgeType: 'cell',
        position: { x: 75, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'টিস্যু (Tissue) কী?',
        description: 'একই উৎপত্তি বিশিষ্ট, একই রকম বা বিভিন্ন আকারের একগুচ্ছ কোষ যখন একত্রিত হয়ে নির্দিষ্ট কোনো শারীরবৃত্তীয় কাজ সম্পাদন করে, তখন সেই কোষগুচ্ছকে টিস্যু বা কলা (Tissue) বলে।',
        highlight: 'টিস্যুর প্রধান দুই প্রকার: ভাজক টিস্যু (Meristematic) ও স্থায়ী টিস্যু (Permanent)।'
      },
      {
        heading: 'সরল টিস্যু (Simple Tissue)',
        description: 'যে স্থায়ী টিস্যুর প্রতিটি কোষ আকার, আকৃতি ও গঠনের দিক থেকে একই রকম, তাকে সরল টিস্যু বলে। এটি ৩ প্রকার:\n১. প্যারেনকাইমা: পাতলা সেলুলোজ প্রাচীরযুক্ত সজীব কোষ। ক্লোরোপ্লাস্ট থাকলে একে ক্লোরেনকাইমা এবং জলজ উদ্ভিদে বড় বায়ুকুঠুরি থাকলে এরেনকাইমা বলে।\n২. কোলেনকাইমা: সেলুলোজ ও পেকটিন জমা হয়ে কোণায় কোণায় অসমভাবে পুরু হয়। যেমন কচি কাণ্ড ও পাতার বোঁটা।\n৩. স্ক্লেরেনকাইমা: লিগনিন জমা হয়ে প্রাচীর অত্যন্ত পুরু ও শক্ত হয়; পরিণত অবস্থায় প্রোটোপ্লাজমবিহীন মৃত কোষ। যেমন ফাইবার ও স্ক্লেরাইড (পাথুরে কোষ)।',
        highlight: 'প্যারেনকাইমা (সঞ্চয়), কোলেনকাইমা (নমনীয়তা), স্ক্লেরেনকাইমা (দৃঢ়তা)'
      }
    ],
    tableData: {
      caption: 'তিন প্রকার সরল টিস্যুর বৈশিষ্ট্যভিত্তিক তুলনা',
      headers: ['বৈশিষ্ট্য', 'প্যারেনকাইমা', 'কোলেনকাইমা', 'স্ক্লেরেনকাইমা'],
      rows: [
        ['সজীবতা', 'সজীব (প্রোটোপ্লাজমপূর্ণ)', 'সজীব (প্রোটোপ্লাজমযুক্ত)', 'মৃত (পরিপক্ব অবস্থায় প্রোটোপ্লাজমশূন্য)'],
        ['প্রাচীরের প্রকৃতি', 'পাতলা ও সমপুরু (সেলুলোজ)', 'অসমপুরু (কোণায় পেকটিন জমা)', 'অত্যন্ত পুরু ও শক্ত (লিগনিনযুক্ত)'],
        ['আন্তঃকোষীয় ফাঁক', 'বিদ্যমান ও স্পষ্ট', 'খুব কম বা অনুপস্থিত', 'সম্পূর্ণ অনুপস্থিত'],
        ['প্রধান কাজ', 'খাদ্য তৈরি, সঞ্চয় ও পরিবহণ', 'কচি কাণ্ডকে নমনীয় দৃঢ়তা প্রদান', 'উদ্ভিদদেহকে কঠোর যান্ত্রিক দৃঢ়তা দান']
      ]
    },
    callout: {
      type: 'tip',
      title: 'পাথুরে কোষ বা স্ক্লেরাইড',
      content: 'নাশপাতি বা পেয়ারা খাওয়ার সময় যে শক্ত দানাদার অনুভূতি হয়, তা মূলত স্ক্লেরেনকাইমা টিস্যুর অন্তর্গত স্ক্লেরাইড (Sclereid) বা স্টোন সেল (Stone cell)-এর উপস্থিতির কারণে ঘটে।'
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন যে পাটশাকের পাতা হলো প্যারেনকাইমা, কাণ্ড বাঁকানো যায় কোলেনকাইমার গুণে এবং পাটের শক্ত সোনালী আঁশ হলো স্ক্লেরেনকাইমা ফাইবার।',
    recommendedInteractiveTab: 'cellExplorerLab'
  },

  // Slide 11: জটিল টিস্যু — জাইলেম ও ফ্লোয়েম
  {
    id: 11,
    subject: 'biology',
    chapter: 2,
    title: 'জটিল টিস্যু — জাইলেম ও ফ্লোয়েম সংবহন তন্ত্র',
    subtitle: 'Complex Vascular Tissues — Xylem & Phloem Transport System',
    category: 'উদ্ভিদ ও প্রাণি টিস্যু',
    gallery: [
      {
        id: 'bio2_s11_img1',
        titleBn: 'জাইলেম ও ফ্লোয়েমের উপাদানসমূহ',
        titleEn: 'Vascular Bundle Elements: Xylem & Phloem',
        captionBn: 'জাইলেম মূল থেকে পানি ও খনিজ লবণ পাতায় উর্ধ্বমুখী পরিবহন করে; আর ফ্লোয়েম পাতায় তৈরি খাদ্য সারা দেহে উভমুখী পরিবহন করে।',
        captionEn: 'Xylem conducting water and minerals upwards; Phloem translocating synthesized carbohydrates throughout plant.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ভেসেল (Vessel)',
        labelEn: 'Vessel Member',
        detailBn: 'নলাকার কোষ যাদের প্রান্তীয় প্রাচীর গলে গিয়ে একটি অবিচ্ছিন্ন পানির পাইপলাইন তৈরি করে।',
        detailEn: 'Perforated tubular cell facilitating rapid upward conduction of water in angiosperms.',
        symbol: 'Vessel',
        badgeType: 'cell',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'সিভনল ও সঙ্গীকোষ',
        labelEn: 'Sieve Tube & Companion Cell',
        detailBn: 'সিভপ্লেটযুক্ত নালিকা যার মাধ্যমে প্রস্তুতকৃত শর্করা খাদ্য পরিবাহিত হয়; সঙ্গীকোষ এর কাজ নিয়ন্ত্রণ করে।',
        detailEn: 'Living enucleated sieve cells assisted by metabolically active companion cells.',
        symbol: 'Sieve',
        badgeType: 'cell',
        position: { x: 70, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'জটিল টিস্যু (Complex Tissue) কী?',
        description: 'একাধিক ভিন্ন ভিন্ন ধরণের কোষ নিয়ে গঠিত যে স্থায়ী টিস্যু সামগ্রিকভাবে একটি যৌথ কাজ সম্পন্ন করে, তাকে জটিল টিস্যু বলে। জাইলেম ও ফ্লোয়েম একত্রে উদ্ভিদের সংবহন পুল বা ভাস্কুলার বান্ডল (Vascular bundle) গঠন করে।',
        highlight: 'উদ্ভিদের পানি ও খাদ্য পরিবহণের মূল পাইপলাইন।'
      },
      {
        heading: 'জাইলেম টিস্যু (Xylem)',
        description: 'মূলরোম কর্তৃক শোষিত পানি ও খনিজ লবণ পাতায় পৌঁছে দেয়। এর ৪টি উপাদান:\n১. ট্রাকিড: ছুঁচালো প্রান্তযুক্ত মৃত কোষ।\n২. ভেসেল: নলাকার প্রান্তগলা নল (উন্নত আবৃতবীজীর প্রধান পরিবাহক)।\n৩. জাইলেম প্যারেনকাইমা বা উড প্যারেনকাইমা: একমাত্র সজীব উপাদান।\n৪. জাইলেম ফাইবার বা উড ফাইবার: যান্ত্রিক দৃঢ়তাদানকারী মৃত তন্তু।',
        highlight: 'পানি ও খনিজের একমুখী উর্ধ্বমুখী (Upward) পরিবহণ।'
      },
      {
        heading: 'ফ্লোয়েম টিস্যু (Phloem)',
        description: 'পাতায় তৈরি জৈব খাদ্য উদ্ভিদের প্রতিটি কোষে পৌঁছে দেয়। এর ৪টি উপাদান:\n১. সিভনল: পরিণত অবস্থায় নিউক্লিয়াসবিহীন চালুনির মতো সিভপ্লেটযুক্ত কোষ।\n২. সঙ্গীকোষ: বড় নিউক্লিয়াসযুক্ত সজীব প্যারেনকাইমা যা সিভনলের কার্য পরিচালনা করে।\n৩. ফ্লোয়েম প্যারেনকাইমা: খাদ্য সঞ্চয়কারী সজীব কোষ।\n৪. ফ্লোয়েম ফাইবার বা বাস্ট ফাইবার: পাটের আঁশ এর উৎকৃষ্ট উদাহরণ।',
        highlight: 'প্রস্তুত খাদ্যের দ্বিমুখী (উভমুখী) পরিবহণ।'
      }
    ],
    callout: {
      type: 'info',
      title: 'বাস্ট ফাইবার (Bast Fiber)',
      content: 'পাট গাছের বাকল পচিয়ে আমরা যে সোনালী আঁশ সংগ্রহ করি, তা উদ্ভিদ শারীরতত্ত্বে ফ্লোয়েম ফাইবার বা বাস্ট ফাইবার নামে পরিচিত। এটি অত্যন্ত শক্তিশালী অর্থনৈতিক স্ক্লেরেনকাইমা ফাইবার।'
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন যে জাইলেমের পানি পরিবহণ হয় কেবল নিচ থেকে উপরে (একমুখী), কিন্তু ফ্লোয়েমের খাদ্য পরিবহণ হয় সারা দেহে সবদিকে (উভমুখী)।',
    recommendedInteractiveTab: 'cellExplorerLab'
  },

  // Slide 12: প্রাণি টিস্যুর প্রাথমিক রূপরেখা
  {
    id: 12,
    subject: 'biology',
    chapter: 2,
    title: 'প্রাণি টিস্যুর প্রাথমিক রূপরেখা',
    subtitle: 'Overview of Animal Tissues — Epithelial, Connective, Muscular & Nervous',
    category: 'উদ্ভিদ ও প্রাণি টিস্যু',
    gallery: [
      {
        id: 'bio2_s12_img1',
        titleBn: 'প্রাণি টিস্যুর ৪টি প্রধান প্রকারভেদ',
        titleEn: 'Four Primary Animal Tissue Types',
        captionBn: 'গঠন ও কাজের ভিত্তিতে প্রাণি টিস্যু চার প্রকার: আবরণী টিস্যু, যোজক টিস্যু, পেশি টিস্যু ও স্নায়ু টিস্যু।',
        captionEn: 'Classification into epithelial, connective, muscular, and nervous tissues in animals.',
        type: 'diagram'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'আবরণী টিস্যু',
        labelEn: 'Epithelial Tissue',
        detailBn: 'দেহের উন্মুক্ত তল ও অভ্যন্তরীণ অঙ্গের বহির্ভাগ আবৃত রাখে। যেমন: ত্বক ও খাদ্যনালীর প্রাচীর।',
        detailEn: 'Protective sheets covering body surfaces and lining internal cavities.',
        symbol: 'Epithelium',
        badgeType: 'cell',
        position: { x: 25, y: 35 }
      },
      {
        labelBn: 'যোজক টিস্যু',
        labelEn: 'Connective Tissue',
        detailBn: 'বিভিন্ন অঙ্গের মধ্যে সংযোগ রক্ষা করে ও কাঠামো দেয়। যেমন: রক্ত, তরুণাস্থি ও অস্থি।',
        detailEn: 'Tissue binding and supporting structures: blood, cartilage, bone.',
        symbol: 'Bone/Blood',
        badgeType: 'cell',
        position: { x: 75, y: 35 }
      },
      {
        labelBn: 'পেশি টিস্যু',
        labelEn: 'Muscular Tissue',
        detailBn: 'সংকোচন ও প্রসারণের মাধ্যমে প্রাণীর অঙ্গ সঞ্চালন ও চলন ঘটায়। ঐচ্ছিক, অনৈচ্ছিক ও হৃদপেশি।',
        detailEn: 'Contractile tissue responsible for voluntary and involuntary motility.',
        symbol: 'Muscle',
        badgeType: 'cell',
        position: { x: 25, y: 70 }
      },
      {
        labelBn: 'স্নায়ু টিস্যু',
        labelEn: 'Nervous Tissue',
        detailBn: 'উদ্দীপনা গ্রহণ ও পরিবাহিত করে দ্রুত সাড়া প্রদান করে। প্রধান কার্যকরী একক হলো নিউরন।',
        detailEn: 'Specialized tissue coordinating sensory signals and motor reflexes via neurons.',
        symbol: 'Neuron',
        badgeType: 'cell',
        position: { x: 75, y: 70 }
      }
    ],
    keyPoints: [
      {
        heading: 'প্রাণি টিস্যুর প্রধান ৪টি শ্রেণি',
        description: '১. আবরণী টিস্যু (Epithelial): ভিত্তি পর্দার ওপর সাজানো থেকে অঙ্গ রক্ষা, ক্ষরণ ও শোষণ করে।\n২. যোজক টিস্যু (Connective): প্রচুর ধাত্রযুক্ত টিস্যু যা অঙ্গের সংযোগ ও ভার বহন করে (তরল যোজক টিস্যু হলো রক্ত ও লসিকা)।\n৩. পেশি টিস্যু (Muscular): মায়োফাইব্রিল ধারণকারী সংকোচনশীল টিস্যু যা চলনে সাহায্য করে।\n৪. স্নায়ু টিস্যু (Nervous): নিউরন দ্বারা গঠিত যা পরিবেশের অনুভূতি মস্তিষ্কে বহন করে।',
        highlight: 'আবরণী, যোজক, পেশি ও স্নায়ু টিস্যু।'
      },
      {
        heading: 'রক্ত — বিশেষ তরল যোজক টিস্যু',
        description: 'রক্ত একটি ক্ষারীয়, লবণাক্ত ও লাল বর্ণের তরল যোজক টিস্যু। এতে প্রায় ৫৫% রক্তরস (Plasma) এবং ৪৫% রক্তকণিকা (লোহিত কণিকা, শ্বেত কণিকা ও অণুচক্রিকা) থাকে। এটি দেহের গ্যাসীয় পরিবহণ ও রোগ প্রতিরোধে মূখ্য ভূমিকা রাখে।',
        highlight: 'রক্ত হলো তরল যোজক টিস্যু (Connective tissue)।'
      },
      {
        heading: 'নিউরন — স্নায়ুতন্ত্রের একক',
        description: 'স্নায়ুতন্ত্রের গঠন ও কাজের একক হলো নিউরন। এটি ডেনড্রাইট, কোষদেহ ও অ্যাক্সন নিয়ে গঠিত। সাইন্যাপসের মাধ্যমে এক নিউরন থেকে অন্য নিউরনে রাসায়নিক ও বৈদ্যুতিক স্নায়ু-উদ্দীপনা সঞ্চালিত হয়।',
        highlight: 'ডেনড্রাইট (সংকেত গ্রহণ) ➔ অ্যাক্সন (সংকেত প্রেরণ)'
      }
    ],
    callout: {
      type: 'tip',
      title: 'অধ্যায় ২ এর সারসংক্ষেপ',
      content: 'কোষ হলো জীবদেহের অণুপরমাণু স্তরের জীবন্ত কারখানা; আর এই কোষগুলো সম্মিলিত হয়ে গড়ে তোলে টিস্যু, অঙ্গ ও সম্পূর্ণ জীবদেহ। কোষের সুস্থতা ও সমন্বয়ের ওপরই নির্ভর করে সম্পূর্ণ প্রাণের অস্তিত্ব।'
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন যে একটি একক ফার্টিলাইজড ডিম্বাণু (জাইগোট) থেকেই ক্রমাগত বিভাজন ও টিস্যু রূপান্তরের মাধ্যমে মানুষের ৩০-৪০ ট্রিলিয়ন কোষের বিশাল শরীর গড়ে ওঠে।',
    recommendedInteractiveTab: 'cellExplorerLab'
  }
];
