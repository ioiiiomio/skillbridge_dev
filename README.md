# SkillBridge KZ — Landing Page

High-fidelity marketing site for **SkillBridge KZ**, built with Next.js 14 (App
Router), TypeScript and Tailwind CSS, implementing the Bright Horizon brand
direction from the design brief.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To create a production build:

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/
    layout.tsx        Root layout — fonts, metadata, favicon
    page.tsx           Assembles all sections in order
    globals.css        Design tokens, base styles, reduced-motion rules
  components/
    ui/                Button, Container, SectionLabel, SectionHeading,
                        GlassCard, MascotImage — shared primitives
    layout/            Header, Footer
    sections/          One file per landing-page section (Hero, About,
                        Stats, Problem, HowItWorks, Games, Results,
                        Partners, FAQ, FinalCTA) plus their sub-components
                        (ProblemCard, GameCard, ProcessTimeline,
                        ResultsCarousel, PartnerCategoryCard, FAQAccordion)
  lib/
    content.ts          All section copy as structured arrays (single
                         source of truth — edit copy here, not in JSX)
    types.ts             Shared content types
    constants.ts         Placeholder links (platform URL, contact email,
                          social handles) — see TODOs below
public/
  mascot/               Mascot pose PNGs, cropped from the character sheet
                         with transparent backgrounds (wave, laptop,
                         thinking, point, book, excited, run, thumbsup)
  brand/                Logo icon + generated favicon sizes
```

## Content & assets

- All visible copy lives in `src/lib/content.ts`, matching the approved
  Russian copy from the brief exactly. Edit it there rather than in
  components.
- Mascot poses were extracted from the uploaded character sheet and
  cleaned (background removed, tightly cropped). No new mascot artwork
  was generated — proportions, face and backpack are untouched.
- The **Results** section uses clearly-labelled placeholder story cards
  (no invented student quotes or testimonials). Swap in real videos and
  stories in `RESULT_STORIES` in `content.ts` when available.
- The **Partners** logo strip uses neutral "Logo" placeholders — no
  fabricated company logos. Replace the placeholder blocks in
  `PartnersSection.tsx` once real partner logos are supplied.

## TODO before launch

Search the codebase for `TODO` — all in `src/lib/constants.ts`:

- `PLATFORM_URL` — replace with the real app URL once it exists.
- `PARTNER_EMAIL`, `CONTACT_EMAIL` — replace with verified mailboxes.
- `TELEGRAM_URL`, `INSTAGRAM_URL` — replace with live social handles.

## Notes

- Fonts (Manrope + Inter, Cyrillic-inclusive) are loaded via a standard
  `<link>` tag to Google Fonts rather than `next/font/google`, so the
  build doesn't require network access to fonts.gstatic.com. If your
  deployment environment has open internet access, you can switch to
  `next/font/google` for self-hosted, layout-shift-free fonts.
- Respects `prefers-reduced-motion` throughout (floating mascot, path
  animation, entrance transitions all degrade gracefully).
- Verified with `npm run build` — 0 TypeScript errors, static export of
  the homepage succeeds.
