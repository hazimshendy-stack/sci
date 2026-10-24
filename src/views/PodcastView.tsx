import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';
import { podcastEpisodes, siteSettings } from '../data/seedData';
import { publicAsset } from '../lib/publicAsset';
import { Radio, Play, Headphones } from 'lucide-react';
import { SpotifyIcon, YoutubeIcon } from '../components/icons/SocialIcons';

export const PodcastView: React.FC = () => {
  const { locale, t } = useLocale();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Series Hero */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-green-500/10 via-white to-brand-purple/10 border border-green-500/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left / Info */}
        <div className="space-y-4 max-w-2xl text-center md:text-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/15 text-green-700 text-xs font-bold uppercase tracking-wider">
            <Radio className="w-3.5 h-3.5" />
            <span>{t('سلسلة البودكاست العلمي الرسمي', 'Official Science Podcast Series')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            {t('بودكاست', 'Podcast')} <span className="brand-gradient-text">Sci Cast</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            {t(
              'سلسلة حوارات علمية وبحثية ملهمة تجمع الطلاب والباحثين مع نخبة من الأكاديميين والمتخصصين في مختلف المجالات العلمية والتطبيقية، بالتعاون مع مراكز إبداع مصر الرقمية كريتيفا.',
              'Inspiring scientific podcast series connecting students and young researchers with academic leaders and industry specialists, in media collaboration with Creativa Hub.'
            )}
          </p>

          {/* Platform app icon buttons only — no Facebook on the main podcast page */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <a
              href={siteSettings.spotify_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-[#1DB954] text-white hover:opacity-90 shadow-sm flex items-center justify-center transition-all"
              aria-label="Spotify"
              title="Spotify"
            >
              <SpotifyIcon className="w-6 h-6" />
            </a>
            <a
              href={siteSettings.youtube_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-[#FF0000] text-white hover:opacity-90 shadow-sm flex items-center justify-center transition-all"
              aria-label="YouTube"
              title="YouTube"
            >
              <YoutubeIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right / Sci Cast Logo — pure white clean placeholder frame until official logo is placed */}
        <div className="shrink-0 flex items-center justify-center">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-white p-4 shadow-lg border border-gray-200 flex items-center justify-center overflow-hidden">
            <img 
              src={publicAsset('/images/podcast/scicast-logo.png')} 
              alt="Sci Cast Official Logo"
              onError={(e) => {
                // If official logo image is not yet available, show clean white card with subtle placeholder
                (e.currentTarget as HTMLElement).style.display = 'none';
                const fb = document.getElementById('scicast-logo-fb');
                if (fb) fb.style.display = 'flex';
              }}
              className="w-full h-full object-contain"
            />
            <div 
              id="scicast-logo-fb" 
              style={{ display: 'none' }}
              className="flex-col items-center justify-center text-center space-y-3"
            >
              <div className="w-20 h-20 rounded-2xl bg-gray-50 text-gray-400 border border-gray-100 flex items-center justify-center shadow-inner">
                <Headphones className="w-10 h-10" />
              </div>
              <span className="font-extrabold text-xl text-gray-800 tracking-wider">SCI CAST</span>
            </div>
          </div>
        </div>

      </div>

      {/* Series Stats — 3 cards (removed 100% card, Creativa Hub logo integrated in partner card) */}
      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 text-center">
          <div className="text-2xl font-extrabold text-brand-blue">4</div>
          <div className="text-xs text-gray-500 mt-1">{t('حلقات منشورة', 'Published Episodes')}</div>
        </div>
        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 text-center">
          <div className="text-2xl font-extrabold text-brand-blue">2</div>
          <div className="text-xs text-gray-500 mt-1">{t('منصات بث', 'Streaming Platforms')}</div>
        </div>
        <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 text-center flex flex-col items-center justify-center">
          <img 
            src={publicAsset('/images/creativa-hub-logo.png')} 
            alt="Creativa Hub" 
            className="h-9 w-auto object-contain"
          />
          <div className="text-xs text-gray-500 mt-1">{t('شريك الاستضافة', 'Media Partner')}</div>
        </div>
      </div>

      {/* Episodes Grid — 4 genuine episodes */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-green-700">
            {t('سلسلة الحلقات', 'Episode Directory')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
            {t('الحلقات الأربع المنشورة', 'The 4 Published Episodes')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {podcastEpisodes.map((ep) => {
            const hasTitle = (ep.title_ar && ep.title_ar.trim()) || (ep.title_en && ep.title_en.trim());
            const hasDesc = (ep.description_ar && ep.description_ar.trim()) || (ep.description_en && ep.description_en.trim());
            return (
              <div
                key={ep.episode_number}
                className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm hover:border-brand-purple/50 hover:shadow-md transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-lg bg-brand-purple/10 text-brand-purple font-bold text-xs">
                      {t(`الحلقة ${ep.episode_number}`, `Episode ${ep.episode_number}`)}
                    </span>
                    <div className="flex items-center gap-2">
                      <Headphones className="w-4 h-4 text-green-600" />
                    </div>
                  </div>

                  {hasTitle ? (
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-brand-purple transition-colors leading-snug">
                      {t(ep.title_ar, ep.title_en)}
                    </h3>
                  ) : (
                    <div className="space-y-2 pt-1">
                      <div className="h-5 rounded bg-gray-100 w-3/4"></div>
                    </div>
                  )}

                  {hasDesc ? (
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      {t(ep.description_ar, ep.description_en)}
                    </p>
                  ) : (
                    <div className="space-y-2 pt-1">
                      <div className="h-3 rounded bg-gray-100 w-full"></div>
                      <div className="h-3 rounded bg-gray-100 w-5/6"></div>
                      <div className="h-3 rounded bg-gray-100 w-2/3"></div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    to={`/${locale}/sci-cast/episode/${ep.episode_number}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-brand-purple text-white hover:bg-brand-deep-purple transition-all shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{t('الاستماع إلى الحلقة', 'Listen to Episode')}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
