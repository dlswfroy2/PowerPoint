/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';
import { Biology3DModelMeta } from '../data/biology3DModelsCatalog';

export function renderBiologyCh1to5Diagram(
  chNum: number,
  currentModel: Biology3DModelMeta,
  highlightedLabel: number | null
): React.ReactNode {
  const id = currentModel.id;
  const labels = currentModel.labels || [];

  // ========================================================
  // CHAPTER 1
  // ========================================================
  if (chNum === 1) {
    if (id === 1) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.১: জীববিজ্ঞানের ধারণা ও প্রোটোপ্লাজম</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Biology Scope & Protoplasm</text>
          <ellipse cx="200" cy="125" rx="110" ry="60" fill="#064e3b" fillOpacity="0.4" stroke="#10b981" strokeWidth="2.5" strokeDasharray="5 3" />
          <circle cx="180" cy="120" r="28" fill="#0f766e" fillOpacity="0.6" stroke="#2dd4bf" strokeWidth="2" />
          <circle cx="180" cy="120" r="10" fill="#14b8a6" />
          <text x="180" y="165" fill="#a7f3d0" fontSize="9" textAnchor="middle">সজীব প্রোটোপ্লাজমীয় ধাত্র (জীবনের ভৌত ভিত্তি)</text>
          <g transform="translate(360, 65)"><rect x="0" y="0" width="280" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">জীববিজ্ঞান পরিচিতি ও পরিধি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• Bios (জীবন) + Logos (জ্ঞান) = Biology</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• থমাস হাক্সলি: প্রোটোপ্লাজম জীবনের ভৌত ভিত্তি</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• মৌলিক বৈশিষ্ট্য: শ্বসন, রেচন, প্রজনন ও সংবেদন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.১: ডিএনএ ডাবল হেলিক্স ও ক্ষারক বন্ধন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">DNA Double Helix & Base Pairs</text>
          <ellipse cx="200" cy="125" rx="110" ry="60" fill="#064e3b" fillOpacity="0.4" stroke="#10b981" strokeWidth="2.5" strokeDasharray="5 3" />
          <circle cx="180" cy="120" r="28" fill="#0f766e" fillOpacity="0.6" stroke="#2dd4bf" strokeWidth="2" />
          <circle cx="180" cy="120" r="10" fill="#14b8a6" />
          <text x="180" y="165" fill="#a7f3d0" fontSize="9" textAnchor="middle">সজীব প্রোটোপ্লাজমীয় ধাত্র (জীবনের ভৌত ভিত্তি)</text>
          <g transform="translate(360, 65)"><rect x="0" y="0" width="280" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">জীববিজ্ঞান পরিচিতি ও পরিধি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• Bios (জীবন) + Logos (জ্ঞান) = Biology</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• থমাস হাক্সলি: প্রোটোপ্লাজম জীবনের ভৌত ভিত্তি</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• মৌলিক বৈশিষ্ট্য: শ্বসন, রেচন, প্রজনন ও সংবেদন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.২: জীববিজ্ঞানের শাখা — ভৌত ও ফলিত</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Branches of Biology</text>
          <ellipse cx="200" cy="125" rx="110" ry="60" fill="#064e3b" fillOpacity="0.4" stroke="#10b981" strokeWidth="2.5" strokeDasharray="5 3" />
          <circle cx="180" cy="120" r="28" fill="#0f766e" fillOpacity="0.6" stroke="#2dd4bf" strokeWidth="2" />
          <circle cx="180" cy="120" r="10" fill="#14b8a6" />
          <text x="180" y="165" fill="#a7f3d0" fontSize="9" textAnchor="middle">সজীব প্রোটোপ্লাজমীয় ধাত্র (জীবনের ভৌত ভিত্তি)</text>
          <g transform="translate(360, 65)"><rect x="0" y="0" width="280" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">জীববিজ্ঞান পরিচিতি ও পরিধি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• Bios (জীবন) + Logos (জ্ঞান) = Biology</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• থমাস হাক্সলি: প্রোটোপ্লাজম জীবনের ভৌত ভিত্তি</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• মৌলিক বৈশিষ্ট্য: শ্বসন, রেচন, প্রজনন ও সংবেদন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৫: মনেরা রাজ্য — ব্যাকটেরিয়ার নিউক্লিয়য়েড</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Kingdom Monera: Bacterial Cell</text>
          <rect x="80" y="70" width="120" height="60" rx="30" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="2" />
          <path d="M 110 100 Q 140 85 170 100" fill="none" stroke="#f43f5e" strokeWidth="2.5" />
          <text x="140" y="145" fill="#38bdf8" fontSize="9" textAnchor="middle">মনেরা (ব্যাক্টেরিয়া)</text>
          <path d="M 240 100 Q 220 70 250 65 T 290 85 T 310 120 T 270 135 T 235 120 Z" fill="#4338ca" fillOpacity="0.4" stroke="#818cf8" strokeWidth="2" />
          <circle cx="270" cy="100" r="12" fill="#6366f1" />
          <text x="270" y="145" fill="#818cf8" fontSize="9" textAnchor="middle">প্রোটিস্টা (অ্যামিবা)</text>
          <g transform="translate(360, 65)"><rect x="0" y="0" width="280" height="110" rx="8" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">অণুজীব ও এককোষী বৈশিষ্ট্য:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• মনেরা: আদিকোষী, পেপটিডোগ্লাইকান প্রাচীর, ৭০S রাইবোসোম</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• প্রোটিস্টা: প্রকৃত এককোষী, ক্ষণপদ ও সংকোচনশীল গহ্বর</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ফানজাই: মৃতজীবী কাইটিন প্রাচীর ও স্পোর বিস্তার</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৫: প্রোটিস্টা রাজ্য — অ্যামিবা ও ক্ষণপদ চলন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Kingdom Protista: Amoeba & Pseudopodia</text>
          <rect x="80" y="70" width="120" height="60" rx="30" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="2" />
          <path d="M 110 100 Q 140 85 170 100" fill="none" stroke="#f43f5e" strokeWidth="2.5" />
          <text x="140" y="145" fill="#38bdf8" fontSize="9" textAnchor="middle">মনেরা (ব্যাক্টেরিয়া)</text>
          <path d="M 240 100 Q 220 70 250 65 T 290 85 T 310 120 T 270 135 T 235 120 Z" fill="#4338ca" fillOpacity="0.4" stroke="#818cf8" strokeWidth="2" />
          <circle cx="270" cy="100" r="12" fill="#6366f1" />
          <text x="270" y="145" fill="#818cf8" fontSize="9" textAnchor="middle">প্রোটিস্টা (অ্যামিবা)</text>
          <g transform="translate(360, 65)"><rect x="0" y="0" width="280" height="110" rx="8" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">অণুজীব ও এককোষী বৈশিষ্ট্য:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• মনেরা: আদিকোষী, পেপটিডোগ্লাইকান প্রাচীর, ৭০S রাইবোসোম</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• প্রোটিস্টা: প্রকৃত এককোষী, ক্ষণপদ ও সংকোচনশীল গহ্বর</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ফানজাই: মৃতজীবী কাইটিন প্রাচীর ও স্পোর বিস্তার</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৫: ফানজাই রাজ্য — মাশরুম ও মাইসেলিয়াম</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Kingdom Fungi: Mushroom & Mycelium</text>
          <rect x="80" y="70" width="120" height="60" rx="30" fill="#0369a1" fillOpacity="0.4" stroke="#38bdf8" strokeWidth="2" />
          <path d="M 110 100 Q 140 85 170 100" fill="none" stroke="#f43f5e" strokeWidth="2.5" />
          <text x="140" y="145" fill="#38bdf8" fontSize="9" textAnchor="middle">মনেরা (ব্যাক্টেরিয়া)</text>
          <path d="M 240 100 Q 220 70 250 65 T 290 85 T 310 120 T 270 135 T 235 120 Z" fill="#4338ca" fillOpacity="0.4" stroke="#818cf8" strokeWidth="2" />
          <circle cx="270" cy="100" r="12" fill="#6366f1" />
          <text x="270" y="145" fill="#818cf8" fontSize="9" textAnchor="middle">প্রোটিস্টা (অ্যামিবা)</text>
          <g transform="translate(360, 65)"><rect x="0" y="0" width="280" height="110" rx="8" fill="#0f172a" stroke="#0284c7" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">অণুজীব ও এককোষী বৈশিষ্ট্য:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• মনেরা: আদিকোষী, পেপটিডোগ্লাইকান প্রাচীর, ৭০S রাইবোসোম</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• প্রোটিস্টা: প্রকৃত এককোষী, ক্ষণপদ ও সংকোচনশীল গহ্বর</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ফানজাই: মৃতজীবী কাইটিন প্রাচীর ও স্পোর বিস্তার</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৫: প্লান্টি রাজ্য — সপুষ্পক উদ্ভিদের কাঠামো</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Kingdom Plantae: Higher Plant</text>
          <g transform="translate(70, 65)">
            <rect x="0" y="0" width="220" height="14" rx="3" fill="#ef4444" /><text x="110" y="11" fill="#fff" fontSize="8" textAnchor="middle">Kingdom (রাজ্য)</text>
            <rect x="15" y="17" width="190" height="14" rx="3" fill="#f97316" /><text x="110" y="28" fill="#fff" fontSize="8" textAnchor="middle">Phylum (পর্ব)</text>
            <rect x="30" y="34" width="160" height="14" rx="3" fill="#eab308" /><text x="110" y="45" fill="#fff" fontSize="8" textAnchor="middle">Class (শ্রেণি)</text>
            <rect x="45" y="51" width="130" height="14" rx="3" fill="#10b981" /><text x="110" y="62" fill="#fff" fontSize="8" textAnchor="middle">Order (বর্গ)</text>
            <rect x="60" y="68" width="100" height="14" rx="3" fill="#06b6d4" /><text x="110" y="79" fill="#fff" fontSize="8" textAnchor="middle">Family (গোত্র)</text>
            <rect x="75" y="85" width="70" height="14" rx="3" fill="#6366f1" /><text x="110" y="96" fill="#fff" fontSize="8" textAnchor="middle">Genus (গণ)</text>
            <rect x="85" y="102" width="50" height="14" rx="3" fill="#a855f7" /><text x="110" y="113" fill="#fff" fontSize="8" textAnchor="middle">Species</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="115" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#10b981" fontSize="11" fontWeight="bold">ট্যাক্সনমির ৭টি ধাপ ও মানুষের শ্রেণিবিন্যাস:</text>
          <text x="15" y="45" fill="#e2e8f0" fontSize="10">১. Animalia  ২. Chordata  ৩. Mammalia</text>
          <text x="15" y="65" fill="#cbd5e1" fontSize="10">৪. Primates  ৫. Hominidae  ৬. Homo</text>
          <text x="15" y="85" fill="#facc15" fontSize="10">৭. Homo sapiens (মানুষের দ্বিপদ বৈজ্ঞানিক নাম)</text>
          <text x="15" y="103" fill="#38bdf8" fontSize="9">প্রবর্তক: ক্যারোলাস লিনিয়াস (শ্রেণিবিন্যাসের জনক)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৫: অ্যানিম্যালিয়া রাজ্য — বহুকোষী প্রাণী দেহ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Kingdom Animalia: Multicellular Animal</text>
          <g transform="translate(70, 65)">
            <rect x="0" y="0" width="220" height="14" rx="3" fill="#ef4444" /><text x="110" y="11" fill="#fff" fontSize="8" textAnchor="middle">Kingdom (রাজ্য)</text>
            <rect x="15" y="17" width="190" height="14" rx="3" fill="#f97316" /><text x="110" y="28" fill="#fff" fontSize="8" textAnchor="middle">Phylum (পর্ব)</text>
            <rect x="30" y="34" width="160" height="14" rx="3" fill="#eab308" /><text x="110" y="45" fill="#fff" fontSize="8" textAnchor="middle">Class (শ্রেণি)</text>
            <rect x="45" y="51" width="130" height="14" rx="3" fill="#10b981" /><text x="110" y="62" fill="#fff" fontSize="8" textAnchor="middle">Order (বর্গ)</text>
            <rect x="60" y="68" width="100" height="14" rx="3" fill="#06b6d4" /><text x="110" y="79" fill="#fff" fontSize="8" textAnchor="middle">Family (গোত্র)</text>
            <rect x="75" y="85" width="70" height="14" rx="3" fill="#6366f1" /><text x="110" y="96" fill="#fff" fontSize="8" textAnchor="middle">Genus (গণ)</text>
            <rect x="85" y="102" width="50" height="14" rx="3" fill="#a855f7" /><text x="110" y="113" fill="#fff" fontSize="8" textAnchor="middle">Species</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="115" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#10b981" fontSize="11" fontWeight="bold">ট্যাক্সনমির ৭টি ধাপ ও মানুষের শ্রেণিবিন্যাস:</text>
          <text x="15" y="45" fill="#e2e8f0" fontSize="10">১. Animalia  ২. Chordata  ৩. Mammalia</text>
          <text x="15" y="65" fill="#cbd5e1" fontSize="10">৪. Primates  ৫. Hominidae  ৬. Homo</text>
          <text x="15" y="85" fill="#facc15" fontSize="10">৭. Homo sapiens (মানুষের দ্বিপদ বৈজ্ঞানিক নাম)</text>
          <text x="15" y="103" fill="#38bdf8" fontSize="9">প্রবর্তক: ক্যারোলাস লিনিয়াস (শ্রেণিবিন্যাসের জনক)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৩: টি২ ব্যাকটেরিওফাজ ভাইরাস — প্রোটিন ক্যাপসিড</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">T2 Bacteriophage Virus Structure</text>
          <g transform="translate(70, 65)">
            <rect x="0" y="0" width="220" height="14" rx="3" fill="#ef4444" /><text x="110" y="11" fill="#fff" fontSize="8" textAnchor="middle">Kingdom (রাজ্য)</text>
            <rect x="15" y="17" width="190" height="14" rx="3" fill="#f97316" /><text x="110" y="28" fill="#fff" fontSize="8" textAnchor="middle">Phylum (পর্ব)</text>
            <rect x="30" y="34" width="160" height="14" rx="3" fill="#eab308" /><text x="110" y="45" fill="#fff" fontSize="8" textAnchor="middle">Class (শ্রেণি)</text>
            <rect x="45" y="51" width="130" height="14" rx="3" fill="#10b981" /><text x="110" y="62" fill="#fff" fontSize="8" textAnchor="middle">Order (বর্গ)</text>
            <rect x="60" y="68" width="100" height="14" rx="3" fill="#06b6d4" /><text x="110" y="79" fill="#fff" fontSize="8" textAnchor="middle">Family (গোত্র)</text>
            <rect x="75" y="85" width="70" height="14" rx="3" fill="#6366f1" /><text x="110" y="96" fill="#fff" fontSize="8" textAnchor="middle">Genus (গণ)</text>
            <rect x="85" y="102" width="50" height="14" rx="3" fill="#a855f7" /><text x="110" y="113" fill="#fff" fontSize="8" textAnchor="middle">Species</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="115" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#10b981" fontSize="11" fontWeight="bold">ট্যাক্সনমির ৭টি ধাপ ও মানুষের শ্রেণিবিন্যাস:</text>
          <text x="15" y="45" fill="#e2e8f0" fontSize="10">১. Animalia  ২. Chordata  ৩. Mammalia</text>
          <text x="15" y="65" fill="#cbd5e1" fontSize="10">৪. Primates  ৫. Hominidae  ৬. Homo</text>
          <text x="15" y="85" fill="#facc15" fontSize="10">৭. Homo sapiens (মানুষের দ্বিপদ বৈজ্ঞানিক নাম)</text>
          <text x="15" y="103" fill="#38bdf8" fontSize="9">প্রবর্তক: ক্যারোলাস লিনিয়াস (শ্রেণিবিন্যাসের জনক)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৫: নস্টক ফিলামেন্ট ও হেটারোসিস্ট</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Nostoc Filament & Heterocyst</text>
          <g transform="translate(70, 65)">
            <rect x="0" y="0" width="220" height="14" rx="3" fill="#ef4444" /><text x="110" y="11" fill="#fff" fontSize="8" textAnchor="middle">Kingdom (রাজ্য)</text>
            <rect x="15" y="17" width="190" height="14" rx="3" fill="#f97316" /><text x="110" y="28" fill="#fff" fontSize="8" textAnchor="middle">Phylum (পর্ব)</text>
            <rect x="30" y="34" width="160" height="14" rx="3" fill="#eab308" /><text x="110" y="45" fill="#fff" fontSize="8" textAnchor="middle">Class (শ্রেণি)</text>
            <rect x="45" y="51" width="130" height="14" rx="3" fill="#10b981" /><text x="110" y="62" fill="#fff" fontSize="8" textAnchor="middle">Order (বর্গ)</text>
            <rect x="60" y="68" width="100" height="14" rx="3" fill="#06b6d4" /><text x="110" y="79" fill="#fff" fontSize="8" textAnchor="middle">Family (গোত্র)</text>
            <rect x="75" y="85" width="70" height="14" rx="3" fill="#6366f1" /><text x="110" y="96" fill="#fff" fontSize="8" textAnchor="middle">Genus (গণ)</text>
            <rect x="85" y="102" width="50" height="14" rx="3" fill="#a855f7" /><text x="110" y="113" fill="#fff" fontSize="8" textAnchor="middle">Species</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="115" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#10b981" fontSize="11" fontWeight="bold">ট্যাক্সনমির ৭টি ধাপ ও মানুষের শ্রেণিবিন্যাস:</text>
          <text x="15" y="45" fill="#e2e8f0" fontSize="10">১. Animalia  ২. Chordata  ৩. Mammalia</text>
          <text x="15" y="65" fill="#cbd5e1" fontSize="10">৪. Primates  ৫. Hominidae  ৬. Homo</text>
          <text x="15" y="85" fill="#facc15" fontSize="10">৭. Homo sapiens (মানুষের দ্বিপদ বৈজ্ঞানিক নাম)</text>
          <text x="15" y="103" fill="#38bdf8" fontSize="9">প্রবর্তক: ক্যারোলাস লিনিয়াস (শ্রেণিবিন্যাসের জনক)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৪: ট্যাক্সনমিক হায়ারার্কি — ৭টি ধাপের পিরামিড</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Taxonomic Hierarchy 7-Level Pyramid</text>
          <g transform="translate(70, 65)">
            <rect x="0" y="0" width="220" height="14" rx="3" fill="#ef4444" /><text x="110" y="11" fill="#fff" fontSize="8" textAnchor="middle">Kingdom (রাজ্য)</text>
            <rect x="15" y="17" width="190" height="14" rx="3" fill="#f97316" /><text x="110" y="28" fill="#fff" fontSize="8" textAnchor="middle">Phylum (পর্ব)</text>
            <rect x="30" y="34" width="160" height="14" rx="3" fill="#eab308" /><text x="110" y="45" fill="#fff" fontSize="8" textAnchor="middle">Class (শ্রেণি)</text>
            <rect x="45" y="51" width="130" height="14" rx="3" fill="#10b981" /><text x="110" y="62" fill="#fff" fontSize="8" textAnchor="middle">Order (বর্গ)</text>
            <rect x="60" y="68" width="100" height="14" rx="3" fill="#06b6d4" /><text x="110" y="79" fill="#fff" fontSize="8" textAnchor="middle">Family (গোত্র)</text>
            <rect x="75" y="85" width="70" height="14" rx="3" fill="#6366f1" /><text x="110" y="96" fill="#fff" fontSize="8" textAnchor="middle">Genus (গণ)</text>
            <rect x="85" y="102" width="50" height="14" rx="3" fill="#a855f7" /><text x="110" y="113" fill="#fff" fontSize="8" textAnchor="middle">Species</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="115" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#10b981" fontSize="11" fontWeight="bold">ট্যাক্সনমির ৭টি ধাপ ও মানুষের শ্রেণিবিন্যাস:</text>
          <text x="15" y="45" fill="#e2e8f0" fontSize="10">১. Animalia  ২. Chordata  ৩. Mammalia</text>
          <text x="15" y="65" fill="#cbd5e1" fontSize="10">৪. Primates  ৫. Hominidae  ৬. Homo</text>
          <text x="15" y="85" fill="#facc15" fontSize="10">৭. Homo sapiens (মানুষের দ্বিপদ বৈজ্ঞানিক নাম)</text>
          <text x="15" y="103" fill="#38bdf8" fontSize="9">প্রবর্তক: ক্যারোলাস লিনিয়াস (শ্রেণিবিন্যাসের জনক)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৬: দ্বিপদ নামকরণের নিয়মাবলী ও লিনিয়ান মডেল</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Binomial Nomenclature & Linnaeus Model</text>
          <g transform="translate(80, 68)"><rect x="0" y="0" width="240" height="105" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="120" y="22" fill="#facc15" fontSize="11" textAnchor="middle" fontWeight="bold">দ্বিপদ নামকরণের মৌলিক নিয়ম</text>
          <text x="15" y="44" fill="#e2e8f0" fontSize="10">১. ল্যাটিন বা ল্যাটিনাইজড শব্দে নামকরণ</text>
          <text x="15" y="64" fill="#e2e8f0" fontSize="10">২. দুটি পদ: ১ম গণ (বড় হাত) + ২য় প্রজাতি (ছোট হাত)</text>
          <text x="15" y="84" fill="#38bdf8" fontSize="10">৩. মুদ্রণে ইটালিক্স, হাতে লিখলে পৃথক নিম্নরেখা</text></g>
          <g transform="translate(350, 68)"><rect x="0" y="0" width="290" height="105" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="15" y="22" fill="#38bdf8" fontSize="11" fontWeight="bold">পাঠ্যবইয়ের গুরুত্বপূর্ণ উদাহরণ:</text>
          <text x="15" y="44" fill="#cbd5e1" fontSize="10">• কাতলা মাছ: <tspan fontStyle="italic" fill="#facc15">Catla catla</tspan></text>
          <text x="15" y="64" fill="#cbd5e1" fontSize="10">• দোয়েল পাখি: <tspan fontStyle="italic" fill="#facc15">Copsychus saularis</tspan></text>
          <text x="15" y="84" fill="#cbd5e1" fontSize="10">• কাঁঠাল: <tspan fontStyle="italic" fill="#facc15">Artocarpus heterophyllus</tspan></text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৫: মারগুলিসের ২ সুপারকিংডম ও ৫ রাজ্য</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Margulis 2 Superkingdoms System</text>
          <g transform="translate(80, 68)"><rect x="0" y="0" width="240" height="105" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="120" y="22" fill="#facc15" fontSize="11" textAnchor="middle" fontWeight="bold">দ্বিপদ নামকরণের মৌলিক নিয়ম</text>
          <text x="15" y="44" fill="#e2e8f0" fontSize="10">১. ল্যাটিন বা ল্যাটিনাইজড শব্দে নামকরণ</text>
          <text x="15" y="64" fill="#e2e8f0" fontSize="10">২. দুটি পদ: ১ম গণ (বড় হাত) + ২য় প্রজাতি (ছোট হাত)</text>
          <text x="15" y="84" fill="#38bdf8" fontSize="10">৩. মুদ্রণে ইটালিক্স, হাতে লিখলে পৃথক নিম্নরেখা</text></g>
          <g transform="translate(350, 68)"><rect x="0" y="0" width="290" height="105" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="15" y="22" fill="#38bdf8" fontSize="11" fontWeight="bold">পাঠ্যবইয়ের গুরুত্বপূর্ণ উদাহরণ:</text>
          <text x="15" y="44" fill="#cbd5e1" fontSize="10">• কাতলা মাছ: <tspan fontStyle="italic" fill="#facc15">Catla catla</tspan></text>
          <text x="15" y="64" fill="#cbd5e1" fontSize="10">• দোয়েল পাখি: <tspan fontStyle="italic" fill="#facc15">Copsychus saularis</tspan></text>
          <text x="15" y="84" fill="#cbd5e1" fontSize="10">• কাঁঠাল: <tspan fontStyle="italic" fill="#facc15">Artocarpus heterophyllus</tspan></text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৩: ড্রসোফিলা ফলমাছি — জেনেটিক্সের মডেল জীব</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Drosophila Melanogaster Model Organism</text>
          <g transform="translate(80, 68)"><rect x="0" y="0" width="240" height="105" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="120" y="22" fill="#facc15" fontSize="11" textAnchor="middle" fontWeight="bold">দ্বিপদ নামকরণের মৌলিক নিয়ম</text>
          <text x="15" y="44" fill="#e2e8f0" fontSize="10">১. ল্যাটিন বা ল্যাটিনাইজড শব্দে নামকরণ</text>
          <text x="15" y="64" fill="#e2e8f0" fontSize="10">২. দুটি পদ: ১ম গণ (বড় হাত) + ২য় প্রজাতি (ছোট হাত)</text>
          <text x="15" y="84" fill="#38bdf8" fontSize="10">৩. মুদ্রণে ইটালিক্স, হাতে লিখলে পৃথক নিম্নরেখা</text></g>
          <g transform="translate(350, 68)"><rect x="0" y="0" width="290" height="105" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="15" y="22" fill="#38bdf8" fontSize="11" fontWeight="bold">পাঠ্যবইয়ের গুরুত্বপূর্ণ উদাহরণ:</text>
          <text x="15" y="44" fill="#cbd5e1" fontSize="10">• কাতলা মাছ: <tspan fontStyle="italic" fill="#facc15">Catla catla</tspan></text>
          <text x="15" y="64" fill="#cbd5e1" fontSize="10">• দোয়েল পাখি: <tspan fontStyle="italic" fill="#facc15">Copsychus saularis</tspan></text>
          <text x="15" y="84" fill="#cbd5e1" fontSize="10">• কাঁঠাল: <tspan fontStyle="italic" fill="#facc15">Artocarpus heterophyllus</tspan></text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৫: ইউগ্লেনা — প্রাণী ও উদ্ভিদের সংযোগকারী</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Euglena Flagellate Organism</text>
          <g transform="translate(80, 68)"><rect x="0" y="0" width="240" height="105" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="120" y="22" fill="#facc15" fontSize="11" textAnchor="middle" fontWeight="bold">দ্বিপদ নামকরণের মৌলিক নিয়ম</text>
          <text x="15" y="44" fill="#e2e8f0" fontSize="10">১. ল্যাটিন বা ল্যাটিনাইজড শব্দে নামকরণ</text>
          <text x="15" y="64" fill="#e2e8f0" fontSize="10">২. দুটি পদ: ১ম গণ (বড় হাত) + ২য় প্রজাতি (ছোট হাত)</text>
          <text x="15" y="84" fill="#38bdf8" fontSize="10">৩. মুদ্রণে ইটালিক্স, হাতে লিখলে পৃথক নিম্নরেখা</text></g>
          <g transform="translate(350, 68)"><rect x="0" y="0" width="290" height="105" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="15" y="22" fill="#38bdf8" fontSize="11" fontWeight="bold">পাঠ্যবইয়ের গুরুত্বপূর্ণ উদাহরণ:</text>
          <text x="15" y="44" fill="#cbd5e1" fontSize="10">• কাতলা মাছ: <tspan fontStyle="italic" fill="#facc15">Catla catla</tspan></text>
          <text x="15" y="64" fill="#cbd5e1" fontSize="10">• দোয়েল পাখি: <tspan fontStyle="italic" fill="#facc15">Copsychus saularis</tspan></text>
          <text x="15" y="84" fill="#cbd5e1" fontSize="10">• কাঁঠাল: <tspan fontStyle="italic" fill="#facc15">Artocarpus heterophyllus</tspan></text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৫: লাইকেন — শৈবাল ও ছত্রাকের মিথোজীবিতা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Lichen Symbiosis: Alga & Fungus</text>
          <g transform="translate(60, 68)"><rect x="0" y="0" width="270" height="110" rx="8" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="135" y="22" fill="#c084fc" fontSize="11" textAnchor="middle" fontWeight="bold">হুইটেকারের পঞ্চরাজ্য শ্রেণিবিন্যাস</text>
          <rect x="15" y="36" width="70" height="24" rx="4" fill="#0284c7" /><text x="50" y="52" fill="#fff" fontSize="9" textAnchor="middle">মনেরা</text>
          <rect x="100" y="36" width="70" height="24" rx="4" fill="#6366f1" /><text x="135" y="52" fill="#fff" fontSize="9" textAnchor="middle">প্রোটিস্টা</text>
          <rect x="185" y="36" width="70" height="24" rx="4" fill="#d97706" /><text x="220" y="52" fill="#fff" fontSize="9" textAnchor="middle">ফানজাই</text>
          <rect x="55" y="70" width="75" height="24" rx="4" fill="#059669" /><text x="92" y="86" fill="#fff" fontSize="9" textAnchor="middle">প্লান্টি</text>
          <rect x="145" y="70" width="75" height="24" rx="4" fill="#dc2626" /><text x="182" y="86" fill="#fff" fontSize="9" textAnchor="middle">অ্যানিম্যালিয়া</text></g>
          <g transform="translate(360, 68)"><rect x="0" y="0" width="280" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">শ্রেণিবিন্যাসের মূল ভিত্তি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• কোষীয় সংগঠন: প্রোক্যারিওটা বনাম ইউক্যারিওটা</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• পুষ্টি পদ্ধতি: সালোকসংশ্লেষণ, শোষণ ও হলোজোয়িক</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• প্রজনন ও ভ্রূণ বিকাশগত বৈশিষ্ট্য</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৪: ব্যাকটেরিয়াল বৃত্তাকার প্লাজমিড ডিএনএ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Bacterial Circular Plasmid DNA</text>
          <g transform="translate(60, 68)"><rect x="0" y="0" width="270" height="110" rx="8" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="135" y="22" fill="#c084fc" fontSize="11" textAnchor="middle" fontWeight="bold">হুইটেকারের পঞ্চরাজ্য শ্রেণিবিন্যাস</text>
          <rect x="15" y="36" width="70" height="24" rx="4" fill="#0284c7" /><text x="50" y="52" fill="#fff" fontSize="9" textAnchor="middle">মনেরা</text>
          <rect x="100" y="36" width="70" height="24" rx="4" fill="#6366f1" /><text x="135" y="52" fill="#fff" fontSize="9" textAnchor="middle">প্রোটিস্টা</text>
          <rect x="185" y="36" width="70" height="24" rx="4" fill="#d97706" /><text x="220" y="52" fill="#fff" fontSize="9" textAnchor="middle">ফানজাই</text>
          <rect x="55" y="70" width="75" height="24" rx="4" fill="#059669" /><text x="92" y="86" fill="#fff" fontSize="9" textAnchor="middle">প্লান্টি</text>
          <rect x="145" y="70" width="75" height="24" rx="4" fill="#dc2626" /><text x="182" y="86" fill="#fff" fontSize="9" textAnchor="middle">অ্যানিম্যালিয়া</text></g>
          <g transform="translate(360, 68)"><rect x="0" y="0" width="280" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">শ্রেণিবিন্যাসের মূল ভিত্তি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• কোষীয় সংগঠন: প্রোক্যারিওটা বনাম ইউক্যারিওটা</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• পুষ্টি পদ্ধতি: সালোকসংশ্লেষণ, শোষণ ও হলোজোয়িক</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• প্রজনন ও ভ্রূণ বিকাশগত বৈশিষ্ট্য</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৫: স্পাইরোগাইরা শৈবাল ও সর্পিলাকার প্লাস্টিড</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Spirogyra Spiral Chloroplast</text>
          <g transform="translate(60, 68)"><rect x="0" y="0" width="270" height="110" rx="8" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="135" y="22" fill="#c084fc" fontSize="11" textAnchor="middle" fontWeight="bold">হুইটেকারের পঞ্চরাজ্য শ্রেণিবিন্যাস</text>
          <rect x="15" y="36" width="70" height="24" rx="4" fill="#0284c7" /><text x="50" y="52" fill="#fff" fontSize="9" textAnchor="middle">মনেরা</text>
          <rect x="100" y="36" width="70" height="24" rx="4" fill="#6366f1" /><text x="135" y="52" fill="#fff" fontSize="9" textAnchor="middle">প্রোটিস্টা</text>
          <rect x="185" y="36" width="70" height="24" rx="4" fill="#d97706" /><text x="220" y="52" fill="#fff" fontSize="9" textAnchor="middle">ফানজাই</text>
          <rect x="55" y="70" width="75" height="24" rx="4" fill="#059669" /><text x="92" y="86" fill="#fff" fontSize="9" textAnchor="middle">প্লান্টি</text>
          <rect x="145" y="70" width="75" height="24" rx="4" fill="#dc2626" /><text x="182" y="86" fill="#fff" fontSize="9" textAnchor="middle">অ্যানিম্যালিয়া</text></g>
          <g transform="translate(360, 68)"><rect x="0" y="0" width="280" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">শ্রেণিবিন্যাসের মূল ভিত্তি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• কোষীয় সংগঠন: প্রোক্যারিওটা বনাম ইউক্যারিওটা</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• পুষ্টি পদ্ধতি: সালোকসংশ্লেষণ, শোষণ ও হলোজোয়িক</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• প্রজনন ও ভ্রূণ বিকাশগত বৈশিষ্ট্য</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.৬: মানুষ ও ধান — লিনিয়ান দ্বিপদ নমুনা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Homo Sapiens & Oryza Sativa</text>
          <g transform="translate(60, 68)"><rect x="0" y="0" width="270" height="110" rx="8" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="135" y="22" fill="#c084fc" fontSize="11" textAnchor="middle" fontWeight="bold">হুইটেকারের পঞ্চরাজ্য শ্রেণিবিন্যাস</text>
          <rect x="15" y="36" width="70" height="24" rx="4" fill="#0284c7" /><text x="50" y="52" fill="#fff" fontSize="9" textAnchor="middle">মনেরা</text>
          <rect x="100" y="36" width="70" height="24" rx="4" fill="#6366f1" /><text x="135" y="52" fill="#fff" fontSize="9" textAnchor="middle">প্রোটিস্টা</text>
          <rect x="185" y="36" width="70" height="24" rx="4" fill="#d97706" /><text x="220" y="52" fill="#fff" fontSize="9" textAnchor="middle">ফানজাই</text>
          <rect x="55" y="70" width="75" height="24" rx="4" fill="#059669" /><text x="92" y="86" fill="#fff" fontSize="9" textAnchor="middle">প্লান্টি</text>
          <rect x="145" y="70" width="75" height="24" rx="4" fill="#dc2626" /><text x="182" y="86" fill="#fff" fontSize="9" textAnchor="middle">অ্যানিম্যালিয়া</text></g>
          <g transform="translate(360, 68)"><rect x="0" y="0" width="280" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">শ্রেণিবিন্যাসের মূল ভিত্তি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• কোষীয় সংগঠন: প্রোক্যারিওটা বনাম ইউক্যারিওটা</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• পুষ্টি পদ্ধতি: সালোকসংশ্লেষণ, শোষণ ও হলোজোয়িক</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• প্রজনন ও ভ্রূণ বিকাশগত বৈশিষ্ট্য</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ১.১: আধুনিক জীববৈচিত্র্য সংরক্ষণ নেটওয়ার্ক</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Biodiversity Conservation Biosphere</text>
          <g transform="translate(60, 68)"><rect x="0" y="0" width="270" height="110" rx="8" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
          <text x="135" y="22" fill="#c084fc" fontSize="11" textAnchor="middle" fontWeight="bold">হুইটেকারের পঞ্চরাজ্য শ্রেণিবিন্যাস</text>
          <rect x="15" y="36" width="70" height="24" rx="4" fill="#0284c7" /><text x="50" y="52" fill="#fff" fontSize="9" textAnchor="middle">মনেরা</text>
          <rect x="100" y="36" width="70" height="24" rx="4" fill="#6366f1" /><text x="135" y="52" fill="#fff" fontSize="9" textAnchor="middle">প্রোটিস্টা</text>
          <rect x="185" y="36" width="70" height="24" rx="4" fill="#d97706" /><text x="220" y="52" fill="#fff" fontSize="9" textAnchor="middle">ফানজাই</text>
          <rect x="55" y="70" width="75" height="24" rx="4" fill="#059669" /><text x="92" y="86" fill="#fff" fontSize="9" textAnchor="middle">প্লান্টি</text>
          <rect x="145" y="70" width="75" height="24" rx="4" fill="#dc2626" /><text x="182" y="86" fill="#fff" fontSize="9" textAnchor="middle">অ্যানিম্যালিয়া</text></g>
          <g transform="translate(360, 68)"><rect x="0" y="0" width="280" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">শ্রেণিবিন্যাসের মূল ভিত্তি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• কোষীয় সংগঠন: প্রোক্যারিওটা বনাম ইউক্যারিওটা</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• পুষ্টি পদ্ধতি: সালোকসংশ্লেষণ, শোষণ ও হলোজোয়িক</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• প্রজনন ও ভ্রূণ বিকাশগত বৈশিষ্ট্য</text></g>
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
  // CHAPTER 2
  // ========================================================
  if (chNum === 2) {
    if (id === 1) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.২: উদ্ভিদকোষের সামগ্রিক রূপরেখা ও পুরু প্রাচীর</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Plant Cell Architecture & Wall</text>
          <g transform="translate(70, 65)">
            <rect x="0" y="0" width="240" height="110" rx="14" fill="#064e3b" fillOpacity="0.4" stroke="#10b981" strokeWidth="3" />
            <rect x="10" y="10" width="220" height="90" rx="10" fill="#047857" fillOpacity="0.3" stroke="#34d399" strokeWidth="1.5" />
            <ellipse cx="120" cy="55" rx="70" ry="35" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1" />
            <circle cx="180" cy="40" r="16" fill="#7c3aed" fillOpacity="0.6" stroke="#c084fc" strokeWidth="1" />
            <text x="120" y="58" fill="#e0f2fe" fontSize="9" textAnchor="middle">বৃহৎ কেন্দ্রীয় কোষগহ্বর</text>
            <text x="180" y="44" fill="#ffffff" fontSize="8" textAnchor="middle">নিউক্লিয়াস</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদকোষ ও প্রাচীরের স্তরবিন্যাস:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. মধ্যপর্দা (Middle Lamella): পেকটিক এসিড স্তর</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. প্রাথমিক প্রাচীর: সেলুলোজ ও হেমিসেলুলোজ</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. গৌণ প্রাচীর: লিগনিনযুক্ত তিনস্তর বিশিষ্ট পুরু প্রাচীর</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.২: প্রাণীকোষের সামগ্রিক রূপরেখা ও ঝিল্লি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Animal Cell Internal Cytology</text>
          <g transform="translate(70, 65)">
            <rect x="0" y="0" width="240" height="110" rx="14" fill="#064e3b" fillOpacity="0.4" stroke="#10b981" strokeWidth="3" />
            <rect x="10" y="10" width="220" height="90" rx="10" fill="#047857" fillOpacity="0.3" stroke="#34d399" strokeWidth="1.5" />
            <ellipse cx="120" cy="55" rx="70" ry="35" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1" />
            <circle cx="180" cy="40" r="16" fill="#7c3aed" fillOpacity="0.6" stroke="#c084fc" strokeWidth="1" />
            <text x="120" y="58" fill="#e0f2fe" fontSize="9" textAnchor="middle">বৃহৎ কেন্দ্রীয় কোষগহ্বর</text>
            <text x="180" y="44" fill="#ffffff" fontSize="8" textAnchor="middle">নিউক্লিয়াস</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদকোষ ও প্রাচীরের স্তরবিন্যাস:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. মধ্যপর্দা (Middle Lamella): পেকটিক এসিড স্তর</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. প্রাথমিক প্রাচীর: সেলুলোজ ও হেমিসেলুলোজ</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. গৌণ প্রাচীর: লিগনিনযুক্ত তিনস্তর বিশিষ্ট পুরু প্রাচীর</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.২: প্লাজমামেমব্রেন বা ফ্লুইড মোজাইক মডেল</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Fluid Mosaic Membrane Model</text>
          <g transform="translate(70, 65)">
            <rect x="0" y="0" width="240" height="110" rx="14" fill="#064e3b" fillOpacity="0.4" stroke="#10b981" strokeWidth="3" />
            <rect x="10" y="10" width="220" height="90" rx="10" fill="#047857" fillOpacity="0.3" stroke="#34d399" strokeWidth="1.5" />
            <ellipse cx="120" cy="55" rx="70" ry="35" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1" />
            <circle cx="180" cy="40" r="16" fill="#7c3aed" fillOpacity="0.6" stroke="#c084fc" strokeWidth="1" />
            <text x="120" y="58" fill="#e0f2fe" fontSize="9" textAnchor="middle">বৃহৎ কেন্দ্রীয় কোষগহ্বর</text>
            <text x="180" y="44" fill="#ffffff" fontSize="8" textAnchor="middle">নিউক্লিয়াস</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদকোষ ও প্রাচীরের স্তরবিন্যাস:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. মধ্যপর্দা (Middle Lamella): পেকটিক এসিড স্তর</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. প্রাথমিক প্রাচীর: সেলুলোজ ও হেমিসেলুলোজ</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. গৌণ প্রাচীর: লিগনিনযুক্ত তিনস্তর বিশিষ্ট পুরু প্রাচীর</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৩: মাইটোকন্ড্রিয়া — কোষের শক্তিকেন্দ্র</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Mitochondrion Powerhouse 3D</text>
          <g transform="translate(60, 65)">
            <ellipse cx="120" cy="55" rx="110" ry="50" fill="#831843" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2.5" />
            <path d="M 40 55 C 60 25, 90 85, 120 55 S 150 25, 180 55 S 200 85, 210 55" fill="none" stroke="#fb7185" strokeWidth="3" />
            <text x="120" y="90" fill="#fecdd3" fontSize="9" textAnchor="middle">মাইটোকন্ড্রিয়া — ক্রিস্টি ও ম্যাট্রিক্স</text>
          </g>
          <g transform="translate(350, 65)"><rect x="0" y="0" width="290" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#fb7185" fontSize="11" fontWeight="bold">কোষের শক্তিঘর (পাওয়ার হাউস):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• দ্বি-স্তর বিশিষ্ট লিপিড-প্রোটিন একক পর্দা</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ভেতরের ভাঁজকে ক্রিস্টি (Cristae) বলা হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ক্রেবস চক্র ও ইলেকট্রন ট্রান্সপোর্ট চেইন সম্পন্ন হয়</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৩: ক্লোরোপ্লাস্ট — গ্রানা থাইলাকয়েড ও স্ট্রোমা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Chloroplast Grana & Stroma Folds</text>
          <g transform="translate(60, 65)">
            <ellipse cx="120" cy="55" rx="110" ry="50" fill="#831843" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2.5" />
            <path d="M 40 55 C 60 25, 90 85, 120 55 S 150 25, 180 55 S 200 85, 210 55" fill="none" stroke="#fb7185" strokeWidth="3" />
            <text x="120" y="90" fill="#fecdd3" fontSize="9" textAnchor="middle">মাইটোকন্ড্রিয়া — ক্রিস্টি ও ম্যাট্রিক্স</text>
          </g>
          <g transform="translate(350, 65)"><rect x="0" y="0" width="290" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#fb7185" fontSize="11" fontWeight="bold">কোষের শক্তিঘর (পাওয়ার হাউস):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• দ্বি-স্তর বিশিষ্ট লিপিড-প্রোটিন একক পর্দা</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ভেতরের ভাঁজকে ক্রিস্টি (Cristae) বলা হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ক্রেবস চক্র ও ইলেকট্রন ট্রান্সপোর্ট চেইন সম্পন্ন হয়</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৩: এন্ডোপ্লাজমিক রেটিকুলাম — অমসৃণ ও মসৃণ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Rough & Smooth Endoplasmic Reticulum</text>
          <g transform="translate(60, 65)">
            <ellipse cx="120" cy="55" rx="110" ry="50" fill="#831843" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2.5" />
            <path d="M 40 55 C 60 25, 90 85, 120 55 S 150 25, 180 55 S 200 85, 210 55" fill="none" stroke="#fb7185" strokeWidth="3" />
            <text x="120" y="90" fill="#fecdd3" fontSize="9" textAnchor="middle">মাইটোকন্ড্রিয়া — ক্রিস্টি ও ম্যাট্রিক্স</text>
          </g>
          <g transform="translate(350, 65)"><rect x="0" y="0" width="290" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#fb7185" fontSize="11" fontWeight="bold">কোষের শক্তিঘর (পাওয়ার হাউস):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• দ্বি-স্তর বিশিষ্ট লিপিড-প্রোটিন একক পর্দা</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ভেতরের ভাঁজকে ক্রিস্টি (Cristae) বলা হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ক্রেবস চক্র ও ইলেকট্রন ট্রান্সপোর্ট চেইন সম্পন্ন হয়</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৩: গলগি বডি — ক্ষরণকারী সিস্টার্নি স্তূপ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Golgi Apparatus Cisternae Stacks</text>
          <g transform="translate(60, 65)">
            <ellipse cx="120" cy="55" rx="110" ry="50" fill="#831843" fillOpacity="0.4" stroke="#f43f5e" strokeWidth="2.5" />
            <path d="M 40 55 C 60 25, 90 85, 120 55 S 150 25, 180 55 S 200 85, 210 55" fill="none" stroke="#fb7185" strokeWidth="3" />
            <text x="120" y="90" fill="#fecdd3" fontSize="9" textAnchor="middle">মাইটোকন্ড্রিয়া — ক্রিস্টি ও ম্যাট্রিক্স</text>
          </g>
          <g transform="translate(350, 65)"><rect x="0" y="0" width="290" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#fb7185" fontSize="11" fontWeight="bold">কোষের শক্তিঘর (পাওয়ার হাউস):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• দ্বি-স্তর বিশিষ্ট লিপিড-প্রোটিন একক পর্দা</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ভেতরের ভাঁজকে ক্রিস্টি (Cristae) বলা হয়</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ক্রেবস চক্র ও ইলেকট্রন ট্রান্সপোর্ট চেইন সম্পন্ন হয়</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৩: লাইসোজোম — আত্মঘাতী হাইড্রোলাইটিক থলিকা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Lysosome Hydrolytic Digestion Bag</text>
          <g transform="translate(80, 65)">
            <circle cx="100" cy="55" r="50" fill="#1e1b4b" fillOpacity="0.5" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="6 3" />
            <circle cx="100" cy="55" r="18" fill="#4338ca" stroke="#c7d2fe" strokeWidth="1" />
            <path d="M 75 40 Q 100 70 120 40 T 110 75" fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
            <text x="100" y="95" fill="#c7d2fe" fontSize="9" textAnchor="middle">নিউক্লিয়াস ও ক্রোমাটিন তন্তু</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#6366f1" strokeWidth="1" />
          <text x="15" y="24" fill="#a5b4fc" fontSize="11" fontWeight="bold">নিউক্লিয়াসের ৪টি প্রধান উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. নিউক্লিয়ার পর্দা (ছিদ্রযুক্ত দ্বি-স্তর)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. নিউক্লিওপ্লাজম ও ঘন গোলাকার নিউক্লিওলাস</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. ক্রোমাটিন জালিকা (DNA ও হিস্টোন প্রোটিন)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৩: সেন্ট্রোসোম ও ত্রয়ী সেন্ট্রিওল জোড়</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Centrosome & Triplet Centrioles</text>
          <g transform="translate(80, 65)">
            <circle cx="100" cy="55" r="50" fill="#1e1b4b" fillOpacity="0.5" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="6 3" />
            <circle cx="100" cy="55" r="18" fill="#4338ca" stroke="#c7d2fe" strokeWidth="1" />
            <path d="M 75 40 Q 100 70 120 40 T 110 75" fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
            <text x="100" y="95" fill="#c7d2fe" fontSize="9" textAnchor="middle">নিউক্লিয়াস ও ক্রোমাটিন তন্তু</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#6366f1" strokeWidth="1" />
          <text x="15" y="24" fill="#a5b4fc" fontSize="11" fontWeight="bold">নিউক্লিয়াসের ৪টি প্রধান উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. নিউক্লিয়ার পর্দা (ছিদ্রযুক্ত দ্বি-স্তর)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. নিউক্লিওপ্লাজম ও ঘন গোলাকার নিউক্লিওলাস</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. ক্রোমাটিন জালিকা (DNA ও হিস্টোন প্রোটিন)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৪: কোষীয় নিউক্লিয়াস ও ক্রোমাটিন জালিকা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Cell Nucleus & Chromatin Reticulum</text>
          <g transform="translate(80, 65)">
            <circle cx="100" cy="55" r="50" fill="#1e1b4b" fillOpacity="0.5" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="6 3" />
            <circle cx="100" cy="55" r="18" fill="#4338ca" stroke="#c7d2fe" strokeWidth="1" />
            <path d="M 75 40 Q 100 70 120 40 T 110 75" fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
            <text x="100" y="95" fill="#c7d2fe" fontSize="9" textAnchor="middle">নিউক্লিয়াস ও ক্রোমাটিন তন্তু</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#6366f1" strokeWidth="1" />
          <text x="15" y="24" fill="#a5b4fc" fontSize="11" fontWeight="bold">নিউক্লিয়াসের ৪টি প্রধান উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. নিউক্লিয়ার পর্দা (ছিদ্রযুক্ত দ্বি-স্তর)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. নিউক্লিওপ্লাজম ও ঘন গোলাকার নিউক্লিওলাস</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. ক্রোমাটিন জালিকা (DNA ও হিস্টোন প্রোটিন)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৩: রাইবোসোম — ৬০S ও ৪০S সাবইউনিট</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Ribosomal Subunits 60S/40S Unit</text>
          <g transform="translate(80, 65)">
            <circle cx="100" cy="55" r="50" fill="#1e1b4b" fillOpacity="0.5" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="6 3" />
            <circle cx="100" cy="55" r="18" fill="#4338ca" stroke="#c7d2fe" strokeWidth="1" />
            <path d="M 75 40 Q 100 70 120 40 T 110 75" fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
            <text x="100" y="95" fill="#c7d2fe" fontSize="9" textAnchor="middle">নিউক্লিয়াস ও ক্রোমাটিন তন্তু</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#6366f1" strokeWidth="1" />
          <text x="15" y="24" fill="#a5b4fc" fontSize="11" fontWeight="bold">নিউক্লিয়াসের ৪টি প্রধান উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. নিউক্লিয়ার পর্দা (ছিদ্রযুক্ত দ্বি-স্তর)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. নিউক্লিওপ্লাজম ও ঘন গোলাকার নিউক্লিওলাস</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. ক্রোমাটিন জালিকা (DNA ও হিস্টোন প্রোটিন)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৫: প্যারেনকাইমা টিস্যু ও আন্তঃকোষীয় ফাঁক</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Parenchyma Simple Tissue & Spaces</text>
          <g transform="translate(80, 65)">
            <circle cx="100" cy="55" r="50" fill="#1e1b4b" fillOpacity="0.5" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="6 3" />
            <circle cx="100" cy="55" r="18" fill="#4338ca" stroke="#c7d2fe" strokeWidth="1" />
            <path d="M 75 40 Q 100 70 120 40 T 110 75" fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
            <text x="100" y="95" fill="#c7d2fe" fontSize="9" textAnchor="middle">নিউক্লিয়াস ও ক্রোমাটিন তন্তু</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#6366f1" strokeWidth="1" />
          <text x="15" y="24" fill="#a5b4fc" fontSize="11" fontWeight="bold">নিউক্লিয়াসের ৪টি প্রধান উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. নিউক্লিয়ার পর্দা (ছিদ্রযুক্ত দ্বি-স্তর)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. নিউক্লিওপ্লাজম ও ঘন গোলাকার নিউক্লিওলাস</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. ক্রোমাটিন জালিকা (DNA ও হিস্টোন প্রোটিন)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৫: কোলেনকাইমা টিস্যু — কোণায় পেকটিন পুরুত্ব</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Collenchyma Angular Thickening</text>
          <g transform="translate(80, 65)">
            <circle cx="100" cy="55" r="50" fill="#1e1b4b" fillOpacity="0.5" stroke="#6366f1" strokeWidth="2.5" strokeDasharray="6 3" />
            <circle cx="100" cy="55" r="18" fill="#4338ca" stroke="#c7d2fe" strokeWidth="1" />
            <path d="M 75 40 Q 100 70 120 40 T 110 75" fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
            <text x="100" y="95" fill="#c7d2fe" fontSize="9" textAnchor="middle">নিউক্লিয়াস ও ক্রোমাটিন তন্তু</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#6366f1" strokeWidth="1" />
          <text x="15" y="24" fill="#a5b4fc" fontSize="11" fontWeight="bold">নিউক্লিয়াসের ৪টি প্রধান উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. নিউক্লিয়ার পর্দা (ছিদ্রযুক্ত দ্বি-স্তর)</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. নিউক্লিওপ্লাজম ও ঘন গোলাকার নিউক্লিওলাস</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৩. ক্রোমাটিন জালিকা (DNA ও হিস্টোন প্রোটিন)</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৫: স্ক্লেরেনকাইমা — স্টোন সেল ও বাস্ট ফাইবার</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Sclerenchyma Stone Cell & Sclerite</text>
          <g transform="translate(60, 65)">
            <circle cx="60" cy="35" r="22" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="100" cy="35" r="22" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="80" cy="70" r="22" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <rect x="145" y="15" width="40" height="75" rx="5" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="145" y1="40" x2="185" y2="40" stroke="#facc15" strokeWidth="2" strokeDasharray="3 2" />
            <text x="80" y="105" fill="#34d399" fontSize="9" textAnchor="middle">প্যারেনকাইমা</text>
            <text x="165" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">জাইলেম/ফ্লোয়েম</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদ টিস্যু ও পরিবহনতন্ত্র:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্যারেনকাইমা: পাতলা সেলুলোজ প্রাচীর, আন্তঃকোষীয় ফাঁক</text>
          <text x="15" y="66" fill="#38bdf8" fontSize="10">• জাইলেম: ট্রাকিড, ভেসেল — ঊর্ধ্বমুখী পানি পরিবহন</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ফ্লোয়েম: সীভনল, সঙ্গীকোষ — উভয়মুখী খাদ্য পরিবহন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৫: জাইলেম ভেসেল ও ট্রাকিড পানি পাইপ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Xylem Vessel & Tracheid Pipeline</text>
          <g transform="translate(60, 65)">
            <circle cx="60" cy="35" r="22" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="100" cy="35" r="22" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="80" cy="70" r="22" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <rect x="145" y="15" width="40" height="75" rx="5" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="145" y1="40" x2="185" y2="40" stroke="#facc15" strokeWidth="2" strokeDasharray="3 2" />
            <text x="80" y="105" fill="#34d399" fontSize="9" textAnchor="middle">প্যারেনকাইমা</text>
            <text x="165" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">জাইলেম/ফ্লোয়েম</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদ টিস্যু ও পরিবহনতন্ত্র:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্যারেনকাইমা: পাতলা সেলুলোজ প্রাচীর, আন্তঃকোষীয় ফাঁক</text>
          <text x="15" y="66" fill="#38bdf8" fontSize="10">• জাইলেম: ট্রাকিড, ভেসেল — ঊর্ধ্বমুখী পানি পরিবহন</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ফ্লোয়েম: সীভনল, সঙ্গীকোষ — উভয়মুখী খাদ্য পরিবহন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৫: ফ্লোয়েম সিভনল ও নিউক্লিয়াসযুক্ত সঙ্গী কোষ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Phloem Sieve Tube & Companion Cell</text>
          <g transform="translate(60, 65)">
            <circle cx="60" cy="35" r="22" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="100" cy="35" r="22" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="80" cy="70" r="22" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <rect x="145" y="15" width="40" height="75" rx="5" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="145" y1="40" x2="185" y2="40" stroke="#facc15" strokeWidth="2" strokeDasharray="3 2" />
            <text x="80" y="105" fill="#34d399" fontSize="9" textAnchor="middle">প্যারেনকাইমা</text>
            <text x="165" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">জাইলেম/ফ্লোয়েম</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদ টিস্যু ও পরিবহনতন্ত্র:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্যারেনকাইমা: পাতলা সেলুলোজ প্রাচীর, আন্তঃকোষীয় ফাঁক</text>
          <text x="15" y="66" fill="#38bdf8" fontSize="10">• জাইলেম: ট্রাকিড, ভেসেল — ঊর্ধ্বমুখী পানি পরিবহন</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ফ্লোয়েম: সীভনল, সঙ্গীকোষ — উভয়মুখী খাদ্য পরিবহন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৬: আবরণী টিস্যু — স্কোয়ামাস ও কিউবয়ডাল</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Epithelial Tissue Lining Layers</text>
          <g transform="translate(60, 65)">
            <circle cx="60" cy="35" r="22" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="100" cy="35" r="22" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="80" cy="70" r="22" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <rect x="145" y="15" width="40" height="75" rx="5" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="145" y1="40" x2="185" y2="40" stroke="#facc15" strokeWidth="2" strokeDasharray="3 2" />
            <text x="80" y="105" fill="#34d399" fontSize="9" textAnchor="middle">প্যারেনকাইমা</text>
            <text x="165" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">জাইলেম/ফ্লোয়েম</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদ টিস্যু ও পরিবহনতন্ত্র:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্যারেনকাইমা: পাতলা সেলুলোজ প্রাচীর, আন্তঃকোষীয় ফাঁক</text>
          <text x="15" y="66" fill="#38bdf8" fontSize="10">• জাইলেম: ট্রাকিড, ভেসেল — ঊর্ধ্বমুখী পানি পরিবহন</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ফ্লোয়েম: সীভনল, সঙ্গীকোষ — উভয়মুখী খাদ্য পরিবহন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৬: ঐচ্ছিক কঙ্কাল পেশি ও অনৈচ্ছিক অন্ত্র পেশি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Striated Skeletal & Smooth Muscle</text>
          <g transform="translate(60, 65)">
            <circle cx="60" cy="35" r="22" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="100" cy="35" r="22" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="80" cy="70" r="22" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <rect x="145" y="15" width="40" height="75" rx="5" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="145" y1="40" x2="185" y2="40" stroke="#facc15" strokeWidth="2" strokeDasharray="3 2" />
            <text x="80" y="105" fill="#34d399" fontSize="9" textAnchor="middle">প্যারেনকাইমা</text>
            <text x="165" y="105" fill="#38bdf8" fontSize="9" textAnchor="middle">জাইলেম/ফ্লোয়েম</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">উদ্ভিদ টিস্যু ও পরিবহনতন্ত্র:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্যারেনকাইমা: পাতলা সেলুলোজ প্রাচীর, আন্তঃকোষীয় ফাঁক</text>
          <text x="15" y="66" fill="#38bdf8" fontSize="10">• জাইলেম: ট্রাকিড, ভেসেল — ঊর্ধ্বমুখী পানি পরিবহন</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ফ্লোয়েম: সীভনল, সঙ্গীকোষ — উভয়মুখী খাদ্য পরিবহন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৬: কার্ডিয়াক পেশি ও ইন্টারক্যালেটেড ডিস্ক</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Cardiac Muscle & Intercalated Disc</text>
          <g transform="translate(60, 65)">
            <polygon points="50,45 80,30 110,45 100,75 60,75" fill="#7c2d12" stroke="#ea580c" strokeWidth="2" />
            <line x1="110" y1="55" x2="230" y2="55" stroke="#f97316" strokeWidth="4" />
            <circle cx="160" cy="55" r="8" fill="#fdba74" />
            <circle cx="200" cy="55" r="8" fill="#fdba74" />
            <text x="75" y="58" fill="#ffffff" fontSize="8" textAnchor="middle">সোমা</text>
            <text x="170" y="80" fill="#fdba74" fontSize="9" textAnchor="middle">অ্যাক্সন ও মায়েলিন সিথ</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1" />
          <text x="15" y="24" fill="#fb923c" fontSize="11" fontWeight="bold">প্রাণী টিস্যু ও স্নায়ুকোষ (Neuron):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• স্নায়ুতন্ত্রের গঠন ও কার্যকরী একক হলো নিউরন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• প্রধান অংশ: ডেনড্রাইট, কোষদেহ (Soma) ও অ্যাক্সন</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• সেন্ট্রোসোম নিষ্ক্রিয় হওয়ায় নিউরন বিভাজিত হয় না</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ২.৬: বহুপ্রান্তীয় নিউরন ও মায়েলিন অ্যাক্সন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Multipolar Neuron & Myelinated Axon</text>
          <g transform="translate(60, 65)">
            <polygon points="50,45 80,30 110,45 100,75 60,75" fill="#7c2d12" stroke="#ea580c" strokeWidth="2" />
            <line x1="110" y1="55" x2="230" y2="55" stroke="#f97316" strokeWidth="4" />
            <circle cx="160" cy="55" r="8" fill="#fdba74" />
            <circle cx="200" cy="55" r="8" fill="#fdba74" />
            <text x="75" y="58" fill="#ffffff" fontSize="8" textAnchor="middle">সোমা</text>
            <text x="170" y="80" fill="#fdba74" fontSize="9" textAnchor="middle">অ্যাক্সন ও মায়েলিন সিথ</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1" />
          <text x="15" y="24" fill="#fb923c" fontSize="11" fontWeight="bold">প্রাণী টিস্যু ও স্নায়ুকোষ (Neuron):</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• স্নায়ুতন্ত্রের গঠন ও কার্যকরী একক হলো নিউরন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• প্রধান অংশ: ডেনড্রাইট, কোষদেহ (Soma) ও অ্যাক্সন</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• সেন্ট্রোসোম নিষ্ক্রিয় হওয়ায় নিউরন বিভাজিত হয় না</text></g>
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
  // CHAPTER 3
  // ========================================================
  if (chNum === 3) {
    if (id === 1) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.১: কোষ চক্র — ইন্টারফেজ G1, S, G2 পর্যায়</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Cell Cycle & Interphase Phases</text>
          <g transform="translate(100, 65)">
            <circle cx="65" cy="55" r="50" fill="none" stroke="#334155" strokeWidth="8" />
            <path d="M 65 5 A 50 50 0 0 1 115 55" fill="none" stroke="#38bdf8" strokeWidth="8" />
            <path d="M 115 55 A 50 50 0 0 1 65 105" fill="none" stroke="#f59e0b" strokeWidth="8" />
            <path d="M 65 105 A 50 50 0 0 1 15 55" fill="none" stroke="#10b981" strokeWidth="8" />
            <path d="M 15 55 A 50 50 0 0 1 65 5" fill="none" stroke="#ef4444" strokeWidth="8" />
            <text x="65" y="58" fill="#f8fafc" fontSize="10" textAnchor="middle" fontWeight="bold">কোষ চক্র</text>
          </g>
          <g transform="translate(320, 65)"><rect x="0" y="0" width="320" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">ইন্টারফেজ প্রস্তুতি ও কোষ চক্রের অনুপাত:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• G1 পর্যায় (৩০-৪০%): প্রোটিন ও RNA সংশ্লেষণ</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• S পর্যায় (৩০-৪৫%): DNA অনুলিপন (Replication)</text>
          <text x="15" y="86" fill="#34d399" fontSize="10">• G2 পর্যায় (১০-২০%): স্পিন্ডল তন্তু সৃষ্টি ও ATP সঞ্চয়</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.১: ব্যাকটেরিয়ার অ্যামাইটোসিস প্রত্যক্ষ বিভাজন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Bacterial Amitosis Direct Fission</text>
          <g transform="translate(100, 65)">
            <circle cx="65" cy="55" r="50" fill="none" stroke="#334155" strokeWidth="8" />
            <path d="M 65 5 A 50 50 0 0 1 115 55" fill="none" stroke="#38bdf8" strokeWidth="8" />
            <path d="M 115 55 A 50 50 0 0 1 65 105" fill="none" stroke="#f59e0b" strokeWidth="8" />
            <path d="M 65 105 A 50 50 0 0 1 15 55" fill="none" stroke="#10b981" strokeWidth="8" />
            <path d="M 15 55 A 50 50 0 0 1 65 5" fill="none" stroke="#ef4444" strokeWidth="8" />
            <text x="65" y="58" fill="#f8fafc" fontSize="10" textAnchor="middle" fontWeight="bold">কোষ চক্র</text>
          </g>
          <g transform="translate(320, 65)"><rect x="0" y="0" width="320" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">ইন্টারফেজ প্রস্তুতি ও কোষ চক্রের অনুপাত:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• G1 পর্যায় (৩০-৪০%): প্রোটিন ও RNA সংশ্লেষণ</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• S পর্যায় (৩০-৪৫%): DNA অনুলিপন (Replication)</text>
          <text x="15" y="86" fill="#34d399" fontSize="10">• G2 পর্যায় (১০-২০%): স্পিন্ডল তন্তু সৃষ্টি ও ATP সঞ্চয়</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.২: মেটাসেন্ট্রিক ক্রোমোজোম ও কাইনেটোকোর</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Metacentric Chromosome Architecture</text>
          <g transform="translate(100, 65)">
            <circle cx="65" cy="55" r="50" fill="none" stroke="#334155" strokeWidth="8" />
            <path d="M 65 5 A 50 50 0 0 1 115 55" fill="none" stroke="#38bdf8" strokeWidth="8" />
            <path d="M 115 55 A 50 50 0 0 1 65 105" fill="none" stroke="#f59e0b" strokeWidth="8" />
            <path d="M 65 105 A 50 50 0 0 1 15 55" fill="none" stroke="#10b981" strokeWidth="8" />
            <path d="M 15 55 A 50 50 0 0 1 65 5" fill="none" stroke="#ef4444" strokeWidth="8" />
            <text x="65" y="58" fill="#f8fafc" fontSize="10" textAnchor="middle" fontWeight="bold">কোষ চক্র</text>
          </g>
          <g transform="translate(320, 65)"><rect x="0" y="0" width="320" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">ইন্টারফেজ প্রস্তুতি ও কোষ চক্রের অনুপাত:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• G1 পর্যায় (৩০-৪০%): প্রোটিন ও RNA সংশ্লেষণ</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• S পর্যায় (৩০-৪৫%): DNA অনুলিপন (Replication)</text>
          <text x="15" y="86" fill="#34d399" fontSize="10">• G2 পর্যায় (১০-২০%): স্পিন্ডল তন্তু সৃষ্টি ও ATP সঞ্চয়</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.২: মাইটোসিস প্রোফেজ — ক্রোমোজোমের সংকোচন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Prophase Chromosome Condensation</text>
          <g transform="translate(100, 65)">
            <circle cx="65" cy="55" r="50" fill="none" stroke="#334155" strokeWidth="8" />
            <path d="M 65 5 A 50 50 0 0 1 115 55" fill="none" stroke="#38bdf8" strokeWidth="8" />
            <path d="M 115 55 A 50 50 0 0 1 65 105" fill="none" stroke="#f59e0b" strokeWidth="8" />
            <path d="M 65 105 A 50 50 0 0 1 15 55" fill="none" stroke="#10b981" strokeWidth="8" />
            <path d="M 15 55 A 50 50 0 0 1 65 5" fill="none" stroke="#ef4444" strokeWidth="8" />
            <text x="65" y="58" fill="#f8fafc" fontSize="10" textAnchor="middle" fontWeight="bold">কোষ চক্র</text>
          </g>
          <g transform="translate(320, 65)"><rect x="0" y="0" width="320" height="110" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
          <text x="15" y="24" fill="#38bdf8" fontSize="11" fontWeight="bold">ইন্টারফেজ প্রস্তুতি ও কোষ চক্রের অনুপাত:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• G1 পর্যায় (৩০-৪০%): প্রোটিন ও RNA সংশ্লেষণ</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• S পর্যায় (৩০-৪৫%): DNA অনুলিপন (Replication)</text>
          <text x="15" y="86" fill="#34d399" fontSize="10">• G2 পর্যায় (১০-২০%): স্পিন্ডল তন্তু সৃষ্টি ও ATP সঞ্চয়</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.২: প্রো-মেটাফেজ — স্পিন্ডল যন্ত্র ও মেরু</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Prometaphase Spindle Apparatus</text>
          <g transform="translate(50, 68)">
            <circle cx="30" cy="40" r="26" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="2" />
            <text x="30" y="80" fill="#ef4444" fontSize="9" textAnchor="middle" fontWeight="bold">প্রোফেজ</text>
            <circle cx="95" cy="40" r="26" fill="#eab308" fillOpacity="0.3" stroke="#eab308" strokeWidth="2" />
            <text x="95" y="80" fill="#eab308" fontSize="9" textAnchor="middle" fontWeight="bold">মেটাফেজ</text>
            <circle cx="160" cy="40" r="26" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" />
            <text x="160" y="80" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold">অ্যানাফেজ</text>
            <circle cx="225" cy="40" r="26" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="2" />
            <text x="225" y="80" fill="#06b6d4" fontSize="9" textAnchor="middle" fontWeight="bold">টেলোফেজ</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#10b981" fontSize="11" fontWeight="bold">মাইটোসিস বিভাজনের পর্যায়ক্রম:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">• মেটাফেজ: বিষুবীয় অঞ্চলে ক্রোমোজোমের বিন্যাস</text>
          <text x="15" y="66" fill="#34d399" fontSize="10">• অ্যানাফেজ: সেন্ট্রোমিয়ার বিভক্ত ও V, L, J, I চলন</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• টেলোফেজ: অপত্য নিউক্লিয়াস ও সাইটোকাইনেসিস</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.২: মাইটোসিস মেটাফেজ — বিষুবীয় প্লেট বিন্যাস</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Metaphase Equatorial Plate Alignment</text>
          <g transform="translate(50, 68)">
            <circle cx="30" cy="40" r="26" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="2" />
            <text x="30" y="80" fill="#ef4444" fontSize="9" textAnchor="middle" fontWeight="bold">প্রোফেজ</text>
            <circle cx="95" cy="40" r="26" fill="#eab308" fillOpacity="0.3" stroke="#eab308" strokeWidth="2" />
            <text x="95" y="80" fill="#eab308" fontSize="9" textAnchor="middle" fontWeight="bold">মেটাফেজ</text>
            <circle cx="160" cy="40" r="26" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" />
            <text x="160" y="80" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold">অ্যানাফেজ</text>
            <circle cx="225" cy="40" r="26" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="2" />
            <text x="225" y="80" fill="#06b6d4" fontSize="9" textAnchor="middle" fontWeight="bold">টেলোফেজ</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#10b981" fontSize="11" fontWeight="bold">মাইটোসিস বিভাজনের পর্যায়ক্রম:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">• মেটাফেজ: বিষুবীয় অঞ্চলে ক্রোমোজোমের বিন্যাস</text>
          <text x="15" y="66" fill="#34d399" fontSize="10">• অ্যানাফেজ: সেন্ট্রোমিয়ার বিভক্ত ও V, L, J, I চলন</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• টেলোফেজ: অপত্য নিউক্লিয়াস ও সাইটোকাইনেসিস</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.২: মাইটোসিস অ্যানাফেজ — মেরুভিমুখী চলন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Anaphase Polar Chromosome Migration</text>
          <g transform="translate(50, 68)">
            <circle cx="30" cy="40" r="26" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="2" />
            <text x="30" y="80" fill="#ef4444" fontSize="9" textAnchor="middle" fontWeight="bold">প্রোফেজ</text>
            <circle cx="95" cy="40" r="26" fill="#eab308" fillOpacity="0.3" stroke="#eab308" strokeWidth="2" />
            <text x="95" y="80" fill="#eab308" fontSize="9" textAnchor="middle" fontWeight="bold">মেটাফেজ</text>
            <circle cx="160" cy="40" r="26" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" />
            <text x="160" y="80" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold">অ্যানাফেজ</text>
            <circle cx="225" cy="40" r="26" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="2" />
            <text x="225" y="80" fill="#06b6d4" fontSize="9" textAnchor="middle" fontWeight="bold">টেলোফেজ</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#10b981" fontSize="11" fontWeight="bold">মাইটোসিস বিভাজনের পর্যায়ক্রম:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">• মেটাফেজ: বিষুবীয় অঞ্চলে ক্রোমোজোমের বিন্যাস</text>
          <text x="15" y="66" fill="#34d399" fontSize="10">• অ্যানাফেজ: সেন্ট্রোমিয়ার বিভক্ত ও V, L, J, I চলন</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• টেলোফেজ: অপত্য নিউক্লিয়াস ও সাইটোকাইনেসিস</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.২: মাইটোসিস টেলোফেজ — নিউক্লিয়াসের পুনর্গঠন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Telophase Nuclear Reconstitution</text>
          <g transform="translate(50, 68)">
            <circle cx="30" cy="40" r="26" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="2" />
            <text x="30" y="80" fill="#ef4444" fontSize="9" textAnchor="middle" fontWeight="bold">প্রোফেজ</text>
            <circle cx="95" cy="40" r="26" fill="#eab308" fillOpacity="0.3" stroke="#eab308" strokeWidth="2" />
            <text x="95" y="80" fill="#eab308" fontSize="9" textAnchor="middle" fontWeight="bold">মেটাফেজ</text>
            <circle cx="160" cy="40" r="26" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" />
            <text x="160" y="80" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold">অ্যানাফেজ</text>
            <circle cx="225" cy="40" r="26" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="2" />
            <text x="225" y="80" fill="#06b6d4" fontSize="9" textAnchor="middle" fontWeight="bold">টেলোফেজ</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#10b981" fontSize="11" fontWeight="bold">মাইটোসিস বিভাজনের পর্যায়ক্রম:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">• মেটাফেজ: বিষুবীয় অঞ্চলে ক্রোমোজোমের বিন্যাস</text>
          <text x="15" y="66" fill="#34d399" fontSize="10">• অ্যানাফেজ: সেন্ট্রোমিয়ার বিভক্ত ও V, L, J, I চলন</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• টেলোফেজ: অপত্য নিউক্লিয়াস ও সাইটোকাইনেসিস</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.৩: উদ্ভিদকোষের সাইটোকাইনেসিস ও কোষপ্লেট</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Plant Cytokinesis & Cell Plate Wall</text>
          <g transform="translate(50, 68)">
            <circle cx="30" cy="40" r="26" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="2" />
            <text x="30" y="80" fill="#ef4444" fontSize="9" textAnchor="middle" fontWeight="bold">প্রোফেজ</text>
            <circle cx="95" cy="40" r="26" fill="#eab308" fillOpacity="0.3" stroke="#eab308" strokeWidth="2" />
            <text x="95" y="80" fill="#eab308" fontSize="9" textAnchor="middle" fontWeight="bold">মেটাফেজ</text>
            <circle cx="160" cy="40" r="26" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" />
            <text x="160" y="80" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold">অ্যানাফেজ</text>
            <circle cx="225" cy="40" r="26" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="2" />
            <text x="225" y="80" fill="#06b6d4" fontSize="9" textAnchor="middle" fontWeight="bold">টেলোফেজ</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#10b981" fontSize="11" fontWeight="bold">মাইটোসিস বিভাজনের পর্যায়ক্রম:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">• মেটাফেজ: বিষুবীয় অঞ্চলে ক্রোমোজোমের বিন্যাস</text>
          <text x="15" y="66" fill="#34d399" fontSize="10">• অ্যানাফেজ: সেন্ট্রোমিয়ার বিভক্ত ও V, L, J, I চলন</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• টেলোফেজ: অপত্য নিউক্লিয়াস ও সাইটোকাইনেসিস</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.৩: প্রাণীকোষের ক্লিভেজ খাঁজ ও সাইটোপ্লাজম</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Animal Cleavage Furrow Constriction</text>
          <g transform="translate(50, 68)">
            <circle cx="30" cy="40" r="26" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="2" />
            <text x="30" y="80" fill="#ef4444" fontSize="9" textAnchor="middle" fontWeight="bold">প্রোফেজ</text>
            <circle cx="95" cy="40" r="26" fill="#eab308" fillOpacity="0.3" stroke="#eab308" strokeWidth="2" />
            <text x="95" y="80" fill="#eab308" fontSize="9" textAnchor="middle" fontWeight="bold">মেটাফেজ</text>
            <circle cx="160" cy="40" r="26" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" />
            <text x="160" y="80" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold">অ্যানাফেজ</text>
            <circle cx="225" cy="40" r="26" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="2" />
            <text x="225" y="80" fill="#06b6d4" fontSize="9" textAnchor="middle" fontWeight="bold">টেলোফেজ</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#10b981" fontSize="11" fontWeight="bold">মাইটোসিস বিভাজনের পর্যায়ক্রম:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">• মেটাফেজ: বিষুবীয় অঞ্চলে ক্রোমোজোমের বিন্যাস</text>
          <text x="15" y="66" fill="#34d399" fontSize="10">• অ্যানাফেজ: সেন্ট্রোমিয়ার বিভক্ত ও V, L, J, I চলন</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• টেলোফেজ: অপত্য নিউক্লিয়াস ও সাইটোকাইনেসিস</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.৪: অনিয়ন্ত্রিত মাইটোসিস ও টিউমার বিস্তার</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Uncontrolled Mitosis & Tumor Mass</text>
          <g transform="translate(50, 68)">
            <circle cx="30" cy="40" r="26" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="2" />
            <text x="30" y="80" fill="#ef4444" fontSize="9" textAnchor="middle" fontWeight="bold">প্রোফেজ</text>
            <circle cx="95" cy="40" r="26" fill="#eab308" fillOpacity="0.3" stroke="#eab308" strokeWidth="2" />
            <text x="95" y="80" fill="#eab308" fontSize="9" textAnchor="middle" fontWeight="bold">মেটাফেজ</text>
            <circle cx="160" cy="40" r="26" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" />
            <text x="160" y="80" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold">অ্যানাফেজ</text>
            <circle cx="225" cy="40" r="26" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="2" />
            <text x="225" y="80" fill="#06b6d4" fontSize="9" textAnchor="middle" fontWeight="bold">টেলোফেজ</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#10b981" fontSize="11" fontWeight="bold">মাইটোসিস বিভাজনের পর্যায়ক্রম:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">• মেটাফেজ: বিষুবীয় অঞ্চলে ক্রোমোজোমের বিন্যাস</text>
          <text x="15" y="66" fill="#34d399" fontSize="10">• অ্যানাফেজ: সেন্ট্রোমিয়ার বিভক্ত ও V, L, J, I চলন</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• টেলোফেজ: অপত্য নিউক্লিয়াস ও সাইটোকাইনেসিস</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.৫: মায়োসিস ১ — লেপ্টোটিন বুকে স্টেজ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Leptotene Bouquet Stage Chromosomes</text>
          <g transform="translate(50, 68)">
            <circle cx="30" cy="40" r="26" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="2" />
            <text x="30" y="80" fill="#ef4444" fontSize="9" textAnchor="middle" fontWeight="bold">প্রোফেজ</text>
            <circle cx="95" cy="40" r="26" fill="#eab308" fillOpacity="0.3" stroke="#eab308" strokeWidth="2" />
            <text x="95" y="80" fill="#eab308" fontSize="9" textAnchor="middle" fontWeight="bold">মেটাফেজ</text>
            <circle cx="160" cy="40" r="26" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" />
            <text x="160" y="80" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold">অ্যানাফেজ</text>
            <circle cx="225" cy="40" r="26" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="2" />
            <text x="225" y="80" fill="#06b6d4" fontSize="9" textAnchor="middle" fontWeight="bold">টেলোফেজ</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#10b981" fontSize="11" fontWeight="bold">মাইটোসিস বিভাজনের পর্যায়ক্রম:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">• মেটাফেজ: বিষুবীয় অঞ্চলে ক্রোমোজোমের বিন্যাস</text>
          <text x="15" y="66" fill="#34d399" fontSize="10">• অ্যানাফেজ: সেন্ট্রোমিয়ার বিভক্ত ও V, L, J, I চলন</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• টেলোফেজ: অপত্য নিউক্লিয়াস ও সাইটোকাইনেসিস</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.৫: জাইগোটিন — হোমোলোগাস সিন্যাপসিস জোড়</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Zygotene Synapsis & Bivalent Pair</text>
          <g transform="translate(50, 68)">
            <circle cx="30" cy="40" r="26" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="2" />
            <text x="30" y="80" fill="#ef4444" fontSize="9" textAnchor="middle" fontWeight="bold">প্রোফেজ</text>
            <circle cx="95" cy="40" r="26" fill="#eab308" fillOpacity="0.3" stroke="#eab308" strokeWidth="2" />
            <text x="95" y="80" fill="#eab308" fontSize="9" textAnchor="middle" fontWeight="bold">মেটাফেজ</text>
            <circle cx="160" cy="40" r="26" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" />
            <text x="160" y="80" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold">অ্যানাফেজ</text>
            <circle cx="225" cy="40" r="26" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="2" />
            <text x="225" y="80" fill="#06b6d4" fontSize="9" textAnchor="middle" fontWeight="bold">টেলোফেজ</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#10b981" fontSize="11" fontWeight="bold">মাইটোসিস বিভাজনের পর্যায়ক্রম:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">• মেটাফেজ: বিষুবীয় অঞ্চলে ক্রোমোজোমের বিন্যাস</text>
          <text x="15" y="66" fill="#34d399" fontSize="10">• অ্যানাফেজ: সেন্ট্রোমিয়ার বিভক্ত ও V, L, J, I চলন</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• টেলোফেজ: অপত্য নিউক্লিয়াস ও সাইটোকাইনেসিস</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.৫: প্যাকাইটিন — টেট্রাড ও ক্রসিং ওভার</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Pachytene Crossing Over & Chiasmata</text>
          <g transform="translate(50, 68)">
            <circle cx="30" cy="40" r="26" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="2" />
            <text x="30" y="80" fill="#ef4444" fontSize="9" textAnchor="middle" fontWeight="bold">প্রোফেজ</text>
            <circle cx="95" cy="40" r="26" fill="#eab308" fillOpacity="0.3" stroke="#eab308" strokeWidth="2" />
            <text x="95" y="80" fill="#eab308" fontSize="9" textAnchor="middle" fontWeight="bold">মেটাফেজ</text>
            <circle cx="160" cy="40" r="26" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" />
            <text x="160" y="80" fill="#10b981" fontSize="9" textAnchor="middle" fontWeight="bold">অ্যানাফেজ</text>
            <circle cx="225" cy="40" r="26" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="2" />
            <text x="225" y="80" fill="#06b6d4" fontSize="9" textAnchor="middle" fontWeight="bold">টেলোফেজ</text>
          </g>
          <g transform="translate(340, 65)"><rect x="0" y="0" width="300" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#10b981" fontSize="11" fontWeight="bold">মাইটোসিস বিভাজনের পর্যায়ক্রম:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">• মেটাফেজ: বিষুবীয় অঞ্চলে ক্রোমোজোমের বিন্যাস</text>
          <text x="15" y="66" fill="#34d399" fontSize="10">• অ্যানাফেজ: সেন্ট্রোমিয়ার বিভক্ত ও V, L, J, I চলন</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• টেলোফেজ: অপত্য নিউক্লিয়াস ও সাইটোকাইনেসিস</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.৫: ডিপ্লোটিন ও কায়াজমা প্রান্তীয়করণ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Diplotene Chiasmata Terminalization</text>
          <g transform="translate(80, 65)">
            <path d="M 60 20 L 120 90 M 120 20 L 60 90" stroke="#f43f5e" strokeWidth="4" />
            <path d="M 100 20 L 160 90 M 160 20 L 100 90" stroke="#0ea5e9" strokeWidth="4" />
            <circle cx="110" cy="55" r="7" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
            <text x="110" y="105" fill="#facc15" fontSize="9" textAnchor="middle" fontWeight="bold">কায়াজমা ও ক্রসিং ওভার</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মায়োসিস ও ক্রসিং ওভারের গুরুত্ব:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্যাকাইটিন উপপর্যায়ে নন-সিস্টার ক্রোমাটিডের বিনিময়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• জেনেটিক রিকম্বিনেশন ও নতুন বৈশিষ্ট্যের উৎপত্তি</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ক্রোমোজোম সংখ্যা হ্রাস (2n → n) রক্ষা করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.৫: ডায়াকাইনেসিস — নিউক্লিওলাসের বিলুপ্তি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Diakinesis Phase Nuclear Envelope End</text>
          <g transform="translate(80, 65)">
            <path d="M 60 20 L 120 90 M 120 20 L 60 90" stroke="#f43f5e" strokeWidth="4" />
            <path d="M 100 20 L 160 90 M 160 20 L 100 90" stroke="#0ea5e9" strokeWidth="4" />
            <circle cx="110" cy="55" r="7" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
            <text x="110" y="105" fill="#facc15" fontSize="9" textAnchor="middle" fontWeight="bold">কায়াজমা ও ক্রসিং ওভার</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মায়োসিস ও ক্রসিং ওভারের গুরুত্ব:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্যাকাইটিন উপপর্যায়ে নন-সিস্টার ক্রোমাটিডের বিনিময়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• জেনেটিক রিকম্বিনেশন ও নতুন বৈশিষ্ট্যের উৎপত্তি</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ক্রোমোজোম সংখ্যা হ্রাস (2n → n) রক্ষা করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.৫: মায়োসিস অ্যানাফেজ ১ — ক্রোমোজোম হ্রাস (n)</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Anaphase I Chromosome Reduction</text>
          <g transform="translate(80, 65)">
            <path d="M 60 20 L 120 90 M 120 20 L 60 90" stroke="#f43f5e" strokeWidth="4" />
            <path d="M 100 20 L 160 90 M 160 20 L 100 90" stroke="#0ea5e9" strokeWidth="4" />
            <circle cx="110" cy="55" r="7" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
            <text x="110" y="105" fill="#facc15" fontSize="9" textAnchor="middle" fontWeight="bold">কায়াজমা ও ক্রসিং ওভার</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মায়োসিস ও ক্রসিং ওভারের গুরুত্ব:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্যাকাইটিন উপপর্যায়ে নন-সিস্টার ক্রোমাটিডের বিনিময়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• জেনেটিক রিকম্বিনেশন ও নতুন বৈশিষ্ট্যের উৎপত্তি</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ক্রোমোজোম সংখ্যা হ্রাস (2n → n) রক্ষা করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.৫: মায়োসিস ২ — সমীকরণিক কোষ বিভাজন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Meiosis II Equational Split Phases</text>
          <g transform="translate(80, 65)">
            <path d="M 60 20 L 120 90 M 120 20 L 60 90" stroke="#f43f5e" strokeWidth="4" />
            <path d="M 100 20 L 160 90 M 160 20 L 100 90" stroke="#0ea5e9" strokeWidth="4" />
            <circle cx="110" cy="55" r="7" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
            <text x="110" y="105" fill="#facc15" fontSize="9" textAnchor="middle" fontWeight="bold">কায়াজমা ও ক্রসিং ওভার</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মায়োসিস ও ক্রসিং ওভারের গুরুত্ব:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্যাকাইটিন উপপর্যায়ে নন-সিস্টার ক্রোমাটিডের বিনিময়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• জেনেটিক রিকম্বিনেশন ও নতুন বৈশিষ্ট্যের উৎপত্তি</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ক্রোমোজোম সংখ্যা হ্রাস (2n → n) রক্ষা করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.৭: স্পার্মাটোজেনেসিস — ৪টি হ্যাপ্লয়েড শুক্রাণু</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Spermatogenesis 4 Sperm Cells</text>
          <g transform="translate(80, 65)">
            <path d="M 60 20 L 120 90 M 120 20 L 60 90" stroke="#f43f5e" strokeWidth="4" />
            <path d="M 100 20 L 160 90 M 160 20 L 100 90" stroke="#0ea5e9" strokeWidth="4" />
            <circle cx="110" cy="55" r="7" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
            <text x="110" y="105" fill="#facc15" fontSize="9" textAnchor="middle" fontWeight="bold">কায়াজমা ও ক্রসিং ওভার</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মায়োসিস ও ক্রসিং ওভারের গুরুত্ব:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্যাকাইটিন উপপর্যায়ে নন-সিস্টার ক্রোমাটিডের বিনিময়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• জেনেটিক রিকম্বিনেশন ও নতুন বৈশিষ্ট্যের উৎপত্তি</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ক্রোমোজোম সংখ্যা হ্রাস (2n → n) রক্ষা করে</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৩.৭: ওওজেনেসিস — ১টি ডিম্বাণু ও ৩টি পোলার বডি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Oogenesis Ovum & Polar Bodies Formation</text>
          <g transform="translate(80, 65)">
            <path d="M 60 20 L 120 90 M 120 20 L 60 90" stroke="#f43f5e" strokeWidth="4" />
            <path d="M 100 20 L 160 90 M 160 20 L 100 90" stroke="#0ea5e9" strokeWidth="4" />
            <circle cx="110" cy="55" r="7" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
            <text x="110" y="105" fill="#facc15" fontSize="9" textAnchor="middle" fontWeight="bold">কায়াজমা ও ক্রসিং ওভার</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">মায়োসিস ও ক্রসিং ওভারের গুরুত্ব:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• প্যাকাইটিন উপপর্যায়ে নন-সিস্টার ক্রোমাটিডের বিনিময়</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• জেনেটিক রিকম্বিনেশন ও নতুন বৈশিষ্ট্যের উৎপত্তি</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• ক্রোমোজোম সংখ্যা হ্রাস (2n → n) রক্ষা করে</text></g>
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
  // CHAPTER 4
  // ========================================================
  if (chNum === 4) {
    if (id === 1) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.১: ATP অণুর ৩ডি রাসায়নিক রূপ — জৈব মুদ্রা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">ATP Biological Energy Currency</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="25" width="65" height="40" rx="8" fill="#7c3aed" stroke="#c084fc" strokeWidth="2" />
            <circle cx="120" cy="45" r="16" fill="#d97706" stroke="#fbbf24" strokeWidth="1.5" /><text x="120" y="49" fill="#fff" fontSize="9" textAnchor="middle">P~P</text>
            <circle cx="165" cy="45" r="16" fill="#ea580c" stroke="#f97316" strokeWidth="1.5" /><text x="165" y="49" fill="#fff" fontSize="9" textAnchor="middle">~P</text>
            <text x="47" y="50" fill="#fff" fontSize="9" textAnchor="middle">অ্যাডেনিন</text>
            <text x="100" y="90" fill="#facc15" fontSize="9" textAnchor="middle">ATP → ADP + Pi + ৭.৩ kcal শক্তি</text>
          </g>
          <g transform="translate(320, 65)"><rect x="0" y="0" width="320" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">ATP — জৈব মুদ্রা বা এনার্জি কারেন্সি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• Adenosine Triphosphate: ৩টি ফসফেট বন্ধনী</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• প্রান্তীয় ফসফেট বন্ধনে প্রায় ৭.৩ কিলোক্যালোরি/মোল</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• ফসফোরাইলেশন ও ডিফসফোরাইলেশন রিচার্জ চক্র</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.১: ATP-ADP ব্যাটারি রিচার্জ রূপান্তর চক্র</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">ATP-ADP Biological Battery Cycle</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="25" width="65" height="40" rx="8" fill="#7c3aed" stroke="#c084fc" strokeWidth="2" />
            <circle cx="120" cy="45" r="16" fill="#d97706" stroke="#fbbf24" strokeWidth="1.5" /><text x="120" y="49" fill="#fff" fontSize="9" textAnchor="middle">P~P</text>
            <circle cx="165" cy="45" r="16" fill="#ea580c" stroke="#f97316" strokeWidth="1.5" /><text x="165" y="49" fill="#fff" fontSize="9" textAnchor="middle">~P</text>
            <text x="47" y="50" fill="#fff" fontSize="9" textAnchor="middle">অ্যাডেনিন</text>
            <text x="100" y="90" fill="#facc15" fontSize="9" textAnchor="middle">ATP → ADP + Pi + ৭.৩ kcal শক্তি</text>
          </g>
          <g transform="translate(320, 65)"><rect x="0" y="0" width="320" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">ATP — জৈব মুদ্রা বা এনার্জি কারেন্সি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• Adenosine Triphosphate: ৩টি ফসফেট বন্ধনী</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• প্রান্তীয় ফসফেট বন্ধনে প্রায় ৭.৩ কিলোক্যালোরি/মোল</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• ফসফোরাইলেশন ও ডিফসফোরাইলেশন রিচার্জ চক্র</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.২: পাতার মেসোফিল টিস্যু ও সালোকসংশ্লেষণ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Leaf Mesophyll & Chloroplast Engine</text>
          <g transform="translate(60, 65)">
            <rect x="15" y="25" width="65" height="40" rx="8" fill="#7c3aed" stroke="#c084fc" strokeWidth="2" />
            <circle cx="120" cy="45" r="16" fill="#d97706" stroke="#fbbf24" strokeWidth="1.5" /><text x="120" y="49" fill="#fff" fontSize="9" textAnchor="middle">P~P</text>
            <circle cx="165" cy="45" r="16" fill="#ea580c" stroke="#f97316" strokeWidth="1.5" /><text x="165" y="49" fill="#fff" fontSize="9" textAnchor="middle">~P</text>
            <text x="47" y="50" fill="#fff" fontSize="9" textAnchor="middle">অ্যাডেনিন</text>
            <text x="100" y="90" fill="#facc15" fontSize="9" textAnchor="middle">ATP → ADP + Pi + ৭.৩ kcal শক্তি</text>
          </g>
          <g transform="translate(320, 65)"><rect x="0" y="0" width="320" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">ATP — জৈব মুদ্রা বা এনার্জি কারেন্সি:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• Adenosine Triphosphate: ৩টি ফসফেট বন্ধনী</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• প্রান্তীয় ফসফেট বন্ধনে প্রায় ৭.৩ কিলোক্যালোরি/মোল</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• ফসফোরাইলেশন ও ডিফসফোরাইলেশন রিচার্জ চক্র</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৩: ফটোসিস্টেম ২ (PS II) ও আলোক অ্যান্টেনা</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Photosystem II Reaction Center (P680)</text>
          <g transform="translate(60, 68)">
            <circle cx="60" cy="40" r="28" fill="#059669" stroke="#34d399" strokeWidth="2" />
            <line x1="88" y1="40" x2="150" y2="40" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <circle cx="180" cy="40" r="28" fill="#047857" stroke="#10b981" strokeWidth="2" />
            <text x="60" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS II (680)</text>
            <text x="180" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS I (700)</text>
            <text x="120" y="90" fill="#a7f3d0" fontSize="9" textAnchor="middle">Z-স্কিম অচক্রীয় ইলেকট্রন প্রবাহ</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">সালোকসংশ্লেষণ রাসায়নিক রূপান্তর:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পানির ফটোলাইসিস: 2H₂O → 4H⁺ + 4e⁻ + O₂</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• ক্যালভিন চক্র (C3): RuBisCO অনুঘটক ও PGA সৃষ্টি</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হ্যাচ-স্ল্যাক চক্র (C4): ক্রাঞ্জ অ্যানাটমি ও উচ্চ ফলন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৩: পানির ফটোলাইসিস বা আলোক বিভাজন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Photolysis of Water Oxygen Release</text>
          <g transform="translate(60, 68)">
            <circle cx="60" cy="40" r="28" fill="#059669" stroke="#34d399" strokeWidth="2" />
            <line x1="88" y1="40" x2="150" y2="40" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <circle cx="180" cy="40" r="28" fill="#047857" stroke="#10b981" strokeWidth="2" />
            <text x="60" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS II (680)</text>
            <text x="180" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS I (700)</text>
            <text x="120" y="90" fill="#a7f3d0" fontSize="9" textAnchor="middle">Z-স্কিম অচক্রীয় ইলেকট্রন প্রবাহ</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">সালোকসংশ্লেষণ রাসায়নিক রূপান্তর:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পানির ফটোলাইসিস: 2H₂O → 4H⁺ + 4e⁻ + O₂</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• ক্যালভিন চক্র (C3): RuBisCO অনুঘটক ও PGA সৃষ্টি</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হ্যাচ-স্ল্যাক চক্র (C4): ক্রাঞ্জ অ্যানাটমি ও উচ্চ ফলন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৩: অচক্রীয় ইলেকট্রন প্রবাহ বা Z-স্কিম</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Non-Cyclic Z-Scheme Electron Flow</text>
          <g transform="translate(60, 68)">
            <circle cx="60" cy="40" r="28" fill="#059669" stroke="#34d399" strokeWidth="2" />
            <line x1="88" y1="40" x2="150" y2="40" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <circle cx="180" cy="40" r="28" fill="#047857" stroke="#10b981" strokeWidth="2" />
            <text x="60" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS II (680)</text>
            <text x="180" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS I (700)</text>
            <text x="120" y="90" fill="#a7f3d0" fontSize="9" textAnchor="middle">Z-স্কিম অচক্রীয় ইলেকট্রন প্রবাহ</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">সালোকসংশ্লেষণ রাসায়নিক রূপান্তর:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পানির ফটোলাইসিস: 2H₂O → 4H⁺ + 4e⁻ + O₂</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• ক্যালভিন চক্র (C3): RuBisCO অনুঘটক ও PGA সৃষ্টি</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হ্যাচ-স্ল্যাক চক্র (C4): ক্রাঞ্জ অ্যানাটমি ও উচ্চ ফলন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৩: ফটোসিস্টেম ১ (PS I) ও NADPH বিজারক</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Photosystem I Reaction Center (P700)</text>
          <g transform="translate(60, 68)">
            <circle cx="60" cy="40" r="28" fill="#059669" stroke="#34d399" strokeWidth="2" />
            <line x1="88" y1="40" x2="150" y2="40" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <circle cx="180" cy="40" r="28" fill="#047857" stroke="#10b981" strokeWidth="2" />
            <text x="60" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS II (680)</text>
            <text x="180" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS I (700)</text>
            <text x="120" y="90" fill="#a7f3d0" fontSize="9" textAnchor="middle">Z-স্কিম অচক্রীয় ইলেকট্রন প্রবাহ</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">সালোকসংশ্লেষণ রাসায়নিক রূপান্তর:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পানির ফটোলাইসিস: 2H₂O → 4H⁺ + 4e⁻ + O₂</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• ক্যালভিন চক্র (C3): RuBisCO অনুঘটক ও PGA সৃষ্টি</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হ্যাচ-স্ল্যাক চক্র (C4): ক্রাঞ্জ অ্যানাটমি ও উচ্চ ফলন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৩: থাইলাকয়েড ঝিল্লিতে ATP সিন্থেজ মোটর</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Thylakoid ATP Synthase Complex</text>
          <g transform="translate(60, 68)">
            <circle cx="60" cy="40" r="28" fill="#059669" stroke="#34d399" strokeWidth="2" />
            <line x1="88" y1="40" x2="150" y2="40" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <circle cx="180" cy="40" r="28" fill="#047857" stroke="#10b981" strokeWidth="2" />
            <text x="60" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS II (680)</text>
            <text x="180" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS I (700)</text>
            <text x="120" y="90" fill="#a7f3d0" fontSize="9" textAnchor="middle">Z-স্কিম অচক্রীয় ইলেকট্রন প্রবাহ</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">সালোকসংশ্লেষণ রাসায়নিক রূপান্তর:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পানির ফটোলাইসিস: 2H₂O → 4H⁺ + 4e⁻ + O₂</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• ক্যালভিন চক্র (C3): RuBisCO অনুঘটক ও PGA সৃষ্টি</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হ্যাচ-স্ল্যাক চক্র (C4): ক্রাঞ্জ অ্যানাটমি ও উচ্চ ফলন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৪: ক্যালভিন চক্র (C3) — RuBP কার্বক্সিলেশন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Calvin Cycle RuBisCO CO2 Fixation</text>
          <g transform="translate(60, 68)">
            <circle cx="60" cy="40" r="28" fill="#059669" stroke="#34d399" strokeWidth="2" />
            <line x1="88" y1="40" x2="150" y2="40" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <circle cx="180" cy="40" r="28" fill="#047857" stroke="#10b981" strokeWidth="2" />
            <text x="60" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS II (680)</text>
            <text x="180" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS I (700)</text>
            <text x="120" y="90" fill="#a7f3d0" fontSize="9" textAnchor="middle">Z-স্কিম অচক্রীয় ইলেকট্রন প্রবাহ</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">সালোকসংশ্লেষণ রাসায়নিক রূপান্তর:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পানির ফটোলাইসিস: 2H₂O → 4H⁺ + 4e⁻ + O₂</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• ক্যালভিন চক্র (C3): RuBisCO অনুঘটক ও PGA সৃষ্টি</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হ্যাচ-স্ল্যাক চক্র (C4): ক্রাঞ্জ অ্যানাটমি ও উচ্চ ফলন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৪: রুবিসকো এনজাইম — কার্বক্সিলেশন অনুঘটক</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">RuBisCO Enzyme Molecular Architecture</text>
          <g transform="translate(60, 68)">
            <circle cx="60" cy="40" r="28" fill="#059669" stroke="#34d399" strokeWidth="2" />
            <line x1="88" y1="40" x2="150" y2="40" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <circle cx="180" cy="40" r="28" fill="#047857" stroke="#10b981" strokeWidth="2" />
            <text x="60" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS II (680)</text>
            <text x="180" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS I (700)</text>
            <text x="120" y="90" fill="#a7f3d0" fontSize="9" textAnchor="middle">Z-স্কিম অচক্রীয় ইলেকট্রন প্রবাহ</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">সালোকসংশ্লেষণ রাসায়নিক রূপান্তর:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পানির ফটোলাইসিস: 2H₂O → 4H⁺ + 4e⁻ + O₂</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• ক্যালভিন চক্র (C3): RuBisCO অনুঘটক ও PGA সৃষ্টি</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হ্যাচ-স্ল্যাক চক্র (C4): ক্রাঞ্জ অ্যানাটমি ও উচ্চ ফলন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৪: হ্যাচ ও স্ল্যাক চক্র (C4) ও ক্রাঞ্জ অ্যানাটমি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Hatch-Slack C4 Pathway Kranz Anatomy</text>
          <g transform="translate(60, 68)">
            <circle cx="60" cy="40" r="28" fill="#059669" stroke="#34d399" strokeWidth="2" />
            <line x1="88" y1="40" x2="150" y2="40" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <circle cx="180" cy="40" r="28" fill="#047857" stroke="#10b981" strokeWidth="2" />
            <text x="60" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS II (680)</text>
            <text x="180" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS I (700)</text>
            <text x="120" y="90" fill="#a7f3d0" fontSize="9" textAnchor="middle">Z-স্কিম অচক্রীয় ইলেকট্রন প্রবাহ</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">সালোকসংশ্লেষণ রাসায়নিক রূপান্তর:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পানির ফটোলাইসিস: 2H₂O → 4H⁺ + 4e⁻ + O₂</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• ক্যালভিন চক্র (C3): RuBisCO অনুঘটক ও PGA সৃষ্টি</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হ্যাচ-স্ল্যাক চক্র (C4): ক্রাঞ্জ অ্যানাটমি ও উচ্চ ফলন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৫: সালোকসংশ্লেষণের আলোক বর্ণালী প্রভাবক</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Photosynthetic Action Spectrum & Light</text>
          <g transform="translate(60, 68)">
            <circle cx="60" cy="40" r="28" fill="#059669" stroke="#34d399" strokeWidth="2" />
            <line x1="88" y1="40" x2="150" y2="40" stroke="#facc15" strokeWidth="3" markerEnd="url(#arrow)" />
            <circle cx="180" cy="40" r="28" fill="#047857" stroke="#10b981" strokeWidth="2" />
            <text x="60" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS II (680)</text>
            <text x="180" y="44" fill="#fff" fontSize="9" textAnchor="middle">PS I (700)</text>
            <text x="120" y="90" fill="#a7f3d0" fontSize="9" textAnchor="middle">Z-স্কিম অচক্রীয় ইলেকট্রন প্রবাহ</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">সালোকসংশ্লেষণ রাসায়নিক রূপান্তর:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পানির ফটোলাইসিস: 2H₂O → 4H⁺ + 4e⁻ + O₂</text>
          <text x="15" y="66" fill="#facc15" fontSize="10">• ক্যালভিন চক্র (C3): RuBisCO অনুঘটক ও PGA সৃষ্টি</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• হ্যাচ-স্ল্যাক চক্র (C4): ক্রাঞ্জ অ্যানাটমি ও উচ্চ ফলন</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৬: সবাত শ্বসন — মাইটোকন্ড্রিয়াল পাওয়ার স্টেশন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Aerobic Respiration Power Station</text>
          <g transform="translate(60, 68)">
            <rect x="10" y="25" width="60" height="30" rx="4" fill="#0284c7" /><text x="40" y="44" fill="#fff" fontSize="8" textAnchor="middle">গ্লাইকোলাইসিস</text>
            <circle cx="130" cy="40" r="24" fill="#7c2d12" stroke="#ea580c" strokeWidth="2" /><text x="130" y="44" fill="#fff" fontSize="8" textAnchor="middle">ক্রেবস চক্র</text>
            <rect x="180" y="25" width="50" height="30" rx="4" fill="#059669" /><text x="205" y="44" fill="#fff" fontSize="8" textAnchor="middle">ETS</text>
            <text x="120" y="90" fill="#facc15" fontSize="9" textAnchor="middle">১ অণু গ্লুকোজ = মোট ৩৮ ATP (সবাত শ্বসন)</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1" />
          <text x="15" y="24" fill="#fb923c" fontSize="11" fontWeight="bold">শ্বসনের ৪টি পর্যায় ও নিট এনার্জি ব্যালেন্স:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. গ্লাইকোলাইসিস (সাইটোপ্লাজম): ২ ATP + ২ NADH₂</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. এসিটাইল কো-এ ও ৩. ক্রেবস চক্র (মাইটোকন্ড্রিয়া)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৪. ইলেকট্রন ট্রান্সপোর্ট চেইনে জারণ ও মোট ৩৮টি ATP</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৭: গ্লাইকোলাইসিস — পাইরুভিক এসিড সৃষ্টি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Cytoplasmic Glycolysis 10 Steps</text>
          <g transform="translate(60, 68)">
            <rect x="10" y="25" width="60" height="30" rx="4" fill="#0284c7" /><text x="40" y="44" fill="#fff" fontSize="8" textAnchor="middle">গ্লাইকোলাইসিস</text>
            <circle cx="130" cy="40" r="24" fill="#7c2d12" stroke="#ea580c" strokeWidth="2" /><text x="130" y="44" fill="#fff" fontSize="8" textAnchor="middle">ক্রেবস চক্র</text>
            <rect x="180" y="25" width="50" height="30" rx="4" fill="#059669" /><text x="205" y="44" fill="#fff" fontSize="8" textAnchor="middle">ETS</text>
            <text x="120" y="90" fill="#facc15" fontSize="9" textAnchor="middle">১ অণু গ্লুকোজ = মোট ৩৮ ATP (সবাত শ্বসন)</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1" />
          <text x="15" y="24" fill="#fb923c" fontSize="11" fontWeight="bold">শ্বসনের ৪টি পর্যায় ও নিট এনার্জি ব্যালেন্স:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. গ্লাইকোলাইসিস (সাইটোপ্লাজম): ২ ATP + ২ NADH₂</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. এসিটাইল কো-এ ও ৩. ক্রেবস চক্র (মাইটোকন্ড্রিয়া)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৪. ইলেকট্রন ট্রান্সপোর্ট চেইনে জারণ ও মোট ৩৮টি ATP</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৭: এসিটাইল কো-এ সৃষ্টি ও লিংক রিঅ্যাকশন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Pyruvate to Acetyl-CoA Link Step</text>
          <g transform="translate(60, 68)">
            <rect x="10" y="25" width="60" height="30" rx="4" fill="#0284c7" /><text x="40" y="44" fill="#fff" fontSize="8" textAnchor="middle">গ্লাইকোলাইসিস</text>
            <circle cx="130" cy="40" r="24" fill="#7c2d12" stroke="#ea580c" strokeWidth="2" /><text x="130" y="44" fill="#fff" fontSize="8" textAnchor="middle">ক্রেবস চক্র</text>
            <rect x="180" y="25" width="50" height="30" rx="4" fill="#059669" /><text x="205" y="44" fill="#fff" fontSize="8" textAnchor="middle">ETS</text>
            <text x="120" y="90" fill="#facc15" fontSize="9" textAnchor="middle">১ অণু গ্লুকোজ = মোট ৩৮ ATP (সবাত শ্বসন)</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1" />
          <text x="15" y="24" fill="#fb923c" fontSize="11" fontWeight="bold">শ্বসনের ৪টি পর্যায় ও নিট এনার্জি ব্যালেন্স:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. গ্লাইকোলাইসিস (সাইটোপ্লাজম): ২ ATP + ২ NADH₂</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. এসিটাইল কো-এ ও ৩. ক্রেবস চক্র (মাইটোকন্ড্রিয়া)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৪. ইলেকট্রন ট্রান্সপোর্ট চেইনে জারণ ও মোট ৩৮টি ATP</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৭: ক্রেবস চক্র (TCA চক্র) — সাইট্রিক এসিড লুপ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Krebs Citric Acid Cycle Loop (TCA)</text>
          <g transform="translate(60, 68)">
            <rect x="10" y="25" width="60" height="30" rx="4" fill="#0284c7" /><text x="40" y="44" fill="#fff" fontSize="8" textAnchor="middle">গ্লাইকোলাইসিস</text>
            <circle cx="130" cy="40" r="24" fill="#7c2d12" stroke="#ea580c" strokeWidth="2" /><text x="130" y="44" fill="#fff" fontSize="8" textAnchor="middle">ক্রেবস চক্র</text>
            <rect x="180" y="25" width="50" height="30" rx="4" fill="#059669" /><text x="205" y="44" fill="#fff" fontSize="8" textAnchor="middle">ETS</text>
            <text x="120" y="90" fill="#facc15" fontSize="9" textAnchor="middle">১ অণু গ্লুকোজ = মোট ৩৮ ATP (সবাত শ্বসন)</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1" />
          <text x="15" y="24" fill="#fb923c" fontSize="11" fontWeight="bold">শ্বসনের ৪টি পর্যায় ও নিট এনার্জি ব্যালেন্স:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. গ্লাইকোলাইসিস (সাইটোপ্লাজম): ২ ATP + ২ NADH₂</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. এসিটাইল কো-এ ও ৩. ক্রেবস চক্র (মাইটোকন্ড্রিয়া)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৪. ইলেকট্রন ট্রান্সপোর্ট চেইনে জারণ ও মোট ৩৮টি ATP</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৭: ইলেকট্রন ট্রান্সপোর্ট সিস্টেম (ETS) ক্রিস্টি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Respiratory Electron Transport Chain</text>
          <g transform="translate(60, 68)">
            <rect x="10" y="25" width="60" height="30" rx="4" fill="#0284c7" /><text x="40" y="44" fill="#fff" fontSize="8" textAnchor="middle">গ্লাইকোলাইসিস</text>
            <circle cx="130" cy="40" r="24" fill="#7c2d12" stroke="#ea580c" strokeWidth="2" /><text x="130" y="44" fill="#fff" fontSize="8" textAnchor="middle">ক্রেবস চক্র</text>
            <rect x="180" y="25" width="50" height="30" rx="4" fill="#059669" /><text x="205" y="44" fill="#fff" fontSize="8" textAnchor="middle">ETS</text>
            <text x="120" y="90" fill="#facc15" fontSize="9" textAnchor="middle">১ অণু গ্লুকোজ = মোট ৩৮ ATP (সবাত শ্বসন)</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1" />
          <text x="15" y="24" fill="#fb923c" fontSize="11" fontWeight="bold">শ্বসনের ৪টি পর্যায় ও নিট এনার্জি ব্যালেন্স:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. গ্লাইকোলাইসিস (সাইটোপ্লাজম): ২ ATP + ২ NADH₂</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. এসিটাইল কো-এ ও ৩. ক্রেবস চক্র (মাইটোকন্ড্রিয়া)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৪. ইলেকট্রন ট্রান্সপোর্ট চেইনে জারণ ও মোট ৩৮টি ATP</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৬: অবাত শ্বসন — ইস্টের অ্যালকোহলিক গাঁজন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Yeast Alcoholic Fermentation Vessel</text>
          <g transform="translate(60, 68)">
            <rect x="10" y="25" width="60" height="30" rx="4" fill="#0284c7" /><text x="40" y="44" fill="#fff" fontSize="8" textAnchor="middle">গ্লাইকোলাইসিস</text>
            <circle cx="130" cy="40" r="24" fill="#7c2d12" stroke="#ea580c" strokeWidth="2" /><text x="130" y="44" fill="#fff" fontSize="8" textAnchor="middle">ক্রেবস চক্র</text>
            <rect x="180" y="25" width="50" height="30" rx="4" fill="#059669" /><text x="205" y="44" fill="#fff" fontSize="8" textAnchor="middle">ETS</text>
            <text x="120" y="90" fill="#facc15" fontSize="9" textAnchor="middle">১ অণু গ্লুকোজ = মোট ৩৮ ATP (সবাত শ্বসন)</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1" />
          <text x="15" y="24" fill="#fb923c" fontSize="11" fontWeight="bold">শ্বসনের ৪টি পর্যায় ও নিট এনার্জি ব্যালেন্স:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. গ্লাইকোলাইসিস (সাইটোপ্লাজম): ২ ATP + ২ NADH₂</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. এসিটাইল কো-এ ও ৩. ক্রেবস চক্র (মাইটোকন্ড্রিয়া)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৪. ইলেকট্রন ট্রান্সপোর্ট চেইনে জারণ ও মোট ৩৮টি ATP</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৬: ল্যাকটিক এসিড সন্ধান — পেশি ক্লান্তি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Lactic Acid Muscle Fatigue Reaction</text>
          <g transform="translate(60, 68)">
            <rect x="10" y="25" width="60" height="30" rx="4" fill="#0284c7" /><text x="40" y="44" fill="#fff" fontSize="8" textAnchor="middle">গ্লাইকোলাইসিস</text>
            <circle cx="130" cy="40" r="24" fill="#7c2d12" stroke="#ea580c" strokeWidth="2" /><text x="130" y="44" fill="#fff" fontSize="8" textAnchor="middle">ক্রেবস চক্র</text>
            <rect x="180" y="25" width="50" height="30" rx="4" fill="#059669" /><text x="205" y="44" fill="#fff" fontSize="8" textAnchor="middle">ETS</text>
            <text x="120" y="90" fill="#facc15" fontSize="9" textAnchor="middle">১ অণু গ্লুকোজ = মোট ৩৮ ATP (সবাত শ্বসন)</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1" />
          <text x="15" y="24" fill="#fb923c" fontSize="11" fontWeight="bold">শ্বসনের ৪টি পর্যায় ও নিট এনার্জি ব্যালেন্স:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. গ্লাইকোলাইসিস (সাইটোপ্লাজম): ২ ATP + ২ NADH₂</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. এসিটাইল কো-এ ও ৩. ক্রেবস চক্র (মাইটোকন্ড্রিয়া)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৪. ইলেকট্রন ট্রান্সপোর্ট চেইনে জারণ ও মোট ৩৮টি ATP</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৪.৭: গ্লুকোজ প্রতি নিট ৩৮ ATP ব্যালেন্স শিট</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Net 38 ATP Energy Balance Sheet</text>
          <g transform="translate(60, 68)">
            <rect x="10" y="25" width="60" height="30" rx="4" fill="#0284c7" /><text x="40" y="44" fill="#fff" fontSize="8" textAnchor="middle">গ্লাইকোলাইসিস</text>
            <circle cx="130" cy="40" r="24" fill="#7c2d12" stroke="#ea580c" strokeWidth="2" /><text x="130" y="44" fill="#fff" fontSize="8" textAnchor="middle">ক্রেবস চক্র</text>
            <rect x="180" y="25" width="50" height="30" rx="4" fill="#059669" /><text x="205" y="44" fill="#fff" fontSize="8" textAnchor="middle">ETS</text>
            <text x="120" y="90" fill="#facc15" fontSize="9" textAnchor="middle">১ অণু গ্লুকোজ = মোট ৩৮ ATP (সবাত শ্বসন)</text>
          </g>
          <g transform="translate(330, 65)"><rect x="0" y="0" width="310" height="110" rx="8" fill="#0f172a" stroke="#ea580c" strokeWidth="1" />
          <text x="15" y="24" fill="#fb923c" fontSize="11" fontWeight="bold">শ্বসনের ৪টি পর্যায় ও নিট এনার্জি ব্যালেন্স:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">১. গ্লাইকোলাইসিস (সাইটোপ্লাজম): ২ ATP + ২ NADH₂</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">২. এসিটাইল কো-এ ও ৩. ক্রেবস চক্র (মাইটোকন্ড্রিয়া)</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">৪. ইলেকট্রন ট্রান্সপোর্ট চেইনে জারণ ও মোট ৩৮টি ATP</text></g>
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
  // CHAPTER 5
  // ========================================================
  if (chNum === 5) {
    if (id === 1) {
      return (
        <svg viewBox="0 0 680 230" className="w-full h-auto select-none">
          <rect x="5" y="5" width="670" height="220" rx="14" fill="#090d16" stroke="#1e293b" strokeWidth="1.5" />
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.১: উদ্ভিদের ১০টি ম্যাক্রো উপাদান ও আয়ন শোষণ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Plant Macronutrients Essential 10</text>
          <g transform="translate(80, 65)">
            <polygon points="110,15 160,85 60,85" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <line x1="75" y1="65" x2="145" y2="65" stroke="#f59e0b" strokeWidth="1.5" />
            <line x1="90" y1="45" x2="130" y2="45" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="110" y="38" fill="#ef4444" fontSize="7" textAnchor="middle">তেল-চর্বি</text>
            <text x="110" y="58" fill="#38bdf8" fontSize="7" textAnchor="middle">আমিষ-দুধ</text>
            <text x="110" y="78" fill="#10b981" fontSize="7" textAnchor="middle">শর্করা (বেস)</text>
            <text x="110" y="105" fill="#facc15" fontSize="9" textAnchor="middle" fontWeight="bold">সুষম খাদ্য পিরামিড</text>
          </g>
          <g transform="translate(310, 65)"><rect x="0" y="0" width="330" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">মানবদেহের ৬টি খাদ্য উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• শর্করা (৪ kcal/g): তাৎক্ষণিক শক্তির প্রধান উৎস</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• আমিষ (৪ kcal/g): দেহ গঠন, ক্ষয়পূরণ ও এনজাইম</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• স্নেহ (৯ kcal/g): সর্বোচ্চ শক্তি সঞ্চয় ও সুরক্ষা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.২: পুষ্টি উপাদানের অভাবে ক্লোরোসিস ও ডাইব্যাক</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Plant Deficiency Chlorosis & Necrosis</text>
          <g transform="translate(80, 65)">
            <polygon points="110,15 160,85 60,85" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <line x1="75" y1="65" x2="145" y2="65" stroke="#f59e0b" strokeWidth="1.5" />
            <line x1="90" y1="45" x2="130" y2="45" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="110" y="38" fill="#ef4444" fontSize="7" textAnchor="middle">তেল-চর্বি</text>
            <text x="110" y="58" fill="#38bdf8" fontSize="7" textAnchor="middle">আমিষ-দুধ</text>
            <text x="110" y="78" fill="#10b981" fontSize="7" textAnchor="middle">শর্করা (বেস)</text>
            <text x="110" y="105" fill="#facc15" fontSize="9" textAnchor="middle" fontWeight="bold">সুষম খাদ্য পিরামিড</text>
          </g>
          <g transform="translate(310, 65)"><rect x="0" y="0" width="330" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">মানবদেহের ৬টি খাদ্য উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• শর্করা (৪ kcal/g): তাৎক্ষণিক শক্তির প্রধান উৎস</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• আমিষ (৪ kcal/g): দেহ গঠন, ক্ষয়পূরণ ও এনজাইম</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• স্নেহ (৯ kcal/g): সর্বোচ্চ শক্তি সঞ্চয় ও সুরক্ষা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৩: মানব সুষম খাদ্য পিরামিড ও ক্যালোরি বণ্টন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Balanced Human Food Pyramid Calories</text>
          <g transform="translate(80, 65)">
            <polygon points="110,15 160,85 60,85" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <line x1="75" y1="65" x2="145" y2="65" stroke="#f59e0b" strokeWidth="1.5" />
            <line x1="90" y1="45" x2="130" y2="45" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="110" y="38" fill="#ef4444" fontSize="7" textAnchor="middle">তেল-চর্বি</text>
            <text x="110" y="58" fill="#38bdf8" fontSize="7" textAnchor="middle">আমিষ-দুধ</text>
            <text x="110" y="78" fill="#10b981" fontSize="7" textAnchor="middle">শর্করা (বেস)</text>
            <text x="110" y="105" fill="#facc15" fontSize="9" textAnchor="middle" fontWeight="bold">সুষম খাদ্য পিরামিড</text>
          </g>
          <g transform="translate(310, 65)"><rect x="0" y="0" width="330" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">মানবদেহের ৬টি খাদ্য উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• শর্করা (৪ kcal/g): তাৎক্ষণিক শক্তির প্রধান উৎস</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• আমিষ (৪ kcal/g): দেহ গঠন, ক্ষয়পূরণ ও এনজাইম</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• স্নেহ (৯ kcal/g): সর্বোচ্চ শক্তি সঞ্চয় ও সুরক্ষা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৩: শর্করা অণু — স্টার্চ ও গ্লুকোজ পলিমার</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Starch Polymer & Glucose Monomers</text>
          <g transform="translate(80, 65)">
            <polygon points="110,15 160,85 60,85" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <line x1="75" y1="65" x2="145" y2="65" stroke="#f59e0b" strokeWidth="1.5" />
            <line x1="90" y1="45" x2="130" y2="45" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="110" y="38" fill="#ef4444" fontSize="7" textAnchor="middle">তেল-চর্বি</text>
            <text x="110" y="58" fill="#38bdf8" fontSize="7" textAnchor="middle">আমিষ-দুধ</text>
            <text x="110" y="78" fill="#10b981" fontSize="7" textAnchor="middle">শর্করা (বেস)</text>
            <text x="110" y="105" fill="#facc15" fontSize="9" textAnchor="middle" fontWeight="bold">সুষম খাদ্য পিরামিড</text>
          </g>
          <g transform="translate(310, 65)"><rect x="0" y="0" width="330" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">মানবদেহের ৬টি খাদ্য উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• শর্করা (৪ kcal/g): তাৎক্ষণিক শক্তির প্রধান উৎস</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• আমিষ (৪ kcal/g): দেহ গঠন, ক্ষয়পূরণ ও এনজাইম</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• স্নেহ (৯ kcal/g): সর্বোচ্চ শক্তি সঞ্চয় ও সুরক্ষা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৩: আমিষ — পেপটাইড বন্ধন ও অ্যামাইনো এসিড</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Protein Polypeptide Chain Architecture</text>
          <g transform="translate(80, 65)">
            <polygon points="110,15 160,85 60,85" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <line x1="75" y1="65" x2="145" y2="65" stroke="#f59e0b" strokeWidth="1.5" />
            <line x1="90" y1="45" x2="130" y2="45" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="110" y="38" fill="#ef4444" fontSize="7" textAnchor="middle">তেল-চর্বি</text>
            <text x="110" y="58" fill="#38bdf8" fontSize="7" textAnchor="middle">আমিষ-দুধ</text>
            <text x="110" y="78" fill="#10b981" fontSize="7" textAnchor="middle">শর্করা (বেস)</text>
            <text x="110" y="105" fill="#facc15" fontSize="9" textAnchor="middle" fontWeight="bold">সুষম খাদ্য পিরামিড</text>
          </g>
          <g transform="translate(310, 65)"><rect x="0" y="0" width="330" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">মানবদেহের ৬টি খাদ্য উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• শর্করা (৪ kcal/g): তাৎক্ষণিক শক্তির প্রধান উৎস</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• আমিষ (৪ kcal/g): দেহ গঠন, ক্ষয়পূরণ ও এনজাইম</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• স্নেহ (৯ kcal/g): সর্বোচ্চ শক্তি সঞ্চয় ও সুরক্ষা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৩: স্নেহ পদার্থ — গ্লিসারল ও ফ্যাটি এসিড এস্টার</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Lipid Triglyceride Molecular Structure</text>
          <g transform="translate(80, 65)">
            <polygon points="110,15 160,85 60,85" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <line x1="75" y1="65" x2="145" y2="65" stroke="#f59e0b" strokeWidth="1.5" />
            <line x1="90" y1="45" x2="130" y2="45" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="110" y="38" fill="#ef4444" fontSize="7" textAnchor="middle">তেল-চর্বি</text>
            <text x="110" y="58" fill="#38bdf8" fontSize="7" textAnchor="middle">আমিষ-দুধ</text>
            <text x="110" y="78" fill="#10b981" fontSize="7" textAnchor="middle">শর্করা (বেস)</text>
            <text x="110" y="105" fill="#facc15" fontSize="9" textAnchor="middle" fontWeight="bold">সুষম খাদ্য পিরামিড</text>
          </g>
          <g transform="translate(310, 65)"><rect x="0" y="0" width="330" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="1" />
          <text x="15" y="24" fill="#facc15" fontSize="11" fontWeight="bold">মানবদেহের ৬টি খাদ্য উপাদান:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• শর্করা (৪ kcal/g): তাৎক্ষণিক শক্তির প্রধান উৎস</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• আমিষ (৪ kcal/g): দেহ গঠন, ক্ষয়পূরণ ও এনজাইম</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• স্নেহ (৯ kcal/g): সর্বোচ্চ শক্তি সঞ্চয় ও সুরক্ষা</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৫: মানব পৌষ্টিকতন্ত্রের সামগ্রিক ৩ডি মডেল</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Human Digestive Tract Comprehensive</text>
          <g transform="translate(80, 65)">
            <path d="M 80 20 C 120 15, 140 35, 140 60 C 140 85, 120 100, 110 100 C 100 100, 80 85, 80 60 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 95 35 C 115 35, 125 50, 125 65 C 125 80, 110 90, 105 90 C 100 90, 95 80, 95 65 Z" fill="#fde047" fillOpacity="0.4" stroke="#eab308" strokeWidth="1" />
            <circle cx="110" cy="65" r="7" fill="#ef4444" />
            <text x="110" y="115" fill="#f8fafc" fontSize="9" textAnchor="middle">এনামেল ও দন্তমজ্জা (Pulp)</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1" />
          <text x="15" y="24" fill="#ffffff" fontSize="11" fontWeight="bold">দাঁতের স্তরবিন্যাস ও দন্ত সংকেত:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">• এনামেল: মানবদেহের সবচেয়ে শক্ত ও অজৈব স্তর</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ডেন্টিন ও দন্তমজ্জা: স্নায়ু ও রক্তজালক সমৃদ্ধ</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• পূর্ণবয়স্ক মানুষের সংকেত: I 2/2, C 1/1, P 2/2, M 3/3 = ৩২টি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৫: দাঁতের অভ্যন্তরীণ গঠন — এনামেল ও ডেন্টিন</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Molar Tooth Internal Layers & Pulp</text>
          <g transform="translate(80, 65)">
            <path d="M 80 20 C 120 15, 140 35, 140 60 C 140 85, 120 100, 110 100 C 100 100, 80 85, 80 60 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 95 35 C 115 35, 125 50, 125 65 C 125 80, 110 90, 105 90 C 100 90, 95 80, 95 65 Z" fill="#fde047" fillOpacity="0.4" stroke="#eab308" strokeWidth="1" />
            <circle cx="110" cy="65" r="7" fill="#ef4444" />
            <text x="110" y="115" fill="#f8fafc" fontSize="9" textAnchor="middle">এনামেল ও দন্তমজ্জা (Pulp)</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1" />
          <text x="15" y="24" fill="#ffffff" fontSize="11" fontWeight="bold">দাঁতের স্তরবিন্যাস ও দন্ত সংকেত:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">• এনামেল: মানবদেহের সবচেয়ে শক্ত ও অজৈব স্তর</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ডেন্টিন ও দন্তমজ্জা: স্নায়ু ও রক্তজালক সমৃদ্ধ</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• পূর্ণবয়স্ক মানুষের সংকেত: I 2/2, C 1/1, P 2/2, M 3/3 = ৩২টি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৬: লালাগ্রন্থি — প্যারোটিড ও টায়ালিন এনজাইম</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Salivary Glands & Ptyalin Amylase</text>
          <g transform="translate(80, 65)">
            <path d="M 80 20 C 120 15, 140 35, 140 60 C 140 85, 120 100, 110 100 C 100 100, 80 85, 80 60 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 95 35 C 115 35, 125 50, 125 65 C 125 80, 110 90, 105 90 C 100 90, 95 80, 95 65 Z" fill="#fde047" fillOpacity="0.4" stroke="#eab308" strokeWidth="1" />
            <circle cx="110" cy="65" r="7" fill="#ef4444" />
            <text x="110" y="115" fill="#f8fafc" fontSize="9" textAnchor="middle">এনামেল ও দন্তমজ্জা (Pulp)</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1" />
          <text x="15" y="24" fill="#ffffff" fontSize="11" fontWeight="bold">দাঁতের স্তরবিন্যাস ও দন্ত সংকেত:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">• এনামেল: মানবদেহের সবচেয়ে শক্ত ও অজৈব স্তর</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• ডেন্টিন ও দন্তমজ্জা: স্নায়ু ও রক্তজালক সমৃদ্ধ</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• পূর্ণবয়স্ক মানুষের সংকেত: I 2/2, C 1/1, P 2/2, M 3/3 = ৩২টি</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৫: পাকস্থলী — কার্ডিয়া, ফান্ডাস ও গ্যাস্ট্রিক পিট</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Stomach Anatomy Muscular Rugae</text>
          <g transform="translate(60, 65)">
            <path d="M 80 15 C 50 35, 50 80, 90 85 C 130 90, 130 50, 110 40 Z" fill="#be123c" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="2" />
            <ellipse cx="160" cy="50" rx="35" ry="22" fill="#78350f" fillOpacity="0.6" stroke="#b45309" strokeWidth="1.5" />
            <path d="M 80 85 Q 110 110 140 85 T 180 95" fill="none" stroke="#eab308" strokeWidth="3" />
            <text x="90" y="55" fill="#fff" fontSize="8" textAnchor="middle">পাকস্থলী</text>
            <text x="160" y="54" fill="#fff" fontSize="8" textAnchor="middle">যকৃৎ</text>
            <text x="120" y="112" fill="#facc15" fontSize="9" textAnchor="middle">অন্ত্রের ভিলাই দ্বারা শোষণ</text>
          </g>
          <g transform="translate(310, 65)"><rect x="0" y="0" width="330" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">পরিপাক নালি ও সহায়ক গ্রন্থিসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পাকস্থলী: হাইড্রোক্লোরিক এসিড (HCl) ও পেপসিন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• যকৃৎ: পিত্তরস ক্ষরণ যা চর্বিকে ইমালসিফাই করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অগ্ন্যাশয়: ট্রিপসিন, অ্যামাইলেজ ও লাইপেজ এনজাইম</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৭: গ্যাস্ট্রিক জুস — HCl ও পেপসিন দ্বারা পরিপাক</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Gastric Acid (HCl) & Pepsin Protease</text>
          <g transform="translate(60, 65)">
            <path d="M 80 15 C 50 35, 50 80, 90 85 C 130 90, 130 50, 110 40 Z" fill="#be123c" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="2" />
            <ellipse cx="160" cy="50" rx="35" ry="22" fill="#78350f" fillOpacity="0.6" stroke="#b45309" strokeWidth="1.5" />
            <path d="M 80 85 Q 110 110 140 85 T 180 95" fill="none" stroke="#eab308" strokeWidth="3" />
            <text x="90" y="55" fill="#fff" fontSize="8" textAnchor="middle">পাকস্থলী</text>
            <text x="160" y="54" fill="#fff" fontSize="8" textAnchor="middle">যকৃৎ</text>
            <text x="120" y="112" fill="#facc15" fontSize="9" textAnchor="middle">অন্ত্রের ভিলাই দ্বারা শোষণ</text>
          </g>
          <g transform="translate(310, 65)"><rect x="0" y="0" width="330" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">পরিপাক নালি ও সহায়ক গ্রন্থিসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পাকস্থলী: হাইড্রোক্লোরিক এসিড (HCl) ও পেপসিন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• যকৃৎ: পিত্তরস ক্ষরণ যা চর্বিকে ইমালসিফাই করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অগ্ন্যাশয়: ট্রিপসিন, অ্যামাইলেজ ও লাইপেজ এনজাইম</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৬: যকৃৎ — মানবদেহের সবচেয়ে বড় গ্রন্থি ও পিত্তথলি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Liver Lobules & Gallbladder Anatomy</text>
          <g transform="translate(60, 65)">
            <path d="M 80 15 C 50 35, 50 80, 90 85 C 130 90, 130 50, 110 40 Z" fill="#be123c" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="2" />
            <ellipse cx="160" cy="50" rx="35" ry="22" fill="#78350f" fillOpacity="0.6" stroke="#b45309" strokeWidth="1.5" />
            <path d="M 80 85 Q 110 110 140 85 T 180 95" fill="none" stroke="#eab308" strokeWidth="3" />
            <text x="90" y="55" fill="#fff" fontSize="8" textAnchor="middle">পাকস্থলী</text>
            <text x="160" y="54" fill="#fff" fontSize="8" textAnchor="middle">যকৃৎ</text>
            <text x="120" y="112" fill="#facc15" fontSize="9" textAnchor="middle">অন্ত্রের ভিলাই দ্বারা শোষণ</text>
          </g>
          <g transform="translate(310, 65)"><rect x="0" y="0" width="330" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">পরিপাক নালি ও সহায়ক গ্রন্থিসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পাকস্থলী: হাইড্রোক্লোরিক এসিড (HCl) ও পেপসিন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• যকৃৎ: পিত্তরস ক্ষরণ যা চর্বিকে ইমালসিফাই করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অগ্ন্যাশয়: ট্রিপসিন, অ্যামাইলেজ ও লাইপেজ এনজাইম</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৬: অগ্ন্যাশয় — মিশ্র গ্রন্থি ও আইলেটস দ্বীপপুঞ্জ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Pancreas Acini & Islets of Langerhans</text>
          <g transform="translate(60, 65)">
            <path d="M 80 15 C 50 35, 50 80, 90 85 C 130 90, 130 50, 110 40 Z" fill="#be123c" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="2" />
            <ellipse cx="160" cy="50" rx="35" ry="22" fill="#78350f" fillOpacity="0.6" stroke="#b45309" strokeWidth="1.5" />
            <path d="M 80 85 Q 110 110 140 85 T 180 95" fill="none" stroke="#eab308" strokeWidth="3" />
            <text x="90" y="55" fill="#fff" fontSize="8" textAnchor="middle">পাকস্থলী</text>
            <text x="160" y="54" fill="#fff" fontSize="8" textAnchor="middle">যকৃৎ</text>
            <text x="120" y="112" fill="#facc15" fontSize="9" textAnchor="middle">অন্ত্রের ভিলাই দ্বারা শোষণ</text>
          </g>
          <g transform="translate(310, 65)"><rect x="0" y="0" width="330" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">পরিপাক নালি ও সহায়ক গ্রন্থিসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পাকস্থলী: হাইড্রোক্লোরিক এসিড (HCl) ও পেপসিন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• যকৃৎ: পিত্তরস ক্ষরণ যা চর্বিকে ইমালসিফাই করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অগ্ন্যাশয়: ট্রিপসিন, অ্যামাইলেজ ও লাইপেজ এনজাইম</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৫: ক্ষুদ্রান্ত্র — ডিওডেনাম, জেজুনাম ও ইলিয়াম লুপ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Small Intestine Duodenal C-Loop & Ileum</text>
          <g transform="translate(60, 65)">
            <path d="M 80 15 C 50 35, 50 80, 90 85 C 130 90, 130 50, 110 40 Z" fill="#be123c" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="2" />
            <ellipse cx="160" cy="50" rx="35" ry="22" fill="#78350f" fillOpacity="0.6" stroke="#b45309" strokeWidth="1.5" />
            <path d="M 80 85 Q 110 110 140 85 T 180 95" fill="none" stroke="#eab308" strokeWidth="3" />
            <text x="90" y="55" fill="#fff" fontSize="8" textAnchor="middle">পাকস্থলী</text>
            <text x="160" y="54" fill="#fff" fontSize="8" textAnchor="middle">যকৃৎ</text>
            <text x="120" y="112" fill="#facc15" fontSize="9" textAnchor="middle">অন্ত্রের ভিলাই দ্বারা শোষণ</text>
          </g>
          <g transform="translate(310, 65)"><rect x="0" y="0" width="330" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">পরিপাক নালি ও সহায়ক গ্রন্থিসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পাকস্থলী: হাইড্রোক্লোরিক এসিড (HCl) ও পেপসিন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• যকৃৎ: পিত্তরস ক্ষরণ যা চর্বিকে ইমালসিফাই করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অগ্ন্যাশয়: ট্রিপসিন, অ্যামাইলেজ ও লাইপেজ এনজাইম</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৭: আন্ত্রিক ভিলাই — শোষণকারী মাইক্রোভিলাই স্তর</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Intestinal Villi & Lacteal Vessel Network</text>
          <g transform="translate(60, 65)">
            <path d="M 80 15 C 50 35, 50 80, 90 85 C 130 90, 130 50, 110 40 Z" fill="#be123c" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="2" />
            <ellipse cx="160" cy="50" rx="35" ry="22" fill="#78350f" fillOpacity="0.6" stroke="#b45309" strokeWidth="1.5" />
            <path d="M 80 85 Q 110 110 140 85 T 180 95" fill="none" stroke="#eab308" strokeWidth="3" />
            <text x="90" y="55" fill="#fff" fontSize="8" textAnchor="middle">পাকস্থলী</text>
            <text x="160" y="54" fill="#fff" fontSize="8" textAnchor="middle">যকৃৎ</text>
            <text x="120" y="112" fill="#facc15" fontSize="9" textAnchor="middle">অন্ত্রের ভিলাই দ্বারা শোষণ</text>
          </g>
          <g transform="translate(310, 65)"><rect x="0" y="0" width="330" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">পরিপাক নালি ও সহায়ক গ্রন্থিসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পাকস্থলী: হাইড্রোক্লোরিক এসিড (HCl) ও পেপসিন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• যকৃৎ: পিত্তরস ক্ষরণ যা চর্বিকে ইমালসিফাই করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অগ্ন্যাশয়: ট্রিপসিন, অ্যামাইলেজ ও লাইপেজ এনজাইম</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৭: পিত্তলবণ দ্বারা চর্বির ইমালসিফিকেশন ও লাইপেজ</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Fat Emulsification by Bile Salts & Lipase</text>
          <g transform="translate(60, 65)">
            <path d="M 80 15 C 50 35, 50 80, 90 85 C 130 90, 130 50, 110 40 Z" fill="#be123c" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="2" />
            <ellipse cx="160" cy="50" rx="35" ry="22" fill="#78350f" fillOpacity="0.6" stroke="#b45309" strokeWidth="1.5" />
            <path d="M 80 85 Q 110 110 140 85 T 180 95" fill="none" stroke="#eab308" strokeWidth="3" />
            <text x="90" y="55" fill="#fff" fontSize="8" textAnchor="middle">পাকস্থলী</text>
            <text x="160" y="54" fill="#fff" fontSize="8" textAnchor="middle">যকৃৎ</text>
            <text x="120" y="112" fill="#facc15" fontSize="9" textAnchor="middle">অন্ত্রের ভিলাই দ্বারা শোষণ</text>
          </g>
          <g transform="translate(310, 65)"><rect x="0" y="0" width="330" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">পরিপাক নালি ও সহায়ক গ্রন্থিসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পাকস্থলী: হাইড্রোক্লোরিক এসিড (HCl) ও পেপসিন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• যকৃৎ: পিত্তরস ক্ষরণ যা চর্বিকে ইমালসিফাই করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অগ্ন্যাশয়: ট্রিপসিন, অ্যামাইলেজ ও লাইপেজ এনজাইম</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৫: বৃহদান্ত্র — সিকাম, কোলন ও অ্যাপেনডিক্স</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Large Intestine Colon & Appendix Tip</text>
          <g transform="translate(60, 65)">
            <path d="M 80 15 C 50 35, 50 80, 90 85 C 130 90, 130 50, 110 40 Z" fill="#be123c" fillOpacity="0.5" stroke="#f43f5e" strokeWidth="2" />
            <ellipse cx="160" cy="50" rx="35" ry="22" fill="#78350f" fillOpacity="0.6" stroke="#b45309" strokeWidth="1.5" />
            <path d="M 80 85 Q 110 110 140 85 T 180 95" fill="none" stroke="#eab308" strokeWidth="3" />
            <text x="90" y="55" fill="#fff" fontSize="8" textAnchor="middle">পাকস্থলী</text>
            <text x="160" y="54" fill="#fff" fontSize="8" textAnchor="middle">যকৃৎ</text>
            <text x="120" y="112" fill="#facc15" fontSize="9" textAnchor="middle">অন্ত্রের ভিলাই দ্বারা শোষণ</text>
          </g>
          <g transform="translate(310, 65)"><rect x="0" y="0" width="330" height="110" rx="8" fill="#0f172a" stroke="#f43f5e" strokeWidth="1" />
          <text x="15" y="24" fill="#f43f5e" fontSize="11" fontWeight="bold">পরিপাক নালি ও সহায়ক গ্রন্থিসমূহ:</text>
          <text x="15" y="46" fill="#e2e8f0" fontSize="10">• পাকস্থলী: হাইড্রোক্লোরিক এসিড (HCl) ও পেপসিন</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• যকৃৎ: পিত্তরস ক্ষরণ যা চর্বিকে ইমালসিফাই করে</text>
          <text x="15" y="86" fill="#facc15" fontSize="10">• অগ্ন্যাশয়: ট্রিপসিন, অ্যামাইলেজ ও লাইপেজ এনজাইম</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৪: বিএমআই (BMI) স্কেল ও আদর্শ ওজনের চার্ট</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Body Mass Index Dynamic Assessment</text>
          <g transform="translate(80, 65)">
            <rect x="0" y="20" width="180" height="25" rx="6" fill="#10b981" /><text x="90" y="36" fill="#fff" fontSize="9" textAnchor="middle">আদর্শ BMI: ১৮.৫ - ২৪.৯</text>
            <rect x="0" y="55" width="180" height="25" rx="6" fill="#f59e0b" /><text x="90" y="71" fill="#fff" fontSize="9" textAnchor="middle">অতিরিক্ত ওজন: ২৫.০ - ২৯.৯</text>
            <rect x="0" y="90" width="180" height="25" rx="6" fill="#ef4444" /><text x="90" y="106" fill="#fff" fontSize="9" textAnchor="middle">স্থূলতা: ৩০ বা তার বেশি</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">বিএমআই (BMI) সূত্র ও স্বাস্থ্য ঝুঁকি:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">BMI = ওজন (কেজি) ÷ [উচ্চতা (মিটার)]²</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• আলসার: হেলিকোব্যাক্টার পাইলোরি সংক্রমণ</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• অ্যাপেনডিসাইটিস: বৃহদান্ত্রের সিকামের প্রদাহ</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৮: গ্যাস্ট্রিক আলসার ক্ষত ও হেলিকোব্যাক্টার পাইলোরি</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Peptic Ulcer Crater & H. Pylori Bacteria</text>
          <g transform="translate(80, 65)">
            <rect x="0" y="20" width="180" height="25" rx="6" fill="#10b981" /><text x="90" y="36" fill="#fff" fontSize="9" textAnchor="middle">আদর্শ BMI: ১৮.৫ - ২৪.৯</text>
            <rect x="0" y="55" width="180" height="25" rx="6" fill="#f59e0b" /><text x="90" y="71" fill="#fff" fontSize="9" textAnchor="middle">অতিরিক্ত ওজন: ২৫.০ - ২৯.৯</text>
            <rect x="0" y="90" width="180" height="25" rx="6" fill="#ef4444" /><text x="90" y="106" fill="#fff" fontSize="9" textAnchor="middle">স্থূলতা: ৩০ বা তার বেশি</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">বিএমআই (BMI) সূত্র ও স্বাস্থ্য ঝুঁকি:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">BMI = ওজন (কেজি) ÷ [উচ্চতা (মিটার)]²</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• আলসার: হেলিকোব্যাক্টার পাইলোরি সংক্রমণ</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• অ্যাপেনডিসাইটিস: বৃহদান্ত্রের সিকামের প্রদাহ</text></g>
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
          <text x="340" y="26" fill="#38bdf8" fontSize="12" textAnchor="middle" fontWeight="bold">টপিক ৫.৮: অ্যাপেনডিসাইটিস ও পিত্তথলির কোলেস্টেরল পাথর</text>
          <text x="340" y="42" fill="#94a3b8" fontSize="10" textAnchor="middle">Appendicitis Inflammation & Gallstones</text>
          <g transform="translate(80, 65)">
            <rect x="0" y="20" width="180" height="25" rx="6" fill="#10b981" /><text x="90" y="36" fill="#fff" fontSize="9" textAnchor="middle">আদর্শ BMI: ১৮.৫ - ২৪.৯</text>
            <rect x="0" y="55" width="180" height="25" rx="6" fill="#f59e0b" /><text x="90" y="71" fill="#fff" fontSize="9" textAnchor="middle">অতিরিক্ত ওজন: ২৫.০ - ২৯.৯</text>
            <rect x="0" y="90" width="180" height="25" rx="6" fill="#ef4444" /><text x="90" y="106" fill="#fff" fontSize="9" textAnchor="middle">স্থূলতা: ৩০ বা তার বেশি</text>
          </g>
          <g transform="translate(300, 65)"><rect x="0" y="0" width="340" height="110" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
          <text x="15" y="24" fill="#34d399" fontSize="11" fontWeight="bold">বিএমআই (BMI) সূত্র ও স্বাস্থ্য ঝুঁকি:</text>
          <text x="15" y="46" fill="#facc15" fontSize="10">BMI = ওজন (কেজি) ÷ [উচ্চতা (মিটার)]²</text>
          <text x="15" y="66" fill="#cbd5e1" fontSize="10">• আলসার: হেলিকোব্যাক্টার পাইলোরি সংক্রমণ</text>
          <text x="15" y="86" fill="#38bdf8" fontSize="10">• অ্যাপেনডিসাইটিস: বৃহদান্ত্রের সিকামের প্রদাহ</text></g>
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