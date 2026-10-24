import React, { useState } from 'react';
import { FileText, ChevronDown, ChevronUp, Copy, Check } from 'lucide-react';
import { useLocale } from '../../context/LocaleContext';

interface TranscriptSectionProps {
  transcriptAr?: string;
  transcriptEn?: string;
  titleAr?: string;
  titleEn?: string;
}

export const TranscriptSection: React.FC<TranscriptSectionProps> = ({
  transcriptAr,
  transcriptEn,
  titleAr,
  titleEn,
}) => {
  const { locale, t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Preserve original language of transcript (Arabic or English as available)
  const activeTranscript = locale === 'ar' 
    ? (transcriptAr || transcriptEn) 
    : (transcriptEn || transcriptAr);

  const handleCopy = () => {
    if (activeTranscript) {
      navigator.clipboard.writeText(activeTranscript);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const hasTranscript = Boolean(activeTranscript && activeTranscript.trim());

  return (
    <div className="rounded-3xl bg-white border border-gray-200 overflow-hidden shadow-sm transition-all">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-6 flex items-center justify-between cursor-pointer hover:bg-gray-50/80 transition-colors select-none"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-base sm:text-lg">
              {t('النص الكامل للحلقة (Transcript)', 'Full Episode Transcript')}
            </h3>
            <p className="text-xs text-gray-500">
              {t(
                titleAr || 'التفريغ النصي المكتمل للحوار والمحاور المطروحة',
                titleEn || 'Full dialogue text and transcript of discussion points'
              )}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {hasTranscript && (
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-md bg-green-500/10 text-green-700 text-xs font-semibold">
              {t('نص متوفر', 'Transcript Ready')}
            </span>
          )}
          <button
            type="button"
            className="p-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            aria-label={isOpen ? t('طي النص', 'Collapse') : t('عرض النص', 'Expand')}
          >
            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="p-6 pt-2 border-t border-gray-100 bg-gray-50/50 space-y-4">
          {hasTranscript ? (
            <>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-2xs transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-600">{t('تم النسخ', 'Copied')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t('نسخ النص', 'Copy Text')}</span>
                    </>
                  )}
                </button>
              </div>
              <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed whitespace-pre-line p-4 rounded-2xl bg-white border border-gray-200 font-sans">
                {activeTranscript}
              </div>
            </>
          ) : (
            <div className="text-center py-8 space-y-2">
              <p className="text-sm font-semibold text-gray-700">
                {t(
                  'التفريغ النصي الرسمي لهذه الحلقة قيد المراجعة والاعتماد',
                  'Official transcript for this episode is pending review & verification'
                )}
              </p>
              <p className="text-xs text-gray-400 max-w-md mx-auto">
                {t(
                  'التزاماً بسياسة المصداقية العلمية، لا نقوم بتوليد أو تخمين نصوص غير مطابقة للتسجيل المعتمد. سيُدرج النص فور اعتماده.',
                  'In accordance with our verification charter, transcripts are added only after accurate transcription of verified recordings.'
                )}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
