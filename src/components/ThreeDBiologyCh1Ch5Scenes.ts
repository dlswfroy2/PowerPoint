/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as THREE from 'three';

type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;

// =========================================================================
// BIOLOGY CHAPTER 1: জীবন পাঠ (LESSON ON LIFE 3D SCENES)
// =========================================================================
export function buildBiologyCh1Scene(
  slideId: number,
  group: THREE.Group,
  refs: any,
  addAnchor: AddAnchorFn
) {
  // Slide 1: জীববিজ্ঞানের ধারণা ও পরিচিতি (DNA Double Helix & Tree of Life)
  if (slideId === 1) {
    const helixGroup = new THREE.Group();
    group.add(helixGroup);
    refs.bio1HelixGroup = helixGroup;

    // DNA double strands
    const strandGeo = new THREE.SphereGeometry(0.12, 12, 12);
    const strandMat1 = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 });
    const strandMat2 = new THREE.MeshStandardMaterial({ color: 0xec4899, emissive: 0xbe185d, emissiveIntensity: 0.6 });
    const rungMatA = new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x15803d, emissiveIntensity: 0.5 });
    const rungMatB = new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xca8a04, emissiveIntensity: 0.5 });

    const numPoints = 28;
    for (let i = 0; i < numPoints; i++) {
      const angle = i * 0.45;
      const y = (i - numPoints / 2) * 0.22;
      const r = 1.1;

      // Strand 1
      const s1 = new THREE.Mesh(strandGeo, strandMat1);
      s1.position.set(Math.cos(angle) * r, y, Math.sin(angle) * r);
      helixGroup.add(s1);

      // Strand 2
      const s2 = new THREE.Mesh(strandGeo, strandMat2);
      s2.position.set(Math.cos(angle + Math.PI) * r, y, Math.sin(angle + Math.PI) * r);
      helixGroup.add(s2);

      // Connecting nucleotide base pair rungs
      if (i % 2 === 0) {
        const rungGeo = new THREE.CylinderGeometry(0.04, 0.04, r * 2, 8);
        const rungMesh = new THREE.Mesh(rungGeo, i % 4 === 0 ? rungMatA : rungMatB);
        rungMesh.position.set(0, y, 0);
        rungMesh.rotation.z = Math.PI / 2;
        rungMesh.rotation.y = -angle;
        helixGroup.add(rungMesh);
      }
    }
    addAnchor(helixGroup, 'দ্বিসূত্রক ডিএনএ (জীবনের রাসায়নিক ভিত্তি)', 'DNA Double Helix (Code of Life)', 'DNA', '#38bdf8');

    // Central core glowing life orb
    const lifeOrb = new THREE.Mesh(
      new THREE.SphereGeometry(0.65, 24, 24),
      new THREE.MeshPhysicalMaterial({ color: 0x10b981, transparent: true, opacity: 0.6, roughness: 0.1, emissive: 0x059669, emissiveIntensity: 0.7 })
    );
    group.add(lifeOrb);
    refs.bio1LifeOrb = lifeOrb;
    addAnchor(lifeOrb, 'সজীব কোষ ও প্রোটোপ্লাজম', 'Living Cell & Protoplasm', 'Life', '#10b981');

    // Halo energy rings
    const ringGeo = new THREE.TorusGeometry(2.4, 0.03, 8, 48);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.35 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    group.add(ring);
    return;
  }

  // Slide 2: জীববিজ্ঞানের শাখাসমূহ: ভৌত ও ফলিত (Lab Station with Microscope & Petri dish)
  if (slideId === 2) {
    const scopeGroup = new THREE.Group();
    group.add(scopeGroup);
    refs.bio1ScopeGroup = scopeGroup;

    // Microscope base
    const baseGeo = new THREE.CylinderGeometry(1.2, 1.4, 0.3, 24);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4 });
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.set(-1.0, -1.6, 0);
    scopeGroup.add(baseMesh);

    // Pillar arm
    const armGeo = new THREE.CylinderGeometry(0.18, 0.18, 2.2, 16);
    const armMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8, roughness: 0.2 });
    const armMesh = new THREE.Mesh(armGeo, armMat);
    armMesh.position.set(-1.4, -0.4, 0);
    scopeGroup.add(armMesh);

    // Optical barrel & eyepiece
    const tubeGeo = new THREE.CylinderGeometry(0.25, 0.2, 1.6, 16);
    const tubeMesh = new THREE.Mesh(tubeGeo, armMat);
    tubeMesh.position.set(-0.9, 0.7, 0);
    tubeMesh.rotation.z = -Math.PI / 6;
    scopeGroup.add(tubeMesh);

    // Objective lens cluster (glowing gold)
    const objGeo = new THREE.CylinderGeometry(0.15, 0.1, 0.4, 12);
    const objMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.7 });
    const objMesh = new THREE.Mesh(objGeo, objMat);
    objMesh.position.set(-0.6, -0.2, 0);
    scopeGroup.add(objMesh);
    addAnchor(objMesh, 'আণুবীক্ষণিক পর্যবেক্ষণ (কোষবিদ্যা ও হিস্টোলজি)', 'Compound Light Microscope', 'Micro', '#38bdf8');

    // Petri dish with culture colonies on the right
    const petriGroup = new THREE.Group();
    petriGroup.position.set(1.4, -1.2, 0);
    group.add(petriGroup);
    refs.bio1PetriGroup = petriGroup;

    const dishBottom = new THREE.Mesh(
      new THREE.CylinderGeometry(1.2, 1.2, 0.15, 24),
      new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.45, roughness: 0.1 })
    );
    petriGroup.add(dishBottom);

    const agarMat = new THREE.MeshStandardMaterial({ color: 0xd97706, emissive: 0xb45309, emissiveIntensity: 0.3 });
    const agarMesh = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 0.08, 24), agarMat);
    agarMesh.position.set(0, 0.05, 0);
    petriGroup.add(agarMesh);

    // Bacterial colonies dots
    for (let c = 0; c < 7; c++) {
      const colMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 8, 8),
        new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x16a34a, emissiveIntensity: 0.8 })
      );
      const angle = c * 0.9;
      const dist = 0.3 + (c % 3) * 0.3;
      colMesh.position.set(Math.cos(angle) * dist, 0.14, Math.sin(angle) * dist);
      petriGroup.add(colMesh);
    }
    addAnchor(petriGroup, 'পেট্রি ডিশ ও ব্যাক্টেরিয়া কালচার (অণুজীববিজ্ঞান)', 'Petri Culture Plate (Applied Microbio)', 'Culture', '#22c55e');
    return;
  }

  // Slide 3: ট্যাক্সনমিক স্তরক্রম পিরামিড (Taxonomic Hierarchy Pyramid)
  if (slideId === 3) {
    const pyrGroup = new THREE.Group();
    group.add(pyrGroup);
    refs.bio1PyrGroup = pyrGroup;

    const ranks = [
      { nameBn: '১. রাজ্য (Kingdom)', nameEn: 'Kingdom', color: 0x3b82f6, hex: '#3b82f6', w: 3.4, h: 0.45, y: -1.6 },
      { nameBn: '২. পর্ব (Phylum)', nameEn: 'Phylum', color: 0x06b6d4, hex: '#06b6d4', w: 2.9, h: 0.45, y: -1.1 },
      { nameBn: '৩. শ্রেণি (Class)', nameEn: 'Class', color: 0x10b981, hex: '#10b981', w: 2.4, h: 0.45, y: -0.6 },
      { nameBn: '৪. বর্গ (Order)', nameEn: 'Order', color: 0x84cc16, hex: '#84cc16', w: 1.9, h: 0.45, y: -0.1 },
      { nameBn: '৫. গোত্র (Family)', nameEn: 'Family', color: 0xfacc15, hex: '#facc15', w: 1.4, h: 0.45, y: 0.4 },
      { nameBn: '৬. গণ (Genus)', nameEn: 'Genus', color: 0xf97316, hex: '#f97316', w: 0.9, h: 0.45, y: 0.9 },
      { nameBn: '৭. প্রজাতি (Species)', nameEn: 'Species', color: 0xef4444, hex: '#ef4444', w: 0.45, h: 0.55, y: 1.45 }
    ];

    ranks.forEach((r, idx) => {
      const stepGeo = new THREE.BoxGeometry(r.w, r.h, r.w * 0.8);
      const stepMat = new THREE.MeshStandardMaterial({
        color: r.color,
        emissive: r.color,
        emissiveIntensity: 0.4,
        roughness: 0.3
      });
      const stepMesh = new THREE.Mesh(stepGeo, stepMat);
      stepMesh.position.set(0, r.y, 0);
      pyrGroup.add(stepMesh);

      if (idx === 0 || idx === 3 || idx === 6) {
        addAnchor(stepMesh, r.nameBn, r.nameEn, r.nameEn.slice(0, 3), r.hex);
      }
    });
    return;
  }

  // Slide 4: ৫টি রাজ্যের সমাহার (Whittaker & Margulis Five Kingdoms Ring)
  if (slideId === 4) {
    const systemGroup = new THREE.Group();
    group.add(systemGroup);
    refs.bio1FiveKingdomsGroup = systemGroup;

    const kingdoms = [
      { nameBn: 'রাজ্য ১: মনেরা (Monera)', nameEn: 'Kingdom Monera', color: 0x38bdf8, sym: 'Mon', geo: 'capsule' },
      { nameBn: 'রাজ্য ২: প্রোটিস্টা (Protista)', nameEn: 'Kingdom Protista', color: 0xf59e0b, sym: 'Prot', geo: 'torus' },
      { nameBn: 'রাজ্য ৩: ফানজাই (Fungi)', nameEn: 'Kingdom Fungi', color: 0xa855f7, sym: 'Fungi', geo: 'cone' },
      { nameBn: 'রাজ্য ৪: প্লান্টি (Plantae)', nameEn: 'Kingdom Plantae', color: 0x22c55e, sym: 'Plant', geo: 'box' },
      { nameBn: 'রাজ্য ৫: অ্যানিম্যালিয়া (Animalia)', nameEn: 'Kingdom Animalia', color: 0xef4444, sym: 'Anim', geo: 'sphere' }
    ];

    kingdoms.forEach((k, idx) => {
      const angle = (idx / kingdoms.length) * Math.PI * 2;
      const radius = 2.4;
      const kGroup = new THREE.Group();
      kGroup.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.6, Math.sin(angle) * 0.8);
      systemGroup.add(kGroup);

      let mesh: THREE.Mesh;
      const mat = new THREE.MeshStandardMaterial({ color: k.color, emissive: k.color, emissiveIntensity: 0.5 });
      if (k.geo === 'capsule') {
        mesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.35, 0.6, 12, 12), mat);
      } else if (k.geo === 'cone') {
        mesh = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.8, 16), mat);
      } else if (k.geo === 'box') {
        mesh = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.7), mat);
      } else if (k.geo === 'torus') {
        mesh = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.15, 12, 24), mat);
      } else {
        mesh = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 16), mat);
      }
      kGroup.add(mesh);
      addAnchor(mesh, k.nameBn, k.nameEn, k.sym, `#${k.color.toString(16).padStart(6, '0')}`);
    });

    // Central connector ring
    const connRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.4, 0.03, 8, 64),
      new THREE.MeshBasicMaterial({ color: 0x64748b, transparent: true, opacity: 0.3 })
    );
    connRing.rotation.x = Math.PI / 3;
    systemGroup.add(connRing);
    return;
  }

  // Slide 5: রাজ্য মনেরা — ব্যাকটেরিয়ার ৩ডি পূর্ণাঙ্গ ব্যবচ্ছেদ (Prokaryotic Bacterium)
  if (slideId === 5) {
    const bacGroup = new THREE.Group();
    group.add(bacGroup);
    refs.bio1BacGroup = bacGroup;

    // Bacterial capsule (pill)
    const capGeo = new THREE.CapsuleGeometry(0.9, 2.0, 20, 20);
    const capMat = new THREE.MeshPhysicalMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.5,
      roughness: 0.2,
      emissive: 0x0369a1,
      emissiveIntensity: 0.3
    });
    const capMesh = new THREE.Mesh(capGeo, capMat);
    capMesh.rotation.z = Math.PI / 2;
    bacGroup.add(capMesh);
    addAnchor(capMesh, 'পেপটিডোগ্লাইকান কোষপ্রাচীর ও ক্যাপসুল', 'Peptidoglycan Cell Wall', 'Wall', '#38bdf8');

    // Central circular naked DNA nucleoid
    const dnaCurveGeo = new THREE.TorusKnotGeometry(0.45, 0.08, 48, 12, 2, 3);
    const dnaMat = new THREE.MeshStandardMaterial({ color: 0xec4899, emissive: 0xdb2777, emissiveIntensity: 0.8 });
    const dnaMesh = new THREE.Mesh(dnaCurveGeo, dnaMat);
    dnaMesh.position.set(0, 0, 0);
    bacGroup.add(dnaMesh);
    refs.bio1BacDna = dnaMesh;
    addAnchor(dnaMesh, 'নিউক্লিঅয়েড (নগ্ন বৃত্তাকার ডিএনএ)', 'Prokaryotic Nucleoid DNA', 'DNA', '#ec4899');

    // Ribosomes 70S granules
    for (let r = 0; r < 24; r++) {
      const ribo = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 6, 6),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 0.8 })
      );
      ribo.position.set((Math.random() - 0.5) * 1.8, (Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.8);
      bacGroup.add(ribo);
    }

    // Long whipping flagellum
    const flagGeo = new THREE.CylinderGeometry(0.03, 0.03, 2.4, 8);
    flagGeo.translate(0, 1.2, 0);
    const flagMat = new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x16a34a, emissiveIntensity: 0.7 });
    const flagMesh = new THREE.Mesh(flagGeo, flagMat);
    flagMesh.position.set(-1.9, 0, 0);
    flagMesh.rotation.z = Math.PI / 2;
    bacGroup.add(flagMesh);
    refs.bio1Flagellum = flagMesh;
    addAnchor(flagMesh, 'ফ্ল্যাজেলা (চলন অঙ্গাণু)', 'Bacterial Flagellum', 'Flag', '#22c55e');
    return;
  }

  // Slide 6: রাজ্য প্রোটিস্টা ও ফানজাই (Amoeba Pseudopodia & Mushroom Agaricus)
  if (slideId === 6) {
    // Left: Amoeba with pseudopodia
    const amoebaGroup = new THREE.Group();
    amoebaGroup.position.set(-1.6, 0, 0);
    group.add(amoebaGroup);
    refs.bio1AmoebaGroup = amoebaGroup;

    const amoebaCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.85, 24, 24),
      new THREE.MeshPhysicalMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.65, roughness: 0.2, emissive: 0x0891b2, emissiveIntensity: 0.4 })
    );
    amoebaGroup.add(amoebaCore);

    // 4 Pseudopodia extensions
    for (let p = 0; p < 4; p++) {
      const angle = (p / 4) * Math.PI * 2;
      const pseudoGeo = new THREE.CapsuleGeometry(0.3, 0.7, 12, 12);
      const pseudoMesh = new THREE.Mesh(pseudoGeo, amoebaCore.material);
      pseudoMesh.position.set(Math.cos(angle) * 0.85, Math.sin(angle) * 0.85, 0);
      pseudoMesh.rotation.z = angle;
      amoebaGroup.add(pseudoMesh);
    }
    addAnchor(amoebaCore, 'ক্ষণপদ বা সিউডোপোডিয়া (অ্যামিবা)', 'Amoeba with Pseudopodia', 'Amoeba', '#06b6d4');

    // Right: Mushroom (Agaricus)
    const mushGroup = new THREE.Group();
    mushGroup.position.set(1.6, -0.6, 0);
    group.add(mushGroup);
    refs.bio1MushGroup = mushGroup;

    // Stem (Stipe)
    const stipeGeo = new THREE.CylinderGeometry(0.22, 0.35, 1.8, 16);
    const stipeMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.5 });
    const stipeMesh = new THREE.Mesh(stipeGeo, stipeMat);
    stipeMesh.position.set(0, 0, 0);
    mushGroup.add(stipeMesh);

    // Umbrella cap (Pileus)
    const capGeo = new THREE.SphereGeometry(1.1, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.55);
    const capMat = new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x7e22ce, emissiveIntensity: 0.5, roughness: 0.3 });
    const capMesh = new THREE.Mesh(capGeo, capMat);
    capMesh.position.set(0, 0.9, 0);
    mushGroup.add(capMesh);
    addAnchor(capMesh, 'ছত্রাকের ক্যাপ বা পাইলিয়াস (মাশরুম)', 'Mushroom Pileus Cap (Agaricus)', 'Fungi', '#c084fc');
    return;
  }

  // Slide 7: ফানজাই, প্লান্টি ও অ্যানিম্যালিয়া (Plant Chloroplast Cell vs Animal Centrosome Cell)
  if (slideId === 7) {
    // Left: Plant Cell (Rigid green cube)
    const plantGroup = new THREE.Group();
    plantGroup.position.set(-1.6, 0, 0);
    group.add(plantGroup);

    const wallMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 2.2, 1.4),
      new THREE.MeshStandardMaterial({ color: 0x16a34a, wireframe: true, transparent: true, opacity: 0.7 })
    );
    plantGroup.add(wallMesh);

    const plantCyto = new THREE.Mesh(
      new THREE.BoxGeometry(1.6, 2.0, 1.2),
      new THREE.MeshPhysicalMaterial({ color: 0x22c55e, transparent: true, opacity: 0.45, roughness: 0.2 })
    );
    plantGroup.add(plantCyto);
    addAnchor(wallMesh, 'সেলুলোজ নির্মিত প্রাচীর ও প্লাস্টিড (প্লান্টি)', 'Plant Cell Wall & Plastids', 'Plant', '#22c55e');

    // Right: Animal Cell (Flexible sphere)
    const animGroup = new THREE.Group();
    animGroup.position.set(1.6, 0, 0);
    group.add(animGroup);

    const animMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.1, 24, 24),
      new THREE.MeshPhysicalMaterial({ color: 0xef4444, transparent: true, opacity: 0.55, roughness: 0.2, emissive: 0xb91c1c, emissiveIntensity: 0.4 })
    );
    animGroup.add(animMesh);

    // Centrosome inside animal cell
    const centMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.25, 12, 12),
      new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xca8a04, emissiveIntensity: 0.8 })
    );
    centMesh.position.set(0.4, 0.4, 0);
    animGroup.add(centMesh);
    addAnchor(animMesh, 'কোষপ্রাচীরবিহীন হলোজোয়িক কোষ (অ্যানিম্যালিয়া)', 'Animal Cell (No Cell Wall)', 'Anim', '#f87171');
    return;
  }

  // Slide 8: দ্বিপদ নামকরণের পদ্ধতি ও সার্বজনীন নিয়ম (Binomial Ribbons)
  if (slideId === 8) {
    const bannerGroup = new THREE.Group();
    group.add(bannerGroup);
    refs.bio1BannerGroup = bannerGroup;

    // Genus Box (Capital)
    const genusGeo = new THREE.BoxGeometry(2.0, 0.9, 0.3);
    const genusMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, emissive: 0x0369a1, emissiveIntensity: 0.6 });
    const genusMesh = new THREE.Mesh(genusGeo, genusMat);
    genusMesh.position.set(-1.2, 0.4, 0);
    bannerGroup.add(genusMesh);
    addAnchor(genusMesh, '১ম পদ: গণ (Genus) - Capital Letter', 'Genus Name (Homo, Panthera)', 'Genus', '#38bdf8');

    // Species Box (Small letter)
    const specGeo = new THREE.BoxGeometry(2.0, 0.9, 0.3);
    const specMat = new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.6 });
    const specMesh = new THREE.Mesh(specGeo, specMat);
    specMesh.position.set(1.2, -0.4, 0);
    bannerGroup.add(specMesh);
    addAnchor(specMesh, '২য় পদ: প্রজাতি (Species) - Small Letters', 'Specific Epithet (sapiens, tigris)', 'Spec', '#34d399');

    // Latin Italics Underline bars
    const lineGeo = new THREE.CylinderGeometry(0.04, 0.04, 4.2, 8);
    const lineMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 0.8 });
    const lineMesh = new THREE.Mesh(lineGeo, lineMat);
    lineMesh.rotation.z = Math.PI / 2;
    lineMesh.position.set(0, -1.2, 0);
    bannerGroup.add(lineMesh);
    addAnchor(lineMesh, 'ইটালিক মুদ্রণ বা পৃথক আন্ডারলাইন', 'Italics or Separate Underline', 'ICBN', '#facc15');
    return;
  }

  // Slide 9: গুরুত্বপূর্ণ জীবদের বৈজ্ঞানিক নাম (Species Showcases)
  if (slideId === 9) {
    const speciesGroup = new THREE.Group();
    group.add(speciesGroup);
    refs.bio1SpeciesGroup = speciesGroup;

    // Golden Paddy Ear (Oryza sativa)
    const paddyGroup = new THREE.Group();
    paddyGroup.position.set(-1.5, 0, 0);
    speciesGroup.add(paddyGroup);

    for (let g = 0; g < 9; g++) {
      const grainMesh = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.12, 0.35, 8, 8),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xca8a04, emissiveIntensity: 0.6 })
      );
      grainMesh.position.set((g % 2 === 0 ? 0.2 : -0.2), g * 0.25 - 1.0, 0);
      grainMesh.rotation.z = (g % 2 === 0 ? 0.4 : -0.4);
      paddyGroup.add(grainMesh);
    }
    addAnchor(paddyGroup, 'ধান: Oryza sativa', 'Rice (Oryza sativa L.)', 'Rice', '#facc15');

    // Royal Bengal Tiger emblem sphere (Panthera tigris)
    const tigerMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.85, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0xf97316, emissive: 0xc2410c, emissiveIntensity: 0.6, roughness: 0.3 })
    );
    tigerMesh.position.set(1.5, 0.4, 0);
    speciesGroup.add(tigerMesh);
    addAnchor(tigerMesh, 'বাঘ: Panthera tigris', 'Royal Bengal Tiger', 'Tiger', '#fb923c');
    return;
  }

  // Slide 10: অধ্যায় সারসংক্ষেপ ও জীববৈচিত্র্য গোলক (Biosphere Globe & Ecological Halos)
  if (slideId === 10) {
    const globeGroup = new THREE.Group();
    group.add(globeGroup);
    refs.bio1GlobeGroup = globeGroup;

    // Earth Sphere
    const globeGeo = new THREE.SphereGeometry(1.5, 32, 32);
    const globeMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      emissive: 0x075985,
      emissiveIntensity: 0.4,
      roughness: 0.4
    });
    const globeMesh = new THREE.Mesh(globeGeo, globeMat);
    globeGroup.add(globeMesh);
    addAnchor(globeMesh, 'বায়োস্ফিয়ার ও জীববৈচিত্র্য সংরক্ষণ', 'Global Biosphere & Conservation', 'Earth', '#38bdf8');

    // Atmospheric Green Ring
    const bioRingGeo = new THREE.TorusGeometry(2.1, 0.06, 12, 64);
    const bioRingMat = new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x16a34a, emissiveIntensity: 0.8 });
    const bioRing = new THREE.Mesh(bioRingGeo, bioRingMat);
    bioRing.rotation.x = Math.PI / 3;
    globeGroup.add(bioRing);
    addAnchor(bioRing, 'বাস্তুতন্ত্র ও প্রজাতির সংরক্ষণ', 'Ecosystem Protection Ring', 'Bio', '#22c55e');
    return;
  }
}

// =========================================================================
// BIOLOGY CHAPTER 5: খাদ্য, পুষ্টি এবং পরিপাক (FOOD, NUTRITION & DIGESTION 3D)
// =========================================================================
export function buildBiologyCh5Scene(
  slideId: number,
  group: THREE.Group,
  refs: any,
  addAnchor: AddAnchorFn
) {
  // Slide 1: উদ্ভিদের খনিজ পুষ্টি শোষণ (Plant Root Hair & Soil Ions)
  if (slideId === 1) {
    const rootGroup = new THREE.Group();
    group.add(rootGroup);
    refs.bio5RootGroup = rootGroup;

    // Main root cylinder
    const rootGeo = new THREE.CylinderGeometry(0.7, 0.6, 3.4, 24);
    const rootMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.6 });
    const rootMesh = new THREE.Mesh(rootGeo, rootMat);
    rootGroup.add(rootMesh);
    addAnchor(rootMesh, 'প্রধান মূল ও জাইলেম বাহিকা', 'Primary Root & Xylem Vessels', 'Root', '#f59e0b');

    // Elongated root hairs projecting out
    for (let h = 0; h < 12; h++) {
      const hairGeo = new THREE.CylinderGeometry(0.04, 0.02, 1.4, 8);
      hairGeo.translate(0, 0.7, 0);
      const hairMat = new THREE.MeshStandardMaterial({ color: 0xfef3c7, roughness: 0.3 });
      const hairMesh = new THREE.Mesh(hairGeo, hairMat);

      const angle = (h / 12) * Math.PI * 2;
      const y = -1.2 + (h % 5) * 0.55;
      hairMesh.position.set(Math.cos(angle) * 0.65, y, Math.sin(angle) * 0.65);
      hairMesh.rotation.z = Math.PI / 2;
      hairMesh.rotation.y = angle;
      rootGroup.add(hairMesh);
    }

    // Glowing Mineral Ions (N, P, K) streaming in
    const ionGroup = new THREE.Group();
    group.add(ionGroup);
    refs.bio5Ions = [];

    const ionColors = [
      { color: 0x38bdf8, name: 'N (নাইট্রোজেন)' },
      { color: 0xec4899, name: 'P (ফসফরাস)' },
      { color: 0xfacc15, name: 'K (পটাসিয়াম)' }
    ];

    for (let i = 0; i < 18; i++) {
      const info = ionColors[i % 3];
      const ionMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 12, 12),
        new THREE.MeshStandardMaterial({ color: info.color, emissive: info.color, emissiveIntensity: 0.9 })
      );
      const angle = Math.random() * Math.PI * 2;
      const dist = 1.4 + Math.random() * 1.2;
      ionMesh.position.set(Math.cos(angle) * dist, (Math.random() - 0.5) * 2.8, Math.sin(angle) * dist);
      ionGroup.add(ionMesh);
      refs.bio5Ions.push({ mesh: ionMesh, angle, baseDist: dist, speed: 0.02 + Math.random() * 0.02 });
    }
    addAnchor(ionGroup, 'খনিজ পুষ্টি আয়ন (N, P, K, Ca, Mg)', 'Macro Mineral Ions Uptake', 'Ions', '#38bdf8');
    return;
  }

  // Slide 2: পুষ্টি উপাদানের অভাবজনিত লক্ষণ (Chlorosis Leaf with Deficiency Zones)
  if (slideId === 2) {
    const leafGroup = new THREE.Group();
    group.add(leafGroup);
    refs.bio5LeafGroup = leafGroup;

    // Healthy green upper leaf section
    const leafTopGeo = new THREE.ConeGeometry(1.6, 2.2, 16);
    leafTopGeo.scale(1, 1, 0.15);
    const leafTopMat = new THREE.MeshStandardMaterial({ color: 0x16a34a, emissive: 0x15803d, emissiveIntensity: 0.4 });
    const leafTopMesh = new THREE.Mesh(leafTopGeo, leafTopMat);
    leafTopMesh.position.set(0, 0.8, 0);
    leafGroup.add(leafTopMesh);
    addAnchor(leafTopMesh, 'সুস্থ সবুজ ক্লোরোফিল সমৃদ্ধ অঞ্চল', 'Healthy Green Leaf Tissue', 'Leaf', '#22c55e');

    // Chlorotic yellow mid section (N/Mg deficiency)
    const chlorGeo = new THREE.BoxGeometry(2.2, 1.4, 0.25);
    const chlorMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xca8a04, emissiveIntensity: 0.7 });
    const chlorMesh = new THREE.Mesh(chlorGeo, chlorMat);
    chlorMesh.position.set(0, -0.6, 0);
    leafGroup.add(chlorMesh);
    addAnchor(chlorMesh, 'ক্লোরোসিস (পাতা হলুদ হয়ে যাওয়া - N ও Fe এর অভাব)', 'Chlorosis (Loss of Chlorophyll)', 'Chl', '#facc15');

    // Brown marginal necrosis / dieback borders (K deficiency)
    const diebackGeo = new THREE.BoxGeometry(2.5, 0.4, 0.28);
    const diebackMat = new THREE.MeshStandardMaterial({ color: 0x78350f, emissive: 0x451a03, emissiveIntensity: 0.6 });
    const diebackMesh = new THREE.Mesh(diebackGeo, diebackMat);
    diebackMesh.position.set(0, -1.5, 0);
    leafGroup.add(diebackMesh);
    addAnchor(diebackMesh, 'ডাই-ব্যাক ও নেক্রোসিস (কিনারায় বাদামি ক্ষত - K এর অভাব)', 'Die-Back & Marginal Necrosis', 'DieBack', '#b45309');
    return;
  }

  // Slide 3: শর্করা — গ্লুকোজ রিং ও পলিস্যাকারাইড (Glucose Ring & Starch Chain)
  if (slideId === 3) {
    const gluGroup = new THREE.Group();
    group.add(gluGroup);
    refs.bio5GluGroup = gluGroup;

    // Hexagonal ring atoms
    const carbonMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.3 });
    const oxygenMat = new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.7 });

    const radius = 1.3;
    for (let c = 0; c < 6; c++) {
      const angle = (c / 6) * Math.PI * 2;
      const isOxygen = c === 1;
      const atomMesh = new THREE.Mesh(
        new THREE.SphereGeometry(isOxygen ? 0.28 : 0.24, 16, 16),
        isOxygen ? oxygenMat : carbonMat
      );
      atomMesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
      gluGroup.add(atomMesh);

      // Bond struts
      const nextAngle = ((c + 1) / 6) * Math.PI * 2;
      const bondGeo = new THREE.CylinderGeometry(0.06, 0.06, radius, 8);
      const bondMesh = new THREE.Mesh(bondGeo, new THREE.MeshStandardMaterial({ color: 0x94a3b8 }));
      bondMesh.position.set(
        (Math.cos(angle) + Math.cos(nextAngle)) * radius * 0.5,
        (Math.sin(angle) + Math.sin(nextAngle)) * radius * 0.5,
        0
      );
      bondMesh.rotation.z = angle + Math.PI / 6;
      gluGroup.add(bondMesh);
    }
    addAnchor(gluGroup, 'গ্লুকোজ রিং অণু (C₆H₁₂O₆)', 'Hexagonal Glucose Ring Molecule', 'Glucose', '#38bdf8');

    // Energy calorie badge
    const energyBadge = new THREE.Mesh(
      new THREE.TorusGeometry(1.8, 0.05, 8, 48),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.8 })
    );
    gluGroup.add(energyBadge);
    addAnchor(energyBadge, '১ গ্রাম শর্করা = ৪.১ কিলোক্যালরি শক্তি', 'Energy: 4.1 kcal / gram', '4.1kcal', '#f59e0b');
    return;
  }

  // Slide 4: আমিষ (প্রোটিন) ও লিপিড/স্নেহ (Peptide Alpha-Helix & Triglyceride Fork)
  if (slideId === 4) {
    // Left: Protein alpha helix
    const helixGroup = new THREE.Group();
    helixGroup.position.set(-1.5, 0, 0);
    group.add(helixGroup);
    refs.bio5ProteinHelix = helixGroup;

    const beadGeo = new THREE.SphereGeometry(0.18, 12, 12);
    const aaColors = [0x3b82f6, 0x10b981, 0x8b5cf6, 0xec4899];
    for (let a = 0; a < 20; a++) {
      const angle = a * 0.65;
      const y = (a - 10) * 0.16;
      const beadMat = new THREE.MeshStandardMaterial({
        color: aaColors[a % 4],
        emissive: aaColors[a % 4],
        emissiveIntensity: 0.5
      });
      const bead = new THREE.Mesh(beadGeo, beadMat);
      bead.position.set(Math.cos(angle) * 0.75, y, Math.sin(angle) * 0.75);
      helixGroup.add(bead);
    }
    addAnchor(helixGroup, 'পেপটাইড বন্ধন ও আলফা হেলিক্স (আমিষ)', 'Polypeptide Chain (Amino Acids)', 'Protein', '#38bdf8');

    // Right: Triglyceride lipid fork
    const lipidGroup = new THREE.Group();
    lipidGroup.position.set(1.5, 0, 0);
    group.add(lipidGroup);

    // Glycerol base
    const glycGeo = new THREE.BoxGeometry(0.4, 1.4, 0.4);
    const glycMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.3 });
    const glycMesh = new THREE.Mesh(glycGeo, glycMat);
    glycMesh.position.set(0, 0, 0);
    lipidGroup.add(glycMesh);

    // 3 Fatty acid chains
    for (let f = -1; f <= 1; f++) {
      const chainGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.8, 8);
      const chainMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xca8a04, emissiveIntensity: 0.6 });
      const chainMesh = new THREE.Mesh(chainGeo, chainMat);
      chainMesh.position.set(1.0, f * 0.5, 0);
      chainMesh.rotation.z = Math.PI / 2;
      lipidGroup.add(chainMesh);
    }
    addAnchor(lipidGroup, 'লিপিড বা ফ্যাট (১ গ্রাম = ৯.৩ kcal)', 'Triglyceride Lipid (9.3 kcal/g)', 'Lipid', '#facc15');
    return;
  }

  // Slide 5: আদর্শ খাদ্য পিরামিড ও ভিটামিন (3D Food Pyramid)
  if (slideId === 5) {
    const pyrGroup = new THREE.Group();
    group.add(pyrGroup);
    refs.bio5FoodPyrGroup = pyrGroup;

    const tiers = [
      { nameBn: '১. শর্করা (ভাত, রুটি, আলু - সর্বাধিক)', nameEn: 'Carbohydrates (Base)', color: 0xf59e0b, w: 3.2, h: 0.55, y: -1.3 },
      { nameBn: '২. ভিটামিন ও খনিজ (শাকসবজি, ফলমূল)', nameEn: 'Vitamins & Minerals', color: 0x10b981, w: 2.4, h: 0.55, y: -0.7 },
      { nameBn: '৩. আমিষ (মাছ, মাংস, ডিম, দুধ)', nameEn: 'Proteins & Dairy', color: 0x3b82f6, w: 1.6, h: 0.55, y: -0.1 },
      { nameBn: '৪. তেল, চর্বি ও মিষ্টি (ন্যূনতম)', nameEn: 'Fats & Sweets (Apex)', color: 0xef4444, w: 0.8, h: 0.65, y: 0.6 }
    ];

    tiers.forEach((t) => {
      const tGeo = new THREE.BoxGeometry(t.w, t.h, t.w * 0.8);
      const tMat = new THREE.MeshStandardMaterial({
        color: t.color,
        emissive: t.color,
        emissiveIntensity: 0.45,
        roughness: 0.3
      });
      const tMesh = new THREE.Mesh(tGeo, tMat);
      tMesh.position.set(0, t.y, 0);
      pyrGroup.add(tMesh);
      addAnchor(tMesh, t.nameBn, t.nameEn, t.nameEn.slice(0, 4), `#${t.color.toString(16).padStart(6, '0')}`);
    });
    return;
  }

  // Slide 6: পৌষ্টিক নালি ও মানুষের দাঁত (Molar Tooth Internal Anatomy)
  if (slideId === 6) {
    const toothGroup = new THREE.Group();
    group.add(toothGroup);
    refs.bio5ToothGroup = toothGroup;

    // Enamel Crown (Bright polished white)
    const crownGeo = new THREE.CylinderGeometry(1.2, 1.4, 1.2, 24);
    const crownMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1, metalness: 0.1 });
    const crownMesh = new THREE.Mesh(crownGeo, crownMat);
    crownMesh.position.set(0, 0.9, 0);
    toothGroup.add(crownMesh);
    addAnchor(crownMesh, 'এনামেল (মানবদেহের কঠিনতম আবরণ)', 'Tooth Enamel Crown', 'Enamel', '#38bdf8');

    // Dentin middle core
    const dentGeo = new THREE.CylinderGeometry(1.1, 0.8, 1.0, 20);
    const dentMat = new THREE.MeshStandardMaterial({ color: 0xfef08a, emissive: 0xfacc15, emissiveIntensity: 0.3 });
    const dentMesh = new THREE.Mesh(dentGeo, dentMat);
    dentMesh.position.set(0, -0.1, 0);
    toothGroup.add(dentMesh);
    addAnchor(dentMesh, 'ডেন্টিন (প্রধান অস্থিসদৃশ কাঠামো)', 'Dentin Layer', 'Dentin', '#facc15');

    // Pulp Cavity & Blood/Nerve core
    const pulpMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.35, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.8 })
    );
    pulpMesh.position.set(0, 0.1, 0);
    toothGroup.add(pulpMesh);
    addAnchor(pulpMesh, 'দন্তমজ্জা ও রক্তনালি (Pulp Cavity)', 'Pulp Cavity & Nerves', 'Pulp', '#ef4444');

    // Dual Roots anchoring into jawbone
    for (let r = -1; r <= 1; r += 2) {
      const rootGeo = new THREE.ConeGeometry(0.35, 1.6, 16);
      const rootMat = new THREE.MeshStandardMaterial({ color: 0xfde047, roughness: 0.5 });
      const rootMesh = new THREE.Mesh(rootGeo, rootMat);
      rootMesh.position.set(r * 0.55, -1.3, 0);
      rootMesh.rotation.z = Math.PI;
      toothGroup.add(rootMesh);
    }
    return;
  }

  // Slide 7: পৌষ্টিক গ্রন্থিসমূহ: লালাগ্রন্থি, যকৃৎ ও অগ্ন্যাশয় (Liver, Gallbladder, Pancreas, Duodenum)
  if (slideId === 7) {
    const glandGroup = new THREE.Group();
    group.add(glandGroup);
    refs.bio5GlandGroup = glandGroup;

    // Large reddish Liver
    const liverGeo = new THREE.SphereGeometry(1.6, 24, 20);
    liverGeo.scale(1.4, 0.8, 0.8);
    const liverMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, emissive: 0x7f1d1d, emissiveIntensity: 0.4 });
    const liverMesh = new THREE.Mesh(liverGeo, liverMat);
    liverMesh.position.set(-0.8, 0.8, 0);
    glandGroup.add(liverMesh);
    addAnchor(liverMesh, 'যকৃৎ (দেহের সর্ববৃহৎ জৈব রসায়নাগার)', 'Liver (Organic Laboratory of Body)', 'Liver', '#ef4444');

    // Gallbladder (Green pear)
    const gallGeo = new THREE.SphereGeometry(0.35, 16, 16);
    gallGeo.scale(0.8, 1.4, 0.8);
    const gallMat = new THREE.MeshStandardMaterial({ color: 0x15803d, emissive: 0x166534, emissiveIntensity: 0.7 });
    const gallMesh = new THREE.Mesh(gallGeo, gallMat);
    gallMesh.position.set(-0.4, 0.1, 0.6);
    glandGroup.add(gallMesh);
    addAnchor(gallMesh, 'পিত্তথলি ও পিত্তরস (চর্বির ইমালসিফিকেশন)', 'Gallbladder (Bile Storage)', 'Bile', '#22c55e');

    // Pancreas (Golden elongated leaf)
    const pancGeo = new THREE.CapsuleGeometry(0.3, 1.4, 12, 12);
    pancGeo.rotateZ(Math.PI / 3);
    const pancMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xca8a04, emissiveIntensity: 0.6 });
    const pancMesh = new THREE.Mesh(pancGeo, pancMat);
    pancMesh.position.set(0.6, -0.4, 0);
    glandGroup.add(pancMesh);
    addAnchor(pancMesh, 'মিশ্র গ্রন্থি অগ্ন্যাশয় (ইনসুলিন ও পরিপাক রস)', 'Pancreas (Amylase, Trypsin, Lipase)', 'Panc', '#facc15');

    // Duodenum C-loop
    const duoGeo = new THREE.TorusGeometry(0.85, 0.22, 16, 32, Math.PI * 1.2);
    const duoMat = new THREE.MeshPhysicalMaterial({ color: 0xfb923c, transparent: true, opacity: 0.6, roughness: 0.2 });
    const duoMesh = new THREE.Mesh(duoGeo, duoMat);
    duoMesh.position.set(0.9, -0.8, 0);
    duoMesh.rotation.z = Math.PI * 0.7;
    glandGroup.add(duoMesh);
    addAnchor(duoMesh, 'ডিউডেনাম (ক্ষুদ্রান্ত্রের প্রথম অংশ)', 'Duodenum (C-shaped Digestive Loop)', 'Duod', '#fb923c');
    return;
  }

  // Slide 8: মানব পৌষ্টিকতন্ত্র ও পরিপাক ক্রিয়া (Stomach & Chyme)
  if (slideId === 8) {
    const stomGroup = new THREE.Group();
    group.add(stomGroup);
    refs.bio5StomGroup = stomGroup;

    // J-shaped stomach body
    const stomGeo = new THREE.TorusGeometry(1.4, 0.75, 20, 36, Math.PI * 1.1);
    const stomMat = new THREE.MeshPhysicalMaterial({
      color: 0xbe123c,
      transparent: true,
      opacity: 0.55,
      roughness: 0.2,
      emissive: 0x9f1239,
      emissiveIntensity: 0.4
    });
    const stomMesh = new THREE.Mesh(stomGeo, stomMat);
    stomMesh.rotation.z = Math.PI * 0.6;
    stomGroup.add(stomMesh);
    addAnchor(stomMesh, 'পাকস্থলীর পেশিবহুল প্রাচীর ও রুগী', 'J-shaped Muscular Stomach', 'Stom', '#f43f5e');

    // Acidic chyme fluid inside (bubbling green-yellow)
    const fluidGeo = new THREE.SphereGeometry(0.85, 20, 20);
    const fluidMat = new THREE.MeshStandardMaterial({ color: 0x84cc16, emissive: 0x65a30d, emissiveIntensity: 0.8 });
    const fluidMesh = new THREE.Mesh(fluidGeo, fluidMat);
    fluidMesh.position.set(-0.2, -0.4, 0);
    stomGroup.add(fluidMesh);
    refs.bio5ChymeFluid = fluidMesh;
    addAnchor(fluidMesh, 'গ্যাস্ট্রিক রস ও HCl (অম্লীয় কাইম pH ১.৫-২.০)', 'Acidic Chyme (HCl & Pepsin)', 'HCl', '#a3e635');
    return;
  }

  // Slide 9: খাদ্য শোষণ ও ক্ষুদ্রান্ত্রের ভিলাই (Intestinal Villus & Lacteal)
  if (slideId === 9) {
    const villusGroup = new THREE.Group();
    group.add(villusGroup);
    refs.bio5VillusGroup = villusGroup;

    // Villus finger pillar
    const pilGeo = new THREE.CapsuleGeometry(0.9, 2.2, 24, 24);
    const pilMat = new THREE.MeshPhysicalMaterial({
      color: 0xfb7185,
      transparent: true,
      opacity: 0.5,
      roughness: 0.2,
      emissive: 0xe11d48,
      emissiveIntensity: 0.3
    });
    const pilMesh = new THREE.Mesh(pilGeo, pilMat);
    villusGroup.add(pilMesh);
    addAnchor(pilMesh, 'ভিলাস (Villus - শোষণ একক)', 'Intestinal Villus Pillar', 'Villus', '#fb7185');

    // Central Green Lacteal Vessel (Lymphatic)
    const lactGeo = new THREE.CylinderGeometry(0.18, 0.18, 2.4, 16);
    const lactMat = new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x16a34a, emissiveIntensity: 0.8 });
    const lactMesh = new THREE.Mesh(lactGeo, lactMat);
    villusGroup.add(lactMesh);
    addAnchor(lactMesh, 'কেন্দ্রীয় ল্যাকটিয়েল (চর্বি ও গ্লিসারল শোষণ)', 'Central Lacteal (Fat Absorption)', 'Lacteal', '#22c55e');

    // Blood capillary network (Red arterial and Blue venous spiraling loops)
    const capHelix = new THREE.Group();
    villusGroup.add(capHelix);
    refs.bio5VillusCapillaries = capHelix;

    for (let c = 0; c < 16; c++) {
      const angle = c * 0.5;
      const y = (c - 8) * 0.18;
      const isArtery = c % 2 === 0;
      const capP = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 8, 8),
        new THREE.MeshStandardMaterial({
          color: isArtery ? 0xef4444 : 0x3b82f6,
          emissive: isArtery ? 0xb91c1c : 0x1d4ed8,
          emissiveIntensity: 0.8
        })
      );
      capP.position.set(Math.cos(angle) * 0.55, y, Math.sin(angle) * 0.55);
      capHelix.add(capP);
    }
    addAnchor(capHelix, 'রক্তজালক (গ্লুকোজ ও অ্যামিনো এসিড শোষণ)', 'Capillary Plexus (Glucose & Amino Acids)', 'Blood', '#38bdf8');
    return;
  }

  // Slide 10: পৌষ্টিকতন্ত্রের রোগ, স্বাস্থ্য ও BMI (Digestive Health & Gastric Mucus Shield)
  if (slideId === 10) {
    const healthGroup = new THREE.Group();
    group.add(healthGroup);
    refs.bio5HealthGroup = healthGroup;

    // Stomach model
    const baseStom = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 24, 24),
      new THREE.MeshPhysicalMaterial({ color: 0xe11d48, transparent: true, opacity: 0.5, roughness: 0.2 })
    );
    healthGroup.add(baseStom);

    // Protective Mucosal Shield halo
    const shieldGeo = new THREE.TorusGeometry(1.6, 0.12, 16, 48);
    const shieldMat = new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.8 });
    const shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
    shieldMesh.rotation.x = Math.PI / 4;
    healthGroup.add(shieldMesh);
    refs.bio5Shield = shieldMesh;
    addAnchor(shieldMesh, 'সুরক্ষাকারী মিউকাস স্তর (আলসার প্রতিরোধ)', 'Protective Gastric Mucus Barrier', 'Shield', '#10b981');

    // BMI Indicator Scale Dial
    const dialMesh = new THREE.Mesh(
      new THREE.RingGeometry(1.8, 2.1, 32),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, side: THREE.DoubleSide, transparent: true, opacity: 0.6 })
    );
    dialMesh.position.set(0, 0, 0.1);
    healthGroup.add(dialMesh);
    addAnchor(dialMesh, 'আদর্শ বিএমআই (BMI ১৮.৫ - ২৪.৯ kg/m²)', 'Normal BMI Range (18.5 - 24.9)', 'BMI', '#38bdf8');
    return;
  }
}

// =========================================================================
// REAL-TIME 3D PHYSICS & KINETICS ANIMATIONS FOR CHAPTERS 1 & 5
// =========================================================================
export function updateBiologyCh1Physics(refs: any, time: number) {
  // Slide 1 DNA continuous rotation
  if (refs.bio1HelixGroup) {
    refs.bio1HelixGroup.rotation.y = time * 0.6;
  }
  if (refs.bio1LifeOrb) {
    refs.bio1LifeOrb.scale.setScalar(0.95 + Math.sin(time * 2.5) * 0.08);
  }

  // Slide 2 Lab station gentle hover
  if (refs.bio1ScopeGroup) {
    refs.bio1ScopeGroup.rotation.y = Math.sin(time * 0.3) * 0.1;
  }
  if (refs.bio1PetriGroup) {
    refs.bio1PetriGroup.rotation.y = time * 0.2;
  }

  // Slide 3 Pyramid
  if (refs.bio1PyrGroup) {
    refs.bio1PyrGroup.rotation.y = Math.sin(time * 0.4) * 0.15;
  }

  // Slide 4 Five Kingdoms system orbit
  if (refs.bio1FiveKingdomsGroup) {
    refs.bio1FiveKingdomsGroup.rotation.y = time * 0.35;
  }

  // Slide 5 Bacterium flagellum whip
  if (refs.bio1Flagellum) {
    refs.bio1Flagellum.rotation.x = Math.sin(time * 6.0) * 0.25;
    refs.bio1Flagellum.rotation.y = Math.cos(time * 6.0) * 0.25;
  }
  if (refs.bio1BacDna) {
    refs.bio1BacDna.rotation.z = time * 0.5;
  }

  // Slide 6 Amoeba pseudopodia pulse
  if (refs.bio1AmoebaGroup) {
    refs.bio1AmoebaGroup.scale.setScalar(0.94 + Math.sin(time * 2.0) * 0.08);
  }

  // Slide 8 Banner hover
  if (refs.bio1BannerGroup) {
    refs.bio1BannerGroup.rotation.y = Math.sin(time * 0.5) * 0.12;
  }

  // Slide 9 Species emblem
  if (refs.bio1SpeciesGroup) {
    refs.bio1SpeciesGroup.rotation.y = Math.sin(time * 0.3) * 0.08;
  }

  // Slide 10 Biosphere globe
  if (refs.bio1GlobeGroup) {
    refs.bio1GlobeGroup.rotation.y = time * 0.4;
  }
}

export function updateBiologyCh5Physics(refs: any, time: number) {
  // Slide 1 Plant root mineral ions flow inward
  if (refs.bio5Ions) {
    refs.bio5Ions.forEach((ion: any) => {
      const currentDist = 0.7 + (Math.sin(time * 1.5 + ion.angle * 2) + 1) * 0.5 * (ion.baseDist - 0.7);
      ion.mesh.position.x = Math.cos(ion.angle + time * 0.2) * currentDist;
      ion.mesh.position.z = Math.sin(ion.angle + time * 0.2) * currentDist;
    });
  }

  // Slide 2 Leaf gentle sway
  if (refs.bio5LeafGroup) {
    refs.bio5LeafGroup.rotation.z = Math.sin(time * 0.6) * 0.05;
  }

  // Slide 3 Glucose molecule rotation
  if (refs.bio5GluGroup) {
    refs.bio5GluGroup.rotation.z = time * 0.4;
  }

  // Slide 4 Protein helix twist
  if (refs.bio5ProteinHelix) {
    refs.bio5ProteinHelix.rotation.y = time * 0.5;
  }

  // Slide 5 Food pyramid
  if (refs.bio5FoodPyrGroup) {
    refs.bio5FoodPyrGroup.rotation.y = time * 0.25;
  }

  // Slide 6 Tooth
  if (refs.bio5ToothGroup) {
    refs.bio5ToothGroup.rotation.y = Math.sin(time * 0.4) * 0.15;
  }

  // Slide 7 Liver & glands
  if (refs.bio5GlandGroup) {
    refs.bio5GlandGroup.rotation.y = Math.sin(time * 0.3) * 0.08;
  }

  // Slide 8 Stomach fluid churn
  if (refs.bio5ChymeFluid) {
    refs.bio5ChymeFluid.scale.setScalar(0.92 + Math.sin(time * 3.0) * 0.08);
  }

  // Slide 9 Villus capillary flow
  if (refs.bio5VillusCapillaries) {
    refs.bio5VillusCapillaries.rotation.y = time * 0.8;
  }

  // Slide 10 Mucosal shield pulse
  if (refs.bio5Shield) {
    refs.bio5Shield.rotation.z = time * 0.6;
  }
}
