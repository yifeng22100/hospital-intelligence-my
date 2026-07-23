import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { GLOSSARY } from '../data/glossary'
import { DRUGS, DRUG_CATEGORIES } from '../data/drugs'
import LastVerified from '../components/LastVerified'
import PrintButton from '../components/PrintButton'

const TOPICS = [
  { id: 'ae-triage',         icon: '🚑', label: 'A&E Triage Guide',              desc: 'When to call 999, go to A&E, or see a clinic — triage system & costs explained' },
  { id: 'journeys',          icon: '🗺️', label: 'Patient Journey Guides',        desc: 'Step-by-step: what to do first for common health situations' },
  { id: 'booking',           icon: '📅', label: 'Appointment Booking Guide',     desc: 'MySejahtera, government clinics, and private hospital apps explained' },
  { id: 'pharmacy-locator',  icon: '🏪', label: 'Pharmacy & Vaccination Locator', desc: '24-hour pharmacies, hospital pharmacies & where to get vaccinated' },
  { id: 'glossary',          icon: '📖', label: 'Medical Glossary',              desc: 'Plain-English medical terms and hospital abbreviations decoded' },
  { id: 'drugs',             icon: '💊', label: 'Common Drugs',                  desc: 'Common medications — Mandarin names, what they do, where to get them' },
  { id: 'lab-values',        icon: '🔬', label: 'Lab Values',                   desc: 'What your blood test results mean — normal ranges explained' },
  { id: 'screening',         icon: '🩺', label: 'Health Screening',             desc: 'What to screen for, when, and where — age-by-age guide' },
  { id: 'maternal',          icon: '🤰', label: 'Maternal Health',              desc: 'Antenatal visits, tests, postnatal care & delivery guide' },
  { id: 'vaccination',       icon: '💉', label: 'Vaccination Guide',            desc: 'Complete immunisation schedule for all ages' },
  { id: 'children',          icon: '👶', label: 'Children\'s Healthcare',       desc: 'Growth, milestones, common illnesses & when to seek help' },
  { id: 'elderly',           icon: '👴', label: 'Elderly & OKU Care',           desc: 'Healthcare, mobility, chronic disease management & support' },
  { id: 'mental-health',     icon: '🧠', label: 'Mental Health Resources',      desc: 'Mental wellness, counselling services & crisis support' },
  { id: 'medical-reports',   icon: '📋', label: 'Reading Medical Reports',      desc: 'Understand your lab results, scans, diagnoses & prescriptions' },
  { id: 'post-discharge',    icon: '🏡', label: 'Post-Discharge Care',          desc: 'Wound care, red-flag symptoms, MC entitlement & home care services' },
  { id: 'drug-interactions', icon: '⚠️', label: 'Drug Interaction Checker',     desc: 'Common medication combinations to be aware of — not medical advice' },
  { id: 'self-monitoring',   icon: '📈', label: 'Chronic Disease Self-Monitoring', desc: 'Know your numbers — home BP, glucometer, and peak flow targets' },
]

const TOPIC_GROUPS = [
  { label: 'Emergencies & Getting Care', ids: ['ae-triage', 'journeys', 'booking', 'pharmacy-locator'] },
  { label: 'Understanding Your Care', ids: ['glossary', 'drugs', 'lab-values', 'medical-reports', 'drug-interactions'] },
  { label: 'Life Stage Care', ids: ['screening', 'maternal', 'vaccination', 'children', 'elderly'] },
  { label: 'Ongoing & Chronic Care', ids: ['self-monitoring', 'post-discharge', 'mental-health'] },
]

const LAB_VALUES = [
  {
    id: 'hba1c',
    name: 'HbA1c (Glycated Haemoglobin)',
    category: 'diabetes',
    categoryLabel: 'Diabetes',
    unit: '%',
    ranges: [
      { label: 'Normal', range: '< 5.7%', color: '#16a34a', note: 'No diabetes risk' },
      { label: 'Pre-diabetes', range: '5.7 – 6.4%', color: '#d97706', note: 'At-risk — lifestyle changes recommended' },
      { label: 'Diabetes', range: '≥ 6.5%', color: '#dc2626', note: 'Diabetic — requires treatment' },
      { label: 'Well-controlled (diabetic)', range: '< 7.0%', color: '#0891b2', note: 'Target for most diabetics on treatment' },
    ],
    what: 'Measures average blood sugar over the past 2–3 months. More accurate than a single fasting glucose reading. Used to diagnose diabetes and monitor treatment effectiveness.',
    tip: 'If your HbA1c is 6.5%+, see a doctor for a formal diabetes assessment. Do not fast before this test — it measures your average, not your current level.',
  },
  {
    id: 'fbs',
    name: 'Fasting Blood Sugar (FBS / FPG)',
    category: 'diabetes',
    categoryLabel: 'Diabetes',
    unit: 'mmol/L',
    ranges: [
      { label: 'Normal', range: '< 5.6 mmol/L', color: '#16a34a', note: 'Normal fasting glucose' },
      { label: 'Pre-diabetes (IFG)', range: '5.6 – 6.9 mmol/L', color: '#d97706', note: 'Impaired fasting glucose' },
      { label: 'Diabetes', range: '≥ 7.0 mmol/L', color: '#dc2626', note: 'Meets criteria for diabetes (confirm with repeat test)' },
    ],
    what: 'Blood glucose measured after at least 8 hours of fasting. Standard test for diabetes screening. Malaysian screening recommended from age 30 (or earlier with risk factors).',
    tip: 'Fast for 8–10 hours before this test (water only). If result is ≥ 7.0 mmol/L, a second test on a different day is needed to confirm diabetes.',
  },
  {
    id: 'cholesterol',
    name: 'Total Cholesterol',
    category: 'cardiac',
    categoryLabel: 'Cardiac Risk',
    unit: 'mmol/L',
    ranges: [
      { label: 'Desirable', range: '< 5.2 mmol/L', color: '#16a34a', note: 'Low cardiovascular risk' },
      { label: 'Borderline high', range: '5.2 – 6.1 mmol/L', color: '#d97706', note: 'Moderate risk — lifestyle review' },
      { label: 'High', range: '≥ 6.2 mmol/L', color: '#dc2626', note: 'High risk — see a doctor' },
    ],
    what: 'Measures all cholesterol in the blood. Must be interpreted together with LDL, HDL, and triglycerides. Total cholesterol alone is less informative than the full lipid profile.',
    tip: 'Fast for 9–12 hours before a lipid panel. Aim for LDL < 2.6 mmol/L if you have diabetes or heart disease, or < 3.4 mmol/L if you are healthy.',
  },
  {
    id: 'ldl',
    name: 'LDL Cholesterol ("Bad")',
    category: 'cardiac',
    categoryLabel: 'Cardiac Risk',
    unit: 'mmol/L',
    ranges: [
      { label: 'Optimal', range: '< 2.6 mmol/L', color: '#16a34a', note: 'Optimal — especially if high-risk' },
      { label: 'Near optimal', range: '2.6 – 3.3 mmol/L', color: '#0891b2', note: 'Near optimal' },
      { label: 'Borderline high', range: '3.4 – 4.0 mmol/L', color: '#d97706', note: 'Borderline — lifestyle changes' },
      { label: 'High', range: '≥ 4.1 mmol/L', color: '#dc2626', note: 'High — medication may be needed' },
    ],
    what: 'LDL (low-density lipoprotein) carries cholesterol to arteries and can cause plaque buildup. Lower is better. The target LDL depends on your overall cardiovascular risk.',
    tip: 'If you have diabetes, heart disease, or have had a stroke, your doctor will likely target LDL < 1.8 mmol/L. Statins (e.g., atorvastatin) are commonly prescribed to lower LDL.',
  },
  {
    id: 'hdl',
    name: 'HDL Cholesterol ("Good")',
    category: 'cardiac',
    categoryLabel: 'Cardiac Risk',
    unit: 'mmol/L',
    ranges: [
      { label: 'Low (bad)', range: '< 1.0 mmol/L (men) / < 1.3 (women)', color: '#dc2626', note: 'Low HDL increases cardiac risk' },
      { label: 'Acceptable', range: '1.0 – 1.5 mmol/L', color: '#d97706', note: 'Acceptable range' },
      { label: 'High (protective)', range: '≥ 1.55 mmol/L', color: '#16a34a', note: 'Protective against heart disease' },
    ],
    what: 'HDL (high-density lipoprotein) removes excess cholesterol from arteries. Higher levels are better and reduce heart disease risk. Exercise is the most effective way to raise HDL.',
    tip: 'Regular aerobic exercise (30 min/day, 5×/week) is one of the best ways to increase HDL. Smoking dramatically lowers HDL.',
  },
  {
    id: 'triglycerides',
    name: 'Triglycerides',
    category: 'cardiac',
    categoryLabel: 'Cardiac Risk',
    unit: 'mmol/L',
    ranges: [
      { label: 'Normal', range: '< 1.7 mmol/L', color: '#16a34a', note: 'Normal' },
      { label: 'Borderline high', range: '1.7 – 2.2 mmol/L', color: '#d97706', note: 'Reduce sugar and refined carbs' },
      { label: 'High', range: '2.3 – 5.6 mmol/L', color: '#ef4444', note: 'High — lifestyle and possible medication' },
      { label: 'Very high', range: '> 5.6 mmol/L', color: '#dc2626', note: 'Very high — risk of pancreatitis' },
    ],
    what: 'Triglycerides are fats in the blood. High levels are linked to heart disease and pancreatitis. Raised by excess sugar, refined carbs, alcohol, and obesity.',
    tip: 'Sugar and white rice/bread raise triglycerides more than dietary fat. Cutting sugar and alcohol for 2 weeks can reduce triglycerides significantly.',
  },
  {
    id: 'blood-pressure',
    name: 'Blood Pressure',
    category: 'cardiac',
    categoryLabel: 'Cardiac Risk',
    unit: 'mmHg',
    ranges: [
      { label: 'Optimal', range: '< 120 / < 80', color: '#16a34a', note: 'Ideal blood pressure' },
      { label: 'Normal', range: '120–129 / 80–84', color: '#0891b2', note: 'Normal range' },
      { label: 'High normal', range: '130–139 / 85–89', color: '#d97706', note: 'High normal — lifestyle attention' },
      { label: 'Stage 1 hypertension', range: '140–159 / 90–99', color: '#ef4444', note: 'Hypertension — doctor review' },
      { label: 'Stage 2 hypertension', range: '≥ 160 / ≥ 100', color: '#dc2626', note: 'High hypertension — treatment needed' },
    ],
    what: 'Systolic (top number) = pressure when heart beats. Diastolic (bottom number) = pressure between beats. Hypertension (≥ 140/90) is a major risk factor for stroke, heart attack, and kidney disease.',
    tip: 'Check BP after sitting quietly for 5 minutes. One high reading is not enough — measure on 3 different days. Reduce salt, alcohol, and stress. Amlodipine and losartan are common first-line drugs.',
  },
  {
    id: 'haemoglobin',
    name: 'Haemoglobin (Hb)',
    category: 'blood',
    categoryLabel: 'Blood Count',
    unit: 'g/dL',
    ranges: [
      { label: 'Normal (men)', range: '13.5 – 17.5 g/dL', color: '#16a34a', note: 'Normal for adult males' },
      { label: 'Normal (women)', range: '11.5 – 15.5 g/dL', color: '#16a34a', note: 'Normal for adult females' },
      { label: 'Mild anaemia', range: '10.0 – 11.4 g/dL', color: '#d97706', note: 'Mild anaemia' },
      { label: 'Moderate anaemia', range: '8.0 – 9.9 g/dL', color: '#ef4444', note: 'Moderate — investigate cause' },
      { label: 'Severe anaemia', range: '< 8.0 g/dL', color: '#dc2626', note: 'Severe — may need transfusion' },
    ],
    what: 'Haemoglobin carries oxygen in red blood cells. Low Hb = anaemia (causes fatigue, breathlessness, pallor). Common causes in Malaysia: iron deficiency, thalassaemia trait, B12/folate deficiency.',
    tip: 'If Hb is low, your doctor will check serum ferritin (iron stores), B12, folate, and peripheral blood film to find the cause before treating.',
  },
  {
    id: 'creatinine',
    name: 'Serum Creatinine / eGFR',
    category: 'kidney',
    categoryLabel: 'Kidney Function',
    unit: 'μmol/L / mL/min/1.73m²',
    ranges: [
      { label: 'Normal eGFR', range: '≥ 90 mL/min/1.73m²', color: '#16a34a', note: 'Normal kidney function' },
      { label: 'Mildly reduced', range: '60 – 89', color: '#0891b2', note: 'Mildly reduced — monitor' },
      { label: 'Moderately reduced', range: '30 – 59', color: '#d97706', note: 'CKD stage 3 — nephrology review' },
      { label: 'Severely reduced', range: '15 – 29', color: '#ef4444', note: 'CKD stage 4 — pre-dialysis planning' },
      { label: 'Kidney failure', range: '< 15', color: '#dc2626', note: 'CKD stage 5 — dialysis or transplant' },
    ],
    what: 'Creatinine is a waste product filtered by kidneys. High creatinine or low eGFR indicates reduced kidney function. eGFR (estimated glomerular filtration rate) is the key kidney number. Malaysia has a high burden of kidney disease due to poorly controlled diabetes and hypertension.',
    tip: 'Diabetics and hypertensives should have kidney function checked at least yearly. Stop NSAID painkillers (ibuprofen, diclofenac) if eGFR is low — they worsen kidney function.',
  },
  {
    id: 'alt',
    name: 'ALT (Alanine Aminotransferase)',
    category: 'liver',
    categoryLabel: 'Liver Function',
    unit: 'U/L',
    ranges: [
      { label: 'Normal', range: '7 – 40 U/L (men) / 7 – 35 U/L (women)', color: '#16a34a', note: 'Normal liver enzyme' },
      { label: 'Mildly elevated', range: '40 – 120 U/L', color: '#d97706', note: 'Mild elevation — investigate cause' },
      { label: 'Moderately elevated', range: '120 – 400 U/L', color: '#ef4444', note: 'Significant liver inflammation' },
      { label: 'Highly elevated', range: '> 400 U/L', color: '#dc2626', note: 'Severe liver injury — urgent review' },
    ],
    what: 'ALT is the most specific liver enzyme. Elevated ALT suggests liver cell damage from fatty liver (NAFLD), hepatitis, alcohol, or medication side effects. Common in Malaysia due to high prevalence of fatty liver (NAFLD) linked to obesity and diabetes.',
    tip: 'Fatty liver (NAFLD) is the most common cause of mildly elevated ALT in Malaysia. Weight loss of 5–10% body weight can normalise ALT in fatty liver patients.',
  },
  {
    id: 'tsh',
    name: 'TSH (Thyroid-Stimulating Hormone)',
    category: 'thyroid',
    categoryLabel: 'Thyroid',
    unit: 'mIU/L',
    ranges: [
      { label: 'Normal', range: '0.4 – 4.0 mIU/L', color: '#16a34a', note: 'Normal thyroid function' },
      { label: 'Low TSH (hyperthyroid)', range: '< 0.4 mIU/L', color: '#ef4444', note: 'Possible overactive thyroid (Graves disease, toxic goitre)' },
      { label: 'High TSH (hypothyroid)', range: '> 4.0 mIU/L', color: '#d97706', note: 'Possible underactive thyroid' },
      { label: 'Markedly high TSH', range: '> 10 mIU/L', color: '#dc2626', note: 'Definite hypothyroidism — treatment needed' },
    ],
    what: 'TSH is the best initial screening test for thyroid disorders. Hypothyroidism (high TSH) causes fatigue, weight gain, and cold intolerance. Hyperthyroidism (low TSH) causes weight loss, palpitations, and anxiety.',
    tip: 'Thyroid disorders are more common in women and the elderly. Many cases go undiagnosed. If you have unexplained fatigue, weight change, or hair loss, ask for a TSH test.',
  },
  {
    id: 'uric-acid',
    name: 'Uric Acid',
    category: 'metabolic',
    categoryLabel: 'Metabolic',
    unit: 'μmol/L',
    ranges: [
      { label: 'Normal (men)', range: '210 – 420 μmol/L', color: '#16a34a', note: 'Normal' },
      { label: 'Normal (women)', range: '150 – 350 μmol/L', color: '#16a34a', note: 'Normal' },
      { label: 'Hyperuricaemia', range: '> 420 (men) / > 360 (women)', color: '#d97706', note: 'Elevated — gout risk' },
    ],
    what: 'High uric acid causes gout (painful joint inflammation, typically the big toe). Also linked to kidney stones. Common in Malaysian men who eat high-purine foods (organ meats, anchovies, seafood) and drink alcohol.',
    tip: 'During a gout attack, do NOT test uric acid — it may be falsely low during an acute attack. Avoid organ meats, sardines, and alcohol. Stay well hydrated. Allopurinol is prescribed to lower chronic uric acid levels.',
  },
]

const LAB_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'diabetes', label: 'Diabetes' },
  { id: 'cardiac', label: 'Cardiac Risk' },
  { id: 'blood', label: 'Blood Count' },
  { id: 'kidney', label: 'Kidney' },
  { id: 'liver', label: 'Liver' },
  { id: 'thyroid', label: 'Thyroid' },
  { id: 'metabolic', label: 'Metabolic' },
]

const ABBREVIATIONS = [
  { abbr: 'A&E', full: 'Accident & Emergency', context: 'Location', desc: 'The emergency department / casualty ward. Open 24/7 for life-threatening emergencies.' },
  { abbr: 'ICU', full: 'Intensive Care Unit', context: 'Location', desc: 'Highest level of hospital care. Continuous monitoring and life support for critically ill patients.' },
  { abbr: 'HDU', full: 'High Dependency Unit', context: 'Location', desc: 'Step-down from ICU. Closer monitoring than a general ward but less intensive than ICU.' },
  { abbr: 'NICU', full: 'Neonatal Intensive Care Unit', context: 'Location', desc: 'ICU for premature or critically ill newborns.' },
  { abbr: 'CCU', full: 'Coronary Care Unit', context: 'Location', desc: 'Specialised ICU for heart attack and serious cardiac patients.' },
  { abbr: 'OT', full: 'Operation Theatre', context: 'Location', desc: 'Operating room where surgeries are performed.' },
  { abbr: 'OPD', full: 'Outpatient Department', context: 'Location', desc: 'Clinic area for non-admitted patients. Also called the outpatient clinic.' },
  { abbr: 'KK', full: 'Klinik Kesihatan', context: 'Location', desc: 'Government primary care clinic run by MOH. First point of contact for non-emergency healthcare.' },
  { abbr: 'MOH', full: 'Ministry of Health Malaysia', context: 'Organisation', desc: 'Kementerian Kesihatan Malaysia. Oversees all government hospitals, KKs, and public health programmes.' },
  { abbr: 'MSQH', full: 'Malaysian Society for Quality in Health', context: 'Accreditation', desc: 'Malaysian hospital accreditation body. Hospitals with MSQH accreditation meet national quality standards.' },
  { abbr: 'JCI', full: 'Joint Commission International', context: 'Accreditation', desc: 'International hospital accreditation — the gold standard globally. Very few Malaysian hospitals hold JCI.' },
  { abbr: 'MMC', full: 'Malaysian Medical Council', context: 'Organisation', desc: 'Registers all doctors practising in Malaysia. Verify any doctor\'s registration at mmc.gov.my.' },
  { abbr: 'FPP', full: 'Full Paying Patient', context: 'Scheme', desc: 'Scheme allowing patients to pay for private-standard care at government hospitals at lower rates than private hospitals.' },
  { abbr: 'BP', full: 'Blood Pressure', context: 'Vital Signs', desc: 'Measured in mmHg. Normal: < 120/80. Written as systolic/diastolic (e.g., 130/85).' },
  { abbr: 'PR', full: 'Pulse Rate', context: 'Vital Signs', desc: 'Heart rate in beats per minute (bpm). Normal resting: 60–100 bpm.' },
  { abbr: 'RR', full: 'Respiratory Rate', context: 'Vital Signs', desc: 'Breathing rate in breaths per minute. Normal adult: 12–20 breaths/min.' },
  { abbr: 'SpO2', full: 'Oxygen Saturation', context: 'Vital Signs', desc: 'Percentage of haemoglobin saturated with oxygen measured by pulse oximeter. Normal: 95–100%. Below 94% warrants attention.' },
  { abbr: 'GCS', full: 'Glasgow Coma Scale', context: 'Vital Signs', desc: 'Score (3–15) measuring consciousness. Full score = 15 (fully conscious). Below 8 = severe impairment.' },
  { abbr: 'BMI', full: 'Body Mass Index', context: 'Assessment', desc: 'Weight (kg) ÷ Height (m)². Asian cut-offs: Normal 18.5–22.9; Overweight ≥ 23; Obese ≥ 27.5.' },
  { abbr: 'FBS / FPG', full: 'Fasting Blood Sugar / Fasting Plasma Glucose', context: 'Lab Tests', desc: 'Blood glucose after 8+ hours fasting. Normal: < 5.6 mmol/L. ≥ 7.0 = diabetes.' },
  { abbr: 'RBS', full: 'Random Blood Sugar', context: 'Lab Tests', desc: 'Blood glucose at any time of day (no fasting). ≥ 11.1 mmol/L with symptoms = diabetes.' },
  { abbr: 'HbA1c', full: 'Glycated Haemoglobin', context: 'Lab Tests', desc: 'Average blood sugar over 2–3 months. Normal: < 5.7%. Diabetic: ≥ 6.5%. Target for treated diabetics: < 7.0%.' },
  { abbr: 'FBC / CBC', full: 'Full Blood Count / Complete Blood Count', context: 'Lab Tests', desc: 'Measures red cells (Hb, RBC), white cells (WBC, neutrophils), and platelets. Most common blood test requested.' },
  { abbr: 'LFT', full: 'Liver Function Test', context: 'Lab Tests', desc: 'Panel of liver enzymes (ALT, AST, ALP, GGT) + bilirubin and albumin. Assesses liver health.' },
  { abbr: 'RENAL / RFT', full: 'Renal Function Test', context: 'Lab Tests', desc: 'Creatinine, urea/BUN, electrolytes, and eGFR. Assesses kidney function.' },
  { abbr: 'ECG / EKG', full: 'Electrocardiogram', context: 'Tests', desc: 'Records electrical activity of the heart. Used to detect heart attacks, arrhythmias, and heart strain.' },
  { abbr: 'ECHO', full: 'Echocardiogram', context: 'Tests', desc: 'Ultrasound of the heart showing structure, valves, and function. Different from ECG — it\'s an imaging test.' },
  { abbr: 'CT', full: 'Computed Tomography (CT Scan)', context: 'Imaging', desc: 'X-ray-based 3D imaging. Fast and detailed. Used for brain (stroke), chest, abdomen. Involves radiation.' },
  { abbr: 'MRI', full: 'Magnetic Resonance Imaging', context: 'Imaging', desc: 'Detailed soft tissue imaging using magnetic fields — no radiation. Slower than CT. Best for brain, spine, joints.' },
  { abbr: 'PET-CT', full: 'Positron Emission Tomography + CT', context: 'Imaging', desc: 'Nuclear medicine scan combining metabolic activity (PET) with anatomy (CT). Used mainly for cancer staging.' },
  { abbr: 'Hx', full: 'History', context: 'Documentation', desc: 'Medical history taken from the patient. "PMHx" = past medical history. "FH" = family history.' },
  { abbr: 'Dx', full: 'Diagnosis', context: 'Documentation', desc: 'The medical conclusion about what condition a patient has.' },
  { abbr: 'Rx', full: 'Prescription / Treatment', context: 'Documentation', desc: 'Treatment plan or prescription. From Latin "recipe".' },
  { abbr: 'Ix', full: 'Investigations', context: 'Documentation', desc: 'Tests ordered by the doctor (blood tests, scans, biopsies).' },
  { abbr: 'OD', full: 'Once Daily (omni die)', context: 'Medication Dosing', desc: 'Take medication once a day. Usually morning unless otherwise stated.' },
  { abbr: 'BD', full: 'Twice Daily (bis die)', context: 'Medication Dosing', desc: 'Take medication twice a day, usually morning and evening.' },
  { abbr: 'TDS', full: 'Three Times Daily (ter die sumendum)', context: 'Medication Dosing', desc: 'Take medication three times a day, usually morning, afternoon, and night.' },
  { abbr: 'QID', full: 'Four Times Daily (quater in die)', context: 'Medication Dosing', desc: 'Take medication four times a day, evenly spaced.' },
  { abbr: 'PRN', full: 'As Required (pro re nata)', context: 'Medication Dosing', desc: 'Take only when needed (e.g., painkillers for pain). Do not take routinely if symptom-free.' },
  { abbr: 'SOS', full: 'If Necessary (si opus sit)', context: 'Medication Dosing', desc: 'Same as PRN — take only when needed. Common on Malaysian prescription labels.' },
  { abbr: 'AC', full: 'Before Meals (ante cibum)', context: 'Medication Dosing', desc: 'Take medication before eating.' },
  { abbr: 'PC', full: 'After Meals (post cibum)', context: 'Medication Dosing', desc: 'Take medication after eating. Common for medications that irritate the stomach.' },
  { abbr: 'STAT', full: 'Immediately', context: 'Medication Dosing', desc: 'Give or take immediately — used for urgent single doses in hospital.' },
  { abbr: 'NOK', full: 'Next of Kin', context: 'Admin', desc: 'The primary family contact for a patient. Hospital will contact this person for urgent decisions.' },
  { abbr: 'DNR / DNAR', full: 'Do Not Resuscitate / Do Not Attempt Resuscitation', context: 'Admin', desc: 'Advance directive indicating a patient does not want CPR attempted if their heart stops.' },
  { abbr: 'MOA', full: 'Medical Officer of Attendance', context: 'Admin', desc: 'The doctor responsible for a patient\'s care on the ward.' },
  { abbr: 'MO', full: 'Medical Officer', context: 'Roles', desc: 'A fully registered doctor (MBBS/MD qualified) not yet a specialist. The "houseman" is a junior MO in first year of practice.' },
  { abbr: 'HO / HA', full: 'House Officer / Houseman', context: 'Roles', desc: 'The most junior doctor — in their first year of post-graduate clinical training (internship).' },
  { abbr: 'MO', full: 'Medical Officer', context: 'Roles', desc: 'Doctor who has completed houseman training. Not yet a specialist.' },
  { abbr: 'Sp', full: 'Specialist', context: 'Roles', desc: 'A doctor who has completed specialist training (4–6+ years after MBBS) and holds a specialist qualification.' },
]

const ABBR_CONTEXTS = ['All', 'Location', 'Organisation', 'Accreditation', 'Scheme', 'Vital Signs', 'Assessment', 'Lab Tests', 'Tests', 'Imaging', 'Documentation', 'Medication Dosing', 'Admin', 'Roles']

export default function Knowledge() {
  const [active, setActive] = useState('ae-triage')
  const topic = TOPICS.find(t => t.id === active)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-8 px-5">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-brand text-[12px] font-semibold uppercase tracking-[0.12em] mb-1">Knowledge Hub</p>
          <h1 className="text-[28px] font-bold text-ink tracking-tight">Your medical reference library.</h1>
          <p className="text-ink-secondary text-[14px] mt-2 max-w-[560px]">
            Medical glossary, common drug names in English and Mandarin — everything you need to understand and navigate your healthcare.
          </p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 py-8">
        <div className="flex gap-8 flex-col lg:flex-row">

          {/* Sidebar */}
          <aside className="lg:w-[250px] flex-shrink-0">
            <div className="lg:sticky lg:top-20 space-y-4">
              {TOPIC_GROUPS.map(group => (
                <div key={group.label}>
                  <p className="px-3 text-[10px] font-bold uppercase tracking-wide text-ink-tertiary mb-1">{group.label}</p>
                  <div className="space-y-0.5">
                    {group.ids.map(id => {
                      const t = TOPICS.find(tp => tp.id === id)
                      if (!t) return null
                      return (
                        <button key={t.id} onClick={() => setActive(t.id)}
                          className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors ${
                            active === t.id
                              ? 'bg-brand text-white'
                              : 'text-ink-secondary hover:bg-surface-secondary hover:text-ink'
                          }`}>
                          <span className="text-[16px] mr-2">{t.icon}</span>
                          <span className="text-[13px] font-semibold">{t.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <div className="mb-6">
              <h2 className="text-[22px] font-bold text-ink mb-1">{topic.icon} {topic.label}</h2>
              <p className="text-ink-secondary text-[14px]">{topic.desc}</p>
            </div>

            {active === 'ae-triage'         && <AETriageSection />}
            {active === 'journeys'          && <PatientJourneysSection />}
            {active === 'booking'           && <BookingGuideSection />}
            {active === 'pharmacy-locator'  && <PharmacyLocatorSection />}
            {active === 'glossary'          && <GlossaryAndAbbreviationsSection />}
            {active === 'drugs'             && <DrugsSection />}
            {active === 'lab-values'        && <LabValuesSection />}
            {active === 'screening'         && <ScreeningSection />}
            {active === 'maternal'          && <MaternalSection />}
            {active === 'vaccination'       && <VaccinationSection />}
            {active === 'children'          && <ChildrenSection />}
            {active === 'elderly'           && <ElderlySection />}
            {active === 'mental-health'     && <MentalHealthSection />}
            {active === 'medical-reports'   && <MedicalReportSection />}
            {active === 'post-discharge'    && <PostDischargeSection />}
            {active === 'drug-interactions' && <DrugInteractionSection />}
            {active === 'self-monitoring'   && <SelfMonitoringSection />}
          </main>
        </div>
      </div>
    </div>
  )
}

/* ─── A&E Triage Guide ───────────────────────────────────────────── */

const TRIAGE_LEVELS = [
  { level: 'Level 1 — Resuscitation', color: '#dc2626', response: 'Immediate', meaning: 'Life-threatening — cardiac arrest, severe trauma, not breathing. Treated on arrival.' },
  { level: 'Level 2 — Emergency', color: '#ea580c', response: 'Within ~10 minutes', meaning: 'Could deteriorate rapidly — chest pain, stroke signs, severe breathing difficulty, major bleeding.' },
  { level: 'Level 3 — Urgent', color: '#d97706', response: 'Within ~30–60 minutes', meaning: 'Needs prompt care but stable for now — moderate injuries, persistent vomiting, high fever with lethargy.' },
  { level: 'Level 4 — Early Care', color: '#65a30d', response: 'Within ~1–2 hours', meaning: 'Minor injuries/illness — small wounds, minor sprains, mild infections.' },
  { level: 'Level 5 — Routine', color: '#0891b2', response: 'When capacity allows', meaning: 'Non-urgent — chronic issues, medication refills, minor complaints better suited to a clinic.' },
]

const AE_SCENARIOS = [
  { title: 'Chest pain / suspected heart attack', action: '999 — do NOT self-drive', color: '#dc2626', detail: 'Pressure, squeezing or fullness in the chest, radiating to arm/jaw/back, shortness of breath, cold sweat. Treat as an emergency and call 999 — paramedics can start ECG and treatment on the way. The "golden hour" (first 60 minutes) matters for limiting heart muscle damage; thrombolysis is most effective within 4.5 hours of onset. If a doctor has previously told you to and you are not allergic, chew (don\'t swallow) 300mg aspirin while waiting.' },
  { title: 'Stroke — use BE-FAST', action: '999 immediately', color: '#dc2626', detail: 'Balance difficulties, Eyesight changes, Face drooping, Arm weakness, Speech difficulty — Time to call 999. Malaysia\'s stroke campaigns use "BE-FAST" (Bahasa: PeRMATA). Note the exact time symptoms started — this determines eligibility for clot-busting treatment, ideally within 4.5 hours.' },
  { title: 'Severe allergic reaction (anaphylaxis)', action: '999 immediately', color: '#dc2626', detail: 'Swelling of face/throat, difficulty breathing, widespread hives, dizziness after a sting/food/drug exposure. Use an adrenaline auto-injector (EpiPen) if available while waiting for the ambulance.' },
  { title: 'High fever in an infant', action: 'A&E — don\'t wait for clinic hours', color: '#ea580c', detail: 'Any fever in an infant under 3 months old, or fever at any age with lethargy, rash, breathing difficulty, or refusal to feed, needs same-day A&E assessment.' },
  { title: 'Deep cuts / suspected fracture', action: 'A&E same-day', color: '#d97706', detail: 'Wounds that won\'t stop bleeding after firm pressure, gape open, or expose deeper tissue need stitches. Visible deformity or inability to bear weight suggests a fracture. Not urgent enough for 999 unless bleeding is uncontrolled or there is other major trauma.' },
  { title: 'Severe abdominal pain', action: 'A&E promptly', color: '#d97706', detail: 'Sudden-onset severe pain, pain with rigidity/guarding, or abdominal pain during pregnancy can signal appendicitis, ectopic pregnancy, or perforation — go to A&E rather than waiting it out.' },
]

function AETriageSection() {
  const [view, setView] = useState('triage')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        {[
          { v: 'triage', label: '🚦 Triage System' },
          { v: 'where',  label: '🗺️ Where to Go' },
          { v: 'scenarios', label: '⚡ Common Scenarios' },
          { v: 'costs',  label: '💰 A&E Costs' },
        ].map(({ v, label }) => (
          <button key={v} onClick={() => setView(v)}
            className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
              view === v ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
            }`}>{label}</button>
        ))}
        <div className="ml-auto"><PrintButton label="Print this guide" /></div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-[13px] text-red-800 leading-relaxed">
        <strong>In any life-threatening emergency, call 999 (MERS 999) immediately.</strong> It's free, dispatches the nearest ambulance/fire/police response, and connects you to trained emergency officers. Don't Google symptoms first — call.
      </div>

      {/* ── Triage System ── */}
      {view === 'triage' && (
        <div className="space-y-4">
          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px] text-ink-secondary leading-relaxed">
            <strong className="text-ink">📋 Malaysian Triage Scale (MTS):</strong> In 2026, MOH began rolling out a new 5-level triage scale, replacing the older 3-colour system (Red/Yellow/Green) many people still recognise. Every A&E uses a two-stage process — a quick first-glance "primary triage," then a detailed "secondary triage" with vital signs — to assign you a level. Your level determines how soon you're seen, not the order you arrived in.
          </div>
          <div className="space-y-2.5">
            {TRIAGE_LEVELS.map((t, i) => (
              <div key={i} className="border border-ink-quaternary rounded-xl p-3.5 flex items-start gap-3" style={{ borderLeft: `3px solid ${t.color}` }}>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="font-bold text-ink text-[13px]">{t.level}</p>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: `${t.color}15`, color: t.color }}>{t.response}</span>
                  </div>
                  <p className="text-ink-secondary text-[12px]">{t.meaning}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-ink-tertiary text-[11px]">Response-time bands above are indicative — MOH's 2026 rollout has not published exact per-level wait-time targets. Older Malaysian Triage Category (2011) bands were Red ≤5 min, Yellow ≤30 min, Green ≤90 min. Actual wait depends on ED load — a low triage level does not mean no wait.</p>
        </div>
      )}

      {/* ── Where to Go ── */}
      {view === 'where' && (
        <div className="space-y-3">
          {[
            { step: '1', title: 'Life-threatening', color: '#dc2626', detail: 'Chest pain, stroke signs, severe bleeding, unconsciousness, anaphylaxis, major trauma → call 999 or go to the nearest A&E (government or private) immediately, whichever is closer.' },
            { step: '2', title: 'Urgent, not immediately life-threatening', color: '#ea580c', detail: 'High fever with lethargy in an infant, deep laceration needing stitches, suspected fracture, severe abdominal pain → A&E. Private A&E is usually faster and less crowded but costs more; government A&E is free/near-free for citizens but can have longer waits at lower triage levels.' },
            { step: '3', title: 'Non-urgent, needs same-day care outside clinic hours', color: '#d97706', detail: '24-hour private clinics ("klinik 24 jam") — chains like Klinik Utama 24 Jam and Dr Prevents run dozens of branches across KL/Selangor. Klinik Kesihatan (government clinics) are typically open 8am–5pm weekdays only, closed weekends/public holidays.' },
            { step: '4', title: 'Routine', color: '#16a34a', detail: 'Minor cough/cold, follow-up visits, chronic medication refills → private GP (most open 8am–10pm daily) or Klinik Kesihatan during operating hours.' },
          ].map((s, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4 flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-[13px] font-bold" style={{ background: s.color }}>{s.step}</span>
              <div>
                <p className="font-bold text-ink text-[13px] mb-1">{s.title}</p>
                <p className="text-ink-secondary text-[12px] leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
          <div className="bg-surface-secondary rounded-2xl p-4 text-[12px] text-ink-secondary leading-relaxed">
            <strong className="text-ink">💡 Ambulance tip:</strong> 999 ambulance dispatch is free; private ambulance transfer typically costs from RM 250+ depending on distance and level of care. In rural areas with sparser 999 coverage, driving directly to the nearest hospital may sometimes be faster than waiting for dispatch — use judgement based on your location and the patient's condition.
          </div>
        </div>
      )}

      {/* ── Common Scenarios ── */}
      {view === 'scenarios' && (
        <div className="space-y-3">
          {AE_SCENARIOS.map((s, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4" style={{ borderLeft: `3px solid ${s.color}` }}>
              <div className="flex items-center justify-between gap-2 flex-wrap mb-1.5">
                <p className="font-bold text-ink text-[13px]">{s.title}</p>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${s.color}15`, color: s.color }}>{s.action}</span>
              </div>
              <p className="text-ink-secondary text-[12px] leading-relaxed">{s.detail}</p>
            </div>
          ))}
          <div className="bg-surface-secondary rounded-2xl p-4 text-[12px] text-ink-secondary leading-relaxed">
            This is a quick "what do I do right now" reference. For step-by-step recognise/do-now/do-not-do protocols covering these and more emergencies, see <Link to="/resources" className="text-brand font-semibold hover:underline">Resources → Emergency Events</Link>.
          </div>
        </div>
      )}

      {/* ── Costs ── */}
      {view === 'costs' && (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="border border-ink-quaternary rounded-2xl p-4">
              <p className="font-bold text-ink text-[14px] mb-2">🏛 Government hospital</p>
              <ul className="space-y-1.5">
                <li className="text-ink-secondary text-[12px] flex items-start gap-2"><span className="flex-shrink-0 text-brand">•</span>Malaysian citizens: RM 1 registration/outpatient fee — a rate held for roughly 45 years</li>
                <li className="text-ink-secondary text-[12px] flex items-start gap-2"><span className="flex-shrink-0 text-brand">•</span>Non-citizens/stateless persons: RM 40</li>
                <li className="text-ink-secondary text-[12px] flex items-start gap-2"><span className="flex-shrink-0 text-brand">•</span>Ward stays: RM 3–RM 120/day depending on class</li>
                <li className="text-ink-secondary text-[12px] flex items-start gap-2"><span className="flex-shrink-0 text-brand">•</span>Extra materials/implants/scans can add RM 50–RM 100</li>
              </ul>
            </div>
            <div className="border border-ink-quaternary rounded-2xl p-4">
              <p className="font-bold text-ink text-[14px] mb-2">🏥 Private hospital A&E</p>
              <ul className="space-y-1.5">
                <li className="text-ink-secondary text-[12px] flex items-start gap-2"><span className="flex-shrink-0 text-brand">•</span>Government-regulated medical officer consult fee: RM 30–RM 125 (private specialist consult capped at RM 35–RM 235 first visit)</li>
                <li className="text-ink-secondary text-[12px] flex items-start gap-2"><span className="flex-shrink-0 text-brand">•</span>Facility fees, triage fees, equipment/procedure fees and basic tests are <strong>not fee-capped</strong></li>
                <li className="text-ink-secondary text-[12px] flex items-start gap-2"><span className="flex-shrink-0 text-brand">•</span>Roughly 70% of a typical private hospital bill is made up of these unregulated charges — total A&E bills routinely exceed the consult fee alone by a wide margin</li>
                <li className="text-ink-secondary text-[12px] flex items-start gap-2"><span className="flex-shrink-0 text-brand">•</span>Private ambulance transfer: from RM 250+ (vs free 999)</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-[13px] text-amber-800 leading-relaxed">
            <strong>Ask for an itemised bill.</strong> Private A&E costs can escalate quickly once scans, procedures, and observation beds are added. If your condition allows, ask staff for a running cost estimate — especially if you're paying out of pocket or your insurance panel status is uncertain.
          </div>
          <LastVerified date="July 2026" />
        </div>
      )}
    </div>
  )
}

/* ─── Patient Journey Guides ─────────────────────────────────────── */

const PATIENT_JOURNEYS = {
  diabetes: {
    label: 'I think I have diabetes',
    icon: '🩸',
    intro: 'Excessive thirst, frequent urination, unexplained fatigue, blurred vision, slow-healing wounds, or unexplained weight loss — here\'s what to do.',
    steps: [
      { step: '1', title: 'See a GP or Klinik Kesihatan', color: '#0891b2', detail: 'Describe your symptoms. They\'ll order a fasting blood sugar (FBS) or HbA1c test — no specialist referral needed at this stage.' },
      { step: '2', title: 'Get tested', color: '#7c3aed', detail: 'Diabetes is diagnosed at FBS ≥7.0 mmol/L or HbA1c ≥6.5% (see the Lab Values topic for the full reference ranges). A borderline result is usually repeated on a separate day to confirm before diagnosis.' },
      { step: '3', title: 'Start primary-care management', color: '#16a34a', detail: 'Most Type 2 diabetes is managed at GP/Klinik Kesihatan level — diet and lifestyle changes plus first-line oral medication (usually metformin). You don\'t automatically need an endocrinologist.' },
      { step: '4', title: 'Specialist referral if needed', color: '#d97706', detail: 'Referred to an endocrinologist mainly if your sugar stays uncontrolled on oral medication, or complications develop.' },
      { step: '5', title: 'Ongoing monitoring', color: '#dc2626', detail: 'Periodic HbA1c checks, plus annual screening for retinopathy (eyes), nephropathy (kidneys), and neuropathy (nerves) — these are the complications diabetes causes silently over years.' },
    ],
  },
  hfmd: {
    label: 'My child has HFMD',
    icon: '✋',
    intro: 'Mouth ulcers, a rash or blisters on hands/feet (sometimes buttocks/knees), fever, and poor feeding — mostly in under-6s, and it spreads fast in childcare settings.',
    steps: [
      { step: '1', title: 'Recognise the signs', color: '#d97706', detail: 'Fever followed by mouth ulcers and a rash/blisters on hands, feet, and sometimes buttocks or knees. Usually mild and self-limiting over 7–10 days.' },
      { step: '2', title: 'See a GP or paediatrician', color: '#0891b2', detail: 'Routine cases can be managed with rest, fluids, and fever/pain control at home under a doctor\'s guidance.' },
      { step: '3', title: 'Watch for red flags → A&E', color: '#dc2626', detail: 'High persistent fever, lethargy or drowsiness, seizures, or refusal to drink (signs of dehydration or, rarely, EV71-strain neurological complications) need urgent hospital assessment — see the A&E Triage Guide.' },
      { step: '4', title: 'Keep your child home', color: '#7c3aed', detail: 'Common practice is to stay home until fever-free for 24 hours and blisters have dried/crusted — check with your child\'s school/childcare, as exact exclusion rules can vary by state health office.' },
    ],
  },
  colonoscopy: {
    label: 'I need a colonoscopy',
    icon: '🔬',
    intro: 'Recommended for screening from age 45–50, earlier with family history or red-flag symptoms (rectal bleeding, unexplained weight loss, change in bowel habit, anaemia).',
    steps: [
      { step: '1', title: 'Get referred or self-refer', color: '#0891b2', detail: 'A GP referral is often required for insurer/panel claims, but you can also book directly with a gastroenterologist or colorectal surgeon at a private hospital.' },
      { step: '2', title: 'Understand the cost', color: '#d97706', detail: 'Private colonoscopy in Malaysia typically runs RM 800–RM 3,000 depending on hospital and sedation; adding a polypectomy (polyp removal) adds RM 300–800 more. See Tools → Cost Reference for the full public/private breakdown.' },
      { step: '3', title: 'Prepare', color: '#7c3aed', detail: 'Bowel preparation (a special diet plus a prep solution) 1–2 days before the procedure — follow your hospital\'s instructions exactly, as inadequate prep is the most common reason for a repeat procedure.' },
      { step: '4', title: 'Day of procedure', color: '#16a34a', detail: 'Usually a day procedure under sedation with same-day discharge — you\'ll need someone to accompany you home, as you can\'t drive after sedation.' },
      { step: '5', title: 'Public sector option', color: '#dc2626', detail: 'Available at government hospitals too, generally at lower or no cost, but with a longer wait for non-urgent screening cases — ask your Klinik Kesihatan or hospital for current wait times.' },
    ],
  },
  screening: {
    label: 'I need a health screening',
    icon: '🩺',
    intro: 'Baseline screening is worth starting in your 20s–30s; adults 35+ are strongly encouraged to screen regularly.',
    steps: [
      { step: '1', title: 'Know your frequency', color: '#0891b2', detail: 'Healthy adults under 50: every 2 years. Age 50+: annually. Living with a chronic condition (diabetes, hypertension): every 6 months, or as your doctor advises.' },
      { step: '2', title: 'Pick a package that fits your age/risk', color: '#7c3aed', detail: 'Basic packages (bloods, urinalysis, BMI) run roughly RM 200–800 at private providers; comprehensive executive packages with imaging or a stress test can run RM 1,000–2,000+. See Tools → Cost Reference for the exact public/FPP/private breakdown.' },
      { step: '3', title: 'Public vs private', color: '#16a34a', detail: 'Government facilities offer core screening tests at low/no cost; private hospitals offer faster turnaround and broader packages (incl. imaging) for a fee.' },
      { step: '4', title: 'Follow up on results', color: '#d97706', detail: 'Book a follow-up consult to go through results with a doctor — don\'t just read the report. See "Reading Medical Reports" in this Knowledge Hub for how to interpret common findings.' },
    ],
  },
  pregnant: {
    label: 'I\'m pregnant, what now',
    icon: '🤰',
    intro: 'As soon as pregnancy is confirmed (clinic or a reliable home test), here\'s the first move.',
    steps: [
      { step: '1', title: 'Register at your Klinik Kesihatan (KK)', color: '#db2777', detail: 'Register at the KK assigned to your home address to get your free "Buku Pink" (Pink Book) — Malaysia\'s official antenatal record, needed for free mandatory tests regardless of where you eventually deliver.' },
      { step: '2', title: 'Decide: government, private, or shared care', color: '#0891b2', detail: 'KK antenatal care is free/low-cost but can involve longer waits. Private O&G antenatal packages run roughly RM 2,000–5,000+ for the full course (excluding delivery), or RM 200–400 per visit à la carte. Many Malaysians do "shared care" — KK for the Pink Book and free screening, private O&G for convenience.' },
      { step: '3', title: 'Attend your scheduled antenatal visits', color: '#7c3aed', detail: 'See the Maternal Health topic in this Knowledge Hub for the full antenatal visit and test schedule by trimester.' },
      { step: '4', title: 'Get your vaccinations', color: '#16a34a', detail: 'Flu vaccine (any trimester) and Tdap (week 27–36) are recommended in pregnancy — see the Vaccination Guide topic for the full pregnant-women schedule.' },
    ],
  },
}

function PatientJourneysSection() {
  const [active, setActive] = useState('diabetes')
  const journey = PATIENT_JOURNEYS[active]

  return (
    <div className="space-y-6">
      <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px] text-ink-secondary leading-relaxed">
        Having chest pain or think you're having a heart attack? Go straight to the <strong className="text-ink">A&E Triage Guide</strong> topic — don't wait to read a journey guide first.
      </div>

      <div className="flex flex-wrap gap-2">
        {Object.entries(PATIENT_JOURNEYS).map(([key, j]) => (
          <button key={key} onClick={() => setActive(key)}
            className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
              active === key ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
            }`}>{j.icon} {j.label}</button>
        ))}
      </div>

      <div>
        <h3 className="text-[17px] font-bold text-ink mb-1">{journey.icon} {journey.label}</h3>
        <p className="text-ink-secondary text-[13px] mb-4">{journey.intro}</p>
        <div className="space-y-3">
          {journey.steps.map((s, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4 flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-[13px] font-bold" style={{ background: s.color }}>{s.step}</span>
              <div>
                <p className="font-bold text-ink text-[13px] mb-1">{s.title}</p>
                <p className="text-ink-secondary text-[12px] leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-[13px] text-amber-800 leading-relaxed">
        These guides describe a typical, general pathway — not medical advice. Timelines, referral requirements, and costs vary by hospital, insurer, and individual case.
      </div>
    </div>
  )
}

/* ─── Appointment Booking Guide ──────────────────────────────────── */

const PRIVATE_BOOKING_APPS = [
  { group: 'KPJ Healthcare', app: 'KPJ Cares', detail: 'Search by hospital, specialty, or doctor name; book appointments; membership perks (concierge, room upgrades, medication delivery). Covers all KPJ hospitals nationwide.' },
  { group: 'IHH Healthcare Malaysia (Gleneagles + Pantai)', app: 'MyHealth360', detail: 'Request-based booking (confirmed by hospital staff, typically next working day), medical records access, family member booking, reschedule/cancel in-app.' },
  { group: 'Sunway Healthcare', app: 'Sunway Medical (per-facility apps)', detail: 'Separate apps for Sunway Medical Centre and Sunway Medical Centre Penang — doctor availability, slot booking, reminders.' },
  { group: 'Columbia Asia (A1Health group)', app: 'Columbia Asia Malaysia', detail: 'Hospital/consultant selection, slot booking, appointment status, lab/radiology report access, health-trend tracking.' },
  { group: 'Ramsay Sime Darby Health Care', app: 'Ramsay Sime Darby Health Care', detail: 'Online appointment booking across the group\'s hospitals.' },
]

function BookingGuideSection() {
  const [view, setView] = useState('govt')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {[
          { v: 'govt',    label: '🏛 Government (MySejahtera)' },
          { v: 'private', label: '🏥 Private Hospital Apps' },
          { v: 'tips',    label: '⏱ Wait Times & Tips' },
        ].map(({ v, label }) => (
          <button key={v} onClick={() => setView(v)}
            className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
              view === v ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
            }`}>{label}</button>
        ))}
      </div>

      {view === 'govt' && (
        <div className="space-y-4">
          <div className="border border-ink-quaternary rounded-2xl p-4">
            <p className="font-bold text-ink text-[14px] mb-2">📱 MySejahtera</p>
            <p className="text-ink-secondary text-[13px] leading-relaxed">Still MOH's primary digital health app — used to book Klinik Kesihatan appointments, check in with a QR code, and manage bookings for registered dependants. For a full install-to-booking walkthrough, see the <Link to="/resources" className="text-brand font-semibold hover:underline">Resources → MySejahtera Guide</Link>.</p>
          </div>
          <div className="bg-surface-secondary rounded-2xl p-4 text-[13px] text-ink-secondary leading-relaxed">
            <strong className="text-ink">MyHEALTH portal</strong> (myhealth.moh.gov.my) is MOH's general health-information site — education content rather than a booking tool. Use it for reference material, not to book appointments.
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-[13px] text-amber-800 leading-relaxed">
            Government hospital specialist clinic appointments (as opposed to Klinik Kesihatan primary care) are usually referral-based and scheduled by the receiving hospital — you generally can't self-book these directly.
          </div>
        </div>
      )}

      {view === 'private' && (
        <div className="space-y-3">
          <p className="text-ink-secondary text-[13px] mb-1">Major Malaysian private hospital groups each run their own booking app:</p>
          {PRIVATE_BOOKING_APPS.map((a, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4">
              <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                <p className="font-bold text-ink text-[13px]">{a.group}</p>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-brand/8 text-brand border border-brand/20">{a.app}</span>
              </div>
              <p className="text-ink-secondary text-[12px] leading-relaxed">{a.detail}</p>
            </div>
          ))}
          <p className="text-ink-tertiary text-[11px]">App names and features change — confirm the current app on your hospital's official website before downloading.</p>
        </div>
      )}

      {view === 'tips' && (
        <div className="space-y-3">
          <div className="border border-ink-quaternary rounded-xl p-4">
            <p className="font-bold text-ink text-[13px] mb-1">Private specialist: ~1–2 weeks booked ahead</p>
            <p className="text-ink-secondary text-[12px]">Booking in advance is generally faster and more reliable than walking in.</p>
          </div>
          <div className="border border-ink-quaternary rounded-xl p-4">
            <p className="font-bold text-ink text-[13px] mb-1">Public/government specialist referral: ~2–3 months</p>
            <p className="text-ink-secondary text-[12px]">Non-urgent referrals to government specialist clinics can take significantly longer — plan ahead, especially for screening-type appointments (e.g. colonoscopy).</p>
          </div>
          <div className="border border-ink-quaternary rounded-xl p-4">
            <p className="font-bold text-ink text-[13px] mb-1">Walk-ins for imaging</p>
            <p className="text-ink-secondary text-[12px]">Some private hospitals accept walk-ins for X-ray/ultrasound subject to same-day availability — call ahead to check before travelling.</p>
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Pharmacy & Vaccination Locator ─────────────────────────────── */

function PharmacyLocatorSection() {
  const [view, setView] = useState('pharmacy')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {[
          { v: 'pharmacy', label: '🏪 24-Hour Pharmacies' },
          { v: 'hospital',  label: '🏥 Hospital Pharmacies' },
          { v: 'vaccine',   label: '💉 Vaccination Access' },
        ].map(({ v, label }) => (
          <button key={v} onClick={() => setView(v)}
            className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
              view === v ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
            }`}>{label}</button>
        ))}
      </div>

      {view === 'pharmacy' && (
        <div className="space-y-4">
          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px] text-ink-secondary leading-relaxed">
            <strong className="text-ink">Official source:</strong> MOH runs a "24 Hours Pharmacy Services" directory listing 24-hour pharmacy facilities by state at <span className="font-mono text-[12px]">pharmacy.moh.gov.my</span>. Branch lists change often — check there for the current nearest location rather than relying on a fixed list.
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: 'Caring Pharmacy (CARiNG)', detail: 'Confirmed to run 24-hour branches, concentrated in the Klang Valley (e.g. Puchong, Damansara, Subang Jaya, Bangsar South).' },
              { name: 'Watsons', detail: '550+ stores nationwide; positioned more toward beauty/lifestyle retail — check individual branch hours.' },
              { name: 'Guardian', detail: '440+ stores nationwide — check individual branch hours for 24-hour availability.' },
              { name: 'Alpro Pharmacy', detail: '300+ outlets, pharmacy-first positioning — check individual branch hours.' },
            ].map((p, i) => (
              <div key={i} className="border border-ink-quaternary rounded-xl p-4">
                <p className="font-bold text-ink text-[13px] mb-1">{p.name}</p>
                <p className="text-ink-secondary text-[12px] leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
          <div className="bg-surface-secondary rounded-2xl p-4 text-[12px] text-ink-tertiary leading-relaxed">
            <strong className="text-ink">Compounding pharmacies</strong> are a distinct, MOH-regulated category (governed by the Poisons Act 1952 and MOH's Good Compounding Practice guideline) — licensed pharmacies that prepare custom-dosage or discontinued formulations against a valid prescription when a registered product isn't suitable. Ask your doctor if you need one; they're not a general walk-in retail category.
          </div>
        </div>
      )}

      {view === 'hospital' && (
        <div className="space-y-4">
          <p className="text-ink-secondary text-[13px]">Most private hospital pharmacies serve walk-in (non-admitted) customers, and many run 24 hours because they're co-located with A&E:</p>
          <div className="space-y-2.5">
            {[
              { name: 'CVSKL (Consultant & Specialist Clinic KL)', detail: 'Pharmacy operates 24/7/365 and explicitly processes walk-ins, including outside prescriptions.' },
              { name: 'Prince Court Medical Centre', detail: '24-hour "Satellite Pharmacy" at the A&E department, serving outpatients.' },
              { name: 'Pantai Hospital Melaka', detail: '24-hour dispensing for both inpatients and outpatients.' },
              { name: 'Gleneagles KL', detail: 'Separate Inpatient / Outpatient / A&E Satellite / Oncology / Retail pharmacy divisions.' },
            ].map((h, i) => (
              <div key={i} className="border border-ink-quaternary rounded-xl p-4">
                <p className="font-bold text-ink text-[13px] mb-1">{h.name}</p>
                <p className="text-ink-secondary text-[12px] leading-relaxed">{h.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-ink-tertiary text-[11px]">Coverage varies widely by hospital — call ahead to confirm 24-hour walk-in dispensing before travelling for a non-urgent need.</p>
        </div>
      )}

      {view === 'vaccine' && (
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-[13px] text-red-800 leading-relaxed">
            <strong>Important legal note:</strong> As of late 2025, Malaysia's Health Director-General has stated it is illegal for pharmacists to administer vaccines by injection generally — vaccine injection is treated as a clinical procedure reserved for registered medical practitioners. This is an active, unresolved policy debate (the Malaysian Pharmacists Society is pushing for pharmacist vaccination rights; the Malaysian Medical Association opposes it). Retail pharmacies that offer vaccination do so via an on-site doctor or nurse, not the pharmacist personally — the pharmacy is the venue, not (currently) the legal vaccinator.
          </div>
          <div className="space-y-2.5">
            {[
              { title: 'Free flu vaccine for seniors 60+', detail: 'Bookable via MySejahtera as a recurring government/Klinik Kesihatan programme.' },
              { title: 'Qdenga (dengue) vaccine', detail: 'Available at selected private clinics (e.g. bookable via the Qualitas Plus App) and many private hospitals — see the Vaccination Guide topic for pricing.' },
              { title: 'COVID-19 & flu boosters', detail: 'Free at Klinik Kesihatan for priority groups (60+, immunocompromised, healthcare workers, pregnant); private hospitals and clinics offer paid vaccination for everyone else — see the Vaccination Guide topic.' },
            ].map((v, i) => (
              <div key={i} className="border border-ink-quaternary rounded-xl p-4">
                <p className="font-bold text-ink text-[13px] mb-1">{v.title}</p>
                <p className="text-ink-secondary text-[12px] leading-relaxed">{v.detail}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Medical Glossary ───────────────────────────────────────────── */

function GlossarySection() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('all')

  const categories = ['all', ...Array.from(new Set(GLOSSARY.map(g => g.category)))]
  const catLabel = {
    all: 'All',
    hospital: 'Hospital Settings',
    medical: 'Medical',
    procedure: 'Procedures',
    drug: 'Medications',
    admin: 'Admin & Billing',
    financial: 'Financial Aid',
    staff: 'Hospital Staff',
    malaysian: 'Malaysian-specific',
  }

  const filtered = GLOSSARY.filter(g => {
    const matchCat = cat === 'all' || g.category === cat
    const q = search.toLowerCase()
    const matchSearch = !q || g.term.toLowerCase().includes(q) || g.full?.toLowerCase().includes(q) || g.definition.toLowerCase().includes(q)
    return matchCat && matchSearch
  })

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="search"
          placeholder="Search terms… (e.g. ICU, deductible, LOS)"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 border border-ink-quaternary rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-brand"
        />
        <div className="flex flex-wrap gap-1.5">
          {categories.map(c => (
            <button key={c} onClick={() => setCat(c)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-medium border transition-colors ${
                cat === c ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
              }`}>
              {catLabel[c] || c}
            </button>
          ))}
        </div>
      </div>

      <p className="text-ink-tertiary text-[12px]">{filtered.length} term{filtered.length !== 1 ? 's' : ''}</p>

      <div className="space-y-2">
        {filtered.map((g, i) => (
          <div key={i} className="border border-ink-quaternary rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <span className="font-bold text-ink text-[15px]">{g.term}</span>
                  {g.full && <span className="text-ink-secondary text-[12px]">{g.full}</span>}
                  <span className="text-[10px] font-medium uppercase tracking-wide bg-surface-secondary text-ink-tertiary px-2 py-0.5 rounded-full">{g.category}</span>
                </div>
                <p className="text-ink-secondary text-[13px] leading-relaxed">{g.definition}</p>
                {g.tip && (
                  <div className="mt-2 bg-brand/5 border border-brand/20 rounded-lg px-3 py-2">
                    <p className="text-brand text-[12px] leading-relaxed">💡 {g.tip}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-ink-tertiary text-[13px] py-8">No terms match your search.</p>
        )}
      </div>
    </div>
  )
}

/* ─── Common Drugs & Medicines ───────────────────────────────────── */

function DrugsSection() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('all')
  const [open, setOpen] = useState(null)
  const [rxFilter, setRxFilter] = useState('all')

  const filtered = DRUGS.filter(d => {
    const matchCat = cat === 'all' || d.category === cat
    const matchRx = rxFilter === 'all' || (rxFilter === 'otc' && !d.prescription) || (rxFilter === 'rx' && d.prescription)
    const q = search.toLowerCase()
    const matchSearch = !q ||
      d.name.toLowerCase().includes(q) ||
      d.mandarin.includes(q) ||
      d.mandarinCommon.includes(q) ||
      d.pinyin.toLowerCase().includes(q) ||
      d.what.toLowerCase().includes(q) ||
      d.commonBrands.some(b => b.toLowerCase().includes(q))
    return matchCat && matchRx && matchSearch
  })

  return (
    <div className="space-y-5">
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-[13px] text-amber-900">
        ⚕️ <strong>Medical disclaimer:</strong> This reference is for general awareness only. Always consult a qualified doctor or pharmacist before taking any medication. Do not self-diagnose or self-medicate for serious conditions.
      </div>

      {/* Search + filters */}
      <div className="flex flex-col gap-3">
        <input
          type="search"
          placeholder="Search by name, Mandarin, brand, or use… (e.g. Panadol, 退烧, antibiotic)"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border border-ink-quaternary rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-brand"
        />
        <div className="flex flex-wrap gap-2">
          <div className="flex rounded-xl border border-ink-quaternary overflow-hidden text-[12px]">
            {[['all', 'All'], ['otc', 'OTC (No Rx)'], ['rx', 'Prescription']].map(([val, label]) => (
              <button key={val} onClick={() => setRxFilter(val)}
                className={`px-3 py-1.5 font-medium transition-colors ${rxFilter === val ? 'bg-ink text-white' : 'bg-white text-ink-secondary hover:bg-surface-secondary'}`}>
                {label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {DRUG_CATEGORIES.map(c => (
              <button key={c.id} onClick={() => setCat(c.id)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-medium border transition-colors ${
                  cat === c.id ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
                }`}>
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="text-ink-tertiary text-[12px]">{filtered.length} medicine{filtered.length !== 1 ? 's' : ''}</p>

      <div className="space-y-2">
        {filtered.map(d => {
          const isOpen = open === d.id
          return (
            <div key={d.id} className="border border-ink-quaternary rounded-xl overflow-hidden hover:border-brand/40 transition-colors">
              <button
                className="w-full flex items-start justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
                onClick={() => setOpen(isOpen ? null : d.id)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <span className="font-bold text-ink text-[14px]">{d.name}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${d.prescription ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}>
                      {d.prescription ? 'Rx Required' : 'OTC'}
                    </span>
                    {d.emergency && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-50 text-red-600">Emergency Use</span>
                    )}
                    <span className="text-[10px] font-medium uppercase tracking-wide bg-surface-secondary text-ink-tertiary px-2 py-0.5 rounded-full">{d.categoryLabel}</span>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="text-[15px] font-medium text-ink">{d.mandarin}</span>
                    <span className="text-[12px] text-ink-tertiary">{d.pinyin}</span>
                    <span className="text-[12px] text-ink-secondary">{d.mandarinCommon}</span>
                  </div>
                </div>
                <svg className={`flex-shrink-0 text-ink-tertiary transition-transform mt-1 ml-3 ${isOpen ? 'rotate-180' : ''}`}
                  width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {isOpen && (
                <div className="px-4 pb-5 border-t border-ink-quaternary pt-4 space-y-4">
                  {d.emergency && d.emergencyNote && (
                    <div className="bg-red-50 border border-red-200 rounded-xl px-3 py-2.5">
                      <p className="font-semibold text-red-900 text-[12px] mb-0.5">🚨 Emergency Use</p>
                      <p className="text-red-800 text-[12px] leading-relaxed">{d.emergencyNote}</p>
                    </div>
                  )}

                  <div>
                    <p className="font-semibold text-ink text-[12px] uppercase tracking-wide mb-1.5">What It Does</p>
                    <p className="text-ink-secondary text-[13px] leading-relaxed">{d.what}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-ink text-[12px] uppercase tracking-wide mb-1.5">Common Brands in Malaysia</p>
                      <div className="flex flex-wrap gap-1.5">
                        {d.commonBrands.map(b => (
                          <span key={b} className="bg-surface-secondary text-ink-secondary text-[12px] px-2.5 py-1 rounded-full border border-ink-quaternary">{b}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-ink text-[12px] uppercase tracking-wide mb-1.5">Where to Get</p>
                      <p className="text-ink-secondary text-[13px] leading-relaxed">{d.whereToGet}</p>
                    </div>
                  </div>

                  {d.dose && (
                    <div className="bg-brand/5 border border-brand/15 rounded-xl px-3 py-2.5">
                      <p className="font-semibold text-brand text-[12px] mb-0.5">💊 Typical Dose</p>
                      <p className="text-ink-secondary text-[12px] leading-relaxed">{d.dose}</p>
                    </div>
                  )}

                  {d.notes && (
                    <div className="bg-amber-50 border border-amber-100 rounded-xl px-3 py-2.5">
                      <p className="font-semibold text-amber-900 text-[12px] mb-0.5">⚠ Important Notes</p>
                      <p className="text-amber-800 text-[12px] leading-relaxed">{d.notes}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
        {filtered.length === 0 && (
          <p className="text-center text-ink-tertiary text-[13px] py-8">No medicines match your search.</p>
        )}
      </div>
    </div>
  )
}

/* ─── Lab Values ─────────────────────────────────────────────────── */

function LabValuesSection() {
  const [cat, setCat] = useState('all')
  const [open, setOpen] = useState(null)

  const filtered = cat === 'all' ? LAB_VALUES : LAB_VALUES.filter(l => l.category === cat)

  return (
    <div className="space-y-5">
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-[13px] text-amber-900">
        ⚕️ <strong>Reference only:</strong> Normal ranges can vary by laboratory, age, sex, and method. Always discuss your results with your doctor. Do not self-interpret abnormal results without medical advice.
      </div>

      <div className="flex flex-wrap gap-1.5">
        {LAB_CATEGORIES.map(c => (
          <button key={c.id} onClick={() => setCat(c.id)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-medium border transition-colors ${
              cat === c.id ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
            }`}>
            {c.label}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map(lab => {
          const isOpen = open === lab.id
          return (
            <div key={lab.id} className="border border-ink-quaternary rounded-xl overflow-hidden">
              <button className="w-full flex items-start justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
                onClick={() => setOpen(isOpen ? null : lab.id)}>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-semibold text-ink text-[14px]">{lab.name}</span>
                    <span className="text-[10px] font-medium uppercase tracking-wide bg-surface-secondary text-ink-tertiary px-2 py-0.5 rounded-full">{lab.categoryLabel}</span>
                  </div>
                  <p className="text-ink-tertiary text-[12px]">{lab.unit}</p>
                </div>
                <svg className={`flex-shrink-0 text-ink-tertiary transition-transform mt-1 ml-3 ${isOpen ? 'rotate-180' : ''}`}
                  width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {isOpen && (
                <div className="px-4 pb-5 border-t border-ink-quaternary pt-4 space-y-4">
                  <div className="space-y-2">
                    {lab.ranges.map((r, i) => (
                      <div key={i} className="flex items-start gap-3 text-[13px]">
                        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1" style={{ background: r.color }} />
                        <div>
                          <span className="font-semibold text-ink">{r.label}:</span>
                          <span className="text-ink-secondary ml-1">{r.range}</span>
                          {r.note && <span className="text-ink-tertiary ml-1">— {r.note}</span>}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-ink-secondary text-[13px] leading-relaxed">{lab.what}</p>

                  {lab.tip && (
                    <div className="bg-brand/5 border border-brand/20 rounded-lg px-3 py-2">
                      <p className="text-brand text-[12px] leading-relaxed">💡 {lab.tip}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ─── Medical Abbreviations ──────────────────────────────────────── */

function AbbreviationsSection() {
  const [search, setSearch] = useState('')
  const [context, setContext] = useState('All')

  const filtered = ABBREVIATIONS.filter(a => {
    const matchCtx = context === 'All' || a.context === context
    const q = search.toLowerCase()
    const matchSearch = !q || a.abbr.toLowerCase().includes(q) || a.full.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q)
    return matchCtx && matchSearch
  })

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="search"
          placeholder="Search abbreviations… (e.g. ICU, PRN, OPD)"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 border border-ink-quaternary rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-brand"
        />
      </div>

      <div className="flex flex-wrap gap-1.5">
        {ABBR_CONTEXTS.map(c => (
          <button key={c} onClick={() => setContext(c)}
            className={`px-3 py-1.5 rounded-full text-[11px] font-medium border transition-colors ${
              context === c ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
            }`}>
            {c}
          </button>
        ))}
      </div>

      <p className="text-ink-tertiary text-[12px]">{filtered.length} abbreviation{filtered.length !== 1 ? 's' : ''}</p>

      <div className="space-y-2">
        {filtered.map((a, i) => (
          <div key={i} className="border border-ink-quaternary rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-20 font-bold text-brand text-[16px] leading-tight">{a.abbr}</div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <span className="font-semibold text-ink text-[13px]">{a.full}</span>
                  <span className="text-[10px] font-medium uppercase tracking-wide bg-surface-secondary text-ink-tertiary px-2 py-0.5 rounded-full">{a.context}</span>
                </div>
                <p className="text-ink-secondary text-[13px] leading-relaxed">{a.desc}</p>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-ink-tertiary text-[13px] py-8">No abbreviations match your search.</p>
        )}
      </div>
    </div>
  )
}

/* ─── Health Screening ───────────────────────────────────────────── */

const SCREENING_BY_AGE = [
  {
    stage: '20s',
    range: 'Ages 20–29',
    color: '#16a34a',
    icon: '🌱',
    items: [
      { test: 'Blood Pressure', freq: 'Every 2 years (annually if ≥ 120/80)', who: 'Everyone', note: 'Normal: < 120/80 mmHg. Checked free at any Klinik Kesihatan.' },
      { test: 'BMI & Waist Circumference', freq: 'Annually', who: 'Everyone', note: 'Asian overweight threshold: BMI ≥ 23. Waist risk: men ≥ 90 cm, women ≥ 80 cm.' },
      { test: 'Fasting Blood Sugar', freq: 'Every 3 years if normal; annually with risk factors', who: 'Everyone from age 18', note: 'Risk factors: family history of diabetes, overweight, PCOS.' },
      { test: 'Pap Smear (Cervical Cancer)', freq: 'Every 3 years from age 21 (or 3 years after sexual debut)', who: 'Women', note: 'Free at Klinik Kesihatan under BLIS Programme. HPV co-test from age 30.' },
      { test: 'Dental Check', freq: 'Every 6–12 months', who: 'Everyone', note: 'Free at government dental clinics for eligible patients.' },
      { test: 'STI / HIV Screening', freq: 'As appropriate based on risk', who: 'Sexually active', note: 'Free anonymous HIV testing at Klinik Kesihatan and approved NGOs (PT Foundation, etc.).' },
    ],
  },
  {
    stage: '30s',
    range: 'Ages 30–39',
    color: '#0891b2',
    icon: '📈',
    items: [
      { test: 'Blood Pressure', freq: 'Annually', who: 'Everyone', note: 'More frequent if family history of hypertension or kidney disease.' },
      { test: 'Fasting Blood Sugar (FBS)', freq: 'Annually from age 30', who: 'Everyone', note: 'MOH CPG recommends FBS screening from age 30. Free at Klinik Kesihatan.' },
      { test: 'Full Lipid Panel', freq: 'Every 5 years (more often with risk factors)', who: 'Everyone', note: 'Includes LDL, HDL, total cholesterol, triglycerides. 9–12 hour fast required.' },
      { test: 'Pap Smear / HPV Co-test', freq: 'Every 3 years (Pap); every 5 years (HPV co-test)', who: 'Women', note: 'HPV co-test preferred from age 30. Covers high-risk strains 16, 18, and others.' },
      { test: 'Eye Examination', freq: 'Every 2 years', who: 'Everyone', note: 'Earlier if you have diabetes, hypertension, or family history of glaucoma.' },
      { test: 'Hepatitis B Screening', freq: 'Once (if unvaccinated or unknown status)', who: 'Everyone', note: 'HBsAg, anti-HBs. Vaccinate if not immune. Free at Klinik Kesihatan for unvaccinated adults.' },
      { test: 'Thyroid Function (TSH)', freq: 'Every 5 years (women)', who: 'Women (especially)', note: 'Women are 5–8× more likely to develop thyroid disorders. Discuss with doctor if fatigue, weight changes, or hair loss.' },
    ],
  },
  {
    stage: '40s',
    range: 'Ages 40–49',
    color: '#d97706',
    icon: '⚠️',
    items: [
      { test: 'Mammogram', freq: 'Annually or every 2 years from age 40', who: 'Women', note: 'Free at MOH hospitals under BreastScreen Malaysia programme for women 40–74.' },
      { test: 'Colorectal Cancer Screening', freq: 'FOBT annually; colonoscopy from age 45 (every 10 years)', who: 'Everyone from 45', note: 'Earlier if family history of colorectal cancer or polyps. FOBT available at KK.' },
      { test: 'Cardiac Risk Assessment', freq: 'Every 5 years (or annually with risk factors)', who: 'Everyone', note: 'Includes FBS, lipid panel, BP. Framingham/SCORE2 risk score. Ask your doctor to calculate your 10-year cardiac risk.' },
      { test: 'PSA (Prostate-Specific Antigen)', freq: 'Discuss with doctor from age 40–50', who: 'Men', note: 'Controversial — discuss risks and benefits with your doctor before testing. Not a universal recommendation.' },
      { test: 'Bone Density (DEXA)', freq: 'Discuss with doctor if risk factors', who: 'Women approaching menopause', note: 'Risk factors: smoking, low BMI, steroid use, family history of osteoporosis.' },
      { test: 'Full Blood Count (FBC)', freq: 'Annually', who: 'Everyone', note: 'Checks for anaemia, infection markers, platelet disorders. Included in most health screening packages.' },
    ],
  },
  {
    stage: '50s',
    range: 'Ages 50–64',
    color: '#7c3aed',
    icon: '🔍',
    items: [
      { test: 'Colonoscopy', freq: 'Every 10 years (if normal); every 3–5 years if polyps found', who: 'Everyone', note: 'Gold standard for colorectal cancer detection. Requires bowel prep. Sedation available.' },
      { test: 'Bone Density (DEXA)', freq: 'Women at menopause; repeat every 1–2 years if low', who: 'Post-menopausal women; men 70+', note: 'T-score: Normal ≥ −1.0; Osteopenia −1.0 to −2.5; Osteoporosis ≤ −2.5.' },
      { test: 'Lung Cancer Screening (LDCT)', freq: 'Annually for 3 years (if eligible)', who: 'Ages 50–80, 20+ pack-year smoker', note: 'Low-dose CT chest. MOH Malaysia follows USPSTF criteria. Discuss with pulmonologist.' },
      { test: 'Abdominal Aortic Aneurysm (AAA)', freq: 'Once at age 65 (men who ever smoked)', who: 'Men 65+ (smokers)', note: 'Ultrasound abdomen. Detects silent AAA before rupture.' },
      { test: 'Hearing Test (Audiometry)', freq: 'Every 3 years from age 50', who: 'Everyone', note: 'Age-related hearing loss is often gradual and unnoticed. Available at ENT clinics.' },
      { test: 'Glaucoma Screening', freq: 'Every 2 years from age 40; annually from 60', who: 'Everyone', note: 'Intraocular pressure check + optic nerve assessment at ophthalmology clinic.' },
    ],
  },
  {
    stage: '65+',
    range: 'Ages 65 and above',
    color: '#dc2626',
    icon: '🌟',
    items: [
      { test: 'Comprehensive Geriatric Assessment', freq: 'Annually', who: 'Everyone 65+', note: 'Covers cognition, falls risk, functional status, nutrition, medication review. Ask your family doctor or geriatrician.' },
      { test: 'Cognitive Screening (MMSE / MoCA)', freq: 'Annually', who: 'Everyone 65+', note: 'Mini-Mental State Exam or Montreal Cognitive Assessment — detect early dementia. Free at KK.' },
      { test: 'Osteoporosis Monitoring', freq: 'Every 1–2 years', who: 'Post-menopausal women; men 70+', note: 'Continue DEXA monitoring. Falls prevention programme available at government hospitals.' },
      { test: 'Influenza Vaccination', freq: 'Annually', who: 'Everyone 65+', note: 'Free for 65+ at Klinik Kesihatan under National Immunisation Programme (NIP).' },
      { test: 'Pneumococcal Vaccination', freq: 'Once (PCV13) + booster after 1 year (PPSV23)', who: 'Everyone 65+', note: 'Available free at government hospitals. Protects against pneumonia and meningitis.' },
      { test: 'Depression Screening (GDS)', freq: 'Annually', who: 'Everyone 65+', note: 'Geriatric Depression Scale — 15-item questionnaire. Depression is underdiagnosed in the elderly.' },
    ],
  },
]

const SCREENING_PACKAGES = [
  {
    tier: 'Basic / Asas',
    price: 'Free – RM 80',
    color: '#16a34a',
    where: 'Klinik Kesihatan (KK), KPMC clinics',
    items: ['Blood pressure (BP)', 'BMI & waist circumference', 'Fasting blood sugar (FBS)', 'Total cholesterol', 'Urine FEME (dipstick)'],
    note: 'Available free for Malaysians at Klinik Kesihatan. Peka B40 programme extends this free to B40 households for additional tests.',
  },
  {
    tier: 'Essential / Standard',
    price: 'RM 100 – RM 300',
    color: '#0891b2',
    where: 'Private GP, Pathlab, TMC, KPJ Wellness',
    items: ['Everything in Basic', 'Full Blood Count (FBC)', 'Liver Function Test (LFT)', 'Kidney Function / Renal Profile', 'Uric acid', 'ECG (resting)', 'HbA1c'],
    note: 'Most common package at private labs and GP health screenings. Pathlab, DKSH, and hospital-based screening centres offer this range.',
  },
  {
    tier: 'Comprehensive / Lengkap',
    price: 'RM 300 – RM 800',
    color: '#7c3aed',
    where: 'Hospital health screening centres, UMSC, KPJ, Pantai, Gleneagles',
    items: ['Everything in Essential', 'Full lipid panel (LDL, HDL, TG)', 'Thyroid function (TSH, T4)', 'Hepatitis B & C serology', 'Pap smear (women) / PSA (men)', 'Tumour markers (CEA, CA19-9, AFP, CA-125)', 'Chest X-ray (CXR)', 'Stool FOBT (colorectal screening)', 'Ultrasound abdomen'],
    note: 'Comprehensive packages vary widely between hospitals. Always confirm exactly what is included and whether a doctor consultation is bundled.',
  },
  {
    tier: 'Executive / Premium',
    price: 'RM 800 – RM 3,000+',
    color: '#dc2626',
    where: 'Gleneagles, Prince Court, Pantai, UMSC, Island Hospital',
    items: ['Everything in Comprehensive', 'CT Coronary Calcium Scoring (cardiac risk)', 'MRI brain or full-body (varies)', 'DEXA bone density', 'Audiometry (hearing test)', 'Ophthalmology review', 'Full echocardiogram', 'Treadmill stress ECG', 'Dietitian consultation', 'Doctor specialist review'],
    note: 'Premium packages include specialist consultations and advanced imaging. Best suited for high-risk individuals or those wanting the most thorough annual review.',
  },
]

const FREE_PROGRAMMES = [
  {
    name: 'Peka B40',
    desc: 'Free health screening for B40 Malaysians — covers NCD (diabetes, hypertension, kidney disease), cancer screening (breast, cervical, colorectal), and mental health assessment.',
    who: 'B40 Malaysians aged 40–60 registered in eKasih / Peka B40 app',
    where: 'Approved Klinik Kesihatan and panel clinics nationwide',
    url: 'https://www.pekab40.com.my',
    icon: '🟢',
  },
  {
    name: 'BreastScreen Malaysia',
    desc: 'Free mammogram for women aged 40–74. Offered at MOH hospitals and mobile mammography units.',
    who: 'Women aged 40–74, Malaysian citizens',
    where: 'MOH district and state hospitals; mobile units (schedule varies by state)',
    url: 'https://www.moh.gov.my',
    icon: '🩷',
  },
  {
    name: 'BLIS Programme (Cervical Cancer)',
    desc: 'Free Pap smear / VIA (Visual Inspection with Acetic Acid) at government health clinics. Cervical cancer is the 3rd most common cancer in Malaysian women.',
    who: 'Women aged 20–65 who are or have been sexually active',
    where: 'Any Klinik Kesihatan nationwide',
    url: 'https://www.moh.gov.my',
    icon: '🩺',
  },
  {
    name: 'KOSPEN (Community NCD Screening)',
    desc: 'Community-level screening for blood pressure, blood sugar, and BMI. Conducted by trained community health volunteers (KOSPEN officers).',
    who: 'Any Malaysian, particularly in rural and under-served communities',
    where: 'Community halls, suraus, schools — check with local KK for schedule',
    url: 'https://www.moh.gov.my',
    icon: '🏘️',
  },
]

function ScreeningSection() {
  const [activeAge, setActiveAge] = useState('20s')
  const [openPkg, setOpenPkg] = useState(null)
  const [openProg, setOpenProg] = useState(null)
  const ageGroup = SCREENING_BY_AGE.find(g => g.stage === activeAge)

  return (
    <div className="space-y-10">

      {/* Intro */}
      <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px] text-ink-secondary leading-relaxed">
        <p><span className="font-semibold text-ink">Why screen?</span> Most chronic diseases — diabetes, hypertension, high cholesterol, and cancer — have no symptoms in early stages. Screening catches them when treatment is simplest and cheapest. Malaysian MOH guidelines recommend starting basic NCD screening from age 30 (or earlier with risk factors).</p>
      </div>

      {/* Age-based guide */}
      <div>
        <h3 className="font-bold text-ink text-[16px] mb-1">🗓️ What to Screen — By Age Group</h3>
        <p className="text-ink-secondary text-[13px] mb-4">Select your age group to see recommended tests and frequency.</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {SCREENING_BY_AGE.map(g => (
            <button key={g.stage} onClick={() => setActiveAge(g.stage)}
              className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
                activeAge === g.stage
                  ? 'text-white border-transparent'
                  : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
              }`}
              style={activeAge === g.stage ? { background: g.color, borderColor: g.color } : {}}>
              {g.icon} {g.range}
            </button>
          ))}
        </div>

        {ageGroup && (
          <div className="space-y-2">
            {ageGroup.items.map((item, i) => (
              <div key={i} className="border border-ink-quaternary rounded-xl p-4" style={{ borderLeft: `3px solid ${ageGroup.color}` }}>
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="flex-1">
                    <div className="flex items-start gap-2 flex-wrap">
                      <span className="font-semibold text-ink text-[13px]">{item.test}</span>
                      <span className="text-[11px] px-2 py-0.5 rounded-full font-medium"
                        style={{ background: `${ageGroup.color}15`, color: ageGroup.color }}>
                        {item.who}
                      </span>
                    </div>
                    <p className="text-ink-secondary text-[12px] mt-0.5">{item.freq}</p>
                  </div>
                </div>
                <p className="text-ink-tertiary text-[12px] leading-relaxed mt-2 pt-2 border-t border-ink-quaternary">💡 {item.note}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Package tiers */}
      <div>
        <h3 className="font-bold text-ink text-[16px] mb-1">📦 Screening Package Tiers</h3>
        <p className="text-ink-secondary text-[13px] mb-4">What's included at each level — and where to get it in Malaysia.</p>
        <div className="space-y-2">
          {SCREENING_PACKAGES.map(pkg => {
            const isOpen = openPkg === pkg.tier
            return (
              <div key={pkg.tier} className="border border-ink-quaternary rounded-xl overflow-hidden" style={{ borderLeft: `3px solid ${pkg.color}` }}>
                <button className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
                  onClick={() => setOpenPkg(isOpen ? null : pkg.tier)}>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-semibold text-ink text-[14px]">{pkg.tier}</span>
                    <span className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full"
                      style={{ background: `${pkg.color}15`, color: pkg.color }}>{pkg.price}</span>
                    <span className="text-ink-tertiary text-[12px]">{pkg.where}</span>
                  </div>
                  <svg className={`flex-shrink-0 text-ink-tertiary transition-transform ml-2 ${isOpen ? 'rotate-180' : ''}`}
                    width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 border-t border-ink-quaternary pt-3 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.items.map((item, i) => (
                        <span key={i} className="text-[12px] px-2.5 py-1 rounded-full border border-ink-quaternary bg-surface-secondary text-ink-secondary">{item}</span>
                      ))}
                    </div>
                    <p className="text-[12px] text-ink-secondary bg-amber-50 border border-amber-100 rounded-xl px-3 py-2">
                      💡 {pkg.note}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Free Government Programmes */}
      <div>
        <h3 className="font-bold text-ink text-[16px] mb-1">🇲🇾 Free Government Screening Programmes</h3>
        <p className="text-ink-secondary text-[13px] mb-4">These are fully subsidised — most Malaysians are eligible but unaware.</p>
        <div className="space-y-2">
          {FREE_PROGRAMMES.map(prog => {
            const isOpen = openProg === prog.name
            return (
              <div key={prog.name} className="border border-ink-quaternary rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
                  onClick={() => setOpenProg(isOpen ? null : prog.name)}>
                  <div className="flex items-center gap-2">
                    <span className="text-[18px]">{prog.icon}</span>
                    <span className="font-semibold text-ink text-[14px]">{prog.name}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">FREE</span>
                  </div>
                  <svg className={`flex-shrink-0 text-ink-tertiary transition-transform ml-2 ${isOpen ? 'rotate-180' : ''}`}
                    width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 border-t border-ink-quaternary pt-3 space-y-2.5">
                    <p className="text-ink-secondary text-[13px] leading-relaxed">{prog.desc}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      <div className="bg-surface-secondary rounded-xl p-3">
                        <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wide mb-1">Who</p>
                        <p className="text-[12px] text-ink">{prog.who}</p>
                      </div>
                      <div className="bg-surface-secondary rounded-xl p-3">
                        <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wide mb-1">Where</p>
                        <p className="text-[12px] text-ink">{prog.where}</p>
                      </div>
                    </div>
                    <a href={prog.url} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-brand text-[12px] font-medium hover:underline">
                      🔗 {prog.url.replace('https://', '')}
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Where to get screened */}
      <div className="bg-surface-secondary rounded-2xl p-5">
        <h3 className="font-bold text-ink text-[15px] mb-3">📍 Where to Get Screened in Malaysia</h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { place: 'Klinik Kesihatan (KK)', detail: 'Free basic NCD screening for all Malaysians. Walk in or register at your nearest KK. Free for hypertension, diabetes, and cholesterol checks.', badge: 'Free', badgeColor: '#16a34a' },
            { place: 'Private Labs (Pathlab, DKSH)', detail: 'Walk-in blood tests with same-day or next-day results. Essential packages RM 100–300. No doctor referral needed.', badge: 'RM 100–300', badgeColor: '#0891b2' },
            { place: 'Hospital Health Screening Centres', detail: 'Comprehensive packages with doctor consultation. KPJ Health Screening, Pantai HealthScreening, Gleneagles Executive Screening.', badge: 'RM 300–800+', badgeColor: '#7c3aed' },
            { place: 'KPMC / GP Clinics', detail: 'Many private GPs offer bundled packages. Convenient — same doctor reviews results. Often cheaper than hospital packages for essentials.', badge: 'RM 80–250', badgeColor: '#d97706' },
          ].map(({ place, detail, badge, badgeColor }) => (
            <div key={place} className="bg-white rounded-xl p-3">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <p className="font-semibold text-ink text-[13px]">{place}</p>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{ background: `${badgeColor}15`, color: badgeColor }}>{badge}</span>
              </div>
              <p className="text-ink-secondary text-[12px] leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <p className="text-ink-tertiary text-[11px] mt-3">Always fast for 8–12 hours before lipid panel, FBS, and liver/kidney function tests. Bring your IC. Government screening is free but may require a morning appointment.</p>
      </div>

    </div>
  )
}

/* ─── Maternal Health ────────────────────────────────────────────── */

const ANTENATAL_TIMELINE = [
  {
    period: 'First Trimester',
    weeks: 'Weeks 1–13',
    color: '#16a34a',
    icon: '🌱',
    visits: [
      {
        week: 'Week 6–8',
        title: 'Booking / First Antenatal Visit',
        what: 'Register at Klinik Kesihatan (free) or private OB/GYN clinic. This is your most important early appointment.',
        tests: ['Full Blood Count (FBC)', 'Blood group & Rhesus factor', 'VDRL (syphilis screen)', 'HIV test', 'Hepatitis B surface antigen (HBsAg)', 'Rubella immunity (IgG)', 'Urine FEME + culture', 'Blood pressure & weight baseline'],
        actions: ['Start folic acid 400mcg daily (or 5mg if high-risk)', 'Start iron supplement', 'Discuss smoking, alcohol, medications', 'Book first ultrasound'],
      },
      {
        week: 'Week 8–10',
        title: 'Dating Ultrasound',
        what: 'Confirms pregnancy viability, gestational age, and number of foetuses. Crown-rump length (CRL) used to confirm due date.',
        tests: ['Transabdominal or transvaginal ultrasound', 'Foetal heartbeat confirmed', 'Gestational age calculated', 'Due date (EDD) established'],
        actions: ['Keep a record of your EDD', 'Discuss delivery hospital options with your doctor'],
      },
      {
        week: 'Week 11–13',
        title: 'First Trimester Screening (Optional)',
        what: 'Screens for chromosomal abnormalities (Down syndrome, Trisomy 18/13). Not mandatory but strongly recommended, especially for women 35+.',
        tests: ['Nuchal Translucency (NT) ultrasound — measures fluid at back of baby\'s neck', 'PAPP-A & free beta-hCG blood tests', 'NIPT (Non-Invasive Prenatal Test) — optional, higher accuracy, private only, RM 800–2,000'],
        actions: ['Discuss results with your OB/GYN — a "high risk" result warrants genetic counselling and possible amniocentesis', 'NIPT detects 99%+ of trisomy 21 with < 0.1% false positive rate'],
      },
    ],
  },
  {
    period: 'Second Trimester',
    weeks: 'Weeks 14–27',
    color: '#0891b2',
    icon: '🌿',
    visits: [
      {
        week: 'Week 14–16',
        title: 'Second Antenatal Visit',
        what: 'Routine check — blood pressure, weight, urine dipstick, foetal heart rate (Doppler). Review any first trimester results.',
        tests: ['Urine FEME', 'Blood pressure', 'Weight', 'Foetal heartbeat (Doppler)'],
        actions: ['Discuss any abnormal results from first trimester', 'Continue folic acid and iron', 'Avoid raw meat, soft cheese, high-mercury fish'],
      },
      {
        week: 'Week 18–22',
        title: 'Anatomy Scan (Mid-Pregnancy Ultrasound)',
        what: 'Detailed structural survey of the baby — brain, heart, spine, limbs, kidneys, face. Most comprehensive ultrasound in pregnancy. Baby\'s sex can be determined.',
        tests: ['4-chamber cardiac view', 'Brain (ventricles, cerebellum)', 'Spine, abdominal wall, kidneys, bladder', 'Limbs, face, lips', 'Placenta location, amniotic fluid level', 'Cervical length (risk of preterm birth)'],
        actions: ['Structural abnormalities detected here can be referred to a foetal medicine specialist', 'If placenta is low-lying (placenta praevia), repeat scan at 32 weeks'],
      },
      {
        week: 'Week 24–28',
        title: 'Gestational Diabetes Screening (OGTT)',
        what: 'Oral Glucose Tolerance Test. MOH Malaysia recommends this for ALL pregnant women. Detects gestational diabetes, which affects 1 in 5 Malaysian pregnancies.',
        tests: ['Fast for 8–10 hours (water only)', 'Blood drawn at 0, 1, and 2 hours after drinking 75g glucose solution', 'Normal: fasting < 5.1 mmol/L; 1hr < 10.0; 2hr < 8.5 mmol/L'],
        actions: ['If positive: dietary modification + blood glucose monitoring', 'Some cases require insulin — managed by obstetrician with endocrinologist', 'NIPT detects 99%+ of trisomy 21 with < 0.1% false positive rate'],
      },
    ],
  },
  {
    period: 'Third Trimester',
    weeks: 'Weeks 28–40',
    color: '#d97706',
    icon: '🌻',
    visits: [
      {
        week: 'Week 28',
        title: 'Third Trimester Check',
        what: 'Repeat blood tests to monitor for anaemia. Rhesus-negative mothers need anti-D immunoglobulin if the baby may be Rh positive.',
        tests: ['Repeat FBC (check for anaemia)', 'Repeat Hepatitis B if not immune', 'Anti-D immunoglobulin for Rh-negative mothers', 'Growth assessment', 'Blood pressure monitoring for pre-eclampsia'],
        actions: ['Increase iron intake if anaemic', 'Start kick count monitoring — ≥ 10 movements in 2 hours is reassuring', 'Discuss birth plan and pain relief options'],
      },
      {
        week: 'Week 32–34',
        title: 'Growth Scan',
        what: 'Checks baby\'s growth rate, estimated weight, amniotic fluid, and placental function. Not routine in all centres but recommended for high-risk pregnancies.',
        tests: ['Estimated foetal weight (EFW)', 'Amniotic Fluid Index (AFI)', 'Umbilical artery Doppler (blood flow)', 'Placental grading'],
        actions: ['Babies measuring < 10th percentile are referred to foetal medicine specialists', 'Discuss timing of delivery if IUGR (intrauterine growth restriction) is suspected'],
      },
      {
        week: 'Week 35–36',
        title: 'Pre-Delivery Checks',
        what: 'Confirm baby\'s presentation (head-down vs breech). Group B Streptococcus (GBS) screening. Begin discussions about labour signs and when to go to hospital.',
        tests: ['Foetal presentation scan', 'GBS vaginal/rectal swab (cultures at 35–37 weeks)', 'Cardiotocography (CTG) if high-risk', 'Cervical assessment if appropriate'],
        actions: ['If breech at 36 weeks: discuss External Cephalic Version (ECV) to turn baby', 'If GBS positive: IV antibiotics required during labour', 'Finalise birth plan, hospital bag, and transport to hospital'],
      },
      {
        week: 'Week 38–40',
        title: 'Weekly Visits Until Delivery',
        what: 'Weekly monitoring of blood pressure, foetal movements, and cervical ripening. Discuss induction if overdue (≥ 41 weeks).',
        tests: ['Blood pressure and urine (pre-eclampsia watch)', 'CTG (foetal heart rate monitoring)', 'Cervical dilation check', 'Foetal presentation confirm'],
        actions: ['If BP rises above 140/90 — go to hospital immediately (pre-eclampsia sign)', 'Know your labour signs: regular contractions, water breaking, bloody show', 'Go to hospital if < 10 foetal movements in 2 hours'],
      },
    ],
  },
]

const POSTNATAL_TIMELINE = [
  {
    period: 'In Hospital (Day 0–3)',
    color: '#16a34a',
    mother: ['Vital signs monitoring — BP, temperature, bleeding', 'Perineal wound or C-section wound care', 'Breastfeeding initiation and support from lactation consultant', 'Edinburgh Postnatal Depression Scale (EPDS) screening', 'Iron supplementation continued', 'Contraception counselling'],
    baby: ['APGAR score at 1 and 5 minutes', 'Vitamin K injection (prevents bleeding in newborn)', 'Hepatitis B — Dose 1 (within 24 hours of birth)', 'BCG vaccine (tuberculosis prevention)', 'Newborn hearing screening (OAE test)', 'Neonatal metabolic screening (Guthrie test — detects PKU, hypothyroidism, and other metabolic disorders)'],
  },
  {
    period: '1–2 Weeks After Discharge',
    color: '#0891b2',
    mother: ['Home visit by community health nurse (for KK patients)', 'Monitor for postnatal warning signs: fever, heavy bleeding, wound infection, leg pain (DVT)', 'Breastfeeding support — contact lactation consultant or LLLI Malaysia if needed', 'Rest — avoid heavy lifting for 6 weeks after C-section'],
    baby: ['Baby weigh-in at Klinik Kesihatan', 'Jaundice monitoring — yellowing of skin or eyes in first week (phototherapy if severe)', 'Feeding well — 8–12 feeds per day for breastfed newborns', 'Umbilical cord stump care (keep dry, falls off in 1–3 weeks)'],
  },
  {
    period: '6-Week Postnatal Check',
    color: '#7c3aed',
    mother: ['Full postnatal examination — uterus, wound, BP, weight', 'Cervical smear if due', 'Contraception prescription and counselling', 'Mental health screening — postnatal depression affects 1 in 7 Malaysian mothers', 'Return-to-exercise guidance'],
    baby: ['Growth check — weight, length, head circumference plotted on chart', 'Hepatitis B Dose 2', 'Developmental milestones check — eye contact, response to sound, feeding', 'Discuss childhood immunisation schedule'],
  },
]

const WARNING_SIGNS = [
  { sign: 'Severe headache with visual disturbances (flashing lights, blurred vision)', urgency: 'Emergency', detail: 'Could indicate pre-eclampsia. Go to A&E immediately. Check blood pressure.' },
  { sign: 'Sudden swelling of face, hands, or feet', urgency: 'Emergency', detail: 'Combined with high blood pressure may indicate pre-eclampsia. Do not wait for your next appointment.' },
  { sign: 'Vaginal bleeding at any stage', urgency: 'Emergency', detail: 'Any significant vaginal bleeding during pregnancy requires immediate assessment. Light spotting in first trimester can be normal — heavy bleeding is not.' },
  { sign: 'Decreased or absent foetal movement (after 24 weeks)', urgency: 'Urgent', detail: 'If you notice significantly reduced movements, lie on your left side and count movements for 2 hours. Less than 10 movements: go to hospital immediately.' },
  { sign: 'Severe abdominal pain or cramping', urgency: 'Emergency', detail: 'May indicate placental abruption, ectopic pregnancy (first trimester), or preterm labour.' },
  { sign: 'Water breaking (amniotic fluid leakage)', urgency: 'Urgent', detail: 'Go to hospital promptly. Note the time, colour, and amount. Clear fluid is normal. Green or brown-tinged fluid (meconium) requires immediate assessment.' },
  { sign: 'High fever (> 38°C) during pregnancy', urgency: 'Urgent', detail: 'Fever in pregnancy can harm the foetus. Seek medical care promptly. Do not self-medicate with NSAIDs (ibuprofen) — paracetamol is safer.' },
  { sign: 'Signs of postnatal depression (persistent sadness, inability to bond with baby, thoughts of self-harm)', urgency: 'Seek Help', detail: 'Postnatal depression is common and treatable. Tell your doctor or nurse honestly. Contact Befrienders Malaysia at 03-7627 2929 (24h) or seek your GP for a referral.' },
]

const DELIVERY_COSTS = [
  { type: 'Government Hospital', sector: 'public', normal: 'RM 50–200', csect: 'RM 100–500', note: 'Heavily subsidised. Free for Malaysian citizens in most public hospitals. Book through Klinik Kesihatan booking system.' },
  { type: 'University Hospital (UMMC, UKMMC)', sector: 'public', normal: 'RM 200–600', csect: 'RM 500–1,500', note: 'Academic hospitals. Subsidised but slightly higher than district hospitals. Antenatal care via specialist outpatient clinic.' },
  { type: 'FPP Ward at Government Hospital', sector: 'fpp', normal: 'RM 2,000–4,500', csect: 'RM 4,000–8,000', note: 'Private room, direct specialist care, same clinical team as subsidised ward. Apply at the hospital\'s FPP unit.' },
  { type: 'Private Hospital (Standard)', sector: 'private', normal: 'RM 3,500–7,000', csect: 'RM 8,000–14,000', note: 'KPJ, Columbia Asia, Tropicana Medical Centre, Pantai. Includes 2–3 day stay, standard room.' },
  { type: 'Private Hospital (Premium)', sector: 'private', normal: 'RM 5,000–10,000', csect: 'RM 12,000–20,000', note: 'Gleneagles, Prince Court, Sunway. Suite rooms, private nurse. Costs vary significantly by surgeon and room type.' },
]

const SECTOR_COLOR = { public: '#16a34a', fpp: '#0891b2', private: '#7c3aed' }

function MaternalSection() {
  const [trimester, setTrimester] = useState('First Trimester')
  const [openVisit, setOpenVisit] = useState(null)
  const [openPost, setOpenPost] = useState(null)
  const [openWarn, setOpenWarn] = useState(null)
  const [view, setView] = useState('antenatal')

  const period = ANTENATAL_TIMELINE.find(t => t.period === trimester)

  const Chevron = ({ open }) => (
    <svg className={`flex-shrink-0 text-ink-tertiary transition-transform ${open ? 'rotate-180' : ''}`}
      width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2 4.5l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  return (
    <div className="space-y-8">

      {/* View switcher */}
      <div className="flex flex-wrap gap-2">
        {[
          { v: 'antenatal', label: '🤰 Antenatal Care' },
          { v: 'postnatal', label: '👶 Postnatal Care' },
          { v: 'warnings',  label: '⚠️ Warning Signs' },
          { v: 'costs',     label: '💰 Delivery Costs' },
        ].map(({ v, label }) => (
          <button key={v} onClick={() => setView(v)}
            className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
              view === v ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
            }`}>{label}</button>
        ))}
      </div>

      {/* ── Antenatal ── */}
      {view === 'antenatal' && (
        <div className="space-y-6">
          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px] text-ink-secondary leading-relaxed">
            <strong className="text-ink">Minimum visits recommended by MOH Malaysia:</strong> 8 antenatal visits — at least 1 per trimester at Klinik Kesihatan (free). Private patients typically see their OB/GYN monthly until 28 weeks, fortnightly to 36 weeks, then weekly. More visits if complications arise.
          </div>

          {/* Trimester tabs */}
          <div className="flex flex-wrap gap-2">
            {ANTENATAL_TIMELINE.map(t => (
              <button key={t.period} onClick={() => { setTrimester(t.period); setOpenVisit(null) }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold border transition-colors ${
                  trimester === t.period ? 'text-white border-transparent' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
                }`}
                style={trimester === t.period ? { background: t.color, borderColor: t.color } : {}}>
                {t.icon} {t.period}
                <span className="text-[11px] opacity-70">{t.weeks}</span>
              </button>
            ))}
          </div>

          {period && (
            <div className="space-y-2">
              {period.visits.map((visit, i) => {
                const isOpen = openVisit === i
                return (
                  <div key={i} className="border border-ink-quaternary rounded-xl overflow-hidden" style={{ borderLeft: `3px solid ${period.color}` }}>
                    <button className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
                      onClick={() => setOpenVisit(isOpen ? null : i)}>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                            style={{ background: `${period.color}15`, color: period.color }}>{visit.week}</span>
                          <span className="font-semibold text-ink text-[13px]">{visit.title}</span>
                        </div>
                        {!isOpen && <p className="text-ink-tertiary text-[11px] mt-0.5 ml-0.5 line-clamp-1">{visit.what}</p>}
                      </div>
                      <Chevron open={isOpen} />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 border-t border-ink-quaternary pt-3 space-y-4">
                        <p className="text-ink-secondary text-[13px] leading-relaxed">{visit.what}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <div>
                            <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wide mb-2">Tests & Investigations</p>
                            <div className="space-y-1">
                              {visit.tests.map((t, ti) => (
                                <div key={ti} className="flex items-start gap-2 text-[12px] text-ink-secondary">
                                  <span className="text-brand mt-0.5 flex-shrink-0">•</span>{t}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wide mb-2">Actions / Notes</p>
                            <div className="space-y-1">
                              {visit.actions.map((a, ai) => (
                                <div key={ai} className="flex items-start gap-2 text-[12px] text-ink-secondary">
                                  <span className="text-emerald-600 mt-0.5 flex-shrink-0">✓</span>{a}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          {/* Vaccinations in pregnancy */}
          <div className="bg-surface-secondary rounded-2xl p-4">
            <h3 className="font-bold text-ink text-[14px] mb-2">💉 Vaccinations During Pregnancy</h3>
            <div className="space-y-2">
              {[
                { name: 'Tdap (Tetanus, Diphtheria, Pertussis)', timing: 'Week 27–36', note: 'Recommended every pregnancy. Protects your newborn from whooping cough (pertussis) before they can be vaccinated at 2 months. Free at government hospitals.' },
                { name: 'Influenza (Flu) Vaccine', timing: 'Any trimester', note: 'Safe and recommended throughout pregnancy. Reduces risk of flu-related complications for mother and protects newborn via maternal antibodies.' },
                { name: 'Tetanus Toxoid (TT)', timing: 'If not previously immunised', note: 'For women with incomplete TT immunisation. Assessed at booking visit.' },
                { name: 'COVID-19 Vaccine', timing: 'After first trimester', note: 'Recommended by MOH Malaysia. mRNA vaccines (Pfizer, Moderna) preferred. Reduces risk of severe illness. Discuss with your OB/GYN.' },
              ].map(v => (
                <div key={v.name} className="bg-white rounded-xl p-3">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <p className="font-semibold text-ink text-[13px]">{v.name}</p>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-brand/10 text-brand flex-shrink-0">{v.timing}</span>
                  </div>
                  <p className="text-ink-secondary text-[12px] leading-relaxed mt-1">{v.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Postnatal ── */}
      {view === 'postnatal' && (
        <div className="space-y-4">
          <p className="text-ink-secondary text-[13px] leading-relaxed max-w-[640px]">
            Postnatal care covers both mother and baby from delivery through the first 6 weeks. KK patients receive a home visit from a community health nurse within the first 2 weeks.
          </p>
          {POSTNATAL_TIMELINE.map((period, pi) => {
            const isOpen = openPost === pi
            return (
              <div key={pi} className="border border-ink-quaternary rounded-xl overflow-hidden" style={{ borderLeft: `3px solid ${period.color}` }}>
                <button className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
                  onClick={() => setOpenPost(isOpen ? null : pi)}>
                  <span className="font-semibold text-ink text-[14px]">{period.period}</span>
                  <Chevron open={isOpen} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 border-t border-ink-quaternary pt-3 grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wide mb-2">Mother</p>
                      <div className="space-y-1">
                        {period.mother.map((m, mi) => (
                          <div key={mi} className="flex items-start gap-2 text-[12px] text-ink-secondary">
                            <span style={{ color: period.color }} className="mt-0.5 flex-shrink-0">✓</span>{m}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wide mb-2">Baby</p>
                      <div className="space-y-1">
                        {period.baby.map((b, bi) => (
                          <div key={bi} className="flex items-start gap-2 text-[12px] text-ink-secondary">
                            <span className="text-brand mt-0.5 flex-shrink-0">•</span>{b}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-[13px]">
            <p className="font-bold text-amber-900 mb-2">Postnatal Depression — Know the Signs</p>
            <p className="text-amber-800 leading-relaxed">1 in 7 Malaysian mothers experiences postnatal depression (PND). It is different from "baby blues" (days 3–5 of tearfulness and mood swings, which resolve on their own). PND persists beyond 2 weeks and includes persistent sadness, anxiety, difficulty bonding with baby, sleep problems unrelated to baby's schedule, and in severe cases, thoughts of self-harm.</p>
            <p className="text-amber-700 text-[12px] mt-2"><strong>If you suspect PND:</strong> Tell your doctor or KK nurse honestly during the EPDS screen. It is treatable — counselling, support groups, and medication are all options. Contact Befrienders Malaysia: <strong>03-7627 2929</strong> (24h).</p>
          </div>
        </div>
      )}

      {/* ── Warning Signs ── */}
      {view === 'warnings' && (
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-[13px] text-red-800 leading-relaxed">
            <strong>Any of these signs requires immediate action.</strong> Do not wait for your next scheduled appointment. If in doubt — go to hospital A&E or call 999.
          </div>
          <div className="space-y-2">
            {WARNING_SIGNS.map((w, i) => {
              const isOpen = openWarn === i
              const urgencyColor = w.urgency === 'Emergency' ? '#dc2626' : w.urgency === 'Urgent' ? '#d97706' : '#7c3aed'
              return (
                <div key={i} className="border border-ink-quaternary rounded-xl overflow-hidden" style={{ borderLeft: `3px solid ${urgencyColor}` }}>
                  <button className="w-full flex items-center justify-between px-4 py-3.5 text-left hover:bg-surface-secondary transition-colors"
                    onClick={() => setOpenWarn(isOpen ? null : i)}>
                    <div className="flex items-center gap-3 flex-wrap pr-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{ background: `${urgencyColor}15`, color: urgencyColor }}>{w.urgency}</span>
                      <span className="font-semibold text-ink text-[13px]">{w.sign}</span>
                    </div>
                    <Chevron open={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-3 pt-1 border-t border-ink-quaternary">
                      <p className="text-ink-secondary text-[13px] leading-relaxed">{w.detail}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* ── Delivery Costs ── */}
      {view === 'costs' && (
        <div className="space-y-4">
          <p className="text-ink-secondary text-[13px] leading-relaxed max-w-[640px]">
            Estimated cost ranges for delivery in Malaysia (2024–2025). Costs vary by hospital, surgeon, length of stay, and complications. All figures are estimates — always request a written estimate before delivery.
          </p>
          <div className="space-y-2">
            {DELIVERY_COSTS.map(d => (
              <div key={d.type} className="border border-ink-quaternary rounded-2xl p-4" style={{ borderLeft: `3px solid ${SECTOR_COLOR[d.sector]}` }}>
                <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                  <p className="font-semibold text-ink text-[14px]">{d.type}</p>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full"
                    style={{ background: `${SECTOR_COLOR[d.sector]}15`, color: SECTOR_COLOR[d.sector] }}>
                    {d.sector === 'fpp' ? 'FPP' : d.sector}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <div className="bg-surface-secondary rounded-xl p-3 text-center">
                    <p className="text-[10px] font-semibold text-ink-secondary uppercase tracking-wide mb-0.5">Normal Delivery</p>
                    <p className="font-bold text-ink text-[14px]">{d.normal}</p>
                  </div>
                  <div className="bg-surface-secondary rounded-xl p-3 text-center">
                    <p className="text-[10px] font-semibold text-ink-secondary uppercase tracking-wide mb-0.5">C-Section</p>
                    <p className="font-bold text-ink text-[14px]">{d.csect}</p>
                  </div>
                </div>
                <p className="text-ink-secondary text-[12px] leading-relaxed">{d.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-surface-secondary rounded-2xl p-4 text-[12px] text-ink-secondary leading-relaxed">
            💡 <strong className="text-ink">Insurance tip:</strong> Maternity coverage requires a specific <strong>maternity rider</strong> — standard medical cards do not cover normal delivery or C-section. Most riders have a <strong>10–12 month waiting period</strong> from policy start. Buy before you plan to conceive. If already pregnant without a maternity rider, costs are entirely out of pocket.
          </div>
        </div>
      )}

    </div>
  )
}

/* ─── Medical & Insurance Reference (Consolidated) ───────────────── */

function GlossaryAndAbbreviationsSection() {
  return (
    <div>
      <GlossarySection />
      <div className="mt-10 pt-8 border-t border-ink-quaternary">
        <h3 className="text-[18px] font-bold text-ink mb-1">🔤 Hospital &amp; Medical Abbreviations</h3>
        <p className="text-ink-secondary text-[13px] mb-6">Common shorthand used in Malaysian hospitals, forms, and medical records — decoded.</p>
        <AbbreviationsSection />
      </div>
    </div>
  )
}

/* ─── Vaccination Guide ──────────────────────────────────────────── */

function VaccinationSection() {
  const [view, setView] = useState('schedule')
  const [ageGroup, setAgeGroup] = useState('infants')

  const VIEWS = [
    { id: 'schedule',  label: '📅 NIP Schedule' },
    { id: 'covid',     label: '🦠 COVID-19 & Flu' },
    { id: 'tropical',  label: '🦟 Dengue & Tropical' },
  ]

  const VACCINATION_SCHEDULE = {
    infants: {
      label: '👶 Infants (0–12 months)',
      color: '#16a34a',
      vaccines: [
        { age: 'At birth', vaccines: ['Hepatitis B (Dose 1)', 'BCG (TB protection)'], govt: 'Free', private: 'RM 50–100' },
        { age: '1 month', vaccines: ['Hepatitis B (Dose 2)', 'Polio (IPV 1)', 'Rotavirus (Dose 1)'], govt: 'Free', private: 'RM 80–150' },
        { age: '2 months', vaccines: ['DPT-Hib-HepB (Pentaxim Dose 1)', 'Pneumococcal (Dose 1)', 'Rotavirus (Dose 2)'], govt: 'Free', private: 'RM 150–250' },
        { age: '3 months', vaccines: ['DPT-Hib-HepB (Dose 2)', 'Polio (IPV 2)', 'Pneumococcal (Dose 2)'], govt: 'Free', private: 'RM 150–250' },
        { age: '4 months', vaccines: ['DPT-Hib-HepB (Dose 3)', 'Rotavirus (Dose 3)'], govt: 'Free', private: 'RM 100–150' },
        { age: '5–6 months', vaccines: ['Pneumococcal (Dose 3)', 'Polio (IPV 3)'], govt: 'Free', private: 'RM 80–120' },
        { age: '9 months', vaccines: ['Measles (Dose 1)', 'Japanese Encephalitis (JE Dose 1 — optional)'], govt: 'Free', private: 'RM 100–200' },
        { age: '12 months', vaccines: ['MMR (Dose 1)', 'Hepatitis A (optional)', 'Varicella/Chickenpox (optional)'], govt: 'Free', private: 'RM 100–250' },
      ],
    },
    toddlers: {
      label: '🧒 Toddlers (1–6 years)',
      color: '#0891b2',
      vaccines: [
        { age: '15–18 months', vaccines: ['DPT (Booster 1)', 'Polio (Booster 1)', 'Pneumococcal (Booster)'], govt: 'Free', private: 'RM 100–180' },
        { age: '18–24 months', vaccines: ['Hepatitis B (Booster)', 'Varicella (Chickenpox) Dose 2 — optional', 'Japanese Encephalitis (JE Dose 2 — optional)'], govt: 'Free', private: 'RM 80–150' },
        { age: '2 years', vaccines: ['Typhoid (Typhim Vi) — optional', 'Hepatitis A Dose 2 — optional'], govt: 'n/a', private: 'RM 100–180' },
        { age: '4–6 years', vaccines: ['DPT (Booster 2)', 'Polio (Booster 2)', 'MMR (Dose 2)'], govt: 'Free', private: 'RM 100–180' },
      ],
    },
    schoolage: {
      label: '🎒 School Age (7–17 years)',
      color: '#d97706',
      vaccines: [
        { age: '10–11 years', vaccines: ['Td Booster (Tetanus-Diphtheria)', 'Influenza (annual) — recommended'], govt: 'Free (school)', private: 'RM 50–100' },
        { age: '11–12 years (girls)', vaccines: ['HPV (Gardasil 4 or 9) — 2 doses, 6–12 months apart', 'Protects against cervical cancer and genital warts'], govt: 'Free (NIP, girls)', private: 'RM 400–800/course' },
        { age: '13 years', vaccines: ['Tdap (Booster)', 'Polio (if incomplete)'], govt: 'Free', private: 'RM 60–100' },
        { age: '15+ years', vaccines: ['Meningococcal (ACWY) — for hostel/boarding students', 'Typhoid booster every 2–3 years'], govt: 'Private only', private: 'RM 100–300' },
      ],
    },
    adults: {
      label: '👨 Adults (18+ years)',
      color: '#7c3aed',
      vaccines: [
        { age: 'Every 10 years', vaccines: ['Td (Tetanus-Diphtheria Booster)'], govt: 'Free', private: 'RM 40–80' },
        { age: 'Annually', vaccines: ['Influenza (Flu) Vaccine — strongly recommended for all adults', 'Especially important for 65+, pregnant, chronic illness, healthcare workers'], govt: 'Free for 65+ at KK', private: 'RM 50–120' },
        { age: '18+ (primary series)', vaccines: ['COVID-19 Vaccine — primary series + boosters per MOH guidance', 'Free only for priority groups (60+, immunocompromised, healthcare workers, pregnant); other adults pay out-of-pocket'], govt: 'Free for priority groups', private: 'RM 50–200' },
        { age: '50+ years', vaccines: ['Pneumococcal (PCV20 or PPSV23)', 'Shingles (Shingrix — 2 doses, preferred; or Zostavax)', 'Influenza (annual — free for 65+ at Klinik Kesihatan)'], govt: 'Limited coverage', private: 'RM 80–400' },
        { age: 'Special groups', vaccines: ['Hepatitis B (if unvaccinated)', 'Hepatitis A (travellers, food handlers)', 'Yellow Fever (travellers to Africa/South America — mandatory for some countries)', 'Rabies post-exposure (if animal bite)'], govt: 'Post-exposure/special', private: 'RM 50–350' },
      ],
    },
    pregnant: {
      label: '🤰 Pregnant Women',
      color: '#db2777',
      vaccines: [
        { age: 'Any trimester', vaccines: ['Influenza (Flu) Vaccine — safe and strongly recommended throughout pregnancy', 'Protects mother from flu complications and newborn via maternal antibodies'], govt: 'Free at KK', private: 'RM 50–120' },
        { age: 'Week 27–36', vaccines: ['Tdap (Tetanus-Diphtheria-Pertussis) — 1 dose per pregnancy', 'Protects newborn from whooping cough before their own vaccination at 2 months'], govt: 'Free at KK', private: 'RM 60–100' },
        { age: 'After 1st trimester', vaccines: ['COVID-19 Vaccine — recommended by MOH Malaysia', 'mRNA vaccines (Pfizer, Moderna) preferred; reduces severe disease risk'], govt: 'Free', private: 'Free' },
        { age: 'Avoid during pregnancy', vaccines: ['Live vaccines (MMR, Varicella, Yellow Fever, oral typhoid) are generally contraindicated', 'Discuss timing with your OB/GYN'], govt: 'n/a', private: 'Defer to postpartum' },
      ],
    },
  }

  const currentGroup = VACCINATION_SCHEDULE[ageGroup]

  const COVID_VACCINES = [
    { name: 'Pfizer-BioNTech (Comirnaty)', type: 'mRNA', doses: '2 primary + boosters', notes: 'Most widely used in Malaysia; current formulation targets the LP.8.1 Omicron sublineage (2025–26 season)', status: 'Available' },
    { name: 'Moderna (Spikevax)', type: 'mRNA', doses: '2 primary + boosters', notes: 'Available at most private clinics and hospitals; current formulation targets LP.8.1', status: 'Available' },
    { name: 'AstraZeneca (Vaxzevria)', type: 'Viral vector', doses: '2 primary doses', notes: 'Withdrawn worldwide by the manufacturer in May 2024 due to falling demand — no longer available', status: 'Discontinued' },
    { name: 'Sinovac (CoronaVac)', type: 'Inactivated', doses: '2 primary doses', notes: 'Used widely in the 2021–2022 phase; Pfizer/Moderna are now preferred for boosters', status: 'Phase out' },
  ]

  const TROPICAL_DISEASES = [
    {
      disease: 'Dengue Fever',
      icon: '🦟',
      color: '#dc2626',
      vaccine: 'Qdenga (TAK-003) vaccine available, ages 4–60. Full pricing, dosing, and a complete home-prevention guide: Lifestyle Hub → Dengue Prevention.',
      spread: 'Aedes aegypti mosquito bite (daytime biter)',
      symptoms: 'High fever, severe headache behind eyes, muscle/joint pain, skin rash 3–4 days after fever onset',
      risk: '~100,000+ cases/year in Malaysia; urban areas highest risk',
      emergency: 'Severe abdominal pain, persistent vomiting, bleeding gums/nose, blood in stool/urine → go to A&E immediately',
    },
    {
      disease: 'Influenza (Flu)',
      icon: '🤧',
      color: '#7c3aed',
      vaccine: 'Annual flu vaccine; new formulation each year. Free for 65+ at Klinik Kesihatan. RM 50–120 at private clinics. Quadrivalent vaccine covers 4 strains.',
      spread: 'Respiratory droplets; highly contagious. Peak seasons: rainy season (Oct–Feb) and school terms',
      symptoms: 'Sudden high fever, body aches, fatigue, dry cough, sore throat. Unlike common cold — starts very abruptly',
      risk: 'Malaysia reports 2,000–5,000 flu-related hospitalisations/year. High risk: pregnant, elderly, immunocompromised',
      emergency: 'Difficulty breathing, persistent chest pain, confusion, lips turning blue → call 999',
    },
    {
      disease: 'COVID-19',
      icon: '🦠',
      color: '#0891b2',
      vaccine: 'Primary series (2 doses mRNA) + boosters recommended by MOH. Current LP.8.1-targeted formulations free at Klinik Kesihatan for priority groups (60+, immunocompromised, healthcare workers, pregnant); others pay privately.',
      spread: 'Airborne (respiratory droplets and aerosols); close contact with infected person',
      symptoms: 'Fever, cough, shortness of breath, loss of taste/smell, fatigue. Omicron variants often milder in vaccinated individuals',
      risk: 'Long COVID (fatigue, brain fog, breathlessness >12 weeks) affects ~10% of infected. Vaccination significantly reduces long COVID risk',
      emergency: 'Difficulty breathing, SpO2 <95% on pulse oximeter, persistent chest pain, confusion → Hospital A&E',
    },
    {
      disease: 'Hand, Foot & Mouth Disease (HFMD)',
      icon: '✋',
      color: '#d97706',
      vaccine: 'EV71 vaccine (Sinovac Enterix or similar) — available at private clinics. RM 200–350/dose; 2 doses. Mainly for children 6 months–5 years.',
      spread: 'Direct contact with infected person\'s saliva, faeces, or blister fluid; highly contagious in childcare/kindergarten',
      symptoms: 'Fever, mouth sores (ulcers), rash/blisters on hands, feet, and buttocks. Usually mild and self-limiting in 7–10 days',
      risk: 'Cyclical outbreaks in Malaysia; peaks March–May and Sept–Nov. EV71 strain can cause rare neurological complications',
      emergency: 'Persistent vomiting, difficulty walking, neck stiffness, seizures, or limb weakness → Hospital A&E immediately',
    },
    {
      disease: 'Japanese Encephalitis (JE)',
      icon: '🌾',
      color: '#16a34a',
      vaccine: 'IXIARO (inactivated) — 2 doses 28 days apart. Recommended for travellers to rural/agricultural areas. RM 250–400/dose at private clinics.',
      spread: 'Culex mosquito (night biter); transmitted from pigs and birds. Rural/agricultural areas (Sabah, Sarawak, rural Peninsular)',
      symptoms: 'Most infections are mild or asymptomatic; severe cases — high fever, headache, neck stiffness, seizures, coma',
      risk: 'Endemic in rural Malaysia; low risk in urban areas. Travellers to rural areas, farm workers at higher risk',
      emergency: 'Any signs of encephalitis (altered consciousness, seizures, stiff neck with fever) → Hospital A&E',
    },
    {
      disease: 'Typhoid Fever',
      icon: '🌡️',
      color: '#64748b',
      vaccine: 'Typhim Vi (injectable) — 1 dose; booster every 2–3 years. RM 80–150 at private clinics. Vivotif (oral) also available. Recommended for travellers and food handlers.',
      spread: 'Contaminated food and water; poor sanitation. Risk increases when travelling to rural areas or less-developed regions',
      symptoms: 'Sustained high fever, weakness, stomach pain, headache, loss of appetite. Rose spots on trunk may appear',
      risk: 'Still endemic in parts of Malaysia. Food handlers, travellers to rural/endemic areas, and children at higher risk',
      emergency: 'High fever >39°C for >3 days, intestinal bleeding or perforation — seek medical care promptly',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Sub-view switcher */}
      <div className="flex flex-wrap gap-2">
        {VIEWS.map(v => (
          <button key={v.id} onClick={() => setView(v.id)}
            className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
              view === v.id ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
            }`}>
            {v.label}
          </button>
        ))}
      </div>

      {/* ── NIP Schedule ── */}
      {view === 'schedule' && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(VACCINATION_SCHEDULE).map(([key, val]) => (
              <button key={key} onClick={() => setAgeGroup(key)}
                className={`px-3 py-1.5 rounded-xl text-[12px] font-semibold border transition-colors ${
                  ageGroup === key ? 'text-white border-transparent' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
                }`}
                style={ageGroup === key ? { background: val.color, borderColor: val.color } : {}}>
                {val.label}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {currentGroup.vaccines.map((item, i) => (
              <div key={i} className="border border-ink-quaternary rounded-xl p-4" style={{ borderLeft: `3px solid ${currentGroup.color}` }}>
                <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${currentGroup.color}15`, color: currentGroup.color }}>{item.age}</span>
                </div>
                <div className="text-ink-secondary text-[12px] mb-2 space-y-1">
                  {item.vaccines.map((v, vi) => <div key={vi} className="flex items-start gap-2"><span className="flex-shrink-0 text-brand">•</span><span>{v}</span></div>)}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-surface-secondary rounded-lg p-2">
                    <p className="text-[10px] font-semibold text-ink-secondary uppercase tracking-wide">Government</p>
                    <p className="text-ink text-[12px] font-semibold">{item.govt}</p>
                  </div>
                  <div className="bg-surface-secondary rounded-lg p-2">
                    <p className="text-[10px] font-semibold text-ink-secondary uppercase tracking-wide">Private</p>
                    <p className="text-ink text-[12px] font-semibold">{item.private}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px] text-ink-secondary">
            <strong className="text-ink">💡 MOH NIP:</strong> Malaysia's National Immunisation Programme covers 12 core vaccines free at Klinik Kesihatan. Private clinics offer additional optional vaccines (Varicella, HPV for boys, Meningococcal, Dengue, HFMD). Check mysejahtera.gov.my for your vaccination records.
          </div>
        </div>
      )}

      {/* ── COVID-19 & Flu ── */}
      {view === 'covid' && (
        <div className="space-y-6">

          {/* COVID section */}
          <div>
            <h3 className="text-[17px] font-bold text-ink mb-1">🦠 COVID-19 Vaccination in Malaysia</h3>
            <p className="text-ink-secondary text-[13px] mb-2">Malaysia's national COVID-19 vaccination programme (PICK) vaccinated over 27 million Malaysians. COVID-19 has since moved to a targeted, largely paid booster model — free boosters are now reserved for priority/high-risk groups, not the general public.</p>
            <div className="mb-4"><LastVerified date="July 2026" note="vaccine formulations and eligibility change seasonally" /></div>

            <div className="space-y-2 mb-5">
              {COVID_VACCINES.map((v, i) => (
                <div key={i} className="border border-ink-quaternary rounded-xl p-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                    <p className="font-bold text-ink text-[13px]">{v.name}</p>
                    <div className="flex gap-2">
                      <span className="text-[11px] bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">{v.type}</span>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full border ${v.status === 'Available' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : v.status === 'Discontinued' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>{v.status}</span>
                    </div>
                  </div>
                  <p className="text-ink-secondary text-[11px]"><strong>Doses:</strong> {v.doses}</p>
                  <p className="text-ink-secondary text-[11px]">{v.notes}</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'Who should get boosted?', items: ['Adults 60+: strongly recommended annually', 'Immunocompromised individuals (any age)', 'Healthcare workers', 'Pregnant women (after 1st trimester)', 'Those with chronic conditions (diabetes, heart disease, lung disease)'] },
                { title: 'Where to get COVID vaccine in Malaysia', items: ['Free at Klinik Kesihatan and government hospitals — priority groups only (60+, immunocompromised, healthcare workers, pregnant)', 'Book via MySejahtera App or walk-in', 'Private: Caring Pharmacy, Alpro, hospital vaccination centres (RM 50–200) — general public pays here', 'Pfizer and Moderna current formulations target the LP.8.1 sublineage (2025–26 season)'] },
              ].map((box, i) => (
                <div key={i} className="bg-surface-secondary rounded-xl p-4">
                  <p className="font-bold text-ink text-[13px] mb-2">{box.title}</p>
                  <ul className="space-y-1">
                    {box.items.map((item, j) => (
                      <li key={j} className="text-ink-secondary text-[12px] flex items-start gap-2">
                        <span className="flex-shrink-0 text-brand">•</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Influenza section */}
          <div className="border-t border-ink-quaternary pt-6">
            <h3 className="text-[17px] font-bold text-ink mb-1">🤧 Influenza (Flu) Vaccination</h3>
            <p className="text-ink-secondary text-[13px] mb-4">Influenza kills thousands in Malaysia each year — mostly elderly and those with chronic illness. A new flu vaccine is formulated every year to match circulating strains.</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="border border-ink-quaternary rounded-xl p-4">
                <p className="font-bold text-ink text-[13px] mb-2">Flu vaccine basics</p>
                <ul className="space-y-1">
                  {[
                    'Quadrivalent vaccine covers 4 influenza strains (2 A + 2 B)',
                    'Reformulated annually — last year\'s vaccine may not cover this year\'s strain',
                    'Best time to vaccinate: before rainy season (Sept–Oct) or any time',
                    'Takes 2 weeks to build immunity after vaccination',
                    'Duration of protection: ~6–12 months',
                  ].map((item, i) => (
                    <li key={i} className="text-ink-secondary text-[12px] flex items-start gap-2">
                      <span className="flex-shrink-0 text-brand">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-ink-quaternary rounded-xl p-4">
                <p className="font-bold text-ink text-[13px] mb-2">Who should get flu vaccine</p>
                <ul className="space-y-1">
                  {[
                    '✅ Everyone 6 months+ (annual)',
                    '🔴 Priority: 65+ (free at KK under NIP)',
                    '🔴 Priority: Pregnant women (any trimester)',
                    '🔴 Priority: Children 6 months–8 years (2 doses first time)',
                    '🔴 Priority: Healthcare workers (annual)',
                    '🔴 Priority: Chronic conditions (diabetes, asthma, heart, kidney)',
                    'Cost at private clinics: RM 50–120',
                  ].map((item, i) => (
                    <li key={i} className="text-ink-secondary text-[12px] flex items-start gap-2">
                      <span className="flex-shrink-0">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-[12px]">
              <p className="font-bold text-amber-900 mb-1">Flu vs Common Cold vs COVID-19</p>
              <div className="overflow-x-auto">
                <table className="w-full text-[11px] mt-1">
                  <thead><tr className="text-amber-900 font-semibold"><td className="pr-3 py-1">Feature</td><td className="pr-3 py-1">Flu</td><td className="pr-3 py-1">Common Cold</td><td className="py-1">COVID-19</td></tr></thead>
                  <tbody>
                    {[
                      ['Onset', 'Sudden (hours)', 'Gradual (days)', 'Varies'],
                      ['Fever', 'High (38–40°C)', 'Rare/mild', 'Common'],
                      ['Body aches', 'Severe', 'Mild', 'Common'],
                      ['Fatigue', 'Extreme', 'Mild', 'Extreme'],
                      ['Loss of smell/taste', 'Rare', 'Rare', 'Common'],
                      ['Duration', '5–7 days', '7–10 days', '7–14+ days'],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'text-amber-800' : 'text-amber-700'}>
                        {row.map((cell, j) => <td key={j} className="pr-3 py-0.5 font-medium">{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Dengue & Tropical ── */}
      {view === 'tropical' && (
        <div className="space-y-5">
          <p className="text-ink-secondary text-[13px]">Malaysia's tropical climate makes it home to several infectious diseases beyond the NIP schedule. Understanding these helps you protect yourself and your family.</p>
          {TROPICAL_DISEASES.map((d, i) => (
            <div key={i} className="border border-ink-quaternary rounded-2xl overflow-hidden">
              <div className="px-5 py-4 flex items-center gap-3" style={{ background: `${d.color}08`, borderBottom: `1px solid ${d.color}20` }}>
                <span className="text-[22px]">{d.icon}</span>
                <h4 className="font-bold text-ink text-[15px]">{d.disease}</h4>
              </div>
              <div className="px-5 py-4 grid sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] font-semibold text-ink-secondary uppercase tracking-wide mb-1">How it spreads</p>
                    <p className="text-[12px] text-ink">{d.spread}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-ink-secondary uppercase tracking-wide mb-1">Symptoms</p>
                    <p className="text-[12px] text-ink">{d.symptoms}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-ink-secondary uppercase tracking-wide mb-1">Malaysian risk</p>
                    <p className="text-[12px] text-ink">{d.risk}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-brand/5 border border-brand/20 rounded-xl p-3">
                    <p className="text-[10px] font-semibold text-brand uppercase tracking-wide mb-1">💉 Vaccine / Prevention</p>
                    <p className="text-[12px] text-ink-secondary">{d.vaccine}</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                    <p className="text-[10px] font-semibold text-red-700 uppercase tracking-wide mb-1">🚨 Emergency signs</p>
                    <p className="text-[12px] text-red-800">{d.emergency}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Children's Healthcare Guide ────────────────────────────────── */

function ChildrenSection() {
  const [childTab, setChildTab] = useState('milestones')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-ink-quaternary pb-4">
        <button onClick={() => setChildTab('milestones')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            childTab === 'milestones' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>📈 Growth & Milestones</button>
        <button onClick={() => setChildTab('common-issues')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            childTab === 'common-issues' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>🤒 Common Illnesses</button>
        <button onClick={() => setChildTab('nutrition')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            childTab === 'nutrition' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>🍎 Nutrition</button>
        <button onClick={() => setChildTab('when-to-see')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            childTab === 'when-to-see' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>🏥 When to See a Doctor</button>
      </div>

      {childTab === 'milestones' && (
        <div className="space-y-4">
          <p className="text-ink-secondary text-[13px]">Children develop at different rates. These are typical ranges — discuss concerns with your paediatrician.</p>
          {[
            { month: '0–3 months', milestones: ['Fixes gaze & follows objects', 'Smiles socially (6 weeks)', 'Lifts head briefly when on belly', 'Startles at loud sounds'] },
            { month: '4–6 months', milestones: ['Rolls over (one direction)', 'Sits with support', 'Babbles (ba, ma, da)', 'Reaches for objects', 'Puts objects in mouth'] },
            { month: '7–12 months', milestones: ['Sits without support', 'Stands with help', 'Crawls or scoots', 'Says first words (mama, dada)', 'Waves goodbye'] },
            { month: '1–2 years', milestones: ['Walks alone', 'Climbs stairs with help', 'Points to pictures', 'Vocabulary: 10–50 words', 'Follows simple instructions'] },
            { month: '2–3 years', milestones: ['Runs & jumps', 'Kicks a ball', 'Combines 2–3 words', 'Shows interest in toilet training', 'Plays alongside other children'] },
            { month: '3–5 years', milestones: ['Pedals a tricycle', 'Copies a cross', 'Understands 3–4 part instructions', 'Knows first & last name', 'Engages in imaginative play'] },
          ].map((item, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4">
              <p className="font-semibold text-ink text-[14px] mb-2">{item.month}</p>
              <ul className="space-y-1">
                {item.milestones.map((m, mi) => (
                  <li key={mi} className="flex items-start gap-2 text-[13px] text-ink-secondary">
                    <span className="text-brand flex-shrink-0 mt-0.5">✓</span> {m}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {childTab === 'common-issues' && (
        <div className="space-y-3">
          {[
            { illness: 'Fever', cause: 'Normal in viral infections; body\'s defence mechanism', when: 'See doctor if > 38.5°C, persistent > 5 days, or with severe symptoms', home: 'Paracetamol or ibuprofen; light clothing; cool bath; plenty of fluids' },
            { illness: 'Cough & Cold', cause: 'Viral, rarely bacterial. Usually self-limiting', when: 'Seek help if: wheezing, difficulty breathing, cough > 2 weeks, green/yellow phlegm', home: 'Fluids, honey (age > 1 yr), steam inhalation; avoid antibiotics' },
            { illness: 'Diarrhoea', cause: 'Viral or bacterial; food poisoning; poor hygiene', when: 'See doctor if: bloody stools, extreme weakness, dehydration signs, fever > 38.5°C', home: 'ORS (oral rehydration salts) solution; continue breastfeeding if applicable' },
            { illness: 'Vomiting', cause: 'Viral gastroenteritis, overeating, motion sickness', when: 'Seek help if: persistent > 4 hours, blood in vomit, severe dehydration, abdominal pain', home: 'Small frequent feeds; ORS; rest stomach; monitor hydration' },
            { illness: 'Rashes', cause: 'Viral (measles, chickenpox), allergies, heat rash, eczema', when: 'See doctor if: fever + rash, rapid spread, blistering, intense itching, difficulty breathing', home: 'Keep clean & dry; calamine lotion; avoid scratching; antihistamines if allergic' },
            { illness: 'Ear Infections', cause: 'Viral or bacterial; blocked eustachian tube', when: 'See doctor if: ear pain > 48 hrs, discharge, fever, hearing loss', home: 'Pain relief (paracetamol); warm compress; observe for improvement' },
          ].map((item, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4">
              <p className="font-semibold text-ink text-[14px] mb-2">🤒 {item.illness}</p>
              <div className="space-y-2 text-[13px]">
                <div><strong className="text-ink-secondary">Cause:</strong> <span className="text-ink-tertiary">{item.cause}</span></div>
                <div><strong className="text-ink-secondary">When to see doctor:</strong> <span className="text-ink-tertiary">{item.when}</span></div>
                <div><strong className="text-ink-secondary">Home care:</strong> <span className="text-ink-tertiary">{item.home}</span></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {childTab === 'nutrition' && (
        <div className="space-y-3">
          {[
            { age: '0–6 months', feed: 'Exclusive breastfeeding recommended. If formula: follow WHO guidelines (6 scoops : 1 oz water)' },
            { age: '6 months onwards', feed: 'Introduce iron-fortified cereal, pureed fruits/veg, then soft finger foods. Continue breastfeeding until 2 years (WHO)' },
            { age: '1–3 years', feed: 'Family foods (soft, no added salt/sugar). Whole milk 350–500 ml/day. Avoid honey (botulism risk < 1yr), choking hazards, peanuts' },
            { age: '3–5 years', feed: '3 balanced meals + 2 healthy snacks. Include protein (eggs, fish, legumes), whole grains, fruits, veg, dairy. Limit sugary drinks' },
          ].map((item, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4">
              <p className="font-semibold text-ink text-[14px] mb-2">🍎 {item.age}</p>
              <p className="text-ink-secondary text-[13px]">{item.feed}</p>
            </div>
          ))}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-[13px]">
            <strong className="text-amber-900">⚠️ Common Choking Hazards:</strong>
            <p className="text-amber-800 mt-1">Avoid until age 4+: whole peanuts, popcorn, grapes (halve them), hard candy, hot dogs (chop lengthwise), raw apple pieces</p>
          </div>
        </div>
      )}

      {childTab === 'when-to-see' && (
        <div className="space-y-2">
          {[
            { severity: '🚨 EMERGENCY', signs: ['Difficulty breathing or wheezing', 'Unconsciousness or unresponsiveness', 'Severe allergic reaction (hives, throat swelling)', 'Seizures or convulsions', 'Suspected poisoning'], action: 'Go to A&E immediately or call 999' },
            { severity: '⚠️ URGENT (same day)', signs: ['High fever > 39°C', 'Severe headache + fever + neck stiffness (meningitis)', 'Persistent vomiting (unable to keep fluids)', 'Severe diarrhoea with dehydration signs', 'Rash that doesn\'t blanch (press it)'], action: 'Seek medical attention within hours' },
            { severity: '👨‍⚕️ ROUTINE (within days)', signs: ['Fever 38–38.5°C lasting > 3 days', 'Cough > 1 week', 'Ear pain lasting > 48 hrs', 'Rash without fever', 'Developmental concerns'], action: 'Call clinic for appointment' },
          ].map((item, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4">
              <p className="font-bold text-ink text-[14px] mb-2">{item.severity}</p>
              <ul className="space-y-1 mb-3">
                {item.signs.map((sign, si) => (
                  <li key={si} className="text-[13px] text-ink-secondary flex items-start gap-2">
                    <span className="flex-shrink-0 mt-0.5">•</span> {sign}
                  </li>
                ))}
              </ul>
              <p className="text-[13px] font-semibold text-ink">{item.action}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Elderly & OKU Care ─────────────────────────────────────────── */

function ElderlySection() {
  const [elderlyTab, setElderlyTab] = useState('screening')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-ink-quaternary pb-4">
        <button onClick={() => setElderlyTab('screening')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            elderlyTab === 'screening' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>🩺 Screening & Prevention</button>
        <button onClick={() => setElderlyTab('chronic')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            elderlyTab === 'chronic' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>💊 Chronic Disease Management</button>
        <button onClick={() => setElderlyTab('mobility')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            elderlyTab === 'mobility' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>🚶 Mobility & Falls Prevention</button>
        <button onClick={() => setElderlyTab('mental')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            elderlyTab === 'mental' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>🧠 Cognitive Health</button>
      </div>

      {elderlyTab === 'screening' && (
        <div className="space-y-3">
          <p className="text-ink-secondary text-[13px]">Recommended screening tests for adults 60+ (annually or as advised by doctor)</p>
          {[
            { test: 'Blood Pressure Monitoring', why: 'Detect hypertension; target < 130/80 mmHg', freq: 'At every visit (KK or clinic)' },
            { test: 'Fasting Blood Sugar & HbA1c', why: 'Screen for diabetes; common in aging population', freq: 'Annually if normal; 3–6 monthly if diabetic' },
            { test: 'Lipid Profile', why: 'Assess cardiovascular risk', freq: 'Annually' },
            { test: 'Full Blood Count (FBC)', why: 'Detect anaemia, infections', freq: 'Annually' },
            { test: 'Liver & Kidney Function Tests', why: 'Monitor organ health; critical before starting medications', freq: 'Annually' },
            { test: 'Bone Density Scan (DEXA)', why: 'Detect osteoporosis; fracture risk', freq: 'Once baseline, repeat every 2–3 years if abnormal' },
            { test: 'Cancer Screening', why: 'Cervical (women < 65), Colorectal, Breast (women)', freq: 'Per MOH Malaysia guidelines' },
            { test: 'Vision & Hearing Checks', why: 'Detect cataracts, glaucoma, hearing loss', freq: 'Annually' },
            { test: 'Falls Risk Assessment', why: 'Assess balance, strength, medication effects', freq: 'Annually or if recurrent falls' },
          ].map((item, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4">
              <p className="font-semibold text-ink text-[13px] mb-1">{item.test}</p>
              <p className="text-ink-secondary text-[12px] mb-1"><strong>Why:</strong> {item.why}</p>
              <p className="text-ink-tertiary text-[12px]"><strong>Frequency:</strong> {item.freq}</p>
            </div>
          ))}
        </div>
      )}

      {elderlyTab === 'chronic' && (
        <div className="space-y-3">
          {[
            { condition: 'Hypertension (High Blood Pressure)', goals: 'Target BP < 130/80 mmHg (or 140/90 if very elderly)', meds: 'ACE inhibitors, ARBs, calcium channel blockers, diuretics', lifestyle: 'Salt restriction, weight loss, exercise, reduce stress', risks: 'Stroke, heart attack, kidney disease' },
            { condition: 'Diabetes Type 2', goals: 'HbA1c target 6.5–7%; fasting glucose 5–7 mmol/L', meds: 'Metformin, sulfonylureas, DPP-4 inhibitors, insulins', lifestyle: 'Low-sugar diet, regular movement, weight management', risks: 'Eye damage (retinopathy), kidney disease, neuropathy' },
            { condition: 'High Cholesterol', goals: 'LDL < 1.8–2.6 mmol/L (depends on risk)', meds: 'Statins (atorvastatin, simvastatin), ezetimibe', lifestyle: 'Reduce saturated fats, plant sterols, exercise', risks: 'Heart attack, stroke, atherosclerosis' },
            { condition: 'Osteoporosis', goals: 'Prevent fractures; improve bone density', meds: 'Bisphosphonates (alendronate), calcium, Vitamin D', lifestyle: 'Weight-bearing exercise, adequate calcium/Vit D intake', risks: 'Hip, spine, wrist fractures; disability' },
          ].map((item, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4">
              <p className="font-semibold text-ink text-[14px] mb-2">{item.condition}</p>
              <div className="space-y-1 text-[12px]">
                <p><strong className="text-ink-secondary">Goals:</strong> <span className="text-ink-tertiary">{item.goals}</span></p>
                <p><strong className="text-ink-secondary">Medications:</strong> <span className="text-ink-tertiary">{item.meds}</span></p>
                <p><strong className="text-ink-secondary">Lifestyle:</strong> <span className="text-ink-tertiary">{item.lifestyle}</span></p>
                <p><strong className="text-ink-secondary">If untreated:</strong> <span className="text-red-600">{item.risks}</span></p>
              </div>
            </div>
          ))}
        </div>
      )}

      {elderlyTab === 'mobility' && (
        <div className="space-y-3">
          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px]">
            <strong className="text-ink">Falls are a major cause of disability in elderly.</strong> 1 in 4 Malaysians 60+ fall annually; most are preventable.
          </div>
          <div className="space-y-2">
            {[
              { risk: 'Weak leg muscles', prevention: 'Strength training 2–3×/week (squats, steps); balance exercises (tai chi, standing on one leg)' },
              { risk: 'Poor balance or dizziness', prevention: 'Check blood pressure lying & standing; review medications; vitamin B12 levels' },
              { risk: 'Medication side effects', prevention: 'Review all meds with doctor; some increase fall risk (sedatives, blood pressure meds)' },
              { risk: 'Poor vision', prevention: 'Annual eye check; update glasses; adequate lighting at home' },
              { risk: 'Tripping hazards', prevention: 'Remove loose rugs, secure cables, non-slip mats in bathroom, adequate handrails' },
              { risk: 'Footwear', prevention: 'Wear proper shoes with grip; avoid loose slippers or high heels' },
              { risk: 'Home hazards', prevention: 'Single-step modifications: grab bars, raised toilet seats, shower chairs' },
            ].map((item, i) => (
              <div key={i} className="border border-ink-quaternary rounded-xl p-3">
                <p className="font-semibold text-ink text-[13px] mb-1">⚠️ {item.risk}</p>
                <p className="text-ink-secondary text-[12px]">{item.prevention}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {elderlyTab === 'mental' && (
        <div className="space-y-3">
          {[
            { issue: 'Mild Cognitive Impairment (MCI)', signs: 'Occasional memory lapses; difficulty with complex tasks; but independent in daily activities', what: 'See neurologist if progressive; cognitive stimulation helps; memory games, reading, learning new skills' },
            { issue: 'Dementia (Alzheimer\'s)', signs: 'Progressive memory loss; difficulty with familiar tasks; confusion about time/place', what: 'Early diagnosis crucial; medications (memantine, donepezil); cognitive therapy; caregiver support essential' },
            { issue: 'Depression', signs: 'Persistent sadness, fatigue, social withdrawal, loss of interest in hobbies', what: 'Common but treatable; antidepressants + therapy; exercise helps; talk to doctor' },
            { issue: 'Sleep Problems', signs: 'Insomnia, frequent nighttime waking, excessive daytime sleepiness', what: 'Sleep hygiene (regular bedtime, avoid caffeine); check for sleep apnea; avoid sleeping tablets if possible' },
          ].map((item, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4">
              <p className="font-semibold text-ink text-[14px] mb-2">🧠 {item.issue}</p>
              <p className="text-ink-secondary text-[12px] mb-2"><strong>Signs:</strong> {item.signs}</p>
              <p className="text-ink-secondary text-[12px]"><strong>What to do:</strong> {item.what}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Mental Health Resources ────────────────────────────────────── */

function MentalHealthSection() {
  const [mentalTab, setMentalTab] = useState('conditions')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-ink-quaternary pb-4">
        <button onClick={() => setMentalTab('conditions')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            mentalTab === 'conditions' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>🧠 Common Conditions</button>
        <button onClick={() => setMentalTab('support')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            mentalTab === 'support' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>💬 Getting Help</button>
        <button onClick={() => setMentalTab('crisis')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            mentalTab === 'crisis' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>🆘 Crisis Resources</button>
      </div>

      {mentalTab === 'conditions' && (
        <div className="space-y-3">
          {[
            { condition: 'Depression', signs: 'Persistent sadness, hopelessness, fatigue, difficulty concentrating, changes in sleep/appetite, loss of interest', treatment: 'Antidepressants (SSRIs, SNRIs) + counselling; therapy; lifestyle changes (exercise, social support)' },
            { condition: 'Anxiety Disorders', signs: 'Excessive worry, panic attacks, physical symptoms (racing heart, sweating, trembling), avoidance behaviours', treatment: 'Cognitive-Behavioral Therapy (CBT); antidepressants (SSRIs); relaxation techniques; breathing exercises' },
            { condition: 'Bipolar Disorder', signs: 'Extreme mood swings: periods of high energy/euphoria (mania) alternating with depression', treatment: 'Mood stabilizers (lithium, valproate); antipsychotics; careful med management; therapy; regular sleep' },
            { condition: 'Schizophrenia', signs: 'Hallucinations (hearing voices), delusions, disorganized thinking, withdrawal from social activities', treatment: 'Antipsychotic medications; psychotherapy; family support; rehabilitation programs' },
            { condition: 'Post-Traumatic Stress Disorder (PTSD)', signs: 'Intrusive memories, nightmares, flashbacks, hypervigilance, avoidance of trauma reminders', treatment: 'Trauma-focused CBT; EMDR; antidepressants; graded exposure therapy' },
            { condition: 'Obsessive-Compulsive Disorder (OCD)', signs: 'Intrusive unwanted thoughts (obsessions); repetitive behaviors (compulsions) to reduce anxiety', treatment: 'Exposure and Response Prevention (ERP) therapy; SSRIs; may take months to see improvement' },
          ].map((item, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4">
              <p className="font-semibold text-ink text-[14px] mb-2">{item.condition}</p>
              <p className="text-ink-secondary text-[12px] mb-2"><strong>Signs:</strong> {item.signs}</p>
              <p className="text-ink-secondary text-[12px]"><strong>Treatment:</strong> {item.treatment}</p>
            </div>
          ))}
        </div>
      )}

      {mentalTab === 'support' && (
        <div className="space-y-3">
          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px]">
            <strong className="text-ink">Mental health is health.</strong> Seeking help is a sign of strength, not weakness. Treatment works.
          </div>
          {[
            { service: 'Government Clinics (Klinik Kesihatan)', coverage: 'Free or subsidised mental health screening & basic counselling', note: 'Book appointment; referral to psychiatrist at public hospital if needed (waiting list may be long)' },
            { service: 'University Hospital Psychiatry Departments', coverage: 'Government-subsidised psychiatric care, therapy', note: 'Referral from doctor; can take months to get appointment' },
            { service: 'Private Psychiatrists & Counsellors', coverage: 'Mental health assessment, medications, therapy (varies by provider)', note: 'Usually RM 150–400/session; insurance may cover with rider' },
            { service: 'NGOs & Counselling Services', coverage: 'Low-cost or free counselling, support groups, crisis support', note: 'Befrienders Malaysia, Malaysian Mental Health Association (MMHA), Suara Equality' },
            { service: 'Online Therapy Platforms', coverage: 'Licensed therapists via video call (varies by service)', note: 'Mindvalley, Talkspace (if available in Malaysia); privacy depends on platform' },
          ].map((item, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4">
              <p className="font-semibold text-ink text-[14px] mb-1">{item.service}</p>
              <p className="text-ink-secondary text-[12px] mb-1"><strong>What:</strong> {item.coverage}</p>
              <p className="text-ink-tertiary text-[12px]">{item.note}</p>
            </div>
          ))}
        </div>
      )}

      {mentalTab === 'crisis' && (
        <div className="space-y-3">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-[13px] text-red-800">
            <strong>If you are having thoughts of self-harm or suicide, please reach out immediately. You are not alone.</strong>
          </div>
          {[
            { service: 'Befrienders Malaysia', number: '03-7627 2929 (24/7)', note: 'Free, confidential, trained counsellors; also SMS at 60000' },
            { service: 'Relate Malaysia', number: '017-262 4444 (24/7)', note: 'Crisis support, trauma counselling' },
            { service: 'Samaritans Malaysia', number: '1800-20-6161 (24/7)', note: 'Suicide & mental health crisis support' },
            { service: 'Police Emergency', number: '999 or 112', note: 'For immediate danger; police can arrange urgent psychiatric admission' },
            { service: 'Hospital A&E / Accident & Emergency Department', number: 'Go directly to any government hospital', note: 'Psychiatric emergency assessment; mental health ward admission if needed' },
          ].map((item, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4" style={{ borderLeft: `3px solid #dc2626` }}>
              <p className="font-bold text-ink text-[14px]">{item.service}</p>
              <p className="text-[13px] font-semibold text-ink-secondary mt-1">{item.number}</p>
              <p className="text-ink-tertiary text-[12px] mt-1">{item.note}</p>
            </div>
          ))}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-[13px]">
            <p className="text-amber-900"><strong>💡 Recovery is possible.</strong> Many people with mental health conditions live full, meaningful lives with proper support and treatment. Take it one day at a time.</p>
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── How to Read Medical Reports ────────────────────────────────── */

function MedicalReportSection() {
  const [reportTab, setReportTab] = useState('bloodwork')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-ink-quaternary pb-4">
        <button onClick={() => setReportTab('bloodwork')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            reportTab === 'bloodwork' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>🧪 Blood Tests</button>
        <button onClick={() => setReportTab('imaging')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            reportTab === 'imaging' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>📸 Imaging (X-Ray, Scan)</button>
        <button onClick={() => setReportTab('diagnosis')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            reportTab === 'diagnosis' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>📝 Diagnosis</button>
        <button onClick={() => setReportTab('prescription')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            reportTab === 'prescription' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>💊 Prescription</button>
      </div>

      {reportTab === 'bloodwork' && (
        <div className="space-y-3">
          <p className="text-ink-secondary text-[13px]">What to look for on your blood test report:</p>
          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px]">
            <p className="text-ink mb-2"><strong>Three key things:</strong></p>
            <ol className="space-y-1 text-ink-secondary list-decimal list-inside">
              <li><strong>Test name</strong> — what was measured (e.g. Total Cholesterol, HbA1c)</li>
              <li><strong>Your result</strong> — the actual value (e.g. 5.2 mmol/L)</li>
              <li><strong>Reference range</strong> — what's "normal" (e.g. &lt; 5.2 mmol/L is desirable). Usually has "L" (Low), "N" (Normal), "H" (High) flag</li>
            </ol>
          </div>
          <div className="space-y-2">
            {[
              { test: 'FBC (Full Blood Count)', whatitis: 'Checks red cells, white cells, platelets', read: 'Hemoglobin (Hb) 12–16 g/dL (women), 13.5–17.5 (men). Low = anaemia. WBC 4–11 K/uL; high = infection/stress' },
              { test: 'Fasting Glucose (FBS)', whatitis: 'Blood sugar level (must be fasted)', read: 'Normal < 5.6 mmol/L; Pre-diabetes 5.6–6.9; Diabetes ≥ 7.0 mmol/L' },
              { test: 'HbA1c', whatitis: 'Average blood sugar over 2–3 months', read: 'Normal < 5.7%; Pre-diabetes 5.7–6.4%; Diabetes ≥ 6.5%' },
              { test: 'Total Cholesterol', whatitis: 'All cholesterol in blood', read: 'Desirable < 5.2 mmol/L. High ≥ 6.2 mmol/L increases heart disease risk' },
              { test: 'LDL ("Bad" Cholesterol)', whatitis: 'Clogs arteries; lower is better', read: 'Optimal < 2.6 mmol/L. High ≥ 4.1 mmol/L may need medication' },
              { test: 'Liver Function (ALT, AST)', whatitis: 'Liver enzyme levels', read: 'ALT/AST < 40 U/L normal. High may indicate hepatitis, fatty liver, or medication toxicity' },
              { test: 'Kidney Function (Creatinine, eGFR)', whatitis: 'Kidney filtration ability', read: 'Creatinine < 106 μmol/L normal; eGFR > 60 mL/min normal kidney function' },
            ].map((item, i) => (
              <div key={i} className="border border-ink-quaternary rounded-xl p-4">
                <p className="font-semibold text-ink text-[13px] mb-1">{item.test}</p>
                <p className="text-ink-secondary text-[12px] mb-1"><strong>What it is:</strong> {item.whatitis}</p>
                <p className="text-ink-secondary text-[12px]"><strong>How to read:</strong> {item.read}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-[13px]">
            <p className="text-amber-900"><strong>💡 Single abnormal result:</strong> Don\'t panic. Many tests have normal variation. Your doctor will advise if a retest is needed or if treatment is necessary.</p>
          </div>
        </div>
      )}

      {reportTab === 'imaging' && (
        <div className="space-y-3">
          {[
            { imaging: 'X-Ray (Chest, Limbs, Spine)', whatitis: 'Uses radiation to create 2D images of bones and lungs', read: 'Look for "No acute abnormality" = normal. "Findings:" describes what radiologist sees (e.g. "mild degenerative disc disease")' },
            { imaging: 'CT Scan (Computed Tomography)', whatitis: '3D X-ray images; shows internal organs, soft tissue', read: 'Very detailed. Radiologist describes structures, looks for masses, bleeding, inflammation. "No focal lesion" = good' },
            { imaging: 'MRI (Magnetic Resonance Imaging)', whatitis: 'Magnetic field (no radiation); best for soft tissue, brain, spine', read: 'Excellent for tumours, ligament tears, brain lesions. Often divided into sections (e.g. cervical spine, thoracic spine)' },
            { imaging: 'Ultrasound', whatitis: 'Sound waves; images liver, kidney, pregnancy, thyroid, vessels', read: 'Real-time imaging. Look for normal organ size, no masses/cysts, normal blood flow' },
          ].map((item, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4">
              <p className="font-semibold text-ink text-[14px] mb-1">{item.imaging}</p>
              <p className="text-ink-secondary text-[12px] mb-1"><strong>What:</strong> {item.whatitis}</p>
              <p className="text-ink-secondary text-[12px]"><strong>How to read:</strong> {item.read}</p>
            </div>
          ))}
          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px]">
            <p className="text-ink-secondary"><strong className="text-ink">Key phrases:</strong> "No acute abnormality", "No significant findings", "Within normal limits" = all good. "Findings" = something is present (may or may not need treatment). Always ask your doctor what it means for you.</p>
          </div>
        </div>
      )}

      {reportTab === 'diagnosis' && (
        <div className="space-y-3">
          <p className="text-ink-secondary text-[13px]">Your diagnosis should clearly state:</p>
          <div className="space-y-2">
            {[
              { section: 'Primary Diagnosis', example: 'e.g. "Type 2 Diabetes Mellitus", "Hypertension", "Pneumonia"' },
              { section: 'Secondary/Comorbid Conditions', example: 'Other health conditions (e.g. "with dyslipidaemia")' },
              { section: 'Severity/Classification', example: 'Mild, moderate, severe (e.g. "Stage 2 hypertension")' },
              { section: 'Duration/Onset', example: 'Acute (sudden) vs chronic (long-term)' },
            ].map((item, i) => (
              <div key={i} className="border border-ink-quaternary rounded-xl p-3">
                <p className="font-semibold text-ink text-[13px]">{item.section}</p>
                <p className="text-ink-secondary text-[12px]">{item.example}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-[13px]">
            <p className="text-amber-900"><strong>What to ask your doctor:</strong> "What does this mean?", "Will it get worse?", "Can it be cured or just managed?", "What do I need to do?", "When should I follow up?" Write down their answers.</p>
          </div>
        </div>
      )}

      {reportTab === 'prescription' && (
        <div className="space-y-3">
          <p className="text-ink-secondary text-[13px]">How to read your prescription:</p>
          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px] space-y-2">
            <div><strong className="text-ink">Medication name</strong><br/><span className="text-ink-secondary">e.g. "Atorvastatin 20mg"</span></div>
            <div><strong className="text-ink">Strength (dose)</strong><br/><span className="text-ink-secondary">e.g. "20mg" = amount per tablet</span></div>
            <div><strong className="text-ink">Quantity</strong><br/><span className="text-ink-secondary">e.g. "30 tablets" = how many you get</span></div>
            <div><strong className="text-ink">Instructions (sig.)</strong><br/><span className="text-ink-secondary">e.g. "Take 1 tablet ONCE daily with food" = how many, how often, when</span></div>
            <div><strong className="text-ink">Duration</strong><br/><span className="text-ink-secondary">e.g. "Repeat x 3 months" = how long to take it</span></div>
            <div><strong className="text-ink">Refills</strong><br/><span className="text-ink-secondary">Usually "x5" or "No refills" after this fill</span></div>
          </div>
          <div className="space-y-2">
            {[
              { abbr: 'OD / QD', meaning: 'Once daily (morning)', note: 'Some doctors still use these older abbreviations' },
              { abbr: 'BD / BID', meaning: 'Twice daily (morning + evening)', note: 'Usually 8–12 hours apart' },
              { abbr: 'TDS / TID', meaning: 'Three times daily (morning, noon, evening)', note: '6–8 hours apart' },
              { abbr: 'QID', meaning: 'Four times daily', note: 'Uncommon in Malaysia' },
              { abbr: 'PRN', meaning: 'As needed', note: 'e.g. painkillers when you have pain' },
              { abbr: 'AC', meaning: 'Before meals', note: 'Take 30 min before eating' },
              { abbr: 'PC', meaning: 'After meals', note: 'Take 1 hour after eating' },
            ].map((item, i) => (
              <div key={i} className="border border-ink-quaternary rounded-xl p-3">
                <p className="font-semibold text-ink text-[13px]">{item.abbr}</p>
                <p className="text-ink-secondary text-[12px]">{item.meaning}</p>
                <p className="text-ink-tertiary text-[11px]">{item.note}</p>
              </div>
            ))}
          </div>
          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px]">
            <p className="text-ink-secondary"><strong className="text-ink">Important:</strong> Always ask: "When should I take this?", "Can I take it with food?", "Are there foods/drinks/medications I should avoid?", "What are side effects?", "What do I do if I miss a dose?"</p>
          </div>
        </div>
      )}
    </div>
  )
}

/* ─── Post-Discharge Care ────────────────────────────────────────── */

const REDFLAG_SYMPTOMS = [
  { symptom: 'Fever ≥38°C, persisting', why: 'Can signal infection at the surgical site or elsewhere' },
  { symptom: 'Increasing wound redness, warmth or swelling', why: 'Classic signs of a developing wound infection' },
  { symptom: 'Pus or foul-smelling wound discharge', why: 'Strongly suggests infection — needs assessment same day' },
  { symptom: 'Wound reopening, or bleeding not stopped by 5 minutes of firm pressure', why: 'May need re-suturing or further intervention' },
  { symptom: 'Breathing difficulty or shortness of breath', why: 'Could indicate a clot, infection, or cardiac/respiratory complication' },
  { symptom: 'Chest pain', why: 'Never ignore — could be cardiac or a blood clot' },
  { symptom: 'Severe or worsening pain not controlled by prescribed painkillers', why: 'Pain that escalates instead of improving is not normal recovery' },
  { symptom: 'Confusion, reduced consciousness, or big blood-pressure changes', why: 'Needs immediate assessment — do not wait for your follow-up date' },
]

const HOME_CARE_PROVIDERS = [
  { name: 'Homage Malaysia', detail: 'Post-hospitalisation nursing, rehab and respite care; covers KL, Selangor, Kedah, Penang, Johor. Sometimes partners directly with hospitals for discharge transition.' },
  { name: 'Sunway Home Healthcare', detail: 'Registered-nurse-led home nursing — wound/ostomy care, post-stroke and post-surgery rehab. Runs a "Hospital@Home" programme for hospital-grade care at home.' },
  { name: 'Universal Nursing Care (Petaling Jaya)', detail: 'Skilled nursing and post-op assistance.' },
]

function PostDischargeSection() {
  const [view, setView] = useState('wound')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        {[
          { v: 'wound',  label: '🩹 Wound Care & Red Flags' },
          { v: 'meds',   label: '💊 Medication & Activity' },
          { v: 'mc',     label: '📄 MC & Sick Leave' },
          { v: 'home',   label: '🏡 Home Care Services' },
        ].map(({ v, label }) => (
          <button key={v} onClick={() => setView(v)}
            className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
              view === v ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
            }`}>{label}</button>
        ))}
        <div className="ml-auto"><PrintButton label="Print this guide" /></div>
      </div>

      {/* ── Wound care & red flags ── */}
      {view === 'wound' && (
        <div className="space-y-4">
          <div>
            <h3 className="text-[17px] font-bold text-ink mb-2">Wound care basics</h3>
            <ul className="space-y-1.5">
              {[
                'Follow the hospital\'s specific written instructions — dressing schedule and cleaning protocol vary by procedure.',
                'Keep the wound clean and dry. If permitted, clean gently with mild soap and water only — don\'t scrub.',
                'Many surgical wounds can be showered (not soaked or swum) after the first ~24 hours, but confirm with your surgical team first.',
                'Wash your hands and use clean supplies before touching any dressing.',
              ].map((t, i) => (
                <li key={i} className="text-ink-secondary text-[13px] flex items-start gap-2"><span className="flex-shrink-0 text-brand">•</span>{t}</li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
            <p className="font-bold text-red-900 text-[14px] mb-3">🚨 Red flags — return to A&E immediately</p>
            <div className="space-y-2">
              {REDFLAG_SYMPTOMS.map((r, i) => (
                <div key={i} className="bg-white border border-red-200 rounded-xl p-3">
                  <p className="font-semibold text-red-800 text-[12.5px]">{r.symptom}</p>
                  <p className="text-red-700/80 text-[11.5px] mt-0.5">{r.why}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px] text-ink-secondary">
            <strong className="text-ink">📅 Follow-up:</strong> Wound checks and suture removal are typically scheduled 7–14 days after discharge — timing varies by procedure complexity. Your exact date is usually printed on the discharge summary; confirm before you leave the hospital.
          </div>
        </div>
      )}

      {/* ── Meds & activity ── */}
      {view === 'meds' && (
        <div className="space-y-4">
          <div className="border border-ink-quaternary rounded-2xl p-4">
            <p className="font-bold text-ink text-[14px] mb-2">💊 Medication management</p>
            <ul className="space-y-1.5">
              {[
                'Take discharge medications exactly as prescribed, even once you feel better — don\'t stop antibiotics early.',
                'Reconcile your discharge medication list against what you were taking before admission — duplicates or interactions are a known risk at care transitions. See the Drug Interaction Checker for common combinations to flag with your pharmacist.',
                'Ask what to do if you miss a dose, and which side effects need urgent attention vs. can wait for your follow-up.',
              ].map((t, i) => (
                <li key={i} className="text-ink-secondary text-[13px] flex items-start gap-2"><span className="flex-shrink-0 text-brand">•</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="border border-ink-quaternary rounded-2xl p-4">
            <p className="font-bold text-ink text-[14px] mb-2">🏃 Activity restrictions</p>
            <p className="text-ink-secondary text-[13px] leading-relaxed">Restrictions are procedure-specific — commonly no heavy lifting, driving, or strenuous exercise for a defined period. Follow your surgeon's specific written restriction rather than assuming "feeling fine" means you're cleared to resume normal activity.</p>
          </div>
          <div className="border border-ink-quaternary rounded-2xl p-4">
            <p className="font-bold text-ink text-[14px] mb-2">📋 What your discharge summary should contain</p>
            <p className="text-ink-secondary text-[13px] leading-relaxed mb-2">Request a copy before leaving the hospital — you'll need it for insurance claims and future doctors. It should cover:</p>
            <ul className="space-y-1">
              {['Diagnosis', 'Procedures/treatment performed during admission', 'Medications prescribed at discharge, with dose and duration', 'Follow-up appointment details', 'Red-flag symptoms to watch for', 'Contact information for questions'].map((t, i) => (
                <li key={i} className="text-ink-secondary text-[12.5px] flex items-start gap-2"><span className="flex-shrink-0 text-brand">•</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* ── MC & sick leave ── */}
      {view === 'mc' && (
        <div className="space-y-4">
          <div className="bg-surface-secondary rounded-2xl p-4">
            <p className="font-bold text-ink text-[14px] mb-2">Ordinary paid sick leave (Employment Act 1955)</p>
            <div className="grid sm:grid-cols-3 gap-2">
              {[
                { years: '< 2 years service', days: '14 days/year' },
                { years: '2–<5 years service', days: '18 days/year' },
                { years: '≥5 years service', days: '22 days/year' },
              ].map((r, i) => (
                <div key={i} className="bg-white rounded-xl p-3 text-center border border-ink-quaternary">
                  <p className="font-bold text-ink text-[15px]">{r.days}</p>
                  <p className="text-ink-tertiary text-[11px]">{r.years}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px] text-ink-secondary leading-relaxed">
            <strong className="text-ink">🏥 Hospitalisation leave is separate — up to 60 days/year.</strong> Since the Employment (Amendment) Act 2022 (effective 1 Jan 2023), hospitalisation leave no longer counts against your ordinary sick-leave days — it's an additional entitlement.
          </div>
          <ul className="space-y-2">
            {[
              'Only MCs from government hospitals, your employer\'s panel clinics, or (if unavailable) any registered doctor count for paid leave — employers aren\'t obliged to accept others.',
              'Common practice: submit your MC to your employer within 48 hours, or risk it being treated as unauthorised absence (an HR convention, not itself in the Act).',
              'Doctors cannot issue an MC based solely on a teleconsultation without a physical examination.',
            ].map((t, i) => (
              <li key={i} className="text-ink-secondary text-[13px] flex items-start gap-2"><span className="flex-shrink-0 text-brand">•</span>{t}</li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Home care ── */}
      {view === 'home' && (
        <div className="space-y-3">
          <p className="text-ink-secondary text-[13px]">Many private hospitals arrange in-house or partnered home-nursing referrals directly at discharge — ask your discharge planner/nurse before leaving, since hospital-arranged referrals are often faster and pre-vetted. Independent providers include:</p>
          {HOME_CARE_PROVIDERS.map((p, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4">
              <p className="font-bold text-ink text-[13px] mb-1">{p.name}</p>
              <p className="text-ink-secondary text-[12px] leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

/* ─── Drug Interaction Checker ───────────────────────────────────── */

const DRUG_INTERACTIONS = [
  { a: 'Warfarin', b: 'NSAIDs (ibuprofen, diclofenac, naproxen)', severity: 'High', effect: 'Significantly increased bleeding risk.' },
  { a: 'Warfarin', b: 'Antibiotics (penicillins, ciprofloxacin, co-trimoxazole, azithromycin/clarithromycin)', severity: 'High', effect: 'Many antibiotic classes raise INR and bleeding risk — needs closer monitoring.' },
  { a: 'Warfarin', b: 'Paracetamol (regular/high dose)', severity: 'Moderate', effect: 'Even the "safe" OTC painkiller can potentiate warfarin\'s effect — monitor INR if used regularly.' },
  { a: 'Warfarin', b: 'TCM / herbal products (Dan Shen, Dang Gui, Chuan Xiong, Dong Quai)', severity: 'High', effect: 'Can raise bleeding risk or destabilise INR unpredictably. Avoid combining without medical guidance.' },
  { a: 'Aspirin', b: 'Other blood thinners (clopidogrel/Plavix, warfarin)', severity: 'High', effect: 'Dual antiplatelet/anticoagulant therapy raises bleeding risk 2–3x vs. one alone — must be doctor-supervised.' },
  { a: 'Low-dose aspirin (cardioprotective)', b: 'Ibuprofen / other NSAIDs', severity: 'Moderate', effect: 'Ibuprofen can block aspirin\'s access to platelets, reducing its heart-protective effect.' },
  { a: 'Statins (simvastatin, atorvastatin)', b: 'Certain antibiotics/antifungals (macrolides, azoles)', severity: 'High', effect: 'Raises statin blood levels via CYP3A4 inhibition — risk of muscle damage (rhabdomyolysis).' },
  { a: 'Statins (especially simvastatin)', b: 'Grapefruit / grapefruit juice', severity: 'Moderate', effect: 'Grapefruit blocks CYP3A4 — simvastatin levels can rise ~16-fold, atorvastatin ~2.5-fold. Effect can last up to 72 hours. Fluvastatin, rosuvastatin, and pravastatin are largely unaffected.' },
  { a: 'ACE inhibitors / ARBs (e.g. perindopril, lisinopril)', b: 'Potassium supplements or potassium-sparing diuretics', severity: 'High', effect: 'Risk of dangerous hyperkalaemia (abnormal heart rhythm).' },
  { a: 'ACE inhibitors / ARBs', b: 'NSAIDs', severity: 'Moderate', effect: 'Combined risk of kidney impairment — worse if a diuretic is also involved ("triple whammy").' },
  { a: 'Metformin', b: 'IV contrast dye (CT scan / angiogram)', severity: 'High', effect: 'Risk of lactic acidosis, especially with reduced kidney function. Tell your radiology team you\'re on metformin — it\'s usually withheld around contrast procedures.' },
  { a: 'MAOIs', b: 'SSRIs or tramadol', severity: 'High', effect: 'Risk of serotonin syndrome (confusion, rapid heart rate, high BP, in severe cases seizures). MAOI effects can persist up to 2 weeks after stopping.' },
  { a: 'Paracetamol', b: 'Alcohol (chronic/heavy use)', severity: 'Moderate', effect: 'Increased risk of liver damage (hepatotoxicity).' },
  { a: 'Sedatives / benzodiazepines / antihistamines', b: 'Alcohol', severity: 'Moderate', effect: 'Additive sedation and respiratory depression risk.' },
  { a: 'Ubat selsema (decongestants: pseudoephedrine/phenylephrine)', b: 'Hypertension medication or MAOIs', severity: 'Moderate', effect: 'Can raise blood pressure, counteracting BP treatment. Pseudoephedrine is a controlled (Poison Group A) item in Malaysia.' },
  { a: 'Amoxicillin / other antibiotics', b: 'Oral contraceptives', severity: 'Low', effect: 'Commonly cited, though evidence is debated for most non-rifampicin antibiotics — a soft caution rather than a strong risk. Use backup contraception if unsure.' },
  { a: 'Azithromycin / other macrolides', b: 'Other QT-prolonging drugs', severity: 'Moderate', effect: 'Combined QT-prolongation risk — tell your doctor about all other medicines you\'re taking.' },
  { a: 'NSAIDs (e.g. ibuprofen)', b: 'Other NSAIDs, including hidden ones in combo cold/flu products', severity: 'Moderate', effect: 'Many OTC "ubat selsema" combo products already contain paracetamol or ibuprofen — stacking with a separate standalone painkiller risks accidental overdose.' },
  { a: 'TCM / herbal supplements (general)', b: 'Prescription drugs (general)', severity: 'Moderate', effect: 'TCM\'s multi-compound formulations can interact unpredictably with many Western drugs. Always disclose all TCM/herbal/supplement use to your doctor and pharmacist.' },
]

const SEVERITY_STYLE = {
  High:     { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  Moderate: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  Low:      { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
}

function DrugInteractionSection() {
  const [drugA, setDrugA] = useState('')
  const [drugB, setDrugB] = useState('')

  const matches = useMemo(() => {
    const qa = drugA.trim().toLowerCase()
    const qb = drugB.trim().toLowerCase()
    if (!qa && !qb) return DRUG_INTERACTIONS
    return DRUG_INTERACTIONS.filter(d => {
      const hay = `${d.a} ${d.b}`.toLowerCase()
      const matchA = qa ? hay.includes(qa) : true
      const matchB = qb ? hay.includes(qb) : true
      return matchA && matchB
    })
  }, [drugA, drugB])

  return (
    <div className="space-y-6">
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-[13px] text-amber-800 leading-relaxed">
        <strong>This tool is not medical advice.</strong> It provides general, plain-English information about commonly known drug interactions in Malaysia and is not a substitute for consulting a doctor or pharmacist. It does not cover every drug, dose, or individual health condition — interaction risk depends on your specific medications, dosage, kidney/liver function, and other conditions. <strong>Always tell your doctor and pharmacist about every medicine, supplement, and traditional/herbal remedy (TCM) you take</strong>, including OTC products. If you experience severe symptoms — breathing difficulty, chest pain, severe bleeding, confusion, facial/throat swelling — seek emergency care immediately; do not rely on this tool.
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <input
          type="search"
          placeholder="Search a medicine (e.g. warfarin)…"
          value={drugA}
          onChange={e => setDrugA(e.target.value)}
          className="w-full border border-ink-quaternary rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-brand"
          autoComplete="off"
        />
        <input
          type="search"
          placeholder="Search a second medicine (optional)…"
          value={drugB}
          onChange={e => setDrugB(e.target.value)}
          className="w-full border border-ink-quaternary rounded-xl px-4 py-2.5 text-[13px] focus:outline-none focus:border-brand"
          autoComplete="off"
        />
      </div>

      <div className="space-y-2.5">
        {matches.length === 0 && (
          <p className="text-ink-tertiary text-[13px] text-center py-8">No known combinations found in this list for your search — that doesn't mean it's safe. Ask your pharmacist directly.</p>
        )}
        {matches.map((d, i) => {
          const style = SEVERITY_STYLE[d.severity]
          return (
            <div key={i} className={`border rounded-xl p-4 ${style.border}`}>
              <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                <p className="font-bold text-ink text-[13px]">{d.a} <span className="text-ink-tertiary font-normal">+</span> {d.b}</p>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${style.bg} ${style.text} border ${style.border}`}>{d.severity} concern</span>
              </div>
              <p className="text-ink-secondary text-[12.5px] leading-relaxed">{d.effect}</p>
            </div>
          )
        })}
      </div>

      <div className="bg-surface-secondary rounded-2xl p-4 text-[12px] text-ink-tertiary leading-relaxed">
        This list covers ~18 commonly-flagged interaction categories relevant to Malaysia (including TCM and common "ubat selsema" combo products) — it is not exhaustive. For a full check of your actual medication list, bring everything (including supplements) to your pharmacist.
      </div>
    </div>
  )
}

/* ─── Chronic Disease Self-Monitoring ────────────────────────────── */

function SelfMonitoringSection() {
  const [view, setView] = useState('bp')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {[
          { v: 'bp',   label: '🩺 Blood Pressure' },
          { v: 'glucose', label: '🩸 Blood Glucose' },
          { v: 'peak', label: '🫁 Peak Flow (Asthma)' },
        ].map(({ v, label }) => (
          <button key={v} onClick={() => setView(v)}
            className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
              view === v ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
            }`}>{label}</button>
        ))}
      </div>

      {view === 'bp' && (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: 'General population', val: '< 140/90 mmHg', color: '#16a34a' },
              { label: 'Diabetics', val: '< 140/80 mmHg', color: '#d97706' },
              { label: 'Ischaemic heart / cerebrovascular / renal disease', val: '< 130/80 mmHg', color: '#dc2626' },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl p-4 text-center" style={{ background: `${t.color}0d`, border: `1px solid ${t.color}30` }}>
                <p className="font-bold text-[20px]" style={{ color: t.color }}>{t.val}</p>
                <p className="text-ink-secondary text-[11px] mt-1">{t.label}</p>
              </div>
            ))}
          </div>
          <p className="text-ink-tertiary text-[11px]">Targets per Malaysian CPG Management of Hypertension (MOH). Your doctor may set a different personal target based on your health history — these are general reference points, not a diagnosis.</p>

          <div className="border border-ink-quaternary rounded-2xl p-4">
            <p className="font-bold text-ink text-[14px] mb-2">How to get an accurate reading</p>
            <ul className="space-y-1.5">
              {[
                'Sit with your back supported and feet flat on the floor',
                'Rest your arm at heart level, supported on a table',
                'Avoid caffeine, exercise, or smoking for 30 minutes beforehand',
                'Take 2 readings, 1 minute apart, at the same time each day, and record both',
              ].map((t, i) => (
                <li key={i} className="text-ink-secondary text-[13px] flex items-start gap-2"><span className="flex-shrink-0 text-brand">•</span>{t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-secondary rounded-2xl p-4 text-[12px] text-ink-tertiary leading-relaxed">
            Home BP monitors (e.g. Omron) are widely available at pharmacies and online in Malaysia — check current pricing directly with the retailer, as it varies.
          </div>
        </div>
      )}

      {view === 'glucose' && (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-2xl p-4 text-center bg-brand/5 border border-brand/20">
              <p className="font-bold text-[20px] text-brand">4.4 – 7.0 mmol/L</p>
              <p className="text-ink-secondary text-[11px] mt-1">Fasting blood glucose — general self-monitoring target</p>
            </div>
            <div className="rounded-2xl p-4 text-center bg-surface-secondary border border-ink-quaternary">
              <p className="font-bold text-[16px] text-ink">Ask your doctor</p>
              <p className="text-ink-secondary text-[11px] mt-1">Post-meal (2hr) and HbA1c targets are individualised per the Malaysian CPG — get your personal target confirmed</p>
            </div>
          </div>
          <div className="border border-ink-quaternary rounded-2xl p-4">
            <p className="font-bold text-ink text-[14px] mb-2">How often should I test?</p>
            <p className="text-ink-secondary text-[13px] leading-relaxed">Testing frequency varies by diabetes type and control: Type 1 and insulin-treated Type 2 typically test multiple times a day; diet/oral-medication-controlled Type 2 often tests a few times a week. Follow the specific schedule your doctor sets for you.</p>
          </div>
          <div className="bg-surface-secondary rounded-2xl p-4 text-[12px] text-ink-tertiary leading-relaxed">
            Glucometers and test strips (Accu-Chek, OneTouch, Contour, and others) are widely available at Malaysian pharmacies and clinics — check current pricing directly with the retailer.
          </div>
        </div>
      )}

      {view === 'peak' && (
        <div className="space-y-4">
          <p className="text-ink-secondary text-[13px]">A peak flow meter measures how fast you can exhale — tracking it against your own "personal best" helps catch an asthma flare-up before it becomes an emergency.</p>
          <div className="space-y-2.5">
            {[
              { zone: 'Green Zone', range: '80–100% of personal best', meaning: 'Good control — normal activity, continue your usual medication plan.', color: '#16a34a' },
              { zone: 'Yellow Zone', range: '50–80% of personal best', meaning: 'Caution — your asthma is worsening. Follow your action plan to adjust medication.', color: '#d97706' },
              { zone: 'Red Zone', range: '< 50% of personal best', meaning: 'Danger — use rescue medication now and seek emergency care if it doesn\'t improve quickly.', color: '#dc2626' },
            ].map((z, i) => (
              <div key={i} className="border rounded-xl p-4" style={{ borderColor: `${z.color}40`, borderLeftWidth: '3px' }}>
                <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                  <p className="font-bold text-[13px]" style={{ color: z.color }}>{z.zone}</p>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full" style={{ background: `${z.color}15`, color: z.color }}>{z.range}</span>
                </div>
                <p className="text-ink-secondary text-[12px]">{z.meaning}</p>
              </div>
            ))}
          </div>
          <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px] text-ink-secondary leading-relaxed">
            <strong className="text-ink">Finding your personal best:</strong> measure at the same time each day (mid-day is common) for 2–3 weeks while your asthma is well-controlled, taking the highest of 3 attempts each time. Use that number as your 100% baseline going forward.
          </div>
        </div>
      )}
    </div>
  )
}
