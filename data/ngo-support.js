// data/ngo-support.js
var NGO_SUPPORT = [
  {
    id: "ncsm",
    name: "National Cancer Society Malaysia (NCSM)",
    nameBM: "Persatuan Kanser Kebangsaan Malaysia",
    nameZH: "马来西亚全国癌症协会",
    category: "cancer",
    services: [
      "Financial assistance for cancer treatment costs (means-tested)",
      "Free or subsidised transport to hospital for chemotherapy and radiotherapy",
      "Counselling and peer support groups",
      "Palliative care referrals and home care coordination",
      "Breast prosthesis programme for post-mastectomy patients",
      "Wig programme for chemotherapy patients experiencing hair loss",
      "Free mammography screening and early detection campaigns"
    ],
    phone: "+603-2698 7655",
    website: "https://cancer.org.my",
    email: "info@cancer.org.my",
    states: ["Kuala Lumpur", "Penang", "Johor", "Perak", "Selangor", "Sabah", "Sarawak"],
    eligibility: "Cancer patients and their families. Financial aid is means-tested — household income below RM 3,000/month typically qualifies for transport subsidies and assistance. Counselling and support groups are open to all cancer patients.",
    howToApply: "Walk in or call the NCSM office. Bring: IC, diagnosis letter from treating oncologist or hospital, and income proof (pay slip or Surat Akuan Miskin from JKM). No referral letter strictly required but recommended. Appointments available.",
    keyBenefits: [
      "Transport subsidies for chemotherapy and radiotherapy sessions",
      "Breast prosthesis programme — post-mastectomy patients",
      "Wig programme for patients undergoing chemotherapy",
      "Financial grants for treatment costs (subject to assessment)",
      "Cancer support hotline and counselling"
    ],
    notes: "NCSM also runs free mammography screening vans, public cancer awareness programmes, and has a dedicated resource centre. The transport assistance programme has helped thousands of patients who cannot afford daily travel to hospital for radiotherapy."
  },
  {
    id: "hospis-malaysia",
    name: "Hospis Malaysia",
    nameBM: "Hospis Malaysia",
    nameZH: "马来西亚安宁疗护",
    category: "hospice",
    services: [
      "Free home palliative care for terminal patients (cancer, end-stage organ failure, etc.)",
      "Symptom management at home — pain control, wound care",
      "Psychosocial support for patients and family caregivers",
      "Nurse and doctor home visits",
      "Bereavement support for families",
      "Caregiver training and education"
    ],
    phone: "+603-9133 3936",
    website: "https://www.hospismalaysia.org",
    email: "enquiry@hospismalaysia.org",
    states: ["Kuala Lumpur", "Selangor"],
    eligibility: "Patients with terminal illness (predominantly cancer, but also end-stage renal disease, heart failure, COPD). Service is FREE. Referral from doctor or hospital nurse is helpful but patients or families can self-refer.",
    howToApply: "Call or email Hospis Malaysia. A home visit assessment will be arranged. Bring: IC, medical reports or discharge summary, and treating hospital details. No means-testing — the service is free.",
    keyBenefits: [
      "Free professional home palliative care — nurses and doctors visit at home",
      "Pain management at home — reduces need for repeated hospital admissions",
      "Psychological and spiritual support for patient and whole family",
      "Bereavement support after patient's passing"
    ],
    notes: "Hospis Malaysia is one of Malaysia's most respected NGOs. They advocate for palliative care access nationwide. If you are outside KL/Selangor, ask your hospital social worker to identify local hospice organisations — some states have their own palliative care networks."
  },
  {
    id: "nkf-malaysia",
    name: "National Kidney Foundation Malaysia (NKF)",
    nameBM: "Yayasan Buah Pinggang Kebangsaan Malaysia",
    nameZH: "马来西亚全国肾脏基金会",
    category: "kidney",
    services: [
      "Subsidised dialysis transport assistance",
      "Dialysis session cost assistance (RM 150/session subsidy for qualifying patients)",
      "Referral to NKF dialysis centres nationwide",
      "Kidney disease screening and public awareness",
      "Support groups for kidney patients and families",
      "Pre-dialysis counselling and education"
    ],
    phone: "+603-7954 9048",
    website: "https://www.nkf.org.my",
    email: "info@nkf.org.my",
    states: ["All"],
    eligibility: "Kidney failure patients on dialysis. Financial assistance is means-tested — patients with monthly household income below a certain threshold (confirm with NKF). NKF dialysis centres are available in multiple states and some subsidise treatment costs significantly.",
    howToApply: "Call NKF or visit the nearest NKF dialysis centre. Bring: IC, nephrologist referral letter, recent blood test results (creatinine, urea, electrolytes), income proof. Assessment will be conducted.",
    keyBenefits: [
      "Subsidised dialysis — significantly reducing the RM 150–300/session private cost",
      "Transport assistance for dialysis patients (3x per week is standard)",
      "Nationwide NKF dialysis centre network",
      "Pre-dialysis education to help patients understand their condition and options"
    ],
    notes: "Dialysis 3 times a week costs RM 1,800–3,600/month at private centres. NKF can significantly reduce this burden. Also check with the Hospital's social worker — MOH public dialysis units exist and are heavily subsidised for citizens."
  },
  {
    id: "bcwa",
    name: "Breast Cancer Welfare Association Malaysia (BCWA)",
    nameBM: "Persatuan Kebajikan Pesakit Kanser Payu Dara Malaysia",
    nameZH: "马来西亚乳癌福利协会",
    category: "cancer",
    services: [
      "Peer support and counselling for breast cancer patients",
      "Financial assistance for treatment-related costs",
      "Breast prosthesis assistance programme",
      "Lymphoedema management support",
      "Awareness and early detection campaigns",
      "Post-treatment rehabilitation support groups"
    ],
    phone: "+603-7956 7039",
    website: "https://www.bcwa.org.my",
    email: "info@bcwa.org.my",
    states: ["Kuala Lumpur", "Selangor", "Penang", "Johor"],
    eligibility: "Breast cancer patients (current and survivors) and their families. Support services are open to all. Financial assistance is needs-based.",
    howToApply: "Call or walk in. Bring diagnosis letter from oncologist. No strict eligibility requirements for support groups and counselling.",
    keyBenefits: [
      "Peer support from breast cancer survivors — powerful for newly diagnosed patients",
      "Breast prosthesis fitting and cost assistance",
      "Lymphoedema management education",
      "Support groups — reduces isolation and anxiety"
    ],
    notes: "BCWA works closely with oncology departments at major hospitals. Ask your breast surgeon or oncologist to refer you."
  },
  {
    id: "maf",
    name: "Malaysian AIDS Foundation (MAF)",
    nameBM: "Yayasan AIDS Malaysia",
    nameZH: "马来西亚艾滋病基金会",
    category: "aids",
    services: [
      "Financial assistance for HIV/AIDS treatment costs",
      "Antiretroviral therapy (ART) support and access",
      "Counselling and psychosocial support",
      "HIV testing referrals",
      "Community outreach for key affected populations",
      "Advocacy for HIV/AIDS patients' rights"
    ],
    phone: "+603-2092 4858",
    website: "https://www.maf.org.my",
    email: "info@maf.org.my",
    states: ["Kuala Lumpur", "Selangor", "Penang", "Johor"],
    eligibility: "People living with HIV/AIDS (PLHIV). Families affected by HIV/AIDS. Some programmes target key populations (sex workers, injecting drug users) without discrimination.",
    howToApply: "Call MAF or approach any ID clinic at public hospitals. Government hospitals provide free ART for Malaysian citizens — MAF supplements with additional support.",
    keyBenefits: [
      "Bridges patients to free government ART programmes",
      "Financial help for non-medication treatment costs",
      "Confidential counselling — stigma-aware support",
      "Advocacy for patient rights and non-discrimination"
    ],
    notes: "Malaysian citizens living with HIV receive free ART medication from MOH clinics. MAF helps with access barriers, adherence support, and stigma. Hospital Sungai Buloh (Selangor) and Hospital Kuala Lumpur have major HIV/ID clinics."
  },
  {
    id: "mmha",
    name: "Malaysian Mental Health Association (MMHA)",
    nameBM: "Persatuan Kesihatan Mental Malaysia",
    nameZH: "马来西亚精神健康协会",
    category: "mental",
    services: [
      "Public mental health education and awareness",
      "Support groups for mental health conditions",
      "Referral services to mental health professionals",
      "Community mental health programmes",
      "Advocacy for mental health policy",
      "Information and helpline for mental health queries"
    ],
    phone: "+603-2780 6803",
    website: "https://mmha.org.my",
    email: "admin@mmha.org.my",
    states: ["Kuala Lumpur", "Selangor"],
    eligibility: "Anyone with mental health concerns or those supporting someone with mental health issues. No means-testing for education and support services.",
    howToApply: "Call or email MMHA. Walk-in welcome for information. For clinical services, they will refer to appropriate mental health facilities.",
    keyBenefits: [
      "Support groups and peer networks for mental health conditions",
      "Referral guide to mental health services in Malaysia",
      "Reduce stigma — safe space for mental health discussions",
      "Advocacy for better mental health services"
    ],
    notes: "For urgent mental health crises, direct to hospital A&E or call Befrienders (see below). MMHA is more focused on education, advocacy, and support rather than direct clinical intervention. MOH mental health clinics are available at all public hospitals."
  },
  {
    id: "befrienders",
    name: "Befrienders Malaysia",
    nameBM: "Befrienders Malaysia",
    nameZH: "马来西亚友情协会",
    category: "mental",
    services: [
      "24-hour emotional support crisis helpline — confidential",
      "Non-judgmental listening for people in distress",
      "Support for suicidal thoughts and self-harm",
      "Bereavement support",
      "Walk-in emotional support at centres"
    ],
    phone: "+603-7627 2929",
    website: "https://www.befrienders.org.my",
    email: "sam@befrienders.org.my",
    states: ["Kuala Lumpur", "Penang", "Johor Bahru", "Ipoh", "Kota Kinabalu", "Kuching"],
    eligibility: "Anyone in emotional distress, crisis, or who needs someone to talk to. No eligibility criteria — the service is open to all. Calls are confidential.",
    howToApply: "Call the crisis line: +603-7627 2929 (KL). Available 24 hours. Or visit the Befrienders centre in person. No referral needed.",
    keyBenefits: [
      "IMMEDIATE: 24/7 crisis emotional support — real humans, not bots",
      "Confidential — no records, no judgment",
      "Safe space for suicidal thoughts — trained volunteers de-escalate crisis",
      "Free service"
    ],
    notes: "CRITICAL NOTE: Befrienders is NOT a medical emergency service. If someone has already taken action to harm themselves, call 999 or proceed to hospital A&E. Befrienders is for emotional support and crisis listening. KL line: +603-7627 2929. Penang: +604-281 5161. JB: +607-331 0003."
  },
  {
    id: "wao",
    name: "Women's Aid Organisation (WAO)",
    nameBM: "Pertubuhan Bantuan Wanita",
    nameZH: "妇女援助组织",
    category: "women-dv",
    services: [
      "24/7 crisis hotline for domestic violence and abuse",
      "Emergency safe shelter for women and children fleeing domestic violence",
      "Legal aid and court accompaniment",
      "Counselling for survivors",
      "Case management and safety planning",
      "Economic empowerment programmes",
      "WAO TINA app for emergency alert"
    ],
    phone: "+603-7956 3488",
    website: "https://www.wao.org.my",
    email: "wao@wao.org.my",
    states: ["Kuala Lumpur", "Selangor"],
    eligibility: "Women and children experiencing domestic violence, sexual violence, stalking, or abuse. No nationality restriction — service open to Malaysian citizens, permanent residents, and migrants.",
    howToApply: "Call the 24/7 hotline: +603-7956 3488. For emergencies — call immediately. For legal aid — arrange appointment. Interpreter services available.",
    keyBenefits: [
      "IMMEDIATE safe house shelter — women and children can escape dangerous situations",
      "24/7 crisis hotline staffed by trained counsellors",
      "Legal aid — help navigating courts, Interim Protection Orders (IPO), restraining orders",
      "Safety planning — helping survivors make safe exit decisions",
      "Confidential service"
    ],
    notes: "WAO is one of Malaysia's most respected DV support organisations. If hospital staff encounter DV patients, WAO can be contacted for coordination. WAO TINA (app-based emergency alert) allows survivors to send silent alerts to trusted contacts."
  },
  {
    id: "awam",
    name: "All Women's Action Society (AWAM)",
    nameBM: "Persatuan Tindakan Wanita Sepenuhnya",
    nameZH: "全女性行动协会",
    category: "women-dv",
    services: [
      "Helpline for women experiencing violence, harassment, and discrimination",
      "Counselling and emotional support",
      "Legal information and referrals",
      "Sexual violence support",
      "Public education on gender-based violence",
      "Advocacy for women's rights and policy change"
    ],
    phone: "+603-7877 0224",
    website: "https://awam.org.my",
    email: "awam@awam.org.my",
    states: ["Kuala Lumpur", "Selangor", "Penang"],
    eligibility: "Women experiencing domestic violence, sexual harassment, discrimination, or other gender-based issues. Open to all women regardless of nationality.",
    howToApply: "Call the helpline or email. For counselling, appointments can be arranged.",
    keyBenefits: [
      "Complementary to WAO — additional support resource for women",
      "Legal information and referrals",
      "Sexual harassment support (workplace, public)",
      "Advocacy and education"
    ],
    notes: "AWAM runs a Women's Support Centre (WSCC). For acute DV emergencies with shelter needs, WAO has more emergency capacity — AWAM and WAO often work together."
  },
  {
    id: "mrds",
    name: "Malaysian Rare Disorders Society (MRDS)",
    nameBM: "Persatuan Penyakit Jarang Ditemui Malaysia",
    nameZH: "马来西亚罕见病协会",
    category: "disability",
    services: [
      "Patient registry and support network for rare disease patients",
      "Guidance on navigating the healthcare system for rare diseases",
      "Connection to rare disease specialists and centres",
      "Financial assistance referrals",
      "Advocacy for rare disease drug access and policy",
      "Patient education and family support"
    ],
    phone: "+603-8069 9512",
    website: "https://mrds.org.my",
    email: "info@mrds.org.my",
    states: ["All"],
    eligibility: "Patients diagnosed with rare diseases and their families. A rare disease in Malaysia is typically defined as affecting fewer than 1 in 2,000 people.",
    howToApply: "Call or email MRDS. Online registration available on website. Bring diagnosis documents from specialist.",
    keyBenefits: [
      "Community of rare disease patients — reduces isolation",
      "Guidance on accessing specialist care and rare disease drugs",
      "Advocacy with MOH for rare disease medicine access",
      "Connections to international rare disease support networks"
    ],
    notes: "Rare disease patients often face significant difficulties getting diagnoses and accessing expensive orphan drugs. MRDS works with MOH to improve access. UMMC and Hospital Kuala Lumpur have rare disease clinics."
  },
  {
    id: "nasam",
    name: "National Stroke Association of Malaysia (NASAM)",
    nameBM: "Persatuan Strok Kebangsaan Malaysia",
    nameZH: "马来西亚全国中风协会",
    category: "disability",
    services: [
      "Stroke rehabilitation therapy at NASAM centres (physiotherapy, occupational therapy, speech therapy)",
      "Outpatient neurorehabilitation at subsidised rates",
      "Caregiver training programmes",
      "Support groups for stroke survivors and families",
      "Home therapy advice and guidance",
      "Public stroke awareness and FAST campaign"
    ],
    phone: "+603-7931 0930",
    website: "https://www.nasam.org",
    email: "nasam@nasam.org",
    states: ["Kuala Lumpur", "Selangor", "Penang", "Johor", "Perak"],
    eligibility: "Stroke survivors requiring ongoing rehabilitation. Services are means-tested for subsidy — patients with limited income pay less. All stroke patients welcome.",
    howToApply: "Referral from hospital physiotherapy or neurology team is helpful. Can self-refer. Call NASAM to arrange initial assessment. Bring: IC, discharge summary from hospital, and any existing therapy records.",
    keyBenefits: [
      "Physiotherapy, OT, and speech therapy at subsidised rates — much cheaper than private",
      "Structured outpatient rehabilitation programme",
      "Caregiver training — equips family members to support recovery at home",
      "Social support group — peer motivation for recovery"
    ],
    notes: "Stroke rehabilitation is a long process. Public hospital physiotherapy has limited capacity. NASAM bridges the gap by providing ongoing outpatient rehab at affordable cost. The earlier rehabilitation starts, the better the recovery outcomes."
  },
  {
    id: "malaysian-care",
    name: "Malaysian CARE",
    nameBM: "Malaysian CARE",
    nameZH: "马来西亚关怀协会",
    category: "general",
    services: [
      "Home care services for elderly and disabled individuals",
      "Caregiver support and training",
      "Welfare assistance and food aid",
      "Community rehabilitation programmes",
      "Counselling and psychosocial support",
      "Poverty alleviation programmes"
    ],
    phone: "+603-4257 9958",
    website: "https://www.malaysiancare.org",
    email: "info@malaysiancare.org",
    states: ["Kuala Lumpur", "Selangor", "Sabah", "Sarawak"],
    eligibility: "Vulnerable individuals including elderly, disabled, low-income families, and caregivers in need. Christian NGO with open, non-discriminatory services.",
    howToApply: "Call or email Malaysian CARE. Home visit assessment available.",
    keyBenefits: [
      "Home care services — supports families with bedridden or disabled members",
      "Caregiver training — teaches practical caregiving skills",
      "Welfare assistance for vulnerable families",
      "Community-based rehabilitation support"
    ],
    notes: "Malaysian CARE has a long history of community welfare work. They work especially in urban poor communities in KL. Some programmes extend to East Malaysia."
  },
  {
    id: "jkm",
    name: "Jabatan Kebajikan Masyarakat (JKM)",
    nameBM: "Jabatan Kebajikan Masyarakat (JKM)",
    nameZH: "社会福利部 (JKM)",
    category: "general",
    services: [
      "Bantuan Khas Kebajikan — cash welfare assistance for poor and disabled",
      "Bantuan OKU (Orang Kurang Upaya) — disability financial assistance",
      "Bantuan Orang Tua — elderly welfare assistance",
      "Home care services for elderly and disabled",
      "Surat Akuan Miskin (poverty verification letters for medical fee waivers)",
      "Referral to welfare homes, nursing homes",
      "Child welfare and protection services",
      "Rehabilitation programmes"
    ],
    phone: "+603-8000 8000 (toll-free hotline)",
    website: "https://www.jkm.gov.my",
    email: "aduan@jkm.gov.my",
    states: ["All"],
    eligibility: "Malaysian citizens in need — poor, disabled (OKU), elderly, abused children, single mothers, and others in social need. Income and asset means-testing applies for cash assistance.",
    howToApply: "Visit the nearest JKM office (every state and major district has an office). Bring: IC, income proof, supporting documents (medical, birth cert, etc.). Hospital social workers can help initiate referrals to JKM. Surat Akuan Miskin can be obtained from JKM for hospital fee waiver applications.",
    keyBenefits: [
      "Surat Akuan Miskin — critical document for hospital fee waivers and NGO financial assistance",
      "Disability (OKU) registration — opens access to special assistance schemes",
      "Monthly cash welfare assistance for qualifying low-income families",
      "Government home care services",
      "Referral gateway to other welfare programmes"
    ],
    notes: "JKM is the government gateway for all social welfare. Hospital social workers liaise closely with JKM. IMPORTANT: JKM's Surat Akuan Miskin (poverty certificate) is required by many NGOs and hospitals for financial assistance — get this first if your family is in low-income category."
  },
  {
    id: "zakat",
    name: "Zakat / Lembaga Zakat Negeri",
    nameBM: "Lembaga Zakat Negeri",
    nameZH: "州宗教局天课机构",
    category: "general",
    services: [
      "Zakat medical financial assistance for Muslims",
      "Hospital bill payment assistance (from Zakat funds)",
      "Medicine and healthcare cost assistance",
      "Asnaf (eligible recipient) income assistance",
      "Dialysis and chronic disease treatment support"
    ],
    phone: "Varies by state — see state Lembaga Zakat website",
    website: "https://www.zakat.com.my",
    email: "Contact state Lembaga Zakat directly",
    states: ["All"],
    eligibility: "Muslims who qualify as Asnaf (Zakat eligible recipients) — particularly Fakir (very poor) and Miskin (poor) categories. Income below the Zakat threshold. Malaysian citizen or permanent resident.",
    howToApply: "Apply at the state Lembaga Zakat or Majlis Agama Islam office. Bring: IC, medical bills, income proof, hospital letter confirming diagnosis. Some states have online application portals. Hospital Islamic affairs departments can also assist.",
    keyBenefits: [
      "Medical bill assistance — can cover hospital bills, surgery, ICU costs",
      "Dialysis treatment support for Muslims",
      "Ongoing treatment assistance for chronic conditions",
      "Available in all states — state-based Zakat bodies",
      "Can be applied alongside JKM assistance"
    ],
    notes: "Zakat funds can be very significant for Muslim patients with large medical bills. Each state has its own Lembaga Zakat (e.g., Lembaga Zakat Selangor, Majlis Agama Islam Wilayah Persekutuan). The criteria and amounts differ by state. Hospital social workers at public hospitals can guide Muslim patients to the appropriate body."
  },
  {
    id: "mysalam",
    name: "MySalam",
    nameBM: "MySalam — Skim Perlindungan Penyakit Serius Kebangsaan",
    nameZH: "MySalam — 国家重病保障计划",
    category: "general",
    services: [
      "Free critical illness insurance coverage for B40 Malaysians",
      "Cash payout upon diagnosis of 36 critical illnesses (including cancer, heart attack, stroke, end-stage kidney disease)",
      "Daily hospital income benefit (RM 50/day for hospitalisation due to critical illness)",
      "Cover is automatic — no application needed if eligible"
    ],
    phone: "+603-2612 8888 (Great Eastern, the administrator)",
    website: "https://www.mysalam.com.my",
    email: "mysalam@greateastern.com.my",
    states: ["All"],
    eligibility: "Malaysian citizens aged 18–65 with annual taxable income below RM 100,000 (B40 and M40 lower bracket). Coverage is AUTOMATIC if you received Bantuan Sara Hidup (BSH) or Sumbangan Tunai Rakyat (STR). To check eligibility, visit the MySalam portal or call the hotline.",
    howToApply: "Check eligibility at www.mysalam.com.my. If you qualify automatically, your coverage has been activated — you just need to CLAIM after diagnosis. To claim: download claim form, attach diagnosis confirmation letter from specialist/hospital, IC, and bank account details. Submit to Great Eastern.",
    keyBenefits: [
      "FREE — no premium payment needed",
      "Up to RM 8,000 critical illness payout (lump sum on diagnosis of qualifying conditions)",
      "RM 50/day daily hospital income benefit",
      "36 covered conditions including cancer, heart attack, stroke, kidney failure",
      "Automatic coverage for qualifying B40 Malaysians — many don't know they're covered"
    ],
    notes: "IMPORTANT: This is one of the most underutilised welfare benefits in Malaysia. Many B40 Malaysians are covered but don't know about it. When helping a patient with medical expenses, ALWAYS check if they qualify for MySalam first — it can provide significant financial relief."
  },
  {
    id: "perkeso",
    name: "PERKESO / SOCSO (Social Security Organisation)",
    nameBM: "Pertubuhan Keselamatan Sosial (PERKESO)",
    nameZH: "社会保险机构 (PERKESO/SOCSO)",
    category: "general",
    services: [
      "Employment Injury Scheme — benefits for work-related injuries and occupational diseases",
      "Invalidity Scheme — monthly invalidity pension for permanent disability from any cause",
      "Death benefits for dependants of workers who die from work injury",
      "Constant Attendance Allowance for severely disabled workers",
      "Physical and vocational rehabilitation at PERKESO rehab centres",
      "Return to Work programme for injured workers"
    ],
    phone: "+603-4264 5555",
    website: "https://www.perkeso.gov.my",
    email: "helpdesk@perkeso.gov.my",
    states: ["All"],
    eligibility: "Employees (or self-employed who opt in) contributing to SOCSO. Employers must register employees earning below RM 5,000/month (2021: all employees). Employment Injury Scheme covers work accidents. Invalidity Scheme covers permanent disability from any cause.",
    howToApply: "Report work injury within 48 hours to employer and SOCSO office. For invalidity — apply at PERKESO office. Bring: IC, medical reports, employer letter, medical certificate. For rehabilitation: referral from treating doctor.",
    keyBenefits: [
      "Medical treatment coverage for work-related injuries at PERKESO panel hospitals",
      "Monthly invalidity pension if permanently disabled due to work accident",
      "Rehabilitation — PERKESO has dedicated rehab centres (Nilai, Penang)",
      "Return to Work programme — vocational rehabilitation and job placement",
      "Substantial financial relief for workers injured at work"
    ],
    notes: "PERKESO is critical for workers injured on the job. Employers MUST register employees and contribute. If your employer has not registered you, you may still be entitled to benefits — seek legal advice or contact PERKESO. Also note: PERKESO's Return to Work programme has good outcomes for musculoskeletal injuries."
  },
  {
    id: "mycare",
    name: "MyCare (Islamic Social Services)",
    nameBM: "MyCare — Perkhidmatan Kebajikan Islam",
    nameZH: "MyCare — 伊斯兰社会服务",
    category: "general",
    services: [
      "Medical financial assistance for Muslims in need",
      "Emergency welfare assistance",
      "Education assistance for orphans and poor children",
      "Humanitarian aid and disaster relief",
      "Community empowerment programmes"
    ],
    phone: "+603-4143 0498",
    website: "https://www.mycare.org.my",
    email: "info@mycare.org.my",
    states: ["Kuala Lumpur", "Selangor"],
    eligibility: "Muslims in need, including those facing medical financial difficulties. Means-tested.",
    howToApply: "Call or email MyCare. Application form available on website. Bring supporting medical and income documents.",
    keyBenefits: [
      "Medical financial aid for Muslims who do not qualify for or are awaiting Zakat",
      "Emergency assistance — can act quickly for urgent cases",
      "Holistic welfare support"
    ],
    notes: "MyCare complements the Zakat system and can act more quickly for urgent cases. Works with other Islamic welfare bodies."
  },
  {
    id: "ykn",
    name: "Yayasan Kebajikan Negara (YKN)",
    nameBM: "Yayasan Kebajikan Negara (YKN)",
    nameZH: "国家福利基金会 (YKN)",
    category: "general",
    services: [
      "Welfare assistance for poor and needy Malaysians",
      "Medical assistance and hospitalisation cost support",
      "Education assistance for poor children",
      "Emergency welfare aid",
      "Referral to other government welfare bodies"
    ],
    phone: "+603-4257 1772",
    website: "https://www.ykn.org.my",
    email: "info@ykn.org.my",
    states: ["All"],
    eligibility: "Poor and needy Malaysian citizens. Means-tested. Priority to extreme poor and those facing medical emergencies without access to other welfare.",
    howToApply: "Apply at the nearest YKN office or state welfare department. Bring: IC, income proof, medical bills and letters. Can be referred by hospital social worker.",
    keyBenefits: [
      "Medical bill assistance for poor Malaysians",
      "Bridges gaps not covered by JKM or PERKESO",
      "Nationwide coverage through state offices"
    ],
    notes: "YKN works alongside JKM. Hospital social workers can facilitate YKN applications. Best used when other avenues (JKM, Zakat, MySalam) have been explored."
  },
  {
    id: "mab",
    name: "Malaysian Association for the Blind (MAB)",
    nameBM: "Persatuan Orang-Orang Cacat Penglihatan Malaysia",
    nameZH: "马来西亚盲人协会",
    category: "disability",
    services: [
      "Support services for visually impaired and blind Malaysians",
      "Braille library and resource centre",
      "Vocational training and employment support",
      "Assistive technology training",
      "Children's education support",
      "Counselling and psychosocial support"
    ],
    phone: "+603-2272 2677",
    website: "https://www.mab.org.my",
    email: "hq@mab.org.my",
    states: ["Kuala Lumpur", "Penang", "Johor", "Perak", "Selangor", "Sabah", "Sarawak"],
    eligibility: "Visually impaired and blind Malaysians. OKU (disabled) registration recommended but not always required for initial contact.",
    howToApply: "Call or visit the nearest MAB office. Bring: IC and eye specialist reports confirming visual impairment.",
    keyBenefits: [
      "Vocational training — helps blind individuals become economically independent",
      "Braille and assistive technology resources",
      "Employment placement assistance",
      "Community support and social activities"
    ],
    notes: "MAB works alongside ophthalmology departments at teaching hospitals. Newly blind patients following eye surgery or disease can be referred to MAB for rehabilitation and support."
  },
  {
    id: "mercy-malaysia",
    name: "MERCY Malaysia",
    nameBM: "Malaysian Medical Relief Society (MERCY Malaysia)",
    nameZH: "马来西亚医疗救援协会",
    category: "general",
    services: [
      "Disaster and emergency medical response (local and international)",
      "Medical missions to underserved communities in Malaysia",
      "Primary care for orang asli and remote communities",
      "Medical volunteer deployment",
      "Health screening for vulnerable populations",
      "Humanitarian aid and health supplies"
    ],
    phone: "+603-2273 3999",
    website: "https://www.mercy.org.my",
    email: "info@mercy.org.my",
    states: ["All"],
    eligibility: "MERCY Malaysia primarily responds to disasters and underserved communities. For direct patient assistance — mainly relevant during disaster events (flood, earthquake) or in underserved rural/orang asli settings.",
    howToApply: "During disasters: MERCY will deploy automatically. For community programmes: contact MERCY to check current programmes. Healthcare volunteers can register on MERCY website.",
    keyBenefits: [
      "Critical during national disasters — flood relief health response",
      "Reaches orang asli and underserved communities with basic healthcare",
      "Volunteer network — healthcare professionals can contribute",
      "Rapid deployment of medical supplies and personnel"
    ],
    notes: "MERCY Malaysia is best known for international disaster response (Haiti, Pakistan, Gaza, etc.) but also runs domestic humanitarian medical programmes. During major Malaysian floods, MERCY deploys medical teams."
  },
  {
    id: "childrencare-malaysia",
    name: "Malaysian CARE for Children",
    nameBM: "Malaysian CARE untuk Kanak-Kanak",
    nameZH: "马来西亚关怀儿童协会",
    category: "children",
    services: [
      "Care for orphaned and abandoned children",
      "Child welfare and protection support",
      "Medical assistance for sick children from poor families",
      "Educational support for disadvantaged children",
      "Placement in foster care or welfare homes",
      "Support for children with disabilities"
    ],
    phone: "+603-4257 4120",
    website: "https://www.malaysiancare.org",
    email: "children@malaysiancare.org",
    states: ["Kuala Lumpur", "Selangor"],
    eligibility: "Orphaned, abandoned, or disadvantaged children. Families with sick children who cannot afford medical care. No racial or religious restrictions.",
    howToApply: "Call or email. Hospital social workers can refer cases involving sick children from poor families. JKM also handles child welfare referrals.",
    keyBenefits: [
      "Medical assistance for children from poor families",
      "Care placement for orphaned and abandoned children",
      "Educational support",
      "Bridges gaps in child welfare that government may not immediately cover"
    ],
    notes: "For immediate child welfare emergencies, JKM has a 24-hour child protection hotline: 15999. For medical bill assistance for a seriously ill child from a poor family — approach the hospital social worker first, then Malaysian CARE."
  }
];
