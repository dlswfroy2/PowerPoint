/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Check, 
  Layers, 
  Lightbulb, 
  BookOpen, 
  CheckCircle2,
  Atom,
  Scale,
  Search,
  Filter,
  Calculator
} from 'lucide-react';

interface IonData {
  id: string;
  nameBn: string;
  symbol: string;
  valency: number;
  charge: string;
  category: string;
  atomicMass?: number;
  isRadical?: boolean;
  baseSymbol: string; // for formula building
}

export const FormulaBuilderLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'builder' | 'latent' | 'radicals'>('builder');

  // Search & Filter state for Builder
  const [cationSearch, setCationSearch] = useState<string>('');
  const [anionSearch, setAnionSearch] = useState<string>('');
  const [cationCategory, setCationCategory] = useState<string>('all');
  const [anionCategory, setAnionCategory] = useState<string>('all');

  // ==========================================
  // 1. COMPREHENSIVE CATION LIST (ALL METALS & RADICALS)
  // ==========================================
  const cations: IonData[] = [
    // Alkali Metals (Group 1)
    { id: 'h', nameBn: 'হাইড্রোজেন', symbol: 'H⁺', baseSymbol: 'H', valency: 1, charge: '+1', category: 'ক্ষার ধাতু ও অধাতু', atomicMass: 1.008 },
    { id: 'li', nameBn: 'লিথিয়াম', symbol: 'Li⁺', baseSymbol: 'Li', valency: 1, charge: '+1', category: 'ক্ষার ধাতু ও অধাতু', atomicMass: 6.94 },
    { id: 'na', nameBn: 'সোডিয়াম', symbol: 'Na⁺', baseSymbol: 'Na', valency: 1, charge: '+1', category: 'ক্ষার ধাতু ও অধাতু', atomicMass: 23 },
    { id: 'k', nameBn: 'পটাশিয়াম', symbol: 'K⁺', baseSymbol: 'K', valency: 1, charge: '+1', category: 'ক্ষার ধাতু ও অধাতু', atomicMass: 39.1 },
    { id: 'rb', nameBn: 'রুবিডিয়াম', symbol: 'Rb⁺', baseSymbol: 'Rb', valency: 1, charge: '+1', category: 'ক্ষার ধাতু ও অধাতু', atomicMass: 85.47 },
    { id: 'cs', nameBn: 'সিজিয়াম', symbol: 'Cs⁺', baseSymbol: 'Cs', valency: 1, charge: '+1', category: 'ক্ষার ধাতু ও অধাতু', atomicMass: 132.9 },

    // Alkaline Earth Metals (Group 2)
    { id: 'be', nameBn: 'বেরিলিয়াম', symbol: 'Be²⁺', baseSymbol: 'Be', valency: 2, charge: '+2', category: 'মৃৎক্ষার ধাতু', atomicMass: 9.012 },
    { id: 'mg', nameBn: 'ম্যাগনেসিয়াম', symbol: 'Mg²⁺', baseSymbol: 'Mg', valency: 2, charge: '+2', category: 'মৃৎক্ষার ধাতু', atomicMass: 24.3 },
    { id: 'ca', nameBn: 'ক্যালসিয়াম', symbol: 'Ca²⁺', baseSymbol: 'Ca', valency: 2, charge: '+2', category: 'মৃৎক্ষার ধাতু', atomicMass: 40.08 },
    { id: 'sr', nameBn: 'স্ট্রনসিয়াম', symbol: 'Sr²⁺', baseSymbol: 'Sr', valency: 2, charge: '+2', category: 'মৃৎক্ষার ধাতু', atomicMass: 87.62 },
    { id: 'ba', nameBn: 'বেরিয়াম', symbol: 'Ba²⁺', baseSymbol: 'Ba', valency: 2, charge: '+2', category: 'মৃৎক্ষার ধাতু', atomicMass: 137.33 },

    // Group 13 & 14 Elements
    { id: 'b', nameBn: 'বোরন', symbol: 'B³⁺', baseSymbol: 'B', valency: 3, charge: '+3', category: 'গ্রুপ ১৩ ও ১৪ মৌল', atomicMass: 10.81 },
    { id: 'al', nameBn: 'অ্যালুমিনিয়াম', symbol: 'Al³⁺', baseSymbol: 'Al', valency: 3, charge: '+3', category: 'গ্রুপ ১৩ ও ১৪ মৌল', atomicMass: 27 },
    { id: 'ga', nameBn: 'গ্যালিয়াম', symbol: 'Ga³⁺', baseSymbol: 'Ga', valency: 3, charge: '+3', category: 'গ্রুপ ১৩ ও ১৪ মৌল', atomicMass: 69.72 },
    { id: 'in', nameBn: 'ইন্ডিয়াম', symbol: 'In³⁺', baseSymbol: 'In', valency: 3, charge: '+3', category: 'গ্রুপ ১৩ ও ১৪ মৌল', atomicMass: 114.82 },
    { id: 'sn2', nameBn: 'স্ট্যানাস (টিন-২)', symbol: 'Sn²⁺', baseSymbol: 'Sn', valency: 2, charge: '+2', category: 'গ্রুপ ১৩ ও ১৪ মৌল', atomicMass: 118.71 },
    { id: 'sn4', nameBn: 'স্ট্যানিক (টিন-৪)', symbol: 'Sn⁴⁺', baseSymbol: 'Sn', valency: 4, charge: '+4', category: 'গ্রুপ ১৩ ও ১৪ মৌল', atomicMass: 118.71 },
    { id: 'pb2', nameBn: 'প্লাম্বাস (লেড-২)', symbol: 'Pb²⁺', baseSymbol: 'Pb', valency: 2, charge: '+2', category: 'গ্রুপ ১৩ ও ১৪ মৌল', atomicMass: 207.2 },
    { id: 'pb4', nameBn: 'প্লাম্বিক (লেড-৪)', symbol: 'Pb⁴⁺', baseSymbol: 'Pb', valency: 4, charge: '+4', category: 'গ্রুপ ১৩ ও ১৪ মৌল', atomicMass: 207.2 },

    // Transition Metals
    { id: 'cr2', nameBn: 'ক্রোমিয়াম-২', symbol: 'Cr²⁺', baseSymbol: 'Cr', valency: 2, charge: '+2', category: 'অবস্থান্তর ধাতু', atomicMass: 52 },
    { id: 'cr3', nameBn: 'ক্রোমিয়াম-৩', symbol: 'Cr³⁺', baseSymbol: 'Cr', valency: 3, charge: '+3', category: 'অবস্থান্তর ধাতু', atomicMass: 52 },
    { id: 'mn2', nameBn: 'ম্যাঙ্গানিজ-২', symbol: 'Mn²⁺', baseSymbol: 'Mn', valency: 2, charge: '+2', category: 'অবস্থান্তর ধাতু', atomicMass: 54.94 },
    { id: 'mn4', nameBn: 'ম্যাঙ্গানিজ-৪', symbol: 'Mn⁴⁺', baseSymbol: 'Mn', valency: 4, charge: '+4', category: 'অবস্থান্তর ধাতু', atomicMass: 54.94 },
    { id: 'fe2', nameBn: 'ফেরাস (আয়রন-২)', symbol: 'Fe²⁺', baseSymbol: 'Fe', valency: 2, charge: '+2', category: 'অবস্থান্তর ধাতু', atomicMass: 55.85 },
    { id: 'fe3', nameBn: 'ফেরিক (আয়রন-৩)', symbol: 'Fe³⁺', baseSymbol: 'Fe', valency: 3, charge: '+3', category: 'অবস্থান্তর ধাতু', atomicMass: 55.85 },
    { id: 'co2', nameBn: 'কোবাল্ট-২', symbol: 'Co²⁺', baseSymbol: 'Co', valency: 2, charge: '+2', category: 'অবস্থান্তর ধাতু', atomicMass: 58.93 },
    { id: 'ni2', nameBn: 'নিকেল-২', symbol: 'Ni²⁺', baseSymbol: 'Ni', valency: 2, charge: '+2', category: 'অবস্থান্তর ধাতু', atomicMass: 58.69 },
    { id: 'cu1', nameBn: 'কিউপ্রাস (কপার-১)', symbol: 'Cu⁺', baseSymbol: 'Cu', valency: 1, charge: '+1', category: 'অবস্থান্তর ধাতু', atomicMass: 63.55 },
    { id: 'cu2', nameBn: 'কিউপ্রিক (কপার-২)', symbol: 'Cu²⁺', baseSymbol: 'Cu', valency: 2, charge: '+2', category: 'অবস্থান্তর ধাতু', atomicMass: 63.55 },
    { id: 'zn', nameBn: 'জিংক', symbol: 'Zn²⁺', baseSymbol: 'Zn', valency: 2, charge: '+2', category: 'অবস্থান্তর ধাতু', atomicMass: 65.38 },
    { id: 'ag', nameBn: 'সিলভার (রূপা)', symbol: 'Ag⁺', baseSymbol: 'Ag', valency: 1, charge: '+1', category: 'অবস্থান্তর ধাতু', atomicMass: 107.87 },
    { id: 'au1', nameBn: 'অরাস (গোল্ড-১)', symbol: 'Au⁺', baseSymbol: 'Au', valency: 1, charge: '+1', category: 'অবস্থান্তর ধাতু', atomicMass: 196.97 },
    { id: 'au3', nameBn: 'অরিক (গোল্ড-৩)', symbol: 'Au³⁺', baseSymbol: 'Au', valency: 3, charge: '+3', category: 'অবস্থান্তর ধাতু', atomicMass: 196.97 },
    { id: 'pt2', nameBn: 'প্লাটিনাম-২', symbol: 'Pt²⁺', baseSymbol: 'Pt', valency: 2, charge: '+2', category: 'অবস্থান্তর ধাতু', atomicMass: 195.08 },
    { id: 'hg1', nameBn: 'মারকিউরাস (পারদ-১)', symbol: 'Hg⁺', baseSymbol: 'Hg', valency: 1, charge: '+1', category: 'অবস্থান্তর ধাতু', atomicMass: 200.59 },
    { id: 'hg2', nameBn: 'মারকিউরিক (পারদ-২)', symbol: 'Hg²⁺', baseSymbol: 'Hg', valency: 2, charge: '+2', category: 'অবস্থান্তর ধাতু', atomicMass: 200.59 },

    // Positive Polyatomic Radicals
    { id: 'nh4', nameBn: 'অ্যামোনিয়াম (যৌগমূলক)', symbol: 'NH₄⁺', baseSymbol: 'NH₄', valency: 1, charge: '+1', category: 'ধনাত্মক যৌগমূলক', isRadical: true, atomicMass: 18.04 },
    { id: 'h3o', nameBn: 'হাইড্রোনিয়াম (যৌগমূলক)', symbol: 'H₃O⁺', baseSymbol: 'H₃O', valency: 1, charge: '+1', category: 'ধনাত্মক যৌগমূলক', isRadical: true, atomicMass: 19.02 },
    { id: 'ph4', nameBn: 'ফসফোনিয়াম (যৌগমূলক)', symbol: 'PH₄⁺', baseSymbol: 'PH₄', valency: 1, charge: '+1', category: 'ধনাত্মক যৌগমূলক', isRadical: true, atomicMass: 35.0 }
  ];

  // ==========================================
  // 2. COMPREHENSIVE ANION LIST (ALL NONMETALS & RADICALS)
  // ==========================================
  const anions: IonData[] = [
    // Halides & Hydride
    { id: 'f', nameBn: 'ফ্লোরাইড', symbol: 'F⁻', baseSymbol: 'F', valency: 1, charge: '-1', category: 'হ্যালোজেন ও অধাতব আয়ন', atomicMass: 19 },
    { id: 'cl', nameBn: 'ক্লোরাইড', symbol: 'Cl⁻', baseSymbol: 'Cl', valency: 1, charge: '-1', category: 'হ্যালোজেন ও অধাতব আয়ন', atomicMass: 35.5 },
    { id: 'br', nameBn: 'ব্রোমাইড', symbol: 'Br⁻', baseSymbol: 'Br', valency: 1, charge: '-1', category: 'হ্যালোজেন ও অধাতব আয়ন', atomicMass: 79.9 },
    { id: 'i', nameBn: 'আয়োডাইড', symbol: 'I⁻', baseSymbol: 'I', valency: 1, charge: '-1', category: 'হ্যালোজেন ও অধাতব আয়ন', atomicMass: 126.9 },
    { id: 'h_neg', nameBn: 'হাইড্রাইড', symbol: 'H⁻', baseSymbol: 'H', valency: 1, charge: '-1', category: 'হ্যালোজেন ও অধাতব আয়ন', atomicMass: 1.008 },

    // Chalcogenides & Pnictides
    { id: 'o', nameBn: 'অক্সাইড', symbol: 'O²⁻', baseSymbol: 'O', valency: 2, charge: '-2', category: 'চ্যালকোজেন ও পনিক্টোজেন', atomicMass: 16 },
    { id: 's', nameBn: 'সালফাইড', symbol: 'S²⁻', baseSymbol: 'S', valency: 2, charge: '-2', category: 'চ্যালকোজেন ও পনিক্টোজেন', atomicMass: 32.06 },
    { id: 'se', nameBn: 'সিলেনাইড', symbol: 'Se²⁻', baseSymbol: 'Se', valency: 2, charge: '-2', category: 'চ্যালকোজেন ও পনিক্টোজেন', atomicMass: 78.96 },
    { id: 'n', nameBn: 'নাইট্রাইড', symbol: 'N³⁻', baseSymbol: 'N', valency: 3, charge: '-3', category: 'চ্যালকোজেন ও পনিক্টোজেন', atomicMass: 14.01 },
    { id: 'p', nameBn: 'ফসফাইড', symbol: 'P³⁻', baseSymbol: 'P', valency: 3, charge: '-3', category: 'চ্যালকোজেন ও পনিক্টোজেন', atomicMass: 30.97 },
    { id: 'c', nameBn: 'কার্বাইড', symbol: 'C⁴⁻', baseSymbol: 'C', valency: 4, charge: '-4', category: 'চ্যালকোজেন ও পনিক্টোজেন', atomicMass: 12.01 },

    // Monovalent Polyatomic Radicals (-1)
    { id: 'oh', nameBn: 'হাইড্রোক্সাইড', symbol: 'OH⁻', baseSymbol: 'OH', valency: 1, charge: '-1', category: 'একযোজী যৌগমূলক (-১)', isRadical: true, atomicMass: 17.01 },
    { id: 'no3', nameBn: 'নাইট্রেট', symbol: 'NO₃⁻', baseSymbol: 'NO₃', valency: 1, charge: '-1', category: 'একযোজী যৌগমূলক (-১)', isRadical: true, atomicMass: 62.0 },
    { id: 'no2', nameBn: 'নাইট্রাইট', symbol: 'NO₂⁻', baseSymbol: 'NO₂', valency: 1, charge: '-1', category: 'একযোজী যৌগমূলক (-১)', isRadical: true, atomicMass: 46.0 },
    { id: 'hco3', nameBn: 'হাইড্রোজেন কার্বনেট (বাইকার্বনেট)', symbol: 'HCO₃⁻', baseSymbol: 'HCO₃', valency: 1, charge: '-1', category: 'একযোজী যৌগমূলক (-১)', isRadical: true, atomicMass: 61.02 },
    { id: 'hso4', nameBn: 'হাইড্রোজেন সালফেট (বাইসালফেট)', symbol: 'HSO₄⁻', baseSymbol: 'HSO₄', valency: 1, charge: '-1', category: 'একযোজী যৌগমূলক (-১)', isRadical: true, atomicMass: 97.07 },
    { id: 'hso3', nameBn: 'হাইড্রোজেন সালফাইট (বাইসালফাইট)', symbol: 'HSO₃⁻', baseSymbol: 'HSO₃', valency: 1, charge: '-1', category: 'একযোজী যৌগমূলক (-১)', isRadical: true, atomicMass: 81.07 },
    { id: 'mno4', nameBn: 'পারম্যাঙ্গানেট', symbol: 'MnO₄⁻', baseSymbol: 'MnO₄', valency: 1, charge: '-1', category: 'একযোজী যৌগমূলক (-১)', isRadical: true, atomicMass: 118.94 },
    { id: 'clo3', nameBn: 'ক্লোরেট', symbol: 'ClO₃⁻', baseSymbol: 'ClO₃', valency: 1, charge: '-1', category: 'একযোজী যৌগমূলক (-১)', isRadical: true, atomicMass: 83.45 },
    { id: 'ch3coo', nameBn: 'অ্যাসিটেট / ইথানয়েট', symbol: 'CH₃COO⁻', baseSymbol: 'CH₃COO', valency: 1, charge: '-1', category: 'একযোজী যৌগমূলক (-১)', isRadical: true, atomicMass: 59.04 },
    { id: 'cn', nameBn: 'সায়ানাইড', symbol: 'CN⁻', baseSymbol: 'CN', valency: 1, charge: '-1', category: 'একযোজী যৌগমূলক (-১)', isRadical: true, atomicMass: 26.02 },

    // Divalent Polyatomic Radicals (-2)
    { id: 'so4', nameBn: 'সালফেট', symbol: 'SO₄²⁻', baseSymbol: 'SO₄', valency: 2, charge: '-2', category: 'দ্বিযোজী যৌগমূলক (-২)', isRadical: true, atomicMass: 96.06 },
    { id: 'so3', nameBn: 'সালফাইট', symbol: 'SO₃²⁻', baseSymbol: 'SO₃', valency: 2, charge: '-2', category: 'দ্বিযোজী যৌগমূলক (-২)', isRadical: true, atomicMass: 80.06 },
    { id: 's2o3', nameBn: 'থায়োসালফেট', symbol: 'S₂O₃²⁻', baseSymbol: 'S₂O₃', valency: 2, charge: '-2', category: 'দ্বিযোজী যৌগমূলক (-২)', isRadical: true, atomicMass: 112.13 },
    { id: 'co3', nameBn: 'কার্বনেট', symbol: 'CO₃²⁻', baseSymbol: 'CO₃', valency: 2, charge: '-2', category: 'দ্বিযোজী যৌগমূলক (-২)', isRadical: true, atomicMass: 60.01 },
    { id: 'cro4', nameBn: 'ক্রোমেট', symbol: 'CrO₄²⁻', baseSymbol: 'CrO₄', valency: 2, charge: '-2', category: 'দ্বিযোজী যৌগমূলক (-২)', isRadical: true, atomicMass: 115.99 },
    { id: 'cr2o7', nameBn: 'ডাইক্রোমেট', symbol: 'Cr₂O₇²⁻', baseSymbol: 'Cr₂O₇', valency: 2, charge: '-2', category: 'দ্বিযোজী যৌগমূলক (-২)', isRadical: true, atomicMass: 215.99 },
    { id: 'sio3', nameBn: 'সিলিকেট', symbol: 'SiO₃²⁻', baseSymbol: 'SiO₃', valency: 2, charge: '-2', category: 'দ্বিযোজী যৌগমূলক (-২)', isRadical: true, atomicMass: 76.08 },

    // Trivalent Polyatomic Radicals (-3)
    { id: 'po4', nameBn: 'ফসফেট', symbol: 'PO₄³⁻', baseSymbol: 'PO₄', valency: 3, charge: '-3', category: 'ত্রিযোজী যৌগমূলক (-৩)', isRadical: true, atomicMass: 94.97 },
    { id: 'po3', nameBn: 'ফসফাইট', symbol: 'PO₃³⁻', baseSymbol: 'PO₃', valency: 3, charge: '-3', category: 'ত্রিযোজী যৌগমূলক (-৩)', isRadical: true, atomicMass: 78.97 },
    { id: 'bo3', nameBn: 'বোরেট', symbol: 'BO₃³⁻', baseSymbol: 'BO₃', valency: 3, charge: '-3', category: 'ত্রিযোজী যৌগমূলক (-৩)', isRadical: true, atomicMass: 58.81 }
  ];

  const [selectedCation, setSelectedCation] = useState<IonData>(cations[12]); // Al³⁺
  const [selectedAnion, setSelectedAnion] = useState<IonData>(anions[22]);   // SO₄²⁻

  // Filtered Cations
  const filteredCations = useMemo(() => {
    return cations.filter(cat => {
      const matchesSearch = cat.nameBn.toLowerCase().includes(cationSearch.toLowerCase()) ||
                            cat.symbol.toLowerCase().includes(cationSearch.toLowerCase()) ||
                            cat.baseSymbol.toLowerCase().includes(cationSearch.toLowerCase());
      const matchesCategory = cationCategory === 'all' || cat.category === cationCategory;
      return matchesSearch && matchesCategory;
    });
  }, [cations, cationSearch, cationCategory]);

  // Filtered Anions
  const filteredAnions = useMemo(() => {
    return anions.filter(an => {
      const matchesSearch = an.nameBn.toLowerCase().includes(anionSearch.toLowerCase()) ||
                            an.symbol.toLowerCase().includes(anionSearch.toLowerCase()) ||
                            an.baseSymbol.toLowerCase().includes(anionSearch.toLowerCase());
      const matchesCategory = anionCategory === 'all' || an.category === anionCategory;
      return matchesSearch && matchesCategory;
    });
  }, [anions, anionSearch, anionCategory]);

  // Helper for Greatest Common Divisor (GCD)
  const getGcd = (a: number, b: number): number => {
    return b === 0 ? a : getGcd(b, a % b);
  };

  // Compute final formula with criss-cross & brackets rules
  const generateFormula = (cat: IonData, an: IonData) => {
    const v1 = cat.valency; // Valency of cation (goes to anion subscript)
    const v2 = an.valency;  // Valency of anion (goes to cation subscript)

    const gcd = getGcd(v1, v2);
    const subCat = v2 / gcd;
    const subAn = v1 / gcd;

    let catPart = cat.baseSymbol;
    if (subCat > 1) {
      catPart = cat.isRadical ? `(${cat.baseSymbol})${subCat}` : `${cat.baseSymbol}${subCat}`;
    }

    let anPart = an.baseSymbol;
    if (subAn > 1) {
      anPart = an.isRadical ? `(${an.baseSymbol})${subAn}` : `${an.baseSymbol}${subAn}`;
    }

    // Special order for acetate (e.g. CH3COONa)
    let formula = `${catPart}${anPart}`;
    if (an.id === 'ch3coo') {
      formula = subAn > 1 ? `(${an.baseSymbol})${subAn}${catPart}` : `${an.baseSymbol}${catPart}`;
    }

    const name = `${cat.nameBn.split(' ')[0]} ${an.nameBn.split(' ')[0]}`;

    // Calculate approximate molar mass
    const molarMass = (cat.atomicMass ? cat.atomicMass * subCat : 0) + (an.atomicMass ? an.atomicMass * subAn : 0);

    return {
      formula,
      name,
      subCat,
      subAn,
      gcd,
      molarMass: molarMass > 0 ? molarMass.toFixed(2) : '—'
    };
  };

  const calculated = generateFormula(selectedCation, selectedAnion);

  // ==========================================
  // 3. LATENT VALENCY PRESETS & CALCULATOR
  // ==========================================
  const latentPresets = [
    { element: 'Fe (আয়রন)', maxV: 3, compound: 'FeCl₂ (ফেরাস ক্লোরাইড)', activeV: 2, desc: 'এখানে ক্লোরিনের সাথে যুক্ত হতে আয়রন ২টি যোজনী হাত ব্যবহার করেছে। অতএব সক্রিয় যোজনী ২, সর্বোচ্চ ৩।' },
    { element: 'Fe (আয়রন)', maxV: 3, compound: 'FeCl₃ (ফেরিক ক্লোরাইড)', activeV: 3, desc: 'এখানে ক্লোরিনের ৩টি পরমাণুর সাথে আয়রন ৩টি যোজনী হাত ব্যবহার করেছে। সক্রিয় যোজনী ৩, সর্বোচ্চ ৩।' },
    { element: 'C (কার্বন)', maxV: 4, compound: 'CO (কার্বন মনোক্সাইড)', activeV: 2, desc: 'এখানে অক্সিজেনের সাথে কার্বন ২টি যোজনী ব্যবহার করেছে। সক্রিয় যোজনী ২, সর্বোচ্চ ৪।' },
    { element: 'C (কার্বন)', maxV: 4, compound: 'CO₂ (কার্বন ডাই-অক্সাইড)', activeV: 4, desc: 'এখানে ২টি দ্বিযোজী অক্সিজেনের মোট ৪টি হাত কার্বনের ৪টি সক্রিয় যোজনী পূরণ করেছে।' },
    { element: 'P (ফসফরাস)', maxV: 5, compound: 'PCl₃ (ফসফরাস ট্রাইক্লোরাইড)', activeV: 3, desc: 'এখানে ফসফরাস ৩টি ক্লোরিনের সাথে ৩টি সমযোজী বন্ধন তৈরি করেছে। সক্রিয় যোজনী ৩, সর্বোচ্চ ৫।' },
    { element: 'P (ফসফরাস)', maxV: 5, compound: 'PCl₅ (ফসফরাস পেন্টাক্লোরাইড)', activeV: 5, desc: 'এখানে ফসফরাস ৫টি ক্লোরিনের সাথে ৫টি বন্ধন তৈরি করেছে। সক্রিয় যোজনী ৫, সর্বোচ্চ ৫।' },
    { element: 'S (সালফার)', maxV: 6, compound: 'H₂S (হাইড্রোজেন সালফাইড)', activeV: 2, desc: 'এখানে সালফারের সক্রিয় যোজনী ২, সর্বোচ্চ যোজনী ৬।' },
    { element: 'S (সালফার)', maxV: 6, compound: 'SO₂ (সালফার ডাই-অক্সাইড)', activeV: 4, desc: 'এখানে সালফারের সক্রিয় যোজনী ৪, সর্বোচ্চ যোজনী ৬।' },
    { element: 'S (সালফার)', maxV: 6, compound: 'SO₃ (সালফার ট্রাই-অক্সাইড)', activeV: 6, desc: 'এখানে সালফারের সক্রিয় যোজনী ৬, সর্বোচ্চ যোজনী ৬।' },
    { element: 'Cu (কপার)', maxV: 2, compound: 'Cu₂O (কিউপ্রাস অক্সাইড)', activeV: 1, desc: 'এখানে কপারের সক্রিয় যোজনী ১, সর্বোচ্চ যোজনী ২।' },
    { element: 'Cu (কপার)', maxV: 2, compound: 'CuO (কিউপ্রিক অক্সাইড)', activeV: 2, desc: 'এখানে কপারের সক্রিয় যোজনী ২, সর্বোচ্চ যোজনী ২।' },
    { element: 'Sn (টিন)', maxV: 4, compound: 'SnCl₂ (স্ট্যানাস ক্লোরাইড)', activeV: 2, desc: 'এখানে টিনের সক্রিয় যোজনী ২, সর্বোচ্চ যোজনী ৪।' },
    { element: 'Sn (টিন)', maxV: 4, compound: 'SnCl₄ (স্ট্যানিক ক্লোরাইড)', activeV: 4, desc: 'এখানে টিনের সক্রিয় যোজনী ৪, সর্বোচ্চ যোজনী ৪।' },
    { element: 'Pb (লেড)', maxV: 4, compound: 'PbO (প্লাম্বাস অক্সাইড)', activeV: 2, desc: 'এখানে লেডের সক্রিয় যোজনী ২, সর্বোচ্চ যোজনী ৪।' },
    { element: 'Pb (লেড)', maxV: 4, compound: 'PbO₂ (প্লাম্বিক অক্সাইড)', activeV: 4, desc: 'এখানে লেডের সক্রিয় যোজনী ৪, সর্বোচ্চ যোজনী ৪।' },
    { element: 'N (নাইট্রোজেন)', maxV: 5, compound: 'N₂O (নাইট্রাস অক্সাইড)', activeV: 1, desc: 'এখানে নাইট্রোজেনের সক্রিয় যোজনী ১, সর্বোচ্চ যোজনী ৫।' },
    { element: 'N (নাইট্রোজেন)', maxV: 5, compound: 'NO (নাইট্রিক অক্সাইড)', activeV: 2, desc: 'এখানে নাইট্রোজেনের সক্রিয় যোজনী ২, সর্বোচ্চ যোজনী ৫।' },
    { element: 'N (নাইট্রোজেন)', maxV: 5, compound: 'N₂O₃ (ডাইনাইট্রোজেন ট্রাইঅক্সাইড)', activeV: 3, desc: 'এখানে নাইট্রোজেনের সক্রিয় যোজনী ৩, সর্বোচ্চ যোজনী ৫।' },
    { element: 'N (নাইট্রোজেন)', maxV: 5, compound: 'NO₂ (নাইট্রোজেন ডাই-অক্সাইড)', activeV: 4, desc: 'এখানে নাইট্রোজেনের সক্রিয় যোজনী ৪, সর্বোচ্চ যোজনী ৫।' },
    { element: 'N (নাইট্রোজেন)', maxV: 5, compound: 'N₂O₅ (ডাইনাইট্রোজেন পেন্টাক্সাইড)', activeV: 5, desc: 'এখানে নাইট্রোজেনের সক্রিয় যোজনী ৫, সর্বোচ্চ যোজনী ৫।' }
  ];

  const [selectedLatent, setSelectedLatent] = useState(latentPresets[0]);

  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-6 py-6 space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              অধ্যায় ৫: রাসায়নিক বন্ধন
            </span>
            <span className="text-xs text-slate-400">সকল মৌল ও যৌগমূলকের সংকেত লিখন ও সুপ্ত যোজনী ল্যাব</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-cyan-400" />
            যৌগের সংকেত ও যোজনী বিল্ডার (Formula Builder Lab)
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            ক্রিস-ক্রস পদ্ধতি, গ.সা.গু দ্বারা কাটাকাটি, প্রথম বন্ধনীর ব্যবহার, সুপ্ত যোজনী ক্যালকুলেটর ও যৌগমূলকের পূর্ণাঙ্গ ডিরেক্টরি।
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start md:self-auto shrink-0">
          <button
            onClick={() => setActiveTab('builder')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeTab === 'builder' ? 'bg-cyan-500 text-slate-950 shadow-md font-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            সংকেত নির্মাতা ল্যাব
          </button>
          <button
            onClick={() => setActiveTab('latent')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeTab === 'latent' ? 'bg-amber-500 text-slate-950 shadow-md font-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            সুপ্ত যোজনী ক্যালকুলেটর
          </button>
          <button
            onClick={() => setActiveTab('radicals')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeTab === 'radicals' ? 'bg-purple-500 text-slate-950 shadow-md font-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            যৌগমূলক ডিরেক্টরি
          </button>
        </div>
      </div>

      {/* ========================================================
          TAB 1: INTERACTIVE FORMULA BUILDER LAB
          ======================================================== */}
      {activeTab === 'builder' && (
        <div className="space-y-6">
          {/* Formula Generation Display Center */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2">
              আড়াআড়ি যোজনী বিনিময় (Criss-Cross Rule) ফলাফল:
            </span>

            {/* Criss-Cross Step-by-Step Visual */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 my-3">
              {/* Cation Box */}
              <div className="p-4 bg-slate-950 rounded-2xl border border-cyan-500/50 shadow-lg shadow-cyan-500/10 min-w-[130px]">
                <span className="text-xs text-slate-400 block mb-0.5">ক্যাটায়ন / ধাতু</span>
                <span className="text-2xl font-black font-mono text-cyan-400">{selectedCation.symbol}</span>
                <div className="text-[11px] font-bold text-white mt-1">{selectedCation.nameBn}</div>
                <div className="text-[10px] text-cyan-300 font-mono">যোজনী (v₁) = {selectedCation.valency}</div>
              </div>

              {/* Cross Arrows Indicator */}
              <div className="flex flex-col items-center">
                <span className="text-xs font-bold text-amber-400 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">
                  যোজনী বিনিময় ✕
                </span>
                <div className="text-[10px] text-slate-400 font-mono mt-1">
                  গ.সা.গু = {calculated.gcd}
                </div>
              </div>

              {/* Anion Box */}
              <div className="p-4 bg-slate-950 rounded-2xl border border-emerald-500/50 shadow-lg shadow-emerald-500/10 min-w-[130px]">
                <span className="text-xs text-slate-400 block mb-0.5">অ্যানায়ন / অধাতু</span>
                <span className="text-2xl font-black font-mono text-emerald-400">{selectedAnion.symbol}</span>
                <div className="text-[11px] font-bold text-white mt-1">{selectedAnion.nameBn}</div>
                <div className="text-[10px] text-emerald-300 font-mono">যোজনী (v₂) = {selectedAnion.valency}</div>
              </div>
            </div>

            {/* Generated Formula & Details */}
            <div className="mt-4 p-5 bg-slate-950 rounded-2xl border border-slate-800 max-w-xl w-full space-y-2">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">চূড়ান্ত রাসায়নিক সংকেত:</span>
              <div className="text-4xl sm:text-5xl font-black font-mono text-white tracking-widest text-cyan-400">
                {calculated.formula}
              </div>
              <div className="text-sm font-bold text-slate-200">
                যৌগের নাম: <span className="text-amber-300">{calculated.name}</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                <span>আণবিক ভর: <strong className="text-emerald-400">{calculated.molarMass} g/mol</strong></span>
                <span>•</span>
                <span>ক্যাটায়ন সাবস্ক্রিপ্ট: <strong className="text-cyan-400">{calculated.subCat}</strong></span>
                <span>•</span>
                <span>অ্যানায়ন সাবস্ক্রিপ্ট: <strong className="text-emerald-400">{calculated.subAn}</strong></span>
              </div>
            </div>
          </div>

          {/* Dual Column Selection Grid (Cations vs Anions) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Cations Panel */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Atom className="h-5 w-5 text-cyan-400" />
                  <h3 className="font-bold text-white text-sm sm:text-base">১. ক্যাটায়ন / ধনাত্মক মূলক নির্বাচন ({cations.length}টি)</h3>
                </div>

                {/* Cation Category Dropdown */}
                <select
                  value={cationCategory}
                  onChange={(e) => setCationCategory(e.target.value)}
                  className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-lg px-2.5 py-1 outline-none"
                >
                  <option value="all">সকল ক্যাটায়ন</option>
                  <option value="ক্ষার ধাতু ও অধাতু">ক্ষার ধাতু</option>
                  <option value="মৃৎক্ষার ধাতু">মৃৎক্ষার ধাতু</option>
                  <option value="গ্রুপ ১৩ ও ১৪ মৌল">গ্রুপ ১৩ ও ১৪ মৌল</option>
                  <option value="অবস্থান্তর ধাতু">অবস্থান্তর ধাতু</option>
                  <option value="ধনাত্মক যৌগমূলক">যৌগমূলক</option>
                </select>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="ক্যাটায়ন বা ধাতুর নাম/সংকেত খুঁজুন..."
                  value={cationSearch}
                  onChange={(e) => setCationSearch(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-500"
                />
              </div>

              {/* Scrollable Cation Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[360px] overflow-y-auto pr-1">
                {filteredCations.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCation(cat)}
                    className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                      selectedCation.id === cat.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                        : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-black font-mono text-sm text-cyan-300">{cat.symbol}</span>
                      <span className="text-[10px] font-mono font-bold bg-cyan-950 px-1.5 py-0.2 rounded text-cyan-400 border border-cyan-800/50">
                        {cat.valency}
                      </span>
                    </div>
                    <div className="text-xs font-semibold mt-1 truncate">{cat.nameBn}</div>
                    <div className="text-[9px] text-slate-500 mt-0.5 truncate">{cat.category}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Anions Panel */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Atom className="h-5 w-5 text-emerald-400" />
                  <h3 className="font-bold text-white text-sm sm:text-base">২. অ্যানায়ন / ঋণাত্মক মূলক নির্বাচন ({anions.length}টি)</h3>
                </div>

                {/* Anion Category Dropdown */}
                <select
                  value={anionCategory}
                  onChange={(e) => setAnionCategory(e.target.value)}
                  className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-lg px-2.5 py-1 outline-none"
                >
                  <option value="all">সকল অ্যানায়ন</option>
                  <option value="হ্যালোজেন ও অধাতব আয়ন">হ্যালোজেন ও অধাতু</option>
                  <option value="চ্যালকোজেন ও পনিক্টোজেন">অক্সাইড/সালফাইড/নাইট্রাইড</option>
                  <option value="একযোজী যৌগমূলক (-১)">একযোজী মূলক (-১)</option>
                  <option value="দ্বিযোজী যৌগমূলক (-২)">দ্বিযোজী মূলক (-২)</option>
                  <option value="ত্রিযোজী যৌগমূলক (-৩)">ত্রিযোজী মূলক (-৩)</option>
                </select>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="অ্যানায়ন বা যৌগমূলকের নাম/সংকেত খুঁজুন..."
                  value={anionSearch}
                  onChange={(e) => setAnionSearch(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 outline-none focus:border-emerald-500"
                />
              </div>

              {/* Scrollable Anion Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[360px] overflow-y-auto pr-1">
                {filteredAnions.map((an) => (
                  <button
                    key={an.id}
                    onClick={() => setSelectedAnion(an)}
                    className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
                      selectedAnion.id === an.id
                        ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-md shadow-emerald-500/10'
                        : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-black font-mono text-sm text-emerald-300">{an.symbol}</span>
                      <span className="text-[10px] font-mono font-bold bg-emerald-950 px-1.5 py-0.2 rounded text-emerald-400 border border-emerald-800/50">
                        {an.valency}
                      </span>
                    </div>
                    <div className="text-xs font-semibold mt-1 truncate">{an.nameBn}</div>
                    <div className="text-[9px] text-slate-500 mt-0.5 truncate">{an.category}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 2: LATENT VALENCY CALCULATOR
          ======================================================== */}
      {activeTab === 'latent' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              পরিবর্তনশীল যোজনী ও সুপ্ত যোজনী নির্ণয়
            </span>
            <h3 className="text-lg font-bold text-white">সুপ্ত যোজনী ক্যালকুলেটর (Latent Valency Calculator)</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              কোনো মৌলের সর্বোচ্চ যোজনী এবং কোনো যৌগে উপস্থিত তার সক্রিয় যোজনীর পার্থক্যকে <strong>সুপ্ত যোজনী</strong> বলে।
            </p>
          </div>

          {/* Formula Equation Banner */}
          <div className="p-4 bg-slate-950 border border-amber-500/40 rounded-xl flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-amber-400" />
              <span className="text-sm font-bold text-white">সূত্র:</span>
              <span className="text-sm font-mono font-bold text-amber-300">
                সুপ্ত যোজনী = মৌলের সর্বোচ্চ যোজনী – সক্রিয় যোজনী
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono">Latent Valency = Max Valency – Active Valency</span>
          </div>

          {/* Compound Preset Selection */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
            {latentPresets.map((item, idx) => {
              const latent = item.maxV - item.activeV;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedLatent(item)}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    selectedLatent.compound === item.compound
                      ? 'bg-amber-500/20 border-amber-400 text-white shadow-lg shadow-amber-500/10'
                      : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-xs truncate">{item.compound.split(' (')[0]}</div>
                  <div className="text-[10px] text-amber-400 font-mono mt-0.5">{item.element}</div>
                  <div className="text-[10px] font-bold text-slate-300 mt-1">
                    সুপ্ত যোজনী: <span className="font-mono text-cyan-400">{latent}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Compound Breakdown Display */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4">
            <h4 className="text-lg font-bold text-white">{selectedLatent.compound} যৌগে {selectedLatent.element} এর বিশ্লেষণ:</h4>

            <div className="grid grid-cols-3 gap-4 max-w-lg w-full text-center">
              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">সর্বোচ্চ যোজনী</span>
                <span className="text-2xl font-black font-mono text-cyan-400">{selectedLatent.maxV}</span>
              </div>
              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1">সক্রিয় যোজনী</span>
                <span className="text-2xl font-black font-mono text-emerald-400">{selectedLatent.activeV}</span>
              </div>
              <div className="bg-slate-900 p-3.5 rounded-xl border border-amber-500/40">
                <span className="text-xs text-amber-400 font-bold block mb-1">সুপ্ত যোজনী</span>
                <span className="text-2xl font-black font-mono text-amber-300">
                  {selectedLatent.maxV - selectedLatent.activeV}
                </span>
              </div>
            </div>

            {/* Calculation String */}
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-sm">
              সুপ্ত যোজনী = <span className="text-cyan-400 font-bold">{selectedLatent.maxV}</span> – <span className="text-emerald-400 font-bold">{selectedLatent.activeV}</span> = <span className="text-amber-400 font-black text-base">{selectedLatent.maxV - selectedLatent.activeV}</span>
            </div>

            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              {selectedLatent.desc}
            </p>
          </div>
        </div>
      )}

      {/* ========================================================
          TAB 3: COMPREHENSIVE RADICALS DIRECTORY
          ======================================================== */}
      {activeTab === 'radicals' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-6">
          <div>
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block">
              যৌগমূলক (Radicals) ও তাদের যোজনী তালিকা
            </span>
            <h3 className="text-lg font-bold text-white">পাঠ্যবইয়ের সকল ধনাত্মক ও ঋণাত্মক যৌগমূলকের আধান ও যোজনী নির্দেশিকা</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              একাধিক মৌলের একাধিক পরমাণু একত্রিত হয়ে একটি পরমাণুগুচ্ছ গঠন করে এবং রাসায়নিক বিক্রিয়ায় একটি পরমাণুর ন্যায় আচরণ করে, তাকে <strong>যৌগমূলক বা র‍্যাডিক্যাল</strong> বলে।
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Monovalent Radicals */}
            <div className="bg-slate-950 p-4 rounded-xl border border-cyan-500/30 space-y-2">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block border-b border-slate-800 pb-1">
                একযোজী যৌগমূলক (যোজনী = ১)
              </span>
              <ul className="text-xs space-y-1.5 text-slate-300">
                <li className="flex justify-between font-mono"><span>অ্যামোনিয়াম (NH₄⁺)</span><span className="text-cyan-400 font-bold">আধান +১</span></li>
                <li className="flex justify-between font-mono"><span>হাইড্রোক্সাইড (OH⁻)</span><span className="text-rose-400 font-bold">আধান -১</span></li>
                <li className="flex justify-between font-mono"><span>নাইট্রেট (NO₃⁻)</span><span className="text-rose-400 font-bold">আধান -১</span></li>
                <li className="flex justify-between font-mono"><span>নাইট্রিট (NO₂⁻)</span><span className="text-rose-400 font-bold">আধান -১</span></li>
                <li className="flex justify-between font-mono"><span>হাইড্রোজেন কার্বনেট (HCO₃⁻)</span><span className="text-rose-400 font-bold">আধান -১</span></li>
                <li className="flex justify-between font-mono"><span>হাইড্রোজেন সালফেট (HSO₄⁻)</span><span className="text-rose-400 font-bold">আধান -১</span></li>
                <li className="flex justify-between font-mono"><span>পারম্যাঙ্গানেট (MnO₄⁻)</span><span className="text-rose-400 font-bold">আধান -১</span></li>
                <li className="flex justify-between font-mono"><span>অ্যাসিটেট (CH₃COO⁻)</span><span className="text-rose-400 font-bold">আধান -১</span></li>
              </ul>
            </div>

            {/* Divalent Radicals */}
            <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 space-y-2">
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block border-b border-slate-800 pb-1">
                দ্বিযোজী যৌগমূলক (যোজনী = ২)
              </span>
              <ul className="text-xs space-y-1.5 text-slate-300">
                <li className="flex justify-between font-mono"><span>সালফেট (SO₄²⁻)</span><span className="text-rose-400 font-bold">আধান -২</span></li>
                <li className="flex justify-between font-mono"><span>সালফাইট (SO₃²⁻)</span><span className="text-rose-400 font-bold">আধান -২</span></li>
                <li className="flex justify-between font-mono"><span>কার্বনেট (CO₃²⁻)</span><span className="text-rose-400 font-bold">আধান -২</span></li>
                <li className="flex justify-between font-mono"><span>থায়োসালফেট (S₂O₃²⁻)</span><span className="text-rose-400 font-bold">আধান -২</span></li>
                <li className="flex justify-between font-mono"><span>ক্রোমেট (CrO₄²⁻)</span><span className="text-rose-400 font-bold">আধান -২</span></li>
                <li className="flex justify-between font-mono"><span>ডাইক্রোমেট (Cr₂O₇²⁻)</span><span className="text-rose-400 font-bold">আধান -২</span></li>
                <li className="flex justify-between font-mono"><span>সিলিকেট (SiO₃²⁻)</span><span className="text-rose-400 font-bold">আধান -২</span></li>
              </ul>
            </div>

            {/* Trivalent Radicals */}
            <div className="bg-slate-950 p-4 rounded-xl border border-amber-500/30 space-y-2">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block border-b border-slate-800 pb-1">
                ত্রিযোজী যৌগমূলক (যোজনী = ৩)
              </span>
              <ul className="text-xs space-y-1.5 text-slate-300">
                <li className="flex justify-between font-mono"><span>ফসফেট (PO₄³⁻)</span><span className="text-rose-400 font-bold">আধান -৩</span></li>
                <li className="flex justify-between font-mono"><span>ফসফাইট (PO₃³⁻)</span><span className="text-rose-400 font-bold">আধান -৩</span></li>
                <li className="flex justify-between font-mono"><span>বোরেট (BO₃³⁻)</span><span className="text-rose-400 font-bold">আধান -৩</span></li>
                <li className="flex justify-between font-mono"><span>আর্সেনেট (AsO₄³⁻)</span><span className="text-rose-400 font-bold">আধান -৩</span></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
