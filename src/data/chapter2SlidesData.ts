import { Slide } from '../types/presentation';

export const chapter2Slides: Slide[] = [
  {
    id: 1,
    chapter: 2,
    title: 'অধ্যায় ২: পদার্থের অবস্থা',
    subtitle: 'States of Matter — কণার গতিতত্ত্ব, আন্তঃআণবিক আকর্ষণ ও তিন অবস্থা',
    category: 'সূচনা ও প্রেক্ষাপট',
    gallery: [
      {
        id: 'c2_s1_img1',
        url: '/src/assets/images/states_matter_three_1790754119855.jpg',
        titleBn: 'পদার্থের তিন অবস্থা (কঠিন, তরল, বায়বীয়)',
        titleEn: 'Three States of Matter (Solid, Liquid, Gas)',
        captionBn: 'কঠিন অবস্থায় কণাগুলোর দৃঢ় বিন্যাস, তরলে সাবলীল প্রবাহ এবং গ্যাসীয় অবস্থায় বিশৃঙ্খল তীব্র গতির তুলনামূলক রূপরেখা',
        captionEn: 'Comparison of tightly packed solid particles, fluid liquid molecules, and rapid chaotic gas particles',
        type: 'photo'
      },
      {
        id: 'c2_s1_img2',
        titleBn: 'কণার গতিতত্ত্ব ভেক্টর মডেল',
        titleEn: 'Kinetic Theory Vector Model',
        captionBn: 'তাপমাত্রা বৃদ্ধির সাথে কণার কম্পন ও স্থানান্তর গতিশক্তির বৃদ্ধি এবং আন্তঃআণবিক বন্ধন ভাঙনের রূপায়ন',
        captionEn: 'Vector diagram showing increase in vibrational and translational kinetic energy with temperature',
        type: 'diagram',
        customDiagramType: 'kineticStates'
      },
      {
        id: 'c2_s1_img3',
        url: '/src/assets/images/boiling_phase_change_1790754166610.jpg',
        titleBn: 'তাপীয় রূপান্তরের বাস্তব পর্যবেক্ষণ',
        titleEn: 'Thermal Phase Transition Observation',
        captionBn: 'ল্যাবরেটরিতে পানির অবস্থা রূপান্তর: ১০০°C তাপমাত্রায় তরল থেকে বাষ্পে রূপান্তর ও বুদবুদ সৃষ্টি',
        captionEn: 'Laboratory phase change of water: transition from liquid to gaseous vapor at 100°C',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'কঠিন কণা',
        labelEn: 'Solid Particle',
        symbol: '● (Solid)',
        detailBn: 'কণাগুলো অত্যন্ত কাছাকাছি নির্দিষ্ট অবস্থানে কেবল স্বস্থানে স্পন্দিত হয়; সুনির্দিষ্ট আকার ও আয়তন থাকে',
        detailEn: 'Particles are tightly packed in fixed positions, only vibrating in place; definite shape & volume',
        badgeType: 'solid',
        position: { x: 22, y: 55 }
      },
      {
        labelBn: 'তরল কণা',
        labelEn: 'Liquid Particle',
        symbol: '● (Liquid)',
        detailBn: 'কণাগুলোর মাঝে ফাঁক তুলনামূলক বেশি; পাত্রের আকার ধারণ করে কিন্তু নির্দিষ্ট আয়তন বজায় রাখে',
        detailEn: 'Particles have more space to slide past one another; takes shape of container with fixed volume',
        badgeType: 'liquid',
        position: { x: 50, y: 55 }
      },
      {
        labelBn: 'গ্যাসীয় কণা',
        labelEn: 'Gas Particle',
        symbol: '● (Gas)',
        detailBn: 'কণাগুলো পরস্পর থেকে অনেক দূরে অবিরাম দ্রুতগতিতে বিশৃঙ্খলভাবে ছোটাছুটি করে; পাত্রের সম্পূর্ণ আয়তন দখল করে',
        detailEn: 'Particles are far apart moving rapidly and chaotically; occupies entire volume of container',
        badgeType: 'gas',
        position: { x: 80, y: 45 }
      }
    ],
    keyPoints: [
      {
        heading: 'পদার্থের সংজ্ঞা ও বৈশিষ্ট্য',
        description: 'যার নির্দিষ্ট ভর আছে এবং যা কিছুটা স্থান দখল করে তাকে পদার্থ বলে। সাধারণ অবস্থায় পদার্থ কঠিন, তরল ও বায়বীয়—এই তিন অবস্থায় বিরাজ করে।',
        highlight: 'ভর ও আয়তন'
      },
      {
        heading: 'কণার গতিতত্ত্বের মূল ধারণা (Kinetic Theory)',
        description: 'সকল পদার্থই ক্ষুদ্রাতিক্ষুদ্র কণা (অণু/পরমাণু/আয়ন) দ্বারা গঠিত। এই কণাগুলোর মধ্যে বিদ্যমান আকর্ষণ বল এবং তাদের গতিশক্তির পারস্পরিক ভারসাম্যই পদার্থের ভৌত অবস্থা নির্ধারণ করে।',
        formula: 'E_k = \\frac{1}{2}mv^2 \\propto T'
      },
      {
        heading: 'তাপমাত্রার প্রভাব',
        description: 'তাপমাত্রা বৃদ্ধি পেলে কণাগুলোর গতিশক্তি বৃদ্ধি পায়, ফলে আন্তঃআণবিক আকর্ষণ বল হ্রাস পায় এবং পদার্থ কঠিন থেকে তরলে এবং পরবর্তীতে গ্যাসে রূপান্তরিত হয়।',
        highlight: 'তাপ ➯ গতিশক্তি বৃদ্ধি ➯ আকর্ষণ হ্রাস'
      }
    ],
    callout: {
      type: 'info',
      title: 'কণার গতিতত্ত্বের স্বর্ণসূত্র',
      content: 'কণার গতিশক্তি (Eₖ) সরাসরি পরম তাপমাত্রার (T) সমানুপাতিক। পরম শূন্য তাপমাত্রায় (0 Kelvin = -273.15°C) তাত্ত্বিকভাবে সকল কণার তাপীয় গতি সম্পূর্ণরূপে বন্ধ হয়ে যায়।'
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন যে ভৌত অবস্থার পরিবর্তনে পদার্থের রাসায়নিক গঠনে কোনো পরিবর্তন হয় না—বরং কণাগুলোর মধ্যকার দূরত্ব ও আকর্ষণ শক্তির মান পরিবর্তিত হয়।',
    recommendedInteractiveTab: 'kinetic'
  },
  {
    id: 2,
    chapter: 2,
    title: 'আন্তঃআণবিক আকর্ষণ বল ও দূরত্ব',
    subtitle: 'Intermolecular Attraction Force vs Intermolecular Distance',
    category: 'মৌলিক বলবিদ্যা',
    gallery: [
      {
        id: 'c2_s2_img1',
        titleBn: 'আন্তঃআণবিক বলের তুলনামূলক রূপরেখা',
        titleEn: 'Intermolecular Forces & Lattice',
        captionBn: 'কঠিনে তীব্র ভ্যান্ডার ওয়ালস আকর্ষণ, তরলে মাঝারি আকর্ষণ এবং গ্যাসীয় মাধ্যমে প্রায় নগণ্য বল',
        captionEn: 'Strong van der Waals force in solids, moderate in liquids, and negligible attraction in gases',
        type: 'diagram',
        customDiagramType: 'kineticStates'
      },
      {
        id: 'c2_s2_img2',
        url: '/src/assets/images/states_matter_three_1790754119855.jpg',
        titleBn: 'আণবিক সান্নিধ্য ও দৃঢ়তা',
        titleEn: 'Molecular Proximity & Rigidity',
        captionBn: 'কঠিন পদার্থের কণাগুলো সুনির্দিষ্ট জ্যামিতিক ল্যাটিস কাঠামোতে সাজানো থাকায় তাদের সংকোচনশীলতা সর্বনিম্ন',
        captionEn: 'Ordered crystal lattice in solid makes it practically incompressible compared to fluids',
        type: 'photo'
      },
      {
        id: 'c2_s2_img3',
        url: '/src/assets/images/boiling_phase_change_1790754166610.jpg',
        titleBn: 'তাপীয় প্রসারণ ও বলের পরিবর্তন',
        titleEn: 'Thermal Expansion & Force Decay',
        captionBn: 'তাপশক্তি শোষণের ফলে কণার বিস্তার বৃদ্ধি ও আন্তঃআণবিক বল দুর্বল হয়ে তরলে পরিণত হওয়ার দৃশ্য',
        captionEn: 'Absorption of heat causing larger vibrational amplitudes and weakening intermolecular bonds',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'আন্তঃআণবিক আকর্ষণ বল',
        labelEn: 'Intermolecular Force',
        symbol: 'F_attract',
        detailBn: 'পদার্থের অণুগুলোর মধ্যে পারস্পরিক আকর্ষণ বল; কঠিনে সর্বোচ্চ, গ্যাসে সর্বনিম্ন',
        detailEn: 'Mutual attraction between neighboring particles; maximum in solids, minimum in gases',
        badgeType: 'temperature',
        position: { x: 30, y: 40 }
      },
      {
        labelBn: 'আন্তঃআণবিক দূরত্ব',
        labelEn: 'Intermolecular Space',
        symbol: 'd_space',
        detailBn: 'পরপর দুটি কণার মধ্যবর্তী ফাঁকা স্থান; কঠিনে সর্বনিম্ন, গ্যাসে অত্যন্ত বেশি',
        detailEn: 'Distance between adjacent particles; minimal in solids, very large in gases',
        badgeType: 'gas',
        position: { x: 75, y: 60 }
      }
    ],
    keyPoints: [
      {
        heading: 'আন্তঃআণবিক আকর্ষণ বল (F)',
        description: 'কঠিন পদার্থের কণাগুলোর মধ্যবর্তী আকর্ষণ বল সবচেয়ে বেশি থাকে, তরলে কিছুটা কম এবং গ্যাসে এই বল প্রায় থাকেই না বললেই চলে।',
        highlight: 'কঠিন > তরল > গ্যাস'
      },
      {
        heading: 'আন্তঃআণবিক দূরত্ব (r)',
        description: 'কঠিনের কণাগুলো খুব ঠাসাঠাসি করে থাকে, ফলে মধ্যবর্তী ফাঁকা স্থান সর্বনিম্ন। গ্যাসে কণাগুলো অনেক দূরে ছড়িয়ে থাকে বলে দূরত্ব সর্বোচ্চ।',
        highlight: 'গ্যাস > তরল > কঠিন'
      }
    ],
    tableData: {
      headers: ['বৈশিষ্ট্য / Property', 'কঠিন (Solid)', 'তরল (Liquid)', 'গ্যাস (Gas)'],
      rows: [
        ['আকার (Shape)', 'নির্দিষ্ট আকার আছে', 'নির্দিষ্ট আকার নেই (পাত্রের আকার)', 'নির্দিষ্ট আকার নেই'],
        ['আয়তন (Volume)', 'নির্দিষ্ট আয়তন আছে', 'নির্দিষ্ট আয়তন আছে', 'নির্দিষ্ট আয়তন নেই (পাত্রের আয়তন)'],
        ['সংকোচনশীলতা (Compressibility)', 'নগণ্য / নেই বললেই চলে', 'খুবই সামান্য', 'অত্যধিক সংকোচনশীল'],
        ['কণার গতি (Motion)', 'কেবল স্বস্থানে স্পন্দন', 'ধীর স্থানান্তর ও গড়াগড়ি', 'দ্রুত বিশৃঙ্খল রৈখিক গতি'],
        ['আকর্ষণ বল (Intermolecular Force)', 'সবচেয়ে শক্তিশালী', 'মাঝারি মানের', 'প্রায় শূন্য']
      ],
      caption: 'কঠিন, তরল ও গ্যাসীয় পদার্থের ভৌত বৈশিষ্ট্যের তুলনামূলক সারণি'
    },
    speakerNotes: 'শিক্ষার্থীদের বাস্তব জীবনের উদাহরণ দিন: একটি লোহার টুকরোকে চাপ দিলে সহজে সংকুচিত হয় না, কিন্তু সিরিঞ্জে বাতাস আটকে চাপ দিলে সহজেই সংকুচিত করা যায়।',
    recommendedInteractiveTab: 'kinetic'
  },
  {
    id: 3,
    chapter: 2,
    title: 'কণার গতিতত্ত্ব ও অবস্থার রূপান্তর',
    subtitle: 'Kinetic Molecular Theory & Phase Transitions',
    category: 'ভৌত পরিবর্তন',
    gallery: [
      {
        id: 'c2_s3_img1',
        titleBn: 'কণার গতিশক্তি ও তাপীয় রূপান্তর',
        titleEn: 'Thermal Agitation & Phase Change',
        captionBn: 'কঠিন বরফ গলে তরল পানি এবং তরল থেকে ফুটন্ত জলীয় বাষ্পে রূপান্তরের কণা-স্তরের চিত্রায়ন',
        captionEn: 'Particle-level view of phase transition from solid ice to liquid water and gaseous steam',
        type: 'diagram',
        customDiagramType: 'kineticStates'
      },
      {
        id: 'c2_s3_img2',
        url: '/src/assets/images/boiling_phase_change_1790754166610.jpg',
        titleBn: 'স্ফুটন ও বাষ্পীভবনের প্রক্রিয়া',
        titleEn: 'Boiling & Vaporization Process',
        captionBn: '১০০°C তাপমাত্রায় পানির কণাগুলো আন্তঃআণবিক বলের বাঁধন ছিন্ন করে মুক্ত গ্যাসীয় কণায় পরিণত হয়',
        captionEn: 'Water molecules breaking free from cohesive forces to form independent vapor particles at 100°C',
        type: 'photo'
      },
      {
        id: 'c2_s3_img3',
        url: '/src/assets/images/states_matter_three_1790754119855.jpg',
        titleBn: 'কণার গতিতত্ত্বের ৩টি মূল রূপ',
        titleEn: '3 States of Matter Microscopic Structure',
        captionBn: 'কঠিন ল্যাটিস, তরল সান্দ্র প্রবাহ ও গ্যাসে কণার স্থিতিস্থাপক সংঘর্ষের মাইক্রোস্কোপিক দৃশ্য',
        captionEn: 'Microscopic view of solid lattice, liquid viscous flow, and elastic particle collisions in gas',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'গলন প্রক্রিয়া',
        labelEn: 'Melting Process',
        symbol: 'Solid → Liquid',
        detailBn: 'তাপে কণার কম্পন এত বৃদ্ধি পায় যে ল্যাটিস ভেঙে তরলে রূপ নেয়',
        detailEn: 'Thermal vibrations overcome rigid lattice forces, transitioning into liquid',
        badgeType: 'temperature',
        position: { x: 35, y: 50 }
      },
      {
        labelBn: 'বাষ্পীভবন প্রক্রিয়া',
        labelEn: 'Vaporization Process',
        symbol: 'Liquid → Gas',
        detailBn: 'কণার গতিশক্তি আকর্ষণ বলকে পুরোপুরি পরাস্ত করে মুক্ত গ্যাসে পরিণত হয়',
        detailEn: 'Kinetic energy overcomes intermolecular attraction, forming free gas',
        badgeType: 'gas',
        position: { x: 75, y: 40 }
      }
    ],
    keyPoints: [
      {
        heading: 'কণার গতিতত্ত্বের মূল স্বীকার্যসমূহ',
        description: '১. সকল পদার্থ অতিক্ষুদ্র কণা দ্বারা গঠিত। ২. কণাগুলো সর্বদা বিশৃঙ্খল গতিশীল। ৩. কণাগুলোর মধ্যকার সংঘর্ষ সম্পূর্ণ স্থিতিস্থাপক। ৪. কণার গতিশক্তি পরম তাপমাত্রার সমানুপাতিক।',
        highlight: 'অবিরাম বিশৃঙ্খল গতি'
      },
      {
        heading: 'অবস্থা পরিবর্তনের আণবিক ব্যাখ্যা',
        description: 'কঠিনকে উত্তপ্ত করলে কণাগুলোর স্পন্দন তীব্র হয়। একপর্যায়ে কণাগুলো ল্যাটিস ছেড়ে গড়াগড়ি করতে থাকে—এটিই গলন। আরো তাপ দিলে কণাগুলো পরস্পর সম্পূর্ণ বিচ্ছিন্ন হয়ে গ্যাসে রূপ নেয়—এটি বাষ্পীভবন।',
        formula: 'কঠিন \\xrightarrow{+তাপ} তরল \\xrightarrow{+তাপ} গ্যাস'
      }
    ],
    callout: {
      type: 'tip',
      title: 'স্থিতিস্থাপক সংঘর্ষ (Elastic Collision)',
      content: 'গ্যাসীয় কণাগুলোর পরস্পরের সাথে এবং পাত্রের দেয়ালের সাথে ধাক্কা খাওয়ার সময় মোট গতিশক্তির কোনো ক্ষয় হয় না। এজন্য সাধারণ অবস্থায় গ্যাসীয় কণা কখনো গতি হারিয়ে পাত্রের তলায় থিতিয়ে পড়ে না।'
    },
    speakerNotes: 'শিক্ষার্থীদের বোঝান যে তাপমাত্রা মূলত কণাগুলোর গড় গতিশক্তির বহিঃপ্রকাশ। তাপমাত্রা দ্বিগুণ হলে কণার গড় গতিশক্তিও আনুপাতিক হারে বৃদ্ধি পায়।',
    recommendedInteractiveTab: 'kinetic'
  },
  {
    id: 4,
    chapter: 2,
    title: 'ব্যাপন (Diffusion) — স্বতঃস্ফূর্ত ছড়িয়ে পড়া',
    subtitle: 'Spontaneous Dispersion of Matter from High to Low Concentration',
    category: 'ব্যাপন ও নিঃসরণ',
    gallery: [
      {
        id: 'c2_s4_img1',
        url: '/src/assets/images/diffusion_nh3_hcl_1790754135489.jpg',
        titleBn: 'ব্যাপন প্রক্রিয়ার পরীক্ষাগার প্রমাণ',
        titleEn: 'Laboratory Demonstration of Diffusion',
        captionBn: 'গ্যাসীয় কণাগুলোর স্বতঃস্ফূর্তভাবে উচ্চ ঘনমাত্রার স্থান থেকে চতুর্দিকে ছড়িয়ে পড়ার বাস্তব চিত্র',
        captionEn: 'Spontaneous movement of gaseous particles from high to low concentration zones',
        type: 'photo'
      },
      {
        id: 'c2_s4_img2',
        titleBn: 'গ্রাহামের ব্যাপন ভেক্টর ডায়াগ্রাম',
        titleEn: 'Graham Diffusion Vector Diagram',
        captionBn: 'হালকা কণা বনাম ভারী কণার ব্যাপন বেগের পার্থক্যের গতিশীল ভেক্টর চিত্রায়ন',
        captionEn: 'Vector diagram contrasting diffusion velocities of lighter vs heavier molecules',
        type: 'diagram',
        customDiagramType: 'diffusionTube'
      },
      {
        id: 'c2_s4_img3',
        url: '/src/assets/images/states_matter_three_1790754119855.jpg',
        titleBn: 'তরলে ব্যাপনের পর্যবেক্ষণ',
        titleEn: 'Diffusion in Liquid Media',
        captionBn: 'পানিতে পটাশিয়াম পারম্যাঙ্গানেট (KMnO₄) বা নীল ফোঁটা দিলে কোনো আলোড়ন ছাড়াই স্বতঃস্ফূর্তভাবে ছড়িয়ে পড়ে',
        captionEn: 'Potassium permanganate crystals spontaneously dispersing in water without stirring',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'উচ্চ ঘনমাত্রার অঞ্চল',
        labelEn: 'High Concentration Zone',
        symbol: 'C_high',
        detailBn: 'যেখানে পদার্থের কণার সংখ্যা প্রতি একক আয়তনে সর্বাধিক',
        detailEn: 'Zone with maximum particle density prior to diffusion',
        badgeType: 'diffusion',
        position: { x: 20, y: 50 }
      },
      {
        labelBn: 'নিম্ন ঘনমাত্রার অঞ্চল',
        labelEn: 'Low Concentration Zone',
        symbol: 'C_low',
        detailBn: 'যেখানে কণার স্বতঃস্ফূর্ত স্থানান্তর ঘটে যতক্ষণ না সমসত্ত্ব ঘনত্ব অর্জিত হয়',
        detailEn: 'Zone where particles migrate until uniform equilibrium is reached',
        badgeType: 'gas',
        position: { x: 70, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'ব্যাপনের সংজ্ঞা (Definition of Diffusion)',
        description: 'কোনো মাধ্যমে কঠিন, তরল বা গ্যাসীয় পদার্থের স্বতঃস্ফূর্ত ও সমানভাবে চতুর্দিকে ছড়িয়ে পড়ার প্রক্রিয়াকে ব্যাপন (Diffusion) বলে।',
        highlight: 'স্বতঃস্ফূর্ত ও সমসত্ত্ব বিস্তার'
      },
      {
        heading: 'ব্যাপন হার ও আণবিক ভর',
        description: 'যে পদার্থের আণবিক ভর যত কম এবং ঘনত্ব যত হালকা, তার ব্যাপন হার তত বেশি। ভারী পদার্থের কণাগুলো ধীরগতিতে ব্যাপিত হয়।',
        formula: 'r \\propto \\frac{1}{\\sqrt{M}}'
      },
      {
        heading: 'তাপমাত্রার প্রভাব',
        description: 'তাপমাত্রা বাড়লে কণাগুলোর গতিশক্তি বৃদ্ধি পায়, ফলে ব্যাপনের হার দ্রুত বৃদ্ধি পায়। গরম পানিতে চিনির ব্যাপন ঠান্ডা পানির চেয়ে দ্রুত হয়।',
        highlight: 'তাপমাত্রা বৃদ্ধি ➯ ব্যাপন হার বৃদ্ধি'
      }
    ],
    callout: {
      type: 'formula',
      title: 'বাস্তব জীবনের উদাহরণ',
      content: '১. ঘরের এক কোণে সুগন্ধি স্প্রে করলে পুরো ঘরে সুবাস ছড়ায়।\n২. পানিতে পটাশিয়াম পারম্যাঙ্গানেটের (KMnO₄) গোলাপি বর্ণ ছড়িয়ে পড়া।\n৩. পাকা ফলের সুমিষ্ট গন্ধ বাতাসে ব্যাপিত হওয়া।'
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন: ব্যাপন হতে হলে কোনো বাহ্যিক চাপের প্রয়োজন নেই—এটি কণাগুলোর নিজস্ব গতিশক্তির কারণে সম্পূর্ণ স্বতঃস্ফূর্তভাবে ঘটে।',
    recommendedInteractiveTab: 'diffusion'
  },
  {
    id: 5,
    chapter: 2,
    title: 'নিঃসরণ (Effusion) — চাপের প্রভাবে নির্গমন',
    subtitle: 'Effusion — Forced Egress of Gas Through a Microscopic Orifice Under Pressure',
    category: 'ব্যাপন ও নিঃসরণ',
    gallery: [
      {
        id: 'c2_s5_img1',
        url: '/src/assets/images/diffusion_nh3_hcl_1790754135489.jpg',
        titleBn: 'চাপে গ্যাসের সরু পথে নির্গমন',
        titleEn: 'Effusion Under Pressure Orifice',
        captionBn: 'উচ্চচাপযুক্ত পাত্রের সরু ছিদ্রপথ দিয়ে গ্যাসের সজোরে বেরিয়ে আসার প্রক্রিয়া',
        captionEn: 'Rapid exit of gas molecules through a pinhole orifice from high to low pressure',
        type: 'photo'
      },
      {
        id: 'c2_s5_img2',
        titleBn: 'ব্যাপন বনাম নিঃসরণ তুলনামূলক মডেল',
        titleEn: 'Diffusion vs Effusion Model',
        captionBn: 'স্বতঃস্ফূর্ত বিস্তার (ব্যাপন) এবং বাহ্যিক চাপের প্রভাবে সরু ছিদ্রপথে নির্গমন (নিঃসরণ)-এর পার্থক্য',
        captionEn: 'Diagram contrasting spontaneous free diffusion against pressure-driven pinhole effusion',
        type: 'diagram',
        customDiagramType: 'diffusionTube'
      },
      {
        id: 'c2_s5_img3',
        url: '/src/assets/images/boiling_phase_change_1790754166610.jpg',
        titleBn: 'বাষ্পীয় চাপের বহির্গমন',
        titleEn: 'Vapor Pressure Release',
        captionBn: 'চাপ প্রয়োগে আবদ্ধ পাত্র হতে বাষ্পের তীব্র নিঃসরণ পর্যবেক্ষণ',
        captionEn: 'Vapor escaping violently from pressurized container demonstrating effusion concepts',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'উচ্চচাপ অঞ্চল',
        labelEn: 'High Pressure Zone',
        symbol: 'P_high',
        detailBn: 'পাত্রের ভেতরে গ্যাস অণুগুলো উচ্চচাপে আবদ্ধ থাকে',
        detailEn: 'Confined gas under elevated pressure inside container',
        badgeType: 'temperature',
        position: { x: 30, y: 55 }
      },
      {
        labelBn: 'সরু ছিদ্রপথ',
        labelEn: 'Microscopic Pinhole',
        symbol: 'Orifice',
        detailBn: 'যে সরু পথ দিয়ে কণাগুলো একটি একটি করে নির্গত হয়',
        detailEn: 'Fine aperture through which gas escapes selectively',
        badgeType: 'diffusion',
        position: { x: 50, y: 48 }
      },
      {
        labelBn: 'নিম্নচাপ অঞ্চল',
        labelEn: 'Low Pressure Ambient',
        symbol: 'P_low',
        detailBn: 'বায়ুমণ্ডলীয় নিম্নচাপের অঞ্চলে গ্যাসের স্বতঃস্ফূর্ত বিস্তার',
        detailEn: 'Ambient lower pressure area where escaping gas then diffuses',
        badgeType: 'gas',
        position: { x: 75, y: 48 }
      }
    ],
    keyPoints: [
      {
        heading: 'নিঃসরণের সংজ্ঞা (Definition of Effusion)',
        description: 'সরু ছিদ্রপথে উচ্চচাপের অঞ্চল থেকে কোনো গ্যাসীয় পদার্থের নিম্নচাপের অঞ্চলের দিকে সজোরে বেরিয়ে আসার প্রক্রিয়াকে নিঃসরণ (Effusion) বলে।',
        highlight: 'চাপের প্রভাব ও সরু ছিদ্রপথ'
      },
      {
        heading: 'ব্যাপন ও নিঃসরণের প্রধান পার্থক্য',
        description: 'নিঃসরণ ঘটে পাত্রের অভ্যন্তরীণ উচ্চচাপের কারণে, কিন্তু ব্যাপন ঘটে ঘনমাত্রার পার্থক্যের কারণে সম্পূর্ণ স্বতঃস্ফূর্তভাবে। প্রথমে নিঃসরণ ঘটে, এরপর বাতাসে ব্যাপন ঘটে।',
        highlight: 'আগে নিঃসরণ, পরে ব্যাপন'
      },
      {
        heading: 'বাস্তব জীবনের উদাহরণ',
        description: '১. বডি স্প্রে বা সেন্টের বোতাম চাপলে সরু মুখে সজোরে গ্যাস বের হওয়া। ২. গ্যাস সিলিন্ডারের মুখ খুললে তীব্র বেগে গ্যাস নির্গমন। ৩. ফোলা বেলুনে আলপিন ফুটো করলে বাতাস বের হওয়া।',
        highlight: 'বডি স্প্রে, সিলিন্ডার ও বেলুন'
      }
    ],
    callout: {
      type: 'warning',
      title: 'পাকা কাঁঠালের গন্ধের রহস্য (পরীক্ষার কমন প্রশ্ন)',
      content: 'পাকা কাঁঠালের ত্বকে বিদ্যমান সূক্ষ্ম ছিদ্রপথে ভেতরের সুবাসযুক্ত এস্টার গ্যাস প্রথমে চাপের কারণে নিঃসৃত হয় (নিঃসরণ), এবং পরে চারপাশের বায়ুমণ্ডলে স্বতঃস্ফূর্তভাবে ছড়িয়ে পড়ে (ব্যাপন)। অর্থাৎ এখানে নিঃসরণ ও ব্যাপন দুটিই পর্যায়ক্রমে ঘটে।'
    },
    speakerNotes: 'এসএসসি বোর্ড পরীক্ষায় প্রায়ই আসে: "আগে ব্যাপন ঘটে না নিঃসরণ ঘটে?" উত্তর: যে প্রক্রিয়ায় চাপ প্রয়োগে গ্যাস বের হয় সেখানে আগে নিঃসরণ ঘটে, এরপর পরিবেশে ব্যাপন ঘটে।',
    recommendedInteractiveTab: 'diffusion'
  },
  {
    id: 6,
    chapter: 2,
    title: 'গ্রাহামের ব্যাপন পরীক্ষা — কাচনলে NH₃ ও HCl',
    subtitle: "Graham's Diffusion Experiment — NH₃ and HCl in Long Glass Tube",
    category: 'পরীক্ষাগার বিশ্লেষণ',
    gallery: [
      {
        id: 'c2_s6_img1',
        url: '/src/assets/images/diffusion_nh3_hcl_1790754135489.jpg',
        titleBn: 'কাচনলে NH₃ ও HCl এর ব্যাপন পরীক্ষা',
        titleEn: 'Glass Tube Diffusion of NH₃ & HCl',
        captionBn: 'একপ্রান্তে অ্যামোনিয়া (NH₃) ও অন্যপ্রান্তে হাইড্রোক্লোরিক এসিড (HCl) ভেজানো তুলা; HCl এর নিকটে অ্যামোনিয়াম ক্লোরাইডের (NH₄Cl) সাদা ধোঁয়ার বলয়',
        captionEn: 'Ammonia soaked cotton at left, HCl cotton at right; white ammonium chloride ring forms near the HCl end',
        type: 'photo'
      },
      {
        id: 'c2_s6_img2',
        titleBn: 'গ্রাহামের ব্যাপন সূত্র ভেক্টর গ্রাফিক্স',
        titleEn: "Graham's Law Molecular Vector Graphic",
        captionBn: 'আণবিক ভর ১৭ বিশিষ্ট হালকা NH₃ কণা দ্রুত অতিক্রম করে, আর ভর ৩৬.৫ বিশিষ্ট ভারী HCl ধীরগতিতে চলে',
        captionEn: 'Lighter NH₃ (M=17) diffuses faster than heavier HCl (M=36.5) as proven by Graham’s Law',
        type: 'diagram',
        customDiagramType: 'diffusionTube'
      },
      {
        id: 'c2_s6_img3',
        url: '/src/assets/images/states_matter_three_1790754119855.jpg',
        titleBn: 'গ্যাস কণার আণবিক গতিবিধি',
        titleEn: 'Molecular Velocity Distribution',
        captionBn: 'আণবিক ভরের সাথে বর্গমূলের ব্যস্তানুপাতিক হারে কণার গড় বর্গমূল বেগের পরিবর্তন',
        captionEn: 'Inverse square root relation between molecular mass and root mean square velocity',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'অ্যামোনিয়া গ্যাস (NH₃)',
        labelEn: 'Ammonia Gas (NH₃)',
        symbol: 'NH₃ (M=17)',
        detailBn: 'আণবিক ভর ১৭; হালকা গ্যাস হওয়ায় দ্রুত গতিতে ব্যাপিত হয়ে কাচনলের প্রায় ৬০% দূরত্ব অতিক্রম করে',
        detailEn: 'Molar mass 17 g/mol; light gas travels rapidly across ~60% of the tube length',
        badgeType: 'gas',
        position: { x: 18, y: 50 }
      },
      {
        labelBn: 'নিশাদলের সাদা বলয় (NH₄Cl)',
        labelEn: 'White Ring of NH₄Cl',
        symbol: 'NH₄Cl (সাদা ধোঁয়া)',
        detailBn: 'NH₃(g) + HCl(g) → NH₄Cl(s); গ্যাস দুটি মিলিত হয়ে কঠিন নিশাদলের ঘন সাদা বলয় তৈরি করে',
        detailEn: 'NH₃(g) + HCl(g) → NH₄Cl(s); dense white solid precipitate ring formed closer to HCl end',
        badgeType: 'sublimation',
        position: { x: 62, y: 50 }
      },
      {
        labelBn: 'হাইড্রোক্লোরিক এসিড গ্যাস (HCl)',
        labelEn: 'Hydrochloric Acid Gas (HCl)',
        symbol: 'HCl (M=36.5)',
        detailBn: 'আণবিক ভর ৩৬.৫; ভারী গ্যাস হওয়ায় ধীরগতিতে চলে এবং মাত্র ৪০% দূরত্ব অতিক্রম করতে পারে',
        detailEn: 'Molar mass 36.5 g/mol; heavy gas diffuses slowly, covering only ~40% of distance',
        badgeType: 'gas',
        position: { x: 82, y: 50 }
      }
    ],
    keyPoints: [
      {
        heading: 'পরীক্ষার মূল রাসায়নিক বিক্রিয়া',
        description: 'উভয় গ্যাস ব্যাপিত হয়ে যেখানে মিলিত হয় সেখানে বিক্রিয়া করে কঠিন অ্যামোনিয়াম ক্লোরাইডের (নিশাদল) সাদা ধোঁয়া সৃষ্টি করে।',
        formula: 'NH_3(g) + HCl(g) \\rightarrow NH_4Cl(s) \\text{ [সাদা ধোঁয়া]}'
      },
      {
        heading: 'সাদা ধোঁয়া কেন HCl প্রান্তের কাছে গঠিত হয়?',
        description: 'NH₃ এর আণবিক ভর = ১৪ + (৩ × ১) = ১৭। HCl এর আণবিক ভর = ১ + ৩৫.৫ = ৩৬.৫। যেহেতু NH₃ এর ভর HCl এর চেয়ে অনেক কম, তাই NH₃ এর ব্যাপন হার বেশি। একই সময়ে NH₃ বেশি পথ অতিক্রম করায় বলয়টি ভারী HCl এর কাছে গঠিত হয়।',
        highlight: 'M(NH₃) = 17 < M(HCl) = 36.5'
      },
      {
        heading: 'গ্রাহামের ব্যাপন সূত্রের গাণিতিক রূপ',
        description: 'নির্দিষ্ট তাপমাত্রা ও চাপে কোনো গ্যাসের ব্যাপন হার (r) তার আণবিক ভরের (M) বর্গমূলের ব্যস্তানুপাতিক।',
        formula: '\\frac{r_1}{r_2} = \\sqrt{\\frac{M_2}{M_1}} = \\sqrt{\\frac{36.5}{17}} \\approx 1.465'
      }
    ],
    callout: {
      type: 'tip',
      title: 'বেগের অনুপাত যাচাই',
      content: 'গণিত অনুযায়ী, একই সময়ে অ্যামোনিয়া হাইড্রোক্লোরিক এসিডের চেয়ে প্রায় ১.৪৭ গুণ বেশি দূরত্ব অতিক্রম করে। কাচনলের দৈর্ঘ্য ১০০ সেমি হলে বলয়টি NH₃ প্রান্ত থেকে প্রায় ৬০ সেমি এবং HCl প্রান্ত থেকে প্রায় ৪০ সেমি দূরে সৃষ্টি হবে।'
    },
    speakerNotes: 'এটি এসএসসি পরীক্ষার অন্যতম সেরা সৃজনশীল প্রশ্ন। শিক্ষার্থীদের আণবিক ভরের হিসাব স্পষ্টভাবে খাতায় লিখে প্রমাণ দেখানোর অনুশীলন করান।',
    recommendedInteractiveTab: 'diffusion'
  },
  {
    id: 7,
    chapter: 2,
    title: 'মোমবাতির জ্বলন ও পদার্থের তিন অবস্থার সহাবস্থান',
    subtitle: 'Combustion of a Candle — Coexistence of Solid, Liquid and Gas States',
    category: 'বাস্তব রসায়ন',
    gallery: [
      {
        id: 'c2_s7_img1',
        url: '/src/assets/images/boiling_phase_change_1790754166610.jpg',
        titleBn: 'জ্বলন্ত মোমবাতির তাপীয় মণ্ডল',
        titleEn: 'Thermal Zones of Burning Candle',
        captionBn: 'মোমবাতি জ্বললে একই সাথে কঠিন মোম, গলিত তরল মোম ও বাষ্পীভূত গ্যাসীয় মোমের সহাবস্থান ঘটে',
        captionEn: 'Coexistence of solid wax, molten liquid pool, and vaporized hydrocarbon fuel in flame',
        type: 'photo'
      },
      {
        id: 'c2_s7_img2',
        titleBn: 'মোমের ভৌত ও রাসায়নিক পরিবর্তন',
        titleEn: 'Physical & Chemical Changes of Wax',
        captionBn: 'মোম গলে তরল হওয়া ভৌত পরিবর্তন; কিন্তু শিখায় জ্বলে কার্বন ডাই-অক্সাইড ও জলীয় বাষ্প হওয়া রাসায়নিক পরিবর্তন',
        captionEn: 'Melting is a physical change; combustion yielding CO₂ and H₂O is a chemical reaction',
        type: 'diagram',
        customDiagramType: 'kineticStates'
      },
      {
        id: 'c2_s7_img3',
        url: '/src/assets/images/states_matter_three_1790754119855.jpg',
        titleBn: 'হাইড্রোকার্বন দহনের আণবিক মডেল',
        titleEn: 'Hydrocarbon Combustion Molecular View',
        captionBn: 'মোমের মূল উপাদান হাইড্রোকার্বনের সাথে বায়ুর অক্সিজেনের জারণ ও শক্তি নির্গমন',
        captionEn: 'Oxidation of long chain alkanes producing glowing carbon particles, heat, and light',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'কঠিন মোম (Solid Wax)',
        labelEn: 'Solid Wax Base',
        symbol: 'C_n H_{2n+2} (s)',
        detailBn: 'মোমবাতির মূল শরীর যা বিভিন্ন উচ্চ আণবিক ভরের কঠিন অ্যালকেন হাইড্রোকার্বনের মিশ্রণ',
        detailEn: 'Solid candle cylinder composed of high molecular mass alkane hydrocarbons',
        badgeType: 'solid',
        position: { x: 50, y: 78 }
      },
      {
        labelBn: 'গলিত তরল মোম (Liquid Wax Pool)',
        labelEn: 'Liquid Wax Pool',
        symbol: 'Liquid Pool',
        detailBn: 'শিখার তাপে গলনাঙ্কে পৌঁছে কঠিন মোম তরলে রূপ নেয় এবং সলতের গোড়ায় জমা হয়',
        detailEn: 'Heat from flame liquefies solid wax into a reservoir at base of wick',
        badgeType: 'liquid',
        position: { x: 50, y: 55 }
      },
      {
        labelBn: 'গ্যাসীয় মোম ও শিখা (Vapor & Flame)',
        labelEn: 'Vaporized Wax Flame',
        symbol: 'CO₂ + H₂O(g)',
        detailBn: 'কৌশিক প্রক্রিয়ায় সলতে বেয়ে উঠে মোম বাষ্পীভূত হয় এবং অক্সিজেনে জ্বলে আলো ও তাপ দেয়',
        detailEn: 'Capillary action draws liquid wax up wick where it vaporizes and oxidizes',
        badgeType: 'gas',
        position: { x: 50, y: 30 }
      }
    ],
    keyPoints: [
      {
        heading: 'মোম আসলে কী?',
        description: 'মোম হলো বিভিন্ন উচ্চ আণবিক ভরসম্পন্ন সম্পৃক্ত হাইড্রোকার্বনের (প্রধানত অ্যালকেন: যেমন C₂₅H₅₂) কঠিন মিশ্রণ।',
        highlight: 'হাইড্রোকার্বন যৌগ'
      },
      {
        heading: 'তিন অবস্থার যুগপৎ প্রকাশ',
        description: '১. মোমবাতির মূল দেহটি কঠিন (Solid)। ২. সলতের গোড়ায় গলিত অংশটি তরল (Liquid)। ৩. সলতে বেয়ে উপরে উঠে তাপে বাষ্পীভূত হয়ে গ্যাসীয় (Gas) আকারে জ্বলে।',
        highlight: 'কঠিন + তরল + গ্যাস'
      },
      {
        heading: 'ভৌত ও রাসায়নিক পরিবর্তনের সংমিশ্রণ',
        description: 'মোম তাপে গলে তরল হওয়া এবং ঠান্ডা হলে আবার কঠিন হওয়া কেবল ভৌত পরিবর্তন। কিন্তু বাষ্পীভূত মোম বাতাসের অক্সিজেনের সাথে বিক্রিয়া করে নতুন পদার্থ CO₂ ও H₂O তৈরি করা একটি রাসায়নিক পরিবর্তন।',
        formula: '\\text{মোম (হাইড্রোকার্বন)} + O_2(g) \\xrightarrow{\\Delta} CO_2(g) + H_2O(g) + \\text{তাপ} + \\text{আলো}'
      }
    ],
    callout: {
      type: 'info',
      title: 'কৌশিক ক্রিয়ার ভূমিকা (Capillary Action)',
      content: 'মোমবাতির সলতের সূক্ষ্ম সুতার আঁশের ফাঁক দিয়ে তরল মোম অভিকর্ষের বিপরীতে ওপরে উঠে আসে। একে কৌশিক ক্রিয়া (Capillarity) বলে।'
    },
    speakerNotes: 'শিক্ষার্থীদের কাছে এটি একটি অত্যন্ত আকর্ষণীয় উদাহরণ, যা প্রমাণ করে যে একটি সাধারণ মোমবাতিতেই রসায়নের পদার্থের তিন অবস্থা ও উভয় পরিবর্তন সুন্দরভাবে পর্যবেক্ষণ করা যায়।',
    recommendedInteractiveTab: 'kinetic'
  },
  {
    id: 8,
    chapter: 2,
    title: 'গলন, স্ফুটন, গলনাঙ্ক ও স্ফুটনাঙ্ক',
    subtitle: 'Melting, Boiling, Melting Point & Boiling Point with Pressure Effects',
    category: 'তাপীয় পরিমাপ',
    gallery: [
      {
        id: 'c2_s8_img1',
        url: '/src/assets/images/boiling_phase_change_1790754166610.jpg',
        titleBn: 'স্ফুটনাঙ্কে তরলের ফুটন',
        titleEn: 'Boiling Point Measurement Lab',
        captionBn: '১ বায়ুমণ্ডলীয় প্রমাণ চাপে থার্মোমিটারের পাঠ ১০০°C; সম্পূর্ণ তরলের ভেতর হতে বাষ্পের বুদবুদ সৃষ্টি',
        captionEn: 'Thermometer reading 100°C at 1 atm standard pressure with vapor bubbles nucleating throughout liquid',
        type: 'photo'
      },
      {
        id: 'c2_s8_img2',
        titleBn: 'তাপীয় রূপান্তরের গ্রাফিক্স',
        titleEn: 'Thermal Equilibrium Graph',
        captionBn: 'তাপমাত্রা বৃদ্ধির সাথে সাথে বাষ্পচাপ বৃদ্ধি এবং বায়ুমণ্ডলীয় চাপের সমান হলে স্ফুটন শুরু',
        captionEn: 'Vapor pressure increasing with temperature until matching atmospheric pressure at boiling point',
        type: 'diagram',
        customDiagramType: 'heatingCurve'
      },
      {
        id: 'c2_s8_img3',
        url: '/src/assets/images/states_matter_three_1790754119855.jpg',
        titleBn: 'গলন ও স্ফুটনের কণা বিন্যাস',
        titleEn: 'Particle Arrangement at Transitions',
        captionBn: 'গলনাঙ্কে কঠিন ল্যাটিসের বিশৃঙ্খলা এবং স্ফুটনাঙ্কে কণার মুক্ত গ্যাসীয় রূপান্তর',
        captionEn: 'Breakdown of ordered crystal lattice at melting point and liberation of particles at boiling point',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'গলনাঙ্ক (Melting Point)',
        labelEn: 'Melting Point (0°C for Ice)',
        symbol: 'T_m = 0°C',
        detailBn: '১ বায়ুমণ্ডলীয় চাপে যে নির্দিষ্ট তাপমাত্রায় কঠিন বরফ গলে তরল পানিতে পরিণত হতে শুরু করে',
        detailEn: 'Standard temperature at 1 atm where solid ice melts into liquid water',
        badgeType: 'temperature',
        position: { x: 30, y: 55 }
      },
      {
        labelBn: 'স্ফুটনাঙ্ক (Boiling Point)',
        labelEn: 'Boiling Point (100°C for Water)',
        symbol: 'T_b = 100°C',
        detailBn: 'যে তাপমাত্রায় তরলের বাষ্পচাপ বাহ্যিক বায়ুমণ্ডলীয় চাপের সমান হয় এবং সমগ্র তরল ফুটতে থাকে',
        detailEn: 'Temperature where liquid vapor pressure equals atmospheric pressure',
        badgeType: 'temperature',
        position: { x: 75, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: 'গলনাঙ্ক (Melting Point)',
        description: '১ বায়ুমণ্ডলীয় প্রমাণ চাপে যে তাপমাত্রায় কোনো কঠিন পদার্থ তরলে পরিণত হতে শুরু করে তাকে ঐ পদার্থের গলনাঙ্ক বলে। বিশুদ্ধ বরফের গলনাঙ্ক ০°C।',
        highlight: 'বরফের গলনাঙ্ক = ০°C (273 K)'
      },
      {
        heading: 'স্ফুটনাঙ্ক (Boiling Point)',
        description: '১ বায়ুমণ্ডলীয় প্রমাণ চাপে যে তাপমাত্রায় কোনো তরল পদার্থ ফুটতে থাকে এবং দ্রুত বাষ্পে পরিণত হয় তাকে তার স্ফুটনাঙ্ক বলে। বিশুদ্ধ পানির স্ফুটনাঙ্ক ১০০°C।',
        highlight: 'পানির স্ফুটনাঙ্ক = ১০০°C (373 K)'
      },
      {
        heading: 'বাষ্পীভবন (Evaporation) বনাম স্ফুটন (Boiling)',
        description: 'বাষ্পীভবন যেকোনো তাপমাত্রায় কেবল তরলের উপরিতল থেকে ঘটে (একটি ধীর ও শান্ত প্রক্রিয়া)। কিন্তু স্ফুটন কেবল নির্দিষ্ট স্ফুটনাঙ্কে পুরো তরলের ভেতর থেকে ঘটে (তীব্র ও বুদবুদযুক্ত প্রক্রিয়া)।',
        highlight: 'উপরিতল বনাম সমগ্র তরল'
      }
    ],
    tableData: {
      headers: ['পদার্থের নাম', 'গলনাঙ্ক (°C)', 'স্ফুটনাঙ্ক (°C)', 'সাধারণ কক্ষ তাপমাত্রায় অবস্থা'],
      rows: [
        ['পানি (H₂O)', '০', '১০০', 'তরল'],
        ['ইথানল (C₂H₅OH)', '-১১৪', '৭৮.৩৭', 'তরল'],
        ['লবণ (NaCl)', '৮০১', '১৪৬৫', 'কঠিন'],
        ['অক্সিজেন (O₂)', '-২১৮.৮', '-১৮৩', 'গ্যাস'],
        ['লোহা (Fe)', '১৫৩৮', '২৮৬২', 'কঠিন']
      ],
      caption: 'কয়েকটি অতিপরিচিত পদার্থের গলনাঙ্ক ও স্ফুটনাঙ্কের তালিকা'
    },
    speakerNotes: 'পাহাড়ের চূড়ায় বায়ুমণ্ডলীয় চাপ কম হওয়ায় পানির স্ফুটনাঙ্ক ১০০°C এর চেয়ে কম হয় (প্রায় ৯১°C), ফলে খোলা পাত্রে খাবার সেদ্ধ হতে বেশি সময় লাগে। প্রেশার কুকারে চাপ বাড়িয়ে স্ফুটনাঙ্ক ১২০°C পর্যন্ত বাড়ানো হয়।',
    recommendedInteractiveTab: 'heating'
  },
  {
    id: 9,
    chapter: 2,
    title: 'পানির তাপীয় বক্ররেখা (Heating Curve of Water)',
    subtitle: 'Heating Curve — Latent Heat of Fusion and Vaporization Phase Plateaus',
    category: 'গ্রাফিক্যাল বিশ্লেষণ',
    gallery: [
      {
        id: 'c2_s9_img1',
        titleBn: 'পানির তাপীয় বক্ররেখার সম্পূর্ণ চিত্র',
        titleEn: 'Complete Water Heating Curve',
        captionBn: 'তাপমাত্রা বনাম সময় গ্রাফ: ০°C ও ১০০°C তাপমাত্রায় অনুভূমিক সুপ্ততাপ রেখা (Plateau)',
        captionEn: 'Temperature vs time graph displaying latent heat horizontal plateaus at 0°C and 100°C',
        type: 'diagram',
        customDiagramType: 'heatingCurve'
      },
      {
        id: 'c2_s9_img2',
        url: '/src/assets/images/boiling_phase_change_1790754166610.jpg',
        titleBn: 'সুপ্ততাপ শোষণ ও অবস্থা রূপান্তর',
        titleEn: 'Latent Heat Absorption Lab',
        captionBn: 'বরফ গলে পানি হওয়ার সময় এবং পানি ফুটে বাষ্প হওয়ার সময় তাপ দিলেও তাপমাত্রা বাড়ে না',
        captionEn: 'During melting and boiling plateaus, added thermal energy breaks bonds without changing temperature',
        type: 'photo'
      },
      {
        id: 'c2_s9_img3',
        url: '/src/assets/images/states_matter_three_1790754119855.jpg',
        titleBn: 'আণবিক স্তরে বন্ধন বিযুক্তি',
        titleEn: 'Molecular Bond Rupture during Phase Shift',
        captionBn: 'সুপ্ততাপ কণার তাপমাত্রা বাড়ানোর বদলে অণুগুলোর মধ্যকার হাইড্রোজেন বন্ধন ছিন্ন করতে ব্যয়িত হয়',
        captionEn: 'Latent heat utilized strictly to sever intermolecular hydrogen bonds rather than increase kinetic energy',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'গলনের সুপ্ততাপ (০°C রেখা)',
        labelEn: 'Latent Heat of Fusion (0°C Plateau)',
        symbol: 'L_f = 334 kJ/kg',
        detailBn: 'যতক্ষণ সমস্ত বরফ গলে পানিতে পরিণত না হয় ততক্ষণ তাপমাত্রা ০°C তেই স্থির থাকে',
        detailEn: 'Temperature stays fixed at 0°C until all ice melts into water; energy breaks lattice',
        badgeType: 'temperature',
        position: { x: 35, y: 65 }
      },
      {
        labelBn: 'বাষ্পীভবনের সুপ্ততাপ (১০০°C রেখা)',
        labelEn: 'Latent Heat of Vaporization (100°C)',
        symbol: 'L_v = 2260 kJ/kg',
        detailBn: 'যতক্ষণ সমস্ত পানি বাষ্পে পরিণত না হয় ততক্ষণ তাপমাত্রা ১০০°C তেই অপরিবর্তিত থাকে',
        detailEn: 'Temperature remains constant at 100°C until every drop turns to vapor',
        badgeType: 'temperature',
        position: { x: 75, y: 35 }
      }
    ],
    keyPoints: [
      {
        heading: 'তাপীয় বক্ররেখার ৫টি স্তর',
        description: '১. -২০°C বরফের উত্তপ্তকরণ (AB)। ২. ০°C তে বরফ গলন ও গলনের সুপ্ততাপ (BC)। ৩. ০°C থেকে ১০০°C পানির উত্তপ্তকরণ (CD)। ৪. ১০০°C তে স্ফুটন ও বাষ্পীভবনের সুপ্ততাপ (DE)। ৫. ১০০°C এর উর্ধ্বে বাষ্পের উত্তপ্তকরণ (EF)।',
        highlight: '৫টি পর্যায়ক্রমিক ধাপ'
      },
      {
        heading: 'সুপ্ততাপ (Latent Heat) কী?',
        description: 'তাপমাত্রা পরিবর্তন না করে একক ভরের কোনো পদার্থের কেবল ভৌত অবস্থার রূপান্তর ঘটাতে যে পরিমাণ তাপ শক্তির প্রয়োজন হয়, তাকে সুপ্ততাপ বলে।',
        formula: 'Q = mL_f \\quad \\text{বা} \\quad Q = mL_v'
      },
      {
        heading: 'অনুভূমিক রেখার বৈজ্ঞানিক কারণ',
        description: 'গলন বা স্ফুটনের সময় সরবরাহকৃত তাপ কণার গতিশক্তি বৃদ্ধি না করে আন্তঃআণবিক আকর্ষণ বল ও বন্ধন ভাঙার কাজে ব্যবহৃত হয়। যেহেতু কণার গতিশক্তি বাড়ে না, তাই থার্মোমিটারে তাপমাত্রাও বৃদ্ধি পায় না।',
        highlight: 'গতিশক্তি স্থির ➯ তাপমাত্রা স্থির'
      }
    ],
    callout: {
      type: 'formula',
      title: 'বাষ্পীভবনের সুপ্ততাপ গলনের সুপ্ততাপের চেয়ে অনেক বেশি কেন?',
      content: 'বরফ গলে পানি হওয়ার সময় আন্তঃআণবিক বন্ধনগুলো শুধু শিথিল হয় (কণাগুলো কাছাকাছি থাকে)। কিন্তু পানি ফুটে বাষ্প হওয়ার সময় অণুগুলোকে পরস্পরের আকর্ষণ বল সম্পূর্ণ ছিন্ন করে বহুদূরে বিচ্ছিন্ন করতে হয়, তাই বাষ্পীভবনের সুপ্ততাপ (Lᵥ) গলনের সুপ্ততাপ (L_f) অপেক্ষা প্রায় ৭ গুণ বেশি।'
    },
    speakerNotes: 'শিক্ষার্থীদের দৃষ্টি আকর্ষণ করুন: গ্রাফে DE রেখাংশ (বাষ্পীভবন) BC রেখাংশের (গলন) তুলনায় অনেক বেশি দীর্ঘ, কারণ বাষ্পীভবনে অনেক বেশি সময় ও সুপ্ততাপের প্রয়োজন হয়।',
    recommendedInteractiveTab: 'heating'
  },
  {
    id: 10,
    chapter: 2,
    title: 'শীতলীকরণ বক্ররেখা (Cooling Curve)',
    subtitle: 'Cooling Curve — Condensation and Freezing Plateaus of Matter',
    category: 'গ্রাফিক্যাল বিশ্লেষণ',
    gallery: [
      {
        id: 'c2_s10_img1',
        titleBn: 'শীতলীকরণ বক্ররেখা গ্রাফ',
        titleEn: 'Cooling Curve Temperature vs Time',
        captionBn: 'জলীয় বাষ্প বা গলিত পদার্থ ঠান্ডা করার সময় ঘনীভবন ও কঠিনীভবন হিমাঙ্ক রেখা প্রদর্শন',
        captionEn: 'Temperature vs time curve during cooling displaying condensation and freezing plateaus',
        type: 'diagram',
        customDiagramType: 'heatingCurve'
      },
      {
        id: 'c2_s10_img2',
        url: '/src/assets/images/boiling_phase_change_1790754166610.jpg',
        titleBn: 'ঘনীভবন ও সুপ্ততাপ বর্জন',
        titleEn: 'Condensation & Latent Heat Release',
        captionBn: 'গ্যাসীয় বাষ্প শীতল হয়ে তরলে রূপান্তরের সময় গৃহিত সুপ্ততাপ পরিবেশে বর্জন করে',
        captionEn: 'Vapor releasing absorbed latent heat into surroundings as it condenses into liquid drops',
        type: 'photo'
      },
      {
        id: 'c2_s10_img3',
        url: '/src/assets/images/states_matter_three_1790754119855.jpg',
        titleBn: 'কঠিনীভবন ও ক্রিস্টাল গঠন',
        titleEn: 'Freezing & Lattice Crystal Solidification',
        captionBn: 'হিমাঙ্কে পৌঁছালে তরলের কণাগুলো আন্তঃআণবিক বলের আকর্ষণে সুবিন্যস্ত ক্রিস্টাল কাঠামো তৈরি করে',
        captionEn: 'Molecules forming rigid crystal lattice upon reaching freezing point',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'ঘনীভবন রেখা (১০০°C)',
        labelEn: 'Condensation Plateau (100°C)',
        symbol: 'Gas → Liquid',
        detailBn: 'বাষ্প শীতল হয়ে তরল পানিতে পরিণত হওয়ার সময় তাপমাত্রা ১০০°C এ স্থির থাকে',
        detailEn: 'Steam condensing to water; temperature holds constant at 100°C while shedding latent heat',
        badgeType: 'temperature',
        position: { x: 35, y: 35 }
      },
      {
        labelBn: 'হিমাঙ্ক রেখা (০°C)',
        labelEn: 'Freezing Plateau (0°C)',
        symbol: 'T_f = 0°C',
        detailBn: 'তরল পানি জমে বরফে রূপান্তরিত হওয়ার সময় তাপমাত্রা ০°C এ স্থির থাকে',
        detailEn: 'Water solidifying into crystalline ice; temperature plateau at 0°C',
        badgeType: 'temperature',
        position: { x: 70, y: 65 }
      }
    ],
    keyPoints: [
      {
        heading: 'শীতলীকরণ বক্ররেখার তাৎপর্য',
        description: 'তাপীয় বক্ররেখার বিপরীত প্রক্রিয়া হলো শীতলীকরণ বক্ররেখা। বাষ্প হতে তাপ প্রত্যাহার করতে থাকলে এটি প্রথমে ১০০°C এ তরলে ঘনীভূত হয়, এরপর আরও ঠান্ডা হয়ে ০°C হিমাঙ্কে বরফে রূপান্তরিত হয়।',
        highlight: 'ঘনীভবন ➯ কঠিনীভবন'
      },
      {
        heading: 'হিমাঙ্ক (Freezing Point)',
        description: '১ বায়ুমণ্ডলীয় প্রমাণ চাপে যে তাপমাত্রায় কোনো তরল জমে কঠিন পদার্থে রূপান্তরিত হতে শুরু করে তাকে ঐ পদার্থের হিমাঙ্ক বলে। বিশুদ্ধ পানির হিমাঙ্ক ০°C। বিশুদ্ধ পদার্থের গলনাঙ্ক ও হিমাঙ্ক সর্বদা সমান হয়।',
        formula: '\\text{পানির গলনাঙ্ক} = \\text{হিমাঙ্ক} = 0^\\circ\\text{C}'
      }
    ],
    callout: {
      type: 'tip',
      title: 'বিশুদ্ধতা যাচাইয়ের উপায়',
      content: 'কোনো পদার্থের গলনাঙ্ক বা স্ফুটনাঙ্ক যদি সুনির্দিষ্ট ও তীক্ষ্ণ (Sharp) হয় এবং গ্রাফে স্পষ্ট সমান্তরাল অনুভূমিক রেখা দেখা যায়, তবে পদার্থটি সম্পূর্ণ বিশুদ্ধ। অপদ্রব্য মেশানো থাকলে গলনাঙ্ক ও স্ফুটনাঙ্কের মান পরিবর্তিত হয়ে যায়।'
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন যে শীতকালে বরফ জমার সময় পানি বিপুল পরিমাণ সুপ্ততাপ বাতাসে ছেড়ে দেয়, যার ফলে তুষারপাতের শুরুতে চারপাশের তাপমাত্রা খুব দ্রুত হ্রাস পায় না।',
    recommendedInteractiveTab: 'heating'
  },
  {
    id: 11,
    chapter: 2,
    title: 'পাতন ও অংশক পাতন (Distillation)',
    subtitle: 'Distillation = Vaporization + Condensation — Separation of Liquid Mixtures',
    category: 'পৃথকীকরণ প্রযুক্তি',
    gallery: [
      {
        id: 'c2_s11_img1',
        url: '/src/assets/images/boiling_phase_change_1790754166610.jpg',
        titleBn: 'পাতন যন্ত্র ও লিবিগ শীতক',
        titleEn: 'Distillation Apparatus with Liebig Condenser',
        captionBn: 'গোলতলি ফ্লাস্কে বাষ্পীভবন এবং লিবিগ শীতকের শীতল পানিতে বাষ্প ঘনীভূত হয়ে গ্রাহক ফ্লাস্কে বিশুদ্ধ তরল সংগ্রহ',
        captionEn: 'Round-bottom flask vaporization coupled with cooling in Liebig condenser to collect distillate',
        type: 'photo'
      },
      {
        id: 'c2_s11_img2',
        titleBn: 'পাতন প্রক্রিয়ার ভেক্টর চিত্ররূপ',
        titleEn: 'Distillation Vector Flow Chart',
        captionBn: 'বাষ্পীভবন (Vaporization) এবং ঘনীভবন (Condensation)-এর যুগল রূপরেখা',
        captionEn: 'Sequential schematic of vaporization followed by condensation to separate components',
        type: 'diagram',
        customDiagramType: 'heatingCurve'
      },
      {
        id: 'c2_s11_img3',
        url: '/src/assets/images/diffusion_nh3_hcl_1790754135489.jpg',
        titleBn: 'ল্যাবরেটরি রাসায়নিক পৃথকীকরণ',
        titleEn: 'Chemical Separation in Lab',
        captionBn: 'স্ফুটনাঙ্কের উল্লেখযোগ্য পার্থক্যের ওপর ভিত্তি করে দুটি মিশ্রণীয় তরল আলাদা করার বৈজ্ঞানিক পদ্ধতি',
        captionEn: 'Separation of miscible liquids based on difference in boiling points',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'পাতন ফ্লাস্ক (বাষ্পীভবন)',
        labelEn: 'Distillation Flask',
        symbol: 'Vaporization',
        detailBn: 'মিশ্রণকে উত্তপ্ত করে নিম্ন স্ফুটনাঙ্কের উপাদানকে প্রথমে বাষ্পীভূত করা হয়',
        detailEn: 'Mixture heated so lower boiling point component vaporizes first',
        badgeType: 'temperature',
        position: { x: 25, y: 55 }
      },
      {
        labelBn: 'লিবিগ শীতক (ঘনীভবন)',
        labelEn: 'Liebig Condenser',
        symbol: 'Condensation',
        detailBn: 'শীতল পানির প্রবাহের মাধ্যমে গরম বাষ্পকে দ্রুত ঠান্ডা করে তরলে পরিণত করা হয়',
        detailEn: 'Cool water jacket condenses hot vapor back into purified liquid',
        badgeType: 'liquid',
        position: { x: 55, y: 40 }
      },
      {
        labelBn: 'গ্রাহক ফ্লাস্ক (পাতিত তরল)',
        labelEn: 'Receiving Flask',
        symbol: 'Distillate',
        detailBn: 'সংগৃহীত বিশুদ্ধ পাতিত তরল (Distillate)',
        detailEn: 'Purified separated distillate collected drop by drop',
        badgeType: 'liquid',
        position: { x: 80, y: 70 }
      }
    ],
    keyPoints: [
      {
        heading: 'পাতনের মূল সমীকরণ (Distillation Formula)',
        description: 'কোনো তরলকে তাপ প্রয়োগে বাষ্পে পরিণত করে এবং সেই বাষ্পকে পুনরায় শীতল করে তরলে রূপান্তর করার যৌথ প্রক্রিয়াকে পাতন বলে।',
        formula: '\\text{পাতন (Distillation)} = \\text{বাষ্পীভবন} + \\text{ঘনীভবন}'
      },
      {
        heading: 'অংশক পাতন (Fractional Distillation)',
        description: 'দুটি বা ততোধিক তরলের স্ফুটনাঙ্কের পার্থক্য যদি ৪০°C এর কম হয়, তবে তাদের পৃথক করতে সাধারণ পাতনের বদলে অংশক কলাম (Fractionating column) ব্যবহার করে অংশক পাতন করা হয়। যেমন: পেট্রোলিয়ামের পরিশোধন।',
        highlight: 'স্ফুটনাঙ্কের পার্থক্য < ৪০°C'
      }
    ],
    callout: {
      type: 'info',
      title: 'ল্যাব ও শিল্পক্ষেত্রে ব্যবহার',
      content: '১. সমুদ্রের লবণাক্ত পানি থেকে পানের উপযোগী বিশুদ্ধ পানি তৈরি।\n২. অপরিশোধিত খনিজ তেল (Crude Petroleum) থেকে পেট্রোল, ডিজেল, কেরোসিন পৃথকীকরণ।\n৩. পানিতে ইথানলের মিশ্রণ থেকে বিশুদ্ধ অ্যালকোহল নিষ্কাশন।'
    },
    speakerNotes: 'শিক্ষার্থীদের মনে করিয়ে দিন: লিবিগ শীতকে ঠান্ডা পানি সর্বদা নিচ দিয়ে প্রবেশ করাতে হয় এবং উপর দিয়ে বের হয়, যাতে পুরো শীতকটি সর্বদা পানিতে পূর্ণ থাকে ও সর্বোচ্চ শীতলীকরণ ঘটে।',
    recommendedInteractiveTab: 'heating'
  },
  {
    id: 12,
    chapter: 2,
    title: 'উর্ধ্বপাতন (Sublimation) ও উর্ধ্বপাতিত পদার্থ',
    subtitle: 'Sublimation — Direct Transition from Solid to Gas Phase Without Melting',
    category: 'বিশেষ ভৌত পরিবর্তন',
    gallery: [
      {
        id: 'c2_s12_img1',
        url: '/src/assets/images/sublimation_iodine_1790754151308.jpg',
        titleBn: 'আয়োডিনের ঊর্ধ্বপাতন পরীক্ষা',
        titleEn: 'Iodine Sublimation Laboratory Setup',
        captionBn: 'কঠিন আয়োডিনকে তাপে তরল না হয়ে সরাসরি ঘন বেগুনি বাষ্পে রূপান্তর এবং ঠান্ডা ফানেলে কঠিন ক্রিস্টালে জমাট বাঁধা',
        captionEn: 'Solid iodine transitioning directly into dense violet vapor and crystallizing on cold inverted funnel',
        type: 'photo'
      },
      {
        id: 'c2_s12_img2',
        titleBn: 'উর্ধ্বপাতনের ভেক্টর ডায়াগ্রাম',
        titleEn: 'Sublimation Phase Vector Diagram',
        captionBn: 'কঠিন থেকে সরাসরি গ্যাস (ঊর্ধ্বপাতন) এবং গ্যাস থেকে সরাসরি কঠিন (নিক্ষেপণ বা ডিপোজিশন)',
        captionEn: 'Direct transformation Solid to Gas (Sublimation) and Gas to Solid (Deposition)',
        type: 'diagram',
        customDiagramType: 'sublimationSetup'
      },
      {
        id: 'c2_s12_img3',
        url: '/src/assets/images/states_matter_three_1790754119855.jpg',
        titleBn: 'উর্ধ্বপাতিত পদার্থের আণবিক রূপ',
        titleEn: 'Molecular Lattice of Subliming Solids',
        captionBn: 'অণুগুলোর মধ্যকার দুর্বল ভ্যান্ডার ওয়ালস বল তাপে ভেঙে তরল অবস্থা না পেয়ে সরাসরি মুক্ত গ্যাসে পরিণত হয়',
        captionEn: 'Weak intermolecular forces causing rapid vaporization directly skipping liquid phase',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'কঠিন আয়োডিন ক্রিস্টাল',
        labelEn: 'Solid Iodine Crystals',
        symbol: 'I₂(s)',
        detailBn: 'গাঢ় ধূসর-কালো বর্ণের চকচকে কঠিন আয়োডিন যা তাপে গলে না',
        detailEn: 'Dark shiny solid iodine crystals ready for sublimation',
        badgeType: 'sublimation',
        position: { x: 30, y: 75 }
      },
      {
        labelBn: 'বেগুনি আয়োডিন বাষ্প',
        labelEn: 'Violet Iodine Gas Vapor',
        symbol: 'I₂(g) [বেগুনি বাষ্প]',
        detailBn: 'তাপে সরাসরি কঠিন হতে মুক্ত বেগুনি বর্ণের গ্যাসীয় আয়োডিন বাষ্প',
        detailEn: 'Intense glowing violet iodine gas vapor filling the beaker',
        badgeType: 'gas',
        position: { x: 50, y: 48 }
      },
      {
        labelBn: 'তুলার ছিপি ও কাচ ফানেল',
        labelEn: 'Inverted Funnel with Cotton Plug',
        symbol: 'Deposition Ring',
        detailBn: 'ঠান্ডা কাচ ফানেলের ভেতরের দেয়ালে বেগুনি বাষ্প শীতল হয়ে পুনরায় কঠিন ক্রিস্টালে জমাট বাঁধে',
        detailEn: 'Cold inner funnel wall where vapor deposits directly back into pure solid crystals',
        badgeType: 'sublimation',
        position: { x: 75, y: 30 }
      }
    ],
    keyPoints: [
      {
        heading: 'উর্ধ্বপাতনের সংজ্ঞা (Definition of Sublimation)',
        description: 'যে প্রক্রিয়ায় কোনো কঠিন পদার্থকে তাপ দিলে তা তরলে পরিণত না হয়ে সরাসরি বাষ্পে রূপান্তরিত হয় এবং সেই বাষ্পকে শীতল করলে সরাসরি কঠিনে পরিণত হয়, তাকে ঊর্ধ্বপাতন বলে।',
        formula: '\\text{কঠিন পদার্থ} \\underset{+তাপ}{\\overset{শীতল}{\\rightleftharpoons}} \\text{বাষ্প (গ্যাস)}'
      },
      {
        heading: 'প্রধান উর্ধ্বপাতিত পদার্থসমূহের তালিকা (মুখস্থ রাখার বিষয়)',
        description: '১. কর্পূর (C₁₀H₁₆O)\n২. নিশাদল বা অ্যামোনিয়াম ক্লোরাইড (NH₄Cl)\n৩. আয়োডিন (I₂)\n৪. ন্যাপথালিন (C₁₀H₈)\n৫. কঠিন কার্বন ডাই-অক্সাইড বা ড্রাই আইস (Dry Ice, CO₂)\n৬. অ্যালুমিনিয়াম ক্লোরাইড (AlCl₃)',
        highlight: 'নিশাদল, কর্পূর, ন্যাপথালিন, আয়োডিন, ড্রাই আইস'
      }
    ],
    callout: {
      type: 'tip',
      title: 'ড্রাই আইস (Dry Ice) এর বিশেষত্ব',
      content: 'কঠিন কার্বন ডাই-অক্সাইডকে সাধারণ বায়ুমণ্ডলীয় চাপে রেখে দিলে এটি তরল না হয়ে সরাসরি গ্যাসে পরিণত হয় এবং কোনো ভেজা দাগ ফেলে না। এজন্য একে "শুষ্ক বরফ" বা ড্রাই আইস বলা হয়। এটি আইসক্রিম পরিবহন ও নাটকের মঞ্চে কুয়াশা তৈরিতে ব্যবহৃত হয়।'
    },
    speakerNotes: 'এসএসসি বোর্ড পরীক্ষায় বহুবার এসেছে: "কোনটি ঊর্ধ্বপাতিত পদার্থ?" অপশনে নিশাদল (NH₄Cl), কর্পূর বা ন্যাপথালিন থাকে। শিক্ষার্থীদের পুরো তালিকাটি মনে রাখতে উৎসাহিত করুন।',
    recommendedInteractiveTab: 'kinetic'
  },
  {
    id: 13,
    chapter: 2,
    title: 'প্লাজমা অবস্থা ও অধ্যায় সমাপ্তি সারসংক্ষেপ',
    subtitle: 'The Plasma State, Absolute Zero & Comprehensive Chapter 2 Revision',
    category: 'সারসংক্ষেপ ও আধুনিক পদার্থ',
    gallery: [
      {
        id: 'c2_s13_img1',
        url: '/src/assets/images/states_matter_three_1790754119855.jpg',
        titleBn: 'পদার্থের চতুর্থ অবস্থা: প্লাজমা',
        titleEn: 'Fourth State of Matter: Plasma',
        captionBn: 'অতি উচ্চ তাপমাত্রায় গ্যাসের পরমাণু থেকে ইলেকট্রন বিচ্যুত হয়ে ধনাত্মক আয়ন ও মুক্ত ইলেকট্রনের উজ্জ্বল মিশ্রণ',
        captionEn: 'Superheated gas ionized into positive ions and free electrons; seen in stars and lightning',
        type: 'photo'
      },
      {
        id: 'c2_s13_img2',
        titleBn: 'পদার্থের ৪টি অবস্থার পূর্ণাঙ্গ তুলনা',
        titleEn: 'Four States of Matter Comparison',
        captionBn: 'কঠিন, তরল, গ্যাস ও প্লাজমা কণার তাপীয় শক্তি ও আয়নিক বৈশিষ্ট্যের ধারাবাহিক রূপ',
        captionEn: 'Comparative diagram of Solid, Liquid, Gas, and superheated ionized Plasma state',
        type: 'diagram',
        customDiagramType: 'kineticStates'
      },
      {
        id: 'c2_s13_img3',
        url: '/src/assets/images/boiling_phase_change_1790754166610.jpg',
        titleBn: 'তাপীয় শক্তি ও পরম শূন্য তাপমাত্রা',
        titleEn: 'Thermal Energy Spectrum & Absolute Zero',
        captionBn: 'পরম শূন্য তাপমাত্রা (0 K = -273.15°C) থেকে শুরু করে প্লাজমা তাপমাত্রা পর্যন্ত তাপীয় বর্ণালী',
        captionEn: 'Thermal spectrum from Absolute Zero (0 Kelvin) to extreme stellar plasma temperatures',
        type: 'photo'
      }
    ],
    diagramAnnotations: [
      {
        labelBn: 'প্লাজমা অবস্থা',
        labelEn: 'Ionized Plasma State',
        symbol: 'Plasma (4th State)',
        detailBn: 'গ্যাসকে তীব্র তাপ দিলে ইলেকট্রন মুক্ত হয়ে বিদ্যুৎ পরিবাহী আয়নিত প্লাজমা গ্যাস সৃষ্টি করে',
        detailEn: 'Gas heated so intensely that atoms break into positive ions and free electrons',
        badgeType: 'gas',
        position: { x: 50, y: 35 }
      },
      {
        labelBn: 'পরম শূন্য তাপমাত্রা',
        labelEn: 'Absolute Zero (0 K)',
        symbol: '0 K = -273.15°C',
        detailBn: 'যে তাত্ত্বিক তাপমাত্রায় পদার্থের কণার সকল তাপীয় গতি ও আয়তন শূন্য বলে বিবেচনা করা হয়',
        detailEn: 'Theoretical minimum temperature where molecular kinetic energy ceases completely',
        badgeType: 'temperature',
        position: { x: 50, y: 70 }
      }
    ],
    keyPoints: [
      {
        heading: 'প্লাজমা (Plasma) কী?',
        description: 'প্লাজমা হলো পদার্থের চতুর্থ অবস্থা। অত্যন্ত উচ্চ তাপমাত্রায় গ্যাসীয় কণাগুলো আয়নিত হয়ে ধনাত্মক আয়ন ও মুক্ত ইলেকট্রনের এক বিদ্যুৎ পরিবাহী সমন্বয় তৈরি করে। সূর্য, নক্ষত্র, বজ্রপাত ও ফ্লুরোসেন্ট বাতিতে প্লাজমা বিদ্যমান।',
        highlight: 'আয়নিত গ্যাসীয় অবস্থা'
      },
      {
        heading: 'পরম শূন্য তাপমাত্রা (Absolute Zero)',
        description: 'যে সর্বনিম্ন তাপমাত্রায় কোনো গ্যাসীয় পদার্থের আয়তন তাত্ত্বিকভাবে শূন্য হয়ে যায় এবং কণার সকল তাপীয় গতি থেমে যায়, তাকে পরম শূন্য তাপমাত্রা বলে। এর মান 0 K বা -273.15°C।',
        formula: 'T(\\text{Kelvin}) = \\theta(^\\circ\\text{C}) + 273.15'
      },
      {
        heading: 'অধ্যায় ২ এর প্রধান শিক্ষণীয় সারসংক্ষেপ',
        description: '✓ কণার গতিতত্ত্ব ও তিন অবস্থা। ✓ ব্যাপন বনাম নিঃসরণ। ✓ গ্রাহামের ব্যাপন সূত্র (r ∝ 1/√M)। ✓ তাপীয় ও শীতলীকরণ বক্ররেখা এবং সুপ্ততাপ। ✓ পাতন (বাষ্পীভবন + ঘনীভবন) ও ঊর্ধ্বপাতন (নিশাদল, কর্পূর, আয়োডিন, ন্যাপথালিন, ড্রাই আইস)।',
        highlight: 'এসএসসি পরীক্ষার সম্পূর্ণ প্রস্তুতি'
      }
    ],
    callout: {
      type: 'tip',
      title: 'পরবর্তী অধ্যায় ৩ এর সাথে যোগসূত্র',
      content: 'অধ্যায় ২ এ আমরা পদার্থের কণার বাহ্যিক ভৌত অবস্থা, কণার গতি ও তাপীয় আচরণ শিখলাম। পরবর্তী অধ্যায় ৩ এ আমরা এই কণাগুলোর অভ্যন্তরীণ গঠন—পরমাণু, ইলেকট্রন, প্রোটন, নিউট্রন ও কোয়ান্টাম কক্ষপথ আবিষ্কার করব!'
    },
    speakerNotes: 'শিক্ষার্থীদের অভিনন্দন জানান! অধ্যায় ২ এর পুরো ধারণাগত ভিত্তি শক্ত হলো। এখন তারা অধ্যায় ২ এর কুইজ টেস্ট এবং ইন্টারঅ্যাক্টিভ ল্যাবগুলোতে তাদের মেধার যাচাই করতে পারে।',
    recommendedInteractiveTab: 'kinetic'
  }
];
