/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Biology3DModelMeta } from '../data/biology3DModelsCatalog';

export function renderBiologyCh11to14Diagram(
  chNum: number,
  currentModel: Biology3DModelMeta,
  highlightedLabel: number | null
): React.ReactNode {
  const id = currentModel.id;
  const labels = currentModel.labels || [];

  // ========================================================
  // CHAPTER 11
  // ========================================================
  if (chNum === 11) {
    if (id === 1) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.১: অযৌন ও যৌন জননের মৌলিক জীবতাত্ত্বিক তুলনা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Asexual vs Sexual Reproduction Comparison</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="85" rx="35" ry="12" fill="#047857" stroke="#34d399" strokeWidth="2" />
            <path d="M 60 85 C 40 45, 15 35, 30 20 C 45 5, 55 45, 60 75" fill="#f43f5e" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="1.5" />
            <path d="M 60 85 C 80 45, 105 35, 90 20 C 75 5, 65 45, 60 75" fill="#f43f5e" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="1.5" />
            <line x1="60" y1="85" x2="60" y2="30" stroke="#facc15" strokeWidth="3" /><circle cx="60" cy="28" r="6" fill="#eab308" />
            <text x="60" y="112" fill="#f472b6" fontSize="9" textAnchor="middle">আদর্শ ফুলের ৫টি স্তবক</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f472b6" fontSize="11" fontWeight="bold">সম্পূর্ণ ফুলের স্তবকসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. পুষ্পাক্ষ (Thalamus)  ২. বৃতি (Calyx - সবুজ পাতা)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">৩. দলমন্ডল (Corolla - পাপড়ি)  ৪. পুংস্তবক (Stamen)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৫. স্ত্রীস্তবক (Carpel) — গর্ভাশয়, গর্ভদণ্ড ও গর্ভমুণ্ড</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 2) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.২: একটি সম্পূর্ণ আদর্শ ফুলের ৫টি স্তবকের গঠন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Complete Flower Anatomy 5 Floral Whorls</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="85" rx="35" ry="12" fill="#047857" stroke="#34d399" strokeWidth="2" />
            <path d="M 60 85 C 40 45, 15 35, 30 20 C 45 5, 55 45, 60 75" fill="#f43f5e" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="1.5" />
            <path d="M 60 85 C 80 45, 105 35, 90 20 C 75 5, 65 45, 60 75" fill="#f43f5e" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="1.5" />
            <line x1="60" y1="85" x2="60" y2="30" stroke="#facc15" strokeWidth="3" /><circle cx="60" cy="28" r="6" fill="#eab308" />
            <text x="60" y="112" fill="#f472b6" fontSize="9" textAnchor="middle">আদর্শ ফুলের ৫টি স্তবক</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f472b6" fontSize="11" fontWeight="bold">সম্পূর্ণ ফুলের স্তবকসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. পুষ্পাক্ষ (Thalamus)  ২. বৃতি (Calyx - সবুজ পাতা)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">৩. দলমন্ডল (Corolla - পাপড়ি)  ৪. পুংস্তবক (Stamen)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৫. স্ত্রীস্তবক (Carpel) — গর্ভাশয়, গর্ভদণ্ড ও গর্ভমুণ্ড</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 3) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.২: পুংস্তবক — পরাগধানীর ৪টি প্রকোষ্ঠ ও পুংদণ্ড</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Stamen Bilobed Anther & Filament</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="85" rx="35" ry="12" fill="#047857" stroke="#34d399" strokeWidth="2" />
            <path d="M 60 85 C 40 45, 15 35, 30 20 C 45 5, 55 45, 60 75" fill="#f43f5e" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="1.5" />
            <path d="M 60 85 C 80 45, 105 35, 90 20 C 75 5, 65 45, 60 75" fill="#f43f5e" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="1.5" />
            <line x1="60" y1="85" x2="60" y2="30" stroke="#facc15" strokeWidth="3" /><circle cx="60" cy="28" r="6" fill="#eab308" />
            <text x="60" y="112" fill="#f472b6" fontSize="9" textAnchor="middle">আদর্শ ফুলের ৫টি স্তবক</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f472b6" fontSize="11" fontWeight="bold">সম্পূর্ণ ফুলের স্তবকসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. পুষ্পাক্ষ (Thalamus)  ২. বৃতি (Calyx - সবুজ পাতা)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">৩. দলমন্ডল (Corolla - পাপড়ি)  ৪. পুংস্তবক (Stamen)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৫. স্ত্রীস্তবক (Carpel) — গর্ভাশয়, গর্ভদণ্ড ও গর্ভমুণ্ড</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 4) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.২: স্ত্রীস্তবক — গর্ভমুণ্ড, গর্ভদণ্ড ও গর্ভাশয়</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Carpel: Stigma, Style & Ovary Chamber</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="85" rx="35" ry="12" fill="#047857" stroke="#34d399" strokeWidth="2" />
            <path d="M 60 85 C 40 45, 15 35, 30 20 C 45 5, 55 45, 60 75" fill="#f43f5e" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="1.5" />
            <path d="M 60 85 C 80 45, 105 35, 90 20 C 75 5, 65 45, 60 75" fill="#f43f5e" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="1.5" />
            <line x1="60" y1="85" x2="60" y2="30" stroke="#facc15" strokeWidth="3" /><circle cx="60" cy="28" r="6" fill="#eab308" />
            <text x="60" y="112" fill="#f472b6" fontSize="9" textAnchor="middle">আদর্শ ফুলের ৫টি স্তবক</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f472b6" fontSize="11" fontWeight="bold">সম্পূর্ণ ফুলের স্তবকসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. পুষ্পাক্ষ (Thalamus)  ২. বৃতি (Calyx - সবুজ পাতা)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">৩. দলমন্ডল (Corolla - পাপড়ি)  ৪. পুংস্তবক (Stamen)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৫. স্ত্রীস্তবক (Carpel) — গর্ভাশয়, গর্ভদণ্ড ও গর্ভমুণ্ড</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 5) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.২: পরাগরেণুর সূক্ষ্ম গঠন — এক্সাইন ও ইনটাইন প্রাচীর</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Pollen Grain Microspore Wall Architecture</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="55" rx="35" ry="40" fill="#14532d" stroke="#22c55e" strokeWidth="2" />
            <circle cx="60" cy="55" r="14" fill="#facc15" stroke="#eab308" strokeWidth="1.5" />
            <circle cx="60" cy="35" r="5" fill="#38bdf8" /><circle cx="60" cy="75" r="5" fill="#ef4444" />
            <text x="60" y="58" fill="#000" fontSize="7" textAnchor="middle">২n + ৩n</text>
            <text x="60" y="112" fill="#4ade80" fontSize="9" textAnchor="middle">ডিম্বক ও দ্বি-নিষেক প্রক্রিয়া</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#22c55e" strokeWidth="1" />
          <text x="15" y="24" fill="#4ade80" fontSize="11" fontWeight="bold">সপুষ্পক উদ্ভিদের দ্বি-নিষেক (Double Fertilization):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ১ম পুংগ্যামিট (n) + ডিম্বাণু (n) → জাইগোট ভ্রূণ (2n)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ২য় পুংগ্যামিট (n) + সেকেন্ডারি নিউক্লিয়াস (2n) → ট্রিপ্লয়েড শস্য (3n)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• নিষেকের পর ডিম্বকটি বীজে এবং গর্ভাশয় ফলে পরিণত হয়</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 6) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.৪: ডিম্বকের অভ্যন্তরীণ গঠন — ৮ নিউক্লিয়াস ভ্রূণথলি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Plant Anatropous Ovule Embryo Sac (8-Nuclei)</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="55" rx="35" ry="40" fill="#14532d" stroke="#22c55e" strokeWidth="2" />
            <circle cx="60" cy="55" r="14" fill="#facc15" stroke="#eab308" strokeWidth="1.5" />
            <circle cx="60" cy="35" r="5" fill="#38bdf8" /><circle cx="60" cy="75" r="5" fill="#ef4444" />
            <text x="60" y="58" fill="#000" fontSize="7" textAnchor="middle">২n + ৩n</text>
            <text x="60" y="112" fill="#4ade80" fontSize="9" textAnchor="middle">ডিম্বক ও দ্বি-নিষেক প্রক্রিয়া</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#22c55e" strokeWidth="1" />
          <text x="15" y="24" fill="#4ade80" fontSize="11" fontWeight="bold">সপুষ্পক উদ্ভিদের দ্বি-নিষেক (Double Fertilization):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ১ম পুংগ্যামিট (n) + ডিম্বাণু (n) → জাইগোট ভ্রূণ (2n)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ২য় পুংগ্যামিট (n) + সেকেন্ডারি নিউক্লিয়াস (2n) → ট্রিপ্লয়েড শস্য (3n)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• নিষেকের পর ডিম্বকটি বীজে এবং গর্ভাশয় ফলে পরিণত হয়</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 7) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.৩: সপুষ্পক উদ্ভিদের পরাগায়ন — পতঙ্গ ও বায়ু বাহক</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Pollination Vectors: Entomophily & Anemophily</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="55" rx="35" ry="40" fill="#14532d" stroke="#22c55e" strokeWidth="2" />
            <circle cx="60" cy="55" r="14" fill="#facc15" stroke="#eab308" strokeWidth="1.5" />
            <circle cx="60" cy="35" r="5" fill="#38bdf8" /><circle cx="60" cy="75" r="5" fill="#ef4444" />
            <text x="60" y="58" fill="#000" fontSize="7" textAnchor="middle">২n + ৩n</text>
            <text x="60" y="112" fill="#4ade80" fontSize="9" textAnchor="middle">ডিম্বক ও দ্বি-নিষেক প্রক্রিয়া</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#22c55e" strokeWidth="1" />
          <text x="15" y="24" fill="#4ade80" fontSize="11" fontWeight="bold">সপুষ্পক উদ্ভিদের দ্বি-নিষেক (Double Fertilization):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ১ম পুংগ্যামিট (n) + ডিম্বাণু (n) → জাইগোট ভ্রূণ (2n)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ২য় পুংগ্যামিট (n) + সেকেন্ডারি নিউক্লিয়াস (2n) → ট্রিপ্লয়েড শস্য (3n)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• নিষেকের পর ডিম্বকটি বীজে এবং গর্ভাশয় ফলে পরিণত হয়</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 8) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.৪: পরাগনালির অঙ্কুরোদগম ও কেমোট্রপিক বৃদ্ধি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Pollen Tube Germination & Chemotropism</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="55" rx="35" ry="40" fill="#14532d" stroke="#22c55e" strokeWidth="2" />
            <circle cx="60" cy="55" r="14" fill="#facc15" stroke="#eab308" strokeWidth="1.5" />
            <circle cx="60" cy="35" r="5" fill="#38bdf8" /><circle cx="60" cy="75" r="5" fill="#ef4444" />
            <text x="60" y="58" fill="#000" fontSize="7" textAnchor="middle">২n + ৩n</text>
            <text x="60" y="112" fill="#4ade80" fontSize="9" textAnchor="middle">ডিম্বক ও দ্বি-নিষেক প্রক্রিয়া</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#22c55e" strokeWidth="1" />
          <text x="15" y="24" fill="#4ade80" fontSize="11" fontWeight="bold">সপুষ্পক উদ্ভিদের দ্বি-নিষেক (Double Fertilization):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ১ম পুংগ্যামিট (n) + ডিম্বাণু (n) → জাইগোট ভ্রূণ (2n)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ২য় পুংগ্যামিট (n) + সেকেন্ডারি নিউক্লিয়াস (2n) → ট্রিপ্লয়েড শস্য (3n)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• নিষেকের পর ডিম্বকটি বীজে এবং গর্ভাশয় ফলে পরিণত হয়</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 9) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.৪: উদ্ভিদের দ্বি-নিষেক ও ট্রিপ্লয়েড শস্য (3n) ত্রিমিলন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Double Fertilization & Triploid Endosperm</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="55" rx="35" ry="40" fill="#14532d" stroke="#22c55e" strokeWidth="2" />
            <circle cx="60" cy="55" r="14" fill="#facc15" stroke="#eab308" strokeWidth="1.5" />
            <circle cx="60" cy="35" r="5" fill="#38bdf8" /><circle cx="60" cy="75" r="5" fill="#ef4444" />
            <text x="60" y="58" fill="#000" fontSize="7" textAnchor="middle">২n + ৩n</text>
            <text x="60" y="112" fill="#4ade80" fontSize="9" textAnchor="middle">ডিম্বক ও দ্বি-নিষেক প্রক্রিয়া</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#22c55e" strokeWidth="1" />
          <text x="15" y="24" fill="#4ade80" fontSize="11" fontWeight="bold">সপুষ্পক উদ্ভিদের দ্বি-নিষেক (Double Fertilization):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ১ম পুংগ্যামিট (n) + ডিম্বাণু (n) → জাইগোট ভ্রূণ (2n)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ২য় পুংগ্যামিট (n) + সেকেন্ডারি নিউক্লিয়াস (2n) → ট্রিপ্লয়েড শস্য (3n)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• নিষেকের পর ডিম্বকটি বীজে এবং গর্ভাশয় ফলে পরিণত হয়</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 10) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.৫: ফল ও বীজের বিকাশ — পেরিকার্প ও ভ্রূণমূল-ভ্রূণকাণ্ড</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Fruit Pericarp & Seed Dicot Embryo Development</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="55" rx="35" ry="40" fill="#14532d" stroke="#22c55e" strokeWidth="2" />
            <circle cx="60" cy="55" r="14" fill="#facc15" stroke="#eab308" strokeWidth="1.5" />
            <circle cx="60" cy="35" r="5" fill="#38bdf8" /><circle cx="60" cy="75" r="5" fill="#ef4444" />
            <text x="60" y="58" fill="#000" fontSize="7" textAnchor="middle">২n + ৩n</text>
            <text x="60" y="112" fill="#4ade80" fontSize="9" textAnchor="middle">ডিম্বক ও দ্বি-নিষেক প্রক্রিয়া</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#22c55e" strokeWidth="1" />
          <text x="15" y="24" fill="#4ade80" fontSize="11" fontWeight="bold">সপুষ্পক উদ্ভিদের দ্বি-নিষেক (Double Fertilization):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ১ম পুংগ্যামিট (n) + ডিম্বাণু (n) → জাইগোট ভ্রূণ (2n)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ২য় পুংগ্যামিট (n) + সেকেন্ডারি নিউক্লিয়াস (2n) → ট্রিপ্লয়েড শস্য (3n)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• নিষেকের পর ডিম্বকটি বীজে এবং গর্ভাশয় ফলে পরিণত হয়</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 11) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.৬: মানব পুরুষ প্রজননতন্ত্র — শুক্রাশয় ও ভাস ডিফারেন্স</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Male Reproductive Tract: Testis & Vas Deferens</text>
          <g transform="translate(70, 65)">
            <circle cx="35" cy="55" r="14" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" /><text x="35" y="58" fill="#fff" fontSize="6" textAnchor="middle">শুক্রাণু</text>
            <path d="M 49 55 Q 75 40 100 55 T 140 55" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <ellipse cx="140" cy="55" rx="20" ry="20" fill="#be123c" stroke="#f43f5e" strokeWidth="2" /><text x="140" y="58" fill="#fff" fontSize="6" textAnchor="middle">ডিম্বাণু</text>
            <text x="85" y="105" fill="#f43f5e" fontSize="9" textAnchor="middle">গ্যামেট মিলন ও নিষেক</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মানব প্রজনন ও নিষেক প্রক্রিয়া:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• শুক্রাণু: অ্যাক্রোসোম (এনজাইমযুক্ত শিরস্ত্রাণ), মধ্যখণ্ড ও লেজ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ডিম্বাশয় থেকে প্রতি ২৮ দিনে একটি পরিপক্ক ডিম্বাণু ক্ষরিত হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• নিষেকের স্থান: ফ্যালোপিয়ান নালির অ্যাম্পুলা অংশ</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 12) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.৬: শুক্রাণুর অণুবীক্ষণিক গঠন — অ্যাক্রোসোম ও লেজ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Human Spermatozoon Microstructure & Acrosome</text>
          <g transform="translate(70, 65)">
            <circle cx="35" cy="55" r="14" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" /><text x="35" y="58" fill="#fff" fontSize="6" textAnchor="middle">শুক্রাণু</text>
            <path d="M 49 55 Q 75 40 100 55 T 140 55" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <ellipse cx="140" cy="55" rx="20" ry="20" fill="#be123c" stroke="#f43f5e" strokeWidth="2" /><text x="140" y="58" fill="#fff" fontSize="6" textAnchor="middle">ডিম্বাণু</text>
            <text x="85" y="105" fill="#f43f5e" fontSize="9" textAnchor="middle">গ্যামেট মিলন ও নিষেক</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মানব প্রজনন ও নিষেক প্রক্রিয়া:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• শুক্রাণু: অ্যাক্রোসোম (এনজাইমযুক্ত শিরস্ত্রাণ), মধ্যখণ্ড ও লেজ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ডিম্বাশয় থেকে প্রতি ২৮ দিনে একটি পরিপক্ক ডিম্বাণু ক্ষরিত হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• নিষেকের স্থান: ফ্যালোপিয়ান নালির অ্যাম্পুলা অংশ</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 13) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.৬: মানব স্ত্রী প্রজননতন্ত্র — ডিম্বাশয়, জরায়ু ও এন্ডোমেট্রিয়াম</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Female Reproductive System: Ovary & Uterus</text>
          <g transform="translate(70, 65)">
            <circle cx="35" cy="55" r="14" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" /><text x="35" y="58" fill="#fff" fontSize="6" textAnchor="middle">শুক্রাণু</text>
            <path d="M 49 55 Q 75 40 100 55 T 140 55" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <ellipse cx="140" cy="55" rx="20" ry="20" fill="#be123c" stroke="#f43f5e" strokeWidth="2" /><text x="140" y="58" fill="#fff" fontSize="6" textAnchor="middle">ডিম্বাণু</text>
            <text x="85" y="105" fill="#f43f5e" fontSize="9" textAnchor="middle">গ্যামেট মিলন ও নিষেক</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মানব প্রজনন ও নিষেক প্রক্রিয়া:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• শুক্রাণু: অ্যাক্রোসোম (এনজাইমযুক্ত শিরস্ত্রাণ), মধ্যখণ্ড ও লেজ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ডিম্বাশয় থেকে প্রতি ২৮ দিনে একটি পরিপক্ক ডিম্বাণু ক্ষরিত হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• নিষেকের স্থান: ফ্যালোপিয়ান নালির অ্যাম্পুলা অংশ</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 14) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.৬: ফ্যালোপিয়ান নালি ও ডিম্বাণু ক্ষরণ (ওভুলেশন)</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Fallopian Tube Ciliated Fimbriae & Ovulation</text>
          <g transform="translate(70, 65)">
            <circle cx="35" cy="55" r="14" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" /><text x="35" y="58" fill="#fff" fontSize="6" textAnchor="middle">শুক্রাণু</text>
            <path d="M 49 55 Q 75 40 100 55 T 140 55" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <ellipse cx="140" cy="55" rx="20" ry="20" fill="#be123c" stroke="#f43f5e" strokeWidth="2" /><text x="140" y="58" fill="#fff" fontSize="6" textAnchor="middle">ডিম্বাণু</text>
            <text x="85" y="105" fill="#f43f5e" fontSize="9" textAnchor="middle">গ্যামেট মিলন ও নিষেক</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মানব প্রজনন ও নিষেক প্রক্রিয়া:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• শুক্রাণু: অ্যাক্রোসোম (এনজাইমযুক্ত শিরস্ত্রাণ), মধ্যখণ্ড ও লেজ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ডিম্বাশয় থেকে প্রতি ২৮ দিনে একটি পরিপক্ক ডিম্বাণু ক্ষরিত হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• নিষেকের স্থান: ফ্যালোপিয়ান নালির অ্যাম্পুলা অংশ</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 15) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.৬: মানব নিষেকের স্থান ও এককোষী জাইগোট সৃষ্টি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Human Fertilization Ampulla & Zygote (2n)</text>
          <g transform="translate(70, 65)">
            <circle cx="35" cy="55" r="14" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" /><text x="35" y="58" fill="#fff" fontSize="6" textAnchor="middle">শুক্রাণু</text>
            <path d="M 49 55 Q 75 40 100 55 T 140 55" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <ellipse cx="140" cy="55" rx="20" ry="20" fill="#be123c" stroke="#f43f5e" strokeWidth="2" /><text x="140" y="58" fill="#fff" fontSize="6" textAnchor="middle">ডিম্বাণু</text>
            <text x="85" y="105" fill="#f43f5e" fontSize="9" textAnchor="middle">গ্যামেট মিলন ও নিষেক</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মানব প্রজনন ও নিষেক প্রক্রিয়া:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• শুক্রাণু: অ্যাক্রোসোম (এনজাইমযুক্ত শিরস্ত্রাণ), মধ্যখণ্ড ও লেজ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ডিম্বাশয় থেকে প্রতি ২৮ দিনে একটি পরিপক্ক ডিম্বাণু ক্ষরিত হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• নিষেকের স্থান: ফ্যালোপিয়ান নালির অ্যাম্পুলা অংশ</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 16) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.৭: ব্লাস্টোসিস্ট রূপান্তর ও জরায়ু প্রাচীরে রোপণ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Blastocyst Cleavage & Uterine Implantation</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="55" rx="35" ry="40" fill="#831843" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <circle cx="60" cy="55" r="16" fill="#fb7185" stroke="#fda4af" strokeWidth="1.5" />
            <line x1="60" y1="71" x2="60" y2="95" stroke="#ef4444" strokeWidth="4" />
            <text x="60" y="115" fill="#fda4af" fontSize="8" textAnchor="middle">অমরা (Placenta) ও নাভিজ্জু</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">অমরা ও ভ্রূণ বিকাশ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অমরা: মাতৃগর্ভে ভ্রূণের পুষ্টি, শ্বসন ও রেচনের একমাত্র সেতু</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• গর্ভধারণ কাল: প্রায় ২৮০ দিন বা ৪০ সপ্তাহ</text>
          <text x="15" y="86" fill="#f87171" fontSize="10">• এইচআইভি (HIV): রেট্রোভাইরাস যা শ্বেত রক্তকণিকার CD4 ধ্বংস করে</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 17) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.৭: মানব ভ্রূণের বিকাশ ও অ্যামনিওটিক তরল থলি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Human Embryonic Stages & Amniotic Fluid Cushion</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="55" rx="35" ry="40" fill="#831843" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <circle cx="60" cy="55" r="16" fill="#fb7185" stroke="#fda4af" strokeWidth="1.5" />
            <line x1="60" y1="71" x2="60" y2="95" stroke="#ef4444" strokeWidth="4" />
            <text x="60" y="115" fill="#fda4af" fontSize="8" textAnchor="middle">অমরা (Placenta) ও নাভিজ্জু</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">অমরা ও ভ্রূণ বিকাশ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অমরা: মাতৃগর্ভে ভ্রূণের পুষ্টি, শ্বসন ও রেচনের একমাত্র সেতু</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• গর্ভধারণ কাল: প্রায় ২৮০ দিন বা ৪০ সপ্তাহ</text>
          <text x="15" y="86" fill="#f87171" fontSize="10">• এইচআইভি (HIV): রেট্রোভাইরাস যা শ্বেত রক্তকণিকার CD4 ধ্বংস করে</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 18) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.৭: অমরা (Placenta) ও নাড়ির (Umbilical Cord) রক্ত জালক</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Placenta Chorionic Villi & Umbilical Blood Transport</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="55" rx="35" ry="40" fill="#831843" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <circle cx="60" cy="55" r="16" fill="#fb7185" stroke="#fda4af" strokeWidth="1.5" />
            <line x1="60" y1="71" x2="60" y2="95" stroke="#ef4444" strokeWidth="4" />
            <text x="60" y="115" fill="#fda4af" fontSize="8" textAnchor="middle">অমরা (Placenta) ও নাভিজ্জু</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">অমরা ও ভ্রূণ বিকাশ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অমরা: মাতৃগর্ভে ভ্রূণের পুষ্টি, শ্বসন ও রেচনের একমাত্র সেতু</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• গর্ভধারণ কাল: প্রায় ২৮০ দিন বা ৪০ সপ্তাহ</text>
          <text x="15" y="86" fill="#f87171" fontSize="10">• এইচআইভি (HIV): রেট্রোভাইরাস যা শ্বেত রক্তকণিকার CD4 ধ্বংস করে</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 19) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.৮: এইচআইভি (HIV) রেট্রোভাইরাস ও এইডস রোগ মেকানিজম</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">HIV Retrovirus Structure & CD4 T-Cell Attack</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="55" rx="35" ry="40" fill="#831843" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <circle cx="60" cy="55" r="16" fill="#fb7185" stroke="#fda4af" strokeWidth="1.5" />
            <line x1="60" y1="71" x2="60" y2="95" stroke="#ef4444" strokeWidth="4" />
            <text x="60" y="115" fill="#fda4af" fontSize="8" textAnchor="middle">অমরা (Placenta) ও নাভিজ্জু</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">অমরা ও ভ্রূণ বিকাশ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অমরা: মাতৃগর্ভে ভ্রূণের পুষ্টি, শ্বসন ও রেচনের একমাত্র সেতু</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• গর্ভধারণ কাল: প্রায় ২৮০ দিন বা ৪০ সপ্তাহ</text>
          <text x="15" y="86" fill="#f87171" fontSize="10">• এইচআইভি (HIV): রেট্রোভাইরাস যা শ্বেত রক্তকণিকার CD4 ধ্বংস করে</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 20) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১১.৮: যৌন সংক্রামক ব্যাধি — সিফিলিস ও গনোরিয়া ব্যাক্টেরিয়া</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">STD Pathogens: Treponema & Neisseria Gonorrhoeae</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="55" rx="35" ry="40" fill="#831843" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <circle cx="60" cy="55" r="16" fill="#fb7185" stroke="#fda4af" strokeWidth="1.5" />
            <line x1="60" y1="71" x2="60" y2="95" stroke="#ef4444" strokeWidth="4" />
            <text x="60" y="115" fill="#fda4af" fontSize="8" textAnchor="middle">অমরা (Placenta) ও নাভিজ্জু</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">অমরা ও ভ্রূণ বিকাশ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অমরা: মাতৃগর্ভে ভ্রূণের পুষ্টি, শ্বসন ও রেচনের একমাত্র সেতু</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• গর্ভধারণ কাল: প্রায় ২৮০ দিন বা ৪০ সপ্তাহ</text>
          <text x="15" y="86" fill="#f87171" fontSize="10">• এইচআইভি (HIV): রেট্রোভাইরাস যা শ্বেত রক্তকণিকার CD4 ধ্বংস করে</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
  }

  // ========================================================
  // CHAPTER 12
  // ========================================================
  if (chNum === 12) {
    if (id === 1) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.১: গ্রেগর জোহান মেন্ডেল ও মোটরশুঁটির বিপরীত বৈশিষ্ট্য</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Mendel Pea Plant 7 Contrast Alleles</text>
          <g transform="translate(70, 65)">
            <rect x="20" y="15" width="40" height="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" /><text x="40" y="36" fill="#facc15" fontSize="8" textAnchor="middle">TT</text>
            <rect x="65" y="15" width="40" height="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" /><text x="85" y="36" fill="#38bdf8" fontSize="8" textAnchor="middle">Tt</text>
            <rect x="20" y="55" width="40" height="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" /><text x="40" y="76" fill="#38bdf8" fontSize="8" textAnchor="middle">Tt</text>
            <rect x="65" y="55" width="40" height="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" /><text x="85" y="76" fill="#ef4444" fontSize="8" textAnchor="middle">tt</text>
            <text x="62" y="112" fill="#38bdf8" fontSize="9" textAnchor="middle">মেন্ডেলের ৩:১ অনুপাত ছক</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">মেন্ডেলের বংশগতির মৌলিক সূত্রদ্বয়:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ১ম সূত্র (পৃথকীকরণ): একসংকর ক্রসে F2 ফিনোটাইপ অনুপাত ৩ : ১</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ২য় সূত্র (স্বাধীন সঞ্চারণ): দ্বিসংকর ক্রসে F2 অনুপাত ৯ : ৩ : ৩ : ১</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মটরশুঁটির ৭ জোড়া বিপরীত বৈশিষ্ট্যে পরীক্ষা সম্পন্ন করেন</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 2) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.১: মনোহাইব্রিড ক্রস ও ৩:১ ফিনোটাইপিক অনুপাত</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Monohybrid Cross Punnett Square 3:1 Ratio</text>
          <g transform="translate(70, 65)">
            <rect x="20" y="15" width="40" height="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" /><text x="40" y="36" fill="#facc15" fontSize="8" textAnchor="middle">TT</text>
            <rect x="65" y="15" width="40" height="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" /><text x="85" y="36" fill="#38bdf8" fontSize="8" textAnchor="middle">Tt</text>
            <rect x="20" y="55" width="40" height="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" /><text x="40" y="76" fill="#38bdf8" fontSize="8" textAnchor="middle">Tt</text>
            <rect x="65" y="55" width="40" height="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" /><text x="85" y="76" fill="#ef4444" fontSize="8" textAnchor="middle">tt</text>
            <text x="62" y="112" fill="#38bdf8" fontSize="9" textAnchor="middle">মেন্ডেলের ৩:১ অনুপাত ছক</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">মেন্ডেলের বংশগতির মৌলিক সূত্রদ্বয়:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ১ম সূত্র (পৃথকীকরণ): একসংকর ক্রসে F2 ফিনোটাইপ অনুপাত ৩ : ১</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ২য় সূত্র (স্বাধীন সঞ্চারণ): দ্বিসংকর ক্রসে F2 অনুপাত ৯ : ৩ : ৩ : ১</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মটরশুঁটির ৭ জোড়া বিপরীত বৈশিষ্ট্যে পরীক্ষা সম্পন্ন করেন</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 3) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.১: ডাইহাইব্রিড ক্রস ও ৯:৩:৩:১ স্বাধীন সঞ্চারণ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Dihybrid Cross 9:3:3:1 Independent Assortment</text>
          <g transform="translate(70, 65)">
            <rect x="20" y="15" width="40" height="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" /><text x="40" y="36" fill="#facc15" fontSize="8" textAnchor="middle">TT</text>
            <rect x="65" y="15" width="40" height="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" /><text x="85" y="36" fill="#38bdf8" fontSize="8" textAnchor="middle">Tt</text>
            <rect x="20" y="55" width="40" height="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" /><text x="40" y="76" fill="#38bdf8" fontSize="8" textAnchor="middle">Tt</text>
            <rect x="65" y="55" width="40" height="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" /><text x="85" y="76" fill="#ef4444" fontSize="8" textAnchor="middle">tt</text>
            <text x="62" y="112" fill="#38bdf8" fontSize="9" textAnchor="middle">মেন্ডেলের ৩:১ অনুপাত ছক</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">মেন্ডেলের বংশগতির মৌলিক সূত্রদ্বয়:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ১ম সূত্র (পৃথকীকরণ): একসংকর ক্রসে F2 ফিনোটাইপ অনুপাত ৩ : ১</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ২য় সূত্র (স্বাধীন সঞ্চারণ): দ্বিসংকর ক্রসে F2 অনুপাত ৯ : ৩ : ৩ : ১</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মটরশুঁটির ৭ জোড়া বিপরীত বৈশিষ্ট্যে পরীক্ষা সম্পন্ন করেন</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 4) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.২: মানুষের ৪৬টি ক্রোমোজোম ও ক্যারিওটাইপ বিশ্লেষণ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Human 46 Chromosomes Karyotype (22 Pairs+Sex)</text>
          <g transform="translate(70, 65)">
            <path d="M 20 20 Q 50 85 80 20 T 140 20" fill="none" stroke="#0ea5e9" strokeWidth="3.5" />
            <path d="M 20 85 Q 50 20 80 85 T 140 85" fill="none" stroke="#f43f5e" strokeWidth="3.5" />
            <line x1="35" y1="35" x2="35" y2="70" stroke="#facc15" strokeWidth="2" /><line x1="65" y1="45" x2="65" y2="60" stroke="#10b981" strokeWidth="2" />
            <text x="80" y="112" fill="#38bdf8" fontSize="9" textAnchor="middle">DNA ডাবল হেলিক্স (A=T, G≡C)</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">ওয়াটসন ও ক্রিক মডেল (১৯৫৩):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ডিঅক্সিরাইবোজ সুগার ও অজৈব ফসফেটের অ্যান্টিপ্যারালাল মেরুদণ্ড</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ব্যাস ২ nm (২০ Å), প্রতিটি পূর্ণ ঘূর্ণন ৩৪ Å ও ১০ জোড়া ক্ষারক</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অ্যাডেনিন = থাইমিন (২টি H-বন্ড), গুয়ানিন ≡ সাইটোসিন (৩টি H-বন্ড)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 5) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.২: লিঙ্গ নির্ধারণ মেকানিজম — পিতার XY ক্রোমোজোম</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Human Sex Determination XX vs XY Chromosomes</text>
          <g transform="translate(70, 65)">
            <path d="M 20 20 Q 50 85 80 20 T 140 20" fill="none" stroke="#0ea5e9" strokeWidth="3.5" />
            <path d="M 20 85 Q 50 20 80 85 T 140 85" fill="none" stroke="#f43f5e" strokeWidth="3.5" />
            <line x1="35" y1="35" x2="35" y2="70" stroke="#facc15" strokeWidth="2" /><line x1="65" y1="45" x2="65" y2="60" stroke="#10b981" strokeWidth="2" />
            <text x="80" y="112" fill="#38bdf8" fontSize="9" textAnchor="middle">DNA ডাবল হেলিক্স (A=T, G≡C)</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">ওয়াটসন ও ক্রিক মডেল (১৯৫৩):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ডিঅক্সিরাইবোজ সুগার ও অজৈব ফসফেটের অ্যান্টিপ্যারালাল মেরুদণ্ড</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ব্যাস ২ nm (২০ Å), প্রতিটি পূর্ণ ঘূর্ণন ৩৪ Å ও ১০ জোড়া ক্ষারক</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অ্যাডেনিন = থাইমিন (২টি H-বন্ড), গুয়ানিন ≡ সাইটোসিন (৩টি H-বন্ড)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 6) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.৩: ডিএনএ ডাবল হেলিক্সের ফসফেট-সুগার মেরুদণ্ড</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">DNA Double Helix Sugar-Phosphate Backbone</text>
          <g transform="translate(70, 65)">
            <path d="M 20 20 Q 50 85 80 20 T 140 20" fill="none" stroke="#0ea5e9" strokeWidth="3.5" />
            <path d="M 20 85 Q 50 20 80 85 T 140 85" fill="none" stroke="#f43f5e" strokeWidth="3.5" />
            <line x1="35" y1="35" x2="35" y2="70" stroke="#facc15" strokeWidth="2" /><line x1="65" y1="45" x2="65" y2="60" stroke="#10b981" strokeWidth="2" />
            <text x="80" y="112" fill="#38bdf8" fontSize="9" textAnchor="middle">DNA ডাবল হেলিক্স (A=T, G≡C)</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">ওয়াটসন ও ক্রিক মডেল (১৯৫৩):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ডিঅক্সিরাইবোজ সুগার ও অজৈব ফসফেটের অ্যান্টিপ্যারালাল মেরুদণ্ড</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ব্যাস ২ nm (২০ Å), প্রতিটি পূর্ণ ঘূর্ণন ৩৪ Å ও ১০ জোড়া ক্ষারক</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অ্যাডেনিন = থাইমিন (২টি H-বন্ড), গুয়ানিন ≡ সাইটোসিন (৩টি H-বন্ড)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 7) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.৩: নাইট্রোজেনাস ক্ষারক জোড় — A=T ও G≡C বন্ধন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">DNA Base Pairing Hydrogen Bonds (A=T, G=C)</text>
          <g transform="translate(70, 65)">
            <path d="M 20 20 Q 50 85 80 20 T 140 20" fill="none" stroke="#0ea5e9" strokeWidth="3.5" />
            <path d="M 20 85 Q 50 20 80 85 T 140 85" fill="none" stroke="#f43f5e" strokeWidth="3.5" />
            <line x1="35" y1="35" x2="35" y2="70" stroke="#facc15" strokeWidth="2" /><line x1="65" y1="45" x2="65" y2="60" stroke="#10b981" strokeWidth="2" />
            <text x="80" y="112" fill="#38bdf8" fontSize="9" textAnchor="middle">DNA ডাবল হেলিক্স (A=T, G≡C)</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">ওয়াটসন ও ক্রিক মডেল (১৯৫৩):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ডিঅক্সিরাইবোজ সুগার ও অজৈব ফসফেটের অ্যান্টিপ্যারালাল মেরুদণ্ড</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ব্যাস ২ nm (২০ Å), প্রতিটি পূর্ণ ঘূর্ণন ৩৪ Å ও ১০ জোড়া ক্ষারক</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অ্যাডেনিন = থাইমিন (২টি H-বন্ড), গুয়ানিন ≡ সাইটোসিন (৩টি H-বন্ড)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 8) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.৩: ডিএনএ নিউক্লিওসোম ও হিস্টোন অক্টামার পুঁতি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Nucleosome Core Histone Octamer Bead</text>
          <g transform="translate(70, 65)">
            <path d="M 20 20 Q 50 85 80 20 T 140 20" fill="none" stroke="#0ea5e9" strokeWidth="3.5" />
            <path d="M 20 85 Q 50 20 80 85 T 140 85" fill="none" stroke="#f43f5e" strokeWidth="3.5" />
            <line x1="35" y1="35" x2="35" y2="70" stroke="#facc15" strokeWidth="2" /><line x1="65" y1="45" x2="65" y2="60" stroke="#10b981" strokeWidth="2" />
            <text x="80" y="112" fill="#38bdf8" fontSize="9" textAnchor="middle">DNA ডাবল হেলিক্স (A=T, G≡C)</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">ওয়াটসন ও ক্রিক মডেল (১৯৫৩):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ডিঅক্সিরাইবোজ সুগার ও অজৈব ফসফেটের অ্যান্টিপ্যারালাল মেরুদণ্ড</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ব্যাস ২ nm (২০ Å), প্রতিটি পূর্ণ ঘূর্ণন ৩৪ Å ও ১০ জোড়া ক্ষারক</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অ্যাডেনিন = থাইমিন (২টি H-বন্ড), গুয়ানিন ≡ সাইটোসিন (৩টি H-বন্ড)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 9) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.৪: আরএনএ (RNA) অণু — একক সূত্রক রাইবোজ চেইন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Single-Stranded RNA Structure & Uracil</text>
          <g transform="translate(60, 65)">
            <path d="M 20 55 Q 50 25 80 55 T 140 55" fill="none" stroke="#a855f7" strokeWidth="3" />
            <circle cx="80" cy="55" r="14" fill="#047857" stroke="#10b981" strokeWidth="1.5" /><text x="80" y="58" fill="#fff" fontSize="6" textAnchor="middle">রাইবো</text>
            <text x="80" y="105" fill="#c084fc" fontSize="9" textAnchor="middle">mRNA ট্রান্সক্রিপশন ও ট্রান্সলেশন</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="1" />
          <text x="15" y="24" fill="#c084fc" fontSize="11" fontWeight="bold">মলিকুলার সেন্ট্রাল ডগমা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• DNA অনুলিপন: অর্ধ-সংরক্ষণশীল (Semi-conservative)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ট্রান্সক্রিপশন: DNA থেকে mRNA সৃষ্টি (থাইমিনের বদলে ইউরাসিল U)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ট্রান্সলেশন: রাইবোসোমে ট্রিপলেট কোডন পড়ে প্রোটিন সংশ্লেষণ</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 10) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.৪: মেসেঞ্জার আরএনএ (mRNA) ও ট্রান্সক্রিপশন বাবল</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">mRNA Transcription RNA Polymerase Bubble</text>
          <g transform="translate(60, 65)">
            <path d="M 20 55 Q 50 25 80 55 T 140 55" fill="none" stroke="#a855f7" strokeWidth="3" />
            <circle cx="80" cy="55" r="14" fill="#047857" stroke="#10b981" strokeWidth="1.5" /><text x="80" y="58" fill="#fff" fontSize="6" textAnchor="middle">রাইবো</text>
            <text x="80" y="105" fill="#c084fc" fontSize="9" textAnchor="middle">mRNA ট্রান্সক্রিপশন ও ট্রান্সলেশন</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="1" />
          <text x="15" y="24" fill="#c084fc" fontSize="11" fontWeight="bold">মলিকুলার সেন্ট্রাল ডগমা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• DNA অনুলিপন: অর্ধ-সংরক্ষণশীল (Semi-conservative)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ট্রান্সক্রিপশন: DNA থেকে mRNA সৃষ্টি (থাইমিনের বদলে ইউরাসিল U)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ট্রান্সলেশন: রাইবোসোমে ট্রিপলেট কোডন পড়ে প্রোটিন সংশ্লেষণ</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 11) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.৫: ট্রান্সলেশন — রাইবোসোম, tRNA ও প্রোটিন সংশ্লেষণ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Ribosomal Translation & tRNA Anticodon Loop</text>
          <g transform="translate(60, 65)">
            <path d="M 20 55 Q 50 25 80 55 T 140 55" fill="none" stroke="#a855f7" strokeWidth="3" />
            <circle cx="80" cy="55" r="14" fill="#047857" stroke="#10b981" strokeWidth="1.5" /><text x="80" y="58" fill="#fff" fontSize="6" textAnchor="middle">রাইবো</text>
            <text x="80" y="105" fill="#c084fc" fontSize="9" textAnchor="middle">mRNA ট্রান্সক্রিপশন ও ট্রান্সলেশন</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="1" />
          <text x="15" y="24" fill="#c084fc" fontSize="11" fontWeight="bold">মলিকুলার সেন্ট্রাল ডগমা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• DNA অনুলিপন: অর্ধ-সংরক্ষণশীল (Semi-conservative)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ট্রান্সক্রিপশন: DNA থেকে mRNA সৃষ্টি (থাইমিনের বদলে ইউরাসিল U)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ট্রান্সলেশন: রাইবোসোমে ট্রিপলেট কোডন পড়ে প্রোটিন সংশ্লেষণ</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 12) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.৫: ডিএনএ অর্ধ-সংরক্ষণশীল অনুলিপন ফর্ক (Replication)</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Semiconservative DNA Replication Fork</text>
          <g transform="translate(60, 65)">
            <path d="M 20 55 Q 50 25 80 55 T 140 55" fill="none" stroke="#a855f7" strokeWidth="3" />
            <circle cx="80" cy="55" r="14" fill="#047857" stroke="#10b981" strokeWidth="1.5" /><text x="80" y="58" fill="#fff" fontSize="6" textAnchor="middle">রাইবো</text>
            <text x="80" y="105" fill="#c084fc" fontSize="9" textAnchor="middle">mRNA ট্রান্সক্রিপশন ও ট্রান্সলেশন</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="1" />
          <text x="15" y="24" fill="#c084fc" fontSize="11" fontWeight="bold">মলিকুলার সেন্ট্রাল ডগমা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• DNA অনুলিপন: অর্ধ-সংরক্ষণশীল (Semi-conservative)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ট্রান্সক্রিপশন: DNA থেকে mRNA সৃষ্টি (থাইমিনের বদলে ইউরাসিল U)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ট্রান্সলেশন: রাইবোসোমে ট্রিপলেট কোডন পড়ে প্রোটিন সংশ্লেষণ</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 13) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.৩: জিন মিউটেশন — পয়েন্ট মিউটেশন ও ক্ষারক পরিবর্তন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Gene Point Mutation & Frameshift Alteration</text>
          <g transform="translate(60, 65)">
            <path d="M 20 55 Q 50 25 80 55 T 140 55" fill="none" stroke="#a855f7" strokeWidth="3" />
            <circle cx="80" cy="55" r="14" fill="#047857" stroke="#10b981" strokeWidth="1.5" /><text x="80" y="58" fill="#fff" fontSize="6" textAnchor="middle">রাইবো</text>
            <text x="80" y="105" fill="#c084fc" fontSize="9" textAnchor="middle">mRNA ট্রান্সক্রিপশন ও ট্রান্সলেশন</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="1" />
          <text x="15" y="24" fill="#c084fc" fontSize="11" fontWeight="bold">মলিকুলার সেন্ট্রাল ডগমা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• DNA অনুলিপন: অর্ধ-সংরক্ষণশীল (Semi-conservative)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ট্রান্সক্রিপশন: DNA থেকে mRNA সৃষ্টি (থাইমিনের বদলে ইউরাসিল U)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ট্রান্সলেশন: রাইবোসোমে ট্রিপলেট কোডন পড়ে প্রোটিন সংশ্লেষণ</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 14) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.৬: লাল-সবুজ বর্ণান্ধতা ও সেক্স-লিংকড ইনহেরিট্যান্স</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Red-Green Color Blindness X-Linked Inheritance</text>
          <g transform="translate(70, 65)">
            <circle cx="40" cy="40" r="16" fill="#ec4899" /><text x="40" y="44" fill="#fff" fontSize="8" textAnchor="middle">XX (মা)</text>
            <circle cx="100" cy="40" r="16" fill="#0284c7" /><text x="100" y="44" fill="#fff" fontSize="8" textAnchor="middle">XY (বাবা)</text>
            <text x="70" y="85" fill="#facc15" fontSize="8" textAnchor="middle">৫০% কন্যা (XX) : ৫০% পুত্র (XY)</text>
            <text x="70" y="108" fill="#cbd5e1" fontSize="8" textAnchor="middle">লিঙ্গ নির্ধারণ চার্ট</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#ec4899" strokeWidth="1" />
          <text x="15" y="24" fill="#f472b6" fontSize="11" fontWeight="bold">মানব লিঙ্গ নির্ধারণ ও বংশগত ব্যাধি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পিতার Y ক্রোমোজোমবাহী শুক্রাণু সন্তান পুত্র হওয়া নির্ধারণ করে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বর্ণান্ধতা: X-লিংকড প্রচ্ছন্ন রোগ (পুরুষদের আক্রান্তের হার বেশি)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• থ্যালাসেমিয়া: অটোসোমাল প্রচ্ছন্ন অস্বাভাবিক হিমোগ্লোবিন ব্যাধি</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 15) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.৬: থ্যালাসেমিয়া — ত্রুটিপূর্ণ হিমোগ্লোবিন গ্লোবিন জিন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Thalassemia Hemoglobin Alpha/Beta Chain Defect</text>
          <g transform="translate(70, 65)">
            <circle cx="40" cy="40" r="16" fill="#ec4899" /><text x="40" y="44" fill="#fff" fontSize="8" textAnchor="middle">XX (মা)</text>
            <circle cx="100" cy="40" r="16" fill="#0284c7" /><text x="100" y="44" fill="#fff" fontSize="8" textAnchor="middle">XY (বাবা)</text>
            <text x="70" y="85" fill="#facc15" fontSize="8" textAnchor="middle">৫০% কন্যা (XX) : ৫০% পুত্র (XY)</text>
            <text x="70" y="108" fill="#cbd5e1" fontSize="8" textAnchor="middle">লিঙ্গ নির্ধারণ চার্ট</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#ec4899" strokeWidth="1" />
          <text x="15" y="24" fill="#f472b6" fontSize="11" fontWeight="bold">মানব লিঙ্গ নির্ধারণ ও বংশগত ব্যাধি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পিতার Y ক্রোমোজোমবাহী শুক্রাণু সন্তান পুত্র হওয়া নির্ধারণ করে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বর্ণান্ধতা: X-লিংকড প্রচ্ছন্ন রোগ (পুরুষদের আক্রান্তের হার বেশি)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• থ্যালাসেমিয়া: অটোসোমাল প্রচ্ছন্ন অস্বাভাবিক হিমোগ্লোবিন ব্যাধি</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 16) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.৬: ডিএনএ ফিঙ্গারপ্রিন্টিং জেল ব্যান্ড ও অপরাধী শনাক্ত</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">DNA Fingerprinting Gel Electrophoresis Bands</text>
          <g transform="translate(70, 65)">
            <circle cx="40" cy="40" r="16" fill="#ec4899" /><text x="40" y="44" fill="#fff" fontSize="8" textAnchor="middle">XX (মা)</text>
            <circle cx="100" cy="40" r="16" fill="#0284c7" /><text x="100" y="44" fill="#fff" fontSize="8" textAnchor="middle">XY (বাবা)</text>
            <text x="70" y="85" fill="#facc15" fontSize="8" textAnchor="middle">৫০% কন্যা (XX) : ৫০% পুত্র (XY)</text>
            <text x="70" y="108" fill="#cbd5e1" fontSize="8" textAnchor="middle">লিঙ্গ নির্ধারণ চার্ট</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#ec4899" strokeWidth="1" />
          <text x="15" y="24" fill="#f472b6" fontSize="11" fontWeight="bold">মানব লিঙ্গ নির্ধারণ ও বংশগত ব্যাধি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পিতার Y ক্রোমোজোমবাহী শুক্রাণু সন্তান পুত্র হওয়া নির্ধারণ করে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বর্ণান্ধতা: X-লিংকড প্রচ্ছন্ন রোগ (পুরুষদের আক্রান্তের হার বেশি)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• থ্যালাসেমিয়া: অটোসোমাল প্রচ্ছন্ন অস্বাভাবিক হিমোগ্লোবিন ব্যাধি</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 17) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.৭: ডারউইনের গ্যালাপাগোস ফিঞ্চ পাখির ঠোঁট বিবর্তন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Darwin Galapagos Finches Adaptive Radiation</text>
          <g transform="translate(70, 65)">
            <path d="M 30 50 Q 80 20 130 50" fill="none" stroke="#eab308" strokeWidth="4" />
            <circle cx="80" cy="35" r="12" fill="#d97706" /><text x="80" y="38" fill="#fff" fontSize="6" textAnchor="middle">ডারউইন</text>
            <text x="80" y="105" fill="#facc15" fontSize="9" textAnchor="middle">প্রাকৃতিক নির্বাচন ও ফিঞ্চ পাখি</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#eab308" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">ডারউইনের প্রাকৃতিক নির্বাচন তত্ত্ব (১৮৫৯):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অত্যধিক বংশবৃদ্ধি → জীবন সংগ্রাম → যোগ্যতমের জয়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• প্রাকৃতিক নির্বাচন দ্বারা অভিযোজিত নতুন প্রজাতির উদ্ভব</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• আর্কিওপটেরিক্স: সরীসৃপ ও পাখির মধ্যবর্তী সংযোগকারী জীবাশ্ম</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 18) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.৭: প্রাকৃতিক নির্বাচন তত্ত্ব — যোগ্যতমের জয় ও উদ্বর্তন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Natural Selection & Survival of the Fittest</text>
          <g transform="translate(70, 65)">
            <path d="M 30 50 Q 80 20 130 50" fill="none" stroke="#eab308" strokeWidth="4" />
            <circle cx="80" cy="35" r="12" fill="#d97706" /><text x="80" y="38" fill="#fff" fontSize="6" textAnchor="middle">ডারউইন</text>
            <text x="80" y="105" fill="#facc15" fontSize="9" textAnchor="middle">প্রাকৃতিক নির্বাচন ও ফিঞ্চ পাখি</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#eab308" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">ডারউইনের প্রাকৃতিক নির্বাচন তত্ত্ব (১৮৫৯):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অত্যধিক বংশবৃদ্ধি → জীবন সংগ্রাম → যোগ্যতমের জয়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• প্রাকৃতিক নির্বাচন দ্বারা অভিযোজিত নতুন প্রজাতির উদ্ভব</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• আর্কিওপটেরিক্স: সরীসৃপ ও পাখির মধ্যবর্তী সংযোগকারী জীবাশ্ম</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 19) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.৭: সমসংস্থ ও সমবৃত্তীয় অঙ্গের বিবর্তনীয় প্রমাণ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Homologous vs Analogous Anatomical Organs</text>
          <g transform="translate(70, 65)">
            <path d="M 30 50 Q 80 20 130 50" fill="none" stroke="#eab308" strokeWidth="4" />
            <circle cx="80" cy="35" r="12" fill="#d97706" /><text x="80" y="38" fill="#fff" fontSize="6" textAnchor="middle">ডারউইন</text>
            <text x="80" y="105" fill="#facc15" fontSize="9" textAnchor="middle">প্রাকৃতিক নির্বাচন ও ফিঞ্চ পাখি</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#eab308" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">ডারউইনের প্রাকৃতিক নির্বাচন তত্ত্ব (১৮৫৯):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অত্যধিক বংশবৃদ্ধি → জীবন সংগ্রাম → যোগ্যতমের জয়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• প্রাকৃতিক নির্বাচন দ্বারা অভিযোজিত নতুন প্রজাতির উদ্ভব</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• আর্কিওপটেরিক্স: সরীসৃপ ও পাখির মধ্যবর্তী সংযোগকারী জীবাশ্ম</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 20) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১২.৭: জীবাশ্ম প্রমাণ — আর্কিওপটেরিক্স সংযোগকারী সেতু</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Fossil Archaeopteryx Reptile-Bird Missing Link</text>
          <g transform="translate(70, 65)">
            <path d="M 30 50 Q 80 20 130 50" fill="none" stroke="#eab308" strokeWidth="4" />
            <circle cx="80" cy="35" r="12" fill="#d97706" /><text x="80" y="38" fill="#fff" fontSize="6" textAnchor="middle">ডারউইন</text>
            <text x="80" y="105" fill="#facc15" fontSize="9" textAnchor="middle">প্রাকৃতিক নির্বাচন ও ফিঞ্চ পাখি</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#eab308" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">ডারউইনের প্রাকৃতিক নির্বাচন তত্ত্ব (১৮৫৯):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অত্যধিক বংশবৃদ্ধি → জীবন সংগ্রাম → যোগ্যতমের জয়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• প্রাকৃতিক নির্বাচন দ্বারা অভিযোজিত নতুন প্রজাতির উদ্ভব</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• আর্কিওপটেরিক্স: সরীসৃপ ও পাখির মধ্যবর্তী সংযোগকারী জীবাশ্ম</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
  }

  // ========================================================
  // CHAPTER 13
  // ========================================================
  if (chNum === 13) {
    if (id === 1) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.১: একটি পুকুরের আদর্শ বাস্তুতন্ত্রের ৩ডি উপাদান</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Pond Freshwater Ecosystem Components 3D</text>
          <g transform="translate(60, 65)">
            <rect x="10" y="15" width="160" height="75" rx="8" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" />
            <line x1="10" y1="40" x2="170" y2="40" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" />
            <circle cx="45" cy="30" r="8" fill="#10b981" /><text x="45" y="33" fill="#fff" fontSize="6" textAnchor="middle">উৎপাদক</text>
            <circle cx="105" cy="55" r="10" fill="#f59e0b" /><text x="105" y="58" fill="#fff" fontSize="6" textAnchor="middle">খাদক</text>
            <text x="90" y="108" fill="#38bdf8" fontSize="9" textAnchor="middle">পুকুরের ৩টি স্তর — লিটোরাল ও প্রোফান্ডাল</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">পুকুরের আদর্শ বাস্তুতন্ত্রের উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অজৈব: পানি, দ্রবীভূত অক্সিজেন ও খনিজ লবণ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• উৎপাদক: ফাইটোপ্লাংকটন ও ভাসমান শেওলা</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• খাদক: জুপ্লাংকটন → ছোট মাছ → বড় মাছ/বক ও বিয়োজক</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 2) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.১: উৎপাদক — ফাইটোপ্লাংকটন ও জলজ উদ্ভিদ স্তর</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Primary Producers: Phytoplankton & Hydrilla</text>
          <g transform="translate(60, 65)">
            <rect x="10" y="15" width="160" height="75" rx="8" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" />
            <line x1="10" y1="40" x2="170" y2="40" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" />
            <circle cx="45" cy="30" r="8" fill="#10b981" /><text x="45" y="33" fill="#fff" fontSize="6" textAnchor="middle">উৎপাদক</text>
            <circle cx="105" cy="55" r="10" fill="#f59e0b" /><text x="105" y="58" fill="#fff" fontSize="6" textAnchor="middle">খাদক</text>
            <text x="90" y="108" fill="#38bdf8" fontSize="9" textAnchor="middle">পুকুরের ৩টি স্তর — লিটোরাল ও প্রোফান্ডাল</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">পুকুরের আদর্শ বাস্তুতন্ত্রের উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অজৈব: পানি, দ্রবীভূত অক্সিজেন ও খনিজ লবণ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• উৎপাদক: ফাইটোপ্লাংকটন ও ভাসমান শেওলা</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• খাদক: জুপ্লাংকটন → ছোট মাছ → বড় মাছ/বক ও বিয়োজক</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 3) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.১: প্রথম, দ্বিতীয় ও তৃতীয় স্তরের খাদক শৃঙ্খল</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Consumers: Zooplankton, Small Fish, Large Predator</text>
          <g transform="translate(60, 65)">
            <rect x="10" y="15" width="160" height="75" rx="8" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" />
            <line x1="10" y1="40" x2="170" y2="40" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" />
            <circle cx="45" cy="30" r="8" fill="#10b981" /><text x="45" y="33" fill="#fff" fontSize="6" textAnchor="middle">উৎপাদক</text>
            <circle cx="105" cy="55" r="10" fill="#f59e0b" /><text x="105" y="58" fill="#fff" fontSize="6" textAnchor="middle">খাদক</text>
            <text x="90" y="108" fill="#38bdf8" fontSize="9" textAnchor="middle">পুকুরের ৩টি স্তর — লিটোরাল ও প্রোফান্ডাল</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">পুকুরের আদর্শ বাস্তুতন্ত্রের উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অজৈব: পানি, দ্রবীভূত অক্সিজেন ও খনিজ লবণ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• উৎপাদক: ফাইটোপ্লাংকটন ও ভাসমান শেওলা</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• খাদক: জুপ্লাংকটন → ছোট মাছ → বড় মাছ/বক ও বিয়োজক</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 4) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.১: বিয়োজক — ব্যাকটেরিয়া ও ছত্রাকের হিউমাস রূপান্তর</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Decomposers: Soil Bacteria & Fungi Humus</text>
          <g transform="translate(60, 65)">
            <rect x="10" y="15" width="160" height="75" rx="8" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" />
            <line x1="10" y1="40" x2="170" y2="40" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" />
            <circle cx="45" cy="30" r="8" fill="#10b981" /><text x="45" y="33" fill="#fff" fontSize="6" textAnchor="middle">উৎপাদক</text>
            <circle cx="105" cy="55" r="10" fill="#f59e0b" /><text x="105" y="58" fill="#fff" fontSize="6" textAnchor="middle">খাদক</text>
            <text x="90" y="108" fill="#38bdf8" fontSize="9" textAnchor="middle">পুকুরের ৩টি স্তর — লিটোরাল ও প্রোফান্ডাল</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">পুকুরের আদর্শ বাস্তুতন্ত্রের উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অজৈব: পানি, দ্রবীভূত অক্সিজেন ও খনিজ লবণ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• উৎপাদক: ফাইটোপ্লাংকটন ও ভাসমান শেওলা</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• খাদক: জুপ্লাংকটন → ছোট মাছ → বড় মাছ/বক ও বিয়োজক</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 5) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.১: পুকুরের গভীরতাভিত্তিক জোন — লিটোরাল ও প্রোফান্ডাল</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Pond Stratification: Littoral, Limnetic & Profundal</text>
          <g transform="translate(60, 65)">
            <rect x="10" y="15" width="160" height="75" rx="8" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="2" />
            <line x1="10" y1="40" x2="170" y2="40" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" />
            <circle cx="45" cy="30" r="8" fill="#10b981" /><text x="45" y="33" fill="#fff" fontSize="6" textAnchor="middle">উৎপাদক</text>
            <circle cx="105" cy="55" r="10" fill="#f59e0b" /><text x="105" y="58" fill="#fff" fontSize="6" textAnchor="middle">খাদক</text>
            <text x="90" y="108" fill="#38bdf8" fontSize="9" textAnchor="middle">পুকুরের ৩টি স্তর — লিটোরাল ও প্রোফান্ডাল</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">পুকুরের আদর্শ বাস্তুতন্ত্রের উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অজৈব: পানি, দ্রবীভূত অক্সিজেন ও খনিজ লবণ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• উৎপাদক: ফাইটোপ্লাংকটন ও ভাসমান শেওলা</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• খাদক: জুপ্লাংকটন → ছোট মাছ → বড় মাছ/বক ও বিয়োজক</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 6) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.২: তৃণভূমির চারণ খাদ্যশৃঙ্খল (Grazing Food Chain)</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Grazing Food Chain: Grass → Grasshopper → Bird</text>
          <g transform="translate(60, 65)">
            <rect x="10" y="35" width="35" height="24" rx="4" fill="#059669" /><text x="27" y="50" fill="#fff" fontSize="7" textAnchor="middle">ঘাস</text>
            <line x1="48" y1="47" x2="68" y2="47" stroke="#facc15" strokeWidth="2" />
            <rect x="70" y="35" width="40" height="24" rx="4" fill="#0284c7" /><text x="90" y="50" fill="#fff" fontSize="7" textAnchor="middle">ফড়িং</text>
            <line x1="113" y1="47" x2="133" y2="47" stroke="#facc15" strokeWidth="2" />
            <rect x="135" y="35" width="40" height="24" rx="4" fill="#dc2626" /><text x="155" y="50" fill="#fff" fontSize="7" textAnchor="middle">ব্যাঙ</text>
            <text x="90" y="95" fill="#facc15" fontSize="9" textAnchor="middle">চারণ খাদ্যশৃঙ্খল ও খাদ্যজাল</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">খাদ্যশৃঙ্খল বনাম খাদ্যজাল:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• চারণ শৃঙ্খল: উৎপাদক থেকে শিকারী পর্যন্ত শক্তির সরল প্রবাহ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• মৃতজীবী শৃঙ্খল: মৃত জৈব পদার্থ থেকে শুরু হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• খাদ্যজাল: একাধিক খাদ্যশৃঙ্খলের জটিল পারস্পরিক সংযোগ</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 7) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.২: মৃতজীবী খাদ্যশৃঙ্খল (Detritus Food Chain)</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Detritus Food Chain: Fallen Leaves → Worm → Hen</text>
          <g transform="translate(60, 65)">
            <rect x="10" y="35" width="35" height="24" rx="4" fill="#059669" /><text x="27" y="50" fill="#fff" fontSize="7" textAnchor="middle">ঘাস</text>
            <line x1="48" y1="47" x2="68" y2="47" stroke="#facc15" strokeWidth="2" />
            <rect x="70" y="35" width="40" height="24" rx="4" fill="#0284c7" /><text x="90" y="50" fill="#fff" fontSize="7" textAnchor="middle">ফড়িং</text>
            <line x1="113" y1="47" x2="133" y2="47" stroke="#facc15" strokeWidth="2" />
            <rect x="135" y="35" width="40" height="24" rx="4" fill="#dc2626" /><text x="155" y="50" fill="#fff" fontSize="7" textAnchor="middle">ব্যাঙ</text>
            <text x="90" y="95" fill="#facc15" fontSize="9" textAnchor="middle">চারণ খাদ্যশৃঙ্খল ও খাদ্যজাল</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">খাদ্যশৃঙ্খল বনাম খাদ্যজাল:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• চারণ শৃঙ্খল: উৎপাদক থেকে শিকারী পর্যন্ত শক্তির সরল প্রবাহ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• মৃতজীবী শৃঙ্খল: মৃত জৈব পদার্থ থেকে শুরু হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• খাদ্যজাল: একাধিক খাদ্যশৃঙ্খলের জটিল পারস্পরিক সংযোগ</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 8) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.২: বাস্তুতান্ত্রিক জটিল খাদ্যজাল (Food Web)</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Complex Ecosystem Food Web Interconnected Mesh</text>
          <g transform="translate(60, 65)">
            <rect x="10" y="35" width="35" height="24" rx="4" fill="#059669" /><text x="27" y="50" fill="#fff" fontSize="7" textAnchor="middle">ঘাস</text>
            <line x1="48" y1="47" x2="68" y2="47" stroke="#facc15" strokeWidth="2" />
            <rect x="70" y="35" width="40" height="24" rx="4" fill="#0284c7" /><text x="90" y="50" fill="#fff" fontSize="7" textAnchor="middle">ফড়িং</text>
            <line x1="113" y1="47" x2="133" y2="47" stroke="#facc15" strokeWidth="2" />
            <rect x="135" y="35" width="40" height="24" rx="4" fill="#dc2626" /><text x="155" y="50" fill="#fff" fontSize="7" textAnchor="middle">ব্যাঙ</text>
            <text x="90" y="95" fill="#facc15" fontSize="9" textAnchor="middle">চারণ খাদ্যশৃঙ্খল ও খাদ্যজাল</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">খাদ্যশৃঙ্খল বনাম খাদ্যজাল:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• চারণ শৃঙ্খল: উৎপাদক থেকে শিকারী পর্যন্ত শক্তির সরল প্রবাহ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• মৃতজীবী শৃঙ্খল: মৃত জৈব পদার্থ থেকে শুরু হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• খাদ্যজাল: একাধিক খাদ্যশৃঙ্খলের জটিল পারস্পরিক সংযোগ</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 9) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.৩: বাস্তুসংস্থানিক সংখ্যার পিরামিড (Pyramid of Numbers)</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Ecological Pyramid of Numbers Base to Apex</text>
          <g transform="translate(70, 65)">
            <polygon points="65,15 115,85 15,85" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
            <text x="65" y="45" fill="#ef4444" fontSize="7" textAnchor="middle">১ J (টার্শিয়ারি)</text>
            <text x="65" y="60" fill="#facc15" fontSize="7" textAnchor="middle">১০ J (গৌণ)</text>
            <text x="65" y="75" fill="#10b981" fontSize="7" textAnchor="middle">১০০ J (উৎপাদক)</text>
            <text x="65" y="112" fill="#10b981" fontSize="9" textAnchor="middle">লিন্ডেম্যানের ১০% শক্তি নীতি</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">বাস্তুতান্ত্রিক শক্তি পিরামিড ও চক্র:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ১০% নীতি: এক ট্রফিক স্তর থেকে পরবর্তী স্তরে মাত্র ১০% শক্তি যায়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• নাইট্রোজেন চক্র: রাইজোবিয়াম সংবন্ধন ও নাইট্রিফিকেশন</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• কার্বন চক্র: সালোকসংশ্লেষণ গ্রহণ ও শ্বসন দ্বারা বায়ুমণ্ডলে ফেরত</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 10) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.৩: জৈবভরের পিরামিড ও লিন্ডেম্যানের ১০% শক্তির নীতি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Pyramid of Biomass & Lindeman 10% Energy Law</text>
          <g transform="translate(70, 65)">
            <polygon points="65,15 115,85 15,85" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
            <text x="65" y="45" fill="#ef4444" fontSize="7" textAnchor="middle">১ J (টার্শিয়ারি)</text>
            <text x="65" y="60" fill="#facc15" fontSize="7" textAnchor="middle">১০ J (গৌণ)</text>
            <text x="65" y="75" fill="#10b981" fontSize="7" textAnchor="middle">১০০ J (উৎপাদক)</text>
            <text x="65" y="112" fill="#10b981" fontSize="9" textAnchor="middle">লিন্ডেম্যানের ১০% শক্তি নীতি</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">বাস্তুতান্ত্রিক শক্তি পিরামিড ও চক্র:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ১০% নীতি: এক ট্রফিক স্তর থেকে পরবর্তী স্তরে মাত্র ১০% শক্তি যায়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• নাইট্রোজেন চক্র: রাইজোবিয়াম সংবন্ধন ও নাইট্রিফিকেশন</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• কার্বন চক্র: সালোকসংশ্লেষণ গ্রহণ ও শ্বসন দ্বারা বায়ুমণ্ডলে ফেরত</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 11) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.৪: নাইট্রোজেন চক্র — সংবন্ধন, নাইট্রিফিকেশন ও ডিনাইট্রিফিকেশন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Biogeochemical Nitrogen Cycle Dynamics</text>
          <g transform="translate(70, 65)">
            <polygon points="65,15 115,85 15,85" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
            <text x="65" y="45" fill="#ef4444" fontSize="7" textAnchor="middle">১ J (টার্শিয়ারি)</text>
            <text x="65" y="60" fill="#facc15" fontSize="7" textAnchor="middle">১০ J (গৌণ)</text>
            <text x="65" y="75" fill="#10b981" fontSize="7" textAnchor="middle">১০০ J (উৎপাদক)</text>
            <text x="65" y="112" fill="#10b981" fontSize="9" textAnchor="middle">লিন্ডেম্যানের ১০% শক্তি নীতি</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">বাস্তুতান্ত্রিক শক্তি পিরামিড ও চক্র:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ১০% নীতি: এক ট্রফিক স্তর থেকে পরবর্তী স্তরে মাত্র ১০% শক্তি যায়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• নাইট্রোজেন চক্র: রাইজোবিয়াম সংবন্ধন ও নাইট্রিফিকেশন</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• কার্বন চক্র: সালোকসংশ্লেষণ গ্রহণ ও শ্বসন দ্বারা বায়ুমণ্ডলে ফেরত</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 12) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.৪: বায়ুমণ্ডলীয় কার্বন চক্র ও সালোকসংশ্লেষণ ভারসাম্য</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Global Carbon Cycle & Atmospheric CO2 Balance</text>
          <g transform="translate(70, 65)">
            <polygon points="65,15 115,85 15,85" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
            <text x="65" y="45" fill="#ef4444" fontSize="7" textAnchor="middle">১ J (টার্শিয়ারি)</text>
            <text x="65" y="60" fill="#facc15" fontSize="7" textAnchor="middle">১০ J (গৌণ)</text>
            <text x="65" y="75" fill="#10b981" fontSize="7" textAnchor="middle">১০০ J (উৎপাদক)</text>
            <text x="65" y="112" fill="#10b981" fontSize="9" textAnchor="middle">লিন্ডেম্যানের ১০% শক্তি নীতি</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">বাস্তুতান্ত্রিক শক্তি পিরামিড ও চক্র:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ১০% নীতি: এক ট্রফিক স্তর থেকে পরবর্তী স্তরে মাত্র ১০% শক্তি যায়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• নাইট্রোজেন চক্র: রাইজোবিয়াম সংবন্ধন ও নাইট্রিফিকেশন</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• কার্বন চক্র: সালোকসংশ্লেষণ গ্রহণ ও শ্বসন দ্বারা বায়ুমণ্ডলে ফেরত</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 13) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.৪: পানি চক্র — বাষ্পীভবন, ঘনীভবন ও বৃষ্টিপাত</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Hydrological Water Cycle Evaporation & Rain</text>
          <g transform="translate(70, 65)">
            <polygon points="65,15 115,85 15,85" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
            <text x="65" y="45" fill="#ef4444" fontSize="7" textAnchor="middle">১ J (টার্শিয়ারি)</text>
            <text x="65" y="60" fill="#facc15" fontSize="7" textAnchor="middle">১০ J (গৌণ)</text>
            <text x="65" y="75" fill="#10b981" fontSize="7" textAnchor="middle">১০০ J (উৎপাদক)</text>
            <text x="65" y="112" fill="#10b981" fontSize="9" textAnchor="middle">লিন্ডেম্যানের ১০% শক্তি নীতি</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">বাস্তুতান্ত্রিক শক্তি পিরামিড ও চক্র:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ১০% নীতি: এক ট্রফিক স্তর থেকে পরবর্তী স্তরে মাত্র ১০% শক্তি যায়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• নাইট্রোজেন চক্র: রাইজোবিয়াম সংবন্ধন ও নাইট্রিফিকেশন</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• কার্বন চক্র: সালোকসংশ্লেষণ গ্রহণ ও শ্বসন দ্বারা বায়ুমণ্ডলে ফেরত</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 14) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.৫: মিউচুয়ালিজম — মৌমাছি ও ফুলের পরাগায়ন বন্ধন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Mutualism: Honeybee & Angiosperm Flower</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="22" fill="#065f46" stroke="#10b981" strokeWidth="2" /><text x="50" y="53" fill="#fff" fontSize="7" textAnchor="middle">মিউচুয়ালিজম</text>
            <line x1="85" y1="30" x2="85" y2="85" stroke="#f59e0b" strokeWidth="4" />
            <text x="85" y="105" fill="#facc15" fontSize="8" textAnchor="middle">শ্বাসমূল (নিউমাটোফোর)</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">সুন্দরবন ম্যানগ্রোভ ও জীববৈচিত্র্য সংরক্ষণ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সুন্দরী উদ্ভিদের নিউমাটোফোরে লেন্টিসেল থাকে গ্যাস বিনিময়ের জন্য</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ইন-সিটু সংরক্ষণ: জাতীয় উদ্যান ও অভয়ারণ্যে নিজ পরিবেশে রক্ষা</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• এক্স-সিটু সংরক্ষণ: বোটানিক্যাল গার্ডেন, বীজ ব্যাংক ও সাফারি পার্ক</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 15) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.৫: কমেনসালিজম — অর্কিড এপিফাইট পরাশ্রয়ী উদ্ভিদ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Commensalism: Epiphytic Orchid on Mango Tree</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="22" fill="#065f46" stroke="#10b981" strokeWidth="2" /><text x="50" y="53" fill="#fff" fontSize="7" textAnchor="middle">মিউচুয়ালিজম</text>
            <line x1="85" y1="30" x2="85" y2="85" stroke="#f59e0b" strokeWidth="4" />
            <text x="85" y="105" fill="#facc15" fontSize="8" textAnchor="middle">শ্বাসমূল (নিউমাটোফোর)</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">সুন্দরবন ম্যানগ্রোভ ও জীববৈচিত্র্য সংরক্ষণ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সুন্দরী উদ্ভিদের নিউমাটোফোরে লেন্টিসেল থাকে গ্যাস বিনিময়ের জন্য</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ইন-সিটু সংরক্ষণ: জাতীয় উদ্যান ও অভয়ারণ্যে নিজ পরিবেশে রক্ষা</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• এক্স-সিটু সংরক্ষণ: বোটানিক্যাল গার্ডেন, বীজ ব্যাংক ও সাফারি পার্ক</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 16) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.৫: পরজীবিতা — স্বর্ণলতার চোষক অঙ্গ হস্টোরিয়া</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Parasitism: Cuscuta Dodder Vine Haustorium</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="22" fill="#065f46" stroke="#10b981" strokeWidth="2" /><text x="50" y="53" fill="#fff" fontSize="7" textAnchor="middle">মিউচুয়ালিজম</text>
            <line x1="85" y1="30" x2="85" y2="85" stroke="#f59e0b" strokeWidth="4" />
            <text x="85" y="105" fill="#facc15" fontSize="8" textAnchor="middle">শ্বাসমূল (নিউমাটোফোর)</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">সুন্দরবন ম্যানগ্রোভ ও জীববৈচিত্র্য সংরক্ষণ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সুন্দরী উদ্ভিদের নিউমাটোফোরে লেন্টিসেল থাকে গ্যাস বিনিময়ের জন্য</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ইন-সিটু সংরক্ষণ: জাতীয় উদ্যান ও অভয়ারণ্যে নিজ পরিবেশে রক্ষা</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• এক্স-সিটু সংরক্ষণ: বোটানিক্যাল গার্ডেন, বীজ ব্যাংক ও সাফারি পার্ক</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 17) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.৫: আন্তঃপ্রজাতি ও অন্তঃপ্রজাতি খাদ্য-বাসস্থান প্রতিযোগিতা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Interspecific & Intraspecific Resource Competition</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="22" fill="#065f46" stroke="#10b981" strokeWidth="2" /><text x="50" y="53" fill="#fff" fontSize="7" textAnchor="middle">মিউচুয়ালিজম</text>
            <line x1="85" y1="30" x2="85" y2="85" stroke="#f59e0b" strokeWidth="4" />
            <text x="85" y="105" fill="#facc15" fontSize="8" textAnchor="middle">শ্বাসমূল (নিউমাটোফোর)</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">সুন্দরবন ম্যানগ্রোভ ও জীববৈচিত্র্য সংরক্ষণ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সুন্দরী উদ্ভিদের নিউমাটোফোরে লেন্টিসেল থাকে গ্যাস বিনিময়ের জন্য</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ইন-সিটু সংরক্ষণ: জাতীয় উদ্যান ও অভয়ারণ্যে নিজ পরিবেশে রক্ষা</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• এক্স-সিটু সংরক্ষণ: বোটানিক্যাল গার্ডেন, বীজ ব্যাংক ও সাফারি পার্ক</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 18) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.৬: সুন্দরবনের ম্যানগ্রোভ ইকোসিস্টেম ও শ্বাসমূল (নিউমাটোফোর)</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Sundarbans Mangrove Pneumatophores & Roots</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="22" fill="#065f46" stroke="#10b981" strokeWidth="2" /><text x="50" y="53" fill="#fff" fontSize="7" textAnchor="middle">মিউচুয়ালিজম</text>
            <line x1="85" y1="30" x2="85" y2="85" stroke="#f59e0b" strokeWidth="4" />
            <text x="85" y="105" fill="#facc15" fontSize="8" textAnchor="middle">শ্বাসমূল (নিউমাটোফোর)</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">সুন্দরবন ম্যানগ্রোভ ও জীববৈচিত্র্য সংরক্ষণ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সুন্দরী উদ্ভিদের নিউমাটোফোরে লেন্টিসেল থাকে গ্যাস বিনিময়ের জন্য</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ইন-সিটু সংরক্ষণ: জাতীয় উদ্যান ও অভয়ারণ্যে নিজ পরিবেশে রক্ষা</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• এক্স-সিটু সংরক্ষণ: বোটানিক্যাল গার্ডেন, বীজ ব্যাংক ও সাফারি পার্ক</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 19) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.৬: জীববৈচিত্র্য বিলুপ্তি সংকট ও খাদ্যশৃঙ্খল বিপর্যয়</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Habitat Loss & Biodiversity Extinction Crisis</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="22" fill="#065f46" stroke="#10b981" strokeWidth="2" /><text x="50" y="53" fill="#fff" fontSize="7" textAnchor="middle">মিউচুয়ালিজম</text>
            <line x1="85" y1="30" x2="85" y2="85" stroke="#f59e0b" strokeWidth="4" />
            <text x="85" y="105" fill="#facc15" fontSize="8" textAnchor="middle">শ্বাসমূল (নিউমাটোফোর)</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">সুন্দরবন ম্যানগ্রোভ ও জীববৈচিত্র্য সংরক্ষণ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সুন্দরী উদ্ভিদের নিউমাটোফোরে লেন্টিসেল থাকে গ্যাস বিনিময়ের জন্য</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ইন-সিটু সংরক্ষণ: জাতীয় উদ্যান ও অভয়ারণ্যে নিজ পরিবেশে রক্ষা</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• এক্স-সিটু সংরক্ষণ: বোটানিক্যাল গার্ডেন, বীজ ব্যাংক ও সাফারি পার্ক</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 20) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৩.৬: ইন-সিটু ও এক্স-সিটু জীববৈচিত্র্য সংরক্ষণ অভয়ারণ্য</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">In-situ & Ex-situ Conservation Sanctuaries</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="22" fill="#065f46" stroke="#10b981" strokeWidth="2" /><text x="50" y="53" fill="#fff" fontSize="7" textAnchor="middle">মিউচুয়ালিজম</text>
            <line x1="85" y1="30" x2="85" y2="85" stroke="#f59e0b" strokeWidth="4" />
            <text x="85" y="105" fill="#facc15" fontSize="8" textAnchor="middle">শ্বাসমূল (নিউমাটোফোর)</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">সুন্দরবন ম্যানগ্রোভ ও জীববৈচিত্র্য সংরক্ষণ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সুন্দরী উদ্ভিদের নিউমাটোফোরে লেন্টিসেল থাকে গ্যাস বিনিময়ের জন্য</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ইন-সিটু সংরক্ষণ: জাতীয় উদ্যান ও অভয়ারণ্যে নিজ পরিবেশে রক্ষা</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• এক্স-সিটু সংরক্ষণ: বোটানিক্যাল গার্ডেন, বীজ ব্যাংক ও সাফারি পার্ক</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
  }

  // ========================================================
  // CHAPTER 14
  // ========================================================
  if (chNum === 14) {
    if (id === 1) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.১: জীবপ্রযুক্তির ধারণা, ইতিহাস ও আধুনিক পরিধি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Biotechnology Scope & Modern Molecular Horizons</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="15" width="25" height="70" rx="5" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            <ellipse cx="27" cy="65" rx="8" ry="5" fill="#22c55e" /><text x="27" y="55" fill="#facc15" fontSize="7" textAnchor="middle">ক্যালাস</text>
            <rect x="70" y="15" width="25" height="70" rx="5" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="82" y1="65" x2="82" y2="35" stroke="#22c55e" strokeWidth="2.5" /><circle cx="82" cy="35" r="4" fill="#4ade80" />
            <text x="50" y="108" fill="#38bdf8" fontSize="9" textAnchor="middle">টিস্যু কালচারে প্লান্টলেট সৃষ্টি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">উদ্ভিদ টিস্যু কালচারের ধাপসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. মাতৃউদ্ভিদ থেকে এক্সপ্লান্ট (Explant) নির্বাচন ও নির্বীজন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. পুষ্টি মাধ্যমে (MS Medium) অবয়বহীন ক্যালাস সৃষ্টি</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. মূল ও কাণ্ড সৃষ্টি করে মাঠে অভিযোজন (Hardening)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 2) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.২: উদ্ভিদের টোটিপোটেন্সি — একক কোষ থেকে পূর্ণ উদ্ভিদ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Plant Cellular Totipotency Capability</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="15" width="25" height="70" rx="5" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            <ellipse cx="27" cy="65" rx="8" ry="5" fill="#22c55e" /><text x="27" y="55" fill="#facc15" fontSize="7" textAnchor="middle">ক্যালাস</text>
            <rect x="70" y="15" width="25" height="70" rx="5" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="82" y1="65" x2="82" y2="35" stroke="#22c55e" strokeWidth="2.5" /><circle cx="82" cy="35" r="4" fill="#4ade80" />
            <text x="50" y="108" fill="#38bdf8" fontSize="9" textAnchor="middle">টিস্যু কালচারে প্লান্টলেট সৃষ্টি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">উদ্ভিদ টিস্যু কালচারের ধাপসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. মাতৃউদ্ভিদ থেকে এক্সপ্লান্ট (Explant) নির্বাচন ও নির্বীজন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. পুষ্টি মাধ্যমে (MS Medium) অবয়বহীন ক্যালাস সৃষ্টি</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. মূল ও কাণ্ড সৃষ্টি করে মাঠে অভিযোজন (Hardening)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 3) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.২: টিস্যু কালচার ল্যাবরেটরি ও ল্যামিনার এয়ারফ্লো</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Tissue Culture Sterile Laminar Airflow Bench</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="15" width="25" height="70" rx="5" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            <ellipse cx="27" cy="65" rx="8" ry="5" fill="#22c55e" /><text x="27" y="55" fill="#facc15" fontSize="7" textAnchor="middle">ক্যালাস</text>
            <rect x="70" y="15" width="25" height="70" rx="5" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="82" y1="65" x2="82" y2="35" stroke="#22c55e" strokeWidth="2.5" /><circle cx="82" cy="35" r="4" fill="#4ade80" />
            <text x="50" y="108" fill="#38bdf8" fontSize="9" textAnchor="middle">টিস্যু কালচারে প্লান্টলেট সৃষ্টি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">উদ্ভিদ টিস্যু কালচারের ধাপসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. মাতৃউদ্ভিদ থেকে এক্সপ্লান্ট (Explant) নির্বাচন ও নির্বীজন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. পুষ্টি মাধ্যমে (MS Medium) অবয়বহীন ক্যালাস সৃষ্টি</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. মূল ও কাণ্ড সৃষ্টি করে মাঠে অভিযোজন (Hardening)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 4) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.২: এক্সপ্লান্ট নির্বাচন ও পুষ্টি মাধ্যম (MS Medium)</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Explant Tissue Selection & MS Nutrient Flask</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="15" width="25" height="70" rx="5" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            <ellipse cx="27" cy="65" rx="8" ry="5" fill="#22c55e" /><text x="27" y="55" fill="#facc15" fontSize="7" textAnchor="middle">ক্যালাস</text>
            <rect x="70" y="15" width="25" height="70" rx="5" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="82" y1="65" x2="82" y2="35" stroke="#22c55e" strokeWidth="2.5" /><circle cx="82" cy="35" r="4" fill="#4ade80" />
            <text x="50" y="108" fill="#38bdf8" fontSize="9" textAnchor="middle">টিস্যু কালচারে প্লান্টলেট সৃষ্টি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">উদ্ভিদ টিস্যু কালচারের ধাপসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. মাতৃউদ্ভিদ থেকে এক্সপ্লান্ট (Explant) নির্বাচন ও নির্বীজন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. পুষ্টি মাধ্যমে (MS Medium) অবয়বহীন ক্যালাস সৃষ্টি</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. মূল ও কাণ্ড সৃষ্টি করে মাঠে অভিযোজন (Hardening)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 5) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.২: অবয়বহীন ক্যালাস সৃষ্টি ও হরমোন দ্বারা বিভাজন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Undifferentiated Callus Formation & Division</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="15" width="25" height="70" rx="5" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            <ellipse cx="27" cy="65" rx="8" ry="5" fill="#22c55e" /><text x="27" y="55" fill="#facc15" fontSize="7" textAnchor="middle">ক্যালাস</text>
            <rect x="70" y="15" width="25" height="70" rx="5" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="82" y1="65" x2="82" y2="35" stroke="#22c55e" strokeWidth="2.5" /><circle cx="82" cy="35" r="4" fill="#4ade80" />
            <text x="50" y="108" fill="#38bdf8" fontSize="9" textAnchor="middle">টিস্যু কালচারে প্লান্টলেট সৃষ্টি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">উদ্ভিদ টিস্যু কালচারের ধাপসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. মাতৃউদ্ভিদ থেকে এক্সপ্লান্ট (Explant) নির্বাচন ও নির্বীজন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. পুষ্টি মাধ্যমে (MS Medium) অবয়বহীন ক্যালাস সৃষ্টি</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. মূল ও কাণ্ড সৃষ্টি করে মাঠে অভিযোজন (Hardening)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 6) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.২: টেস্টটিউবে মূল ও কাণ্ড সৃষ্টি — প্লান্টলেট চারা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Organogenesis: Root & Shoot Plantlet in Tube</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="15" width="25" height="70" rx="5" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            <ellipse cx="27" cy="65" rx="8" ry="5" fill="#22c55e" /><text x="27" y="55" fill="#facc15" fontSize="7" textAnchor="middle">ক্যালাস</text>
            <rect x="70" y="15" width="25" height="70" rx="5" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="82" y1="65" x2="82" y2="35" stroke="#22c55e" strokeWidth="2.5" /><circle cx="82" cy="35" r="4" fill="#4ade80" />
            <text x="50" y="108" fill="#38bdf8" fontSize="9" textAnchor="middle">টিস্যু কালচারে প্লান্টলেট সৃষ্টি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">উদ্ভিদ টিস্যু কালচারের ধাপসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. মাতৃউদ্ভিদ থেকে এক্সপ্লান্ট (Explant) নির্বাচন ও নির্বীজন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. পুষ্টি মাধ্যমে (MS Medium) অবয়বহীন ক্যালাস সৃষ্টি</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. মূল ও কাণ্ড সৃষ্টি করে মাঠে অভিযোজন (Hardening)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 7) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.২: কাচের জার থেকে মাঠ পর্যায়ে হার্ডেনিং অভিযোজন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Plantlet Acclimatization & Greenhouse Hardening</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="15" width="25" height="70" rx="5" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            <ellipse cx="27" cy="65" rx="8" ry="5" fill="#22c55e" /><text x="27" y="55" fill="#facc15" fontSize="7" textAnchor="middle">ক্যালাস</text>
            <rect x="70" y="15" width="25" height="70" rx="5" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="82" y1="65" x2="82" y2="35" stroke="#22c55e" strokeWidth="2.5" /><circle cx="82" cy="35" r="4" fill="#4ade80" />
            <text x="50" y="108" fill="#38bdf8" fontSize="9" textAnchor="middle">টিস্যু কালচারে প্লান্টলেট সৃষ্টি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">উদ্ভিদ টিস্যু কালচারের ধাপসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. মাতৃউদ্ভিদ থেকে এক্সপ্লান্ট (Explant) নির্বাচন ও নির্বীজন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. পুষ্টি মাধ্যমে (MS Medium) অবয়বহীন ক্যালাস সৃষ্টি</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. মূল ও কাণ্ড সৃষ্টি করে মাঠে অভিযোজন (Hardening)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 8) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.৩: রিকম্বিন্যান্ট ডিএনএ প্রযুক্তি — জেনেটিক ইঞ্জিনিয়ারিং</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Recombinant DNA (rDNA) Technology Overview</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="30" fill="none" stroke="#f59e0b" strokeWidth="4" />
            <path d="M 68 28 A 30 30 0 0 1 80 50" fill="none" stroke="#ef4444" strokeWidth="5" />
            <text x="50" y="53" fill="#fff" fontSize="8" textAnchor="middle">pBR322</text>
            <text x="50" y="105" fill="#facc15" fontSize="9" textAnchor="middle">রিকম্বিন্যান্ট প্লাজমিড (rDNA)</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">জেনেটিক ইঞ্জিনিয়ারিং ও আণবিক কাঁচি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• রেস্ট্রিকশন এনজাইম (EcoRI): নির্দিষ্ট ক্ষারক সিকোয়েন্স কাটে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ডিএনএ লাইগেজ: আণবিক আঠা হিসেবে কাঙ্ক্ষিত জিন জোড়া লাগায়</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• প্লাজমিড ভেক্টর গ্রাহক ব্যাক্টেরিয়ায় রূপান্তর (Transformation)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 9) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.৪: ব্যাকটেরিয়াল প্লাজমিড pBR322 জিন প্রকৌশল ভেক্টর</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Bacterial Plasmid Vector pBR322 Architecture</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="30" fill="none" stroke="#f59e0b" strokeWidth="4" />
            <path d="M 68 28 A 30 30 0 0 1 80 50" fill="none" stroke="#ef4444" strokeWidth="5" />
            <text x="50" y="53" fill="#fff" fontSize="8" textAnchor="middle">pBR322</text>
            <text x="50" y="105" fill="#facc15" fontSize="9" textAnchor="middle">রিকম্বিন্যান্ট প্লাজমিড (rDNA)</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">জেনেটিক ইঞ্জিনিয়ারিং ও আণবিক কাঁচি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• রেস্ট্রিকশন এনজাইম (EcoRI): নির্দিষ্ট ক্ষারক সিকোয়েন্স কাটে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ডিএনএ লাইগেজ: আণবিক আঠা হিসেবে কাঙ্ক্ষিত জিন জোড়া লাগায়</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• প্লাজমিড ভেক্টর গ্রাহক ব্যাক্টেরিয়ায় রূপান্তর (Transformation)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 10) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.৪: রেস্ট্রিকশন এনজাইম — আণবিক কাঁচি (EcoRI কাটিং)</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Restriction Endonuclease Molecular Scissors</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="30" fill="none" stroke="#f59e0b" strokeWidth="4" />
            <path d="M 68 28 A 30 30 0 0 1 80 50" fill="none" stroke="#ef4444" strokeWidth="5" />
            <text x="50" y="53" fill="#fff" fontSize="8" textAnchor="middle">pBR322</text>
            <text x="50" y="105" fill="#facc15" fontSize="9" textAnchor="middle">রিকম্বিন্যান্ট প্লাজমিড (rDNA)</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">জেনেটিক ইঞ্জিনিয়ারিং ও আণবিক কাঁচি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• রেস্ট্রিকশন এনজাইম (EcoRI): নির্দিষ্ট ক্ষারক সিকোয়েন্স কাটে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ডিএনএ লাইগেজ: আণবিক আঠা হিসেবে কাঙ্ক্ষিত জিন জোড়া লাগায়</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• প্লাজমিড ভেক্টর গ্রাহক ব্যাক্টেরিয়ায় রূপান্তর (Transformation)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 11) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.৪: স্টিকি এন্ড তৈরি ও পরিপূরক ক্ষারক জোড় বন্ধন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Sticky Ends Overhangs & Base Pairing</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="30" fill="none" stroke="#f59e0b" strokeWidth="4" />
            <path d="M 68 28 A 30 30 0 0 1 80 50" fill="none" stroke="#ef4444" strokeWidth="5" />
            <text x="50" y="53" fill="#fff" fontSize="8" textAnchor="middle">pBR322</text>
            <text x="50" y="105" fill="#facc15" fontSize="9" textAnchor="middle">রিকম্বিন্যান্ট প্লাজমিড (rDNA)</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">জেনেটিক ইঞ্জিনিয়ারিং ও আণবিক কাঁচি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• রেস্ট্রিকশন এনজাইম (EcoRI): নির্দিষ্ট ক্ষারক সিকোয়েন্স কাটে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ডিএনএ লাইগেজ: আণবিক আঠা হিসেবে কাঙ্ক্ষিত জিন জোড়া লাগায়</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• প্লাজমিড ভেক্টর গ্রাহক ব্যাক্টেরিয়ায় রূপান্তর (Transformation)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 12) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.৪: ডিএনএ লাইগেজ এনজাইম — আণবিক আঠা সংযোগ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">DNA Ligase Molecular Glue Phosphodiester Link</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="30" fill="none" stroke="#f59e0b" strokeWidth="4" />
            <path d="M 68 28 A 30 30 0 0 1 80 50" fill="none" stroke="#ef4444" strokeWidth="5" />
            <text x="50" y="53" fill="#fff" fontSize="8" textAnchor="middle">pBR322</text>
            <text x="50" y="105" fill="#facc15" fontSize="9" textAnchor="middle">রিকম্বিন্যান্ট প্লাজমিড (rDNA)</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">জেনেটিক ইঞ্জিনিয়ারিং ও আণবিক কাঁচি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• রেস্ট্রিকশন এনজাইম (EcoRI): নির্দিষ্ট ক্ষারক সিকোয়েন্স কাটে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ডিএনএ লাইগেজ: আণবিক আঠা হিসেবে কাঙ্ক্ষিত জিন জোড়া লাগায়</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• প্লাজমিড ভেক্টর গ্রাহক ব্যাক্টেরিয়ায় রূপান্তর (Transformation)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 13) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.৪: রিকম্বিন্যান্ট প্লাজমিড গ্রাহক ব্যাকটেরিয়ায় রূপান্তর</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Bacterial Transformation & Calcium Chloride</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="30" fill="none" stroke="#f59e0b" strokeWidth="4" />
            <path d="M 68 28 A 30 30 0 0 1 80 50" fill="none" stroke="#ef4444" strokeWidth="5" />
            <text x="50" y="53" fill="#fff" fontSize="8" textAnchor="middle">pBR322</text>
            <text x="50" y="105" fill="#facc15" fontSize="9" textAnchor="middle">রিকম্বিন্যান্ট প্লাজমিড (rDNA)</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">জেনেটিক ইঞ্জিনিয়ারিং ও আণবিক কাঁচি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• রেস্ট্রিকশন এনজাইম (EcoRI): নির্দিষ্ট ক্ষারক সিকোয়েন্স কাটে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ডিএনএ লাইগেজ: আণবিক আঠা হিসেবে কাঙ্ক্ষিত জিন জোড়া লাগায়</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• প্লাজমিড ভেক্টর গ্রাহক ব্যাক্টেরিয়ায় রূপান্তর (Transformation)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 14) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.৪: ট্রান্সজেনিক ব্যাকটেরিয়ার ফার্মেন্টার ক্লোনিং</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Fermenter Bioreactor Transgenic Bacterial Clone</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="30" fill="none" stroke="#f59e0b" strokeWidth="4" />
            <path d="M 68 28 A 30 30 0 0 1 80 50" fill="none" stroke="#ef4444" strokeWidth="5" />
            <text x="50" y="53" fill="#fff" fontSize="8" textAnchor="middle">pBR322</text>
            <text x="50" y="105" fill="#facc15" fontSize="9" textAnchor="middle">রিকম্বিন্যান্ট প্লাজমিড (rDNA)</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">জেনেটিক ইঞ্জিনিয়ারিং ও আণবিক কাঁচি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• রেস্ট্রিকশন এনজাইম (EcoRI): নির্দিষ্ট ক্ষারক সিকোয়েন্স কাটে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ডিএনএ লাইগেজ: আণবিক আঠা হিসেবে কাঙ্ক্ষিত জিন জোড়া লাগায়</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• প্লাজমিড ভেক্টর গ্রাহক ব্যাক্টেরিয়ায় রূপান্তর (Transformation)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 15) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.৫: রিকম্বিন্যান্ট মানব ইনসুলিন (Humulin) উৎপাদন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Recombinant Human Insulin Production Pipeline</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="25" width="55" height="40" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="42" y="48" fill="#fff" fontSize="7" textAnchor="middle">হিউমুলিন</text>
            <circle cx="115" cy="45" r="18" fill="#eab308" stroke="#facc15" strokeWidth="1.5" /><text x="115" y="48" fill="#fff" fontSize="6" textAnchor="middle">গোল্ডেন রাইস</text>
            <text x="80" y="105" fill="#4ade80" fontSize="9" textAnchor="middle">ট্রান্সজেনিক প্রয়োগ ও বায়ো-সেফটি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">আধুনিক জীবপ্রযুক্তির সাফল্য:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• মানব ইনসুলিন: E. coli ব্যাক্টেরিয়ার ফার্মেন্টারে বাণিজ্যিক উৎপাদন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বিটি বেগুন: ডগা ও ফল ছিদ্রকারী পোকা প্রতিরোধী GM ফসল</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• গোল্ডেন রাইস: ভিটামিন-এ সমৃদ্ধ ধান (রাতকানা রোগ প্রতিরোধক)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 16) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.৫: জেনেটিক্যালি মডিফাইড (GM) বিটি (Bt) বেগুন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Bt Brinjal Bacillus Thuringiensis Crystal Toxin</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="25" width="55" height="40" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="42" y="48" fill="#fff" fontSize="7" textAnchor="middle">হিউমুলিন</text>
            <circle cx="115" cy="45" r="18" fill="#eab308" stroke="#facc15" strokeWidth="1.5" /><text x="115" y="48" fill="#fff" fontSize="6" textAnchor="middle">গোল্ডেন রাইস</text>
            <text x="80" y="105" fill="#4ade80" fontSize="9" textAnchor="middle">ট্রান্সজেনিক প্রয়োগ ও বায়ো-সেফটি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">আধুনিক জীবপ্রযুক্তির সাফল্য:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• মানব ইনসুলিন: E. coli ব্যাক্টেরিয়ার ফার্মেন্টারে বাণিজ্যিক উৎপাদন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বিটি বেগুন: ডগা ও ফল ছিদ্রকারী পোকা প্রতিরোধী GM ফসল</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• গোল্ডেন রাইস: ভিটামিন-এ সমৃদ্ধ ধান (রাতকানা রোগ প্রতিরোধক)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 17) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.৫: গোল্ডেন রাইস — বিটা-ক্যারোটিন (ভিটামিন এ) সমৃদ্ধ ধান</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Golden Rice Beta-Carotene Pro-Vitamin A Biosynthesis</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="25" width="55" height="40" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="42" y="48" fill="#fff" fontSize="7" textAnchor="middle">হিউমুলিন</text>
            <circle cx="115" cy="45" r="18" fill="#eab308" stroke="#facc15" strokeWidth="1.5" /><text x="115" y="48" fill="#fff" fontSize="6" textAnchor="middle">গোল্ডেন রাইস</text>
            <text x="80" y="105" fill="#4ade80" fontSize="9" textAnchor="middle">ট্রান্সজেনিক প্রয়োগ ও বায়ো-সেফটি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">আধুনিক জীবপ্রযুক্তির সাফল্য:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• মানব ইনসুলিন: E. coli ব্যাক্টেরিয়ার ফার্মেন্টারে বাণিজ্যিক উৎপাদন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বিটি বেগুন: ডগা ও ফল ছিদ্রকারী পোকা প্রতিরোধী GM ফসল</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• গোল্ডেন রাইস: ভিটামিন-এ সমৃদ্ধ ধান (রাতকানা রোগ প্রতিরোধক)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 18) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.৫: খরা ও লবণাক্ততা সহনশীল ট্রান্সজেনিক ধান ফসল</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Salinity & Drought Tolerant Transgenic Crop Strain</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="25" width="55" height="40" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="42" y="48" fill="#fff" fontSize="7" textAnchor="middle">হিউমুলিন</text>
            <circle cx="115" cy="45" r="18" fill="#eab308" stroke="#facc15" strokeWidth="1.5" /><text x="115" y="48" fill="#fff" fontSize="6" textAnchor="middle">গোল্ডেন রাইস</text>
            <text x="80" y="105" fill="#4ade80" fontSize="9" textAnchor="middle">ট্রান্সজেনিক প্রয়োগ ও বায়ো-সেফটি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">আধুনিক জীবপ্রযুক্তির সাফল্য:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• মানব ইনসুলিন: E. coli ব্যাক্টেরিয়ার ফার্মেন্টারে বাণিজ্যিক উৎপাদন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বিটি বেগুন: ডগা ও ফল ছিদ্রকারী পোকা প্রতিরোধী GM ফসল</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• গোল্ডেন রাইস: ভিটামিন-এ সমৃদ্ধ ধান (রাতকানা রোগ প্রতিরোধক)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 19) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.৬: ইন্টারফেরন ও রিকম্বিন্যান্ট ভ্যাকসিন উৎপাদন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Interferon & Viral Subunit Vaccine Engineering</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="25" width="55" height="40" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="42" y="48" fill="#fff" fontSize="7" textAnchor="middle">হিউমুলিন</text>
            <circle cx="115" cy="45" r="18" fill="#eab308" stroke="#facc15" strokeWidth="1.5" /><text x="115" y="48" fill="#fff" fontSize="6" textAnchor="middle">গোল্ডেন রাইস</text>
            <text x="80" y="105" fill="#4ade80" fontSize="9" textAnchor="middle">ট্রান্সজেনিক প্রয়োগ ও বায়ো-সেফটি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">আধুনিক জীবপ্রযুক্তির সাফল্য:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• মানব ইনসুলিন: E. coli ব্যাক্টেরিয়ার ফার্মেন্টারে বাণিজ্যিক উৎপাদন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বিটি বেগুন: ডগা ও ফল ছিদ্রকারী পোকা প্রতিরোধী GM ফসল</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• গোল্ডেন রাইস: ভিটামিন-এ সমৃদ্ধ ধান (রাতকানা রোগ প্রতিরোধক)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
    if (id === 20) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১৪.৭: জীবপ্রযুক্তির বায়ো-সেফটি ও আন্তর্জাতিক নৈতিকতা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Biosafety Protocol & Bioethics Global Standards</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="25" width="55" height="40" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="42" y="48" fill="#fff" fontSize="7" textAnchor="middle">হিউমুলিন</text>
            <circle cx="115" cy="45" r="18" fill="#eab308" stroke="#facc15" strokeWidth="1.5" /><text x="115" y="48" fill="#fff" fontSize="6" textAnchor="middle">গোল্ডেন রাইস</text>
            <text x="80" y="105" fill="#4ade80" fontSize="9" textAnchor="middle">ট্রান্সজেনিক প্রয়োগ ও বায়ো-সেফটি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">আধুনিক জীবপ্রযুক্তির সাফল্য:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• মানব ইনসুলিন: E. coli ব্যাক্টেরিয়ার ফার্মেন্টারে বাণিজ্যিক উৎপাদন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বিটি বেগুন: ডগা ও ফল ছিদ্রকারী পোকা প্রতিরোধী GM ফসল</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• গোল্ডেন রাইস: ভিটামিন-এ সমৃদ্ধ ধান (রাতকানা রোগ প্রতিরোধক)</text></g>
          {/* Interactive Pins */}
          {labels.map((lbl, idx) => {
            const isHigh = highlightedLabel === idx;
            const px = 100 + (idx * 160) % 480;
            const py = 195;
            return (
              <g key={idx} className="cursor-pointer transition-all">
                <circle cx={px} cy={py} r={isHigh ? 9 : 6} fill={lbl.color || "#10b981"} stroke="#ffffff" strokeWidth="1.5" className={isHigh ? "animate-pulse" : ""} />
                <text x={px + 12} y={py + 4} fill={isHigh ? "#ffffff" : "#94a3b8"} fontSize="10" fontWeight={isHigh ? "bold" : "normal"}>{lbl.sym}: {lbl.bn}</text>
              </g>
            );
          })}
        </svg>
      );
    }
  }

  return null;
}