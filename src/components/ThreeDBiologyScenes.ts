import * as THREE from 'three';

// Type helper for anchor adder
type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;

/**
 * Builds high-fidelity, FULLY ANIMATED 3D Interactive Scenes for SSC Biology Chapter 3: Cell Division
 * Every slide has living, moving, breathing animations showing the actual division process.
 */
export function buildBiology3DScene(
  slideId: number,
  chapter: number,
  group: THREE.Group,
  refs: any,
  addAnchor: AddAnchorFn
) {
  refs.biologySlide = slideId;
  refs.biologyChapter = chapter;

  if (chapter === 3) {

    // =========================================================================
    // SLIDE 1: কোষ বিভাজনের প্রকারভেদ — মাতৃকোষ থেকে অপত্য কোষ সৃষ্টির দৃশ্য
    // A mother cell visibly pulsing and splitting into daughter cells with orbit rings
    // =========================================================================
    if (slideId === 1) {
      // Mother cell — large, breathing
      const motherGeo = new THREE.SphereGeometry(1.8, 48, 48);
      const motherMat = new THREE.MeshPhysicalMaterial({
        color: 0x065f46, transparent: true, opacity: 0.50, roughness: 0.15, metalness: 0.1
      });
      const motherCell = new THREE.Mesh(motherGeo, motherMat);
      group.add(motherCell);
      refs.motherCell = motherCell;

      // Nucleus inside mother
      const nucMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.75, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x064e3b, emissiveIntensity: 0.7 })
      );
      group.add(nucMesh);
      refs.motherNucleus = nucMesh;
      addAnchor(motherCell, 'মাতৃকোষ (বিভাজনের পূর্বে)', 'Mother Cell Before Division', 'Mother Cell', '#10b981');

      // 3 daughter/product orbs orbiting — Amitosis (amber), Mitosis (cyan), Meiosis (pink)
      const orbitData = [
        { color: 0xf59e0b, hex: '#f59e0b', labelBn: 'অ্যামাইটোসিস → ২টি কোষ', labelEn: 'Amitosis → 2 Cells', sym: 'Amitosis', speed: 0.6, r: 3.2, phase: 0 },
        { color: 0x38bdf8, hex: '#38bdf8', labelBn: 'মাইটোসিস → ২টি সমগুণ কোষ (2n)', labelEn: 'Mitosis → 2 Identical (2n)', sym: 'Mitosis', speed: 0.4, r: 3.8, phase: 2.1 },
        { color: 0xec4899, hex: '#ec4899', labelBn: 'মিয়োসিস → ৪টি হ্যাপ্লয়েড গ্যামেট (n)', labelEn: 'Meiosis → 4 Haploid Gametes (n)', sym: 'Meiosis', speed: 0.3, r: 3.0, phase: 4.2 },
      ];
      refs.orbitOrbs = [];
      orbitData.forEach((od) => {
        const orb = new THREE.Mesh(
          new THREE.SphereGeometry(0.55, 20, 20),
          new THREE.MeshStandardMaterial({ color: od.color, emissive: od.color, emissiveIntensity: 0.6 })
        );
        group.add(orb);
        refs.orbitOrbs.push({ mesh: orb, speed: od.speed, r: od.r, phase: od.phase });
        addAnchor(orb, od.labelBn, od.labelEn, od.sym, od.hex);

        // Orbit ring guide
        const ringGeo = new THREE.TorusGeometry(od.r, 0.02, 8, 80);
        const ringMat = new THREE.MeshBasicMaterial({ color: od.color, transparent: true, opacity: 0.15 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        group.add(ring);
      });
      return;
    }

    // =========================================================================
    // SLIDE 2: অ্যামাইটোসিস — কোষটি টেনে ভেঙে দুটি ভাগ হচ্ছে (LIVE SPLITTING)
    // The cell elongates, constricts in the middle, and splits into 2
    // =========================================================================
    if (slideId === 2) {
      // The elongating bacterial/amoeba cell body group
      const bodyGroup = new THREE.Group();
      group.add(bodyGroup);
      refs.amitosisBody = bodyGroup;

      // Left lobe
      const leftLobe = new THREE.Mesh(
        new THREE.SphereGeometry(1.4, 32, 32),
        new THREE.MeshPhysicalMaterial({ color: 0x047857, transparent: true, opacity: 0.55, roughness: 0.2 })
      );
      refs.amitosisLeft = leftLobe;
      bodyGroup.add(leftLobe);

      // Right lobe
      const rightLobe = new THREE.Mesh(
        new THREE.SphereGeometry(1.4, 32, 32),
        new THREE.MeshPhysicalMaterial({ color: 0x047857, transparent: true, opacity: 0.55, roughness: 0.2 })
      );
      refs.amitosisRight = rightLobe;
      bodyGroup.add(rightLobe);

      // Connecting bridge (constriction) that shrinks over time
      const bridge = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 0.8, 1.0, 20),
        new THREE.MeshPhysicalMaterial({ color: 0x065f46, transparent: true, opacity: 0.45, roughness: 0.2 })
      );
      bridge.rotation.z = Math.PI / 2;
      refs.amitosisNucleus = bridge; // reuse ref name for backwards compat
      refs.amitosisBridge = bridge;
      bodyGroup.add(bridge);

      // Cleavage furrow ring (glowing amber)
      const furrow = new THREE.Mesh(
        new THREE.TorusGeometry(0.85, 0.12, 16, 48),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 1.0 })
      );
      furrow.rotation.y = Math.PI / 2;
      refs.amitosisFurrow = furrow;
      group.add(furrow);
      addAnchor(furrow, 'সংকুচিত খাঁজ — কোষটি দুই ভাগে বিভক্ত হচ্ছে', 'Cleavage Furrow — Cell Splitting in Half', 'Furrow', '#f59e0b');

      // Dividing nucleus (dumbbell)
      const nucL = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), new THREE.MeshStandardMaterial({ color: 0x34d399, emissive: 0x065f46, emissiveIntensity: 0.6 }));
      refs.amitosisNucL = nucL;
      bodyGroup.add(nucL);

      const nucR = new THREE.Mesh(new THREE.SphereGeometry(0.6, 16, 16), new THREE.MeshStandardMaterial({ color: 0x34d399, emissive: 0x065f46, emissiveIntensity: 0.6 }));
      refs.amitosisNucR = nucR;
      bodyGroup.add(nucR);

      addAnchor(nucL, 'অপত্য নিউক্লিয়াস ১ (প্রত্যক্ষ বিভাজন)', 'Daughter Nucleus 1 (Amitosis)', 'Nuc 1', '#34d399');
      addAnchor(nucR, 'অপত্য নিউক্লিয়াস ২', 'Daughter Nucleus 2', 'Nuc 2', '#34d399');

      // Bacterial circular DNA plasmid
      const plasmid = new THREE.Mesh(
        new THREE.TorusGeometry(0.38, 0.05, 8, 28),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
      );
      refs.amitosisplasmid = plasmid;
      group.add(plasmid);
      addAnchor(plasmid, 'আদিকোষী বৃত্তাকার ডিএনএ (Plasmid)', 'Prokaryotic Circular DNA', 'DNA', '#38bdf8');
      return;
    }

    // =========================================================================
    // SLIDE 3: মাইটোসিস — ডিএনএ দ্বিগুণ হচ্ছে (DNA Double Helix Live Replication)
    // The double helix rotates, "unzips", and duplicates in real time
    // =========================================================================
    if (slideId === 3) {
      const helixGroup = new THREE.Group();
      group.add(helixGroup);
      refs.dnaHelix = helixGroup;

      const strandCount = 24;
      refs.dnaNodes1 = [];
      refs.dnaNodes2 = [];
      refs.dnaRungs = [];
      for (let i = 0; i < strandCount; i++) {
        const y = (i - strandCount / 2) * 0.24;
        const angle = i * 0.42;
        const r = 1.0;
        const x1 = Math.cos(angle) * r;
        const z1 = Math.sin(angle) * r;
        const x2 = -x1;
        const z2 = -z1;

        const rung = new THREE.Mesh(
          new THREE.CylinderGeometry(0.035, 0.035, 2.0, 6),
          new THREE.MeshStandardMaterial({ color: i % 2 === 0 ? 0x38bdf8 : 0xf43f5e, metalness: 0.3, emissiveIntensity: 0.3, emissive: i % 2 === 0 ? 0x0284c7 : 0xbe185d })
        );
        rung.position.set(0, y, 0);
        rung.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(x1, 0, z1).normalize());
        helixGroup.add(rung);
        refs.dnaRungs.push({ mesh: rung, baseAngle: angle, baseY: y, idx: i });

        const n1 = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 10), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x047857, emissiveIntensity: 0.4 }));
        n1.position.set(x1, y, z1);
        helixGroup.add(n1);
        refs.dnaNodes1.push({ mesh: n1, baseAngle: angle, baseY: y });

        const n2 = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 10), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x047857, emissiveIntensity: 0.4 }));
        n2.position.set(x2, y, z2);
        helixGroup.add(n2);
        refs.dnaNodes2.push({ mesh: n2, baseAngle: angle, baseY: y });
      }
      addAnchor(helixGroup, 'ইন্টারফেজ S-পর্যায়: ডিএনএ দ্বিগুণ হচ্ছে', 'S-Phase: DNA Double Helix Replicating', 'DNA Replication', '#38bdf8');

      // Two daughter cell emblems that grow larger over time
      const dCell1 = new THREE.Mesh(new THREE.SphereGeometry(0.6, 20, 20), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x047857, emissiveIntensity: 0.5 }));
      dCell1.position.set(-2.8, -1.6, 0);
      group.add(dCell1);
      refs.dnaCell1 = dCell1;
      addAnchor(dCell1, 'অপত্য কোষ ১ (সমগুণ 2n)', 'Daughter Cell 1 (2n)', 'Cell 1 (2n)', '#10b981');

      const dCell2 = new THREE.Mesh(new THREE.SphereGeometry(0.6, 20, 20), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x047857, emissiveIntensity: 0.5 }));
      dCell2.position.set(2.8, -1.6, 0);
      group.add(dCell2);
      refs.dnaCell2 = dCell2;
      addAnchor(dCell2, 'অপত্য কোষ ২ (সমগুণ 2n)', 'Daughter Cell 2 (2n)', 'Cell 2 (2n)', '#10b981');
      return;
    }

    // =========================================================================
    // SLIDE 4: প্রোফেজ — ক্রোমোজোমগুলো ঘনীভূত হচ্ছে, নিউক্লিওলাস বিলীন হচ্ছে
    // Chromosomes condense (get thicker + shorter) live; nuclear envelope fades
    // =========================================================================
    if (slideId === 4) {
      // Cell boundary
      const cellShell = new THREE.Mesh(
        new THREE.SphereGeometry(3.0, 40, 40),
        new THREE.MeshPhysicalMaterial({ color: 0x0f4c37, transparent: true, opacity: 0.18, roughness: 0.1 })
      );
      group.add(cellShell);

      // Nuclear envelope (will fade out in animation)
      const nucEnv = new THREE.Mesh(
        new THREE.SphereGeometry(2.0, 32, 32),
        new THREE.MeshPhysicalMaterial({ color: 0x059669, transparent: true, opacity: 0.35, roughness: 0.1 })
      );
      group.add(nucEnv);
      refs.propNucEnv = nucEnv;

      // Fading Nucleolus
      const nucleolus = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0x064e3b, transparent: true, opacity: 0.8, emissive: 0x047857, emissiveIntensity: 0.5 })
      );
      nucleolus.position.set(0.5, 0.5, 0);
      group.add(nucleolus);
      refs.propNucleolus = nucleolus;
      addAnchor(nucleolus, 'বিলুপ্তপ্রায় নিউক্লিওলাস', 'Disappearing Nucleolus', 'Nucleolus', '#6ee7b7');

      // Condensing Chromosomes — they get thicker (scale up radius) and shorter
      const chromoGroup = new THREE.Group();
      group.add(chromoGroup);
      refs.prophaseChromos = chromoGroup;
      refs.propChromoMeshes = [];

      const chromoData = [
        { x: -0.7, y: 0.6, rot: 0.3, color: 0xec4899 },
        { x: 0.7, y: -0.6, rot: -0.4, color: 0x38bdf8 },
        { x: -0.6, y: -0.6, rot: 0.8, color: 0xf59e0b },
        { x: 0.6, y: 0.7, rot: -0.7, color: 0xa855f7 },
      ];

      chromoData.forEach((cd, idx) => {
        const cGroup = new THREE.Group();
        cGroup.position.set(cd.x, cd.y, 0);
        cGroup.rotation.z = cd.rot;
        chromoGroup.add(cGroup);

        // Two chromatid arms (X-shape)
        const arm1 = new THREE.Mesh(
          new THREE.CylinderGeometry(0.10, 0.10, 1.2, 12),
          new THREE.MeshStandardMaterial({ color: cd.color, roughness: 0.3, emissive: cd.color, emissiveIntensity: 0.45 })
        );
        arm1.rotation.z = Math.PI / 4;
        cGroup.add(arm1);

        const arm2 = new THREE.Mesh(
          new THREE.CylinderGeometry(0.10, 0.10, 1.2, 12),
          new THREE.MeshStandardMaterial({ color: cd.color, roughness: 0.3, emissive: cd.color, emissiveIntensity: 0.45 })
        );
        arm2.rotation.z = -Math.PI / 4;
        cGroup.add(arm2);

        const centromere = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 12), new THREE.MeshBasicMaterial({ color: 0xfacc15 }));
        cGroup.add(centromere);

        refs.propChromoMeshes.push({ group: cGroup, arm1, arm2, baseColor: cd.color });
        if (idx === 0) {
          addAnchor(cGroup, 'ক্রোমোজোম ঘনীভূত হচ্ছে (খাটো ও মোটা)', 'Chromosome Condensing (Short & Thick)', 'Chromatin→Chr', '#ec4899');
        }
      });
      return;
    }

    // =========================================================================
    // SLIDE 5: প্রো-মেটাফেজ — স্পিন্ডল তন্তু ক্রোমোজোম টেনে মাঝে নিয়ে আসছে
    // Spindle fibers grow from poles and pull chromosomes toward center
    // =========================================================================
    if (slideId === 5) {
      // Cell boundary
      const cShell = new THREE.Mesh(
        new THREE.SphereGeometry(3.2, 40, 40),
        new THREE.MeshPhysicalMaterial({ color: 0x0c2340, transparent: true, opacity: 0.15 })
      );
      group.add(cShell);

      // Poles (centrosomes with aster rays)
      const poleMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 1.0 });
      const poleL = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 16), poleMat);
      poleL.position.set(-3.0, 0, 0);
      group.add(poleL);
      addAnchor(poleL, 'উত্তর মেরু — সেন্ট্রিওল ও অ্যাস্টার রশ্মি', 'North Pole — Centrosome & Aster', 'Pole N', '#f59e0b');

      const poleR = new THREE.Mesh(new THREE.SphereGeometry(0.32, 16, 16), poleMat.clone());
      poleR.position.set(3.0, 0, 0);
      group.add(poleR);
      addAnchor(poleR, 'দক্ষিণ মেরু — সেন্ট্রিওল', 'South Pole — Centrosome', 'Pole S', '#f59e0b');

      // Aster rays (short lines from each pole)
      [-3.0, 3.0].forEach((px) => {
        for (let a = 0; a < 8; a++) {
          const angle = (a / 8) * Math.PI * 2;
          const rayDir = new THREE.Vector3(0, Math.cos(angle) * 0.8, Math.sin(angle) * 0.8);
          const rayEnd = rayDir.clone().multiplyScalar(1.1);
          const rayCurve = new THREE.LineCurve3(new THREE.Vector3(px, 0, 0), new THREE.Vector3(px, rayEnd.y, rayEnd.z));
          const ray = new THREE.Mesh(
            new THREE.TubeGeometry(rayCurve, 4, 0.025, 4, false),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.6 })
          );
          group.add(ray);
        }
      });

      // Spindle fibers from pole to pole (animated lengths)
      refs.spindleFibers = [];
      for (let offset = -1.4; offset <= 1.4; offset += 0.46) {
        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(-3.0, 0, 0),
          new THREE.Vector3(0, offset, offset * 0.35),
          new THREE.Vector3(3.0, 0, 0)
        ]);
        const tube = new THREE.Mesh(
          new THREE.TubeGeometry(curve, 24, 0.028, 5, false),
          new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.55 })
        );
        group.add(tube);
        refs.spindleFibers.push(tube);
      }

      // Chromosomes dancing toward equator — attached to traction fibers
      const spindleChrGroup = new THREE.Group();
      group.add(spindleChrGroup);
      refs.spindleChromosomes = spindleChrGroup;
      refs.prometaChromos = [];

      const prometaData = [
        { yOff: 0.9, xOff: -1.0, color: 0xec4899 },
        { yOff: -0.9, xOff: 0.9, color: 0x38bdf8 },
        { yOff: 0.4, xOff: 0.5, color: 0xf59e0b },
        { yOff: -0.4, xOff: -0.5, color: 0xa855f7 },
      ];
      prometaData.forEach((pd, idx) => {
        const cg = new THREE.Group();
        cg.position.set(pd.xOff, pd.yOff, 0);
        spindleChrGroup.add(cg);

        const a1 = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.0, 10), new THREE.MeshStandardMaterial({ color: pd.color, emissive: pd.color, emissiveIntensity: 0.5 }));
        a1.rotation.z = Math.PI / 4;
        cg.add(a1);
        const a2 = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1.0, 10), new THREE.MeshStandardMaterial({ color: pd.color, emissive: pd.color, emissiveIntensity: 0.5 }));
        a2.rotation.z = -Math.PI / 4;
        cg.add(a2);
        const cent = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), new THREE.MeshBasicMaterial({ color: 0xfacc15 }));
        cg.add(cent);

        refs.prometaChromos.push({ group: cg, targetX: 0, startX: pd.xOff, startY: pd.yOff });
        if (idx === 0) {
          addAnchor(cg, 'ক্রোমোজোম স্পিন্ডল তন্তুর সাথে যুক্ত হয়ে মাঝে আসছে', 'Chromosome Moving Toward Equator (Spindle Traction)', 'Kinetochore', '#ec4899');
        }
      });
      return;
    }

    // =========================================================================
    // SLIDE 6: মেটাফেজ — সব ক্রোমোজোম বিষুবীয় তলে সারিবদ্ধ, ঘুরছে
    // =========================================================================
    if (slideId === 6) {
      // Cell membrane
      const cShell = new THREE.Mesh(
        new THREE.SphereGeometry(3.2, 40, 40),
        new THREE.MeshPhysicalMaterial({ color: 0x0c2340, transparent: true, opacity: 0.15 })
      );
      group.add(cShell);

      // Poles
      [-3.0, 3.0].forEach((px) => {
        const p = new THREE.Mesh(new THREE.SphereGeometry(0.22, 14, 14), new THREE.MeshBasicMaterial({ color: 0x64748b }));
        p.position.x = px;
        group.add(p);
      });

      // Spindle fibers
      for (let offset = -1.4; offset <= 1.4; offset += 0.46) {
        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(-3.0, 0, 0),
          new THREE.Vector3(0, offset, 0),
          new THREE.Vector3(3.0, 0, 0)
        ]);
        const tube = new THREE.Mesh(
          new THREE.TubeGeometry(curve, 24, 0.025, 5, false),
          new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.45 })
        );
        group.add(tube);
      }

      // Equatorial disk
      const eqDisk = new THREE.Mesh(
        new THREE.CylinderGeometry(2.2, 2.2, 0.05, 40),
        new THREE.MeshBasicMaterial({ color: 0xfacc15, transparent: true, opacity: 0.18 })
      );
      eqDisk.rotation.z = Math.PI / 2;
      group.add(eqDisk);
      addAnchor(eqDisk, 'বিষুবীয় তল (Metaphase Plate) — সর্বাধিক সংকুচিত', 'Metaphase Plate — Maximum Condensation', 'Equator', '#facc15');

      // 4 aligned chromosomes rotating around the equatorial axis
      const metaGroup = new THREE.Group();
      group.add(metaGroup);
      refs.metaPhaseGroup = metaGroup;

      const chromoColors = [0xec4899, 0x38bdf8, 0xf59e0b, 0xa855f7];
      const chromoYPos = [-1.5, -0.5, 0.5, 1.5];
      refs.metaChromos = [];
      chromoYPos.forEach((y, i) => {
        const cg = new THREE.Group();
        cg.position.set(0, y, 0);
        metaGroup.add(cg);

        const color = chromoColors[i];
        const cL = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 1.1, 12), new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.5 }));
        cL.position.x = -0.5;
        cL.rotation.z = Math.PI / 2;
        cg.add(cL);

        const cR = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 1.1, 12), new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.5 }));
        cR.position.x = 0.5;
        cR.rotation.z = Math.PI / 2;
        cg.add(cR);

        const cent = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), new THREE.MeshBasicMaterial({ color: 0xfacc15 }));
        cg.add(cent);

        refs.metaChromos.push(cg);
        if (i === 1) {
          addAnchor(cg, 'মেটাকাইনেসিস — সর্বাধিক খাটো ও মোটা ক্রোমোজোম', 'Metakinesis — Max Condensed Chromosomes', 'Meta-chr', '#38bdf8');
        }
      });
      return;
    }

    // =========================================================================
    // SLIDE 7: অ্যানাফেজ — ক্রোমোজোমগুলো বিপরীত মেরুতে সরে যাচ্ছে (LIVE MIGRATION)
    // Chromosomes animate apart toward opposite poles; V, L, J, I shapes visible
    // =========================================================================
    if (slideId === 7) {
      // Cell shell
      const cShell = new THREE.Mesh(
        new THREE.SphereGeometry(3.4, 40, 40),
        new THREE.MeshPhysicalMaterial({ color: 0x0c1830, transparent: true, opacity: 0.15 })
      );
      group.add(cShell);

      // Poles
      [-3.2, 3.2].forEach((px, pi) => {
        const pm = new THREE.Mesh(new THREE.SphereGeometry(0.25, 14, 14), new THREE.MeshBasicMaterial({ color: 0xf59e0b }));
        pm.position.x = px;
        group.add(pm);
        // aster rays from each pole
        for (let a = 0; a < 6; a++) {
          const angle = (a / 6) * Math.PI * 2;
          const ray = new THREE.Mesh(
            new THREE.TubeGeometry(new THREE.LineCurve3(new THREE.Vector3(px, 0, 0), new THREE.Vector3(px, Math.cos(angle) * 0.8, Math.sin(angle) * 0.8)), 4, 0.02, 4, false),
            new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.5 })
          );
          group.add(ray);
        }
      });

      // Thinning spindle fibers
      for (let offset = -1.0; offset <= 1.0; offset += 0.5) {
        const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(-3.2, 0, 0), new THREE.Vector3(0, offset, 0), new THREE.Vector3(3.2, 0, 0)]);
        const tube = new THREE.Mesh(
          new THREE.TubeGeometry(curve, 24, 0.02, 5, false),
          new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35 })
        );
        group.add(tube);
      }

      // Left migrating chromosomes (V and L shapes)
      const leftGroup = new THREE.Group();
      leftGroup.position.set(-1.5, 0, 0);
      group.add(leftGroup);
      refs.anaphaseLeft = leftGroup;

      // V-shape: Metacentric
      const vChr = new THREE.Group();
      vChr.position.set(0, 1.1, 0);
      leftGroup.add(vChr);
      [[1, 0.35, 0.35, -Math.PI / 4], [1, -0.35, 0.35, Math.PI / 4]].forEach(([len, px, py, rot]) => {
        const a = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, len as number, 8), new THREE.MeshStandardMaterial({ color: 0xec4899, emissive: 0xbe185d, emissiveIntensity: 0.6 }));
        a.rotation.z = rot as number;
        a.position.set(px as number, py as number, 0);
        vChr.add(a);
      });
      vChr.add(new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 10), new THREE.MeshBasicMaterial({ color: 0xfacc15 })));
      addAnchor(vChr, 'মেটাসেন্ট্রিক (V-আকার) — উত্তর মেরুমুখী', 'Metacentric (V) → North Pole', 'V-Chr', '#ec4899');

      // L-shape: Sub-metacentric
      const lChr = new THREE.Group();
      lChr.position.set(0, -1.1, 0);
      leftGroup.add(lChr);
      const lAL = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 1.1, 8), new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 }));
      lAL.rotation.z = -Math.PI / 6; lAL.position.set(0.4, 0.4, 0);
      lChr.add(lAL);
      const lAS = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.5, 8), new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 }));
      lAS.rotation.z = Math.PI / 3; lAS.position.set(0.2, -0.2, 0);
      lChr.add(lAS);
      lChr.add(new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 10), new THREE.MeshBasicMaterial({ color: 0xfacc15 })));
      addAnchor(lChr, 'সাব-মেটাসেন্ট্রিক (L-আকার)', 'Sub-Metacentric (L)', 'L-Chr', '#38bdf8');

      // Right migrating chromosomes (J and I shapes)
      const rightGroup = new THREE.Group();
      rightGroup.position.set(1.5, 0, 0);
      group.add(rightGroup);
      refs.anaphaseRight = rightGroup;

      // J-shape: Acrocentric
      const jChr = new THREE.Group();
      jChr.position.set(0, 1.1, 0);
      rightGroup.add(jChr);
      const jAL = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 1.2, 8), new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.6 }));
      jAL.rotation.z = Math.PI / 6; jAL.position.set(-0.4, 0.4, 0);
      jChr.add(jAL);
      const jAS = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.28, 8), new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.6 }));
      jAS.rotation.z = -Math.PI / 3; jAS.position.set(-0.1, -0.15, 0);
      jChr.add(jAS);
      jChr.add(new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 10), new THREE.MeshBasicMaterial({ color: 0xfacc15 })));
      addAnchor(jChr, 'অ্যাক্রোসেন্ট্রিক (J-আকার) — দক্ষিণ মেরুমুখী', 'Acrocentric (J) → South Pole', 'J-Chr', '#f59e0b');

      // I-shape: Telocentric
      const iChr = new THREE.Group();
      iChr.position.set(0, -1.1, 0);
      rightGroup.add(iChr);
      const iRod = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 1.2, 8), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.6 }));
      iRod.rotation.z = Math.PI / 2; iRod.position.x = -0.5;
      iChr.add(iRod);
      iChr.add(new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 10), new THREE.MeshBasicMaterial({ color: 0xfacc15 })));
      addAnchor(iChr, 'টেলোসেন্ট্রিক (I-আকার)', 'Telocentric (I)', 'I-Chr', '#10b981');
      return;
    }

    // =========================================================================
    // SLIDE 8: টেলোফেজ ও সাইটোকাইনেসিস — কোষ দুভাগে বিভক্ত হচ্ছে (LIVE SPLIT)
    // Cell plate grows outward in plant cell; cleavage furrow deepens in animal
    // =========================================================================
    if (slideId === 8) {
      // Outer cell shape — elongated like a dividing cell
      const outerCell = new THREE.Mesh(
        new THREE.SphereGeometry(2.8, 48, 48),
        new THREE.MeshPhysicalMaterial({ color: 0x064e3b, transparent: true, opacity: 0.20, roughness: 0.1 })
      );
      outerCell.scale.x = 1.5;
      group.add(outerCell);
      refs.teloCellOuter = outerCell;

      // Cell plate (Phragmoplast) that grows outward from center
      const plate = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.1, 0.12, 32), // starts small, grows
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xca8a04, emissiveIntensity: 0.8 })
      );
      plate.rotation.z = Math.PI / 2;
      group.add(plate);
      refs.cellPlate = plate;
      addAnchor(plate, 'কোষপ্লেট বৃদ্ধি পাচ্ছে (ফ্র্যাগমোপ্লাস্ট)', 'Cell Plate Growing (Phragmoplast)', 'Cell Plate', '#facc15');

      // Golgi vesicles moving toward plate center
      refs.vesicles = [];
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const r = 1.2 + Math.random() * 0.6;
        const ves = new THREE.Mesh(
          new THREE.SphereGeometry(0.1, 8, 8),
          new THREE.MeshStandardMaterial({ color: 0xfbbf24, emissive: 0xf59e0b, emissiveIntensity: 0.8 })
        );
        ves.position.set(Math.cos(angle) * r, Math.sin(angle) * 0.5, Math.sin(angle) * r * 0.4);
        group.add(ves);
        refs.vesicles.push({ mesh: ves, angle, startR: r });
      }

      // Left daughter nucleus — forming
      const nucLeft = new THREE.Mesh(
        new THREE.SphereGeometry(1.1, 24, 24),
        new THREE.MeshPhysicalMaterial({ color: 0x10b981, transparent: true, opacity: 0.50, roughness: 0.2 })
      );
      nucLeft.position.set(-2.0, 0, 0);
      group.add(nucLeft);
      refs.teloNucLeft = nucLeft;
      addAnchor(nucLeft, 'অপত্য নিউক্লিয়াস ১ — পুনর্গঠিত', 'Daughter Nucleus 1 — Reforming', 'D-Nucleus 1', '#10b981');

      // Right daughter nucleus
      const nucRight = new THREE.Mesh(
        new THREE.SphereGeometry(1.1, 24, 24),
        new THREE.MeshPhysicalMaterial({ color: 0x10b981, transparent: true, opacity: 0.50, roughness: 0.2 })
      );
      nucRight.position.set(2.0, 0, 0);
      group.add(nucRight);
      refs.teloNucRight = nucRight;
      addAnchor(nucRight, 'অপত্য নিউক্লিয়াস ২ — পুনর্গঠিত', 'Daughter Nucleus 2 — Reforming', 'D-Nucleus 2', '#10b981');
      return;
    }

    // =========================================================================
    // SLIDE 9: মাইটোসিসের গুরুত্ব — টিস্যু কোষ বৃদ্ধির জীবন্ত দৃশ্য
    // Hexagonal tissue cells pulse and new cells appear, simulating growth
    // =========================================================================
    if (slideId === 9) {
      const tissueGroup = new THREE.Group();
      group.add(tissueGroup);
      refs.tissueGroup = tissueGroup;
      refs.tissueCells = [];

      for (let x = -2; x <= 2; x++) {
        for (let y = -1.4; y <= 1.4; y += 0.88) {
          const offsetX = Math.abs(Math.round(y * 10)) % 2 === 0 ? 0.5 : 0;
          const cellMesh = new THREE.Mesh(
            new THREE.CylinderGeometry(0.44, 0.44, 0.25, 6),
            new THREE.MeshStandardMaterial({ color: 0x10b981, metalness: 0.3, roughness: 0.4, emissive: 0x059669, emissiveIntensity: 0.35 })
          );
          cellMesh.rotation.x = Math.PI / 2;
          cellMesh.position.set(x * 1.06 + offsetX, y, 0);
          tissueGroup.add(cellMesh);
          refs.tissueCells.push({ mesh: cellMesh, phase: Math.random() * Math.PI * 2 });
        }
      }
      addAnchor(tissueGroup, 'টিস্যু কোষপুঞ্জ — বৃদ্ধি ও ক্ষতপূরণে মাইটোসিস', 'Tissue Cells Growing via Mitosis', 'Tissue Growth', '#10b981');
      return;
    }

    // =========================================================================
    // SLIDE 10: ক্যান্সার — অনিয়ন্ত্রিত কোষ বিভাজন (LIVE CHAOTIC PROLIFERATION)
    // Tumor cells multiply chaotically; metastatic cell drifts away
    // =========================================================================
    if (slideId === 10) {
      const tumorGroup = new THREE.Group();
      group.add(tumorGroup);
      refs.tumorCluster = tumorGroup;
      refs.tumorSpheres = [];

      const sphereColors = [0xef4444, 0xdc2626, 0xb91c1c, 0xf43f5e, 0x991b1b];
      for (let i = 0; i < 30; i++) {
        const rad = 0.28 + Math.random() * 0.22;
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(rad, 16, 16),
          new THREE.MeshStandardMaterial({ color: sphereColors[i % sphereColors.length], roughness: 0.4, emissive: 0x7f1d1d, emissiveIntensity: 0.7 })
        );
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const dist = Math.random() * 1.7;
        sphere.position.set(dist * Math.sin(phi) * Math.cos(theta), dist * Math.sin(phi) * Math.sin(theta), dist * Math.cos(phi));
        tumorGroup.add(sphere);
        refs.tumorSpheres.push({ mesh: sphere, baseScale: rad / 0.35, phase: Math.random() * Math.PI * 2 });
      }
      addAnchor(tumorGroup, 'ম্যালিগন্যান্ট টিউমার: অনিয়ন্ত্রিত মাইটোসিস', 'Malignant Tumor: Uncontrolled Mitosis', 'Cancer Mass', '#ef4444');

      // Metastatic cancer cell drifting away in orbit
      const metaCell = new THREE.Mesh(
        new THREE.SphereGeometry(0.32, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.9 })
      );
      group.add(metaCell);
      refs.metaCell = metaCell;
      refs.metaCellAngle = 0;
      addAnchor(metaCell, 'মেটাস্ট্যাসিস — রক্তে ছড়িয়ে পড়া ক্যান্সার কোষ', 'Metastatic Cell Drifting Away', 'Metastasis', '#f59e0b');
      return;
    }

    // =========================================================================
    // SLIDE 11: সাইন্যাপসিস, কায়াজমা ও ক্রসিং ওভার — জিনের বিনিময় দৃশ্য
    // Bivalent chromosomes breathe, chiasma glows, crossing over segments swap colors
    // =========================================================================
    if (slideId === 11) {
      const crossGroup = new THREE.Group();
      group.add(crossGroup);
      refs.bivalentGroup = crossGroup;

      // Maternal homolog (Red)
      const matGroup = new THREE.Group();
      matGroup.position.x = -0.6;
      crossGroup.add(matGroup);

      const matC1 = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 3.0, 12), new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.5 }));
      matC1.position.x = -0.28;
      matGroup.add(matC1);

      // Crossed chromatid — top half red, bottom half blue (recombinant)
      const matC2top = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 1.5, 12), new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.5 }));
      matC2top.position.set(0.25, 0.75, 0);
      matGroup.add(matC2top);

      const matC2bot = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 1.4, 12), new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.8 }));
      matC2bot.position.set(0.5, -0.9, 0);
      matC2bot.rotation.z = -Math.PI / 10;
      matGroup.add(matC2bot);
      addAnchor(matGroup, 'মাতৃ হোমোলোগ — ক্রসিং ওভারের পর', 'Maternal Homolog (Post Crossing Over)', 'Maternal', '#ef4444');

      // Paternal homolog (Blue)
      const patGroup = new THREE.Group();
      patGroup.position.x = 0.6;
      crossGroup.add(patGroup);

      const patC2 = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 3.0, 12), new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 }));
      patC2.position.x = 0.28;
      patGroup.add(patC2);

      const patC1top = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 1.5, 12), new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 }));
      patC1top.position.set(-0.25, 0.75, 0);
      patGroup.add(patC1top);

      const patC1bot = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 1.4, 12), new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.8 }));
      patC1bot.position.set(-0.5, -0.9, 0);
      patC1bot.rotation.z = Math.PI / 10;
      patGroup.add(patC1bot);
      addAnchor(patGroup, 'পিতৃ হোমোলোগ — ক্রসিং ওভারের পর', 'Paternal Homolog (Post Crossing Over)', 'Paternal', '#38bdf8');

      // Glowing chiasma ring
      const chiasma = new THREE.Mesh(
        new THREE.TorusGeometry(0.32, 0.07, 14, 32),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xfbbf24, emissiveIntensity: 1.2 })
      );
      chiasma.position.set(0, -0.18, 0);
      crossGroup.add(chiasma);
      refs.chiasmaRing = chiasma;
      addAnchor(chiasma, 'কায়াজমা (X) — জিনীয় বৈচিত্র্যের উৎস', 'Chiasma (X) — Genetic Variation Source', 'Chiasma X', '#facc15');

      // 4 recombinant gametes appearing below
      const gameteGroup = new THREE.Group();
      gameteGroup.position.set(0, -2.8, 0);
      group.add(gameteGroup);
      refs.gameteGroup = gameteGroup;
      const gColors = [0xef4444, 0x38bdf8, 0x9333ea, 0xf59e0b];
      const gPosArr = [{ x: -1.5, y: 0 }, { x: -0.5, y: 0 }, { x: 0.5, y: 0 }, { x: 1.5, y: 0 }];
      refs.gametes = [];
      gPosArr.forEach((gp, gi) => {
        const gm = new THREE.Mesh(
          new THREE.SphereGeometry(0.38, 16, 16),
          new THREE.MeshStandardMaterial({ color: gColors[gi], emissive: gColors[gi], emissiveIntensity: 0.5 })
        );
        gm.position.set(gp.x, gp.y, 0);
        gameteGroup.add(gm);
        refs.gametes.push({ mesh: gm, phase: gi * Math.PI * 0.5 });
      });
      addAnchor(gameteGroup, '৪টি পুনর্মিশ্র হ্যাপ্লয়েড গ্যামেট (n)', '4 Recombinant Haploid Gametes (n)', 'Gametes (n)', '#f59e0b');
      return;
    }

    // =========================================================================
    // SLIDE 12: মাইটোসিস vs মিয়োসিস তুলনামূলক দৃশ্য — দুটি পাশাপাশি সিকোয়েন্স
    // Left: 1 mother → 2 identical daughters (Mitosis); Right: 1 mother → 4 gametes (Meiosis)
    // =========================================================================
    if (slideId === 12) {
      // LEFT: Mitosis — 2 identical daughter cells (green, same size)
      const mitGroup = new THREE.Group();
      mitGroup.position.set(-2.2, 0, 0);
      group.add(mitGroup);
      refs.mitCompGroup = mitGroup;

      const mMother = new THREE.Mesh(new THREE.SphereGeometry(0.9, 20, 20), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.5 }));
      mMother.position.y = 2.0;
      mitGroup.add(mMother);
      refs.mMother = mMother;

      const cM1 = new THREE.Mesh(new THREE.SphereGeometry(0.82, 20, 20), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.5 }));
      cM1.position.set(-0.9, 0.6, 0);
      mitGroup.add(cM1);
      refs.cM1 = cM1;

      const cM2 = new THREE.Mesh(new THREE.SphereGeometry(0.82, 20, 20), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.5 }));
      cM2.position.set(0.9, 0.6, 0);
      mitGroup.add(cM2);
      refs.cM2 = cM2;
      addAnchor(mitGroup, 'মাইটোসিস → ২টি সমগুণ দেহকোষ (2n)', 'Mitosis → 2 Identical Diploid (2n)', 'Mitosis (2n)', '#10b981');

      // Dividing line
      const divLine = new THREE.Mesh(new THREE.BoxGeometry(0.04, 6, 0.04), new THREE.MeshBasicMaterial({ color: 0x475569 }));
      group.add(divLine);

      // RIGHT: Meiosis — 4 diverse haploid gametes (different colors, smaller)
      const meiGroup = new THREE.Group();
      meiGroup.position.set(2.2, 0, 0);
      group.add(meiGroup);
      refs.meiCompGroup = meiGroup;

      const meiMother = new THREE.Mesh(new THREE.SphereGeometry(0.9, 20, 20), new THREE.MeshStandardMaterial({ color: 0xec4899, emissive: 0xbe185d, emissiveIntensity: 0.5 }));
      meiMother.position.y = 2.0;
      meiGroup.add(meiMother);
      refs.meiMother = meiMother;

      const gameteColors12 = [0xef4444, 0x38bdf8, 0xa855f7, 0xf59e0b];
      refs.meiGametes = [];
      [{ x: -1.0, y: 0.6 }, { x: -0.3, y: 0.3 }, { x: 0.3, y: 0.3 }, { x: 1.0, y: 0.6 }].forEach((gp, gi) => {
        const gm = new THREE.Mesh(new THREE.SphereGeometry(0.55, 16, 16), new THREE.MeshStandardMaterial({ color: gameteColors12[gi], emissive: gameteColors12[gi], emissiveIntensity: 0.45 }));
        gm.position.set(gp.x, gp.y, 0);
        meiGroup.add(gm);
        refs.meiGametes.push({ mesh: gm, phase: gi * 1.57 });
      });
      addAnchor(meiGroup, 'মিয়োসিস → ৪টি বৈচিত্র্যময় গ্যামেট (n)', 'Meiosis → 4 Diverse Haploid Gametes (n)', 'Meiosis (n)', '#ec4899');
      return;
    }
  }
}

/**
 * FULLY ANIMATED Physics Update — called every frame for each biology slide.
 * All cell division processes are animated in real time.
 */
export function updateBiology3DPhysics(
  slideId: number,
  time: number,
  refs: any,
  chapter: number
) {
  if (chapter !== 3) return;

  // =========================================================================
  // SLIDE 1: Mother cell breathes; orbiting daughter/type orbs orbit around it
  // =========================================================================
  if (slideId === 1) {
    if (refs.motherCell) {
      const pulse = 1.0 + Math.sin(time * 1.8) * 0.06;
      refs.motherCell.scale.setScalar(pulse);
    }
    if (refs.motherNucleus) {
      refs.motherNucleus.scale.setScalar(1.0 + Math.sin(time * 2.5) * 0.1);
    }
    if (refs.orbitOrbs) {
      refs.orbitOrbs.forEach((orb: any) => {
        const angle = time * orb.speed + orb.phase;
        orb.mesh.position.set(
          Math.cos(angle) * orb.r,
          Math.sin(time * 0.4 + orb.phase) * 0.6,
          Math.sin(angle) * orb.r * 0.5
        );
        orb.mesh.scale.setScalar(0.9 + Math.sin(time * 3 + orb.phase) * 0.12);
      });
    }
  }

  // =========================================================================
  // SLIDE 2: Amitosis — cell lobes separate, bridge thins, furrow tightens
  // =========================================================================
  if (slideId === 2) {
    // Animate lobes moving apart over a 6-second oscillation
    const split = Math.abs(Math.sin(time * 0.55)) * 1.8 + 0.6;
    if (refs.amitosisLeft) refs.amitosisLeft.position.x = -split;
    if (refs.amitosisRight) refs.amitosisRight.position.x = split;

    // Bridge shrinks as lobes separate
    if (refs.amitosisBridge) {
      const bridgeLen = Math.max(0.15, 2.0 - (split - 0.6) * 0.6);
      const bridgeRad = Math.max(0.05, 0.85 - (split - 0.6) * 0.35);
      refs.amitosisBridge.scale.set(bridgeRad / 0.8, bridgeLen / 1.0, bridgeRad / 0.8);
      refs.amitosisBridge.material.opacity = Math.max(0.1, 0.45 - (split - 0.6) * 0.2);
    }

    // Furrow gets tighter (smaller ring) as split progresses
    if (refs.amitosisFurrow) {
      const furrowR = Math.max(0.15, 0.85 - (split - 0.6) * 0.35);
      refs.amitosisFurrow.geometry.dispose();
      // Simple scale to simulate tightening
      const scaleF = Math.max(0.15, 1.0 - (split - 0.6) * 0.4);
      refs.amitosisFurrow.scale.setScalar(scaleF);
      refs.amitosisFurrow.position.x = 0; // stays at center
    }

    // Nuclei move apart with lobes
    if (refs.amitosisNucL) refs.amitosisNucL.position.x = -(split * 0.6);
    if (refs.amitosisNucR) refs.amitosisNucR.position.x = (split * 0.6);

    // Plasmid rotates
    if (refs.amitosisplasmid) {
      refs.amitosisplasmid.position.set(-split, 0.9, 0);
      refs.amitosisplasmid.rotation.z = time * 1.2;
    }
  }

  // =========================================================================
  // SLIDE 3: DNA helix rotates; unzipping wave travels upward
  // =========================================================================
  if (slideId === 3) {
    if (refs.dnaHelix) {
      refs.dnaHelix.rotation.y = time * 0.75;
    }
    // Nodes wave — simulate unzipping
    if (refs.dnaNodes1 && refs.dnaNodes2) {
      const total = refs.dnaNodes1.length;
      refs.dnaNodes1.forEach((nd: any, i: number) => {
        const wave = Math.sin(time * 2.5 - i * 0.25) * 0.25;
        const angle = nd.baseAngle + time * 0.75;
        nd.mesh.position.x = Math.cos(angle) * (1.0 + wave);
        nd.mesh.position.z = Math.sin(angle) * (1.0 + wave);
        nd.mesh.position.y = nd.baseY;
      });
      refs.dnaNodes2.forEach((nd: any, i: number) => {
        const wave = Math.sin(time * 2.5 - i * 0.25) * 0.25;
        const angle = nd.baseAngle + Math.PI + time * 0.75;
        nd.mesh.position.x = Math.cos(angle) * (1.0 + wave);
        nd.mesh.position.z = Math.sin(angle) * (1.0 + wave);
        nd.mesh.position.y = nd.baseY;
      });
    }
    // Daughter cells pulse
    if (refs.dnaCell1) refs.dnaCell1.scale.setScalar(0.9 + Math.sin(time * 1.5) * 0.1);
    if (refs.dnaCell2) refs.dnaCell2.scale.setScalar(0.9 + Math.sin(time * 1.5 + Math.PI) * 0.1);
  }

  // =========================================================================
  // SLIDE 4: Prophase — chromosomes condense (thicken) and nuclear envelope fades
  // =========================================================================
  if (slideId === 4) {
    // Nuclear envelope fades in and out (simulating dissolution)
    if (refs.propNucEnv) {
      refs.propNucEnv.material.opacity = 0.15 + Math.abs(Math.sin(time * 0.5)) * 0.22;
    }
    // Nucleolus fades away
    if (refs.propNucleolus) {
      refs.propNucleolus.material.opacity = Math.max(0.0, 0.8 - (time % 8) * 0.12);
      refs.propNucleolus.scale.setScalar(Math.max(0.1, 1.0 - (time % 8) * 0.1));
    }
    // Chromosomes drift slowly and rotate — simulating thermal motion
    if (refs.prophaseChromos) {
      refs.prophaseChromos.rotation.z = Math.sin(time * 0.4) * 0.06;
    }
    if (refs.propChromoMeshes) {
      refs.propChromoMeshes.forEach((chr: any, i: number) => {
        // Slight individual drift
        chr.group.position.y += Math.sin(time * 1.2 + i) * 0.003;
        chr.group.rotation.z += Math.cos(time * 0.8 + i) * 0.004;
        // Condensation: arms get slightly thicker scale over time cycle
        const condensation = 1.0 + Math.abs(Math.sin(time * 0.6 + i)) * 0.18;
        chr.arm1.scale.x = condensation;
        chr.arm2.scale.x = condensation;
      });
    }
  }

  // =========================================================================
  // SLIDE 5: Prometaphase — chromosomes swing toward equator
  // =========================================================================
  if (slideId === 5) {
    // Spindle fibers shimmer
    if (refs.spindleFibers) {
      refs.spindleFibers.forEach((fiber: any, i: number) => {
        fiber.material.opacity = 0.3 + Math.sin(time * 2 + i) * 0.2;
      });
    }
    // Chromosomes dance toward center (oscillate X toward 0)
    if (refs.prometaChromos) {
      refs.prometaChromos.forEach((chr: any, i: number) => {
        chr.group.position.x = chr.startX * (0.5 + Math.abs(Math.cos(time * 0.6 + i)) * 0.5);
        chr.group.position.y = chr.startY * (0.5 + Math.abs(Math.sin(time * 0.5 + i * 1.3)) * 0.5);
        chr.group.rotation.z = Math.sin(time + i) * 0.25;
      });
    }
    if (refs.spindleChromosomes) {
      refs.spindleChromosomes.rotation.y = Math.sin(time * 0.3) * 0.15;
    }
  }

  // =========================================================================
  // SLIDE 6: Metaphase — chromosomes gently oscillate in perfect equatorial line
  // =========================================================================
  if (slideId === 6) {
    if (refs.metaPhaseGroup) {
      refs.metaPhaseGroup.rotation.x = Math.sin(time * 0.4) * 0.08;
    }
    if (refs.metaChromos) {
      refs.metaChromos.forEach((cg: any, i: number) => {
        cg.position.z = Math.sin(time * 1.5 + i * 0.8) * 0.2;
        cg.rotation.z = Math.sin(time * 0.8 + i) * 0.08;
      });
    }
  }

  // =========================================================================
  // SLIDE 7: Anaphase — chromosomes migrate apart to poles in real time
  // =========================================================================
  if (slideId === 7) {
    if (refs.anaphaseLeft && refs.anaphaseRight) {
      // Use a cyclical animation: 0 → fully apart → back → repeat
      const t = (time * 0.5) % (Math.PI * 2);
      const sep = Math.abs(Math.sin(t)) * 1.6;
      refs.anaphaseLeft.position.x = -(1.5 + sep);
      refs.anaphaseRight.position.x = (1.5 + sep);
      // Also slightly elongate cell boundary as chromosomes separate
    }
  }

  // =========================================================================
  // SLIDE 8: Telophase & Cytokinesis — cell plate grows outward; vesicles flow in
  // =========================================================================
  if (slideId === 8) {
    // Cell plate grows (increase radius)
    if (refs.cellPlate) {
      const plateR = Math.min(2.2, 0.1 + Math.abs(Math.sin(time * 0.4)) * 2.2);
      refs.cellPlate.scale.x = plateR / 0.1;
      refs.cellPlate.scale.z = plateR / 0.1;
    }
    // Vesicles move inward toward center
    if (refs.vesicles) {
      refs.vesicles.forEach((v: any) => {
        const frac = (Math.sin(time * 0.8 + v.angle) + 1) * 0.5;
        const r = v.startR * (1.0 - frac * 0.75);
        v.mesh.position.x = Math.cos(v.angle + time * 0.3) * r;
        v.mesh.position.y = Math.sin(v.angle * 2) * 0.3;
        v.mesh.position.z = Math.sin(v.angle + time * 0.3) * r * 0.4;
      });
    }
    // Daughter nuclei pulse as they form
    if (refs.teloNucLeft) refs.teloNucLeft.scale.setScalar(0.85 + Math.sin(time * 1.5) * 0.12);
    if (refs.teloNucRight) refs.teloNucRight.scale.setScalar(0.85 + Math.sin(time * 1.5 + Math.PI) * 0.12);
    // Cell outer elongates, then constricts
    if (refs.teloCellOuter) {
      refs.teloCellOuter.scale.x = 1.5 - Math.abs(Math.sin(time * 0.3)) * 0.4;
    }
  }

  // =========================================================================
  // SLIDE 9: Tissue growth — each hexagonal cell pulses independently
  // =========================================================================
  if (slideId === 9) {
    if (refs.tissueCells) {
      refs.tissueCells.forEach((cell: any) => {
        const s = 0.92 + Math.sin(time * 1.8 + cell.phase) * 0.09;
        cell.mesh.scale.setScalar(s);
        cell.mesh.material.emissiveIntensity = 0.25 + Math.sin(time * 2 + cell.phase) * 0.15;
      });
    }
    if (refs.tissueGroup) {
      refs.tissueGroup.rotation.z = Math.sin(time * 0.2) * 0.04;
    }
  }

  // =========================================================================
  // SLIDE 10: Cancer — tumor cells pulse chaotically; metastatic cell orbits away
  // =========================================================================
  if (slideId === 10) {
    if (refs.tumorCluster) {
      refs.tumorCluster.rotation.y = time * 0.22;
    }
    if (refs.tumorSpheres) {
      refs.tumorSpheres.forEach((ts: any) => {
        ts.mesh.scale.setScalar(ts.baseScale * (0.88 + Math.sin(time * 4.5 + ts.phase) * 0.14));
      });
    }
    // Metastatic cell spirals outward from tumor
    if (refs.metaCell) {
      refs.metaCellAngle = (refs.metaCellAngle || 0) + 0.015;
      const r = 2.2 + Math.abs(Math.sin(time * 0.3)) * 1.2;
      refs.metaCell.position.set(
        Math.cos(refs.metaCellAngle) * r,
        Math.sin(refs.metaCellAngle * 0.5) * 1.0,
        Math.sin(refs.metaCellAngle) * r * 0.4
      );
      refs.metaCell.scale.setScalar(0.9 + Math.sin(time * 5) * 0.12);
    }
  }

  // =========================================================================
  // SLIDE 11: Chiasma glows and pulses; bivalent breathes; gametes pulse
  // =========================================================================
  if (slideId === 11) {
    if (refs.bivalentGroup) {
      refs.bivalentGroup.rotation.y = Math.sin(time * 0.5) * 0.18;
    }
    if (refs.chiasmaRing) {
      refs.chiasmaRing.material.emissiveIntensity = 0.8 + Math.sin(time * 3.5) * 0.6;
      refs.chiasmaRing.rotation.z = time * 0.8;
    }
    if (refs.gametes) {
      refs.gametes.forEach((g: any) => {
        g.mesh.scale.setScalar(0.88 + Math.sin(time * 2 + g.phase) * 0.14);
      });
    }
    if (refs.gameteGroup) {
      refs.gameteGroup.position.y = -2.8 + Math.sin(time * 0.6) * 0.15;
    }
  }

  // =========================================================================
  // SLIDE 12: Mitosis vs Meiosis — both mother cells pulse; daughters orbit gently
  // =========================================================================
  if (slideId === 12) {
    if (refs.mMother) refs.mMother.scale.setScalar(0.9 + Math.sin(time * 1.5) * 0.1);
    if (refs.cM1) refs.cM1.scale.setScalar(0.88 + Math.sin(time * 1.8) * 0.1);
    if (refs.cM2) refs.cM2.scale.setScalar(0.88 + Math.sin(time * 1.8 + Math.PI) * 0.1);
    if (refs.meiMother) refs.meiMother.scale.setScalar(0.9 + Math.sin(time * 1.5 + 1) * 0.1);
    if (refs.meiGametes) {
      refs.meiGametes.forEach((g: any) => {
        g.mesh.scale.setScalar(0.85 + Math.sin(time * 2.2 + g.phase) * 0.13);
      });
    }
    if (refs.mitCompGroup) refs.mitCompGroup.rotation.y = Math.sin(time * 0.3) * 0.08;
    if (refs.meiCompGroup) refs.meiCompGroup.rotation.y = Math.sin(time * 0.3 + Math.PI) * 0.08;
  }
}
