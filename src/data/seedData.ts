export interface Committee {
  id: string;
  slug: string;
  name_ar: string;
  name_en: string;
  sort_order: number;
}

export interface TeamMember {
  id: string;
  name_ar: string;
  name_en: string;
  role_ar: string;
  role_en: string;
  committee_id: string;
  photo_url: string | null;
  verification_status: 'verified' | 'needs_verification';
  rights_status: 'cleared' | 'unknown';
  status?: 'draft' | 'published';
}

export interface Activity {
  id: string;
  slug: string;
  title_ar: string;
  title_en: string;
  category: 'conference' | 'camp' | 'training' | 'session' | 'workshop';
  event_state: 'upcoming' | 'registration_open' | 'registration_closed' | 'ongoing' | 'completed' | 'archived';
  status: 'draft' | 'in_review' | 'published' | 'archived';
  relationship_role: 'organized' | 'co-organized' | 'contributed' | 'promoted' | 'participated';
  verification_status: 'verified' | 'needs_verification';
  date_display_ar: string;
  date_display_en: string;
  summary_ar: string;
  summary_en: string;
}

export interface MagazineIssue {
  id: string;
  slug: string;
  issue_number: number;
  title_ar: string;
  title_en: string;
  publication_date: string;
  cover_image_url: string;
  pdf_url: string | null;
  status: 'published' | 'draft';
  verification_status: 'verified';
  description_ar: string;
  description_en: string;
}

export interface ResearchPaper {
  id: string;
  slug: string;
  title_ar: string;
  title_en: string;
  authors_ar: string;
  authors_en: string;
  journal_name: string;
  publication_year: string | number;
  doi: string | null;
  verification_status: 'needs_verification';
  summary_ar: string;
  summary_en: string;
  status?: 'draft' | 'published';
}

export interface PodcastEpisode {
  id?: string;
  slug: string;
  episode_number: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  spotify_url?: string;
  youtube_url?: string;
  facebook_url?: string;
  cover_image_url?: string;
  transcript_ar?: string;
  transcript_en?: string;
  status: 'published' | 'draft';
  verification_status: 'verified' | 'needs_verification';
  duration?: string;
  published_date?: string;
  topics?: { title_ar: string; title_en: string }[];
}

export const siteSettings = {
  site_name_ar: "مبادرة ساي إنفينيتي",
  site_name_en: "Sci Infinity Initiative",
  tagline_ar: "نحو آفاق لا نهائية من المعرفة والبحث العلمي والابتكار",
  tagline_en: "Towards Infinite Horizons of Knowledge, Research, and Innovation",
  official_email: "sci.infinity.official@gmail.com",
  facebook_url: "https://www.facebook.com/profile.php?id=61569116681397",
  instagram_url: "https://www.instagram.com/sci_infinity_official/",
  linkedin_url: "https://www.linkedin.com/company/sci-infinity-initiative/",
  whatsapp_url: "https://wa.me/message/NBVEEWVW4OIZJ1",
  youtube_url: "https://youtu.be/5wuvkOhxNLQ?si=-CqrLg63oNmyGGl3",
  spotify_url: "https://open.spotify.com/show/3pvNAboIN0Gh65kPVPeH8V?si=2FYBOTcASgKHHkcCklM_4Q",
  tiktok_url: "https://www.tiktok.com/@sci_infinity"
};

export const aboutData = {
  mission_ar: "نشر المعرفة وتطوير مواهب الطلاب وإتاحة الفرص التدريبية والبحثية التي تؤهلهم لسوق العمل، وتقديم حلول فعالة لمشاكل المجتمع، وتمكين الطلاب لنشر أبحاثهم في مجلات عالمية.",
  mission_en: "Disseminating knowledge, developing student talents, and providing training and research opportunities that qualify them for the labor market, offering effective solutions to community problems, and empowering students to publish in international journals.",
  goals: [
    { id: "g1", title_ar: "تقديم دورات تدريبية متميزة في مختلف المجالات", title_en: "Providing distinguished training courses across diverse scientific disciplines" },
    { id: "g2", title_ar: "نشر المعرفة في المجالات المختلفة وتطبيقها في الواقع", title_en: "Spreading knowledge across various fields and applying it practically" },
    { id: "g3", title_ar: "تبادل الخبرات بين مختلف التخصصات", title_en: "Facilitating interdisciplinary exchange of expertise" },
    { id: "g4", title_ar: "نشر الوعي العلمي بين عامة الناس", title_en: "Promoting public scientific awareness" },
    { id: "g5", title_ar: "مساعدة الطلاب على تطبيق أفكارهم وتوفير الإمكانيات لنشر أوراق بحثية", title_en: "Supporting students in executing research ideas and publishing papers" },
    { id: "g6", title_ar: "تقديم دورات لتطوير الذات واكتساب المهارات اللازمة لسوق العمل", title_en: "Offering soft skills and career-readiness workshops" },
    { id: "g7", title_ar: "إنشاء مجلة علمية للطلاب والباحثين لنشر أفكارهم", title_en: "Publishing a scientific magazine for students and researchers" },
    { id: "g8", title_ar: "إنشاء حلقة وصل بين الطلاب والباحثين المبدعين لتبادل الخبرات", title_en: "Connecting students with experienced researchers for mentorship" }
  ],
  values: [
    { id: "v1", title_ar: "التميز", title_en: "Excellence", desc_ar: "تشجيع التميز من خلال مسابقات بين الطلاب والباحثين", desc_en: "Fostering excellence through student and researcher competitions" },
    { id: "v2", title_ar: "التطوير", title_en: "Continuous Development", desc_ar: "العمل المستمر على تطوير الأداء والمهارات", desc_en: "Continuous enhancement of performance and scientific skills" },
    { id: "v3", title_ar: "المساواة", title_en: "Equity", desc_ar: "المساواة والعدل بين جميع الأعضاء والباحثين", desc_en: "Equal opportunities and fair treatment for all members" },
    { id: "v4", title_ar: "العمل الجماعي", title_en: "Teamwork", desc_ar: "العمل الجماعي التكاملي بين جميع الفرق واللجان", desc_en: "Integrative teamwork across all committees" },
    { id: "v5", title_ar: "الدعم", title_en: "Support", desc_ar: "توفير جميع المتطلبات والبيئة الداعمة للباحثين", desc_en: "Providing an enabling environment and resources for researchers" },
    { id: "v6", title_ar: "الالتزام", title_en: "Integrity & Commitment", desc_ar: "الالتزام بأخلاقيات البحث العلمي والمهنية", desc_en: "Strict adherence to scientific research ethics and professionalism" }
  ]
};

export const committees: Committee[] = [
  { id: "c_exec", slug: "executive", name_ar: "اللجنة التنفيذية", name_en: "Executive Committee", sort_order: 1 },
  { id: "c_sci", slug: "scientific", name_ar: "قادة الفريق العلمي", name_en: "Scientific Leaders", sort_order: 2 },
  { id: "c_hr", slug: "hr", name_ar: "الموارد البشرية", name_en: "Human Resources", sort_order: 3 },
  { id: "c_pr", slug: "pr", name_ar: "العلاقات العامة", name_en: "Public Relations", sort_order: 4 },
  { id: "c_media", slug: "media", name_ar: "لجنة الإعلام والتصميم", name_en: "Media & Content Committee", sort_order: 5 },
  { id: "c_or", slug: "logistics", name_ar: "لجنة التنظيم واللوجستيات", name_en: "Organization & Logistics", sort_order: 6 }
];

export const teamMembers: TeamMember[] = [
  { id: "tm_1", name_ar: "عبدالرحمن سعد", name_en: "Abdelrahman Saad", role_ar: "الرئيس التنفيذي (CEO)", role_en: "CEO", committee_id: "c_exec", photo_url: "/images/ec.jpg", verification_status: "verified", rights_status: "cleared" },
  { id: "tm_2", name_ar: "حسام الدين", name_en: "Hossam Eldin", role_ar: "مدير العمليات (COO)", role_en: "COO", committee_id: "c_exec", photo_url: "/images/sl.jpg", verification_status: "verified", rights_status: "cleared" },
  { id: "tm_3", name_ar: "ادم وليد", name_en: "Adam Waleed", role_ar: "الأمين العام (GS)", role_en: "General Secretary", committee_id: "c_exec", photo_url: "/images/hr.jpg", verification_status: "verified", rights_status: "cleared" },
  { id: "tm_4", name_ar: "عمرو خالد", name_en: "Amr Khaled", role_ar: "قائد علمي (Scientific Leader)", role_en: "Scientific Leader", committee_id: "c_sci", photo_url: null, verification_status: "verified", rights_status: "cleared" },
  { id: "tm_5", name_ar: "عمر محمد", name_en: "Omar Mohamed", role_ar: "قائد علمي (Scientific Leader)", role_en: "Scientific Leader", committee_id: "c_sci", photo_url: null, verification_status: "verified", rights_status: "cleared" },
  { id: "tm_6", name_ar: "ادهم وليد", name_en: "Adham Waleed", role_ar: "مسؤول الموارد البشرية (Head of HR)", role_en: "Head of HR", committee_id: "c_hr", photo_url: null, verification_status: "verified", rights_status: "cleared" },
  { id: "tm_7", name_ar: "شهد الغندور", name_en: "Shahd El-Ghandour", role_ar: "نائب مسؤول الموارد البشرية", role_en: "Vice Head of HR", committee_id: "c_hr", photo_url: null, verification_status: "verified", rights_status: "cleared" },
  { id: "tm_8", name_ar: "اسراء سعد", name_en: "Esraa Saad", role_ar: "نائب مسؤول الموارد البشرية", role_en: "Vice Head of HR", committee_id: "c_hr", photo_url: null, verification_status: "verified", rights_status: "cleared" },
  { id: "tm_9", name_ar: "منى دهب", name_en: "Mona Dahab", role_ar: "مسؤول العلاقات العامة (Head of PR)", role_en: "Head of PR", committee_id: "c_pr", photo_url: "/images/pr.jpg", verification_status: "verified", rights_status: "cleared" },
  { id: "tm_10", name_ar: "شهد ايمن", name_en: "Shahd Ayman", role_ar: "نائب مسؤول العلاقات العامة", role_en: "Vice Head of PR", committee_id: "c_pr", photo_url: null, verification_status: "verified", rights_status: "cleared" },
  { id: "tm_11", name_ar: "محمود فرحات", name_en: "Mahmoud Farahat", role_ar: "مسؤول لجنة الإعلام (Head of Media)", role_en: "Head of Media", committee_id: "c_media", photo_url: "/images/media.jpg", verification_status: "verified", rights_status: "cleared" },
  { id: "tm_12", name_ar: "اية محمد", name_en: "Aya Mohamed", role_ar: "مسؤول كتابة المحتوى", role_en: "Head of Content Writing", committee_id: "c_media", photo_url: null, verification_status: "verified", rights_status: "cleared" },
  { id: "tm_13", name_ar: "سيف خالد", name_en: "Seif Khaled", role_ar: "مدير المحتوى (Content Manager)", role_en: "Content Manager", committee_id: "c_media", photo_url: null, verification_status: "verified", rights_status: "cleared" },
  { id: "tm_14", name_ar: "غنى قاسم", name_en: "Ghena Qasim", role_ar: "مسؤول التصميم (Head of Design)", role_en: "Head of Design", committee_id: "c_media", photo_url: null, verification_status: "verified", rights_status: "cleared" },
  { id: "tm_15", name_ar: "سعد فكري", name_en: "Saad Fikry", role_ar: "مسؤول المونتاج (Head of Video Editing)", role_en: "Head of Video Editing", committee_id: "c_media", photo_url: null, verification_status: "verified", rights_status: "cleared" },
  { id: "tm_16", name_ar: "يوستينا ماجد", name_en: "Youstina Maged", role_ar: "مسؤول صناعة المحتوى", role_en: "Head of Content Creation", committee_id: "c_media", photo_url: null, verification_status: "verified", rights_status: "cleared" },
  { id: "tm_17", name_ar: "احمد الباز", name_en: "Ahmed El-Baz", role_ar: "مسؤول التنظيم (Head of OR)", role_en: "Head of Organization", committee_id: "c_or", photo_url: "/images/or.jpg", verification_status: "verified", rights_status: "cleared" },
  { id: "tm_18", name_ar: "الزهراء حسين", name_en: "Al-Zahraa Hussein", role_ar: "نائب مسؤول التنظيم", role_en: "Vice Head of OR", committee_id: "c_or", photo_url: null, verification_status: "verified", rights_status: "cleared" }
];

export const activities: Activity[] = [
  {
    id: "act-000",
    slug: "1st-forum-specialized-programs",
    title_ar: "المنتدى العلمي الأول",
    title_en: "The First Scientific Forum",
    category: "conference",
    event_state: "completed",
    status: "published",
    relationship_role: "co-organized",
    verification_status: "verified",
    date_display_ar: "فعالية سنوية سابقة",
    date_display_en: "Past Annual Forum",
    summary_ar: "النسخة الافتتاحية الأولى من المنتدى العلمي السنوي للمبادرة، والتي شملت منافسات طلابية وعروض أبحاث وبوسترات علمية بمشاركة واسعة من الباحثين والطلاب.",
    summary_en: "The inaugural edition of the annual scientific forum featuring student research presentations, poster competitions, and academic evaluation panels."
  },
  {
    id: "act-001",
    slug: "2nd-forum-specialized-programs",
    title_ar: "المنتدى الثاني لطلاب البرامج النوعية",
    title_en: "2nd Forum for Students of Specialized Programs",
    category: "conference",
    event_state: "completed",
    status: "published",
    relationship_role: "co-organized",
    verification_status: "verified",
    date_display_ar: "فعالية سنوية سابقة",
    date_display_en: "Past Annual Forum",
    summary_ar: "تنظيم مسابقات البوسترات البحثية ومشاريع ريادة الأعمال والابتكار لطلاب البرامج النوعية والتخصصات العلمية، بمشاركة مئات الطلاب وعشرات الفرق البحثية.",
    summary_en: "Co-organizing scientific poster competitions and entrepreneurship innovation tracks for specialized programs and scientific disciplines."
  },
  {
    id: "act-002",
    slug: "entrepreneurship-business-camp",
    title_ar: "معسكر ريادة الأعمال وإدارة الأعمال",
    title_en: "Entrepreneurship & Business Camp",
    category: "camp",
    event_state: "completed",
    status: "published",
    relationship_role: "organized",
    verification_status: "verified",
    date_display_ar: "15 سبتمبر (فعالية سنوية سابقة)",
    date_display_en: "15 September (Past Annual Camp)",
    summary_ar: "معسكر تدريبي مكثف يشمل 8 محاور: العقلية الريادية، من المشكلة إلى الفكرة، دراسة السوق والعملاء، نموذج العمل BMC، التسويق وبناء الهوية، الإدارة المالية، بناء MVP، والمبيعات والعرض.",
    summary_en: "Intensive 8-session camp covering entrepreneurial mindset, ideation, market research, BMC, marketing & branding, startup finance, MVP development, and pitching."
  },
  {
    id: "act-003",
    slug: "ideation-camp-creativa",
    title_ar: "معسكر توليد الأفكار (Ideation Camp) بالتعاون مع كريتيفا",
    title_en: "Ideation Camp — Sci Infinity × Creativa Hub",
    category: "camp",
    event_state: "completed",
    status: "published",
    relationship_role: "co-organized",
    verification_status: "verified",
    date_display_ar: "27 يناير",
    date_display_en: "27 January",
    summary_ar: "ورش عمل مكثفة بالشراكة مع مراكز إبداع مصر الرقمية (كريتيفا) في التفكير التصميمي (Design Thinking)، ونموذج العمل التجاري، وبناء العروض التقديمية (Pitch Deck).",
    summary_en: "Intensive workshops in collaboration with Creativa Hub covering Design Thinking, Business Model Canvas, and Pitch Deck presentation."
  },
  {
    id: "act-004",
    slug: "water-analysis-treatment-workshop",
    title_ar: "دورة التحاليل المائية ومعالجة المياه",
    title_en: "Water Analysis & Water Treatment Training",
    category: "training",
    event_state: "completed",
    status: "published",
    relationship_role: "organized",
    verification_status: "verified",
    date_display_ar: "تدريب معملي تخصصي",
    date_display_en: "Specialized Lab Training",
    summary_ar: "تدريب عملي معملي على طرق فحص جودة المياه والبارامترات الكيميائية والبيولوجية لمعالجة المياه الصناعية ومياه الشرب وفق المعايير القياسية.",
    summary_en: "Hands-on laboratory training on chemical and biological parameters for water quality and industrial wastewater/potable water treatment."
  },
  {
    id: "act-005",
    slug: "bioinformatics-session",
    title_ar: "جلسة المعلوماتية الحيوية (Bioinformatics)",
    title_en: "Bioinformatics Scientific Session",
    category: "session",
    event_state: "completed",
    status: "published",
    relationship_role: "organized",
    verification_status: "verified",
    date_display_ar: "جلسة علمية متخصصة",
    date_display_en: "Scientific Session",
    summary_ar: "مقدمة متقدمة حول تحليل البيانات الجينومية والبروتينية، واستخدام أدوات المحاذاة وقواعد البيانات البيولوجية مثل NCBI وUniProt.",
    summary_en: "Advanced introduction to genomic and proteomic data analysis, sequence alignment tools, and biological databases including NCBI and UniProt."
  },
  {
    id: "act-006",
    slug: "arps-workshop-medical-physics-2026",
    title_ar: "ورشة ARPS للتطورات في الفيزياء الطبية والفيزياء الحيوية 2026",
    title_en: "ARPS Workshop on Advances in Medical Physics & Biophysics 2026",
    category: "workshop",
    event_state: "registration_closed",
    status: "published",
    relationship_role: "promoted",
    verification_status: "verified",
    date_display_ar: "21–22 نوفمبر 2026 (التسجيل مغلق)",
    date_display_en: "21–22 November 2026 (Registration Closed)",
    summary_ar: "ورشة عمل متقدمة في أحدث تطبيقات الفيزياء الطبية والفيزياء الحيوية الإشعاعية. موعد انتهاء التسجيل كان 20 أكتوبر 2026 والتسجيل حالياً مغلق رسمياً.",
    summary_en: "Advanced workshop exploring radiation medical physics and biophysics innovations. Registration closed on 20 October 2026."
  },
  {
    id: "act-007",
    slug: "cosmetics-detergents-analytical-workshop",
    title_ar: "ورشة تصنيع مستحضرات التجميل والمنظفات الصناعية والأجهزة التحليلية",
    title_en: "Cosmetics & Industrial Detergents Manufacturing & Analytical Equipment Workshop",
    category: "workshop",
    event_state: "completed",
    status: "published",
    relationship_role: "organized",
    verification_status: "verified",
    date_display_ar: "ورشة عمل تطبيقية",
    date_display_en: "Applied Technical Workshop",
    summary_ar: "تدريب تطبيقي على صياغة وتصنيع مستحضرات العناية الشخصية والمنظفات، مع تعريف متقدم بأجهزة التحليل الطيفي مثل مطياف الامتصاص الذري (Atomic Absorption Spectroscopy).",
    summary_en: "Practical training on formulation of personal care products and detergents, combined with orientation on analytical instrumentation including Atomic Absorption Spectroscopy."
  },
  {
    id: "act-008",
    slug: "systems-biology-session",
    title_ar: "جلسة البيولوجيا النظمية (Systems Biology)",
    title_en: "Systems Biology Scientific Session",
    category: "session",
    event_state: "completed",
    status: "published",
    relationship_role: "organized",
    verification_status: "verified",
    date_display_ar: "جلسة علمية تخصصية",
    date_display_en: "Scientific Session",
    summary_ar: "استعراض لنمذجة الشبكات الحيوية والتفاعلات الخلوية المعقدة باستخدام الطرق الرياضية والحوسبة الحيوية لفهم سلوك الكائنات على مستوى النظم الكاملة.",
    summary_en: "Exploration of biological network modeling and cellular pathways using mathematical approaches and computational biology."
  },
  {
    id: "act-009",
    slug: "plant-biotechnology-session",
    title_ar: "جلسة التكنولوجيا الحيوية النباتية (Plant Biotechnology)",
    title_en: "Plant Biotechnology Scientific Session",
    category: "session",
    event_state: "completed",
    status: "published",
    relationship_role: "organized",
    verification_status: "verified",
    date_display_ar: "جلسة علمية تخصصية",
    date_display_en: "Scientific Session",
    summary_ar: "مناقشة أحدث تقنيات زراعة الأنسجة النباتية، والتعديل الجيني لتحسين المحاصيل ومقاومة الإجهادات البيئية وإنتاج المركبات الثانوية القيمة.",
    summary_en: "Discussion of modern plant tissue culture techniques, genetic engineering for crop improvement, and bioactive secondary metabolite synthesis."
  },
  {
    id: "act-010",
    slug: "scientific-figure-preparation",
    title_ar: "ورشة إعداد الرسوم والأشكال العلمية للمجلات الدولية",
    title_en: "Scientific Figure & Graphical Abstract Preparation Workshop",
    category: "training",
    event_state: "completed",
    status: "published",
    relationship_role: "organized",
    verification_status: "verified",
    date_display_ar: "تدريب أكاديمي متخصص",
    date_display_en: "Specialized Academic Training",
    summary_ar: "تدريب متخصص لتعليم الطلاب والباحثين كيفية تصميم الرسوم التوضيحية والأشكال البيانية والمخططات البصرية (Graphical Abstracts) وفقاً لمعايير دور النشر العالمية المرموقة.",
    summary_en: "Specialized training guiding student researchers on producing publication-grade figures, diagrams, and graphical abstracts meeting top international journal guidelines."
  },
  {
    id: "act-011",
    slug: "biosensors-nanotech-session",
    title_ar: "جلسة المستشعرات الحيوية وتقنية النانو (Biosensors)",
    title_en: "Biosensors & Nanotechnology Session",
    category: "session",
    event_state: "completed",
    status: "published",
    relationship_role: "organized",
    verification_status: "verified",
    date_display_ar: "جلسة علمية تخصصية",
    date_display_en: "Scientific Session",
    summary_ar: "استعراض لآليات عمل المستشعرات الكهروكيميائية والبصرية، واستخدام الجسيمات النانوية في التشخيص الطبي والكشف المبكر عن المؤشرات الحيوية.",
    summary_en: "Review of electrochemical and optical biosensor mechanisms and nanomaterial utilization in biomedical diagnostic applications."
  },
  {
    id: "act-012",
    slug: "stem-cells-regenerative-session",
    title_ar: "جلسة الخلايا الجذعية والطب التجديدي (Stem Cells)",
    title_en: "Stem Cells & Regenerative Medicine Session",
    category: "session",
    event_state: "completed",
    status: "published",
    relationship_role: "organized",
    verification_status: "verified",
    date_display_ar: "جلسة علمية تخصصية",
    date_display_en: "Scientific Session",
    summary_ar: "محاضرة علمية حول تصنيفات الخلايا الجذعية، وآليات التمايز الخلوي، وتطبيقات هندسة الأنسجة الواعدة في علاج الأمراض المستعصية وأخلاقيات البحث في هذا المجال.",
    summary_en: "Scientific exploration of stem cell classification, cell differentiation kinetics, tissue engineering frontiers, and bioethical frameworks."
  },
  {
    id: "act-013",
    slug: "medical-rep-career-gateway",
    title_ar: "بوابة العمل كمندوب طبي ودعائي (The Gateway to Medical Rep)",
    title_en: "The Gateway to Medical Representative Career",
    category: "training",
    event_state: "completed",
    status: "published",
    relationship_role: "organized",
    verification_status: "verified",
    date_display_ar: "برنامج تأهيل مهني",
    date_display_en: "Career Readiness Program",
    summary_ar: "جلسة إرشاد وتأهيل مهني لخريجي كليات العلوم والصيدلة، تغطي مهارات التواصل العلمي، تقنيات البيع الدوائي، وتحديات سوق العمل الطبي في مصر والوطن العربي.",
    summary_en: "Professional career readiness program for science and pharmacy students covering medical communication, pharmaceutical sales techniques, and market dynamics."
  },
  {
    id: "act-014",
    slug: "pr-training-program",
    title_ar: "برنامج تدريب العلاقات العامة والتواصل المؤسسي (PR Training)",
    title_en: "PR & Corporate Communications Training Program",
    category: "training",
    event_state: "completed",
    status: "published",
    relationship_role: "organized",
    verification_status: "verified",
    date_display_ar: "برنامج تدريبي تخصصي",
    date_display_en: "Specialized Training Program",
    summary_ar: "سلسلة تدريبية متكاملة حول مهارات العلاقات العامة، وإدارة الشراكات المؤسسية، والتواصل العلمي الفعال، وبناء الشبكات المهنية.",
    summary_en: "Comprehensive training series on public relations strategies, institutional partnership management, and professional science communication."
  },
  {
    id: "act-015",
    slug: "scientific-research-program",
    title_ar: "برنامج البحث العلمي وإعداد الباحثين (Scientific Research Program)",
    title_en: "Scientific Research Program & Scholar Preparation",
    category: "training",
    event_state: "completed",
    status: "published",
    relationship_role: "organized",
    verification_status: "verified",
    date_display_ar: "مسار بحثي مكثف",
    date_display_en: "Intensive Research Track",
    summary_ar: "برنامج تأهيلي منهجي لتأسيس الباحثين الشباب في صياغة الفرضيات العلمية، ومراجعة الأدبيات، ومنهجيات البحث، واستيفاء معايير النشر الدولي.",
    summary_en: "Systematic qualification program training young researchers on formulating scientific hypotheses, literature review, and academic methodology."
  },
  {
    id: "act-016",
    slug: "rd-training-series",
    title_ar: "تدريب البحث والتطوير (R&D Training)",
    title_en: "Research & Development (R&D) Training",
    category: "training",
    event_state: "completed",
    status: "published",
    relationship_role: "organized",
    verification_status: "verified",
    date_display_ar: "تدريب تطبيقي",
    date_display_en: "Applied Training Series",
    summary_ar: "سلسلة جلسات تدريبية متخصصة في البحث والتطوير، وربط مخرجات المعامل العلمية بالابتكار التطبيقي والصناعي وحل المشكلات التكنولوجية.",
    summary_en: "Specialized training series in R&D, connecting laboratory breakthroughs to industrial applications and technological solutions."
  }
];

export const magazineIssues: MagazineIssue[] = [
  {
    id: "fudul-01",
    slug: "fudul-issue-1",
    issue_number: 1,
    title_ar: "مجلة فضول — العدد الأول",
    title_en: "Fudul Magazine — Issue 1",
    publication_date: "2024",
    cover_image_url: "/images/magazine/1.png",
    pdf_url: null,
    status: "published",
    verification_status: "verified",
    description_ar: "العدد الأول من مجلة فضول العلمية الصادرة عن مبادرة ساي إنفينيتي، يضم مقالات علمية ورؤى بحثية كتبها طلاب وباحثو المبادرة.",
    description_en: "The inaugural issue of Fudul Science Magazine published by Sci Infinity, featuring student scientific essays and research insights."
  }
];

export const researchAchievements: ResearchPaper[] = [
  {
    id: "res-001",
    slug: "green-synthesis-nanocomposites",
    title_ar: "التخليق الأخضر للمتراكبات النانوية من مستخلص الخروب لتطبيقات مضادات الأكسدة والبكتيريا",
    title_en: "Green synthesis of Ag/TiO₂ and Ag/Co/TiO₂ nanocomposites from Ceratonia siliqua extract for antioxidant and antibacterial applications",
    authors_ar: "دارين أحمد مصطفى وآخرون",
    authors_en: "Daren Ahmed Mostafa et al.",
    journal_name: "Chemistry Select",
    publication_year: "2024",
    doi: null,
    verification_status: "needs_verification",
    summary_ar: "بحث علمي منشور يستعرض التخليق الحيوي للمتراكبات النانوية باستخدام مستخلص نبات الخروب وتقييم فاعليتها البيولوجية.",
    summary_en: "Research evaluating the biosynthesized nanocomposites using carob extract and assessing biological efficacy."
  }
];

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "ep-001",
    slug: "episode-1",
    episode_number: 1,
    title_ar: "",
    title_en: "",
    description_ar: "",
    description_en: "",
    spotify_url: "",
    youtube_url: "",
    facebook_url: "",
    status: "published",
    verification_status: "needs_verification",
    published_date: "2024"
  },
  {
    id: "ep-002",
    slug: "episode-2",
    episode_number: 2,
    title_ar: "",
    title_en: "",
    description_ar: "",
    description_en: "",
    spotify_url: "",
    youtube_url: "",
    facebook_url: "",
    status: "published",
    verification_status: "needs_verification",
    published_date: "2024"
  },
  {
    id: "ep-003",
    slug: "episode-3",
    episode_number: 3,
    title_ar: "",
    title_en: "",
    description_ar: "",
    description_en: "",
    spotify_url: "",
    youtube_url: "",
    facebook_url: "",
    status: "published",
    verification_status: "needs_verification",
    published_date: "2024"
  },
  {
    id: "ep-004",
    slug: "episode-4",
    episode_number: 4,
    title_ar: "",
    title_en: "",
    description_ar: "",
    description_en: "",
    spotify_url: "",
    youtube_url: "",
    facebook_url: "",
    status: "published",
    verification_status: "needs_verification",
    published_date: "2024"
  }
];
