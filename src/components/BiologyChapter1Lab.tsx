/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Dna,
  BookOpen,
  Award,
  Sparkles,
  Search,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Layers,
  HelpCircle,
  ChevronRight,
  Globe,
  Filter,
  Copy,
  Check,
  ChevronLeft
} from 'lucide-react';
import {
  SCIENTIFIC_NAMES_DIRECTORY,
  SCIENTIFIC_NAME_CATEGORIES,
  ScientificNameItem
} from '../data/scientificNamesData';
import { BiologyChapter1DiagramStudio } from './BiologyChapter1DiagramStudio';

interface BiologyChapter1LabProps {
  defaultTab?: 'fiveKingdoms' | 'binomial' | 'branches' | 'interactiveDiagrams';
}

interface KingdomInfo {
  id: string;
  nameBn: string;
  nameEn: string;
  superKingdom: string;
  cellType: string;
  nuclearMembrane: string;
  cellWall: string;
  nutrition: string;
  examples: string[];
  scientificExamples: string[];
  keyFeatures: string[];
  color: string;
  accentBg: string;
  badgeBorder: string;
}

const KINGDOMS_DATA: KingdomInfo[] = [
  {
    id: 'monera',
    nameBn: 'মনেরা (Monera)',
    nameEn: 'Kingdom Monera',
    superKingdom: 'সুপার কিংডম ১: প্রোক্যারিওটা (Prokaryota)',
    cellType: 'আদিকোষী (Prokaryotic), এককোষী বা ফিলামেন্টাস',
    nuclearMembrane: 'অনুপস্থিত (নিউক্লিঅয়েড থাকে, ক্রোমাটিনে শুধু নগ্ন বৃত্তাকার DNA)',
    cellWall: 'উপস্থিত (পেপটিডোগ্লাইকান ও পলিস্যাকারাইড নির্মিত)',
    nutrition: 'শোষণ বা ফটোসিন্থেটিক / কেমোসিন্থেটিক',
    examples: ['ব্যাকটেরিয়া (Bacteria)', 'নীলাভ সবুজ শৈবাল / সায়ানোব্যাকটেরিয়া (Nostoc)'],
    scientificExamples: ['Escherichia coli', 'Nostoc commune', 'Bacillus subtilis'],
    keyFeatures: [
      'মেমব্রেনবেষ্টিত কোনো অঙ্গাণু নেই (মাইটোকন্ড্রিয়া, গলগি ইত্যাদি অনুপস্থিত)',
      'একমাত্র সাইটোপ্লাজমীয় অঙ্গাণু হলো 70S রাইবোসোম',
      'দ্বি-বিভাজন (Binary Fission) পদ্ধতিতে দ্রুত প্রজনন করে'
    ],
    color: 'emerald',
    accentBg: 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300',
    badgeBorder: 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
  },
  {
    id: 'protista',
    nameBn: 'প্রোটিস্টা (Protista)',
    nameEn: 'Kingdom Protista',
    superKingdom: 'সুপার কিংডম ২: ইউক্যারিওটা (Eukaryota)',
    cellType: 'প্রকৃতকোষী (Eukaryotic), এককোষী বা কলোনিয়াল',
    nuclearMembrane: 'সুগঠিত নিউক্লিয়ার মেমব্রেন ও নিউক্লিওলাস উপস্থিত',
    cellWall: 'অধিকাংশে অনুপস্থিত (ডায়াটমে সিলিকা নির্মিত খোলক থাকতে পারে)',
    nutrition: 'শোষণ, ফ্যাগোসাইটোসিস (ভক্ষণ) বা ফটোসিন্থেটিক',
    examples: ['অ্যামিবা (Amoeba)', 'প্যারামেসিয়াম (Paramecium)', 'ইউগ্লেনা (Euglena)', 'ডায়াটম'],
    scientificExamples: ['Amoeba proteus', 'Paramecium caudatum', 'Euglena viridis', 'Plasmodium vivax'],
    keyFeatures: [
      'প্রকৃতকোষী হলেও কোনো সুনির্দিষ্ট টিস্যুতন্ত্র গঠিত হয় না',
      'মাইটোকন্ড্রিয়া, গলগিবস্তু ইত্যাদি অঙ্গাণু ও 80S রাইবোসোম থাকে',
      'মাইটোসিস বিভাজনে অযৌন এবং কনজুগেশনের মাধ্যমে যৌন প্রজনন'
    ],
    color: 'cyan',
    accentBg: 'bg-cyan-950/40 border-cyan-500/40 text-cyan-300',
    badgeBorder: 'border-cyan-500 text-cyan-400 bg-cyan-500/10'
  },
  {
    id: 'fungi',
    nameBn: 'ফানজাই / ছত্রাক (Fungi)',
    nameEn: 'Kingdom Fungi',
    superKingdom: 'সুপার কিংডম ২: ইউক্যারিওটা (Eukaryota)',
    cellType: 'প্রকৃতকোষী, এককোষী বা সুতাকার বহুকোষী মাইসেলিয়াম',
    nuclearMembrane: 'সুগঠিত নিউক্লিয়াস উপস্থিত',
    cellWall: 'কাইটিন (Chitin) নির্মিত সুদৃঢ় কোষপ্রাচীর',
    nutrition: 'পরভোজী - মৃতজীবী (Saprophytic) বা পরজীবী (Parasitic)',
    examples: ['ইস্ট (Yeast)', 'মাশরুম / ব্যাঙের ছাতা (Agaricus)', 'পেনিসিলিয়াম (Penicillium)'],
    scientificExamples: ['Saccharomyces cerevisiae', 'Agaricus campestris', 'Penicillium notatum'],
    keyFeatures: [
      'ক্লোরোপ্লাস্ট নেই, তাই সালোকসংশ্লেষণ করতে পারে না',
      'সঞ্চিত খাদ্য গ্লাইকোজেন ও তেলবিন্দু (শ্বেতসার থাকে না)',
      'হ্যাপ্লয়েড স্পোর (Spore) উৎপাদনের মাধ্যমে বংশবৃদ্ধি ঘটে'
    ],
    color: 'amber',
    accentBg: 'bg-amber-950/40 border-amber-500/40 text-amber-300',
    badgeBorder: 'border-amber-500 text-amber-400 bg-amber-500/10'
  },
  {
    id: 'plantae',
    nameBn: 'প্লান্টি / উদ্ভিদজগৎ (Plantae)',
    nameEn: 'Kingdom Plantae',
    superKingdom: 'সুপার কিংডম ২: ইউক্যারিওটা (Eukaryota)',
    cellType: 'প্রকৃতকোষী, জটিল বহুকোষী উন্নত টিস্যুতন্ত্র বিশিষ্ট',
    nuclearMembrane: 'সুগঠিত নিউক্লিয়াস ও বৃহৎ কোষগহ্বর',
    cellWall: 'সেলুলোজ (Cellulose) নির্মিত জড় কোষপ্রাচীর',
    nutrition: 'স্বভোজী (Autotrophic) - সালোকসংশ্লেষণকারী উৎপাদক',
    examples: ['স্পাইরোগাইরা শৈবাল', 'মশ ও ফার্ন', 'আমগাছ', 'কাঁঠালগাছ', 'ধানগাছ'],
    scientificExamples: ['Mangifera indica', 'Oryza sativa', 'Artocarpus heterophyllus'],
    keyFeatures: [
      'ক্লোরোপ্লাস্টে ক্লোরোফিল রঞ্জক থাকায় সূর্যালোক ধারণ করে শর্করা তৈরি করে',
      'সঞ্চিত খাদ্য শ্বেতসার বা স্টার্চ (Starch)',
      'ভ্রূণ সৃষ্টি হয় এবং আর্কিগোনিয়েট/ফুলের মাধ্যমে জনন সম্পন্ন হয়'
    ],
    color: 'green',
    accentBg: 'bg-green-950/40 border-green-500/40 text-green-300',
    badgeBorder: 'border-green-500 text-green-400 bg-green-500/10'
  },
  {
    id: 'animalia',
    nameBn: 'অ্যানিম্যালিয়া / প্রাণীজগৎ (Animalia)',
    nameEn: 'Kingdom Animalia',
    superKingdom: 'সুপার কিংডম ২: ইউক্যারিওটা (Eukaryota)',
    cellType: 'প্রকৃতকোষী, বহুকোষী জটিল অঙ্গ ও অঙ্গতন্ত্র সমন্বিত',
    nuclearMembrane: 'সুগঠিত নিউক্লিয়াস বিদ্যমান',
    cellWall: 'সম্পূর্ণ অনুপস্থিত (কোনো কোষপ্রাচীর বা প্লাস্টিড থাকে না)',
    nutrition: 'পরভোজী - হলোজোয়িক (Holozoic / খাদ্য গলাধঃকরণকারী)',
    examples: ['মানুষ', 'রয়েল বেঙ্গল টাইগার', 'দোয়েল পাখি', 'রুই মাছ', 'তেলাপোকা'],
    scientificExamples: ['Homo sapiens', 'Panthera tigris', 'Copsychus saularis', 'Labeo rohita'],
    keyFeatures: [
      'সঞ্চিত খাদ্য গ্লাইকোজেন ও চর্বি',
      'স্নায়ুতন্ত্র ও সংবেদনশীল অঙ্গের মাধ্যমে পরিবেশে দ্রুত সাড়া প্রদান',
      'অধিকাংশ প্রাণী স্বতঃস্ফূর্ত চলনে (Locomotion) সক্ষম'
    ],
    color: 'rose',
    accentBg: 'bg-rose-950/40 border-rose-500/40 text-rose-300',
    badgeBorder: 'border-rose-500 text-rose-400 bg-rose-500/10'
  }
];

interface MysteryOrganism {
  id: number;
  name: string;
  clues: string[];
  correctKingdomId: string;
  explanation: string;
}

const MYSTERY_ORGANISMS: MysteryOrganism[] = [
  {
    id: 1,
    name: 'জীব ' + 'X' + ' (নস্টক / Nostoc)',
    clues: [
      'এককোষী কিন্তু সূত্রাকার কলোনি তৈরি করে',
      'কোষে কোনো সুনির্দিষ্ট নিউক্লিয়ার মেমব্রেন বা মাইটোকন্ড্রিয়া নেই',
      'কোষপ্রাচীর পেপটিডোগ্লাইকান নির্মিত এবং নাইট্রোজেন সংবন্ধন করতে পারে'
    ],
    correctKingdomId: 'monera',
    explanation: 'সুগঠিত নিউক্লিয়াসবিহীন এবং পেপটিডোগ্লাইকান প্রাচীরযুক্ত হওয়ায় এটি মনেরা (Monera) রাজ্যের অন্তর্ভুক্ত।'
  },
  {
    id: 2,
    name: 'জীব ' + 'Y' + ' (পেনিসিলিয়াম / Penicillium)',
    clues: [
      'বহুকোষী সুতাকার মাইসেলিয়াম বিদ্যমান',
      'ক্লোরোপ্লাস্ট নেই, মৃত বা জৈব বস্তু থেকে খাদ্য শোষণ করে',
      'কোষপ্রাচীর কাইটিন দিয়ে গঠিত এবং এটি অ্যান্টিবায়োটিক তৈরি করে'
    ],
    correctKingdomId: 'fungi',
    explanation: 'কাইটিন প্রাচীরযুক্ত এবং ক্লোরোপ্লাস্টবিহীন মৃতজীবী প্রকৃতকোষী হওয়ায় এটি ফানজাই (Fungi) রাজ্যের অন্তর্ভুক্ত।'
  },
  {
    id: 3,
    name: 'জীব ' + 'Z' + ' (অ্যামিবা / Amoeba)',
    clues: [
      'এককোষী জীব, কিন্তু কোষে সুগঠিত নিউক্লিয়াস ও মাইটোকন্ড্রিয়া আছে',
      'ক্ষণপদ (Pseudopodia) দ্বারা খাদ্য গ্রহণ ও চলন সম্পন্ন করে',
      'কোনো কলাতন্ত্র বা টিস্যু গঠিত হয় না'
    ],
    correctKingdomId: 'protista',
    explanation: 'এককোষী প্রকৃতকোষী এবং টিস্যুতন্ত্রবিহীন হওয়ায় অ্যামিবা প্রোটিস্টা (Protista) রাজ্যের অন্তর্ভুক্ত।'
  },
  {
    id: 4,
    name: 'জীব ' + 'W' + ' (রয়েল বেঙ্গল টাইগার / Panthera tigris)',
    clues: [
      'বহুকোষী জটিল প্রাণী, কোষে কোনো কোষপ্রাচীর বা প্লাস্টিড নেই',
      'অন্য প্রাণীকে শিকার করে খাদ্য গলাধঃকরণ (হলোজোয়িক) করে',
      'উন্নত পেশিতন্ত্র ও সংবেদনশীল স্নায়ুতন্ত্র বিদ্যমান'
    ],
    correctKingdomId: 'animalia',
    explanation: 'কোষপ্রাচীরবিহীন বহুকোষী এবং হলোজোয়িক পুষ্টিবিশিষ্ট হওয়ায় এটি অ্যানিম্যালিয়া (Animalia) রাজ্যের অন্তর্ভুক্ত।'
  },
  {
    id: 5,
    name: 'জীব ' + 'V' + ' (আমগাছ / Mangifera indica)',
    clues: [
      'বহুকোষী উন্নত ভাস্কুলার টিস্যুযুক্ত জীব',
      'কোষে প্লাস্টিড ও ক্লোরোফিল থাকায় সালোকসংশ্লেষণ প্রক্রিয়ায় খাদ্য তৈরি করে',
      'কোষপ্রাচীর প্রধানত সেলুলোজ নির্মিত এবং সঞ্চিত খাদ্য স্টার্চ'
    ],
    correctKingdomId: 'plantae',
    explanation: 'সেলুলোজ কোষপ্রাচীরযুক্ত স্বভোজী সুকেন্দ্রিক উৎপাদক হওয়ায় এটি প্লান্টি (Plantae) রাজ্যের অন্তর্ভুক্ত।'
  }
];

interface BranchItem {
  nameBn: string;
  nameEn: string;
  type: 'ভৌত শাখা (Basic)' | 'ফলিত শাখা (Applied)';
  description: string;
  exampleTopic: string;
}

const BRANCHES_DATA: BranchItem[] = [
  { nameBn: 'অঙ্গসংস্থানবিদ্যা', nameEn: 'Morphology', type: 'ভৌত শাখা (Basic)', description: 'জীবদেহের বাহ্যিক ও অভ্যন্তরীণ গঠন কাঠামো নিয়ে সামগ্রিক আলোচনা।', exampleTopic: 'মূল, কাণ্ড বা হৃদপিণ্ডের বাহ্যিক গঠন' },
  { nameBn: 'শারীরবিদ্যা', nameEn: 'Physiology', type: 'ভৌত শাখা (Basic)', description: 'জীবদেহের বিভিন্ন জৈবনিক ও শারীরবৃত্তীয় প্রক্রিয়া (শ্বসন, সালোকসংশ্লেষণ, রেচন)।', exampleTopic: 'পত্ররন্ধ্র খোলা-বন্ধ ও রক্তসঞ্চালন' },
  { nameBn: 'হিস্টোলজি', nameEn: 'Histology', type: 'ভৌত শাখা (Basic)', description: 'জীবদেহের টিস্যু বা কলার আণুবীক্ষণিক গঠন, কাজ ও বিন্যাস।', exampleTopic: 'জাইলেম-ফ্লোয়েম বা আবরণী কলার মাইক্রোস্কোপিক দৃশ্য' },
  { nameBn: 'কোষবিদ্যা', nameEn: 'Cytology', type: 'ভৌত শাখা (Basic)', description: 'কোষের গঠন, কাজ ও কোষ বিভাজন সম্পর্কিত বিজ্ঞান।', exampleTopic: 'মাইটোকন্ড্রিয়ার গঠন ও মাইটোসিস বিভাজন' },
  { nameBn: 'বংশগতিবিদ্যা', nameEn: 'Genetics', type: 'ভৌত শাখা (Basic)', description: 'জিন এবং বংশপরম্পরায় বৈশিষ্ট্য স্থানান্তর (Heredity)।', exampleTopic: 'মেন্ডেলের সূত্র ও ডিএনএ অনুলিপন' },
  { nameBn: 'কীটতত্ত্ব', nameEn: 'Entomology', type: 'ফলিত শাখা (Applied)', description: 'কীটপতঙ্গের জীবনচক্র, উপকারিতা, অপকারিতা ও ক্ষতিকর পোকা দমন।', exampleTopic: 'ধানের মাজরা পোকা দমন ও মৌমাছি পালন' },
  { nameBn: 'প্রত্নতত্ত্ববিদ্যা', nameEn: 'Palaeontology', type: 'ফলিত শাখা (Applied)', description: 'প্রাগৈতিহাসিক ভূতাত্ত্বিক যুগের জীবের জীবাশ্ম (Fossil) পর্যালোচনা।', exampleTopic: 'ডাইনোসর ও প্রাচীন ফার্নের ফসিল গবেষণা' },
  { nameBn: 'মৎস্যবিজ্ঞান', nameEn: 'Fisheries', type: 'ফলিত শাখা (Applied)', description: 'মাছ চাষ, রোগ দমন, সংরক্ষণ ও মৎস্য সম্পদ প্রক্রিয়াজাতকরণ।', exampleTopic: 'কার্প ও পাঙ্গাশ মাছের কৃত্রিম প্রজনন' },
  { nameBn: 'অণুজীববিজ্ঞান', nameEn: 'Microbiology', type: 'ফলিত শাখা (Applied)', description: 'ভাইরাস, ব্যাকটেরিয়া, আণুবীক্ষণিক শৈবাল ও ছত্রাকের অধ্যয়ন ও মানবকল্যাণে ব্যবহার।', exampleTopic: 'অ্যান্টিবায়োটিক তৈরি ও দুধ থেকে দই প্রস্তুত' },
  { nameBn: 'জিনপ্রযুক্তি ও জৈবপ্রযুক্তি', nameEn: 'Biotechnology', type: 'ফলিত শাখা (Applied)', description: 'জীবের ডিএনএ পরিবর্তন করে কৃষি, শিল্প ও চিকিৎসায় কল্যাণকর প্রয়োগ।', exampleTopic: 'জিএমও ফসল ও রিকম্বিনেন্ট ইনসুলিন তৈরি' }
];

export const BiologyChapter1Lab: React.FC<BiologyChapter1LabProps> = ({ defaultTab = 'interactiveDiagrams' }) => {
  const [activeTab, setActiveTab] = useState<'fiveKingdoms' | 'binomial' | 'branches' | 'interactiveDiagrams'>(defaultTab);

  // Five Kingdoms state
  const [selectedKingdom, setSelectedKingdom] = useState<string>('monera');
  const [mysteryIdx, setMysteryIdx] = useState<number>(0);
  const [mysteryAnswer, setMysteryAnswer] = useState<string | null>(null);
  const [mysteryScore, setMysteryScore] = useState<number>(0);

  // Binomial state
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [handwritingUnderline, setHandwritingUnderline] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const itemsPerPage = 24;

  const handleCopy = (item: ScientificNameItem) => {
    const text = `${item.bengaliName} (${item.bengaliPronunciation}) - ${item.scientificName}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Branches state
  const [branchFilter, setBranchFilter] = useState<'all' | 'ভৌত শাখা (Basic)' | 'ফলিত শাখা (Applied)'>('all');

  const currentKingdom = KINGDOMS_DATA.find(k => k.id === selectedKingdom) || KINGDOMS_DATA[0];
  const currentMystery = MYSTERY_ORGANISMS[mysteryIdx];

  const handleMysteryChoice = (kingdomId: string) => {
    if (mysteryAnswer !== null) return;
    setMysteryAnswer(kingdomId);
    if (kingdomId === currentMystery.correctKingdomId) {
      setMysteryScore(prev => prev + 1);
    }
  };

  const nextMystery = () => {
    setMysteryAnswer(null);
    setMysteryIdx(prev => (prev + 1) % MYSTERY_ORGANISMS.length);
  };

  const filteredCatalog = SCIENTIFIC_NAMES_DIRECTORY.filter(entry => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      entry.bengaliName.toLowerCase().includes(q) ||
      entry.scientificName.toLowerCase().includes(q) ||
      entry.bengaliPronunciation.toLowerCase().includes(q) ||
      entry.importance.toLowerCase().includes(q);
    const matchesCat = selectedCategory === 'all' || entry.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const totalPages = Math.ceil(filteredCatalog.length / itemsPerPage) || 1;
  const paginatedCatalog = filteredCatalog.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const filteredBranches = BRANCHES_DATA.filter(b => {
    if (branchFilter === 'all') return true;
    return b.type === branchFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-slate-100">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-cyan-950/80 border border-emerald-500/30 rounded-2xl p-6 mb-6 shadow-xl backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
              <Dna className="h-4 w-4" />
              <span>জীববিজ্ঞান ১ম অধ্যায়: জীবন পাঠ (Lesson on Life)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              পঞ্চরাজ্য শ্রেণিবিন্যাস ও দ্বিপদ নামকরণ স্টুডিও
            </h1>
            <p className="text-slate-300 text-sm mt-1">
              হুইটেকার ও মারগুলিসের ৫টি রাজ্য অনুসন্ধান, দ্বিপদ নামকরণের বৈজ্ঞানিক নিয়মাবলী ও জীববিজ্ঞানের শাখা এক্সপ্লোরার।
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80 self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveTab('interactiveDiagrams')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'interactiveDiagrams'
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-md font-extrabold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>২ডি ও ৩ডি চিত্র ল্যাব</span>
            </button>
            <button
              onClick={() => setActiveTab('fiveKingdoms')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                activeTab === 'fiveKingdoms'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              পঞ্চরাজ্য এক্সপ্লোরার
            </button>
            <button
              onClick={() => setActiveTab('binomial')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                activeTab === 'binomial'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              দ্বিপদ নামকরণ স্টুডিও
            </button>
            <button
              onClick={() => setActiveTab('branches')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                activeTab === 'branches'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              জীববিজ্ঞানের শাখাসমূহ
            </button>
          </div>
        </div>
      </div>

      {/* TAB 0: 2D TO 3D DIAGRAM STUDIO */}
      {activeTab === 'interactiveDiagrams' && (
        <div className="space-y-6">
          <BiologyChapter1DiagramStudio initialTopicId="monera" />
        </div>
      )}

      {/* TAB 1: FIVE KINGDOMS */}
      {activeTab === 'fiveKingdoms' && (
        <div className="space-y-6">
          {/* Kingdom Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {KINGDOMS_DATA.map((k) => (
              <button
                key={k.id}
                onClick={() => setSelectedKingdom(k.id)}
                className={`p-3 rounded-xl border transition-all text-left flex flex-col justify-between ${
                  selectedKingdom === k.id
                    ? `${k.accentBg} border-2 shadow-lg`
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                    রাজ্য {k.id === 'monera' ? '১' : k.id === 'protista' ? '২' : k.id === 'fungi' ? '৩' : k.id === 'plantae' ? '৪' : '৫'}
                  </span>
                  <div className="font-extrabold text-sm sm:text-base text-white">{k.nameBn.split(' ')[0]}</div>
                </div>
                <div className="text-[11px] text-slate-400 font-mono mt-1">{k.nameEn}</div>
              </button>
            ))}
          </div>

          {/* Selected Kingdom Detailed Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    {currentKingdom.superKingdom}
                  </span>
                  <h2 className="text-2xl font-black text-white">{currentKingdom.nameBn}</h2>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${currentKingdom.badgeBorder}`}>
                  {currentKingdom.nameEn}
                </span>
              </div>

              {/* Grid of Key Properties */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="text-xs text-slate-400 font-medium mb-1">কোষের ধরন ও সংগঠন</div>
                  <div className="text-sm font-semibold text-white">{currentKingdom.cellType}</div>
                </div>
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="text-xs text-slate-400 font-medium mb-1">নিউক্লিয়ার গঠন</div>
                  <div className="text-sm font-semibold text-white">{currentKingdom.nuclearMembrane}</div>
                </div>
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="text-xs text-slate-400 font-medium mb-1">কোষপ্রাচীরের রাসায়নিক উপাদান</div>
                  <div className="text-sm font-semibold text-white">{currentKingdom.cellWall}</div>
                </div>
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="text-xs text-slate-400 font-medium mb-1">পুষ্টি পদ্ধতি (Nutrition)</div>
                  <div className="text-sm font-semibold text-white">{currentKingdom.nutrition}</div>
                </div>
              </div>

              {/* Key Diagnostic Features */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  শনাক্তকারী অনন্য বৈশিষ্ট্যসমূহ:
                </h3>
                <ul className="space-y-2">
                  {currentKingdom.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/40">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Examples */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  আদর্শ উদাহরণ ও বৈজ্ঞানিক নাম:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentKingdom.examples.map((ex, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-800 text-slate-200 rounded-lg text-xs font-medium border border-slate-700">
                      {ex}
                    </span>
                  ))}
                  {currentKingdom.scientificExamples.map((sci, idx) => (
                    <span key={'sci-' + idx} className="px-3 py-1 bg-emerald-950/60 text-emerald-300 rounded-lg text-xs italic font-serif border border-emerald-700/50">
                      {sci}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mystery Organism Classification Challenge */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Sparkles className="h-4 w-4" />
                    <span>অর্গানিজম আইডেন্টিফায়ার চ্যালেঞ্জ</span>
                  </div>
                  <span className="text-xs bg-slate-800 px-2.5 py-1 rounded-full text-slate-300 font-mono">
                    স্কোর: {mysteryScore}
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-3">
                  ক্লুগুলো পড়ে জীবটিকে সঠিক রাজ্যে অন্তর্ভুক্ত করুন:
                </p>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-4">
                  <div className="font-bold text-sm text-emerald-400 mb-2">{currentMystery.name}</div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {currentMystery.clues.map((clue, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{clue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-xs font-bold text-slate-400 mb-2">কোন রাজ্যের অন্তর্ভুক্ত?</div>
                <div className="grid grid-cols-1 gap-1.5">
                  {KINGDOMS_DATA.map((k) => {
                    const isChosen = mysteryAnswer === k.id;
                    const isCorrect = k.id === currentMystery.correctKingdomId;
                    let btnStyle = 'bg-slate-800 hover:bg-slate-750 text-slate-200 border-slate-750';

                    if (mysteryAnswer !== null) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-600 text-white border-emerald-500 font-bold';
                      } else if (isChosen) {
                        btnStyle = 'bg-rose-600 text-white border-rose-500 font-bold';
                      } else {
                        btnStyle = 'bg-slate-850 text-slate-500 border-slate-800 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={k.id}
                        onClick={() => handleMysteryChoice(k.id)}
                        disabled={mysteryAnswer !== null}
                        className={`px-3 py-2 text-xs rounded-lg border text-left flex items-center justify-between transition-all ${btnStyle}`}
                      >
                        <span>{k.nameBn}</span>
                        {mysteryAnswer !== null && isCorrect && <CheckCircle2 className="h-4 w-4 text-white" />}
                        {mysteryAnswer !== null && isChosen && !isCorrect && <XCircle className="h-4 w-4 text-white" />}
                      </button>
                    );
                  })}
                </div>

                {mysteryAnswer !== null && (
                  <div className={`mt-3 p-3 rounded-lg text-xs border ${
                    mysteryAnswer === currentMystery.correctKingdomId
                      ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-200'
                      : 'bg-rose-950/60 border-rose-500/40 text-rose-200'
                  }`}>
                    <div className="font-bold mb-1">
                      {mysteryAnswer === currentMystery.correctKingdomId ? '🎉 চমৎকার! সঠিক উত্তর!' : '❌ সঠিক উত্তরটি লক্ষ্য করুন:'}
                    </div>
                    <div>{currentMystery.explanation}</div>
                  </div>
                )}
              </div>

              {mysteryAnswer !== null && (
                <button
                  onClick={nextMystery}
                  className="mt-4 w-full py-2 px-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 shadow-md transition"
                >
                  <span>পরবর্তী চ্যালেঞ্জ</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: BINOMIAL NOMENCLATURE */}
      {activeTab === 'binomial' && (
        <div className="space-y-6">
          {/* Rules Overview */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-800">
              <div>
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-emerald-400" />
                  <span>দ্বিপদ নামকরণের আন্তর্জাতিক নিয়মাবলী (ICBN / ICZN)</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  ক্যারোলাস লিনিয়াস প্রবর্তিত বৈজ্ঞানিক নামকরণের সার্বজনীন বিধান
                </p>
              </div>

              <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
                <span className="text-xs font-semibold text-slate-400 px-2">লিখন পদ্ধতি:</span>
                <button
                  onClick={() => setHandwritingUnderline(false)}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium transition ${
                    !handwritingUnderline
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ছাপার অক্ষরে (ইটালিক)
                </button>
                <button
                  onClick={() => setHandwritingUnderline(true)}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium transition ${
                    handwritingUnderline
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  হাতে লেখায় (আন্ডারলাইন)
                </button>
              </div>
            </div>

            {/* Interactive Anatomical Rule Breakdown */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
                নমুনা বৈজ্ঞানিক নাম বিশ্লেষণ (ধান / Rice):
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-center py-4 bg-slate-900/60 rounded-xl border border-slate-800/80">
                <div className="p-3 bg-slate-800/60 rounded-xl border border-emerald-500/40">
                  <div className={`text-2xl font-serif text-emerald-300 font-bold ${handwritingUnderline ? 'underline underline-offset-4' : 'italic'}`}>
                    Oryza
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 block mt-1">১ম পদ: গণ (Genus)</span>
                  <span className="text-[10px] text-slate-400">প্রথম অক্ষর Capital 'O'</span>
                </div>

                <span className="text-xl text-slate-500 font-bold">+</span>

                <div className="p-3 bg-slate-800/60 rounded-xl border border-cyan-500/40">
                  <div className={`text-2xl font-serif text-cyan-300 font-bold ${handwritingUnderline ? 'underline underline-offset-4' : 'italic'}`}>
                    sativa
                  </div>
                  <span className="text-[11px] font-bold text-cyan-400 block mt-1">২য় পদ: প্রজাতি (Species)</span>
                  <span className="text-[10px] text-slate-400">সবগুলো অক্ষর Small 's'</span>
                </div>

                <span className="text-xl text-slate-500 font-bold">=</span>

                <div className="p-3 bg-slate-800/80 rounded-xl border border-amber-500/40">
                  <div className={`text-2xl font-serif text-amber-300 font-bold ${handwritingUnderline ? '' : 'italic'}`}>
                    {handwritingUnderline ? (
                      <>
                        <u className="underline-offset-4">Oryza</u> <u className="underline-offset-4">sativa</u>
                      </>
                    ) : (
                      'Oryza sativa'
                    )}
                    <span className="text-xs text-slate-400 font-sans not-italic ml-2 font-normal">L.</span>
                  </div>
                  <span className="text-[11px] font-bold text-amber-400 block mt-1">পূর্ণ বৈজ্ঞানিক নাম</span>
                  <span className="text-[10px] text-slate-400">'L.' হলো আবিষ্কারক লিনিয়াসের সংক্ষেপ</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs text-slate-300">
                <div className="p-2.5 bg-slate-900/40 rounded-lg border border-slate-800">
                  <strong className="text-emerald-400 block mb-0.5">১. ভাষা:</strong>
                  ল্যাটিন (Latin) ভাষা ব্যবহার করতে হবে যাতে এর অর্থ পরিবর্তিত না হয়।
                </div>
                <div className="p-2.5 bg-slate-900/40 rounded-lg border border-slate-800">
                  <strong className="text-cyan-400 block mb-0.5">২. মুদ্রণ ও হস্তলিপি:</strong>
                  ছাপার অক্ষরে ইটালিক এবং হাতে লিখলে নিচে পৃথক পৃথকভাবে আন্ডারলাইন আবশ্যক।
                </div>
                <div className="p-2.5 bg-slate-900/40 rounded-lg border border-slate-800">
                  <strong className="text-amber-400 block mb-0.5">৩. অগ্রাধিকার আইন:</strong>
                  সর্বপ্রথম বৈজ্ঞানিক নিয়মে প্রকাশিত বিজ্ঞানসম্মত নামই আন্তর্জাতিকভাবে গৃহীত হবে।
                </div>
              </div>
            </div>

            {/* Scientific Name Catalog with Search, Filter & Pagination */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                    <Globe className="h-5 w-5 text-emerald-400" />
                    <span>গুরুত্বপূর্ণ বৈজ্ঞানিক নামের ডিরেক্টরি ({filteredCatalog.length}টি)</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    প্রতিটি জীবের প্রমিত বাংলা নাম, দ্বিপদ বৈজ্ঞানিক নাম এবং আন্তর্জাতিক ল্যাটিন নামের নির্ভুল বাংলা উচ্চারণ
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <div className="relative">
                    <Search className="h-3.5 w-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="অনুসন্ধান (নাম, উচ্চারণ বা ল্যাটিন)..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="bg-slate-950 border border-slate-700 text-xs text-white pl-8 pr-3 py-1.5 rounded-lg outline-none focus:border-emerald-500 w-52"
                    />
                  </div>

                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="bg-slate-950 border border-slate-700 text-xs text-white px-2 py-1.5 rounded-lg outline-none focus:border-emerald-500 max-w-[150px] truncate"
                  >
                    {SCIENTIFIC_NAME_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat === 'সকল ক্যাটাগরি' ? 'all' : cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Cards Grid */}
              {paginatedCatalog.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {paginatedCatalog.map((item) => (
                    <div
                      key={item.id}
                      className="bg-slate-950/90 p-4 rounded-xl border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-sm hover:shadow-emerald-950/20"
                    >
                      <div>
                        {/* Header: Name, Category & Copy */}
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                              #{item.id}
                            </span>
                            <span className="font-extrabold text-sm sm:text-base text-white">
                              {item.bengaliName}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="text-[10px] px-2 py-0.5 bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 rounded font-semibold whitespace-nowrap">
                              {item.category}
                            </span>
                            <button
                              onClick={() => handleCopy(item)}
                              className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
                              title="নাম ও উচ্চারণ কপি করুন"
                            >
                              {copiedId === item.id ? (
                                <Check className="h-3.5 w-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="h-3.5 w-3.5" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* বাংলা উচ্চারণ (Bangla Pronunciation) */}
                        <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold mb-2 bg-amber-950/50 px-2.5 py-1 rounded-lg border border-amber-500/30 w-fit">
                          <span className="text-[10px] uppercase font-bold text-amber-400">উচ্চারণ:</span>
                          <span className="tracking-wide font-sans">{item.bengaliPronunciation}</span>
                        </div>

                        {/* দ্বিপদ বৈজ্ঞানিক নাম (Scientific Name) */}
                        <div className="text-sm sm:text-base font-serif text-emerald-300 font-bold italic tracking-wide mb-2">
                          {handwritingUnderline ? (
                            <>
                              <u>{item.scientificName.split(' ')[0]}</u>{' '}
                              <u>{item.scientificName.split(' ').slice(1).join(' ')}</u>
                            </>
                          ) : (
                            item.scientificName
                          )}
                        </div>

                        {/* শিক্ষণীয় তাৎপর্য ও গুরুত্ব */}
                        <div className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
                          {item.importance}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-slate-950/60 rounded-xl border border-slate-800">
                  <p className="text-slate-400 text-sm">কোনো বৈজ্ঞানিক নাম পাওয়া যায়নি। অনুসন্ধানের শব্দ পরিবর্তন করুন।</p>
                </div>
              )}

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-6 pt-4 border-t border-slate-800">
                  <div className="text-xs text-slate-400">
                    সর্বমোট <strong className="text-emerald-400">{filteredCatalog.length}</strong>টির মধ্যে{' '}
                    <strong className="text-white">
                      {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredCatalog.length)}
                    </strong>{' '}
                    প্রদর্শিত হচ্ছে (পৃষ্ঠা {currentPage} / {totalPages})
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                      disabled={currentPage === 1}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-300 hover:text-white disabled:opacity-40 disabled:pointer-events-none transition"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" />
                      <span>পূর্ববর্তী</span>
                    </button>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                        let pageNum = i + 1;
                        if (totalPages > 7) {
                          if (currentPage > 4) {
                            pageNum = currentPage - 3 + i;
                            if (pageNum > totalPages) pageNum = totalPages - (6 - i);
                          }
                        }
                        return (
                          <button
                            key={pageNum}
                            onClick={() => setCurrentPage(pageNum)}
                            className={`w-7 h-7 rounded-lg text-xs font-bold transition ${
                              currentPage === pageNum
                                ? 'bg-emerald-500 text-slate-950 shadow-md font-extrabold'
                                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:text-white'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-700 text-slate-300 hover:text-white disabled:opacity-40 disabled:pointer-events-none transition"
                    >
                      <span>পরবর্তী</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: BRANCHES OF BIOLOGY */}
      {activeTab === 'branches' && (
        <div className="space-y-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-5 border-b border-slate-800">
              <div>
                <h2 className="text-xl font-black text-white flex items-center gap-2">
                  <Layers className="h-5 w-5 text-emerald-400" />
                  <span>জীববিজ্ঞানের শাখাসমূহ: ভৌত বনাম ফলিত শাখা</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  তত্ত্বীয় জ্ঞান অন্বেষণ বনাম মানবকল্যাণ ও অর্থনৈতিক প্রায়োগিক শাখা
                </p>
              </div>

              {/* Filter */}
              <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
                <Filter className="h-3.5 w-3.5 text-slate-400 ml-1" />
                <button
                  onClick={() => setBranchFilter('all')}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium transition ${
                    branchFilter === 'all'
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  সকল শাখা
                </button>
                <button
                  onClick={() => setBranchFilter('ভৌত শাখা (Basic)')}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium transition ${
                    branchFilter === 'ভৌত শাখা (Basic)'
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ভৌত শাখা (Basic)
                </button>
                <button
                  onClick={() => setBranchFilter('ফলিত শাখা (Applied)')}
                  className={`px-2.5 py-1 text-xs rounded-lg font-medium transition ${
                    branchFilter === 'ফলিত শাখা (Applied)'
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  ফলিত শাখা (Applied)
                </button>
              </div>
            </div>

            {/* Branches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredBranches.map((branch, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 hover:border-emerald-500/40 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-extrabold text-base text-white">{branch.nameBn}</h3>
                      <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold border ${
                        branch.type.includes('Basic')
                          ? 'border-cyan-500/40 text-cyan-400 bg-cyan-950/40'
                          : 'border-amber-500/40 text-amber-400 bg-amber-950/40'
                      }`}>
                        {branch.type}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-emerald-400 mb-2">{branch.nameEn}</div>
                    <p className="text-xs text-slate-300 mb-3">{branch.description}</p>
                  </div>

                  <div className="bg-slate-900/60 px-3 py-2 rounded-lg border border-slate-800 text-[11px] text-slate-400">
                    <span className="font-bold text-slate-300">আলোচ্য বিষয়: </span>
                    <span>{branch.exampleTopic}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
