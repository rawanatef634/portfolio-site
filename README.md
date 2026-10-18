# Personal Portfolio

Production-ready personal portfolio for a full-stack software engineer. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Lucide icons. Designed to attract freelance clients, founders, and agencies.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- Deployable on Vercel

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start local development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript (`tsc --noEmit`) |

## Customize before launch

### 1. Site configuration

Edit [`src/config/site.ts`](src/config/site.ts):

- `name` — your display name
- `email` — contact email
- `linkedIn` — LinkedIn profile URL
- `url` — fallback site URL (prefer env var in production)
- `availability.show` / `availability.message` — homepage availability line (off by default)
- `location` — optional location string for the About page

### 2. Environment

Set the canonical origin in `.env.local` (and in Vercel):

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 3. Project content

Edit [`src/data/projects.ts`](src/data/projects.ts) to update copy, roles, links, visibility, and featured flags.

- **Fixora** is `visible: false` by default — set to `true` when ready
- Keep claims factual; use `// TODO` comments in source for unverified details

### 4. Project images

Add real screenshots under [`public/projects/`](public/projects/). See that folder’s README for filenames and sizing guidance. Until files exist, elegant CSS placeholders are shown automatically.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage — hero, featured work, services, about preview, contact |
| `/projects` | Project index |
| `/projects/[slug]` | Case studies |
| `/about` | About, specialization, experience, philosophy |

SEO includes page metadata, Open Graph tags, `sitemap.xml`, `robots.txt`, canonical URLs, and Person / CreativeWork JSON-LD.

## Deploy on Vercel

1. Push this repository to GitHub (or import the local folder in Vercel).
2. Create a new Vercel project from the repo.
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain (no trailing slash).
4. Deploy.

Vercel detects Next.js automatically. No special build settings are required.

## What you still need to supply

See **[ASSETS_AND_DETAILS.md](ASSETS_AND_DETAILS.md)** for the checklist of personal details, screenshots, and factual content to fill in before publishing.
