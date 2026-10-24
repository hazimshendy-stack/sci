# Sci Infinity - مبادرة ساي إنفينيتي

A bilingual (Arabic RTL / English LTR), responsive science research and innovation platform associated with the Faculty of Science, Mansoura University.

## Features

- 🌐 **Bilingual Support** - Arabic (RTL) and English (LTR) with URL-based locale switching
- 🎨 **Modern UI** - React 19 + TypeScript + Vite + Tailwind CSS
- 📱 **PWA Ready** - Offline support, installable on home screen
- 🔒 **Secure Forms** - Volunteer applications and contact messages with anti-abuse protection
- 🗄️ **Database Integration** - Supabase (PostgreSQL) with Row Level Security (RLS)

## Quick Start

### Prerequisites

- Node.js v24+
- npm package manager

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Supabase Setup (Optional for Production)

1. **Install Supabase client**:
   ```bash
   npm install @supabase/supabase-js
   ```

2. **Configure environment variables**:
   Create `.env.local`:
   ```env
   VITE_DB_MODE=supabase
   VITE_SUPABASE_URL=your-supabase-project-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

3. **Run database migration**:
   - Go to Supabase SQL Editor
   - Copy and run the SQL from `migrate-db.sql`

4. **Create storage buckets**:
   - `public-media` - For team photos, magazine covers
   - `private-attachments` - For CVs and private messages

## Project Structure

```
frontend/
├── public/              # Static assets (manifest.json, sw.js)
├── src/
│   ├── components/      # Reusable UI components
│   ├── context/         # React context providers (Theme, Locale)
│   ├── data/            # Seed data and interfaces
│   ├── lib/             # API service and utilities
│   ├── views/           # Page components
│   └── main.tsx         # Application entry point
├── dist/                # Production build (generated)
├── .env.local           # Environment variables (gitignored)
├── migrate-db.sql       # Database schema and seed data
└── supabase-setup.md    # Detailed setup guide
```

## Public Routes

| Route | Description |
|-------|-------------|
| `/:locale` | Home page |
| `/:locale/about` | About the initiative |
| `/:locale/projects-activities` | Projects and activities archive |
| `/:locale/projects-activities/:slug` | Activity detail |
| `/:locale/team` | Team and committees |
| `/:locale/fudul` | Fudul magazine |
| `/:locale/sci-cast` | Sci Cast podcast |
| `/:locale/research` | Research achievements |
| `/:locale/join-us` | Volunteer application form |
| `/:locale/contact` | Contact form |
| `/:locale/privacy` | Privacy policy |

## Technologies

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL + RLS)
- **Build**: Vite 8

## License

© 2026 Sci Infinity - All rights reserved
