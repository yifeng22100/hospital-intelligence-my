# Healthcare Intelligence MY

Malaysia's most comprehensive hospital intelligence platform — a React SPA covering **294 verified hospitals across 16 states and federal territories**, with specialty filters, emergency event guides, and insider healthcare navigation tips.

🌐 **Live:** https://yifeng22100.github.io/hospital-intelligence-my/

---

## Features

### Hospital Directory
- **294 hospitals** — 155 public · 139 private — across all 16 Malaysian states and territories
- Filter by **state**, **specialty** (20 curated categories), and **sector** (public / private)
- Full-text search across hospital names, cities, and specialties
- Hospital cards linking to a 4-tab detail modal: Overview · Specialties · Facilities · Intelligence

### Intelligence Hub (11 topics)
| Topic | What it covers |
|---|---|
| 💡 Insider Tips | 12 healthcare navigation hacks (FPP, insurance pre-admission, EPF, MySalam) |
| 🏥 Hospital Tiers | Public referral pyramid: Klinik → District → State → Tertiary |
| 🛡️ Insurance | Panel lists, LOG limits, claims guide for 9 major Malaysian insurers |
| 💰 Cost Reference | Procedure costs — Public vs FPP vs Private Mid vs Premium |
| 👨‍⚕️ Doctor Check | MMC registry verification, qualification decoder, red flags |
| 🔬 Clinical Trials | NMRR, ClinicalTrials.gov, top trial centres (Beacon, Sunway, UMMC) |
| 🌙 Night Cover | Who is on duty overnight by hospital type |
| ✅ Verify Facilities | How to verify nursing homes, dialysis, dental, and specialist centres |
| 📖 Medical Glossary | 200+ searchable plain-English medical terms |
| ⚕️ Specialties Guide | 22 specialties with symptoms, procedures, and top centres |
| 🚨 Emergency Events | Step-by-step guides for 11 emergencies: Heart Attack, Stroke, Choking, Burns, Drowning, Snake Bite, Anaphylaxis, Hypoglycaemia, Febrile Seizure, Poisoning, Road Accident |

### Additional Tools
- **Compare** — side-by-side comparison of up to 5 hospitals
- **Resources** — emergency hotlines, patient rights, NGO support, financial schemes

---

## Data

All hospital entries are individually verified against:
- MOH Malaysia official hospital directory
- MSQH (Malaysian Society for Quality in Health) accreditation list
- Official hospital websites and contact pages
- Google Maps / Waze for address verification

Data coverage: bed counts, ICU/NICU/OT counts, specialty availability, transfer pathways, specialist rankings, room rates, insurance panels, accreditations, robotics/technology, and visiting hours.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router v6 (HashRouter) |
| Deployment | GitHub Pages (via `deploy.yml` workflow) |
| Data | Static ES module JS files (`src/data/hospitals/*.js`) |

No backend, no database — fully static. Hospital data lives in `src/data/hospitals/<state>.js` (one file per state), combined in `src/data/index.js`.

---

## Development

```bash
npm install
npm run dev       # dev server at localhost:5173
npm run build     # production build to dist/
```

GitHub Pages deployment triggers automatically on push to `main` via `.github/workflows/deploy.yml`.

---

## Disclaimer

For personal reference only. Verify all clinical, specialist, and insurance details directly with the respective hospital or insurer before making any medical decisions. Not a substitute for professional medical advice.
