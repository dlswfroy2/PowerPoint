import React, { useState, useMemo } from 'react';
import { all118Trends, ElementTrend } from '../data/periodicTrendsData';
import { 
  TrendingUp, 
  TrendingDown, 
  Layers, 
  ArrowRight, 
  AlertCircle, 
  Sparkles, 
  Info,
  Scale,
  CircleDot,
  Search,
  ArrowLeftRight,
  Filter,
  CheckCircle2,
  Atom,
  HelpCircle
} from 'lucide-react';

export const PeriodicTrendsVisualizer: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<'radius' | 'ie' | 'en' | 'metallic'>('radius');
  const [viewType, setViewType] = useState<'period' | 'group' | 'special' | 'all'>('period');
  const [selectedPeriod, setSelectedPeriod] = useState<number>(3); // Period 3 (Na-Ar)
  const [selectedGroup, setSelectedGroup] = useState<number>(1); // Group 1 (Alkali)
  const [selectedSpecial, setSelectedSpecial] = useState<'lanthanide' | 'actinide'>('lanthanide');
  const [searchInAll, setSearchInAll] = useState<string>('');

  // Head-to-Head Compare state (Any two elements among 1 to 118)
  const [compareZ1, setCompareZ1] = useState<number>(7);  // N (Nitrogen)
  const [compareZ2, setCompareZ2] = useState<number>(8);  // O (Oxygen)

  // Property metadata
  const propertyInfo = {
    radius: {
      titleBn: 'পারমাণবিক আকার বা ব্যাসার্ধ (Atomic Radius)',
      unit: 'pm (পিকোমিটার)',
      description: 'পরমাণুর কেন্দ্রস্থ নিউক্লিয়াস থেকে বহিঃস্থ স্তরের ইলেকট্রনের গড় দূরত্ব। একই পর্যায়ে বাম থেকে ডানে আকার হ্রাস পায় এবং একই গ্রুপে উপর থেকে নিচে আকার বৃদ্ধি পায়।',
      trendPeriod: 'বাম থেকে ডানে হ্রাস পায় (↓)',
      trendGroup: 'উপর থেকে নিচে বৃদ্ধি পায় (↑)',
      icon: CircleDot,
      color: 'text-cyan-400',
      barColor: 'bg-cyan-500',
      badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
    },
    ie: {
      titleBn: 'প্রথম আয়নীকরণ শক্তি (First Ionization Energy)',
      unit: 'kJ/mol',
      description: 'গ্যাসীয় অবস্থায় ১ মোল বিচ্ছিন্ন পরমাণু থেকে ১ মোল ইলেকট্রন অপসারণ করে একক ধনাত্মক আয়নে রূপান্তর করতে প্রয়োজনীয় শক্তি। সাধারণত পর্যায়ে বাড়ে এবং গ্রুপে কমে।',
      trendPeriod: 'বাম থেকে ডানে বৃদ্ধি পায় (↑)',
      trendGroup: 'উপর থেকে নিচে হ্রাস পায় (↓)',
      icon: TrendingUp,
      color: 'text-amber-400',
      barColor: 'bg-amber-500',
      badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40'
    },
    en: {
      titleBn: 'তড়িৎ ঋণাত্মকতা (Electronegativity - Pauling)',
      unit: 'পলিং স্কেল (Pauling)',
      description: 'সমযোজী বন্ধনের ইলেকট্রন যুগলকে কোনো পরমাণু কর্তৃক নিজের দিকে আকর্ষণ করার আপেক্ষিক ক্ষমতা। ফ্লোরিন (৪.০) সর্বাধিক।',
      trendPeriod: 'বাম থেকে ডানে বৃদ্ধি পায় (↑)',
      trendGroup: 'উপর থেকে নিচে হ্রাস পায় (↓)',
      icon: TrendingUp,
      color: 'text-emerald-400',
      barColor: 'bg-emerald-500',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
    },
    metallic: {
      titleBn: 'ধাতব ধর্ম (Metallic Character)',
      unit: 'আপেক্ষিক সূচক (০ - ১০)',
      description: 'সহজে ইলেকট্রন ত্যাগ করে ধনাত্মক আয়নে পরিণত হওয়ার প্রবণতা। পর্যায় সারণির নিচের বাম কোণে ধাতব ধর্ম সর্বোচ্চ।',
      trendPeriod: 'বাম থেকে ডানে হ্রাস পায় (↓)',
      trendGroup: 'উপর থেকে নিচে বৃদ্ধি পায় (↑)',
      icon: TrendingDown,
      color: 'text-rose-400',
      barColor: 'bg-rose-500',
      badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/40'
    }
  };

  // Filter current dataset based on viewType
  const currentDataset = useMemo(() => {
    if (viewType === 'period') {
      return all118Trends.filter((el) => el.period === selectedPeriod);
    }
    if (viewType === 'group') {
      return all118Trends.filter((el) => el.group === selectedGroup);
    }
    if (viewType === 'special') {
      if (selectedSpecial === 'lanthanide') {
        return all118Trends.filter((el) => el.z >= 57 && el.z <= 71);
      }
      return all118Trends.filter((el) => el.z >= 89 && el.z <= 103);
    }
    // All 118 elements with search
    const q = searchInAll.trim().toLowerCase();
    if (!q) return all118Trends;
    return all118Trends.filter(
      (el) =>
        el.symbol.toLowerCase().includes(q) ||
        el.nameBn.toLowerCase().includes(q) ||
        el.nameEn.toLowerCase().includes(q) ||
        el.z.toString() === q ||
        el.category.toLowerCase().includes(q)
    );
  }, [viewType, selectedPeriod, selectedGroup, selectedSpecial, searchInAll]);

  // Max value in current dataset for relative bar calculation
  const maxVal = useMemo(() => {
    const vals = currentDataset.map((d) => d[selectedProperty]);
    return Math.max(1, ...vals);
  }, [currentDataset, selectedProperty]);

  // Comparison elements
  const el1 = all118Trends.find((e) => e.z === compareZ1) || all118Trends[6]; // N
  const el2 = all118Trends.find((e) => e.z === compareZ2) || all118Trends[7]; // O

  const swapComparison = () => {
    const temp = compareZ1;
    setCompareZ1(compareZ2);
    setCompareZ2(temp);
  };

  // Group names dictionary for easy display
  const groupNames: Record<number, string> = {
    1: 'গ্রুপ ১ (ক্ষার ধাতু)',
    2: 'গ্রুপ ২ (মৃৎক্ষার ধাতু)',
    3: 'গ্রুপ ৩ (Sc, Y, La, Ac)',
    4: 'গ্রুপ ৪ (Ti, Zr, Hf, Rf)',
    5: 'গ্রুপ ৫ (V, Nb, Ta, Db)',
    6: 'গ্রুপ ৬ (Cr, Mo, W, Sg)',
    7: 'গ্রুপ ৭ (Mn, Tc, Re, Bh)',
    8: 'গ্রুপ ৮ (Fe, Ru, Os, Hs)',
    9: 'গ্রুপ ৯ (Co, Rh, Ir, Mt)',
    10: 'গ্রুপ ১০ (Ni, Pd, Pt, Ds)',
    11: 'গ্রুপ ১১ (মুদ্রা ধাতু Cu, Ag, Au)',
    12: 'গ্রুপ ১২ (Zn, Cd, Hg, Cn)',
    13: 'গ্রুপ ১৩ (বোরন পরিবার)',
    14: 'গ্রুপ ১৪ (কার্বন পরিবার)',
    15: 'গ্রুপ ১৫ (নিকটোজেন N, P, As...)',
    16: 'গ্রুপ ১৬ (চ্যালকোজেন O, S, Se...)',
    17: 'গ্রুপ ১৭ (হ্যালোজেন পরিবার F, Cl...)',
    18: 'গ্রুপ ১৮ (নিষ্ক্রিয় গ্যাস He, Ne...)',
  };

  // Automated scientific analysis generator for any two elements
  const generateComparisonAnalysis = (a: ElementTrend, b: ElementTrend) => {
    if (a.z === b.z) {
      return 'অনুগ্রহ করে দুটি ভিন্ন মৌল নির্বাচন করুন।';
    }

    const points: string[] = [];

    // 1. Position relation
    if (a.period === b.period) {
      points.push(`• অবস্থান: দুটি মৌলই একই ${a.period} নম্বর পর্যায়ে অবস্থান করছে। বাম থেকে ডানে প্রোটন বৃদ্ধির সাথে সাথে কার্যকরী নিউক্লীয় চার্জ বৃদ্ধি পায়।`);
    } else if (a.group === b.group) {
      points.push(`• অবস্থান: দুটি মৌলই একই ${a.group} নম্বর গ্রুপে অবস্থান করছে। উপর থেকে নিচে একটি করে নতুন শক্তিস্তর (Shell) যুক্ত হয়।`);
    } else {
      points.push(`• অবস্থান: ${a.nameBn} পর্যায় ${a.period}, গ্রুপ ${a.group}-এ এবং ${b.nameBn} পর্যায় ${b.period}, গ্রুপ ${b.group}-এ অবস্থিত।`);
    }

    // 2. Atomic Radius
    if (a.radius > b.radius) {
      const diff = a.radius - b.radius;
      points.push(`• পারমাণবিক আকার: ${a.nameBn} (${a.radius} pm)-এর আকার ${b.nameBn} (${b.radius} pm)-এর চেয়ে ${diff} pm বড়। ${
        a.period > b.period 
          ? `কারণ ${a.nameBn}-এ অধিক সংখ্যক প্রধান শক্তিস্তর বিদ্যমান।` 
          : `কারণ ${b.nameBn}-এর নিউক্লিয়াসে প্রোটন বেশি থাকায় ইলেকট্রন মেঘ কেন্দ্রের দিকে অধিক সংকুচিত হয়।`
      }`);
    } else if (b.radius > a.radius) {
      const diff = b.radius - a.radius;
      points.push(`• পারমাণবিক আকার: ${b.nameBn} (${b.radius} pm)-এর আকার ${a.nameBn} (${a.radius} pm)-এর চেয়ে ${diff} pm বড়। ${
        b.period > a.period 
          ? `কারণ ${b.nameBn}-এ অধিক সংখ্যক প্রধান শক্তিস্তর বিদ্যমান।` 
          : `কারণ ${a.nameBn}-এর নিউক্লিয়াসে প্রোটন বেশি থাকায় ইলেকট্রন মেঘ কেন্দ্রের দিকে অধিক সংকুচিত হয়।`
      }`);
    } else {
      points.push(`• পারমাণবিক আকার: উভয়ের আকার প্রায় সমান (${a.radius} pm)।`);
    }

    // 3. Ionization Energy & Anomalies
    if ((a.symbol === 'N' && b.symbol === 'O') || (a.symbol === 'O' && b.symbol === 'N')) {
      points.push(`• আয়নীকরণ শক্তির বিশেষ ব্যতিক্রম: নাইট্রোজেনের (N) আকার অক্সিজেনের (O) চেয়ে বড় হওয়া সত্ত্বেও নাইট্রোজেনের ১ম আয়নীকরণ শক্তি (${Math.max(a.ie, b.ie)} kJ/mol) অক্সিজেনের (${Math.min(a.ie, b.ie)} kJ/mol) চেয়ে বেশি! কারণ নাইট্রোজেনের 2p³ উপস্তরটি অর্ধপূর্ণ (Half-filled), যা অতিরিক্ত কোয়ান্টাম স্থিতিশীলতা প্রদান করে।`);
    } else if ((a.symbol === 'Be' && b.symbol === 'B') || (a.symbol === 'B' && b.symbol === 'Be')) {
      points.push(`• আয়নীকরণ শক্তির বিশেষ ব্যতিক্রম: বেরিলিয়ামের (Be) 2s² উপস্তরটি পূর্ণ ও সুস্থিত হওয়ায় এর আয়নীকরণ শক্তি (${Math.max(a.ie, b.ie)} kJ/mol) বোরন (B: ${Math.min(a.ie, b.ie)} kJ/mol)-এর চেয়ে বেশি।`);
    } else if ((a.symbol === 'P' && b.symbol === 'S') || (a.symbol === 'S' && b.symbol === 'P')) {
      points.push(`• আয়নীকরণ শক্তির বিশেষ ব্যতিক্রম: ফসফরাসের (P) 3p³ উপস্তরটি অর্ধপূর্ণ হওয়ায় এর আয়নীকরণ শক্তি সালফার (S)-এর চেয়ে বেশি।`);
    } else if (a.ie > b.ie) {
      points.push(`• আয়নীকরণ শক্তি: ${a.nameBn} (${a.ie} kJ/mol) থেকে সর্ববহিঃস্থ ইলেকট্রন অপসারন করতে ${b.nameBn} (${b.ie} kJ/mol)-এর চেয়ে বেশি শক্তির প্রয়োজন হয়।`);
    } else {
      points.push(`• আয়নীকরণ শক্তি: ${b.nameBn} (${b.ie} kJ/mol) থেকে সর্ববহিঃস্থ ইলেকট্রন অপসারন করতে ${a.nameBn} (${a.ie} kJ/mol)-এর চেয়ে বেশি শক্তির প্রয়োজন হয়।`);
    }

    // 4. Electronegativity & Electron Affinity
    if (a.en > b.en) {
      points.push(`• তড়িৎ ঋণাত্মকতা: সমযোজী বন্ধনের ইলেকট্রন যুগলকে ${a.nameBn} (${a.en}) নিজের দিকে ${b.nameBn} (${b.en})-এর চেয়ে তীব্রভাবে আকর্ষণ করতে পারে।`);
    } else if (b.en > a.en) {
      points.push(`• তড়িৎ ঋণাত্মকতা: সমযোজী বন্ধনের ইলেকট্রন যুগলকে ${b.nameBn} (${b.en}) নিজের দিকে ${a.nameBn} (${a.en})-এর চেয়ে তীব্রভাবে আকর্ষণ করতে পারে।`);
    }

    // 5. Metallic character
    if (a.metallic > b.metallic) {
      points.push(`• ধাতব আচরণ: ${a.nameBn} (${a.category}) মৌলটি ${b.nameBn} (${b.category})-এর তুলনায় সহজে ইলেকট্রন ত্যাগ করে ধনাত্মক আয়ন গঠনের অধিক প্রবণতা প্রদর্শন করে।`);
    } else if (b.metallic > a.metallic) {
      points.push(`• ধাতব আচরণ: ${b.nameBn} (${b.category}) মৌলটি ${a.nameBn} (${a.category})-এর তুলনায় সহজে ইলেকট্রন ত্যাগ করে ধনাত্মক আয়ন গঠনের অধিক প্রবণতা প্রদর্শন করে।`);
    }

    return points.join('\n');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-6 space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                অধ্যায় ৪: পর্যায় সারণি
              </span>
              <span className="text-xs text-slate-400">সকল ১১৮টি মৌল · ৭টি পর্যায় · ১৮টি গ্রুপ</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="h-6 w-6 text-cyan-400" />
              পর্যায়বৃত্ত ধর্ম ভিজ্যুয়ালাইজার (১১৮টি মৌলের পূর্ণাঙ্গ ল্যাব)
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              পরমাণুর আকার, আয়নীকরণ শক্তি, তড়িৎ ঋণাত্মকতা ও ধাতব ধর্মের পর্যায় ও গ্রুপভিত্তিক পরিবর্তন পর্যবেক্ষণ করুন এবং যেকোনো দুটি মৌলের দ্বৈত তুলনা করুন।
            </p>
          </div>

          {/* Property Selector Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
            {[
              { id: 'radius', label: 'পারমাণবিক আকার' },
              { id: 'ie', label: 'আয়নীকরণ শক্তি' },
              { id: 'en', label: 'তড়িৎ ঋণাত্মকতা' },
              { id: 'metallic', label: 'ধাতব ধর্ম' }
            ].map((prop) => (
              <button
                key={prop.id}
                onClick={() => setSelectedProperty(prop.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  selectedProperty === prop.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {prop.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Property Rule Box */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <p className="text-slate-300 max-w-2xl leading-relaxed">
            <strong className="text-white">{propertyInfo[selectedProperty].titleBn}:</strong>{' '}
            {propertyInfo[selectedProperty].description}
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-cyan-300 font-medium">
              পর্যায়ে: {propertyInfo[selectedProperty].trendPeriod}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-amber-300 font-medium">
              গ্রুপে: {propertyInfo[selectedProperty].trendGroup}
            </span>
          </div>
        </div>
      </div>

      {/* Series Explorer Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        {/* Navigation Mode Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 flex-wrap">
            <button
              onClick={() => setViewType('period')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                viewType === 'period' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              পর্যায়ভিত্তিক ধারা (Periods 1-7)
            </button>
            <button
              onClick={() => setViewType('group')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                viewType === 'group' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              গ্রুপভিত্তিক ধারা (Groups 1-18)
            </button>
            <button
              onClick={() => setViewType('special')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                viewType === 'special' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              ল্যান্থানাইড ও অ্যাক্টিনাইড
            </button>
            <button
              onClick={() => setViewType('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                viewType === 'all' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              সকল ১১৮টি মৌল
            </button>
          </div>

          {/* Sub-selector for Period / Group / Search */}
          <div className="flex items-center gap-2">
            {viewType === 'period' && (
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs text-slate-400 font-medium">পর্যায়:</span>
                {[1, 2, 3, 4, 5, 6, 7].map((p) => (
                  <button
                    key={p}
                    onClick={() => setSelectedPeriod(p)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition cursor-pointer ${
                      selectedPeriod === p
                        ? 'bg-cyan-500 text-slate-950 shadow'
                        : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            {viewType === 'group' && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">গ্রুপ:</span>
                <select
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(Number(e.target.value))}
                  className="bg-slate-950 border border-slate-700 text-white font-bold text-xs rounded-xl px-3 py-1.5 outline-none focus:border-cyan-500 transition cursor-pointer"
                >
                  {Array.from({ length: 18 }, (_, i) => i + 1).map((g) => (
                    <option key={g} value={g}>
                      {groupNames[g]}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {viewType === 'special' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedSpecial('lanthanide')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    selectedSpecial === 'lanthanide'
                      ? 'bg-pink-500 text-slate-950 shadow'
                      : 'bg-slate-950 text-pink-300 border border-slate-800'
                  }`}
                >
                  ল্যান্থানাইড (৫৭ - ৭১)
                </button>
                <button
                  onClick={() => setSelectedSpecial('actinide')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    selectedSpecial === 'actinide'
                      ? 'bg-indigo-500 text-slate-950 shadow'
                      : 'bg-slate-950 text-indigo-300 border border-slate-800'
                  }`}
                >
                  অ্যাক্টিনাইড (৮৯ - ১০৩)
                </button>
              </div>
            )}

            {viewType === 'all' && (
              <div className="relative min-w-[220px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                <input
                  type="text"
                  value={searchInAll}
                  onChange={(e) => setSearchInAll(e.target.value)}
                  placeholder="১১৮টি মৌলে খুঁজুন (Na, 11)..."
                  className="w-full pl-8 pr-3 py-1.5 bg-slate-950 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 outline-none focus:border-cyan-500"
                />
              </div>
            )}
          </div>
        </div>

        {/* Current Active Series Info Banner */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>
            প্রদর্শিত মৌলের সংখ্যা: <strong className="text-white">{currentDataset.length}টি</strong>
            {viewType === 'period' && ` · পর্যায় ${selectedPeriod}-এর মৌলসমূহ`}
            {viewType === 'group' && ` · ${groupNames[selectedGroup]}`}
          </span>
          <span className="text-[11px] text-cyan-400 font-mono">
            {propertyInfo[selectedProperty].titleBn}
          </span>
        </div>

        {/* Visual Charts Grid with Real Values and Animations */}
        <div className="space-y-2.5 max-h-[520px] overflow-y-auto pr-1">
          {currentDataset.map((el) => {
            const val = el[selectedProperty];
            const pct = Math.max(6, (val / maxVal) * 100);
            const isRadius = selectedProperty === 'radius';

            return (
              <div
                key={el.z}
                className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80 hover:border-slate-700 transition flex flex-col sm:flex-row sm:items-center gap-3"
              >
                {/* Element Badge */}
                <div className="flex items-center gap-3 w-40 shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex flex-col items-center justify-center shrink-0">
                    <span className="text-[9px] font-mono text-slate-500">#{el.z}</span>
                    <span className="text-base font-black text-white">{el.symbol}</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">{el.nameBn}</span>
                    <span className="text-[10px] text-slate-500 font-mono">P{el.period} · G{el.group}</span>
                  </div>
                </div>

                {/* Progress Bar & Value */}
                <div className="flex-1">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono font-bold text-white">
                      {val} {propertyInfo[selectedProperty].unit}
                    </span>
                    {el.anomaly && (
                      <span className="flex items-center gap-1 text-[10px] text-amber-400 font-medium bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                        <AlertCircle className="h-3 w-3" />
                        <span>{el.anomaly}</span>
                      </span>
                    )}
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-3.5 overflow-hidden p-0.5 border border-slate-800">
                    <div
                      style={{ width: `${pct}%` }}
                      className={`h-full rounded-full transition-all duration-500 ${propertyInfo[selectedProperty].barColor} shadow-sm`}
                    />
                  </div>
                </div>

                {/* Visual Proportional Atomic Circle (for Radius) */}
                {isRadius && (
                  <div className="w-20 flex items-center justify-center shrink-0">
                    <div
                      style={{
                        width: `${Math.max(16, Math.min(52, Math.round(el.radius / 5)))}px`,
                        height: `${Math.max(16, Math.min(52, Math.round(el.radius / 5)))}px`
                      }}
                      className="rounded-full bg-cyan-400/20 border-2 border-cyan-400 flex items-center justify-center text-[9px] font-mono text-cyan-200 shadow-md shadow-cyan-500/20 transition-all"
                      title={`${el.nameBn}: ${el.radius} pm`}
                    >
                      {el.symbol}
                    </div>
                  </div>
                )}

                {/* Load into Comparison Button */}
                <button
                  onClick={() => {
                    setCompareZ1(el.z);
                  }}
                  title="তুলনা ল্যাবে লোড করুন"
                  className="px-2 py-1 bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 font-medium rounded-lg border border-slate-800 shrink-0 cursor-pointer"
                >
                  তুলনা করুন
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Head-to-Head Compare Section (ALL 118 Elements) */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                দ্বৈত তুলনা ল্যাব (Head-to-Head Compare)
              </span>
              <span className="text-[10px] bg-cyan-500/10 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/30">
                ১১৮টি মৌলের যে কোনো ২টি
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">
              যেকোনো দুটি মৌলের পর্যায়বৃত্ত ধর্মের সরাসরি তুলনামূলক বৈজ্ঞানিক বিশ্লেষণ
            </h3>
          </div>

          {/* Quick Comparison Presets */}
          <div className="flex items-center gap-1.5 flex-wrap text-xs">
            <span className="text-slate-400 text-[11px]">জনপ্রিয় তুলনা:</span>
            {[
              { z1: 7, z2: 8, label: 'N বনাম O' },
              { z1: 4, z2: 5, label: 'Be বনাম B' },
              { z1: 9, z2: 17, label: 'F বনাম Cl' },
              { z1: 11, z2: 17, label: 'Na বনাম Cl' },
              { z1: 3, z2: 55, label: 'Li বনাম Cs' },
              { z1: 26, z2: 29, label: 'Fe বনাম Cu' }
            ].map((preset, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCompareZ1(preset.z1);
                  setCompareZ2(preset.z2);
                }}
                className="px-2 py-1 rounded bg-slate-950 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-white transition cursor-pointer font-mono text-[11px]"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Element Pickers & Swap Control */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800">
          {/* Picker 1 */}
          <div className="w-full md:w-5/12">
            <label className="block text-xs font-semibold text-cyan-400 mb-1">
              প্রথম মৌল (Element 1):
            </label>
            <select
              value={compareZ1}
              onChange={(e) => setCompareZ1(Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl px-3 py-2 outline-none focus:border-cyan-500 transition cursor-pointer"
            >
              {all118Trends.map((e) => (
                <option key={e.z} value={e.z}>
                  #{e.z}. {e.nameBn} ({e.symbol}) — {e.category} (P{e.period}, G{e.group})
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <button
            onClick={swapComparison}
            title="স্থান অদলবদল করুন"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-cyan-500 transition cursor-pointer shrink-0"
          >
            <ArrowLeftRight className="h-4 w-4" />
          </button>

          {/* Picker 2 */}
          <div className="w-full md:w-5/12">
            <label className="block text-xs font-semibold text-amber-400 mb-1">
              দ্বিতীয় মৌল (Element 2):
            </label>
            <select
              value={compareZ2}
              onChange={(e) => setCompareZ2(Number(e.target.value))}
              className="w-full bg-slate-900 border border-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl px-3 py-2 outline-none focus:border-amber-500 transition cursor-pointer"
            >
              {all118Trends.map((e) => (
                <option key={e.z} value={e.z}>
                  #{e.z}. {e.nameBn} ({e.symbol}) — {e.category} (P{e.period}, G{e.group})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Side-by-Side Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1: Element 1 */}
          <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border-2 border-cyan-500/40 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border-2 border-cyan-500/50 flex flex-col items-center justify-center shadow-lg">
                  <span className="text-[10px] font-mono text-slate-400 font-bold">#{el1.z}</span>
                  <span className="text-2xl font-black text-cyan-400">{el1.symbol}</span>
                </div>
                <div>
                  <h4 className="text-lg font-black text-white">{el1.nameBn}</h4>
                  <span className="text-xs text-slate-400 font-mono">{el1.nameEn} · পর্যায় {el1.period}, গ্রুপ {el1.group}</span>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {el1.category}
              </span>
            </div>

            {/* Electron Configuration */}
            <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-cyan-300">
              ইলেকট্রন বিন্যাস: <strong>{el1.configuration}</strong>
            </div>

            {/* Metrics List */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <CircleDot className="h-3.5 w-3.5 text-cyan-400" />
                  <span>পারমাণবিক ব্যাসার্ধ (আকার):</span>
                </span>
                <span className="font-mono font-bold text-cyan-300 text-sm">{el1.radius} pm</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5 text-amber-400" />
                  <span>১ম আয়নীকরণ শক্তি:</span>
                </span>
                <span className="font-mono font-bold text-amber-300 text-sm">{el1.ie} kJ/mol</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                  <span>তড়িৎ ঋণাত্মকতা (Pauling):</span>
                </span>
                <span className="font-mono font-bold text-emerald-300 text-sm">{el1.en}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <TrendingDown className="h-3.5 w-3.5 text-rose-400" />
                  <span>ধাতব ধর্ম সূচক:</span>
                </span>
                <span className="font-mono font-bold text-rose-300 text-sm">{el1.metallic} / ১০</span>
              </div>
            </div>

            {/* Visual Proportional Atomic Radius Circle */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
              <span>পরমাণুর দৃশ্যমান আপেক্ষিক আকার:</span>
              <div
                style={{
                  width: `${Math.max(20, Math.min(60, Math.round(el1.radius / 4.5)))}px`,
                  height: `${Math.max(20, Math.min(60, Math.round(el1.radius / 4.5)))}px`
                }}
                className="rounded-full bg-cyan-400/20 border-2 border-cyan-400 flex items-center justify-center text-[10px] font-mono text-cyan-200 shadow-md shadow-cyan-500/20"
              >
                {el1.symbol}
              </div>
            </div>
          </div>

          {/* Card 2: Element 2 */}
          <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border-2 border-amber-500/40 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border-2 border-amber-500/50 flex flex-col items-center justify-center shadow-lg">
                  <span className="text-[10px] font-mono text-slate-400 font-bold">#{el2.z}</span>
                  <span className="text-2xl font-black text-amber-400">{el2.symbol}</span>
                </div>
                <div>
                  <h4 className="text-lg font-black text-white">{el2.nameBn}</h4>
                  <span className="text-xs text-slate-400 font-mono">{el2.nameEn} · পর্যায় {el2.period}, গ্রুপ {el2.group}</span>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                {el2.category}
              </span>
            </div>

            {/* Electron Configuration */}
            <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-amber-300">
              ইলেকট্রন বিন্যাস: <strong>{el2.configuration}</strong>
            </div>

            {/* Metrics List */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <CircleDot className="h-3.5 w-3.5 text-cyan-400" />
                  <span>পারমাণবিক ব্যাসার্ধ (আকার):</span>
                </span>
                <span className="font-mono font-bold text-cyan-300 text-sm">{el2.radius} pm</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5 text-amber-400" />
                  <span>১ম আয়নীকরণ শক্তি:</span>
                </span>
                <span className="font-mono font-bold text-amber-300 text-sm">{el2.ie} kJ/mol</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                  <span>তড়িৎ ঋণাত্মকতা (Pauling):</span>
                </span>
                <span className="font-mono font-bold text-emerald-300 text-sm">{el2.en}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <TrendingDown className="h-3.5 w-3.5 text-rose-400" />
                  <span>ধাতব ধর্ম সূচক:</span>
                </span>
                <span className="font-mono font-bold text-rose-300 text-sm">{el2.metallic} / ১০</span>
              </div>
            </div>

            {/* Visual Proportional Atomic Radius Circle */}
            <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
              <span>পরমাণুর দৃশ্যমান আপেক্ষিক আকার:</span>
              <div
                style={{
                  width: `${Math.max(20, Math.min(60, Math.round(el2.radius / 4.5)))}px`,
                  height: `${Math.max(20, Math.min(60, Math.round(el2.radius / 4.5)))}px`
                }}
                className="rounded-full bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center text-[10px] font-mono text-amber-200 shadow-md shadow-amber-500/20"
              >
                {el2.symbol}
              </div>
            </div>
          </div>
        </div>

        {/* Automated Scientific Comparative Decision Engine */}
        <div className="p-4 sm:p-5 bg-slate-950 border border-cyan-500/30 rounded-2xl text-xs sm:text-sm text-slate-200 space-y-2 shadow-inner">
          <div className="flex items-center gap-2 font-bold text-cyan-400 text-sm mb-1">
            <CheckCircle2 className="h-4 w-4" />
            <span>স্বয়ংক্রিয় তুলনামূলক বৈজ্ঞানিক সিদ্ধান্ত ও কারণ বিশ্লেষণ:</span>
          </div>
          <div className="whitespace-pre-line leading-relaxed space-y-1.5 text-slate-300 font-sans">
            {generateComparisonAnalysis(el1, el2)}
          </div>
        </div>
      </div>
    </div>
  );
};
