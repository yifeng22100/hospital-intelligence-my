// data/cost-reference.js
export const COST_REFERENCE = {

  disclaimer: "All costs are approximate estimates based on 2023–2024 data. Actual costs vary significantly by hospital, surgeon, anaesthetist, case complexity, complications, implant choice, and length of stay. Always obtain a formal written estimate from the hospital before proceeding. Private hospital estimates in Malaysia are itemised by law on request.",
  currency: "MYR",
  lastUpdated: "2024",

  tiers: {
    public: "Subsidised rate for Malaysian citizens at government hospitals (MOH / university hospitals). Rates are heavily subsidised — costs reflect patient co-payment, not actual cost.",
    publicFPP: "Full Paying Patient (FPP) rate at government hospitals — patients who opt for private wards or private room at government facilities. No subsidy.",
    privateMid: "Mid-tier private hospitals — community private hospitals, regional medical centres (e.g., KPJ hospitals, Columbia Asia, Tropicana Medical).",
    privatePremium: "Premium private hospitals — Gleneagles, Prince Court, Sunway Medical Centre, Pantai Hospital KL, Island Hospital Penang, Loh Guan Lye Penang tier."
  },

  categories: [

    {
      id: "maternity",
      title: "Maternity & Childbirth",
      titleBM: "Bersalin & Kelahiran",
      titleZH: "生育与分娩",
      procedures: [
        {
          name: "Normal Vaginal Delivery",
          nameBM: "Bersalin Normal",
          nameZH: "顺产",
          publicCost: "RM 5–80 (subsidised)",
          publicFPP: "RM 1,500–3,000",
          privateMid: "RM 3,000–6,000",
          privatePremium: "RM 7,000–15,000",
          notes: "Includes hospital room (1–2 nights), delivery fee, paediatrician review of newborn, and basic postnatal care. Epidural adds RM 1,000–2,500 extra. Twins or complicated delivery adds RM 1,500–4,000."
        },
        {
          name: "Caesarean Section (C-Section)",
          nameBM: "Pembedahan Caesarean",
          nameZH: "剖腹产",
          publicCost: "RM 5–150 (subsidised)",
          publicFPP: "RM 3,000–6,000",
          privateMid: "RM 6,000–12,000",
          privatePremium: "RM 12,000–22,000",
          notes: "Includes surgery, anaesthesia, 3–4 night stay, paediatrician, and basic nursery care. Emergency C-section at night or involving complex complications (e.g., placenta praevia, severe pre-eclampsia) will be at the higher end."
        },
        {
          name: "Epidural Anaesthesia (during labour)",
          nameBM: "Epidural Semasa Bersalin",
          nameZH: "无痛分娩（硬膜外麻醉）",
          publicCost: "RM 0–20 (subsidised, availability limited)",
          publicFPP: "RM 800–1,500",
          privateMid: "RM 1,000–2,000",
          privatePremium: "RM 1,500–2,800",
          notes: "Add-on cost to normal or C-section delivery. Not always available at government facilities — call ahead to confirm. Some private insurers do not cover elective epidural."
        },
        {
          name: "NICU Admission (Premature / Sick Newborn)",
          nameBM: "Unit Rawatan Rapi Neonatal (NICU)",
          nameZH: "新生儿重症监护（NICU）",
          publicCost: "RM 5–100/day (subsidised)",
          publicFPP: "RM 500–1,500/day",
          privateMid: "RM 1,200–2,500/day",
          privatePremium: "RM 2,500–5,000/day",
          notes: "Costs can escalate rapidly for very premature babies (born <28 weeks). Total NICU bill for extreme prematurity can exceed RM 100,000–400,000 at private hospitals. Critical illness insurance or pregnancy riders strongly recommended."
        },
        {
          name: "Antenatal Screening Package (Full)",
          nameBM: "Pakej Saringan Antenatal",
          nameZH: "产前检查套餐",
          publicCost: "Included in antenatal care (subsidised)",
          publicFPP: "RM 400–900",
          privateMid: "RM 800–2,000",
          privatePremium: "RM 2,000–5,000",
          notes: "Includes: routine blood tests, OGTT, urine culture, ultrasound scans (dating, anatomy scan, growth scans), Group B Strep swab. NIPT (non-invasive prenatal testing for chromosomal disorders) is additional: RM 1,200–2,500 and is elective."
        }
      ]
    },

    {
      id: "cardiology",
      title: "Cardiology & Heart Procedures",
      titleBM: "Kardiologi & Prosedur Jantung",
      titleZH: "心脏科手术",
      procedures: [
        {
          name: "Coronary Angiogram (Cardiac Catheterisation)",
          nameBM: "Angiogram Koronari",
          nameZH: "冠状动脉造影",
          publicCost: "RM 30–200 (subsidised)",
          publicFPP: "RM 3,000–6,000",
          privateMid: "RM 5,000–9,000",
          privatePremium: "RM 8,000–15,000",
          notes: "Diagnostic procedure to visualise coronary arteries. If angioplasty (stenting) is needed, performed immediately in same session. Includes 1-day admission typically."
        },
        {
          name: "Coronary Angioplasty / PTCA (Percutaneous Coronary Intervention) — Single Stent",
          nameBM: "Angioplasti Koronari (Satu Stent)",
          nameZH: "冠状动脉支架手术（单支架）",
          publicCost: "RM 50–500 (subsidised, stent charges may apply)",
          publicFPP: "RM 8,000–18,000",
          privateMid: "RM 15,000–28,000",
          privatePremium: "RM 25,000–45,000",
          notes: "Cost varies greatly with type of stent — bare metal stent vs. drug-eluting stent (add RM 3,000–7,000 per stent). Multi-vessel disease requiring 2–3 stents will multiply costs. Emergency PCI for heart attack covered by most hospitalisation insurance."
        },
        {
          name: "Coronary Artery Bypass Grafting (CABG / Heart Bypass Surgery)",
          nameBM: "Pembedahan Pintasan Arteri Koronari (CABG)",
          nameZH: "冠状动脉搭桥手术",
          publicCost: "RM 100–1,000 (subsidised; may involve waiting list)",
          publicFPP: "RM 20,000–40,000",
          privateMid: "RM 40,000–70,000",
          privatePremium: "RM 70,000–120,000",
          notes: "Major open heart surgery requiring 5–10 day admission. Costs include cardiac surgeon, cardiothoracic anaesthetist, perfusionist (heart-lung bypass), ICU stay (2–3 days), and cardiac rehabilitation. IJN (Institut Jantung Negara) in KL offers internationally competitive prices for complex cardiac surgery."
        },
        {
          name: "Pacemaker Implantation (Permanent Pacemaker)",
          nameBM: "Pemasangan Alat Pacu Jantung",
          nameZH: "心脏起搏器植入",
          publicCost: "RM 50–500 (subsidised; device may incur charges)",
          publicFPP: "RM 10,000–20,000",
          privateMid: "RM 18,000–32,000",
          privatePremium: "RM 30,000–55,000",
          notes: "Device cost varies: single-chamber pacemaker (RM 5,000–15,000 for device alone), dual-chamber pacemaker (RM 12,000–25,000), ICD (defibrillator, RM 30,000–80,000), CRT-D for heart failure (RM 50,000–100,000). Device brand and feature tier significantly affects total cost."
        },
        {
          name: "Cardiac MRI",
          nameBM: "MRI Jantung",
          nameZH: "心脏磁共振（MRI）",
          publicCost: "RM 30–100 (subsidised, with referral)",
          publicFPP: "RM 1,000–2,500",
          privateMid: "RM 1,800–3,500",
          privatePremium: "RM 2,500–5,000",
          notes: "With gadolinium contrast adds RM 200–500. Requires cardiac MRI-capable scanner and specialist interpretation. Not available at all private hospitals."
        }
      ]
    },

    {
      id: "orthopaedics",
      title: "Orthopaedic Surgery",
      titleBM: "Pembedahan Ortopedik",
      titleZH: "骨科手术",
      procedures: [
        {
          name: "Total Knee Replacement (TKR)",
          nameBM: "Penggantian Lutut Keseluruhan (TKR)",
          nameZH: "全膝关节置换术",
          publicCost: "RM 50–500 (subsidised; waiting list common)",
          publicFPP: "RM 12,000–22,000",
          privateMid: "RM 20,000–35,000",
          privatePremium: "RM 35,000–60,000",
          notes: "One knee. Both knees (bilateral) approximately 1.5–1.8x single knee cost. Implant brand/tier (standard vs. high-flex vs. custom-fit) significantly affects price. Includes 3–5 day admission and initial physiotherapy. Robotic-assisted TKR adds RM 8,000–15,000."
        },
        {
          name: "Total Hip Replacement (THR)",
          nameBM: "Penggantian Pinggul Keseluruhan (THR)",
          nameZH: "全髋关节置换术",
          publicCost: "RM 50–500 (subsidised)",
          publicFPP: "RM 14,000–25,000",
          privateMid: "RM 22,000–38,000",
          privatePremium: "RM 38,000–65,000",
          notes: "Implant type significantly affects cost (metal-on-polyethylene vs. ceramic-on-ceramic). Includes 3–5 day admission. Hip resurfacing (younger patients) may be slightly more expensive."
        },
        {
          name: "Spine Surgery — Lumbar Microdiscectomy",
          nameBM: "Pembedahan Tulang Belakang — Mikrodiskektomi Lumbar",
          nameZH: "腰椎显微椎间盘切除术",
          publicCost: "RM 30–300 (subsidised)",
          publicFPP: "RM 8,000–18,000",
          privateMid: "RM 15,000–28,000",
          privatePremium: "RM 28,000–50,000",
          notes: "For single-level disc prolapse with nerve compression. Multi-level surgery will be higher. Spinal fusion surgery significantly more expensive (RM 30,000–90,000+ at private hospitals)."
        },
        {
          name: "ACL Reconstruction (Knee Ligament Surgery)",
          nameBM: "Pembinaan Semula ACL (Ligamen Lutut)",
          nameZH: "前交叉韧带重建术",
          publicCost: "RM 30–200 (subsidised)",
          publicFPP: "RM 5,000–12,000",
          privateMid: "RM 10,000–18,000",
          privatePremium: "RM 18,000–30,000",
          notes: "Includes arthroscopy, graft harvest, and fixation. Graft type (hamstring autograft vs. patellar tendon vs. allograft) affects cost. 6–9 month rehabilitation programme cost is additional (RM 2,000–6,000 for physiotherapy)."
        },
        {
          name: "Open Reduction Internal Fixation (ORIF) — Long Bone Fracture",
          nameBM: "Fiksasi Dalaman Patah Tulang (ORIF)",
          nameZH: "骨折切开复位内固定术",
          publicCost: "RM 30–300 (subsidised)",
          publicFPP: "RM 5,000–15,000",
          privateMid: "RM 10,000–22,000",
          privatePremium: "RM 20,000–40,000",
          notes: "Highly variable by fracture type, location, and implant used (titanium locking plate, intramedullary nail, etc.). Implant cost alone can range RM 1,500–12,000. Commonly covered by motor insurance (trauma) or SOCSO (workplace)."
        }
      ]
    },

    {
      id: "oncology",
      title: "Oncology & Cancer Treatment",
      titleBM: "Onkologi & Rawatan Kanser",
      titleZH: "肿瘤与癌症治疗",
      procedures: [
        {
          name: "Chemotherapy (per cycle — conventional regimen)",
          nameBM: "Kemoterapi (per kitaran)",
          nameZH: "化疗（每个疗程）",
          publicCost: "RM 0–50/cycle (subsidised for most MOH protocols)",
          publicFPP: "RM 1,500–6,000/cycle",
          privateMid: "RM 3,000–10,000/cycle",
          privatePremium: "RM 5,000–20,000/cycle",
          notes: "Cost per cycle varies enormously by regimen. Standard adjuvant breast cancer chemo (e.g., AC-T): RM 3,000–8,000/cycle at private mid-tier. Targeted therapy (Herceptin, Avastin, Iressa): RM 8,000–30,000/cycle. Total treatment course: 6–8 cycles. Government PBLS scheme may subsidise some targeted agents."
        },
        {
          name: "Radiation Therapy (Radiotherapy) — Full Course",
          nameBM: "Radioterapi — Kursus Penuh",
          nameZH: "放射治疗（全疗程）",
          publicCost: "RM 50–300 (subsidised for full course)",
          publicFPP: "RM 5,000–15,000",
          privateMid: "RM 15,000–35,000",
          privatePremium: "RM 30,000–70,000",
          notes: "Conventional 25–35 fractions: RM 15,000–30,000. IMRT (Intensity Modulated Radiation Therapy): higher cost range. SBRT/SABR (stereotactic): RM 20,000–50,000 per site. Proton therapy not available in Malaysia — patients go to Singapore, Japan, or Thailand."
        },
        {
          name: "PET-CT Scan (Whole Body)",
          nameBM: "Imbasan PET-CT (Seluruh Badan)",
          nameZH: "PET-CT扫描（全身）",
          publicCost: "RM 200–600 (subsidised; limited availability at select government hospitals)",
          publicFPP: "RM 1,500–3,000",
          privateMid: "RM 2,500–4,000",
          privatePremium: "RM 3,500–6,000",
          notes: "Includes FDG radiopharmaceutical. Requires fasting. Available at limited centres — major private hospitals with nuclear medicine units. Used for staging, treatment response, and surveillance."
        },
        {
          name: "Cancer Surgery (General Tumour Resection — Major)",
          nameBM: "Pembedahan Kanser (Reseksi Tumor Besar)",
          nameZH: "肿瘤切除手术（大型）",
          publicCost: "RM 50–500 (subsidised)",
          publicFPP: "RM 8,000–25,000",
          privateMid: "RM 15,000–45,000",
          privatePremium: "RM 35,000–90,000",
          notes: "Highly variable by cancer type and extent. Colectomy (colon cancer), mastectomy (breast), lung lobectomy, hepatectomy (liver) all fall in this range. Complex resections with reconstruction will be at the upper end."
        },
        {
          name: "Bone Marrow / Stem Cell Transplant (Autologous)",
          nameBM: "Pemindahan Sumsum Tulang (Autologous)",
          nameZH: "自体骨髓/干细胞移植",
          publicCost: "RM 500–5,000 (subsidised at UH, HKL — limited slots)",
          publicFPP: "RM 50,000–100,000",
          privateMid: "RM 80,000–150,000",
          privatePremium: "RM 120,000–250,000",
          notes: "Allogeneic (donor) transplant is significantly more expensive — add 50–100% to the above. Requires dedicated transplant unit. Available at University Malaya Medical Centre (UMMC), Hospital Ampang, and select private hospitals."
        }
      ]
    },

    {
      id: "general-surgery",
      title: "General Surgery",
      titleBM: "Pembedahan Am",
      titleZH: "普通外科手术",
      procedures: [
        {
          name: "Appendectomy — Laparoscopic",
          nameBM: "Pembedahan Usus Buntu (Laparoskopik)",
          nameZH: "腹腔镜阑尾切除术",
          publicCost: "RM 5–100 (subsidised)",
          publicFPP: "RM 3,000–7,000",
          privateMid: "RM 6,000–12,000",
          privatePremium: "RM 12,000–20,000",
          notes: "Open appendectomy is slightly less expensive but less common for uncomplicated cases. Perforated appendix with peritonitis will significantly increase costs (longer admission, higher surgical complexity)."
        },
        {
          name: "Laparoscopic Cholecystectomy (Gallbladder Removal)",
          nameBM: "Kolesistektomi Laparoskopik (Buang Pundi Hempedu)",
          nameZH: "腹腔镜胆囊切除术",
          publicCost: "RM 5–100 (subsidised)",
          publicFPP: "RM 3,000–8,000",
          privateMid: "RM 7,000–14,000",
          privatePremium: "RM 14,000–25,000",
          notes: "Typically 1–2 day admission. If bile duct stones are present (requiring ERCP), add RM 3,000–8,000."
        },
        {
          name: "Hernia Repair (Inguinal — Laparoscopic with Mesh)",
          nameBM: "Pembaikan Hernia Inguinal (Laparoskopik)",
          nameZH: "腹股沟疝气修复手术（腹腔镜）",
          publicCost: "RM 5–100 (subsidised)",
          publicFPP: "RM 2,500–6,000",
          privateMid: "RM 5,000–10,000",
          privatePremium: "RM 10,000–18,000",
          notes: "Mesh type and laparoscopic vs. open affects cost. Bilateral (both sides) approximately 1.5x single side. Day surgery possible in uncomplicated cases."
        },
        {
          name: "Colonoscopy (Diagnostic)",
          nameBM: "Kolonoskopi (Diagnostik)",
          nameZH: "结肠镜检查",
          publicCost: "RM 5–30 (subsidised, referral required)",
          publicFPP: "RM 500–1,500",
          privateMid: "RM 800–1,800",
          privatePremium: "RM 1,500–3,000",
          notes: "Therapeutic colonoscopy (with polypectomy) adds RM 300–800. Sedation/anaesthesia fee (RM 400–800) may be charged separately. Day procedure typically."
        },
        {
          name: "Gastroscopy / OGD (Upper GI Endoscopy)",
          nameBM: "Gastroskopi / OGD",
          nameZH: "胃镜检查",
          publicCost: "RM 5–30 (subsidised)",
          publicFPP: "RM 300–800",
          privateMid: "RM 500–1,200",
          privatePremium: "RM 1,000–2,000",
          notes: "HP test (Helicobacter pylori rapid urease test) adds RM 50–150. Biopsy adds RM 100–300. Sedation adds RM 300–600 at private centres."
        }
      ]
    },

    {
      id: "neurology",
      title: "Neurology & Neurosurgery",
      titleBM: "Neurologi & Neurosurgeri",
      titleZH: "神经科与神经外科",
      procedures: [
        {
          name: "Brain MRI (with contrast)",
          nameBM: "MRI Otak (dengan kontras)",
          nameZH: "脑部MRI（增强）",
          publicCost: "RM 30–100 (subsidised)",
          publicFPP: "RM 700–1,500",
          privateMid: "RM 900–2,000",
          privatePremium: "RM 1,500–3,500",
          notes: "Without contrast: RM 150–300 less. Functional MRI or MR Spectroscopy (for complex tumour evaluation) adds RM 500–1,500."
        },
        {
          name: "Spine MRI (Lumbar or Cervical)",
          nameBM: "MRI Tulang Belakang",
          nameZH: "脊椎MRI",
          publicCost: "RM 30–100 (subsidised)",
          publicFPP: "RM 600–1,200",
          privateMid: "RM 800–1,800",
          privatePremium: "RM 1,200–2,800",
          notes: "Whole spine MRI (cervical + thoracic + lumbar): approximately 2.5x single region. Most cases only one or two regions are needed."
        },
        {
          name: "Lumbar Discectomy / Laminectomy (Spine Surgery)",
          nameBM: "Diskektomi / Laminektomi Lumbar",
          nameZH: "腰椎椎间盘切除/椎板切除术",
          publicCost: "RM 30–300 (subsidised)",
          publicFPP: "RM 8,000–20,000",
          privateMid: "RM 15,000–30,000",
          privatePremium: "RM 30,000–55,000",
          notes: "Single level. Multi-level or revision surgery will be significantly higher. Spinal fusion adds considerably to cost."
        },
        {
          name: "Craniotomy (Brain Surgery — Tumour / AVM / Aneurysm)",
          nameBM: "Kraniotomi (Pembedahan Otak)",
          nameZH: "开颅手术",
          publicCost: "RM 50–1,000 (subsidised)",
          publicFPP: "RM 20,000–50,000",
          privateMid: "RM 40,000–90,000",
          privatePremium: "RM 80,000–200,000",
          notes: "Highly variable. Simple tumour debulking vs. complex skull base surgery vs. cerebrovascular aneurysm clipping are very different in cost and complexity. Neuro-navigation systems add to cost. Long ICU stay is common."
        }
      ]
    },

    {
      id: "ophthalmology",
      title: "Ophthalmology (Eye Surgery)",
      titleBM: "Oftalmologi (Pembedahan Mata)",
      titleZH: "眼科手术",
      procedures: [
        {
          name: "Cataract Surgery — Phacoemulsification with IOL (One Eye)",
          nameBM: "Pembedahan Katarak (Satu Mata)",
          nameZH: "白内障手术（单眼）",
          publicCost: "RM 5–50 (subsidised; may have waiting list)",
          publicFPP: "RM 1,500–4,000 per eye",
          privateMid: "RM 3,000–6,000 per eye",
          privatePremium: "RM 5,000–12,000 per eye",
          notes: "IOL (intraocular lens) type significantly affects cost: monofocal (standard) vs. multifocal/toric (premium) IOL. Premium IOL adds RM 2,000–6,000 per eye. Both eyes typically done 1–2 weeks apart. Free National Cataract Programme for eligible B40 Malaysians."
        },
        {
          name: "LASIK (Laser Vision Correction)",
          nameBM: "LASIK (Pembetulan Penglihatan Laser)",
          nameZH: "激光视力矫正（LASIK）",
          publicCost: "Not available at public hospitals",
          publicFPP: "Not applicable",
          privateMid: "RM 2,500–4,500 per eye",
          privatePremium: "RM 3,500–6,500 per eye",
          notes: "Cost for both eyes: approximately 1.8–2x single eye. LASIK vs. SMILE vs. PRK/TransPRK — different technologies at different price points. Wavefront-guided or topography-guided LASIK costs more. Includes pre-operative assessment (RM 200–500). Lifelong touch-up may be offered for free or at reduced cost by some centres."
        },
        {
          name: "Vitreoretinal Surgery (e.g., Retinal Detachment, Macular Hole)",
          nameBM: "Pembedahan Vitroretina (Detasmen Retina)",
          nameZH: "玻璃体视网膜手术（视网膜脱落）",
          publicCost: "RM 50–300 (subsidised)",
          publicFPP: "RM 5,000–15,000",
          privateMid: "RM 12,000–25,000",
          privatePremium: "RM 25,000–50,000",
          notes: "Complex retinal detachment with silicone oil tamponade: higher end. Anti-VEGF injections (Avastin, Lucentis) for macular disease: RM 500–2,500 per injection, typically needed monthly for first 3 months."
        }
      ]
    },

    {
      id: "fertility",
      title: "Fertility Treatment",
      titleBM: "Rawatan Kesuburan",
      titleZH: "不育治疗",
      procedures: [
        {
          name: "IVF Cycle — Basic (Fresh Embryo Transfer)",
          nameBM: "Kitaran IVF Asas (Pindahan Embrio Segar)",
          nameZH: "试管婴儿基础周期（新鲜胚胎）",
          publicCost: "Not available at public hospitals in Malaysia",
          publicFPP: "Not applicable",
          privateMid: "RM 15,000–22,000",
          privatePremium: "RM 22,000–35,000",
          notes: "Includes ovarian stimulation, egg retrieval, fertilisation, embryo culture, and fresh transfer. Medications (FSH injections, GnRH agonist/antagonist): RM 3,000–8,000 additional. Frozen Embryo Transfer (FET) in subsequent cycles: RM 3,000–6,000. Success rate per cycle varies — ask the clinic for their age-stratified live birth rates."
        },
        {
          name: "IVF with Pre-implantation Genetic Testing (PGT)",
          nameBM: "IVF dengan PGT",
          nameZH: "胚胎植入前遗传检测（PGT）",
          publicCost: "Not available at public hospitals",
          publicFPP: "Not applicable",
          privateMid: "RM 22,000–35,000",
          privatePremium: "RM 35,000–55,000",
          notes: "PGT-A (aneuploidy screening): adds RM 5,000–10,000 per cycle for biopsy and genetic testing. PGT-M (monogenic disease): even more expensive. Recommended for women above 37 years old, recurrent miscarriage, or known genetic conditions."
        },
        {
          name: "Intrauterine Insemination (IUI)",
          nameBM: "Inseminasi Intra-uterin (IUI)",
          nameZH: "人工授精（IUI）",
          publicCost: "Not routinely available at public hospitals",
          publicFPP: "Not applicable",
          privateMid: "RM 1,500–3,500 per cycle",
          privatePremium: "RM 2,500–5,000 per cycle",
          notes: "Includes sperm preparation and insemination procedure. Ovarian stimulation medications (if used): RM 500–1,500 additional. Success rate per cycle is modest (10–20% for unexplained infertility) — typically 3–4 cycles tried before proceeding to IVF."
        }
      ]
    },

    {
      id: "health-screening",
      title: "Health Screening",
      titleBM: "Pemeriksaan Kesihatan",
      titleZH: "健康检查",
      procedures: [
        {
          name: "Basic Health Screening",
          nameBM: "Saringan Kesihatan Asas",
          nameZH: "基础健康检查",
          publicCost: "RM 0–30 (at government health clinics — various subsidised screening programmes)",
          publicFPP: "RM 100–300",
          privateMid: "RM 200–500",
          privatePremium: "RM 400–800",
          notes: "Typically includes: FBC, fasting glucose, lipid profile, uric acid, liver function, renal function, urine FEME. MyHealth screening (Skim Peduli Sihat B40) provides free screening at KKM clinics for eligible Malaysians."
        },
        {
          name: "Executive Health Screening (Full-Day Comprehensive)",
          nameBM: "Pemeriksaan Kesihatan Eksekutif Komprehensif",
          nameZH: "高级全面健康体检",
          publicCost: "Not typically available at public hospitals",
          publicFPP: "RM 500–1,200",
          privateMid: "RM 800–2,500",
          privatePremium: "RM 2,000–6,000",
          notes: "Includes basic blood panel plus: tumour markers, thyroid function, Pap smear (women), PSA (men), chest X-ray, ECG, ultrasound abdomen, bone density (optional), vision/hearing tests. Premium tier adds specialist consultation, colonoscopy, or CT scans."
        },
        {
          name: "CT Coronary Angiogram (CTCA) — Calcium Score",
          nameBM: "Angiogram Koronari CT — Skor Kalsium",
          nameZH: "CT冠状动脉造影（钙化积分）",
          publicCost: "RM 50–200 (subsidised, limited availability)",
          publicFPP: "RM 800–1,800",
          privateMid: "RM 1,200–2,800",
          privatePremium: "RM 2,000–4,500",
          notes: "Calcium score alone (basic cardiac risk screening): RM 300–800. Full CTCA (with contrast, to visualise coronary plaques): RM 1,500–4,500. Requires appropriate pre-medication with beta-blocker if heart rate is elevated."
        }
      ]
    },

    {
      id: "ent",
      title: "Ear, Nose & Throat (ENT) Surgery",
      titleBM: "Pembedahan ENT (Telinga, Hidung & Tekak)",
      titleZH: "耳鼻喉科手术",
      procedures: [
        {
          name: "Tonsillectomy (Tonsil Removal)",
          nameBM: "Pembedahan Buang Tonsil",
          nameZH: "扁桃体切除术",
          publicCost: "RM 5–50 (subsidised)",
          publicFPP: "RM 2,500–5,000",
          privateMid: "RM 4,000–8,000",
          privatePremium: "RM 8,000–14,000",
          notes: "Often performed with adenoidectomy (adenoid removal): add RM 1,000–2,500. Day surgery for uncomplicated cases. Children require paediatric anaesthesia — factor into cost estimate."
        },
        {
          name: "FESS (Functional Endoscopic Sinus Surgery)",
          nameBM: "Pembedahan Sinus Endoskopik (FESS)",
          nameZH: "鼻腔内窥镜鼻窦手术（FESS）",
          publicCost: "RM 30–200 (subsidised)",
          publicFPP: "RM 4,000–10,000",
          privateMid: "RM 8,000–18,000",
          privatePremium: "RM 18,000–35,000",
          notes: "Unilateral vs. bilateral and number of sinuses involved significantly affects cost. Septoplasty (for deviated septum) performed simultaneously: add RM 2,000–5,000. Image-guided navigation system: add RM 2,000–5,000."
        },
        {
          name: "Cochlear Implant (Unilateral — Surgery + Device)",
          nameBM: "Implan Koklea (Satu Sisi — Pembedahan + Peranti)",
          nameZH: "人工耳蜗植入（单侧）",
          publicCost: "RM 500–5,000 (heavily subsidised — device costs up to RM 80,000 may be MOH-covered for eligible children)",
          publicFPP: "RM 60,000–100,000",
          privateMid: "RM 80,000–130,000",
          privatePremium: "RM 100,000–160,000",
          notes: "Device alone costs RM 50,000–80,000+. Post-implant auditory verbal therapy (AVT) is essential: RM 500–2,000/month for 2–5 years. MOH provides cochlear implants to deaf children under 4 years old free of charge at selected government hospitals subject to eligibility. OKU card holders may access JKJAV grants."
        }
      ]
    },

    {
      id: "urology",
      title: "Urology",
      titleBM: "Urologi",
      titleZH: "泌尿外科",
      procedures: [
        {
          name: "TURP (Transurethral Resection of Prostate) — Enlarged Prostate",
          nameBM: "Pembedahan TURP (Prostat Membesar)",
          nameZH: "经尿道前列腺切除术（TURP）",
          publicCost: "RM 30–200 (subsidised)",
          publicFPP: "RM 4,000–10,000",
          privateMid: "RM 8,000–16,000",
          privatePremium: "RM 15,000–28,000",
          notes: "HoLEP (Holmium Laser Enucleation of Prostate) — a newer technique: slightly more expensive but available at fewer centres. Includes 2–3 day admission."
        },
        {
          name: "Kidney Stone — Lithotripsy (ESWL)",
          nameBM: "Batu Buah Pinggang — Litotripsi (ESWL)",
          nameZH: "肾结石体外冲击波碎石术（ESWL）",
          publicCost: "RM 5–100 (subsidised)",
          publicFPP: "RM 1,000–3,000",
          privateMid: "RM 1,500–4,000",
          privatePremium: "RM 3,000–6,000",
          notes: "Per session. Some stones require multiple sessions (2–4). Ureteroscopy with laser lithotripsy (for ureteric stones or failed ESWL): RM 4,000–12,000 at private hospitals. Percutaneous Nephrolithotomy (PCNL) for large complex stones: RM 12,000–30,000."
        },
        {
          name: "Laparoscopic Nephrectomy (Kidney Removal)",
          nameBM: "Nefrektomi Laparoskopik (Buang Buah Pinggang)",
          nameZH: "腹腔镜肾切除术",
          publicCost: "RM 50–500 (subsidised)",
          publicFPP: "RM 10,000–22,000",
          privateMid: "RM 18,000–35,000",
          privatePremium: "RM 35,000–65,000",
          notes: "Partial nephrectomy (nephron-sparing, typically for small renal tumours): similar or slightly higher cost. Robotic-assisted: add RM 10,000–25,000."
        }
      ]
    },

    {
      id: "psychiatry",
      title: "Psychiatry & Mental Health",
      titleBM: "Psikiatri & Kesihatan Mental",
      titleZH: "精神科与心理健康",
      procedures: [
        {
          name: "Inpatient Psychiatric Admission (per day — adult, acute)",
          nameBM: "Kemasukan Wad Psikiatri (sehari — dewasa, akut)",
          nameZH: "精神科住院（每天，成人，急性）",
          publicCost: "RM 5–30/day (subsidised)",
          publicFPP: "RM 300–800/day",
          privateMid: "RM 500–1,200/day",
          privatePremium: "RM 1,000–2,500/day",
          notes: "Average acute psychiatric admission: 7–14 days. Includes daily psychiatrist review, nursing care, and medication. Psychologist sessions and occupational therapy billed separately. Check if your insurance policy has specific psychiatric limits — many policies limit coverage to 30–60 days lifetime."
        },
        {
          name: "ECT (Electroconvulsive Therapy) — Per Session",
          nameBM: "Terapi Elektrokonvulsif (ECT) — Sesesi",
          nameZH: "电休克疗法（ECT）——每次",
          publicCost: "RM 5–30/session (subsidised at government hospitals)",
          publicFPP: "RM 500–1,200/session",
          privateMid: "RM 800–1,800/session",
          privatePremium: "RM 1,500–3,000/session",
          notes: "Typically 6–12 sessions per acute course. Includes anaesthesia and full monitoring. Only available at hospitals with a full psychiatric unit and anaesthesia support. Highly effective for severe depression, treatment-resistant cases, and acute mania."
        },
        {
          name: "Outpatient Psychiatrist Consultation",
          nameBM: "Konsultasi Pakar Psikiatri Pesakit Luar",
          nameZH: "精神科门诊会诊",
          publicCost: "RM 1–15 (subsidised at government hospital OPD)",
          publicFPP: "RM 50–100",
          privateMid: "RM 200–400",
          privatePremium: "RM 350–600",
          notes: "First consultation is typically more expensive than follow-up visits. Clinical psychologist consultation: RM 150–350/session (private). Some insurance policies cover outpatient mental health — check your policy for sub-limits and session caps."
        }
      ]
    }

  ],

  systemHacks: [
    "EPF Account 2 (Akaun 2 KWSP) withdrawal: You can withdraw from your Account 2 to pay for yourself, your spouse, parents, parents-in-law, or children's medical expenses — including major surgeries, cancer treatment, and chronic disease management. Apply at any EPF counter or online via i-Akaun. There is no minimum withdrawal amount for approved medical purposes.",
    "SOCSO/PERKESO covers 100% of hospitalisation costs from work-related illness or injury — claim via your employer (they must report within 48 hours) or directly at any PERKESO office. Coverage includes post-hospitalisation rehabilitation. perkeso.gov.my or call 1-800-22-8000.",
    "MySalam Takaful: The government's MySalam scheme pays RM8,000 lump sum on diagnosis of any of 36 critical illnesses AND RM4,000 for B40 hospital admission due to covered conditions. Eligible: Malaysians earning less than RM100,000/year with active tax filing. No claim needed — payout is automatic via MyKad registration. Check eligibility at mysalam.com.my.",
    "Peka B40 Health Screening: Eligible Malaysians in the B40 income group receive FREE health screening and early cancer detection including mammogram, Pap smear, and colorectal cancer screening. No referral needed — just register at a clinic participating in the Skim Peduli Sihat programme. pekab40.com.my.",
    "National Specialist Register (NSR) consultation at government university hospitals (UMMC, HUKM, HUSM, etc.) — specialists are senior academic doctors. Costs are subsidised compared to private hospitals and quality is often equivalent. Waiting times are longer but acceptable for non-emergency conditions.",
    "Zakat for medical treatment: Many state zakat boards (Lembaga Zakat Selangor, MAIWP, etc.) provide financial assistance for medical treatment for eligible Muslims. Apply at your state Islamic religious council. Non-Muslims: Yayasan Kebajikan Negara (JKM) has a medical assistance fund.",
    "JKM Medical Assistance (Bantuan Perubatan JKM): Low-income Malaysians (B40 and below) can apply for JKM medical financial assistance to cover hospital bills. Contact the nearest JKM district office or call Talian Kasih 15999.",
    "MAKNA (National Cancer Council Malaysia): Provides financial assistance and support services for cancer patients including drug subsidy, transport, and lodging assistance. makna.org.my or +603-4023 3500.",
    "Cancer Research Malaysia / NCI Foundation: Some centres provide subsidised clinical trial treatments for eligible patients — experimental but potentially free access to cutting-edge therapies. Ask your oncologist about trial eligibility.",
    "Pharmacy drug subsidy: For expensive medications not on MOH formulary, your government hospital doctor can apply for a Ministry of Health drug exception or refer you to a patient assistance programme run by pharmaceutical companies. Ask your doctor specifically — many patients are unaware this option exists."
  ]

};
