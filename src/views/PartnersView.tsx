import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';
import { Handshake, Building2, Lightbulb, GraduationCap, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

export const PartnersView: React.FC = () => {
  const { locale, t, dir } = useLocale();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const partnerships = [
    {
      id: 'mansoura-faculty-science',
      title_ar: 'الأنشطة الطلابية بكلية العلوم — جامعة المنصورة',
      title_en: 'Faculty of Science Student Activities — Mansoura University',
      category: 'academic',
      icon: <GraduationCap className="w-8 h-8 text-brand-purple" />,
      role_ar: 'الحاضنة الأكاديمية والبيئة الجامعية للفعاليات والملتقيات العلمية',
      role_en: 'Academic home and university setting for student forums and scientific tracks',
      status_ar: 'تعاون أكاديمي مستمر',
      status_en: 'Ongoing Academic Collaboration',
    },
    {
      id: 'creativa-mansoura',
      title_ar: 'مراكز إبداع مصر الرقمية (Creativa Hub Mansoura)',
      title_en: 'Creativa Hub Mansoura (Digital Egypt Innovation Centers)',
      category: 'innovation',
      icon: <Lightbulb className="w-8 h-8 text-brand-ocean" />,
      role_ar: 'شريك استضافة وتدريب لمعسكر توليد الأفكار (Ideation Camp) وورش التفكير التصميمي وريادة الأعمال',
      role_en: 'Hosting and training partner for the Ideation Camp, Design Thinking, and Startup incubation tracks',
      status_ar: 'تعاون في معسكرات الابتكار وريادة الأعمال',
      status_en: 'Innovation & Camp Collaboration',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider">
          <Handshake className="w-3.5 h-3.5" />
          <span>{t('التعاون المؤسسي والأكاديمي', 'Institutional & Academic Collaboration')}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          {t('الشراكات ومجالات التعاون', 'Partnerships & Collaborations')}
        </h1>
        <p className="text-base text-gray-600">
          {t(
            'تتعاون مبادرة ساي إنفينيتي مع المؤسسات الأكاديمية ومراكز ريادة الأعمال لربط البحث العلمي بالتطبيق الصناعي والمجتمعي.',
            'Sci Infinity collaborates with academic institutions and entrepreneurship hubs to connect research with real-world impact.'
          )}
        </p>
      </div>

      {/* Verified Collaborations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {partnerships.map((p) => (
          <div
            key={p.id}
            className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-6 hover:border-brand-purple/40 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center">
                  {p.icon}
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-700 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t(p.status_ar, p.status_en)}</span>
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                {t(p.title_ar, p.title_en)}
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                {t(p.role_ar, p.role_en)}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 text-xs text-gray-500">
              <span>{t('تعاون موثق ضمن سجل فعاليات المبادرة', 'Verified active partner within initiative records')}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Honest Transparency Notice */}
      <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-600 space-y-2">
        <div className="flex items-center gap-2 font-bold text-gray-900">
          <Building2 className="w-4 h-4 text-brand-purple" />
          <span>{t('ميثاق النزاهة في إعلان الشراكات:', 'Partnership Disclosure & Integrity Charter:')}</span>
        </div>
        <p>
          {t(
            'تلتزم مبادرة ساي إنفينيتي بنشر الشراكات المعتمدة رسمياً فقط، وعدم استخدام شعارات أو ادعاءات رعاية دون تفويض وموافقة موثقة. تُنشر الشعارات والعقود المؤسسية الجديدة بعد اكتمال مراجعتها القانونية.',
            'Sci Infinity adheres to verified disclosure standards: partner logos and sponsorship claims are published only upon formal clearance and agreement.'
          )}
        </p>
      </div>

      {/* Call for New Partnerships */}
      <div className="rounded-3xl p-8 sm:p-12 text-center brand-gradient-bg text-white space-y-6 shadow-xl shadow-brand-purple/20">
        <h2 className="text-2xl sm:text-4xl font-extrabold max-w-2xl mx-auto">
          {t('هل تمثل مؤسسة أكاديمية أو صناعية؟', 'Represent an Academic or Industrial Organization?')}
        </h2>
        <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto">
          {t(
            'نرحب دائماً بالتعاون في تنظيم المعسكرات التدريبية، ودعم الأبحاث التطبيقية، ورعاية الفعاليات العلمية للطلاب والباحثين.',
            'We welcome partnerships in specialized technical workshops, applied research projects, and scientific student forums.'
          )}
        </p>
        <div>
          <Link
            to={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-white text-brand-ink hover:bg-gray-100 shadow-md transition-all"
          >
            <span>{t('طلب شراكة أو رعاية', 'Request Partnership or Sponsorship')}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
};