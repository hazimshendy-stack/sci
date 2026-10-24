import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { useLocale } from '../../context/LocaleContext';
import { FacebookIcon } from '../icons/SocialIcons';

interface FacebookEmbedProps {
  url?: string;
  title: string;
  placeholderLabel?: string;
  type?: 'post' | 'video';
}

export const FacebookEmbed: React.FC<FacebookEmbedProps> = ({
  url,
  title,
  placeholderLabel,
  type = 'post',
}) => {
  const { t } = useLocale();

  if (!url || !url.trim()) {
    return (
      <div className="w-full rounded-2xl bg-gray-50 border border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center space-y-2 min-h-[160px]">
        <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center">
          <FacebookIcon className="w-5 h-5" />
        </div>
        <p className="text-sm font-semibold text-gray-700">
          {placeholderLabel || t('محتوى فيسبوك قيد التوثيق', 'Facebook content pending link')}
        </p>
        <p className="text-xs text-gray-400">
          {t('سيتم تفعيل الرابط فور اعتماده.', 'Content will activate once verified.')}
        </p>
      </div>
    );
  }

  // Determine if it's a video / reel
  const isVideo = type === 'video' || url.includes('/reel/') || url.includes('/videos/') || url.includes('/watch');

  // Safe encode for Facebook official embed plugin
  const encodedUrl = encodeURIComponent(url);
  const embedSrc = isVideo
    ? `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&width=500`
    : `https://www.facebook.com/plugins/post.php?href=${encodedUrl}&show_text=true&width=500`;

  return (
    <div className="w-full rounded-3xl border border-gray-200 overflow-hidden bg-white shadow-sm flex flex-col transition-all hover:border-brand-purple/40">
      
      {/* Official Facebook Header */}
      <div className="p-4 bg-gray-50/80 border-b border-gray-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-sm">
            <FacebookIcon className="w-5 h-5 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xs sm:text-sm text-gray-900">
                {t('مبادرة ساي إنفينيتي', 'Sci Infinity Initiative')}
              </span>
              <CheckCircle2 className="w-3.5 h-3.5 text-[#1877F2] fill-[#1877F2]/10" />
            </div>
            <span className="text-[11px] text-gray-500 block">
              {isVideo ? t('فيديو وتغطية حصرية', 'Official Video & Coverage') : t('منشور وتوثيق رسمي', 'Official Verified Post')}
            </span>
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1877F2] text-white text-xs font-bold hover:bg-[#166fe5] transition-all shadow-sm shrink-0"
        >
          <span>{isVideo ? t('مشاهدة على Facebook', 'Watch on FB') : t('عرض على Facebook', 'View on FB')}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Post/Video Title if provided */}
      {title && (
        <div className="px-4 pt-3 pb-1">
          <h4 className="text-xs sm:text-sm font-semibold text-gray-800 line-clamp-2">
            {title}
          </h4>
        </div>
      )}

      {/* Embed Iframe Frame */}
      <div className="w-full p-2 flex justify-center bg-white min-h-[380px] sm:min-h-[460px]">
        <iframe
          src={embedSrc}
          title={title}
          width="100%"
          height={isVideo ? '380' : '480'}
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          loading="lazy"
          className="max-w-[500px] w-full rounded-2xl"
        />
      </div>

      {/* Footer Quick Action */}
      <div className="p-3 bg-gray-50/50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-500">
        <span className="text-center sm:text-start">
          {t('منشور موثق من الصفحة الرسمية لمبادرة ساي إنفينيتي على فيسبوك', 'Verified post from the official Sci Infinity Facebook page')}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1877F2] font-bold hover:underline flex items-center gap-1 shrink-0"
        >
          <span>{t('فتح الرابط المباشر للتعليقات والمشاركة', 'Open direct link for discussions')}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

    </div>
  );
};
