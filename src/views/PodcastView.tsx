import React from 'react';
import { useLocale } from '../context/LocaleContext';
import { podcastEpisodes, siteSettings } from '../data/seedData';
import { ExternalLink, Radio, Info } from 'lucide-react';

export const PodcastView: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-700 text-xs font-bold uppercase tracking-wider">
          <Radio className="w-3.5 h-3.5" />
          <span>{t('البودكاست العلمي', 'Science Podcast')}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          {t('بودكاست', 'Podcast')} <span className="brand-gradient-text">Sci Cast</span>
        </h1>
        <p className="text-base text-gray-600">
          {t(
            'حوارات ملهمة تجمع الطلاب والباحثين مع نخبة من الأكاديميين والمتخصصين في مختلف المجالات العلمية والتطبيقية.',
            'Inspiring conversations connecting students and researchers with academic leaders and industry specialists.'
          )}
        </p>

        {/* Platform Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={siteSettings.spotify_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl text-sm font-bold bg-[#1DB954] text-white hover:opacity-90 shadow-sm flex items-center gap-2 transition-all"
          >
            <span>Spotify Show</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={siteSettings.youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl text-sm font-bold bg-[#FF0000] text-white hover:opacity-90 shadow-sm flex items-center gap-2 transition-all"
          >
            <span>YouTube Channel</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Episodes List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {t('الحلقات المتاحة', 'Available Episodes')}
        </h2>

        <div className="space-y-4">
          {podcastEpisodes.map((ep) => (
            <div
              key={ep.episode_number}
              className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-brand-purple/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-purple/15 text-brand-purple flex items-center justify-center font-bold text-xl shrink-0">
                  {ep.episode_number}
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-brand-ocean">
                    {t('الحلقة التعريفية', 'Introductory Episode')}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {t(ep.title_ar, ep.title_en)}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {t('حوار تعريفي بأهداف المبادرة والرسالة العلمية ورؤية البودكاست.', 'Introductory dialogue exploring initiative goals and scientific vision.')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <a
                  href={ep.spotify_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs font-semibold bg-green-500/10 text-green-700 border border-green-500/20 text-center hover:bg-green-500/20 transition-colors"
                >
                  {t('استمع على Spotify', 'Listen on Spotify')}
                </a>
                <a
                  href={ep.youtube_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs font-semibold bg-red-500/10 text-red-700 border border-red-500/20 text-center hover:bg-red-500/20 transition-colors"
                >
                  {t('شاهد على YouTube', 'Watch on YouTube')}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Policy Notice */}
        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs text-gray-600 flex items-start gap-2.5">
          <Info className="w-4 h-4 shrink-0 text-brand-ocean mt-0.5" />
          <p>
            {t(
              'تلتزم المبادرة بعدم اختلاق روابط أو حلقات غير مؤكدة؛ تُرفع الحلقات الجديدة فور اعتماد روابطها الرسمية من فريق الإنتاج والإعلام.',
              'Sci Infinity strictly displays verified episode links; new podcast releases are mounted immediately upon authoritative verification.'
            )}
          </p>
        </div>
      </div>

    </div>
  );
};
