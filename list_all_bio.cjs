const fs = require('fs');

console.log('--- ALL BIOLOGY CHAPTERS AUDIT ---');
for (let c = 1; c <= 14; c++) {
  const f = 'src/data/biologyChapter' + c + 'SlidesData.ts';
  const content = fs.readFileSync(f, 'utf8');
  // Match each slide block
  const slides = content.split(/{\s*id:\s*/).slice(1);
  console.log(`\n=== Chapter ${c}: total ${slides.length} slides ===`);
  slides.slice(0, 3).forEach((s, idx) => {
    const titleMatch = s.match(/title:\s*'([^']+)'/);
    const subMatch = s.match(/subtitle:\s*'([^']+)'/);
    console.log(`  Slide ${idx+1}: [${titleMatch ? titleMatch[1] : ''}] - [${subMatch ? subMatch[1] : ''}]`);
  });
}
