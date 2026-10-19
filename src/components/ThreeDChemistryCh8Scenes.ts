/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as THREE from 'three';

type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;

/**
 * Builds rich, dedicated 3D interactive models for all 14 slides in Chemistry Chapter 8:
 * রসায়ন ও শক্তি (Chemistry & Energy)
 */
export function buildChemistryCh8Scene(
  slideId: number,
  chapter: number,
  group: THREE.Group,
  refs: any,
  addAnchor: AddAnchorFn
) {
  refs.chemCh8Slide = slideId;
  refs.chemCh8Chapter = chapter;

  // -------------------------------------------------------------------------
  // Slide 1 & 2: Chemical Energy & Bond Energy (রাসায়নিক শক্তি ও বন্ধন শক্তি)
  // -------------------------------------------------------------------------
  if (slideId === 1 || slideId === 2 || slideId === 3) {
    const energyGroup = new THREE.Group();
    group.add(energyGroup);
    refs.chemEnergyGroup = energyGroup;

    // Reactant Molecules: Methane (CH4)
    const ch4Group = new THREE.Group();
    ch4Group.position.set(-2.5, 0, 0);
    energyGroup.add(ch4Group);

    // Carbon atom (Center)
    const carbonGeo = new THREE.SphereGeometry(0.7, 24, 24);
    const carbonMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.3 });
    const carbonMesh = new THREE.Mesh(carbonGeo, carbonMat);
    ch4Group.add(carbonMesh);
    addAnchor(carbonMesh, 'মিথেন অণু (CH₄) — বন্ধন শক্তি সঞ্চয়', 'Methane Molecule (CH4)', 'C', '#38bdf8');

    // 4 Hydrogen atoms in tetrahedral layout
    const hPositions = [
      [0.8, 0.8, 0.8],
      [-0.8, -0.8, 0.8],
      [-0.8, 0.8, -0.8],
      [0.8, -0.8, -0.8]
    ];
    hPositions.forEach((pos, idx) => {
      const hMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.35, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.2 })
      );
      hMesh.position.set(pos[0], pos[1], pos[2]);
      ch4Group.add(hMesh);

      // Bond cylinder
      const bondGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.1, 12);
      const bondMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8 });
      const bondMesh = new THREE.Mesh(bondGeo, bondMat);
      bondMesh.position.set(pos[0] * 0.5, pos[1] * 0.5, pos[2] * 0.5);
      bondMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(...pos).normalize());
      ch4Group.add(bondMesh);
    });

    // Right: Oxygen Molecule (O=O) & Energy Release Flame
    const o2Group = new THREE.Group();
    o2Group.position.set(2.5, 0, 0);
    energyGroup.add(o2Group);

    const flameMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.0, 24, 24),
      new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        emissive: 0xea580c,
        emissiveIntensity: 0.85,
        roughness: 0.3
      })
    );
    o2Group.add(flameMesh);
    refs.flamePulseMesh = flameMesh;
    addAnchor(flameMesh, 'দহনে তাপ নির্গমন (ΔH = -৬৯৪ kJ/mol)', 'Exothermic Reaction Energy', 'ΔH < 0', '#f59e0b');

    // Energy flow rings
    const ringGeo = new THREE.TorusGeometry(1.4, 0.04, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xf43f5e, wireframe: true });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    flameMesh.add(ringMesh);
  }

  // -------------------------------------------------------------------------
  // Slide 4: Electrical Conductors vs Electrolytes (তড়িৎ পরিবাহী বনাম বিশ্লেষ্য)
  // -------------------------------------------------------------------------
  else if (slideId === 4) {
    const condGroup = new THREE.Group();
    group.add(condGroup);

    // Beaker with electrolyte solution
    const beakerGeo = new THREE.CylinderGeometry(1.8, 1.8, 2.8, 32, 1, true);
    const beakerMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.3,
      roughness: 0.1
    });
    const beakerMesh = new THREE.Mesh(beakerGeo, beakerMat);
    condGroup.add(beakerMesh);

    // Liquid surface
    const liqGeo = new THREE.CylinderGeometry(1.7, 1.7, 2.2, 32);
    const liqMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.55
    });
    const liqMesh = new THREE.Mesh(liqGeo, liqMat);
    liqMesh.position.y = -0.3;
    condGroup.add(liqMesh);

    // Floating ions (Na+ and Cl-)
    const ionsGroup = new THREE.Group();
    condGroup.add(ionsGroup);
    refs.chemCh8Ions = ionsGroup;

    for (let i = 0; i < 14; i++) {
      const isCation = i % 2 === 0;
      const ionMesh = new THREE.Mesh(
        new THREE.SphereGeometry(isCation ? 0.22 : 0.28, 16, 16),
        new THREE.MeshStandardMaterial({
          color: isCation ? 0xa855f7 : 0x10b981,
          emissive: isCation ? 0x7e22ce : 0x047857,
          emissiveIntensity: 0.4
        })
      );
      const angle = (i / 14) * Math.PI * 2;
      const radius = 0.5 + Math.random() * 0.9;
      ionMesh.position.set(Math.cos(angle) * radius, -1.0 + Math.random() * 1.6, Math.sin(angle) * radius);
      ionsGroup.add(ionMesh);

      if (i === 0) addAnchor(ionMesh, 'মুক্ত ক্যাটায়ন (Na⁺) — বিদ্যুৎ পরিবাহী', 'Free Cation (Na+)', 'Na⁺', '#c084fc');
      if (i === 1) addAnchor(ionMesh, 'মুক্ত অ্যানায়ন (Cl⁻) — বিদ্যুৎ পরিবাহী', 'Free Anion (Cl-)', 'Cl⁻', '#34d399');
    }

    // Two dipping carbon electrodes
    const el1 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.2, 16), new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.9 }));
    el1.position.set(-0.9, 0.4, 0);
    condGroup.add(el1);
    addAnchor(el1, 'তড়িৎদ্বার অ্যানোড (+)', 'Anode (+)', 'Anode', '#ef4444');

    const el2 = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.2, 16), new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.9 }));
    el2.position.set(0.9, 0.4, 0);
    condGroup.add(el2);
    addAnchor(el2, 'তড়িৎদ্বার ক্যাথোড (-)', 'Cathode (-)', 'Cathode', '#3b82f6');
  }

  // -------------------------------------------------------------------------
  // Slide 5, 6, 7: Daniell Cell (ড্যানিয়েল কোষ, লবণ সেতু ও ১.১০ ভোল্ট)
  // -------------------------------------------------------------------------
  else if (slideId === 5 || slideId === 6 || slideId === 7) {
    const daniellGroup = new THREE.Group();
    group.add(daniellGroup);
    refs.chemDaniellGroup = daniellGroup;

    // Left Beaker: Zn / ZnSO4 (Anode)
    const bLeft = new THREE.Mesh(
      new THREE.CylinderGeometry(1.2, 1.2, 2.4, 32, 1, true),
      new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.35, roughness: 0.1 })
    );
    bLeft.position.set(-2.0, -0.4, 0);
    daniellGroup.add(bLeft);

    const liqLeft = new THREE.Mesh(
      new THREE.CylinderGeometry(1.15, 1.15, 1.8, 32),
      new THREE.MeshStandardMaterial({ color: 0x64748b, transparent: true, opacity: 0.45 })
    );
    liqLeft.position.set(-2.0, -0.6, 0);
    daniellGroup.add(liqLeft);

    // Zinc Plate (Anode)
    const znPlate = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 2.5, 0.8),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 })
    );
    znPlate.position.set(-2.0, 0.3, 0);
    daniellGroup.add(znPlate);
    refs.daniellZnPlate = znPlate;
    addAnchor(znPlate, 'জিংক অ্যানোড (-) [Zn ⟶ Zn²⁺ + 2e⁻]', 'Zinc Anode (-)', 'Zn', '#cbd5e1');

    // Right Beaker: Cu / CuSO4 (Cathode)
    const bRight = new THREE.Mesh(
      new THREE.CylinderGeometry(1.2, 1.2, 2.4, 32, 1, true),
      new THREE.MeshPhysicalMaterial({ color: 0x0284c7, transparent: true, opacity: 0.35, roughness: 0.1 })
    );
    bRight.position.set(2.0, -0.4, 0);
    daniellGroup.add(bRight);

    const liqRight = new THREE.Mesh(
      new THREE.CylinderGeometry(1.15, 1.15, 1.8, 32),
      new THREE.MeshStandardMaterial({ color: 0x0369a1, transparent: true, opacity: 0.65 })
    );
    liqRight.position.set(2.0, -0.6, 0);
    daniellGroup.add(liqRight);

    // Copper Plate (Cathode)
    const cuPlate = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 2.5, 0.8),
      new THREE.MeshStandardMaterial({ color: 0xb45309, metalness: 0.85, roughness: 0.2 })
    );
    cuPlate.position.set(2.0, 0.3, 0);
    daniellGroup.add(cuPlate);
    refs.daniellCuPlate = cuPlate;
    addAnchor(cuPlate, 'কপার ক্যাথোড (+) [Cu²⁺ + 2e⁻ ⟶ Cu]', 'Copper Cathode (+)', 'Cu', '#f59e0b');

    // U-shaped Salt Bridge (লবণ সেতু)
    const bridgeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.6, -0.5, 0),
      new THREE.Vector3(-1.6, 1.2, 0),
      new THREE.Vector3(0, 1.4, 0),
      new THREE.Vector3(1.6, 1.2, 0),
      new THREE.Vector3(1.6, -0.5, 0)
    ]);
    const bridgeGeo = new THREE.TubeGeometry(bridgeCurve, 32, 0.22, 16, false);
    const bridgeMat = new THREE.MeshPhysicalMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.75,
      roughness: 0.1,
      transmission: 0.5
    });
    const bridgeMesh = new THREE.Mesh(bridgeGeo, bridgeMat);
    daniellGroup.add(bridgeMesh);
    addAnchor(bridgeMesh, 'লবণ সেতু (KCl জেলি) — তড়িৎ নিরপেক্ষতা রক্ষা', 'Salt Bridge (KCl)', 'SaltBridge', '#10b981');

    // Central Voltmeter Dial
    const voltMeter = new THREE.Mesh(
      new THREE.CylinderGeometry(0.65, 0.65, 0.25, 32),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.5 })
    );
    voltMeter.position.set(0, 2.2, 0);
    voltMeter.rotation.x = Math.PI / 2;
    daniellGroup.add(voltMeter);
    addAnchor(voltMeter, 'ভোল্টমিটার: ১.১০ V বিভব পার্থক্য', 'Voltmeter 1.10V', '1.10V', '#38bdf8');

    // Voltmeter needle
    const needle = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.45, 0.04),
      new THREE.MeshBasicMaterial({ color: 0xef4444 })
    );
    needle.position.set(0, 2.2, 0.15);
    needle.rotation.z = -0.3;
    daniellGroup.add(needle);
    refs.voltNeedle = needle;

    // Connecting wires
    const wirePath = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.0, 1.5, 0),
      new THREE.Vector3(-1.0, 2.2, 0),
      new THREE.Vector3(0, 2.2, 0),
      new THREE.Vector3(1.0, 2.2, 0),
      new THREE.Vector3(2.0, 1.5, 0)
    ]);
    const wireMesh = new THREE.Mesh(
      new THREE.TubeGeometry(wirePath, 32, 0.05, 8, false),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.6 })
    );
    daniellGroup.add(wireMesh);
  }

  // -------------------------------------------------------------------------
  // Slide 8: Dry Cell Anatomy (শুষ্ক কোষ / লেকল্যান্স সেল)
  // -------------------------------------------------------------------------
  else if (slideId === 8) {
    const dryCellGroup = new THREE.Group();
    group.add(dryCellGroup);
    refs.chemDryCellGroup = dryCellGroup;

    // Outer Zinc Cylinder Can (অ্যানোড)
    const canGeo = new THREE.CylinderGeometry(1.4, 1.4, 3.6, 32, 1, true);
    const canMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.75,
      roughness: 0.25,
      side: THREE.DoubleSide
    });
    const canMesh = new THREE.Mesh(canGeo, canMat);
    dryCellGroup.add(canMesh);
    addAnchor(canMesh, 'জিংক চোঙ অ্যানোড (-) [Zn ⟶ Zn²⁺ + 2e⁻]', 'Zinc Outer Can Anode (-)', 'Zn', '#94a3b8');

    // Inner Chemical Paste (MnO2 + C + NH4Cl)
    const pasteGeo = new THREE.CylinderGeometry(1.25, 1.25, 3.4, 32);
    const pasteMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.9,
      transparent: true,
      opacity: 0.8
    });
    const pasteMesh = new THREE.Mesh(pasteGeo, pasteMat);
    dryCellGroup.add(pasteMesh);
    addAnchor(pasteMesh, 'MnO₂ + NH₄Cl + C এর তড়িৎ বিশ্লেষ্য লেই', 'Electrolyte Paste (MnO2+NH4Cl)', 'Paste', '#64748b');

    // Central Carbon / Graphite Rod (ক্যাথোড)
    const rodGeo = new THREE.CylinderGeometry(0.3, 0.3, 4.0, 24);
    const rodMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 });
    const rodMesh = new THREE.Mesh(rodGeo, rodMat);
    dryCellGroup.add(rodMesh);
    addAnchor(rodMesh, 'কার্বন দণ্ড ক্যাথোড (+)', 'Carbon Rod Cathode (+)', 'C-Rod', '#38bdf8');

    // Metal Brass Cap (শীর্ষ টুপি)
    const capGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.35, 24);
    const capMat = new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.9, roughness: 0.2 });
    const capMesh = new THREE.Mesh(capGeo, capMat);
    capMesh.position.y = 2.1;
    dryCellGroup.add(capMesh);
    addAnchor(capMesh, 'পিতলের টুপি (+১.৫ V ধনাত্মক প্রান্ত)', 'Brass Positive Cap (+1.5V)', '+1.5V', '#f59e0b');

    // Bottom zinc seal
    const bottomGeo = new THREE.CylinderGeometry(1.4, 1.4, 0.2, 32);
    const bottomMesh = new THREE.Mesh(bottomGeo, canMat);
    bottomMesh.position.y = -1.9;
    dryCellGroup.add(bottomMesh);
  }

  // -------------------------------------------------------------------------
  // Slide 9 & 10: Electrolysis of NaCl & Water (পানির ও লবণের তড়িৎ বিশ্লেষণ)
  // -------------------------------------------------------------------------
  else if (slideId === 9 || slideId === 10) {
    const hydroGroup = new THREE.Group();
    group.add(hydroGroup);
    refs.chemHydroGroup = hydroGroup;

    // Electrolytic Chamber
    const chamberGeo = new THREE.CylinderGeometry(2.0, 2.0, 3.0, 32, 1, true);
    const chamberMat = new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35, roughness: 0.1 });
    const chamberMesh = new THREE.Mesh(chamberGeo, chamberMat);
    hydroGroup.add(chamberMesh);

    // Liquid with Acidified Water (2H2O ⟶ 2H2 + O2)
    const liqGeo = new THREE.CylinderGeometry(1.9, 1.9, 2.4, 32);
    const liqMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, transparent: true, opacity: 0.5 });
    const liqMesh = new THREE.Mesh(liqGeo, liqMat);
    liqMesh.position.y = -0.3;
    hydroGroup.add(liqMesh);

    // Cathode Tube (H2 gas, 2 volumes)
    const cathTube = new THREE.Mesh(
      new THREE.CylinderGeometry(0.4, 0.4, 2.6, 24),
      new THREE.MeshPhysicalMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.45 })
    );
    cathTube.position.set(-1.0, 0.5, 0);
    hydroGroup.add(cathTube);
    addAnchor(cathTube, 'ক্যাথোডে H₂ গ্যাস (২ আয়তন) [4H⁺ + 4e⁻ ⟶ 2H₂]', 'Cathode H2 Gas (2 Vol)', '2H₂', '#60a5fa');

    // Anode Tube (O2 gas, 1 volume)
    const anTube = new THREE.Mesh(
      new THREE.CylinderGeometry(0.4, 0.4, 2.6, 24),
      new THREE.MeshPhysicalMaterial({ color: 0xf43f5e, transparent: true, opacity: 0.45 })
    );
    anTube.position.set(1.0, 0.5, 0);
    hydroGroup.add(anTube);
    addAnchor(anTube, 'অ্যানোডে O₂ গ্যাস (১ আয়তন) [4OH⁻ ⟶ O₂ + 2H₂O + 4e⁻]', 'Anode O2 Gas (1 Vol)', 'O₂', '#f43f5e');

    // Rising Gas Bubbles
    const bubblesGroup = new THREE.Group();
    hydroGroup.add(bubblesGroup);
    refs.gasBubbles = bubblesGroup;

    for (let i = 0; i < 18; i++) {
      const isH2 = i % 3 !== 0; // 2:1 ratio of bubbles!
      const bMesh = new THREE.Mesh(
        new THREE.SphereGeometry(isH2 ? 0.08 : 0.12, 12, 12),
        new THREE.MeshBasicMaterial({ color: isH2 ? 0x93c5fd : 0xfca5a5 })
      );
      bMesh.position.set(
        isH2 ? -1.0 + (Math.random() - 0.5) * 0.3 : 1.0 + (Math.random() - 0.5) * 0.3,
        -1.0 + Math.random() * 2.2,
        (Math.random() - 0.5) * 0.3
      );
      bubblesGroup.add(bMesh);
    }
  }

  // -------------------------------------------------------------------------
  // Slide 11: Electroplating (তড়িৎ লেপন — লোহার চামচে রুপার প্রলেপ)
  // -------------------------------------------------------------------------
  else if (slideId === 11) {
    const platingGroup = new THREE.Group();
    group.add(platingGroup);
    refs.chemPlatingGroup = platingGroup;

    // Electrolytic Tank
    const tankGeo = new THREE.BoxGeometry(4.4, 2.8, 2.2);
    const tankMat = new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.25, roughness: 0.1 });
    const tankMesh = new THREE.Mesh(tankGeo, tankMat);
    platingGroup.add(tankMesh);

    // AgNO3 Solution
    const solGeo = new THREE.BoxGeometry(4.2, 2.2, 2.0);
    const solMat = new THREE.MeshStandardMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.45 });
    const solMesh = new THREE.Mesh(solGeo, solMat);
    solMesh.position.y = -0.3;
    platingGroup.add(solMesh);

    // Left: Pure Silver Plate (Anode +)
    const agPlate = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 2.2, 0.9),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.15 })
    );
    agPlate.position.set(-1.4, 0.2, 0);
    platingGroup.add(agPlate);
    addAnchor(agPlate, 'খাঁটি রুপার পাত (অ্যানোড +) [Ag ⟶ Ag⁺ + e⁻]', 'Silver Anode (+)', 'Ag', '#e2e8f0');

    // Right: Iron Spoon (Cathode -)
    const spoonGroup = new THREE.Group();
    spoonGroup.position.set(1.4, 0.2, 0);
    platingGroup.add(spoonGroup);

    // Spoon handle
    const handleMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 1.8, 16),
      new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8 })
    );
    spoonGroup.add(handleMesh);

    // Spoon bowl
    const bowlMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.45, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.85, roughness: 0.2 })
    );
    bowlMesh.scale.set(0.8, 1.2, 0.4);
    bowlMesh.position.y = -0.9;
    spoonGroup.add(bowlMesh);
    refs.platingSpoon = bowlMesh;
    addAnchor(spoonGroup, 'লোহার চামচ (ক্যাথোড -) [Ag⁺ + e⁻ ⟶ Ag(s)]', 'Iron Spoon Cathode (-)', 'Spoon', '#cbd5e1');

    // Migration Ag+ ions in solution
    const agIons = new THREE.Group();
    platingGroup.add(agIons);
    refs.agMigrationIons = agIons;

    for (let i = 0; i < 8; i++) {
      const ion = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 12, 12),
        new THREE.MeshStandardMaterial({ color: 0xf8fafc, emissive: 0x38bdf8, emissiveIntensity: 0.6 })
      );
      ion.position.set(-1.0 + (i / 8) * 2.0, -0.6 + (Math.random() - 0.5) * 0.8, 0);
      agIons.add(ion);
    }
  }

  // -------------------------------------------------------------------------
  // Slide 12, 13, 14: Rechargeable Battery & Mindmap (লিথিয়াম-আয়ন ও পরিবেশ)
  // -------------------------------------------------------------------------
  else {
    const battGroup = new THREE.Group();
    group.add(battGroup);

    // Modern Li-ion Pouch Cell / 18650 Battery
    const cellGeo = new THREE.CylinderGeometry(1.2, 1.2, 3.2, 32);
    const cellMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      metalness: 0.7,
      roughness: 0.3
    });
    const cellMesh = new THREE.Mesh(cellGeo, cellMat);
    battGroup.add(cellMesh);
    addAnchor(cellMesh, 'লিথিয়াম-আয়ন রিচার্জেবল সেল (৩.৭ V)', 'Lithium-ion Battery (3.7V)', 'Li-ion', '#10b981');

    // Electron orbit ring around battery
    const orbitGeo = new THREE.TorusGeometry(1.8, 0.05, 16, 64);
    const orbitMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true });
    const orbitMesh = new THREE.Mesh(orbitGeo, orbitMat);
    orbitMesh.rotation.x = Math.PI / 3;
    battGroup.add(orbitMesh);
    refs.batteryOrbit = orbitMesh;
  }
}

/**
 * Updates dynamic physics animations for Chapter 8 scenes
 */
export function updateChemistryCh8Physics(
  slideId: number,
  time: number,
  refs: any
) {
  // Pulse flame in slide 1/2
  if (refs.flamePulseMesh) {
    const scale = 1.0 + Math.sin(time * 5.0) * 0.08;
    refs.flamePulseMesh.scale.set(scale, scale, scale);
  }

  // Rotate CH4 and energy groups
  if (refs.chemEnergyGroup) {
    refs.chemEnergyGroup.rotation.y = time * 0.3;
  }

  // Jiggle electrolyte ions
  if (refs.chemCh8Ions) {
    refs.chemCh8Ions.children.forEach((child: any, i: number) => {
      child.position.y += Math.sin(time * 2.0 + i) * 0.003;
    });
  }

  // Wiggle voltmeter needle slightly around 1.10V
  if (refs.voltNeedle) {
    refs.voltNeedle.rotation.z = -0.3 + Math.sin(time * 3.0) * 0.03;
  }

  // Rise gas bubbles in electrolysis
  if (refs.gasBubbles) {
    refs.gasBubbles.children.forEach((b: any, idx: number) => {
      b.position.y += 0.015;
      if (b.position.y > 1.4) b.position.y = -1.2;
    });
  }

  // Move Ag+ ions from anode to cathode in electroplating
  if (refs.agMigrationIons) {
    refs.agMigrationIons.children.forEach((ion: any) => {
      ion.position.x += 0.008;
      if (ion.position.x > 1.2) ion.position.x = -1.2;
    });
  }

  // Rotate battery orbit
  if (refs.batteryOrbit) {
    refs.batteryOrbit.rotation.z = time * 0.8;
  }
}
