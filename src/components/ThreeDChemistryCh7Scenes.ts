import * as THREE from 'three';

type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;

/**
 * Builds rich, dedicated 3D interactive models for all 14 slides in Chemistry Chapter 7:
 * রাসায়নিক বিক্রিয়া (Chemical Reactions)
 */
export function buildChemistryCh7Scene(
  slideId: number,
  chapter: number,
  group: THREE.Group,
  refs: any,
  addAnchor: AddAnchorFn
) {
  refs.chemCh7Slide = slideId;
  refs.chemCh7Chapter = chapter;

  // -------------------------------------------------------------------------
  // Slide 1: ভৌত পরিবর্তন বনাম রাসায়নিক পরিবর্তন (Physical vs Chemical Change)
  // -------------------------------------------------------------------------
  if (slideId === 1) {
    const splitGroup = new THREE.Group();
    group.add(splitGroup);
    refs.changeSplitGroup = splitGroup;

    // Left: Ice Cube (Physical Change - solid to liquid)
    const iceGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const iceMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.65,
      roughness: 0.1,
      transmission: 0.8
    });
    const iceMesh = new THREE.Mesh(iceGeo, iceMat);
    iceMesh.position.set(-2.4, 0, 0);
    splitGroup.add(iceMesh);
    addAnchor(iceMesh, 'ভৌত পরিবর্তন (বরফ গলন H₂O ⇌ H₂O)', 'Physical Change (H2O)', 'H₂O(s)', '#38bdf8');

    // Right: Combustion Flame / Hydrocarbon Core (Chemical Change)
    const flameCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.9, 24, 24),
      new THREE.MeshStandardMaterial({
        color: 0xf97316,
        emissive: 0xea580c,
        emissiveIntensity: 0.8,
        roughness: 0.3
      })
    );
    flameCore.position.set(2.4, 0, 0);
    splitGroup.add(flameCore);
    refs.chemFlameCore = flameCore;
    addAnchor(flameCore, 'রাসায়নিক পরিবর্তন (দহন CH₄ + 2O₂ ⟶ CO₂ + 2H₂O)', 'Chemical Change (Combustion)', 'CH₄+O₂', '#f97316');

    // Central Divider Barrier
    const divider = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 3.2, 16),
      new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8 })
    );
    splitGroup.add(divider);
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 2: একমুখী ও উভমুখী বিক্রিয়া (Reversible Reaction Equilibrium)
  // -------------------------------------------------------------------------
  if (slideId === 2) {
    const revGroup = new THREE.Group();
    group.add(revGroup);
    refs.reversibleGroup = revGroup;

    // Central Dual Arrow Torus Rings (⇌ Forward & Backward Flux)
    const forwardRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.08, 16, 64, Math.PI),
      new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.6 })
    );
    forwardRing.rotation.z = Math.PI / 4;
    revGroup.add(forwardRing);
    refs.forwardArrow = forwardRing;
    addAnchor(forwardRing, 'সম্মুখমুখী গতিবেগ (Forward Rate)', 'Forward Reaction Rate', '⟶', '#10b981');

    const backwardRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.08, 16, 64, Math.PI),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.6 })
    );
    backwardRing.rotation.z = Math.PI + Math.PI / 4;
    revGroup.add(backwardRing);
    refs.backwardArrow = backwardRing;
    addAnchor(backwardRing, 'পশ্চাৎমুখী গতিবেগ (Backward Rate)', 'Backward Reaction Rate', '⟵', '#f59e0b');

    // Reactant Core (CaCO3)
    const rMesh = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.7),
      new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.3 })
    );
    rMesh.position.set(-2.8, 0, 0);
    revGroup.add(rMesh);
    addAnchor(rMesh, 'বিক্রিয়ক (CaCO₃ চুনাপাথর)', 'Reactant (CaCO3)', 'CaCO₃', '#3b82f6');

    // Product Core (CaO + CO2)
    const pMesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.7),
      new THREE.MeshStandardMaterial({ color: 0xec4899, roughness: 0.3 })
    );
    pMesh.position.set(2.8, 0, 0);
    revGroup.add(pMesh);
    addAnchor(pMesh, 'উৎপাদ (CaO + CO₂ গ্যাস)', 'Products (CaO + CO2)', 'CaO+CO₂', '#ec4899');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 3: তাপোৎপাদী ও তাপহারী বিক্রিয়া (Exothermic vs Endothermic ΔH)
  // -------------------------------------------------------------------------
  if (slideId === 3) {
    const thermoGroup = new THREE.Group();
    group.add(thermoGroup);
    refs.thermoGroup = thermoGroup;

    // Energy Hill Curve (Activation Energy Barrier)
    const curvePoints: THREE.Vector3[] = [];
    for (let x = -3; x <= 3; x += 0.2) {
      const y = Math.exp(-x * x * 0.7) * 2.2 - (x * 0.3);
      curvePoints.push(new THREE.Vector3(x, y, 0));
    }
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.08, 12, false);
    const tubeMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    thermoGroup.add(tubeMesh);

    // Energy Sphere traversing the barrier
    const energyBall = new THREE.Mesh(
      new THREE.SphereGeometry(0.28, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.9 })
    );
    thermoGroup.add(energyBall);
    refs.energyTraverseBall = energyBall;
    addAnchor(energyBall, 'সক্রিয়ণ শক্তি বাধা (Activation Energy Ea)', 'Activation Energy', 'Eₐ', '#ef4444');

    // Enthalpy Change Delta H Indicator
    const deltaHMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 1.8, 16),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b })
    );
    deltaHMesh.position.set(2.5, -0.2, 0);
    thermoGroup.add(deltaHMesh);
    addAnchor(deltaHMesh, 'এনথালপি পরিবর্তন (ΔH = -92 kJ তাপোৎপাদী)', 'Enthalpy Change (ΔH)', 'ΔH < 0', '#f59e0b');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 4 & 5: রেডক্স বিক্রিয়া ও ইলেকট্রন স্থানান্তর (Redox Electron Jump)
  // -------------------------------------------------------------------------
  if (slideId === 4 || slideId === 5) {
    const redoxGroup = new THREE.Group();
    group.add(redoxGroup);
    refs.redoxGroup = redoxGroup;

    // Zinc Atom (Reducing Agent / Electron Donor)
    const znAtom = new THREE.Mesh(
      new THREE.SphereGeometry(1.0, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 })
    );
    znAtom.position.set(-2.5, 0, 0);
    redoxGroup.add(znAtom);
    addAnchor(znAtom, 'জিংক বিজারক: Zn⁰ ⟶ Zn²⁺ + 2e⁻ (জারণ)', 'Zinc (Oxidation)', 'Zn⁰ ⟶ Zn²⁺', '#94a3b8');

    // Copper Ion (Oxidizing Agent / Electron Acceptor)
    const cuIon = new THREE.Mesh(
      new THREE.SphereGeometry(0.9, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0x3b82f6, emissive: 0x1d4ed8, emissiveIntensity: 0.6 })
    );
    cuIon.position.set(2.5, 0, 0);
    redoxGroup.add(cuIon);
    addAnchor(cuIon, 'কপার জারক: Cu²⁺ + 2e⁻ ⟶ Cu⁰ (বিজারণ)', 'Copper (Reduction)', 'Cu²⁺ ⟶ Cu⁰', '#3b82f6');

    // Transferring Electron Orbs
    const electronGroup = new THREE.Group();
    redoxGroup.add(electronGroup);
    refs.redoxElectrons = electronGroup;

    for (let i = 0; i < 2; i++) {
      const eMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.16, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 1.0 })
      );
      eMesh.position.set(i === 0 ? -0.8 : 0.8, 0.4 * (i === 0 ? 1 : -1), 0);
      electronGroup.add(eMesh);
      addAnchor(eMesh, 'ইলেকট্রন স্থানান্তর (2e⁻)', '2 Electrons Transfer', '2e⁻', '#facc15');
    }
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 6: নন-রেডক্স প্রশমন ও অধঃক্ষেপণ (Neutralization & AgCl Precipitate)
  // -------------------------------------------------------------------------
  if (slideId === 6) {
    const beakerGroup = new THREE.Group();
    group.add(beakerGroup);
    refs.beakerGroup = beakerGroup;

    // Transparent Glass Beaker
    const beakerGeo = new THREE.CylinderGeometry(1.6, 1.6, 3.2, 32, 1, true);
    const beakerMat = new THREE.MeshPhysicalMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      transmission: 0.85
    });
    const beakerMesh = new THREE.Mesh(beakerGeo, beakerMat);
    beakerGroup.add(beakerMesh);

    // Liquid Solution (Neutral Na+ and Cl- fluid)
    const fluidGeo = new THREE.CylinderGeometry(1.55, 1.55, 2.0, 32);
    fluidGeo.translate(0, -0.5, 0);
    const fluidMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.65,
      roughness: 0.2
    });
    const fluidMesh = new THREE.Mesh(fluidGeo, fluidMat);
    beakerGroup.add(fluidMesh);
    addAnchor(fluidMesh, 'জলীয় দ্রবণ (H⁺ + OH⁻ ⟶ H₂O প্রশমন)', 'Neutralization Solution', 'NaCl+H₂O', '#06b6d4');

    // Precipitate Layer at Bottom (AgCl white precipitate)
    const precipGeo = new THREE.CylinderGeometry(1.5, 1.5, 0.4, 32);
    precipGeo.translate(0, -1.3, 0);
    const precipMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.9,
      emissive: 0xe2e8f0,
      emissiveIntensity: 0.4
    });
    const precipMesh = new THREE.Mesh(precipGeo, precipMat);
    beakerGroup.add(precipMesh);
    addAnchor(precipMesh, 'সাদা অধঃক্ষেপ (AgCl↓ সিলভার ক্লোরাইড)', 'AgCl Precipitate', 'AgCl↓', '#f8fafc');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 7: বিশেষ বিক্রিয়া (Hydration CuSO4.5H2O Crystal vs Hydrolysis)
  // -------------------------------------------------------------------------
  if (slideId === 7) {
    const crystalGroup = new THREE.Group();
    group.add(crystalGroup);
    refs.crystalGroup = crystalGroup;

    // Central Blue Vitriol Crystal Octahedron (CuSO4)
    const octGeo = new THREE.OctahedronGeometry(1.4);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      roughness: 0.1,
      metalness: 0.4,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.6
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    crystalGroup.add(octMesh);
    addAnchor(octMesh, 'কপার সালফেট কেলাস জালিকা (CuSO₄)', 'CuSO4 Crystal Lattice', 'CuSO₄', '#2563eb');

    // 5 Hydration Water Molecules orbiting (5H2O)
    const waterRing = new THREE.Group();
    crystalGroup.add(waterRing);
    refs.hydrationWaterRing = waterRing;

    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const wGroup = new THREE.Group();
      wGroup.position.set(Math.cos(angle) * 2.5, Math.sin(angle) * 0.4, Math.sin(angle) * 2.5);

      // Oxygen red sphere
      const oMesh = new THREE.Mesh(new THREE.SphereGeometry(0.24, 16, 16), new THREE.MeshStandardMaterial({ color: 0xef4444 }));
      wGroup.add(oMesh);
      // 2 Hydrogen white spheres
      const h1 = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), new THREE.MeshStandardMaterial({ color: 0xffffff }));
      h1.position.set(0.2, 0.15, 0);
      wGroup.add(h1);
      const h2 = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 12), new THREE.MeshStandardMaterial({ color: 0xffffff }));
      h2.position.set(-0.2, 0.15, 0);
      wGroup.add(h2);

      waterRing.add(wGroup);
    }
    addAnchor(waterRing, '৫ অণু কেলাস পানি (পানিযোজন 5H₂O)', '5 Water of Crystallization', '·5H₂O', '#38bdf8');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 8: জারণ সংখ্যা নির্ণয় (Oxidation State KMnO4 & K2Cr2O7)
  // -------------------------------------------------------------------------
  if (slideId === 8) {
    const oxGroup = new THREE.Group();
    group.add(oxGroup);
    refs.oxGroup = oxGroup;

    // Central Manganese (Mn +7) Core
    const mnCore = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 32, 32),
      new THREE.MeshStandardMaterial({
        color: 0x9333ea,
        metalness: 0.7,
        roughness: 0.2,
        emissive: 0x7e22ce,
        emissiveIntensity: 0.7
      })
    );
    oxGroup.add(mnCore);
    addAnchor(mnCore, 'ম্যাঙ্গানিজ জারণ সংখ্যা (+৭)', 'Manganese Oxidation State (+7)', 'Mn⁺⁷', '#9333ea');

    // 4 Surrounding Oxygen atoms with -2 state
    const oxyGroup = new THREE.Group();
    oxGroup.add(oxyGroup);
    refs.tetraOxyGroup = oxyGroup;

    const tetPoints = [
      new THREE.Vector3(1.6, 1.6, 1.6),
      new THREE.Vector3(-1.6, -1.6, 1.6),
      new THREE.Vector3(-1.6, 1.6, -1.6),
      new THREE.Vector3(1.6, -1.6, -1.6)
    ];

    tetPoints.forEach((pos, idx) => {
      const oMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.45, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.3 })
      );
      oMesh.position.copy(pos);
      oxyGroup.add(oMesh);

      // Bond cylinder
      const bond = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, pos.length(), 12),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8 })
      );
      bond.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pos.clone().normalize());
      bond.position.copy(pos.clone().multiplyScalar(0.5));
      oxyGroup.add(bond);
    });
    addAnchor(oxyGroup, '৪টি অক্সিজেন (৪ × -২ = -৮)', '4 Oxygen (-8)', '4×(O⁻²)', '#ef4444');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 9: জারণ-বিজারণ যুগপৎ ঘটে (Simultaneous Redox Circuit)
  // -------------------------------------------------------------------------
  if (slideId === 9) {
    const circuitGroup = new THREE.Group();
    group.add(circuitGroup);
    refs.circuitGroup = circuitGroup;

    // Dual Beakers (Zn Half-Cell on Left, Cu Half-Cell on Right)
    const leftCell = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 2.2, 1.6),
      new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.45, roughness: 0.1 })
    );
    leftCell.position.set(-2.2, 0, 0);
    circuitGroup.add(leftCell);
    addAnchor(leftCell, 'জারণ অর্ধ-কোষ: Zn ⟶ Zn²⁺ + 2e⁻', 'Oxidation Half-Cell', 'Oxidation', '#94a3b8');

    const rightCell = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 2.2, 1.6),
      new THREE.MeshPhysicalMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.45, roughness: 0.1 })
    );
    rightCell.position.set(2.2, 0, 0);
    circuitGroup.add(rightCell);
    addAnchor(rightCell, 'বিজারণ অর্ধ-কোষ: Cu²⁺ + 2e⁻ ⟶ Cu', 'Reduction Half-Cell', 'Reduction', '#3b82f6');

    // Salt Bridge connecting both
    const bridgeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.8, 0.5, 0),
      new THREE.Vector3(-1.0, 1.8, 0),
      new THREE.Vector3(0, 2.0, 0),
      new THREE.Vector3(1.0, 1.8, 0),
      new THREE.Vector3(1.8, 0.5, 0)
    ]);
    const bridgeGeo = new THREE.TubeGeometry(bridgeCurve, 32, 0.16, 12, false);
    const bridgeMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.5 });
    const bridgeMesh = new THREE.Mesh(bridgeGeo, bridgeMat);
    circuitGroup.add(bridgeMesh);
    addAnchor(bridgeMesh, 'লবণ সেতু (Salt Bridge KCl / KNO₃)', 'Salt Bridge', 'KCl', '#f59e0b');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 10 & 11: লা-শাতেলিয়ার নীতি ও হেবার পদ্ধতি (Le Chatelier Pressure Chamber)
  // -------------------------------------------------------------------------
  if (slideId === 10 || slideId === 11) {
    const chamberGroup = new THREE.Group();
    group.add(chamberGroup);
    refs.haberChamberGroup = chamberGroup;

    // High Pressure Industrial Steel Cylinder
    const cylGeo = new THREE.CylinderGeometry(1.8, 1.8, 3.8, 32, 1, true);
    const cylMat = new THREE.MeshPhysicalMaterial({
      color: 0x475569,
      transparent: true,
      opacity: 0.35,
      metalness: 0.9,
      roughness: 0.1
    });
    const cylMesh = new THREE.Mesh(cylGeo, cylMat);
    chamberGroup.add(cylMesh);

    // Movable Piston Head (Pressure 200 atm)
    const pistonGeo = new THREE.CylinderGeometry(1.75, 1.75, 0.4, 32);
    const pistonMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.8 });
    const pistonMesh = new THREE.Mesh(pistonGeo, pistonMat);
    pistonMesh.position.set(0, 1.4, 0);
    chamberGroup.add(pistonMesh);
    refs.haberPiston = pistonMesh;
    addAnchor(pistonMesh, 'উচ্চ চাপ পিস্টন (২০০ atm)', 'High Pressure Piston (200 atm)', '200 atm', '#0284c7');

    // Catalyst Bed at bottom (Fe + K2O/Al2O3)
    const catBed = new THREE.Mesh(
      new THREE.CylinderGeometry(1.75, 1.75, 0.4, 32),
      new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.8, metalness: 0.5 })
    );
    catBed.position.set(0, -1.6, 0);
    chamberGroup.add(catBed);
    addAnchor(catBed, 'আয়রন প্রভাবক স্তর (Fe চূর্ণ, ৪৫০°-৫৫০°C)', 'Iron Catalyst Bed', 'Fe Cat', '#d97706');

    // Floating Gas Molecules inside (N2, H2, NH3)
    const gasParticlesGroup = new THREE.Group();
    chamberGroup.add(gasParticlesGroup);
    refs.haberGasGroup = gasParticlesGroup;

    for (let i = 0; i < 20; i++) {
      const gSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 12, 12),
        new THREE.MeshStandardMaterial({
          color: i < 5 ? 0x3b82f6 : i < 15 ? 0xffffff : 0x10b981,
          emissiveIntensity: 0.5
        })
      );
      gSphere.position.set(
        (Math.random() - 0.5) * 2.4,
        (Math.random() - 0.5) * 1.8 - 0.2,
        (Math.random() - 0.5) * 2.4
      );
      gasParticlesGroup.add(gSphere);
    }
    addAnchor(cylMesh, 'হেবার প্রকোষ্ঠ (N₂ + 3H₂ ⇌ 2NH₃; ΔH = -92 kJ)', 'Haber Reactor Chamber', 'N₂+H₂⇌NH₃', '#10b981');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 12: মরিচা ও ইলেকট্রোপ্লেটিং (Rusting Lattice & Protective Zinc Coating)
  // -------------------------------------------------------------------------
  if (slideId === 12) {
    const rustGroup = new THREE.Group();
    group.add(rustGroup);
    refs.rustGroup = rustGroup;

    // Steel Plate (Fe Base)
    const steelBase = new THREE.Mesh(
      new THREE.BoxGeometry(3.6, 0.6, 2.4),
      new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.9, roughness: 0.2 })
    );
    steelBase.position.set(0, -0.6, 0);
    rustGroup.add(steelBase);
    addAnchor(steelBase, 'বিশুদ্ধ লোহা ধাতব কাঠামো (Fe)', 'Iron Metal Substrate (Fe)', 'Fe', '#64748b');

    // Left half: Reddish Brown Hydrated Rust Layer (Fe2O3.nH2O)
    const rustLayer = new THREE.Mesh(
      new THREE.BoxGeometry(1.7, 0.4, 2.3),
      new THREE.MeshStandardMaterial({ color: 0xb45309, roughness: 0.95, emissive: 0x78350f, emissiveIntensity: 0.4 })
    );
    rustLayer.position.set(-0.9, 0, 0);
    rustGroup.add(rustLayer);
    addAnchor(rustLayer, 'মরিচা স্তর (Fe₂O₃·nH₂O বাদামী ক্ষয়)', 'Hydrated Iron Rust', 'Fe₂O₃·nH₂O', '#b45309');

    // Right half: Shiny Galvanized Zinc Protective Layer (Galvanizing Zn)
    const zincLayer = new THREE.Mesh(
      new THREE.BoxGeometry(1.7, 0.4, 2.3),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.9, roughness: 0.1, emissive: 0x0284c7, emissiveIntensity: 0.5 })
    );
    zincLayer.position.set(0.9, 0, 0);
    rustGroup.add(zincLayer);
    addAnchor(zincLayer, 'গ্যালভানাইজিং জিংক প্রলেপ (Zn সুরক্ষা)', 'Galvanized Zinc Layer', 'Zn Coating', '#38bdf8');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 13 & 14: বোর্ড সৃজনশীল প্রশ্ন ও রিভিশন মাইন্ডম্যাপ
  // -------------------------------------------------------------------------
  if (slideId === 13 || slideId === 14) {
    const summaryGroup = new THREE.Group();
    group.add(summaryGroup);
    refs.summaryGroup = summaryGroup;

    // Glowing Central Core Atom (Master Chemistry Reactions)
    const coreMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 32, 32),
      new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        emissive: 0x0891b2,
        emissiveIntensity: 0.8,
        metalness: 0.5,
        roughness: 0.2
      })
    );
    summaryGroup.add(coreMesh);
    addAnchor(coreMesh, 'অধ্যায় ৭: রাসায়নিক বিক্রিয়া মূল মাস্টার', 'Chapter 7 Mastery', 'Ch-7 Core', '#06b6d4');

    // Revolving Orbiting Satellite Badges (4 Topics: Redox, Equilibrium, Heat, Rust)
    const orbitGroup = new THREE.Group();
    summaryGroup.add(orbitGroup);
    refs.chapter7Orbitals = orbitGroup;

    const topics = [
      { text: '১. রেডক্স ও জারণ সংখ্যা', color: '#10b981', symbol: 'Redox' },
      { text: '২. লা-শাতেলিয়ার সাম্যাবস্থা', color: '#f59e0b', symbol: 'Equilibrium' },
      { text: '৩. তাপোৎপাদী ও তাপহারী', color: '#ef4444', symbol: 'ΔH' },
      { text: '৪. ক্ষতিকর বিক্রিয়া ও মরিচা', color: '#8b5cf6', symbol: 'Corrosion' }
    ];

    topics.forEach((t, i) => {
      const angle = (i / 4) * Math.PI * 2;
      const sMesh = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.4),
        new THREE.MeshStandardMaterial({ color: new THREE.Color(t.color), emissive: new THREE.Color(t.color), emissiveIntensity: 0.7 })
      );
      sMesh.position.set(Math.cos(angle) * 2.8, Math.sin(angle * 2) * 0.4, Math.sin(angle) * 2.8);
      orbitGroup.add(sMesh);
      addAnchor(sMesh, t.text, t.text, t.symbol, t.color);
    });
  }
}

/**
 * Real-time animation physics for Chemistry Chapter 7
 */
export function updateChemistryCh7Physics(
  slideId: number,
  time: number,
  refs: any
) {
  // Slide 1: Flame pulsing & ice gentle rocking
  if (slideId === 1 && refs.chemFlameCore) {
    const scale = 1.0 + Math.sin(time * 6) * 0.08;
    refs.chemFlameCore.scale.set(scale, scale, scale);
    if (refs.changeSplitGroup) {
      refs.changeSplitGroup.rotation.y = Math.sin(time * 0.5) * 0.15;
    }
  }

  // Slide 2: Forward & Backward reversible arrow pulsing
  if (slideId === 2) {
    if (refs.forwardArrow) refs.forwardArrow.rotation.z = Math.PI / 4 + Math.sin(time * 2) * 0.1;
    if (refs.backwardArrow) refs.backwardArrow.rotation.z = (Math.PI + Math.PI / 4) + Math.cos(time * 2) * 0.1;
    if (refs.reversibleGroup) refs.reversibleGroup.rotation.y = time * 0.3;
  }

  // Slide 3: Energy traverse ball rolling along the curve
  if (slideId === 3 && refs.energyTraverseBall) {
    const t = (Math.sin(time * 1.5) + 1) * 0.5; // 0 to 1
    const x = -2.5 + t * 5.0;
    const y = Math.exp(-x * x * 0.7) * 2.2 - (x * 0.3);
    refs.energyTraverseBall.position.set(x, y + 0.28, 0);
  }

  // Slide 4 & 5: Redox electron jump oscillation
  if ((slideId === 4 || slideId === 5) && refs.redoxElectrons) {
    const offset = Math.sin(time * 3) * 1.8;
    refs.redoxElectrons.position.x = offset;
    refs.redoxElectrons.rotation.z = time * 4;
  }

  // Slide 7: Hydration water molecules rotation
  if (slideId === 7 && refs.hydrationWaterRing) {
    refs.hydrationWaterRing.rotation.y = time * 0.6;
    refs.hydrationWaterRing.rotation.x = Math.sin(time * 0.8) * 0.15;
  }

  // Slide 8: Oxidation tetrahedron rotation
  if (slideId === 8 && refs.tetraOxyGroup) {
    refs.tetraOxyGroup.rotation.y = time * 0.8;
    refs.tetraOxyGroup.rotation.x = time * 0.4;
  }

  // Slide 10 & 11: Haber piston vibration & gas particles Brownian motion
  if ((slideId === 10 || slideId === 11)) {
    if (refs.haberPiston) {
      refs.haberPiston.position.y = 1.4 + Math.sin(time * 2) * 0.15;
    }
    if (refs.haberGasGroup) {
      refs.haberGasGroup.rotation.y = time * 0.5;
    }
  }

  // Slide 13 & 14: Orbital satellites revolution
  if ((slideId === 13 || slideId === 14) && refs.chapter7Orbitals) {
    refs.chapter7Orbitals.rotation.y = time * 0.7;
    refs.chapter7Orbitals.rotation.x = Math.sin(time * 0.5) * 0.2;
  }
}
