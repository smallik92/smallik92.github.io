# Website Revamp Plan

## Context

The current website was built using the Start Bootstrap "Creative" template (Bootstrap 4.5, 2020). It functions as a basic academic portfolio but falls short as a professional landing page targeting applied AI/ML recruiters. The goal is to modernize the site both visually and in content — making it polished, succinct, and conversion-optimized for roles like Applied AI Scientist, AI Researcher, and ML Engineer.

---

## Part 1: Critique of Current Site

### Critical Bugs
- **HTML tag mismatch**: `<h2 ...>Sruti Mallik</h1>` (wrong closing tag)
- **CSS class typo**: `text=center` used instead of `text-center` in 3 places (Highlights buttons)
- **Unclosed `<p>` tag**: line 512 in Gallery section (`<p class="text-justify..."> Outside of work`)
- **Extra `</div>`**: Contact section has mismatched div tags
- **Empty gallery slots**: JU section has blank `<div class="col-3">` placeholders with commented-out content

### Design Flaws
1. **Generic template**: Burnt orange (#f4623a) is the unmodified Start Bootstrap Creative default. No visual identity.
2. **Merriweather serif body font**: Dense and hard to scan. Recruiters skim — serif body is not the right choice.
3. **No animations or interactivity**: The site is completely static. No fade-ins, hover effects, or scroll transitions.
4. **Hero section is cluttered**: Name, title, degree string, "Welcome to my webpage!", bio, and two dividers all compete for attention.
5. **Degree string is cryptic**: "WUSTL Ph.D. 2021| WUSTL M.S. 2018| JU B.E. 2015" reads like raw data.
6. **"Welcome to my webpage!" heading**: Filler text that adds no value.
7. **Button strip between hero and about**: Feels disconnected — a floating row of nav buttons outside any section.
8. **No name/logo in navbar**: Branding is entirely absent from the navigation bar.
9. **82KB+ CSS file**: Full Bootstrap embedded inline — bloated, hard to maintain.

### Content/Messaging Flaws
1. **No value proposition**: Nothing on the page answers "Why should you hire this person for an AI role?" in the first 3 seconds.
2. **Current title may be outdated**: "Data Scientist at C3.AI" has no placeholder for more recent roles.
3. **"Responsible for" language**: Passive, corporate, and vague. No impact statements or metrics.
4. **Relevant Courses listed as a skill**: This is a résumé padding tactic — on a portfolio it reads as filler.
5. **git/SVN listed as a "skill"**: Far too basic. This belongs nowhere on a senior AI portfolio.
6. **"People Leadership Experience" section**: The title sounds corporate. Two TA roles and one DEI committee seat don't warrant their own section.
7. **Single certification**: Oxford ML Summer School 2021 (virtual) — slim; could be noted elsewhere.
8. **Gallery section**: "Life at WUSTL / Life at JU / Life outside work" takes up a full section and targets personal connections, not recruiters. For a professional portfolio this is wasted space.
9. **Personal project dates are old**: Kaggle projects from 2020–2021 with no recent work is a red flag.
10. **"Find my Resume here"**: Informal. Should be "Download Résumé" or similar.
11. **No GitHub link**: Profile exists (github.com/smallik92) but not linked in the Contact section.
12. **Publications mixed without category/year**: Conference posters and journal articles are indistinguishable. No year grouping.
13. **Bio is too long and dense**: The hero bio paragraph is 5 sentences — most of it will not be read.

### Structural Flaws
1. **No narrative flow**: Sections don't guide the recruiter through a story (Who you are → What you've done → Why it matters → Contact).
2. **About section has too many subsections** (5 different headers: Education, Experience, Technical Expertise, Courses, Certifications, Leadership) — overwhelming.
3. **Research and personal projects are mixed**: PhD research sits alongside 2020 Kaggle competitions with no visual distinction.
4. **Course projects don't belong**: Academic course projects from grad school are not portfolio material for an industry ML role.
5. **"Online Presence" as a nav label**: Non-standard. Should be "Contact".

---

## Part 2: Refactoring Plan

### Technology Stack

**Framework**: React 18 + Vite
**Styling**: Tailwind CSS (replaces Bootstrap — utility-first, zero dead CSS, trivial dark mode support)
**Animation**: Framer Motion (React-native, declarative — replaces AOS/jQuery Easing)
**Icons**: React Icons (includes Font Awesome, Heroicons, Simple Icons — tree-shaken)
**Scroll**: `react-scroll` for smooth section navigation (replaces jQuery scroll)
**Fonts**: Google Fonts loaded via `@fontsource` npm packages (Inter body, Merriweather Sans headings)
**Deploy**: Vercel or GitHub Pages (via `vite build` + `gh-pages`)

**Why React over vanilla HTML:**
- Component-based: each section is an isolated, editable file
- Content-data separation: work experience, projects, and publications stored as JS objects — easy to update without touching markup
- Dark/light mode via a single React state toggle
- Signals modern frontend fluency (bonus for AI/ML engineer roles)

**Project structure:**
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx         # Education + Skills
│   ├── Experience.jsx    # Timeline
│   ├── Research.jsx
│   ├── Projects.jsx      # Card grid
│   ├── Publications.jsx
│   ├── PhotoStrip.jsx    # Minimal gallery
│   └── Contact.jsx
├── data/
│   ├── experience.js     # Work history as array of objects
│   ├── projects.js       # Project cards as array of objects
│   └── publications.js   # Pubs grouped by category
├── App.jsx
├── main.jsx
└── index.css             # Tailwind directives + CSS variables
```

### New Section Structure

```
Nav: [Logo: SM] ............. [About] [Experience] [Research] [Projects] [Publications] [Contact]

1. Hero
2. About (condensed — skills + education only)
3. Experience (timeline layout — work history with placeholders)
4. Research (PhD thesis summary, impacts)
5. Projects (card grid — personal + side projects, placeholder for recent)
6. Publications (categorized, year-grouped)
7. Contact (email, LinkedIn, GitHub, Google Scholar)
```

**Removed sections**: Gallery (eliminated), Course Projects (eliminated), People Leadership (folded into Experience), Certifications (folded into About skills).

---

### Section-by-Section Changes

#### 1. Navigation
- Add logo/name: "SM" monogram or "Sruti Mallik" text brand on left
- Rename "Online Presence" → "Contact"
- Remove "Gallery" nav item
- Rename "Projects" → "Projects" (keep)
- Add "Experience" as a nav item (new section)
- Clean up spacing and active state

#### 2. Hero Section
- **Remove**: "Welcome to my webpage!" heading, degree string, long bio paragraph
- **Headline**: Name in large type, then a single punchy tagline:
  > *Applied AI Scientist | ML Research → Industry Impact*
- **Sub-line**: 2 lines max — current role + research background
- **Buttons**: "View My Work" (→ Projects), "Download Résumé", "Get In Touch"
- Keep photo; ensure it's properly cropped/centered
- Background: keep bg-masthead.jpg but adjust overlay darkness for better contrast

#### 3. About (condensed)
Keep only two sub-sections:
- **Education**: Keep 3-column layout (PhD, MS, BE) — clean and works well
- **Skills**: Replace wall-of-text subsections with **skill tags/badges** grouped by category:
  - *AI/ML*: Deep Learning, Computer Vision, NLP, Reinforcement Learning, Optimization
  - *Languages*: Python, MATLAB, R
  - *Frameworks*: PyTorch, TensorFlow, Scikit-learn, XGBoost
  - *Tools*: Git, Docker, AWS/GCP (placeholder if applicable)

Remove: Relevant Courses, git/SVN bullet, Certifications subsection, People Leadership subsection.

#### 4. Experience (NEW SECTION — replaces the experience part of About)
- **Timeline layout** (vertical, left-border style — CSS only, no library)
- Each role gets:
  - Company name + role title
  - Date range
  - 2–3 bullet points with **impact statements** (quantified where possible)
- **Current roles**: Placeholder card at top:
  > *[Role Title] at [Company] | [Date] – Present*
  > Add your most recent experience here.
- **Previous role**: C3.AI — rewrite bullets for impact:
  - e.g., "Designed and deployed ML pipelines for industrial predictive maintenance across Fortune 500 clients"
  - Placeholder for specific metrics: `[X]% improvement in ...`
- **Fluor Daniel**: Keep brief (1 bullet, listed for completeness)
- TA / DEI: Folded into a "Other" entry or removed

#### 5. Research
- Keep thesis summary but **shorten dramatically**:
  - Title
  - 3-sentence problem/approach/impact summary
  - Keep the infographic image
  - Keep the 3 highlight buttons (newsletter, pub1, pub2)
- Remove: Part 1 and Part 2 long descriptions + defense images (too academic, too long)
- Add: "Key Findings" bullets (3 brief, impactful statements)

#### 6. Projects (card grid)
Replace the current nested row mess with a **3-column responsive card grid**:

Each card:
- Project name
- 1-sentence description
- Tags (e.g., `Deep Learning` `Computer Vision`)
- Links: [GitHub] [Paper/Notebook]

Cards:
1. **[PLACEHOLDER]** — "Recent Project" with grayed-out card style: *"Coming soon — currently in progress"*
2. WiDS Datathon 2021 — keep, rewrite description to 2 sentences
3. Drug MOA (Kaggle) — keep, rewrite
4. Flower Classification — keep, rewrite
5. Cross-Correlation Facial Recognition (undergraduate) — keep if space allows

Remove: Functional Bayesian fMRI and Epileptic Seizure Recognition course projects.

#### 7. Publications
Replace raw `<ul>` with a **structured list**:
- Group into: *Journal Articles*, *Conference Papers & Posters*, *Thesis*
- Each entry: Title | Venue | Year | [Link]
- Use a consistent citation style (no mixed formatting)
- Visually distinguish categories with a subtle left-border color

#### 8. Minimal Photo Strip (replaces Gallery)
- Slim horizontal strip — 4–6 photos in a single row, no subsections, no captions beyond alt text
- Placed just above Contact as a human touch, not a full section
- No nav link — not prominent enough to warrant one

#### 9. Contact
- **4 links**: Email, LinkedIn, GitHub (add: https://github.com/smallik92), Google Scholar
- Fix icon choices: use `fa-linkedin`, `fa-github`, `fa-graduation-cap`, `fa-envelope`
- Clean up the div mismatch bug
- Small footer: "© 2024 Sruti Mallik" with a centered line

---

### Color & Typography Changes

**Color Palette** — implement using CSS custom properties so the palette can be swapped in one place. Default to Option A (blue/purple), with Option C (dark) variables also defined in a commented block for easy switching.

Option A (default):
- Primary: `#2563EB` (professional blue)
- Accent: `#7C3AED` (purple)
- Background: `#F8FAFC`
- Text: `#0F172A`
- Muted: `#64748B`

Option C (dark — easy toggle):
- Primary: `#38BDF8`
- Accent: `#A78BFA`
- Background: `#0F172A`
- Text: `#E2E8F0`

**Typography**:
- Headings: Merriweather Sans (keep — clean)
- Body: Switch to **Inter** (Google Fonts, free) — highly readable at all sizes
- Code/tags: JetBrains Mono or system monospace

---

### Files To Create / Modify

The existing `index.html`, `css/styles.css`, and `js/scripts.js` will be superseded by the React app. The repo structure will change to:

**New files (created):**
- `package.json` — Vite + React + Tailwind + Framer Motion + react-scroll + react-icons
- `vite.config.js` — base path set for GitHub Pages if deploying there
- `tailwind.config.js`
- `postcss.config.js`
- `src/main.jsx` + `src/App.jsx`
- `src/index.css` (Tailwind directives + CSS custom properties for color palette)
- `src/components/*.jsx` (one per section — 9 components)
- `src/data/*.js` (structured content data — 3 files)

**Kept as-is:**
- `assets/img/` — all existing images reused with updated relative paths (`/assets/img/...`)

**Retired:**
- `index.html`, `css/styles.css`, `js/scripts.js`, `index_template.html`

---

### Verification Plan

1. Run `npm run dev` — confirm Vite dev server starts with no errors
2. In browser at `localhost:5173`:
   - Navbar shows name/logo; all links smooth-scroll to correct sections
   - Hero renders with correct text, photo, and CTA buttons
   - Experience timeline renders correctly with C3.AI and Fluor Daniel
   - Project card grid: 3 columns desktop → 1 column mobile
   - Publications grouped by category with working links
   - Contact has 4 working links (email, LinkedIn, GitHub, Scholar)
   - Photo strip shows above Contact
3. Toggle dark/light mode — verify colors switch cleanly
4. Resize browser to 375px (iPhone) — verify mobile layout throughout
5. Open browser console — confirm no JS errors
6. Run `npm run build` — confirm build succeeds with no errors
7. Test built output: `npm run preview` — verify production build works

---

### Resolved Decisions
- **Current role**: C3.AI is current — update description/dates but keep as primary
- **Color**: CSS variables set up for both blue/purple (A) and dark (C) — easy to toggle
- **Gallery**: Kept as a minimal 4–6 photo horizontal strip above Contact, no nav link
- **GitHub**: Add https://github.com/smallik92 to Contact section
