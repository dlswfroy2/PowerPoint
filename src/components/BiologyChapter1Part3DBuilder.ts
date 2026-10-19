/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as THREE from 'three';

export interface BiologyPart3DUpdateState {
  time: number;
  animate: boolean;
  wireframe: boolean;
  topicId: string;
  partId?: string;
  refs: any;
}

/**
 * Builds an interactive 3D model for any specific part or organism
 * from NCTB Class 9-10 Biology Chapter 1 (জীবন পাঠ).
 */
export function buildBiologyCh1Part3D(
  topicId: string,
  partId: string | undefined,
  isIsolated: boolean,
  group: THREE.Group,
  refs: any
) {
  // Clear any existing children
  while (group.children.length > 0) {
    const obj = group.children[0];
    group.remove(obj);
  }

  // Set up common materials
  refs.animatedMeshes = [];

  // =========================================================================
  // 1. MONERA: BACTERIUM & PARTS
  // =========================================================================
  if (topicId === 'monera' || topicId === 'bioCh1MoneraBacteria') {
    if (isIsolated && partId === 'flagellum') {
      // Isolated Flagellum 3D with Basal Body Motor
      const flagGroup = new THREE.Group();
      group.add(flagGroup);

      // Basal body rings (M, S, P, L rings in membrane)
      const ringMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.8, roughness: 0.2 });
      const motorBase = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.2, 24), ringMat);
      motorBase.position.y = -1.5;
      flagGroup.add(motorBase);

      const shaft = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.12, 0.8, 16),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.5 })
      );
      shaft.position.y = -1.0;
      flagGroup.add(shaft);

      // Hook (curved connector)
      const hookGeo = new THREE.TorusGeometry(0.3, 0.1, 12, 24, Math.PI / 2);
      const hookMesh = new THREE.Mesh(hookGeo, new THREE.MeshStandardMaterial({ color: 0xec4899 }));
      hookMesh.position.set(0.2, -0.6, 0);
      hookMesh.rotation.z = -Math.PI / 4;
      flagGroup.add(hookMesh);

      // Long helical flagellin filament
      const curvePoints: THREE.Vector3[] = [];
      const numSegments = 60;
      for (let i = 0; i < numSegments; i++) {
        const t = i / numSegments;
        const angle = t * Math.PI * 8;
        const rad = 0.35 * (1 - t * 0.2);
        const y = -0.4 + t * 4.2;
        curvePoints.push(new THREE.Vector3(Math.cos(angle) * rad, y, Math.sin(angle) * rad));
      }
      const curve = new THREE.CatmullRomCurve3(curvePoints);
      const tubeGeo = new THREE.TubeGeometry(curve, 60, 0.08, 12, false);
      const tubeMat = new THREE.MeshStandardMaterial({
        color: 0x22c55e,
        emissive: 0x15803d,
        emissiveIntensity: 0.7,
        roughness: 0.3
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      flagGroup.add(tubeMesh);
      refs.filamentMesh = tubeMesh;
      refs.animatedMeshes.push(flagGroup);
      return;
    }

    if (isIsolated && (partId === 'nucleoid' || partId === 'dna')) {
      // Isolated Circular Nucleoid DNA & Plasmids
      const nucGroup = new THREE.Group();
      group.add(nucGroup);

      // Central supercoiled chromosome knot
      const knotGeo = new THREE.TorusKnotGeometry(1.2, 0.22, 100, 16, 2, 5);
      const knotMat = new THREE.MeshStandardMaterial({
        color: 0xec4899,
        emissive: 0xdb2777,
        emissiveIntensity: 0.8,
        roughness: 0.2
      });
      const knotMesh = new THREE.Mesh(knotGeo, knotMat);
      nucGroup.add(knotMesh);
      refs.nucleoidKnot = knotMesh;

      // Small circular Plasmid rings around it
      for (let p = 0; p < 4; p++) {
        const pRing = new THREE.Mesh(
          new THREE.TorusGeometry(0.35 + p * 0.05, 0.04, 12, 32),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.9 })
        );
        const angle = (p / 4) * Math.PI * 2;
        pRing.position.set(Math.cos(angle) * 2.0, Math.sin(angle) * 1.5, (p % 2 === 0 ? 0.4 : -0.4));
        pRing.rotation.x = angle;
        pRing.rotation.y = angle * 0.5;
        nucGroup.add(pRing);
      }
      refs.animatedMeshes.push(nucGroup);
      return;
    }

    if (isIsolated && (partId === 'ribosome' || partId === 'ribosome_70s')) {
      // 70S Ribosome complex: Large 50S + Small 30S subunits + mRNA strand
      const riboGroup = new THREE.Group();
      group.add(riboGroup);

      // 50S Large Subunit (Crown-like dome)
      const largeSub = new THREE.Mesh(
        new THREE.SphereGeometry(1.0, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.75),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.5, roughness: 0.4 })
      );
      largeSub.position.y = 0.3;
      riboGroup.add(largeSub);

      // 30S Small Subunit (Base oval)
      const smallSub = new THREE.Mesh(
        new THREE.SphereGeometry(0.75, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xca8a04, emissiveIntensity: 0.6, roughness: 0.4 })
      );
      smallSub.scale.set(1.2, 0.6, 0.8);
      smallSub.position.y = -0.7;
      riboGroup.add(smallSub);

      // mRNA strand between subunits
      const mrnaCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-2.0, -0.2, 0),
        new THREE.Vector3(-0.7, -0.1, 0.2),
        new THREE.Vector3(0.7, -0.2, -0.1),
        new THREE.Vector3(2.0, -0.1, 0)
      ]);
      const mrnaMesh = new THREE.Mesh(
        new THREE.TubeGeometry(mrnaCurve, 32, 0.06, 8, false),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.8 })
      );
      riboGroup.add(mrnaMesh);

      // Growing polypeptide amino acid chain
      for (let a = 0; a < 6; a++) {
        const bead = new THREE.Mesh(
          new THREE.SphereGeometry(0.12, 10, 10),
          new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.7 })
        );
        bead.position.set(0.1 * a, 1.1 + a * 0.22, 0.05 * Math.sin(a));
        riboGroup.add(bead);
      }
      refs.animatedMeshes.push(riboGroup);
      return;
    }

    if (isIsolated && (partId === 'capsule' || partId === 'cellwall' || partId === 'capsule_cellwall')) {
      // Cutaway of bacterial 3 layers: Capsule, Peptidoglycan Cell Wall, Plasma Membrane
      const layersGroup = new THREE.Group();
      group.add(layersGroup);

      // Layer 1: Outer Capsule (Blue translucent)
      const capMesh = new THREE.Mesh(
        new THREE.CapsuleGeometry(1.2, 2.2, 20, 20),
        new THREE.MeshPhysicalMaterial({
          color: 0x0284c7,
          transparent: true,
          opacity: 0.45,
          roughness: 0.2,
          emissive: 0x0369a1,
          emissiveIntensity: 0.4
        })
      );
      capMesh.rotation.z = Math.PI / 2;
      layersGroup.add(capMesh);

      // Layer 2: Peptidoglycan Wall (Cyan grid wireframe/lattice)
      const wallMesh = new THREE.Mesh(
        new THREE.CapsuleGeometry(1.05, 2.1, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0x06b6d4, wireframe: true, transparent: true, opacity: 0.85 })
      );
      wallMesh.rotation.z = Math.PI / 2;
      layersGroup.add(wallMesh);

      // Layer 3: Inner Plasma Membrane (Yellow-green solid)
      const memMesh = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.9, 2.0, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.5 })
      );
      memMesh.rotation.z = Math.PI / 2;
      layersGroup.add(memMesh);

      refs.animatedMeshes.push(layersGroup);
      return;
    }

    // Default: Complete Bacterium with all organelles highlighted based on partId
    const bacGroup = new THREE.Group();
    group.add(bacGroup);

    const isCapFocused = partId === 'capsule' || partId === 'cellwall' || partId === 'capsule_cellwall';
    const isDnaFocused = partId === 'nucleoid' || partId === 'dna';
    const isFlagFocused = partId === 'flagellum';
    const isRiboFocused = partId === 'ribosome' || partId === 'ribosome_70s';
    const isPlasmidFocused = partId === 'plasmid';

    // Outer Capsule
    const capGeo = new THREE.CapsuleGeometry(0.95, 2.2, 20, 20);
    const capMat = new THREE.MeshPhysicalMaterial({
      color: isCapFocused ? 0x38bdf8 : 0x0284c7,
      transparent: true,
      opacity: isCapFocused ? 0.75 : 0.45,
      roughness: 0.2,
      emissive: isCapFocused ? 0x0ea5e9 : 0x0369a1,
      emissiveIntensity: isCapFocused ? 0.9 : 0.3
    });
    const capMesh = new THREE.Mesh(capGeo, capMat);
    capMesh.rotation.z = Math.PI / 2;
    bacGroup.add(capMesh);

    // Inner Peptidoglycan lattice
    const wallGeo = new THREE.CapsuleGeometry(0.9, 2.1, 14, 14);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: isCapFocused ? 0.9 : 0.5
    });
    const wallMesh = new THREE.Mesh(wallGeo, wallMat);
    wallMesh.rotation.z = Math.PI / 2;
    bacGroup.add(wallMesh);

    // Nucleoid DNA
    const dnaGeo = new THREE.TorusKnotGeometry(0.48, 0.09, 64, 12, 2, 3);
    const dnaMat = new THREE.MeshStandardMaterial({
      color: isDnaFocused ? 0xf43f5e : 0xec4899,
      emissive: isDnaFocused ? 0xe11d48 : 0xdb2777,
      emissiveIntensity: isDnaFocused ? 1.0 : 0.6
    });
    const dnaMesh = new THREE.Mesh(dnaGeo, dnaMat);
    bacGroup.add(dnaMesh);
    refs.bacDna = dnaMesh;

    // Plasmids
    for (let pl = 0; pl < 3; pl++) {
      const plMesh = new THREE.Mesh(
        new THREE.TorusGeometry(0.18, 0.03, 8, 20),
        new THREE.MeshStandardMaterial({
          color: isPlasmidFocused ? 0xfacc15 : 0x38bdf8,
          emissive: isPlasmidFocused ? 0xeab308 : 0x0284c7,
          emissiveIntensity: isPlasmidFocused ? 1.0 : 0.6
        })
      );
      plMesh.position.set((pl - 1) * 0.7, 0.4, (pl % 2 === 0 ? 0.3 : -0.3));
      plMesh.rotation.x = pl * 0.8;
      bacGroup.add(plMesh);
    }

    // 70S Ribosomes
    const riboMat = new THREE.MeshStandardMaterial({
      color: isRiboFocused ? 0xfacc15 : 0xeab308,
      emissive: isRiboFocused ? 0xfef08a : 0xca8a04,
      emissiveIntensity: isRiboFocused ? 1.0 : 0.6
    });
    for (let r = 0; r < 28; r++) {
      const ribo = new THREE.Mesh(new THREE.SphereGeometry(isRiboFocused ? 0.08 : 0.05, 6, 6), riboMat);
      ribo.position.set((Math.random() - 0.5) * 2.0, (Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.8);
      bacGroup.add(ribo);
    }

    // Flagellum
    const flagGeo = new THREE.CylinderGeometry(0.04, 0.04, 2.6, 8);
    flagGeo.translate(0, 1.3, 0);
    const flagMat = new THREE.MeshStandardMaterial({
      color: isFlagFocused ? 0x4ade80 : 0x22c55e,
      emissive: isFlagFocused ? 0x22c55e : 0x16a34a,
      emissiveIntensity: isFlagFocused ? 1.0 : 0.7
    });
    const flagMesh = new THREE.Mesh(flagGeo, flagMat);
    flagMesh.position.set(-2.0, 0, 0);
    flagMesh.rotation.z = Math.PI / 2;
    bacGroup.add(flagMesh);
    refs.bacFlag = flagMesh;

    // Pili / Fimbriae hairs around capsule
    for (let p = 0; p < 20; p++) {
      const piliMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.015, 0.015, 0.4, 4),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8 })
      );
      const angle = (p / 20) * Math.PI * 2;
      piliMesh.position.set(Math.cos(angle) * 1.05, Math.sin(angle) * 0.95, (Math.random() - 0.5) * 0.6);
      piliMesh.rotation.z = angle + Math.PI / 2;
      bacGroup.add(piliMesh);
    }

    refs.animatedMeshes.push(bacGroup);
    return;
  }

  // =========================================================================
  // 2. PROTISTA: AMOEBA & PARAMECIUM
  // =========================================================================
  if (topicId === 'protista' || topicId === 'bioCh1ProtistaAmoeba') {
    if (isIsolated && (partId === 'pseudopodia' || partId === 'pseudopod')) {
      // Isolated Lobopodia / Pseudopodium with Streaming Cytoplasm
      const pseudoGroup = new THREE.Group();
      group.add(pseudoGroup);

      const pseudoMat = new THREE.MeshPhysicalMaterial({
        color: 0x06b6d4,
        transparent: true,
        opacity: 0.65,
        roughness: 0.2,
        emissive: 0x0891b2,
        emissiveIntensity: 0.6
      });
      // Extending finger-like lobe
      const lobe = new THREE.Mesh(new THREE.CapsuleGeometry(0.6, 2.0, 16, 16), pseudoMat);
      lobe.position.y = 0.5;
      pseudoGroup.add(lobe);

      // Inner sol particles flowing
      for (let s = 0; s < 25; s++) {
        const particle = new THREE.Mesh(
          new THREE.SphereGeometry(0.06, 8, 8),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.8 })
        );
        particle.position.set((Math.random() - 0.5) * 0.7, -0.6 + (s / 25) * 2.2, (Math.random() - 0.5) * 0.7);
        pseudoGroup.add(particle);
      }
      refs.animatedMeshes.push(pseudoGroup);
      return;
    }

    if (isIsolated && (partId === 'vacuole' || partId === 'contractile_vacuole')) {
      // Isolated Contractile Vacuole with Radial Canals
      const vacGroup = new THREE.Group();
      group.add(vacGroup);

      // Central pulsating water sphere
      const vacMesh = new THREE.Mesh(
        new THREE.SphereGeometry(1.0, 24, 24),
        new THREE.MeshPhysicalMaterial({
          color: 0x38bdf8,
          transparent: true,
          opacity: 0.7,
          roughness: 0.1,
          emissive: 0x0284c7,
          emissiveIntensity: 0.7
        })
      );
      vacGroup.add(vacMesh);
      refs.contractileMesh = vacMesh;

      // 6 radiating feeder canals
      for (let c = 0; c < 6; c++) {
        const angle = (c / 6) * Math.PI * 2;
        const canalGeo = new THREE.CylinderGeometry(0.05, 0.12, 1.2, 8);
        const canalMesh = new THREE.Mesh(canalGeo, vacMesh.material);
        canalMesh.position.set(Math.cos(angle) * 1.2, Math.sin(angle) * 1.2, 0);
        canalMesh.rotation.z = angle - Math.PI / 2;
        vacGroup.add(canalMesh);
      }
      refs.animatedMeshes.push(vacGroup);
      return;
    }

    // Default Amoeba Proteus Organism
    const amoebaGroup = new THREE.Group();
    group.add(amoebaGroup);

    const isPseudo = partId === 'pseudopodia';
    const isNuc = partId === 'nucleus';
    const isVac = partId === 'vacuole' || partId === 'contractile_vacuole';

    // Plasmalemma & Cytoplasmic Core
    const coreMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.1, 24, 24),
      new THREE.MeshPhysicalMaterial({
        color: 0x0891b2,
        transparent: true,
        opacity: 0.55,
        roughness: 0.2,
        emissive: 0x0e7490,
        emissiveIntensity: 0.4
      })
    );
    amoebaGroup.add(coreMesh);

    // 5 Pseudopodia
    for (let p = 0; p < 5; p++) {
      const angle = (p / 5) * Math.PI * 2;
      const pseudoGeo = new THREE.CapsuleGeometry(0.35, 1.0, 12, 12);
      const pseudoMat = new THREE.MeshPhysicalMaterial({
        color: isPseudo ? 0x22d3ee : 0x06b6d4,
        transparent: true,
        opacity: isPseudo ? 0.85 : 0.6,
        roughness: 0.2,
        emissive: isPseudo ? 0x06b6d4 : 0x0891b2,
        emissiveIntensity: isPseudo ? 0.9 : 0.4
      });
      const pseudoMesh = new THREE.Mesh(pseudoGeo, pseudoMat);
      pseudoMesh.position.set(Math.cos(angle) * 1.1, Math.sin(angle) * 1.1, 0);
      pseudoMesh.rotation.z = angle;
      amoebaGroup.add(pseudoMesh);
    }

    // Eukaryotic Nucleus
    const nucMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 16, 16),
      new THREE.MeshStandardMaterial({
        color: isNuc ? 0xf43f5e : 0xec4899,
        emissive: isNuc ? 0xe11d48 : 0xbe185d,
        emissiveIntensity: isNuc ? 1.0 : 0.6
      })
    );
    nucMesh.position.set(-0.25, 0.2, 0);
    amoebaGroup.add(nucMesh);

    // Contractile Vacuole
    const vacMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.32, 16, 16),
      new THREE.MeshPhysicalMaterial({
        color: isVac ? 0x38bdf8 : 0x0284c7,
        transparent: true,
        opacity: 0.8,
        emissive: isVac ? 0x0ea5e9 : 0x0369a1,
        emissiveIntensity: isVac ? 1.0 : 0.5
      })
    );
    vacMesh.position.set(0.35, -0.3, 0);
    amoebaGroup.add(vacMesh);

    // Food Vacuoles with engulfed nutrients
    for (let f = 0; f < 3; f++) {
      const fv = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 12, 12),
        new THREE.MeshStandardMaterial({ color: 0x84cc16, emissive: 0x65a30d, emissiveIntensity: 0.6 })
      );
      fv.position.set(-0.3 + f * 0.35, -0.2 + f * 0.3, 0.2);
      amoebaGroup.add(fv);
    }

    refs.animatedMeshes.push(amoebaGroup);
    return;
  }

  // =========================================================================
  // 3. FUNGI: MUSHROOM (AGARICUS) & PENICILLIUM
  // =========================================================================
  if (topicId === 'fungi' || topicId === 'bioCh1FungiMushroom') {
    if (isIsolated && (partId === 'gills' || partId === 'lamellae')) {
      // Underside of Mushroom Cap with Radial Gill Plates & Spores
      const gillsGroup = new THREE.Group();
      group.add(gillsGroup);

      const capUnderside = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 1.8, 0.2, 32),
        new THREE.MeshStandardMaterial({ color: 0x78716c, roughness: 0.7 })
      );
      gillsGroup.add(capUnderside);

      // Radial gill plates
      const numGills = 28;
      for (let g = 0; g < numGills; g++) {
        const angle = (g / numGills) * Math.PI * 2;
        const gillMesh = new THREE.Mesh(
          new THREE.BoxGeometry(1.2, 0.35, 0.03),
          new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x7e22ce, emissiveIntensity: 0.5 })
        );
        gillMesh.position.set(Math.cos(angle) * 0.9, -0.2, Math.sin(angle) * 0.9);
        gillMesh.rotation.y = -angle;
        gillsGroup.add(gillMesh);
      }

      // Floating basidiospores
      for (let s = 0; s < 18; s++) {
        const spore = new THREE.Mesh(
          new THREE.SphereGeometry(0.06, 8, 8),
          new THREE.MeshStandardMaterial({ color: 0xd97706, emissive: 0xb45309, emissiveIntensity: 0.8 })
        );
        spore.position.set((Math.random() - 0.5) * 2.2, -0.6 - Math.random() * 1.0, (Math.random() - 0.5) * 2.2);
        gillsGroup.add(spore);
      }
      refs.animatedMeshes.push(gillsGroup);
      return;
    }

    if (isIsolated && (partId === 'mycelium' || partId === 'hyphae')) {
      // Underground Branching Hyphae / Mycelium Network
      const mycGroup = new THREE.Group();
      group.add(mycGroup);

      const hyphaMat = new THREE.MeshStandardMaterial({
        color: 0xf1f5f9,
        emissive: 0xe2e8f0,
        emissiveIntensity: 0.5,
        roughness: 0.4
      });
      // Branching tube segments
      const createBranch = (start: THREE.Vector3, dir: THREE.Vector3, len: number, depth: number) => {
        if (depth > 3) return;
        const end = start.clone().add(dir.clone().multiplyScalar(len));
        const curve = new THREE.CatmullRomCurve3([start, end]);
        const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 10, 0.05 * (4 - depth) * 0.4, 6, false), hyphaMat);
        mycGroup.add(tube);

        // Branching splits
        const d1 = dir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.5).normalize();
        const d2 = dir.clone().applyAxisAngle(new THREE.Vector3(0, 0, 1), -0.4).normalize();
        createBranch(end, d1, len * 0.75, depth + 1);
        createBranch(end, d2, len * 0.7, depth + 1);
      };

      createBranch(new THREE.Vector3(0, 0, 0), new THREE.Vector3(1, -0.5, 0).normalize(), 1.2, 1);
      createBranch(new THREE.Vector3(0, 0, 0), new THREE.Vector3(-1, -0.4, 0.5).normalize(), 1.3, 1);
      createBranch(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.2, -0.8, -1).normalize(), 1.1, 1);
      refs.animatedMeshes.push(mycGroup);
      return;
    }

    // Default Agaricus Mushroom
    const mushGroup = new THREE.Group();
    group.add(mushGroup);

    const isCap = partId === 'pileus' || partId === 'cap';
    const isGills = partId === 'gills';
    const isRing = partId === 'annulus';
    const isStipe = partId === 'stipe' || partId === 'stem';
    const isMyc = partId === 'mycelium';

    // Stipe (Stem)
    const stipeMat = new THREE.MeshStandardMaterial({
      color: isStipe ? 0x38bdf8 : 0xf8fafc,
      roughness: 0.5,
      emissive: isStipe ? 0x0284c7 : 0x000000,
      emissiveIntensity: isStipe ? 0.6 : 0
    });
    const stipeMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.4, 2.4, 16), stipeMat);
    stipeMesh.position.y = -0.3;
    mushGroup.add(stipeMesh);

    // Annulus (Ring collar on stem)
    const ringMat = new THREE.MeshStandardMaterial({
      color: isRing ? 0xfacc15 : 0xe2e8f0,
      emissive: isRing ? 0xeab308 : 0x000000,
      emissiveIntensity: isRing ? 0.8 : 0
    });
    const ringMesh = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.08, 8, 24), ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = 0.3;
    mushGroup.add(ringMesh);

    // Pileus (Umbrella Cap)
    const capMat = new THREE.MeshStandardMaterial({
      color: isCap ? 0xc084fc : 0xa855f7,
      emissive: isCap ? 0x9333ea : 0x7e22ce,
      emissiveIntensity: isCap ? 0.8 : 0.4,
      roughness: 0.3
    });
    const capMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.4, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.55),
      capMat
    );
    capMesh.position.y = 0.9;
    mushGroup.add(capMesh);

    // Gills underneath
    const gillsMat = new THREE.MeshStandardMaterial({
      color: isGills ? 0xf43f5e : 0x7e22ce,
      emissive: isGills ? 0xe11d48 : 0x581c87,
      emissiveIntensity: isGills ? 0.9 : 0.4
    });
    const gillsBottom = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.35, 0.12, 24), gillsMat);
    gillsBottom.position.y = 0.85;
    mushGroup.add(gillsBottom);

    // Base Mycelium roots
    const mycMat = new THREE.MeshStandardMaterial({
      color: isMyc ? 0x22c55e : 0x94a3b8,
      emissive: isMyc ? 0x16a34a : 0x000000,
      emissiveIntensity: isMyc ? 0.8 : 0
    });
    for (let m = 0; m < 8; m++) {
      const angle = (m / 8) * Math.PI * 2;
      const rootMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.01, 0.8, 6), mycMat);
      rootMesh.position.set(Math.cos(angle) * 0.4, -1.6, Math.sin(angle) * 0.4);
      rootMesh.rotation.z = Math.cos(angle) * 0.5;
      mushGroup.add(rootMesh);
    }

    refs.animatedMeshes.push(mushGroup);
    return;
  }

  // =========================================================================
  // 4. PLANTAE: PLANT CELL & CHLOROPLAST
  // =========================================================================
  if (topicId === 'plantae' || topicId === 'bioCh1PlantaeChloroplast') {
    if (isIsolated && (partId === 'chloroplast' || partId === 'grana' || partId === 'thylakoid')) {
      // High-resolution Cutaway 3D Chloroplast with Grana Stacks & Stroma
      const chlorGroup = new THREE.Group();
      group.add(chlorGroup);

      // Outer & Inner Envelope
      const envMesh = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.65),
        new THREE.MeshPhysicalMaterial({
          color: 0x15803d,
          transparent: true,
          opacity: 0.55,
          roughness: 0.2,
          emissive: 0x166534,
          emissiveIntensity: 0.4
        })
      );
      envMesh.rotation.x = Math.PI / 2;
      chlorGroup.add(envMesh);

      // Grana Stacks (stacked thylakoid coin discs)
      const thylaMat = new THREE.MeshStandardMaterial({
        color: 0x22c55e,
        emissive: 0x16a34a,
        emissiveIntensity: 0.8,
        roughness: 0.3
      });
      const numGrana = 5;
      for (let g = 0; g < numGrana; g++) {
        const angle = (g / numGrana) * Math.PI * 2;
        const rad = 0.65;
        const gx = Math.cos(angle) * rad;
        const gz = Math.sin(angle) * rad;

        for (let d = 0; d < 5; d++) {
          const coin = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.06, 16), thylaMat);
          coin.position.set(gx, -0.3 + d * 0.12, gz);
          chlorGroup.add(coin);
        }
      }

      // Connecting Stroma Lamellae bridges
      const fretMat = new THREE.MeshStandardMaterial({ color: 0x86efac, emissive: 0x22c55e, emissiveIntensity: 0.5 });
      const fret = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.2, 8), fretMat);
      fret.rotation.z = Math.PI / 2;
      chlorGroup.add(fret);

      refs.animatedMeshes.push(chlorGroup);
      return;
    }

    // Default Plant Cell with Cellulose Wall & Central Vacuole
    const plantGroup = new THREE.Group();
    group.add(plantGroup);

    const isWall = partId === 'cellwall' || partId === 'wall';
    const isChlor = partId === 'chloroplast';
    const isVac = partId === 'vacuole' || partId === 'central_vacuole';

    // Rigid Cell Wall (Box)
    const wallMesh = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 2.5, 1.8),
      new THREE.MeshStandardMaterial({
        color: isWall ? 0x4ade80 : 0x15803d,
        wireframe: true,
        emissive: isWall ? 0x22c55e : 0x14532d,
        emissiveIntensity: isWall ? 1.0 : 0.5
      })
    );
    plantGroup.add(wallMesh);

    // Inner Cytoplasm
    const cytoMesh = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 2.3, 1.6),
      new THREE.MeshPhysicalMaterial({ color: 0x22c55e, transparent: true, opacity: 0.35, roughness: 0.2 })
    );
    plantGroup.add(cytoMesh);

    // Huge Central Vacuole
    const vacMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 1.4, 1.0),
      new THREE.MeshPhysicalMaterial({
        color: isVac ? 0x38bdf8 : 0x0284c7,
        transparent: true,
        opacity: 0.65,
        emissive: isVac ? 0x0ea5e9 : 0x0369a1,
        emissiveIntensity: isVac ? 0.9 : 0.3
      })
    );
    vacMesh.position.set(-0.2, 0, 0);
    plantGroup.add(vacMesh);

    // Chloroplasts (4 green organelles)
    for (let c = 0; c < 4; c++) {
      const chlor = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.18, 0.3, 8, 8),
        new THREE.MeshStandardMaterial({
          color: isChlor ? 0x4ade80 : 0x16a34a,
          emissive: isChlor ? 0x22c55e : 0x15803d,
          emissiveIntensity: isChlor ? 1.0 : 0.6
        })
      );
      chlor.position.set(0.65, (c - 1.5) * 0.5, 0.4);
      chlor.rotation.z = 0.5;
      plantGroup.add(chlor);
    }

    refs.animatedMeshes.push(plantGroup);
    return;
  }

  // =========================================================================
  // 5. ANIMALIA: ANIMAL CELL & CENTROSOME
  // =========================================================================
  if (topicId === 'animalia' || topicId === 'bioCh1AnimaliaCell') {
    if (isIsolated && (partId === 'centrosome' || partId === 'centrioles')) {
      // Isolated Centrosome with Perpendicular Pair of Centrioles (9 Microtubule Triplets)
      const centroGroup = new THREE.Group();
      group.add(centroGroup);

      const barrelMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        emissive: 0xd97706,
        emissiveIntensity: 0.8,
        roughness: 0.3
      });

      // Centriole 1 (Vertical)
      const c1Group = new THREE.Group();
      centroGroup.add(c1Group);
      for (let t = 0; t < 9; t++) {
        const angle = (t / 9) * Math.PI * 2;
        const triplet = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.4, 8), barrelMat);
        triplet.position.set(Math.cos(angle) * 0.45, 0, Math.sin(angle) * 0.45);
        c1Group.add(triplet);
      }

      // Centriole 2 (Horizontal at 90 degrees)
      const c2Group = new THREE.Group();
      c2Group.position.set(0.8, -0.4, 0);
      c2Group.rotation.z = Math.PI / 2;
      centroGroup.add(c2Group);
      for (let t = 0; t < 9; t++) {
        const angle = (t / 9) * Math.PI * 2;
        const triplet = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.4, 8), barrelMat);
        triplet.position.set(Math.cos(angle) * 0.45, 0, Math.sin(angle) * 0.45);
        c2Group.add(triplet);
      }

      // Radiating Aster Rays
      const rayMat = new THREE.MeshBasicMaterial({ color: 0xfde047, transparent: true, opacity: 0.6 });
      for (let r = 0; r < 14; r++) {
        const ray = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 1.6, 4), rayMat);
        ray.position.set((Math.random() - 0.5) * 1.8, (Math.random() - 0.5) * 1.8, (Math.random() - 0.5) * 1.8);
        ray.rotation.x = Math.random() * Math.PI;
        ray.rotation.y = Math.random() * Math.PI;
        centroGroup.add(ray);
      }

      refs.animatedMeshes.push(centroGroup);
      return;
    }

    // Default Animal Cell (No Wall, Flexible Membrane)
    const animGroup = new THREE.Group();
    group.add(animGroup);

    const isMem = partId === 'membrane' || partId === 'cell_membrane';
    const isCentro = partId === 'centrosome' || partId === 'centrioles';
    const isMito = partId === 'mitochondria';

    // Cell Membrane
    const memMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 28, 28),
      new THREE.MeshPhysicalMaterial({
        color: isMem ? 0xf87171 : 0xef4444,
        transparent: true,
        opacity: isMem ? 0.75 : 0.5,
        roughness: 0.2,
        emissive: isMem ? 0xdc2626 : 0x991b1b,
        emissiveIntensity: isMem ? 0.9 : 0.3
      })
    );
    animGroup.add(memMesh);

    // Spherical Nucleus
    const nucMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.55, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0x9333ea, emissive: 0x7e22ce, emissiveIntensity: 0.7 })
    );
    nucMesh.position.set(-0.2, 0, 0);
    animGroup.add(nucMesh);

    // Centrosome (Yellow duo)
    const centro = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 12, 12),
      new THREE.MeshStandardMaterial({
        color: isCentro ? 0xfacc15 : 0xeab308,
        emissive: isCentro ? 0xfef08a : 0xca8a04,
        emissiveIntensity: isCentro ? 1.0 : 0.6
      })
    );
    centro.position.set(0.55, 0.45, 0);
    animGroup.add(centro);

    // Mitochondria (Orange capsules)
    for (let m = 0; m < 3; m++) {
      const mito = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.12, 0.25, 8, 8),
        new THREE.MeshStandardMaterial({
          color: isMito ? 0xf97316 : 0xea580c,
          emissive: isMito ? 0xfb923c : 0xc2410c,
          emissiveIntensity: isMito ? 1.0 : 0.5
        })
      );
      mito.position.set(0.4 - m * 0.35, -0.6 + m * 0.2, 0.3);
      mito.rotation.z = m * 0.8;
      animGroup.add(mito);
    }

    refs.animatedMeshes.push(animGroup);
    return;
  }

  // =========================================================================
  // 6. TAXONOMIC HIERARCHY (7 RANKS PYRAMID)
  // =========================================================================
  if (topicId === 'taxonomy' || topicId === 'bioCh1TaxonomyHierarchy') {
    const pyrGroup = new THREE.Group();
    group.add(pyrGroup);

    const ranks = [
      { id: 'kingdom', nameBn: '১. রাজ্য (Kingdom)', color: 0x3b82f6, hex: '#3b82f6', w: 3.4, h: 0.45, y: -1.5 },
      { id: 'phylum', nameBn: '২. পর্ব (Phylum)', color: 0x06b6d4, hex: '#06b6d4', w: 2.9, h: 0.45, y: -1.0 },
      { id: 'class', nameBn: '৩. শ্রেণি (Class)', color: 0x10b981, hex: '#10b981', w: 2.4, h: 0.45, y: -0.5 },
      { id: 'order', nameBn: '৪. বর্গ (Order)', color: 0x84cc16, hex: '#84cc16', w: 1.9, h: 0.45, y: 0.0 },
      { id: 'family', nameBn: '৫. গোত্র (Family)', color: 0xfacc15, hex: '#facc15', w: 1.4, h: 0.45, y: 0.5 },
      { id: 'genus', nameBn: '৬. গণ (Genus)', color: 0xf97316, hex: '#f97316', w: 0.9, h: 0.45, y: 1.0 },
      { id: 'species', nameBn: '৭. প্রজাতি (Species)', color: 0xef4444, hex: '#ef4444', w: 0.45, h: 0.55, y: 1.55 }
    ];

    ranks.forEach((r) => {
      const isRankActive = partId === r.id;
      const stepGeo = new THREE.BoxGeometry(r.w * (isRankActive ? 1.15 : 1.0), r.h, r.w * 0.7);
      const stepMat = new THREE.MeshStandardMaterial({
        color: r.color,
        emissive: r.color,
        emissiveIntensity: isRankActive ? 1.0 : 0.4,
        roughness: 0.3
      });
      const stepMesh = new THREE.Mesh(stepGeo, stepMat);
      stepMesh.position.set(0, r.y, isRankActive ? 0.3 : 0);
      pyrGroup.add(stepMesh);
    });

    refs.animatedMeshes.push(pyrGroup);
    return;
  }

  // =========================================================================
  // 7. WHITTAKER'S FIVE KINGDOMS
  // =========================================================================
  if (topicId === 'fiveKingdoms' || topicId === 'bioCh1FiveKingdoms') {
    const kGroup = new THREE.Group();
    group.add(kGroup);

    const kingdoms = [
      { id: 'monera', nameBn: 'মনেরা (Monera)', color: 0x38bdf8, geo: 'capsule' },
      { id: 'protista', nameBn: 'প্রোটিস্টা (Protista)', color: 0xf59e0b, geo: 'torus' },
      { id: 'fungi', nameBn: 'ফানজাই (Fungi)', color: 0xa855f7, geo: 'cone' },
      { id: 'plantae', nameBn: 'প্লান্টি (Plantae)', color: 0x22c55e, geo: 'box' },
      { id: 'animalia', nameBn: 'অ্যানিম্যালিয়া (Animalia)', color: 0xef4444, geo: 'sphere' }
    ];

    kingdoms.forEach((k, idx) => {
      const isSelected = partId === k.id;
      const angle = (idx / kingdoms.length) * Math.PI * 2;
      const radius = 2.2;
      const subGroup = new THREE.Group();
      subGroup.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.7, 0);
      kGroup.add(subGroup);

      const mat = new THREE.MeshStandardMaterial({
        color: k.color,
        emissive: k.color,
        emissiveIntensity: isSelected ? 1.0 : 0.4
      });

      let mesh: THREE.Mesh;
      if (k.geo === 'capsule') mesh = new THREE.Mesh(new THREE.CapsuleGeometry(0.35, 0.6, 12, 12), mat);
      else if (k.geo === 'cone') mesh = new THREE.Mesh(new THREE.ConeGeometry(0.5, 0.8, 16), mat);
      else if (k.geo === 'box') mesh = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.7), mat);
      else if (k.geo === 'torus') mesh = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.15, 12, 24), mat);
      else mesh = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 16), mat);

      if (isSelected) mesh.scale.set(1.4, 1.4, 1.4);
      subGroup.add(mesh);
    });

    refs.animatedMeshes.push(kGroup);
    return;
  }

  // =========================================================================
  // 8. BINOMIAL NOMENCLATURE & SPECIES
  // =========================================================================
  if (topicId === 'binomial' || topicId === 'bioCh1BinomialRules') {
    const binGroup = new THREE.Group();
    group.add(binGroup);

    const isGenus = partId === 'genus';
    const isSpec = partId === 'species';

    // Genus Box
    const genusMesh = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 0.9, 0.3),
      new THREE.MeshStandardMaterial({
        color: isGenus ? 0x38bdf8 : 0x0284c7,
        emissive: isGenus ? 0x0ea5e9 : 0x0369a1,
        emissiveIntensity: isGenus ? 1.0 : 0.6
      })
    );
    genusMesh.position.set(-1.2, 0.4, isGenus ? 0.2 : 0);
    binGroup.add(genusMesh);

    // Species Box
    const specMesh = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 0.9, 0.3),
      new THREE.MeshStandardMaterial({
        color: isSpec ? 0x34d399 : 0x10b981,
        emissive: isSpec ? 0x10b981 : 0x059669,
        emissiveIntensity: isSpec ? 1.0 : 0.6
      })
    );
    specMesh.position.set(1.2, -0.4, isSpec ? 0.2 : 0);
    binGroup.add(specMesh);

    // Latin Underline bar
    const barMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 4.4, 8),
      new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 0.8 })
    );
    barMesh.rotation.z = Math.PI / 2;
    barMesh.position.set(0, -1.1, 0);
    binGroup.add(barMesh);

    refs.animatedMeshes.push(binGroup);
    return;
  }

  // =========================================================================
  // 9. SCOPE: BIOS & LOGOS, DNA DOUBLE HELIX, PROTOPLASM
  // =========================================================================
  if (topicId === 'scope' || topicId === 'bioCh1Scope') {
    const scopeGroup = new THREE.Group();
    group.add(scopeGroup);

    const isDNA = partId === 'dna';
    const isProto = partId === 'protoplasm';
    const isLogos = partId === 'logos';

    if (isIsolated && isProto) {
      // Protoplasm cytoplasm drop with organelle inclusions
      const protoMesh = new THREE.Mesh(
        new THREE.SphereGeometry(1.4, 32, 32),
        new THREE.MeshPhysicalMaterial({
          color: 0x06b6d4,
          transparent: true,
          opacity: 0.75,
          roughness: 0.1,
          transmission: 0.4,
          emissive: 0x0891b2,
          emissiveIntensity: 0.4
        })
      );
      scopeGroup.add(protoMesh);

      // Embedded granules
      const granGeo = new THREE.SphereGeometry(0.08, 8, 8);
      const granMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 0.6 });
      for (let i = 0; i < 20; i++) {
        const gran = new THREE.Mesh(granGeo, granMat);
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const dist = 0.4 + Math.random() * 0.8;
        gran.position.set(
          dist * Math.sin(phi) * Math.cos(theta),
          dist * Math.sin(phi) * Math.sin(theta),
          dist * Math.cos(phi)
        );
        scopeGroup.add(gran);
      }
    } else if (isIsolated && isLogos) {
      // Scientific knowledge / inquiry core with gyroscopic rings
      const coreMesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(1.0, 2),
        new THREE.MeshStandardMaterial({
          color: 0x8b5cf6,
          metalness: 0.7,
          roughness: 0.2,
          emissive: 0x6d28d9,
          emissiveIntensity: 0.8
        })
      );
      scopeGroup.add(coreMesh);

      const ringMat1 = new THREE.MeshStandardMaterial({ color: 0x38bdf8, wireframe: true });
      const ringMat2 = new THREE.MeshStandardMaterial({ color: 0xec4899, wireframe: true });
      const ring1 = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.04, 8, 36), ringMat1);
      const ring2 = new THREE.Mesh(new THREE.TorusGeometry(1.9, 0.04, 8, 36), ringMat2);
      ring2.rotation.x = Math.PI / 3;
      scopeGroup.add(ring1);
      scopeGroup.add(ring2);
    } else {
      // DNA double helix
      const strandGeo = new THREE.SphereGeometry(0.12, 10, 10);
      const strandMat1 = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: isDNA ? 1.0 : 0.6 });
      const strandMat2 = new THREE.MeshStandardMaterial({ color: 0xec4899, emissive: 0xbe185d, emissiveIntensity: isDNA ? 1.0 : 0.6 });

      const numPoints = 28;
      for (let i = 0; i < numPoints; i++) {
        const angle = i * 0.48;
        const y = (i - numPoints / 2) * 0.22;
        const r = 1.1;

        const s1 = new THREE.Mesh(strandGeo, strandMat1);
        s1.position.set(Math.cos(angle) * r, y, Math.sin(angle) * r);
        scopeGroup.add(s1);

        const s2 = new THREE.Mesh(strandGeo, strandMat2);
        s2.position.set(Math.cos(angle + Math.PI) * r, y, Math.sin(angle + Math.PI) * r);
        scopeGroup.add(s2);

        if (i % 2 === 0) {
          const rungMat = new THREE.MeshStandardMaterial({
            color: (i % 4 === 0) ? 0x22c55e : 0xfacc15,
            emissive: (i % 4 === 0) ? 0x15803d : 0xca8a04,
            emissiveIntensity: 0.5
          });
          const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, r * 2, 8), rungMat);
          rung.position.set(0, y, 0);
          rung.rotation.z = Math.PI / 2;
          rung.rotation.y = -angle;
          scopeGroup.add(rung);
        }
      }

      // Center translucent protoplasm sphere
      const protoSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 24, 24),
        new THREE.MeshPhysicalMaterial({
          color: 0x10b981,
          transparent: true,
          opacity: 0.6,
          roughness: 0.1,
          emissive: 0x059669,
          emissiveIntensity: isProto ? 1.0 : 0.4
        })
      );
      scopeGroup.add(protoSphere);
    }

    refs.animatedMeshes.push(scopeGroup);
    return;
  }

  // =========================================================================
  // 10. BRANCHES: BASIC & APPLIED BIOLOGY (MICROSCOPE, MORPHOLOGY, BIOTECH)
  // =========================================================================
  if (topicId === 'branches' || topicId === 'bioCh1Branches') {
    const branchGroup = new THREE.Group();
    group.add(branchGroup);

    const isScope = partId === 'microscope';
    const isMorph = partId === 'morphology';
    const isBiotech = partId === 'biotechnology';

    if (isIsolated && isScope) {
      // Detailed optical compound microscope 3D
      // Base
      const baseMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.4, 0.3, 24),
        new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.7, roughness: 0.3 })
      );
      baseMesh.position.y = -1.8;
      branchGroup.add(baseMesh);

      // Arm pillar
      const armMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.25, 2.4, 16),
        new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.6 })
      );
      armMesh.position.set(-0.6, -0.6, 0);
      armMesh.rotation.z = 0.2;
      branchGroup.add(armMesh);

      // Stage
      const stageMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1.4, 0.1, 1.2),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8, roughness: 0.2 })
      );
      stageMesh.position.set(0.1, -0.6, 0);
      branchGroup.add(stageMesh);

      // Objective turret & lenses
      const turretMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.4, 0.25, 16),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9 })
      );
      turretMesh.position.set(0.1, 0.3, 0);
      branchGroup.add(turretMesh);

      const objLens = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.08, 0.6, 12),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.8 })
      );
      objLens.position.set(0.1, -0.1, 0);
      branchGroup.add(objLens);

      // Eyepiece tube
      const tubeMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.2, 1.4, 16),
        new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.6 })
      );
      tubeMesh.position.set(0.1, 1.1, 0);
      tubeMesh.rotation.z = 0.2;
      branchGroup.add(tubeMesh);

      // Focus knobs
      const knobGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.15, 16);
      const knobMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8 });
      const knobL = new THREE.Mesh(knobGeo, knobMat);
      knobL.rotation.x = Math.PI / 2;
      knobL.position.set(-0.6, -0.6, 0.6);
      const knobR = knobL.clone();
      knobR.position.z = -0.6;
      branchGroup.add(knobL);
      branchGroup.add(knobR);
    } else if (isIsolated && isBiotech) {
      // Biotechnology Petri dish + plasmid recombinant vector
      const dishBottom = new THREE.Mesh(
        new THREE.CylinderGeometry(1.8, 1.8, 0.2, 32),
        new THREE.MeshPhysicalMaterial({ color: 0x0284c7, transparent: true, opacity: 0.4, roughness: 0.1 })
      );
      dishBottom.position.y = -0.5;
      branchGroup.add(dishBottom);

      // Agar nutrient layer
      const agar = new THREE.Mesh(
        new THREE.CylinderGeometry(1.7, 1.7, 0.08, 32),
        new THREE.MeshStandardMaterial({ color: 0x059669, emissive: 0x047857, emissiveIntensity: 0.5 })
      );
      agar.position.y = -0.42;
      branchGroup.add(agar);

      // Bacterial colonies
      for (let i = 0; i < 8; i++) {
        const colMesh = new THREE.Mesh(
          new THREE.SphereGeometry(0.15, 12, 12),
          new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 0.6 })
        );
        const ang = (i / 8) * Math.PI * 2;
        const rad = 0.6 + (i % 3) * 0.4;
        colMesh.position.set(Math.cos(ang) * rad, -0.36, Math.sin(ang) * rad);
        colMesh.scale.set(1, 0.3, 1);
        branchGroup.add(colMesh);
      }

      // Hovering plasmid DNA ring
      const plasmidTorus = new THREE.Mesh(
        new THREE.TorusGeometry(1.0, 0.07, 12, 36),
        new THREE.MeshStandardMaterial({ color: 0xec4899, emissive: 0xdb2777, emissiveIntensity: 0.9 })
      );
      plasmidTorus.position.y = 0.9;
      plasmidTorus.rotation.x = Math.PI / 4;
      branchGroup.add(plasmidTorus);
    } else {
      // Morphology / Whole Branches overview: anatomical leaf + cell model
      // Morphological leaf structure
      const leafShape = new THREE.Shape();
      leafShape.moveTo(0, -1.5);
      leafShape.bezierCurveTo(1.2, -0.5, 1.2, 0.8, 0, 1.6);
      leafShape.bezierCurveTo(-1.2, 0.8, -1.2, -0.5, 0, -1.5);
      const leafGeo = new THREE.ShapeGeometry(leafShape);
      const leafMat = new THREE.MeshStandardMaterial({
        color: 0x16a34a,
        side: THREE.DoubleSide,
        emissive: 0x15803d,
        emissiveIntensity: isMorph ? 0.9 : 0.4
      });
      const leafMesh = new THREE.Mesh(leafGeo, leafMat);
      leafMesh.position.set(-0.8, 0, 0);
      branchGroup.add(leafMesh);

      // Main vein stem
      const stemMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.08, 3.2, 12),
        new THREE.MeshStandardMaterial({ color: 0x15803d })
      );
      stemMesh.position.set(-0.8, 0, 0.05);
      branchGroup.add(stemMesh);

      // Microscope symbol floating next to it
      const miniScope = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.2, 1.8, 16),
        new THREE.MeshStandardMaterial({
          color: 0x38bdf8,
          metalness: 0.7,
          emissive: 0x0284c7,
          emissiveIntensity: isScope ? 0.9 : 0.3
        })
      );
      miniScope.position.set(1.2, 0.2, 0);
      branchGroup.add(miniScope);
    }

    refs.animatedMeshes.push(branchGroup);
    return;
  }

  // =========================================================================
  // 11. DEFAULT FALLBACK: DNA DOUBLE HELIX & PROTOPLASM
  // =========================================================================
  const defaultGroup = new THREE.Group();
  group.add(defaultGroup);

  // DNA strands
  const strandGeo = new THREE.SphereGeometry(0.12, 10, 10);
  const strandMat1 = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.7 });
  const strandMat2 = new THREE.MeshStandardMaterial({ color: 0xec4899, emissive: 0xbe185d, emissiveIntensity: 0.7 });

  const numPoints = 24;
  for (let i = 0; i < numPoints; i++) {
    const angle = i * 0.5;
    const y = (i - numPoints / 2) * 0.22;
    const r = 1.0;

    const s1 = new THREE.Mesh(strandGeo, strandMat1);
    s1.position.set(Math.cos(angle) * r, y, Math.sin(angle) * r);
    defaultGroup.add(s1);

    const s2 = new THREE.Mesh(strandGeo, strandMat2);
    s2.position.set(Math.cos(angle + Math.PI) * r, y, Math.sin(angle + Math.PI) * r);
    defaultGroup.add(s2);

    if (i % 2 === 0) {
      const rung = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, r * 2, 8),
        new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x15803d, emissiveIntensity: 0.6 })
      );
      rung.position.set(0, y, 0);
      rung.rotation.z = Math.PI / 2;
      rung.rotation.y = -angle;
      defaultGroup.add(rung);
    }
  }

  // Protoplasm core
  const orb = new THREE.Mesh(
    new THREE.SphereGeometry(0.65, 20, 20),
    new THREE.MeshPhysicalMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.6,
      roughness: 0.1,
      emissive: 0x059669,
      emissiveIntensity: 0.8
    })
  );
  defaultGroup.add(orb);

  refs.animatedMeshes.push(defaultGroup);
}

/**
 * Animate the 3D scene continuously
 */
export function updateBiologyCh1Part3DPhysics(state: BiologyPart3DUpdateState) {
  const { time, animate, refs } = state;
  if (!animate || !refs.animatedMeshes) return;

  // Gentle rotation of animated meshes
  refs.animatedMeshes.forEach((mesh: THREE.Object3D) => {
    mesh.rotation.y = time * 0.4;
  });

  // Flagellum whipping physics
  if (refs.filamentMesh) {
    refs.filamentMesh.rotation.y = time * 3.5;
  }
  if (refs.bacFlag) {
    refs.bacFlag.rotation.y = time * 4.0;
  }

  // Contractile vacuole pulsation (systole & diastole)
  if (refs.contractileMesh) {
    const pulse = 1.0 + Math.sin(time * 3) * 0.2;
    refs.contractileMesh.scale.set(pulse, pulse, pulse);
  }

  // Nucleoid breathing pulsation
  if (refs.nucleoidKnot) {
    refs.nucleoidKnot.rotation.z = time * 0.5;
  }
}
