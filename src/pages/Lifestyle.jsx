import { useState } from 'react'
import { Link } from 'react-router-dom'

const TOPICS = [
  { id: 'eat',      icon: '🥗', label: 'Healthy Eating',          desc: 'Malaysian diet guide — eat well without giving up your favourites' },
  { id: 'move',     icon: '🏃', label: 'Exercise & Activity',      desc: 'How much movement you actually need and how to get started' },
  { id: 'sleep',    icon: '😴', label: 'Sleep Health',             desc: 'Why sleep is medicine — and what disrupts it in Malaysian life' },
  { id: 'chronic',  icon: '🩺', label: 'Chronic Disease Prevention', desc: 'Diabetes, hypertension, and obesity — stop them before they start' },
  { id: 'dengue',   icon: '🦟', label: 'Dengue Prevention',        desc: 'Practical steps to reduce dengue risk at home and at work' },
  { id: 'smoke',    icon: '🚭', label: 'Quit Smoking & Vaping',    desc: 'Why vaping is not safe — and how to quit effectively' },
  { id: 'stress',   icon: '🧘', label: 'Stress & Mental Wellness', desc: 'Managing stress in Malaysian working and family life' },
  { id: 'weight',   icon: '⚖️', label: 'Weight Management',        desc: 'Sustainable weight management without crash diets' },
]

export default function Lifestyle() {
  const [active, setActive] = useState('eat')
  const topic = TOPICS.find(t => t.id === active)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-surface-secondary border-b border-ink-quaternary pt-10 pb-8 px-5">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-brand text-[12px] font-semibold uppercase tracking-[0.12em] mb-1">Healthy Living</p>
          <h1 className="text-[28px] font-bold text-ink tracking-tight">Lifestyle Hub</h1>
          <p className="text-ink-secondary text-[14px] mt-2 max-w-[560px]">
            Practical, evidence-based healthy living guidance in the Malaysian context — from what to eat at a hawker centre to managing stress at work.
          </p>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-5 py-8">
        <div className="flex gap-8 flex-col lg:flex-row">

          {/* Sidebar */}
          <aside className="lg:w-[230px] flex-shrink-0">
            <div className="lg:sticky lg:top-20 space-y-1">
              {TOPICS.map(t => (
                <button key={t.id} onClick={() => setActive(t.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors ${
                    active === t.id
                      ? 'bg-brand text-white'
                      : 'text-ink-secondary hover:bg-surface-secondary hover:text-ink'
                  }`}>
                  <span className="text-[16px] mr-2">{t.icon}</span>
                  <span className="text-[13px] font-semibold">{t.label}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <div className="mb-6">
              <h2 className="text-[22px] font-bold text-ink mb-1">{topic.icon} {topic.label}</h2>
              <p className="text-ink-secondary text-[14px]">{topic.desc}</p>
            </div>

            {active === 'eat'    && <EatSection />}
            {active === 'move'   && <MoveSection />}
            {active === 'sleep'  && <SleepSection />}
            {active === 'chronic'&& <ChronicSection />}
            {active === 'dengue' && <DengueSection />}
            {active === 'smoke'  && <SmokeSection />}
            {active === 'stress' && <StressSection />}
            {active === 'weight' && <WeightSection />}
          </main>
        </div>
      </div>
    </div>
  )
}

/* ─── Healthy Eating ──────────────────────────────────────────────── */

function EatSection() {
  const PYRAMID = [
    { level: 'Eat Most', color: '#16a34a', items: ['Rice, noodles, bread, oats (whole grain preferred)', 'Brown rice over white rice — more fibre, lower GI', '6–8 servings/day; reduce portion size at each meal'], icon: '🍚' },
    { level: 'Eat More', color: '#0891b2', items: ['Vegetables: aim for 3+ servings/day — ulam, sayur, blanched greens', 'Fruits: 2–3 servings/day — papaya, guava, banana, watermelon', 'Choose variety — different colours = different nutrients'], icon: '🥦' },
    { level: 'Eat Moderately', color: '#d97706', items: ['Fish, chicken, tofu, eggs, legumes (beans, lentils)', 'Lean meats 3–4x/week; fish at least 2x/week (omega-3)', 'Dairy: 2 servings/day — low-fat milk, yoghurt, cheese'], icon: '🐟' },
    { level: 'Eat Less', color: '#dc2626', items: ['Sugar: limit teh tarik to 1 cup/day; avoid sugar-added drinks', 'Salt: Malaysian cuisine is high in sodium — request less salt at hawkers', 'Saturated fats: limit coconut milk dishes, deep-fried foods'], icon: '🧂' },
  ]

  const HAWKER_SWAPS = [
    { original: 'Nasi Lemak (full set)', swap: 'Nasi Lemak with steamed fish, skip half the rice', saving: 'Save ~300 kcal' },
    { original: 'Teh Tarik (full sugar)', swap: 'Teh O (plain tea) or Teh Kurang Manis', saving: 'Save ~60–100 kcal' },
    { original: 'Char Kway Teow', swap: 'Koay Teow Soup / Kuih Teow Soup', saving: 'Save ~250 kcal, much less oil' },
    { original: 'Roti Canai with curry', swap: 'Roti Canai plain (kurang lemak) + dhal', saving: 'Save ~150 kcal' },
    { original: 'Milo Ice (sweetened)', swap: 'Milo O (no sugar, hot)', saving: 'Save ~150 kcal' },
    { original: 'Nasi Ayam Penyet (fried)', swap: 'Nasi Ayam Bakar (grilled)', saving: 'Save ~200 kcal, less saturated fat' },
    { original: 'Maggi Goreng', swap: 'Mee Sup / Tom Yam Soup', saving: 'Save ~200 kcal, much less sodium' },
  ]

  return (
    <div className="space-y-8">

      {/* Malaysian Food Pyramid */}
      <div>
        <h3 className="text-[17px] font-bold text-ink mb-4">Malaysian Healthy Plate (MOH Guidelines)</h3>
        <div className="space-y-3">
          {PYRAMID.map((p, i) => (
            <div key={i} className="rounded-xl p-4 border" style={{ borderLeft: `4px solid ${p.color}`, background: `${p.color}08` }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[18px]">{p.icon}</span>
                <span className="text-[13px] font-bold" style={{ color: p.color }}>{p.level}</span>
              </div>
              <ul className="space-y-1">
                {p.items.map((item, j) => (
                  <li key={j} className="text-ink-secondary text-[13px] flex items-start gap-2">
                    <span className="flex-shrink-0 mt-0.5" style={{ color: p.color }}>•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Hawker Swaps */}
      <div>
        <h3 className="text-[17px] font-bold text-ink mb-2">🍜 Hawker-Friendly Swaps</h3>
        <p className="text-ink-secondary text-[13px] mb-4">You don't have to stop eating Malaysian food — just make smarter choices at the hawker stall.</p>
        <div className="space-y-2">
          {HAWKER_SWAPS.map((s, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-3 grid grid-cols-[1fr_auto_1fr_auto] items-center gap-2 flex-wrap">
              <div>
                <p className="text-[11px] text-ink-tertiary uppercase tracking-wide mb-0.5">Instead of</p>
                <p className="text-ink text-[13px] font-medium">{s.original}</p>
              </div>
              <span className="text-ink-tertiary text-[18px]">→</span>
              <div>
                <p className="text-[11px] text-ink-tertiary uppercase tracking-wide mb-0.5">Try</p>
                <p className="text-brand text-[13px] font-semibold">{s.swap}</p>
              </div>
              <span className="text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold whitespace-nowrap">{s.saving}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hidden dangers */}
      <div>
        <h3 className="text-[17px] font-bold text-ink mb-3">⚠️ Hidden Health Risks in Malaysian Diet</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: 'Sugar in drinks', detail: 'A regular teh tarik has 5–7 teaspoons of sugar. Drinking 3 cups/day = 15–21 teaspoons of sugar. WHO recommends max 6 tsp/day. Switch to "kurang manis" or "kosong".' },
            { title: 'Hidden sodium', detail: 'Fried noodle dishes, soups, and sambal are extremely high in sodium. Malaysians average 3,500–5,000mg sodium/day vs. the recommended 2,000mg limit. Ask for less salt/belacan.' },
            { title: 'Cooking oils', detail: 'Palm oil (high in saturated fat) is widely used. Excessive consumption contributes to raised LDL cholesterol. Use less oil when cooking at home; opt for canola or olive oil.' },
            { title: 'White rice portions', detail: 'A typical nasi kandar plate contains 2–3 cups of rice (~400–600 kcal before lauk). Replace half your rice with vegetables. Try switching to brown rice for extra fibre.' },
          ].map((h, i) => (
            <div key={i} className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="font-bold text-amber-900 text-[13px] mb-1">⚠ {h.title}</p>
              <p className="text-amber-800 text-[12px] leading-relaxed">{h.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px] text-ink-secondary">
        <strong className="text-ink">💡 MOH MyPlate:</strong> Malaysia's official healthy eating guide recommends: ¼ plate carbs (whole grain preferred), ¼ plate protein, ½ plate vegetables and fruits, plus 8 glasses of plain water daily. Download the MyPlate guide at nutrition.moh.gov.my.
      </div>
    </div>
  )
}

/* ─── Exercise ────────────────────────────────────────────────────── */

function MoveSection() {
  const GUIDELINES = [
    { group: 'Adults (18–64)', rec: '150–300 min moderate / 75–150 min vigorous per week', plus: '+ 2x strength training/week', icon: '🧑', color: '#0891b2' },
    { group: 'Children & Adolescents (5–17)', rec: '60 min moderate-to-vigorous activity daily', plus: 'Include bone-strengthening (running, jumping) 3x/week', icon: '🧒', color: '#16a34a' },
    { group: 'Older Adults (65+)', rec: '150 min moderate activity/week + balance exercises', plus: 'Tai chi, yoga, water aerobics — reduces fall risk', icon: '👴', color: '#7c3aed' },
    { group: 'Pregnant Women', rec: '150 min moderate activity/week (if no complications)', plus: 'Swimming, walking, prenatal yoga — avoid contact sports', icon: '🤰', color: '#d97706' },
  ]

  const ACTIVITIES = [
    { name: 'Brisk Walking', intensity: 'Moderate', cal: '~250 kcal/hr', tip: 'Free, no equipment. Target 10,000 steps/day. A 30-min walk at lunch is enough.' },
    { name: 'Swimming', intensity: 'Moderate–Vigorous', cal: '~400–600 kcal/hr', tip: 'Easy on joints — ideal for overweight individuals or those with knee/back problems.' },
    { name: 'Badminton', intensity: 'Moderate–Vigorous', cal: '~350–500 kcal/hr', tip: "Malaysia's national sport — most condos have courts. Even recreational games count." },
    { name: 'Cycling', intensity: 'Moderate', cal: '~300–500 kcal/hr', tip: 'Suitable for all ages. Commuting by bicycle 3x/week easily fulfils weekly quota.' },
    { name: 'Gym / Weight Training', intensity: 'Varies', cal: '~200–400 kcal/hr', tip: 'Builds muscle, improves bone density, raises basal metabolic rate long-term.' },
    { name: 'Yoga / Pilates', intensity: 'Light–Moderate', cal: '~150–250 kcal/hr', tip: 'Excellent for stress reduction, flexibility, and core strength. Good for desk workers.' },
    { name: 'Futsal', intensity: 'Vigorous', cal: '~500–700 kcal/hr', tip: 'Very popular in Malaysia. Combines cardio and social activity.' },
    { name: 'Hiking (FRIM, Gasing, Broga)', intensity: 'Moderate–Vigorous', cal: '~400–600 kcal/hr', tip: 'Klang Valley has excellent urban trails. FRIM, Bukit Gasing, Bukit Tabur — free entry.' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-[17px] font-bold text-ink mb-4">WHO / MOH Physical Activity Recommendations</h3>
        <div className="space-y-3">
          {GUIDELINES.map((g, i) => (
            <div key={i} className="rounded-xl p-4 border" style={{ borderLeft: `4px solid ${g.color}`, background: `${g.color}08` }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[18px]">{g.icon}</span>
                <span className="font-bold text-[14px] text-ink">{g.group}</span>
              </div>
              <p className="text-[13px] font-semibold text-ink mb-1">{g.rec}</p>
              <p className="text-[12px] text-ink-secondary">{g.plus}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[17px] font-bold text-ink mb-3">Popular Activities in Malaysia</h3>
        <div className="space-y-2">
          {ACTIVITIES.map((a, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-3">
              <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                <p className="font-bold text-ink text-[13px]">{a.name}</p>
                <div className="flex gap-2">
                  <span className="text-[11px] bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-full">{a.intensity}</span>
                  <span className="text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">{a.cal}</span>
                </div>
              </div>
              <p className="text-ink-secondary text-[12px]">{a.tip}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
        <p className="font-bold text-amber-900 text-[14px] mb-2">🌡️ Exercising in Malaysian Heat</p>
        <ul className="space-y-1">
          {[
            'Exercise before 9am or after 5pm to avoid peak heat (32–35°C midday).',
            'Drink 500ml water before exercise; 150–250ml every 15–20 minutes during.',
            'Wear light-coloured, breathable clothing. UV protection is important.',
            'Heat exhaustion signs: heavy sweating, weakness, cold pale skin, weak pulse. Move to shade, drink water.',
            'Heatstroke (no sweating + confusion) is a medical emergency — call 999.',
          ].map((tip, i) => (
            <li key={i} className="text-amber-800 text-[12px] flex items-start gap-2">
              <span className="flex-shrink-0">•</span>{tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ─── Sleep ───────────────────────────────────────────────────────── */

function SleepSection() {
  const NEEDS = [
    { age: 'Newborns (0–3 months)', hrs: '14–17 hrs', note: 'Includes naps; irregular schedule' },
    { age: 'Infants (4–12 months)', hrs: '12–16 hrs', note: 'Includes naps' },
    { age: 'Toddlers (1–2 years)', hrs: '11–14 hrs', note: 'Includes naps' },
    { age: 'Pre-school (3–5 years)', hrs: '10–13 hrs', note: 'Includes naps' },
    { age: 'School age (6–12 years)', hrs: '9–12 hrs', note: 'Consistent bedtime critical' },
    { age: 'Teens (13–18 years)', hrs: '8–10 hrs', note: 'Most Malaysian teens are sleep-deprived' },
    { age: 'Adults (18–64 years)', hrs: '7–9 hrs', note: 'Consistent schedule most important' },
    { age: 'Older Adults (65+)', hrs: '7–8 hrs', note: 'May wake earlier; napping is fine' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-[17px] font-bold text-ink mb-4">How Much Sleep Do You Need?</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px] border-collapse">
            <thead>
              <tr className="bg-surface-secondary">
                <th className="text-left px-4 py-2.5 font-semibold text-ink rounded-tl-xl">Age Group</th>
                <th className="text-left px-4 py-2.5 font-semibold text-ink">Recommended Hours</th>
                <th className="text-left px-4 py-2.5 font-semibold text-ink rounded-tr-xl">Notes</th>
              </tr>
            </thead>
            <tbody>
              {NEEDS.map((n, i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-surface-secondary/50'}>
                  <td className="px-4 py-2.5 text-ink">{n.age}</td>
                  <td className="px-4 py-2.5 font-bold text-brand">{n.hrs}</td>
                  <td className="px-4 py-2.5 text-ink-secondary">{n.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-[17px] font-bold text-ink mb-3">Why Malaysians Sleep Poorly</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: 'Late-night screen time', detail: 'Blue light from phones and tablets suppresses melatonin. Scrolling social media until midnight is the leading cause of sleep deprivation in Malaysia. Phone off (or night mode) 1 hour before bed.' },
            { title: 'Hot and humid nights', detail: 'Optimal sleep temperature is 18–22°C. Malaysian nights at 26–30°C disrupt deep sleep. Air conditioning, fans, and breathable bedding improve sleep quality significantly.' },
            { title: 'Late eating culture', detail: 'Supper culture (yong tau foo, mamak past midnight) disrupts melatonin and digestion. Finish eating 2–3 hours before bed. Light snacks if needed — warm milk, banana, oats.' },
            { title: 'Work and study pressure', detail: 'Many Malaysians sacrifice sleep for work or studies. Chronic sleep debt builds — not repayable with weekend sleep-ins. Consistent wake time is more important than total hours in bed.' },
            { title: 'Noise pollution', detail: 'Urban traffic, construction, nighttime motorcycle racing. Use earplugs or white noise machines. Heavy curtains block both noise and street light.' },
            { title: 'Undiagnosed sleep apnea', detail: 'Snoring + morning fatigue + falling asleep during day = possible obstructive sleep apnea. Very underdiagnosed in Malaysia. Risk factors: male, overweight, large neck. See an ENT or sleep specialist.' },
          ].map((h, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4">
              <p className="font-bold text-ink text-[13px] mb-1">{h.title}</p>
              <p className="text-ink-secondary text-[12px] leading-relaxed">{h.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
        <p className="font-bold text-indigo-900 text-[14px] mb-2">😴 Sleep Hygiene Checklist</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
          {[
            'Same wake time every day (including weekends)',
            'Dark bedroom — blackout curtains or sleep mask',
            'Cool room temperature (18–22°C ideal)',
            'No screens 1 hour before bed',
            'No caffeine after 2pm (coffee, teh tarik, energy drinks)',
            'No heavy meals within 3 hours of bedtime',
            'Consistent bedtime routine (shower, reading, light stretch)',
            'Bed is for sleep — not TV, phone, or work',
          ].map((tip, i) => (
            <p key={i} className="text-indigo-800 text-[12px] flex items-center gap-2">
              <span className="text-indigo-500">✓</span>{tip}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Chronic Disease Prevention ──────────────────────────────────── */

function ChronicSection() {
  const STATS = [
    { label: 'Malaysians with diabetes', value: '3.9M+', context: '1 in 5 adults; 50% undiagnosed', color: '#dc2626' },
    { label: 'Malaysians with hypertension', value: '6.4M+', context: '30% of adults aged 18+', color: '#d97706' },
    { label: 'Overweight / Obese adults', value: '50.1%', context: 'More than half of Malaysian adults (NHMS 2019)', color: '#7c3aed' },
    { label: 'Cardiovascular disease mortality', value: '#1 killer', context: 'Ischaemic heart disease is Malaysia\'s leading cause of death', color: '#0891b2' },
  ]

  const PREVENTION = [
    {
      disease: 'Type 2 Diabetes',
      icon: '🩸',
      color: '#dc2626',
      risk: 'Overweight, family history, sedentary lifestyle, consuming >2 sugary drinks/day, age 45+',
      prevent: [
        'Lose 5–10% of body weight if overweight (most impactful single action)',
        'Replace white rice with brown rice or reduce portion by half',
        'Walk 150 min/week minimum — proven to reduce diabetes risk 58%',
        'Annual fasting blood glucose test from age 30 (earlier if family history)',
        'Reduce sugary drinks: teh tarik, Milo, Horlicks, fruit juices',
      ],
      screening: 'Fasting Blood Glucose (FBG) ≥ 7.0 mmol/L or HbA1c ≥ 6.5% = diabetes. Pre-diabetes: FBG 5.6–6.9 mmol/L.',
    },
    {
      disease: 'Hypertension (High Blood Pressure)',
      icon: '❤️',
      color: '#d97706',
      risk: 'Family history, high sodium diet, sedentary, obesity, stress, smoking, age 40+',
      prevent: [
        'Reduce salt: avoid high-sodium dishes (rojak, cencaluk, belacan, instant noodles)',
        'DASH diet: more potassium (bananas, sweet potato, spinach), less sodium',
        'Exercise 30 min/day — each 30-min session lowers BP for 4–12 hours',
        'Limit alcohol to 1–2 drinks/day maximum (if at all)',
        'Monitor your BP: normal is below 120/80 mmHg',
      ],
      screening: 'Normal: <120/<80 mmHg. Elevated: 120–129/<80. Stage 1 HTN: 130–139/80–89. Stage 2: ≥140/≥90.',
    },
    {
      disease: 'Obesity',
      icon: '⚖️',
      color: '#7c3aed',
      risk: 'Sedentary job, high-calorie diet, genetics, poor sleep, stress eating, sugar-sweetened beverages',
      prevent: [
        'BMI 18.5–22.9 kg/m² is healthy for Asians (lower than Western cut-offs)',
        'Waist circumference: men <90 cm, women <80 cm (Asian thresholds)',
        'Even 5–10% weight loss significantly reduces diabetes, hypertension, and joint risk',
        'Sleep 7–9 hours — sleep deprivation raises hunger hormones (ghrelin)',
        'Avoid crash dieting — sustainable 0.5–1 kg/week loss is the target',
      ],
      screening: 'BMI = weight (kg) ÷ height² (m). Asian obesity threshold is BMI ≥27.5 (vs Western ≥30).',
    },
    {
      disease: 'Cardiovascular Disease',
      icon: '🫀',
      color: '#0891b2',
      risk: 'Smoking, hypertension, high LDL cholesterol, diabetes, obesity, family history, male sex, age 45+',
      prevent: [
        'Stop smoking — single most powerful cardiovascular risk reducer',
        'Total cholesterol target: <5.2 mmol/L; LDL <3.4 mmol/L; check every 5 years from age 35',
        'Control blood pressure (target <130/80 mmHg) and blood sugar',
        'Heart-healthy diet: more omega-3 fish, less saturated fat and trans fat',
        'Know the FAST signs: Face drooping, Arm weakness, Speech difficulty, Time to call 999',
      ],
      screening: 'Fasting lipid panel from age 35. Earlier if family history of heart attack or stroke under age 55.',
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-[17px] font-bold text-ink mb-4">Malaysia's Chronic Disease Burden</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-2">
          {STATS.map((s, i) => (
            <div key={i} className="rounded-xl p-4 text-center border" style={{ borderTop: `3px solid ${s.color}` }}>
              <p className="text-[22px] font-bold" style={{ color: s.color }}>{s.value}</p>
              <p className="text-ink text-[12px] font-semibold mt-1">{s.label}</p>
              <p className="text-ink-tertiary text-[11px] mt-1">{s.context}</p>
            </div>
          ))}
        </div>
        <p className="text-ink-secondary text-[12px] text-center">Source: National Health & Morbidity Survey (NHMS) 2019/2023, MOH Malaysia</p>
      </div>

      <div className="space-y-4">
        {PREVENTION.map((d, i) => (
          <div key={i} className="border border-ink-quaternary rounded-2xl overflow-hidden">
            <div className="px-5 py-4" style={{ background: `${d.color}08`, borderBottom: `1px solid ${d.color}20` }}>
              <div className="flex items-center gap-2">
                <span className="text-[20px]">{d.icon}</span>
                <h4 className="font-bold text-ink text-[15px]">{d.disease}</h4>
              </div>
              <p className="text-[12px] text-ink-secondary mt-1"><span className="font-semibold">Risk factors: </span>{d.risk}</p>
            </div>
            <div className="px-5 py-4 grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wide mb-2">Prevention Steps</p>
                <ul className="space-y-1.5">
                  {d.prevent.map((p, j) => (
                    <li key={j} className="text-[12px] text-ink-secondary flex items-start gap-2">
                      <span className="flex-shrink-0 mt-0.5" style={{ color: d.color }}>✓</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-surface-secondary rounded-xl p-3">
                <p className="text-[11px] font-semibold text-ink-secondary uppercase tracking-wide mb-1">Screening Reference</p>
                <p className="text-[12px] text-ink-secondary leading-relaxed">{d.screening}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Dengue Prevention ───────────────────────────────────────────── */

function DengueSection() {
  const SEASONS = [
    { month: 'Jan–Mar', risk: 'High', note: 'Post-monsoon northeast; high Aedes activity' },
    { month: 'Apr–Jun', risk: 'Moderate', note: 'Inter-monsoon; sporadic outbreaks' },
    { month: 'Jul–Sep', risk: 'Moderate–High', note: 'Dry season; urban concentration' },
    { month: 'Oct–Dec', risk: 'High', note: 'Southwest monsoon; flooding creates breeding sites' },
  ]

  const WARNINGS = [
    { sign: 'Fever 39–40°C, sudden onset', note: 'Dengue fever starts abruptly — unlike flu which builds gradually' },
    { sign: 'Severe headache behind the eyes', note: 'Retro-orbital pain — classic dengue sign' },
    { sign: 'Muscle and joint pain', note: '"Breakbone fever" — very distinctive, worse than regular flu' },
    { sign: 'Skin rash', note: 'Appears 3–4 days after fever; spreads from trunk to limbs' },
    { sign: 'Nausea and vomiting', note: 'Usually mild in early stages' },
    { sign: '⚠ WARNING SIGNS (go to hospital immediately)', note: 'Stomach pain/tenderness · persistent vomiting · bleeding from gums/nose · blood in urine/stool/vomit · sudden drop in fever with fatigue (can signal severe dengue)' },
  ]

  return (
    <div className="space-y-8">

      <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
        <p className="font-bold text-red-900 text-[16px] mb-2">🦟 Dengue in Malaysia — Key Facts</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
          {[
            { val: '~100,000+', label: 'Cases/year', sub: 'Malaysia 2023–2024' },
            { val: 'Aedes aegypti', label: 'Primary mosquito', sub: '+ Aedes albopictus' },
            { val: 'No cure', label: 'Treatment', sub: 'Supportive care only' },
            { val: 'TAK-003', label: 'Vaccine', sub: 'Qdenga — available in MY' },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-3 text-center border border-red-100">
              <p className="font-bold text-red-700 text-[15px]">{s.val}</p>
              <p className="text-ink text-[11px] font-semibold mt-0.5">{s.label}</p>
              <p className="text-ink-tertiary text-[10px]">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 10 Steps */}
      <div>
        <h3 className="text-[17px] font-bold text-ink mb-3">🏠 10-Step Dengue-Proof Your Home</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { step: '1', action: 'Change water in flower vases every 2 days', why: 'Aedes lays eggs in standing water — even 1 teaspoon is enough' },
            { step: '2', action: 'Empty and clean water containers weekly', why: 'Drums, buckets, pails, water tanks under tanks' },
            { step: '3', action: 'Cover all water storage containers tightly', why: 'Mosquitoes cannot lay eggs on covered surfaces' },
            { step: '4', action: 'Clear fallen leaves and debris from drains', why: 'Blocked drains pool water — breeding hotspot' },
            { step: '5', action: 'Check and clear roof gutters monthly', why: 'Most ignored breeding site in Malaysian homes' },
            { step: '6', action: 'Dispose of unused containers (tyres, cans, bottles)', why: 'Old tyres collect rainwater — classic breeding site' },
            { step: '7', action: 'Use mosquito repellent (DEET/Picaridin) when outdoors', why: 'Aedes bites mostly in early morning and late afternoon (not at night)' },
            { step: '8', action: 'Wear long sleeves/pants in high-risk areas', why: 'Simple physical barrier — especially effective at dawn/dusk' },
            { step: '9', action: 'Install window and door screens', why: 'Keeps mosquitoes out while allowing ventilation' },
            { step: '10', action: 'Participate in gotong-royong fogging/checks', why: 'MOH fogging provides ~2-week protection; community-level effort matters' },
          ].map((s, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-3 flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-red-100 text-red-700 font-bold text-[12px] flex items-center justify-center">{s.step}</span>
              <div>
                <p className="font-semibold text-ink text-[13px]">{s.action}</p>
                <p className="text-ink-secondary text-[11px] mt-0.5">{s.why}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Warning signs */}
      <div>
        <h3 className="text-[17px] font-bold text-ink mb-3">🚨 Dengue Fever — Recognise the Signs</h3>
        <div className="space-y-2">
          {WARNINGS.map((w, i) => (
            <div key={i} className={`rounded-xl p-3 border ${w.sign.startsWith('⚠') ? 'bg-red-50 border-red-200' : 'border-ink-quaternary'}`}>
              <p className={`font-semibold text-[13px] mb-0.5 ${w.sign.startsWith('⚠') ? 'text-red-800' : 'text-ink'}`}>{w.sign}</p>
              <p className={`text-[12px] ${w.sign.startsWith('⚠') ? 'text-red-700' : 'text-ink-secondary'}`}>{w.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dengue vaccine */}
      <div>
        <h3 className="text-[17px] font-bold text-ink mb-3">💉 Dengue Vaccine — Qdenga (TAK-003)</h3>
        <div className="border border-brand/30 bg-brand/5 rounded-2xl p-5 space-y-3">
          <p className="text-[13px] text-ink-secondary leading-relaxed">Qdenga (Dengvaxia alternative) was approved for use in Malaysia and became commercially available in 2023–2024. It is the first dengue vaccine widely available to the general public in Malaysia regardless of prior dengue exposure.</p>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { label: 'Who can take it', val: 'Ages 4–60 years; recommended for ages 6+ in Malaysia' },
              { label: 'Doses', val: '2 doses, 3 months apart (subcutaneous injection)' },
              { label: 'Estimated cost', val: 'RM 350–500 per dose; RM 700–1,000 for full course (private clinics/hospitals)' },
            ].map((d, i) => (
              <div key={i} className="bg-white rounded-xl p-3 border border-brand/20">
                <p className="text-[11px] font-semibold text-brand uppercase tracking-wide mb-1">{d.label}</p>
                <p className="text-ink text-[12px]">{d.val}</p>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-ink-secondary"><strong>Effectiveness:</strong> In clinical trials (TIDES study), TAK-003 demonstrated 61% overall efficacy against symptomatic dengue and 84% against hospitalisation. Efficacy is highest in those previously infected. Consult your doctor before vaccination.</p>
          <p className="text-[12px] text-ink-secondary"><strong>Note:</strong> Dengvaxia (Sanofi) requires proof of prior dengue infection and is not routinely available at most Malaysian clinics. Qdenga does not require prior infection testing.</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-[13px]">
        <p className="font-bold text-amber-900 mb-1">📞 Report dengue cases</p>
        <p className="text-amber-800">If you or a family member is diagnosed with dengue, inform your local Pejabat Kesihatan Daerah (District Health Office). MOH will conduct fogging and inspections in your area within 24–48 hours. This protects your neighbours.</p>
      </div>
    </div>
  )
}

/* ─── Quit Smoking ────────────────────────────────────────────────── */

function SmokeSection() {
  return (
    <div className="space-y-8">

      <div className="bg-surface-secondary rounded-2xl p-5">
        <h3 className="text-[17px] font-bold text-ink mb-3">Smoking in Malaysia — The Numbers</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { val: '21.3%', label: 'Adults who smoke', sub: 'NHMS 2023' },
            { val: '~5M', label: 'Smokers in Malaysia', sub: 'Including e-cig users' },
            { val: '#1', label: 'Lung cancer cause', sub: 'Smoking causes 85% of lung cancers' },
            { val: '10 years', label: 'Life expectancy loss', sub: 'Average for heavy smokers' },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-3 text-center border border-ink-quaternary">
              <p className="font-bold text-ink text-[18px]">{s.val}</p>
              <p className="text-ink text-[12px] font-semibold mt-0.5">{s.label}</p>
              <p className="text-ink-tertiary text-[11px]">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[17px] font-bold text-ink mb-3">🚨 Vaping Is NOT Safe</h3>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5 space-y-3">
          <p className="text-[13px] text-red-800 leading-relaxed">Vaping (e-cigarettes, vape, pod systems) is marketed as a "safer" alternative to smoking. The evidence says otherwise:</p>
          <ul className="space-y-2">
            {[
              'E-cigarette aerosol contains heavy metals (lead, nickel, tin), volatile organic compounds, and ultrafine particles that penetrate deep into lungs.',
              'EVALI (e-cigarette or vaping product use-associated lung injury) is a serious condition — multiple deaths recorded worldwide.',
              'Nicotine addiction is equally strong or stronger than traditional cigarettes (higher delivery rates in modern pod systems).',
              'Flavouring chemicals (diacetyl, acetyl propionyl) are linked to "popcorn lung" (bronchiolitis obliterans).',
              'Teen vaping is rising sharply in Malaysia — MOH reported 14% of secondary school students using e-cigarettes (2022).',
              'Dual use (smoking + vaping) is more harmful than either alone — most e-cig users do not quit smoking.',
            ].map((fact, i) => (
              <li key={i} className="text-red-800 text-[12px] flex items-start gap-2">
                <span className="flex-shrink-0 text-red-500">✗</span>{fact}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-[17px] font-bold text-ink mb-3">✅ How to Quit — Effective Methods</h3>
        <div className="space-y-3">
          {[
            { method: 'Combination NRT (most effective)', detail: 'Nicotine Replacement Therapy: patch + fast-acting form (gum/lozenge/inhaler). Combining two NRT forms doubles quit rates vs single NRT. Available OTC at pharmacies — Guardian, Watson, Caring.', tag: '25–30% quit rate' },
            { method: 'Varenicline (Champix / Chantix)', detail: 'Prescription medication — reduces nicotine cravings and withdrawal. Most effective single pharmacotherapy. Get prescription from your GP or Klinik Kesihatan (subsidised under MySihat programme).', tag: '33% quit rate' },
            { method: 'Bupropion (Zyban)', detail: 'Antidepressant that reduces withdrawal symptoms. Prescription required. Often used when varenicline is not tolerated.', tag: '20–25% quit rate' },
            { method: 'Behavioural counselling', detail: 'Free Quitline: 1800-88-2472 (QuitLine Malaysia, Mon–Fri 8am–5pm). WhatsApp: wa.me/60128668472. Face-to-face cessation clinics at most Klinik Kesihatan — free, with medication support.', tag: 'Doubles success rate' },
            { method: 'Set a Quit Date', detail: 'Pick a date within 2 weeks. Tell family and friends. Remove all tobacco products from home, car, and workplace on quit day. Identify your triggers and plan alternatives.', tag: 'First step' },
          ].map((m, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <p className="font-bold text-ink text-[13px]">{m.method}</p>
                <span className="text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">{m.tag}</span>
              </div>
              <p className="text-ink-secondary text-[12px] leading-relaxed">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px]">
        <p className="font-bold text-ink mb-1">What happens when you quit smoking:</p>
        <div className="grid sm:grid-cols-3 gap-2 mt-2">
          {[
            { time: '20 minutes', effect: 'Heart rate and blood pressure drop' },
            { time: '12 hours', effect: 'Carbon monoxide level in blood normalises' },
            { time: '2 weeks–3 months', effect: 'Circulation and lung function improve' },
            { time: '1–9 months', effect: 'Coughing and shortness of breath decrease' },
            { time: '1 year', effect: 'Heart disease risk halved vs. smoker' },
            { time: '10 years', effect: 'Lung cancer risk drops by 50%' },
          ].map((t, i) => (
            <div key={i} className="bg-white rounded-lg p-2.5 border border-brand/20">
              <p className="font-bold text-brand text-[12px]">{t.time}</p>
              <p className="text-ink text-[11px] mt-0.5">{t.effect}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Stress & Mental Wellness ────────────────────────────────────── */

function StressSection() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-[17px] font-bold text-ink mb-3">Stress in Malaysian Context</h3>
        <p className="text-ink-secondary text-[13px] leading-relaxed mb-4">Work pressure, long commutes, financial stress, caregiver burden, academic competition, and social media comparison are the dominant stress drivers in Malaysia. Chronic stress is a major contributor to hypertension, diabetes, insomnia, and depression.</p>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { val: '29.2%', label: 'Prevalence of mental disorders in Malaysia', sub: 'NHMS 2015 — over 500,000 adults' },
            { val: '16.7%', label: 'Adults with depression symptoms', sub: 'Increased significantly post-COVID' },
            { val: '1.2M', label: 'Estimated need mental health care', sub: 'Vast majority are undertreated' },
          ].map((s, i) => (
            <div key={i} className="bg-surface-secondary rounded-xl p-4 text-center">
              <p className="font-bold text-ink text-[20px]">{s.val}</p>
              <p className="text-ink text-[12px] font-semibold mt-0.5">{s.label}</p>
              <p className="text-ink-tertiary text-[11px] mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[17px] font-bold text-ink mb-3">🧠 Evidence-Based Stress Management</h3>
        <div className="space-y-3">
          {[
            { title: 'Exercise (30 min, 5x/week)', color: '#16a34a', detail: 'Single most effective non-pharmacological treatment for stress and mild depression. Releases endorphins, reduces cortisol, improves sleep. Even a 20-min walk has measurable effect.' },
            { title: 'Mindfulness & Breathing', color: '#0891b2', detail: 'Box breathing: inhale 4 counts, hold 4, exhale 4, hold 4. Repeat 4 cycles. Reduces acute stress response in under 2 minutes. Headspace, Calm, and Insight Timer apps are widely used in Malaysia.' },
            { title: 'Social connection', color: '#7c3aed', detail: 'Strong social bonds are the most consistent predictor of mental health. Regular meals with family, community involvement, sports clubs. Isolation is as damaging as smoking 15 cigarettes/day to longevity.' },
            { title: 'Professional help — when to seek it', color: '#dc2626', detail: 'Seek help if: low mood persisting >2 weeks; unable to perform daily tasks; thoughts of self-harm; sleep disrupted every night. Starting point: GP at Klinik Kesihatan (free, confidential). Referral to psychiatrist if needed.' },
            { title: 'Digital detox', color: '#d97706', detail: 'Limit social media to 30 min/day. News exposure >1 hour/day significantly increases anxiety. Turn off non-essential notifications. Phone-free meals and bedrooms.' },
          ].map((t, i) => (
            <div key={i} className="border rounded-xl p-4" style={{ borderLeft: `4px solid ${t.color}`, background: `${t.color}08` }}>
              <p className="font-bold text-ink text-[13px] mb-1.5">{t.title}</p>
              <p className="text-ink-secondary text-[12px] leading-relaxed">{t.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[17px] font-bold text-ink mb-3">📞 Malaysian Mental Health Support Lines</h3>
        <div className="space-y-2">
          {[
            { name: 'Befrienders KL', contact: '03-7627 2929', hours: '24 hours, 7 days', type: 'Crisis & emotional support' },
            { name: 'MIASA Helpline', contact: '03-2780 6803', hours: 'Mon–Fri 9am–5pm', type: 'Mental illness support' },
            { name: 'MENTARI (MOH)', contact: 'Via Klinik Kesihatan', hours: 'Office hours', type: 'Free community mental health clinics' },
            { name: 'Talian Kasih', contact: '15999', hours: '24 hours', type: 'General social services crisis line' },
            { name: 'Malaysian Mental Health Association (MMHA)', contact: '03-2780 6803', hours: 'Office hours', type: 'Counselling referrals' },
            { name: 'Relate Malaysia', contact: 'relatemalaysia.org', hours: 'Online booking', type: 'Online therapy directory' },
          ].map((s, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-3 grid grid-cols-[1fr_auto] gap-2 items-center">
              <div>
                <p className="font-bold text-ink text-[13px]">{s.name}</p>
                <p className="text-ink-secondary text-[11px]">{s.type} · {s.hours}</p>
              </div>
              <p className="font-mono font-bold text-brand text-[13px] text-right">{s.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Weight Management ───────────────────────────────────────────── */

function WeightSection() {
  const MYTHS = [
    { myth: '"Carbs make you fat"', truth: 'Excess calories from any source cause weight gain. Refined carbs spike blood sugar — but whole-grain rice and oats are healthy. Reduce portion size, not food type.' },
    { myth: '"Skipping meals helps lose weight"', truth: 'Meal skipping leads to overeating at the next meal and lowers metabolic rate. Consistent meal timing regulates hunger hormones better.' },
    { myth: '"Detox teas and slimming products work"', truth: 'No scientific evidence supports detox products. Many slimming teas contain senna (a laxative) or undisclosed stimulants. Weight loss is water/stool loss, not fat.' },
    { myth: '"Low-fat means healthy"', truth: 'Low-fat products often have added sugar to compensate. Full-fat Greek yoghurt is healthier than low-fat sweetened yoghurt. Read nutrition labels.' },
    { myth: '"You need to exercise for hours"', truth: '30 min/day of brisk walking is sufficient for health benefits. High-intensity interval training (HIIT) achieves more in 20 min than 60 min of low-intensity exercise.' },
    { myth: '"Supplements speed up fat loss"', truth: 'No supplement is proven to burn fat. Protein supplements can help preserve muscle during weight loss — but only when combined with resistance training.' },
  ]

  return (
    <div className="space-y-8">

      <div>
        <h3 className="text-[17px] font-bold text-ink mb-3">Healthy Weight — Asian Thresholds</h3>
        <p className="text-ink-secondary text-[13px] mb-4">Asians develop metabolic complications (diabetes, hypertension, fatty liver) at lower BMI than Western populations. MOH Malaysia uses adjusted cut-offs.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px] border-collapse">
            <thead>
              <tr className="bg-surface-secondary">
                <th className="text-left px-4 py-2.5 font-semibold text-ink rounded-tl-xl">Category</th>
                <th className="text-left px-4 py-2.5 font-semibold text-ink">BMI (Asian)</th>
                <th className="text-left px-4 py-2.5 font-semibold text-ink">BMI (Western)</th>
                <th className="text-left px-4 py-2.5 font-semibold text-ink rounded-tr-xl">Health Risk</th>
              </tr>
            </thead>
            <tbody>
              {[
                { cat: 'Underweight', asian: '< 18.5', western: '< 18.5', risk: 'Moderate' },
                { cat: 'Normal', asian: '18.5 – 22.9', western: '18.5 – 24.9', risk: 'Low' },
                { cat: 'Overweight', asian: '23.0 – 27.4', western: '25.0 – 29.9', risk: 'Increased' },
                { cat: 'Obese Class I', asian: '27.5 – 32.4', western: '30.0 – 34.9', risk: 'High' },
                { cat: 'Obese Class II+', asian: '≥ 32.5', western: '≥ 35', risk: 'Very High' },
              ].map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? '' : 'bg-surface-secondary/50'}>
                  <td className="px-4 py-2.5 font-semibold text-ink">{r.cat}</td>
                  <td className="px-4 py-2.5 text-ink">{r.asian}</td>
                  <td className="px-4 py-2.5 text-ink-secondary">{r.western}</td>
                  <td className="px-4 py-2.5">{r.risk}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-ink-secondary text-[12px] mt-2">Waist circumference: Men &lt;90 cm, Women &lt;80 cm (Asian cut-off). Excess abdominal fat is a strong predictor of metabolic disease regardless of BMI.</p>
      </div>

      <div>
        <h3 className="text-[17px] font-bold text-ink mb-3">Sustainable Weight Loss — What Actually Works</h3>
        <div className="space-y-3">
          {[
            { title: 'Caloric deficit (500 kcal/day = ~0.5 kg/week loss)', color: '#16a34a', detail: 'Use a calorie tracker app (MyFitnessPal, Lose It) for 2–4 weeks to understand your food intake. Average Malaysian adult needs 1,800–2,200 kcal/day. A 500 kcal deficit per day causes 0.5 kg fat loss per week — sustainable and safe.' },
            { title: 'Protein prioritisation', color: '#0891b2', detail: 'High protein diet (1.2–1.6g protein per kg body weight) reduces hunger, preserves muscle during weight loss, and requires more energy to digest. Include: eggs, tofu, tempe, fish, chicken breast, Greek yoghurt, legumes at every meal.' },
            { title: 'Reduce liquid calories first', color: '#d97706', detail: 'Liquid calories don\'t trigger satiety like solid food. Switching from sugary drinks to plain water is the single highest ROI dietary change. Teh tarik 3x/day = ~500 extra kcal. Replace with teh O or plain water = 0.5 kg/week potential loss.' },
            { title: 'Resistance training + cardio', color: '#7c3aed', detail: 'Cardio alone causes muscle loss alongside fat loss. Adding 2x/week resistance training preserves muscle, raises basal metabolic rate, and improves body composition. You can be lighter AND stronger.' },
          ].map((t, i) => (
            <div key={i} className="border rounded-xl p-4" style={{ borderLeft: `4px solid ${t.color}`, background: `${t.color}08` }}>
              <p className="font-bold text-ink text-[13px] mb-1">{t.title}</p>
              <p className="text-ink-secondary text-[12px] leading-relaxed">{t.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-[17px] font-bold text-ink mb-3">🚫 Common Weight Loss Myths</h3>
        <div className="space-y-2">
          {MYTHS.map((m, i) => (
            <div key={i} className="border border-ink-quaternary rounded-xl p-3">
              <p className="font-bold text-red-700 text-[12px] mb-1">Myth: {m.myth}</p>
              <p className="text-ink-secondary text-[12px] leading-relaxed"><span className="font-semibold text-emerald-700">Truth:</span> {m.truth}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-brand/5 border border-brand/20 rounded-2xl p-4 text-[13px]">
        <p className="font-bold text-ink mb-1">🏥 When to see a doctor about weight</p>
        <p className="text-ink-secondary leading-relaxed">If BMI ≥27.5, consult a GP. MOH Klinik Kesihatan provides free weight management counselling. If BMI ≥37.5 or ≥32.5 with diabetes/hypertension, ask about medical weight management options (meal replacement, pharmacotherapy, bariatric surgery referral).</p>
      </div>
    </div>
  )
}
