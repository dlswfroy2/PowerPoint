/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  FlaskConical, 
  Layers, 
  Flame, 
  Sparkles, 
  Activity, 
  ShieldCheck, 
  Pipette, 
  Droplets,
  Zap,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

interface ChemistryDiagramProps {
  type: string;
}

/**
 * High-fidelity 2D interactive scientific diagrams and flowcharts for
 * Chemistry Chapters 9, 10, 11, and 12
 */
export const ChemistryCh9to12Diagrams: React.FC<ChemistryDiagramProps> = ({ type }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  // =========================================================================
  // CHAPTER 9: এসিড-ক্ষার সমতা (ACID-BASE BALANCE)
  // =========================================================================
  if (type === 'acidBaseIonization') {
    return (
      <div className="w-full h-full min-h-[300px] bg-slate-950 p-4 rounded-xl border border-red-500/30 flex flex-col justify-between text-slate-100 select-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <FlaskConical className="h-4 w-4 text-rose-400" />
            <span className="font-bold text-xs text-rose-300">আর্হেনিয়াস ও ব্রনস্টেড-লাউরি: এসিড ও ক্ষারকের জলীয় বিয়োজন</span>
          </div>
          <span className="text-[10px] bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-800">অধ্যায় ৯ ডায়াগ্রাম ১</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
          {/* Left: Acid Dissociation */}
          <div className="bg-slate-900/90 p-3 rounded-lg border border-red-500/40 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-red-400">
              <span>১. এসিডের বিয়োজন (HCl ⟶ H⁺ + Cl⁻)</span>
              <span className="text-[10px] text-red-300">pH &lt; 7</span>
            </div>
            <div className="p-2.5 bg-slate-950 rounded border border-slate-800 font-mono text-[11px] space-y-1">
              <div className="text-cyan-300">HCl(aq) + H₂O(l) ⟶ H₃O⁺(aq) + Cl⁻(aq)</div>
              <div className="text-slate-400 text-[10px]">মুক্ত H⁺ প্রোটন পানির সাথে যুক্ত হয়ে হাইড্রোনিয়াম (H₃O⁺) গঠন করে।</div>
            </div>
            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="text-slate-400">নীল লিটমাস পরিবর্তন:</span>
              <span className="text-red-400 font-bold bg-red-950/80 px-2 py-0.5 rounded border border-red-800">নীল ⟶ লাল বর্ণ</span>
            </div>
          </div>

          {/* Right: Base Dissociation */}
          <div className="bg-slate-900/90 p-3 rounded-lg border border-blue-500/40 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-blue-400">
              <span>২. ক্ষারকের বিয়োজন (NaOH ⟶ Na⁺ + OH⁻)</span>
              <span className="text-[10px] text-blue-300">pH &gt; 7</span>
            </div>
            <div className="p-2.5 bg-slate-950 rounded border border-slate-800 font-mono text-[11px] space-y-1">
              <div className="text-cyan-300">NaOH(s) + H₂O ⟶ Na⁺(aq) + OH⁻(aq)</div>
              <div className="text-slate-400 text-[10px]">জলীয় দ্রবণে হাইড্রোক্সাইড (OH⁻) আয়ন অবমুক্ত করে সাবানের ন্যায় পিচ্ছিল অনুভূতি দেয়।</div>
            </div>
            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="text-slate-400">লাল লিটমাস পরিবর্তন:</span>
              <span className="text-blue-400 font-bold bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">লাল ⟶ নীল বর্ণ</span>
            </div>
          </div>
        </div>

        <div className="p-2 bg-slate-900/60 rounded text-[11px] text-slate-400 flex items-center justify-between">
          <span>গোল্ডেন রুল: সকল ক্ষারই ক্ষারক, কিন্তু পানিতে অদ্রবণীয় ক্ষারক (যেমন Fe(OH)₃) ক্ষার নয়।</span>
          <span className="text-cyan-400 font-mono">Kw = [H⁺][OH⁻] = 10⁻¹⁴</span>
        </div>
      </div>
    );
  }

  if (type === 'phScaleSpectrum') {
    return (
      <div className="w-full h-full min-h-[300px] bg-slate-950 p-4 rounded-xl border border-cyan-500/30 flex flex-col justify-between text-slate-100 select-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-cyan-400" />
            <span className="font-bold text-xs text-cyan-300">০ থেকে ১৪ পর্যন্ত পূর্ণাঙ্গ pH স্কেল ও বর্ণালীর ডায়াগ্রাম</span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400">pH = -log₁₀[H⁺]</span>
        </div>

        <div className="my-3 space-y-3">
          {/* Continuous gradient pH bar */}
          <div className="h-8 rounded-lg w-full bg-gradient-to-r from-red-600 via-green-500 to-purple-800 p-0.5 shadow-md flex items-center justify-between px-2 text-[10px] font-bold text-white">
            <span>০ তীব্র এসিড</span>
            <span>৩ লেবু/সিরকা</span>
            <span>৭ নিরপেক্ষ পানি</span>
            <span>১০ অ্যান্টাসিড</span>
            <span>১৪ তীব্র ক্ষার</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="p-2 bg-red-950/40 rounded border border-red-800/60">
              <div className="font-bold text-red-400">অম্লীয় পরিসীমা (&lt; ৭)</div>
              <div className="text-[10px] text-slate-400">পাকস্থলীর রস (১.৫-২.০), বৃষ্টি (৫.৬)</div>
            </div>
            <div className="p-2 bg-green-950/40 rounded border border-green-800/60">
              <div className="font-bold text-green-400">নিরপেক্ষ বিন্দু (= ৭)</div>
              <div className="text-[10px] text-slate-400">বিশুদ্ধ পাতিত পানি (২৫°C)</div>
            </div>
            <div className="p-2 bg-purple-950/40 rounded border border-purple-800/60">
              <div className="font-bold text-purple-400">ক্ষারীয় পরিসীমা (&gt; ৭)</div>
              <div className="text-[10px] text-slate-400">মানব রক্ত (৭.৪), সাবান পানি (৯-১০)</div>
            </div>
          </div>
        </div>

        <div className="p-2 bg-cyan-950/30 rounded border border-cyan-900/60 text-[11px] text-cyan-300 flex items-center justify-between">
          <span>লগারিদমিক ধর্ম: pH ১ একক কমলে হাইড্রোজেন আয়ন (H⁺) ঘনমাত্রা ১০ গুণ বাড়ে!</span>
          <span className="font-mono text-white">ΔpH 1 = 10× [H⁺]</span>
        </div>
      </div>
    );
  }

  if (type === 'titrationBuretteFlask') {
    return (
      <div className="w-full h-full min-h-[300px] bg-slate-950 p-4 rounded-xl border border-pink-500/30 flex flex-col justify-between text-slate-100 select-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Pipette className="h-4 w-4 text-pink-400" />
            <span className="font-bold text-xs text-pink-300">প্রশমন টাইট্রেশনের যন্ত্রপাতি ও সমীকরণ ডায়াগ্রাম</span>
          </div>
          <span className="text-[10px] font-mono text-pink-400">V₁S₁ = V₂S₂</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-2 items-center">
          <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-semibold">ব্যুরেট (Burette):</span>
              <span className="text-cyan-400 font-mono">জানা প্রমাণ ক্ষার দ্রবণ (0.1M NaOH)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-semibold">কনিক্যাল ফ্লাস্ক:</span>
              <span className="text-amber-400 font-mono">অজানা এসিড (HCl) + নির্দেশক</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-semibold">নির্দেশক:</span>
              <span className="text-pink-400">ফেনলফথ্যালিন (Phenolphthalein)</span>
            </div>
            <div className="p-2 bg-pink-950/40 rounded border border-pink-900/60 text-[11px] text-pink-300">
              সমাপ্তি বিন্দু (Endpoint): বর্ণহীন দ্রবণ এক ফোঁটা অতিরিক্ত ক্ষারে স্থায়ী হালকা গোলাপি বর্ণ ধারণ করে।
            </div>
          </div>

          <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 space-y-1.5 text-xs font-mono">
            <div className="text-slate-400 text-[10px]">টাইট্রেশন গাণিতিক সম্পর্ক:</div>
            <div className="p-2 bg-slate-950 rounded text-cyan-300 text-center font-bold">
              Va × Sa / na = Vb × Sb / nb
            </div>
            <div className="text-[11px] text-slate-300">
              HCl + NaOH ⟶ NaCl + H₂O + ৫7.৩4 kJ (প্রশমন তাপ ধ্রুবক)
            </div>
          </div>
        </div>

        <div className="p-2 bg-slate-900 text-slate-400 rounded text-[11px] flex items-center justify-between">
          <span>তীব্র এসিড ও তীব্র ক্ষারের প্রশমন তাপ সর্বদা -৫৭.৩৪ কিলোজুল/মোল।</span>
          <span className="text-emerald-400 font-mono">ΔH = -57.34 kJ</span>
        </div>
      </div>
    );
  }

  // =========================================================================
  // CHAPTER 10: খনিজ সম্পদ — ধাতু ও অধাতু (METALLURGY & MINERALS)
  // =========================================================================
  if (type === 'blastFurnaceIron') {
    return (
      <div className="w-full h-full min-h-[300px] bg-slate-950 p-4 rounded-xl border border-amber-500/30 flex flex-col justify-between text-slate-100 select-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Flame className="h-4 w-4 text-orange-400" />
            <span className="font-bold text-xs text-orange-300">বাত্যাচুল্লিতে (Blast Furnace) লোহা নিষ্কাশনের রাসায়নিক অঞ্চল</span>
          </div>
          <span className="text-[10px] bg-orange-950 text-orange-300 px-2 py-0.5 rounded border border-orange-800">অধ্যায় ১০ ডায়াগ্রাম</span>
        </div>

        <div className="my-2 space-y-2 text-xs">
          <div className="p-2 bg-slate-900 rounded border-l-4 border-cyan-500 flex justify-between items-center">
            <div>
              <span className="font-bold text-cyan-300">১. বিজারণ অঞ্চল (৪০০° - ৭০০°C):</span>
              <span className="text-slate-400 ml-2 font-mono">3Fe₂O₃ + CO ⟶ 2Fe₃O₄ + CO₂</span>
            </div>
            <span className="text-[10px] text-slate-500">স্পঞ্জ আয়রন গঠন</span>
          </div>

          <div className="p-2 bg-slate-900 rounded border-l-4 border-amber-500 flex justify-between items-center">
            <div>
              <span className="font-bold text-amber-300">২. ধাতুমল গঠন অঞ্চল (৮০০° - ১০০০°C):</span>
              <span className="text-slate-400 ml-2 font-mono">CaCO₃ ⟶ CaO + CO₂ ; CaO + SiO₂ ⟶ CaSiO₃</span>
            </div>
            <span className="text-[10px] text-amber-400">ধাতুমল (Slag) নিষ্কাশন</span>
          </div>

          <div className="p-2 bg-slate-900 rounded border-l-4 border-rose-500 flex justify-between items-center">
            <div>
              <span className="font-bold text-rose-300">৩. দহন অঞ্চল (১৫০০° - ১৯০০°C):</span>
              <span className="text-slate-400 ml-2 font-mono">C + O₂ ⟶ CO₂ + তাপ ; CO₂ + C ⟶ 2CO</span>
            </div>
            <span className="text-[10px] text-rose-400">গলিত পিগ আয়রন নির্গমন</span>
          </div>
        </div>

        <div className="p-2 bg-slate-900/60 rounded text-[11px] text-slate-400 flex items-center justify-between">
          <span>বাত্যাচুল্লির তলায় গলিত লোহা ঘন হওয়ায় নিচে জমা হয় এবং ধাতুমল (CaSiO₃) হালকা হওয়ায় উপরে ভাসে।</span>
          <span className="text-orange-400 font-mono">Fe(l) ও CaSiO₃</span>
        </div>
      </div>
    );
  }

  if (type === 'hallHeroultAluminium') {
    return (
      <div className="w-full h-full min-h-[300px] bg-slate-950 p-4 rounded-xl border border-sky-500/30 flex flex-col justify-between text-slate-100 select-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-sky-400" />
            <span className="font-bold text-xs text-sky-300">হল-হেরল্ট প্রণালীতে অ্যালুমিনিয়াম নিষ্কাশন ও তড়িৎ বিশ্লেষণ</span>
          </div>
          <span className="text-[10px] font-mono text-sky-400">Hall-Héroult Smelter</span>
        </div>

        <div className="grid grid-cols-2 gap-3 my-2 text-xs">
          <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 space-y-1.5 font-mono">
            <div className="text-amber-400 font-bold">তড়িৎ বিশ্লেষ্য বাথ (৯৫০°C):</div>
            <div className="text-[11px] text-slate-300">• বক্সাইট Al₂O₃ (২০%)</div>
            <div className="text-[11px] text-slate-300">• ক্রায়োলাইট Na₃AlF₆ (৬০%)</div>
            <div className="text-[11px] text-slate-300">• ফ্লুরস্পার CaF₂ (২০%)</div>
            <div className="text-[10px] text-emerald-400">ক্রায়োলাইট গলনাঙ্ক ২০৫০°C থেকে ৯৫০°C এ নামিয়ে আনে।</div>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 space-y-1.5 font-mono">
            <div className="text-cyan-400 font-bold">ইলেকট্রোড বিক্রিয়া:</div>
            <div className="text-[11px] text-slate-300">ক্যাথোড (-): 2Al³⁺ + 6e⁻ ⟶ 2Al (গলিত)</div>
            <div className="text-[11px] text-slate-300">অ্যানোড (+): 6O²⁻ - 12e⁻ ⟶ 3O₂</div>
            <div className="text-[11px] text-rose-400">C(অ্যানোড) + O₂ ⟶ CO₂ (অ্যানোড ক্ষয় পায়)</div>
          </div>
        </div>

        <div className="p-2 bg-sky-950/40 rounded text-[11px] text-sky-200 border border-sky-900/60 flex items-center justify-between">
          <span>কার্বন অ্যানোড রডগুলো অক্সিজেনের সাথে বিক্রিয়া করে CO₂ হয়ে ক্ষয়প্রাপ্ত হয়, তাই এদের পর্যায়ক্রমে বদলাতে হয়।</span>
        </div>
      </div>
    );
  }

  // =========================================================================
  // CHAPTER 11: খনিজ সম্পদ — জীবাশ্ম (FOSSILS & HYDROCARBONS)
  // =========================================================================
  if (type === 'fractionalDistillationTower') {
    return (
      <div className="w-full h-full min-h-[300px] bg-slate-950 p-4 rounded-xl border border-purple-500/30 flex flex-col justify-between text-slate-100 select-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-purple-400" />
            <span className="font-bold text-xs text-purple-300">পেট্রোলিয়ামের আংশিক পাতন কলাম ও ভগ্নাংশসমূহের তালিকা</span>
          </div>
          <span className="text-[10px] font-mono text-purple-400">Crude Oil Fractions</span>
        </div>

        <div className="my-2 space-y-1 text-xs font-mono">
          <div className="p-1.5 bg-sky-950/60 rounded flex justify-between items-center text-sky-300">
            <span>১. পেট্রোলিয়াম গ্যাস (LPG, ২%)</span>
            <span>&lt; ২০°C | C₁ – C₄</span>
          </div>
          <div className="p-1.5 bg-emerald-950/60 rounded flex justify-between items-center text-emerald-300">
            <span>২. পেট্রোল বা গ্যাসোলিন (৫%)</span>
            <span>২১° – ৭০°C | C₅ – C₈ (গাড়ির জ্বালানি)</span>
          </div>
          <div className="p-1.5 bg-amber-950/60 rounded flex justify-between items-center text-amber-300">
            <span>৩. ন্যাপথা ও কেরোসিন (১৩%)</span>
            <span>৭১° – ১৭০°C | C₉ – C₁₂ (জেট বিমানের জ্বালানি)</span>
          </div>
          <div className="p-1.5 bg-orange-950/60 rounded flex justify-between items-center text-orange-300">
            <span>৪. ডিজেল তেল ও জ্বালানি তেল</span>
            <span>১৭১° – ৩৫০°C | C₁₃ – C₁₈</span>
          </div>
          <div className="p-1.5 bg-slate-900 rounded flex justify-between items-center text-slate-300">
            <span>৫. লুব্রিকেটিং তেল, প্যারাফিন মোম ও বিটুমিন</span>
            <span>&gt; ৩৫০°C | C₁₉ – C₇₀+ (রাস্তা পাকা করার পিচ)</span>
          </div>
        </div>

        <div className="p-2 bg-slate-900 rounded text-[11px] text-slate-400 flex items-center justify-between">
          <span>স্ফুটনাঙ্কের পার্থক্যের ওপর ভিত্তি করে হাইড্রোকার্বনের মিশ্রণকে পৃথক করাই আংশিক পাতন।</span>
          <span className="text-purple-400 font-bold">Boiling Point Separation</span>
        </div>
      </div>
    );
  }

  if (type === 'bromineTestUnsaturation') {
    return (
      <div className="w-full h-full min-h-[300px] bg-slate-950 p-4 rounded-xl border border-red-500/30 flex flex-col justify-between text-slate-100 select-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <FlaskConical className="h-4 w-4 text-red-400" />
            <span className="font-bold text-xs text-red-300">অসম্পৃক্ততার ব্রোমিন দ্রবণ পরীক্ষা ও বেয়ার পরীক্ষা</span>
          </div>
          <span className="text-[10px] text-red-400 font-mono">Br₂ / CCl₄ Test</span>
        </div>

        <div className="grid grid-cols-2 gap-3 my-2 text-xs">
          <div className="bg-slate-900/90 p-3 rounded-lg border border-red-500/40 space-y-2">
            <div className="text-red-400 font-bold">১. লাল ব্রোমিন দ্রবণ পরীক্ষা:</div>
            <div className="p-2 bg-slate-950 rounded font-mono text-[11px] text-cyan-300">
              CH₂=CH₂ + Br₂(লাল বর্ণ) ⟶ CH₂Br-CH₂Br (বর্ণহীন)
            </div>
            <div className="text-[11px] text-slate-400">
              ইথিনের দ্বিবন্ধন ভেঙে ১,২-ডাইব্রোমোইথেন তৈরি হওয়ায় ব্রোমিনের লাল বর্ণ দূরীভূত হয়। অ্যালকেন এ পরীক্ষা দেয় না।
            </div>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-lg border border-purple-500/40 space-y-2">
            <div className="text-purple-400 font-bold">২. ক্ষারীয় KMnO₄ বেয়ার পরীক্ষা:</div>
            <div className="p-2 bg-slate-950 rounded font-mono text-[11px] text-cyan-300">
              CH₂=CH₂ + H₂O + [O] (KMnO₄) ⟶ CH₂OH-CH₂OH
            </div>
            <div className="text-[11px] text-slate-400">
              KMnO₄ এর বেগুনী বর্ণ দূর হয়ে বর্ণহীন ইথিলিন গ্লাইকল উৎপন্ন হয়।
            </div>
          </div>
        </div>

        <div className="p-2 bg-slate-900 rounded text-[11px] text-slate-400 flex items-center justify-between">
          <span>বোর্ড পরীক্ষার জন্য অতি গুরুত্বপূর্ণ: ব্রোমিন বা KMnO₄ এর বর্ণ পরিবর্তন অসম্পৃক্ততার নিখুঁত প্রমাণ।</span>
        </div>
      </div>
    );
  }

  // =========================================================================
  // CHAPTER 12: আমাদের জীবনে রসায়ন (CHEMISTRY IN OUR LIVES)
  // =========================================================================
  if (type === 'soapMicelleCleaningMechanism') {
    return (
      <div className="w-full h-full min-h-[300px] bg-slate-950 p-4 rounded-xl border border-cyan-500/30 flex flex-col justify-between text-slate-100 select-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-cyan-400" />
            <span className="font-bold text-xs text-cyan-300">সাবানের মাইসেল (Micelle) গঠন ও ময়লা পরিষ্কারের মেকানিজম</span>
          </div>
          <span className="text-[10px] text-cyan-400 font-mono">Micelle Action</span>
        </div>

        <div className="grid grid-cols-2 gap-3 my-2 text-xs">
          <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 space-y-2">
            <div className="font-bold text-cyan-400">সাবান অণুর দ্বি-প্রান্তিক গঠন:</div>
            <div className="text-[11px] text-slate-300">
              <span className="text-emerald-400 font-bold">১. হাইড্রোফিলিক মাথা (-COO⁻ Na⁺):</span> পানি-আকর্ষী পোলার প্রান্ত যা পানির অণুর দিকে মুখ করে থাকে।
            </div>
            <div className="text-[11px] text-slate-300">
              <span className="text-amber-400 font-bold">২. হাইড্রোফোবিক লেজ (C₁₇H₃₅-):</span> পানি-বিকর্ষী অপোলার হাইড্রোকার্বন শিকল যা তেল/ময়লাকে আকর্ষণ করে।
            </div>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800 space-y-2">
            <div className="font-bold text-cyan-400">ময়লা অপসারণ ধাপ:</div>
            <div className="text-[11px] text-slate-300">
              অপোলার লেজগুলো তেল বা গ্রিজের কণার গভীরে প্রবেশ করে এবং পোলার মাথাগুলো বাইরে থেকে একটি গোলকাকার মাইসেল (Micelle) তৈরি করে।
            </div>
            <div className="text-[11px] text-emerald-400">
              পানি দিয়ে ধুয়ে ফেললে ঋণাত্মক আধানের বিকর্ষণে তেল কণা কাপড়ের তন্তু ছেড়ে পানিতে ভেসে ওঠে।
            </div>
          </div>
        </div>

        <div className="p-2 bg-slate-900 rounded text-[11px] text-slate-400 flex items-center justify-between">
          <span>খর পানিতে সাবান Ca²⁺/Mg²⁺ এর সাথে অদ্রবণীয় স্কাম গঠন করে ফেনা দেয় না; কিন্তু ডিটারজেন্ট চমৎকার ফেনা দেয়।</span>
        </div>
      </div>
    );
  }

  // Default fallback
  return (
    <div className="w-full h-full min-h-[300px] bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between text-slate-100 select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <span className="font-bold text-xs text-cyan-400">বৈজ্ঞানিক রসায়ন চার্ট ও বিক্রিয়া ডায়াগ্রাম</span>
        <span className="text-[10px] text-slate-400 font-mono">Chemistry Master Vector</span>
      </div>
      <div className="p-4 bg-slate-900/90 rounded-lg border border-slate-800 text-xs font-mono text-center space-y-2">
        <div className="text-cyan-300 font-bold">{type}</div>
        <div className="text-slate-400 text-[11px]">এনসিটিবি এসএসসি রসায়ন পাঠ্যবইয়ের অধ্যায় ৯, ১০, ১১ ও ১২ এর সম্পূর্ণ বৈজ্ঞানিক রূপরেখা ও চিত্র প্রদর্শিত হচ্ছে।</div>
      </div>
      <div className="p-2 bg-slate-900/60 rounded text-[10px] text-slate-500 text-center font-mono">
        বোর্ড সৃজনশীল ও ব্যবহারিক পরীক্ষার জন্য প্রমিত ভেক্টর চিত্র
      </div>
    </div>
  );
};
