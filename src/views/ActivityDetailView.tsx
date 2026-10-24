import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';
import { activities } from '../data/seedData';
import { Calendar, CheckCircle, AlertCircle, Video, ArrowRight, ArrowLeft } from 'lucide-react';
import { YouTubeEmbed } from '../components/common/YouTubeEmbed';
import { FacebookEmbed } from '../components/common/FacebookEmbed';

export const ActivityDetailView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { locale, t, dir } = useLocale();
  const BackArrowIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

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
          <BackArrowIcon className="w-4 h-4" />
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

  // Check specific activity configurations
  const isBusinessCamp = activity.slug === 'entrepreneurship-business-camp';
  const isFirstForum = activity.slug === '1st-forum-specialized-programs';
  const isSecondForum = activity.slug === '2nd-forum-specialized-programs';
  const isPRTraining = activity.slug === 'pr-training-program';
  const isResearchProgram = activity.slug === 'scientific-research-program';
  const isRDTraining = activity.slug === 'rd-training-series';
  const isScientificFigure = activity.slug === 'scientific-figure-preparation';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Back Button */}
      <Link 
        to={`/${locale}/projects-activities`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-brand-ocean transition-colors"
      >
        <BackArrowIcon className="w-4 h-4" />
        <span>{t('العودة لجميع الأنشطة والمعسكرات', 'Back to all activities & camps')}</span>
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
          <span className="font-semibold text-gray-700">
            {activity.event_state === 'registration_closed'
              ? t('انتهت فترة التسجيل (التسجيل مغلق)', 'Registration Formally Closed')
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

        {/* First Scientific Forum Dedicated Structure */}
        {isFirstForum && (
          <div className="space-y-6 pt-6 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900">
              {t('عن النسخة الافتتاحية للمنتدى العلمي الأول:', 'About the Inaugural 1st Scientific Forum:')}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t(
                'انطلقت النسخة الأولى كمنصة رائدة لتشجيع العقول الشابة في عرض مشاريعهم العلمية وبحوثهم الأكاديمية وفتح قنوات التحكيم العلمي والتوجيه مع نخبة من الأساتذة.',
                'The first edition launched as a pioneering platform fostering young minds to present scientific projects, academic research, and receive expert mentorship.'
              )}
            </p>
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-gray-800">
                {t('التغطية والمنشورات الرسمية على فيسبوك:', 'Official Facebook Coverage & Announcements:')}
              </h4>
              <FacebookEmbed 
                title={t('منشور المنتدى العلمي الأول', '1st Scientific Forum Post')}
                placeholderLabel={t('منشور إعلان وتغطية المنتدى العلمي الأول قيد الربط', '1st Scientific Forum announcement post pending link')}
              />
            </div>
          </div>
        )}

        {/* Second Scientific Forum */}
        {isSecondForum && (
          <div className="space-y-6 pt-6 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900">
              {t('مسارات المنتدى الثاني الرئيسية:', 'Core 2nd Forum Tracks:')}
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
            <div className="space-y-3 pt-3">
              <h4 className="text-sm font-bold text-gray-800">
                {t('منشورات التغطية على فيسبوك:', 'Facebook Coverage Posts:')}
              </h4>
              <FacebookEmbed 
                title={t('تغطية المنتدى العلمي الثاني', '2nd Scientific Forum Coverage')}
                placeholderLabel={t('منشور المنتدى العلمي الثاني قيد الربط', '2nd Scientific Forum post pending URL')}
              />
            </div>
          </div>
        )}

        {/* Business & Entrepreneurship Camp (8 Sessions) */}
        {isBusinessCamp && (
          <div className="space-y-6 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Video className="w-5 h-5 text-red-600" />
                <span>{t('جلسات المعسكر الثمانية المسجلة (كاملة على YouTube)', 'All 8 Recorded Camp Sessions (YouTube Series)')}</span>
              </h3>
            </div>
            
            <p className="text-sm text-gray-600">
              {t(
                'يمكنك متابعة كافة جلسات معسكر ريادة الأعمال وإدارة الأعمال الـ 8 مباشرة من خلال مشغلات الفيديو أدناه:',
                'Explore all 8 recorded training sessions of the Entrepreneurship & Business Camp via embedded players below:'
              )}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { num: 1, ar: 'الجلسة 1: العقلية الريادية وتوليد الأفكار', en: 'Session 1: Entrepreneurial Mindset & Ideation' },
                { num: 2, ar: 'الجلسة 2: من المشكلة إلى الحل المبتكر', en: 'Session 2: From Problem to Innovative Solution' },
                { num: 3, ar: 'الجلسة 3: دراسة السوق وسلوك العملاء', en: 'Session 3: Market Research & Customer Behavior' },
                { num: 4, ar: 'الجلسة 4: تصميم نموذج العمل التجاري (BMC)', en: 'Session 4: Business Model Canvas Design' },
                { num: 5, ar: 'الجلسة 5: استراتيجيات التسويق وبناء الهوية', en: 'Session 5: Marketing & Brand Identity' },
                { num: 6, ar: 'الجلسة 6: الإدارة المالية والتسعير للشركات الناشئة', en: 'Session 6: Financial Management & Pricing' },
                { num: 7, ar: 'الجلسة 7: بناء النموذج الأولي القابل للتطبيق (MVP)', en: 'Session 7: Minimum Viable Product (MVP)' },
                { num: 8, ar: 'الجلسة 8: استراتيجيات المبيعات والعرض التقديمي (Pitching)', en: 'Session 8: Sales Strategy & Pitching Deck' },
              ].map((sess) => (
                <div key={sess.num} className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                  <h4 className="font-bold text-sm text-gray-900">
                    {t(sess.ar, sess.en)}
                  </h4>
                  <YouTubeEmbed 
                    title={t(sess.ar, sess.en)}
                    placeholderLabel={t(`تسجيل الجلسة ${sess.num} قيد التوفير والاعتماد`, `Session ${sess.num} recording pending URL`)}
                  />
                </div>
              ))}
            </div>

            <div className="pt-4">
              <FacebookEmbed 
                title={t('منشور معسكر ريادة الأعمال', 'Business Camp Facebook Announcement')}
                placeholderLabel={t('منشور معسكر ريادة الأعمال على فيسبوك قيد الربط', 'Business Camp Facebook post pending URL')}
              />
            </div>
          </div>
        )}

        {/* PR Training Page */}
        {isPRTraining && (
          <div className="space-y-6 pt-6 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Video className="w-5 h-5 text-red-600" />
              <span>{t('سلسلة فيديوهات تدريب العلاقات العامة (PR)', 'PR Training Video Series')}</span>
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                'تسجيلات جلسات تدريب العلاقات العامة لإعداد الكوادر في التواصل والتنسيق الإعلامي:',
                'Recorded video sessions from the Public Relations training program:'
              )}
            </p>
            <div className="space-y-4">
              <YouTubeEmbed 
                title={t('قائمة تدريب العلاقات العامة (PR Training Playlist)', 'PR Training YouTube Series')}
                placeholderLabel={t('قائمة تدريب العلاقات العامة على YouTube قيد الربط', 'PR training YouTube playlist pending URL')}
              />
              <FacebookEmbed 
                title={t('منشور إعلان تدريب العلاقات العامة', 'PR Training Announcement')}
                placeholderLabel={t('منشور تدريب العلاقات العامة على فيسبوك قيد الربط', 'PR training Facebook post pending URL')}
              />
            </div>
          </div>
        )}

        {/* Scientific Research Program */}
        {isResearchProgram && (
          <div className="space-y-6 pt-6 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Video className="w-5 h-5 text-red-600" />
              <span>{t('سلسلة برنامج البحث العلمي (Scientific Research Program)', 'Scientific Research Program Video Track')}</span>
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                'جلسات تدريبية متخصصة في منهجيات البحث العلمي وكتابة الأوراق الأكاديمية:',
                'Specialized training sessions on research methodology and manuscript authoring:'
              )}
            </p>
            <div className="space-y-4">
              <YouTubeEmbed 
                title={t('برنامج البحث العلمي — YouTube Series', 'Scientific Research Program Series')}
                placeholderLabel={t('فيديوهات برنامج البحث العلمي على YouTube قيد الربط', 'Scientific Research Program YouTube videos pending URL')}
              />
              <FacebookEmbed 
                title={t('منشور برنامج البحث العلمي', 'Scientific Research Program Facebook Announcement')}
                placeholderLabel={t('منشور برنامج البحث العلمي على فيسبوك قيد الربط', 'Scientific Research Program Facebook post pending URL')}
              />
            </div>
          </div>
        )}

        {/* R&D Training */}
        {isRDTraining && (
          <div className="space-y-6 pt-6 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Video className="w-5 h-5 text-red-600" />
              <span>{t('سلسلة تدريب البحث والتطوير (R&D Training Sessions)', 'R&D Training Video Sessions')}</span>
            </h3>
            <div className="space-y-4">
              <YouTubeEmbed 
                title={t('تدريب البحث والتطوير R&D — YouTube Series', 'R&D Training YouTube Series')}
                placeholderLabel={t('فيديوهات تدريب البحث والتطوير R&D قيد توفير الروابط', 'R&D training YouTube videos pending URL')}
              />
              <FacebookEmbed 
                title={t('منشور تدريب البحث والتطوير R&D', 'R&D Training Facebook Post')}
                placeholderLabel={t('منشور تدريب R&D على فيسبوك قيد الربط', 'R&D training Facebook post pending URL')}
              />
            </div>
          </div>
        )}

        {/* Scientific Figure / BioRender Training */}
        {isScientificFigure && (
          <div className="space-y-6 pt-6 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Video className="w-5 h-5 text-red-600" />
              <span>{t('سلسلة تدريب إعداد الرسوم العلمية وBioRender (YouTube)', 'BioRender & Scientific Figure YouTube Sessions')}</span>
            </h3>
            <p className="text-sm text-gray-600">
              {t(
                'تسجيلات تدريب إعداد الرسوم البيانية والأشكال العلمية للمجلات الدولية عبر منصة BioRender:',
                'Recorded video sessions on designing publication-grade scientific figures and BioRender workflows:'
              )}
            </p>
            <div className="space-y-4">
              <YouTubeEmbed 
                title={t('تدريب الرسوم العلمية BioRender — YouTube', 'BioRender Training YouTube Series')}
                placeholderLabel={t('فيديوهات تدريب الرسوم العلمية BioRender قيد توفير الروابط', 'BioRender training YouTube videos pending URL')}
              />
              <FacebookEmbed 
                title={t('منشور ورشة الرسوم العلمية على فيسبوك', 'Scientific Figure Workshop Facebook Post')}
                placeholderLabel={t('منشور ورشة الرسوم العلمية على فيسبوك قيد الربط', 'Scientific Figure workshop Facebook post pending URL')}
              />
            </div>
          </div>
        )}

        {/* General Facebook Embed for Other Activities */}
        {!isFirstForum && !isSecondForum && !isBusinessCamp && !isPRTraining && !isResearchProgram && !isRDTraining && !isScientificFigure && (
          <div className="space-y-4 pt-6 border-t border-gray-100">
            <h3 className="text-base font-bold text-gray-900">
              {t('التوثيق والمنشورات الرسمية على فيسبوك:', 'Official Facebook Documentation & Posts:')}
            </h3>
            <FacebookEmbed 
              title={t(activity.title_ar, activity.title_en)}
              placeholderLabel={t('منشور التوثيق الرسمي على فيسبوك قيد الربط', 'Official Facebook announcement post pending link')}
            />
          </div>
        )}

      </div>

    </div>
  );
};
