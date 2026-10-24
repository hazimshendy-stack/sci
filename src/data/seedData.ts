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
  location_ar?: string;
  location_en?: string;
  registration_url?: string;
  facebook_url?: string;
  facebook_posts?: { group?: string; label_ar: string; label_en: string; url: string; }[];
  facebook_speaker_urls?: string[];
  youtube_url?: string;
  youtube_playlist_url?: string;
  youtube_videos?: { session_num: number; title_ar: string; title_en: string; url: string; }[];
  facebook_videos?: { label_ar: string; label_en: string; url: string; }[];
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
  facebook_url?: string;
  verification_status: 'verified' | 'needs_verification';
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
  guest_ar?: string;
  guest_en?: string;
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
    "id": "act-001",
    "slug": "arps-workshop-medical-physics-2026",
    "title_ar": "ورشة ARPS للتطورات في الفيزياء الطبية والفيزياء الحيوية 2026",
    "title_en": "ARPS Workshop on Advances in Medical Physics & Biophysics 2026",
    "category": "workshop",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "promoted",
    "verification_status": "verified",
    "date_display_ar": "21–22 نوفمبر 2026 (فعالية سابقة مؤرشفة)",
    "date_display_en": "21–22 November 2026 (Archived Past Event)",
    "location_ar": "كلية العلوم، جامعة المنصورة",
    "location_en": "Faculty of Science, Mansoura University",
    "registration_url": "https://indico.cern.ch/event/1730735/",
    "summary_ar": "ورشة علمية متخصصة تسلط الضوء على أحدث التطورات في مجالات الفيزياء الطبية والفيزياء الحيوية الإشعاعية، بتنظيم الجمعية الفيزيائية العربية (ARPS) بالتعاون مع جامعة المنصورة ومستشفى 57357 لعلاج سرطان الأطفال. تغطي الورشة مجالات العلاج الإشعاعي، والطب النووي، والنانوتكنولوجي، والفيزياء الحيوية الحاسوبية والذكاء الاصطناعي.",
    "summary_en": "A specialized scientific workshop highlighting breakthroughs in medical physics and radiation biophysics, organized by the Arab Physical Society (ARPS) with Mansoura University and Children's Cancer Hospital Egypt 57357. Topics encompass radiotherapy, nuclear medicine, nanotechnology for targeted drug delivery, and computational AI in biophysics.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02GR63V27ALBRFK5Z55Gv3utGDmKCAiHGdMFBSkh3e4g9F9GqMW8QbM52LEvrqrkQel&id=61569116681397",
    "facebook_speaker_urls": [
      "https://www.facebook.com/permalink.php?story_fbid=pfbid02UwmhELURs3qVeti8Dns3nNpDE8rs5hHuQKU1UntfrryMzHgNXM8AugZjKeViPPY3l&id=61569116681397",
      "https://www.facebook.com/permalink.php?story_fbid=pfbid02RCYzqEJhLa9Q3LN3twNLeRSxe3p6S7Lz881SSeiU1DBYDXuaeZnPDyaAr46zSnY3l&id=61569116681397",
      "https://www.facebook.com/permalink.php?story_fbid=pfbid0fabGDTknZkQ97FLjLGN2zjGNS19fbKbPaMMQwUui768kVNvekRPYnmgyfgBVbKM8l&id=61569116681397",
      "https://www.facebook.com/permalink.php?story_fbid=pfbid02PAiSDnayU1sF86jSy64peFboYNfdE3Uh5DpFnFptEDzZst7rgbEkbMMjn2n1bH7wl&id=61569116681397",
      "https://www.facebook.com/permalink.php?story_fbid=pfbid0T4tbUjYPYmsGsEZG58Yvcx7123WRFRzybayrZbeiZH3Wjv9gf9vE38gByCVutDQRl&id=61569116681397",
      "https://www.facebook.com/permalink.php?story_fbid=pfbid0iDbS6AVwNfAbBzS4ovCW5kVVw5wh2fVabuxKQSszuZko93yGrNRrEnfLi77UnUYSl&id=61569116681397",
      "https://www.facebook.com/permalink.php?story_fbid=pfbid037oT4FMeymYogx1XVp4Y9hKWb1K6GGNjeCxBZbfKdouFW7nYbjt8zWag7JtttFDgul&id=61569116681397"
    ]
  },
  {
    "id": "act-002",
    "slug": "entrepreneurship-business-camp",
    "title_ar": "معسكر ريادة الأعمال وإدارة الأعمال",
    "title_en": "Entrepreneurship & Business Camp",
    "category": "camp",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "15 سبتمبر (فعالية سنوية سابقة)",
    "date_display_en": "15 September (Past Annual Camp)",
    "location_ar": "أونلاين (Online)",
    "location_en": "Online Program",
    "registration_url": "https://forms.gle/Wcnwe1d5JFDQf5hS9",
    "summary_ar": "معسكر تدريبي مكثف متكامل عبر الإنترنت يتضمن 8 جلسات مسجلة لنقل المشارك من مرحلة الفكرة إلى تأسيس شركة ناشئة، وشمل محاور: العقلية الريادية، من المشكلة إلى الفكرة، دراسة السوق والعملاء، نموذج العمل التجاري (BMC)، التسويق وبناء الهوية، الإدارة المالية، بناء النموذج الأولي (MVP)، واستراتيجيات المبيعات والعرض.",
    "summary_en": "An intensive 8-session online training program taking participants from ideation to launching a viable business venture. Core modules: Entrepreneurial Mindset, Problem-to-Idea, Market & Customer Discovery, Business Model Canvas (BMC), Branding & Marketing, Business Finance, MVP Development, and Sales & Pitching.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0MEzbeSkbLPbMnTMucyqSvPaovzpmvmnhNdLSsYFTAbevwY98hXW7RPK6CeUJcAsbl&id=61569116681397",
    "facebook_posts": [
      {
        "label_ar": "إعلان المتحدث والمحاور",
        "label_en": "Speaker & Topics Announcement",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0FSjdzRvWtGan8y1P2yDokv7C3wD2GpKrypewHm1hUm6cP2rpJpoEWMfaGYYfiaYel&id=61569116681397"
      }
    ],
    "youtube_videos": [
      {
        "session_num": 1,
        "title_ar": "الجلسة 1: العقلية الريادية (Entrepreneurial Mindset)",
        "title_en": "Session 1: Entrepreneurial Mindset",
        "url": "https://youtu.be/pxT9ojrQpTQ?si=3Aoo8V64SYL2ZIpH"
      },
      {
        "session_num": 2,
        "title_ar": "الجلسة 2: من المشكلة إلى الفكرة (From Problem to Idea)",
        "title_en": "Session 2: From Problem to Idea",
        "url": "https://youtu.be/mkaImjryS7w?si=tc7vFZH_kcTrQGea"
      },
      {
        "session_num": 3,
        "title_ar": "الجلسة 3: دراسة السوق والعملاء (Understanding Market & Customers)",
        "title_en": "Session 3: Understanding Market & Customers",
        "url": "https://youtu.be/NWqwxg7Cx6U?si=QPTtePIVxWyVoY_P"
      },
      {
        "session_num": 4,
        "title_ar": "الجلسة 4: نموذج العمل التجاري (Business Model Canvas)",
        "title_en": "Session 4: Business Model Canvas",
        "url": "https://youtu.be/eHWqaJpkOnY?si=DY1YiDP-OYhsBXO9"
      },
      {
        "session_num": 5,
        "title_ar": "الجلسة 5: التسويق وبناء الهوية (Branding & Marketing)",
        "title_en": "Session 5: Branding & Marketing",
        "url": "https://youtu.be/7o3nCxYqEAk?si=vy70k8JL0_dzGGDr"
      },
      {
        "session_num": 6,
        "title_ar": "الجلسة 6: الإدارة المالية للشركات الناشئة (Business Finance)",
        "title_en": "Session 6: Business Finance",
        "url": "https://youtu.be/N7jj0j859u0?si=cTxfpibeffEweQDP"
      },
      {
        "session_num": 7,
        "title_ar": "الجلسة 7: بناء النموذج الأولي القابل للتطبيق (Building Your MVP)",
        "title_en": "Session 7: Building Your MVP",
        "url": "https://youtu.be/ZdX2o3kX9eo?si=rO7OPW572El0TOei"
      },
      {
        "session_num": 8,
        "title_ar": "الجلسة 8: استراتيجيات المبيعات والعرض (Learn to Sell & Pitching)",
        "title_en": "Session 8: Learn to Sell & Pitching",
        "url": "https://youtu.be/Zyl7ebHssGI?si=b_8tt0QrStl4Nq2G"
      }
    ]
  },
  {
    "id": "act-003",
    "slug": "2nd-forum-specialized-programs",
    "title_ar": "المنتدى الثاني لطلاب البرامج النوعية",
    "title_en": "2nd Forum for Students of Specialized Programs",
    "category": "conference",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "co-organized",
    "verification_status": "verified",
    "date_display_ar": "14 أبريل (فعالية سنوية سابقة)",
    "date_display_en": "14 April (Past Annual Forum)",
    "location_ar": "كلية العلوم، جامعة المنصورة",
    "location_en": "Faculty of Science, Mansoura University",
    "summary_ar": "النسخة الثانية من المنتدى العلمي السنوي بتنظيم ساي إنفينيتي بالتعاون مع كلية العلوم بجامعة المنصورة، لدعم طلاب البرامج النوعية في عرض أبحاثهم ومشاريعهم العلمية وابتكاراتهم الريادية أمام لجان تحكيم وأساتذة متخصصين، وتضمين مسابقات البوسترات البحثية والعروض التقديمية ومسارات ريادة الأعمال.",
    "summary_en": "The 2nd edition of the annual scientific forum co-organized by Sci Infinity and the Faculty of Science, empowering students of specialized academic programs to defend scientific posters, deliver oral research presentations, and pitch innovative entrepreneurial ventures to expert academic panels.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid064m5gBECWwSVJDGp4KCaQxFQagTgCfL6FuckE2hUAUx3q8RdMkW8vfQk7tdf81AGl&id=61569116681397",
    "facebook_posts": [
      {
        "group": "programs",
        "label_ar": "البرامج الأكاديمية المشاركة",
        "label_en": "Participating Academic Programs",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0tQkPDCszdybWvRwjJJ57dgSujz6HczD3gEmVdctFWkotN9giMwxnMrqndfuvrTQil&id=61569116681397"
      },
      {
        "group": "judges",
        "label_ar": "لجنة التحكيم العلمية",
        "label_en": "Scientific Judging Panel",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0xix1DWyfXk6oddMasGKGXchW6QBa1NxfpKMnTXaq2uzJSTCtsgorrhLuVjr24ydml&id=61569116681397"
      },
      {
        "group": "highlights",
        "label_ar": "لقطات وتغطية الفعالية 1",
        "label_en": "Event Highlights 1",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0Mix9eKxtznwNWgqy5n8Wk4Z2RxiUVjwMjM5Mwc2gqgmg9nEDjcPY9XuWVBaWjeczl&id=61569116681397"
      },
      {
        "group": "highlights",
        "label_ar": "لقطات وتغطية الفعالية 2",
        "label_en": "Event Highlights 2",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02rDJL1UCqo8d5f6mB4FkMsoZznwYrzK93JPN3pQwDYiMJXtTQc1Nnde1dN56TDEWil&id=61569116681397"
      },
      {
        "group": "highlights",
        "label_ar": "لقطات وتغطية الفعالية 3",
        "label_en": "Event Highlights 3",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0mTeuHA9r2KvTLRJPyhFJQoCwU5U4YPtsEGVxRREQ8NR3qsfJLofNytmbgEew7Rizl&id=61569116681397"
      },
      {
        "group": "awards",
        "label_ar": "إعلان الجوائز والتكريم 1",
        "label_en": "Awards & Recognition 1",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0x7nRPVbLSAMd9yy2eJWkr6MTDRDFGJvoB3oVuQ1XeXUKU9qDy9HoQEjDRcZrq85Tl&id=61569116681397"
      },
      {
        "group": "awards",
        "label_ar": "إعلان الجوائز والتكريم 2",
        "label_en": "Awards & Recognition 2",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0eEqJDvk9j6c3ev3iTvtxuWduaV4BWxqVJCRe4ewSW1vqbdN8j4mAbXHohVpRGV8gl&id=61569116681397"
      },
      {
        "group": "awards",
        "label_ar": "إعلان الجوائز والتكريم 3",
        "label_en": "Awards & Recognition 3",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid03FVSwxG2mCJ4YDHbEjstEJnjzZrnzHj6pMVGwH1XzkyEJTBLC6MU3axAUk7dWHiXl&id=61569116681397"
      },
      {
        "group": "awards",
        "label_ar": "إعلان الجوائز والتكريم 4",
        "label_en": "Awards & Recognition 4",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02bKZGqoeRAHjaYXC9ZSCVTjysN2e8uRMVtrxPjh8ZSL2vitn6aYjbjiASAaq9F5EUl&id=61569116681397"
      }
    ],
    "facebook_videos": [
      {
        "label_ar": "مشاريع وأفكار الطلاب المشاركين 1",
        "label_en": "Student Innovation Pitch 1",
        "url": "https://www.facebook.com/reel/1635142731078363/"
      },
      {
        "label_ar": "مشاريع وأفكار الطلاب المشاركين 2",
        "label_en": "Student Innovation Pitch 2",
        "url": "https://www.facebook.com/reel/976317005331327/"
      },
      {
        "label_ar": "مشاريع وأفكار الطلاب المشاركين 3",
        "label_en": "Student Innovation Pitch 3",
        "url": "https://www.facebook.com/reel/1506566750811971/"
      },
      {
        "label_ar": "مشاريع وأفكار الطلاب المشاركين 4",
        "label_en": "Student Innovation Pitch 4",
        "url": "https://www.facebook.com/reel/989981223399905/"
      }
    ]
  },
  {
    "id": "act-004",
    "slug": "etss-entrepreneurship-training-stem",
    "title_ar": "تدريب ريادة الأعمال لطلاب STEM (برنامج ETSS)",
    "title_en": "ETSS — Entrepreneurship Training for STEM Students",
    "category": "camp",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "participated",
    "verification_status": "verified",
    "date_display_ar": "27–28 أبريل (فعالية سابقة)",
    "date_display_en": "27–28 April (Past Event)",
    "location_ar": "مدينة زويل للعلوم والتكنولوجيا والابتكار",
    "location_en": "Zewail City of Science, Technology and Innovation",
    "summary_ar": "مشاركة ساي إنفينيتي في برنامج تدريب ريادة الأعمال لطلاب مجالات العلوم والتكنولوجيا والهندسة والرياضيات (STEM)، بهدف ترجمة الأفكار والبحوث العلمية إلى مشاريع قابلة للتطبيق بالسوق. شمل التدريب على مدار يومين تحليل الأسواق والمنافسين، وتطوير نماذج الأعمال والتمويل، وبناء العروض التقديمية الاحترافية.",
    "summary_en": "Sci Infinity's active participation in the ETSS program empowering STEM students to translate academic research and scientific concepts into viable commercial projects. The intensive 2-day curriculum covered market analysis, business model design, intellectual property and funding avenues, culminating in professional venture pitches."
  },
  {
    "id": "act-005",
    "slug": "orientation-day-sci-infinity",
    "title_ar": "يوم الترحيب والتعريف بفريق المبادرة (Orientation Day)",
    "title_en": "Sci Infinity Orientation Day",
    "category": "session",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "فعالية سنوية سابقة",
    "date_display_en": "Past Annual Event",
    "location_ar": "مقر الفعاليات، جامعة المنصورة",
    "location_en": "Mansoura University Events Hall",
    "summary_ar": "يوم تفاعلي جمع أعضاء المبادرة الجدد والقدامى للاحتفاء بإنجازات قادة وأعضاء الفريق السابقين، واستعراض الرؤية والخطط المستقبلية، وتعزيز الروابط المجتمعية والتكامل بين كافة لجان ساي إنفينيتي.",
    "summary_en": "A foundational gathering uniting new and veteran members to honor former leaders, share the strategic vision for forthcoming research initiatives, and reinforce camaraderie and inter-committee cohesion within the growing Sci Infinity family.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02E1JG4NQYBRVApm7dHQDXL9urgPtxxLe91FPe3RiTr6NUNYSDyh1n2csKSbmysG9ol&id=61569116681397"
  },
  {
    "id": "act-006",
    "slug": "ideation-camp-creativa",
    "title_ar": "معسكر توليد الأفكار (Ideation Camp) — بالتعاون مع كريتيفا",
    "title_en": "Ideation Camp — Sci Infinity × Creativa Hub",
    "category": "camp",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "co-organized",
    "verification_status": "verified",
    "date_display_ar": "27 يناير (فعالية سابقة)",
    "date_display_en": "27 January (Past Camp)",
    "location_ar": "مراكز إبداع مصر الرقمية (Creativa Hub Mansoura)",
    "location_en": "Creativa Hub Mansoura",
    "summary_ar": "معسكر تدريبي مكثف في ريادة الأعمال والابتكار بالشراكة مع مراكز إبداع مصر الرقمية كريتيفا، استهدف تدريب المشاركين على التفكير التصميمي (Design Thinking)، وتصميم نموذج العمل التجاري (BMC)، ودراسة السوق، وبناء العروض التقديمية (Pitch Deck).",
    "summary_en": "An innovation-driven camp in partnership with Creativa Hub Mansoura, mentoring students on structured ideation, Design Thinking methodologies, Business Model Canvas development, market analysis, and pitch deck presentations.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid04yJvGRj98dbE5V1q9cwAxg9FPfH6HJCmLzBNu3wpnVK6drmZ9MpvUhfnMWsjyBwMl&id=61569116681397",
    "facebook_posts": [
      {
        "label_ar": "أبرز لقطات ونتائج معسكر توليد الأفكار",
        "label_en": "Ideation Camp Highlights",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0n3BVoNrf2yfapmp3Y7PVKVn8aiA9t6FHiyJJMLMrmtYRGCG82dUJ6oKZ1xsV9H5Ql&id=61569116681397"
      }
    ]
  },
  {
    "id": "act-007",
    "slug": "atomic-absorption-spectrometer-course",
    "title_ar": "دورة عملية على جهاز الامتصاص الذري (AAS)",
    "title_en": "A Practical Course on an Atomic Absorption Spectrometer",
    "category": "workshop",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "30 نوفمبر – 1 ديسمبر (فعالية سابقة)",
    "date_display_en": "30 Nov – 1 Dec (Past Course)",
    "location_ar": "قاعة د. عمر الشهابي، كلية العلوم، جامعة المنصورة",
    "location_en": "Omar El-Shehabi Hall, Faculty of Science, Mansoura University",
    "summary_ar": "دورة تدريبية معملية تخصصية حول جهاز مطياف الامتصاص الذري (Atomic Absorption Spectrometry)، لتدريب الطلاب والباحثين على قياس تراكيز العناصر الثقيلة والمعادن (مثل الرصاص Pb، والحديد Fe، والكادميوم Cd) في التطبيقات التحليلية والبحثية، بتقديم استشارية التحاليل الكيميائية د. شيرين السيد حسن.",
    "summary_en": "A hands-on laboratory course on Atomic Absorption Spectrometry (AAS) dedicated to measuring trace heavy metal concentrations (such as Pb, Fe, and Cd) in research and analytical assays, instructed by Chemical Analysis Consultant Dr. Sherine El-Sayed Hassan.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0bzKwmjqUKkjZv2LFeUvnTM19xbChFjaNyso3mQZafkHX1mAshUAgxgbUVdnmM2dil&id=61569116681397",
    "facebook_posts": [
      {
        "label_ar": "تغطية ولقطات الدورة المعملية",
        "label_en": "Practical Lab Highlights",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02Ba6BXZB3dokxLCDp3aDTVSgjaDQ8iQodnP6GH3SPKfpHmVf891d7iyYZhtdAEGrhl&id=61569116681397"
      }
    ]
  },
  {
    "id": "act-008",
    "slug": "industrial-detergents-workshop",
    "title_ar": "ورشة عمل في المنظفات الصناعية",
    "title_en": "Workshop in Industrial Detergents",
    "category": "workshop",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "2–3 ديسمبر (فعالية سابقة)",
    "date_display_en": "2–3 December (Past Workshop)",
    "location_ar": "قاعة د. عمر الشهابي، كلية العلوم، جامعة المنصورة",
    "location_en": "Omar El-Shehabi Hall, Faculty of Science, Mansoura University",
    "summary_ar": "ورشة عمل تطبيقية تخصصية تناولت أسس الكيمياء الصناعية لتحضير سوائل ومنظفات الغسيل والتنظيف الصناعي، وكيفية ضبط التركيبات والخواص الفيزيوكيميائية ومعايير الجودة والتصنيع، بإشراف المدرسين المساعدين عمر عبدالعزيز البنا ومحمود محمد نبيل.",
    "summary_en": "An applied industrial chemistry workshop covering chemical formulations, manufacturing processes, physicochemical property control, and quality assurance for industrial and commercial cleaning detergents, led by Ass. Lecturers Omar Abdelaziz El-Banna and Mahmoud Mohamed Nabil.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02jdHLxY9CMrXS3UFHoqZiJcDj2ehro5d3LTeyxywAWZ7UeUCUnEi4qCxbeca3W16sl&id=61569116681397"
  },
  {
    "id": "act-009",
    "slug": "chemistry-cosmetic-industry-nov",
    "title_ar": "الكيمياء في صناعة مستحضرات التجميل (ورشة نوفمبر)",
    "title_en": "Chemistry in the Cosmetic Industry (November Workshop)",
    "category": "workshop",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "25–26 نوفمبر (فعالية سابقة)",
    "date_display_en": "25–26 November (Past Workshop)",
    "location_ar": "قاعة د. عمر الشهابي، كلية العلوم، جامعة المنصورة",
    "location_en": "Omar El-Shehabi Hall, Faculty of Science, Mansoura University",
    "summary_ar": "ورشة عمل على مدار يومين استعرضت التطبيقات الكيميائية لصياغة منتجات العناية بالبشرة والشعر والمكياج، والأسس العلمية لاختيار المكونات الفعالة ومعايير الأمان والجودة، بتقديم د. ضحى الجندي مؤسسة علامة Green Panda.",
    "summary_en": "A comprehensive 2-day technical workshop exploring chemical formulations in skincare, haircare, and cosmetic products, focusing on safe active ingredients and formulation science, delivered by Dr. Doha El-Gendy, founder of Green Panda.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02Fwg8xv2dUMXuupSY2wa79ej38pdAvCztqga4c4Jtsh6LP9KUFkbK5VKXe6QgSh6Ml&id=61569116681397",
    "facebook_posts": [
      {
        "label_ar": "لقطات وتغطية ورشة صناعة مستحضرات التجميل",
        "label_en": "Cosmetic Workshop Highlights",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02e3oWXUFrNNAzRyahj6o94ubiqHGZ7nsCaBwxm2PnMt1GbCATtVXxT5e44UVoyJWgl&id=61569116681397"
      }
    ]
  },
  {
    "id": "act-010",
    "slug": "human-pluripotent-stem-cells-session",
    "title_ar": "الخلايا الجذعية متعددة القدرات وعلاج أمراض ضمور الشبكية",
    "title_en": "Human Pluripotent Stem Cells: A Versatile Platform for Cell Therapy and Retinal Degeneration",
    "category": "session",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "co-organized",
    "verification_status": "verified",
    "date_display_ar": "27 أكتوبر 2025 (جلسة سابقة)",
    "date_display_en": "27 October 2025 (Past Session)",
    "location_ar": "أونلاين (Microsoft Teams)",
    "location_en": "Online (Microsoft Teams)",
    "summary_ar": "جلسة علمية أونلاين بالتعاون مع Science Mania Club وHaloul Science Club وIRM، قدمها الباحث د. عبدالله أبو الحسن (طالب دكتوراه بجامعة باريس ساكلاي بفرنسا ومستفيد من منحة الطهطاوي). ناقشت الجلسة أحدث منصات الخلايا الجذعية البشرية متعددة القدرات (hPSCs) وتطبيقاتها في العلاج الخلوي والطب التجديدي لأمراض تنكس وضمور الشبكية والأمراض الوراثية المستعصية.",
    "summary_en": "An online scientific session co-organized with Science Mania Club, Haloul Science Club, and IRM, delivered by doctoral researcher Abdallah Abuelhassan (Université d'Évry–Paris-Saclay). Explored human pluripotent stem cell (hPSC) biotherapy platforms for regenerative medicine and retinal degenerative conditions.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid05SHTpV9USTi9MUfxXoskaoQnNZAQxqdAQvbznEEQrNNy6U9E1eBL7T9vHFoC6HwYl&id=61569116681397"
  },
  {
    "id": "act-011",
    "slug": "chemical-biosensors-environmental-applications",
    "title_ar": "التطورات الحديثة في المستشعرات الكيميائية والبيولوجية للتطبيقات البيئية",
    "title_en": "Recent Advances in Chemical and Bio-Sensors for Environmental Applications",
    "category": "session",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "جلسة علمية متخصصة (مؤرشفة)",
    "date_display_en": "Specialized Scientific Session (Archived)",
    "location_ar": "أونلاين (Online)",
    "location_en": "Online Session",
    "summary_ar": "جلسة علمية افتراضية قدمها د. محمد حمدان (المدرس المساعد في الكيمياء التحليلية والبيئية بجامعة بدر بالقاهرة وصاحب أكثر من 20 بحثاً دولياً)، وتناولت ابتكارات أجهزة الاستشعار الكيميائية والبصرية والبيولوجية المستخدمة في الرصد البيئي، ومعالجة المياه والملوثات الصناعية.",
    "summary_en": "A virtual scientific lecture by Dr. Mohamed Hemdan (Assistant Lecturer at Badr University in Cairo with 20+ international peer-reviewed papers), exploring breakthroughs in chemical and optical bio-sensors for environmental surveillance and industrial effluent remediation.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02NiBECYBjsXyGHRvpGwmNar1C2eto6x1MGgePx1asumCmKPgx34yjvKxDUJHET7v1l&id=61569116681397"
  },
  {
    "id": "act-012",
    "slug": "bioinformatics-drug-discovery-session",
    "title_ar": "تطبيقات المعلوماتية الحيوية في اكتشاف الأدوية وأبحاث الأمراض",
    "title_en": "Applications of Bioinformatics in Drug Discovery & Disease Research",
    "category": "session",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "7 أكتوبر (جلسة سابقة)",
    "date_display_en": "7 October (Past Session)",
    "location_ar": "أونلاين (Online)",
    "location_en": "Online Session",
    "summary_ar": "جلسة علمية افتراضية قدمها د. كريم الهواري، تناولت دور تحليلات البيانات الحيوية، والالتحام الجزيئي (Molecular Docking)، ومحاكاة الديناميكا الجزيئية في تصميم وتطوير العقاقير الطبية الجديدة وفهم الطفرات الجينية لأمراض الأورام والجهاز العصبي.",
    "summary_en": "An online scientific session delivered by Dr. Karim El-Hawary on computational biology, molecular docking, and molecular dynamics simulations accelerating modern pharmaceutical discovery and oncological genetic mutation screening.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02G6dYMXv9bcz9GFtKHzbbx594EuW2vpU7UxTKGdwxNWaUgi3yomQGPVjMDhVWCjiTl&id=61569116681397"
  },
  {
    "id": "act-013",
    "slug": "medical-rep-career-gateway",
    "title_ar": "بوابة العمل كمندوب طبي والتميز في العناية الشخصية",
    "title_en": "The Gateway to Medical Rep & Personal Care Excellence",
    "category": "training",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "23 سبتمبر 2025 (فعالية سابقة)",
    "date_display_en": "23 September 2025 (Past Event)",
    "location_ar": "قاعة أ.د. أحمد أمين حمزة، كلية العلوم، جامعة المنصورة",
    "location_en": "Prof. Ahmed Amin Hamza Hall, Faculty of Science, Mansoura University",
    "summary_ar": "يوم تأهيل مهني شمل محورين متكاملين: الأول حول دخول مجال المندوب الطبي الدوائي ومهارات التسويق الصيدلي قدمه د. سيد طلعت (District Manager في Pureté Group)، والثاني حول علوم العناية بالبشرة والأمراض الجلدية قدمته استشارية الجلدية والتجميل والليزر د. رشا فتحي فودة.",
    "summary_en": "A dual-track career guidance event covering pharmaceutical sales and medical representation by Dr. Sayed Talaat (District Manager at Pureté Group), and dermatological skincare formulation science by Dr. Rasha Fathy Fouda.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02E33cBcUw2rpFXeoSYxrk77YAfr27jmEm13H53knzs79ZWQuzoy7mrJ3b8wiW2vqkl&id=61569116681397",
    "facebook_posts": [
      {
        "label_ar": "منشور الشراكة والتدريب الصيدلي",
        "label_en": "Pharmaceutical Partnership Post",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02LBWR6MaR59mAdzSdyxNhLewomDcaPsVmdqfrs8ZK3jiiKr3hcFKvzZpuUEcMqeS2l&id=61569116681397"
      }
    ]
  },
  {
    "id": "act-014",
    "slug": "scientific-figures-biorender-workshop",
    "title_ar": "تصميم الرسوم والأشكال العلمية في الأوراق البحثية عبر BioRender",
    "title_en": "How to Create Scientific Figures in Research Papers by BioRender",
    "category": "training",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "25 سبتمبر (فعالية مسجلة سابقة)",
    "date_display_en": "25 September (Past Recorded Session)",
    "location_ar": "أونلاين (Online)",
    "location_en": "Online Recorded Session",
    "summary_ar": "تدريب تطبيقي على كيفية تصميم الرسوم التوضيحية والأشكال البيانية والمخططات البصرية (Graphical Abstracts) وفقاً للمعايير القياسية لدور النشر والمجلات الدولية باستخدام منصة BioRender، بتقديم د. هند هشام محمود (المدرس المساعد بكلية التكنولوجيا الحيوية بجامعة بدر).",
    "summary_en": "Hands-on training by Dr. Hend Hesham Mahmoud (Assistant Lecturer, Faculty of Biotechnology, Badr University) guiding researchers on creating publication-grade scientific diagrams, illustrations, and graphical abstracts using BioRender.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0NPinYGtta3LNJnrFMcao5ooQMcMohkb5J2Q5uH4xRZ2qitEyHFgU4LREifLuWwnul&id=61569116681397",
    "youtube_url": "https://youtu.be/wAAs8McZNF4?si=R-bZcFLJCM4YvrTl"
  },
  {
    "id": "act-015",
    "slug": "rd-detergents-cosmetics-session",
    "title_ar": "البحث والتطوير (R&D) في صناعة المنظفات ومستحضرات التجميل",
    "title_en": "Research & Development in the Detergents and Cosmetics Industry",
    "category": "session",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "جلسة تدريبية مسجلة (مؤرشفة)",
    "date_display_en": "Recorded Training Session (Archived)",
    "location_ar": "أونلاين (Online)",
    "location_en": "Online Recorded Session",
    "summary_ar": "جلسة تدريبية مسجلة قدمها د. محمد البنا (مدرس الكيمياء الصيدلية والصناعية بكلية العلوم جامعة عين شمس واستشاري R&D)، استعرضت منهجيات البحث والتطوير الصناعي، وتصميم تركيبات منافسة بالأسواق، وكيفية تأسيس وإدارة أقسام الـ R&D في الشركات الكيميائية.",
    "summary_en": "An in-depth training session delivered by Dr. Mohamed El-Banna (Lecturer of Pharmaceutical & Industrial Chemistry, Ain Shams University; R&D Consultant), covering industrial formulation engineering, competitive product development, and establishing corporate R&D divisions.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02M87WVgwjFnwyEuF5fy1bcnfqosERzRncGW9CNJ9kkYUmKSe9ZYbgp6mqgE5rc1ZSl&id=61569116681397",
    "youtube_url": "https://youtu.be/MrxWBJ8BobQ?si=JUnzMOreqeOtijvE"
  },
  {
    "id": "act-016",
    "slug": "plant-biotechnology-applications",
    "title_ar": "تطبيقات التكنولوجيا الحيوية النباتية (Plant Biotechnology)",
    "title_en": "Application on Plant Biotechnology",
    "category": "session",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "10 سبتمبر (جلسة سابقة)",
    "date_display_en": "10 September (Past Session)",
    "location_ar": "أونلاين (Online)",
    "location_en": "Online Session",
    "summary_ar": "جلسة علمية متخصصة قدمها أ.م.د. محمد عنان (أستاذ البيولوجيا الجزيئية المساعد)، استعرضت تطبيقات الهندسة الوراثية والتكنولوجيا الحيوية النباتية في تحسين المحاصيل ومقاومة الإجهادات البيئية وإنتاج المركبات الحيوية ذات القيمة الاقتصادية.",
    "summary_en": "A scientific seminar by Assoc. Prof. Dr. Mohamed Anan on modern plant biotechnology and genetic engineering applications targeting crop resilience, biotic stress tolerance, and biosynthesis of commercially valuable secondary metabolites.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0vrWA6GXTfHA8fVCAohG6cdfFMDtdrKcz68MSS1muV4Qy6pwuFuWYb6nP3hmD7NoLl&id=61569116681397"
  },
  {
    "id": "act-017",
    "slug": "synthetic-biology-fields-applications",
    "title_ar": "البيولوجيا التخليقية: المجالات والتطبيقات (Synthetic Biology)",
    "title_en": "Synthetic Biology: Fields and Applications",
    "category": "session",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "جلسة علمية تخصصية (مؤرشفة)",
    "date_display_en": "Specialized Scientific Session (Archived)",
    "location_ar": "أونلاين (Online)",
    "location_en": "Online Session",
    "summary_ar": "جلسة علمية قدمها الباحث د. طارق شعبان (باحث الدكتوراه بجامعة مونستر بألمانيا والمتخصص في البيولوجيا التخليقية وتصميم النظم الحيوية)، وتناولت هندسة الدوائر الجينية والمسارات البيولوجية الاصطناعية لإيجاد حلول جذرية للتحديات الطبية والصناعية والبيئية.",
    "summary_en": "An advanced scientific seminar by doctoral researcher Tarek Shaaban (University of Münster, Germany) introducing foundational principles of synthetic biology, artificial biological circuit design, and bioengineering applications for complex healthcare and environmental challenges.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02moy2SsGs7Lw7fkQrj22gA8eHif9p2Ako5AFeqwGLXsavxuCo3zjBaSkhSxu68TMSl&id=61569116681397"
  },
  {
    "id": "act-018",
    "slug": "chemistry-cosmetic-industry-july",
    "title_ar": "الكيمياء في صناعة مستحضرات التجميل (ورشة يوليو)",
    "title_en": "Chemistry in the Cosmetic Industry (July Workshop)",
    "category": "workshop",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "27 يوليو (فعالية سابقة)",
    "date_display_en": "27 July (Past Workshop)",
    "location_ar": "قاعة د. عمر الشهابي، كلية العلوم، جامعة المنصورة",
    "location_en": "Omar El-Shehabi Hall, Faculty of Science, Mansoura University",
    "summary_ar": "ورشة عمل صيفية تطبيقية قدمتها د. ضحى الجندي (مؤسسة علامة Green Panda)، ركزت على كيمياء مستحضرات العناية بالبشرة والشعر، والتراكيب المستحلبة، واختبارات الثبات والرقابة النوعية وفق المعايير التصنيعية.",
    "summary_en": "A summer practical workshop led by Dr. Doha El-Gendy on cosmetic emulsion formulation, active ingredient compatibility, and stability testing standards in personal care manufacturing.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0VEhZ2yMfCBuGowPNzH6TRLXgFdRUpqH3ZKjrEi3g2Z3CsdTNYs7wjjwGqVDLQwekl&id=61569116681397",
    "facebook_posts": [
      {
        "label_ar": "تغطية ولقطات ورشة يوليو لمستحضرات التجميل",
        "label_en": "July Workshop Highlights",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02VVzHA87wjX9DWdE7Wju5tMi4KSSZpzYjPsTTYpLgdKWV4hxPgQucdBrr9EsYUrVql&id=61569116681397"
      }
    ]
  },
  {
    "id": "act-019",
    "slug": "water-analysis-treatment-training",
    "title_ar": "تدريب تحليل ومعالجة المياه (Water Analysis & Treatment)",
    "title_en": "Water Analysis and Treatment Training",
    "category": "training",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "برنامج تدريب معملي وميداني (مؤرشف)",
    "date_display_en": "Field & Laboratory Training Program (Archived)",
    "location_ar": "المعامل المركزية ومحطات شركة مياه الشرب والصرف الصحي بالدقهلية",
    "location_en": "Central Laboratories & Treatment Plants, Dakahlia Water Company",
    "summary_ar": "برنامج تدريبي تطبيقي شامل تضمن الجوانب المعملية والميدانية للتحاليل الكيميائية العضوية وغير العضوية، والفحوصات الفيزيائية والبيولوجية والبكتريولوجية لمياه الشرب ومياه الصرف، مع زيارات ميدانية لمحطات المعالجة بالتعاون مع نخبة من الخبراء.",
    "summary_en": "A comprehensive field and laboratory training curriculum exploring organic/inorganic water chemical assays, biological testing, and municipal/industrial wastewater treatment technologies conducted across certified laboratories and treatment facilities.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid01Czt3J1fKmNTdxDdqA1zz6kPkip75j6dLmu4b2LKGa7hq9BQPWj12Kp6SDHWe7mEl&id=61569116681397"
  },
  {
    "id": "act-020",
    "slug": "1st-forum-specialized-programs",
    "title_ar": "المنتدى العلمي الأول لطلاب البرامج النوعية: من الفكرة إلى الإنجاز",
    "title_en": "From Idea to Achievement — The First Scientific Forum for Students of Specialized Programs",
    "category": "conference",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "co-organized",
    "verification_status": "verified",
    "date_display_ar": "27 مايو 2025 (فعالية سنوية سابقة)",
    "date_display_en": "27 May 2025 (Past Annual Forum)",
    "location_ar": "قاعة أ.د. أحمد أمين حمزة، كلية العلوم، جامعة المنصورة",
    "location_en": "Prof. Ahmed Amin Hamza Hall, Faculty of Science, Mansoura University",
    "summary_ar": "النسخة الافتتاحية للمنتدى العلمي السنوي لطلاب البرامج النوعية بتنظيم كلية العلوم وساي إنفينيتي، وشمل مشاركة 7 برامج أكاديمية متخصصة (التكنولوجيا الحيوية، البتروكيماويات، جيولوجيا البترول، الكيمياء الحيوية التطبيقية، كيمياء الأدلة الجنائية، الفيزياء الطبية، وتحاليل العلوم البيولوجية) لعرض مشاريعهم وأبحاثهم الطلابية.",
    "summary_en": "The inaugural edition of the Annual Scientific Forum organized by the Faculty of Science and Sci Infinity, bringing together students from 7 specialized academic tracks (Biotechnology, Petrochemicals, Petroleum Geology, Applied Biochemistry, Forensic Chemistry, Medical Physics, and Biological Analyses) to present applied research and innovative projects.",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02jsb9YKempPcQbwEZCM1HAR7UweyA1q3e3aJDQeJGjUV7XKvdDxa4cKqgaju78dF2l&id=61569116681397",
    "facebook_posts": [
      {
        "label_ar": "جدول وبرنامج فعاليات المنتدى الأول",
        "label_en": "1st Forum Program & Schedule",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid02zs7uzjDFevaPEGS85cYJvH9mQL4v54xxUcuxsAhSmgN7V3HNGTVKAVBaZT1n5eupl&id=61569116681397"
      },
      {
        "label_ar": "إعلان الفائزين والجوائز والتكريم",
        "label_en": "Awards & Winners Announcement",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0HN2B4wzrtuZsZiiQbQAjcKqtoZZAj51nSyxHphw1haAaD5bKsvejHYh7u7Kf8JVrl&id=61569116681397"
      }
    ]
  },
  {
    "id": "act-021",
    "slug": "pr-training-program",
    "title_ar": "تدريب العلاقات العامة والتواصل المؤسسي (PR Training)",
    "title_en": "Public Relations (PR) Training",
    "category": "training",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "برنامج تدريبي مسجل (سلسلة كاملة)",
    "date_display_en": "Recorded Training Program (Complete Series)",
    "location_ar": "أونلاين — قناة YouTube الرسمية",
    "location_en": "Online — Official YouTube Series",
    "summary_ar": "سلسلة تدريبية متكاملة مسجلة في مهارات العلاقات العامة، وإدارة الشراكات المؤسسية والتواصل الإعلامي الفعال للأنشطة والمنظمات العلمية، متوفرة كقائمة تشغيل كاملة وحلقات تدريبية مستقلة.",
    "summary_en": "A comprehensive recorded training series on corporate communication, public relations, institutional partnerships, and professional media outreach for scientific platforms.",
    "youtube_playlist_url": "https://youtube.com/playlist?list=PLP9MaYpjJjn4&si=QgzA-4WLTKO3t5HU",
    "youtube_videos": [
      {
        "session_num": 1,
        "title_ar": "تدريب العلاقات العامة — الحلقة 1",
        "title_en": "PR Training — Episode 1",
        "url": "https://youtu.be/hNCy_B48yc4?si=AhB-MMCYY4BnIp3z"
      },
      {
        "session_num": 2,
        "title_ar": "تدريب العلاقات العامة — الحلقة 2",
        "title_en": "PR Training — Episode 2",
        "url": "https://youtu.be/Q-3X-RgdiZA?si=jbDHFqMcQ2iWb98V"
      },
      {
        "session_num": 3,
        "title_ar": "تدريب العلاقات العامة — الحلقة 3",
        "title_en": "PR Training — Episode 3",
        "url": "https://youtu.be/HB7c-k3CVoE?si=3ZUzEIFKLyrI0SXw"
      }
    ]
  },
  {
    "id": "act-022",
    "slug": "scientific-research-program",
    "title_ar": "برنامج البحث العلمي وإعداد الباحثين",
    "title_en": "Scientific Research Program",
    "category": "training",
    "event_state": "completed",
    "status": "published",
    "relationship_role": "organized",
    "verification_status": "verified",
    "date_display_ar": "مسار تدريبي مسجل (5 جلسات)",
    "date_display_en": "Recorded Research Track (5 Sessions)",
    "location_ar": "أونلاين — قائمة YouTube الرسمية",
    "location_en": "Online — Official YouTube Series",
    "summary_ar": "برنامج تأهيلي منهجي مسجل عبر يوتيوب لتأسيس الباحثين والطلاب في صياغة الفرضيات العلمية، ومراجعة الأوراق البحثية، ومنهجيات التحليل، واستيفاء متطلبات النشر الدولي في المجلات المصنفة عالمياً.",
    "summary_en": "A structured video training program preparing student scholars in academic literature review, formulating scientific hypotheses, rigorous data methodologies, and authoring publication-ready manuscripts for international journals.",
    "youtube_playlist_url": "https://youtube.com/playlist?list=PLc_jtoYpLR04&si=8KDT-Dk4wa_qgH2j",
    "youtube_videos": [
      {
        "session_num": 1,
        "title_ar": "برنامج البحث العلمي — الجلسة 1",
        "title_en": "Scientific Research — Session 1",
        "url": "https://youtu.be/QKG5t7X8jKo?si=ifOKaqWJcCAlRpIx"
      },
      {
        "session_num": 2,
        "title_ar": "برنامج البحث العلمي — الجلسة 2",
        "title_en": "Scientific Research — Session 2",
        "url": "https://youtu.be/Ph82VZPxdPk?si=ESk9-9XQbMJrhMpA"
      },
      {
        "session_num": 3,
        "title_ar": "برنامج البحث العلمي — الجلسة 3",
        "title_en": "Scientific Research — Session 3",
        "url": "https://youtu.be/Kyvy2u8mptA?si=MS9eTriN76lxyCMK"
      },
      {
        "session_num": 4,
        "title_ar": "برنامج البحث العلمي — الجلسة 4",
        "title_en": "Scientific Research — Session 4",
        "url": "https://youtu.be/EbRFj5pSCWU?si=8q1KbG3YeTU1YtYB"
      },
      {
        "session_num": 5,
        "title_ar": "برنامج البحث العلمي — الجلسة 5",
        "title_en": "Scientific Research — Session 5",
        "url": "https://youtu.be/BdD5Rr0eTuQ?si=pu8zhCR6mNVDd9aJ"
      }
    ]
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
    "id": "res-001",
    "slug": "green-synthesis-nanocomposites",
    "title_ar": "التخليق الأخضر للمتراكبات النانوية من مستخلص الخروب لتطبيقات مضادات الأكسدة والبكتيريا",
    "title_en": "Green Synthesis of Ag/TiO₂ and Ag/Co/TiO₂ Nanocomposites Using Carob Pod Extract for Antioxidant and Antibacterial Applications",
    "authors_ar": "دارين أحمد مصطفى (Daren Ahmed Mostafa) وباحثون مشاركون",
    "authors_en": "Daren Ahmed Mostafa et al.",
    "journal_name": "ChemistrySelect",
    "publication_year": "2025",
    "doi": "10.1002/slct.202503394",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0coiyuhPfEimyHqgFHP9vLyMXiXmXU3XPK3RZovSUgrYjqNCpTqbSkzSQJ1GkgdBVl&id=61569116681397",
    "verification_status": "verified",
    "status": "published",
    "summary_ar": "تم تطوير بروتوكول تخليق أخضر مستدام لتحضير المتراكبات النانوية الثنائية (Ag/TiO₂) والثلاثية (Ag/Co/TiO₂) باستخدام مستخلص قرون نبات الخروب (Ceratonia siliqua) كعامل اختزال واستقرار طبيعي، ويعد أول استخدام موثق لمستخلص الخروب في هذا النوع من المتراكبات النانوية. أظهرت الفحوصات الطيفية والمجهرية تعزيزاً ملحوظاً في النشاط المضاد للأكسدة والنشاط المضاد للبكتيريا لمتراكب Ag/Co/TiO₂ بقطر تثبيط بلغ 21.0 ± 1.34 مم ضد بكتيريا الإشريكية القولونية (E. coli) و25.0 ± 1.72 مم ضد المكورات العنقودية الذهبية (S. aureus)، مما يقدم مساراً حيوياً واعداً ومنخفض التكلفة لتصنيع مواد نانوية متوافقة حيوياً.",
    "summary_en": "A green protocol was developed to synthesize Ag/TiO₂ and Ag/Co/TiO₂ nanocomposites using Ceratonia siliqua (carob) pod extract as a sustainable reducing and stabilizing agent, representing the first reported use of carob extract for binary and ternary metal-oxide nanocomposites. Characterized via spectroscopic and microscopic techniques, the Ag/Co/TiO₂ nanocomposite demonstrated enhanced antioxidant and antibacterial inhibition zones of 21.0 ± 1.34 mm against Escherichia coli and 25.0 ± 1.72 mm against Staphylococcus aureus, offering a cost-effective route for biocompatible nanomaterials."
  },
  {
    "id": "res-002",
    "slug": "lactate-dehydrogenase-cancer-metabolism",
    "title_ar": "إنزيم نازع هيدروجين اللاكتات (LDH) ومسارات أيض السرطان والفرص العلاجية الحديثة",
    "title_en": "Lactate dehydrogenase drives cancer metabolism and offers new therapeutic opportunities",
    "authors_ar": "يوستينا ماجد (Youstina Maged) وباحثون مشاركون",
    "authors_en": "Youstina Maged et al.",
    "journal_name": "SN Applied Sciences (Springer Nature) — Q2 Journal",
    "publication_year": "2025",
    "doi": "10.1007/s42452-025-08114-7",
    "facebook_url": "https://www.facebook.com/permalink.php?story_fbid=pfbid0ybx6RQ5WvEesm9kF5zAiXnv7nyvzmntCDNZ46XmXqdVaU32mpvD8UecSbjKrnefNl&id=61569116681397",
    "verification_status": "verified",
    "status": "published",
    "summary_ar": "ورقة بحثية مرجعية محكمة منشورة في مجلة دولية مصنفة Q2، تستعرض الدور المحوري لإنزيم نازع هيدروجين اللاكتات (LDH) في تشخيص وعلاج الأورام السرطانية. توضح الورقة تحول النظرة العلمية الحديثة للاكتات من مجرد ناتج نفايات للتنفس اللاهوائي إلى وقود أيضي محوري، وتناقش نموذج المكوك الميتوكوندري للاكتات (Mitochondrial Lactate Shuttle) وتعاون الأيض داخل الأورام. كما تستعرض الورقة استراتيجيات استهداف نظائر LDHA، ومثبطات مثل الأوكسامات وFX11، واستخدام الهيدروكسيدات المزدوجة الطبقات (LDH) وجسيمات النحاس النانوية كناقلات نانوية واعدة للعقاقير وmiRNAs.",
    "summary_en": "A peer-reviewed scientific review published in a Q2 international journal examining the diagnostic and therapeutic significance of Lactate Dehydrogenase (LDH) in cancer metabolism. The article articulates how modern oncology views lactate as vital metabolic fuel rather than a waste byproduct, detailing the mitochondrial lactate shuttle model, tumor metabolic cooperation, LDHA targeting inhibitors (oxamates, FX11), and emerging nanocarrier platforms (Layered Double Hydroxides and copper nanoparticles) for drug and miRNA delivery."
  }
];

export const podcastEpisodes: PodcastEpisode[] = [
  {
    "id": "ep-001",
    "slug": "episode-1",
    "episode_number": 1,
    "title_ar": "سوق العمل والعمل الحر وعقلية ريادة الأعمال — د. محمد منسان",
    "title_en": "Labor Market Dynamics, Freelancing & Entrepreneurial Mindset — Dr. Mohamed Mansan",
    "description_ar": "الحلقة الأولى من بودكاست ساي كاست تستضيف د. محمد منسان لمناقشة المتغيرات المتسارعة في سوق العمل الحديث، وفرص العمل الحر، وبناء العقلية الريادية لدى الطلاب والباحثين لتحويل المهارات الأكاديمية إلى مشاريع وأعمال مؤثرة.",
    "description_en": "The inaugural episode of SciCast featuring Dr. Mohamed Mansan, discussing modern labor market shifts, freelancing opportunities, and developing an entrepreneurial mindset among students and researchers.",
    "youtube_url": "https://youtu.be/5wuvkOhxNLQ?si=7GSzmz1hkoJ9BgCT",
    "spotify_url": "https://open.spotify.com/episode/0x3QcAoPMJLLTO1XQ7YdF8?si=A3zTHEkBTYeZmTAKs6SfnQ",
    "facebook_url": "https://www.facebook.com/61569116681397/videos/3008092756039920/",
    "guest_ar": "د. محمد منسان",
    "guest_en": "Dr. Mohamed Mansan",
    "status": "published",
    "verification_status": "verified",
    "published_date": "2024"
  },
  {
    "id": "ep-002",
    "slug": "episode-2",
    "episode_number": 2,
    "title_ar": "رسم الطريق في مرحلة الجامعة — د. أحمد فكري",
    "title_en": "رسم الطريق في مرحلة الجامعة — Dr. Ahmed Fekry | SciCast Episode 2",
    "description_ar": "حلقة ثرية مع د. أحمد فكري حول كيفية استثمار سنوات الدراسة الجامعية، وبناء خارطة طريق واضحة تجمع بين التفوق الأكاديمي، واكتساب المهارات العملية، والمشاركة في الأنشطة البحثية لتحديد المسار المهني المستقبلي.",
    "description_en": "Navigating university life and designing a clear academic and personal roadmap during undergraduate years, featuring Dr. Ahmed Fekry.",
    "youtube_url": "https://youtu.be/c5BOg9i48X4?si=ddxXoeqrwiK3DSKv",
    "spotify_url": "https://open.spotify.com/episode/0SVmFdT6DjXzdqpiKCuMTf?si=2-REkrYcT0Kz-PHM9outXQ",
    "facebook_url": "https://www.facebook.com/reel/24784694734501337/",
    "guest_ar": "د. أحمد فكري",
    "guest_en": "Dr. Ahmed Fekry",
    "status": "published",
    "verification_status": "verified",
    "published_date": "2024"
  },
  {
    "id": "ep-003",
    "slug": "episode-3",
    "episode_number": 3,
    "title_ar": "بناء العقلية الناجحة وإدارة الوقت وتطوير المهارات — أ. محمد توفيق",
    "title_en": "Cultivating a Success Mindset, Time Management & Soft Skills — Mr. Mohamed Tawfik",
    "description_ar": "حوار ملهم مع أ. محمد توفيق حول آليات بناء عقلية النجاح والتعلم الفعال، وأسرار إدارة وتنظيم الوقت بين الدراسة والأنشطة الطلابية، وتطوير المهارات اللغوية والشخصية (Soft Skills) لتحقيق الأهداف.",
    "description_en": "An insightful episode with Mr. Mohamed Tawfik on developing a growth mindset, effective learning habits, balancing academic commitments with extracurricular leadership, and mastering language and soft skills.",
    "youtube_url": "https://youtu.be/Sj71FHSgFp4?si=GNsxyNOR1_xEyEy9",
    "facebook_url": "https://www.facebook.com/reel/1261288122433426/",
    "guest_ar": "أ. محمد توفيق",
    "guest_en": "Mr. Mohamed Tawfik",
    "status": "published",
    "verification_status": "verified",
    "published_date": "2024"
  },
  {
    "id": "ep-004",
    "slug": "episode-4",
    "episode_number": 4,
    "title_ar": "من التطوع والريادة البيئية إلى المسابقات الدولية — مصطفى عطية",
    "title_en": "From Volunteering & Eco-Initiatives to Global Competitions — Mustafa Atiya",
    "description_ar": "لقاء متميز مع مصطفى عطية (Campus Director of Hult Prize at Mansoura University)، يستعرض رحلته الملهمة من العمل التطوعي وتأسيس فريق بيئي إلى عالم ريادة الأعمال والمنافسات العالمية، وكيفية تحويل الأفكار إلى أثر مجتمعي حقيقي.",
    "description_en": "Featuring Mustafa Atiya (Campus Director of Hult Prize at Mansoura University), detailing the journey from community volunteering and founding environmental initiatives to launching tech startups and succeeding in international innovation arenas.",
    "facebook_url": "https://www.facebook.com/reel/940260168698169/",
    "guest_ar": "مصطفى عطية",
    "guest_en": "Mustafa Atiya",
    "status": "published",
    "verification_status": "verified",
    "published_date": "2024"
  }
];
