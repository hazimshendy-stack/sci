import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';
import { activities, magazineIssues, podcastEpisodes, committees } from '../data/seedData';
import { ArrowLeft, ArrowRight, BookOpen, Users, Calendar, Play, Headphones } from 'lucide-react';
import { publicAsset } from '../lib/publicAsset';

export const HomeView: React.FC = () => {
  const { locale, t, dir } = useLocale();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="space-y-24 py-6 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-6 pb-6">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-cyan/15 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 max-w-4xl mx-auto leading-tight">
            {t('نحو آفاق', 'Towards')} <span className="brand-gradient-text">{t('لا نهائية', 'Infinite Horizons')}</span> {t('من المعرفة والبحث', 'of Knowledge & Research')}
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {t(
              'منصة طلابية وبحثية شاملة لتمكين الباحثين ورواد الأعمال، وتقديم دورات تخصصية ونشر الأوراق العلمية بالتعاون مع نخبة من الأكاديميين.',
              'A student and research platform empowering young researchers, offering specialized workshops, and advancing scientific publication.'
            )}
          </p>

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
              <span>{t('استكشف الأنشطة', 'Explore Activities')}</span>
            </Link>
          </div>

          {/* Key Metrics Strip — Unified text-brand-blue color across all 5 stat cards */}
          <div className="pt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue">+35</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{t('أعضاء الفريق', 'Team Members')}</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue">6</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{t('لجان تخصصية', 'Committees')}</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue">+20</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{t('التدريبات والورش العلمية', 'Scientific Trainings & Workshops')}</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue">1</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{t('مجلة علمية', 'Science Magazine')}</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-blue">4</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{t('حلقات بودكاست', 'Podcast Episodes')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED ACTIVITIES & CAMPS */}
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

      {/* 3. DEDICATED FODUL MAGAZINE CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-40 h-56 sm:w-48 sm:h-64 rounded-2xl overflow-hidden shrink-0 shadow-lg border border-gray-200 bg-gray-100 flex items-center justify-center relative group">
            <img 
              src={publicAsset(magazineIssues[0].cover_image_url)}
              alt="Fudul Magazine Cover" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
          </div>
          <div className="space-y-4 text-center md:text-start flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>{t('مجلة فضول العلمية الرسمية', 'Official Fudul Science Magazine')}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              {t(magazineIssues[0].title_ar, magazineIssues[0].title_en)}
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
              {t(magazineIssues[0].description_ar, magazineIssues[0].description_en)}
            </p>
            <div className="pt-2">
              <Link
                to={`/${locale}/fudul`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-brand-purple text-white hover:bg-brand-deep-purple transition-all shadow-sm"
              >
                <span>{t('تصفح أعداد وتفاصيل المجلة', 'Explore Magazine Issues')}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUR DISTINCT SCI CAST EPISODE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-green-700">
              {t('سلسلة البودكاست الصوتي والمرئي', 'Podcast Directory')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
              {t('حلقات بودكاست ساي كاست (Sci Cast)', 'Sci Cast Podcast Episodes')}
            </h2>
          </div>
          <Link 
            to={`/${locale}/sci-cast`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
          >
            <span>{t('صفحة البودكاست الرسمية', 'Official Podcast Hub')}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {podcastEpisodes.map((ep) => {
            const hasTitle = (ep.title_ar && ep.title_ar.trim()) || (ep.title_en && ep.title_en.trim());
            const hasDesc = (ep.description_ar && ep.description_ar.trim()) || (ep.description_en && ep.description_en.trim());
            return (
              <div
                key={ep.episode_number}
                className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm hover:border-brand-purple/40 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-lg bg-brand-purple/10 text-brand-purple text-xs font-bold">
                      {t(`الحلقة ${ep.episode_number}`, `Episode ${ep.episode_number}`)}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center">
                      <Headphones className="w-4 h-4" />
                    </div>
                  </div>

                  {hasTitle ? (
                    <h3 className="font-bold text-base text-gray-900 group-hover:text-brand-purple transition-colors leading-snug">
                      {t(ep.title_ar, ep.title_en)}
                    </h3>
                  ) : (
                    <div className="space-y-2 pt-1">
                      <div className="h-5 rounded-lg bg-gray-100 w-3/4"></div>
                    </div>
                  )}

                  {hasDesc ? (
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {t(ep.description_ar, ep.description_en)}
                    </p>
                  ) : (
                    <div className="space-y-2 pt-1">
                      <div className="h-3 rounded bg-gray-100 w-full"></div>
                      <div className="h-3 rounded bg-gray-100 w-5/6"></div>
                      <div className="h-3 rounded bg-gray-100 w-2/3"></div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <Link
                    to={`/${locale}/sci-cast/episode/${ep.episode_number}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-purple hover:underline"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{t('الاستماع إلى الحلقة', 'Listen to Episode')}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. HOMEPAGE PARTNERSHIPS — Creativa Hub Mansoura */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-ocean">
            {t('شركاء النجاح والمسيرة', 'Strategic Partners')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {t('الشراكات والتعاون المؤسسي', 'Partnerships & Collaborations')}
          </h2>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center space-y-5">
          <img 
            src={publicAsset('/images/creativa-hub-logo.png')} 
            alt="Creativa Hub Mansoura — مراكز إبداع مصر الرقمية" 
            className="h-28 sm:h-36 w-auto object-contain mx-auto"
          />
          <p className="text-sm text-gray-600 max-w-lg leading-relaxed">
            {t(
              'شريك استضافة وتدريب لمعسكرات توليد الأفكار وورش التفكير التصميمي وريادة الأعمال واستضافة تسجيلات بودكاست ساي كاست (Sci Cast).',
              'Hosting and training partner for Ideation Camps, Design Thinking workshops, and official media collaboration for Sci Cast podcast production.'
            )}
          </p>
          <Link
            to={`/${locale}/partners`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-ocean hover:underline"
          >
            <span>{t('عرض تفاصيل الشراكات', 'Explore Partnership Details')}</span>
            <ArrowIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 6. COMMITTEES OVERVIEW */}
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

      {/* 7. BOTTOM CALL TO ACTION */}
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
