/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as THREE from 'three';

export function buildBiologyChapters6To14Scene(
  slideId: number,
  chapter: number,
  group: THREE.Group,
  refs: any,
  addAnchor: (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void
) {
  refs.biologyChapter = chapter;
  refs.biologySlide = slideId;

  // Clear previous meshes safely
  while (group.children.length > 0) {
    group.remove(group.children[0]);
  }

  // Materials Library
  const redMat = new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.3, metalness: 0.1 });
  const blueMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.3, metalness: 0.1 });
  const greenMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.4 });
  const yellowMat = new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.2 });
  const purpleMat = new THREE.MeshStandardMaterial({ color: 0xa855f7, roughness: 0.3 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.5 });
  const pinkMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.3 });
  const orangeMat = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.3 });

  // =========================================================================
  // CHAPTER 6: জীবে পরিবহন (Transport in Organisms - 20 Distinct 3D Models)
  // =========================================================================
  if (chapter === 6) {
    if (slideId === 1 || slideId === 2 || slideId === 3) {
      // Root hair & Osmotic cellular uptake
      const rootMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 3.5, 16), greenMat);
      group.add(rootMesh);
      const hair = new THREE.Mesh(new THREE.ConeGeometry(0.2, 2.0, 16), greenMat);
      hair.rotation.z = Math.PI / 2;
      hair.position.set(1.2, 0, 0);
      group.add(hair);
      addAnchor(hair, 'মূলরোম প্রোটোপ্লাজম (Root Hair)', 'Root Hair Cell', 'RH', '#34d399');
      addAnchor(rootMesh, 'কর্টেক্স প্যারেনকাইমা', 'Root Cortex', 'CTX', '#10b981');
      refs.ch6Mesh = hair;
    } else if (slideId === 4 || slideId === 5 || slideId === 6 || slideId === 7 || slideId === 8) {
      // Stomata Guard Cells (Bean Shaped) & Cuticle
      const g1 = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.35, 16, 32, Math.PI), greenMat);
      g1.rotation.z = -Math.PI / 2;
      g1.position.set(-0.35, 0, 0);
      group.add(g1);
      const g2 = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.35, 16, 32, Math.PI), greenMat);
      g2.rotation.z = Math.PI / 2;
      g2.position.set(0.35, 0, 0);
      group.add(g2);
      addAnchor(g1, 'অর্ধচন্দ্রাকার রক্ষীকোষ (Guard Cell)', 'Stomatal Guard Cell', 'GC', '#4ade80');
      addAnchor(g2, 'পত্ররন্ধ্রীয় ছিদ্র (Stomatal Pore)', 'Stoma Aperture', 'STM', '#22c55e');
      refs.ch6Mesh = g1;
    } else if (slideId === 9 || slideId === 10) {
      // Xylem Vessel & Phloem Sieve Tube
      const xylem = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 3.2, 16, 1, true), blueMat);
      xylem.position.set(-0.7, 0, 0);
      group.add(xylem);
      const phloem = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 3.2, 16), greenMat);
      phloem.position.set(0.7, 0, 0);
      group.add(phloem);
      addAnchor(xylem, 'জাইলেম ভেসেল (পানি ও খনিজ লবণ)', 'Xylem Vessel Column', 'XYL', '#38bdf8');
      addAnchor(phloem, 'ফ্লোয়েম সিভনল (সুক্রোজ খাদ্য)', 'Phloem Sieve Tube', 'PHL', '#34d399');
      refs.ch6Mesh = xylem;
    } else if (slideId >= 11 && slideId <= 15) {
      // Blood Components: RBC, WBC & Platelet
      const rbc = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 0.45, 32), redMat);
      rbc.rotation.x = Math.PI / 3;
      group.add(rbc);
      const wbc = new THREE.Mesh(new THREE.IcosahedronGeometry(0.85, 2), whiteMat);
      wbc.position.set(-1.8, 1.1, 0);
      group.add(wbc);
      const plt = new THREE.Mesh(new THREE.TetrahedronGeometry(0.45), yellowMat);
      plt.position.set(1.6, -1.0, 0.5);
      group.add(plt);
      addAnchor(rbc, 'দ্বি-অবতল লোহিত কণিকা (RBC)', 'Erythrocyte Hb Disc', 'RBC', '#ef4444');
      addAnchor(wbc, 'ফ্যাগোসাইটিক শ্বেত কণিকা (WBC)', 'Leukocyte Soldier', 'WBC', '#f8fafc');
      addAnchor(plt, 'অনুচক্রিকা (Platelet)', 'Thrombocyte', 'PLT', '#fbbf24');
      refs.ch6Mesh = rbc;
    } else {
      // Human Heart 4 Chambers & Aorta
      const lv = new THREE.Mesh(new THREE.DodecahedronGeometry(1.3, 1), redMat);
      lv.position.set(0.6, -0.4, 0);
      group.add(lv);
      const rv = new THREE.Mesh(new THREE.DodecahedronGeometry(1.15, 1), blueMat);
      rv.position.set(-0.6, -0.4, 0);
      group.add(rv);
      const aorta = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.25, 16, 32, Math.PI), redMat);
      aorta.position.set(0, 0.9, 0);
      aorta.rotation.z = Math.PI / 4;
      group.add(aorta);
      addAnchor(lv, 'বাম নিলয় (Left Ventricle)', 'Systemic Thick Ventricle', 'LV', '#ef4444');
      addAnchor(rv, 'ডান নিলয় (Right Ventricle)', 'Pulmonary Ventricle', 'RV', '#3b82f6');
      addAnchor(aorta, 'মহাধমনী (Aorta)', 'Aortic Arch', 'AO', '#f87171');
      refs.ch6Mesh = lv;
    }
    return;
  }

  // =========================================================================
  // CHAPTER 7: গ্যাসীয় বিনিময় (Gaseous Exchange - 20 Distinct 3D Models)
  // =========================================================================
  if (chapter === 7) {
    if (slideId <= 4) {
      // Plant Stomata & Day-Night Photosynthetic Gas Unit
      const leafSurface = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.2, 2.0), greenMat);
      group.add(leafSurface);
      const stoma = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.2, 16, 32), greenMat);
      stoma.rotation.x = Math.PI / 2;
      stoma.position.set(0, 0.15, 0);
      group.add(stoma);
      addAnchor(stoma, 'পত্ররন্ধ্র ও গ্যাসীয় ব্যাপন (O2/CO2)', 'Stomatal Gas Aperture', 'STM', '#4ade80');
      refs.ch7Mesh = stoma;
    } else if (slideId <= 9) {
      // Trachea with C-shaped rings & Bronchial Tree
      const trac = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 2.2, 16), whiteMat);
      trac.position.set(0, 0.8, 0);
      group.add(trac);
      for (let r = 0; r < 5; r++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.08, 8, 16, Math.PI * 1.5), blueMat);
        ring.position.set(0, 1.5 - r * 0.35, 0);
        ring.rotation.x = Math.PI / 2;
        group.add(ring);
      }
      const b1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.15, 1.2, 16), whiteMat);
      b1.position.set(-0.5, -0.4, 0);
      b1.rotation.z = Math.PI / 4;
      group.add(b1);
      const b2 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.15, 1.2, 16), whiteMat);
      b2.position.set(0.5, -0.4, 0);
      b2.rotation.z = -Math.PI / 4;
      group.add(b2);
      addAnchor(trac, 'শ্বাসনালি (Trachea) সি-আকৃতির তরুণাস্থি', 'Trachea with C-rings', 'TRC', '#cbd5e1');
      addAnchor(b1, 'ডান ও বাম ব্রঙ্কাস', 'Bronchial Bifurcation', 'BRN', '#38bdf8');
      refs.ch7Mesh = trac;
    } else if (slideId <= 14) {
      // Lungs & Alveoli Microscopic Sacs
      const lung = new THREE.Mesh(new THREE.ConeGeometry(1.2, 2.4, 16), pinkMat);
      lung.position.set(-0.8, 0, 0);
      group.add(lung);
      const alvCluster = new THREE.Group();
      for (let i = 0; i < 9; i++) {
        const alv = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), pinkMat);
        const ang = (i * Math.PI * 2) / 9;
        alv.position.set(Math.cos(ang) * 0.6 + 1.0, Math.sin(ang) * 0.6, 0);
        alvCluster.add(alv);
      }
      group.add(alvCluster);
      addAnchor(lung, 'ফুসফুস লোব (Pleural Sac)', 'Human Lung Organ', 'LNG', '#f43f5e');
      addAnchor(alvCluster, 'অ্যালভিওলাই রক্তজালক গুচ্ছ', 'Alveolar Gas Exchange Net', 'ALV', '#fda4af');
      refs.ch7Mesh = lung;
    } else {
      // Diaphragm & Gas Transport (Oxyhemoglobin & Bicarbonate)
      const dia = new THREE.Mesh(new THREE.SphereGeometry(1.8, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.35), orangeMat);
      dia.position.set(0, -0.8, 0);
      group.add(dia);
      const hbO2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.8, 1), redMat);
      hbO2.position.set(0, 0.8, 0);
      group.add(hbO2);
      addAnchor(dia, 'মধ্যচ্ছদা / ডায়াফ্রাম (Diaphragm)', 'Diaphragm Muscle', 'DIA', '#f97316');
      addAnchor(hbO2, 'অক্সিহিমোগ্লোবিন (Hb.O2) অণু', 'Oxyhemoglobin Complex', 'HbO2', '#ef4444');
      refs.ch7Mesh = hbO2;
    }
    return;
  }

  // =========================================================================
  // CHAPTER 8: রেচন প্রক্রিয়া (Excretory System - 20 Distinct 3D Models)
  // =========================================================================
  if (chapter === 8) {
    if (slideId <= 5) {
      // Human Kidney Bean Organ & Renal Vessels
      const kidney = new THREE.Mesh(new THREE.SphereGeometry(1.3, 32, 16), pinkMat);
      kidney.scale.set(0.7, 1.4, 0.6);
      group.add(kidney);
      const ra = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 1.4, 16), redMat);
      ra.rotation.z = Math.PI / 2;
      ra.position.set(-1.0, 0.1, 0);
      group.add(ra);
      const ureter = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.0, 16), yellowMat);
      ureter.position.set(-0.3, -1.3, 0);
      group.add(ureter);
      addAnchor(kidney, 'বৃক্ক / কিডনি (Cortex & Medulla)', 'Human Kidney Organ', 'KID', '#f43f5e');
      addAnchor(ra, 'রেনাল ধমনী ও শিরা (Renal Vessels)', 'Renal Artery & Vein', 'RA', '#ef4444');
      addAnchor(ureter, 'ইউরেটার নালি (Ureter)', 'Ureter to Bladder', 'URT', '#facc15');
      refs.ch8Mesh = kidney;
    } else if (slideId <= 11) {
      // Nephron Complete Architecture
      const bc = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.7), yellowMat);
      bc.rotation.x = Math.PI;
      bc.position.set(-0.8, 0.8, 0);
      group.add(bc);
      const glom = new THREE.Mesh(new THREE.TorusKnotGeometry(0.42, 0.14, 64, 8), redMat);
      glom.position.set(-0.8, 0.8, 0);
      group.add(glom);
      const henle = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.15, 16, 32, Math.PI), blueMat);
      henle.rotation.z = Math.PI;
      henle.position.set(0.4, -0.6, 0);
      group.add(henle);
      addAnchor(bc, 'বোম্যান্স ক্যাপসুল পেয়ালা', "Bowman's Capsule Cup", 'BC', '#fbbf24');
      addAnchor(glom, 'গ্লোমেরুলাস রক্তজালক (ছাঁকন)', 'Glomerular Capillary Net', 'GLM', '#ef4444');
      addAnchor(henle, 'হেনলির লুপ ও সংগ্রাহী নালি', 'Loop of Henle Countercurrent', 'HEN', '#38bdf8');
      refs.ch8Mesh = bc;
    } else {
      // Dialyzer Artificial Kidney Machine & Osmoregulation
      const machine = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 2.8, 32), whiteMat);
      group.add(machine);
      for (let i = 0; i < 6; i++) {
        const fiber = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.7, 8), blueMat);
        const ang = (i * Math.PI * 2) / 6;
        fiber.position.set(Math.cos(ang) * 0.45, 0, Math.sin(ang) * 0.45);
        group.add(fiber);
      }
      addAnchor(machine, 'ডায়ালাইজার সিলিন্ডার ও কৃত্রিম পর্দা', 'Dialyzer Artificial Membrane', 'DIA', '#38bdf8');
      refs.ch8Mesh = machine;
    }
    return;
  }

  // =========================================================================
  // CHAPTER 9: দৃঢ়তা প্রদান ও চলন (Locomotion - 20 Distinct 3D Models)
  // =========================================================================
  if (chapter === 9) {
    if (slideId <= 6) {
      // Axial Skeleton: Skull & Vertebral Column
      const skull = new THREE.Mesh(new THREE.SphereGeometry(1.1, 16, 16), whiteMat);
      skull.scale.set(1.0, 1.2, 1.1);
      group.add(skull);
      const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2.2, 16), whiteMat);
      spine.position.set(0, -1.5, 0);
      group.add(spine);
      addAnchor(skull, 'করোটি ও মুখমণ্ডলীয় অস্থি (Cranium)', 'Human Cranium & Facial', 'SKL', '#f8fafc');
      addAnchor(spine, 'মেরুদণ্ড ও কশেরুকা (Vertebrae)', 'Vertebral Column', 'SPN', '#cbd5e1');
      refs.ch9Mesh = skull;
    } else if (slideId <= 12) {
      // Synovial Joint: Hinge / Ball & Socket
      const b1 = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.8, 16), whiteMat);
      b1.position.set(0, 1.0, 0);
      group.add(b1);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.58, 16, 16), blueMat);
      head.position.set(0, 0.1, 0);
      group.add(head);
      const b2 = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.8, 16), whiteMat);
      b2.position.set(0, -1.2, 0);
      group.add(b2);
      addAnchor(head, 'সাইনোভিয়াল সন্ধি ও তরুণাস্থি', 'Synovial Articular Cartilage', 'JNT', '#38bdf8');
      addAnchor(b1, 'ফিমার ও হিউমেরাস দীর্ঘ অস্থি', 'Long Bone Epiphysis', 'BNE', '#f8fafc');
      refs.ch9Mesh = head;
    } else {
      // Haversian Osteon System & Antagonistic Muscles
      const osteon = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 2.2, 32, 1, true), whiteMat);
      group.add(osteon);
      const canal = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 2.4, 16), redMat);
      group.add(canal);
      addAnchor(canal, 'হাভার্সিয়ান নালি (রক্তনালি ও স্নায়ু)', 'Haversian Central Canal', 'HAV', '#ef4444');
      addAnchor(osteon, 'ল্যামেলি ও ল্যাকিউনা অস্থিকোষ', 'Concentric Lamellae', 'LAM', '#f8fafc');
      refs.ch9Mesh = osteon;
    }
    return;
  }

  // =========================================================================
  // CHAPTER 10: সমন্বয় (Coordination - 20 Distinct 3D Models)
  // =========================================================================
  if (chapter === 10) {
    if (slideId <= 6) {
      // Phytohormone Phototropism Plant Stem
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 3.0, 16), greenMat);
      stem.rotation.z = -0.3;
      group.add(stem);
      const apex = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 12), yellowMat);
      apex.position.set(0.6, 1.5, 0);
      group.add(apex);
      addAnchor(apex, 'শীর্ষ মুকুল ও অক্সিন হরমোন', 'Apical Meristem Auxin', 'AUX', '#facc15');
      addAnchor(stem, 'আলোর দিকে বাঁকা বৃদ্ধি (Phototropism)', 'Phototropic Stem Curvature', 'STM', '#4ade80');
      refs.ch10Mesh = stem;
    } else if (slideId <= 10) {
      // Neuron Anatomy: Soma, Axon & Synapse
      const soma = new THREE.Mesh(new THREE.DodecahedronGeometry(0.8, 1), blueMat);
      soma.position.set(-1.2, 0.8, 0);
      group.add(soma);
      const axon = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 2.6, 16), greenMat);
      axon.rotation.z = Math.PI / 3;
      axon.position.set(0.2, 0, 0);
      group.add(axon);
      addAnchor(soma, 'কোষদেহ ও ডেনড্রাইট (Soma/Dendrites)', 'Neuron Cell Body', 'SOM', '#38bdf8');
      addAnchor(axon, 'অ্যাক্সন ও মায়েলিন শিথ (Axon)', 'Myelinated Axon Fiber', 'AXN', '#34d399');
      refs.ch10Mesh = soma;
    } else if (slideId <= 15) {
      // Human Brain Anatomy (Cerebrum, Cerebellum, Brainstem)
      const cerebrum = new THREE.Mesh(new THREE.SphereGeometry(1.3, 32, 16), pinkMat);
      cerebrum.scale.set(1.1, 0.85, 1.3);
      group.add(cerebrum);
      const cb = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 16), purpleMat);
      cb.position.set(0, -0.7, -0.7);
      group.add(cb);
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 1.4, 16), yellowMat);
      stem.position.set(0, -1.1, 0);
      group.add(stem);
      addAnchor(cerebrum, 'গুরুমস্তিষ্ক / সেরিব্রাম (Cerebrum)', 'Cerebral Cortex', 'CRB', '#f472b6');
      addAnchor(cb, 'লঘুমস্তিষ্ক / সেরিবেলাম (ভারসাম্য)', 'Cerebellum Motor Center', 'CBL', '#c084fc');
      addAnchor(stem, 'মেডুলা অবলংগাটা (হৃদস্পন্দন ও শ্বাস)', 'Medulla Oblongata Vitals', 'MED', '#facc15');
      refs.ch10Mesh = cerebrum;
    } else {
      // Endocrine System: Pituitary & Thyroid Gland
      const thyroid = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.35, 16, 32, Math.PI), orangeMat);
      thyroid.rotation.z = Math.PI;
      group.add(thyroid);
      addAnchor(thyroid, 'থাইরয়েড গ্রন্থি ও থাইরক্সিন', 'Thyroid Endocrine Gland', 'THY', '#f97316');
      refs.ch10Mesh = thyroid;
    }
    return;
  }

  // =========================================================================
  // CHAPTER 11: জীবের প্রজনন (Reproduction - 20 Distinct 3D Models)
  // =========================================================================
  if (chapter === 11) {
    if (slideId <= 7) {
      // Ideal Flower 5 Whorls Anatomy
      const ovary = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), greenMat);
      ovary.position.set(0, -0.2, 0);
      group.add(ovary);
      const style = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 1.3, 16), greenMat);
      style.position.set(0, 0.5, 0);
      group.add(style);
      for (let i = 0; i < 5; i++) {
        const petal = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.4), pinkMat);
        const ang = (i * Math.PI * 2) / 5;
        petal.position.set(Math.cos(ang) * 0.9, 0.4, Math.sin(ang) * 0.9);
        petal.rotation.y = -ang;
        petal.rotation.x = 0.35;
        group.add(petal);
      }
      addAnchor(style, 'স্ত্রীস্তবক (গর্ভমুণ্ড ও গর্ভাশয়)', 'Carpel Stigma & Ovary', 'PST', '#4ade80');
      addAnchor(ovary, 'দলমণ্ডল / রঙিন পাপড়ি (Corolla)', 'Flower Petals', 'PET', '#f43f5e');
      refs.ch11Mesh = ovary;
    } else if (slideId <= 13) {
      // 8-Nucleate Embryo Sac & Double Fertilization
      const sac = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 16), yellowMat);
      group.add(sac);
      const egg = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 12), redMat);
      egg.position.set(0, -0.7, 0);
      group.add(egg);
      const secondary = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 12), orangeMat);
      secondary.position.set(0, 0.1, 0);
      group.add(secondary);
      addAnchor(egg, 'ডিম্বাণু (n) -> জাইগোট (2n)', 'Haploid Egg Cell', 'EGG', '#ef4444');
      addAnchor(secondary, 'সেকেন্ডারি নিউক্লিয়াস (2n) -> শস্য (3n)', 'Triploid Endosperm Nucleus', 'END', '#f97316');
      refs.ch11Mesh = sac;
    } else {
      // Human Fertilization: Ovum & Sperm Penetration
      const ovum = new THREE.Mesh(new THREE.SphereGeometry(1.3, 32, 32), pinkMat);
      group.add(ovum);
      const sperm = new THREE.Mesh(new THREE.ConeGeometry(0.18, 0.6, 16), blueMat);
      sperm.position.set(1.5, 0.6, 0.2);
      sperm.rotation.z = -Math.PI / 3;
      group.add(sperm);
      addAnchor(ovum, 'ডিম্বাণু (Zona Pellucida)', 'Mature Ovum', 'OVM', '#f472b6');
      addAnchor(sperm, 'নিষেককারী শুক্রাণু (Sperm)', 'Fertilizing Sperm', 'SPM', '#38bdf8');
      refs.ch11Mesh = ovum;
    }
    return;
  }

  // =========================================================================
  // CHAPTER 12: জীবের বংশগতি ও বিবর্তন (Genetics & Evolution - 20 Distinct 3D Models)
  // =========================================================================
  if (chapter === 12) {
    if (slideId <= 4) {
      // Chromosome X Morphology: Sister Chromatids & Centromere
      const arm1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2.6, 16), purpleMat);
      arm1.rotation.z = Math.PI / 4;
      group.add(arm1);
      const arm2 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 2.6, 16), purpleMat);
      arm2.rotation.z = -Math.PI / 4;
      group.add(arm2);
      const cen = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 16), yellowMat);
      group.add(cen);
      addAnchor(cen, 'সেন্ট্রোমিয়ার (Centromere)', 'Primary Constriction', 'CEN', '#facc15');
      addAnchor(arm1, 'ক্রোমাটিড বাহু ও জিন লোকাস', 'Sister Chromatids', 'CHR', '#c084fc');
      refs.ch12Mesh = arm1;
    } else if (slideId <= 10) {
      // Watson-Crick DNA Double Helix Model
      const helixGroup = new THREE.Group();
      const nPairs = 18;
      const r = 0.95;
      const h = 3.2;
      for (let i = 0; i < nPairs; i++) {
        const t = (i / nPairs) * Math.PI * 4;
        const y = ((i / nPairs) - 0.5) * h;
        const x1 = Math.cos(t) * r;
        const z1 = Math.sin(t) * r;
        const n1 = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 8), blueMat);
        n1.position.set(x1, y, z1);
        helixGroup.add(n1);
        const n2 = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 8), greenMat);
        n2.position.set(-x1, y, -z1);
        helixGroup.add(n2);
        const rungMat = i % 2 === 0 ? redMat : yellowMat;
        const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, r * 2, 8), rungMat);
        rung.position.set(0, y, 0);
        rung.rotation.z = Math.PI / 2;
        rung.rotation.y = t;
        helixGroup.add(rung);
      }
      group.add(helixGroup);
      addAnchor(helixGroup, 'ডিএনএ ডাবল হেলিক্স (A=T, G≡C)', 'Watson-Crick Double Helix', 'DNA', '#38bdf8');
      refs.ch12Mesh = helixGroup;
    } else {
      // Natural Selection Fossil / Branching Tree
      const tree = new THREE.Mesh(new THREE.ConeGeometry(1.2, 2.5, 8), darkMat);
      group.add(tree);
      const branch = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.4), darkMat);
      branch.rotation.z = Math.PI / 3;
      branch.position.set(0.6, 0.4, 0);
      group.add(branch);
      addAnchor(tree, 'বিবর্তন বৃক্ষ ও প্রাকৃতিক নির্বাচন', 'Phylogenetic Tree of Life', 'EVO', '#94a3b8');
      refs.ch12Mesh = tree;
    }
    return;
  }

  // =========================================================================
  // CHAPTER 13: জীবের পরিবেশ (Ecosystem - 20 Distinct 3D Models)
  // =========================================================================
  if (chapter === 13) {
    if (slideId <= 6) {
      // Aquatic Pond Ecosystem Model
      const pond = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.4, 1.8), blueMat);
      group.add(pond);
      const plant = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.4), greenMat);
      plant.position.set(-0.8, -0.1, 0);
      group.add(plant);
      addAnchor(pond, 'পুকুরের জলজ বাস্তুতন্ত্র (Freshwater)', 'Pond Aquatic Ecosystem', 'PND', '#38bdf8');
      addAnchor(plant, 'জলজ উৎপাদক ফাইটোপ্লাংকটন ও শাপলা', 'Aquatic Autotrophs', 'PRD', '#22c55e');
      refs.ch13Mesh = pond;
    } else if (slideId <= 13) {
      // Ecological Pyramid of Biomass (3 Tiers)
      const t1 = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.5, 2.4), greenMat);
      t1.position.set(0, -0.8, 0);
      group.add(t1);
      const t2 = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.5, 1.6), yellowMat);
      t2.position.set(0, -0.2, 0);
      group.add(t2);
      const t3 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 0.8), redMat);
      t3.position.set(0, 0.4, 0);
      group.add(t3);
      addAnchor(t1, 'উৎপাদক ভিত্তি (Producers T1)', 'Trophic Tier 1', 'T1', '#22c55e');
      addAnchor(t2, 'তৃণভোজী খাদক (Herbivores T2)', 'Trophic Tier 2', 'T2', '#facc15');
      addAnchor(t3, 'শীর্ষ মাংসাশী খাদক (Apex T3)', 'Trophic Tier 3', 'T3', '#ef4444');
      refs.ch13Mesh = t1;
    } else {
      // Nitrogen & Carbon Biogeochemical Cycle
      const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.2, 24, 24), blueMat);
      group.add(sphere);
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.08, 16, 64), greenMat);
      ring.rotation.x = Math.PI / 3;
      group.add(ring);
      addAnchor(sphere, 'জীবমণ্ডল ও পুষ্টিপ্রবাহ (Nutrient Cycle)', 'Biosphere Nutrient Flow', 'BIO', '#38bdf8');
      addAnchor(ring, 'নাইট্রোজেন ও কার্বন চক্রের বৃত্ত', 'Biogeochemical Loop', 'CYC', '#34d399');
      refs.ch13Mesh = sphere;
    }
    return;
  }

  // =========================================================================
  // CHAPTER 14: জীবপ্রযুক্তি (Biotechnology - 20 Distinct 3D Models)
  // =========================================================================
  if (chapter === 14) {
    if (slideId <= 8) {
      // Plant Tissue Culture Flask & Callus
      const flask = new THREE.Mesh(new THREE.ConeGeometry(1.3, 2.2, 32, 1, true), whiteMat);
      flask.position.set(0, 0, 0);
      group.add(flask);
      const agar = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.4, 32), yellowMat);
      agar.position.set(0, -0.9, 0);
      group.add(agar);
      const callus = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5, 1), greenMat);
      callus.position.set(0, -0.5, 0);
      group.add(callus);
      addAnchor(agar, 'এমএস পুষ্টি মাধ্যম (Nutrient Agar)', 'Murashige & Skoog Medium', 'AGR', '#fef08a');
      addAnchor(callus, 'অবিভাজিত ক্যালাস ও অণুচারা (Callus)', 'Micropropagated Callus', 'CLS', '#22c55e');
      refs.ch14Mesh = flask;
    } else {
      // Recombinant DNA: Bacterial Plasmid Vector & Cleaved Foreign Gene
      const plasmid = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.18, 16, 48, Math.PI * 1.7), blueMat);
      plasmid.rotation.x = Math.PI / 4;
      group.add(plasmid);
      const gene = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.22, 16, 16, Math.PI * 0.3), redMat);
      gene.rotation.x = Math.PI / 4;
      gene.rotation.z = Math.PI * 1.7;
      group.add(gene);
      addAnchor(plasmid, 'প্লাজমিড ভেক্টর রিং (Plasmid Vector)', 'Circular Bacterial Plasmid', 'PLS', '#60a5fa');
      addAnchor(gene, 'কাঙ্ক্ষিত ইনসুলিন জিন (Target Gene)', 'Inserted Human Gene', 'GEN', '#f87171');
      refs.ch14Mesh = plasmid;
    }
    return;
  }
}

export function updateBiologyChapters6To14Physics(refs: any, time: number) {
  if (refs.ch6Mesh) refs.ch6Mesh.rotation.y = time * 0.5;
  if (refs.ch7Mesh) refs.ch7Mesh.scale.setScalar(1.0 + Math.sin(time * 2.5) * 0.05);
  if (refs.ch8Mesh) refs.ch8Mesh.rotation.y = Math.sin(time * 0.4) * 0.1;
  if (refs.ch9Mesh) refs.ch9Mesh.rotation.y = time * 0.3;
  if (refs.ch10Mesh) refs.ch10Mesh.rotation.y = time * 0.4;
  if (refs.ch11Mesh) refs.ch11Mesh.rotation.y = time * 0.3;
  if (refs.ch12Mesh) refs.ch12Mesh.rotation.y = time * 0.6;
  if (refs.ch13Mesh) refs.ch13Mesh.rotation.y = Math.sin(time * 0.3) * 0.08;
  if (refs.ch14Mesh) refs.ch14Mesh.rotation.z = time * 0.5;
}
