import React, { useState } from 'react';
import { 
  Scale, 
  Beaker, 
  FlaskConical, 
  ArrowRight, 
  RotateCcw, 
  Sparkles, 
  Flame, 
  Zap, 
  AlertCircle, 
  CheckCircle2, 
  Layers, 
  Maximize2,
  Sliders,
  ChevronRight,
  TrendingUp,
  Percent
} from 'lucide-react';

interface CompoundInfo {
  name: string;
  formula: string;
  molarMass: number;
  elements: { symbol: string; name: string; count: number; atomicMass: number }[];
  color: string;
}

const COMMON_COMPOUNDS: Record<string, CompoundInfo> = {
  H2O: {
    name: 'পানি',
    formula: 'H₂O',
    molarMass: 18.0,
    elements: [
      { symbol: 'H', name: 'হাইড্রোজেন', count: 2, atomicMass: 1.0 },
      { symbol: 'O', name: 'অক্সিজেন', count: 1, atomicMass: 16.0 }
    ],
    color: '#06b6d4'
  },
  CO2: {
    name: 'কার্বন ডাই-অক্সাইড',
    formula: 'CO₂',
    molarMass: 44.0,
    elements: [
      { symbol: 'C', name: 'কার্বন', count: 1, atomicMass: 12.0 },
      { symbol: 'O', name: 'অক্সিজেন', count: 2, atomicMass: 16.0 }
    ],
    color: '#94a3b8'
  },
  H2SO4: {
    name: 'সালফিউরিক এসিড',
    formula: 'H₂SO₄',
    molarMass: 98.0,
    elements: [
      { symbol: 'H', name: 'হাইড্রোজেন', count: 2, atomicMass: 1.0 },
      { symbol: 'S', name: 'সালফার', count: 1, atomicMass: 32.0 },
      { symbol: 'O', name: 'অক্সিজেন', count: 4, atomicMass: 16.0 }
    ],
    color: '#f59e0b'
  },
  Na2CO3: {
    name: 'সোডিয়াম কার্বনেট',
    formula: 'Na₂CO₃',
    molarMass: 106.0,
    elements: [
      { symbol: 'Na', name: 'সোডিয়াম', count: 2, atomicMass: 23.0 },
      { symbol: 'C', name: 'কার্বন', count: 1, atomicMass: 12.0 },
      { symbol: 'O', name: 'অক্সিজেন', count: 3, atomicMass: 16.0 }
    ],
    color: '#3b82f6'
  },
  CaCO3: {
    name: 'ক্যালসিয়াম কার্বনেট (চুনাপাথর)',
    formula: 'CaCO₃',
    molarMass: 100.0,
    elements: [
      { symbol: 'Ca', name: 'ক্যালসিয়াম', count: 1, atomicMass: 40.0 },
      { symbol: 'C', name: 'কার্বন', count: 1, atomicMass: 12.0 },
      { symbol: 'O', name: 'অক্সিজেন', count: 3, atomicMass: 16.0 }
    ],
    color: '#10b981'
  },
  NaCl: {
    name: 'সোডিয়াম ক্লোরাইড (খাবার লবণ)',
    formula: 'NaCl',
    molarMass: 58.5,
    elements: [
      { symbol: 'Na', name: 'সোডিয়াম', count: 1, atomicMass: 23.0 },
      { symbol: 'Cl', name: 'ক্লোরিন', count: 1, atomicMass: 35.5 }
    ],
    color: '#8b5cf6'
  },
  C6H12O6: {
    name: 'গ্লুকোজ',
    formula: 'C₆H₁₂O₆',
    molarMass: 180.0,
    elements: [
      { symbol: 'C', name: 'কার্বন', count: 6, atomicMass: 12.0 },
      { symbol: 'H', name: 'হাইড্রোজেন', count: 12, atomicMass: 1.0 },
      { symbol: 'O', name: 'অক্সিজেন', count: 6, atomicMass: 16.0 }
    ],
    color: '#ec4899'
  },
  NH3: {
    name: 'অ্যামোনিয়া',
    formula: 'NH₃',
    molarMass: 17.0,
    elements: [
      { symbol: 'N', name: 'নাইট্রোজেন', count: 1, atomicMass: 14.0 },
      { symbol: 'H', name: 'হাইড্রোজেন', count: 3, atomicMass: 1.0 }
    ],
    color: '#14b8a6'
  }
};

interface ReactionDef {
  id: string;
  title: string;
  equation: string;
  r1: { name: string; formula: string; coeff: number; molarMass: number };
  r2: { name: string; formula: string; coeff: number; molarMass: number };
  product: { name: string; formula: string; coeff: number; molarMass: number; state: string };
  byProduct?: { name: string; formula: string; coeff: number; molarMass: number };
}

const REACTIONS: ReactionDef[] = [
  {
    id: 'water_synthesis',
    title: 'পানির সংশ্লেষণ বিক্রিয়া',
    equation: '2H₂ + O₂ ⟶ 2H₂O',
    r1: { name: 'হাইড্রোজেন', formula: 'H₂', coeff: 2, molarMass: 2.0 },
    r2: { name: 'অক্সিজেন', formula: 'O₂', coeff: 1, molarMass: 32.0 },
    product: { name: 'পানি', formula: 'H₂O', coeff: 2, molarMass: 18.0, state: 'তরল' }
  },
  {
    id: 'ammonia_haber',
    title: 'অ্যামোনিয়া উৎপাদন (হেবার পদ্ধতি)',
    equation: 'N₂ + 3H₂ ⟶ 2NH₃',
    r1: { name: 'নাইট্রোজেন', formula: 'N₂', coeff: 1, molarMass: 28.0 },
    r2: { name: 'হাইড্রোজেন', formula: 'H₂', coeff: 3, molarMass: 2.0 },
    product: { name: 'অ্যামোনিয়া', formula: 'NH₃', coeff: 2, molarMass: 17.0, state: 'গ্যাস' }
  },
  {
    id: 'co2_calcium',
    title: 'চুনাপাথরে এসিডের বিক্রিয়া',
    equation: 'CaCO₃ + 2HCl ⟶ CaCl₂ + H₂O + CO₂↑',
    r1: { name: 'ক্যালসিয়াম কার্বনেট', formula: 'CaCO₃', coeff: 1, molarMass: 100.0 },
    r2: { name: 'হাইড্রোক্লোরিক এসিড', formula: 'HCl', coeff: 2, molarMass: 36.5 },
    product: { name: 'কার্বন ডাই-অক্সাইড', formula: 'CO₂', coeff: 1, molarMass: 44.0, state: 'গ্যাস (২২.৪ L/মোল)' }
  },
  {
    id: 'methane_combustion',
    title: 'মিথেন গ্যাসের দহন',
    equation: 'CH₄ + 2O₂ ⟶ CO₂ + 2H₂O',
    r1: { name: 'মিথেন', formula: 'CH₄', coeff: 1, molarMass: 16.0 },
    r2: { name: 'অক্সিজেন', formula: 'O₂', coeff: 2, molarMass: 32.0 },
    product: { name: 'কার্বন ডাই-অক্সাইড', formula: 'CO₂', coeff: 1, molarMass: 44.0, state: 'গ্যাস' }
  }
];

interface MoleStoichiometryLabProps {
  initialTab?: 'converter' | 'molarity' | 'limiting' | 'formula';
}

export const MoleStoichiometryLab: React.FC<MoleStoichiometryLabProps> = ({ initialTab = 'converter' }) => {
  const [activeTab, setActiveTab] = useState<'converter' | 'molarity' | 'limiting' | 'formula'>(initialTab);

  React.useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Tab 1: Mole Converter State
  const [selectedCompoundKey, setSelectedCompoundKey] = useState<string>('H2O');
  const [inputMode, setInputMode] = useState<'mass' | 'mole' | 'particles' | 'volume'>('mass');
  const [inputValue, setInputValue] = useState<number>(36);

  // Tab 2: Molarity Solution State
  const [molaritySoluteKey, setMolaritySoluteKey] = useState<string>('Na2CO3');
  const [solutionVolumeMl, setSolutionVolumeMl] = useState<number>(250);
  const [targetMolarity, setTargetMolarity] = useState<number>(0.1);

  // Tab 3: Limiting Reactant State
  const [selectedReactionId, setSelectedReactionId] = useState<string>('water_synthesis');
  const [reactant1Mass, setReactant1Mass] = useState<number>(4.0); // grams
  const [reactant2Mass, setReactant2Mass] = useState<number>(40.0); // grams
  const [actualYieldPercent, setActualYieldPercent] = useState<number>(90); // %

  // Tab 4: Formula Solver State
  const [formulaPreset, setFormulaPreset] = useState<'glucose' | 'benzene' | 'acetic'>('glucose');

  const compound = COMMON_COMPOUNDS[selectedCompoundKey] || COMMON_COMPOUNDS['H2O'];

  // Calculations for Mole Converter
  let moles = 0;
  let grams = 0;
  let molecules = 0;
  let volumeStp = 0;

  if (inputMode === 'mass') {
    grams = Math.max(0, inputValue);
    moles = grams / compound.molarMass;
    molecules = moles * 6.022e23;
    volumeStp = moles * 22.4;
  } else if (inputMode === 'mole') {
    moles = Math.max(0, inputValue);
    grams = moles * compound.molarMass;
    molecules = moles * 6.022e23;
    volumeStp = moles * 22.4;
  } else if (inputMode === 'particles') {
    molecules = Math.max(0, inputValue) * 1e23;
    moles = molecules / 6.022e23;
    grams = moles * compound.molarMass;
    volumeStp = moles * 22.4;
  } else if (inputMode === 'volume') {
    volumeStp = Math.max(0, inputValue);
    moles = volumeStp / 22.4;
    grams = moles * compound.molarMass;
    molecules = moles * 6.022e23;
  }

  // Calculations for Solution Molarity (W = SMV / 1000)
  const solute = COMMON_COMPOUNDS[molaritySoluteKey] || COMMON_COMPOUNDS['Na2CO3'];
  const requiredMassGrams = (targetMolarity * solute.molarMass * solutionVolumeMl) / 1000;
  const dissolvedMoles = (requiredMassGrams / solute.molarMass);

  // Calculations for Limiting Reactant
  const reaction = REACTIONS.find(r => r.id === selectedReactionId) || REACTIONS[0];
  const r1Moles = reactant1Mass / reaction.r1.molarMass;
  const r2Moles = reactant2Mass / reaction.r2.molarMass;

  const r1Ratio = r1Moles / reaction.r1.coeff;
  const r2Ratio = r2Moles / reaction.r2.coeff;

  const isR1Limiting = r1Ratio <= r2Ratio;
  const limitingReactant = isR1Limiting ? reaction.r1 : reaction.r2;
  const excessReactant = isR1Limiting ? reaction.r2 : reaction.r1;

  // Theoretical yield
  const limitingMoles = isR1Limiting ? r1Ratio : r2Ratio;
  const theoreticalProductMoles = limitingMoles * reaction.product.coeff;
  const theoreticalProductMass = theoreticalProductMoles * reaction.product.molarMass;
  const actualProductMass = (theoreticalProductMass * actualYieldPercent) / 100;

  // Unreacted excess mass
  const excessUsedMoles = limitingMoles * excessReactant.coeff;
  const excessUsedMass = excessUsedMoles * excessReactant.molarMass;
  const excessInitialMass = isR1Limiting ? reactant2Mass : reactant1Mass;
  const excessLeftoverMass = Math.max(0, excessInitialMass - excessUsedMass);

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] p-3 sm:p-6 max-w-7xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/40 mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>রসায়ন অধ্যায় ৬: মোলের ধারণা ও রাসায়নিক গণনা ভার্চুয়াল ল্যাব</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              মোলের মাস্টার ক্যালকুলেটর ও স্টয়কিওমিতি সিমুলেটর
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              ভর ⇄ মোল ⇄ কণা সংখ্যা ⇄ STP আয়তন রূপান্তর, প্রমাণ দ্রবণ প্রস্তুত (W = SMV/1000), লিমিটিং বিক্রিয়ক ও শতকরা উৎপাদ বিশ্লেষণ।
            </p>
          </div>

          {/* Navigation Pill Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800 shrink-0">
            <button
              onClick={() => setActiveTab('converter')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeTab === 'converter' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Scale className="h-3.5 w-3.5" />
              <span>মোল রূপান্তরক</span>
            </button>
            <button
              onClick={() => setActiveTab('molarity')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeTab === 'molarity' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FlaskConical className="h-3.5 w-3.5" />
              <span>মোলারিটি ল্যাব (W=SMV/1000)</span>
            </button>
            <button
              onClick={() => setActiveTab('limiting')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeTab === 'limiting' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Flame className="h-3.5 w-3.5" />
              <span>লিমিটিং বিক্রিয়ক এরিনা</span>
            </button>
            <button
              onClick={() => setActiveTab('formula')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeTab === 'formula' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Percent className="h-3.5 w-3.5" />
              <span>সংকেত নির্ণয়ক</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: MOLE CONVERTER (মোল রূপান্তরক)                                      */}
      {/* ========================================================================= */}
      {activeTab === 'converter' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls & Compound Selection */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                যৌগ নির্বাচন করুন
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {Object.entries(COMMON_COMPOUNDS).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedCompoundKey(key);
                      setInputValue(item.molarMass * 2);
                    }}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition ${
                      selectedCompoundKey === key
                        ? 'bg-cyan-500/20 border-cyan-400 text-white font-bold ring-2 ring-cyan-500/30'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span className="font-mono text-sm">{item.formula}</span>
                    <span className="text-[11px] text-slate-400 line-clamp-1">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input Mode Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                প্রদত্ত রাশির ধরন নির্বাচন
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => { setInputMode('mass'); setInputValue(compound.molarMass * 2); }}
                  className={`px-3 py-2 rounded-lg text-xs font-bold border transition ${
                    inputMode === 'mass' ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm' : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  ⚖️ গ্রামে ভর (W g)
                </button>
                <button
                  onClick={() => { setInputMode('mole'); setInputValue(2.0); }}
                  className={`px-3 py-2 rounded-lg text-xs font-bold border transition ${
                    inputMode === 'mole' ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm' : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  🧪 মোল সংখ্যা (n mol)
                </button>
                <button
                  onClick={() => { setInputMode('particles'); setInputValue(12.04); }}
                  className={`px-3 py-2 rounded-lg text-xs font-bold border transition ${
                    inputMode === 'particles' ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm' : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  ⚛️ কণা সংখ্যা (×10²³ টি)
                </button>
                <button
                  onClick={() => { setInputMode('volume'); setInputValue(44.8); }}
                  className={`px-3 py-2 rounded-lg text-xs font-bold border transition ${
                    inputMode === 'volume' ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm' : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  🎈 STP আয়তন (V L)
                </button>
              </div>
            </div>

            {/* Value Slider & Number Input */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300">
                  {inputMode === 'mass' ? 'প্রদত্ত ভর (গ্রাম)' :
                   inputMode === 'mole' ? 'মোল সংখ্যা (mol)' :
                   inputMode === 'particles' ? 'কণা সংখ্যা (×১০²³)' : 'গ্যাসের আয়তন (STP তে লিটার)'}
                </span>
                <span className="font-mono text-cyan-400 font-bold text-base">
                  {inputValue} {inputMode === 'mass' ? 'g' : inputMode === 'mole' ? 'mol' : inputMode === 'particles' ? '×10²³' : 'L'}
                </span>
              </div>
              <input
                type="range"
                min={inputMode === 'mole' ? 0.1 : 1}
                max={inputMode === 'mole' ? 10 : inputMode === 'mass' ? compound.molarMass * 8 : inputMode === 'particles' ? 50 : 200}
                step={inputMode === 'mole' ? 0.1 : 0.5}
                value={inputValue}
                onChange={(e) => setInputValue(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Compound Specs */}
            <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-500/30 text-xs space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-400">যৌগের মোলার ভর (M):</span>
                <span className="font-mono font-bold text-cyan-300">{compound.molarMass} g/mol</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">উপাদান মৌলসমূহ:</span>
                <span className="text-slate-200">
                  {compound.elements.map(e => `${e.symbol}(${e.count}টি)`).join(', ')}
                </span>
              </div>
            </div>
          </div>

          {/* Real-time Results & Visual Cards */}
          <div className="lg:col-span-7 space-y-4">
            {/* The 4-Way Universal Mole Quadrilateral */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
                <span className="text-xs text-slate-400 font-bold">মোল সংখ্যা (n)</span>
                <div className="font-mono text-2xl font-black text-cyan-400 mt-2">
                  {moles.toFixed(3)}
                </div>
                <span className="text-[11px] text-slate-500">mol এককে</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
                <span className="text-xs text-slate-400 font-bold">মোট ভর (W)</span>
                <div className="font-mono text-2xl font-black text-amber-400 mt-2">
                  {grams.toFixed(2)}
                </div>
                <span className="text-[11px] text-slate-500">গ্রাম (g) এককে</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
                <span className="text-xs text-slate-400 font-bold">মোট অণু সংখ্যা (N)</span>
                <div className="font-mono text-lg font-black text-emerald-400 mt-2">
                  {(molecules / 1e23).toFixed(3)}×10²³
                </div>
                <span className="text-[11px] text-slate-500">টি অণু</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col justify-between">
                <span className="text-xs text-slate-400 font-bold">STP আয়তন (V)</span>
                <div className="font-mono text-2xl font-black text-purple-400 mt-2">
                  {volumeStp.toFixed(2)}
                </div>
                <span className="text-[11px] text-slate-500">লিটার (L)</span>
              </div>
            </div>

            {/* Formula Step-by-Step Derivation Card */}
            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                <span>ধাপে ধাপে গাণিতিক প্রতিপাদন (পরীক্ষার খাতার ফরম্যাট)</span>
              </h3>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs sm:text-sm space-y-2 text-slate-300">
                <p className="text-cyan-400 font-bold">
                  সূত্র: n = W / M = N / NA = V / 22.4
                </p>
                <div className="border-t border-slate-800/80 pt-2 space-y-1">
                  <p>১. মোল সংখ্যা n = {grams.toFixed(2)} g / {compound.molarMass} g/mol = <span className="text-cyan-300 font-bold">{moles.toFixed(3)} mol</span></p>
                  <p>২. অণু সংখ্যা N = {moles.toFixed(3)} × 6.02 × 10²³ = <span className="text-emerald-300 font-bold">{(molecules / 1e23).toFixed(3)} × 10²³ টি</span></p>
                  <p>৩. STP তে আয়তন V = {moles.toFixed(3)} × 22.4 L = <span className="text-purple-300 font-bold">{volumeStp.toFixed(2)} L</span></p>
                  <p>৪. ১টি অণুর প্রকৃত ভর = {compound.molarMass} / (6.02 × 10²³) = <span className="text-amber-300 font-bold">{(compound.molarMass / 6.022e23).toExponential(3)} g</span></p>
                </div>
              </div>

              {/* Elemental Percentage Breakdown */}
              <div className="space-y-2 pt-2">
                <span className="text-xs text-slate-400 font-bold block">
                  {compound.name} ({compound.formula})-এ মৌলসমূহের শতকরা সংযুতি:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {compound.elements.map(el => {
                    const elMass = el.count * el.atomicMass;
                    const percent = (elMass / compound.molarMass) * 100;
                    return (
                      <div key={el.symbol} className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold text-white block">{el.name} ({el.symbol})</span>
                          <span className="text-[10px] text-slate-400">{el.count} × {el.atomicMass} = {elMass} g</span>
                        </div>
                        <span className="font-mono text-sm font-extrabold text-cyan-400">{percent.toFixed(2)}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: SOLUTION MOLARITY (W = SMV / 1000)                                 */}
      {/* ========================================================================= */}
      {activeTab === 'molarity' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                দ্রব (Solute) নির্বাচন করুন
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Na2CO3', 'NaCl', 'H2SO4', 'CaCO3'].map((key) => {
                  const sItem = COMMON_COMPOUNDS[key];
                  return (
                    <button
                      key={key}
                      onClick={() => setMolaritySoluteKey(key)}
                      className={`p-3 rounded-xl border text-left transition ${
                        molaritySoluteKey === key
                          ? 'bg-blue-500/20 border-blue-400 text-white font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      <span className="font-mono text-sm block">{sItem.formula}</span>
                      <span className="text-xs text-slate-400">{sItem.name} ({sItem.molarMass} g/mol)</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Target Molarity Slider */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-slate-300">কাঙ্ক্ষিত মোলারিটি (S)</span>
                <span className="font-mono font-bold text-cyan-400 text-base">{targetMolarity.toFixed(2)} M</span>
              </div>
              <input
                type="range"
                min="0.05"
                max="2.0"
                step="0.05"
                value={targetMolarity}
                onChange={(e) => setTargetMolarity(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>0.1 M (ডেসিমোলার)</span>
                <span>0.5 M (সেমিমোলার)</span>
                <span>1.0 M (মোলার)</span>
              </div>
            </div>

            {/* Solution Volume Slider */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-slate-300">ফ্লাস্কের আয়তন (V mL)</span>
                <span className="font-mono font-bold text-cyan-400 text-base">{solutionVolumeMl} mL</span>
              </div>
              <input
                type="range"
                min="100"
                max="1000"
                step="50"
                value={solutionVolumeMl}
                onChange={(e) => setSolutionVolumeMl(parseInt(e.target.value, 10))}
                className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>100 mL</span>
                <span>250 mL (স্ট্যান্ডার্ড)</span>
                <span>500 mL</span>
                <span>1000 mL (1 L)</span>
              </div>
            </div>

            {/* Dilution Calculator (S1V1 = S2V2) */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-amber-400 block">
                লঘুকরণ সূত্র (Dilution: S₁V₁ = S₂V₂)
              </span>
              <p className="text-xs text-slate-400">
                এই {solutionVolumeMl} mL {targetMolarity} M দ্রবণটিতে পানি যোগ করে ৫০০ mL করলে নতুন ঘনমাত্রা হবে: <span className="font-mono text-cyan-300 font-bold">{((targetMolarity * solutionVolumeMl) / 500).toFixed(3)} M</span>
              </p>
            </div>
          </div>

          {/* Interactive Flask & Balance Display */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-white">ল্যাবরেটরি দ্রবণ প্রস্তুতি নির্দেশিকা</h3>
                <p className="text-xs text-slate-400">এসএসসি প্র্যাকটিক্যাল ও বোর্ড গণিত সমাধান</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold font-mono">
                W = SMV / 1000
              </div>
            </div>

            {/* Visual Glassware & Weighing scale representation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              {/* Digital Balance Card */}
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-2">
                <span className="text-xs text-slate-400 font-bold block">ডিজিটাল ব্যালেন্সে পরিমাপ্য ভর (W)</span>
                <div className="font-mono text-3xl font-black text-amber-400 bg-slate-900 py-3 rounded-lg border border-slate-800 shadow-inner">
                  {requiredMassGrams.toFixed(3)} g
                </div>
                <span className="text-[11px] text-slate-400">
                  ওয়াইং বোটে ঠিক {requiredMassGrams.toFixed(3)} গ্রাম {solute.name} নিতে হবে
                </span>
              </div>

              {/* Volumetric Flask Simulation Card */}
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-2">
                <span className="text-xs text-slate-400 font-bold block">ভলিউমেট্রিক ফ্লাস্ক ({solutionVolumeMl} mL)</span>
                <div className="h-24 w-28 mx-auto relative rounded-b-2xl border-2 border-slate-700 bg-slate-900 overflow-hidden flex flex-col justify-end">
                  {/* Liquid fill */}
                  <div 
                    style={{ height: '75%', opacity: Math.min(1, targetMolarity * 0.8 + 0.2) }}
                    className="w-full bg-gradient-to-t from-cyan-600 to-blue-500 transition-all duration-500 flex items-center justify-center"
                  >
                    <span className="font-mono text-[10px] text-white font-bold drop-shadow">
                      {targetMolarity} M
                    </span>
                  </div>
                  {/* Meniscus Line */}
                  <div className="absolute top-[25%] left-0 right-0 border-b-2 border-dashed border-rose-400"></div>
                </div>
                <span className="text-[11px] text-slate-400">ডিস্টিল্ড ওয়াটার দিয়ে দাগ পর্যন্ত পূর্ণ করুন</span>
              </div>
            </div>

            {/* Mathematical Derivation Box */}
            <div className="p-4 bg-slate-950 rounded-xl border border-cyan-500/30 font-mono text-xs sm:text-sm space-y-1.5 text-slate-300">
              <p className="text-cyan-400 font-bold">গাণিতিক সমাধান:</p>
              <p>আমরা জানি, W = (S × M × V) / ১০০০</p>
              <p>এখানে, ঘনমাত্রা S = {targetMolarity} M, মোলার ভর M = {solute.molarMass} g/mol, আয়তন V = {solutionVolumeMl} mL</p>
              <p>W = ({targetMolarity} × {solute.molarMass} × {solutionVolumeMl}) / ১০০০</p>
              <p className="text-amber-300 font-bold text-sm pt-1">
                অতএব দ্রবের ভর W = {requiredMassGrams.toFixed(3)} গ্রাম। (উত্তর)
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: LIMITING REACTANT ARENA (লিমিটিং বিক্রিয়ক এরিনা)                    */}
      {/* ========================================================================= */}
      {activeTab === 'limiting' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-800 p-5 space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                রাসায়নিক বিক্রিয়া নির্বাচন করুন
              </label>
              <div className="space-y-2">
                {REACTIONS.map(r => (
                  <button
                    key={r.id}
                    onClick={() => {
                      setSelectedReactionId(r.id);
                      setReactant1Mass(r.r1.molarMass * 2);
                      setReactant2Mass(r.r2.molarMass * 1.5);
                    }}
                    className={`w-full p-3 rounded-xl border text-left transition ${
                      selectedReactionId === r.id
                        ? 'bg-rose-500/20 border-rose-400 text-white font-bold'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="text-xs font-bold block text-slate-200">{r.title}</span>
                    <span className="font-mono text-sm text-cyan-300">{r.equation}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Reactant 1 Mass Slider */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-slate-300">বিক্রিয়ক ১: {reaction.r1.name} ({reaction.r1.formula})</span>
                <span className="font-mono font-bold text-amber-400 text-base">{reactant1Mass.toFixed(1)} g</span>
              </div>
              <input
                type="range"
                min="1"
                max={reaction.r1.molarMass * 10}
                step="0.5"
                value={reactant1Mass}
                onChange={(e) => setReactant1Mass(parseFloat(e.target.value))}
                className="w-full accent-amber-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-500">মোল সংখ্যা = {(reactant1Mass / reaction.r1.molarMass).toFixed(3)} mol</span>
            </div>

            {/* Reactant 2 Mass Slider */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-slate-300">বিক্রিয়ক ২: {reaction.r2.name} ({reaction.r2.formula})</span>
                <span className="font-mono font-bold text-emerald-400 text-base">{reactant2Mass.toFixed(1)} g</span>
              </div>
              <input
                type="range"
                min="1"
                max={reaction.r2.molarMass * 5}
                step="0.5"
                value={reactant2Mass}
                onChange={(e) => setReactant2Mass(parseFloat(e.target.value))}
                className="w-full accent-emerald-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <span className="text-[11px] text-slate-500">মোল সংখ্যা = {(reactant2Mass / reaction.r2.molarMass).toFixed(3)} mol</span>
            </div>

            {/* Actual Yield Slider */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-slate-300">উৎপাদের শতকরা ফলন (% Yield)</span>
                <span className="font-mono font-bold text-purple-400 text-base">{actualYieldPercent}%</span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                step="5"
                value={actualYieldPercent}
                onChange={(e) => setActualYieldPercent(parseInt(e.target.value, 10))}
                className="w-full accent-purple-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <h3 className="text-base font-extrabold text-white">স্টয়কিওমিতিক বিশ্লেষণ ফলাফল</h3>
                <span className="font-mono text-sm px-3 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold">
                  {reaction.equation}
                </span>
              </div>

              {/* Limiting Reactant Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-rose-950/60 to-slate-950 border border-rose-500/40 space-y-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-rose-400" />
                  <span className="text-sm font-bold text-white">
                    লিমিটিং বিক্রিয়ক: <span className="text-rose-400 font-extrabold text-base">{limitingReactant.name} ({limitingReactant.formula})</span>
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  {limitingReactant.name} আগে সম্পূর্ণ শেষ হয়ে যাবে, ফলে বিক্রিয়াটি বন্ধ হয়ে যাবে। উৎপাদের পরিমাণ এই {limitingReactant.formula} এর উপর নির্ভরশীল।
                </p>
              </div>

              {/* Outcome Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 font-bold block">তাত্ত্বিক উৎপাদ (100%)</span>
                  <div className="font-mono text-xl font-black text-emerald-400 mt-1">
                    {theoreticalProductMass.toFixed(2)} g
                  </div>
                  <span className="text-[10px] text-slate-500">{reaction.product.formula} ({reaction.product.state})</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 font-bold block">প্রকৃত প্রাপ্ত উৎপাদ ({actualYieldPercent}%)</span>
                  <div className="font-mono text-xl font-black text-purple-400 mt-1">
                    {actualProductMass.toFixed(2)} g
                  </div>
                  <span className="text-[10px] text-slate-500">ল্যাবে কার্যকর ফলন</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 font-bold block">অবশিষ্ট বিক্রিয়ক</span>
                  <div className="font-mono text-xl font-black text-amber-400 mt-1">
                    {excessLeftoverMass.toFixed(2)} g
                  </div>
                  <span className="text-[10px] text-slate-500">{excessReactant.formula} অবিক্রিয়ত থাকবে</span>
                </div>
              </div>
            </div>

            {/* Step-by-Step Proof for Board Exam */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs sm:text-sm space-y-1.5 text-slate-300">
              <p className="text-cyan-400 font-bold">বোর্ড পরীক্ষার জন্য প্রমাণ (n/সহগ পদ্ধতি):</p>
              <p>১. {reaction.r1.formula} এর মোল অনুপাত = {r1Moles.toFixed(3)} / {reaction.r1.coeff} = <span className="font-bold text-amber-300">{r1Ratio.toFixed(3)}</span></p>
              <p>২. {reaction.r2.formula} এর মোল অনুপাত = {r2Moles.toFixed(3)} / {reaction.r2.coeff} = <span className="font-bold text-emerald-300">{r2Ratio.toFixed(3)}</span></p>
              <p className="text-rose-400 font-bold pt-1">
                যেহেতু {limitingReactant.formula} এর অনুপাত ({Math.min(r1Ratio, r2Ratio).toFixed(3)}) কম, তাই এটিই লিমিটিং বিক্রিয়ক!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: EMPIRICAL & MOLECULAR FORMULA (সংকেত নির্ণয়ক)                     */}
      {/* ========================================================================= */}
      {activeTab === 'formula' && (
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-lg font-extrabold text-white">শতকরা সংযুতি হতে স্থূল ও আণবিক সংকেত নির্ণয়ের অ্যালগরিদম</h3>
              <p className="text-xs text-slate-400">বোর্ড পরীক্ষায় সর্বাধিক আসা সৃজনশীল প্রশ্নের ৪টি নির্দিষ্ট ধাপ</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFormulaPreset('glucose')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  formulaPreset === 'glucose' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                গ্লুকোজ (C₆H₁₂O₆)
              </button>
              <button
                onClick={() => setFormulaPreset('benzene')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  formulaPreset === 'benzene' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                বেনজিন (C₆H₆)
              </button>
              <button
                onClick={() => setFormulaPreset('acetic')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  formulaPreset === 'acetic' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                এসিটিক এসিড (C₂H₄O₂)
              </button>
            </div>
          </div>

          {/* 4-Step Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold text-[10px] uppercase">ধাপ ১</span>
              <h4 className="text-xs font-bold text-white">পারমাণবিক ভর দ্বারা ভাগ</h4>
              <p className="text-[11px] text-slate-400">
                মৌলসমূহের শতকরা সংযুতিকে তাদের পারমাণবিক ভর দ্বারা ভাগ করে পরমাণুর আপেক্ষিক সংখ্যা বের করা হয়।
              </p>
              <div className="font-mono text-xs text-amber-300 bg-slate-900 p-2 rounded">
                C: 40/12 = 3.33<br/>
                H: 6.67/1 = 6.67<br/>
                O: 53.33/16 = 3.33
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold text-[10px] uppercase">ধাপ ২</span>
              <h4 className="text-xs font-bold text-white">ক্ষুদ্রতম ভাগফল দ্বারা ভাগ</h4>
              <p className="text-[11px] text-slate-400">
                প্রাপ্ত ভাগফলগুলোর মধ্যে ক্ষুদ্রতম সংখ্যাটি (৩.৩৩) দিয়ে সবগুলোকে ভাগ করে পরমাণুর অনুপাত পাওয়া যায়।
              </p>
              <div className="font-mono text-xs text-emerald-300 bg-slate-900 p-2 rounded">
                C = 3.33 / 3.33 = 1<br/>
                H = 6.67 / 3.33 = 2<br/>
                O = 3.33 / 3.33 = 1
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold text-[10px] uppercase">ধাপ ৩</span>
              <h4 className="text-xs font-bold text-white">স্থূল সংকেত গঠন</h4>
              <p className="text-[11px] text-slate-400">
                মৌলগুলোর প্রতীকের নিচে অনুপাত বসিয়ে স্থূল সংকেত লেখা হয়।
              </p>
              <div className="font-mono text-sm font-bold text-cyan-300 bg-slate-900 p-3 rounded text-center">
                CH₂O
              </div>
              <span className="text-[10px] text-slate-500 block text-center">স্থূল ভর = ১২ + ২ + ১৬ = ৩০</span>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold text-[10px] uppercase">ধাপ ৪</span>
              <h4 className="text-xs font-bold text-white">আণবিক সংকেত = (স্থূল)n</h4>
              <p className="text-[11px] text-slate-400">
                n = আণবিক ভর / স্থূল ভর = ১৮০ / ৩০ = ৬।
              </p>
              <div className="font-mono text-sm font-bold text-purple-300 bg-slate-900 p-3 rounded text-center">
                (CH₂O)₆ = C₆H₁₂O₆
              </div>
              <span className="text-[10px] text-emerald-400 block text-center font-bold">গ্লুকোজের আণবিক সংকেত!</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
