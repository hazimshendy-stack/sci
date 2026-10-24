import React, { useState } from 'react';
import { useLocale } from '../context/LocaleContext';
import { siteSettings } from '../data/seedData';
import { Mail, MessageCircle, Send, Shield } from 'lucide-react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, SpotifyIcon, TikTokIcon, WhatsAppIcon } from '../components/icons/SocialIcons';

export const ContactView: React.FC = () => {
  const { t } = useLocale();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    category: 'inquiry',
    subject: '',
    message: '',
  });

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectLine = encodeURIComponent(`[${formData.category}] ${formData.subject || 'Inquiry from Sci Infinity Website'}`);
    const bodyText = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\nCategory: ${formData.category}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${siteSettings.official_email}?subject=${subjectLine}&body=${bodyText}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-ocean">
          {t('تواصل معنا', 'Get in Touch')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          {t('راسلنا أو تواصل معنا', 'Contact & Partnerships')}
        </h1>
        <p className="text-base text-gray-600">
          {t(
            'سواء كنت ترغب في الشراكة أو الاستفسار عن البرامج أو تقديم محتوى لمجلة فضول — يسعدنا تواصلك المباشر معنا.',
            'Whether for partnerships, program inquiries, or Fudul Magazine content — we would love to hear directly from you.'
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

        {/* Contact Info Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-5">
            <h2 className="text-lg font-bold text-gray-900">
              {t('قنوات التواصل الرسمية', 'Official Channels')}
            </h2>

            <a href={`mailto:${siteSettings.official_email}`}
              className="flex items-center gap-3 text-sm text-gray-700 hover:text-brand-ocean transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-brand-purple/15 text-brand-purple flex items-center justify-center group-hover:bg-brand-purple group-hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium">{siteSettings.official_email}</span>
            </a>

            <a href={siteSettings.whatsapp_url} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-700 hover:text-green-600 transition-colors group">
              <div className="w-9 h-9 rounded-lg bg-green-500/10 text-green-600 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                <MessageCircle className="w-4 h-4" />
              </div>
              <span className="font-medium">{t('تواصل عبر واتساب', 'WhatsApp Chat')}</span>
            </a>

            <div className="pt-3 border-t border-gray-100 space-y-3">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                {t('منصاتنا الرسمية', 'Social Platforms')}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { href: siteSettings.facebook_url, icon: <FacebookIcon className="w-4 h-4" />, label: 'Facebook', color: 'hover:bg-blue-600' },
                  { href: siteSettings.instagram_url, icon: <InstagramIcon className="w-4 h-4" />, label: 'Instagram', color: 'hover:bg-pink-600' },
                  { href: siteSettings.linkedin_url, icon: <LinkedinIcon className="w-4 h-4" />, label: 'LinkedIn', color: 'hover:bg-sky-600' },
                  { href: siteSettings.youtube_url, icon: <YoutubeIcon className="w-4 h-4" />, label: 'YouTube', color: 'hover:bg-red-600' },
                  { href: siteSettings.spotify_url, icon: <SpotifyIcon className="w-4 h-4" />, label: 'Spotify', color: 'hover:bg-green-500' },
                  { href: siteSettings.tiktok_url, icon: <TikTokIcon className="w-4 h-4" />, label: 'TikTok', color: 'hover:bg-black' },
                  { href: siteSettings.whatsapp_url, icon: <WhatsAppIcon className="w-4 h-4" />, label: 'WhatsApp', color: 'hover:bg-green-600' },
                ].map(({ href, icon, label, color }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className={`w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:text-white transition-all ${color}`}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Direct contact note */}
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs text-gray-600 flex items-start gap-2">
            <Shield className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
            <p>{t('المراسلة المباشرة عبر البريد والواتساب تتيح لك التواصل السريع والمباشر مع إدارة المبادرة.', 'Direct contact via email and WhatsApp gives you fast, direct access to the team.')}</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleEmailSubmit} className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-5">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-gray-900">
                {t('إرسال رسالة مباشرة', 'Send a Direct Message')}
              </h2>
              <p className="text-xs text-gray-500">
                {t('يمكنك ملء النموذج لفتح رسالتك وتجهيزها مباشرة في بريدك الإلكتروني المفضل.', 'Fill out the form below to open and compose directly in your email client.')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">{t('الاسم الكامل *', 'Full Name *')}</label>
                <input type="text" required value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={t('اسمك الكامل', 'Your full name')}
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-purple" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">{t('البريد الإلكتروني *', 'Email *')}</label>
                <input type="email" required value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-purple" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">{t('نوع الاستفسار *', 'Inquiry Type *')}</label>
              <select required value={formData.category}
                onChange={e => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-purple">
                <option value="partnership">{t('طلب شراكة مؤسسية', 'Partnership Request')}</option>
                <option value="inquiry">{t('استفسار عام عن البرامج', 'General Inquiry')}</option>
                <option value="support">{t('دعم أو مقترح', 'Support or Suggestion')}</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">{t('موضوع الرسالة *', 'Subject *')}</label>
              <input type="text" required value={formData.subject}
                onChange={e => setFormData({ ...formData, subject: e.target.value })}
                placeholder={t('موضوع رسالتك...', 'Your message subject...')}
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-purple" />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">{t('نص الرسالة *', 'Message *')}</label>
              <textarea required rows={5} value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder={t('اكتب رسالتك هنا...', 'Write your message here...')}
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-purple" />
            </div>

            <button type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-white brand-gradient-bg shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2">
              <Send className="w-4 h-4" />
              <span>{t('إرسال عبر البريد الإلكتروني', 'Send via Email Client')}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
