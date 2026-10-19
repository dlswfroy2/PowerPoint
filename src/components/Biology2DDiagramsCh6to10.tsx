/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Biology3DModelMeta } from '../data/biology3DModelsCatalog';

export function renderBiologyCh6to10Diagram(
  chNum: number,
  currentModel: Biology3DModelMeta,
  highlightedLabel: number | null
): React.ReactNode {
  const id = currentModel.id;
  const labels = currentModel.labels || [];

  // ========================================================
  // CHAPTER 6
  // ========================================================
  if (chNum === 6) {
    if (id === 1) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.১: মূলরোম ও মাটির কৈশিক পানি শোষণ প্রক্রিয়া</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Root Hair Capillary Water Absorption</text>
          <g transform="translate(60, 65)">
            <path d="M 60 55 C 20 45, 10 70, 0 55" stroke="#facc15" strokeWidth="6" strokeLinecap="round" fill="none" />
            <rect x="60" y="20" width="40" height="70" fill="#047857" stroke="#10b981" strokeWidth="1.5" /><text x="80" y="58" fill="#fff" fontSize="8" textAnchor="middle">এপিডার্মিস</text>
            <rect x="100" y="20" width="50" height="70" fill="#065f46" stroke="#10b981" strokeWidth="1.5" /><text x="125" y="58" fill="#fff" fontSize="8" textAnchor="middle">কর্টেক্স</text>
            <rect x="150" y="20" width="50" height="70" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="175" y="58" fill="#fff" fontSize="8" textAnchor="middle">জাইলেম</text>
            <line x1="10" y1="55" x2="160" y2="55" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 2" />
            <text x="100" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">মূলরোম দ্বারা কৈশিক পানি শোষণ</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদের পানি শোষণ ও পরিবহন পথ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অ্যাপোপ্লাস্টিক পথ: কোষপ্রাচীর ও আন্তঃকোষীয় ফাঁক দিয়ে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• সিমপ্লাস্টিক পথ: প্লাজমোডেসমাটা সাইটোপ্লাজমের মধ্য দিয়ে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অ্যান্ডোডার্মিসে ক্যাসপেরিয়ান স্ট্রিপ (সুবেরিন) বাধা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.১: ইমবাইবিশন, ব্যাপন ও অভিস্রবণের ৩ডি মডেল</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Imbibition, Diffusion & Osmosis 3D</text>
          <g transform="translate(60, 65)">
            <path d="M 60 55 C 20 45, 10 70, 0 55" stroke="#facc15" strokeWidth="6" strokeLinecap="round" fill="none" />
            <rect x="60" y="20" width="40" height="70" fill="#047857" stroke="#10b981" strokeWidth="1.5" /><text x="80" y="58" fill="#fff" fontSize="8" textAnchor="middle">এপিডার্মিস</text>
            <rect x="100" y="20" width="50" height="70" fill="#065f46" stroke="#10b981" strokeWidth="1.5" /><text x="125" y="58" fill="#fff" fontSize="8" textAnchor="middle">কর্টেক্স</text>
            <rect x="150" y="20" width="50" height="70" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="175" y="58" fill="#fff" fontSize="8" textAnchor="middle">জাইলেম</text>
            <line x1="10" y1="55" x2="160" y2="55" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 2" />
            <text x="100" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">মূলরোম দ্বারা কৈশিক পানি শোষণ</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদের পানি শোষণ ও পরিবহন পথ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অ্যাপোপ্লাস্টিক পথ: কোষপ্রাচীর ও আন্তঃকোষীয় ফাঁক দিয়ে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• সিমপ্লাস্টিক পথ: প্লাজমোডেসমাটা সাইটোপ্লাজমের মধ্য দিয়ে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অ্যান্ডোডার্মিসে ক্যাসপেরিয়ান স্ট্রিপ (সুবেরিন) বাধা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.২: অ্যাপোপ্লাস্ট ও সিমপ্লাস্ট শোষণ পথ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Apoplast & Symplast Pathways in Root</text>
          <g transform="translate(60, 65)">
            <path d="M 60 55 C 20 45, 10 70, 0 55" stroke="#facc15" strokeWidth="6" strokeLinecap="round" fill="none" />
            <rect x="60" y="20" width="40" height="70" fill="#047857" stroke="#10b981" strokeWidth="1.5" /><text x="80" y="58" fill="#fff" fontSize="8" textAnchor="middle">এপিডার্মিস</text>
            <rect x="100" y="20" width="50" height="70" fill="#065f46" stroke="#10b981" strokeWidth="1.5" /><text x="125" y="58" fill="#fff" fontSize="8" textAnchor="middle">কর্টেক্স</text>
            <rect x="150" y="20" width="50" height="70" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="175" y="58" fill="#fff" fontSize="8" textAnchor="middle">জাইলেম</text>
            <line x1="10" y1="55" x2="160" y2="55" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 2" />
            <text x="100" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">মূলরোম দ্বারা কৈশিক পানি শোষণ</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদের পানি শোষণ ও পরিবহন পথ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অ্যাপোপ্লাস্টিক পথ: কোষপ্রাচীর ও আন্তঃকোষীয় ফাঁক দিয়ে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• সিমপ্লাস্টিক পথ: প্লাজমোডেসমাটা সাইটোপ্লাজমের মধ্য দিয়ে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অ্যান্ডোডার্মিসে ক্যাসপেরিয়ান স্ট্রিপ (সুবেরিন) বাধা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.২: ক্যাসপেরিয়ান স্ট্রিপ ও সুবেরিন বলয় বাধা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Casparian Strip Endodermal Checkpoint</text>
          <g transform="translate(60, 65)">
            <path d="M 60 55 C 20 45, 10 70, 0 55" stroke="#facc15" strokeWidth="6" strokeLinecap="round" fill="none" />
            <rect x="60" y="20" width="40" height="70" fill="#047857" stroke="#10b981" strokeWidth="1.5" /><text x="80" y="58" fill="#fff" fontSize="8" textAnchor="middle">এপিডার্মিস</text>
            <rect x="100" y="20" width="50" height="70" fill="#065f46" stroke="#10b981" strokeWidth="1.5" /><text x="125" y="58" fill="#fff" fontSize="8" textAnchor="middle">কর্টেক্স</text>
            <rect x="150" y="20" width="50" height="70" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="175" y="58" fill="#fff" fontSize="8" textAnchor="middle">জাইলেম</text>
            <line x1="10" y1="55" x2="160" y2="55" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 2" />
            <text x="100" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">মূলরোম দ্বারা কৈশিক পানি শোষণ</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদের পানি শোষণ ও পরিবহন পথ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অ্যাপোপ্লাস্টিক পথ: কোষপ্রাচীর ও আন্তঃকোষীয় ফাঁক দিয়ে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• সিমপ্লাস্টিক পথ: প্লাজমোডেসমাটা সাইটোপ্লাজমের মধ্য দিয়ে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অ্যান্ডোডার্মিসে ক্যাসপেরিয়ান স্ট্রিপ (সুবেরিন) বাধা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.৩: জাইলেম ভেসেল ও অবিচ্ছিন্ন পানি স্তম্ভ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Xylem Vessel Column & Water Chain</text>
          <g transform="translate(60, 65)">
            <path d="M 60 55 C 20 45, 10 70, 0 55" stroke="#facc15" strokeWidth="6" strokeLinecap="round" fill="none" />
            <rect x="60" y="20" width="40" height="70" fill="#047857" stroke="#10b981" strokeWidth="1.5" /><text x="80" y="58" fill="#fff" fontSize="8" textAnchor="middle">এপিডার্মিস</text>
            <rect x="100" y="20" width="50" height="70" fill="#065f46" stroke="#10b981" strokeWidth="1.5" /><text x="125" y="58" fill="#fff" fontSize="8" textAnchor="middle">কর্টেক্স</text>
            <rect x="150" y="20" width="50" height="70" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="175" y="58" fill="#fff" fontSize="8" textAnchor="middle">জাইলেম</text>
            <line x1="10" y1="55" x2="160" y2="55" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 2" />
            <text x="100" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">মূলরোম দ্বারা কৈশিক পানি শোষণ</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদের পানি শোষণ ও পরিবহন পথ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অ্যাপোপ্লাস্টিক পথ: কোষপ্রাচীর ও আন্তঃকোষীয় ফাঁক দিয়ে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• সিমপ্লাস্টিক পথ: প্লাজমোডেসমাটা সাইটোপ্লাজমের মধ্য দিয়ে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অ্যান্ডোডার্মিসে ক্যাসপেরিয়ান স্ট্রিপ (সুবেরিন) বাধা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.৪: প্রস্বেদন টান (Transpiration Pull) ও বাষ্পমোচন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Transpiration Pull Negative Tension</text>
          <g transform="translate(70, 65)">
            <path d="M 60 20 C 40 40, 40 70, 60 90 C 80 90, 70 60, 70 55 C 70 50, 80 20, 60 20 Z" fill="#047857" stroke="#34d399" strokeWidth="2" />
            <path d="M 90 20 C 110 40, 110 70, 90 90 C 70 90, 80 60, 80 55 C 80 50, 70 20, 90 20 Z" fill="#047857" stroke="#34d399" strokeWidth="2" />
            <ellipse cx="75" cy="55" rx="5" ry="16" fill="#090d16" />
            <circle cx="55" cy="55" r="5" fill="#facc15" /><circle cx="95" cy="55" r="5" fill="#facc15" />
            <text x="75" y="108" fill="#34d399" fontSize="9" textAnchor="middle">রক্ষীকোষের স্ফীতি ও রন্ধ্র উন্মুক্ত</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">প্রস্বেদন টান ও পত্ররন্ধ্র মেকানিজম:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পত্ররন্ধ্রীয় প্রস্বেদন: মোট বাষ্পমোচনের ৯০-৯৫%</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• আলোতে K⁺ আয়ন কোষে প্রবেশে স্ফীতি ও রন্ধ্র উন্মুক্ত</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• কার্টিস: প্রস্বেদন একটি "প্রয়োজনীয় অমঙ্গল" (Necessary evil)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.৪: পত্ররন্ধ্রের রক্ষীকোষের স্ফীতি ও রন্ধ্র উন্মুক্ত</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Stomatal Guard Cell Turgor Mechanics</text>
          <g transform="translate(70, 65)">
            <path d="M 60 20 C 40 40, 40 70, 60 90 C 80 90, 70 60, 70 55 C 70 50, 80 20, 60 20 Z" fill="#047857" stroke="#34d399" strokeWidth="2" />
            <path d="M 90 20 C 110 40, 110 70, 90 90 C 70 90, 80 60, 80 55 C 80 50, 70 20, 90 20 Z" fill="#047857" stroke="#34d399" strokeWidth="2" />
            <ellipse cx="75" cy="55" rx="5" ry="16" fill="#090d16" />
            <circle cx="55" cy="55" r="5" fill="#facc15" /><circle cx="95" cy="55" r="5" fill="#facc15" />
            <text x="75" y="108" fill="#34d399" fontSize="9" textAnchor="middle">রক্ষীকোষের স্ফীতি ও রন্ধ্র উন্মুক্ত</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">প্রস্বেদন টান ও পত্ররন্ধ্র মেকানিজম:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পত্ররন্ধ্রীয় প্রস্বেদন: মোট বাষ্পমোচনের ৯০-৯৫%</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• আলোতে K⁺ আয়ন কোষে প্রবেশে স্ফীতি ও রন্ধ্র উন্মুক্ত</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• কার্টিস: প্রস্বেদন একটি "প্রয়োজনীয় অমঙ্গল" (Necessary evil)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.৪: কিউটিকুলার ও লেন্টিকুলার প্রস্বেদন ছিদ্র</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Cuticular & Lenticular Transpiration</text>
          <g transform="translate(70, 65)">
            <path d="M 60 20 C 40 40, 40 70, 60 90 C 80 90, 70 60, 70 55 C 70 50, 80 20, 60 20 Z" fill="#047857" stroke="#34d399" strokeWidth="2" />
            <path d="M 90 20 C 110 40, 110 70, 90 90 C 70 90, 80 60, 80 55 C 80 50, 70 20, 90 20 Z" fill="#047857" stroke="#34d399" strokeWidth="2" />
            <ellipse cx="75" cy="55" rx="5" ry="16" fill="#090d16" />
            <circle cx="55" cy="55" r="5" fill="#facc15" /><circle cx="95" cy="55" r="5" fill="#facc15" />
            <text x="75" y="108" fill="#34d399" fontSize="9" textAnchor="middle">রক্ষীকোষের স্ফীতি ও রন্ধ্র উন্মুক্ত</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">প্রস্বেদন টান ও পত্ররন্ধ্র মেকানিজম:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পত্ররন্ধ্রীয় প্রস্বেদন: মোট বাষ্পমোচনের ৯০-৯৫%</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• আলোতে K⁺ আয়ন কোষে প্রবেশে স্ফীতি ও রন্ধ্র উন্মুক্ত</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• কার্টিস: প্রস্বেদন একটি "প্রয়োজনীয় অমঙ্গল" (Necessary evil)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.৫: ফ্লোয়েমে খাদ্য পরিবহন ও প্রেসার-ফ্লো হাইপোথিসিস</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Phloem Translocation Source-Sink Model</text>
          <g transform="translate(70, 65)">
            <path d="M 60 20 C 40 40, 40 70, 60 90 C 80 90, 70 60, 70 55 C 70 50, 80 20, 60 20 Z" fill="#047857" stroke="#34d399" strokeWidth="2" />
            <path d="M 90 20 C 110 40, 110 70, 90 90 C 70 90, 80 60, 80 55 C 80 50, 70 20, 90 20 Z" fill="#047857" stroke="#34d399" strokeWidth="2" />
            <ellipse cx="75" cy="55" rx="5" ry="16" fill="#090d16" />
            <circle cx="55" cy="55" r="5" fill="#facc15" /><circle cx="95" cy="55" r="5" fill="#facc15" />
            <text x="75" y="108" fill="#34d399" fontSize="9" textAnchor="middle">রক্ষীকোষের স্ফীতি ও রন্ধ্র উন্মুক্ত</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">প্রস্বেদন টান ও পত্ররন্ধ্র মেকানিজম:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পত্ররন্ধ্রীয় প্রস্বেদন: মোট বাষ্পমোচনের ৯০-৯৫%</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• আলোতে K⁺ আয়ন কোষে প্রবেশে স্ফীতি ও রন্ধ্র উন্মুক্ত</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• কার্টিস: প্রস্বেদন একটি "প্রয়োজনীয় অমঙ্গল" (Necessary evil)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.৬: মানব রক্তের উপাদান — প্লাজমা ও রক্তকণিকা অনুপাত</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Blood Plasma 55% & Formed Elements 45%</text>
          <g transform="translate(60, 65)">
            <rect x="20" y="15" width="40" height="80" rx="8" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="22" y="17" width="36" height="42" fill="#fef08a" fillOpacity="0.7" /><text x="40" y="38" fill="#713f12" fontSize="7" textAnchor="middle">প্লাজমা ৫৫%</text>
            <rect x="22" y="59" width="36" height="36" fill="#ef4444" fillOpacity="0.8" /><text x="40" y="80" fill="#fff" fontSize="7" textAnchor="middle">কণিকা ৪৫%</text>
            <circle cx="120" cy="35" r="14" fill="#dc2626" /><text x="120" y="38" fill="#fff" fontSize="7" textAnchor="middle">RBC</text>
            <circle cx="120" cy="70" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="120" y="73" fill="#fff" fontSize="7" textAnchor="middle">WBC</text>
            <text x="80" y="108" fill="#f87171" fontSize="9" textAnchor="middle">রক্তের উপাদান ও অনুপাত</text>
          </g>
          <g transform="translate(290, 65)"><rect x="0" y="0" width="350" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">ABO ব্লাড গ্রুপ ও অ্যান্টিবডি রুল:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• গ্রুপ O: সার্বজনীন দাতা (Universal Donor)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• গ্রুপ AB: সার্বজনীন গ্রহীতা (Universal Recipient)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• Rh ফ্যাক্টর: পজিটিভ রক্ত নেগেটিভ গ্রহীতাকে দেয়া যাবে না</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.৬: দ্বি-অবতল লোহিত কণিকা (RBC) ও হিমোগ্লোবিন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Biconcave Erythrocyte (RBC) & Hemoglobin</text>
          <g transform="translate(60, 65)">
            <rect x="20" y="15" width="40" height="80" rx="8" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="22" y="17" width="36" height="42" fill="#fef08a" fillOpacity="0.7" /><text x="40" y="38" fill="#713f12" fontSize="7" textAnchor="middle">প্লাজমা ৫৫%</text>
            <rect x="22" y="59" width="36" height="36" fill="#ef4444" fillOpacity="0.8" /><text x="40" y="80" fill="#fff" fontSize="7" textAnchor="middle">কণিকা ৪৫%</text>
            <circle cx="120" cy="35" r="14" fill="#dc2626" /><text x="120" y="38" fill="#fff" fontSize="7" textAnchor="middle">RBC</text>
            <circle cx="120" cy="70" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="120" y="73" fill="#fff" fontSize="7" textAnchor="middle">WBC</text>
            <text x="80" y="108" fill="#f87171" fontSize="9" textAnchor="middle">রক্তের উপাদান ও অনুপাত</text>
          </g>
          <g transform="translate(290, 65)"><rect x="0" y="0" width="350" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">ABO ব্লাড গ্রুপ ও অ্যান্টিবডি রুল:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• গ্রুপ O: সার্বজনীন দাতা (Universal Donor)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• গ্রুপ AB: সার্বজনীন গ্রহীতা (Universal Recipient)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• Rh ফ্যাক্টর: পজিটিভ রক্ত নেগেটিভ গ্রহীতাকে দেয়া যাবে না</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.৬: শ্বেত রক্তকণিকা (WBC) — ফ্যাগোসাইটোসিস সৈনিক</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Leukocyte WBC Squad (Neutrophil, Lymphocyte)</text>
          <g transform="translate(60, 65)">
            <rect x="20" y="15" width="40" height="80" rx="8" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="22" y="17" width="36" height="42" fill="#fef08a" fillOpacity="0.7" /><text x="40" y="38" fill="#713f12" fontSize="7" textAnchor="middle">প্লাজমা ৫৫%</text>
            <rect x="22" y="59" width="36" height="36" fill="#ef4444" fillOpacity="0.8" /><text x="40" y="80" fill="#fff" fontSize="7" textAnchor="middle">কণিকা ৪৫%</text>
            <circle cx="120" cy="35" r="14" fill="#dc2626" /><text x="120" y="38" fill="#fff" fontSize="7" textAnchor="middle">RBC</text>
            <circle cx="120" cy="70" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="120" y="73" fill="#fff" fontSize="7" textAnchor="middle">WBC</text>
            <text x="80" y="108" fill="#f87171" fontSize="9" textAnchor="middle">রক্তের উপাদান ও অনুপাত</text>
          </g>
          <g transform="translate(290, 65)"><rect x="0" y="0" width="350" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">ABO ব্লাড গ্রুপ ও অ্যান্টিবডি রুল:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• গ্রুপ O: সার্বজনীন দাতা (Universal Donor)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• গ্রুপ AB: সার্বজনীন গ্রহীতা (Universal Recipient)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• Rh ফ্যাক্টর: পজিটিভ রক্ত নেগেটিভ গ্রহীতাকে দেয়া যাবে না</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.৬: অনুচক্রিকা (Platelet) ও রক্ত তঞ্চন ফাইব্রিন জাল</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Platelet Activation & Fibrin Clot Net</text>
          <g transform="translate(60, 65)">
            <rect x="20" y="15" width="40" height="80" rx="8" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="22" y="17" width="36" height="42" fill="#fef08a" fillOpacity="0.7" /><text x="40" y="38" fill="#713f12" fontSize="7" textAnchor="middle">প্লাজমা ৫৫%</text>
            <rect x="22" y="59" width="36" height="36" fill="#ef4444" fillOpacity="0.8" /><text x="40" y="80" fill="#fff" fontSize="7" textAnchor="middle">কণিকা ৪৫%</text>
            <circle cx="120" cy="35" r="14" fill="#dc2626" /><text x="120" y="38" fill="#fff" fontSize="7" textAnchor="middle">RBC</text>
            <circle cx="120" cy="70" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="120" y="73" fill="#fff" fontSize="7" textAnchor="middle">WBC</text>
            <text x="80" y="108" fill="#f87171" fontSize="9" textAnchor="middle">রক্তের উপাদান ও অনুপাত</text>
          </g>
          <g transform="translate(290, 65)"><rect x="0" y="0" width="350" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">ABO ব্লাড গ্রুপ ও অ্যান্টিবডি রুল:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• গ্রুপ O: সার্বজনীন দাতা (Universal Donor)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• গ্রুপ AB: সার্বজনীন গ্রহীতা (Universal Recipient)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• Rh ফ্যাক্টর: পজিটিভ রক্ত নেগেটিভ গ্রহীতাকে দেয়া যাবে না</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.৭: এবিও (ABO) রক্তের গ্রুপ ও অ্যান্টিজেন-অ্যান্টিবডি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">ABO Blood Group Antigen System</text>
          <g transform="translate(60, 65)">
            <rect x="20" y="15" width="40" height="80" rx="8" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="22" y="17" width="36" height="42" fill="#fef08a" fillOpacity="0.7" /><text x="40" y="38" fill="#713f12" fontSize="7" textAnchor="middle">প্লাজমা ৫৫%</text>
            <rect x="22" y="59" width="36" height="36" fill="#ef4444" fillOpacity="0.8" /><text x="40" y="80" fill="#fff" fontSize="7" textAnchor="middle">কণিকা ৪৫%</text>
            <circle cx="120" cy="35" r="14" fill="#dc2626" /><text x="120" y="38" fill="#fff" fontSize="7" textAnchor="middle">RBC</text>
            <circle cx="120" cy="70" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="120" y="73" fill="#fff" fontSize="7" textAnchor="middle">WBC</text>
            <text x="80" y="108" fill="#f87171" fontSize="9" textAnchor="middle">রক্তের উপাদান ও অনুপাত</text>
          </g>
          <g transform="translate(290, 65)"><rect x="0" y="0" width="350" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">ABO ব্লাড গ্রুপ ও অ্যান্টিবডি রুল:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• গ্রুপ O: সার্বজনীন দাতা (Universal Donor)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• গ্রুপ AB: সার্বজনীন গ্রহীতা (Universal Recipient)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• Rh ফ্যাক্টর: পজিটিভ রক্ত নেগেটিভ গ্রহীতাকে দেয়া যাবে না</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.৭: আরএইচ (Rh) ফ্যাক্টর ও গর্ভকালীন রক্ত সংকট</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Rh Factor & Erythroblastosis Fetalis</text>
          <g transform="translate(60, 65)">
            <rect x="20" y="15" width="40" height="80" rx="8" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
            <rect x="22" y="17" width="36" height="42" fill="#fef08a" fillOpacity="0.7" /><text x="40" y="38" fill="#713f12" fontSize="7" textAnchor="middle">প্লাজমা ৫৫%</text>
            <rect x="22" y="59" width="36" height="36" fill="#ef4444" fillOpacity="0.8" /><text x="40" y="80" fill="#fff" fontSize="7" textAnchor="middle">কণিকা ৪৫%</text>
            <circle cx="120" cy="35" r="14" fill="#dc2626" /><text x="120" y="38" fill="#fff" fontSize="7" textAnchor="middle">RBC</text>
            <circle cx="120" cy="70" r="16" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" /><text x="120" y="73" fill="#fff" fontSize="7" textAnchor="middle">WBC</text>
            <text x="80" y="108" fill="#f87171" fontSize="9" textAnchor="middle">রক্তের উপাদান ও অনুপাত</text>
          </g>
          <g transform="translate(290, 65)"><rect x="0" y="0" width="350" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">ABO ব্লাড গ্রুপ ও অ্যান্টিবডি রুল:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• গ্রুপ O: সার্বজনীন দাতা (Universal Donor)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• গ্রুপ AB: সার্বজনীন গ্রহীতা (Universal Recipient)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• Rh ফ্যাক্টর: পজিটিভ রক্ত নেগেটিভ গ্রহীতাকে দেয়া যাবে না</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.৮: মানব হৃদপিণ্ডের ৪টি প্রকোষ্ঠ ও প্রাচীর</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Human Heart 4 Chambers & Myocardium</text>
          <g transform="translate(60, 65)">
            <rect x="20" y="15" width="60" height="40" rx="6" fill="#0284c7" /><text x="50" y="38" fill="#fff" fontSize="8" textAnchor="middle">ডান অলিন্দ (RA)</text>
            <rect x="85" y="15" width="60" height="40" rx="6" fill="#dc2626" /><text x="115" y="38" fill="#fff" fontSize="8" textAnchor="middle">বাম অলিন্দ (LA)</text>
            <rect x="20" y="60" width="60" height="45" rx="6" fill="#0369a1" /><text x="50" y="85" fill="#fff" fontSize="8" textAnchor="middle">ডান নিলয় (RV)</text>
            <rect x="85" y="60" width="60" height="45" rx="6" fill="#991b1b" /><text x="115" y="85" fill="#fff" fontSize="8" textAnchor="middle">বাম নিলয় (LV)</text>
            <text x="82" y="118" fill="#f43f5e" fontSize="9" textAnchor="middle">হৃদপিণ্ডের ৪টি প্রকোষ্ঠ ও কপাটিকা</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">কার্ডিয়াক চক্র ও কপাটিকা নিয়ন্ত্রণ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ট্রাইকাস্পিড কপাটিকা: ডান অলিন্দ ও ডান নিলয়ের মাঝে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বাইকাস্পিড (মাইটাস): বাম অলিন্দ ও বাম নিলয়ের মাঝে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মানুষের স্বাভাবিক হৃৎস্পন্দন: ৭২ বার/মিনিট (চক্র ০.৮ সেকেন্ড)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.৮: হৃদপিণ্ডের কপাটিকা — ট্রাইকাস্পিড ও বাইকাস্পিড</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Heart Valves & Chordae Tendineae</text>
          <g transform="translate(60, 65)">
            <rect x="20" y="15" width="60" height="40" rx="6" fill="#0284c7" /><text x="50" y="38" fill="#fff" fontSize="8" textAnchor="middle">ডান অলিন্দ (RA)</text>
            <rect x="85" y="15" width="60" height="40" rx="6" fill="#dc2626" /><text x="115" y="38" fill="#fff" fontSize="8" textAnchor="middle">বাম অলিন্দ (LA)</text>
            <rect x="20" y="60" width="60" height="45" rx="6" fill="#0369a1" /><text x="50" y="85" fill="#fff" fontSize="8" textAnchor="middle">ডান নিলয় (RV)</text>
            <rect x="85" y="60" width="60" height="45" rx="6" fill="#991b1b" /><text x="115" y="85" fill="#fff" fontSize="8" textAnchor="middle">বাম নিলয় (LV)</text>
            <text x="82" y="118" fill="#f43f5e" fontSize="9" textAnchor="middle">হৃদপিণ্ডের ৪টি প্রকোষ্ঠ ও কপাটিকা</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">কার্ডিয়াক চক্র ও কপাটিকা নিয়ন্ত্রণ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ট্রাইকাস্পিড কপাটিকা: ডান অলিন্দ ও ডান নিলয়ের মাঝে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বাইকাস্পিড (মাইটাস): বাম অলিন্দ ও বাম নিলয়ের মাঝে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মানুষের স্বাভাবিক হৃৎস্পন্দন: ৭২ বার/মিনিট (চক্র ০.৮ সেকেন্ড)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.৮: কার্ডিয়াক চক্র — সিস্টোল ও ডায়াস্টোল স্পন্দন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Cardiac Cycle Systole & Diastole</text>
          <g transform="translate(60, 65)">
            <rect x="20" y="15" width="60" height="40" rx="6" fill="#0284c7" /><text x="50" y="38" fill="#fff" fontSize="8" textAnchor="middle">ডান অলিন্দ (RA)</text>
            <rect x="85" y="15" width="60" height="40" rx="6" fill="#dc2626" /><text x="115" y="38" fill="#fff" fontSize="8" textAnchor="middle">বাম অলিন্দ (LA)</text>
            <rect x="20" y="60" width="60" height="45" rx="6" fill="#0369a1" /><text x="50" y="85" fill="#fff" fontSize="8" textAnchor="middle">ডান নিলয় (RV)</text>
            <rect x="85" y="60" width="60" height="45" rx="6" fill="#991b1b" /><text x="115" y="85" fill="#fff" fontSize="8" textAnchor="middle">বাম নিলয় (LV)</text>
            <text x="82" y="118" fill="#f43f5e" fontSize="9" textAnchor="middle">হৃদপিণ্ডের ৪টি প্রকোষ্ঠ ও কপাটিকা</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">কার্ডিয়াক চক্র ও কপাটিকা নিয়ন্ত্রণ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ট্রাইকাস্পিড কপাটিকা: ডান অলিন্দ ও ডান নিলয়ের মাঝে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বাইকাস্পিড (মাইটাস): বাম অলিন্দ ও বাম নিলয়ের মাঝে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মানুষের স্বাভাবিক হৃৎস্পন্দন: ৭২ বার/মিনিট (চক্র ০.৮ সেকেন্ড)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.৯: ধমনী, শিরা ও রক্ত কৈশিক জালিকার প্রস্থচ্ছেদ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Artery, Vein & Capillary Network Layers</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="55" r="30" fill="#dc2626" fillOpacity="0.4" stroke="#ef4444" strokeWidth="6" />
            <circle cx="50" cy="55" r="16" fill="#090d16" />
            <circle cx="130" cy="55" r="30" fill="#0284c7" fillOpacity="0.4" stroke="#0ea5e9" strokeWidth="3" />
            <circle cx="130" cy="55" r="22" fill="#090d16" />
            <text x="50" y="100" fill="#ef4444" fontSize="8" textAnchor="middle">ধমনী (পুরু প্রাচীর)</text>
            <text x="130" y="100" fill="#0ea5e9" fontSize="8" textAnchor="middle">শিরা (কপাটিকাসহ)</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">ধমনী বনাম শিরা ও রক্তচাপ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• আদর্শ রক্তচাপ: সিস্টোলিক ১২০ / ডায়াস্টোলিক ৮০ mmHg</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ধমনীতে রক্তচাপ বেশি, লুমেন ছোট, কপাটিকা নেই</text>
          <text x="15" y="86" fill="#f87171" fontSize="10">• করোনারি ব্লকেজে এনজিওপ্লাস্টির মাধ্যমে রিং (স্টেন্ট) স্থাপন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৬.১০: করোনারি ধমনী ব্লক, এনজিওপ্লাস্টি ও স্টেন্ট</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Coronary Plaque, Angioplasty & Stent</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="55" r="30" fill="#dc2626" fillOpacity="0.4" stroke="#ef4444" strokeWidth="6" />
            <circle cx="50" cy="55" r="16" fill="#090d16" />
            <circle cx="130" cy="55" r="30" fill="#0284c7" fillOpacity="0.4" stroke="#0ea5e9" strokeWidth="3" />
            <circle cx="130" cy="55" r="22" fill="#090d16" />
            <text x="50" y="100" fill="#ef4444" fontSize="8" textAnchor="middle">ধমনী (পুরু প্রাচীর)</text>
            <text x="130" y="100" fill="#0ea5e9" fontSize="8" textAnchor="middle">শিরা (কপাটিকাসহ)</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">ধমনী বনাম শিরা ও রক্তচাপ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• আদর্শ রক্তচাপ: সিস্টোলিক ১২০ / ডায়াস্টোলিক ৮০ mmHg</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ধমনীতে রক্তচাপ বেশি, লুমেন ছোট, কপাটিকা নেই</text>
          <text x="15" y="86" fill="#f87171" fontSize="10">• করোনারি ব্লকেজে এনজিওপ্লাস্টির মাধ্যমে রিং (স্টেন্ট) স্থাপন</text></g>
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
  // CHAPTER 7
  // ========================================================
  if (chNum === 7) {
    if (id === 1) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.১: পত্ররন্ধ্র দিয়ে উদ্ভিদের দিনে ও রাতে গ্যাস বিনিময়</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Stomatal Day/Night O2 & CO2 Exchange</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="55" rx="35" ry="45" fill="#047857" stroke="#34d399" strokeWidth="2" />
            <ellipse cx="60" cy="55" rx="8" ry="25" fill="#090d16" />
            <line x1="120" y1="40" x2="75" y2="50" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <line x1="75" y1="60" x2="120" y2="70" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <text x="145" y="44" fill="#38bdf8" fontSize="9">CO₂ (দিনে গ্রহণ)</text>
            <text x="145" y="74" fill="#f43f5e" fontSize="9">O₂ (দিনে ত্যাগ)</text>
            <text x="60" y="112" fill="#34d399" fontSize="9" textAnchor="middle">পত্ররন্ধ্রে গ্যাস বিনিময়</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদের দিনে ও রাতে গ্যাস বিনিময়:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• দিনে: সালোকসংশ্লেষণ শ্বসনের চেয়ে বহুগুণ বেশি ঘটে (O₂ ত্যাগ)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• রাতে: সালোকসংশ্লেষণ বন্ধ থাকে, শুধু শ্বসন চালু থাকে (CO₂ ত্যাগ)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• কাণ্ডের লেন্টিসেল দিয়ে গৌণ গ্যাস আদান-প্রদান হয়</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.১: কাণ্ডের লেন্টিসেল দিয়ে গ্যাসীয় বিনিময় পথ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Lenticel Aerating Pores on Tree Trunk</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="55" rx="35" ry="45" fill="#047857" stroke="#34d399" strokeWidth="2" />
            <ellipse cx="60" cy="55" rx="8" ry="25" fill="#090d16" />
            <line x1="120" y1="40" x2="75" y2="50" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <line x1="75" y1="60" x2="120" y2="70" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <text x="145" y="44" fill="#38bdf8" fontSize="9">CO₂ (দিনে গ্রহণ)</text>
            <text x="145" y="74" fill="#f43f5e" fontSize="9">O₂ (দিনে ত্যাগ)</text>
            <text x="60" y="112" fill="#34d399" fontSize="9" textAnchor="middle">পত্ররন্ধ্রে গ্যাস বিনিময়</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদের দিনে ও রাতে গ্যাস বিনিময়:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• দিনে: সালোকসংশ্লেষণ শ্বসনের চেয়ে বহুগুণ বেশি ঘটে (O₂ ত্যাগ)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• রাতে: সালোকসংশ্লেষণ বন্ধ থাকে, শুধু শ্বসন চালু থাকে (CO₂ ত্যাগ)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• কাণ্ডের লেন্টিসেল দিয়ে গৌণ গ্যাস আদান-প্রদান হয়</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.২: মানব শ্বসনতন্ত্রের সামগ্রিক ৩ডি রূপরেখা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Complete Human Respiratory Tract</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="55" rx="35" ry="45" fill="#047857" stroke="#34d399" strokeWidth="2" />
            <ellipse cx="60" cy="55" rx="8" ry="25" fill="#090d16" />
            <line x1="120" y1="40" x2="75" y2="50" stroke="#38bdf8" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <line x1="75" y1="60" x2="120" y2="70" stroke="#f43f5e" strokeWidth="2.5" markerEnd="url(#arrow)" />
            <text x="145" y="44" fill="#38bdf8" fontSize="9">CO₂ (দিনে গ্রহণ)</text>
            <text x="145" y="74" fill="#f43f5e" fontSize="9">O₂ (দিনে ত্যাগ)</text>
            <text x="60" y="112" fill="#34d399" fontSize="9" textAnchor="middle">পত্ররন্ধ্রে গ্যাস বিনিময়</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদের দিনে ও রাতে গ্যাস বিনিময়:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• দিনে: সালোকসংশ্লেষণ শ্বসনের চেয়ে বহুগুণ বেশি ঘটে (O₂ ত্যাগ)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• রাতে: সালোকসংশ্লেষণ বন্ধ থাকে, শুধু শ্বসন চালু থাকে (CO₂ ত্যাগ)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• কাণ্ডের লেন্টিসেল দিয়ে গৌণ গ্যাস আদান-প্রদান হয়</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.২: নাসাগহ্বর ও সিলিয়াযুক্ত মিউকোসা পর্দা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Nasal Cavity Ciliated Mucosa Barrier</text>
          <g transform="translate(60, 65)">
            <line x1="80" y1="15" x2="80" y2="45" stroke="#38bdf8" strokeWidth="6" />
            <line x1="80" y1="45" x2="45" y2="70" stroke="#38bdf8" strokeWidth="4" />
            <line x1="80" y1="45" x2="115" y2="70" stroke="#38bdf8" strokeWidth="4" />
            <circle cx="35" cy="80" r="18" fill="#e11d48" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <circle cx="125" cy="80" r="18" fill="#e11d48" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <text x="80" y="112" fill="#f43f5e" fontSize="9" textAnchor="middle">শ্বাসনালি, ফুসফুস ও অ্যালভিওলাস</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মানব শ্বসনতন্ত্র ও ফুসফুসের রূপরেখা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ডান ফুসফুস ৩টি লোব ও বাম ফুসফুস ২টি লোব বিশিষ্ট</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ট্রাকিয়া ১৬-২০টি তরুণাস্থি বলয় নির্মিত</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ফুসফুসে প্রায় ৭০ কোটি অ্যালভিওলাই ও সারফ্যাকট্যান্ট স্তর</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.২: স্বরযন্ত্র (Larynx), ভোকাল কর্ড ও এপিগ্লোটিস</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Larynx, Vocal Cords & Epiglottis Gate</text>
          <g transform="translate(60, 65)">
            <line x1="80" y1="15" x2="80" y2="45" stroke="#38bdf8" strokeWidth="6" />
            <line x1="80" y1="45" x2="45" y2="70" stroke="#38bdf8" strokeWidth="4" />
            <line x1="80" y1="45" x2="115" y2="70" stroke="#38bdf8" strokeWidth="4" />
            <circle cx="35" cy="80" r="18" fill="#e11d48" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <circle cx="125" cy="80" r="18" fill="#e11d48" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <text x="80" y="112" fill="#f43f5e" fontSize="9" textAnchor="middle">শ্বাসনালি, ফুসফুস ও অ্যালভিওলাস</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মানব শ্বসনতন্ত্র ও ফুসফুসের রূপরেখা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ডান ফুসফুস ৩টি লোব ও বাম ফুসফুস ২টি লোব বিশিষ্ট</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ট্রাকিয়া ১৬-২০টি তরুণাস্থি বলয় নির্মিত</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ফুসফুসে প্রায় ৭০ কোটি অ্যালভিওলাই ও সারফ্যাকট্যান্ট স্তর</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.২: ট্রাকিয়ার সি-আকৃতির তরুণাস্থি রিং ও নালী</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Trachea C-Shaped Cartilage Rings</text>
          <g transform="translate(60, 65)">
            <line x1="80" y1="15" x2="80" y2="45" stroke="#38bdf8" strokeWidth="6" />
            <line x1="80" y1="45" x2="45" y2="70" stroke="#38bdf8" strokeWidth="4" />
            <line x1="80" y1="45" x2="115" y2="70" stroke="#38bdf8" strokeWidth="4" />
            <circle cx="35" cy="80" r="18" fill="#e11d48" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <circle cx="125" cy="80" r="18" fill="#e11d48" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <text x="80" y="112" fill="#f43f5e" fontSize="9" textAnchor="middle">শ্বাসনালি, ফুসফুস ও অ্যালভিওলাস</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মানব শ্বসনতন্ত্র ও ফুসফুসের রূপরেখা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ডান ফুসফুস ৩টি লোব ও বাম ফুসফুস ২টি লোব বিশিষ্ট</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ট্রাকিয়া ১৬-২০টি তরুণাস্থি বলয় নির্মিত</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ফুসফুসে প্রায় ৭০ কোটি অ্যালভিওলাই ও সারফ্যাকট্যান্ট স্তর</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.২: ব্রঙ্কিয়াল ট্রি — প্রাইমারি ব্রঙ্কাস ও ব্রঙ্কিওল</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Bronchial Branching Tree System</text>
          <g transform="translate(60, 65)">
            <line x1="80" y1="15" x2="80" y2="45" stroke="#38bdf8" strokeWidth="6" />
            <line x1="80" y1="45" x2="45" y2="70" stroke="#38bdf8" strokeWidth="4" />
            <line x1="80" y1="45" x2="115" y2="70" stroke="#38bdf8" strokeWidth="4" />
            <circle cx="35" cy="80" r="18" fill="#e11d48" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <circle cx="125" cy="80" r="18" fill="#e11d48" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <text x="80" y="112" fill="#f43f5e" fontSize="9" textAnchor="middle">শ্বাসনালি, ফুসফুস ও অ্যালভিওলাস</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মানব শ্বসনতন্ত্র ও ফুসফুসের রূপরেখা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ডান ফুসফুস ৩টি লোব ও বাম ফুসফুস ২টি লোব বিশিষ্ট</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ট্রাকিয়া ১৬-২০টি তরুণাস্থি বলয় নির্মিত</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ফুসফুসে প্রায় ৭০ কোটি অ্যালভিওলাই ও সারফ্যাকট্যান্ট স্তর</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.৩: মানব ফুসফুস ও দ্বিস্তরী প্লুরা ঝিল্লি গহ্বর</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Human Lungs & Pleural Cavity Fluid</text>
          <g transform="translate(60, 65)">
            <line x1="80" y1="15" x2="80" y2="45" stroke="#38bdf8" strokeWidth="6" />
            <line x1="80" y1="45" x2="45" y2="70" stroke="#38bdf8" strokeWidth="4" />
            <line x1="80" y1="45" x2="115" y2="70" stroke="#38bdf8" strokeWidth="4" />
            <circle cx="35" cy="80" r="18" fill="#e11d48" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <circle cx="125" cy="80" r="18" fill="#e11d48" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <text x="80" y="112" fill="#f43f5e" fontSize="9" textAnchor="middle">শ্বাসনালি, ফুসফুস ও অ্যালভিওলাস</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মানব শ্বসনতন্ত্র ও ফুসফুসের রূপরেখা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ডান ফুসফুস ৩টি লোব ও বাম ফুসফুস ২টি লোব বিশিষ্ট</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ট্রাকিয়া ১৬-২০টি তরুণাস্থি বলয় নির্মিত</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ফুসফুসে প্রায় ৭০ কোটি অ্যালভিওলাই ও সারফ্যাকট্যান্ট স্তর</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.৩: ডায়াফ্রাম পেশি ও বক্ষপিঞ্জরের উঠানামা চলন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Diaphragm & Intercostal Muscle Action</text>
          <g transform="translate(60, 65)">
            <line x1="80" y1="15" x2="80" y2="45" stroke="#38bdf8" strokeWidth="6" />
            <line x1="80" y1="45" x2="45" y2="70" stroke="#38bdf8" strokeWidth="4" />
            <line x1="80" y1="45" x2="115" y2="70" stroke="#38bdf8" strokeWidth="4" />
            <circle cx="35" cy="80" r="18" fill="#e11d48" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <circle cx="125" cy="80" r="18" fill="#e11d48" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2" />
            <text x="80" y="112" fill="#f43f5e" fontSize="9" textAnchor="middle">শ্বাসনালি, ফুসফুস ও অ্যালভিওলাস</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মানব শ্বসনতন্ত্র ও ফুসফুসের রূপরেখা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ডান ফুসফুস ৩টি লোব ও বাম ফুসফুস ২টি লোব বিশিষ্ট</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ট্রাকিয়া ১৬-২০টি তরুণাস্থি বলয় নির্মিত</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ফুসফুসে প্রায় ৭০ কোটি অ্যালভিওলাই ও সারফ্যাকট্যান্ট স্তর</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.৩: প্রশ্বাস-নিঃশ্বাস প্রক্রিয়ার বায়ুর চাপ মেকানিক্স</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Inspiration & Expiration Mechanics</text>
          <g transform="translate(60, 65)">
            <ellipse cx="60" cy="55" rx="40" ry="25" fill="#dc2626" stroke="#f87171" strokeWidth="2" /><text x="60" y="58" fill="#fff" fontSize="8" textAnchor="middle">Hb + 4O₂</text>
            <line x1="105" y1="55" x2="155" y2="55" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <ellipse cx="195" cy="55" rx="35" ry="25" fill="#be123c" stroke="#fda4af" strokeWidth="2" /><text x="195" y="58" fill="#fff" fontSize="7" textAnchor="middle">Hb(O₂)₄ অক্সি</text>
            <text x="125" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">ক্লোরাইড শিফট ও বাইকার্বনেট পরিবহন</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">গ্যাসীয় পরিবহন ও ক্লোরাইড শিফট:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অক্সিজেন পরিবহন: ৯৮% অক্সিহিমোগ্লোবিন, ২% ভৌত দ্রবণ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• কার্বন ডাই-অক্সাইড: ৬৫% বাইকার্বনেট (HCO₃⁻) আয়নরূপে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• হ্যামবার্গার মেকানিজম: প্লাজমা থেকে Cl⁻ কোষে প্রবেশ</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.৪: অ্যালভিওলাই গুচ্ছ ও সারফ্যাক্ট্যান্ট ঝিল্লি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Alveolar Sac Cluster & Surfactant</text>
          <g transform="translate(60, 65)">
            <ellipse cx="60" cy="55" rx="40" ry="25" fill="#dc2626" stroke="#f87171" strokeWidth="2" /><text x="60" y="58" fill="#fff" fontSize="8" textAnchor="middle">Hb + 4O₂</text>
            <line x1="105" y1="55" x2="155" y2="55" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <ellipse cx="195" cy="55" rx="35" ry="25" fill="#be123c" stroke="#fda4af" strokeWidth="2" /><text x="195" y="58" fill="#fff" fontSize="7" textAnchor="middle">Hb(O₂)₄ অক্সি</text>
            <text x="125" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">ক্লোরাইড শিফট ও বাইকার্বনেট পরিবহন</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">গ্যাসীয় পরিবহন ও ক্লোরাইড শিফট:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অক্সিজেন পরিবহন: ৯৮% অক্সিহিমোগ্লোবিন, ২% ভৌত দ্রবণ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• কার্বন ডাই-অক্সাইড: ৬৫% বাইকার্বনেট (HCO₃⁻) আয়নরূপে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• হ্যামবার্গার মেকানিজম: প্লাজমা থেকে Cl⁻ কোষে প্রবেশ</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.৪: অ্যালভিওলার রক্ত কৈশিক জালিকা ও রক্তপ্রবাহ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Pulmonary Alveolar Capillary Bed</text>
          <g transform="translate(60, 65)">
            <ellipse cx="60" cy="55" rx="40" ry="25" fill="#dc2626" stroke="#f87171" strokeWidth="2" /><text x="60" y="58" fill="#fff" fontSize="8" textAnchor="middle">Hb + 4O₂</text>
            <line x1="105" y1="55" x2="155" y2="55" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <ellipse cx="195" cy="55" rx="35" ry="25" fill="#be123c" stroke="#fda4af" strokeWidth="2" /><text x="195" y="58" fill="#fff" fontSize="7" textAnchor="middle">Hb(O₂)₄ অক্সি</text>
            <text x="125" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">ক্লোরাইড শিফট ও বাইকার্বনেট পরিবহন</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">গ্যাসীয় পরিবহন ও ক্লোরাইড শিফট:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অক্সিজেন পরিবহন: ৯৮% অক্সিহিমোগ্লোবিন, ২% ভৌত দ্রবণ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• কার্বন ডাই-অক্সাইড: ৬৫% বাইকার্বনেট (HCO₃⁻) আয়নরূপে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• হ্যামবার্গার মেকানিজম: প্লাজমা থেকে Cl⁻ কোষে প্রবেশ</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.৪: O2 ও CO2 গ্যাসীয় ব্যাপন ঝিল্লি ইন্টারফেস</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Gas Diffusion Respiratory Interface</text>
          <g transform="translate(60, 65)">
            <ellipse cx="60" cy="55" rx="40" ry="25" fill="#dc2626" stroke="#f87171" strokeWidth="2" /><text x="60" y="58" fill="#fff" fontSize="8" textAnchor="middle">Hb + 4O₂</text>
            <line x1="105" y1="55" x2="155" y2="55" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <ellipse cx="195" cy="55" rx="35" ry="25" fill="#be123c" stroke="#fda4af" strokeWidth="2" /><text x="195" y="58" fill="#fff" fontSize="7" textAnchor="middle">Hb(O₂)₄ অক্সি</text>
            <text x="125" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">ক্লোরাইড শিফট ও বাইকার্বনেট পরিবহন</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">গ্যাসীয় পরিবহন ও ক্লোরাইড শিফট:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অক্সিজেন পরিবহন: ৯৮% অক্সিহিমোগ্লোবিন, ২% ভৌত দ্রবণ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• কার্বন ডাই-অক্সাইড: ৬৫% বাইকার্বনেট (HCO₃⁻) আয়নরূপে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• হ্যামবার্গার মেকানিজম: প্লাজমা থেকে Cl⁻ কোষে প্রবেশ</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.৫: অক্সিহিমোগ্লোবিন যৌগ গঠন ও O2 পরিবহন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Oxyhemoglobin Complex O2 Transport</text>
          <g transform="translate(60, 65)">
            <ellipse cx="60" cy="55" rx="40" ry="25" fill="#dc2626" stroke="#f87171" strokeWidth="2" /><text x="60" y="58" fill="#fff" fontSize="8" textAnchor="middle">Hb + 4O₂</text>
            <line x1="105" y1="55" x2="155" y2="55" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <ellipse cx="195" cy="55" rx="35" ry="25" fill="#be123c" stroke="#fda4af" strokeWidth="2" /><text x="195" y="58" fill="#fff" fontSize="7" textAnchor="middle">Hb(O₂)₄ অক্সি</text>
            <text x="125" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">ক্লোরাইড শিফট ও বাইকার্বনেট পরিবহন</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">গ্যাসীয় পরিবহন ও ক্লোরাইড শিফট:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অক্সিজেন পরিবহন: ৯৮% অক্সিহিমোগ্লোবিন, ২% ভৌত দ্রবণ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• কার্বন ডাই-অক্সাইড: ৬৫% বাইকার্বনেট (HCO₃⁻) আয়নরূপে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• হ্যামবার্গার মেকানিজম: প্লাজমা থেকে Cl⁻ কোষে প্রবেশ</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.৫: রক্তে CO2 পরিবহন — বাইকার্বনেট ও কার্বামিনো</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Carbon Dioxide Bicarbonate Ion (HCO3-)</text>
          <g transform="translate(60, 65)">
            <ellipse cx="60" cy="55" rx="40" ry="25" fill="#dc2626" stroke="#f87171" strokeWidth="2" /><text x="60" y="58" fill="#fff" fontSize="8" textAnchor="middle">Hb + 4O₂</text>
            <line x1="105" y1="55" x2="155" y2="55" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <ellipse cx="195" cy="55" rx="35" ry="25" fill="#be123c" stroke="#fda4af" strokeWidth="2" /><text x="195" y="58" fill="#fff" fontSize="7" textAnchor="middle">Hb(O₂)₄ অক্সি</text>
            <text x="125" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">ক্লোরাইড শিফট ও বাইকার্বনেট পরিবহন</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">গ্যাসীয় পরিবহন ও ক্লোরাইড শিফট:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অক্সিজেন পরিবহন: ৯৮% অক্সিহিমোগ্লোবিন, ২% ভৌত দ্রবণ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• কার্বন ডাই-অক্সাইড: ৬৫% বাইকার্বনেট (HCO₃⁻) আয়নরূপে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• হ্যামবার্গার মেকানিজম: প্লাজমা থেকে Cl⁻ কোষে প্রবেশ</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.৫: ক্লোরাইড শিফট বা হ্যামবার্গার মেকানিজম</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Chloride Shift (Hamburger Phenomenon)</text>
          <g transform="translate(60, 65)">
            <ellipse cx="60" cy="55" rx="40" ry="25" fill="#dc2626" stroke="#f87171" strokeWidth="2" /><text x="60" y="58" fill="#fff" fontSize="8" textAnchor="middle">Hb + 4O₂</text>
            <line x1="105" y1="55" x2="155" y2="55" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <ellipse cx="195" cy="55" rx="35" ry="25" fill="#be123c" stroke="#fda4af" strokeWidth="2" /><text x="195" y="58" fill="#fff" fontSize="7" textAnchor="middle">Hb(O₂)₄ অক্সি</text>
            <text x="125" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">ক্লোরাইড শিফট ও বাইকার্বনেট পরিবহন</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">গ্যাসীয় পরিবহন ও ক্লোরাইড শিফট:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অক্সিজেন পরিবহন: ৯৮% অক্সিহিমোগ্লোবিন, ২% ভৌত দ্রবণ</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• কার্বন ডাই-অক্সাইড: ৬৫% বাইকার্বনেট (HCO₃⁻) আয়নরূপে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• হ্যামবার্গার মেকানিজম: প্লাজমা থেকে Cl⁻ কোষে প্রবেশ</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.৬: ব্রঙ্কাইটিস — ব্রঙ্কাসের শ্লেষ্মা প্রদাহ ও কফ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Bronchitis Mucosal Inflammation & Phlegm</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="28" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" /><text x="50" y="53" fill="#fff" fontSize="8" textAnchor="middle">ব্রঙ্কাইটিস</text>
            <circle cx="120" cy="50" r="28" fill="#713f12" stroke="#eab308" strokeWidth="2" /><text x="120" y="53" fill="#fff" fontSize="8" textAnchor="middle">যক্ষ্মা</text>
            <text x="85" y="105" fill="#ef4444" fontSize="9" textAnchor="middle">শ্বসনতন্ত্রের সংক্রমণ ও ক্ষত</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">শ্বসনতন্ত্রের প্রধান ব্যাধিসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• হাঁপানি (Asthma): অ্যালার্জেন ও ব্রঙ্কিওলের পেশি সংকোচন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• নিউমোনিয়া: স্ট্রেপ্টোকক্কাস নিউমোনি দ্বারা ফুসফুসে তরল জমা</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• যক্ষ্মা: মাইকোব্যাকটেরিয়াম টিউবারকিউলোসিস (BCG টিকা প্রতিরোধক)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.৬: নিউমোনিয়া — অ্যালভিওলাইতে কফ ও পুঁজ জমা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Pneumonia Alveolar Fluid Consolidation</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="28" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" /><text x="50" y="53" fill="#fff" fontSize="8" textAnchor="middle">ব্রঙ্কাইটিস</text>
            <circle cx="120" cy="50" r="28" fill="#713f12" stroke="#eab308" strokeWidth="2" /><text x="120" y="53" fill="#fff" fontSize="8" textAnchor="middle">যক্ষ্মা</text>
            <text x="85" y="105" fill="#ef4444" fontSize="9" textAnchor="middle">শ্বসনতন্ত্রের সংক্রমণ ও ক্ষত</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">শ্বসনতন্ত্রের প্রধান ব্যাধিসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• হাঁপানি (Asthma): অ্যালার্জেন ও ব্রঙ্কিওলের পেশি সংকোচন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• নিউমোনিয়া: স্ট্রেপ্টোকক্কাস নিউমোনি দ্বারা ফুসফুসে তরল জমা</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• যক্ষ্মা: মাইকোব্যাকটেরিয়াম টিউবারকিউলোসিস (BCG টিকা প্রতিরোধক)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.৬: ফুসফুসের যক্ষ্মা ও টিউবারকল গহ্বর ক্ষত</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Pulmonary Tuberculosis Tubercle Cavity</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="28" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" /><text x="50" y="53" fill="#fff" fontSize="8" textAnchor="middle">ব্রঙ্কাইটিস</text>
            <circle cx="120" cy="50" r="28" fill="#713f12" stroke="#eab308" strokeWidth="2" /><text x="120" y="53" fill="#fff" fontSize="8" textAnchor="middle">যক্ষ্মা</text>
            <text x="85" y="105" fill="#ef4444" fontSize="9" textAnchor="middle">শ্বসনতন্ত্রের সংক্রমণ ও ক্ষত</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">শ্বসনতন্ত্রের প্রধান ব্যাধিসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• হাঁপানি (Asthma): অ্যালার্জেন ও ব্রঙ্কিওলের পেশি সংকোচন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• নিউমোনিয়া: স্ট্রেপ্টোকক্কাস নিউমোনি দ্বারা ফুসফুসে তরল জমা</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• যক্ষ্মা: মাইকোব্যাকটেরিয়াম টিউবারকিউলোসিস (BCG টিকা প্রতিরোধক)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৭.৬: ফুসফুসের ক্যান্সার ও টার জমা অ্যালভিওলাই</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Lung Carcinoma & Cigarette Tar Tumor</text>
          <g transform="translate(60, 65)">
            <circle cx="50" cy="50" r="28" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" /><text x="50" y="53" fill="#fff" fontSize="8" textAnchor="middle">ব্রঙ্কাইটিস</text>
            <circle cx="120" cy="50" r="28" fill="#713f12" stroke="#eab308" strokeWidth="2" /><text x="120" y="53" fill="#fff" fontSize="8" textAnchor="middle">যক্ষ্মা</text>
            <text x="85" y="105" fill="#ef4444" fontSize="9" textAnchor="middle">শ্বসনতন্ত্রের সংক্রমণ ও ক্ষত</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">শ্বসনতন্ত্রের প্রধান ব্যাধিসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• হাঁপানি (Asthma): অ্যালার্জেন ও ব্রঙ্কিওলের পেশি সংকোচন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• নিউমোনিয়া: স্ট্রেপ্টোকক্কাস নিউমোনি দ্বারা ফুসফুসে তরল জমা</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• যক্ষ্মা: মাইকোব্যাকটেরিয়াম টিউবারকিউলোসিস (BCG টিকা প্রতিরোধক)</text></g>
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
  // CHAPTER 8
  // ========================================================
  if (chNum === 8) {
    if (id === 1) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.১: রেচনের ধারণা ও নাইট্রোজেনঘটিত বর্জ্য (ইউরিয়া)</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Excretion Concept & Urea Chemistry</text>
          <g transform="translate(70, 65)">
            <path d="M 50 20 C 20 20, 20 70, 50 80 C 65 75, 65 25, 50 20 Z" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
            <path d="M 110 20 C 140 20, 140 70, 110 80 C 95 75, 95 25, 110 20 Z" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
            <line x1="50" y1="75" x2="70" y2="105" stroke="#eab308" strokeWidth="2.5" />
            <line x1="110" y1="75" x2="90" y2="105" stroke="#eab308" strokeWidth="2.5" />
            <ellipse cx="80" cy="115" rx="15" ry="10" fill="#ca8a04" stroke="#facc15" strokeWidth="1.5" />
            <text x="80" y="138" fill="#facc15" fontSize="8" textAnchor="middle">মূত্রথলি ও ইউরেটার</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">মানব রেচনতন্ত্র ও নাইট্রোজেন বর্জ্য:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ইউরিয়া: যকৃতে অর্নিথিন চক্রে অ্যামোনিয়া থেকে সংশ্লেষিত</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বৃক্কের অবস্থান: উদরগহ্বরের পেছনের প্রাচীরে পেরিটোনিয়ামে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মূত্র নিষ্কাশন পথ: বৃক্ক → ইউরেটার → মূত্রথলি → মূত্রনালি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.২: মানব রেচনতন্ত্রের সামগ্রিক ৩ডি রূপরেখা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Human Excretory Urinary System 3D</text>
          <g transform="translate(70, 65)">
            <path d="M 50 20 C 20 20, 20 70, 50 80 C 65 75, 65 25, 50 20 Z" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
            <path d="M 110 20 C 140 20, 140 70, 110 80 C 95 75, 95 25, 110 20 Z" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
            <line x1="50" y1="75" x2="70" y2="105" stroke="#eab308" strokeWidth="2.5" />
            <line x1="110" y1="75" x2="90" y2="105" stroke="#eab308" strokeWidth="2.5" />
            <ellipse cx="80" cy="115" rx="15" ry="10" fill="#ca8a04" stroke="#facc15" strokeWidth="1.5" />
            <text x="80" y="138" fill="#facc15" fontSize="8" textAnchor="middle">মূত্রথলি ও ইউরেটার</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">মানব রেচনতন্ত্র ও নাইট্রোজেন বর্জ্য:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ইউরিয়া: যকৃতে অর্নিথিন চক্রে অ্যামোনিয়া থেকে সংশ্লেষিত</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বৃক্কের অবস্থান: উদরগহ্বরের পেছনের প্রাচীরে পেরিটোনিয়ামে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মূত্র নিষ্কাশন পথ: বৃক্ক → ইউরেটার → মূত্রথলি → মূত্রনালি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.৩: বৃক্কের অনুদৈর্ঘ্য ছেদ — কর্টেক্স, মেডুলা ও পেলভিস</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Kidney Longitudinal Anatomy Sections</text>
          <g transform="translate(70, 65)">
            <path d="M 50 20 C 20 20, 20 70, 50 80 C 65 75, 65 25, 50 20 Z" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
            <path d="M 110 20 C 140 20, 140 70, 110 80 C 95 75, 95 25, 110 20 Z" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2" />
            <line x1="50" y1="75" x2="70" y2="105" stroke="#eab308" strokeWidth="2.5" />
            <line x1="110" y1="75" x2="90" y2="105" stroke="#eab308" strokeWidth="2.5" />
            <ellipse cx="80" cy="115" rx="15" ry="10" fill="#ca8a04" stroke="#facc15" strokeWidth="1.5" />
            <text x="80" y="138" fill="#facc15" fontSize="8" textAnchor="middle">মূত্রথলি ও ইউরেটার</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">মানব রেচনতন্ত্র ও নাইট্রোজেন বর্জ্য:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ইউরিয়া: যকৃতে অর্নিথিন চক্রে অ্যামোনিয়া থেকে সংশ্লেষিত</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বৃক্কের অবস্থান: উদরগহ্বরের পেছনের প্রাচীরে পেরিটোনিয়ামে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মূত্র নিষ্কাশন পথ: বৃক্ক → ইউরেটার → মূত্রথলি → মূত্রনালি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.৩: রেনাল রক্ত সঞ্চালন — রেনাল আর্টারি ও ভেইন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Renal Artery & Renal Vein Blood Flow</text>
          <g transform="translate(70, 65)">
            <path d="M 60 15 C 10 15, 10 95, 60 100 C 90 90, 80 20, 60 15 Z" fill="#991b1b" stroke="#f87171" strokeWidth="2.5" />
            <polygon points="45,35 60,45 45,55" fill="#f97316" /><polygon points="45,60 60,70 45,80" fill="#f97316" />
            <text x="60" y="115" fill="#fda4af" fontSize="9" textAnchor="middle">কর্টেক্স, পিরামিড ও পেলভিস</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#f87171" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">বৃক্কের অনুদৈর্ঘ্য ব্যবচ্ছেদ (L.S.):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ক্যাপসুল: বৃক্ককে আবৃতকারী তন্তুময় সংযোজক কলা</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• কর্টেক্স ও মেডুলা: ৮-১৮টি রেনাল পিরামিড বিদ্যমান</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• রেনাল ধমনী ও শিরা হাইলামের ভেতর দিয়ে প্রবেশ করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.৪: সম্পূর্ণ নেফ্রনের ৩ডি গঠন — কার্যকারী একক</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Complete Nephron Architecture 3D</text>
          <g transform="translate(70, 65)">
            <path d="M 60 15 C 10 15, 10 95, 60 100 C 90 90, 80 20, 60 15 Z" fill="#991b1b" stroke="#f87171" strokeWidth="2.5" />
            <polygon points="45,35 60,45 45,55" fill="#f97316" /><polygon points="45,60 60,70 45,80" fill="#f97316" />
            <text x="60" y="115" fill="#fda4af" fontSize="9" textAnchor="middle">কর্টেক্স, পিরামিড ও পেলভিস</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#f87171" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">বৃক্কের অনুদৈর্ঘ্য ব্যবচ্ছেদ (L.S.):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ক্যাপসুল: বৃক্ককে আবৃতকারী তন্তুময় সংযোজক কলা</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• কর্টেক্স ও মেডুলা: ৮-১৮টি রেনাল পিরামিড বিদ্যমান</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• রেনাল ধমনী ও শিরা হাইলামের ভেতর দিয়ে প্রবেশ করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.৪: বোম্যান্স ক্যাপসুল ও দ্বিস্তরী পডোসাইট কোষ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Bowman Capsule & Podocyte Filtration Slits</text>
          <g transform="translate(70, 65)">
            <path d="M 60 15 C 10 15, 10 95, 60 100 C 90 90, 80 20, 60 15 Z" fill="#991b1b" stroke="#f87171" strokeWidth="2.5" />
            <polygon points="45,35 60,45 45,55" fill="#f97316" /><polygon points="45,60 60,70 45,80" fill="#f97316" />
            <text x="60" y="115" fill="#fda4af" fontSize="9" textAnchor="middle">কর্টেক্স, পিরামিড ও পেলভিস</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#f87171" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">বৃক্কের অনুদৈর্ঘ্য ব্যবচ্ছেদ (L.S.):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• ক্যাপসুল: বৃক্ককে আবৃতকারী তন্তুময় সংযোজক কলা</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• কর্টেক্স ও মেডুলা: ৮-১৮টি রেনাল পিরামিড বিদ্যমান</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• রেনাল ধমনী ও শিরা হাইলামের ভেতর দিয়ে প্রবেশ করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.৪: গ্লোমেরুলাস কৈশিক জালক ও রেনাল আর্টারিওল</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Glomerulus Capillary Tuft & Arterioles</text>
          <g transform="translate(60, 65)">
            <path d="M 25 35 C 15 50, 15 70, 35 75 C 50 75, 55 60, 50 45" fill="none" stroke="#facc15" strokeWidth="3" />
            <circle cx="35" cy="55" r="10" fill="#ef4444" /><text x="35" y="58" fill="#fff" fontSize="6" textAnchor="middle">গ্লোমেরুলাস</text>
            <path d="M 50 45 Q 80 20 100 55 T 120 90 T 140 45 T 170 45" fill="none" stroke="#facc15" strokeWidth="2.5" />
            <line x1="170" y1="20" x2="170" y2="105" stroke="#38bdf8" strokeWidth="4" />
            <text x="100" y="115" fill="#facc15" fontSize="8" textAnchor="middle">বোম্যান্স ক্যাপসুল, হেনলির লুপ ও সংগ্রাহী নালি</text>
          </g>
          <g transform="translate(290, 65)"><rect x="0" y="0" width="350" height="110" rx="8" fill="#0f172a" stroke="#facc15" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">নেফ্রন — বৃক্কের গঠন ও কাজের একক:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্রতিটি বৃক্কে প্রায় ১০-১২ লক্ষ নেফ্রন থাকে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ম্যালপিজিয়ান বডি: আল্ট্রাফিল্ট্রেশন (GFR ১২৫ ml/min)</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হেনলির লুপে পুনঃশোষণ ও সংগ্রাহী নালিতে মূত্র জমা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.৫: আল্ট্রাফিল্ট্রেশন ও গ্লোমেরুলার ফিল্ট্রেট সৃষ্টি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Ultrafiltration Pressure Mechanism</text>
          <g transform="translate(60, 65)">
            <path d="M 25 35 C 15 50, 15 70, 35 75 C 50 75, 55 60, 50 45" fill="none" stroke="#facc15" strokeWidth="3" />
            <circle cx="35" cy="55" r="10" fill="#ef4444" /><text x="35" y="58" fill="#fff" fontSize="6" textAnchor="middle">গ্লোমেরুলাস</text>
            <path d="M 50 45 Q 80 20 100 55 T 120 90 T 140 45 T 170 45" fill="none" stroke="#facc15" strokeWidth="2.5" />
            <line x1="170" y1="20" x2="170" y2="105" stroke="#38bdf8" strokeWidth="4" />
            <text x="100" y="115" fill="#facc15" fontSize="8" textAnchor="middle">বোম্যান্স ক্যাপসুল, হেনলির লুপ ও সংগ্রাহী নালি</text>
          </g>
          <g transform="translate(290, 65)"><rect x="0" y="0" width="350" height="110" rx="8" fill="#0f172a" stroke="#facc15" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">নেফ্রন — বৃক্কের গঠন ও কাজের একক:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্রতিটি বৃক্কে প্রায় ১০-১২ লক্ষ নেফ্রন থাকে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ম্যালপিজিয়ান বডি: আল্ট্রাফিল্ট্রেশন (GFR ১২৫ ml/min)</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হেনলির লুপে পুনঃশোষণ ও সংগ্রাহী নালিতে মূত্র জমা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.৫: প্রক্সিমাল পেঁচানো নালিকা ও খাদ্য পুনর্শোষণ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Proximal Convoluted Tubule Reabsorption</text>
          <g transform="translate(60, 65)">
            <path d="M 25 35 C 15 50, 15 70, 35 75 C 50 75, 55 60, 50 45" fill="none" stroke="#facc15" strokeWidth="3" />
            <circle cx="35" cy="55" r="10" fill="#ef4444" /><text x="35" y="58" fill="#fff" fontSize="6" textAnchor="middle">গ্লোমেরুলাস</text>
            <path d="M 50 45 Q 80 20 100 55 T 120 90 T 140 45 T 170 45" fill="none" stroke="#facc15" strokeWidth="2.5" />
            <line x1="170" y1="20" x2="170" y2="105" stroke="#38bdf8" strokeWidth="4" />
            <text x="100" y="115" fill="#facc15" fontSize="8" textAnchor="middle">বোম্যান্স ক্যাপসুল, হেনলির লুপ ও সংগ্রাহী নালি</text>
          </g>
          <g transform="translate(290, 65)"><rect x="0" y="0" width="350" height="110" rx="8" fill="#0f172a" stroke="#facc15" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">নেফ্রন — বৃক্কের গঠন ও কাজের একক:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্রতিটি বৃক্কে প্রায় ১০-১২ লক্ষ নেফ্রন থাকে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ম্যালপিজিয়ান বডি: আল্ট্রাফিল্ট্রেশন (GFR ১২৫ ml/min)</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হেনলির লুপে পুনঃশোষণ ও সংগ্রাহী নালিতে মূত্র জমা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.৫: হেনলির লুপ — ইউ-আকৃতির কাউন্টার-কারেন্ট</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Loop of Henle Countercurrent Multiplier</text>
          <g transform="translate(60, 65)">
            <path d="M 25 35 C 15 50, 15 70, 35 75 C 50 75, 55 60, 50 45" fill="none" stroke="#facc15" strokeWidth="3" />
            <circle cx="35" cy="55" r="10" fill="#ef4444" /><text x="35" y="58" fill="#fff" fontSize="6" textAnchor="middle">গ্লোমেরুলাস</text>
            <path d="M 50 45 Q 80 20 100 55 T 120 90 T 140 45 T 170 45" fill="none" stroke="#facc15" strokeWidth="2.5" />
            <line x1="170" y1="20" x2="170" y2="105" stroke="#38bdf8" strokeWidth="4" />
            <text x="100" y="115" fill="#facc15" fontSize="8" textAnchor="middle">বোম্যান্স ক্যাপসুল, হেনলির লুপ ও সংগ্রাহী নালি</text>
          </g>
          <g transform="translate(290, 65)"><rect x="0" y="0" width="350" height="110" rx="8" fill="#0f172a" stroke="#facc15" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">নেফ্রন — বৃক্কের গঠন ও কাজের একক:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্রতিটি বৃক্কে প্রায় ১০-১২ লক্ষ নেফ্রন থাকে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ম্যালপিজিয়ান বডি: আল্ট্রাফিল্ট্রেশন (GFR ১২৫ ml/min)</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হেনলির লুপে পুনঃশোষণ ও সংগ্রাহী নালিতে মূত্র জমা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.৫: ডিস্টাল পেঁচানো নালিকা ও নালিকা ক্ষরণ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Distal Convoluted Tubule & K+/H+ Secretion</text>
          <g transform="translate(60, 65)">
            <path d="M 25 35 C 15 50, 15 70, 35 75 C 50 75, 55 60, 50 45" fill="none" stroke="#facc15" strokeWidth="3" />
            <circle cx="35" cy="55" r="10" fill="#ef4444" /><text x="35" y="58" fill="#fff" fontSize="6" textAnchor="middle">গ্লোমেরুলাস</text>
            <path d="M 50 45 Q 80 20 100 55 T 120 90 T 140 45 T 170 45" fill="none" stroke="#facc15" strokeWidth="2.5" />
            <line x1="170" y1="20" x2="170" y2="105" stroke="#38bdf8" strokeWidth="4" />
            <text x="100" y="115" fill="#facc15" fontSize="8" textAnchor="middle">বোম্যান্স ক্যাপসুল, হেনলির লুপ ও সংগ্রাহী নালি</text>
          </g>
          <g transform="translate(290, 65)"><rect x="0" y="0" width="350" height="110" rx="8" fill="#0f172a" stroke="#facc15" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">নেফ্রন — বৃক্কের গঠন ও কাজের একক:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্রতিটি বৃক্কে প্রায় ১০-১২ লক্ষ নেফ্রন থাকে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ম্যালপিজিয়ান বডি: আল্ট্রাফিল্ট্রেশন (GFR ১২৫ ml/min)</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হেনলির লুপে পুনঃশোষণ ও সংগ্রাহী নালিতে মূত্র জমা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.৫: সংগ্রাহী নালিকা ও মূত্র সঞ্চালন পথ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Collecting Duct & ADH Hormone Gate</text>
          <g transform="translate(60, 65)">
            <path d="M 25 35 C 15 50, 15 70, 35 75 C 50 75, 55 60, 50 45" fill="none" stroke="#facc15" strokeWidth="3" />
            <circle cx="35" cy="55" r="10" fill="#ef4444" /><text x="35" y="58" fill="#fff" fontSize="6" textAnchor="middle">গ্লোমেরুলাস</text>
            <path d="M 50 45 Q 80 20 100 55 T 120 90 T 140 45 T 170 45" fill="none" stroke="#facc15" strokeWidth="2.5" />
            <line x1="170" y1="20" x2="170" y2="105" stroke="#38bdf8" strokeWidth="4" />
            <text x="100" y="115" fill="#facc15" fontSize="8" textAnchor="middle">বোম্যান্স ক্যাপসুল, হেনলির লুপ ও সংগ্রাহী নালি</text>
          </g>
          <g transform="translate(290, 65)"><rect x="0" y="0" width="350" height="110" rx="8" fill="#0f172a" stroke="#facc15" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">নেফ্রন — বৃক্কের গঠন ও কাজের একক:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্রতিটি বৃক্কে প্রায় ১০-১২ লক্ষ নেফ্রন থাকে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ম্যালপিজিয়ান বডি: আল্ট্রাফিল্ট্রেশন (GFR ১২৫ ml/min)</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হেনলির লুপে পুনঃশোষণ ও সংগ্রাহী নালিতে মূত্র জমা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.৫: সুস্থ মূত্রের উপাদান — ইউরিয়া, লবণ ও ইউরোক্রোম</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Composition of Healthy Urine & Urochrome</text>
          <g transform="translate(60, 65)">
            <path d="M 25 35 C 15 50, 15 70, 35 75 C 50 75, 55 60, 50 45" fill="none" stroke="#facc15" strokeWidth="3" />
            <circle cx="35" cy="55" r="10" fill="#ef4444" /><text x="35" y="58" fill="#fff" fontSize="6" textAnchor="middle">গ্লোমেরুলাস</text>
            <path d="M 50 45 Q 80 20 100 55 T 120 90 T 140 45 T 170 45" fill="none" stroke="#facc15" strokeWidth="2.5" />
            <line x1="170" y1="20" x2="170" y2="105" stroke="#38bdf8" strokeWidth="4" />
            <text x="100" y="115" fill="#facc15" fontSize="8" textAnchor="middle">বোম্যান্স ক্যাপসুল, হেনলির লুপ ও সংগ্রাহী নালি</text>
          </g>
          <g transform="translate(290, 65)"><rect x="0" y="0" width="350" height="110" rx="8" fill="#0f172a" stroke="#facc15" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">নেফ্রন — বৃক্কের গঠন ও কাজের একক:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্রতিটি বৃক্কে প্রায় ১০-১২ লক্ষ নেফ্রন থাকে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ম্যালপিজিয়ান বডি: আল্ট্রাফিল্ট্রেশন (GFR ১২৫ ml/min)</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হেনলির লুপে পুনঃশোষণ ও সংগ্রাহী নালিতে মূত্র জমা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.২: ইউরেটার নালী ও পেরিস্টালসিস তরঙ্গীয় গতি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Ureter Muscular Peristaltic Pump</text>
          <g transform="translate(60, 65)">
            <path d="M 25 35 C 15 50, 15 70, 35 75 C 50 75, 55 60, 50 45" fill="none" stroke="#facc15" strokeWidth="3" />
            <circle cx="35" cy="55" r="10" fill="#ef4444" /><text x="35" y="58" fill="#fff" fontSize="6" textAnchor="middle">গ্লোমেরুলাস</text>
            <path d="M 50 45 Q 80 20 100 55 T 120 90 T 140 45 T 170 45" fill="none" stroke="#facc15" strokeWidth="2.5" />
            <line x1="170" y1="20" x2="170" y2="105" stroke="#38bdf8" strokeWidth="4" />
            <text x="100" y="115" fill="#facc15" fontSize="8" textAnchor="middle">বোম্যান্স ক্যাপসুল, হেনলির লুপ ও সংগ্রাহী নালি</text>
          </g>
          <g transform="translate(290, 65)"><rect x="0" y="0" width="350" height="110" rx="8" fill="#0f172a" stroke="#facc15" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">নেফ্রন — বৃক্কের গঠন ও কাজের একক:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্রতিটি বৃক্কে প্রায় ১০-১২ লক্ষ নেফ্রন থাকে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ম্যালপিজিয়ান বডি: আল্ট্রাফিল্ট্রেশন (GFR ১২৫ ml/min)</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হেনলির লুপে পুনঃশোষণ ও সংগ্রাহী নালিতে মূত্র জমা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.২: মূত্রথলি — ডেটরুসর পেশিবহুল স্থিতিস্থাপক থলি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Urinary Bladder Detrusor Muscular Bag</text>
          <g transform="translate(60, 65)">
            <rect x="20" y="25" width="80" height="60" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" /><text x="60" y="58" fill="#fff" fontSize="9" textAnchor="middle">ডায়ালাইজার</text>
            <line x1="100" y1="40" x2="150" y2="40" stroke="#ef4444" strokeWidth="2" />
            <line x1="100" y1="70" x2="150" y2="70" stroke="#38bdf8" strokeWidth="2" />
            <text x="60" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">হিমোডায়ালাইসিস মেসিন</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">ডায়ালাইসিস ও বৃক্ক বিকল চিকিৎসা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• আংশিক ভেদ্য ডায়ালাইসিস পর্দার মাধ্যমে রক্তের বর্জ্য নিষ্কাশন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• রক্ত জমাট বাঁধা রোধে হেপারিন ব্যবহার করা হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• পাথর: ক্যালসিয়াম অক্সালেট, ইউরিক এসিডের কঠিন দানাদার স্ফটিক</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.২: ইউরেথ্রা বা মূত্রনালী ও স্ফিঙ্কটার কপাটিকা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Urethra & Internal/External Sphincters</text>
          <g transform="translate(60, 65)">
            <rect x="20" y="25" width="80" height="60" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" /><text x="60" y="58" fill="#fff" fontSize="9" textAnchor="middle">ডায়ালাইজার</text>
            <line x1="100" y1="40" x2="150" y2="40" stroke="#ef4444" strokeWidth="2" />
            <line x1="100" y1="70" x2="150" y2="70" stroke="#38bdf8" strokeWidth="2" />
            <text x="60" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">হিমোডায়ালাইসিস মেসিন</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">ডায়ালাইসিস ও বৃক্ক বিকল চিকিৎসা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• আংশিক ভেদ্য ডায়ালাইসিস পর্দার মাধ্যমে রক্তের বর্জ্য নিষ্কাশন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• রক্ত জমাট বাঁধা রোধে হেপারিন ব্যবহার করা হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• পাথর: ক্যালসিয়াম অক্সালেট, ইউরিক এসিডের কঠিন দানাদার স্ফটিক</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.৬: বৃক্কে পাথর সৃষ্টি — ক্যালসিয়াম অক্সালেট কেলাস</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Kidney Stones Calcium Oxalate Crystals</text>
          <g transform="translate(60, 65)">
            <rect x="20" y="25" width="80" height="60" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" /><text x="60" y="58" fill="#fff" fontSize="9" textAnchor="middle">ডায়ালাইজার</text>
            <line x1="100" y1="40" x2="150" y2="40" stroke="#ef4444" strokeWidth="2" />
            <line x1="100" y1="70" x2="150" y2="70" stroke="#38bdf8" strokeWidth="2" />
            <text x="60" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">হিমোডায়ালাইসিস মেসিন</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">ডায়ালাইসিস ও বৃক্ক বিকল চিকিৎসা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• আংশিক ভেদ্য ডায়ালাইসিস পর্দার মাধ্যমে রক্তের বর্জ্য নিষ্কাশন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• রক্ত জমাট বাঁধা রোধে হেপারিন ব্যবহার করা হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• পাথর: ক্যালসিয়াম অক্সালেট, ইউরিক এসিডের কঠিন দানাদার স্ফটিক</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.৭: বৃক্ক বিকল ও রক্তে ইউরেমিয়া বিষক্রিয়া</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Acute Renal Failure & Uremic Toxicity</text>
          <g transform="translate(60, 65)">
            <rect x="20" y="25" width="80" height="60" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" /><text x="60" y="58" fill="#fff" fontSize="9" textAnchor="middle">ডায়ালাইজার</text>
            <line x1="100" y1="40" x2="150" y2="40" stroke="#ef4444" strokeWidth="2" />
            <line x1="100" y1="70" x2="150" y2="70" stroke="#38bdf8" strokeWidth="2" />
            <text x="60" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">হিমোডায়ালাইসিস মেসিন</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">ডায়ালাইসিস ও বৃক্ক বিকল চিকিৎসা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• আংশিক ভেদ্য ডায়ালাইসিস পর্দার মাধ্যমে রক্তের বর্জ্য নিষ্কাশন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• রক্ত জমাট বাঁধা রোধে হেপারিন ব্যবহার করা হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• পাথর: ক্যালসিয়াম অক্সালেট, ইউরিক এসিডের কঠিন দানাদার স্ফটিক</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.৭: হিমোডায়ালাইসিস — কৃত্রিম বৃক্ক ডায়ালাইজার</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Hemodialysis Machine Artificial Dialyzer</text>
          <g transform="translate(60, 65)">
            <rect x="20" y="25" width="80" height="60" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" /><text x="60" y="58" fill="#fff" fontSize="9" textAnchor="middle">ডায়ালাইজার</text>
            <line x1="100" y1="40" x2="150" y2="40" stroke="#ef4444" strokeWidth="2" />
            <line x1="100" y1="70" x2="150" y2="70" stroke="#38bdf8" strokeWidth="2" />
            <text x="60" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">হিমোডায়ালাইসিস মেসিন</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">ডায়ালাইসিস ও বৃক্ক বিকল চিকিৎসা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• আংশিক ভেদ্য ডায়ালাইসিস পর্দার মাধ্যমে রক্তের বর্জ্য নিষ্কাশন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• রক্ত জমাট বাঁধা রোধে হেপারিন ব্যবহার করা হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• পাথর: ক্যালসিয়াম অক্সালেট, ইউরিক এসিডের কঠিন দানাদার স্ফটিক</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৮.৭: কিডনি প্রতিস্থাপন বা রেনাল ট্রান্সপ্লান্টেশন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Renal Allograft Kidney Transplantation</text>
          <g transform="translate(60, 65)">
            <rect x="20" y="25" width="80" height="60" rx="6" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" /><text x="60" y="58" fill="#fff" fontSize="9" textAnchor="middle">ডায়ালাইজার</text>
            <line x1="100" y1="40" x2="150" y2="40" stroke="#ef4444" strokeWidth="2" />
            <line x1="100" y1="70" x2="150" y2="70" stroke="#38bdf8" strokeWidth="2" />
            <text x="60" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">হিমোডায়ালাইসিস মেসিন</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">ডায়ালাইসিস ও বৃক্ক বিকল চিকিৎসা:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• আংশিক ভেদ্য ডায়ালাইসিস পর্দার মাধ্যমে রক্তের বর্জ্য নিষ্কাশন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• রক্ত জমাট বাঁধা রোধে হেপারিন ব্যবহার করা হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• পাথর: ক্যালসিয়াম অক্সালেট, ইউরিক এসিডের কঠিন দানাদার স্ফটিক</text></g>
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
  // CHAPTER 9
  // ========================================================
  if (chNum === 9) {
    if (id === 1) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.১: মানব কঙ্কালতন্ত্র — অক্ষীয় ও উপাঙ্গীয় বিভাজন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Human Skeleton: Axial & Appendicular 206</text>
          <g transform="translate(80, 65)">
            <circle cx="60" cy="22" r="14" fill="#f8fafc" /><line x1="60" y1="36" x2="60" y2="80" stroke="#f8fafc" strokeWidth="4" />
            <line x1="30" y1="50" x2="90" y2="50" stroke="#f8fafc" strokeWidth="3" /><line x1="60" y1="80" x2="40" y2="115" stroke="#f8fafc" strokeWidth="3" />
            <line x1="60" y1="80" x2="80" y2="115" stroke="#f8fafc" strokeWidth="3" />
            <text x="60" y="130" fill="#f8fafc" fontSize="8" textAnchor="middle">২০৬টি অস্থি কাঠামো</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#f8fafc" strokeWidth="1" />
          <text x="15" y="24" fill="#ffffff" fontSize="11" fontWeight="bold">মানব কঙ্কালতন্ত্রের বিভাজন:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অক্ষীয় কঙ্কাল (Axial - ৮০টি): করোটিকা, মেরুদণ্ড ও বক্ষপিঞ্জর</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• উপাঙ্গীয় কঙ্কাল (Appendicular - ১২৬টি): বক্ষ ও শ্রোণিচক্র, হাত-পা</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মেরুদণ্ডে ৩৩টি কশেরুকা ও বক্ষপিঞ্জরে ১২ জোড়া পশুকা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.১: করোটি ও মুখমণ্ডলের সুসংবদ্ধ অস্থিসমূহ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Human Skull Cranium & Facial Bones</text>
          <g transform="translate(80, 65)">
            <circle cx="60" cy="22" r="14" fill="#f8fafc" /><line x1="60" y1="36" x2="60" y2="80" stroke="#f8fafc" strokeWidth="4" />
            <line x1="30" y1="50" x2="90" y2="50" stroke="#f8fafc" strokeWidth="3" /><line x1="60" y1="80" x2="40" y2="115" stroke="#f8fafc" strokeWidth="3" />
            <line x1="60" y1="80" x2="80" y2="115" stroke="#f8fafc" strokeWidth="3" />
            <text x="60" y="130" fill="#f8fafc" fontSize="8" textAnchor="middle">২০৬টি অস্থি কাঠামো</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#f8fafc" strokeWidth="1" />
          <text x="15" y="24" fill="#ffffff" fontSize="11" fontWeight="bold">মানব কঙ্কালতন্ত্রের বিভাজন:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অক্ষীয় কঙ্কাল (Axial - ৮০টি): করোটিকা, মেরুদণ্ড ও বক্ষপিঞ্জর</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• উপাঙ্গীয় কঙ্কাল (Appendicular - ১২৬টি): বক্ষ ও শ্রোণিচক্র, হাত-পা</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মেরুদণ্ডে ৩৩টি কশেরুকা ও বক্ষপিঞ্জরে ১২ জোড়া পশুকা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.১: মেরুদণ্ড — ৩৩টি কশেরুকা ও কার্টিলেজ ডিস্ক</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Vertebral Column 33 Vertebrae & Discs</text>
          <g transform="translate(80, 65)">
            <circle cx="60" cy="22" r="14" fill="#f8fafc" /><line x1="60" y1="36" x2="60" y2="80" stroke="#f8fafc" strokeWidth="4" />
            <line x1="30" y1="50" x2="90" y2="50" stroke="#f8fafc" strokeWidth="3" /><line x1="60" y1="80" x2="40" y2="115" stroke="#f8fafc" strokeWidth="3" />
            <line x1="60" y1="80" x2="80" y2="115" stroke="#f8fafc" strokeWidth="3" />
            <text x="60" y="130" fill="#f8fafc" fontSize="8" textAnchor="middle">২০৬টি অস্থি কাঠামো</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#f8fafc" strokeWidth="1" />
          <text x="15" y="24" fill="#ffffff" fontSize="11" fontWeight="bold">মানব কঙ্কালতন্ত্রের বিভাজন:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অক্ষীয় কঙ্কাল (Axial - ৮০টি): করোটিকা, মেরুদণ্ড ও বক্ষপিঞ্জর</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• উপাঙ্গীয় কঙ্কাল (Appendicular - ১২৬টি): বক্ষ ও শ্রোণিচক্র, হাত-পা</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মেরুদণ্ডে ৩৩টি কশেরুকা ও বক্ষপিঞ্জরে ১২ জোড়া পশুকা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.১: বক্ষপিঞ্জর — স্টার্নাম ও ১২ জোড়া পশুকা খাঁচা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Thoracic Rib Cage & Sternum Shield</text>
          <g transform="translate(80, 65)">
            <circle cx="60" cy="22" r="14" fill="#f8fafc" /><line x1="60" y1="36" x2="60" y2="80" stroke="#f8fafc" strokeWidth="4" />
            <line x1="30" y1="50" x2="90" y2="50" stroke="#f8fafc" strokeWidth="3" /><line x1="60" y1="80" x2="40" y2="115" stroke="#f8fafc" strokeWidth="3" />
            <line x1="60" y1="80" x2="80" y2="115" stroke="#f8fafc" strokeWidth="3" />
            <text x="60" y="130" fill="#f8fafc" fontSize="8" textAnchor="middle">২০৬টি অস্থি কাঠামো</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#f8fafc" strokeWidth="1" />
          <text x="15" y="24" fill="#ffffff" fontSize="11" fontWeight="bold">মানব কঙ্কালতন্ত্রের বিভাজন:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অক্ষীয় কঙ্কাল (Axial - ৮০টি): করোটিকা, মেরুদণ্ড ও বক্ষপিঞ্জর</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• উপাঙ্গীয় কঙ্কাল (Appendicular - ১২৬টি): বক্ষ ও শ্রোণিচক্র, হাত-পা</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মেরুদণ্ডে ৩৩টি কশেরুকা ও বক্ষপিঞ্জরে ১২ জোড়া পশুকা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.২: দীর্ঘ অস্থির প্রস্থচ্ছেদ — কম্প্যাক্ট ও স্পঞ্জি বোন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Long Bone Anatomy: Compact & Spongy Bone</text>
          <g transform="translate(70, 65)">
            <circle cx="65" cy="55" r="45" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
            <circle cx="65" cy="55" r="28" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="65" cy="55" r="12" fill="#ef4444" /><text x="65" y="58" fill="#fff" fontSize="6" textAnchor="middle">নালি</text>
            <text x="65" y="115" fill="#e2e8f0" fontSize="9" textAnchor="middle">হ্যাভারসিয়ান তন্ত্র ও অস্টিওসাইট</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#e2e8f0" strokeWidth="1" />
          <text x="15" y="24" fill="#ffffff" fontSize="11" fontWeight="bold">অস্থির অণুবীক্ষণিক গঠন (Haversian System):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• কেন্দ্রীয় হ্যাভারসিয়ান নালি: রক্ত ও স্নায়ুজালক ধারণ করে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ল্যামেলি: নালিকে ঘিরে স্তরীভূত ক্যালসিয়াম ম্যাট্রিক্স</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ল্যাকুনায় অস্টিওসাইট অস্থিকোষ ও সূক্ষ্ম ক্যানালিকুলি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.২: হ্যাভারসিয়ান তন্ত্র ও অস্টিওসাইট অস্থিকোষ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Haversian Canal System & Osteocytes</text>
          <g transform="translate(70, 65)">
            <circle cx="65" cy="55" r="45" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
            <circle cx="65" cy="55" r="28" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="65" cy="55" r="12" fill="#ef4444" /><text x="65" y="58" fill="#fff" fontSize="6" textAnchor="middle">নালি</text>
            <text x="65" y="115" fill="#e2e8f0" fontSize="9" textAnchor="middle">হ্যাভারসিয়ান তন্ত্র ও অস্টিওসাইট</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#e2e8f0" strokeWidth="1" />
          <text x="15" y="24" fill="#ffffff" fontSize="11" fontWeight="bold">অস্থির অণুবীক্ষণিক গঠন (Haversian System):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• কেন্দ্রীয় হ্যাভারসিয়ান নালি: রক্ত ও স্নায়ুজালক ধারণ করে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ল্যামেলি: নালিকে ঘিরে স্তরীভূত ক্যালসিয়াম ম্যাট্রিক্স</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ল্যাকুনায় অস্টিওসাইট অস্থিকোষ ও সূক্ষ্ম ক্যানালিকুলি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.২: তরুণাস্থি ম্যাট্রিক্স ও কনড্রোসাইট কোষ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Hyaline Cartilage Matrix & Chondrocytes</text>
          <g transform="translate(70, 65)">
            <circle cx="65" cy="55" r="45" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
            <circle cx="65" cy="55" r="28" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="3 2" />
            <circle cx="65" cy="55" r="12" fill="#ef4444" /><text x="65" y="58" fill="#fff" fontSize="6" textAnchor="middle">নালি</text>
            <text x="65" y="115" fill="#e2e8f0" fontSize="9" textAnchor="middle">হ্যাভারসিয়ান তন্ত্র ও অস্টিওসাইট</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#e2e8f0" strokeWidth="1" />
          <text x="15" y="24" fill="#ffffff" fontSize="11" fontWeight="bold">অস্থির অণুবীক্ষণিক গঠন (Haversian System):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• কেন্দ্রীয় হ্যাভারসিয়ান নালি: রক্ত ও স্নায়ুজালক ধারণ করে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ল্যামেলি: নালিকে ঘিরে স্তরীভূত ক্যালসিয়াম ম্যাট্রিক্স</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ল্যাকুনায় অস্টিওসাইট অস্থিকোষ ও সূক্ষ্ম ক্যানালিকুলি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.৩: নিশ্চল সাইনুথ্রাল সন্ধি — করোটীয় সিউচার খাঁজ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Fixed Sutures of Cranial Joints</text>
          <g transform="translate(70, 65)">
            <rect x="30" y="15" width="25" height="35" rx="5" fill="#f8fafc" />
            <rect x="30" y="65" width="25" height="35" rx="5" fill="#f8fafc" />
            <circle cx="42" cy="57" r="10" fill="#38bdf8" fillOpacity="0.5" stroke="#0ea5e9" strokeWidth="2" />
            <text x="42" y="115" fill="#38bdf8" fontSize="8" textAnchor="middle">সাইনোভিয়াল অস্থিসন্ধি</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">সচল সাইনোভিয়াল অস্থিসন্ধির গঠন:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সন্ধিক্যাপসুল ও সাইনোভিয়াল রসে ঘর্ষণহীন পিচ্ছিল চলন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বল ও কোটর সন্ধি: কাঁধ ও ঊরুসন্ধি (সর্বোচ্চ চলনশীল)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• কব্জা সন্ধি: কনুই ও হাঁটু (একমুখী ১৮০° চলন)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.৩: সচল সাইনোভিয়াল অস্থিসন্ধির ক্যাপসুল গঠন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Synovial Joint Capsule & Fluid Cavity</text>
          <g transform="translate(70, 65)">
            <rect x="30" y="15" width="25" height="35" rx="5" fill="#f8fafc" />
            <rect x="30" y="65" width="25" height="35" rx="5" fill="#f8fafc" />
            <circle cx="42" cy="57" r="10" fill="#38bdf8" fillOpacity="0.5" stroke="#0ea5e9" strokeWidth="2" />
            <text x="42" y="115" fill="#38bdf8" fontSize="8" textAnchor="middle">সাইনোভিয়াল অস্থিসন্ধি</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">সচল সাইনোভিয়াল অস্থিসন্ধির গঠন:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সন্ধিক্যাপসুল ও সাইনোভিয়াল রসে ঘর্ষণহীন পিচ্ছিল চলন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বল ও কোটর সন্ধি: কাঁধ ও ঊরুসন্ধি (সর্বোচ্চ চলনশীল)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• কব্জা সন্ধি: কনুই ও হাঁটু (একমুখী ১৮০° চলন)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.৩: বল ও কোটর সন্ধি — কাঁধ ও নিতম্ব সন্ধি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Ball and Socket Joint: Shoulder & Hip</text>
          <g transform="translate(70, 65)">
            <rect x="30" y="15" width="25" height="35" rx="5" fill="#f8fafc" />
            <rect x="30" y="65" width="25" height="35" rx="5" fill="#f8fafc" />
            <circle cx="42" cy="57" r="10" fill="#38bdf8" fillOpacity="0.5" stroke="#0ea5e9" strokeWidth="2" />
            <text x="42" y="115" fill="#38bdf8" fontSize="8" textAnchor="middle">সাইনোভিয়াল অস্থিসন্ধি</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">সচল সাইনোভিয়াল অস্থিসন্ধির গঠন:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সন্ধিক্যাপসুল ও সাইনোভিয়াল রসে ঘর্ষণহীন পিচ্ছিল চলন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বল ও কোটর সন্ধি: কাঁধ ও ঊরুসন্ধি (সর্বোচ্চ চলনশীল)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• কব্জা সন্ধি: কনুই ও হাঁটু (একমুখী ১৮০° চলন)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.৩: কব্জা সন্ধি — কনুই ও হাঁটুর একমুখী চলন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Hinge Joint: Elbow & Knee Door Hinge</text>
          <g transform="translate(70, 65)">
            <rect x="30" y="15" width="25" height="35" rx="5" fill="#f8fafc" />
            <rect x="30" y="65" width="25" height="35" rx="5" fill="#f8fafc" />
            <circle cx="42" cy="57" r="10" fill="#38bdf8" fillOpacity="0.5" stroke="#0ea5e9" strokeWidth="2" />
            <text x="42" y="115" fill="#38bdf8" fontSize="8" textAnchor="middle">সাইনোভিয়াল অস্থিসন্ধি</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">সচল সাইনোভিয়াল অস্থিসন্ধির গঠন:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সন্ধিক্যাপসুল ও সাইনোভিয়াল রসে ঘর্ষণহীন পিচ্ছিল চলন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বল ও কোটর সন্ধি: কাঁধ ও ঊরুসন্ধি (সর্বোচ্চ চলনশীল)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• কব্জা সন্ধি: কনুই ও হাঁটু (একমুখী ১৮০° চলন)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.৩: পিভট সন্ধি — অ্যাটলাস ও অ্যাক্সিস কশেরুকা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Pivot Joint: Atlas & Axis Skull Rotation</text>
          <g transform="translate(70, 65)">
            <rect x="30" y="15" width="25" height="35" rx="5" fill="#f8fafc" />
            <rect x="30" y="65" width="25" height="35" rx="5" fill="#f8fafc" />
            <circle cx="42" cy="57" r="10" fill="#38bdf8" fillOpacity="0.5" stroke="#0ea5e9" strokeWidth="2" />
            <text x="42" y="115" fill="#38bdf8" fontSize="8" textAnchor="middle">সাইনোভিয়াল অস্থিসন্ধি</text>
          </g>
          <g transform="translate(260, 65)"><rect x="0" y="0" width="380" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">সচল সাইনোভিয়াল অস্থিসন্ধির গঠন:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সন্ধিক্যাপসুল ও সাইনোভিয়াল রসে ঘর্ষণহীন পিচ্ছিল চলন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• বল ও কোটর সন্ধি: কাঁধ ও ঊরুসন্ধি (সর্বোচ্চ চলনশীল)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• কব্জা সন্ধি: কনুই ও হাঁটু (একমুখী ১৮০° চলন)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.৪: কঙ্কাল পেশির সারকোমিয়ার ও মায়োফাইব্রিল</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Skeletal Muscle Sarcomere Structure</text>
          <g transform="translate(60, 65)">
            <path d="M 30 50 Q 80 25 130 50" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
            <path d="M 30 70 Q 80 85 130 70" fill="none" stroke="#991b1b" strokeWidth="4" strokeLinecap="round" />
            <text x="80" y="105" fill="#f43f5e" fontSize="9" textAnchor="middle">বাইসেপস ও ট্রাইসেপস বিপরীতমুখী টান</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">পেশি টান ও লিগামেন্ট:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• টেন্ডন: ঘন শ্বেত তন্তুময় কলা (পেশিকে অস্থির সাথে যুক্ত করে)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• লিগামেন্ট: পীত স্থিতিস্থাপক কলা (অস্থির সাথে অস্থি)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অস্টিওপোরোসিস: ক্যালসিয়াম ঘাটতিতে ভঙ্গুর ও ছিদ্রযুক্ত অস্থি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.৪: অ্যাক্টিন ও মায়োসিন প্রোটিনের স্লাইডিং ফিলামেন্ট</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Actin & Myosin Sliding Filament Engine</text>
          <g transform="translate(60, 65)">
            <path d="M 30 50 Q 80 25 130 50" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
            <path d="M 30 70 Q 80 85 130 70" fill="none" stroke="#991b1b" strokeWidth="4" strokeLinecap="round" />
            <text x="80" y="105" fill="#f43f5e" fontSize="9" textAnchor="middle">বাইসেপস ও ট্রাইসেপস বিপরীতমুখী টান</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">পেশি টান ও লিগামেন্ট:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• টেন্ডন: ঘন শ্বেত তন্তুময় কলা (পেশিকে অস্থির সাথে যুক্ত করে)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• লিগামেন্ট: পীত স্থিতিস্থাপক কলা (অস্থির সাথে অস্থি)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অস্টিওপোরোসিস: ক্যালসিয়াম ঘাটতিতে ভঙ্গুর ও ছিদ্রযুক্ত অস্থি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.৪: বাইসেপস ও ট্রাইসেপসের বিপরীতমুখী পেশি টান</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Antagonistic Muscle Action Biceps/Triceps</text>
          <g transform="translate(60, 65)">
            <path d="M 30 50 Q 80 25 130 50" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
            <path d="M 30 70 Q 80 85 130 70" fill="none" stroke="#991b1b" strokeWidth="4" strokeLinecap="round" />
            <text x="80" y="105" fill="#f43f5e" fontSize="9" textAnchor="middle">বাইসেপস ও ট্রাইসেপস বিপরীতমুখী টান</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">পেশি টান ও লিগামেন্ট:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• টেন্ডন: ঘন শ্বেত তন্তুময় কলা (পেশিকে অস্থির সাথে যুক্ত করে)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• লিগামেন্ট: পীত স্থিতিস্থাপক কলা (অস্থির সাথে অস্থি)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অস্টিওপোরোসিস: ক্যালসিয়াম ঘাটতিতে ভঙ্গুর ও ছিদ্রযুক্ত অস্থি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.৫: টেন্ডন — পেশিকে অস্থির সাথে বাঁধনকারী শ্বেত তন্তু</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Tendon Inelastic White Collagen Fibers</text>
          <g transform="translate(60, 65)">
            <path d="M 30 50 Q 80 25 130 50" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
            <path d="M 30 70 Q 80 85 130 70" fill="none" stroke="#991b1b" strokeWidth="4" strokeLinecap="round" />
            <text x="80" y="105" fill="#f43f5e" fontSize="9" textAnchor="middle">বাইসেপস ও ট্রাইসেপস বিপরীতমুখী টান</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">পেশি টান ও লিগামেন্ট:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• টেন্ডন: ঘন শ্বেত তন্তুময় কলা (পেশিকে অস্থির সাথে যুক্ত করে)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• লিগামেন্ট: পীত স্থিতিস্থাপক কলা (অস্থির সাথে অস্থি)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অস্টিওপোরোসিস: ক্যালসিয়াম ঘাটতিতে ভঙ্গুর ও ছিদ্রযুক্ত অস্থি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.৫: লিগামেন্ট — অস্থিকে অস্থির সাথে যুক্তকারী পীত তন্তু</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Ligament Elastic Yellow Elastin Bands</text>
          <g transform="translate(60, 65)">
            <path d="M 30 50 Q 80 25 130 50" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
            <path d="M 30 70 Q 80 85 130 70" fill="none" stroke="#991b1b" strokeWidth="4" strokeLinecap="round" />
            <text x="80" y="105" fill="#f43f5e" fontSize="9" textAnchor="middle">বাইসেপস ও ট্রাইসেপস বিপরীতমুখী টান</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">পেশি টান ও লিগামেন্ট:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• টেন্ডন: ঘন শ্বেত তন্তুময় কলা (পেশিকে অস্থির সাথে যুক্ত করে)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• লিগামেন্ট: পীত স্থিতিস্থাপক কলা (অস্থির সাথে অস্থি)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অস্টিওপোরোসিস: ক্যালসিয়াম ঘাটতিতে ভঙ্গুর ও ছিদ্রযুক্ত অস্থি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.৬: অস্টিওপোরোসিস — অস্থির ক্যালসিয়াম ক্ষয় ও ছিদ্র</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Osteoporotic Bone Porosity & Brittleness</text>
          <g transform="translate(60, 65)">
            <path d="M 30 50 Q 80 25 130 50" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
            <path d="M 30 70 Q 80 85 130 70" fill="none" stroke="#991b1b" strokeWidth="4" strokeLinecap="round" />
            <text x="80" y="105" fill="#f43f5e" fontSize="9" textAnchor="middle">বাইসেপস ও ট্রাইসেপস বিপরীতমুখী টান</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">পেশি টান ও লিগামেন্ট:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• টেন্ডন: ঘন শ্বেত তন্তুময় কলা (পেশিকে অস্থির সাথে যুক্ত করে)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• লিগামেন্ট: পীত স্থিতিস্থাপক কলা (অস্থির সাথে অস্থি)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অস্টিওপোরোসিস: ক্যালসিয়াম ঘাটতিতে ভঙ্গুর ও ছিদ্রযুক্ত অস্থি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.৬: রিউমাটয়েড আর্থ্রাইটিস সন্ধি প্রদাহ ও ফোলা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Rheumatoid Arthritis Joint Erosion</text>
          <g transform="translate(60, 65)">
            <path d="M 30 50 Q 80 25 130 50" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
            <path d="M 30 70 Q 80 85 130 70" fill="none" stroke="#991b1b" strokeWidth="4" strokeLinecap="round" />
            <text x="80" y="105" fill="#f43f5e" fontSize="9" textAnchor="middle">বাইসেপস ও ট্রাইসেপস বিপরীতমুখী টান</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">পেশি টান ও লিগামেন্ট:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• টেন্ডন: ঘন শ্বেত তন্তুময় কলা (পেশিকে অস্থির সাথে যুক্ত করে)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• লিগামেন্ট: পীত স্থিতিস্থাপক কলা (অস্থির সাথে অস্থি)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অস্টিওপোরোসিস: ক্যালসিয়াম ঘাটতিতে ভঙ্গুর ও ছিদ্রযুক্ত অস্থি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৯.৬: অস্থিভঙ্গ ও ক্যালাস নিরাময় প্রক্রিয়া</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Bone Fracture & Callus Healing Remodeling</text>
          <g transform="translate(60, 65)">
            <path d="M 30 50 Q 80 25 130 50" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" />
            <path d="M 30 70 Q 80 85 130 70" fill="none" stroke="#991b1b" strokeWidth="4" strokeLinecap="round" />
            <text x="80" y="105" fill="#f43f5e" fontSize="9" textAnchor="middle">বাইসেপস ও ট্রাইসেপস বিপরীতমুখী টান</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
          <text x="15" y="24" fill="#f87171" fontSize="11" fontWeight="bold">পেশি টান ও লিগামেন্ট:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• টেন্ডন: ঘন শ্বেত তন্তুময় কলা (পেশিকে অস্থির সাথে যুক্ত করে)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• লিগামেন্ট: পীত স্থিতিস্থাপক কলা (অস্থির সাথে অস্থি)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অস্টিওপোরোসিস: ক্যালসিয়াম ঘাটতিতে ভঙ্গুর ও ছিদ্রযুক্ত অস্থি</text></g>
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
  // CHAPTER 10
  // ========================================================
  if (chNum === 10) {
    if (id === 1) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.১: উদ্ভিদ হরমোন — অক্সিন ও শীর্ষ প্রকটতা বৃদ্ধি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Plant Hormone Auxin Apical Dominance</text>
          <g transform="translate(80, 65)">
            <path d="M 60 100 Q 60 40 110 30" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" />
            <circle cx="130" cy="20" r="12" fill="#facc15" />
            <text x="80" y="115" fill="#4ade80" fontSize="8" textAnchor="middle">ফটোট্রপিজম — আলোমুখী বৃদ্ধি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#22c55e" strokeWidth="1" />
          <text x="15" y="24" fill="#4ade80" fontSize="11" fontWeight="bold">উদ্ভিদ হরমোন (ফাইটোহরমোন):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অক্সিন: শীর্ষ মুকুলের বৃদ্ধি ও আলোর বিপরীতে জমে কাণ্ড বাঁকায়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• জিবেরেলিন: খর্বাকৃতি উদ্ভিদের পর্বমধ্য দ্রুত দীর্ঘ করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ইথিলিন: গ্যাসীয় হরমোন যা প্রাকৃতিক ফল পাকাতে সাহায্য করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.১: ফটোট্রপিজম — উদ্ভিদের আলোকমুখী কাণ্ডের বাঁক</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Phototropism Stem Curvature to Sunlight</text>
          <g transform="translate(80, 65)">
            <path d="M 60 100 Q 60 40 110 30" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" />
            <circle cx="130" cy="20" r="12" fill="#facc15" />
            <text x="80" y="115" fill="#4ade80" fontSize="8" textAnchor="middle">ফটোট্রপিজম — আলোমুখী বৃদ্ধি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#22c55e" strokeWidth="1" />
          <text x="15" y="24" fill="#4ade80" fontSize="11" fontWeight="bold">উদ্ভিদ হরমোন (ফাইটোহরমোন):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অক্সিন: শীর্ষ মুকুলের বৃদ্ধি ও আলোর বিপরীতে জমে কাণ্ড বাঁকায়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• জিবেরেলিন: খর্বাকৃতি উদ্ভিদের পর্বমধ্য দ্রুত দীর্ঘ করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ইথিলিন: গ্যাসীয় হরমোন যা প্রাকৃতিক ফল পাকাতে সাহায্য করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.১: জিবেরেলিন ও সাইটোকাইনিনের পর্বমধ্য বৃদ্ধি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Gibberellin & Cytokinin Cell Growth</text>
          <g transform="translate(80, 65)">
            <path d="M 60 100 Q 60 40 110 30" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" />
            <circle cx="130" cy="20" r="12" fill="#facc15" />
            <text x="80" y="115" fill="#4ade80" fontSize="8" textAnchor="middle">ফটোট্রপিজম — আলোমুখী বৃদ্ধি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#22c55e" strokeWidth="1" />
          <text x="15" y="24" fill="#4ade80" fontSize="11" fontWeight="bold">উদ্ভিদ হরমোন (ফাইটোহরমোন):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অক্সিন: শীর্ষ মুকুলের বৃদ্ধি ও আলোর বিপরীতে জমে কাণ্ড বাঁকায়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• জিবেরেলিন: খর্বাকৃতি উদ্ভিদের পর্বমধ্য দ্রুত দীর্ঘ করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ইথিলিন: গ্যাসীয় হরমোন যা প্রাকৃতিক ফল পাকাতে সাহায্য করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.২: লজ্জাবতী পাতার সিসমোন্যাস্টিক চলন ও পালভিনাস</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Mimosa Pudica Seismonastic Leaf Folding</text>
          <g transform="translate(80, 65)">
            <path d="M 60 100 Q 60 40 110 30" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" />
            <circle cx="130" cy="20" r="12" fill="#facc15" />
            <text x="80" y="115" fill="#4ade80" fontSize="8" textAnchor="middle">ফটোট্রপিজম — আলোমুখী বৃদ্ধি</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#22c55e" strokeWidth="1" />
          <text x="15" y="24" fill="#4ade80" fontSize="11" fontWeight="bold">উদ্ভিদ হরমোন (ফাইটোহরমোন):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• অক্সিন: শীর্ষ মুকুলের বৃদ্ধি ও আলোর বিপরীতে জমে কাণ্ড বাঁকায়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• জিবেরেলিন: খর্বাকৃতি উদ্ভিদের পর্বমধ্য দ্রুত দীর্ঘ করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ইথিলিন: গ্যাসীয় হরমোন যা প্রাকৃতিক ফল পাকাতে সাহায্য করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৩: মানব স্নায়ুতন্ত্রের কেন্দ্রীয় ও প্রান্তীয় রূপরেখা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Human Nervous System Comprehensive 3D</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="45" rx="45" ry="30" fill="#6366f1" fillOpacity="0.4" stroke="#818cf8" strokeWidth="2" /><text x="60" y="48" fill="#fff" fontSize="8" textAnchor="middle">সেরিব্রাম</text>
            <circle cx="95" cy="75" r="16" fill="#7c3aed" /><text x="95" y="78" fill="#fff" fontSize="7" textAnchor="middle">লঘু</text>
            <line x1="60" y1="75" x2="60" y2="105" stroke="#38bdf8" strokeWidth="5" />
            <text x="65" y="118" fill="#a5b4fc" fontSize="8" textAnchor="middle">গুরুমস্তিষ্ক ও সুষুম্নাকাণ্ড</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#818cf8" strokeWidth="1" />
          <text x="15" y="24" fill="#a5b4fc" fontSize="11" fontWeight="bold">মানব মস্তিষ্ক ও স্নায়ুতন্ত্রের অংশ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সেরিব্রাম (গুরুমস্তিষ্ক): স্মৃতি, বুদ্ধি, চিন্তা ও অনুভূতির কেন্দ্র</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• সেরিবেলাম (লঘুমস্তিষ্ক): দেহের ভারসাম্য ও চলন সমন্বয় করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মেডুলা অবলংগাটা: হৃৎস্পন্দন, শ্বসন ও প্রতিবর্ত ক্রিয়া নিয়ন্ত্রণ</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৩: মানব মস্তিষ্ক — সেরিব্রাম, সেরিবেলাম ও ব্রেনস্টেম</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Human Brain Anatomy: Cerebrum & Cerebellum</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="45" rx="45" ry="30" fill="#6366f1" fillOpacity="0.4" stroke="#818cf8" strokeWidth="2" /><text x="60" y="48" fill="#fff" fontSize="8" textAnchor="middle">সেরিব্রাম</text>
            <circle cx="95" cy="75" r="16" fill="#7c3aed" /><text x="95" y="78" fill="#fff" fontSize="7" textAnchor="middle">লঘু</text>
            <line x1="60" y1="75" x2="60" y2="105" stroke="#38bdf8" strokeWidth="5" />
            <text x="65" y="118" fill="#a5b4fc" fontSize="8" textAnchor="middle">গুরুমস্তিষ্ক ও সুষুম্নাকাণ্ড</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#818cf8" strokeWidth="1" />
          <text x="15" y="24" fill="#a5b4fc" fontSize="11" fontWeight="bold">মানব মস্তিষ্ক ও স্নায়ুতন্ত্রের অংশ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সেরিব্রাম (গুরুমস্তিষ্ক): স্মৃতি, বুদ্ধি, চিন্তা ও অনুভূতির কেন্দ্র</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• সেরিবেলাম (লঘুমস্তিষ্ক): দেহের ভারসাম্য ও চলন সমন্বয় করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মেডুলা অবলংগাটা: হৃৎস্পন্দন, শ্বসন ও প্রতিবর্ত ক্রিয়া নিয়ন্ত্রণ</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৩: গুরুমস্তিষ্কের কর্টেক্স — ফ্রন্টাল ও প্যারাইটাল লোব</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Cerebral Cortex Lobes & Mental Faculties</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="45" rx="45" ry="30" fill="#6366f1" fillOpacity="0.4" stroke="#818cf8" strokeWidth="2" /><text x="60" y="48" fill="#fff" fontSize="8" textAnchor="middle">সেরিব্রাম</text>
            <circle cx="95" cy="75" r="16" fill="#7c3aed" /><text x="95" y="78" fill="#fff" fontSize="7" textAnchor="middle">লঘু</text>
            <line x1="60" y1="75" x2="60" y2="105" stroke="#38bdf8" strokeWidth="5" />
            <text x="65" y="118" fill="#a5b4fc" fontSize="8" textAnchor="middle">গুরুমস্তিষ্ক ও সুষুম্নাকাণ্ড</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#818cf8" strokeWidth="1" />
          <text x="15" y="24" fill="#a5b4fc" fontSize="11" fontWeight="bold">মানব মস্তিষ্ক ও স্নায়ুতন্ত্রের অংশ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সেরিব্রাম (গুরুমস্তিষ্ক): স্মৃতি, বুদ্ধি, চিন্তা ও অনুভূতির কেন্দ্র</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• সেরিবেলাম (লঘুমস্তিষ্ক): দেহের ভারসাম্য ও চলন সমন্বয় করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মেডুলা অবলংগাটা: হৃৎস্পন্দন, শ্বসন ও প্রতিবর্ত ক্রিয়া নিয়ন্ত্রণ</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৩: লঘুমস্তিষ্ক (Cerebellum) ও শারীরিক ভারসাম্য রক্ষা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Cerebellum & Motor Coordination Arbor Vitae</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="45" rx="45" ry="30" fill="#6366f1" fillOpacity="0.4" stroke="#818cf8" strokeWidth="2" /><text x="60" y="48" fill="#fff" fontSize="8" textAnchor="middle">সেরিব্রাম</text>
            <circle cx="95" cy="75" r="16" fill="#7c3aed" /><text x="95" y="78" fill="#fff" fontSize="7" textAnchor="middle">লঘু</text>
            <line x1="60" y1="75" x2="60" y2="105" stroke="#38bdf8" strokeWidth="5" />
            <text x="65" y="118" fill="#a5b4fc" fontSize="8" textAnchor="middle">গুরুমস্তিষ্ক ও সুষুম্নাকাণ্ড</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#818cf8" strokeWidth="1" />
          <text x="15" y="24" fill="#a5b4fc" fontSize="11" fontWeight="bold">মানব মস্তিষ্ক ও স্নায়ুতন্ত্রের অংশ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সেরিব্রাম (গুরুমস্তিষ্ক): স্মৃতি, বুদ্ধি, চিন্তা ও অনুভূতির কেন্দ্র</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• সেরিবেলাম (লঘুমস্তিষ্ক): দেহের ভারসাম্য ও চলন সমন্বয় করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মেডুলা অবলংগাটা: হৃৎস্পন্দন, শ্বসন ও প্রতিবর্ত ক্রিয়া নিয়ন্ত্রণ</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৩: সুষুম্নাকাণ্ডের প্রস্থচ্ছেদ ও এইচ-আকৃতির ধূসর বস্তু</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Spinal Cord Cross-Section H-Shaped Gray</text>
          <g transform="translate(70, 65)">
            <ellipse cx="60" cy="45" rx="45" ry="30" fill="#6366f1" fillOpacity="0.4" stroke="#818cf8" strokeWidth="2" /><text x="60" y="48" fill="#fff" fontSize="8" textAnchor="middle">সেরিব্রাম</text>
            <circle cx="95" cy="75" r="16" fill="#7c3aed" /><text x="95" y="78" fill="#fff" fontSize="7" textAnchor="middle">লঘু</text>
            <line x1="60" y1="75" x2="60" y2="105" stroke="#38bdf8" strokeWidth="5" />
            <text x="65" y="118" fill="#a5b4fc" fontSize="8" textAnchor="middle">গুরুমস্তিষ্ক ও সুষুম্নাকাণ্ড</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#818cf8" strokeWidth="1" />
          <text x="15" y="24" fill="#a5b4fc" fontSize="11" fontWeight="bold">মানব মস্তিষ্ক ও স্নায়ুতন্ত্রের অংশ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সেরিব্রাম (গুরুমস্তিষ্ক): স্মৃতি, বুদ্ধি, চিন্তা ও অনুভূতির কেন্দ্র</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• সেরিবেলাম (লঘুমস্তিষ্ক): দেহের ভারসাম্য ও চলন সমন্বয় করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• মেডুলা অবলংগাটা: হৃৎস্পন্দন, শ্বসন ও প্রতিবর্ত ক্রিয়া নিয়ন্ত্রণ</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৫: বহুমুখী মোটর নিউরনের সম্পূর্ণ ৩ডি গঠন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Multipolar Motor Neuron Architecture</text>
          <g transform="translate(60, 65)">
            <circle cx="35" cy="55" r="16" fill="#ea580c" /><line x1="51" y1="55" x2="140" y2="55" stroke="#f97316" strokeWidth="3" />
            <circle cx="80" cy="55" r="7" fill="#fdba74" /><circle cx="115" cy="55" r="7" fill="#fdba74" />
            <text x="80" y="105" fill="#fb923c" fontSize="9" textAnchor="middle">সাইন্যাপস ও নিউরোট্রান্সমিটার ভেসিকল</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1" />
          <text x="15" y="24" fill="#fb923c" fontSize="11" fontWeight="bold">স্নায়ু সাইন্যাপস ও প্রতিবর্ত চাপ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সাইন্যাপস: দুটি নিউরনের মধ্যবর্তী ২০ nm সূক্ষ্ম সংযোগস্থল</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• অ্যাসিটাইলকোলিন রাসায়নিকের মাধ্যমে স্নায়ু উদ্দীপনা পার হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• প্রতিবর্ত চাপের ৫ উপাদান: গ্রাহক → সংজ্ঞাবহ → কেন্দ্র → আজ্ঞাবহ → কারক</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৫: মায়েলিন সিথ ও র্যানভিয়ারের পর্ব সংকেত লাফানো</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Myelin Sheath & Nodes of Ranvier Jumps</text>
          <g transform="translate(60, 65)">
            <circle cx="35" cy="55" r="16" fill="#ea580c" /><line x1="51" y1="55" x2="140" y2="55" stroke="#f97316" strokeWidth="3" />
            <circle cx="80" cy="55" r="7" fill="#fdba74" /><circle cx="115" cy="55" r="7" fill="#fdba74" />
            <text x="80" y="105" fill="#fb923c" fontSize="9" textAnchor="middle">সাইন্যাপস ও নিউরোট্রান্সমিটার ভেসিকল</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1" />
          <text x="15" y="24" fill="#fb923c" fontSize="11" fontWeight="bold">স্নায়ু সাইন্যাপস ও প্রতিবর্ত চাপ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সাইন্যাপস: দুটি নিউরনের মধ্যবর্তী ২০ nm সূক্ষ্ম সংযোগস্থল</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• অ্যাসিটাইলকোলিন রাসায়নিকের মাধ্যমে স্নায়ু উদ্দীপনা পার হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• প্রতিবর্ত চাপের ৫ উপাদান: গ্রাহক → সংজ্ঞাবহ → কেন্দ্র → আজ্ঞাবহ → কারক</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৫: স্নায়ু সাইন্যাপস ও নিউরোট্রান্সমিটার ভেসিকল</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Chemical Synapse & Neurotransmitter Vesicles</text>
          <g transform="translate(60, 65)">
            <circle cx="35" cy="55" r="16" fill="#ea580c" /><line x1="51" y1="55" x2="140" y2="55" stroke="#f97316" strokeWidth="3" />
            <circle cx="80" cy="55" r="7" fill="#fdba74" /><circle cx="115" cy="55" r="7" fill="#fdba74" />
            <text x="80" y="105" fill="#fb923c" fontSize="9" textAnchor="middle">সাইন্যাপস ও নিউরোট্রান্সমিটার ভেসিকল</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1" />
          <text x="15" y="24" fill="#fb923c" fontSize="11" fontWeight="bold">স্নায়ু সাইন্যাপস ও প্রতিবর্ত চাপ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সাইন্যাপস: দুটি নিউরনের মধ্যবর্তী ২০ nm সূক্ষ্ম সংযোগস্থল</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• অ্যাসিটাইলকোলিন রাসায়নিকের মাধ্যমে স্নায়ু উদ্দীপনা পার হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• প্রতিবর্ত চাপের ৫ উপাদান: গ্রাহক → সংজ্ঞাবহ → কেন্দ্র → আজ্ঞাবহ → কারক</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৫: অ্যাকশন পটেনশিয়াল ও সোডিয়াম-পটাশিয়াম পাম্প</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Nerve Action Potential Na+/K+ ATPase Pump</text>
          <g transform="translate(60, 65)">
            <circle cx="35" cy="55" r="16" fill="#ea580c" /><line x1="51" y1="55" x2="140" y2="55" stroke="#f97316" strokeWidth="3" />
            <circle cx="80" cy="55" r="7" fill="#fdba74" /><circle cx="115" cy="55" r="7" fill="#fdba74" />
            <text x="80" y="105" fill="#fb923c" fontSize="9" textAnchor="middle">সাইন্যাপস ও নিউরোট্রান্সমিটার ভেসিকল</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1" />
          <text x="15" y="24" fill="#fb923c" fontSize="11" fontWeight="bold">স্নায়ু সাইন্যাপস ও প্রতিবর্ত চাপ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সাইন্যাপস: দুটি নিউরনের মধ্যবর্তী ২০ nm সূক্ষ্ম সংযোগস্থল</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• অ্যাসিটাইলকোলিন রাসায়নিকের মাধ্যমে স্নায়ু উদ্দীপনা পার হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• প্রতিবর্ত চাপের ৫ উপাদান: গ্রাহক → সংজ্ঞাবহ → কেন্দ্র → আজ্ঞাবহ → কারক</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৬: প্রতিবর্ত চাপ (Reflex Arc) — ৫টি উপাদান সার্কিট</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Reflex Arc 5-Component Neural Circuit</text>
          <g transform="translate(60, 65)">
            <circle cx="35" cy="55" r="16" fill="#ea580c" /><line x1="51" y1="55" x2="140" y2="55" stroke="#f97316" strokeWidth="3" />
            <circle cx="80" cy="55" r="7" fill="#fdba74" /><circle cx="115" cy="55" r="7" fill="#fdba74" />
            <text x="80" y="105" fill="#fb923c" fontSize="9" textAnchor="middle">সাইন্যাপস ও নিউরোট্রান্সমিটার ভেসিকল</text>
          </g>
          <g transform="translate(280, 65)"><rect x="0" y="0" width="360" height="110" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1" />
          <text x="15" y="24" fill="#fb923c" fontSize="11" fontWeight="bold">স্নায়ু সাইন্যাপস ও প্রতিবর্ত চাপ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• সাইন্যাপস: দুটি নিউরনের মধ্যবর্তী ২০ nm সূক্ষ্ম সংযোগস্থল</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• অ্যাসিটাইলকোলিন রাসায়নিকের মাধ্যমে স্নায়ু উদ্দীপনা পার হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• প্রতিবর্ত চাপের ৫ উপাদান: গ্রাহক → সংজ্ঞাবহ → কেন্দ্র → আজ্ঞাবহ → কারক</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৭: পিটুইটারি গ্রন্থি — মাস্টার গ্ল্যান্ড ও ট্রপিক হরমোন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Pituitary Gland Master Endocrine Regulator</text>
          <g transform="translate(70, 65)">
            <circle cx="40" cy="30" r="10" fill="#ec4899" /><text x="40" y="33" fill="#fff" fontSize="6" textAnchor="middle">পিটুই</text>
            <polygon points="40,55 55,75 25,75" fill="#a855f7" /><text x="40" y="70" fill="#fff" fontSize="6" textAnchor="middle">থাই</text>
            <rect x="25" y="85" width="30" height="16" rx="4" fill="#eab308" /><text x="40" y="96" fill="#fff" fontSize="6" textAnchor="middle">ইনসু</text>
            <text x="40" y="118" fill="#f472b6" fontSize="8" textAnchor="middle">মাস্টার গ্ল্যান্ড ও হরমোন</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ec4899" strokeWidth="1" />
          <text x="15" y="24" fill="#f472b6" fontSize="11" fontWeight="bold">অন্তঃক্ষরা গ্রন্থিতন্ত্র ও হরমোন:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পিটুইটারি গ্রন্থি: প্রভু গ্রন্থি (Master gland) যা অন্যান্যদের নিয়ন্ত্রণ করে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• থাইরয়েড: থাইরক্সিন হরমোন (আয়োডিন ঘাটতিতে গলগণ্ড বা গয়টার)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অগ্ন্যাশয়: ইনসুলিন হরমোন রক্তে অতিরিক্ত গ্লুকোজ বিপাক করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৭: থাইরয়েড গ্রন্থি ও বিপাকীয় হরমোন থাইরক্সিন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Thyroid Gland Follicles & Thyroxine (T4/T3)</text>
          <g transform="translate(70, 65)">
            <circle cx="40" cy="30" r="10" fill="#ec4899" /><text x="40" y="33" fill="#fff" fontSize="6" textAnchor="middle">পিটুই</text>
            <polygon points="40,55 55,75 25,75" fill="#a855f7" /><text x="40" y="70" fill="#fff" fontSize="6" textAnchor="middle">থাই</text>
            <rect x="25" y="85" width="30" height="16" rx="4" fill="#eab308" /><text x="40" y="96" fill="#fff" fontSize="6" textAnchor="middle">ইনসু</text>
            <text x="40" y="118" fill="#f472b6" fontSize="8" textAnchor="middle">মাস্টার গ্ল্যান্ড ও হরমোন</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ec4899" strokeWidth="1" />
          <text x="15" y="24" fill="#f472b6" fontSize="11" fontWeight="bold">অন্তঃক্ষরা গ্রন্থিতন্ত্র ও হরমোন:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পিটুইটারি গ্রন্থি: প্রভু গ্রন্থি (Master gland) যা অন্যান্যদের নিয়ন্ত্রণ করে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• থাইরয়েড: থাইরক্সিন হরমোন (আয়োডিন ঘাটতিতে গলগণ্ড বা গয়টার)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অগ্ন্যাশয়: ইনসুলিন হরমোন রক্তে অতিরিক্ত গ্লুকোজ বিপাক করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৭: আইলেটস অব ল্যাঙ্গারহ্যান্স — ইনসুলিন ও গ্লুকাগন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Islets of Langerhans: Alpha & Beta Cells</text>
          <g transform="translate(70, 65)">
            <circle cx="40" cy="30" r="10" fill="#ec4899" /><text x="40" y="33" fill="#fff" fontSize="6" textAnchor="middle">পিটুই</text>
            <polygon points="40,55 55,75 25,75" fill="#a855f7" /><text x="40" y="70" fill="#fff" fontSize="6" textAnchor="middle">থাই</text>
            <rect x="25" y="85" width="30" height="16" rx="4" fill="#eab308" /><text x="40" y="96" fill="#fff" fontSize="6" textAnchor="middle">ইনসু</text>
            <text x="40" y="118" fill="#f472b6" fontSize="8" textAnchor="middle">মাস্টার গ্ল্যান্ড ও হরমোন</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ec4899" strokeWidth="1" />
          <text x="15" y="24" fill="#f472b6" fontSize="11" fontWeight="bold">অন্তঃক্ষরা গ্রন্থিতন্ত্র ও হরমোন:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পিটুইটারি গ্রন্থি: প্রভু গ্রন্থি (Master gland) যা অন্যান্যদের নিয়ন্ত্রণ করে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• থাইরয়েড: থাইরক্সিন হরমোন (আয়োডিন ঘাটতিতে গলগণ্ড বা গয়টার)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অগ্ন্যাশয়: ইনসুলিন হরমোন রক্তে অতিরিক্ত গ্লুকোজ বিপাক করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৭: অ্যাড্রেনাল গ্রন্থি ও জরুরি হরমোন অ্যাড্রেনালিন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Adrenal Gland Cortex & Medulla Epinephrine</text>
          <g transform="translate(70, 65)">
            <circle cx="40" cy="30" r="10" fill="#ec4899" /><text x="40" y="33" fill="#fff" fontSize="6" textAnchor="middle">পিটুই</text>
            <polygon points="40,55 55,75 25,75" fill="#a855f7" /><text x="40" y="70" fill="#fff" fontSize="6" textAnchor="middle">থাই</text>
            <rect x="25" y="85" width="30" height="16" rx="4" fill="#eab308" /><text x="40" y="96" fill="#fff" fontSize="6" textAnchor="middle">ইনসু</text>
            <text x="40" y="118" fill="#f472b6" fontSize="8" textAnchor="middle">মাস্টার গ্ল্যান্ড ও হরমোন</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ec4899" strokeWidth="1" />
          <text x="15" y="24" fill="#f472b6" fontSize="11" fontWeight="bold">অন্তঃক্ষরা গ্রন্থিতন্ত্র ও হরমোন:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পিটুইটারি গ্রন্থি: প্রভু গ্রন্থি (Master gland) যা অন্যান্যদের নিয়ন্ত্রণ করে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• থাইরয়েড: থাইরক্সিন হরমোন (আয়োডিন ঘাটতিতে গলগণ্ড বা গয়টার)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অগ্ন্যাশয়: ইনসুলিন হরমোন রক্তে অতিরিক্ত গ্লুকোজ বিপাক করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৮: ডায়াবেটিস মেলিটাস — রক্তে উচ্চ গ্লুকোজ বিপাক</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Diabetes Mellitus Hyperglycemia Pathology</text>
          <g transform="translate(70, 65)">
            <circle cx="40" cy="30" r="10" fill="#ec4899" /><text x="40" y="33" fill="#fff" fontSize="6" textAnchor="middle">পিটুই</text>
            <polygon points="40,55 55,75 25,75" fill="#a855f7" /><text x="40" y="70" fill="#fff" fontSize="6" textAnchor="middle">থাই</text>
            <rect x="25" y="85" width="30" height="16" rx="4" fill="#eab308" /><text x="40" y="96" fill="#fff" fontSize="6" textAnchor="middle">ইনসু</text>
            <text x="40" y="118" fill="#f472b6" fontSize="8" textAnchor="middle">মাস্টার গ্ল্যান্ড ও হরমোন</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ec4899" strokeWidth="1" />
          <text x="15" y="24" fill="#f472b6" fontSize="11" fontWeight="bold">অন্তঃক্ষরা গ্রন্থিতন্ত্র ও হরমোন:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পিটুইটারি গ্রন্থি: প্রভু গ্রন্থি (Master gland) যা অন্যান্যদের নিয়ন্ত্রণ করে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• থাইরয়েড: থাইরক্সিন হরমোন (আয়োডিন ঘাটতিতে গলগণ্ড বা গয়টার)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অগ্ন্যাশয়: ইনসুলিন হরমোন রক্তে অতিরিক্ত গ্লুকোজ বিপাক করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১০.৮: গলগণ্ড (Goiter) — আয়োডিন ঘাটতিতে থাইরয়েড স্ফীতি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Endemic Goiter Thyroid Hypertrophy</text>
          <g transform="translate(70, 65)">
            <circle cx="40" cy="30" r="10" fill="#ec4899" /><text x="40" y="33" fill="#fff" fontSize="6" textAnchor="middle">পিটুই</text>
            <polygon points="40,55 55,75 25,75" fill="#a855f7" /><text x="40" y="70" fill="#fff" fontSize="6" textAnchor="middle">থাই</text>
            <rect x="25" y="85" width="30" height="16" rx="4" fill="#eab308" /><text x="40" y="96" fill="#fff" fontSize="6" textAnchor="middle">ইনসু</text>
            <text x="40" y="118" fill="#f472b6" fontSize="8" textAnchor="middle">মাস্টার গ্ল্যান্ড ও হরমোন</text>
          </g>
          <g transform="translate(270, 65)"><rect x="0" y="0" width="370" height="110" rx="8" fill="#0f172a" stroke="#ec4899" strokeWidth="1" />
          <text x="15" y="24" fill="#f472b6" fontSize="11" fontWeight="bold">অন্তঃক্ষরা গ্রন্থিতন্ত্র ও হরমোন:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পিটুইটারি গ্রন্থি: প্রভু গ্রন্থি (Master gland) যা অন্যান্যদের নিয়ন্ত্রণ করে</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• থাইরয়েড: থাইরক্সিন হরমোন (আয়োডিন ঘাটতিতে গলগণ্ড বা গয়টার)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অগ্ন্যাশয়: ইনসুলিন হরমোন রক্তে অতিরিক্ত গ্লুকোজ বিপাক করে</text></g>
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