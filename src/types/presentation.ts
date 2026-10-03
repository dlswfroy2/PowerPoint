export interface DiagramAnnotation {
  labelBn: string;
  labelEn: string;
  detailBn: string;
  detailEn: string;
  symbol?: string;
  badgeType?: 'electron' | 'proton' | 'neutron' | 'nucleus' | 'orbit' | 'radiation' | 'gold' | 'solid' | 'liquid' | 'gas' | 'temperature' | 'diffusion' | 'sublimation' | 'hazard' | 'safety' | 'quantum' | 'periodic' | 'trend' | 'metal' | 'nonmetal' | 'halogen' | 'noble' | 'bond' | 'cation' | 'anion' | 'radical' | 'polar' | 'spindle' | 'cell' | 'chromosome' | 'gene' | 'force' | 'energy' | 'pressure' | 'fluid' | 'work' | 'power' | (string & {});
  position?: { x: number; y: number }; // percentage position for pin on image
}

export interface SlideImage {
  id: string;
  url?: string;
  titleBn: string;
  titleEn: string;
  captionBn: string;
  captionEn: string;
  type?: 'photo' | 'diagram' | 'chart';
  customDiagramType?: 'notation' | 'aufbauLadder' | 'crCuStability' | 'massCalcPie' | 'periodicMini' | 'subatomicChart' | 'rutherfordVectors' | 'bohrOrbits' | 'kineticStates' | 'diffusionTube' | 'heatingCurve' | 'sublimationSetup' | 'hazardSymbols' | 'scientificMethod' | 'quantumNumbersTable' | 'hundRule' | 'molecularMassCalc' | 'periodicTrends' | 'periodGroupFinder' | 'mendeleevVsModern' | 'specialGroupsChart' | 'ionicBondFormation' | 'covalentSharing' | 'metallicElectronSea' | 'waterPolarityHydration' | 'octetVsDuet' | 'energyConservation' | 'workAngleVectors' | 'hydraulicPressSvg' | 'archimedesBeaker' | 'manometerPressure' | 'barometerSvg' | 'mitosisStages' | 'meiosisStages' | 'crossingOverSvg' | 'chromosomeShapes';
}

export interface Slide {
  id: number;
  subject?: 'chemistry' | 'physics' | 'biology';
  chapter?: 1 | 2 | 3 | 4 | 5;
  title: string;
  subtitle: string;
  category: string;
  image?: string;
  imageCaption?: string;
  secondaryImage?: string;
  secondaryCaption?: string;
  gallery?: SlideImage[]; // 2 to 3 images / diagrams for each slide
  diagramAnnotations?: DiagramAnnotation[];
  keyPoints: {
    heading: string;
    description: string;
    highlight?: string;
    formula?: string;
  }[];
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
    caption?: string;
  };
  callout?: {
    type: 'info' | 'warning' | 'formula' | 'tip';
    title: string;
    content: string;
  };
  speakerNotes: string;
  recommendedInteractiveTab?: 'simulator' | 'aufbau' | 'isotope' | 'kinetic' | 'diffusion' | 'heating' | 'safety' | 'ptable' | 'positionFinder' | 'trends' | 'bondingLab' | 'formulaBuilder' | 'compoundProps' | 'workEnergyLab' | 'pressureLab' | 'cellDivisionLab' | 'cellExplorerLab';
  rawPptx?: RawPptxSlide;
}

export interface PptxRun {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: string;
  fontSize?: number;
  fontFace?: string;
}

export interface PptxParagraph {
  runs: PptxRun[];
  align?: 'left' | 'center' | 'right' | 'justify';
  isBullet?: boolean;
}

export interface PptxElement {
  id: string;
  type: 'text' | 'image' | 'table' | 'shape';
  leftPercent: number;
  topPercent: number;
  widthPercent: number;
  heightPercent: number;
  rotation?: number;
  zIndex?: number;
  fillColor?: string;
  fillOpacity?: number;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  paragraphs?: PptxParagraph[];
  verticalAlign?: 'top' | 'middle' | 'bottom';
  imageUrl?: string;
  tableRows?: {
    cells: {
      text: string;
      fillColor?: string;
      bold?: boolean;
      color?: string;
      align?: 'left' | 'center' | 'right';
    }[];
  }[];
}

export interface RawPptxSlide {
  backgroundColor?: string;
  backgroundImageUrl?: string;
  elements: PptxElement[];
}

export interface ElementData {
  atomicNumber: number;
  symbol: string;
  nameBn: string;
  nameEn: string;
  massNumber: number;
  protons: number;
  neutrons: number;
  electrons: number;
  shells: number[]; // e.g. [2, 8, 1]
  configuration: string; // e.g. "1s² 2s² 2p⁶ 3s¹"
  group: number;
  period: number;
  category: string;
  description: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}
