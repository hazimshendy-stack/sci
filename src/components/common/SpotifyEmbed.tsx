import React from 'react';
import { ExternalLink, Music2 } from 'lucide-react';
import { useLocale } from '../../context/LocaleContext';

interface SpotifyEmbedProps {
  url?: string;
  title: string;
}

export const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({ url, title }) => {
  const { t } = useLocale();

  const getSpotifyEmbedUrl = (rawUrl?: string): string | null => {
    if (!rawUrl || !rawUrl.trim()) return null;
    try {
      const parsed = new URL(rawUrl);
      // Handles open.spotify.com/episode/<id> or /show/<id>
      if (parsed.hostname.includes('spotify.com')) {
        const pathSegments = parsed.pathname.split('/').filter(Boolean);
        if (pathSegments.length >= 2) {
          const type = pathSegments[0]; // 'episode' or 'show'
          const id = pathSegments[1];
          return `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`;
        }
      }
    } catch {
      return null;
    }
    return null;
  };

  const embedSrc = getSpotifyEmbedUrl(url);

  if (!url || !url.trim()) {
    return (
      <div className="w-full rounded-2xl bg-gray-50 border border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center space-y-2 min-h-[152px]">
        <div className="w-10 h-10 rounded-full bg-[#1DB954]/10 text-[#1DB954] flex items-center justify-center">
          <Music2 className="w-5 h-5" />
        </div>
        <p className="text-sm font-semibold text-gray-700">
          {t('رابط حلقة Spotify قيد التوفير والاعتماد', 'Spotify episode link pending verification')}
        </p>
        <p className="text-xs text-gray-400">
          {t('سيتم تشغيل حلقة Spotify مباشرة فور إضافة الرابط.', 'Spotify player will embed automatically once the link is added.')}
        </p>
      </div>
    );
  }

  if (embedSrc) {
    return (
      <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-[#121212]">
        <iframe
          src={embedSrc}
          title={title}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="border-0 w-full"
        />
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl bg-gray-50 border border-gray-200 p-5 flex items-center justify-between">
      <div className="space-y-0.5">
        <p className="text-sm font-bold text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">{t('استمع للحلقة عبر Spotify', 'Listen to episode on Spotify')}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#1DB954] text-white hover:opacity-90 transition-opacity flex items-center gap-1.5"
      >
        <span>Spotify</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};
