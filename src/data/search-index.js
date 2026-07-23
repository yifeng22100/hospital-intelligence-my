// Hand-maintained index of site sections for the global search modal.
// Mirrors each page's internal TOPICS array. Since pages manage their own
// sub-tab state (not URL-addressable), results link to the page itself —
// the label tells the user which sidebar/tab item to look for once there.

export const SEARCH_INDEX = [
  // Knowledge Hub
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '🚑', label: 'A&E Triage Guide', desc: 'When to call 999, go to A&E, or see a clinic — triage system & costs explained' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '🗺️', label: 'Patient Journey Guides', desc: 'Step-by-step: what to do first for common health situations' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '📅', label: 'Appointment Booking Guide', desc: 'MySejahtera, government clinics, and private hospital apps explained' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '🏪', label: 'Pharmacy & Vaccination Locator', desc: '24-hour pharmacies, hospital pharmacies & where to get vaccinated' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '📖', label: 'Medical Glossary', desc: 'Plain-English medical terms and hospital abbreviations decoded' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '💊', label: 'Common Drugs', desc: 'Common medications — Mandarin names, what they do, where to get them' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '🔬', label: 'Lab Values', desc: 'What your blood test results mean — normal ranges explained' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '📋', label: 'Reading Medical Reports', desc: 'Understand your lab results, scans, diagnoses & prescriptions' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '⚠️', label: 'Drug Interaction Checker', desc: 'Common medication combinations to be aware of — not medical advice' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '🩺', label: 'Health Screening', desc: 'What to screen for, when, and where — age-by-age guide' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '🤰', label: 'Maternal Health', desc: 'Antenatal visits, tests, postnatal care & delivery guide' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '💉', label: 'Vaccination Guide', desc: 'NIP schedule, COVID-19 & Flu, Dengue & Tropical Diseases' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '👶', label: "Children's Healthcare", desc: 'Growth, milestones, common illnesses & when to seek help' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '👴', label: 'Elderly & OKU Care', desc: 'Healthcare, mobility, chronic disease management & support' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '📈', label: 'Chronic Disease Self-Monitoring', desc: 'Know your numbers — home BP, glucometer, and peak flow targets' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '🏡', label: 'Post-Discharge Care', desc: 'Wound care, red-flag symptoms, MC entitlement & home care services' },
  { path: '/knowledge', hub: 'Knowledge Hub', icon: '🧠', label: 'Mental Health Resources', desc: 'Mental wellness, counselling services & crisis support' },

  // Lifestyle Hub
  { path: '/lifestyle', hub: 'Lifestyle Hub', icon: '🥗', label: 'Healthy Eating', desc: 'Malaysian diet guide — eat well without giving up your favourites' },
  { path: '/lifestyle', hub: 'Lifestyle Hub', icon: '🍽️', label: 'Diet Therapy by Condition', desc: 'Diabetic, renal, low-sodium, and GERD diets — with Malaysian food swaps' },
  { path: '/lifestyle', hub: 'Lifestyle Hub', icon: '🏃', label: 'Exercise & Activity', desc: 'How much movement you actually need and how to get started' },
  { path: '/lifestyle', hub: 'Lifestyle Hub', icon: '😴', label: 'Sleep Health', desc: 'Why sleep is medicine — and what disrupts it in Malaysian life' },
  { path: '/lifestyle', hub: 'Lifestyle Hub', icon: '🩺', label: 'Chronic Disease Prevention', desc: 'Diabetes, hypertension, and obesity — stop them before they start' },
  { path: '/lifestyle', hub: 'Lifestyle Hub', icon: '🦟', label: 'Dengue Prevention', desc: 'Practical steps to reduce dengue risk at home and at work, Qdenga vaccine' },
  { path: '/lifestyle', hub: 'Lifestyle Hub', icon: '🚭', label: 'Quit Smoking & Vaping', desc: 'Why vaping is not safe — and how to quit effectively, JomQuit' },
  { path: '/lifestyle', hub: 'Lifestyle Hub', icon: '🧘', label: 'Stress & Mental Wellness', desc: 'Managing stress in Malaysian working and family life' },
  { path: '/lifestyle', hub: 'Lifestyle Hub', icon: '⚖️', label: 'Weight Management', desc: 'Sustainable weight management without crash diets' },

  // Intelligence Hub
  { path: '/intelligence', hub: 'Intelligence Hub', icon: '💡', label: 'Insider Tips', desc: "12 things most patients don't know — FPP, insurance pre-admission window" },
  { path: '/intelligence', hub: 'Intelligence Hub', icon: '🏥', label: 'Hospital Tiers', desc: 'Public referral system explained: Klinik → District → State → Tertiary' },
  { path: '/intelligence', hub: 'Intelligence Hub', icon: '🎯', label: 'Specialist Directory', desc: 'Which hospitals are known for which specialty — cardiology, oncology, fertility' },
  { path: '/intelligence', hub: 'Intelligence Hub', icon: '✈️', label: 'Medical Tourism Hub', desc: 'For international patients: JCI hospitals, visa process, cost comparisons' },
  { path: '/intelligence', hub: 'Intelligence Hub', icon: '📰', label: "What's New", desc: 'Dated log of notable hospital, insurer & regulatory changes' },
  { path: '/intelligence', hub: 'Intelligence Hub', icon: '🔬', label: 'Clinical Trials', desc: 'Access to experimental treatments — NMRR, ClinicalTrials.gov' },
  { path: '/intelligence', hub: 'Intelligence Hub', icon: '🌙', label: 'Night Cover', desc: 'Overnight care by hospital type' },

  // Resources
  { path: '/resources', hub: 'Resources', icon: '🚨', label: 'Emergency Contacts', desc: 'Hotlines, ambulances, and when to call 999' },
  { path: '/resources', hub: 'Resources', icon: '⚕️', label: 'Emergency Events', desc: 'Step-by-step action guides for each emergency, BE-FAST stroke signs' },
  { path: '/resources', hub: 'Resources', icon: '⚖️', label: 'Patient Rights', desc: 'Your rights, complaints, legal aid, and your right to medical records' },
  { path: '/resources', hub: 'Resources', icon: '🤝', label: 'Support Orgs', desc: 'NGOs and patient support organisations' },
  { path: '/resources', hub: 'Resources', icon: '👨‍⚕️', label: 'Doctor Check', desc: 'Verify a doctor\'s qualifications & spot red flags — MMC registry' },
  { path: '/resources', hub: 'Resources', icon: '🔍', label: 'Second Opinion', desc: 'When, how, and where to get a second medical opinion, document checklist' },
  { path: '/resources', hub: 'Resources', icon: '💳', label: 'Financial Aid', desc: 'Government schemes and welfare assistance — EPF, SOCSO, MySalam, Zakat' },
  { path: '/resources', hub: 'Resources', icon: '📱', label: 'MySejahtera Guide', desc: 'Full install-to-booking walkthrough for public healthcare' },

  // Insurance Hub
  { path: '/insurance', hub: 'Insurance Hub', icon: '🆔', label: 'Healthcare Access', desc: 'Citizen vs PR vs Foreigner — who gets what' },
  { path: '/insurance', hub: 'Insurance Hub', icon: '🛡️', label: 'Why Insurance Matters', desc: 'Public system gaps and out-of-pocket risks' },
  { path: '/insurance', hub: 'Insurance Hub', icon: '🎯', label: 'Choosing for Your Case', desc: 'Match insurance type to your needs' },
  { path: '/insurance', hub: 'Insurance Hub', icon: '📊', label: 'Premium Calculation', desc: 'How premiums are calculated — formula explained, interactive calculator' },
  { path: '/insurance', hub: 'Insurance Hub', icon: '⚖️', label: 'Takaful vs Conventional', desc: 'Islamic vs conventional products compared' },
  { path: '/insurance', hub: 'Insurance Hub', icon: '📖', label: 'Insurance Terms', desc: 'Insurance jargon and abbreviations decoded' },

  // Tools
  { path: '/tools', hub: 'Tools', icon: '💰', label: 'Cost Reference', desc: 'Procedure costs across public, FPP and private' },
  { path: '/tools', hub: 'Tools', icon: '🧮', label: 'Calculators', desc: 'BMI, LOG room check, procedure costs & FPP savings' },
  { path: '/tools', hub: 'Tools', icon: '🏦', label: 'Panel Lookup', desc: 'Find which insurers panel your hospital — and what LOG limits apply' },
  { path: '/tools', hub: 'Tools', icon: '📊', label: 'Insurer Comparison', desc: 'Side-by-side view of annual limits, room tiers, waiting periods & hotlines' },

  // Other pages
  { path: '/find-care', hub: 'Find Care', icon: '🏥', label: 'Hospital Directory', desc: 'Search and filter all 295 Malaysian hospitals by state, specialty, sector' },
  { path: '/compare', hub: 'Compare', icon: '⚖️', label: 'Compare Hospitals', desc: 'Side-by-side comparison of up to 5 hospitals' },
  { path: '/about', hub: 'About', icon: 'ℹ️', label: 'About This Platform', desc: 'Data sources, FAQ, roadmap, and disclaimer' },
]
