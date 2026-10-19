import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { 
  Orbit, 
  RotateCcw, 
  Play, 
  Pause, 
  ZoomIn, 
  ZoomOut, 
  Eye, 
  Sparkles, 
  Layers, 
  Atom, 
  Info, 
  Compass, 
  Sliders, 
  Search, 
  CheckCircle2, 
  HelpCircle, 
  BookOpen, 
  ShieldCheck, 
  Share2, 
  ChevronRight,
  Flame,
  Activity,
  Maximize2
} from 'lucide-react';

// ==========================================
// 1. DATA STRUCTURES & MOLECULE DEFINITIONS
// ==========================================

export interface AtomDef {
  id: string;
  element: string; // 'C', 'H', 'O', 'N', 'Cl', 'F', 'S', 'P', 'B'
  nameBn: string;
  nameEn: string;
  pos: [number, number, number];
  color: number;
  ballRadius: number;
  spaceRadius: number;
  z: number;
  electronConfig: string;
  valency: number;
  electronegativity: number;
  covalentRadiusPm: number;
}

export interface BondDef {
  from: number;
  to: number;
  order: 1 | 2 | 3;
  typeBn: string;
  lengthPm: number;
  energyKjMol: number;
}

export interface LonePairDef {
  atomIndex: number;
  dir: [number, number, number];
  labelBn: string;
}

export interface AngleArcDef {
  a: number;
  center: number;
  b: number;
  angleDeg: number;
  label: string;
}

export interface MoleculeData {
  id: string;
  nameBn: string;
  nameEn: string;
  formula: string;
  category: 'primary' | 'hydrocarbon' | 'inorganic' | 'exception';
  categoryBn: string;
  geometryBn: string;
  geometryEn: string;
  hybridization: string;
  bondAngle: string;
  bondPairs: number;
  lonePairs: number;
  polarityBn: string;
  dipoleMoment: string;
  molarMass: string;
  shortDesc: string;
  vseprDetails: string;
  sscExamTip: string;
  atoms: AtomDef[];
  bonds: BondDef[];
  lonePairsList?: LonePairDef[];
  angleArcs?: AngleArcDef[];
}

// ------------------------------------------
// Standard Element Palette & Constants
// ------------------------------------------
const CPK_COLORS = {
  H: 0xf1f5f9,  // Off-white / Pearl
  C: 0x334155,  // Slate / Charcoal
  N: 0x2563eb,  // Royal Blue
  O: 0xef4444,  // Crimson Red
  F: 0x06b6d4,  // Cyan / Aquamarine
  Cl: 0x10b981, // Emerald Green
  Br: 0x92400e, // Dark Amber
  S: 0xeab308,  // Gold / Yellow
  P: 0xf97316,  // Orange
  B: 0xf472b6   // Pink / Rose
};

// Tetrahedral scale constant for CH4
const T_DIST = 1.15;
const T_VAL = T_DIST / Math.sqrt(3);

export const MOLECULES: MoleculeData[] = [
  // 1. Methane (CH4) - Highlighted
  {
    id: 'ch4',
    nameBn: 'মিথেন',
    nameEn: 'Methane',
    formula: 'CH₄',
    category: 'primary',
    categoryBn: 'প্রাথমিক অণু (সিলেবাস স্পেশাল)',
    geometryBn: 'চতুস্তলকীয় (Tetrahedral)',
    geometryEn: 'Tetrahedral',
    hybridization: 'sp³',
    bondAngle: '১০৯.৫°',
    bondPairs: 4,
    lonePairs: 0,
    polarityBn: 'অপোলার (Non-polar)',
    dipoleMoment: '০.০০ D',
    molarMass: '১৬.০৪ g/mol',
    shortDesc: 'প্রাকৃতিক গ্যাসের প্রধান উপাদান। কার্বনের ৪টি যোজ্যতা ইলেকট্রন ৪টি হাইড্রোজেনের সাথে ৪টি সমযোজী সিগমা বন্ধন তৈরি করে নিখুঁত চতুস্তলক গঠন করে।',
    vseprDetails: 'VSEPR তত্ত্ব অনুসারে, কেন্দ্রীয় কার্বনে ৪টি বন্ধনজোড় এবং ০টি মুক্তজোড় ইলেকট্রন রয়েছে। কোনো মুক্তজোড় না থাকায় ৪টি বন্ধনজোড় পরস্পরের মধ্যে সমান বিকর্ষণ বজায় রাখে, যার ফলে বন্ধন কোণটি আদর্শ চতুস্তলকীয় কোণ ১০৯.৫° হয়।',
    sscExamTip: 'এসএসসি বোর্ড পরীক্ষায় বহুবার প্রশ্ন এসেছে: "CH₄ অণুর আকৃতি চতুস্তলকীয় হলেও H₂O বা NH₃ এর আকৃতি ভিন্ন কেন?" উত্তর: CH₄-এ কোনো মুক্তজোড় ইলেকট্রন নেই, কিন্তু NH₃ ও H₂O-এ যথাক্রমে ১টি ও ২টি মুক্তজোড় রয়েছে যা বন্ধনজোড়কে চেপে কোণ ছোট করে দেয়।',
    atoms: [
      {
        id: 'c0', element: 'C', nameBn: 'কার্বন', nameEn: 'Carbon',
        pos: [0, 0, 0], color: CPK_COLORS.C, ballRadius: 0.48, spaceRadius: 0.95,
        z: 6, electronConfig: '1s² 2s² 2p²', valency: 4, electronegativity: 2.55, covalentRadiusPm: 77
      },
      {
        id: 'h1', element: 'H', nameBn: 'হাইড্রোজেন ১', nameEn: 'Hydrogen 1',
        pos: [T_VAL, T_VAL, T_VAL], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      },
      {
        id: 'h2', element: 'H', nameBn: 'হাইড্রোজেন ২', nameEn: 'Hydrogen 2',
        pos: [T_VAL, -T_VAL, -T_VAL], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      },
      {
        id: 'h3', element: 'H', nameBn: 'হাইড্রোজেন ৩', nameEn: 'Hydrogen 3',
        pos: [-T_VAL, T_VAL, -T_VAL], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      },
      {
        id: 'h4', element: 'H', nameBn: 'হাইড্রোজেন ৪', nameEn: 'Hydrogen 4',
        pos: [-T_VAL, -T_VAL, T_VAL], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      }
    ],
    bonds: [
      { from: 0, to: 1, order: 1, typeBn: 'C–H একক সিগমা (σ) বন্ধন', lengthPm: 109, energyKjMol: 413 },
      { from: 0, to: 2, order: 1, typeBn: 'C–H একক সিগমা (σ) বন্ধন', lengthPm: 109, energyKjMol: 413 },
      { from: 0, to: 3, order: 1, typeBn: 'C–H একক সিগমা (σ) বন্ধন', lengthPm: 109, energyKjMol: 413 },
      { from: 0, to: 4, order: 1, typeBn: 'C–H একক সিগমা (σ) বন্ধন', lengthPm: 109, energyKjMol: 413 }
    ],
    angleArcs: [
      { a: 1, center: 0, b: 2, angleDeg: 109.5, label: '১০৯.৫°' },
      { a: 1, center: 0, b: 3, angleDeg: 109.5, label: '১০৯.৫°' },
      { a: 2, center: 0, b: 4, angleDeg: 109.5, label: '১০৯.৫°' }
    ]
  },

  // 2. Water (H2O) - Highlighted
  {
    id: 'h2o',
    nameBn: 'পানি',
    nameEn: 'Water',
    formula: 'H₂O',
    category: 'primary',
    categoryBn: 'প্রাথমিক অণু (সিলেবাস স্পেশাল)',
    geometryBn: 'কৌণিক / ভি-আকৃতি (Bent / V-shaped)',
    geometryEn: 'Bent / V-shape',
    hybridization: 'sp³',
    bondAngle: '১০৪.৫°',
    bondPairs: 2,
    lonePairs: 2,
    polarityBn: 'তীব্র পোলার (Polar)',
    dipoleMoment: '১.৮৫ D',
    molarMass: '১৮.০২ g/mol',
    shortDesc: 'জীবনের দ্রাবক। কেন্দ্রীয় অক্সিজেনে ২টি বন্ধনজোড় এবং ২টি নিঃসঙ্গ মুক্তজোড় (Lone Pairs) ইলেকট্রন রয়েছে, যা তীব্র পোলারিটি তৈরি করে।',
    vseprDetails: 'অক্সিজেনের সংকরায়ণ sp³ হওয়ায় ইলেকট্রন জ্যামিতি চতুস্তলকীয় হওয়ার কথা ছিল। কিন্তু VSEPR তত্ত্ব মতে: মুক্তজোড়-মুক্তজোড় বিকর্ষণ (lp-lp) > মুক্তজোড়-বন্ধনজোড় বিকর্ষণ (lp-bp) > বন্ধনজোড়-বন্ধনজোড় বিকর্ষণ (bp-bp)। ২টি শক্তিশালী মুক্তজোড় ২টি O-H বন্ধনজোড়কে চেপে ধরে কোণ ১০৯.৫° থেকে কমিয়ে ১০৪.৫°-এ নামিয়ে আনে।',
    sscExamTip: 'পরীক্ষায় খ-নম্বরে আসে: "পানি একটি পোলার যৌগ কেন?" অক্সিজেন ও হাইড্রোজেনের মধ্যে তড়িৎ-ঋণাত্মকতার পার্থক্য (৩.৪৪ - ২.২০ = ১.২৪ > ০.৫) হওয়ায় আংশিক ধনাত্মক (H^δ+) ও ঋণাত্মক (O^2δ-) পোল সৃষ্টি হয়।',
    atoms: [
      {
        id: 'o0', element: 'O', nameBn: 'অক্সিজেন', nameEn: 'Oxygen',
        pos: [0, 0.16, 0], color: CPK_COLORS.O, ballRadius: 0.50, spaceRadius: 0.90,
        z: 8, electronConfig: '1s² 2s² 2p⁴', valency: 2, electronegativity: 3.44, covalentRadiusPm: 66
      },
      {
        id: 'h1', element: 'H', nameBn: 'হাইড্রোজেন ১', nameEn: 'Hydrogen 1',
        pos: [-0.86, -0.48, 0], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      },
      {
        id: 'h2', element: 'H', nameBn: 'হাইড্রোজেন ২', nameEn: 'Hydrogen 2',
        pos: [0.86, -0.48, 0], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      }
    ],
    bonds: [
      { from: 0, to: 1, order: 1, typeBn: 'O–H পোলার সমযোজী বন্ধন', lengthPm: 96, energyKjMol: 463 },
      { from: 0, to: 2, order: 1, typeBn: 'O–H পোলার সমযোজী বন্ধন', lengthPm: 96, energyKjMol: 463 }
    ],
    lonePairsList: [
      { atomIndex: 0, dir: [0, 0.85, 0.72], labelBn: 'মুক্তজোড় ১ (Lone Pair)' },
      { atomIndex: 0, dir: [0, 0.85, -0.72], labelBn: 'মুক্তজোড় ২ (Lone Pair)' }
    ],
    angleArcs: [
      { a: 1, center: 0, b: 2, angleDeg: 104.5, label: '১০৪.৫°' }
    ]
  },

  // 3. Ammonia (NH3) - Highlighted
  {
    id: 'nh3',
    nameBn: 'অ্যামোনিয়া',
    nameEn: 'Ammonia',
    formula: 'NH₃',
    category: 'primary',
    categoryBn: 'প্রাথমিক অণু (সিলেবাস স্পেশাল)',
    geometryBn: 'ত্রিকোণীয় পিরামিডীয় (Trigonal Pyramidal)',
    geometryEn: 'Trigonal Pyramidal',
    hybridization: 'sp³',
    bondAngle: '১০৭.০°',
    bondPairs: 3,
    lonePairs: 1,
    polarityBn: 'পোলার (Polar)',
    dipoleMoment: '১.৪৭ D',
    molarMass: '১৭.০৩ g/mol',
    shortDesc: 'তীব্র ঝাঁঝালো গন্ধযুক্ত ক্ষারধর্মী গ্যাস। কেন্দ্রীয় নাইট্রোজেনে ৩টি বন্ধনজোড় এবং ১টি মুক্তজোড় ইলেকট্রন বিদ্যমান।',
    vseprDetails: 'নাইট্রোজেনের যোজ্যতা স্তরে ৫টি ইলেকট্রন রয়েছে। ৩টি ইলেকট্রন ৩টি হাইড্রোজেনের সাথে শেয়ার করে ৩টি N-H সমযোজী বন্ধন গঠন করে এবং বাকি ২টি ইলেকট্রন ১টি নিঃসঙ্গ মুক্তজোড় (Lone Pair) হিসেবে শীর্ষে অবস্থান করে। মুক্তজোড়-বন্ধনজোড় বিকর্ষণের কারণে বন্ধন কোণ ১০৯.৫° থেকে কমে ১০৭° হয়।',
    sscExamTip: 'কোণ তুলনা: মিথেন (১০৯.৫°) > অ্যামোনিয়া (১০৭°) > পানি (১০৪.৫°)। কারণ মুক্তজোড়ের সংখ্যা বৃদ্ধি (০ → ১ → ২) পেলে বন্ধনজোড়গুলোর উপর নিম্নমুখী চাপ বৃদ্ধি পায়।',
    atoms: [
      {
        id: 'n0', element: 'N', nameBn: 'নাইট্রোজেন', nameEn: 'Nitrogen',
        pos: [0, 0.32, 0], color: CPK_COLORS.N, ballRadius: 0.49, spaceRadius: 0.92,
        z: 7, electronConfig: '1s² 2s² 2p³', valency: 3, electronegativity: 3.04, covalentRadiusPm: 71
      },
      {
        id: 'h1', element: 'H', nameBn: 'হাইড্রোজেন ১', nameEn: 'Hydrogen 1',
        pos: [0.94, -0.15, 0], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      },
      {
        id: 'h2', element: 'H', nameBn: 'হাইড্রোজেন ২', nameEn: 'Hydrogen 2',
        pos: [-0.47, -0.15, 0.81], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      },
      {
        id: 'h3', element: 'H', nameBn: 'হাইড্রোজেন ৩', nameEn: 'Hydrogen 3',
        pos: [-0.47, -0.15, -0.81], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      }
    ],
    bonds: [
      { from: 0, to: 1, order: 1, typeBn: 'N–H পোলার একক বন্ধন', lengthPm: 101, energyKjMol: 391 },
      { from: 0, to: 2, order: 1, typeBn: 'N–H পোলার একক বন্ধন', lengthPm: 101, energyKjMol: 391 },
      { from: 0, to: 3, order: 1, typeBn: 'N–H পোলার একক বন্ধন', lengthPm: 101, energyKjMol: 391 }
    ],
    lonePairsList: [
      { atomIndex: 0, dir: [0, 1.15, 0], labelBn: 'শীর্ষ মুক্তজোড় (Lone Pair)' }
    ],
    angleArcs: [
      { a: 1, center: 0, b: 2, angleDeg: 107.0, label: '১০৭.০°' },
      { a: 2, center: 0, b: 3, angleDeg: 107.0, label: '১০৭.০°' }
    ]
  },

  // 4. Carbon Dioxide (CO2)
  {
    id: 'co2',
    nameBn: 'কার্বন ডাই-অক্সাইড',
    nameEn: 'Carbon Dioxide',
    formula: 'CO₂',
    category: 'inorganic',
    categoryBn: 'অজৈব ও গ্যাসীয় অণু',
    geometryBn: 'সরলরৈখিক (Linear)',
    geometryEn: 'Linear',
    hybridization: 'sp',
    bondAngle: '১৮০.০°',
    bondPairs: 4,
    lonePairs: 4,
    polarityBn: 'অপোলার (Non-polar)',
    dipoleMoment: '০.০০ D',
    molarMass: '৪৪.০১ g/mol',
    shortDesc: 'বায়ুমণ্ডলের গ্রিনহাউস গ্যাস। কেন্দ্রীয় কার্বন দুই প্রান্তে দুটি অক্সিজেনের সাথে ২টি দ্বিবন্ধন (O=C=O) গঠন করে সরলরেখায় অবস্থান করে।',
    vseprDetails: 'কার্বনে ২টি দ্বিবন্ধন ইলেকট্রন ক্লাউড ১৮০° কোণে অবস্থান করায় ইলেকট্রন বিকর্ষণ সর্বনিম্ন হয়। বন্ধনদ্বয় পোলার হলেও তাদের ডাইপোল মোমেন্ট বিপরীতমুখী হওয়ায় একে অপরকে সম্পূর্ণ বাতিল করে দেয় (μ = 0)।',
    sscExamTip: 'পরীক্ষার প্রশ্ন: "CO₂ অণুতে পোলার বন্ধন থাকা সত্ত্বেও এটি অপোলার কেন?" উত্তর: এর প্রতিসম সরলরৈখিক আকৃতির কারণে দুটি C=O ডাইপোল পরস্পরকে নাকচ করে দেয়।',
    atoms: [
      {
        id: 'c0', element: 'C', nameBn: 'কার্বন', nameEn: 'Carbon',
        pos: [0, 0, 0], color: CPK_COLORS.C, ballRadius: 0.48, spaceRadius: 0.95,
        z: 6, electronConfig: '1s² 2s² 2p²', valency: 4, electronegativity: 2.55, covalentRadiusPm: 77
      },
      {
        id: 'o1', element: 'O', nameBn: 'অক্সিজেন ১', nameEn: 'Oxygen 1',
        pos: [-1.25, 0, 0], color: CPK_COLORS.O, ballRadius: 0.48, spaceRadius: 0.90,
        z: 8, electronConfig: '1s² 2s² 2p⁴', valency: 2, electronegativity: 3.44, covalentRadiusPm: 66
      },
      {
        id: 'o2', element: 'O', nameBn: 'অক্সিজেন ২', nameEn: 'Oxygen 2',
        pos: [1.25, 0, 0], color: CPK_COLORS.O, ballRadius: 0.48, spaceRadius: 0.90,
        z: 8, electronConfig: '1s² 2s² 2p⁴', valency: 2, electronegativity: 3.44, covalentRadiusPm: 66
      }
    ],
    bonds: [
      { from: 0, to: 1, order: 2, typeBn: 'C=O দ্বিবন্ধন (১টি σ + ১টি π)', lengthPm: 116, energyKjMol: 799 },
      { from: 0, to: 2, order: 2, typeBn: 'C=O দ্বিবন্ধন (১টি σ + ১টি π)', lengthPm: 116, energyKjMol: 799 }
    ],
    angleArcs: [
      { a: 1, center: 0, b: 2, angleDeg: 180.0, label: '১৮০°' }
    ]
  },

  // 5. Hydrogen Gas (H2)
  {
    id: 'h2',
    nameBn: 'হাইড্রোজেন গ্যাস',
    nameEn: 'Hydrogen Gas',
    formula: 'H₂',
    category: 'inorganic',
    categoryBn: 'মৌলিক দ্বিপরমাণুক অণু',
    geometryBn: 'সরলরৈখিক (Linear)',
    geometryEn: 'Linear',
    hybridization: 's-s অধিক্রমণ',
    bondAngle: '১৮০°',
    bondPairs: 1,
    lonePairs: 0,
    polarityBn: 'বিশুদ্ধ অপোলার',
    dipoleMoment: '০.০০ D',
    molarMass: '২.০২ g/mol',
    shortDesc: 'মহাবিশ্বের সবচেয়ে হালকা ও প্রাচুর্যপূর্ণ গ্যাস। দুটি হাইড্রোজেন পরমাণু ১টি করে ইলেকট্রন শেয়ার করে ডুয়েট (দ্বিত্ব) পূর্ণ করে।',
    vseprDetails: 'দুটি 1s অরবিটালের মুখোমুখি অধিক্রমণে শক্তিশালী অক্ষীয় সিগমা (σ) বন্ধন তৈরি হয়। তড়িৎ-ঋণাত্মকতার পার্থক্য শূন্য হওয়ায় এটি নিখুঁত বিশুদ্ধ অপোলার সমযোজী বন্ধন।',
    sscExamTip: 'দ্বিত্ব (Duet) নিয়মের উৎকৃষ্ট উদাহরণ। হিলিয়ামের মতো বহিঃস্তরে ২টি ইলেকট্রন অর্জন করে স্থিতিশীল হয়।',
    atoms: [
      {
        id: 'h1', element: 'H', nameBn: 'হাইড্রোজেন ১', nameEn: 'Hydrogen 1',
        pos: [-0.48, 0, 0], color: CPK_COLORS.H, ballRadius: 0.32, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      },
      {
        id: 'h2', element: 'H', nameBn: 'হাইড্রোজেন ২', nameEn: 'Hydrogen 2',
        pos: [0.48, 0, 0], color: CPK_COLORS.H, ballRadius: 0.32, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      }
    ],
    bonds: [
      { from: 0, to: 1, order: 1, typeBn: 'H–H বিশুদ্ধ সমযোজী একক বন্ধন', lengthPm: 74, energyKjMol: 436 }
    ]
  },

  // 6. Oxygen Gas (O2)
  {
    id: 'o2',
    nameBn: 'অক্সিজেন গ্যাস',
    nameEn: 'Oxygen Gas',
    formula: 'O₂',
    category: 'inorganic',
    categoryBn: 'মৌলিক দ্বিপরমাণুক অণু',
    geometryBn: 'সরলরৈখিক (Linear)',
    geometryEn: 'Linear',
    hybridization: 'sp²',
    bondAngle: '১৮০°',
    bondPairs: 2,
    lonePairs: 4,
    polarityBn: 'বিশুদ্ধ অপোলার',
    dipoleMoment: '০.০০ D',
    molarMass: '৩২.০০ g/mol',
    shortDesc: 'শ্বাস-প্রশ্বাসের জন্য অপরিহার্য গ্যাস। দুটি অক্সিজেন পরমাণু ২টি করে মোট ৪টি ইলেকট্রন শেয়ার করে শক্তিশালী দ্বিবন্ধন (O=O) গঠন করে।',
    vseprDetails: '১টি সিগমা (σ) এবং ১টি পাই (π) বন্ধন গঠিত হয়। প্রতিটি অক্সিজেন পরমাণুতে ২টি করে মোট ৪ জোড়া মুক্তজোড় ইলেকট্রন বিদ্যমান থাকে।',
    sscExamTip: 'অষ্টক নিয়মের মৌলিক প্রয়োগ। প্রতিটি অক্সিজেন পরমাণুর শেষ কক্ষপথে ৮টি ইলেকট্রন নিশ্চিত হয়।',
    atoms: [
      {
        id: 'o1', element: 'O', nameBn: 'অক্সিজেন ১', nameEn: 'Oxygen 1',
        pos: [-0.62, 0, 0], color: CPK_COLORS.O, ballRadius: 0.50, spaceRadius: 0.90,
        z: 8, electronConfig: '1s² 2s² 2p⁴', valency: 2, electronegativity: 3.44, covalentRadiusPm: 66
      },
      {
        id: 'o2', element: 'O', nameBn: 'অক্সিজেন ২', nameEn: 'Oxygen 2',
        pos: [0.62, 0, 0], color: CPK_COLORS.O, ballRadius: 0.50, spaceRadius: 0.90,
        z: 8, electronConfig: '1s² 2s² 2p⁴', valency: 2, electronegativity: 3.44, covalentRadiusPm: 66
      }
    ],
    bonds: [
      { from: 0, to: 1, order: 2, typeBn: 'O=O দ্বিবন্ধন (১টি σ + ১টি π)', lengthPm: 121, energyKjMol: 498 }
    ]
  },

  // 7. Nitrogen Gas (N2)
  {
    id: 'n2',
    nameBn: 'নাইট্রোজেন গ্যাস',
    nameEn: 'Nitrogen Gas',
    formula: 'N₂',
    category: 'inorganic',
    categoryBn: 'মৌলিক দ্বিপরমাণুক অণু',
    geometryBn: 'সরলরৈখিক (Linear)',
    geometryEn: 'Linear',
    hybridization: 'sp',
    bondAngle: '১৮০°',
    bondPairs: 3,
    lonePairs: 2,
    polarityBn: 'বিশুদ্ধ অপোলার',
    dipoleMoment: '০.০০ D',
    molarMass: '২৮.০২ g/mol',
    shortDesc: 'বায়ুমণ্ডলের ৭৮% গ্যাস। দুটি নাইট্রোজেন পরমাণু ৩টি করে মোট ৬টি ইলেকট্রন শেয়ার করে অত্যন্ত শক্তিশালী ত্রিবন্ধন (N≡N) তৈরি করে।',
    vseprDetails: '১টি অক্ষীয় সিগমা (σ) বন্ধন এবং ২টি পার্শীয় পাই (π) বন্ধন নিয়ে গঠিত ত্রিবন্ধনের বন্ধন শক্তি ৯৪৫ kJ/mol, যা এটিকে অত্যন্ত নিষ্ক্রিয় রূপ দান করে।',
    sscExamTip: 'পরীক্ষার প্রশ্ন: "নাইট্রোজেন গ্যাস সাধারণ তাপমাত্রায় রাসায়নিকভাবে নিষ্ক্রিয় কেন?" উত্তর: এর N≡N ত্রিবন্ধনের অত্যন্ত উচ্চ বন্ধন শক্তি (৯৪৫ kJ/mol)।',
    atoms: [
      {
        id: 'n1', element: 'N', nameBn: 'নাইট্রোজেন ১', nameEn: 'Nitrogen 1',
        pos: [-0.58, 0, 0], color: CPK_COLORS.N, ballRadius: 0.49, spaceRadius: 0.92,
        z: 7, electronConfig: '1s² 2s² 2p³', valency: 3, electronegativity: 3.04, covalentRadiusPm: 71
      },
      {
        id: 'n2', element: 'N', nameBn: 'নাইট্রোজেন ২', nameEn: 'Nitrogen 2',
        pos: [0.58, 0, 0], color: CPK_COLORS.N, ballRadius: 0.49, spaceRadius: 0.92,
        z: 7, electronConfig: '1s² 2s² 2p³', valency: 3, electronegativity: 3.04, covalentRadiusPm: 71
      }
    ],
    bonds: [
      { from: 0, to: 1, order: 3, typeBn: 'N≡N ত্রিবন্ধন (১টি σ + ২টি π)', lengthPm: 110, energyKjMol: 945 }
    ]
  },

  // 8. Hydrogen Chloride (HCl)
  {
    id: 'hcl',
    nameBn: 'হাইড্রোজেন ক্লোরাইড',
    nameEn: 'Hydrogen Chloride',
    formula: 'HCl',
    category: 'inorganic',
    categoryBn: 'পোলার দ্বিপরমাণুক অণু',
    geometryBn: 'সরলরৈখিক (Linear)',
    geometryEn: 'Linear',
    hybridization: 'p-অরবিটাল শেয়ারিং',
    bondAngle: '১৮০°',
    bondPairs: 1,
    lonePairs: 3,
    polarityBn: 'তীব্র পোলার (Polar)',
    dipoleMoment: '১.০৮ D',
    molarMass: '৩৬.৪৬ g/mol',
    shortDesc: 'হাইড্রোक्लोরিক অ্যাসিডের গ্যাসীয় রূপ। ক্লোরিনের উচ্চ তড়িৎ-ঋণাত্মকতার কারণে বন্ধনজোড় ক্লোরিনের দিকে স্থানান্তরিত হয়।',
    vseprDetails: 'তড়িৎ ঋণাত্মকতার পার্থক্য ৩.১৬ - ২.২০ = ০.৯৬। ক্লোরিনে ৩টি মুক্তজোড় ইলেকট্রন বিদ্যমান। পানিতে দ্রবীভূত হলে সহজেই H⁺ ও Cl⁻ এ আয়নিত হয়।',
    sscExamTip: 'পোলার সমযোজী যৌগের ক্লাসিক উদাহরণ। কেন এটি পানিতে দ্রবীভূত হয়ে বিদ্যুৎ পরিবহন করে তা প্রায়ই ব্যাখ্যা করতে বলা হয়।',
    atoms: [
      {
        id: 'h0', element: 'H', nameBn: 'হাইড্রোজেন', nameEn: 'Hydrogen',
        pos: [-0.85, 0, 0], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      },
      {
        id: 'cl1', element: 'Cl', nameBn: 'ক্লোরিন', nameEn: 'Chlorine',
        pos: [0.55, 0, 0], color: CPK_COLORS.Cl, ballRadius: 0.58, spaceRadius: 1.05,
        z: 17, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁵', valency: 1, electronegativity: 3.16, covalentRadiusPm: 99
      }
    ],
    bonds: [
      { from: 0, to: 1, order: 1, typeBn: 'H–Cl পোলার একক সমযোজী বন্ধন', lengthPm: 127, energyKjMol: 431 }
    ]
  },

  // 9. Boron Trifluoride (BF3) - Octet exception
  {
    id: 'bf3',
    nameBn: 'বোরন ট্রাইফ্লোরাইড',
    nameEn: 'Boron Trifluoride',
    formula: 'BF₃',
    category: 'exception',
    categoryBn: 'অষ্টক সংকোচন (Octet Deficient)',
    geometryBn: 'সমতলীয় ত্রিকোণ (Trigonal Planar)',
    geometryEn: 'Trigonal Planar',
    hybridization: 'sp²',
    bondAngle: '১২০.০°',
    bondPairs: 3,
    lonePairs: 9,
    polarityBn: 'অপোলার (প্রতিসম সমতল)',
    dipoleMoment: '০.০০ D',
    molarMass: '৬৭.৮১ g/mol',
    shortDesc: 'অষ্টক সংকোচনের উজ্জ্বল উদাহরণ। কেন্দ্রীয় বোরনের চারপাশে মাত্র ৬টি ইলেকট্রন (৩ জোড়া) নিয়ে অণুটি স্থিতিশীল হয়।',
    vseprDetails: '৩টি B-F বন্ধনজোড় সমতলে একে অপরের থেকে ১২০° ব্যবধানে অবস্থান করে। কোনো মুক্তজোড় নেই। প্রতিসম আকারের কারণে তিনটি ডাইপোল মোমেন্টের লব্ধি শূন্য হয়।',
    sscExamTip: 'এসএসসি রসায়ন অধ্যায় ৩ ও ৫-এর হট টপিক: "অষ্টক নিয়মের সংকোচন (Octet Contraction)"। লুইস অ্যাসিড হিসেবে কাজ করে কারণ এটি মুক্তজোড় গ্রহণ করতে পারে।',
    atoms: [
      {
        id: 'b0', element: 'B', nameBn: 'বোরন', nameEn: 'Boron',
        pos: [0, 0, 0], color: CPK_COLORS.B, ballRadius: 0.44, spaceRadius: 0.85,
        z: 5, electronConfig: '1s² 2s² 2p¹', valency: 3, electronegativity: 2.04, covalentRadiusPm: 82
      },
      {
        id: 'f1', element: 'F', nameBn: 'ফ্লোরিন ১', nameEn: 'Fluorine 1',
        pos: [0, 1.30, 0], color: CPK_COLORS.F, ballRadius: 0.46, spaceRadius: 0.88,
        z: 9, electronConfig: '1s² 2s² 2p⁵', valency: 1, electronegativity: 3.98, covalentRadiusPm: 72
      },
      {
        id: 'f2', element: 'F', nameBn: 'ফ্লোরিন ২', nameEn: 'Fluorine 2',
        pos: [1.13, -0.65, 0], color: CPK_COLORS.F, ballRadius: 0.46, spaceRadius: 0.88,
        z: 9, electronConfig: '1s² 2s² 2p⁵', valency: 1, electronegativity: 3.98, covalentRadiusPm: 72
      },
      {
        id: 'f3', element: 'F', nameBn: 'ফ্লোরিন ৩', nameEn: 'Fluorine 3',
        pos: [-1.13, -0.65, 0], color: CPK_COLORS.F, ballRadius: 0.46, spaceRadius: 0.88,
        z: 9, electronConfig: '1s² 2s² 2p⁵', valency: 1, electronegativity: 3.98, covalentRadiusPm: 72
      }
    ],
    bonds: [
      { from: 0, to: 1, order: 1, typeBn: 'B–F একক সমযোজী বন্ধন', lengthPm: 130, energyKjMol: 646 },
      { from: 0, to: 2, order: 1, typeBn: 'B–F একক সমযোজী বন্ধন', lengthPm: 130, energyKjMol: 646 },
      { from: 0, to: 3, order: 1, typeBn: 'B–F একক সমযোজী বন্ধন', lengthPm: 130, energyKjMol: 646 }
    ],
    angleArcs: [
      { a: 1, center: 0, b: 2, angleDeg: 120.0, label: '১২০°' },
      { a: 2, center: 0, b: 3, angleDeg: 120.0, label: '১২০°' }
    ]
  },

  // 10. Ethene / Ethylene (C2H4)
  {
    id: 'c2h4',
    nameBn: 'ইথিন (ইথিলিন)',
    nameEn: 'Ethene (Ethylene)',
    formula: 'C₂H₄',
    category: 'hydrocarbon',
    categoryBn: 'হাইড্রোকার্বন (অ্যালকিন)',
    geometryBn: 'সমতলীয় ত্রিকোণ (Planar)',
    geometryEn: 'Planar',
    hybridization: 'sp²',
    bondAngle: '১২১.৩° (H-C-H ১১৭.৪°)',
    bondPairs: 6,
    lonePairs: 0,
    polarityBn: 'অপোলার',
    dipoleMoment: '০.০০ D',
    molarMass: '২৮.০৫ g/mol',
    shortDesc: 'ফল পাকানোর প্রাকৃতিক হরমোন। দুটি কার্বনের মাঝে ১টি দ্বিবন্ধন (১টি σ ও ১টি π) এবং ৪টি C-H বন্ধন একই সমতলে অবস্থান করে।',
    vseprDetails: 'প্রতিটি কার্বনের sp² সংকরায়ণ থাকায় এর চারপাশের বন্ধনগুলো সমতলে থাকে। দ্বিবন্ধনের ইলেকট্রন ঘনত্ব একক বন্ধনকে সামান্য চাপ দেয়ায় C=C-H কোণ ১২১.৩° হয়।',
    sscExamTip: 'অসম্পৃক্ত হাইড্রোকার্বনের ব্রোমিন দ্রবণ পরীক্ষা ও বেয়ার পরীক্ষার (KMnO₄) মূল যৌগ।',
    atoms: [
      {
        id: 'c1', element: 'C', nameBn: 'কার্বন ১', nameEn: 'Carbon 1',
        pos: [-0.67, 0, 0], color: CPK_COLORS.C, ballRadius: 0.48, spaceRadius: 0.95,
        z: 6, electronConfig: '1s² 2s² 2p²', valency: 4, electronegativity: 2.55, covalentRadiusPm: 77
      },
      {
        id: 'c2', element: 'C', nameBn: 'কার্বন ২', nameEn: 'Carbon 2',
        pos: [0.67, 0, 0], color: CPK_COLORS.C, ballRadius: 0.48, spaceRadius: 0.95,
        z: 6, electronConfig: '1s² 2s² 2p²', valency: 4, electronegativity: 2.55, covalentRadiusPm: 77
      },
      {
        id: 'h1', element: 'H', nameBn: 'হাইড্রোজেন ১', nameEn: 'Hydrogen 1',
        pos: [-1.25, 0.94, 0], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      },
      {
        id: 'h2', element: 'H', nameBn: 'হাইড্রোজেন ২', nameEn: 'Hydrogen 2',
        pos: [-1.25, -0.94, 0], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      },
      {
        id: 'h3', element: 'H', nameBn: 'হাইড্রোজেন ৩', nameEn: 'Hydrogen 3',
        pos: [1.25, 0.94, 0], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      },
      {
        id: 'h4', element: 'H', nameBn: 'হাইড্রোজেন ৪', nameEn: 'Hydrogen 4',
        pos: [1.25, -0.94, 0], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      }
    ],
    bonds: [
      { from: 0, to: 1, order: 2, typeBn: 'C=C দ্বিবন্ধন (১টি σ + ১টি π)', lengthPm: 134, energyKjMol: 614 },
      { from: 0, to: 2, order: 1, typeBn: 'C–H একক সিগমা বন্ধন', lengthPm: 109, energyKjMol: 413 },
      { from: 0, to: 3, order: 1, typeBn: 'C–H একক সিগমা বন্ধন', lengthPm: 109, energyKjMol: 413 },
      { from: 1, to: 4, order: 1, typeBn: 'C–H একক সিগমা বন্ধন', lengthPm: 109, energyKjMol: 413 },
      { from: 1, to: 5, order: 1, typeBn: 'C–H একক সিগমা বন্ধন', lengthPm: 109, energyKjMol: 413 }
    ],
    angleArcs: [
      { a: 2, center: 0, b: 3, angleDeg: 117.4, label: '১১৭.৪°' },
      { a: 1, center: 0, b: 2, angleDeg: 121.3, label: '১২১.৩°' }
    ]
  },

  // 11. Ethyne / Acetylene (C2H2)
  {
    id: 'c2h2',
    nameBn: 'ইথাইন (অ্যাসিটিলিন)',
    nameEn: 'Ethyne (Acetylene)',
    formula: 'C₂H₂',
    category: 'hydrocarbon',
    categoryBn: 'হাইড্রোকার্বন (অ্যালকাইন)',
    geometryBn: 'সরলরৈখিক (Linear)',
    geometryEn: 'Linear',
    hybridization: 'sp',
    bondAngle: '১৮০.০°',
    bondPairs: 5,
    lonePairs: 0,
    polarityBn: 'অপোলার',
    dipoleMoment: '০.০০ D',
    molarMass: '২৬.০৪ g/mol',
    shortDesc: 'অক্সি-অ্যাসিটিলিন শিখা ও ওয়েল্ডিংয়ে ব্যবহৃত উচ্চশক্তি গ্যাস। কার্বন-কার্বন ত্রিবন্ধন (C≡C) দ্বারা গঠিত সরলরৈখিক অণু।',
    vseprDetails: 'প্রতিটি কার্বনে sp সংকরায়ণ থাকায় অক্ষ বরাবর ১টি সিগমা এবং দুটি লম্ব সমতলে ২টি পাই বন্ধন গঠিত হয়। সকল পরমাণু ১৮০° সরলরেখায় অবস্থান করে।',
    sscExamTip: 'অ্যালকাইনের অম্লধর্মিতা এবং ত্রিবন্ধন বিশিষ্ট অণুর জ্যামিতির ক্লাসিক উদাহরণ।',
    atoms: [
      {
        id: 'c1', element: 'C', nameBn: 'কার্বন ১', nameEn: 'Carbon 1',
        pos: [-0.60, 0, 0], color: CPK_COLORS.C, ballRadius: 0.48, spaceRadius: 0.95,
        z: 6, electronConfig: '1s² 2s² 2p²', valency: 4, electronegativity: 2.55, covalentRadiusPm: 77
      },
      {
        id: 'c2', element: 'C', nameBn: 'কার্বন ২', nameEn: 'Carbon 2',
        pos: [0.60, 0, 0], color: CPK_COLORS.C, ballRadius: 0.48, spaceRadius: 0.95,
        z: 6, electronConfig: '1s² 2s² 2p²', valency: 4, electronegativity: 2.55, covalentRadiusPm: 77
      },
      {
        id: 'h1', element: 'H', nameBn: 'হাইড্রোজেন ১', nameEn: 'Hydrogen 1',
        pos: [-1.65, 0, 0], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      },
      {
        id: 'h2', element: 'H', nameBn: 'হাইড্রোজেন ২', nameEn: 'Hydrogen 2',
        pos: [1.65, 0, 0], color: CPK_COLORS.H, ballRadius: 0.28, spaceRadius: 0.65,
        z: 1, electronConfig: '1s¹', valency: 1, electronegativity: 2.20, covalentRadiusPm: 37
      }
    ],
    bonds: [
      { from: 0, to: 1, order: 3, typeBn: 'C≡C ত্রিবন্ধন (১টি σ + ২টি π)', lengthPm: 120, energyKjMol: 839 },
      { from: 0, to: 2, order: 1, typeBn: 'C–H একক সিগমা বন্ধন', lengthPm: 106, energyKjMol: 413 },
      { from: 1, to: 3, order: 1, typeBn: 'C–H একক সিগমা বন্ধন', lengthPm: 106, energyKjMol: 413 }
    ],
    angleArcs: [
      { a: 2, center: 0, b: 1, angleDeg: 180.0, label: '১৮০°' }
    ]
  },

  // 12. Sulfur Hexafluoride (SF6) - Octet expansion
  {
    id: 'sf6',
    nameBn: 'সালফার হেক্সাফ্লোরাইড',
    nameEn: 'Sulfur Hexafluoride',
    formula: 'SF₆',
    category: 'exception',
    categoryBn: 'অষ্টক সম্প্রসারণ (Octet Expansion)',
    geometryBn: 'অষ্টতলকীয় (Octahedral)',
    geometryEn: 'Octahedral',
    hybridization: 'sp³d²',
    bondAngle: '৯০.০°',
    bondPairs: 6,
    lonePairs: 18,
    polarityBn: 'অপোলার (প্রতিসম)',
    dipoleMoment: '০.০০ D',
    molarMass: '১৪৬.০৬ g/mol',
    shortDesc: 'উচ্চ ভোল্টেজ বৈদ্যুতিক ট্রান্সফর্মারে ব্যবহৃত নিষ্ক্রিয় অন্তরক গ্যাস। সালফারের যোজ্যতা স্তরে ১২টি ইলেকট্রন (৬ জোড়া) বিদ্যমান।',
    vseprDetails: 'সালফারের ফাঁকা 3d অরবিটালের উপস্থিতির কারণে এর অষ্টক সম্প্রসারণ ঘটে। ৬টি ফ্লোরিন পরমাণু ত্রিমাত্রিক কার্তেসীয় অক্ষের ±X, ±Y, ±Z বরাবর ৯০° ব্যবধানে অবস্থান করে।',
    sscExamTip: 'বোর্ড পরীক্ষায় অষ্টক সম্প্রসারণের উদাহরণ হিসেবে SF₆ ও PCl₅ প্রায়শই চাওয়া হয়।',
    atoms: [
      {
        id: 's0', element: 'S', nameBn: 'সালফার', nameEn: 'Sulfur',
        pos: [0, 0, 0], color: CPK_COLORS.S, ballRadius: 0.54, spaceRadius: 1.02,
        z: 16, electronConfig: '1s² 2s² 2p⁶ 3s² 3p⁴', valency: 6, electronegativity: 2.58, covalentRadiusPm: 102
      },
      {
        id: 'f1', element: 'F', nameBn: 'ফ্লোরিন +X', nameEn: 'Fluorine +X',
        pos: [1.35, 0, 0], color: CPK_COLORS.F, ballRadius: 0.44, spaceRadius: 0.88,
        z: 9, electronConfig: '1s² 2s² 2p⁵', valency: 1, electronegativity: 3.98, covalentRadiusPm: 72
      },
      {
        id: 'f2', element: 'F', nameBn: 'ফ্লোরিন -X', nameEn: 'Fluorine -X',
        pos: [-1.35, 0, 0], color: CPK_COLORS.F, ballRadius: 0.44, spaceRadius: 0.88,
        z: 9, electronConfig: '1s² 2s² 2p⁵', valency: 1, electronegativity: 3.98, covalentRadiusPm: 72
      },
      {
        id: 'f3', element: 'F', nameBn: 'ফ্লোরিন +Y', nameEn: 'Fluorine +Y',
        pos: [0, 1.35, 0], color: CPK_COLORS.F, ballRadius: 0.44, spaceRadius: 0.88,
        z: 9, electronConfig: '1s² 2s² 2p⁵', valency: 1, electronegativity: 3.98, covalentRadiusPm: 72
      },
      {
        id: 'f4', element: 'F', nameBn: 'ফ্লোরিন -Y', nameEn: 'Fluorine -Y',
        pos: [0, -1.35, 0], color: CPK_COLORS.F, ballRadius: 0.44, spaceRadius: 0.88,
        z: 9, electronConfig: '1s² 2s² 2p⁵', valency: 1, electronegativity: 3.98, covalentRadiusPm: 72
      },
      {
        id: 'f5', element: 'F', nameBn: 'ফ্লোরিন +Z', nameEn: 'Fluorine +Z',
        pos: [0, 0, 1.35], color: CPK_COLORS.F, ballRadius: 0.44, spaceRadius: 0.88,
        z: 9, electronConfig: '1s² 2s² 2p⁵', valency: 1, electronegativity: 3.98, covalentRadiusPm: 72
      },
      {
        id: 'f6', element: 'F', nameBn: 'ফ্লোরিন -Z', nameEn: 'Fluorine -Z',
        pos: [0, 0, -1.35], color: CPK_COLORS.F, ballRadius: 0.44, spaceRadius: 0.88,
        z: 9, electronConfig: '1s² 2s² 2p⁵', valency: 1, electronegativity: 3.98, covalentRadiusPm: 72
      }
    ],
    bonds: [
      { from: 0, to: 1, order: 1, typeBn: 'S–F সমযোজী বন্ধন', lengthPm: 156, energyKjMol: 327 },
      { from: 0, to: 2, order: 1, typeBn: 'S–F সমযোজী বন্ধন', lengthPm: 156, energyKjMol: 327 },
      { from: 0, to: 3, order: 1, typeBn: 'S–F সমযোজী বন্ধন', lengthPm: 156, energyKjMol: 327 },
      { from: 0, to: 4, order: 1, typeBn: 'S–F সমযোজী বন্ধন', lengthPm: 156, energyKjMol: 327 },
      { from: 0, to: 5, order: 1, typeBn: 'S–F সমযোজী বন্ধন', lengthPm: 156, energyKjMol: 327 },
      { from: 0, to: 6, order: 1, typeBn: 'S–F সমযোজী বন্ধন', lengthPm: 156, energyKjMol: 327 }
    ],
    angleArcs: [
      { a: 1, center: 0, b: 3, angleDeg: 90.0, label: '৯০°' },
      { a: 3, center: 0, b: 5, angleDeg: 90.0, label: '৯০°' }
    ]
  }
];

// ==========================================
// 2. MAIN REACT COMPONENT
// ==========================================

export const MolecularViewer3DLab: React.FC = () => {
  const [selectedMoleculeId, setSelectedMoleculeId] = useState<string>('ch4');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [displayStyle, setDisplayStyle] = useState<'ball-stick' | 'space-fill' | 'stick'>('ball-stick');
  const [showLonePairs, setShowLonePairs] = useState<boolean>(true);
  const [showBondAngles, setShowBondAngles] = useState<boolean>(true);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [rotationSpeed, setRotationSpeed] = useState<number>(1);
  const [isVibrating, setIsVibrating] = useState<boolean>(false);
  const [selectedAtomIndex, setSelectedAtomIndex] = useState<number | null>(null);
  const [hoveredAtomIndex, setHoveredAtomIndex] = useState<number | null>(null);
  const [cameraZoomLevel, setCameraZoomLevel] = useState<number>(4.2);

  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const molGroupRef = useRef<THREE.Group | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const atomsMeshMapRef = useRef<THREE.Mesh[]>([]);
  const baseAtomPositionsRef = useRef<THREE.Vector3[]>([]);

  // Animation state refs to prevent stale closure in requestAnimationFrame loop
  const isRotatingRef = useRef<boolean>(isRotating);
  const rotationSpeedRef = useRef<number>(rotationSpeed);
  const isVibratingRef = useRef<boolean>(isVibrating);

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);

  useEffect(() => {
    rotationSpeedRef.current = rotationSpeed;
  }, [rotationSpeed]);

  useEffect(() => {
    isVibratingRef.current = isVibrating;
  }, [isVibrating]);

  // Selected Molecule Data
  const currentMol = useMemo(() => {
    return MOLECULES.find(m => m.id === selectedMoleculeId) || MOLECULES[0];
  }, [selectedMoleculeId]);

  // Filtered molecules for picker
  const filteredMolecules = useMemo(() => {
    return MOLECULES.filter(m => {
      const matchCat = activeCategory === 'all' || m.category === activeCategory;
      const matchSearch = searchQuery.trim() === '' || 
        m.nameBn.includes(searchQuery) || 
        m.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) || 
        m.formula.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  // ------------------------------------------
  // 3D Scene Initialization and Reconstruction
  // ------------------------------------------
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 640;
    const height = container.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, cameraZoomLevel);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Subtle background grid platform
    const gridHelper = new THREE.GridHelper(8, 16, 0x1e293b, 0x0f172a);
    gridHelper.position.y = -2.2;
    scene.add(gridHelper);

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(5, 8, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.8);
    dirLight2.position.set(-6, -4, -4);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xa855f7, 0.6, 12);
    pointLight.position.set(0, 3, 2);
    scene.add(pointLight);

    // Group for Molecule
    const molGroup = new THREE.Group();
    scene.add(molGroup);
    molGroupRef.current = molGroup;

    // Raycaster for hover and clicking
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Mouse drag rotation state
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let rotVelocity = { x: 0, y: 0 };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Handle hover raycasting
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(atomsMeshMapRef.current, false);
      if (intersects.length > 0) {
        const hit = intersects[0].object;
        const atomIdx = (hit as any).userData?.atomIndex;
        if (typeof atomIdx === 'number') {
          setHoveredAtomIndex(atomIdx);
          container.style.cursor = 'pointer';
        }
      } else {
        setHoveredAtomIndex(null);
        container.style.cursor = isDragging ? 'grabbing' : 'grab';
      }

      if (isDragging) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        rotVelocity = { x: deltaX * 0.008, y: deltaY * 0.008 };
        molGroup.rotation.y += rotVelocity.x;
        molGroup.rotation.x += rotVelocity.y;
        prevMousePos = { x: e.clientX, y: e.clientY };
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (isDragging) {
        // If minimal movement, register click
        const dist = Math.hypot(e.clientX - prevMousePos.x, e.clientY - prevMousePos.y);
        if (dist < 3) {
          const rect = renderer.domElement.getBoundingClientRect();
          mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObjects(atomsMeshMapRef.current, false);
          if (intersects.length > 0) {
            const hit = intersects[0].object;
            const idx = (hit as any).userData?.atomIndex;
            setSelectedAtomIndex(idx !== undefined ? idx : null);
          } else {
            setSelectedAtomIndex(null);
          }
        }
      }
      isDragging = false;
      container.style.cursor = 'grab';
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const zoomDelta = e.deltaY * 0.0025;
      camera.position.z = THREE.MathUtils.clamp(camera.position.z + zoomDelta, 2.0, 7.5);
      setCameraZoomLevel(camera.position.z);
    };

    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    container.addEventListener('wheel', onWheel, { passive: false });

    // Handle container resize
    const resizeObserver = new ResizeObserver(() => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      if (nw === 0 || nh === 0) return;
      cameraRef.current.aspect = nw / nh;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(nw, nh);
    });
    resizeObserver.observe(container);

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Inertial damping / rotation (reads latest state from refs)
      if (isRotatingRef.current && !isDragging) {
        molGroup.rotation.y += delta * 0.45 * rotationSpeedRef.current;
      } else if (!isDragging) {
        rotVelocity.x *= 0.95;
        rotVelocity.y *= 0.95;
        molGroup.rotation.y += rotVelocity.x;
        molGroup.rotation.x += rotVelocity.y;
      }

      // Molecular thermal vibration animation
      if (isVibratingRef.current && baseAtomPositionsRef.current.length === atomsMeshMapRef.current.length) {
        atomsMeshMapRef.current.forEach((mesh, idx) => {
          const basePos = baseAtomPositionsRef.current[idx];
          if (!basePos) return;
          const freq = 6 + (idx % 3) * 2;
          const amp = 0.035;
          mesh.position.x = basePos.x + Math.sin(elapsed * freq + idx) * amp;
          mesh.position.y = basePos.y + Math.cos(elapsed * freq * 1.3 + idx) * amp;
          mesh.position.z = basePos.z + Math.sin(elapsed * freq * 0.8 + idx) * amp;
        });
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
      container.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      container.removeEventListener('wheel', onWheel);
      resizeObserver.disconnect();
      renderer.dispose();
      container.innerHTML = '';
    };
  }, []);

  // Update Camera zoom when state changes
  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.position.z = cameraZoomLevel;
    }
  }, [cameraZoomLevel]);

  // ------------------------------------------
  // Build 3D Molecule Mesh whenever parameters change
  // ------------------------------------------
  useEffect(() => {
    const group = molGroupRef.current;
    if (!group) return;

    // Clear existing children
    while (group.children.length > 0) {
      const obj = group.children[0];
      group.remove(obj);
      if ((obj as any).geometry) (obj as any).geometry.dispose();
      if ((obj as any).material) {
        if (Array.isArray((obj as any).material)) {
          (obj as any).material.forEach((m: any) => m.dispose());
        } else {
          (obj as any).material.dispose();
        }
      }
    }

    atomsMeshMapRef.current = [];
    baseAtomPositionsRef.current = [];

    // Helper geometries
    const sphereGeoHigh = new THREE.SphereGeometry(1, 32, 32);

    // 1. Build Atoms
    currentMol.atoms.forEach((atom, idx) => {
      const radius = displayStyle === 'space-fill' ? atom.spaceRadius : atom.ballRadius;
      const isSelected = selectedAtomIndex === idx;
      const isHovered = hoveredAtomIndex === idx;

      // Realistic polished material
      const mat = new THREE.MeshPhysicalMaterial({
        color: atom.color,
        roughness: displayStyle === 'space-fill' ? 0.45 : 0.22,
        metalness: 0.12,
        clearcoat: 0.5,
        clearcoatRoughness: 0.1,
        emissive: isSelected ? 0x38bdf8 : isHovered ? 0x64748b : 0x000000,
        emissiveIntensity: isSelected ? 0.55 : isHovered ? 0.3 : 0
      });

      const atomMesh = new THREE.Mesh(sphereGeoHigh, mat);
      atomMesh.scale.set(radius, radius, radius);
      atomMesh.position.set(atom.pos[0], atom.pos[1], atom.pos[2]);
      atomMesh.castShadow = true;
      atomMesh.receiveShadow = true;
      (atomMesh as any).userData = { atomIndex: idx, atomDef: atom };

      group.add(atomMesh);
      atomsMeshMapRef.current.push(atomMesh);
      baseAtomPositionsRef.current.push(new THREE.Vector3(atom.pos[0], atom.pos[1], atom.pos[2]));

      // Atom Label (Element symbol) on Ball & Stick
      if (displayStyle !== 'space-fill') {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 54px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.shadowColor = 'rgba(0,0,0,0.8)';
          ctx.shadowBlur = 6;
          ctx.fillText(atom.element, 64, 64);
          const texture = new THREE.CanvasTexture(canvas);
          const spriteMat = new THREE.SpriteMaterial({ map: texture, depthTest: false, transparent: true });
          const sprite = new THREE.Sprite(spriteMat);
          sprite.scale.set(0.42, 0.42, 1);
          sprite.position.set(atom.pos[0], atom.pos[1], atom.pos[2] + radius * 0.95);
          group.add(sprite);
        }
      }
    });

    // 2. Build Chemical Bonds (Stick or Ball & Stick)
    if (displayStyle !== 'space-fill') {
      const bondRadius = displayStyle === 'stick' ? 0.09 : 0.06;

      currentMol.bonds.forEach((bond) => {
        const atomA = currentMol.atoms[bond.from];
        const atomB = currentMol.atoms[bond.to];
        if (!atomA || !atomB) return;

        const pA = new THREE.Vector3(...atomA.pos);
        const pB = new THREE.Vector3(...atomB.pos);
        const dir = new THREE.Vector3().subVectors(pB, pA);
        const bondLength = dir.length();
        const midPoint = new THREE.Vector3().addVectors(pA, pB).multiplyScalar(0.5);

        // Helper function to build single bond segment
        const createBondCylinder = (offsetVec: THREE.Vector3 = new THREE.Vector3(0, 0, 0)) => {
          const bondGroup = new THREE.Group();

          // Half cylinder A (color of atom A)
          const hGeoA = new THREE.CylinderGeometry(bondRadius, bondRadius, bondLength * 0.5, 16);
          const hMatA = new THREE.MeshStandardMaterial({
            color: atomA.color,
            roughness: 0.35,
            metalness: 0.1
          });
          const meshA = new THREE.Mesh(hGeoA, hMatA);
          meshA.position.y = bondLength * 0.25;
          bondGroup.add(meshA);

          // Half cylinder B (color of atom B)
          const hGeoB = new THREE.CylinderGeometry(bondRadius, bondRadius, bondLength * 0.5, 16);
          const hMatB = new THREE.MeshStandardMaterial({
            color: atomB.color,
            roughness: 0.35,
            metalness: 0.1
          });
          const meshB = new THREE.Mesh(hGeoB, hMatB);
          meshB.position.y = -bondLength * 0.25;
          bondGroup.add(meshB);

          // Orient cylinder along dir
          const up = new THREE.Vector3(0, 1, 0);
          const normDir = dir.clone().normalize();
          const quat = new THREE.Quaternion().setFromUnitVectors(up, normDir);
          bondGroup.quaternion.copy(quat);

          bondGroup.position.copy(midPoint).add(offsetVec);
          group.add(bondGroup);
        };

        // Determine offset vectors for multiple bonds
        if (bond.order === 1) {
          createBondCylinder();
        } else if (bond.order === 2) {
          // Double bond: two parallel cylinders
          let perp = new THREE.Vector3(0, 1, 0).cross(dir).normalize();
          if (perp.lengthSq() < 0.1) perp = new THREE.Vector3(1, 0, 0).cross(dir).normalize();
          const spacing = 0.08;
          createBondCylinder(perp.clone().multiplyScalar(spacing));
          createBondCylinder(perp.clone().multiplyScalar(-spacing));
        } else if (bond.order === 3) {
          // Triple bond: three parallel cylinders
          let perp1 = new THREE.Vector3(0, 1, 0).cross(dir).normalize();
          if (perp1.lengthSq() < 0.1) perp1 = new THREE.Vector3(1, 0, 0).cross(dir).normalize();
          let perp2 = dir.clone().cross(perp1).normalize();
          const spacing = 0.085;
          createBondCylinder(new THREE.Vector3(0, 0, 0));
          createBondCylinder(perp1.clone().multiplyScalar(spacing));
          createBondCylinder(perp1.clone().multiplyScalar(-spacing));
        }
      });
    }

    // 3. Build Lone Pair Electron Cloud Lobes (H2O, NH3, etc.)
    if (showLonePairs && currentMol.lonePairsList && currentMol.lonePairsList.length > 0) {
      currentMol.lonePairsList.forEach((lp) => {
        const centerAtom = currentMol.atoms[lp.atomIndex];
        if (!centerAtom) return;

        const lobeGroup = new THREE.Group();
        const origin = new THREE.Vector3(...centerAtom.pos);
        const dir = new THREE.Vector3(...lp.dir).normalize();
        const dist = 0.95;

        // Dumbbell / teardrop lobe geometry
        const lobeGeo = new THREE.SphereGeometry(0.32, 24, 24);
        lobeGeo.scale(0.8, 1.4, 0.8);

        const lobeMat = new THREE.MeshPhysicalMaterial({
          color: 0x38bdf8,
          emissive: 0x0284c7,
          emissiveIntensity: 0.65,
          roughness: 0.2,
          transparent: true,
          opacity: 0.42,
          depthWrite: false
        });

        const lobeMesh = new THREE.Mesh(lobeGeo, lobeMat);
        const up = new THREE.Vector3(0, 1, 0);
        lobeMesh.quaternion.setFromUnitVectors(up, dir);
        lobeMesh.position.copy(origin).add(dir.clone().multiplyScalar(dist));
        lobeGroup.add(lobeMesh);

        // Two glowing electron dots inside lobe
        [-0.08, 0.08].forEach(offset => {
          const dot = new THREE.Mesh(
            new THREE.SphereGeometry(0.06, 12, 12),
            new THREE.MeshBasicMaterial({ color: 0x67e8f9 })
          );
          const sideVec = new THREE.Vector3(offset, 0, 0);
          dot.position.copy(origin).add(dir.clone().multiplyScalar(dist)).add(sideVec);
          lobeGroup.add(dot);
        });

        group.add(lobeGroup);
      });
    }

    // 4. Build Bond Angle Arcs & Degree Badges
    if (showBondAngles && currentMol.angleArcs && currentMol.angleArcs.length > 0) {
      currentMol.angleArcs.forEach(arcDef => {
        const aAtom = currentMol.atoms[arcDef.a];
        const cAtom = currentMol.atoms[arcDef.center];
        const bAtom = currentMol.atoms[arcDef.b];
        if (!aAtom || !cAtom || !bAtom) return;

        const pA = new THREE.Vector3(...aAtom.pos);
        const pC = new THREE.Vector3(...cAtom.pos);
        const pB = new THREE.Vector3(...bAtom.pos);

        const vCA = new THREE.Vector3().subVectors(pA, pC).normalize();
        const vCB = new THREE.Vector3().subVectors(pB, pC).normalize();

        const arcRadius = 0.55;
        const curvePoints: THREE.Vector3[] = [];
        const steps = 18;

        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          // Spherical linear interpolation between vectors
          const v = new THREE.Vector3().lerpVectors(vCA, vCB, t).normalize().multiplyScalar(arcRadius);
          curvePoints.push(pC.clone().add(v));
        }

        const arcGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
        const arcMat = new THREE.LineBasicMaterial({ color: 0xf59e0b, linewidth: 2 });
        const arcLine = new THREE.Line(arcGeo, arcMat);
        group.add(arcLine);

        // Angle Badge Sprite
        const midDir = new THREE.Vector3().addVectors(vCA, vCB).normalize();
        const labelPos = pC.clone().add(midDir.multiplyScalar(arcRadius + 0.28));

        const canvas = document.createElement('canvas');
        canvas.width = 160;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
          ctx.roundRect(4, 4, 152, 56, 12);
          ctx.fill();
          ctx.lineWidth = 3;
          ctx.strokeStyle = '#f59e0b';
          ctx.stroke();

          ctx.fillStyle = '#fef08a';
          ctx.font = 'bold 28px Arial, sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(arcDef.label, 80, 32);

          const texture = new THREE.CanvasTexture(canvas);
          const spriteMat = new THREE.SpriteMaterial({ map: texture, depthTest: false });
          const sprite = new THREE.Sprite(spriteMat);
          sprite.scale.set(0.55, 0.22, 1);
          sprite.position.copy(labelPos);
          group.add(sprite);
        }
      });
    }

  }, [currentMol, displayStyle, showLonePairs, showBondAngles, selectedAtomIndex, hoveredAtomIndex]);

  // Reset Camera View
  const handleResetCamera = () => {
    if (cameraRef.current && molGroupRef.current) {
      cameraRef.current.position.set(0, 0, 4.2);
      setCameraZoomLevel(4.2);
      molGroupRef.current.rotation.set(0, 0, 0);
      setSelectedAtomIndex(null);
    }
  };

  const selectedAtomData = selectedAtomIndex !== null ? currentMol.atoms[selectedAtomIndex] : null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 space-y-4">
      {/* Top Banner & Molecule Quick Selectors */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Orbit className="h-3.5 w-3.5 text-emerald-400" />
                রসায়ন ৩য় অধ্যায়: পদার্থের গঠন
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Sparkles className="h-3 w-3 text-cyan-400" />
                Interactive 3D Molecular Simulation
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <span>3D মলিকিউলার ভিউয়ার</span>
              <span className="text-cyan-400 font-mono text-lg font-normal">({currentMol.formula})</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              মিথেন, পানি, অ্যামোনিয়া সহ সাধারণ অণুর ত্রিমাত্রিক গঠন, VSEPR আণবিক জ্যামিতি, সংকরায়ণ ও বন্ধন কোণ পর্যবেক্ষণ
            </p>
          </div>

          {/* Quick Highlight Buttons (CH4, H2O, NH3) */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-400 font-medium mr-1 hidden sm:inline">সিলেবাস স্পেশাল:</span>
            {[
              { id: 'ch4', name: 'মিথেন (CH₄)', icon: '⚗️', angle: '১০৯.৫°' },
              { id: 'h2o', name: 'পানি (H₂O)', icon: '💧', angle: '১০৪.৫°' },
              { id: 'nh3', name: 'অ্যামোনিয়া (NH₃)', icon: '🧪', angle: '১০৭.০°' }
            ].map(m => (
              <button
                key={m.id}
                onClick={() => {
                  setSelectedMoleculeId(m.id);
                  setSelectedAtomIndex(null);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-md ${
                  selectedMoleculeId === m.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold ring-2 ring-emerald-300 scale-105'
                    : 'bg-slate-800/90 text-slate-200 hover:bg-slate-700 border border-slate-700/80 hover:text-white'
                }`}
              >
                <span>{m.icon}</span>
                <span>{m.name}</span>
                <span className="text-[10px] px-1 py-0.2 rounded bg-black/20 font-mono">{m.angle}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Molecules Scrollable Picker Bar */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
          <span className="text-xs text-slate-400 font-medium shrink-0 flex items-center gap-1">
            <Layers className="h-3.5 w-3.5 text-indigo-400" /> সকল অণু:
          </span>
          {MOLECULES.map(mol => {
            const isSelected = selectedMoleculeId === mol.id;
            return (
              <button
                key={mol.id}
                onClick={() => {
                  setSelectedMoleculeId(mol.id);
                  setSelectedAtomIndex(null);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 transition-all ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md ring-1 ring-cyan-300'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
                }`}
              >
                <span className="font-semibold">{mol.nameBn}</span>
                <span className="ml-1 opacity-80 font-mono text-[11px]">({mol.formula})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Grid: Left 3D Viewer & Controls, Right Educational Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left: 3D Interactive WebGL Canvas */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col">
            {/* Top Toolbar overlay */}
            <div className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-3 py-2 flex items-center justify-between z-10 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isRotating ? 'bg-emerald-400' : 'bg-slate-500'} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isRotating ? 'bg-emerald-500' : 'bg-slate-500'}`}></span>
                </span>
                <span className="text-xs font-semibold text-slate-200">
                  {currentMol.nameBn} <span className="font-mono text-cyan-400">({currentMol.formula})</span>
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/50 hidden sm:inline">
                  {currentMol.geometryBn}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Toggle Animation Button in Top Toolbar */}
                <button
                  onClick={() => setIsRotating(prev => !prev)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all border shadow-sm ${
                    isRotating
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold border-emerald-400 shadow-emerald-500/20'
                      : 'bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 border-slate-700'
                  }`}
                  title="Toggle automatic 3D rotation animation"
                >
                  {isRotating ? (
                    <Pause className="h-3.5 w-3.5 text-slate-950" />
                  ) : (
                    <Play className="h-3.5 w-3.5 text-emerald-400" />
                  )}
                  <span>Toggle Animation</span>
                  <span className={`text-[10px] px-1 py-0.2 rounded font-mono ${isRotating ? 'bg-black/25 text-slate-950' : 'bg-slate-900 text-slate-400'}`}>
                    {isRotating ? 'ON' : 'OFF'}
                  </span>
                </button>

                {/* Display Model Toggle */}
                <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setDisplayStyle('ball-stick')}
                    className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                      displayStyle === 'ball-stick' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="বল-এন্ড-স্টিক মডেল"
                  >
                    বল-স্টিক
                  </button>
                  <button
                    onClick={() => setDisplayStyle('space-fill')}
                    className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                      displayStyle === 'space-fill' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="স্পেস ফিলিং (ভ্যান ডার ওয়ালস মডেল)"
                  >
                    স্পেস ফিল
                  </button>
                  <button
                    onClick={() => setDisplayStyle('stick')}
                    className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                      displayStyle === 'stick' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="কঙ্কাল / স্টিক মডেল"
                  >
                    স্টিক
                  </button>
                </div>
              </div>
            </div>

            {/* 3D WebGL Canvas Container */}
            <div 
              ref={mountRef} 
              className="w-full h-[430px] sm:h-[490px] relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 cursor-grab active:cursor-grabbing select-none"
            >
              {/* Overlay instructions */}
              <div className="absolute top-3 left-3 bg-slate-950/70 backdrop-blur-sm border border-slate-800/80 rounded-lg px-2.5 py-1.5 pointer-events-none text-[11px] text-slate-300 space-y-0.5">
                <div className="flex items-center gap-1.5 font-medium text-slate-200">
                  <Compass className="h-3 w-3 text-cyan-400" /> ড্র্যাগ করে ঘোরান · স্ক্রোল করে জুম
                </div>
                <div className="text-[10px] text-slate-400">পরমাণুর উপর ক্লিক করে বিস্তারিত জানুন</div>
              </div>

              {/* Watermark badge */}
              <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-lg px-2 py-1 pointer-events-none text-[10px] text-slate-400 font-mono">
                Bond Angle: <span className="text-amber-400 font-bold">{currentMol.bondAngle}</span> · Hybridization: <span className="text-cyan-400 font-bold">{currentMol.hybridization}</span>
              </div>
            </div>

            {/* Bottom Controls Bar */}
            <div className="bg-slate-950/90 border-t border-slate-800 px-3 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-1.5 flex-wrap">
                {/* Toggle Animation Button in Bottom Bar */}
                <button
                  onClick={() => setIsRotating(prev => !prev)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                    isRotating
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm'
                      : 'bg-slate-800/60 text-slate-400 border-slate-700/50 hover:text-white'
                  }`}
                  title="Toggle 3D automatic spatial rotation animation"
                >
                  {isRotating ? <Pause className="h-3 w-3 text-emerald-400" /> : <Play className="h-3 w-3 text-slate-400" />}
                  <span>Toggle Animation</span>
                  <span className="text-[10px] opacity-75 font-mono">({isRotating ? 'চালু' : 'বন্ধ'})</span>
                </button>

                {/* Speed Controls */}
                {isRotating && (
                  <div className="flex items-center gap-1 bg-slate-900 px-1.5 py-0.5 rounded-lg border border-slate-800 text-[11px]">
                    <span className="text-slate-400 text-[10px]">গতি:</span>
                    {[0.5, 1, 1.8].map(spd => (
                      <button
                        key={spd}
                        onClick={() => setRotationSpeed(spd)}
                        className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-all ${
                          rotationSpeed === spd
                            ? 'bg-emerald-500 text-slate-950 font-bold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>
                )}

                {/* Lone Pairs Toggle */}
                <button
                  onClick={() => setShowLonePairs(!showLonePairs)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                    showLonePairs
                      ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                      : 'bg-slate-800/60 text-slate-400 border-slate-700/50 hover:text-white'
                  }`}
                  title="নিঃসঙ্গ মুক্তজোড় ক্লাউড দেখান/লুকান"
                >
                  <Eye className="h-3 w-3" />
                  <span>মুক্তজোড় ({currentMol.lonePairs})</span>
                </button>

                {/* Bond Angle Badge Toggle */}
                <button
                  onClick={() => setShowBondAngles(!showBondAngles)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                    showBondAngles
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-slate-800/60 text-slate-400 border-slate-700/50 hover:text-white'
                  }`}
                >
                  <Compass className="h-3 w-3" />
                  <span>কোণ নির্দেশক</span>
                </button>

                {/* Molecular Vibration Toggle */}
                <button
                  onClick={() => setIsVibrating(!isVibrating)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                    isVibrating
                      ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                      : 'bg-slate-800/60 text-slate-400 border-slate-700/50 hover:text-white'
                  }`}
                  title="আণবিক তাপীয় কম্পন সিমুলেশন"
                >
                  <Activity className="h-3 w-3" />
                  <span>কম্পন</span>
                </button>
              </div>

              {/* Camera Reset & Zoom Controls */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    const next = Math.max(2.2, cameraZoomLevel - 0.5);
                    setCameraZoomLevel(next);
                  }}
                  className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
                  title="জুম ইন"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => {
                    const next = Math.min(6.5, cameraZoomLevel + 0.5);
                    setCameraZoomLevel(next);
                  }}
                  className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
                  title="জুম আউট"
                >
                  <ZoomOut className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={handleResetCamera}
                  className="flex items-center gap-1 px-2 py-1 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 font-medium text-[11px]"
                  title="ক্যামেরা ভিউ রিসেট"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>রিসেট</span>
                </button>
              </div>
            </div>
          </div>

          {/* Atom Inspector Callout (if clicked) */}
          {selectedAtomData ? (
            <div className="bg-slate-900/95 border border-cyan-500/40 rounded-xl p-3 shadow-lg flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-1">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-md border border-white/20 shrink-0 font-mono"
                  style={{ backgroundColor: `#${selectedAtomData.color.toString(16).padStart(6, '0')}` }}
                >
                  {selectedAtomData.element}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">{selectedAtomData.nameBn}</span>
                    <span className="text-xs text-slate-400 font-mono">({selectedAtomData.nameEn})</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">Z = {selectedAtomData.z}</span>
                  </div>
                  <div className="text-xs text-slate-300 flex items-center gap-3 mt-0.5">
                    <span>বিন্যাস: <strong className="text-cyan-400 font-mono">{selectedAtomData.electronConfig}</strong></span>
                    <span>তড়িৎ-ঋণাত্মকতা: <strong className="text-amber-400">{selectedAtomData.electronegativity}</strong></span>
                    <span>যোজ্যতা: <strong className="text-emerald-400">{selectedAtomData.valency}</strong></span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedAtomIndex(null)}
                className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800"
              >
                বন্ধ করুন
              </button>
            </div>
          ) : (
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-400 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Info className="h-3.5 w-3.5 text-cyan-400" />
                <span>ত্রিমাত্রিক স্পেসের যেকোনো পরমাণুতে ক্লিক করে তার ইলেকট্রন বিন্যাস ও রাসায়নিক বৈশিষ্ট্য দেখুন।</span>
              </div>
              <span className="text-[11px] text-slate-500">মোট পরমাণু: {currentMol.atoms.length}</span>
            </div>
          )}
        </div>

        {/* Right: Educational Analysis & SSC Hot Topics */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          {/* Quick Metrics Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 flex flex-col">
              <span className="text-[11px] text-slate-400">আণবিক জ্যামিতি</span>
              <span className="text-xs sm:text-sm font-bold text-cyan-300 truncate mt-0.5">{currentMol.geometryBn}</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 flex flex-col">
              <span className="text-[11px] text-slate-400">বন্ধন কোণ</span>
              <span className="text-sm sm:text-base font-bold text-amber-300 font-mono mt-0.5">{currentMol.bondAngle}</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 flex flex-col">
              <span className="text-[11px] text-slate-400">সংকরায়ণ (Hybrid)</span>
              <span className="text-xs sm:text-sm font-bold text-emerald-300 font-mono mt-0.5">{currentMol.hybridization}</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 flex flex-col">
              <span className="text-[11px] text-slate-400">বন্ধনজোড় (Bond Pairs)</span>
              <span className="text-sm font-bold text-slate-100 font-mono mt-0.5">{currentMol.bondPairs} জোড়া</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 flex flex-col">
              <span className="text-[11px] text-slate-400">মুক্তজোড় (Lone Pairs)</span>
              <span className="text-sm font-bold text-indigo-300 font-mono mt-0.5">{currentMol.lonePairs} জোড়া</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 flex flex-col">
              <span className="text-[11px] text-slate-400">পোলারিটি ও ডাইপোল</span>
              <span className="text-xs font-bold text-purple-300 truncate mt-0.5">{currentMol.polarityBn}</span>
            </div>
          </div>

          {/* VSEPR Theory Deep Dive Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-2.5 shadow-md">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Atom className="h-4 w-4 text-emerald-400" />
              <span>VSEPR তত্ত্ব ও ইলেকট্রন বিকর্ষণ বিশ্লেষণ</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
              {currentMol.vseprDetails}
            </p>
          </div>

          {/* Comparison Table: CH4 vs NH3 vs H2O (Crucial SSC Concept) */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 space-y-2.5 shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Flame className="h-4 w-4 text-amber-400" />
                <span>CH₄, NH₃ ও H₂O বন্ড অ্যাঙ্গেল তুলনামূলক ছক</span>
              </h3>
              <span className="text-[10px] bg-amber-950 text-amber-300 px-2 py-0.5 rounded-full border border-amber-800">
                বোর্ড হট টপিক
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-medium">
                    <th className="py-1.5 px-2">অণু</th>
                    <th className="py-1.5 px-2">সংকরায়ণ</th>
                    <th className="py-1.5 px-2">বন্ধনজোড়</th>
                    <th className="py-1.5 px-2">মুক্তজোড়</th>
                    <th className="py-1.5 px-2">বন্ধন কোণ</th>
                    <th className="py-1.5 px-2">আকৃতি</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono">
                  <tr className={selectedMoleculeId === 'ch4' ? 'bg-cyan-950/40 text-cyan-200' : 'text-slate-300'}>
                    <td className="py-1.5 px-2 font-bold font-sans">CH₄ (মিথেন)</td>
                    <td className="py-1.5 px-2">sp³</td>
                    <td className="py-1.5 px-2">৪</td>
                    <td className="py-1.5 px-2 text-slate-500">০</td>
                    <td className="py-1.5 px-2 font-bold text-amber-400">১০৯.৫°</td>
                    <td className="py-1.5 px-2 font-sans">চতুস্তলকীয়</td>
                  </tr>
                  <tr className={selectedMoleculeId === 'nh3' ? 'bg-cyan-950/40 text-cyan-200' : 'text-slate-300'}>
                    <td className="py-1.5 px-2 font-bold font-sans">NH₃ (অ্যামোনিয়া)</td>
                    <td className="py-1.5 px-2">sp³</td>
                    <td className="py-1.5 px-2">৩</td>
                    <td className="py-1.5 px-2 text-indigo-400 font-bold">১</td>
                    <td className="py-1.5 px-2 font-bold text-amber-400">১০৭.০°</td>
                    <td className="py-1.5 px-2 font-sans">ত্রিকোণীয় পিরামিডীয়</td>
                  </tr>
                  <tr className={selectedMoleculeId === 'h2o' ? 'bg-cyan-950/40 text-cyan-200' : 'text-slate-300'}>
                    <td className="py-1.5 px-2 font-bold font-sans">H₂O (পানি)</td>
                    <td className="py-1.5 px-2">sp³</td>
                    <td className="py-1.5 px-2">২</td>
                    <td className="py-1.5 px-2 text-indigo-400 font-bold">২</td>
                    <td className="py-1.5 px-2 font-bold text-amber-400">১০৪.৫°</td>
                    <td className="py-1.5 px-2 font-sans">কৌণিক / ভি-আকৃতি</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-400 italic mt-1">
              * বিকর্ষণ বলের ক্রম: <strong className="text-rose-400">lp-lp &gt; lp-bp &gt; bp-bp</strong>। মুক্তজোড় সংখ্যা বৃদ্ধির সাথে সাথে কোণ সংকুচিত হয়।
            </p>
          </div>

          {/* SSC Board Exam Hot Question Insights */}
          <div className="bg-gradient-to-br from-indigo-950/50 via-slate-900 to-slate-900 border border-indigo-800/50 rounded-2xl p-4 space-y-2 shadow-md">
            <h3 className="text-sm font-bold text-indigo-300 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-indigo-400" />
              <span>এসএসসি পরীক্ষার জন্য গুরুত্বপূর্ণ নোট</span>
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
              {currentMol.sscExamTip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
