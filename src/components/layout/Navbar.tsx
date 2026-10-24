import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLocale } from '../../context/LocaleContext';
import { Globe, Menu, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { publicAsset } from '../../lib/publicAsset';

export const Navbar: React.FC = () => {
  const { locale, setLocale, t, dir } = useLocale();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: `/${locale}`, labelAr: 'الرئيسية', labelEn: 'Home' },
    { path: `/${locale}/about`, labelAr: 'عن المبادرة', labelEn: 'About the Initiative' },
    { path: `/${locale}/projects-activities`, labelAr: 'الأنشطة والمعسكرات', labelEn: 'Activities & Camps' },
    { path: `/${locale}/team`, labelAr: 'فريق العمل واللجان', labelEn: 'Team & Committees' },
    { path: `/${locale}/partners`, labelAr: 'الشراكات المؤسسية', labelEn: 'Partnerships' },
    { path: `/${locale}/fudul`, labelAr: 'مجلة فضول العلمية', labelEn: 'Fudul Magazine' },
    { path: `/${locale}/sci-cast`, labelAr: 'بودكاست ساي كاست', labelEn: 'Sci Cast Podcast' },
    { path: `/${locale}/research`, labelAr: 'الإنتاج البحثي', labelEn: 'Research Output' },
    { path: `/${locale}/contact`, labelAr: 'تواصل معنا', labelEn: 'Contact Us' },
  ];

  const isActive = (path: string) => {
    if (path === `/${locale}` && location.pathname === `/${locale}`) return true;
    if (path !== `/${locale}` && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Handle escape key and prevent body scroll when drawer is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDrawerOpen]);

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 brand-gradient-bg shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
        <div className="relative h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center sm:flex sm:justify-between">
          
          {/* Left / Start Control: Side Menu Hamburger Trigger */}
          <div className="flex items-center gap-2 z-10 justify-self-start">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label={t('فتح القائمة الرئيسية', 'Open Navigation Menu')}
              aria-expanded={isDrawerOpen}
              aria-controls="side-navigation-drawer"
            >
              <Menu className="w-5 h-5" />
              <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
                {t('القائمة', 'Menu')}
              </span>
            </button>
          </div>

          {/* Center: Horizontally Centered Logo */}
          <div className="flex items-center justify-center pointer-events-none justify-self-center sm:absolute sm:left-1/2 sm:-translate-x-1/2">
            <Link 
              to={`/${locale}`} 
              className="pointer-events-auto flex items-center justify-center p-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40 transition-transform hover:scale-105"
              aria-label="Sci Infinity Home"
            >
              <img 
                src={publicAsset('/images/logo.png')}
                alt="Sci Infinity Logo" 
                className="h-12 sm:h-16 w-auto max-w-[48px] sm:max-w-[220px] object-contain drop-shadow-sm select-none"
              />
            </Link>
          </div>

          {/* Right / End Controls: Join Us CTA & Language Switcher */}
          <div className="flex items-center gap-1 sm:gap-3 z-10 justify-self-end">
            {/* Join Us CTA */}
            <Link
              to={`/${locale}/join-us`}
              className="hidden sm:inline-flex items-center justify-center px-2 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white text-brand-deep-purple hover:bg-white/95 active:scale-95 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <span>{t('انضم إلينا', 'Join Us')}</span>
            </Link>

            {/* Language Switcher */}
            <button
              onClick={() => setLocale(locale === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1.5 px-1.5 sm:px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label={locale === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-bold">{locale === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
          </div>

        </div>
      </header>

      {/* Side Navigation Drawer (Slide-out Sidebar) */}
      <div 
        id="side-navigation-drawer"
        className={`fixed inset-0 z-50 transition-visibility duration-300 ${
          isDrawerOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
        }`}
        aria-hidden={!isDrawerOpen}
      >
        {/* Backdrop overlay */}
        <div 
          onClick={() => setIsDrawerOpen(false)}
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isDrawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <aside 
          className={`fixed top-0 bottom-0 ${
            dir === 'rtl' ? 'right-0' : 'left-0'
          } w-full max-w-xs sm:max-w-sm bg-white text-gray-900 shadow-2xl flex flex-col z-10 transform transition-transform duration-300 ease-out ${
            isDrawerOpen 
              ? 'translate-x-0' 
              : dir === 'rtl' ? 'translate-x-full' : '-translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label={t('قائمة التنقل الجانبية', 'Side Navigation')}
        >
          {/* Drawer Header with Logo & Close Button */}
          <div className="p-5 brand-gradient-bg text-white flex items-center justify-between shadow-md">
            <Link 
              to={`/${locale}`}
              onClick={() => setIsDrawerOpen(false)}
              className="flex items-center gap-3 group"
            >
              <img 
                src={publicAsset('/images/logo.png')}
                alt="Sci Infinity" 
                className="h-10 w-auto object-contain drop-shadow" 
              />
            </Link>

            <button
              onClick={() => setIsDrawerOpen(false)}
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/10 hover:bg-white/20 active:bg-white/30 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label={t('إغلاق القائمة', 'Close Menu')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links List */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1.5 divide-y divide-gray-100">
            <div className="space-y-1 pb-3">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsDrawerOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      active
                        ? 'brand-gradient-bg text-white shadow-sm font-bold'
                        : 'text-gray-700 hover:text-brand-purple hover:bg-gray-50 active:bg-gray-100'
                    }`}
                  >
                    <span>{t(link.labelAr, link.labelEn)}</span>
                    <ArrowIcon className={`w-4 h-4 transition-transform ${active ? 'text-white' : 'text-gray-400'}`} />
                  </Link>
                );
              })}
            </div>

            {/* Quick Actions in Drawer */}
            <div className="pt-4 space-y-2.5">
              <Link
                to={`/${locale}/join-us`}
                onClick={() => setIsDrawerOpen(false)}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white brand-gradient-bg shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2"
              >
                <span>{t('انضم إلينا كمتطوع', 'Join as a Volunteer')}</span>
                <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link
                to={`/${locale}/contact`}
                onClick={() => setIsDrawerOpen(false)}
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all flex items-center justify-center gap-1.5"
              >
                <span>{t('تواصل مع إدارة المبادرة', 'Contact Leadership')}</span>
              </Link>
            </div>
          </nav>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
            <p className="text-[11px] text-gray-500 font-medium">
              Sci Infinity Initiative © 2026
            </p>
          </div>
        </aside>
      </div>
    </>
  );
};
