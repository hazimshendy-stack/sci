import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { useLocale } from '../../context/LocaleContext';

interface YouTubeEmbedProps {
  url?: string;
  title: string;
  placeholderLabel?: string;
  aspectRatio?: 'video' | 'wide';
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  url,
  title,
  placeholderLabel,
  aspectRatio = 'video',
}) => {
  const { t } = useLocale();

  // Helper to extract YouTube video ID or playlist ID
  const getEmbedInfo = (rawUrl?: string): { isEmbeddable: boolean; embedSrc?: string } => {
    if (!rawUrl || !rawUrl.trim()) return { isEmbeddable: false };

    try {
      const parsed = new URL(rawUrl);
      
      // Playlist handling
      const playlistId = parsed.searchParams.get('list');
      if (playlistId) {
        return {
          isEmbeddable: true,
          embedSrc: `https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(playlistId)}`,
        };
      }

      // Standard watch url
      const v = parsed.searchParams.get('v');
      if (v) {
        return {
          isEmbeddable: true,
          embedSrc: `https://www.youtube.com/embed/${encodeURIComponent(v)}`,
        };
      }

      // Shortened url: youtu.be/<id>
      if (parsed.hostname.includes('youtu.be')) {
        const id = parsed.pathname.replace(/^\//, '');
        if (id) {
          return {
            isEmbeddable: true,
            embedSrc: `https://www.youtube.com/embed/${encodeURIComponent(id)}`,
          };
        }
      }

      // Direct embed format
      if (parsed.pathname.startsWith('/embed/')) {
        return { isEmbeddable: true, embedSrc: rawUrl };
      }
    } catch {
      // Invalid URL string
      return { isEmbeddable: false };
    }

    return { isEmbeddable: false };
  };

  const { isEmbeddable, embedSrc } = getEmbedInfo(url);

  if (!url || !url.trim()) {
    return (
      <div className={`w-full rounded-2xl bg-gray-50 border border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center space-y-2 min-h-[180px] ${aspectRatio === 'video' ? 'aspect-video' : 'aspect-video'}`}>
        <div className="w-10 h-10 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center">
          <Play className="w-5 h-5 ml-0.5" />
        </div>
        <p className="text-sm font-semibold text-gray-700">
          {placeholderLabel || t('الفيديو قيد الاعتماد وتوفير الرابط الرسمي', 'Video pending official link verification')}
        </p>
        <p className="text-xs text-gray-400">
          {t('سيتم تضمين المشغل تلقائياً فور إدراج الرابط في قائمة الروابط المطلوبة.', 'Player embeds automatically once the official URL is linked.')}
        </p>
      </div>
    );
  }

  if (isEmbeddable && embedSrc) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-black">
        <iframe
          src={embedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full border-0"
        />
      </div>
    );
  }

  // Fallback for valid URL that doesn't match standard YouTube embed format
  return (
    <div className="w-full rounded-2xl bg-gray-50 border border-gray-200 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="space-y-1 text-center sm:text-start">
        <p className="text-sm font-bold text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">
          {t('يتوفر التسجيل عبر رابط مباشر على منصة يوتيوب.', 'Recording available via direct YouTube access.')}
        </p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-xl text-xs font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center gap-1.5 shrink-0 shadow-sm"
      >
        <span>{t('مشاهدة على YouTube', 'Watch on YouTube')}</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};
