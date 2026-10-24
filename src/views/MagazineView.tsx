import React, { useState, useRef } from 'react';
import { useLocale } from '../context/LocaleContext';
import { BookOpen, ZoomIn, ZoomOut, Maximize2, Download, CheckCircle, Bookmark, Eye, ArrowLeft, ArrowRight } from 'lucide-react';

export const MagazineView: React.FC = () => {
  const { t, dir } = useLocale();
  const ArrowBackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  const [zoomLevel, setZoomLevel] = useState(100);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const showToast = (msg: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(msg);
    toastTimeoutRef.current = window.setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(Math.max(prev + delta, 70), 160));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {
        showToast(t('وضع ملء الشاشة غير مدعوم في هذا المتصفح.', 'Fullscreen mode is not supported in this browser.'));
      });
    } else {
      document.exitFullscreen();
    }
  };

  const notifyUnavailable = () => {
    showToast(t('سيُضاف ملف المجلة هنا قريباً وفور اعتماده بصيغته النهائية.', 'The official magazine PDF will be mounted here upon final publication.'));
  };

  const scrollToViewer = () => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    showToast(t('أنت الآن في عارض الإصدار الأول لمجلة فضول | Sci Infinity', 'You are now viewing Fudul Issue 1 Viewer | Sci Infinity'));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* 1. رأس الصفحة والتوجيه (Header & Context) */}
      <header className="w-full pb-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col items-start gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-ocean">
              <ArrowBackIcon className="w-3.5 h-3.5" />
              <span>{t('المنصة التحريرية والنشر العلمي', 'Editorial Platform & Science Publishing')}</span>
            </span>
            <div className="flex items-baseline flex-wrap gap-x-4 gap-y-2 mt-1">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                {t('مجلة فضول', 'Fudul Magazine')}
              </h1>
              <span className="inline-flex items-center px-3 py-1 rounded-md bg-brand-purple/15 text-brand-purple font-bold text-xs">
                {t('الإصدار الأول', 'Inaugural Issue')}
              </span>
              <span className="text-xs text-gray-500 dir-ltr font-sans">
                Sci Infinity
              </span>
            </div>
          </div>

          {/* أدوات سريعة للإصدار */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToViewer}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-deep-purple hover:opacity-95 text-white font-bold text-sm shadow-md transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t('بدء القراءة التفاعلية', 'Interactive Reader')}</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. منطقة عارض المجلة المركزية (Magazine Viewer Section) */}
      <section aria-label="عارض مجلة فضول" className="w-full flex flex-col items-center select-none">
        <div
          ref={containerRef}
          className="w-full rounded-2xl overflow-hidden flex flex-col bg-[#F5F6F8] shadow-lg border border-gray-200 transition-all duration-300"
        >
          {/* شريط أدوات العارض العلوي الأنيق (Viewer Toolbar) */}
          <div className="w-full px-4 sm:px-6 py-3 bg-white flex flex-wrap items-center justify-between gap-3 border-b border-gray-200">
            
            {/* التنقل بين الصفحات */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={notifyUnavailable}
                title={t('الصفحة السابقة', 'Previous Page')}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <ArrowBackIcon className="w-4 h-4" />
              </button>
              <div className="px-3 py-1 rounded-lg bg-gray-100 text-gray-800 text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-inner">
                <span>{t('الصفحة', 'Page')}</span>
                <span className="font-extrabold text-brand-deep-purple">1</span>
                <span>{t('من', 'of')}</span>
                <span className="text-gray-500">24</span>
              </div>
              <button
                type="button"
                onClick={notifyUnavailable}
                title={t('الصفحة التالية', 'Next Page')}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                {dir === 'rtl' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>

            {/* معلومات العدد المركزية داخل الشريط */}
            <div className="hidden md:flex items-center gap-2 text-xs text-gray-600">
              <span className="font-bold text-gray-900">{t('فضول', 'Fudul')}</span>
              <span>•</span>
              <span>{t('الإصدار الأول', 'Issue 01')}</span>
              <span>•</span>
              <span className="dir-ltr font-sans">Sci Infinity</span>
            </div>

            {/* أدوات التكبير والشاشة الكاملة والتحميل */}
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-lg bg-gray-100 p-0.5 shadow-inner">
                <button
                  type="button"
                  onClick={() => handleZoom(-15)}
                  title={t('تصغير', 'Zoom Out')}
                  className="w-7 h-7 rounded-md flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="px-2 text-xs font-semibold text-gray-700">
                  {zoomLevel}%
                </span>
                <button
                  type="button"
                  onClick={() => handleZoom(15)}
                  title={t('تكبير', 'Zoom In')}
                  className="w-7 h-7 rounded-md flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                type="button"
                onClick={toggleFullscreen}
                title={t('ملء الشاشة', 'Fullscreen')}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={notifyUnavailable}
                title={t('تنزيل ملف PDF', 'Download PDF')}
                className="inline-flex items-center gap-1.5 px-3 h-8 rounded-lg bg-brand-deep-purple/10 hover:bg-brand-deep-purple/20 text-brand-deep-purple text-xs font-bold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t('تحميل PDF', 'Download PDF')}</span>
              </button>
            </div>
          </div>

          {/* مساحة العرض الرئيسية الهادئة والرحبة (Document Viewport Canvas) */}
          <div className="relative w-full min-h-[520px] md:min-h-[640px] flex items-center justify-center p-6 md:p-12 overflow-hidden transition-all duration-200">
            
            {/* إطار الوثيقة القياسي (A4 Aspect Ratio: 1:1.414) */}
            <div
              style={{ transform: `scale(${zoomLevel / 100})` }}
              className="relative w-full max-w-[480px] md:max-w-[540px] aspect-[1/1.414] bg-white rounded-xl shadow-2xl flex flex-col justify-between p-8 md:p-10 transition-transform duration-200 border border-black/5"
            >
              {/* رأسية صفحة المجلة المصغرة */}
              <div className="w-full flex items-center justify-between pb-3 border-b border-gray-200 opacity-70">
                <div className="flex items-center gap-2 text-xs text-gray-600 font-bold">
                  <span>{t('فضول', 'Fudul')}</span>
                  <span>—</span>
                  <span>{t('الإصدار الأول', 'Inaugural Issue')}</span>
                </div>
                <div className="text-xs text-gray-500 dir-ltr font-sans">
                  Sci Infinity
                </div>
              </div>

              {/* مساحة الحالة المؤقتة والرسالة التحريرية الشفافة */}
              <div className="flex flex-col items-center justify-center text-center my-auto px-4 py-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <BookOpen className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                    {t('الإصدار الأول — مجلة فضول العلمية', 'Fudul Magazine — Issue 01')}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-sm leading-relaxed">
                    {t(
                      'يجري تجهيز وضبط صفحات الإصدار الأول لمجلة فضول العلمية للعرض والتصفح التفاعلي المباشر.',
                      'The inaugural issue pages are being formatted and indexed for full interactive direct browsing.'
                    )}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                  <span>{t('محتوى موثق ورسمي | Sci Infinity', 'Verified Publication | Sci Infinity')}</span>
                </div>
              </div>

              {/* تذييل الصفحة المصغر */}
              <div className="w-full flex items-center justify-between pt-3 border-t border-gray-200 opacity-70 text-xs text-gray-500">
                <span>{t('فريق تحرير Sci Infinity', 'Sci Infinity Editorial Team')}</span>
                <span className="dir-ltr font-sans">© Sci Infinity 2026</span>
              </div>
            </div>

          </div>

          {/* إشعار حالة الملف المؤقت في أسفل العارض (Toast) */}
          {toastMessage && (
            <div className="w-full px-4 py-2.5 bg-brand-deep-purple text-white text-center text-xs font-bold animate-fadeIn">
              {toastMessage}
            </div>
          )}
        </div>
      </section>

      {/* 3. تفاصيل الإصدار والتنويه التحريري (3 Cards Matrix) */}
      <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        <div className="p-6 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between space-y-3 shadow-sm hover:border-brand-purple/40 transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-purple/10 text-brand-purple flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-base text-gray-900">
              {t('مجلة فضول', 'Fudul Magazine')}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {t(
              'المنصة التحريرية لمبادرة Sci Infinity؛ المعنية بنشر المعرفة العلمية وتبسيطها بأسلوب رصين وموثوق.',
              'The editorial publication platform of Sci Infinity, dedicated to communicating research with academic rigor.'
            )}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between space-y-3 shadow-sm hover:border-brand-purple/40 transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-ocean/10 text-brand-ocean flex items-center justify-center">
              <Bookmark className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-base text-gray-900">
              {t('الإصدار الأول', 'Inaugural Issue')}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {t(
              'النسخة الافتتاحية للمجلة. يغطي مقالات في التكنولوجيا الحيوية، وتطبيقات النانو تكنولوجي، ومسارات البحث العلمي.',
              'Inaugural edition featuring biotechnology insights, nanotechnology applications, and research pathways.'
            )}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-gray-200 flex flex-col justify-between space-y-3 shadow-sm hover:border-brand-purple/40 transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 text-brand-cyan flex items-center justify-center">
              <Eye className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-base text-gray-900">
              {t('تجربة قراءة رحبة', 'Immersive Reading')}
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {t(
              'صُمم العارض بدقة لراحة العين دون أي مشتتات جانبية، ويدعم التكبير والقراءة في وضع ملء الشاشة.',
              'Viewer precision-crafted for ocular comfort, distraction-free focus, zooming, and full-screen reading.'
            )}
          </p>
        </div>
      </section>

    </div>
  );
};
