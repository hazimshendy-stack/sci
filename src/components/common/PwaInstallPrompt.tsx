import React, { useState, useEffect } from 'react';
import { useLocale } from '../../context/LocaleContext';
import { Smartphone, Download, X, Check } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const PwaInstallPrompt: React.FC = () => {
  const { t } = useLocale();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS] = useState(() => {
    if (typeof window === 'undefined') return false;
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  });
  const [isStandalone] = useState(() => {
    if (typeof window === 'undefined') return false;
    const nav = window.navigator as unknown as Record<string, unknown>;
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      Boolean(nav.standalone === true)
    );
  });
  const [dismissed, setDismissed] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [installedSuccess, setInstalledSuccess] = useState(false);

  useEffect(() => {
    // Capture the beforeinstallprompt event (Chromium)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setInstalledSuccess(true);
      setDeferredPrompt(null);
      setTimeout(() => {
        setDismissed(true);
      }, 3500);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIosGuide(true);
      return;
    }

    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    
    if (choice.outcome === 'accepted') {
      setInstalledSuccess(true);
      setDeferredPrompt(null);
      setTimeout(() => {
        setDismissed(true);
      }, 3500);
    } else {
      setDismissed(true);
    }
  };

  // If already standalone or user dismissed or neither prompt nor iOS
  if (isStandalone || dismissed || (!deferredPrompt && !isIOS)) {
    return null;
  }

  return (
    <div className="fixed bottom-5 start-5 end-5 sm:start-auto sm:end-6 sm:w-96 z-50 animate-slideUp">
      <div className="p-4 rounded-2xl bg-white border-2 border-brand-purple/40 shadow-2xl flex flex-col gap-3">
        
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-purple/15 text-brand-purple flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">
                {installedSuccess
                  ? t('تم تثبيت التطبيق بنجاح!', 'App Installed Successfully!')
                  : t('تثبيت تطبيق Sci Infinity', 'Install Sci Infinity App')}
              </h4>
              <p className="text-xs text-gray-500">
                {installedSuccess
                  ? t('أصبح التطبيق متاحاً على شاشتك الرئيسية.', 'Available on your home screen.')
                  : t('تصفح أسرع، وتجربة سلسة وتصفح بدون إنترنت.', 'Faster access and offline support.')}
              </p>
            </div>
          </div>

          <button
            onClick={() => setDismissed(true)}
            className="p-1 rounded-lg text-gray-400 hover:text-gray-600"
            aria-label="Dismiss install banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {showIosGuide ? (
          <div className="p-3 rounded-xl bg-brand-purple/10 text-xs text-gray-700 space-y-1">
            <p className="font-bold text-brand-purple">
              {t('طريقة التثبيت على نظام iOS:', 'How to install on iOS Safari:')}
            </p>
            <p>
              {t(
                'اضغط على زر المشاركة (Share) أسفل المتصفح، ثم اختر "إضافة إلى الشاشة الرئيسية" (Add to Home Screen).',
                'Tap the Share button at the bottom of Safari, then select "Add to Home Screen".'
              )}
            </p>
          </div>
        ) : (
          !installedSuccess && (
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={handleInstallClick}
                className="flex-1 py-2 px-3 rounded-xl bg-brand-purple hover:bg-brand-purple/90 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                {isIOS ? (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>{t('طريقة التثبيت', 'How to Install')}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>{t('تثبيت الآن', 'Install Now')}</span>
                  </>
                )}
              </button>
              <button
                onClick={() => setDismissed(true)}
                className="py-2 px-3 rounded-xl bg-gray-100 text-gray-600 text-xs font-semibold hover:bg-gray-200 transition-colors"
              >
                {t('لاحقاً', 'Later')}
              </button>
            </div>
          )
        )}

        {installedSuccess && (
          <div className="flex items-center gap-2 text-xs font-semibold text-green-600">
            <Check className="w-4 h-4" />
            <span>{t('جاهز للاستخدام', 'Ready for use')}</span>
          </div>
        )}

      </div>
    </div>
  );
};
