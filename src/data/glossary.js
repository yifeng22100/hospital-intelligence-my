// data/glossary.js
export const GLOSSARY = [

  // ── HOSPITAL / CARE SETTINGS ──────────────────────────────────────────────

  {
    term: 'A&E',
    full: 'Accident & Emergency',
    category: 'hospital',
    definition: 'The emergency department of a hospital that provides immediate assessment and treatment for acute illnesses and injuries that are life-threatening or require urgent attention. Known as the "Casualty" in older Malaysian usage.',
    tip: 'At government hospitals, A&E charges for citizens are RM 5 per visit (adult) or RM 1 (child). At private hospitals, costs start from RM 80–200 for the consultation alone before any tests.'
  },
  {
    term: 'ICU',
    full: 'Intensive Care Unit',
    category: 'hospital',
    definition: 'A specialised hospital ward providing continuous monitoring and advanced life support for critically ill patients. Staffed at a higher nurse-to-patient ratio (typically 1:1 or 1:2). Patients in ICU may be on ventilators or multiple drips.',
    tip: 'ICU costs in private hospitals can range from RM 2,000–8,000 per day. Ensure your insurance policy covers ICU stays without a sub-limit that is too low.'
  },
  {
    term: 'HDU',
    full: 'High Dependency Unit',
    category: 'hospital',
    definition: 'A ward for patients who are seriously ill but do not yet require the full intensity of an ICU. Provides closer monitoring than a general ward, with higher nurse-to-patient ratios (typically 1:2 or 1:3). A step-down from ICU or step-up from the ward.',
    tip: 'Costs are typically between general ward and ICU — roughly RM 1,000–3,500 per day in private hospitals.'
  },
  {
    term: 'CCU',
    full: 'Coronary Care Unit',
    category: 'hospital',
    definition: 'A specialised ICU or high-dependency unit dedicated to patients with serious cardiac conditions such as heart attacks, severe arrhythmias, or post-cardiac surgery care. Continuous ECG monitoring is standard.',
    tip: 'Admission to CCU is typically initiated through A&E following a cardiac event. Notify your insurer immediately upon admission.'
  },
  {
    term: 'NICU',
    full: 'Neonatal Intensive Care Unit',
    category: 'hospital',
    definition: 'An intensive care unit for newborn babies who are premature, have low birth weight, or have medical conditions requiring close monitoring and specialised treatment after birth.',
    tip: 'NICU admission can be very expensive. Check if your maternity insurance or newborn coverage extends to NICU stays — many basic plans have sub-limits or exclude NICU entirely.'
  },
  {
    term: 'PICU',
    full: 'Paediatric Intensive Care Unit',
    category: 'hospital',
    definition: 'An intensive care unit specifically for critically ill infants, children, and adolescents (typically up to age 18). Equipped and staffed by paediatric intensivists and paediatric nurses.',
    tip: 'Not all hospitals have a PICU — government referral hospitals (HKL, Hospital Selayang, HUKM) and major private hospitals have dedicated PICUs.'
  },
  {
    term: 'OT',
    full: 'Operating Theatre',
    category: 'hospital',
    definition: 'A sterile room in a hospital where surgical procedures are performed. Also called the "operation room" (OR). Patients are prepared in a holding area before entering, and monitored in a Recovery Room or Post-Anaesthesia Care Unit (PACU) afterwards.',
    tip: 'OT charges in private hospitals are separate from surgical fees, anaesthetist fees, and implant costs — always request an itemised estimate.'
  },
  {
    term: 'Ward',
    full: 'Hospital Ward',
    category: 'hospital',
    definition: 'A room or area in a hospital with multiple beds where patients are admitted for inpatient care. Wards may be general (mixed) or specialised (e.g., surgical ward, cardiac ward, maternity ward). At government hospitals, standard wards are subsidised.',
    tip: 'In Malaysia, government hospitals have Class 1 (single), Class 2 (4-bed), and Class 3 (open ward) rooms with different rates. Insurance plans specify which class is covered.'
  },
  {
    term: 'Day Surgery',
    full: 'Day Surgery / Day Case',
    category: 'hospital',
    definition: 'A surgical procedure where the patient is admitted, operated on, and discharged on the same day without an overnight stay. Common examples include cataract surgery, colonoscopy with polypectomy, laparoscopic procedures, and hernia repairs.',
    tip: 'Day surgery is generally cheaper than inpatient admission. Check your insurance plan — some policies require a minimum 8-hour or overnight stay for a claim to be valid.'
  },
  {
    term: 'Outpatient',
    full: 'Outpatient Care',
    category: 'hospital',
    definition: 'Medical services received without being admitted to the hospital. Includes specialist clinic visits, diagnostic tests, physiotherapy, and minor procedures where the patient goes home the same day.',
    tip: 'Most Malaysian health insurance plans cover inpatient care well but have separate (often lower) limits for outpatient specialist visits. Check your outpatient sub-limit carefully.'
  },
  {
    term: 'Inpatient',
    full: 'Inpatient Admission',
    category: 'hospital',
    definition: 'When a patient is formally admitted to a hospital and occupies a bed for at least one night. The patient receives a hospital registration number, an inpatient wristband, and a formal admission form.',
    tip: 'Formal inpatient admission triggers your hospitalisation insurance coverage. Ensure the attending doctor issues an official admission order — verbal instructions to "stay" are insufficient for insurance purposes.'
  },
  {
    term: 'Referral',
    full: 'Medical Referral',
    category: 'hospital',
    definition: 'A letter or official request from one doctor directing a patient to see a specialist or another facility for further assessment or specialised treatment. At government hospitals, referrals from Klinik Kesihatan to a specialist outpatient clinic are required for subsidised rates.',
    tip: 'Bypass the referral system at government hospitals and you may be charged the private or full-paying rate. Keep your referral letter — you may need it for follow-up visits and insurance claims.'
  },
  {
    term: 'Discharge',
    full: 'Hospital Discharge',
    category: 'hospital',
    definition: 'The formal process of releasing a patient from hospital admission. Includes receiving a discharge summary, follow-up appointment, prescriptions (TTH — To Take Home medications), and billing settlement.',
    tip: 'Always ask for your discharge summary in English and Bahasa Malaysia. It contains diagnosis codes, procedures done, and medications — critical for insurance claims and follow-up care.'
  },

  // ── HOSPITAL STAFF ────────────────────────────────────────────────────────

  {
    term: 'HO',
    full: 'Houseman Officer (House Officer)',
    category: 'staff',
    definition: 'A newly graduated medical doctor completing their mandatory 2-year housemanship training in Malaysia. The most junior tier of doctors in government hospitals. HOs work under direct supervision of Medical Officers and Specialists.',
    tip: 'HOs rotate through different departments. If you have concerns about your care, you can always request to speak with the supervising Medical Officer or Specialist.'
  },
  {
    term: 'MO',
    full: 'Medical Officer',
    category: 'staff',
    definition: 'A doctor who has completed housemanship and is registered with the Malaysian Medical Council (MMC). MOs manage patients independently in government hospitals and are the primary point of care in most wards and government health clinics (Klinik Kesihatan).',
    tip: 'In private hospitals, the equivalent role may be called a "Resident Medical Officer" (RMO) or "Hospital Medical Officer" (HMO).'
  },
  {
    term: 'Specialist / Consultant',
    full: 'Specialist / Consultant Physician',
    category: 'staff',
    definition: 'A doctor who has completed postgraduate specialist training (usually an additional 4–6 years after medical degree) and holds a recognised specialist qualification (e.g., MRCP, MRCS, MMed). In Malaysia, specialists must be credentialled by the relevant College and listed with MMC. In private hospitals, "Consultant" is the commonly used title.',
    tip: 'In government hospitals, seeing a specialist typically requires a referral. In private hospitals, you can self-refer but specialist fees are charged on top of hospital fees.'
  },
  {
    term: 'Registrar',
    full: 'Registrar (Trainee Specialist)',
    category: 'staff',
    definition: 'A doctor undergoing specialist postgraduate training (residency). In Malaysia, registrars are pursuing their Master\'s degree or specialist training programme. They are supervised by consultants and are competent senior doctors.',
    tip: 'Registrars in government hospitals often manage complex cases under consultant supervision. In teaching hospitals (HUKM, UMMC, USM), they are part of the academic medical team.'
  },
  {
    term: 'Nurse-in-Charge',
    full: 'Nurse-in-Charge (NIC)',
    category: 'staff',
    definition: 'The senior registered nurse responsible for managing a hospital ward or shift. The NIC coordinates patient care, supervises junior nurses, and is the primary nursing contact for patients and families during that shift.',
    tip: 'If you need to escalate a concern at ward level, speak to the Nurse-in-Charge. For more serious concerns, ask for the Ward Manager (Sister or Matron).'
  },
  {
    term: 'Matron',
    full: 'Matron / Nursing Sister',
    category: 'staff',
    definition: 'A senior nursing administrator responsible for overseeing nursing care quality in a ward, department, or entire hospital. In Malaysian government hospitals, Matrons manage nursing staff across multiple wards. In private hospitals, the equivalent may be called "Head of Nursing" or "Director of Nursing".',
    tip: 'For unresolved nursing care complaints, requesting a meeting with the Matron is an appropriate escalation step before going to the hospital administration.'
  },

  // ── INSURANCE & ADMINISTRATION ─────────────────────────────────────────────

  {
    term: 'LOG',
    full: 'Letter of Guarantee',
    category: 'insurance',
    definition: 'A document issued by an insurance company (or TPA) to a panel hospital, guaranteeing payment for a patient\'s hospitalisation up to a specified amount. Allows a policyholder to be admitted and treated without paying cash upfront.',
    tip: 'Always call your insurer to request a LOG BEFORE or IMMEDIATELY upon admission. Most insurers require notification within 24 hours. Failure to notify can result in claim rejection or penalty deductions.'
  },
  {
    term: 'TPA',
    full: 'Third Party Administrator',
    category: 'insurance',
    definition: 'A company contracted by an insurer to process health insurance claims, manage panel hospital networks, and issue LOGs on behalf of the insurer. Common TPAs in Malaysia include Allianz Care, ING (Great Eastern Assist), AXA Assistance, and Etiqa TPA.',
    tip: 'Your insurance card typically shows the TPA hotline number. Call this number (not the insurer\'s main line) for emergencies and LOG requests — TPAs are set up to respond quickly.'
  },
  {
    term: 'Co-pay',
    full: 'Co-payment',
    category: 'insurance',
    definition: 'A fixed amount the insured patient pays out-of-pocket for each medical service, with the insurer covering the remainder. For example, "RM 50 co-pay per specialist visit" means you pay RM 50 and insurance covers the rest.',
    tip: 'Co-pays are common in corporate group medical plans. Check your employee benefits booklet for co-pay amounts — some plans have co-pays for GP visits, specialist visits, and certain procedures separately.'
  },
  {
    term: 'Co-insurance',
    full: 'Co-insurance (Cost-sharing)',
    category: 'insurance',
    definition: 'A cost-sharing arrangement where both the insured and insurer pay a percentage of the medical bill. For example, 80/20 co-insurance means the insurer pays 80% and the patient pays 20% of eligible expenses, sometimes up to an out-of-pocket maximum.',
    tip: 'Co-insurance applies after the deductible is met. Be aware of your annual out-of-pocket maximum — once reached, the insurer covers 100% for the rest of the policy year.'
  },
  {
    term: 'PA',
    full: 'Pre-authorisation (Pre-approval)',
    category: 'insurance',
    definition: 'Advance approval from an insurer (or TPA) required before certain non-emergency medical procedures, treatments, or specialist consultations are covered. Without PA, the insurer may refuse to pay even for covered procedures.',
    tip: 'Always confirm which procedures need PA before scheduling. PA is typically required for elective surgeries, MRI/CT scans, chemotherapy, and specialist consultations above a certain cost. Allow 2–5 working days for PA decisions.'
  },
  {
    term: 'Claim',
    full: 'Insurance Claim',
    category: 'insurance',
    definition: 'A formal request submitted to an insurance company for reimbursement of medical expenses paid out-of-pocket, or direct settlement of a bill. Claims require original receipts, a completed claim form, discharge summary, and sometimes medical reports.',
    tip: 'Submit claims promptly — most Malaysian insurers require claims within 30–90 days of discharge. Keep ALL original receipts and ask the hospital for an itemised bill and official discharge summary.'
  },
  {
    term: 'Panel Hospital',
    full: 'Panel Hospital / Panel Clinic',
    category: 'insurance',
    definition: 'A healthcare facility that has a direct billing agreement with a specific insurer or TPA. Policyholders who use panel facilities can usually access cashless treatment via LOG or direct billing. Using a non-panel facility typically requires upfront payment and later reimbursement.',
    tip: 'Panel lists change — always verify panel status BEFORE admission via your insurer\'s app or hotline. A hospital that was panel last year may not be on the current panel.'
  },
  {
    term: 'GLP',
    full: 'Guaranteed Letter of Payment',
    category: 'insurance',
    definition: 'Used interchangeably with Letter of Guarantee (LOG) in some contexts, particularly in corporate group health schemes. A formal guarantee from an insurer or employer to pay the hospital directly for covered services.',
    tip: 'Some corporate plans issue GLP through HR rather than directly through the insurer. Know your company\'s process before you need it urgently.'
  },
  {
    term: 'Deductible',
    full: 'Deductible (Excess)',
    category: 'insurance',
    definition: 'The amount the policyholder must pay out-of-pocket before the insurance coverage begins to pay for a claim. For example, if the deductible is RM 1,000 and the bill is RM 10,000, the insurer pays RM 9,000 and the patient pays RM 1,000.',
    tip: 'Higher deductible plans have lower premiums. Choose a deductible level you can comfortably afford to pay in an emergency — typically RM 500–3,000 for Malaysian health plans.'
  },
  {
    term: 'Waiting Period',
    full: 'Insurance Waiting Period',
    category: 'insurance',
    definition: 'A period from the policy start date during which certain conditions or claims are not covered. Common waiting periods in Malaysia: 30 days general (no illness claims), 12 months for specific conditions (e.g., hernia, cataract, knee), 12–24 months for maternity, and permanent exclusion for pre-existing conditions not disclosed.',
    tip: 'Never lie or omit pre-existing conditions when applying for insurance. Undisclosed conditions discovered during a claim can result in full claim rejection and policy cancellation.'
  },
  {
    term: 'Rider',
    full: 'Insurance Rider (Supplementary Benefit)',
    category: 'insurance',
    definition: 'An add-on benefit attached to a base insurance policy that extends or enhances coverage, typically for an additional premium. Common riders in Malaysia include: outpatient rider, critical illness rider, waiver of premium rider, and personal accident rider.',
    tip: 'Review your riders annually — as you age, some riders become more important (e.g., critical illness), while others become less relevant. Riders can usually be added or removed at renewal.'
  },

  // ── MEDICAL TERMS ─────────────────────────────────────────────────────────

  {
    term: 'Triage',
    full: 'Triage',
    category: 'medical',
    definition: 'The process of sorting and prioritising patients in A&E based on the severity of their condition. In Malaysian government hospitals, triage uses a colour-coded system: Red (immediately life-threatening), Yellow (urgent — can wait briefly), Green (non-urgent), Blue (dead or unsalvageable). Private hospitals may use a 5-level system (Emergency, Very Urgent, Urgent, Semi-Urgent, Non-Urgent).',
    tip: 'Triage order is by medical urgency, not arrival time. A minor injury patient who arrived first will wait if a critical patient arrives. This is correct — do not complain to nurses about waiting; they are prioritising by need.'
  },
  {
    term: 'Vital Signs',
    full: 'Vital Signs',
    category: 'medical',
    definition: 'The four basic measurements used to assess a patient\'s fundamental body functions: Temperature (normal 36.1–37.2°C), Blood Pressure (normal ~120/80 mmHg), Pulse rate (normal 60–100 bpm), and Respiratory rate (normal 12–20 breaths/min). Oxygen saturation (SpO₂, normal ≥95%) is now considered a "fifth vital sign".',
    tip: 'Ask the nurse to tell you your own vital signs readings — you are entitled to know, and tracking trends is useful for understanding your condition.'
  },
  {
    term: 'Biopsy',
    full: 'Biopsy',
    category: 'medical',
    definition: 'A diagnostic procedure where a small sample of tissue is taken from the body and examined under a microscope by a pathologist to determine the nature of a disease (e.g., whether a lump is cancerous, what type of cancer it is, or the degree of organ damage). Can be done by needle, endoscope, or surgery.',
    tip: 'Biopsy results typically take 5–14 days. Ask your doctor for the pathology report number — you can request a copy of the actual pathology report, not just the verbal summary.'
  },
  {
    term: 'MRI',
    full: 'Magnetic Resonance Imaging',
    category: 'medical',
    definition: 'A non-radiation imaging technique using strong magnetic fields and radio waves to produce detailed images of soft tissues, the brain, spinal cord, joints, and organs. Superior to CT for soft tissue detail. Loud (ear protection provided) and the machine is a narrow tube — inform the radiographer if you are claustrophobic.',
    tip: 'MRI typically requires pre-authorisation from insurers due to high cost (RM 800–2,500+). Remove all metal before the scan. Pacemakers, cochlear implants, or metallic surgical clips may be contraindications — always inform the radiologist.'
  },
  {
    term: 'CT Scan',
    full: 'Computed Tomography Scan',
    category: 'medical',
    definition: 'An imaging technique that uses X-rays from multiple angles processed by a computer to produce cross-sectional images. Faster than MRI (minutes vs. 30–60 min). Uses ionising radiation. Excellent for trauma, chest, abdomen, and detecting bleeds in the brain. Often done with contrast dye (iodine-based).',
    tip: 'Inform the radiographer if you have a contrast allergy, kidney disease, or are pregnant. CT scans involve radiation — for children and young adults, the benefit vs. radiation exposure should be discussed with your doctor.'
  },
  {
    term: 'ECG / EKG',
    full: 'Electrocardiogram',
    category: 'medical',
    definition: 'A non-invasive test that records the electrical activity of the heart via electrodes attached to the skin. Takes about 10 minutes. Used to detect heart attacks, arrhythmias (irregular heartbeats), conduction abnormalities, and heart enlargement. Also called "12-lead ECG".',
    tip: 'An ECG is a snapshot in time — a normal ECG does NOT rule out a heart attack (especially in the early minutes). If symptoms persist, a repeat ECG or blood troponin tests are needed.'
  },
  {
    term: 'Colonoscopy',
    full: 'Colonoscopy',
    category: 'medical',
    definition: 'An endoscopic procedure using a flexible camera (colonoscope) inserted via the rectum to examine the entire large bowel (colon). Used for colorectal cancer screening, investigation of rectal bleeding, bowel habit changes, and removal of polyps. Requires bowel preparation (laxative) the day before.',
    tip: 'Colonoscopy screening is recommended from age 50 for average-risk Malaysians, or age 40–45 for those with a first-degree relative with colorectal cancer. MOH screening programmes offer subsidised colonoscopy at government hospitals.'
  },
  {
    term: 'Endoscopy',
    full: 'Upper GI Endoscopy (Gastroscopy / OGD)',
    category: 'medical',
    definition: 'An endoscopic procedure using a flexible camera inserted via the mouth to examine the oesophagus, stomach, and the first part of the small intestine (duodenum). Used to investigate heartburn, reflux, ulcers, swallowing difficulties, and unexplained anaemia. Usually done under light sedation.',
    tip: 'You must fast (NBM) for at least 6 hours before an upper endoscopy. Arrange a driver — sedation means you cannot drive for the rest of the day.'
  },
  {
    term: 'PCI',
    full: 'Percutaneous Coronary Intervention',
    category: 'medical',
    definition: 'A non-surgical procedure to open blocked coronary arteries causing a heart attack or angina. A catheter with a balloon and stent is inserted via the wrist (radial) or groin (femoral) artery and guided to the blocked artery. The balloon opens the blockage and the stent holds the artery open. Also called "coronary angioplasty" or "stenting".',
    tip: 'PCI performed within 90 minutes of hospital arrival for a heart attack ("door-to-balloon time") dramatically improves outcomes. Drug-eluting stents (DES) are standard — they cost significantly more than bare metal stents but reduce re-blockage risk.'
  },
  {
    term: 'CABG',
    full: 'Coronary Artery Bypass Grafting',
    category: 'medical',
    definition: 'Open-heart surgery to bypass blocked coronary arteries using blood vessels (grafts) taken from the chest wall (mammary artery) or leg (saphenous vein). Recommended when multiple arteries are severely blocked and PCI is not feasible. Recovery typically takes 6–12 weeks.',
    tip: 'CABG is one of the most expensive procedures in Malaysia (RM 30,000–120,000 depending on hospital tier). Ensure your insurance has an adequate annual or lifetime limit — CABG plus ICU recovery often exceeds RM 60,000 at private hospitals.'
  },
  {
    term: 'Dialysis',
    full: 'Renal Dialysis (Haemodialysis / Peritoneal Dialysis)',
    category: 'medical',
    definition: 'A life-sustaining treatment that artificially removes waste products and excess fluid from the blood when the kidneys can no longer do so (end-stage kidney disease). Haemodialysis is performed in a dialysis centre 3 times a week (4–5 hours per session). Peritoneal dialysis can be done at home.',
    tip: 'Government dialysis centres (NKF, Klinik Dialisis KKM) are subsidised. NKF Malaysia and government hospitals provide subsidised dialysis for eligible low-income patients. Waiting lists exist — seek referral early upon diagnosis of chronic kidney disease.'
  },
  {
    term: 'Chemotherapy',
    full: 'Chemotherapy',
    category: 'medical',
    definition: 'Treatment of cancer using chemical drugs (cytotoxic agents) that kill rapidly dividing cells. Given orally or intravenously, in cycles (e.g., every 3 weeks) over months. Side effects include nausea, hair loss, fatigue, increased infection risk, and mouth sores.',
    tip: 'Chemotherapy at government hospitals is heavily subsidised for Malaysian citizens. The National Cancer Institute (Institut Kanser Negara, IKN) in Putrajaya is the main public oncology centre. Maintain your treatment schedule — missing cycles reduces efficacy.'
  },
  {
    term: 'Radiotherapy',
    full: 'Radiotherapy (Radiation Therapy)',
    category: 'medical',
    definition: 'Cancer treatment using high-energy radiation (typically X-rays) targeted at tumour cells to destroy them or prevent their growth. Usually given daily (weekdays) over 3–7 weeks. Side effects depend on the area treated (e.g., skin changes, fatigue, swallowing difficulties for head/neck radiation).',
    tip: 'Radiotherapy machines (linear accelerators) are only available at major hospitals. Government radiotherapy centres include HKL, Hospital Ampang, and Institut Kanser Negara. Private centres include Beacon Hospital and Pantai Cancer Centre.'
  },
  {
    term: 'Palliative Care',
    full: 'Palliative Care',
    category: 'medical',
    definition: 'Specialised medical care focused on relief from pain, symptoms, and stress of serious illness — for patients at any stage of illness, not only end of life. Goal is to improve quality of life for both patient and family. Provided by a multidisciplinary team including doctors, nurses, social workers, and chaplains.',
    tip: 'Ask for a palliative care referral early — it is not "giving up." Evidence shows palliative care alongside curative treatment improves both quality of life and sometimes survival. Hospis Malaysia provides free community palliative care in the Klang Valley.'
  },
  {
    term: 'NPO / NBM',
    full: 'Nil Per Os / Nil By Mouth',
    category: 'medical',
    definition: 'A medical instruction meaning the patient must not eat or drink anything (including water) for a specified period. Required before surgery (typically 6 hours for solids, 2 hours for clear liquids), endoscopy, and certain investigations requiring anaesthesia or sedation.',
    tip: 'NBM applies to ALL food and drink including water, sweets, and chewing gum. Medications are usually still taken with a small sip of water — confirm with your nurse. Fasting applies to emergency surgery too — inform the anaesthetist of your last meal time.'
  },

  // ── MALAYSIAN-SPECIFIC ────────────────────────────────────────────────────

  {
    term: 'MySalam',
    full: 'MySalam — Skim Perlindungan Kesihatan Nasional',
    category: 'malaysian',
    definition: 'Malaysia\'s national health protection scheme launched in 2019, providing free takaful coverage for B40 (bottom 40%) income group households. Covers 45 critical illnesses and hospitalisation income replacement (RM 50 per day, up to 14 days per year). Managed by Great Eastern Takaful under the Ministry of Finance.',
    tip: 'Eligibility is automatic for eligible B40 households — no registration required. Check your eligibility and claim status at mysalam.com.my or through participating hospitals. Claims must be submitted within 60 days of discharge.'
  },
  {
    term: 'PERKESO / SOCSO',
    full: 'Pertubuhan Keselamatan Sosial / Social Security Organisation',
    category: 'malaysian',
    definition: 'Malaysia\'s social security body providing employment injury insurance and invalidity scheme to formal sector workers. Benefits include medical care for work injuries, temporary/permanent disablement benefits, invalidity pension, and rehabilitation services. Contributions are mandatory for employees earning below RM 5,000/month.',
    tip: 'If injured at work, file a SOCSO claim immediately through your employer. SOCSO\'s Rehabilitation Centre (PERKESO Rehabilitation Centre) in Bangi provides free rehabilitation services for injured workers. Self-employed workers can now opt into the Self-Employment Social Security Scheme (SKSPS).'
  },
  {
    term: 'JKM',
    full: 'Jabatan Kebajikan Masyarakat (Department of Social Welfare)',
    category: 'malaysian',
    definition: 'Malaysia\'s government department under the Ministry of Women, Family and Community Development responsible for social welfare services. Provides financial assistance, medical aid, shelter, rehabilitation, and care services for the poor, disabled, elderly, abused, and destitute.',
    tip: 'JKM can assist with applications for medical financial aid (Bantuan Khas Hospital) for patients who cannot afford treatment. Contact the JKM office in your district (Pejabat Kebajikan Masyarakat Daerah) — bring IC, income documents, and hospital bills.'
  },
  {
    term: 'KKIA',
    full: 'Klinik Kesihatan Ibu & Anak',
    category: 'malaysian',
    definition: 'Government Maternal and Child Health Clinics operated by the Ministry of Health (MOH). Provide free or subsidised services including antenatal care, postnatal care, child health checks (1MCC booklet), immunisations, family planning, and nutrition counselling. Found in most districts throughout Malaysia.',
    tip: 'All antenatal care at KKIA is free for Malaysian citizens. The 1MCC (1Malaysia Child Health Card / Buku Rekod Kesihatan Kanak-Kanak) issued here should be kept and brought to every health visit for the child.'
  },
  {
    term: 'FPP',
    full: 'Full Paying Patient Scheme',
    category: 'malaysian',
    definition: 'A scheme at Malaysian government hospitals allowing patients to pay for private room amenities and specialist-of-choice care within the government hospital setting. FPP patients pay at closer-to-private rates but still benefit from government hospital infrastructure and specialist expertise. Not available at all government hospitals.',
    tip: 'FPP is useful if you want a private specialist at a government hospital (e.g., IJN) but at a lower cost than a fully private hospital. Many insurance plans cover FPP rates. Confirm FPP availability and room availability before admission.'
  }

]
