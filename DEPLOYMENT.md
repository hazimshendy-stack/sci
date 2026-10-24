# Sci Infinity — Deployment Guide

## Prerequisites

- Node.js v24+ (Antigravity Node v24.21.0 available at `C:\Users\2026\AppData\Roaming\Antigravity\bin\`)
- npm package manager (accessed via Antigravity Node)

## Build Locally

To build the project locally, run:

```bash
cd d:\mo\frontend
node node_modules\vite\bin\vite.js build
```

This will generate:
- `dist/index.html`
- `dist/assets/index-[hash].js` (main bundle)
- `dist/assets/index-[hash].css` (styles)
- All images from `public/` copied to `dist/images/`

## Deployment to Cloudflare Pages

1. **Push code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sci Infinity frontend with PWA"
   git remote add origin https://github.com/YOUR_USERNAME/sci-infinity.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project"
   - Connect to your GitHub repository
   - Build configuration:
     - **Build command**: `npm run build` (or `node node_modules/vite/bin/vite.js build`)
     - **Build output directory**: `dist`
   - Click "Save and Deploy"

3. **Environment Variables** (optional):
   If you have a Supabase project, add these in Cloudflare Pages:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Deployment to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Set build command: `npm run build` or `node node_modules/vite/bin/vite.js build`
4. Output directory: `dist`

## Local Development Server

To run the development server:

```bash
cd d:\mo\frontend
node node_modules\vite\bin\vite.js
```

The dev server will start at `http://localhost:5173`

## Troubleshooting

### Build fails with "command not found"

The npm/npx scripts may be blocked by PowerShell execution policy. Use the direct node path:

```bash
node node_modules/typescript/bin/tsc
node node_modules/vite/bin/vite.js
```

### Service worker not registering

Check that:
- `sw.js` is in the `public/` directory
- The file is being served from `/sw.js` (not `/public/sw.js`)
- No network errors in browser console

### PWA not installable

Verify:
- `manifest.json` is in `public/` directory
- Manifest has all required fields (name, short_name, icons, start_url)
- Icons are at least 192x192 and 512x512
- HTTPS is used (localhost is allowed for development)

## Environment Variables Reference

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `VITE_DB_MODE` | Database mode: `mock` or `supabase` | `mock` | No |
| `VITE_ENABLE_LIVE_FORMS` | Explicit approval gate for live public submissions | `false` | No |
| `VITE_SUPABASE_URL` | Supabase project URL | - | Yes (only if `VITE_ENABLE_LIVE_FORMS=true`) |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key | - | Yes (only if `VITE_ENABLE_LIVE_FORMS=true`) |

## Production Safety Gate

Public volunteer and contact forms must remain in staging mode until the privacy notice, retention policy, and data-owner approval are complete.

- Default safe state: `VITE_ENABLE_LIVE_FORMS=false`
- Required before enabling live data collection:
  - Approved privacy notice and retention policy
  - Verified hosting and database choice
  - Reviewer sign-off on data handling and admin access

## Production Checklist

- [ ] Build completes without errors
- [ ] PWA manifest is valid (check in browser DevTools → Application → Manifest)
- [ ] Service worker registers (check in browser DevTools → Application → Service Workers)
- [ ] All routes work (Home, About, Activities, Team, Magazine, etc.)
- [ ] Forms remain in staging mode unless `VITE_ENABLE_LIVE_FORMS=true`
- [ ] Theme toggle persists
- [ ] Language switcher works (RTL/LTR)
- [ ] Responsive design verified at 320px, 768px, 1024px, 1440px
- [ ] No console errors in browser

## Rollback

If you need to rollback:

**Cloudflare Pages**: Use the "Deployments" tab to redeploy a previous commit
**Vercel**: Use the "Releases" tab to roll back to a previous version
