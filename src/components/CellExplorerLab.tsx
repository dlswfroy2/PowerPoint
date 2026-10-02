import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronRight, ChevronDown, Layers, Info, ZoomIn } from 'lucide-react';

// ─── Helpers ─────────────────────────────────────────────────────────────────
const bn = (n: number | string) => String(n).replace(/[0-9]/g, d => '০১২৩৪৫৬৭৮৯'[+d]);

function glow(ctx: CanvasRenderingContext2D, color: string, blur = 18) {
  ctx.shadowColor = color; ctx.shadowBlur = blur;
}
function noGlow(ctx: CanvasRenderingContext2D) {
  ctx.shadowColor = 'transparent'; ctx.shadowBlur = 0;
}

/** 3D-shaded sphere with specular highlight */
function drawSphere(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, baseColor: string, specColor = '#ffffff') {
  // Body gradient (light from top-left)
  const g = ctx.createRadialGradient(cx - r * 0.35, cy - r * 0.35, r * 0.05, cx, cy, r);
  g.addColorStop(0, specColor + 'cc');
  g.addColorStop(0.3, baseColor);
  g.addColorStop(1, baseColor + '44');
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = g; ctx.fill();
  // Specular dot
  ctx.beginPath(); ctx.arc(cx - r * 0.3, cy - r * 0.3, r * 0.18, 0, Math.PI * 2);
  ctx.fillStyle = specColor + '99'; ctx.fill();
}

/** Glowing circle stroke */
function glowCircle(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number, color: string, lw = 2.5, blur = 12) {
  ctx.save();
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
  glow(ctx, color, blur); ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.stroke();
  noGlow(ctx); ctx.restore();
}

/** Glowing ellipse stroke */
function glowEllipse(ctx: CanvasRenderingContext2D, cx: number, cy: number, rx: number, ry: number, angle: number, color: string, lw = 2.5, blur = 10) {
  ctx.save();
  ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, angle, 0, Math.PI * 2);
  glow(ctx, color, blur); ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.stroke();
  noGlow(ctx); ctx.restore();
}

/** Floating glowing particle */
function drawParticle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string, label = '') {
  drawSphere(ctx, x, y, r, color, '#ffffff');
  glow(ctx, color, 15); ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.strokeStyle = color + 'aa'; ctx.lineWidth = 1; ctx.stroke(); noGlow(ctx);
  if (label) {
    ctx.fillStyle = '#0f172a'; ctx.font = `bold ${Math.max(7, r * 0.9)}px sans-serif`;
    ctx.textAlign = 'center'; ctx.fillText(label, x, y + r * 0.35);
  }
}

/** Draw label with glow */
function label(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, color: string, size = 10, bold = false) {
  ctx.save(); glow(ctx, color, 8);
  ctx.fillStyle = color; ctx.font = `${bold ? 'bold ' : ''}${size}px sans-serif`;
  ctx.textAlign = 'center'; ctx.fillText(text, x, y); noGlow(ctx); ctx.restore();
}

// ═══════════════════════════════════════════════════════════════════════════════
// ADVANCED DRAW FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

// 2.1 – Prokaryotic vs Eukaryotic (full comparison with depth)
function draw21(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, '#060d18'); bg.addColorStop(1, '#0a1628');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);

  // ── Prokaryotic (left) ──
  ctx.save(); ctx.translate(w * 0.28, h * 0.5);
  const pRot = t * 0.15;
  // Outer envelope glow
  glow(ctx, '#22c55e', 25);
  ctx.beginPath(); ctx.ellipse(0, 0, 105, 72, pRot * 0.05, 0, Math.PI * 2);
  ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 3; ctx.stroke();
  noGlow(ctx);
  const pGrad = ctx.createRadialGradient(-20, -20, 5, 0, 0, 100);
  pGrad.addColorStop(0, 'rgba(34,197,94,0.18)'); pGrad.addColorStop(1, 'rgba(34,197,94,0.04)');
  ctx.fillStyle = pGrad; ctx.fill();

  // Cell wall (dotted inner)
  ctx.beginPath(); ctx.ellipse(0, 0, 95, 63, pRot * 0.05, 0, Math.PI * 2);
  ctx.setLineDash([6, 4]); ctx.strokeStyle = '#4ade80aa'; ctx.lineWidth = 1.5; ctx.stroke(); ctx.setLineDash([]);

  // Nucleoid region (DNA cloud)
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + t * 0.4;
    const nx = Math.cos(a) * 20; const ny = Math.sin(a) * 12;
    ctx.beginPath(); ctx.ellipse(nx, ny, 18, 10, a, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(251,191,36,0.25)'; ctx.fill();
    ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 1; ctx.stroke();
  }
  label(ctx, 'নিউক্লিওয়েড', 0, 5, '#fde68a', 9, true);

  // Ribosomes scattered
  for (let r = 0; r < 7; r++) {
    const a = (r / 7) * Math.PI * 2 + t * 0.2;
    const px = Math.cos(a) * 58; const py = Math.sin(a) * 40;
    drawParticle(ctx, px, py, 5, '#f87171');
  }

  // Flagella
  for (let f = 0; f < 3; f++) {
    const fy = -25 + f * 25;
    ctx.beginPath(); ctx.moveTo(95, fy);
    for (let x = 0; x <= 50; x += 2) {
      ctx.lineTo(95 + x, fy + Math.sin((x / 8) + t * 2 + f) * 12);
    }
    glow(ctx, '#4ade80', 8); ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
  }
  // Pili
  for (let p = 0; p < 4; p++) {
    const a = p * (Math.PI / 2.5) - 1;
    ctx.beginPath(); ctx.moveTo(Math.cos(a) * 95, Math.sin(a) * 63);
    ctx.lineTo(Math.cos(a) * 125, Math.sin(a) * 85);
    ctx.strokeStyle = '#86efac88'; ctx.lineWidth = 1.5; ctx.stroke();
  }
  label(ctx, 'প্রোক্যারিওটিক', 0, 90, '#4ade80', 11, true);
  label(ctx, '(ব্যাকটেরিয়া)', 0, 105, '#86efac', 9);
  ctx.restore();

  // Divider
  ctx.save();
  ctx.beginPath(); ctx.moveTo(w * 0.5, 20); ctx.lineTo(w * 0.5, h - 20);
  ctx.setLineDash([6, 6]); ctx.strokeStyle = '#334155'; ctx.lineWidth = 1.5; ctx.stroke(); ctx.setLineDash([]);
  label(ctx, 'বনাম', w * 0.5, h / 2 + 5, '#64748b', 12, true);
  ctx.restore();

  // ── Eukaryotic (right) ──
  ctx.save(); ctx.translate(w * 0.73, h * 0.5);

  // Cell membrane glow
  glow(ctx, '#a855f7', 20);
  ctx.beginPath(); ctx.ellipse(0, 0, 110, 90, 0, 0, Math.PI * 2);
  ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 3; ctx.stroke(); noGlow(ctx);
  const eGrad = ctx.createRadialGradient(-25, -25, 8, 0, 0, 110);
  eGrad.addColorStop(0, 'rgba(139,92,246,0.2)'); eGrad.addColorStop(1, 'rgba(139,92,246,0.04)');
  ctx.fillStyle = eGrad; ctx.fill();

  // Cell wall (plants)
  ctx.beginPath(); ctx.ellipse(0, 0, 120, 100, 0, 0, Math.PI * 2);
  ctx.strokeStyle = '#22c55e55'; ctx.lineWidth = 4; ctx.stroke();

  // Nucleus
  glow(ctx, '#818cf8', 15);
  ctx.beginPath(); ctx.arc(15, -5, 36, 0, Math.PI * 2);
  const nGrad = ctx.createRadialGradient(5, -12, 5, 15, -5, 36);
  nGrad.addColorStop(0, 'rgba(165,150,255,0.5)'); nGrad.addColorStop(1, 'rgba(99,102,241,0.25)');
  ctx.fillStyle = nGrad; ctx.fill();
  ctx.strokeStyle = '#818cf8'; ctx.lineWidth = 2.5; ctx.stroke(); noGlow(ctx);
  drawSphere(ctx, 15, -5, 12, '#ec4899', '#fce7f3'); // nucleolus

  // Chloroplasts
  [[-70, -45], [65, -60], [-60, 50]].forEach(([cx2, cy2]) => {
    glow(ctx, '#06b6d4', 12);
    ctx.beginPath(); ctx.ellipse(cx2, cy2, 22, 12, 0.4, 0, Math.PI * 2);
    const cg = ctx.createRadialGradient(cx2 - 8, cy2 - 4, 2, cx2, cy2, 22);
    cg.addColorStop(0, '#a7f3d0'); cg.addColorStop(1, '#059669');
    ctx.fillStyle = cg; ctx.fill();
    ctx.strokeStyle = '#34d399'; ctx.lineWidth = 1.5; ctx.stroke(); noGlow(ctx);
  });

  // Mitochondria
  [[60, 40], [-80, 10]].forEach(([mx, my]) => {
    glow(ctx, '#f59e0b', 10);
    ctx.beginPath(); ctx.ellipse(mx, my, 22, 11, -0.3, 0, Math.PI * 2);
    const mg = ctx.createRadialGradient(mx - 8, my - 4, 2, mx, my, 22);
    mg.addColorStop(0, '#fde68a'); mg.addColorStop(1, '#d97706');
    ctx.fillStyle = mg; ctx.fill();
    ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 1.5; ctx.stroke(); noGlow(ctx);
  });

  // Vacuole
  ctx.beginPath(); ctx.ellipse(-30, 25, 35, 50, 0.2, 0, Math.PI * 2);
  glow(ctx, '#38bdf8', 8);
  ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1.5; ctx.stroke(); noGlow(ctx);
  const vGrad = ctx.createRadialGradient(-35, 10, 3, -30, 25, 38);
  vGrad.addColorStop(0, 'rgba(186,230,253,0.3)'); vGrad.addColorStop(1, 'rgba(14,165,233,0.08)');
  ctx.fillStyle = vGrad; ctx.fill();

  label(ctx, 'ইউক্যারিওটিক', 0, 115, '#c084fc', 11, true);
  label(ctx, '(উদ্ভিদ/প্রাণি)', 0, 130, '#a78bfa', 9);
  ctx.restore();
}

// 2.2.1 – Cell Membrane (advanced phospholipid bilayer)
function draw221(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#060d18'); bg.addColorStop(1, '#0a1628');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);

  const nHeads = 13;
  const spacing = (w - 60) / nHeads;
  const outerY = h * 0.35; const innerY = h * 0.65;

  // Zone labels
  label(ctx, '← বাইরের পরিবেশ (Extracellular) →', w / 2, 18, '#475569', 9);
  label(ctx, '← ভেতরের সাইটোপ্লাজম (Intracellular) →', w / 2, h - 8, '#475569', 9);

  for (let i = 0; i < nHeads; i++) {
    const x = 30 + i * spacing + spacing / 2;
    const wave = Math.sin(t * 1.2 + i * 0.7) * 4;

    // ── OUTER LEAFLET ──
    const headY = outerY + wave;
    const tailEndY = innerY - 12 + wave;

    // Phospholipid head (hydrophilic)
    drawSphere(ctx, x, headY, 10, `hsl(${200 + i * 8},80%,55%)`, '#e0f2fe');
    glow(ctx, '#38bdf8', 6);
    ctx.beginPath(); ctx.arc(x, headY, 10, 0, Math.PI * 2);
    ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 1; ctx.stroke(); noGlow(ctx);

    // Fatty acid tails (two)
    const tailColors = ['#93c5fd', '#60a5fa'];
    [-3, 3].forEach((dx, ti) => {
      ctx.beginPath();
      ctx.moveTo(x + dx, headY + 10);
      for (let y = 0; y <= 55; y += 2) {
        const wave2 = Math.sin((y / 12) + t + i + ti) * 3;
        ctx.lineTo(x + dx + wave2, headY + 10 + y);
      }
      ctx.strokeStyle = tailColors[ti]; ctx.lineWidth = 2; ctx.stroke();
    });

    // ── INNER LEAFLET ──
    const iHeadY = innerY - wave;
    drawSphere(ctx, x, iHeadY, 10, `hsl(${260 + i * 8},75%,60%)`, '#ede9fe');
    glow(ctx, '#a78bfa', 6);
    ctx.beginPath(); ctx.arc(x, iHeadY, 10, 0, Math.PI * 2);
    ctx.strokeStyle = '#a78bfa'; ctx.lineWidth = 1; ctx.stroke(); noGlow(ctx);

    [-3, 3].forEach((dx, ti) => {
      ctx.beginPath();
      ctx.moveTo(x + dx, iHeadY - 10);
      for (let y = 0; y <= 55; y += 2) {
        const wave2 = Math.sin((y / 12) + t + i + ti + 2) * 3;
        ctx.lineTo(x + dx + wave2, iHeadY - 10 - y);
      }
      ctx.strokeStyle = ti === 0 ? '#c4b5fd' : '#a78bfa'; ctx.lineWidth = 2; ctx.stroke();
    });
  }

  // ── Integral protein (channel) ──
  const px = w * 0.5 + Math.sin(t * 0.4) * 60;
  ctx.save(); ctx.translate(px, (outerY + innerY) / 2);
  glow(ctx, '#f87171', 18);
  ctx.beginPath(); ctx.ellipse(0, 0, 16, 42, 0, 0, Math.PI * 2);
  const pGrad = ctx.createLinearGradient(-16, 0, 16, 0);
  pGrad.addColorStop(0, '#fca5a5'); pGrad.addColorStop(0.5, '#ef4444'); pGrad.addColorStop(1, '#fca5a5');
  ctx.fillStyle = pGrad; ctx.fill();
  ctx.strokeStyle = '#fca5a5'; ctx.lineWidth = 1.5; ctx.stroke(); noGlow(ctx);
  // Channel pore
  ctx.beginPath(); ctx.ellipse(0, 0, 5, 30, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#7f1d1d88'; ctx.fill();
  label(ctx, 'চ্যানেল', 0, 60, '#fca5a5', 9, true);
  ctx.restore();

  // ── Cholesterol ──
  const chx = w * 0.25 + Math.sin(t * 0.6 + 1) * 40;
  ctx.save(); ctx.translate(chx, (outerY + innerY) / 2 - 8);
  glow(ctx, '#fbbf24', 12);
  ctx.beginPath(); ctx.ellipse(0, 0, 7, 30, 0.2, 0, Math.PI * 2);
  ctx.fillStyle = '#fde68a'; ctx.fill();
  ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 1.5; ctx.stroke(); noGlow(ctx);
  label(ctx, 'কোলেস্টেরল', 0, 44, '#fbbf24', 9);
  ctx.restore();

  // ── Peripheral protein ──
  const phx = w * 0.75;
  ctx.save(); ctx.translate(phx, outerY - 22 + Math.sin(t * 0.5) * 5);
  glow(ctx, '#4ade80', 12);
  ctx.beginPath(); ctx.ellipse(0, 0, 22, 12, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#bbf7d0'; ctx.fill();
  ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 1.5; ctx.stroke(); noGlow(ctx);
  label(ctx, 'পেরিফেরাল', phx - phx + 0, 26, '#4ade80', 9);
  ctx.restore();

  // Ion flow particles
  for (let ion = 0; ion < 3; ion++) {
    const progress = ((t * 0.3 + ion * 0.33) % 1);
    const iy = outerY - 30 + progress * (innerY - outerY + 60);
    const ix = px + Math.sin(progress * Math.PI * 3) * 4;
    drawParticle(ctx, ix, iy, 5, '#34d399', 'Na⁺');
  }

  // Labels
  label(ctx, '← ফসফোলিপিড মাথা (হাইড্রোফিলিক) →', w / 2, outerY - 22, '#38bdf8', 9, true);
  label(ctx, '← ফসফোলিপিড লেজ (হাইড্রোফোবিক) →', w / 2, (outerY + innerY) / 2, '#6366f1', 9);
  label(ctx, '← ফসফোলিপিড মাথা →', w / 2, innerY + 22, '#a78bfa', 9, true);
}

// 2.2.2 – Cell Wall (3D layered)
function draw222(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = '#060d18'; ctx.fillRect(0, 0, w, h);
  const cx = w / 2; const cy = h / 2 + 10;

  // Cellulose microfibrils (background mesh)
  ctx.save();
  for (let a = 0; a < Math.PI; a += 0.3) {
    const r1 = 150; const r2 = 170;
    const x1 = cx + Math.cos(a + t * 0.05) * r1; const y1 = cy + Math.sin(a + t * 0.05) * r1;
    const x2 = cx + Math.cos(a + t * 0.05) * r2; const y2 = cy + Math.sin(a + t * 0.05) * r2;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
    ctx.strokeStyle = '#16653088'; ctx.lineWidth = 3; ctx.stroke();
    const x3 = cx + Math.cos(a + 1.6 + t * 0.05) * r1; const y3 = cy + Math.sin(a + 1.6 + t * 0.05) * r1;
    const x4 = cx + Math.cos(a + 1.6 + t * 0.05) * r2; const y4 = cy + Math.sin(a + 1.6 + t * 0.05) * r2;
    ctx.beginPath(); ctx.moveTo(x3, y3); ctx.lineTo(x4, y4);
    ctx.strokeStyle = '#16653066'; ctx.lineWidth = 2; ctx.stroke();
  }
  ctx.restore();

  // Layer 1: Middle Lamella (outermost)
  glowEllipse(ctx, cx, cy, 168, 130, 0, '#4ade80', 6, 20);
  const mlGrad = ctx.createRadialGradient(cx - 50, cy - 40, 20, cx, cy, 170);
  mlGrad.addColorStop(0, 'rgba(74,222,128,0.15)'); mlGrad.addColorStop(1, 'rgba(74,222,128,0.03)');
  ctx.beginPath(); ctx.ellipse(cx, cy, 168, 130, 0, 0, Math.PI * 2);
  ctx.fillStyle = mlGrad; ctx.fill();
  label(ctx, 'মধ্যবর্তী পর্দা (পেকটিন)', cx, cy - 138, '#4ade80', 10, true);

  // Layer 2: Primary Cell Wall
  glowEllipse(ctx, cx, cy, 143, 108, 0, '#22c55e', 5, 15);
  const pw = ctx.createRadialGradient(cx - 40, cy - 30, 15, cx, cy, 145);
  pw.addColorStop(0, 'rgba(34,197,94,0.18)'); pw.addColorStop(1, 'rgba(34,197,94,0.04)');
  ctx.beginPath(); ctx.ellipse(cx, cy, 143, 108, 0, 0, Math.PI * 2);
  ctx.fillStyle = pw; ctx.fill();
  label(ctx, 'প্রাথমিক প্রাচীর (সেলুলোজ)', cx + 170, cy - 40, '#22c55e', 9, true);

  // Layer 3: Secondary Cell Wall
  glowEllipse(ctx, cx, cy, 118, 87, 0, '#16a34a', 4, 12);
  const sw = ctx.createRadialGradient(cx - 35, cy - 25, 10, cx, cy, 120);
  sw.addColorStop(0, 'rgba(21,128,61,0.2)'); sw.addColorStop(1, 'rgba(21,128,61,0.06)');
  ctx.beginPath(); ctx.ellipse(cx, cy, 118, 87, 0, 0, Math.PI * 2);
  ctx.fillStyle = sw; ctx.fill();
  label(ctx, 'দ্বিতীয় প্রাচীর (লিগনিন)', cx - 165, cy - 30, '#16a34a', 9, true);

  // Layer 4: Plasma membrane
  glowEllipse(ctx, cx, cy, 96, 70, 0, '#818cf8', 3.5, 14);

  // Layer 5: Cytoplasm
  const cytGrad = ctx.createRadialGradient(cx - 20, cy - 15, 5, cx, cy, 92);
  cytGrad.addColorStop(0, 'rgba(99,102,241,0.18)'); cytGrad.addColorStop(1, 'rgba(99,102,241,0.04)');
  ctx.beginPath(); ctx.ellipse(cx, cy, 93, 67, 0, 0, Math.PI * 2);
  ctx.fillStyle = cytGrad; ctx.fill();
  label(ctx, 'সাইটোপ্লাজম', cx, cy + 5, '#818cf8', 10, true);

  // Plasmodesmata (glowing pores) - animated rotation
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + t * 0.2;
    const x1 = cx + Math.cos(a) * 115; const y1 = cy + Math.sin(a) * 84;
    const x2 = cx + Math.cos(a) * 170; const y2 = cy + Math.sin(a) * 132;
    glow(ctx, '#fbbf24', 18);
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
    ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 2.5; ctx.stroke(); noGlow(ctx);
    drawParticle(ctx, (x1 + x2) / 2, (y1 + y2) / 2, 5, '#fde68a');
  }
  label(ctx, '● প্লাজমোডেজমাটা (জীবন্ত পথ)', cx, cy + 115, '#fbbf24', 9, true);

  // Cellulose fibers in primary wall (animated rotation)
  ctx.save(); ctx.translate(cx, cy);
  const numFibers = 12;
  for (let f = 0; f < numFibers; f++) {
    const a = (f / numFibers) * Math.PI * 2 + t * 0.08;
    ctx.save(); ctx.rotate(a);
    ctx.beginPath();
    ctx.moveTo(96, -3); ctx.lineTo(143, -3);
    ctx.moveTo(96, 3); ctx.lineTo(143, 3);
    ctx.strokeStyle = '#4ade8044'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.restore();
  }
  ctx.restore();
}

// 2.2.3 – Nucleus (ultra-detailed)
function draw223(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = '#060d18'; ctx.fillRect(0, 0, w, h);
  const cx = w / 2; const cy = h / 2;

  // Background nuclear matrix glow
  const aura = ctx.createRadialGradient(cx, cy, 10, cx, cy, 160);
  aura.addColorStop(0, 'rgba(139,92,246,0.12)'); aura.addColorStop(1, 'transparent');
  ctx.fillStyle = aura; ctx.fillRect(0, 0, w, h);

  // Nuclear envelope - outer
  glow(ctx, '#a855f7', 22);
  ctx.beginPath(); ctx.arc(cx, cy, 145, 0, Math.PI * 2);
  ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 5; ctx.setLineDash([20, 10]); ctx.stroke();
  ctx.setLineDash([]); noGlow(ctx);

  // Nuclear envelope - inner
  glow(ctx, '#7c3aed', 12);
  ctx.beginPath(); ctx.arc(cx, cy, 132, 0, Math.PI * 2);
  ctx.strokeStyle = '#7c3aed'; ctx.lineWidth = 3; ctx.stroke(); noGlow(ctx);

  // Fill nuclear interior
  const niFill = ctx.createRadialGradient(cx - 40, cy - 40, 10, cx, cy, 140);
  niFill.addColorStop(0, 'rgba(167,139,250,0.15)'); niFill.addColorStop(1, 'rgba(109,40,217,0.06)');
  ctx.beginPath(); ctx.arc(cx, cy, 132, 0, Math.PI * 2);
  ctx.fillStyle = niFill; ctx.fill();

  // Nuclear pores (3D-looking octagonal pores)
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + t * 0.15;
    const px = cx + Math.cos(a) * 138; const py = cy + Math.sin(a) * 138;
    // Pore ring
    glow(ctx, '#f59e0b', 15);
    for (let d = 0; d < 8; d++) {
      const da = (d / 8) * Math.PI * 2;
      const dx = Math.cos(da) * 7; const dy = Math.sin(da) * 7;
      ctx.beginPath(); ctx.arc(px + dx, py + dy, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = '#fbbf24'; ctx.fill();
    }
    ctx.beginPath(); ctx.arc(px, py, 7, 0, Math.PI * 2);
    ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 1.5; ctx.stroke(); noGlow(ctx);
    // Transport through pore
    const tp = ((t * 0.5 + i * 0.08) % 1);
    const tx = px + Math.cos(a + Math.PI) * 20 * tp;
    const ty = py + Math.sin(a + Math.PI) * 20 * tp;
    if (tp < 0.5) { drawParticle(ctx, tx, ty, 3, '#34d399'); }
  }
  label(ctx, 'নিউক্লিয়ার রন্ধ্র', cx + 100, cy - 105, '#fbbf24', 9, true);

  // Chromatin threads (animated DNA-like loops)
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const baseA = (i / 8) * Math.PI * 2 + t * 0.3;
    const x1 = cx + Math.cos(baseA) * 22; const y1 = cy + Math.sin(baseA) * 22;
    const x2 = cx + Math.cos(baseA + 1.1) * 100; const y2 = cy + Math.sin(baseA + 1.1) * 100;
    const cx1 = x1 + Math.cos(baseA + 0.5) * 50 + Math.sin(t + i) * 15;
    const cy1 = y1 + Math.sin(baseA + 0.5) * 50 + Math.cos(t + i) * 15;
    ctx.moveTo(x1, y1);
    ctx.bezierCurveTo(cx1, cy1, cx1 - 20, cy1 + 20, x2, y2);
  }
  glow(ctx, '#ec4899', 10);
  ctx.strokeStyle = '#ec4899'; ctx.lineWidth = 2.5; ctx.stroke(); noGlow(ctx);
  label(ctx, 'ক্রোমাটিন তন্তু (DNA)', cx - 100, cy + 90, '#f9a8d4', 9, true);

  // Histone beads on chromatin
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + t * 0.3 + 0.5;
    const hx = cx + Math.cos(a) * 65; const hy = cy + Math.sin(a) * 55;
    drawSphere(ctx, hx, hy, 9, '#f472b6', '#fce7f3');
    glow(ctx, '#f472b6', 8);
    ctx.beginPath(); ctx.arc(hx, hy, 9, 0, Math.PI * 2);
    ctx.strokeStyle = '#f9a8d4'; ctx.lineWidth = 1; ctx.stroke(); noGlow(ctx);
  }

  // Nucleolus (3D sphere)
  const nlGrad = ctx.createRadialGradient(cx - 15, cy - 12, 3, cx, cy, 42);
  nlGrad.addColorStop(0, '#fce7f3'); nlGrad.addColorStop(0.4, '#db2777'); nlGrad.addColorStop(1, '#9d174d');
  glow(ctx, '#ec4899', 20);
  ctx.beginPath(); ctx.arc(cx, cy, 42, 0, Math.PI * 2);
  ctx.fillStyle = nlGrad; ctx.fill();
  ctx.strokeStyle = '#f9a8d4'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
  label(ctx, 'নিউক্লিওলাস', cx, cy + 5, '#fce7f3', 11, true);

  // rRNA particles emanating
  for (let r = 0; r < 4; r++) {
    const a = (r / 4) * Math.PI * 2 + t * 0.4;
    const dist = 50 + ((t * 30 + r * 20) % 80);
    drawParticle(ctx, cx + Math.cos(a) * dist, cy + Math.sin(a) * dist, 4, '#a78bfa', 'rRNA');
  }

  label(ctx, 'নিউক্লিয়ার আবরণী (দ্বিস্তর)', cx, cy - 158, '#c4b5fd', 10, true);
  label(ctx, 'নিউক্লিওপ্লাজম', cx + 80, cy + 20, '#818cf8', 9);
}

// 2.2.4 – Mitochondria (detailed cristae + ATP synthase)
function draw224(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = '#060d18'; ctx.fillRect(0, 0, w, h);
  const cx = w / 2; const cy = h / 2;

  // Glow aura
  const aura = ctx.createRadialGradient(cx, cy, 10, cx, cy, 200);
  aura.addColorStop(0, 'rgba(245,158,11,0.08)'); aura.addColorStop(1, 'transparent');
  ctx.fillStyle = aura; ctx.fillRect(0, 0, w, h);

  // Outer membrane
  glow(ctx, '#f59e0b', 20);
  ctx.beginPath(); ctx.ellipse(cx, cy, 175, 100, 0, 0, Math.PI * 2);
  const omGrad = ctx.createLinearGradient(cx - 175, 0, cx + 175, 0);
  omGrad.addColorStop(0, 'rgba(251,191,36,0.15)'); omGrad.addColorStop(0.5, 'rgba(245,158,11,0.25)'); omGrad.addColorStop(1, 'rgba(251,191,36,0.15)');
  ctx.fillStyle = omGrad; ctx.fill();
  ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 4; ctx.stroke(); noGlow(ctx);

  // Inner membrane
  glow(ctx, '#fbbf24', 12);
  ctx.beginPath(); ctx.ellipse(cx, cy, 158, 85, 0, 0, Math.PI * 2);
  const imGrad = ctx.createRadialGradient(cx - 50, cy - 30, 10, cx, cy, 160);
  imGrad.addColorStop(0, 'rgba(253,230,138,0.15)'); imGrad.addColorStop(1, 'rgba(161,98,7,0.08)');
  ctx.fillStyle = imGrad; ctx.fill();
  ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 2.5; ctx.stroke(); noGlow(ctx);

  // Cristae (folded inner membrane) with 3D effect
  const cristaCount = 7;
  for (let i = -3; i <= 3; i++) {
    const xBase = cx + i * 38;
    const heightAnim = 72 + Math.sin(t * 0.8 + i * 0.6) * 4;
    ctx.save();

    // Left fold
    const lg = ctx.createLinearGradient(xBase - 15, 0, xBase + 15, 0);
    lg.addColorStop(0, '#fde68a55'); lg.addColorStop(0.5, '#fbbf24cc'); lg.addColorStop(1, '#fde68a55');
    glow(ctx, '#fbbf24', 8);
    ctx.beginPath();
    ctx.moveTo(xBase, cy - heightAnim * 0.6);
    ctx.bezierCurveTo(xBase + 22, cy - heightAnim * 0.3, xBase + 22, cy + heightAnim * 0.3, xBase, cy + heightAnim * 0.6);
    ctx.bezierCurveTo(xBase - 6, cy + heightAnim * 0.3, xBase - 6, cy - heightAnim * 0.3, xBase, cy - heightAnim * 0.6);
    ctx.fillStyle = lg; ctx.fill();
    ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
    ctx.restore();
  }

  // ATP Synthase proteins on inner membrane
  for (let s = 0; s < 6; s++) {
    const a = (s / 6) * Math.PI * 2 + t * 0.1;
    const sx = cx + Math.cos(a) * 145; const sy = cy + Math.sin(a) * 78;
    glow(ctx, '#34d399', 14);
    drawSphere(ctx, sx, sy, 9, '#059669', '#d1fae5');
    ctx.beginPath(); ctx.arc(sx, sy, 9, 0, Math.PI * 2);
    ctx.strokeStyle = '#34d399'; ctx.lineWidth = 1.5; ctx.stroke(); noGlow(ctx);
    // Spinning rotor
    for (let r = 0; r < 3; r++) {
      const ra = (r / 3) * Math.PI * 2 + t * 2 + s;
      ctx.beginPath(); ctx.moveTo(sx, sy);
      ctx.lineTo(sx + Math.cos(ra) * 7, sy + Math.sin(ra) * 7);
      ctx.strokeStyle = '#6ee7b7'; ctx.lineWidth = 2; ctx.stroke();
    }
  }
  label(ctx, 'ATP সিন্থেজ', cx + 155, cy - 50, '#34d399', 9, true);

  // Matrix content (Krebs cycle enzymes)
  label(ctx, 'ম্যাট্রিক্স', cx, cy - 5, '#fde68a', 12, true);
  label(ctx, '(ক্রেবস চক্র)', cx, cy + 12, '#fbbf2499', 9);

  // ATP molecules flying out
  for (let a = 0; a < 8; a++) {
    const angle = (a / 8) * Math.PI * 2 + t * 0.4;
    const dist = 130 + ((t * 25 + a * 15) % 90);
    if (dist < 220) {
      drawParticle(ctx, cx + Math.cos(angle) * dist, cy + Math.sin(angle) * (dist * 0.57), 7, '#4ade80', 'ATP');
    }
  }

  // NADH particles in matrix
  for (let n = 0; n < 3; n++) {
    const na = (n / 3) * Math.PI * 2 + t * 0.25;
    drawParticle(ctx, cx + Math.cos(na) * 55, cy + Math.sin(na) * 35, 7, '#60a5fa', 'NADH');
  }

  label(ctx, 'বহিঃআবরণী', cx, cy - 115, '#f59e0b', 10, true);
  label(ctx, 'ক্রিস্টি (অন্তঃঝিল্লির ভাঁজ)', cx, cy + 110, '#fbbf24', 10, true);
  label(ctx, 'অন্তঃআবরণী', cx + 155, cy + 45, '#fbbf24', 9);
}

// 2.2.5 – Chloroplast (ultra-detailed grana + light reactions)
function draw225(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = '#060d18'; ctx.fillRect(0, 0, w, h);
  const cx = w / 2; const cy = h / 2;

  // Green aura
  const aura = ctx.createRadialGradient(cx, cy, 10, cx, cy, 200);
  aura.addColorStop(0, 'rgba(16,185,129,0.1)'); aura.addColorStop(1, 'transparent');
  ctx.fillStyle = aura; ctx.fillRect(0, 0, w, h);

  // Outer envelope
  glow(ctx, '#06b6d4', 22);
  ctx.beginPath(); ctx.ellipse(cx, cy, 172, 112, 0, 0, Math.PI * 2);
  const oeGrad = ctx.createRadialGradient(cx - 50, cy - 35, 10, cx, cy, 175);
  oeGrad.addColorStop(0, 'rgba(6,182,212,0.15)'); oeGrad.addColorStop(1, 'rgba(6,182,212,0.04)');
  ctx.fillStyle = oeGrad; ctx.fill();
  ctx.strokeStyle = '#06b6d4'; ctx.lineWidth = 4; ctx.stroke(); noGlow(ctx);

  // Inner envelope
  glow(ctx, '#22d3ee', 10);
  ctx.beginPath(); ctx.ellipse(cx, cy, 157, 99, 0, 0, Math.PI * 2);
  ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 2.5; ctx.stroke(); noGlow(ctx);

  // Stroma (green fill)
  const stromaGrad = ctx.createRadialGradient(cx - 40, cy - 25, 5, cx, cy, 155);
  stromaGrad.addColorStop(0, 'rgba(16,185,129,0.18)'); stromaGrad.addColorStop(1, 'rgba(4,120,87,0.06)');
  ctx.beginPath(); ctx.ellipse(cx, cy, 154, 97, 0, 0, Math.PI * 2);
  ctx.fillStyle = stromaGrad; ctx.fill();

  // Grana (stacks of thylakoids) - 4 stacks
  const granaPos = [[-82, -22], [15, 18], [85, -28], [-20, 48]];
  granaPos.forEach(([gx, gy], gi) => {
    const stackCount = 5 + gi;
    for (let k = 0; k < stackCount; k++) {
      const dy = k * 13 - (stackCount * 13) / 2;
      const thickPulse = 1 + Math.sin(t * 1.2 + gi * 0.5 + k * 0.3) * 0.04;
      ctx.beginPath(); ctx.ellipse(cx + gx, cy + gy + dy, 32 * thickPulse, 8, 0, 0, Math.PI * 2);
      const tg = ctx.createLinearGradient(cx + gx - 32, cy + gy + dy, cx + gx + 32, cy + gy + dy);
      tg.addColorStop(0, '#047857'); tg.addColorStop(0.3, '#059669'); tg.addColorStop(0.6, '#10b981'); tg.addColorStop(1, '#047857');
      ctx.fillStyle = tg; ctx.fill();
      glow(ctx, '#34d399', 5);
      ctx.strokeStyle = '#34d399'; ctx.lineWidth = 1; ctx.stroke(); noGlow(ctx);
    }
    label(ctx, `গ্রানাম ${bn(gi + 1)}`, cx + gx, cy + gy + (stackCount * 13) / 2 + 14, '#6ee7b7', 8, true);

    // Light arrows hitting grana
    glow(ctx, '#fde68a', 12);
    ctx.beginPath();
    ctx.moveTo(cx + gx, cy + gy - (stackCount * 13) / 2 - 30);
    ctx.lineTo(cx + gx, cy + gy - (stackCount * 13) / 2 - 8);
    ctx.strokeStyle = '#fde68a'; ctx.lineWidth = 2.5; ctx.stroke(); noGlow(ctx);
    // Arrowhead
    ctx.beginPath();
    ctx.moveTo(cx + gx - 6, cy + gy - (stackCount * 13) / 2 - 14);
    ctx.lineTo(cx + gx, cy + gy - (stackCount * 13) / 2 - 8);
    ctx.lineTo(cx + gx + 6, cy + gy - (stackCount * 13) / 2 - 14);
    ctx.strokeStyle = '#fde68a'; ctx.lineWidth = 2; ctx.stroke();
  });

  // Stroma lamellae (connecting thylakoids between grana)
  ctx.beginPath();
  ctx.moveTo(cx - 50, cy - 20); ctx.bezierCurveTo(cx - 20, cy - 30, cx + 5, cy + 5, cx + 50, cy - 5);
  glow(ctx, '#059669', 8); ctx.strokeStyle = '#059669'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
  ctx.beginPath();
  ctx.moveTo(cx - 70, cy + 30); ctx.bezierCurveTo(cx - 30, cy + 20, cx + 10, cy + 40, cx + 50, cy + 25);
  ctx.stroke();
  label(ctx, 'স্ট্রোমা লেমেলা', cx, cy + 20, '#10b98199', 9);

  // CO2 in, O2 out, Sugar out particles
  for (let p = 0; p < 4; p++) {
    const prog = ((t * 0.35 + p * 0.25) % 1);
    const px = -160 + prog * 100; const py = cy - 80 + p * 20;
    if (prog < 0.8) drawParticle(ctx, cx + px, py, 6, '#94a3b8', 'CO₂');
  }
  for (let p = 0; p < 3; p++) {
    const prog = ((t * 0.4 + p * 0.33) % 1);
    const ox = 60 + prog * 100; const oy = cy - 60 + p * 30;
    if (prog < 0.8) drawParticle(ctx, cx + ox, oy, 6, '#60a5fa', 'O₂');
  }

  label(ctx, 'স্ট্রোমা', cx + 80, cy + 60, '#34d399', 10, true);
  label(ctx, 'বহিঃ আবরণী', cx, cy - 125, '#06b6d4', 10, true);
  label(ctx, '↑ আলো শোষণ', cx - 90, cy - 80, '#fde68a', 9, true);
  label(ctx, '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', cx, cy + 130, '#86efac', 10, true);
}

// 2.2.6 – ER
function draw226(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = '#060d18'; ctx.fillRect(0, 0, w, h);

  // Rough ER panel
  ctx.save(); ctx.translate(35, 30);
  label(ctx, 'অমসৃণ ER (Rough ER)', 105, 10, '#818cf8', 11, true);
  for (let row = 0; row < 5; row++) {
    const y = 40 + row * 38;
    // Membrane pair
    for (let offset of [-7, 7]) {
      ctx.beginPath();
      for (let x = 0; x <= 200; x += 3) {
        const yy = y + offset + Math.sin((x / 25) + t + row * 0.7) * 5;
        x === 0 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy);
      }
      glow(ctx, '#6366f1', 8); ctx.strokeStyle = '#6366f1'; ctx.lineWidth = 2.5; ctx.stroke(); noGlow(ctx);
    }
    // Ribosomes on outer surface
    for (let rx = 12; rx < 200; rx += 20) {
      const ry = y - 7 + Math.sin((rx / 25) + t + row * 0.7) * 5;
      // Large subunit
      drawSphere(ctx, rx, ry - 9, 6, '#ef4444', '#fecaca');
      // Small subunit
      drawSphere(ctx, rx, ry - 2, 4.5, '#f97316', '#fed7aa');
      // Growing polypeptide
      ctx.beginPath();
      for (let pp = 0; pp < 12; pp++) {
        const pa = (pp / 12) * Math.PI * 2 + t + rx / 20;
        ctx.lineTo(rx + Math.cos(pa) * 4 + pp * 2, ry - 15 - pp * 2.5);
      }
      ctx.strokeStyle = '#4ade8099'; ctx.lineWidth = 1.5; ctx.stroke();
    }
  }
  ctx.restore();

  // Smooth ER panel
  ctx.save(); ctx.translate(w / 2 + 10, 30);
  label(ctx, 'মসৃণ ER (Smooth ER)', 105, 10, '#22d3ee', 11, true);
  for (let row = 0; row < 5; row++) {
    const y = 40 + row * 38;
    for (let offset of [-7, 7]) {
      ctx.beginPath();
      for (let x = 0; x <= 200; x += 3) {
        const yy = y + offset + Math.sin((x / 18) + t * 1.3 + row * 0.8) * 8;
        x === 0 ? ctx.moveTo(x, yy) : ctx.lineTo(x, yy);
      }
      glow(ctx, '#22d3ee', 8); ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 2.5; ctx.stroke(); noGlow(ctx);
    }
    // Lipid droplets inside
    for (let lx = 30; lx < 190; lx += 45) {
      const ly = y + Math.sin((lx / 18) + t * 1.3 + row * 0.8) * 8;
      drawSphere(ctx, lx, ly, 7, '#fbbf24', '#fef9c3');
    }
  }
  // Vesicle budding
  for (let v = 0; v < 3; v++) {
    const vx = 30 + v * 70; const vy = 250 + Math.sin(t + v) * 10;
    glow(ctx, '#22d3ee', 12);
    ctx.beginPath(); ctx.arc(vx, vy, 12, 0, Math.PI * 2);
    ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
    drawSphere(ctx, vx, vy, 9, '#a5f3fc', '#e0f9ff');
    label(ctx, '→ গলজি', vx, vy + 22, '#22d3ee', 8);
  }
  ctx.restore();

  // Divider
  ctx.beginPath(); ctx.moveTo(w / 2 + 5, 25); ctx.lineTo(w / 2 + 5, h - 20);
  ctx.setLineDash([5, 5]); ctx.strokeStyle = '#334155'; ctx.lineWidth = 1; ctx.stroke(); ctx.setLineDash([]);
}

// 2.2.7 – Golgi (rotating stack + vesicle traffic)
function draw227(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = '#060d18'; ctx.fillRect(0, 0, w, h);
  const cx = w / 2; const cy = h / 2;

  const stackColors = ['#818cf8', '#a78bfa', '#c084fc', '#e879f9', '#f472b6', '#fb7185', '#fbbf24'];
  const stacks = 7;

  // CIS face label & arrow
  label(ctx, 'সিস ফেস', cx, 25, '#818cf8', 11, true);
  glow(ctx, '#818cf8', 10); ctx.beginPath(); ctx.moveTo(cx - 30, 35); ctx.lineTo(cx - 30, 50);
  ctx.lineTo(cx - 15, 40); ctx.moveTo(cx - 30, 50); ctx.lineTo(cx - 45, 40);
  ctx.strokeStyle = '#818cf8'; ctx.lineWidth = 1.5; ctx.stroke(); noGlow(ctx);

  // ER → Golgi vesicles arriving
  for (let v = 0; v < 3; v++) {
    const vProg = ((t * 0.5 + v * 0.33) % 1);
    const vx = cx - 160 + vProg * 100;
    const vy = 60 + v * 18;
    if (vProg < 0.85) {
      glow(ctx, '#818cf8', 10);
      ctx.beginPath(); ctx.arc(vx, vy, 9, 0, Math.PI * 2);
      ctx.strokeStyle = '#818cf8'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
      drawSphere(ctx, vx, vy, 7, '#c4b5fd', '#ede9fe');
    }
  }
  label(ctx, '← ER থেকে', cx - 125, 58, '#818cf888', 9);

  // Cisternae stacks
  ctx.save(); ctx.translate(cx, cy - 20);
  for (let i = 0; i < stacks; i++) {
    const yOffset = i * 26;
    const swell = 1 + Math.sin(t * 0.6 + i * 0.4) * 0.03;
    const rx = (92 - i * 5) * swell;
    const ry = 12;

    // Membrane tube with 3D shading
    const cg = ctx.createLinearGradient(-rx, yOffset, rx, yOffset);
    cg.addColorStop(0, stackColors[i] + '55'); cg.addColorStop(0.3, stackColors[i] + 'cc');
    cg.addColorStop(0.7, stackColors[i] + 'cc'); cg.addColorStop(1, stackColors[i] + '55');
    glow(ctx, stackColors[i], 12);
    ctx.beginPath(); ctx.ellipse(0, yOffset, rx, ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = cg; ctx.fill();
    ctx.strokeStyle = stackColors[i]; ctx.lineWidth = 2.5; ctx.stroke(); noGlow(ctx);

    // Top highlight
    ctx.beginPath(); ctx.ellipse(0, yOffset - 3, rx * 0.6, ry * 0.3, 0, 0, Math.PI * 2);
    ctx.fillStyle = stackColors[i] + '44'; ctx.fill();

    // Stage label
    if (i === 0) label(ctx, '(cis)', rx + 12, yOffset + 4, stackColors[i] + 'aa', 8);
    if (i === stacks - 1) label(ctx, '(trans)', rx + 12, yOffset + 4, stackColors[i] + 'aa', 8);
  }

  // Vesicles budding off trans face
  for (let v = 0; v < 5; v++) {
    const vProg = ((t * 0.5 + v * 0.2) % 1);
    const angle = -0.5 + v * 0.3;
    const vx = Math.cos(angle) * (92 + vProg * 70);
    const vy = (stacks - 1) * 26 + Math.sin(angle) * (vProg * 60);
    glow(ctx, stackColors[stacks - 1], 12);
    ctx.beginPath(); ctx.arc(vx, vy, 11, 0, Math.PI * 2);
    ctx.strokeStyle = stackColors[stacks - 1]; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
    drawSphere(ctx, vx, vy, 9, '#fb7185', '#ffe4e6');
  }
  ctx.restore();

  label(ctx, 'ট্রান্স ফেস', cx, cy + 140, '#fb7185', 11, true);
  label(ctx, '→ কোষঝিল্লি / লাইসোসোম', cx + 120, cy + 120, '#fbbf24', 9);
  label(ctx, 'গ্লাইকোসিলেশন ও পরিবর্তন →', cx, cy + 155, '#a78bfa', 9);
}

// 2.2.8 – Ribosome (detailed polysome)
function draw228(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = '#060d18'; ctx.fillRect(0, 0, w, h);

  // mRNA strand with codon markings
  const mY = h * 0.5;
  ctx.beginPath();
  for (let x = 20; x <= w - 20; x += 3) {
    const y = mY + Math.sin((x / 35) + t * 0.4) * 10;
    x === 20 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  glow(ctx, '#fbbf24', 12); ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 4; ctx.stroke(); noGlow(ctx);
  label(ctx, 'mRNA', w - 15, mY + 20, '#fbbf24', 10, true);

  // Codon markers on mRNA
  for (let c = 0; c < 12; c++) {
    const cx2 = 40 + c * 45;
    const cy2 = mY + Math.sin((cx2 / 35) + t * 0.4) * 10;
    ctx.beginPath(); ctx.arc(cx2, cy2, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#fde68a'; ctx.fill();
  }

  // 5 ribosomes (polysome)
  const ribX = [60, 155, 255, 365, 465];
  ribX.forEach((rx, ri) => {
    const ry = mY + Math.sin((rx / 35) + t * 0.4) * 10;

    // Large subunit (60S) – detailed
    glow(ctx, '#6366f1', 15);
    const lg = ctx.createRadialGradient(rx - 12, ry - 28, 3, rx, ry - 22, 30);
    lg.addColorStop(0, '#c7d2fe'); lg.addColorStop(0.5, '#6366f1'); lg.addColorStop(1, '#3730a3');
    ctx.beginPath(); ctx.ellipse(rx, ry - 22, 30, 22, 0, 0, Math.PI * 2);
    ctx.fillStyle = lg; ctx.fill();
    ctx.strokeStyle = '#818cf8'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);

    // Small subunit (40S)
    glow(ctx, '#a855f7', 12);
    const sg = ctx.createRadialGradient(rx - 8, ry + 14, 2, rx, ry + 16, 22);
    sg.addColorStop(0, '#e9d5ff'); sg.addColorStop(0.5, '#a855f7'); sg.addColorStop(1, '#6d28d9');
    ctx.beginPath(); ctx.ellipse(rx, ry + 16, 24, 15, 0, 0, Math.PI * 2);
    ctx.fillStyle = sg; ctx.fill();
    ctx.strokeStyle = '#c084fc'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);

    // Peptide tunnel through large subunit
    ctx.beginPath(); ctx.ellipse(rx, ry - 18, 5, 14, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#1e1b4b'; ctx.fill();

    // Growing polypeptide chain (longer for later ribosomes)
    const chainLen = (ri + 1) * 12;
    if (chainLen > 2) {
      ctx.beginPath(); ctx.moveTo(rx, ry - 45);
      for (let p = 0; p < chainLen; p++) {
        const pa = (p / 8) * Math.PI * 2 + t * 0.5 + ri;
        ctx.lineTo(rx + Math.cos(pa) * 8 + p * 1.5 - chainLen * 0.75, ry - 48 - p * 2.5);
      }
      glow(ctx, '#4ade80', 8); ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 2.5; ctx.stroke(); noGlow(ctx);
    }

    // tRNA approaching
    const tProg = ((t * 0.6 + ri * 0.2) % 1);
    const tPos = ry - 70 - tProg * 30;
    glow(ctx, '#f472b6', 10);
    ctx.beginPath(); ctx.moveTo(rx + 40, tPos); ctx.lineTo(rx + 5, ry - 5);
    ctx.strokeStyle = '#f472b6aa'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
    drawParticle(ctx, rx + 40 - tProg * 35, tPos + tProg * 30, 6, '#f472b6');
  });

  label(ctx, 'পলিসোম (একাধিক রাইবোসোম)', w / 2, 18, '#818cf8', 11, true);
  label(ctx, '60S সাব-ইউনিট', w / 2, h * 0.27, '#818cf8', 9, true);
  label(ctx, '40S সাব-ইউনিট', w / 2, h * 0.75, '#c084fc', 9, true);
  label(ctx, '→ পলিপেপটাইড শৃঙ্খল', 75, h * 0.18, '#4ade80', 9, true);
  label(ctx, 'tRNA →', w * 0.82, h * 0.3, '#f472b6', 9);
}

// 2.2.9 – Lysosome (digestion process)
function draw229(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = '#060d18'; ctx.fillRect(0, 0, w, h);
  const cx = w / 2; const cy = h / 2;

  // Lysosome body
  const lGrad = ctx.createRadialGradient(cx - 30, cy - 30, 5, cx, cy, 95);
  lGrad.addColorStop(0, 'rgba(254,202,202,0.3)'); lGrad.addColorStop(0.4, 'rgba(239,68,68,0.2)'); lGrad.addColorStop(1, 'rgba(127,29,29,0.15)');
  glow(ctx, '#ef4444', 22);
  ctx.beginPath(); ctx.arc(cx, cy, 95, 0, Math.PI * 2);
  ctx.fillStyle = lGrad; ctx.fill();
  ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 4; ctx.stroke(); noGlow(ctx);

  // Inner membrane detail
  glow(ctx, '#fca5a5', 8);
  ctx.beginPath(); ctx.arc(cx, cy, 82, 0, Math.PI * 2);
  ctx.strokeStyle = '#fca5a5'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);

  // Enzymes (hydrolases) - 3D spheres rotating inside
  for (let e = 0; e < 10; e++) {
    const ea = (e / 10) * Math.PI * 2 + t * 0.5;
    const er = 52 + Math.sin(t * 0.8 + e) * 8;
    const ex = cx + Math.cos(ea) * er; const ey = cy + Math.sin(ea) * er;
    drawSphere(ctx, ex, ey, 10, '#fca5a5', '#fee2e2');
    glow(ctx, '#ef4444', 6);
    ctx.beginPath(); ctx.arc(ex, ey, 10, 0, Math.PI * 2);
    ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 1; ctx.stroke(); noGlow(ctx);
    ctx.fillStyle = '#7f1d1d'; ctx.font = 'bold 7px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('H', ex, ey + 3);
  }

  // pH indicator
  const acidGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 30);
  acidGrad.addColorStop(0, 'rgba(251,113,133,0.4)'); acidGrad.addColorStop(1, 'rgba(239,68,68,0.1)');
  ctx.beginPath(); ctx.arc(cx, cy, 30, 0, Math.PI * 2);
  ctx.fillStyle = acidGrad; ctx.fill();
  label(ctx, 'pH 4.8', cx, cy - 2, '#fce7f7', 13, true);
  label(ctx, '(অম্লীয়)', cx, cy + 14, '#fca5a5', 9);

  // Autophagy (old organelle being digested)
  ctx.save(); ctx.translate(cx + 150, cy - 60);
  glow(ctx, '#a855f7', 10);
  ctx.beginPath(); ctx.ellipse(0, 0, 28, 18, 0.3, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(139,92,246,0.3)'; ctx.fill();
  ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
  label(ctx, 'পুরনো', 0, -5, '#c4b5fd', 8); label(ctx, 'অঙ্গাণু', 0, 6, '#c4b5fd', 8);
  // Arrow toward lysosome
  glow(ctx, '#ef4444', 8);
  ctx.beginPath(); ctx.moveTo(-28, 0); ctx.lineTo(-60, 0);
  ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
  ctx.restore();

  // Phagocytosis (bacteria)
  ctx.save(); ctx.translate(cx - 145, cy + 55);
  glow(ctx, '#4ade80', 10);
  ctx.beginPath(); ctx.ellipse(0, 0, 20, 10, -0.5, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(34,197,94,0.3)'; ctx.fill();
  ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
  label(ctx, 'ব্যাকটেরিয়া', 0, 22, '#86efac', 8);
  glow(ctx, '#ef4444', 8);
  ctx.beginPath(); ctx.moveTo(20, -3); ctx.lineTo(55, -15);
  ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
  ctx.restore();

  // Breakdown products flying out
  for (let p = 0; p < 6; p++) {
    const pa = (p / 6) * Math.PI * 2 + t * 0.6;
    const pd = 100 + ((t * 20 + p * 12) % 60);
    const px = cx + Math.cos(pa) * pd; const py = cy + Math.sin(pa) * pd;
    if (pd < 165) drawParticle(ctx, px, py, 5, '#94a3b8');
  }

  label(ctx, 'লাইসোসোম', cx, cy - 110, '#ef4444', 12, true);
  label(ctx, 'অ্যাসিড হাইড্রোলেজ এনজাইম (H)', cx, cy + 112, '#fca5a5', 9);
}

// 2.2.10 – Centrosome (spinning centrioles)
function draw2210(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = '#060d18'; ctx.fillRect(0, 0, w, h);
  const cx = w / 2; const cy = h / 2;

  // Pericentriolar material glow
  const pcmGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 80);
  pcmGrad.addColorStop(0, 'rgba(251,191,36,0.2)'); pcmGrad.addColorStop(1, 'rgba(251,191,36,0.02)');
  ctx.beginPath(); ctx.arc(cx, cy, 80, 0, Math.PI * 2);
  ctx.fillStyle = pcmGrad; ctx.fill();
  glow(ctx, '#fbbf24', 15);
  ctx.beginPath(); ctx.arc(cx, cy, 80, 0, Math.PI * 2);
  ctx.strokeStyle = '#fbbf2444'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
  label(ctx, 'পেরিসেন্ট্রিওলার ম্যাটেরিয়াল', cx, cy - 92, '#fbbf24', 9, true);

  // Draw centriole function
  const drawCentriole3D = (ox: number, oy: number, angle: number, label2: string) => {
    ctx.save(); ctx.translate(ox, oy); ctx.rotate(angle);

    // 3D cylinder effect
    const cylGrad = ctx.createLinearGradient(-40, 0, 40, 0);
    cylGrad.addColorStop(0, '#fde68a22'); cylGrad.addColorStop(0.3, '#fbbf24cc'); cylGrad.addColorStop(0.7, '#fbbf24cc'); cylGrad.addColorStop(1, '#fde68a22');
    ctx.beginPath(); ctx.ellipse(0, 0, 40, 22, 0, 0, Math.PI * 2);
    ctx.fillStyle = cylGrad; ctx.fill();
    glow(ctx, '#fbbf24', 10);
    ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 2.5; ctx.stroke(); noGlow(ctx);

    // 9 triplet microtubules around edge
    for (let i = 0; i < 9; i++) {
      const ma = (i / 9) * Math.PI * 2 + t * 0.8;
      const mx = Math.cos(ma) * 30; const my = Math.sin(ma) * 16;
      // Three sub-tubules
      for (let d = 0; d < 3; d++) {
        const da = ma + (d - 1) * 0.25;
        drawSphere(ctx, mx + Math.cos(da) * 4, my + Math.sin(da) * 3, 4.5, '#f59e0b', '#fef3c7');
      }
    }
    // Center cross-section
    ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#78350f'; ctx.fill();

    ctx.restore();
    label(ctx, label2, ox, oy + 35, '#fbbf24', 9, true);
  };

  drawCentriole3D(cx - 22, cy - 10, 0, '모母 সেন্ট্রিওল');
  drawCentriole3D(cx + 22, cy + 10, Math.PI / 2, '딸子 সেন্ট্রিওল (লম্ব)');

  // Spindle fibers radiating (asters)
  const fiberCount = 16;
  for (let f = 0; f < fiberCount; f++) {
    const fa = (f / fiberCount) * Math.PI * 2 + t * 0.12;
    const fLen = 90 + Math.sin(t + f * 0.5) * 15;
    glow(ctx, '#6366f1', 6);
    ctx.beginPath(); ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(fa) * fLen, cy + Math.sin(fa) * (fLen * 0.6));
    ctx.strokeStyle = `rgba(99,102,241,${0.3 + Math.sin(t + f) * 0.2})`; ctx.lineWidth = 1.5; ctx.stroke(); noGlow(ctx);
  }

  // Chromosome attached to spindle
  for (let ch = 0; ch < 3; ch++) {
    const ca = (ch / 3) * Math.PI * 2 + t * 0.1;
    const chx = cx + Math.cos(ca) * 130; const chy = cy + Math.sin(ca) * 90;
    glow(ctx, '#ec4899', 10);
    ctx.beginPath(); ctx.ellipse(chx, chy, 18, 10, ca, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(236,72,153,0.3)'; ctx.fill();
    ctx.strokeStyle = '#ec4899'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
    // Kinetochore at center
    drawSphere(ctx, chx, chy, 5, '#f9a8d4', '#fce7f3');
    // Fiber to centrosome
    glow(ctx, '#6366f1', 5);
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(chx, chy);
    ctx.strokeStyle = '#818cf888'; ctx.lineWidth = 1.5; ctx.stroke(); noGlow(ctx);
  }

  label(ctx, 'সেন্ট্রোসোম (প্রাণিকোষ)', cx, cy + 165, '#fbbf24', 12, true);
  label(ctx, '৯ ত্রয়ী মাইক্রোটিউবিউল (৯+০)', cx, cy + 182, '#fde68a', 9);
  label(ctx, 'অ্যাস্টার তন্তু', cx + 100, cy - 70, '#818cf8', 9, true);
}

// 2.2.11 – Vacuole
function draw2211(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = '#060d18'; ctx.fillRect(0, 0, w, h);

  // Plant cell large vacuole (left)
  ctx.save(); ctx.translate(w * 0.3, h * 0.5);
  // Tonoplast glow
  glow(ctx, '#0ea5e9', 20);
  ctx.beginPath(); ctx.arc(0, 0, 105, 0, Math.PI * 2);
  const tono = ctx.createRadialGradient(-30, -30, 5, 0, 0, 105);
  tono.addColorStop(0, 'rgba(186,230,253,0.35)'); tono.addColorStop(0.6, 'rgba(14,165,233,0.2)'); tono.addColorStop(1, 'rgba(7,89,133,0.15)');
  ctx.fillStyle = tono; ctx.fill();
  ctx.strokeStyle = '#0ea5e9'; ctx.lineWidth = 4; ctx.stroke(); noGlow(ctx);

  // Inner tonoplast
  glow(ctx, '#38bdf8', 10);
  ctx.beginPath(); ctx.arc(0, 0, 92, 0, Math.PI * 2);
  ctx.strokeStyle = '#38bdf888'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);

  // Water molecules orbiting
  for (let wm = 0; wm < 10; wm++) {
    const wa = (wm / 10) * Math.PI * 2 + t * 0.6;
    const wr = 55 + Math.sin(t + wm) * 12;
    const wx = Math.cos(wa) * wr; const wy = Math.sin(wa) * wr;
    drawParticle(ctx, wx, wy, 9, '#38bdf8', 'H₂O');
  }

  // Dissolved minerals
  const minerals = ['K⁺', 'Na⁺', 'Ca²⁺', 'Cl⁻'];
  for (let m = 0; m < 4; m++) {
    const ma = (m / 4) * Math.PI * 2 + t * 0.3 + 0.5;
    drawParticle(ctx, Math.cos(ma) * 35, Math.sin(ma) * 35, 8, '#fbbf24', minerals[m]);
  }

  // Anthocyanin (pigment)
  ctx.beginPath(); ctx.arc(-10, 15, 18, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(192,38,211,0.25)'; ctx.fill();
  ctx.strokeStyle = '#d946ef'; ctx.lineWidth = 1.5; ctx.stroke();
  label(ctx, 'অ্যান্থোসায়ানিন', -10, 38, '#e879f9', 8);

  label(ctx, 'টোনোপ্লাস্ট', 0, -115, '#0ea5e9', 10, true);
  label(ctx, 'কেন্দ্রীয় গহ্বর', 0, 120, '#38bdf8', 11, true);
  label(ctx, '(কোষের ৮০% স্থান)', 0, 135, '#7dd3fc', 9);
  ctx.restore();

  // Animal cell multiple vacuoles (right)
  ctx.save(); ctx.translate(w * 0.73, h * 0.5);
  // Cell outline
  glow(ctx, '#a855f7', 12);
  ctx.beginPath(); ctx.ellipse(0, 0, 100, 90, 0, 0, Math.PI * 2);
  ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 2.5; ctx.stroke(); noGlow(ctx);
  ctx.beginPath(); ctx.ellipse(0, 0, 100, 90, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(139,92,246,0.06)'; ctx.fill();

  // Small vacuoles scattered
  const vacs = [[-30, -25, 18], [28, -35, 14], [-40, 30, 16], [35, 28, 12], [0, 5, 20], [55, -10, 10]];
  vacs.forEach(([vx, vy, vr], vi) => {
    const pulse = vr + Math.sin(t * 0.8 + vi) * 2;
    glow(ctx, '#6366f1', 8 + Math.sin(t + vi) * 4);
    const vGrad = ctx.createRadialGradient(vx - pulse * 0.3, vy - pulse * 0.3, 2, vx, vy, pulse);
    vGrad.addColorStop(0, 'rgba(199,210,254,0.5)'); vGrad.addColorStop(1, 'rgba(99,102,241,0.2)');
    ctx.beginPath(); ctx.arc(vx, vy, pulse, 0, Math.PI * 2);
    ctx.fillStyle = vGrad; ctx.fill();
    ctx.strokeStyle = '#818cf8'; ctx.lineWidth = 1.5; ctx.stroke(); noGlow(ctx);
  });

  // Nucleus
  glow(ctx, '#ec4899', 8);
  ctx.beginPath(); ctx.arc(0, 0, 22, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(236,72,153,0.3)'; ctx.fill();
  ctx.strokeStyle = '#ec4899'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);

  label(ctx, 'প্রাণিকোষের', 0, 108, '#818cf8', 10, true);
  label(ctx, 'ক্ষুদ্র গহ্বরসমূহ', 0, 122, '#818cf8', 9);
  ctx.restore();
}

// 2.3 – Comparison (side-by-side animated)
function draw23(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = '#060d18'; ctx.fillRect(0, 0, w, h);

  // Plant cell
  ctx.save(); ctx.translate(w * 0.25, h * 0.5);
  // Cell wall
  glow(ctx, '#22c55e', 15);
  ctx.beginPath(); ctx.rect(-82, -102, 164, 204);
  ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 6; ctx.stroke(); noGlow(ctx);
  ctx.fillStyle = 'rgba(34,197,94,0.07)'; ctx.fill();
  // Membrane
  glow(ctx, '#4ade80', 6);
  ctx.beginPath(); ctx.rect(-70, -90, 140, 180);
  ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
  // Vacuole
  glow(ctx, '#38bdf8', 8);
  ctx.beginPath(); ctx.ellipse(-22, 8, 35, 58, 0, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(56,189,248,0.18)'; ctx.fill(); ctx.strokeStyle = '#38bdf8'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
  // Nucleus
  glow(ctx, '#a855f7', 10);
  ctx.beginPath(); ctx.arc(28, 0, 32, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(139,92,246,0.35)'; ctx.fill(); ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
  drawSphere(ctx, 28, 0, 12, '#ec4899', '#fce7f3');
  // Chloroplasts
  [[-55, -65], [55, -55], [-55, 60]].forEach(([px, py]) => {
    glow(ctx, '#06b6d4', 8);
    ctx.beginPath(); ctx.ellipse(px, py, 18, 9, 0, 0, Math.PI * 2);
    const cpg = ctx.createRadialGradient(px - 6, py - 3, 1, px, py, 18);
    cpg.addColorStop(0, '#6ee7b7'); cpg.addColorStop(1, '#059669');
    ctx.fillStyle = cpg; ctx.fill(); ctx.strokeStyle = '#34d399'; ctx.lineWidth = 1.5; ctx.stroke(); noGlow(ctx);
  });
  label(ctx, '✓ কোষ প্রাচীর', -60, 115, '#22c55e', 9, true);
  label(ctx, '✓ ক্লোরোপ্লাস্ট', -60, 128, '#06b6d4', 9, true);
  label(ctx, '✓ বড় গহ্বর', -60, 141, '#38bdf8', 9, true);
  label(ctx, '✗ সেন্ট্রোসোম', 22, 115, '#ef4444', 9, true);
  label(ctx, 'উদ্ভিদকোষ', 0, -118, '#4ade80', 13, true);
  ctx.restore();

  // Divider
  ctx.beginPath(); ctx.moveTo(w / 2, 25); ctx.lineTo(w / 2, h - 25);
  ctx.setLineDash([6, 6]); ctx.strokeStyle = '#334155'; ctx.lineWidth = 1.5; ctx.stroke(); ctx.setLineDash([]);

  // Animal cell
  ctx.save(); ctx.translate(w * 0.75, h * 0.5);
  glow(ctx, '#f43f5e', 14);
  ctx.beginPath(); ctx.ellipse(0, 0, 95, 95, t * 0.03, 0, Math.PI * 2);
  ctx.strokeStyle = '#f43f5e'; ctx.lineWidth = 3; ctx.stroke(); noGlow(ctx);
  ctx.fillStyle = 'rgba(244,63,94,0.07)'; ctx.fill();
  // Nucleus
  glow(ctx, '#a855f7', 10);
  ctx.beginPath(); ctx.arc(-5, 0, 30, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(139,92,246,0.35)'; ctx.fill(); ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
  drawSphere(ctx, -5, 0, 11, '#ec4899', '#fce7f3');
  // Centrosome
  glow(ctx, '#fbbf24', 12);
  drawSphere(ctx, 55, -55, 10, '#f59e0b', '#fef3c7');
  for (let r = 0; r < 3; r++) {
    const ra = r * 2.1 + t * 2;
    ctx.beginPath(); ctx.moveTo(55, -55); ctx.lineTo(55 + Math.cos(ra) * 10, -55 + Math.sin(ra) * 10);
    ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 2; ctx.stroke();
  }
  // Mitochondria
  [[-60, -50], [55, 30], [-50, 60]].forEach(([mx, my]) => {
    glow(ctx, '#f59e0b', 8);
    ctx.beginPath(); ctx.ellipse(mx, my, 20, 10, -0.4, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(245,158,11,0.35)'; ctx.fill(); ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 1.5; ctx.stroke(); noGlow(ctx);
  });
  // Small vacuoles
  [[30, -50], [-40, 40], [60, -15]].forEach(([vx, vy]) => {
    ctx.beginPath(); ctx.arc(vx, vy, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(99,102,241,0.25)'; ctx.fill(); ctx.strokeStyle = '#818cf8'; ctx.lineWidth = 1; ctx.stroke();
  });
  label(ctx, '✗ কোষ প্রাচীর', -52, 115, '#ef4444', 9, true);
  label(ctx, '✗ ক্লোরোপ্লাস্ট', -52, 128, '#ef4444', 9, true);
  label(ctx, '✓ সেন্ট্রোসোম', 8, 115, '#fbbf24', 9, true);
  label(ctx, '✓ ছোট গহ্বর', 8, 128, '#818cf8', 9, true);
  label(ctx, 'প্রাণিকোষ', 0, -112, '#f87171', 13, true);
  ctx.restore();
}

// 2.4.1 – Plant tissue
function draw241(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = '#060d18'; ctx.fillRect(0, 0, w, h);

  // Parenchyma (top left)
  ctx.save(); ctx.translate(35, 38);
  label(ctx, 'প্যারেনকাইমা', 52, -5, '#22c55e', 10, true);
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
    const px = c * 37 + 18; const py = r * 37 + 18;
    glow(ctx, '#22c55e', 8);
    ctx.beginPath(); ctx.arc(px, py, 16, 0, Math.PI * 2);
    const pg = ctx.createRadialGradient(px - 5, py - 5, 2, px, py, 16);
    pg.addColorStop(0, 'rgba(134,239,172,0.5)'); pg.addColorStop(1, 'rgba(21,128,61,0.3)');
    ctx.fillStyle = pg; ctx.fill(); ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
    drawSphere(ctx, px, py, 6, '#a855f7', '#ede9fe');
  }
  label(ctx, '→ খাদ্য সঞ্চয়', 52, 122, '#86efac', 8);
  ctx.restore();

  // Collenchyma (top right)
  ctx.save(); ctx.translate(w / 2 + 12, 38);
  label(ctx, 'কোলেনকাইমা', 55, -5, '#f59e0b', 10, true);
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
    const px = c * 37; const py = r * 37;
    glow(ctx, '#f59e0b', 6);
    ctx.beginPath(); ctx.rect(px + 3, py + 3, 32, 32);
    ctx.fillStyle = 'rgba(251,191,36,0.15)'; ctx.fill(); ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 6; ctx.stroke(); noGlow(ctx);
    // Thickened corners
    [[px + 3, py + 3], [px + 35, py + 3], [px + 3, py + 35], [px + 35, py + 35]].forEach(([cx2, cy2]) => {
      glow(ctx, '#fbbf24', 8); ctx.beginPath(); ctx.arc(cx2, cy2, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#fbbf24'; ctx.fill(); noGlow(ctx);
    });
    drawSphere(ctx, px + 19, py + 19, 6, '#a855f7', '#ede9fe');
  }
  label(ctx, '→ নমনীয় সহায়তা', 55, 122, '#fde68a', 8);
  ctx.restore();

  // Sclerenchyma (bottom left)
  ctx.save(); ctx.translate(35, h / 2 + 18);
  label(ctx, 'স্ক্লেরেনকাইমা', 52, -5, '#94a3b8', 10, true);
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
    const px = c * 37; const py = r * 37;
    glow(ctx, '#64748b', 5);
    ctx.beginPath(); ctx.rect(px + 2, py + 2, 33, 33);
    ctx.fillStyle = 'rgba(100,116,139,0.25)'; ctx.fill(); ctx.strokeStyle = '#64748b'; ctx.lineWidth = 8; ctx.stroke(); noGlow(ctx);
    // Dead cell (empty center)
    ctx.beginPath(); ctx.arc(px + 19, py + 19, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#0f172a'; ctx.fill(); ctx.strokeStyle = '#475569'; ctx.lineWidth = 1; ctx.stroke();
  }
  label(ctx, '→ শক্ত সহায়তা', 52, 122, '#94a3b8', 8);
  ctx.restore();

  // Xylem & Phloem (bottom right)
  ctx.save(); ctx.translate(w / 2 + 12, h / 2 + 18);
  label(ctx, 'জাইলেম ও ফ্লোয়েম', 60, -5, '#38bdf8', 10, true);
  // Xylem vessels (left)
  for (let i = 0; i < 2; i++) {
    const vx = i * 42;
    glow(ctx, '#ef4444', 8);
    ctx.beginPath(); ctx.rect(vx + 5, 5, 30, 108);
    ctx.fillStyle = 'rgba(239,68,68,0.12)'; ctx.fill(); ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 2.5; ctx.stroke(); noGlow(ctx);
    // Pits
    for (let p = 0; p < 3; p++) {
      ctx.beginPath(); ctx.arc(vx + 20, 30 + p * 35, 8, 0, Math.PI * 2);
      ctx.strokeStyle = '#fca5a5'; ctx.lineWidth = 1.5; ctx.stroke();
    }
    // Water flow
    const fy = ((t * 40 + i * 25) % 95) + 10;
    drawParticle(ctx, vx + 20, fy, 6, '#38bdf8', 'H₂O');
    label(ctx, 'জাইলেম', vx + 20, 122, '#ef4444', 8, true);
  }
  // Phloem sieve tubes (right)
  for (let i = 0; i < 2; i++) {
    const vx = 90 + i * 38;
    glow(ctx, '#4ade80', 8);
    ctx.beginPath(); ctx.rect(vx + 5, 5, 28, 108);
    ctx.fillStyle = 'rgba(74,222,128,0.12)'; ctx.fill(); ctx.strokeStyle = '#4ade80'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
    // Sieve plates
    for (let p = 0; p < 4; p++) {
      ctx.beginPath(); ctx.moveTo(vx + 5, 30 + p * 26); ctx.lineTo(vx + 33, 30 + p * 26);
      ctx.strokeStyle = '#22c55e'; ctx.lineWidth = 3; ctx.stroke();
      // Sieve pores
      for (let d = 0; d < 3; d++) {
        ctx.beginPath(); ctx.arc(vx + 12 + d * 8, 30 + p * 26, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#86efac'; ctx.fill();
      }
    }
    const sy = 108 - ((t * 35 + i * 20) % 90);
    drawParticle(ctx, vx + 19, sy, 6, '#4ade80', '');
    label(ctx, 'ফ্লোয়েম', vx + 19, 122, '#4ade80', 8, true);
  }
  ctx.restore();
}

// 2.4.2 – Animal tissue
function draw242(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = '#060d18'; ctx.fillRect(0, 0, w, h);

  // Epithelial (top left)
  ctx.save(); ctx.translate(22, 30);
  label(ctx, 'আবরণী টিস্যু', 65, -5, '#6366f1', 10, true);
  // Basement membrane
  ctx.beginPath(); ctx.rect(0, 68, 132, 6);
  ctx.fillStyle = '#312e81'; ctx.fill();
  ctx.strokeStyle = '#818cf8'; ctx.lineWidth = 1; ctx.stroke();
  label(ctx, 'বেসমেন্ট মেমব্রেন', 65, 90, '#818cf899', 8);
  for (let c = 0; c < 5; c++) {
    glow(ctx, '#6366f1', 8);
    ctx.beginPath(); ctx.rect(c * 27, 5, 25, 63);
    const ecg = ctx.createLinearGradient(c * 27, 5, c * 27, 68);
    ecg.addColorStop(0, 'rgba(199,210,254,0.3)'); ecg.addColorStop(1, 'rgba(67,56,202,0.2)');
    ctx.fillStyle = ecg; ctx.fill(); ctx.strokeStyle = '#818cf8'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
    // Nucleus
    glow(ctx, '#a855f7', 6); drawSphere(ctx, c * 27 + 12, 38, 9, '#7c3aed', '#ede9fe'); noGlow(ctx);
  }
  ctx.restore();

  // Muscle tissue (top right)
  ctx.save(); ctx.translate(w / 2 + 8, 30);
  label(ctx, 'পেশি টিস্যু', 65, -5, '#ef4444', 10, true);
  for (let r = 0; r < 5; r++) {
    const baseY = 10 + r * 20;
    // Muscle fiber bands
    ctx.beginPath();
    for (let x = 0; x <= 130; x += 2) {
      const y = baseY + Math.sin((x / 15) + t * 1.5 + r * 0.5) * 4;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    const mg = ctx.createLinearGradient(0, baseY - 8, 0, baseY + 8);
    mg.addColorStop(0, '#fca5a5'); mg.addColorStop(0.5, '#ef4444'); mg.addColorStop(1, '#fca5a5');
    glow(ctx, '#ef4444', 6); ctx.strokeStyle = `rgba(239,68,68,${0.5 + r * 0.1})`; ctx.lineWidth = 8; ctx.stroke(); noGlow(ctx);
    // Striations
    for (let sx = 5; sx < 130; sx += 15) {
      ctx.beginPath(); ctx.moveTo(sx, baseY - 8); ctx.lineTo(sx, baseY + 8);
      ctx.strokeStyle = '#fca5a555'; ctx.lineWidth = 1; ctx.stroke();
    }
    // Nuclei
    for (let nx = 20; nx < 130; nx += 50) {
      drawSphere(ctx, nx, baseY, 4, '#991b1b', '#fecaca');
    }
  }
  // Actin-myosin labels
  label(ctx, 'মায়োসিন', 30, 112, '#fca5a5', 8, true);
  label(ctx, 'অ্যাক্টিন', 100, 112, '#ef4444', 8, true);
  ctx.restore();

  // Connective tissue (bottom left)
  ctx.save(); ctx.translate(22, h / 2 + 10);
  label(ctx, 'যোজক টিস্যু', 65, -5, '#f59e0b', 10, true);
  // Ground substance
  ctx.beginPath(); ctx.rect(0, 0, 132, 112);
  ctx.fillStyle = 'rgba(251,191,36,0.07)'; ctx.fill();
  ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 1.5; ctx.stroke();
  // Collagen fibers
  for (let f = 0; f < 10; f++) {
    const fy = 8 + f * 10; const fx = Math.sin(t * 0.3 + f * 0.8) * 5;
    ctx.beginPath(); ctx.moveTo(5 + fx, fy); ctx.bezierCurveTo(40 + fx, fy + 5, 85 + fx, fy - 5, 128 + fx, fy);
    glow(ctx, '#fbbf24', 4); ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
  }
  // Fibroblast cells
  for (let fb = 0; fb < 4; fb++) {
    const fx = 20 + fb * 30; const fy = 50 + Math.sin(t + fb) * 15;
    glow(ctx, '#ef4444', 8);
    ctx.beginPath(); ctx.ellipse(fx, fy, 14, 8, fb * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(239,68,68,0.3)'; ctx.fill(); ctx.strokeStyle = '#ef4444'; ctx.lineWidth = 1.5; ctx.stroke(); noGlow(ctx);
    drawSphere(ctx, fx, fy, 5, '#dc2626', '#fecaca');
  }
  label(ctx, 'কোলাজেন তন্তু', 65, 122, '#fbbf24', 8);
  ctx.restore();

  // Nervous tissue (bottom right)
  ctx.save(); ctx.translate(w / 2 + 8, h / 2 + 10);
  label(ctx, 'স্নায়ু টিস্যু', 65, -5, '#22d3ee', 10, true);
  // Neuron cell body
  glow(ctx, '#22d3ee', 14);
  const ncg = ctx.createRadialGradient(25, 50, 5, 25, 50, 25);
  ncg.addColorStop(0, 'rgba(103,232,249,0.5)'); ncg.addColorStop(1, 'rgba(8,145,178,0.25)');
  ctx.beginPath(); ctx.arc(25, 50, 25, 0, Math.PI * 2);
  ctx.fillStyle = ncg; ctx.fill(); ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 2.5; ctx.stroke(); noGlow(ctx);
  drawSphere(ctx, 25, 50, 10, '#0284c7', '#e0f2fe');
  // Dendrites
  const dends = [[8, 27], [4, 38], [8, 62], [14, 72], [35, 25]];
  dends.forEach(([dx, dy]) => {
    ctx.beginPath(); ctx.moveTo(25, 50); ctx.lineTo(dx, dy);
    glow(ctx, '#67e8f9', 6); ctx.strokeStyle = '#67e8f9'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
    // Synaptic knobs
    ctx.beginPath(); ctx.arc(dx, dy, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#a5f3fc'; ctx.fill();
  });
  // Axon with myelin
  const axonLen = 105;
  glow(ctx, '#22d3ee', 8);
  ctx.beginPath(); ctx.moveTo(50, 50); ctx.lineTo(50 + axonLen, 50);
  ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 5; ctx.stroke(); noGlow(ctx);
  // Myelin sheaths
  for (let ms = 0; ms < 4; ms++) {
    const mx = 55 + ms * 25;
    ctx.beginPath(); ctx.ellipse(mx + 10, 50, 10, 9, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(251,191,36,0.4)'; ctx.fill();
    ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 1.5; ctx.stroke();
  }
  // Node of Ranvier
  for (let nr = 0; nr < 3; nr++) {
    ctx.beginPath(); ctx.arc(78 + nr * 25, 50, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#ef4444'; ctx.fill();
  }
  // Action potential pulse
  const pulse = ((t * 0.8) % 1);
  const pulseX = 50 + pulse * axonLen;
  glow(ctx, '#fbbf24', 18); drawParticle(ctx, pulseX, 50, 7, '#fbbf24', '⚡'); noGlow(ctx);
  // Synapse at end
  glow(ctx, '#f472b6', 10);
  ctx.beginPath(); ctx.arc(50 + axonLen, 50, 10, 0, Math.PI * 2);
  ctx.strokeStyle = '#f472b6'; ctx.lineWidth = 2; ctx.stroke(); noGlow(ctx);
  label(ctx, 'ডেনড্রাইট', 15, 110, '#67e8f9', 8, true);
  label(ctx, 'অ্যাক্সন', 80, 110, '#22d3ee', 8, true);
  label(ctx, 'মায়েলিন', 80, 122, '#fbbf24', 8);
  label(ctx, 'সিন্যাপস', 148, 110, '#f472b6', 8, true);
  ctx.restore();
}

// 2.5 – Organ system hierarchy
function draw25(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.fillStyle = '#060d18'; ctx.fillRect(0, 0, w, h);
  const cx = w / 2;

  const levels = [
    { y: 35, label: 'কোষ (Cell)', sub: 'জীবনের মৌলিক একক', color: '#22c55e', w: 180, ex: [{ x: -50, y: 0, r: 12, c: '#22c55e' }, { x: 0, y: 0, r: 12, c: '#06b6d4' }, { x: 50, y: 0, r: 12, c: '#a855f7' }] },
    { y: 115, label: 'টিস্যু (Tissue)', sub: 'একই কোষের সমষ্টি', color: '#06b6d4', w: 220, ex: [] },
    { y: 200, label: 'অঙ্গ (Organ)', sub: 'বিভিন্ন টিস্যুর সমন্বয়', color: '#a855f7', w: 265, ex: [] },
    { y: 285, label: 'অঙ্গতন্ত্র (Organ System)', sub: 'একাধিক অঙ্গের কার্যকরী দল', color: '#f59e0b', w: 315, ex: [] },
    { y: 370, label: 'জীব (Organism)', sub: 'সম্পূর্ণ জীবসত্তা', color: '#ef4444', w: 360, ex: [] },
  ];

  levels.forEach((lv, i) => {
    // Connector
    if (i > 0) {
      const prev = levels[i - 1];
      glow(ctx, lv.color, 8);
      ctx.beginPath(); ctx.moveTo(cx, prev.y + 26); ctx.lineTo(cx, lv.y - 18);
      ctx.strokeStyle = lv.color + '88'; ctx.lineWidth = 2; ctx.setLineDash([4, 4]); ctx.stroke();
      ctx.setLineDash([]); noGlow(ctx);
      // Arrow
      ctx.beginPath(); ctx.moveTo(cx - 7, lv.y - 22); ctx.lineTo(cx, lv.y - 14); ctx.lineTo(cx + 7, lv.y - 22);
      ctx.strokeStyle = lv.color; ctx.lineWidth = 2; ctx.stroke();
    }

    const pulse = 1 + Math.sin(t * 1.2 + i * 0.7) * 0.03;
    const rw = lv.w * pulse / 2;

    glow(ctx, lv.color, 15 + Math.sin(t + i) * 5);
    ctx.beginPath(); ctx.ellipse(cx, lv.y, rw, 22, 0, 0, Math.PI * 2);
    const lvg = ctx.createRadialGradient(cx - rw * 0.3, lv.y - 8, 3, cx, lv.y, rw);
    lvg.addColorStop(0, lv.color + '44'); lvg.addColorStop(1, lv.color + '11');
    ctx.fillStyle = lvg; ctx.fill();
    ctx.strokeStyle = lv.color; ctx.lineWidth = 2.5; ctx.stroke(); noGlow(ctx);

    // Inner cells/icons for first level
    if (i === 0) {
      lv.ex.forEach(({ x, c, r }) => {
        drawSphere(ctx, cx + x, lv.y, r, c, '#ffffff');
      });
    }

    label(ctx, lv.label, cx, lv.y + 5, lv.color, 11, true);
    label(ctx, lv.sub, cx + rw + 15, lv.y + 5, lv.color + '88', 9);
  });

  // Side examples
  label(ctx, '예) হৃদয়, ফুসফুস, মস্তিষ্ক', cx + 175, 205, '#a855f788', 8);
  label(ctx, '예) পরিসঞ্চালন, শ্বাস, স্নায়ু তন্ত্র', cx + 185, 290, '#f59e0b88', 8);
}

// ═══════════════════════════════════════════════════════════════════════════════
// SECTION DATA
// ═══════════════════════════════════════════════════════════════════════════════
type DrawFn = (ctx: CanvasRenderingContext2D, w: number, h: number, t: number) => void;
interface SectionContent { title: string; subtitle: string; description: string; details: string[]; color: string; diagramLabel: string; drawFn: DrawFn; }

const sections: Record<string, SectionContent> = {
  '2.1': { title: '২.১ জীবকোষ', subtitle: 'কোষের ধারণা ও প্রকারভেদ', color: '#22c55e', diagramLabel: 'প্রোক্যারিওটিক বনাম ইউক্যারিওটিক কোষ', drawFn: draw21,
    description: 'রবার্ট হুক ১৬৬৫ সালে কর্ক কোষ আবিষ্কার করেন। কোষ হলো জীবনের গঠন ও কার্যকরী একক। সকল জীব এক বা একাধিক কোষ দিয়ে তৈরি।',
    details: ['🔬 রবার্ট হুক (১৬৬৫) কর্ক কোষ আবিষ্কার করেন','🔬 শ্লাইডেন ও সোয়ান (১৮৩৮-৩৯) কোষতত্ত্ব প্রতিষ্ঠা','📐 প্রোক্যারিওটিক: ঝিল্লিবদ্ধ নিউক্লিয়াস নেই (ব্যাকটেরিয়া)','📐 ইউক্যারিওটিক: সুগঠিত নিউক্লিয়াস আছে (উদ্ভিদ, প্রাণি)','📏 কোষের আকার: ১০–১০০ মাইক্রোমিটার','🌱 উদ্ভিদকোষ: কোষ প্রাচীর, ক্লোরোপ্লাস্ট, বড় গহ্বর','🐾 প্রাণিকোষ: সেন্ট্রোসোম আছে, কোষ প্রাচীর নেই'] },

  '2.2': { title: '২.২ কোষের প্রধান অঙ্গাণু', subtitle: 'সামগ্রিক কোষ গঠন', color: '#06b6d4', diagramLabel: 'উদ্ভিদ ও প্রাণিকোষ তুলনা', drawFn: draw23,
    description: 'কোষের ভেতরে বিভিন্ন অঙ্গাণু নির্দিষ্ট কার্য সম্পাদন করে। বাম দিকে উদ্ভিদকোষ ও ডান দিকে প্রাণিকোষ দেখানো হয়েছে।',
    details: ['🔵 কোষঝিল্লি — সকল কোষে আছে','🟢 কোষ প্রাচীর — শুধু উদ্ভিদে','🟣 নিউক্লিয়াস — নিয়ন্ত্রণ কেন্দ্র','🟡 মাইটোকন্ড্রিয়া — ATP উৎপাদন','🔵 ক্লোরোপ্লাস্ট — সালোকসংশ্লেষণ','⚙️ সেন্ট্রোসোম — শুধু প্রাণিকোষে','💧 গহ্বর — উদ্ভিদে বড়, প্রাণিতে ছোট'] },

  '2.2.1': { title: '২.২.১ কোষ ঝিল্লি', subtitle: 'ফ্লুইড মোজাইক মডেল', color: '#38bdf8', diagramLabel: 'ফসফোলিপিড বাইলেয়ার — লাইভ মডেল', drawFn: draw221,
    description: 'কোষঝিল্লি ফসফোলিপিডের দ্বিস্তর দিয়ে গঠিত এবং বিভিন্ন প্রোটিন প্রবেশস্থ থাকে। এটি আধা-ভেদ্য (Selectively Permeable)।',
    details: ['📐 ফসফোলিপিড দ্বিস্তর (Phospholipid Bilayer)','🧪 হাইড্রোফিলিক মাথা বাইরে, হাইড্রোফোবিক লেজ ভেতরে','🔴 চ্যানেল প্রোটিন — নির্দিষ্ট আয়ন চলাচল করে','🟡 কোলেস্টেরল — ঝিল্লির তরলতা নিয়ন্ত্রণ করে','🚪 আধা-ভেদ্য — O₂, CO₂, H₂O ভেদ করতে পারে','⚡ সক্রিয় পরিবহন — ATP ব্যবহার করে আয়ন পরিবহন','📊 ফ্লুইড মোজাইক মডেল — সিঙ্গার ও নিকলসন (১৯৭২)'] },

  '2.2.2': { title: '২.২.২ কোষ প্রাচীর', subtitle: 'উদ্ভিদকোষের সুরক্ষা আবরণ', color: '#4ade80', diagramLabel: 'তিন স্তরের কোষ প্রাচীর ও প্লাজমোডেজমাটা', drawFn: draw222,
    description: 'কোষ প্রাচীর উদ্ভিদকোষের কোষঝিল্লির বাইরে থাকে। এটি সেলুলোজ, পেকটিন ও লিগনিন দিয়ে তৈরি। তিনটি স্তর থাকে।',
    details: ['🌿 মধ্যবর্তী পর্দা: পেকটিন — কোষ পরস্পর জোড়া লাগায়','📏 প্রাথমিক প্রাচীর: সেলুলোজ — পাতলা ও নমনীয়','📏 দ্বিতীয় প্রাচীর: লিগনিন — পুরু ও শক্ত','🕳️ প্লাজমোডেজমাটা: কোষের মধ্যে সংযোগ চ্যানেল','💪 কাজ: আকৃতি, সুরক্ষা, টার্গর চাপ নিয়ন্ত্রণ','🚫 প্রাণিকোষে কোষ প্রাচীর নেই','🔬 সেলুলোজ মাইক্রোফাইব্রিল জালের মতো বিন্যস্ত'] },

  '2.2.3': { title: '২.২.৩ নিউক্লিয়াস', subtitle: 'কোষের নিয়ন্ত্রণ ও বংশগতির কেন্দ্র', color: '#a855f7', diagramLabel: 'নিউক্লিয়াসের সূক্ষ্ম গঠন ও রন্ধ্র', drawFn: draw223,
    description: 'নিউক্লিয়াস কোষের সকল কার্যক্রম নিয়ন্ত্রণ করে। এটি DNA ধারণ করে এবং দ্বৈত ঝিল্লি দ্বারা আবৃত।',
    details: ['🔵 নিউক্লিয়ার আবরণী — দ্বিস্তরীয়, ছিদ্রযুক্ত','🕳️ নিউক্লিয়ার রন্ধ্র — mRNA ও প্রোটিন চলাচলের পথ','🧬 ক্রোমাটিন — DNA + হিস্টোন প্রোটিন সংকুচিত','🔴 নিউক্লিওলাস — rRNA তৈরির কারখানা','💧 নিউক্লিওপ্লাজম — তরল অভ্যন্তর, এনজাইম সমৃদ্ধ','📋 মানবকোষে ২৩ জোড়া = ৪৬ ক্রোমোজোম','⚡ নিউক্লিয়াস ছাড়া কোষ বিভাজন অসম্ভব'] },

  '2.2.4': { title: '২.২.৪ মাইটোকন্ড্রিয়া', subtitle: 'কোষের পাওয়ার হাউস', color: '#f59e0b', diagramLabel: 'ক্রিস্টি, ATP সিন্থেজ ও শ্বসন প্রক্রিয়া', drawFn: draw224,
    description: 'মাইটোকন্ড্রিয়া অ্যারোবিক শ্বসনে ATP উৎপাদন করে। এটি দ্বৈত আবরণী বিশিষ্ট এবং নিজস্ব DNA ধারণ করে।',
    details: ['⚡ একটি গ্লুকোজ থেকে ৩৮ ATP উৎপন্ন হয়','📐 ক্রিস্টি — অন্তঃঝিল্লির ভাঁজ, পৃষ্ঠতল বাড়ায়','⚙️ ATP সিন্থেজ — ক্রিস্টিতে থাকা ঘূর্ণমান এনজাইম','💧 ম্যাট্রিক্স — ক্রেবস চক্র ও বিটা অক্সিডেশন','🧬 নিজস্ব DNA ও 70S রাইবোসোম আছে','🔢 প্রতি কোষে ১,০০০–২,০০০টি মাইটোকন্ড্রিয়া','🌱 মাইটোকন্ড্রিয়া ব্যাকটেরিয়া থেকে বিবর্তিত (এন্ডোসিম্বায়োটিক তত্ত্ব)'] },

  '2.2.5': { title: '২.২.৫ প্লাস্টিড', subtitle: 'ক্লোরোপ্লাস্ট ও সালোকসংশ্লেষণ', color: '#06b6d4', diagramLabel: 'গ্রানাম, স্ট্রোমা ও আলো প্রতিক্রিয়া', drawFn: draw225,
    description: 'ক্লোরোপ্লাস্ট সূর্যের আলো ব্যবহার করে CO₂ ও H₂O থেকে গ্লুকোজ তৈরি করে। এটি শুধু উদ্ভিদকোষে থাকে।',
    details: ['🌿 ক্লোরোফিল a ও b — আলো শোষণকারী রঞ্জক','🥞 গ্রানাম — থাইলাকয়েডের স্তুপ (আলো বিক্রিয়া)','💧 স্ট্রোমা — CO₂ স্থিরীকরণ (ক্যালভিন চক্র)','🌞 সূত্র: 6CO₂+6H₂O → C₆H₁₂O₆+6O₂','🔴 ক্রোমোপ্লাস্ট — ফুল ও ফলের রঙ','⚪ লিউকোপ্লাস্ট — শ্বেতসার সঞ্চয়','🧬 নিজস্ব DNA ও 70S রাইবোসোম'] },

  '2.2.6': { title: '২.২.৬ এন্ডোপ্লাজমিক রেটিকুলাম', subtitle: 'কোষের পরিবহন নেটওয়ার্ক', color: '#6366f1', diagramLabel: 'রাফ ER (রাইবোসোম সহ) ও স্মুথ ER', drawFn: draw226,
    description: 'ER হলো ঝিল্লির জালিকা সিস্টেম। রাফ ER প্রোটিন তৈরি করে এবং স্মুথ ER লিপিড সংশ্লেষণ করে।',
    details: ['🔴 রাফ ER — রাইবোসোম যুক্ত, স্রাবী প্রোটিন তৈরি','🔵 স্মুথ ER — লিপিড ও স্টেরয়েড সংশ্লেষণ','🚛 নিউক্লিয়াস থেকে গলজি বস্তু পর্যন্ত পথ','🧪 ডিটক্সিফিকেশন — লিভার কোষে বিশেষ গুরুত্বপূর্ণ','📦 ভেসিকল তৈরি করে গলজিতে পাঠায়','🔗 নিউক্লিয়ার আবরণীর সাথে সরাসরি সংযুক্ত','⚡ পেশি কোষে: সারকোপ্লাজমিক রেটিকুলাম নামে পরিচিত'] },

  '2.2.7': { title: '২.২.৭ গলজি বস্তু', subtitle: 'প্যাকেজিং ও নিঃসরণ কেন্দ্র', color: '#c084fc', diagramLabel: 'সিসটার্নি স্তুপ ও ভেসিকল পরিবহন', drawFn: draw227,
    description: 'গলজি বস্তু ER থেকে প্রোটিন সংগ্রহ করে, রূপান্তরিত ও প্যাকেজ করে সঠিক গন্তব্যে পাঠায়।',
    details: ['📦 ৪–৮টি চ্যাপ্টা ঝিল্লির স্তুপ (সিসটার্নি)','📥 সিস ফেস — ER থেকে প্রোটিন গ্রহণ','📤 ট্রান্স ফেস — ভেসিকল হিসেবে নিঃসরণ','🏷️ গ্লাইকোসিলেশন — প্রোটিনে শর্করা যোগ','🚚 লাইসোসোম তৈরিতে প্রত্যক্ষ ভূমিকা','💡 ১৮৯৮ সালে কামিল্লো গলজি আবিষ্কার করেন','🔬 ট্রান্স গলজি নেটওয়ার্ক (TGN) — বাছাই কেন্দ্র'] },

  '2.2.8': { title: '২.২.৮ রাইবোসোম', subtitle: 'প্রোটিন সংশ্লেষণের কারখানা', color: '#f87171', diagramLabel: 'পলিসোম — একাধিক রাইবোসোম একসাথে কাজ করছে', drawFn: draw228,
    description: 'রাইবোসোম প্রোটিন সংশ্লেষণের স্থান। mRNA-র ভাষা পড়ে অ্যামিনো এসিড জোড়া লাগিয়ে পলিপেপটাইড তৈরি করে।',
    details: ['⚙️ 60S (বড়) + 40S (ছোট) = 80S (ইউক্যারিওট)','🧬 rRNA ও প্রোটিন দিয়ে তৈরি','📜 mRNA কোডন পড়ে অ্যামিনো এসিড সংযুক্ত করে','🔗 পলিসোম — একই mRNA-তে একাধিক রাইবোসোম','🆓 মুক্ত রাইবোসোম — সাইটোপ্লাজমিক প্রোটিন','📌 ER-বদ্ধ রাইবোসোম — নিঃসৃত প্রোটিন','⚡ প্রতি সেকেন্ডে ১৫-২০ অ্যামিনো এসিড যোগ হয়'] },

  '2.2.9': { title: '২.২.৯ লাইসোসোম', subtitle: 'কোষের পরিপাক ও বর্জ্য নিষ্কাশন', color: '#ef4444', diagramLabel: 'হাইড্রোলাইটিক এনজাইম ও পাচন প্রক্রিয়া', drawFn: draw229,
    description: 'লাইসোসোম অ্যাসিড হাইড্রোলেজ এনজাইম ধারণ করে। পুরনো অঙ্গাণু, ব্যাকটেরিয়া ও খাদ্যকণা ভেঙে ফেলে।',
    details: ['⚗️ ৪০+ ধরনের হাইড্রোলাইটিক এনজাইম','🔢 অভ্যন্তরীণ pH: ৪.৫–৫ (অম্লীয়)','♻️ অটোফেজি — অকার্যকর অঙ্গাণু পুনর্ব্যবহার','🦠 ফেজোলাইসোসোম — ব্যাকটেরিয়া ধ্বংস','💀 অ্যাপোপটোসিস — নিয়ন্ত্রিত কোষমৃত্যুতে ভূমিকা','⚠️ লাইসোসোম ফেটে গেলে কোষ ধ্বংস হয়','🏷️ গলজি বস্তু লাইসোসোম তৈরি করে'] },

  '2.2.10': { title: '২.২.১০ সেন্ট্রোসোম', subtitle: 'কোষ বিভাজনের সংগঠন কেন্দ্র', color: '#fbbf24', diagramLabel: 'সেন্ট্রিওল (৯+০ গঠন) ও স্পিন্ডেল তন্তু', drawFn: draw2210,
    description: 'সেন্ট্রোসোম শুধু প্রাণিকোষে থাকে। একজোড়া সেন্ট্রিওল নিয়ে গঠিত। কোষ বিভাজনে স্পিন্ডেল ও অ্যাস্টার তন্তু তৈরি করে।',
    details: ['🐾 শুধু প্রাণিকোষে পাওয়া যায়','⚙️ দুটি সেন্ট্রিওল পরস্পরের লম্বভাবে অবস্থিত','🔢 ৯টি ত্রয়ী মাইক্রোটিউবিউল (৯+০ গঠন)','🕸️ স্পিন্ডেল তন্তু — ক্রোমোজোম পৃথক করে','🔀 অ্যাস্টার রশ্মি — কোষ বিভাজন নির্দেশনা','🏗️ সিলিয়া ও ফ্ল্যাজেলার বেসাল বডি গঠন করে','🔬 পেরিসেন্ট্রিওলার ম্যাটেরিয়াল — মাইক্রোটিউবিউল নিউক্লিয়েশন'] },

  '2.2.11': { title: '২.২.১১ ভ্যাকুওল', subtitle: 'কোষের সঞ্চয় ও পানি নিয়ন্ত্রণ', color: '#38bdf8', diagramLabel: 'উদ্ভিদ (কেন্দ্রীয় গহ্বর) ও প্রাণিকোষের গহ্বর', drawFn: draw2211,
    description: 'ভ্যাকুওল তরলপূর্ণ ঝিল্লিবেষ্টিত থলি। উদ্ভিদকোষে একটি বড় কেন্দ্রীয় গহ্বর কোষের ৮০% আয়তন নেয়।',
    details: ['🌿 উদ্ভিদকোষ: একটি বড় কেন্দ্রীয় গহ্বর','🐾 প্রাণিকোষ: অনেক ছোট ছোট গহ্বর','💧 টোনোপ্লাস্ট — গহ্বরের আবরণ ঝিল্লি','⚖️ টার্গর চাপ বজায় রাখে — পাতার দৃঢ়তা','🧪 পানি, লবণ, রঞ্জক (অ্যান্থোসায়ানিন) সঞ্চয়','🔵 খাদ্য গহ্বর (প্রাণিতে) — খাদ্য হজম করে','💊 ক্ষতিকর পদার্থ আলাদা রাখে'] },

  '2.3': { title: '২.৩ উদ্ভিদ ও প্রাণিকোষের পার্থক্য', subtitle: 'গঠন ও কার্যের তুলনামূলক চিত্র', color: '#f472b6', diagramLabel: 'উদ্ভিদকোষ (বাম) vs প্রাণিকোষ (ডান) — লাইভ তুলনা', drawFn: draw23,
    description: 'উদ্ভিদকোষ ও প্রাণিকোষ উভয়ই ইউক্যারিওটিক কিন্তু তাদের মধ্যে গুরুত্বপূর্ণ কাঠামোগত পার্থক্য আছে।',
    details: ['🟢 কোষ প্রাচীর: উদ্ভিদ ✓ — প্রাণি ✗','🌿 ক্লোরোপ্লাস্ট: উদ্ভিদ ✓ — প্রাণি ✗','💧 কেন্দ্রীয় গহ্বর: উদ্ভিদে বড় — প্রাণিতে ছোট','⚙️ সেন্ট্রোসোম: উদ্ভিদ ✗ — প্রাণি ✓','🔷 আকৃতি: উদ্ভিদে চৌকোণা — প্রাণিতে গোলাকার','🌞 স্বপোষী: উদ্ভিদ — পরপোষী: প্রাণি','🔢 মাইটোকন্ড্রিয়া: প্রাণিকোষে বেশি'] },

  '2.4': { title: '২.৪ টিস্যু', subtitle: 'উদ্ভিদ ও প্রাণি টিস্যুর ধরন', color: '#a78bfa', diagramLabel: 'উদ্ভিদ টিস্যু — প্যারেনকাইমা, কোলেনকাইমা, স্ক্লেরেনকাইমা, জাইলেম', drawFn: draw241,
    description: 'একই ধরনের কোষ একত্রে একটি নির্দিষ্ট কার্য সম্পাদন করলে তাকে টিস্যু বলে।',
    details: ['🌿 ভাজক টিস্যু — বিভাজনশীল, বৃদ্ধি ঘটায়','🟢 প্যারেনকাইমা — পাতলা প্রাচীর, খাদ্য সঞ্চয়','🟡 কোলেনকাইমা — কোণে ঘন প্রাচীর, নমনীয়','⬛ স্ক্লেরেনকাইমা — মোটা প্রাচীর, মৃত কোষ','🔴 জাইলেম — পানি ও খনিজ পরিবহন','🟢 ফ্লোয়েম — খাদ্য পরিবহন','🌾 ভাস্কুলার বান্ডেল = জাইলেম + ফ্লোয়েম'] },

  '2.4.1': { title: '২.৪.১ উদ্ভিদ টিস্যু', subtitle: 'সরল ও জটিল স্থায়ী টিস্যু', color: '#34d399', diagramLabel: 'সকল উদ্ভিদ টিস্যু এক পর্দায়', drawFn: draw241,
    description: 'উদ্ভিদ টিস্যু দুই প্রকার: ভাজক (বিভাজনশীল) ও স্থায়ী। স্থায়ী টিস্যু সরল ও জটিল দুই ধরনের।',
    details: ['🌱 শীর্ষ ভাজক — কাণ্ড ও মূলের ডগায়','🌱 পার্শ্ব ভাজক — ভাস্কুলার ক্যাম্বিয়াম, কর্ক ক্যাম্বিয়াম','🟢 প্যারেনকাইমা — ক্লোরেনকাইমা (সালোকসংশ্লেষণ)','🟡 কোলেনকাইমা — শাকসবজির ডাঁটায় পাওয়া যায়','⬛ স্ক্লেরেনকাইমা — ফাইবার ও স্ক্লেরেইড','🔴 জাইলেম — ট্র্যাকিড ও ভেসেল','🟢 ফ্লোয়েম — সিভটিউব ও কম্প্যানিয়ন সেল'] },

  '2.4.2': { title: '২.৪.২ প্রাণি টিস্যু', subtitle: 'চার মৌলিক প্রাণি টিস্যু', color: '#f87171', diagramLabel: 'আবরণী, পেশি, যোজক ও স্নায়ু টিস্যু', drawFn: draw242,
    description: 'প্রাণিদেহে চার ধরনের মৌলিক টিস্যু। প্রতিটি বিশেষ কাজ করে এবং একসাথে অঙ্গ তৈরি করে।',
    details: ['🧱 আবরণী — শরীরের আবরণ, গ্রন্থি তৈরি','🔗 যোজক — সংযোগ, সহায়তা, রক্ত ও হাড়','💪 পেশি — হৃদ, মসৃণ ও কঙ্কাল পেশি','⚡ স্নায়ু — নিউরন ও গ্লিয়াল কোষ','🩸 রক্ত — তরল যোজক টিস্যু, RBC, WBC, প্লেটলেট','🦴 হাড় — কঠিন যোজক, খনিজ লবণে পরিপূর্ণ','🔬 মস্তিষ্কে ১০০ বিলিয়ন নিউরন'] },

  '2.5': { title: '২.৫ অঙ্গ ও অঙ্গতন্ত্র', subtitle: 'কোষ → টিস্যু → অঙ্গ → অঙ্গতন্ত্র → জীব', color: '#fb923c', diagramLabel: 'জীবদেহের শ্রেণিবিন্যাসের পিরামিড', drawFn: draw25,
    description: 'টিস্যু → অঙ্গ → অঙ্গতন্ত্র → জীব। এই স্তরক্রমিক সংগঠনই জীবনের জটিলতা তৈরি করে।',
    details: ['🔬 কোষ → জীবনের মৌলিক একক','🧱 টিস্যু → একই কোষের সমষ্টি','🫀 অঙ্গ → বিভিন্ন টিস্যুর সমন্বয়','⚙️ অঙ্গতন্ত্র → একাধিক অঙ্গের কার্যকরী দল','🌿 মানবদেহে ১১টি প্রধান অঙ্গতন্ত্র','❤️ হৃদয় — পরিসঞ্চালনতন্ত্রের মূল অঙ্গ','🧠 মস্তিষ্ক — স্নায়ুতন্ত্রের কেন্দ্রীয় অঙ্গ'] },
};

// ─── Menu ────────────────────────────────────────────────────────────────────
interface MenuItem { id: string; label: string; children?: MenuItem[]; }
const menuTree: MenuItem[] = [
  { id: '2.1', label: '২.১ জীবকোষ' },
  { id: '2.2', label: '২.২ কোষের প্রধান অঙ্গাণু', children: [
    { id: '2.2.1', label: '২.২.১ কোষ ঝিল্লি' }, { id: '2.2.2', label: '২.২.২ কোষ প্রাচীর' },
    { id: '2.2.3', label: '২.২.৩ নিউক্লিয়াস' }, { id: '2.2.4', label: '২.২.৪ মাইটোকন্ড্রিয়া' },
    { id: '2.2.5', label: '২.২.৫ প্লাস্টিড' }, { id: '2.2.6', label: '২.২.৬ ER' },
    { id: '2.2.7', label: '২.২.৭ গলজি বস্তু' }, { id: '2.2.8', label: '২.২.৮ রাইবোসোম' },
    { id: '2.2.9', label: '২.২.৯ লাইসোসোম' }, { id: '2.2.10', label: '২.২.১০ সেন্ট্রোসোম' },
    { id: '2.2.11', label: '২.২.১১ ভ্যাকুওল' },
  ] },
  { id: '2.3', label: '২.৩ উদ্ভিদ ও প্রাণিকোষের পার্থক্য' },
  { id: '2.4', label: '২.৪ টিস্যু', children: [
    { id: '2.4.1', label: '২.৪.১ উদ্ভিদ টিস্যু' }, { id: '2.4.2', label: '২.৪.২ প্রাণি টিস্যু' },
  ] },
  { id: '2.5', label: '২.৫ অঙ্গ ও অঙ্গতন্ত্র' },
];

const MenuItemComp: React.FC<{ item: MenuItem; activeId: string; setActive: (id: string) => void; depth?: number }> = ({ item, activeId, setActive, depth = 0 }) => {
  const [open, setOpen] = useState<boolean>(depth === 0);
  const has = !!item.children?.length;
  const isActive = activeId === item.id;
  const color = sections[item.id]?.color || '#64748b';
  const isParent = item.children?.some(c => activeId.startsWith(c.id));

  return (
    <div>
      <button onClick={() => { if (has) setOpen(o => !o); setActive(item.id); }}
        className={`w-full flex items-center gap-2 text-left px-3 py-2 rounded-lg transition-all text-xs font-medium ${depth > 0 ? 'pl-5' : ''} ${isActive ? 'text-slate-950 font-bold shadow-md' : 'text-blue-200 hover:text-white hover:bg-white/10'}`}
        style={isActive ? { backgroundColor: color, boxShadow: `0 0 12px ${color}66` } : {}}>
        {has ? ((open || isParent) ? <ChevronDown className="h-3.5 w-3.5 shrink-0" /> : <ChevronRight className="h-3.5 w-3.5 shrink-0" />) :
          <span className="h-3.5 w-3.5 shrink-0 flex items-center justify-center"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: isActive ? '#0f172a' : color }} /></span>}
        <span className="leading-tight">{item.label}</span>
      </button>
      {has && (open || isParent) && (
        <div className="ml-2 mt-0.5 space-y-0.5 border-l border-white/10 pl-1">
          {item.children!.map(c => <MenuItemComp key={c.id} item={c} activeId={activeId} setActive={setActive} depth={depth + 1} />)}
        </div>
      )}
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────
export const CellExplorerLab: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('2.1');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const [tick, setTick] = useState(0);

  const section = sections[activeId] || sections['2.1'];

  useEffect(() => {
    let last = performance.now();
    const loop = (now: number) => {
      timeRef.current += (now - last) / 1000;
      last = now;
      setTick(t => t + 1);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    const { width: w, height: h } = canvas;
    ctx.clearRect(0, 0, w, h);
    try { section.drawFn(ctx, w, h, timeRef.current); } catch (_) {}
  }, [tick, activeId, section]);

  const handleSetActive = useCallback((id: string) => {
    setActiveId(id); timeRef.current = 0;
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-[90vh] bg-slate-950 text-slate-100 font-sans">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 xl:w-72 shrink-0 bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-700/60 flex flex-col">
        <div className="px-4 py-3 border-b border-slate-700/60 bg-slate-800/80">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-emerald-400" />
            <div>
              <p className="text-xs font-bold text-emerald-300">জীববিজ্ঞান অধ্যায় ২</p>
              <p className="text-[11px] text-slate-400">জীবকোষ ও টিস্যু</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
          {menuTree.map(item => <MenuItemComp key={item.id} item={item} activeId={activeId} setActive={handleSetActive} />)}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col xl:flex-row overflow-hidden">
        {/* Canvas */}
        <div className="xl:w-[58%] flex flex-col bg-slate-950 border-b xl:border-b-0 xl:border-r border-slate-700/60">
          <div className="flex items-center justify-between px-4 py-2 bg-slate-900/90 border-b border-slate-700/40">
            <div className="flex items-center gap-2">
              <ZoomIn className="h-4 w-4" style={{ color: section.color }} />
              <span className="text-xs font-semibold text-slate-300">{section.diagramLabel}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: section.color }} />
              <span className="text-[10px] text-slate-500">লাইভ ৩D অ্যানিমেশন</span>
            </div>
          </div>
          <div className="flex-1 relative min-h-[320px]">
            <canvas ref={canvasRef} width={620} height={430} className="w-full h-full object-contain" style={{ display: 'block' }} />
          </div>
          <div className="px-4 py-2 bg-slate-900/70 border-t border-slate-700/40 flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: section.color + '33', color: section.color, border: `1px solid ${section.color}55` }}>{activeId}</span>
            <span className="text-xs text-slate-400">{section.subtitle}</span>
          </div>
        </div>

        {/* Info panel */}
        <div className="xl:flex-1 flex flex-col overflow-y-auto">
          <div className="px-5 py-4 border-b border-slate-700/60" style={{ background: `linear-gradient(135deg, ${section.color}18, transparent)` }}>
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 mt-0.5 shrink-0" style={{ color: section.color }} />
              <div>
                <h2 className="text-base font-bold text-slate-100">{section.title}</h2>
                <p className="text-xs text-slate-400 mt-0.5">{section.subtitle}</p>
              </div>
            </div>
          </div>
          <div className="px-5 py-3 border-b border-slate-700/30">
            <p className="text-sm text-slate-300 leading-relaxed">{section.description}</p>
          </div>
          <div className="px-5 py-4 flex-1 overflow-y-auto">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-0.5 w-4 rounded" style={{ backgroundColor: section.color }} />
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">মূল তথ্যসমূহ</h3>
            </div>
            <ul className="space-y-2">
              {section.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300 p-2.5 rounded-lg border border-slate-700/40" style={{ background: `${section.color}09` }}>
                  <span className="shrink-0 text-xs font-bold mt-0.5 w-4 text-center" style={{ color: section.color }}>{bn(i + 1)}</span>
                  <span className="leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Quick nav */}
          <div className="px-5 py-3 border-t border-slate-700/40 bg-slate-900/60">
            <div className="flex flex-wrap gap-1.5">
              {Object.keys(sections).map(id => (
                <button key={id} onClick={() => handleSetActive(id)} title={sections[id].title}
                  className="text-[10px] px-2 py-0.5 rounded font-mono transition-all border"
                  style={activeId === id ? { backgroundColor: sections[id].color, color: '#0f172a', borderColor: sections[id].color, fontWeight: 700 }
                    : { backgroundColor: 'transparent', color: '#64748b', borderColor: '#334155' }}>
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
