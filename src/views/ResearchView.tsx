import React from 'react';
import { useLocale } from '../context/LocaleContext';
import { researchAchievements } from '../data/seedData';
import { BookMarked, ExternalLink, FileText, CheckCircle, Clock } from 'lucide-react';
import { FacebookEmbed } from '../components/common/FacebookEmbed';

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
          {t('الأبحاث والأوراق العلمية المنشورة', 'Published Research & Papers')}
        </h1>
        <p className="text-base text-gray-600">
          {t(
            'أوراق علمية وبحوث أنتجها وشارك فيها باحثو وطلاب المبادرة في مجلات ودوريات علمية دولية محكمة، لربط المعرفة الأكاديمية بالتطبيق العملي.',
            'Peer-reviewed papers and scientific research produced or co-authored by Sci Infinity scholars in international journals.'
          )}
        </p>
      </div>

      {/* Featured Research Paper */}
      <div className="space-y-8">
        {researchAchievements.map((paper) => (
          <div
            key={paper.id}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-8 hover:border-brand-purple/40 transition-all"
          >
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-brand-purple/15 text-brand-purple font-bold">
                  {paper.journal_name}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 font-medium">
                  {t('سنة النشر:', 'Year:')} {paper.publication_year}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-green-500/10 text-green-700 font-medium flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{t('بحث علمي منشور دولياً', 'International Publication')}</span>
                </span>
              </div>

              {/* Prominent Publication Link or DOI status */}
              {paper.doi ? (
                <a
                  href={`https://doi.org/${paper.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-brand-purple text-white hover:bg-brand-deep-purple transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <span>{t('رابط الورقة المنشورة (DOI)', 'View Article via DOI')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <div className="flex items-center gap-1.5 text-xs text-amber-700 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{t('رابط الـ DOI جارٍ توثيقه وإدراجه', 'DOI link pending entry in handoff')}</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
              {t(paper.title_ar, paper.title_en)}
            </h2>

            {/* Authors & Bibliographic details */}
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-xs text-gray-500 block">{t('الباحثون والمؤلفون المشاركون:', 'Authors & Contributors:')}</span>
                <span className="font-bold text-brand-ocean">
                  {t(paper.authors_ar, paper.authors_en)}
                </span>
              </div>
              <div>
                <span className="text-xs text-gray-500 block">{t('الدورية والمجلة العلمية:', 'Scientific Journal:')}</span>
                <span className="font-semibold text-gray-800">
                  {paper.journal_name} ({paper.publication_year})
                </span>
              </div>
            </div>

            {/* Summary / Abstract */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-purple" />
                <span>{t('ملخص البحث (Abstract):', 'Research Abstract / Summary:')}</span>
              </h3>
              <p className="text-base text-gray-700 leading-relaxed bg-gray-50/50 p-6 rounded-2xl border border-gray-100 font-sans">
                {t(paper.summary_ar, paper.summary_en)}
              </p>
            </div>

            {/* Announcement / Social Media Publication Post */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h3 className="text-base font-bold text-gray-900">
                {t('منشور إعلان وتوثيق النشر العلمي:', 'Official Publication Announcement Post:')}
              </h3>
              <FacebookEmbed 
                title={t(paper.title_ar, paper.title_en)}
                placeholderLabel={t('منشور إعلان الورقة العلمية على منصات التواصل قيد الربط', 'Research announcement social post pending URL')}
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
