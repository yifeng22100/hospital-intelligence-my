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
  },

  emergencyScenarios: [
    {
      id: 'heart-attack',
      icon: '❤️',
      label: 'Heart Attack',
      category: 'Cardiac',
      color: '#dc2626',
      callAmbulance: true,
      recognize: [
        'Central chest pain, pressure, tightness, or squeezing — often "elephant sitting on chest"',
        'Pain radiating to left arm, jaw, neck, or upper back',
        'Profuse cold sweating, nausea, or vomiting',
        'Shortness of breath even at rest',
        'Women / elderly / diabetic may only feel unusual fatigue or vague discomfort'
      ],
      doNow: [
        'Call 999 immediately — do NOT drive yourself',
        'Rest sitting upright; loosen tight clothing',
        'Chew (don\'t swallow whole) one 300 mg aspirin — only if conscious and not allergic',
        'If prescribed GTN spray, use it as directed',
        'If unconscious and not breathing, start CPR (30 compressions : 2 breaths)'
      ],
      doNot: [
        'Do NOT eat or drink anything except the aspirin',
        'Do NOT wait to see if symptoms pass — every minute counts',
        'Do NOT give aspirin if allergic, bleeding disorder, or recent GI bleeding'
      ],
      note: 'Golden window: PCI (angioplasty) within 90 minutes of symptom onset gives the best outcome. IJN (Institut Jantung Negara) and Hospital Serdang (Selangor) have 24/7 catheterisation lab capability.'
    },
    {
      id: 'stroke',
      icon: '🧠',
      label: 'Stroke',
      category: 'Neurological',
      color: '#7c3aed',
      callAmbulance: true,
      recognize: [
        'Use FAST: Face drooping (uneven smile), Arm weakness (one drifts down), Speech difficulty (slurred or garbled), Time to call 999',
        'Sudden severe headache — worst headache of life',
        'Sudden vision loss or double vision',
        'Sudden dizziness, loss of balance, or inability to walk',
        'Sudden numbness or weakness on one side of body'
      ],
      doNow: [
        'Call 999 immediately and note the exact time symptoms began',
        'Keep the person calm; have them lie down with head slightly elevated',
        'Do NOT give anything to eat or drink — stroke can impair swallowing',
        'Stay with the person until ambulance arrives; monitor breathing'
      ],
      doNot: [
        'Do NOT wait to see if it "passes" — time is brain (1.9 million brain cells die per minute)',
        'Do NOT give aspirin — unlike heart attack, aspirin can worsen a haemorrhagic stroke',
        'Do NOT let the person fall asleep or "sleep it off"'
      ],
      note: 'Clot-busting thrombolysis (tPA) must be given within 4.5 hours of symptom onset. Mechanical thrombectomy up to 24 hours in selected patients. Top centres: HKL, Hospital Selayang, HUKM, SJMC, Sunway Medical.'
    },
    {
      id: 'choking',
      icon: '🫁',
      label: 'Choking',
      category: 'Airway',
      color: '#ea580c',
      callAmbulance: false,
      recognize: [
        'Cannot speak, cry, or make a normal sound',
        'Clutching the throat (universal choking sign)',
        'High-pitched wheezing or no air movement',
        'Skin turning blue (cyanosis) — around lips or fingernails',
        'Loss of consciousness if obstruction is complete'
      ],
      doNow: [
        'Adult / child over 1 year: Stand behind, give 5 firm back blows between shoulder blades with heel of hand',
        'Then: Give 5 abdominal thrusts (Heimlich) — hands just above navel, firm upward thrust',
        'Alternate 5 back blows and 5 abdominal thrusts until object dislodges or person loses consciousness',
        'Infant under 1 year: Face-down 5 back blows on forearm + face-up 5 chest thrusts (NOT abdominal)',
        'If unconscious: start CPR — chest compressions may dislodge the object; check mouth before rescue breaths',
        'Call 999 if not resolved quickly or person loses consciousness'
      ],
      doNot: [
        'Do NOT perform blind finger sweeps in the mouth — you may push the object deeper',
        'Do NOT use abdominal thrusts on infants under 1 year — use chest thrusts instead',
        'Do NOT slap the back while upright on an adult — lean them forward first'
      ],
      note: 'Partial choking (can cough, speak, or breathe): encourage them to keep coughing vigorously. Intervene only if choking becomes complete (no air, no speech, no cough).'
    },
    {
      id: 'burns',
      icon: '🔥',
      label: 'Burns',
      category: 'Trauma',
      color: '#b45309',
      callAmbulance: false,
      recognize: [
        'Minor burn: red, painful skin without blisters — less than 5 cm wide',
        'Moderate burn: blistered, wet, very painful skin',
        'Severe burn: white, brown, or charred skin; may be painless (nerve damage)',
        'Call 999 for: burns >10% body area, face/hands/feet/genitals/joints, electrical burns, chemical burns, inhalation of smoke'
      ],
      doNow: [
        'Cool the burn immediately: run cool (not cold or icy) water over it for 20 minutes',
        'Remove jewellery, watches, or tight clothing near the burn — swelling will occur',
        'Cover loosely with cling film or a clean non-fluffy cloth; do not wrap tightly',
        'For chemical burns: brush off dry chemicals first, then flush with water for 20+ minutes; call 999',
        'For electrical burns: do NOT touch the person until power is off; treat for cardiac arrest if needed',
        'For fire/smoke inhalation: evacuate immediately; call 999; treat airway injury as priority'
      ],
      doNot: [
        'Do NOT apply toothpaste, butter, ice, or traditional remedies — these cause infection and worsen damage',
        'Do NOT burst blisters — they protect against infection',
        'Do NOT remove clothing stuck to the burn — cut around it',
        'Do NOT use fluffy cotton wool or adhesive plasters directly on the burn'
      ],
      note: 'Cool water is the single most effective immediate treatment. Burns specialist centres: HKL (Burns Unit), Hospital Sultanah Aminah JB, Hospital Pulau Pinang. Private: SJMC, Sunway Medical.'
    },
    {
      id: 'drowning',
      icon: '🌊',
      label: 'Drowning / Near-Drowning',
      category: 'Trauma',
      color: '#0369a1',
      callAmbulance: true,
      recognize: [
        'Person pulled from water is unresponsive or barely conscious',
        'Not breathing or breathing irregularly after rescue',
        'Coughing, vomiting, or confusion after near-drowning — still needs emergency care',
        'Note: secondary drowning can occur hours later even after apparent recovery — watch closely'
      ],
      doNow: [
        'Get the person out of water safely; do NOT put yourself at risk',
        'Call 999 immediately',
        'Check for breathing; if absent, start CPR immediately (30 compressions : 2 rescue breaths)',
        'For a suspected spinal injury (diving/fall), support the neck and keep horizontal during rescue',
        'All near-drowning victims must go to A&E even if they seem to recover — secondary drowning is real',
        'Keep the person warm; remove wet clothing and cover with a blanket'
      ],
      doNot: [
        'Do NOT attempt to drain water from lungs — it is not possible and wastes time; start CPR',
        'Do NOT leave the person alone even if they seem fine',
        'Do NOT perform abdominal thrusts on drowning victims'
      ],
      note: 'Secondary drowning: fluid in lungs can cause breathing failure 1–24 hours after a near-drowning incident. Any person who was submerged and coughed or vomited water must be evaluated at A&E, even if they feel well.'
    },
    {
      id: 'snake-bite',
      icon: '🐍',
      label: 'Snake Bite',
      category: 'Envenomation',
      color: '#065f46',
      callAmbulance: true,
      recognize: [
        'One or two puncture marks at bite site (may not be visible)',
        'Rapid swelling, bruising, or tissue discolouration spreading from bite',
        'Nausea, vomiting, dizziness, or faintness',
        'Drooping eyelids, double vision, slurred speech, difficulty swallowing (neurotoxic signs)',
        'Bleeding from bite site or elsewhere (coagulopathic signs)'
      ],
      doNow: [
        'Keep the person calm and still — immobilise the bitten limb below heart level',
        'Remove rings, watches, or tight clothing from the bitten limb before swelling begins',
        'Call 999 or get to the nearest A&E immediately',
        'Try to safely photograph or remember the snake appearance — do NOT attempt to catch it',
        'Apply a pressure-immobilisation bandage for neurotoxic snakes (elapids like king cobra, banded krait) — firm bandage starting at bite, wrapping up the whole limb; splint the limb',
        'Do NOT apply pressure bandage for cytotoxic/haemotoxic snakes (pit vipers, most in Malaysia) — it increases local tissue damage'
      ],
      doNot: [
        'Do NOT cut and suck the wound — this causes infection and does not remove venom',
        'Do NOT apply a tourniquet — this causes tissue death',
        'Do NOT apply ice to the bite site',
        'Do NOT give alcohol or traditional medicines',
        'Do NOT let the person walk if avoidable'
      ],
      note: 'Most common venomous snakes in Malaysia: Malayan pit viper (habu), king cobra, Malayan krait, banded krait. Antivenom is available at major government hospitals. National Poison Control Centre: +603-8922 3333.'
    },
    {
      id: 'anaphylaxis',
      icon: '⚠️',
      label: 'Severe Allergic Reaction (Anaphylaxis)',
      category: 'Allergy',
      color: '#b91c1c',
      callAmbulance: true,
      recognize: [
        'Throat or tongue swelling causing voice change or difficulty swallowing',
        'Difficulty breathing, wheezing, or stridor',
        'Hives or widespread red rash appearing rapidly across the body',
        'Sudden drop in blood pressure: dizziness, fainting, or collapse',
        'Rapid heartbeat combined with the above symptoms',
        'Occurs typically within minutes of exposure to trigger (food, medication, insect sting)'
      ],
      doNow: [
        'Call 999 immediately',
        'If person carries an EpiPen (adrenaline auto-injector): use it immediately on the outer thigh; hold for 10 seconds',
        'Lay person flat; if breathing difficulty, allow them to sit upright; if faint, lay with legs raised',
        'A second EpiPen dose can be given after 5–15 minutes if no improvement and 999 has not arrived',
        'Even after EpiPen use, all anaphylaxis cases must go to A&E — biphasic reaction can occur hours later'
      ],
      doNot: [
        'Do NOT make the person stand or walk — low blood pressure from anaphylaxis causes fainting and injury',
        'Do NOT give antihistamines alone — they do NOT reverse airway swelling or circulatory shock',
        'Do NOT delay EpiPen if available — early adrenaline saves lives'
      ],
      note: 'Common triggers in Malaysia: shellfish (prawns, crabs, clams), peanuts, bee/wasp stings, penicillin and NSAIDs, latex. If diagnosed with any severe allergy, carry an EpiPen and wear a medical alert bracelet.'
    },
    {
      id: 'hypoglycaemia',
      icon: '🍬',
      label: 'Diabetic Emergency — Low Blood Sugar (Hypoglycaemia)',
      category: 'Medical',
      color: '#0891b2',
      callAmbulance: false,
      recognize: [
        'Shaking, trembling, or weakness',
        'Heavy sweating even in cool environment',
        'Confusion, difficulty speaking, or unusual behaviour',
        'Pale skin, rapid heartbeat, feeling of extreme hunger',
        'Dizziness or blurred vision',
        'Seizures or unconsciousness in severe cases'
      ],
      doNow: [
        'If conscious and can swallow: give 15–20 g of fast-acting sugar immediately — 4 glucose tablets, 150 ml fruit juice, 4–5 teaspoons of sugar dissolved in water, or 3–4 boiled sweets',
        'Wait 15 minutes; recheck — if no improvement, repeat the sugar dose',
        'Once improved, give a longer-acting carbohydrate (biscuits, bread) to prevent recurrence',
        'If unconscious or cannot swallow: call 999; do NOT give anything by mouth (risk of choking)',
        'Place unconscious person in recovery position; monitor breathing'
      ],
      doNot: [
        'Do NOT give food or drink to an unconscious person',
        'Do NOT inject insulin — they need sugar, not more insulin',
        'Do NOT leave the person alone after recovery — monitor for 1–2 hours'
      ],
      note: 'Blood glucose below 4.0 mmol/L is hypoglycaemia in a known diabetic. The 15-15 rule: 15 g of fast-acting carbohydrate, wait 15 minutes. Most diabetics on insulin or sulphonylureas are at risk. Glucagon injection kits are available by prescription for high-risk diabetics.'
    },
    {
      id: 'febrile-seizure',
      icon: '🌡️',
      label: 'Febrile Seizure (Child)',
      category: 'Child',
      color: '#7c3aed',
      callAmbulance: false,
      recognize: [
        'Child aged 6 months – 6 years with high fever suddenly shaking or convulsing',
        'Eyes rolling, body stiffening or jerking rhythmically',
        'Child is unresponsive during the episode',
        'Episode typically lasts 30 seconds to 2 minutes; usually stops on its own',
        'Child is sleepy, confused, or difficult to wake after the seizure ends'
      ],
      doNow: [
        'Stay calm — febrile seizures are frightening but usually not dangerous',
        'Place the child on their side (recovery position) on a soft surface; clear the area of hazards',
        'Time the seizure — note when it starts',
        'Do NOT hold the child down or restrain the shaking',
        'After the seizure stops: keep child on their side; comfort them; check breathing',
        'Call 999 or go to A&E if: seizure lasts more than 5 minutes, child does not wake up normally after, child has two seizures within 24 hours, or child is under 6 months or over 6 years'
      ],
      doNot: [
        'Do NOT put anything in the child\'s mouth during a seizure — they cannot swallow their tongue',
        'Do NOT put the child in a cold bath to reduce fever during a seizure',
        'Do NOT give fever medication during the seizure — wait until it stops and the child can swallow safely'
      ],
      note: '1 in 25 children will have a febrile seizure. Most are harmless and do not indicate epilepsy. After the seizure, take the child to A&E to identify the cause of the fever and rule out meningitis or other serious infection.'
    },
    {
      id: 'poisoning',
      icon: '☠️',
      label: 'Poisoning / Toxic Ingestion',
      category: 'Medical',
      color: '#4f46e5',
      callAmbulance: true,
      recognize: [
        'Sudden vomiting, seizures, or loss of consciousness after possible exposure',
        'Chemical or unusual smell on breath or clothing',
        'Burns or staining around the mouth (from corrosive substance)',
        'Empty container, tablets, or chemicals nearby',
        'Confusion, breathing difficulty, or irregular heartbeat after suspected ingestion'
      ],
      doNow: [
        'Call National Poison Control Centre immediately: +603-8922 3333',
        'If person is unconscious or not breathing: call 999 and start CPR if needed',
        'Have the substance, container, or packaging ready to describe to the operator',
        'For skin or eye exposure: remove contaminated clothing (protect yourself with gloves); flush with large amounts of water for 15–20 minutes',
        'For inhalation: move person to fresh air immediately; call 999'
      ],
      doNot: [
        'Do NOT induce vomiting unless specifically instructed by Poison Control — corrosives and petroleum products cause more damage coming back up',
        'Do NOT give milk, water, or home remedies without advice from Poison Control',
        'Do NOT leave the person alone'
      ],
      note: 'Keep all medications, cleaning products, and pesticides locked and out of reach of children. Common poisoning cases in Malaysia: paracetamol overdose, organophosphate (pesticide), rat poison (brodifacoum), and traditional herbal remedies. Poison Control Centre: +603-8922 3333 (24/7).'
    },
    {
      id: 'road-accident',
      icon: '🚗',
      label: 'Road Accident / Major Trauma',
      category: 'Trauma',
      color: '#92400e',
      callAmbulance: true,
      recognize: [
        'Person involved in significant collision, fall from height, or violent impact',
        'Visible serious injury: heavy bleeding, obvious fractures, crush injuries',
        'Person is unconscious, confused, or unable to move',
        'Bystander — vehicle accident at the scene'
      ],
      doNow: [
        'Call 999 immediately and clearly state your location (road name, KM marker, nearby landmark)',
        'Ensure scene safety — turn on hazard lights, set up warning triangle, do NOT stand on the road',
        'If person is conscious and breathing: do NOT move them — spinal injury is possible in high-impact trauma',
        'Control heavy bleeding: apply firm direct pressure with a clean cloth; do NOT remove the cloth if soaked — add more on top',
        'If unconscious and not breathing: gently open airway and begin CPR; the risk of inaction outweighs spinal precautions',
        'Keep the casualty warm; prevent shock: lay flat, elevate legs if no spinal injury suspected'
      ],
      doNot: [
        'Do NOT move the person unnecessarily unless there is immediate danger (fire, oncoming traffic)',
        'Do NOT remove a helmet from a motorcycle rider unless airway is blocked',
        'Do NOT remove objects impaled in the body — stabilise them in place',
        'Do NOT give food, drink, or medication'
      ],
      note: 'JALAN SELAMAT: All major highways in Malaysia have PLUS emergency telephones every 2 km. You can also call 1-800-88-0000 (PLUS Expressways) for highway emergencies. Trauma centres: HKL, Hospital Kuala Lumpur, Hospital Raja Perempuan Zainab II (Kelantan), Hospital Sungai Buloh.'
    }
  ]

}
