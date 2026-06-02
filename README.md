# Healthcare Intelligence MY

Malaysia's most comprehensive hospital intelligence platform — a React SPA covering **294 verified hospitals across 16 states and federal territories**, with specialty filters, emergency guides, insurance tools, and a public medical education library.

🌐 **Live:** https://yifeng22100.github.io/hospital-intelligence-my/

---

## Features

### Hospital Directory
- **294 hospitals** — 155 public · 139 private — across all 16 Malaysian states and territories
- Filter by **state**, **specialty** (20 curated categories), and **sector** (public / private)
- Full-text search across hospital names, cities, and specialties
- Hospital cards with 4-tab detail modal: Overview · Specialties · Facilities · Intelligence
- FPP badge, MSQH/JCI accreditation badges, side-by-side comparison (up to 5)

### Intelligence Hub (11 topics)
| Topic | What it covers |
|---|---|
| 💡 Insider Tips | 12 healthcare navigation hacks (FPP, insurance pre-admission, EPF, MySalam) |
| 🏥 Hospital Tiers | Public referral pyramid: Klinik → District → State → Tertiary |
| 🛡️ Insurance Panels | Panel lists, LOG limits, claims guide for 13 Malaysian insurers |
| 💰 Cost Reference | Procedure costs — Public vs FPP vs Private Mid vs Premium |
| 👨‍⚕️ Doctor Check | MMC registry verification, qualification decoder, red flags |
| 🔬 Clinical Trials | NMRR, ClinicalTrials.gov, top trial centres |
| 🌙 Night Cover | Who is on duty overnight by hospital type |
| ✅ Verify Facilities | How to verify nursing homes, dialysis, dental, and specialist centres |
| ⚕️ Specialties Guide | 22 specialties with symptoms, procedures, and top centres |
| 🚨 Emergency Events | Step-by-step guides for 11 emergencies |

### Insurance Hub
- Healthcare access matrix: Citizens · PRs · Foreigners
- Why insurance matters — public system gap analysis
- Choosing the right policy type
- **Premium Calculator** — interactive estimate by age, gender, smoker, health status, and annual limit
- Takaful vs Conventional comparison
- Insurance terms decoder (20 glossary entries)

### Knowledge Hub (10 topics)
| Topic | What it covers |
|---|---|
| 📖 Medical Glossary | Plain-English medical terms + hospital abbreviations decoded |
| 💊 Common Drugs | 20 medications with Mandarin names, pinyin, dosing, emergency use flags |
| 🔬 Lab Values | Blood test reference ranges (HbA1c, cholesterol, kidney, liver, CBC) |
| 🩺 Health Screening | Age-by-age screening guide |
| 🤰 Maternal Health | Antenatal visits, tests, postnatal care and delivery guide |
| 💉 Vaccination Guide | Full NIP schedule for infants, toddlers, school-age, adults |
| 👶 Children's Healthcare | Milestones, common illnesses, nutrition, emergency decision tree |
| 👴 Elderly & OKU Care | Screening, chronic disease management, falls prevention, cognitive health |
| 🧠 Mental Health Resources | Conditions, Malaysian support services, crisis hotlines |
| 📋 Reading Medical Reports | How to interpret blood tests, scans, diagnoses, and prescriptions |

### Tools
- **Cost Estimator** — procedure cost lookup by specialty with public/private comparison
- **Panel Lookup** — search any private hospital to see which of 13 insurers cover it; search insurers to see their panel, GL hotline (verified 2025), and TPA details
- **Resources** — emergency contacts, patient rights, NGO support, financial schemes, second opinion guide

---

## Data

All hospital entries are individually verified against:
- MOH Malaysia official hospital directory
- MSQH (Malaysian Society for Quality in Health) accreditation list
- Official hospital websites and contact pages
- Google Maps / Waze for address verification

Data coverage: bed counts, ICU/NICU/OT counts, specialty availability, transfer pathways, specialist rankings, room rates, insurance panels, accreditations, robotics/technology, and contact details.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router v6 (HashRouter) |
| Deployment | GitHub Pages via `peaceiris/actions-gh-pages` (gh-pages branch) |
| Data | Static ES module JS files (`src/data/`) |

No backend, no database — fully static. Hospital data lives in `src/data/hospitals/<state>.js`, combined in `src/data/index.js`.

---

## Development

```bash
npm install
npm run dev       # dev server at localhost:5173
npm run build     # production build to dist/
```

GitHub Pages deployment triggers automatically on push to `main` via `.github/workflows/deploy.yml` (pushes to `gh-pages` branch).

**GitHub Pages settings:** Set Source → Branch: `gh-pages` / `/ (root)` in repository Settings → Pages.

---

## Disclaimer

For personal reference only. Verify all clinical, specialist, and insurance details directly with the respective hospital or insurer before making any medical decisions. Not a substitute for professional medical advice.
