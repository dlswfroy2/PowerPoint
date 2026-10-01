/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Atom, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Zap, 
  Layers, 
  HelpCircle,
  Lightbulb,
  ShieldAlert,
  Play,
  Pause,
  Search,
  Filter
} from 'lucide-react';

export const BondingSimulator: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'ionic' | 'covalent' | 'metallic'>('ionic');

  // ==========================================
  // 1. IONIC BONDING STATE & PRESETS
  // ==========================================
  const ionicPresets = [
    // Alkali Metal Halides & Oxides
    { id: 'nacl', name: 'সোডিয়াম ক্লোরাইড (NaCl)', category: 'ক্ষার ধাতু হেলাইড', metal: 'Na', mZ: 11, mShells: [2, 8, 1], nonMetal: 'Cl', nmZ: 17, nmShells: [2, 8, 7], transferred: 1, cation: 'Na⁺', anion: 'Cl⁻', gas1: 'Ne (2, 8)', gas2: 'Ar (2, 8, 8)', equation: 'Na (2,8,1) + Cl (2,8,7) → Na⁺ (2,8) + Cl⁻ (2,8,8) → NaCl' },
    { id: 'lif', name: 'লিথিয়াম ফ্লোরাইড (LiF)', category: 'ক্ষার ধাতু হেলাইড', metal: 'Li', mZ: 3, mShells: [2, 1], nonMetal: 'F', nmZ: 9, nmShells: [2, 7], transferred: 1, cation: 'Li⁺', anion: 'F⁻', gas1: 'He (2)', gas2: 'Ne (2, 8)', equation: 'Li (2,1) + F (2,7) → Li⁺ (2) + F⁻ (2,8) → LiF' },
    { id: 'kcl', name: 'পটাশিয়াম ক্লোরাইড (KCl)', category: 'ক্ষার ধাতু হেলাইড', metal: 'K', mZ: 19, mShells: [2, 8, 8, 1], nonMetal: 'Cl', nmZ: 17, nmShells: [2, 8, 7], transferred: 1, cation: 'K⁺', anion: 'Cl⁻', gas1: 'Ar (2, 8, 8)', gas2: 'Ar (2, 8, 8)', equation: 'K (2,8,8,1) + Cl (2,8,7) → K⁺ (2,8,8) + Cl⁻ (2,8,8) → KCl' },
    { id: 'kbr', name: 'পটাশিয়াম ব্রোমাইড (KBr)', category: 'ক্ষার ধাতু হেলাইড', metal: 'K', mZ: 19, mShells: [2, 8, 8, 1], nonMetal: 'Br', nmZ: 35, nmShells: [2, 8, 18, 7], transferred: 1, cation: 'K⁺', anion: 'Br⁻', gas1: 'Ar (2, 8, 8)', gas2: 'Kr (2, 8, 18, 8)', equation: 'K + Br → K⁺ + Br⁻ → KBr' },
    { id: 'na2o', name: 'সোডিয়াম অক্সাইড (Na₂O)', category: 'ক্ষার ধাতু অক্সাইড/সালফাইড', metal: '2Na', mZ: 11, mShells: [2, 8, 1], nonMetal: 'O', nmZ: 8, nmShells: [2, 6], transferred: 2, cation: '2Na⁺', anion: 'O²⁻', gas1: 'Ne (2, 8)', gas2: 'Ne (2, 8)', equation: '2Na (2,8,1) + O (2,6) → 2Na⁺ (2,8) + O²⁻ (2,8) → Na₂O' },
    { id: 'na2s', name: 'সোডিয়াম সালফাইড (Na₂S)', category: 'ক্ষার ধাতু অক্সাইড/সালফাইড', metal: '2Na', mZ: 11, mShells: [2, 8, 1], nonMetal: 'S', nmZ: 16, nmShells: [2, 8, 6], transferred: 2, cation: '2Na⁺', anion: 'S²⁻', gas1: 'Ne (2, 8)', gas2: 'Ar (2, 8, 8)', equation: '2Na + S → 2Na⁺ + S²⁻ → Na₂S' },
    { id: 'k2o', name: 'পটাশিয়াম অক্সাইড (K₂O)', category: 'ক্ষার ধাতু অক্সাইড/সালফাইড', metal: '2K', mZ: 19, mShells: [2, 8, 8, 1], nonMetal: 'O', nmZ: 8, nmShells: [2, 6], transferred: 2, cation: '2K⁺', anion: 'O²⁻', gas1: 'Ar (2, 8, 8)', gas2: 'Ne (2, 8)', equation: '2K + O → 2K⁺ + O²⁻ → K₂O' },

    // Alkaline Earth Metal Compounds
    { id: 'mgo', name: 'ম্যাগনেসিয়াম অক্সাইড (MgO)', category: 'মৃৎক্ষার ধাতু যৌগ', metal: 'Mg', mZ: 12, mShells: [2, 8, 2], nonMetal: 'O', nmZ: 8, nmShells: [2, 6], transferred: 2, cation: 'Mg²⁺', anion: 'O²⁻', gas1: 'Ne (2, 8)', gas2: 'Ne (2, 8)', equation: 'Mg (2,8,2) + O (2,6) → Mg²⁺ (2,8) + O²⁻ (2,8) → MgO' },
    { id: 'mgcl2', name: 'ম্যাগনেসিয়াম ক্লোরাইড (MgCl₂)', category: 'মৃৎক্ষার ধাতু যৌগ', metal: 'Mg', mZ: 12, mShells: [2, 8, 2], nonMetal: '2Cl', nmZ: 17, nmShells: [2, 8, 7], transferred: 2, cation: 'Mg²⁺', anion: '2Cl⁻', gas1: 'Ne (2, 8)', gas2: 'Ar (2, 8, 8)', equation: 'Mg + 2Cl → Mg²⁺ + 2Cl⁻ → MgCl₂' },
    { id: 'cao', name: 'ক্যালসিয়াম অক্সাইড বা চুন (CaO)', category: 'মৃৎক্ষার ধাতু যৌগ', metal: 'Ca', mZ: 20, mShells: [2, 8, 8, 2], nonMetal: 'O', nmZ: 8, nmShells: [2, 6], transferred: 2, cation: 'Ca²⁺', anion: 'O²⁻', gas1: 'Ar (2, 8, 8)', gas2: 'Ne (2, 8)', equation: 'Ca (2,8,8,2) + O (2,6) → Ca²⁺ (2,8,8) + O²⁻ (2,8) → CaO' },
    { id: 'cacl2', name: 'ক্যালসিয়াম ক্লোরাইড (CaCl₂)', category: 'মৃৎক্ষার ধাতু যৌগ', metal: 'Ca', mZ: 20, mShells: [2, 8, 8, 2], nonMetal: '2Cl', nmZ: 17, nmShells: [2, 8, 7], transferred: 2, cation: 'Ca²⁺', anion: '2Cl⁻', gas1: 'Ar (2, 8, 8)', gas2: 'Ar (2, 8, 8)', equation: 'Ca + 2Cl → Ca²⁺ + 2Cl⁻ → CaCl₂' },
    { id: 'caf2', name: 'ক্যালসিয়াম ফ্লোরাইড (CaF₂)', category: 'মৃৎক্ষার ধাতু যৌগ', metal: 'Ca', mZ: 20, mShells: [2, 8, 8, 2], nonMetal: '2F', nmZ: 9, nmShells: [2, 7], transferred: 2, cation: 'Ca²⁺', anion: '2F⁻', gas1: 'Ar (2, 8, 8)', gas2: 'Ne (2, 8)', equation: 'Ca + 2F → Ca²⁺ + 2F⁻ → CaF₂' },
    { id: 'bacl2', name: 'বেরিয়াম ক্লোরাইড (BaCl₂)', category: 'মৃৎক্ষার ধাতু যৌগ', metal: 'Ba', mZ: 56, mShells: [2, 8, 18, 18, 8, 2], nonMetal: '2Cl', nmZ: 17, nmShells: [2, 8, 7], transferred: 2, cation: 'Ba²⁺', anion: '2Cl⁻', gas1: 'Xe (54)', gas2: 'Ar (18)', equation: 'Ba + 2Cl → Ba²⁺ + 2Cl⁻ → BaCl₂' },

    // Group 13 & Transition Metal Ionic Compounds
    { id: 'alcl3', name: 'অ্যালুমিনিয়াম ক্লোরাইড (AlCl₃)', category: 'উচ্চযোজী ও অবস্থান্তর ধাতব যৌগ', metal: 'Al', mZ: 13, mShells: [2, 8, 3], nonMetal: '3Cl', nmZ: 17, nmShells: [2, 8, 7], transferred: 3, cation: 'Al³⁺', anion: '3Cl⁻', gas1: 'Ne (2, 8)', gas2: 'Ar (2, 8, 8)', equation: 'Al + 3Cl → Al³⁺ + 3Cl⁻ → AlCl₃' },
    { id: 'al2o3', name: 'অ্যালুমিনিয়াম অক্সাইড (Al₂O₃)', category: 'উচ্চযোজী ও অবস্থান্তর ধাতব যৌগ', metal: '2Al', mZ: 13, mShells: [2, 8, 3], nonMetal: '3O', nmZ: 8, nmShells: [2, 6], transferred: 6, cation: '2Al³⁺', anion: '3O²⁻', gas1: 'Ne (2, 8)', gas2: 'Ne (2, 8)', equation: '2Al + 3O → 2Al³⁺ + 3O²⁻ → Al₂O₃' },
    { id: 'fecl2', name: 'ফেরাস ক্লোরাইড (FeCl₂)', category: 'উচ্চযোজী ও অবস্থান্তর ধাতব যৌগ', metal: 'Fe', mZ: 26, mShells: [2, 8, 14, 2], nonMetal: '2Cl', nmZ: 17, nmShells: [2, 8, 7], transferred: 2, cation: 'Fe²⁺', anion: '2Cl⁻', gas1: 'Fe²⁺ [Ar]3d⁶', gas2: 'Ar (18)', equation: 'Fe + 2Cl → Fe²⁺ + 2Cl⁻ → FeCl₂' },
    { id: 'fecl3', name: 'ফেরিক ক্লোরাইড (FeCl₃)', category: 'উচ্চযোজী ও অবস্থান্তর ধাতব যৌগ', metal: 'Fe', mZ: 26, mShells: [2, 8, 14, 2], nonMetal: '3Cl', nmZ: 17, nmShells: [2, 8, 7], transferred: 3, cation: 'Fe³⁺', anion: '3Cl⁻', gas1: 'Fe³⁺ [Ar]3d⁵ (অর্ধপূর্ণ)', gas2: 'Ar (18)', equation: 'Fe + 3Cl → Fe³⁺ + 3Cl⁻ → FeCl₃' },
    { id: 'cucl2', name: 'কিউপ্রিক ক্লোরাইড (CuCl₂)', category: 'উচ্চযোজী ও অবস্থান্তর ধাতব যৌগ', metal: 'Cu', mZ: 29, mShells: [2, 8, 18, 1], nonMetal: '2Cl', nmZ: 17, nmShells: [2, 8, 7], transferred: 2, cation: 'Cu²⁺', anion: '2Cl⁻', gas1: 'Cu²⁺ [Ar]3d⁹', gas2: 'Ar (18)', equation: 'Cu + 2Cl → Cu²⁺ + 2Cl⁻ → CuCl₂' },
    { id: 'zns', name: 'জিংক সালফাইড (ZnS)', category: 'উচ্চযোজী ও অবস্থান্তর ধাতব যৌগ', metal: 'Zn', mZ: 30, mShells: [2, 8, 18, 2], nonMetal: 'S', nmZ: 16, nmShells: [2, 8, 6], transferred: 2, cation: 'Zn²⁺', anion: 'S²⁻', gas1: 'Zn²⁺ [Ar]3d¹⁰', gas2: 'Ar (18)', equation: 'Zn + S → Zn²⁺ + S²⁻ → ZnS' }
  ];

  const [selectedIonicId, setSelectedIonicId] = useState<string>('nacl');
  const [ionicCategoryFilter, setIonicCategoryFilter] = useState<string>('all');
  const [isElectronTransferred, setIsElectronTransferred] = useState<boolean>(false);

  const selectedIonic = ionicPresets.find(p => p.id === selectedIonicId) || ionicPresets[0];
  const filteredIonicPresets = ionicCategoryFilter === 'all' 
    ? ionicPresets 
    : ionicPresets.filter(p => p.category === ionicCategoryFilter);

  // ==========================================
  // 2. COVALENT BONDING STATE & PRESETS
  // ==========================================
  const covalentPresets = [
    // Diatomic Homonuclear
    { id: 'h2', name: 'হাইড্রোজেন গ্যাস (H₂)', category: 'মৌলিক অণু', formula: 'H – H', atoms: '2H', type: 'একক বন্ধন', bondPairs: 1, lonePairs: 0, rule: 'দ্বিত্ব (Duet) নিয়ম', desc: 'উভয় হাইড্রোজেন পরমাণু ১টি করে ইলেকট্রন শেয়ার করে হিলিয়াম (He)-এর মতো স্থিতিশীল ডুয়েট অর্জন করে।' },
    { id: 'cl2', name: 'ক্লোরিন গ্যাস (Cl₂)', category: 'মৌলিক অণু', formula: 'Cl – Cl', atoms: '2Cl', type: 'একক বন্ধন', bondPairs: 1, lonePairs: 6, rule: 'অষ্টক (Octet) নিয়ম', desc: 'উভয় ক্লোরিন পরমাণু ১টি করে মোট ১ জোড়া ইলেকট্রন শেয়ার করে আর্গন (Ar)-এর মতো অষ্টক পূর্ণ করে। প্রতিটি Cl এ ৩ জোড়া করে মোট ৬ জোড়া মুক্তজোড় থাকে।' },
    { id: 'o2', name: 'অক্সিজেন গ্যাস (O₂)', category: 'মৌলিক অণু', formula: 'O = O', atoms: '2O', type: 'দ্বিবন্ধন (Double Bond)', bondPairs: 2, lonePairs: 4, rule: 'অষ্টক নিয়ম', desc: 'উভয় অক্সিজেন পরমাণুর যোজ্যতা স্তরে ৬টি ইলেকট্রন থাকে। প্রত্যেকে ২টি করে মোট ৪টি ইলেকট্রন (২ জোড়া) শেয়ার করে দ্বিবন্ধন তৈরি করে।' },
    { id: 'n2', name: 'নাইট্রোজেন গ্যাস (N₂)', category: 'মৌলিক অণু', formula: 'N ≡ N', atoms: '2N', type: 'ত্রিবন্ধন (Triple Bond)', bondPairs: 3, lonePairs: 2, rule: 'অষ্টক নিয়ম', desc: 'উভয় নাইট্রোজেন পরমাণু ৩টি করে মোট ৬টি ইলেকট্রন (৩ জোড়া) শেয়ার করে অত্যন্ত শক্তিশালী ত্রিবন্ধন (N≡N) গঠন করে।' },

    // Simple Compounds & Dipoles
    { id: 'hcl', name: 'হাইড্রোজেন ক্লোরাইড (HCl)', category: 'পোলার ও সাধারণ অণু', formula: 'H – Cl', atoms: 'H + Cl', type: 'পোলার একক বন্ধন', bondPairs: 1, lonePairs: 3, rule: 'H দ্বিত্ব, Cl অষ্টক', desc: 'তড়িৎ-ঋণাত্মকতার পার্থক্যের কারণে বন্ধনজোড় ইলেকট্রন Cl এর দিকে হেলে থাকে, ফলে আংশিক চার্জ (H^δ+ - Cl^δ-) তৈরি হয়।' },
    { id: 'hf', name: 'হাইড্রোজেন ফ্লোরাইড (HF)', category: 'পোলার ও সাধারণ অণু', formula: 'H – F', atoms: 'H + F', type: 'তীব্র পোলার একক বন্ধন', bondPairs: 1, lonePairs: 3, rule: 'H দ্বিত্ব, F অষ্টক', desc: 'ফ্লোরিন পর্যায় সারণির সর্বাধিক তড়িৎ-ঋণাত্মক মৌল (৪.০)। ফলে তীব্র পোলারিটি ও শক্তিশালী হাইড্রোজেন বন্ধন সৃষ্টি হয়।' },
    { id: 'h2o', name: 'পানি (H₂O)', category: 'পোলার ও সাধারণ অণু', formula: 'H – O – H (কৌণিক / V-আকৃতি)', atoms: '2H + O', type: '২টি একক বন্ধন', bondPairs: 2, lonePairs: 2, rule: 'H দ্বিত্ব, O অষ্টক', desc: 'কেন্দ্রীয় অক্সিজেনের যোজ্যতা স্তরে ৮টি ইলেকট্রন রয়েছে: ২টি বন্ধনজোড় এবং ২টি মুক্তজোড় (Lone pair) ইলেকট্রন।' },
    { id: 'h2s', name: 'হাইড্রোজেন সালফাইড (H₂S)', category: 'পোলার ও সাধারণ অণু', formula: 'H – S – H', atoms: '2H + S', type: '২টি একক বন্ধন', bondPairs: 2, lonePairs: 2, rule: 'H দ্বিত্ব, S অষ্টক', desc: 'সালফারের দুটি বন্ধনজোড় ও দুটি মুক্তজোড় ইলেকট্রন থাকে; পানির সমগোত্রীয় ভি-আকৃতির গঠন।' },
    { id: 'nh3', name: 'অ্যামোনিয়া (NH₃)', category: 'পোলার ও সাধারণ অণু', formula: 'NH₃ (ত্রিকোণীয় পিরামিডীয়)', atoms: '3H + N', type: '৩টি একক বন্ধন', bondPairs: 3, lonePairs: 1, rule: 'H দ্বিত্ব, N অষ্টক', desc: 'নাইট্রোজেনের ৩টি বন্ধনজোড় ইলেকট্রন এবং ১টি নিঃসঙ্গ মুক্তজোড় (Lone Pair) ইলেকট্রন থাকে।' },
    { id: 'ph3', name: 'ফসফিন (PH₃)', category: 'পোলার ও সাধারণ অণু', formula: 'PH₃ (ত্রিকোণীয় পিরামিডীয়)', atoms: '3H + P', type: '৩টি একক বন্ধন', bondPairs: 3, lonePairs: 1, rule: 'H দ্বিত্ব, P অষ্টক', desc: 'ফসফরাসের তিনটি বন্ধনজোড় ও একটি মুক্তজোড় ইলেকট্রন থাকে।' },

    // Hydrocarbons & Multi-atomic
    { id: 'ch4', name: 'মিথেন (CH₄)', category: 'হাইড্রোকার্বন ও বহুপারমাণবিক', formula: 'CH₄ (চতুস্তলকীয় ১০৯.৫°)', atoms: 'C + 4H', type: '৪টি একক বন্ধন', bondPairs: 4, lonePairs: 0, rule: 'C অষ্টক, H দ্বিত্ব', desc: 'কার্বনের ৪টি যোজ্যতা ইলেকট্রন ৪টি হাইড্রোজেন পরমাণুর সাথে ৪টি সমযোজী বন্ধন তৈরি করে অষ্টক পূর্ণ করে।' },
    { id: 'ccl4', name: 'কার্বন টেট্রাক্লোরাইড (CCl₄)', category: 'হাইড্রোকার্বন ও বহুপারমাণবিক', formula: 'CCl₄ (চতুস্তলকীয়)', atoms: 'C + 4Cl', type: '৪টি একক বন্ধন', bondPairs: 4, lonePairs: 12, rule: 'উভয়ের অষ্টক পূর্ণ', desc: 'কার্বনের সাথে ৪টি ক্লোরিনের ৪ জোড়া বন্ধন। প্রতিটি ক্লোরিনে ৩টি করে মোট ১২টি মুক্তজোড় ইলেকট্রন রয়েছে।' },
    { id: 'co2', name: 'কার্বন ডাই-অক্সাইড (CO₂)', category: 'হাইড্রোকার্বন ও বহুপারমাণবিক', formula: 'O = C = O (সরলরৈখিক ১৮০°)', atoms: 'C + 2O', type: '২টি দ্বিবন্ধন', bondPairs: 4, lonePairs: 4, rule: 'উভয়ের অষ্টক পূর্ণ', desc: 'কার্বনের উভয় পাশে দুটি করে মোট ৪টি বন্ধনজোড় (Double bonds) এবং অক্সিজেনে ৪টি মুক্তজোড় বিদ্যমান।' },
    { id: 'c2h4', name: 'ইথিন / ইথিলিন (C₂H₄)', category: 'হাইড্রোকার্বন ও বহুপারমাণবিক', formula: 'H₂C = CH₂', atoms: '2C + 4H', type: '১টি C=C দ্বিবন্ধন + ৪টি C-H', bondPairs: 6, lonePairs: 0, rule: 'উভয়ের অষ্টক পূর্ণ', desc: 'কার্বন-কার্বন দ্বিবন্ধন (১টি সিগমা ও ১টি পাই বন্ধন) এবং ৪টি C-H একক বন্ধন গঠিত হয়।' },
    { id: 'c2h2', name: 'ইথাইন / অ্যাসিটিলিন (C₂H₂)', category: 'হাইড্রোকার্বন ও বহুপারমাণবিক', formula: 'HC ≡ CH (সরলরৈখিক)', atoms: '2C + 2H', type: '১টি C≡C ত্রিবন্ধন + ২টি C-H', bondPairs: 5, lonePairs: 0, rule: 'উভয়ের অষ্টক পূর্ণ', desc: 'কার্বন-কার্বন ত্রিবন্ধন (১টি সিগমা ও ২টি পাই বন্ধন) দ্বারা গঠিত শক্তিশালী সমযোজী অণু।' },

    // Octet Exceptions (Contraction & Expansion)
    { id: 'bf3', name: 'বোরন ট্রাইফ্লোরাইড (BF₃)', category: 'অষ্টক নিয়মের ব্যতিক্রম', formula: 'F – B(–F) – F (সমতলীয় ত্রিকোণ)', atoms: 'B + 3F', type: '৩টি একক বন্ধন (অষ্টক সংকোচন)', bondPairs: 3, lonePairs: 9, rule: 'অষ্টক সংকোচন (৬ e⁻)', desc: 'বোরনের সর্বশেষ স্তরে ৩ জোড়া বা ৬টি ইলেকট্রন থাকে। অষ্টক পূর্ণ না হওয়া সত্ত্বেও অণুটি গঠিত হয় (Octet Contraction)।' },
    { id: 'becl2', name: 'বেরিলিয়াম ক্লোরাইড (BeCl₂)', category: 'অষ্টক নিয়মের ব্যতিক্রম', formula: 'Cl – Be – Cl (সরলরৈখিক)', atoms: 'Be + 2Cl', type: '২টি একক বন্ধন (অষ্টক সংকোচন)', bondPairs: 2, lonePairs: 6, rule: 'অষ্টক সংকোচন (৪ e⁻)', desc: 'বেরিলিয়ামের শেষ স্তরে মাত্র ২টি বন্ধনজোড় বা ৪টি ইলেকট্রন থাকে; এটিও অষ্টক সংকোচন।' },
    { id: 'pcl5', name: 'ফসফরাস পেন্টাক্লোরাইড (PCl₅)', category: 'অষ্টক নিয়মের ব্যতিক্রম', formula: 'PCl₅ (ত্রিকোণীয় দ্বি-পিরামিডীয়)', atoms: 'P + 5Cl', type: '৫টি একক বন্ধন (অষ্টক সম্প্রসারণ)', bondPairs: 5, lonePairs: 15, rule: 'অষ্টক সম্প্রসারণ (১০ e⁻)', desc: 'ফসফরাসের ডি (d) অরবিটালের উপস্থিতির কারণে এর যোজ্যতা স্তরে ৫ জোড়া বা ১০টি ইলেকট্রন স্থান পায় (Octet Expansion)।' },
    { id: 'sf6', name: 'সালফার হেক্সাফ্লোরাইড (SF₆)', category: 'অষ্টক নিয়মের ব্যতিক্রম', formula: 'SF₆ (অষ্টতলকীয়)', atoms: 'S + 6F', type: '৬টি একক বন্ধন (অষ্টক সম্প্রসারণ)', bondPairs: 6, lonePairs: 18, rule: 'অষ্টক সম্প্রসারণ (১২ e⁻)', desc: 'সালফারের যোজ্যতা স্তরে ৬ জোড়া বা ১২টি ইলেকট্রন বিদ্যমান। এটি অষ্টক সম্প্রসারণের চমৎকার পাঠ্যবইয়ের উদাহরণ।' }
  ];

  const [selectedCovalentId, setSelectedCovalentId] = useState<string>('h2o');
  const [covalentCategoryFilter, setCovalentCategoryFilter] = useState<string>('all');
  const selectedCovalent = covalentPresets.find(p => p.id === selectedCovalentId) || covalentPresets[0];
  const filteredCovalentPresets = covalentCategoryFilter === 'all'
    ? covalentPresets
    : covalentPresets.filter(p => p.category === covalentCategoryFilter);

  // ==========================================
  // 3. METALLIC BONDING STATE & PRESETS
  // ==========================================
  const metalPresets = [
    { id: 'cu', name: 'তামা / কপার (Copper)', symbol: 'Cu', cation: 'Cu²⁺', valenceElectrons: 2, conductivity: 'উচ্চতম (59.6 × 10⁶ S/m)', latticeColor: 'from-amber-600 to-amber-800', desc: 'কপারের পারমাণবিক শাঁস (Cu²⁺) এবং সঞ্চরণশীল ইলেকট্রন সাগর দ্বারা গঠিত। বিদ্যুৎ ও তার তৈরিতে ব্যাপকভাবে ব্যবহৃত।' },
    { id: 'ag', name: 'রূপা / সিলভার (Silver)', symbol: 'Ag', cation: 'Ag⁺', valenceElectrons: 1, conductivity: 'সর্বোচ্চ (63.0 × 10⁶ S/m)', latticeColor: 'from-slate-300 to-slate-500', desc: 'প্রকৃতির সকল ধাতুর মধ্যে রূপার বিদ্যুৎ ও তাপ পরিবাহিতা সর্বোচ্চ। প্রতিটি পরমাণু ১টি করে মুক্ত ইলেকট্রন দান করে।' },
    { id: 'al', name: 'অ্যালুমিনিয়াম (Aluminum)', symbol: 'Al', cation: 'Al³⁺', valenceElectrons: 3, conductivity: 'খুব ভালো (37.7 × 10⁶ S/m)', latticeColor: 'from-sky-500 to-sky-700', desc: 'প্রতিটি অ্যালুমিনিয়াম পরমাণু ৩টি করে সঞ্চরণশীল ইলেকট্রন সরবরাহ করায় ইলেকট্রন সাগরের ঘনত্ব সর্বাধিক!' },
    { id: 'au', name: 'সোনা / গোল্ড (Gold)', symbol: 'Au', cation: 'Au⁺', valenceElectrons: 1, conductivity: 'চমৎকার (41.0 × 10⁶ S/m)', latticeColor: 'from-yellow-400 to-amber-600', desc: 'অত্যন্ত নমনীয় (Malleable) ও প্রসারণশীল ধাতু। সহজে জারিত হয় না এবং উৎকৃষ্ট বিদ্যুৎ পরিবাহী।' },
    { id: 'na', name: 'সোডিয়াম (Sodium)', symbol: 'Na', cation: 'Na⁺', valenceElectrons: 1, conductivity: 'মাঝারি (21.0 × 10⁶ S/m)', latticeColor: 'from-cyan-600 to-cyan-800', desc: 'ক্ষার ধাতু। ১টি মাত্র যোজ্যতা ইলেকট্রন থাকায় ধাতব বন্ধন অপেক্ষাকৃত দুর্বল এবং ধাতু নরম (ছুরি দিয়ে কাটা যায়)।' },
    { id: 'fe', name: 'লোহা / আয়রন (Iron)', symbol: 'Fe', cation: 'Fe²⁺', valenceElectrons: 2, conductivity: 'মাঝারি (10.0 × 10⁶ S/m)', latticeColor: 'from-slate-600 to-slate-800', desc: 'ডি-ব্লকের শক্ত ধাতু। পারমাণবিক শাঁসের সাথে ইলেকট্রন সাগরের তীব্র আকর্ষণ বল বিদ্যমান।' },
    { id: 'mg', name: 'ম্যাগনেসিয়াম (Magnesium)', symbol: 'Mg', cation: 'Mg²⁺', valenceElectrons: 2, conductivity: 'ভালো (22.7 × 10⁶ S/m)', latticeColor: 'from-emerald-600 to-emerald-800', desc: 'মৃৎক্ষার ধাতু। প্রতিটি পরমাণু ২টি করে মুক্ত ইলেকট্রন যোগান দিয়ে ধাতব কেলাস গঠন করে।' },
    { id: 'zn', name: 'দস্তা / জিংক (Zinc)', symbol: 'Zn', cation: 'Zn²⁺', valenceElectrons: 2, conductivity: 'ভালো (16.6 × 10⁶ S/m)', latticeColor: 'from-indigo-600 to-indigo-800', desc: 'জিংক কেলাসে মুক্ত ইলেকট্রন বিদ্যুৎ পরিবহন করে এবং ক্ষয়রোধী গ্যালভানাইজিংয়ে ব্যবহৃত হয়।' }
  ];

  const [selectedMetalId, setSelectedMetalId] = useState<string>('cu');
  const [voltage, setVoltage] = useState<number>(6); // 0 to 12 Volts
  const [isVoltageApplied, setIsVoltageApplied] = useState<boolean>(true);
  const selectedMetal = metalPresets.find(m => m.id === selectedMetalId) || metalPresets[0];

  // Calculated current (Ohm's Law simulation)
  const currentAmps = isVoltageApplied ? ((voltage * selectedMetal.valenceElectrons * 1.5).toFixed(1)) : '0.0';

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 py-6 space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              অধ্যায় ৫: রাসায়নিক বন্ধন
            </span>
            <span className="text-xs text-slate-400">সকল প্রকার অণু, পরমাণু ও ধাতব কেলাসের পূর্ণাঙ্গ সিমুলেটর</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Atom className="h-6 w-6 text-cyan-400" />
            রাসায়নিক বন্ধন সিমুলেটর (Bonding Simulator)
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            আয়নিক বন্ধন (ইলেকট্রন স্থানান্তর), সমযোজী লুইস ডট শেয়ারিং এবং বিভিন্ন ধাতুর সঞ্চরণশীল ইলেকট্রন সাগরের লাইভ ল্যাব।
          </p>
        </div>

        {/* Bond Type Switcher */}
        <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto shrink-0">
          <button
            onClick={() => setActiveMode('ionic')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeMode === 'ionic' ? 'bg-cyan-500 text-slate-950 shadow-md font-extrabold' : 'text-slate-400 hover:text-white'
            }`}
          >
            আয়নিক বন্ধন ({ionicPresets.length}টি যৌগ)
          </button>
          <button
            onClick={() => setActiveMode('covalent')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeMode === 'covalent' ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold' : 'text-slate-400 hover:text-white'
            }`}
          >
            সমযোজী বন্ধন ({covalentPresets.length}টি অণু)
          </button>
          <button
            onClick={() => setActiveMode('metallic')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeMode === 'metallic' ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold' : 'text-slate-400 hover:text-white'
            }`}
          >
            ধাতব বন্ধন ({metalPresets.length}টি ধাতু)
          </button>
        </div>
      </div>

      {/* ========================================================
          MODE 1: IONIC BONDING SIMULATOR
          ======================================================== */}
      {activeMode === 'ionic' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6">
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                ইলেকট্রন স্থানান্তর ও স্থির-বৈদ্যুতিক আকর্ষণ বল
              </span>
              <h3 className="text-lg font-bold text-white">আয়নিক বন্ধন সৃষ্টির ইন্টারঅ্যাক্টিভ অ্যানিমেশন</h3>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-slate-400 font-semibold text-[11px] mr-1">শ্রেণি:</span>
              {[
                { id: 'all', label: 'সকল যৌগ' },
                { id: 'ক্ষার ধাতু হেলাইড', label: 'ক্ষার ধাতু হেলাইড' },
                { id: 'ক্ষার ধাতু অক্সাইড/সালফাইড', label: 'অক্সাইড/সালফাইড' },
                { id: 'মৃৎক্ষার ধাতু যৌগ', label: 'মৃৎক্ষার ধাতু' },
                { id: 'উচ্চযোজী ও অবস্থান্তর ধাতব যৌগ', label: 'অবস্থান্তর ধাতু' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setIonicCategoryFilter(cat.id)}
                  className={`px-2.5 py-1 rounded-lg transition text-[11px] ${
                    ionicCategoryFilter === cat.id
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Preset Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {filteredIonicPresets.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedIonicId(item.id);
                  setIsElectronTransferred(false);
                }}
                className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                  selectedIonic.id === item.id
                    ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <div className="font-bold text-xs truncate">{item.name.split(' (')[0]}</div>
                <div className="text-[10px] text-cyan-400 font-mono mt-0.5">{item.name.split('(')[1]?.replace(')', '') || ''}</div>
                <div className="text-[9px] text-slate-500 mt-1 truncate">{item.category}</div>
              </button>
            ))}
          </div>

          {/* Main Visualizer: Before and After Electron Transfer */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 relative overflow-hidden min-h-[300px] flex flex-col items-center justify-center">
            <div className="w-full flex flex-col md:flex-row items-center justify-around gap-8 relative z-10">
              {/* Metal Atom / Cation */}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="relative flex items-center justify-center">
                  {/* Outer Orbit */}
                  <div className={`w-36 h-36 rounded-full border-2 ${isElectronTransferred ? 'border-dashed border-slate-700' : 'border-cyan-400/60 animate-pulse'} flex items-center justify-center relative`}>
                    {/* Middle Orbit */}
                    <div className="w-24 h-24 rounded-full border border-slate-700 flex items-center justify-center">
                      {/* Nucleus */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex flex-col items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/30">
                        <span className="text-sm font-black">{selectedIonic.metal}</span>
                        <span className="text-[9px] font-mono">Z={selectedIonic.mZ}</span>
                      </div>
                    </div>

                    {/* Outer Valence Electron(s) */}
                    {!isElectronTransferred && (
                      <div className="absolute -top-2 w-4 h-4 rounded-full bg-amber-400 text-slate-950 font-bold text-[8px] flex items-center justify-center animate-bounce shadow-md shadow-amber-400">
                        e⁻
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white">
                    {isElectronTransferred ? `${selectedIonic.cation} ক্যাটায়ন` : `${selectedIonic.metal} পরমাণু`}
                  </h4>
                  <p className="text-xs font-mono text-cyan-400">
                    ইলেকট্রন বিন্যাস: {isElectronTransferred ? selectedIonic.gas1 : selectedIonic.mShells.join(', ')}
                  </p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">
                    {isElectronTransferred ? '✓ ধনাত্মক আয়নে পরিণত' : `${selectedIonic.transferred}টি ইলেকট্রন ত্যাগ করতে প্রস্তুত`}
                  </span>
                </div>
              </div>

              {/* Transfer Arrow & Action Button */}
              <div className="flex flex-col items-center justify-center gap-2">
                <button
                  onClick={() => setIsElectronTransferred(!isElectronTransferred)}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs transition flex items-center gap-2 cursor-pointer shadow-lg ${
                    isElectronTransferred
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-cyan-500/20 animate-pulse'
                  }`}
                >
                  {isElectronTransferred ? (
                    <>
                      <RotateCcw className="h-4 w-4" />
                      পূর্বাবস্থায় ফিরুন
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      ইলেকট্রন স্থানান্তর করুন ({selectedIonic.transferred} e⁻)
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-1">
                  <ArrowRight className={`h-4 w-4 text-cyan-400 ${isElectronTransferred ? '' : 'animate-bounce'}`} />
                  <span>{isElectronTransferred ? 'আয়নদ্বয়ের আকর্ষণ সৃষ্টি' : 'ইলেকট্রন প্রবাহ'}</span>
                </div>
              </div>

              {/* Non-Metal Atom / Anion */}
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="relative flex items-center justify-center">
                  {/* Outer Orbit */}
                  <div className={`w-36 h-36 rounded-full border-2 ${isElectronTransferred ? 'border-emerald-400/80 shadow-lg shadow-emerald-500/20' : 'border-slate-700'} flex items-center justify-center relative`}>
                    {/* Middle Orbit */}
                    <div className="w-24 h-24 rounded-full border border-slate-700 flex items-center justify-center">
                      {/* Nucleus */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex flex-col items-center justify-center text-slate-950 font-bold shadow-lg shadow-emerald-500/30">
                        <span className="text-sm font-black">{selectedIonic.nonMetal}</span>
                        <span className="text-[9px] font-mono">Z={selectedIonic.nmZ}</span>
                      </div>
                    </div>

                    {/* Received Electron(s) */}
                    {isElectronTransferred && (
                      <div className="absolute -top-2 w-4 h-4 rounded-full bg-amber-400 text-slate-950 font-bold text-[8px] flex items-center justify-center animate-pulse shadow-md shadow-amber-400">
                        e⁻
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white">
                    {isElectronTransferred ? `${selectedIonic.anion} অ্যানায়ন` : `${selectedIonic.nonMetal} পরমাণু`}
                  </h4>
                  <p className="text-xs font-mono text-emerald-400">
                    ইলেকট্রন বিন্যাস: {isElectronTransferred ? selectedIonic.gas2 : selectedIonic.nmShells.join(', ')}
                  </p>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">
                    {isElectronTransferred ? '✓ অষ্টক পূর্ণ (স্থিতিশীল)' : `${selectedIonic.transferred}টি ইলেকট্রন ঘাটতি`}
                  </span>
                </div>
              </div>
            </div>

            {/* Ionic Bond Status Card */}
            {isElectronTransferred && (
              <div className="mt-6 p-4 bg-slate-900/90 border border-cyan-500/40 rounded-xl text-center space-y-1.5 max-w-xl w-full">
                <div className="flex items-center justify-center gap-2 text-cyan-400 font-bold text-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  আয়নিক বন্ধন ও কেলাস জালি তৈরি সম্পন্ন!
                </div>
                <div className="text-xs font-mono font-bold text-amber-300">
                  {selectedIonic.equation}
                </div>
                <p className="text-[11px] text-slate-400">
                  বিপরীতধর্মী {selectedIonic.cation} ও {selectedIonic.anion} আয়নের মধ্যকার তীব্র স্থির-বৈদ্যুতিক আকর্ষণ বলের (Electrostatic Force) মাধ্যমে শক্তিশালী আয়নিক কেলাস গঠিত হয়েছে।
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================
          MODE 2: COVALENT BONDING SIMULATOR
          ======================================================== */}
      {activeMode === 'covalent' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6">
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                ইলেকট্রন শেয়ারিং ও লুইস গঠন (Lewis Structure)
              </span>
              <h3 className="text-lg font-bold text-white">সমযোজী অণু ও বন্ধনজোড়/মুক্তজোড় সিমুলেশন</h3>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-slate-400 font-semibold text-[11px] mr-1">শ্রেণি:</span>
              {[
                { id: 'all', label: 'সকল অণু' },
                { id: 'মৌলিক অণু', label: 'মৌলিক অণু (H₂, O₂, N₂)' },
                { id: 'পোলার ও সাধারণ অণু', label: 'পোলার/দ্বিমেরু (H₂O, NH₃)' },
                { id: 'হাইড্রোকার্বন ও বহুপারমাণবিক', label: 'হাইড্রোকার্বন (CH₄, C₂H₄)' },
                { id: 'অষ্টক নিয়মের ব্যতিক্রম', label: 'অষ্টক ব্যতিক্রম (BF₃, PCl₅)' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCovalentCategoryFilter(cat.id)}
                  className={`px-2.5 py-1 rounded-lg transition text-[11px] ${
                    covalentCategoryFilter === cat.id
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Molecule Selection Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {filteredCovalentPresets.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedCovalentId(item.id)}
                className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                  selectedCovalent.id === item.id
                    ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <div className="font-bold text-xs truncate">{item.name.split(' (')[0]}</div>
                <div className="text-[10px] text-emerald-400 font-mono mt-0.5">{item.name.split('(')[1]?.replace(')', '') || ''}</div>
                <div className="text-[9px] text-slate-500 mt-1">{item.type.split(' ')[0]}</div>
              </button>
            ))}
          </div>

          {/* Interactive Structural & Lewis Visualization */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">
              গাঠনিক সমযোজী বন্ধন ও লুইস বিন্যাস:
            </span>

            {/* Glowing Big Formula Box */}
            <div className="text-3xl sm:text-4xl md:text-5xl font-black font-mono text-white tracking-widest my-4 p-5 bg-slate-900/90 rounded-2xl border border-emerald-500/40 shadow-xl shadow-emerald-500/10 max-w-xl w-full">
              {selectedCovalent.formula}
            </div>

            {/* Pair Statistics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl mt-2 text-xs">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 block mb-0.5">বন্ধনের প্রকার</span>
                <span className="font-bold text-emerald-400 text-xs sm:text-sm">{selectedCovalent.type}</span>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 block mb-0.5">বন্ধনজোড় (BP)</span>
                <span className="font-mono font-bold text-cyan-400 text-xs sm:text-sm">{selectedCovalent.bondPairs} জোড়া ({selectedCovalent.bondPairs * 2}টি e⁻)</span>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 block mb-0.5">মুক্তজোড় (LP)</span>
                <span className="font-mono font-bold text-amber-400 text-xs sm:text-sm">{selectedCovalent.lonePairs} জোড়া ({selectedCovalent.lonePairs * 2}টি e⁻)</span>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-400 block mb-0.5">অষ্টক নীতি</span>
                <span className="font-bold text-purple-300 text-xs sm:text-sm">{selectedCovalent.rule}</span>
              </div>
            </div>

            {/* Scientific Explanation */}
            <div className="mt-4 p-4 bg-slate-900/60 border border-emerald-500/30 rounded-xl text-left text-xs sm:text-sm text-slate-300 space-y-1.5 max-w-2xl w-full">
              <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                <Lightbulb className="h-4 w-4" />
                শেয়ারিং ও বন্ধন কৌশল:
              </div>
              <p className="leading-relaxed">{selectedCovalent.desc}</p>
              <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80">
                • <strong>বন্ধনজোড় (Bond Pair):</strong> যে ইলেকট্রন জোড়াগুলো পরমাণুদ্বয়ের মধ্যে শেয়ার হয়ে বন্ধনে অংশ নেয়।<br />
                • <strong>মুক্তজোড় (Lone Pair):</strong> যোজ্যতা স্তরের যে ইলেকট্রন জোড়াগুলো বন্ধন গঠনে অংশ না নিয়ে স্বাধীনভাবে অবস্থান করে।
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MODE 3: METALLIC BONDING (ELECTRON SEA MODEL)
          ======================================================== */}
      {activeMode === 'metallic' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6">
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                পারমাণবিক শাঁস ও সঞ্চরণশীল মুক্ত ইলেকট্রন সাগর
              </span>
              <h3 className="text-lg font-bold text-white">ধাতব কেলাসের মুক্ত ইলেকট্রন ও বিদ্যুৎ প্রবাহ ল্যাব</h3>
            </div>

            {/* Voltage Toggle Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsVoltageApplied(!isVoltageApplied)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer shadow-lg ${
                  isVoltageApplied
                    ? 'bg-amber-500 text-slate-950 shadow-amber-500/20 font-black'
                    : 'bg-slate-950 border border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                <Zap className={`h-4 w-4 ${isVoltageApplied ? 'text-slate-950 animate-bounce' : 'text-amber-400'}`} />
                <span>{isVoltageApplied ? 'বিদ্যুৎ প্রবাহ সক্রিয় (ON)' : 'বিদ্যুৎ প্রবাহ চালু করুন'}</span>
              </button>
            </div>
          </div>

          {/* Metal Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {metalPresets.map((metal) => (
              <button
                key={metal.id}
                onClick={() => setSelectedMetalId(metal.id)}
                className={`p-2.5 rounded-xl border text-center transition cursor-pointer ${
                  selectedMetal.id === metal.id
                    ? 'bg-amber-500/20 border-amber-400 text-white shadow-lg shadow-amber-500/10'
                    : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <div className="font-bold text-xs truncate">{metal.name.split(' (')[0]}</div>
                <div className="text-[10px] text-amber-400 font-mono mt-0.5">{metal.symbol} ({metal.cation})</div>
                <div className="text-[9px] text-slate-500 mt-1">{metal.valenceElectrons} e⁻ সাগর</div>
              </button>
            ))}
          </div>

          {/* Voltage & Current Slider Bar */}
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-xs text-slate-400 font-semibold uppercase">প্রযুক্ত বিভব (Voltage):</span>
              <input
                type="range"
                min="0"
                max="12"
                step="1"
                value={voltage}
                onChange={(e) => {
                  setVoltage(Number(e.target.value));
                  if (!isVoltageApplied) setIsVoltageApplied(true);
                }}
                className="accent-amber-400 cursor-pointer w-36"
              />
              <span className="text-sm font-mono font-bold text-amber-400">{voltage} V</span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">তড়িৎ প্রবাহ (Ammeter):</span>
                <span className="text-base font-bold text-cyan-400 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                  {currentAmps} A
                </span>
              </div>
              <div className="hidden md:flex items-center gap-1.5 text-slate-400">
                <span>পরিবাহিতা:</span>
                <span className="text-emerald-400 font-bold">{selectedMetal.conductivity}</span>
              </div>
            </div>
          </div>

          {/* Canvas for Electron Sea Simulation */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 relative overflow-hidden min-h-[340px] flex flex-col items-center justify-center">
            {/* Battery / Voltage Indicators */}
            <div className="w-full max-w-3xl flex items-center justify-between text-xs font-mono font-bold mb-3 px-2">
              <span className={`px-3 py-1 rounded border flex items-center gap-1.5 ${isVoltageApplied && voltage > 0 ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 animate-pulse' : 'bg-slate-900 text-slate-500 border-slate-800'}`}>
                নেগেটিভ ক্যাথোড (–)
              </span>
              <span className="text-xs text-slate-400">{selectedMetal.name} স্ফটিক কেলাস (Metallic Lattice)</span>
              <span className={`px-3 py-1 rounded border flex items-center gap-1.5 ${isVoltageApplied && voltage > 0 ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 animate-pulse' : 'bg-slate-900 text-slate-500 border-slate-800'}`}>
                পজিটিভ অ্যানোড (+)
              </span>
            </div>

            {/* Metallic Grid with Atomic Cores and Drifting Electrons */}
            <div className="relative w-full max-w-3xl h-60 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 overflow-hidden shadow-inner">
              {/* Atomic Cores (Cations in fixed regular lattice) */}
              <div className="grid grid-cols-6 grid-rows-3 gap-6 h-full items-center justify-items-center relative z-10">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${selectedMetal.latticeColor} border-2 border-white/20 flex flex-col items-center justify-center text-xs font-mono font-black text-white shadow-lg shadow-amber-500/10`}
                  >
                    <span>{selectedMetal.cation}</span>
                  </div>
                ))}
              </div>

              {/* Swarm of Free Electrons floating / streaming */}
              <div className="absolute inset-0 z-20 pointer-events-none">
                {Array.from({ length: 28 * selectedMetal.valenceElectrons }).map((_, i) => {
                  const top = (i * 13) % 85 + 5;
                  const left = (i * 19) % 92 + 3;
                  const speed = isVoltageApplied && voltage > 0 ? (12 / (voltage + 1)) : 0;
                  return (
                    <div
                      key={i}
                      style={{
                        top: `${top}%`,
                        left: `${left}%`,
                        transition: 'transform 0.4s ease-out',
                        transform: isVoltageApplied && voltage > 0 ? `translateX(${voltage * 4}px)` : 'none'
                      }}
                      className={`absolute w-3 h-3 rounded-full bg-cyan-300 shadow-sm shadow-cyan-300 flex items-center justify-center text-[7px] font-bold text-slate-950 ${
                        isVoltageApplied && voltage > 0 ? 'animate-pulse' : ''
                      }`}
                    >
                      e⁻
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Scientific Explanation Footer */}
            <div className="mt-4 text-xs text-slate-300 text-center max-w-xl space-y-1">
              {isVoltageApplied && voltage > 0 ? (
                <div className="text-amber-400 font-bold flex items-center justify-center gap-1.5">
                  <Zap className="h-4 w-4" />
                  বিভব পার্থক্য ({voltage}V) প্রয়োগে {selectedMetal.symbol} এর মুক্ত ইলেকট্রন সাগর ক্যাথোড থেকে অ্যানোডের দিকে সমবেতভাবে প্রবাহিত হচ্ছে! কারেন্ট: {currentAmps} A।
                </div>
              ) : (
                <div className="text-slate-400">
                  বিভবহীন অবস্থায় মুক্ত ইলেকট্রনগুলো পারমাণবিক শাঁসসমূহের মধ্যবর্তী স্থানে বিশৃঙ্খলভাবে চতুর্দিকে বিচরণ করে।
                </div>
              )}
              <p className="text-[11px] text-slate-400">{selectedMetal.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
