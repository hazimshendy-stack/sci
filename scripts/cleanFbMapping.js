import fs from 'fs';

const rawMapping = JSON.parse(fs.readFileSync('D:/Hazim/Projects/sci_infinty/website_01/src/data/fbUrlMapping.json', 'utf8'));

const cleanMapping = {};

for (const [key, val] of Object.entries(rawMapping)) {
  try {
    let cleanVal = val;
    if (cleanVal.includes('/reel/')) {
      const match = cleanVal.match(/facebook\.com\/reel\/(\d+)/);
      if (match) cleanVal = `https://www.facebook.com/reel/${match[1]}/`;
    } else if (cleanVal.includes('/videos/')) {
      const match = cleanVal.match(/facebook\.com\/(\d+)\/videos\/(\d+)/);
      if (match) cleanVal = `https://www.facebook.com/${match[1]}/videos/${match[2]}/`;
    } else if (cleanVal.includes('permalink.php')) {
      const u = new URL(cleanVal);
      const story_fbid = u.searchParams.get('story_fbid');
      const id = u.searchParams.get('id');
      if (story_fbid && id) {
        cleanVal = `https://www.facebook.com/permalink.php?story_fbid=${story_fbid}&id=${id}`;
      }
    }
    cleanMapping[key] = cleanVal;
  } catch (e) {
    cleanMapping[key] = val;
  }
}

fs.writeFileSync('D:/Hazim/Projects/sci_infinty/website_01/src/data/fbUrlMapping.json', JSON.stringify(cleanMapping, null, 2));
console.log('Cleaned mapping saved! Count:', Object.keys(cleanMapping).length);

// Also replace in seedData.ts directly
let seedData = fs.readFileSync('D:/Hazim/Projects/sci_infinty/website_01/src/data/seedData.ts', 'utf8');
let replacedCount = 0;

for (const [shortUrl, canonicalUrl] of Object.entries(cleanMapping)) {
  if (shortUrl !== canonicalUrl && seedData.includes(shortUrl)) {
    seedData = seedData.replaceAll(shortUrl, canonicalUrl);
    replacedCount++;
  }
}

fs.writeFileSync('D:/Hazim/Projects/sci_infinty/website_01/src/data/seedData.ts', seedData, 'utf8');
console.log('seedData.ts updated with canonical URLs! Replaced entries:', replacedCount);
