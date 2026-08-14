# Healthcare Intelligence MY

Malaysia's most comprehensive hospital intelligence platform — a React SPA covering **294 verified hospitals across 16 states and federal territories**, with specialty filters, emergency guides, insurance tools, a medical education library, and a healthy lifestyle hub.

🌐 **Live:** https://yifeng22100.github.io/hospital-intelligence-my/

---

## Features

### Hospital Directory
- **294 hospitals** — 155 public · 139 private — across all 16 Malaysian states and territories
- Filter by **state**, **specialty** (20 curated categories), and **sector** (public / private)
- Full-text search across hospital names, cities, and specialties
- Hospital cards with 4-tab detail modal: Overview · Specialties · Facilities · Intelligence
- FPP badge, MSQH/JCI accreditation badges, side-by-side comparison (up to 5)

### Intelligence Hub (7 topics)
| Topic | What it covers |
|---|---|
| 💡 Insider Tips | Healthcare navigation hacks (FPP, insurance pre-admission window, academic-hybrid pricing, transfer protocol) |
| 🏥 Hospital Tiers | Public referral pyramid: Klinik → District → State → Tertiary |
| 🎯 Specialist Directory | Which hospitals lead on cardiology, oncology, fertility, neurology, orthopaedics, and transplant services, with named centres of excellence and accreditations |
| ✈️ Medical Tourism Hub | JCI-accredited hospitals (pulled live from hospital data), MHTC entry/visa process, cost comparisons, language support by hospital |
| 📰 What's New | Manually-curated, dated log of notable hospital/insurer/regulatory changes (2024–2026) |
| 🔬 Clinical Trials | NMRR, ClinicalTrials.gov, top trial centres |
| 🌙 Night Cover | Who is on duty overnight by hospital type |

Panel lists and LOG claims guidance live in **Tools → Panel Lookup**; procedure cost comparisons live in **Tools → Cost Reference**; doctor/qualification verification is covered in the About page FAQ (points to the MMC registry at mmc.gov.my) — see below.

### Insurance Hub
- Healthcare access matrix: Citizens · PRs · Foreigners
- Why insurance matters — public system gap analysis
- Choosing the right policy type
- **Premium Calculator** — interactive estimate by age, gender, smoker, health status, and annual limit
- Takaful vs Conventional comparison
- Insurance terms decoder (20 glossary entries)

### Knowledge Hub (17 topics, in 4 groups)

Navigation redesigned as a grouped sidebar (matching the Lifestyle Hub pattern) rather than a single wrapping tab bar, since the topic count had grown large enough to need clearer structure.

**Emergencies & Getting Care**
| Topic | What it covers |
|---|---|
| 🚑 A&E Triage Guide | Malaysian Triage Scale (5-level, 2026 rollout), 999 vs A&E vs clinic decision ladder, common emergency scenarios, public vs private A&E costs |
| 🗺️ Patient Journey Guides | Step-by-step pathways for 5 common situations: suspected diabetes, child with HFMD, colonoscopy, health screening, newly pregnant |
| 📅 Appointment Booking Guide | MySejahtera & MyHEALTH explained, private hospital group booking apps (KPJ Cares, MyHealth360, and others), typical wait times |
| 🏪 Pharmacy & Vaccination Locator | 24-hour pharmacy chains, hospital pharmacies serving walk-ins, where vaccination is actually available (with a legal note on pharmacist-administered vaccination) |

**Understanding Your Care**
| Topic | What it covers |
|---|---|
| 📖 Medical Glossary | Plain-English medical terms + hospital abbreviations decoded (merged into one section) |
| 💊 Common Drugs | 20 medications with Mandarin names, pinyin, dosing, emergency use flags |
| 🔬 Lab Values | Blood test reference ranges (HbA1c, cholesterol, kidney, liver, CBC) |
| 📋 Reading Medical Reports | How to interpret blood tests, scans, diagnoses, and prescriptions |
| ⚠️ Drug Interaction Checker | ~18 commonly-flagged interaction categories (incl. TCM & OTC "ubat selsema" combos) with a two-drug search — not medical advice |

**Life Stage Care**
| Topic | What it covers |
|---|---|
| 🩺 Health Screening | Age-by-age screening guide |
| 🤰 Maternal Health | Antenatal visits, tests, postnatal care and delivery guide |
| 💉 Vaccination Guide | NIP schedule (all ages incl. pregnant women) · COVID-19 & Flu vaccines · Dengue & Tropical Diseases (Qdenga, HFMD/EV71, JE, Typhoid) |
| 👶 Children's Healthcare | Milestones, common illnesses, nutrition, emergency decision tree |
| 👴 Elderly & OKU Care | Screening, chronic disease management, falls prevention, cognitive health |

**Ongoing & Chronic Care**
| Topic | What it covers |
|---|---|
| 📈 Chronic Disease Self-Monitoring | Home BP targets (Malaysian CPG), glucometer targets and testing frequency, peak flow meter zones for asthma |
| 🏡 Post-Discharge Care | Wound care & red-flag symptoms, medication management, MC/hospitalisation leave entitlements, home care providers |
| 🧠 Mental Health Resources | Conditions, Malaysian support services, crisis hotlines |

### Lifestyle Hub (9 sections)
| Section | What it covers |
|---|---|
| 🥗 Healthy Eating | Malaysian food pyramid, hawker stall smart swaps, hidden sugar/sodium risks |
| 🍽️ Diet Therapy by Condition | Diabetic, renal, low-sodium, and GERD diets, with Malaysian food swaps and hawker-stall tips |
| 🏃 Exercise & Activity | WHO guidelines by age, popular Malaysian activities, heat exercise safety |
| 😴 Sleep Health | Sleep needs by age, Malaysian sleep disruptors, sleep hygiene checklist |
| 🩺 Chronic Disease Prevention | Diabetes, hypertension, obesity, CVD — stats, risk factors, prevention steps |
| 🦟 Dengue Prevention | 10-step home guide, Qdenga vaccine info, warning signs, when to go to A&E |
| 🚭 Quit Smoking & Vaping | Vaping risks, JomQuit MOH quitline, NRT/Champix/Zyban comparison |
| 🧘 Stress & Mental Wellness | Malaysian mental health stats, evidence-based techniques, hotlines |
| ⚖️ Weight Management | Asian BMI thresholds, sustainable loss guide, common myths debunked |

### Tools
- **Cost Estimator** — procedure cost lookup by specialty with public/private comparison
- **Panel Lookup** — search any private hospital to see which of 13 insurers cover it; search insurers to see their panel, GL hotline (verified 2026), and TPA details
- **Insurer Comparison** — side-by-side table of all 13 insurers: annual limit ranges, room & board tiers, "as charged" status, waiting periods, deductibles, and GL hotlines, plus current Bank Negara Malaysia co-payment/premium-cap regulatory context
- **Premium Calculator** — interactive insurance premium estimate

### Resources
- Emergency contacts, patient rights, NGO support, financial assistance schemes
- Second opinion guide — when to seek one, your legal right to your medical records (Act 586, MMC Guideline 002/2006), named centres in Malaysia and internationally, document checklist, and insurance coverage

### Platform-wide

- **Site-wide search** (search icon or Ctrl/Cmd+K) — indexes every Hub topic and section plus all 295 hospitals; hospital results deep-link into Find Care with the query pre-filled
- **Print-friendly guides** — a "Print this guide" button on checklist-heavy pages (A&E Triage Guide, Post-Discharge Care, Second Opinion) hides navigation and preserves colour-coded content for a clean printout
- **"Last verified" notes** on fact-heavy sections (insurer hotlines, vaccine info, medical tourism stats, the changelog) so readers can judge freshness at a glance
- **Route-level code-splitting** — each page loads as its own chunk instead of one large bundle
- **Accessibility basics** — a skip-to-content link, ARIA labels on icon-only controls, and dialog semantics on modals
- **Consistent sidebar navigation** — every multi-topic Hub (Intelligence, Insurance, Knowledge, Lifestyle, Tools, Resources) uses the same frozen sidebar pattern: it stays pinned in view while you scroll through content, capped to the viewport height with its own internal scroll so it never runs off-screen regardless of how many topics a Hub has

---

## Data

All hospital entries are individually verified against:
- MOH Malaysia official hospital directory
- MSQH (Malaysian Society for Quality in Health) accreditation list
- Official hospital websites and contact pages
- Google Maps / Waze for address verification

Data coverage: bed counts, ICU/NICU/OT counts, specialty availability, transfer pathways, specialist rankings, room rates, insurance panels, accreditations, robotics/technology, and contact details.

Insurance panel data sourced from official insurer websites and TPA announcements (2024–2026). GL hotlines verified against AIA, Prudential, Great Eastern, Allianz (ACS), Tokio Marine (MiCare), Zurich (MiCare from Apr 2025), Sun Life (MediExpress), Etiqa, Generali (formerly AXA Affin — TPA switched from IHP to MiCare, effective Jan 1 2026), MSIG, Tune Protect (MiCare), Bupa (IHP from Jan 2025), Cigna.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 |
| Routing | React Router v6 (HashRouter) |
| Deployment | GitHub Pages via official `actions/deploy-pages@v4` |
| Data | Static ES module JS files (`src/data/`) |

No backend, no database — fully static. Hospital data lives in `src/data/hospitals/<state>.js`, combined in `src/data/index.js`.

---

## Development

```bash
npm install
npm run dev       # dev server at localhost:5173
npm run build     # production build to dist/
```

GitHub Pages deployment triggers automatically on push to `main` via `.github/workflows/deploy.yml`.

**GitHub Pages settings:** Go to repo **Settings → Pages → Source** and set to **GitHub Actions** (not a branch).

---

## Automated content refresh

`.github/workflows/auto-update-content.yml` runs Claude Code on a schedule (monthly, 1st of the month, or on-demand via **Actions → Auto-Update Site Content → Run workflow**) to re-verify time-sensitive facts — insurer hotlines/panels, procedure costs, vaccine/health guidance, and a rotating slice of the hospital directory — and correct anything that's drifted.

**Setup required:** add a repository secret named `ANTHROPIC_API_KEY` (**Settings → Secrets and variables → Actions → New repository secret**) with a valid Anthropic API key. The workflow does nothing (and costs nothing) until this is set. Running it accrues normal Anthropic API usage costs each time it fires.

**Safety policy:** changes are made on a dated branch (`auto-update/YYYY-MM-DD`), then `npm run build` runs as a gate. **Only if the build succeeds** are the changes pushed directly to `main` (which triggers `deploy.yml`, so the refresh goes live in the same run) — a failed build is never merged; instead it's pushed to the dated branch for manual review and a GitHub issue is opened linking to it. There is no human review step before a successful build reaches the live site.

Changes push directly to `main` rather than via a pull request because this repo's default **"Allow GitHub Actions to create and approve pull requests"** setting (Settings → Actions → General → Workflow permissions) is off, which blocks Actions from calling `gh pr create` — a separate, repo-level policy that a workflow's own `permissions:` block can't override. If you'd prefer a PR-based audit trail (with or without requiring manual review), enable that setting and swap the "Commit and push directly to main" step back to `gh pr create` + `gh pr merge` — see the comment above that step in the workflow file for the exact swap.

**If a run fails**, a GitHub issue is opened automatically — whether Claude's own step failed (most commonly an Anthropic API key/billing problem), the build failed after Claude made changes, or the final push to `main` failed. Failures are never silent.

**Running both the Action and the local script regularly is intentional and safe, but not a true no-op if they ever overlap.** Each only commits when it finds real changes, so most of the time an overlapping run just finds nothing new. But if both happen to find changes in the same window, whichever pushes second gets rejected (`main` moved from under it) — both sides retry automatically (re-fetch, rebase onto the new tip, retry, up to 5 attempts with backoff), which resolves a same-time race cleanly in almost all cases. If retries are exhausted (a real conflict, or a very unlucky sustained race), the run fails loudly instead of silently: its changes are pushed to its dated branch and a GitHub issue is opened pointing to it, same as any other failure.

**⚠️ The GitHub Action alone does not protect against running out of Anthropic API credits** — it bills against `ANTHROPIC_API_KEY`, a pay-per-use API key, and stops if that account runs out of balance. Enabling auto-reload or a low-balance alert at [console.anthropic.com/settings/billing](https://console.anthropic.com/settings/billing) is the direct fix. The local script below is a genuinely separate fallback, not just a copy — see why below.

### Running it locally

`scripts/auto-update.sh` is the same pass, runnable on demand from your own machine. Both the workflow and this script read the same prompt from `scripts/auto-update-prompt.txt`, so they never drift apart — but they authenticate differently **on purpose**:

| | GitHub Action | Local script |
|---|---|---|
| Auth | `ANTHROPIC_API_KEY` (pay-per-use API credit) | Your `claude auth login` subscription (Pro/Max/Team/Enterprise) |
| Billing pool | Anthropic Console API balance | Your Claude subscription's included usage |
| Runs | Monthly schedule, or manual dispatch | Whenever you run it |

Because these draw from **completely separate pools**, the local script keeps working even if the API key's account runs dry, and vice versa — this is the actual fallback for the credit-exhaustion worry, not just a copy of the same mechanism running somewhere else.

Setup: run `claude auth login` once on your machine (uses your existing Claude subscription, not an API key). The script checks for this and tells you clearly if it's missing. It also explicitly `unset`s `ANTHROPIC_API_KEY` before running, even if one is set in your shell — Claude Code always prefers an API key over subscription login when both are present, so this guarantees the local run actually bills against your subscription rather than silently falling back to a key you forgot was exported.

```bash
claude auth login              # one-time setup, if you haven't already
npm run auto-update            # research, edit, build — then stops for you to review the diff
npm run auto-update -- --push  # ...then also commit and push straight to main, same as the GitHub Action
```

The script refuses to run over an uncommitted working tree, works on a fresh dated branch so it can't be confused with your own in-progress edits, and (without `--push`) leaves the result for you to review rather than pushing automatically — a local run is attended, so it defaults to more caution than the unattended GitHub Action does.

---

## Disclaimer

For personal reference only. Verify all clinical, specialist, and insurance details directly with the respective hospital or insurer before making any medical decisions. Not a substitute for professional medical advice.
