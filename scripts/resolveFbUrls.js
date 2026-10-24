import fs from 'fs';

const seedData = JSON.parse(fs.readFileSync('D:/Hazim/Projects/sci_infinty/website_01/src/data/seedDataUpdated.json', 'utf8'));

const allFbUrls = new Set();

function extractUrls(obj) {
  if (!obj) return;
  if (typeof obj === 'string') {
    if (obj.includes('facebook.com')) allFbUrls.add(obj);
  } else if (Array.isArray(obj)) {
    obj.forEach(extractUrls);
  } else if (typeof obj === 'object') {
    Object.values(obj).forEach(extractUrls);
  }
}

extractUrls(seedData);

console.log('Total FB URLs found:', allFbUrls.size);

async function resolveAll() {
  const mapping = {};
  for (const url of allFbUrls) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        redirect: 'manual'
      });
      const loc = res.headers.get('location');
      if (loc) {
        // Strip out rdid and tracking params for clean canonical permalink
        const cleanLoc = loc.split('&rdid=')[0];
        mapping[url] = cleanLoc;
        console.log('[RESOLVED]', url, '->', cleanLoc);
      } else {
        mapping[url] = url;
        console.log('[NO REDIRECT]', url, res.status);
      }
    } catch (e) {
      console.error('[ERROR]', url, e.message);
    }
  }

  fs.writeFileSync('D:/Hazim/Projects/sci_infinty/website_01/src/data/fbUrlMapping.json', JSON.stringify(mapping, null, 2));
  console.log('Saved fbUrlMapping.json');
}

resolveAll();
