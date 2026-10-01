import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Flame, 
  Skull, 
  AlertTriangle, 
  Biohazard, 
  Radio, 
  Droplets, 
  Eye, 
  CheckCircle2, 
  XCircle, 
  Info, 
  RotateCcw,
  Sparkles,
  HeartPulse,
  Beaker
} from 'lucide-react';

interface HazardInfo {
  id: string;
  nameBn: string;
  nameEn: string;
  symbolDescriptionBn: string;
  symbolDescriptionEn: string;
  hazardNature: string;
  examples: string[];
  precautions: string;
  firstAid: string;
  color: string;
  borderColor: string;
}

export const LabSafetySimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'symbols' | 'ppe' | 'firstaid'>('symbols');
  const [selectedHazardId, setSelectedHazardId] = useState<string>('explosive');

  // PPE Checklist State
  const [ppeState, setPpeState] = useState<{ [key: string]: boolean }>({
    apron: false,
    goggles: false,
    gloves: false,
    shoes: false,
    mask: false
  });

  // First Aid Incident Selection
  const [incidentType, setIncidentType] = useState<'acid' | 'alkali' | 'eye' | 'fire'>('acid');

  const hazards: HazardInfo[] = [
    {
      id: 'explosive',
      nameBn: 'বিস্ফোরক পদার্থ',
      nameEn: 'Explosive Substance',
      symbolDescriptionBn: 'বিস্ফোরিত বোমা (Exploding Bomb)',
      symbolDescriptionEn: 'Exploding bomb silhouette',
      hazardNature: 'আঘাত, তীব্র ঘর্ষণ, স্ফুলিঙ্গ বা উত্তাপের সংস্পর্শে এলে প্রচণ্ড শব্দে বিস্ফোরিত হয়ে জানমালের বিপুল ক্ষতিসাধন করে।',
      examples: ['ট্রাইনাইট্রোটলুইন (TNT)', 'গানপাউডার', 'অ্যামোনিয়াম নাইট্রেট', 'জৈব পারঅক্সাইড (Organic Peroxides)'],
      precautions: 'কখনোই ঝাঁকুনি বা আঘাত দেওয়া যাবে না। তাপ ও অগ্নির উৎস থেকে বহুদূরে নিরাপদ ল্যাব ক্যাবিনেটে তালাবদ্ধ রাখতে হবে।',
      firstAid: 'বিস্ফোরণ ঘটলে অবিলম্বে ফায়ার অ্যালার্ম বাজিয়ে নিরাপদ বহির্গমন পথ দিয়ে বের হয়ে যান এবং অ্যাম্বুলেন্স ডাকুন।',
      color: 'text-amber-400 bg-amber-500/10',
      borderColor: 'border-amber-500/40'
    },
    {
      id: 'flammable',
      nameBn: 'দাহ্য পদার্থ',
      nameEn: 'Flammable Substance',
      symbolDescriptionBn: 'প্রজ্বলিত অগ্নিশিখা (Flame)',
      symbolDescriptionEn: 'Flaming fire pictogram',
      hazardNature: 'খুব কম তাপমাত্রায় (নিম্ন ফ্ল্যাশপয়েন্ট) বায়ুর অক্সিজেনের উপস্থিতিতে সহজেই দাউ দাউ করে আগুন ধরে যায়।',
      examples: ['ইথানল (অ্যালকোহল)', 'ডাইইথাইল ইথার', 'পেট্রোলিয়াম ইথার', 'অ্যাসিটোন', 'এলপিজি গ্যাস'],
      precautions: 'স্পিরিট ল্যাম্প, বুনসেন বার্নার বা বৈদ্যুতিক হিটারের কাছাকাছি রাখা সম্পূর্ণ নিষিদ্ধ। ব্যবহারের পর সাথে সাথে ঢাকনা বন্ধ করতে হবে।',
      firstAid: 'আগুন লাগলে ফায়ার কম্বল (Fire Blanket) বা কার্বন ডাই-অক্সাইড ফোম অগ্নি নির্বাপক ব্যবহার করে বাতাস আটকে আগুন নেভান।',
      color: 'text-orange-400 bg-orange-500/10',
      borderColor: 'border-orange-500/40'
    },
    {
      id: 'oxidizing',
      nameBn: 'জারক পদার্থ',
      nameEn: 'Oxidizing Substance',
      symbolDescriptionBn: 'বৃত্তের ওপর শিখা (Flame Over Circle)',
      symbolDescriptionEn: 'Flame over circle (O for oxygen)',
      hazardNature: 'নিজেরা সরাসরি দাহ্য নয়, কিন্তু দ্রুত অক্সিজেন সরবরাহ করে অন্যান্য জৈব ও দাহ্য পদার্থকে তীব্রভাবে জ্বলতে সহায়তা করে।',
      examples: ['পটাশিয়াম পারম্যাঙ্গানেট (KMnO₄)', 'ক্লোরিন গ্যাস (Cl₂)', 'গাঢ় হাইড্রোজেন পারঅক্সাইড (H₂O₂)', 'গাঢ় নাইট্রিক এসিড'],
      precautions: 'কোনোভাবেই দাহ্য পদার্থ বা জৈব দ্রাবকের সাথে একত্রে সংরক্ষণ করা যাবে না। আলাদা রাসায়নিক তাকে রাখতে হবে।',
      firstAid: 'অন্য পদার্থের সংস্পর্শে তীব্র দহন শুরু হলে প্রচুর পানি বা বালি ছিটিয়ে অক্সিজেন সরবরাহ বিচ্ছিন্ন করুন।',
      color: 'text-yellow-400 bg-yellow-500/10',
      borderColor: 'border-yellow-500/40'
    },
    {
      id: 'toxic',
      nameBn: 'বিষাক্ত পদার্থ',
      nameEn: 'Toxic Substance',
      symbolDescriptionBn: 'মাথার খুলি ও আড়াআড়ি হাড় (Skull & Crossbones)',
      symbolDescriptionEn: 'Human skull and crossed bones',
      hazardNature: 'শ্বাস-প্রশ্বাস, মুখ বা ত্বকের ক্ষতের মাধ্যমে শরীরে প্রবেশ করলে তাৎক্ষণিক বিষক্রিয়া, অঙ্গহানি বা মৃত্যু ঘটে।',
      examples: ['মিথানল (Wood Alcohol, CH₃OH)', 'ক্লোরোবেনজিন', 'পটাশিয়াম সায়ানাইড (KCN)', 'কার্বন মনোক্সাইড (CO)'],
      precautions: 'কখনোই মুখ দিয়ে পিপেট টানবেন না (রাবার বাল্ব ব্যবহার্য)। ফিউমহুডের ভেতর মাস্ক, চশমা ও গ্লাভস পরে কাজ করতে হবে।',
      firstAid: 'ভুলবশত বিষাক্ত পদার্থ গিলে ফেললে রোগীকে বমি করানোর চেষ্টা না করে তাৎক্ষণিক অ্যান্টিডোটসহ হাসপাতালে নিন।',
      color: 'text-rose-400 bg-rose-500/10',
      borderColor: 'border-rose-500/40'
    },
    {
      id: 'health_hazard',
      nameBn: 'স্বাস্থ্য ঝুঁকিপূর্ণ (কার্সিনোজেন)',
      nameEn: 'Health Hazard / Carcinogen',
      symbolDescriptionBn: 'বুক ফাটা তারকাবহুল মানব অবয়ব (Silhouette)',
      symbolDescriptionEn: 'Human chest burst silhouette',
      hazardNature: 'দীর্ঘমেয়াদে শ্বাস বা ত্বকে গেলে ক্যান্সার সৃষ্টি করে (Carcinogen), বংশগতির ডিএনএ নষ্ট করে বা প্রজনন ক্ষমতা বিনষ্ট করে।',
      examples: ['বেনজিন (C₆H₆)', 'টলুইন', 'অ্যাসবেস্টস তন্তু', 'সীসা (Pb) ও ক্যাডমিয়াম (Cd) যৌগ'],
      precautions: 'বাতাসে এদের বাষ্প ছড়াতে দেওয়া যাবে না। সবসময় সক্রিয় ফিউমহুড ও এন-৯৫ বা রেসপিরেটর মাস্ক পরিধান করতে হবে।',
      firstAid: 'অসুস্থ বোধ করলে সাথে সাথে রোগীকে ল্যাব থেকে খোলা তাজা বাতাসে নিয়ে গিয়ে গভীর শ্বাস নিতে বলুন।',
      color: 'text-purple-400 bg-purple-500/10',
      borderColor: 'border-purple-500/40'
    },
    {
      id: 'corrosive',
      nameBn: 'ক্ষয়কারী পদার্থ',
      nameEn: 'Corrosive Substance',
      symbolDescriptionBn: 'টিউব হতে হাত ও ধাতুতে তরল পড়া (Corrosion)',
      symbolDescriptionEn: 'Liquid pouring on hand and steel',
      hazardNature: 'জীবন্ত ত্বকের সংস্পর্শে এলে চামড়া পুড়ে মারাত্মক রাসায়নিক ক্ষত হয় এবং ধাতু, মেঝে ও কাচ দ্রুত ক্ষয় করে ফুটো করে।',
      examples: ['গাঢ় সালফিউরিক এসিড (H₂SO₄)', 'গাঢ় হাইড্রোক্লোরিক এসিড (HCl)', 'গাঢ় সোডিয়াম হাইড্রোক্সাইড (কস্টিক সোডা, NaOH)'],
      precautions: 'সর্বদা পুরু রাবার গ্লাভস, গগলস ও ল্যাব কোট পরতে হবে। কখনো এসিডে পানি ঢালা যাবে না, পানিতে এসিড ঢালতে হবে।',
      firstAid: 'ত্বকে লাগলে কালক্ষেপণ না করে অন্তত ১৫ মিনিট প্রচুর প্রবাহিত পানিতে ধুয়ে ৫% সোডিয়াম বাইকার্বনেট দ্রবণ দিন।',
      color: 'text-cyan-400 bg-cyan-500/10',
      borderColor: 'border-cyan-500/40'
    },
    {
      id: 'radioactive',
      nameBn: 'তেজস্ক্রিয় পদার্থ',
      nameEn: 'Radioactive Substance',
      symbolDescriptionBn: 'ট্রিফয়েল তিন পাখাওয়ালা পাখা (Trefoil)',
      symbolDescriptionEn: 'International ionizing radiation trefoil',
      hazardNature: 'নিউক্লিয়াস হতে স্বতঃস্ফূর্তভাবে উচ্চ ভেদনক্ষম আলফা, বিটা ও গামা রশ্মি বিকিরণ করে জীবকোষ ও ডিএনএ সম্পূর্ণরূপে ধ্বংস করে।',
      examples: ['ইউরেনিয়াম (²³⁸U)', 'রেডিয়াম (²²⁶Ra)', 'কোবাল্ট-৬০ (⁶⁰Co)', 'প্লুটোনিয়াম (²³⁹Pu)'],
      precautions: 'পুরু ভারী সীসার (Lead) পাত্রের মধ্যে সংরক্ষণ করতে হবে। বিশেষ লেড-লাইনড স্যুট ও রেডিয়েশন ব্যাজ ছাড়া প্রবেশ নিষিদ্ধ।',
      firstAid: 'রেডিয়েশন লিকেজ ঘটলে অবিলম্বে পুরো ভবন খালি করে ন্যাশনাল নিউক্লিয়ার ইমার্জেন্সি টিমকে অবহিত করতে হবে।',
      color: 'text-lime-400 bg-lime-500/10',
      borderColor: 'border-lime-500/40'
    },
    {
      id: 'eco_hazard',
      nameBn: 'পরিবেশের জন্য ক্ষতিকর',
      nameEn: 'Environmental Hazard',
      symbolDescriptionBn: 'মৃত বৃক্ষ ও উল্টানো জলজ মাছ (Dead Tree & Fish)',
      symbolDescriptionEn: 'Dead tree and dead fish eco-hazard',
      hazardNature: 'মাটি ও পানিতে মিশলে জলজ জীব ও উদ্ভিদের বিপুল বিনাশ ঘটায় এবং খাদ্যশৃঙ্খলে প্রবেশ করে মানুষের কিডনি ও লিভার নষ্ট করে।',
      examples: ['পারদ বা মার্কারি (Hg)', 'লেড বা সীসা (Pb)', 'কীটনাশক ডিডিটি (DDT)', 'কপার সালফেট দ্রবণ'],
      precautions: 'কখনোই ড্রেন বা সাধারণ পানিতে ফেলা যাবে না। নির্দিষ্ট হ্যাজার্ডাস বর্জ্য বোতলে সংগ্রহ করে বিশেষ উপায়ে নিষ্ক্রিয় করতে হবে।',
      firstAid: 'পরিবেশে ছড়িয়ে পড়লে মাটি বা শোষক তুলা দিয়ে দ্রুত আটকে ফেলতে হবে যাতে কোনো ভূগর্ভস্থ ড্রেনে ঢুকতে না পারে।',
      color: 'text-emerald-400 bg-emerald-500/10',
      borderColor: 'border-emerald-500/40'
    }
  ];

  const selectedHazard = hazards.find(h => h.id === selectedHazardId) || hazards[0];

  const allPpeCompleted = Object.values(ppeState).every(v => v);

  return (
    <div className="mx-auto max-w-7xl p-4 md:p-6 lg:p-8 space-y-6">
      {/* Title */}
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-semibold text-cyan-400">অধ্যায় ১ ইন্টারঅ্যাক্টিভ ল্যাব</span>
          <span aria-hidden="true">·</span>
          <span>রাসায়নিক ঝুঁকির মাত্রা ও সতর্কতা সংকেত</span>
          <span aria-hidden="true">·</span>
          <span>ল্যাবরেটরি সুরক্ষা বিধি</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              ল্যাবরেটরি নিরাপত্তা ও জিএইচএস হ্যাজার্ড সিম্বলস ল্যাব
            </h1>
            <p className="text-sm text-slate-300 max-w-3xl mt-1">
              আন্তর্জাতিক জিএইচএস (GHS) রাসায়নিক ঝুঁকি প্রতীকসমূহ, সুরক্ষা সরঞ্জাম (PPE) এবং ল্যাবরেটরি রাসায়নিক দুর্ঘটনার তাৎক্ষণিক প্রাথমিক চিকিৎসা অনুশীলন করুন।
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs shrink-0">
            <button
              onClick={() => setActiveTab('symbols')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                activeTab === 'symbols'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ঝুঁকি প্রতীক গ্যালারি
            </button>
            <button
              onClick={() => setActiveTab('ppe')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                activeTab === 'ppe'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              সুরক্ষা সরঞ্জাম (PPE)
            </button>
            <button
              onClick={() => setActiveTab('firstaid')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                activeTab === 'firstaid'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              প্রাথমিক চিকিৎসা
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Hazard Symbols Gallery */}
      {activeTab === 'symbols' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: 8 Interactive GHS Pictogram Tiles (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-950 p-5 space-y-3 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-cyan-400" />
                <span>জাতিসংঘ অনুমোদিত জিএইচএস প্রতীক</span>
              </h3>
              <span className="text-[11px] text-slate-400">ক্লিক করে বিবরণ দেখুন</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {hazards.map((h) => {
                const isSelected = selectedHazardId === h.id;
                return (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHazardId(h.id)}
                    className={`p-3 rounded-xl border text-left transition flex flex-col justify-between h-28 relative overflow-hidden ${
                      isSelected
                        ? `${h.color} ${h.borderColor} ring-1 ring-cyan-400 font-bold shadow-lg scale-102`
                        : 'bg-slate-900 hover:bg-slate-850 text-slate-300 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[10px] font-mono opacity-80 uppercase tracking-wider">{h.nameEn}</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                    </div>
                    <div>
                      <strong className="text-xs sm:text-sm text-white block">{h.nameBn}</strong>
                      <span className="text-[10px] text-slate-400 block truncate">{h.symbolDescriptionBn}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Hazard Card & Precautions (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 space-y-4 shadow-2xl">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block font-mono">
                  {selectedHazard.nameEn} · GHS Standard
                </span>
                <h2 className="text-xl md:text-2xl font-black text-white mt-0.5">
                  {selectedHazard.nameBn}
                </h2>
                <span className="text-xs text-slate-400">
                  আন্তর্জাতিক প্রতীক: <strong className="text-slate-200">{selectedHazard.symbolDescriptionBn}</strong>
                </span>
              </div>

              <div className={`px-3 py-1.5 rounded-xl border font-bold text-xs ${selectedHazard.color} ${selectedHazard.borderColor}`}>
                {selectedHazard.nameBn}
              </div>
            </div>

            {/* Nature of Hazard */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-rose-400 flex items-center gap-1.5 uppercase tracking-wider">
                <AlertTriangle className="h-4 w-4" />
                <span>ঝুঁকির সম্ভাব্য প্রকৃতি ও তীব্রতা:</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {selectedHazard.hazardNature}
              </p>
            </div>

            {/* Real World Chemical Examples */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-300 block uppercase tracking-wider">
                বাস্তব রাসায়নিক উদাহরণ (Example Chemicals):
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedHazard.examples.map((ex, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300 font-mono text-xs font-semibold"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </div>

            {/* Precautions */}
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 uppercase tracking-wider">
                <CheckCircle2 className="h-4 w-4" />
                <span>ল্যাবরেটরি সতর্কতা ও সঠিক সংরক্ষণ নিয়ম:</span>
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedHazard.precautions}
              </p>
            </div>

            {/* Emergency First Aid */}
            <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/10 space-y-1 text-xs">
              <span className="font-bold text-amber-300 flex items-center gap-1.5 uppercase tracking-wider">
                <HeartPulse className="h-4 w-4" />
                <span>জরুরি অবস্থায় তাৎক্ষণিক প্রাথমিক চিকিৎসা (First Aid):</span>
              </span>
              <p className="text-slate-200 leading-relaxed">
                {selectedHazard.firstAid}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: PPE (Personal Protective Equipment) Checklist */}
      {activeTab === 'ppe' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-950 p-6 space-y-5 shadow-2xl">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-cyan-400" />
                <span>ল্যাবরেটরিতে প্রবেশের পূর্বে ব্যক্তিগত সুরক্ষা সরঞ্জাম (PPE) চেকলিস্ট</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                নিরাপদে রসায়নাগারে পরীক্ষা করার জন্য নিচের প্রতিটি সুরক্ষা সামগ্রী পরিধান করে নিশ্চিত করুন
              </p>
            </div>

            <div className="space-y-3">
              {[
                { id: 'apron', title: '১০০% সুতি এপ্রন (Cotton Lab Coat)', desc: 'সিনথেটিক মুক্ত সুতি এপ্রন শরীরে ক্ষয়কারী এসিড ছিটকে আসা রোধ করে এবং এতে সহজে আগুন ধরে না।' },
                { id: 'goggles', title: 'নিরাপত্তা চশমা (Safety Goggles)', desc: 'সাধারণ চশমার বদলে চোখের চারপাশ সম্পূর্ণ আবদ্ধ রাখে এমন গগলস পরা আবশ্যক, যাতে বিষাক্ত বাষ্প বা দ্রবণ ছিটকে না পড়ে।' },
                { id: 'gloves', title: 'নাইট্রাইল হ্যান্ড গ্লাভস (Nitrile Gloves)', desc: 'ক্ষয়কারী এসিড, ক্ষার বা বিষাক্ত জৈব দ্রাবক থেকে হাতের ত্বককে পুরোপুরি সুরক্ষিত রাখে।' },
                { id: 'shoes', title: 'বদ্ধ জুতো (Closed-toe Shoes)', desc: 'স্যান্ডেল পরিহার্য; ভারী কাচপাত্র বা দ্রবণ মেঝেতে পড়লে পায়ের সুরক্ষা নিশ্চিত করে।' },
                { id: 'mask', title: 'ল্যাবরেটরি সুরক্ষা মাস্ক (Safety Mask)', desc: 'উদ্বায়ী রাসায়নিক বাষ্প, ঝাঁঝালো গ্যাস বা ধোঁয়া ফুসফুসে প্রবেশে বাধা দেয়।' }
              ].map((item) => {
                const checked = ppeState[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => setPpeState(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                    className={`w-full p-4 rounded-xl border text-left transition flex items-start justify-between gap-3 ${
                      checked
                        ? 'bg-emerald-500/10 border-emerald-500/50 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="space-y-1">
                      <strong className={`text-sm block ${checked ? 'text-emerald-300 font-bold' : 'text-slate-200'}`}>
                        {item.title}
                      </strong>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>

                    <div className={`w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${
                      checked ? 'bg-emerald-500 border-emerald-400 text-slate-950 font-bold' : 'border-slate-700 bg-slate-950'
                    }`}>
                      {checked && <CheckCircle2 className="h-4 w-4" />}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setPpeState({ apron: false, goggles: false, gloves: false, shoes: false, mask: false })}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 text-slate-300 text-xs hover:bg-slate-800 transition"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>সব চেকলিস্ট রিসেট</span>
              </button>

              <button
                onClick={() => setPpeState({ apron: true, goggles: true, gloves: true, shoes: true, mask: true })}
                className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition"
              >
                সবগুলো পরিধান করুন
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 space-y-4 shadow-xl">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span>ল্যাবরেটরি প্রস্তুতি স্ট্যাটাস</span>
            </h3>

            <div className={`p-6 rounded-xl border text-center space-y-3 ${
              allPpeCompleted 
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300' 
                : 'bg-amber-500/10 border-amber-500/40 text-amber-300'
            }`}>
              <div className="inline-flex p-3 rounded-full bg-slate-950 border border-slate-800">
                {allPpeCompleted ? (
                  <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                ) : (
                  <AlertTriangle className="h-8 w-8 text-amber-400" />
                )}
              </div>
              <strong className="text-base block">
                {allPpeCompleted ? 'আপনি ল্যাব পরীক্ষার জন্য সম্পূর্ণ প্রস্তুত!' : 'সুরক্ষা সরঞ্জাম অসম্পূর্ণ'}
              </strong>
              <p className="text-xs text-slate-300">
                {allPpeCompleted 
                  ? 'সকল প্রয়োজনীয় পিপিই যথাযথভাবে পরিধান করা হয়েছে। এখন নিরাপদে ল্যাবরেটরিতে প্রবেশ করা যেতে পারে।' 
                  : 'ল্যাবে প্রবেশ করার পূর্বে চেকলিস্টের বাকি সরঞ্জামগুলো নিশ্চিতভাবে পরিধান করুন।'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Emergency First Aid Protocol */}
      {activeTab === 'firstaid' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              দুর্ঘটনার ধরন নির্বাচন করুন:
            </h3>

            {[
              { id: 'acid', title: '১. ত্বকে গাঢ় এসিড পড়লে', icon: Droplets, color: 'text-rose-400' },
              { id: 'alkali', title: '২. ত্বকে গাঢ় ক্ষার (NaOH) পড়লে', icon: Beaker, color: 'text-cyan-400' },
              { id: 'eye', title: '৩. চোখে কেমিক্যাল ছিটকে পড়লে', icon: Eye, color: 'text-amber-400' },
              { id: 'fire', title: '৪. পোশাকে আগুন লাগলে', icon: Flame, color: 'text-orange-400' }
            ].map((inc) => {
              const isSelected = incidentType === inc.id;
              const Icon = inc.icon;
              return (
                <button
                  key={inc.id}
                  onClick={() => setIncidentType(inc.id as any)}
                  className={`w-full p-4 rounded-xl border text-left transition flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400 text-white font-bold shadow-md'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`h-5 w-5 ${inc.color}`} />
                    <span className="text-sm">{inc.title}</span>
                  </div>
                  <span className="text-xs font-mono opacity-60">বিস্তারিত ➔</span>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 space-y-4 shadow-xl">
            {incidentType === 'acid' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Droplets className="h-6 w-6 text-rose-400" />
                  <div>
                    <h3 className="text-lg font-bold text-white">ত্বকে এসিড পড়লে করণীয়</h3>
                    <span className="text-xs text-slate-400">Emergency Protocol for Acid Burns</span>
                  </div>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <strong className="text-rose-400 block mb-1">ধাপ ১: তাৎক্ষণিক পানি দ্বারা ফ্লাশ</strong>
                    আক্রান্ত স্থানে অবিলম্বে অন্তত ১০ হতে ১৫ মিনিট প্রচুর পরিষ্কার প্রবাহিত ঠান্ডা পানি ঢালতে থাকুন।
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <strong className="text-cyan-400 block mb-1">ধাপ ২: মৃদু ক্ষার প্রয়োগ</strong>
                    পানি দিয়ে ধোয়ার পর আক্রান্ত স্থানে মৃদু ৫% সোডিয়াম বাইকার্বনেট (NaHCO₃ বা খাবার সোডা) দ্রবণ প্রয়োগ করুন।
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <strong className="text-amber-400 block mb-1">ধাপ ৩: চিকিৎসা সহায়তা</strong>
                    কোনো অবস্থাতেই গাঢ় ক্ষার ঢালবেন না। প্রাথমিক চিকিৎসার পর অবিলম্বে হাসপাতালে চিকিৎসকের পরামর্শ নিন।
                  </div>
                </div>
              </div>
            )}

            {incidentType === 'alkali' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Beaker className="h-6 w-6 text-cyan-400" />
                  <div>
                    <h3 className="text-lg font-bold text-white">ত্বকে ক্ষার (NaOH) পড়লে করণীয়</h3>
                    <span className="text-xs text-slate-400">Emergency Protocol for Alkali Burns</span>
                  </div>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <strong className="text-cyan-400 block mb-1">ধাপ ১: প্রচুর পানি প্রবাহ</strong>
                    ক্ষার চামড়ার গভীরে চর্বি দ্রবীভূত করে সাবান তৈরি করে, তাই অন্তত ১৫-২০ মিনিট একটানা পানি ঢালুন।
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <strong className="text-emerald-400 block mb-1">ধাপ ২: মৃদু এসিড প্রয়োগ</strong>
                    পানি দিয়ে ধোয়ার পর আক্রান্ত স্থানে ৫% বোরিক এসিড দ্রবণ বা লঘু ভিনেগার (অ্যাসিটিক এসিড) দিয়ে ক্ষার প্রশমিত করুন।
                  </div>
                </div>
              </div>
            )}

            {incidentType === 'eye' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Eye className="h-6 w-6 text-amber-400" />
                  <div>
                    <h3 className="text-lg font-bold text-white">চোখে রাসায়নিক দ্রবণ ছিটকে পড়লে</h3>
                    <span className="text-xs text-slate-400">Emergency Eye Wash Protocol</span>
                  </div>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <strong className="text-amber-400 block mb-1">আই-ওয়াশ স্টেশনে টানা ১৫ মিনিট ধৌতকরণ</strong>
                    চোখ হাত দিয়ে রগড়াবেন না। অবিলম্বে ল্যাবরেটরির আই-ওয়াশ ফোয়ারার মুখে চোখ মেলে ধরে একটানা ১৫ মিনিট মৃদু পানির প্রবাহে চোখ ধুয়ে ফেলুন। এরপর অবিলম্বে চক্ষু বিশেষজ্ঞের কাছে নিয়ে যান।
                  </div>
                </div>
              </div>
            )}

            {incidentType === 'fire' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                  <Flame className="h-6 w-6 text-orange-400" />
                  <div>
                    <h3 className="text-lg font-bold text-white">পোশাক বা শরীরে আগুন লাগলে</h3>
                    <span className="text-xs text-slate-400">Fire Safety Protocol</span>
                  </div>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <strong className="text-orange-400 block mb-1">থামুন, মাটিতে শুয়ে পড়ুন এবং গড়াগড়ি দিন (Stop, Drop & Roll)</strong>
                    দৌড়াদৌড়ি করবেন না, এতে বাতাসের অক্সিজেনে আগুন আরো তীব্র হয়। ফায়ার কম্বল দিয়ে শরীর দ্রুত জড়িয়ে ধরুন অথবা জরুরি নিরাপত্তা শাওয়ারের নিচে চলে যান।
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
