/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Beaker,
  Droplets,
  RotateCcw,
  Sparkles,
  Flame,
  Info,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Thermometer,
  Layers
} from 'lucide-react';

interface ReagentItem {
  id: string;
  nameBn: string;
  formula: string;
  color: string;
  type: 'acid' | 'base' | 'salt' | 'indicator';
  descriptionBn: string;
}

const REAGENTS: ReagentItem[] = [
  { id: 'hcl', nameBn: 'হাইড্রোক্লোরিক এসিড', formula: 'HCl(aq)', color: '#e0f2fe', type: 'acid', descriptionBn: 'তীব্র খনিজ এসিড, বর্ণহীন।' },
  { id: 'h2so4', nameBn: 'সালফিউরিক এসিড', formula: 'H₂SO₄(aq)', color: '#f0fdf4', type: 'acid', descriptionBn: 'কিং অব কেমিক্যালস, তীব্র এসিড।' },
  { id: 'naoh', nameBn: 'কস্টিক সোডা (NaOH)', formula: 'NaOH(aq)', color: '#f8fafc', type: 'base', descriptionBn: 'তীব্র ক্ষার, সাবানের মতো পিচ্ছিল।' },
  { id: 'agno3', nameBn: 'সিলভার নাইট্রেট', formula: 'AgNO₃(aq)', color: '#f1f5f9', type: 'salt', descriptionBn: 'হ্যালোজেন শনাক্তকারী লবণ দ্রবণ।' },
  { id: 'nacl', nameBn: 'সোডিয়াম ক্লোরাইড', formula: 'NaCl(aq)', color: '#f8fafc', type: 'salt', descriptionBn: 'খাবার লবণ দ্রবণ।' },
  { id: 'cuso4', nameBn: 'কপার সালফেট (তুঁতে)', formula: 'CuSO₄(aq)', color: '#0284c7', type: 'salt', descriptionBn: 'নীল বর্ণের জলীয় দ্রবণ।' },
  { id: 'fecl3', nameBn: 'ফেরিক ক্লোরাইড', formula: 'FeCl₃(aq)', color: '#ca8a04', type: 'salt', descriptionBn: 'হলুদাভ বাদামি বর্ণের লবণ দ্রবণ।' },
  { id: 'bacl2', nameBn: 'বেরিয়াম ক্লোরাইড', formula: 'BaCl₂(aq)', color: '#f8fafc', type: 'salt', descriptionBn: 'সালফেট শনাক্তকারী বিকারক দ্রবণ।' },
  { id: 'na2co3', nameBn: 'সোডিয়াম কার্বনেট', formula: 'Na₂CO₃(aq)', color: '#f8fafc', type: 'salt', descriptionBn: 'কাপড় কাচার সোডা দ্রবণ।' },
  { id: 'litmus_blue', nameBn: 'নীল লিটমাস দ্রবণ', formula: 'Blue Litmus', color: '#2563eb', type: 'indicator', descriptionBn: 'এসিডের উপস্থিতিতে লাল বর্ণ ধারণ করে।' },
  { id: 'phenolphthalein', nameBn: 'ফেনলফথ্যালিন নির্দেশক', formula: 'Phenolphthalein', color: '#fdf2f8', type: 'indicator', descriptionBn: 'ক্ষারীয় মাধ্যমে উজ্জ্বল গোলাপি বর্ণ ধারণ করে।' }
];

export const VirtualReagentRackLab: React.FC = () => {
  const [selectedTube1, setSelectedTube1] = useState<string>('agno3');
  const [selectedTube2, setSelectedTube2] = useState<string>('nacl');
  const [isMixed, setIsMixed] = useState<boolean>(true);

  const r1 = REAGENTS.find(r => r.id === selectedTube1) || REAGENTS[0];
  const r2 = REAGENTS.find(r => r.id === selectedTube2) || REAGENTS[1];

  // Derive reaction result
  const getReactionOutcome = (id1: string, id2: string) => {
    const pair = [id1, id2].sort().join('+');

    if (pair === 'agno3+nacl' || pair === 'agno3+hcl') {
      return {
        titleBn: 'সিলভার ক্লোরাইডের সাদা অধঃক্ষেপ (AgCl↓)',
        eqBn: 'AgNO₃(aq) + NaCl(aq) ⟶ AgCl(s)↓ (সাদা) + NaNO₃(aq)',
        color: '#f8fafc',
        precipitate: true,
        gas: false,
        tempChange: 'সামান্য তাপ পরিবর্তন',
        explanation: 'Ag⁺ এবং Cl⁻ যুক্ত হয়ে অত্যন্ত অদ্রবণীয় AgCl তৈরি করে যা দুধের মতো সাদা তলানি আকারে নিচে জমে যায়।'
      };
    }

    if (pair === 'bacl2+h2so4' || pair === 'bacl2+cuso4') {
      return {
        titleBn: 'বেরিয়াম সালফেটের ভারী সাদা অধঃক্ষেপ (BaSO₄↓)',
        eqBn: 'BaCl₂(aq) + H₂SO₄(aq) ⟶ BaSO₄(s)↓ (সাদা) + 2HCl(aq)',
        color: '#ffffff',
        precipitate: true,
        gas: false,
        tempChange: 'সামান্য পরিবর্তন',
        explanation: 'Ba²⁺ এবং SO₄²⁻ যুক্ত হয়ে অদ্রবণীয় BaSO₄ তৈরি করে যা কোনো এসিডেও দ্রবীভূত হয় না।'
      };
    }

    if (pair === 'cuso4+naoh') {
      return {
        titleBn: 'কপার হাইড্রোক্সাইডের হালকা নীল অধঃক্ষেপ',
        eqBn: 'CuSO₄(aq) + 2NaOH(aq) ⟶ Cu(OH)₂(s)↓ (হালকা নীল) + Na₂SO₄(aq)',
        color: '#38bdf8',
        precipitate: true,
        gas: false,
        tempChange: 'তাপমোচী',
        explanation: 'Cu²⁺ আয়ন ক্ষারের OH⁻ আয়নের সাথে যুক্ত হয়ে নীল রঙের জেলির মতো Cu(OH)₂ তলানি তৈরি করে।'
      };
    }

    if (pair === 'fecl3+naoh') {
      return {
        titleBn: 'ফেরিক হাইড্রোক্সাইডের লালচে বাদামি অধঃক্ষেপ',
        eqBn: 'FeCl₃(aq) + 3NaOH(aq) ⟶ Fe(OH)₃(s)↓ (লালচে বাদামি) + 3NaCl(aq)',
        color: '#9a3412',
        precipitate: true,
        gas: false,
        tempChange: 'তাপমোচী',
        explanation: 'Fe³⁺ আয়ন ক্ষারের সাথে বিক্রিয়া করে মরিচার মতো লালচে বাদামি Fe(OH)₃ তলানি সৃষ্টি করে।'
      };
    }

    if (pair === 'hcl+na2co3' || pair === 'h2so4+na2co3') {
      return {
        titleBn: 'তীব্র বুদবুদসহ CO₂ গ্যাস নির্গমন',
        eqBn: 'Na₂CO₃(aq) + 2HCl(aq) ⟶ 2NaCl(aq) + H₂O(l) + CO₂(g)↑',
        color: '#e0f2fe',
        precipitate: false,
        gas: true,
        tempChange: 'তাপ নির্গমন',
        explanation: 'কার্বনেট লবণের সাথে এসিড বিক্রিয়া করে তীব্র গতিতে ফেনার মতো CO₂ গ্যাসের বুদবুদ সৃষ্টি করে।'
      };
    }

    if (pair === 'hcl+naoh' || pair === 'h2so4+naoh') {
      return {
        titleBn: 'এসিড-ক্ষার প্রশমন তাপ নির্গমন (ΔH = -57.34 kJ)',
        eqBn: 'HCl(aq) + NaOH(aq) ⟶ NaCl(aq) + H₂O(l) + ৫Array kJ তাপ',
        color: '#f8fafc',
        precipitate: false,
        gas: false,
        tempChange: 'টেস্টটিউব গরম হয়ে ওঠে (উত্তপ্ত)',
        explanation: 'H⁺ ও OH⁻ যুক্ত হয়ে পানি গঠন করে এবং প্রতি মোলে ৫৭.৩৪ কিলোজুল তাপ নির্গত করে টেস্টটিউবকে গরম করে তোলে।'
      };
    }

    if (pair.includes('litmus_blue')) {
      const isAcid = pair.includes('hcl') || pair.includes('h2so4');
      return {
        titleBn: isAcid ? 'নীল লিটমাস লাল বর্ণ ধারণ করে' : 'বর্ণের কোনো পরিবর্তন নেই',
        eqBn: isAcid ? 'এসিড দ্রবণে: নীল লিটমাস ⟶ লাল বর্ণ' : 'ক্ষার/লবণে নীল বর্ণ অক্ষুণ্ণ থাকে',
        color: isAcid ? '#ef4444' : '#2563eb',
        precipitate: false,
        gas: false,
        tempChange: 'স্থির',
        explanation: isAcid ? 'এসিডের H⁺ আয়নের উপস্থিতিতে নীল লিটমাসের জৈব রঞ্জক লাল বর্ণে রূপান্তরিত হয়।' : 'এসিড না থাকায় লিটমাস রঙ অপরিবর্তিত থাকে।'
      };
    }

    if (pair.includes('phenolphthalein')) {
      const isBase = pair.includes('naoh');
      return {
        titleBn: isBase ? 'ফেনলফথ্যালিন উজ্জ্বল গোলাপি বর্ণ ধারণ করে' : 'বর্ণহীন থাকে',
        eqBn: isBase ? 'ক্ষারীয় মাধ্যমে: ফেনলফথ্যালিন ⟶ উজ্জ্বল গোলাপি' : 'এসিড/নিরপেক্ষ মাধ্যমে: বর্ণহীন',
        color: isBase ? '#ec4899' : '#f8fafc',
        precipitate: false,
        gas: false,
        tempChange: 'স্থির',
        explanation: isBase ? 'OH⁻ ক্ষারীয় মাধ্যমে ফেনলফথ্যালিন আয়নিত হয়ে উজ্জ্বল গোলাপি বা বেগুনি বর্ণ প্রদর্শন করে।' : 'এসিড বা নিরপেক্ষ দ্রবণে এটি বর্ণহীন থাকে।'
      };
    }

    return {
      titleBn: 'দ্রবণ দুটি মিশে সমসত্ত্ব মিশ্রণ তৈরি করেছে',
      eqBn: `${r1.formula} + ${r2.formula} ⟶ সমসত্ত্ব মিশ্রণ`,
      color: '#e2e8f0',
      precipitate: false,
      gas: false,
      tempChange: 'স্বাভাবিক',
      explanation: 'দৃশ্যমান কোনো অধঃক্ষেপ বা গ্যাস তৈরি হয়নি; আয়নগুলি স্বাধীনভাবে দ্রবণে ঘুরে বেড়াচ্ছে।'
    };
  };

  const outcome = getReactionOutcome(selectedTube1, selectedTube2);

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 bg-slate-950 text-white rounded-2xl border border-teal-500/30 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-teal-500/20 text-teal-400 rounded-xl border border-teal-500/40">
              <Beaker className="h-5 w-5" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
              ভার্চুয়াল কেমিস্ট্রি র্যাক ও বিকারক মিক্সিং ল্যাব
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            টেস্টটিউবে বিভিন্ন এসিড, ক্ষার, লবণ ও নির্দেশক মিশিয়ে লাইভ রঙের পরিবর্তন ও অধঃক্ষেপণ পরীক্ষা
          </p>
        </div>

        <button
          onClick={() => setIsMixed(true)}
          className="px-3 py-1.5 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:brightness-110 shadow-md"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>মিশ্রিত করুন</span>
        </button>
      </div>

      {/* Main Grid: Reagent Selectors & Reaction Test Tube */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Reagent Selector 1 & 2 (1 Col) */}
        <div className="space-y-4">
          {/* Reagent 1 */}
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-cyan-300 block">১ম বিকারক বা দ্রবণ নির্বাচন করুন:</span>
            <select
              value={selectedTube1}
              onChange={(e) => setSelectedTube1(e.target.value)}
              className="w-full p-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-white outline-none"
            >
              {REAGENTS.map(r => (
                <option key={r.id} value={r.id}>{r.nameBn} ({r.formula})</option>
              ))}
            </select>
            <p className="text-[11px] text-slate-400">{r1.descriptionBn}</p>
          </div>

          {/* Reagent 2 */}
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
            <span className="text-xs font-bold text-amber-300 block">২য় বিকারক বা নির্দেশক নির্বাচন করুন:</span>
            <select
              value={selectedTube2}
              onChange={(e) => setSelectedTube2(e.target.value)}
              className="w-full p-2 bg-slate-950 border border-slate-700 rounded-lg text-xs font-mono text-white outline-none"
            >
              {REAGENTS.map(r => (
                <option key={r.id} value={r.id}>{r.nameBn} ({r.formula})</option>
              ))}
            </select>
            <p className="text-[11px] text-slate-400">{r2.descriptionBn}</p>
          </div>

          {/* Quick preset mix shortcuts */}
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-1.5">
            <span className="text-slate-400 font-bold block">জনপ্রিয় ল্যাব পরীক্ষা শর্টকাট:</span>
            <div className="flex flex-wrap gap-1.5 text-[10.5px]">
              <button
                onClick={() => { setSelectedTube1('agno3'); setSelectedTube2('nacl'); }}
                className="px-2 py-1 bg-slate-950 rounded border border-slate-700 text-cyan-300 hover:border-cyan-400"
              >
                AgCl সাদা অধঃক্ষেপ
              </button>
              <button
                onClick={() => { setSelectedTube1('cuso4'); setSelectedTube2('naoh'); }}
                className="px-2 py-1 bg-slate-950 rounded border border-slate-700 text-cyan-300 hover:border-cyan-400"
              >
                Cu(OH)₂ নীল তলানি
              </button>
              <button
                onClick={() => { setSelectedTube1('hcl'); setSelectedTube2('na2co3'); }}
                className="px-2 py-1 bg-slate-950 rounded border border-slate-700 text-cyan-300 hover:border-cyan-400"
              >
                CO₂ গ্যাসের ফেনা
              </button>
              <button
                onClick={() => { setSelectedTube1('naoh'); setSelectedTube2('phenolphthalein'); }}
                className="px-2 py-1 bg-slate-950 rounded border border-slate-700 text-pink-300 hover:border-pink-400"
              >
                গোলাপি ফেনলফথ্যালিন
              </button>
            </div>
          </div>
        </div>

        {/* Reaction Test Tube Visual (2 Cols) */}
        <div className="lg:col-span-2 p-6 bg-slate-900/90 rounded-2xl border border-slate-800 flex flex-col items-center justify-between">
          <div className="w-full flex items-center justify-between border-b border-slate-800 pb-2 text-xs">
            <span className="font-bold text-teal-400">{outcome.titleBn}</span>
            <span className="font-mono text-amber-300">পর্যবেক্ষণ: {outcome.tempChange}</span>
          </div>

          {/* Test Tube Illustration */}
          <div className="my-6 relative flex flex-col items-center">
            {/* Glass Test Tube */}
            <div className="w-20 h-64 border-4 border-slate-600 rounded-b-full bg-slate-950/70 relative overflow-hidden shadow-2xl flex flex-col justify-end p-1">
              {/* Liquid content */}
              <div
                className="w-full h-44 rounded-b-full transition-all duration-700 relative flex items-center justify-center"
                style={{ backgroundColor: outcome.color }}
              >
                {/* Precipitate layer at bottom */}
                {outcome.precipitate && (
                  <div className="absolute bottom-0 w-full h-10 bg-white/90 rounded-b-full shadow-inner flex items-center justify-center">
                    <span className="text-[9px] font-bold text-slate-950 font-mono">অধঃক্ষেপ ↓</span>
                  </div>
                )}

                {/* Bubbles if gas */}
                {outcome.gas && (
                  <div className="absolute inset-0 flex flex-col items-center justify-around animate-pulse">
                    <span className="h-2 w-2 rounded-full bg-white/70 animate-ping" />
                    <span className="h-3 w-3 rounded-full bg-white/80 animate-ping" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60 animate-ping" />
                  </div>
                )}
              </div>
            </div>

            <span className="text-xs font-mono font-bold text-slate-300 mt-3">
              মিশ্রণ: {r1.formula} + {r2.formula}
            </span>
          </div>

          {/* Chemical Reaction & Board Explanation */}
          <div className="w-full p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
            <div className="font-mono text-xs sm:text-sm text-center text-emerald-400 font-bold border-b border-slate-800 pb-2">
              সমীকরণ: {outcome.eqBn}
            </div>
            <p className="text-xs text-slate-300 text-center">
              {outcome.explanation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
