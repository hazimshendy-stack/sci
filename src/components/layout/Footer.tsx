import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../../context/LocaleContext';
import { siteSettings } from '../../data/seedData';
import { Shield } from 'lucide-react';
import { 
  FacebookIcon, 
  InstagramIcon, 
  LinkedinIcon, 
  YoutubeIcon, 
  SpotifyIcon, 
  TikTokIcon, 
  WhatsAppIcon 
} from '../icons/SocialIcons';
import { publicAsset } from '../../lib/publicAsset';

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  const { locale, t } = useLocale();

  const footerLinks = [
    { path: `/${locale}`, labelAr: 'الرئيسية', labelEn: 'Home' },
    { path: `/${locale}/about`, labelAr: 'عن المبادرة', labelEn: 'About' },
    { path: `/${locale}/projects-activities`, labelAr: 'الأنشطة', labelEn: 'Activities' },
    { path: `/${locale}/team`, labelAr: 'الفريق', labelEn: 'Team' },
    { path: `/${locale}/fudul`, labelAr: 'فضول', labelEn: 'Fudul' },
    { path: `/${locale}/sci-cast`, labelAr: 'ساي كاست', labelEn: 'Sci Cast' },
    { path: `/${locale}/research`, labelAr: 'الأبحاث', labelEn: 'Research' },
    { path: `/${locale}/contact`, labelAr: 'تواصل', labelEn: 'Contact' },
  ];

  const socialLinks = [
    { href: siteSettings.facebook_url, icon: <FacebookIcon className="w-[18px] h-[18px]" />, label: 'Facebook' },
    { href: siteSettings.instagram_url, icon: <InstagramIcon className="w-[18px] h-[18px]" />, label: 'Instagram' },
    { href: siteSettings.linkedin_url, icon: <LinkedinIcon className="w-[18px] h-[18px]" />, label: 'LinkedIn' },
    { href: siteSettings.youtube_url, icon: <YoutubeIcon className="w-[18px] h-[18px]" />, label: 'YouTube' },
    { href: siteSettings.spotify_url, icon: <SpotifyIcon className="w-[18px] h-[18px]" />, label: 'Spotify' },
    { href: siteSettings.tiktok_url, icon: <TikTokIcon className="w-[18px] h-[18px]" />, label: 'TikTok' },
    { href: siteSettings.whatsapp_url, icon: <WhatsAppIcon className="w-[18px] h-[18px]" />, label: 'WhatsApp' },
  ];

  return (
    <footer className="w-full brand-gradient-bg text-white mt-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Navigation */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link to={`/${locale}`} className="flex items-center gap-3 group" aria-label="Sci Infinity Home">
            <img 
              src={publicAsset('/images/logo.png')}
              alt="Sci Infinity Logo" 
              className="h-12 w-auto object-contain drop-shadow-sm select-none" 
            />
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-3 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white/80 hover:text-white transition-colors"
              >
                {t(link.labelAr, link.labelEn)}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2.5">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-2 text-xs opacity-85 text-white/90">
          <div className="flex items-center gap-3">
            <Link
              to={`/${locale}/privacy`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{t('سياسة الخصوصية', 'Privacy Policy')}</span>
            </Link>
          </div>
          <span className="dir-ltr">© {CURRENT_YEAR} Sci Infinity. {t('جميع الحقوق محفوظة.', 'All rights reserved.')}</span>
        </div>

      </div>
    </footer>
  );
};
