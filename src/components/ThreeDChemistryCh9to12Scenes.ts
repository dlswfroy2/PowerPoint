/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as THREE from 'three';

type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;

/**
 * Builds rich, dedicated 3D interactive models for all slides in Chemistry Chapters 9, 10, 11, and 12
 */
export function buildChemistryCh9to12Scene(
  slideId: number,
  chapter: number,
  group: THREE.Group,
  refs: any,
  addAnchor: AddAnchorFn
) {
  refs.chemCh912Slide = slideId;
  refs.chemCh912Chapter = chapter;

  // =========================================================================
  // CHAPTER 9: এসিড-ক্ষার সমতা (ACID-BASE BALANCE)
  // =========================================================================
  if (chapter === 9) {
    if (slideId === 1 || slideId === 2) {
      // 1 & 2: Acid/Base Dissociation & Arrhenius Ions (H3O+ and OH-)
      const ionGroup = new THREE.Group();
      group.add(ionGroup);
      refs.acidBaseIonGroup = ionGroup;

      // Hydronium Ion H3O+ (Oxygen in center, 3 Hydrogens, tetrahedral pyramid)
      const hydronium = new THREE.Group();
      hydronium.position.set(-2.5, 0.4, 0);
      ionGroup.add(hydronium);

      const oMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.2, emissive: 0x991b1b, emissiveIntensity: 0.4 });
      const oMesh = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), oMat);
      hydronium.add(oMesh);

      const hMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2 });
      const hPositions = [
        [0.7, -0.4, 0.4],
        [-0.7, -0.4, 0.4],
        [0.0, -0.4, -0.8]
      ];
      hPositions.forEach(p => {
        const hMesh = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), hMat);
        hMesh.position.set(p[0], p[1], p[2]);
        hydronium.add(hMesh);

        const bGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.7, 12);
        const bMesh = new THREE.Mesh(bGeo, new THREE.MeshStandardMaterial({ color: 0x94a3b8 }));
        bMesh.position.set(p[0] * 0.5, p[1] * 0.5, p[2] * 0.5);
        bMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(...p).normalize());
        hydronium.add(bMesh);
      });
      addAnchor(hydronium, 'হাইড্রোনিয়াম আয়ন (H₃O⁺) — এসিডের সক্রিয় রূপ', 'Hydronium Ion (H3O+)', 'H₃O⁺', '#ef4444');

      // Hydroxide Ion OH-
      const hydroxide = new THREE.Group();
      hydroxide.position.set(2.5, 0.4, 0);
      ionGroup.add(hydroxide);

      const oBaseMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.2, emissive: 0x1d4ed8, emissiveIntensity: 0.4 });
      const oBaseMesh = new THREE.Mesh(new THREE.SphereGeometry(0.68, 24, 24), oBaseMat);
      hydroxide.add(oBaseMesh);

      const hBaseMesh = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), hMat);
      hBaseMesh.position.set(0.7, 0, 0);
      hydroxide.add(hBaseMesh);

      const bBase = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.7, 12), new THREE.MeshStandardMaterial({ color: 0x94a3b8 }));
      bBase.position.set(0.35, 0, 0);
      bBase.rotation.z = Math.PI / 2;
      hydroxide.add(bBase);
      addAnchor(hydroxide, 'হাইড্রক্সাইড আয়ন (OH⁻) — ক্ষারের সক্রিয় রূপ', 'Hydroxide Ion (OH-)', 'OH⁻', '#3b82f6');

      // Beaker container
      const beakerGeo = new THREE.CylinderGeometry(3.6, 3.6, 2.2, 32, 1, true);
      const beakerMat = new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.2, roughness: 0.1 });
      const beaker = new THREE.Mesh(beakerGeo, beakerMat);
      beaker.position.y = -0.5;
      ionGroup.add(beaker);
    }
    else if (slideId === 3 || slideId === 4) {
      // 3 & 4: The 3D 14-Color pH Spectrum Cylinder & Digital Glass Electrode
      const phGroup = new THREE.Group();
      group.add(phGroup);
      refs.phScaleGroup = phGroup;

      const phColors = [
        0xdc2626, 0xe11d48, 0xea580c, 0xf97316, 0xf59e0b, 0xeab308, 0x84cc16, // 0 to 6 (Acidic: Red to Yellow-green)
        0x10b981, // 7 Neutral (Pure Green)
        0x06b6d4, 0x0284c7, 0x3b82f6, 0x6366f1, 0x8b5cf6, 0x6b21a8, 0x4c1d95  // 8 to 14 (Basic: Cyan to Deep Purple)
      ];

      phColors.forEach((col, i) => {
        const segGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.45, 24);
        const segMat = new THREE.MeshStandardMaterial({
          color: col,
          roughness: 0.3,
          emissive: col,
          emissiveIntensity: i === 7 ? 0.7 : 0.35
        });
        const seg = new THREE.Mesh(segGeo, segMat);
        seg.position.set(-3.5 + i * 0.5, 0, 0);
        phGroup.add(seg);
        if (i === 0) addAnchor(seg, 'তীব্র অম্লীয় (pH 0-1) HCl', 'Strong Acidic', 'pH 0', '#dc2626');
        if (i === 7) addAnchor(seg, 'নিরপেক্ষ বিন্দু (pH 7.0) বিশুদ্ধ পানি', 'Neutral Water', 'pH 7', '#10b981');
        if (i === 14) addAnchor(seg, 'তীব্র ক্ষারীয় (pH 14) NaOH', 'Strong Alkaline', 'pH 14', '#4c1d95');
      });

      // Digital Glass Electrode Probe Model
      const probeGroup = new THREE.Group();
      probeGroup.position.set(0, 1.8, 0);
      phGroup.add(probeGroup);

      const glassBulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 20, 20),
        new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65, roughness: 0.1 })
      );
      probeGroup.add(glassBulb);

      const shaft = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.18, 2.0, 16),
        new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.6 })
      );
      shaft.position.y = 1.0;
      probeGroup.add(shaft);
      addAnchor(probeGroup, 'ডিজিটাল pH মিটার সেন্সর কাচ ইলেকট্রোড', 'Digital pH Electrode Probe', 'pH Sensor', '#38bdf8');
    }
    else if (slideId === 5 || slideId === 6) {
      // 5 & 6: Acid-Base Titration: Burette, Stopcock, Erlenmeyer Flask & Pink Phenolphthalein
      const titrGroup = new THREE.Group();
      group.add(titrGroup);
      refs.titration3DGroup = titrGroup;

      // Erlenmeyer Flask
      const flaskGeo = new THREE.CylinderGeometry(0.45, 1.9, 2.6, 32);
      const flaskMat = new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.35, roughness: 0.1 });
      const flask = new THREE.Mesh(flaskGeo, flaskMat);
      flask.position.y = -1.2;
      titrGroup.add(flask);

      // Titration Solution (Turning Pink Phenolphthalein End Point)
      const solnGeo = new THREE.CylinderGeometry(0.42, 1.8, 1.4, 32);
      const solnMat = new THREE.MeshStandardMaterial({
        color: 0xf43f5e,
        transparent: true,
        opacity: 0.75,
        roughness: 0.2,
        emissive: 0xe11d48,
        emissiveIntensity: 0.5
      });
      const soln = new THREE.Mesh(solnGeo, solnMat);
      soln.position.y = -1.7;
      titrGroup.add(soln);
      addAnchor(soln, 'প্রশমন সমাপ্তি বিন্দু (গোলাপী ফেনলফথ্যালিন)', 'Neutralization Endpoint', 'V₁S₁ = V₂S₂', '#f43f5e');

      // Burette Tube Above
      const buretteGeo = new THREE.CylinderGeometry(0.18, 0.18, 3.2, 20);
      const buretteMat = new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.5 });
      const burette = new THREE.Mesh(buretteGeo, buretteMat);
      burette.position.y = 1.8;
      titrGroup.add(burette);

      // Burette Fluid column inside
      const fluidGeo = new THREE.CylinderGeometry(0.14, 0.14, 2.4, 16);
      const fluidMat = new THREE.MeshStandardMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.8 });
      const fluid = new THREE.Mesh(fluidGeo, fluidMat);
      fluid.position.y = 1.8;
      titrGroup.add(fluid);
      addAnchor(burette, 'ব্যুরেট দ্রবণ (প্রমাণ NaOH ক্ষার)', 'Standard Burette NaOH', 'Burette', '#60a5fa');

      // Droplet falling
      const dropGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const dropMat = new THREE.MeshStandardMaterial({ color: 0x60a5fa, emissive: 0x3b82f6 });
      const drop = new THREE.Mesh(dropGeo, dropMat);
      drop.position.y = 0.1;
      titrGroup.add(drop);
      refs.titrationDrop = drop;
    }
    else if (slideId === 8) {
      // 8: Acid Rain (H2SO4 & HNO3 attacking CaCO3 Marble)
      const rainGroup = new THREE.Group();
      group.add(rainGroup);
      refs.acidRainGroup = rainGroup;

      // Marble Monument Block (CaCO3)
      const marbleGeo = new THREE.BoxGeometry(2.4, 2.0, 2.4);
      const marbleMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.6, metalness: 0.1 });
      const marble = new THREE.Mesh(marbleGeo, marbleMat);
      marble.position.y = -1.0;
      rainGroup.add(marble);
      addAnchor(marble, 'মার্বেল পাথর (CaCO₃) — এসিড বৃষ্টিতে ক্ষয়', 'Marble Monument (CaCO3)', 'CaCO₃', '#e2e8f0');

      // Acid Rain droplets falling
      const rainDrops = new THREE.Group();
      rainGroup.add(rainDrops);
      refs.rainDrops = rainDrops;

      for (let i = 0; i < 28; i++) {
        const drop = new THREE.Mesh(
          new THREE.CylinderGeometry(0.02, 0.05, 0.3, 8),
          new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.7 })
        );
        drop.position.set((Math.random() - 0.5) * 4.5, Math.random() * 3.5, (Math.random() - 0.5) * 4.5);
        rainDrops.add(drop);
      }
      addAnchor(rainDrops, 'এসিড বৃষ্টির ধারা (H₂SO₄ + HNO₃, pH < 5.6)', 'Acid Rain Droplets', 'pH < 5.6', '#f59e0b');
    }
    else {
      // 7, 9, 10: Salt Hydrolysis & Safety Flasks
      const saltGroup = new THREE.Group();
      group.add(saltGroup);

      // NaCl Crystal Core
      const crystalGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
      const crystalMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, wireframe: true });
      const crystal = new THREE.Mesh(crystalGeo, crystalMat);
      saltGroup.add(crystal);
      addAnchor(crystal, 'স্বাভাবিক লবণ কেলাস জালিকা (NaCl)', 'Salt Crystal Lattice', 'Na⁺Cl⁻', '#38bdf8');

      // Hydration Water Shell
      const shellGeo = new THREE.SphereGeometry(1.8, 20, 20);
      const shellMat = new THREE.MeshPhysicalMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.25 });
      const shell = new THREE.Mesh(shellGeo, shellMat);
      saltGroup.add(shell);
      addAnchor(shell, 'আর্দ্রবিশ্লেষণ পানি স্তর (Hydration Shell)', 'Water Solvation', 'H₂O', '#06b6d4');
    }
  }

  // =========================================================================
  // CHAPTER 10: খনিজ সম্পদ — ধাতু ও অধাতু (METALLURGY & MINERALS)
  // =========================================================================
  else if (chapter === 10) {
    if (slideId === 4) {
      // 4: Blast Furnace (বাত্যাচুল্লি) — Iron Extraction
      const furnaceGroup = new THREE.Group();
      group.add(furnaceGroup);
      refs.blastFurnaceGroup = furnaceGroup;

      // Main Tall Conical Blast Furnace Tower
      const towerBottom = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 2.2, 2.8, 32),
        new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.5, metalness: 0.6 })
      );
      towerBottom.position.y = -0.8;
      furnaceGroup.add(towerBottom);

      const towerTop = new THREE.Mesh(
        new THREE.CylinderGeometry(1.0, 1.6, 2.6, 32),
        new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.5, metalness: 0.6 })
      );
      towerTop.position.y = 1.9;
      furnaceGroup.add(towerTop);

      // Glowing Tuyere Combustion Zone (1500°C - 1900°C)
      const glowGeo = new THREE.TorusGeometry(1.8, 0.25, 16, 32);
      const glowMat = new THREE.MeshStandardMaterial({
        color: 0xf97316,
        emissive: 0xea580c,
        emissiveIntensity: 1.5,
        roughness: 0.2
      });
      const glowRing = new THREE.Mesh(glowGeo, glowMat);
      glowRing.rotation.x = Math.PI / 2;
      glowRing.position.y = -1.2;
      furnaceGroup.add(glowRing);
      addAnchor(glowRing, 'দহন অঞ্চল (১৫০০°-১৯০০°C) — C + O₂ ⟶ CO₂', 'Combustion Hearth (1500°C)', '1500°C', '#f97316');

      // Slag Tap (CaSiO3) & Molten Pig Iron (Fe)
      const ironPuddle = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 1.8, 0.3, 32),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.8 })
      );
      ironPuddle.position.y = -2.2;
      furnaceGroup.add(ironPuddle);
      addAnchor(ironPuddle, 'গলিত পিগ আয়রন স্তর (Fe) ও ওপরের ধাতুমল (CaSiO₃)', 'Molten Pig Iron & Slag', 'Pig Iron', '#ef4444');

      // Top hopper feed
      const hopper = new THREE.Mesh(
        new THREE.ConeGeometry(1.2, 1.2, 24, 1, true),
        new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8 })
      );
      hopper.rotation.x = Math.PI;
      hopper.position.y = 3.6;
      furnaceGroup.add(hopper);
      addAnchor(hopper, 'কাঁচামাল প্রবেশ মুখ (হেমাটাইট Fe₂O₃ + কোক C + চুনাপাথর)', 'Raw Feed Hopper', 'Fe₂O₃+C', '#38bdf8');
    }
    else if (slideId === 5) {
      // 5: Hall-Héroult Electrolytic Cell — Aluminium Extraction
      const hallGroup = new THREE.Group();
      group.add(hallGroup);
      refs.hallHeroultGroup = hallGroup;

      // Steel tank with carbon lining (Cathode)
      const tankGeo = new THREE.BoxGeometry(4.8, 2.2, 3.2);
      const tankMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4, metalness: 0.6 });
      const tank = new THREE.Mesh(tankGeo, tankMat);
      tank.position.y = -1.0;
      hallGroup.add(tank);
      addAnchor(tank, 'কার্বন লাইনিং ক্যাথোড (-) স্তর', 'Carbon Cathode Lining', 'Cathode (-)', '#1e293b');

      // Molten Cryolite + Al2O3 bath (950°C)
      const bathGeo = new THREE.BoxGeometry(4.4, 1.4, 2.8);
      const bathMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        emissive: 0xd97706,
        emissiveIntensity: 0.7,
        transparent: true,
        opacity: 0.8
      });
      const bath = new THREE.Mesh(bathGeo, bathMat);
      bath.position.y = -0.7;
      hallGroup.add(bath);
      addAnchor(bath, 'গলিত ক্রায়োলাইট (Na₃AlF₆) + অ্যালুমিনা দ্রবণ (৯৫০°C)', 'Molten Cryolite Bath', 'Na₃AlF₆', '#f59e0b');

      // 4 Suspended Carbon Anode Rods (+)
      for (let i = 0; i < 4; i++) {
        const rodGeo = new THREE.CylinderGeometry(0.24, 0.24, 2.4, 16);
        const rodMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.7, metalness: 0.3 });
        const rod = new THREE.Mesh(rodGeo, rodMat);
        rod.position.set(-1.5 + i * 1.0, 0.6, 0);
        hallGroup.add(rod);
        if (i === 1) addAnchor(rod, 'কার্বন গ্রাফাইট অ্যানোড রড (+)', 'Carbon Anode Rods (+)', 'Anode (+)', '#0284c7');
      }

      // Molten Aluminum pool at bottom
      const alPool = new THREE.Mesh(
        new THREE.BoxGeometry(4.4, 0.3, 2.8),
        new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.1 })
      );
      alPool.position.y = -1.9;
      hallGroup.add(alPool);
      addAnchor(alPool, 'তলায় জমা ৯৯.৫% বিশুদ্ধ গলিত Al ধাতু', 'Pure Molten Aluminium', 'Al (liquid)', '#e2e8f0');
    }
    else if (slideId === 6) {
      // 6: Copper Refining Electrolytic Cell & Anode Mud
      const cuGroup = new THREE.Group();
      group.add(cuGroup);
      refs.copperRefiningGroup = cuGroup;

      // Tank with CuSO4 Blue Electrolyte
      const tank = new THREE.Mesh(
        new THREE.BoxGeometry(4.4, 2.6, 2.8),
        new THREE.MeshPhysicalMaterial({ color: 0x0284c7, transparent: true, opacity: 0.5, roughness: 0.1 })
      );
      tank.position.y = -0.4;
      cuGroup.add(tank);
      addAnchor(tank, 'তড়িৎ বিশ্লেষ্য দ্রবণ (CuSO₄ + H₂SO₄)', 'CuSO4 Electrolyte', 'Cu²⁺ + SO₄²⁻', '#0284c7');

      // Thick Impure Blister Copper Anode (+)
      const anodeGeo = new THREE.BoxGeometry(0.35, 2.2, 1.8);
      const anodeMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.7, metalness: 0.4 });
      const anode = new THREE.Mesh(anodeGeo, anodeMat);
      anode.position.set(-1.3, 0.2, 0);
      cuGroup.add(anode);
      addAnchor(anode, 'অবিশুদ্ধ ব্লিস্টার কপার অ্যানোড (+)', 'Impure Copper Anode', 'Cu (Impure)', '#b45309');

      // Thin Pure Copper Cathode Starter Sheet (-)
      const cathodeGeo = new THREE.BoxGeometry(0.12, 2.2, 1.8);
      const cathodeMat = new THREE.MeshStandardMaterial({ color: 0xf97316, metalness: 0.8, roughness: 0.2 });
      const cathode = new THREE.Mesh(cathodeGeo, cathodeMat);
      cathode.position.set(1.3, 0.2, 0);
      cuGroup.add(cathode);
      addAnchor(cathode, '৯৯.৯৯% বিশুদ্ধ কপার সঞ্চিত ক্যাথোড (-)', 'Pure 99.99% Cu Cathode', '99.99% Cu', '#f97316');

      // Precious Anode Mud at Bottom (Gold, Silver, Platinum)
      const mud = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.25, 1.6),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.6, roughness: 0.4 })
      );
      mud.position.set(-1.3, -1.5, 0);
      cuGroup.add(mud);
      addAnchor(mud, 'অ্যানোড মাড / মূল্যবান স্লাজ (Au, Ag, Pt)', 'Anode Mud (Au, Ag, Pt)', 'Anode Mud', '#facc15');
    }
    else if (slideId === 8) {
      // 8: Rusting Mechanism (Fe2O3.xH2O Electrochemical Pit)
      const rustGroup = new THREE.Group();
      group.add(rustGroup);
      refs.rustingGroup = rustGroup;

      // Iron Base Plate
      const ironPlate = new THREE.Mesh(
        new THREE.BoxGeometry(4.6, 0.8, 3.2),
        new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8, roughness: 0.3 })
      );
      ironPlate.position.y = -1.2;
      rustGroup.add(ironPlate);
      addAnchor(ironPlate, 'লোহার পৃষ্ঠতল (অ্যানোড Fe ⟶ Fe²⁺ + 2e⁻)', 'Iron Base Anode', 'Fe (s)', '#475569');

      // Water Droplet (Electrolyte)
      const dropGeo = new THREE.SphereGeometry(1.6, 32, 16);
      dropGeo.scale(1.2, 0.5, 1.0);
      const dropMat = new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6, roughness: 0.1 });
      const waterDrop = new THREE.Mesh(dropGeo, dropMat);
      waterDrop.position.y = -0.5;
      rustGroup.add(waterDrop);
      addAnchor(waterDrop, 'পানির ফোঁটা (তড়িৎ বিশ্লেষ্য ও O₂ দ্রবীভূত স্তর)', 'Water Droplet', 'H₂O + O₂', '#38bdf8');

      // Rust Flake Crust (Fe2O3.xH2O)
      const rustCrust = new THREE.Mesh(
        new THREE.TorusGeometry(0.8, 0.28, 16, 24),
        new THREE.MeshStandardMaterial({ color: 0x9a3412, roughness: 0.9, metalness: 0.1 })
      );
      rustCrust.rotation.x = Math.PI / 2;
      rustCrust.position.y = -0.7;
      rustGroup.add(rustCrust);
      addAnchor(rustCrust, 'মরিচা ক্রাস্ট (Fe₂O₃·xH₂O বাদামী গুঁড়া)', 'Hydrated Iron Oxide Rust', 'Fe₂O₃·xH₂O', '#9a3412');
    }
    else {
      // 1, 2, 3, 7, 9, 10: Raw Ores & Alloy Crystal Structures (Brass, Steel, Bauxite)
      const oreGroup = new THREE.Group();
      group.add(oreGroup);

      // Hematite / Bauxite Polyhedral Rock
      const oreGeo = new THREE.DodecahedronGeometry(1.6, 1);
      const oreMat = new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.8, metalness: 0.3 });
      const oreMesh = new THREE.Mesh(oreGeo, oreMat);
      oreGroup.add(oreMesh);
      addAnchor(oreMesh, 'প্রাকৃতিক আকরিক স্ফটিক খণ্ড (হেমাটাইট/বক্সাইট)', 'Mineral Ore Specimen', 'Ore', '#b45309');

      // Reactivity Ring
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(2.3, 0.08, 16, 64),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7 })
      );
      ring.rotation.x = Math.PI / 2;
      oreGroup.add(ring);
      addAnchor(ring, 'ধাতুর সক্রিয়তা সিরিজ কক্ষপথ (K > Na > Ca > ... > Au)', 'Reactivity Series Orbit', 'Reactivity', '#38bdf8');
    }
  }

  // =========================================================================
  // CHAPTER 11: খনিজ সম্পদ — জীবাশ্ম (FOSSILS & HYDROCARBONS)
  // =========================================================================
  else if (chapter === 11) {
    if (slideId === 2) {
      // 2: Fractional Distillation Column (আংশিক পাতন কলাম)
      const distGroup = new THREE.Group();
      group.add(distGroup);
      refs.fractionalDistillGroup = distGroup;

      // Tall Multi-stage Fractionating Tower
      const tower = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.2, 5.0, 32),
        new THREE.MeshPhysicalMaterial({ color: 0x64748b, transparent: true, opacity: 0.5, roughness: 0.2 })
      );
      distGroup.add(tower);

      // Trays with different fractions & boiling points
      const fractions = [
        { nameBn: 'পেট্রোলিয়াম গ্যাস (LPG, <২০°C, C₁-C₄)', col: 0x38bdf8, y: 2.1, sym: 'LPG' },
        { nameBn: 'পেট্রোল বা গ্যাসোলিন (৭০°C, C₅-C₈)', col: 0x10b981, y: 1.3, sym: 'Petrol' },
        { nameBn: 'ন্যাপথা ও কেরোসিন (১৭০°C, C₉-C₁₂)', col: 0xf59e0b, y: 0.4, sym: 'Kerosene' },
        { nameBn: 'ডিজেল ও জ্বালানি তেল (২৭০°C, C₁₃-C₁₈)', col: 0xf97316, y: -0.5, sym: 'Diesel' },
        { nameBn: 'লুব্রিকেটিং তেল ও প্যারাফিন মোম (৩৫০°C)', col: 0xef4444, y: -1.3, sym: 'Wax' },
        { nameBn: 'বিটুমিন বা পিচ অবশেষ (>৩৫০°C, C₇₀+)', col: 0x1e293b, y: -2.1, sym: 'Bitumen' },
      ];

      fractions.forEach((f, idx) => {
        const tray = new THREE.Mesh(
          new THREE.CylinderGeometry(1.15, 1.15, 0.22, 32),
          new THREE.MeshStandardMaterial({ color: f.col, emissive: f.col, emissiveIntensity: 0.5 })
        );
        tray.position.y = f.y;
        distGroup.add(tray);
        addAnchor(tray, f.nameBn, `Fraction: ${f.sym}`, f.sym, `#${f.col.toString(16)}`);
      });

      // Bottom Crude Oil Inflow Furnace Pipe
      const pipe = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 2.2, 16),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 })
      );
      pipe.rotation.z = Math.PI / 2;
      pipe.position.set(-1.8, -2.1, 0);
      distGroup.add(pipe);
      addAnchor(pipe, 'উত্তপ্ত অপরিশোধিত তেল প্রবেশ (৪০০°C)', 'Crude Oil Inflow (400°C)', 'Crude 400°C', '#0f172a');
    }
    else if (slideId === 4 || slideId === 5 || slideId === 6) {
      // 4, 5, 6: Hydrocarbon Molecules (Alkane Methane/Ethane, Alkene Ethene C=C, Alkyne Ethyne C≡C)
      const hydroGroup = new THREE.Group();
      group.add(hydroGroup);
      refs.hydrocarbonGroup = hydroGroup;

      const cMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.2 });
      const hMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2 });

      if (slideId === 5) {
        // Alkene Ethene H2C=CH2 with Double Bond (C=C)
        const c1 = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), cMat);
        c1.position.set(-1.1, 0, 0);
        hydroGroup.add(c1);

        const c2 = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), cMat);
        c2.position.set(1.1, 0, 0);
        hydroGroup.add(c2);

        // Double bond (2 parallel cylinders)
        [-0.2, 0.2].forEach(off => {
          const bMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.2, 12), new THREE.MeshStandardMaterial({ color: 0xf59e0b }));
          bMesh.rotation.z = Math.PI / 2;
          bMesh.position.set(0, off, 0);
          hydroGroup.add(bMesh);
        });
        addAnchor(c1, 'ইথিন দ্বিবন্ধন (CH₂=CH₂) — পাই (π) ও সিগমা (σ) বন্ধন', 'Ethene C=C Double Bond', 'C=C', '#f59e0b');

        // 4 Hydrogens
        [[-1.8, 0.9], [-1.8, -0.9], [1.8, 0.9], [1.8, -0.9]].forEach(hp => {
          const h = new THREE.Mesh(new THREE.SphereGeometry(0.36, 16, 16), hMat);
          h.position.set(hp[0], hp[1], 0);
          hydroGroup.add(h);
        });
      }
      else if (slideId === 6) {
        // Alkyne Ethyne HC≡CH with Triple Bond (C≡C)
        const c1 = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), cMat);
        c1.position.set(-1.1, 0, 0);
        hydroGroup.add(c1);

        const c2 = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), cMat);
        c2.position.set(1.1, 0, 0);
        hydroGroup.add(c2);

        // Triple bond (3 cylinders)
        [-0.25, 0, 0.25].forEach(off => {
          const bMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 2.2, 12), new THREE.MeshStandardMaterial({ color: 0xef4444 }));
          bMesh.rotation.z = Math.PI / 2;
          bMesh.position.set(0, off, 0);
          hydroGroup.add(bMesh);
        });
        addAnchor(c1, 'ইথাইন ত্রিবন্ধন (CH≡CH) — দুটি পাই (π) ও একটি সিগমা (σ)', 'Ethyne C≡C Triple Bond', 'C≡C', '#ef4444');

        // 2 Linear Hydrogens
        [-2.4, 2.4].forEach(x => {
          const h = new THREE.Mesh(new THREE.SphereGeometry(0.36, 16, 16), hMat);
          h.position.set(x, 0, 0);
          hydroGroup.add(h);
        });
      }
      else {
        // Ethane H3C-CH3 Single Bond
        const c1 = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), cMat);
        c1.position.set(-1.1, 0, 0);
        hydroGroup.add(c1);

        const c2 = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), cMat);
        c2.position.set(1.1, 0, 0);
        hydroGroup.add(c2);

        const bMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 2.2, 12), new THREE.MeshStandardMaterial({ color: 0x10b981 }));
        bMesh.rotation.z = Math.PI / 2;
        hydroGroup.add(bMesh);
        addAnchor(c1, 'ইথেন একক বন্ধন (C-C প্যারাফিন σ বন্ধন)', 'Ethane C-C Single Bond', 'C-C', '#10b981');
      }
    }
    else if (slideId === 8 || slideId === 9) {
      // 8 & 9: Polymer Chain (Polythene & Nylon 6,6 Repeating Units)
      const polyGroup = new THREE.Group();
      group.add(polyGroup);
      refs.polymerGroup = polyGroup;

      for (let i = -4; i <= 4; i++) {
        const monomer = new THREE.Mesh(
          new THREE.SphereGeometry(0.48, 16, 16),
          new THREE.MeshStandardMaterial({
            color: i % 2 === 0 ? 0x06b6d4 : 0x8b5cf6,
            roughness: 0.3
          })
        );
        monomer.position.set(i * 0.9, Math.sin(i * 0.8) * 0.6, Math.cos(i * 0.8) * 0.4);
        polyGroup.add(monomer);

        if (i < 4) {
          const link = new THREE.Mesh(
            new THREE.CylinderGeometry(0.08, 0.08, 0.9, 8),
            new THREE.MeshStandardMaterial({ color: 0x94a3b8 })
          );
          link.position.set(i * 0.9 + 0.45, (Math.sin(i * 0.8) + Math.sin((i + 1) * 0.8)) * 0.3, 0);
          link.rotation.z = Math.PI / 2;
          polyGroup.add(link);
        }
      }
      addAnchor(polyGroup, 'পলিমার দীর্ঘ শিকল — [-CH₂-CH₂-]ₙ পুনরাবৃত্তি একক', 'Polymer Chain (-CH2-CH2-)n', 'Polymer (n)', '#06b6d4');
    }
    else {
      // 1, 3, 7, 10: Natural Gas Wellhead & Interconversion Hub
      const wellGroup = new THREE.Group();
      group.add(wellGroup);

      // Gas Pipeline & Valve
      const valve = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.25, 16, 32),
        new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.8 })
      );
      wellGroup.add(valve);
      addAnchor(valve, 'প্রাকৃতিক গ্যাস ও মিথেন ওয়েলহেড (৯৯.৯৯% CH₄)', 'Natural Gas Wellhead', 'CH₄', '#0284c7');
    }
  }

  // =========================================================================
  // CHAPTER 12: আমাদের জীবনে রসায়ন (CHEMISTRY IN OUR LIVES)
  // =========================================================================
  else if (chapter === 12) {
    if (slideId === 4 || slideId === 5) {
      // 4 & 5: Soap Molecule & Spherical Micelle (মাইসেল গঠন ও পরিষ্কারকরণ মেকানিজম)
      const micelleGroup = new THREE.Group();
      group.add(micelleGroup);
      refs.micelle3DGroup = micelleGroup;

      // Central Grease / Oil Droplet (Hydrophobic core)
      const greaseGeo = new THREE.SphereGeometry(1.2, 24, 24);
      const greaseMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        roughness: 0.6,
        emissive: 0xd97706,
        emissiveIntensity: 0.4
      });
      const grease = new THREE.Mesh(greaseGeo, greaseMat);
      micelleGroup.add(grease);
      addAnchor(grease, 'ময়লা ও তেল/চর্বি কণা (হাইড্রোফোবিক কেন্দ্র)', 'Central Grease/Oil Core', 'Grease', '#f59e0b');

      // Surrounding Soap molecules radiating outward
      const soapCount = 20;
      for (let i = 0; i < soapCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / soapCount);
        const theta = Math.sqrt(soapCount * Math.PI) * phi;

        const dir = new THREE.Vector3(
          Math.cos(theta) * Math.sin(phi),
          Math.sin(theta) * Math.sin(phi),
          Math.cos(phi)
        );

        // Hydrocarbon Tail (Hydrophobic non-polar tail pointing inwards)
        const tailGeo = new THREE.CylinderGeometry(0.05, 0.05, 1.2, 8);
        const tailMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8 });
        const tail = new THREE.Mesh(tailGeo, tailMat);
        tail.position.copy(dir).multiplyScalar(1.8);
        tail.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        micelleGroup.add(tail);

        // Ionic Head (Hydrophilic COO- Na+ head pointing outward to water)
        const headGeo = new THREE.SphereGeometry(0.28, 16, 16);
        const headMat = new THREE.MeshStandardMaterial({
          color: 0x06b6d4,
          emissive: 0x0891b2,
          emissiveIntensity: 0.6
        });
        const head = new THREE.Mesh(headGeo, headMat);
        head.position.copy(dir).multiplyScalar(2.5);
        micelleGroup.add(head);

        if (i === 0) {
          addAnchor(head, 'হাইড্রোফিলিক পানি-আকর্ষী মাথা (-COO⁻ Na⁺)', 'Hydrophilic Ionic Head', '-COO⁻Na⁺', '#06b6d4');
        }
      }
    }
    else if (slideId === 1) {
      // 1: Baking Powder NaHCO3 Effervescence & Rising CO2 Bubbles
      const bakeGroup = new THREE.Group();
      group.add(bakeGroup);
      refs.bakingGroup = bakeGroup;

      // Dough Base
      const doughGeo = new THREE.CylinderGeometry(2.4, 2.6, 0.8, 32);
      const doughMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.7 });
      const dough = new THREE.Mesh(doughGeo, doughMat);
      dough.position.y = -1.2;
      bakeGroup.add(dough);
      addAnchor(dough, 'কেক ও পাউরুটির খামির (বেকিং পাউডার মিশ্রণ)', 'Cake Dough Matrix', 'Dough', '#fef08a');

      // Rising CO2 Gas Bubbles
      const bubbles = new THREE.Group();
      bakeGroup.add(bubbles);
      refs.co2Bubbles = bubbles;

      for (let i = 0; i < 22; i++) {
        const bubble = new THREE.Mesh(
          new THREE.SphereGeometry(0.18 + Math.random() * 0.15, 16, 16),
          new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65, roughness: 0.1 })
        );
        bubble.position.set((Math.random() - 0.5) * 3.4, -0.6 + Math.random() * 2.8, (Math.random() - 0.5) * 3.4);
        bubbles.add(bubble);
      }
      addAnchor(bubbles, 'মুক্ত CO₂ গ্যাসের বুদবুদ (কেককে ফাঁপা ও স্পঞ্জি করে)', 'CO2 Gas Bubbles', 'CO₂↑', '#38bdf8');
    }
    else if (slideId === 7) {
      // 7: Bleaching Powder Ca(OCl)Cl Disinfection & Nascent Oxygen [O]
      const bleachGroup = new THREE.Group();
      group.add(bleachGroup);

      // Bleaching Powder Core Formula
      const core = new THREE.Mesh(
        new THREE.DodecahedronGeometry(1.4),
        new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.4 })
      );
      bleachGroup.add(core);
      addAnchor(core, 'ব্লিচিং পাউডার কেলাস — Ca(OCl)Cl', 'Bleaching Powder Ca(OCl)Cl', 'Ca(OCl)Cl', '#e2e8f0');

      // Nascent Oxygen [O] Glow Spheres
      [-1.8, 1.8].forEach(x => {
        const nascent = new THREE.Mesh(
          new THREE.SphereGeometry(0.5, 20, 20),
          new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xdc2626, emissiveIntensity: 1.2 })
        );
        nascent.position.set(x, 1.2, 0);
        bleachGroup.add(nascent);
      });
      addAnchor(bleachGroup, 'জায়মান অক্সিজেন [O] — রঙীন দাগ ও জীবাণু জারিত করে', 'Nascent Oxygen [O]', '[O]', '#ef4444');
    }
    else {
      // 2, 3, 6, 8, 9, 10: Vinegar Acetic Acid & Cleaners
      const cleanGroup = new THREE.Group();
      group.add(cleanGroup);

      // Acetic Acid Molecule CH3COOH
      const c1 = new THREE.Mesh(new THREE.SphereGeometry(0.65, 20, 20), new THREE.MeshStandardMaterial({ color: 0x334155 }));
      c1.position.set(-0.8, 0, 0);
      cleanGroup.add(c1);

      const c2 = new THREE.Mesh(new THREE.SphereGeometry(0.65, 20, 20), new THREE.MeshStandardMaterial({ color: 0x334155 }));
      c2.position.set(0.8, 0, 0);
      cleanGroup.add(c2);

      const oDbl = new THREE.Mesh(new THREE.SphereGeometry(0.55, 20, 20), new THREE.MeshStandardMaterial({ color: 0xef4444 }));
      oDbl.position.set(1.4, 0.9, 0);
      cleanGroup.add(oDbl);

      const oSgl = new THREE.Mesh(new THREE.SphereGeometry(0.55, 20, 20), new THREE.MeshStandardMaterial({ color: 0xef4444 }));
      oSgl.position.set(1.4, -0.9, 0);
      cleanGroup.add(oSgl);

      addAnchor(cleanGroup, 'ভিনেগারের অ্যাসিটিক এসিড (CH₃COOH) খাদ্য সংরক্ষণ অণু', 'Acetic Acid Molecule', 'CH₃COOH', '#ef4444');
    }
  }
}

/**
 * Real-time physics and rotation update for Chapters 9 to 12
 */
export function updateChemistryCh9to12Physics(
  slideId: number,
  time: number,
  refs: any,
  chapter: number
) {
  if (refs.titrationDrop) {
    // Drop falls periodically into the flask
    refs.titrationDrop.position.y = 0.5 - ((time * 2.5) % 1.8);
  }

  if (refs.rainDrops) {
    refs.rainDrops.children.forEach((drop: any) => {
      drop.position.y -= 0.08;
      if (drop.position.y < -1.2) drop.position.y = 3.5;
    });
  }

  if (refs.co2Bubbles) {
    refs.co2Bubbles.children.forEach((bubble: any, i: number) => {
      bubble.position.y += 0.02 + (i % 3) * 0.008;
      bubble.position.x += Math.sin(time * 3 + i) * 0.005;
      if (bubble.position.y > 2.5) bubble.position.y = -0.6;
    });
  }

  if (refs.micelle3DGroup) {
    refs.micelle3DGroup.rotation.y = time * 0.35;
    refs.micelle3DGroup.rotation.x = Math.sin(time * 0.2) * 0.15;
  }

  if (refs.blastFurnaceGroup) {
    refs.blastFurnaceGroup.rotation.y = time * 0.15;
  }

  if (refs.fractionalDistillGroup) {
    refs.fractionalDistillGroup.rotation.y = time * 0.2;
  }

  if (refs.hydrocarbonGroup) {
    refs.hydrocarbonGroup.rotation.y = time * 0.5;
    refs.hydrocarbonGroup.rotation.x = Math.sin(time * 0.4) * 0.2;
  }
}
