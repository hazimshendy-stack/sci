import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';
import { podcastEpisodes } from '../data/seedData';
import { YouTubeEmbed } from '../components/common/YouTubeEmbed';
import { SpotifyEmbed } from '../components/common/SpotifyEmbed';
import { FacebookEmbed } from '../components/common/FacebookEmbed';
import { TranscriptSection } from '../components/common/TranscriptSection';
import { Radio, ArrowLeft, ArrowRight, Calendar, CheckCircle } from 'lucide-react';

export const EpisodeDetailView: React.FC = () => {
  const { episodeNumber } = useParams<{ episodeNumber: string }>();
  const { locale, t, dir } = useLocale();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const BackArrowIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  const currentEpNum = parseInt(episodeNumber || '1', 10);
  const episode = podcastEpisodes.find((ep) => ep.episode_number === currentEpNum);

  if (!episode) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          {t('الحلقة غير موجودة', 'Episode Not Found')}
        </h1>
        <p className="text-gray-600">
          {t('رقم الحلقة المطلوب غير متوفر ضمن سلسلة ساي كاست.', 'The requested episode number is not in the Sci Cast series.')}
        </p>
        <Link 
          to={`/${locale}/sci-cast`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple hover:underline"
        >
          <BackArrowIcon className="w-4 h-4" />
          <span>{t('العودة لبودكاست ساي كاست', 'Back to Sci Cast')}</span>
        </Link>
      </div>
    );
  }

  const prevEpisode = podcastEpisodes.find((ep) => ep.episode_number === currentEpNum - 1);
  const nextEpisode = podcastEpisodes.find((ep) => ep.episode_number === currentEpNum + 1);

  const hasTitle = (episode.title_ar && episode.title_ar.trim()) || (episode.title_en && episode.title_en.trim());
  const hasDesc = (episode.description_ar && episode.description_ar.trim()) || (episode.description_en && episode.description_en.trim());

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Top Breadcrumb */}
      <div className="flex items-center justify-between">
        <Link 
          to={`/${locale}/sci-cast`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-brand-purple transition-colors"
        >
          <BackArrowIcon className="w-4 h-4" />
          <span>{t('العودة لسلسلة حلقات ساي كاست', 'Back to Sci Cast Episodes')}</span>
        </Link>

        <span className="text-xs px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple font-bold">
          {t(`الحلقة ${episode.episode_number} من 4`, `Episode ${episode.episode_number} of 4`)}
        </span>
      </div>

      {/* Episode Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-700 font-bold flex items-center gap-1.5">
            <Radio className="w-3.5 h-3.5" />
            <span>Sci Cast Series</span>
          </span>
          {episode.published_date && (
            <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 font-medium flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{episode.published_date}</span>
            </span>
          )}
          <span className="px-3 py-1 rounded-full bg-brand-ocean/10 text-brand-ocean font-medium flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{t('حلقة موثقة رسمياً', 'Verified Episode')}</span>
          </span>
        </div>

        {hasTitle ? (
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            {t(episode.title_ar, episode.title_en)}
          </h1>
        ) : (
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            {t(`الحلقة ${episode.episode_number}`, `Episode ${episode.episode_number}`)}
          </h1>
        )}

        {hasDesc ? (
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed pt-2">
            {t(episode.description_ar, episode.description_en)}
          </p>
        ) : (
          <div className="space-y-2 pt-2">
            <div className="h-4 rounded bg-gray-100 w-full"></div>
            <div className="h-4 rounded bg-gray-100 w-4/5"></div>
          </div>
        )}
      </div>

      {/* Embedded Media Players */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          {t('مشاهدة واستماع الحلقة', 'Watch & Listen')}
        </h2>

        {/* YouTube Video Player (available for all episodes) */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block"></span>
            <span>{t('مشغل الفيديو — YouTube', 'YouTube Video Stream')}</span>
          </h3>
          <YouTubeEmbed 
            url={episode.youtube_url} 
            title={t(episode.title_ar || `الحلقة ${episode.episode_number}`, episode.title_en || `Episode ${episode.episode_number}`)} 
          />
        </div>

        {/* Spotify Audio Player (available for all episodes) */}
        <div className="space-y-2 pt-2">
          <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1DB954] inline-block"></span>
            <span>{t('مشغل الصوت — Spotify', 'Spotify Audio Player')}</span>
          </h3>
          <SpotifyEmbed 
            url={episode.spotify_url} 
            title={t(episode.title_ar || `الحلقة ${episode.episode_number}`, episode.title_en || `Episode ${episode.episode_number}`)} 
          />
        </div>

        {/* Facebook Embed — conditional: only shown if Facebook URL exists for this specific episode */}
        {episode.facebook_url && episode.facebook_url.trim() !== '' && (
          <div className="space-y-2 pt-2">
            <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1877F2] inline-block"></span>
              <span>{t('منشور الحلقة والتفاعل على فيسبوك', 'Facebook Discussion & Post')}</span>
            </h3>
            <FacebookEmbed 
              url={episode.facebook_url} 
              title={t(episode.title_ar || `الحلقة ${episode.episode_number}`, episode.title_en || `Episode ${episode.episode_number}`)} 
            />
          </div>
        )}
      </div>

      {/* Mandatory Transcript Component */}
      <div className="pt-4">
        <TranscriptSection 
          transcriptAr={episode.transcript_ar}
          transcriptEn={episode.transcript_en}
          titleAr={episode.title_ar}
          titleEn={episode.title_en}
        />
      </div>

      {/* Navigation between Episodes */}
      <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevEpisode ? (
          <Link
            to={`/${locale}/sci-cast/episode/${prevEpisode.episode_number}`}
            className="w-full sm:w-auto p-4 rounded-2xl bg-gray-50 border border-gray-200 hover:border-brand-purple transition-all flex items-center gap-3 text-start"
          >
            <BackArrowIcon className="w-5 h-5 text-brand-purple shrink-0" />
            <div>
              <span className="text-xs text-gray-500 block">{t('الحلقة السابقة', 'Previous Episode')}</span>
              <span className="text-sm font-bold text-gray-900">
                {t(prevEpisode.title_ar || `الحلقة ${prevEpisode.episode_number}`, prevEpisode.title_en || `Episode ${prevEpisode.episode_number}`)}
              </span>
            </div>
          </Link>
        ) : <div />}

        {nextEpisode ? (
          <Link
            to={`/${locale}/sci-cast/episode/${nextEpisode.episode_number}`}
            className="w-full sm:w-auto p-4 rounded-2xl bg-gray-50 border border-gray-200 hover:border-brand-purple transition-all flex items-center justify-between sm:justify-end gap-3 text-end"
          >
            <div>
              <span className="text-xs text-gray-500 block">{t('الحلقة التالية', 'Next Episode')}</span>
              <span className="text-sm font-bold text-gray-900">
                {t(nextEpisode.title_ar || `الحلقة ${nextEpisode.episode_number}`, nextEpisode.title_en || `Episode ${nextEpisode.episode_number}`)}
              </span>
            </div>
            <ArrowIcon className="w-5 h-5 text-brand-purple shrink-0" />
          </Link>
        ) : <div />}
      </div>

    </div>
  );
};
