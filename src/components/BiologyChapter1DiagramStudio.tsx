/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import {
  RotateCcw,
  Sparkles,
  Layers,
  Box,
  Square,
  Play,
  Pause,
  Maximize2,
  Info,
  CheckCircle2,
  Dna,
  ZoomIn,
  ZoomOut,
  Eye,
  EyeOff,
  ChevronRight,
  Split,
  Search,
  BookOpen
} from 'lucide-react';
import {
  buildBiologyCh1Part3D,
  updateBiologyCh1Part3DPhysics
} from './BiologyChapter1Part3DBuilder';

export interface DiagramPartInfo {
  id: string;
  nameBn: string;
  nameEn: string;
  symbol: string;
  color: string;
  roleBn: string;
  roleEn: string;
  structureBn: string;
  textbookRefBn: string;
  coords: { cx: number; cy: number; r?: number; w?: number; h?: number; d?: string };
}

export interface TextbookDiagramTopic {
  id: string;
  titleBn: string;
  titleEn: string;
  subtitleBn: string;
  chapterSection: string;
  parts: DiagramPartInfo[];
}

export const CHAPTER1_TEXTBOOK_DIAGRAMS: TextbookDiagramTopic[] = [
  // 0. Scope of Biology: Bios & Logos, DNA & Life
  {
    id: 'scope',
    titleBn: '১. জীববিজ্ঞানের ধারণা — Bios ও Logos এবং জীবনের পরিধি',
    titleEn: 'Concept & Scope of Biology: Bios & Logos',
    subtitleBn: 'গ্রিক ব্যুৎপত্তি, সজীব প্রোটোপ্লাজমীয় ভিত্তি এবং দ্বিসূত্রক DNA ব্লুপ্রিন্ট',
    chapterSection: 'অধ্যায় ১.১: জীববিজ্ঞানের ধারণা (পৃষ্ঠা ১-২)',
    parts: [
      {
        id: 'protoplasm',
        nameBn: 'Bios (জীবন ও প্রোটোপ্লাজম)',
        nameEn: 'Bios: Life & Living Protoplasm',
        symbol: 'Bio',
        color: '#06b6d4',
        roleBn: 'সকল সজীব কোষে সংঘটিত জৈবিক বিপাকীয় ক্রিয়া, শ্বসন, বৃদ্ধি ও প্রজননের ধারক।',
        roleEn: 'Protoplasmic physical basis of life carrying out all vital cellular metabolic activities.',
        structureBn: 'স্বচ্ছ, আঠালো, দানাদার ও অর্ধ-তরল কলয়েডাল জৈব রাসায়নিক উপাদান।',
        textbookRefBn: 'জীববিজ্ঞানের মূল আলোচ্য বিষয় হলো জীবন ও জীববৈচিত্র্য।',
        coords: { cx: 200, cy: 150, r: 45 }
      },
      {
        id: 'dna',
        nameBn: 'দ্বিসূত্রক ডিএনএ (জীবনের রাসায়নিক ভিত্তি)',
        nameEn: 'DNA Double Helix Blueprint',
        symbol: 'DNA',
        color: '#ec4899',
        roleBn: 'বংশগতির বার্তা, জিনোম কোড এবং প্রোটিন তৈরির ব্লুপ্রিন্ট ধারণকারী হেলিক্স।',
        roleEn: 'Genetic blueprint of inheritance encoding nucleotide sequences across generations.',
        structureBn: 'ওয়াটসন ও ক্রিক মডেলের দ্বি-সূত্রক সর্পিলাকার নিউক্লিওটাইড পলিমার শিকল।',
        textbookRefBn: 'সকল প্রকৃতকোষী জীবের ক্রোমাটিনের মূল রাসায়নিক ভিত্তি হলো ডিএনএ।',
        coords: { cx: 100, cy: 120, r: 28 }
      },
      {
        id: 'logos',
        nameBn: 'Logos (জ্ঞান ও বিজ্ঞানসম্মত অনুসন্ধান)',
        nameEn: 'Logos: Scientific Inquiry & Discourse',
        symbol: 'Log',
        color: '#8b5cf6',
        roleBn: 'জীবজগৎ সম্পর্কে সুশৃঙ্খল পরীক্ষণ, পর্যবেক্ষণ, শ্রেণিবিন্যাস ও বৈজ্ঞানিক গবেষণা।',
        roleEn: 'Systematic scientific investigation, empirical testing and rational discourse.',
        structureBn: 'বিজ্ঞানসম্মত পদ্ধতি: পর্যবেক্ষণ, অনুকল্প, পরীক্ষণ, সিদ্ধান্ত গ্রহণ।',
        textbookRefBn: 'গ্রিক শব্দ Bios (জীবন) এবং Logos (জ্ঞান) থেকে Biology শব্দের উৎপত্তি।',
        coords: { cx: 300, cy: 120, r: 28 }
      }
    ]
  },

  // 0b. Branches of Biology
  {
    id: 'branches',
    titleBn: '২. জীববিজ্ঞানের শাখাসমূহ — ভৌত ও ফলিত বিজ্ঞান',
    titleEn: 'Branches of Biology: Basic & Applied Disciplines',
    subtitleBn: 'অঙ্গসংস্থান, শারীরবিদ্যা, অণুবীক্ষণযন্ত্র গবেষণা এবং বায়োটেকনোলজি প্রয়োগ',
    chapterSection: 'অধ্যায় ১.২: জীববিজ্ঞানের শাখাসমূহ (পৃষ্ঠা ৩-৫)',
    parts: [
      {
        id: 'morphology',
        nameBn: 'অঙ্গসংস্থান ও শারীরবিদ্যা (ভৌত শাখা)',
        nameEn: 'Morphology & Physiology',
        symbol: 'Phys',
        color: '#3b82f6',
        roleBn: 'জীবের বাহ্যিক-অভ্যন্তরীণ গঠন এবং জৈবরাসায়নিক শারীরবৃত্তীয় প্রক্রিয়া বিশ্লেষণ।',
        roleEn: 'Investigation of internal/external structural forms and vital metabolic physiology.',
        structureBn: 'বাহ্যিক রূপকাঠামো, কোষীয় টিস্যুতন্ত্র ও শ্বসন-সালোকসংশ্লেষণ অঙ্গাণু।',
        textbookRefBn: 'ভৌত জীববিজ্ঞানে তত্ত্বীয় বিষয়াদি বিস্তারিতভাবে আলোচনা করা হয়।',
        coords: { cx: 110, cy: 150, r: 35 }
      },
      {
        id: 'microscope',
        nameBn: 'আলোক অণুবীক্ষণ যন্ত্র (গবেষণার ভিত্তি)',
        nameEn: 'Compound Light Microscope',
        symbol: 'Scope',
        color: '#10b981',
        roleBn: 'অদৃশ্য আণুবীক্ষণিক কোষ ও টিস্যুর নিখুঁত অবলোকন ও কোষীয় গবেষণা পরিচালনা।',
        roleEn: 'Magnification instrument fundamental for cytology and microbiological studies.',
        structureBn: 'আইপিস, অবজেক্টিভ লেন্স, স্টেজ, কনডেনসার এবং ফোকাস নব সমন্বিত বৈজ্ঞানিক যন্ত্র।',
        textbookRefBn: 'অণুবীক্ষণ যন্ত্র আবিষ্কারের ফলে আধুনিক কোষবিদ্যা ও অণুজীববিজ্ঞানের দ্বার উন্মোচিত হয়।',
        coords: { cx: 210, cy: 135, r: 35 }
      },
      {
        id: 'biotechnology',
        nameBn: 'জিনপ্রযুক্তি ও বায়োটেকনোলজি (ফলিত শাখা)',
        nameEn: 'Biotechnology & Genetic Engineering',
        symbol: 'Biotech',
        color: '#f59e0b',
        roleBn: 'মানবকল্যাণে জীবের জিন পরিবর্তন, পেট্রি ডিশে অনুজীব চাষ ও রিকম্বিনেন্ট ইনসুলিন তৈরি।',
        roleEn: 'Applied recombinant DNA technologies and industrial microbiological production.',
        structureBn: 'প্লাজমিড ভেক্টর রিং, রেস্ট্রিকশন এনজাইম এবং টিস্যু কালচার পুষ্টি মাধ্যম।',
        textbookRefBn: 'ফলিত জীববিজ্ঞান মানবকল্যাণ ও অর্থনৈতিক প্রয়োগের দিকসমূহ নিয়ে আলোকপাত করে।',
        coords: { cx: 310, cy: 165, r: 35 }
      }
    ]
  },

  // 1. Monera: Bacterium
  {
    id: 'monera',
    titleBn: '১. মনেরা রাজ্য — ব্যাকটেরিয়ার পূর্ণাঙ্গ অঙ্গসংস্থান',
    titleEn: 'Kingdom Monera: Bacterial Ultrastructure',
    subtitleBn: 'আদিকোষী (Prokaryotic) পেপটিডোগ্লাইকান প্রাচীর, বৃত্তাকার নগ্ন DNA ও ফ্ল্যাজেলা',
    chapterSection: 'অধ্যায় ১.৩: রাজ্য মনেরা (পৃষ্ঠা ৬-৭)',
    parts: [
      {
        id: 'flagellum',
        nameBn: 'ফ্ল্যাজেলা (চলন অঙ্গাণু)',
        nameEn: 'Bacterial Flagellum',
        symbol: 'Flag',
        color: '#22c55e',
        roleBn: 'তরল মাধ্যমে সাঁতার কাটা ও খাদ্য বা আলোর দিকে ব্যাকটেরিয়ার দ্রুত গতিশীল চলন (Chemotaxis) নিয়ন্ত্রণ করে।',
        roleEn: 'Provides motility through rotary motor torque powered by proton motive force.',
        structureBn: 'ফ্ল্যাজেলিন (Flagellin) নামক প্রোটিন দ্বারা গঠিত। এতে ব্যাসাল বডি (রোটর), হুক ও দীর্ঘ হেলিক্যাল ফিলামেন্ট থাকে।',
        textbookRefBn: 'মনেরা রাজ্যের জীবদের অন্যতম প্রধান চলনশীল অঙ্গাণু হলো ফ্ল্যাজেলা।',
        coords: { cx: 70, cy: 150, d: 'M 70 150 C 30 140, 15 170, 5 150 S -15 130, -35 150' }
      },
      {
        id: 'capsule_cellwall',
        nameBn: 'ক্যাপসুল ও পেপটিডোগ্লাইকান কোষপ্রাচীর',
        nameEn: 'Capsule & Peptidoglycan Cell Wall',
        symbol: 'Wall',
        color: '#0284c7',
        roleBn: 'ব্যাকটেরিয়াকে শুকিয়ে যাওয়া ও অ্যান্টিবায়োটিক/শ্বেতকণিকার আক্রমণ থেকে রক্ষা করে এবং নির্দিষ্ট আকার দেয়।',
        roleEn: 'Protects from desiccation, phagocytosis and maintains osmotic integrity.',
        structureBn: 'পলিস্যাকারাইড নির্মিত পিচ্ছিল ক্যাপসুল এবং নিচে পেপটিডোগ্লাইকান (মিউরিন) ও পলিস্যাকারাইডের সুদৃঢ় জালিকা।',
        textbookRefBn: 'মনেরা রাজ্যের কোষপ্রাচীর সেলুলোজবিহীন, মূলত পেপটিডোগ্লাইকান দ্বারা গঠিত।',
        coords: { cx: 200, cy: 150, w: 220, h: 100 }
      },
      {
        id: 'nucleoid',
        nameBn: 'নিউক্লিঅয়েড (নগ্ন বৃত্তাকার ডিএনএ)',
        nameEn: 'Prokaryotic Nucleoid DNA',
        symbol: 'DNA',
        color: '#ec4899',
        roleBn: 'ব্যাকটেরিয়ার বংশগতির প্রধান নিয়ন্ত্রক। মেমব্রেনবিহীন অবস্থায় সাইটোপ্লাজমে মুক্তভাবে অবস্থান করে।',
        roleEn: 'Primary circular chromosome governing all metabolic functions and heredity.',
        structureBn: 'হিস্টোন প্রোটিনবিহীন দ্বিসূত্রক বৃত্তাকার সুপারকয়েলড ডিএনএ অণু। কোনো নিউক্লিয়ার পর্দা বা নিউক্লিওলাস নেই।',
        textbookRefBn: 'আদিকোষী জীবের নিউক্লিয়াস সুগঠিত নয়; ক্রোমাটিন বস্তুতে কেবল নগ্ন বৃত্তাকার ডিএনএ থাকে।',
        coords: { cx: 200, cy: 150, r: 35 }
      },
      {
        id: 'plasmid',
        nameBn: 'প্লাজমিড (অতিরিক্ত বৃত্তাকার ডিএনএ)',
        nameEn: 'Circular Plasmid Ring',
        symbol: 'pDNA',
        color: '#38bdf8',
        roleBn: 'অ্যান্টিবায়োটিক প্রতিরোধ ক্ষমতা (R-factor) প্রদান করে এবং জিন প্রকৌশলে প্রধান ক্লোনিং ভেক্টর হিসেবে ব্যবহৃত হয়।',
        roleEn: 'Autonomous extrachromosomal DNA conferring antibiotic resistance.',
        structureBn: 'স্ব-প্রজননশীল ক্ষুদ্র বৃত্তাকার দ্বিসূত্রক ডিএনএ রিং।',
        textbookRefBn: 'রিকম্বিনেন্ট ডিএনএ ও বায়োটেকনোলজির মূল কাঁচামাল হলো ব্যাকটেরিয়ার প্লাজমিড।',
        coords: { cx: 140, cy: 125, r: 15 }
      },
      {
        id: 'ribosome_70s',
        nameBn: '৭০এস (70S) রাইবোসোম',
        nameEn: '70S Ribosomes (50S + 30S)',
        symbol: '70S',
        color: '#facc15',
        roleBn: 'ব্যাকটেরিয়ার সাইটোপ্লাজমে প্রোটিন সংশ্লেষণের একমাত্র অঙ্গাণু।',
        roleEn: 'Translates mRNA into proteins via 50S large and 30S small subunits.',
        structureBn: 'রাইবোজোমাল আরএনএ (rRNA) ও প্রোটিন মিশ্রিত ক্ষুদ্র কণা। ৫০এস ও ৩০এস সাব-ইউনিটের সমন্বয়ে গঠিত।',
        textbookRefBn: 'আদিকোষে মেমব্রেনযুক্ত অঙ্গাণু থাকে না; একমাত্র রাইবোসোম উপস্থিত।',
        coords: { cx: 260, cy: 165, r: 12 }
      }
    ]
  },

  // 2. Protista: Amoeba & Paramecium
  {
    id: 'protista',
    titleBn: '২. প্রোটিস্টা রাজ্য — অ্যামিবার সূক্ষ্ম অঙ্গসংস্থান',
    titleEn: 'Kingdom Protista: Amoeba Proteus Anatomy',
    subtitleBn: 'এককোষী প্রকৃতকোষী (Eukaryotic), ক্ষণপদ (Pseudopodia) ও সংকোচনশীল গহ্বর',
    chapterSection: 'অধ্যায় ১.৩: রাজ্য প্রোটিস্টা (পৃষ্ঠা ৭)',
    parts: [
      {
        id: 'pseudopodia',
        nameBn: 'ক্ষণপদ বা সিউডোপোডিয়া',
        nameEn: 'Pseudopodia (Lobopodia)',
        symbol: 'Pseudo',
        color: '#06b6d4',
        roleBn: 'অ্যামিবার প্রধান চলন অঙ্গাণু এবং খাদ্যকণা (ব্যাকটেরিয়া/শৈবাল) ফ্যাগোসাইটোসিস পদ্ধতিতে আটকে গিলতে সাহায্য করে।',
        roleEn: 'Dynamic finger-like cytoplasmic projections for amoeboid crawling locomotion.',
        structureBn: 'একটোপ্লাজম ও এন্ডোপ্লাজমের সল-জেল (Sol-Gel) রূপান্তরের মাধ্যমে সাময়িক প্রসারিত খাঁজ।',
        textbookRefBn: 'প্রোটিস্টা রাজ্যের অ্যামিবা ক্ষণপদের সাহায্যে খাদ্য গ্রহণ ও স্থান পরিবর্তন করে।',
        coords: { cx: 100, cy: 100, r: 40 }
      },
      {
        id: 'contractile_vacuole',
        nameBn: 'সংকোচনশীল গহ্বর (অসমোরেগুলেশন)',
        nameEn: 'Contractile Vacuole (Water Expulsion)',
        symbol: 'CVac',
        color: '#38bdf8',
        roleBn: 'অভিস্রবণ প্রক্রিয়ায় দেহে প্রবেশ করা অতিরিক্ত পানি জমা করে দেহের বাইরে পাম্প করে বের করে দেয় (অসমোরেগুলেশন)।',
        roleEn: 'Pulsatile organelle regulating internal osmotic pressure by expelling water.',
        structureBn: 'প্লাজমা ঝিল্লিবেষ্টিত স্বচ্ছ পানির গোলাকার থলি, যা চক্রাকারে স্পন্দিত হয়ে সংকুচিত ও প্রসারিত হয়।',
        textbookRefBn: 'অ্যামিবার দেহে অতিরিক্ত পানি নিষ্কাশনের জন্য সংকোচনশীল গহ্বর বিদ্যমান।',
        coords: { cx: 240, cy: 170, r: 24 }
      },
      {
        id: 'nucleus',
        nameBn: 'ইউক্যারিওটিক সুগঠিত নিউক্লিয়াস',
        nameEn: 'True Eukaryotic Nucleus',
        symbol: 'Nuc',
        color: '#ec4899',
        roleBn: 'প্রকৃতকোষী জীবের সকল শারীরবৃত্তীয় ক্রিয়া ও মাইটোসিস/অযৌন বিভাজন নিয়ন্ত্রণ করে।',
        roleEn: 'Double-membrane organelle housing eukaryotic linear chromosomes.',
        structureBn: 'দ্বি-স্তরী নিউক্লিয়ার মেমব্রেন, নিউক্লিওপ্লাজম, নিউক্লিওলাস ও ক্রোমাটিন জালিকাযুক্ত।',
        textbookRefBn: 'প্রোটিস্টা রাজ্যের জীবদের কোষে সুগঠিত নিউক্লিয়াস ও মেমব্রেনযুক্ত অঙ্গাণু থাকে।',
        coords: { cx: 170, cy: 130, r: 28 }
      },
      {
        id: 'food_vacuole',
        nameBn: 'খাদ্য গহ্বর (Food Vacuole)',
        nameEn: 'Food Vacuole (Phagosome)',
        symbol: 'FVac',
        color: '#84cc16',
        roleBn: 'গৃহীত খাদ্যকণা এনজাইম ক্ষরণ করে পরিপাক করে এবং অপাচ্য অংশ বাইরে ত্যাগ করে।',
        roleEn: 'Intracellular digestion vesicle fusing with lysosomes.',
        structureBn: 'খাদ্য ও পাচক রসে পূর্ণ সাইটোপ্লাজমীয় গহ্বর।',
        textbookRefBn: 'অ্যামিবার খাদ্য পরিপাক অন্তঃকোষীয় খাদ্য গহ্বরে ঘটে।',
        coords: { cx: 180, cy: 195, r: 18 }
      }
    ]
  },

  // 3. Fungi: Mushroom (Agaricus)
  {
    id: 'fungi',
    titleBn: '৩. ফানজাই রাজ্য — মাশরুম (অ্যাগারিকাস)-এর অঙ্গসংস্থান',
    titleEn: 'Kingdom Fungi: Agaricus Mushroom Anatomy',
    subtitleBn: 'কাইটিন প্রাচীরযুক্ত মৃতজীবী ছত্রাক, পাইলিয়াস ছাতা, গিল ও স্পোর',
    chapterSection: 'অধ্যায় ১.৩: রাজ্য ফানজাই (পৃষ্ঠা ৭-৮)',
    parts: [
      {
        id: 'pileus',
        nameBn: 'পাইলিয়াস বা ছত্রাক ছাতা (Cap)',
        nameEn: 'Pileus (Mushroom Cap)',
        symbol: 'Cap',
        color: '#a855f7',
        roleBn: 'ছত্রাকের প্রজননশীল স্পোরগুলোকে রোদ, বৃষ্টি ও আঘাত থেকে ছাতার মতো ঢেকে সুরক্ষা দেয়।',
        roleEn: 'Broad umbrella-shaped cap protecting reproductive spore-forming tissues.',
        structureBn: 'ঠাসাঠাসি সুবিন্যস্ত ছত্রাক হাইফা জালিকা দ্বারা নির্মিত মাংসল উত্তল ছাতা।',
        textbookRefBn: 'ফানজাই রাজ্যের উন্নত ছত্রাক যেমন অ্যাগারিকাসে পাইলিয়াস বা ছাতার মতো গঠন থাকে।',
        coords: { cx: 200, cy: 80, w: 200, h: 70 }
      },
      {
        id: 'gills',
        nameBn: 'গিল বা ল্যামেলা (স্পোর উৎপাদন স্তর)',
        nameEn: 'Gills / Lamellae with Basidiospores',
        symbol: 'Gill',
        color: '#c084fc',
        roleBn: 'ছাতার নিচে অবস্থিত অসংখ্য পাতলা পাঁপড়ি, যার গায়ে লক্ষ লক্ষ ব্যাসিডিওস্পোর তৈরি ও বাতাসে মুক্ত হয়।',
        roleEn: 'Radial spore-bearing plates maximizing surface area for basidiospores.',
        structureBn: 'পাইলিয়াসের তলদেশে বৃত্তাকারে বিন্যস্ত অসংখ্য উল্লম্ব দ্বি-পার্শ্বীয় স্তর।',
        textbookRefBn: 'ছত্রাক হ্যাপ্লয়েড স্পোর উৎপাদনের মাধ্যমে বংশবৃদ্ধি করে।',
        coords: { cx: 200, cy: 125, w: 180, h: 25 }
      },
      {
        id: 'annulus',
        nameBn: 'অ্যানুলাস বা বলয় (Annulus Ring)',
        nameEn: 'Annulus / Membranous Collar',
        symbol: 'Ring',
        color: '#facc15',
        roleBn: 'তরুণাবস্থায় গিলগুলোকে ঢেকে রাখা পর্দার অবশিষ্টাংশ, যা কাণ্ডের গায়ে আংটির মতো দৃশ্যমান থাকে।',
        roleEn: 'Remnant ring of partial veil left around the mushroom stalk.',
        structureBn: 'স্টাইপের মাঝামাঝি অংশে বলয়াকার পাতলা ঝিল্লিময় কলার।',
        textbookRefBn: 'অ্যাগারিকাস মাশরুমের কাণ্ডের উপরিভাগে অ্যানুলাস বা আংটি বিদ্যমান।',
        coords: { cx: 200, cy: 165, w: 60, h: 18 }
      },
      {
        id: 'stipe',
        nameBn: 'স্টাইপ বা বোঁটা (Mushroom Stem)',
        nameEn: 'Stipe / Stalk',
        symbol: 'Stipe',
        color: '#f1f5f9',
        roleBn: 'পাইলিয়াস ও গিলকে মাটি বা স্তর থেকে উঁচুতে তুলে ধরে যাতে স্পোরগুলো বাতাসে সহজে ছড়িয়ে পড়ে।',
        roleEn: 'Supporting cylindrical stem elevating cap for optimal wind spore dispersal.',
        structureBn: 'উল্লম্বভাবে ঘনবিন্যস্ত কাইটিন প্রাচীরযুক্ত সুতাকার হাইফা দণ্ড।',
        textbookRefBn: 'মাশরুমের ছাতাটি যে খাড়া বোঁটার ওপর দাঁড়িয়ে থাকে তাকে স্টাইপ বলে।',
        coords: { cx: 200, cy: 210, w: 35, h: 80 }
      },
      {
        id: 'mycelium',
        nameBn: 'মাইসেলিয়াম ও হাইফা (ছত্রাকজালিকা)',
        nameEn: 'Subterranean Mycelium & Hyphae',
        symbol: 'Myc',
        color: '#22c55e',
        roleBn: 'মাটি বা গলিত জৈব বস্তু থেকে বহিঃকোষীয় এনজাইম ক্ষরণ করে পুষ্টিরস শোষণ করে।',
        roleEn: 'Extensive vegetative hypha network absorbing decomposed nutrients.',
        structureBn: 'কাইটিন প্রাচীরযুক্ত শাখান্বিত সুতার মতো জটলাকার হাইফা পুঞ্জ।',
        textbookRefBn: 'ছত্রাকের দেহ সাধারণত সুতাকার মাইসেলিয়াম দ্বারা গঠিত; এরা মৃতজীবী বা পরজীবী।',
        coords: { cx: 200, cy: 275, w: 120, h: 35 }
      }
    ]
  },

  // 4. Plantae: Chloroplast & Cell
  {
    id: 'plantae',
    titleBn: '৪. প্লান্টি রাজ্য — উদ্ভিদকোষ ও ক্লোরোপ্লাস্টের গঠন',
    titleEn: 'Kingdom Plantae: Plant Cell & Chloroplast',
    subtitleBn: 'সেলুলোজ প্রাচীর, প্লাস্টিড, থাইলাকয়েড ও সালোকসংশ্লেষণ অঙ্গাণু',
    chapterSection: 'অধ্যায় ১.৩: রাজ্য প্লান্টি (পৃষ্ঠা ৮)',
    parts: [
      {
        id: 'cellwall',
        nameBn: 'সেলুলোজ কোষপ্রাচীর (Cell Wall)',
        nameEn: 'Cellulose Cell Wall',
        symbol: 'Wall',
        color: '#16a34a',
        roleBn: 'উদ্ভিদকোষকে অনমনীয় যান্ত্রিক শক্তি প্রদান করে এবং স্ফীতি চাপ (Turgor pressure) নিয়ন্ত্রণ করে।',
        roleEn: 'Rigid polysaccharide boundary providing mechanical structure and protection.',
        structureBn: 'সেলুলোজ, হেমিসেলুলোজ ও পেকটিন নির্মিত সুদৃঢ় জড় প্রাচীর।',
        textbookRefBn: 'প্লান্টি রাজ্যের উন্নত উদ্ভিদকোষের প্রধান বৈশিষ্ট্য সেলুলোজ নির্মিত কোষপ্রাচীর।',
        coords: { cx: 200, cy: 150, w: 260, h: 180 }
      },
      {
        id: 'chloroplast',
        nameBn: 'ক্লোরোপ্লাস্ট ও গ্রানা (খাদ্য কারখানা)',
        nameEn: 'Chloroplast with Grana Stacks',
        symbol: 'Chl',
        color: '#22c55e',
        roleBn: 'সৌরশক্তি শোষণ করে পানি ও কার্বন ডাই-অক্সাইড থেকে গ্লুকোজ শর্করা ও অক্সিজেন উৎপাদন করে।',
        roleEn: 'Photosynthetic organelle converting solar photons into chemical glucose energy.',
        structureBn: 'দ্বি-স্তরী ঝিল্লি, স্ট্রোমা ম্যাট্রিক্স এবং চাকতির মতো থাইলাকয়েডের স্তূপ (গ্রানাম)।',
        textbookRefBn: 'উদ্ভিদ সালোকসংশ্লেষণকারী স্বভোজী জীব; এদের কোষে ক্লোরোপ্লাস্ট বিদ্যমান।',
        coords: { cx: 250, cy: 120, r: 35 }
      },
      {
        id: 'vacuole',
        nameBn: 'বৃহৎ কেন্দ্রীয় কোষগহ্বর (Central Vacuole)',
        nameEn: 'Large Central Vacuole & Tonoplast',
        symbol: 'Vac',
        color: '#38bdf8',
        roleBn: 'পানি ও কোষরস জমা রেখে কোষের আকৃতি ও অভিস্রবণিক স্ফীতি বজায় রাখে।',
        roleEn: 'Stores cell sap, maintains turgidity, and regulates cellular hydrostatic pressure.',
        structureBn: 'টোনোপ্লাস্ট (Tonoplast) ঝিল্লি দ্বারা বেষ্টিত বিশাল তরলপূর্ণ গহ্বর।',
        textbookRefBn: 'পরিণত উদ্ভিদকোষে কেন্দ্রভাগে একটি বিশাল কোষগহ্বর থাকে।',
        coords: { cx: 160, cy: 160, w: 80, h: 90 }
      }
    ]
  },

  // 5. Animalia: Animal Cell
  {
    id: 'animalia',
    titleBn: '৫. অ্যানিম্যালিয়া রাজ্য — প্রাণিকোষ ও অঙ্গসংস্থান',
    titleEn: 'Kingdom Animalia: Multicellular Animal Cell',
    subtitleBn: 'কোষপ্রাচীরবিহীন হলোজোয়িক কোষ, সেন্ট্রোসোম ও উন্নত টিস্যুতন্ত্র',
    chapterSection: 'অধ্যায় ১.৩: রাজ্য অ্যানিম্যালিয়া (পৃষ্ঠা ৮-৯)',
    parts: [
      {
        id: 'membrane',
        nameBn: 'নমনীয় কোষঝিল্লি (কোষপ্রাচীর নেই)',
        nameEn: 'Flexible Cell Membrane (No Cell Wall)',
        symbol: 'Mem',
        color: '#ef4444',
        roleBn: 'কোষের অভ্যন্তরীণ উপাদানের সুরক্ষা এবং পুষ্টি উপাদান বিনিময়ে নিয়ন্ত্রিত ভেদ্যতা প্রদান করে।',
        roleEn: 'Flexible lipid bilayer boundary without any rigid cellulose cell wall.',
        structureBn: 'ফসফোলিপিড বাইলেয়ার ও গ্লাইকোপ্রোটিন নির্মিত ফ্লুইড মোজাইক ঝিল্লি।',
        textbookRefBn: 'অ্যানিম্যালিয়া রাজ্যের কোষে কোনো কোষপ্রাচীর বা প্লাস্টিড থাকে না।',
        coords: { cx: 200, cy: 150, r: 100 }
      },
      {
        id: 'centrosome',
        nameBn: 'সেন্ট্রোসোম ও সেন্ট্রিওল (বিভাজন অঙ্গাণু)',
        nameEn: 'Centrosome with Centriole Barrel Pair',
        symbol: 'Centro',
        color: '#facc15',
        roleBn: 'কোষ বিভাজনের সময় অ্যাস্টার রে ও স্পিন্ডল যন্ত্র তৈরি করে ক্রোমোজোম পৃথক করে।',
        roleEn: 'Organizes mitotic spindle fibers during somatic eukaryotic cell division.',
        structureBn: 'পরস্পর সমকোণে থাকা দুটি নলাকার সেন্ট্রিওল, যা ৯টি মাইক্রোটিউবিউল ট্রিপলেট দিয়ে গঠিত।',
        textbookRefBn: 'প্রাণিকোষের অনন্য বৈশিষ্ট্য হলো এতে সেন্ট্রোসোম উপস্থিত থাকে।',
        coords: { cx: 245, cy: 110, r: 20 }
      },
      {
        id: 'mitochondria',
        nameBn: 'মাইটোকন্ড্রিয়া (শক্তি উৎপাদন কেন্দ্র)',
        nameEn: 'Mitochondria (Cellular Powerhouse)',
        symbol: 'Mito',
        color: '#f97316',
        roleBn: 'সবাত শ্বসনে ক্রেবস চক্র ও ইলেকট্রন প্রবাহতন্ত্রের মাধ্যমে ATP শক্তি তৈরি করে।',
        roleEn: 'Generates cellular ATP currency through aerobic oxidative phosphorylation.',
        structureBn: 'ক্রিস্টি ভাঁজযুক্ত অন্তঃপর্দা ও ম্যাট্রিক্স সম্বলিত ক্যাপসুল সদৃশ অঙ্গাণু।',
        textbookRefBn: 'প্রাণিকোষের শক্তির প্রধান উৎস মাইটোকন্ড্রিয়া।',
        coords: { cx: 150, cy: 190, w: 40, h: 25 }
      }
    ]
  },

  // 6. Taxonomic Hierarchy Pyramid
  {
    id: 'taxonomy',
    titleBn: '৬. ট্যাক্সনমিক স্তরক্রম — শ্রেণিবিন্যাসের ৭টি ধাপ',
    titleEn: 'Taxonomic Hierarchy: Kingdom to Species',
    subtitleBn: 'ক্যারোলাস লিনিয়াসের ৭টি ট্যাক্সনমিক একক ও মানুষের শ্রেণিবিন্যাস',
    chapterSection: 'অধ্যায় ১.৪: শ্রেণিবিন্যাসের ধাপ (পৃষ্ঠা ৯-১০)',
    parts: [
      {
        id: 'kingdom',
        nameBn: '১. রাজ্য (Kingdom)',
        nameEn: 'Kingdom: Animalia',
        symbol: 'K',
        color: '#3b82f6',
        roleBn: 'শ্রেণিবিন্যাসের সর্বোচ্চ ক্যাটাগরি; যেমন প্রাণিজগৎ (Animalia)।',
        roleEn: 'Broadest rank uniting all multicellular heterotrophs.',
        structureBn: 'সর্বাধিক জীবগোষ্ঠী অন্তর্ভুক্ত থাকে।',
        textbookRefBn: 'ট্যাক্সনমিক হায়ারার্কির সর্বোচ্চ ধাপ হলো রাজ্য।',
        coords: { cx: 200, cy: 260, w: 280, h: 30 }
      },
      {
        id: 'phylum',
        nameBn: '২. পর্ব (Phylum)',
        nameEn: 'Phylum: Chordata',
        symbol: 'P',
        color: '#06b6d4',
        roleBn: 'নটোকর্ড ও মেরুদণ্ডী বৈশিষ্ট্যের ভিত্তিতে যেমন কর্ডাটা (Chordata)।',
        roleEn: 'Organisms sharing a notochord and dorsal nerve cord.',
        structureBn: 'এক বা একাধিক সংশ্লিষ্ট শ্রেণির সমন্বয়ে গঠিত।',
        textbookRefBn: 'মানুষের পর্ব হলো Chordata (কর্ডাটা)।',
        coords: { cx: 200, cy: 225, w: 240, h: 30 }
      },
      {
        id: 'class',
        nameBn: '৩. শ্রেণি (Class)',
        nameEn: 'Class: Mammalia',
        symbol: 'C',
        color: '#10b981',
        roleBn: 'স্তনপায়ী ও সন্তান প্রসবকারী প্রাণী; যেমন স্তন্যপায়ী (Mammalia)।',
        roleEn: 'Warm-blooded vertebrates nursing young with milk.',
        structureBn: 'সম্পর্কযুক্ত বর্গসমূহের মিলনস্থল।',
        textbookRefBn: 'মানুষ Mammalia শ্রেণির অন্তর্ভুক্ত।',
        coords: { cx: 200, cy: 190, w: 200, h: 30 }
      },
      {
        id: 'order',
        nameBn: '৪. বর্গ (Order)',
        nameEn: 'Order: Primates',
        symbol: 'O',
        color: '#84cc16',
        roleBn: 'আঁকড়ে ধরার হাত ও উন্নত দৃষ্টিযুক্ত প্রাণী; যেমন প্রাইমেটস (Primates)।',
        roleEn: 'High brain development and grasping hands.',
        structureBn: 'ঘনিষ্ঠ গোত্রগুলোর সমাহার।',
        textbookRefBn: 'মানুষ Primates বর্গের সদস্য।',
        coords: { cx: 200, cy: 155, w: 160, h: 30 }
      },
      {
        id: 'family',
        nameBn: '৫. গোত্র (Family)',
        nameEn: 'Family: Hominidae',
        symbol: 'F',
        color: '#facc15',
        roleBn: 'হোমিনিডি বা নরবানর ও মানুষের পূর্বপুরুষীয় শাখা।',
        roleEn: 'Bipedal hominids and great apes.',
        structureBn: 'সাদৃশ্যপূর্ণ এক বা একাধিক গণের সমন্বয়।',
        textbookRefBn: 'মানুষের গোত্র Hominidae।',
        coords: { cx: 200, cy: 120, w: 120, h: 30 }
      },
      {
        id: 'genus',
        nameBn: '৬. গণ (Genus)',
        nameEn: 'Genus: Homo',
        symbol: 'G',
        color: '#f97316',
        roleBn: 'দ্বিপদ নামকরণের ১ম পদ; যেমন হোমো (Homo)।',
        roleEn: 'Upright walking hominin toolmakers.',
        structureBn: 'অতি ঘনিষ্ঠ একাধিক প্রজাতির সাধারণ বংশধারা।',
        textbookRefBn: 'মানুষের গণ হলো Homo।',
        coords: { cx: 200, cy: 85, w: 80, h: 30 }
      },
      {
        id: 'species',
        nameBn: '৭. প্রজাতি (Species)',
        nameEn: 'Species: Homo sapiens',
        symbol: 'Sp',
        color: '#ef4444',
        roleBn: 'শ্রেণিবিন্যাসের ক্ষুদ্রতম ও মৌলিক একক; যেমন হোমো স্যাপিয়েন্স (Homo sapiens)।',
        roleEn: 'Fundamental biological reproductive unit capable of interbreeding.',
        structureBn: 'প্রাকৃতিক পরিবেশে অবাধ প্রজননে উর্বর সন্তান জন্মদানে সক্ষম।',
        textbookRefBn: 'শ্রেণিবিন্যাসের সবচেয়ে মৌলিক ও কার্যকরী একক হলো প্রজাতি।',
        coords: { cx: 200, cy: 50, w: 45, h: 30 }
      }
    ]
  },

  // 7. Whittaker's 5 Kingdoms
  {
    id: 'fiveKingdoms',
    titleBn: '৭. হুইটেকারের পঞ্চরাজ্য শ্রেণিবিন্যাস কাঠামো',
    titleEn: 'Whittaker & Margulis: Five Kingdoms Tree',
    subtitleBn: 'প্রোক্যারিওটা (মনেরা) ও ইউক্যারিওটা (প্রোটিস্টা, ফানজাই, প্লান্টি, অ্যানিম্যালিয়া)',
    chapterSection: 'অধ্যায় ১.৩: পঞ্চরাজ্য শ্রেণিবিন্যাস (পৃষ্ঠা ৫-৬)',
    parts: [
      {
        id: 'monera',
        nameBn: 'রাজ্য ১: মনেরা (Monera)',
        nameEn: 'Kingdom Monera',
        symbol: 'Mon',
        color: '#38bdf8',
        roleBn: 'আদিকোষী অনুজীব; উদাহরণ: ব্যাকটেরিয়া (E. coli), নীলাভ-সবুজ শৈবাল (Nostoc)।',
        roleEn: 'Prokaryotes lacking a membrane-bound true nucleus.',
        structureBn: 'এককোষী, পেপটিডোগ্লাইকান প্রাচীর, শোষণ বা ফটোসিন্থেটিক পুষ্টি।',
        textbookRefBn: 'সুপার কিংডম ১ এর একমাত্র রাজ্য হলো মনেরা।',
        coords: { cx: 100, cy: 220, r: 35 }
      },
      {
        id: 'protista',
        nameBn: 'রাজ্য ২: প্রোটিস্টা (Protista)',
        nameEn: 'Kingdom Protista',
        symbol: 'Prot',
        color: '#f59e0b',
        roleBn: 'এককোষী প্রকৃতকোষী; উদাহরণ: অ্যামিবা (Amoeba), প্যারামেসিয়াম, ডায়াটম।',
        roleEn: 'Single-celled eukaryotes with complex organelles.',
        structureBn: 'সুগঠিত নিউক্লিয়াস ও অঙ্গাণুবিশিষ্ট, কোনো জটিল টিস্যুতন্ত্র নেই।',
        textbookRefBn: 'প্রোটিস্টা রাজ্যের জীবরা এককোষী হলেও সুগঠিত নিউক্লিয়াসযুক্ত।',
        coords: { cx: 160, cy: 140, r: 32 }
      },
      {
        id: 'fungi',
        nameBn: 'রাজ্য ৩: ফানজাই (Fungi)',
        nameEn: 'Kingdom Fungi',
        symbol: 'Fung',
        color: '#a855f7',
        roleBn: 'ক্লোরোপ্লাস্টবিহীন মৃতজীবী/পরজীবী ছত্রাক; উদাহরণ: ইস্ট, মাশরুম, পেনিসিলিয়াম।',
        roleEn: 'Heterotrophic chitinous decomposers reproducing via spores.',
        structureBn: 'কাইটিন প্রাচীর, সুতাকার মাইসেলিয়াম ও স্পোর উৎপাদন।',
        textbookRefBn: 'ফানজাই রাজ্যের সঞ্চিত খাদ্য গ্লাইকোজেন, কোষে ক্লোরোপ্লাস্ট নেই।',
        coords: { cx: 230, cy: 110, r: 32 }
      },
      {
        id: 'plantae',
        nameBn: 'রাজ্য ৪: প্লান্টি (Plantae)',
        nameEn: 'Kingdom Plantae',
        symbol: 'Plan',
        color: '#22c55e',
        roleBn: 'সালোকসংশ্লেষণকারী স্বভোজী উদ্ভিদ; উদাহরণ: স্পাইরোগাইরা, ফার্ন, আম, ধান।',
        roleEn: 'Multicellular photosynthetic autotrophs with cellulose walls.',
        structureBn: 'সেলুলোজ প্রাচীর, ক্লোরোপ্লাস্ট ও উন্নত টিস্যুতন্ত্র বিশিষ্ট।',
        textbookRefBn: 'উদ্ভিদজগৎ সূর্যের আলো ব্যবহার করে শর্করা খাদ্য প্রস্তুত করে।',
        coords: { cx: 300, cy: 130, r: 34 }
      },
      {
        id: 'animalia',
        nameBn: 'রাজ্য ৫: অ্যানিম্যালিয়া (Animalia)',
        nameEn: 'Kingdom Animalia',
        symbol: 'Anim',
        color: '#ef4444',
        roleBn: 'বহুকোষী পরভোজী প্রাণী; উদাহরণ: মাছ, বাঘ, দোয়েল, মানুষ।',
        roleEn: 'Multicellular heterotrophs with nervous systems and mobility.',
        structureBn: 'কোষপ্রাচীর ও প্লাস্টিডবিহীন হলোজোয়িক প্রাণী।',
        textbookRefBn: 'অ্যানিম্যালিয়া রাজ্যের প্রাণীরা পরভোজী ও সাধারণত লোকোমোশনে সক্ষম।',
        coords: { cx: 330, cy: 210, r: 35 }
      }
    ]
  },

  // 8. Binomial Nomenclature
  {
    id: 'binomial',
    titleBn: '৮. দ্বিপদ নামকরণের পদ্ধতি ও সার্বজনীন নিয়মাবলী',
    titleEn: 'Binomial Nomenclature: ICBN / ICZN Code',
    subtitleBn: 'ক্যারোলাস লিনিয়াসের বৈজ্ঞানিক নামকরণের নিয়ম ও আন্তর্জাতিক মানদণ্ড',
    chapterSection: 'অধ্যায় ১.৫: দ্বিপদ নামকরণ (পৃষ্ঠা ১০-১১)',
    parts: [
      {
        id: 'genus',
        nameBn: '১ম পদ: গণ নাম (Genus Name)',
        nameEn: 'Generic Name (Capital Initial)',
        symbol: 'Genus',
        color: '#38bdf8',
        roleBn: 'নামের প্রথম অংশ, যা সর্বদা বড় হাতের অক্ষর (Capital letter) দিয়ে শুরু হয়।',
        roleEn: 'Capitalized generic designation (e.g. Homo, Panthera, Oryza).',
        structureBn: 'ল্যাটিন বিশেষ্য পদ।',
        textbookRefBn: 'দ্বিপদ নামের প্রথম পদটি গণ নাম এবং তা বড় হাতের অক্ষরে শুরু হয়।',
        coords: { cx: 130, cy: 130, w: 120, h: 45 }
      },
      {
        id: 'species',
        nameBn: '২য় পদ: প্রজাতি পদ (Specific Epithet)',
        nameEn: 'Specific Epithet (Small Letters)',
        symbol: 'Spec',
        color: '#34d399',
        roleBn: 'নামের দ্বিতীয় অংশ, যা সর্বদা ছোট হাতের অক্ষর (Small letters) দিয়ে লেখা হয়।',
        roleEn: 'Lower-case species qualifier (e.g. sapiens, tigris, sativa).',
        structureBn: 'ল্যাটিন বিশেষণ পদ।',
        textbookRefBn: 'দ্বিপদ নামের দ্বিতীয় পদটি প্রজাতি নির্দেশক এবং ছোট অক্ষরে লেখা হয়।',
        coords: { cx: 270, cy: 130, w: 120, h: 45 }
      },
      {
        id: 'underlining',
        nameBn: 'ইটালিক্স মুদ্রণ বা আলাদা আন্ডারলাইন',
        nameEn: 'Italicized Print or Separate Underlines',
        symbol: 'Ital',
        color: '#facc15',
        roleBn: 'ছাপার অক্ষরে বাঁকা (Italic) বা হাতে লিখলে পদ দুটির নিচে পৃথক দাগ টানতে হবে।',
        roleEn: 'Italicized typography or distinct separate underlining for each word.',
        structureBn: 'যেমন: <u>Homo</u> <u>sapiens</u> বা <i>Homo sapiens</i>।',
        textbookRefBn: 'মুদ্রণের ক্ষেত্রে ইটালিক হরফে এবং হাতে লিখলে আলাদা দাগ দিতে হয়।',
        coords: { cx: 200, cy: 185, w: 260, h: 18 }
      }
    ]
  }
];

interface BiologyChapter1DiagramStudioProps {
  initialTopicId?: string;
  onSelectPart?: (partId: string) => void;
}

export const BiologyChapter1DiagramStudio: React.FC<BiologyChapter1DiagramStudioProps> = ({
  initialTopicId = 'monera',
  onSelectPart
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(initialTopicId);
  const [activePartId, setActivePartId] = useState<string | null>('flagellum');
  const [isIsolated3D, setIsIsolated3D] = useState<boolean>(true);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<'split' | '2d' | '3d'>('split');
  const [detailTab, setDetailTab] = useState<'function' | 'structure' | 'textbook'>('function');
  const [showPartLabels, setShowPartLabels] = useState<boolean>(false);
  const [showHotspotPins, setShowHotspotPins] = useState<boolean>(true);
  const [hoveredPartId, setHoveredPartId] = useState<string | null>(null);

  const currentTopic = CHAPTER1_TEXTBOOK_DIAGRAMS.find(t => t.id === selectedTopicId) || CHAPTER1_TEXTBOOK_DIAGRAMS[0];
  const activePart = currentTopic.parts.find(p => p.id === activePartId) || currentTopic.parts[0];

  // 3D Canvas Refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const sceneRefsRef = useRef<any>({});
  const animFrameIdRef = useRef<number | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const prevPointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Handle part selection
  const handlePartClick = (part: DiagramPartInfo) => {
    setActivePartId(part.id);
    if (onSelectPart) onSelectPart(part.id);
  };

  // Build / update 3D scene when topic or part changes
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const width = canvas.clientWidth || 400;
    const height = canvas.clientHeight || 340;

    // Initialize Three.js scene once
    if (!sceneRef.current) {
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 7.5);
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current = renderer;

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
      scene.add(ambientLight);

      const dirLight1 = new THREE.DirectionalLight(0x38bdf8, 1.8);
      dirLight1.position.set(5, 8, 5);
      scene.add(dirLight1);

      const dirLight2 = new THREE.DirectionalLight(0xec4899, 1.2);
      dirLight2.position.set(-5, -6, -3);
      scene.add(dirLight2);

      const group = new THREE.Group();
      scene.add(group);
      modelGroupRef.current = group;
    }

    // Rebuild 3D model for current topic & part
    if (modelGroupRef.current) {
      sceneRefsRef.current = {};
      buildBiologyCh1Part3D(
        selectedTopicId,
        activePart?.id,
        isIsolated3D,
        modelGroupRef.current,
        sceneRefsRef.current
      );
    }

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (autoRotate && modelGroupRef.current && !isDraggingRef.current) {
        modelGroupRef.current.rotation.y += 0.008;
      }

      updateBiologyCh1Part3DPhysics({
        time: elapsedTime,
        animate: true,
        wireframe: false,
        topicId: selectedTopicId,
        partId: activePart?.id,
        refs: sceneRefsRef.current
      });

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    animate();

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [selectedTopicId, activePartId, isIsolated3D, autoRotate]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current || !rendererRef.current || !cameraRef.current) return;
      const width = canvasRef.current.clientWidth;
      const height = canvasRef.current.clientHeight;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Pointer drag controls for 3D
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    prevPointerRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !modelGroupRef.current) return;
    const deltaX = e.clientX - prevPointerRef.current.x;
    const deltaY = e.clientY - prevPointerRef.current.y;
    modelGroupRef.current.rotation.y += deltaX * 0.01;
    modelGroupRef.current.rotation.x += deltaY * 0.01;
    prevPointerRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!cameraRef.current) return;
    cameraRef.current.position.z = THREE.MathUtils.clamp(
      cameraRef.current.position.z + e.deltaY * 0.008,
      4,
      14
    );
  };

  const resetCamera = () => {
    if (!cameraRef.current || !modelGroupRef.current) return;
    cameraRef.current.position.set(0, 0, 7.5);
    modelGroupRef.current.rotation.set(0, 0, 0);
  };

  return (
    <div className="w-full bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden select-none">
      {/* Top Header Bar */}
      <div className="p-4 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-cyan-950/60 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
            <Dna className="h-4 w-4" />
            <span>জীববিজ্ঞান ১ম অধ্যায় পাঠ্যবই ডায়াগ্রাম ল্যাব</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px]">
              {currentTopic.chapterSection}
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-white flex items-center gap-2">
            <span>{currentTopic.titleBn}</span>
            <span className="text-xs text-slate-400 font-normal hidden md:inline">({currentTopic.titleEn})</span>
          </h2>
          <p className="text-xs text-slate-300 mt-0.5">{currentTopic.subtitleBn}</p>
        </div>

        {/* View Mode & Topic Controls */}
        <div className="flex items-center gap-2">
          <div className="flex items-center p-1 bg-slate-900 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setViewMode('split')}
              className={`px-2.5 py-1 rounded-lg font-bold transition flex items-center gap-1 ${
                viewMode === 'split' ? 'bg-emerald-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
              title="২ডি ডায়াগ্রাম ও ৩ডি মডেল একসাথে দেখুন"
            >
              <Split className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">স্প্লিট ভিউ</span>
            </button>
            <button
              onClick={() => setViewMode('2d')}
              className={`px-2.5 py-1 rounded-lg font-bold transition flex items-center gap-1 ${
                viewMode === '2d' ? 'bg-emerald-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
              title="শুধুমাত্র ২ডি ডায়াগ্রাম দেখুন"
            >
              <Square className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">২ডি চিত্র</span>
            </button>
            <button
              onClick={() => setViewMode('3d')}
              className={`px-2.5 py-1 rounded-lg font-bold transition flex items-center gap-1 ${
                viewMode === '3d' ? 'bg-emerald-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
              title="শুধুমাত্র ৩ডি ভিউ দেখুন"
            >
              <Box className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">৩ডি মডেল</span>
            </button>
          </div>
        </div>
      </div>

      {/* Topic Switcher Pills */}
      <div className="px-4 py-2 bg-slate-900/80 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-[11px] font-bold text-slate-400 shrink-0 uppercase tracking-wider">
          পাঠ্যবইয়ের চিত্র নির্বাচন:
        </span>
        {CHAPTER1_TEXTBOOK_DIAGRAMS.map((topic) => {
          const isSelected = selectedTopicId === topic.id;
          return (
            <button
              key={topic.id}
              onClick={() => {
                setSelectedTopicId(topic.id);
                setActivePartId(topic.parts[0]?.id || null);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all shrink-0 border ${
                isSelected
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold border-emerald-400 shadow-md scale-105'
                  : 'bg-slate-950/60 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {topic.titleBn.split('—')[0]}
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage */}
      <div className={`grid ${viewMode === 'split' ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1'} min-h-[460px]`}>
        {/* LEFT: 2D Interactive Diagram Area */}
        {(viewMode === 'split' || viewMode === '2d') && (
          <div className={`${viewMode === 'split' ? 'lg:col-span-7 border-b lg:border-b-0 lg:border-r border-slate-800' : 'w-full'} p-4 flex flex-col justify-between bg-slate-950 relative`}>
            <div>
              <div className="flex flex-wrap items-center justify-between mb-2 gap-2 text-xs">
                <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ইন্টারেক্টিভ ২ডি চিত্র</span>
                  <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">(অংশে ক্লিক করলেই ৩ডি তৈরি হবে)</span>
                </span>

                <div className="flex items-center gap-1.5">
                  {/* Toggle Labels */}
                  <button
                    onClick={() => setShowPartLabels(prev => !prev)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition flex items-center gap-1.5 ${
                      showPartLabels
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-sm'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                    }`}
                    title={showPartLabels ? 'লেবেল নাম টেক্সট বন্ধ করুন' : 'লেবেল নাম টেক্সট দেখুন'}
                  >
                    {showPartLabels ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                    <span>{showPartLabels ? 'লেবেল বন্ধ' : 'লেবেল অন'}</span>
                  </button>

                  {/* Toggle Hotspot Pins */}
                  <button
                    onClick={() => setShowHotspotPins(prev => !prev)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition flex items-center gap-1.5 ${
                      showHotspotPins
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                    }`}
                    title={showHotspotPins ? 'পিন হটস্পট লুকান' : 'পিন হটস্পট দেখুন'}
                  >
                    <Layers className="h-3 w-3" />
                    <span>{showHotspotPins ? 'পিন অন' : 'পিন অফ'}</span>
                  </button>

                  <span className="text-[10px] text-slate-500 font-mono hidden md:inline">
                    {currentTopic.parts.length} টি অংশ
                  </span>
                </div>
              </div>

              {/* Interactive SVG Diagram Box */}
              <div className="relative w-full aspect-[4/3] max-h-[360px] bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-center p-2 overflow-hidden shadow-inner">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full select-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="gradBac" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0369a1" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient id="gradAmoeba" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0891b2" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#155e75" stopOpacity="0.85" />
                    </linearGradient>
                    <linearGradient id="gradPlant" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#15803d" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#14532d" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>

                  {/* Visual Background Graphics based on Topic */}
                  {selectedTopicId === 'scope' && (
                    <g>
                      {/* Central Protoplasmic Orb */}
                      <circle cx="200" cy="150" r="45" fill="#06b6d4" opacity="0.4" stroke="#22d3ee" strokeWidth="2.5" />
                      <circle cx="200" cy="150" r="30" fill="#0891b2" opacity="0.6" />
                      <text x="200" y="154" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Bios (জীবন)</text>

                      {/* DNA Helix representation on left */}
                      <path d="M 100 80 Q 120 120 100 160 T 100 220" fill="none" stroke="#ec4899" strokeWidth="4" />
                      <path d="M 100 80 Q 80 120 100 160 T 100 220" fill="none" stroke="#38bdf8" strokeWidth="4" />
                      <line x1="85" y1="120" x2="115" y2="120" stroke="#facc15" strokeWidth="2" />
                      <line x1="85" y1="160" x2="115" y2="160" stroke="#22c55e" strokeWidth="2" />

                      {/* Logos knowledge ring on right */}
                      <circle cx="300" cy="120" r="32" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeDasharray="5 3" />
                      <text x="300" y="124" textAnchor="middle" fill="#c084fc" fontSize="11" fontWeight="bold">Logos (জ্ঞান)</text>

                      {/* Connecting discourse lines */}
                      <line x1="130" y1="135" x2="160" y2="145" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />
                      <line x1="245" y1="145" x2="270" y2="130" stroke="#64748b" strokeWidth="2" strokeDasharray="3 3" />
                    </g>
                  )}

                  {selectedTopicId === 'branches' && (
                    <g>
                      {/* Leaf Morphology on Left */}
                      <path d="M 110 100 Q 140 140 110 190 Q 80 140 110 100 Z" fill="#15803d" stroke="#4ade80" strokeWidth="2.5" opacity="0.8" />
                      <line x1="110" y1="100" x2="110" y2="200" stroke="#86efac" strokeWidth="2" />

                      {/* Compound Microscope in Center */}
                      <rect x="195" y="100" width="30" height="70" rx="6" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
                      <rect x="180" y="170" width="60" height="8" rx="2" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
                      <ellipse cx="210" cy="95" rx="14" ry="6" fill="#64748b" />
                      <rect x="175" y="185" width="70" height="15" rx="4" fill="#1e293b" />

                      {/* Petri dish culture on Right */}
                      <ellipse cx="310" cy="165" rx="36" ry="18" fill="#0284c7" opacity="0.5" stroke="#38bdf8" strokeWidth="2" />
                      <ellipse cx="310" cy="165" rx="30" ry="14" fill="#059669" opacity="0.7" />
                      <circle cx="300" cy="163" r="3" fill="#facc15" />
                      <circle cx="320" cy="167" r="4" fill="#facc15" />
                    </g>
                  )}

                  {selectedTopicId === 'monera' && (
                    <g>
                      {/* Flagellum wavy path */}
                      <path
                        d="M 90 150 C 40 130, 20 180, 5 150 S -20 120, -50 150"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="5"
                        strokeLinecap="round"
                        className="animate-pulse"
                      />
                      {/* Capsule Capsule */}
                      <rect
                        x="90"
                        y="100"
                        width="220"
                        height="100"
                        rx="50"
                        fill="url(#gradBac)"
                        stroke="#38bdf8"
                        strokeWidth="3"
                      />
                      {/* Cell wall grid */}
                      <rect
                        x="105"
                        y="110"
                        width="190"
                        height="80"
                        rx="40"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="2"
                        strokeDasharray="4 3"
                      />
                      {/* Nucleoid DNA loop */}
                      <path
                        d="M 170 140 Q 200 120 220 145 T 190 165 T 230 155 T 180 135"
                        fill="none"
                        stroke="#ec4899"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      {/* Ribosomes */}
                      <circle cx="140" cy="130" r="4" fill="#facc15" />
                      <circle cx="155" cy="165" r="4" fill="#facc15" />
                      <circle cx="240" cy="135" r="4" fill="#facc15" />
                      <circle cx="260" cy="160" r="4" fill="#facc15" />
                      {/* Plasmid ring */}
                      <circle cx="140" cy="145" r="10" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                    </g>
                  )}

                  {selectedTopicId === 'protista' && (
                    <g>
                      {/* Amoeba body outline with lobes */}
                      <path
                        d="M 120 90 Q 70 80 80 130 Q 60 170 110 200 Q 140 230 190 210 Q 250 230 270 190 Q 300 140 260 110 Q 240 70 190 85 Z"
                        fill="url(#gradAmoeba)"
                        stroke="#06b6d4"
                        strokeWidth="3"
                      />
                      {/* Nucleus */}
                      <circle cx="170" cy="130" r="24" fill="#be185d" stroke="#ec4899" strokeWidth="3" />
                      <circle cx="170" cy="130" r="8" fill="#fda4af" />
                      {/* Contractile vacuole */}
                      <circle cx="240" cy="165" r="20" fill="#0284c7" stroke="#38bdf8" strokeWidth="2.5" />
                      {/* Food vacuoles */}
                      <circle cx="130" cy="170" r="12" fill="#65a30d" stroke="#84cc16" strokeWidth="2" />
                      <circle cx="215" cy="195" r="10" fill="#65a30d" stroke="#84cc16" strokeWidth="2" />
                    </g>
                  )}

                  {selectedTopicId === 'fungi' && (
                    <g>
                      {/* Mushroom Stipe */}
                      <path d="M 185 150 L 180 260 L 220 260 L 215 150 Z" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                      {/* Annulus collar */}
                      <ellipse cx="200" cy="180" rx="30" ry="8" fill="#facc15" stroke="#eab308" strokeWidth="2" />
                      {/* Gills lines */}
                      <path d="M 100 145 Q 200 160 300 145" fill="none" stroke="#a855f7" strokeWidth="6" />
                      {/* Pileus cap */}
                      <path
                        d="M 90 145 Q 200 50 310 145 Q 200 155 90 145 Z"
                        fill="#7e22ce"
                        stroke="#c084fc"
                        strokeWidth="3"
                      />
                      {/* Mycelium roots */}
                      <path d="M 180 260 L 150 285 M 200 260 L 200 295 M 220 260 L 250 285" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
                    </g>
                  )}

                  {selectedTopicId === 'plantae' && (
                    <g>
                      {/* Rigid Plant Cell Wall */}
                      <rect x="70" y="50" width="260" height="200" rx="15" fill="none" stroke="#16a34a" strokeWidth="8" />
                      <rect x="80" y="60" width="240" height="180" rx="10" fill="url(#gradPlant)" />
                      {/* Huge Central Vacuole */}
                      <rect x="110" y="90" width="110" height="120" rx="20" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" opacity="0.8" />
                      {/* Chloroplasts */}
                      <ellipse cx="270" cy="110" rx="25" ry="16" fill="#15803d" stroke="#4ade80" strokeWidth="2.5" />
                      <ellipse cx="270" cy="180" rx="25" ry="16" fill="#15803d" stroke="#4ade80" strokeWidth="2.5" />
                    </g>
                  )}

                  {selectedTopicId === 'animalia' && (
                    <g>
                      {/* Flexible animal cell membrane */}
                      <circle cx="200" cy="150" r="100" fill="#991b1b" stroke="#f87171" strokeWidth="4" opacity="0.85" />
                      {/* Nucleus */}
                      <circle cx="160" cy="150" r="35" fill="#6b21a8" stroke="#c084fc" strokeWidth="3" />
                      {/* Centrosome duo */}
                      <rect x="235" y="105" width="16" height="6" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
                      <rect x="240" y="95" width="6" height="16" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
                      {/* Mitochondria */}
                      <ellipse cx="220" cy="190" rx="20" ry="12" fill="#c2410c" stroke="#fb923c" strokeWidth="2" />
                    </g>
                  )}

                  {selectedTopicId === 'taxonomy' && (
                    <g>
                      {/* 7 ranks Pyramid tiers */}
                      {currentTopic.parts.map((part) => {
                        const coords = part.coords;
                        const isPartSelected = activePartId === part.id;
                        return (
                          <rect
                            key={part.id}
                            x={coords.cx - (coords.w || 100) / 2}
                            y={coords.cy - (coords.h || 25) / 2}
                            width={coords.w}
                            height={coords.h}
                            rx="4"
                            fill={part.color}
                            stroke={isPartSelected ? '#ffffff' : '#0f172a'}
                            strokeWidth={isPartSelected ? 3 : 1}
                            className="cursor-pointer transition-all hover:brightness-125"
                            onClick={() => handlePartClick(part)}
                          />
                        );
                      })}
                    </g>
                  )}

                  {selectedTopicId === 'fiveKingdoms' && (
                    <g>
                      {/* Connecting tree branches */}
                      <line x1="200" y1="260" x2="100" y2="220" stroke="#64748b" strokeWidth="3" />
                      <line x1="200" y1="260" x2="330" y2="210" stroke="#64748b" strokeWidth="3" />
                      <line x1="200" y1="260" x2="200" y2="150" stroke="#64748b" strokeWidth="3" />
                      <line x1="200" y1="150" x2="160" y2="140" stroke="#64748b" strokeWidth="3" />
                      <line x1="200" y1="150" x2="230" y2="110" stroke="#64748b" strokeWidth="3" />
                      <line x1="200" y1="150" x2="300" y2="130" stroke="#64748b" strokeWidth="3" />
                    </g>
                  )}

                  {/* Render Clickable Hotspot Pins for all parts */}
                  {showHotspotPins && currentTopic.parts.map((part, pIdx) => {
                    const coords = part.coords;
                    const isPartSelected = activePartId === part.id;
                    const isHovered = hoveredPartId === part.id;
                    const showBadge = isHovered || (showPartLabels && isPartSelected);

                    // Concise display label for tooltip
                    const rawWord = part.nameBn.split('(')[0].trim();
                    const shortName = rawWord.length > 14 ? rawWord.slice(0, 13) + '…' : rawWord;
                    const badgeWidth = Math.min(110, Math.max(56, shortName.length * 7.5 + 16));
                    const badgeX = Math.max(8, Math.min(392 - badgeWidth, coords.cx - badgeWidth / 2));
                    const badgeY = coords.cy < 45 ? coords.cy + 16 : coords.cy - 24;

                    return (
                      <g
                        key={part.id}
                        className="cursor-pointer group"
                        onClick={() => handlePartClick(part)}
                        onMouseEnter={() => setHoveredPartId(part.id)}
                        onMouseLeave={() => setHoveredPartId(null)}
                      >
                        {/* Glow halo on selected / hovered */}
                        {(isPartSelected || isHovered) && (
                          <circle
                            cx={coords.cx}
                            cy={coords.cy}
                            r={isPartSelected ? 15 : 13}
                            fill={part.color}
                            opacity={isPartSelected ? 0.35 : 0.2}
                            className={isPartSelected ? 'animate-ping' : ''}
                          />
                        )}

                        {/* Interactive hotspot pin circle */}
                        <circle
                          cx={coords.cx}
                          cy={coords.cy}
                          r={isPartSelected ? 11 : isHovered ? 10 : 8.5}
                          fill={isPartSelected ? part.color : '#090d16'}
                          stroke={part.color}
                          strokeWidth={isPartSelected ? 2.5 : 2}
                          className="transition-transform group-hover:scale-125 drop-shadow-md"
                        />

                        {/* Pin label (Short symbol or Number) */}
                        <text
                          x={coords.cx}
                          y={coords.cy + 3.2}
                          textAnchor="middle"
                          fill={isPartSelected ? '#020617' : '#ffffff'}
                          fontSize="8.5"
                          fontWeight="bold"
                          fontFamily="sans-serif"
                        >
                          {part.symbol ? part.symbol.slice(0, 2) : String(pIdx + 1)}
                        </text>

                        {/* Floating Tooltip Callout ONLY on hover or when label toggle is active for selected part */}
                        {showBadge && (
                          <g className="pointer-events-none transition-all duration-150 animate-in fade-in">
                            <rect
                              x={badgeX}
                              y={badgeY}
                              width={badgeWidth}
                              height="18"
                              rx="5"
                              fill="#090d16"
                              stroke={part.color}
                              strokeWidth="1.5"
                              opacity="0.96"
                              className="shadow-2xl"
                            />
                            <text
                              x={badgeX + badgeWidth / 2}
                              y={badgeY + 12.5}
                              textAnchor="middle"
                              fill="#f8fafc"
                              fontSize="9.5"
                              fontWeight="bold"
                            >
                              {shortName}
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Clickable Part Pills List below 2D diagram */}
            <div className="mt-3 pt-3 border-t border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 block mb-1.5">
                চিত্রের যে অংশে ক্লিক করবেন, তার ৩ডি তৈরি হবে:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentTopic.parts.map((part, pIdx) => {
                  const isSelected = activePartId === part.id;
                  const isHovered = hoveredPartId === part.id;
                  return (
                    <button
                      key={part.id}
                      onClick={() => handlePartClick(part)}
                      onMouseEnter={() => setHoveredPartId(part.id)}
                      onMouseLeave={() => setHoveredPartId(null)}
                      style={{
                        borderColor: isSelected ? part.color : isHovered ? `${part.color}80` : 'rgba(51, 65, 85, 0.6)',
                        backgroundColor: isSelected ? `${part.color}25` : isHovered ? 'rgba(30, 41, 59, 0.8)' : 'rgba(15, 23, 42, 0.6)'
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all flex items-center gap-1.5 ${
                        isSelected ? 'scale-105 shadow-md ring-1 ring-white/50 text-white' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: part.color }} />
                      <span className="font-mono text-[10px] px-1 py-0.5 rounded bg-slate-900/90 text-cyan-300 border border-slate-700/70">
                        {part.symbol ? part.symbol.slice(0, 2) : pIdx + 1}
                      </span>
                      <span>{part.nameBn}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* RIGHT: Real-time 3D Viewport & Detail Inspector */}
        {(viewMode === 'split' || viewMode === '3d') && (
          <div className={`${viewMode === 'split' ? 'lg:col-span-5' : 'w-full'} p-4 flex flex-col justify-between bg-slate-950 relative`}>
            {/* Top 3D Viewport Controls */}
            <div>
              <div className="flex items-center justify-between mb-2 text-xs">
                <span className="font-bold text-cyan-400 flex items-center gap-1.5">
                  <Box className="h-4 w-4 text-cyan-400 animate-spin" />
                  <span>রিয়েল-টাইম ৩ডি ভিউয়ার: {activePart?.nameBn}</span>
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsIsolated3D(!isIsolated3D)}
                    className={`px-2 py-0.5 rounded text-[10.5px] font-bold border transition ${
                      isIsolated3D
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                        : 'bg-slate-900 text-slate-300 border-slate-700'
                    }`}
                    title="শুধুমাত্র নির্বাচিত অঙ্গাণুটির ৩ডি দেখুন অথবা সমগ্র জীব দেখুন"
                  >
                    {isIsolated3D ? 'অঙ্গাণু একক ৩ডি' : 'সমগ্র জীব ৩ডি'}
                  </button>
                  <button
                    onClick={() => setAutoRotate(!autoRotate)}
                    className={`p-1 rounded border transition ${
                      autoRotate
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                        : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                    title={autoRotate ? 'ঘূর্ণন থামান' : 'ঘূর্ণন চালু করুন'}
                  >
                    {autoRotate ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                  </button>
                  <button
                    onClick={resetCamera}
                    className="p-1 rounded bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition"
                    title="ক্যামেরা রিসেট করুন"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* 3D WebGL Canvas Box */}
              <div
                className={`relative w-full ${viewMode === '3d' ? 'min-h-[480px] flex-1' : 'aspect-[4/3] max-h-[290px]'} bg-slate-900/95 rounded-xl border border-cyan-500/30 overflow-hidden shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing`}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                onWheel={handleWheel}
              >
                <canvas ref={canvasRef} className="w-full h-full block" />

                {/* 3D Floating Watermark Badge */}
                <div className="absolute top-2 left-2 pointer-events-none flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-950/80 border border-slate-700 text-[10px] text-cyan-300 font-bold backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: activePart?.color || '#38bdf8' }} />
                  <span>৩৬০° ইন্টারেক্টিভ ৩ডি মডেল</span>
                </div>

                <div className="absolute bottom-2 right-2 pointer-events-none text-[9.5px] text-slate-400 bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur-sm">
                  মাউস ড্র্যাগ করে ঘুরান · স্ক্রোল করে জুম
                </div>
              </div>
            </div>

            {/* Clicked Part Detailed Information Card (হাইড রাখা হয়েছে ৩ডি-অনলি মোডে যাতে ৩ডি ভিউ সম্পূর্ণ স্পষ্ট দেখা যায়) */}
            {viewMode !== '3d' && activePart && (
              <div className="mt-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
                <div className="flex items-start justify-between gap-2 pb-2 border-b border-slate-800">
                  <div>
                    <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: activePart.color }} />
                      <span>{activePart.nameBn}</span>
                    </h3>
                    <p className="text-xs text-cyan-400 font-medium">{activePart.nameEn}</p>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-800 text-slate-200 border border-slate-700">
                    {activePart.symbol}
                  </span>
                </div>

                {/* Detail Tabs */}
                <div className="flex items-center gap-1 p-0.5 bg-slate-950 rounded-lg border border-slate-800 text-[11px]">
                  <button
                    onClick={() => setDetailTab('function')}
                    className={`flex-1 py-1 rounded font-bold transition ${
                      detailTab === 'function' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    জৈবিক ভূমিকা ও কাজ
                  </button>
                  <button
                    onClick={() => setDetailTab('structure')}
                    className={`flex-1 py-1 rounded font-bold transition ${
                      detailTab === 'structure' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    গঠন ও উপাদান
                  </button>
                  <button
                    onClick={() => setDetailTab('textbook')}
                    className={`flex-1 py-1 rounded font-bold transition ${
                      detailTab === 'textbook' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    বইয়ের তথ্য ও টিপস
                  </button>
                </div>

                {/* Tab Contents */}
                <div className="text-xs leading-relaxed text-slate-200 min-h-[58px]">
                  {detailTab === 'function' && (
                    <div className="space-y-1">
                      <p>{activePart.roleBn}</p>
                      <p className="text-[11px] text-slate-400 italic">({activePart.roleEn})</p>
                    </div>
                  )}

                  {detailTab === 'structure' && (
                    <div className="space-y-1">
                      <p className="text-slate-200">{activePart.structureBn}</p>
                      <p className="text-[11px] text-emerald-400 font-semibold">
                        অঙ্গাণু প্রকার: {isIsolated3D ? 'বিচ্ছিন্ন একক অণুবীক্ষণিক ৩ডি মডেল' : 'সমগ্র জীবের অভ্যন্তরীণ অংশ'}
                      </p>
                    </div>
                  )}

                  {detailTab === 'textbook' && (
                    <div className="space-y-1">
                      <p className="text-amber-200 font-medium">📖 {activePart.textbookRefBn}</p>
                      <p className="text-[10px] text-slate-400 font-mono">
                        NCTB জীববিজ্ঞান ৯ম-১০ম শ্রেণি · {currentTopic.chapterSection}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
