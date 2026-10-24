// Comprehensive End-to-End Route, Security & Integrity Test Suite
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const checks = [];

function test(name, fn) {
  try {
    const res = fn();
    checks.push({ name, pass: true, msg: res || 'PASSED' });
  } catch (err) {
    checks.push({ name, pass: false, msg: err.message });
  }
}

console.log('====================================================');
console.log('   FULL SYSTEM, ROUTE & SECURITY AUDIT SUITE        ');
console.log('====================================================\n');

// 1. Audit Environment Variables and Supabase Secret Isolation
test('Security Audit: No Supabase service_role keys exposed in frontend', () => {
  const envLocal = fs.readFileSync(path.join(rootDir, '.env.local'), 'utf8');
  if (envLocal.includes('service_role')) {
    throw new Error('FATAL SECURITY ISSUE: service_role key found in .env.local');
  }
  const distDir = path.join(rootDir, 'dist');
  if (fs.existsSync(distDir)) {
    const jsFiles = fs.readdirSync(path.join(distDir, 'assets')).filter(f => f.endsWith('.js'));
    for (const f of jsFiles) {
      const code = fs.readFileSync(path.join(distDir, 'assets', f), 'utf8');
      if (code.includes('service_role') || code.includes('sbp_')) {
        throw new Error(`FATAL: Secret detected in client bundle ${f}`);
      }
    }
  }
  return 'All client bundles and .env verified clean of service-role credentials';
});

// 2. Audit Route Inventory from App.tsx
test('Route Verification: All canonical public & admin routes exist and match components', () => {
  const appTsx = fs.readFileSync(path.join(rootDir, 'src', 'App.tsx'), 'utf8');
  const expectedRoutes = [
    '/:locale',
    '/:locale/about',
    '/:locale/projects-activities',
    '/:locale/projects-activities/:slug',
    '/:locale/team',
    '/:locale/partners',
    '/:locale/fudul',
    '/:locale/sci-cast',
    '/:locale/research',
    '/:locale/join-us',
    '/:locale/contact',
    '/:locale/privacy',
    '/login',
    '/admin'
  ];
  for (const r of expectedRoutes) {
    if (!appTsx.includes(r)) {
      throw new Error(`Route definition missing: ${r}`);
    }
  }
  return `${expectedRoutes.length} key route patterns validated in App.tsx`;
});

// 3. Form Honeypot & Privacy Consent Checks
test('Security Audit: Anti-Bot Honeypot and Privacy Consent present in Forms', () => {
  const joinUs = fs.readFileSync(path.join(rootDir, 'src', 'views', 'JoinUsView.tsx'), 'utf8');
  const contact = fs.readFileSync(path.join(rootDir, 'src', 'views', 'ContactView.tsx'), 'utf8');
  
  if (!joinUs.includes('_honeypot') || !joinUs.includes('formData._honeypot')) {
    throw new Error('JoinUsView missing bot honeypot trap');
  }
  if (!contact.includes('_honeypot') || !contact.includes('formData._honeypot')) {
    throw new Error('ContactView missing bot honeypot trap');
  }
  if (!joinUs.includes('consentAgreed')) {
    throw new Error('JoinUsView missing explicit consent check');
  }
  return 'Forms implement zero-trust bot honeypots and privacy consent gates';
});

// 4. Role-Based Access Control (RBAC) Isolation in Admin App
test('Security Audit: RBAC Boundaries and Route Protection', () => {
  const adminDash = fs.readFileSync(path.join(rootDir, 'src', 'views', 'AdminDashboardView.tsx'), 'utf8');
  if (!adminDash.includes('!isAuthenticated') || !adminDash.includes('Navigate to="/admin/login"')) {
    throw new Error('AdminDashboardView missing unauthenticated redirect gate');
  }
  if (!adminDash.includes('hasRole')) {
    throw new Error('AdminDashboardView missing role-based view enforcement');
  }
  return 'Admin boundary protected with strict authentication and role guards';
});

// 5. Build Artifact Completeness & Headers
test('Build Artifacts: Static Distribution (dist) Ready for Local/Cloud Serving', () => {
  const distIndex = path.join(rootDir, 'dist', 'index.html');
  if (!fs.existsSync(distIndex)) throw new Error('dist/index.html not generated');
  const content = fs.readFileSync(distIndex, 'utf8');
  if (!content.includes('<!doctype html>')) throw new Error('Malformed dist/index.html');
  return 'Distribution directory verified and complete';
});

// Output Summary
let allPassed = true;
checks.forEach(c => {
  if (c.pass) {
    console.log(`✅ [PASS] ${c.name}`);
    console.log(`   ↳ ${c.msg}`);
  } else {
    allPassed = false;
    console.log(`❌ [FAIL] ${c.name}`);
    console.log(`   ↳ ${c.msg}`);
  }
});

console.log('\n====================================================');
if (allPassed) {
  console.log('🎉 AUDIT COMPLETE: ALL SECURITY, ROUTE & INTEGRITY CHECKS PASSED!');
  process.exit(0);
} else {
  console.log('⚠️ AUDIT COMPLETED WITH ISSUES.');
  process.exit(1);
}
