// data/legal-support.js
var LEGAL_SUPPORT = {

  complaints: {
    title: "Patient Complaints Guide",
    when: [
      "You received incorrect treatment or wrong medication",
      "A diagnosis was significantly delayed without explanation",
      "You were denied access to your own medical records",
      "You were not informed of risks before a procedure",
      "You were billed for services not rendered or given an unexplained bill",
      "You experienced rude, discriminatory, or degrading treatment by staff",
      "A healthcare provider violated your privacy or shared your data without consent",
      "You suspect a staff member was negligent or impaired during your care",
      "Your complaint to the hospital was ignored or not acknowledged"
    ],
    steps: [
      "Document everything immediately: dates, times, names of staff involved, what was said and done. Take photos if relevant (e.g., medication labels, bills).",
      "Obtain a copy of all your medical records and billing statements. You are legally entitled to these under PDPA 2010 — submit a written request.",
      "Raise the matter first with the treating doctor or ward manager. Many issues can be resolved at this level. Keep notes of the conversation.",
      "If unresolved, submit a formal written complaint to the Hospital Patient Relations Unit (Unit Perhubungan Pesakit). Request written acknowledgement of receipt.",
      "If the hospital does not respond within 30 days, or the response is unsatisfactory, escalate to the relevant regulatory body (see Channels below).",
      "For billing disputes with insurance, escalate simultaneously to the Ombudsman for Financial Services (OFS).",
      "If you believe negligence caused harm, consult a lawyer before the 3-year limitation period expires (Limitation Act 1953)."
    ],
    channels: [
      {
        name: "Hospital Patient Relations Unit (Unit Perhubungan Pesakit)",
        for: "First escalation — any complaint about care, billing, or conduct at any hospital",
        how: "Visit in person or submit written complaint. Request written acknowledgement of receipt. Keep a copy of everything you submit.",
        timeline: "Hospital must acknowledge within 30 days under MOH guidelines",
        phone: "Ask hospital reception for their 'Unit Perhubungan Pesakit' or 'Patient Relations Officer'",
        website: null
      },
      {
        name: "MOH — Bahagian Penguatkuasaan & Pelesenan (BPFK / BPKK)",
        for: "Complaints against PRIVATE hospitals, specialist centres, and private clinics — licensing failures, substandard care, facility non-compliance",
        how: "Submit written complaint by email or post. Include all supporting documents. You may also call the hotline.",
        timeline: "Investigation timelines vary; escalate if no response in 60 days",
        phone: "+603-8883 1000",
        website: "http://www.bpfk.gov.my"
      },
      {
        name: "Public Complaints Bureau (Biro Pengaduan Awam / BPA)",
        for: "Complaints against PUBLIC hospitals and government health facilities — MOH hospitals, district clinics, health centres",
        how: "Submit online via bpa.gov.my, call the hotline, or write to the Bureau. Reference your complaint case number in all follow-ups.",
        timeline: "BPA targets response within 30 working days",
        phone: "1-800-88-3030 (toll-free)",
        website: "https://www.bpa.gov.my"
      },
      {
        name: "Malaysian Medical Council (MMC / Majlis Perubatan Malaysia)",
        for: "Complaints against a SPECIFIC REGISTERED DOCTOR — professional misconduct, ethical violations, negligence by a doctor",
        how: "Submit a statutory declaration (akuan berkanun) with full written details. MMC will investigate and may hold a disciplinary hearing. The doctor's MMC registration number helps but is not mandatory.",
        timeline: "Complex cases can take 6–18 months. You will be updated on proceedings.",
        phone: "+603-4049 6000",
        website: "https://www.mmc.gov.my"
      },
      {
        name: "Malaysian Nursing Board (Lembaga Jururawat Malaysia / LJM)",
        for: "Complaints against a REGISTERED NURSE or midwife — misconduct, negligence, or unethical behaviour by nursing staff",
        how: "Submit written complaint to LJM with supporting documentation. LJM will investigate and may hold a disciplinary inquiry.",
        timeline: "LJM will acknowledge receipt; investigation may take several months",
        phone: "+603-8883 1200",
        website: "https://www.ljm.moh.gov.my"
      },
      {
        name: "Malaysian Dental Council (MDC / Majlis Pergigian Malaysia)",
        for: "Complaints against a REGISTERED DENTIST — professional misconduct, negligence, or unlicensed dental practice",
        how: "Submit written complaint to MDC. Attach all relevant records including receipts, X-rays, referral letters.",
        timeline: "MDC will investigate and refer to disciplinary committee if warranted",
        phone: "+603-2698 4805",
        website: "https://www.mdc.gov.my"
      },
      {
        name: "Consumer Claims Tribunal (Tribunal Tuntutan Pengguna Malaysia)",
        for: "Billing disputes up to RM50,000 — overcharging, services not rendered, defective medical devices/products purchased. No lawyer required.",
        how: "File claim online or at any Tribunal office (located at KPDNHEP district offices nationwide). Pay filing fee (RM5 for claims ≤RM10,000; RM10 for above). Attend hearing — usually within 60 days.",
        timeline: "Hearing scheduled within 60 days of filing. Decision is binding.",
        phone: "+603-8882 5500 (KPDNHEP)",
        website: "https://www.kpdnhep.gov.my/tribunal-tuntutan-pengguna"
      },
      {
        name: "Ombudsman for Financial Services (OFS)",
        for: "Insurance claim disputes — insurer refusing to pay hospital bills, TPA (Third Party Administrator) issues, Takaful disputes",
        how: "Exhaust the insurance company's internal complaint process first (required). Then submit complaint to OFS with reference number from insurer's final decision. OFS provides free mediation.",
        timeline: "OFS targets resolution within 90 days for most cases",
        phone: "+603-2272 2811",
        website: "https://www.ofs.org.my"
      },
      {
        name: "SUHAKAM (Human Rights Commission of Malaysia)",
        for: "Systematic or serious human rights violations in healthcare — forced treatment without consent, discrimination, denial of emergency care based on nationality or religion",
        how: "Submit complaint online or by post. SUHAKAM can investigate, hold public inquiries, and make recommendations to the government.",
        timeline: "Investigations vary in duration; SUHAKAM publishes annual reports",
        phone: "+603-2612 5600",
        website: "https://www.suhakam.org.my"
      }
    ],
    patientRights: [
      "Right to be informed of your diagnosis, prognosis, and all available treatment options in language you understand",
      "Right to refuse any treatment or procedure, including life-sustaining treatment, provided you have mental capacity",
      "Right to access your own medical records within 30 days of a written request (Personal Data Protection Act 2010 / PDPA)",
      "Right to seek a second opinion from another qualified doctor without prejudice to your current care",
      "Right to privacy and confidentiality — your health information cannot be disclosed to third parties without your consent (except legally required disclosures)",
      "Right to be treated with dignity and respect regardless of race, religion, nationality, gender, disability, or financial status",
      "Right to complain without fear of reprisal, retaliation, or worsening of care",
      "Right to obtain an itemized bill — you may request a detailed breakdown of all charges before or after payment",
      "Right to be informed of the estimated cost of treatment in advance for non-emergency procedures",
      "Right to have a family member or representative present during consultations (unless clinical necessity or patient preference dictates otherwise)",
      "Right to be free from unnecessary physical or chemical restraint",
      "Right to informed consent before any surgery, invasive procedure, or participation in research"
    ],
    statute: "Medical negligence claims must be filed within 3 years of the date you discovered (or reasonably should have discovered) the harm — Limitation Act 1953, Section 6. This period can be extended in limited circumstances but courts interpret this strictly. Do not delay seeking legal advice."
  },

  legalAid: [
    {
      id: "bar-council-lac",
      name: "Bar Council Legal Aid Centre (LAC)",
      type: "legal-aid",
      services: [
        "Free legal advice sessions",
        "Medico-legal consultations",
        "Civil litigation referral to volunteer lawyers",
        "Assistance drafting complaints and demand letters",
        "Guidance on court processes"
      ],
      eligibility: "Income-based. Generally for those earning below RM3,000/month (varies by state centre). Means test applied at first visit.",
      phone: "+603-2050 2050",
      website: "https://www.malaysianbar.org.my",
      states: ["All — centres in Kuala Lumpur, Selangor, Johor, Penang, Perak, Sabah, Sarawak, and other states"],
      howToApply: "Walk in to nearest LAC during working hours (typically Mon–Fri, 9am–4pm). Bring your IC (MyKad) and proof of income (payslip or Borang B/BE). No appointment needed for initial consultation.",
      notes: "Has dedicated medico-legal panels in major state centres. For KL: Level 2, Wisma Badan Peguam Malaysia, 2 Leboh Pasar Besar, KL."
    },
    {
      id: "lppb-legal-aid-dept",
      name: "Lembaga Peguam Bantuan (Legal Aid Department / LPPB)",
      type: "legal-aid",
      services: [
        "Government-funded legal representation in court",
        "Civil and criminal matters",
        "Family law and guardianship cases",
        "Assistance for vulnerable groups including children and the elderly"
      ],
      eligibility: "Strict income test. For those earning below the poverty line or with income below RM30,000 per year. Subject to merits of the case.",
      phone: "+603-2691 5005",
      website: "https://www.lppb.gov.my",
      states: ["All — offices in each state"],
      howToApply: "Visit nearest LPPB state office. Bring IC and income documents. LPPB will assess eligibility and merits before accepting the case.",
      notes: "Government-operated. May have longer waiting times than Bar Council LAC. Best for cases that require court representation."
    },
    {
      id: "university-legal-clinics",
      name: "University Legal Clinics",
      type: "legal-aid",
      services: [
        "Free initial legal advice",
        "Document review",
        "Referral to qualified lawyers for complex cases"
      ],
      eligibility: "Generally open to all members of the public, especially those unable to afford legal fees. No strict income test.",
      phone: "UM Law Faculty: +603-7967 6511 | UKM: +603-8921 5004 | UTAR: +603-7903 7285 | Taylor's: +603-5629 5000",
      website: "https://law.um.edu.my (UM); https://www.ukm.my/fuh (UKM)",
      states: ["Kuala Lumpur (UM, UTAR, Taylor's)", "Selangor (UKM Bangi)", "Perak (UTAR Kampar)"],
      howToApply: "Contact the law faculty directly or visit the legal clinic during advertised clinic hours. Supervised by qualified law lecturers and final-year students.",
      notes: "Sessions are supervised consultations — suitable for understanding your rights and options, not for full legal representation."
    },
    {
      id: "klinik-guaman",
      name: "Klinik Guaman (Bar Council Public Legal Clinics)",
      type: "legal-aid",
      services: [
        "Free 30-minute legal consultation",
        "Advice on any area of law",
        "Referral to specialist lawyers"
      ],
      eligibility: "Open to all Malaysians. No income test — walk-in service.",
      phone: "+603-2050 2050 (Bar Council)",
      website: "https://www.malaysianbar.org.my",
      states: ["Various locations nationwide — check Bar Council website for schedule"],
      howToApply: "Walk in during clinic hours. Typically held on specific days at shopping malls, community centres, and Bar Council offices. Bring IC and any relevant documents.",
      notes: "Sessions are brief (30 minutes per client). Designed to provide orientation and referral. Very accessible for first-time users."
    },
    {
      id: "sisters-in-islam",
      name: "Sisters in Islam (SIS)",
      type: "legal-aid",
      services: [
        "Legal advice for Muslim women on Syariah and civil law",
        "Medico-legal rights under Islamic family law",
        "Support for Muslim women facing healthcare discrimination or DV",
        "Advocacy and referral services"
      ],
      eligibility: "Primarily for Muslim women in Malaysia. No income test for advice; referrals based on need.",
      phone: "+603-7960 5121",
      website: "https://www.sistersinislam.org.my",
      states: ["Kuala Lumpur / Selangor (main office)"],
      howToApply: "Call or email SIS to make an appointment. Walk-in also possible during office hours.",
      notes: "Specialises in intersection of Islamic law and women's rights. Particularly helpful for cases involving Syariah court decisions affecting healthcare access."
    },
    {
      id: "wcc-penang",
      name: "Women's Centre for Change (WCC) Penang",
      type: "legal-aid",
      services: [
        "Free legal advice for women",
        "Domestic violence support and safety planning",
        "Legal aid referral for medico-legal cases",
        "Counselling and case management",
        "Support for women who experienced abuse in healthcare settings"
      ],
      eligibility: "Women and girls in Penang and northern Malaysia. No income test for advice services.",
      phone: "+604-228 0342",
      website: "https://www.wccpenang.org",
      states: ["Penang", "Northern Malaysia (Kedah, Perak referrals)"],
      howToApply: "Call or walk in during office hours. Hotline available for crisis situations.",
      notes: "Long-established NGO with strong links to legal aid volunteers and healthcare advocates in Penang."
    }
  ],

  domesticViolence: {
    title: "Domestic Violence — Healthcare & Legal Response",
    governingLaw: "Domestic Violence Act 1994 (Akta Keganasan Rumah Tangga 1994), amended 2012. Child Act 2001 (for child victims).",
    emergencyContacts: [
      {
        name: "Emergency — Police / Ambulance",
        number: "999",
        available: "24/7",
        notes: "Call 999 for immediate danger. Police can arrest without warrant under DV Act Section 5(1) if there is reasonable belief of imminent harm."
      },
      {
        name: "Talian Kasih",
        number: "15999",
        available: "24/7, free, multilingual (Malay, English, Mandarin, Tamil)",
        notes: "National welfare helpline operated by JKM. Can refer to shelter homes, legal aid, and counselling. Also handles child abuse and elder abuse reports."
      },
      {
        name: "WAO Crisis Line (Women's Aid Organisation)",
        number: "+603-7956 3488",
        available: "24/7",
        notes: "Crisis counselling, safety planning, shelter referral, and legal guidance for women and children experiencing DV."
      },
      {
        name: "AWAM Helpline (All Women's Action Society)",
        number: "+603-7877 0224",
        available: "Mon–Fri, 9am–5pm",
        notes: "Counselling, legal advice referral, and advocacy for survivors of DV and sexual violence."
      }
    ],
    organisations: [
      {
        name: "Women's Aid Organisation (WAO)",
        phone: "+603-7956 3488",
        website: "https://www.wao.org.my",
        services: "Crisis shelter, legal aid referral, court accompaniment, counselling, transitional housing, DV safety planning"
      },
      {
        name: "All Women's Action Society (AWAM)",
        phone: "+603-7877 0224",
        website: "https://www.awam.org.my",
        services: "Legal advice, counselling, advocacy, survivor support groups"
      },
      {
        name: "JKM Shelter (Pusat Perlindungan Wanita / PPW)",
        phone: "15999 (Talian Kasih)",
        website: "https://www.jkm.gov.my",
        services: "Government-operated shelter homes for women and children fleeing DV. Free accommodation, counselling, and legal assistance."
      }
    ],
    interimProtectionOrder: {
      title: "Interim Protection Order (IPO) / Perintah Perlindungan Interim",
      description: "A court order that immediately prohibits the abuser from committing further violence or contacting the victim.",
      canObtainSameDay: true,
      cost: "Free — no filing fee",
      lawyerRequired: false,
      howToApply: [
        "Go to your nearest Magistrate's Court (Mahkamah Majistret). Morning visits are fastest.",
        "Request an IPO application form — court staff will guide you.",
        "Fill in the form describing the abuse. A police report helps but is not mandatory for an emergency IPO.",
        "A Magistrate can issue an Emergency Protection Order (EPO) on the same day without a hearing if you are in immediate danger.",
        "You will be required to attend a full hearing within 7 days for a formal IPO.",
        "A hospital social worker or nurse can assist you to go to court if you are admitted."
      ],
      notes: "Violation of an IPO is a criminal offence (fine or imprisonment). Keep a copy of the IPO with you at all times."
    },
    hospitalDuty: {
      title: "Hospital's Legal Reporting Duty",
      content: "Medical staff who reasonably suspect a patient is a victim of domestic violence MUST report under Malaysian law. For children: Section 26 of the Child Act 2001 requires ALL professionals (including doctors, nurses, social workers) to report suspected child abuse to the nearest police station or JKM. For adult DV victims: the Domestic Violence Act 1994 empowers but does not strictly mandate reporting for adults — however, MOH guidelines require hospitals to have DV protocols and refer cases to social workers. Hospitals should document injuries with clinical photography (with consent) and complete a medico-legal examination report."
    },
    shelterHomes: [
      "WAO Shelter Home — Kuala Lumpur area (referred via WAO crisis line)",
      "Pusat Perlindungan Wanita (PPW) — JKM operated, locations nationwide, via Talian Kasih 15999",
      "Rumah Perlindungan Wanita & Anak (RPWA) — state welfare department operated, via JKM",
      "YWCA shelters in Kuala Lumpur and Penang"
    ]
  },

  accidents: {
    title: "Accidents — Road & Workplace",
    immediateSteps: [
      "Call 999 for ambulance and police if injuries involved",
      "Do NOT move an injured person unless there is immediate danger (e.g., fire) — spinal injuries can be worsened",
      "Lodge a police report within 24 hours — this is critical for ALL insurance claims",
      "Request a Hospital Accident Report (HAR) separately from the hospital — it is a distinct document from your discharge summary"
    ],
    roadAccidents: {
      title: "Road Traffic Accidents",
      policeReport: "Must be made within 24 hours at any police station. Get the report number and a certified copy — insurers require it.",
      hospitalAccidentReport: "Request the hospital A&E or clinic to issue a specific 'Accident Report' or 'Medical Report for Insurance' — usually costs RM50–150. Needed for motor insurance claims.",
      insuranceClaims: [
        {
          name: "PIAM (Persatuan Insurans Am Malaysia) / Motor Claims",
          for: "Motor vehicle insurance claims — own damage, third party injury",
          phone: "+603-2274 7399",
          website: "https://www.piam.org.my",
          notes: "Check PIAM's register of approved motor repairers and claims procedures"
        },
        {
          name: "MIB (Motor Insurers' Bureau of Malaysia)",
          for: "Hit-and-run accidents or accidents involving uninsured vehicles",
          phone: "+603-2274 7399",
          website: "https://www.piam.org.my",
          notes: "MIB provides compensation when the at-fault driver is unidentified or uninsured. Strict time limits apply — report to MIB within 3 months."
        },
        {
          name: "MyTOL (e-TOL System — Road Accident Report)",
          for: "Online accident reporting and claim initiation",
          phone: "PDRM: 03-2266 2222",
          website: "https://www.rmp.gov.my",
          notes: "e-TOL (Electronic Traffic Offence and Accident Report) — some states have online reporting systems"
        }
      ]
    },
    workplaceAccidents: {
      title: "Workplace Accidents & Occupational Injuries",
      socso: {
        name: "PERKESO / SOCSO (Social Security Organisation)",
        for: "Workers injured at work or who contract occupational diseases — covers medical expenses, temporary disability, permanent disability, and dependants' benefit",
        phone: "1-800-22-8000 (toll-free)",
        website: "https://www.perkeso.gov.my",
        howToClaim: [
          "Employer must report the accident to SOCSO within 48 hours via ASSIST portal",
          "Worker should seek treatment at any SOCSO panel clinic or hospital",
          "Keep all medical bills and reports",
          "If employer does not report, worker can report directly via PERKESO portal or office",
          "SOCSO covers 100% of medical treatment costs at panel hospitals for work-related injuries"
        ],
        notes: "Covers employees earning up to RM5,000/month who contribute to SOCSO. Self-employed coverage available since 2022."
      },
      dosh: {
        name: "DOSH (Department of Occupational Safety and Health / JKKP)",
        for: "Reporting employer negligence or unsafe workplace that caused the accident. DOSH can prosecute employers under Occupational Safety and Health Act 1994 (OSHA).",
        phone: "+603-8886 6100",
        website: "https://www.dosh.gov.my",
        howToReport: "Submit complaint online at dosh.gov.my or visit nearest DOSH state office. Include employer name, location, and description of the unsafe condition."
      },
      jpa: {
        name: "JPA Personal Accident Cover (Government Employees)",
        for: "Government servants injured in the course of duty",
        phone: "+603-2693 5033 (JPA)",
        website: "https://www.jpa.gov.my",
        notes: "Separate from SOCSO. Government employees should check with their agency HR for specific coverage details and claim procedures."
      }
    }
  },

  negligence: {
    title: "Medical Negligence — Understanding Your Rights",
    definition: "Medical negligence occurs when a healthcare provider fails to meet the standard of care expected of a reasonably competent professional in the same field, and that failure causes harm to the patient.",
    bolamTest: {
      title: "The Bolam Test (Malaysian Standard of Care)",
      content: "Malaysian courts apply the Bolam Test from English law: a doctor is not negligent if they acted in accordance with a practice accepted as proper by a responsible body of medical professionals skilled in that particular art — even if other doctors would have acted differently. Modified by Bolitho (1998): the practice must also be logically defensible. This is a high bar — not all bad outcomes are negligence."
    },
    elementsToProve: [
      "DUTY OF CARE: A doctor-patient relationship existed (usually straightforward once treatment began)",
      "BREACH: The doctor's conduct fell below the standard of a reasonable, competent doctor in the same specialty",
      "CAUSATION: The breach directly caused (or materially contributed to) the harm suffered — this is often the hardest element to prove",
      "DAMAGE: Actual harm resulted — physical injury, psychological harm, or financial loss"
    ],
    timeline: "3 years from the date you DISCOVERED (or ought reasonably to have discovered) the harm — Limitation Act 1953, Section 6(1)(a). Courts interpret this strictly. Do not delay. In cases involving a deceased patient, family has 3 years from date of death to file.",
    firstSteps: [
      "Obtain full medical records BEFORE approaching a lawyer — you are legally entitled to them (PDPA 2010). Make a written request to the hospital records department.",
      "Request all imaging (X-rays, MRI, CT scans) — not just reports — as CDs or printed films",
      "Write a detailed timeline of events while memory is fresh",
      "Do not sign any settlement agreement or 'goodwill payment' documents without legal advice"
    ],
    expertWitness: "Malaysian courts require an expert medical witness from the same specialty to testify on standard of care. Your lawyer will arrange this. Expert reports are expensive (RM5,000–30,000) — factor this into your decision to litigate.",
    civilVsCriminal: {
      civil: "Most medical negligence cases are civil — you sue for damages (compensation). This is the most common pathway.",
      criminal: "Criminal negligence under Penal Code Section 304A requires GROSS negligence showing wanton disregard for patient life. Rarely prosecuted in Malaysia but possible in extreme cases (e.g., wrong-site surgery, gross drug errors)."
    },
    mediation: "MOH operates a mediation process for complaints against healthcare providers. This can result in a negotiated settlement without going to court. Consult a lawyer before agreeing to any mediation outcome. MAHC (Malaysian Allied Health Councils) also offers dispute resolution.",
    averageAwards: "Malaysian courts tend to award lower damages than UK or Singapore courts. General damages for pain and suffering: RM20,000–300,000+ depending on severity. Special damages (medical expenses, loss of earnings) are recoverable in addition.",
    findALawyer: "Seek a lawyer with specific medico-legal experience. Bar Council LAC can refer you. Expect initial consultation fees of RM200–500 at private firms; free at LAC."
  },

  childProtection: {
    title: "Child Protection — Reporting & Legal Framework",
    governingLaw: "Child Act 2001 (Akta Kanak-Kanak 2001) — primary legislation. Defines 'child in need of protection' and mandates reporting.",
    reportingLines: [
      {
        name: "Talian Kasih 15999",
        available: "24/7, free, multilingual",
        notes: "Reports routed directly to JKM (Jabatan Kebajikan Masyarakat / Welfare Department) Child Protection Unit"
      },
      {
        name: "Police (999 or nearest police station)",
        available: "24/7",
        notes: "For immediate danger or suspected criminal abuse (physical assault, sexual abuse). Police can remove a child to a place of safety immediately."
      },
      {
        name: "JKM Child Protection Division",
        available: "Office hours (Mon–Fri)",
        notes: "Contact nearest JKM district office. Social workers will conduct welfare checks and initiate care orders if necessary."
      }
    ],
    hospitalDuty: "Under Section 26 of the Child Act 2001, ALL medical professionals (doctors, nurses, allied health) who suspect a child is being abused, neglected, or exploited MUST report to the nearest police station or JKM immediately. This is a legal obligation — failure to report is an offence. The reporting duty applies even if you are not certain; reasonable suspicion is sufficient.",
    medicalExamination: "Suspected child abuse cases should receive a forensic medical examination by a trained doctor. Findings must be carefully documented. Hospitals should have a Child Protection Team (CPT) or social worker on call.",
    legalProcess: [
      "Police or JKM can remove a child to a place of safety without a court order in emergency",
      "Magistrate's Court issues a Care Order (Perintah Jagaan) for longer-term placement",
      "Children's Court (Mahkamah Kanak-Kanak) handles all matters relating to children in need of protection",
      "Parents/guardians have the right to legal representation in care proceedings"
    ],
    organisations: [
      {
        name: "JKM Child Protection Unit",
        contact: "Talian Kasih 15999",
        role: "Government welfare — investigation, case management, placement"
      },
      {
        name: "UNICEF Malaysia",
        website: "https://www.unicef.org/malaysia",
        role: "Advocacy, policy, and support for serious systemic child protection failures"
      },
      {
        name: "MERCY Malaysia",
        phone: "+603-9212 5301",
        website: "https://www.mercy.org.my",
        role: "Humanitarian assistance including child welfare in disaster or extreme neglect situations"
      },
      {
        name: "Child Information, Learning & Development Centre (CHILD)",
        phone: "+603-7875 3005",
        role: "Child sexual abuse treatment and counselling"
      }
    ]
  },

  elderAbuse: {
    title: "Elder Abuse — Reporting & Legal Framework",
    governingLaw: "Older Persons Act 1995 (Akta Orang Tua 1995) — NOTE: This Act is widely criticised for weak enforcement provisions. It does not contain mandatory reporting requirements for elder abuse. Abuse of the elderly can still be prosecuted under the Penal Code (assault, criminal breach of trust, extortion) and may be relevant under the Domestic Violence Act if within a family.",
    legislationGap: "Malaysia does not yet have a comprehensive elder abuse law with mandatory reporting equivalent to the Child Act. Advocates and civil society have been lobbying for reform. Until then, the main legal routes are police reports and JKM welfare interventions.",
    reportingLines: [
      {
        name: "Talian Kasih 15999",
        available: "24/7, free",
        notes: "For abuse, neglect, or welfare concerns about elderly persons. JKM social workers will conduct home visits and welfare assessments."
      },
      {
        name: "Police (999 or nearest station)",
        available: "24/7",
        notes: "For physical abuse, financial exploitation, or criminal neglect of an elderly person. Lodge an SPA (Serah Polis Awam) report."
      },
      {
        name: "JKM Welfare Unit for Elderly (Unit Kebajikan Warga Emas)",
        available: "Office hours",
        notes: "Handles placement in welfare homes, care coordination, and intervention for at-risk elderly persons."
      }
    ],
    howToReport: [
      "Call Talian Kasih 15999 to report suspected elder abuse — JKM will assign a social worker",
      "For immediate physical danger, call 999",
      "For financial abuse or exploitation, lodge a police report at the nearest police station",
      "If the elder is a hospital patient, alert the hospital social worker (Pekerja Sosial Perubatan) immediately",
      "Provide as much detail as possible: full name, IC number if known, address, nature of suspected abuse"
    ],
    jkmWelfareHomes: "JKM operates Rumah Seri Kenangan (RSK) homes for destitute elderly persons. Placement is free for eligible residents. Contact Talian Kasih 15999 or nearest JKM office for referral.",
    hospitalRole: "Hospital social workers should be alerted to any elderly patient who presents with injuries inconsistent with reported history, signs of neglect (malnutrition, pressure sores, poor hygiene), or who expresses fear of returning home. Social workers can refer to JKM and initiate protective action."
  },

  mentalHealthLegal: {
    title: "Mental Health — Legal Rights & Involuntary Admission",
    governingLaw: "Mental Health Act 2001 (Akta Kesihatan Mental 2001). Governs voluntary and involuntary admission, patient rights, and the Mental Health Review Board.",
    voluntaryAdmission: "Any person who consents and meets clinical criteria can voluntarily admit themselves to a psychiatric unit. They retain the right to discharge themselves by giving written notice (subject to clinical review).",
    involuntaryAdmission: {
      title: "Involuntary Admission (Admission Without Consent)",
      when: "When a person has a mental disorder AND poses a danger to themselves or others AND refuses treatment",
      process: [
        "Initial assessment by a registered medical officer (not necessarily a psychiatrist)",
        "Recommendation by two registered psychiatrists for a 30-day Admission Order",
        "For longer detention: hospital must apply to a Magistrate for a Community Treatment Order or extended Admission Order",
        "Patient and next-of-kin must be notified of the admission and their rights"
      ],
      magistrateOrder: "For community treatment or detention exceeding initial hospital-ordered periods, a Magistrate's Order is required. The patient has the right to be represented at the Magistrate's hearing.",
      duration: "Initial order: up to 30 days. Extended order via Magistrate: up to 6 months, renewable."
    },
    patientRightsDuringInvoluntaryAdmission: [
      "Right to be informed of the reason for involuntary admission in language they understand",
      "Right to legal representation at Mental Health Review Board hearings",
      "Right to request a review of the admission order by the Mental Health Review Board",
      "Right to communicate with family, legal counsel, and the Review Board",
      "Right to be treated with dignity and the minimum restriction necessary for treatment",
      "Right to refuse specific treatments (except in cases where the Magistrate/Review Board has specifically ordered treatment)",
      "Right to have a representative (family member or lawyer) present during Review Board hearings"
    ],
    mentalHealthReviewBoard: {
      title: "Mental Health Review Board (Lembaga Semakan Kesihatan Mental)",
      role: "An independent board that reviews involuntary admission orders on the application of the patient, family, or their legal representative. Can order discharge or modify conditions of detention.",
      howToApply: "Patient or family member submits written application to the hospital administrator or directly to the Review Board. Obtain the application form from the hospital psychiatric unit."
    },
    dischargeProcess: [
      "Attending psychiatrist reviews patient clinically and may order discharge when criteria are met",
      "Patient or family can apply to the Mental Health Review Board for discharge review",
      "For Magistrate-ordered admissions, a court hearing is required for discharge"
    ],
    advanceDirective: {
      title: "Advance Directive for Mental Health",
      status: "NOT legally recognised in Malaysia as of 2024",
      note: "Malaysia does not yet have legislation recognising advance directives (living wills or advance decisions) for mental health treatment. This is a significant gap — a person cannot currently legally specify in advance how they wish to be treated during a mental health crisis. Civil society groups are advocating for reform. Until legislation is passed, document your preferences in writing and discuss them with your psychiatrist and family."
    },
    legalAidMentalHealth: "Bar Council LAC and LPPB can provide legal representation for Mental Health Review Board hearings. NASOM and the Malaysian Mental Health Association (MMHA) can provide guidance."
  },

  medicalTourismDisputes: {
    title: "Medical Tourism Disputes",
    overview: "Foreign patients receiving treatment in Malaysia are protected by the Consumer Protection Act 1999 and may pursue complaints through the same channels as Malaysian residents. However, practical enforcement for foreign nationals is more complex.",
    governingLaw: "Consumer Protection Act 1999 (CPA); Private Healthcare Facilities & Services Act 1998 (PHFSA); Contract Act 1950.",
    mhtc: {
      name: "Malaysia Healthcare Travel Council (MHTC)",
      role: "Government body promoting medical tourism. Has a mediation and dispute resolution function. MHTC is the primary first point of contact for foreign patient disputes.",
      phone: "+603-2726 8688",
      website: "https://www.mhtc.org.my",
      howToUse: "Contact MHTC before initiating litigation. MHTC can mediate between the patient and the hospital, and may achieve faster resolution than courts. Provide full documentation of the treatment received, bills, and correspondence."
    },
    consularAssistance: "For serious cases (patient death, major disability, suspected criminal conduct), the patient's home country consulate or embassy in Malaysia should be contacted. Consular officers can assist with repatriation, contact with local authorities, and finding local legal representation.",
    consumerProtectionAct: "The Consumer Protection Act 1999 covers goods and services purchased in Malaysia — including medical services. Foreign patients can file a claim with the Consumer Claims Tribunal for disputes up to RM50,000.",
    adr: "Alternative Dispute Resolution (ADR) via MHTC-facilitated mediation is strongly recommended before litigation — it is faster, cheaper, and preserves relationships. Most MHTC-affiliated hospitals have agreed to participate in mediation.",
    litigation: {
      overview: "Foreign patients can sue in Malaysian courts. Malaysian courts apply Malaysian law (Contract Act 1950, Torts law for negligence). Foreign judgments from certain countries can also be enforced in Malaysia under the Reciprocal Enforcement of Judgments Act 1958.",
      lawyer: "Engage a Malaysian lawyer with medico-legal experience. Bar Council LAC can provide referrals even for foreign nationals in some circumstances.",
      limitation: "Same 3-year limitation period applies — from date of discovery of harm."
    },
    practicalTips: [
      "Keep all medical records, bills, and communications — request copies before leaving Malaysia if possible",
      "Request an itemized bill before paying",
      "Ensure your travel/medical insurance covers international medical disputes before travelling",
      "MHTC-accredited hospitals (look for MHTC Quality Healthcare logo) have agreed to higher service standards",
      "For insurance disputes involving a Malaysian insurer, contact OFS (Ombudsman for Financial Services): ofs.org.my"
    ]
  }

};
