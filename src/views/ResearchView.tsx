import React from 'react';
import { useLocale } from '../context/LocaleContext';
import { researchAchievements } from '../data/seedData';
import { BookMarked, AlertCircle } from 'lucide-react';

export const ResearchView: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs font-bold uppercase tracking-wider">
          <BookMarked className="w-3.5 h-3.5" />
          <span>{t('الإنتاج العلمي والأكاديمي', 'Scientific & Academic Output')}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          {t('الإنجازات البحثية المنشورة', 'Published Research Achievements')}
        </h1>
        <p className="text-base text-gray-600">
          {t(
            'أوراق علمية وبحوث أنتجها وشارك فيها باحثو وطلاب المبادرة في مجلات ودوريات علمية.',
            'Peer-reviewed papers and research contributions produced or co-authored by Sci Infinity researchers.'
          )}
        </p>
      </div>

      {/* Research Papers List */}
      <div className="space-y-6">
        {researchAchievements.map((paper) => (
          <div
            key={paper.id}
            className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-5 hover:border-brand-purple/40 transition-all"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-md bg-brand-purple/15 text-brand-purple font-bold">
                {paper.journal_name}
              </span>
              <span className="text-gray-500 font-medium">
                {t('سنة النشر:', 'Publication Year:')} {paper.publication_year}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
              {t(paper.title_ar, paper.title_en)}
            </h2>

            <div className="text-sm font-semibold text-brand-ocean">
              {t('الباحثون:', 'Authors:')} {t(paper.authors_ar, paper.authors_en)}
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {t(paper.summary_ar, paper.summary_en)}
            </p>

            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-gray-500">
                <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                <span>
                  {t(
                    'رقم الـ DOI ومعامل التأثير جارٍ توثيقها رسميًا وفق سياسة الشفافية.',
                    'DOI and impact factors undergoing formal documentation in compliance with truthfulness standards.'
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
