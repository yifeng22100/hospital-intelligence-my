// data/specialties-reference.js
// Master reference for specialty categories and descriptions
var SPECIALTIES_REFERENCE = {
  categories: [
    {
      id: "emergency",
      label: "Emergency & Critical Care",
      specialties: [
        "Emergency Medicine & A&E (24/7)",
        "Intensive Care Medicine (ICU)",
        "Neonatal ICU (NICU)",
        "Paediatric ICU (PICU)",
        "Trauma Surgery",
        "Burns & Plastic Reconstructive Surgery"
      ]
    },
    {
      id: "cardiac",
      label: "Cardiac Sciences",
      specialties: [
        "Cardiology",
        "Cardiothoracic Surgery",
        "Interventional Cardiology",
        "Cardiac Electrophysiology",
        "Heart Failure & Transplant Program",
        "Vascular Surgery"
      ]
    },
    {
      id: "oncology",
      label: "Oncology & Cancer Care",
      specialties: [
        "Clinical Oncology",
        "Radiation Oncology & Radiotherapy",
        "Surgical Oncology",
        "Gynaecological Oncology",
        "Haematology & Bone Marrow Transplant",
        "Paediatric Oncology",
        "Nuclear Medicine & Theranostics"
      ]
    },
    {
      id: "neuro",
      label: "Neurosciences",
      specialties: [
        "Neurology",
        "Neurosurgery",
        "Interventional Neuroradiology",
        "Spine Surgery",
        "Epilepsy Program",
        "Stroke Centre"
      ]
    },
    {
      id: "gastro",
      label: "Gastroenterology & Hepatology",
      specialties: [
        "Gastroenterology & Hepatology",
        "Colorectal Surgery",
        "Hepatobiliary Surgery",
        "Liver Transplant",
        "Endoscopy & ERCP"
      ]
    },
    {
      id: "renal",
      label: "Renal & Urology",
      specialties: [
        "Nephrology",
        "Kidney Transplant",
        "Urology",
        "Uro-Oncology",
        "Dialysis (Haemodialysis & Peritoneal)"
      ]
    },
    {
      id: "ortho",
      label: "Orthopaedics & Rehabilitation",
      specialties: [
        "Orthopaedic Surgery",
        "Spine Surgery",
        "Joint Replacement Surgery",
        "Sports Medicine & Arthroscopy",
        "Hand & Microsurgery",
        "Rehabilitation Medicine (Physio/OT/Speech)"
      ]
    },
    {
      id: "maternal",
      label: "Maternal & Child Health",
      specialties: [
        "Obstetrics & Gynaecology",
        "Maternal-Fetal Medicine (High-Risk OB)",
        "Neonatology & NICU",
        "Paediatrics",
        "Paediatric Surgery",
        "Paediatric Cardiology",
        "Fertility / IVF"
      ]
    },
    {
      id: "transplant",
      label: "Transplant Medicine",
      specialties: [
        "Liver Transplant",
        "Kidney Transplant",
        "Heart Transplant",
        "Bone Marrow / Stem Cell Transplant",
        "Cornea Transplant"
      ]
    },
    {
      id: "mental",
      label: "Mental Health & Psychiatry",
      specialties: [
        "Psychiatry",
        "Child & Adolescent Psychiatry",
        "Forensic Psychiatry",
        "Addiction Medicine",
        "Psychology & Neuropsychology"
      ]
    },
    {
      id: "ent",
      label: "ENT & Head Neck",
      specialties: [
        "Otorhinolaryngology (ENT)",
        "Head & Neck Surgery",
        "Cochlear Implant Program",
        "Audiology"
      ]
    },
    {
      id: "eye",
      label: "Ophthalmology",
      specialties: [
        "Ophthalmology",
        "Cornea & Refractive Surgery",
        "Vitreoretinal Surgery",
        "Paediatric Ophthalmology"
      ]
    },
    {
      id: "radiology",
      label: "Radiology & Imaging",
      specialties: [
        "Diagnostic Radiology",
        "Interventional Radiology",
        "MRI (3T) & CT Scan",
        "PET-CT Scan",
        "Nuclear Medicine"
      ]
    },
    {
      id: "endocrine",
      label: "Endocrinology & Metabolism",
      specialties: [
        "Endocrinology",
        "Diabetes Care Centre",
        "Thyroid Surgery"
      ]
    },
    {
      id: "pulmo",
      label: "Respiratory & Thoracic",
      specialties: [
        "Respiratory Medicine / Pulmonology",
        "Thoracic Surgery",
        "Sleep Medicine"
      ]
    },
    {
      id: "derm",
      label: "Dermatology",
      specialties: [
        "Dermatology",
        "Aesthetic & Laser Dermatology"
      ]
    },
    {
      id: "rheum",
      label: "Rheumatology & Immunology",
      specialties: [
        "Rheumatology",
        "Clinical Immunology & Allergy"
      ]
    },
    {
      id: "dental",
      label: "Dental & Oral Health",
      specialties: [
        "Oral & Maxillofacial Surgery",
        "Dental Surgery / Oral Health"
      ]
    }
  ],
  tierDescriptions: {
    district: "District hospitals serve populations of 50,000–250,000. They provide basic inpatient services, emergency stabilisation, antenatal care, and outpatient specialist clinics on rotation. They do NOT typically have 24/7 specialist coverage.",
    state: "State general hospitals serve 250,000–1M+ people. They have resident specialists in core disciplines (medicine, surgery, O&G, paediatrics, orthopaedics), full A&E, ICU, and operating theatres. The main referral destination for district hospitals.",
    tertiary: "Tertiary hospitals offer comprehensive specialised services including sub-specialties, complex surgery, and dedicated specialist wards. Often serve as regional referral centres.",
    quaternary: "Quaternary hospitals are apex referral centres — the highest level of specialist care in the country for specific conditions (e.g., HKL, UMMC, IJN). They treat cases that no other hospital can handle.",
    academic: "Academic/teaching hospitals are affiliated with medical universities. They combine research, medical education, and clinical care. Often have advanced technology and clinical trial access."
  }
};
