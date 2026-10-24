import React, { useState } from 'react';
import { useLocale } from '../context/LocaleContext';
import { committees, siteSettings } from '../data/seedData';
import { UserPlus, Send, Mail, MessageCircle, CheckCircle2 } from 'lucide-react';

export const JoinUsView: React.FC = () => {
  const { t } = useLocale();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    faculty: '',
    academicYear: '',
    committeePreference1: committees[0].id,
    committeePreference2: '',
    experienceNotes: '',
  });

  const handleApplyViaEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const comm1 = committees.find(c => c.id === formData.committeePreference1);
    const comm2 = committees.find(c => c.id === formData.committeePreference2);

    const subjectLine = encodeURIComponent(`[Volunteer Application] ${formData.fullName} - ${comm1?.name_en || formData.committeePreference1}`);
    const bodyText = encodeURIComponent(
      `Full Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `University: ${formData.university}\n` +
      `Faculty: ${formData.faculty}\n` +
      `Academic Year: ${formData.academicYear}\n` +
      `First Preference: ${comm1?.name_en || ''} (${comm1?.name_ar || ''})\n` +
      `Second Preference: ${comm2 ? `${comm2.name_en} (${comm2.name_ar})` : 'None'}\n\n` +
      `Experience & Motivation:\n${formData.experienceNotes}`
    );

    window.location.href = `mailto:${siteSettings.official_email}?subject=${subjectLine}&body=${bodyText}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider">
          <UserPlus className="w-3.5 h-3.5" />
          <span>{t('فتح باب التطوع', 'Volunteer Applications')}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          {t('انضم إلى فريق عمل', 'Join the Team at')} <span className="brand-gradient-text">Sci Infinity</span>
        </h1>
        <p className="text-base text-gray-600">
          {t(
            'شارك في بناء وتطوير برامج البحث العلمي وإدارة الفعاليات وصناعة المحتوى الأكاديمي المتميز.',
            'Be part of advancing scientific workshops, leadership initiatives, and academic content production.'
          )}
        </p>
      </div>

      {/* Info Notice Box */}
      <div className="p-6 rounded-2xl bg-brand-purple/5 border border-brand-purple/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-start">
          <h2 className="text-sm font-bold text-gray-900">
            {t('التقديم المباشر عبر البريد الرسمي أو واتساب', 'Direct Application via Official Email or WhatsApp')}
          </h2>
          <p className="text-xs text-gray-600">
            {t(
              'يمكنك تعبئة بياناتك أدناه لتجهيز بريد إلكتروني مباشر إلى لجنة الموارد البشرية، أو التواصل معنا عبر واتساب.',
              'Fill out your details below to compose an application email directly to our HR team, or reach out via WhatsApp.'
            )}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={siteSettings.whatsapp_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('واتساب', 'WhatsApp')}</span>
          </a>
          <a
            href={`mailto:${siteSettings.official_email}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-purple hover:bg-brand-purple/90 text-white text-xs font-bold shadow-sm transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>{t('البريد الرسمي', 'Official Email')}</span>
          </a>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleApplyViaEmail} className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-6">
        
        {/* Personal Details */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-ocean border-b border-gray-100 pb-2">
            {t('البيانات الشخصية', 'Personal Details')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">{t('الاسم الكامل *', 'Full Name *')}</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder={t('اسمك الرباعي', 'Your full name')}
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-purple"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">{t('البريد الإلكتروني *', 'Email *')}</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="email@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-purple"
              />
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="text-xs font-bold text-gray-700">{t('رقم الهاتف / واتساب *', 'Phone / WhatsApp *')}</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+20 100 000 0000"
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-purple dir-ltr text-end"
              />
            </div>
          </div>
        </div>

        {/* Academic Details */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-ocean border-b border-gray-100 pb-2">
            {t('البيانات الأكاديمية', 'Academic Information')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">{t('الجامعة *', 'University *')}</label>
              <input
                type="text"
                required
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                placeholder={t('جامعة المنصورة', 'Mansoura University')}
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-purple"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">{t('الكلية والتخصص *', 'Faculty & Major *')}</label>
              <input
                type="text"
                required
                value={formData.faculty}
                onChange={(e) => setFormData({ ...formData, faculty: e.target.value })}
                placeholder={t('كلية العلوم - كيمياء', 'Faculty of Science')}
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-purple"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">{t('الفرقة الدراسية', 'Academic Year')}</label>
              <input
                type="text"
                value={formData.academicYear}
                onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                placeholder={t('الفرقة الثالثة', '3rd Year')}
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-purple"
              />
            </div>
          </div>
        </div>

        {/* Committee Preferences */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-brand-ocean border-b border-gray-100 pb-2">
            {t('تفضيلات اللجان', 'Committee Preferences')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">{t('الرغبة الأولى *', 'First Preference *')}</label>
              <select
                required
                value={formData.committeePreference1}
                onChange={(e) => setFormData({ ...formData, committeePreference1: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-purple"
              >
                {committees.map((c) => (
                  <option key={c.id} value={c.id}>{t(c.name_ar, c.name_en)}</option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700">{t('الرغبة الثانية', 'Second Preference')}</label>
              <select
                value={formData.committeePreference2}
                onChange={(e) => setFormData({ ...formData, committeePreference2: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-purple"
              >
                <option value="">{t('بدون رغبة ثانية', 'None')}</option>
                {committees.map((c) => (
                  <option key={c.id} value={c.id}>{t(c.name_ar, c.name_en)}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Experience Notes */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-700">
            {t('نبذة عن خبراتك وسبب رغبتك بالانضمام', 'Experience & Motivation')}
          </label>
          <textarea
            rows={4}
            value={formData.experienceNotes}
            onChange={(e) => setFormData({ ...formData, experienceNotes: e.target.value })}
            placeholder={t('تحدث بإيجاز عن مهاراتك والأنشطة السابقة التي شاركت بها...', 'Briefly tell us about your skills and prior activities...')}
            className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:border-brand-purple"
          ></textarea>
        </div>

        {/* Instructions */}
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-brand-purple shrink-0" />
          <p className="text-xs text-gray-600">
            {t(
              'بالضغط على الزر أدناه، سيتم فتح تطبيق بريدك الإلكتروني المعتمد وتعبئة الطلب تلقائياً لإرساله مباشرة إلى فريق المبادرة.',
              'Clicking the button will open your default email client with your prefilled application ready to send.'
            )}
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 rounded-xl font-bold text-white brand-gradient-bg shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>{t('إرسال طلب التطوع عبر البريد', 'Send Application via Email')}</span>
        </button>

      </form>

    </div>
  );
};
