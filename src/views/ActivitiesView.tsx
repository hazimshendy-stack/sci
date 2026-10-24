import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';
import { activities } from '../data/seedData';
import { Search, Calendar, MapPin, ArrowLeft, ArrowRight, CheckCircle2, Video, Layers } from 'lucide-react';

export const ActivitiesView: React.FC = () => {
  const { locale, t, dir } = useLocale();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelAr: 'الكل', labelEn: 'All' },
    { id: 'conference', labelAr: 'الملتقيات والمؤتمرات', labelEn: 'Conferences & Forums' },
    { id: 'camp', labelAr: 'المعسكرات', labelEn: 'Camps' },
    { id: 'workshop', labelAr: 'ورش العمل', labelEn: 'Workshops' },
    { id: 'training', labelAr: 'البرامج التدريبية', labelEn: 'Training Programs' },
    { id: 'session', labelAr: 'الجلسات العلمية', labelEn: 'Scientific Sessions' },
  ];

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'conference':
        return { labelAr: 'منتدى / مؤتمر', labelEn: 'Forum / Conference', color: 'bg-brand-purple/10 text-brand-purple border-brand-purple/20' };
      case 'camp':
        return { labelAr: 'معسكر تدريبي', labelEn: 'Camp', color: 'bg-brand-cyan/15 text-brand-ocean border-brand-cyan/30' };
      case 'workshop':
        return { labelAr: 'ورشة عمل', labelEn: 'Workshop', color: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20' };
      case 'training':
        return { labelAr: 'برنامج تدريبي', labelEn: 'Training Track', color: 'bg-amber-500/10 text-amber-700 border-amber-500/20' };
      case 'session':
        return { labelAr: 'جلسة علمية', labelEn: 'Scientific Session', color: 'bg-indigo-500/10 text-indigo-700 border-indigo-500/20' };
      default:
        return { labelAr: 'فعالية', labelEn: 'Activity', color: 'bg-gray-100 text-gray-700 border-gray-200' };
    }
  };

  const filtered = activities.filter((act) => {
    const matchesCategory = selectedCategory === 'all' || act.category === selectedCategory;
    const query = search.trim().toLowerCase();
    if (!query) return matchesCategory;

    const matchesSearch =
      act.title_ar.toLowerCase().includes(query) ||
      act.title_en.toLowerCase().includes(query) ||
      act.summary_ar.toLowerCase().includes(query) ||
      act.summary_en.toLowerCase().includes(query) ||
      (act.location_ar && act.location_ar.toLowerCase().includes(query)) ||
      (act.location_en && act.location_en.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-cyan/15 text-brand-ocean">
          <Layers className="w-3.5 h-3.5" />
          {t('سجل الأنشطة والمشاريع الأكاديمية', 'Academic Activities & Projects Archive')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          {t('الأنشطة', 'Activities')}
        </h1>
        <p className="text-base text-gray-600 leading-relaxed">
          {t(
            'أرشيف توثيقي شامل يضم 22 فعالية وبرنامجاً تدريبياً ومعسكراً متخصصاً نفذتها مبادرة ساي إنفينيتي، مزودة بكافة الفيديوهات المسجلة والتغطيات الرسمية.',
            'Comprehensive documentation archive featuring 22 specialized forums, training camps, and workshops delivered by Sci Infinity, with embedded video lectures and official media.'
          )}
        </p>
      </div>

      {/* Search & Category Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
        
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === c.id
                  ? 'bg-brand-purple text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t(c.labelAr, c.labelEn)}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 start-3 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('ابحث في الأنشطة أو المحاور...', 'Search activities or topics...')}
            className="w-full ps-9 pe-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-purple focus:bg-white transition-colors"
          />
        </div>

      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs text-gray-500 px-1">
        <span>
          {t(`عرض ${filtered.length} من أصل ${activities.length} فعالية ونشاط`, `Showing ${filtered.length} of ${activities.length} total activities`)}
        </span>
        {selectedCategory !== 'all' && (
          <button
            onClick={() => setSelectedCategory('all')}
            className="font-medium text-brand-ocean hover:underline"
          >
            {t('عرض جميع الفئات', 'Show all categories')}
          </button>
        )}
      </div>

      {/* Activities Grid */}
      {filtered.length === 0 ? (
        <div className="p-16 text-center rounded-3xl bg-gray-50 border border-gray-200 space-y-3">
          <p className="text-gray-600 text-base font-medium">
            {t('لا توجد أنشطة مطابقة لبحثك حالياً.', 'No matching activities found.')}
          </p>
          <button 
            onClick={() => { setSearch(''); setSelectedCategory('all'); }}
            className="text-sm font-semibold text-brand-ocean hover:underline"
          >
            {t('إعادة تعيين الفلاتر', 'Reset filters')}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((act) => {
            const badge = getCategoryBadge(act.category);
            const hasMedia = act.youtube_url || act.youtube_playlist_url || (act.youtube_videos && act.youtube_videos.length > 0) || (act.facebook_videos && act.facebook_videos.length > 0);

            return (
              <Link
                key={act.id}
                to={`/${locale}/projects-activities/${act.slug}`}
                className="rounded-3xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between p-6 space-y-5 group"
              >
                <div className="space-y-4">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between text-xs gap-2">
                    <span className={`px-2.5 py-1 rounded-full font-bold text-[11px] border ${badge.color}`}>
                      {t(badge.labelAr, badge.labelEn)}
                    </span>
                    <span className="text-gray-500 flex items-center gap-1 font-medium text-[11px] shrink-0">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      {t(act.date_display_ar, act.date_display_en)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 group-hover:text-brand-ocean transition-colors leading-snug">
                    {t(act.title_ar, act.title_en)}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {t(act.summary_ar, act.summary_en)}
                  </p>
                </div>

                {/* Footer Meta */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  {/* Location if available */}
                  {act.location_ar && (
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <MapPin className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                      <span className="truncate">{t(act.location_ar, act.location_en || act.location_ar)}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      {hasMedia ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 text-red-700 font-semibold text-[11px]">
                          <Video className="w-3 h-3" />
                          <span>{t('جلسات مسجلة', 'Recordings')}</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-gray-500 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                          <span>{t('مؤرشفة وموثقة', 'Archived')}</span>
                        </span>
                      )}
                    </div>

                    <span className="font-semibold text-brand-ocean flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>{t('التفاصيل والوسائط', 'Details & Media')}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

    </div>
  );
};
