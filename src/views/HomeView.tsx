import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';
import { aboutData, activities, magazineIssues, podcastEpisodes, committees } from '../data/seedData';
import { ArrowLeft, ArrowRight, BookOpen, Mic, Users, Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import { publicAsset } from '../lib/publicAsset';

export const HomeView: React.FC = () => {
  const { locale, t, dir } = useLocale();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 max-w-4xl mx-auto leading-tight">
            {t('نحو آفاق', 'Towards')} <span className="brand-gradient-text">{t('لا نهائية', 'Infinite Horizons')}</span> {t('من المعرفة والبحث', 'of Knowledge & Research')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {t(
              'منصة طلابية وبحثية شاملة لتمكين الباحثين ورواد الأعمال، وتقديم دورات تخصصية ونشر الأوراق العلمية بالتعاون مع نخبة من الأكاديميين.',
              'A student and research platform empowering young researchers, offering specialized workshops, and advancing scientific publication.'
            )}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to={`/${locale}/join-us`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white brand-gradient-bg shadow-lg shadow-brand-purple/25 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <span>{t('انضم كمتطوع في المبادرة', 'Join as a Volunteer')}</span>
              <ArrowIcon className="w-5 h-5" />
            </Link>

            <Link
              to={`/${locale}/projects-activities`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-all flex items-center justify-center gap-2"
            >
              <span>{t('استكشف المعسكرات والأنشطة', 'Explore Activities')}</span>
            </Link>
          </div>

          {/* Key Metrics Strip */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-purple">18+</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{t('عضو بفريق القيادة', 'Leadership Team')}</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-indigo">6</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{t('لجان تخصصية', 'Committees')}</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue">5+</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{t('معسكرات وورش بحثية', 'Camps & Workshops')}</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-cyan">1</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{t('مجلة وبودكاست علمي', 'Magazine & Podcast')}</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. MISSION & VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-purple/10 via-white to-brand-cyan/10 border border-brand-purple/20 shadow-sm space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {t('رسالة المبادرة وقيمها الأساسية', 'Our Mission & Core Values')}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {t(aboutData.mission_ar, aboutData.mission_en)}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
            {aboutData.values.map((v) => (
              <div 
                key={v.id} 
                className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-brand-purple/40 transition-all space-y-2"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-purple/15 text-brand-purple flex items-center justify-center font-bold">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-base">
                  {t(v.title_ar, v.title_en)}
                </h3>
                <p className="text-sm text-gray-600 leading-normal">
                  {t(v.desc_ar, v.desc_en)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED ACTIVITIES & CAMPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-ocean">
              {t('مسار الأنشطة', 'Track Record')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              {t('أحدث المعسكرات والبرامج التدريبية', 'Recent Camps & Workshops')}
            </h2>
          </div>
          <Link 
            to={`/${locale}/projects-activities`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-ocean hover:text-brand-cyan transition-colors"
          >
            <span>{t('عرض جميع الأنشطة', 'View All Activities')}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.slice(0, 3).map((act) => (
            <Link 
              key={act.id}
              to={`/${locale}/projects-activities/${act.slug}`}
              className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between p-6 space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-brand-purple/10 text-brand-purple font-semibold uppercase">
                    {act.category}
                  </span>
                  <span className="text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {t(act.date_display_ar, act.date_display_en)}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-ocean transition-colors leading-snug">
                  {t(act.title_ar, act.title_en)}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {t(act.summary_ar, act.summary_en)}
                </p>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>
                  {act.event_state === 'registration_closed' 
                    ? t('التسجيل مغلق', 'Registration Closed') 
                    : t('فعالية مكتملة', 'Completed')}
                </span>
                <span className="font-medium text-brand-ocean flex items-center gap-1">
                  <span>{t('تفاصيل', 'Details')}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. MAGAZINE & PODCAST HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Fudul Magazine Card */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-36 h-48 rounded-xl overflow-hidden shrink-0 shadow-md border border-gray-300 bg-gray-100 flex items-center justify-center">
              <img 
                src={publicAsset(magazineIssues[0].cover_image_url)}
                alt="Fudul Magazine Cover" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="space-y-3 text-center sm:text-start">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple">
                <BookOpen className="w-4 h-4" />
                <span>{t('مجلة فضول العلمية', 'Fudul Magazine')}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {t(magazineIssues[0].title_ar, magazineIssues[0].title_en)}
              </h3>
              <p className="text-sm text-gray-600">
                {t(magazineIssues[0].description_ar, magazineIssues[0].description_en)}
              </p>
              <div className="pt-2">
                <Link
                  to={`/${locale}/fudul`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple hover:underline"
                >
                  <span>{t('تصفح تفاصيل المجلة', 'Explore Magazine')}</span>
                  <ArrowIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Sci Cast Podcast Card */}
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-green-600">
                <Mic className="w-4 h-4" />
                <span>{t('بودكاست ساي كاست', 'Sci Cast Podcast')}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {t('حوارات علمية تلهم الباحثين', 'Scientific Conversations Inspiring Researchers')}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t(
                  'حلقات نقاشية صوتية ومرئية مع طلاب وباحثين وأساتذة متخصصين لمناقشة التحديات العلمية وسوق العمل.',
                  'In-depth discussions with researchers and academics addressing research challenges and career prospects.'
                )}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={podcastEpisodes[0].spotify_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-green-500/10 text-green-700 hover:bg-green-500/20 border border-green-500/30 flex items-center gap-1.5 transition-all"
              >
                <span>Spotify</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={podcastEpisodes[0].youtube_url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-red-500/10 text-red-700 hover:bg-red-500/20 border border-red-500/30 flex items-center gap-1.5 transition-all"
              >
                <span>YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 5. COMMITTEES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-ocean">
            {t('الهيكل التنظيمي', 'Organization')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {t('لجان وفرق عمل المبادرة', 'Committees & Workstreams')}
          </h2>
          <p className="text-sm text-gray-600">
            {t('تتكامل لجاننا الست لإدارة الفعاليات العلمية والمحتوى والموارد البشرية باحترافية.', 'Six integrated committees driving our research events, media, and talent management.')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {committees.map((c) => (
            <div 
              key={c.id} 
              className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center space-y-2 hover:border-brand-purple transition-all"
            >
              <div className="w-10 h-10 mx-auto rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div className="font-bold text-sm text-gray-900">
                {t(c.name_ar, c.name_en)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-14 text-center brand-gradient-bg text-white space-y-6 shadow-xl shadow-brand-purple/20">
          <h2 className="text-3xl sm:text-4xl font-extrabold max-w-2xl mx-auto leading-tight">
            {t('جاهز تكون جزء من رحلتنا العلمية القادمة؟', 'Ready to Join Our Scientific Journey?')}
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto font-normal">
            {t(
              'نفتح باب التطوع للطلاب والباحثين الطموحين للانضمام إلى لجان المبادرة والمساهمة في بناء بيئة بحثية متقدمة.',
              'Applications are open for ambitious students and researchers to join our committees and shape scientific impact.'
            )}
          </p>
          <div className="pt-2">
            <Link
              to={`/${locale}/join-us`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-white text-brand-ink hover:bg-gray-100 shadow-md transition-all"
            >
              <span>{t('قدّم طلبك الآن', 'Apply for Volunteer Roles')}</span>
              <ArrowIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
