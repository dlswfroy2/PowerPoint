const fs = require('fs');
const { BIOLOGY_3D_CATALOG } = require('./src/data/biology3DModelsCatalog.ts');

console.log('Catalog loaded. Chapters count:', Object.keys(BIOLOGY_3D_CATALOG).length);
