# MD RIYAD — Portfolio

An academic-research–oriented personal portfolio for **MD RIYAD**, a Computer Science & Engineering student at the State University of Bangladesh.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**. Fully static, fast, accessible, and responsive.

---

## ✨ Highlights

- **Research-first** presentation of the Bangladesh Flood Predictor project — physics-guided machine learning, presented with scientific humility.
- **TeaQuest** — a creative e-commerce fantasy-world platform with real screenshots and an architecture breakdown.
- **PDI Line Follower** — a robotics/control project.
- **Dark mode** (persisted, respects system preference).
- **Reduced-motion support** (respects `prefers-reduced-motion`).
- **Accessible** — semantic HTML, keyboard navigation, visible focus states, proper contrast.
- **SEO-optimized** — metadata, Open Graph, Twitter cards, generated OG image, sitemap, robots.txt.
- **Static generation** — all pages prerendered for performance.

---

## 🚀 Running locally

Requires **Node.js 20+** and **npm**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build   # production build
npm run start   # serve the production build
```

### Lint

```bash
npm run lint
```

---

## 📁 Project structure

```
portfolio/
├── public/
│   ├── projects/            # project screenshots (TeaQuest)
│   ├── og.png               # generated social preview image
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.ico
├── scripts/
│   └── generate-og.mjs      # generates public/og.png (run before build)
├── .github/workflows/
│   └── deploy.yml           # GitHub Pages deployment workflow
├── src/
│   ├── app/
│   │   ├── layout.tsx     # root layout, fonts, metadata
│   │   ├── page.tsx       # homepage
│   │   ├── globals.css    # design system (tokens, dark mode, themes)
│   │   ├── research/
│   │   │   └── page.tsx   # research overview
│   │   ├── projects/
│   │   │   ├── page.tsx   # projects index
│   │   │   └── [id]/
│   │   │       └── page.tsx  # project detail pages
│   │   ├── about/
│   │   │   └── page.tsx   # about / leadership
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── Header.tsx     # sticky nav + mobile menu + theme toggle
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── SectionHeading.tsx
│   │   └── StatusBadge.tsx
│   ├── data/
│   │   └── projects.ts    # structured project data (add new projects here)
│   └── lib/
│       ├── paths.ts       # base-path-aware asset helper
│       └── useTheme.ts    # theme hook
├── AGENTS.md
├── next.config.ts         # output: "export", basePath: "/portfolio"
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## 📝 Adding a new project

All project content lives in **structured data** in `src/data/projects.ts`. Add an entry to the `projects` array and the project card + detail route appear automatically:

```ts
{
  id: "my-project",
  title: "My Project",
  subtitle: "Short tagline",
  category: "engineering", // "research" | "engineering" | "robotics"
  status: "ongoing",       // "research" | "ongoing" | "completed"
  summary: "One-line description",
  technologies: ["Python", "..."],
  highlights: ["...", "..."],
  description: "Longer description",
  links: { github: "...", live: "..." },
  featured: true,
  order: 4,
}
```

To create a custom project detail page, add a case inside `ProjectSpecificContent` in `src/app/projects/[id]/page.tsx`.

---

## 🎨 Design decisions

- **Palette**: warm off-white background, near-black text, and a single restrained deep-teal accent. The teal echoes the environmental/research identity of the flood project without making the whole site "green."
- **Typography**: Geist (primary sans) + Geist Mono (restrained monospace accents). Two fonts only.
- **Motion**: subtle fade/slide reveals, gentle hover transitions, no parallax/particles/spinners. All animations disabled under `prefers-reduced-motion`.
- **Dark mode**: a carefully tuned theme (not a simple color inversion), persisted to `localStorage`, defaults to system preference.
- **Content hierarchy**: hero → thread statement → selected work → research → build → practice → about → leadership → contact.

---

## 🚀 Deployment — GitHub Pages

This site is configured for **GitHub Pages** at `https://riyadh5674.github.io/portfolio/`.

- `next.config.ts` uses `output: "export"` and `basePath: "/portfolio"`.
- Public asset paths are made base-path aware via `src/lib/paths.ts` (`asset()` helper).
- A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes the `out/` folder to Pages on every push to `main`.

### Setup (once)

1. Create a public repo named **`portfolio`** on GitHub under `riyadh5674`.
2. Push this repository to `main`.
3. In the repo **Settings → Pages**, set **Source** to **GitHub Actions** (the workflow uploads the artifact).

After the first successful run, the site is live at:
```
https://riyadh5674.github.io/portfolio/
```

### Local preview with the real base path

```bash
npm run build
npx serve out   # or any static server
```
then open `http://localhost:3000/portfolio/` (adjust for the serve port).

> **Note:** Because the site is a static export under `/portfolio`, asset URLs include that prefix. Local `npm run dev` serves at `http://localhost:3000/portfolio/` to match production.

### Vercel / Netlify (optional)

If you deploy elsewhere, remove `basePath` from `next.config.ts` and update `src/lib/paths.ts`, `src/app/layout.tsx` (metadataBase/og path), `public/robots.txt`, and `public/sitemap.xml` to your new domain/path.

---

## ✅ Intentionally omitted (not verified)

To keep the site 100% honest, the following were **not** included because they could not be verified from the workspace:

- Specific quantitative achievements (ratings, problem counts, stars, metrics)
- A CV file (none exists in the workspace; the nav omits a CV link)
- LinkedIn (no existing profile/URL confirmed)
- Any publications, awards, certifications, internships, or testimonials
- The Bangladesh Flood Predictor AUC figures are labeled as experimental observations with an explicit caveat that they are not universally validated scientific claims
- Hardware specifications for the robotics project (Kept general: PDI control, C++ — details not verifiable from the workspace)

---

## 🔭 Future improvements

- Add a publications page (when an actual paper exists)
- Add a thinking/lab section with research notes (empty architecture is ready in the data model)
- CSV/JS-driven content for blog posts
- LinkedIn integration when a profile is available
- More real project screenshots as they become available
