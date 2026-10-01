import React, { useState } from 'react';
import { Scale, Calculator, Sparkles, RotateCcw, CheckCircle2, AlertCircle } from 'lucide-react';

interface PresetElement {
  name: string;
  symbol: string;
  isotopes: { mass: number; abundance: number; label: string }[];
}

export const IsotopeCalculator: React.FC = () => {
  const presets: PresetElement[] = [
    {
      name: 'ক্লোরিন (Chlorine)',
      symbol: 'Cl',
      isotopes: [
        { mass: 35, abundance: 75.77, label: '³⁵Cl' },
        { mass: 37, abundance: 24.23, label: '³⁷Cl' }
      ]
    },
    {
      name: 'কপার (Copper)',
      symbol: 'Cu',
      isotopes: [
        { mass: 63, abundance: 69.15, label: '⁶³Cu' },
        { mass: 65, abundance: 30.85, label: '⁶⁵Cu' }
      ]
    },
    {
      name: 'বোরন (Boron)',
      symbol: 'B',
      isotopes: [
        { mass: 10, abundance: 19.9, label: '¹⁰B' },
        { mass: 11, abundance: 80.1, label: '¹¹B' }
      ]
    },
    {
      name: 'কার্বন (Carbon)',
      symbol: 'C',
      isotopes: [
        { mass: 12, abundance: 98.9, label: '¹²C' },
        { mass: 13, abundance: 1.1, label: '¹³C' }
      ]
    }
  ];

  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number>(0);
  const [isotope1Mass, setIsotope1Mass] = useState<number>(35);
  const [isotope1Abundance, setIsotope1Abundance] = useState<number>(75);
  const [isotope2Mass, setIsotope2Mass] = useState<number>(37);
  const [isotope2Abundance, setIsotope2Abundance] = useState<number>(25);

  const applyPreset = (preset: PresetElement, idx: number) => {
    setSelectedPresetIndex(idx);
    setIsotope1Mass(preset.isotopes[0].mass);
    setIsotope1Abundance(preset.isotopes[0].abundance);
    setIsotope2Mass(preset.isotopes[1].mass);
    setIsotope2Abundance(preset.isotopes[1].abundance);
  };

  // Auto-balance isotope 2 when isotope 1 changes
  const handleIso1AbundanceChange = (val: number) => {
    const clamped = Math.max(0, Math.min(100, val));
    setIsotope1Abundance(clamped);
    setIsotope2Abundance(Number((100 - clamped).toFixed(2)));
  };

  const handleIso2AbundanceChange = (val: number) => {
    const clamped = Math.max(0, Math.min(100, val));
    setIsotope2Abundance(clamped);
    setIsotope1Abundance(Number((100 - clamped).toFixed(2)));
  };

  const totalPercentage = isotope1Abundance + isotope2Abundance;
  const isPercentageValid = Math.abs(totalPercentage - 100) < 0.05;

  const part1 = isotope1Mass * isotope1Abundance;
  const part2 = isotope2Mass * isotope2Abundance;
  const totalSum = part1 + part2;
  const averageAtomicMass = totalSum / 100;

  return (
    <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8 space-y-8">
      {/* Title */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-semibold text-cyan-400">গাণিতিক ক্যালকুলেটর</span>
          <span aria-hidden="true">·</span>
          <span>আইসোটোপ ও আপেক্ষিক পারমাণবিক ভর</span>
          <span aria-hidden="true">·</span>
          <span>এসএসসি গাণিতিক সমস্যাবলি</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white">
          গড় আপেক্ষিক পারমাণবিক ভর নির্ণায়ক ক্যালকুলেটর
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl">
          প্রকৃতিতে প্রাপ্ত আইসোটোপসমূহের শতকরা প্রাচুর্য থেকে মৌলের গড় পারমাণবিক ভর ধাপভিত্তিক সমাধান করুন।
        </p>
      </div>

      {/* Preset Selector */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-3">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
          পাঠ্যবইয়ের স্ট্যান্ডার্ড উদাহরণসমূহ:
        </span>
        <div className="flex flex-wrap gap-2">
          {presets.map((p, idx) => (
            <button
              key={idx}
              onClick={() => applyPreset(p, idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                selectedPresetIndex === idx
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Inputs on Left, Live Step-by-Step Derivation on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Inputs (5 Cols) */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 space-y-6 shadow-xl">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Calculator className="h-4 w-4 text-cyan-400" />
            <span>আইসোটোপের উপাত্ত ইনপুট</span>
          </h2>

          {/* Isotope 1 Input */}
          <div className="rounded-xl border border-slate-700 bg-slate-950 p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-cyan-400">১ম আইসোটোপ</span>
              <span className="font-mono text-slate-400">ভর: {isotope1Mass}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">ভর সংখ্যা (m):</label>
                <input
                  type="number"
                  value={isotope1Mass}
                  onChange={(e) => setIsotope1Mass(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm font-mono text-white outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">শতকরা প্রাচুর্য (p%):</label>
                <input
                  type="number"
                  step="0.1"
                  value={isotope1Abundance}
                  onChange={(e) => handleIso1AbundanceChange(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm font-mono text-cyan-400 outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              step="0.5"
              value={isotope1Abundance}
              onChange={(e) => handleIso1AbundanceChange(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          {/* Isotope 2 Input */}
          <div className="rounded-xl border border-slate-700 bg-slate-950 p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-purple-400">২য় আইসোটোপ</span>
              <span className="font-mono text-slate-400">ভর: {isotope2Mass}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">ভর সংখ্যা (n):</label>
                <input
                  type="number"
                  value={isotope2Mass}
                  onChange={(e) => setIsotope2Mass(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm font-mono text-white outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-1">শতকরা প্রাচুর্য (q%):</label>
                <input
                  type="number"
                  step="0.1"
                  value={isotope2Abundance}
                  onChange={(e) => handleIso2AbundanceChange(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-sm font-mono text-purple-400 outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              step="0.5"
              value={isotope2Abundance}
              onChange={(e) => handleIso2AbundanceChange(Number(e.target.value))}
              className="w-full accent-purple-400 cursor-pointer"
            />
          </div>

          {/* Abundance Sum Validation Warning */}
          {!isPercentageValid && (
            <div className="flex items-center gap-2 p-3 rounded-lg border border-amber-500/40 bg-amber-500/10 text-amber-300 text-xs">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>
                সতর্কতা: শতকরা অনুপাতের সমষ্টি {totalPercentage.toFixed(1)}% হয়েছে (১০০% হওয়া আবশ্যক)।
              </span>
            </div>
          )}
        </div>

        {/* Right Derivation & Result (7 Cols) */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 md:p-8 space-y-6 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-base md:text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span>ধাপভিত্তিক গাণিতিক সমাধান (SSC বোর্ড খাতা ফরম্যাট)</span>
            </h2>
            <span className="font-mono text-xs text-slate-400">A = (m·p + n·q) / 100</span>
          </div>

          {/* Derivation Steps */}
          <div className="space-y-4 font-sans text-xs md:text-sm text-slate-200">
            {/* Step 1 */}
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950 space-y-1">
              <span className="text-xs text-cyan-400 font-semibold block">ধাপ ১: সূত্র প্রয়োগ</span>
              <p className="text-slate-300">
                মৌলের গড় আপেক্ষিক পারমাণবিক ভর ={' '}
                <code className="text-cyan-300 font-mono font-bold">
                  [(১ম আইসোটোপের ভর × শতকরা প্রাচুর্য) + (২য় আইসোটোপের ভর × শতকরা প্রাচুর্য)] ÷ ১০০
                </code>
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950 space-y-1">
              <span className="text-xs text-cyan-400 font-semibold block">ধাপ ২: মান বসিয়ে পাই</span>
              <p className="font-mono text-slate-300">
                = [({isotope1Mass} × {isotope1Abundance}) + ({isotope2Mass} × {isotope2Abundance})] ÷ 100
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-950 space-y-1">
              <span className="text-xs text-cyan-400 font-semibold block">ধাপ ৩: গুণফল ও সমষ্টি</span>
              <p className="font-mono text-slate-300">
                = [{part1.toFixed(2)} + {part2.toFixed(2)}] ÷ 100
              </p>
              <p className="font-mono text-slate-300">
                = {totalSum.toFixed(2)} ÷ 100
              </p>
            </div>

            {/* Final Highlighted Result */}
            <div className="p-5 rounded-xl border border-cyan-500/50 bg-gradient-to-r from-cyan-950/40 to-slate-950 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-cyan-300 font-semibold uppercase tracking-wider block">
                  চূড়ান্ত আপেক্ষিক পারমাণবিক ভর
                </span>
                <span className="text-3xl md:text-4xl font-extrabold text-white font-mono">
                  {averageAtomicMass.toFixed(3)}
                </span>
                <span className="text-xs text-slate-400 block mt-1">
                  (যেহেতু এটি দুটি ভরের অনুপাত, তাই এর কোনো একক নেই)
                </span>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <CheckCircle2 className="h-8 w-8 text-emerald-400 shrink-0" />
                <div className="text-xs text-emerald-300">
                  <span className="font-bold block">সঠিক মান প্রাপ্ত</span>
                  <span>এসএসসি সৃজনশীলে ৩/৩ নম্বর নিশ্চিত</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
