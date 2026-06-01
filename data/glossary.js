// data/glossary.js
// Phrase/term glossary used to translate free-text hospital data (intro,
// famousFor, verifiedNotes, notableGaps, infrastructure values) at render time.
// Single-pass, longest-match-first replacement. Keys are lowercase.
window.HI = window.HI || {};

(function() {
  // key (lowercase English) -> { bm, zh_s, zh_t }
  var TERMS = {
    // ── Hospital-type phrases (longest first matters; pattern is length-sorted) ──
    "state apex referral hospital": { bm: "hospital rujukan utama negeri", zh_s: "州级顶级转诊医院", zh_t: "州級頂級轉診醫院" },
    "apex referral hospital": { bm: "hospital rujukan utama", zh_s: "顶级转诊医院", zh_t: "頂級轉診醫院" },
    "apex referral centre for the state": { bm: "pusat rujukan utama negeri", zh_s: "该州顶级转诊中心", zh_t: "該州頂級轉診中心" },
    "apex referral centre": { bm: "pusat rujukan utama", zh_s: "顶级转诊中心", zh_t: "頂級轉診中心" },
    "main state hospital": { bm: "hospital negeri utama", zh_s: "主要州立医院", zh_t: "主要州立醫院" },
    "state general hospital": { bm: "hospital umum negeri", zh_s: "州立综合医院", zh_t: "州立綜合醫院" },
    "general hospital": { bm: "hospital umum", zh_s: "综合医院", zh_t: "綜合醫院" },
    "academic medical centre": { bm: "pusat perubatan akademik", zh_s: "学术医疗中心", zh_t: "學術醫療中心" },
    "medical centre": { bm: "pusat perubatan", zh_s: "医疗中心", zh_t: "醫療中心" },
    "medical center": { bm: "pusat perubatan", zh_s: "医疗中心", zh_t: "醫療中心" },
    "private specialist hospital": { bm: "hospital pakar swasta", zh_s: "私立专科医院", zh_t: "私立專科醫院" },
    "specialist hospital": { bm: "hospital pakar", zh_s: "专科医院", zh_t: "專科醫院" },
    "private hospital": { bm: "hospital swasta", zh_s: "私立医院", zh_t: "私立醫院" },
    "public hospital": { bm: "hospital awam", zh_s: "公立医院", zh_t: "公立醫院" },
    "district hospital for": { bm: "hospital daerah untuk", zh_s: "地区医院，服务", zh_t: "地區醫院，服務" },
    "small district hospital": { bm: "hospital daerah kecil", zh_s: "小型地区医院", zh_t: "小型地區醫院" },
    "district hospital": { bm: "hospital daerah", zh_s: "地区医院", zh_t: "地區醫院" },
    "district-level healthcare": { bm: "penjagaan kesihatan peringkat daerah", zh_s: "地区级医疗服务", zh_t: "地區級醫療服務" },
    "teaching hospital": { bm: "hospital pengajar", zh_s: "教学医院", zh_t: "教學醫院" },
    "tertiary services": { bm: "perkhidmatan tertiari", zh_s: "三级医疗服务", zh_t: "三級醫療服務" },
    "tertiary hospital": { bm: "hospital tertiari", zh_s: "三级医院", zh_t: "三級醫院" },
    "major secondary hospital": { bm: "hospital sekunder utama", zh_s: "主要二级医院", zh_t: "主要二級醫院" },
    "secondary hospital": { bm: "hospital sekunder", zh_s: "二级医院", zh_t: "二級醫院" },
    "community satellite hospital": { bm: "hospital satelit komuniti", zh_s: "社区卫星医院", zh_t: "社區衛星醫院" },
    "community satellite facility": { bm: "kemudahan satelit komuniti", zh_s: "社区卫星设施", zh_t: "社區衛星設施" },
    "small hospital": { bm: "hospital kecil", zh_s: "小型医院", zh_t: "小型醫院" },
    "main public hospital": { bm: "hospital awam utama", zh_s: "主要公立医院", zh_t: "主要公立醫院" },
    "main private specialist hospital": { bm: "hospital pakar swasta utama", zh_s: "主要私立专科医院", zh_t: "主要私立專科醫院" },
    "main hospital for": { bm: "hospital utama untuk", zh_s: "主要医院，服务", zh_t: "主要醫院，服務" },
    "main hospital": { bm: "hospital utama", zh_s: "主要医院", zh_t: "主要醫院" },

    // ── Clinical specialties / services ──
    "comprehensive specialist services": { bm: "perkhidmatan pakar komprehensif", zh_s: "综合专科服务", zh_t: "綜合專科服務" },
    "comprehensive tertiary services": { bm: "perkhidmatan tertiari komprehensif", zh_s: "综合三级医疗服务", zh_t: "綜合三級醫療服務" },
    "specialist services": { bm: "perkhidmatan pakar", zh_s: "专科服务", zh_t: "專科服務" },
    "specialist care": { bm: "penjagaan pakar", zh_s: "专科护理", zh_t: "專科護理" },
    "specialist centre": { bm: "pusat pakar", zh_s: "专科中心", zh_t: "專科中心" },
    "full specialist coverage": { bm: "liputan pakar penuh", zh_s: "全面专科服务", zh_t: "全面專科服務" },
    "liver transplant": { bm: "pemindahan hati", zh_s: "肝脏移植", zh_t: "肝臟移植" },
    "heart transplant": { bm: "pemindahan jantung", zh_s: "心脏移植", zh_t: "心臟移植" },
    "kidney transplant": { bm: "pemindahan buah pinggang", zh_s: "肾脏移植", zh_t: "腎臟移植" },
    "bone marrow transplant": { bm: "pemindahan sumsum tulang", zh_s: "骨髓移植", zh_t: "骨髓移植" },
    "transplant": { bm: "pemindahan", zh_s: "移植", zh_t: "移植" },
    "cardiothoracic surgery": { bm: "pembedahan kardiotorasik", zh_s: "心胸外科手术", zh_t: "心胸外科手術" },
    "cardiothoracic": { bm: "kardiotorasik", zh_s: "心胸外科", zh_t: "心胸外科" },
    "neurosurgery": { bm: "bedah saraf", zh_s: "神经外科", zh_t: "神經外科" },
    "cardiac catheterisation lab": { bm: "makmal kateterisasi jantung", zh_s: "心导管实验室", zh_t: "心導管實驗室" },
    "cardiac surgery": { bm: "pembedahan jantung", zh_s: "心脏外科", zh_t: "心臟外科" },
    "cardiac": { bm: "jantung", zh_s: "心脏科", zh_t: "心臟科" },
    "oncology": { bm: "onkologi", zh_s: "肿瘤科", zh_t: "腫瘤科" },
    "haematology": { bm: "hematologi", zh_s: "血液科", zh_t: "血液科" },
    "cochlear implant programme": { bm: "program implan koklea", zh_s: "人工耳蜗项目", zh_t: "人工耳蝸項目" },
    "cochlear implant centre": { bm: "pusat implan koklea", zh_s: "人工耳蜗中心", zh_t: "人工耳蝸中心" },
    "cochlear implant": { bm: "implan koklea", zh_s: "人工耳蜗", zh_t: "人工耳蝸" },
    "cancer centre": { bm: "pusat kanser", zh_s: "癌症中心", zh_t: "癌症中心" },
    "cancer": { bm: "kanser", zh_s: "癌症", zh_t: "癌症" },
    "radiation therapy": { bm: "terapi radiasi", zh_s: "放射治疗", zh_t: "放射治療" },
    "radiation": { bm: "radiasi", zh_s: "放射治疗", zh_t: "放射治療" },
    "orthopaedic": { bm: "ortopedik", zh_s: "骨科", zh_t: "骨科" },
    "paediatric": { bm: "pediatrik", zh_s: "儿科", zh_t: "兒科" },
    "obstetrics": { bm: "obstetrik", zh_s: "产科", zh_t: "產科" },
    "gynaecology": { bm: "ginekologi", zh_s: "妇科", zh_t: "婦科" },
    "maternity": { bm: "bersalin", zh_s: "妇产科", zh_t: "婦產科" },
    "surgery": { bm: "pembedahan", zh_s: "外科手术", zh_t: "外科手術" },

    // ── Buildings / infrastructure ──
    "women & children block": { bm: "blok wanita & kanak-kanak", zh_s: "妇女儿童大楼", zh_t: "婦女兒童大樓" },
    "women and children block": { bm: "blok wanita & kanak-kanak", zh_s: "妇女儿童大楼", zh_t: "婦女兒童大樓" },
    "new clinical tower": { bm: "menara klinikal baharu", zh_s: "新临床大楼", zh_t: "新臨床大樓" },
    "new clinical block": { bm: "blok klinikal baharu", zh_s: "新临床大楼", zh_t: "新臨床大樓" },
    "clinical tower": { bm: "menara klinikal", zh_s: "临床大楼", zh_t: "臨床大樓" },
    "main block": { bm: "blok utama", zh_s: "主楼", zh_t: "主樓" },
    "main tower": { bm: "menara utama", zh_s: "主楼", zh_t: "主樓" },
    "specialist clinic block": { bm: "blok klinik pakar", zh_s: "专科诊所大楼", zh_t: "專科診所大樓" },
    "specialist block": { bm: "blok pakar", zh_s: "专科大楼", zh_t: "專科大樓" },
    "specialist tower": { bm: "menara pakar", zh_s: "专科大楼", zh_t: "專科大樓" },
    "specialist suites": { bm: "suite pakar", zh_s: "专科套房", zh_t: "專科套房" },
    "specialist clinics": { bm: "klinik pakar", zh_s: "专科诊所", zh_t: "專科診所" },
    "specialist clinic": { bm: "klinik pakar", zh_s: "专科诊所", zh_t: "專科診所" },
    "specialist wing": { bm: "sayap pakar", zh_s: "专科翼楼", zh_t: "專科翼樓" },
    "clinic block": { bm: "blok klinik", zh_s: "诊所大楼", zh_t: "診所大樓" },
    "outpatient block": { bm: "blok pesakit luar", zh_s: "门诊大楼", zh_t: "門診大樓" },
    "teaching block": { bm: "blok pengajaran", zh_s: "教学大楼", zh_t: "教學大樓" },
    "teaching wing": { bm: "sayap pengajaran", zh_s: "教学翼楼", zh_t: "教學翼樓" },
    "isolation wards": { bm: "wad pengasingan", zh_s: "隔离病房", zh_t: "隔離病房" },
    "new wing": { bm: "sayap baharu", zh_s: "新翼楼", zh_t: "新翼樓" },
    "new tower": { bm: "menara baharu", zh_s: "新楼", zh_t: "新樓" },
    "cancer centre tower": { bm: "menara pusat kanser", zh_s: "癌症中心大楼", zh_t: "癌症中心大樓" },
    "radiation block": { bm: "blok radiasi", zh_s: "放射治疗大楼", zh_t: "放射治療大樓" },
    "tower": { bm: "menara", zh_s: "大楼", zh_t: "大樓" },
    "block": { bm: "blok", zh_s: "大楼", zh_t: "大樓" },
    "wing": { bm: "sayap", zh_s: "翼楼", zh_t: "翼樓" },
    "chapel": { bm: "gereja kecil", zh_s: "小教堂", zh_t: "小教堂" },
    "helipad available": { bm: "helipad tersedia", zh_s: "设有直升机停机坪", zh_t: "設有直升機停機坪" },
    "helipad": { bm: "helipad", zh_s: "直升机停机坪", zh_t: "直升機停機坪" },
    "beds": { bm: "katil", zh_s: "张床位", zh_t: "張床位" },
    "bed": { bm: "katil", zh_s: "张床位", zh_t: "張床位" },
    "acres": { bm: "ekar", zh_s: "英亩", zh_t: "英畝" },
    "acre": { bm: "ekar", zh_s: "英亩", zh_t: "英畝" },

    // ── Gaps / limitations ──
    "very limited specialist services": { bm: "perkhidmatan pakar sangat terhad", zh_s: "专科服务非常有限", zh_t: "專科服務非常有限" },
    "limited specialist services": { bm: "perkhidmatan pakar terhad", zh_s: "专科服务有限", zh_t: "專科服務有限" },
    "very limited services": { bm: "perkhidmatan sangat terhad", zh_s: "服务非常有限", zh_t: "服務非常有限" },
    "limited services": { bm: "perkhidmatan terhad", zh_s: "服务有限", zh_t: "服務有限" },
    "limited": { bm: "terhad", zh_s: "有限", zh_t: "有限" },

    // ── Referral / coverage ──
    "specialist referral to": { bm: "rujukan pakar ke", zh_s: "专科转诊至", zh_t: "專科轉診至" },
    "specialist referral": { bm: "rujukan pakar", zh_s: "专科转诊", zh_t: "專科轉診" },
    "referral centre": { bm: "pusat rujukan", zh_s: "转诊中心", zh_t: "轉診中心" },
    "referral": { bm: "rujukan", zh_s: "转诊", zh_t: "轉診" },
    "all care": { bm: "semua penjagaan", zh_s: "所有医疗", zh_t: "所有醫療" },

    // ── Accreditation / research ──
    "jci accredited": { bm: "diakreditasi JCI", zh_s: "JCI 认证", zh_t: "JCI 認證" },
    "msqh accredited": { bm: "diakreditasi MSQH", zh_s: "MSQH 认证", zh_t: "MSQH 認證" },
    "accredited": { bm: "diakreditasi", zh_s: "认证", zh_t: "認證" },
    "medical tourism destination": { bm: "destinasi pelancongan perubatan", zh_s: "医疗旅游目的地", zh_t: "醫療旅遊目的地" },
    "medical tourism": { bm: "pelancongan perubatan", zh_s: "医疗旅游", zh_t: "醫療旅遊" },
    "clinical trials": { bm: "ujian klinikal", zh_s: "临床试验", zh_t: "臨床試驗" },
    "research output": { bm: "hasil penyelidikan", zh_s: "研究成果", zh_t: "研究成果" },
    "research": { bm: "penyelidikan", zh_s: "研究", zh_t: "研究" },

    // ── Generic nouns ──
    "healthcare group": { bm: "kumpulan penjagaan kesihatan", zh_s: "医疗集团", zh_t: "醫療集團" },
    "healthcare": { bm: "penjagaan kesihatan", zh_s: "医疗保健", zh_t: "醫療保健" },
    "hospitals": { bm: "hospital", zh_s: "医院", zh_t: "醫院" },
    "hospital": { bm: "hospital", zh_s: "医院", zh_t: "醫院" },
    "services": { bm: "perkhidmatan", zh_s: "服务", zh_t: "服務" },
    "service": { bm: "perkhidmatan", zh_s: "服务", zh_t: "服務" },
    "patients": { bm: "pesakit", zh_s: "患者", zh_t: "患者" },
    "population": { bm: "penduduk", zh_s: "人口", zh_t: "人口" },
    "communities": { bm: "komuniti", zh_s: "社区", zh_t: "社區" },
    "community": { bm: "komuniti", zh_s: "社区", zh_t: "社區" },
    "workforce": { bm: "tenaga kerja", zh_s: "劳动力", zh_t: "勞動力" },
    "programme": { bm: "program", zh_s: "项目", zh_t: "項目" },
    "program": { bm: "program", zh_s: "项目", zh_t: "項目" },
    "network": { bm: "rangkaian", zh_s: "网络", zh_t: "網絡" },
    "centre": { bm: "pusat", zh_s: "中心", zh_t: "中心" },
    "center": { bm: "pusat", zh_s: "中心", zh_t: "中心" },
    "division": { bm: "bahagian", zh_s: "省", zh_t: "省" },
    "capital": { bm: "ibu negeri", zh_s: "首府", zh_t: "首府" },

    // ── Verbs ──
    "serves both": { bm: "berkhidmat untuk kedua-dua", zh_s: "同时服务", zh_t: "同時服務" },
    "serves": { bm: "berkhidmat untuk", zh_s: "服务于", zh_t: "服務於" },
    "serving": { bm: "berkhidmat untuk", zh_s: "服务", zh_t: "服務" },
    "covers both": { bm: "meliputi kedua-dua", zh_s: "同时涵盖", zh_t: "同時涵蓋" },
    "covers": { bm: "meliputi", zh_s: "涵盖", zh_t: "涵蓋" },
    "provides": { bm: "menyediakan", zh_s: "提供", zh_t: "提供" },
    "providing": { bm: "menyediakan", zh_s: "提供", zh_t: "提供" },
    "offering": { bm: "menawarkan", zh_s: "提供", zh_t: "提供" },
    "offers": { bm: "menawarkan", zh_s: "提供", zh_t: "提供" },
    "require airlift": { bm: "memerlukan pengangkutan udara", zh_s: "需要空运", zh_t: "需要空運" },
    "airlift": { bm: "pengangkutan udara", zh_s: "空运", zh_t: "空運" },

    // ── Adjectives / descriptors ──
    "established private hospital": { bm: "hospital swasta yang mantap", zh_s: "成熟的私立医院", zh_t: "成熟的私立醫院" },
    "established": { bm: "ditubuhkan", zh_s: "成立", zh_t: "成立" },
    "flagship": { bm: "perdana", zh_s: "旗舰", zh_t: "旗艦" },
    "affordable": { bm: "mampu milik", zh_s: "实惠的", zh_t: "實惠的" },
    "comprehensive": { bm: "komprehensif", zh_s: "综合", zh_t: "綜合" },
    "national": { bm: "kebangsaan", zh_s: "国家级", zh_t: "國家級" },
    "largest": { bm: "terbesar", zh_s: "最大的", zh_t: "最大的" },
    "major": { bm: "utama", zh_s: "主要", zh_t: "主要" },
    "modern": { bm: "moden", zh_s: "现代化", zh_t: "現代化" },
    "growing": { bm: "berkembang", zh_s: "不断发展的", zh_t: "不斷發展的" },
    "strong": { bm: "kukuh", zh_s: "强大的", zh_t: "強大的" },
    "excellence": { bm: "kecemerlangan", zh_s: "卓越", zh_t: "卓越" },
    "significant": { bm: "ketara", zh_s: "显著的", zh_t: "顯著的" },
    "populous": { bm: "padat penduduk", zh_s: "人口稠密的", zh_t: "人口稠密的" },
    "basic": { bm: "asas", zh_s: "基本", zh_t: "基本" },
    "important": { bm: "penting", zh_s: "重要的", zh_t: "重要的" },
    "confirmed": { bm: "disahkan", zh_s: "已确认", zh_t: "已確認" },
    "group": { bm: "kumpulan", zh_s: "集团", zh_t: "集團" },

    // ── Geography ──
    "the mainland": { bm: "tanah besar", zh_s: "大陆", zh_t: "大陸" },
    "mainland": { bm: "tanah besar", zh_s: "大陆", zh_t: "大陸" },
    "international tourists": { bm: "pelancong antarabangsa", zh_s: "国际游客", zh_t: "國際遊客" },
    "tourists": { bm: "pelancong", zh_s: "游客", zh_t: "遊客" },
    "tourist": { bm: "pelancong", zh_s: "游客", zh_t: "遊客" },
    "industrial": { bm: "perindustrian", zh_s: "工业", zh_t: "工業" },
    "manufacturing": { bm: "pembuatan", zh_s: "制造业", zh_t: "製造業" },
    "indigenous": { bm: "orang asal", zh_s: "原住民", zh_t: "原住民" },
    "plantation": { bm: "ladang", zh_s: "种植园", zh_t: "種植園" },
    "rubber": { bm: "getah", zh_s: "橡胶", zh_t: "橡膠" },
    "rice-growing region": { bm: "kawasan penanaman padi", zh_s: "稻米种植区", zh_t: "稻米種植區" },
    "rice belt": { bm: "kawasan padi", zh_s: "稻米带", zh_t: "稻米帶" },
    "near the": { bm: "berhampiran", zh_s: "靠近", zh_t: "靠近" },
    "near": { bm: "berhampiran", zh_s: "靠近", zh_t: "靠近" },
    "border": { bm: "sempadan", zh_s: "边境", zh_t: "邊境" },
    "interior": { bm: "pedalaman", zh_s: "内陆", zh_t: "內陸" },
    "coastal": { bm: "pesisir pantai", zh_s: "沿海", zh_t: "沿海" },
    "highlands": { bm: "tanah tinggi", zh_s: "高地", zh_t: "高地" },
    "mountainous": { bm: "bergunung", zh_s: "山区", zh_t: "山區" },
    "rural": { bm: "luar bandar", zh_s: "乡区", zh_t: "鄉區" },
    "remote": { bm: "terpencil", zh_s: "偏远", zh_t: "偏遠" },
    "island": { bm: "pulau", zh_s: "岛屿", zh_t: "島嶼" },
    "river": { bm: "sungai", zh_s: "河流", zh_t: "河流" },

    // ── Misc phrases ──
    "complex cases": { bm: "kes kompleks", zh_s: "复杂病例", zh_t: "複雜病例" },
    "complex": { bm: "kompleks", zh_s: "复杂", zh_t: "複雜" },
    "cases": { bm: "kes", zh_s: "病例", zh_t: "病例" },
    "range of": { bm: "pelbagai", zh_s: "各种", zh_t: "各種" },
    "also known as": { bm: "juga dikenali sebagai", zh_s: "也称为", zh_t: "也稱為" },
    "known as": { bm: "dikenali sebagai", zh_s: "称为", zh_t: "稱為" },
    "sole hospital": { bm: "satu-satunya hospital", zh_s: "唯一的医院", zh_t: "唯一的醫院" },
    "only hospital": { bm: "satu-satunya hospital", zh_s: "唯一的医院", zh_t: "唯一的醫院" },
    "part of": { bm: "sebahagian daripada", zh_s: "隶属于", zh_t: "隸屬於" },
    "for the state": { bm: "untuk negeri", zh_s: "为该州", zh_t: "為該州" },
    "state capital": { bm: "ibu negeri", zh_s: "州首府", zh_t: "州首府" },
    "both": { bm: "kedua-dua", zh_s: "两者", zh_t: "兩者" },
    "state": { bm: "negeri", zh_s: "州", zh_t: "州" },
    "district": { bm: "daerah", zh_s: "地区", zh_t: "地區" },
    "areas": { bm: "kawasan", zh_s: "地区", zh_t: "地區" },
    "area": { bm: "kawasan", zh_s: "地区", zh_t: "地區" },
    "key": { bm: "utama", zh_s: "重要", zh_t: "重要" },
    "main": { bm: "utama", zh_s: "主要", zh_t: "主要" },
    "and": { bm: "dan", zh_s: "和", zh_t: "和" },

    // ── Specialty names ──
    "emergency medicine & a&e": { bm: "Perubatan Kecemasan & A&E", zh_s: "急诊医学与急诊室", zh_t: "急診醫學與急診室" },
    "general medicine": { bm: "Perubatan Am", zh_s: "普通内科", zh_t: "普通內科" },
    "general surgery": { bm: "Pembedahan Am", zh_s: "普通外科", zh_t: "普通外科" },
    "internal medicine": { bm: "Perubatan Dalaman", zh_s: "内科", zh_t: "內科" },
    "respiratory medicine": { bm: "Perubatan Respiratori", zh_s: "呼吸内科", zh_t: "呼吸內科" },
    "rehabilitation medicine": { bm: "Perubatan Pemulihan", zh_s: "康复医学", zh_t: "康復醫學" },
    "physical medicine & rehabilitation": { bm: "Perubatan Fizikal & Pemulihan", zh_s: "物理医学与康复", zh_t: "物理醫學與康復" },
    "occupational medicine": { bm: "Perubatan Pekerjaan", zh_s: "职业医学", zh_t: "職業醫學" },
    "sports medicine": { bm: "Perubatan Sukan", zh_s: "运动医学", zh_t: "運動醫學" },
    "tropical medicine": { bm: "Perubatan Tropika", zh_s: "热带医学", zh_t: "熱帶醫學" },
    "clinical oncology": { bm: "Onkologi Klinikal", zh_s: "临床肿瘤科", zh_t: "臨床腫瘤科" },
    "radiation oncology": { bm: "Onkologi Radiasi", zh_s: "放射肿瘤科", zh_t: "放射腫瘤科" },
    "surgical oncology": { bm: "Onkologi Pembedahan", zh_s: "外科肿瘤科", zh_t: "外科腫瘤科" },
    "psycho-oncology": { bm: "Psiko-onkologi", zh_s: "心理肿瘤科", zh_t: "心理腫瘤科" },
    "obstetrics & gynaecology": { bm: "Obstetrik & Ginekologi", zh_s: "妇产科", zh_t: "婦產科" },
    "trauma surgery": { bm: "Pembedahan Trauma", zh_s: "创伤外科", zh_t: "創傷外科" },
    "spine surgery": { bm: "Pembedahan Tulang Belakang", zh_s: "脊柱外科", zh_t: "脊柱外科" },
    "infectious disease": { bm: "Penyakit Berjangkit", zh_s: "传染病科", zh_t: "傳染病科" },
    "palliative care": { bm: "Penjagaan Paliatif", zh_s: "缓和疗护", zh_t: "緩和療護" },
    "speech therapy": { bm: "Terapi Pertuturan", zh_s: "言语治疗", zh_t: "言語治療" },
    "basic procedures": { bm: "Prosedur asas", zh_s: "基本程序", zh_t: "基本程序" },
    "paediatrics": { bm: "Pediatrik", zh_s: "儿科", zh_t: "兒科" },
    "orthopaedics": { bm: "Ortopedik", zh_s: "骨科", zh_t: "骨科" },
    "cardiology": { bm: "Kardiologi", zh_s: "心脏内科", zh_t: "心臟內科" },
    "ophthalmology": { bm: "Oftalmologi", zh_s: "眼科", zh_t: "眼科" },
    "gastroenterology": { bm: "Gastroenterologi", zh_s: "肠胃科", zh_t: "腸胃科" },
    "neurology": { bm: "Neurologi", zh_s: "神经内科", zh_t: "神經內科" },
    "nephrology": { bm: "Nefrologi", zh_s: "肾脏内科", zh_t: "腎臟內科" },
    "urology": { bm: "Urologi", zh_s: "泌尿科", zh_t: "泌尿科" },
    "dermatology": { bm: "Dermatologi", zh_s: "皮肤科", zh_t: "皮膚科" },
    "endocrinology": { bm: "Endokrinologi", zh_s: "内分泌科", zh_t: "內分泌科" },
    "psychiatry": { bm: "Psikiatri", zh_s: "精神科", zh_t: "精神科" },
    "rheumatology": { bm: "Reumatologi", zh_s: "风湿科", zh_t: "風濕科" },
    "physiotherapy": { bm: "Fisioterapi", zh_s: "物理治疗", zh_t: "物理治療" },
    "rehabilitation": { bm: "Pemulihan", zh_s: "康复", zh_t: "康復" },
    "radiology": { bm: "Radiologi", zh_s: "放射科", zh_t: "放射科" },
    "emergency": { bm: "Kecemasan", zh_s: "急诊", zh_t: "急診" },
    "gynaecology": { bm: "Ginekologi", zh_s: "妇科", zh_t: "婦科" },
    "trauma": { bm: "Trauma", zh_s: "创伤", zh_t: "創傷" },
    "selected": { bm: "terpilih", zh_s: "部分", zh_t: "部分" },
    "outpatient": { bm: "pesakit luar", zh_s: "门诊", zh_t: "門診" },
    "minor": { bm: "kecil", zh_s: "小型", zh_t: "小型" },
    "procedures": { bm: "prosedur", zh_s: "程序", zh_t: "程序" },
    "very basic": { bm: "sangat asas", zh_s: "非常基本", zh_t: "非常基本" },

    // ── Common values ──
    "yes": { bm: "Ada", zh_s: "有", zh_t: "有" },
    "no": { bm: "Tiada", zh_s: "没有", zh_t: "沒有" },
    "n/a": { bm: "T/B", zh_s: "无", zh_t: "無" },
    "available": { bm: "tersedia", zh_s: "可用", zh_t: "可用" },
    "est.": { bm: "anggaran", zh_s: "约", zh_t: "約" },

    // ── More common words ──
    "apex referral centre for the state": { bm: "pusat rujukan utama untuk negeri", zh_s: "该州的顶级转诊中心", zh_t: "該州的頂級轉診中心" },
    "apex": { bm: "utama", zh_s: "顶级", zh_t: "頂級" },
    "country": { bm: "negara", zh_s: "国家", zh_t: "國家" },
    "nation": { bm: "negara", zh_s: "国家", zh_t: "國家" },
    "care": { bm: "penjagaan", zh_s: "护理", zh_t: "護理" },
    "high-tech": { bm: "berteknologi tinggi", zh_s: "高科技", zh_t: "高科技" },
    "upscale": { bm: "mewah", zh_s: "高档", zh_t: "高檔" },
    "facilities": { bm: "kemudahan", zh_s: "设施", zh_t: "設施" },
    "facility": { bm: "kemudahan", zh_s: "设施", zh_t: "設施" },
    "corridor": { bm: "koridor", zh_s: "走廊", zh_t: "走廊" },
    "region": { bm: "wilayah", zh_s: "区域", zh_t: "區域" },
    "northern": { bm: "utara", zh_s: "北部", zh_t: "北部" },
    "southern": { bm: "selatan", zh_s: "南部", zh_t: "南部" },
    "eastern": { bm: "timur", zh_s: "东部", zh_t: "東部" },
    "western": { bm: "barat", zh_s: "西部", zh_t: "西部" },
    "central": { bm: "tengah", zh_s: "中部", zh_t: "中部" },
    "city": { bm: "bandar", zh_s: "城市", zh_t: "城市" },
    "town": { bm: "pekan", zh_s: "市镇", zh_t: "市鎮" },
    "from": { bm: "dari", zh_s: "从", zh_t: "從" },
    "it": { bm: "ia", zh_s: "它", zh_t: "它" },

    // ── Connectors / prepositions / directions ──
    "one of the": { bm: "salah satu", zh_s: "其中一个", zh_t: "其中一個" },
    "on site": { bm: "di tapak", zh_s: "在院内", zh_t: "在院內" },
    "including": { bm: "termasuk", zh_s: "包括", zh_t: "包括" },
    "located": { bm: "terletak", zh_s: "位于", zh_t: "位於" },
    "north": { bm: "utara", zh_s: "北部", zh_t: "北部" },
    "south": { bm: "selatan", zh_s: "南部", zh_t: "南部" },
    "east": { bm: "timur", zh_s: "东部", zh_t: "東部" },
    "west": { bm: "barat", zh_s: "西部", zh_t: "西部" },
    "most": { bm: "paling", zh_s: "最", zh_t: "最" },
    "with": { bm: "dengan", zh_s: "配备", zh_t: "配備" },
    "are": { bm: "ialah", zh_s: "是", zh_t: "是" },
    "is": { bm: "ialah", zh_s: "是", zh_t: "是" },
    "in": { bm: "di", zh_s: "在", zh_t: "在" },
    "for": { bm: "untuk", zh_s: "为", zh_t: "為" },
    "on": { bm: "di", zh_s: "在", zh_t: "在" },
    "of": { bm: "", zh_s: "的", zh_t: "的" },
    "to": { bm: "ke", zh_s: "至", zh_t: "至" },

    // ── Articles → dropped (CJK & BM have none) ──
    "the": { bm: "", zh_s: "", zh_t: "" },
    "an": { bm: "", zh_s: "", zh_t: "" },
    "a": { bm: "", zh_s: "", zh_t: "" }
  };

  // Build a single length-sorted, case-insensitive pattern for one-pass replace.
  function escapeRegex(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

  var keys = Object.keys(TERMS).sort(function(a, b) { return b.length - a.length; });
  var pattern = new RegExp('\\b(' + keys.map(escapeRegex).join('|') + ')\\b', 'gi');

  // Collapse spaces sitting between two CJK characters (cosmetic, zh only).
  function tidyCJK(str) {
    var prev;
    do { prev = str; str = str.replace(/([一-鿿])[ \t]+([一-鿿])/g, '$1$2'); } while (str !== prev);
    return str;
  }

  function translateText(text, lang) {
    if (!text || typeof text !== 'string') return text || '';
    lang = lang || (window.HI._lang ? window.HI._lang() : 'en');
    if (lang === 'en') return text;
    var out = text.replace(pattern, function(m) {
      var entry = TERMS[m.toLowerCase()];
      if (!entry) return m;
      var v = entry[lang];
      return (v === undefined || v === null) ? m : v;
    });
    out = out.replace(/[ \t]{2,}/g, ' ').replace(/\s+([,.;:!?])/g, '$1').trim();
    if (lang === 'zh_s' || lang === 'zh_t') out = tidyCJK(out);
    return out;
  }

  // Translate every string inside an array (e.g. famousFor list).
  function translateList(arr, lang) {
    if (!Array.isArray(arr)) return [];
    return arr.map(function(s) { return translateText(s, lang); });
  }

  window.HI.tt = translateText;
  window.HI.ttList = translateList;
})();
