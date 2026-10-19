import * as THREE from 'three';

type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;

/**
 * Builds rich, dedicated 3D interactive models for all 14 slides in Chemistry Chapter 6:
 * মোলের ধারণা ও রাসায়নিক গণনা (Concept of Mole and Chemical Calculations)
 */
export function buildChemistryCh6Scene(
  slideId: number,
  chapter: number,
  group: THREE.Group,
  refs: any,
  addAnchor: AddAnchorFn
) {
  refs.chemCh6Slide = slideId;
  refs.chemCh6Chapter = chapter;

  // -------------------------------------------------------------------------
  // Slide 1: মোলের মৌলিক ধারণা ও অ্যাভোগাড্রো সংখ্যা (Avogadro Constant 6.02x10^23)
  // -------------------------------------------------------------------------
  if (slideId === 1) {
    const moleGroup = new THREE.Group();
    group.add(moleGroup);
    refs.moleCoreGroup = moleGroup;

    // Golden Carbon-12 Central Cube (12 grams of 12C = 1 mole)
    const cubeGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0xd97706,
      emissiveIntensity: 0.5
    });
    const c12Cube = new THREE.Mesh(cubeGeo, cubeMat);
    moleGroup.add(c12Cube);
    addAnchor(c12Cube, '১২ গ্রাম কার্বন-১২ (¹²C) = ১ মোল', '12g Carbon-12 = 1 Mole', '¹²C (12g)', '#f59e0b');

    // Revolving Avogadro Particle Ring
    const ringGroup = new THREE.Group();
    moleGroup.add(ringGroup);
    refs.avogadroRings = ringGroup;

    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2;
      const radius = 2.8;
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.16, 16, 16),
        new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          emissive: 0x0284c7,
          emissiveIntensity: 0.8,
          metalness: 0.4
        })
      );
      sphere.position.set(Math.cos(angle) * radius, Math.sin(angle * 2) * 0.4, Math.sin(angle) * radius);
      ringGroup.add(sphere);
    }

    // Outer Torus Halo
    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(3.0, 0.05, 16, 64),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6 })
    );
    halo.rotation.x = Math.PI / 2;
    ringGroup.add(halo);
    addAnchor(halo, 'অ্যাভোগাড্রো সংখ্যা (NA = ৬.০২×১০²³ টি কণা)', 'Avogadro Constant (NA = 6.02x10^23)', 'NA', '#38bdf8');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 2: পারমাণবিক ভর, আণবিক ভর ও মোলার ভর (Molecular Mass Balance)
  // -------------------------------------------------------------------------
  if (slideId === 2) {
    const balanceGroup = new THREE.Group();
    group.add(balanceGroup);
    refs.massBalanceGroup = balanceGroup;

    // Balance Base and Fulcrum Stand
    const stand = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.4, 3.2, 16),
      new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8 })
    );
    stand.position.y = -0.5;
    balanceGroup.add(stand);

    // Balance Beam
    const beam = new THREE.Mesh(
      new THREE.BoxGeometry(6.0, 0.15, 0.3),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9 })
    );
    beam.position.y = 1.1;
    balanceGroup.add(beam);
    refs.balanceBeam = beam;

    // Left Pan: Water molecule (18 g/mol)
    const h2o = new THREE.Mesh(
      new THREE.SphereGeometry(0.7, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x0891b2, emissiveIntensity: 0.5 })
    );
    h2o.position.set(-2.5, 1.8, 0);
    balanceGroup.add(h2o);
    addAnchor(h2o, 'পানি (H₂O) = ১৮ g/mol', 'Water Molar Mass = 18 g/mol', '18 g/mol', '#06b6d4');

    // Right Pan: Sulfuric Acid (98 g/mol)
    const h2so4 = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.5 })
    );
    h2so4.position.set(2.5, 0.4, 0);
    balanceGroup.add(h2so4);
    addAnchor(h2so4, 'সালফিউরিক এসিড (H₂SO₄) = ৯৮ g/mol', 'Sulfuric Acid = 98 g/mol', '98 g/mol', '#f59e0b');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 3: মোলের মাস্টার সমীকরণ চতুর্ভুজ (n = W/M = N/NA = V/22.4)
  // -------------------------------------------------------------------------
  if (slideId === 3) {
    const quadGroup = new THREE.Group();
    group.add(quadGroup);
    refs.formulaQuadGroup = quadGroup;

    // Central Mole Sphere (n)
    const nCore = new THREE.Mesh(
      new THREE.SphereGeometry(1.0, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.7 })
    );
    quadGroup.add(nCore);
    addAnchor(nCore, 'মোল সংখ্যা (n = কেন্দ্রীয় সমন্বয়ক)', 'Mole Number (n)', 'n (mol)', '#38bdf8');

    // 4 Corner nodes: Mass (W/M), Particles (N/NA), Volume (V/22.4), Molarity (S×V)
    const nodes = [
      { textBn: 'ভর রূপান্তর (W / M)', textEn: 'Mass: W = n x M', pos: [-2.6, 1.8, 0], col: 0xf59e0b, sym: 'W/M' },
      { textBn: 'কণা সংখ্যা (N / NA)', textEn: 'Particles: N = n x NA', pos: [2.6, 1.8, 0], col: 0x10b981, sym: 'N/NA' },
      { textBn: 'গ্যাসের আয়তন (V / ২২.৪ L)', textEn: 'STP Volume: V = n x 22.4L', pos: [-2.6, -1.8, 0], col: 0xa855f7, sym: 'V/22.4' },
      { textBn: 'মোলার দ্রবণ (S × V_L)', textEn: 'Molarity: n = S x V(L)', pos: [2.6, -1.8, 0], col: 0xec4899, sym: 'S x V' }
    ];

    nodes.forEach(node => {
      const mesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.6, 0.6, 0.4, 24),
        new THREE.MeshStandardMaterial({ color: node.col, emissive: node.col, emissiveIntensity: 0.6 })
      );
      mesh.rotation.x = Math.PI / 2;
      mesh.position.set(node.pos[0], node.pos[1], node.pos[2]);
      quadGroup.add(mesh);
      addAnchor(mesh, node.textBn, node.textEn, node.sym, '#' + node.col.toString(16));

      // Connecting conduit pipe to center
      const lineGeo = new THREE.CylinderGeometry(0.06, 0.06, 3.2, 12);
      const lineMat = new THREE.MeshStandardMaterial({ color: node.col });
      const line = new THREE.Mesh(lineGeo, lineMat);
      line.position.set(node.pos[0] * 0.5, node.pos[1] * 0.5, 0);
      line.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(node.pos[0], node.pos[1], 0).normalize());
      quadGroup.add(line);
    });
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 4: গ্যাসের মোলার আয়তন (STP ২২.৪ লিটার কিউব ও কণা)
  // -------------------------------------------------------------------------
  if (slideId === 4) {
    const cubeGroup = new THREE.Group();
    group.add(cubeGroup);
    refs.stpCubeGroup = cubeGroup;

    // Transparent Glass Cube representing 22.4 Liters at STP
    const boxSize = 3.6;
    const boxGeo = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
    const boxMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.25,
      roughness: 0.1,
      metalness: 0.1,
      wireframe: false
    });
    const stpBox = new THREE.Mesh(boxGeo, boxMat);
    cubeGroup.add(stpBox);

    // Glowing wireframe outline edges
    const edges = new THREE.EdgesGeometry(boxGeo);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, linewidth: 2 });
    const wireframe = new THREE.LineSegments(edges, lineMat);
    cubeGroup.add(wireframe);
    addAnchor(stpBox, 'STP মোলার আয়তন = ২২.৪ লিটার (০°C ও ১ atm)', 'STP Molar Volume = 22.4 Liters', '22.4 L', '#38bdf8');

    // Bouncing gas particles inside (representing 6.02x10^23 molecules)
    refs.stpGasParticles = [];
    for (let p = 0; p < 18; p++) {
      const part = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 12, 12),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xdc2626, emissiveIntensity: 0.7 })
      );
      part.position.set((Math.random() - 0.5) * 3.0, (Math.random() - 0.5) * 3.0, (Math.random() - 0.5) * 3.0);
      cubeGroup.add(part);
      refs.stpGasParticles.push({
        mesh: part,
        vel: new THREE.Vector3((Math.random() - 0.5) * 2.0, (Math.random() - 0.5) * 2.0, (Math.random() - 0.5) * 2.0)
      });
    }
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 5: মোলার দ্রবণ (১ লিটার ভলিউমেট্রিক ফ্লাস্ক ও মোলারিটি)
  // -------------------------------------------------------------------------
  if (slideId === 5) {
    const flaskGroup = new THREE.Group();
    group.add(flaskGroup);
    refs.volFlaskGroup = flaskGroup;

    // Glass Volumetric Flask Body
    const bulb = new THREE.Mesh(
      new THREE.SphereGeometry(2.0, 32, 32),
      new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.35, roughness: 0.1 })
    );
    bulb.position.y = -0.5;
    flaskGroup.add(bulb);

    // Long Neck
    const neck = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.5, 2.8, 24, 1, true),
      new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.35, roughness: 0.1 })
    );
    neck.position.y = 1.6;
    flaskGroup.add(neck);

    // Liquid Solution inside (Blue CuSO4 or colored 1.0 Molar solution)
    const liquid = new THREE.Mesh(
      new THREE.CylinderGeometry(1.8, 1.8, 1.8, 32),
      new THREE.MeshStandardMaterial({ color: 0x0284c7, transparent: true, opacity: 0.75, emissive: 0x0369a1, emissiveIntensity: 0.5 })
    );
    liquid.position.y = -0.6;
    flaskGroup.add(liquid);
    addAnchor(liquid, '১ মোলার দ্রবণ (১ লিটারে ১ মোল দ্রবীভূত)', '1.0 Molar Solution (1 mol in 1 Liter)', '1.0 M', '#0284c7');

    // Meniscus graduation mark ring on neck
    const mark = new THREE.Mesh(
      new THREE.TorusGeometry(0.52, 0.03, 12, 32),
      new THREE.MeshBasicMaterial({ color: 0xef4444 })
    );
    mark.rotation.x = Math.PI / 2;
    mark.position.y = 1.8;
    flaskGroup.add(mark);
    addAnchor(mark, '১০০০ mL মেনিস্কাস দাগ', '1000 mL Calibration Mark', '1000 mL', '#ef4444');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 6: মোলারিটি সূত্র W = SMV / 1000 ও ডিজিটাল ব্যালেন্স
  // -------------------------------------------------------------------------
  if (slideId === 6) {
    const labBalanceGroup = new THREE.Group();
    group.add(labBalanceGroup);
    refs.digitalBalanceGroup = labBalanceGroup;

    // Digital Analytical Balance Base
    const balBase = new THREE.Mesh(
      new THREE.BoxGeometry(4.2, 0.6, 3.4),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5, metalness: 0.6 })
    );
    balBase.position.y = -1.6;
    labBalanceGroup.add(balBase);

    // Stainless steel weighing pan
    const pan = new THREE.Mesh(
      new THREE.CylinderGeometry(1.6, 1.6, 0.1, 32),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.95, roughness: 0.1 })
    );
    pan.position.y = -1.25;
    labBalanceGroup.add(pan);

    // Watch glass with chemical crystals (Na2CO3 10.6g)
    const powder = new THREE.Mesh(
      new THREE.ConeGeometry(0.8, 0.5, 24),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.8, emissive: 0x0284c7, emissiveIntensity: 0.4 })
    );
    powder.position.y = -0.95;
    labBalanceGroup.add(powder);
    addAnchor(powder, 'প্রয়োজনীয় ভর W = (SMV)/১০০০ = ১০.৬ গ্রাম', 'Measured Solute Mass (W)', '10.6 g', '#38bdf8');

    // Digital LED Display Screen
    const screen = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 0.5, 0.05),
      new THREE.MeshBasicMaterial({ color: 0x0f172a })
    );
    screen.position.set(0, -1.6, 1.72);
    labBalanceGroup.add(screen);
    addAnchor(screen, 'ডিজিটাল ব্যালেন্স রিডিং: ১০.৬০০ g', 'Digital Balance Display: 10.600g', '10.600g', '#22c55e');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 7: শতকরা সংযুতি (H2SO4 এর আণবিক পাই ও ভর অনুপাত)
  // -------------------------------------------------------------------------
  if (slideId === 7) {
    const pieGroup = new THREE.Group();
    group.add(pieGroup);
    refs.percentPieGroup = pieGroup;

    // 3D Elemental Pie Sectors for H2SO4:
    // Oxygen: 65.31% (Angle = ~235 deg)
    const oSec = new THREE.Mesh(
      new THREE.CylinderGeometry(2.2, 2.2, 0.6, 32, 1, false, 0, Math.PI * 1.3),
      new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.5 })
    );
    oSec.rotation.x = Math.PI / 2;
    pieGroup.add(oSec);
    addAnchor(oSec, 'অক্সিজেন (O): ৬৫.৩১% (৬৪ গ্রাম)', 'Oxygen (O): 65.31%', 'O: 65.3%', '#ef4444');

    // Sulfur: 32.65% (Angle = ~117 deg)
    const sSec = new THREE.Mesh(
      new THREE.CylinderGeometry(2.2, 2.2, 0.6, 32, 1, false, Math.PI * 1.3, Math.PI * 0.65),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.5 })
    );
    sSec.rotation.x = Math.PI / 2;
    pieGroup.add(sSec);
    addAnchor(sSec, 'সালফার (S): ৩২.৬৫% (৩২ গ্রাম)', 'Sulfur (S): 32.65%', 'S: 32.7%', '#f59e0b');

    // Hydrogen: 2.04% (Remaining small slice)
    const hSec = new THREE.Mesh(
      new THREE.CylinderGeometry(2.2, 2.2, 0.6, 32, 1, false, Math.PI * 1.95, Math.PI * 0.05),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 })
    );
    hSec.rotation.x = Math.PI / 2;
    pieGroup.add(hSec);
    addAnchor(hSec, 'হাইড্রোজেন (H): ২.০৪% (২ গ্রাম)', 'Hydrogen (H): 2.04%', 'H: 2.04%', '#38bdf8');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 8: স্থূল সংকেত (Empirical Formula CH2O)
  // -------------------------------------------------------------------------
  if (slideId === 8) {
    const empGroup = new THREE.Group();
    group.add(empGroup);
    refs.empiricalGroup = empGroup;

    // Central Carbon (Black/Gray)
    const cAtom = new THREE.Mesh(
      new THREE.SphereGeometry(0.7, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.3 })
    );
    empGroup.add(cAtom);
    addAnchor(cAtom, 'কার্বন পরমাণু অনুপাত = ১', 'Carbon Ratio = 1', 'C (1)', '#94a3b8');

    // Two Hydrogen Atoms (Cyan, ratio = 2)
    const h1 = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 })
    );
    h1.position.set(-1.3, 0.9, 0);
    empGroup.add(h1);

    const h2 = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 })
    );
    h2.position.set(-1.3, -0.9, 0);
    empGroup.add(h2);
    addAnchor(h1, 'হাইড্রোজেন অনুপাত = ২ (CH₂O)', 'Hydrogen Ratio = 2', 'H (2)', '#38bdf8');

    // One Oxygen Atom (Red, ratio = 1)
    const oAtom = new THREE.Mesh(
      new THREE.SphereGeometry(0.65, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.5 })
    );
    oAtom.position.set(1.4, 0, 0);
    empGroup.add(oAtom);
    addAnchor(oAtom, 'অক্সিজেন অনুপাত = ১ (CH₂O)', 'Oxygen Ratio = 1', 'O (1)', '#ef4444');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 9: আণবিক সংকেত গ্লুকোজ রিং (C6H12O6 = (CH2O)6)
  // -------------------------------------------------------------------------
  if (slideId === 9) {
    const gluGroup = new THREE.Group();
    group.add(gluGroup);
    refs.glucoseRingGroup = gluGroup;

    // 6-Membered Hexagonal Glucose Ring
    const ringRadius = 2.0;
    for (let c = 0; c < 6; c++) {
      const ang = (c / 6) * Math.PI * 2;
      const atomMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.45, 20, 20),
        new THREE.MeshStandardMaterial({
          color: c === 5 ? 0xef4444 : 0x06b6d4,
          emissive: c === 5 ? 0xb91c1c : 0x0891b2,
          emissiveIntensity: 0.6
        })
      );
      atomMesh.position.set(Math.cos(ang) * ringRadius, Math.sin(ang) * ringRadius, 0);
      gluGroup.add(atomMesh);

      // Bond rod to next atom
      const nextAng = ((c + 1) / 6) * Math.PI * 2;
      const nextPos = new THREE.Vector3(Math.cos(nextAng) * ringRadius, Math.sin(nextAng) * ringRadius, 0);
      const curPos = new THREE.Vector3(Math.cos(ang) * ringRadius, Math.sin(ang) * ringRadius, 0);
      const rodGeo = new THREE.CylinderGeometry(0.08, 0.08, curPos.distanceTo(nextPos), 12);
      const rodMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8 });
      const rod = new THREE.Mesh(rodGeo, rodMat);
      rod.position.copy(curPos.clone().add(nextPos).multiplyScalar(0.5));
      rod.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), nextPos.clone().sub(curPos).normalize());
      gluGroup.add(rod);
    }
    addAnchor(gluGroup, 'গ্লুকোজ আণবিক সংকেত C₆H₁₂O₆ = (CH₂O)₆, n = ৬', 'Glucose Molecular Formula = (CH2O)6', 'C6H12O6', '#06b6d4');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 10: স্টয়কিওমিতিক সমীকরণ ও সমতা (2H2 + O2 -> 2H2O)
  // -------------------------------------------------------------------------
  if (slideId === 10) {
    const eqGroup = new THREE.Group();
    group.add(eqGroup);
    refs.reactionEqGroup = eqGroup;

    // Reactants side (2 H2 molecules + 1 O2 molecule)
    const rGroup = new THREE.Group();
    rGroup.position.set(-2.4, 0, 0);
    eqGroup.add(rGroup);

    const h2_1 = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), new THREE.MeshStandardMaterial({ color: 0x38bdf8 }));
    h2_1.position.set(-0.5, 0.8, 0);
    rGroup.add(h2_1);
    const h2_2 = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), new THREE.MeshStandardMaterial({ color: 0x38bdf8 }));
    h2_2.position.set(-0.5, -0.8, 0);
    rGroup.add(h2_2);
    const o2_mesh = new THREE.Mesh(new THREE.SphereGeometry(0.65, 20, 20), new THREE.MeshStandardMaterial({ color: 0xef4444 }));
    o2_mesh.position.set(0.6, 0, 0);
    rGroup.add(o2_mesh);
    addAnchor(rGroup, 'বিক্রিয়ক: 2H₂ (৪g) + O₂ (৩২g) = ৩৬ গ্রাম', 'Reactants: 2H2 + O2 = 36g', 'Reactants', '#38bdf8');

    // Reaction Arrow
    const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.8, 16), new THREE.MeshStandardMaterial({ color: 0x22c55e }));
    arrow.rotation.z = -Math.PI / 2;
    arrow.position.set(0, 0, 0);
    eqGroup.add(arrow);

    // Products side (2 H2O molecules = 36g)
    const pGroup = new THREE.Group();
    pGroup.position.set(2.4, 0, 0);
    eqGroup.add(pGroup);

    const water1 = new THREE.Mesh(new THREE.SphereGeometry(0.6, 20, 20), new THREE.MeshStandardMaterial({ color: 0x0284c7 }));
    water1.position.set(0, 0.8, 0);
    pGroup.add(water1);
    const water2 = new THREE.Mesh(new THREE.SphereGeometry(0.6, 20, 20), new THREE.MeshStandardMaterial({ color: 0x0284c7 }));
    water2.position.set(0, -0.8, 0);
    pGroup.add(water2);
    addAnchor(pGroup, 'উৎপাদ: 2H₂O (৩৬ গ্রাম) — ভরের নিত্যতা নিশ্চিত', 'Products: 2H2O = 36g (Mass Conserved)', '2H2O (36g)', '#0284c7');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 11: লিমিটিং বিক্রিয়ক এরিনা (H2 + Cl2 -> 2HCl)
  // -------------------------------------------------------------------------
  if (slideId === 11) {
    const limGroup = new THREE.Group();
    group.add(limGroup);
    refs.limitingArenaGroup = limGroup;

    // Glowing Limiting Reactant (Chlorine Cl2 — finishes first)
    const clLimiting = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 28, 28),
      new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x16a34a, emissiveIntensity: 0.8 })
    );
    clLimiting.position.set(-2.0, 0, 0);
    limGroup.add(clLimiting);
    addAnchor(clLimiting, 'লিমিটিং বিক্রিয়ক: Cl₂ (আগে সম্পূর্ণ শেষ হয়ে যায়)', 'Limiting Reactant: Cl2 (Depleted First)', 'Cl2 (Limiting)', '#22c55e');

    // Excess Reactant (Hydrogen H2 — leftover)
    const hExcess = new THREE.Mesh(
      new THREE.SphereGeometry(0.7, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 })
    );
    hExcess.position.set(2.0, 0.8, 0);
    limGroup.add(hExcess);
    addAnchor(hExcess, 'অতিরিক্ত বিক্রিয়ক: H₂ (২.৮৯ গ্রাম অবশিষ্ট থাকে)', 'Excess Reactant: H2 (Leftover)', 'H2 (Excess)', '#38bdf8');

    // Produced HCl Flask in middle
    const hclFlask = new THREE.Mesh(
      new THREE.ConeGeometry(0.9, 1.6, 24),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.6 })
    );
    hclFlask.position.set(0, -1.0, 0);
    limGroup.add(hclFlask);
    addAnchor(hclFlask, 'উৎপন্ন 2HCl (উৎপাদের পরিমাণ Cl₂ দ্বারা নির্ধারিত)', 'Produced 2HCl', '2HCl Yield', '#f59e0b');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 12: উৎপাদের শতকরা পরিমাণ (% Yield) ফ্লাস্ক ও গেজ
  // -------------------------------------------------------------------------
  if (slideId === 12) {
    const yieldGroup = new THREE.Group();
    group.add(yieldGroup);
    refs.yieldGroup = yieldGroup;

    // Reaction Flask
    const flask = new THREE.Mesh(
      new THREE.CylinderGeometry(0.4, 1.8, 2.6, 32),
      new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.4 })
    );
    flask.position.set(-1.2, 0, 0);
    yieldGroup.add(flask);

    // Actual Yield Liquid inside (90%)
    const actualLiq = new THREE.Mesh(
      new THREE.CylinderGeometry(0.38, 1.7, 2.0, 32),
      new THREE.MeshStandardMaterial({ color: 0x10b981, transparent: true, opacity: 0.8, emissive: 0x059669, emissiveIntensity: 0.5 })
    );
    actualLiq.position.set(-1.2, -0.3, 0);
    yieldGroup.add(actualLiq);
    addAnchor(actualLiq, 'প্রকৃত প্রাপ্ত উৎপাদ = ৯০% (ল্যাবে সংগৃহীত)', 'Actual Yield = 90%', 'Actual: 90%', '#10b981');

    // Percentage Yield Gauge Meter on right
    const gaugeRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.4, 0.15, 16, 40, Math.PI * 1.5),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 })
    );
    gaugeRing.position.set(1.8, 0.4, 0);
    yieldGroup.add(gaugeRing);
    addAnchor(gaugeRing, 'উৎপাদের শতকরা পরিমাণ = (প্রকৃত / তাত্ত্বিক) × ১০০%', 'Percentage Yield Formula', '% Yield', '#38bdf8');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 13: সৃজনশীল প্রশ্ন মাস্টারক্লাস ল্যাবরেটরি অ্যাপারেটাস
  // -------------------------------------------------------------------------
  if (slideId === 13) {
    const cqGroup = new THREE.Group();
    group.add(cqGroup);

    // Apparatus assembly: Beaker + Pipette + Conical Flask
    const beaker = new THREE.Mesh(
      new THREE.CylinderGeometry(1.2, 1.2, 2.0, 24),
      new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.4 })
    );
    beaker.position.set(-1.8, -0.5, 0);
    cqGroup.add(beaker);
    addAnchor(beaker, 'পাত্র-A (২৫০ mL 0.1 M Na₂CO₃)', 'Beaker A (250 mL 0.1M Na2CO3)', 'Vessel A', '#38bdf8');

    const conFlask = new THREE.Mesh(
      new THREE.ConeGeometry(1.4, 2.2, 24),
      new THREE.MeshPhysicalMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.4 })
    );
    conFlask.position.set(1.8, -0.4, 0);
    cqGroup.add(conFlask);
    addAnchor(conFlask, 'পাত্র-B (বিক্রিয়া ও লিমিটিং বিক্রিয়ক সিকিউ)', 'Vessel B (Reaction CQ)', 'Vessel B', '#f59e0b');
    return;
  }

  // -------------------------------------------------------------------------
  // Slide 14: অধ্যায় ৬ সারসংক্ষেপ কোর ও মাইন্ডম্যাপ গ্লোব
  // -------------------------------------------------------------------------
  if (slideId === 14) {
    const revGroup = new THREE.Group();
    group.add(revGroup);
    refs.revGroup = revGroup;

    // Glowing Central Mole Orb
    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(1.6, 32, 32),
      new THREE.MeshStandardMaterial({
        color: 0x06b6d4,
        emissive: 0x0891b2,
        emissiveIntensity: 0.7,
        roughness: 0.2
      })
    );
    revGroup.add(orb);
    addAnchor(orb, 'মোলের ধারণা ও রাসায়নিক গণনা — সম্পূর্ণ অধ্যায় সম্পন্ন!', 'Mole Concept & Chemical Calculations Mastered', 'Ch 6 Core', '#06b6d4');

    // 3 Concentric Orbit Rings of Mastery
    const colors = [0x38bdf8, 0x10b981, 0xf59e0b];
    for (let r = 0; r < 3; r++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(2.3 + r * 0.7, 0.04, 16, 64),
        new THREE.MeshBasicMaterial({ color: colors[r], transparent: true, opacity: 0.7 })
      );
      ring.rotation.x = (Math.PI / 4) * (r + 1);
      ring.rotation.y = (Math.PI / 6) * r;
      revGroup.add(ring);
    }
    return;
  }
}

/**
 * Animated frame updates for Chemistry Chapter 6 scenes
 */
export function updateChemistryCh6Physics(
  slideId: number,
  time: number,
  refs: any
) {
  // Slide 1: Avogadro ring rotation
  if (slideId === 1) {
    if (refs.avogadroRings) refs.avogadroRings.rotation.y = time * 0.8;
    if (refs.moleCoreGroup) refs.moleCoreGroup.rotation.x = Math.sin(time * 0.5) * 0.15;
  }

  // Slide 2: Balance beam tilting
  if (slideId === 2 && refs.balanceBeam) {
    refs.balanceBeam.rotation.z = Math.sin(time * 1.5) * 0.08;
  }

  // Slide 3: Formula Quad pulse
  if (slideId === 3 && refs.formulaQuadGroup) {
    refs.formulaQuadGroup.rotation.y = time * 0.3;
  }

  // Slide 4: STP gas particles bouncing
  if (slideId === 4 && refs.stpGasParticles) {
    refs.stpGasParticles.forEach((p: any) => {
      p.mesh.position.addScaledVector(p.vel, 0.02);
      // Bounce inside box boundaries (-1.6 to 1.6)
      if (Math.abs(p.mesh.position.x) > 1.6) p.vel.x *= -1;
      if (Math.abs(p.mesh.position.y) > 1.6) p.vel.y *= -1;
      if (Math.abs(p.mesh.position.z) > 1.6) p.vel.z *= -1;
    });
  }

  // Slide 7: Percentage Pie gentle rotation
  if (slideId === 7 && refs.percentPieGroup) {
    refs.percentPieGroup.rotation.z = time * 0.4;
  }

  // Slide 9: Glucose ring rotation
  if (slideId === 9 && refs.glucoseRingGroup) {
    refs.glucoseRingGroup.rotation.z = time * 0.6;
    refs.glucoseRingGroup.rotation.y = Math.sin(time * 0.8) * 0.2;
  }

  // Slide 14: Revision orb orbits
  if (slideId === 14 && refs.revGroup) {
    refs.revGroup.rotation.y = time * 0.5;
  }
}
