/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Activity,
  Heart,
  Droplets,
  Calculator,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Info,
  Scale,
  Flame,
  Apple,
  RotateCcw
} from 'lucide-react';

interface BiologyChapter5LabProps {
  defaultTab?: 'digestiveSystem' | 'nutritionBmi' | 'plantNutrition';
}

interface DigestiveOrgan {
  id: string;
  nameBn: string;
  nameEn: string;
  phEnvironment: string;
  secretions: string;
  enzymes: string[];
  roleDescription: string;
  processedNutrients: string;
  positionY: number; // percentage in diagram
}

const DIGESTIVE_ORGANS: DigestiveOrgan[] = [
  {
    id: 'mouth',
    nameBn: 'মুখগহ্বর ও লালাগ্রন্থি',
    nameEn: 'Oral Cavity & Salivary Glands',
    phEnvironment: 'নিরপেক্ষ বা মৃদু ক্ষারীয় (pH ~ 6.8 - 7.0)',
    secretions: 'লালারস (Saliva), মিউসিন ও পানি',
    enzymes: ['টায়ালিন (Salivary Amylase)', 'মল্টেজ (Maltase)'],
    roleDescription: 'দাঁত দিয়ে খাদ্য চর্বণ এবং লালারসের টায়ালিন দ্বারা সেদ্ধ শ্বেতসার ভেঙে মল্টোজে রূপান্তর। কোনো আমিষ বা চর্বির পরিপাক হয় না।',
    processedNutrients: 'শুধুমাত্র শ্বেতসার (Carbohydrate) এর আংশিক পরিপাক',
    positionY: 10
  },
  {
    id: 'stomach',
    nameBn: 'পাকস্থলী ও গ্যাস্ট্রিক গ্রন্থি',
    nameEn: 'Stomach & Gastric Glands',
    phEnvironment: 'তীব্র অম্লীয় (pH ~ 1.5 - 2.0)',
    secretions: 'হাইড্রোক্লোরিক এসিড (HCl), পেপসিনোজেন ও মিউকাস',
    enzymes: ['পেপসিন (Pepsin)'],
    roleDescription: 'HCl খাদ্যের ক্ষতিকর ব্যাকটেরিয়া মেরে ফেলে ও পেপসিনোজেনকে পেপসিনে সক্রিয় করে। পেপসিন জটিল প্রোটিনকে ভেঙে প্রোটিওজ ও পেপটনে রূপান্তর করে। খাদ্য পেস্টের মতো কাইমে (Chyme) পরিণত হয়।',
    processedNutrients: 'শুধুমাত্র আমিষ (Protein) এর প্রাথমিক পরিপাক',
    positionY: 35
  },
  {
    id: 'liver',
    nameBn: 'যকৃৎ ও পিত্তথলি',
    nameEn: 'Liver & Gall Bladder',
    phEnvironment: 'ক্ষারীয় (pH ~ 7.8 - 8.6)',
    secretions: 'পিত্তরস (Bile Salts & Bile Pigments)',
    enzymes: ['কোনো এনজাইম নেই'],
    roleDescription: 'যকৃৎ মানবদেহের সর্ববৃহৎ গ্রন্থি। পিত্তরস পিত্তথলিতে জমা থাকে এবং অম্লীয় কাইমকে ক্ষারীয় করে। পিত্তলবণ চর্বিকে ভেঙে ক্ষুদ্র ড্রপলেটে পরিণত করে (ইমালসিফিকেশন / Emulsification)।',
    processedNutrients: 'স্নেহপদার্থের ইমালসিফিকেশন ও ক্ষারীয় মাধ্যম তৈরি',
    positionY: 45
  },
  {
    id: 'pancreas',
    nameBn: 'অগ্ন্যাশয় (মিশ্র গ্রন্থি)',
    nameEn: 'Pancreas (Exocrine & Endocrine)',
    phEnvironment: 'ক্ষারীয় (pH ~ 8.0 - 8.3)',
    secretions: 'অগ্ন্যাশয় রস (Pancreatic Juice)',
    enzymes: ['ট্রিপসিন (Trypsin)', 'অগ্ন্যাশয় অ্যামাইলেজ (Amylase)', 'লাইপেজ (Lipase)'],
    roleDescription: 'আমিষ পরিপাক করে ট্রিপসিন, শর্করা পরিপাক করে অ্যামাইলেজ এবং ইমালসিফাইড ফ্যাট পরিপাক করে লাইপেজ। এটি সব ধরনের খাদ্য পরিপাকের পূর্ণাঙ্গ রস।',
    processedNutrients: 'শর্করা, আমিষ ও স্নেহ — তিন ধরনের খাদ্যেরই পরিপাক',
    positionY: 52
  },
  {
    id: 'smallIntestine',
    nameBn: 'ক্ষুদ্রান্ত্র ও ভিলাই',
    nameEn: 'Small Intestine (Ileum) & Villi',
    phEnvironment: 'মৃদু ক্ষারীয় (pH ~ 7.5 - 8.0)',
    secretions: 'আন্ত্রিক রস (Succus Entericus)',
    enzymes: ['মল্টেজ, সুক্রেজ, ল্যাকটেজ', 'পেপটিডেজ / ইরেপসিন', 'আন্ত্রিক লাইপেজ'],
    roleDescription: 'সকল খাদ্য উপাদানের পরিপাক সমাপ্ত হয়। শর্করা থেকে গ্লুকোজ, আমিষ থেকে অ্যামিনো এসিড এবং স্নেহ থেকে ফ্যাটি এসিড ও গ্লিসারল তৈরি হয়। ভিলাইয়ের রক্তজালক ও ল্যাকটিয়েল দ্বারা খাদ্য শোষিত হয়।',
    processedNutrients: 'চূড়ান্ত পরিপাক ও শোষণ (গ্লুকোজ, অ্যামিনো এসিড, ফ্যাটি এসিড)',
    positionY: 70
  },
  {
    id: 'largeIntestine',
    nameBn: 'বৃহদান্ত্র ও মলাশয়',
    nameEn: 'Large Intestine, Colon & Rectum',
    phEnvironment: 'মৃদু অম্লীয় থেকে নিরপেক্ষ',
    secretions: 'মিউকাস',
    enzymes: ['কোনো পরিপাককারী এনজাইম নেই'],
    roleDescription: 'অপাচ্য অংশের অতিরিক্ত পানি ও লবণ শোষণ করে। মল তৈরি করে মলাশয়ে জমা রাখে এবং মলদ্বারের মাধ্যমে বর্জ্য বাইরে নিষ্কাশন করে।',
    processedNutrients: 'পানি ও খনিজ লবণ শোষণ এবং মল গঠন',
    positionY: 85
  }
];

interface PlantDeficiency {
  element: string;
  symbol: string;
  type: 'ম্যাক্রো উপাদান (Macro)' | 'মাইক্রো উপাদান (Micro)';
  role: string;
  symptomNameBn: string;
  symptomDescription: string;
  leafVisualColor: string;
  leafEffect: string;
  remedy: string;
}

const PLANT_DEFICIENCIES: PlantDeficiency[] = [
  {
    element: 'নাইট্রোজেন',
    symbol: 'N',
    type: 'ম্যাক্রো উপাদান (Macro)',
    role: 'প্রোটিন, নিউক্লিক এসিড ও ক্লোরোফিল অণুর প্রধান গাঠনিক উপাদান।',
    symptomNameBn: 'ক্লোরোসিস (Chlorosis) ও খর্বাকৃতি',
    symptomDescription: 'ক্লোরোফিল সৃষ্টিতে ব্যাঘাত ঘটে। প্রথমে পুরোনো পাতাগুলো হলুদ হয়ে যায়, পরে কচি পাতায় ছড়ায়। কোষ বিভাজন ও দৈহিক বৃদ্ধি হ্রাস পায়।',
    leafVisualColor: 'from-amber-200 to-yellow-400 text-yellow-950',
    leafEffect: 'সমগ্র পাতা ফ্যাকাশে হলুদ হয়ে যায় (Chlorosis)',
    remedy: 'জমিতে ইউরিয়া সার প্রয়োগ অথবা কম্পোস্ট সার বৃদ্ধি।'
  },
  {
    element: 'ফসফরাস',
    symbol: 'P',
    type: 'ম্যাক্রো উপাদান (Macro)',
    role: 'ATP, DNA, RNA ও কোষঝিল্লির ফসফোলিপিডের প্রধান অংশ; মূল বৃদ্ধি নিয়ন্ত্রণ করে।',
    symptomNameBn: 'পাতা রক্তাভ-বেগুনি বর্ণ ও মূল বৃদ্ধি হ্রাস',
    symptomDescription: 'পাতা গাঢ় সবুজ ও মৃতু নীলাভ-বেগুনি (Purple) বর্ণ ধারণ করে। পাতা ও ফুল-ফল অকালে ঝরে যায়। উদ্ভিদের শিকড় দুর্বল হয়।',
    leafVisualColor: 'from-purple-300 to-indigo-600 text-white',
    leafEffect: 'পাতায় গাঢ় লালচে-বেগুনি ছোপ ও দুর্বল কান্ড',
    remedy: 'টিএসপি (TSP) বা ডিএপি (DAP) ফসফেট সার প্রয়োগ।'
  },
  {
    element: 'পটাসিয়াম',
    symbol: 'K',
    type: 'ম্যাক্রো উপাদান (Macro)',
    role: 'পত্ররন্ধ্র (Stomata) খোলা ও বন্ধ নিয়ন্ত্রণ, অভিস্রবণ এবং উৎসেচক সক্রিয়করণ।',
    symptomNameBn: 'ডাইব্যাক (Die-back) ও পাতা পোড়া লক্ষণ',
    symptomDescription: 'পাতার শীর্ষ ও কিনারা হলুদ হয়ে পুড়ে যাওয়ার মতো বাদামি বর্ণ ধারণ করে (Marginal necrosis)। শীর্ষভাগ মরে যায় যাকে ডাইব্যাক বলে।',
    leafVisualColor: 'from-amber-400 via-orange-600 to-amber-950 text-white',
    leafEffect: 'পাতার কিনারায় বাদামি পোড়া দাগ ও শীর্ষ মুকুল শুকানো',
    remedy: 'মিউরেট অব পটাশ (MOP) সার প্রয়োগ।'
  },
  {
    element: 'ক্যালসিয়াম',
    symbol: 'Ca',
    type: 'ম্যাক্রো উপাদান (Macro)',
    role: 'কোষপ্রাচীরের মধ্যপর্দায় ক্যালসিয়াম পেকটেট গঠন ও সাইটোপ্লাজমীয় সংকেত পরিবহন।',
    symptomNameBn: 'বর্ধনশীল শীর্ষ ও পাতার কুঁকড়ে যাওয়া',
    symptomDescription: 'উদ্ভিদের মূল ও কাণ্ডের বর্ধনশীল শীর্ষভাগ মরে যায়। কচি পাতাগুলো কুঁকড়ে বিকৃত হয়ে পড়ে এবং ফুল কুঁড়ি অবস্থায় ঝরে যায়।',
    leafVisualColor: 'from-emerald-300 via-slate-400 to-zinc-600 text-white',
    leafEffect: 'কচি পাতা কুঁকড়ে বিকৃত ও শীর্ষ মরে যাওয়া',
    remedy: 'চুন (কৃষি চুন / জিপসাম) প্রয়োগ করে মাটির ক্যালসিয়াম বৃদ্ধি।'
  },
  {
    element: 'ম্যাগনেসিয়াম',
    symbol: 'Mg',
    type: 'ম্যাক্রো উপাদান (Macro)',
    role: 'ক্লোরোফিল অণুর কেন্দ্রস্থিত পরমাণু এবং কার্বোহাইড্রেট বিপাকের কো-ফ্যাক্টর।',
    symptomNameBn: 'শিরার মধ্যবর্তী ক্লোরোসিস (Interveinal Chlorosis)',
    symptomDescription: 'পাতার সবুজ শিরাগুলোর মধ্যবর্তী অংশ হলুদ বর্ণ ধারণ করে কিন্তু প্রধান শিরাগুলো সবুজ থাকে। পাতার বৃদ্ধি মারাত্মকভাবে ব্যাহত হয়।',
    leafVisualColor: 'from-yellow-300 via-emerald-600 to-yellow-500 text-slate-900',
    leafEffect: 'পাতার প্রধান শিরা সবুজ, মধ্যবর্তী অংশ হলুদ',
    remedy: 'ম্যাগনেসিয়াম সালফেট (ইপসম সল্ট) প্রয়োগ।'
  },
  {
    element: 'আয়রন বা লৌহ',
    symbol: 'Fe',
    type: 'ম্যাক্রো উপাদান (Macro)',
    role: 'সাইটোক্রোম ও ইলেকট্রন পরিবহন শৃঙ্খল এবং ক্লোরোফিল সংশ্লেষণের অনুঘটক।',
    symptomNameBn: 'কচি পাতায় তীব্র ক্লোরোসিস',
    symptomDescription: 'সর্বপ্রথম কচি পাতা সম্পূর্ণ ফ্যাকাশে সাদাটে-হলুদ হয়ে যায় কারণ লৌহ পুরোনো পাতা থেকে সহজে চলাচল করতে পারে না।',
    leafVisualColor: 'from-yellow-100 to-amber-200 text-amber-950',
    leafEffect: 'কচি পাতা ফ্যাকাশে সাদাটে-হলুদ বর্ণ ধারণ করে',
    remedy: 'ফেরাস সালফেট বা কিলেটেড আয়রন স্প্রে করা।'
  }
];

export const BiologyChapter5Lab: React.FC<BiologyChapter5LabProps> = ({ defaultTab = 'digestiveSystem' }) => {
  const [activeTab, setActiveTab] = useState<'digestiveSystem' | 'nutritionBmi' | 'plantNutrition'>(defaultTab);

  // Digestive System State
  const [selectedOrganId, setSelectedOrganId] = useState<string>('stomach');
  const [simulatedFood, setSimulatedFood] = useState<'carb' | 'protein' | 'fat'>('carb');

  // BMI & BMR Calculator State
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(16);
  const [heightCm, setHeightCm] = useState<number>(165);
  const [weightKg, setWeightKg] = useState<number>(55);
  const [activityFactor, setActivityFactor] = useState<number>(1.375); // Light exercise

  // Plant Nutrition State
  const [selectedDeficiencyElement, setSelectedDeficiencyElement] = useState<string>('N');

  const selectedOrgan = DIGESTIVE_ORGANS.find(o => o.id === selectedOrganId) || DIGESTIVE_ORGANS[1];
  const selectedDeficiency = PLANT_DEFICIENCIES.find(d => d.symbol === selectedDeficiencyElement) || PLANT_DEFICIENCIES[0];

  // Calculate BMI
  const heightM = heightCm / 100;
  const bmiValue = heightM > 0 ? Number((weightKg / (heightM * heightM)).toFixed(2)) : 0;

  let bmiCategory = '';
  let bmiColor = '';
  let bmiAdvice = '';

  if (bmiValue < 18.5) {
    bmiCategory = 'কম ওজন (Underweight)';
    bmiColor = 'text-amber-400 bg-amber-950/40 border-amber-500/40';
    bmiAdvice = 'পরিমিত পুষ্টিকর সুষম খাদ্য ও প্রোটিন সমৃদ্ধ খাবার বৃদ্ধি করুন। ক্যালরি গ্রহণ বাড়ানো প্রয়োজন।';
  } else if (bmiValue <= 24.9) {
    bmiCategory = 'আদর্শ ও সুস্বাস্থ্যকর ওজন (Normal)';
    bmiColor = 'text-emerald-400 bg-emerald-950/40 border-emerald-500/40';
    bmiAdvice = 'আপনার ওজন সম্পূর্ণ সঠিক ও স্বাস্থ্যবান! এই সুষম খাদ্য ও স্বাভাবিক শারীরিক সক্রিয়তা বজায় রাখুন।';
  } else if (bmiValue <= 29.9) {
    bmiCategory = 'অতিরিক্ত ওজন (Overweight)';
    bmiColor = 'text-orange-400 bg-orange-950/40 border-orange-500/40';
    bmiAdvice = 'অতিরিক্ত শর্করা ও চর্বিযুক্ত ফাস্টফুড কমান এবং প্রতিদিন অন্তত ৩০-৪৫ মিনিট নিয়মিত ব্যায়াম করুন।';
  } else {
    bmiCategory = 'স্থূলতা বা অতিওজন (Obese)';
    bmiColor = 'text-rose-400 bg-rose-950/40 border-rose-500/40';
    bmiAdvice = 'উচ্চ রক্তচাপ ও হৃদরোগের ঝুঁকি এড়াতে চিকিৎসকের পরামর্শে পরিকল্পিত খাদ্যনিয়ন্ত্রণ ও ব্যায়াম করুন।';
  }

  // Calculate BMR (Harris-Benedict Formula)
  let bmrValue = 0;
  if (gender === 'male') {
    bmrValue = 66 + (13.7 * weightKg) + (5 * heightCm) - (6.8 * age);
  } else {
    bmrValue = 655 + (9.6 * weightKg) + (1.8 * heightCm) - (4.7 * age);
  }
  bmrValue = Math.round(bmrValue);
  const totalDailyCalories = Math.round(bmrValue * activityFactor);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-slate-100">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-cyan-950/80 border border-emerald-500/30 rounded-2xl p-6 mb-6 shadow-xl backdrop-blur-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
              <Activity className="h-4 w-4" />
              <span>জীববিজ্ঞান ৫ম অধ্যায়: খাদ্য, পুষ্টি এবং পরিপাক</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              মানব পরিপাকতন্ত্র, পুষ্টি ও BMI ল্যাব
            </h1>
            <p className="text-slate-300 text-sm mt-1">
              পৌষ্টিক নালি ও উৎসেচক সিমুলেটর, উদ্ভিদের খনিজ পুষ্টি অভাব ও স্বাস্থ্যসম্মত BMI/BMR ক্যালকুলেটর।
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/80 self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveTab('digestiveSystem')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                activeTab === 'digestiveSystem'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              পৌষ্টিকতন্ত্র ও উৎসেচক
            </button>
            <button
              onClick={() => setActiveTab('nutritionBmi')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                activeTab === 'nutritionBmi'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              BMI ও BMR ক্যালকুলেটর
            </button>
            <button
              onClick={() => setActiveTab('plantNutrition')}
              className={`px-3 py-1.5 text-xs sm:text-sm font-bold rounded-lg transition-all ${
                activeTab === 'plantNutrition'
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              উদ্ভিদের খনিজ পুষ্টি ল্যাব
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: HUMAN DIGESTIVE SYSTEM */}
      {activeTab === 'digestiveSystem' && (
        <div className="space-y-6">
          {/* Food Simulation Selector */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xl flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Apple className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-bold text-white">পরিপাকের খাদ্য কণা ট্র্যাক করুন:</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSimulatedFood('carb')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  simulatedFood === 'carb'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                }`}
              >
                <span>ভাত / রুটি (শর্করা)</span>
              </button>
              <button
                onClick={() => setSimulatedFood('protein')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  simulatedFood === 'protein'
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                }`}
              >
                <span>মাছ / মাংস (আমিষ)</span>
              </button>
              <button
                onClick={() => setSimulatedFood('fat')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  simulatedFood === 'fat'
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-750'
                }`}
              >
                <span>তেল / মাখন (স্নেহ)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Organs Selector Column */}
            <div className="lg:col-span-4 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xl space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 pb-2 border-b border-slate-800">
                পৌষ্টিক নালি ও গ্রন্থির ক্রমধারা:
              </div>
              {DIGESTIVE_ORGANS.map((organ) => (
                <button
                  key={organ.id}
                  onClick={() => setSelectedOrganId(organ.id)}
                  className={`w-full p-3 rounded-xl border text-left transition flex items-center justify-between ${
                    selectedOrganId === organ.id
                      ? 'bg-emerald-950/50 border-emerald-500 text-white shadow-md'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div>
                    <div className="font-extrabold text-sm">{organ.nameBn}</div>
                    <div className="text-[11px] text-slate-400 font-mono">{organ.nameEn}</div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-emerald-400 font-semibold border border-slate-700">
                    {organ.enzymes[0] || 'এনজাইমহীন'}
                  </span>
                </button>
              ))}
            </div>

            {/* Organ Details & Enzyme Activity Card */}
            <div className="lg:col-span-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    {selectedOrgan.nameEn}
                  </span>
                  <h2 className="text-2xl font-black text-white">{selectedOrgan.nameBn}</h2>
                </div>
                <div className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-cyan-300 border border-cyan-500/30">
                  {selectedOrgan.phEnvironment}
                </div>
              </div>

              {/* Organ Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="text-xs text-slate-400 font-medium mb-1">নিঃসৃত রস বা ক্ষরণ</div>
                  <div className="text-sm font-semibold text-white">{selectedOrgan.secretions}</div>
                </div>
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="text-xs text-slate-400 font-medium mb-1">পরিপাকযোগ্য উপাদান</div>
                  <div className="text-sm font-semibold text-emerald-400">{selectedOrgan.processedNutrients}</div>
                </div>
              </div>

              {/* Enzymes Section */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  কার্যকর এনজাইম বা উৎসেচকসমূহ:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedOrgan.enzymes.map((enz, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-emerald-950/60 text-emerald-300 rounded-lg text-xs font-bold border border-emerald-500/40"
                    >
                      🧪 {enz}
                    </span>
                  ))}
                </div>
              </div>

              {/* Detailed Description */}
              <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  শারীরবৃত্তীয় কার্যপ্রণালী ও ভূমিকা:
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">{selectedOrgan.roleDescription}</p>
              </div>

              {/* Simulated Food Fate in this Organ */}
              <div className="p-4 rounded-xl border bg-slate-950/80 border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  {simulatedFood === 'carb' && '🍞 নির্বাচিত খাদ্য: শর্করা (স্টার্চ) — এই অঙ্গের অবস্থা:'}
                  {simulatedFood === 'protein' && '🥩 নির্বাচিত খাদ্য: আমিষ (প্রোটিন) — এই অঙ্গের অবস্থা:'}
                  {simulatedFood === 'fat' && '🧈 নির্বাচিত খাদ্য: স্নেহ বা ফ্যাট — এই অঙ্গের অবস্থা:'}
                </div>

                <div className="text-xs text-slate-300">
                  {simulatedFood === 'carb' && (
                    selectedOrgan.id === 'mouth' ? (
                      <span className="text-emerald-300">টায়ালিন সেদ্ধ শ্বেতসারকে ভেঙে মল্টোজে রূপান্তর করে।</span>
                    ) : selectedOrgan.id === 'stomach' ? (
                      <span className="text-amber-300">অম্লীয় পরিবেশে টায়ালিন নিষ্ক্রিয় হয়ে যাওয়ায় শর্করার পরিপাক বন্ধ থাকে।</span>
                    ) : (
                      <span className="text-emerald-300">অগ্ন্যাশয়ের অ্যামাইলেজ ও আন্ত্রিক মল্টেজ/সুক্রেজ ভেঙে একক শর্করা গ্লুকোজে পরিণত করে।</span>
                    )
                  )}

                  {simulatedFood === 'protein' && (
                    selectedOrgan.id === 'mouth' ? (
                      <span className="text-amber-300">মুখে কোনো প্রোটিন পরিপাককারী এনজাইম নেই; খাদ্য শুধুই চর্বিত ও পিচ্ছিল হয়।</span>
                    ) : selectedOrgan.id === 'stomach' ? (
                      <span className="text-emerald-300">তীব্র অম্লীয় HCl মাধ্যমে পেপসিন জটিল আমিষকে ভেঙে প্রোটিওজ ও পেপটনে পরিণত করে।</span>
                    ) : (
                      <span className="text-emerald-300">ট্রিপসিন ও পেপটিডেজ ভেঙে সর্বশেষ সরল রূপ 'অ্যামিনো এসিড' (Amino acids)-এ রূপান্তর করে।</span>
                    )
                  )}

                  {simulatedFood === 'fat' && (
                    selectedOrgan.id === 'mouth' || selectedOrgan.id === 'stomach' ? (
                      <span className="text-amber-300">এখানে ফ্যাটের কোনো দৃশ্যমান পরিপাক ঘটে না।</span>
                    ) : selectedOrgan.id === 'liver' ? (
                      <span className="text-emerald-300">পিত্তরস চর্বির বড় কণাকে ইমালসিফাই করে কোটি কোটি ক্ষুদ্র ড্রপলেটে পরিণত করে।</span>
                    ) : (
                      <span className="text-emerald-300">অগ্ন্যাশয়ের লাইপেজ ইমালসিফাইড ফ্যাটকে ভেঙে ফ্যাটি এসিড ও গ্লিসারলে পরিণত করে যা ভিলাই শোষণ করে।</span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: NUTRITION, BMI & BMR CALCULATOR */}
      {activeTab === 'nutritionBmi' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Input Controls */}
            <div className="lg:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <Calculator className="h-5 w-5 text-emerald-400" />
                <h2 className="text-lg font-bold text-white">শারীরিক পরিমাপ ও তথ্য দিন</h2>
              </div>

              {/* Gender */}
              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1.5">লিঙ্গ (Gender):</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setGender('male')}
                    className={`py-2 text-xs font-bold rounded-lg border transition ${
                      gender === 'male'
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md'
                        : 'bg-slate-950 text-slate-300 border-slate-800'
                    }`}
                  >
                    পুরুষ (Male)
                  </button>
                  <button
                    onClick={() => setGender('female')}
                    className={`py-2 text-xs font-bold rounded-lg border transition ${
                      gender === 'female'
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md'
                        : 'bg-slate-950 text-slate-300 border-slate-800'
                    }`}
                  >
                    নারী (Female)
                  </button>
                </div>
              </div>

              {/* Age */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                  <span>বয়স (বছর):</span>
                  <span className="text-emerald-400 font-bold">{age} বছর</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={80}
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Height */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                  <span>উচ্চতা (সেমি):</span>
                  <span className="text-emerald-400 font-bold">
                    {heightCm} সেমি ({(heightCm / 30.48).toFixed(1)} ফুট)
                  </span>
                </div>
                <input
                  type="range"
                  min={120}
                  max={210}
                  value={heightCm}
                  onChange={(e) => setHeightCm(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Weight */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1">
                  <span>ওজন (কেজি):</span>
                  <span className="text-emerald-400 font-bold">{weightKg} কেজি</span>
                </div>
                <input
                  type="range"
                  min={30}
                  max={130}
                  value={weightKg}
                  onChange={(e) => setWeightKg(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              {/* Activity Level */}
              <div>
                <label className="text-xs font-semibold text-slate-400 block mb-1">দৈনিক শারীরিক পরিশ্রমের মাত্রা:</label>
                <select
                  value={activityFactor}
                  onChange={(e) => setActivityFactor(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 text-xs text-white p-2.5 rounded-lg outline-none focus:border-emerald-500"
                >
                  <option value={1.2}>পরিশ্রমহীন বা অলস জীবন (BMR × ১.২)</option>
                  <option value={1.375}>হালকা ব্যায়াম বা খেলাধুলা (BMR × ১.৩৭৫)</option>
                  <option value={1.55}>মাঝারি ধরনের ব্যায়াম (BMR × ১.৫৫)</option>
                  <option value={1.725}>কঠোর পরিশ্রমী ও ক্রীড়াবিদ (BMR × ১.৭২৫)</option>
                </select>
              </div>
            </div>

            {/* Results & Health Advice */}
            <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Scale className="h-5 w-5 text-emerald-400" />
                  <span>গণনাকৃত ফলাফল ও স্বাস্থ্য বিশ্লেষণ</span>
                </h3>
                <span className="text-xs text-slate-400 font-mono">আন্তর্জাতিক মানদণ্ড</span>
              </div>

              {/* Two Big Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* BMI Card */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-slate-400 block mb-1">দেহের ভরসূচি (BMI)</span>
                  <div className="text-3xl font-black text-white mb-1.5">{bmiValue}</div>
                  <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold border ${bmiColor}`}>
                    {bmiCategory}
                  </span>
                  <div className="text-[11px] text-slate-400 mt-2 font-mono">
                    স্বাভাবিক সুস্থ মান: ১৮.৫ – ২৪.৯
                  </div>
                </div>

                {/* BMR Card */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <span className="text-xs font-bold text-slate-400 block mb-1">বেসাল মেটাবলিক রেট (BMR)</span>
                  <div className="text-3xl font-black text-emerald-400 mb-1.5">{bmrValue} <span className="text-sm font-normal text-slate-400">kcal/day</span></div>
                  <div className="text-xs text-slate-300 font-medium">
                    দৈনিক মোট ক্যালরি চাহিদা: <strong className="text-cyan-300 font-bold">{totalDailyCalories} kcal</strong>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    বিশ্রামকালীন ন্যূনতম শক্তি + শারীরিক পরিশ্রম
                  </div>
                </div>
              </div>

              {/* Health Guidance Message */}
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Heart className="h-4 w-4" />
                  <span>ব্যক্তিগত পুষ্টি ও খাদ্য পরামর্শ:</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{bmiAdvice}</p>
              </div>

              {/* Caloric Rule Breakdown */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                <div className="font-bold text-slate-300 mb-2">খাদ্য উপাদানের ক্যালরি মান স্মারক:</div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">১ গ্রাম শর্করা</span>
                    <strong className="text-amber-400 text-sm">৪.১ kcal</strong>
                  </div>
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">১ গ্রাম আমিষ</span>
                    <strong className="text-rose-400 text-sm">৪.১ kcal</strong>
                  </div>
                  <div className="p-2 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">১ গ্রাম ফ্যাট/স্নেহ</span>
                    <strong className="text-cyan-400 text-sm">৯.৩ kcal</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PLANT MINERAL NUTRITION */}
      {activeTab === 'plantNutrition' && (
        <div className="space-y-6">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="pb-4 mb-4 border-b border-slate-800">
              <h2 className="text-xl font-black text-white flex items-center gap-2">
                <Droplets className="h-5 w-5 text-emerald-400" />
                <span>উদ্ভিদের খনিজ পুষ্টি উপাদান ও অভাবজনিত লক্ষণ নির্ণয়</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                কোন পুষ্টি উপাদানের অভাবে উদ্ভিদের কী ধরনের ক্ষতি হয় এবং তার কৃষিভিত্তিক প্রতিকার
              </p>
            </div>

            {/* Element Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 mb-6">
              {PLANT_DEFICIENCIES.map((elem) => (
                <button
                  key={elem.symbol}
                  onClick={() => setSelectedDeficiencyElement(elem.symbol)}
                  className={`p-3 rounded-xl border text-center transition ${
                    selectedDeficiencyElement === elem.symbol
                      ? 'bg-emerald-950/70 border-emerald-500 shadow-md text-white'
                      : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-400'
                  }`}
                >
                  <div className="text-2xl font-black font-mono text-emerald-400">{elem.symbol}</div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5">{elem.element}</div>
                </button>
              ))}
            </div>

            {/* Symptom Visual & Diagnostics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Visual Leaf Simulator */}
              <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                  পাতার সিমুলেটেড লক্ষণ
                </span>

                {/* Leaf Shape Graphic */}
                <div className={`w-36 h-48 rounded-t-[100px] rounded-b-[40px] bg-gradient-to-b ${selectedDeficiency.leafVisualColor} shadow-2xl p-4 flex flex-col items-center justify-center border-2 border-white/20 transition-all duration-500 relative overflow-hidden`}>
                  <div className="w-1 h-32 bg-black/20 rounded-full" />
                  <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/30 pointer-events-none" />
                </div>

                <div className="mt-4 font-bold text-sm text-slate-200">
                  {selectedDeficiency.leafEffect}
                </div>
                <span className="text-[11px] text-amber-400 font-semibold mt-1">
                  লক্ষণ: {selectedDeficiency.symptomNameBn}
                </span>
              </div>

              {/* Diagnostic Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-white">
                      {selectedDeficiency.element} ({selectedDeficiency.symbol})
                    </h3>
                    <span className="text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30">
                      {selectedDeficiency.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{selectedDeficiency.role}</p>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                    <AlertTriangle className="h-4 w-4" />
                    <span>অভাবজনিত লক্ষণসমূহের বিশদ বিবরণ:</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {selectedDeficiency.symptomDescription}
                  </p>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>কৃষি প্রতিকার ও সার প্রয়োগ:</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium">
                    {selectedDeficiency.remedy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
