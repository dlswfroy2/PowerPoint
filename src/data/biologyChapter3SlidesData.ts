/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Slide } from '../types/presentation';

export const biologyChapter3Slides: Slide[] = [
  // Slide 1: কোষ চক্র — ইন্টারফেজ G1, S, G2 পর্যায়
  {
    id: 1,
    subject: 'biology',
    chapter: 3,
    title: "কোষ চক্র — ইন্টারফেজ G1, S, G2 পর্যায়",
    subtitle: "Cell Cycle & Interphase Phases",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s1.svg",
    imageCaption: "৩.১ কোষ চক্র — ইন্টারফেজ G1, S, G2 পর্যায় — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m1",
    gallery: [
      {
        id: 'bio3_s1_img1',
        titleBn: "কোষ চক্র — ইন্টারফেজ G1, S, G2 পর্যায় (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Cell Cycle & Interphase Phases (2D Vector Diagram)",
        captionBn: "৩.১ ডিএনএ অনুলিপন ও কোষের বৃদ্ধি প্রস্তুতি। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Cell Cycle & Interphase Phases.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s1.svg",
        customDiagramType: "bioCh3_m1"
      },
      {
        id: 'bio3_s1_img2',
        titleBn: "কোষ চক্র — ইন্টারফেজ G1, S, G2 পর্যায় (বাস্তব রূপায়ন)",
        titleEn: "Cell Cycle & Interphase Phases (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট কোষ চক্র — ইন্টারফেজ G1, S, G2 পর্যায়।",
        captionEn: "High-definition visualization of Cell Cycle & Interphase Phases.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s1.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "কোষ চক্র — ইন্টারফেজ G1, S, G2 পর্যায়",
        labelEn: "Cell Cycle & Interphase Phases",
        detailBn: "ডিএনএ অনুলিপন ও কোষের বৃদ্ধি প্রস্তুতি",
        detailEn: "Structural core of Cell Cycle & Interphase Phases.",
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
        heading: "৩.১ কোষ চক্র — ইন্টারফেজ G1, S, G2 পর্যায় এর মৌলিক পরিচয়",
        description: "ডিএনএ অনুলিপন ও কোষের বৃদ্ধি প্রস্তুতি। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.১ কোষ চক্র — ইন্টারফেজ G1, S, G2 পর্যায়"
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
      content: "টপিক ৩.১: কোষ চক্র — ইন্টারফেজ G1, S, G2 পর্যায় এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 2: ব্যাকটেরিয়ার অ্যামাইটোসিস প্রত্যক্ষ বিভাজন
  {
    id: 2,
    subject: 'biology',
    chapter: 3,
    title: "ব্যাকটেরিয়ার অ্যামাইটোসিস প্রত্যক্ষ বিভাজন",
    subtitle: "Bacterial Amitosis Direct Fission",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s2.svg",
    imageCaption: "৩.১ ব্যাকটেরিয়ার অ্যামাইটোসিস প্রত্যক্ষ বিভাজন — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m2",
    gallery: [
      {
        id: 'bio3_s2_img1',
        titleBn: "ব্যাকটেরিয়ার অ্যামাইটোসিস প্রত্যক্ষ বিভাজন (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Bacterial Amitosis Direct Fission (2D Vector Diagram)",
        captionBn: "৩.১ কোষ প্রাচীর ও মেমব্রেন খাঁজে সরাসরি বিভক্তি। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Bacterial Amitosis Direct Fission.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s2.svg",
        customDiagramType: "bioCh3_m2"
      },
      {
        id: 'bio3_s2_img2',
        titleBn: "ব্যাকটেরিয়ার অ্যামাইটোসিস প্রত্যক্ষ বিভাজন (বাস্তব রূপায়ন)",
        titleEn: "Bacterial Amitosis Direct Fission (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট ব্যাকটেরিয়ার অ্যামাইটোসিস প্রত্যক্ষ বিভাজন।",
        captionEn: "High-definition visualization of Bacterial Amitosis Direct Fission.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s2.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "ব্যাকটেরিয়ার অ্যামাইটোসিস প্রত্যক্ষ বিভাজন",
        labelEn: "Bacterial Amitosis Direct Fission",
        detailBn: "কোষ প্রাচীর ও মেমব্রেন খাঁজে সরাসরি বিভক্তি",
        detailEn: "Structural core of Bacterial Amitosis Direct Fission.",
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
        heading: "৩.১ ব্যাকটেরিয়ার অ্যামাইটোসিস প্রত্যক্ষ বিভাজন এর মৌলিক পরিচয়",
        description: "কোষ প্রাচীর ও মেমব্রেন খাঁজে সরাসরি বিভক্তি। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.১ ব্যাকটেরিয়ার অ্যামাইটোসিস প্রত্যক্ষ বিভাজন"
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
      content: "টপিক ৩.১: ব্যাকটেরিয়ার অ্যামাইটোসিস প্রত্যক্ষ বিভাজন এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 3: মেটাসেন্ট্রিক ক্রোমোজোম ও কাইনেটোকোর
  {
    id: 3,
    subject: 'biology',
    chapter: 3,
    title: "মেটাসেন্ট্রিক ক্রোমোজোম ও কাইনেটোকোর",
    subtitle: "Metacentric Chromosome Architecture",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s3.svg",
    imageCaption: "৩.২ মেটাসেন্ট্রিক ক্রোমোজোম ও কাইনেটোকোর — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m3",
    gallery: [
      {
        id: 'bio3_s3_img1',
        titleBn: "মেটাসেন্ট্রিক ক্রোমোজোম ও কাইনেটোকোর (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Metacentric Chromosome Architecture (2D Vector Diagram)",
        captionBn: "৩.২ সেন্ট্রোমিয়ার, বাহুদ্বয় ও স্পিন্ডল সংযোগ। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Metacentric Chromosome Architecture.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s3.svg",
        customDiagramType: "bioCh3_m3"
      },
      {
        id: 'bio3_s3_img2',
        titleBn: "মেটাসেন্ট্রিক ক্রোমোজোম ও কাইনেটোকোর (বাস্তব রূপায়ন)",
        titleEn: "Metacentric Chromosome Architecture (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট মেটাসেন্ট্রিক ক্রোমোজোম ও কাইনেটোকোর।",
        captionEn: "High-definition visualization of Metacentric Chromosome Architecture.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s3.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "মেটাসেন্ট্রিক ক্রোমোজোম ও কাইনেটোকোর",
        labelEn: "Metacentric Chromosome Architecture",
        detailBn: "সেন্ট্রোমিয়ার, বাহুদ্বয় ও স্পিন্ডল সংযোগ",
        detailEn: "Structural core of Metacentric Chromosome Architecture.",
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
        heading: "৩.২ মেটাসেন্ট্রিক ক্রোমোজোম ও কাইনেটোকোর এর মৌলিক পরিচয়",
        description: "সেন্ট্রোমিয়ার, বাহুদ্বয় ও স্পিন্ডল সংযোগ। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.২ মেটাসেন্ট্রিক ক্রোমোজোম ও কাইনেটোকোর"
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
      content: "টপিক ৩.২: মেটাসেন্ট্রিক ক্রোমোজোম ও কাইনেটোকোর এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 4: মাইটোসিস প্রোফেজ — ক্রোমোজোমের সংকোচন
  {
    id: 4,
    subject: 'biology',
    chapter: 3,
    title: "মাইটোসিস প্রোফেজ — ক্রোমোজোমের সংকোচন",
    subtitle: "Prophase Chromosome Condensation",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s4.svg",
    imageCaption: "৩.২ মাইটোসিস প্রোফেজ — ক্রোমোজোমের সংকোচন — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m4",
    gallery: [
      {
        id: 'bio3_s4_img1',
        titleBn: "মাইটোসিস প্রোফেজ — ক্রোমোজোমের সংকোচন (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Prophase Chromosome Condensation (2D Vector Diagram)",
        captionBn: "৩.২ জলবিয়োজনে ক্রোমোজোম খাটো ও মোটা হওয়া। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Prophase Chromosome Condensation.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s4.svg",
        customDiagramType: "bioCh3_m4"
      },
      {
        id: 'bio3_s4_img2',
        titleBn: "মাইটোসিস প্রোফেজ — ক্রোমোজোমের সংকোচন (বাস্তব রূপায়ন)",
        titleEn: "Prophase Chromosome Condensation (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট মাইটোসিস প্রোফেজ — ক্রোমোজোমের সংকোচন।",
        captionEn: "High-definition visualization of Prophase Chromosome Condensation.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s4.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "মাইটোসিস প্রোফেজ — ক্রোমোজোমের সংকোচন",
        labelEn: "Prophase Chromosome Condensation",
        detailBn: "জলবিয়োজনে ক্রোমোজোম খাটো ও মোটা হওয়া",
        detailEn: "Structural core of Prophase Chromosome Condensation.",
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
        heading: "৩.২ মাইটোসিস প্রোফেজ — ক্রোমোজোমের সংকোচন এর মৌলিক পরিচয়",
        description: "জলবিয়োজনে ক্রোমোজোম খাটো ও মোটা হওয়া। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.২ মাইটোসিস প্রোফেজ — ক্রোমোজোমের সংকোচন"
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
      content: "টপিক ৩.২: মাইটোসিস প্রোফেজ — ক্রোমোজোমের সংকোচন এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 5: প্রো-মেটাফেজ — স্পিন্ডল যন্ত্র ও মেরু
  {
    id: 5,
    subject: 'biology',
    chapter: 3,
    title: "প্রো-মেটাফেজ — স্পিন্ডল যন্ত্র ও মেরু",
    subtitle: "Prometaphase Spindle Apparatus",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s5.svg",
    imageCaption: "৩.২ প্রো-মেটাফেজ — স্পিন্ডল যন্ত্র ও মেরু — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m5",
    gallery: [
      {
        id: 'bio3_s5_img1',
        titleBn: "প্রো-মেটাফেজ — স্পিন্ডল যন্ত্র ও মেরু (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Prometaphase Spindle Apparatus (2D Vector Diagram)",
        captionBn: "৩.২ দ্বিমেরুবিশিষ্ট তন্তু সৃষ্টি ও নিউক্লিয়ার বিলুপ্তি। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Prometaphase Spindle Apparatus.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s5.svg",
        customDiagramType: "bioCh3_m5"
      },
      {
        id: 'bio3_s5_img2',
        titleBn: "প্রো-মেটাফেজ — স্পিন্ডল যন্ত্র ও মেরু (বাস্তব রূপায়ন)",
        titleEn: "Prometaphase Spindle Apparatus (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট প্রো-মেটাফেজ — স্পিন্ডল যন্ত্র ও মেরু।",
        captionEn: "High-definition visualization of Prometaphase Spindle Apparatus.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s5.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "প্রো-মেটাফেজ — স্পিন্ডল যন্ত্র ও মেরু",
        labelEn: "Prometaphase Spindle Apparatus",
        detailBn: "দ্বিমেরুবিশিষ্ট তন্তু সৃষ্টি ও নিউক্লিয়ার বিলুপ্তি",
        detailEn: "Structural core of Prometaphase Spindle Apparatus.",
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
        heading: "৩.২ প্রো-মেটাফেজ — স্পিন্ডল যন্ত্র ও মেরু এর মৌলিক পরিচয়",
        description: "দ্বিমেরুবিশিষ্ট তন্তু সৃষ্টি ও নিউক্লিয়ার বিলুপ্তি। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.২ প্রো-মেটাফেজ — স্পিন্ডল যন্ত্র ও মেরু"
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
      content: "টপিক ৩.২: প্রো-মেটাফেজ — স্পিন্ডল যন্ত্র ও মেরু এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 6: মাইটোসিস মেটাফেজ — বিষুবীয় প্লেট বিন্যাস
  {
    id: 6,
    subject: 'biology',
    chapter: 3,
    title: "মাইটোসিস মেটাফেজ — বিষুবীয় প্লেট বিন্যাস",
    subtitle: "Metaphase Equatorial Plate Alignment",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s6.svg",
    imageCaption: "৩.২ মাইটোসিস মেটাফেজ — বিষুবীয় প্লেট বিন্যাস — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m6",
    gallery: [
      {
        id: 'bio3_s6_img1',
        titleBn: "মাইটোসিস মেটাফেজ — বিষুবীয় প্লেট বিন্যাস (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Metaphase Equatorial Plate Alignment (2D Vector Diagram)",
        captionBn: "৩.২ মেটাকাইনেসিসে ক্রোমোজোমের মাঝখানে অবস্থান। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Metaphase Equatorial Plate Alignment.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s6.svg",
        customDiagramType: "bioCh3_m6"
      },
      {
        id: 'bio3_s6_img2',
        titleBn: "মাইটোসিস মেটাফেজ — বিষুবীয় প্লেট বিন্যাস (বাস্তব রূপায়ন)",
        titleEn: "Metaphase Equatorial Plate Alignment (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট মাইটোসিস মেটাফেজ — বিষুবীয় প্লেট বিন্যাস।",
        captionEn: "High-definition visualization of Metaphase Equatorial Plate Alignment.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s6.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "মাইটোসিস মেটাফেজ — বিষুবীয় প্লেট বিন্যাস",
        labelEn: "Metaphase Equatorial Plate Alignment",
        detailBn: "মেটাকাইনেসিসে ক্রোমোজোমের মাঝখানে অবস্থান",
        detailEn: "Structural core of Metaphase Equatorial Plate Alignment.",
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
        heading: "৩.২ মাইটোসিস মেটাফেজ — বিষুবীয় প্লেট বিন্যাস এর মৌলিক পরিচয়",
        description: "মেটাকাইনেসিসে ক্রোমোজোমের মাঝখানে অবস্থান। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.২ মাইটোসিস মেটাফেজ — বিষুবীয় প্লেট বিন্যাস"
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
      content: "টপিক ৩.২: মাইটোসিস মেটাফেজ — বিষুবীয় প্লেট বিন্যাস এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 7: মাইটোসিস অ্যানাফেজ — মেরুভিমুখী চলন
  {
    id: 7,
    subject: 'biology',
    chapter: 3,
    title: "মাইটোসিস অ্যানাফেজ — মেরুভিমুখী চলন",
    subtitle: "Anaphase Polar Chromosome Migration",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s7.svg",
    imageCaption: "৩.২ মাইটোসিস অ্যানাফেজ — মেরুভিমুখী চলন — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m7",
    gallery: [
      {
        id: 'bio3_s7_img1',
        titleBn: "মাইটোসিস অ্যানাফেজ — মেরুভিমুখী চলন (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Anaphase Polar Chromosome Migration (2D Vector Diagram)",
        captionBn: "৩.২ সেন্ট্রোমিয়ার বিভাজনে V, L, J, I আকৃতি। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Anaphase Polar Chromosome Migration.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s7.svg",
        customDiagramType: "bioCh3_m7"
      },
      {
        id: 'bio3_s7_img2',
        titleBn: "মাইটোসিস অ্যানাফেজ — মেরুভিমুখী চলন (বাস্তব রূপায়ন)",
        titleEn: "Anaphase Polar Chromosome Migration (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট মাইটোসিস অ্যানাফেজ — মেরুভিমুখী চলন।",
        captionEn: "High-definition visualization of Anaphase Polar Chromosome Migration.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s7.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "মাইটোসিস অ্যানাফেজ — মেরুভিমুখী চলন",
        labelEn: "Anaphase Polar Chromosome Migration",
        detailBn: "সেন্ট্রোমিয়ার বিভাজনে V, L, J, I আকৃতি",
        detailEn: "Structural core of Anaphase Polar Chromosome Migration.",
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
        heading: "৩.২ মাইটোসিস অ্যানাফেজ — মেরুভিমুখী চলন এর মৌলিক পরিচয়",
        description: "সেন্ট্রোমিয়ার বিভাজনে V, L, J, I আকৃতি। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.২ মাইটোসিস অ্যানাফেজ — মেরুভিমুখী চলন"
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
      content: "টপিক ৩.২: মাইটোসিস অ্যানাফেজ — মেরুভিমুখী চলন এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 8: মাইটোসিস টেলোফেজ — নিউক্লিয়াসের পুনর্গঠন
  {
    id: 8,
    subject: 'biology',
    chapter: 3,
    title: "মাইটোসিস টেলোফেজ — নিউক্লিয়াসের পুনর্গঠন",
    subtitle: "Telophase Nuclear Reconstitution",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s8.svg",
    imageCaption: "৩.২ মাইটোসিস টেলোফেজ — নিউক্লিয়াসের পুনর্গঠন — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m8",
    gallery: [
      {
        id: 'bio3_s8_img1',
        titleBn: "মাইটোসিস টেলোফেজ — নিউক্লিয়াসের পুনর্গঠন (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Telophase Nuclear Reconstitution (2D Vector Diagram)",
        captionBn: "৩.২ দুই মেরুতে অপত্য নিউক্লিয়াস পুনর্নির্মাণ। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Telophase Nuclear Reconstitution.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s8.svg",
        customDiagramType: "bioCh3_m8"
      },
      {
        id: 'bio3_s8_img2',
        titleBn: "মাইটোসিস টেলোফেজ — নিউক্লিয়াসের পুনর্গঠন (বাস্তব রূপায়ন)",
        titleEn: "Telophase Nuclear Reconstitution (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট মাইটোসিস টেলোফেজ — নিউক্লিয়াসের পুনর্গঠন।",
        captionEn: "High-definition visualization of Telophase Nuclear Reconstitution.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s8.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "মাইটোসিস টেলোফেজ — নিউক্লিয়াসের পুনর্গঠন",
        labelEn: "Telophase Nuclear Reconstitution",
        detailBn: "দুই মেরুতে অপত্য নিউক্লিয়াস পুনর্নির্মাণ",
        detailEn: "Structural core of Telophase Nuclear Reconstitution.",
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
        heading: "৩.২ মাইটোসিস টেলোফেজ — নিউক্লিয়াসের পুনর্গঠন এর মৌলিক পরিচয়",
        description: "দুই মেরুতে অপত্য নিউক্লিয়াস পুনর্নির্মাণ। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.২ মাইটোসিস টেলোফেজ — নিউক্লিয়াসের পুনর্গঠন"
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
      content: "টপিক ৩.২: মাইটোসিস টেলোফেজ — নিউক্লিয়াসের পুনর্গঠন এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 9: উদ্ভিদকোষের সাইটোকাইনেসিস ও কোষপ্লেট
  {
    id: 9,
    subject: 'biology',
    chapter: 3,
    title: "উদ্ভিদকোষের সাইটোকাইনেসিস ও কোষপ্লেট",
    subtitle: "Plant Cytokinesis & Cell Plate Wall",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s9.svg",
    imageCaption: "৩.৩ উদ্ভিদকোষের সাইটোকাইনেসিস ও কোষপ্লেট — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m9",
    gallery: [
      {
        id: 'bio3_s9_img1',
        titleBn: "উদ্ভিদকোষের সাইটোকাইনেসিস ও কোষপ্লেট (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Plant Cytokinesis & Cell Plate Wall (2D Vector Diagram)",
        captionBn: "৩.৩ ফ্র্যাগমোপ্লাস্ট জমে মাঝখানে প্রাচীর নির্মাণ। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Plant Cytokinesis & Cell Plate Wall.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s9.svg",
        customDiagramType: "bioCh3_m9"
      },
      {
        id: 'bio3_s9_img2',
        titleBn: "উদ্ভিদকোষের সাইটোকাইনেসিস ও কোষপ্লেট (বাস্তব রূপায়ন)",
        titleEn: "Plant Cytokinesis & Cell Plate Wall (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট উদ্ভিদকোষের সাইটোকাইনেসিস ও কোষপ্লেট।",
        captionEn: "High-definition visualization of Plant Cytokinesis & Cell Plate Wall.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s9.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "উদ্ভিদকোষের সাইটোকাইনেসিস ও কোষপ্লেট",
        labelEn: "Plant Cytokinesis & Cell Plate Wall",
        detailBn: "ফ্র্যাগমোপ্লাস্ট জমে মাঝখানে প্রাচীর নির্মাণ",
        detailEn: "Structural core of Plant Cytokinesis & Cell Plate Wall.",
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
        heading: "৩.৩ উদ্ভিদকোষের সাইটোকাইনেসিস ও কোষপ্লেট এর মৌলিক পরিচয়",
        description: "ফ্র্যাগমোপ্লাস্ট জমে মাঝখানে প্রাচীর নির্মাণ। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.৩ উদ্ভিদকোষের সাইটোকাইনেসিস ও কোষপ্লেট"
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
      content: "টপিক ৩.৩: উদ্ভিদকোষের সাইটোকাইনেসিস ও কোষপ্লেট এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 10: প্রাণীকোষের ক্লিভেজ খাঁজ ও সাইটোপ্লাজম
  {
    id: 10,
    subject: 'biology',
    chapter: 3,
    title: "প্রাণীকোষের ক্লিভেজ খাঁজ ও সাইটোপ্লাজম",
    subtitle: "Animal Cleavage Furrow Constriction",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s10.svg",
    imageCaption: "৩.৩ প্রাণীকোষের ক্লিভেজ খাঁজ ও সাইটোপ্লাজম — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m10",
    gallery: [
      {
        id: 'bio3_s10_img1',
        titleBn: "প্রাণীকোষের ক্লিভেজ খাঁজ ও সাইটোপ্লাজম (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Animal Cleavage Furrow Constriction (2D Vector Diagram)",
        captionBn: "৩.৩ অ্যাক্টিন রিংয়ের টানে মাঝখানে খাঁজ সৃষ্টি। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Animal Cleavage Furrow Constriction.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s10.svg",
        customDiagramType: "bioCh3_m10"
      },
      {
        id: 'bio3_s10_img2',
        titleBn: "প্রাণীকোষের ক্লিভেজ খাঁজ ও সাইটোপ্লাজম (বাস্তব রূপায়ন)",
        titleEn: "Animal Cleavage Furrow Constriction (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট প্রাণীকোষের ক্লিভেজ খাঁজ ও সাইটোপ্লাজম।",
        captionEn: "High-definition visualization of Animal Cleavage Furrow Constriction.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s10.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "প্রাণীকোষের ক্লিভেজ খাঁজ ও সাইটোপ্লাজম",
        labelEn: "Animal Cleavage Furrow Constriction",
        detailBn: "অ্যাক্টিন রিংয়ের টানে মাঝখানে খাঁজ সৃষ্টি",
        detailEn: "Structural core of Animal Cleavage Furrow Constriction.",
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
        heading: "৩.৩ প্রাণীকোষের ক্লিভেজ খাঁজ ও সাইটোপ্লাজম এর মৌলিক পরিচয়",
        description: "অ্যাক্টিন রিংয়ের টানে মাঝখানে খাঁজ সৃষ্টি। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.৩ প্রাণীকোষের ক্লিভেজ খাঁজ ও সাইটোপ্লাজম"
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
      content: "টপিক ৩.৩: প্রাণীকোষের ক্লিভেজ খাঁজ ও সাইটোপ্লাজম এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 11: অনিয়ন্ত্রিত মাইটোসিস ও টিউমার বিস্তার
  {
    id: 11,
    subject: 'biology',
    chapter: 3,
    title: "অনিয়ন্ত্রিত মাইটোসিস ও টিউমার বিস্তার",
    subtitle: "Uncontrolled Mitosis & Tumor Mass",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s11.svg",
    imageCaption: "৩.৪ অনিয়ন্ত্রিত মাইটোসিস ও টিউমার বিস্তার — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m11",
    gallery: [
      {
        id: 'bio3_s11_img1',
        titleBn: "অনিয়ন্ত্রিত মাইটোসিস ও টিউমার বিস্তার (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Uncontrolled Mitosis & Tumor Mass (2D Vector Diagram)",
        captionBn: "৩.৪ নিয়ন্ত্রণহীন বিভাজনে ক্যান্সার পিণ্ড সৃষ্টি। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Uncontrolled Mitosis & Tumor Mass.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s11.svg",
        customDiagramType: "bioCh3_m11"
      },
      {
        id: 'bio3_s11_img2',
        titleBn: "অনিয়ন্ত্রিত মাইটোসিস ও টিউমার বিস্তার (বাস্তব রূপায়ন)",
        titleEn: "Uncontrolled Mitosis & Tumor Mass (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট অনিয়ন্ত্রিত মাইটোসিস ও টিউমার বিস্তার।",
        captionEn: "High-definition visualization of Uncontrolled Mitosis & Tumor Mass.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s11.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "অনিয়ন্ত্রিত মাইটোসিস ও টিউমার বিস্তার",
        labelEn: "Uncontrolled Mitosis & Tumor Mass",
        detailBn: "নিয়ন্ত্রণহীন বিভাজনে ক্যান্সার পিণ্ড সৃষ্টি",
        detailEn: "Structural core of Uncontrolled Mitosis & Tumor Mass.",
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
        heading: "৩.৪ অনিয়ন্ত্রিত মাইটোসিস ও টিউমার বিস্তার এর মৌলিক পরিচয়",
        description: "নিয়ন্ত্রণহীন বিভাজনে ক্যান্সার পিণ্ড সৃষ্টি। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.৪ অনিয়ন্ত্রিত মাইটোসিস ও টিউমার বিস্তার"
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
      content: "টপিক ৩.৪: অনিয়ন্ত্রিত মাইটোসিস ও টিউমার বিস্তার এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 12: মায়োসিস ১ — লেপ্টোটিন বুকে স্টেজ
  {
    id: 12,
    subject: 'biology',
    chapter: 3,
    title: "মায়োসিস ১ — লেপ্টোটিন বুকে স্টেজ",
    subtitle: "Leptotene Bouquet Stage Chromosomes",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s12.svg",
    imageCaption: "৩.৫ মায়োসিস ১ — লেপ্টোটিন বুকে স্টেজ — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m12",
    gallery: [
      {
        id: 'bio3_s12_img1',
        titleBn: "মায়োসিস ১ — লেপ্টোটিন বুকে স্টেজ (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Leptotene Bouquet Stage Chromosomes (2D Vector Diagram)",
        captionBn: "৩.৫ ক্রোমোজোমের এক মেরুতে পুষ্পস্তবক রূপ। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Leptotene Bouquet Stage Chromosomes.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s12.svg",
        customDiagramType: "bioCh3_m12"
      },
      {
        id: 'bio3_s12_img2',
        titleBn: "মায়োসিস ১ — লেপ্টোটিন বুকে স্টেজ (বাস্তব রূপায়ন)",
        titleEn: "Leptotene Bouquet Stage Chromosomes (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট মায়োসিস ১ — লেপ্টোটিন বুকে স্টেজ।",
        captionEn: "High-definition visualization of Leptotene Bouquet Stage Chromosomes.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s12.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "মায়োসিস ১ — লেপ্টোটিন বুকে স্টেজ",
        labelEn: "Leptotene Bouquet Stage Chromosomes",
        detailBn: "ক্রোমোজোমের এক মেরুতে পুষ্পস্তবক রূপ",
        detailEn: "Structural core of Leptotene Bouquet Stage Chromosomes.",
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
        heading: "৩.৫ মায়োসিস ১ — লেপ্টোটিন বুকে স্টেজ এর মৌলিক পরিচয়",
        description: "ক্রোমোজোমের এক মেরুতে পুষ্পস্তবক রূপ। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.৫ মায়োসিস ১ — লেপ্টোটিন বুকে স্টেজ"
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
      content: "টপিক ৩.৫: মায়োসিস ১ — লেপ্টোটিন বুকে স্টেজ এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 13: জাইগোটিন — হোমোলোগাস সিন্যাপসিস জোড়
  {
    id: 13,
    subject: 'biology',
    chapter: 3,
    title: "জাইগোটিন — হোমোলোগাস সিন্যাপসিস জোড়",
    subtitle: "Zygotene Synapsis & Bivalent Pair",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s13.svg",
    imageCaption: "৩.৫ জাইগোটিন — হোমোলোগাস সিন্যাপসিস জোড় — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m13",
    gallery: [
      {
        id: 'bio3_s13_img1',
        titleBn: "জাইগোটিন — হোমোলোগাস সিন্যাপসিস জোড় (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Zygotene Synapsis & Bivalent Pair (2D Vector Diagram)",
        captionBn: "৩.৫ সমসংস্থ ক্রোমোজোমের নিখুঁত জোড় বাঁধা। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Zygotene Synapsis & Bivalent Pair.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s13.svg",
        customDiagramType: "bioCh3_m13"
      },
      {
        id: 'bio3_s13_img2',
        titleBn: "জাইগোটিন — হোমোলোগাস সিন্যাপসিস জোড় (বাস্তব রূপায়ন)",
        titleEn: "Zygotene Synapsis & Bivalent Pair (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট জাইগোটিন — হোমোলোগাস সিন্যাপসিস জোড়।",
        captionEn: "High-definition visualization of Zygotene Synapsis & Bivalent Pair.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s13.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "জাইগোটিন — হোমোলোগাস সিন্যাপসিস জোড়",
        labelEn: "Zygotene Synapsis & Bivalent Pair",
        detailBn: "সমসংস্থ ক্রোমোজোমের নিখুঁত জোড় বাঁধা",
        detailEn: "Structural core of Zygotene Synapsis & Bivalent Pair.",
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
        heading: "৩.৫ জাইগোটিন — হোমোলোগাস সিন্যাপসিস জোড় এর মৌলিক পরিচয়",
        description: "সমসংস্থ ক্রোমোজোমের নিখুঁত জোড় বাঁধা। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.৫ জাইগোটিন — হোমোলোগাস সিন্যাপসিস জোড়"
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
      content: "টপিক ৩.৫: জাইগোটিন — হোমোলোগাস সিন্যাপসিস জোড় এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 14: প্যাকাইটিন — টেট্রাড ও ক্রসিং ওভার
  {
    id: 14,
    subject: 'biology',
    chapter: 3,
    title: "প্যাকাইটিন — টেট্রাড ও ক্রসিং ওভার",
    subtitle: "Pachytene Crossing Over & Chiasmata",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s14.svg",
    imageCaption: "৩.৫ প্যাকাইটিন — টেট্রাড ও ক্রসিং ওভার — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m14",
    gallery: [
      {
        id: 'bio3_s14_img1',
        titleBn: "প্যাকাইটিন — টেট্রাড ও ক্রসিং ওভার (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Pachytene Crossing Over & Chiasmata (2D Vector Diagram)",
        captionBn: "৩.৫ নন-সিস্টার ক্রোমাটিডের জিনগত খণ্ড বিনিময়। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Pachytene Crossing Over & Chiasmata.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s14.svg",
        customDiagramType: "bioCh3_m14"
      },
      {
        id: 'bio3_s14_img2',
        titleBn: "প্যাকাইটিন — টেট্রাড ও ক্রসিং ওভার (বাস্তব রূপায়ন)",
        titleEn: "Pachytene Crossing Over & Chiasmata (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট প্যাকাইটিন — টেট্রাড ও ক্রসিং ওভার।",
        captionEn: "High-definition visualization of Pachytene Crossing Over & Chiasmata.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s14.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "প্যাকাইটিন — টেট্রাড ও ক্রসিং ওভার",
        labelEn: "Pachytene Crossing Over & Chiasmata",
        detailBn: "নন-সিস্টার ক্রোমাটিডের জিনগত খণ্ড বিনিময়",
        detailEn: "Structural core of Pachytene Crossing Over & Chiasmata.",
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
        heading: "৩.৫ প্যাকাইটিন — টেট্রাড ও ক্রসিং ওভার এর মৌলিক পরিচয়",
        description: "নন-সিস্টার ক্রোমাটিডের জিনগত খণ্ড বিনিময়। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.৫ প্যাকাইটিন — টেট্রাড ও ক্রসিং ওভার"
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
      content: "টপিক ৩.৫: প্যাকাইটিন — টেট্রাড ও ক্রসিং ওভার এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 15: ডিপ্লোটিন ও কায়াজমা প্রান্তীয়করণ
  {
    id: 15,
    subject: 'biology',
    chapter: 3,
    title: "ডিপ্লোটিন ও কায়াজমা প্রান্তীয়করণ",
    subtitle: "Diplotene Chiasmata Terminalization",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s15.svg",
    imageCaption: "৩.৫ ডিপ্লোটিন ও কায়াজমা প্রান্তীয়করণ — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m15",
    gallery: [
      {
        id: 'bio3_s15_img1',
        titleBn: "ডিপ্লোটিন ও কায়াজমা প্রান্তীয়করণ (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Diplotene Chiasmata Terminalization (2D Vector Diagram)",
        captionBn: "৩.৫ হোমোলোগাস বিকর্ষণ ও কায়াজমা শেষপ্রান্তে গমন। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Diplotene Chiasmata Terminalization.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s15.svg",
        customDiagramType: "bioCh3_m15"
      },
      {
        id: 'bio3_s15_img2',
        titleBn: "ডিপ্লোটিন ও কায়াজমা প্রান্তীয়করণ (বাস্তব রূপায়ন)",
        titleEn: "Diplotene Chiasmata Terminalization (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট ডিপ্লোটিন ও কায়াজমা প্রান্তীয়করণ।",
        captionEn: "High-definition visualization of Diplotene Chiasmata Terminalization.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s15.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "ডিপ্লোটিন ও কায়াজমা প্রান্তীয়করণ",
        labelEn: "Diplotene Chiasmata Terminalization",
        detailBn: "হোমোলোগাস বিকর্ষণ ও কায়াজমা শেষপ্রান্তে গমন",
        detailEn: "Structural core of Diplotene Chiasmata Terminalization.",
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
        heading: "৩.৫ ডিপ্লোটিন ও কায়াজমা প্রান্তীয়করণ এর মৌলিক পরিচয়",
        description: "হোমোলোগাস বিকর্ষণ ও কায়াজমা শেষপ্রান্তে গমন। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.৫ ডিপ্লোটিন ও কায়াজমা প্রান্তীয়করণ"
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
      content: "টপিক ৩.৫: ডিপ্লোটিন ও কায়াজমা প্রান্তীয়করণ এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 16: ডায়াকাইনেসিস — নিউক্লিওলাসের বিলুপ্তি
  {
    id: 16,
    subject: 'biology',
    chapter: 3,
    title: "ডায়াকাইনেসিস — নিউক্লিওলাসের বিলুপ্তি",
    subtitle: "Diakinesis Phase Nuclear Envelope End",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s16.svg",
    imageCaption: "৩.৫ ডায়াকাইনেসিস — নিউক্লিওলাসের বিলুপ্তি — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m16",
    gallery: [
      {
        id: 'bio3_s16_img1',
        titleBn: "ডায়াকাইনেসিস — নিউক্লিওলাসের বিলুপ্তি (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Diakinesis Phase Nuclear Envelope End (2D Vector Diagram)",
        captionBn: "৩.৫ মিয়োসিস প্রোফেজ ১ এর চূড়ান্ত প্রস্তুতি। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Diakinesis Phase Nuclear Envelope End.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s16.svg",
        customDiagramType: "bioCh3_m16"
      },
      {
        id: 'bio3_s16_img2',
        titleBn: "ডায়াকাইনেসিস — নিউক্লিওলাসের বিলুপ্তি (বাস্তব রূপায়ন)",
        titleEn: "Diakinesis Phase Nuclear Envelope End (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট ডায়াকাইনেসিস — নিউক্লিওলাসের বিলুপ্তি।",
        captionEn: "High-definition visualization of Diakinesis Phase Nuclear Envelope End.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s16.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "ডায়াকাইনেসিস — নিউক্লিওলাসের বিলুপ্তি",
        labelEn: "Diakinesis Phase Nuclear Envelope End",
        detailBn: "মিয়োসিস প্রোফেজ ১ এর চূড়ান্ত প্রস্তুতি",
        detailEn: "Structural core of Diakinesis Phase Nuclear Envelope End.",
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
        heading: "৩.৫ ডায়াকাইনেসিস — নিউক্লিওলাসের বিলুপ্তি এর মৌলিক পরিচয়",
        description: "মিয়োসিস প্রোফেজ ১ এর চূড়ান্ত প্রস্তুতি। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.৫ ডায়াকাইনেসিস — নিউক্লিওলাসের বিলুপ্তি"
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
      content: "টপিক ৩.৫: ডায়াকাইনেসিস — নিউক্লিওলাসের বিলুপ্তি এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 17: মায়োসিস অ্যানাফেজ ১ — ক্রোমোজোম হ্রাস (n)
  {
    id: 17,
    subject: 'biology',
    chapter: 3,
    title: "মায়োসিস অ্যানাফেজ ১ — ক্রোমোজোম হ্রাস (n)",
    subtitle: "Anaphase I Chromosome Reduction",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s17.svg",
    imageCaption: "৩.৫ মায়োসিস অ্যানাফেজ ১ — ক্রোমোজোম হ্রাস (n) — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m17",
    gallery: [
      {
        id: 'bio3_s17_img1',
        titleBn: "মায়োসিস অ্যানাফেজ ১ — ক্রোমোজোম হ্রাস (n) (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Anaphase I Chromosome Reduction (2D Vector Diagram)",
        captionBn: "৩.৫ সেন্ট্রোমিয়ার অক্ষুণ্ণ রেখে ক্রোমোজোম অর্ধেক হওয়া। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Anaphase I Chromosome Reduction.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s17.svg",
        customDiagramType: "bioCh3_m17"
      },
      {
        id: 'bio3_s17_img2',
        titleBn: "মায়োসিস অ্যানাফেজ ১ — ক্রোমোজোম হ্রাস (n) (বাস্তব রূপায়ন)",
        titleEn: "Anaphase I Chromosome Reduction (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট মায়োসিস অ্যানাফেজ ১ — ক্রোমোজোম হ্রাস (n)।",
        captionEn: "High-definition visualization of Anaphase I Chromosome Reduction.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s17.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "মায়োসিস অ্যানাফেজ ১ — ক্রোমোজোম হ্রাস (n)",
        labelEn: "Anaphase I Chromosome Reduction",
        detailBn: "সেন্ট্রোমিয়ার অক্ষুণ্ণ রেখে ক্রোমোজোম অর্ধেক হওয়া",
        detailEn: "Structural core of Anaphase I Chromosome Reduction.",
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
        heading: "৩.৫ মায়োসিস অ্যানাফেজ ১ — ক্রোমোজোম হ্রাস (n) এর মৌলিক পরিচয়",
        description: "সেন্ট্রোমিয়ার অক্ষুণ্ণ রেখে ক্রোমোজোম অর্ধেক হওয়া। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.৫ মায়োসিস অ্যানাফেজ ১ — ক্রোমোজোম হ্রাস (n)"
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
      content: "টপিক ৩.৫: মায়োসিস অ্যানাফেজ ১ — ক্রোমোজোম হ্রাস (n) এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 18: মায়োসিস ২ — সমীকরণিক কোষ বিভাজন
  {
    id: 18,
    subject: 'biology',
    chapter: 3,
    title: "মায়োসিস ২ — সমীকরণিক কোষ বিভাজন",
    subtitle: "Meiosis II Equational Split Phases",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s18.svg",
    imageCaption: "৩.৫ মায়োসিস ২ — সমীকরণিক কোষ বিভাজন — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m18",
    gallery: [
      {
        id: 'bio3_s18_img1',
        titleBn: "মায়োসিস ২ — সমীকরণিক কোষ বিভাজন (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Meiosis II Equational Split Phases (2D Vector Diagram)",
        captionBn: "৩.৫ হ্যাপ্লয়েড থেকে মোট ৪টি পৃথক অপত্য কোষ। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Meiosis II Equational Split Phases.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s18.svg",
        customDiagramType: "bioCh3_m18"
      },
      {
        id: 'bio3_s18_img2',
        titleBn: "মায়োসিস ২ — সমীকরণিক কোষ বিভাজন (বাস্তব রূপায়ন)",
        titleEn: "Meiosis II Equational Split Phases (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট মায়োসিস ২ — সমীকরণিক কোষ বিভাজন।",
        captionEn: "High-definition visualization of Meiosis II Equational Split Phases.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s18.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "মায়োসিস ২ — সমীকরণিক কোষ বিভাজন",
        labelEn: "Meiosis II Equational Split Phases",
        detailBn: "হ্যাপ্লয়েড থেকে মোট ৪টি পৃথক অপত্য কোষ",
        detailEn: "Structural core of Meiosis II Equational Split Phases.",
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
        heading: "৩.৫ মায়োসিস ২ — সমীকরণিক কোষ বিভাজন এর মৌলিক পরিচয়",
        description: "হ্যাপ্লয়েড থেকে মোট ৪টি পৃথক অপত্য কোষ। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.৫ মায়োসিস ২ — সমীকরণিক কোষ বিভাজন"
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
      content: "টপিক ৩.৫: মায়োসিস ২ — সমীকরণিক কোষ বিভাজন এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 19: স্পার্মাটোজেনেসিস — ৪টি হ্যাপ্লয়েড শুক্রাণু
  {
    id: 19,
    subject: 'biology',
    chapter: 3,
    title: "স্পার্মাটোজেনেসিস — ৪টি হ্যাপ্লয়েড শুক্রাণু",
    subtitle: "Spermatogenesis 4 Sperm Cells",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s19.svg",
    imageCaption: "৩.৭ স্পার্মাটোজেনেসিস — ৪টি হ্যাপ্লয়েড শুক্রাণু — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m19",
    gallery: [
      {
        id: 'bio3_s19_img1',
        titleBn: "স্পার্মাটোজেনেসিস — ৪টি হ্যাপ্লয়েড শুক্রাণু (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Spermatogenesis 4 Sperm Cells (2D Vector Diagram)",
        captionBn: "৩.৭ মিয়োসিসে ৪টি সচল লেজযুক্ত শুক্রাণু সৃষ্টি। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Spermatogenesis 4 Sperm Cells.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s19.svg",
        customDiagramType: "bioCh3_m19"
      },
      {
        id: 'bio3_s19_img2',
        titleBn: "স্পার্মাটোজেনেসিস — ৪টি হ্যাপ্লয়েড শুক্রাণু (বাস্তব রূপায়ন)",
        titleEn: "Spermatogenesis 4 Sperm Cells (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট স্পার্মাটোজেনেসিস — ৪টি হ্যাপ্লয়েড শুক্রাণু।",
        captionEn: "High-definition visualization of Spermatogenesis 4 Sperm Cells.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s19.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "স্পার্মাটোজেনেসিস — ৪টি হ্যাপ্লয়েড শুক্রাণু",
        labelEn: "Spermatogenesis 4 Sperm Cells",
        detailBn: "মিয়োসিসে ৪টি সচল লেজযুক্ত শুক্রাণু সৃষ্টি",
        detailEn: "Structural core of Spermatogenesis 4 Sperm Cells.",
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
        heading: "৩.৭ স্পার্মাটোজেনেসিস — ৪টি হ্যাপ্লয়েড শুক্রাণু এর মৌলিক পরিচয়",
        description: "মিয়োসিসে ৪টি সচল লেজযুক্ত শুক্রাণু সৃষ্টি। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.৭ স্পার্মাটোজেনেসিস — ৪টি হ্যাপ্লয়েড শুক্রাণু"
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
      content: "টপিক ৩.৭: স্পার্মাটোজেনেসিস — ৪টি হ্যাপ্লয়েড শুক্রাণু এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  },
  // Slide 20: ওওজেনেসিস — ১টি ডিম্বাণু ও ৩টি পোলার বডি
  {
    id: 20,
    subject: 'biology',
    chapter: 3,
    title: "ওওজেনেসিস — ১টি ডিম্বাণু ও ৩টি পোলার বডি",
    subtitle: "Oogenesis Ovum & Polar Bodies Formation",
    category: "জীববিজ্ঞান 3ম অধ্যায়: কোষ বিভাজন",
    image: "/src/assets/images/bio/bio_ch3_s20.svg",
    imageCaption: "৩.৭ ওওজেনেসিস — ১টি ডিম্বাণু ও ৩টি পোলার বডি — ৩ডি অ্যানিমেটেড সিমুলেশন ও ২ডি সচিত্র রূপায়ন",
    customDiagramType: "bioCh3_m20",
    gallery: [
      {
        id: 'bio3_s20_img1',
        titleBn: "ওওজেনেসিস — ১টি ডিম্বাণু ও ৩টি পোলার বডি (২ডি বৈজ্ঞানিক ডায়াগ্রাম)",
        titleEn: "Oogenesis Ovum & Polar Bodies Formation (2D Vector Diagram)",
        captionBn: "৩.৭ অসম বিভাজনে পুষ্ট ডিম্বাণু ও পোলার বডি। সুস্পষ্ট বাংলা ও ইংরেজি লেবেলিংযুক্ত আদর্শ শিক্ষণীয় চিত্র।",
        captionEn: "Detailed scientific anatomical diagram of Oogenesis Ovum & Polar Bodies Formation.",
        type: 'diagram',
        url: "/src/assets/images/bio/bio_ch3_s20.svg",
        customDiagramType: "bioCh3_m20"
      },
      {
        id: 'bio3_s20_img2',
        titleBn: "ওওজেনেসিস — ১টি ডিম্বাণু ও ৩টি পোলার বডি (বাস্তব রূপায়ন)",
        titleEn: "Oogenesis Ovum & Polar Bodies Formation (Microscopic Realization)",
        captionBn: "সরাসরি পরীক্ষাগার ও অণুবীক্ষণ যন্ত্রে দৃষ্ট ওওজেনেসিস — ১টি ডিম্বাণু ও ৩টি পোলার বডি।",
        captionEn: "High-definition visualization of Oogenesis Ovum & Polar Bodies Formation.",
        type: 'photo',
        url: "/src/assets/images/bio/bio_ch3_s20.svg"
      }
    ],
    diagramAnnotations: [
      {
        labelBn: "ওওজেনেসিস — ১টি ডিম্বাণু ও ৩টি পোলার বডি",
        labelEn: "Oogenesis Ovum & Polar Bodies Formation",
        detailBn: "অসম বিভাজনে পুষ্ট ডিম্বাণু ও পোলার বডি",
        detailEn: "Structural core of Oogenesis Ovum & Polar Bodies Formation.",
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
        heading: "৩.৭ ওওজেনেসিস — ১টি ডিম্বাণু ও ৩টি পোলার বডি এর মৌলিক পরিচয়",
        description: "অসম বিভাজনে পুষ্ট ডিম্বাণু ও পোলার বডি। এটি জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) নির্ধারিত এসএসসি জীববিজ্ঞানের অতি গুরুত্বপূর্ণ টপিক।",
        highlight: "৩.৭ ওওজেনেসিস — ১টি ডিম্বাণু ও ৩টি পোলার বডি"
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
      content: "টপিক ৩.৭: ওওজেনেসিস — ১টি ডিম্বাণু ও ৩টি পোলার বডি এর প্রতিটি অংশ ডায়াগ্রামে চিহ্নিত করে খাতায় ২-৩ বার চর্চা করলে পরীক্ষায় সর্বোচ্চ নম্বর নিশ্চিত হবে।"
    }
  }
];
