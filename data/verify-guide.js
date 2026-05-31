// data/verify-guide.js
var VERIFY_GUIDE = [

  {
    id: "master-tip",
    isMasterTip: true,
    title: "Universal Verification Tip",
    content: "For ANY healthcare facility in Malaysia: MOH Hotline 1800-88-6000 or BPKK (Bahagian Penguatkuasaan & Pelesenan): +603-8883 1000. Online registry: ehealthapp.moh.gov.my. If a facility cannot demonstrate valid licensing on request, do not proceed."
  },

  {
    id: "nursing-home",
    title: "Nursing Homes & Care Homes",
    titleBM: "Rumah Jagaan / Rumah Penjagaan Orang Tua",
    titleZH: "疗养院 / 老人院",
    icon: "home",
    why: "Nursing homes and care homes in Malaysia are required by law to be licensed. Unlicensed care homes have been linked to patient deaths, abuse, neglect, and fire tragedies. Licensing ensures minimum staffing, safety, and care standards are met.",
    governingLaw: "Private Healthcare Facilities & Services Act 1998 (PHFSA) / Akta Kemudahan & Perkhidmatan Penjagaan Kesihatan Swasta 1998. Care homes not meeting the clinical threshold may also be regulated by JKM under the Care Centres Act 1993.",
    licensingBody: "Bahagian Penguatkuasaan & Pelesenan (BPKK / BPFK), MOH Malaysia. JKM (Jabatan Kebajikan Masyarakat) for welfare-category homes.",
    howToVerify: [
      "Ask to see the facility's current operating license — it must be prominently displayed on the premises by law",
      "Check the BPKK online registry at ehealthapp.moh.gov.my or bpfk.moh.gov.my for registered private healthcare facilities",
      "Call BPKK hotline +603-8883 1000 and verify by the facility's full registered name and address",
      "Verify the person-in-charge's nursing registration (the matron or senior nurse must be a Registered Nurse) at ljm.moh.gov.my",
      "For JKM-registered welfare homes, verify at nearest JKM district office or call 1-800-88-3003"
    ],
    redFlags: [
      "Cannot produce an operating license when asked, or the license has expired",
      "No Registered Nurse (Jururawat Berdaftar) on duty at all times — a legal requirement",
      "No emergency evacuation plan visible or fire extinguishers accessible",
      "Residents appear malnourished, dehydrated, unwashed, or unresponsive to visitors",
      "No medication records, care plans, or incident logs are maintained",
      "Overcrowded rooms — minimum 5 square metres per resident is required",
      "No emergency call system (bell or intercom) in resident rooms",
      "Staff are unable to explain basic emergency procedures",
      "Facility smells strongly of urine or faeces, indicating inadequate hygiene care",
      "Residents have unexplained bruises, pressure sores, or signs of restraint"
    ],
    minimumStandards: [
      "Minimum 5 sq metres of floor space per resident",
      "At least one Registered Nurse on duty at all times",
      "Written care plan for each resident, reviewed regularly",
      "Medication administration records maintained",
      "Emergency evacuation plan displayed and practised",
      "Regular meals meeting nutritional requirements",
      "Access to natural light and ventilation",
      "Regular medical review by a registered physician",
      "Infection control and hygiene protocols"
    ],
    complaintChannel: "BPKK: +603-8883 1000 or bpfk.moh.gov.my. For JKM-registered welfare homes: Talian Kasih 15999 or JKM hotline 1-800-88-3003. For immediate danger: call 999.",
    subsidizedOptions: "JKM operates Rumah Seri Kenangan (RSK) — elderly welfare homes — and Pusat Jagaan (day care centres) for elderly Malaysians who are destitute or without family support. These are income-tested and free or heavily subsidised. Contact Talian Kasih 15999 or nearest JKM office for referral and eligibility assessment."
  },

  {
    id: "dialysis-centre",
    title: "Dialysis Centres (Haemodialysis)",
    titleBM: "Pusat Hemodialisis",
    titleZH: "透析中心 / 洗肾中心",
    icon: "activity",
    why: "Dialysis centres perform life-sustaining treatment on medically vulnerable patients. Unlicensed or substandard centres risk patient infection, equipment failure, and death. Proper licensing ensures trained staff, sterile equipment, and emergency protocols.",
    governingLaw: "Private Healthcare Facilities & Services Act 1998 (PHFSA). MOH Dialysis Centre Guidelines under BPKK.",
    licensingBody: "BPKK, MOH Malaysia. All haemodialysis centres — whether run by NGOs, companies, or hospitals — must be licensed.",
    howToVerify: [
      "Request to see the centre's BPKK operating license — must be displayed at the premise",
      "Check ehealthapp.moh.gov.my or call BPKK +603-8883 1000 to verify registration",
      "Confirm that the centre is registered on the National Renal Registry (NRR) — ask the centre manager",
      "Verify the attending nephrologist's MMC registration at mmc.gov.my",
      "Ask about water quality testing certificates (dialysis water quality is strictly regulated)"
    ],
    redFlags: [
      "Cannot produce current operating license",
      "No qualified nephrologist supervising patient care (may be remote but must be accessible)",
      "Reuse of single-use dialyzer filters without proper reprocessing protocols",
      "No emergency defibrillator (AED) on premises",
      "Dirty or visibly unhygienic treatment environment",
      "Staff cannot explain infection control protocols",
      "Machines not visibly maintained or calibrated",
      "No system for handling emergency complications during dialysis"
    ],
    minimumStandards: [
      "BPKK-licensed facility with named doctor-in-charge",
      "Registered dialysis nurses and trained dialysis technicians",
      "Validated water treatment system with regular quality testing",
      "Emergency medications and AED on premises",
      "Patient vascular access care and nutrition protocols",
      "Regular medical review by supervising nephrologist"
    ],
    complaintChannel: "BPKK: +603-8883 1000 or bpfk.moh.gov.my.",
    subsidizedOptions: "NKF Malaysia (National Kidney Foundation) operates subsidised dialysis centres throughout Malaysia. Monthly fees are heavily subsidised for eligible patients (as low as RM50–200/month vs. RM600–1,200 at private centres). Apply via NKF: +603-7954 9048, nkf.org.my. PERKESO/SOCSO also covers dialysis for work-related kidney disease."
  },

  {
    id: "ivf-clinic",
    title: "Fertility / IVF Clinics",
    titleBM: "Klinik Kesuburan / Klinik IVF",
    titleZH: "生育诊所 / 试管婴儿诊所",
    icon: "heart",
    why: "IVF is an expensive and emotionally demanding process. Unaccredited clinics may have lower success rates, inadequate embryology labs, and poor informed consent practices. Malaysia has seen a rise in fertility clinics — licensing and accreditation verify genuine clinical standards.",
    governingLaw: "Private Healthcare Facilities & Services Act 1998 (PHFSA). Assisted Reproduction Technology (ART) services are also subject to MOH Guidelines on ART. Note: ART is only legal for married heterosexual couples in Malaysia.",
    licensingBody: "BPKK, MOH Malaysia for facility license. RTAC (Reproductive Technology Accreditation Committee — an Australian standard adopted by many Malaysian IVF centres) for quality accreditation. Not all Malaysian IVF centres are RTAC-accredited, but it is the gold standard.",
    howToVerify: [
      "Verify the clinic holds a valid BPKK license via ehealthapp.moh.gov.my or +603-8883 1000",
      "Ask if the clinic holds RTAC (Reproductive Technology Accreditation Committee) accreditation — check rtac.org.au or ask for the certificate",
      "Verify the fertility specialist's MMC registration and subspecialty credentials at mmc.gov.my",
      "Ask for the clinic's published IVF success rates per embryo transfer — reputable clinics share this data",
      "Confirm the embryology laboratory's quality standards — ask about ISO or RTAC lab certification"
    ],
    redFlags: [
      "Cannot show BPKK license or license is for a different type of facility",
      "Refuses to share success rate data or claims 100% success rate",
      "No board-certified reproductive endocrinologist (Ob-Gyn with subspecialty in fertility) on the team",
      "Embryology lab not visible or clinic refuses to show the lab setup",
      "No written consent forms or inadequate explanation of risks (ovarian hyperstimulation, multiple pregnancy, etc.)",
      "Extremely low cost quotes that seem implausible for quality IVF",
      "No embryo storage protocols or unclear policies on frozen embryos"
    ],
    minimumStandards: [
      "BPKK-licensed specialist clinic",
      "Board-certified fertility specialist / reproductive endocrinologist",
      "Dedicated IVF laboratory with embryologist",
      "Cryopreservation facilities with proper chain of custody",
      "Comprehensive informed consent process",
      "Clear pricing and contract before treatment begins"
    ],
    complaintChannel: "BPKK: +603-8883 1000 or bpfk.moh.gov.my. MMC for complaints against the specialist physician: mmc.gov.my.",
    subsidizedOptions: "No public IVF programme in Malaysia. IVF is not covered by most basic insurance plans — check your policy for ART exclusions. Some corporate health benefits include partial IVF coverage. LPPB/Bar Council LAC for disputes over IVF contracts."
  },

  {
    id: "physiotherapy-rehab",
    title: "Physiotherapy & Rehabilitation Centres",
    titleBM: "Pusat Fisioterapi & Pemulihan",
    titleZH: "物理治疗与康复中心",
    icon: "activity",
    why: "Physiotherapy performed by unqualified practitioners can worsen injuries, especially spinal and neurological conditions. Registered physiotherapists have undergone 4-year degree programmes and are trained to manage complex rehabilitation safely.",
    governingLaw: "Allied Health Professions Act 2016 (Akta Profesion Kesihatan Bersekutu 2016). Physiotherapists must be registered with the Allied Health Professions Board of Malaysia.",
    licensingBody: "Allied Health Professions Board of Malaysia (under MOH) for individual practitioners. BPKK for standalone private physiotherapy centres.",
    howToVerify: [
      "Ask to see the physiotherapist's Allied Health Professions Board annual practice certificate",
      "Verify the practitioner's registration at the Allied Health Professions Board portal (MOH website)",
      "Check that the facility holds a BPKK license if it is a standalone private rehab centre",
      "For hospital-based physiotherapy, confirm the hospital's overall BPKK license covers allied health services",
      "Ask about the physiotherapist's specific training in your condition (e.g., neurological rehab, paediatric physiotherapy, sports injuries)"
    ],
    redFlags: [
      "Therapist cannot produce a valid annual practice certificate from the Allied Health Professions Board",
      "No clinical assessment or treatment plan before starting therapy",
      "Aggressive high-pressure sales for long treatment packages before any assessment",
      "Treatments feel rough, painful, or produce worsening symptoms without explanation",
      "No referral to a physician if your condition clearly warrants medical review",
      "Clinic offers 'physiotherapy' but staff are actually massage therapists or assistants without Allied Health registration"
    ],
    minimumStandards: [
      "Registered physiotherapist holding valid Allied Health Professions Board certificate",
      "Individual clinical assessment for each patient",
      "Written treatment plan with measurable goals",
      "Safe manual handling equipment (plinth, parallel bars, etc.)"
    ],
    complaintChannel: "Allied Health Professions Board (under MOH): +603-8883 1000 (MOH main). BPKK for facility complaints. MMC if a doctor directed inappropriate physiotherapy.",
    subsidizedOptions: "Public hospital physiotherapy departments provide free or heavily subsidised services to referred patients. Government hospital outpatient physiotherapy: referral from doctor needed. PERKESO covers physiotherapy as part of vocational rehabilitation for injured workers — perkeso.gov.my."
  },

  {
    id: "dental-clinic",
    title: "Dental Clinics",
    titleBM: "Klinik Pergigian",
    titleZH: "牙科诊所",
    icon: "smile",
    why: "Unregistered dental practitioners pose serious risks including infection, nerve damage, and permanent disfigurement. Malaysia has seen cases of unlicensed dental practitioners operating fraudulently. All dental practices must be registered.",
    governingLaw: "Dental Act 1971 (Akta Pergigian 1971). All dentists must be registered with the Malaysian Dental Council (MDC).",
    licensingBody: "Malaysian Dental Council (MDC / Majlis Pergigian Malaysia) for individual dentists. BPKK for private dental clinic facility licensing.",
    howToVerify: [
      "Ask to see the dentist's MDC Annual Practising Certificate — it must be displayed in the consultation room",
      "Verify the dentist's registration online at mdc.gov.my — search by name or registration number",
      "Check that the clinic holds a valid BPKK facility license",
      "For specialists (orthodontists, oral surgeons, periodontists): confirm specialist registration on MDC's specialist register",
      "Call MDC directly at +603-2698 4805 to verify registration status"
    ],
    redFlags: [
      "Dentist cannot produce a valid MDC Annual Practising Certificate",
      "MDC certificate is not displayed in the treatment room",
      "No X-ray facilities or X-rays are taken but no consent is obtained",
      "Dental instruments not visibly autoclaved or sterilised",
      "Clinic offers specialist procedures (implants, orthodontics) but the dentist has no specialist registration",
      "Extreme low-price offers for complex procedures such as implants (significantly below market rate)"
    ],
    minimumStandards: [
      "MDC-registered dentist with valid Annual Practising Certificate",
      "BPKK-licensed clinic facility",
      "Sterilisation autoclave and infection control protocols",
      "Radiation safety for X-ray units (Atomic Energy Licensing Board — AELB — certification)"
    ],
    complaintChannel: "MDC: +603-2698 4805, mdc.gov.my. For facility complaints: BPKK +603-8883 1000.",
    subsidizedOptions: "Government dental clinics (Klinik Pergigian Kerajaan) provide free dental services to schoolchildren and subsidised services (RM1–20) to Malaysian adults. Find the nearest government dental clinic at moh.gov.my. University dental faculties (UM, UiTM, USIM) also provide services at significantly reduced costs."
  },

  {
    id: "tcm",
    title: "Traditional & Complementary Medicine (T&CM) Practitioners",
    titleBM: "Pengamal Perubatan Tradisional & Komplementari",
    titleZH: "传统与辅助医学从业者",
    icon: "leaf",
    why: "T&CM practices including Traditional Chinese Medicine (TCM), Malay traditional medicine (Perubatan Islam), Ayurveda, and homeopathy must be registered under Malaysian law since the T&CM Act 2016. Unregistered practitioners pose risks including delayed diagnosis of serious conditions, herb-drug interactions, and fraudulent cancer 'cures'.",
    governingLaw: "Traditional and Complementary Medicine Act 2016 (Akta Perubatan Tradisional dan Komplementari 2016). Establishes the T&CM Division under MOH and the registration framework for practitioners.",
    licensingBody: "T&CM Division, MOH Malaysia. Individual practitioners must register with the relevant T&CM Board (TCM, Homeopathy, Malay Traditional Medicine, etc.).",
    howToVerify: [
      "Ask the practitioner to show their T&CM registration certificate from the MOH T&CM Division",
      "Verify the practitioner's registration at tcm.moh.gov.my or call the T&CM Division at +603-8883 1000",
      "Check that the practice premise holds a facility license from BPKK if applicable",
      "For acupuncturists: ask specifically if they are registered as an acupuncturist under the T&CM Act",
      "Be extra cautious with practitioners offering cancer treatments, HIV cures, or diabetes reversal — these claims are not supported by evidence and may be illegal"
    ],
    redFlags: [
      "Practitioner cannot produce a T&CM registration certificate",
      "Claims to cure cancer, HIV, diabetes, or other serious conditions",
      "Advises you to stop prescribed medications without consulting your doctor",
      "Sells proprietary herbal products without proper labelling (MOH registration number on the packaging)",
      "No consultation or diagnosis before prescribing — just selling products",
      "Charges extremely high fees upfront for long treatment packages",
      "Uses electrical devices claiming to diagnose or cure diseases without any scientific basis"
    ],
    minimumStandards: [
      "Practitioner registered under T&CM Act 2016 with relevant board",
      "Herbal products must carry MOH registration number (e.g., NOT: MATTA / NPRA registered products may be adulterated)",
      "Informed consent for invasive T&CM procedures (acupuncture, cupping, manipulation)",
      "Should not discourage conventional medical treatment or advise stopping prescribed medication"
    ],
    complaintChannel: "T&CM Division, MOH: tcm.moh.gov.my or +603-8883 1000. For illegal cancer cure claims: National Pharmaceutical Regulatory Agency (NPRA): +603-7883 5400.",
    subsidizedOptions: "Selected government hospitals and health clinics offer T&CM services (primarily acupuncture and traditional Malay medicine) at subsidised rates for patients referred by government physicians. Ask your government health clinic if T&CM services are available."
  },

  {
    id: "pharmacy",
    title: "Pharmacies",
    titleBM: "Farmasi",
    titleZH: "药剂行",
    icon: "pill",
    why: "Pharmacies dispensing without a registered pharmacist on-duty, or selling prescription medications over the counter without a valid prescription, are operating illegally. This can cause serious harm through medication errors and antibiotic resistance.",
    governingLaw: "Pharmacy Act 1951 (Akta Farmasi 1951). Medicines (Advertisement and Sale) Act 1956 for advertising restrictions. Poisons Act 1952 for controlled substances.",
    licensingBody: "Pharmacy Board Malaysia (Lembaga Farmasi Malaysia / LFM) for individual pharmacists. NPRA (National Pharmaceutical Regulatory Agency) for drug approvals. MOH Pharmacy Enforcement Division for retail pharmacy licensing.",
    howToVerify: [
      "Look for the Pharmacy Board Malaysia annual registration certificate displayed behind the dispensing counter",
      "Verify the pharmacist's registration at pharmacy.gov.my (click 'Semak Pendaftaran Ahli Farmasi')",
      "A registered pharmacy must have a registered pharmacist physically present during all operating hours",
      "Check that prescription-only medicines (Group B Poisons) are only dispensed with a valid doctor's prescription",
      "Ensure over-the-counter products have the MOH registration number (starting with 'NOT:' prefix for local products or 'MAL' number)"
    ],
    redFlags: [
      "No registered pharmacist on duty during business hours",
      "Dispenses prescription antibiotics, antidepressants, or controlled drugs without a prescription",
      "Sells products without MOH registration numbers (unlabelled supplements or imported products without local approval)",
      "Unable to counsel you on drug interactions or side effects",
      "Stocks counterfeit or suspiciously cheap branded medications"
    ],
    minimumStandards: [
      "Registered pharmacist present at all times dispensing medicines are being sold",
      "Valid retail pharmacy license from MOH",
      "Cold chain facilities for temperature-sensitive medications",
      "Private counselling area for sensitive dispensing"
    ],
    complaintChannel: "Pharmacy Board Malaysia (LFM): +603-2693 5561. MOH Pharmaceutical Services Programme: +603-2297 5000. For counterfeit medicines: NPRA +603-7883 5400.",
    subsidizedOptions: "Government hospital pharmacies and government health clinic pharmacies dispense medications free or at RM1–5 per item to Malaysian citizens with valid prescriptions from government doctors. MyPharmacy pilot programme expanding access. NPRA Drug Subsidy Programme for selected high-cost medications."
  },

  {
    id: "medical-lab",
    title: "Medical Laboratories & Diagnostic Centres",
    titleBM: "Makmal Perubatan & Pusat Diagnostik",
    titleZH: "医学化验室与诊断中心",
    icon: "flask",
    why: "Incorrect laboratory results can lead to misdiagnosis and inappropriate treatment. Accredited laboratories undergo external quality assurance to ensure result accuracy. Private diagnostic centres (ultrasound, X-ray, MRI, CT) must be properly licensed.",
    governingLaw: "Private Healthcare Facilities & Services Act 1998 (PHFSA). ISO 15189:2022 (international standard for medical laboratories). MSQH (Malaysian Society for Quality in Health) lab accreditation.",
    licensingBody: "BPKK, MOH Malaysia for facility licensing. SAMM (Standard Malaysia Laboratory Accreditation Scheme) for ISO 15189 laboratory accreditation. AELB (Atomic Energy Licensing Board) for X-ray and CT/MRI facilities.",
    howToVerify: [
      "Ask to see the laboratory's BPKK facility license",
      "Check if the lab holds ISO 15189 accreditation (ask for the accreditation certificate or check samm.gov.my)",
      "For imaging centres (X-ray, CT, MRI): confirm AELB radiation license is current",
      "Verify pathologist or clinical scientist's MMC/Allied Health Board registration for report-signing practitioners",
      "Ask if the laboratory participates in external quality assurance (EQA) programmes — reputable labs participate nationally or internationally"
    ],
    redFlags: [
      "Cannot show BPKK facility license",
      "Results come back extremely quickly (same-day) for tests that biologically cannot be processed that fast",
      "No qualified pathologist or clinical scientist to review results",
      "Reference ranges are not provided with results",
      "Imaging centre staff cannot explain radiation dose or safety precautions",
      "Results vary widely if you test at different branches of the same chain"
    ],
    minimumStandards: [
      "BPKK-licensed facility",
      "ISO 15189 accreditation for clinical laboratory work",
      "Qualified pathologist/clinical scientist responsible for result validation",
      "Proper cold chain for specimen handling",
      "AELB license for any ionising radiation equipment"
    ],
    complaintChannel: "BPKK: +603-8883 1000. AELB for radiation safety concerns: +603-8250 4800. SAMM for accreditation concerns: samm.gov.my.",
    subsidizedOptions: "Government hospital laboratories provide heavily subsidised diagnostic services for referred patients. Basic blood tests at government facilities: RM5–30. Imaging at government hospitals: RM30–200 (subsidised for Malaysians). Referral from a government doctor is typically required."
  },

  {
    id: "private-ambulance",
    title: "Private Ambulance Services",
    titleBM: "Perkhidmatan Ambulans Swasta",
    titleZH: "私人救护车服务",
    icon: "truck",
    why: "Private ambulances without proper licensing and trained crew can cause harm to patients during transport — particularly for critical conditions where improper handling causes further injury. All private ambulances must be licensed by MOH.",
    governingLaw: "Private Healthcare Facilities & Services Act 1998 (PHFSA). Private Ambulance Services are classified as a healthcare facility and require BPKK licensing.",
    licensingBody: "BPKK, MOH Malaysia. Every private ambulance vehicle must display a MOH license code on the vehicle and carry appropriate medical equipment.",
    howToVerify: [
      "Check that the ambulance vehicle displays a valid MOH license code — look for the BPKK registration sticker on the vehicle",
      "Call BPKK +603-8883 1000 to verify the company's license if in doubt",
      "Confirm that staff include at least one person certified in Advanced Life Support (ALS) for critical transfers",
      "For non-emergency patient transport, ensure the crew is trained in Basic Life Support (BLS) minimum",
      "Ask for the company's registration number before booking — reputable services provide it immediately"
    ],
    redFlags: [
      "Vehicle has no visible MOH license code",
      "Staff cannot demonstrate any medical certification (BLS/ALS)",
      "Ambulance has no oxygen supply, AED, or basic emergency medications",
      "Cannot provide insurance documentation",
      "Unwilling to confirm license number over the phone before booking",
      "Charges significantly below market rate but has no visible equipment"
    ],
    minimumStandards: [
      "BPKK-licensed ambulance vehicle with displayed MOH code",
      "Minimum Basic Life Support (BLS) trained crew",
      "Oxygen supply, AED, suction device, and basic airway management equipment",
      "Vehicle maintained to MOH ambulance specifications",
      "24/7 communication capability"
    ],
    complaintChannel: "BPKK: +603-8883 1000. For emergencies where no ambulance is available: call 999 (government ambulance EMRS).",
    subsidizedOptions: "Government EMRS (Emergency Medical Rescue Services) ambulances via 999 are free of charge for emergency response. For non-emergency patient transport, social welfare patients can apply for JKM transport assistance via Talian Kasih 15999."
  },

  {
    id: "home-nursing",
    title: "Home Nursing Services",
    titleBM: "Perkhidmatan Jururawat di Rumah",
    titleZH: "居家护理服务",
    icon: "home",
    why: "Home nursing services bring medical care into the patient's home — where oversight is limited. Unregistered individuals posing as nurses have committed theft, neglect, and administered incorrect medications. Verification protects vulnerable patients.",
    governingLaw: "Nursing Act 1950 (revised 1989) / Akta Jururawat 1950. All nurses practising in Malaysia must be registered with the Malaysian Nursing Board (LJM). Private home care agencies must be licensed under PHFSA.",
    licensingBody: "Malaysian Nursing Board / Lembaga Jururawat Malaysia (LJM) for individual nurses. BPKK for home care agency licensing.",
    howToVerify: [
      "Ask the individual nurse to show their LJM Annual Practising Certificate before employment",
      "Verify the nurse's registration online at ljm.moh.gov.my — search by name or registration number",
      "If hiring through an agency, ask to see the agency's BPKK license",
      "Confirm the nurse's specialisation if relevant (e.g., paediatric nursing, wound care, ICU nursing)",
      "Request references from previous clients or their healthcare providers"
    ],
    redFlags: [
      "Nurse cannot produce an LJM Annual Practising Certificate",
      "Name is not found in LJM's online registry",
      "Agency cannot show a BPKK facility license",
      "Nurse is evasive about qualifications or changes the subject when asked to produce documents",
      "Extremely low rates that are significantly below market (may indicate unqualified worker)",
      "Refuses to follow care plan instructions from the patient's doctor"
    ],
    minimumStandards: [
      "LJM-registered nurse with valid Annual Practising Certificate",
      "Written care plan provided by or shared with the supervising physician",
      "Proper medication administration records maintained",
      "Emergency escalation protocol — knows when and how to call for help"
    ],
    complaintChannel: "LJM: +603-8883 1200, ljm.moh.gov.my. BPKK for agency complaints: +603-8883 1000.",
    subsidizedOptions: "MOH's Home Care Programme (Perkhidmatan Penjagaan di Rumah) provides free government home nursing visits for eligible post-discharge patients in some states. Ask the government hospital social worker upon discharge. Some JKM district offices coordinate volunteer home care for elderly and disabled patients."
  },

  {
    id: "blood-bank-private",
    title: "Blood Banks (Private)",
    titleBM: "Bank Darah Swasta",
    titleZH: "私人血库",
    icon: "droplets",
    why: "Private blood banks store umbilical cord blood or provide blood products. Inadequate processing and storage can result in contaminated blood products causing transfusion-transmitted infections. Licensing verifies safety protocols.",
    governingLaw: "Blood Bank guidelines under PHFSA 1998. Private cord blood banking is also subject to the National Blood Centre (Pusat Darah Negara / PDN) guidelines. Blood products for transfusion must meet MOH Blood Transfusion Service standards.",
    licensingBody: "BPKK, MOH Malaysia. National Blood Centre (PDN) provides oversight for blood product quality nationally.",
    howToVerify: [
      "Ask for the facility's BPKK operating license for blood banking services",
      "For cord blood banks: check if the facility is accredited by AABB (Association for the Advancement of Blood & Biotherapies) — the international gold standard",
      "Verify whether cord blood samples are processed on-site or sent to a central facility — and verify that facility's credentials",
      "Ask about their quality control protocols for blood product testing (HIV, Hepatitis B, C, syphilis screening)",
      "Request information on storage temperature monitoring — continuous temperature logging is essential"
    ],
    redFlags: [
      "Cannot show BPKK license",
      "No AABB or equivalent international accreditation for cord blood banking",
      "Cannot describe their blood product testing protocols",
      "No independent temperature monitoring or backup power supply",
      "Unusually aggressive marketing with fear-based selling of cord blood services"
    ],
    minimumStandards: [
      "BPKK-licensed facility",
      "Licensed blood product processing and testing protocols",
      "Continuous cold-chain monitoring with backup systems",
      "Qualified haematologist or blood bank scientist in charge"
    ],
    complaintChannel: "BPKK: +603-8883 1000. National Blood Centre (PDN): +603-2613 2600.",
    subsidizedOptions: "Government hospitals' blood transfusion services are provided free of charge as part of treatment. Voluntary blood donation is coordinated by PDN — donating blood helps maintain national supply. Cord blood banking is elective and not subsidised."
  },

  {
    id: "psychiatric-day-centre",
    title: "Psychiatric & Mental Health Day Centres",
    titleBM: "Pusat Harian Psikiatri & Kesihatan Mental",
    titleZH: "精神健康日间中心",
    icon: "brain",
    why: "Mental health day centres serve highly vulnerable patients. Unlicensed facilities may lack trained staff, proper medication management, and crisis response protocols — putting patients at serious risk. Malaysia has seen a growth in unregistered mental wellness centres with inadequate clinical oversight.",
    governingLaw: "Mental Health Act 2001 (Akta Kesihatan Mental 2001). Private Healthcare Facilities & Services Act 1998 (PHFSA) for clinical day centres. Community Recovery Centres (non-clinical) may fall under JKM jurisdiction.",
    licensingBody: "BPKK, MOH Malaysia for clinical psychiatric day centres. JKM for community mental health recovery homes.",
    howToVerify: [
      "Request to see the BPKK operating license — confirm it specifically covers psychiatric/mental health day services",
      "Verify that a psychiatrist or clinical psychologist is responsible for clinical oversight",
      "For residential mental health recovery homes: check JKM registration at nearest JKM office",
      "Ask about their crisis management protocol — how do they handle a patient in acute psychotic crisis or suicidal emergency?",
      "Verify key staff qualifications: psychiatric nurses should be LJM-registered; psychologists should be registered under the Malaysian Register of Psychologists (MRP) or Malaysian Psychological Association (PSIMA)"
    ],
    redFlags: [
      "No qualified psychiatrist or clinical psychologist involved in care planning",
      "Facility cannot produce a BPKK or JKM license",
      "No written care plans or medication records for patients",
      "Claims to 'cure' schizophrenia, bipolar disorder, or addiction in a short program with spiritual or religious treatment only",
      "Patients appear sedated, physically restrained without clinical indication, or unable to communicate with visitors freely",
      "No emergency protocol or communication with a hospital for acute crises"
    ],
    minimumStandards: [
      "BPKK-licensed facility for clinical day centres",
      "Registered psychiatric nurses on duty at all times",
      "Psychiatrist or clinical psychologist responsible for care plan",
      "Medication administration records maintained",
      "Crisis protocol with clear pathway to emergency hospital care"
    ],
    complaintChannel: "BPKK: +603-8883 1000. For suspected abuse at mental health facilities: SUHAKAM +603-2612 5600. Talian Kasih 15999 for welfare concerns.",
    subsidizedOptions: "MOH public psychiatric outpatient clinics and day hospitals are free or subsidised for Malaysian patients with referral. Community Mental Health Centres (Pusat Kesihatan Mental Komuniti) offer day programmes at government hospitals — no cost for referred patients. MMHA (Malaysian Mental Health Association): +603-2780 6803 for support groups and information."
  },

  {
    id: "optical-optometry",
    title: "Optical / Optometry Centres",
    titleBM: "Pusat Optik / Optometri",
    titleZH: "眼镜店 / 视光中心",
    icon: "eye",
    why: "Poorly prescribed spectacles or contact lenses can worsen vision over time. Optometrists must be registered and optometry premises must be licensed. In Malaysia, optometrists and dispensing opticians have different scopes of practice — understanding the difference protects patients.",
    governingLaw: "Opticians Act 1991 (Akta Optik 1991). Optometrists and Dispensing Opticians are regulated under this Act. They must register with the Malaysian Optical Council (MOC).",
    licensingBody: "Malaysian Optical Council (MOC) for individual optometrists and dispensing opticians. Optical premises also require a premises license from the local authority.",
    howToVerify: [
      "Ask to see the optometrist's MOC registration certificate — it should be displayed at the practice",
      "Verify registration at the Malaysian Optical Council (moc.org.my or call +603-2026 4848)",
      "Distinguish between Optometrists (can perform full eye examinations, test visual acuity, assess for eye diseases) and Dispensing Opticians (can fit glasses but cannot examine eyes for disease)",
      "For contact lens prescriptions, ensure they are issued by a registered optometrist or ophthalmologist",
      "If referred for suspected eye disease (glaucoma, macular degeneration), ensure you see a registered ophthalmologist — optometrists cannot diagnose or treat eye diseases"
    ],
    redFlags: [
      "No MOC registration certificate displayed",
      "Staff perform full eye health examination but cannot produce optometrist credentials",
      "Prescribe contact lenses without assessing corneal health",
      "Dismiss complaints of eye pain or vision changes without recommending referral to an ophthalmologist",
      "High-pressure sales for anti-reflective coatings, blue-light glasses, or vision supplements with exaggerated health claims"
    ],
    minimumStandards: [
      "Registered optometrist (for eye examinations) with valid MOC certificate",
      "Proper refraction equipment and examination chart",
      "Written prescription provided to patient after eye examination",
      "Clear referral pathway to ophthalmologist for disease management"
    ],
    complaintChannel: "Malaysian Optical Council (MOC): +603-2026 4848, moc.org.my. BPKK for facility licensing complaints: +603-8883 1000.",
    subsidizedOptions: "Government hospital ophthalmology departments provide full eye examinations and spectacle prescriptions at subsidised rates (RM5–30) for referred patients. The National Eye Care Programme (NEHP) provides free cataract surgery for eligible B40 Malaysians — ask at government hospitals or visit the Pantai Hospital (private partner). JKM has assistive device grants including spectacles for low-income individuals."
  }

];
