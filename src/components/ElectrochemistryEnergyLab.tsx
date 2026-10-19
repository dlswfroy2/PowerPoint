/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Zap,
  Battery,
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
  ShieldAlert,
  Beaker,
  Thermometer,
  Gauge,
  Play,
  Pause,
  Info
} from 'lucide-react';

interface ElectrochemistryEnergyLabProps {
  initialTab?: 'daniell' | 'electroplating' | 'drycell' | 'bondEnergy';
}

export const ElectrochemistryEnergyLab: React.FC<ElectrochemistryEnergyLabProps> = ({
  initialTab = 'daniell'
}) => {
  const [activeTab, setActiveTab] = useState<'daniell' | 'electroplating' | 'drycell' | 'bondEnergy'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // -------------------------------------------------------------
  // TAB 1: DANIELL CELL STATE
  // -------------------------------------------------------------
  const [isCircuitClosed, setIsCircuitClosed] = useState<boolean>(true);
  const [hasSaltBridge, setHasSaltBridge] = useState<boolean>(true);
  const [znConcentration, setZnConcentration] = useState<number>(1.0); // M
  const [cuConcentration, setCuConcentration] = useState<number>(1.0); // M
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  // Auto-tick when circuit is closed and salt bridge is in
  useEffect(() => {
    if (!isCircuitClosed || !hasSaltBridge) return;
    const interval = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isCircuitClosed, hasSaltBridge]);

  // Cell potential calculation using Nernst equation: E = 1.10 - (0.0592/2)*log10([Zn2+]/[Cu2+])
  const cellVoltage = !isCircuitClosed || !hasSaltBridge
    ? 0.00
    : Math.max(0, parseFloat((1.10 - 0.0296 * Math.log10(znConcentration / cuConcentration)).toFixed(2)));

  // Electrode mass change (Zn decreases, Cu increases)
  const znLoss = parseFloat((elapsedTime * 0.015).toFixed(3));
  const cuGain = parseFloat((elapsedTime * 0.015).toFixed(3));

  // -------------------------------------------------------------
  // TAB 2: ELECTROPLATING STATE
  // -------------------------------------------------------------
  const [targetObject, setTargetObject] = useState<'spoon' | 'key' | 'coin'>('spoon');
  const [coatingMetal, setCoatingMetal] = useState<'silver' | 'gold' | 'nickel'>('silver');
  const [currentAmps, setCurrentAmps] = useState<number>(2.0); // Amperes
  const [platingTimeMinutes, setPlatingTimeMinutes] = useState<number>(10); // Minutes
  const [isPlatingActive, setIsPlatingActive] = useState<boolean>(false);
  const [platedProgress, setPlatedProgress] = useState<number>(0);

  useEffect(() => {
    let timer: any;
    if (isPlatingActive) {
      timer = setInterval(() => {
        setPlatedProgress(prev => {
          if (prev >= 100) {
            setIsPlatingActive(false);
            return 100;
          }
          return prev + 5;
        });
      }, 500);
    }
    return () => clearInterval(timer);
  }, [isPlatingActive]);

  // Faraday Law: W = (I * t * M) / (z * F)
  // F = 96500 C/mol
  const metalProps = {
    silver: { nameBn: 'সিলভার (Ag)', M: 107.87, z: 1, color: '#e2e8f0', saltBn: 'AgNO₃ দ্রবণ' },
    gold: { nameBn: 'স্বর্ণ (Au)', M: 196.97, z: 3, color: '#fbbf24', saltBn: 'AuCl₃ দ্রবণ' },
    nickel: { nameBn: 'নিকেল (Ni)', M: 58.69, z: 2, color: '#94a3b8', saltBn: 'NiSO₄ দ্রবণ' }
  }[coatingMetal];

  const totalSeconds = platingTimeMinutes * 60;
  const depositedMassGrams = parseFloat(
    ((currentAmps * totalSeconds * metalProps.M) / (metalProps.z * 96500)).toFixed(3)
  );

  // -------------------------------------------------------------
  // TAB 3: DRY CELL STATE
  // -------------------------------------------------------------
  const [selectedCellPart, setSelectedCellPart] = useState<'zinc' | 'carbon' | 'paste' | 'cap'>('zinc');

  // -------------------------------------------------------------
  // TAB 4: BOND ENERGY CALCULATOR
  // -------------------------------------------------------------
  const [selectedReactionPreset, setSelectedReactionPreset] = useState<string>('methane');

  const BOND_PRESETS: Record<string, {
    titleBn: string;
    eqBn: string;
    brokenBonds: { label: string; count: number; energy: number }[];
    formedBonds: { label: string; count: number; energy: number }[];
  }> = {
    methane: {
      titleBn: 'মিথেন দহন (CH₄ + 2O₂ ⟶ CO₂ + 2H₂O)',
      eqBn: 'CH₄(g) + 2O₂(g) ⟶ CO₂(g) + 2H₂O(g)',
      brokenBonds: [
        { label: 'C–H একক বন্ধন (CH₄)', count: 4, energy: 414 },
        { label: 'O=O দ্বিবন্ধন (2O₂)', count: 2, energy: 498 }
      ],
      formedBonds: [
        { label: 'C=O দ্বিবন্ধন (CO₂)', count: 2, energy: 745 },
        { label: 'O–H একক বন্ধন (2H₂O)', count: 4, energy: 464 }
      ]
    },
    hcl: {
      titleBn: 'হাইড্রোজেন ও ক্লোরিন থেকে HCl গঠন',
      eqBn: 'H₂(g) + Cl₂(g) ⟶ 2HCl(g)',
      brokenBonds: [
        { label: 'H–H একক বন্ধন (H₂)', count: 1, energy: 436 },
        { label: 'Cl–Cl একক বন্ধন (Cl₂)', count: 1, energy: 244 }
      ],
      formedBonds: [
        { label: 'H–Cl একক বন্ধন (2HCl)', count: 2, energy: 431 }
      ]
    },
    water: {
      titleBn: 'হাইড্রোজেন ও অক্সিজেন থেকে পানি গঠন',
      eqBn: '2H₂(g) + O₂(g) ⟶ 2H₂O(g)',
      brokenBonds: [
        { label: 'H–H একক বন্ধন (2H₂)', count: 2, energy: 436 },
        { label: 'O=O দ্বিবন্ধন (O₂)', count: 1, energy: 498 }
      ],
      formedBonds: [
        { label: 'O–H একক বন্ধন (2H₂O)', count: 4, energy: 464 }
      ]
    },
    ammonia: {
      titleBn: 'হেবার পদ্ধতিতে অ্যামোনিয়া উৎপাদন (N₂ + 3H₂ ⇌ 2NH₃)',
      eqBn: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)',
      brokenBonds: [
        { label: 'N≡N ত্রিবন্ধন (N₂)', count: 1, energy: 946 },
        { label: 'H–H একক বন্ধন (3H₂)', count: 3, energy: 436 }
      ],
      formedBonds: [
        { label: 'N–H একক বন্ধন (2NH₃)', count: 6, energy: 391 }
      ]
    }
  };

  const currentPreset = BOND_PRESETS[selectedReactionPreset] || BOND_PRESETS.methane;
  const totalB1 = currentPreset.brokenBonds.reduce((acc, b) => acc + b.count * b.energy, 0);
  const totalB2 = currentPreset.formedBonds.reduce((acc, b) => acc + b.count * b.energy, 0);
  const deltaH = totalB1 - totalB2;

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 bg-slate-950 text-white rounded-2xl border border-rose-500/30 shadow-2xl space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-rose-500/20 text-rose-400 rounded-xl border border-rose-500/40">
              <Zap className="h-5 w-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-rose-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
              তড়িৎ রসায়ন ও রাসায়নিক শক্তি ল্যাব (Electrochemistry Lab)
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            রসায়ন অধ্যায় ৮: ড্যানিয়েল সেল, তড়িৎ লেপন, শুষ্ক কোষ ও বন্ধন শক্তি সিমুলেটর
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('daniell')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-bold transition ${
              activeTab === 'daniell' ? 'bg-rose-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Battery className="h-3.5 w-3.5" />
            <span>ড্যানিয়েল সেল (১.১০ V)</span>
          </button>

          <button
            onClick={() => setActiveTab('electroplating')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-bold transition ${
              activeTab === 'electroplating' ? 'bg-rose-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>তড়িৎ লেপন (চামচে রূপা)</span>
          </button>

          <button
            onClick={() => setActiveTab('drycell')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-bold transition ${
              activeTab === 'drycell' ? 'bg-rose-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>শুষ্ক কোষ (Dry Cell)</span>
          </button>

          <button
            onClick={() => setActiveTab('bondEnergy')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-bold transition ${
              activeTab === 'bondEnergy' ? 'bg-rose-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="h-3.5 w-3.5" />
            <span>বন্ধন শক্তি (ΔH) হিসাব</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. DANIELL CELL SIMULATOR */}
      {/* ========================================================================= */}
      {activeTab === 'daniell' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Visual Canvas (2 Cols) */}
          <div className="lg:col-span-2 p-4 bg-slate-900/90 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-rose-400">ড্যানিয়েল কোষ: স্বতঃস্ফূর্ত বিদ্যুৎ উৎপাদন</span>
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                  cellVoltage > 0 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                }`}>
                  ভোল্টেজ: {cellVoltage.toFixed(2)} V
                </span>
              </div>
            </div>

            {/* Cell Graphical Representation */}
            <div className="my-6 relative flex items-center justify-center">
              <div className="w-full max-w-lg flex items-end justify-between gap-6 px-4">
                {/* Left Beaker: Zinc Anode */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="text-[11px] font-mono font-bold text-slate-300 mb-1">
                    অ্যানোড পাত: Zn(s)
                  </div>
                  {/* Beaker */}
                  <div className="w-full h-44 border-2 border-slate-700 bg-slate-950/70 rounded-b-2xl relative flex items-end justify-center overflow-hidden">
                    {/* Solution */}
                    <div className="w-full h-32 bg-slate-800/60 border-t border-slate-600 flex items-center justify-center">
                      <span className="text-[10px] text-slate-400 font-mono">1.0 M ZnSO₄</span>
                    </div>
                    {/* Zinc Plate */}
                    <div className="absolute top-2 w-8 h-36 bg-slate-400 border border-slate-300 rounded shadow flex flex-col items-center justify-between py-1">
                      <span className="text-[9px] font-mono font-bold text-slate-900">Zn (-)</span>
                      <span className="text-[8px] text-slate-800 font-bold">-{znLoss}g</span>
                    </div>
                  </div>
                  <span className="text-[10.5px] text-rose-300 mt-2 font-mono">Zn ⟶ Zn²⁺ + 2e⁻</span>
                </div>

                {/* Salt Bridge (U-Tube) */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                  {hasSaltBridge ? (
                    <div className="w-24 h-24 border-t-8 border-l-8 border-r-8 border-emerald-400/90 rounded-t-3xl bg-transparent relative flex items-center justify-center">
                      <span className="text-[10px] bg-slate-950 px-2 py-0.5 rounded text-emerald-300 font-bold border border-emerald-500/50 shadow">
                        KCl লবণ সেতু
                      </span>
                    </div>
                  ) : (
                    <div className="p-2 bg-rose-950/90 border border-rose-500 rounded-lg text-center animate-pulse">
                      <ShieldAlert className="h-5 w-5 text-rose-400 mx-auto" />
                      <span className="text-[10px] text-rose-200 font-bold">লবণ সেতু অপসারিত!</span>
                    </div>
                  )}
                </div>

                {/* Voltmeter / Bulb at top */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-950 px-3 py-1 rounded-xl border border-slate-700 shadow-lg z-20">
                  <Gauge className={`h-4 w-4 ${cellVoltage > 0 ? 'text-amber-400 animate-pulse' : 'text-slate-500'}`} />
                  <span className="font-mono font-bold text-sm text-cyan-300">
                    {cellVoltage.toFixed(2)} V
                  </span>
                  <span className={`h-3 w-3 rounded-full ${cellVoltage > 0 ? 'bg-amber-400 shadow-[0_0_10px_#f59e0b]' : 'bg-slate-700'}`} />
                </div>

                {/* Right Beaker: Copper Cathode */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="text-[11px] font-mono font-bold text-amber-300 mb-1">
                    ক্যাথোড পাত: Cu(s)
                  </div>
                  {/* Beaker */}
                  <div className="w-full h-44 border-2 border-slate-700 bg-slate-950/70 rounded-b-2xl relative flex items-end justify-center overflow-hidden">
                    {/* Solution */}
                    <div className="w-full h-32 bg-cyan-950/80 border-t border-cyan-700 flex items-center justify-center">
                      <span className="text-[10px] text-cyan-300 font-mono">1.0 M CuSO₄</span>
                    </div>
                    {/* Copper Plate */}
                    <div className="absolute top-2 w-8 h-36 bg-amber-600 border border-amber-500 rounded shadow flex flex-col items-center justify-between py-1">
                      <span className="text-[9px] font-mono font-bold text-amber-950">Cu (+)</span>
                      <span className="text-[8px] text-amber-200 font-bold">+{cuGain}g</span>
                    </div>
                  </div>
                  <span className="text-[10.5px] text-emerald-300 mt-2 font-mono">Cu²⁺ + 2e⁻ ⟶ Cu</span>
                </div>
              </div>
            </div>

            {/* Electron Flow Banner */}
            <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Activity className="h-4 w-4 text-cyan-400" />
                <span>ইলেকট্রন প্রবাহের দিক: জিংক অ্যানোড (-) ⟶ কপার ক্যাথোড (+)</span>
              </span>
              <span className="font-mono text-amber-400 text-[11px]">
                বিদ্যুৎ প্রবাহ: কপার ⟶ জিংক
              </span>
            </div>
          </div>

          {/* Controls & Board Logic (1 Col) */}
          <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-4">
            <h2 className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
              <Sliders className="h-3.5 w-3.5" />
              <span>কোষের ইন্টারঅ্যাকটিভ নিয়ন্ত্রণ</span>
            </h2>

            {/* Toggle Circuit Switch */}
            <div className="flex items-center justify-between p-2.5 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-300">বহিঃবর্তনী সুইচ (Switch):</span>
              <button
                onClick={() => setIsCircuitClosed(!isCircuitClosed)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  isCircuitClosed ? 'bg-emerald-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                }`}
              >
                {isCircuitClosed ? 'সংযুক্ত (ON)' : 'বিচ্ছিন্ন (OFF)'}
              </button>
            </div>

            {/* Toggle Salt Bridge */}
            <div className="flex items-center justify-between p-2.5 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-300">লবণ সেতু (Salt Bridge):</span>
              <button
                onClick={() => setHasSaltBridge(!hasSaltBridge)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  hasSaltBridge ? 'bg-cyan-500 text-slate-950' : 'bg-rose-500 text-slate-950'
                }`}
              >
                {hasSaltBridge ? 'উপস্থিত' : 'অপসারিত (0V)'}
              </button>
            </div>

            {/* Concentration Sliders */}
            <div className="space-y-2 p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>[Zn²⁺] অ্যানোড ঘনমাত্রা:</span>
                <span className="font-mono text-cyan-400 font-bold">{znConcentration} M</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="2.0"
                step="0.1"
                value={znConcentration}
                onChange={(e) => setZnConcentration(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 h-1.5 cursor-pointer"
              />

              <div className="flex justify-between text-slate-300 pt-2">
                <span>[Cu²⁺] ক্যাথোড ঘনমাত্রা:</span>
                <span className="font-mono text-amber-400 font-bold">{cuConcentration} M</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="2.0"
                step="0.1"
                value={cuConcentration}
                onChange={(e) => setCuConcentration(parseFloat(e.target.value))}
                className="w-full accent-amber-400 h-1.5 cursor-pointer"
              />
            </div>

            {/* Board Secret Box */}
            <div className="p-3 bg-rose-950/30 rounded-xl border border-rose-800/50 text-xs space-y-1">
              <span className="text-rose-400 font-bold block flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5" />
                <span>বোর্ড ঘ-নম্বর সুপার প্রশ্ন:</span>
              </span>
              <p className="text-[11px] text-slate-300">
                লবণ সেতু সরিয়ে নিলে অ্যানোড পাত্রে অতিরিক্ত Zn²⁺ এবং ক্যাথোড পাত্রে অতিরিক্ত SO₄²⁻ চার্জ জমে যায়। ফলে তড়িৎ নিরপেক্ষতা নষ্ট হয়ে তাৎক্ষণিক ভোল্টেজ শূন্য (0.00 V) হয়ে বিদ্যুৎ প্রবাহ বন্ধ হয়।
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. ELECTROPLATING SIMULATOR */}
      {/* ========================================================================= */}
      {activeTab === 'electroplating' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-4 bg-slate-900/90 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
              <span className="font-bold text-amber-400">তড়িৎ লেপন প্রক্রিয়া (Electroplating Chamber)</span>
              <span className="font-mono text-cyan-300">তড়িৎ বিশ্লেষ্য: {metalProps.saltBn}</span>
            </div>

            {/* Plating Bath Graphics */}
            <div className="my-6 p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-around relative">
              {/* Anode: Pure Metal Bar */}
              <div className="flex flex-col items-center">
                <span className="text-[11px] font-mono text-amber-300 mb-1">অ্যানোড (+) খাঁটি ধাতু</span>
                <div
                  className="w-8 h-36 rounded shadow-md border border-slate-500 transition-all"
                  style={{ backgroundColor: metalProps.color }}
                />
                <span className="text-[10px] text-slate-400 mt-2 font-mono">
                  {metalProps.nameBn} পাত
                </span>
              </div>

              {/* Liquid Bath with ions */}
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="text-xs font-mono text-cyan-300 bg-cyan-950/80 px-3 py-1.5 rounded-lg border border-cyan-800/60">
                  {coatingMetal === 'silver' ? 'Ag⁺ আয়ন স্থানান্তর ⟶' : coatingMetal === 'gold' ? 'Au³⁺ আয়ন স্থানান্তর ⟶' : 'Ni²⁺ আয়ন স্থানান্তর ⟶'}
                </div>
                <div className="w-32 bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-300"
                    style={{ width: `${platedProgress}%` }}
                  />
                </div>
                <span className="text-[10.5px] font-mono text-slate-400">প্রলেপ অগ্রগতি: {platedProgress}%</span>
              </div>

              {/* Cathode: Object to be plated */}
              <div className="flex flex-col items-center">
                <span className="text-[11px] font-mono text-cyan-300 mb-1">ক্যাথোড (-) প্রলেপ্য বস্তু</span>
                <div className="w-16 h-36 flex flex-col items-center justify-center p-2 rounded-xl bg-slate-900 border border-slate-700 relative">
                  {targetObject === 'spoon' ? (
                    <div className="w-6 h-28 rounded-full border-2 border-slate-400 flex flex-col items-center justify-end pb-1"
                         style={{ backgroundColor: platedProgress > 10 ? metalProps.color : '#64748b' }}>
                      <span className="text-[8px] font-bold text-slate-950">চামচ</span>
                    </div>
                  ) : targetObject === 'key' ? (
                    <div className="w-8 h-20 rounded border-2 border-slate-400 flex items-center justify-center"
                         style={{ backgroundColor: platedProgress > 10 ? metalProps.color : '#64748b' }}>
                      <span className="text-[8px] font-bold text-slate-950">চাবি</span>
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full border-2 border-slate-400 flex items-center justify-center"
                         style={{ backgroundColor: platedProgress > 10 ? metalProps.color : '#64748b' }}>
                      <span className="text-[8px] font-bold text-slate-950">মুদ্রা</span>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 mt-2 font-mono">লোহার বস্তু</span>
              </div>
            </div>

            {/* Live Faraday Calculation Banner */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono space-y-1">
              <div className="flex justify-between text-slate-300">
                <span>ফ্যারাডের সূত্র: W = (I × t × M) / (z × F)</span>
                <span className="text-emerald-400 font-bold">জমা হওয়া ভর (W) = {depositedMassGrams} গ্রাম</span>
              </div>
              <p className="text-[10px] text-slate-400">
                যেখানে I = {currentAmps} A, t = {totalSeconds} সেকেন্ড, M = {metalProps.M} g/mol, z = {metalProps.z}, F = 96500 C/mol
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-4">
            <h2 className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
              <Sliders className="h-3.5 w-3.5" />
              <span>লেপন উপাদান ও তড়িৎ চালনা</span>
            </h2>

            {/* Object selector */}
            <div className="space-y-1.5 text-xs">
              <span className="text-slate-300">প্রলেপ দেওয়ার বস্তু (ক্যাথোড):</span>
              <div className="grid grid-cols-3 gap-1">
                {(['spoon', 'key', 'coin'] as const).map(obj => (
                  <button
                    key={obj}
                    onClick={() => { setTargetObject(obj); setPlatedProgress(0); }}
                    className={`py-1.5 rounded-lg font-bold border transition ${
                      targetObject === obj
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    {obj === 'spoon' ? 'চামচ' : obj === 'key' ? 'চাবি' : 'মুদ্রা'}
                  </button>
                ))}
              </div>
            </div>

            {/* Metal selector */}
            <div className="space-y-1.5 text-xs">
              <span className="text-slate-300">প্রলেপনকারী ধাতু (অ্যানোড):</span>
              <div className="grid grid-cols-3 gap-1">
                {(['silver', 'gold', 'nickel'] as const).map(met => (
                  <button
                    key={met}
                    onClick={() => { setCoatingMetal(met); setPlatedProgress(0); }}
                    className={`py-1.5 rounded-lg font-bold border transition ${
                      coatingMetal === met
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                        : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    {met === 'silver' ? 'সিলভার' : met === 'gold' ? 'স্বর্ণ' : 'নিকেল'}
                  </button>
                ))}
              </div>
            </div>

            {/* Amps slider */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>বিদ্যুৎ প্রবাহ (Current):</span>
                <span className="font-mono text-amber-400 font-bold">{currentAmps} A</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="5.0"
                step="0.5"
                value={currentAmps}
                onChange={(e) => setCurrentAmps(parseFloat(e.target.value))}
                className="w-full accent-amber-400 h-1.5 cursor-pointer"
              />
            </div>

            {/* Time slider */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>সময়কাল (Time):</span>
                <span className="font-mono text-cyan-400 font-bold">{platingTimeMinutes} মিনিট</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="5"
                value={platingTimeMinutes}
                onChange={(e) => setPlatingTimeMinutes(parseInt(e.target.value, 10))}
                className="w-full accent-cyan-400 h-1.5 cursor-pointer"
              />
            </div>

            {/* Action button */}
            <button
              onClick={() => setIsPlatingActive(!isPlatingActive)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg hover:brightness-110"
            >
              {isPlatingActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span>{isPlatingActive ? 'লেপন সাময়িক বিরতি' : 'তড়িৎ লেপন শুরু করুন'}</span>
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. DRY CELL ANATOMY */}
      {/* ========================================================================= */}
      {activeTab === 'drycell' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 flex flex-col items-center justify-between">
            <span className="text-xs font-bold text-rose-400 self-start border-b border-slate-800 pb-2 w-full">
              শুষ্ক কোষ (Dry Cell) লেয়ার-বাই-লেয়ার ব্যবচ্ছেদ
            </span>

            {/* Interactive cutaway battery */}
            <div className="my-6 relative w-48 flex flex-col items-center cursor-pointer">
              {/* Brass cap */}
              <button
                onClick={() => setSelectedCellPart('cap')}
                className={`w-12 h-6 rounded-t-lg transition border ${
                  selectedCellPart === 'cap' ? 'bg-amber-400 border-white ring-2 ring-amber-300' : 'bg-amber-600 border-amber-500'
                }`}
                title="পিতলের টুপি (+)"
              />
              {/* Outer Zinc cylinder */}
              <div
                onClick={() => setSelectedCellPart('zinc')}
                className={`w-44 h-64 border-2 rounded-b-2xl relative flex flex-col items-center justify-center p-2 transition ${
                  selectedCellPart === 'zinc' ? 'border-cyan-400 bg-slate-800' : 'border-slate-600 bg-slate-900'
                }`}
              >
                {/* Electrolyte paste layer */}
                <div
                  onClick={(e) => { e.stopPropagation(); setSelectedCellPart('paste'); }}
                  className={`w-36 h-52 border rounded-xl flex items-center justify-center p-2 transition ${
                    selectedCellPart === 'paste' ? 'border-amber-400 bg-slate-950' : 'border-slate-700 bg-slate-950/80'
                  }`}
                >
                  {/* Central Carbon rod */}
                  <div
                    onClick={(e) => { e.stopPropagation(); setSelectedCellPart('carbon'); }}
                    className={`w-8 h-44 rounded transition flex items-center justify-center ${
                      selectedCellPart === 'carbon' ? 'bg-blue-500 ring-2 ring-cyan-300' : 'bg-slate-700'
                    }`}
                  >
                    <span className="text-[8px] font-bold text-white [writing-mode:vertical-lr]">কার্বন দণ্ড (+)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 font-mono">
              যেকোনো অংশের ওপর ক্লিক করে বিস্তারিত রাসায়নিক ভূমিকা দেখুন
            </div>
          </div>

          {/* Description Card */}
          <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <h2 className="text-xs font-bold text-cyan-300 border-b border-slate-800 pb-2 flex items-center gap-1.5">
              <Info className="h-4 w-4" />
              <span>নির্বাচিত অংশের রাসায়নিক বিশ্লেষণ</span>
            </h2>

            <div className="my-4 p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
              {selectedCellPart === 'zinc' && (
                <>
                  <span className="text-sm font-bold text-cyan-400 block">১. জিংকের চোঙ — অ্যানোড (-)</span>
                  <p className="text-xs text-slate-300">
                    ব্যাটারির বাইরের ফাঁপা চোঙটি জিংক (Zn) ধাতুর তৈরি। এটি অ্যানোড বা ঋণাত্মক তড়িৎদ্বার হিসেবে কাজ করে।
                  </p>
                  <div className="p-2 bg-slate-900 rounded font-mono text-xs text-cyan-300 border border-slate-800">
                    জারণ বিক্রিয়া: Zn(s) ⟶ Zn²⁺(aq) + 2e⁻
                  </div>
                </>
              )}

              {selectedCellPart === 'carbon' && (
                <>
                  <span className="text-sm font-bold text-blue-400 block">২. কার্বন / গ্রাফাইট দণ্ড — ক্যাথোড (+)</span>
                  <p className="text-xs text-slate-300">
                    চোঙের ঠিক কেন্দ্রে উল্লম্বভাবে থাকা গ্রাফাইট দণ্ডটি ক্যাথোড হিসেবে কাজ করে। এটি বহিঃবর্তনীর ইলেকট্রন গ্রহণ করতে সাহায্য করে।
                  </p>
                  <div className="p-2 bg-slate-900 rounded font-mono text-xs text-blue-300 border border-slate-800">
                    ভূমিকা: পরিবাহী মাধ্যম হিসেবে ইলেকট্রন স্থানান্তর ঘটায়
                  </div>
                </>
              )}

              {selectedCellPart === 'paste' && (
                <>
                  <span className="text-sm font-bold text-amber-400 block">৩. তড়িৎ বিশ্লেষ্য লেই (Paste)</span>
                  <p className="text-xs text-slate-300">
                    কার্বন দণ্ডের চারপাশে MnO₂, C চূর্ণ এবং এর বাইরে NH₄Cl, ZnCl₂ ও স্টার্চের ঘন লেই থাকে।
                  </p>
                  <div className="p-2 bg-slate-900 rounded font-mono text-xs text-amber-300 border border-slate-800">
                    বিজারণ: 2NH₄⁺ + 2MnO₂ + 2e⁻ ⟶ Mn₂O₃ + 2NH₃ + H₂O
                  </div>
                  <span className="text-[10px] text-slate-400 block">
                    MnO₂ উৎপন্ন হাইড্রোজেন গ্যাসকে জারিত করে পোলারাইজেশন রোধ করে।
                  </span>
                </>
              )}

              {selectedCellPart === 'cap' && (
                <>
                  <span className="text-sm font-bold text-emerald-400 block">৪. পিতলের টুপি — ধনাত্মক প্রান্ত (+১.৫ V)</span>
                  <p className="text-xs text-slate-300">
                    কার্বন দণ্ডের মাথায় পিতলের টুপি থাকে যা ব্যাটারির ধনাত্মক সংযোগ নিশ্চিত করে। একটি সাধারণ পেন্সিল ব্যাটারি ১.৫ ভোল্ট বিভব দেয়।
                  </p>
                  <div className="p-2 bg-slate-900 rounded font-mono text-xs text-emerald-300 border border-slate-800">
                    কোষ বিভব = ১.৫০ V (প্রাইমারি অপ্রত্যাবর্তী সেল)
                  </div>
                </>
              )}
            </div>

            <div className="p-2.5 bg-rose-950/40 rounded-xl border border-rose-800/50 text-xs text-rose-200 font-mono text-center">
              প্রাইমারি সেল হওয়ায় এটি একবার ডিসচার্জ হলে বাইরে থেকে পুনরায় চার্জ করা যায় না।
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. BOND ENERGY & ΔH CALCULATOR */}
      {/* ========================================================================= */}
      {activeTab === 'bondEnergy' && (
        <div className="space-y-6">
          {/* Reaction Preset Bar */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-300">বিক্রিয়ার উদাহরণ নির্বাচন করুন:</span>
            {Object.keys(BOND_PRESETS).map(key => (
              <button
                key={key}
                onClick={() => setSelectedReactionPreset(key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                  selectedReactionPreset === key
                    ? 'bg-rose-500 text-slate-950 border-rose-400 shadow-md'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-600'
                }`}
              >
                {BOND_PRESETS[key].titleBn}
              </button>
            ))}
          </div>

          {/* Equation Banner */}
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-center font-mono text-sm sm:text-base text-amber-300 font-bold">
            {currentPreset.eqBn}
          </div>

          {/* Math calculation grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Broken Bonds (B1) */}
            <div className="p-4 bg-slate-900/90 rounded-2xl border border-cyan-800/50 space-y-3">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-cyan-400">ধাপ ১: পুরাতন বন্ধন ভাঙার শক্তি (B₁)</span>
                <span className="text-[10px] bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded font-mono">তাপহারী (+)</span>
              </div>
              <div className="space-y-2">
                {currentPreset.brokenBonds.map((b, idx) => (
                  <div key={idx} className="p-2 bg-slate-950 rounded-lg flex justify-between text-xs font-mono">
                    <span className="text-slate-300">{b.label} [{b.count}টি]</span>
                    <span className="text-cyan-300 font-bold">{b.count} × {b.energy} = {b.count * b.energy} kJ</span>
                  </div>
                ))}
              </div>
              <div className="p-2.5 bg-cyan-950/60 rounded-xl text-center font-mono font-bold text-cyan-300 text-xs border border-cyan-800/50">
                মোট বন্ধন ভাঙার শক্তি (B₁) = {totalB1} kJ/mol
              </div>
            </div>

            {/* Formed Bonds (B2) */}
            <div className="p-4 bg-slate-900/90 rounded-2xl border border-rose-800/50 space-y-3">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <span className="text-xs font-bold text-rose-400">ধাপ ২: নতুন বন্ধন গড়ার শক্তি (B₂)</span>
                <span className="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded font-mono">তাপোৎপাদী (-)</span>
              </div>
              <div className="space-y-2">
                {currentPreset.formedBonds.map((b, idx) => (
                  <div key={idx} className="p-2 bg-slate-950 rounded-lg flex justify-between text-xs font-mono">
                    <span className="text-slate-300">{b.label} [{b.count}টি]</span>
                    <span className="text-rose-300 font-bold">{b.count} × {b.energy} = {b.count * b.energy} kJ</span>
                  </div>
                ))}
              </div>
              <div className="p-2.5 bg-rose-950/60 rounded-xl text-center font-mono font-bold text-rose-300 text-xs border border-rose-800/50">
                মোট বন্ধন গড়ার শক্তি (B₂) = {totalB2} kJ/mol
              </div>
            </div>
          </div>

          {/* Enthalpy deltaH Result */}
          <div className="p-4 bg-slate-900 rounded-2xl border border-amber-500/40 text-center space-y-2">
            <span className="text-xs text-slate-400 font-mono">ধাপ ৩: এনথালপির পরিবর্তন (ΔH) হিসাব</span>
            <div className="text-lg sm:text-xl font-mono font-bold text-white">
              ΔH = B₁ - B₂ = {totalB1} - {totalB2} ={' '}
              <span className={deltaH < 0 ? 'text-rose-400' : 'text-cyan-400'}>
                {deltaH} kJ/mol
              </span>
            </div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold font-mono bg-slate-950 border border-slate-700">
              {deltaH < 0 ? '🔥 বিক্রিয়াটি তাপোৎপাদী (Exothermic — তাপ নির্গত হয়)' : '❄️ বিক্রিয়াটি তাপহারী (Endothermic — তাপ শোষিত হয়)'}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
