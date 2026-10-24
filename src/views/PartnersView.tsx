import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';
import { publicAsset } from '../lib/publicAsset';
import { Handshake, Building2, ShieldCheck, ArrowRight, ArrowLeft, Radio, Lightbulb, Target } from 'lucide-react';

export const PartnersView: React.FC = () => {
  const { locale, t, dir } = useLocale();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider">
          <Handshake className="w-3.5 h-3.5" />
          <span>{t('التعاون المؤسسي والاستراتيجي', 'Strategic & Institutional Collaboration')}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          {t('الشراكات ومجالات التعاون', 'Partnerships & Collaborations')}
        </h1>
        <p className="text-base text-gray-600 leading-relaxed">
          {t(
            'تتعاون مبادرة ساي إنفينيتي مع المؤسسات ومراكز ريادة الأعمال والابتكار لربط البحث العلمي بالتطبيق العملي وتمكين الباحثين والطلاب.',
            'Sci Infinity collaborates with entrepreneurship and innovation hubs to bridge academic scientific research with practical real-world impact.'
          )}
        </p>
      </div>

      {/* Featured Strategic Partner — Creativa Hub Mansoura */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200 shadow-md space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-ocean/5 rounded-full blur-2xl -z-10 pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
          <div className="shrink-0 p-6 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center">
            <img 
              src={publicAsset('/images/creativa-hub-logo.png')} 
              alt="Creativa Hub Mansoura — مراكز إبداع مصر الرقمية" 
              className="h-28 sm:h-36 w-auto object-contain"
            />
          </div>

          <div className="space-y-4 flex-1 text-center lg:text-start">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-700 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t('شراكة استراتيجية معتمدة', 'Verified Strategic Partnership')}</span>
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-brand-ocean/10 text-brand-ocean font-semibold">
                {t('ريادة الأعمال والابتكار الرقمي', 'Entrepreneurship & Digital Innovation')}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              {t('مراكز إبداع مصر الرقمية (Creativa Hub Mansoura)', 'Creativa Hub Mansoura (Digital Egypt Innovation Centers)')}
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {t(
                'التعاون الاستراتيجي مع مراكز إبداع مصر الرقمية كريتيفا يشمل استضافة وتدريب معسكرات توليد الأفكار (Ideation Camp) وورش التفكير التصميمي (Design Thinking)، بالإضافة إلى الشراكة الإعلامية الرسمية واستضافة جلسات تسجيل بودكاست ساي كاست (Sci Cast).',
                'Strategic collaboration with Creativa Hub covering hosting and training for the Ideation Camp, Design Thinking workshops, and official media cooperation hosting Sci Cast podcast recording sessions.'
              )}
            </p>
          </div>
        </div>

        {/* Pillars of Collaboration with Creativa */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-gray-900">
              {t('معسكرات توليد الأفكار', 'Ideation & Incubation')}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {t('تدريب الفرق الطلابية على تحويل المشكلات إلى نماذج أعمال مبتكرة.', 'Guiding student teams in transforming real problems into scalable business models.')}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-green-500/10 text-green-700 flex items-center justify-center">
              <Radio className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-gray-900">
              {t('استضافة بودكاست Sci Cast', 'Sci Cast Podcast Hosting')}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {t('التعاون الإعلامي واستضافة تسجيل الحوارات واللقاءات العلمية.', 'Official media collaboration hosting recordings of scientific dialogues.')}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-brand-ocean/10 text-brand-ocean flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-gray-900">
              {t('ورش التفكير التصميمي', 'Design Thinking Tracks')}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              {t('تطوير مهارات حل المشكلات وابتكار الحلول التطبيقية القابلة للتنفيذ.', 'Enhancing problem-solving and developing actionable technological solutions.')}
            </p>
          </div>
        </div>
      </div>

      {/* Honest Transparency Notice */}
      <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-600 space-y-2">
        <div className="flex items-center gap-2 font-bold text-gray-900">
          <Building2 className="w-4 h-4 text-brand-purple" />
          <span>{t('ميثاق النزاهة والشفافية في إعلان الشراكات:', 'Partnership Integrity & Disclosure Standards:')}</span>
        </div>
        <p className="leading-relaxed">
          {t(
            'تلتزم مبادرة ساي إنفينيتي بنشر الشراكات المعتمدة رسمياً فقط، وعدم استخدام شعارات أو ادعاءات رعاية دون تفويض وموافقة موثقة. تُنشر الشعارات المؤسسية الجديدة بعد اكتمال مراجعتها الرسمية والتنسيق المعتمد مع الجهات الشريكة.',
            'Sci Infinity adheres to verified disclosure standards: partner logos and sponsorship claims are published strictly upon formal clearance and agreement.'
          )}
        </p>
      </div>

      {/* Call for New Partnerships */}
      <div className="rounded-3xl p-8 sm:p-12 text-center brand-gradient-bg text-white space-y-6 shadow-xl shadow-brand-purple/20">
        <h2 className="text-2xl sm:text-4xl font-extrabold max-w-2xl mx-auto leading-tight">
          {t('هل تمثل مؤسسة أكاديمية أو صناعية أو حاضنة أعمال؟', 'Represent an Academic, Industrial, or Innovation Hub?')}
        </h2>
        <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto font-normal">
          {t(
            'نرحب دائماً بالتعاون المشترك في تنظيم المعسكرات التدريبية، ودعم الأبحاث التطبيقية، ورعاية الفعاليات العلمية للطلاب والباحثين.',
            'We welcome collaborations in specialized training camps, applied research incubation, and scientific student forums.'
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
