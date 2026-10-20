# Assets and details to supply

Use this checklist before publishing. Nothing here invents credentials, metrics, or screenshots for you.

## Required personal details

Update in `src/config/site.ts` (and `.env.local` / Vercel for the URL):

- [x] Real display name
- [x] Professional email
- [x] LinkedIn profile URL
- [x] Production site URL via `NEXT_PUBLIC_SITE_URL` → `https://rawanatef.me` (set in Vercel Production)
- [x] Availability toggle (`availability.show`) and message when you want it public
- [ ] Optional location string

## Project screenshots

Files live in **`public/projects/`**. Covers and galleries are wired in `src/data/projects.ts`.

- [x] NebulaCV cover + gallery
- [x] Lockerroomors cover + gallery
- [x] SM Studios cover + gallery
- [x] NCC X-Calibur cover + gallery
- [ ] `fixora-cover.png` when Fixora is ready (`visible: false` until then)

Several PNGs are still large (1MB+). Prefer compressing before deploy if LCP feels slow; Next.js Image already serves resized variants.

## Testimonials (`src/data/testimonials.ts`)

Only entries with `approved: true` and a non-empty `quote` publish. Flip `approved` in that one file after written client confirmation.

- [x] **Mohamed Al Habsi / SM Studios** — client-approved wording published (`approved: true`); no invented job title
- [x] **John / Product Manager, NCC X-Calibur** — client-approved wording published (`approved: true`); no invented surname
- [x] **Danielle Sullivan / Lockerroomors** — client-provided wording published (`approved: true`)

## Optional factual content to strengthen case studies

Add only what you can verify.

### NebulaCV

- [ ] Confirmed public tech stack (frameworks, hosting, AI providers)
- [ ] Any non-metric outcome you are comfortable stating

### Lockerroomors

- [ ] Confirmed technologies used (if cleared for disclosure)
- [ ] Exact feature ownership with Danielle before stronger claims

### SM Studios

- [ ] Confirmed implementation stack if desired

### NCC X-Calibur (ncc.com.eg)

- [ ] Confirm exact role/scope with John (PM) before stronger ownership claims
- [ ] Confirmed tech stack if you want it listed

### Fixora

Hidden while in development (`visible: false` in `src/data/projects.ts`).

When ready:

- [ ] Set `visible: true` and `comingSoon: false`
- [ ] Add `website` URL
- [ ] Write the full case study
- [ ] Add `fixora-cover.png`
- [ ] Do **not** claim launch or revenue unless true

## Branding / SEO / commercial

- [x] Favicon (`src/app/favicon.ico`)
- [x] Open Graph image (`src/app/opengraph-image.tsx`)
- [x] Confirm Vercel Production env `NEXT_PUBLIC_SITE_URL=https://rawanatef.me`
- [ ] DNS for rawanatef.me (nameservers still on Namecheap registrar; point to Vercel or apply Vercel A/CNAME records)
- [x] Confirm package prices and payment terms in `src/data/packages.ts` (Launch $999 · Sprint $2,900 · Custom from $5,900; 40% deposit)
- [ ] Optional location string in `src/config/site.ts`
