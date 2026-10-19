import * as THREE from 'three';

// Type helper for anchor adder
type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;

/**
 * Builds rich, dedicated 3D interactive models for every single slide in Chemistry Chapter 4 & 5
 */
export function buildChemistryCh4Ch5Scene(
  slideId: number,
  chapter: number,
  group: THREE.Group,
  refs: any,
  addAnchor: AddAnchorFn
) {
  refs.chemCh4Ch5Slide = slideId;
  refs.chemCh4Ch5Chapter = chapter;

  // =========================================================================
  // CHEMISTRY CHAPTER 4: PERIODIC TABLE (পর্যায় সারণি — ১৪টি পৃথক ৩ডি মডেল)
  // =========================================================================
  if (chapter === 4) {
    // -----------------------------------------------------------------------
    // Slide 1: আধুনিক পর্যায় সারণির সার্বজনীন রূপরেখা (Tiered Architecture)
    // -----------------------------------------------------------------------
    if (slideId === 1) {
      const ptGroup = new THREE.Group();
      group.add(ptGroup);
      refs.periodicMasterGroup = ptGroup;

      // Base Platform
      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(4.2, 4.4, 0.4, 32),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.6, metalness: 0.4 })
      );
      base.position.y = -2.0;
      ptGroup.add(base);

      // 4 Main Blocks: s-block (cyan), p-block (amber), d-block (emerald), f-block (purple)
      const blocks = [
        { nameBn: 's-ব্লক (গ্রুপ ১-২)', nameEn: 's-Block (Alkali & Alkaline)', col: 0x38bdf8, pos: [-2.6, -0.6, 0], w: 1.2, h: 2.2, d: 1.2, sym: 's¹-s²' },
        { nameBn: 'd-ব্লক (অবস্থান্তর ধাতু)', nameEn: 'd-Block (Transition Metals)', col: 0x10b981, pos: [-0.6, -0.9, 0], w: 2.2, h: 1.6, d: 1.2, sym: 'd¹-d¹⁰' },
        { nameBn: 'p-ব্লক (গ্রুপ ১৩-১৮)', nameEn: 'p-Block (Non-metals & Halogens)', col: 0xf59e0b, pos: [1.8, -0.5, 0], w: 2.0, h: 2.4, d: 1.2, sym: 'p¹-p⁶' },
        { nameBn: 'f-ব্লক (ল্যান্থানাইড ও অ্যাক্টিনাইড)', nameEn: 'f-Block (Inner Transition)', col: 0xa855f7, pos: [0, -1.6, 1.2], w: 3.4, h: 0.6, d: 0.8, sym: 'f¹-f¹⁴' },
      ];

      blocks.forEach(b => {
        const box = new THREE.Mesh(
          new THREE.BoxGeometry(b.w, b.h, b.d),
          new THREE.MeshStandardMaterial({ color: b.col, roughness: 0.3, metalness: 0.3, emissive: b.col, emissiveIntensity: 0.4 })
        );
        box.position.set(b.pos[0], b.pos[1], b.pos[2]);
        ptGroup.add(box);
        addAnchor(box, b.nameBn, b.nameEn, b.sym, `#${b.col.toString(16)}`);
      });

      // Floating Crown / Crest
      const crown = new THREE.Mesh(
        new THREE.TorusGeometry(1.8, 0.08, 16, 64),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.8 })
      );
      crown.position.set(0, 1.5, 0);
      crown.rotation.x = Math.PI / 2;
      ptGroup.add(crown);
      addAnchor(crown, '১১৮টি মৌল · ৭টি পর্যায় · ১৮টি গ্রুপ', '118 Elements (7 Periods & 18 Groups)', '1-118', '#38bdf8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 2: পর্যায় সারণির পটভূমি ও ত্রয়ী সূত্র (Döbereiner Triads & Balance)
    // -----------------------------------------------------------------------
    if (slideId === 2) {
      // Balance Scale Stand
      const stand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.25, 3.6, 16),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8 })
      );
      stand.position.set(0, -0.2, 0);
      group.add(stand);

      // Balance Beam
      const beam = new THREE.Mesh(
        new THREE.BoxGeometry(4.2, 0.12, 0.2),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.9 })
      );
      beam.position.set(0, 1.5, 0);
      group.add(beam);

      // Left Pan: Li (Mass = 7)
      const liOrb = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.5 })
      );
      liOrb.position.set(-1.8, 0.8, 0);
      group.add(liOrb);
      addAnchor(liOrb, 'লিথিয়াম (ভর = ৭)', 'Lithium (Mass = 7)', '⁷Li', '#ef4444');

      // Right Pan: K (Mass = 39)
      const kOrb = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x8b5cf6, emissive: 0x6d28d9, emissiveIntensity: 0.5 })
      );
      kOrb.position.set(1.8, 0.8, 0);
      group.add(kOrb);
      addAnchor(kOrb, 'পটাশিয়াম (ভর = ৩৯)', 'Potassium (Mass = 39)', '³⁹K', '#8b5cf6');

      // Center Suspended: Na (Mass = (7+39)/2 = 23)
      const naOrb = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 })
      );
      naOrb.position.set(0, 0.5, 0);
      group.add(naOrb);
      addAnchor(naOrb, 'ডোবেরেইনারের ত্রয়ী: সোডিয়াম ভর = ২৩', 'Döbereiner Triad: (7+39)/2 = 23', '²³Na', '#38bdf8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 3: মেন্ডেলিফের পর্যায় সারণি ও ভবিষ্যদ্বাণী (Mendeleev's Predictions)
    // -----------------------------------------------------------------------
    if (slideId === 3) {
      const predGroup = new THREE.Group();
      group.add(predGroup);

      // Known Elements Cards
      const knowns = [
        { sym: 'Al', nameBn: 'অ্যালুমিনিয়াম (২৭)', pos: [-1.8, 0.8, 0], col: 0x94a3b8 },
        { sym: 'Si', nameBn: 'সিলিকন (২৮)', pos: [1.8, 0.8, 0], col: 0x64748b }
      ];
      knowns.forEach(k => {
        const card = new THREE.Mesh(
          new THREE.BoxGeometry(1.2, 1.4, 0.2),
          new THREE.MeshStandardMaterial({ color: k.col, roughness: 0.4 })
        );
        card.position.set(k.pos[0], k.pos[1], k.pos[2]);
        predGroup.add(card);
        addAnchor(card, k.nameBn, 'Known Element', k.sym, '#cbd5e1');
      });

      // Predicted Mystery Orbs: Eka-Aluminium (Ga) and Eka-Silicon (Ge)
      const ekaAl = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.7 })
      );
      ekaAl.position.set(-1.8, -0.8, 0);
      predGroup.add(ekaAl);
      addAnchor(ekaAl, 'একা-অ্যালুমিনিয়াম → গ্যালিয়াম (৬৯.৭)', 'Eka-Aluminium → Gallium (69.7)', 'Ga', '#10b981');

      const ekaSi = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.7 })
      );
      ekaSi.position.set(1.8, -0.8, 0);
      predGroup.add(ekaSi);
      addAnchor(ekaSi, 'একা-সিলিকন → জার্মেনিয়াম (৭২.৬)', 'Eka-Silicon → Germanium (72.6)', 'Ge', '#38bdf8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 4: আধুনিক পর্যায় সূত্র ও মোসলের এক্স-রে পরীক্ষা (Moseley X-Ray Tube)
    // -----------------------------------------------------------------------
    if (slideId === 4) {
      // Glass Bulb Envelope
      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(1.6, 24, 24),
        new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.25, roughness: 0.1 })
      );
      group.add(bulb);

      // Cathode Filament (Electron Emitter)
      const cathode = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 0.4, 16),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xdc2626, emissiveIntensity: 0.8 })
      );
      cathode.position.set(-2.0, 0, 0);
      cathode.rotation.z = Math.PI / 2;
      group.add(cathode);
      addAnchor(cathode, 'ক্যাথোড ফিলামেন্ট (তড়িৎ প্রবাহ)', 'Cathode Electron Gun', 'e⁻', '#ef4444');

      // Copper/Target Anode Bevelled
      const anode = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.4, 0.6, 16),
        new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.8, roughness: 0.3 })
      );
      anode.position.set(0.6, 0, 0);
      anode.rotation.z = -Math.PI / 4;
      group.add(anode);
      addAnchor(anode, 'ধাতব অ্যানোড লক্ষ্যবস্তু', 'Anode Target Target', 'Z', '#f59e0b');

      // Emitted X-Ray Beam Ray
      const xray = new THREE.ArrowHelper(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(0.6, 0.3, 0),
        2.2,
        0x38bdf8,
        0.5,
        0.3
      );
      group.add(xray);
      addAnchor(xray, 'মোসলের এক্স-রে তরঙ্গ (√ν ∝ Z)', 'Characteristic X-Ray (√ν ∝ Z)', 'X-Ray', '#38bdf8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 5: পর্যায় সারণির সাধারণ বৈশিষ্ট্য (7 Periods & 18 Groups Matrix)
    // -----------------------------------------------------------------------
    if (slideId === 5) {
      const matGroup = new THREE.Group();
      group.add(matGroup);

      // 7 Periods (Horizontal layers)
      for (let p = 1; p <= 7; p++) {
        const pBar = new THREE.Mesh(
          new THREE.BoxGeometry(5.2, 0.12, 1.8),
          new THREE.MeshStandardMaterial({
            color: p <= 3 ? 0x38bdf8 : p <= 5 ? 0x10b981 : 0xf59e0b,
            emissive: p <= 3 ? 0x0284c7 : p <= 5 ? 0x059669 : 0xd97706,
            emissiveIntensity: 0.3
          })
        );
        pBar.position.set(0, 1.8 - (p - 1) * 0.55, 0);
        matGroup.add(pBar);
      }

      // Group Marker Pillars
      const g1 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.18, 4.0, 16),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.6 })
      );
      g1.position.set(-2.6, 0.1, 0);
      matGroup.add(g1);
      addAnchor(g1, 'গ্রুপ ১: ক্ষার ধাতু (৭টি মৌল)', 'Group 1: Alkali Metals', 'Grp 1', '#ef4444');

      const g18 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.18, 4.0, 16),
        new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x7e22ce, emissiveIntensity: 0.6 })
      );
      g18.position.set(2.6, 0.1, 0);
      matGroup.add(g18);
      addAnchor(g18, 'গ্রুপ ১৮: নিষ্ক্রিয় গ্যাস (৭টি মৌল)', 'Group 18: Noble Gases', 'Grp 18', '#a855f7');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 6: ইলেকট্রন বিন্যাস: পর্যায় সারণির মূল ভিত্তি (Aufbau Subshell Shells)
    // -----------------------------------------------------------------------
    if (slideId === 6) {
      // Central Nucleus
      const nuc = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.6 })
      );
      group.add(nuc);
      addAnchor(nuc, 'পারমাণবিক নিউক্লিয়াস', 'Atomic Nucleus', 'Z+', '#ef4444');

      // Concentric Subshell Rings (1s, 2s, 2p, 3s)
      const shells = [
        { r: 1.2, nameBn: '১ম শক্তিস্তর (K: 1s²)', col: 0x38bdf8, e: 2 },
        { r: 2.0, nameBn: '২য় শক্তিস্তর (L: 2s² 2p⁶)', col: 0x10b981, e: 8 },
        { r: 2.8, nameBn: '৩য় শক্তিস্তর (M: 3s¹)', col: 0xf59e0b, e: 1 },
      ];

      shells.forEach((sh, sIdx) => {
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(sh.r - 0.03, sh.r + 0.03, 64),
          new THREE.MeshBasicMaterial({ color: sh.col, side: THREE.DoubleSide })
        );
        ring.rotation.x = Math.PI / 2 + sIdx * 0.2;
        group.add(ring);

        // Orbiting electron beads
        for (let i = 0; i < sh.e; i++) {
          const angle = (i / sh.e) * Math.PI * 2;
          const eMesh = new THREE.Mesh(
            new THREE.SphereGeometry(0.12, 12, 12),
            new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: sh.col, emissiveIntensity: 0.8 })
          );
          eMesh.position.set(Math.cos(angle) * sh.r, 0, Math.sin(angle) * sh.r);
          group.add(eMesh);
        }
      });
      addAnchor(group, 'ইলেকট্রন বিন্যাস: পর্যায় ও গ্রুপ নির্ণায়ক', 'Electron Configuration Basis', 'Aufbau', '#f59e0b');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 7: পর্যায় ও গ্রুপ নির্ণয়ের নিয়ম (Position Finding: Sodium vs Chlorine)
    // -----------------------------------------------------------------------
    if (slideId === 7) {
      // Sodium Atom Model (Group 1, Period 3)
      const naAtom = new THREE.Group();
      naAtom.position.set(-1.8, 0, 0);
      group.add(naAtom);

      const naCore = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 })
      );
      naAtom.add(naCore);

      const naValence = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 0.9 })
      );
      naValence.position.set(1.3, 0, 0);
      naAtom.add(naValence);
      addAnchor(naAtom, 'সোডিয়াম: [Ne] 3s¹ → পর্যায় ৩, গ্রুপ ১', 'Sodium: Period 3, Group 1', 'Na (s¹)', '#38bdf8');

      // Chlorine Atom Model (Group 17, Period 3)
      const clAtom = new THREE.Group();
      clAtom.position.set(1.8, 0, 0);
      group.add(clAtom);

      const clCore = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.5 })
      );
      clAtom.add(clCore);

      // 7 valence electrons ring
      for (let i = 0; i < 7; i++) {
        const ang = (i / 7) * Math.PI * 2;
        const e = new THREE.Mesh(
          new THREE.SphereGeometry(0.12, 12, 12),
          new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 0.8 })
        );
        e.position.set(Math.cos(ang) * 1.1, Math.sin(ang) * 1.1, 0);
        clAtom.add(e);
      }
      addAnchor(clAtom, 'ক্লোরিন: [Ne] 3s² 3p⁵ → পর্যায় ৩, গ্রুপ ১৭', 'Chlorine: Period 3, Group 17', 'Cl (s²+p⁵+10)', '#10b981');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 8: পর্যায় সারণির সীমাবদ্ধতা ও হাইড্রোজেন (Hydrogen Bridge)
    // -----------------------------------------------------------------------
    if (slideId === 8) {
      // Suspension Bridge Arch
      const bridgeCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-2.4, -0.6, 0),
        new THREE.Vector3(0, 1.4, 0),
        new THREE.Vector3(2.4, -0.6, 0)
      ]);
      const bridgeGeo = new THREE.TubeGeometry(bridgeCurve, 32, 0.08, 8, false);
      const bridgeMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.7 });
      group.add(new THREE.Mesh(bridgeGeo, bridgeMat));

      // Left Pillar: Group 1 (Alkali Cations H+)
      const alkPillar = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 2.2, 0.8),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0x991b1b, emissiveIntensity: 0.5 })
      );
      alkPillar.position.set(-2.4, -0.4, 0);
      group.add(alkPillar);
      addAnchor(alkPillar, 'গ্রুপ ১ সাদৃশ্য: H⁺ আয়ন তৈরি', 'Group 1 Alkali Resemblance', 'H⁺', '#ef4444');

      // Right Pillar: Group 17 (Halogen Hydride H-)
      const halPillar = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 2.2, 0.8),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x065f46, emissiveIntensity: 0.5 })
      );
      halPillar.position.set(2.4, -0.4, 0);
      group.add(halPillar);
      addAnchor(halPillar, 'গ্রুপ ১৭ সাদৃশ্য: দ্বিপারমাণবিক H₂ ও H⁻', 'Group 17 Halogen Resemblance', 'H⁻', '#10b981');

      // Suspended Hydrogen Atom
      const hAtom = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.8 })
      );
      hAtom.position.set(0, 1.5, 0);
      group.add(hAtom);
      addAnchor(hAtom, 'হাইড্রোজেনের দ্বৈত চরিত্র ও বিতর্কিত অবস্থান', 'Hydrogen Dual Nature Dilemma', '¹H', '#38bdf8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 9: পারমাণবিক ব্যাসার্ধের পরিবর্তন (Period 3 Radius Shrinking Trend)
    // -----------------------------------------------------------------------
    if (slideId === 9) {
      // Period 3 Atom spheres across horizontal row (Na -> Cl)
      const p3Atoms = [
        { sym: 'Na', r: 0.72, col: 0x38bdf8, x: -2.8, nameBn: 'সোডিয়াম (১৮৬ pm)' },
        { sym: 'Mg', r: 0.62, col: 0x38bdf8, x: -1.9, nameBn: 'ম্যাগনেসিয়াম (১৬০ pm)' },
        { sym: 'Al', r: 0.54, col: 0x10b981, x: -1.0, nameBn: 'অ্যালুমিনিয়াম (১৪৩ pm)' },
        { sym: 'Si', r: 0.46, col: 0x10b981, x: -0.2, nameBn: 'সিলিকন (১১৮ pm)' },
        { sym: 'P',  r: 0.40, col: 0xf59e0b, x: 0.6, nameBn: 'ফসফরাস (১১০ pm)' },
        { sym: 'S',  r: 0.36, col: 0xfacc15, x: 1.4, nameBn: 'সালফার (১০৩ pm)' },
        { sym: 'Cl', r: 0.32, col: 0x22c55e, x: 2.1, nameBn: 'ক্লোরিন (৯৯ pm)' },
        { sym: 'Ar', r: 0.30, col: 0xa855f7, x: 2.8, nameBn: 'আর্গন (৯৮ pm)' },
      ];

      p3Atoms.forEach(a => {
        const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(a.r, 20, 20),
          new THREE.MeshStandardMaterial({ color: a.col, roughness: 0.3, emissive: a.col, emissiveIntensity: 0.4 })
        );
        mesh.position.set(a.x, 0, 0);
        group.add(mesh);
        addAnchor(mesh, a.nameBn, `${a.sym} Atomic Radius`, a.sym, `#${a.col.toString(16)}`);
      });

      // Directional arrow showing shrinking radius across period
      const shrinkArrow = new THREE.ArrowHelper(
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(-3.0, 1.4, 0),
        5.8,
        0xf43f5e,
        0.5,
        0.3
      );
      group.add(shrinkArrow);
      addAnchor(shrinkArrow, 'পর্যায়ে বাম থেকে ডানে পারমাণবিক ব্যাসার্ধ হ্রাস পায়', 'Atomic Radius Decreases Across Period', 'r ↓', '#f43f5e');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 10: আয়নীকরণ শক্তি (Ionization Energy Ejection)
    // -----------------------------------------------------------------------
    if (slideId === 10) {
      // Sodium Atom
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.8, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x0284c7, emissive: 0x0369a1, emissiveIntensity: 0.5 })
      );
      group.add(core);
      addAnchor(core, 'সোডিয়াম আয়ন (Na⁺)', 'Sodium Cation Core (Na⁺)', 'Na⁺', '#38bdf8');

      // Outer Valence Orbit Ring
      const orbRing = new THREE.Mesh(
        new THREE.RingGeometry(2.18, 2.22, 64),
        new THREE.MeshBasicMaterial({ color: 0x64748b, side: THREE.DoubleSide })
      );
      orbRing.rotation.x = Math.PI / 2;
      group.add(orbRing);

      // Ejected Valence Electron
      const ejectedE = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 0.9 })
      );
      ejectedE.position.set(2.6, 1.2, 0);
      group.add(ejectedE);
      refs.ejectedElectron = ejectedE;
      addAnchor(ejectedE, 'অপসারিত যোজ্যতা ইলেকট্রন (e⁻)', 'Ejected Valence Electron', 'e⁻', '#facc15');

      // Incoming Photon Wave packet
      const photonArrow = new THREE.ArrowHelper(
        new THREE.Vector3(1, -0.6, 0).normalize(),
        new THREE.Vector3(-2.6, 1.6, 0),
        2.2,
        0x10b981,
        0.5,
        0.3
      );
      group.add(photonArrow);
      addAnchor(photonArrow, 'আয়নীকরণ শক্তি (Ei = ৪৯৬ kJ/mol)', 'Ionization Energy (Ei = 496 kJ/mol)', 'Ei (hν)', '#10b981');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 11: ইলেকট্রন আসক্তি ও তড়িৎ ঋণাত্মকতা (Electron Affinity & Electronegativity)
    // -----------------------------------------------------------------------
    if (slideId === 11) {
      // Polar Bond Dipole: H - Cl
      const hSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.35, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.4 })
      );
      hSphere.position.set(-1.6, 0, 0);
      group.add(hSphere);
      addAnchor(hSphere, 'হাইড্রোজেন (তড়িৎ ঋণাত্মকতা ২.১) δ⁺', 'Hydrogen (EN 2.1) δ⁺', 'H^δ+', '#38bdf8');

      const clSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.9, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.5 })
      );
      clSphere.position.set(1.4, 0, 0);
      group.add(clSphere);
      addAnchor(clSphere, 'ক্লোরিন (তড়িৎ ঋণাত্মকতা ৩.০) δ⁻', 'Chlorine (EN 3.0) δ⁻', 'Cl^δ-', '#10b981');

      // Polar covalent shared cloud distorted toward Cl
      const cloud = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.7, 2.4, 24),
        new THREE.MeshPhysicalMaterial({ color: 0xfacc15, transparent: true, opacity: 0.5, roughness: 0.2 })
      );
      cloud.position.set(-0.1, 0, 0);
      cloud.rotation.z = Math.PI / 2;
      group.add(cloud);
      addAnchor(cloud, 'শেয়ারকৃত ইলেকট্রন মেঘ ক্লোরিনের দিকে আকৃষ্ট', 'Distorted Shared Electron Pair', 'δ- ← δ+', '#facc15');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 12: বিশেষ গ্রুপসমূহ (Alkali, Alkaline, Halogen, Noble Showcase)
    // -----------------------------------------------------------------------
    if (slideId === 12) {
      const peds = [
        { nameBn: 'গ্রুপ ১: ক্ষার ধাতু', sym: 'Na', col: 0xef4444, x: -2.4, desc: 'জলে তীব্র বিক্রিয়া' },
        { nameBn: 'গ্রুপ ২: মৃৎক্ষার ধাতু', sym: 'Mg', col: 0xf59e0b, x: -0.8, desc: 'মাটিতে অক্সাইড রূপ' },
        { nameBn: 'গ্রুপ ১৭: হ্যালোজেন', sym: 'Cl₂', col: 0x10b981, x: 0.8, desc: 'লবণ উৎপাদক' },
        { nameBn: 'গ্রুপ ১৮: নিষ্ক্রিয় গ্যাস', sym: 'Ne', col: 0xa855f7, x: 2.4, desc: 'স্থিতিশীল অষ্টক' },
      ];

      peds.forEach(p => {
        // Pedestal
        const stand = new THREE.Mesh(
          new THREE.CylinderGeometry(0.6, 0.7, 1.2, 20),
          new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5 })
        );
        stand.position.set(p.x, -1.0, 0);
        group.add(stand);

        // Glowing Orb on top
        const orb = new THREE.Mesh(
          new THREE.SphereGeometry(0.42, 20, 20),
          new THREE.MeshStandardMaterial({ color: p.col, emissive: p.col, emissiveIntensity: 0.7 })
        );
        orb.position.set(p.x, 0.2, 0);
        group.add(orb);
        addAnchor(orb, p.nameBn, p.desc, p.sym, `#${p.col.toString(16)}`);
      });
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 13: ধাতব ও অধাতব ধর্মের পর্যায়বৃত্ত পরিবর্তন (Metallic Conductivity)
    // -----------------------------------------------------------------------
    if (slideId === 13) {
      // Metallic Crystal Lattice on Left
      const metalBox = new THREE.Mesh(
        new THREE.BoxGeometry(2.2, 2.0, 1.6),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.9, roughness: 0.2, emissive: 0x0284c7, emissiveIntensity: 0.4 })
      );
      metalBox.position.set(-1.8, 0, 0);
      group.add(metalBox);
      addAnchor(metalBox, 'ধাতব ল্যাটিস: বিদ্যুৎ ও তাপ সুপরিবাহী', 'Metallic Crystal (Conductive & Ductile)', 'Metal', '#38bdf8');

      // Non-metal brittle Sulfur Ring on Right
      const nonMetal = new THREE.Mesh(
        new THREE.TorusGeometry(0.8, 0.25, 16, 32),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.8, emissive: 0xca8a04, emissiveIntensity: 0.4 })
      );
      nonMetal.position.set(1.8, 0, 0);
      group.add(nonMetal);
      addAnchor(nonMetal, 'অধাতু (সালফার S₈): অন্তরক ও ভঙ্গুর', 'Non-Metal (Insulator & Brittle)', 'S₈', '#facc15');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 14: অধ্যায় ৪ সম্পূর্ণ সারসংক্ষেপ (Periodic Trends Master Compass)
    // -----------------------------------------------------------------------
    if (slideId === 14) {
      const compassGroup = new THREE.Group();
      group.add(compassGroup);
      refs.trendCompass = compassGroup;

      // Central Dial Ring
      const dial = new THREE.Mesh(
        new THREE.TorusGeometry(2.4, 0.12, 16, 64),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 })
      );
      dial.rotation.x = Math.PI / 2;
      compassGroup.add(dial);

      // Trend Vector 1: Atomic Radius (Left & Down)
      const arr1 = new THREE.ArrowHelper(new THREE.Vector3(-1, -0.6, 0).normalize(), new THREE.Vector3(0, 0, 0), 2.2, 0xef4444, 0.4, 0.25);
      compassGroup.add(arr1);
      addAnchor(arr1, 'পারমাণবিক ব্যাসার্ধ ও ধাতব ধর্ম বৃদ্ধি (↙)', 'Atomic Radius & Metallic Character (↙)', 'Radius ↑', '#ef4444');

      // Trend Vector 2: Ionization Energy & Electronegativity (Right & Up)
      const arr2 = new THREE.ArrowHelper(new THREE.Vector3(1, 0.6, 0).normalize(), new THREE.Vector3(0, 0, 0), 2.2, 0x10b981, 0.4, 0.25);
      compassGroup.add(arr2);
      addAnchor(arr2, 'আয়নীকরণ শক্তি ও তড়িৎ ঋণাত্মকতা বৃদ্ধি (↗)', 'Ionization Energy & Electronegativity (↗)', 'EN / Ei ↑', '#10b981');
      return;
    }
  }

  // =========================================================================
  // CHEMISTRY CHAPTER 5: CHEMICAL BONDS (রাসায়নিক বন্ধন — ১৫টি পৃথক ৩ডি মডেল)
  // =========================================================================
  if (chapter === 5) {
    // -----------------------------------------------------------------------
    // Slide 1: রাসায়নিক বন্ধন গঠনের কারণ (Potential Energy Minimization)
    // -----------------------------------------------------------------------
    if (slideId === 1) {
      // Two interacting atoms approaching each other
      const atomA = new THREE.Mesh(
        new THREE.SphereGeometry(0.65, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 })
      );
      atomA.position.set(-1.2, 0, 0);
      group.add(atomA);
      addAnchor(atomA, 'পরমাণু ক (অষ্টক অপূর্ণ)', 'Atom A (Seeking Octet)', 'Atom A', '#38bdf8');

      const atomB = new THREE.Mesh(
        new THREE.SphereGeometry(0.65, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.5 })
      );
      atomB.position.set(1.2, 0, 0);
      group.add(atomB);
      addAnchor(atomB, 'পরমাণু খ (ইলেকট্রন আকর্ষণ)', 'Atom B (Attraction)', 'Atom B', '#10b981');

      // Glowing Bond Overlap Core
      const bondGlow = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xfacc15, transparent: true, opacity: 0.6 })
      );
      group.add(bondGlow);
      addAnchor(bondGlow, 'বন্ধন গঠন: নিম্নতম স্থিতিশক্তি ও পরম স্থিতিশীলতা', 'Bond Formation (Energy Minimum)', 'E_min', '#facc15');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 2: যোজ্যতা ইলেকট্রন (Valence Electrons Outer Shell)
    // -----------------------------------------------------------------------
    if (slideId === 2) {
      // Carbon Atom (4 valence electrons)
      const nucleus = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0x334155, emissive: 0x1e293b, emissiveIntensity: 0.6 })
      );
      group.add(nucleus);
      addAnchor(nucleus, 'কার্বন নিউক্লিয়াস (৬p + ৬n)', 'Carbon Nucleus (6p + 6n)', '⁶C', '#94a3b8');

      // Inner shell (2 electrons)
      const inRing = new THREE.Mesh(new THREE.RingGeometry(1.08, 1.12, 48), new THREE.MeshBasicMaterial({ color: 0x64748b, side: THREE.DoubleSide }));
      inRing.rotation.x = Math.PI / 2;
      group.add(inRing);

      // Outer Valence Shell (4 glowing electrons)
      const outRing = new THREE.Mesh(new THREE.RingGeometry(2.18, 2.22, 64), new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide }));
      outRing.rotation.x = Math.PI / 2;
      group.add(outRing);

      for (let i = 0; i < 4; i++) {
        const ang = (i / 4) * Math.PI * 2;
        const ve = new THREE.Mesh(
          new THREE.SphereGeometry(0.18, 16, 16),
          new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 0.9 })
        );
        ve.position.set(Math.cos(ang) * 2.2, 0, Math.sin(ang) * 2.2);
        group.add(ve);
      }
      addAnchor(outRing, 'কার্বনের ৪টি যোজ্যতা ইলেকট্রন (Valence e⁻ = 4)', 'Carbon 4 Valence Electrons', '2s²2p²', '#facc15');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 3: যোজনী বা যোজ্যতা (Combining Capacity / Coupling Units)
    // -----------------------------------------------------------------------
    if (slideId === 3) {
      // Oxygen Central Atom (Valency 2)
      const oAtom = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.5 })
      );
      group.add(oAtom);
      addAnchor(oAtom, 'অক্সিজেন পরমাণু (যোজনী = ২)', 'Oxygen Atom (Valency = 2)', 'O(II)', '#ef4444');

      // 2 Hydrogen atoms coupled
      [-1.5, 1.5].forEach((x, idx) => {
        const h = new THREE.Mesh(
          new THREE.SphereGeometry(0.35, 16, 16),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 })
        );
        h.position.set(x, -0.9, 0);
        group.add(h);

        // Cylindrical arm connecting to O
        const arm = new THREE.Mesh(
          new THREE.CylinderGeometry(0.08, 0.08, 1.7, 12),
          new THREE.MeshStandardMaterial({ color: 0xffffff })
        );
        arm.position.set(x * 0.5, -0.45, 0);
        arm.rotation.z = (idx === 0 ? 1 : -1) * 0.5;
        group.add(arm);
        addAnchor(h, `হাইড্রোজেন ${idx + 1} (যোজনী = ১)`, `Hydrogen ${idx + 1} (Valency = 1)`, 'H(I)', '#38bdf8');
      });
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 4: পরিবর্তনশীল যোজনী ও সুপ্ত যোজনী (Variable Valency: Fe2+ vs Fe3+)
    // -----------------------------------------------------------------------
    if (slideId === 4) {
      // Iron Atom Core
      const feCore = new THREE.Mesh(
        new THREE.SphereGeometry(0.9, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8, emissive: 0x475569, emissiveIntensity: 0.4 })
      );
      group.add(feCore);
      addAnchor(feCore, 'আয়রন (Fe: সর্বোচ্চ যোজনী ৩)', 'Iron (Highest Valency = 3)', '²⁶Fe', '#94a3b8');

      // Active Valency 2 (Ferrous) Indicator
      const fe2 = new THREE.Mesh(
        new THREE.SphereGeometry(0.35, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.7 })
      );
      fe2.position.set(-1.8, 1.0, 0);
      group.add(fe2);
      addAnchor(fe2, 'Fe²⁺ আস রূপ: সক্রিয় যোজনী ২, সুপ্ত যোজনী ১', 'Ferrous (Fe²⁺): Active=2, Latent=1', 'Fe²⁺', '#10b981');

      // Active Valency 3 (Ferric) Indicator
      const fe3 = new THREE.Mesh(
        new THREE.SphereGeometry(0.35, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.7 })
      );
      fe3.position.set(1.8, 1.0, 0);
      group.add(fe3);
      addAnchor(fe3, 'Fe³⁺ ইক রূপ: সক্রিয় যোজনী ৩, সুপ্ত যোজনী ০', 'Ferric (Fe³⁺): Active=3, Latent=0', 'Fe³⁺', '#f59e0b');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 5: যৌগমূলক বা র্যাডিক্যাল (Radicals: NH4+ and SO4 2-)
    // -----------------------------------------------------------------------
    if (slideId === 5) {
      // Ammonium Radical NH4+
      const nh4Group = new THREE.Group();
      nh4Group.position.set(-1.8, 0, 0);
      group.add(nh4Group);

      const nCenter = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 })
      );
      nh4Group.add(nCenter);

      // 4 H atoms
      const coords = [[0, 0.9, 0], [0.8, -0.4, 0], [-0.8, -0.4, 0], [0, -0.2, 0.8]];
      coords.forEach(c => {
        const hm = new THREE.Mesh(
          new THREE.SphereGeometry(0.24, 12, 12),
          new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x38bdf8, emissiveIntensity: 0.4 })
        );
        hm.position.set(c[0], c[1], c[2]);
        nh4Group.add(hm);
      });
      addAnchor(nh4Group, 'অ্যামোনিয়াম যৌগমূলক (যোজনী ১, আধান +১)', 'Ammonium Radical (NH₄⁺)', 'NH₄⁺', '#38bdf8');

      // Sulfate Radical SO4 2-
      const so4Group = new THREE.Group();
      so4Group.position.set(1.8, 0, 0);
      group.add(so4Group);

      const sCenter = new THREE.Mesh(
        new THREE.SphereGeometry(0.65, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 0.5 })
      );
      so4Group.add(sCenter);

      // 4 O atoms
      const ocoords = [[0, 1.0, 0], [0.9, -0.4, 0], [-0.9, -0.4, 0], [0, -0.3, -0.9]];
      ocoords.forEach(c => {
        const om = new THREE.Mesh(
          new THREE.SphereGeometry(0.3, 14, 14),
          new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.5 })
        );
        om.position.set(c[0], c[1], c[2]);
        so4Group.add(om);
      });
      addAnchor(so4Group, 'সালফেট যৌগমূলক (যোজনী ২, আধান -২)', 'Sulfate Radical (SO₄²⁻)', 'SO₄²⁻', '#facc15');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 6: যৌগের রাসায়নিক সংকেত লেখার নিয়ম (Criss-Cross Exchange: Al2O3)
    // -----------------------------------------------------------------------
    if (slideId === 6) {
      // Al3+ Cation
      const alIon = new THREE.Mesh(
        new THREE.SphereGeometry(0.6, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 })
      );
      alIon.position.set(-1.8, 0.6, 0);
      group.add(alIon);
      addAnchor(alIon, 'অ্যালুমিনিয়াম ক্যাটায়ন (যোজনী = ৩)', 'Aluminium (Valency = 3)', 'Al³⁺', '#38bdf8');

      // O2- Anion
      const oIon = new THREE.Mesh(
        new THREE.SphereGeometry(0.75, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.5 })
      );
      oIon.position.set(1.8, 0.6, 0);
      group.add(oIon);
      addAnchor(oIon, 'অক্সাইড অ্যানায়ন (যোজনী = ২)', 'Oxide (Valency = 2)', 'O²⁻', '#ef4444');

      // Resulting Al2O3 Molecule at bottom
      const prod = new THREE.Mesh(
        new THREE.BoxGeometry(2.6, 0.9, 1.2),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.6 })
      );
      prod.position.set(0, -1.2, 0);
      group.add(prod);
      addAnchor(prod, 'যোজনী বিনিময়: Al এর ২ এবং O এর ৩ → Al₂O₃', 'Criss-Cross Formula: Al₂O₃', 'Al₂O₃', '#10b981');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 7: আণবিক সংকেত বনাম গাঁঠনিক সংকেত (Tetrahedral CH4 & Bent H2O)
    // -----------------------------------------------------------------------
    if (slideId === 7) {
      // Methane CH4 (Tetrahedral 109.5 deg)
      const ch4 = new THREE.Group();
      ch4.position.set(-1.8, 0, 0);
      group.add(ch4);

      const c = new THREE.Mesh(new THREE.SphereGeometry(0.5, 20, 20), new THREE.MeshStandardMaterial({ color: 0x334155, emissive: 0x1e293b, emissiveIntensity: 0.4 }));
      ch4.add(c);

      const ch4Coords = [
        new THREE.Vector3(1, 1, 1).normalize().multiplyScalar(1.2),
        new THREE.Vector3(-1, -1, 1).normalize().multiplyScalar(1.2),
        new THREE.Vector3(-1, 1, -1).normalize().multiplyScalar(1.2),
        new THREE.Vector3(1, -1, -1).normalize().multiplyScalar(1.2)
      ];
      ch4Coords.forEach(pos => {
        const hm = new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 14), new THREE.MeshStandardMaterial({ color: 0x38bdf8 }));
        hm.position.copy(pos);
        ch4.add(hm);
      });
      addAnchor(ch4, 'মিথেন গাঁঠনিক রূপ: টেট্রাহেড্রাল (১০৯.৫°)', 'Methane CH₄: Tetrahedral 109.5°', 'CH₄', '#38bdf8');

      // Water H2O (Bent 104.5 deg)
      const h2o = new THREE.Group();
      h2o.position.set(1.8, 0, 0);
      group.add(h2o);

      const o = new THREE.Mesh(new THREE.SphereGeometry(0.55, 20, 20), new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.4 }));
      h2o.add(o);

      [-0.8, 0.8].forEach((x, i) => {
        const hm = new THREE.Mesh(new THREE.SphereGeometry(0.25, 14, 14), new THREE.MeshStandardMaterial({ color: 0x38bdf8 }));
        hm.position.set(x, -0.7, 0);
        h2o.add(hm);
      });
      addAnchor(h2o, 'পানি গাঁঠনিক রূপ: কৌণিক / বেন্ট (১০৪.৫°)', 'Water H₂O: Bent Structure 104.5°', 'H₂O', '#ef4444');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 8: অষ্টক নিয়ম ও দুইয়ের নিয়ম (Octet & Duet Rule)
    // -----------------------------------------------------------------------
    if (slideId === 8) {
      // Neon 8-electron Octet Ring
      const neGroup = new THREE.Group();
      neGroup.position.set(1.4, 0, 0);
      group.add(neGroup);

      const neCore = new THREE.Mesh(new THREE.SphereGeometry(0.55, 20, 20), new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x7e22ce, emissiveIntensity: 0.6 }));
      neGroup.add(neCore);

      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        const e = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 12), new THREE.MeshStandardMaterial({ color: 0x34d399, emissive: 0x059669, emissiveIntensity: 0.8 }));
        e.position.set(Math.cos(a) * 1.4, Math.sin(a) * 1.4, 0);
        neGroup.add(e);
      }
      addAnchor(neGroup, 'নিয়ন: অষ্টক নিয়ম (৮টি ইলেকট্রন)', 'Neon: Octet Rule (8 electrons)', 'Ne (2,8)', '#a855f7');

      // Helium 2-electron Duet Ring
      const heGroup = new THREE.Group();
      heGroup.position.set(-1.8, 0, 0);
      group.add(heGroup);

      const heCore = new THREE.Mesh(new THREE.SphereGeometry(0.45, 20, 20), new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 }));
      heGroup.add(heCore);

      [-1.0, 1.0].forEach(x => {
        const e = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 12), new THREE.MeshStandardMaterial({ color: 0x34d399, emissive: 0x059669, emissiveIntensity: 0.8 }));
        e.position.set(x, 0, 0);
        heGroup.add(e);
      });
      addAnchor(heGroup, 'হিলিয়াম: দুইয়ের নিয়ম (১ম শেলে ২টি)', 'Helium: Duet Rule (2 electrons)', 'He (1s²)', '#38bdf8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 9: আয়নিক বন্ধন গঠন (Electron Transfer: Na + Cl -> Na+ + Cl-)
    // -----------------------------------------------------------------------
    if (slideId === 9) {
      // Sodium Cation Na+
      const na = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 })
      );
      na.position.set(-1.8, 0, 0);
      group.add(na);
      addAnchor(na, 'সোডিয়াম ক্যাটায়ন (Na⁺: ২,৮)', 'Sodium Cation (Na⁺)', 'Na⁺', '#38bdf8');

      // Chloride Anion Cl-
      const cl = new THREE.Mesh(
        new THREE.SphereGeometry(0.85, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.6 })
      );
      cl.position.set(1.8, 0, 0);
      group.add(cl);
      addAnchor(cl, 'ক্লোরাইড অ্যানায়ন (Cl⁻: ২,৮,৮)', 'Chloride Anion (Cl⁻)', 'Cl⁻', '#10b981');

      // Electron Transfer Vector Arrow
      const transferArrow = new THREE.ArrowHelper(
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(-1.1, 0.4, 0),
        2.1,
        0xfacc15,
        0.5,
        0.3
      );
      group.add(transferArrow);
      addAnchor(transferArrow, 'ইলেকট্রন স্থানান্তর ও স্থির-তড়িৎ আকর্ষণ', 'Electron Transfer & Coulomb Force', 'e⁻ Transfer', '#facc15');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 10: সমযোজী বন্ধন (Covalent Bond: Electron Sharing)
    // -----------------------------------------------------------------------
    if (slideId === 10) {
      // Two Oxygen atoms sharing 2 pairs of electrons (O = O)
      const o1 = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.4 }));
      o1.position.set(-1.4, 0, 0);
      group.add(o1);

      const o2 = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.4 }));
      o2.position.set(1.4, 0, 0);
      group.add(o2);

      // Double bond shared electron cylinders
      [-0.25, 0.25].forEach(y => {
        const bondCyl = new THREE.Mesh(
          new THREE.CylinderGeometry(0.1, 0.1, 2.0, 16),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.7 })
        );
        bondCyl.position.set(0, y, 0);
        bondCyl.rotation.z = Math.PI / 2;
        group.add(bondCyl);
      });
      addAnchor(group, 'অক্সিজেন দ্বি-বন্ধন (O = O): ৪টি ইলেকট্রন শেয়ার', 'Oxygen Double Covalent Bond (O=O)', 'O = O', '#38bdf8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 11: ধাতব বন্ধন ও মুক্ত ইলেকট্রন সমুদ্র (Metallic Bond Electron Sea)
    // -----------------------------------------------------------------------
    if (slideId === 11) {
      const seaGroup = new THREE.Group();
      group.add(seaGroup);
      refs.metallicSea = seaGroup;

      // Regular 3x3 Lattice of Positive Metal Cations
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          const ion = new THREE.Mesh(
            new THREE.SphereGeometry(0.35, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 })
          );
          ion.position.set(x * 1.5, y * 1.5, 0);
          seaGroup.add(ion);
        }
      }
      addAnchor(seaGroup, 'ধাতব ক্যাটায়ন ও সঞ্চারণশীল ইলেকট্রন সমুদ্র', 'Metal Cations & Delocalized Electron Sea', 'M⁺ + e⁻ sea', '#38bdf8');

      // Floating Delocalized Electron Clouds
      for (let i = 0; i < 16; i++) {
        const de = new THREE.Mesh(
          new THREE.SphereGeometry(0.1, 10, 10),
          new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 0.9 })
        );
        de.position.set((Math.random() - 0.5) * 3.6, (Math.random() - 0.5) * 3.6, (Math.random() - 0.5) * 1.2);
        seaGroup.add(de);
      }
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 12: আয়নিক ও সমযোজী যৌগের বৈশিষ্ট্যের তুলনা (Melting Points & Cleavage)
    // -----------------------------------------------------------------------
    if (slideId === 12) {
      // Rigid NaCl Cube
      const naclCube = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 1.8, 1.8),
        new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.2, emissive: 0x059669, emissiveIntensity: 0.4 })
      );
      naclCube.position.set(-1.8, 0, 0);
      group.add(naclCube);
      addAnchor(naclCube, 'আয়নিক যৌগ (NaCl): উচ্চ গলনাঙ্ক (৮০১°C) ও শক্ত', 'Ionic Lattice (High MP 801°C)', 'NaCl(s)', '#10b981');

      // Loose Soft Molecular Solid (e.g. Naphthalene / Ice)
      const covSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.9, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.7, roughness: 0.5 })
      );
      covSphere.position.set(1.8, 0, 0);
      group.add(covSphere);
      addAnchor(covSphere, 'সমযোজী যৌগ: নিম্ন গলনাঙ্ক ও দুর্বল ভ্যান ডার ওয়ালস বল', 'Covalent Solid (Low MP)', 'Covalent', '#38bdf8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 13: দ্রাব্যতা ও পোলারিটি (Water Hydrating NaCl Ions)
    // -----------------------------------------------------------------------
    if (slideId === 13) {
      // Central Na+ Cation
      const naCore = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.7 })
      );
      group.add(naCore);
      addAnchor(naCore, 'সোডিয়াম আয়ন (Na⁺) হাইড্রেটেড হচ্ছে', 'Hydrated Sodium Ion (Na⁺)', 'Na⁺ (aq)', '#38bdf8');

      // 4 Surrounding Water Dipoles with Negative Oxygen pointing inward
      for (let i = 0; i < 4; i++) {
        const ang = (i / 4) * Math.PI * 2;
        const wDist = 1.6;
        const oMesh = new THREE.Mesh(
          new THREE.SphereGeometry(0.3, 16, 16),
          new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.5 })
        );
        oMesh.position.set(Math.cos(ang) * wDist, Math.sin(ang) * wDist, 0);
        group.add(oMesh);

        // Connecting hydration attraction lines
        const lineGeo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(0, 0, 0),
          oMesh.position
        ]);
        group.add(new THREE.Line(lineGeo, new THREE.LineDashedMaterial({ color: 0xfacc15, dashSize: 0.1, gapSize: 0.1 })));
      }
      addAnchor(group, 'পোলার পানির অণু কর্তৃক Na⁺ ও Cl⁻ এর দ্রবণীয়করণ', 'Solvation of Salt by Polar Water Dipoles', 'Hydration', '#facc15');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 14: বিদ্যুৎ পরিবাহিতা পরীক্ষা (Conductivity Electrolyte Apparatus)
    // -----------------------------------------------------------------------
    if (slideId === 14) {
      // Beaker
      const beaker = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 1.6, 2.4, 32, 1, true),
        new THREE.MeshPhysicalMaterial({ color: 0x64748b, transparent: true, opacity: 0.35, roughness: 0.1 })
      );
      beaker.position.set(0, -0.6, 0);
      group.add(beaker);

      // Two Electrodes (Cathode & Anode)
      [-0.7, 0.7].forEach((x, idx) => {
        const rod = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.12, 2.6, 16),
          new THREE.MeshStandardMaterial({ color: idx === 0 ? 0xef4444 : 0x38bdf8, metalness: 0.9 })
        );
        rod.position.set(x, -0.2, 0);
        group.add(rod);
        addAnchor(rod, idx === 0 ? 'ক্যাথোড (-) তড়িৎদ্বার' : 'অ্যানোড (+) তড়িৎদ্বার', idx === 0 ? 'Cathode (-)' : 'Anode (+)', idx === 0 ? 'Cathode' : 'Anode', idx === 0 ? '#ef4444' : '#38bdf8');
      });

      // Top Glowing Incandescent Bulb
      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 1.0 })
      );
      bulb.position.set(0, 1.8, 0);
      group.add(bulb);
      addAnchor(bulb, 'জলীয় দ্রবণে মুক্ত আয়ন দ্বারা বিদ্যুৎ পরিবহন (বাল্ব জ্বলছে)', 'Electrolytic Conduction (Light Bulb Glows)', 'Light ON', '#facc15');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 15: অধ্যায় ৫ সম্পূর্ণ সারসংক্ষেপ (Three Pillars of Chemical Bonding)
    // -----------------------------------------------------------------------
    if (slideId === 15) {
      const summaryGroup = new THREE.Group();
      group.add(summaryGroup);

      // Pillar 1: Ionic Bond
      const p1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.8, 1.2), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.5 }));
      p1.position.set(-2.2, 0, 0);
      summaryGroup.add(p1);
      addAnchor(p1, '১. আয়নিক বন্ধন: ইলেকট্রন আদান-প্রদান', 'Ionic: Electron Transfer', 'Ionic', '#10b981');

      // Pillar 2: Covalent Bond
      const p2 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.8, 1.2), new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 }));
      p2.position.set(0, 0, 0);
      summaryGroup.add(p2);
      addAnchor(p2, '২. সমযোজী বন্ধন: ইলেকট্রন শেয়ারিং', 'Covalent: Electron Sharing', 'Covalent', '#38bdf8');

      // Pillar 3: Metallic Bond
      const p3 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.8, 1.2), new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.5 }));
      p3.position.set(2.2, 0, 0);
      summaryGroup.add(p3);
      addAnchor(p3, '৩. ধাতব বন্ধন: সঞ্চারণশীল ইলেকট্রন সমুদ্র', 'Metallic: Electron Sea', 'Metallic', '#f59e0b');
      return;
    }
  }
}

/**
 * Handles Real-time Animation Loop Updates for Chemistry Chapter 4 & 5
 */
export function updateChemistryCh4Ch5Physics(
  slideId: number,
  time: number,
  refs: any,
  chapter: number
) {
  // Chapter 4 Animations
  if (chapter === 4) {
    if (slideId === 1 && refs.periodicMasterGroup) {
      refs.periodicMasterGroup.rotation.y = time * 0.2;
    }
    if (slideId === 6 && refs.valenceOrbit) {
      refs.valenceOrbit.rotation.y = time * 0.8;
    }
    if (slideId === 10 && refs.ejectedElectron) {
      refs.ejectedElectron.position.x = 2.4 + Math.sin(time * 2.0) * 0.4;
      refs.ejectedElectron.position.y = 1.0 + Math.cos(time * 2.0) * 0.4;
    }
    if (slideId === 14 && refs.trendCompass) {
      refs.trendCompass.rotation.y = time * 0.3;
    }
  }

  // Chapter 5 Animations
  if (chapter === 5) {
    if (slideId === 11 && refs.metallicSea) {
      refs.metallicSea.children.forEach((c: any, idx: number) => {
        if (c.geometry instanceof THREE.SphereGeometry && c.geometry.parameters.radius < 0.2) {
          c.position.x += Math.sin(time * 4.0 + idx) * 0.02;
          c.position.y += Math.cos(time * 4.0 + idx) * 0.02;
        }
      });
    }
  }
}
