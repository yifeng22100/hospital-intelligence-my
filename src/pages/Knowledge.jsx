import { useState } from 'react'
import { GLOSSARY } from '../data/glossary'
import { DRUGS, DRUG_CATEGORIES } from '../data/drugs'

const TOPICS = [
  { id: 'glossary',      icon: '📖', label: 'Medical Glossary',  desc: 'Plain-English guide to medical terms and abbreviations' },
  { id: 'drugs',         icon: '💊', label: 'Common Drugs',      desc: 'Common medications — Mandarin names, what they do, where to get them' },
  { id: 'lab-values',    icon: '🔬', label: 'Lab Values',        desc: 'What your blood test results mean — normal ranges explained' },
  { id: 'abbreviations', icon: '🔤', label: 'Abbreviations',     desc: 'Common Malaysian hospital and medical shorthand decoded' },
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
  const [active, setActive] = useState('glossary')
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

        {active === 'glossary'      && <GlossarySection />}
        {active === 'drugs'         && <DrugsSection />}
        {active === 'lab-values'    && <LabValuesSection />}
        {active === 'abbreviations' && <AbbreviationsSection />}
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
