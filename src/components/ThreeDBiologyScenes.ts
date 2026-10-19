/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as THREE from 'three';
import { BIOLOGY_3D_CATALOG, Biology3DModelMeta } from '../data/biology3DModelsCatalog';
import { buildBiologyCh1to5Scene } from './ThreeDBiologyCh1to5Scenes';
import { buildBiologyCh6to10Scene } from './ThreeDBiologyCh6to10Scenes';
import { buildBiologyCh11to14Scene } from './ThreeDBiologyCh11to14Scenes';

type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;

/**
 * Classifies any (chapter, modelId) into a dedicated biological model type
 */
export function getBiologyModelType(chapter: number, modelId: number): string {
  if (chapter === 1) {
    if (modelId === 2) return 'dna';
    if (modelId === 4) return 'bacterium';
    if (modelId === 5) return 'amoeba';
    if (modelId === 7) return 'plant_cell';
    if (modelId === 8) return 'animal_cell';
    if (modelId === 9) return 'ecosystem';
    return 'dna';
  }
  if (chapter === 2) {
    if (modelId === 1 || modelId === 4 || modelId === 11) return 'plant_cell';
    if (modelId === 2 || modelId === 10 || modelId === 18) return 'animal_cell';
    if (modelId === 6) return 'mitochondria';
    if (modelId === 7) return 'chloroplast';
    if (modelId === 16 || modelId === 17) return 'plant_water';
    if (modelId === 19) return 'skeleton';
    if (modelId === 20) return 'neuron';
    return 'plant_cell';
  }
  if (chapter === 3) {
    if (modelId === 1) return 'bacterium';
    return 'mitosis';
  }
  if (chapter === 4) {
    if (modelId >= 2 && modelId <= 6) return 'chloroplast';
    return 'mitochondria';
  }
  if (chapter === 5) {
    if (modelId === 2) return 'tooth';
    return 'digestive';
  }
  if (chapter === 6) {
    if (modelId === 1 || modelId === 2 || modelId === 4) return 'plant_water';
    if (modelId === 3) return 'stomata';
    if (modelId >= 6 && modelId <= 9) return 'blood_vessel';
    return 'heart';
  }
  if (chapter === 7) {
    if (modelId === 1) return 'stomata';
    if (modelId >= 11 && modelId <= 13) return 'alveoli';
    if (modelId >= 14 && modelId <= 16) return 'blood_vessel';
    return 'lungs';
  }
  if (chapter === 8) {
    if (modelId === 1 || modelId === 2 || modelId >= 15) return 'kidney';
    return 'nephron';
  }
  if (chapter === 9) {
    return 'skeleton';
  }
  if (chapter === 10) {
    if (modelId >= 4 && modelId <= 7) return 'brain';
    return 'neuron';
  }
  if (chapter === 11) {
    return 'flower';
  }
  if (chapter === 12) {
    if (modelId === 1 || modelId === 7) return 'mitosis';
    return 'dna';
  }
  if (chapter === 13) {
    return 'ecosystem';
  }
  if (chapter === 14) {
    if (modelId === 6) return 'bacterium';
    return 'biotech';
  }
  return 'dna';
}

export function buildBiology3DScene(
  slideOrModelId: number,
  chapter: number,
  group: THREE.Group,
  refs: any,
  addAnchor: AddAnchorFn
) {
  const normId = slideOrModelId > 20 ? ((slideOrModelId - 1) % 20) + 1 : Math.max(1, slideOrModelId);
  const models = BIOLOGY_3D_CATALOG[chapter] || BIOLOGY_3D_CATALOG[1] || [];
  const meta: Biology3DModelMeta = models.find(m => m.id === normId) || models[0];

  const type = getBiologyModelType(chapter, normId);
  refs.bioType = type;
  refs.biologyChapter = chapter;
  refs.biologyModelId = normId;

  // Chapter-specific dedicated 3D scenes for all 14 chapters (20 models each)
  if (chapter >= 1 && chapter <= 5) {
    buildBiologyCh1to5Scene(normId, chapter, group, refs, addAnchor);
    return;
  }
  if (chapter >= 6 && chapter <= 10) {
    buildBiologyCh6to10Scene(normId, chapter, group, refs, addAnchor);
    return;
  }
  if (chapter >= 11 && chapter <= 14) {
    buildBiologyCh11to14Scene(normId, chapter, group, refs, addAnchor);
    return;
  }

  // Common Materials
  const redMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.35 });
  const darkRedMat = new THREE.MeshStandardMaterial({ color: 0x991b1b, roughness: 0.4 });
  const blueMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.3 });
  const cyanMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.25, metalness: 0.1 });
  const emeraldMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.35 });
  const darkGreenMat = new THREE.MeshStandardMaterial({ color: 0x065f46, roughness: 0.4 });
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.2, metalness: 0.4 });
  const amberMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.3 });
  const purpleMat = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, roughness: 0.3 });
  const glassMat = new THREE.MeshPhysicalMaterial({ color: 0xbae6fd, transparent: true, opacity: 0.4, roughness: 0.1 });
  const boneMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.25 });
  const yellowMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3 });

  // 1. DNA Double Helix
  if (type === 'dna') {
    const helixGroup = new THREE.Group();
    group.add(helixGroup);
    refs.bioMainMesh = helixGroup;

    const turns = 2.5;
    const height = 4.8;
    const radius = 1.3;
    const rungs = 18;

    for (let i = 0; i < rungs; i++) {
      const t = (i / rungs) * Math.PI * 2 * turns;
      const y = (i / rungs) * height - height / 2;
      const x1 = Math.cos(t) * radius;
      const z1 = Math.sin(t) * radius;
      const x2 = Math.cos(t + Math.PI) * radius;
      const z2 = Math.sin(t + Math.PI) * radius;

      // Backbone Spheres
      const s1 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), blueMat);
      s1.position.set(x1, y, z1);
      helixGroup.add(s1);

      const s2 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), redMat);
      s2.position.set(x2, y, z2);
      helixGroup.add(s2);

      // Connecting Base-pair Rung
      const rungMat = i % 2 === 0 ? goldMat : emeraldMat;
      const rungGeo = new THREE.CylinderGeometry(0.06, 0.06, radius * 2, 8);
      const rungMesh = new THREE.Mesh(rungGeo, rungMat);
      rungMesh.position.set(0, y, 0);
      rungMesh.rotation.z = Math.PI / 2;
      rungMesh.rotation.y = -t;
      helixGroup.add(rungMesh);
    }

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(0, 1.8, 1.3); group.add(a1);
      addAnchor(a1, meta.labels[0]?.bn || 'DNA সূত্রক', meta.labels[0]?.en || 'DNA Strand', 'DNA', '#0ea5e9');
      if (meta.labels[1]) {
        const a2 = new THREE.Object3D(); a2.position.set(0, 0, 0); group.add(a2);
        addAnchor(a2, meta.labels[1].bn, meta.labels[1].en, meta.labels[1].sym, meta.labels[1].color);
      }
    }
    return;
  }

  // 2. Bacterium (Monera)
  if (type === 'bacterium') {
    const bacGroup = new THREE.Group();
    group.add(bacGroup);
    refs.bioMainMesh = bacGroup;

    // Capsule Body
    const capGeo = new THREE.CapsuleGeometry(1.2, 2.4, 16, 32);
    const capMesh = new THREE.Mesh(capGeo, emeraldMat);
    capMesh.rotation.z = Math.PI / 2;
    bacGroup.add(capMesh);

    // Inner Nucleoid ring
    const nucRing = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.12, 16, 32), purpleMat);
    nucRing.position.set(0, 0, 0);
    bacGroup.add(nucRing);

    // Flagellum tail
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.2, 0, 0),
      new THREE.Vector3(-2.8, 0.4, 0.2),
      new THREE.Vector3(-3.4, -0.4, -0.2),
      new THREE.Vector3(-4.0, 0.3, 0.1),
      new THREE.Vector3(-4.6, 0, 0)
    ]);
    const flagMesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 32, 0.08, 8, false), amberMat);
    bacGroup.add(flagMesh);
    refs.flagMesh = flagMesh;

    // Surface Pili
    for (let i = 0; i < 14; i++) {
      const ang = (i / 14) * Math.PI * 2;
      const pil = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.6, 6), amberMat);
      pil.position.set((Math.random() - 0.5) * 2.0, Math.cos(ang) * 1.3, Math.sin(ang) * 1.3);
      pil.rotation.x = ang;
      bacGroup.add(pil);
    }

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(0, 1.4, 0); group.add(a1);
      addAnchor(a1, meta.labels[0]?.bn || 'ক্যাপসুল ও প্রাচীর', meta.labels[0]?.en || 'Cell Wall', 'CW', '#10b981');
      const a2 = new THREE.Object3D(); a2.position.set(-3.2, 0.5, 0); group.add(a2);
      addAnchor(a2, 'ফ্ল্যাজেলাম (চলন অঙ্গ)', 'Flagellum', 'FLG', '#f59e0b');
    }
    return;
  }

  // 3. Human Heart
  if (type === 'heart') {
    const heartGroup = new THREE.Group();
    group.add(heartGroup);
    refs.bioMainMesh = heartGroup;

    // Ventricles (Cone/Sphere hybrid)
    const ventMesh = new THREE.Mesh(new THREE.ConeGeometry(1.6, 2.6, 32), redMat);
    ventMesh.rotation.x = Math.PI;
    ventMesh.position.y = -0.5;
    heartGroup.add(ventMesh);

    // Atria
    const leftAtrium = new THREE.Mesh(new THREE.SphereGeometry(0.9, 24, 24), darkRedMat);
    leftAtrium.position.set(-0.8, 0.8, 0.2);
    heartGroup.add(leftAtrium);

    const rightAtrium = new THREE.Mesh(new THREE.SphereGeometry(0.9, 24, 24), darkRedMat);
    rightAtrium.position.set(0.8, 0.8, 0.2);
    heartGroup.add(rightAtrium);

    // Aortic Arch (Torus segment)
    const aorta = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.28, 16, 32, Math.PI * 0.9), redMat);
    aorta.position.set(0, 1.4, 0);
    aorta.rotation.y = Math.PI / 4;
    heartGroup.add(aorta);

    // Vena Cava pipe (Blue)
    const venaCava = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 2.8, 16), blueMat);
    venaCava.position.set(1.4, 0.6, -0.3);
    heartGroup.add(venaCava);

    // Pulmonary Artery (Cyan pipe)
    const pulArt = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 1.8, 16), cyanMat);
    pulArt.position.set(-0.4, 1.2, 0.5);
    pulArt.rotation.z = -Math.PI / 4;
    heartGroup.add(pulArt);

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(0, -0.8, 1.2); group.add(a1);
      addAnchor(a1, 'নিলয় (Ventricles)', 'Ventricles', 'VENT', '#ef4444');
      const a2 = new THREE.Object3D(); a2.position.set(0, 2.1, 0); group.add(a2);
      addAnchor(a2, 'মহাধমনী (Aorta)', 'Aortic Arch', 'AO', '#dc2626');
      const a3 = new THREE.Object3D(); a3.position.set(1.4, 1.4, 0); group.add(a3);
      addAnchor(a3, 'উর্ধ্ব মহাশিরা', 'Vena Cava', 'SVC', '#0284c7');
    }
    return;
  }

  // 4. Human Lungs & Respiratory Tract
  if (type === 'lungs') {
    const lungsGroup = new THREE.Group();
    group.add(lungsGroup);
    refs.bioMainMesh = lungsGroup;

    // Trachea
    const trachea = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 2.2, 24), boneMat);
    trachea.position.set(0, 1.5, 0);
    lungsGroup.add(trachea);

    // Cartilage C-Rings
    for (let r = 0; r < 6; r++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.06, 12, 24, Math.PI * 1.5), blueMat);
      ring.position.set(0, 0.7 + r * 0.26, 0);
      ring.rotation.x = Math.PI / 2;
      lungsGroup.add(ring);
    }

    // Right Lung (3 lobes)
    const rightLung = new THREE.Mesh(new THREE.CapsuleGeometry(1.2, 2.0, 16, 24), redMat);
    rightLung.position.set(-1.4, -0.4, 0);
    rightLung.rotation.z = 0.15;
    lungsGroup.add(rightLung);

    // Left Lung (2 lobes with cardiac notch)
    const leftLung = new THREE.Mesh(new THREE.CapsuleGeometry(1.0, 1.9, 16, 24), redMat);
    leftLung.position.set(1.4, -0.4, 0);
    leftLung.rotation.z = -0.15;
    lungsGroup.add(leftLung);

    // Diaphragm dome
    const diaMesh = new THREE.Mesh(new THREE.ConeGeometry(2.8, 0.8, 32, 1, true), amberMat);
    diaMesh.position.set(0, -1.8, 0);
    lungsGroup.add(diaMesh);

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(0, 2.1, 0); group.add(a1);
      addAnchor(a1, 'শ্বাসনালী (Trachea)', 'Trachea', 'TR', '#38bdf8');
      const a2 = new THREE.Object3D(); a2.position.set(-1.5, -0.2, 1.2); group.add(a2);
      addAnchor(a2, 'ডান ফুসফুস (৩ লোব)', 'Right Lung', 'RL', '#f43f5e');
      const a3 = new THREE.Object3D(); a3.position.set(0, -1.8, 1.5); group.add(a3);
      addAnchor(a3, 'মধ্যচ্ছদা (Diaphragm)', 'Diaphragm', 'DIA', '#f59e0b');
    }
    return;
  }

  // 5. Kidney & Excretory
  if (type === 'kidney') {
    const kidGroup = new THREE.Group();
    group.add(kidGroup);
    refs.bioMainMesh = kidGroup;

    // Kidney bean shape (Ellipsoid with curved indention)
    const kidGeo = new THREE.SphereGeometry(1.6, 32, 32);
    kidGeo.scale(1.2, 1.6, 0.8);
    const kidMesh = new THREE.Mesh(kidGeo, darkRedMat);
    kidGroup.add(kidMesh);

    // Renal Artery (Red)
    const rArt = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.8, 16), redMat);
    rArt.position.set(1.2, 0.2, 0);
    rArt.rotation.z = Math.PI / 2;
    kidGroup.add(rArt);

    // Renal Vein (Blue)
    const rVein = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 1.8, 16), blueMat);
    rVein.position.set(1.2, -0.2, 0.3);
    rVein.rotation.z = Math.PI / 2;
    kidGroup.add(rVein);

    // Ureter (Yellow)
    const ureter = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 2.4, 16), yellowMat);
    ureter.position.set(0.6, -1.6, 0);
    ureter.rotation.z = -0.3;
    kidGroup.add(ureter);

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(-0.8, 0.4, 1.0); group.add(a1);
      addAnchor(a1, 'বৃক্ক কর্টেক্স (Cortex)', 'Renal Cortex', 'CTX', '#991b1b');
      const a2 = new THREE.Object3D(); a2.position.set(1.6, 0.2, 0); group.add(a2);
      addAnchor(a2, 'রেনাল ধমনী ও শিরা', 'Renal Vessels', 'VAS', '#0284c7');
      const a3 = new THREE.Object3D(); a3.position.set(0.6, -1.8, 0.5); group.add(a3);
      addAnchor(a3, 'ইউরেটার (মূত্রনালী)', 'Ureter', 'UR', '#facc15');
    }
    return;
  }

  // 6. Nephron
  if (type === 'nephron') {
    const nephGroup = new THREE.Group();
    group.add(nephGroup);
    refs.bioMainMesh = nephGroup;

    // Bowman's Capsule (Cup)
    const cupMesh = new THREE.Mesh(new THREE.SphereGeometry(0.9, 24, 24, 0, Math.PI * 2, 0, Math.PI * 0.6), yellowMat);
    cupMesh.position.set(-1.8, 1.2, 0);
    cupMesh.rotation.x = Math.PI;
    nephGroup.add(cupMesh);

    // Glomerulus knot
    const glom = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 16), redMat);
    glom.position.set(-1.8, 1.2, 0);
    nephGroup.add(glom);

    // PCT Tubule
    const pct = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.14, 12, 32, Math.PI * 1.4), cyanMat);
    pct.position.set(-0.8, 0.8, 0);
    nephGroup.add(pct);

    // Henle's Loop (U-shape)
    const henleCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.2, 0.6, 0),
      new THREE.Vector3(-0.2, -1.8, 0),
      new THREE.Vector3(0.4, -2.2, 0),
      new THREE.Vector3(1.0, -1.8, 0),
      new THREE.Vector3(1.0, 0.6, 0)
    ]);
    const henleMesh = new THREE.Mesh(new THREE.TubeGeometry(henleCurve, 32, 0.12, 8, false), purpleMat);
    nephGroup.add(henleMesh);

    // Collecting Duct (Green column)
    const duct = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 4.4, 16), emeraldMat);
    duct.position.set(2.0, 0, 0);
    nephGroup.add(duct);

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(-1.8, 1.8, 0); group.add(a1);
      addAnchor(a1, 'বোম্যান্স ক্যাপসুল ও গ্লোমেরুলাস', 'Bowmans Capsule', 'BC', '#facc15');
      const a2 = new THREE.Object3D(); a2.position.set(0.4, -2.4, 0); group.add(a2);
      addAnchor(a2, 'হেনলির লুপ (Loop of Henle)', 'Loop of Henle', 'LH', '#8b5cf6');
      const a3 = new THREE.Object3D(); a3.position.set(2.0, 1.6, 0); group.add(a3);
      addAnchor(a3, 'সংগ্রাহী নালী (Collecting Duct)', 'Collecting Duct', 'CD', '#10b981');
    }
    return;
  }

  // 7. Neuron
  if (type === 'neuron') {
    const neuGroup = new THREE.Group();
    group.add(neuGroup);
    refs.bioMainMesh = neuGroup;

    // Soma (Cell body)
    const soma = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9, 2), cyanMat);
    soma.position.set(-2.0, 0, 0);
    neuGroup.add(soma);

    // Nucleus inside soma
    const nuc = new THREE.Mesh(new THREE.SphereGeometry(0.4, 16, 16), purpleMat);
    nuc.position.set(-2.0, 0, 0);
    neuGroup.add(nuc);

    // Dendrites (Spikes from soma)
    for (let d = 0; d < 6; d++) {
      const ang = (d / 6) * Math.PI * 2;
      const dend = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.12, 1.2, 8), blueMat);
      dend.position.set(-2.0 + Math.cos(ang) * 1.1, Math.sin(ang) * 1.1, 0);
      dend.rotation.z = ang - Math.PI / 2;
      neuGroup.add(dend);
    }

    // Long Axon Shaft
    const axon = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 4.4, 16), amberMat);
    axon.position.set(0.6, 0, 0);
    axon.rotation.z = Math.PI / 2;
    neuGroup.add(axon);

    // Myelin Sheath Segments
    for (let m = 0; m < 4; m++) {
      const sheath = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.75, 16), blueMat);
      sheath.position.set(-0.8 + m * 0.95, 0, 0);
      sheath.rotation.z = Math.PI / 2;
      neuGroup.add(sheath);
    }

    // Synaptic Terminals
    const syn1 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), redMat);
    syn1.position.set(3.0, 0.5, 0);
    neuGroup.add(syn1);
    const syn2 = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), redMat);
    syn2.position.set(3.0, -0.5, 0);
    neuGroup.add(syn2);

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(-2.0, 1.4, 0); group.add(a1);
      addAnchor(a1, 'কোষদেহ ও ডেনড্রাইট', 'Soma & Dendrites', 'SM', '#06b6d4');
      const a2 = new THREE.Object3D(); a2.position.set(0.6, 0.6, 0); group.add(a2);
      addAnchor(a2, 'মায়েলিন সিথযুক্ত অ্যাক্সন', 'Myelinated Axon', 'AX', '#0284c7');
      const a3 = new THREE.Object3D(); a3.position.set(3.0, 0.8, 0); group.add(a3);
      addAnchor(a3, 'সাইন্যাপস প্রান্ত', 'Synapse Terminal', 'SYN', '#ef4444');
    }
    return;
  }

  // 8. Human Brain
  if (type === 'brain') {
    const brainGroup = new THREE.Group();
    group.add(brainGroup);
    refs.bioMainMesh = brainGroup;

    // Cerebral Hemispheres
    const leftHem = new THREE.Mesh(new THREE.SphereGeometry(1.4, 32, 32), redMat);
    leftHem.scale.set(0.9, 1.2, 1.3);
    leftHem.position.set(-0.7, 0.4, 0);
    brainGroup.add(leftHem);

    const rightHem = new THREE.Mesh(new THREE.SphereGeometry(1.4, 32, 32), redMat);
    rightHem.scale.set(0.9, 1.2, 1.3);
    rightHem.position.set(0.7, 0.4, 0);
    brainGroup.add(rightHem);

    // Cerebellum
    const cerebellum = new THREE.Mesh(new THREE.SphereGeometry(0.9, 24, 24), amberMat);
    cerebellum.position.set(0, -0.8, -0.8);
    cerebellum.scale.set(1.4, 0.8, 0.9);
    brainGroup.add(cerebellum);

    // Brainstem / Medulla
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.28, 1.8, 16), boneMat);
    stem.position.set(0, -1.4, 0);
    brainGroup.add(stem);

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(0, 1.6, 0.5); group.add(a1);
      addAnchor(a1, 'গুরুমস্তিষ্ক (Cerebrum)', 'Cerebrum Cortex', 'CRB', '#f43f5e');
      const a2 = new THREE.Object3D(); a2.position.set(0, -0.8, -1.4); group.add(a2);
      addAnchor(a2, 'লঘুমস্তিষ্ক (Cerebellum)', 'Cerebellum', 'CBL', '#f59e0b');
      const a3 = new THREE.Object3D(); a3.position.set(0, -1.8, 0.5); group.add(a3);
      addAnchor(a3, 'মেডুলা অবলংগাটা', 'Medulla Oblongata', 'MED', '#e2e8f0');
    }
    return;
  }

  // 9. Flower (Reproduction)
  if (type === 'flower') {
    const flowerGroup = new THREE.Group();
    group.add(flowerGroup);
    refs.bioMainMesh = flowerGroup;

    // Stem & Receptacle
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 2.8, 16), darkGreenMat);
    stem.position.set(0, -1.5, 0);
    flowerGroup.add(stem);

    const recept = new THREE.Mesh(new THREE.SphereGeometry(0.65, 16, 16), emeraldMat);
    recept.position.set(0, -0.2, 0);
    flowerGroup.add(recept);

    // 5 Petals
    const petalMat = new THREE.MeshStandardMaterial({ color: 0xec4899, roughness: 0.3, side: THREE.DoubleSide });
    for (let p = 0; p < 5; p++) {
      const ang = (p / 5) * Math.PI * 2;
      const pet = new THREE.Mesh(new THREE.SphereGeometry(0.8, 16, 16), petalMat);
      pet.scale.set(0.6, 1.4, 0.15);
      pet.position.set(Math.cos(ang) * 1.1, 0.4, Math.sin(ang) * 1.1);
      pet.rotation.y = -ang;
      pet.rotation.x = 0.5;
      flowerGroup.add(pet);
    }

    // Pistil (Center Carpel)
    const pistil = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.25, 1.4, 16), yellowMat);
    pistil.position.set(0, 0.5, 0);
    flowerGroup.add(pistil);
    const stigma = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), amberMat);
    stigma.position.set(0, 1.2, 0);
    flowerGroup.add(stigma);

    // Stamens (Filaments & Anthers)
    for (let s = 0; s < 6; s++) {
      const sAng = (s / 6) * Math.PI * 2;
      const fil = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 1.0, 8), boneMat);
      fil.position.set(Math.cos(sAng) * 0.45, 0.4, Math.sin(sAng) * 0.45);
      fil.rotation.x = (Math.random() - 0.5) * 0.3;
      flowerGroup.add(fil);
      const anther = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.2, 8, 8), goldMat);
      anther.position.set(Math.cos(sAng) * 0.45, 0.9, Math.sin(sAng) * 0.45);
      flowerGroup.add(anther);
    }

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(1.4, 0.8, 0); group.add(a1);
      addAnchor(a1, 'দলমণ্ডল (Petals)', 'Petals', 'PET', '#ec4899');
      const a2 = new THREE.Object3D(); a2.position.set(0, 1.4, 0); group.add(a2);
      addAnchor(a2, 'গর্ভমুণ্ড ও গর্ভাশয়', 'Carpel (Pistil)', 'PIS', '#facc15');
      const a3 = new THREE.Object3D(); a3.position.set(0.5, 1.0, 0); group.add(a3);
      addAnchor(a3, 'পুংস্তবক (Anther)', 'Stamen Anther', 'STA', '#f59e0b');
    }
    return;
  }

  // 10. Plant Cell
  if (type === 'plant_cell') {
    const cellGroup = new THREE.Group();
    group.add(cellGroup);
    refs.bioMainMesh = cellGroup;

    // Green Cell Wall cutaway
    const wall = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.8, 2.2), emeraldMat);
    cellGroup.add(wall);

    // Plasma Membrane interior
    const mem = new THREE.Mesh(new THREE.BoxGeometry(3.3, 2.5, 2.0), glassMat);
    cellGroup.add(mem);

    // Large Vacuole
    const vac = new THREE.Mesh(new THREE.SphereGeometry(0.9, 24, 24), blueMat);
    vac.scale.set(1.4, 0.9, 0.8);
    vac.position.set(0.6, 0.1, 0);
    cellGroup.add(vac);

    // Nucleus
    const nuc = new THREE.Mesh(new THREE.SphereGeometry(0.55, 20, 20), purpleMat);
    nuc.position.set(-1.0, 0.4, 0);
    cellGroup.add(nuc);

    // Chloroplasts (Green discs)
    for (let c = 0; c < 4; c++) {
      const cp = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.15, 16), darkGreenMat);
      cp.position.set(-1.0 + (c % 2) * 1.5, -0.6 + Math.floor(c / 2) * 0.4, 0.5);
      cp.rotation.x = Math.PI / 4;
      cellGroup.add(cp);
    }

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(0, 1.6, 0); group.add(a1);
      addAnchor(a1, 'সেলুলোজ প্রাচীর', 'Cell Wall', 'CW', '#10b981');
      const a2 = new THREE.Object3D(); a2.position.set(0.6, 0.2, 0.8); group.add(a2);
      addAnchor(a2, 'কোষগহ্বর (Vacuole)', 'Central Vacuole', 'VAC', '#0284c7');
      const a3 = new THREE.Object3D(); a3.position.set(-1.0, 0.5, 0.7); group.add(a3);
      addAnchor(a3, 'নিউক্লিয়াস', 'Nucleus', 'NUC', '#8b5cf6');
    }
    return;
  }

  // 11. Mitochondria
  if (type === 'mitochondria') {
    const mitoGroup = new THREE.Group();
    group.add(mitoGroup);
    refs.bioMainMesh = mitoGroup;

    // Outer Membrane Capsule
    const outer = new THREE.Mesh(new THREE.CapsuleGeometry(1.2, 2.6, 16, 24), redMat);
    outer.rotation.z = Math.PI / 2;
    mitoGroup.add(outer);

    // Inner Cristae Shelves
    for (let f = 0; f < 7; f++) {
      const crista = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.6, 1.6), darkRedMat);
      crista.position.set(-1.2 + f * 0.4, 0, 0);
      mitoGroup.add(crista);
    }

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(0, 1.5, 0); group.add(a1);
      addAnchor(a1, 'বহিঃঝিল্লি', 'Outer Membrane', 'OM', '#ef4444');
      const a2 = new THREE.Object3D(); a2.position.set(0, 0, 1.2); group.add(a2);
      addAnchor(a2, 'ক্রিস্টি ভাঁজ (Cristae)', 'Cristae Fold', 'CRIS', '#991b1b');
    }
    return;
  }

  // 12. Chloroplast
  if (type === 'chloroplast') {
    const cpGroup = new THREE.Group();
    group.add(cpGroup);
    refs.bioMainMesh = cpGroup;

    // Envelope
    const env = new THREE.Mesh(new THREE.SphereGeometry(1.8, 32, 24), darkGreenMat);
    env.scale.set(1.4, 0.9, 0.9);
    cpGroup.add(env);

    // Grana Discs
    for (let g = 0; g < 4; g++) {
      const gx = -1.2 + g * 0.8;
      for (let d = 0; d < 5; d++) {
        const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.08, 16), emeraldMat);
        disc.position.set(gx, -0.4 + d * 0.16, 0.2);
        cpGroup.add(disc);
      }
    }

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(0, 1.2, 0); group.add(a1);
      addAnchor(a1, 'দ্বিস্তর ঝিল্লি', 'Double Envelope', 'ENV', '#065f46');
      const a2 = new THREE.Object3D(); a2.position.set(0, -0.2, 1.1); group.add(a2);
      addAnchor(a2, 'গ্রানা থাইলাকয়েড', 'Grana Thylakoids', 'GRN', '#10b981');
    }
    return;
  }

  // 13. Mitosis / Chromosomes
  if (type === 'mitosis') {
    const mitoGroup = new THREE.Group();
    group.add(mitoGroup);
    refs.bioMainMesh = mitoGroup;

    // Two centrosomes at poles
    const c1 = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), yellowMat);
    c1.position.set(0, 2.0, 0);
    mitoGroup.add(c1);
    const c2 = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), yellowMat);
    c2.position.set(0, -2.0, 0);
    mitoGroup.add(c2);

    // Spindle Fibers (Lines)
    for (let f = 0; f < 8; f++) {
      const ang = (f / 8) * Math.PI * 2;
      const spinGeo = new THREE.CylinderGeometry(0.02, 0.02, 4.0, 6);
      const spinMesh = new THREE.Mesh(spinGeo, blueMat);
      spinMesh.position.set(Math.cos(ang) * 0.8, 0, Math.sin(ang) * 0.8);
      mitoGroup.add(spinMesh);
    }

    // 4 X-shaped Chromosomes at Metaphase Plate
    for (let chr = 0; chr < 4; chr++) {
      const cAng = (chr / 4) * Math.PI * 2;
      const arm1 = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.8, 8, 8), redMat);
      arm1.position.set(Math.cos(cAng) * 0.9, 0, Math.sin(cAng) * 0.9);
      arm1.rotation.z = Math.PI / 4;
      mitoGroup.add(arm1);
      const arm2 = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.8, 8, 8), redMat);
      arm2.position.set(Math.cos(cAng) * 0.9, 0, Math.sin(cAng) * 0.9);
      arm2.rotation.z = -Math.PI / 4;
      mitoGroup.add(arm2);
    }

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(0, 2.2, 0); group.add(a1);
      addAnchor(a1, 'মেরু ও সেন্ট্রোজোম', 'Spindle Pole', 'POL', '#facc15');
      const a2 = new THREE.Object3D(); a2.position.set(1.2, 0, 0); group.add(a2);
      addAnchor(a2, 'মেটাফেজ ক্রোমোজোম', 'Chromosomes', 'CHR', '#ef4444');
    }
    return;
  }

  // 14. Blood Vessel & Flowing Cells
  if (type === 'blood_vessel') {
    const vesGroup = new THREE.Group();
    group.add(vesGroup);
    refs.bioMainMesh = vesGroup;

    // Cylindrical vessel lumen
    const vesGeo = new THREE.CylinderGeometry(1.6, 1.6, 4.8, 24, 1, true);
    const vesMesh = new THREE.Mesh(vesGeo, glassMat);
    vesMesh.rotation.z = Math.PI / 2;
    vesGroup.add(vesMesh);

    // RBC Discs
    for (let r = 0; r < 8; r++) {
      const rbc = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.12, 16), redMat);
      rbc.position.set((Math.random() - 0.5) * 3.6, (Math.random() - 0.5) * 1.6, (Math.random() - 0.5) * 1.6);
      rbc.rotation.x = Math.random() * Math.PI;
      vesGroup.add(rbc);
    }

    // WBC Sphere
    const wbc = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), boneMat);
    wbc.position.set(0, 0, 0);
    vesGroup.add(wbc);

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(-1.0, 0.5, 0); group.add(a1);
      addAnchor(a1, 'লোহিত রক্তকণিকা (RBC)', 'Erythrocyte', 'RBC', '#ef4444');
      const a2 = new THREE.Object3D(); a2.position.set(0, 0, 0.6); group.add(a2);
      addAnchor(a2, 'শ্বেত রক্তকণিকা (WBC)', 'Leukocyte', 'WBC', '#f8fafc');
    }
    return;
  }

  // 15. Stomata
  if (type === 'stomata') {
    const stomGroup = new THREE.Group();
    group.add(stomGroup);
    refs.bioMainMesh = stomGroup;

    // Pair of curved bean guard cells
    const guard1 = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.4, 16, 32, Math.PI * 0.9), emeraldMat);
    guard1.rotation.z = Math.PI / 2;
    guard1.position.x = -0.4;
    stomGroup.add(guard1);

    const guard2 = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.4, 16, 32, Math.PI * 0.9), emeraldMat);
    guard2.rotation.z = -Math.PI / 2;
    guard2.position.x = 0.4;
    stomGroup.add(guard2);

    // Stomatal aperture in center
    const pore = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.1, 16), darkGreenMat);
    stomGroup.add(pore);

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(-1.4, 0, 0); group.add(a1);
      addAnchor(a1, 'রক্ষীকোষ (Guard Cell)', 'Guard Cell', 'GC', '#10b981');
      const a2 = new THREE.Object3D(); a2.position.set(0, 0, 0.5); group.add(a2);
      addAnchor(a2, 'পত্ররন্ধ্র ছিদ্র (Stoma Pore)', 'Stoma Aperture', 'POR', '#064e3b');
    }
    return;
  }

  // 16. Skeleton & Synovial Joint
  if (type === 'skeleton') {
    const skelGroup = new THREE.Group();
    group.add(skelGroup);
    refs.bioMainMesh = skelGroup;

    // Upper Bone
    const b1 = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 2.0, 16), boneMat);
    b1.position.set(0, 1.2, 0);
    skelGroup.add(b1);
    const head1 = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 16), cyanMat);
    head1.position.set(0, 0.2, 0);
    skelGroup.add(head1);

    // Lower Bone
    const b2 = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 2.0, 16), boneMat);
    b2.position.set(0, -1.2, 0);
    skelGroup.add(b2);
    const head2 = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 16), cyanMat);
    head2.position.set(0, -0.2, 0);
    skelGroup.add(head2);

    // Synovial Capsule Sleeve
    const sleeve = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.8, 16, 1, true), glassMat);
    skelGroup.add(sleeve);

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(0, 1.4, 0.5); group.add(a1);
      addAnchor(a1, 'অস্থি (Bone Shaft)', 'Compact Bone', 'BN', '#f8fafc');
      const a2 = new THREE.Object3D(); a2.position.set(0, 0, 0.8); group.add(a2);
      addAnchor(a2, 'সাইনোভিয়াল সন্ধি ও তরুণাস্থি', 'Synovial Joint', 'JNT', '#06b6d4');
    }
    return;
  }

  // 17. Digestive (Stomach & Liver)
  if (type === 'digestive') {
    const digGroup = new THREE.Group();
    group.add(digGroup);
    refs.bioMainMesh = digGroup;

    // J-shaped stomach (Torus curve)
    const stomach = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.45, 16, 32, Math.PI * 1.2), redMat);
    stomach.position.set(-0.5, 0, 0);
    stomach.rotation.z = -Math.PI / 3;
    digGroup.add(stomach);

    // Liver (Wedge on right)
    const liverGeo = new THREE.ConeGeometry(1.5, 2.0, 16);
    liverGeo.scale(1.2, 0.8, 0.6);
    const liver = new THREE.Mesh(liverGeo, darkRedMat);
    liver.position.set(1.2, 0.6, 0);
    liver.rotation.z = Math.PI / 4;
    digGroup.add(liver);

    // Gall bladder (green sac)
    const gb = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), emeraldMat);
    gb.position.set(1.0, 0.1, 0.4);
    digGroup.add(gb);

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(-0.6, 0.5, 0.6); group.add(a1);
      addAnchor(a1, 'পাকস্থলী (Stomach)', 'Stomach', 'STM', '#ef4444');
      const a2 = new THREE.Object3D(); a2.position.set(1.4, 0.8, 0.6); group.add(a2);
      addAnchor(a2, 'যকৃত ও পিত্তথলি', 'Liver & Gall Bladder', 'LIV', '#991b1b');
    }
    return;
  }

  // 18. Tooth
  if (type === 'tooth') {
    const toothGroup = new THREE.Group();
    group.add(toothGroup);
    refs.bioMainMesh = toothGroup;

    // Enamel Crown (White box with rounded top)
    const crown = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.2, 1.4), boneMat);
    crown.position.set(0, 0.6, 0);
    toothGroup.add(crown);

    // Dentin core
    const dentin = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.8, 1.0), yellowMat);
    dentin.position.set(0, 0.5, 0);
    toothGroup.add(dentin);

    // Two Roots
    const root1 = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.8, 16), boneMat);
    root1.position.set(-0.45, -0.8, 0);
    toothGroup.add(root1);
    const root2 = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.8, 16), boneMat);
    root2.position.set(0.45, -0.8, 0);
    toothGroup.add(root2);

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(0, 1.2, 0); group.add(a1);
      addAnchor(a1, 'এনামেল মুকুট (Crown)', 'Enamel Crown', 'ENM', '#f8fafc');
      const a2 = new THREE.Object3D(); a2.position.set(0, -1.2, 0.6); group.add(a2);
      addAnchor(a2, 'দন্তমূল (Roots)', 'Tooth Root', 'RT', '#cbd5e1');
    }
    return;
  }

  // 19. Ecosystem Energy Pyramid
  if (type === 'ecosystem') {
    const ecoGroup = new THREE.Group();
    group.add(ecoGroup);
    refs.bioMainMesh = ecoGroup;

    // 4 Stepped Tiers
    const t1 = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 0.4, 4), emeraldMat);
    t1.position.set(0, -1.2, 0);
    t1.rotation.y = Math.PI / 4;
    ecoGroup.add(t1);

    const t2 = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, 0.4, 4), cyanMat);
    t2.position.set(0, -0.6, 0);
    t2.rotation.y = Math.PI / 4;
    ecoGroup.add(t2);

    const t3 = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.4, 4), amberMat);
    t3.position.set(0, 0, 0);
    t3.rotation.y = Math.PI / 4;
    ecoGroup.add(t3);

    const t4 = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.4, 4), redMat);
    t4.position.set(0, 0.6, 0);
    t4.rotation.y = Math.PI / 4;
    ecoGroup.add(t4);

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(0, -1.2, 2.0); group.add(a1);
      addAnchor(a1, 'উৎপাদক স্তর (১০০০০ J)', 'Producers Base', 'PRD', '#10b981');
      const a2 = new THREE.Object3D(); a2.position.set(0, 0.8, 0.8); group.add(a2);
      addAnchor(a2, 'সর্বোচ্চ খাদক (১০ J)', 'Top Carnivore (10%)', 'TOP', '#ef4444');
    }
    return;
  }

  // 20. Biotechnology (Plasmid & Tube)
  if (type === 'biotech') {
    const bioGroup = new THREE.Group();
    group.add(bioGroup);
    refs.bioMainMesh = bioGroup;

    // Circular Plasmid Ring
    const plasmid = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.16, 16, 48), blueMat);
    bioGroup.add(plasmid);

    // Inserted Gene segment (Magenta arc)
    const gene = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.22, 16, 16, Math.PI * 0.4), redMat);
    gene.position.z = 0.02;
    bioGroup.add(gene);

    // Test Tube with plantlet shoot
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 2.4, 16), glassMat);
    tube.position.set(2.4, 0, 0);
    bioGroup.add(tube);
    const plantlet = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.0, 8), emeraldMat);
    plantlet.position.set(2.4, 0.2, 0);
    bioGroup.add(plantlet);

    if (meta.labels && meta.labels.length > 0) {
      const a1 = new THREE.Object3D(); a1.position.set(0, 1.6, 0); group.add(a1);
      addAnchor(a1, 'কাঙ্ক্ষিত রিকম্বিন্যান্ট জিন', 'Recombinant Gene', 'GEN', '#ef4444');
      const a2 = new THREE.Object3D(); a2.position.set(0, -1.6, 0); group.add(a2);
      addAnchor(a2, 'প্লাজমিড বাহক (Vector)', 'Plasmid Vector', 'PLM', '#0284c7');
      const a3 = new THREE.Object3D(); a3.position.set(2.4, 1.4, 0); group.add(a3);
      addAnchor(a3, 'টিস্যু কালচার টেস্টটিউব', 'Tissue Culture Tube', 'TC', '#10b981');
    }
    return;
  }

  // Fallback: Default to DNA
  const centerMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1.4, 2), cyanMat);
  group.add(centerMesh);
  refs.bioMainMesh = centerMesh;
}

export function updateBiology3DPhysics(
  slideOrModelId: number,
  time: number,
  refs: any,
  chapter: number = 1
) {
  const normId = slideOrModelId > 20 ? ((slideOrModelId - 1) % 20) + 1 : Math.max(1, slideOrModelId);
  const type = refs.bioType || getBiologyModelType(chapter, normId);

  if (refs.bioMainMesh) {
    if (type === 'heart') {
      // Realistic cardiac heartbeat rhythm
      const beat = 1 + 0.08 * Math.sin(time * 6.0) + 0.03 * Math.sin(time * 12.0);
      refs.bioMainMesh.scale.set(beat, beat * 0.95, beat);
    } else if (type === 'lungs') {
      // Respiratory expansion and contraction
      const breathe = 1 + 0.06 * Math.sin(time * 2.5);
      refs.bioMainMesh.scale.set(breathe, breathe, breathe);
    } else if (type === 'dna') {
      // Smooth continuous double helix rotation
      refs.bioMainMesh.rotation.y = time * 0.6;
    } else if (type === 'bacterium') {
      // Flagellar undulation & swimming
      refs.bioMainMesh.position.y = Math.sin(time * 2.0) * 0.15;
      if (refs.flagMesh) {
        refs.flagMesh.rotation.x = Math.sin(time * 8.0) * 0.2;
      }
    } else if (type === 'neuron') {
      // Subtle electrical pulse
      refs.bioMainMesh.rotation.y = Math.sin(time * 0.5) * 0.2;
    } else if (type === 'flower') {
      // Gentle bloom sway
      refs.bioMainMesh.rotation.z = Math.sin(time * 1.5) * 0.06;
      refs.bioMainMesh.rotation.y = time * 0.2;
    } else if (type === 'biotech') {
      refs.bioMainMesh.rotation.z = time * 0.4;
    } else {
      refs.bioMainMesh.rotation.y = time * 0.4;
    }
  }
}
