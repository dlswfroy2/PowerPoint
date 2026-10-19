/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Slide } from '../types/presentation';

export const biologyChapter2Slides: Slide[] = [
  // Slide 1: উদ্ভিদকোষের সামগ্রিক রূপরেখা ও পুরু প্রাচীর
  {
    id: 1,
    subject: 'biology',
    chapter: 2,
    title: "উদ্ভিদকোষের সামগ্রিক রূপরেখা ও পুরু প্রাচীর",
    subtitle: "Plant Cell Architecture & Wall",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s1.svg",
    imageCaption: "২.২ উদ্ভিদকোষের সামগ্রিক রূপরেখা ও পুরু প্রাচীর — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m1",
    gallery: [
      {
        id: 'bio2_s1_img1',
        titleBn: "উদ্ভিদকোষের সামগ্রিক রূপরেখা ও পুরু প্রাচীর (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Plant Cell Architecture & Wall (2D Vector Diagram)",
        captionBn: "২.২ সেলুলোজ প্রাচীর, বড় ভ্যাকুওল ও প্লাস্টিড। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Plant Cell Architecture & Wall.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s1.svg",
        customDiagramType: "bioCh2_m1"
      },
      {
        id: 'bio2_s1_img2',
        titleBn: "উদ্ভিদকোষের সামগ্রিক রূপরেখা ও পুরু প্রাচীর (বাস্তব রূপায়ন)",
        titleEn: "Plant Cell Architecture & Wall (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট উদ্ভিদকোষের সামগ্রিক রূপরেখা ও পুরু প্রাচীর।",
        captionEn: "High-definition visualization of Plant Cell Architecture & Wall.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s1.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "উদ্ভিদকোষের সামগ্রিক রূপরেখা ও পুরু প্রাচীর",
        labelEn: "Plant Cell Architecture & Wall",
        detailBn: "সেলুলোজ প্রাচীর, বড় ভ্যাকুওল ও প্লাস্টিড",
        detailEn: "Structural core of Plant Cell Architecture & Wall.",
        symbol: 'M1',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.২ উদ্ভিদকোষের সামগ্রিক রূপরেখা ও পুরু প্রাচীর এর মৌলিক পরিচয়",
        description: "সেলুলোজ প্রাচীর, বড় ভ্যাকুওল ও প্লাস্টিড। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.২ উদ্ভিদকোষের সামগ্রিক রূপরেখা ও পুরু প্রাচীর"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল জ্ঞান ও অনুধাবনমূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.২: উদ্ভিদকোষের সামগ্রিক রূপরেখা ও পুরু প্রাচীর এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 2: প্রাণীকোষের সামগ্রিক রূপরেখা ও ঝিল্লি
  {
    id: 2,
    subject: 'biology',
    chapter: 2,
    title: "প্রাণীকোষের সামগ্রিক রূপরেখা ও ঝিল্লি",
    subtitle: "Animal Cell Internal Cytology",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s2.svg",
    imageCaption: "২.২ প্রাণীকোষের সামগ্রিক রূপরেখা ও ঝিল্লি — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m2",
    gallery: [
      {
        id: 'bio2_s2_img1',
        titleBn: "প্রাণীকোষের সামগ্রিক রূপরেখা ও ঝিল্লি (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Animal Cell Internal Cytology (2D Vector Diagram)",
        captionBn: "২.২ নমনীয় প্লাজমালেমা ও সেন্ট্রোসোম গঠন। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Animal Cell Internal Cytology.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s2.svg",
        customDiagramType: "bioCh2_m2"
      },
      {
        id: 'bio2_s2_img2',
        titleBn: "প্রাণীকোষের সামগ্রিক রূপরেখা ও ঝিল্লি (বাস্তব রূপায়ন)",
        titleEn: "Animal Cell Internal Cytology (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট প্রাণীকোষের সামগ্রিক রূপরেখা ও ঝিল্লি।",
        captionEn: "High-definition visualization of Animal Cell Internal Cytology.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s2.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "প্রাণীকোষের সামগ্রিক রূপরেখা ও ঝিল্লি",
        labelEn: "Animal Cell Internal Cytology",
        detailBn: "নমনীয় প্লাজমালেমা ও সেন্ট্রোসোম গঠন",
        detailEn: "Structural core of Animal Cell Internal Cytology.",
        symbol: 'M2',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.২ প্রাণীকোষের সামগ্রিক রূপরেখা ও ঝিল্লি এর মৌলিক পরিচয়",
        description: "নমনীয় প্লাজমালেমা ও সেন্ট্রোসোম গঠন। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.২ প্রাণীকোষের সামগ্রিক রূপরেখা ও ঝিল্লি"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল প্রয়োগ ও উচ্চতর দক্ষতামূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.২: প্রাণীকোষের সামগ্রিক রূপরেখা ও ঝিল্লি এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 3: প্লাজমামেমব্রেন বা ফ্লুইড মোজাইক মডেল
  {
    id: 3,
    subject: 'biology',
    chapter: 2,
    title: "প্লাজমামেমব্রেন বা ফ্লুইড মোজাইক মডেল",
    subtitle: "Fluid Mosaic Membrane Model",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s3.svg",
    imageCaption: "২.২ প্লাজমামেমব্রেন বা ফ্লুইড মোজাইক মডেল — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m3",
    gallery: [
      {
        id: 'bio2_s3_img1',
        titleBn: "প্লাজমামেমব্রেন বা ফ্লুইড মোজাইক মডেল (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Fluid Mosaic Membrane Model (2D Vector Diagram)",
        captionBn: "২.২ ফসফোলিপিড বাইলেয়ার ও প্রোটিন চ্যানেল। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Fluid Mosaic Membrane Model.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s3.svg",
        customDiagramType: "bioCh2_m3"
      },
      {
        id: 'bio2_s3_img2',
        titleBn: "প্লাজমামেমব্রেন বা ফ্লুইড মোজাইক মডেল (বাস্তব রূপায়ন)",
        titleEn: "Fluid Mosaic Membrane Model (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট প্লাজমামেমব্রেন বা ফ্লুইড মোজাইক মডেল।",
        captionEn: "High-definition visualization of Fluid Mosaic Membrane Model.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s3.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "প্লাজমামেমব্রেন বা ফ্লুইড মোজাইক মডেল",
        labelEn: "Fluid Mosaic Membrane Model",
        detailBn: "ফসফোলিপিড বাইলেয়ার ও প্রোটিন চ্যানেল",
        detailEn: "Structural core of Fluid Mosaic Membrane Model.",
        symbol: 'M3',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.২ প্লাজমামেমব্রেন বা ফ্লুইড মোজাইক মডেল এর মৌলিক পরিচয়",
        description: "ফসফোলিপিড বাইলেয়ার ও প্রোটিন চ্যানেল। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.২ প্লাজমামেমব্রেন বা ফ্লুইড মোজাইক মডেল"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল জ্ঞান ও অনুধাবনমূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.২: প্লাজমামেমব্রেন বা ফ্লুইড মোজাইক মডেল এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 4: মাইটোকন্ড্রিয়া — কোষের শক্তিকেন্দ্র
  {
    id: 4,
    subject: 'biology',
    chapter: 2,
    title: "মাইটোকন্ড্রিয়া — কোষের শক্তিকেন্দ্র",
    subtitle: "Mitochondrion Powerhouse 3D",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s4.svg",
    imageCaption: "২.৩ মাইটোকন্ড্রিয়া — কোষের শক্তিকেন্দ্র — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m4",
    gallery: [
      {
        id: 'bio2_s4_img1',
        titleBn: "মাইটোকন্ড্রিয়া — কোষের শক্তিকেন্দ্র (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Mitochondrion Powerhouse 3D (2D Vector Diagram)",
        captionBn: "২.৩ ভাঁজযুক্ত ক্রিস্টি, ম্যাট্রিক্স ও ATP সিন্থেজ। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Mitochondrion Powerhouse 3D.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s4.svg",
        customDiagramType: "bioCh2_m4"
      },
      {
        id: 'bio2_s4_img2',
        titleBn: "মাইটোকন্ড্রিয়া — কোষের শক্তিকেন্দ্র (বাস্তব রূপায়ন)",
        titleEn: "Mitochondrion Powerhouse 3D (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট মাইটোকন্ড্রিয়া — কোষের শক্তিকেন্দ্র।",
        captionEn: "High-definition visualization of Mitochondrion Powerhouse 3D.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s4.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "মাইটোকন্ড্রিয়া — কোষের শক্তিকেন্দ্র",
        labelEn: "Mitochondrion Powerhouse 3D",
        detailBn: "ভাঁজযুক্ত ক্রিস্টি, ম্যাট্রিক্স ও ATP সিন্থেজ",
        detailEn: "Structural core of Mitochondrion Powerhouse 3D.",
        symbol: 'M4',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৩ মাইটোকন্ড্রিয়া — কোষের শক্তিকেন্দ্র এর মৌলিক পরিচয়",
        description: "ভাঁজযুক্ত ক্রিস্টি, ম্যাট্রিক্স ও ATP সিন্থেজ। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৩ মাইটোকন্ড্রিয়া — কোষের শক্তিকেন্দ্র"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল প্রয়োগ ও উচ্চতর দক্ষতামূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৩: মাইটোকন্ড্রিয়া — কোষের শক্তিকেন্দ্র এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 5: ক্লোরোপ্লাস্ট — গ্রানা থাইলাকয়েড ও স্ট্রোমা
  {
    id: 5,
    subject: 'biology',
    chapter: 2,
    title: "ক্লোরোপ্লাস্ট — গ্রানা থাইলাকয়েড ও স্ট্রোমা",
    subtitle: "Chloroplast Grana & Stroma Folds",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s5.svg",
    imageCaption: "২.৩ ক্লোরোপ্লাস্ট — গ্রানা থাইলাকয়েড ও স্ট্রোমা — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m5",
    gallery: [
      {
        id: 'bio2_s5_img1',
        titleBn: "ক্লোরোপ্লাস্ট — গ্রানা থাইলাকয়েড ও স্ট্রোমা (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Chloroplast Grana & Stroma Folds (2D Vector Diagram)",
        captionBn: "২.৩ গ্রানাম থাইলাকয়েড চাকতি ও স্ট্রোমা তরল। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Chloroplast Grana & Stroma Folds.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s5.svg",
        customDiagramType: "bioCh2_m5"
      },
      {
        id: 'bio2_s5_img2',
        titleBn: "ক্লোরোপ্লাস্ট — গ্রানা থাইলাকয়েড ও স্ট্রোমা (বাস্তব রূপায়ন)",
        titleEn: "Chloroplast Grana & Stroma Folds (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট ক্লোরোপ্লাস্ট — গ্রানা থাইলাকয়েড ও স্ট্রোমা।",
        captionEn: "High-definition visualization of Chloroplast Grana & Stroma Folds.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s5.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "ক্লোরোপ্লাস্ট — গ্রানা থাইলাকয়েড ও স্ট্রোমা",
        labelEn: "Chloroplast Grana & Stroma Folds",
        detailBn: "গ্রানাম থাইলাকয়েড চাকতি ও স্ট্রোমা তরল",
        detailEn: "Structural core of Chloroplast Grana & Stroma Folds.",
        symbol: 'M5',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৩ ক্লোরোপ্লাস্ট — গ্রানা থাইলাকয়েড ও স্ট্রোমা এর মৌলিক পরিচয়",
        description: "গ্রানাম থাইলাকয়েড চাকতি ও স্ট্রোমা তরল। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৩ ক্লোরোপ্লাস্ট — গ্রানা থাইলাকয়েড ও স্ট্রোমা"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল জ্ঞান ও অনুধাবনমূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৩: ক্লোরোপ্লাস্ট — গ্রানা থাইলাকয়েড ও স্ট্রোমা এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 6: এন্ডোপ্লাজমিক রেটিকুলাম — অমসৃণ ও মসৃণ
  {
    id: 6,
    subject: 'biology',
    chapter: 2,
    title: "এন্ডোপ্লাজমিক রেটিকুলাম — অমসৃণ ও মসৃণ",
    subtitle: "Rough & Smooth Endoplasmic Reticulum",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s6.svg",
    imageCaption: "২.৩ এন্ডোপ্লাজমিক রেটিকুলাম — অমসৃণ ও মসৃণ — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m6",
    gallery: [
      {
        id: 'bio2_s6_img1',
        titleBn: "এন্ডোপ্লাজমিক রেটিকুলাম — অমসৃণ ও মসৃণ (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Rough & Smooth Endoplasmic Reticulum (2D Vector Diagram)",
        captionBn: "২.৩ রাইবোসোমযুক্ত RER ও লিপিড সংশ্লেষী SER। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Rough & Smooth Endoplasmic Reticulum.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s6.svg",
        customDiagramType: "bioCh2_m6"
      },
      {
        id: 'bio2_s6_img2',
        titleBn: "এন্ডোপ্লাজমিক রেটিকুলাম — অমসৃণ ও মসৃণ (বাস্তব রূপায়ন)",
        titleEn: "Rough & Smooth Endoplasmic Reticulum (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট এন্ডোপ্লাজমিক রেটিকুলাম — অমসৃণ ও মসৃণ।",
        captionEn: "High-definition visualization of Rough & Smooth Endoplasmic Reticulum.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s6.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "এন্ডোপ্লাজমিক রেটিকুলাম — অমসৃণ ও মসৃণ",
        labelEn: "Rough & Smooth Endoplasmic Reticulum",
        detailBn: "রাইবোসোমযুক্ত RER ও লিপিড সংশ্লেষী SER",
        detailEn: "Structural core of Rough & Smooth Endoplasmic Reticulum.",
        symbol: 'M6',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৩ এন্ডোপ্লাজমিক রেটিকুলাম — অমসৃণ ও মসৃণ এর মৌলিক পরিচয়",
        description: "রাইবোসোমযুক্ত RER ও লিপিড সংশ্লেষী SER। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৩ এন্ডোপ্লাজমিক রেটিকুলাম — অমসৃণ ও মসৃণ"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল প্রয়োগ ও উচ্চতর দক্ষতামূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৩: এন্ডোপ্লাজমিক রেটিকুলাম — অমসৃণ ও মসৃণ এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 7: গলগি বডি — ক্ষরণকারী সিস্টার্নি স্তূপ
  {
    id: 7,
    subject: 'biology',
    chapter: 2,
    title: "গলগি বডি — ক্ষরণকারী সিস্টার্নি স্তূপ",
    subtitle: "Golgi Apparatus Cisternae Stacks",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s7.svg",
    imageCaption: "২.৩ গলগি বডি — ক্ষরণকারী সিস্টার্নি স্তূপ — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m7",
    gallery: [
      {
        id: 'bio2_s7_img1',
        titleBn: "গলগি বডি — ক্ষরণকারী সিস্টার্নি স্তূপ (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Golgi Apparatus Cisternae Stacks (2D Vector Diagram)",
        captionBn: "২.৩ প্রোটিন প্যাকেজিং ও ক্ষরণকারী ভেসিকল। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Golgi Apparatus Cisternae Stacks.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s7.svg",
        customDiagramType: "bioCh2_m7"
      },
      {
        id: 'bio2_s7_img2',
        titleBn: "গলগি বডি — ক্ষরণকারী সিস্টার্নি স্তূপ (বাস্তব রূপায়ন)",
        titleEn: "Golgi Apparatus Cisternae Stacks (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট গলগি বডি — ক্ষরণকারী সিস্টার্নি স্তূপ।",
        captionEn: "High-definition visualization of Golgi Apparatus Cisternae Stacks.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s7.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "গলগি বডি — ক্ষরণকারী সিস্টার্নি স্তূপ",
        labelEn: "Golgi Apparatus Cisternae Stacks",
        detailBn: "প্রোটিন প্যাকেজিং ও ক্ষরণকারী ভেসিকল",
        detailEn: "Structural core of Golgi Apparatus Cisternae Stacks.",
        symbol: 'M7',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৩ গলগি বডি — ক্ষরণকারী সিস্টার্নি স্তূপ এর মৌলিক পরিচয়",
        description: "প্রোটিন প্যাকেজিং ও ক্ষরণকারী ভেসিকল। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৩ গলগি বডি — ক্ষরণকারী সিস্টার্নি স্তূপ"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল জ্ঞান ও অনুধাবনমূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৩: গলগি বডি — ক্ষরণকারী সিস্টার্নি স্তূপ এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 8: লাইসোজোম — আত্মঘাতী হাইড্রোলাইটিক থলিকা
  {
    id: 8,
    subject: 'biology',
    chapter: 2,
    title: "লাইসোজোম — আত্মঘাতী হাইড্রোলাইটিক থলিকা",
    subtitle: "Lysosome Hydrolytic Digestion Bag",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s8.svg",
    imageCaption: "২.৩ লাইসোজোম — আত্মঘাতী হাইড্রোলাইটিক থলিকা — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m8",
    gallery: [
      {
        id: 'bio2_s8_img1',
        titleBn: "লাইসোজোম — আত্মঘাতী হাইড্রোলাইটিক থলিকা (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Lysosome Hydrolytic Digestion Bag (2D Vector Diagram)",
        captionBn: "২.৩ অটোলাইসিস ও ফ্যাগোসাইটিক পরিপাক থলি। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Lysosome Hydrolytic Digestion Bag.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s8.svg",
        customDiagramType: "bioCh2_m8"
      },
      {
        id: 'bio2_s8_img2',
        titleBn: "লাইসোজোম — আত্মঘাতী হাইড্রোলাইটিক থলিকা (বাস্তব রূপায়ন)",
        titleEn: "Lysosome Hydrolytic Digestion Bag (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট লাইসোজোম — আত্মঘাতী হাইড্রোলাইটিক থলিকা।",
        captionEn: "High-definition visualization of Lysosome Hydrolytic Digestion Bag.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s8.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "লাইসোজোম — আত্মঘাতী হাইড্রোলাইটিক থলিকা",
        labelEn: "Lysosome Hydrolytic Digestion Bag",
        detailBn: "অটোলাইসিস ও ফ্যাগোসাইটিক পরিপাক থলি",
        detailEn: "Structural core of Lysosome Hydrolytic Digestion Bag.",
        symbol: 'M8',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৩ লাইসোজোম — আত্মঘাতী হাইড্রোলাইটিক থলিকা এর মৌলিক পরিচয়",
        description: "অটোলাইসিস ও ফ্যাগোসাইটিক পরিপাক থলি। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৩ লাইসোজোম — আত্মঘাতী হাইড্রোলাইটিক থলিকা"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল প্রয়োগ ও উচ্চতর দক্ষতামূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৩: লাইসোজোম — আত্মঘাতী হাইড্রোলাইটিক থলিকা এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 9: সেন্ট্রোসোম ও ত্রয়ী সেন্ট্রিওল জোড়
  {
    id: 9,
    subject: 'biology',
    chapter: 2,
    title: "সেন্ট্রোসোম ও ত্রয়ী সেন্ট্রিওল জোড়",
    subtitle: "Centrosome & Triplet Centrioles",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s9.svg",
    imageCaption: "২.৩ সেন্ট্রোসোম ও ত্রয়ী সেন্ট্রিওল জোড় — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m9",
    gallery: [
      {
        id: 'bio2_s9_img1',
        titleBn: "সেন্ট্রোসোম ও ত্রয়ী সেন্ট্রিওল জোড় (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Centrosome & Triplet Centrioles (2D Vector Diagram)",
        captionBn: "২.৩ মাইক্রোটিউবিউলস ও স্পিন্ডল তন্তু উৎস। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Centrosome & Triplet Centrioles.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s9.svg",
        customDiagramType: "bioCh2_m9"
      },
      {
        id: 'bio2_s9_img2',
        titleBn: "সেন্ট্রোসোম ও ত্রয়ী সেন্ট্রিওল জোড় (বাস্তব রূপায়ন)",
        titleEn: "Centrosome & Triplet Centrioles (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট সেন্ট্রোসোম ও ত্রয়ী সেন্ট্রিওল জোড়।",
        captionEn: "High-definition visualization of Centrosome & Triplet Centrioles.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s9.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "সেন্ট্রোসোম ও ত্রয়ী সেন্ট্রিওল জোড়",
        labelEn: "Centrosome & Triplet Centrioles",
        detailBn: "মাইক্রোটিউবিউলস ও স্পিন্ডল তন্তু উৎস",
        detailEn: "Structural core of Centrosome & Triplet Centrioles.",
        symbol: 'M9',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৩ সেন্ট্রোসোম ও ত্রয়ী সেন্ট্রিওল জোড় এর মৌলিক পরিচয়",
        description: "মাইক্রোটিউবিউলস ও স্পিন্ডল তন্তু উৎস। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৩ সেন্ট্রোসোম ও ত্রয়ী সেন্ট্রিওল জোড়"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল জ্ঞান ও অনুধাবনমূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৩: সেন্ট্রোসোম ও ত্রয়ী সেন্ট্রিওল জোড় এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 10: কোষীয় নিউক্লিয়াস ও ক্রোমাটিন জালিকা
  {
    id: 10,
    subject: 'biology',
    chapter: 2,
    title: "কোষীয় নিউক্লিয়াস ও ক্রোমাটিন জালিকা",
    subtitle: "Cell Nucleus & Chromatin Reticulum",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s10.svg",
    imageCaption: "২.৪ কোষীয় নিউক্লিয়াস ও ক্রোমাটিন জালিকা — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m10",
    gallery: [
      {
        id: 'bio2_s10_img1',
        titleBn: "কোষীয় নিউক্লিয়াস ও ক্রোমাটিন জালিকা (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Cell Nucleus & Chromatin Reticulum (2D Vector Diagram)",
        captionBn: "২.৪ দ্বিস্তরী নিউক্লিয়ার পর্দা ও ঘন নিউক্লিওলাস। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Cell Nucleus & Chromatin Reticulum.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s10.svg",
        customDiagramType: "bioCh2_m10"
      },
      {
        id: 'bio2_s10_img2',
        titleBn: "কোষীয় নিউক্লিয়াস ও ক্রোমাটিন জালিকা (বাস্তব রূপায়ন)",
        titleEn: "Cell Nucleus & Chromatin Reticulum (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট কোষীয় নিউক্লিয়াস ও ক্রোমাটিন জালিকা।",
        captionEn: "High-definition visualization of Cell Nucleus & Chromatin Reticulum.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s10.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "কোষীয় নিউক্লিয়াস ও ক্রোমাটিন জালিকা",
        labelEn: "Cell Nucleus & Chromatin Reticulum",
        detailBn: "দ্বিস্তরী নিউক্লিয়ার পর্দা ও ঘন নিউক্লিওলাস",
        detailEn: "Structural core of Cell Nucleus & Chromatin Reticulum.",
        symbol: 'M10',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৪ কোষীয় নিউক্লিয়াস ও ক্রোমাটিন জালিকা এর মৌলিক পরিচয়",
        description: "দ্বিস্তরী নিউক্লিয়ার পর্দা ও ঘন নিউক্লিওলাস। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৪ কোষীয় নিউক্লিয়াস ও ক্রোমাটিন জালিকা"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল প্রয়োগ ও উচ্চতর দক্ষতামূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৪: কোষীয় নিউক্লিয়াস ও ক্রোমাটিন জালিকা এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 11: রাইবোসোম — ৬০S ও ৪০S সাবইউনিট
  {
    id: 11,
    subject: 'biology',
    chapter: 2,
    title: "রাইবোসোম — ৬০S ও ৪০S সাবইউনিট",
    subtitle: "Ribosomal Subunits 60S/40S Unit",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s11.svg",
    imageCaption: "২.৩ রাইবোসোম — ৬০S ও ৪০S সাবইউনিট — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m11",
    gallery: [
      {
        id: 'bio2_s11_img1',
        titleBn: "রাইবোসোম — ৬০S ও ৪০S সাবইউনিট (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Ribosomal Subunits 60S/40S Unit (2D Vector Diagram)",
        captionBn: "২.৩ প্রোটিন সংশ্লেষণের আণবিক কারখানা। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Ribosomal Subunits 60S/40S Unit.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s11.svg",
        customDiagramType: "bioCh2_m11"
      },
      {
        id: 'bio2_s11_img2',
        titleBn: "রাইবোসোম — ৬০S ও ৪০S সাবইউনিট (বাস্তব রূপায়ন)",
        titleEn: "Ribosomal Subunits 60S/40S Unit (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট রাইবোসোম — ৬০S ও ৪০S সাবইউনিট।",
        captionEn: "High-definition visualization of Ribosomal Subunits 60S/40S Unit.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s11.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "রাইবোসোম — ৬০S ও ৪০S সাবইউনিট",
        labelEn: "Ribosomal Subunits 60S/40S Unit",
        detailBn: "প্রোটিন সংশ্লেষণের আণবিক কারখানা",
        detailEn: "Structural core of Ribosomal Subunits 60S/40S Unit.",
        symbol: 'M11',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৩ রাইবোসোম — ৬০S ও ৪০S সাবইউনিট এর মৌলিক পরিচয়",
        description: "প্রোটিন সংশ্লেষণের আণবিক কারখানা। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৩ রাইবোসোম — ৬০S ও ৪০S সাবইউনিট"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল জ্ঞান ও অনুধাবনমূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৩: রাইবোসোম — ৬০S ও ৪০S সাবইউনিট এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 12: প্যারেনকাইমা টিস্যু ও আন্তঃকোষীয় ফাঁক
  {
    id: 12,
    subject: 'biology',
    chapter: 2,
    title: "প্যারেনকাইমা টিস্যু ও আন্তঃকোষীয় ফাঁক",
    subtitle: "Parenchyma Simple Tissue & Spaces",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s12.svg",
    imageCaption: "২.৫ প্যারেনকাইমা টিস্যু ও আন্তঃকোষীয় ফাঁক — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m12",
    gallery: [
      {
        id: 'bio2_s12_img1',
        titleBn: "প্যারেনকাইমা টিস্যু ও আন্তঃকোষীয় ফাঁক (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Parenchyma Simple Tissue & Spaces (2D Vector Diagram)",
        captionBn: "২.৫ পাতলা সেলুলোজ প্রাচীর ও সজীব টিস্যু। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Parenchyma Simple Tissue & Spaces.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s12.svg",
        customDiagramType: "bioCh2_m12"
      },
      {
        id: 'bio2_s12_img2',
        titleBn: "প্যারেনকাইমা টিস্যু ও আন্তঃকোষীয় ফাঁক (বাস্তব রূপায়ন)",
        titleEn: "Parenchyma Simple Tissue & Spaces (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট প্যারেনকাইমা টিস্যু ও আন্তঃকোষীয় ফাঁক।",
        captionEn: "High-definition visualization of Parenchyma Simple Tissue & Spaces.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s12.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "প্যারেনকাইমা টিস্যু ও আন্তঃকোষীয় ফাঁক",
        labelEn: "Parenchyma Simple Tissue & Spaces",
        detailBn: "পাতলা সেলুলোজ প্রাচীর ও সজীব টিস্যু",
        detailEn: "Structural core of Parenchyma Simple Tissue & Spaces.",
        symbol: 'M12',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৫ প্যারেনকাইমা টিস্যু ও আন্তঃকোষীয় ফাঁক এর মৌলিক পরিচয়",
        description: "পাতলা সেলুলোজ প্রাচীর ও সজীব টিস্যু। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৫ প্যারেনকাইমা টিস্যু ও আন্তঃকোষীয় ফাঁক"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল প্রয়োগ ও উচ্চতর দক্ষতামূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৫: প্যারেনকাইমা টিস্যু ও আন্তঃকোষীয় ফাঁক এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 13: কোলেনকাইমা টিস্যু — কোণায় পেকটিন পুরুত্ব
  {
    id: 13,
    subject: 'biology',
    chapter: 2,
    title: "কোলেনকাইমা টিস্যু — কোণায় পেকটিন পুরুত্ব",
    subtitle: "Collenchyma Angular Thickening",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s13.svg",
    imageCaption: "২.৫ কোলেনকাইমা টিস্যু — কোণায় পেকটিন পুরুত্ব — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m13",
    gallery: [
      {
        id: 'bio2_s13_img1',
        titleBn: "কোলেনকাইমা টিস্যু — কোণায় পেকটিন পুরুত্ব (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Collenchyma Angular Thickening (2D Vector Diagram)",
        captionBn: "২.৫ পেকটিন জমে দৃঢ়তা ও স্থিতিস্থাপকতা বৃদ্ধি। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Collenchyma Angular Thickening.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s13.svg",
        customDiagramType: "bioCh2_m13"
      },
      {
        id: 'bio2_s13_img2',
        titleBn: "কোলেনকাইমা টিস্যু — কোণায় পেকটিন পুরুত্ব (বাস্তব রূপায়ন)",
        titleEn: "Collenchyma Angular Thickening (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট কোলেনকাইমা টিস্যু — কোণায় পেকটিন পুরুত্ব।",
        captionEn: "High-definition visualization of Collenchyma Angular Thickening.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s13.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "কোলেনকাইমা টিস্যু — কোণায় পেকটিন পুরুত্ব",
        labelEn: "Collenchyma Angular Thickening",
        detailBn: "পেকটিন জমে দৃঢ়তা ও স্থিতিস্থাপকতা বৃদ্ধি",
        detailEn: "Structural core of Collenchyma Angular Thickening.",
        symbol: 'M13',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৫ কোলেনকাইমা টিস্যু — কোণায় পেকটিন পুরুত্ব এর মৌলিক পরিচয়",
        description: "পেকটিন জমে দৃঢ়তা ও স্থিতিস্থাপকতা বৃদ্ধি। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৫ কোলেনকাইমা টিস্যু — কোণায় পেকটিন পুরুত্ব"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল জ্ঞান ও অনুধাবনমূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৫: কোলেনকাইমা টিস্যু — কোণায় পেকটিন পুরুত্ব এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 14: স্ক্লেরেনকাইমা — স্টোন সেল ও বাস্ট ফাইবার
  {
    id: 14,
    subject: 'biology',
    chapter: 2,
    title: "স্ক্লেরেনকাইমা — স্টোন সেল ও বাস্ট ফাইবার",
    subtitle: "Sclerenchyma Stone Cell & Sclerite",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s14.svg",
    imageCaption: "২.৫ স্ক্লেরেনকাইমা — স্টোন সেল ও বাস্ট ফাইবার — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m14",
    gallery: [
      {
        id: 'bio2_s14_img1',
        titleBn: "স্ক্লেরেনকাইমা — স্টোন সেল ও বাস্ট ফাইবার (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Sclerenchyma Stone Cell & Sclerite (2D Vector Diagram)",
        captionBn: "২.৫ লিগনিনযুক্ত অত্যন্ত পুরু ও শক্ত মৃত টিস্যু। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Sclerenchyma Stone Cell & Sclerite.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s14.svg",
        customDiagramType: "bioCh2_m14"
      },
      {
        id: 'bio2_s14_img2',
        titleBn: "স্ক্লেরেনকাইমা — স্টোন সেল ও বাস্ট ফাইবার (বাস্তব রূপায়ন)",
        titleEn: "Sclerenchyma Stone Cell & Sclerite (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট স্ক্লেরেনকাইমা — স্টোন সেল ও বাস্ট ফাইবার।",
        captionEn: "High-definition visualization of Sclerenchyma Stone Cell & Sclerite.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s14.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "স্ক্লেরেনকাইমা — স্টোন সেল ও বাস্ট ফাইবার",
        labelEn: "Sclerenchyma Stone Cell & Sclerite",
        detailBn: "লিগনিনযুক্ত অত্যন্ত পুরু ও শক্ত মৃত টিস্যু",
        detailEn: "Structural core of Sclerenchyma Stone Cell & Sclerite.",
        symbol: 'M14',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৫ স্ক্লেরেনকাইমা — স্টোন সেল ও বাস্ট ফাইবার এর মৌলিক পরিচয়",
        description: "লিগনিনযুক্ত অত্যন্ত পুরু ও শক্ত মৃত টিস্যু। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৫ স্ক্লেরেনকাইমা — স্টোন সেল ও বাস্ট ফাইবার"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল প্রয়োগ ও উচ্চতর দক্ষতামূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৫: স্ক্লেরেনকাইমা — স্টোন সেল ও বাস্ট ফাইবার এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 15: জাইলেম ভেসেল ও ট্রাকিড পানি পাইপ
  {
    id: 15,
    subject: 'biology',
    chapter: 2,
    title: "জাইলেম ভেসেল ও ট্রাকিড পানি পাইপ",
    subtitle: "Xylem Vessel & Tracheid Pipeline",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s15.svg",
    imageCaption: "২.৫ জাইলেম ভেসেল ও ট্রাকিড পানি পাইপ — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m15",
    gallery: [
      {
        id: 'bio2_s15_img1',
        titleBn: "জাইলেম ভেসেল ও ট্রাকিড পানি পাইপ (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Xylem Vessel & Tracheid Pipeline (2D Vector Diagram)",
        captionBn: "২.৫ প্রান্ত প্রাচীরহীন অবিচ্ছিন্ন পানি বাহিকা। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Xylem Vessel & Tracheid Pipeline.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s15.svg",
        customDiagramType: "bioCh2_m15"
      },
      {
        id: 'bio2_s15_img2',
        titleBn: "জাইলেম ভেসেল ও ট্রাকিড পানি পাইপ (বাস্তব রূপায়ন)",
        titleEn: "Xylem Vessel & Tracheid Pipeline (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট জাইলেম ভেসেল ও ট্রাকিড পানি পাইপ।",
        captionEn: "High-definition visualization of Xylem Vessel & Tracheid Pipeline.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s15.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "জাইলেম ভেসেল ও ট্রাকিড পানি পাইপ",
        labelEn: "Xylem Vessel & Tracheid Pipeline",
        detailBn: "প্রান্ত প্রাচীরহীন অবিচ্ছিন্ন পানি বাহিকা",
        detailEn: "Structural core of Xylem Vessel & Tracheid Pipeline.",
        symbol: 'M15',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৫ জাইলেম ভেসেল ও ট্রাকিড পানি পাইপ এর মৌলিক পরিচয়",
        description: "প্রান্ত প্রাচীরহীন অবিচ্ছিন্ন পানি বাহিকা। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৫ জাইলেম ভেসেল ও ট্রাকিড পানি পাইপ"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল জ্ঞান ও অনুধাবনমূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৫: জাইলেম ভেসেল ও ট্রাকিড পানি পাইপ এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 16: ফ্লোয়েম সিভনল ও নিউক্লিয়াসযুক্ত সঙ্গী কোষ
  {
    id: 16,
    subject: 'biology',
    chapter: 2,
    title: "ফ্লোয়েম সিভনল ও নিউক্লিয়াসযুক্ত সঙ্গী কোষ",
    subtitle: "Phloem Sieve Tube & Companion Cell",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s16.svg",
    imageCaption: "২.৫ ফ্লোয়েম সিভনল ও নিউক্লিয়াসযুক্ত সঙ্গী কোষ — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m16",
    gallery: [
      {
        id: 'bio2_s16_img1',
        titleBn: "ফ্লোয়েম সিভনল ও নিউক্লিয়াসযুক্ত সঙ্গী কোষ (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Phloem Sieve Tube & Companion Cell (2D Vector Diagram)",
        captionBn: "২.৫ চালুনির মতো সিভপ্লেট ও খাদ্য সংবহন। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Phloem Sieve Tube & Companion Cell.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s16.svg",
        customDiagramType: "bioCh2_m16"
      },
      {
        id: 'bio2_s16_img2',
        titleBn: "ফ্লোয়েম সিভনল ও নিউক্লিয়াসযুক্ত সঙ্গী কোষ (বাস্তব রূপায়ন)",
        titleEn: "Phloem Sieve Tube & Companion Cell (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট ফ্লোয়েম সিভনল ও নিউক্লিয়াসযুক্ত সঙ্গী কোষ।",
        captionEn: "High-definition visualization of Phloem Sieve Tube & Companion Cell.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s16.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "ফ্লোয়েম সিভনল ও নিউক্লিয়াসযুক্ত সঙ্গী কোষ",
        labelEn: "Phloem Sieve Tube & Companion Cell",
        detailBn: "চালুনির মতো সিভপ্লেট ও খাদ্য সংবহন",
        detailEn: "Structural core of Phloem Sieve Tube & Companion Cell.",
        symbol: 'M16',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৫ ফ্লোয়েম সিভনল ও নিউক্লিয়াসযুক্ত সঙ্গী কোষ এর মৌলিক পরিচয়",
        description: "চালুনির মতো সিভপ্লেট ও খাদ্য সংবহন। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৫ ফ্লোয়েম সিভনল ও নিউক্লিয়াসযুক্ত সঙ্গী কোষ"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল প্রয়োগ ও উচ্চতর দক্ষতামূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৫: ফ্লোয়েম সিভনল ও নিউক্লিয়াসযুক্ত সঙ্গী কোষ এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 17: আবরণী টিস্যু — স্কোয়ামাস ও কিউবয়ডাল
  {
    id: 17,
    subject: 'biology',
    chapter: 2,
    title: "আবরণী টিস্যু — স্কোয়ামাস ও কিউবয়ডাল",
    subtitle: "Epithelial Tissue Lining Layers",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s17.svg",
    imageCaption: "২.৬ আবরণী টিস্যু — স্কোয়ামাস ও কিউবয়ডাল — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m17",
    gallery: [
      {
        id: 'bio2_s17_img1',
        titleBn: "আবরণী টিস্যু — স্কোয়ামাস ও কিউবয়ডাল (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Epithelial Tissue Lining Layers (2D Vector Diagram)",
        captionBn: "২.৬ ভিত্তি পর্দার ওপর সজ্জিত সুরক্ষাকারী কোষ। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Epithelial Tissue Lining Layers.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s17.svg",
        customDiagramType: "bioCh2_m17"
      },
      {
        id: 'bio2_s17_img2',
        titleBn: "আবরণী টিস্যু — স্কোয়ামাস ও কিউবয়ডাল (বাস্তব রূপায়ন)",
        titleEn: "Epithelial Tissue Lining Layers (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট আবরণী টিস্যু — স্কোয়ামাস ও কিউবয়ডাল।",
        captionEn: "High-definition visualization of Epithelial Tissue Lining Layers.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s17.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "আবরণী টিস্যু — স্কোয়ামাস ও কিউবয়ডাল",
        labelEn: "Epithelial Tissue Lining Layers",
        detailBn: "ভিত্তি পর্দার ওপর সজ্জিত সুরক্ষাকারী কোষ",
        detailEn: "Structural core of Epithelial Tissue Lining Layers.",
        symbol: 'M17',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৬ আবরণী টিস্যু — স্কোয়ামাস ও কিউবয়ডাল এর মৌলিক পরিচয়",
        description: "ভিত্তি পর্দার ওপর সজ্জিত সুরক্ষাকারী কোষ। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৬ আবরণী টিস্যু — স্কোয়ামাস ও কিউবয়ডাল"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল জ্ঞান ও অনুধাবনমূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৬: আবরণী টিস্যু — স্কোয়ামাস ও কিউবয়ডাল এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 18: ঐচ্ছিক কঙ্কাল পেশি ও অনৈচ্ছিক অন্ত্র পেশি
  {
    id: 18,
    subject: 'biology',
    chapter: 2,
    title: "ঐচ্ছিক কঙ্কাল পেশি ও অনৈচ্ছিক অন্ত্র পেশি",
    subtitle: "Striated Skeletal & Smooth Muscle",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s18.svg",
    imageCaption: "২.৬ ঐচ্ছিক কঙ্কাল পেশি ও অনৈচ্ছিক অন্ত্র পেশি — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m18",
    gallery: [
      {
        id: 'bio2_s18_img1',
        titleBn: "ঐচ্ছিক কঙ্কাল পেশি ও অনৈচ্ছিক অন্ত্র পেশি (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Striated Skeletal & Smooth Muscle (2D Vector Diagram)",
        captionBn: "২.৬ রেখাঙ্কিত বহুনিউক্লিয়াস ও মাকু পেশি কোষ। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Striated Skeletal & Smooth Muscle.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s18.svg",
        customDiagramType: "bioCh2_m18"
      },
      {
        id: 'bio2_s18_img2',
        titleBn: "ঐচ্ছিক কঙ্কাল পেশি ও অনৈচ্ছিক অন্ত্র পেশি (বাস্তব রূপায়ন)",
        titleEn: "Striated Skeletal & Smooth Muscle (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট ঐচ্ছিক কঙ্কাল পেশি ও অনৈচ্ছিক অন্ত্র পেশি।",
        captionEn: "High-definition visualization of Striated Skeletal & Smooth Muscle.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s18.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "ঐচ্ছিক কঙ্কাল পেশি ও অনৈচ্ছিক অন্ত্র পেশি",
        labelEn: "Striated Skeletal & Smooth Muscle",
        detailBn: "রেখাঙ্কিত বহুনিউক্লিয়াস ও মাকু পেশি কোষ",
        detailEn: "Structural core of Striated Skeletal & Smooth Muscle.",
        symbol: 'M18',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৬ ঐচ্ছিক কঙ্কাল পেশি ও অনৈচ্ছিক অন্ত্র পেশি এর মৌলিক পরিচয়",
        description: "রেখাঙ্কিত বহুনিউক্লিয়াস ও মাকু পেশি কোষ। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৬ ঐচ্ছিক কঙ্কাল পেশি ও অনৈচ্ছিক অন্ত্র পেশি"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল প্রয়োগ ও উচ্চতর দক্ষতামূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৬: ঐচ্ছিক কঙ্কাল পেশি ও অনৈচ্ছিক অন্ত্র পেশি এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 19: কার্ডিয়াক পেশি ও ইন্টারক্যালেটেড ডিস্ক
  {
    id: 19,
    subject: 'biology',
    chapter: 2,
    title: "কার্ডিয়াক পেশি ও ইন্টারক্যালেটেড ডিস্ক",
    subtitle: "Cardiac Muscle & Intercalated Disc",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s19.svg",
    imageCaption: "২.৬ কার্ডিয়াক পেশি ও ইন্টারক্যালেটেড ডিস্ক — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m19",
    gallery: [
      {
        id: 'bio2_s19_img1',
        titleBn: "কার্ডিয়াক পেশি ও ইন্টারক্যালেটেড ডিস্ক (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Cardiac Muscle & Intercalated Disc (2D Vector Diagram)",
        captionBn: "২.৬ শাখাযুক্ত ছন্দোবদ্ধ সংকুচিত হৃৎপেশি। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Cardiac Muscle & Intercalated Disc.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s19.svg",
        customDiagramType: "bioCh2_m19"
      },
      {
        id: 'bio2_s19_img2',
        titleBn: "কার্ডিয়াক পেশি ও ইন্টারক্যালেটেড ডিস্ক (বাস্তব রূপায়ন)",
        titleEn: "Cardiac Muscle & Intercalated Disc (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট কার্ডিয়াক পেশি ও ইন্টারক্যালেটেড ডিস্ক।",
        captionEn: "High-definition visualization of Cardiac Muscle & Intercalated Disc.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s19.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "কার্ডিয়াক পেশি ও ইন্টারক্যালেটেড ডিস্ক",
        labelEn: "Cardiac Muscle & Intercalated Disc",
        detailBn: "শাখাযুক্ত ছন্দোবদ্ধ সংকুচিত হৃৎপেশি",
        detailEn: "Structural core of Cardiac Muscle & Intercalated Disc.",
        symbol: 'M19',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৬ কার্ডিয়াক পেশি ও ইন্টারক্যালেটেড ডিস্ক এর মৌলিক পরিচয়",
        description: "শাখাযুক্ত ছন্দোবদ্ধ সংকুচিত হৃৎপেশি। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৬ কার্ডিয়াক পেশি ও ইন্টারক্যালেটেড ডিস্ক"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল জ্ঞান ও অনুধাবনমূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৬: কার্ডিয়াক পেশি ও ইন্টারক্যালেটেড ডিস্ক এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 20: বহুপ্রান্তীয় নিউরন ও মায়েলিন অ্যাক্সন
  {
    id: 20,
    subject: 'biology',
    chapter: 2,
    title: "বহুপ্রান্তীয় নিউরন ও মায়েলিন অ্যাক্সন",
    subtitle: "Multipolar Neuron & Myelinated Axon",
    category: "জীববিজ্ঞান 2ম অধ্যায়: জীবকোষ ও টিস্যু",
    image: "/src/assets/images/bio/bio_ch2_s20.svg",
    imageCaption: "২.৬ বহুপ্রান্তীয় নিউরন ও মায়েলিন অ্যাক্সন — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh2_m20",
    gallery: [
      {
        id: 'bio2_s20_img1',
        titleBn: "বহুপ্রান্তীয় নিউরন ও মায়েলিন অ্যাক্সন (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Multipolar Neuron & Myelinated Axon (2D Vector Diagram)",
        captionBn: "২.৬ কোষদেহ, ডেনড্রাইট ও স্নায়ু সংযোগ সাইন্যাপস। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Multipolar Neuron & Myelinated Axon.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch2_s20.svg",
        customDiagramType: "bioCh2_m20"
      },
      {
        id: 'bio2_s20_img2',
        titleBn: "বহুপ্রান্তীয় নিউরন ও মায়েলিন অ্যাক্সন (বাস্তব রূপায়ন)",
        titleEn: "Multipolar Neuron & Myelinated Axon (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট বহুপ্রান্তীয় নিউরন ও মায়েলিন অ্যাক্সন।",
        captionEn: "High-definition visualization of Multipolar Neuron & Myelinated Axon.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch2_s20.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "বহুপ্রান্তীয় নিউরন ও মায়েলিন অ্যাক্সন",
        labelEn: "Multipolar Neuron & Myelinated Axon",
        detailBn: "কোষদেহ, ডেনড্রাইট ও স্নায়ু সংযোগ সাইন্যাপস",
        detailEn: "Structural core of Multipolar Neuron & Myelinated Axon.",
        symbol: 'M20',
        badgeType: 'biology',
        position: { x: 50, y: 45 }
      },
      {
        labelBn: 'প্রধান গাঠনিক অংশ',
        labelEn: 'Primary Architecture',
        detailBn: 'সুনির্দিষ্ট সাইটোপ্লাজমীয় ও কঙ্কালী সংগঠন।',
        detailEn: 'Key structural components and boundaries.',
        symbol: 'AN',
        badgeType: 'structure',
        position: { x: 30, y: 65 }
      },
      {
        labelBn: 'শারীরবৃত্তীয় গুরুত্ব',
        labelEn: 'Physiological Function',
        detailBn: 'কোষীয় বিপাক, শক্তি রূপান্তর ও অভিযোজন নিয়ন্ত্রণ।',
        detailEn: 'Metabolic and biological functions in the living system.',
        symbol: 'BIO',
        badgeType: 'process',
        position: { x: 70, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: "২.৬ বহুপ্রান্তীয় নিউরন ও মায়েলিন অ্যাক্সন এর মৌলিক পরিচয়",
        description: "কোষদেহ, ডেনড্রাইট ও স্নায়ু সংযোগ সাইন্যাপস। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "২.৬ বহুপ্রান্তীয় নিউরন ও মায়েলিন অ্যাক্সন"
      },
      {
        heading: 'পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্নোত্তর ও মূল বৈশিষ্ট্য',
        description: "বোর্ড পরীক্ষায় এই টপিক থেকে বহুনির্বাচনী ও সৃজনশীল প্রয়োগ ও উচ্চতর দক্ষতামূলক প্রশ্ন নিয়মিত এসে থাকে। প্রতিটি অংশের নাম ও ভূমিকা মুখস্থ রাখুন।",
        highlight: 'সৃজনশীল ও বহুনির্বাচনী প্রশ্নের মূল কেন্দ্রবিন্দু।'
      },
      {
        heading: 'বাস্তব উদাহরণ ও প্রয়োগ',
        description: 'মানবদেহ এবং উদ্ভিদদেহে এই প্রক্রিয়ার নিরবচ্ছিন্ন কার্যকরিতা জীবকে সুস্থ ও কার্যকর রাখে। বিঘ্ন ঘটলে বিভিন্ন রোগ বা বৈকল্য সৃষ্টি হয়।',
        highlight: 'জীবদেহের ভারসাম্য ও শারীরবৃত্তীয় ধারাবাহিকতা রক্ষা।'
      }
    ],
    callout: {
      type: 'tip',
      title: 'মনে রাখার সহজ টেকনিক ও সূত্র',
      content: "টপিক ২.৬: বহুপ্রান্তীয় নিউরন ও মায়েলিন অ্যাক্সন এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  }
];
