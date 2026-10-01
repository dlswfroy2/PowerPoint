import { Slide } from '../types/presentation';

export const chapter4Slides: Slide[] = [
  {
    id: 1,
    chapter: 4,
    title: 'অধ্যায় ৪: পর্যায় সারণি',
    subtitle: 'Periodic Table of Elements — রসায়নজগতের সার্বজনীন মানচিত্র ও মৌলসমূহের সুশৃঙ্খল বিন্যাস',
    category: 'সূচনা ও প্রেক্ষাপট',
    gallery: [
      {
        id: 'c4_s1_img1',
        titleBn: 'আধুনিক পর্যায় সারণির রূপরেখা',
        titleEn: 'Modern Periodic Table Layout',
        captionBn: '১১৮টি মৌল ৭টি পর্যায় ও ১৮টি গ্রুপে তাদের রাসায়নিক ধর্মের পর্যায়ক্রমিক পরিবর্তন অনুসারে সুবিন্যস্ত',
        captionEn: '118 elements arranged into 7 periods and 18 groups showing periodic recurrences of properties',
        type: 'diagram',
        customDiagramType: 'periodicMini'
      },
      {
        id: 'c4_s1_img2',
        url: '/src/assets/images/elements_compounds_1790751385322.jpg',
        titleBn: 'মৌলসমূহের প্রাকৃতিক প্রাচুর্য ও বৈচিত্র্য',
        titleEn: 'Natural Elements & Diversity',
        captionBn: 'ধাতু, অধাতু ও অপধাতুর ভৌত ও রাসায়নিক বৈচিত্র্যের একক প্রাতিষ্ঠানিক রূপ',
        captionEn: 'Unified structural framework reflecting physical and chemical properties of all elements',
        type: 'photo'
      },
      {
        id: 'c4_s1_img3',
        titleBn: 'পর্যায়বৃত্ত ধর্মের গতিশীল ধারা',
        titleEn: 'Periodic Trends Overview',
        captionBn: 'পারমাণবিক ব্যাসার্ধ, আয়নীকরণ বিভব ও তড়িৎ ঋণাত্মকতার নিয়মতান্ত্রিক ছন্দ',
        captionEn: 'Systematic trends in atomic radius, ionization energy, and electronegativity',
        type: 'diagram',
        customDiagramType: 'periodicTrends'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: '১৮টি গ্রুপ (Groups)',
        labelEn: '18 Vertical Groups',
        symbol: 'G 1-18',
        detailBn: 'পর্যায় সারণির উলম্ব কলামসমূহকে গ্রুপ বলে। একই গ্রুপের মৌলসমূহের যোজ্যতা ও রাসায়নিক ধর্ম প্রায় অভিন্ন।',
        detailEn: 'Vertical columns. Elements in the same group possess identical valence electron configurations.',
        badgeType: 'periodic',
        position: { x: 30, y: 35 }
      },
      {
        labelBn: '৭টি পর্যায় (Periods)',
        labelEn: '7 Horizontal Periods',
        symbol: 'P 1-7',
        detailBn: 'পর্যায় সারণির অনুভূমিক সারিগুলোকে পর্যায় বলে। বাম থেকে ডানে গেলে মৌলের ধাতব ধর্ম হ্রাস ও অধাতব ধর্ম বৃদ্ধি পায়।',
        detailEn: 'Horizontal rows. Moving left to right shows a systematic decrease in metallic character.',
        badgeType: 'periodic',
        position: { x: 70, y: 65 }
      }
    ],
    keyPoints: [
      {
        heading: 'পর্যায় সারণি কী? (What is Periodic Table?)',
        description: 'সদৃশ ও বৈসদৃশ ধর্মের ভিত্তিতে এ পর্যন্ত আবিষ্কৃত ১১৮টি রাসায়নিক মৌলকে ৭টি অনুভূমিক সারি (পর্যায়) এবং ১৮টি উলম্ব স্তম্ভে (গ্রুপ) বিন্যস্ত করে যে আন্তর্জাতিক সারণি তৈরি করা হয়েছে, তাকে পর্যায় সারণি (Periodic Table) বলে।',
        highlight: '১১৮টি মৌল, ৭টি পর্যায়, ১৮টি গ্রুপ'
      },
      {
        heading: 'পর্যায় সারণির উদ্দেশ্য ও সুবিধা',
        description: '১১৮টি মৌলের প্রতিটি এবং তাদের কোটি কোটি যৌগের ধর্ম আলাদাভাবে মুখস্থ না করে, মাত্র ১৮টি গ্রুপের সাধারণ বৈশিষ্ট্য মনে রেখেই সমগোত্রীয় সকল মৌলের রাসায়নিক আচরণ নিখুঁতভাবে অনুমান করা সম্ভব।',
        highlight: 'সংক্ষিপ্ততায় বিশাল জ্ঞানের সমন্বয়'
      },
      {
        heading: 'প্রাকৃতিক বনাম কৃত্রিম মৌল',
        description: 'প্রকৃতিতে পাওয়া যায় ৯৮টি মৌল (১ থেকে ৯৮, যার মধ্যে টেকনেশিয়াম ও প্রমিথিয়াম বিরল)। বাকি ২০টি মৌল গবেষণাগারে বিজ্ঞানীদের দ্বারা কৃত্রিমভাবে নিউক্লীয় বিক্রিয়ার মাধ্যমে সংশ্লেষিত হয়েছে।',
        highlight: 'প্রাকৃতিক ৯৮টি + কৃত্রিম ২০টি = ১১৮টি'
      }
    ],
    callout: {
      type: 'tip',
      title: 'রসায়নের বিশ্বকোষ',
      content: 'পর্যায় সারণি হলো রসায়নশাস্ত্রের এক অনন্য সংক্ষিপ্তসার। রাশিয়ান বিজ্ঞানী দিমিত্রি মেন্ডেলিফকে আধুনিক পর্যায় সারণির জনক বলা হয়।'
    },
    speakerNotes: 'শিক্ষার্থীদের পর্যায় সারণির সার্বিক ধারণা দিন। এটি কেবল একটি চার্ট নয়, পরমাণুর ভেতরের ইলেকট্রন বিন্যাসের একটি প্রত্যক্ষ প্রতিচ্ছবি।',
    recommendedInteractiveTab: 'ptable'
  },
  {
    id: 2,
    chapter: 4,
    title: 'পর্যায় সারণির পটভূমি ও ঐতিহাসিক বিকাশ',
    subtitle: 'ল্যাভয়সিয়ের শ্রেণিবিভাগ থেকে ডোবেরাইনারের ত্রয়ী ও নিউল্যান্ডের অষ্টক সূত্র',
    category: 'ইতিহাস ও বিবর্তন',
    gallery: [
      {
        id: 'c4_s2_img1',
        url: '/src/assets/images/ancient_alchemy_lab_1790755208632.jpg',
        titleBn: 'রসায়নের প্রাক-ঐতিহাসিক শ্রেণিবিন্যাস',
        titleEn: 'Historical Classification of Elements',
        captionBn: '১৭৮৯ সালে ফরাসি রসায়নবিদ আঁতোয়ান ল্যাভয়সিয়ে প্রথম মৌলসমূহকে ধাতু ও অধাতুতে বিভক্ত করেন',
        captionEn: 'Lavoisier first categorized 33 elements into metals and non-metals in 1789',
        type: 'photo'
      },
      {
        id: 'c4_s2_img2',
        titleBn: 'ঐতিহাসিক পর্যায় সূত্রের মেলবন্ধন',
        titleEn: 'Evolution of Periodic Laws',
        captionBn: 'ল্যাভয়সিয়ে (১৭৮৯) → ডোবেরাইনার (১৮২৯) → নিউল্যান্ড (১৮৬৪) → মেন্ডেলিফ (১৮৬৯)',
        captionEn: 'Milestones: Lavoisier (1789) -> Dobereiner (1829) -> Newlands (1864) -> Mendeleev (1869)',
        type: 'diagram',
        customDiagramType: 'mendeleevVsModern'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ডোবেরাইনারের ত্রয়ী সূত্র',
        labelEn: "Dobereiner's Law of Triads",
        symbol: 'Triad',
        detailBn: '১৮২৯: দ্বিতীয় মৌলের পারমাণবিক ভর প্রথম ও তৃতীয় মৌলের পারমাণবিক ভরের গড়ের সমান বা কাছাকাছি। যেমন Li (7), Na (23), K (39)।',
        detailEn: 'Atomic weight of the middle element was approximately the mean of the first and third elements.',
        badgeType: 'periodic',
        position: { x: 35, y: 40 }
      },
      {
        labelBn: 'নিউল্যান্ডের অষ্টক সূত্র',
        labelEn: "Newlands' Law of Octaves",
        symbol: 'Octave',
        detailBn: '১৮৬৪: মৌলসমূহকে ছোট থেকে বড় পারমাণবিক ভর অনুসারে সাজালে প্রতি অষ্টম মৌলের ধর্মে প্রথম মৌলের সাথে সাদৃশ্য লক্ষ্য করা যায়।',
        detailEn: 'Every eighth element exhibited similar properties analogous to musical octaves.',
        badgeType: 'periodic',
        position: { x: 65, y: 70 }
      }
    ],
    keyPoints: [
      {
        heading: 'ল্যাভয়সিয়ের শ্রেণিবিভাগ (১৭৮৯)',
        description: 'আঁতোয়ান ল্যাভয়সিয়ে ৩৩টি মৌলকে তাদের ভৌত ধর্মের ভিত্তিতে ধাতু (যেমন লোহা, কপার) ও অধাতু (যেমন অক্সিজেন, নাইট্রোজেন, ফসফরাস)-তে বিভক্ত করেন।',
        highlight: 'ধাতু ও অধাতু বিভাজন'
      },
      {
        heading: 'ডোবেরাইনারের ত্রয়ী সূত্র (১৮২৯)',
        description: 'জার্মান বিজ্ঞানী ইয়োহান উলফগ্যাং ডোবেরাইনার লক্ষ্য করেন তিনটি সাদৃশ্যপূর্ণ মৌলকে পারমাণবিক ভরের ক্রমানুসারে সাজালে মাঝের মৌলের ভর প্রায় প্রান্তদ্বয়ের গড়ের সমান হয়: Li (৭) + K (৩৯) / ২ = ২৩ (Na)। একে ত্রয়ী সূত্র (Law of Triads) বলে।',
        formula: 'ভর(Na) = [ভর(Li) + ভর(K)] / ২ = [৭ + ৩৯] / ২ = ২৩'
      },
      {
        heading: 'নিউল্যান্ডের অষ্টক সূত্র (১৮৬৪)',
        description: 'ব্রিটিশ রসায়নবিদ জন নিউল্যান্ড সঙ্গীতের সুরের সপ্তক (সা-রে-গা-মা-পা-ধা-নি-সা)-এর মতো মৌল সাজিয়ে দেখেন যেকোনো মৌল থেকে শুরু করে ৮ম মৌলে একই ধর্মের পুনরাবৃত্তি ঘটে। এটি ক্যালসিয়াম (Ca) পর্যন্ত সঠিক ছিল।',
        highlight: 'সঙ্গীতের অষ্টক ও ধর্মের পুনরাবৃত্তি'
      }
    ],
    tableData: {
      caption: 'ডোবেরাইনারের বিখ্যাত ত্রয়ীসমূহ (Triads)',
      headers: ['ত্রয়ীর নাম', '১ম মৌল ও ভর', '২য় মৌল (মাঝের ভর)', '৩য় মৌল ও ভর', 'গাণিতিক গড়'],
      rows: [
        ['ক্ষারীয় ত্রয়ী', 'Li (৭)', 'Na (২৩)', 'K (৩৯)', '(৭ + ৩৯)/২ = ২৩ (সঠিক)'],
        ['হ্যালোজেন ত্রয়ী', 'Cl (৩৫.৫)', 'Br (৮০)', 'I (১২৭)', '(৩৫.৫ + ১২৭)/২ = ৮১.২৫ (কাছাকাছি)'],
        ['মৃৎক্ষার ত্রয়ী', 'Ca (৪০)', 'Sr (৮৮)', 'Ba (১৩৭)', '(৪০ + ১৩৭)/২ = ৮৮.৫ (কাছাকাছি)']
      ]
    },
    speakerNotes: 'শিক্ষার্থীদের ত্রয়ী সূত্রের গাণিতিক প্রমাণ ব্যাখ্যা করুন। নিউল্যান্ডের অষ্টক সূত্র কেন ক্যালসিয়ামের পরে কার্যকর ছিল না তা তুলে ধরুন।',
    callout: {
      type: 'info',
      title: 'অষ্টক সূত্রের সীমাবদ্ধতা',
      content: 'নিউল্যান্ডের সময় মাত্র ৫৬টি মৌল জানা ছিল এবং তখন নিষ্ক্রিয় গ্যাস আবিষ্কৃত হয়নি। ভারী মৌলের ক্ষেত্রে অষ্টক নিয়ম কাজ করে না।'
    }
  },
  {
    id: 3,
    chapter: 4,
    title: 'মেন্ডেলিফের পর্যায় সারণি ও পর্যায় সূত্র',
    subtitle: 'দিমিত্রি মেন্ডেলিফের যুগান্তকারী গবেষণা, ভবিষ্যৎবাণী ও আদি সারণির সাফল্য',
    category: 'মেন্ডেলিফের সাফল্য',
    gallery: [
      {
        id: 'c4_s3_img1',
        titleBn: 'মেন্ডেলিফ বনাম আধুনিক পর্যায় সূত্র',
        titleEn: 'Mendeleev vs Modern Periodic Law',
        captionBn: 'মেন্ডেলিফের ভিত্তি ছিল পারমাণবিক ভর; আধুনিক ভিত্তি হলো পারমাণবিক সংখ্যা',
        captionEn: 'Mendeleev classified based on atomic mass; modern table is based on atomic number',
        type: 'diagram',
        customDiagramType: 'mendeleevVsModern'
      },
      {
        id: 'c4_s3_img2',
        titleBn: 'মেন্ডেলিফের ভবিষ্যদ্বাণী করা অনাবিষ্কৃত মৌল',
        titleEn: 'Predicted Elements (Eka-elements)',
        captionBn: 'একা-অ্যালুমিনিয়াম (গ্যালিয়াম) ও একা-সিলিকন (জার্মেনিয়াম)-এর সঠিক ধর্মের ভবিষ্যৎবাণী',
        captionEn: 'Astonishing accuracy predicting Gallium (Eka-Al) and Germanium (Eka-Si)',
        type: 'chart'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'মেন্ডেলিফের পর্যায় সূত্র (১৮৬৯)',
        labelEn: "Mendeleev's Periodic Law",
        symbol: 'Mass ∝ Property',
        detailBn: 'মৌলসমূহের ভৌত ও রাসায়নিক ধর্মাবলি তাদের পারমাণবিক ভর বৃদ্ধির সাথে পর্যায়ক্রমে আবর্তিত হয়।',
        detailEn: 'Physical and chemical properties of elements are periodic functions of their atomic masses.',
        badgeType: 'periodic',
        position: { x: 50, y: 40 }
      }
    ],
    keyPoints: [
      {
        heading: 'মেন্ডেলিফের আদি সারণির কাঠামো',
        description: '১৮৬৯ সালে রাশিয়ান রসায়নবিদ দিমিত্রি মেন্ডেলিফ তৎকালীন আবিষ্কৃত ৬৩টি মৌলকে তাদের পারমাণবিক ভর বৃদ্ধির ক্রমানুসারে সাজিয়ে ১২টি অনুভূমিক সারি ও ৮টি উলম্ব কলামের একটি সারণি তৈরি করেন। একই সময়ে জার্মান বিজ্ঞানী লোথার মেয়ারও প্রায় একই ধরনের সারণি প্রস্তুত করেছিলেন।',
        highlight: '৬৩টি মৌল, ১২টি সারি, ৮টি কলাম'
      },
      {
        heading: 'অনাবিষ্কৃত মৌলের ভবিষ্যৎবাণী (Eka Elements)',
        description: 'মেন্ডেলিফ তাঁর সারণিতে কিছু ফাঁকা ঘর রেখে অনাবিষ্কৃত মৌলগুলোর নাম দেন একা-বোরন, একা-অ্যালুমিনিয়াম ও একা-সিলিকন। পরবর্তীতে যখন স্ক্যান্ডিয়াম (Sc), গ্যালিয়াম (Ga) এবং জার্মেনিয়াম (Ge) আবিষ্কৃত হয়, দেখা যায় তাদের ধর্ম মেন্ডেলিফের পূর্বাভাসের সাথে হুবহু মিলে গেছে!',
        highlight: 'একা-সিলিকন = জার্মেনিয়াম (Ge)'
      },
      {
        heading: 'মেন্ডেলিফের সারণির ত্রুটি',
        description: 'পারমাণবিক ভরের ক্রমে সাজালে কয়েকটি ক্ষেত্রে বেশি ভরের মৌল আগে এবং কম ভরের মৌল পরে বসে গিয়েছিল; যেমন—আর্গন (৩৯.৯) আগে ও পটাশিয়াম (৩৯.১) পরে; টেলুরিয়াম (১২৭.৬) আগে ও আয়োডিন (১২৬.৯) পরে। এছাড়া আইসোটোপগুলোর ভিন্ন ভিন্ন ভর হওয়া সত্ত্বেও একই ঘরে রাখতে বাধ্য হতে হয়।',
        highlight: 'ভরের অসঙ্গতি (Ar vs K, Te vs I)'
      }
    ],
    callout: {
      type: 'warning',
      title: 'মেন্ডেলিফের সারণির মূল দুর্বলতা',
      content: 'পারমাণবিক ভর মৌলের মৌলিক বৈশিষ্ট্য নয়, কারণ আইসোটোপের ভিন্ন ভরের কারণে তাদের ভিন্ন স্থানে বসানো উচিত ছিল। কিন্তু তাদের রাসায়নিক ধর্ম হুবহু এক।'
    },
    speakerNotes: 'শিক্ষার্থীদের বুঝিয়ে বলুন কীভাবে মেন্ডেলিফের ভবিষ্যৎবাণী রসায়নবিজ্ঞানীদের স্তম্ভিত করে দিয়েছিল এবং কেন পারমাণবিক ভরকে আধুনিক রসায়নে বাদ দেওয়া হলো।'
  },
  {
    id: 4,
    chapter: 4,
    title: 'আধুনিক পর্যায় সূত্র ও মোসলের আবিষ্কার',
    subtitle: 'পারমাণবিক ভরের পরিবর্তে পারমাণবিক সংখ্যার ভিত্তিতে আধুনিক পর্যায় সারণির ভিত্তি স্থাপন',
    category: 'আধুনিক সূত্র',
    gallery: [
      {
        id: 'c4_s4_img1',
        titleBn: 'হেনরি মোসলের এক্স-রে বর্ণালীবীক্ষণ পরীক্ষা',
        titleEn: "Henry Moseley's X-ray Spectroscopy",
        captionBn: '১৯১৩ সালে মোসলে প্রমাণ করেন মৌলের মূল পরিচয় পারমাণবিক সংখ্যা বা প্রোটন সংখ্যা (Z), পারমাণবিক ভর নয়',
        captionEn: 'In 1913, Moseley demonstrated that atomic number Z governs characteristic X-ray frequencies',
        type: 'diagram',
        customDiagramType: 'mendeleevVsModern'
      },
      {
        id: 'c4_s4_img2',
        titleBn: 'আধুনিক পর্যায় সারণির সার্বিক কাঠামো',
        titleEn: 'Modern IUPAC Periodic Table',
        captionBn: 'আন্তর্জাতিক সংস্থা IUPAC অনুমোদিত ১৮টি গ্রুপ ও ৭টি পর্যায়ের সমন্বিত সারণি',
        captionEn: 'Standard IUPAC recognized 18-column long-form periodic table structure',
        type: 'diagram',
        customDiagramType: 'periodicMini'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'আধুনিক পর্যায় সূত্র (১৯১৩)',
        labelEn: 'Modern Periodic Law',
        symbol: 'Z ∝ Property',
        detailBn: 'মৌলসমূহের ভৌত ও রাসায়নিক ধর্মাবলি তাদের পারমাণবিক সংখ্যা (প্রোটন সংখ্যা) বৃদ্ধির সাথে পর্যায়ক্রমে আবর্তিত হয়।',
        detailEn: 'Physical and chemical properties of elements are periodic functions of their atomic numbers.',
        badgeType: 'periodic',
        position: { x: 50, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'হেনরি মোসলের ঐতিহাসিক আবিষ্কার (১৯১৩)',
        description: 'ব্রিটিশ পদার্থবিদ হেনরি মোসলে বিভিন্ন মৌলের উপর ক্যাথোড রশ্মি নিক্ষেপ করে উৎপন্ন এক্স-রে-র কম্পাঙ্ক বিশ্লেষণ করে দেখেন, কম্পাঙ্কের বর্গমূল মৌলের পারমাণবিক সংখ্যার সমানুপাতিক (√ν = a(Z - b))। এর মাধ্যমে প্রমাণিত হয় প্রোটন সংখ্যাই মৌলের আসল পরিচয়।',
        highlight: 'প্রোটন সংখ্যাই মৌলের আসল পরিচয়'
      },
      {
        heading: 'আধুনিক পর্যায় সূত্র (Modern Periodic Law)',
        description: '“মৌলসমূহের ভৌত ও রাসায়নিক ধর্মাবলি তাদের পারমাণবিক সংখ্যা অনুসারে পর্যায়ক্রমে আবর্তিত হয়।” এই সূত্রের মাধ্যমে মেন্ডেলিফের সকল অসঙ্গতি মুহূর্তে দূর হয়ে যায়।',
        formula: 'ধর্মের ছন্দ = f(পারমাণবিক সংখ্যা Z)'
      },
      {
        heading: 'অসঙ্গতি দূরীকরণ (Resolution of Anomalies)',
        description: 'আর্গনের পারমাণবিক সংখ্যা ১৮ এবং পটাশিয়ামের ১৯; তাই আর্গন পটাশিয়ামের আগেই বসে। টেলুরিয়ামের Z=৫২ এবং আয়োডিনের Z=৫৩, ফলে তারা স্বাভাবিক নিয়মেই সঠিক ঘরে অবস্থান পায়। আইসোটোপদের সবার পারমাণবিক সংখ্যা অভিন্ন হওয়ায় একই ঘরে অবস্থান যুক্তিযুক্ত প্রমাণিত হয়।',
        highlight: 'Ar (18) < K (19) এবং Te (52) < I (53)'
      }
    ],
    callout: {
      type: 'formula',
      title: 'পর্যায় সারণির মূল ভিত্তি কী?',
      content: 'পর্যায় সারণির মূল ভিত্তি মূলত ইলেকট্রন বিন্যাস। কারণ পারমাণবিক সংখ্যা প্রোটন নির্দেশ করে, যা স্বাভাবিক অবস্থায় ইলেকট্রন সংখ্যার সমান।'
    },
    speakerNotes: 'মোসলের আবিষ্কারের গুরুত্ব আলোচনা করুন। শিক্ষার্থীরা যেন কখনোই পারমাণবিক ভর আর পারমাণবিক সংখ্যার মধ্যে বিভ্রান্ত না হয়।'
  },
  {
    id: 5,
    chapter: 4,
    title: 'আধুনিক পর্যায় সারণির সাধারণ বৈশিষ্ট্য',
    subtitle: '৭টি পর্যায়, ১৮টি গ্রুপ এবং ল্যান্থানাইড ও অ্যাক্টিনাইড সারির পূর্ণাঙ্গ রূপরেখা',
    category: 'গঠন ও বৈশিষ্ট্য',
    gallery: [
      {
        id: 'c4_s5_img1',
        titleBn: '৭টি পর্যায় ও ১৮টি গ্রুপের রূপরেখা',
        titleEn: '7 Periods & 18 Groups Overview',
        captionBn: 'পর্যায় ১-এ ২টি, পর্যায় ২ ও ৩-এ ৮টি করে, পর্যায় ৪ ও ৫-এ ১৮টি করে, এবং পর্যায় ৬ ও ৭-এ ৩২টি করে মৌল বিদ্যমান',
        captionEn: 'Element counts: P1 (2), P2 & P3 (8 each), P4 & P5 (18 each), P6 & P7 (32 each)',
        type: 'diagram',
        customDiagramType: 'periodicMini'
      },
      {
        id: 'c4_s5_img2',
        titleBn: 'বিশেষ গ্রুপসমূহের পরিচিতি',
        titleEn: 'Special Group Classifications',
        captionBn: 'গ্রুপ ১ (ক্ষার ধাতু), গ্রুপ ২ (মৃৎক্ষার ধাতু), গ্রুপ ১৭ (হ্যালোজেন), গ্রুপ ১৮ (নিষ্ক্রিয় গ্যাস)',
        captionEn: 'Alkali metals (G1), Alkaline earths (G2), Halogens (G17), Noble gases (G18)',
        type: 'diagram',
        customDiagramType: 'specialGroupsChart'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'পর্যায় ১ (অতি ক্ষুদ্র পর্যায়)',
        labelEn: 'Period 1 (2 Elements)',
        symbol: 'H, He',
        detailBn: 'পর্যায় ১-এ মাত্র ২টি মৌল রয়েছে: হাইড্রোজেন (H) ও হিলিয়াম (He)।',
        detailEn: 'Period 1 contains only 2 elements: Hydrogen and Helium.',
        badgeType: 'periodic',
        position: { x: 25, y: 30 }
      },
      {
        labelBn: 'ল্যান্থানাইড ও অ্যাক্টিনাইড',
        labelEn: 'Lanthanides & Actinides',
        symbol: 'f-Block',
        detailBn: 'সারণির নিচে আলাদাভাবে রাখা ২ সারির মৌল (৫৭-৭১ এবং ৮৯-১০৩), প্রতিটি সারিতে ১৫টি করে মৌল রয়েছে।',
        detailEn: 'Two bottom series of 15 elements each placed separately to maintain aesthetic rectangular symmetry.',
        badgeType: 'periodic',
        position: { x: 50, y: 80 }
      }
    ],
    keyPoints: [
      {
        heading: 'পর্যায়সমূহের বৈশিষ্ট্য (Periods Breakdown)',
        description: '• পর্যায় ১: ২টি মৌল (অতি হ্রস্ব পর্যায়)\n• পর্যায় ২ ও ৩: ৮টি করে মৌল (হ্রস্ব পর্যায়)\n• পর্যায় ৪ ও ৫: ১৮টি করে মৌল (দীর্ঘ পর্যায়)\n• পর্যায় ৬ ও ৭: ৩২টি করে মৌল (অতি দীর্ঘ পর্যায়)',
        highlight: 'মোট পর্যায় = ৭টি'
      },
      {
        heading: 'গ্রুপসমূহের বৈশিষ্ট্য (Groups Breakdown)',
        description: 'আধুনিক সারণিতে ১ থেকে ১৮ পর্যন্ত মোট ১৮টি উলম্ব গ্রুপ রয়েছে। একই গ্রুপের মৌলসমূহের সর্ববহিঃস্থ স্তরের ইলেকট্রন সংখ্যা সমান হওয়ায় তাদের রাসায়নিক ধর্ম প্রায় অভিন্ন হয়।',
        highlight: 'মোট গ্রুপ = ১৮টি'
      },
      {
        heading: 'নিচের দুই সারির মৌল (Lanthanides & Actinides)',
        description: 'পর্যায় সারণির সৌন্দর্য ও সুষম আয়তাকার আকৃতি রক্ষার জন্য পর্যায় ৬ এর ৩ নম্বর গ্রুপের ল্যান্থানাম থেকে লুটিশিয়াম (৫৭-৭১) এবং পর্যায় ৭ এর ৩ নম্বর গ্রুপের অ্যাক্টিনিয়াম থেকে লরেনসিয়াম (৮৯-১০৩)-কে নিচে আলাদা সারি হিসেবে দেখানো হয়।',
        highlight: 'প্রতি সারিতে ১৫টি মৌল'
      }
    ],
    tableData: {
      caption: 'পর্যায়সমূহের মৌল বণ্টনের সারসংক্ষেপ',
      headers: ['পর্যায় নম্বর', 'মৌলের সংখ্যা', 'শুরুর মৌল', 'শেষের মৌল', 'পর্যায়ের প্রকৃতি'],
      rows: [
        ['পর্যায় ১', '২টি', '₁H (হাইড্রোজেন)', '₂He (হিলিয়াম)', 'অতি হ্রস্ব পর্যায়'],
        ['পর্যায় ২', '৮টি', '₃Li (লিথিয়াম)', '₁₀Ne (নিয়ন)', 'হ্রস্ব পর্যায়'],
        ['পর্যায় ৩', '৮টি', '₁₁Na (সোডিয়াম)', '₁₈Ar (আর্গন)', 'হ্রস্ব পর্যায়'],
        ['পর্যায় ৪', '১৮টি', '₁₉K (পটাশিয়াম)', '₃₆Kr (ক্রিপ্টন)', 'দীর্ঘ পর্যায়'],
        ['পর্যায় ৫', '১৮টি', '₃₇Rb (রুবিডিয়াম)', '₅₄Xe (জেনন)', 'দীর্ঘ পর্যায়'],
        ['পর্যায় ৬', '৩২টি', '₅₅Cs (সিজিয়াম)', '₈₆Rn (রেডন)', 'অতি দীর্ঘ পর্যায়'],
        ['পর্যায় ৭', '৩২টি', '₈₇Fr (ফ্রান্সিয়াম)', '₁₁₈Og (ওগানেসন)', 'অতি দীর্ঘ পর্যায়']
      ]
    },
    speakerNotes: 'শিক্ষার্থীদের বলুন কিভাবে ২, ৮, ৮, ১৮, ১৮, ৩২, ৩২ এই সংখ্যাগুলো শক্তিস্তরের ইলেকট্রন ধারণক্ষমতা (২n²) এর সাথে সম্পৃক্ত।',
    recommendedInteractiveTab: 'ptable'
  },
  {
    id: 6,
    chapter: 4,
    title: 'ইলেকট্রন বিন্যাস: পর্যায় সারণির মূল ভিত্তি',
    subtitle: 'কেন পরমাণুর ইলেকট্রন বিন্যাসই পর্যায় সারণির অবস্থান ও ধর্মের একমাত্র নিয়ন্ত্রক',
    category: 'মূল ভিত্তি',
    gallery: [
      {
        id: 'c4_s6_img1',
        titleBn: 'পর্যায় ও গ্রুপ নির্ণয়ের ৩টি নিয়ম রূপরেখা',
        titleEn: '3 Rules of Group and Period Determination',
        captionBn: 'সর্ববহিঃস্থ প্রধান শক্তিস্তর = পর্যায়; সর্ববহিঃস্থ ইলেকট্রন প্যাটার্ন (s, s+p, d+s) = গ্রুপ',
        captionEn: 'Principal energy level indicates period; valence electron configuration determines group',
        type: 'diagram',
        customDiagramType: 'periodGroupFinder'
      },
      {
        id: 'c4_s6_img2',
        url: '/src/assets/images/orbitals_spdf_shapes_1790751412095.jpg',
        titleBn: 'উপশক্তিস্তর s, p, d, f ব্লক মৌলসমূহ',
        titleEn: 'Periodic Blocks (s, p, d, f)',
        captionBn: 'সর্বশেষ ইলেকট্রনটি যে উপশক্তিস্তরে প্রবেশ করে তার ভিত্তিতে মৌলসমূহ ৪টি ব্লকে বিভক্ত',
        captionEn: 'Classification into s, p, d, and f blocks based on incoming valence subshell',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'প্রধান কোয়ান্টাম স্তর n',
        labelEn: 'Principal Quantum Shell',
        symbol: 'n = Period',
        detailBn: 'পরমাণুর ইলেকট্রন বিন্যাসের সর্বোচ্চ প্রধান শক্তিস্তরের নম্বরটিই হবে ঐ মৌলের পর্যায় নম্বর।',
        detailEn: 'Highest occupied principal quantum shell represents the period number.',
        badgeType: 'periodic',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'যোজ্যতা ইলেকট্রন ও গ্রুপ',
        labelEn: 'Valence Electrons & Group',
        symbol: 'e⁻ = Group',
        detailBn: 'সর্ববহিঃস্থ স্তরের ইলেকট্রন সংখ্যা ও উপশক্তিস্তরের বিন্যাস নির্ধারণ করে মৌলটি কোন গ্রুপে বসবে।',
        detailEn: 'Outer electronic arrangement governs group allocation across Groups 1 to 18.',
        badgeType: 'periodic',
        position: { x: 70, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'ইলেকট্রন বিন্যাস কেন মূল ভিত্তি?',
        description: 'পরমাণুর রাসায়নিক বন্ধন গঠন, আয়ন সৃষ্টি, ধাতব বা অধাতব আচরণ—সবকিছু নির্ভর করে পরমাণুর সর্বশেষ শক্তিস্তরে কয়টি ইলেকট্রন আছে তার ওপর। যেহেতু একই গ্রুপের মৌলসমূহের সর্বশেষ স্তরের ইলেকট্রন বিন্যাস হুবহু এক, তাই তাদের ধর্মও একই রকম হয়।',
        highlight: 'যোজ্যতা ইলেকট্রন অভিন্ন = ধর্ম অভিন্ন'
      },
      {
        heading: 'গ্রুপ ১ মৌলসমূহের উদাহরণ',
        description: '• Li (৩): 1s² 2s¹\n• Na (১১): 1s² 2s² 2p⁶ 3s¹\n• K (১৯): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹\nসবার বাইরে একটি s¹ ইলেকট্রন রয়েছে, তাই এরা সবাই গ্রুপ ১-এর তীব্র সক্রিয় ক্ষার ধাতু।',
        formula: 'ns¹ বিন্যাস = তীব্র ক্ষার ধাতু (Group 1)'
      },
      {
        heading: 'গ্রুপ ১৭ মৌলসমূহের উদাহরণ',
        description: '• F (৯): 1s² 2s² 2p⁵\n• Cl (১৭): 1s² 2s² 2p⁶ 3s² 3p⁵\nসবার বাইরে ns² np⁵ বা ৭টি যোজ্যতা ইলেকট্রন রয়েছে। একটি ইলেকট্রন গ্রহণ করে এরা তীব্র ঋণাত্মক অ্যানায়ন তৈরি করে।',
        formula: 'ns² np⁵ বিন্যাস = তীব্র হ্যালোজেন (Group 17)'
      }
    ],
    callout: {
      type: 'tip',
      title: 'বোর্ড পরীক্ষার অত্যন্ত গুরুত্বপূর্ণ প্রশ্ন',
      content: '“ইলেকট্রন বিন্যাসই পর্যায় সারণির মূল ভিত্তি”—এই ব্যাখ্যামূলক প্রশ্নটি এসএসসি বোর্ড পরীক্ষায় প্রায় প্রতি বছরই আসে।'
    },
    speakerNotes: 'শিক্ষার্থীদের গ্রুপ ১ এবং গ্রুপ ১৭ এর উদাহরণ দেখিয়ে স্পষ্ট করুন কেন ইলেকট্রন বিন্যাসই ধর্মের মিল তৈরি করে।'
  },
  {
    id: 7,
    chapter: 4,
    title: 'ইলেকট্রন বিন্যাস থেকে পর্যায় ও গ্রুপ নির্ণয়ের নিয়ম',
    subtitle: 'বোর্ড পরীক্ষার জন্য অপরিহার্য ৩টি সুনির্দিষ্ট বৈজ্ঞানিক নিয়ম ও অ্যালগরিদম',
    category: 'নিয়মাবলী',
    gallery: [
      {
        id: 'c4_s7_img1',
        titleBn: 'পর্যায় ও গ্রুপ নির্ণয় চার্ট',
        titleEn: 'Period & Group Determination Rules',
        captionBn: 'নিয়ম ১ (s-ব্লক: গ্রুপ = s); নিয়ম ২ (p-ব্লক: গ্রুপ = s + p + ১০); নিয়ম ৩ (d-ব্লক: গ্রুপ = d + s)',
        captionEn: 'Rule 1: Group = s; Rule 2: Group = s + p + 10; Rule 3: Group = d + s',
        type: 'diagram',
        customDiagramType: 'periodGroupFinder'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'নিয়ম ১ (শুধু s)',
        labelEn: 'Rule 1: Only s-subshell',
        symbol: 'Group = s',
        detailBn: 'সর্ববহিঃস্থ স্তরে শুধু s অরবিটাল থাকলে, s-এর মোট ইলেকট্রন সংখ্যাই তার গ্রুপ নম্বর। যেমন: Na (3s¹) → গ্রুপ ১।',
        detailEn: 'If outer shell contains only s, group number = outer s-electrons.',
        badgeType: 'periodic',
        position: { x: 20, y: 50 }
      },
      {
        labelBn: 'নিয়ম ২ (s ও p)',
        labelEn: 'Rule 2: s + p subshells',
        symbol: 'Group = s + p + 10',
        detailBn: 'সর্ববহিঃস্থ স্তরে s ও p অরবিটাল থাকলে, (s + p + ১০) হলো গ্রুপ নম্বর। যেমন: Cl (3s² 3p⁵) → ২+৫+১০ = ১৭।',
        detailEn: 'If outer shell contains both s and p, group = (s + p + 10).',
        badgeType: 'periodic',
        position: { x: 50, y: 50 }
      },
      {
        labelBn: 'নিয়ম ৩ (d ও s)',
        labelEn: 'Rule 3: (n-1)d + ns subshells',
        symbol: 'Group = d + s',
        detailBn: 'বাইরের s এবং তার আগের d অরবিটালে ইলেকট্রন থাকলে, (d + s) এর যোগফল গ্রুপ। যেমন: Fe (3d⁶ 4s²) → ৬+২ = ৮।',
        detailEn: 'For transition metals, group = total electrons in (n-1)d + ns.',
        badgeType: 'periodic',
        position: { x: 80, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'পর্যায় নির্ণয়ের নিয়ম (Determining Period)',
        description: 'কোনো মৌলের ইলেকট্রন বিন্যাস করার পর সবচেয়ে বাইরের প্রধান শক্তিস্তরের নম্বরটিই (সর্বোচ্চ n) হলো ঐ মৌলের পর্যায় নম্বর।\nউদাহরণ: ₁₉K = 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ → সর্বোচ্চ স্তর ৪, তাই পর্যায় = ৪।',
        highlight: 'সর্বোচ্চ n = পর্যায়'
      },
      {
        heading: 'গ্রুপ নির্ণয়ের নিয়ম ১: শুধু s অরবিটাল',
        description: 'সবচেয়ে বাইরের প্রধান শক্তিস্তরে যদি কেবল s উপশক্তিস্তর থাকে, তবে s-এর মোট ইলেকট্রন সংখ্যাই তার গ্রুপ নম্বর।\n• ₁₂Mg: 1s² 2s² 2p⁶ 3s² → s-এ ২টি ইলেকট্রন → গ্রুপ = ২।',
        formula: 'গ্রুপ = s-এর ইলেকট্রন সংখ্যা (Group 1 বা 2)'
      },
      {
        heading: 'গ্রুপ নির্ণয়ের নিয়ম ২: s ও p উভয় অরবিটাল',
        description: 'সবচেয়ে বাইরের প্রধান শক্তিস্তরে যদি s এবং p উভয় উপশক্তিস্তর থাকে, তবে s ও p-এর ইলেকট্রন সংখ্যার যোগফলের সাথে ১০ যোগ করলে গ্রুপ নম্বর পাওয়া যায়।\n• ₇N: 1s² 2s² 2p³ → (২ + ৩) + ১০ = ১৫ নং গ্রুপ।\n• ₁₇Cl: [Ne] 3s² 3p⁵ → (২ + ৫) + ১০ = ১৭ নং গ্রুপ।',
        formula: 'গ্রুপ = s + p + ১০ (Group 13 থেকে 18)'
      },
      {
        heading: 'গ্রুপ নির্ণয়ের নিয়ম ৩: d এবং s অরবিটাল',
        description: 'যদি সবচেয়ে বাইরের s অরবিটালের ঠিক আগের স্তরে d অরবিটাল থাকে, তবে d এবং s অরবিটালের মোট ইলেকট্রন সংখ্যার যোগফলই তার গ্রুপ নম্বর।\n• ₂₁Sc: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹ 4s² → ১ + ২ = গ্রুপ ৩।\n• ₂₆Fe: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² → ৬ + ২ = গ্রুপ ৮।\n• ₂₉Cu: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s¹ → ১০ + ১ = গ্রুপ ১১।',
        formula: 'গ্রুপ = (n-1)d + ns ইলেকট্রন সংখ্যা (Group 3 থেকে 12)'
      }
    ],
    callout: {
      type: 'formula',
      title: 'নিয়ম ২-এ কেন ১০ যোগ করতে হয়?',
      content: 'পর্যায় সারণির ২ নম্বর গ্রুপ (মৃৎক্ষার ধাতু) এবং ১৩ নম্বর গ্রুপের মাঝখানে ৩ থেকে ১২ নম্বর গ্রুপ পর্যন্ত ১০টি অবস্থান্তর মৌলের কলাম (d-ব্লক) বিদ্যমান। তাই p-ব্লকের মৌলের ক্ষেত্রে এই ১০টি স্থান সমন্বয় করতে ১০ যোগ করা হয়।'
    },
    speakerNotes: 'শিক্ষার্থীদের বিভিন্ন মৌলের ইলেকট্রন বিন্যাস দিয়ে তাদের পর্যায় ও গ্রুপ নির্ণয় করতে বলুন। নিয়ম ১, ২, এবং ৩ আলাদা করে অনুশীলন করান।',
    recommendedInteractiveTab: 'positionFinder'
  },
  {
    id: 8,
    chapter: 4,
    title: 'পর্যায় সারণির সীমাবদ্ধতা ও ব্যতিক্রমসমূহ',
    subtitle: 'হাইড্রোজেনের দ্বৈত আচরণ, হিলিয়ামের গ্রুপ অবস্থান এবং f-ব্লক মৌলের স্থান নির্ধারণ',
    category: 'ব্যতিক্রম ও বিতর্ক',
    gallery: [
      {
        id: 'c4_s8_img1',
        url: '/src/assets/images/hydrogen_isotopes_1790751422746.jpg',
        titleBn: 'হাইড্রোজেনের বিতর্কিত দ্বৈত চরিত্র',
        titleEn: 'Ambiguous Position of Hydrogen',
        captionBn: 'হাইড্রোজেনের ধর্ম গ্রুপ ১-এর ক্ষার ধাতু এবং গ্রুপ ১৭-এর হ্যালোজেন উভয়ের সাথেই সদৃশ',
        captionEn: 'Hydrogen shows striking dual similarities with both Group 1 alkali metals and Group 17 halogens',
        type: 'photo'
      },
      {
        id: 'c4_s8_img2',
        titleBn: 'হিলিয়ামের ইলেকট্রন বিন্যাস বনাম ধর্ম',
        titleEn: 'Helium: Config vs Chemical Inactivity',
        captionBn: 'হিলিয়ামের বিন্যাস 1s² (s-ব্লক), কিন্তু এর ধর্ম তীব্র নিষ্ক্রিয় হওয়ায় গ্রুপ ১৮-এ স্থান দেওয়া হয়েছে',
        captionEn: 'Helium possesses 1s² electronic configuration yet sits in Group 18 due to full duet stability',
        type: 'chart'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'হাইড্রোজেন (H)',
        labelEn: 'Hydrogen Dual Nature',
        symbol: 'G1 or G17?',
        detailBn: 'ক্ষার ধাতুর মতো বহিঃস্তরে ১টি ইলেকট্রন এবং হ্যালোজেনের মতো ১টি ইলেকট্রন গ্রহণ করে নিষ্ক্রিয় গ্যাস হিলিয়ামের রূপ নেয়।',
        detailEn: 'Can lose 1 electron like alkali metals, or gain 1 electron like halogens.',
        badgeType: 'periodic',
        position: { x: 30, y: 40 }
      },
      {
        labelBn: 'হিলিয়াম (He)',
        labelEn: 'Helium Anomaly',
        symbol: '1s² in G18',
        detailBn: 'নিয়ম অনুযায়ী গ্রুপ ২-এ থাকার কথা হলেও রাসায়নিক নিষ্ক্রিয়তার কারণে গ্রুপ ১৮-এর শীর্ষে স্থান দেওয়া হয়েছে।',
        detailEn: 'Technically group 2 by electron rule, but chemically identical to inert Group 18 gases.',
        badgeType: 'noble',
        position: { x: 70, y: 40 }
      }
    ],
    keyPoints: [
      {
        heading: '১. হাইড্রোজেনের অবস্থান বিতর্ক',
        description: '• ক্ষার ধাতুর সাথে মিল: ১টি যোজ্যতা ইলেকট্রন (1s¹), ক্ষার ধাতুর মতো অধাতুর সাথে যৌগ গঠন (HCl, H₂O), তড়িৎ ধনাত্মক আয়ন (H⁺) তৈরি করে।\n• হ্যালোজেনের সাথে মিল: অধাতু, দ্বি-পরমাণুক অণু (H₂), ধাতুর সাথে হাইড্রাইড যৌগ (NaH) গঠন করে।\nতবে মূলত যোজ্যতা ইলেকট্রন ১টি হওয়ায় একে গ্রুপ ১-এর শীর্ষে রাখা হয়েছে।',
        highlight: 'ক্ষার ধাতু বনাম হ্যালোজেন সাদৃশ্য'
      },
      {
        heading: '২. হিলিয়ামের গ্রুপ অবস্থান',
        description: 'হিলিয়ামের ইলেকট্রন বিন্যাস 1s²। ইলেকট্রন বিন্যাসের সাধারণ নিয়ম মানলে একে গ্রুপ ২ (মৃৎক্ষার ধাতু)-তে রাখা উচিত ছিল। কিন্তু বেরিলিয়াম বা ম্যাগনেসিয়াম তীব্র সক্রিয় ধাতু, অন্যদিকে হিলিয়াম একটি নিষ্ক্রিয় গ্যাস যার একমাত্র শক্তিস্তর ইলেকট্রন দ্বারা পূর্ণ (দ্বিত্ব বা Duet পূর্ণ)। তাই একে গ্রুপ ১৮-এর অন্যান্য নিষ্ক্রিয় গ্যাসের সাথে রাখা হয়েছে।',
        highlight: '1s² কিন্তু গ্রুপ ১৮'
      },
      {
        heading: '৩. ল্যান্থানাইড ও অ্যাক্টিনাইড সারির অবস্থান',
        description: 'পর্যায় ৬-এর ৩ নম্বর গ্রুপে ৫৭ থেকে ৭১ পর্যন্ত ১৫টি মৌল এবং পর্যায় ৭-এর ৩ নম্বর গ্রুপে ৮৯ থেকে ১০৩ পর্যন্ত ১৫টি মৌল অবস্থান করে। এদের যদি মূল ছকে একই ঘরে বা পাশাপাশি রাখা হতো, তবে পর্যায় সারণি অস্বাভাবিক লম্বা হয়ে যেত এবং এর সৌন্দর্য নষ্ট হতো। তাই এদের সারণির নিচে আলাদা সারি হিসেবে দেখানো হয়।',
        highlight: 'মূল সারণির নিচে পৃথক স্থাপন'
      }
    ],
    callout: {
      type: 'warning',
      title: 'পরীক্ষার প্রশ্ন',
      content: '“হিলিয়ামের ইলেকট্রন বিন্যাস 1s² হওয়া সত্ত্বেও কেন একে গ্রুপ ২-এ স্থান না দিয়ে গ্রুপ ১৮-এ রাখা হয়েছে?”—এটি একটি বহুল পরিচিত অনুধাবনমূলক প্রশ্ন।'
    },
    speakerNotes: 'শিক্ষার্থীদের বোঝান যে পর্যায় সারণি একটি মানবসৃষ্ট মডেল, তাই প্রকৃতির কিছু জটিল আচরণের কারণে সামান্য কিছু সমঝোতা বা আপস করতে হয়েছে।'
  },
  {
    id: 9,
    chapter: 4,
    title: 'মৌলের পর্যায়বৃত্ত ধর্ম: পারমাণবিক আকার বা ব্যাসার্ধ',
    subtitle: 'পর্যায়ে বাম থেকে ডানে হ্রাস এবং গ্রুপে উপর থেকে নিচে বৃদ্ধির কারণ ও নিউক্লীয় চার্জের প্রভাব',
    category: 'পর্যায়বৃত্ত ধর্ম',
    gallery: [
      {
        id: 'c4_s9_img1',
        titleBn: 'পর্যায়বৃত্ত ধর্মসমূহের দিকনির্দেশক চার্ট',
        titleEn: 'Periodic Trends Directional Vectors',
        captionBn: 'একই পর্যায়ে বাম থেকে ডানে আকার হ্রাস পায়; একই গ্রুপে উপর থেকে নিচে আকার বৃদ্ধি পায়',
        captionEn: 'Atomic radius decreases across a period (left to right) and increases down a group',
        type: 'diagram',
        customDiagramType: 'periodicTrends'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'একই পর্যায় (বাম → ডান)',
        labelEn: 'Across a Period (L -> R)',
        symbol: 'Radius ↓',
        detailBn: 'পর্যায় ৩: Na (186 pm) > Mg (160 pm) > Al (143 pm) > Si (118 pm) > P (110 pm) > S (102 pm) > Cl (99 pm)। আকার ক্রমাগত কমে।',
        detailEn: 'Effective nuclear charge increases without adding new shells, pulling electrons closer.',
        badgeType: 'trend',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'একই গ্রুপ (উপর → নিচে)',
        labelEn: 'Down a Group (Top -> Bottom)',
        symbol: 'Radius ↑',
        detailBn: 'গ্রুপ ১: Li (152 pm) < Na (186 pm) < K (227 pm) < Rb (248 pm) < Cs (265 pm)। আকার ক্রমাগত বাড়ে।',
        detailEn: 'Each successive period adds a whole new electron shell, increasing atomic volume.',
        badgeType: 'trend',
        position: { x: 70, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'পারমাণবিক ব্যাসার্ধ কী? (What is Atomic Radius?)',
        description: 'পরমাণুর কেন্দ্রস্থ নিউক্লিয়াস থেকে সবচেয়ে বাইরের শক্তিস্তরের গড় দূরত্বকে পারমাণবিক ব্যাসার্ধ বলা হয়। সাধারণ অবস্থায় সমযোজী বা ধাতব বন্ধনে আবদ্ধ দুটি পরমাণুর নিউক্লিয়াসদ্বয়ের মধ্যবর্তী দূরত্বের অর্ধেককে পারমাণবিক ব্যাসার্ধ ধরা হয়।',
        highlight: 'নিউক্লিয়াস থেকে বহিঃস্তরের দূরত্ব'
      },
      {
        heading: 'একই পর্যায়ে পারমাণবিক আকার হ্রাসের কারণ',
        description: 'একই পর্যায়ে বাম থেকে ডানে গেলে নতুন কোনো শক্তিস্তর যুক্ত হয় না, কিন্তু নিউক্লিয়াসে প্রোটন সংখ্যা এবং বহিঃস্তরে ইলেকট্রন সংখ্যা ১টি করে বৃদ্ধি পায়। ফলে ধনাত্মক নিউক্লিয়াস ও ঋণাত্মক ইলেকট্রনের মধ্যকার আকর্ষণ বল বৃদ্ধি পায় এবং ইলেকট্রন মেঘ নিউক্লিয়াসের দিকে সংকুচিত হয়। তাই পরমাণুর আকার হ্রাস পায়।',
        formula: 'কার্যকরী নিউক্লীয় চার্জ Z_eff বৃদ্ধি ⇒ আকার হ্রাস'
      },
      {
        heading: 'একই গ্রুপে পারমাণবিক আকার বৃদ্ধির কারণ',
        description: 'একই গ্রুপে উপর থেকে নিচে নামলে প্রতি ধাপে একটি করে নতুন প্রধান শক্তিস্তর (Shell) যুক্ত হয়। নতুন শক্তিস্তর যুক্ত হওয়ার ফলে নিউক্লিয়াস থেকে সবচেয়ে বাইরের ইলেকট্রনের দূরত্ব অনেক বেড়ে যায়। ভেতরের স্তরের ইলেকট্রনসমূহের আবরণী প্রভাবের (Screening effect) কারণে নিউক্লিয়াসের আকর্ষণ হ্রাস পায় এবং পরমাণুর আকার উল্লেখযোগ্যভাবে বৃদ্ধি পায়।',
        formula: 'নতুন শক্তিস্তর সংযোজন ⇒ আকার বৃদ্ধি'
      }
    ],
    tableData: {
      caption: '৩য় পর্যায়ের মৌলসমূহের পারমাণবিক ব্যাসার্ধ (পিকোমিটার - pm)',
      headers: ['মৌল', '₁₁Na', '₁₂Mg', '₁₃Al', '₁₄Si', '₁₅P', '₁₆S', '₁₇Cl', '₁₈Ar'],
      rows: [
        ['ব্যাসার্ধ (pm)', '১৮৬', '১৬০', '১৪৩', '১১৮', '১১০', '১০২', '৯৯', '৯৮* (ভ্যান ডার ওয়ালস)']
      ]
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন যে পারমাণবিক আকার হলো সব পর্যায়বৃত্ত ধর্মের জননী। আকার বুঝতে পারলে আয়নীকরণ শক্তি ও তড়িৎ ঋণাত্মকতা সহজেই বোঝা যায়।',
    recommendedInteractiveTab: 'trends'
  },
  {
    id: 10,
    chapter: 4,
    title: 'মৌলের পর্যায়বৃত্ত ধর্ম: আয়নীকরণ শক্তি',
    subtitle: 'গ্যাসীয় পরমাণু থেকে ইলেকট্রন অপসারণে শক্তির পরিবর্তন ও ব্যতিক্রমী ইলেকট্রন বিন্যাসের প্রভাব',
    category: 'পর্যায়বৃত্ত ধর্ম',
    gallery: [
      {
        id: 'c4_s10_img1',
        titleBn: 'আয়নীকরণ শক্তির পর্যায়ক্রমিক পরিবর্তন',
        titleEn: 'Ionization Energy Trends & Exceptions',
        captionBn: 'একই পর্যায়ে বাম থেকে ডানে আয়নীকরণ শক্তি বৃদ্ধি পায়; কিন্তু Be > B এবং N > O ব্যতিক্রমী ঘটনা',
        captionEn: 'Generally increases across a period; anomalies occur at Be > B and N > O due to subshell stability',
        type: 'diagram',
        customDiagramType: 'periodicTrends'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'সংজ্ঞা (Ionization Energy)',
        labelEn: 'Definition',
        symbol: 'X(g) + IE → X⁺(g) + e⁻',
        detailBn: 'গ্যাসীয় অবস্থায় ১ মোল বিচ্ছিন্ন পরমাণুর বহিঃস্তর থেকে ১ মোল ইলেকট্রন অপসারণ করে ১ মোল ধনাত্মক আয়নে রূপান্তর করতে প্রয়োজনীয় শক্তি।',
        detailEn: 'Energy required to remove one mole of electrons from one mole of isolated gaseous atoms.',
        badgeType: 'trend',
        position: { x: 30, y: 40 }
      },
      {
        labelBn: 'ব্যতিক্রম: Be > B এবং N > O',
        labelEn: 'Subshell Stability Anomalies',
        symbol: 'Be > B, N > O',
        detailBn: 'Be (2s²) পূর্ণ উপস্তর এবং N (2p³) অর্ধপূর্ণ উপস্তর হওয়ায় এরা অধিক স্থিতিশীল; ফলে এদের আয়নীকরণ শক্তি পরবর্তী মৌলের চেয়ে বেশি হয়!',
        detailEn: 'Full 2s² in Beryllium and half-filled 2p³ in Nitrogen confer extra thermodynamic stability.',
        badgeType: 'trend',
        position: { x: 70, y: 60 }
      }
    ],
    keyPoints: [
      {
        heading: 'আয়নীকরণ শক্তি কী? (What is Ionization Energy?)',
        description: 'গ্যাসীয় অবস্থায় কোনো মৌলের ১ মোল বিচ্ছিন্ন পরমাণুর সবচেয়ে বাইরের শক্তিস্তর থেকে ১ মোল ইলেকট্রন অপসারণ করে ১ মোল ধনাত্মক আয়নে পরিণত করতে যে পরিমাণ শক্তির প্রয়োজন হয়, তাকে ঐ মৌলের প্রথম আয়নীকরণ শক্তি (First Ionization Energy) বলে।',
        formula: 'M(g) + IE₁ → M⁺(g) + e⁻  (ΔH > ০, তাপহারী প্রক্রিয়া)'
      },
      {
        heading: 'সাধারণ পর্যায়বৃত্ত ছন্দ (General Trend)',
        description: '• পরমাণুর আকার যত ছোট হয়, নিউক্লিয়াসের সাথে বহিঃস্থ ইলেকট্রনের আকর্ষণ তত তীব্র হয়। ফলে ইলেকট্রন অপসারণ করতে বেশি শক্তি লাগে (আয়নীকরণ শক্তি বৃদ্ধি পায়)।\n• একই পর্যায়ে বাম থেকে ডানে গেলে পারমাণবিক আকার কমে, তাই আয়নীকরণ শক্তি বৃদ্ধি পায়।\n• একই গ্রুপে উপর থেকে নিচে নামলে আকার বাড়ে, তাই আয়নীকরণ শক্তি হ্রাস পায়।',
        highlight: 'আকার হ্রাস ∝ আয়নীকরণ শক্তি বৃদ্ধি'
      },
      {
        heading: 'গুরুত্বপূর্ণ ব্যতিক্রম: Be বনাম B এবং N বনাম O',
        description: '• বেরিলিয়াম (Be: 1s² 2s²) বনাম বোরন (B: 1s² 2s² 2p¹): বেরিলিয়ামের 2s উপশক্তিস্তরটি ইলেকট্রন দ্বারা সম্পূর্ণ পূর্ণ, তাই অধিক সুস্থিত। ফলে Be-এর আয়নীকরণ শক্তি (৮৯৯ kJ/mol) বোরন (৮০১ kJ/mol)-এর চেয়ে বেশি হয়!\n• নাইট্রোজেন (N: 1s² 2s² 2p³) বনাম অক্সিজেন (O: 1s² 2s² 2p⁴): নাইট্রোজেনের 2p উপস্তরটি অর্ধপূর্ণ (Half-filled), যা অতিরিক্ত স্থিতিশীলতা দেয়। তাই N-এর আয়নীকরণ শক্তি (১৪০২ kJ/mol) অক্সিজেন (১৩১৪ kJ/mol)-এর চেয়ে বেশি।',
        highlight: 'অর্ধপূর্ণ ও পূর্ণ উপস্তরের অতিরিক্ত স্থায়িত্ব'
      }
    ],
    callout: {
      type: 'tip',
      title: 'বোর্ড পরীক্ষার হট টপিক',
      content: '“নাইট্রোজেনের পারমাণবিক আকার অক্সিজেনের চেয়ে বড় হওয়া সত্ত্বেও নাইট্রোজেনের আয়নীকরণ শক্তি বেশি কেন?”—এটি প্রতি বছর পরীক্ষায় আসা অন্যতম প্রধান সৃজনশীল প্রশ্ন।'
    },
    speakerNotes: 'শিক্ষার্থীদের হুন্ডের নীতি ও অর্ধপূর্ণ/পূর্ণ উপস্তরের স্থায়িত্বের ধারণা দিয়ে Be-B এবং N-O ব্যতিক্রম পরিষ্কারভাবে বুঝিয়ে দিন।',
    recommendedInteractiveTab: 'trends'
  },
  {
    id: 11,
    chapter: 4,
    title: 'মৌলের পর্যায়বৃত্ত ধর্ম: ইলেকট্রন আসক্তি ও তড়িৎ ঋণাত্মকতা',
    subtitle: 'ঋণাত্মক আয়নে রূপান্তর এবং সমযোজী বন্ধনের ইলেকট্রন যুগলকে নিজের দিকে আকর্ষণের মাত্রা',
    category: 'পর্যায়বৃত্ত ধর্ম',
    gallery: [
      {
        id: 'c4_s11_img1',
        titleBn: 'ইলেকট্রন আসক্তি ও তড়িৎ ঋণাত্মকতার সাধারণ ধারা',
        titleEn: 'Electron Affinity & Electronegativity Trends',
        captionBn: 'পর্যায়ে বাম থেকে ডানে বৃদ্ধি পায় এবং গ্রুপে উপর থেকে নিচে হ্রাস পায় (সবচেয়ে তড়িৎ ঋণাত্মক মৌল ফ্লোরিন F)',
        captionEn: 'Both properties increase across a period and decrease down a group (Fluorine is most electronegative at 4.0)',
        type: 'diagram',
        customDiagramType: 'periodicTrends'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ইলেকট্রন আসক্তি (EA)',
        labelEn: 'Electron Affinity',
        symbol: 'X(g) + e⁻ → X⁻(g)',
        detailBn: 'গ্যাসীয় অবস্থায় ১টি ইলেকট্রন গ্রহণ করে একক ঋণাত্মক আয়নে পরিণত হওয়ার সময় নির্গত শক্তি। হ্যালোজেনদের আসক্তি সর্বোচ্চ।',
        detailEn: 'Energy released when an electron is added to a gaseous neutral atom. Cl > F is a notable anomaly.',
        badgeType: 'trend',
        position: { x: 30, y: 50 }
      },
      {
        labelBn: 'তড়িৎ ঋণাত্মকতা (EN)',
        labelEn: 'Electronegativity (Pauling Scale)',
        symbol: 'F = 4.0 (Max)',
        detailBn: 'সমযোজী বন্ধনে শেয়ারকৃত ইলেকট্রন যুগলকে কোনো পরমাণু কর্তৃক নিজের দিকে আকর্ষণ করার আপেক্ষিক ক্ষমতা।',
        detailEn: 'Relative tendency of an atom to attract shared bonding electron pairs towards itself.',
        badgeType: 'trend',
        position: { x: 70, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'ইলেকট্রন আসক্তি কী? (Electron Affinity)',
        description: 'গ্যাসীয় অবস্থায় কোনো মৌলের ১ মোল বিচ্ছিন্ন পরমাণুর সবচেয়ে বাইরের শক্তিস্তরে ১ মোল ইলেকট্রন প্রবেশ করিয়ে ১ মোল একক ঋণাত্মক আয়নে পরিণত করতে যে পরিমাণ শক্তি নির্গত হয়, তাকে ঐ মৌলের ইলেকট্রন আসক্তি বলে।',
        formula: 'X(g) + e⁻ → X⁻(g) + শক্তি (তাপোৎপাদী প্রক্রিয়া, ΔH < ০)'
      },
      {
        heading: 'ইলেকট্রন আসক্তির ব্যতিক্রম: Cl > F কেন?',
        description: 'সাধারণ নিয়ম অনুযায়ী গ্রুপ ১৭-তে উপর থেকে নিচে নামলে ইলেকট্রন আসক্তি কমার কথা, অর্থাৎ F-এর আসক্তি Cl-এর চেয়ে বেশি হওয়ার কথা। কিন্তু ফ্লোরিনের পরমাণু অত্যন্ত ক্ষুদ্র হওয়ায় এর ২য় শক্তিস্তরে ৭টি ইলেকট্রন অতি ঘনভাবে থাকে (ইলেকট্রন মেঘের উচ্চ ঘনত্ব)। ফলে নতুন আসা ইলেকট্রনের প্রতি প্রবল আন্তঃইলেকট্রন বিকর্ষণ সৃষ্টি হয়। ক্লোরিনের আকার অপেক্ষাকৃত বড় হওয়ায় বিকর্ষণ কম হয় এবং ক্লোরিনের ইলেকট্রন আসক্তি ফ্লোরিনের চেয়ে বেশি হয় (Cl = ৩৪৯ kJ/mol, F = ৩২৮ kJ/mol)।',
        highlight: 'ইলেকট্রন আসক্তি: Cl > F > Br > I'
      },
      {
        heading: 'তড়িৎ ঋণাত্মকতা কী? (Electronegativity)',
        description: 'দুটি ভিন্ন অধাতব পরমাণু যখন সমযোজী বন্ধনে আবদ্ধ হয়, তখন বন্ধনের শেয়ারকৃত ইলেকট্রন জোড়াকে নিজের নিউক্লিয়াসের দিকে টেনে নেওয়ার আপেক্ষিক ক্ষমতাকে তড়িৎ ঋণাত্মকতা বলে। পলিং স্কেলে ফ্লোরিনের মান সর্বোচ্চ ৪.০, অক্সিজেনের ৩.৫, নাইট্রোজেনের ৩.০, ক্লোরিনের ৩.০ এবং হাইড্রোজেনের ২.১।',
        formula: 'তড়িৎ ঋণাত্মকতার ক্রম: F (৪.০) > O (৩.৫) > Cl, N (৩.০) > Br (২.৮)'
      }
    ],
    callout: {
      type: 'info',
      title: 'মনে রাখার সহজ টেকনিক (FONCl)',
      content: 'পর্যায় সারণির সর্বাধিক তড়িৎ ঋণাত্মক ৪টি মৌল ক্রমানুসারে মনে রাখার কৌশল: "ফোন কল" (F > O > N ≈ Cl)।'
    },
    speakerNotes: 'শিক্ষার্থীদের কাছে ইলেকট্রন আসক্তি (বিচ্ছিন্ন পরমাণুর ধর্ম) এবং তড়িৎ ঋণাত্মকতা (বন্ধনযুক্ত পরমাণুর ধর্ম)-র মৌলিক পার্থক্য স্পষ্টভাবে ব্যাখ্যা করুন।',
    recommendedInteractiveTab: 'trends'
  },
  {
    id: 12,
    chapter: 4,
    title: 'পর্যায় সারণির বিশেষ গ্রুপসমূহ ও মৌলের প্রকৃতি',
    subtitle: 'ক্ষার ধাতু, মৃৎক্ষার ধাতু, হ্যালোজেন, নিষ্ক্রিয় গ্যাস এবং অবস্থান্তর মৌলের চরিত্রায়ন',
    category: 'গ্রুপ পরিচিতি',
    gallery: [
      {
        id: 'c4_s12_img1',
        titleBn: 'বিশেষ গ্রুপসমূহের তুলনা ও শ্রেণিবিভাগ',
        titleEn: 'Special Chemical Families',
        captionBn: 'গ্রুপ ১ (ক্ষার ধাতু), গ্রুপ ২ (মৃৎক্ষার ধাতু), গ্রুপ ১১ (মুদ্রা ধাতু), গ্রুপ ১৭ (হ্যালোজেন), গ্রুপ ১৮ (নিষ্ক্রিয় গ্যাস)',
        captionEn: 'Alkali metals, Alkaline earth metals, Coinage metals, Halogens, and Noble gases',
        type: 'diagram',
        customDiagramType: 'specialGroupsChart'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ক্ষার ধাতু (Group 1)',
        labelEn: 'Alkali Metals',
        symbol: 'Li, Na, K, Rb, Cs, Fr',
        detailBn: 'পানিতে দ্রবীভূত হয়ে তীব্র ক্ষার ও H₂ গ্যাস তৈরি করে। এরা অত্যন্ত নরম ধাতু এবং ছুরি দিয়ে কাটা যায়।',
        detailEn: 'React vigorously with water producing caustic hydroxides and flammable H₂ gas.',
        badgeType: 'metal',
        position: { x: 20, y: 35 }
      },
      {
        labelBn: 'হ্যালোজেন (Group 17)',
        labelEn: 'Halogens (Salt Producers)',
        symbol: 'F, Cl, Br, I, At, Ts',
        detailBn: 'হ্যালোজেন শব্দের অর্থ "লবণ উৎপাদক"। এরা ধাতুর সাথে সরাসরি যুক্ত হয়ে হ্যালাইড লবণ (যেমন NaCl) গঠন করে।',
        detailEn: 'Halogen translates to "salt former"; highly reactive nonmetals that form salts with metals.',
        badgeType: 'halogen',
        position: { x: 80, y: 35 }
      },
      {
        labelBn: 'নিষ্ক্রিয় গ্যাস (Group 18)',
        labelEn: 'Noble / Inert Gases',
        symbol: 'He, Ne, Ar, Kr, Xe, Rn, Og',
        detailBn: 'বহিঃস্তর ইলেকট্রন দ্বারা পূর্ণ (অক্টেট ও দ্বিত্ব) থাকায় এরা রাসায়নিকভাবে সম্পূর্ণ নির্লিপ্ত ও একক পরমাণুক গ্যাস।',
        detailEn: 'Complete octet/duet valence configurations render them chemically inert monoatomic gases.',
        badgeType: 'noble',
        position: { x: 85, y: 70 }
      }
    ],
    keyPoints: [
      {
        heading: '১. ক্ষার ধাতু (Alkali Metals - Group 1)',
        description: 'হাইড্রোজেন ব্যতীত গ্রুপ ১-এর বাকি ৬টি মৌল (Li, Na, K, Rb, Cs, Fr)-কে ক্ষার ধাতু বলে। এরা পানির সাথে তীব্রভাবে বিক্রিয়া করে তীব্র ক্ষার (ক্ষারকীয় দ্রবণ) এবং হাইড্রোজেন গ্যাস উৎপন্ন করে। এরা অত্যন্ত নরম, বাতাসে দ্রুত জারিত হয় বলে কেরোসিনের নিচে সংরক্ষণ করা হয়।',
        formula: '২Na + ২H₂O → ২NaOH (তীব্র ক্ষার) + H₂↑'
      },
      {
        heading: '২. মৃৎক্ষার ধাতু (Alkaline Earth Metals - Group 2)',
        description: 'গ্রুপ ২-এর ৬টি মৌল (Be, Mg, Ca, Sr, Ba, Ra)-কে মৃৎক্ষার ধাতু বলে। "মৃৎ" অর্থ মাটি; এই মৌলগুলোর বিভিন্ন যৌগ মাটিতে পাওয়া যায় এবং এদের অক্সাইডগুলো পানিতে ক্ষার তৈরি করে।',
        formula: 'CaO (চুন) + H₂O → Ca(OH)₂ (স্ল্যাকড লাইম/ক্ষার)'
      },
      {
        heading: '৩. মুদ্রা ধাতু (Coinage Metals - Group 11)',
        description: 'গ্রুপ ১১-এর কপার (Cu), সিলভার (Ag) এবং গোল্ড (Au)-কে মুদ্রা ধাতু বলা হয়। প্রাচীনকাল থেকেই বাণিজ্য ও বিনিময়ের মাধ্যম হিসেবে মুদ্রা তৈরিতে এদের ব্যবহৃত হয়ে আসছে।',
        highlight: 'Cu, Ag, Au = মুদ্রা ধাতু'
      },
      {
        heading: '৪. অবস্থান্তর মৌল (Transition Elements - Group 3 to 12)',
        description: 'পর্যায় সারণির d-ব্লকের যেসকল মৌলের সুস্থিত আয়নে d-অরবিটাল আংশিক পূর্ণ (d¹ থেকে d⁹) থাকে, তাদের অবস্থান্তর মৌল বলে। এদের বৈশিষ্ট্য: এরা পরিবর্তনশীল জারণ অবস্থা দেখায়, রঙিন যৌগ গঠন করে এবং জটিল যৌগ ও অনুঘটক (Catalyst) হিসেবে কাজ করে। যেমন: Fe, Cu, Ni, Cr।',
        highlight: 'রঙিন যৌগ, পরিবর্তনশীল যোজনী ও প্রভাবক'
      },
      {
        heading: '৫. হ্যালোজেন ও নিষ্ক্রিয় গ্যাস (Group 17 & 18)',
        description: 'গ্রুপ ১৭-এর মৌলগুলো হ্যালোজেন বা লবণ উৎপাদক (F₂, Cl₂, Br₂, I₂)। গ্রুপ ১৮-এর হিলিয়াম, নিয়ন, আর্গন, ক্রিপ্টন, জেনন ও রেডন এদের বাইরের স্তর ৮টি ইলেকট্রন দ্বারা পূর্ণ থাকায় রাসায়নিকভাবে আসক্তিহীন বা নিষ্ক্রিয় গ্যাস।',
        highlight: 'লবণ উৎপাদক ও নিষ্ক্রিয় গ্যাস'
      }
    ],
    callout: {
      type: 'tip',
      title: 'অবস্থান্তর মৌলের রঙিন যৌগের জাদু',
      content: 'ল্যাবরেটরিতে কপার সালফেটের নীল বর্ণ, ফেরাস সালফেটের হালকা সবুজ বর্ণ কিংবা পটাশিয়াম পারম্যাঙ্গানেটের বেগুনি বর্ণ অবস্থান্তর ধাতুর d-d ইলেকট্রন স্থানান্তরের কারণেই সৃষ্টি হয়।'
    },
    speakerNotes: 'শিক্ষার্থীদের প্রতিটি বিশেষ গ্রুপের বৈশিষ্ট্য ও বাস্তব জীবনের ব্যবহারের উদাহরণ দিন। কেন ক্ষার ধাতুকে কেরোসিনে রাখা হয় তা আলোচনা করুন।'
  },
  {
    id: 13,
    chapter: 4,
    title: 'ধাতব ও অধাতব ধর্মের পর্যায়বৃত্ত পরিবর্তন',
    subtitle: 'ইলেকট্রন ত্যাগের প্রবণতা বনাম গ্রহণের প্রবণতা এবং অপধাতু বা উপধাতুর পরিচয়',
    category: 'ধাতব ধর্ম',
    gallery: [
      {
        id: 'c4_s13_img1',
        titleBn: 'ধাতব ও অধাতব ধর্মের দিকনির্দেশক চার্ট',
        titleEn: 'Metallic & Non-Metallic Trends',
        captionBn: 'একই পর্যায়ে বাম থেকে ডানে ধাতব ধর্ম হ্রাস পায়; গ্রুপে উপর থেকে নিচে ধাতব ধর্ম বৃদ্ধি পায়',
        captionEn: 'Metallic character decreases across a period and increases down a group',
        type: 'diagram',
        customDiagramType: 'periodicTrends'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'সর্বোচ্চ সক্রিয় ধাতু',
        labelEn: 'Most Reactive Metal',
        symbol: 'Fr / Cs',
        detailBn: 'পর্যায় সারণির একদম নিচের বাম কোণে অবস্থিত ফ্রান্সিয়াম ও সিজিয়াম সবচেয়ে শক্তিশালী ধাতু।',
        detailEn: 'Francium and Cesium at bottom-left corner exhibit greatest metallic electropositivity.',
        badgeType: 'metal',
        position: { x: 15, y: 75 }
      },
      {
        labelBn: 'সর্বোচ্চ সক্রিয় অধাতু',
        labelEn: 'Most Reactive Non-metal',
        symbol: 'F (Fluorine)',
        detailBn: 'পর্যায় সারণির একদম উপরের ডান কোণে (নিষ্ক্রিয় গ্যাস বাদে) অবস্থিত ফ্লোরিন সবচেয়ে শক্তিশালী অধাতু।',
        detailEn: 'Fluorine at the top-right corner is the most electronegative, reactive nonmetal.',
        badgeType: 'nonmetal',
        position: { x: 80, y: 25 }
      }
    ],
    keyPoints: [
      {
        heading: 'ধাতব ধর্ম কী? (Metallic Character)',
        description: 'যে সকল মৌল সহজে এক বা একাধিক ইলেকট্রন ত্যাগ করে ধনাত্মক আয়নে পরিণত হতে পারে, তাদের ধাতু বলে এবং এই ধর্মকে ধাতব ধর্ম বলে। পরমাণুর আকার যত বড় হয়, নিউক্লিয়াসের আকর্ষণ তত কমে এবং ইলেকট্রন ত্যাগ তত সহজ হয়; ফলে ধাতব ধর্ম বৃদ্ধি পায়।\n• একই পর্যায়ে বাম থেকে ডানে গেলে ধাতব ধর্ম হ্রাস পায়।\n• একই গ্রুপে উপর থেকে নিচে নামলে ধাতব ধর্ম বৃদ্ধি পায়।',
        highlight: 'ইলেকট্রন ত্যাগের প্রবণতা = ধাতব ধর্ম'
      },
      {
        heading: 'অধাতব ধর্ম কী? (Non-metallic Character)',
        description: 'যে সকল মৌল সহজে ইলেকট্রন গ্রহণ করে ঋণাত্মক আয়নে পরিণত হতে পারে, তাদের অধাতু বলে এবং এই ধর্মকে অধাতব ধর্ম বলে। পরমাণুর আকার যত ছোট হয়, ইলেকট্রন গ্রহণ তত সহজ হয়।\n• একই পর্যায়ে বাম থেকে ডানে অধাতব ধর্ম বৃদ্ধি পায়।\n• একই গ্রুপে উপর থেকে নিচে অধাতব ধর্ম হ্রাস পায়।',
        highlight: 'ইলেকট্রন গ্রহণের প্রবণতা = অধাতব ধর্ম'
      },
      {
        heading: 'অপধাতু বা উপধাতু (Metalloids / Semimetals)',
        description: 'যে সকল মৌল কখনো ধাতুর মতো আবার কখনো অধাতুর মতো আচরণ করে, তাদের অপধাতু বা উপধাতু বলে। আধুনিক সেমিকন্ডাক্টর ও ইলেকট্রনিক্স জগতে এদের গুরুত্ব অপরিসীম। প্রধান উপধাতুগুলো হলো: সিলিকন (Si), জার্মেনিয়াম (Ge), আর্সেনিক (As), অ্যান্টিমণি (Sb), বোরন (B), টেলুরিয়াম (Te)।',
        highlight: 'Si, Ge, As, Sb = অপধাতু (সেমিকন্ডাক্টর)'
      }
    ],
    callout: {
      type: 'info',
      title: 'কম্পিউটার যুগের প্রাণ',
      content: 'সিলিকন (Si) একটি অপধাতু হওয়ায় এর বৈদ্যুতিক পরিবাহিতা নিয়ন্ত্রিত করা যায়। তাই পৃথিবীর সকল কম্পিউটার ও স্মার্টফোনের মাইক্রোপ্রসেসর সিলিকন দিয়ে তৈরি।'
    },
    speakerNotes: 'শিক্ষার্থীদের বুঝিয়ে দিন যে পর্যায় সারণির বাম পাশে থাকে তীব্র ধাতু, ডান পাশে থাকে অধাতু এবং তাদের মাঝে সিঁড়ির মতো সাজানো থাকে অপধাতুসমূহ।'
  },
  {
    id: 14,
    chapter: 4,
    title: 'অধ্যায় ৪ এর সারসংক্ষেপ ও বোর্ড পরীক্ষার প্রস্তুতি',
    subtitle: 'পর্যায় সারণির মূল নীতি, ফর্মুলা, পর্যায়বৃত্ত পরিবর্তনের দ্রুত রিভিশন এবং টিপস',
    category: 'সারসংক্ষেপ ও প্রস্তুতি',
    gallery: [
      {
        id: 'c4_s14_img1',
        titleBn: 'পর্যায় সারণির পূর্ণাঙ্গ রিভিশন চার্ট',
        titleEn: 'Comprehensive Periodic Revision Chart',
        captionBn: 'পর্যায়, গ্রুপ, ব্যতিক্রম, এবং ৫টি প্রধান পর্যায়বৃত্ত ধর্মের সম্মিলিত একঝলক সারসংক্ষেপ',
        captionEn: 'Unified summary of periods, groups, rules, anomalies, and all key periodic trends',
        type: 'diagram',
        customDiagramType: 'periodicTrends'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'পর্যায়বৃত্ত ধর্মের সারাংশ',
        labelEn: 'Periodic Trends Cheat Sheet',
        symbol: 'L→R vs Top↓',
        detailBn: 'L→R: আকার কমে, ধাতব ধর্ম কমে; কিন্তু IE, EA, EN বাড়ে। Top↓: আকার বাড়ে, ধাতব ধর্ম বাড়ে; কিন্তু IE, EA, EN কমে।',
        detailEn: 'Across period: size & metallic character drop; IE, EA, EN rise. Down group: inverse.',
        badgeType: 'trend',
        position: { x: 50, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'পর্যায় ও গ্রুপ নির্ণয়ের কুইক রুলস',
        description: '১. পর্যায় = পরমাণুর সর্বোচ্চ প্রধান শক্তিস্তর n\n২. গ্রুপ (s-ব্লক) = বহিঃস্থ s ইলেকট্রন সংখ্যা\n৩. গ্রুপ (p-ব্লক) = s + p + ১০\n৪. গ্রুপ (d-ব্লক) = (n-1)d + ns',
        highlight: 'অ্যালগরিদম মনে রাখুন'
      },
      {
        heading: 'বোর্ড পরীক্ষার সুপারহিট খ-নম্বর প্রশ্ন',
        description: '• ইলেকট্রন বিন্যাসই পর্যায় সারণির মূল ভিত্তি—ব্যাখ্যা করো।\n• নাইট্রোজেনের আয়নীকরণ শক্তি অক্সিজেনের চেয়ে বেশি কেন?\n• ক্লোরিনের ইলেকট্রন আসক্তি ফ্লোরিনের চেয়ে বেশি কেন?\n• হিলিয়ামকে ২ নম্বর গ্রুপে না রেখে ১৮ নম্বর গ্রুপে রাখা হলো কেন?\n• সোডিয়ামকে কেরোসিনের নিচে রাখা হয় কেন?',
        highlight: 'অনুধাবনমূলক প্রশ্নাবলি'
      },
      {
        heading: 'সৃজনশীল প্রশ্নের উদ্দীপক প্যাটার্ন',
        description: 'উদ্দীপকে মৌলগুলোর আসল প্রতীক না দিয়ে কাল্পনিক প্রতীক (যেমন: X, Y, Z যাদের পারমাণবিক সংখ্যা যথাক্রমে ১১, ১২, ১৭) দেওয়া থাকে। উদ্দীপক সমাধান করতে পারমাণবিক সংখ্যা থেকে আগে মৌল ও ইলেকট্রন বিন্যাস শনাক্ত করতে হবে।',
        highlight: 'কাল্পনিক প্রতীক শনাক্তকরণের দক্ষতা'
      }
    ],
    tableData: {
      caption: 'পর্যায়বৃত্ত ধর্মাবলির পরিবর্তন একনজরে',
      headers: ['পর্যায়বৃত্ত ধর্ম', 'একই পর্যায়ে (বাম থেকে ডানে)', 'একই গ্রুপে (উপর থেকে নিচে)'],
      rows: [
        ['পারমাণবিক ব্যাসার্ধ (আকার)', 'হ্রাস পায়', 'বৃদ্ধি পায়'],
        ['ধাতব ধর্ম', 'হ্রাস পায়', 'বৃদ্ধি পায়'],
        ['অধাতব ধর্ম', 'বৃদ্ধি পায়', 'হ্রাস পায়'],
        ['আয়নীকরণ শক্তি', 'বৃদ্ধি পায় (ব্যতিক্রম: Be>B, N>O)', 'হ্রাস পায়'],
        ['ইলেকট্রন আসক্তি', 'বৃদ্ধি পায় (ব্যতিক্রম: Cl>F)', 'হ্রাস পায়'],
        ['তড়িৎ ঋণাত্মকতা', 'বৃদ্ধি পায় (সর্বোচ্চ F)', 'হ্রাস পায়']
      ]
    },
    callout: {
      type: 'tip',
      title: 'পরবর্তী ধাপ',
      content: 'এখন কুইজ টেস্ট সেকশনে গিয়ে অধ্যায় ৪-এর বহুনির্বাচনী প্রশ্ন সমাধান করে নিজের প্রস্তুতি যাচাই করুন এবং ইন্টারেক্টিভ পর্যায় সারণি ও অবস্থান নির্ণয় ল্যাব এক্সপ্লোর করুন!'
    },
    speakerNotes: 'শিক্ষার্থীদের সম্পূর্ণ অধ্যায়ের রিভিশন করিয়ে কুইজে অংশগ্রহণের জন্য অনুপ্রাণিত করুন।'
  }
];
