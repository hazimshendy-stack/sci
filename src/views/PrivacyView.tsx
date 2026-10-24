import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';
import { Shield, FileText } from 'lucide-react';

export const PrivacyView: React.FC = () => {
  const { locale, t } = useLocale();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5" />
          <span>{t('الخصوصية والأمان', 'Privacy & Security')}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          {t('سياسة الخصوصية وحماية البيانات', 'Privacy & Data Protection Policy')}
        </h1>
        <p className="text-sm text-gray-500">
          {t('آخر تحديث: أكتوبر 2026 | معتمدة رسمياً', 'Last updated: October 2026 | Officially Approved')}
        </p>
      </div>


      <div className="prose prose-gray max-w-none space-y-8 text-sm leading-relaxed text-gray-700">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">{t('1. البيانات التي نجمعها', '1. Data We Collect')}</h2>
          <p>{t(
            'عند تقديم طلب تطوع أو إرسال رسالة تواصل، نجمع: الاسم الكامل، البريد الإلكتروني، رقم الهاتف، الجامعة والكلية، والسنة الدراسية. لا نجمع بيانات تصفح أو كوكيز تتبع بشكل افتراضي.',
            'When submitting a volunteer application or contact message, we collect: full name, email, phone number, university, faculty, and academic year. We do not collect browsing data or tracking cookies by default.'
          )}</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">{t('2. كيف نستخدم البيانات', '2. How We Use Your Data')}</h2>
          <p>{t(
            'تُستخدم البيانات المقدمة حصرياً للتواصل مع مقدمي الطلبات، وتقييم أهليتهم للانضمام لفريق المبادرة، أو الرد على استفساراتهم. لا تُشارك البيانات مع أي طرف خارجي.',
            'Submitted data is used exclusively to contact applicants, evaluate their volunteer eligibility, or respond to their inquiries. Data is never shared with third parties.'
          )}</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">{t('3. حفظ البيانات وحمايتها', '3. Data Storage & Security')}</h2>
          <p>{t(
            'تُحفظ طلبات التطوع والرسائل في قاعدة بيانات مؤمنة لا يمكن الوصول إليها إلا من قِبل أعضاء الفريق المخولين برقابة بروتوكول RBAC. بيانات المتقدمين محمية ببوليسيات أمان مستوى قاعدة البيانات (Row Level Security).',
            'Applications and messages are stored in a secure database accessible only to authorized team members via RBAC protocols. Applicant data is protected by database-level Row Level Security (RLS) policies.'
          )}</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">{t('4. فترة الاحتفاظ', '4. Retention Period')}</h2>
          <p>{t(
            '(قيد التحديد النهائي من صاحب المشروع) — سيتم الإعلان عن فترة الاحتفاظ وإجراءات الحذف عند الطلب بعد الاعتماد الرسمي للسياسة.',
            '(Pending final owner specification) — Retention period and deletion-on-request procedures will be announced upon official policy approval.'
          )}</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900">{t('5. حقوقك كمستخدم', '5. Your Rights')}</h2>
          <p>{t(
            'يحق لك في أي وقت طلب الاطلاع على بياناتك أو تصحيحها أو حذفها. يُرجى التواصل عبر البريد الإلكتروني الرسمي للمبادرة.',
            'You may at any time request access to, correction of, or deletion of your data. Please contact us via our official email address.'
          )}</p>
        </section>
      </div>

      <div className="pt-6 border-t border-gray-200 text-xs text-gray-500 space-y-2">
        <p>{t('للاستفسارات المتعلقة بالخصوصية:', 'For privacy-related inquiries:')} <a href="mailto:sci.infinity.official@gmail.com" className="text-brand-ocean hover:underline">sci.infinity.official@gmail.com</a></p>
        <Link to={`/${locale}/contact`} className="inline-flex items-center gap-1 text-brand-purple hover:underline">
          <FileText className="w-3.5 h-3.5" />
          {t('إرسال طلب حذف بيانات', 'Submit a Data Deletion Request')}
        </Link>
      </div>
    </div>
  );
};
