import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';
import { activities } from '../data/seedData';
import { Calendar, CheckCircle, Video, ArrowRight, ArrowLeft, MapPin, Award, Users, BookOpen } from 'lucide-react';
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
        return t('تنظيم وإشراف رئيسي', 'Primary Organizer & Host');
      case 'co-organized':
        return t('تنظيم مشترك وشراكة أكاديمية', 'Co-organizer & Academic Partner');
      case 'promoted':
        return t('ترويج وتغطية علمية ورعاية إعلامية', 'Scientific Promotion & Media Coverage');
      case 'participated':
        return t('مشاركة وتمثيل للمبادرة', 'Active Representation & Participation');
      case 'contributed':
        return t('مساهمة علمية', 'Scientific Contribution');
      default:
        return t('تنظيم وشراكة', 'Organizer / Partner');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Back Button */}
      <Link 
        to={`/${locale}/projects-activities`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-brand-ocean transition-colors"
      >
        <BackArrowIcon className="w-4 h-4" />
        <span>{t('العودة إلى الأنشطة', 'Back to activities')}</span>
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
          <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-700 font-medium flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" />
            {t('فعالية مكتملة ومؤرشفة رسمياً', 'Archived Official Event')}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          {t(activity.title_ar, activity.title_en)}
        </h1>
      </div>

      {/* Meta Box: Role, Location & Official Portal */}
      <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div>
          <span className="text-xs text-gray-500 block mb-1">{t('طبيعة دور المبادرة:', 'Initiative Role:')}</span>
          <span className="font-semibold text-gray-900 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-brand-purple shrink-0" />
            {roleText()}
          </span>
        </div>

        <div>
          <span className="text-xs text-gray-500 block mb-1">{t('مكان الانعقاد:', 'Venue & Location:')}</span>
          <span className="font-semibold text-gray-900 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-brand-ocean shrink-0" />
            {activity.location_ar ? t(activity.location_ar, activity.location_en || activity.location_ar) : t('جامعة المنصورة', 'Mansoura University')}
          </span>
        </div>

        <div>
          <span className="text-xs text-gray-500 block mb-1">{t('حالة الفعالية والأرشيف:', 'Event Status:')}</span>
          <span className="font-semibold text-gray-700 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />
            {t('مؤرشفة بكافة المخرجات والوسائط', 'Documented with full media & outputs')}
          </span>
        </div>
      </div>

      {/* Detailed Overview */}
      <div className="p-8 rounded-3xl bg-white border border-gray-200 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          {t('نبذة تفصيلية وتوثيق المحتوى', 'Detailed Overview & Content Documentation')}
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          {t(activity.summary_ar, activity.summary_en)}
        </p>
      </div>

      {/* Section: Recorded Sessions (YouTube Videos Grid) */}
      {activity.youtube_videos && activity.youtube_videos.length > 0 && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Video className="w-6 h-6 text-red-600" />
              <span>{t(`الجلسات والورش المسجلة كاملة (${activity.youtube_videos.length} جلسات)`, `All Recorded Video Sessions (${activity.youtube_videos.length} Sessions)`)}</span>
            </h2>
            <p className="text-sm text-gray-600">
              {t('يمكنك مشاهدة كافة المحاضرات التدريبية مباشرة عبر مشغلات الفيديو أدناه:', 'Watch all training lectures and recorded workshops directly below:')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activity.youtube_videos.map((vid) => (
              <div key={vid.session_num} className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-purple/10 text-brand-purple font-bold">
                    {t(`الجلسة رقم ${vid.session_num}`, `Session ${vid.session_num}`)}
                  </span>
                </div>
                <h3 className="font-bold text-sm sm:text-base text-gray-900 leading-snug">
                  {t(vid.title_ar, vid.title_en)}
                </h3>
                <YouTubeEmbed 
                  url={vid.url}
                  title={t(vid.title_ar, vid.title_en)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section: YouTube Playlist Embed */}
      {activity.youtube_playlist_url && (
        <div className="p-6 rounded-3xl bg-white border border-gray-200 space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Video className="w-5 h-5 text-red-600" />
              <span>{t('قائمة التشغيل الكاملة على YouTube (Playlist)', 'Full YouTube Playlist')}</span>
            </h3>
            <p className="text-xs text-gray-500">
              {t('يمكنك استعراض ومشاهدة جميع مقاطع الدورة التدريبية كقائمة متتالية:', 'Browse and stream all training modules sequentially:')}
            </p>
          </div>
          <YouTubeEmbed 
            url={activity.youtube_playlist_url}
            title={t(activity.title_ar, activity.title_en)}
          />
        </div>
      )}

      {/* Section: Single YouTube Recording (if no session grid) */}
      {activity.youtube_url && (!activity.youtube_videos || activity.youtube_videos.length === 0) && (
        <div className="p-6 rounded-3xl bg-white border border-gray-200 space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <Video className="w-5 h-5 text-red-600" />
              <span>{t('تسجيل المحاضرة العلمية على YouTube', 'Full Scientific Lecture Recording on YouTube')}</span>
            </h3>
            <p className="text-xs text-gray-500">
              {t('مشاهدة المحاضرة المسجلة مباشرة:', 'Watch the recorded session directly:')}
            </p>
          </div>
          <YouTubeEmbed 
            url={activity.youtube_url}
            title={t(activity.title_ar, activity.title_en)}
          />
        </div>
      )}

      {/* Section: Facebook Student / Innovation Videos */}
      {activity.facebook_videos && activity.facebook_videos.length > 0 && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Video className="w-6 h-6 text-brand-ocean" />
              <span>{t(`عروض ومشاريع الطلاب المسجلة فيديو (${activity.facebook_videos.length} عروض)`, `Recorded Student Innovation Pitches (${activity.facebook_videos.length} Videos)`)}</span>
            </h2>
            <p className="text-sm text-gray-600">
              {t('فيديوهات حصرية تسجل عروض ومشاريع الطلاب الابتكارية أمام لجان التحكيم:', 'Exclusive video recordings of student research pitches and prototype demonstrations:')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activity.facebook_videos.map((vid, idx) => (
              <div key={idx} className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-3">
                <h3 className="font-bold text-sm sm:text-base text-gray-900">
                  {t(vid.label_ar, vid.label_en)}
                </h3>
                <FacebookEmbed 
                  url={vid.url}
                  type="video"
                  title={t(vid.label_ar, vid.label_en)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section: Facebook Speaker Announcements (ARPS 7 Speakers) */}
      {activity.facebook_speaker_urls && activity.facebook_speaker_urls.length > 0 && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Users className="w-6 h-6 text-brand-purple" />
              <span>{t(`إعلانات المتحدثين والعلماء المشاركين (${activity.facebook_speaker_urls.length} متحدثين)`, `Featured Scientists & Speakers Announcements (${activity.facebook_speaker_urls.length} Speakers)`)}</span>
            </h2>
            <p className="text-sm text-gray-600">
              {t('الإعلانات الرسمية لمنشورات المتحدثين والخبراء الأكاديميين في الورشة:', 'Official Facebook announcements highlighting the keynote speakers and scholars:')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activity.facebook_speaker_urls.map((spUrl, idx) => (
              <div key={idx} className="p-4 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-2">
                <span className="text-xs font-bold text-brand-purple block">
                  {t(`المتحدث رقم ${idx + 1}`, `Speaker ${idx + 1}`)}
                </span>
                <FacebookEmbed 
                  url={spUrl}
                  type="post"
                  title={t(`إعلان المتحدث ${idx + 1}`, `Speaker ${idx + 1}`)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section: Grouped Facebook Posts (Judges, Awards, Highlights) */}
      {activity.facebook_posts && activity.facebook_posts.length > 0 && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Award className="w-6 h-6 text-amber-600" />
              <span>{t(`التغطية المصورة ولجان التحكيم والجوائز (${activity.facebook_posts.length} منشورات)`, `Coverage, Judges & Awards Posts (${activity.facebook_posts.length} Posts)`)}</span>
            </h2>
            <p className="text-sm text-gray-600">
              {t('التوثيق الرسمي لمنشورات التكريم، والبرامج المشاركة، ولجان التحكيم الأكاديمية:', 'Official posts covering recognition, participating academic programs, and judging panels:')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {activity.facebook_posts.map((post, idx) => (
              <div key={idx} className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-3">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 inline-block">
                  {t(post.label_ar, post.label_en)}
                </span>
                <FacebookEmbed 
                  url={post.url}
                  type="post"
                  title={t(post.label_ar, post.label_en)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Section: Primary Facebook Announcement Post */}
      {activity.facebook_url && (
        <div className="p-6 rounded-3xl bg-white border border-gray-200 space-y-4">
          <h3 className="text-lg font-bold text-gray-900">
            {t('المنشور والبيان الرسمي على الصفحة الرسمية:', 'Official Initiative Facebook Announcement:')}
          </h3>
          <FacebookEmbed 
            url={activity.facebook_url}
            type="post"
            title={t(activity.title_ar, activity.title_en)}
          />
        </div>
      )}

    </div>
  );
};
