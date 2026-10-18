# Assets and details to supply

Use this checklist before publishing. Nothing here invents credentials, metrics, or screenshots for you.

## Required personal details

Update in `src/config/site.ts` (and `.env.local` / Vercel for the URL):

- [ ] Real display name (replace `[YOUR NAME]`)
- [ ] Professional email (replace `hello@example.com`)
- [ ] LinkedIn profile URL
- [ ] Production site URL via `NEXT_PUBLIC_SITE_URL`
- [ ] Availability toggle (`availability.show`) and message when you want it public
- [ ] Optional location string

## Required project screenshots

Add image files to **`public/projects/`** (PNG is fine):

- [x] `nebulacv-cover.png`
- [ ] `nebulacv-dashboard.png` (optional gallery)
- [x] `lockerroomors-cover.png`
- [ ] `lockerroomors-admin.png` (optional gallery)
- [x] `smstudios-cover.png`
- [x] `ncc-cover.png`

Optional / later:

- [ ] `fixora-cover.png` (Fixora is a visible placeholder until you fill it in)

Recommended: **16:10** aspect ratio when possible. Compress large PNGs if the page feels slow.

## Optional factual content to strengthen case studies

Add only what you can verify. Leave blank or keep neutral otherwise.

### NebulaCV

- [ ] Confirmed public tech stack (frameworks, hosting, AI providers)
- [ ] Any non-metric outcome you are comfortable stating

### Lockerroomors

- [ ] Confirmed technologies used on the engagement (if cleared for disclosure)
- [ ] Any additional verified responsibilities

### SM Studios

- [ ] Confirmed implementation details if desired
- [ ] Additional screenshots for the gallery

### NCC X-Calibur (ncc.com.eg)

- [ ] Confirm your exact role/scope on the engagement
- [ ] Confirmed tech stack if you want it listed
- [ ] Extra gallery screenshots if desired

### Fixora

Already visible as a **coming soon** placeholder (`comingSoon: true` in `src/data/projects.ts`).

When ready:

- [ ] Set `comingSoon: false`
- [ ] Add `website` URL
- [ ] Write the full case study
- [ ] Add `fixora-cover.png`
- [ ] Do **not** claim launch or revenue unless true

## Branding / SEO polish (optional)

- [ ] Replace default `src/app/favicon.ico`
- [ ] Add Open Graph image (e.g. `public/og.png`) and reference it in metadata
- [ ] Proofread all copy for voice and accuracy
