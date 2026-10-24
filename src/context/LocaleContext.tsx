import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export type Locale = 'ar' | 'en';

interface LocaleContextType {
  locale: Locale;
  setLocale: (newLocale: Locale) => void;
  dir: 'rtl' | 'ltr';
  t: (arText: string, enText: string) => string;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'ar',
  setLocale: () => {},
  dir: 'rtl',
  t: (arText) => arText,
});

export const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathParts = location.pathname.split('/').filter(Boolean);
  const urlLocale: Locale | null = pathParts[0] === 'en' ? 'en' : pathParts[0] === 'ar' ? 'ar' : null;

  const [fallbackLocale, setFallbackLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem('sci-infinity-locale');
    return saved === 'en' ? 'en' : 'ar';
  });

  const locale: Locale = urlLocale ?? fallbackLocale;

  useEffect(() => {
    if (urlLocale) {
      localStorage.setItem('sci-infinity-locale', urlLocale);
    }
  }, [urlLocale]);

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    if (locale === 'ar') {
      document.body.classList.remove('font-english');
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
      document.body.classList.add('font-english');
    }
  }, [locale, dir]);

  const setLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;
    localStorage.setItem('sci-infinity-locale', newLocale);
    setFallbackLocale(newLocale);

    if (urlLocale) {
      const rest = pathParts.slice(1).join('/');
      const newPath = `/${newLocale}${rest ? `/${rest}` : ''}${location.search}`;
      navigate(newPath);
    }
  };

  const t = (arText: string, enText: string) => {
    return locale === 'ar' ? arText : enText;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, dir, t }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
