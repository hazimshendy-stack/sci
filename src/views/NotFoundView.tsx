import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';
import { Home, ArrowLeft, ArrowRight } from 'lucide-react';

export const NotFoundView: React.FC = () => {
  const { locale, t, dir } = useLocale();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-xl">
        {/* Big 404 */}
        <div className="text-8xl sm:text-9xl font-black brand-gradient-text select-none">
          404
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {t('الصفحة غير موجودة', 'Page Not Found')}
          </h1>
          <p className="text-base text-gray-600 leading-relaxed">
            {t(
              'الرابط الذي طلبته غير متوفر أو ربما تم نقله. تحقق من الرابط أو عُد إلى الصفحة الرئيسية.',
              'The page you requested doesn\'t exist or may have moved. Please check the URL or return home.'
            )}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={`/${locale}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white brand-gradient-bg shadow-md hover:opacity-95 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>{t('العودة للرئيسية', 'Back to Home')}</span>
          </Link>
          <Link
            to={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
          >
            <span>{t('تواصل معنا', 'Contact Support')}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
