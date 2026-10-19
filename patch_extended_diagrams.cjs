const fs = require('fs');

let diagCode = fs.readFileSync('src/components/BiologyExtendedDiagramStudio.tsx', 'utf8');

// Ensure that for all bioCh7 to bioCh14, it renders appropriate rich interactive 2D diagrams
console.log('BiologyExtendedDiagramStudio lines:', diagCode.split('\n').length);
