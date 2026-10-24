import React from 'react';
import { useLocale } from '../context/LocaleContext';
import { aboutData } from '../data/seedData';
import { Target, Compass, CheckCircle2 } from 'lucide-react';

export const AboutView: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-ocean">
          {t('من نحن', 'Who We Are')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          {t('عن مبادرة', 'About')} <span className="brand-gradient-text">Sci Infinity</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          {t(
            'مبادرة طلابية وعلمية بكلية العلوم — جامعة المنصورة، تركز على بناء بيئة داعمة للبحث العلمي والابتكار ونقل المعرفة الأكاديمية إلى التطبيق العملي.',
            'A student and scientific research initiative at the Faculty of Science, Mansoura University, committed to fostering innovation, academic rigor, and practical translation.'
          )}
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-brand-purple/15 text-brand-purple flex items-center justify-center">
            <Compass className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {t('رؤية المبادرة', 'Our Vision')}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t(
              'أن نكون المنصة الرائدة في تمكين الطلاب والباحثين الشباب من إنتاج أبحاث علمية ذات أثر مجتمعي ونشرها دولياً، وتأهيلهم لمتطلبات الثورة العلمية والصناعية.',
              'To be the foremost platform empowering student researchers to generate impactful scientific research, publish internationally, and lead in evolving scientific industries.'
            )}
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-xl bg-brand-cyan/15 text-brand-cyan flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {t('رسالة المبادرة', 'Our Mission')}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t(aboutData.mission_ar, aboutData.mission_en)}
          </p>
        </div>
      </div>

      {/* 8 Goals */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {t('أهدافنا الاستراتيجية', 'Strategic Objectives')}
          </h2>
          <p className="text-sm text-gray-600">
            {t('8 محاور استراتيجية ترتكز عليها جميع أنشطة ومعسكرات المبادرة.', '8 core objectives anchoring all initiative workshops and camps.')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {aboutData.goals.map((g, idx) => (
            <div 
              key={g.id} 
              className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-3"
            >
              <div className="w-7 h-7 rounded-full brand-gradient-bg text-white text-xs font-bold flex items-center justify-center">
                {idx + 1}
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-snug">
                {t(g.title_ar, g.title_en)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 6 Core Values */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            {t('قيم العمل الأساسية', 'Core Values')}
          </h2>
          <p className="text-sm text-gray-600">
            {t('الركائز التي تحكم ثقافة الفريق والتعامل الأكاديمي والمهني.', 'The pillars governing our culture, ethics, and academic conduct.')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutData.values.map((v) => (
            <div 
              key={v.id} 
              className="p-6 rounded-2xl bg-white border border-gray-200 space-y-2"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-ocean" />
                <h3 className="font-bold text-lg text-gray-900">
                  {t(v.title_ar, v.title_en)}
                </h3>
              </div>
              <p className="text-sm text-gray-600">
                {t(v.desc_ar, v.desc_en)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Reference */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gray-50 border border-gray-200 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">
            {t('الخطة الزمنية ومسار التطوير', 'The Development Pathway')}
          </h2>
          <p className="text-sm text-gray-600">
            {t(
              'يبدأ الطريق بالتعليم الجامعي، ثم مساعدة الطلاب في اختيار مجال للدراسة والعمل، وتقديم دورات تدريبية عملية ونظرية، ثم تعليم أساسيات البحث العلمي وتحليل البيانات، وصولاً للتطبيق في فرق بحثية متميزة.',
              'The journey begins with academic grounding, mentorship in choosing career tracks, practical training, research methodology, and real interdisciplinary project participation.'
            )}
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-300 shadow-md">
          <img 
            src="/images/timeline-photo.png" 
            alt="Timeline Photo" 
            className="w-full h-auto object-contain"
            onError={(e) => {
              // Fallback placeholder if image fails to render
              (e.target as HTMLElement).style.display = 'none';
            }} 
          />
        </div>
      </div>

    </div>
  );
};
