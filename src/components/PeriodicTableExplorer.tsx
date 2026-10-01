import React, { useState, useMemo } from 'react';
import { elementsData } from '../data/elementsData';
import { ElementData } from '../types/presentation';
import { 
  Search, 
  Filter, 
  Info, 
  Sparkles, 
  ExternalLink, 
  X, 
  Layers, 
  Check, 
  BookOpen,
  RotateCcw,
  ListFilter
} from 'lucide-react';

interface PeriodicTableExplorerProps {
  onNavigateToTab?: (tab: string) => void;
  onSelectElementForSimulator?: (atomicNumber: number) => void;
}

// Convert Bengali numerals to ASCII numerals for search
const bengaliToEnglishDigits = (str: string): string => {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return str.replace(/[০-৯]/g, (d) => bnDigits.indexOf(d).toString());
};

export const PeriodicTableExplorer: React.FC<PeriodicTableExplorerProps> = ({
  onNavigateToTab,
  onSelectElementForSimulator
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedElement, setSelectedElement] = useState<ElementData>(elementsData[10]); // Default Na (11)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Helper for category matching logic
  const isElementInCategory = (el: ElementData, catId: string): boolean => {
    if (catId === 'all') return true;
    if (catId === 'metals') {
      return ['ক্ষার ধাতু', 'মৃৎক্ষার ধাতু', 'অবস্থান্তর ধাতু', 'উত্তীর্ণ ধাতু', 'ল্যান্থানাইড', 'অ্যাক্টিনাইড'].includes(el.category);
    }
    if (catId === 'nonmetals') {
      return ['অধাতু', 'হ্যালোজেন', 'নিষ্ক্রিয় গ্যাস'].includes(el.category);
    }
    if (catId === 'অবস্থান্তর ধাতু') {
      return el.category === 'অবস্থান্তর ধাতু' || el.category === 'সংক্রান্তি ধাতু';
    }
    if (catId === 'উপধাতু') {
      return el.category === 'উপধাতু' || el.category === 'অপধাতু';
    }
    if (catId === 'উত্তীর্ণ ধাতু') {
      return el.category === 'উত্তীর্ণ ধাতু' || el.category === 'পোস্ট-ট্রানজিশন ধাতু';
    }
    return el.category === catId;
  };

  // Categories list with distinct styling colors and precalculated counts
  const categories = useMemo(() => {
    const counts: Record<string, number> = {};
    elementsData.forEach((el) => {
      counts[el.category] = (counts[el.category] || 0) + 1;
    });

    const transitionCount = (counts['অবস্থান্তর ধাতু'] || 0) + (counts['সংক্রান্তি ধাতু'] || 0);
    const metalloidCount = (counts['উপধাতু'] || 0) + (counts['অপধাতু'] || 0);
    const postTransCount = (counts['উত্তীর্ণ ধাতু'] || 0) + (counts['পোস্ট-ট্রানজিশন ধাতু'] || 0);

    return [
      { id: 'all', label: 'সকল মৌল', count: elementsData.length, color: 'bg-slate-800 text-slate-200 border-slate-700' },
      { id: 'ক্ষার ধাতু', label: 'ক্ষার ধাতু', count: counts['ক্ষার ধাতু'] || 6, color: 'bg-rose-500/20 text-rose-400 border-rose-500/40' },
      { id: 'মৃৎক্ষার ধাতু', label: 'মৃৎক্ষার ধাতু', count: counts['মৃৎক্ষার ধাতু'] || 6, color: 'bg-orange-500/20 text-orange-400 border-orange-500/40' },
      { id: 'অবস্থান্তর ধাতু', label: 'অবস্থান্তর ধাতু', count: transitionCount || 38, color: 'bg-blue-500/20 text-blue-400 border-blue-500/40' },
      { id: 'উত্তীর্ণ ধাতু', label: 'পোস্ট-ট্রানজিশন', count: postTransCount || 11, color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40' },
      { id: 'উপধাতু', label: 'অপধাতু / উপধাতু', count: metalloidCount || 7, color: 'bg-teal-500/20 text-teal-400 border-teal-500/40' },
      { id: 'অধাতু', label: 'অধাতু', count: counts['অধাতু'] || 7, color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' },
      { id: 'হ্যালোজেন', label: 'হ্যালোজেন', count: counts['হ্যালোজেন'] || 6, color: 'bg-amber-500/20 text-amber-400 border-amber-500/40' },
      { id: 'নিষ্ক্রিয় গ্যাস', label: 'নিষ্ক্রিয় গ্যাস', count: counts['নিষ্ক্রিয় গ্যাস'] || 7, color: 'bg-purple-500/20 text-purple-400 border-purple-500/40' },
      { id: 'ল্যান্থানাইড', label: 'ল্যান্থানাইড', count: counts['ল্যান্থানাইড'] || 15, color: 'bg-pink-500/20 text-pink-400 border-pink-500/40' },
      { id: 'অ্যাক্টিনাইড', label: 'অ্যাক্টিনাইড', count: counts['অ্যাক্টিনাইড'] || 15, color: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/40' },
    ];
  }, []);

  // Helper for element category visual color themes
  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'ক্ষার ধাতু':
        return { 
          bg: 'bg-rose-950/70', 
          border: 'border-rose-500/50', 
          text: 'text-rose-400', 
          badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          displayName: 'ক্ষার ধাতু (Alkali Metal)'
        };
      case 'মৃৎক্ষার ধাতু':
        return { 
          bg: 'bg-orange-950/70', 
          border: 'border-orange-500/50', 
          text: 'text-orange-400', 
          badge: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
          displayName: 'মৃৎক্ষার ধাতু (Alkaline Earth Metal)'
        };
      case 'অবস্থান্তর ধাতু':
      case 'সংক্রান্তি ধাতু':
        return { 
          bg: 'bg-blue-950/70', 
          border: 'border-blue-500/50', 
          text: 'text-blue-400', 
          badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
          displayName: 'অবস্থান্তর ধাতু (Transition Metal)'
        };
      case 'উত্তীর্ণ ধাতু':
      case 'পোস্ট-ট্রানজিশন ধাতু':
        return { 
          bg: 'bg-cyan-950/70', 
          border: 'border-cyan-500/50', 
          text: 'text-cyan-400', 
          badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          displayName: 'পোস্ট-ট্রানজিশন / উত্তীর্ণ ধাতু'
        };
      case 'উপধাতু':
      case 'অপধাতু':
        return { 
          bg: 'bg-teal-950/70', 
          border: 'border-teal-500/50', 
          text: 'text-teal-400', 
          badge: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
          displayName: 'অপধাতু / উপধাতু (Metalloid)'
        };
      case 'অধাতু':
        return { 
          bg: 'bg-emerald-950/70', 
          border: 'border-emerald-500/50', 
          text: 'text-emerald-400', 
          badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          displayName: 'অধাতু (Non-metal)'
        };
      case 'হ্যালোজেন':
        return { 
          bg: 'bg-amber-950/70', 
          border: 'border-amber-500/50', 
          text: 'text-amber-400', 
          badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          displayName: 'হ্যালোজেন (Halogen)'
        };
      case 'নিষ্ক্রিয় গ্যাস':
        return { 
          bg: 'bg-purple-950/70', 
          border: 'border-purple-500/50', 
          text: 'text-purple-400', 
          badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
          displayName: 'নিষ্ক্রিয় গ্যাস (Noble Gas)'
        };
      case 'ল্যান্থানাইড':
        return { 
          bg: 'bg-pink-950/70', 
          border: 'border-pink-500/50', 
          text: 'text-pink-400', 
          badge: 'bg-pink-500/20 text-pink-300 border-pink-500/40',
          displayName: 'ল্যান্থানাইড সারি (Lanthanide)'
        };
      case 'অ্যাক্টিনাইড':
        return { 
          bg: 'bg-indigo-950/70', 
          border: 'border-indigo-500/50', 
          text: 'text-indigo-400', 
          badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
          displayName: 'অ্যাক্টিনাইড সারি (Actinide)'
        };
      default:
        return { 
          bg: 'bg-slate-900', 
          border: 'border-slate-700', 
          text: 'text-slate-300', 
          badge: 'bg-slate-800 text-slate-300 border-slate-700',
          displayName: cat
        };
    }
  };

  // Robust live filter matching logic
  const filteredElements = useMemo(() => {
    const rawQuery = searchQuery.trim().toLowerCase();
    const normalizedDigitsQuery = bengaliToEnglishDigits(rawQuery);

    return elementsData.filter((el) => {
      // 1. Category filter
      const matchesCategory = isElementInCategory(el, selectedCategory);
      if (!matchesCategory) return false;

      // If no search query, category match is enough
      if (!rawQuery) return true;

      // 2. Search query match:
      // a) Atomic number check (both English & Bengali digits)
      const matchesAtomicNum = 
        el.atomicNumber.toString() === normalizedDigitsQuery ||
        el.atomicNumber.toString().startsWith(normalizedDigitsQuery);

      // b) Symbol check
      const matchesSymbol = el.symbol.toLowerCase() === rawQuery || el.symbol.toLowerCase().startsWith(rawQuery);

      // c) Names check
      const matchesNameBn = el.nameBn.toLowerCase().includes(rawQuery);
      const matchesNameEn = el.nameEn.toLowerCase().includes(rawQuery);

      // d) Category keyword search
      const catNormalized = el.category.toLowerCase();
      let matchesCatQuery = false;
      if (
        (rawQuery.includes('ক্ষার') && !rawQuery.includes('মৃৎ') && el.category === 'ক্ষার ধাতু') ||
        (rawQuery.includes('মৃৎ') && el.category === 'মৃৎক্ষার ধাতু') ||
        ((rawQuery.includes('অবস্থান্তর') || rawQuery.includes('সংক্রান্তি') || rawQuery.includes('transition')) && (el.category === 'অবস্থান্তর ধাতু' || el.category === 'সংক্রান্তি ধাতু')) ||
        ((rawQuery.includes('হ্যালোজেন') || rawQuery.includes('halogen')) && el.category === 'হ্যালোজেন') ||
        ((rawQuery.includes('নিষ্ক্রিয়') || rawQuery.includes('noble') || rawQuery.includes('inert')) && el.category === 'নিষ্ক্রিয় গ্যাস') ||
        ((rawQuery.includes('উপধাতু') || rawQuery.includes('অপধাতু') || rawQuery.includes('metalloid')) && (el.category === 'উপধাতু' || el.category === 'অপধাতু')) ||
        (rawQuery.includes('ল্যান্থানাইড') && el.category === 'ল্যান্থানাইড') ||
        (rawQuery.includes('অ্যাক্টিনাইড') && el.category === 'অ্যাক্টিনাইড') ||
        catNormalized.includes(rawQuery)
      ) {
        matchesCatQuery = true;
      }

      // e) Period or Group search (e.g. "p3", "g17", "পর্যায় ৩", "গ্রুপ ১৭")
      let matchesGroupOrPeriod = false;
      if (normalizedDigitsQuery.startsWith('p') || normalizedDigitsQuery.startsWith('পর্যায়')) {
        const pNum = parseInt(normalizedDigitsQuery.replace(/[^\d]/g, ''), 10);
        if (pNum && el.period === pNum) matchesGroupOrPeriod = true;
      }
      if (normalizedDigitsQuery.startsWith('g') || normalizedDigitsQuery.startsWith('গ্রুপ')) {
        const gNum = parseInt(normalizedDigitsQuery.replace(/[^\d]/g, ''), 10);
        if (gNum && el.group === gNum) matchesGroupOrPeriod = true;
      }

      return matchesAtomicNum || matchesSymbol || matchesNameBn || matchesNameEn || matchesCatQuery || matchesGroupOrPeriod;
    });
  }, [searchQuery, selectedCategory]);

  // Periodic grid coordinate map for standard 18-col layout
  const getGridPosition = (el: ElementData) => {
    // Lanthanides (57-71) in period 8 (displayed row 9)
    if (el.atomicNumber >= 57 && el.atomicNumber <= 71) {
      return { gridRow: 9, gridColumn: el.atomicNumber - 57 + 3 };
    }
    // Actinides (89-103) in period 9 (displayed row 10)
    if (el.atomicNumber >= 89 && el.atomicNumber <= 103) {
      return { gridRow: 10, gridColumn: el.atomicNumber - 89 + 3 };
    }

    return { gridRow: el.period, gridColumn: el.group };
  };

  const handleElementClick = (el: ElementData) => {
    setSelectedElement(el);
    setIsModalOpen(true);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

  const isFilteringActive = selectedCategory !== 'all' || searchQuery.trim().length > 0;

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-6 space-y-6">
      {/* Top Banner & Controller */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                অধ্যায় ৪: পর্যায় সারণি
              </span>
              <span className="text-xs text-slate-400">১১৮টি মৌলের পূর্ণাঙ্গ ইন্টারঅ্যাক্টিভ ডেটাবেজ</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-cyan-400" />
              পর্যায় সারণি এক্সপ্লোরার (Periodic Table Explorer)
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              যেকোনো মৌল খুঁজুন বা ক্যাটাগরি ফিল্টার করুন। মৌলে ক্লিক করে বিস্তারিত ইলেকট্রন বিন্যাস ও ধর্ম দেখুন।
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="প্রতীক (Na, Cl), নাম, পারমাণবিক সংখ্যা (১১, 26)..."
              className="w-full pl-9 pr-8 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                title="সার্চ মুছুন"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Categories Bar */}
        <div className="mt-4 pt-4 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Filter className="h-3.5 w-3.5 text-cyan-400" />
              <span>ক্যাটাগরিভিত্তিক ফিল্টার (Category Filters):</span>
            </div>

            {isFilteringActive && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-lg border border-amber-500/30 transition cursor-pointer"
              >
                <RotateCcw className="h-3 w-3" />
                <span>ফিল্টার রিসেট ({filteredElements.length}টি মৌল)</span>
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`text-xs px-2.5 py-1.5 rounded-lg border transition font-medium cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md shadow-cyan-500/20 ring-1 ring-cyan-300'
                      : `${cat.color} hover:bg-slate-800/80`
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                    active ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-950/70 text-slate-300'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Grid View */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-3 sm:p-5 overflow-x-auto shadow-xl">
        <div className="min-w-[1000px]">
          {/* Group 1 to 18 Numbers Row */}
          <div className="grid grid-cols-[36px_repeat(18,minmax(48px,1fr))] gap-1 mb-1 text-center font-mono text-[11px] text-slate-400 font-bold">
            <div className="text-[10px] text-slate-500">P \ G</div>
            {Array.from({ length: 18 }, (_, i) => (
              <div key={i + 1} className="py-0.5 rounded bg-slate-950/60 border border-slate-800/50">
                {i + 1}
              </div>
            ))}
          </div>

          {/* 7 Periods Grid */}
          <div className="grid grid-cols-[36px_repeat(18,minmax(48px,1fr))] gap-1">
            {/* Period numbers 1-7 in column 1 */}
            {Array.from({ length: 7 }, (_, pIdx) => {
              const periodNum = pIdx + 1;
              return (
                <div
                  key={periodNum}
                  style={{ gridRow: periodNum, gridColumn: 1 }}
                  className="flex items-center justify-center font-mono text-xs font-bold text-slate-400 bg-slate-950/60 rounded border border-slate-800/50"
                >
                  {periodNum}
                </div>
              );
            })}

            {/* Elements rendering */}
            {elementsData.map((el) => {
              const pos = getGridPosition(el);
              const theme = getCategoryTheme(el.category);
              const isMatched = filteredElements.some((fe) => fe.atomicNumber === el.atomicNumber);
              const isCurrentSelected = selectedElement.atomicNumber === el.atomicNumber;

              return (
                <button
                  key={el.atomicNumber}
                  onClick={() => handleElementClick(el)}
                  style={{
                    gridRow: pos.gridRow,
                    gridColumn: pos.gridColumn + 1, // Offset by 1 for period number column
                  }}
                  className={`group relative p-1 rounded-lg border transition-all duration-150 flex flex-col justify-between text-left cursor-pointer select-none ${
                    isMatched
                      ? `${theme.bg} ${theme.border} hover:scale-105 hover:z-20 hover:shadow-lg hover:border-cyan-400`
                      : 'opacity-15 bg-slate-950/40 border-slate-900/60 grayscale'
                  } ${isCurrentSelected ? 'ring-2 ring-cyan-400 scale-105 z-10 shadow-lg shadow-cyan-500/20' : ''}`}
                >
                  <div className="flex items-center justify-between text-[9px] font-mono leading-none">
                    <span className="text-slate-400 group-hover:text-white font-semibold">
                      {el.atomicNumber}
                    </span>
                    <span className="text-slate-500 text-[8px] truncate max-w-[28px]">
                      {el.massNumber}
                    </span>
                  </div>

                  <div className="my-0.5 text-center">
                    <span className={`text-base font-extrabold tracking-tight ${theme.text} group-hover:text-white`}>
                      {el.symbol}
                    </span>
                  </div>

                  <div className="text-[9px] text-slate-300 font-medium truncate text-center leading-none">
                    {el.nameBn}
                  </div>
                </button>
              );
            })}

            {/* Lanthanide & Actinide placeholders in main grid */}
            <div
              style={{ gridRow: 6, gridColumn: 4 }}
              className="p-1 rounded-lg border border-pink-500/30 bg-pink-950/30 flex flex-col items-center justify-center text-center"
            >
              <span className="text-[10px] font-mono font-bold text-pink-400">57-71</span>
              <span className="text-[8px] text-pink-300">ল্যান্থানাইড</span>
            </div>

            <div
              style={{ gridRow: 7, gridColumn: 4 }}
              className="p-1 rounded-lg border border-indigo-500/30 bg-indigo-950/30 flex flex-col items-center justify-center text-center"
            >
              <span className="text-[10px] font-mono font-bold text-indigo-400">89-103</span>
              <span className="text-[8px] text-indigo-300">অ্যাক্টিনাইড</span>
            </div>

            {/* Row separator before f-block */}
            <div style={{ gridRow: 8, gridColumn: 'span 19' }} className="h-3" />

            {/* Row 9 label: Lanthanide series */}
            <div
              style={{ gridRow: 9, gridColumn: '1 / span 3' }}
              className="flex items-center justify-end pr-2 text-[10px] font-bold text-pink-400"
            >
              ল্যান্থানাইড সারি (Period 6)*
            </div>

            {/* Row 10 label: Actinide series */}
            <div
              style={{ gridRow: 10, gridColumn: '1 / span 3' }}
              className="flex items-center justify-end pr-2 text-[10px] font-bold text-indigo-400"
            >
              অ্যাক্টিনাইড সারি (Period 7)**
            </div>
          </div>
        </div>
      </div>

      {/* Filtered Elements Quick Result Cards (Appears when filter or search is active) */}
      {isFilteringActive && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ListFilter className="h-4 w-4 text-cyan-400" />
              <h3 className="text-sm font-bold text-white">
                ফিল্টারকৃত মৌলসমূহের তালিকা (পাওয়া গেছে {filteredElements.length}টি মৌল)
              </h3>
            </div>
            <button
              onClick={resetFilters}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              সব মৌল প্রদর্শন করুন
            </button>
          </div>

          {filteredElements.length === 0 ? (
            <div className="p-8 text-center bg-slate-950 rounded-xl border border-slate-800 text-slate-400 text-xs">
              দুঃখিত, আপনার অনুসন্ধানের সাথে কোনো মৌল মেলেনি। অনুগ্রহ করে সঠিক প্রতীক, নাম বা সংখ্যা লিখুন।
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5 max-h-72 overflow-y-auto pr-1">
              {filteredElements.map((el) => {
                const theme = getCategoryTheme(el.category);
                const isSelected = selectedElement.atomicNumber === el.atomicNumber;
                return (
                  <button
                    key={el.atomicNumber}
                    onClick={() => handleElementClick(el)}
                    className={`p-2 rounded-xl border text-left transition flex flex-col justify-between ${
                      isSelected
                        ? 'ring-2 ring-cyan-400 bg-cyan-950/60 border-cyan-400'
                        : `${theme.bg} ${theme.border} hover:border-cyan-400 hover:scale-102`
                    }`}
                  >
                    <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                      <span>#{el.atomicNumber}</span>
                      <span>P{el.period} G{el.group}</span>
                    </div>
                    <div className="my-1 flex items-baseline gap-1.5">
                      <span className={`text-xl font-black ${theme.text}`}>{el.symbol}</span>
                      <span className="text-xs font-bold text-white truncate">{el.nameBn}</span>
                    </div>
                    <div className="text-[9px] text-slate-400 font-mono truncate">
                      {el.massNumber} u
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Selected Element Quick Insight Bar */}
      {selectedElement && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center border-2 shadow-lg ${getCategoryTheme(selectedElement.category).bg} ${getCategoryTheme(selectedElement.category).border}`}>
              <span className="text-xs font-mono text-slate-300 font-bold">{selectedElement.atomicNumber}</span>
              <span className="text-2xl font-extrabold text-white">{selectedElement.symbol}</span>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-bold text-white">{selectedElement.nameBn} ({selectedElement.nameEn})</h3>
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${getCategoryTheme(selectedElement.category).badge}`}>
                  {getCategoryTheme(selectedElement.category).displayName}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1 max-w-2xl line-clamp-2">
                {selectedElement.description}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-3 text-xs bg-slate-950 px-3.5 py-2 rounded-xl border border-slate-800">
              <div>
                <span className="text-slate-500 block">পর্যায়:</span>
                <span className="font-bold text-cyan-400 text-sm">{selectedElement.period}</span>
              </div>
              <div className="h-6 w-px bg-slate-800" />
              <div>
                <span className="text-slate-500 block">গ্রুপ:</span>
                <span className="font-bold text-amber-400 text-sm">{selectedElement.group}</span>
              </div>
              <div className="h-6 w-px bg-slate-800" />
              <div>
                <span className="text-slate-500 block">ভর সংখ্যা:</span>
                <span className="font-mono font-bold text-emerald-400 text-sm">{selectedElement.massNumber}</span>
              </div>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition cursor-pointer"
            >
              <Info className="h-4 w-4" />
              <span>পূর্ণাঙ্গ প্রোফাইল</span>
            </button>
          </div>
        </div>
      )}

      {/* Element Detail Modal */}
      {isModalOpen && selectedElement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center border-2 shadow-xl ${getCategoryTheme(selectedElement.category).bg} ${getCategoryTheme(selectedElement.category).border}`}>
                <span className="text-xs font-mono text-slate-300 font-bold">{selectedElement.atomicNumber}</span>
                <span className="text-3xl font-black text-white">{selectedElement.symbol}</span>
                <span className="text-[10px] text-slate-400 font-mono">{selectedElement.massNumber}</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-black text-white">{selectedElement.nameBn}</h2>
                  <span className="text-sm text-slate-400 font-mono">({selectedElement.nameEn})</span>
                </div>
                <span className={`inline-block mt-1 text-xs px-3 py-1 rounded-full font-bold border ${getCategoryTheme(selectedElement.category).badge}`}>
                  {getCategoryTheme(selectedElement.category).displayName}
                </span>
              </div>
            </div>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block">পর্যায় (Period)</span>
                <span className="text-lg font-bold text-cyan-400">{selectedElement.period}</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block">গ্রুপ (Group)</span>
                <span className="text-lg font-bold text-amber-400">{selectedElement.group}</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block">প্রোটন / ইলেকট্রন</span>
                <span className="text-lg font-bold text-emerald-400">{selectedElement.protons}</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block">নিউট্রন সংখ্যা</span>
                <span className="text-lg font-bold text-indigo-400">{selectedElement.neutrons}</span>
              </div>
            </div>

            {/* Electron Configuration */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-5">
              <span className="text-xs font-bold text-slate-300 block mb-1">
                ইলেকট্রন বিন্যাস (Electronic Configuration):
              </span>
              <div className="font-mono text-cyan-300 text-sm font-semibold tracking-wide bg-slate-900 p-2.5 rounded-xl border border-cyan-500/20">
                {selectedElement.configuration}
              </div>

              {/* Shells Distribution */}
              <div className="mt-3 flex items-center gap-2 flex-wrap">
                <span className="text-xs text-slate-400">শক্তিস্তর বণ্টন (K, L, M...):</span>
                <div className="flex gap-1.5 flex-wrap">
                  {selectedElement.shells.map((count, idx) => {
                    const shellNames = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];
                    return (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-slate-200 border border-slate-700">
                        {shellNames[idx]}: <strong className="text-cyan-400">{count}</strong>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Scientific Description & Daily Life Role */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-6">
              <span className="text-xs font-bold text-slate-300 block mb-1">
                মৌলের বৈশিষ্ট্য ও ব্যবহারিক প্রয়োগ:
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedElement.description}
              </p>
            </div>

            {/* Navigation Actions */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  if (onNavigateToTab) onNavigateToTab('positionFinder');
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition cursor-pointer"
              >
                <BookOpen className="h-3.5 w-3.5 text-cyan-400" />
                <span>পর্যায় ও গ্রুপ নিয়ম ল্যাব</span>
              </button>

              <button
                onClick={() => {
                  setIsModalOpen(false);
                  if (onNavigateToTab) onNavigateToTab('trends');
                }}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition cursor-pointer"
              >
                <Layers className="h-3.5 w-3.5 text-amber-400" />
                <span>পর্যায়বৃত্ত ধর্ম তুলনা</span>
              </button>

              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold rounded-xl transition cursor-pointer"
              >
                ঠিক আছে
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
