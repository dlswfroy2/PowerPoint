import React, { useState } from 'react';
import {
  Zap,
  Flame,
  Scale,
  RotateCcw,
  Sparkles,
  Layers,
  ArrowRight,
  Sliders,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Activity,
  Droplets,
  TrendingUp,
  ShieldAlert,
  Beaker,
  Thermometer,
  Gauge
} from 'lucide-react';

interface OxidationPreset {
  id: string;
  nameBn: string;
  formula: string;
  targetElement: string;
  targetSymbol: string;
  steps: string[];
  result: string;
  explanation: string;
  isException?: boolean;
}

const OXIDATION_PRESETS: OxidationPreset[] = [
  {
    id: 'kmno4',
    nameBn: 'পটাশিয়াম পারম্যাঙ্গানেট',
    formula: 'KMnO₄',
    targetElement: 'ম্যাঙ্গানিজ',
    targetSymbol: 'Mn',
    steps: [
      'ধরি, Mn এর জারণ সংখ্যা = x',
      'ক্ষার ধাতু পটাশিয়াম (K) এর জারণ সংখ্যা = +1',
      'অক্সিজেন (O) এর সাধারণ জারণ সংখ্যা = -2',
      'নিরপেক্ষ যৌগে সকল পরমাণুর জারণ সংখ্যার যোগফল = 0',
      '(+1) + x + 4(-2) = 0',
      '1 + x - 8 = 0',
      'x - 7 = 0  ⟹  x = +7'
    ],
    result: '+7',
    explanation: 'KMnO₄-এ ম্যাঙ্গানিজ তার সর্বোচ্চ জারণ অবস্থা +৭ প্রদর্শন করে। এটি একটি অত্যন্ত শক্তিশালী জারক পদার্থ।'
  },
  {
    id: 'k2cr2o7',
    nameBn: 'পটাশিয়াম ডাইক্রোমেট',
    formula: 'K₂Cr₂O₇',
    targetElement: 'ক্রোমিয়াম',
    targetSymbol: 'Cr',
    steps: [
      'ধরি, Cr এর জারণ সংখ্যা = x',
      'পটাশিয়াম K = +1 এবং অক্সিজেন O = -2',
      'নিরপেক্ষ যৌগে মোট জারণ সংখ্যা = 0',
      '2(+1) + 2x + 7(-2) = 0',
      '2 + 2x - 14 = 0',
      '2x - 12 = 0  ⟹  2x = +12  ⟹  x = +6'
    ],
    result: '+6',
    explanation: 'K₂Cr₂O₇-এ প্রতিটি ক্রোমিয়াম পরমাণুর জারণ সংখ্যা +৬। এটি ল্যাবের অন্যতম প্রধান কমলা বর্ণের জারক।'
  },
  {
    id: 'h2so4',
    nameBn: 'সালফিউরিক এসিড',
    formula: 'H₂SO₄',
    targetElement: 'সালফার',
    targetSymbol: 'S',
    steps: [
      'ধরি, S এর জারণ সংখ্যা = x',
      'হাইড্রোজেন H = +1 এবং অক্সিজেন O = -2',
      '2(+1) + x + 4(-2) = 0',
      '2 + x - 8 = 0',
      'x - 6 = 0  ⟹  x = +6'
    ],
    result: '+6',
    explanation: 'সালফিউরিক এসিডে সালফারের যোজনী ৬ এবং জারণ সংখ্যাও +৬।'
  },
  {
    id: 'h2o2',
    nameBn: 'হাইড্রোজেন পারঅক্সাইড (ব্যতিক্রম)',
    formula: 'H₂O₂',
    targetElement: 'অক্সিজেন',
    targetSymbol: 'O',
    steps: [
      'ধরি, O এর জারণ সংখ্যা = x',
      'হাইড্রোজেন H = +1',
      '2(+1) + 2x = 0',
      '2 + 2x = 0  ⟹  2x = -2  ⟹  x = -1'
    ],
    result: '-1',
    explanation: 'পারঅক্সাইড বন্ধন (-O-O-) উপস্থিত থাকায় অক্সিজেনের জারণ সংখ্যা সাধারণ -২ এর বদলে -১ হয়। এটি বোর্ড পরীক্ষার অত্যন্ত প্রিয় প্রশ্ন।',
    isException: true
  },
  {
    id: 'ko2',
    nameBn: 'পটাশিয়াম সুপারঅক্সাইড (ভগ্নাংশ)',
    formula: 'KO₂',
    targetElement: 'অক্সিজেন',
    targetSymbol: 'O',
    steps: [
      'ধরি, O এর জারণ সংখ্যা = x',
      'পটাশিয়াম K = +1',
      '(+1) + 2x = 0',
      '2x = -1  ⟹  x = -½'
    ],
    result: '-½',
    explanation: 'সুপারঅক্সাইডে অক্সিজেনের জারণ সংখ্যা ভগ্নাংশ (-½) হয়। প্রমাণ করে যে জারণ সংখ্যা ভগ্নাংশও হতে পারে, কিন্তু যোজনী কখনোই ভগ্নাংশ হয় না!',
    isException: true
  },
  {
    id: 'na2s2o3',
    nameBn: 'সোডিয়াম থায়োসালফেট',
    formula: 'Na₂S₂O₃',
    targetElement: 'সালফার',
    targetSymbol: 'S',
    steps: [
      'ধরি, S এর জারণ সংখ্যা = x',
      'সোডিয়াম Na = +1 এবং অক্সিজেন O = -2',
      '2(+1) + 2x + 3(-2) = 0',
      '2 + 2x - 6 = 0',
      '2x - 4 = 0  ⟹  2x = +4  ⟹  x = +2'
    ],
    result: '+2',
    explanation: 'থায়োসালফেট যৌগে সালফারের গড় জারণ সংখ্যা +২।'
  }
];

interface EquilibriumSystem {
  id: string;
  titleBn: string;
  equation: string;
  deltaH: number; // kJ
  isExothermic: boolean;
  deltaN: number; // np - nr
  rMol: number;
  pMol: number;
  optimumTemp: string;
  optimumPressure: string;
  catalyst: string;
}

const EQUILIBRIUM_SYSTEMS: EquilibriumSystem[] = [
  {
    id: 'haber_ammonia',
    titleBn: 'হেবার-বস অ্যামোনিয়া সংশ্লেষণ',
    equation: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)',
    deltaH: -92,
    isExothermic: true,
    deltaN: 2 - 4, // -2
    rMol: 4,
    pMol: 2,
    optimumTemp: '৪৫০°C - ৫৫০°C',
    optimumPressure: '২০০ atm',
    catalyst: 'Fe চূর্ণ + Al₂O₃/K₂O'
  },
  {
    id: 'contact_so3',
    titleBn: 'স্পর্শ পদ্ধতিতে SO₃ উৎপাদন',
    equation: '2SO₂(g) + O₂(g) ⇌ 2SO₃(g)',
    deltaH: -197,
    isExothermic: true,
    deltaN: 2 - 3, // -1
    rMol: 3,
    pMol: 2,
    optimumTemp: '৪৫০°C',
    optimumPressure: '১.৫ - ২.০ atm',
    catalyst: 'V₂O₅ (ভ্যানাডিয়াম পেন্টক্সাইড)'
  },
  {
    id: 'no_synthesis',
    titleBn: 'নাইট্রিক অক্সাইড উৎপাদন (তাপহারী)',
    equation: 'N₂(g) + O₂(g) ⇌ 2NO(g)',
    deltaH: 180,
    isExothermic: false,
    deltaN: 2 - 2, // 0
    rMol: 2,
    pMol: 2,
    optimumTemp: '৩০০০°C (তীব্র তাপ)',
    optimumPressure: 'চাপের প্রভাব নেই (Δn = 0)',
    catalyst: 'বিদ্যুৎ ক্ষরণ'
  },
  {
    id: 'pcl5_decomp',
    titleBn: 'ফসফরাস পেন্টাক্লোরাইড বিয়োজন',
    equation: 'PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)',
    deltaH: 90,
    isExothermic: false,
    deltaN: 2 - 1, // +1
    rMol: 1,
    pMol: 2,
    optimumTemp: 'উচ্চ তাপমাত্রা',
    optimumPressure: 'নিম্ন চাপ',
    catalyst: 'তাপ'
  }
];

interface ChemicalReactionsLabProps {
  initialTab?: 'oxidation' | 'redox' | 'leChatelier' | 'classify';
}

export const ChemicalReactionsLab: React.FC<ChemicalReactionsLabProps> = ({
  initialTab = 'oxidation'
}) => {
  const [activeTab, setActiveTab] = useState<'oxidation' | 'redox' | 'leChatelier' | 'classify'>(initialTab);

  React.useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
  }, [initialTab]);

  // Tab 1: Oxidation State
  const [selectedOxPreset, setSelectedOxPreset] = useState<string>('kmno4');

  // Tab 2: Redox Simulator
  const [redoxReaction, setRedoxReaction] = useState<'zn_cu' | 'fe_cu' | 'na_cl'>('zn_cu');
  const [electronStep, setElectronStep] = useState<number>(1);

  // Tab 3: Le Chatelier Simulator
  const [selectedEqId, setSelectedEqId] = useState<string>('haber_ammonia');
  const [simTemp, setSimTemp] = useState<number>(450); // °C
  const [simPressure, setSimPressure] = useState<number>(200); // atm
  const [reactantAdded, setReactantAdded] = useState<boolean>(false);

  const activeOxData = OXIDATION_PRESETS.find(p => p.id === selectedOxPreset) || OXIDATION_PRESETS[0];
  const activeEqData = EQUILIBRIUM_SYSTEMS.find(e => e.id === selectedEqId) || EQUILIBRIUM_SYSTEMS[0];

  // Le Chatelier dynamic yield calculation
  const calculateYield = () => {
    let yieldScore = 50; // base %

    // Temperature effect
    if (activeEqData.isExothermic) {
      // Exothermic: lower temp = higher yield
      if (simTemp < 350) yieldScore += 25;
      else if (simTemp <= 500) yieldScore += 15;
      else yieldScore -= 20;
    } else {
      // Endothermic: higher temp = higher yield
      if (simTemp > 600) yieldScore += 30;
      else if (simTemp >= 400) yieldScore += 10;
      else yieldScore -= 25;
    }

    // Pressure effect
    if (activeEqData.deltaN < 0) {
      // Products have fewer moles: higher pressure = higher yield
      if (simPressure > 250) yieldScore += 20;
      else if (simPressure >= 150) yieldScore += 10;
      else yieldScore -= 15;
    } else if (activeEqData.deltaN > 0) {
      // Products have more moles: higher pressure = lower yield
      if (simPressure > 150) yieldScore -= 20;
      else yieldScore += 15;
    }

    // Reactant addition effect
    if (reactantAdded) yieldScore += 15;

    return Math.min(Math.max(yieldScore, 8), 98);
  };

  const calculatedYield = calculateYield();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-blue-500/40 rounded-2xl p-6 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/40">
              <Zap className="h-6 w-6" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              রসায়ন অধ্যায় ৭ · ভার্চুয়াল ল্যাব
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            রাসায়নিক বিক্রিয়া ও রেডক্স-সাম্যাবস্থা ল্যাব
          </h1>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            জারণ সংখ্যা গণনা, রেডক্স ইলেকট্রন স্থানান্তর, লা-শাতেলিয়ার সাম্যাবস্থা শিফট এবং বিক্রিয়ার শ্রেণিবিভাগ হাতে-কলমে সিমুলেশন।
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('oxidation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'oxidation'
                ? 'bg-purple-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Sparkles className="h-4 w-4" />
            <span>জারণ সংখ্যা ক্যালকুলেটর</span>
          </button>

          <button
            onClick={() => setActiveTab('redox')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'redox'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Activity className="h-4 w-4" />
            <span>রেডক্স ইলেকট্রন ট্র্যান্সফার</span>
          </button>

          <button
            onClick={() => setActiveTab('leChatelier')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'leChatelier'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Scale className="h-4 w-4" />
            <span>লা-শাতেলিয়ার সাম্যাবস্থা</span>
          </button>

          <button
            onClick={() => setActiveTab('classify')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'classify'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>বিক্রিয়া ক্লাসিফায়ার</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: OXIDATION NUMBER CALCULATOR                                        */}
      {/* ========================================================================= */}
      {activeTab === 'oxidation' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Preset Selector */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-4">
            <h3 className="text-base font-bold text-purple-300 flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>যৌগ নির্বাচন করুন</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {OXIDATION_PRESETS.map(preset => (
                <button
                  key={preset.id}
                  onClick={() => setSelectedOxPreset(preset.id)}
                  className={`p-3 rounded-xl border text-left transition ${
                    selectedOxPreset === preset.id
                      ? 'bg-purple-950/60 border-purple-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-base font-black text-white">{preset.formula}</span>
                    <span className="px-2 py-0.5 rounded font-mono text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                      {preset.targetSymbol} = {preset.result}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center justify-between">
                    <span>{preset.nameBn}</span>
                    <span className="text-[11px] text-purple-400">{preset.targetElement}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-3 bg-purple-950/30 rounded-xl border border-purple-900/50 text-xs text-purple-200 leading-relaxed">
              💡 গোল্ডেন রুল: মুক্ত মৌলের জারণ সংখ্যা সর্বদা ০, ক্ষার ধাতু +১, মৃৎক্ষার ধাতু +২ এবং নিরপেক্ষ যৌগে মোট যোগফল সর্বদা ০ হয়।
            </div>
          </div>

          {/* Mathematical Step-by-Step Solver */}
          <div className="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">ধাপভিত্তিক বীজগাণিতিক সমাধান</span>
                <h2 className="text-2xl font-black text-white flex items-center gap-2 mt-0.5">
                  <span className="text-purple-400">{activeOxData.formula}</span>
                  <span className="text-base text-slate-400 font-normal">যৌগে {activeOxData.targetElement} ({activeOxData.targetSymbol})-এর জারণ সংখ্যা</span>
                </h2>
              </div>

              <div className="px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/40 text-center">
                <span className="text-[10px] text-purple-300 uppercase block font-semibold">জারণ সংখ্যা মান</span>
                <span className="text-2xl font-black text-purple-300 font-mono">{activeOxData.result}</span>
              </div>
            </div>

            {/* Step list */}
            <div className="space-y-2.5">
              {activeOxData.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-slate-950 rounded-xl border border-slate-800/80">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 text-xs font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-mono text-slate-200 mt-0.5">{step}</span>
                </div>
              ))}
            </div>

            {/* Scientific Callout Box */}
            <div className="p-4 bg-slate-950 rounded-xl border border-purple-500/40 flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">বৈজ্ঞানিক তাৎপর্য ও বোর্ড টিপস</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{activeOxData.explanation}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: REDOX ELECTRON TRANSFER LAB                                       */}
      {/* ========================================================================= */}
      {activeTab === 'redox' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs text-blue-400 uppercase font-bold tracking-wider">ইলেকট্রনীয় মতবাদে জারণ-বিজারণ</span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                রেডক্স ইলেকট্রন স্থানান্তর ও অর্ধ-বিক্রিয়া সিমুলেটর
              </h2>
            </div>

            {/* Reaction Selector */}
            <div className="flex gap-2">
              <button
                onClick={() => { setRedoxReaction('zn_cu'); setElectronStep(1); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  redoxReaction === 'zn_cu' ? 'bg-blue-600 text-white' : 'bg-slate-950 text-slate-400'
                }`}
              >
                Zn + CuSO₄
              </button>
              <button
                onClick={() => { setRedoxReaction('fe_cu'); setElectronStep(1); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  redoxReaction === 'fe_cu' ? 'bg-blue-600 text-white' : 'bg-slate-950 text-slate-400'
                }`}
              >
                Fe + CuSO₄
              </button>
              <button
                onClick={() => { setRedoxReaction('na_cl'); setElectronStep(1); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  redoxReaction === 'na_cl' ? 'bg-blue-600 text-white' : 'bg-slate-950 text-slate-400'
                }`}
              >
                2Na + Cl₂
              </button>
            </div>
          </div>

          {/* Electron Animation Stage */}
          <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-around gap-6 py-8">
              {/* Left Atom (Reducing Agent / Donor) */}
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 border-2 border-slate-500 shadow-xl flex flex-col items-center justify-center p-2">
                  <span className="text-2xl font-black text-white font-mono">
                    {redoxReaction === 'zn_cu' ? 'Zn⁰' : redoxReaction === 'fe_cu' ? 'Fe⁰' : '2Na⁰'}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-1">ধাতু পরমাণু</span>
                </div>
                <span className="mt-2 text-xs font-bold text-amber-400">বিজারক পদার্থ (ইলেকট্রন দাতা)</span>
                <span className="text-[11px] text-slate-400">নিজে জারিত হয় (জারণ ঘটে)</span>
              </div>

              {/* Electron Transfer Arrow & Floating Orbs */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-16 sm:w-28 bg-gradient-to-r from-amber-400 to-blue-400"></div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/50 animate-pulse text-amber-300 font-bold font-mono text-xs">
                    {redoxReaction === 'na_cl' ? '2e⁻' : '2e⁻'}
                  </div>
                  <div className="h-0.5 w-16 sm:w-28 bg-gradient-to-r from-amber-400 to-blue-400"></div>
                </div>
                <span className="text-xs font-mono font-bold text-amber-300">ইলেকট্রন স্থানান্তর প্রবাহ ⟶</span>
                <button
                  onClick={() => setElectronStep(prev => prev === 1 ? 2 : 1)}
                  className="mt-2 px-3 py-1 rounded-lg bg-blue-600/80 hover:bg-blue-500 text-white text-xs font-bold transition flex items-center gap-1 shadow-md"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>ইলেকট্রন ত্যাগ / গ্রহণ সিমুলেশন</span>
                </button>
              </div>

              {/* Right Ion (Oxidizing Agent / Acceptor) */}
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-950 border-2 border-blue-400 shadow-xl flex flex-col items-center justify-center p-2">
                  <span className="text-2xl font-black text-white font-mono">
                    {redoxReaction === 'zn_cu' ? 'Cu²⁺' : redoxReaction === 'fe_cu' ? 'Cu²⁺' : 'Cl₂⁰'}
                  </span>
                  <span className="text-[10px] text-blue-200 mt-1">আয়ন / অণু</span>
                </div>
                <span className="mt-2 text-xs font-bold text-cyan-400">জারক পদার্থ (ইলেকট্রন গ্রহীতা)</span>
                <span className="text-[11px] text-slate-400">নিজে বিজারিত হয় (বিজারণ ঘটে)</span>
              </div>
            </div>
          </div>

          {/* Half-Reactions Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-amber-950/30 rounded-xl border border-amber-800/60">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                ১. জারণ অর্ধ-বিক্রিয়া (Oxidation Half-Reaction)
              </span>
              <p className="font-mono text-base font-bold text-white my-1">
                {redoxReaction === 'zn_cu' && 'Zn(s) ⟶ Zn²⁺(aq) + 2e⁻'}
                {redoxReaction === 'fe_cu' && 'Fe(s) ⟶ Fe²⁺(aq) + 2e⁻'}
                {redoxReaction === 'na_cl' && '2Na(s) ⟶ 2Na⁺ + 2e⁻'}
              </p>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                পরমাণুটি ইলেকট্রন বর্জন করেছে। এর জারণ সংখ্যা ০ থেকে বৃদ্ধি পেয়ে +২ হয়েছে।
              </p>
            </div>

            <div className="p-4 bg-blue-950/30 rounded-xl border border-blue-800/60">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
                ২. বিজারণ অর্ধ-বিক্রিয়া (Reduction Half-Reaction)
              </span>
              <p className="font-mono text-base font-bold text-white my-1">
                {redoxReaction === 'zn_cu' && 'Cu²⁺(aq) + 2e⁻ ⟶ Cu(s)'}
                {redoxReaction === 'fe_cu' && 'Cu²⁺(aq) + 2e⁻ ⟶ Cu(s)'}
                {redoxReaction === 'na_cl' && 'Cl₂(g) + 2e⁻ ⟶ 2Cl⁻'}
              </p>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                আয়নটি ঐ ইলেকট্রন গ্রহণ করেছে। এর জারণ সংখ্যা হ্রাস পেয়ে ০ হয়েছে।
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: LE CHATELIER'S EQUILIBRIUM SIMULATOR                               */}
      {/* ========================================================================= */}
      {activeTab === 'leChatelier' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Controls Panel */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 space-y-5">
            <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
              <Scale className="h-4 w-4" />
              <span>উভমুখী বিক্রিয়া ও শর্ত নির্বাচন</span>
            </h3>

            {/* Reaction Selector */}
            <div className="space-y-2">
              {EQUILIBRIUM_SYSTEMS.map(sys => (
                <button
                  key={sys.id}
                  onClick={() => setSelectedEqId(sys.id)}
                  className={`w-full p-2.5 rounded-xl border text-left transition ${
                    selectedEqId === sys.id
                      ? 'bg-amber-950/50 border-amber-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <span className="text-xs font-bold block text-amber-300">{sys.titleBn}</span>
                  <span className="font-mono text-[11px] text-slate-300">{sys.equation}</span>
                </button>
              ))}
            </div>

            {/* Temperature Slider */}
            <div className="space-y-1.5 bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 flex items-center gap-1">
                  <Thermometer className="h-3.5 w-3.5 text-rose-400" />
                  <span>তাপমাত্রা (Temperature):</span>
                </span>
                <span className="font-mono font-bold text-rose-300">{simTemp}°C</span>
              </div>
              <input
                type="range"
                min="200"
                max="800"
                step="25"
                value={simTemp}
                onChange={(e) => setSimTemp(parseInt(e.target.value, 10))}
                className="w-full accent-rose-500 h-1.5 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>২০০°C (শীতল)</span>
                <span>৮০০°C (উত্তপ্ত)</span>
              </div>
            </div>

            {/* Pressure Slider */}
            <div className="space-y-1.5 bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 flex items-center gap-1">
                  <Gauge className="h-3.5 w-3.5 text-sky-400" />
                  <span>চাপ (Pressure):</span>
                </span>
                <span className="font-mono font-bold text-sky-300">{simPressure} atm</span>
              </div>
              <input
                type="range"
                min="1"
                max="400"
                step="10"
                value={simPressure}
                onChange={(e) => setSimPressure(parseInt(e.target.value, 10))}
                className="w-full accent-sky-500 h-1.5 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>১ atm (স্বাভাবিক)</span>
                <span>৪০০ atm (চরম উচ্চ)</span>
              </div>
            </div>

            {/* Reactant Add Toggle */}
            <div className="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-300 font-semibold">অতিরিক্ত বিক্রিয়ক যোগ:</span>
              <button
                onClick={() => setReactantAdded(!reactantAdded)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  reactantAdded ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {reactantAdded ? 'যোগ করা হয়েছে (+)' : 'স্বাভাবিক'}
              </button>
            </div>
          </div>

          {/* Dynamic Shift & Yield Display */}
          <div className="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-5">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">লা-শাতেলিয়ার সাম্যাবস্থা ফলাফল</span>
              <h2 className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5">
                {activeEqData.equation}
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                ΔH = {activeEqData.deltaH} kJ/mol ({activeEqData.isExothermic ? 'তাপোৎপাদী' : 'তাপহারী'}) | বিক্রিয়ক মোল = {activeEqData.rMol}, উৎপাদ মোল = {activeEqData.pMol}
              </p>
            </div>

            {/* Yield Gauge & Progress */}
            <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-semibold">উৎপাদের প্রত্যাশিত ফলন (Product Yield):</span>
                <span className="font-mono text-xl font-black text-emerald-400">{calculatedYield}%</span>
              </div>
              <div className="w-full bg-slate-900 h-4 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 via-emerald-500 to-cyan-500 transition-all duration-300"
                  style={{ width: `${calculatedYield}%` }}
                ></div>
              </div>
            </div>

            {/* Shift Direction Explanations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <span className="font-bold text-rose-400 block mb-1">তাপমাত্রার প্রভাবের বিশ্লেষণ</span>
                <p className="text-slate-300 leading-relaxed">
                  {activeEqData.isExothermic ? (
                    simTemp < 500
                      ? `তাপমাত্রা কম (${simTemp}°C) থাকায় তাপোৎপাদী বিক্রিয়ার সাম্যাবস্থা ডানে অগ্রসর হয়েছে। ফলে উৎপাদ বৃদ্ধি পেয়েছে।`
                      : `তাপমাত্রা বৃদ্ধি (${simTemp}°C) করায় উৎপন্ন তাপ প্রশমিত করতে সাম্যাবস্থা বামে সরে গেছে। উৎপাদ হ্রাস পেয়েছে।`
                  ) : (
                    simTemp > 500
                      ? `তাপমাত্রা বেশি (${simTemp}°C) থাকায় তাপহারী বিক্রিয়ার সাম্যাবস্থা ডানে অগ্রসর হয়েছে। ফলে উৎপাদ বৃদ্ধি পেয়েছে।`
                      : `তাপমাত্রা কম থাকায় তাপহারী বিক্রিয়া মন্থর এবং সাম্যাবস্থা বামে সরেছে।`
                  )}
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <span className="font-bold text-sky-400 block mb-1">চাপের প্রভাবের বিশ্লেষণ</span>
                <p className="text-slate-300 leading-relaxed">
                  {activeEqData.deltaN < 0 ? (
                    simPressure > 100
                      ? `চাপ বৃদ্ধি (${simPressure} atm) করায় সাম্যাবস্থা কম মোলের দিকে (ডানে, ২ মোলে) সরে গেছে। ফলে উৎপাদ বেড়েছে।`
                      : `চাপ কম থাকায় গ্যাসের আয়তন প্রসারিত এবং উৎপাদ কম হয়েছে।`
                  ) : activeEqData.deltaN > 0 ? (
                    `উৎপাদে মোল সংখ্যা বেশি হওয়ায় চাপ বৃদ্ধি করলে সাম্যাবস্থা উল্টো বামে সরে যাবে।`
                  ) : (
                    `বিক্রিয়ক ও উৎপাদের গ্যাসীয় মোল সংখ্যা সমান (Δn = ০), তাই চাপের কোনো প্রভাব নেই!`
                  )}
                </p>
              </div>
            </div>

            {/* Industrial Optimum Parameters */}
            <div className="p-3 bg-amber-950/30 rounded-xl border border-amber-900/60 text-xs text-amber-200">
              🏭 শিল্পক্ষেত্রে অনুকূল শর্ত: তাপমাত্রা {activeEqData.optimumTemp}, চাপ {activeEqData.optimumPressure}, ব্যবহৃত প্রভাবক {activeEqData.catalyst}।
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: REACTION CLASSIFIER & BALANCER                                     */}
      {/* ========================================================================= */}
      {activeTab === 'classify' && (
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Layers className="h-5 w-5 text-emerald-400" />
            <span>রাসায়নিক বিক্রিয়া শ্রেণিবিভাগ ও উদাহরণ নির্দেশিকা</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">১. সংযোজন ও সংশ্লেষণ</span>
              <p className="font-mono text-sm text-white font-bold my-1">2H₂ + O₂ ⟶ 2H₂O</p>
              <p className="text-xs text-slate-400">একাধিক পদার্থ যুক্ত হয়ে ১টি যৌগ তৈরি করে। মৌল+মৌল হলে সংশ্লেষণ।</p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300">রেডক্স</span>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">২. বিয়োজন বিক্রিয়া</span>
              <p className="font-mono text-sm text-white font-bold my-1">PCl₅ ⟶ PCl₃ + Cl₂</p>
              <p className="text-xs text-slate-400">একটি যৌগ ভেঙে একাধিক মৌল বা যৌগ উৎপন্ন হয়।</p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300">রেডক্স</span>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">৩. প্রতিস্থাপন বিক্রিয়া</span>
              <p className="font-mono text-sm text-white font-bold my-1">Zn + CuSO₄ ⟶ ZnSO₄ + Cu</p>
              <p className="text-xs text-slate-400">অধিক সক্রিয় ধাতু কম সক্রিয় ধাতুকে অপসারিত করে স্থান দখল করে।</p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300">রেডক্স</span>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">৪. দহন বিক্রিয়া</span>
              <p className="font-mono text-sm text-white font-bold my-1">CH₄ + 2O₂ ⟶ CO₂ + 2H₂O</p>
              <p className="text-xs text-slate-400">অক্সিজেনের উপস্থিতিতে পুড়িয়ে অক্সাইড ও তাপ-আলো উৎপন্ন হয়।</p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-300">রেডক্স</span>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">৫. প্রশমন বিক্রিয়া</span>
              <p className="font-mono text-sm text-white font-bold my-1">HCl + NaOH ⟶ NaCl + H₂O</p>
              <p className="text-xs text-slate-400">এসিড ও ক্ষার মিলে লবণ ও পানি। প্রশমন তাপ ΔH = -57.34 kJ।</p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300">নন-রেডক্স</span>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">৬. অধঃক্ষেপণ বিক্রিয়া</span>
              <p className="font-mono text-sm text-white font-bold my-1">AgNO₃ + NaCl ⟶ AgCl↓ + NaNO₃</p>
              <p className="text-xs text-slate-400">অদ্রবণীয় তলানি নিচে জমা হয় (দধির মতো সাদা AgCl)।</p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300">নন-রেডক্স</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
