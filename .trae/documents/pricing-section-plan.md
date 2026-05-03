# Pricing Section Plan

## Summary
- Add a new **Pricing** section to the **Professional** landing page that presents clear “starting from” package tiers with included scope bullets.
- Store pricing copy + tiers in [persona-config.ts](file:///c:/Users/user/Documents/GitHub/my-portfolio/src/persona/persona-config.ts) so updates are centralized.
- Update the footer “Quick Links” to match the sections that actually exist for each persona, and add a `#pricing` link for Professional.

## Current State Analysis
- The Professional homepage is composed in [ProfessionalLanding.jsx](file:///c:/Users/user/Documents/GitHub/my-portfolio/src/components/ProfessionalLanding.jsx), currently rendering:
  - `#home` (ProfessionalHero)
  - `#toolkit` (ProfessionalToolkit)
  - `#portfolio` (ProfessionalSelectedWorks)
  - CTA block (ProfessionalCta)
  - `#process` (Process)
  - `#contact` (Contact)
- There is no existing Pricing component/section in `src/components`.
- Footer “Quick Links” in [Footer.jsx](file:///c:/Users/user/Documents/GitHub/my-portfolio/src/components/Footer.jsx) currently includes `#about` and `#services`, but Professional does not render those sections (Header is currently `null`).
- Persona copy is centralized in [persona-config.ts](file:///c:/Users/user/Documents/GitHub/my-portfolio/src/persona/persona-config.ts), which is the best fit for static pricing data.

## Proposed Changes (Files + What/Why/How)

### 1) Add pricing data + types to persona config
- **File:** [persona-config.ts](file:///c:/Users/user/Documents/GitHub/my-portfolio/src/persona/persona-config.ts)
- **What:**
  - Add new types:
    - `PersonaPricingTier` (name/label, short description, MYR amount, USD amount, scope bullets, optional timeline/revisions, CTA label).
    - `PersonaPricingCopy` (section title, intro text, tiers array, disclaimer text, CTA href).
  - Extend `PersonaDefinition` with `readonly pricing?: PersonaPricingCopy;`
  - Add a `pricing` block for the `professional` persona (placeholder tier data).
- **Why:**
  - Keeps content editable in one place and consistent with how services/portfolio/process are driven.
- **How:**
  - Add `pricing` only to `professional` initially; component renders only if `pricing` exists.
  - Use placeholder tiers with “starting from” positioning and clearly listed scope bullets.

**Placeholder tier structure (editable later):**
- Tier 1: “Landing Page” — RM … / $ … — scope bullets
- Tier 2: “Business Website” — RM … / $ … — scope bullets
- Tier 3: “Web App / Dashboard” — RM … / $ … — scope bullets
- Optional: “Retainer / Maintenance” block (if included, presented as a fourth tier or a compact callout)

### 2) Create the Professional Pricing section component
- **File:** `src/components/ProfessionalPricing.tsx` (new)
- **What:**
  - A new `<section id="pricing">` styled to match the “Professional” section aesthetic (Tailwind tokens like `bg-surface`, `border-border-subtle`, `shadow-ring`).
  - Layout:
    - Header row with title + short intro.
    - Responsive card grid (1 col mobile, 3 cols desktop) of pricing tiers.
    - Each tier card shows: tier name, “Starting from RM X / $ Y”, scope bullets, and a CTA button linking to `#contact`.
    - A small disclaimer block (e.g., “Final quote depends on scope…”) to set expectations.
  - Subtle motion on entrance/hover using `framer-motion`, matching existing sections.
- **Why:**
  - Provides the “job type → price → scope” mapping you want, without implying a rigid one-size-fits-all quote.
- **How:**
  - Read `personaConfig[persona].pricing`; if absent, return `null` (future-proof for other personas).
  - Format currency with `Intl.NumberFormat` (MYR and USD) for consistent commas.

### 3) Mount Pricing into the Professional landing flow
- **File:** [ProfessionalLanding.jsx](file:///c:/Users/user/Documents/GitHub/my-portfolio/src/components/ProfessionalLanding.jsx)
- **What:**
  - Import and render `<ProfessionalPricing />`.
  - Place it between `ProfessionalSelectedWorks` and `ProfessionalCta` (so users see pricing after credibility/portfolio, before the CTA/process).
- **Why:**
  - Natural conversion flow: proof → pricing clarity → CTA.

### 4) Fix footer Quick Links to match actual sections and add Pricing
- **File:** [Footer.jsx](file:///c:/Users/user/Documents/GitHub/my-portfolio/src/components/Footer.jsx)
- **What:**
  - Make “Quick Links” persona-aware:
    - **Professional:** Home, Toolkit, Portfolio, Pricing, Process, Contact
    - **Hobby:** Home, Interests, Music, Philosophy, Contact
  - Keep styling unchanged; only adjust which anchors appear.
- **Why:**
  - Prevent dead links (`#about`, `#services`) and ensure `#pricing` is discoverable.

## Assumptions & Decisions
- Pricing section is **Professional-only** (per your selection).
- Presentation choice: **Starting-from packages** (recommended approach for scope variability).
- Currency display: show **both MYR and USD** side-by-side per tier.
- Data source: **static copy in persona-config.ts**.
- Placeholder numbers and scopes will be used initially; you can later replace them with exact packages/amounts without touching layout code.

## Verification Steps (After Implementation)
- Build/typecheck:
  - Run the project build (`bun run build`) to ensure TypeScript types and Vite build pass.
- Visual checks (dev server):
  - Professional persona:
    - `#pricing` section renders and matches overall style.
    - Cards are responsive (mobile → desktop) and readable.
    - Footer “Pricing” link scrolls to the pricing section.
    - Existing anchors (`#toolkit`, `#portfolio`, `#process`, `#contact`) still work.
  - Hobby persona:
    - Footer quick links match Hobby section ids and no dead links remain.

