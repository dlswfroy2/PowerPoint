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
}

/**
 * Builds Extra 3D Scenes for Chemistry Chapters 4 & 5 (Periodic Lattice & Chemical Bonds)
 */
export function buildChemistryExtra3DScene(
  slideId: number,
  chapter: number,
  group: THREE.Group,
  refs: any,
  addAnchor: AddAnchorFn
) {
  // Chemistry Chapter 4: Periodic Table & Trends 3D Model
  if (chapter === 4) {
    const grid = new THREE.Group();
    group.add(grid);

    // 3D Atomic radius variation grid across a period and group
    for (let period = 1; period <= 4; period++) {
      for (let groupCol = 1; groupCol <= 8; groupCol++) {
        // Atomic radius shrinks across a period (left to right) and expands down a group
        const radius = (0.55 - groupCol * 0.04) * (0.8 + period * 0.25);
        const atomGeo = new THREE.SphereGeometry(radius, 16, 16);
        const color = groupCol === 1 ? 0xef4444 : groupCol === 2 ? 0xf59e0b : groupCol === 7 ? 0x10b981 : groupCol === 8 ? 0xa855f7 : 0x38bdf8;
        const atomMat = new THREE.MeshStandardMaterial({ color, metalness: 0.4, roughness: 0.3, emissive: color, emissiveIntensity: 0.3 });
        const atom = new THREE.Mesh(atomGeo, atomMat);
        atom.position.set((groupCol - 4.5) * 0.85, (2.5 - period) * 1.1, 0);
        grid.add(atom);
      }
    }
    addAnchor(grid, 'পর্যায় সারণির মৌলসমূহ ও পারমাণবিক ব্যাসার্ধ', 'Periodic Table Elements Lattice (Radius Trend)', 'P-Table', '#38bdf8');
    return;
  }

  // Chemistry Chapter 5: Chemical Bonding 3D Model (NaCl Ionic Lattice & Covalent Share)
  if (chapter === 5) {
    if (slideId >= 1 && slideId <= 6) {
      // NaCl Face-Centered Ionic Crystal Lattice
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
            sphere.position.set(x * 1.2, y * 1.2, z * 1.2);
            lattice.add(sphere);
          }
        }
      }
      addAnchor(lattice, 'আয়নিক কেলাস ল্যাটিস (NaCl কেলাস)', 'Ionic Crystal Lattice (Na⁺ & Cl⁻)', 'NaCl(s)', '#10b981');
      return;
    } else {
      // Covalent Molecule (e.g. Methane CH4 / H2O)
      const covGroup = new THREE.Group();
      group.add(covGroup);

      // Central Carbon atom
      const cAtom = new THREE.Mesh(
        new THREE.SphereGeometry(0.6, 24, 24),
        new THREE.MeshStandardMaterial({ color: 0x334155, emissive: 0x1e293b, emissiveIntensity: 0.5 })
      );
      covGroup.add(cAtom);
      addAnchor(cAtom, 'কেন্দ্রীয় কার্বন পরমাণু', 'Central Carbon Atom (C)', 'C', '#94a3b8');

      // 4 Hydrogen atoms in tetrahedral geometry
      const tetCoords = [
        new THREE.Vector3(1, 1, 1).normalize().multiplyScalar(1.6),
        new THREE.Vector3(-1, -1, 1).normalize().multiplyScalar(1.6),
        new THREE.Vector3(-1, 1, -1).normalize().multiplyScalar(1.6),
        new THREE.Vector3(1, -1, -1).normalize().multiplyScalar(1.6)
      ];

      tetCoords.forEach((pos, idx) => {
        const h = new THREE.Mesh(
          new THREE.SphereGeometry(0.3, 16, 16),
          new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0284c7, emissiveIntensity: 0.5 })
        );
        h.position.copy(pos);
        covGroup.add(h);

        // Covalent bond cylinder
        const bond = new THREE.Mesh(
          new THREE.CylinderGeometry(0.08, 0.08, 1.6, 12),
          new THREE.MeshStandardMaterial({ color: 0xffffff })
        );
        bond.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pos.clone().normalize());
        bond.position.copy(pos.clone().multiplyScalar(0.5));
        covGroup.add(bond);
      });
      addAnchor(covGroup, 'সমযোজী অণু (মিথেন CH₄ টেট্রাহেড্রাল)', 'Covalent Molecule (Methane CH₄)', 'CH₄', '#38bdf8');
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
}
