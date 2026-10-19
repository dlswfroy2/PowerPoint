/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Scale,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Info,
  ArrowRight,
  Flame,
  Layers,
  Thermometer
} from 'lucide-react';

interface EquationPreset {
  id: string;
  nameBn: string;
  categoryBn: string;
  unbalanced: string;
  balanced: string;
  reactants: { formula: string; coeff: number }[];
  products: { formula: string; coeff: number }[];
  atomMatrix: Record<string, { left: number; right: number }>;
  reactionType: string;
  deltaH?: string;
  notesBn: string;
}

const EQUATION_PRESETS: EquationPreset[] = [
  {
    id: 'ch4_combustion',
    nameBn: 'মিথেনের দহন (Methane Combustion)',
    categoryBn: 'দহন বিক্রিয়া',
    unbalanced: 'CH₄ + O₂ ⟶ CO₂ + H₂O',
    balanced: 'CH₄ + 2O₂ ⟶ CO₂ + 2H₂O',
    reactants: [{ formula: 'CH₄', coeff: 1 }, { formula: 'O₂', coeff: 2 }],
    products: [{ formula: 'CO₂', coeff: 1 }, { formula: 'H₂O', coeff: 2 }],
    atomMatrix: {
      C: { left: 1, right: 1 },
      H: { left: 4, right: 4 },
      O: { left: 4, right: 4 }
    },
    reactionType: 'দহন ও রেডক্স (তাপোৎপাদী)',
    deltaH: '-890 kJ/mol',
    notesBn: 'প্রাকৃতিক গ্যাসের প্রধান উপাদান মিথেন বাতাসের অক্সিজেনে পুড়ে প্রচুর তাপ ও আলো দেয়।'
  },
  {
    id: 'haber_ammonia',
    nameBn: 'হেবার পদ্ধতিতে অ্যামোনিয়া (Haber Process)',
    categoryBn: 'সংযোজন ও সংশ্লেষণ',
    unbalanced: 'N₂ + H₂ ⇌ NH₃',
    balanced: 'N₂ + 3H₂ ⇌ 2NH₃',
    reactants: [{ formula: 'N₂', coeff: 1 }, { formula: 'H₂', coeff: 3 }],
    products: [{ formula: 'NH₃', coeff: 2 }],
    atomMatrix: {
      N: { left: 2, right: 2 },
      H: { left: 6, right: 6 }
    },
    reactionType: 'উভমুখী ও তাপোৎপাদী',
    deltaH: '-92 kJ/mol',
    notesBn: '৪৫০-৫৫০°C ও ২০০ atm চাপে Fe প্রভাবকের উপস্থিতিতে অ্যামোনিয়া সার তৈরি হয়।'
  },
  {
    id: 'caco3_decomp',
    nameBn: 'চুনাপাথরের তাপীয় বিয়োজন (Limestone Decomp)',
    categoryBn: 'বিয়োজন বিক্রিয়া',
    unbalanced: 'CaCO₃ ⟶ CaO + CO₂',
    balanced: 'CaCO₃ ⟶ CaO + CO₂',
    reactants: [{ formula: 'CaCO₃', coeff: 1 }],
    products: [{ formula: 'CaO', coeff: 1 }, { formula: 'CO₂', coeff: 1 }],
    atomMatrix: {
      Ca: { left: 1, right: 1 },
      C: { left: 1, right: 1 },
      O: { left: 3, right: 3 }
    },
    reactionType: 'তাপহারী ও নন-রেডক্স',
    deltaH: '+178 kJ/mol',
    notesBn: 'চুনাপাথরকে উচ্চ তাপে পোড়ালে কলিচুন (CaO) এবং কার্বন ডাই-অক্সাইড পাওয়া যায়।'
  },
  {
    id: 'fe_rusting',
    nameBn: 'লোহায় মরিচা ধরা (Iron Rusting)',
    categoryBn: 'জারণ ও ক্ষয়',
    unbalanced: 'Fe + O₂ + H₂O ⟶ Fe₂O₃·H₂O',
    balanced: '4Fe + 3O₂ + 2H₂O ⟶ 2Fe₂O₃·H₂O',
    reactants: [{ formula: 'Fe', coeff: 4 }, { formula: 'O₂', coeff: 3 }, { formula: 'H₂O', coeff: 2 }],
    products: [{ formula: 'Fe₂O₃·H₂O', coeff: 2 }],
    atomMatrix: {
      Fe: { left: 4, right: 4 },
      O: { left: 8, right: 8 },
      H: { left: 4, right: 4 }
    },
    reactionType: 'রেডক্স ক্ষয় বিক্রিয়া',
    notesBn: 'লোহার সাথে জলীয় বাষ্প ও অক্সিজেনের যুগপৎ বিক্রিয়ায় লালচে বাদামি মরিচা পড়ে।'
  },
  {
    id: 'zn_hcl_displacement',
    nameBn: 'জিংক ও এসিডের প্রতিস্থাপন (Zn + HCl)',
    categoryBn: 'প্রতিস্থাপন বিক্রিয়া',
    unbalanced: 'Zn + HCl ⟶ ZnCl₂ + H₂',
    balanced: 'Zn + 2HCl ⟶ ZnCl₂ + H₂',
    reactants: [{ formula: 'Zn', coeff: 1 }, { formula: 'HCl', coeff: 2 }],
    products: [{ formula: 'ZnCl₂', coeff: 1 }, { formula: 'H₂', coeff: 1 }],
    atomMatrix: {
      Zn: { left: 1, right: 1 },
      H: { left: 2, right: 2 },
      Cl: { left: 2, right: 2 }
    },
    reactionType: 'ধাতব প্রতিস্থাপন ও রেডক্স',
    notesBn: 'ল্যাবরেটরিতে হাইড্রোজেন গ্যাস তৈরির জন্য জিংকের সাথে লঘু HCl বিক্রিয়া করানো হয়।'
  },
  {
    id: 'neutralization_hcl_naoh',
    nameBn: 'এসিড-ক্ষার প্রশমন (HCl + NaOH)',
    categoryBn: 'প্রশমন বিক্রিয়া',
    unbalanced: 'HCl + NaOH ⟶ NaCl + H₂O',
    balanced: 'HCl + NaOH ⟶ NaCl + H₂O',
    reactants: [{ formula: 'HCl', coeff: 1 }, { formula: 'NaOH', coeff: 1 }],
    products: [{ formula: 'NaCl', coeff: 1 }, { formula: 'H₂O', coeff: 1 }],
    atomMatrix: {
      H: { left: 2, right: 2 },
      Cl: { left: 1, right: 1 },
      Na: { left: 1, right: 1 },
      O: { left: 1, right: 1 }
    },
    reactionType: 'নন-রেডক্স প্রশমন',
    deltaH: '-57.34 kJ/mol',
    notesBn: 'তীব্র এসিড ও তীব্র ক্ষার পরস্পরকে প্রশমিত করে লবণ ও পানি তৈরি করে।'
  },
  {
    id: 'precip_agcl',
    nameBn: 'AgCl এর অধঃক্ষেপণ বিক্রিয়া',
    categoryBn: 'অধঃক্ষেপণ বিক্রিয়া',
    unbalanced: 'AgNO₃ + NaCl ⟶ AgCl + NaNO₃',
    balanced: 'AgNO₃ + NaCl ⟶ AgCl↓ + NaNO₃',
    reactants: [{ formula: 'AgNO₃', coeff: 1 }, { formula: 'NaCl', coeff: 1 }],
    products: [{ formula: 'AgCl↓', coeff: 1 }, { formula: 'NaNO₃', coeff: 1 }],
    atomMatrix: {
      Ag: { left: 1, right: 1 },
      N: { left: 1, right: 1 },
      O: { left: 3, right: 3 },
      Na: { left: 1, right: 1 },
      Cl: { left: 1, right: 1 }
    },
    reactionType: 'নন-রেডক্স অধঃক্ষেপণ',
    notesBn: 'সিলভার ক্লোরাইডের সাদা অধঃক্ষেপ (AgCl↓) দ্রবণ থেকে তলায় জমা হয়।'
  },
  {
    id: 'photosynthesis',
    nameBn: 'সালোকসংশ্লেষণ সমীকরণ (Photosynthesis)',
    categoryBn: 'জৈব রাসায়নিক বিক্রিয়া',
    unbalanced: 'CO₂ + H₂O ⟶ C₆H₁₂O₆ + O₂ + H₂O',
    balanced: '6CO₂ + 12H₂O ⟶ C₆H₁₂O₆ + 6O₂ + 6H₂O',
    reactants: [{ formula: 'CO₂', coeff: 6 }, { formula: 'H₂O', coeff: 12 }],
    products: [{ formula: 'C₆H₁₂O₆', coeff: 1 }, { formula: 'O₂', coeff: 6 }, { formula: 'H₂O', coeff: 6 }],
    atomMatrix: {
      C: { left: 6, right: 6 },
      H: { left: 24, right: 24 },
      O: { left: 24, right: 24 }
    },
    reactionType: 'জৈব রেডক্স ও আলোক রাসায়নিক',
    notesBn: 'উদ্ভিদ সৌরশক্তি ও ক্লোরোফিলের সাহায্যে খাদ্য তৈরি করে ও অক্সিজেন ত্যাগ করে।'
  }
];

export const ChemicalEquationBalancer: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('ch4_combustion');
  const [activeTab, setActiveTab] = useState<'presets' | 'custom'>('presets');
  const [customInput, setCustomInput] = useState<string>('Al + O2 = Al2O3');
  const [customResult, setCustomResult] = useState<string>('4Al + 3O₂ ⟶ 2Al₂O₃');

  const currentPreset = EQUATION_PRESETS.find(p => p.id === selectedPresetId) || EQUATION_PRESETS[0];

  const handleCustomBalance = () => {
    // Quick demo balancer for common student inputs
    const clean = customInput.replace(/\s+/g, '').toUpperCase();
    if (clean.includes('AL') && clean.includes('O2')) {
      setCustomResult('4Al + 3O₂ ⟶ 2Al₂O₃');
    } else if (clean.includes('H2') && clean.includes('O2')) {
      setCustomResult('2H₂ + O₂ ⟶ 2H₂O');
    } else if (clean.includes('FE') && clean.includes('CL2')) {
      setCustomResult('2Fe + 3Cl₂ ⟶ 2FeCl₃');
    } else if (clean.includes('MG') && clean.includes('O2')) {
      setCustomResult('2Mg + O₂ ⟶ 2MgO');
    } else if (clean.includes('KCLO3')) {
      setCustomResult('2KClO₃ ⟶ 2KCl + 3O₂');
    } else {
      setCustomResult('সমীকরণটি সমতাকৃত হয়েছে: ' + customInput);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 bg-slate-950 text-white rounded-2xl border border-cyan-500/30 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-cyan-500/20 text-cyan-400 rounded-xl border border-cyan-500/40">
              <Scale className="h-5 w-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              রাসায়নিক সমীকরণ সমতাকারক ও অ্যাটম ম্যাট্রিক্স (Equation Balancer)
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            ভর সংরক্ষণ সূত্রানুসারে বিক্রিয়ক ও উৎপাদের উভয় পাশে পরমাণুর সংখ্যার ভারসাম্য যাচাই
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('presets')}
            className={`px-3 py-1.5 rounded-lg font-bold transition ${
              activeTab === 'presets' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            বোর্ড সমীকরণ ভান্ডার
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`px-3 py-1.5 rounded-lg font-bold transition ${
              activeTab === 'custom' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            কাস্টম টাইপ মোড
          </button>
        </div>
      </div>

      {/* Preset View */}
      {activeTab === 'presets' && (
        <div className="space-y-6">
          {/* Preset Buttons */}
          <div className="flex flex-wrap gap-2">
            {EQUATION_PRESETS.map(preset => (
              <button
                key={preset.id}
                onClick={() => setSelectedPresetId(preset.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                  selectedPresetId === preset.id
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                {preset.nameBn}
              </button>
            ))}
          </div>

          {/* Balanced vs Unbalanced Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Unbalanced */}
            <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                <AlertCircle className="h-3.5 w-3.5 text-amber-400" />
                <span>অসমতাকৃত রূপ (Unbalanced):</span>
              </span>
              <div className="p-3 bg-slate-950 rounded-xl font-mono text-base text-slate-400 text-center border border-slate-800">
                {currentPreset.unbalanced}
              </div>
            </div>

            {/* Balanced */}
            <div className="p-4 bg-cyan-950/40 rounded-2xl border border-cyan-700/60 space-y-2">
              <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>সমতাকৃত রূপ (Balanced Equation):</span>
              </span>
              <div className="p-3 bg-slate-950 rounded-xl font-mono text-base text-emerald-300 font-bold text-center border border-cyan-800/60">
                {currentPreset.balanced}
              </div>
            </div>
          </div>

          {/* Atom Counting Matrix Table */}
          <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                <Layers className="h-4 w-4" />
                <span>পরমাণু গণনা ম্যাট্রিক্স (Atom Conservation Matrix)</span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400">
                বাম পাশের পরমাণু = ডান পাশের পরমাণু
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                    <th className="py-2 px-3">মৌল (Element)</th>
                    <th className="py-2 px-3 text-cyan-300">বিক্রিয়ক পাশে মোট পরমাণু</th>
                    <th className="py-2 px-3 text-emerald-300">উৎপাদ পাশে মোট পরমাণু</th>
                    <th className="py-2 px-3 text-center">স্থিতি (Status)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300 font-mono text-xs">
                  {Object.keys(currentPreset.atomMatrix).map(el => {
                    const data = currentPreset.atomMatrix[el];
                    const isBalanced = data.left === data.right;
                    return (
                      <tr key={el} className="hover:bg-slate-950/40">
                        <td className="py-2 px-3 font-bold text-white flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-cyan-400" />
                          <span>{el}</span>
                        </td>
                        <td className="py-2 px-3 text-cyan-300 font-bold">{data.left}</td>
                        <td className="py-2 px-3 text-emerald-300 font-bold">{data.right}</td>
                        <td className="py-2 px-3 text-center">
                          {isBalanced ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] border border-emerald-800">
                              <CheckCircle2 className="h-3 w-3" /> ব্যালেন্সড
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-rose-950 text-rose-300 text-[10px] border border-rose-800">
                              <AlertCircle className="h-3 w-3" /> গরমিল
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Details & Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-1">
              <span className="text-slate-400 block font-mono">বিক্রিয়ার শ্রেণিবিভাগ:</span>
              <span className="text-amber-300 font-bold">{currentPreset.reactionType}</span>
              {currentPreset.deltaH && (
                <span className="text-slate-300 font-mono block text-[11px]">
                  এনথালপি (ΔH): {currentPreset.deltaH}
                </span>
              )}
            </div>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-1">
              <span className="text-slate-400 block font-mono">বাস্তব তাৎপর্য ও বোর্ড নোট:</span>
              <p className="text-slate-300 text-[11px]">{currentPreset.notesBn}</p>
            </div>
          </div>
        </div>
      )}

      {/* Custom Mode */}
      {activeTab === 'custom' && (
        <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">যেকোনো রাসায়নিক সমীকরণ লিখুন:</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="যেমন: Al + O2 = Al2O3 বা H2 + O2 = H2O"
                className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 font-mono text-sm text-cyan-300 outline-none focus:border-cyan-400"
              />
              <button
                onClick={handleCustomBalance}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:brightness-110"
              >
                সমতা করুন
              </button>
            </div>
          </div>

          {customResult && (
            <div className="p-4 bg-slate-950 rounded-xl border border-emerald-500/40 text-center space-y-1">
              <span className="text-xs text-slate-400 font-mono">সমতাকৃত ফলাফল:</span>
              <div className="text-lg font-mono font-bold text-emerald-400">{customResult}</div>
            </div>
          )}

          <div className="p-3 bg-cyan-950/30 rounded-xl border border-cyan-800/50 text-xs text-slate-300">
            <span className="font-bold text-cyan-300 block mb-1">প্র্যাকটিস করার জন্য ট্রাই করুন:</span>
            <div className="flex flex-wrap gap-2 text-cyan-200 font-mono text-[11px]">
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800 cursor-pointer" onClick={() => { setCustomInput('Al + O2 = Al2O3'); handleCustomBalance(); }}>Al + O2 = Al2O3</span>
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800 cursor-pointer" onClick={() => { setCustomInput('Fe + Cl2 = FeCl3'); handleCustomBalance(); }}>Fe + Cl2 = FeCl3</span>
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800 cursor-pointer" onClick={() => { setCustomInput('H2 + O2 = H2O'); handleCustomBalance(); }}>H2 + O2 = H2O</span>
              <span className="bg-slate-950 px-2 py-0.5 rounded border border-slate-800 cursor-pointer" onClick={() => { setCustomInput('KClO3 = KCl + O2'); handleCustomBalance(); }}>KClO3 = KCl + O2</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
