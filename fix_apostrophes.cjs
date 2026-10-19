const fs = require('fs');

for (let c = 1; c <= 14; c++) {
  const f = `src/data/biologyChapter${c}SlidesData.ts`;
  if (!fs.existsSync(f)) continue;
  let content = fs.readFileSync(f, 'utf8');
  
  // Replace unescaped single quotes within values
  // Specifically: Bowman's -> Bowman\'s, Lindeman's -> Lindeman\'s, Mendel's -> Mendel\'s, 'Necessary Evil' -> "Necessary Evil", Blackman's -> Blackman\'s
  content = content.replace(/Bowman's/g, "Bowman\\'s");
  content = content.replace(/Lindeman's/g, "Lindeman\\'s");
  content = content.replace(/Mendel's/g, "Mendel\\'s");
  content = content.replace(/Blackman's/g, "Blackman\\'s");
  content = content.replace(/'Necessary Evil'/g, '"Necessary Evil"');
  content = content.replace(/Curtis's/g, "Curtis\\'s");
  content = content.replace(/father's/g, "father\\'s");
  content = content.replace(/Father's/g, "Father\\'s");
  content = content.replace(/Darwin's/g, "Darwin\\'s");
  content = content.replace(/Lamarck's/g, "Lamarck\\'s");
  content = content.replace(/Tansley's/g, "Tansley\\'s");

  fs.writeFileSync(f, content, 'utf8');
  console.log(`Cleaned apostrophes in Chapter ${c}`);
}
