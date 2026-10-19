/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  X,
  HelpCircle,
  BookOpen
} from 'lucide-react';

interface Flashcard {
  id: string;
  category: string;
  frontQuestion: string;
  backAnswer: string;
  formulaOrKey?: string;
  tipBn?: string;
}

const FLASHCARDS: Flashcard[] = [
  {
    id: 'bio1_1',
    category: 'জীবন পাঠ (জীববিজ্ঞান ১ম অধ্যায়)',
    frontQuestion: 'হুইটেকার ও মারগুলিসের পঞ্চরাজ্যের নাম কী এবং মনেরা রাজ্যের মূল বৈশিষ্ট্য কী?',
    backAnswer: 'পাঁচটি রাজ্য: মনেরা, প্রোটিস্টা, ফানজাই, প্লান্টি, অ্যানিম্যালিয়া। মনেরা রাজ্যের মূল বৈশিষ্ট্য: এককোষী আদিকোষী (Prokaryotic), সুগঠিত নিউক্লিয়াস ও আবরণীবেষ্টিত অঙ্গাণু নেই, কোষপ্রাচীর পেপটিডোগ্লাইকান নির্মিত। যেমন: ব্যাকটেরিয়া ও নস্টক।',
    formulaOrKey: 'Prokaryota -> Monera | Eukaryota -> 4 Kingdoms',
    tipBn: 'মনেরা একমাত্র আদিকোষী রাজ্য।'
  },
  {
    id: 'bio1_2',
    category: 'জীবন পাঠ (জীববিজ্ঞান ১ম অধ্যায়)',
    frontQuestion: 'দ্বিপদ নামকরণের প্রধান ৩টি নিয়মাবলী কী কী?',
    backAnswer: '১. নাম ল্যাটিন ভাষার দুটি পদে গঠিত (১ম পদ গণ ও ২য় পদ প্রজাতি)। ২. গণের প্রথম অক্ষর Capital এবং প্রজাতির সব অক্ষর Small letter হবে। ৩. ছাপার অক্ষরে ইটালিক (বাঁকা) এবং হাতে লিখলে নিচে পৃথক পৃথকভাবে আন্ডারলাইন করতে হবে।',
    formulaOrKey: 'Homo sapiens (মানুষ), Oryza sativa (ধান)',
    tipBn: 'ক্যারোলাস লিনিয়াসকে দ্বিপদ নামকরণের জনক বলা হয়।'
  },
  {
    id: 'bio5_1',
    category: 'খাদ্য, পুষ্টি এবং পরিপাক (জীববিজ্ঞান ৫ম অধ্যায়)',
    frontQuestion: 'BMI এর সূত্র কী এবং আদর্শ সুস্থ মান কত?',
    backAnswer: 'BMI = দেহের ওজন (কেজি) ÷ [উচ্চতা (মিটার)]²। স্বাভাবিক আদর্শ ও সুস্বাস্থ্যকর মান হলো ১৮.৫ থেকে ২৪.৯। ২৫.০-২৯.৯ অতিরিক্ত ওজন এবং ৩০+ স্থূলতা নির্দেশ করে।',
    formulaOrKey: 'BMI = Weight (kg) / [Height (m)]² | Normal: 18.5 - 24.9',
    tipBn: '১ গ্রাম শর্করা/আমিষ = ৪.১ kcal, ১ গ্রাম চর্বি = ৯.৩ kcal।'
  },
  {
    id: 'bio5_2',
    category: 'খাদ্য, পুষ্টি এবং পরিপাক (জীববিজ্ঞান ৫ম অধ্যায়)',
    frontQuestion: 'উদ্ভিদের ক্লোরোসিস কী এবং নাইট্রোজেন ও পটাসিয়ামের অভাবজনিত লক্ষণ কী?',
    backAnswer: 'ক্লোরোফিল তৈরি বিঘ্নিত হয়ে পাতা হলুদ হওয়াকে ক্লোরোসিস বলে (N ও Mg এর অভাবে)। নাইট্রোজেনের অভাবে পুরোনো পাতা হলুদ হয়ে প্রবৃদ্ধি কমে; পটাসিয়ামের অভাবে পাতার শীর্ষ ও কিনারা পুড়ে বাদামি হয় এবং ডাইব্যাক (Die-back) ঘটে।',
    formulaOrKey: 'N -> ক্লোরোসিস | P -> বেগুনি পাতা | K -> ডাইব্যাক/পাতা পোড়া',
    tipBn: 'ম্যাগনেসিয়াম ক্লোরোফিলের কেন্দ্রীয় পরমাণু।'
  },
  {
    id: 'bio5_3',
    category: 'খাদ্য, পুষ্টি এবং পরিপাক (জীববিজ্ঞান ৫ম অধ্যায়)',
    frontQuestion: 'পাকস্থলী ও ক্ষুদ্রান্ত্রে প্রধান প্রধান এনজাইমগুলো কোন খাদ্য পরিপাক করে?',
    backAnswer: 'পাকস্থলীতে অম্লীয় মাধ্যমে পেপসিন আমিষকে প্রোটিওজ ও পেপটনে ভাঙে। ক্ষুদ্রান্ত্রে অগ্ন্যাশয় রসের ট্রিপসিন আমিষকে, অ্যামাইলেজ শর্করাকে এবং লাইপেজ ইমালসিফাইড ফ্যাটকে ভেঙে ফ্যাটি এসিড ও গ্লিসারলে পরিণত করে।',
    formulaOrKey: 'শর্করা -> গ্লুকোজ | আমিষ -> অ্যামিনো এসিড | স্নেহ -> ফ্যাটি এসিড + গ্লিসারল'
  },
  {
    id: 'chem9_1',
    category: 'এসিড-ক্ষার সমতা (অধ্যায় ৯)',
    frontQuestion: 'pH এর সংজ্ঞা কী এবং রক্ত ও ত্বকের আদর্শ pH কত?',
    backAnswer: 'কোনো দ্রবণের [H⁺] আয়নের মোলার ঘনমাত্রার ঋণাত্মক লগারিদমকে pH বলে (pH = -log[H⁺])। সুস্থ মানবদেহের রক্তের pH = ৭.৩৫ - ৭.৪৫ এবং ত্বকের স্বাভাবিক pH = ৫.৫ (মৃদু অম্লীয়)।',
    formulaOrKey: 'pH = -log₁₀[H⁺], pH + pOH = 14',
    tipBn: 'রক্তের pH ০.৫ পরিবর্তন হলে মৃত্যু ঝুঁকি তৈরি হয়।'
  },
  {
    id: 'chem9_2',
    category: 'এসিড-ক্ষার সমতা (অধ্যায় ৯)',
    frontQuestion: 'সব ক্ষারই ক্ষারক কিন্তু সব ক্ষারক ক্ষার নয় কেন?',
    backAnswer: 'ক্ষারক হলো সকল ধাতুর অক্সাইড ও হাইড্রোক্সাইড। কিন্তু যে ক্ষারকগুলো পানিতে দ্রবণীয় শুধু তারাই ক্ষার (Alkali)। যেমন Cu(OH)₂ পানিতে অদ্রবণীয় হওয়ায় ক্ষারক কিন্তু ক্ষার নয়; আর NaOH দ্রবণীয় হওয়ায় ক্ষারক ও ক্ষার উভয়ই।',
    tipBn: 'পানিতে দ্রবণীয়তা হলো ক্ষারের মূল শর্ত।'
  },
  {
    id: 'chem9_3',
    category: 'এসিড-ক্ষার সমতা (অধ্যায় ৯)',
    frontQuestion: 'তীব্র এসিড ও তীব্র ক্ষারকের প্রশমন তাপ সর্বদা ধ্রুব (-৫৭.৩৪ kJ) কেন হয়?',
    backAnswer: 'কারণ যেকোনো তীব্র এসিড ও ক্ষারের প্রশমন বিক্রিয়ায় প্রকৃতপক্ষে H⁺(aq) + OH⁻(aq) ⟶ H₂O(l) বিক্রিয়া ঘটে। ধাতু ও অ্যাসিড মূলক আয়নগুলো অপরিবর্তিত দর্শক আয়ন (Spectator ions) হিসেবে থাকে।',
    formulaOrKey: 'H⁺(aq) + OH⁻(aq) ⟶ H₂O(l); ΔH = -57.34 kJ/mol'
  },
  {
    id: '1',
    category: 'রসায়ন ও শক্তি (অধ্যায় ৮)',
    frontQuestion: 'ড্যানিয়েল কোষের প্রমাণ বিভব (E°cell) কত এবং এটি কীভাবে গঠিত হয়?',
    backAnswer: '১.১০ ভোল্ট। Zn অ্যানোডের জারণ বিভব (+০.৭৬ V) এবং Cu ক্যাথোডের বিজারণ বিভব (+০.৩৪ V) যোগ হয়ে E°cell = ০.৭৬ + ০.৩৪ = ১.১০ V পাওয়া যায়।',
    formulaOrKey: 'E°cell = E°ox(Zn) + E°red(Cu) = 1.10 V'
  },
  {
    id: '2',
    category: 'রসায়ন ও শক্তি (অধ্যায় ৮)',
    frontQuestion: 'তড়িৎ লেপনে ক্যাথোড ও অ্যানোড কীভাবে নির্বাচন করতে হয়?',
    backAnswer: 'যে বস্তুর ওপর প্রলেপ দিতে হবে (যেমন লোহার চামচ) তাকে ক্যাথোড (-) এবং যে মূল্যবান ধাতুর প্রলেপ দিতে হবে (যেমন খাঁটি রুপা বা সোনা) তাকে অ্যানোড (+) বানাতে হয়।',
    tipBn: 'গোল্ডেন রুল: যে জিনিসের রূপ সুন্দর করতে হবে সে ক্যাথোড (-)।'
  },
  {
    id: '3',
    category: 'রসায়ন ও শক্তি (অধ্যায় ৮)',
    frontQuestion: 'বিক্রিয়া তাপ বা এনথালপির পরিবর্তন (ΔH) হিসাবের সূত্র কী?',
    backAnswer: 'ΔH = B₁ (বিক্রিয়কের পুরাতন বন্ধন ভাঙার মোট শক্তি) - B₂ (উৎপাদের নতুন বন্ধন গড়ার মোট শক্তি)।',
    formulaOrKey: 'ΔH = B₁ - B₂ (kJ/mol)'
  },
  {
    id: '4',
    category: 'রাসায়নিক বিক্রিয়া (অধ্যায় ৭)',
    frontQuestion: 'লা-শাতেলিয়ার নীতি অনুসারে তাপোৎপাদী বিক্রিয়ায় তাপমাত্রা বৃদ্ধি করলে কী ঘটে?',
    backAnswer: 'সাম্যাবস্থা বামে (পশ্চাৎমুখী দিকে) সরে যায়, ফলে উৎপাদের পরিমাণ হ্রাস পায় এবং বিক্রিয়ক বৃদ্ধি পায়।',
    tipBn: 'N₂ + 3H₂ ⇌ 2NH₃ + 92 kJ এ তাপ বাড়ালে অ্যামোনিয়া উৎপাদন কমে।'
  },
  {
    id: '5',
    category: 'রাসায়নিক বিক্রিয়া (অধ্যায় ৭)',
    frontQuestion: 'জারণ-বিজারণে আধুনিক ইলেকট্রনীয় মতবাদের সংক্ষেপে রূপ কী?',
    backAnswer: 'জারণ = ইলেকট্রন বর্জন (জারণ মান বৃদ্ধি)। বিজারণ = ইলেকট্রন গ্রহণ (জারণ মান হ্রাস)।',
    formulaOrKey: 'OIL RIG (Oxidation Is Loss, Reduction Is Gain)'
  },
  {
    id: '6',
    category: 'মোলের ধারণা (অধ্যায় ৬)',
    frontQuestion: 'মোলের ইউনিভার্সাল মাস্টার রূপান্তর সমীকরণটি কী?',
    backAnswer: 'মোল সংখ্যা n = W/M = N/Nₐ = V/২২.৪ (STP) = S × V(L)',
    formulaOrKey: 'n = W/M = N/(6.02×10²³) = V/22.4 = S×V'
  },
  {
    id: '7',
    category: 'মোলের ধারণা (অধ্যায় ৬)',
    frontQuestion: 'লঘু দ্রবণ প্রস্তুতি ও মোলারিটি গণনার সূত্র কী?',
    backAnswer: 'W = (S × M × V) / ১০০০ এবং দ্রবণের লঘুকরণে V₁S₁ = V₂S₂',
    formulaOrKey: 'W = (SMV) / 1000'
  },
  {
    id: '8',
    category: 'রাসায়নিক বন্ধন (অধ্যায় ৫)',
    frontQuestion: 'সাধারণ তাপমাত্রায় H₂O তরল হলেও H₂S গ্যাসীয় কেন?',
    backAnswer: 'অক্সিজেনের উচ্চ তড়িৎ-ঋণাত্মকতার কারণে পানির অণুতে শক্তিশালী হাইড্রোজেন বন্ধন সৃষ্টি হয়, যা অণুগুলোকে কাছে টেনে তরল রাখে। কিন্তু সালফারের ঋণাত্মকতা কম হওয়ায় H₂S-এ দুর্বল ভ্যান ডার ওয়ালস বল থাকে, ফলে তা গ্যাসীয়।',
    tipBn: 'বোর্ড পরীক্ষার মোস্ট ফেভারিট অনুধাবন প্রশ্ন।'
  },
  {
    id: 'ch10_1',
    category: 'খনিজ সম্পদ: ধাতু ও অধাতু (অধ্যায় ১০)',
    frontQuestion: 'বাত্যাচুল্লিতে চুনাপাথরের ভূমিকা ও ধাতুমলের সমীকরণ কী?',
    backAnswer: 'চুনাপাথর (CaCO₃) তাপে ভেঙে ক্ষারকীয় চুন (CaO) তৈরি করে। এই চুন আকরিকের ক্ষতিকর অম্লীয় বালিকে (SiO₂) গলিত ক্যালসিয়াম সিলিকেট ধাতুমলে (CaSiO₃) রূপান্তর করে দূর করে।',
    formulaOrKey: 'CaCO₃ ⟶ CaO + CO₂ | CaO + SiO₂ ⟶ CaSiO₃ (ধাতুমল)'
  },
  {
    id: 'ch10_2',
    category: 'খনিজ সম্পদ: ধাতু ও অধাতু (অধ্যায় ১০)',
    frontQuestion: 'কপার তড়িৎ বিশোধনে অ্যানোড মাড কী এবং এতে কী থাকে?',
    backAnswer: 'ব্লিস্টার কপারের তড়িৎ বিশোধনে অ্যানোডের নিচে নিষ্ক্রিয় কম সক্রিয় মূল্যবান ধাতু যেমন সোনা (Au), রুপা (Ag) ও প্ল্যাটিনাম (Pt) আয়নিত না হয়ে কাদা আকারে তলানি পড়ে। একে অ্যানোড মাড বলে।',
    tipBn: 'অ্যানোড মাড থেকে মূল্যবান সোনা ও রুপা নিষ্কাশন করা হয়।'
  },
  {
    id: 'ch11_1',
    category: 'খনিজ সম্পদ: জীবাশ্ম (অধ্যায় ১১)',
    frontQuestion: 'অসম্পৃক্ততার শনাক্তকারী ব্রোমিন পরীক্ষা ও বেয়ার পরীক্ষার বর্ণ পরিবর্তন কী?',
    backAnswer: '১. ব্রোমিন পরীক্ষা: লাল বর্ণের ব্রোমিন দ্রবণ বর্ণহীন হয়ে ১,২-ডাইব্রোমোযৌগ তৈরি হয়।\n২. বেয়ার পরীক্ষা: ক্ষারীয় KMnO₄ এর বেগুনী/গোলাপী বর্ণ দূর হয়ে বর্ণহীন গ্লাইকল উৎপন্ন হয়।',
    formulaOrKey: 'CH₂=CH₂ + Br₂(লাল) ⟶ বর্ণহীন | CH₂=CH₂ + [O] ⟶ গ্লাইকল'
  },
  {
    id: 'ch11_2',
    category: 'খনিজ সম্পদ: জীবাশ্ম (অধ্যায় ১১)',
    frontQuestion: 'ইথাইন থেকে ইথান্যাল (অ্যালডিহাইড) তৈরির বিক্রিয়া শর্ত কী?',
    backAnswer: '২০% সালফিউরিক এসিড (H₂SO₄) এবং ২% মার্কিউরিক সালফেট (HgSO₄) প্রভাবকের উপস্থিতিতে ৬০°C তাপমাত্রায় ইথাইনে পানি যোগ করলে ইথান্যাল (CH₃CHO) তৈরি হয়।',
    formulaOrKey: 'CH≡CH + H₂O (২০% H₂SO₄, ২% HgSO₄, ৬০°C) ⟶ CH₃CHO'
  },
  {
    id: 'ch12_1',
    category: 'আমাদের জীবনে রসায়ন (অধ্যায় ১২)',
    frontQuestion: 'সাবানের ময়লা পরিষ্কারকরণ মেকানিজমে মাইসেল (Micelle) কীভাবে কাজ করে?',
    backAnswer: 'সাবানের হাইড্রোফোবিক হাইড্রোকার্বন লেজ তৈলাক্ত ময়লাকে জড়িয়ে ধরে গোলাকার মাইসেল গঠন করে। কাপড় ঘষলে বা পানির টানে হাইড্রোফিলিক আয়নিক মাথা পানির সাথে আকৃষ্ট হয়ে তেলের কণা সহ ময়লাকে টেনে তুলে নেয়।',
    formulaOrKey: 'C₁₇H₃₅COO⁻Na⁺ -> অপোলার লেজ (তেলমুখী) + পোলার মাথা (পানিমুখী)'
  },
  {
    id: 'ch12_2',
    category: 'আমাদের জীবনে রসায়ন (অধ্যায় ১২)',
    frontQuestion: 'খর পানিতে সাবানের ব্যর্থতা ও ডিটারজেন্টের শ্রেষ্ঠত্বের কারণ কী?',
    backAnswer: 'সাবান খর পানির Ca²⁺/Mg²⁺ আয়নের সাথে অদ্রবণীয় আঠালো স্কাম (Scum) তৈরি করে অপচয় হয়। ডিটারজেন্টের ক্যালসিয়াম ও ম্যাগনেসিয়াম লবণ পানিতে অত্যন্ত দ্রবণীয় হওয়ায় কোনো তলানি না ফেলে সাথে সাথে প্রচুর ফেনা দেয়।',
    tipBn: 'ডিটারজেন্ট খর পানি ও এসিডীয় পানি উভয়েই সক্রিয়।'
  }
];

interface RevisionFlashcardsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RevisionFlashcardsModal: React.FC<RevisionFlashcardsModalProps> = ({
  isOpen,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  if (!isOpen) return null;

  const card = FLASHCARDS[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev + 1) % FLASHCARDS.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="flex h-[85vh] w-full max-w-2xl flex-col rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/40">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-base font-bold text-white">কুইক রিভিশন ফ্ল্যাশকার্ড (Quick Flashcards)</h2>
              <p className="text-xs text-slate-400">কার্ডে ক্লিক করে উল্টিয়ে দেখুন এবং মনে রাখার দক্ষতা বাড়ান</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Card Arena */}
        <div className="flex-1 p-6 flex flex-col items-center justify-center">
          <div className="w-full flex justify-between items-center text-xs text-slate-400 font-mono mb-3">
            <span className="px-2.5 py-1 bg-slate-950 rounded-lg border border-slate-800 text-amber-300">
              {card.category}
            </span>
            <span>
              {currentIndex + 1} / {FLASHCARDS.length}
            </span>
          </div>

          {/* Flippable Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full h-80 cursor-pointer select-none rounded-2xl p-6 transition-all duration-300 shadow-2xl border flex flex-col justify-between items-center text-center relative"
            style={{
              backgroundColor: isFlipped ? '#022c22' : '#090d16',
              borderColor: isFlipped ? '#10b981' : '#38bdf8'
            }}
          >
            <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: isFlipped ? 'rgba(16, 185, 129, 0.2)' : 'rgba(56, 189, 248, 0.2)',
                    color: isFlipped ? '#34d399' : '#38bdf8'
                  }}>
              {isFlipped ? 'উত্তর (Back Side)' : 'প্রশ্ন (Front Side) — ক্লিক করে উল্টান'}
            </span>

            <div className="my-auto px-4">
              {!isFlipped ? (
                <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                  {card.frontQuestion}
                </h3>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm sm:text-base text-emerald-100 font-medium leading-relaxed">
                    {card.backAnswer}
                  </p>
                  {card.formulaOrKey && (
                    <div className="p-2 bg-slate-950/80 rounded-xl font-mono text-xs font-bold text-cyan-300 border border-emerald-800">
                      {card.formulaOrKey}
                    </div>
                  )}
                  {card.tipBn && (
                    <p className="text-[11px] text-amber-300 italic">
                      💡 {card.tipBn}
                    </p>
                  )}
                </div>
              )}
            </div>

            <span className="text-[10px] text-slate-400 font-mono">
              কার্ডে ট্যাপ করুন উত্তর দেখতে বা লুকাতে
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 transition"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>পূর্ববর্তী</span>
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:brightness-110 transition shadow-md"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>উল্টান (Flip)</span>
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-1 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 transition"
            >
              <span>পরবর্তী</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
