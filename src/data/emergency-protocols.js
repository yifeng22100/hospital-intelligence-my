// data/emergency-protocols.js
export const EMERGENCY_PROTOCOLS = {

  hotlines: [
    {
      name: 'Emergency Services (Police / Fire / Ambulance)',
      number: '999',
      available: '24/7',
      note: 'Primary emergency number in Malaysia. Works on all networks including no-credit mobile. Dispatches nearest police, fire brigade, or ambulance.'
    },
    {
      name: 'Emergency (Mobile Networks — GSM)',
      number: '112',
      available: '24/7',
      note: 'International GSM emergency number. Works on all mobile networks in Malaysia, including roaming SIMs and phones without a SIM card. Redirects to 999 services.'
    },
    {
      name: 'MOH Hotline — Talian Kesihatan',
      number: '1800-88-2000',
      available: '24/7',
      note: 'Ministry of Health Malaysia hotline. For health advice, hospital referrals, complaints about government health facilities, and public health queries. Free call from landline.'
    },
    {
      name: 'Talian Kasih (Social Welfare Helpline)',
      number: '15999',
      available: '24/7',
      note: 'Managed by the Ministry of Women, Family and Community Development. For domestic violence, child abuse, elder abuse, and social crisis. Connects callers to Jabatan Kebajikan Masyarakat (JKM) services.'
    },
    {
      name: 'Befrienders Kuala Lumpur (Emotional Support / Suicide Prevention)',
      number: '03-7627 2929',
      available: '24/7',
      note: 'Confidential, non-judgmental emotional support helpline. For anyone in distress, experiencing suicidal thoughts, or supporting someone in crisis. Free call; no referral needed.'
    },
    {
      name: 'National Poison Control Centre (NPCC)',
      number: '+603-8922 3333',
      available: '24/7',
      note: 'Based at Hospital Sultanah Bahiyah, Alor Setar (national centre). Call immediately for any suspected poisoning, medication overdose, chemical exposure, or snake bite. Have the substance or packaging ready to describe.'
    },
    {
      name: 'IJN (Institut Jantung Negara) — Cardiac Emergency',
      number: '+603-2600 1500',
      available: '24/7',
      note: 'National Heart Institute emergency line. For cardiac emergencies and triage advice. Located in Kuala Lumpur. Has 24/7 catheterisation lab capability.'
    },
    {
      name: 'HUKM (Hospital Universiti Kebangsaan Malaysia) — Emergency Department',
      number: '+603-9145 5555',
      available: '24/7',
      note: 'University hospital emergency department in Cheras, KL. Tertiary referral centre with trauma, neurology, and specialist emergency capabilities.'
    },
    {
      name: 'Hospital Kuala Lumpur (HKL) — Emergency',
      number: '+603-2615 5555',
      available: '24/7',
      note: 'Largest government hospital in Malaysia. Primary trauma and specialist emergency centre for Kuala Lumpur. Handles complex trauma, burns, and stroke.'
    },
    {
      name: 'Mental Health Psychosocial Support (MERS 999 Mental Health)',
      number: '999',
      available: '24/7',
      note: 'Request a mental health team when calling 999. Government hospitals have on-call psychiatric officers. For acute psychiatric emergencies, proceed directly to the nearest A&E.'
    }
  ],

  whenToCallAmbulance: [
    'Chest pain or pressure lasting more than 5 minutes — possible heart attack; do not wait or drive yourself',
    'Signs of stroke (use FAST: Face drooping, Arm weakness, Speech difficulty, Time to call 999)',
    'Difficulty breathing or severe shortness of breath at rest',
    'Uncontrolled or severe bleeding that does not stop with direct pressure',
    'Unconsciousness or unresponsiveness — person cannot be woken',
    'Seizure lasting more than 5 minutes, or a second seizure without regaining consciousness',
    'Severe allergic reaction (anaphylaxis) — swelling of throat, tongue, difficulty breathing after food, medication, or sting',
    'Suspected head, neck, or spine injury — do NOT move the person; wait for emergency services',
    'Suspected overdose of medication, drugs, or chemicals',
    'Severe burns covering a large body area, the face, hands, feet, or genitals',
    'Trauma from road accident, fall from height, or violent assault with suspected internal injuries',
    'Child or infant with high fever and altered consciousness, stiff neck, or purple rash (possible meningitis)',
    'Sudden, severe "thunderclap" headache — worst headache of your life (possible brain bleed)',
    'Diabetic emergency with confusion, extreme weakness, or unconsciousness (hypoglycaemia or DKA)',
    'Pregnancy complications: heavy bleeding, severe abdominal pain, or signs of pre-eclampsia (severe headache, visual disturbance)'
  ],

  strokeProtocol: {
    acronym: 'FAST',
    steps: [
      {
        letter: 'F',
        word: 'Face',
        description: 'Ask the person to smile. Does one side of the face droop or look uneven? Facial weakness or numbness on one side is a key stroke warning sign.'
      },
      {
        letter: 'A',
        word: 'Arms',
        description: 'Ask the person to raise both arms. Does one arm drift downward or is one arm weak or numb? Inability to keep both arms raised equally indicates stroke.'
      },
      {
        letter: 'S',
        word: 'Speech',
        description: 'Ask the person to repeat a simple sentence. Is their speech slurred, garbled, or are they unable to speak or understand? Speech difficulty is a hallmark symptom.'
      },
      {
        letter: 'T',
        word: 'Time',
        description: 'If you observe ANY of the above signs, call 999 immediately. Note the exact time symptoms began — this is critical for treatment decisions. Do NOT wait to see if symptoms improve.'
      }
    ],
    additionalSigns: [
      'Sudden severe headache with no known cause',
      'Sudden confusion or trouble understanding others',
      'Sudden vision problems in one or both eyes',
      'Sudden dizziness, loss of balance, or trouble walking',
      'Sudden numbness or weakness on one side of the body'
    ],
    critical: 'The "golden window" for clot-busting thrombolysis (tPA) is within 4.5 hours of symptom onset. For mechanical thrombectomy (clot removal), the window is up to 24 hours in selected patients. Every minute counts — brain cells die at approximately 1.9 million per minute during a stroke. Time is brain.',
    topCentres: [
      'Hospital Kuala Lumpur (HKL) — 24/7 dedicated stroke unit with thrombolysis and thrombectomy capability',
      'Hospital Selayang — comprehensive neurology and neurosurgery, stroke pathway',
      'HUKM (Cheras) — university hospital with neurology stroke unit',
      'Hospital Pulau Pinang — northern Malaysia stroke centre',
      'SJMC (Subang Jaya Medical Centre) — private 24/7 stroke and neurology team',
      'Sunway Medical Centre — private stroke unit with interventional neurology',
      'Gleneagles Kuala Lumpur — private neurology and stroke capability',
      'Pantai Hospital KL — private neurological services'
    ]
  },

  heartAttackProtocol: {
    signs: [
      'Central chest pain, pressure, tightness, or squeezing — often described as "elephant sitting on chest"',
      'Pain radiating to the left arm, both arms, jaw, neck, or upper back',
      'Profuse cold sweating (diaphoresis)',
      'Nausea or vomiting',
      'Shortness of breath, even at rest',
      'Sudden overwhelming sense of dread or doom',
      'Light-headedness, dizziness, or fainting',
      'Unusual fatigue (especially in women — may be the only symptom)',
      'Indigestion-like discomfort that does not respond to antacids',
      'Note: Women, elderly, and diabetic patients may present with atypical symptoms — do not dismiss vague discomfort'
    ],
    doNow: [
      'Stop all activity immediately and rest in a comfortable position (usually sitting upright)',
      'Call 999 without delay — do not wait to see if symptoms improve',
      'If the person is conscious and not allergic to aspirin, chew (do not swallow whole) one 300 mg aspirin tablet — this helps reduce clot formation',
      'Loosen any tight clothing around the neck or chest',
      'If prescribed nitroglycerine (GTN spray), use it as directed by the doctor',
      'Stay calm — reassure the patient; anxiety increases oxygen demand',
      'If the person becomes unconscious and is not breathing normally, begin CPR immediately',
      'Note the time symptoms started and tell the ambulance crew on arrival'
    ],
    doNot: [
      'Do NOT drive yourself or let someone drive you — call 999 and wait for the ambulance',
      'Do NOT eat or drink anything except the aspirin',
      'Do NOT give aspirin if the person is allergic, has a bleeding disorder, or has had recent GI bleeding',
      'Do NOT leave the person alone',
      'Do NOT delay calling — do not wait to see if it "passes"',
      'Do NOT give more than one aspirin dose'
    ],
    topCentres: [
      'IJN (Institut Jantung Negara), KL — national cardiac centre; highest volume PCI in Malaysia; 24/7 catheterisation lab',
      'Hospital Sultan Idris Shah Serdang (HSIS) — highest public sector PCI volume in Selangor',
      'Hospital Kuala Lumpur (HKL) — 24/7 cardiac emergency and PCI capability',
      'Hospital Sultanah Aminah Johor Bahru — major cardiac centre for southern Malaysia',
      'Hospital Pulau Pinang — cardiac centre for northern Malaysia',
      'SJMC (Subang Jaya Medical Centre) — private 24/7 catheterisation lab',
      'Sunway Medical Centre — private interventional cardiology and cardiac surgery',
      'Gleneagles Kuala Lumpur — private cardiac and cardiac surgery services',
      'Prince Court Medical Centre KL — private cardiac ICU and interventional cardiology'
    ]
  },

  ambulanceServices: [
    {
      name: 'MOH EMRS (Emergency Medical Rescue Services)',
      number: '999',
      type: 'Government / Free',
      coverage: 'Nationwide — urban response times typically 8–15 minutes; rural areas longer',
      notes: 'Free for all Malaysians and residents. Operated by the Ministry of Health. Vehicles staffed by Emergency Medical Technicians (EMT). Available through the 999 national emergency number. Dispatch is coordinated by state ambulance control centres.'
    },
    {
      name: 'St John Ambulance Malaysia (SJAM)',
      number: '03-9285 0173',
      type: 'NGO / Volunteer',
      coverage: 'Mainly Klang Valley and major urban centres; event coverage nationwide',
      notes: 'Volunteer-based ambulance and first aid service. Provides ambulance cover for public events, sports events, and community emergencies. Some fee-based transport services available. Call ahead to check availability.'
    },
    {
      name: 'MERCY Malaysia',
      number: '03-4023 0828',
      type: 'NGO / Humanitarian',
      coverage: 'Disaster response and humanitarian emergencies nationally',
      notes: 'Primarily a disaster response and humanitarian aid organisation. Activates during floods, mass casualty events, and major disasters. Not a routine ambulance service — contact via 999 in standard emergencies.'
    },
    {
      name: 'Private Hospital Ambulances',
      number: 'Varies by hospital',
      type: 'Private / Fee-based',
      coverage: 'Hospital-specific; typically within 20–30 km radius',
      notes: 'Most major private hospitals operate their own ambulances (Pantai, Gleneagles, KPJ, Columbia Asia, Sunway, SJMC). Fees apply — typically RM 200–600 per trip. Faster response for transfer between private facilities. Call the hospital main line directly or use their app if available.'
    },
    {
      name: 'MAB Air Ambulance (Malaysia Airlines / MFRS-linked)',
      number: '+603-2161 0403',
      type: 'Private / Air Medical',
      coverage: 'Domestic and regional (Malaysia, Singapore, Brunei, Indonesia)',
      notes: 'Air ambulance services for critical inter-hospital transfers, remote or island evacuations (Sabah, Sarawak, East Malaysia), and repatriation. Requires advance coordination. Expensive — ensure insurance coverage includes air ambulance before travelling.'
    },
    {
      name: 'Private Air Ambulance Services (e.g., AirAsia Flying Doctor, Aeromed)',
      number: 'Varies by provider',
      type: 'Private / Commercial Air Medical',
      coverage: 'Malaysia, Singapore, and regional',
      notes: 'Multiple private operators provide medical air transport. Check that your travel or health insurance includes air ambulance cover. Costs can exceed RM 20,000 for domestic flights and RM 50,000+ for regional repatriation.'
    }
  ],

  aeVsClinic: {
    goToAE: [
      'Chest pain, pressure, or tightness — especially with sweating, breathlessness, or arm/jaw pain',
      'Suspected stroke (FAST signs: face drooping, arm weakness, speech difficulty)',
      'Severe difficulty breathing or respiratory distress',
      'Unconsciousness, unresponsiveness, or altered mental state',
      'Seizures — especially first seizure, prolonged seizure (>5 min), or post-seizure confusion',
      'Major trauma: road accident, fall from height, suspected fractures, head injuries',
      'Uncontrolled bleeding despite sustained direct pressure',
      'Severe allergic reaction — throat swelling, difficulty breathing, widespread hives with hypotension',
      'High fever with stiff neck, severe headache, or purple-red rash in anyone (possible meningitis)',
      'Child under 3 months with fever above 38°C',
      'Suspected overdose or poisoning',
      'Severe burns (>10% body surface area, facial, airway, or electrical)',
      'Psychiatric emergency: active suicidal intent or acute psychotic behaviour with risk to self or others',
      'Sudden vision loss in one or both eyes',
      'Signs of diabetic ketoacidosis (DKA): vomiting, fruity breath, extreme weakness, confusion'
    ],
    goToClinic: [
      'Common cold, cough, sore throat without severe breathing difficulty',
      'Mild to moderate fever without rash, stiff neck, or confusion',
      'Urinary tract infection (UTI) — pain, burning on urination, without fever/back pain',
      'Minor cuts, abrasions, or lacerations (clean, not deep, not arterial)',
      'Ear pain or ear infection without severe symptoms',
      'Mild skin rashes without systemic symptoms',
      'Stable chronic condition reviews: diabetes, hypertension, asthma',
      'Prescription refills for ongoing stable conditions',
      'Mild muscle or joint pain without significant trauma',
      'Mild gastroenteritis (diarrhoea/vomiting) without severe dehydration',
      'Pink eye (conjunctivitis) without vision changes',
      'Routine vaccinations, health screenings, and check-ups'
    ],
    note: 'At government hospitals (MOH), A&E attendance for Malaysian citizens costs RM 5 (adult) or RM 1 (child under 12) per visit. At private hospitals, A&E attendance fees typically range from RM 80–200 just for consultation, with additional charges for every investigation, treatment, and procedure. Insurance Letter of Guarantee (LOG) may not be issued for non-emergency A&E visits at private hospitals — always call your insurer first if time permits.'
  },

  aedLocations: {
    description: 'Automated External Defibrillators (AED) are increasingly available in public locations across Malaysia as part of the MOH "HeartSafe Malaysia" initiative and corporate health programmes. AEDs are safe to use by untrained laypersons — the device provides audio and visual instructions at every step. Using an AED does NOT cause harm if used on someone who does not need it.',
    commonLocations: [
      'Major airports: KLIA, KLIA2, Penang International, Kota Kinabalu International',
      'LRT, MRT, and KTM stations (Klang Valley Integrated Transit)',
      'Large shopping malls: Pavilion KL, Mid Valley, The Gardens, IOI City Mall, Sunway Pyramid, 1 Utama, Suria KLCC',
      'Major hotels (4-star and above)',
      'Government offices and federal buildings',
      'Large corporate offices and business parks (MSC-status companies)',
      'Sports and recreation facilities: stadiums, large gyms (Celebrity Fitness, True Fitness)',
      'Universities and tertiary education institutions',
      'Major train and bus terminals (TBS, Pudu Sentral)',
      'Community halls (Dewan Orang Ramai) in larger townships',
      'All government hospitals and clinics (Klinik Kesihatan)',
      'Some petrol station forecourts (Shell, Petronas along highways)'
    ],
    howToUse: [
      'Call 999 first — AED is used alongside CPR, not instead of calling for help',
      'Turn the AED on — press the power button or lift the lid; the device will speak to you',
      'Attach the electrode pads to the patient\'s bare chest as shown in the diagram on the pads (one pad upper right chest, one pad lower left side)',
      'Ensure no one is touching the patient and press "Analyse" — the AED will assess the heart rhythm',
      'If a shock is advised, ensure everyone stands clear, then press the orange "Shock" button',
      'Immediately resume CPR (30 chest compressions : 2 rescue breaths) for 2 minutes, then let the AED re-analyse',
      'Continue until emergency services arrive, the patient regains consciousness, or you are physically unable to continue',
      'If no shock is advised, continue CPR and let the AED monitor — it will advise if the rhythm changes'
    ]
  }

}
