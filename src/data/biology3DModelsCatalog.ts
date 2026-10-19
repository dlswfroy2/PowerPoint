/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Biology3DModelMeta {
  id: number; // 1 to 20
  chapter: number; // 1 to 14
  topicRef: string; // e.g. "৭.১"
  titleBn: string;
  titleEn: string;
  categoryBn: string;
  descriptionBn: string;
  labels: { bn: string; en: string; sym: string; color: string }[];
}

export const BIOLOGY_3D_CATALOG: Record<number, Biology3DModelMeta[]> = {
  1: [
    {
      id: 1,
      chapter: 1,
      topicRef: "১.১",
      titleBn: "জীববিজ্ঞানের ধারণা ও প্রোটোপ্লাজম",
      titleEn: "Biology Scope & Protoplasm",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "সজীব প্রোটোপ্লাজমিক ভিত্তি ও কোষীয় সংগঠন",
      labels: [
        { bn: "জীববিজ্ঞানের ধারণা ও প্রোটোপ্লাজম", en: "Biology Scope & Protoplasm", sym: "M1", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 2,
      chapter: 1,
      topicRef: "১.১",
      titleBn: "ডিএনএ ডাবল হেলিক্স ও ক্ষারক বন্ধন",
      titleEn: "DNA Double Helix & Base Pairs",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "ওয়াটসন-ক্রিক ডিএনএ মডেল ও হাইড্রোজেন বন্ধন",
      labels: [
        { bn: "ডিএনএ ডাবল হেলিক্স ও ক্ষারক বন্ধন", en: "DNA Double Helix & Base Pairs", sym: "M2", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 3,
      chapter: 1,
      topicRef: "১.২",
      titleBn: "জীববিজ্ঞানের শাখা — ভৌত ও ফলিত",
      titleEn: "Branches of Biology",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "অঙ্গসংস্থান ও শারীরবিদ্যার আন্তঃসম্পর্ক",
      labels: [
        { bn: "জীববিজ্ঞানের শাখা", en: "Branches of Biology", sym: "M3", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 4,
      chapter: 1,
      topicRef: "১.৫",
      titleBn: "মনেরা রাজ্য — ব্যাকটেরিয়ার নিউক্লিয়য়েড",
      titleEn: "Kingdom Monera: Bacterial Cell",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "পেপটিডোগ্লাইকান প্রাচীর ও আদিকোষী ডিএনএ",
      labels: [
        { bn: "মনেরা রাজ্য", en: "Kingdom Monera: Bacterial Cell", sym: "M4", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 5,
      chapter: 1,
      topicRef: "১.৫",
      titleBn: "প্রোটিস্টা রাজ্য — অ্যামিবা ও ক্ষণপদ চলন",
      titleEn: "Kingdom Protista: Amoeba & Pseudopodia",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "এককোষী সুকেন্দ্রিক জীব ও ক্ষণপদ চলন",
      labels: [
        { bn: "প্রোটিস্টা রাজ্য", en: "Kingdom Protista: Amoeba & Pseudopodia", sym: "M5", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 6,
      chapter: 1,
      topicRef: "১.৫",
      titleBn: "ফানজাই রাজ্য — মাশরুম ও মাইসেলিয়াম",
      titleEn: "Kingdom Fungi: Mushroom & Mycelium",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "কাইটিন প্রাচীর ও ছত্রাকের ফ্রুটবডি",
      labels: [
        { bn: "ফানজাই রাজ্য", en: "Kingdom Fungi: Mushroom & Mycelium", sym: "M6", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 7,
      chapter: 1,
      topicRef: "১.৫",
      titleBn: "প্লান্টি রাজ্য — সপুষ্পক উদ্ভিদের কাঠামো",
      titleEn: "Kingdom Plantae: Higher Plant",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "ক্লোরোপ্লাস্ট, সেলুলোজ প্রাচীর ও কাণ্ড",
      labels: [
        { bn: "প্লান্টি রাজ্য", en: "Kingdom Plantae: Higher Plant", sym: "M7", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 8,
      chapter: 1,
      topicRef: "১.৫",
      titleBn: "অ্যানিম্যালিয়া রাজ্য — বহুকোষী প্রাণী দেহ",
      titleEn: "Kingdom Animalia: Multicellular Animal",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "জটিল টিস্যু ও দ্বিপার্শ্বীয় প্রতিসাম্যতা",
      labels: [
        { bn: "অ্যানিম্যালিয়া রাজ্য", en: "Kingdom Animalia: Multicellular Animal", sym: "M8", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 9,
      chapter: 1,
      topicRef: "১.৩",
      titleBn: "টি২ ব্যাকটেরিওফাজ ভাইরাস — প্রোটিন ক্যাপসিড",
      titleEn: "T2 Bacteriophage Virus Structure",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "প্রোটিন মস্তক, পুচ্ছ ও ডিএনএ কোর",
      labels: [
        { bn: "টি২ ব্যাকটেরিওফাজ ভাইরাস", en: "T2 Bacteriophage Virus Structure", sym: "M9", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 10,
      chapter: 1,
      topicRef: "১.৫",
      titleBn: "নস্টক ফিলামেন্ট ও হেটারোসিস্ট",
      titleEn: "Nostoc Filament & Heterocyst",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "নীলাভ-সবুজ শৈবালের নাইট্রোজেন সংবন্ধন",
      labels: [
        { bn: "নস্টক ফিলামেন্ট ও হেটারোসিস্ট", en: "Nostoc Filament & Heterocyst", sym: "M10", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 11,
      chapter: 1,
      topicRef: "১.৪",
      titleBn: "ট্যাক্সনমিক হায়ারার্কি — ৭টি ধাপের পিরামিড",
      titleEn: "Taxonomic Hierarchy 7-Level Pyramid",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "রাজ্য থেকে প্রজাতি পর্যন্ত ধাপসমূহ",
      labels: [
        { bn: "ট্যাক্সনমিক হায়ারার্কি", en: "Taxonomic Hierarchy 7-Level Pyramid", sym: "M11", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 12,
      chapter: 1,
      topicRef: "১.৬",
      titleBn: "দ্বিপদ নামকরণের নিয়মাবলী ও লিনিয়ান মডেল",
      titleEn: "Binomial Nomenclature & Linnaeus Model",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "গণ ও প্রজাতির বৈজ্ঞানিক নামকরণ নির্দেশিকা",
      labels: [
        { bn: "দ্বিপদ নামকরণের নিয়মাবলী ও লিনিয়ান মডেল", en: "Binomial Nomenclature & Linnaeus Model", sym: "M12", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 13,
      chapter: 1,
      topicRef: "১.৫",
      titleBn: "মারগুলিসের ২ সুপারকিংডম ও ৫ রাজ্য",
      titleEn: "Margulis 2 Superkingdoms System",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "প্রোক্যারিওটা ও ইউক্যারিওটার আধুনিক বিভাজন",
      labels: [
        { bn: "মারগুলিসের ২ সুপারকিংডম ও ৫ রাজ্য", en: "Margulis 2 Superkingdoms System", sym: "M13", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 14,
      chapter: 1,
      topicRef: "১.৩",
      titleBn: "ড্রসোফিলা ফলমাছি — জেনেটিক্সের মডেল জীব",
      titleEn: "Drosophila Melanogaster Model Organism",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "বংশগতি গবেষণার মডেল জীবের অঙ্গসংস্থান",
      labels: [
        { bn: "ড্রসোফিলা ফলমাছি", en: "Drosophila Melanogaster Model Organism", sym: "M14", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 15,
      chapter: 1,
      topicRef: "১.৫",
      titleBn: "ইউগ্লেনা — প্রাণী ও উদ্ভিদের সংযোগকারী",
      titleEn: "Euglena Flagellate Organism",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "ক্লোরোপ্লাস্ট, চক্ষু-বিন্দু ও ফ্ল্যাজেলা",
      labels: [
        { bn: "ইউগ্লেনা", en: "Euglena Flagellate Organism", sym: "M15", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 16,
      chapter: 1,
      topicRef: "১.৫",
      titleBn: "লাইকেন — শৈবাল ও ছত্রাকের মিথোজীবিতা",
      titleEn: "Lichen Symbiosis: Alga & Fungus",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "মাইকোবায়োন্ট ও ফাইকোবায়োন্টের মেলবন্ধন",
      labels: [
        { bn: "লাইকেন", en: "Lichen Symbiosis: Alga & Fungus", sym: "M16", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 17,
      chapter: 1,
      topicRef: "১.৪",
      titleBn: "ব্যাকটেরিয়াল বৃত্তাকার প্লাজমিড ডিএনএ",
      titleEn: "Bacterial Circular Plasmid DNA",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "স্ব-বিভাজনশীল বৃত্তাকার ডিএনএ রিং",
      labels: [
        { bn: "ব্যাকটেরিয়াল বৃত্তাকার প্লাজমিড ডিএনএ", en: "Bacterial Circular Plasmid DNA", sym: "M17", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 18,
      chapter: 1,
      topicRef: "১.৫",
      titleBn: "স্পাইরোগাইরা শৈবাল ও সর্পিলাকার প্লাস্টিড",
      titleEn: "Spirogyra Spiral Chloroplast",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "ফিলামেন্টাস শৈবালের পেঁচানো ক্লোরোপ্লাস্ট",
      labels: [
        { bn: "স্পাইরোগাইরা শৈবাল ও সর্পিলাকার প্লাস্টিড", en: "Spirogyra Spiral Chloroplast", sym: "M18", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 19,
      chapter: 1,
      topicRef: "১.৬",
      titleBn: "মানুষ ও ধান — লিনিয়ান দ্বিপদ নমুনা",
      titleEn: "Homo Sapiens & Oryza Sativa",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "আন্তর্জাতিক শ্রেণিবিন্যাসিক অবস্থানের মডেল",
      labels: [
        { bn: "মানুষ ও ধান", en: "Homo Sapiens & Oryza Sativa", sym: "M19", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 20,
      chapter: 1,
      topicRef: "১.১",
      titleBn: "আধুনিক জীববৈচিত্র্য সংরক্ষণ নেটওয়ার্ক",
      titleEn: "Biodiversity Conservation Biosphere",
      categoryBn: "জীবন পাঠ",
      descriptionBn: "জিনগত, প্রজাতি ও বাস্তুতান্ত্রিক সংরক্ষণ",
      labels: [
        { bn: "আধুনিক জীববৈচিত্র্য সংরক্ষণ নেটওয়ার্ক", en: "Biodiversity Conservation Biosphere", sym: "M20", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    }
  ],
  2: [
    {
      id: 1,
      chapter: 2,
      topicRef: "২.২",
      titleBn: "উদ্ভিদকোষের সামগ্রিক রূপরেখা ও পুরু প্রাচীর",
      titleEn: "Plant Cell Architecture & Wall",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "সেলুলোজ প্রাচীর, বড় ভ্যাকুওল ও প্লাস্টিড",
      labels: [
        { bn: "উদ্ভিদকোষের সামগ্রিক রূপরেখা ও পুরু প্রাচীর", en: "Plant Cell Architecture & Wall", sym: "M1", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 2,
      chapter: 2,
      topicRef: "২.২",
      titleBn: "প্রাণীকোষের সামগ্রিক রূপরেখা ও ঝিল্লি",
      titleEn: "Animal Cell Internal Cytology",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "নমনীয় প্লাজমালেমা ও সেন্ট্রোসোম গঠন",
      labels: [
        { bn: "প্রাণীকোষের সামগ্রিক রূপরেখা ও ঝিল্লি", en: "Animal Cell Internal Cytology", sym: "M2", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 3,
      chapter: 2,
      topicRef: "২.২",
      titleBn: "প্লাজমামেমব্রেন বা ফ্লুইড মোজাইক মডেল",
      titleEn: "Fluid Mosaic Membrane Model",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "ফসফোলিপিড বাইলেয়ার ও প্রোটিন চ্যানেল",
      labels: [
        { bn: "প্লাজমামেমব্রেন বা ফ্লুইড মোজাইক মডেল", en: "Fluid Mosaic Membrane Model", sym: "M3", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 4,
      chapter: 2,
      topicRef: "২.৩",
      titleBn: "মাইটোকন্ড্রিয়া — কোষের শক্তিকেন্দ্র",
      titleEn: "Mitochondrion Powerhouse 3D",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "ভাঁজযুক্ত ক্রিস্টি, ম্যাট্রিক্স ও ATP সিন্থেজ",
      labels: [
        { bn: "মাইটোকন্ড্রিয়া", en: "Mitochondrion Powerhouse 3D", sym: "M4", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 5,
      chapter: 2,
      topicRef: "২.৩",
      titleBn: "ক্লোরোপ্লাস্ট — গ্রানা থাইলাকয়েড ও স্ট্রোমা",
      titleEn: "Chloroplast Grana & Stroma Folds",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "গ্রানাম থাইলাকয়েড চাকতি ও স্ট্রোমা তরল",
      labels: [
        { bn: "ক্লোরোপ্লাস্ট", en: "Chloroplast Grana & Stroma Folds", sym: "M5", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 6,
      chapter: 2,
      topicRef: "২.৩",
      titleBn: "এন্ডোপ্লাজমিক রেটিকুলাম — অমসৃণ ও মসৃণ",
      titleEn: "Rough & Smooth Endoplasmic Reticulum",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "রাইবোসোমযুক্ত RER ও লিপিড সংশ্লেষী SER",
      labels: [
        { bn: "এন্ডোপ্লাজমিক রেটিকুলাম", en: "Rough & Smooth Endoplasmic Reticulum", sym: "M6", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 7,
      chapter: 2,
      topicRef: "২.৩",
      titleBn: "গলগি বডি — ক্ষরণকারী সিস্টার্নি স্তূপ",
      titleEn: "Golgi Apparatus Cisternae Stacks",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "প্রোটিন প্যাকেজিং ও ক্ষরণকারী ভেসিকল",
      labels: [
        { bn: "গলগি বডি", en: "Golgi Apparatus Cisternae Stacks", sym: "M7", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 8,
      chapter: 2,
      topicRef: "২.৩",
      titleBn: "লাইসোজোম — আত্মঘাতী হাইড্রোলাইটিক থলিকা",
      titleEn: "Lysosome Hydrolytic Digestion Bag",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "অটোলাইসিস ও ফ্যাগোসাইটিক পরিপাক থলি",
      labels: [
        { bn: "লাইসোজোম", en: "Lysosome Hydrolytic Digestion Bag", sym: "M8", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 9,
      chapter: 2,
      topicRef: "২.৩",
      titleBn: "সেন্ট্রোসোম ও ত্রয়ী সেন্ট্রিওল জোড়",
      titleEn: "Centrosome & Triplet Centrioles",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "মাইক্রোটিউবিউলস ও স্পিন্ডল তন্তু উৎস",
      labels: [
        { bn: "সেন্ট্রোসোম ও ত্রয়ী সেন্ট্রিওল জোড়", en: "Centrosome & Triplet Centrioles", sym: "M9", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 10,
      chapter: 2,
      topicRef: "২.৪",
      titleBn: "কোষীয় নিউক্লিয়াস ও ক্রোমাটিন জালিকা",
      titleEn: "Cell Nucleus & Chromatin Reticulum",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "দ্বিস্তরী নিউক্লিয়ার পর্দা ও ঘন নিউক্লিওলাস",
      labels: [
        { bn: "কোষীয় নিউক্লিয়াস ও ক্রোমাটিন জালিকা", en: "Cell Nucleus & Chromatin Reticulum", sym: "M10", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 11,
      chapter: 2,
      topicRef: "২.৩",
      titleBn: "রাইবোসোম — ৬০S ও ৪০S সাবইউনিট",
      titleEn: "Ribosomal Subunits 60S/40S Unit",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "প্রোটিন সংশ্লেষণের আণবিক কারখানা",
      labels: [
        { bn: "রাইবোসোম", en: "Ribosomal Subunits 60S/40S Unit", sym: "M11", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 12,
      chapter: 2,
      topicRef: "২.৫",
      titleBn: "প্যারেনকাইমা টিস্যু ও আন্তঃকোষীয় ফাঁক",
      titleEn: "Parenchyma Simple Tissue & Spaces",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "পাতলা সেলুলোজ প্রাচীর ও সজীব টিস্যু",
      labels: [
        { bn: "প্যারেনকাইমা টিস্যু ও আন্তঃকোষীয় ফাঁক", en: "Parenchyma Simple Tissue & Spaces", sym: "M12", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 13,
      chapter: 2,
      topicRef: "২.৫",
      titleBn: "কোলেনকাইমা টিস্যু — কোণায় পেকটিন পুরুত্ব",
      titleEn: "Collenchyma Angular Thickening",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "পেকটিন জমে দৃঢ়তা ও স্থিতিস্থাপকতা বৃদ্ধি",
      labels: [
        { bn: "কোলেনকাইমা টিস্যু", en: "Collenchyma Angular Thickening", sym: "M13", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 14,
      chapter: 2,
      topicRef: "২.৫",
      titleBn: "স্ক্লেরেনকাইমা — স্টোন সেল ও বাস্ট ফাইবার",
      titleEn: "Sclerenchyma Stone Cell & Sclerite",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "লিগনিনযুক্ত অত্যন্ত পুরু ও শক্ত মৃত টিস্যু",
      labels: [
        { bn: "স্ক্লেরেনকাইমা", en: "Sclerenchyma Stone Cell & Sclerite", sym: "M14", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 15,
      chapter: 2,
      topicRef: "২.৫",
      titleBn: "জাইলেম ভেসেল ও ট্রাকিড পানি পাইপ",
      titleEn: "Xylem Vessel & Tracheid Pipeline",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "প্রান্ত প্রাচীরহীন অবিচ্ছিন্ন পানি বাহিকা",
      labels: [
        { bn: "জাইলেম ভেসেল ও ট্রাকিড পানি পাইপ", en: "Xylem Vessel & Tracheid Pipeline", sym: "M15", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 16,
      chapter: 2,
      topicRef: "২.৫",
      titleBn: "ফ্লোয়েম সিভনল ও নিউক্লিয়াসযুক্ত সঙ্গী কোষ",
      titleEn: "Phloem Sieve Tube & Companion Cell",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "চালুনির মতো সিভপ্লেট ও খাদ্য সংবহন",
      labels: [
        { bn: "ফ্লোয়েম সিভনল ও নিউক্লিয়াসযুক্ত সঙ্গী কোষ", en: "Phloem Sieve Tube & Companion Cell", sym: "M16", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 17,
      chapter: 2,
      topicRef: "২.৬",
      titleBn: "আবরণী টিস্যু — স্কোয়ামাস ও কিউবয়ডাল",
      titleEn: "Epithelial Tissue Lining Layers",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "ভিত্তি পর্দার ওপর সজ্জিত সুরক্ষাকারী কোষ",
      labels: [
        { bn: "আবরণী টিস্যু", en: "Epithelial Tissue Lining Layers", sym: "M17", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 18,
      chapter: 2,
      topicRef: "২.৬",
      titleBn: "ঐচ্ছিক কঙ্কাল পেশি ও অনৈচ্ছিক অন্ত্র পেশি",
      titleEn: "Striated Skeletal & Smooth Muscle",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "রেখাঙ্কিত বহুনিউক্লিয়াস ও মাকু পেশি কোষ",
      labels: [
        { bn: "ঐচ্ছিক কঙ্কাল পেশি ও অনৈচ্ছিক অন্ত্র পেশি", en: "Striated Skeletal & Smooth Muscle", sym: "M18", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 19,
      chapter: 2,
      topicRef: "২.৬",
      titleBn: "কার্ডিয়াক পেশি ও ইন্টারক্যালেটেড ডিস্ক",
      titleEn: "Cardiac Muscle & Intercalated Disc",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "শাখাযুক্ত ছন্দোবদ্ধ সংকুচিত হৃৎপেশি",
      labels: [
        { bn: "কার্ডিয়াক পেশি ও ইন্টারক্যালেটেড ডিস্ক", en: "Cardiac Muscle & Intercalated Disc", sym: "M19", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 20,
      chapter: 2,
      topicRef: "২.৬",
      titleBn: "বহুপ্রান্তীয় নিউরন ও মায়েলিন অ্যাক্সন",
      titleEn: "Multipolar Neuron & Myelinated Axon",
      categoryBn: "জীবকোষ ও টিস্যু",
      descriptionBn: "কোষদেহ, ডেনড্রাইট ও স্নায়ু সংযোগ সাইন্যাপস",
      labels: [
        { bn: "বহুপ্রান্তীয় নিউরন ও মায়েলিন অ্যাক্সন", en: "Multipolar Neuron & Myelinated Axon", sym: "M20", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    }
  ],
  3: [
    {
      id: 1,
      chapter: 3,
      topicRef: "৩.১",
      titleBn: "কোষ চক্র — ইন্টারফেজ G1, S, G2 পর্যায়",
      titleEn: "Cell Cycle & Interphase Phases",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "ডিএনএ অনুলিপন ও কোষের বৃদ্ধি প্রস্তুতি",
      labels: [
        { bn: "কোষ চক্র", en: "Cell Cycle & Interphase Phases", sym: "M1", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 2,
      chapter: 3,
      topicRef: "৩.১",
      titleBn: "ব্যাকটেরিয়ার অ্যামাইটোসিস প্রত্যক্ষ বিভাজন",
      titleEn: "Bacterial Amitosis Direct Fission",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "কোষ প্রাচীর ও মেমব্রেন খাঁজে সরাসরি বিভক্তি",
      labels: [
        { bn: "ব্যাকটেরিয়ার অ্যামাইটোসিস প্রত্যক্ষ বিভাজন", en: "Bacterial Amitosis Direct Fission", sym: "M2", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 3,
      chapter: 3,
      topicRef: "৩.২",
      titleBn: "মেটাসেন্ট্রিক ক্রোমোজোম ও কাইনেটোকোর",
      titleEn: "Metacentric Chromosome Architecture",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "সেন্ট্রোমিয়ার, বাহুদ্বয় ও স্পিন্ডল সংযোগ",
      labels: [
        { bn: "মেটাসেন্ট্রিক ক্রোমোজোম ও কাইনেটোকোর", en: "Metacentric Chromosome Architecture", sym: "M3", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 4,
      chapter: 3,
      topicRef: "৩.২",
      titleBn: "মাইটোসিস প্রোফেজ — ক্রোমোজোমের সংকোচন",
      titleEn: "Prophase Chromosome Condensation",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "জলবিয়োজনে ক্রোমোজোম খাটো ও মোটা হওয়া",
      labels: [
        { bn: "মাইটোসিস প্রোফেজ", en: "Prophase Chromosome Condensation", sym: "M4", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 5,
      chapter: 3,
      topicRef: "৩.২",
      titleBn: "প্রো-মেটাফেজ — স্পিন্ডল যন্ত্র ও মেরু",
      titleEn: "Prometaphase Spindle Apparatus",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "দ্বিমেরুবিশিষ্ট তন্তু সৃষ্টি ও নিউক্লিয়ার বিলুপ্তি",
      labels: [
        { bn: "প্রো-মেটাফেজ", en: "Prometaphase Spindle Apparatus", sym: "M5", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 6,
      chapter: 3,
      topicRef: "৩.২",
      titleBn: "মাইটোসিস মেটাফেজ — বিষুবীয় প্লেট বিন্যাস",
      titleEn: "Metaphase Equatorial Plate Alignment",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "মেটাকাইনেসিসে ক্রোমোজোমের মাঝখানে অবস্থান",
      labels: [
        { bn: "মাইটোসিস মেটাফেজ", en: "Metaphase Equatorial Plate Alignment", sym: "M6", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 7,
      chapter: 3,
      topicRef: "৩.২",
      titleBn: "মাইটোসিস অ্যানাফেজ — মেরুভিমুখী চলন",
      titleEn: "Anaphase Polar Chromosome Migration",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "সেন্ট্রোমিয়ার বিভাজনে V, L, J, I আকৃতি",
      labels: [
        { bn: "মাইটোসিস অ্যানাফেজ", en: "Anaphase Polar Chromosome Migration", sym: "M7", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 8,
      chapter: 3,
      topicRef: "৩.২",
      titleBn: "মাইটোসিস টেলোফেজ — নিউক্লিয়াসের পুনর্গঠন",
      titleEn: "Telophase Nuclear Reconstitution",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "দুই মেরুতে অপত্য নিউক্লিয়াস পুনর্নির্মাণ",
      labels: [
        { bn: "মাইটোসিস টেলোফেজ", en: "Telophase Nuclear Reconstitution", sym: "M8", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 9,
      chapter: 3,
      topicRef: "৩.৩",
      titleBn: "উদ্ভিদকোষের সাইটোকাইনেসিস ও কোষপ্লেট",
      titleEn: "Plant Cytokinesis & Cell Plate Wall",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "ফ্র্যাগমোপ্লাস্ট জমে মাঝখানে প্রাচীর নির্মাণ",
      labels: [
        { bn: "উদ্ভিদকোষের সাইটোকাইনেসিস ও কোষপ্লেট", en: "Plant Cytokinesis & Cell Plate Wall", sym: "M9", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 10,
      chapter: 3,
      topicRef: "৩.৩",
      titleBn: "প্রাণীকোষের ক্লিভেজ খাঁজ ও সাইটোপ্লাজম",
      titleEn: "Animal Cleavage Furrow Constriction",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "অ্যাক্টিন রিংয়ের টানে মাঝখানে খাঁজ সৃষ্টি",
      labels: [
        { bn: "প্রাণীকোষের ক্লিভেজ খাঁজ ও সাইটোপ্লাজম", en: "Animal Cleavage Furrow Constriction", sym: "M10", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 11,
      chapter: 3,
      topicRef: "৩.৪",
      titleBn: "অনিয়ন্ত্রিত মাইটোসিস ও টিউমার বিস্তার",
      titleEn: "Uncontrolled Mitosis & Tumor Mass",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "নিয়ন্ত্রণহীন বিভাজনে ক্যান্সার পিণ্ড সৃষ্টি",
      labels: [
        { bn: "অনিয়ন্ত্রিত মাইটোসিস ও টিউমার বিস্তার", en: "Uncontrolled Mitosis & Tumor Mass", sym: "M11", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 12,
      chapter: 3,
      topicRef: "৩.৫",
      titleBn: "মায়োসিস ১ — লেপ্টোটিন বুকে স্টেজ",
      titleEn: "Leptotene Bouquet Stage Chromosomes",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "ক্রোমোজোমের এক মেরুতে পুষ্পস্তবক রূপ",
      labels: [
        { bn: "মায়োসিস ১", en: "Leptotene Bouquet Stage Chromosomes", sym: "M12", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 13,
      chapter: 3,
      topicRef: "৩.৫",
      titleBn: "জাইগোটিন — হোমোলোগাস সিন্যাপসিস জোড়",
      titleEn: "Zygotene Synapsis & Bivalent Pair",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "সমসংস্থ ক্রোমোজোমের নিখুঁত জোড় বাঁধা",
      labels: [
        { bn: "জাইগোটিন", en: "Zygotene Synapsis & Bivalent Pair", sym: "M13", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 14,
      chapter: 3,
      topicRef: "৩.৫",
      titleBn: "প্যাকাইটিন — টেট্রাড ও ক্রসিং ওভার",
      titleEn: "Pachytene Crossing Over & Chiasmata",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "নন-সিস্টার ক্রোমাটিডের জিনগত খণ্ড বিনিময়",
      labels: [
        { bn: "প্যাকাইটিন", en: "Pachytene Crossing Over & Chiasmata", sym: "M14", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 15,
      chapter: 3,
      topicRef: "৩.৫",
      titleBn: "ডিপ্লোটিন ও কায়াজমা প্রান্তীয়করণ",
      titleEn: "Diplotene Chiasmata Terminalization",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "হোমোলোগাস বিকর্ষণ ও কায়াজমা শেষপ্রান্তে গমন",
      labels: [
        { bn: "ডিপ্লোটিন ও কায়াজমা প্রান্তীয়করণ", en: "Diplotene Chiasmata Terminalization", sym: "M15", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 16,
      chapter: 3,
      topicRef: "৩.৫",
      titleBn: "ডায়াকাইনেসিস — নিউক্লিওলাসের বিলুপ্তি",
      titleEn: "Diakinesis Phase Nuclear Envelope End",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "মিয়োসিস প্রোফেজ ১ এর চূড়ান্ত প্রস্তুতি",
      labels: [
        { bn: "ডায়াকাইনেসিস", en: "Diakinesis Phase Nuclear Envelope End", sym: "M16", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 17,
      chapter: 3,
      topicRef: "৩.৫",
      titleBn: "মায়োসিস অ্যানাফেজ ১ — ক্রোমোজোম হ্রাস (n)",
      titleEn: "Anaphase I Chromosome Reduction",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "সেন্ট্রোমিয়ার অক্ষুণ্ণ রেখে ক্রোমোজোম অর্ধেক হওয়া",
      labels: [
        { bn: "মায়োসিস অ্যানাফেজ ১", en: "Anaphase I Chromosome Reduction", sym: "M17", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 18,
      chapter: 3,
      topicRef: "৩.৫",
      titleBn: "মায়োসিস ২ — সমীকরণিক কোষ বিভাজন",
      titleEn: "Meiosis II Equational Split Phases",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "হ্যাপ্লয়েড থেকে মোট ৪টি পৃথক অপত্য কোষ",
      labels: [
        { bn: "মায়োসিস ২", en: "Meiosis II Equational Split Phases", sym: "M18", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 19,
      chapter: 3,
      topicRef: "৩.৭",
      titleBn: "স্পার্মাটোজেনেসিস — ৪টি হ্যাপ্লয়েড শুক্রাণু",
      titleEn: "Spermatogenesis 4 Sperm Cells",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "মিয়োসিসে ৪টি সচল লেজযুক্ত শুক্রাণু সৃষ্টি",
      labels: [
        { bn: "স্পার্মাটোজেনেসিস", en: "Spermatogenesis 4 Sperm Cells", sym: "M19", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 20,
      chapter: 3,
      topicRef: "৩.৭",
      titleBn: "ওওজেনেসিস — ১টি ডিম্বাণু ও ৩টি পোলার বডি",
      titleEn: "Oogenesis Ovum & Polar Bodies Formation",
      categoryBn: "কোষ বিভাজন",
      descriptionBn: "অসম বিভাজনে পুষ্ট ডিম্বাণু ও পোলার বডি",
      labels: [
        { bn: "ওওজেনেসিস", en: "Oogenesis Ovum & Polar Bodies Formation", sym: "M20", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    }
  ],
  4: [
    {
      id: 1,
      chapter: 4,
      topicRef: "৪.১",
      titleBn: "ATP অণুর ৩ডি রাসায়নিক রূপ — জৈব মুদ্রা",
      titleEn: "ATP Biological Energy Currency",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "অ্যাডেনিন, রাইবোজ ও ৩টি উচ্চ শক্তি ফসফেট",
      labels: [
        { bn: "ATP অণুর ৩ডি রাসায়নিক রূপ", en: "ATP Biological Energy Currency", sym: "M1", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 2,
      chapter: 4,
      topicRef: "৪.১",
      titleBn: "ATP-ADP ব্যাটারি রিচার্জ রূপান্তর চক্র",
      titleEn: "ATP-ADP Biological Battery Cycle",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "ফসফোরাইলেশনে শক্তির আধান ও মুক্তি",
      labels: [
        { bn: "ATP-ADP ব্যাটারি রিচার্জ রূপান্তর চক্র", en: "ATP-ADP Biological Battery Cycle", sym: "M2", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 3,
      chapter: 4,
      topicRef: "৪.২",
      titleBn: "পাতার মেসোফিল টিস্যু ও সালোকসংশ্লেষণ",
      titleEn: "Leaf Mesophyll & Chloroplast Engine",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "প্যালিসেড ও স্পঞ্জি স্তরে সৌরশক্তি রূপান্তর",
      labels: [
        { bn: "পাতার মেসোফিল টিস্যু ও সালোকসংশ্লেষণ", en: "Leaf Mesophyll & Chloroplast Engine", sym: "M3", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 4,
      chapter: 4,
      topicRef: "৪.৩",
      titleBn: "ফটোসিস্টেম ২ (PS II) ও আলোক অ্যান্টেনা",
      titleEn: "Photosystem II Reaction Center (P680)",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "আলোক ফোটন শোষণ ও উত্তেজিত ইলেকট্রন নির্গমন",
      labels: [
        { bn: "ফটোসিস্টেম ২ (PS II) ও আলোক অ্যান্টেনা", en: "Photosystem II Reaction Center (P680)", sym: "M4", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 5,
      chapter: 4,
      topicRef: "৪.৩",
      titleBn: "পানির ফটোলাইসিস বা আলোক বিভাজন",
      titleEn: "Photolysis of Water Oxygen Release",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "পানি ভেঙে প্রোটন, ইলেকট্রন ও মুক্ত অক্সিজেন",
      labels: [
        { bn: "পানির ফটোলাইসিস বা আলোক বিভাজন", en: "Photolysis of Water Oxygen Release", sym: "M5", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 6,
      chapter: 4,
      topicRef: "৪.৩",
      titleBn: "অচক্রীয় ইলেকট্রন প্রবাহ বা Z-স্কিম",
      titleEn: "Non-Cyclic Z-Scheme Electron Flow",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "থাইলাকয়েড ঝিল্লিতে ইলেকট্রনের পরিবহন সিঁড়ি",
      labels: [
        { bn: "অচক্রীয় ইলেকট্রন প্রবাহ বা Z-স্কিম", en: "Non-Cyclic Z-Scheme Electron Flow", sym: "M6", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 7,
      chapter: 4,
      topicRef: "৪.৩",
      titleBn: "ফটোসিস্টেম ১ (PS I) ও NADPH বিজারক",
      titleEn: "Photosystem I Reaction Center (P700)",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "NADP+ বিজারিত হয়ে NADPH যৌগে শক্তি ধারণ",
      labels: [
        { bn: "ফটোসিস্টেম ১ (PS I) ও NADPH বিজারক", en: "Photosystem I Reaction Center (P700)", sym: "M7", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 8,
      chapter: 4,
      topicRef: "৪.৩",
      titleBn: "থাইলাকয়েড ঝিল্লিতে ATP সিন্থেজ মোটর",
      titleEn: "Thylakoid ATP Synthase Complex",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "প্রোটন প্রবাহে রোটারি ইঞ্জিনের মতো ঘোরা",
      labels: [
        { bn: "থাইলাকয়েড ঝিল্লিতে ATP সিন্থেজ মোটর", en: "Thylakoid ATP Synthase Complex", sym: "M8", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 9,
      chapter: 4,
      topicRef: "৪.৪",
      titleBn: "ক্যালভিন চক্র (C3) — RuBP কার্বক্সিলেশন",
      titleEn: "Calvin Cycle RuBisCO CO2 Fixation",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "CO2 যুক্ত হয়ে ১২ অণু ৩-PGA তৈরির চক্র",
      labels: [
        { bn: "ক্যালভিন চক্র (C3)", en: "Calvin Cycle RuBisCO CO2 Fixation", sym: "M9", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 10,
      chapter: 4,
      topicRef: "৪.৪",
      titleBn: "রুবিসকো এনজাইম — কার্বক্সিলেশন অনুঘটক",
      titleEn: "RuBisCO Enzyme Molecular Architecture",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "১৬ সাবইউনিটের বিশ্বের প্রাচুর্যময় প্রোটিন",
      labels: [
        { bn: "রুবিসকো এনজাইম", en: "RuBisCO Enzyme Molecular Architecture", sym: "M10", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 11,
      chapter: 4,
      topicRef: "৪.৪",
      titleBn: "হ্যাচ ও স্ল্যাক চক্র (C4) ও ক্রাঞ্জ অ্যানাটমি",
      titleEn: "Hatch-Slack C4 Pathway Kranz Anatomy",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "বান্ডল সিথ বেষ্টিত ৪-কার্বন অক্সালোএসিটেট পথ",
      labels: [
        { bn: "হ্যাচ ও স্ল্যাক চক্র (C4) ও ক্রাঞ্জ অ্যানাটমি", en: "Hatch-Slack C4 Pathway Kranz Anatomy", sym: "M11", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 12,
      chapter: 4,
      topicRef: "৪.৫",
      titleBn: "সালোকসংশ্লেষণের আলোক বর্ণালী প্রভাবক",
      titleEn: "Photosynthetic Action Spectrum & Light",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "নীল ও লাল আলোর সর্বাধিক কার্যকর ব্যবহার",
      labels: [
        { bn: "সালোকসংশ্লেষণের আলোক বর্ণালী প্রভাবক", en: "Photosynthetic Action Spectrum & Light", sym: "M12", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 13,
      chapter: 4,
      topicRef: "৪.৬",
      titleBn: "সবাত শ্বসন — মাইটোকন্ড্রিয়াল পাওয়ার স্টেশন",
      titleEn: "Aerobic Respiration Power Station",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "গ্লুকোজ জারণে ৩৮ অণু ATP ও CO2 সৃষ্টি",
      labels: [
        { bn: "সবাত শ্বসন", en: "Aerobic Respiration Power Station", sym: "M13", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 14,
      chapter: 4,
      topicRef: "৪.৭",
      titleBn: "গ্লাইকোলাইসিস — পাইরুভিক এসিড সৃষ্টি",
      titleEn: "Cytoplasmic Glycolysis 10 Steps",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "সাইটোপ্লাজমে গ্লুকোজ ভেঙে ২ পাইরুভেট তৈরি",
      labels: [
        { bn: "গ্লাইকোলাইসিস", en: "Cytoplasmic Glycolysis 10 Steps", sym: "M14", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 15,
      chapter: 4,
      topicRef: "৪.৭",
      titleBn: "এসিটাইল কো-এ সৃষ্টি ও লিংক রিঅ্যাকশন",
      titleEn: "Pyruvate to Acetyl-CoA Link Step",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "ম্যাট্রিক্সে প্রবেশ ও ডিকার্বক্সিলেশন প্রক্রিয়া",
      labels: [
        { bn: "এসিটাইল কো-এ সৃষ্টি ও লিংক রিঅ্যাকশন", en: "Pyruvate to Acetyl-CoA Link Step", sym: "M15", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 16,
      chapter: 4,
      topicRef: "৪.৭",
      titleBn: "ক্রেবস চক্র (TCA চক্র) — সাইট্রিক এসিড লুপ",
      titleEn: "Krebs Citric Acid Cycle Loop (TCA)",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "ম্যাট্রিক্সে সাইট্রেট থেকে ধারাবাহিক জারণ চক্র",
      labels: [
        { bn: "ক্রেবস চক্র (TCA চক্র)", en: "Krebs Citric Acid Cycle Loop (TCA)", sym: "M16", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 17,
      chapter: 4,
      topicRef: "৪.৭",
      titleBn: "ইলেকট্রন ট্রান্সপোর্ট সিস্টেম (ETS) ক্রিস্টি",
      titleEn: "Respiratory Electron Transport Chain",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "সাইটোক্রোম কমপ্লেক্সে প্রোটন পাম্প ও ATP",
      labels: [
        { bn: "ইলেকট্রন ট্রান্সপোর্ট সিস্টেম (ETS) ক্রিস্টি", en: "Respiratory Electron Transport Chain", sym: "M17", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 18,
      chapter: 4,
      topicRef: "৪.৬",
      titleBn: "অবাত শ্বসন — ইস্টের অ্যালকোহলিক গাঁজন",
      titleEn: "Yeast Alcoholic Fermentation Vessel",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "অক্সিজেন ছাড়া ইথানল ও CO2 বুদবুদ সৃষ্টি",
      labels: [
        { bn: "অবাত শ্বসন", en: "Yeast Alcoholic Fermentation Vessel", sym: "M18", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 19,
      chapter: 4,
      topicRef: "৪.৬",
      titleBn: "ল্যাকটিক এসিড সন্ধান — পেশি ক্লান্তি",
      titleEn: "Lactic Acid Muscle Fatigue Reaction",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "অক্সিজেন ঘাটতিতে পেশিকোষে ল্যাকটেট জমা",
      labels: [
        { bn: "ল্যাকটিক এসিড সন্ধান", en: "Lactic Acid Muscle Fatigue Reaction", sym: "M19", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 20,
      chapter: 4,
      topicRef: "৪.৭",
      titleBn: "গ্লুকোজ প্রতি নিট ৩৮ ATP ব্যালেন্স শিট",
      titleEn: "Net 38 ATP Energy Balance Sheet",
      categoryBn: "জীবনীশক্তি",
      descriptionBn: "শ্বসনের প্রতিটি ধাপের সমন্বিত শক্তি বাজেট",
      labels: [
        { bn: "গ্লুকোজ প্রতি নিট ৩৮ ATP ব্যালেন্স শিট", en: "Net 38 ATP Energy Balance Sheet", sym: "M20", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    }
  ],
  5: [
    {
      id: 1,
      chapter: 5,
      topicRef: "৫.১",
      titleBn: "উদ্ভিদের ১০টি ম্যাক্রো উপাদান ও আয়ন শোষণ",
      titleEn: "Plant Macronutrients Essential 10",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "নাইট্রোজেন, ম্যাগনেসিয়াম, ফসফরাসের গুরুত্ব",
      labels: [
        { bn: "উদ্ভিদের ১০টি ম্যাক্রো উপাদান ও আয়ন শোষণ", en: "Plant Macronutrients Essential 10", sym: "M1", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 2,
      chapter: 5,
      topicRef: "৫.২",
      titleBn: "পুষ্টি উপাদানের অভাবে ক্লোরোসিস ও ডাইব্যাক",
      titleEn: "Plant Deficiency Chlorosis & Necrosis",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "পাতার শিরায় হলুদ রঙ ও ডগা শুকিয়ে যাওয়া",
      labels: [
        { bn: "পুষ্টি উপাদানের অভাবে ক্লোরোসিস ও ডাইব্যাক", en: "Plant Deficiency Chlorosis & Necrosis", sym: "M2", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 3,
      chapter: 5,
      topicRef: "৫.৩",
      titleBn: "মানব সুষম খাদ্য পিরামিড ও ক্যালোরি বণ্টন",
      titleEn: "Balanced Human Food Pyramid Calories",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "শর্করা, আমিষ, শাকসবজি ও চর্বির সুষম অনুপাত",
      labels: [
        { bn: "মানব সুষম খাদ্য পিরামিড ও ক্যালোরি বণ্টন", en: "Balanced Human Food Pyramid Calories", sym: "M3", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 4,
      chapter: 5,
      topicRef: "৫.৩",
      titleBn: "শর্করা অণু — স্টার্চ ও গ্লুকোজ পলিমার",
      titleEn: "Starch Polymer & Glucose Monomers",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "গ্লাইকোসিডিক বন্ধনে আবদ্ধ শক্তির প্রধান উৎস",
      labels: [
        { bn: "শর্করা অণু", en: "Starch Polymer & Glucose Monomers", sym: "M4", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 5,
      chapter: 5,
      topicRef: "৫.৩",
      titleBn: "আমিষ — পেপটাইড বন্ধন ও অ্যামাইনো এসিড",
      titleEn: "Protein Polypeptide Chain Architecture",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "২০ প্রকার অ্যামাইনো এসিডের ত্রিমাত্রিক বিন্যাস",
      labels: [
        { bn: "আমিষ", en: "Protein Polypeptide Chain Architecture", sym: "M5", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 6,
      chapter: 5,
      topicRef: "৫.৩",
      titleBn: "স্নেহ পদার্থ — গ্লিসারল ও ফ্যাটি এসিড এস্টার",
      titleEn: "Lipid Triglyceride Molecular Structure",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "উচ্চ শক্তি ধারণকারী ফ্যাটি এসিডের লেজ",
      labels: [
        { bn: "স্নেহ পদার্থ", en: "Lipid Triglyceride Molecular Structure", sym: "M6", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 7,
      chapter: 5,
      topicRef: "৫.৫",
      titleBn: "মানব পৌষ্টিকতন্ত্রের সামগ্রিক ৩ডি মডেল",
      titleEn: "Human Digestive Tract Comprehensive",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "মুখ থেকে মলাশয় পর্যন্ত সম্পূর্ণ পাচন পথ",
      labels: [
        { bn: "মানব পৌষ্টিকতন্ত্রের সামগ্রিক ৩ডি মডেল", en: "Human Digestive Tract Comprehensive", sym: "M7", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 8,
      chapter: 5,
      topicRef: "৫.৫",
      titleBn: "দাঁতের অভ্যন্তরীণ গঠন — এনামেল ও ডেন্টিন",
      titleEn: "Molar Tooth Internal Layers & Pulp",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "এনামেল, ডেন্টিন, সিমেন্টাম ও রক্তবাহী মজ্জা",
      labels: [
        { bn: "দাঁতের অভ্যন্তরীণ গঠন", en: "Molar Tooth Internal Layers & Pulp", sym: "M8", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 9,
      chapter: 5,
      topicRef: "৫.৬",
      titleBn: "লালাগ্রন্থি — প্যারোটিড ও টায়ালিন এনজাইম",
      titleEn: "Salivary Glands & Ptyalin Amylase",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "৩ জোড়া লালাগ্রন্থি ও শর্করা পরিপাকের সূচনা",
      labels: [
        { bn: "লালাগ্রন্থি", en: "Salivary Glands & Ptyalin Amylase", sym: "M9", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 10,
      chapter: 5,
      topicRef: "৫.৫",
      titleBn: "পাকস্থলী — কার্ডিয়া, ফান্ডাস ও গ্যাস্ট্রিক পিট",
      titleEn: "Stomach Anatomy Muscular Rugae",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "পুরু পেশিবহুল থলি ও এসিড ক্ষরণকারী খাঁজ",
      labels: [
        { bn: "পাকস্থলী", en: "Stomach Anatomy Muscular Rugae", sym: "M10", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 11,
      chapter: 5,
      topicRef: "৫.৭",
      titleBn: "গ্যাস্ট্রিক জুস — HCl ও পেপসিন দ্বারা পরিপাক",
      titleEn: "Gastric Acid (HCl) & Pepsin Protease",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "অম্লীয় মাধ্যমে প্রোটিন ভেঙে পেপটনে রূপান্তর",
      labels: [
        { bn: "গ্যাস্ট্রিক জুস", en: "Gastric Acid (HCl) & Pepsin Protease", sym: "M11", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 12,
      chapter: 5,
      topicRef: "৫.৬",
      titleBn: "যকৃৎ — মানবদেহের সবচেয়ে বড় গ্রন্থি ও পিত্তথলি",
      titleEn: "Liver Lobules & Gallbladder Anatomy",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "হেপাটিক লোবিউল, পিত্তরস তৈরি ও সঞ্চয়",
      labels: [
        { bn: "যকৃৎ", en: "Liver Lobules & Gallbladder Anatomy", sym: "M12", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 13,
      chapter: 5,
      topicRef: "৫.৬",
      titleBn: "অগ্ন্যাশয় — মিশ্র গ্রন্থি ও আইলেটস দ্বীপপুঞ্জ",
      titleEn: "Pancreas Acini & Islets of Langerhans",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "ট্রিপসিন, লাইপেজ ও হরমোন ক্ষরণকারী অঙ্গ",
      labels: [
        { bn: "অগ্ন্যাশয়", en: "Pancreas Acini & Islets of Langerhans", sym: "M13", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 14,
      chapter: 5,
      topicRef: "৫.৫",
      titleBn: "ক্ষুদ্রান্ত্র — ডিওডেনাম, জেজুনাম ও ইলিয়াম লুপ",
      titleEn: "Small Intestine Duodenal C-Loop & Ileum",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "খাদ্যের সম্পূর্ণ পরিপাক ও শোষণের মূল স্থান",
      labels: [
        { bn: "ক্ষুদ্রান্ত্র", en: "Small Intestine Duodenal C-Loop & Ileum", sym: "M14", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 15,
      chapter: 5,
      topicRef: "৫.৭",
      titleBn: "আন্ত্রিক ভিলাই — শোষণকারী মাইক্রোভিলাই স্তর",
      titleEn: "Intestinal Villi & Lacteal Vessel Network",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "শোষণ পৃষ্ঠ বাড়ানো আঙুলের মতো ক্ষুদ্র প্রবর্ধক",
      labels: [
        { bn: "আন্ত্রিক ভিলাই", en: "Intestinal Villi & Lacteal Vessel Network", sym: "M15", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 16,
      chapter: 5,
      topicRef: "৫.৭",
      titleBn: "পিত্তলবণ দ্বারা চর্বির ইমালসিফিকেশন ও লাইপেজ",
      titleEn: "Fat Emulsification by Bile Salts & Lipase",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "চর্বির কণা ভেঙে ছোট ফোঁটায় পরিণত করা",
      labels: [
        { bn: "পিত্তলবণ দ্বারা চর্বির ইমালসিফিকেশন ও লাইপেজ", en: "Fat Emulsification by Bile Salts & Lipase", sym: "M16", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 17,
      chapter: 5,
      topicRef: "৫.৫",
      titleBn: "বৃহদান্ত্র — সিকাম, কোলন ও অ্যাপেনডিক্স",
      titleEn: "Large Intestine Colon & Appendix Tip",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "পানি পুনঃশোষণ ও মল নিষ্কাশন নালী",
      labels: [
        { bn: "বৃহদান্ত্র", en: "Large Intestine Colon & Appendix Tip", sym: "M17", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 18,
      chapter: 5,
      topicRef: "৫.৪",
      titleBn: "বিএমআই (BMI) স্কেল ও আদর্শ ওজনের চার্ট",
      titleEn: "Body Mass Index Dynamic Assessment",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "ওজন (কেজি) ÷ উচ্চতা^২ (মিটার) পরিমাপক",
      labels: [
        { bn: "বিএমআই (BMI) স্কেল ও আদর্শ ওজনের চার্ট", en: "Body Mass Index Dynamic Assessment", sym: "M18", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 19,
      chapter: 5,
      topicRef: "৫.৮",
      titleBn: "গ্যাস্ট্রিক আলসার ক্ষত ও হেলিকোব্যাক্টার পাইলোরি",
      titleEn: "Peptic Ulcer Crater & H. Pylori Bacteria",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "পাকস্থলীর প্রাচীরে ক্ষত ও পেটে তীব্র জ্বালা",
      labels: [
        { bn: "গ্যাস্ট্রিক আলসার ক্ষত ও হেলিকোব্যাক্টার পাইলোরি", en: "Peptic Ulcer Crater & H. Pylori Bacteria", sym: "M19", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 20,
      chapter: 5,
      topicRef: "৫.৮",
      titleBn: "অ্যাপেনডিসাইটিস ও পিত্তথলির কোলেস্টেরল পাথর",
      titleEn: "Appendicitis Inflammation & Gallstones",
      categoryBn: "খাদ্য, পুষ্টি এবং পরিপাক",
      descriptionBn: "অ্যাপেনডিক্সে সংক্রমণ ও পিত্তনালী ব্লক",
      labels: [
        { bn: "অ্যাপেনডিসাইটিস ও পিত্তথলির কোলেস্টেরল পাথর", en: "Appendicitis Inflammation & Gallstones", sym: "M20", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    }
  ],
  6: [
    {
      id: 1,
      chapter: 6,
      topicRef: "৬.১",
      titleBn: "মূলরোম ও মাটির কৈশিক পানি শোষণ প্রক্রিয়া",
      titleEn: "Root Hair Capillary Water Absorption",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "ইমবাইবিশন ও অন্তঃঅভিস্রবণে পানি গ্রহণ",
      labels: [
        { bn: "মূলরোম ও মাটির কৈশিক পানি শোষণ প্রক্রিয়া", en: "Root Hair Capillary Water Absorption", sym: "M1", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 2,
      chapter: 6,
      topicRef: "৬.১",
      titleBn: "ইমবাইবিশন, ব্যাপন ও অভিস্রবণের ৩ডি মডেল",
      titleEn: "Imbibition, Diffusion & Osmosis 3D",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "কলয়েড কণার পানি শোষণ ও অর্ধভেদ্য ঝিল্লি",
      labels: [
        { bn: "ইমবাইবিশন, ব্যাপন ও অভিস্রবণের ৩ডি মডেল", en: "Imbibition, Diffusion & Osmosis 3D", sym: "M2", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 3,
      chapter: 6,
      topicRef: "৬.২",
      titleBn: "অ্যাপোপ্লাস্ট ও সিমপ্লাস্ট শোষণ পথ",
      titleEn: "Apoplast & Symplast Pathways in Root",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "কোষপ্রাচীর ও প্লাজমোডেসমাটা দিয়ে রস চলাচল",
      labels: [
        { bn: "অ্যাপোপ্লাস্ট ও সিমপ্লাস্ট শোষণ পথ", en: "Apoplast & Symplast Pathways in Root", sym: "M3", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 4,
      chapter: 6,
      topicRef: "৬.২",
      titleBn: "ক্যাসপেরিয়ান স্ট্রিপ ও সুবেরিন বলয় বাধা",
      titleEn: "Casparian Strip Endodermal Checkpoint",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "মূলের অন্তঃত্বকে সুবেরিনের পানি নিয়ন্ত্রণ বাধা",
      labels: [
        { bn: "ক্যাসপেরিয়ান স্ট্রিপ ও সুবেরিন বলয় বাধা", en: "Casparian Strip Endodermal Checkpoint", sym: "M4", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 5,
      chapter: 6,
      topicRef: "৬.৩",
      titleBn: "জাইলেম ভেসেল ও অবিচ্ছিন্ন পানি স্তম্ভ",
      titleEn: "Xylem Vessel Column & Water Chain",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "পানির সংসক্তি-আসঞ্জন বলে অটুট জলের ধারা",
      labels: [
        { bn: "জাইলেম ভেসেল ও অবিচ্ছিন্ন পানি স্তম্ভ", en: "Xylem Vessel Column & Water Chain", sym: "M5", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 6,
      chapter: 6,
      topicRef: "৬.৪",
      titleBn: "প্রস্বেদন টান (Transpiration Pull) ও বাষ্পমোচন",
      titleEn: "Transpiration Pull Negative Tension",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "পাতার মেসোফিল থেকে উর্ধ্বমুখী চোষণ বল",
      labels: [
        { bn: "প্রস্বেদন টান (Transpiration Pull) ও বাষ্পমোচন", en: "Transpiration Pull Negative Tension", sym: "M6", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 7,
      chapter: 6,
      topicRef: "৬.৪",
      titleBn: "পত্ররন্ধ্রের রক্ষীকোষের স্ফীতি ও রন্ধ্র উন্মুক্ত",
      titleEn: "Stomatal Guard Cell Turgor Mechanics",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "K+ আয়ন পাম্প সক্রিয়তায় রক্ষীকোষের স্ফীতি",
      labels: [
        { bn: "পত্ররন্ধ্রের রক্ষীকোষের স্ফীতি ও রন্ধ্র উন্মুক্ত", en: "Stomatal Guard Cell Turgor Mechanics", sym: "M7", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 8,
      chapter: 6,
      topicRef: "৬.৪",
      titleBn: "কিউটিকুলার ও লেন্টিকুলার প্রস্বেদন ছিদ্র",
      titleEn: "Cuticular & Lenticular Transpiration",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "মোমের কিউটিকল ও বাকলের লেন্টিসেল বাষ্প",
      labels: [
        { bn: "কিউটিকুলার ও লেন্টিকুলার প্রস্বেদন ছিদ্র", en: "Cuticular & Lenticular Transpiration", sym: "M8", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 9,
      chapter: 6,
      topicRef: "৬.৫",
      titleBn: "ফ্লোয়েমে খাদ্য পরিবহন ও প্রেসার-ফ্লো হাইপোথিসিস",
      titleEn: "Phloem Translocation Source-Sink Model",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "উৎস পাতা থেকে সুক্রোজ দ্রবণ পরিবহন",
      labels: [
        { bn: "ফ্লোয়েমে খাদ্য পরিবহন ও প্রেসার-ফ্লো হাইপোথিসিস", en: "Phloem Translocation Source-Sink Model", sym: "M9", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 10,
      chapter: 6,
      topicRef: "৬.৬",
      titleBn: "মানব রক্তের উপাদান — প্লাজমা ও রক্তকণিকা অনুপাত",
      titleEn: "Blood Plasma 55% & Formed Elements 45%",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "হলুদ রক্তরস ও লোহিত-শ্বেত-অনুচক্রিকা তলানি",
      labels: [
        { bn: "মানব রক্তের উপাদান", en: "Blood Plasma 55% & Formed Elements 45%", sym: "M10", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 11,
      chapter: 6,
      topicRef: "৬.৬",
      titleBn: "দ্বি-অবতল লোহিত কণিকা (RBC) ও হিমোগ্লোবিন",
      titleEn: "Biconcave Erythrocyte (RBC) & Hemoglobin",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "অক্সিজেনবাহী নিউক্লিয়াসহীন লাল রক্তকণিকা",
      labels: [
        { bn: "দ্বি-অবতল লোহিত কণিকা (RBC) ও হিমোগ্লোবিন", en: "Biconcave Erythrocyte (RBC) & Hemoglobin", sym: "M11", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 12,
      chapter: 6,
      topicRef: "৬.৬",
      titleBn: "শ্বেত রক্তকণিকা (WBC) — ফ্যাগোসাইটোসিস সৈনিক",
      titleEn: "Leukocyte WBC Squad (Neutrophil, Lymphocyte)",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "দেহের প্রতিরক্ষা প্রহরী ও জীবাণু ধ্বংসকারী",
      labels: [
        { bn: "শ্বেত রক্তকণিকা (WBC)", en: "Leukocyte WBC Squad (Neutrophil, Lymphocyte)", sym: "M12", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 13,
      chapter: 6,
      topicRef: "৬.৬",
      titleBn: "অনুচক্রিকা (Platelet) ও রক্ত তঞ্চন ফাইব্রিন জাল",
      titleEn: "Platelet Activation & Fibrin Clot Net",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "ক্ষতস্থানে রক্ত জমাট বাঁধার ধারাবাহিক ধাপ",
      labels: [
        { bn: "অনুচক্রিকা (Platelet) ও রক্ত তঞ্চন ফাইব্রিন জাল", en: "Platelet Activation & Fibrin Clot Net", sym: "M13", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 14,
      chapter: 6,
      topicRef: "৬.৭",
      titleBn: "এবিও (ABO) রক্তের গ্রুপ ও অ্যান্টিজেন-অ্যান্টিবডি",
      titleEn: "ABO Blood Group Antigen System",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "A, B অ্যান্টিজেন ও রক্ত সঞ্চালন সামঞ্জস্য",
      labels: [
        { bn: "এবিও (ABO) রক্তের গ্রুপ ও অ্যান্টিজেন-অ্যান্টিবডি", en: "ABO Blood Group Antigen System", sym: "M14", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 15,
      chapter: 6,
      topicRef: "৬.৭",
      titleBn: "আরএইচ (Rh) ফ্যাক্টর ও গর্ভকালীন রক্ত সংকট",
      titleEn: "Rh Factor & Erythroblastosis Fetalis",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "Rh+ ও Rh- সংঘাত এবং দ্বিতীয় সন্তানের ঝুঁকি",
      labels: [
        { bn: "আরএইচ (Rh) ফ্যাক্টর ও গর্ভকালীন রক্ত সংকট", en: "Rh Factor & Erythroblastosis Fetalis", sym: "M15", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 16,
      chapter: 6,
      topicRef: "৬.৮",
      titleBn: "মানব হৃদপিণ্ডের ৪টি প্রকোষ্ঠ ও প্রাচীর",
      titleEn: "Human Heart 4 Chambers & Myocardium",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "অলিন্দ-নিলয়ের দ্বিস্তরী পেরিকার্ডিয়াল গঠন",
      labels: [
        { bn: "মানব হৃদপিণ্ডের ৪টি প্রকোষ্ঠ ও প্রাচীর", en: "Human Heart 4 Chambers & Myocardium", sym: "M16", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 17,
      chapter: 6,
      topicRef: "৬.৮",
      titleBn: "হৃদপিণ্ডের কপাটিকা — ট্রাইকাস্পিড ও বাইকাস্পিড",
      titleEn: "Heart Valves & Chordae Tendineae",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "একমুখী রক্তপ্রবাহ নিয়ন্ত্রণকারী ভালভসমূহ",
      labels: [
        { bn: "হৃদপিণ্ডের কপাটিকা", en: "Heart Valves & Chordae Tendineae", sym: "M17", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 18,
      chapter: 6,
      topicRef: "৬.৮",
      titleBn: "কার্ডিয়াক চক্র — সিস্টোল ও ডায়াস্টোল স্পন্দন",
      titleEn: "Cardiac Cycle Systole & Diastole",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "০.৮ সেকেন্ডে অলিন্দ ও নিলয়ের রক্ত পাম্প",
      labels: [
        { bn: "কার্ডিয়াক চক্র", en: "Cardiac Cycle Systole & Diastole", sym: "M18", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 19,
      chapter: 6,
      topicRef: "৬.৯",
      titleBn: "ধমনী, শিরা ও রক্ত কৈশিক জালিকার প্রস্থচ্ছেদ",
      titleEn: "Artery, Vein & Capillary Network Layers",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "পুরু ধমনী, ভালভযুক্ত শিরা ও কৌশিক জালিকা",
      labels: [
        { bn: "ধমনী, শিরা ও রক্ত কৈশিক জালিকার প্রস্থচ্ছেদ", en: "Artery, Vein & Capillary Network Layers", sym: "M19", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 20,
      chapter: 6,
      topicRef: "৬.১০",
      titleBn: "করোনারি ধমনী ব্লক, এনজিওপ্লাস্টি ও স্টেন্ট",
      titleEn: "Coronary Plaque, Angioplasty & Stent",
      categoryBn: "জীবে পরিবহন",
      descriptionBn: "ব্লকে হার্ট অ্যাটাক ও রিং পরিয়ে রক্ত সঞ্চালন",
      labels: [
        { bn: "করোনারি ধমনী ব্লক, এনজিওপ্লাস্টি ও স্টেন্ট", en: "Coronary Plaque, Angioplasty & Stent", sym: "M20", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    }
  ],
  7: [
    {
      id: 1,
      chapter: 7,
      topicRef: "৭.১",
      titleBn: "পত্ররন্ধ্র দিয়ে উদ্ভিদের দিনে ও রাতে গ্যাস বিনিময়",
      titleEn: "Stomatal Day/Night O2 & CO2 Exchange",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "সালোকসংশ্লেষণ ও শ্বসনে গ্যাসের অনুপাত",
      labels: [
        { bn: "পত্ররন্ধ্র দিয়ে উদ্ভিদের দিনে ও রাতে গ্যাস বিনিময়", en: "Stomatal Day/Night O2 & CO2 Exchange", sym: "M1", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 2,
      chapter: 7,
      topicRef: "৭.১",
      titleBn: "কাণ্ডের লেন্টিসেল দিয়ে গ্যাসীয় বিনিময় পথ",
      titleEn: "Lenticel Aerating Pores on Tree Trunk",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "চিরসবুজ বৃক্ষের গৌণ বৃদ্ধির ছিদ্র দিয়ে গ্যাস প্রবেশ",
      labels: [
        { bn: "কাণ্ডের লেন্টিসেল দিয়ে গ্যাসীয় বিনিময় পথ", en: "Lenticel Aerating Pores on Tree Trunk", sym: "M2", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 3,
      chapter: 7,
      topicRef: "৭.২",
      titleBn: "মানব শ্বসনতন্ত্রের সামগ্রিক ৩ডি রূপরেখা",
      titleEn: "Complete Human Respiratory Tract",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "নাসারন্ধ্র থেকে ফুসফুসের অ্যালভিওলাই পর্যন্ত",
      labels: [
        { bn: "মানব শ্বসনতন্ত্রের সামগ্রিক ৩ডি রূপরেখা", en: "Complete Human Respiratory Tract", sym: "M3", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 4,
      chapter: 7,
      topicRef: "৭.২",
      titleBn: "নাসাগহ্বর ও সিলিয়াযুক্ত মিউকোসা পর্দা",
      titleEn: "Nasal Cavity Ciliated Mucosa Barrier",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "বাতাস উষ্ণ, আর্দ্র ও ধূলিমুক্ত করার প্রক্রিয়া",
      labels: [
        { bn: "নাসাগহ্বর ও সিলিয়াযুক্ত মিউকোসা পর্দা", en: "Nasal Cavity Ciliated Mucosa Barrier", sym: "M4", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 5,
      chapter: 7,
      topicRef: "৭.২",
      titleBn: "স্বরযন্ত্র (Larynx), ভোকাল কর্ড ও এপিগ্লোটিস",
      titleEn: "Larynx, Vocal Cords & Epiglottis Gate",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "শব্দ সৃষ্টি ও খাদ্যনালির পথ নিয়ন্ত্রণ ঢাকনা",
      labels: [
        { bn: "স্বরযন্ত্র (Larynx), ভোকাল কর্ড ও এপিগ্লোটিস", en: "Larynx, Vocal Cords & Epiglottis Gate", sym: "M5", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 6,
      chapter: 7,
      topicRef: "৭.২",
      titleBn: "ট্রাকিয়ার সি-আকৃতির তরুণাস্থি রিং ও নালী",
      titleEn: "Trachea C-Shaped Cartilage Rings",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "বায়ুনালীকে চুপসে যাওয়া থেকে রক্ষা করা",
      labels: [
        { bn: "ট্রাকিয়ার সি-আকৃতির তরুণাস্থি রিং ও নালী", en: "Trachea C-Shaped Cartilage Rings", sym: "M6", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 7,
      chapter: 7,
      topicRef: "৭.২",
      titleBn: "ব্রঙ্কিয়াল ট্রি — প্রাইমারি ব্রঙ্কাস ও ব্রঙ্কিওল",
      titleEn: "Bronchial Branching Tree System",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "ফুসফুসে বাতাসের শাখাপ্রশাখা বিস্তার",
      labels: [
        { bn: "ব্রঙ্কিয়াল ট্রি", en: "Bronchial Branching Tree System", sym: "M7", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 8,
      chapter: 7,
      topicRef: "৭.৩",
      titleBn: "মানব ফুসফুস ও দ্বিস্তরী প্লুরা ঝিল্লি গহ্বর",
      titleEn: "Human Lungs & Pleural Cavity Fluid",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "ডান ফুসফুসের ৩ খণ্ড ও বাম ফুসফুসের ২ খণ্ড",
      labels: [
        { bn: "মানব ফুসফুস ও দ্বিস্তরী প্লুরা ঝিল্লি গহ্বর", en: "Human Lungs & Pleural Cavity Fluid", sym: "M8", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 9,
      chapter: 7,
      topicRef: "৭.৩",
      titleBn: "ডায়াফ্রাম পেশি ও বক্ষপিঞ্জরের উঠানামা চলন",
      titleEn: "Diaphragm & Intercostal Muscle Action",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "প্রশ্বাস ও নিঃশ্বাসে বক্ষগহ্বরের আয়তন পরিবর্তন",
      labels: [
        { bn: "ডায়াফ্রাম পেশি ও বক্ষপিঞ্জরের উঠানামা চলন", en: "Diaphragm & Intercostal Muscle Action", sym: "M9", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 10,
      chapter: 7,
      topicRef: "৭.৩",
      titleBn: "প্রশ্বাস-নিঃশ্বাস প্রক্রিয়ার বায়ুর চাপ মেকানিক্স",
      titleEn: "Inspiration & Expiration Mechanics",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "নেগেটিভ ও পজিটিভ চাপে ফুসফুসে বাতাস চলাচল",
      labels: [
        { bn: "প্রশ্বাস-নিঃশ্বাস প্রক্রিয়ার বায়ুর চাপ মেকানিক্স", en: "Inspiration & Expiration Mechanics", sym: "M10", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 11,
      chapter: 7,
      topicRef: "৭.৪",
      titleBn: "অ্যালভিওলাই গুচ্ছ ও সারফ্যাক্ট্যান্ট ঝিল্লি",
      titleEn: "Alveolar Sac Cluster & Surfactant",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "ফুসফুসের কোটি কোটি ক্ষুদ্রাতিক্ষুদ্র বায়ুথলি",
      labels: [
        { bn: "অ্যালভিওলাই গুচ্ছ ও সারফ্যাক্ট্যান্ট ঝিল্লি", en: "Alveolar Sac Cluster & Surfactant", sym: "M11", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 12,
      chapter: 7,
      topicRef: "৭.৪",
      titleBn: "অ্যালভিওলার রক্ত কৈশিক জালিকা ও রক্তপ্রবাহ",
      titleEn: "Pulmonary Alveolar Capillary Bed",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "লোহিত রক্তকণিকার সাথে বাতাসের ঘনিষ্ঠ সংযোগ",
      labels: [
        { bn: "অ্যালভিওলার রক্ত কৈশিক জালিকা ও রক্তপ্রবাহ", en: "Pulmonary Alveolar Capillary Bed", sym: "M12", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 13,
      chapter: 7,
      topicRef: "৭.৪",
      titleBn: "O2 ও CO2 গ্যাসীয় ব্যাপন ঝিল্লি ইন্টারফেস",
      titleEn: "Gas Diffusion Respiratory Interface",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "ঘনত্বের পার্থক্যে গ্যাসের স্বতঃস্ফূর্ত ব্যাপন",
      labels: [
        { bn: "O2 ও CO2 গ্যাসীয় ব্যাপন ঝিল্লি ইন্টারফেস", en: "Gas Diffusion Respiratory Interface", sym: "M13", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 14,
      chapter: 7,
      topicRef: "৭.৫",
      titleBn: "অক্সিহিমোগ্লোবিন যৌগ গঠন ও O2 পরিবহন",
      titleEn: "Oxyhemoglobin Complex O2 Transport",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "Hb + 4O2 <-> Hb(O2)4 রক্তে অক্সিজেন বহন",
      labels: [
        { bn: "অক্সিহিমোগ্লোবিন যৌগ গঠন ও O2 পরিবহন", en: "Oxyhemoglobin Complex O2 Transport", sym: "M14", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 15,
      chapter: 7,
      topicRef: "৭.৫",
      titleBn: "রক্তে CO2 পরিবহন — বাইকার্বনেট ও কার্বামিনো",
      titleEn: "Carbon Dioxide Bicarbonate Ion (HCO3-)",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "প্লাজমায় বাইকার্বনেট হিসেবে ৮৫% CO2 পরিবহন",
      labels: [
        { bn: "রক্তে CO2 পরিবহন", en: "Carbon Dioxide Bicarbonate Ion (HCO3-)", sym: "M15", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 16,
      chapter: 7,
      topicRef: "৭.৫",
      titleBn: "ক্লোরাইড শিফট বা হ্যামবার্গার মেকানিজম",
      titleEn: "Chloride Shift (Hamburger Phenomenon)",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "লোহিত কণিকা ও প্লাজমার মাঝে ক্লোরাইডের সমতা",
      labels: [
        { bn: "ক্লোরাইড শিফট বা হ্যামবার্গার মেকানিজম", en: "Chloride Shift (Hamburger Phenomenon)", sym: "M16", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 17,
      chapter: 7,
      topicRef: "৭.৬",
      titleBn: "ব্রঙ্কাইটিস — ব্রঙ্কাসের শ্লেষ্মা প্রদাহ ও কফ",
      titleEn: "Bronchitis Mucosal Inflammation & Phlegm",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "ধোঁয়া ও ব্যাক্টেরিয়ায় বায়ুনালীর প্রদাহ ও কাশি",
      labels: [
        { bn: "ব্রঙ্কাইটিস", en: "Bronchitis Mucosal Inflammation & Phlegm", sym: "M17", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 18,
      chapter: 7,
      topicRef: "৭.৬",
      titleBn: "নিউমোনিয়া — অ্যালভিওলাইতে কফ ও পুঁজ জমা",
      titleEn: "Pneumonia Alveolar Fluid Consolidation",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "নিউমোকক্কাস সংক্রমণে শ্বাসকষ্ট ও জ্বর",
      labels: [
        { bn: "নিউমোনিয়া", en: "Pneumonia Alveolar Fluid Consolidation", sym: "M18", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 19,
      chapter: 7,
      topicRef: "৭.৬",
      titleBn: "ফুসফুসের যক্ষ্মা ও টিউবারকল গহ্বর ক্ষত",
      titleEn: "Pulmonary Tuberculosis Tubercle Cavity",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "মাইকোব্যাক্টেরিয়াম সংক্রমণে রক্তবমি ও ওজন হ্রাস",
      labels: [
        { bn: "ফুসফুসের যক্ষ্মা ও টিউবারকল গহ্বর ক্ষত", en: "Pulmonary Tuberculosis Tubercle Cavity", sym: "M19", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 20,
      chapter: 7,
      topicRef: "৭.৬",
      titleBn: "ফুসফুসের ক্যান্সার ও টার জমা অ্যালভিওলাই",
      titleEn: "Lung Carcinoma & Cigarette Tar Tumor",
      categoryBn: "গ্যাসীয় বিনিময়",
      descriptionBn: "ধূমপানে ফুসফুসের বায়ুকোষ ধ্বংস ও ক্যান্সার",
      labels: [
        { bn: "ফুসফুসের ক্যান্সার ও টার জমা অ্যালভিওলাই", en: "Lung Carcinoma & Cigarette Tar Tumor", sym: "M20", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    }
  ],
  8: [
    {
      id: 1,
      chapter: 8,
      topicRef: "৮.১",
      titleBn: "রেচনের ধারণা ও নাইট্রোজেনঘটিত বর্জ্য (ইউরিয়া)",
      titleEn: "Excretion Concept & Urea Chemistry",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "প্রোটিন বিপাকে সৃষ্ট ইউরিয়া, ইউরিক এসিড ও ক্রিয়েটিনিন",
      labels: [
        { bn: "রেচনের ধারণা ও নাইট্রোজেনঘটিত বর্জ্য (ইউরিয়া)", en: "Excretion Concept & Urea Chemistry", sym: "M1", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 2,
      chapter: 8,
      topicRef: "৮.২",
      titleBn: "মানব রেচনতন্ত্রের সামগ্রিক ৩ডি রূপরেখা",
      titleEn: "Human Excretory Urinary System 3D",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "বৃক্ক জোড়, ইউরেটার নালী, মূত্রথলি ও মূত্রনালী",
      labels: [
        { bn: "মানব রেচনতন্ত্রের সামগ্রিক ৩ডি রূপরেখা", en: "Human Excretory Urinary System 3D", sym: "M2", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 3,
      chapter: 8,
      topicRef: "৮.৩",
      titleBn: "বৃক্কের অনুদৈর্ঘ্য ছেদ — কর্টেক্স, মেডুলা ও পেলভিস",
      titleEn: "Kidney Longitudinal Anatomy Sections",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "বাইরের কর্টেক্স, পিরামিডযুক্ত মেডুলা ও ফানেল পেলভিস",
      labels: [
        { bn: "বৃক্কের অনুদৈর্ঘ্য ছেদ", en: "Kidney Longitudinal Anatomy Sections", sym: "M3", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 4,
      chapter: 8,
      topicRef: "৮.৩",
      titleBn: "রেনাল রক্ত সঞ্চালন — রেনাল আর্টারি ও ভেইন",
      titleEn: "Renal Artery & Renal Vein Blood Flow",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "প্রতি মিনিটে রক্তের ২০-২৫% বৃক্কে পরিশোধিত হওয়া",
      labels: [
        { bn: "রেনাল রক্ত সঞ্চালন", en: "Renal Artery & Renal Vein Blood Flow", sym: "M4", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 5,
      chapter: 8,
      topicRef: "৮.৪",
      titleBn: "সম্পূর্ণ নেফ্রনের ৩ডি গঠন — কার্যকারী একক",
      titleEn: "Complete Nephron Architecture 3D",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "প্রতি বৃক্কে ১০-১২ লাখ নেফ্রনের পরিশোধক একক",
      labels: [
        { bn: "সম্পূর্ণ নেফ্রনের ৩ডি গঠন", en: "Complete Nephron Architecture 3D", sym: "M5", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 6,
      chapter: 8,
      topicRef: "৮.৪",
      titleBn: "বোম্যান্স ক্যাপসুল ও দ্বিস্তরী পডোসাইট কোষ",
      titleEn: "Bowman Capsule & Podocyte Filtration Slits",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "পেয়ালার মতো খাঁজ ও ছাঁকন ছিদ্রযুক্ত পডোসাইট",
      labels: [
        { bn: "বোম্যান্স ক্যাপসুল ও দ্বিস্তরী পডোসাইট কোষ", en: "Bowman Capsule & Podocyte Filtration Slits", sym: "M6", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 7,
      chapter: 8,
      topicRef: "৮.৪",
      titleBn: "গ্লোমেরুলাস কৈশিক জালক ও রেনাল আর্টারিওল",
      titleEn: "Glomerulus Capillary Tuft & Arterioles",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "উচ্চ রক্তচাপীয় ছাঁকন কৌশিক জালক কুন্ডলী",
      labels: [
        { bn: "গ্লোমেরুলাস কৈশিক জালক ও রেনাল আর্টারিওল", en: "Glomerulus Capillary Tuft & Arterioles", sym: "M7", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 8,
      chapter: 8,
      topicRef: "৮.৫",
      titleBn: "আল্ট্রাফিল্ট্রেশন ও গ্লোমেরুলার ফিল্ট্রেট সৃষ্টি",
      titleEn: "Ultrafiltration Pressure Mechanism",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "রক্ত থেকে পানি ও বর্জ্য পদার্থ বোম্যান্স ক্যাপসুলে ছাঁকন",
      labels: [
        { bn: "আল্ট্রাফিল্ট্রেশন ও গ্লোমেরুলার ফিল্ট্রেট সৃষ্টি", en: "Ultrafiltration Pressure Mechanism", sym: "M8", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 9,
      chapter: 8,
      topicRef: "৮.৫",
      titleBn: "প্রক্সিমাল পেঁচানো নালিকা ও খাদ্য পুনর্শোষণ",
      titleEn: "Proximal Convoluted Tubule Reabsorption",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "গ্লুকোজ, অ্যামাইনো এসিড ও ৮০% পানি পুনঃশোষণ",
      labels: [
        { bn: "প্রক্সিমাল পেঁচানো নালিকা ও খাদ্য পুনর্শোষণ", en: "Proximal Convoluted Tubule Reabsorption", sym: "M9", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 10,
      chapter: 8,
      topicRef: "৮.৫",
      titleBn: "হেনলির লুপ — ইউ-আকৃতির কাউন্টার-কারেন্ট",
      titleEn: "Loop of Henle Countercurrent Multiplier",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "মেডুলার লবণাক্ততা বৃদ্ধি ও মূত্রের ঘনত্ব নিয়ন্ত্রণ",
      labels: [
        { bn: "হেনলির লুপ", en: "Loop of Henle Countercurrent Multiplier", sym: "M10", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 11,
      chapter: 8,
      topicRef: "৮.৫",
      titleBn: "ডিস্টাল পেঁচানো নালিকা ও নালিকা ক্ষরণ",
      titleEn: "Distal Convoluted Tubule & K+/H+ Secretion",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "সোডিয়াম আয়ন ও পানি পুনঃশোষণ এবং অম্লতা নিয়ন্ত্রণ",
      labels: [
        { bn: "ডিস্টাল পেঁচানো নালিকা ও নালিকা ক্ষরণ", en: "Distal Convoluted Tubule & K+/H+ Secretion", sym: "M11", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 12,
      chapter: 8,
      topicRef: "৮.৫",
      titleBn: "সংগ্রাহী নালিকা ও মূত্র সঞ্চালন পথ",
      titleEn: "Collecting Duct & ADH Hormone Gate",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "মূত্র তৈরি সম্পন্ন করে রেনাল পেলভিসে প্রেরণ",
      labels: [
        { bn: "সংগ্রাহী নালিকা ও মূত্র সঞ্চালন পথ", en: "Collecting Duct & ADH Hormone Gate", sym: "M12", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 13,
      chapter: 8,
      topicRef: "৮.৫",
      titleBn: "সুস্থ মূত্রের উপাদান — ইউরিয়া, লবণ ও ইউরোক্রোম",
      titleEn: "Composition of Healthy Urine & Urochrome",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "স্বাভাবিক মূত্রের হালকা হলুদ রঙ ও উপাদান",
      labels: [
        { bn: "সুস্থ মূত্রের উপাদান", en: "Composition of Healthy Urine & Urochrome", sym: "M13", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 14,
      chapter: 8,
      topicRef: "৮.২",
      titleBn: "ইউরেটার নালী ও পেরিস্টালসিস তরঙ্গীয় গতি",
      titleEn: "Ureter Muscular Peristaltic Pump",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "তরঙ্গায়িত সংকোচনে মূত্রকে থলিতে নিয়ে যাওয়া",
      labels: [
        { bn: "ইউরেটার নালী ও পেরিস্টালসিস তরঙ্গীয় গতি", en: "Ureter Muscular Peristaltic Pump", sym: "M14", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 15,
      chapter: 8,
      topicRef: "৮.২",
      titleBn: "মূত্রথলি — ডেটরুসর পেশিবহুল স্থিতিস্থাপক থলি",
      titleEn: "Urinary Bladder Detrusor Muscular Bag",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "৩০০-৫০০ মিলি মূত্র ধারণক্ষম সম্পন্ন পেশি প্রাচীর",
      labels: [
        { bn: "মূত্রথলি", en: "Urinary Bladder Detrusor Muscular Bag", sym: "M15", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 16,
      chapter: 8,
      topicRef: "৮.২",
      titleBn: "ইউরেথ্রা বা মূত্রনালী ও স্ফিঙ্কটার কপাটিকা",
      titleEn: "Urethra & Internal/External Sphincters",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "ঐচ্ছিক ও অনৈচ্ছিক পেশির কপাটিকায় মূত্রত্যাগ নিয়ন্ত্রণ",
      labels: [
        { bn: "ইউরেথ্রা বা মূত্রনালী ও স্ফিঙ্কটার কপাটিকা", en: "Urethra & Internal/External Sphincters", sym: "M16", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 17,
      chapter: 8,
      topicRef: "৮.৬",
      titleBn: "বৃক্কে পাথর সৃষ্টি — ক্যালসিয়াম অক্সালেট কেলাস",
      titleEn: "Kidney Stones Calcium Oxalate Crystals",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "ইউরিক এসিড ও ক্যালসিয়াম জমে শক্ত পাথুরে খণ্ড",
      labels: [
        { bn: "বৃক্কে পাথর সৃষ্টি", en: "Kidney Stones Calcium Oxalate Crystals", sym: "M17", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 18,
      chapter: 8,
      topicRef: "৮.৭",
      titleBn: "বৃক্ক বিকল ও রক্তে ইউরেমিয়া বিষক্রিয়া",
      titleEn: "Acute Renal Failure & Uremic Toxicity",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "জিএফআর হ্রাস পেয়ে রক্তে ক্রিয়েটিনিন ও ইউরিয়া বৃদ্ধি",
      labels: [
        { bn: "বৃক্ক বিকল ও রক্তে ইউরেমিয়া বিষক্রিয়া", en: "Acute Renal Failure & Uremic Toxicity", sym: "M18", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 19,
      chapter: 8,
      topicRef: "৮.৭",
      titleBn: "হিমোডায়ালাইসিস — কৃত্রিম বৃক্ক ডায়ালাইজার",
      titleEn: "Hemodialysis Machine Artificial Dialyzer",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "সেলোফেন নালী ও ডায়ালাইসেট দ্রবণে রক্ত ছাঁকন",
      labels: [
        { bn: "হিমোডায়ালাইসিস", en: "Hemodialysis Machine Artificial Dialyzer", sym: "M19", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 20,
      chapter: 8,
      topicRef: "৮.৭",
      titleBn: "কিডনি প্রতিস্থাপন বা রেনাল ট্রান্সপ্লান্টেশন",
      titleEn: "Renal Allograft Kidney Transplantation",
      categoryBn: "রেচন প্রক্রিয়া",
      descriptionBn: "নিকটাত্মীয়ের সুস্থ বৃক্ক অস্ত্রোপচারে সংস্থাপন",
      labels: [
        { bn: "কিডনি প্রতিস্থাপন বা রেনাল ট্রান্সপ্লান্টেশন", en: "Renal Allograft Kidney Transplantation", sym: "M20", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    }
  ],
  9: [
    {
      id: 1,
      chapter: 9,
      topicRef: "৯.১",
      titleBn: "মানব কঙ্কালতন্ত্র — অক্ষীয় ও উপাঙ্গীয় বিভাজন",
      titleEn: "Human Skeleton: Axial & Appendicular 206",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "২০৬টি অস্থির সমন্বিত কঙ্কাল কাঠামো",
      labels: [
        { bn: "মানব কঙ্কালতন্ত্র", en: "Human Skeleton: Axial & Appendicular 206", sym: "M1", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 2,
      chapter: 9,
      topicRef: "৯.১",
      titleBn: "করোটি ও মুখমণ্ডলের সুসংবদ্ধ অস্থিসমূহ",
      titleEn: "Human Skull Cranium & Facial Bones",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "মস্তিষ্ক সুরক্ষাকারী করোটিকা ও চোয়ালের অস্থি",
      labels: [
        { bn: "করোটি ও মুখমণ্ডলের সুসংবদ্ধ অস্থিসমূহ", en: "Human Skull Cranium & Facial Bones", sym: "M2", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 3,
      chapter: 9,
      topicRef: "৯.১",
      titleBn: "মেরুদণ্ড — ৩৩টি কশেরুকা ও কার্টিলেজ ডিস্ক",
      titleEn: "Vertebral Column 33 Vertebrae & Discs",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "গ্রীবা, বক্ষ, কটি ও পুচ্ছ কশেরুকার এস-বক্রতা",
      labels: [
        { bn: "মেরুদণ্ড", en: "Vertebral Column 33 Vertebrae & Discs", sym: "M3", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 4,
      chapter: 9,
      topicRef: "৯.১",
      titleBn: "বক্ষপিঞ্জর — স্টার্নাম ও ১২ জোড়া পশুকা খাঁচা",
      titleEn: "Thoracic Rib Cage & Sternum Shield",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "হৃদপিণ্ড ও ফুসফুসকে সুরক্ষিত রাখা খাঁচা",
      labels: [
        { bn: "বক্ষপিঞ্জর", en: "Thoracic Rib Cage & Sternum Shield", sym: "M4", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 5,
      chapter: 9,
      topicRef: "৯.২",
      titleBn: "দীর্ঘ অস্থির প্রস্থচ্ছেদ — কম্প্যাক্ট ও স্পঞ্জি বোন",
      titleEn: "Long Bone Anatomy: Compact & Spongy Bone",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "পেরিঅস্টিয়াম, কর্টেক্স ও লোহিত অস্থিমজ্জা",
      labels: [
        { bn: "দীর্ঘ অস্থির প্রস্থচ্ছেদ", en: "Long Bone Anatomy: Compact & Spongy Bone", sym: "M5", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 6,
      chapter: 9,
      topicRef: "৯.২",
      titleBn: "হ্যাভারসিয়ান তন্ত্র ও অস্টিওসাইট অস্থিকোষ",
      titleEn: "Haversian Canal System & Osteocytes",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "কেন্দ্রীক নালী, ল্যামেলি ও ক্যানালিকুলি জালিকা",
      labels: [
        { bn: "হ্যাভারসিয়ান তন্ত্র ও অস্টিওসাইট অস্থিকোষ", en: "Haversian Canal System & Osteocytes", sym: "M6", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 7,
      chapter: 9,
      topicRef: "৯.২",
      titleBn: "তরুণাস্থি ম্যাট্রিক্স ও কনড্রোসাইট কোষ",
      titleEn: "Hyaline Cartilage Matrix & Chondrocytes",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "স্থিতিস্থাপক কনড্রিন ধাত্র ও ল্যাকুনা গহ্বর",
      labels: [
        { bn: "তরুণাস্থি ম্যাট্রিক্স ও কনড্রোসাইট কোষ", en: "Hyaline Cartilage Matrix & Chondrocytes", sym: "M7", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 8,
      chapter: 9,
      topicRef: "৯.৩",
      titleBn: "নিশ্চল সাইনুথ্রাল সন্ধি — করোটীয় সিউচার খাঁজ",
      titleEn: "Fixed Sutures of Cranial Joints",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "করোটিকা অস্থির খাঁজকাটা অনড় জোড়",
      labels: [
        { bn: "নিশ্চল সাইনুথ্রাল সন্ধি", en: "Fixed Sutures of Cranial Joints", sym: "M8", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 9,
      chapter: 9,
      topicRef: "৯.৩",
      titleBn: "সচল সাইনোভিয়াল অস্থিসন্ধির ক্যাপসুল গঠন",
      titleEn: "Synovial Joint Capsule & Fluid Cavity",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "ঘর্ষণ রোধকারী সাইনোভিয়াল রস ও আর্টিকুলার কার্টিলেজ",
      labels: [
        { bn: "সচল সাইনোভিয়াল অস্থিসন্ধির ক্যাপসুল গঠন", en: "Synovial Joint Capsule & Fluid Cavity", sym: "M9", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 10,
      chapter: 9,
      topicRef: "৯.৩",
      titleBn: "বল ও কোটর সন্ধি — কাঁধ ও নিতম্ব সন্ধি",
      titleEn: "Ball and Socket Joint: Shoulder & Hip",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "সবদিকে ৩৬০ ডিগ্রি ঘোরার ক্ষমতাসম্পন্ন সন্ধি",
      labels: [
        { bn: "বল ও কোটর সন্ধি", en: "Ball and Socket Joint: Shoulder & Hip", sym: "M10", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 11,
      chapter: 9,
      topicRef: "৯.৩",
      titleBn: "কব্জা সন্ধি — কনুই ও হাঁটুর একমুখী চলন",
      titleEn: "Hinge Joint: Elbow & Knee Door Hinge",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "দরজার কব্জার মতো একদিকে ১৮০ ডিগ্রি ভাঁজ হওয়া",
      labels: [
        { bn: "কব্জা সন্ধি", en: "Hinge Joint: Elbow & Knee Door Hinge", sym: "M11", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 12,
      chapter: 9,
      topicRef: "৯.৩",
      titleBn: "পিভট সন্ধি — অ্যাটলাস ও অ্যাক্সিস কশেরুকা",
      titleEn: "Pivot Joint: Atlas & Axis Skull Rotation",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "মাথা ডানে-বায়ে ঘোরানোর কেন্দ্র সন্ধি",
      labels: [
        { bn: "পিভট সন্ধি", en: "Pivot Joint: Atlas & Axis Skull Rotation", sym: "M12", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 13,
      chapter: 9,
      topicRef: "৯.৪",
      titleBn: "কঙ্কাল পেশির সারকোমিয়ার ও মায়োফাইব্রিল",
      titleEn: "Skeletal Muscle Sarcomere Structure",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "Z-লাইন, A-ব্যান্ড ও I-ব্যান্ড বিশিষ্ট সংকোচন একক",
      labels: [
        { bn: "কঙ্কাল পেশির সারকোমিয়ার ও মায়োফাইব্রিল", en: "Skeletal Muscle Sarcomere Structure", sym: "M13", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 14,
      chapter: 9,
      topicRef: "৯.৪",
      titleBn: "অ্যাক্টিন ও মায়োসিন প্রোটিনের স্লাইডিং ফিলামেন্ট",
      titleEn: "Actin & Myosin Sliding Filament Engine",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "মায়োসিন হেডের টানে অ্যাক্টিন তন্তুর পরস্পর পিচ্ছিল গতি",
      labels: [
        { bn: "অ্যাক্টিন ও মায়োসিন প্রোটিনের স্লাইডিং ফিলামেন্ট", en: "Actin & Myosin Sliding Filament Engine", sym: "M14", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 15,
      chapter: 9,
      topicRef: "৯.৪",
      titleBn: "বাইসেপস ও ট্রাইসেপসের বিপরীতমুখী পেশি টান",
      titleEn: "Antagonistic Muscle Action Biceps/Triceps",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "একটি সংকুচিত হলে অপরটির শিথিল হওয়ার ক্রিয়া",
      labels: [
        { bn: "বাইসেপস ও ট্রাইসেপসের বিপরীতমুখী পেশি টান", en: "Antagonistic Muscle Action Biceps/Triceps", sym: "M15", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 16,
      chapter: 9,
      topicRef: "৯.৫",
      titleBn: "টেন্ডন — পেশিকে অস্থির সাথে বাঁধনকারী শ্বেত তন্তু",
      titleEn: "Tendon Inelastic White Collagen Fibers",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "পেশির তীব্র টান অস্থিতে সঞ্চালনকারী রজ্জু",
      labels: [
        { bn: "টেন্ডন", en: "Tendon Inelastic White Collagen Fibers", sym: "M16", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 17,
      chapter: 9,
      topicRef: "৯.৫",
      titleBn: "লিগামেন্ট — অস্থিকে অস্থির সাথে যুক্তকারী পীত তন্তু",
      titleEn: "Ligament Elastic Yellow Elastin Bands",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "অস্থিসন্ধিকে সঠিক স্থানে ধরে রাখার স্থিতিস্থাপক ফিতা",
      labels: [
        { bn: "লিগামেন্ট", en: "Ligament Elastic Yellow Elastin Bands", sym: "M17", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 18,
      chapter: 9,
      topicRef: "৯.৬",
      titleBn: "অস্টিওপোরোসিস — অস্থির ক্যালসিয়াম ক্ষয় ও ছিদ্র",
      titleEn: "Osteoporotic Bone Porosity & Brittleness",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "ক্যালসিয়াম অভাবে অস্থি ভঙ্গুর ও ফাঁপা হয়ে যাওয়া",
      labels: [
        { bn: "অস্টিওপোরোসিস", en: "Osteoporotic Bone Porosity & Brittleness", sym: "M18", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 19,
      chapter: 9,
      topicRef: "৯.৬",
      titleBn: "রিউমাটয়েড আর্থ্রাইটিস সন্ধি প্রদাহ ও ফোলা",
      titleEn: "Rheumatoid Arthritis Joint Erosion",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "অস্থিসন্ধির সাইনোভিয়াল ঝিল্লির প্রদাহ ও তীব্র ব্যথা",
      labels: [
        { bn: "রিউমাটয়েড আর্থ্রাইটিস সন্ধি প্রদাহ ও ফোলা", en: "Rheumatoid Arthritis Joint Erosion", sym: "M19", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 20,
      chapter: 9,
      topicRef: "৯.৬",
      titleBn: "অস্থিভঙ্গ ও ক্যালাস নিরাময় প্রক্রিয়া",
      titleEn: "Bone Fracture & Callus Healing Remodeling",
      categoryBn: "দৃঢ়তা প্রদান ও চলন",
      descriptionBn: "ভাঙা হাড়ে নতুন অস্টিওব্লাস্ট দ্বারা জোড়া লাগা",
      labels: [
        { bn: "অস্থিভঙ্গ ও ক্যালাস নিরাময় প্রক্রিয়া", en: "Bone Fracture & Callus Healing Remodeling", sym: "M20", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    }
  ],
  10: [
    {
      id: 1,
      chapter: 10,
      topicRef: "১০.১",
      titleBn: "উদ্ভিদ হরমোন — অক্সিন ও শীর্ষ প্রকটতা বৃদ্ধি",
      titleEn: "Plant Hormone Auxin Apical Dominance",
      categoryBn: "সমন্বয়",
      descriptionBn: "অগ্রমুকুলের দ্রুত বৃদ্ধি ও পার্শ্বমুকুল দমন",
      labels: [
        { bn: "উদ্ভিদ হরমোন", en: "Plant Hormone Auxin Apical Dominance", sym: "M1", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 2,
      chapter: 10,
      topicRef: "১০.১",
      titleBn: "ফটোট্রপিজম — উদ্ভিদের আলোকমুখী কাণ্ডের বাঁক",
      titleEn: "Phototropism Stem Curvature to Sunlight",
      categoryBn: "সমন্বয়",
      descriptionBn: "অক্সিন ছায়াযুক্ত অংশে জমে কাণ্ড আলোর দিকে বাঁকা হওয়া",
      labels: [
        { bn: "ফটোট্রপিজম", en: "Phototropism Stem Curvature to Sunlight", sym: "M2", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 3,
      chapter: 10,
      topicRef: "১০.১",
      titleBn: "জিবেরেলিন ও সাইটোকাইনিনের পর্বমধ্য বৃদ্ধি",
      titleEn: "Gibberellin & Cytokinin Cell Growth",
      categoryBn: "সমন্বয়",
      descriptionBn: "খর্বাকার উদ্ভিদ লম্বা হওয়া ও দ্রুত কোষ বিভাজন",
      labels: [
        { bn: "জিবেরেলিন ও সাইটোকাইনিনের পর্বমধ্য বৃদ্ধি", en: "Gibberellin & Cytokinin Cell Growth", sym: "M3", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 4,
      chapter: 10,
      topicRef: "১০.২",
      titleBn: "লজ্জাবতী পাতার সিসমোন্যাস্টিক চলন ও পালভিনাস",
      titleEn: "Mimosa Pudica Seismonastic Leaf Folding",
      categoryBn: "সমন্বয়",
      descriptionBn: "স্পর্শে পালভিনাসের পানি সরে গিয়ে পাতা বন্ধ হওয়া",
      labels: [
        { bn: "লজ্জাবতী পাতার সিসমোন্যাস্টিক চলন ও পালভিনাস", en: "Mimosa Pudica Seismonastic Leaf Folding", sym: "M4", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 5,
      chapter: 10,
      topicRef: "১০.৩",
      titleBn: "মানব স্নায়ুতন্ত্রের কেন্দ্রীয় ও প্রান্তীয় রূপরেখা",
      titleEn: "Human Nervous System Comprehensive 3D",
      categoryBn: "সমন্বয়",
      descriptionBn: "মস্তিষ্ক, সুষুম্নাকাণ্ড ও ১২ জোড়া করোটিক স্নায়ু",
      labels: [
        { bn: "মানব স্নায়ুতন্ত্রের কেন্দ্রীয় ও প্রান্তীয় রূপরেখা", en: "Human Nervous System Comprehensive 3D", sym: "M5", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 6,
      chapter: 10,
      topicRef: "১০.৩",
      titleBn: "মানব মস্তিষ্ক — সেরিব্রাম, সেরিবেলাম ও ব্রেনস্টেম",
      titleEn: "Human Brain Anatomy: Cerebrum & Cerebellum",
      categoryBn: "সমন্বয়",
      descriptionBn: "দেহের সকল সংবেদন, বুদ্ধি ও সমন্বয়ের সদর দপ্তর",
      labels: [
        { bn: "মানব মস্তিষ্ক", en: "Human Brain Anatomy: Cerebrum & Cerebellum", sym: "M6", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 7,
      chapter: 10,
      topicRef: "১০.৩",
      titleBn: "গুরুমস্তিষ্কের কর্টেক্স — ফ্রন্টাল ও প্যারাইটাল লোব",
      titleEn: "Cerebral Cortex Lobes & Mental Faculties",
      categoryBn: "সমন্বয়",
      descriptionBn: "চিন্তা, স্মৃতিশক্তি, ইচ্ছাশক্তি ও ইন্দ্রিয় কেন্দ্র",
      labels: [
        { bn: "গুরুমস্তিষ্কের কর্টেক্স", en: "Cerebral Cortex Lobes & Mental Faculties", sym: "M7", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 8,
      chapter: 10,
      topicRef: "১০.৩",
      titleBn: "লঘুমস্তিষ্ক (Cerebellum) ও শারীরিক ভারসাম্য রক্ষা",
      titleEn: "Cerebellum & Motor Coordination Arbor Vitae",
      categoryBn: "সমন্বয়",
      descriptionBn: "পেশির টান নিয়ন্ত্রণ ও হাঁটার নিখুঁত ভারসাম্য",
      labels: [
        { bn: "লঘুমস্তিষ্ক (Cerebellum) ও শারীরিক ভারসাম্য রক্ষা", en: "Cerebellum & Motor Coordination Arbor Vitae", sym: "M8", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 9,
      chapter: 10,
      topicRef: "১০.৩",
      titleBn: "সুষুম্নাকাণ্ডের প্রস্থচ্ছেদ ও এইচ-আকৃতির ধূসর বস্তু",
      titleEn: "Spinal Cord Cross-Section H-Shaped Gray",
      categoryBn: "সমন্বয়",
      descriptionBn: "কেন্দ্রীয় সংকেত হাইওয়ে ও প্রতিবর্ত চাপের কেন্দ্র",
      labels: [
        { bn: "সুষুম্নাকাণ্ডের প্রস্থচ্ছেদ ও এইচ-আকৃতির ধূসর বস্তু", en: "Spinal Cord Cross-Section H-Shaped Gray", sym: "M9", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 10,
      chapter: 10,
      topicRef: "১০.৫",
      titleBn: "বহুমুখী মোটর নিউরনের সম্পূর্ণ ৩ডি গঠন",
      titleEn: "Multipolar Motor Neuron Architecture",
      categoryBn: "সমন্বয়",
      descriptionBn: "কোষদেহ, ডেনড্রাইট বৃক্ষ, অ্যাক্সন ও সাইন্যাপটিক নব",
      labels: [
        { bn: "বহুমুখী মোটর নিউরনের সম্পূর্ণ ৩ডি গঠন", en: "Multipolar Motor Neuron Architecture", sym: "M10", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 11,
      chapter: 10,
      topicRef: "১০.৫",
      titleBn: "মায়েলিন সিথ ও র্যানভিয়ারের পর্ব সংকেত লাফানো",
      titleEn: "Myelin Sheath & Nodes of Ranvier Jumps",
      categoryBn: "সমন্বয়",
      descriptionBn: "সল্টেটরি জাম্পিংয়ে স্নায়ু সংকেত ১২০ মি/সে বেগে যাওয়া",
      labels: [
        { bn: "মায়েলিন সিথ ও র্যানভিয়ারের পর্ব সংকেত লাফানো", en: "Myelin Sheath & Nodes of Ranvier Jumps", sym: "M11", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 12,
      chapter: 10,
      topicRef: "১০.৫",
      titleBn: "স্নায়ু সাইন্যাপস ও নিউরোট্রান্সমিটার ভেসিকল",
      titleEn: "Chemical Synapse & Neurotransmitter Vesicles",
      categoryBn: "সমন্বয়",
      descriptionBn: "অ্যাসিটাইলকোলিন ক্ষরণে এক নিউরন থেকে অন্যটিতে সংকেত",
      labels: [
        { bn: "স্নায়ু সাইন্যাপস ও নিউরোট্রান্সমিটার ভেসিকল", en: "Chemical Synapse & Neurotransmitter Vesicles", sym: "M12", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 13,
      chapter: 10,
      topicRef: "১০.৫",
      titleBn: "অ্যাকশন পটেনশিয়াল ও সোডিয়াম-পটাশিয়াম পাম্প",
      titleEn: "Nerve Action Potential Na+/K+ ATPase Pump",
      categoryBn: "সমন্বয়",
      descriptionBn: "মেমব্রেন ডিপোলারাইজেশন ও রিপোলারাইজেশন তরঙ্গ",
      labels: [
        { bn: "অ্যাকশন পটেনশিয়াল ও সোডিয়াম-পটাশিয়াম পাম্প", en: "Nerve Action Potential Na+/K+ ATPase Pump", sym: "M13", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 14,
      chapter: 10,
      topicRef: "১০.৬",
      titleBn: "প্রতিবর্ত চাপ (Reflex Arc) — ৫টি উপাদান সার্কিট",
      titleEn: "Reflex Arc 5-Component Neural Circuit",
      categoryBn: "সমন্বয়",
      descriptionBn: "গ্রাহক, সংবেদী স্নায়ু, কেন্দ্র, চেষ্টীয় স্নায়ু ও পেশি সাড়া",
      labels: [
        { bn: "প্রতিবর্ত চাপ (Reflex Arc)", en: "Reflex Arc 5-Component Neural Circuit", sym: "M14", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 15,
      chapter: 10,
      topicRef: "১০.৭",
      titleBn: "পিটুইটারি গ্রন্থি — মাস্টার গ্ল্যান্ড ও ট্রপিক হরমোন",
      titleEn: "Pituitary Gland Master Endocrine Regulator",
      categoryBn: "সমন্বয়",
      descriptionBn: "মস্তিষ্কের নিচে অন্যান্য গ্রন্থির নিয়ন্ত্রণকারী অধিপতি",
      labels: [
        { bn: "পিটুইটারি গ্রন্থি", en: "Pituitary Gland Master Endocrine Regulator", sym: "M15", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 16,
      chapter: 10,
      topicRef: "১০.৭",
      titleBn: "থাইরয়েড গ্রন্থি ও বিপাকীয় হরমোন থাইরক্সিন",
      titleEn: "Thyroid Gland Follicles & Thyroxine (T4/T3)",
      categoryBn: "সমন্বয়",
      descriptionBn: "গলার নিচে প্রজাপতি আকৃতির শক্তি বিপাক নিয়ন্ত্রক",
      labels: [
        { bn: "থাইরয়েড গ্রন্থি ও বিপাকীয় হরমোন থাইরক্সিন", en: "Thyroid Gland Follicles & Thyroxine (T4/T3)", sym: "M16", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 17,
      chapter: 10,
      topicRef: "১০.৭",
      titleBn: "আইলেটস অব ল্যাঙ্গারহ্যান্স — ইনসুলিন ও গ্লুকাগন",
      titleEn: "Islets of Langerhans: Alpha & Beta Cells",
      categoryBn: "সমন্বয়",
      descriptionBn: "রক্তের গ্লুকোজের মাত্রা নিখুঁত সমতায় ধরে রাখা",
      labels: [
        { bn: "আইলেটস অব ল্যাঙ্গারহ্যান্স", en: "Islets of Langerhans: Alpha & Beta Cells", sym: "M17", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 18,
      chapter: 10,
      topicRef: "১০.৭",
      titleBn: "অ্যাড্রেনাল গ্রন্থি ও জরুরি হরমোন অ্যাড্রেনালিন",
      titleEn: "Adrenal Gland Cortex & Medulla Epinephrine",
      categoryBn: "সমন্বয়",
      descriptionBn: "ভয়, রাগ ও জরুরি অবস্থায় ফাইট-অর-ফ্লাইট প্রতিক্রিয়া",
      labels: [
        { bn: "অ্যাড্রেনাল গ্রন্থি ও জরুরি হরমোন অ্যাড্রেনালিন", en: "Adrenal Gland Cortex & Medulla Epinephrine", sym: "M18", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 19,
      chapter: 10,
      topicRef: "১০.৮",
      titleBn: "ডায়াবেটিস মেলিটাস — রক্তে উচ্চ গ্লুকোজ বিপাক",
      titleEn: "Diabetes Mellitus Hyperglycemia Pathology",
      categoryBn: "সমন্বয়",
      descriptionBn: "ইনসুলিন ঘাটতি বা অকার্যকারিতায় রক্তের শর্করা সংকট",
      labels: [
        { bn: "ডায়াবেটিস মেলিটাস", en: "Diabetes Mellitus Hyperglycemia Pathology", sym: "M19", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 20,
      chapter: 10,
      topicRef: "১০.৮",
      titleBn: "গলগণ্ড (Goiter) — আয়োডিন ঘাটতিতে থাইরয়েড স্ফীতি",
      titleEn: "Endemic Goiter Thyroid Hypertrophy",
      categoryBn: "সমন্বয়",
      descriptionBn: "আয়োডিনের অভাবে থাইরয়েড গ্রন্থির অস্বাভাবিক ফোলা",
      labels: [
        { bn: "গলগণ্ড (Goiter)", en: "Endemic Goiter Thyroid Hypertrophy", sym: "M20", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    }
  ],
  11: [
    {
      id: 1,
      chapter: 11,
      topicRef: "১১.১",
      titleBn: "অযৌন ও যৌন জননের মৌলিক জীবতাত্ত্বিক তুলনা",
      titleEn: "Asexual vs Sexual Reproduction Comparison",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "ক্লোন অপত্য বনাম জিনগত বৈচিত্র্যময় অপত্য সৃষ্টি",
      labels: [
        { bn: "অযৌন ও যৌন জননের মৌলিক জীবতাত্ত্বিক তুলনা", en: "Asexual vs Sexual Reproduction Comparison", sym: "M1", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 2,
      chapter: 11,
      topicRef: "১১.২",
      titleBn: "একটি সম্পূর্ণ আদর্শ ফুলের ৫টি স্তবকের গঠন",
      titleEn: "Complete Flower Anatomy 5 Floral Whorls",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "পুষ্পাক্ষ, বৃতি, দলমণ্ডল, পুংস্তবক ও স্ত্রীস্তবক",
      labels: [
        { bn: "একটি সম্পূর্ণ আদর্শ ফুলের ৫টি স্তবকের গঠন", en: "Complete Flower Anatomy 5 Floral Whorls", sym: "M2", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 3,
      chapter: 11,
      topicRef: "১১.২",
      titleBn: "পুংস্তবক — পরাগধানীর ৪টি প্রকোষ্ঠ ও পুংদণ্ড",
      titleEn: "Stamen Bilobed Anther & Filament",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "পরাগধানীতে মায়োসিসে পরাগরেণু তৈরির কারখানা",
      labels: [
        { bn: "পুংস্তবক", en: "Stamen Bilobed Anther & Filament", sym: "M3", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 4,
      chapter: 11,
      topicRef: "১১.২",
      titleBn: "স্ত্রীস্তবক — গর্ভমুণ্ড, গর্ভদণ্ড ও গর্ভাশয়",
      titleEn: "Carpel: Stigma, Style & Ovary Chamber",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "পরাগরেণু গ্রহণ, নালী পথ ও ডিম্বক ধারণকারী গর্ভাশয়",
      labels: [
        { bn: "স্ত্রীস্তবক", en: "Carpel: Stigma, Style & Ovary Chamber", sym: "M4", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 5,
      chapter: 11,
      topicRef: "১১.২",
      titleBn: "পরাগরেণুর সূক্ষ্ম গঠন — এক্সাইন ও ইনটাইন প্রাচীর",
      titleEn: "Pollen Grain Microspore Wall Architecture",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "অলংকৃত বহিস্পোর ও জনন রন্ধ্রযুক্ত পুং রেণু",
      labels: [
        { bn: "পরাগরেণুর সূক্ষ্ম গঠন", en: "Pollen Grain Microspore Wall Architecture", sym: "M5", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 6,
      chapter: 11,
      topicRef: "১১.৪",
      titleBn: "ডিম্বকের অভ্যন্তরীণ গঠন — ৮ নিউক্লিয়াস ভ্রূণথলি",
      titleEn: "Plant Anatropous Ovule Embryo Sac (8-Nuclei)",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "ডিম্বাণু, সহকারী কোষ, গৌণ নিউক্লিয়াস ও প্রতিপাদ কোষ",
      labels: [
        { bn: "ডিম্বকের অভ্যন্তরীণ গঠন", en: "Plant Anatropous Ovule Embryo Sac (8-Nuclei)", sym: "M6", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 7,
      chapter: 11,
      topicRef: "১১.৩",
      titleBn: "সপুষ্পক উদ্ভিদের পরাগায়ন — পতঙ্গ ও বায়ু বাহক",
      titleEn: "Pollination Vectors: Entomophily & Anemophily",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "সুগন্ধি রঙের ফুলে মৌমাছি ও ঘাসের পরাগায়ন",
      labels: [
        { bn: "সপুষ্পক উদ্ভিদের পরাগায়ন", en: "Pollination Vectors: Entomophily & Anemophily", sym: "M7", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 8,
      chapter: 11,
      topicRef: "১১.৪",
      titleBn: "পরাগনালির অঙ্কুরোদগম ও কেমোট্রপিক বৃদ্ধি",
      titleEn: "Pollen Tube Germination & Chemotropism",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "গর্ভদণ্ড ভেদ করে রাসায়নিক আকর্ষণে ডিম্বকে প্রবেশ",
      labels: [
        { bn: "পরাগনালির অঙ্কুরোদগম ও কেমোট্রপিক বৃদ্ধি", en: "Pollen Tube Germination & Chemotropism", sym: "M8", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 9,
      chapter: 11,
      topicRef: "১১.৪",
      titleBn: "উদ্ভিদের দ্বি-নিষেক ও ট্রিপ্লয়েড শস্য (3n) ত্রিমিলন",
      titleEn: "Double Fertilization & Triploid Endosperm",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "একটি শুক্রাণু+ডিম্বাণু (জাইগোট), অন্যটি+গৌণ নিউক্লিয়াস (শস্য)",
      labels: [
        { bn: "উদ্ভিদের দ্বি-নিষেক ও ট্রিপ্লয়েড শস্য (3n) ত্রিমিলন", en: "Double Fertilization & Triploid Endosperm", sym: "M9", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 10,
      chapter: 11,
      topicRef: "১১.৫",
      titleBn: "ফল ও বীজের বিকাশ — পেরিকার্প ও ভ্রূণমূল-ভ্রূণকাণ্ড",
      titleEn: "Fruit Pericarp & Seed Dicot Embryo Development",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "নিষেকোত্তর গর্ভাশয় ফলে এবং ডিম্বক বীজে রূপান্তর",
      labels: [
        { bn: "ফল ও বীজের বিকাশ", en: "Fruit Pericarp & Seed Dicot Embryo Development", sym: "M10", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 11,
      chapter: 11,
      topicRef: "১১.৬",
      titleBn: "মানব পুরুষ প্রজননতন্ত্র — শুক্রাশয় ও ভাস ডিফারেন্স",
      titleEn: "Male Reproductive Tract: Testis & Vas Deferens",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "সেমিনিফেরাস নালিকায় শুক্রাণু ও টেস্টোস্টেরন সৃষ্টি",
      labels: [
        { bn: "মানব পুরুষ প্রজননতন্ত্র", en: "Male Reproductive Tract: Testis & Vas Deferens", sym: "M11", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 12,
      chapter: 11,
      topicRef: "১১.৬",
      titleBn: "শুক্রাণুর অণুবীক্ষণিক গঠন — অ্যাক্রোসোম ও লেজ",
      titleEn: "Human Spermatozoon Microstructure & Acrosome",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "ডিম্বাণু প্রাচীর গলানোর অ্যাক্রোসোম টুপি ও মাইটোকন্ড্রিয়া সর্পিলাকার",
      labels: [
        { bn: "শুক্রাণুর অণুবীক্ষণিক গঠন", en: "Human Spermatozoon Microstructure & Acrosome", sym: "M12", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 13,
      chapter: 11,
      topicRef: "১১.৬",
      titleBn: "মানব স্ত্রী প্রজননতন্ত্র — ডিম্বাশয়, জরায়ু ও এন্ডোমেট্রিয়াম",
      titleEn: "Female Reproductive System: Ovary & Uterus",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "প্রতি মাসে ডিম্বাণু নিঃসরণ ও ভ্রূণ ধারণকারী জরায়ু",
      labels: [
        { bn: "মানব স্ত্রী প্রজননতন্ত্র", en: "Female Reproductive System: Ovary & Uterus", sym: "M13", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 14,
      chapter: 11,
      topicRef: "১১.৬",
      titleBn: "ফ্যালোপিয়ান নালি ও ডিম্বাণু ক্ষরণ (ওভুলেশন)",
      titleEn: "Fallopian Tube Ciliated Fimbriae & Ovulation",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "ডিম্বাশয় থেকে ডিম্বাণু গ্রহণ ও অ্যাম্পুলায় নিষেক",
      labels: [
        { bn: "ফ্যালোপিয়ান নালি ও ডিম্বাণু ক্ষরণ (ওভুলেশন)", en: "Fallopian Tube Ciliated Fimbriae & Ovulation", sym: "M14", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 15,
      chapter: 11,
      topicRef: "১১.৬",
      titleBn: "মানব নিষেকের স্থান ও এককোষী জাইগোট সৃষ্টি",
      titleEn: "Human Fertilization Ampulla & Zygote (2n)",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "শুক্রাণু-ডিম্বাণুর মিলনে ৪৬ ক্রোমোজোমের একক কোষ",
      labels: [
        { bn: "মানব নিষেকের স্থান ও এককোষী জাইগোট সৃষ্টি", en: "Human Fertilization Ampulla & Zygote (2n)", sym: "M15", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 16,
      chapter: 11,
      topicRef: "১১.৭",
      titleBn: "ব্লাস্টোসিস্ট রূপান্তর ও জরায়ু প্রাচীরে রোপণ",
      titleEn: "Blastocyst Cleavage & Uterine Implantation",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "মরুলা থেকে ব্লাস্টোসিস্ট হয়ে এন্ডোমেট্রিয়ামে গাঁথা",
      labels: [
        { bn: "ব্লাস্টোসিস্ট রূপান্তর ও জরায়ু প্রাচীরে রোপণ", en: "Blastocyst Cleavage & Uterine Implantation", sym: "M16", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 17,
      chapter: 11,
      topicRef: "১১.৭",
      titleBn: "মানব ভ্রূণের বিকাশ ও অ্যামনিওটিক তরল থলি",
      titleEn: "Human Embryonic Stages & Amniotic Fluid Cushion",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "ধাক্কা প্রতিরোধক তরল কুশনে ভ্রূণের অঙ্গপ্রত্যঙ্গ গঠন",
      labels: [
        { bn: "মানব ভ্রূণের বিকাশ ও অ্যামনিওটিক তরল থলি", en: "Human Embryonic Stages & Amniotic Fluid Cushion", sym: "M17", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 18,
      chapter: 11,
      topicRef: "১১.৭",
      titleBn: "অমরা (Placenta) ও নাড়ির (Umbilical Cord) রক্ত জালক",
      titleEn: "Placenta Chorionic Villi & Umbilical Blood Transport",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "মায়ের রক্ত থেকে অক্সিজেন ও পুষ্টি ভ্রূণে সরবরাহ",
      labels: [
        { bn: "অমরা (Placenta) ও নাড়ির (Umbilical Cord) রক্ত জালক", en: "Placenta Chorionic Villi & Umbilical Blood Transport", sym: "M18", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 19,
      chapter: 11,
      topicRef: "১১.৮",
      titleBn: "এইচআইভি (HIV) রেট্রোভাইরাস ও এইডস রোগ মেকানিজম",
      titleEn: "HIV Retrovirus Structure & CD4 T-Cell Attack",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "রোগ প্রতিরোধ ক্ষমতা ধ্বংসকারী সংক্রামক ভাইরাস",
      labels: [
        { bn: "এইচআইভি (HIV) রেট্রোভাইরাস ও এইডস রোগ মেকানিজম", en: "HIV Retrovirus Structure & CD4 T-Cell Attack", sym: "M19", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 20,
      chapter: 11,
      topicRef: "১১.৮",
      titleBn: "যৌন সংক্রামক ব্যাধি — সিফিলিস ও গনোরিয়া ব্যাক্টেরিয়া",
      titleEn: "STD Pathogens: Treponema & Neisseria Gonorrhoeae",
      categoryBn: "জীবের প্রজনন",
      descriptionBn: "যৌন স্বাস্থ্যবিধি ও সংক্রামক ব্যাক্টেরিয়ার ঝুঁকি",
      labels: [
        { bn: "যৌন সংক্রামক ব্যাধি", en: "STD Pathogens: Treponema & Neisseria Gonorrhoeae", sym: "M20", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    }
  ],
  12: [
    {
      id: 1,
      chapter: 12,
      topicRef: "১২.১",
      titleBn: "গ্রেগর জোহান মেন্ডেল ও মোটরশুঁটির বিপরীত বৈশিষ্ট্য",
      titleEn: "Mendel Pea Plant 7 Contrast Alleles",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "বংশগতিবিদ্যার জনক ও মেন্ডেলীয় প্রকরণ",
      labels: [
        { bn: "গ্রেগর জোহান মেন্ডেল ও মোটরশুঁটির বিপরীত বৈশিষ্ট্য", en: "Mendel Pea Plant 7 Contrast Alleles", sym: "M1", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 2,
      chapter: 12,
      topicRef: "১২.১",
      titleBn: "মনোহাইব্রিড ক্রস ও ৩:১ ফিনোটাইপিক অনুপাত",
      titleEn: "Monohybrid Cross Punnett Square 3:1 Ratio",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "প্রথম সূত্রে প্রকট ও প্রচ্ছন্ন অ্যালিলের পৃথকীকরণ",
      labels: [
        { bn: "মনোহাইব্রিড ক্রস ও ৩:১ ফিনোটাইপিক অনুপাত", en: "Monohybrid Cross Punnett Square 3:1 Ratio", sym: "M2", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 3,
      chapter: 12,
      topicRef: "১২.১",
      titleBn: "ডাইহাইব্রিড ক্রস ও ৯:৩:৩:১ স্বাধীন সঞ্চারণ",
      titleEn: "Dihybrid Cross 9:3:3:1 Independent Assortment",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "দ্বিতীয় সূত্রে দুই জোড়া বৈশিষ্ট্যের স্বাধীন মিলন",
      labels: [
        { bn: "ডাইহাইব্রিড ক্রস ও ৯:৩:৩:১ স্বাধীন সঞ্চারণ", en: "Dihybrid Cross 9:3:3:1 Independent Assortment", sym: "M3", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 4,
      chapter: 12,
      topicRef: "১২.২",
      titleBn: "মানুষের ৪৬টি ক্রোমোজোম ও ক্যারিওটাইপ বিশ্লেষণ",
      titleEn: "Human 46 Chromosomes Karyotype (22 Pairs+Sex)",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "২২ জোড়া অটোসোম ও ১ জোড়া সেক্স ক্রোমোজোম",
      labels: [
        { bn: "মানুষের ৪৬টি ক্রোমোজোম ও ক্যারিওটাইপ বিশ্লেষণ", en: "Human 46 Chromosomes Karyotype (22 Pairs+Sex)", sym: "M4", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 5,
      chapter: 12,
      topicRef: "১২.২",
      titleBn: "লিঙ্গ নির্ধারণ মেকানিজম — পিতার XY ক্রোমোজোম",
      titleEn: "Human Sex Determination XX vs XY Chromosomes",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "সন্তানের লিঙ্গ নির্ধারণে পিতার ওয়াই ক্রোমোজোমের ভূমিকা",
      labels: [
        { bn: "লিঙ্গ নির্ধারণ মেকানিজম", en: "Human Sex Determination XX vs XY Chromosomes", sym: "M5", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 6,
      chapter: 12,
      topicRef: "১২.৩",
      titleBn: "ডিএনএ ডাবল হেলিক্সের ফসফেট-সুগার মেরুদণ্ড",
      titleEn: "DNA Double Helix Sugar-Phosphate Backbone",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "ওয়াটসন-ক্রিক মডেলের ডানাবর্তী দ্বি-সূত্রক গঠন",
      labels: [
        { bn: "ডিএনএ ডাবল হেলিক্সের ফসফেট-সুগার মেরুদণ্ড", en: "DNA Double Helix Sugar-Phosphate Backbone", sym: "M6", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 7,
      chapter: 12,
      topicRef: "১২.৩",
      titleBn: "নাইট্রোজেনাস ক্ষারক জোড় — A=T ও G≡C বন্ধন",
      titleEn: "DNA Base Pairing Hydrogen Bonds (A=T, G=C)",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "পিউরিন ও পিরিমিডিনের সম্পূরক হাইড্রোজেন বন্ধন",
      labels: [
        { bn: "নাইট্রোজেনাস ক্ষারক জোড়", en: "DNA Base Pairing Hydrogen Bonds (A=T, G=C)", sym: "M7", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 8,
      chapter: 12,
      topicRef: "১২.৩",
      titleBn: "ডিএনএ নিউক্লিওসোম ও হিস্টোন অক্টামার পুঁতি",
      titleEn: "Nucleosome Core Histone Octamer Bead",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "ডিএনএ পেঁচিয়ে ক্রোমোটিন তন্তু তৈরির আণবিক প্যাকিং",
      labels: [
        { bn: "ডিএনএ নিউক্লিওসোম ও হিস্টোন অক্টামার পুঁতি", en: "Nucleosome Core Histone Octamer Bead", sym: "M8", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 9,
      chapter: 12,
      topicRef: "১২.৪",
      titleBn: "আরএনএ (RNA) অণু — একক সূত্রক রাইবোজ চেইন",
      titleEn: "Single-Stranded RNA Structure & Uracil",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "থায়মিনের পরিবর্তে ইউরাসিলযুক্ত জেনেটিক বার্তা বাহক",
      labels: [
        { bn: "আরএনএ (RNA) অণু", en: "Single-Stranded RNA Structure & Uracil", sym: "M9", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 10,
      chapter: 12,
      topicRef: "১২.৪",
      titleBn: "মেসেঞ্জার আরএনএ (mRNA) ও ট্রান্সক্রিপশন বাবল",
      titleEn: "mRNA Transcription RNA Polymerase Bubble",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "ডিএনএ ছাঁচ থেকে জেনেটিক কোড কপি করা",
      labels: [
        { bn: "মেসেঞ্জার আরএনএ (mRNA) ও ট্রান্সক্রিপশন বাবল", en: "mRNA Transcription RNA Polymerase Bubble", sym: "M10", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 11,
      chapter: 12,
      topicRef: "১২.৫",
      titleBn: "ট্রান্সলেশন — রাইবোসোম, tRNA ও প্রোটিন সংশ্লেষণ",
      titleEn: "Ribosomal Translation & tRNA Anticodon Loop",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "জেনেটিক কোড অনুযায়ী অ্যামাইনো এসিডের শিকল তৈরি",
      labels: [
        { bn: "ট্রান্সলেশন", en: "Ribosomal Translation & tRNA Anticodon Loop", sym: "M11", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 12,
      chapter: 12,
      topicRef: "১২.৫",
      titleBn: "ডিএনএ অর্ধ-সংরক্ষণশীল অনুলিপন ফর্ক (Replication)",
      titleEn: "Semiconservative DNA Replication Fork",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "পুরাতন সূত্রের ছাঁচে নতুন পরিপূরক ডিএনএ তৈরি",
      labels: [
        { bn: "ডিএনএ অর্ধ-সংরক্ষণশীল অনুলিপন ফর্ক (Replication)", en: "Semiconservative DNA Replication Fork", sym: "M12", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 13,
      chapter: 12,
      topicRef: "১২.৩",
      titleBn: "জিন মিউটেশন — পয়েন্ট মিউটেশন ও ক্ষারক পরিবর্তন",
      titleEn: "Gene Point Mutation & Frameshift Alteration",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "ডিএনএ সিকোয়েন্সে আকস্মিক পরিবর্তনে নতুন বৈশিষ্ট্য",
      labels: [
        { bn: "জিন মিউটেশন", en: "Gene Point Mutation & Frameshift Alteration", sym: "M13", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 14,
      chapter: 12,
      topicRef: "১২.৬",
      titleBn: "লাল-সবুজ বর্ণান্ধতা ও সেক্স-লিংকড ইনহেরিট্যান্স",
      titleEn: "Red-Green Color Blindness X-Linked Inheritance",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "এক্স ক্রোমোজোমে অবস্থিত প্রচ্ছন্ন জিনের বংশগতি",
      labels: [
        { bn: "লাল-সবুজ বর্ণান্ধতা ও সেক্স-লিংকড ইনহেরিট্যান্স", en: "Red-Green Color Blindness X-Linked Inheritance", sym: "M14", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 15,
      chapter: 12,
      topicRef: "১২.৬",
      titleBn: "থ্যালাসেমিয়া — ত্রুটিপূর্ণ হিমোগ্লোবিন গ্লোবিন জিন",
      titleEn: "Thalassemia Hemoglobin Alpha/Beta Chain Defect",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "অটোসোমাল প্রচ্ছন্ন জিনের কারণে মারাত্মক রক্তশূন্যতা",
      labels: [
        { bn: "থ্যালাসেমিয়া", en: "Thalassemia Hemoglobin Alpha/Beta Chain Defect", sym: "M15", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 16,
      chapter: 12,
      topicRef: "১২.৬",
      titleBn: "ডিএনএ ফিঙ্গারপ্রিন্টিং জেল ব্যান্ড ও অপরাধী শনাক্ত",
      titleEn: "DNA Fingerprinting Gel Electrophoresis Bands",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "ভিএনটিআর (VNTR) ব্যান্ডের অনন্য নকশায় পরিচয় প্রমাণ",
      labels: [
        { bn: "ডিএনএ ফিঙ্গারপ্রিন্টিং জেল ব্যান্ড ও অপরাধী শনাক্ত", en: "DNA Fingerprinting Gel Electrophoresis Bands", sym: "M16", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 17,
      chapter: 12,
      topicRef: "১২.৭",
      titleBn: "ডারউইনের গ্যালাপাগোস ফিঞ্চ পাখির ঠোঁট বিবর্তন",
      titleEn: "Darwin Galapagos Finches Adaptive Radiation",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "খাদ্যাভ্যাসের প্রেক্ষিতে ঠোঁটের আকৃতির বিবর্তনীয় রূপান্তর",
      labels: [
        { bn: "ডারউইনের গ্যালাপাগোস ফিঞ্চ পাখির ঠোঁট বিবর্তন", en: "Darwin Galapagos Finches Adaptive Radiation", sym: "M17", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 18,
      chapter: 12,
      topicRef: "১২.৭",
      titleBn: "প্রাকৃতিক নির্বাচন তত্ত্ব — যোগ্যতমের জয় ও উদ্বর্তন",
      titleEn: "Natural Selection & Survival of the Fittest",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "পরিবেশের সাথে খাপ খাইয়ে অনুকূল বৈশিষ্ট্যের টিকে থাকা",
      labels: [
        { bn: "প্রাকৃতিক নির্বাচন তত্ত্ব", en: "Natural Selection & Survival of the Fittest", sym: "M18", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 19,
      chapter: 12,
      topicRef: "১২.৭",
      titleBn: "সমসংস্থ ও সমবৃত্তীয় অঙ্গের বিবর্তনীয় প্রমাণ",
      titleEn: "Homologous vs Analogous Anatomical Organs",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "বাদুড়ের ডানা, তিমির পাখনা ও মানুষের হাতের উৎপত্তিগত মিল",
      labels: [
        { bn: "সমসংস্থ ও সমবৃত্তীয় অঙ্গের বিবর্তনীয় প্রমাণ", en: "Homologous vs Analogous Anatomical Organs", sym: "M19", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 20,
      chapter: 12,
      topicRef: "১২.৭",
      titleBn: "জীবাশ্ম প্রমাণ — আর্কিওপটেরিক্স সংযোগকারী সেতু",
      titleEn: "Fossil Archaeopteryx Reptile-Bird Missing Link",
      categoryBn: "জীবের বংশগতি ও বিবর্তন",
      descriptionBn: "সরীসৃপ ও পাখির মধ্যবর্তী সংযোগকারী জীবাশ্ম",
      labels: [
        { bn: "জীবাশ্ম প্রমাণ", en: "Fossil Archaeopteryx Reptile-Bird Missing Link", sym: "M20", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    }
  ],
  13: [
    {
      id: 1,
      chapter: 13,
      topicRef: "১৩.১",
      titleBn: "একটি পুকুরের আদর্শ বাস্তুতন্ত্রের ৩ডি উপাদান",
      titleEn: "Pond Freshwater Ecosystem Components 3D",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "অজীব উপাদান, উৎপাদক, খাদক ও বিয়োজকের ভারসাম্য",
      labels: [
        { bn: "একটি পুকুরের আদর্শ বাস্তুতন্ত্রের ৩ডি উপাদান", en: "Pond Freshwater Ecosystem Components 3D", sym: "M1", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 2,
      chapter: 13,
      topicRef: "১৩.১",
      titleBn: "উৎপাদক — ফাইটোপ্লাংকটন ও জলজ উদ্ভিদ স্তর",
      titleEn: "Primary Producers: Phytoplankton & Hydrilla",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "সূর্যালোক কাজে লাগিয়ে খাদ্য উৎপাদনকারী সবুজ স্তর",
      labels: [
        { bn: "উৎপাদক", en: "Primary Producers: Phytoplankton & Hydrilla", sym: "M2", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 3,
      chapter: 13,
      topicRef: "১৩.১",
      titleBn: "প্রথম, দ্বিতীয় ও তৃতীয় স্তরের খাদক শৃঙ্খল",
      titleEn: "Consumers: Zooplankton, Small Fish, Large Predator",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "তৃণভোজী থেকে মাংসাশী খাদকের শক্তির রূপান্তর",
      labels: [
        { bn: "প্রথম, দ্বিতীয় ও তৃতীয় স্তরের খাদক শৃঙ্খল", en: "Consumers: Zooplankton, Small Fish, Large Predator", sym: "M3", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 4,
      chapter: 13,
      topicRef: "১৩.১",
      titleBn: "বিয়োজক — ব্যাকটেরিয়া ও ছত্রাকের হিউমাস রূপান্তর",
      titleEn: "Decomposers: Soil Bacteria & Fungi Humus",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "মৃত জীবদেহ পচিয়ে অজৈব পুষ্টি মাটিতে ফেরত দেওয়া",
      labels: [
        { bn: "বিয়োজক", en: "Decomposers: Soil Bacteria & Fungi Humus", sym: "M4", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 5,
      chapter: 13,
      topicRef: "১৩.১",
      titleBn: "পুকুরের গভীরতাভিত্তিক জোন — লিটোরাল ও প্রোফান্ডাল",
      titleEn: "Pond Stratification: Littoral, Limnetic & Profundal",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "আলোর প্রবেশ্যতা অনুসারে বাস্তুতন্ত্রের স্তরবিন্যাস",
      labels: [
        { bn: "পুকুরের গভীরতাভিত্তিক জোন", en: "Pond Stratification: Littoral, Limnetic & Profundal", sym: "M5", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 6,
      chapter: 13,
      topicRef: "১৩.২",
      titleBn: "তৃণভূমির চারণ খাদ্যশৃঙ্খল (Grazing Food Chain)",
      titleEn: "Grazing Food Chain: Grass -> Grasshopper -> Bird",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "সবুজ ঘাস থেকে শুরু হওয়া সরাসরি শিকার শৃঙ্খল",
      labels: [
        { bn: "তৃণভূমির চারণ খাদ্যশৃঙ্খল (Grazing Food Chain)", en: "Grazing Food Chain: Grass -> Grasshopper -> Bird", sym: "M6", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 7,
      chapter: 13,
      topicRef: "১৩.২",
      titleBn: "মৃতজীবী খাদ্যশৃঙ্খল (Detritus Food Chain)",
      titleEn: "Detritus Food Chain: Fallen Leaves -> Worm -> Hen",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "পচা জৈব আবর্জনা থেকে শুরু হওয়া খাদ্যশৃঙ্খল",
      labels: [
        { bn: "মৃতজীবী খাদ্যশৃঙ্খল (Detritus Food Chain)", en: "Detritus Food Chain: Fallen Leaves -> Worm -> Hen", sym: "M7", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 8,
      chapter: 13,
      topicRef: "১৩.২",
      titleBn: "বাস্তুতান্ত্রিক জটিল খাদ্যজাল (Food Web)",
      titleEn: "Complex Ecosystem Food Web Interconnected Mesh",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "একাধিক খাদ্যশৃঙ্খলের জালের মতো পরস্পর সংযোগ",
      labels: [
        { bn: "বাস্তুতান্ত্রিক জটিল খাদ্যজাল (Food Web)", en: "Complex Ecosystem Food Web Interconnected Mesh", sym: "M8", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 9,
      chapter: 13,
      topicRef: "১৩.৩",
      titleBn: "বাস্তুসংস্থানিক সংখ্যার পিরামিড (Pyramid of Numbers)",
      titleEn: "Ecological Pyramid of Numbers Base to Apex",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "উৎপাদকের বিপুল সংখ্যা থেকে শীর্ষ খাদকের ক্ষুদ্র সংখ্যা",
      labels: [
        { bn: "বাস্তুসংস্থানিক সংখ্যার পিরামিড (Pyramid of Numbers)", en: "Ecological Pyramid of Numbers Base to Apex", sym: "M9", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 10,
      chapter: 13,
      topicRef: "১৩.৩",
      titleBn: "জৈবভরের পিরামিড ও লিন্ডেম্যানের ১০% শক্তির নীতি",
      titleEn: "Pyramid of Biomass & Lindeman 10% Energy Law",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "প্রতিটি ট্রফিক লেভেলে মাত্র ১০% শক্তি পরবর্তী ধাপে গমন",
      labels: [
        { bn: "জৈবভরের পিরামিড ও লিন্ডেম্যানের ১০% শক্তির নীতি", en: "Pyramid of Biomass & Lindeman 10% Energy Law", sym: "M10", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 11,
      chapter: 13,
      topicRef: "১৩.৪",
      titleBn: "নাইট্রোজেন চক্র — সংবন্ধন, নাইট্রিফিকেশন ও ডিনাইট্রিফিকেশন",
      titleEn: "Biogeochemical Nitrogen Cycle Dynamics",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "বায়ুর মুক্ত N2 কে উদ্ভিদের ব্যবহারোপযোগী নাইট্রেটে রূপান্তর",
      labels: [
        { bn: "নাইট্রোজেন চক্র", en: "Biogeochemical Nitrogen Cycle Dynamics", sym: "M11", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 12,
      chapter: 13,
      topicRef: "১৩.৪",
      titleBn: "বায়ুমণ্ডলীয় কার্বন চক্র ও সালোকসংশ্লেষণ ভারসাম্য",
      titleEn: "Global Carbon Cycle & Atmospheric CO2 Balance",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "শ্বাসক্রিয়া, দহন ও সালোকসংশ্লেষণের কার্বন সমতা",
      labels: [
        { bn: "বায়ুমণ্ডলীয় কার্বন চক্র ও সালোকসংশ্লেষণ ভারসাম্য", en: "Global Carbon Cycle & Atmospheric CO2 Balance", sym: "M12", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 13,
      chapter: 13,
      topicRef: "১৩.৪",
      titleBn: "পানি চক্র — বাষ্পীভবন, ঘনীভবন ও বৃষ্টিপাত",
      titleEn: "Hydrological Water Cycle Evaporation & Rain",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "সাগর থেকে মেঘ হয়ে পুনরায় স্থলভাগে বৃষ্টির আবর্তন",
      labels: [
        { bn: "পানি চক্র", en: "Hydrological Water Cycle Evaporation & Rain", sym: "M13", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 14,
      chapter: 13,
      topicRef: "১৩.৫",
      titleBn: "মিউচুয়ালিজম — মৌমাছি ও ফুলের পরাগায়ন বন্ধন",
      titleEn: "Mutualism: Honeybee & Angiosperm Flower",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "উভয় জীব পরস্পর থেকে উপকৃত হওয়ার ধনাত্মক আন্তঃক্রিয়া",
      labels: [
        { bn: "মিউচুয়ালিজম", en: "Mutualism: Honeybee & Angiosperm Flower", sym: "M14", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 15,
      chapter: 13,
      topicRef: "১৩.৫",
      titleBn: "কমেনসালিজম — অর্কিড এপিফাইট পরাশ্রয়ী উদ্ভিদ",
      titleEn: "Commensalism: Epiphytic Orchid on Mango Tree",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "একজন উপকৃত হলেও অন্যজনের কোনো ক্ষতি না হওয়া",
      labels: [
        { bn: "কমেনসালিজম", en: "Commensalism: Epiphytic Orchid on Mango Tree", sym: "M15", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 16,
      chapter: 13,
      topicRef: "১৩.৫",
      titleBn: "পরজীবিতা — স্বর্ণলতার চোষক অঙ্গ হস্টোরিয়া",
      titleEn: "Parasitism: Cuscuta Dodder Vine Haustorium",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "পোষক উদ্ভিদের রস চুষে বেঁচে থাকা ঋণাত্মক আন্তঃক্রিয়া",
      labels: [
        { bn: "পরজীবিতা", en: "Parasitism: Cuscuta Dodder Vine Haustorium", sym: "M16", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 17,
      chapter: 13,
      topicRef: "১৩.৫",
      titleBn: "আন্তঃপ্রজাতি ও অন্তঃপ্রজাতি খাদ্য-বাসস্থান প্রতিযোগিতা",
      titleEn: "Interspecific & Intraspecific Resource Competition",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "সীমিত সম্পদ নিয়ে একই বা ভিন্ন প্রজাতির লড়াই",
      labels: [
        { bn: "আন্তঃপ্রজাতি ও অন্তঃপ্রজাতি খাদ্য-বাসস্থান প্রতিযোগিতা", en: "Interspecific & Intraspecific Resource Competition", sym: "M17", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 18,
      chapter: 13,
      topicRef: "১৩.৬",
      titleBn: "সুন্দরবনের ম্যানগ্রোভ ইকোসিস্টেম ও শ্বাসমূল (নিউমাটোফোর)",
      titleEn: "Sundarbans Mangrove Pneumatophores & Roots",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "লবণাক্ত কাদায় মাটির উপরে উঠে আসা শ্বাসমূল ও সুন্দরী গাছ",
      labels: [
        { bn: "সুন্দরবনের ম্যানগ্রোভ ইকোসিস্টেম ও শ্বাসমূল (নিউমাটোফোর)", en: "Sundarbans Mangrove Pneumatophores & Roots", sym: "M18", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 19,
      chapter: 13,
      topicRef: "১৩.৬",
      titleBn: "জীববৈচিত্র্য বিলুপ্তি সংকট ও খাদ্যশৃঙ্খল বিপর্যয়",
      titleEn: "Habitat Loss & Biodiversity Extinction Crisis",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "বন নিধনে বাস্তুতন্ত্রের ভারসাম্য নষ্ট ও জীব বিলুপ্তি",
      labels: [
        { bn: "জীববৈচিত্র্য বিলুপ্তি সংকট ও খাদ্যশৃঙ্খল বিপর্যয়", en: "Habitat Loss & Biodiversity Extinction Crisis", sym: "M19", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 20,
      chapter: 13,
      topicRef: "১৩.৬",
      titleBn: "ইন-সিটু ও এক্স-সিটু জীববৈচিত্র্য সংরক্ষণ অভয়ারণ্য",
      titleEn: "In-situ & Ex-situ Conservation Sanctuaries",
      categoryBn: "জীবের পরিবেশ",
      descriptionBn: "জাতীয় উদ্যান, সাফারি পার্ক ও জিনব্যাংক সংরক্ষণ",
      labels: [
        { bn: "ইন-সিটু ও এক্স-সিটু জীববৈচিত্র্য সংরক্ষণ অভয়ারণ্য", en: "In-situ & Ex-situ Conservation Sanctuaries", sym: "M20", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    }
  ],
  14: [
    {
      id: 1,
      chapter: 14,
      topicRef: "১৪.১",
      titleBn: "জীবপ্রযুক্তির ধারণা, ইতিহাস ও আধুনিক পরিধি",
      titleEn: "Biotechnology Scope & Modern Molecular Horizons",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "জীবদেহ ও অণুজীব কাজে লাগিয়ে মানব কল্যাণে প্রযুক্তি",
      labels: [
        { bn: "জীবপ্রযুক্তির ধারণা, ইতিহাস ও আধুনিক পরিধি", en: "Biotechnology Scope & Modern Molecular Horizons", sym: "M1", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 2,
      chapter: 14,
      topicRef: "১৪.২",
      titleBn: "উদ্ভিদের টোটিপোটেন্সি — একক কোষ থেকে পূর্ণ উদ্ভিদ",
      titleEn: "Plant Cellular Totipotency Capability",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "উদ্ভিদের প্রতিটি সজীব কোষের পূর্ণাঙ্গ উদ্ভিদ তৈরির ক্ষমতা",
      labels: [
        { bn: "উদ্ভিদের টোটিপোটেন্সি", en: "Plant Cellular Totipotency Capability", sym: "M2", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 3,
      chapter: 14,
      topicRef: "১৪.২",
      titleBn: "টিস্যু কালচার ল্যাবরেটরি ও ল্যামিনার এয়ারফ্লো",
      titleEn: "Tissue Culture Sterile Laminar Airflow Bench",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "সম্পূর্ণ জীবাণুমুক্ত পরিবেশে নিয়ন্ত্রিত আবাদ",
      labels: [
        { bn: "টিস্যু কালচার ল্যাবরেটরি ও ল্যামিনার এয়ারফ্লো", en: "Tissue Culture Sterile Laminar Airflow Bench", sym: "M3", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 4,
      chapter: 14,
      topicRef: "১৪.২",
      titleBn: "এক্সপ্লান্ট নির্বাচন ও পুষ্টি মাধ্যম (MS Medium)",
      titleEn: "Explant Tissue Selection & MS Nutrient Flask",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "অপরিহার্য খনিজ লবণ, ভিটামিন ও হরমোনের পুষ্টিজেল",
      labels: [
        { bn: "এক্সপ্লান্ট নির্বাচন ও পুষ্টি মাধ্যম (MS Medium)", en: "Explant Tissue Selection & MS Nutrient Flask", sym: "M4", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 5,
      chapter: 14,
      topicRef: "১৪.২",
      titleBn: "অবয়বহীন ক্যালাস সৃষ্টি ও হরমোন দ্বারা বিভাজন",
      titleEn: "Undifferentiated Callus Formation & Division",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "অক্সিন ও সাইটোকাইনিন প্রভাবে কোষপিণ্ড সৃষ্টি",
      labels: [
        { bn: "অবয়বহীন ক্যালাস সৃষ্টি ও হরমোন দ্বারা বিভাজন", en: "Undifferentiated Callus Formation & Division", sym: "M5", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 6,
      chapter: 14,
      topicRef: "১৪.২",
      titleBn: "টেস্টটিউবে মূল ও কাণ্ড সৃষ্টি — প্লান্টলেট চারা",
      titleEn: "Organogenesis: Root & Shoot Plantlet in Tube",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "হরমোনের তারতম্যে ক্ষুদ্র উদ্ভিদাণু বা চারা তৈরি",
      labels: [
        { bn: "টেস্টটিউবে মূল ও কাণ্ড সৃষ্টি", en: "Organogenesis: Root & Shoot Plantlet in Tube", sym: "M6", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 7,
      chapter: 14,
      topicRef: "১৪.২",
      titleBn: "কাচের জার থেকে মাঠ পর্যায়ে হার্ডেনিং অভিযোজন",
      titleEn: "Plantlet Acclimatization & Greenhouse Hardening",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "ল্যাব থেকে মুক্ত মাটির পরিবেশে চারাকে অভ্যস্ত করা",
      labels: [
        { bn: "কাচের জার থেকে মাঠ পর্যায়ে হার্ডেনিং অভিযোজন", en: "Plantlet Acclimatization & Greenhouse Hardening", sym: "M7", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 8,
      chapter: 14,
      topicRef: "১৪.৩",
      titleBn: "রিকম্বিন্যান্ট ডিএনএ প্রযুক্তি — জেনেটিক ইঞ্জিনিয়ারিং",
      titleEn: "Recombinant DNA (rDNA) Technology Overview",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "কাঙ্ক্ষিত জিন এক জীব থেকে অন্য জীবের ডিএনএ-তে জোড়া লাগানো",
      labels: [
        { bn: "রিকম্বিন্যান্ট ডিএনএ প্রযুক্তি", en: "Recombinant DNA (rDNA) Technology Overview", sym: "M8", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 9,
      chapter: 14,
      topicRef: "১৪.৪",
      titleBn: "ব্যাকটেরিয়াল প্লাজমিড pBR322 জিন প্রকৌশল ভেক্টর",
      titleEn: "Bacterial Plasmid Vector pBR322 Architecture",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "স্ব-বিভাজনশীল ডিএনএ রিং যা বাহক হিসেবে কাজ করে",
      labels: [
        { bn: "ব্যাকটেরিয়াল প্লাজমিড pBR322 জিন প্রকৌশল ভেক্টর", en: "Bacterial Plasmid Vector pBR322 Architecture", sym: "M9", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 10,
      chapter: 14,
      topicRef: "১৪.৪",
      titleBn: "রেস্ট্রিকশন এনজাইম — আণবিক কাঁচি (EcoRI কাটিং)",
      titleEn: "Restriction Endonuclease Molecular Scissors",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "ডিএনএ-র নির্দিষ্ট প্যালিনড্রোমিক সিকোয়েন্সে কর্তন",
      labels: [
        { bn: "রেস্ট্রিকশন এনজাইম", en: "Restriction Endonuclease Molecular Scissors", sym: "M10", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 11,
      chapter: 14,
      topicRef: "১৪.৪",
      titleBn: "স্টিকি এন্ড তৈরি ও পরিপূরক ক্ষারক জোড় বন্ধন",
      titleEn: "Sticky Ends Overhangs & Base Pairing",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "একতন্ত্রী খাঁজ সৃষ্টি করে কাঙ্ক্ষিত জিন সংযুক্তির সুযোগ",
      labels: [
        { bn: "স্টিকি এন্ড তৈরি ও পরিপূরক ক্ষারক জোড় বন্ধন", en: "Sticky Ends Overhangs & Base Pairing", sym: "M11", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 12,
      chapter: 14,
      topicRef: "১৪.৪",
      titleBn: "ডিএনএ লাইগেজ এনজাইম — আণবিক আঠা সংযোগ",
      titleEn: "DNA Ligase Molecular Glue Phosphodiester Link",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "ফসফোডাইএস্টার বন্ধন গড়ে ডিএনএ খণ্ড দুটিকে স্থায়ীভাবে জোড়া দেওয়া",
      labels: [
        { bn: "ডিএনএ লাইগেজ এনজাইম", en: "DNA Ligase Molecular Glue Phosphodiester Link", sym: "M12", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 13,
      chapter: 14,
      topicRef: "১৪.৪",
      titleBn: "রিকম্বিন্যান্ট প্লাজমিড গ্রাহক ব্যাকটেরিয়ায় রূপান্তর",
      titleEn: "Bacterial Transformation & Calcium Chloride",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "CaCl2 ও হিট শকে রিকম্বিন্যান্ট ডিএনএ ব্যাক্টেরিয়ায় প্রবেশ",
      labels: [
        { bn: "রিকম্বিন্যান্ট প্লাজমিড গ্রাহক ব্যাকটেরিয়ায় রূপান্তর", en: "Bacterial Transformation & Calcium Chloride", sym: "M13", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 14,
      chapter: 14,
      topicRef: "১৪.৪",
      titleBn: "ট্রান্সজেনিক ব্যাকটেরিয়ার ফার্মেন্টার ক্লোনিং",
      titleEn: "Fermenter Bioreactor Transgenic Bacterial Clone",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "শিল্প কারখানায় কোটি কোটি ব্যাক্টেরিয়া থেকে প্রোটিন উৎপাদন",
      labels: [
        { bn: "ট্রান্সজেনিক ব্যাকটেরিয়ার ফার্মেন্টার ক্লোনিং", en: "Fermenter Bioreactor Transgenic Bacterial Clone", sym: "M14", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 15,
      chapter: 14,
      topicRef: "১৪.৫",
      titleBn: "রিকম্বিন্যান্ট মানব ইনসুলিন (Humulin) উৎপাদন",
      titleEn: "Recombinant Human Insulin Production Pipeline",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "ডায়াবেটিস রোগীদের জন্য ল্যাবে খাঁটি মানব ইনসুলিন তৈরি",
      labels: [
        { bn: "রিকম্বিন্যান্ট মানব ইনসুলিন (Humulin) উৎপাদন", en: "Recombinant Human Insulin Production Pipeline", sym: "M15", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 16,
      chapter: 14,
      topicRef: "১৪.৫",
      titleBn: "জেনেটিক্যালি মডিফাইড (GM) বিটি (Bt) বেগুন",
      titleEn: "Bt Brinjal Bacillus Thuringiensis Crystal Toxin",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "ডগা ও ফল ছিদ্রকারী পোকা প্রতিরোধী ট্রান্সজেনিক বেগুন",
      labels: [
        { bn: "জেনেটিক্যালি মডিফাইড (GM) বিটি (Bt) বেগুন", en: "Bt Brinjal Bacillus Thuringiensis Crystal Toxin", sym: "M16", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 17,
      chapter: 14,
      topicRef: "১৪.৫",
      titleBn: "গোল্ডেন রাইস — বিটা-ক্যারোটিন (ভিটামিন এ) সমৃদ্ধ ধান",
      titleEn: "Golden Rice Beta-Carotene Pro-Vitamin A Biosynthesis",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "অন্ধত্ব ও অপুষ্টি দূরীকরণে ড্যাফোডিল জিনের সংযোজন",
      labels: [
        { bn: "গোল্ডেন রাইস", en: "Golden Rice Beta-Carotene Pro-Vitamin A Biosynthesis", sym: "M17", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 18,
      chapter: 14,
      topicRef: "১৪.৫",
      titleBn: "খরা ও লবণাক্ততা সহনশীল ট্রান্সজেনিক ধান ফসল",
      titleEn: "Salinity & Drought Tolerant Transgenic Crop Strain",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "উপকূলীয় ও শুষ্ক অঞ্চলে খাদ্য নিরাপত্তা নিশ্চিতকরণ",
      labels: [
        { bn: "খরা ও লবণাক্ততা সহনশীল ট্রান্সজেনিক ধান ফসল", en: "Salinity & Drought Tolerant Transgenic Crop Strain", sym: "M18", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 19,
      chapter: 14,
      topicRef: "১৪.৬",
      titleBn: "ইন্টারফেরন ও রিকম্বিন্যান্ট ভ্যাকসিন উৎপাদন",
      titleEn: "Interferon & Viral Subunit Vaccine Engineering",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "ক্যান্সার ও ভাইরাল সংক্রমণ নিরাময়ে জৈবপ্রযুক্তি ওষুধ",
      labels: [
        { bn: "ইন্টারফেরন ও রিকম্বিন্যান্ট ভ্যাকসিন উৎপাদন", en: "Interferon & Viral Subunit Vaccine Engineering", sym: "M19", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    },
    {
      id: 20,
      chapter: 14,
      topicRef: "১৪.৭",
      titleBn: "জীবপ্রযুক্তির বায়ো-সেফটি ও আন্তর্জাতিক নৈতিকতা",
      titleEn: "Biosafety Protocol & Bioethics Global Standards",
      categoryBn: "জীবপ্রযুক্তি",
      descriptionBn: "পরিবেশ ঝুঁকি মূল্যায়ন ও জৈব নিরাপত্তা নীতিমালা",
      labels: [
        { bn: "জীবপ্রযুক্তির বায়ো-সেফটি ও আন্তর্জাতিক নৈতিকতা", en: "Biosafety Protocol & Bioethics Global Standards", sym: "M20", color: "#10b981" },
        { bn: "প্রধান গঠন ও শারীরবৃত্ত", en: "Key Anatomical Architecture", sym: "AN", color: "#38bdf8" },
        { bn: "জৈব প্রক্রিয়া ও নিয়ন্ত্রণ", en: "Biological Function", sym: "BIO", color: "#f59e0b" }
      ]
    }
  ]
};
