import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';
import { activities } from '../data/seedData';
import { Calendar, ArrowRight, ArrowLeft, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';

export const ActivityDetailView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale, t, dir } = useLocale();
  const ArrowIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  const activity = activities.find((a) => a.slug === slug);

  if (!activity) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          {t('النشاط غير موجود', 'Activity Not Found')}
        </h1>
        <p className="text-gray-600">
          {t('الرابط المطلوب غير متوفر في أرشيف الفعاليات.', 'The requested event is not available in our records.')}
        </p>
        <Link 
          to={`/${locale}/projects-activities`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-ocean hover:underline"
        >
          <ArrowIcon className="w-4 h-4" />
          <span>{t('العودة لجميع الأنشطة', 'Back to activities')}</span>
        </Link>
      </div>
    );
  }

  const roleText = () => {
    switch (activity.relationship_role) {
      case 'organized':
        return t('تنظيم رئيسي بالكامل', 'Primary Organizer');
      case 'co-organized':
        return t('تنظيم مشترك وتعاون أكاديمي', 'Co-organizer & Academic Partner');
      case 'promoted':
        return t('ترويج وتغطية علمية', 'Scientific Promotion & Coverage');
      default:
        return t('مشاركة وتنظيم', 'Organizer / Partner');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Back Button */}
      <Link 
        to={`/${locale}/projects-activities`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-brand-ocean transition-colors"
      >
        <ArrowIcon className="w-4 h-4" />
        <span>{t('العودة لجميع الأنشطة', 'Back to activities')}</span>
      </Link>

      {/* Main Detail Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-brand-purple/15 text-brand-purple font-bold uppercase">
            {activity.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 flex items-center gap-1.5 font-medium">
            <Calendar className="w-3.5 h-3.5" />
            {t(activity.date_display_ar, activity.date_display_en)}
          </span>
          {activity.event_state === 'registration_closed' ? (
            <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-700 font-semibold flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {t('التسجيل مغلق رسمياً', 'Registration Formally Closed')}
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-700 font-medium flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              {t('فعالية مكتملة وموثقة', 'Completed Event')}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          {t(activity.title_ar, activity.title_en)}
        </h1>
      </div>

      {/* Meta Box: Role & Organization */}
      <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-xs text-gray-500 block">{t('طبيعة دور المبادرة:', 'Initiative Role:')}</span>
          <span className="font-semibold text-gray-900">
            {roleText()}
          </span>
        </div>
        <div>
          <span className="text-xs text-gray-500 block">{t('حالة الفعالية والتسجيل:', 'Event & Registration Status:')}</span>
          <span className="font-semibold text-amber-600">
            {activity.event_state === 'registration_closed'
              ? t('انتهت فترة التسجيل (20 أكتوبر 2026)', 'Registration Closed (Deadline: 20 Oct 2026)')
              : t('فعالية مكتملة ومؤرشفة', 'Historical / Completed Event')}
          </span>
        </div>
      </div>

      {/* Detailed Overview Content */}
      <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {t('نبذة تفصيلية عن النشاط', 'Detailed Overview')}
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          {t(activity.summary_ar, activity.summary_en)}
        </p>

        {activity.slug === 'arps-workshop-medical-physics-2026' && (
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-800 space-y-2">
              <p className="font-bold">
                {t('⚠️ تنبيه بخصوص موعد التسجيل وانعقاد الورشة:', '⚠️ Notice Regarding Registration & Workshop Dates:')}
              </p>
              <p>
                {t(
                  'انتهى الموعد النهائي المحدد لاستقبال طلبات التسجيل في 20 أكتوبر 2026، والتسجيل حالياً مغلق رسمياً. تُعقد الورشة في الفترة 21–22 نوفمبر 2026 وفقاً لجدول الجهة المنظمة.',
                  'The official registration deadline passed on 20 October 2026. The workshop is scheduled for 21–22 November 2026 according to the organizing committee schedule.'
                )}
              </p>
            </div>
            <div>
              <a
                href="https://indico.cern.ch/event/1730735/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20 transition-all border border-brand-purple/20"
              >
                <span>{t('صفحة الورشة الرسمية على CERN Indico', 'Official CERN Indico Event Page')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {activity.slug === '2nd-forum-specialized-programs' && (
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900">
              {t('مسارات الملتقى الرئيسية:', 'Core Forum Tracks:')}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-700">
              <li className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                <span className="font-bold block text-brand-purple mb-1">
                  {t('مسار البوسترات البحثية', 'Research Posters Track')}
                </span>
                <span className="text-xs text-gray-500">
                  {t('عرض الأبحاث الطلابية وتقييمها من لجان تحكيم علمية متخصصة.', 'Student research poster exhibition evaluated by expert panels.')}
                </span>
              </li>
              <li className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                <span className="font-bold block text-brand-indigo mb-1">
                  {t('مسار ريادة الأعمال', 'Entrepreneurship Track')}
                </span>
                <span className="text-xs text-gray-500">
                  {t('نماذج أولية وأفكار شركات ناشئة قائمة على حلول علمية وبيئية.', 'Startup prototypes addressing environmental and scientific challenges.')}
                </span>
              </li>
              <li className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                <span className="font-bold block text-brand-cyan mb-1">
                  {t('مسار العروض التقديمية', 'Oral Presentations')}
                </span>
                <span className="text-xs text-gray-500">
                  {t('مناقشات تفاعلية وعروض للمشاريع الابتكارية المتميزة.', 'Interactive oral defenses of outstanding student innovation projects.')}
                </span>
              </li>
            </ul>
          </div>
        )}

        {activity.slug === 'entrepreneurship-business-camp' && (
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900">
              {t('محاور المعسكر الثمانية:', 'The 8 Core Camp Sessions:')}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">✓ {t('1. العقلية الريادية وتوليد الأفكار', '1. Entrepreneurial Mindset')}</li>
              <li className="flex items-center gap-2">✓ {t('2. من المشكلة إلى الحل المبتكر', '2. Problem to Solution')}</li>
              <li className="flex items-center gap-2">✓ {t('3. دراسة السوق وسلوك العملاء', '3. Market & Customer Analysis')}</li>
              <li className="flex items-center gap-2">✓ {t('4. نموذج العمل التجاري (BMC)', '4. Business Model Canvas')}</li>
              <li className="flex items-center gap-2">✓ {t('5. التسويق وبناء الهوية', '5. Marketing & Branding')}</li>
              <li className="flex items-center gap-2">✓ {t('6. الإدارة المالية للشركات الناشئة', '6. Business Finance')}</li>
              <li className="flex items-center gap-2">✓ {t('7. بناء النموذج الأولي القابل للتطبيق (MVP)', '7. MVP Development')}</li>
              <li className="flex items-center gap-2">✓ {t('8. استراتيجيات المبيعات والعرض', '8. Sales & Pitching')}</li>
            </ul>
          </div>
        )}

        {activity.slug === 'cosmetics-detergents-analytical-workshop' && (
          <div className="space-y-4 pt-4 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900">
              {t('محاور الورشة والأجهزة التحليلية:', 'Workshop Modules & Analytical Tools:')}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">✓ {t('كيمياء المواد الفعالة سطحياً (Surfactants)', 'Surfactant Chemistry & Formulations')}</li>
              <li className="flex items-center gap-2">✓ {t('معايير الجودة والتصنيع الجيد (GMP)', 'Quality Control & GMP Standards')}</li>
              <li className="flex items-center gap-2">✓ {t('مطياف الامتصاص الذري (AAS) والتحليل الطيفي', 'Atomic Absorption Spectroscopy (AAS)')}</li>
              <li className="flex items-center gap-2">✓ {t('فحوصات الثباتية ونقاء المركبات التجميلية', 'Stability & Purity Assays')}</li>
            </ul>
          </div>
        )}
      </div>

    </div>
  );
};
