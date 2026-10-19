import * as THREE from 'three';

// Type helper for anchor adder
type AddAnchorFn = (mesh: THREE.Object3D, textBn: string, textEn: string, symbol: string, color: string) => void;

/**
 * Builds high-fidelity 3D Interactive Scenes for Physics Chapters 4 and 5
 */
export function buildPhysics3DScene(
  slideId: number,
  chapter: number,
  group: THREE.Group,
  refs: any,
  addAnchor: AddAnchorFn
) {
  // Clear any existing references for this slide
  refs.physicsSlide = slideId;
  refs.physicsChapter = chapter;

  // =========================================================================
  // PHYSICS CHAPTER 4: WORK, POWER AND ENERGY (কাজ, ক্ষমতা ও শক্তি)
  // =========================================================================
  if (chapter === 4) {
    // -----------------------------------------------------------------------
    // Slide 1: কাজের ধারণা ও প্রকারভেদ (Work: Inclined plane & Force Vectors)
    // -----------------------------------------------------------------------
    if (slideId === 1) {
      // Base Floor
      const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(8, 4),
        new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.8, side: THREE.DoubleSide })
      );
      floor.rotation.x = -Math.PI / 2;
      floor.position.set(0, -1.8, 0);
      group.add(floor);

      // Inclined Wedge / Ramp (angle = 25 deg)
      const rampGroup = new THREE.Group();
      rampGroup.position.set(-1.0, -1.8, 0);
      group.add(rampGroup);

      const rampShape = new THREE.Shape();
      rampShape.moveTo(-2.5, 0);
      rampShape.lineTo(2.5, 0);
      rampShape.lineTo(2.5, 2.33); // tan(25)*5
      rampShape.closePath();

      const extrudeSettings = { depth: 2.2, bevelEnabled: false };
      const rampGeo = new THREE.ExtrudeGeometry(rampShape, extrudeSettings);
      rampGeo.translate(0, 0, -1.1);
      const rampMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.6, metalness: 0.2 });
      const rampMesh = new THREE.Mesh(rampGeo, rampMat);
      rampGroup.add(rampMesh);

      // Crate / Block resting on inclined plane
      const blockGroup = new THREE.Group();
      // Position along the incline slope
      blockGroup.position.set(0.3, -0.6, 0);
      blockGroup.rotation.z = Math.atan2(2.33, 5); // 25 deg tilt
      group.add(blockGroup);

      const boxMesh = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.8, 1.2),
        new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.3, metalness: 0.4, emissive: 0x0369a1, emissiveIntensity: 0.4 })
      );
      boxMesh.position.y = 0.4;
      blockGroup.add(boxMesh);
      addAnchor(boxMesh, 'সরণশীল বস্তু (ভর m)', 'Moving Object (Mass m)', 'm', '#38bdf8');

      // Applied Force Arrow F pulling up the slope
      const arrowF = new THREE.ArrowHelper(
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(0.6, 0.4, 0),
        1.8,
        0x10b981,
        0.4,
        0.25
      );
      blockGroup.add(arrowF);
      addAnchor(arrowF, 'প্রযুক্ত বল F (ধনাত্মক কাজ)', 'Applied Force F (Positive Work)', 'F', '#10b981');

      // Normal Force Arrow N perpendicular to slope
      const arrowN = new THREE.ArrowHelper(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(0, 0.8, 0),
        1.4,
        0xf59e0b,
        0.3,
        0.2
      );
      blockGroup.add(arrowN);
      addAnchor(arrowN, 'অভিলম্ব প্রতিক্রিয়া N (কাজ = ০)', 'Normal Reaction N (Work = 0)', 'N', '#f59e0b');

      // Gravity Force W = mg pointing straight down
      const arrowW = new THREE.ArrowHelper(
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0, 0, 0),
        1.8,
        0xef4444,
        0.4,
        0.25
      );
      blockGroup.add(arrowW);
      addAnchor(arrowW, 'অভিকর্ষ বল W = mg (ঋণাত্মক কাজ)', 'Gravity Force W = mg', 'mg', '#ef4444');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 2: কাজ ও কোণের সম্পর্ক (W = F s cosθ & Vector Decomposition)
    // -----------------------------------------------------------------------
    if (slideId === 2) {
      // Horizontal Floor Track
      const track = new THREE.Mesh(
        new THREE.BoxGeometry(8, 0.2, 2.5),
        new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 })
      );
      track.position.set(0, -1.5, 0);
      group.add(track);

      // Mass Cart
      const cart = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 1.0, 1.2),
        new THREE.MeshStandardMaterial({ color: 0x6366f1, roughness: 0.3, metalness: 0.5, emissive: 0x4338ca, emissiveIntensity: 0.3 })
      );
      cart.position.set(-1.5, -0.9, 0);
      group.add(cart);
      addAnchor(cart, 'বস্তুর ভর m', 'Object Mass m', 'm', '#818cf8');

      // Pulling Vector F at angle 45 deg
      const angleRad = Math.PI / 4;
      const fLen = 3.2;
      const fDir = new THREE.Vector3(Math.cos(angleRad), Math.sin(angleRad), 0).normalize();

      const fArrow = new THREE.ArrowHelper(
        fDir,
        cart.position.clone().add(new THREE.Vector3(0.8, 0, 0)),
        fLen,
        0x10b981,
        0.5,
        0.3
      );
      group.add(fArrow);
      addAnchor(fArrow, 'প্রযুক্ত টান বল F', 'Tension Force F', 'F', '#10b981');

      // Horizontal Component F*cos(theta) along motion
      const fxLen = fLen * Math.cos(angleRad);
      const fxArrow = new THREE.ArrowHelper(
        new THREE.Vector3(1, 0, 0),
        cart.position.clone().add(new THREE.Vector3(0.8, 0, 0)),
        fxLen,
        0x38bdf8,
        0.4,
        0.25
      );
      group.add(fxArrow);
      addAnchor(fxArrow, 'কার্যকরী উপাংশ F cosθ', 'Effective Force (F cosθ)', 'F cosθ', '#38bdf8');

      // Vertical Component F*sin(theta)
      const fyLen = fLen * Math.sin(angleRad);
      const fyArrow = new THREE.ArrowHelper(
        new THREE.Vector3(0, 1, 0),
        cart.position.clone().add(new THREE.Vector3(0.8 + fxLen, 0, 0)),
        fyLen,
        0xf43f5e,
        0.4,
        0.25
      );
      group.add(fyArrow);
      addAnchor(fyArrow, 'উল্লম্ব উপাংশ F sinθ', 'Vertical Force (F sinθ)', 'F sinθ', '#f43f5e');

      // Angle Arc Ring
      const arcGeo = new THREE.RingGeometry(1.2, 1.25, 32, 1, 0, angleRad);
      const arcMat = new THREE.MeshBasicMaterial({ color: 0xfacc15, side: THREE.DoubleSide });
      const arcMesh = new THREE.Mesh(arcGeo, arcMat);
      arcMesh.position.copy(cart.position).add(new THREE.Vector3(0.8, 0, 0.05));
      group.add(arcMesh);
      addAnchor(arcMesh, 'কোণ θ (০° ≤ θ ≤ ৯০°)', 'Angle θ between F and s', 'θ = 45°', '#facc15');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 3: শক্তির রূপ ও রূপান্তর (Hydroelectric Turbine Unit)
    // -----------------------------------------------------------------------
    if (slideId === 3) {
      // Penstock Incline Pipe (Falling Water)
      const pipeGeo = new THREE.CylinderGeometry(0.5, 0.5, 4.5, 24);
      pipeGeo.rotateZ(Math.PI / 3);
      const pipeMat = new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.5, roughness: 0.2 });
      const pipe = new THREE.Mesh(pipeGeo, pipeMat);
      pipe.position.set(-2.5, 1.2, 0);
      group.add(pipe);
      addAnchor(pipe, 'জলবিদ্যুৎ পেনস্টক পাইপ', 'Water Penstock (Potential Energy)', 'Ep = mgh', '#38bdf8');

      // Turbine Housing Base
      const turbBase = new THREE.Mesh(
        new THREE.CylinderGeometry(1.4, 1.5, 1.0, 32),
        new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.7, roughness: 0.3 })
      );
      turbBase.position.set(0, -1.4, 0);
      group.add(turbBase);

      // Rotating Turbine Rotor Blades
      const rotorGroup = new THREE.Group();
      rotorGroup.position.set(0, -1.0, 0);
      group.add(rotorGroup);
      refs.turbineRotor = rotorGroup;

      for (let i = 0; i < 6; i++) {
        const blade = new THREE.Mesh(
          new THREE.BoxGeometry(0.8, 0.1, 0.3),
          new THREE.MeshStandardMaterial({ color: 0x06b6d4, metalness: 0.8, roughness: 0.2, emissive: 0x0891b2, emissiveIntensity: 0.5 })
        );
        const angle = (i * Math.PI * 2) / 6;
        blade.position.set(Math.cos(angle) * 0.8, 0, Math.sin(angle) * 0.8);
        blade.rotation.y = -angle;
        rotorGroup.add(blade);
      }
      addAnchor(rotorGroup, 'ঘূর্ণায়মান টারবাইন (যান্ত্রিক শক্তি)', 'Spinning Turbine Runner (Ek)', 'Ek = ½Iω²', '#06b6d4');

      // Central Vertical Drive Shaft
      const shaft = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.15, 2.2, 16),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9 })
      );
      shaft.position.set(0, 0.1, 0);
      group.add(shaft);

      // Dynamo Generator Stator at Top
      const gen = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.2, 1.4, 24),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.6, roughness: 0.3, emissive: 0xd97706, emissiveIntensity: 0.4 })
      );
      gen.position.set(0, 1.6, 0);
      group.add(gen);
      addAnchor(gen, 'জেনারেটর (বৈদ্যুতিক শক্তি উৎপাদন)', 'Electric Generator Dynamo', 'Output Power', '#f59e0b');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 4: গতিশক্তি ও এর সমীকরণ (Kinetic Energy Cart & Velocity Trail)
    // -----------------------------------------------------------------------
    if (slideId === 4) {
      // Linear Runway Track
      const track = new THREE.Mesh(
        new THREE.BoxGeometry(9, 0.25, 2.8),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.6 })
      );
      track.position.set(0, -1.4, 0);
      group.add(track);

      // Distance graduation posts
      for (let x = -3.5; x <= 3.5; x += 1.75) {
        const post = new THREE.Mesh(
          new THREE.CylinderGeometry(0.04, 0.04, 0.8, 12),
          new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
        );
        post.position.set(x, -1.0, 1.4);
        group.add(post);
      }

      // Streamlined High-Speed Vehicle
      const carGroup = new THREE.Group();
      carGroup.position.set(-1.0, -0.9, 0);
      group.add(carGroup);
      refs.cart = carGroup;

      const carBody = new THREE.Mesh(
        new THREE.ConeGeometry(0.7, 2.2, 16),
        new THREE.MeshStandardMaterial({ color: 0x0ea5e9, roughness: 0.2, metalness: 0.8, emissive: 0x0284c7, emissiveIntensity: 0.5 })
      );
      carBody.rotation.z = -Math.PI / 2;
      carGroup.add(carBody);

      // Velocity Arrow Vector
      const vArrow = new THREE.ArrowHelper(
        new THREE.Vector3(1, 0, 0),
        new THREE.Vector3(1.1, 0, 0),
        2.2,
        0x10b981,
        0.5,
        0.3
      );
      carGroup.add(vArrow);
      addAnchor(vArrow, 'বেগ ভেক্টর v', 'Velocity Vector v', 'v', '#10b981');

      // Kinetic Energy Glow Aura
      const aura = new THREE.Mesh(
        new THREE.SphereGeometry(1.2, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.2, wireframe: true })
      );
      carGroup.add(aura);
      addAnchor(carGroup, 'গতিশক্তি Ek = ½mv²', 'Kinetic Energy Ek = ½mv²', 'Ek', '#38bdf8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 5: বিভবশক্তি ও অভিকর্ষীয় বিভবশক্তি (Potential Energy Tower)
    // -----------------------------------------------------------------------
    if (slideId === 5) {
      // Derrick Scaffold Tower
      const tower = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 5.0, 1.6),
        new THREE.MeshStandardMaterial({ color: 0x334155, wireframe: true })
      );
      tower.position.set(-1.5, 0, 0);
      group.add(tower);

      // Top Pulley Winch
      const pulley = new THREE.Mesh(
        new THREE.TorusGeometry(0.4, 0.08, 16, 32),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8 })
      );
      pulley.position.set(-1.5, 2.4, 0);
      group.add(pulley);

      // Suspended Mass Block at height h
      const load = new THREE.Mesh(
        new THREE.CylinderGeometry(0.6, 0.6, 0.9, 24),
        new THREE.MeshStandardMaterial({ color: 0xf43f5e, metalness: 0.5, roughness: 0.3, emissive: 0xbe123c, emissiveIntensity: 0.5 })
      );
      load.position.set(-1.5, 1.2, 0);
      group.add(load);
      addAnchor(load, 'উচ্চতায় সংরক্ষিত ভর m', 'Elevated Mass m', 'm', '#f43f5e');

      // Suspension cable
      const cable = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.03, 1.2, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      cable.position.set(-1.5, 1.8, 0);
      group.add(cable);

      // Height Measurement Scale (0 to h)
      const hArrow = new THREE.ArrowHelper(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(0.5, -2.4, 0),
        3.6,
        0x38bdf8,
        0.4,
        0.25
      );
      group.add(hArrow);
      addAnchor(hArrow, 'উল্লম্ব উচ্চতা h', 'Elevation Height h', 'h', '#38bdf8');

      // Potential Energy Equation Emblem
      const plate = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 0.8, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x0284c7, emissiveIntensity: 0.3 })
      );
      plate.position.set(2.0, 1.2, 0);
      group.add(plate);
      addAnchor(plate, 'বিভবশক্তি Ep = mgh', 'Potential Energy Ep = mgh', 'Ep', '#f43f5e');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 6: স্প্রিং বিভবশক্তি (Elastic Potential Energy Ep = ½kx²)
    // -----------------------------------------------------------------------
    if (slideId === 6) {
      // Wall Anchor on Left
      const wall = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 3.5, 3.0),
        new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.7 })
      );
      wall.position.set(-3.2, 0, 0);
      group.add(wall);
      addAnchor(wall, 'দৃঢ় অবলম্বন', 'Rigid Anchor Wall', 'Wall', '#94a3b8');

      // Guide rail bed
      const bed = new THREE.Mesh(
        new THREE.BoxGeometry(6.5, 0.2, 1.8),
        new THREE.MeshStandardMaterial({ color: 0x1e293b })
      );
      bed.position.set(0, -1.2, 0);
      group.add(bed);

      // Spring Coils (Created as helical torus chain)
      const springGroup = new THREE.Group();
      springGroup.position.set(-2.8, -0.6, 0);
      group.add(springGroup);
      refs.springCoil = springGroup;

      const coilsCount = 10;
      for (let i = 0; i < coilsCount; i++) {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(0.45, 0.07, 12, 24),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.8, roughness: 0.2 })
        );
        ring.position.x = i * 0.3;
        ring.rotation.y = Math.PI / 4;
        springGroup.add(ring);
      }

      // Attached Inertia Block
      const block = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 1.2, 1.2),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.4, roughness: 0.3, emissive: 0xd97706, emissiveIntensity: 0.4 })
      );
      block.position.set(0.5, -0.6, 0);
      group.add(block);
      refs.springMass = block;
      addAnchor(block, 'সংকুচিত/প্রসারিত ভর m', 'Inertia Block Mass m', 'm', '#f59e0b');

      // Restoring Force Vector Fs = -kx
      const fArrow = new THREE.ArrowHelper(
        new THREE.Vector3(-1, 0, 0),
        new THREE.Vector3(0.5, 0.3, 0),
        1.5,
        0xef4444,
        0.35,
        0.2
      );
      group.add(fArrow);
      addAnchor(fArrow, 'প্রত্যায়নী বল Fs = -kx', 'Restoring Force Fs = -kx', 'Fs', '#ef4444');

      // Spring Potential Indicator
      const labelBadge = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0x10b981 })
      );
      labelBadge.position.set(-1.2, 0.4, 0);
      group.add(labelBadge);
      addAnchor(labelBadge, 'স্থিতিস্থাপক বিভবশক্তি Ep = ½kx²', 'Elastic Ep = ½kx²', 'Ep', '#10b981');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 7: শক্তির সংরক্ষণশীলতা নীতি (Free Fall Mechanical Energy Proof)
    // -----------------------------------------------------------------------
    if (slideId === 7) {
      // High Drop Tower Scaffold
      const tower = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 5.8, 1.2),
        new THREE.MeshStandardMaterial({ color: 0x334155, wireframe: true })
      );
      tower.position.set(-2.0, 0, 0);
      group.add(tower);

      // Observation Platforms A, B, C
      const stageGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.1, 24);

      // Stage A (Top: Ep = max, Ek = 0)
      const stageA = new THREE.Mesh(stageGeo, new THREE.MeshStandardMaterial({ color: 0xf43f5e }));
      stageA.position.set(-2.0, 2.6, 0);
      group.add(stageA);
      addAnchor(stageA, 'বিন্দু A: Ep = mgh, Ek = 0', 'Point A (Top: Ep max)', 'A (h)', '#f43f5e');

      // Stage B (Mid: Ep + Ek = const)
      const stageB = new THREE.Mesh(stageGeo, new THREE.MeshStandardMaterial({ color: 0xf59e0b }));
      stageB.position.set(-2.0, 0.3, 0);
      group.add(stageB);
      addAnchor(stageB, 'বিন্দু B: Ep + Ek = mgh', 'Point B (Mid: Ep + Ek)', 'B (h-x)', '#f59e0b');

      // Stage C (Ground: Ep = 0, Ek = mgh)
      const stageC = new THREE.Mesh(stageGeo, new THREE.MeshStandardMaterial({ color: 0x10b981 }));
      stageC.position.set(-2.0, -2.6, 0);
      group.add(stageC);
      addAnchor(stageC, 'বিন্দু C: Ep = 0, Ek = mgh', 'Point C (Ground: Ek max)', 'C (0)', '#10b981');

      // Animated Falling Ball
      const ball = new THREE.Mesh(
        new THREE.SphereGeometry(0.35, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.8 })
      );
      ball.position.set(-2.0, 2.6, 0);
      group.add(ball);
      refs.freeFallBall = ball;

      // Energy Bar Gauges on Right (Total Energy = Ep + Ek = Constant)
      const gaugeFrame = new THREE.Mesh(
        new THREE.BoxGeometry(2.0, 5.2, 0.4),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.9 })
      );
      gaugeFrame.position.set(1.8, 0, 0);
      group.add(gaugeFrame);

      // Ep cylinder (Rose)
      const epGauge = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 2.4, 16),
        new THREE.MeshStandardMaterial({ color: 0xf43f5e, emissive: 0x9f1239, emissiveIntensity: 0.6 })
      );
      epGauge.position.set(1.3, 0.8, 0.2);
      group.add(epGauge);
      refs.epGauge = epGauge;
      addAnchor(epGauge, 'বিভবশক্তি গেজ Ep', 'Potential Energy Ep', 'Ep', '#f43f5e');

      // Ek cylinder (Cyan)
      const ekGauge = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 2.4, 16),
        new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x0891b2, emissiveIntensity: 0.6 })
      );
      ekGauge.position.set(2.3, -0.8, 0.2);
      group.add(ekGauge);
      refs.ekGauge = ekGauge;
      addAnchor(ekGauge, 'গতিশক্তি গেজ Ek', 'Kinetic Energy Ek', 'Ek', '#06b6d4');

      // Total Constant Energy Header
      const totalHeader = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 12, 12),
        new THREE.MeshBasicMaterial({ color: 0x10b981 })
      );
      totalHeader.position.set(1.8, 2.8, 0);
      group.add(totalHeader);
      addAnchor(totalHeader, 'মোট যান্ত্রিক শক্তি E = Ep + Ek = ধ্রুবক', 'Conservation: E = const', 'E = mgh', '#10b981');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 8: সরল দোলক ও শক্তির রূপান্তর (Simple Pendulum Oscillation)
    // -----------------------------------------------------------------------
    if (slideId === 8) {
      // Ceiling bracket
      const ceiling = new THREE.Mesh(
        new THREE.BoxGeometry(4.0, 0.3, 1.2),
        new THREE.MeshStandardMaterial({ color: 0x475569 })
      );
      ceiling.position.set(0, 2.5, 0);
      group.add(ceiling);

      // Trajectory Arc Guide
      const arcCurve = new THREE.EllipseCurve(0, 2.5, 3.8, 3.8, -Math.PI * 0.7, -Math.PI * 0.3, false);
      const arcPoints = arcCurve.getPoints(50);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(arcPoints);
      const arcLine = new THREE.Line(arcGeo, new THREE.LineDashedMaterial({ color: 0x64748b, dashSize: 0.2, gapSize: 0.1 }));
      group.add(arcLine);

      // Pendulum Pivot Group
      const pivot = new THREE.Group();
      pivot.position.set(0, 2.5, 0);
      group.add(pivot);
      refs.pendulumPivot = pivot;

      // Suspension Rod / String
      const string = new THREE.Mesh(
        new THREE.CylinderGeometry(0.02, 0.02, 3.8, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      string.position.y = -1.9;
      pivot.add(string);

      // Metallic Bob Sphere
      const bob = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.9, roughness: 0.1, emissive: 0xd97706, emissiveIntensity: 0.5 })
      );
      bob.position.y = -3.8;
      pivot.add(bob);
      refs.pendulumBob = bob;
      addAnchor(bob, 'দোলক পিণ্ড (Bob)', 'Oscillating Pendulum Bob', 'Bob', '#f59e0b');

      // Extreme Left Marker (-A: Ep max, Ek = 0)
      const markL = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), new THREE.MeshBasicMaterial({ color: 0xf43f5e }));
      markL.position.set(-1.8, -0.9, 0);
      group.add(markL);
      addAnchor(markL, 'প্রান্তবিন্দু (-A): Ep = max, v=0', 'Extreme Point (Ep max)', '-A', '#f43f5e');

      // Extreme Right Marker (+A: Ep max, Ek = 0)
      const markR = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), new THREE.MeshBasicMaterial({ color: 0xf43f5e }));
      markR.position.set(1.8, -0.9, 0);
      group.add(markR);
      addAnchor(markR, 'প্রান্তবিন্দু (+A): Ep = max, v=0', 'Extreme Point (Ep max)', '+A', '#f43f5e');

      // Equilibrium Mean Position (O: Ek max, Ep min)
      const markO = new THREE.Mesh(new THREE.SphereGeometry(0.18, 12, 12), new THREE.MeshBasicMaterial({ color: 0x10b981 }));
      markO.position.set(0, -1.3, 0);
      group.add(markO);
      addAnchor(markO, 'সাম্যাবস্থা (O): Ek = max, Ep = 0', 'Mean Position (Ek max)', 'O (v max)', '#10b981');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 9: শক্তির উৎসসমূহ (Renewable Wind Turbine & Solar Photovoltaic)
    // -----------------------------------------------------------------------
    if (slideId === 9) {
      // Wind Turbine Tower on Left
      const windTower = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.35, 4.5, 24),
        new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.3, roughness: 0.5 })
      );
      windTower.position.set(-2.2, 0, 0);
      group.add(windTower);

      // Nacelle
      const nacelle = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.5, 1.0),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8 })
      );
      nacelle.position.set(-2.2, 2.3, 0);
      group.add(nacelle);

      // Rotating Rotor Hub & 3 Aerodynamic Blades
      const rotorGroup = new THREE.Group();
      rotorGroup.position.set(-2.2, 2.3, 0.55);
      group.add(rotorGroup);
      refs.windRotor = rotorGroup;

      for (let i = 0; i < 3; i++) {
        const blade = new THREE.Mesh(
          new THREE.BoxGeometry(0.16, 2.0, 0.05),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.4 })
        );
        blade.position.y = 1.0;
        const bladeArm = new THREE.Group();
        bladeArm.rotation.z = (i * Math.PI * 2) / 3;
        bladeArm.add(blade);
        rotorGroup.add(bladeArm);
      }
      addAnchor(rotorGroup, 'বায়ু টারবাইন (বায়ুপ্রবাহ শক্তি)', 'Wind Turbine Rotor (Renewable)', 'Wind P', '#38bdf8');

      // Solar Photovoltaic Panel on Right
      const panelGroup = new THREE.Group();
      panelGroup.position.set(1.8, -0.6, 0);
      panelGroup.rotation.x = -Math.PI / 6; // 30 deg solar tilt
      group.add(panelGroup);

      const panel = new THREE.Mesh(
        new THREE.BoxGeometry(2.8, 1.8, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x1e3a8a, metalness: 0.9, roughness: 0.1, emissive: 0x172554, emissiveIntensity: 0.6 })
      );
      panelGroup.add(panel);
      addAnchor(panelGroup, 'সৌর প্যানেল (ফটোভোল্টাইক শক্তি)', 'Solar PV Panel (Light to Electricity)', 'Solar PV', '#60a5fa');

      // Sun Emitter Sphere in Background
      const sun = new THREE.Mesh(
        new THREE.SphereGeometry(0.8, 24, 24),
        new THREE.MeshBasicMaterial({ color: 0xfbbf24 })
      );
      sun.position.set(2.4, 2.6, -2);
      group.add(sun);
      addAnchor(sun, 'প্রধান উৎস: সূর্য (সৌরশক্তি)', 'Primary Energy Source: Sun', 'Sun', '#fbbf24');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 10: পরিবেশের ওপর শক্তির প্রভাব (Green Energy vs Emissions)
    // -----------------------------------------------------------------------
    if (slideId === 10) {
      // Split Planet Earth Sphere
      const earthGeo = new THREE.SphereGeometry(1.8, 32, 32);
      const earthMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.5, emissive: 0x064e3b, emissiveIntensity: 0.4 });
      const earth = new THREE.Mesh(earthGeo, earthMat);
      earth.position.set(-1.4, 0, 0);
      group.add(earth);
      addAnchor(earth, 'সবুজ পৃথিবী (নবায়নযোগ্য শক্তি)', 'Green Earth (Renewable Eco-balance)', 'Eco', '#10b981');

      // Factory Smokestack on Right (Carbon Emissions)
      const stack = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.8, 3.2, 24),
        new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.8 })
      );
      stack.position.set(2.0, -0.4, 0);
      group.add(stack);

      // CO2 Particle Cloud volume
      const cloudGeo = new THREE.SphereGeometry(0.9, 16, 16);
      const cloudMat = new THREE.MeshStandardMaterial({ color: 0x64748b, transparent: true, opacity: 0.7 });
      const cloud = new THREE.Mesh(cloudGeo, cloudMat);
      cloud.position.set(2.0, 1.8, 0);
      group.add(cloud);
      addAnchor(cloud, 'কার্বন নিঃসরণ ও গ্রিনহাউস প্রভাব', 'CO₂ Industrial Emissions & Greenhouse', 'CO₂', '#f87171');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 11: ক্ষমতা ও ওয়াট (Water Motor Pump Station P = W/t)
    // -----------------------------------------------------------------------
    if (slideId === 11) {
      // Lower Reservoir (Ground Sump)
      const lowerTank = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 1.6, 1.0, 24),
        new THREE.MeshStandardMaterial({ color: 0x0284c7, transparent: true, opacity: 0.6 })
      );
      lowerTank.position.set(-2.0, -1.8, 0);
      group.add(lowerTank);
      addAnchor(lowerTank, 'ভূগর্ভস্থ জলাধার', 'Ground Reservoir Water', 'Sump', '#38bdf8');

      // Electric Motor Pump
      const motor = new THREE.Mesh(
        new THREE.CylinderGeometry(0.7, 0.7, 1.2, 24),
        new THREE.MeshStandardMaterial({ color: 0x059669, metalness: 0.7, emissive: 0x047857, emissiveIntensity: 0.5 })
      );
      motor.position.set(0, -1.2, 0);
      motor.rotation.z = Math.PI / 2;
      group.add(motor);
      refs.pumpImpeller = motor;
      addAnchor(motor, 'বৈদ্যুতিক মোটর পাম্প (ক্ষমতা P = W/t)', 'Electric Pump (P = W/t in Watts)', 'P = W/t', '#10b981');

      // Vertical Discharge Riser Pipe
      const pipe = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.12, 4.0, 16),
        new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8 })
      );
      pipe.position.set(1.5, 0.4, 0);
      group.add(pipe);

      // Elevated Overhead Tank at Top
      const roofTank = new THREE.Mesh(
        new THREE.CylinderGeometry(1.4, 1.4, 1.2, 24),
        new THREE.MeshStandardMaterial({ color: 0x0284c7, transparent: true, opacity: 0.7, emissive: 0x0369a1, emissiveIntensity: 0.4 })
      );
      roofTank.position.set(1.5, 2.2, 0);
      group.add(roofTank);
      addAnchor(roofTank, 'ছাদের ট্যাংক (উত্তোলিত কাজ mgh)', 'Elevated Tank (mgh Done in t sec)', '1 W = 1 J/s', '#38bdf8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 12: কর্মদক্ষতা ও গাণিতিক উদাহরণ (η = Eout / Ein * 100%)
    // -----------------------------------------------------------------------
    if (slideId === 12) {
      // Main Motor Housing
      const motorBody = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.2, 2.2, 32),
        new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.8, roughness: 0.2 })
      );
      motorBody.rotation.z = Math.PI / 2;
      group.add(motorBody);
      addAnchor(motorBody, 'মোটর আর্মেচার কোর', 'Electric Motor Core', 'Motor', '#94a3b8');

      // Input Electrical Terminal (Glowing Cyan: Pin = 100%)
      const inputTerminal = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 1.4, 16),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.9 })
      );
      inputTerminal.position.set(-2.0, 0, 0);
      inputTerminal.rotation.z = Math.PI / 2;
      group.add(inputTerminal);
      addAnchor(inputTerminal, 'প্রদত্ত মোট শক্তি (Ein = 100%)', 'Input Total Power (Pin)', 'Pin = 100%', '#38bdf8');

      // Output Rotating Drive Shaft (Useful Work: Pout = η * Pin)
      const outShaft = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.25, 1.6, 16),
        new THREE.MeshStandardMaterial({ color: 0x10b981, metalness: 0.9, emissive: 0x059669, emissiveIntensity: 0.8 })
      );
      outShaft.position.set(2.0, 0, 0);
      outShaft.rotation.z = Math.PI / 2;
      group.add(outShaft);
      refs.motorShaft = outShaft;
      addAnchor(outShaft, 'কার্যকর শক্তি (Eout = η × Ein)', 'Useful Output Power (Pout)', 'η = Pout/Pin', '#10b981');

      // Thermal Heat Loss Dissipation Fins on Top (Ploss = Pin - Pout)
      const heatFins = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 0.6, 1.6),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xdc2626, emissiveIntensity: 0.7 })
      );
      heatFins.position.set(0, 1.4, 0);
      group.add(heatFins);
      addAnchor(heatFins, 'অপচয়কৃত তাপশক্তি (Ploss = Pin - Pout)', 'Wasted Heat Energy (Ploss)', 'Ploss', '#ef4444');
      return;
    }
  }

  // =========================================================================
  // PHYSICS CHAPTER 5: PRESSURE AND STATES OF MATTER (পদার্থের অবস্থা ও চাপ)
  // =========================================================================
  if (chapter === 5) {
    // -----------------------------------------------------------------------
    // Slide 1: চাপ ও ঘনত্বের মৌলিক ধারণা (P = F/A: Sharp Needle vs Wide Block)
    // -----------------------------------------------------------------------
    if (slideId === 1) {
      // Deformable Foam Pad Base
      const base = new THREE.Mesh(
        new THREE.BoxGeometry(7, 0.6, 3),
        new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.8 })
      );
      base.position.set(0, -1.5, 0);
      group.add(base);

      // Left: Sharp Needle Penetration (Small Area -> Huge Pressure P = F/A)
      const needle = new THREE.Mesh(
        new THREE.ConeGeometry(0.12, 2.2, 16),
        new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.9, emissive: 0xb91c1c, emissiveIntensity: 0.6 })
      );
      needle.position.set(-2.0, -0.4, 0);
      group.add(needle);

      const fArrow1 = new THREE.ArrowHelper(
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(-2.0, 1.8, 0),
        1.4,
        0xef4444,
        0.35,
        0.2
      );
      group.add(fArrow1);
      addAnchor(needle, 'তীক্ষ্ণ সুই (ক্ষুদ্র ক্ষেত্রফল A → উচ্চ চাপ P)', 'Sharp Tip (Small Area A → High Pressure)', 'P = F/A ↑↑', '#ef4444');

      // Right: Wide Flat Base (Large Area -> Low Pressure)
      const block = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 0.8, 1.8),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.4, emissive: 0x0284c7, emissiveIntensity: 0.4 })
      );
      block.position.set(2.0, -0.8, 0);
      group.add(block);

      const fArrow2 = new THREE.ArrowHelper(
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(2.0, 1.8, 0),
        1.4,
        0x38bdf8,
        0.35,
        0.2
      );
      group.add(fArrow2);
      addAnchor(block, 'প্রশস্ত ব্লক (বৃহৎ ক্ষেত্রফল A → কম চাপ P)', 'Broad Base (Large Area A → Low Pressure)', 'P = F/A ↓↓', '#38bdf8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 2: তরলের অভ্যন্তরে চাপ (P = hρg & 3 Depth Parabolic Streams)
    // -----------------------------------------------------------------------
    if (slideId === 2) {
      // Tall Transparent Water Column Cylinder
      const cylGeo = new THREE.CylinderGeometry(1.2, 1.2, 5.0, 32, 1, true);
      const cylMat = new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.35, roughness: 0.1 });
      const cyl = new THREE.Mesh(cylGeo, cylMat);
      cyl.position.set(-1.8, 0, 0);
      group.add(cyl);

      // Blue Liquid Water Volume
      const waterGeo = new THREE.CylinderGeometry(1.15, 1.15, 4.8, 32);
      const waterMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, transparent: true, opacity: 0.65, emissive: 0x0369a1, emissiveIntensity: 0.3 });
      const water = new THREE.Mesh(waterGeo, waterMat);
      water.position.set(-1.8, -0.1, 0);
      group.add(water);
      addAnchor(water, 'তরল স্তম্ভ (ঘনত্ব ρ = 1000 kg/m³)', 'Water Column (Density ρ)', 'P = hρg', '#38bdf8');

      // 3 Depth Spout Holes with Parabolic Water Streams
      // Hole 1 (Shallow depth h1 -> low pressure, short jet)
      const stream1 = new THREE.Mesh(
        new THREE.TorusGeometry(1.0, 0.05, 8, 24, Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
      );
      stream1.position.set(-0.6, 0.8, 0);
      group.add(stream1);
      addAnchor(stream1, 'অল্প গভীরতা h1 (কম চাপ)', 'Shallow Depth h1 (Low Pressure)', 'P1 = h1ρg', '#93c5fd');

      // Hole 2 (Mid depth h2 -> medium jet)
      const stream2 = new THREE.Mesh(
        new THREE.TorusGeometry(1.8, 0.06, 8, 24, Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0x0284c7 })
      );
      stream2.position.set(-0.6, -0.2, 0);
      group.add(stream2);

      // Hole 3 (Deepest h3 -> maximum pressure P = hρg, longest stream)
      const stream3 = new THREE.Mesh(
        new THREE.TorusGeometry(2.8, 0.08, 8, 24, Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0x0369a1 })
      );
      stream3.position.set(-0.6, -1.4, 0);
      group.add(stream3);
      addAnchor(stream3, 'সর্বোচ্চ গভীরতা h3 (সর্বোচ্চ চাপ ও দ্রুতি)', 'Deepest Spout (Maximum Pressure)', 'P3 = h3ρg max', '#1d4ed8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 3: প্যাসকেলের সূত্র ও হাইড্রোলিক প্রেস (F2/F1 = A2/A1 & Car Lift)
    // -----------------------------------------------------------------------
    if (slideId === 3) {
      // Hydraulic connecting pipeline at bottom
      const pipe = new THREE.Mesh(
        new THREE.BoxGeometry(4.8, 0.4, 0.6),
        new THREE.MeshStandardMaterial({ color: 0x0284c7, transparent: true, opacity: 0.7 })
      );
      pipe.position.set(0, -1.8, 0);
      group.add(pipe);

      // Small Cylinder A1 (Left)
      const smallCyl = new THREE.Mesh(
        new THREE.CylinderGeometry(0.4, 0.4, 2.0, 24, 1, true),
        new THREE.MeshPhysicalMaterial({ color: 0x64748b, transparent: true, opacity: 0.4 })
      );
      smallCyl.position.set(-1.8, -0.8, 0);
      group.add(smallCyl);

      // Small Piston
      const smallPiston = new THREE.Mesh(
        new THREE.CylinderGeometry(0.38, 0.38, 0.3, 24),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.5 })
      );
      smallPiston.position.set(-1.8, -0.4, 0);
      group.add(smallPiston);
      refs.smallPiston = smallPiston;
      addAnchor(smallPiston, 'ক্ষুদ্র পিস্টন (A1, প্রযুক্ত বল F1)', 'Small Piston (Area A1, Force F1)', 'F1 / A1', '#f59e0b');

      // Large Cylinder A2 (Right)
      const largeCyl = new THREE.Mesh(
        new THREE.CylinderGeometry(1.3, 1.3, 2.0, 32, 1, true),
        new THREE.MeshPhysicalMaterial({ color: 0x64748b, transparent: true, opacity: 0.4 })
      );
      largeCyl.position.set(1.5, -0.8, 0);
      group.add(largeCyl);

      // Large Lifting Piston Ram
      const largePistonGroup = new THREE.Group();
      largePistonGroup.position.set(1.5, -0.4, 0);
      group.add(largePistonGroup);
      refs.largePiston = largePistonGroup;

      const largePistonMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(1.28, 1.28, 0.3, 32),
        new THREE.MeshStandardMaterial({ color: 0x10b981, metalness: 0.8, emissive: 0x059669, emissiveIntensity: 0.5 })
      );
      largePistonGroup.add(largePistonMesh);

      // Lifted Platform & Passenger Car Model
      const carPlatform = new THREE.Mesh(
        new THREE.BoxGeometry(2.6, 0.15, 1.8),
        new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8 })
      );
      carPlatform.position.y = 0.2;
      largePistonGroup.add(carPlatform);

      // Car body
      const carBody = new THREE.Mesh(
        new THREE.BoxGeometry(2.0, 0.7, 1.2),
        new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.2, metalness: 0.7, emissive: 0xb91c1c, emissiveIntensity: 0.4 })
      );
      carBody.position.y = 0.65;
      largePistonGroup.add(carBody);

      // Car roof
      const carRoof = new THREE.Mesh(
        new THREE.BoxGeometry(1.1, 0.5, 1.0),
        new THREE.MeshStandardMaterial({ color: 0x0f172a })
      );
      carRoof.position.set(-0.1, 1.25, 0);
      largePistonGroup.add(carRoof);
      addAnchor(largePistonGroup, 'বৃহৎ পিস্টনে উত্তোলিত গাড়ি (বল বৃদ্ধি F2 = F1 × A2/A1)', 'Car Lifted (Force Multiplied)', 'F2 = F1(A2/A1)', '#10b981');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 4: প্লবতা ও আর্কিমিডিসের সূত্র (Buoyancy Force FB & Displaced Fluid)
    // -----------------------------------------------------------------------
    if (slideId === 4) {
      // Main Fluid Beaker
      const beaker = new THREE.Mesh(
        new THREE.CylinderGeometry(1.6, 1.6, 3.4, 32, 1, true),
        new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.35, roughness: 0.1 })
      );
      beaker.position.set(-1.0, -0.6, 0);
      group.add(beaker);

      // Fluid inside
      const water = new THREE.Mesh(
        new THREE.CylinderGeometry(1.55, 1.55, 2.6, 32),
        new THREE.MeshStandardMaterial({ color: 0x0284c7, transparent: true, opacity: 0.65, emissive: 0x0369a1, emissiveIntensity: 0.3 })
      );
      water.position.set(-1.0, -0.9, 0);
      group.add(water);

      // Submerged Test Cylinder
      const subObj = new THREE.Mesh(
        new THREE.CylinderGeometry(0.6, 0.6, 1.2, 24),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.6, roughness: 0.3, emissive: 0xd97706, emissiveIntensity: 0.4 })
      );
      subObj.position.set(-1.0, -0.6, 0);
      group.add(subObj);
      refs.submergedObj = subObj;

      // Upward Buoyancy Vector FB = V*rho*g (Cyan arrow)
      const fbArrow = new THREE.ArrowHelper(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(-1.0, 0.1, 0),
        1.8,
        0x06b6d4,
        0.4,
        0.25
      );
      group.add(fbArrow);
      addAnchor(fbArrow, 'ঊর্ধ্বমুখী প্লবতা বল FB = Vρg', 'Upward Buoyant Force FB = Vρg', 'FB = Vρg', '#06b6d4');

      // Downward Gravity Weight Vector W = mg (Rose arrow)
      const wArrow = new THREE.ArrowHelper(
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(-1.0, -0.7, 0),
        1.8,
        0xf43f5e,
        0.4,
        0.25
      );
      group.add(wArrow);
      addAnchor(wArrow, 'বস্তুর নিজস্ব ওজন W = mg', 'True Weight W = mg', 'W = mg', '#f43f5e');

      // Overflow Beaker on Right (Displaced Liquid)
      const overflowBeaker = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 0.8, 1.4, 24),
        new THREE.MeshStandardMaterial({ color: 0x0284c7, transparent: true, opacity: 0.6, emissive: 0x0284c7, emissiveIntensity: 0.4 })
      );
      overflowBeaker.position.set(1.8, -1.4, 0);
      group.add(overflowBeaker);
      addAnchor(overflowBeaker, 'অপসারিত তরলের ওজন = প্লবতা বল', 'Displaced Fluid Weight = Buoyant Force', 'V_displaced', '#38bdf8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 5: বস্তুর ভাসন ও নিমজ্জন (Floating, Hovering, Sinking Conditions)
    // -----------------------------------------------------------------------
    if (slideId === 5) {
      // Large Aquarium Tank
      const tank = new THREE.Mesh(
        new THREE.BoxGeometry(6.5, 3.8, 2.5),
        new THREE.MeshPhysicalMaterial({ color: 0x0284c7, transparent: true, opacity: 0.35, roughness: 0.1 })
      );
      tank.position.set(0, -0.4, 0);
      group.add(tank);

      // Water level line
      const waterLine = new THREE.Mesh(
        new THREE.PlaneGeometry(6.4, 2.4),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.4, side: THREE.DoubleSide })
      );
      waterLine.rotation.x = -Math.PI / 2;
      waterLine.position.set(0, 1.2, 0);
      group.add(waterLine);

      // 1. Wood/Cork Floating on surface (W = FB, rho < rho_w)
      const wood = new THREE.Mesh(
        new THREE.BoxGeometry(1.0, 0.8, 1.0),
        new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.6, emissive: 0xb45309, emissiveIntensity: 0.3 })
      );
      wood.position.set(-2.0, 1.0, 0);
      group.add(wood);
      addAnchor(wood, 'ভাসন (W = FB, ρ < ρ_w)', 'Floating (Density ρ < ρ_water)', 'ρ < 1000', '#f59e0b');

      // 2. Plastic Sphere Hovering Submerged in Middle (W = FB, rho = rho_w)
      const hoverSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.3, emissive: 0x059669, emissiveIntensity: 0.5 })
      );
      hoverSphere.position.set(0, -0.4, 0);
      group.add(hoverSphere);
      addAnchor(hoverSphere, 'সম্পূর্ণ নিমজ্জিত ভাসন (W = FB, ρ = ρ_w)', 'Neutrally Buoyant (ρ = ρ_water)', 'ρ = 1000', '#10b981');

      // 3. Dense Metal Block Sunk to Bottom (W > FB, rho > rho_w)
      const sunkMetal = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 0.6, 0.9),
        new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.8, roughness: 0.2, emissive: 0xb91c1c, emissiveIntensity: 0.5 })
      );
      sunkMetal.position.set(2.0, -1.9, 0);
      group.add(sunkMetal);
      addAnchor(sunkMetal, 'নিমজ্জন (W > FB, ρ > ρ_w)', 'Sunk to Bottom (ρ > ρ_water)', 'ρ > 1000', '#ef4444');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 6: জাহাজের ভাসন ও প্লবতার প্রয়োগ (Hollow Steel Ship Hull)
    // -----------------------------------------------------------------------
    if (slideId === 6) {
      // Ocean Water Surface with Gentle Waves
      const water = new THREE.Mesh(
        new THREE.BoxGeometry(8, 0.6, 4.5),
        new THREE.MeshPhysicalMaterial({ color: 0x0284c7, transparent: true, opacity: 0.7, roughness: 0.1 })
      );
      water.position.set(0, -1.4, 0);
      group.add(water);

      // Ship Hull Group
      const shipGroup = new THREE.Group();
      shipGroup.position.set(0, -0.7, 0);
      group.add(shipGroup);
      refs.shipHull = shipGroup;

      // Realistic Cargo Hull
      const hullGeo = new THREE.CylinderGeometry(1.2, 0.7, 4.5, 16, 1, false, 0, Math.PI);
      hullGeo.rotateZ(Math.PI / 2);
      hullGeo.rotateX(Math.PI);
      const hullMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.7, roughness: 0.4 });
      const hull = new THREE.Mesh(hullGeo, hullMat);
      shipGroup.add(hull);

      // Upper Deck Superstructure & Bridge
      const bridge = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 1.1, 1.4),
        new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 })
      );
      bridge.position.set(0.8, 1.0, 0);
      shipGroup.add(bridge);

      // Cargo Containers on Deck
      const c1 = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.6, 0.8), new THREE.MeshStandardMaterial({ color: 0xef4444 }));
      c1.position.set(-1.0, 0.5, 0);
      shipGroup.add(c1);

      const c2 = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.6, 0.8), new THREE.MeshStandardMaterial({ color: 0x38bdf8 }));
      c2.position.set(-1.0, 1.1, 0);
      shipGroup.add(c2);

      addAnchor(shipGroup, 'ফাঁপা ইস্পাত কাঠামো (গড় ঘনত্ব < জলের ঘনত্ব)', 'Hollow Steel Ship (Average Density < Water)', 'ρ_avg < ρ_w', '#38bdf8');

      // Center of Buoyancy B & Center of Gravity G markers
      const markerB = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 12), new THREE.MeshBasicMaterial({ color: 0x06b6d4 }));
      markerB.position.set(0, 0.2, 0.9);
      shipGroup.add(markerB);
      addAnchor(markerB, 'প্লবতা কেন্দ্র (B)', 'Center of Buoyancy (B)', 'B', '#06b6d4');

      const markerG = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 12), new THREE.MeshBasicMaterial({ color: 0xf43f5e }));
      markerG.position.set(0, 0.8, 0.9);
      shipGroup.add(markerG);
      addAnchor(markerG, 'ভারকেন্দ্র (G)', 'Center of Gravity (G)', 'G', '#f43f5e');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 7: বায়ুমণ্ডলীয় চাপ ও টরিসেলির ব্যারোমিটার (76 cm-Hg & Vacuum)
    // -----------------------------------------------------------------------
    if (slideId === 7) {
      // Mercury Dish / Basin at Bottom
      const basin = new THREE.Mesh(
        new THREE.CylinderGeometry(2.0, 1.8, 0.8, 32),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.95, roughness: 0.1, emissive: 0x64748b, emissiveIntensity: 0.3 })
      );
      basin.position.set(0, -2.0, 0);
      group.add(basin);
      addAnchor(basin, 'পারদ পাত্র (ঘনত্ব ρ = 13600 kg/m³)', 'Mercury Reservoir (ρ = 13,600 kg/m³)', 'Hg (13.6)', '#94a3b8');

      // Downward Atmospheric Pressure Arrows P0 pushing on open mercury surface
      const p0Arrow1 = new THREE.ArrowHelper(new THREE.Vector3(0, -1, 0), new THREE.Vector3(-1.2, -0.6, 0), 0.9, 0x38bdf8, 0.25, 0.15);
      group.add(p0Arrow1);
      const p0Arrow2 = new THREE.ArrowHelper(new THREE.Vector3(0, -1, 0), new THREE.Vector3(1.2, -0.6, 0), 0.9, 0x38bdf8, 0.25, 0.15);
      group.add(p0Arrow2);
      addAnchor(p0Arrow1, 'বায়ুমণ্ডলীয় চাপ P0 = 101.3 kPa', 'Atmospheric Pressure P0 (1 atm)', 'P0 = 760 mmHg', '#38bdf8');

      // Inverted Glass Barometer Tube (1m long)
      const tube = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.2, 5.0, 24, 1, true),
        new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.3, roughness: 0.1 })
      );
      tube.position.set(0, 0.5, 0);
      group.add(tube);

      // Liquid Mercury Column rising to exactly 76 cm level
      const hgColumn = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.18, 3.8, 24),
        new THREE.MeshStandardMaterial({ color: 0xc0c7d4, metalness: 0.98, roughness: 0.05, emissive: 0x475569, emissiveIntensity: 0.5 })
      );
      hgColumn.position.set(0, -0.1, 0);
      group.add(hgColumn);
      addAnchor(hgColumn, '৭৬ সেমি পারদ স্তম্ভ (h = 76 cm-Hg)', '76 cm Mercury Column Height', 'h = 76 cm', '#e2e8f0');

      // Torricellian Vacuum at top (টরিসেলির শূন্যস্থান)
      const vacuum = new THREE.Mesh(
        new THREE.SphereGeometry(0.25, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.6 })
      );
      vacuum.position.set(0, 2.4, 0);
      group.add(vacuum);
      addAnchor(vacuum, 'টরিসেলির শূন্যস্থান (Torricellian Vacuum)', 'Torricellian Vacuum (Zero Air)', 'P = 0', '#c084fc');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 8: বায়ুমণ্ডলীয় চাপের পরিবর্তন ও আবহাওয়া (Aneroid Barometer Dial)
    // -----------------------------------------------------------------------
    if (slideId === 8) {
      // Aneroid Barometer Brass Dial Case
      const caseMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(2.4, 2.4, 0.5, 48),
        new THREE.MeshStandardMaterial({ color: 0xb45309, metalness: 0.85, roughness: 0.2 })
      );
      caseMesh.rotation.x = Math.PI / 2;
      group.add(caseMesh);

      // White Dial Face
      const dial = new THREE.Mesh(
        new THREE.CircleGeometry(2.2, 48),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 })
      );
      dial.position.z = 0.26;
      group.add(dial);

      // Weather sectors:
      // Left: Low Pressure (Storm / Red)
      const stormArc = new THREE.Mesh(
        new THREE.RingGeometry(1.6, 1.8, 24, 1, Math.PI * 0.6, Math.PI * 0.4),
        new THREE.MeshBasicMaterial({ color: 0xef4444 })
      );
      stormArc.position.z = 0.27;
      group.add(stormArc);
      addAnchor(stormArc, 'দ্রুত চাপ হ্রাস: নিম্নচাপ ও ঝড়-বৃষ্টি', 'Rapid Drop: Storm Alert (< 740 mmHg)', 'Storm', '#ef4444');

      // Right: High Pressure (Fair / Cyan)
      const fairArc = new THREE.Mesh(
        new THREE.RingGeometry(1.6, 1.8, 24, 1, 0, Math.PI * 0.4),
        new THREE.MeshBasicMaterial({ color: 0x10b981 })
      );
      fairArc.position.z = 0.27;
      group.add(fairArc);
      addAnchor(fairArc, 'উচ্চচাপ: শুষ্ক ও রৌদ্রোজ্জ্বল আবহাওয়া', 'High Pressure: Fair & Sunny (> 760 mmHg)', 'Fair', '#10b981');

      // Barometer Pointer Needle
      const needle = new THREE.Mesh(
        new THREE.ConeGeometry(0.1, 1.6, 8),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 0.6 })
      );
      needle.position.set(0, 0.7, 0.28);
      group.add(needle);
      addAnchor(needle, 'ব্যারোমিটারের নির্দেশক কাঁটা', 'Barometer Pointer Needle', 'P (mmHg)', '#facc15');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 9: পদার্থের চতুর্থ অবস্থা - প্লাজমা (Ionized Plasma Discharge Sphere)
    // -----------------------------------------------------------------------
    if (slideId === 9) {
      // Outer Glass Enclosure Sphere
      const glass = new THREE.Mesh(
        new THREE.SphereGeometry(2.2, 32, 32),
        new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.25, roughness: 0.05 })
      );
      group.add(glass);

      // High Voltage Central Electrode
      const electrode = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x1e1b4b, metalness: 0.9, emissive: 0x4f46e5, emissiveIntensity: 0.8 })
      );
      group.add(electrode);
      addAnchor(electrode, 'উচ্চ ভোল্টেজ কেন্দ্রীয় ইলেক্ট্রোড', 'High-Voltage Core Electrode', 'HV Core', '#818cf8');

      // Radiating Plasma Discharge Filaments (Dancing arcs)
      const filamentsGroup = new THREE.Group();
      group.add(filamentsGroup);
      refs.plasmaFilaments = filamentsGroup;

      const filamentColors = [0xa855f7, 0x06b6d4, 0xec4899, 0x3b82f6, 0x8b5cf6];
      for (let i = 0; i < 16; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 2.15;

        const endX = radius * Math.sin(phi) * Math.cos(theta);
        const endY = radius * Math.sin(phi) * Math.sin(theta);
        const endZ = radius * Math.cos(phi);

        const curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(endX * 0.4 + (Math.random() - 0.5) * 0.4, endY * 0.4 + (Math.random() - 0.5) * 0.4, endZ * 0.4),
          new THREE.Vector3(endX * 0.8 + (Math.random() - 0.5) * 0.3, endY * 0.8 + (Math.random() - 0.5) * 0.3, endZ * 0.8),
          new THREE.Vector3(endX, endY, endZ)
        ]);

        const tubeGeo = new THREE.TubeGeometry(curve, 20, 0.04, 6, false);
        const tubeMat = new THREE.MeshBasicMaterial({ color: filamentColors[i % filamentColors.length] });
        const tube = new THREE.Mesh(tubeGeo, tubeMat);
        filamentsGroup.add(tube);
      }
      addAnchor(filamentsGroup, 'আয়নিত প্লাজমা গ্যাস (পদার্থের ৪র্থ অবস্থা)', 'Ionized Plasma Stream (4th State of Matter)', 'Plasma', '#c084fc');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 10: স্থিতিস্থাপকতা, পীড়ন ও বিকৃতি (Stress & Strain Apparatus)
    // -----------------------------------------------------------------------
    if (slideId === 10) {
      // Rigid Upper Crosshead Clamp
      const beam = new THREE.Mesh(
        new THREE.BoxGeometry(3.5, 0.4, 1.2),
        new THREE.MeshStandardMaterial({ color: 0x475569 })
      );
      beam.position.set(0, 2.4, 0);
      group.add(beam);

      // Elastic Metal Test Wire (Original Length L)
      const wire = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 3.6, 12),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, metalness: 0.9, emissive: 0x0284c7, emissiveIntensity: 0.5 })
      );
      wire.position.set(0, 0.4, 0);
      group.add(wire);
      addAnchor(wire, 'স্থিতিস্থাপক তার (প্রস্থচ্ছেদ ক্ষেত্রফল A, আদি দৈর্ঘ্য L)', 'Elastic Wire (Original Length L)', 'A, L', '#38bdf8');

      // Tensile Stress Vector Arrow (Force / Area)
      const stressArrow = new THREE.ArrowHelper(
        new THREE.Vector3(0, -1, 0),
        new THREE.Vector3(0.5, 0.8, 0),
        1.5,
        0xf59e0b,
        0.35,
        0.2
      );
      group.add(stressArrow);
      addAnchor(stressArrow, 'পীড়ন = F/A (Stress)', 'Tensile Stress = F/A (N/m²)', 'F/A', '#f59e0b');

      // Slotted Weight Hanger at Bottom
      const hanger = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 0.8, 0.8, 24),
        new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.5, emissive: 0xb91c1c, emissiveIntensity: 0.5 })
      );
      hanger.position.set(0, -1.8, 0);
      group.add(hanger);
      addAnchor(hanger, 'ঝুলন্ত ভার F = mg (দৈর্ঘ্য বিকৃতি ΔL/L সৃষ্টি করে)', 'Hanging Load F = mg (Causes Strain ΔL/L)', 'mg', '#ef4444');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 11: হুকের সূত্র ও ইয়ংয়ের গুণাঙ্ক (Young's Modulus Y = FL / AΔL)
    // -----------------------------------------------------------------------
    if (slideId === 11) {
      // Searle's Dual-Wire Frame Support
      const frame = new THREE.Mesh(
        new THREE.BoxGeometry(3.0, 0.3, 1.0),
        new THREE.MeshStandardMaterial({ color: 0x334155 })
      );
      frame.position.set(0, 2.5, 0);
      group.add(frame);

      // Wire 1: Reference Wire (Left)
      const wireRef = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.03, 3.8, 8),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8 })
      );
      wireRef.position.set(-0.8, 0.4, 0);
      group.add(wireRef);
      addAnchor(wireRef, 'নির্দেশক তার (Reference Wire)', 'Reference Wire (Fixed L)', 'Ref Wire', '#94a3b8');

      // Wire 2: Experimental Test Wire (Right)
      const wireTest = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.03, 3.8, 8),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 })
      );
      wireTest.position.set(0.8, 0.4, 0);
      group.add(wireTest);
      addAnchor(wireTest, 'পরীক্ষাধীন তার (প্রসারণ ΔL)', 'Experimental Wire (Extends by ΔL)', 'ΔL', '#38bdf8');

      // Horizontal Spirit Level Connecting Two Wires
      const spiritLevel = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.12, 1.8, 16),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.5 })
      );
      spiritLevel.rotation.z = Math.PI / 2;
      spiritLevel.position.set(0, -1.5, 0);
      group.add(spiritLevel);
      addAnchor(spiritLevel, 'স্পিরিট লেভেল ও মাইক্রোমিটার স্ক্রু', 'Horizontal Spirit Level & Micrometer', 'Spirit Level', '#10b981');

      // Formula Emblem Board
      const board = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 0.8, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x0284c7, emissiveIntensity: 0.3 })
      );
      board.position.set(0, -2.4, 0);
      group.add(board);
      addAnchor(board, 'ইয়ংয়ের গুণাঙ্ক Y = FL / (AΔL)', 'Young’s Modulus Formula', 'Y = FL/AΔL', '#38bdf8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 12: বাস্তব জীবনে চাপ ও স্থিতিস্থাপকতার প্রয়োগ (Heavy Vehicle Dual Tyres & Suspension)
    // -----------------------------------------------------------------------
    if (slideId === 12) {
      // Twin Wide Road Tyres (Large Surface Area -> Decreases Surface Pressure)
      const tyreMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.9, metalness: 0.1 });
      const rimMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 });

      // Tyre 1 (Left)
      const t1 = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.8, 24), tyreMat);
      t1.rotation.z = Math.PI / 2;
      t1.position.set(-1.2, -0.8, 0);
      group.add(t1);

      // Tyre 2 (Right)
      const t2 = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.8, 24), tyreMat);
      t2.rotation.z = Math.PI / 2;
      t2.position.set(1.2, -0.8, 0);
      group.add(t2);
      addAnchor(t1, 'প্রশস্ত চাকা (ক্ষেত্রফল বৃদ্ধি → ভূমিতে চাপ হ্রাস)', 'Wide Heavy Tyres (Reduces Road Surface Pressure)', 'A ↑ → P ↓', '#38bdf8');

      // Heavy Vehicle Suspension Shock Absorber Coil Spring
      const springGroup = new THREE.Group();
      springGroup.position.set(0, 0.6, 0);
      group.add(springGroup);
      refs.suspensionSpring = springGroup;

      for (let i = 0; i < 7; i++) {
        const coil = new THREE.Mesh(
          new THREE.TorusGeometry(0.5, 0.09, 12, 24),
          new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8, roughness: 0.2 })
        );
        coil.rotation.x = Math.PI / 2;
        coil.position.y = (i - 3) * 0.24;
        springGroup.add(coil);
      }
      addAnchor(springGroup, 'স্থিতিস্থাপক স্প্রিং সাসপেনশন (শক শোষণ)', 'Elastic Shock Absorber Spring', 'Suspension', '#f59e0b');
      return;
    }
  }

  // =========================================================================
  // PHYSICS CHAPTER 6: EFFECT OF HEAT ON MATTER (বস্তুর উপর তাপের প্রভাব)
  // =========================================================================
  if (chapter === 6) {
    // -----------------------------------------------------------------------
    // Slide 1: তাপ ও তাপমাত্রা (Heat vs Temperature & Molecular Kinetic Box)
    // -----------------------------------------------------------------------
    if (slideId === 1) {
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(3.6, 2.8, 2.2),
        new THREE.MeshBasicMaterial({ color: 0x334155, wireframe: true })
      );
      group.add(box);

      // Gas / liquid molecules with thermal kinetic energy
      const molGroup = new THREE.Group();
      group.add(molGroup);
      refs.thermalMolecules = molGroup;

      for (let i = 0; i < 28; i++) {
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.12, 16, 16),
          new THREE.MeshStandardMaterial({ 
            color: i % 2 === 0 ? 0xf97316 : 0xef4444, 
            emissive: 0xea580c, 
            emissiveIntensity: 0.6 
          })
        );
        sphere.position.set(
          (Math.random() - 0.5) * 3.0,
          (Math.random() - 0.5) * 2.2,
          (Math.random() - 0.5) * 1.8
        );
        molGroup.add(sphere);
      }

      // Heat Flame underneath
      const flame = new THREE.Mesh(
        new THREE.ConeGeometry(0.5, 1.2, 16),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 1 })
      );
      flame.position.set(0, -1.8, 0);
      group.add(flame);

      addAnchor(box, 'তাপমাত্রা: অণুগুলোর গড় গতিশক্তি (T ∝ E_k)', 'Temperature: Average Kinetic Energy of Molecules', 'T (K)', '#38bdf8');
      addAnchor(flame, 'প্রদত্ত তাপশক্তি (Heat Energy Q)', 'Supplied Heat Energy', 'Q (J)', '#f97316');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 2: পদার্থের তাপমাত্রিক ধর্ম ও পারদ থার্মোমিটার
    // -----------------------------------------------------------------------
    if (slideId === 2) {
      const thermGroup = new THREE.Group();
      group.add(thermGroup);

      // Glass outer bulb
      const bulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 24, 24),
        new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.35, roughness: 0.1 })
      );
      bulb.position.set(0, -1.4, 0);
      thermGroup.add(bulb);

      // Red Mercury reservoir inside bulb
      const mercuryBulb = new THREE.Mesh(
        new THREE.SphereGeometry(0.58, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.6, metalness: 0.4 })
      );
      mercuryBulb.position.copy(bulb.position);
      thermGroup.add(mercuryBulb);

      // Glass Capillary Stem
      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.25, 3.2, 20),
        new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.35, roughness: 0.1 })
      );
      stem.position.set(0, 0.6, 0);
      thermGroup.add(stem);

      // Rising Mercury Column
      const mercuryCol = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.12, 2.2, 16),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.7 })
      );
      mercuryCol.position.set(0, 0.1, 0);
      thermGroup.add(mercuryCol);

      // Measurement tick marks along stem
      for (let i = 0; i <= 6; i++) {
        const mark = new THREE.Mesh(
          new THREE.BoxGeometry(0.35, 0.03, 0.05),
          new THREE.MeshBasicMaterial({ color: 0xffffff })
        );
        mark.position.set(0, -0.8 + i * 0.45, 0.25);
        thermGroup.add(mark);
      }

      addAnchor(mercuryBulb, 'পারদ কুন্ডলী (তরলের প্রসারণ ধর্ম)', 'Mercury Bulb Reservoir', 'Hg', '#ef4444');
      addAnchor(mercuryCol, 'কৈশিক নলে পারদ স্তম্ভের প্রসারণ (তাপমাত্রিক ধর্ম)', 'Expanding Mercury Column', 'Thermometric', '#38bdf8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 3: তাপমাত্রার বিভিন্ন স্কেল (Celsius, Fahrenheit, Kelvin)
    // -----------------------------------------------------------------------
    if (slideId === 3) {
      const scalesGroup = new THREE.Group();
      group.add(scalesGroup);

      const scales = [
        { name: 'সেলসিয়াস (°C)', sub: '০° - ১০০°C', x: -1.6, color: 0x06b6d4, height: 1.8 },
        { name: 'ফারেনহাইট (°F)', sub: '৩২° - ২১২°F', x: 0.0, color: 0xf59e0b, height: 2.2 },
        { name: 'কেলভিন (K)', sub: '২৭৩K - ৩৭৩K', x: 1.6, color: 0xa855f7, height: 2.0 },
      ];

      scales.forEach((sc) => {
        // Base stem
        const sStem = new THREE.Mesh(
          new THREE.CylinderGeometry(0.18, 0.18, 3.2, 16),
          new THREE.MeshPhysicalMaterial({ color: 0x475569, transparent: true, opacity: 0.4 })
        );
        sStem.position.set(sc.x, 0, 0);
        scalesGroup.add(sStem);

        // Fluid inside
        const sFluid = new THREE.Mesh(
          new THREE.CylinderGeometry(0.1, 0.1, sc.height, 16),
          new THREE.MeshStandardMaterial({ color: sc.color, emissive: sc.color, emissiveIntensity: 0.5 })
        );
        sFluid.position.set(sc.x, -1.6 + sc.height / 2, 0);
        scalesGroup.add(sFluid);

        // Bulb
        const sBulb = new THREE.Mesh(
          new THREE.SphereGeometry(0.35, 16, 16),
          new THREE.MeshStandardMaterial({ color: sc.color, emissive: sc.color, emissiveIntensity: 0.6 })
        );
        sBulb.position.set(sc.x, -1.6, 0);
        scalesGroup.add(sBulb);

        addAnchor(sStem, `${sc.name} (${sc.sub})`, `${sc.name} Scale`, sc.name.split(' ')[0], '#38bdf8');
      });
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 4: কঠিনের দৈর্ঘ্য প্রসারণ ও রেললাইনের ফাঁক (Railway Track Gap)
    // -----------------------------------------------------------------------
    if (slideId === 4) {
      const railGroup = new THREE.Group();
      group.add(railGroup);

      // Wooden / Concrete Sleepers
      for (let x = -2.8; x <= 2.8; x += 0.9) {
        const sleeper = new THREE.Mesh(
          new THREE.BoxGeometry(0.35, 0.2, 2.4),
          new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.9 })
        );
        sleeper.position.set(x, -0.6, 0);
        railGroup.add(sleeper);
      }

      // Left Iron Rail (Length L1)
      const railLeft = new THREE.Mesh(
        new THREE.BoxGeometry(2.6, 0.25, 0.15),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 })
      );
      railLeft.position.set(-1.4, -0.4, 0.6);
      railGroup.add(railLeft);

      // Right Iron Rail (With Expansion Gap)
      const railRight = new THREE.Mesh(
        new THREE.BoxGeometry(2.6, 0.25, 0.15),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 })
      );
      railRight.position.set(1.45, -0.4, 0.6);
      railGroup.add(railRight);

      // Second Track
      const railLeft2 = railLeft.clone();
      railLeft2.position.z = -0.6;
      railGroup.add(railLeft2);

      const railRight2 = railRight.clone();
      railRight2.position.z = -0.6;
      railGroup.add(railRight2);

      // Expansion Gap Marker
      const gapMarker = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.4, 0.2),
        new THREE.MeshBasicMaterial({ color: 0xfacc15, wireframe: true })
      );
      gapMarker.position.set(0.05, -0.4, 0.6);
      railGroup.add(gapMarker);

      addAnchor(railLeft, 'রেললাইন (লোহা: α = ১১.৫ × ১০⁻⁶ K⁻¹)', 'Iron Railway Track', 'Rail L₁', '#38bdf8');
      addAnchor(gapMarker, 'তাপীয় প্রসারণ ফাঁক (Expansion Gap)', 'Thermal Expansion Gap', 'Gap ΔL', '#facc15');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 5: দ্বৈতাতব পাত (Bimetallic Strip: পিতল + লোহা)
    // -----------------------------------------------------------------------
    if (slideId === 5) {
      const bimetalGroup = new THREE.Group();
      group.add(bimetalGroup);

      // Fixed Stand / Clamp
      const clamp = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 1.8, 1.2),
        new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.6 })
      );
      clamp.position.set(-2.2, 0, 0);
      bimetalGroup.add(clamp);

      // Upper Strip: Brass (Yellow, expands faster: α = 19 x 10^-6)
      // Represented by an arc of cylinders
      for (let i = 0; i < 16; i++) {
        const angle = (i / 16) * 0.45;
        const x = -1.8 + i * 0.22;
        const y = -Math.sin(angle) * 0.8;
        
        const brassPart = new THREE.Mesh(
          new THREE.BoxGeometry(0.25, 0.1, 0.6),
          new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.7, roughness: 0.3 })
        );
        brassPart.position.set(x, y + 0.06, 0);
        bimetalGroup.add(brassPart);

        // Lower Strip: Iron (Gray, expands slower: α = 11.5 x 10^-6)
        const ironPart = new THREE.Mesh(
          new THREE.BoxGeometry(0.25, 0.1, 0.6),
          new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8, roughness: 0.3 })
        );
        ironPart.position.set(x, y - 0.06, 0);
        bimetalGroup.add(ironPart);
      }

      // Heat Flame underneath strip
      const flame = new THREE.Mesh(
        new THREE.ConeGeometry(0.4, 0.9, 16),
        new THREE.MeshStandardMaterial({ color: 0xf97316, emissive: 0xea580c, emissiveIntensity: 1 })
      );
      flame.position.set(-0.5, -1.2, 0);
      bimetalGroup.add(flame);

      addAnchor(bimetalGroup, 'দ্বৈতাতব পাত (তাপে পিতল বেশি প্রসারিত হওয়ায় বাঁকা হয়)', 'Bimetallic Strip (Curvature in Heat)', 'Bimetal', '#facc15');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 6: তরলের আপাত ও প্রকৃত প্রসারণ (Liquid Apparent vs Real Expansion)
    // -----------------------------------------------------------------------
    if (slideId === 6) {
      const flaskGroup = new THREE.Group();
      group.add(flaskGroup);

      // Glass volumetric flask
      const flaskBody = new THREE.Mesh(
        new THREE.SphereGeometry(1.2, 24, 24),
        new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.35, roughness: 0.1 })
      );
      flaskBody.position.set(0, -0.4, 0);
      flaskGroup.add(flaskBody);

      const flaskNeck = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.2, 2.2, 16),
        new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.35, roughness: 0.1 })
      );
      flaskNeck.position.set(0, 1.2, 0);
      flaskGroup.add(flaskNeck);

      // Colored Liquid inside flask
      const liquidBody = new THREE.Mesh(
        new THREE.SphereGeometry(1.15, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.7, emissive: 0x0891b2, emissiveIntensity: 0.3 })
      );
      liquidBody.position.copy(flaskBody.position);
      flaskGroup.add(liquidBody);

      // Liquid column rising up neck
      const liquidCol = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.18, 1.5, 16),
        new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x0891b2, emissiveIntensity: 0.4 })
      );
      liquidCol.position.set(0, 0.9, 0);
      flaskGroup.add(liquidCol);

      addAnchor(flaskBody, 'পাত্রের প্রসারণ (γ_g)', 'Glass Container Expansion (γ_g)', 'Glass γ_g', '#94a3b8');
      addAnchor(liquidCol, 'প্রকৃত প্রসারণ = আপাত + পাত্রের প্রসারণ (γ_r = γ_a + γ_g)', 'Real Expansion (γ_r = γ_a + γ_g)', 'γ_r', '#06b6d4');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 7: পানির ব্যতিক্রমধর্মী প্রসারণ (Anomalous Water Expansion & Frozen Lake)
    // -----------------------------------------------------------------------
    if (slideId === 7) {
      const lakeGroup = new THREE.Group();
      group.add(lakeGroup);

      // Top Floating Ice Layer (0°C, Density 917 kg/m³)
      const iceLayer = new THREE.Mesh(
        new THREE.BoxGeometry(4.2, 0.35, 2.6),
        new THREE.MeshStandardMaterial({ color: 0xe0f2fe, roughness: 0.1, transparent: true, opacity: 0.85, emissive: 0x0284c7, emissiveIntensity: 0.2 })
      );
      iceLayer.position.set(0, 1.2, 0);
      lakeGroup.add(iceLayer);
      addAnchor(iceLayer, 'ভাসমান বরফ স্তর (০°C · ঘনত্ব ৯১৭ kg/m³)', 'Floating Surface Ice (0°C · ρ = 917 kg/m³)', 'Ice 0°C', '#38bdf8');

      // Water Layer 1-3°C Middle
      const midWater = new THREE.Mesh(
        new THREE.BoxGeometry(4.2, 1.2, 2.6),
        new THREE.MeshStandardMaterial({ color: 0x0284c7, transparent: true, opacity: 0.6 })
      );
      midWater.position.set(0, 0.4, 0);
      lakeGroup.add(midWater);

      // Dense Bottom Layer (4°C, Density 1000 kg/m³)
      const bottomWater = new THREE.Mesh(
        new THREE.BoxGeometry(4.2, 0.8, 2.6),
        new THREE.MeshStandardMaterial({ color: 0x0369a1, transparent: true, opacity: 0.85, emissive: 0x075985, emissiveIntensity: 0.3 })
      );
      bottomWater.position.set(0, -0.6, 0);
      lakeGroup.add(bottomWater);
      addAnchor(bottomWater, 'তলদেশের পানি (৪°C · সর্বোচ্চ ঘনত্ব ১০০০ kg/m³ · মাছ বেঁচে থাকে)', 'Dense Bottom Water (4°C · ρ = 1000 kg/m³)', 'Water 4°C', '#10b981');

      // Fish swimming safely at bottom
      const fishBody = new THREE.Mesh(
        new THREE.ConeGeometry(0.2, 0.7, 16),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.4 })
      );
      fishBody.rotation.z = Math.PI / 2;
      fishBody.position.set(-0.8, -0.6, 0);
      lakeGroup.add(fishBody);
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 8: বায়বীয় পদার্থের প্রসারণ ও চার্লসের সূত্র (Gas Expansion & Charles Law)
    // -----------------------------------------------------------------------
    if (slideId === 8) {
      const gasGroup = new THREE.Group();
      group.add(gasGroup);

      // Glass / Metal Cylinder
      const cyl = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.2, 3.2, 24, 1, true),
        new THREE.MeshPhysicalMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.3, roughness: 0.1 })
      );
      gasGroup.add(cyl);

      // Movable Piston at height
      const piston = new THREE.Mesh(
        new THREE.CylinderGeometry(1.18, 1.18, 0.25, 24),
        new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.7, roughness: 0.3 })
      );
      piston.position.set(0, 0.8, 0);
      gasGroup.add(piston);

      // Piston Rod
      const rod = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.12, 1.6, 16),
        new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8 })
      );
      rod.position.set(0, 1.6, 0);
      gasGroup.add(rod);

      // Hot Gas volume underneath piston
      const gasVol = new THREE.Mesh(
        new THREE.CylinderGeometry(1.15, 1.15, 2.2, 20),
        new THREE.MeshStandardMaterial({ color: 0xf97316, transparent: true, opacity: 0.45, emissive: 0xea580c, emissiveIntensity: 0.3 })
      );
      gasVol.position.set(0, -0.4, 0);
      gasGroup.add(gasVol);

      addAnchor(piston, 'চলমান পিস্টন (চাপ স্থির রেখে প্রসারিত হয়)', 'Movable Piston (Constant Pressure)', 'Piston', '#475569');
      addAnchor(gasVol, 'চার্লসের সূত্র: আয়তন পরম তাপমাত্রার সমানুপাতিক (V ∝ T)', 'Charles Law: Volume Proportional to Temp (V ∝ T)', 'V ∝ T', '#f97316');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 9: তাপধারণ ক্ষমতা ও আপেক্ষিক তাপ (Calorimeter & Heat Capacity)
    // -----------------------------------------------------------------------
    if (slideId === 9) {
      const calGroup = new THREE.Group();
      group.add(calGroup);

      // Outer wooden / insulated box
      const outBox = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 2.4, 2.4),
        new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.8 })
      );
      calGroup.add(outBox);

      // Inner copper calorimeter vessel
      const innerVessel = new THREE.Mesh(
        new THREE.CylinderGeometry(0.85, 0.85, 1.8, 24),
        new THREE.MeshStandardMaterial({ color: 0xd97706, metalness: 0.8, roughness: 0.2, emissive: 0xb45309, emissiveIntensity: 0.3 })
      );
      innerVessel.position.set(0, 0.1, 0);
      calGroup.add(innerVessel);

      // Water inside
      const water = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 0.8, 1.4, 20),
        new THREE.MeshStandardMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.7 })
      );
      water.position.set(0, -0.1, 0);
      calGroup.add(water);

      // Stirrer handle
      const stirrer = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.05, 2.2, 12),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, metalness: 0.9 })
      );
      stirrer.position.set(0.4, 0.7, 0);
      stirrer.rotation.z = 0.15;
      calGroup.add(stirrer);

      addAnchor(innerVessel, 'ক্যালরিমিটার পাত্র (তামা: s = ৪০০ J/kg·K)', 'Copper Calorimeter Vessel', 'Calorimeter', '#f59e0b');
      addAnchor(water, 'উচ্চ আপেক্ষিক তাপের পানি (s = ৪২০০ J/kg·K)', 'High Specific Heat Water (s = 4200 J/kg·K)', 'Water s', '#06b6d4');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 10: ক্যালরিমিতির মূলনীতি (গৃহীত তাপ = বর্জিত তাপ)
    // -----------------------------------------------------------------------
    if (slideId === 10) {
      const eqGroup = new THREE.Group();
      group.add(eqGroup);

      // Hot Metal Block (Red, Temp T2 = 100°C)
      const hotBlock = new THREE.Mesh(
        new THREE.BoxGeometry(1.0, 1.0, 1.0),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.6 })
      );
      hotBlock.position.set(-1.6, 0.2, 0);
      eqGroup.add(hotBlock);
      addAnchor(hotBlock, 'উষ্ণ বস্তু: বর্জিত তাপ Q₂ = m₂s₂(T₂ - T_f)', 'Hot Object: Heat Lost Q2', 'Q_lost', '#ef4444');

      // Cool Water Beaker (Blue, Temp T1 = 20°C)
      const coolWater = new THREE.Mesh(
        new THREE.CylinderGeometry(0.8, 0.8, 1.6, 20),
        new THREE.MeshStandardMaterial({ color: 0x0284c7, transparent: true, opacity: 0.7, emissive: 0x0369a1, emissiveIntensity: 0.3 })
      );
      coolWater.position.set(1.6, 0, 0);
      eqGroup.add(coolWater);
      addAnchor(coolWater, 'শীতল তরল: গৃহীত তাপ Q₁ = m₁s₁(T_f - T₁)', 'Cool Liquid: Heat Gained Q1', 'Q_gain', '#38bdf8');

      // Transfer Energy Arrow linking both
      const arrow = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.18, 1.8, 16),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 0.8 })
      );
      arrow.rotation.z = -Math.PI / 2;
      arrow.position.set(0, 0.3, 0);
      eqGroup.add(arrow);
      addAnchor(arrow, 'ক্যালরিমিতির মূলনীতি: গৃহীত তাপ = বর্জিত তাপ', 'Principle of Calorimetry: Heat Lost = Heat Gained', 'Q₁ = Q₂', '#facc15');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 11: পদার্থের অবস্থার পরিবর্তন ও সুপ্ততাপ (Latent Heat of Fusion & Vaporization)
    // -----------------------------------------------------------------------
    if (slideId === 11) {
      const latentGroup = new THREE.Group();
      group.add(latentGroup);

      // Ice Cube undergoing fusion (গলন L_f = 3.36 x 10^5 J/kg)
      const ice = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 1.2, 1.2),
        new THREE.MeshStandardMaterial({ color: 0xbae6fd, roughness: 0.1, transparent: true, opacity: 0.75, emissive: 0x38bdf8, emissiveIntensity: 0.3 })
      );
      ice.position.set(-1.6, 0.2, 0);
      latentGroup.add(ice);
      addAnchor(ice, 'বরফ গলনের সুপ্ততাপ (L_f = ৩.৩৬ × ১০⁵ J/kg · ০°C স্থির)', 'Latent Heat of Fusion (0°C Constant)', 'L_f', '#38bdf8');

      // Boiling Liquid Vaporization (বাষ্পীভবন L_v = 2.26 x 10^6 J/kg)
      const steamFlask = new THREE.Mesh(
        new THREE.CylinderGeometry(0.7, 0.9, 1.4, 20),
        new THREE.MeshStandardMaterial({ color: 0xf97316, emissive: 0xea580c, emissiveIntensity: 0.4 })
      );
      steamFlask.position.set(1.6, 0, 0);
      latentGroup.add(steamFlask);

      // Steam Cloud above
      for (let i = 0; i < 4; i++) {
        const cloud = new THREE.Mesh(
          new THREE.SphereGeometry(0.25, 12, 12),
          new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 })
        );
        cloud.position.set(1.4 + (i - 1.5) * 0.3, 1.2 + i * 0.2, 0);
        latentGroup.add(cloud);
      }
      addAnchor(steamFlask, 'বাষ্পীভবনের সুপ্ততাপ (L_v = ২.২৬ × ১০⁶ J/kg · ১০০°C স্থির)', 'Latent Heat of Vaporization (100°C Constant)', 'L_v', '#f97316');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 12: বাষ্পায়ন, স্ফুটন ও থার্মোফ্লাস্ক (Heat Transfer & Thermos Flask)
    // -----------------------------------------------------------------------
    if (slideId === 12) {
      const thermosGroup = new THREE.Group();
      group.add(thermosGroup);

      // Outer Plastic/Steel Casing
      const casing = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.2, 3.4, 24),
        new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.6, roughness: 0.3 })
      );
      thermosGroup.add(casing);

      // Double-walled glass bottle with vacuum inside
      const glassInner = new THREE.Mesh(
        new THREE.CylinderGeometry(0.85, 0.85, 2.6, 24),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.1, emissive: 0x64748b, emissiveIntensity: 0.4 })
      );
      glassInner.position.set(0, -0.2, 0);
      thermosGroup.add(glassInner);

      // Insulating Cork / Plastic Stopper
      const stopper = new THREE.Mesh(
        new THREE.CylinderGeometry(0.65, 0.75, 0.7, 20),
        new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.8 })
      );
      stopper.position.set(0, 1.7, 0);
      thermosGroup.add(stopper);

      addAnchor(glassInner, 'রৌপ্য প্রলেপ ও ভ্যাকুয়াম (পরিবহন, পরিচলন ও বিকিরণ রোধ)', 'Silvered Double-wall Vacuum Chamber', 'Thermos', '#38bdf8');
      addAnchor(stopper, 'কুপরিবাহী ছিপি (পরিচলন রোধ)', 'Insulating Cork Stopper', 'Stopper', '#d97706');
      return;
    }
  }

  // =========================================================================
  // PHYSICS CHAPTER 7: WAVES & SOUND (পদার্থবিজ্ঞান ৭ম অধ্যায়: তরঙ্গ ও শব্দ)
  // =========================================================================
  if (chapter === 7) {
    // -----------------------------------------------------------------------
    // Slide 1: সরল স্পন্দন গতি (SHM) ও পর্যায়বৃত্ত আন্দোলন
    // -----------------------------------------------------------------------
    if (slideId === 1) {
      const shmGroup = new THREE.Group();
      group.add(shmGroup);

      // Support ceiling stand
      const standTop = new THREE.Mesh(
        new THREE.BoxGeometry(3.6, 0.2, 1.2),
        new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8, roughness: 0.2 })
      );
      standTop.position.set(0, 2.2, 0);
      shmGroup.add(standTop);

      // 1. Spring-mass system on left
      const springGroup = new THREE.Group();
      springGroup.position.set(-1.1, 2.1, 0);
      shmGroup.add(springGroup);
      refs.shmSpringCoil = springGroup;

      for (let i = 0; i < 14; i++) {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(0.24, 0.04, 12, 24),
          new THREE.MeshStandardMaterial({ color: 0x06b6d4, metalness: 0.9, roughness: 0.2 })
        );
        ring.rotation.x = Math.PI / 2;
        ring.position.y = -i * 0.16;
        springGroup.add(ring);
      }

      const springMass = new THREE.Mesh(
        new THREE.SphereGeometry(0.42, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x0ea5e9, emissive: 0x0284c7, emissiveIntensity: 0.5, metalness: 0.6 })
      );
      springMass.position.set(-1.1, -0.3, 0);
      shmGroup.add(springMass);
      refs.shmSpringMass = springMass;

      // 2. Simple Pendulum on right
      const pendPivot = new THREE.Group();
      pendPivot.position.set(1.1, 2.1, 0);
      shmGroup.add(pendPivot);
      refs.shmPendulum = pendPivot;

      const pendString = new THREE.Mesh(
        new THREE.CylinderGeometry(0.02, 0.02, 2.4, 12),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8 })
      );
      pendString.position.y = -1.2;
      pendPivot.add(pendString);

      const pendBob = new THREE.Mesh(
        new THREE.SphereGeometry(0.38, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.5, metalness: 0.8 })
      );
      pendBob.position.y = -2.4;
      pendPivot.add(pendBob);

      addAnchor(springMass, 'সরল ছন্দিত স্পন্দনরত ভর (F = -kx)', 'Harmonic Spring Oscillator', 'SHM Mass', '#0ea5e9');
      addAnchor(pendBob, 'সরল দোলক স্পন্দন (T = 2π√(L/g))', 'Simple Pendulum Bob', 'Pendulum', '#f59e0b');
      addAnchor(standTop, 'সাম্যাবস্থা অবলম্বন (Fixed Support)', 'Fixed Ceiling Support', 'Support', '#94a3b8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 2: অনুপ্রস্থ বনাম অনুদৈর্ঘ্য তরঙ্গ (Transverse vs Longitudinal Wave)
    // -----------------------------------------------------------------------
    if (slideId === 2) {
      const dualGroup = new THREE.Group();
      group.add(dualGroup);

      // Top: Transverse Wave (পানির ঢেউ / আলো)
      const transGroup = new THREE.Group();
      transGroup.position.set(0, 1.1, 0);
      dualGroup.add(transGroup);
      refs.transverseGroup = transGroup;
      refs.transverseParticles = [];

      for (let i = 0; i < 28; i++) {
        const xPos = (i - 13.5) * 0.24;
        const bead = new THREE.Mesh(
          new THREE.SphereGeometry(0.12, 16, 16),
          new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x0891b2, emissiveIntensity: 0.6 })
        );
        bead.position.set(xPos, Math.sin(i * 0.5) * 0.6, 0);
        transGroup.add(bead);
        refs.transverseParticles.push({ mesh: bead, index: i });
      }

      // Bottom: Longitudinal Wave (শব্দ তরঙ্গ: সংনমন ও প্রসারণ)
      const longGroup = new THREE.Group();
      longGroup.position.set(0, -1.1, 0);
      dualGroup.add(longGroup);
      refs.longitudinalGroup = longGroup;
      refs.longitudinalBars = [];

      for (let i = 0; i < 32; i++) {
        const baseOffset = (i - 15.5) * 0.2;
        const bar = new THREE.Mesh(
          new THREE.BoxGeometry(0.06, 1.2, 0.4),
          new THREE.MeshStandardMaterial({ 
            color: i % 4 === 0 ? 0xef4444 : 0x38bdf8,
            emissive: i % 4 === 0 ? 0xb91c1c : 0x0284c7,
            emissiveIntensity: 0.4
          })
        );
        bar.position.set(baseOffset, 0, 0);
        longGroup.add(bar);
        refs.longitudinalBars.push({ mesh: bar, baseOffset, index: i });
      }

      addAnchor(transGroup, 'অনুপ্রস্থ তরঙ্গ (শীর্ষ ও পাদ সমকোণে স্পন্দন)', 'Transverse Wave (Crests & Troughs)', 'Transverse', '#06b6d4');
      addAnchor(longGroup, 'অনুদৈর্ঘ্য শব্দ তরঙ্গ (সংনমন ও প্রসারণ)', 'Longitudinal Sound Wave (Compression & Rarefaction)', 'Longitudinal', '#ef4444');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 3: তরঙ্গ সংশ্লিষ্ট রাশিসমূহ (A, λ, T, f)
    // -----------------------------------------------------------------------
    if (slideId === 3) {
      const charGroup = new THREE.Group();
      group.add(charGroup);

      // Center Reference Baseline Rail (সাম্যাবস্থা)
      const baseLine = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.03, 6.8, 16),
        new THREE.MeshBasicMaterial({ color: 0x475569 })
      );
      baseLine.rotation.z = Math.PI / 2;
      charGroup.add(baseLine);

      // Sinusoidal Wave Ribbons
      const waveMeshGroup = new THREE.Group();
      charGroup.add(waveMeshGroup);
      refs.charWaveGroup = waveMeshGroup;

      for (let i = 0; i < 50; i++) {
        const x = (i - 25) * 0.13;
        const y = Math.sin(x * 1.8) * 1.1;
        const segment = new THREE.Mesh(
          new THREE.SphereGeometry(0.09, 14, 14),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 })
        );
        segment.position.set(x, y, 0);
        waveMeshGroup.add(segment);
      }

      // Amplitude Marker Pillar (বিস্তার A)
      const ampPillar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 1.1, 12),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.7 })
      );
      ampPillar.position.set(0.87, 0.55, 0);
      charGroup.add(ampPillar);

      // Wavelength λ Horizontal Bracket
      const lambdaRail = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 3.49, 12),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.7 })
      );
      lambdaRail.rotation.z = Math.PI / 2;
      lambdaRail.position.set(0.87, 1.6, 0);
      charGroup.add(lambdaRail);

      // Oscillating Particle on Wave (দশা ও পর্যায়কাল)
      const movingParticle = new THREE.Mesh(
        new THREE.SphereGeometry(0.24, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0xec4899, emissive: 0xdb2777, emissiveIntensity: 0.9 })
      );
      movingParticle.position.set(0.87, 1.1, 0);
      charGroup.add(movingParticle);
      refs.charParticle = movingParticle;

      addAnchor(ampPillar, 'বিস্তার (Amplitude A): সাম্যাবস্থা হতে সর্বোচ্চ সরণ', 'Amplitude (A)', 'A (m)', '#f59e0b');
      addAnchor(lambdaRail, 'তরঙ্গদৈর্ঘ্য (λ): একটি পূর্ণ স্পন্দনে অতিক্রান্ত দূরত্ব', 'Wavelength (λ)', 'λ (m)', '#10b981');
      addAnchor(movingParticle, 'দশা ও কণার স্পন্দনকাল (পর্যায়কাল T = 1/f)', 'Wave Particle Phase (Period T)', 'T & f', '#ec4899');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 4: তরঙ্গ সমীকরণ ও বেগ (v = f · λ)
    // -----------------------------------------------------------------------
    if (slideId === 4) {
      const eqGroup = new THREE.Group();
      group.add(eqGroup);

      // Traveling Wave Front Train
      const trainGroup = new THREE.Group();
      eqGroup.add(trainGroup);
      refs.eqWaveTrain = trainGroup;

      for (let w = 0; w < 3; w++) {
        const crest = new THREE.Mesh(
          new THREE.ConeGeometry(0.7, 1.4, 24),
          new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x0891b2, emissiveIntensity: 0.6, metalness: 0.3 })
        );
        crest.position.set((w - 1) * 2.2, 0.4, 0);
        trainGroup.add(crest);
      }

      // Propagating Velocity Arrow
      const arrowShaft = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 2.6, 16),
        new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x16a34a, emissiveIntensity: 0.7 })
      );
      arrowShaft.rotation.z = -Math.PI / 2;
      arrowShaft.position.set(0.8, 1.8, 0);
      eqGroup.add(arrowShaft);

      const arrowHead = new THREE.Mesh(
        new THREE.ConeGeometry(0.24, 0.6, 16),
        new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x16a34a, emissiveIntensity: 0.8 })
      );
      arrowHead.rotation.z = -Math.PI / 2;
      arrowHead.position.set(2.4, 1.8, 0);
      eqGroup.add(arrowHead);

      // Frequency Strobe Ring
      const fRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.55, 0.08, 16, 32),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.8 })
      );
      fRing.position.set(-2.0, 1.8, 0);
      eqGroup.add(fRing);
      refs.eqFRing = fRing;

      addAnchor(arrowHead, 'তরঙ্গ বেগ ভেক্টর (v = f · λ)', 'Wave Velocity Vector (v = fλ)', 'v (m/s)', '#22c55e');
      addAnchor(fRing, 'উৎসের কম্পাঙ্ক (f = 1/T Hz - মাধ্যমে অপরিবর্তিত)', 'Frequency of Source (f)', 'f (Hz)', '#f59e0b');
      addAnchor(trainGroup, 'তরঙ্গদৈর্ঘ্য ব্যতিরেক ও স্থানান্তর', 'Propagating Wave Train', 'Wavelength λ', '#06b6d4');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 5: কম্পমান সুরশলাকা ও শব্দ তরঙ্গ সঞ্চালন
    // -----------------------------------------------------------------------
    if (slideId === 5) {
      const forkGroup = new THREE.Group();
      group.add(forkGroup);

      // Tuning Fork Base / Stem (সুরশলাকার ডাঁট)
      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.14, 0.16, 1.5, 20),
        new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 })
      );
      stem.position.set(-2.0, -1.0, 0);
      forkGroup.add(stem);

      // Curved U-neck of Fork
      const forkProngL = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 2.0, 0.2),
        new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.9, roughness: 0.2 })
      );
      forkProngL.position.set(-2.3, 0.6, 0);
      forkGroup.add(forkProngL);
      refs.forkProngL = forkProngL;

      const forkProngR = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 2.0, 0.2),
        new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.9, roughness: 0.2 })
      );
      forkProngR.position.set(-1.7, 0.6, 0);
      forkGroup.add(forkProngR);
      refs.forkProngR = forkProngR;

      // Emitted Concentric Sound Spheres (সংনমিত বাতাসের তরঙ্গমণ্ডল)
      const soundWaveGroup = new THREE.Group();
      forkGroup.add(soundWaveGroup);
      refs.forkSoundRings = [];

      for (let r = 1; r <= 4; r++) {
        const soundRing = new THREE.Mesh(
          new THREE.TorusGeometry(r * 0.85, 0.05, 12, 36),
          new THREE.MeshStandardMaterial({ 
            color: 0x38bdf8, 
            emissive: 0x0284c7, 
            emissiveIntensity: 0.7 - r * 0.12, 
            transparent: true, 
            opacity: 0.8 - r * 0.15 
          })
        );
        soundRing.position.set(-1.7, 0.8, 0);
        soundWaveGroup.add(soundRing);
        refs.forkSoundRings.push(soundRing);
      }

      addAnchor(forkProngR, 'কম্পমান সুরশলাকা (উচ্চ কম্পাঙ্কে স্পন্দিত বাহু)', 'Vibrating Tuning Fork Prongs', 'Tuning Fork', '#cbd5e1');
      addAnchor(soundWaveGroup, 'বায়ুতে গোলীয় শব্দ তরঙ্গ নিঃসরণ (সংনমন ও প্রসারণ)', 'Spherical Sound Wavefronts in Air', 'Sound Waves', '#38bdf8');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 6: বিভিন্ন মাধ্যমে শব্দের দ্রুতি (কঠিন > তরল > বায়বীয়)
    // -----------------------------------------------------------------------
    if (slideId === 6) {
      const medGroup = new THREE.Group();
      group.add(medGroup);

      // 1. Solid: Steel column (কঠিন মাধ্যম: ~৫১৩০ m/s)
      const solidCol = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.5, 3.2, 24),
        new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.9, roughness: 0.2 })
      );
      solidCol.position.set(-2.0, 0, 0);
      medGroup.add(solidCol);

      const solidPulse = new THREE.Mesh(
        new THREE.SphereGeometry(0.26, 18, 18),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.9 })
      );
      solidPulse.position.set(-2.0, 0, 0.55);
      medGroup.add(solidPulse);
      refs.solidPulse = solidPulse;

      // 2. Liquid: Water column (তরল মাধ্যম: ~১৪৯৩ m/s)
      const liquidCol = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.5, 3.2, 24),
        new THREE.MeshPhysicalMaterial({ color: 0x0284c7, transparent: true, opacity: 0.55, roughness: 0.1 })
      );
      liquidCol.position.set(0, 0, 0);
      medGroup.add(liquidCol);

      const liquidPulse = new THREE.Mesh(
        new THREE.SphereGeometry(0.26, 18, 18),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.9 })
      );
      liquidPulse.position.set(0, 0, 0.55);
      medGroup.add(liquidPulse);
      refs.liquidPulse = liquidPulse;

      // 3. Gas: Air column (বায়বীয় মাধ্যম: ~৩৪৩ m/s)
      const gasCol = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.5, 3.2, 24),
        new THREE.MeshBasicMaterial({ color: 0x334155, wireframe: true })
      );
      gasCol.position.set(2.0, 0, 0);
      medGroup.add(gasCol);

      const gasPulse = new THREE.Mesh(
        new THREE.SphereGeometry(0.26, 18, 18),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.9 })
      );
      gasPulse.position.set(2.0, 0, 0.55);
      medGroup.add(gasPulse);
      refs.gasPulse = gasPulse;

      addAnchor(solidCol, 'কঠিন মাধ্যম (লোহা: ৫১৩0 m/s — স্থিতিস্থাপকতা সর্বাধিক)', 'Solid Medium (Fastest Sound Speed)', 'Solid: 5130 m/s', '#ef4444');
      addAnchor(liquidCol, 'তরল মাধ্যম (পানি: ১৪৯৩ m/s — মাঝারি বেগ)', 'Liquid Medium (Water ~1493 m/s)', 'Liquid: 1493 m/s', '#38bdf8');
      addAnchor(gasCol, 'বায়বীয় মাধ্যম (বায়ু: ৩৪৩ m/s — ঘনত্ব ও তাপমাত্রা নির্ভর)', 'Gas Medium (Air ~343 m/s)', 'Air: 343 m/s', '#f59e0b');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 7: শব্দের প্রতিফলন ও প্রতিধ্বনি (Echo, d ≥ 16.6m)
    // -----------------------------------------------------------------------
    if (slideId === 7) {
      const echoGroup = new THREE.Group();
      group.add(echoGroup);

      // Sound Source Megaphone on left
      const speaker = new THREE.Mesh(
        new THREE.ConeGeometry(0.45, 1.2, 20),
        new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x0891b2, emissiveIntensity: 0.5 })
      );
      speaker.rotation.z = -Math.PI / 2;
      speaker.position.set(-2.4, 0, 0);
      echoGroup.add(speaker);

      // High Reflective Cliff / Obstacle Wall on right
      const wall = new THREE.Mesh(
        new THREE.BoxGeometry(0.4, 3.4, 2.2),
        new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.9, metalness: 0.1 })
      );
      wall.position.set(2.4, 0, 0);
      echoGroup.add(wall);

      // Distance Indicator Rail (ন্যূনতম দূরত্ব d = 16.6 m / 17.2 m)
      const distRail = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.03, 4.6, 12),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b })
      );
      distRail.rotation.z = Math.PI / 2;
      distRail.position.set(0, -1.5, 0);
      echoGroup.add(distRail);

      // Incident Pulse Wave (গমনশীল তরঙ্গ)
      const incPulse = new THREE.Mesh(
        new THREE.SphereGeometry(0.24, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x16a34a, emissiveIntensity: 0.8 })
      );
      incPulse.position.set(-1.0, 0.3, 0);
      echoGroup.add(incPulse);
      refs.echoIncPulse = incPulse;

      // Reflected Pulse Wave (প্রতিফলিত প্রতিধ্বনি তরঙ্গ)
      const refPulse = new THREE.Mesh(
        new THREE.SphereGeometry(0.24, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.8 })
      );
      refPulse.position.set(1.0, -0.3, 0);
      echoGroup.add(refPulse);
      refs.echoRefPulse = refPulse;

      addAnchor(speaker, 'শব্দ উৎস (শ্রোতা ও উৎপাদক)', 'Sound Source & Listener', 'Source', '#06b6d4');
      addAnchor(wall, 'প্রতিফলক পাহাড় / দেওয়াল (বাধা)', 'Sound Reflecting Wall / Cliff', 'Reflector', '#475569');
      addAnchor(distRail, 'ন্যূনতম দূরত্ব d = (v · t)/2 = ১৬.৬ মি (০°C এ)', 'Minimum Echo Distance (d ≥ 16.6m)', 'd ≥ 16.6m', '#f59e0b');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 8: সোনার (SONAR) ও বাদুড়ের দিকনির্ণয়
    // -----------------------------------------------------------------------
    if (slideId === 8) {
      const sonarGroup = new THREE.Group();
      group.add(sonarGroup);

      // Sea Surface Water plane
      const seaSurface = new THREE.Mesh(
        new THREE.PlaneGeometry(6.4, 2.4),
        new THREE.MeshPhysicalMaterial({ color: 0x0284c7, transparent: true, opacity: 0.45, roughness: 0.1 })
      );
      seaSurface.rotation.x = -Math.PI / 2;
      seaSurface.position.set(0, 1.2, 0);
      sonarGroup.add(seaSurface);

      // Research Ship Hull floating on water
      const shipHull = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 0.8, 1.0),
        new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3, metalness: 0.2 })
      );
      shipHull.position.set(0, 1.6, 0);
      sonarGroup.add(shipHull);
      refs.sonarShip = shipHull;

      // Ultrasound Conical Sonar Pulse Beam
      const sonarBeam = new THREE.Mesh(
        new THREE.ConeGeometry(1.6, 2.6, 24, 1, true),
        new THREE.MeshStandardMaterial({ 
          color: 0x06b6d4, 
          emissive: 0x0891b2, 
          emissiveIntensity: 0.7, 
          transparent: true, 
          opacity: 0.45, 
          side: THREE.DoubleSide 
        })
      );
      sonarBeam.position.set(0, -0.2, 0);
      sonarGroup.add(sonarBeam);
      refs.sonarBeam = sonarBeam;

      // Ocean Floor / Seabed (সমুদ্র তলদেশ)
      const seabed = new THREE.Mesh(
        new THREE.BoxGeometry(6.4, 0.6, 2.4),
        new THREE.MeshStandardMaterial({ color: 0x78350f, roughness: 0.9 })
      );
      seabed.position.set(0, -1.8, 0);
      sonarGroup.add(seabed);

      addAnchor(shipHull, 'জাহাজের সোনার ট্রান্সডিউসার (শব্দোত্তর সংকেত প্রেরক)', 'Ship SONAR Transducer', 'SONAR', '#f8fafc');
      addAnchor(sonarBeam, 'শব্দোত্তর তরঙ্গের প্রতিধ্বনি প্রবাহ (2d = v · t)', 'Ultrasound Echo Beam (2d = vt)', 'Echo Wave', '#06b6d4');
      addAnchor(seabed, 'সমুদ্রের গভীর তলদেশ (Seabed Depth d)', 'Ocean Bed Floor', 'Depth (d)', '#78350f');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 9: শ্রাব্যতার পাল্লা ও ফ্রিকোয়েন্সি স্পেকট্রাম (20 - 20,000 Hz)
    // -----------------------------------------------------------------------
    if (slideId === 9) {
      const specGroup = new THREE.Group();
      group.add(specGroup);

      // 1. Infrasound Tube (< 20 Hz, Purple)
      const infraBlock = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 1.4, 0.8),
        new THREE.MeshStandardMaterial({ color: 0x7c3aed, emissive: 0x6d28d9, emissiveIntensity: 0.5 })
      );
      infraBlock.position.set(-2.0, 0, 0);
      specGroup.add(infraBlock);

      // 2. Audible Range (20 Hz - 20,000 Hz, Vibrant Emerald)
      const audibleBlock = new THREE.Mesh(
        new THREE.BoxGeometry(2.2, 1.8, 0.8),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.6 })
      );
      audibleBlock.position.set(0.1, 0, 0);
      specGroup.add(audibleBlock);

      // 3. Ultrasound Range (> 20,000 Hz, Amber / Red)
      const ultraBlock = new THREE.Mesh(
        new THREE.BoxGeometry(1.8, 1.4, 0.8),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.6 })
      );
      ultraBlock.position.set(2.2, 0, 0);
      specGroup.add(ultraBlock);

      // Frequency Needle Pointer gliding across
      const needle = new THREE.Mesh(
        new THREE.ConeGeometry(0.18, 0.7, 16),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.9 })
      );
      needle.position.set(0, 1.4, 0.6);
      specGroup.add(needle);
      refs.specNeedle = needle;

      addAnchor(infraBlock, 'শব্দেতর / Infrasound (< ২০ Hz — হাতি, ভূমিকম্প)', 'Infrasound (< 20 Hz)', 'Infrasound', '#7c3aed');
      addAnchor(audibleBlock, 'শ্রবণযোগ্য শব্দ (২০ - ২০,০০০ Hz — মানব শ্রবণসীমা)', 'Audible Range (20 - 20,000 Hz)', 'Audible (20-20k Hz)', '#10b981');
      addAnchor(ultraBlock, 'শব্দোত্তর / Ultrasound (> ২০,০০০ Hz — বাদুড়, চিকিৎসা)', 'Ultrasound (> 20 kHz)', 'Ultrasound', '#f59e0b');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 10: চিকিৎসায় আল্ট্রাসাউন্ড ও আল্ট্রাসনোগ্রাফি প্রোব
    // -----------------------------------------------------------------------
    if (slideId === 10) {
      const ultraMedGroup = new THREE.Group();
      group.add(ultraMedGroup);

      // Ultrasound Transducer Wand Body (চিকিৎসা প্রোব)
      const probeHandle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.35, 0.45, 2.0, 24),
        new THREE.MeshStandardMaterial({ color: 0xf1f5f9, metalness: 0.3, roughness: 0.2 })
      );
      probeHandle.position.set(0, 1.2, 0);
      ultraMedGroup.add(probeHandle);

      // Piezoelectric Crystal Face (Piezo Head)
      const piezoFace = new THREE.Mesh(
        new THREE.BoxGeometry(1.2, 0.3, 0.5),
        new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x0891b2, emissiveIntensity: 0.8 })
      );
      piezoFace.position.set(0, 0.1, 0);
      ultraMedGroup.add(piezoFace);

      // Focused Ultrasound High Frequency Scanning Rays
      const scanBeam = new THREE.Mesh(
        new THREE.ConeGeometry(1.4, 2.2, 20, 1, true),
        new THREE.MeshPhysicalMaterial({ 
          color: 0x38bdf8, 
          emissive: 0x0284c7, 
          emissiveIntensity: 0.6, 
          transparent: true, 
          opacity: 0.4, 
          side: THREE.DoubleSide 
        })
      );
      scanBeam.position.set(0, -1.0, 0);
      ultraMedGroup.add(scanBeam);
      refs.ultraScanBeam = scanBeam;

      // Internal Tissue Phantom Body
      const tissue = new THREE.Mesh(
        new THREE.BoxGeometry(3.6, 0.8, 1.8),
        new THREE.MeshStandardMaterial({ color: 0xbe123c, transparent: true, opacity: 0.65, roughness: 0.3 })
      );
      tissue.position.set(0, -1.8, 0);
      ultraMedGroup.add(tissue);

      addAnchor(probeHandle, 'আল্ট্রাসনোগ্রাফি প্রোব (ট্রান্সডিউসার হ্যান্ডল)', 'Ultrasound Transducer Probe', 'Probe', '#f1f5f9');
      addAnchor(piezoFace, 'পিজোইলেকট্রিক ক্রিস্টাল (উচ্চ কম্পাঙ্ক শব্দোত্তর তরঙ্গ উৎপাদক)', 'Piezoelectric Crystal Head', 'Piezo (2-10 MHz)', '#06b6d4');
      addAnchor(tissue, 'অভ্যন্তরীণ মানব অঙ্গ ও টিস্যু ইন্টারফেস প্রতিফলন', 'Internal Organ Tissue Reflection', 'Organ Tissue', '#be123c');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 11: শব্দের তীব্রতা, তীক্ষ্ণতা ও গুণ/জাতি (Loudness, Pitch & Timbre)
    // -----------------------------------------------------------------------
    if (slideId === 11) {
      const characGroup = new THREE.Group();
      group.add(characGroup);

      // 1. Loud Wave (উচ্চ তীব্রতা: অধিক বিস্তার A)
      const loudGroup = new THREE.Group();
      loudGroup.position.set(-2.0, 0, 0);
      characGroup.add(loudGroup);
      refs.loudWave = loudGroup;

      for (let i = 0; i < 24; i++) {
        const x = (i - 12) * 0.12;
        const b = new THREE.Mesh(
          new THREE.SphereGeometry(0.1, 14, 14),
          new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.6 })
        );
        b.position.set(x, Math.sin(i * 0.4) * 1.2, 0);
        loudGroup.add(b);
      }

      // 2. High Pitch Wave (উচ্চ তীক্ষ্ণতা: উচ্চ কম্পাঙ্ক f)
      const pitchGroup = new THREE.Group();
      pitchGroup.position.set(0.1, 0, 0);
      characGroup.add(pitchGroup);
      refs.pitchWave = pitchGroup;

      for (let i = 0; i < 24; i++) {
        const x = (i - 12) * 0.12;
        const b = new THREE.Mesh(
          new THREE.SphereGeometry(0.1, 14, 14),
          new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x0891b2, emissiveIntensity: 0.6 })
        );
        b.position.set(x, Math.sin(i * 1.2) * 0.5, 0);
        pitchGroup.add(b);
      }

      // 3. Timbre / Instrument Wave (সুর ও উপসুর মিশ্রণ)
      const timbreGroup = new THREE.Group();
      timbreGroup.position.set(2.1, 0, 0);
      characGroup.add(timbreGroup);
      refs.timbreWave = timbreGroup;

      for (let i = 0; i < 24; i++) {
        const x = (i - 12) * 0.12;
        const y = Math.sin(i * 0.4) * 0.6 + Math.sin(i * 0.8) * 0.3;
        const b = new THREE.Mesh(
          new THREE.SphereGeometry(0.1, 14, 14),
          new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.6 })
        );
        b.position.set(x, y, 0);
        timbreGroup.add(b);
      }

      addAnchor(loudGroup, 'তীব্রতা / Loudness (বিস্তারের বর্গের সমানুপাতিক I ∝ A²)', 'Loudness (Proportional to Amplitude²)', 'Loudness (I ∝ A²)', '#ef4444');
      addAnchor(pitchGroup, 'তীক্ষ্ণতা / Pitch (কম্পাঙ্ক বৃদ্ধির সাথে সুর চিকন হয়)', 'Pitch (Proportional to Frequency f)', 'Pitch (f)', '#06b6d4');
      addAnchor(timbreGroup, 'গুণ বা জাতি / Timbre (উপসুর ও হারমোনিক্সের বিশিষ্টতা)', 'Timbre / Quality of Sound', 'Timbre', '#f59e0b');
      return;
    }

    // -----------------------------------------------------------------------
    // Slide 12: ডেসিবেল স্কেল ও শব্দ দূষণ মিটার (Sound Level Meter)
    // -----------------------------------------------------------------------
    if (slideId === 12) {
      const meterGroup = new THREE.Group();
      group.add(meterGroup);

      // Sound Level Meter Device Body
      const meterBody = new THREE.Mesh(
        new THREE.BoxGeometry(2.0, 3.2, 0.7),
        new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.3, metalness: 0.4 })
      );
      meterGroup.add(meterBody);

      // Microphone Windscreen Ball on top
      const mic = new THREE.Mesh(
        new THREE.SphereGeometry(0.48, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x475569, roughness: 0.9 })
      );
      mic.position.set(0, 1.9, 0);
      meterGroup.add(mic);

      // Digital LCD Display Screen
      const screen = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6, 1.2),
        new THREE.MeshStandardMaterial({ color: 0x064e3b, emissive: 0x047857, emissiveIntensity: 0.5 })
      );
      screen.position.set(0, 0.4, 0.36);
      meterGroup.add(screen);

      // Decibel Level Arc / Gauge Dial Indicator
      const decibelDial = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.04, 0.7, 12),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xdc2626, emissiveIntensity: 0.9 })
      );
      decibelDial.position.set(0, 0.4, 0.38);
      meterGroup.add(decibelDial);
      refs.dbNeedle = decibelDial;

      // Safe / Danger Indicator LEDs
      const greenLed = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 12, 12),
        new THREE.MeshStandardMaterial({ color: 0x22c55e, emissive: 0x16a34a, emissiveIntensity: 0.9 })
      );
      greenLed.position.set(-0.6, -0.7, 0.37);
      meterGroup.add(greenLed);

      const redLed = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 12, 12),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xdc2626, emissiveIntensity: 0.9 })
      );
      redLed.position.set(0.6, -0.7, 0.37);
      meterGroup.add(redLed);

      addAnchor(mic, 'শব্দ গ্রাহক মাইক্রোফোন (Sound Sensor)', 'Microphone Sensor', 'Mic', '#475569');
      addAnchor(screen, 'ডেসিবেল মাত্রা প্রদর্শন (সহনশীল সীমা ৬০ dB, দূষণ মাত্রা > ৮৫ dB)', 'Digital Sound Level Display (dB)', 'Decibel (dB)', '#047857');
      addAnchor(redLed, 'মারাত্মক শব্দ দূষণ সংকেত (শ্রবণশক্তি ক্ষতির ঝুঁকি)', 'Danger Zone Indicator (> 85-120 dB)', 'Danger LED', '#ef4444');
      return;
    }
  }
}

/**
 * Builds Extra 3D Scenes for Chemistry Chapters 4 & 5 (Periodic Trends & Chemical Bonds)
 * Dedicated, distinct 3D scenes for every slide in Chapters 4 and 5
 */
export function buildChemistryExtra3DScene(
  slideId: number,
  chapter: number,
  group: THREE.Group,
  refs: any,
  addAnchor: AddAnchorFn
) {
  // -------------------------------------------------------------------------
  // CHEMISTRY CHAPTER 4: PERIODIC TABLE (পর্যায় সারণি)
  // -------------------------------------------------------------------------
  if (chapter === 4) {
    if (slideId === 1) {
      // Slide 1: 3D Periodic Table Layout (s, p, d, f Blocks)
      const ptableGroup = new THREE.Group();
      group.add(ptableGroup);

      // s-block (Groups 1-2, Left, Warm Orange/Red)
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 2; c++) {
          const cube = new THREE.Mesh(
            new THREE.BoxGeometry(0.35, 0.35, 0.35),
            new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.3, emissive: 0xc2410c, emissiveIntensity: 0.3 })
          );
          cube.position.set(-3.2 + c * 0.42, 1.5 - r * 0.45, 0);
          ptableGroup.add(cube);
        }
      }

      // d-block (Groups 3-12, Center, Amber/Yellow)
      for (let r = 3; r < 7; r++) {
        for (let c = 0; c < 10; c++) {
          const cube = new THREE.Mesh(
            new THREE.BoxGeometry(0.35, 0.35, 0.25),
            new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.4, emissive: 0xa16207, emissiveIntensity: 0.2 })
          );
          cube.position.set(-2.0 + c * 0.42, 1.5 - r * 0.45, 0);
          ptableGroup.add(cube);
        }
      }

      // p-block (Groups 13-18, Right, Cyan/Blue)
      for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 6; c++) {
          const isNoble = c === 5;
          const color = isNoble ? 0xa855f7 : 0x06b6d4;
          const cube = new THREE.Mesh(
            new THREE.BoxGeometry(0.35, 0.35, 0.35),
            new THREE.MeshStandardMaterial({ color, roughness: 0.3, emissive: color, emissiveIntensity: 0.3 })
          );
          cube.position.set(2.4 + c * 0.42, 1.5 - r * 0.45, 0);
          ptableGroup.add(cube);
        }
      }

      // f-block (Bottom, Emerald Green)
      for (let r = 0; r < 2; r++) {
        for (let c = 0; c < 14; c++) {
          const cube = new THREE.Mesh(
            new THREE.BoxGeometry(0.32, 0.32, 0.2),
            new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.4, emissive: 0x047857, emissiveIntensity: 0.3 })
          );
          cube.position.set(-2.8 + c * 0.42, -2.1 - r * 0.42, 0);
          ptableGroup.add(cube);
        }
      }

      addAnchor(ptableGroup, 'আধুনিক পর্যায় সারণির ব্লক বিন্যাস (s, p, d, f)', 'Modern Periodic Table Blocks', 'P-Table', '#06b6d4');
      return;
    }

    if (slideId === 2) {
      // Slide 2: Dobereiner's Triad (ডোবেরাইনারের ত্রয়ী) & Newlands Octaves (অষ্টক)
      const triadGroup = new THREE.Group();
      group.add(triadGroup);

      // Triad 1: Li (7), Na (23), K (39) on a balance rod
      const rod = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 4.2, 16),
        new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.7, roughness: 0.2 })
      );
      rod.rotation.z = Math.PI / 2;
      rod.position.y = 0.5;
      triadGroup.add(rod);

      // Li Atom (Light, small)
      const li = new THREE.Mesh(
        new THREE.SphereGeometry(0.35, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.4 })
      );
      li.position.set(-1.8, 0.5, 0);
      triadGroup.add(li);
      addAnchor(li, 'লিথিয়াম (Li: ৭)', 'Lithium (Mass 7)', 'Li', '#38bdf8');

      // Na Atom (Middle, average: (7+39)/2 = 23)
      const na = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.4 })
      );
      na.position.set(0, 0.5, 0);
      triadGroup.add(na);
      addAnchor(na, 'সোডিয়াম গড় ভর (Na: ২৩)', 'Sodium Triad Mean (Mass 23)', 'Na', '#f59e0b');

      // K Atom (Heavy, larger)
      const k = new THREE.Mesh(
        new THREE.SphereGeometry(0.65, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.4 })
      );
      k.position.set(1.8, 0.5, 0);
      triadGroup.add(k);
      addAnchor(k, 'পটাশিয়াম (K: ৩৯)', 'Potassium (Mass 39)', 'K', '#ef4444');

      // Octave rings below (Newlands 8 steps)
      for (let i = 0; i < 8; i++) {
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(0.18 + i * 0.14, 0.02, 12, 32),
          new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.5 })
        );
        ring.position.set(0, -1.5, 0);
        ring.rotation.x = Math.PI / 2;
        triadGroup.add(ring);
      }
      return;
    }

    if (slideId === 3) {
      // Slide 3: Periods & Groups Properties (৭টি পর্যায় ও ১৮টি গ্রুপ)
      const groupArch = new THREE.Group();
      group.add(groupArch);

      // Circular 18 group spokes around a central periodic core
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 })
      );
      groupArch.add(core);
      addAnchor(core, 'পর্যায় সারণির কেন্দ্রবিন্দু', 'Periodic Nucleus Core', 'P-Core', '#38bdf8');

      for (let g = 0; g < 18; g++) {
        const angle = (g / 18) * Math.PI * 2;
        const x = Math.cos(angle) * 2.2;
        const y = Math.sin(angle) * 1.5;
        const color = g < 2 ? 0xf97316 : g < 12 ? 0xfacc15 : g < 17 ? 0x06b6d4 : 0xa855f7;
        const spoke = new THREE.Mesh(
          new THREE.SphereGeometry(0.16, 16, 16),
          new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.3 })
        );
        spoke.position.set(x, y, 0);
        groupArch.add(spoke);

        // Connecting radial ray
        const ray = new THREE.Mesh(
          new THREE.CylinderGeometry(0.02, 0.02, 1.5, 8),
          new THREE.MeshBasicMaterial({ color: 0x475569, transparent: true, opacity: 0.5 })
        );
        ray.position.set(x * 0.5, y * 0.5, 0);
        ray.rotation.z = angle - Math.PI / 2;
        groupArch.add(ray);
      }
      return;
    }

    if (slideId === 4) {
      // Slide 4: Electron Configuration - Aufbau Energy Staircase (1s 2s 2p 3s 3p 4s 3d)
      const aufbauGroup = new THREE.Group();
      group.add(aufbauGroup);

      const orbitals = [
        { name: '1s²', level: 1, x: -2.5, y: -1.8, color: 0x38bdf8 },
        { name: '2s²', level: 2, x: -1.7, y: -1.2, color: 0x06b6d4 },
        { name: '2p⁶', level: 3, x: -0.9, y: -0.6, color: 0x10b981 },
        { name: '3s²', level: 4, x: -0.1, y: 0.0, color: 0x84cc16 },
        { name: '3p⁶', level: 5, x: 0.7, y: 0.6, color: 0xeab308 },
        { name: '4s²', level: 6, x: 1.5, y: 1.1, color: 0xf97316 },
        { name: '3d¹⁰', level: 7, x: 2.3, y: 1.6, color: 0xec4899 }
      ];

      orbitals.forEach((orb) => {
        // Energy Step Pedestal
        const step = new THREE.Mesh(
          new THREE.BoxGeometry(0.65, 0.15, 0.5),
          new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.5, roughness: 0.3 })
        );
        step.position.set(orb.x, orb.y, 0);
        aufbauGroup.add(step);

        // Orbital Electron Cloud Sphere
        const orbSphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.24, 20, 20),
          new THREE.MeshStandardMaterial({ color: orb.color, emissive: orb.color, emissiveIntensity: 0.4 })
        );
        orbSphere.position.set(orb.x, orb.y + 0.3, 0);
        aufbauGroup.add(orbSphere);
        addAnchor(orbSphere, orb.name, `Aufbau Subshell ${orb.name}`, orb.name, '#38bdf8');
      });
      return;
    }

    if (slideId === 5) {
      // Slide 5: Exceptional Electron Configuration: Cr (24) & Cu (29) d-Orbital Rosette
      const excGroup = new THREE.Group();
      group.add(excGroup);

      // Central nucleus
      const nuc = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xd97706, emissiveIntensity: 0.5 })
      );
      excGroup.add(nuc);
      addAnchor(nuc, 'ক্রোমিয়াম ও কপার নিউক্লিয়াস', 'Cr & Cu Nucleus', 'Cr/Cu', '#f59e0b');

      // 5 d-orbital lobes in symmetrical cloverleaf formation (Half-filled 3d⁵ stability)
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2;
        const lobe = new THREE.Mesh(
          new THREE.SphereGeometry(0.38, 20, 20),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.8, emissive: 0x0284c7, emissiveIntensity: 0.4 })
        );
        lobe.scale.set(1.6, 0.7, 0.7);
        lobe.rotation.z = angle;
        lobe.position.set(Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, 0);
        excGroup.add(lobe);
      }

      // Outer 4s¹ single valence electron orbit
      const sRing = new THREE.Mesh(
        new THREE.TorusGeometry(2.4, 0.03, 16, 64),
        new THREE.MeshBasicMaterial({ color: 0xec4899, transparent: true, opacity: 0.7 })
      );
      excGroup.add(sRing);
      addAnchor(sRing, 'অর্ধপূর্ণ ৩d⁵ ও পূর্ণ ৩d¹⁰ অরবিটালের বিশেষ সুস্থিতি', 'Half & Full d-orbital Stability', '3d⁵/3d¹⁰', '#ec4899');
      return;
    }

    if (slideId === 6) {
      // Slide 6: Atomic Radius Periodic Trend (পারমাণবিক ব্যাসার্ধের হ্রাস-বৃদ্ধি)
      const radiusGroup = new THREE.Group();
      group.add(radiusGroup);

      // Period 3 atoms showing shrinkage left to right: Na (large) -> Mg -> Al -> Si -> Cl (small)
      const atoms = [
        { name: 'Na (সোডিয়াম)', r: 0.75, x: -2.4, color: 0x38bdf8 },
        { name: 'Mg (ম্যাগনেসিয়াম)', r: 0.62, x: -1.2, color: 0x06b6d4 },
        { name: 'Al (অ্যালুমিনিয়াম)', r: 0.52, x: 0.0, color: 0x10b981 },
        { name: 'P (ফসফরাস)', r: 0.42, x: 1.2, color: 0xf59e0b },
        { name: 'Cl (ক্লোরিন)', r: 0.32, x: 2.3, color: 0xef4444 }
      ];

      atoms.forEach((a) => {
        const mesh = new THREE.Mesh(
          new THREE.SphereGeometry(a.r, 28, 28),
          new THREE.MeshStandardMaterial({ color: a.color, metalness: 0.3, roughness: 0.3, emissive: a.color, emissiveIntensity: 0.35 })
        );
        mesh.position.set(a.x, 0, 0);
        radiusGroup.add(mesh);

        // Core nucleus inside
        const core = new THREE.Mesh(
          new THREE.SphereGeometry(0.12, 16, 16),
          new THREE.MeshBasicMaterial({ color: 0xffffff })
        );
        core.position.set(a.x, 0, 0);
        radiusGroup.add(core);

        addAnchor(mesh, `${a.name} ব্যাসার্ধ`, `${a.name} Radius`, a.name.split(' ')[0], '#38bdf8');
      });
      return;
    }

    if (slideId === 7) {
      // Slide 7: Ionization Energy (আয়নীকরণ শক্তি) - Electron Ejection
      const ionGroup = new THREE.Group();
      group.add(ionGroup);

      // Central positive nucleus
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.65, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xd97706, emissiveIntensity: 0.5 })
      );
      ionGroup.add(core);
      addAnchor(core, 'ধনাত্মক নিউক্লিয়াস (প্রোটন টান)', 'Positive Nucleus Pull', 'Z+', '#ef4444');

      // Outer orbit track
      const orbit = new THREE.Mesh(
        new THREE.TorusGeometry(1.8, 0.03, 16, 64),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.5 })
      );
      ionGroup.add(orbit);

      // Ejected electron with outward impulse vector
      const electron = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 1 })
      );
      electron.position.set(2.4, 1.2, 0);
      ionGroup.add(electron);
      addAnchor(electron, 'অপসারিত যোজ্যতা ইলেকট্রন (e⁻)', 'Ejected Valence Electron', 'e⁻', '#facc15');

      // Energy arrow / laser pulse (Ionization Energy input ΔH > 0)
      const arrow = new THREE.Mesh(
        new THREE.CylinderGeometry(0.04, 0.12, 1.6, 16),
        new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x9333ea, emissiveIntensity: 0.8 })
      );
      arrow.position.set(1.4, 0.7, 0);
      arrow.rotation.z = -Math.PI / 4;
      ionGroup.add(arrow);
      addAnchor(arrow, 'প্রদত্ত আয়নীকরণ বিভব (ΔH > ০)', 'Supplied Ionization Energy', 'IE (kJ/mol)', '#a855f7');
      return;
    }

    if (slideId === 8) {
      // Slide 8: Electron Affinity (ইলেকট্রন আসক্তি) - Halogen Capturing Electron
      const eaGroup = new THREE.Group();
      group.add(eaGroup);

      // Chlorine Halogen valence shell (7 electrons, 1 vacant hole)
      const halogen = new THREE.Mesh(
        new THREE.SphereGeometry(0.9, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0x10b981, transparent: true, opacity: 0.45, roughness: 0.2 })
      );
      eaGroup.add(halogen);

      // 7 valence electrons on shell
      for (let i = 0; i < 7; i++) {
        const ang = (i / 8) * Math.PI * 2;
        const e = new THREE.Mesh(
          new THREE.SphereGeometry(0.14, 16, 16),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 })
        );
        e.position.set(Math.cos(ang) * 0.9, Math.sin(ang) * 0.9, 0);
        eaGroup.add(e);
      }

      // Incoming electron entering the 8th vacancy
      const incE = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 1 })
      );
      incE.position.set(1.8, 0, 0);
      eaGroup.add(incE);
      addAnchor(incE, 'প্রবেশকারী ইলেকট্রন ও মুক্ত শক্তি', 'Incoming Electron (Energy Released)', 'EA (e⁻)', '#facc15');
      return;
    }

    if (slideId === 9) {
      // Slide 9: Electronegativity (তড়িৎ ঋণাত্মকতা) - Polar Shared Pair (HCl / HF)
      const enGroup = new THREE.Group();
      group.add(enGroup);

      // Hydrogen Atom (Small, low EN = 2.1)
      const h = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.3 })
      );
      h.position.set(-1.8, 0, 0);
      enGroup.add(h);
      addAnchor(h, 'হাইড্রোজেন (আংশিক ধনাত্মক δ⁺)', 'Hydrogen (Partial δ+)', 'H (δ⁺)', '#38bdf8');

      // Chlorine Atom (Large, high EN = 3.0)
      const cl = new THREE.Mesh(
        new THREE.SphereGeometry(0.85, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.4 })
      );
      cl.position.set(1.4, 0, 0);
      enGroup.add(cl);
      addAnchor(cl, 'ক্লোরিন (আংশিক ঋণাত্মক δ⁻)', 'Chlorine (Partial δ-)', 'Cl (δ⁻)', '#10b981');

      // Distorted shared electron cloud shifted toward Cl
      const cloud = new THREE.Mesh(
        new THREE.CylinderGeometry(0.45, 0.25, 2.2, 24),
        new THREE.MeshStandardMaterial({ color: 0xa855f7, transparent: true, opacity: 0.5, emissive: 0x7e22ce, emissiveIntensity: 0.4 })
      );
      cloud.rotation.z = Math.PI / 2;
      cloud.position.set(-0.2, 0, 0);
      enGroup.add(cloud);
      addAnchor(cloud, 'শেয়ারকৃত ইলেকট্রন মেঘ ক্লোরিনের দিকে আকৃষ্ট', 'Shifted Shared Pair', 'EN Shift', '#a855f7');
      return;
    }

    if (slideId === 10) {
      // Slide 10: Metallic vs Non-metallic Character (ধাতব বনাম অধাতব ধর্ম)
      const charGroup = new THREE.Group();
      group.add(charGroup);

      // Left: Shiny Metallic Crystal Lattice
      const metalLattice = new THREE.Group();
      metalLattice.position.set(-1.6, 0, 0);
      charGroup.add(metalLattice);

      for (let x = -0.6; x <= 0.6; x += 0.6) {
        for (let y = -0.6; y <= 0.6; y += 0.6) {
          const mAtom = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.8, roughness: 0.1, emissive: 0xb45309, emissiveIntensity: 0.3 })
          );
          mAtom.position.set(x, y, 0);
          metalLattice.add(mAtom);
        }
      }
      addAnchor(metalLattice, 'ধাতব কাঠামো (উচ্চ পরিবাহী ও উজ্জ্বল)', 'Metallic Lattice (Conductive)', 'Metal', '#f59e0b');

      // Right: Discrete Non-metal Diatomic Gas Molecules
      const nonMetalGroup = new THREE.Group();
      nonMetalGroup.position.set(1.6, 0, 0);
      charGroup.add(nonMetalGroup);

      const d1 = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x0891b2, emissiveIntensity: 0.4 }));
      d1.position.set(-0.25, 0.4, 0);
      nonMetalGroup.add(d1);
      const d2 = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x0891b2, emissiveIntensity: 0.4 }));
      d2.position.set(0.25, 0.4, 0);
      nonMetalGroup.add(d2);

      const d3 = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x7e22ce, emissiveIntensity: 0.4 }));
      d3.position.set(-0.25, -0.5, 0);
      nonMetalGroup.add(d3);
      const d4 = new THREE.Mesh(new THREE.SphereGeometry(0.25, 16, 16), new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x7e22ce, emissiveIntensity: 0.4 }));
      d4.position.set(0.25, -0.5, 0);
      nonMetalGroup.add(d4);

      addAnchor(nonMetalGroup, 'অধাতব অণু (বিচ্ছিন্ন দ্বি-পরমাণুক গ্যাস)', 'Non-metal Diatomic Gas', 'Non-metal', '#06b6d4');
      return;
    }

    if (slideId === 11) {
      // Slide 11: Special Chemical Groups (ক্ষাড় ধাতু, হ্যালোজেন, নিষ্ক্রিয় গ্যাস)
      const specialGroup = new THREE.Group();
      group.add(specialGroup);

      // Group 1: Alkali Metal Flame (Orange Sphere)
      const alkali = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0xf97316, emissive: 0xea580c, emissiveIntensity: 0.5 })
      );
      alkali.position.set(-2.2, 0.5, 0);
      specialGroup.add(alkali);
      addAnchor(alkali, 'গ্রুপ ১: ক্ষার ধাতু (তীব্র সক্রিয়)', 'Group 1: Alkali Metals', 'Alkali (G1)', '#f97316');

      // Group 2: Alkaline Earth Metal (Amber)
      const alkEarth = new THREE.Mesh(
        new THREE.SphereGeometry(0.45, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xca8a04, emissiveIntensity: 0.4 })
      );
      alkEarth.position.set(-0.7, 0.5, 0);
      specialGroup.add(alkEarth);
      addAnchor(alkEarth, 'গ্রুপ ২: মৃৎক্ষার ধাতু', 'Group 2: Alkaline Earth', 'Alk-Earth', '#facc15');

      // Group 17: Halogen Diatomic Pair (Emerald)
      const halogenPair = new THREE.Group();
      halogenPair.position.set(0.8, 0.5, 0);
      specialGroup.add(halogenPair);
      const x1 = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 20), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.4 }));
      x1.position.x = -0.25;
      const x2 = new THREE.Mesh(new THREE.SphereGeometry(0.32, 20, 20), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.4 }));
      x2.position.x = 0.25;
      halogenPair.add(x1);
      halogenPair.add(x2);
      addAnchor(halogenPair, 'গ্রুপ ১৭: হ্যালোজেন (লবণ উৎপাদক)', 'Group 17: Halogens', 'Halogen (G17)', '#10b981');

      // Group 18: Noble Gas Glowing Sphere (Purple Neon)
      const noble = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x9333ea, emissiveIntensity: 0.6 })
      );
      noble.position.set(2.4, 0.5, 0);
      specialGroup.add(noble);
      addAnchor(noble, 'গ্রুপ ১৮: নিষ্ক্রিয় গ্যাস (স্থিতিশীল)', 'Group 18: Noble Gases', 'Noble Gas (G18)', '#a855f7');
      return;
    }

    if (slideId === 12) {
      // Slide 12: Periodic Table Limitations & Hydrogen Controversy (হাইড্রোজেন বিতর্ক)
      const limitGroup = new THREE.Group();
      group.add(limitGroup);

      // Hydrogen Atom suspended between two pillars
      const hAtom = new THREE.Mesh(
        new THREE.SphereGeometry(0.45, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.6 })
      );
      hAtom.position.set(0, 1.2, 0);
      limitGroup.add(hAtom);
      addAnchor(hAtom, 'হাইড্রোজেনের বিতর্কিত অবস্থান (গ্রুপ ১ নাকি ১৭?)', 'Hydrogen Position Controversy', 'H (1 vs 17)', '#38bdf8');

      // Pillar Left: Group 1 Alkali Metal
      const p1 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.4, 2.0, 16),
        new THREE.MeshStandardMaterial({ color: 0xf97316, emissive: 0xc2410c, emissiveIntensity: 0.3 })
      );
      p1.position.set(-1.8, -0.2, 0);
      limitGroup.add(p1);
      addAnchor(p1, 'গ্রুপ ১ এর মতো ১টি যোজ্য e⁻', 'Like Group 1 (1s¹)', 'Grp 1', '#f97316');

      // Pillar Right: Group 17 Halogen
      const p17 = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.4, 2.0, 16),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x047857, emissiveIntensity: 0.3 })
      );
      p17.position.set(1.8, -0.2, 0);
      limitGroup.add(p17);
      addAnchor(p17, 'গ্রুপ ১৭ এর মতো ১টি e⁻ ঘাটতি', 'Like Group 17 (needs 1 e⁻)', 'Grp 17', '#10b981');
      return;
    }
  }

  // -------------------------------------------------------------------------
  // CHEMISTRY CHAPTER 5: CHEMICAL BONDING (রাসায়নিক বন্ধন)
  // -------------------------------------------------------------------------
  if (chapter === 5) {
    if (slideId === 1) {
      // Slide 1: Valence Electrons (যোজ্যতা ইলেকট্রন)
      const valGroup = new THREE.Group();
      group.add(valGroup);

      // Core Nucleus
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.4 })
      );
      valGroup.add(core);

      // Inner shell ring
      const inRing = new THREE.Mesh(
        new THREE.TorusGeometry(1.1, 0.02, 12, 48),
        new THREE.MeshBasicMaterial({ color: 0x64748b, transparent: true, opacity: 0.4 })
      );
      valGroup.add(inRing);

      // Outer Valence shell ring
      const outRing = new THREE.Mesh(
        new THREE.TorusGeometry(2.1, 0.03, 16, 64),
        new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.6 })
      );
      valGroup.add(outRing);

      // 4 Valence electrons on outer shell
      for (let i = 0; i < 4; i++) {
        const ang = (i / 4) * Math.PI * 2;
        const e = new THREE.Mesh(
          new THREE.SphereGeometry(0.16, 16, 16),
          new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 0.8 })
        );
        e.position.set(Math.cos(ang) * 2.1, Math.sin(ang) * 2.1, 0);
        valGroup.add(e);
      }
      addAnchor(outRing, 'বহিঃস্থ স্তরের যোজ্যতা ইলেকট্রনসমূহ', 'Valence Shell Electrons', 'Valence e⁻', '#facc15');
      return;
    }

    if (slideId === 2) {
      // Slide 2: Octet and Duet Rule (অষ্টক ও দুইয়ের নিয়ম)
      const octetGroup = new THREE.Group();
      group.add(octetGroup);

      // Left: Helium Duet (২টি ইলেকট্রন পূর্ণ)
      const heGroup = new THREE.Group();
      heGroup.position.set(-1.8, 0, 0);
      octetGroup.add(heGroup);
      const heCore = new THREE.Mesh(new THREE.SphereGeometry(0.4, 20, 20), new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.4 }));
      heGroup.add(heCore);
      for (let i = 0; i < 2; i++) {
        const ang = i * Math.PI;
        const e = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 0.8 }));
        e.position.set(Math.cos(ang) * 0.9, Math.sin(ang) * 0.9, 0);
        heGroup.add(e);
      }
      addAnchor(heGroup, 'হিলিয়াম দুইয়ের নিয়ম (Duet)', 'Helium Duet Rule (1s²)', 'Duet (He)', '#38bdf8');

      // Right: Neon Octet (৮টি ইলেকট্রন সুস্থিতি)
      const neGroup = new THREE.Group();
      neGroup.position.set(1.8, 0, 0);
      octetGroup.add(neGroup);
      const neCore = new THREE.Mesh(new THREE.SphereGeometry(0.5, 24, 24), new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x7e22ce, emissiveIntensity: 0.4 }));
      neGroup.add(neCore);
      for (let i = 0; i < 8; i++) {
        const ang = (i / 8) * Math.PI * 2;
        const e = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.8 }));
        e.position.set(Math.cos(ang) * 1.3, Math.sin(ang) * 1.3, 0);
        neGroup.add(e);
      }
      addAnchor(neGroup, 'নিয়ন অষ্টক নিয়ম (Octet)', 'Neon Stable Octet (s²p⁶)', 'Octet (Ne)', '#10b981');
      return;
    }

    if (slideId === 3) {
      // Slide 3: Inert Noble Gases Stability (নিষ্ক্রিয় গ্যাসের স্থিতিশীলতা)
      const nobleGroup = new THREE.Group();
      group.add(nobleGroup);

      // Glowing Argon atom with complete impenetrable octet force shield
      const arCore = new THREE.Mesh(
        new THREE.SphereGeometry(0.65, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0xa855f7, emissive: 0x9333ea, emissiveIntensity: 0.6 })
      );
      nobleGroup.add(arCore);

      // Outer protective glowing shield sphere
      const shield = new THREE.Mesh(
        new THREE.SphereGeometry(1.8, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.25, roughness: 0.1, emissive: 0x0284c7, emissiveIntensity: 0.4 })
      );
      nobleGroup.add(shield);

      addAnchor(shield, 'নিষ্ক্রিয় গ্যাসের পূর্ণ ইলেকট্রন প্রতিরোধী বলয়', 'Noble Gas Shield (Non-reactive)', 'Inert [Ar]', '#a855f7');
      return;
    }

    if (slideId === 4) {
      // Slide 4: Reason for Chemical Bonding (সর্বনিম্ন শক্তি ও স্থিতিশীলতা)
      const bondReasonGroup = new THREE.Group();
      group.add(bondReasonGroup);

      // Potential energy curve 3D surface / curve
      const curvePoints = [];
      for (let r = 0.8; r <= 3.5; r += 0.1) {
        // Lennard-Jones potential approximation: V(r) = 4 * ((1/r)^12 - (1/r)^6)
        const v = 2.5 * (Math.pow(1.4 / r, 8) - Math.pow(1.4 / r, 4));
        curvePoints.push(new THREE.Vector3(r - 2.0, Math.min(Math.max(v, -1.8), 2.0), 0));
      }

      const curveGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const curveMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, linewidth: 3 });
      const line = new THREE.Line(curveGeo, curveMat);
      bondReasonGroup.add(line);

      // Lowest energy point marker (Bond Equilibrium r0)
      const eqSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.25, 20, 20),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.8 })
      );
      eqSphere.position.set(-0.6, -1.5, 0);
      bondReasonGroup.add(eqSphere);
      addAnchor(eqSphere, 'সর্বনিম্ন স্থিতিশক্তি ও বন্ধন দূরত্ব (r₀)', 'Minimum Potential Energy Well', 'E_min', '#10b981');
      return;
    }

    if (slideId === 5) {
      // Slide 5: Ion Formation - Cation & Anion (ইলেকট্রন স্থানান্তর)
      const ionFormGroup = new THREE.Group();
      group.add(ionFormGroup);

      // Sodium Cation Na+ (Gives 1 e-, shrinks in size)
      const na = new THREE.Mesh(
        new THREE.SphereGeometry(0.45, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 })
      );
      na.position.set(-1.8, 0, 0);
      ionFormGroup.add(na);
      addAnchor(na, 'সোডিয়াম ক্যাটায়ন (Na⁺)', 'Sodium Cation (Na+)', 'Na⁺', '#38bdf8');

      // Chlorine Anion Cl- (Takes 1 e-, expands in size)
      const cl = new THREE.Mesh(
        new THREE.SphereGeometry(0.85, 32, 32),
        new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.5 })
      );
      cl.position.set(1.8, 0, 0);
      ionFormGroup.add(cl);
      addAnchor(cl, 'ক্লোরাইড অ্যানায়ন (Cl⁻)', 'Chloride Anion (Cl-)', 'Cl⁻', '#10b981');

      // Transferred electron moving in mid-flight
      const eTrans = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xfacc15, emissive: 0xeab308, emissiveIntensity: 1 })
      );
      eTrans.position.set(0, 0.4, 0);
      ionFormGroup.add(eTrans);
      addAnchor(eTrans, 'স্থানান্তরিত ইলেকট্রন (e⁻)', 'Transferred Electron', 'e⁻ Flow', '#facc15');
      return;
    }

    if (slideId === 6) {
      // Slide 6: Ionic Bond - NaCl Face-Centered Cubic Crystal Lattice
      const lattice = new THREE.Group();
      group.add(lattice);

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          for (let z = -1; z <= 1; z++) {
            const isNa = (x + y + z) % 2 === 0;
            const r = isNa ? 0.22 : 0.35; // Na+ is smaller than Cl-
            const color = isNa ? 0x38bdf8 : 0x10b981; // Blue for Na+, Green for Cl-
            const sphere = new THREE.Mesh(
              new THREE.SphereGeometry(r, 16, 16),
              new THREE.MeshStandardMaterial({ color, metalness: 0.3, roughness: 0.2, emissive: color, emissiveIntensity: 0.4 })
            );
            sphere.position.set(x * 1.1, y * 1.1, z * 1.1);
            lattice.add(sphere);
          }
        }
      }
      addAnchor(lattice, 'আয়নিক কেলাস ল্যাটিস (NaCl কেলাস)', 'Ionic Crystal Lattice (Na⁺ & Cl⁻)', 'NaCl(s)', '#10b981');
      return;
    }

    if (slideId === 7) {
      // Slide 7: Covalent Bond & Electron Sharing (মিথেন CH₄ ও পানি H₂O)
      const covGroup = new THREE.Group();
      group.add(covGroup);

      // Central Carbon atom
      const cAtom = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x334155, emissive: 0x1e293b, emissiveIntensity: 0.5 })
      );
      covGroup.add(cAtom);
      addAnchor(cAtom, 'কেন্দ্রীয় কার্বন পরমাণু', 'Central Carbon Atom (C)', 'C', '#94a3b8');

      // 4 Hydrogen atoms in tetrahedral geometry
      const tetCoords = [
        new THREE.Vector3(1, 1, 1).normalize().multiplyScalar(1.5),
        new THREE.Vector3(-1, -1, 1).normalize().multiplyScalar(1.5),
        new THREE.Vector3(-1, 1, -1).normalize().multiplyScalar(1.5),
        new THREE.Vector3(1, -1, -1).normalize().multiplyScalar(1.5)
      ];

      tetCoords.forEach((pos) => {
        const h = new THREE.Mesh(
          new THREE.SphereGeometry(0.28, 16, 16),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 })
        );
        h.position.copy(pos);
        covGroup.add(h);

        // Covalent bond cylinder
        const bond = new THREE.Mesh(
          new THREE.CylinderGeometry(0.06, 0.06, 1.5, 12),
          new THREE.MeshStandardMaterial({ color: 0xffffff })
        );
        bond.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pos.clone().normalize());
        bond.position.copy(pos.clone().multiplyScalar(0.5));
        covGroup.add(bond);
      });
      addAnchor(covGroup, 'সমযোজী অণু (মিথেন CH₄ টেট্রাহেড্রাল)', 'Covalent Molecule (Methane CH₄)', 'CH₄', '#38bdf8');
      return;
    }

    if (slideId === 8) {
      // Slide 8: Properties Comparison - Ionic (High MP) vs Covalent (Low MP)
      const compGroup = new THREE.Group();
      group.add(compGroup);

      // Left: Rigid ionic crystal framework
      const ionicBox = new THREE.Mesh(
        new THREE.BoxGeometry(1.6, 1.6, 1.6),
        new THREE.MeshStandardMaterial({ color: 0x10b981, wireframe: true })
      );
      ionicBox.position.set(-1.8, 0, 0);
      compGroup.add(ionicBox);
      addAnchor(ionicBox, 'আয়নিক যৌগ (উচ্চ গলনাঙ্ক ও স্ফুটনাঙ্ক)', 'Ionic Compound (High MP/BP)', 'Ionic', '#10b981');

      // Right: Discrete floating covalent molecules
      const covCluster = new THREE.Group();
      covCluster.position.set(1.8, 0, 0);
      compGroup.add(covCluster);

      for (let i = 0; i < 3; i++) {
        const m = new THREE.Mesh(
          new THREE.SphereGeometry(0.28, 16, 16),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.4 })
        );
        m.position.set((i - 1) * 0.7, (i % 2 === 0 ? 0.3 : -0.3), 0);
        covCluster.add(m);
      }
      addAnchor(covCluster, 'সমযোজী যৌগ (নিম্ন গলনাঙ্ক ও দ্রাব্যতা)', 'Covalent Compound (Low MP/BP)', 'Covalent', '#38bdf8');
      return;
    }

    if (slideId === 9) {
      // Slide 9: Metallic Bond - Electron Sea Model (ইলেকট্রন সমুদ্র মডেল)
      const metalBondGroup = new THREE.Group();
      group.add(metalBondGroup);

      // Positive metal cations grid
      for (let x = -1.2; x <= 1.2; x += 0.8) {
        for (let y = -0.8; y <= 0.8; y += 0.8) {
          const cation = new THREE.Mesh(
            new THREE.SphereGeometry(0.22, 16, 16),
            new THREE.MeshStandardMaterial({ color: 0xf59e0b, emissive: 0xb45309, emissiveIntensity: 0.5 })
          );
          cation.position.set(x, y, 0);
          metalBondGroup.add(cation);
        }
      }

      // Delocalized electron sea (glowing cyan dots wandering)
      for (let i = 0; i < 20; i++) {
        const e = new THREE.Mesh(
          new THREE.SphereGeometry(0.06, 10, 10),
          new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
        );
        e.position.set((Math.random() - 0.5) * 3.2, (Math.random() - 0.5) * 2.2, (Math.random() - 0.5) * 0.6);
        metalBondGroup.add(e);
      }
      addAnchor(metalBondGroup, 'ধাতব বন্ধনে মুক্ত সঞ্চরণশীল ইলেকট্রন সমুদ্র', 'Metallic Bond (Electron Sea)', 'Electron Sea', '#f59e0b');
      return;
    }

    if (slideId === 10) {
      // Slide 10: Polarity in Covalent Bonds (পানি H₂O পোলার অণু ও ডাইপোল)
      const polarGroup = new THREE.Group();
      group.add(polarGroup);

      // Oxygen Atom (Bent structure, angle 104.5°)
      const oAtom = new THREE.Mesh(
        new THREE.SphereGeometry(0.6, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0xb91c1c, emissiveIntensity: 0.4 })
      );
      polarGroup.add(oAtom);
      addAnchor(oAtom, 'অক্সিজেন (আংশিক ঋণাত্মক δ⁻)', 'Oxygen (Partial δ-)', 'O (δ⁻)', '#ef4444');

      // 2 Hydrogen atoms at 104.5 degree angle
      const rad = (104.5 / 2) * (Math.PI / 180);
      const h1Pos = new THREE.Vector3(-Math.sin(rad) * 1.3, -Math.cos(rad) * 1.3, 0);
      const h2Pos = new THREE.Vector3(Math.sin(rad) * 1.3, -Math.cos(rad) * 1.3, 0);

      [h1Pos, h2Pos].forEach((pos, idx) => {
        const h = new THREE.Mesh(
          new THREE.SphereGeometry(0.3, 16, 16),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 })
        );
        h.position.copy(pos);
        polarGroup.add(h);

        // Bond
        const bond = new THREE.Mesh(
          new THREE.CylinderGeometry(0.06, 0.06, 1.3, 12),
          new THREE.MeshStandardMaterial({ color: 0xffffff })
        );
        bond.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pos.clone().normalize());
        bond.position.copy(pos.clone().multiplyScalar(0.5));
        polarGroup.add(bond);

        addAnchor(h, `হাইড্রোজেন ${idx + 1} (আংশিক ধনাত্মক δ⁺)`, `Hydrogen ${idx + 1} (δ+)`, 'H (δ⁺)', '#38bdf8');
      });
      return;
    }

    if (slideId === 11) {
      // Slide 11: Intermolecular Hydrogen Bonds (হাইড্রোজেন বন্ধন ও ভ্যান ডার ওয়ালস)
      const hBondGroup = new THREE.Group();
      group.add(hBondGroup);

      // Two Water molecules linked by dotted hydrogen bond
      const w1 = new THREE.Group();
      w1.position.set(-1.4, 0.5, 0);
      const o1 = new THREE.Mesh(new THREE.SphereGeometry(0.45, 20, 20), new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0x991b1b, emissiveIntensity: 0.4 }));
      w1.add(o1);
      hBondGroup.add(w1);

      const w2 = new THREE.Group();
      w2.position.set(1.4, -0.5, 0);
      const o2 = new THREE.Mesh(new THREE.SphereGeometry(0.45, 20, 20), new THREE.MeshStandardMaterial({ color: 0xef4444, emissive: 0x991b1b, emissiveIntensity: 0.4 }));
      w2.add(o2);
      hBondGroup.add(w2);

      // Dotted Hydrogen Bond between w1 and w2
      for (let i = -0.8; i <= 0.8; i += 0.3) {
        const dot = new THREE.Mesh(
          new THREE.SphereGeometry(0.06, 8, 8),
          new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
        );
        dot.position.set(i * 1.2, -i * 0.4, 0);
        hBondGroup.add(dot);
      }
      addAnchor(hBondGroup, 'আন্তঃআণবিক হাইড্রোজেন বন্ধন (পানিতে শক্তিশালী সংযোগ)', 'Intermolecular Hydrogen Bond', 'H-Bond', '#38bdf8');
      return;
    }

    if (slideId === 12) {
      // Slide 12: Bond Energy & Dissociation (বন্ধন শক্তি ও রাসায়নিক বিক্রিয়ার গুরুত্ব)
      const energyGroup = new THREE.Group();
      group.add(energyGroup);

      // Covalent diatomic bond undergoing cleavage
      const a1 = new THREE.Mesh(new THREE.SphereGeometry(0.45, 20, 20), new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x0891b2, emissiveIntensity: 0.4 }));
      a1.position.set(-1.4, 0, 0);
      energyGroup.add(a1);

      const a2 = new THREE.Mesh(new THREE.SphereGeometry(0.45, 20, 20), new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x0891b2, emissiveIntensity: 0.4 }));
      a2.position.set(1.4, 0, 0);
      energyGroup.add(a2);

      // Energy flash / flame in between (Bond Breaking consumes energy ΔH > 0)
      const flame = new THREE.Mesh(
        new THREE.ConeGeometry(0.4, 1.2, 16),
        new THREE.MeshStandardMaterial({ color: 0xf97316, emissive: 0xea580c, emissiveIntensity: 0.8 })
      );
      flame.position.set(0, 0, 0);
      energyGroup.add(flame);
      addAnchor(flame, 'বন্ধন ভাঙতে প্রয়োজনীয় বন্ধন শক্তি (ΔH)', 'Bond Dissociation Energy', 'Bond Energy', '#f97316');
      return;
    }
  }
}

/**
 * Handles Real-time 3D Animation Loop Physics Updates for Physics Chapters
 */
export function updatePhysics3DPhysics(
  slideId: number,
  time: number,
  refs: any,
  chapter: number
) {
  // Chapter 4 Animations
  if (chapter === 4) {
    // Slide 3: Turbine Rotor & Shaft Spinning
    if (slideId === 3 && refs.turbineRotor) {
      refs.turbineRotor.rotation.y = time * 3.5;
    }

    // Slide 4: Vehicle cruising along track
    if (slideId === 4 && refs.cart) {
      refs.cart.position.x = ((time * 2.2) % 7.0) - 3.5;
    }

    // Slide 6: Spring Harmonic Mass Oscillation
    if (slideId === 6 && refs.springMass && refs.springCoil) {
      const xOsc = Math.sin(time * 3.0) * 0.9;
      refs.springMass.position.x = 0.5 + xOsc;
      refs.springCoil.scale.x = 1.0 + xOsc * 0.45;
    }

    // Slide 7: Free Fall Ball Falling & Gauges Synchronized
    if (slideId === 7 && refs.freeFallBall && refs.epGauge && refs.ekGauge) {
      const dropCycle = (time * 0.8) % 2.5; // 0 to 2.5 sec
      const normY = Math.max(0, 1.0 - (dropCycle / 2.0)); // 1.0 at top down to 0 at bottom
      const ballY = -2.6 + normY * 5.2;
      refs.freeFallBall.position.y = ballY;

      // Ep height scales with height, Ek height scales with drop distance
      refs.epGauge.scale.y = Math.max(0.05, normY);
      refs.ekGauge.scale.y = Math.max(0.05, 1.0 - normY);
      refs.epGauge.position.y = 0.8 * normY;
      refs.ekGauge.position.y = -0.8 * (1.0 - normY);
    }

    // Slide 8: Simple Pendulum Harmonic Angular Oscillation
    if (slideId === 8 && refs.pendulumPivot) {
      const maxAngle = 0.48; // ~27 degrees
      refs.pendulumPivot.rotation.z = Math.sin(time * 2.5) * maxAngle;
    }

    // Slide 9: Wind Turbine Rotor Spinning
    if (slideId === 9 && refs.windRotor) {
      refs.windRotor.rotation.z = time * 2.8;
    }

    // Slide 11: Electric Motor Impeller Spinning
    if (slideId === 11 && refs.pumpImpeller) {
      refs.pumpImpeller.rotation.y = time * 5.0;
    }

    // Slide 12: Motor Output Shaft Spinning
    if (slideId === 12 && refs.motorShaft) {
      refs.motorShaft.rotation.x = time * 4.0;
    }
  }

  // Chapter 5 Animations
  if (chapter === 5) {
    // Slide 3: Hydraulic Press Pumping (Small Piston vs Large Car Lift)
    if (slideId === 3 && refs.smallPiston && refs.largePiston) {
      const cycle = Math.sin(time * 2.0);
      refs.smallPiston.position.y = -0.4 - cycle * 0.35;
      refs.largePiston.position.y = -0.4 + cycle * 0.08; // Hydraulic multiplier inverse displacement
    }

    // Slide 4: Submerged Cylinder Bobbing in Fluid
    if (slideId === 4 && refs.submergedObj) {
      refs.submergedObj.position.y = -0.6 + Math.sin(time * 2.0) * 0.12;
    }

    // Slide 6: Ship Hull Rolling & Pitching in Sea Waves
    if (slideId === 6 && refs.shipHull) {
      refs.shipHull.rotation.z = Math.sin(time * 1.4) * 0.04;
      refs.shipHull.position.y = -0.7 + Math.sin(time * 2.0) * 0.05;
    }

    // Slide 9: Plasma Discharge Filaments Pulsing
    if (slideId === 9 && refs.plasmaFilaments) {
      refs.plasmaFilaments.rotation.y = time * 0.3;
      refs.plasmaFilaments.children.forEach((child: any, idx: number) => {
        child.scale.setScalar(0.95 + Math.sin(time * 8.0 + idx) * 0.08);
      });
    }

    // Slide 12: Vehicle Shock Absorber Spring Bouncing
    if (slideId === 12 && refs.suspensionSpring) {
      refs.suspensionSpring.scale.y = 1.0 + Math.sin(time * 3.5) * 0.15;
    }
  }

  // Chapter 7 Animations (Waves & Sound)
  if (chapter === 7) {
    const freq = refs.waveFreq || 2.5;
    const amp = refs.waveAmp || 1.0;
    const medSpeed = refs.waveMedium === 'iron' ? 2.8 : refs.waveMedium === 'water' ? 1.8 : 1.0;

    // Slide 1: SHM Spring & Pendulum
    if (slideId === 1) {
      if (refs.shmSpringMass) {
        const yOsc = Math.sin(time * freq * 1.4) * 0.45 * amp;
        refs.shmSpringMass.position.y = -0.3 + yOsc;
        if (refs.shmSpringCoil) {
          refs.shmSpringCoil.scale.y = 1.0 - yOsc * 0.5;
        }
      }
      if (refs.shmPendulum) {
        refs.shmPendulum.rotation.z = Math.sin(time * freq * 1.1) * 0.45 * amp;
      }
    }

    // Slide 2: Transverse & Longitudinal Waves
    if (slideId === 2) {
      if (refs.transverseParticles) {
        refs.transverseParticles.forEach((p: any) => {
          p.mesh.position.y = Math.sin(time * freq * 1.6 * medSpeed - p.index * 0.35) * 0.65 * amp;
        });
      }
      if (refs.longitudinalBars) {
        refs.longitudinalBars.forEach((b: any) => {
          b.mesh.position.x = b.baseOffset + Math.sin(time * freq * 1.6 * medSpeed - b.index * 0.4) * 0.08 * amp;
        });
      }
    }

    // Slide 3: Wave Characteristics Particle
    if (slideId === 3 && refs.charParticle) {
      const x = ((time * freq * 0.6 * medSpeed) % 6.0) - 3.0;
      refs.charParticle.position.x = x;
      refs.charParticle.position.y = Math.sin(x * 1.8) * 1.1 * amp;
    }

    // Slide 4: Wave Equation Train & Frequency Strobe
    if (slideId === 4) {
      if (refs.eqWaveTrain) {
        refs.eqWaveTrain.position.x = ((time * freq * 1.0 * medSpeed) % 4.4) - 2.2;
      }
      if (refs.eqFRing) {
        refs.eqFRing.rotation.z = time * freq * 2.0;
      }
    }

    // Slide 5: Tuning Fork Vibration & Sound Waves
    if (slideId === 5) {
      if (refs.forkProngL && refs.forkProngR) {
        const prongVib = Math.sin(time * 30.0) * 0.06 * amp;
        refs.forkProngL.position.x = -2.3 - prongVib;
        refs.forkProngR.position.x = -1.7 + prongVib;
      }
      if (refs.forkSoundRings) {
        refs.forkSoundRings.forEach((r: any, idx: number) => {
          const s = 1.0 + ((time * freq * 0.7 * medSpeed + idx * 0.4) % 1.5);
          r.scale.set(s, s, s);
        });
      }
    }

    // Slide 6: Speed in Mediums (Solid vs Liquid vs Gas)
    if (slideId === 6) {
      if (refs.solidPulse) {
        refs.solidPulse.position.y = -1.2 + ((time * 4.5 * (refs.waveMedium === 'iron' ? 1.5 : 1.0)) % 2.4);
      }
      if (refs.liquidPulse) {
        refs.liquidPulse.position.y = -1.2 + ((time * 2.2 * (refs.waveMedium === 'water' ? 1.5 : 1.0)) % 2.4);
      }
      if (refs.gasPulse) {
        refs.gasPulse.position.y = -1.2 + ((time * 0.9 * (refs.waveMedium === 'air' ? 1.5 : 1.0)) % 2.4);
      }
    }

    // Slide 7: Echo Reflection
    if (slideId === 7) {
      const cycle = (time * 1.2) % 3.0; // 0 to 3 sec
      if (refs.echoIncPulse && refs.echoRefPulse) {
        if (cycle < 1.5) {
          refs.echoIncPulse.visible = true;
          refs.echoRefPulse.visible = false;
          refs.echoIncPulse.position.x = -2.0 + (cycle / 1.5) * 4.0;
        } else {
          refs.echoIncPulse.visible = false;
          refs.echoRefPulse.visible = true;
          refs.echoRefPulse.position.x = 2.0 - ((cycle - 1.5) / 1.5) * 4.0;
        }
      }
    }

    // Slide 8: SONAR Ping Beam
    if (slideId === 8) {
      if (refs.sonarShip) {
        refs.sonarShip.position.y = 1.6 + Math.sin(time * 1.5) * 0.04;
      }
      if (refs.sonarBeam) {
        const s = 0.8 + ((time * 1.5) % 0.8);
        refs.sonarBeam.scale.set(s, 1.0, s);
      }
    }

    // Slide 9: Frequency Needle
    if (slideId === 9 && refs.specNeedle) {
      refs.specNeedle.position.x = Math.sin(time * 1.5) * 2.6;
    }

    // Slide 10: Ultrasound Scanning Beam
    if (slideId === 10 && refs.ultraScanBeam) {
      refs.ultraScanBeam.rotation.y = time * 2.0;
      refs.ultraScanBeam.scale.x = 0.9 + Math.sin(time * 4.0) * 0.2;
    }

    // Slide 11: Loudness & Pitch Waves
    if (slideId === 11) {
      if (refs.loudWave) refs.loudWave.position.y = Math.sin(time * 2.0) * 0.15;
      if (refs.pitchWave) refs.pitchWave.position.y = Math.sin(time * 4.5) * 0.1;
      if (refs.timbreWave) refs.timbreWave.rotation.z = Math.sin(time * 1.5) * 0.05;
    }

    // Slide 12: Decibel Meter Needle
    if (slideId === 12 && refs.dbNeedle) {
      refs.dbNeedle.rotation.z = -0.6 + Math.abs(Math.sin(time * 3.5)) * 1.2;
    }
  }
}
