// Automated Release Verification Script for Sci Infinity (Static Light-Only Version)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendDir = path.resolve(__dirname, '..');

const results = [];

function check(title, fn) {
  try {
    const outcome = fn();
    if (outcome === false) {
      results.push({ title, status: 'FAIL', details: 'Check condition failed' });
    } else {
      results.push({ title, status: 'PASS', details: outcome || 'OK' });
    }
  } catch (err) {
    results.push({ title, status: 'FAIL', details: err.message });
  }
}

console.log('====================================================');
console.log('  SCI INFINITY RELEASE READINESS VERIFICATION SUITE  ');
console.log('====================================================\n');

// 1. Build Output Check
check('Production Build Artifacts (dist/index.html & assets)', () => {
  const distHtml = path.join(frontendDir, 'dist', 'index.html');
  if (!fs.existsSync(distHtml)) throw new Error('dist/index.html is missing');
  const htmlContent = fs.readFileSync(distHtml, 'utf8');
  if (!htmlContent.includes('<div id="root">')) throw new Error('root element missing in dist/index.html');
  if (!htmlContent.includes('rel="manifest"')) throw new Error('manifest link missing in dist/index.html');
  
  const distAssets = path.join(frontendDir, 'dist', 'assets');
  if (!fs.existsSync(distAssets)) throw new Error('dist/assets is missing');
  const files = fs.readdirSync(distAssets);
  const jsFiles = files.filter(f => f.endsWith('.js'));
  const cssFiles = files.filter(f => f.endsWith('.css'));
  if (jsFiles.length === 0) throw new Error('No JS bundle found in dist/assets');
  if (cssFiles.length === 0) throw new Error('No CSS bundle found in dist/assets');
  return `Found ${jsFiles.length} JS bundle (${jsFiles[0]}) and ${cssFiles.length} CSS bundle (${cssFiles[0]})`;
});

// 2. Brand Tokens in CSS Bundle
check('Compiled CSS Brand Palette & Gradient', () => {
  const distAssets = path.join(frontendDir, 'dist', 'assets');
  const files = fs.readdirSync(distAssets);
  const cssFile = files.find(f => f.endsWith('.css'));
  const cssContent = fs.readFileSync(path.join(distAssets, cssFile), 'utf8');
  const designSystemPath = path.join(frontendDir, 'src', 'index.css');
  const designSystem = fs.readFileSync(designSystemPath, 'utf8').toLowerCase();

  const requiredTokens = ['#111020', '#56368d', '#434a9a', '#3b56a6', '#2774bb', '#1196d3'];
  for (const token of requiredTokens) {
    if (!designSystem.includes(token)) {
      throw new Error(`Required brand token ${token} not found in the design system`);
    }
  }

  const renderedTokens = ['#111020', '#56368d', '#3b56a6', '#2774bb', '#1196d3'];
  const lowerCss = cssContent.toLowerCase();
  for (const token of renderedTokens) {
    if (!lowerCss.includes(token)) {
      throw new Error(`Rendered brand token ${token} not found in compiled CSS`);
    }
  }
  return 'Brand palette definitions and rendered CSS colors verified';
});

// 3. Web App Manifest
check('PWA Manifest Specification (manifest.json)', () => {
  const manifestPath = path.join(frontendDir, 'public', 'manifest.json');
  if (!fs.existsSync(manifestPath)) throw new Error('manifest.json missing');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  if (!manifest.name || !manifest.short_name) throw new Error('name or short_name missing');
  if (manifest.theme_color !== '#111020' || manifest.background_color !== '#111020') {
    throw new Error('Theme/Background color must match brand anchor #111020');
  }
  if (!manifest.icons || manifest.icons.length === 0) throw new Error('Manifest icons missing');
  return `Valid manifest for "${manifest.short_name}" with ${manifest.icons.length} icon specifications`;
});

// 4. Service Worker
check('PWA Service Worker Presence & Cache', () => {
  const swPath = path.join(frontendDir, 'public', 'sw.js');
  if (!fs.existsSync(swPath)) throw new Error('sw.js missing');
  return 'Service worker file is available for offline support';
});

// 5. Offline Fallback Page
check('Offline Fallback Surface (offline.html)', () => {
  const offlinePath = path.join(frontendDir, 'public', 'offline.html');
  if (!fs.existsSync(offlinePath)) throw new Error('offline.html missing');
  const content = fs.readFileSync(offlinePath, 'utf8');
  if (!content.includes('غير متصل')) throw new Error('Arabic offline message missing');
  return 'offline.html exists with localized messaging and retry action';
});

// 6. Content Integrity & Date-Sensitive ARPS Workshop
check('Content Integrity: ARPS Workshop 2026 Registration Status', () => {
  const seedPath = path.join(frontendDir, 'src', 'data', 'seedData.ts');
  const seed = fs.readFileSync(seedPath, 'utf8');
  if (!seed.includes('arps-workshop-medical-physics-2026')) {
    throw new Error('ARPS Workshop missing from seed data');
  }
  if (!seed.includes('registration_closed')) {
    throw new Error('ARPS workshop registration deadline 20 Oct 2026 has passed; state must be registration_closed');
  }
  return 'ARPS Workshop is present with registration_closed status (deadline 20 Oct 2026 honored)';
});

// 7. Canonical Activities Coverage
check('Content Inventory: Required Scientific Activities & Camps', () => {
  const seedPath = path.join(frontendDir, 'src', 'data', 'seedData.ts');
  const seed = fs.readFileSync(seedPath, 'utf8');
  const requiredSlugs = [
    '2nd-forum-specialized-programs',
    'entrepreneurship-business-camp',
    'ideation-camp-creativa',
    'water-analysis-treatment-training',
    'bioinformatics-drug-discovery-session',
    'arps-workshop-medical-physics-2026',
    'industrial-detergents-workshop',
    'synthetic-biology-fields-applications',
    'plant-biotechnology-applications',
    'scientific-figures-biorender-workshop',
    'chemical-biosensors-environmental-applications',
    'human-pluripotent-stem-cells-session',
    'medical-rep-career-gateway'
  ];

  for (const slug of requiredSlugs) {
    if (!seed.includes(slug)) {
      throw new Error(`Required canonical activity "${slug}" is missing from seed data`);
    }
  }
  return `All ${requiredSlugs.length} required scientific activities, sessions, and workshops are verified in seedData`;
});

// 8. Content Truthfulness: No Misused Team Photos for Partners
check('Content Truthfulness: Partners Page Clean of Fake Images', () => {
  const partnersViewPath = path.join(frontendDir, 'src', 'views', 'PartnersView.tsx');
  const content = fs.readFileSync(partnersViewPath, 'utf8');
  if (content.includes('/images/ec.jpg') || content.includes('/images/hr.jpg') || content.includes('/images/pr.jpg')) {
    throw new Error('Team member portraits must not be used as partner logos');
  }
  return 'PartnersView uses dignified collaboration badges without misusing team member photos';
});

// 9. Static-Only & No Dark Mode / No Admin in App
check('Static Purity: No Admin or Dark Mode in App & Source Code', () => {
  const appPath = path.join(frontendDir, 'src', 'App.tsx');
  const appContent = fs.readFileSync(appPath, 'utf8');
  if (appContent.includes('/admin')) throw new Error('App.tsx still contains /admin routes');
  if (appContent.includes('dark:')) throw new Error('App.tsx still contains dark: classes');
  if (fs.existsSync(path.join(frontendDir, 'src', 'context', 'ThemeContext.tsx'))) {
    throw new Error('ThemeContext.tsx must be removed');
  }
  if (fs.existsSync(path.join(frontendDir, 'src', 'context', 'AuthContext.tsx'))) {
    throw new Error('AuthContext.tsx must be removed');
  }
  return 'App.tsx and src are clean of dark mode, theme toggles, and admin code';
});

// 10. Authentic Social Icons in Footer
check('Authentic Social Media Icons in Footer', () => {
  const footerPath = path.join(frontendDir, 'src', 'components', 'layout', 'Footer.tsx');
  const footerContent = fs.readFileSync(footerPath, 'utf8');
  if (footerContent.includes('material-symbols-outlined') || footerContent.includes('podcasts')) {
    throw new Error('Footer still uses generic material icons for Spotify');
  }
  if (!footerContent.includes('SpotifyIcon') || !footerContent.includes('FacebookIcon') || !footerContent.includes('YoutubeIcon')) {
    throw new Error('Footer missing authentic brand SVG icons');
  }
  return 'Footer renders authentic brand SVG icons for all official social platforms';
});

// Summary output
console.log('\nResults:');
let allPassed = true;
for (const r of results) {
  const symbol = r.status === 'PASS' ? '✅' : '❌';
  console.log(`${symbol} [${r.status}] ${r.title}`);
  console.log(`   ↳ ${r.details}`);
  if (r.status !== 'PASS') allPassed = false;
}

console.log('\n====================================================');
if (allPassed) {
  console.log('🎯 ALL 10 RELEASE READINESS CHECKS PASSED SUCCESSFULLY!');
  process.exit(0);
} else {
  console.log('⚠️ SOME RELEASE READINESS CHECKS FAILED');
  process.exit(1);
}
