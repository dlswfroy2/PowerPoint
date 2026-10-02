import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronRight, ChevronDown, Layers, Info, ZoomIn, RefreshCw } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────
interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
}

interface SectionContent {
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  drawFn: (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => void;
  color: string;
  diagramLabel: string;
}

// ─── Bengali digit helper ────────────────────────────────────────────────────
const bn = (n: number | string) => String(n).replace(/[0-9]/g, d => '০১২৩৪৫৬৭৮৯'[+d]);

// ═══════════════════════════════════════════════════════════════════════════════
// CANVAS DRAW FUNCTIONS  (one per menu section)
// ═══════════════════════════════════════════════════════════════════════════════

function drawCell21(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;
  // Prokaryotic (left)
  ctx.save();
  ctx.translate(cx - 120, cy);
  ctx.beginPath();
  ctx.ellipse(0, 0, 80, 55, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(34,197,94,0.15)';
  ctx.strokeStyle = '#22c55e';
  ctx.lineWidth = 3;
  ctx.fill(); ctx.stroke();
  // nucleoid
  ctx.beginPath();
  ctx.ellipse(0, 0, 28, 18, t * 0.3, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(251,191,36,0.7)';
  ctx.fill();
  // flagella
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    const fy = -20 + i * 20;
    ctx.moveTo(80, fy);
    ctx.bezierCurveTo(110 + Math.sin(t + i) * 10, fy - 10, 120 + Math.cos(t + i) * 10, fy + 10, 140, fy + Math.sin(t + i) * 15);
    ctx.strokeStyle = '#4ade80';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  ctx.fillStyle = '#86efac'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('প্রোক্যারিওটিক', 0, 75);
  ctx.fillStyle = '#fbbf24'; ctx.font = '10px sans-serif';
  ctx.fillText('নিউক্লিওয়েড', 0, 5);
  ctx.restore();

  // Eukaryotic (right)
  ctx.save();
  ctx.translate(cx + 110, cy);
  ctx.beginPath();
  ctx.ellipse(0, 0, 100, 80, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(139,92,246,0.15)';
  ctx.strokeStyle = '#a855f7';
  ctx.lineWidth = 3;
  ctx.fill(); ctx.stroke();
  // nucleus
  ctx.beginPath();
  ctx.arc(10, 0, 32, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(139,92,246,0.4)';
  ctx.strokeStyle = '#c084fc';
  ctx.lineWidth = 2.5;
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#ec4899';
  ctx.beginPath(); ctx.arc(10, 0, 12, 0, Math.PI * 2); ctx.fill();
  // mitochondria
  ctx.beginPath(); ctx.ellipse(-55, 30, 20, 10, 0.5, 0, Math.PI * 2);
  ctx.fillStyle = '#f59e0b'; ctx.fill();
  // chloroplast
  ctx.beginPath(); ctx.ellipse(-50, -30, 22, 10, -0.3, 0, Math.PI * 2);
  ctx.fillStyle = '#06b6d4'; ctx.fill();
  ctx.fillStyle = '#c4b5fd'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('ইউক্যারিওটিক', 0, 105);
  ctx.restore();

  // Arrow / divider
  ctx.save();
  ctx.strokeStyle = '#64748b'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 4]);
  ctx.beginPath(); ctx.moveTo(cx - 30, 30); ctx.lineTo(cx - 30, h - 30);
  ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = '#94a3b8'; ctx.font = '10px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('vs', cx - 30, cy + 3);
  ctx.restore();
}

function drawCellMembrane(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;
  // Phospholipid bilayer
  const heads = 14;
  const spacing = (w - 80) / heads;
  const outerY = cy - 45; const innerY = cy + 45;
  for (let i = 0; i < heads; i++) {
    const x = 40 + i * spacing + spacing / 2;
    // Outer head
    ctx.beginPath(); ctx.arc(x, outerY, 9, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${210 + i * 5},70%,60%)`; ctx.fill();
    ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();
    // Outer tail (down)
    ctx.beginPath(); ctx.moveTo(x, outerY + 9); ctx.lineTo(x - 3, outerY + 36);
    ctx.strokeStyle = '#7dd3fc'; ctx.lineWidth = 2; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x, outerY + 9); ctx.lineTo(x + 3, outerY + 36);
    ctx.stroke();
    // Inner head
    ctx.beginPath(); ctx.arc(x, innerY, 9, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${260 + i * 5},70%,65%)`; ctx.fill();
    ctx.strokeStyle = '#a78bfa'; ctx.lineWidth = 1.5; ctx.stroke();
    // Inner tail (up)
    ctx.beginPath(); ctx.moveTo(x, innerY - 9); ctx.lineTo(x - 3, innerY - 36);
    ctx.strokeStyle = '#c4b5fd'; ctx.lineWidth = 2; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x, innerY - 9); ctx.lineTo(x + 3, innerY - 36);
    ctx.stroke();
  }
  // Floating protein
  const px = cx + Math.sin(t * 0.8) * 60;
  ctx.save();
  ctx.translate(px, cy);
  ctx.beginPath(); ctx.ellipse(0, 0, 18, 40, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(239,68,68,0.7)'; ctx.fill();
  ctx.strokeStyle = '#fca5a5'; ctx.lineWidth = 2; ctx.stroke();
  ctx.restore();
  // Labels
  ctx.fillStyle = '#7dd3fc'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('বাইরের স্তর', 10, outerY - 15);
  ctx.fillStyle = '#c4b5fd';
  ctx.fillText('ভেতরের স্তর', 10, innerY + 22);
  ctx.fillStyle = '#fca5a5'; ctx.textAlign = 'right';
  ctx.fillText('প্রোটিন', w - 10, cy - 5);
}

function drawCellWall(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;
  // Layers
  const layers = [
    { r: 140, color: 'rgba(134,239,172,0.2)', stroke: '#4ade80', label: 'মধ্যবর্তী পর্দা' },
    { r: 118, color: 'rgba(74,222,128,0.2)', stroke: '#22c55e', label: 'প্রাথমিক কোষ প্রাচীর' },
    { r: 96, color: 'rgba(21,128,61,0.2)', stroke: '#16a34a', label: 'দ্বিতীয় কোষ প্রাচীর' },
    { r: 78, color: 'rgba(139,92,246,0.2)', stroke: '#a855f7', label: 'কোষঝিল্লি' },
    { r: 62, color: 'rgba(139,92,246,0.1)', stroke: '#7c3aed', label: 'সাইটোপ্লাজম' },
  ];
  layers.forEach(({ r, color, stroke, label }) => {
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = color; ctx.strokeStyle = stroke; ctx.lineWidth = 3;
    ctx.fill(); ctx.stroke();
  });
  // Plasmodesmata (pores)
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + t * 0.3;
    const x1 = cx + Math.cos(a) * 118; const y1 = cy + Math.sin(a) * 118;
    const x2 = cx + Math.cos(a) * 140; const y2 = cy + Math.sin(a) * 140;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
    ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 3; ctx.stroke();
    ctx.beginPath(); ctx.arc(x1, y1, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#fbbf24'; ctx.fill();
  }
  // Legend
  const lgx = 10; let lgy = 30;
  layers.forEach(({ stroke, label }) => {
    ctx.beginPath(); ctx.arc(lgx + 8, lgy, 5, 0, Math.PI * 2);
    ctx.fillStyle = stroke; ctx.fill();
    ctx.fillStyle = '#e2e8f0'; ctx.font = '10px sans-serif'; ctx.textAlign = 'left';
    ctx.fillText(label, lgx + 17, lgy + 4);
    lgy += 22;
  });
  ctx.fillStyle = '#fbbf24'; ctx.font = '10px sans-serif';
  ctx.fillText('• প্লাজমোডেজমাটা (ছিদ্র)', lgx + 17, lgy + 4);
}

function drawNucleus(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;
  // Nuclear envelope
  ctx.beginPath(); ctx.arc(cx, cy, 120, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(139,92,246,0.12)'; ctx.fill();
  ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 5; ctx.setLineDash([16, 8]); ctx.stroke(); ctx.setLineDash([]);
  ctx.beginPath(); ctx.arc(cx, cy, 108, 0, Math.PI * 2);
  ctx.strokeStyle = '#7c3aed'; ctx.lineWidth = 3; ctx.stroke();

  // Nuclear pores
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + t * 0.2;
    const px = cx + Math.cos(a) * 118; const py = cy + Math.sin(a) * 118;
    ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#f59e0b'; ctx.fill();
    ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 1.5; ctx.stroke();
  }

  // Chromatin
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + t;
    const x1 = cx + Math.cos(a) * 25; const y1 = cy + Math.sin(a) * 25;
    const x2 = cx + Math.cos(a + 1.2) * 85; const y2 = cy + Math.sin(a + 1.2) * 85;
    ctx.moveTo(x1, y1);
    ctx.bezierCurveTo(x1 + 30, y1 - 20, x2 - 20, y2 + 30, x2, y2);
  }
  ctx.strokeStyle = '#ec4899'; ctx.lineWidth = 2.5; ctx.stroke();

  // Nucleolus
  ctx.beginPath(); ctx.arc(cx, cy, 32, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(236,72,153,0.6)'; ctx.fill();
  ctx.strokeStyle = '#f9a8d4'; ctx.lineWidth = 2; ctx.stroke();

  // Labels
  const labels: [number, number, string, string][] = [
    [cx + 95, cy - 70, '#fbbf24', 'নিউক্লিয়ার রন্ধ্র'],
    [cx + 55, cy + 60, '#ec4899', 'ক্রোমাটিন তন্তু'],
    [cx, cy + 5, '#f9a8d4', 'নিউক্লিওলাস'],
    [cx - 100, cy - 85, '#c4b5fd', 'নিউক্লিয়ার আবরণী'],
  ];
  labels.forEach(([x, y, color, text]) => {
    ctx.fillStyle = color; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText(text, x, y);
  });
}

function drawMitochondria(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;
  ctx.save(); ctx.translate(cx, cy);

  // Outer membrane
  ctx.beginPath(); ctx.ellipse(0, 0, 155, 85, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(245,158,11,0.1)'; ctx.fill();
  ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 4; ctx.stroke();

  // Inner membrane
  ctx.beginPath(); ctx.ellipse(0, 0, 138, 70, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(245,158,11,0.08)'; ctx.fill();
  ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 2.5; ctx.stroke();

  // Cristae (folded inner membrane)
  for (let i = -4; i <= 4; i++) {
    const xBase = i * 28;
    const ht = 55 + Math.sin(t + i * 0.5) * 3;
    ctx.beginPath();
    ctx.moveTo(xBase, -ht * 0.6);
    ctx.bezierCurveTo(xBase + 20, -ht * 0.3, xBase + 20, ht * 0.3, xBase, ht * 0.6);
    ctx.strokeStyle = 'rgba(251,191,36,0.7)'; ctx.lineWidth = 2.5; ctx.stroke();
  }

  // Matrix label
  ctx.fillStyle = '#fde68a'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('ম্যাট্রিক্স', 0, 5);

  // ATP particles
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + t * 0.6;
    const px = Math.cos(a) * 55; const py = Math.sin(a) * 30;
    ctx.beginPath(); ctx.arc(px, py, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#4ade80'; ctx.fill();
    ctx.fillStyle = '#022c22'; ctx.font = 'bold 7px sans-serif';
    ctx.fillText('ATP', px, py + 3);
  }

  ctx.restore();
  // Outer labels
  ctx.fillStyle = '#f59e0b'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('বহিঃআবরণী', 15, cy - 95);
  ctx.fillStyle = '#fbbf24';
  ctx.fillText('ক্রিস্টি', 15, cy + 100);
  ctx.fillStyle = '#4ade80'; ctx.textAlign = 'right';
  ctx.fillText('ATP উৎপাদন', w - 15, cy - 95);
}

function drawPlastid(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;
  ctx.save(); ctx.translate(cx, cy);

  // Outer envelope
  ctx.beginPath(); ctx.ellipse(0, 0, 150, 100, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(6,182,212,0.1)'; ctx.fill();
  ctx.strokeStyle = '#06b6d4'; ctx.lineWidth = 4; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(0, 0, 135, 87, 0, 0, Math.PI * 2);
  ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 2; ctx.stroke();

  // Stroma background
  ctx.beginPath(); ctx.ellipse(0, 0, 128, 82, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(16,185,129,0.15)'; ctx.fill();

  // Grana (stacks of thylakoids)
  const granaPositions = [[-70, -20], [0, 10], [65, -25], [-30, 45]];
  granaPositions.forEach(([gx, gy]) => {
    for (let k = 0; k < 4; k++) {
      const dy = k * 12 - 18;
      ctx.beginPath(); ctx.ellipse(gx, gy + dy, 28, 7, 0, 0, Math.PI * 2);
      const g = ctx.createLinearGradient(gx - 28, gy + dy, gx + 28, gy + dy);
      g.addColorStop(0, '#059669'); g.addColorStop(1, '#10b981');
      ctx.fillStyle = g; ctx.fill();
      ctx.strokeStyle = '#34d399'; ctx.lineWidth = 1; ctx.stroke();
    }
  });

  // Moving particles in stroma
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + t * 0.5;
    const px = Math.cos(a) * 95; const py = Math.sin(a) * 60;
    ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#fbbf24'; ctx.fill();
  }

  ctx.restore();
  ctx.fillStyle = '#22d3ee'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('স্ট্রোমা', cx, cy + 5);
  ctx.fillStyle = '#34d399';
  ctx.fillText('গ্রানাম (থাইলাকয়েড স্তুপ)', cx, cy + 120);
  ctx.fillStyle = '#fbbf24';
  ctx.fillText('স্ট্রোমাল কণিকা', cx - 100, cy - 95);
}

function drawER(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;
  // Rough ER (left) - wavy membrane with ribosomes
  ctx.save();
  ctx.translate(30, cy - 40);
  ctx.fillStyle = '#94a3b8'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('রাফ ER (অমসৃণ)', 0, -15);
  for (let row = 0; row < 4; row++) {
    const y = row * 35;
    ctx.beginPath();
    for (let x = 0; x <= 180; x += 4) {
      const yy = y + Math.sin((x / 30) + t + row) * 6;
      row === 0 && x === 0 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy);
    }
    ctx.strokeStyle = '#6366f1'; ctx.lineWidth = 3; ctx.stroke();
    // Ribosomes on ER
    for (let rx = 10; rx < 180; rx += 18) {
      const ry = y + Math.sin((rx / 30) + t + row) * 6;
      ctx.beginPath(); ctx.arc(rx, ry - 8, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#f87171'; ctx.fill();
    }
  }
  ctx.restore();

  // Smooth ER (right) - smooth wavy membrane
  ctx.save();
  ctx.translate(cx + 20, cy - 40);
  ctx.fillStyle = '#94a3b8'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'left';
  ctx.fillText('স্মুথ ER (মসৃণ)', 0, -15);
  for (let row = 0; row < 4; row++) {
    const y = row * 35;
    ctx.beginPath();
    for (let x = 0; x <= 150; x += 4) {
      const yy = y + Math.sin((x / 20) + t * 1.2 + row) * 8;
      row === 0 && x === 0 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy);
    }
    ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 3; ctx.stroke();
  }
  ctx.restore();

  // Divider
  ctx.beginPath(); ctx.moveTo(cx + 15, 30); ctx.lineTo(cx + 15, h - 30);
  ctx.strokeStyle = '#475569'; ctx.lineWidth = 1.5; ctx.setLineDash([5, 5]); ctx.stroke();
  ctx.setLineDash([]);
}

function drawGolgi(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;
  const stacks = 6;
  const colors = ['#818cf8', '#a78bfa', '#c084fc', '#e879f9', '#f472b6', '#fb7185'];

  ctx.save(); ctx.translate(cx, cy - 30);
  for (let i = 0; i < stacks; i++) {
    const rx = 90 - i * 8;
    const ry = 14;
    const yOffset = i * 22;
    const wave = Math.sin(t * 0.8 + i * 0.4) * 3;
    ctx.beginPath();
    ctx.ellipse(0, yOffset + wave, rx, ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = colors[i] + '33';
    ctx.fill();
    ctx.strokeStyle = colors[i]; ctx.lineWidth = 3; ctx.stroke();
  }

  // Vesicles budding off
  for (let v = 0; v < 4; v++) {
    const angle = t * 0.5 + v * 1.5;
    const dist = 100 + Math.sin(angle) * 20;
    const vx = Math.cos(v * 1.5) * dist;
    const vy = (stacks * 22) * (v / 4) - 20 + Math.sin(angle + v) * 15;
    ctx.beginPath(); ctx.arc(vx, vy, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(251,113,133,0.5)'; ctx.fill();
    ctx.strokeStyle = '#fb7185'; ctx.lineWidth = 2; ctx.stroke();
  }
  ctx.restore();

  ctx.fillStyle = '#c4b5fd'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('সিস ফেস (সংগ্রহ)', cx, cy - 45);
  ctx.fillStyle = '#fb7185';
  ctx.fillText('ট্রান্স ফেস (নিঃসরণ)', cx, cy + 115);
  ctx.fillStyle = '#fbbf24';
  ctx.fillText('ভেসিকল', cx + 120, cy + 50);
}

function drawRibosome(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;

  // mRNA strand
  ctx.beginPath();
  for (let x = 20; x <= w - 20; x += 3) {
    const y = cy + Math.sin((x / 40) + t * 0.5) * 8;
    x === 20 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 3; ctx.stroke();
  ctx.fillStyle = '#fbbf24'; ctx.font = '10px sans-serif'; ctx.textAlign = 'right';
  ctx.fillText('mRNA', w - 15, cy + 5);

  // Multiple ribosomes on mRNA (polysome)
  for (let r = 0; r < 5; r++) {
    const rx = 80 + r * 90;
    const ry = cy + Math.sin((rx / 40) + t * 0.5) * 8;

    // Large subunit (60S)
    ctx.beginPath(); ctx.ellipse(rx, ry - 20, 28, 20, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(99,102,241,0.8)'; ctx.fill();
    ctx.strokeStyle = '#818cf8'; ctx.lineWidth = 2; ctx.stroke();

    // Small subunit (40S)
    ctx.beginPath(); ctx.ellipse(rx, ry + 14, 22, 14, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(168,85,247,0.8)'; ctx.fill();
    ctx.strokeStyle = '#c084fc'; ctx.lineWidth = 2; ctx.stroke();

    // Growing polypeptide
    if (r > 0) {
      ctx.beginPath();
      for (let p = 0; p < r * 8; p++) {
        const pa = (p / (r * 8)) * Math.PI * 2 + t;
        const ppx = rx + 35 + Math.cos(pa) * 15 + p * 3;
        const ppy = ry - 30 + Math.sin(pa) * 8;
        p === 0 ? ctx.moveTo(ppx, ppy) : ctx.lineTo(ppx, ppy);
      }
      ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 2; ctx.stroke();
    }
  }

  ctx.fillStyle = '#818cf8'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('বড় সাব-ইউনিট (60S)', cx, cy - 80);
  ctx.fillStyle = '#c084fc';
  ctx.fillText('ছোট সাব-ইউনিট (40S)', cx, cy + 60);
  ctx.fillStyle = '#4ade80';
  ctx.fillText('পলিপেপটাইড শৃঙ্খল', cx, cy + 85);
}

function drawLysosome(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;

  // Main lysosome
  ctx.beginPath(); ctx.arc(cx, cy, 80, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(239,68,68,0.2)'; ctx.fill();
  ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 4; ctx.stroke();

  // Acid hydrolase enzymes inside (circles)
  for (let e = 0; e < 8; e++) {
    const a = (e / 8) * Math.PI * 2 + t * 0.4;
    const ex = cx + Math.cos(a) * 45; const ey = cy + Math.sin(a) * 45;
    ctx.beginPath(); ctx.arc(ex, ey, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#fca5a5'; ctx.fill();
    ctx.fillStyle = '#7f1d1d'; ctx.font = 'bold 7px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('E', ex, ey + 3);
  }

  // pH label
  ctx.fillStyle = '#f87171'; ctx.font = 'bold 14px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('pH 4.5-5', cx, cy + 5);

  // Digestion process (small organelle being digested)
  const dAngle = t * 0.3;
  const dx = cx + 120 + Math.cos(dAngle) * 20;
  const dy = cy - 80 + Math.sin(dAngle) * 20;
  ctx.beginPath(); ctx.ellipse(dx, dy, 25, 15, dAngle, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(74,222,128,0.3)'; ctx.fill();
  ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#4ade80'; ctx.font = '9px sans-serif';
  ctx.fillText('খাদ্যকণা', dx, dy + 3);

  // Arrow
  ctx.beginPath();
  ctx.moveTo(dx - 30, dy);
  ctx.lineTo(cx + 82, cy - 30);
  ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2;
  ctx.setLineDash([3, 3]); ctx.stroke(); ctx.setLineDash([]);

  ctx.fillStyle = '#ef4444'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('লাইসোসোম', cx, cy - 95);
  ctx.fillStyle = '#fca5a5'; ctx.font = '10px sans-serif';
  ctx.fillText('এনজাইম (E) - অ্যাসিড হাইড্রোলেজ', cx, cy + 105);
}

function drawCentrosome(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;

  // Two centrioles at right angles
  const drawCentriole = (x: number, y: number, angle: number) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    // 9 triplet microtubules
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * Math.PI * 2;
      const mx = Math.cos(a) * 35; const my = Math.sin(a) * 35;
      ctx.beginPath(); ctx.arc(mx, my, 7, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(251,191,36,0.7)'; ctx.fill();
      ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 2; ctx.stroke();
      // triplet dots
      for (let d = 0; d < 3; d++) {
        const da = a + (d - 1) * 0.25;
        ctx.beginPath(); ctx.arc(mx + Math.cos(da) * 3.5, my + Math.sin(da) * 3.5, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#92400e'; ctx.fill();
      }
    }
    ctx.restore();
  };

  drawCentriole(cx - 25, cy, t * 0.1);
  drawCentriole(cx + 25, cy, Math.PI / 2 + t * 0.1);

  // Aster fibers (spindle)
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + t * 0.2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a) * 100, cy + Math.sin(a) * 100);
    ctx.strokeStyle = 'rgba(99,102,241,0.5)'; ctx.lineWidth = 1.5; ctx.stroke();
  }

  ctx.fillStyle = '#fbbf24'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('সেন্ট্রিওল (৯+০ গঠন)', cx, cy - 85);
  ctx.fillStyle = '#818cf8';
  ctx.fillText('অ্যাস্টার তন্তু', cx, cy + 115);
}

function drawVacuole(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;

  // Plant cell (large central vacuole)
  ctx.save(); ctx.translate(cx - 100, cy);
  ctx.beginPath(); ctx.ellipse(0, 0, 75, 90, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(14,165,233,0.2)'; ctx.fill();
  ctx.strokeStyle = '#0ea5e9'; ctx.lineWidth = 3; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(0, 0, 60, 75, 0, 0, Math.PI * 2);
  const wg = ctx.createRadialGradient(0, 0, 10, 0, 0, 70);
  wg.addColorStop(0, 'rgba(186,230,253,0.6)'); wg.addColorStop(1, 'rgba(14,165,233,0.1)');
  ctx.fillStyle = wg; ctx.fill();
  // Water molecules
  for (let wm = 0; wm < 6; wm++) {
    const a = (wm / 6) * Math.PI * 2 + t * 0.7;
    ctx.beginPath(); ctx.arc(Math.cos(a) * 30, Math.sin(a) * 45, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#38bdf8'; ctx.fill();
    ctx.fillStyle = '#082f49'; ctx.font = '7px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('H₂O', Math.cos(a) * 30, Math.sin(a) * 45 + 3);
  }
  ctx.fillStyle = '#0ea5e9'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('উদ্ভিদ কোষের', 0, 110);
  ctx.fillText('কেন্দ্রীয় গহ্বর', 0, 124);
  ctx.restore();

  // Animal cell (small vacuoles)
  ctx.save(); ctx.translate(cx + 90, cy);
  ctx.beginPath(); ctx.ellipse(0, 0, 80, 75, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(168,85,247,0.1)'; ctx.fill();
  ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 2.5; ctx.stroke();
  const smallVacs = [[-25, -20], [20, -30], [-30, 25], [25, 20], [0, 0]];
  smallVacs.forEach(([vx, vy], i) => {
    const pulsed = 12 + Math.sin(t * 0.8 + i) * 2;
    ctx.beginPath(); ctx.arc(vx, vy, pulsed, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(99,102,241,0.4)'; ctx.fill();
    ctx.strokeStyle = '#818cf8'; ctx.lineWidth = 1.5; ctx.stroke();
  });
  ctx.fillStyle = '#c4b5fd'; ctx.font = 'bold 11px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('প্রাণি কোষের', 0, 100);
  ctx.fillText('ক্ষুদ্র গহ্বর', 0, 114);
  ctx.restore();
}

function drawComparison(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;

  // Plant cell
  ctx.save(); ctx.translate(cx - 110, cy + 10);
  ctx.beginPath(); ctx.rect(-70, -90, 140, 180);
  ctx.fillStyle = 'rgba(34,197,94,0.1)'; ctx.fill();
  ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 4; ctx.stroke();
  // Cell wall
  ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 8;
  ctx.strokeRect(-70, -90, 140, 180);
  // Nucleus
  ctx.beginPath(); ctx.arc(20, 0, 30, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(139,92,246,0.5)'; ctx.fill(); ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 2; ctx.stroke();
  // Vacuole
  ctx.beginPath(); ctx.ellipse(-25, 10, 30, 50, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(14,165,233,0.3)'; ctx.fill(); ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke();
  // Chloroplast
  ctx.beginPath(); ctx.ellipse(25, -55, 18, 9, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#06b6d4'; ctx.fill();
  ctx.beginPath(); ctx.ellipse(-35, -55, 18, 9, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#06b6d4'; ctx.fill();
  ctx.fillStyle = '#86efac'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('উদ্ভিদকোষ', 0, 105);
  ctx.restore();

  // Animal cell
  ctx.save(); ctx.translate(cx + 110, cy + 10);
  ctx.beginPath(); ctx.ellipse(0, 0, 80, 90, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(239,68,68,0.1)'; ctx.fill();
  ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 3; ctx.stroke();
  // Nucleus
  ctx.beginPath(); ctx.arc(-10, 0, 28, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(139,92,246,0.5)'; ctx.fill(); ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 2; ctx.stroke();
  // Centrosome
  ctx.beginPath(); ctx.arc(40, -40, 8, 0, Math.PI * 2);
  ctx.fillStyle = '#fbbf24'; ctx.fill();
  // Small vacuoles
  [[30, 40], [-40, 40], [50, 20]].forEach(([vx, vy]) => {
    ctx.beginPath(); ctx.arc(vx, vy, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(99,102,241,0.3)'; ctx.fill(); ctx.strokeStyle = '#818cf8'; ctx.lineWidth = 1; ctx.stroke();
  });
  ctx.fillStyle = '#fca5a5'; ctx.font = 'bold 12px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('প্রাণিকোষ', 0, 110);
  ctx.restore();

  // Animated pulse
  ctx.beginPath(); ctx.arc(cx, cy, 5 + Math.sin(t * 2) * 3, 0, Math.PI * 2);
  ctx.fillStyle = '#94a3b8'; ctx.fill();
}

function drawPlantTissue(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;

  // Parenchyma (top left)
  ctx.save(); ctx.translate(50, 50);
  ctx.fillStyle = '#94a3b8'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('প্যারেনকাইমা', 45, -5);
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      ctx.beginPath(); ctx.arc(c * 35 + 15, r * 35 + 15, 15, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(34,197,94,0.3)'; ctx.fill();
      ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 2; ctx.stroke();
    }
  }
  ctx.restore();

  // Collenchyma (top right)
  ctx.save(); ctx.translate(cx + 20, 50);
  ctx.fillStyle = '#94a3b8'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('কোলেনকাইমা', 45, -5);
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      ctx.beginPath();
      ctx.rect(c * 35 + 5, r * 35 + 5, 28, 28);
      ctx.fillStyle = 'rgba(251,191,36,0.3)'; ctx.fill();
      ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 4; ctx.stroke();
    }
  }
  ctx.restore();

  // Sclerenchyma (bottom left)
  ctx.save(); ctx.translate(50, cy + 10);
  ctx.fillStyle = '#94a3b8'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('স্ক্লেরেনকাইমা', 45, -5);
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      ctx.beginPath();
      ctx.rect(c * 35 + 5, r * 35 + 5, 28, 28);
      ctx.fillStyle = 'rgba(100,116,139,0.5)'; ctx.fill();
      ctx.strokeStyle = '#475569'; ctx.lineWidth = 6; ctx.stroke();
    }
  }
  ctx.restore();

  // Xylem / Phloem (bottom right)
  ctx.save(); ctx.translate(cx + 20, cy + 10);
  ctx.fillStyle = '#94a3b8'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('জাইলেম / ফ্লোয়েম', 55, -5);
  // Xylem vessels
  for (let i = 0; i < 3; i++) {
    ctx.beginPath(); ctx.rect(i * 32 + 5, 5, 25, 90);
    ctx.fillStyle = i < 2 ? 'rgba(239,68,68,0.3)' : 'rgba(99,102,241,0.3)'; ctx.fill();
    ctx.strokeStyle = i < 2 ? '#ef4444' : '#6366f1'; ctx.lineWidth = 2.5; ctx.stroke();
    // Water flow animation
    const flowY = ((t * 30 + i * 30) % 90) + 5;
    ctx.beginPath(); ctx.arc(i * 32 + 17, flowY, 5, 0, Math.PI * 2);
    ctx.fillStyle = i < 2 ? '#38bdf8' : '#4ade80'; ctx.fill();
  }
  ctx.restore();
}

function drawAnimalTissue(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;

  // Epithelial (top left)
  ctx.save(); ctx.translate(30, 40);
  ctx.fillStyle = '#94a3b8'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('আবরণী টিস্যু', 55, -5);
  for (let c = 0; c < 5; c++) {
    ctx.beginPath(); ctx.rect(c * 23, 0, 22, 55);
    ctx.fillStyle = 'rgba(99,102,241,0.3)'; ctx.fill();
    ctx.strokeStyle = '#6366f1'; ctx.lineWidth = 2; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(c * 23 + 11, 28, 7, 9, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(139,92,246,0.7)'; ctx.fill();
  }
  ctx.restore();

  // Muscle (top right)
  ctx.save(); ctx.translate(cx + 10, 40);
  ctx.fillStyle = '#94a3b8'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('পেশি টিস্যু', 55, -5);
  for (let r = 0; r < 4; r++) {
    ctx.beginPath();
    for (let x = 0; x <= 110; x += 3) {
      const y = r * 18 + Math.sin((x / 20) + t + r) * 4;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.strokeStyle = '#f87171'; ctx.lineWidth = 6; ctx.stroke();
    ctx.strokeStyle = '#fca5a5'; ctx.lineWidth = 1; ctx.stroke();
  }
  ctx.restore();

  // Connective (bottom left)
  ctx.save(); ctx.translate(30, cy + 10);
  ctx.fillStyle = '#94a3b8'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('যোজক টিস্যু', 55, -5);
  // Matrix with scattered cells
  ctx.beginPath(); ctx.rect(0, 0, 110, 100);
  ctx.fillStyle = 'rgba(251,191,36,0.1)'; ctx.fill();
  ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2; ctx.stroke();
  for (let f = 0; f < 8; f++) {
    const fx = 10 + f * 12 + Math.sin(t + f) * 3;
    const fy = 10 + (f % 4) * 25;
    ctx.beginPath(); ctx.moveTo(fx, fy); ctx.lineTo(fx + 15, fy + 20);
    ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 2; ctx.stroke();
  }
  for (let c = 0; c < 4; c++) {
    const cx2 = 20 + c * 25; const cy2 = 50 + Math.sin(t * 0.5 + c) * 10;
    ctx.beginPath(); ctx.ellipse(cx2, cy2, 10, 7, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(239,68,68,0.5)'; ctx.fill();
  }
  ctx.restore();

  // Nerve cell (bottom right)
  ctx.save(); ctx.translate(cx + 10, cy + 10);
  ctx.fillStyle = '#94a3b8'; ctx.font = 'bold 10px sans-serif'; ctx.textAlign = 'center';
  ctx.fillText('স্নায়ু টিস্যু', 55, -5);
  // Cell body
  ctx.beginPath(); ctx.arc(50, 40, 22, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(34,211,238,0.3)'; ctx.fill();
  ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 2.5; ctx.stroke();
  // Axon
  ctx.beginPath(); ctx.moveTo(72, 40); ctx.lineTo(120, 40);
  ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 4; ctx.stroke();
  // Dendrites
  [[28, 22], [28, 58], [35, 15], [35, 65]].forEach(([dx, dy]) => {
    ctx.beginPath(); ctx.moveTo(50, 40); ctx.lineTo(dx, dy);
    ctx.strokeStyle = '#67e8f9'; ctx.lineWidth = 2; ctx.stroke();
  });
  // Signal pulse
  const pulse = (Math.sin(t * 2) + 1) / 2;
  ctx.beginPath(); ctx.arc(72 + pulse * 48, 40, 5, 0, Math.PI * 2);
  ctx.fillStyle = '#fbbf24'; ctx.fill();
  ctx.restore();
}

function drawOrganSystem(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const cx = w / 2; const cy = h / 2;

  const hierarchy = [
    { label: 'কোষ (Cell)', y: 30, color: '#22c55e', size: 18 },
    { label: 'টিস্যু (Tissue)', y: 100, color: '#06b6d4', size: 22 },
    { label: 'অঙ্গ (Organ)', y: 175, color: '#a855f7', size: 26 },
    { label: 'অঙ্গতন্ত্র (Organ System)', y: 255, color: '#f59e0b', size: 30 },
    { label: 'জীব (Organism)', y: 340, color: '#ef4444', size: 34 },
  ];

  hierarchy.forEach((item, i) => {
    // Connector arrow
    if (i > 0) {
      const prev = hierarchy[i - 1];
      ctx.beginPath();
      ctx.moveTo(cx, prev.y + prev.size / 2 + 10);
      ctx.lineTo(cx, item.y - item.size / 2 - 5);
      ctx.strokeStyle = '#475569'; ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]); ctx.stroke(); ctx.setLineDash([]);
      // Arrowhead
      ctx.beginPath();
      const ay = item.y - item.size / 2 - 5;
      ctx.moveTo(cx - 6, ay - 8); ctx.lineTo(cx, ay); ctx.lineTo(cx + 6, ay - 8);
      ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2; ctx.stroke();
    }

    const pulse = 1 + Math.sin(t * 1.5 + i * 0.8) * 0.05;
    const r = item.size * pulse;

    ctx.save();
    ctx.translate(cx, item.y);
    ctx.beginPath();
    ctx.ellipse(0, 0, w / 2 - 60 - i * 5, r * 1.3, 0, 0, Math.PI * 2);
    ctx.fillStyle = item.color + '22'; ctx.fill();
    ctx.strokeStyle = item.color; ctx.lineWidth = 2.5; ctx.stroke();
    ctx.fillStyle = item.color; ctx.font = `bold ${11 + i}px sans-serif`; ctx.textAlign = 'center';
    ctx.fillText(item.label, 0, 5);
    ctx.restore();
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION DATA
// ═══════════════════════════════════════════════════════════════════════════════
const sections: Record<string, SectionContent> = {
  '2.1': {
    title: '২.১ জীবকোষ',
    subtitle: 'কোষের ধারণা ও প্রকারভেদ',
    color: '#22c55e',
    diagramLabel: 'প্রোক্যারিওটিক বনাম ইউক্যারিওটিক কোষ',
    description: 'রবার্ট হুক ১৬৬৫ সালে কোষ আবিষ্কার করেন। কোষ হলো জীবনের গঠন ও কার্যকরী একক। প্রতিটি জীব এক বা একাধিক কোষ দিয়ে তৈরি।',
    details: [
      '🔬 রবার্ট হুক (১৬৬৫) — কর্ক কোষ আবিষ্কার',
      '🔬 শ্লাইডেন ও সোয়ান (১৮৩৮-৩৯) — কোষতত্ত্ব প্রতিষ্ঠা',
      '📐 প্রোক্যারিওটিক কোষ: ঝিল্লিবদ্ধ নিউক্লিয়াস নেই (ব্যাকটেরিয়া)',
      '📐 ইউক্যারিওটিক কোষ: সুগঠিত নিউক্লিয়াস আছে (উদ্ভিদ, প্রাণি)',
      '⚡ একটি কোষের গড় আকার: ১০-১০০ মাইক্রোমিটার',
      '🌱 উদ্ভিদকোষ: কোষ প্রাচীর, ক্লোরোপ্লাস্ট, বড় গহ্বর আছে',
      '🐾 প্রাণিকোষ: সেন্ট্রোসোম আছে, কোষ প্রাচীর নেই',
    ],
  },
  '2.2': {
    title: '২.২ কোষের প্রধান অঙ্গাণু',
    subtitle: 'উদ্ভিদ ও প্রাণিকোষের অঙ্গাণুসমূহ',
    color: '#06b6d4',
    diagramLabel: 'সম্পূর্ণ উদ্ভিদকোষের গঠন',
    description: 'কোষের ভেতরে বিভিন্ন অঙ্গাণু (Organelle) নির্দিষ্ট কার্য সম্পাদন করে। প্রতিটি অঙ্গাণু একটি বিশেষজ্ঞ ইউনিট।',
    details: [
      '🔵 কোষঝিল্লি — পদার্থ পরিবহন নিয়ন্ত্রণ',
      '🟢 কোষ প্রাচীর — সুরক্ষা ও আকৃতি (শুধু উদ্ভিদে)',
      '🟣 নিউক্লিয়াস — কোষের নিয়ন্ত্রণ কেন্দ্র',
      '🟡 মাইটোকন্ড্রিয়া — ATP শক্তি উৎপাদন',
      '🔵 ক্লোরোপ্লাস্ট — সালোকসংশ্লেষণ (উদ্ভিদে)',
      '⚪ এন্ডোপ্লাজমিক রেটিকুলাম — প্রোটিন ও লিপিড সংশ্লেষণ',
      '🟤 গলজি বস্তু — পদার্থ প্যাকেজিং ও নিঃসরণ',
    ],
  },
  '2.2.1': {
    title: '২.২.১ কোষ ঝিল্লি (Plasma Membrane)',
    subtitle: 'ফসফোলিপিড দ্বিস্তর কাঠামো',
    color: '#38bdf8',
    diagramLabel: 'ফসফোলিপিড বাইলেয়ার ও প্রোটিন',
    description: 'কোষঝিল্লি ফসফোলিপিডের দ্বিস্তর দিয়ে গঠিত। এটি আধা-ভেদ্য (Selectively Permeable) — নির্দিষ্ট পদার্থই প্রবেশ করতে পারে।',
    details: [
      '📐 গঠন: ফসফোলিপিড দ্বিস্তর (Phospholipid Bilayer)',
      '🧪 ফসফোলিপিড — মাথা (হাইড্রোফিলিক) + লেজ (হাইড্রোফোবিক)',
      '🔴 প্রোটিন — অবিচ্ছেদ্য ও পার্শ্বস্থ দুই ধরনের',
      '🚪 আধা-ভেদ্য — O₂, CO₂, H₂O ভেদ করতে পারে',
      '⚡ সক্রিয় পরিবহন — শক্তি (ATP) ব্যবহার করে আয়ন পরিবহন',
      '🌊 অসমোসিস — পানির অণু নিম্ন থেকে উচ্চ ঘনত্বে যায়',
      '📊 ফ্লুইড মোজাইক মডেল — সিঙ্গার ও নিকলসন (১৯৭২)',
    ],
  },
  '2.2.2': {
    title: '২.২.২ কোষ প্রাচীর (Cell Wall)',
    subtitle: 'উদ্ভিদকোষের শক্ত বাইরের আবরণ',
    color: '#4ade80',
    diagramLabel: 'কোষ প্রাচীরের স্তর ও প্লাজমোডেজমাটা',
    description: 'কোষ প্রাচীর উদ্ভিদকোষের বাইরে থাকে এবং সুরক্ষা ও আকৃতি প্রদান করে। এটি সেলুলোজ দিয়ে তৈরি।',
    details: [
      '🌿 উপাদান: প্রধানত সেলুলোজ (Cellulose)',
      '📏 মধ্যবর্তী পর্দা (Middle Lamella) — পেকটিন দিয়ে তৈরি',
      '📏 প্রাথমিক কোষ প্রাচীর (Primary Cell Wall) — পাতলা ও নমনীয়',
      '📏 দ্বিতীয় কোষ প্রাচীর (Secondary Cell Wall) — পুরু ও শক্ত',
      '🕳️ প্লাজমোডেজমাটা — কোষ প্রাচীরের ছিদ্র, কোষের মধ্যে যোগাযোগ',
      '💪 কাজ: সুরক্ষা, আকৃতি নির্ধারণ, টার্গর চাপ প্রতিরোধ',
      '🚫 প্রাণিকোষে কোষ প্রাচীর নেই',
    ],
  },
  '2.2.3': {
    title: '২.২.৩ নিউক্লিয়াস (Nucleus)',
    subtitle: 'কোষের নিয়ন্ত্রণ ও বংশগতির কেন্দ্র',
    color: '#a855f7',
    diagramLabel: 'নিউক্লিয়াসের অভ্যন্তরীণ গঠন',
    description: 'নিউক্লিয়াস হলো কোষের প্রধান নিয়ন্ত্রণ কেন্দ্র। এটি DNA ধারণ করে এবং কোষের সকল কার্যক্রম নিয়ন্ত্রণ করে।',
    details: [
      '🔵 নিউক্লিয়ার আবরণী — দ্বিস্তরীয় ঝিল্লি',
      '🕳️ নিউক্লিয়ার রন্ধ্র — RNA ও প্রোটিন চলাচলের পথ',
      '🧬 ক্রোমাটিন তন্তু — DNA + হিস্টোন প্রোটিন',
      '🔴 নিউক্লিওলাস — rRNA তৈরির স্থান',
      '💧 নিউক্লিওপ্লাজম — তরল অভ্যন্তরীণ পদার্থ',
      '📋 কাজ: বংশগতি নিয়ন্ত্রণ, প্রোটিন সংশ্লেষণ নির্দেশনা',
      '🧬 মানব কোষে ২৩ জোড়া ক্রোমোজোম = ৪৬টি',
    ],
  },
  '2.2.4': {
    title: '২.২.৪ মাইটোকন্ড্রিয়া (Mitochondria)',
    subtitle: 'কোষের পাওয়ার হাউস — ATP উৎপাদন',
    color: '#f59e0b',
    diagramLabel: 'মাইটোকন্ড্রিয়ার ক্রিস্টি ও ম্যাট্রিক্স',
    description: 'মাইটোকন্ড্রিয়া শ্বসন প্রক্রিয়ায় ATP (শক্তি) উৎপাদন করে। এটি নিজস্ব DNA ধারণ করে এবং দ্বিভাজনের মাধ্যমে সংখ্যা বাড়াতে পারে।',
    details: [
      '⚡ কাজ: অ্যারোবিক শ্বসনে ATP উৎপাদন',
      '📐 বহিঃআবরণী — মসৃণ বাইরের ঝিল্লি',
      '📐 অন্তঃআবরণী — ভেঁজ করা ভেতরের ঝিল্লি',
      '🌊 ক্রিস্টি (Cristae) — অন্তঃঝিল্লির ভাঁজ, ATP সংশ্লেষণ',
      '💧 ম্যাট্রিক্স — তরল অভ্যন্তর, ক্রেবস চক্র ঘটে',
      '🧬 নিজস্ব DNA ও রাইবোসোম আছে',
      '🔢 প্রতিটি কোষে ১,০০০–২,০০০টি মাইটোকন্ড্রিয়া',
    ],
  },
  '2.2.5': {
    title: '২.২.৫ প্লাস্টিড (Plastid)',
    subtitle: 'ক্লোরোপ্লাস্ট — সালোকসংশ্লেষণের স্থান',
    color: '#06b6d4',
    diagramLabel: 'ক্লোরোপ্লাস্টের গ্রানাম ও স্ট্রোমা',
    description: 'প্লাস্টিড উদ্ভিদকোষে থাকে। ক্লোরোপ্লাস্টে ক্লোরোফিল থাকে যা সূর্যের আলো ব্যবহার করে শর্করা তৈরি করে।',
    details: [
      '🌿 ক্লোরোপ্লাস্ট — সবুজ রঙের, সালোকসংশ্লেষণ',
      '🔴 ক্রোমোপ্লাস্ট — লাল/হলুদ রঙের, ফুল ও ফলে',
      '⚪ লিউকোপ্লাস্ট — বর্ণহীন, শ্বেতসার সঞ্চয়',
      '📐 স্ট্রোমা — ক্লোরোপ্লাস্টের তরল অভ্যন্তর',
      '🥞 গ্রানাম — থাইলাকয়েডের স্তুপ, ক্লোরোফিল ধারণ',
      '🌞 সালোকসংশ্লেষণ: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
      '🧬 নিজস্ব DNA ও রাইবোসোম আছে',
    ],
  },
  '2.2.6': {
    title: '২.২.৬ এন্ডোপ্লাজমিক রেটিকুলাম (ER)',
    subtitle: 'কোষের পরিবহন নেটওয়ার্ক',
    color: '#6366f1',
    diagramLabel: 'রাফ ER ও স্মুথ ER তুলনা',
    description: 'এন্ডোপ্লাজমিক রেটিকুলাম ঝিল্লির জালিকা যা কোষের বিভিন্ন অংশ সংযুক্ত রাখে। দুই ধরনের: রাফ ER ও স্মুথ ER।',
    details: [
      '🔴 রাফ ER — রাইবোসোম যুক্ত, প্রোটিন সংশ্লেষণ',
      '🔵 স্মুথ ER — রাইবোসোম নেই, লিপিড সংশ্লেষণ',
      '🚛 পরিবহন — প্রোটিন ও লিপিড পরিবহন করে',
      '🧪 ডিটক্সিফিকেশন — ক্ষতিকর পদার্থ নিষ্ক্রিয় করে',
      '🔗 নিউক্লিয়ার আবরণীর সাথে সংযুক্ত',
      '📦 গলজি বস্তুতে পদার্থ পাঠায়',
      '💊 লিভার কোষে স্মুথ ER বেশি থাকে',
    ],
  },
  '2.2.7': {
    title: '২.২.৭ গলজি বস্তু (Golgi Apparatus)',
    subtitle: 'কোষের প্যাকেজিং ও নিঃসরণ কেন্দ্র',
    color: '#c084fc',
    diagramLabel: 'গলজি বস্তুর সিসটার্নি ও ভেসিকল',
    description: 'গলজি বস্তু ER থেকে প্রোটিন সংগ্রহ করে, রূপান্তরিত করে এবং প্যাকেজ করে সঠিক গন্তব্যে পাঠায়।',
    details: [
      '📦 ৪-৮টি চ্যাপ্টা ঝিল্লির স্তুপ (সিসটার্নি)',
      '📥 সিস ফেস — ER থেকে পদার্থ গ্রহণ',
      '📤 ট্রান্স ফেস — ভেসিকল হিসেবে নিঃসরণ',
      '🏷️ প্রোটিন গ্লাইকোসিলেশন ও পরিবর্তন',
      '🚚 ভেসিকল — গলজি থেকে কোষ ঝিল্লিতে পদার্থ পাঠায়',
      '🧪 লাইসোসোম তৈরিতে সাহায্য করে',
      '💡 কামিল্লো গলজি (১৮৯৮) আবিষ্কার করেন',
    ],
  },
  '2.2.8': {
    title: '২.২.৮ রাইবোসোম (Ribosome)',
    subtitle: 'প্রোটিন সংশ্লেষণের কারখানা',
    color: '#f87171',
    diagramLabel: 'পলিসোম ও প্রোটিন সংশ্লেষণ',
    description: 'রাইবোসোম প্রোটিন তৈরির স্থান। এটি rRNA ও প্রোটিন দিয়ে তৈরি। দুটি সাব-ইউনিট মিলে mRNA-কে পড়ে প্রোটিন তৈরি করে।',
    details: [
      '⚙️ গঠন: বড় সাব-ইউনিট (60S) + ছোট সাব-ইউনিট (40S)',
      '🧬 rRNA + প্রোটিন দিয়ে তৈরি',
      '📜 mRNA পড়ে অ্যামিনো এসিড সংযুক্ত করে',
      '🔗 পলিসোম — একটি mRNA-তে একাধিক রাইবোসোম',
      '🆓 মুক্ত রাইবোসোম — সাইটোপ্লাজমে প্রোটিন তৈরি',
      '📌 রাফ ER-এ আটকানো রাইবোসোম — নিঃসৃত প্রোটিন',
      '🔬 ইউক্যারিওটে: 80S, প্রোক্যারিওটে: 70S',
    ],
  },
  '2.2.9': {
    title: '২.২.৯ লাইসোসোম (Lysosome)',
    subtitle: 'কোষের পরিপাক ও বর্জ্য ব্যবস্থাপনা',
    color: '#ef4444',
    diagramLabel: 'লাইসোসোমে হাইড্রোলাইটিক এনজাইম',
    description: 'লাইসোসোম অ্যাসিড হাইড্রোলেজ এনজাইম ধারণ করে যা পুরনো অঙ্গাণু, ব্যাকটেরিয়া ও খাদ্যকণা ভেঙে ফেলে।',
    details: [
      '⚗️ অ্যাসিড হাইড্রোলেজ এনজাইম ধারণ করে',
      '🔢 অভ্যন্তরীণ pH: ৪.৫-৫ (অম্লীয়)',
      '♻️ অটোফেজি — পুরনো অঙ্গাণু ভাঙে',
      '🦠 ফেজোসাইটোসিস — ব্যাকটেরিয়া ধ্বংস করে',
      '💀 অ্যাপোপটোসিস — কোষ মৃত্যুতে ভূমিকা',
      '🌱 উদ্ভিদকোষে ভ্যাকুওল একই কাজ করে',
      '⚠️ লাইসোসোম ফেটে গেলে কোষ মরে যায়',
    ],
  },
  '2.2.10': {
    title: '২.২.১০ সেন্ট্রোসোম (Centrosome)',
    subtitle: 'কোষ বিভাজনের সংগঠন কেন্দ্র',
    color: '#fbbf24',
    diagramLabel: 'সেন্ট্রিওলের ৯+০ ব্যবস্থা ও অ্যাস্টার',
    description: 'সেন্ট্রোসোম শুধু প্রাণিকোষে থাকে। এতে একজোড়া সেন্ট্রিওল আছে। কোষ বিভাজনে স্পিন্ডেল তন্তু গঠন করে।',
    details: [
      '🐾 শুধু প্রাণিকোষে পাওয়া যায়',
      '⚙️ একজোড়া সেন্ট্রিওল পরস্পরের সাথে লম্বভাবে',
      '🔢 ৯টি ত্রয়ী মাইক্রোটিউবিউল (৯+০ গঠন)',
      '🕸️ স্পিন্ডেল তন্তু তৈরি করে',
      '🔀 অ্যাস্টার রশ্মি বিকিরণ করে',
      '📋 ক্রোমোজোম পৃথক করতে সাহায্য করে',
      '🦠 সিলিয়া ও ফ্ল্যাজেলার বেসাল বডি গঠনে ভূমিকা',
    ],
  },
  '2.2.11': {
    title: '২.২.১১ ভ্যাকুওল (Vacuole)',
    subtitle: 'কোষের সঞ্চয় ও পানি নিয়ন্ত্রণ কেন্দ্র',
    color: '#38bdf8',
    diagramLabel: 'উদ্ভিদ ও প্রাণিকোষের গহ্বর তুলনা',
    description: 'ভ্যাকুওল ঝিল্লিবেষ্টিত থলি যা তরল পদার্থ ধারণ করে। উদ্ভিদকোষে একটি বড় কেন্দ্রীয় গহ্বর থাকে।',
    details: [
      '🌿 উদ্ভিদকোষ: একটি বড় কেন্দ্রীয় গহ্বর (৮০% আয়তন)',
      '🐾 প্রাণিকোষ: অনেক ছোট ভ্যাকুওল',
      '💧 পানি, লবণ, রঞ্জক পদার্থ সঞ্চয় করে',
      '⚖️ টার্গর চাপ বজায় রাখে',
      '🧪 টোনোপ্লাস্ট — ভ্যাকুওলের আবরণ ঝিল্লি',
      '🔵 খাদ্য গহ্বর — খাদ্য হজম করে (প্রাণিতে)',
      '💊 বিষাক্ত পদার্থ সঞ্চয় করে কোষকে রক্ষা করে',
    ],
  },
  '2.3': {
    title: '২.৩ উদ্ভিদ ও প্রাণিকোষের পার্থক্য',
    subtitle: 'গঠন ও কার্যের তুলনামূলক আলোচনা',
    color: '#f472b6',
    diagramLabel: 'উদ্ভিদকোষ vs প্রাণিকোষ',
    description: 'উদ্ভিদকোষ ও প্রাণিকোষ উভয়ই ইউক্যারিওটিক কিন্তু তাদের মধ্যে গুরুত্বপূর্ণ পার্থক্য রয়েছে।',
    details: [
      '🟢 কোষ প্রাচীর: উদ্ভিদে আছে ✓ — প্রাণিতে নেই ✗',
      '🌿 ক্লোরোপ্লাস্ট: উদ্ভিদে আছে ✓ — প্রাণিতে নেই ✗',
      '💧 কেন্দ্রীয় গহ্বর: উদ্ভিদে বড় ✓ — প্রাণিতে ছোট',
      '⚙️ সেন্ট্রোসোম: উদ্ভিদে নেই ✗ — প্রাণিতে আছে ✓',
      '🔷 আকৃতি: উদ্ভিদে সাধারণত চৌকোণা — প্রাণিতে গোলাকার',
      '🔢 মাইটোকন্ড্রিয়া: উদ্ভিদে কম — প্রাণিতে বেশি',
      '🌞 খাদ্য তৈরি: উদ্ভিদ করে (স্বনির্ভর) — প্রাণি করে না',
    ],
  },
  '2.4': {
    title: '২.৪ টিস্যু (Tissue)',
    subtitle: 'একই গঠনের কোষের সমষ্টি',
    color: '#a78bfa',
    diagramLabel: 'উদ্ভিদ ও প্রাণি টিস্যুর বিভিন্ন ধরন',
    description: 'একই ধরনের কোষ একত্রে একটি নির্দিষ্ট কার্য সম্পাদন করলে তাকে টিস্যু বলে। উদ্ভিদ ও প্রাণি — উভয়েরই বিভিন্ন ধরনের টিস্যু আছে।',
    details: [
      '🌿 উদ্ভিদ টিস্যু: ভাজক ও স্থায়ী টিস্যু',
      '🐾 প্রাণি টিস্যু: আবরণী, যোজক, পেশি, স্নায়ু',
      '🔬 হিস্টোলজি — টিস্যু অধ্যয়নের বিজ্ঞান',
      '📐 ভাজক টিস্যু — বিভাজনশীল, বৃদ্ধি ঘটায়',
      '🧱 স্থায়ী টিস্যু — বিভাজন বন্ধ, নির্দিষ্ট কাজ করে',
      '🩸 রক্ত — তরল যোজক টিস্যু',
      '🦴 হাড় ও তরুণাস্থি — কঠিন যোজক টিস্যু',
    ],
  },
  '2.4.1': {
    title: '২.৪.১ উদ্ভিদ টিস্যু (Plant Tissue)',
    subtitle: 'ভাজক ও স্থায়ী টিস্যু — জাইলেম ও ফ্লোয়েম',
    color: '#34d399',
    diagramLabel: 'প্যারেনকাইমা, কোলেনকাইমা, স্ক্লেরেনকাইমা, জাইলেম',
    description: 'উদ্ভিদ টিস্যু দুই প্রকার: ভাজক (বিভাজনশীল) ও স্থায়ী (বিভাজন বন্ধ)। স্থায়ী টিস্যু সরল ও জটিল এই দুই ধরনের।',
    details: [
      '🌱 ভাজক টিস্যু: শীর্ষ, পার্শ্ব ও নিবেশিত — বৃদ্ধিতে ভূমিকা',
      '🟢 প্যারেনকাইমা: পাতলা প্রাচীর, খাদ্য সঞ্চয়',
      '🟡 কোলেনকাইমা: কোণে ঘন প্রাচীর, নমনীয় সহায়তা',
      '⬛ স্ক্লেরেনকাইমা: মোটা প্রাচীর, শক্ত সহায়তা',
      '🔴 জাইলেম: পানি ও খনিজ পরিবহন (মূল থেকে পাতায়)',
      '🟢 ফ্লোয়েম: খাদ্য পরিবহন (পাতা থেকে সব অংশে)',
      '🌾 ভাস্কুলার বান্ডেল = জাইলেম + ফ্লোয়েম একত্রে',
    ],
  },
  '2.4.2': {
    title: '২.৪.২ প্রাণি টিস্যু (Animal Tissue)',
    subtitle: 'চার ধরনের মৌলিক প্রাণি টিস্যু',
    color: '#f87171',
    diagramLabel: 'আবরণী, যোজক, পেশি ও স্নায়ু টিস্যু',
    description: 'প্রাণিদেহে চার ধরনের মৌলিক টিস্যু: আবরণী, যোজক, পেশি ও স্নায়ু। প্রতিটি বিশেষ কাজ করে।',
    details: [
      '🧱 আবরণী টিস্যু: শরীরের আবরণ, গ্রন্থি তৈরি',
      '🔗 যোজক টিস্যু: অন্য টিস্যু সংযুক্ত করে',
      '💪 পেশি টিস্যু: সংকোচন-প্রসারণে নড়াচড়া',
      '⚡ স্নায়ু টিস্যু: স্নায়ু আবেগ পরিবহন',
      '🩸 রক্ত — বিশেষ তরল যোজক টিস্যু',
      '🦴 হাড় — কঠিন যোজক টিস্যু, সুরক্ষা',
      '🔬 নিউরন — স্নায়ু কোষ, মস্তিষ্কে ১০০ বিলিয়ন',
    ],
  },
  '2.5': {
    title: '২.৫ অঙ্গ ও অঙ্গতন্ত্র',
    subtitle: 'কোষ → টিস্যু → অঙ্গ → অঙ্গতন্ত্র → জীব',
    color: '#fb923c',
    diagramLabel: 'জীবদেহের শ্রেণিবিন্যাস — কোষ থেকে জীব',
    description: 'একাধিক টিস্যু মিলে অঙ্গ (Organ) গঠন করে। একাধিক অঙ্গ মিলে অঙ্গতন্ত্র (Organ System) এবং সকল অঙ্গতন্ত্র মিলে পরিপূর্ণ জীব গঠিত হয়।',
    details: [
      '🔬 কোষ → টিস্যু → অঙ্গ → অঙ্গতন্ত্র → জীব',
      '❤️ হৃদয়: পেশি ও যোজক টিস্যু — পরিসঞ্চালন তন্ত্র',
      '🫁 ফুসফুস: আবরণী ও যোজক টিস্যু — শ্বাস তন্ত্র',
      '🧠 মস্তিষ্ক: স্নায়ু টিস্যু — স্নায়ুতন্ত্র',
      '🌿 পাতা: উদ্ভিদের সালোকসংশ্লেষণ অঙ্গ',
      '🌱 মূল: পানি ও খনিজ শোষণকারী অঙ্গ',
      '🔗 মানবদেহে ১১টি প্রধান অঙ্গতন্ত্র',
    ],
  },
};

const drawMap: Record<string, (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => void> = {
  '2.1': drawCell21,
  '2.2': (ctx, w, h, t) => { drawCell21(ctx, w, h, t); },
  '2.2.1': drawCellMembrane,
  '2.2.2': drawCellWall,
  '2.2.3': drawNucleus,
  '2.2.4': drawMitochondria,
  '2.2.5': drawPlastid,
  '2.2.6': drawER,
  '2.2.7': drawGolgi,
  '2.2.8': drawRibosome,
  '2.2.9': drawLysosome,
  '2.2.10': drawCentrosome,
  '2.2.11': drawVacuole,
  '2.3': drawComparison,
  '2.4': drawPlantTissue,
  '2.4.1': drawPlantTissue,
  '2.4.2': drawAnimalTissue,
  '2.5': drawOrganSystem,
};

// ─── Menu tree ───────────────────────────────────────────────────────────────
const menuTree: MenuItem[] = [
  {
    id: '2.1', label: '২.১ জীবকোষ',
  },
  {
    id: '2.2', label: '২.২ কোষের প্রধান অঙ্গাণু',
    children: [
      { id: '2.2.1', label: '২.২.১ কোষ ঝিল্লি' },
      { id: '2.2.2', label: '২.২.২ কোষ প্রাচীর' },
      { id: '2.2.3', label: '২.২.৩ নিউক্লিয়াস' },
      { id: '2.2.4', label: '২.২.৪ মাইটোকন্ড্রিয়া' },
      { id: '2.2.5', label: '২.২.৫ প্লাস্টিড' },
      { id: '2.2.6', label: '২.২.৬ এন্ডোপ্লাজমিক ER' },
      { id: '2.2.7', label: '২.২.৭ গলজি বস্তু' },
      { id: '2.2.8', label: '২.২.৮ রাইবোসোম' },
      { id: '2.2.9', label: '২.২.৯ লাইসোসোম' },
      { id: '2.2.10', label: '২.২.১০ সেন্ট্রোসোম' },
      { id: '2.2.11', label: '২.২.১১ ভ্যাকুওল' },
    ],
  },
  {
    id: '2.3', label: '২.৩ উদ্ভিদ ও প্রাণিকোষের পার্থক্য',
  },
  {
    id: '2.4', label: '২.৪ টিস্যু',
    children: [
      { id: '2.4.1', label: '২.৪.১ উদ্ভিদ টিস্যু' },
      { id: '2.4.2', label: '২.৪.২ প্রাণি টিস্যু' },
    ],
  },
  {
    id: '2.5', label: '২.৫ অঙ্গ ও অঙ্গতন্ত্র',
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// MENU ITEM COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
const MenuItemComp: React.FC<{
  item: MenuItem;
  activeId: string;
  setActive: (id: string) => void;
  depth?: number;
}> = ({ item, activeId, setActive, depth = 0 }) => {
  const [open, setOpen] = useState<boolean>(depth === 0);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = activeId === item.id;
  const isParentOfActive = item.children?.some(c => activeId.startsWith(c.id) || activeId === c.id);
  const sectionData = sections[item.id];
  const color = sectionData?.color || '#64748b';

  return (
    <div>
      <button
        onClick={() => {
          if (hasChildren) setOpen(o => !o);
          setActive(item.id);
        }}
        className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded-lg transition-all text-xs font-medium
          ${depth > 0 ? 'pl-5' : ''}
          ${isActive
            ? 'text-slate-950 font-bold shadow-sm'
            : 'text-blue-200 hover:text-white hover:bg-white/10'
          }`}
        style={isActive ? { backgroundColor: color } : {}}
      >
        {hasChildren ? (
          open || isParentOfActive ? <ChevronDown className="h-3.5 w-3.5 shrink-0" /> : <ChevronRight className="h-3.5 w-3.5 shrink-0" />
        ) : (
          <span className="h-3.5 w-3.5 shrink-0 flex items-center justify-center">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isActive ? '#0f172a' : color }} />
          </span>
        )}
        <span className="leading-tight">{item.label}</span>
      </button>
      {hasChildren && (open || isParentOfActive) && (
        <div className="ml-2 mt-0.5 space-y-0.5 border-l border-white/10 pl-1">
          {item.children!.map(child => (
            <MenuItemComp key={child.id} item={child} activeId={activeId} setActive={setActive} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
export const CellExplorerLab: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('2.1');
  const [rotation, setRotation] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  const sectionData = sections[activeId] || sections['2.1'];
  const drawFn = drawMap[activeId] || drawMap['2.1'];

  // Animation loop
  useEffect(() => {
    let last = 0;
    const loop = (ts: number) => {
      const dt = (ts - last) / 1000;
      last = ts;
      timeRef.current += dt;
      setRotation(r => r + 0.015);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Draw canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { width: w, height: h } = canvas;
    ctx.clearRect(0, 0, w, h);
    // Background
    const bg = ctx.createRadialGradient(w / 2, h / 2, 20, w / 2, h / 2, Math.max(w, h) * 0.8);
    bg.addColorStop(0, '#0f1729');
    bg.addColorStop(1, '#050b18');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);
    try {
      drawFn(ctx, w, h, timeRef.current);
    } catch (_) {}
  }, [rotation, activeId, drawFn]);

  const handleSetActive = useCallback((id: string) => {
    setActiveId(id);
    timeRef.current = 0;
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-[85vh] bg-slate-950 text-slate-100 font-sans">
      {/* ── SIDEBAR MENU ── */}
      <aside className="w-full lg:w-64 xl:w-72 shrink-0 bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-700/60 flex flex-col">
        <div className="px-4 py-3 border-b border-slate-700/60 bg-slate-800">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-emerald-400" />
            <div>
              <p className="text-xs font-bold text-emerald-300">অধ্যায় ২</p>
              <p className="text-[11px] text-slate-400">জীবকোষ ও টিস্যু</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
          {menuTree.map(item => (
            <MenuItemComp key={item.id} item={item} activeId={activeId} setActive={handleSetActive} />
          ))}
        </nav>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex flex-col xl:flex-row overflow-hidden">

        {/* Canvas Panel */}
        <div className="xl:w-[55%] flex flex-col bg-slate-950 border-b xl:border-b-0 xl:border-r border-slate-700/60">
          {/* Canvas header */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-900/80 border-b border-slate-700/40">
            <div className="flex items-center gap-2">
              <ZoomIn className="h-4 w-4" style={{ color: sectionData.color }} />
              <span className="text-xs font-semibold text-slate-300">{sectionData.diagramLabel}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: sectionData.color }} />
              <span className="text-[10px] text-slate-500">লাইভ অ্যানিমেশন</span>
            </div>
          </div>

          {/* Canvas */}
          <div className="flex-1 relative min-h-[280px]">
            <canvas
              ref={canvasRef}
              width={600}
              height={400}
              className="w-full h-full object-contain"
              style={{ display: 'block' }}
            />
          </div>

          {/* Section ID badge */}
          <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-700/40 flex items-center gap-2">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded"
              style={{ backgroundColor: sectionData.color + '33', color: sectionData.color, border: `1px solid ${sectionData.color}55` }}
            >
              {activeId}
            </span>
            <span className="text-xs text-slate-400">{sectionData.subtitle}</span>
          </div>
        </div>

        {/* Info Panel */}
        <div className="xl:flex-1 flex flex-col overflow-y-auto">
          {/* Title */}
          <div
            className="px-5 py-4 border-b border-slate-700/60"
            style={{ background: `linear-gradient(135deg, ${sectionData.color}15, transparent)` }}
          >
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 mt-0.5 shrink-0" style={{ color: sectionData.color }} />
              <div>
                <h2 className="text-base font-bold text-slate-100">{sectionData.title}</h2>
                <p className="text-xs text-slate-400 mt-0.5">{sectionData.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="px-5 py-3 border-b border-slate-700/30">
            <p className="text-sm text-slate-300 leading-relaxed">{sectionData.description}</p>
          </div>

          {/* Detail points */}
          <div className="px-5 py-4 flex-1 overflow-y-auto">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-0.5 w-4 rounded" style={{ backgroundColor: sectionData.color }} />
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">মূল তথ্যসমূহ</h3>
            </div>
            <ul className="space-y-2.5">
              {sectionData.details.map((d, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-slate-300 p-2.5 rounded-lg border border-slate-700/40"
                  style={{ background: `${sectionData.color}08` }}
                >
                  <span className="shrink-0 text-xs font-bold mt-0.5 w-4 text-center" style={{ color: sectionData.color }}>
                    {bn(i + 1)}
                  </span>
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick nav footer */}
          <div className="px-5 py-3 border-t border-slate-700/40 bg-slate-900/60">
            <div className="flex flex-wrap gap-1.5">
              {Object.keys(sections).map(id => (
                <button
                  key={id}
                  onClick={() => handleSetActive(id)}
                  title={sections[id].title}
                  className="text-[10px] px-2 py-0.5 rounded font-mono transition-all border"
                  style={activeId === id
                    ? { backgroundColor: sections[id].color, color: '#0f172a', borderColor: sections[id].color, fontWeight: 700 }
                    : { backgroundColor: 'transparent', color: '#64748b', borderColor: '#334155' }
                  }
                >
                  {id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
