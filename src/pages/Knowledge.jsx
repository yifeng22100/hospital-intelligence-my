import { useState } from 'react'
import { GLOSSARY } from '../data/glossary'
import { DRUGS, DRUG_CATEGORIES } from '../data/drugs'

const TOPICS = [
  { id: 'medical-reference', icon: '📖', label: 'Medical & Insurance Reference', desc: 'Medical glossary, abbreviations & insurance terms decoded' },
  { id: 'drugs',             icon: '💊', label: 'Common Drugs',                  desc: 'Common medications — Mandarin names, what they do, where to get them' },
  { id: 'lab-values',        icon: '🔬', label: 'Lab Values',                   desc: 'What your blood test results mean — normal ranges explained' },
  { id: 'screening',         icon: '🩺', label: 'Health Screening',             desc: 'What to screen for, when, and where — age-by-age guide' },
  { id: 'maternal',          icon: '🤰', label: 'Maternal Health',              desc: 'Antenatal visits, tests, postnatal care & delivery guide' },
  { id: 'vaccination',       icon: '💉', label: 'Vaccination Guide',            desc: 'Complete immunisation schedule for all ages' },
  { id: 'children',          icon: '👶', label: 'Children\'s Healthcare',       desc: 'Growth, milestones, common illnesses & when to seek help' },
  { id: 'elderly',           icon: '👴', label: 'Elderly & OKU Care',           desc: 'Healthcare, mobility, chronic disease management & support' },
  { id: 'mental-health',     icon: '🧠', label: 'Mental Health Resources',      desc: 'Mental wellness, counselling services & crisis support' },
  { id: 'medical-reports',   icon: '📋', label: 'Reading Medical Reports',      desc: 'Understand your lab results, scans, diagnoses & prescriptions' },
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
  { abbr: 'LOG / GL', full: 'Letter of Guarantee / Guarantee Letter', context: 'Insurance', desc: 'Written guarantee from your insurer to the hospital to cover costs. Required for cashless hospitalisation.' },
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

const ABBR_CONTEXTS = ['All', 'Location', 'Organisation', 'Accreditation', 'Scheme', 'Insurance', 'Vital Signs', 'Assessment', 'Lab Tests', 'Tests', 'Imaging', 'Documentation', 'Medication Dosing', 'Admin', 'Roles']

export default function Knowledge() {
  const [active, setActive] = useState('medical-reference')
  const topic = TOPICS.find(t => t.id === active)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-6 px-5">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-brand text-[12px] font-semibold uppercase tracking-[0.12em] mb-1">Knowledge Hub</p>
          <h1 className="text-[26px] font-bold text-ink tracking-tight">Your medical reference library.</h1>
          <p className="text-ink-secondary text-[14px] mt-1.5 max-w-[600px]">
            Medical glossary, common drug names in English and Mandarin — everything you need to understand and navigate your healthcare.
          </p>
        </div>
      </div>

      {/* Tab nav */}
      <div className="border-b border-ink-quaternary bg-white sticky top-14 z-30 overflow-x-auto">
        <div className="max-w-[1200px] mx-auto px-5 flex gap-0 min-w-max sm:min-w-0 sm:flex-wrap">
          {TOPICS.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex items-center gap-1.5 px-4 py-3 text-[13px] font-medium border-b-2 whitespace-nowrap transition-colors ${
                active === t.id
                  ? 'border-brand text-brand'
                  : 'border-transparent text-ink-secondary hover:text-ink'
              }`}
            >
              <span>{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-5 py-8">
        <div className="mb-6">
          <h2 className="text-[20px] font-bold text-ink">{topic.icon} {topic.label}</h2>
          <p className="text-ink-secondary text-[13px] mt-0.5">{topic.desc}</p>
        </div>

        {active === 'medical-reference' && <MedicalReferenceSection />}
        {active === 'drugs'             && <DrugsSection />}
        {active === 'lab-values'        && <LabValuesSection />}
        {active === 'screening'         && <ScreeningSection />}
        {active === 'maternal'          && <MaternalSection />}
        {active === 'vaccination'       && <VaccinationSection />}
        {active === 'children'          && <ChildrenSection />}
        {active === 'elderly'           && <ElderlySection />}
        {active === 'mental-health'     && <MentalHealthSection />}
        {active === 'medical-reports'   && <MedicalReportSection />}
      </div>
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
    insurance: 'Insurance',
    procedure: 'Procedures',
    drug: 'Medications',
    admin: 'Admin & Billing',
    financial: 'Financial Aid',
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

function MedicalReferenceSection() {
  const [refTab, setRefTab] = useState('glossary')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-ink-quaternary pb-4">
        <button onClick={() => setRefTab('glossary')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            refTab === 'glossary' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>📖 Medical Glossary</button>
        <button onClick={() => setRefTab('abbreviations')}
          className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
            refTab === 'abbreviations' ? 'bg-ink text-white border-ink' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
          }`}>🔤 Abbreviations</button>
      </div>

      {refTab === 'glossary' && <GlossarySection />}
      {refTab === 'abbreviations' && <AbbreviationsSection />}
    </div>
  )
}

/* ─── Vaccination Guide ──────────────────────────────────────────── */

function VaccinationSection() {
  const [ageGroup, setAgeGroup] = useState('infants')

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
        { age: '9 months', vaccines: ['Measles (Dose 1)', 'Japanese Encephalitis (optional, private)'], govt: 'Free', private: 'RM 100–200' },
        { age: '12 months', vaccines: ['MMR (Dose 1)', 'Hepatitis A (optional, private)'], govt: 'Free', private: 'RM 100–250' },
      ],
    },
    toddlers: {
      label: '🧒 Toddlers (1–6 years)',
      color: '#0891b2',
      vaccines: [
        { age: '15–18 months', vaccines: ['DPT (Booster 1)', 'Polio (Booster 1)', 'Pneumococcal (Booster)'], govt: 'Free', private: 'RM 100–180' },
        { age: '18–24 months', vaccines: ['Hepatitis B (Booster)', 'Varicella (Chickenpox) — optional'], govt: 'Free', private: 'RM 80–150' },
        { age: '2 years', vaccines: ['Japanese Encephalitis (optional, private)', 'Typhoid (Typhim Vi)'], govt: 'Free', private: 'RM 100–180' },
        { age: '4–6 years', vaccines: ['DPT (Booster 2)', 'Polio (Booster 2)', 'MMR (Dose 2)'], govt: 'Free', private: 'RM 100–180' },
      ],
    },
    schoolage: {
      label: '🎒 School Age (7–17 years)',
      color: '#d97706',
      vaccines: [
        { age: '11–12 years', vaccines: ['HPV (Cervical Cancer, girls)', '3 doses over 6 months'], govt: 'Free (NIP)', private: 'RM 400–800/3 doses' },
        { age: '13 years', vaccines: ['Tdap (Booster)', 'Polio (booster if incomplete)'], govt: 'Free', private: 'RM 60–100' },
        { age: '15 years onwards', vaccines: ['Meningococcal (ACWY)', 'Typhoid booster every 2–3 years'], govt: 'Private only', private: 'RM 100–300' },
      ],
    },
    adults: {
      label: '👨 Adults (18+ years)',
      color: '#7c3aed',
      vaccines: [
        { age: 'Every 10 years', vaccines: ['Td (Tetanus-Diphtheria Booster)'], govt: 'Free', private: 'RM 40–80' },
        { age: '18–49 (one dose)', vaccines: ['COVID-19 Vaccine', 'Check MOH latest guidance — policies change'], govt: 'Free', private: 'Free/Covered' },
        { age: '50+ years', vaccines: ['Pneumococcal (Pneumovax 23)', 'Shingles (Recombivax — age 50+)', 'Influenza (annual)'], govt: 'Some coverage', private: 'RM 80–250' },
        { age: 'Anytime', vaccines: ['Rabies (post-exposure)', 'Hepatitis A (for travellers)', 'Yellow Fever (for travellers to endemic areas)'], govt: 'Post-exposure only', private: 'RM 50–300' },
      ],
    },
  }

  const currentGroup = VACCINATION_SCHEDULE[ageGroup]

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {Object.entries(VACCINATION_SCHEDULE).map(([key, val]) => (
          <button key={key} onClick={() => setAgeGroup(key)}
            className={`px-4 py-2 rounded-xl text-[13px] font-semibold border transition-colors ${
              ageGroup === key ? 'text-white border-transparent' : 'bg-white text-ink-secondary border-ink-quaternary hover:border-brand hover:text-brand'
            }`}
            style={ageGroup === key ? { background: val.color, borderColor: val.color } : {}}>
            {val.label.split(' ')[0]} {val.label.split(' ').slice(1).join(' ')}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {currentGroup.vaccines.map((item, i) => (
          <div key={i} className="border border-ink-quaternary rounded-xl p-4" style={{ borderLeft: `3px solid ${currentGroup.color}` }}>
            <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${currentGroup.color}15`, color: currentGroup.color }}>{item.age}</span>
            </div>
            <p className="text-ink-secondary text-[12px] mb-2 space-y-1">
              {item.vaccines.map((v, vi) => <div key={vi} className="flex items-start gap-2"><span className="flex-shrink-0 text-brand">•</span><span>{v}</span></div>)}
            </p>
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
        <strong className="text-ink">💡 MOH Recommendation:</strong> Malaysia's National Immunisation Programme (NIP) covers 12 basic vaccines free at Klinik Kesihatan. Private clinics offer additional optional vaccines (e.g., Varicella, HPV, Meningococcal). Check with your doctor which vaccines are right for you.
      </div>
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
