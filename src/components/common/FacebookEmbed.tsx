import React from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';
import { useLocale } from '../../context/LocaleContext';

interface FacebookEmbedProps {
  url?: string;
  title: string;
  placeholderLabel?: string;
}

export const FacebookEmbed: React.FC<FacebookEmbedProps> = ({
  url,
  title,
  placeholderLabel,
}) => {
  const { t } = useLocale();

  if (!url || !url.trim()) {
    return (
      <div className="w-full rounded-2xl bg-gray-50 border border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center space-y-2 min-h-[160px]">
        <div className="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center">
          <MessageCircle className="w-5 h-5" />
        </div>
        <p className="text-sm font-semibold text-gray-700">
          {placeholderLabel || t('منشور فيسبوك قيد الربط', 'Facebook announcement pending link')}
        </p>
        <p className="text-xs text-gray-400">
          {t('سيتم تفعيل المنشور فور إدراج رابطه المعتمد في مجلد التسليم.', 'Post will activate once the URL is populated in the handoff directory.')}
        </p>
      </div>
    );
  }

  // Safe encode for Facebook official embed iframe plugin
  const encodedUrl = encodeURIComponent(url);
  const embedSrc = `https://www.facebook.com/plugins/post.php?href=${encodedUrl}&show_text=true&width=500`;

  return (
    <div className="w-full rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm flex flex-col items-center p-3">
      <iframe
        src={embedSrc}
        title={title}
        width="100%"
        height="450"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        loading="lazy"
        className="max-w-[500px] w-full"
      />
      <div className="pt-2 w-full flex justify-end">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#1877F2] hover:underline flex items-center gap-1"
        >
          <span>{t('عرض المنشور الأصلي على فيسبوك', 'View original Facebook post')}</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
