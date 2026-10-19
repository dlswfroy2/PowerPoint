/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  FlaskConical,
  Droplets,
  RotateCcw,
  Sparkles,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Beaker,
  Thermometer,
  ShieldCheck,
  Scale
} from 'lucide-react';

interface Substance {
  id: string;
  nameBn: string;
  nameEn: string;
  formula: string;
  type: 'acid' | 'base' | 'salt' | 'water';
  strength: 'strong' | 'weak' | 'neutral';
  ph: number;
  colorHex: string;
  litmusRed: string;
  litmusBlue: string;
  phenolphthalein: string; // 'বর্ণহীন' or 'গোলাপি'
  methylOrange: string; // 'লাল' or 'হলুদ'
  universalIndicatorColor: string;
  hConcentration: string;
  description: string;
}

const SUBSTANCES: Substance[] = [
  {
    id: 'hcl',
    nameBn: 'লঘু হাইড্রোক্লোরিক এসিড',
    nameEn: 'Hydrochloric Acid',
    formula: 'HCl',
    type: 'acid',
    strength: 'strong',
    ph: 1.0,
    colorHex: '#ef4444',
    litmusRed: 'red',
    litmusBlue: 'red',
    phenolphthalein: 'বর্ণহীন (Colorless)',
    methylOrange: 'গাঢ় লাল (Red)',
    universalIndicatorColor: '#dc2626',
    hConcentration: '1.0 × 10⁻¹ M',
    description: 'তীব্র খনিজ এসিড। জলীয় দ্রবণে ১০০% বিয়োজিত হয়ে প্রচুর H⁺ আয়ন দেয়। পাকস্থলীতে খাদ্য পরিপাকে নিঃসৃত হয়।'
  },
  {
    id: 'lemon',
    nameBn: 'লেবুর রস (সাইট্রিক এসিড)',
    nameEn: 'Lemon Juice (Citric Acid)',
    formula: 'C₆H₈O₇',
    type: 'acid',
    strength: 'weak',
    ph: 2.4,
    colorHex: '#f97316',
    litmusRed: 'red',
    litmusBlue: 'red',
    phenolphthalein: 'বর্ণহীন (Colorless)',
    methylOrange: 'গোলাপি লাল',
    universalIndicatorColor: '#ea580c',
    hConcentration: '4.0 × 10⁻³ M',
    description: 'প্রাকৃতিক জৈব দুর্বল এসিড। আংশিক বিয়োজিত হয়, ভিটামিন C ও টক স্বাদের সমৃদ্ধ উৎস।'
  },
  {
    id: 'vinegar',
    nameBn: 'ভিনেগার / সিরকা (অ্যাসিটিক এসিড)',
    nameEn: 'Vinegar (CH₃COOH 5%)',
    formula: 'CH₃COOH',
    type: 'acid',
    strength: 'weak',
    ph: 2.9,
    colorHex: '#fb923c',
    litmusRed: 'red',
    litmusBlue: 'red',
    phenolphthalein: 'বর্ণহীন (Colorless)',
    methylOrange: 'কমলা লাল',
    universalIndicatorColor: '#f97316',
    hConcentration: '1.3 × 10⁻³ M',
    description: 'ইথানয়িক এসিডের ৬-১০% জলীয় দ্রবণ। খাদ্য সংরক্ষণে ও আচার তৈরিতে বহুল ব্যবহৃত মৃদু এসিড।'
  },
  {
    id: 'acidrain',
    nameBn: 'এসিড বৃষ্টি (Acid Rain)',
    nameEn: 'Acid Rain (SO₂ & NOx)',
    formula: 'H₂SO₄ + HNO₃',
    type: 'acid',
    strength: 'weak',
    ph: 4.5,
    colorHex: '#eab308',
    litmusRed: 'red',
    litmusBlue: 'red',
    phenolphthalein: 'বর্ণহীন (Colorless)',
    methylOrange: 'কমলা',
    universalIndicatorColor: '#eab308',
    hConcentration: '3.2 × 10⁻⁵ M',
    description: 'শিল্পকারখানার SO₂ ও যানবাহনের নাইট্রোজেন অক্সাইড বৃষ্টির পানির সাথে মিশে গঠিত পরিবেশবিধ্বংসী এসিড।'
  },
  {
    id: 'milk',
    nameBn: 'খাঁটি দুধ (মৃদু অম্লীয়)',
    nameEn: 'Fresh Milk',
    formula: 'Lactic Acid Mixture',
    type: 'acid',
    strength: 'weak',
    ph: 6.6,
    colorHex: '#84cc16',
    litmusRed: 'red',
    litmusBlue: 'নীল (প্রায় অপরিবর্তিত)',
    phenolphthalein: 'বর্ণহীন (Colorless)',
    methylOrange: 'হলুদ',
    universalIndicatorColor: '#84cc16',
    hConcentration: '2.5 × 10⁻⁷ M',
    description: 'ল্যাকটোজ ও ল্যাকটিক এসিড সমৃদ্ধ পুষ্টিকর পানীয়। মৃদু অম্লীয় বৈশিষ্ট্যের কাছাকাছি।'
  },
  {
    id: 'purewater',
    nameBn: 'বিশুদ্ধ পাতিত পানি (২৫°C)',
    nameEn: 'Pure Distilled Water',
    formula: 'H₂O',
    type: 'water',
    strength: 'neutral',
    ph: 7.0,
    colorHex: '#22c55e',
    litmusRed: 'লাল (অপরিবর্তিত)',
    litmusBlue: 'নীল (অপরিবর্তিত)',
    phenolphthalein: 'বর্ণহীন (Colorless)',
    methylOrange: 'হলুদ',
    universalIndicatorColor: '#22c55e',
    hConcentration: '1.0 × 10⁻⁷ M',
    description: 'সম্পূর্ণ নিরপেক্ষ তরল। দ্রবণে [H⁺] = [OH⁻] = 1.0 × 10⁻⁷ mol/L।'
  },
  {
    id: 'blood',
    nameBn: 'মানবদেহের সুস্থ রক্ত',
    nameEn: 'Human Blood',
    formula: 'HCO₃⁻/H₂CO₃ Buffer',
    type: 'base',
    strength: 'weak',
    ph: 7.4,
    colorHex: '#14b8a6',
    litmusRed: 'মৃদু নীল',
    litmusBlue: 'নীল',
    phenolphthalein: 'বর্ণহীন (Colorless)',
    methylOrange: 'হলুদ',
    universalIndicatorColor: '#0d9488',
    hConcentration: '4.0 × 10⁻⁸ M',
    description: 'মৃদু ক্ষারীয় সংবেদনশীল জৈব তরল। বাফার দ্রবণ দ্বারা নিয়ন্ত্রিত যাতে সামান্য অম্ল-ক্ষার পরিবর্তনেও pH অপরিবর্তিত থাকে।'
  },
  {
    id: 'baking',
    nameBn: 'বেকিং সোডা দ্রবণ',
    nameEn: 'Baking Soda Solution',
    formula: 'NaHCO₃',
    type: 'base',
    strength: 'weak',
    ph: 8.4,
    colorHex: '#06b6d4',
    litmusRed: 'নীল (Blue)',
    litmusBlue: 'নীল',
    phenolphthalein: 'হালকা গোলাপি',
    methylOrange: 'হলুদ',
    universalIndicatorColor: '#0284c7',
    hConcentration: '4.0 × 10⁻⁹ M',
    description: 'দুর্বল ক্ষারীয় লবণ দ্রবণ। কেক-বিস্কুট ফোলাতে এবং ল্যাবে এসিড স্পিল নিউট্রালাইজেশনে ব্যবহৃত হয়।'
  },
  {
    id: 'antacid',
    nameBn: 'মিল্ক অব ম্যাগনেসিয়া (অ্যান্টাসিড)',
    nameEn: 'Milk of Magnesia',
    formula: 'Mg(OH)₂',
    type: 'base',
    strength: 'weak',
    ph: 10.5,
    colorHex: '#3b82f6',
    litmusRed: 'গাঢ় নীল (Blue)',
    litmusBlue: 'নীল',
    phenolphthalein: 'উজ্জ্বল গোলাপি',
    methylOrange: 'হলুদ',
    universalIndicatorColor: '#2563eb',
    hConcentration: '3.1 × 10⁻¹¹ M',
    description: 'পাকস্থলীর অতিরিক্ত এসিডিটি প্রশমিত করতে ব্যবহৃত নিরাপদ ক্ষারকীয় সাসপেনশন।'
  },
  {
    id: 'ammonia',
    nameBn: 'গৃহস্থালি অ্যামোনিয়া দ্রবণ',
    nameEn: 'Aqueous Ammonia Cleaner',
    formula: 'NH₄OH / NH₃(aq)',
    type: 'base',
    strength: 'weak',
    ph: 11.5,
    colorHex: '#6366f1',
    litmusRed: 'গাঢ় নীল (Blue)',
    litmusBlue: 'নীল',
    phenolphthalein: 'তীব্র গোলাপি',
    methylOrange: 'হলুদ',
    universalIndicatorColor: '#4f46e5',
    hConcentration: '3.2 × 10⁻¹² M',
    description: 'কাচ ও তেল চিটচিটে ময়লা পরিষ্কারের ক্ষারীয় পরিষ্কারক।'
  },
  {
    id: 'naoh',
    nameBn: 'লঘু সোডিয়াম হাইড্রোক্সাইড (কস্টিক সোডা)',
    nameEn: 'Sodium Hydroxide (Caustic Soda)',
    formula: 'NaOH (0.1 M)',
    type: 'base',
    strength: 'strong',
    ph: 13.0,
    colorHex: '#a855f7',
    litmusRed: 'গাঢ় নীল (Deep Blue)',
    litmusBlue: 'নীল',
    phenolphthalein: 'উজ্জ্বল ম্যাজেন্টা / গোলাপি',
    methylOrange: 'হলুদ',
    universalIndicatorColor: '#9333ea',
    hConcentration: '1.0 × 10⁻¹³ M',
    description: 'চরম তীব্র ক্ষার। ত্বক ও কাপড় দ্রুত ক্ষয় করে। সাবান তৈরির মূল কাঁচামাল।'
  }
];

export const AcidBaseLab: React.FC<{ initialTab?: 'phMeter' | 'titration' | 'hydrolysis' }> = ({
  initialTab = 'phMeter'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'phMeter' | 'titration' | 'hydrolysis'>(initialTab);

  // pH Meter State
  const [selectedSubstanceId, setSelectedSubstanceId] = useState<string>('lemon');
  const [testedLitmus, setTestedLitmus] = useState<'red' | 'blue' | null>(null);
  const [testedIndicator, setTestedIndicator] = useState<'universal' | 'phenolphthalein' | 'methylOrange' | null>(null);

  // Titration Simulation State
  const [titrantVolume, setTitrantVolume] = useState<number>(0); // 0 to 50 mL
  const [analyteConcentration] = useState<number>(0.1); // 0.1 M HCl, 25 mL
  const analyteVolume = 25; // 25 mL
  const titrantMolarity = 0.1; // 0.1 M NaOH
  // Equivalence point is at 25 mL
  const [titrationIndicator, setTitrationIndicator] = useState<'phenolphthalein' | 'methylOrange'>('phenolphthalein');

  // Salt Hydrolysis State
  const [selectedSalt, setSelectedSalt] = useState<'nacl' | 'nh4cl' | 'na2co3' | 'ch3coona'>('nh4cl');

  const currentSubstance = SUBSTANCES.find(s => s.id === selectedSubstanceId) || SUBSTANCES[0];

  // Dynamic titration calculations
  const calculateTitrationState = (vol: number) => {
    // mmoles of HCl initially = 25 * 0.1 = 2.5 mmol
    // mmoles of NaOH added = vol * 0.1
    const totalVolume = analyteVolume + vol;
    const initialAcidMmol = analyteVolume * analyteConcentration;
    const addedBaseMmol = vol * titrantMolarity;

    if (vol < 25) {
      const remainingAcidMmol = initialAcidMmol - addedBaseMmol;
      const hConc = remainingAcidMmol / totalVolume;
      const ph = Math.max(1, -Math.log10(hConc));
      return {
        ph: Number(ph.toFixed(2)),
        color: titrationIndicator === 'phenolphthalein' ? 'bg-transparent border-slate-700' : 'bg-rose-500/30 border-rose-500',
        status: 'প্রশমিত হয়নি (অম্লীয়)',
        isEquivalence: false
      };
    } else if (Math.abs(vol - 25) < 0.2) {
      return {
        ph: 7.0,
        color: titrationIndicator === 'phenolphthalein' ? 'bg-pink-400/40 border-pink-400' : 'bg-yellow-400/30 border-yellow-400',
        status: 'প্রশমন সমাপ্তি বিন্দু (Equivalence Point)',
        isEquivalence: true
      };
    } else {
      const excessBaseMmol = addedBaseMmol - initialAcidMmol;
      const ohConc = excessBaseMmol / totalVolume;
      const pOh = -Math.log10(ohConc);
      const ph = Math.min(13, 14 - pOh);
      return {
        ph: Number(ph.toFixed(2)),
        color: titrationIndicator === 'phenolphthalein' ? 'bg-pink-500/80 border-pink-500' : 'bg-amber-400/50 border-amber-400',
        status: 'অতিরিক্ত ক্ষারীয় (Over-titrated)',
        isEquivalence: false
      };
    }
  };

  const titrationState = calculateTitrationState(titrantVolume);

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-6 text-slate-100">
      {/* Lab Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-400 border border-rose-500/30">
              রসায়ন অধ্যায় ৯: অ্যাসিড ও ক্ষারক ল্যাব
            </span>
            <span className="text-xs text-slate-400">ইন্টারেক্টিভ সিমুলেটর</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <FlaskConical className="h-7 w-7 text-rose-400" />
            অ্যাসিড-ক্ষারক ও pH স্কেল ভার্চুয়াল ল্যাবরেটরি
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            ডিজিটাল pH মিটার, লিটমাস ও সার্বজনীন নির্দেশক পরীক্ষা, এসিড-ক্ষার টাইট্রেশন এবং লবণের আর্দ্রবিশ্লেষণ প্রক্রিয়া অন্বেষণ করুন।
          </p>
        </div>

        {/* Sub-tab Navigation */}
        <div className="flex items-center bg-slate-900 p-1.5 rounded-xl border border-slate-800 shrink-0 gap-1 overflow-x-auto">
          <button
            onClick={() => setActiveSubTab('phMeter')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition ${
              activeSubTab === 'phMeter'
                ? 'bg-rose-500 text-slate-950 shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Thermometer className="h-4 w-4" />
            <span>pH মিটার ও নির্দেশক</span>
          </button>

          <button
            onClick={() => setActiveSubTab('titration')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition ${
              activeSubTab === 'titration'
                ? 'bg-rose-500 text-slate-950 shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Droplets className="h-4 w-4" />
            <span>অ্যাসিড-ক্ষার টাইট্রেশন</span>
          </button>

          <button
            onClick={() => setActiveSubTab('hydrolysis')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition ${
              activeSubTab === 'hydrolysis'
                ? 'bg-rose-500 text-slate-950 shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Scale className="h-4 w-4" />
            <span>লবণের আর্দ্রবিশ্লেষণ</span>
          </button>
        </div>
      </div>

      {/* TAB 1: pH METER & INDICATORS */}
      {activeSubTab === 'phMeter' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Substance Selector */}
          <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl flex flex-col">
            <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Beaker className="h-5 w-5 text-rose-400" />
              নমুনা দ্রবণ নির্বাচন করুন
            </h2>
            <p className="text-xs text-slate-400 mb-4">
              দৈনন্দিন জীবন ও রসায়নাগারের বিভিন্ন অম্লীয়, নিরপেক্ষ ও ক্ষারীয় দ্রবণ পরীক্ষা করে pH ও বর্ণ পরিবর্তন দেখুন:
            </p>

            <div className="space-y-2 overflow-y-auto max-h-[460px] pr-1">
              {SUBSTANCES.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedSubstanceId(item.id);
                    setTestedLitmus(null);
                    setTestedIndicator(null);
                  }}
                  className={`w-full text-left p-3 rounded-xl border transition flex items-center justify-between ${
                    selectedSubstanceId === item.id
                      ? 'border-rose-500 bg-rose-500/10 shadow-md'
                      : 'border-slate-800 bg-slate-950/60 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
                      style={{ backgroundColor: item.colorHex }}
                    />
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-white">
                        {item.nameBn}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {item.formula} • {item.nameEn}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold px-2 py-0.5 rounded-md bg-slate-800 text-rose-300">
                    pH {item.ph}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Interactive pH Display, Litmus & Indicators */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Top Card: Digital pH Meter & Solution Flask */}
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Visual Beaker */}
                <div className="flex flex-col items-center justify-center p-6 bg-slate-950 rounded-xl border border-slate-800 relative min-h-[220px]">
                  <div className="w-32 h-44 rounded-b-3xl border-4 border-slate-600 border-t-0 relative overflow-hidden flex flex-col justify-end p-2 bg-slate-900/40 shadow-inner">
                    {/* Liquid Level */}
                    <div
                      className="w-full rounded-b-2xl transition-all duration-700 relative overflow-hidden flex items-center justify-center"
                      style={{
                        height: '75%',
                        backgroundColor:
                          testedIndicator === 'universal'
                            ? currentSubstance.universalIndicatorColor
                            : testedIndicator === 'phenolphthalein'
                            ? currentSubstance.phenolphthalein.includes('গোলাপি')
                              ? '#ec4899'
                              : 'rgba(255, 255, 255, 0.15)'
                            : testedIndicator === 'methylOrange'
                            ? currentSubstance.methylOrange.includes('লাল')
                              ? '#ef4444'
                              : '#eab308'
                            : currentSubstance.colorHex,
                        opacity: 0.85
                      }}
                    >
                      <div className="text-[11px] font-bold text-white/90 text-center px-1 drop-shadow">
                        {currentSubstance.formula}
                      </div>
                    </div>

                    {/* Digital Electrode Probe dipped into liquid */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-28 bg-gradient-to-b from-slate-400 to-slate-200 border border-slate-600 rounded-b shadow-md flex items-end justify-center">
                      <div className="w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-60" />
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="text-xs font-semibold text-slate-300">
                      নমুনা: {currentSubstance.nameBn}
                    </span>
                  </div>
                </div>

                {/* Digital Meter Screen */}
                <div className="bg-slate-950 rounded-xl border border-slate-800 p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-cyan-400" />
                      ডিজিটাল pH মিটার রিডিং
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      CALIBRATED 25°C
                    </span>
                  </div>

                  <div className="my-5 text-center">
                    <div className="text-5xl sm:text-6xl font-black tracking-tight text-white font-mono drop-shadow">
                      {currentSubstance.ph.toFixed(2)}
                    </div>
                    <div className="mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                      প্রকৃতি:{' '}
                      <span
                        className={
                          currentSubstance.ph < 7
                            ? 'text-rose-400 font-extrabold'
                            : currentSubstance.ph > 7
                            ? 'text-cyan-400 font-extrabold'
                            : 'text-emerald-400 font-extrabold'
                        }
                      >
                        {currentSubstance.ph < 7
                          ? 'অম্লীয় (Acidic)'
                          : currentSubstance.ph > 7
                          ? 'ক্ষারীয় (Basic)'
                          : 'নিরপেক্ষ (Neutral)'}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs pt-3 border-t border-slate-800 text-slate-300">
                    <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">[H⁺] মোলার ঘনমাত্রা:</span>
                      <span className="font-mono font-bold text-rose-300 text-xs">
                        {currentSubstance.hConcentration}
                      </span>
                    </div>
                    <div className="bg-slate-900 p-2 rounded-lg border border-slate-800">
                      <span className="text-[10px] text-slate-400 block">pOH মান (14 - pH):</span>
                      <span className="font-mono font-bold text-cyan-300 text-xs">
                        {(14 - currentSubstance.ph).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* pH Color Scale Spectrum */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <div className="flex justify-between items-center text-xs font-bold text-slate-400 mb-2">
                  <span className="text-rose-400">০ (তীব্র অম্লীয়)</span>
                  <span className="text-emerald-400">৭ (নিরপেক্ষ বিশুদ্ধ পানি)</span>
                  <span className="text-purple-400">১৪ (তীব্র ক্ষারীয়)</span>
                </div>
                <div className="h-4 rounded-full w-full bg-gradient-to-r from-red-600 via-yellow-400 via-green-500 via-blue-500 to-purple-700 relative shadow-inner">
                  {/* Current Position Marker */}
                  <div
                    className="absolute -top-1 w-6 h-6 rounded-full bg-white border-2 border-slate-950 shadow-xl flex items-center justify-center -translate-x-1/2 transition-all duration-500"
                    style={{ left: `${(currentSubstance.ph / 14) * 100}%` }}
                  >
                    <span className="w-2 h-2 rounded-full bg-slate-950" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card: Litmus & Chemical Indicators Test */}
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Layers className="h-4 w-4 text-rose-400" />
                নির্দেশক ও লিটমাস পরীক্ষা সিমুলেশন
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                বোতামগুলোতে ক্লিক করে দেখুন এই দ্রবণে লিটমাস পেপার বা ল্যাবরেটরি নির্দেশক ডোবালে কী বর্ণ ধারণ করে:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Red Litmus Test */}
                <button
                  onClick={() => setTestedLitmus('red')}
                  className="p-3 rounded-xl border border-slate-800 bg-slate-950 hover:border-rose-500/60 transition text-left"
                >
                  <span className="text-[11px] font-bold text-rose-400 block mb-1">লাল লিটমাস টেস্ট</span>
                  <div
                    className={`h-7 rounded flex items-center justify-center text-xs font-bold transition ${
                      testedLitmus === 'red'
                        ? currentSubstance.litmusRed.includes('নীল') || currentSubstance.litmusRed === 'blue'
                          ? 'bg-blue-600 text-white'
                          : 'bg-red-600 text-white'
                        : 'bg-red-500/30 text-rose-300 border border-red-500/40'
                    }`}
                  >
                    {testedLitmus === 'red'
                      ? currentSubstance.litmusRed.includes('নীল') || currentSubstance.litmusRed === 'blue'
                        ? 'নীল হয়েছে!'
                        : 'লাল (অপরিবর্তিত)'
                      : 'ক্লিক করুন'}
                  </div>
                </button>

                {/* Blue Litmus Test */}
                <button
                  onClick={() => setTestedLitmus('blue')}
                  className="p-3 rounded-xl border border-slate-800 bg-slate-950 hover:border-blue-500/60 transition text-left"
                >
                  <span className="text-[11px] font-bold text-blue-400 block mb-1">নীল লিটমাস টেস্ট</span>
                  <div
                    className={`h-7 rounded flex items-center justify-center text-xs font-bold transition ${
                      testedLitmus === 'blue'
                        ? currentSubstance.litmusBlue.includes('লাল') || currentSubstance.litmusBlue === 'red'
                          ? 'bg-red-600 text-white'
                          : 'bg-blue-600 text-white'
                        : 'bg-blue-500/30 text-blue-300 border border-blue-500/40'
                    }`}
                  >
                    {testedLitmus === 'blue'
                      ? currentSubstance.litmusBlue.includes('লাল') || currentSubstance.litmusBlue === 'red'
                        ? 'লাল হয়েছে!'
                        : 'নীল (অপরিবর্তিত)'
                      : 'ক্লিক করুন'}
                  </div>
                </button>

                {/* Phenolphthalein Test */}
                <button
                  onClick={() => setTestedIndicator('phenolphthalein')}
                  className="p-3 rounded-xl border border-slate-800 bg-slate-950 hover:border-pink-500/60 transition text-left"
                >
                  <span className="text-[11px] font-bold text-pink-400 block mb-1">ফেনলফথ্যালিন</span>
                  <div
                    className={`h-7 rounded flex items-center justify-center text-xs font-bold transition ${
                      testedIndicator === 'phenolphthalein'
                        ? currentSubstance.phenolphthalein.includes('গোলাপি')
                          ? 'bg-pink-600 text-white'
                          : 'bg-slate-700 text-slate-300'
                        : 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
                    }`}
                  >
                    {testedIndicator === 'phenolphthalein'
                      ? currentSubstance.phenolphthalein
                      : 'পরীক্ষা করুন'}
                  </div>
                </button>

                {/* Universal Indicator */}
                <button
                  onClick={() => setTestedIndicator('universal')}
                  className="p-3 rounded-xl border border-slate-800 bg-slate-950 hover:border-emerald-500/60 transition text-left"
                >
                  <span className="text-[11px] font-bold text-emerald-400 block mb-1">সার্বজনীন নির্দেশক</span>
                  <div
                    className="h-7 rounded flex items-center justify-center text-xs font-bold transition"
                    style={{
                      backgroundColor:
                        testedIndicator === 'universal'
                          ? currentSubstance.universalIndicatorColor
                          : 'rgba(16, 185, 129, 0.2)',
                      color: testedIndicator === 'universal' ? '#ffffff' : '#6ee7b7'
                    }}
                  >
                    {testedIndicator === 'universal' ? `বর্ণালী pH ${currentSubstance.ph}` : 'পরীক্ষা করুন'}
                  </div>
                </button>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">পর্যবেক্ষণ সারাংশ: </strong>
                  {currentSubstance.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: ACID-BASE TITRATION SIMULATOR */}
      {activeSubTab === 'titration' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls & Apparatus View */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div>
                  <h2 className="text-base font-bold text-white flex items-center gap-2">
                    <Droplets className="h-5 w-5 text-rose-400" />
                    ব্যুরেট ও কনিকেল ফ্লাস্ক টাইট্রেশন সেটআপ
                  </h2>
                  <span className="text-xs text-slate-400">
                    ২৫ mL 0.1 M HCl দ্রবণকে 0.1 M NaOH দ্রবণ দ্বারা প্রশমন
                  </span>
                </div>
                <button
                  onClick={() => setTitrantVolume(0)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-semibold transition"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  রিসেট
                </button>
              </div>

              {/* Titration Visual Simulation */}
              <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 flex items-center justify-center gap-8">
                {/* Burette Column */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-slate-400 mb-1">
                    ব্যুরেট (0.1 M NaOH)
                  </span>
                  <div className="w-8 h-48 bg-slate-900 border-2 border-slate-600 rounded-t relative overflow-hidden flex flex-col justify-end">
                    <div
                      className="w-full bg-cyan-500/40 transition-all duration-300"
                      style={{ height: `${Math.max(0, 100 - (titrantVolume / 50) * 100)}%` }}
                    />
                    <div className="absolute top-1 left-1 text-[9px] font-mono text-slate-400">
                      {(50 - titrantVolume).toFixed(1)} mL
                    </div>
                  </div>
                  {/* Stopcock valve */}
                  <div className="w-4 h-3 bg-amber-500 rounded-sm mt-0.5" />
                  <div className="w-1 h-6 bg-slate-400" />
                </div>

                {/* Drop animation */}
                <div className="flex flex-col items-center self-end mb-4">
                  <span className="text-[10px] font-semibold text-rose-400 mb-1">
                    যোগ করা ক্ষার: {titrantVolume.toFixed(1)} mL
                  </span>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce mb-2" />
                </div>

                {/* Conical Flask */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold text-slate-400 mb-1">
                    কনিকেল ফ্লাস্ক (২৫ mL HCl)
                  </span>
                  <div
                    className={`w-28 h-32 border-4 border-slate-600 rounded-b-3xl relative overflow-hidden flex flex-col justify-end p-2 transition-all duration-500 ${titrationState.color}`}
                  >
                    <div className="text-center font-bold text-xs text-white drop-shadow">
                      pH {titrationState.ph}
                    </div>
                  </div>
                </div>
              </div>

              {/* Titrant Volume Slider */}
              <div className="mt-6">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                  <span>ব্যুরেটের স্টপকক খুলে NaOH যোগ করুন:</span>
                  <span className="text-rose-400 font-mono text-sm">{titrantVolume.toFixed(1)} mL</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="0.5"
                  value={titrantVolume}
                  onChange={(e) => setTitrantVolume(parseFloat(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>০ mL (শুরু)</span>
                  <span className="text-amber-400 font-bold">২৫ mL (প্রশমন বিন্দু)</span>
                  <span>৫০ mL (অতিরিক্ত ক্ষার)</span>
                </div>
              </div>

              {/* Quick Step Buttons */}
              <div className="grid grid-cols-4 gap-2 mt-4">
                <button
                  onClick={() => setTitrantVolume(15)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                >
                  +১৫ mL
                </button>
                <button
                  onClick={() => setTitrantVolume(24.5)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                >
                  +২৪.৫ mL (কাছাকাছি)
                </button>
                <button
                  onClick={() => setTitrantVolume(25.0)}
                  className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold"
                >
                  ২৫.০ mL (সমাপ্তি বিন্দু)
                </button>
                <button
                  onClick={() => setTitrantVolume(35)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
                >
                  +৩৫ mL
                </button>
              </div>
            </div>

            {/* Indicator Selector */}
            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-bold">ব্যবহৃত নির্দেশক:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setTitrationIndicator('phenolphthalein')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    titrationIndicator === 'phenolphthalein'
                      ? 'bg-pink-500 text-white'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  ফেনলফথ্যালিন (গোলাপি ⟶ বর্ণহীন)
                </button>
                <button
                  onClick={() => setTitrationIndicator('methylOrange')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    titrationIndicator === 'methylOrange'
                      ? 'bg-amber-500 text-slate-950 font-extrabold'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  মিথাইল অরেঞ্জ (লাল ⟶ হলুদ)
                </button>
              </div>
            </div>
          </div>

          {/* Right: Titration Curve & Mathematical Analysis */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-400" />
                টাইট্রেশন রেখাচিত্র ও প্রশমন হিসাব (Mathematical Model)
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                তীব্র এসিড (HCl) ও তীব্র ক্ষারের (NaOH) প্রশমনে ২৪ থেকে ২৬ mL যোগের মুহূর্তে pH ৩ থেকে ১১ পর্যন্ত উল্লম্ফন প্রদর্শন করে।
              </p>

              {/* Mathematical Equation Card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-5">
                <div className="text-xs font-bold text-cyan-400 mb-1">প্রশমন সমীকরণ:</div>
                <div className="font-mono text-sm text-white mb-2">
                  HCl(aq) + NaOH(aq) ⟶ NaCl(aq) + H₂O(l) + ৫৭.৩৪ kJ
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div>
                    • বিক্রিয়ক এসিড: <span className="font-mono text-rose-300">V_A = ২৫ mL, S_A = 0.1 M</span>
                  </div>
                  <div>
                    • ব্যুরেটের ক্ষারক: <span className="font-mono text-cyan-300">V_B = ২৫ mL, S_B = 0.1 M</span>
                  </div>
                  <div>
                    • সূত্র:{' '}
                    <span className="font-mono text-amber-300 font-bold">
                      V_A × S_A = V_B × S_B ⟹ 25 × 0.1 = 25 × 0.1 = 2.5 mmol
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div
                className={`p-4 rounded-xl border text-xs ${
                  titrationState.isEquivalence
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-200'
                    : titrantVolume < 25
                    ? 'bg-rose-500/10 border-rose-500/40 text-rose-200'
                    : 'bg-purple-500/10 border-purple-500/40 text-purple-200'
                }`}
              >
                <div className="font-bold text-sm mb-1 flex items-center gap-2">
                  {titrationState.isEquivalence ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-amber-400" />
                  )}
                  অবস্থা: {titrationState.status}
                </div>
                <div>
                  {titrationState.isEquivalence
                    ? '২৫.০ mL ক্ষার যোগ করার সাথে সাথেই সকল H⁺ এবং OH⁻ পরস্পরকে প্রশমিত করে ফেলেছে। কনিকেল ফ্লাস্কের দ্রবণ সম্পূর্ণ নিরপেক্ষ (pH = 7.00)। এই মুহূর্তে ফেনলফথ্যালিনের প্রথম হালকা স্থায়ী গোলাপি আভা ফুটে ওঠে!'
                    : titrantVolume < 25
                    ? `এখনও ${(25 - titrantVolume).toFixed(1)} mL NaOH যোগ করা বাকি। দ্রবণে এখনও উদ্বৃত্ত H⁺ আয়ন রয়েছে, তাই এটি অম্লীয় (pH = ${titrationState.ph})।`
                    : `প্রশমন বিন্দু অতিক্রম করেছে! দ্রবণে অতিরিক্ত ${(titrantVolume - 25).toFixed(1)} mL NaOH ক্ষার যুক্ত হয়েছে, তাই pH বৃদ্ধি পেয়ে ${titrationState.ph} হয়েছে।`}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300">
              <ShieldCheck className="h-4 w-4 text-cyan-400 inline mr-1.5" />
              <strong>বোর্ড প্রশ্ন টিপ:</strong> তীব্র এসিড ও তীব্র ক্ষারকের টাইট্রেশনে ফেনলফথ্যালিন বা মিথাইল অরেঞ্জ উভয় নির্দেশকই সফলভাবে ব্যবহার করা যায়, কারণ প্রশমন বিন্দুতে pH এর উল্লম্ফন পরিসর (pH 3.5 - 10.5) উভয় নির্দেশকের ক্রিয়াশীল পরিসরকে অন্তর্ভুক্ত করে।
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: SALT HYDROLYSIS (লবণের আর্দ্রবিশ্লেষণ) */}
      {activeSubTab === 'hydrolysis' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 bg-slate-900/90 rounded-2xl border border-slate-800 p-5 shadow-xl">
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Scale className="h-5 w-5 text-rose-400" />
              লবণ নমুনা নির্বাচন করুন
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              সব লবণ নিরপেক্ষ নয়! জলীয় দ্রবণে বিভিন্ন লবণের আর্দ্রবিশ্লেষণ ও pH এর পরিবর্তন পরীক্ষা করুন:
            </p>

            <div className="space-y-2.5">
              <button
                onClick={() => setSelectedSalt('nacl')}
                className={`w-full text-left p-3 rounded-xl border transition ${
                  selectedSalt === 'nacl'
                    ? 'border-emerald-500 bg-emerald-500/10'
                    : 'border-slate-800 bg-slate-950'
                }`}
              >
                <div className="font-bold text-xs sm:text-sm text-white">সোডিয়াম ক্লোরাইড (NaCl)</div>
                <div className="text-[11px] text-slate-400">তীব্র এসিড (HCl) + তীব্র ক্ষারক (NaOH)</div>
                <span className="text-[10px] font-bold px-2 py-0.5 mt-1 inline-block rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  নিরপেক্ষ লবণ (pH = 7.0)
                </span>
              </button>

              <button
                onClick={() => setSelectedSalt('nh4cl')}
                className={`w-full text-left p-3 rounded-xl border transition ${
                  selectedSalt === 'nh4cl'
                    ? 'border-rose-500 bg-rose-500/10'
                    : 'border-slate-800 bg-slate-950'
                }`}
              >
                <div className="font-bold text-xs sm:text-sm text-white">অ্যামোনিয়াম ক্লোরাইড (NH₄Cl)</div>
                <div className="text-[11px] text-slate-400">তীব্র এসিড (HCl) + দুর্বল ক্ষারক (NH₄OH)</div>
                <span className="text-[10px] font-bold px-2 py-0.5 mt-1 inline-block rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                  অম্লীয় লবণ (pH &lt; 7.0)
                </span>
              </button>

              <button
                onClick={() => setSelectedSalt('na2co3')}
                className={`w-full text-left p-3 rounded-xl border transition ${
                  selectedSalt === 'na2co3'
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-slate-800 bg-slate-950'
                }`}
              >
                <div className="font-bold text-xs sm:text-sm text-white">সোডিয়াম কার্বনেট (Na₂CO₃)</div>
                <div className="text-[11px] text-slate-400">দুর্বল এসিড (H₂CO₃) + তীব্র ক্ষারক (NaOH)</div>
                <span className="text-[10px] font-bold px-2 py-0.5 mt-1 inline-block rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  ক্ষারীয় লবণ (pH &gt; 7.0)
                </span>
              </button>

              <button
                onClick={() => setSelectedSalt('ch3coona')}
                className={`w-full text-left p-3 rounded-xl border transition ${
                  selectedSalt === 'ch3coona'
                    ? 'border-cyan-500 bg-cyan-500/10'
                    : 'border-slate-800 bg-slate-950'
                }`}
              >
                <div className="font-bold text-xs sm:text-sm text-white">সোডিয়াম অ্যাসিটেট (CH₃COONa)</div>
                <div className="text-[11px] text-slate-400">দুর্বল এসিড (CH₃COOH) + তীব্র ক্ষার (NaOH)</div>
                <span className="text-[10px] font-bold px-2 py-0.5 mt-1 inline-block rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  ক্ষারীয় লবণ (pH &gt; 7.0)
                </span>
              </button>
            </div>
          </div>

          {/* Explanation Panel */}
          <div className="lg:col-span-8 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl flex flex-col justify-between">
            {selectedSalt === 'nacl' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h4 className="text-base font-bold text-emerald-400">
                    সোডিয়াম ক্লোরাইড (NaCl) — নিরপেক্ষ লবণ
                  </h4>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300">
                    pH = ৭.০ (নিরপেক্ষ)
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-slate-200">
                  NaCl(s) + H₂O(l) ⟶ Na⁺(aq) + Cl⁻(aq)
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Na⁺ তীব্র ক্ষার NaOH থেকে এবং Cl⁻ তীব্র এসিড HCl থেকে এসেছে। এদের কোনোটিই পানির অণুর সাথে আর্দ্রবিশ্লেষণ বিক্রিয়া করে না। ফলে দ্রবণে মুক্ত H⁺ ও OH⁻ এর সংখ্যা সমান থাকে এবং লিটমাস পেপারে কোনো বর্ণ পরিবর্তন হয় না।
                </p>
              </div>
            )}

            {selectedSalt === 'nh4cl' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h4 className="text-base font-bold text-rose-400">
                    অ্যামোনিয়াম ক্লোরাইড (NH₄Cl) — অম্লীয় লবণ
                  </h4>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300">
                    pH ≈ ৫.১ (অম্লীয়)
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-slate-200">
                  NH₄⁺(aq) + H₂O(l) ⇌ NH₄OH(aq) + H⁺(aq)
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  NH₄⁺ হলো দুর্বল ক্ষারক NH₄OH এর অনুবন্ধী অম্ল। এটি পানির সাথে বিক্রিয়া করে মৃদু অবিয়োজিত NH₄OH গঠন করে এবং দ্রবণে মুক্ত H⁺ আয়ন ছড়িয়ে দেয়। ফলে দ্রবণটি অম্লীয় হয় এবং নীল লিটমাসকে লাল করে!
                </p>
              </div>
            )}

            {selectedSalt === 'na2co3' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h4 className="text-base font-bold text-cyan-400">
                    সোডিয়াম কার্বনেট (Na₂CO₃) — ক্ষারীয় লবণ
                  </h4>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300">
                    pH ≈ ১১.২ (তীব্র ক্ষারীয়)
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-slate-200">
                  CO₃²⁻(aq) + 2H₂O(l) ⇌ H₂CO₃(aq) + 2OH⁻(aq)
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  কার্বনেট আয়ন (CO₃²⁻) দুর্বল এসিড H₂CO₃ এর অনুবন্ধী ক্ষারক। পানির সাথে বিক্রিয়ায় এটি অবিয়োজিত H₂CO₃ অণু বাঁধে এবং দ্রবণে প্রচুর মুক্ত OH⁻ আয়ন মুক্ত করে। ফলে কাপড় কাঁচা সোডার জলীয় দ্রবণ তীব্র ক্ষারীয় হয়ে লাল লিটমাসকে নীল করে।
                </p>
              </div>
            )}

            {selectedSalt === 'ch3coona' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h4 className="text-base font-bold text-cyan-400">
                    সোডিয়াম অ্যাসিটেট (CH₃COONa) — ক্ষারীয় লবণ
                  </h4>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300">
                    pH ≈ ৮.৮ (ক্ষারীয়)
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-slate-200">
                  CH₃COO⁻(aq) + H₂O(l) ⇌ CH₃COOH(aq) + OH⁻(aq)
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  অ্যাসিটেট আয়ন (CH₃COO⁻) পানির প্রোটন (H⁺) গ্রহণ করে মৃদু অবিয়োজিত অ্যাসিটিক এসিডে পরিণত হয়, যার ফলে দ্রবণে মুক্ত OH⁻ আয়নের আধিক্য ঘটে এবং দ্রবণ মৃদু ক্ষারীয় ধর্ম লাভ করে।
                </p>
              </div>
            )}

            <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400">
              <strong className="text-white">সারসংক্ষেপ নিয়ম:</strong> তীব্র এসিড + তীব্র ক্ষার ⟶ নিরপেক্ষ (pH 7)। তীব্র এসিড + দুর্বল ক্ষার ⟶ অম্লীয় (pH &lt; 7)। দুর্বল এসিড + তীব্র ক্ষার ⟶ ক্ষারীয় (pH &gt; 7)।
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
