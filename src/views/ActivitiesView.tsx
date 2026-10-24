import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../context/LocaleContext';
import { activities } from '../data/seedData';
import { Search, Calendar, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ActivitiesView: React.FC = () => {
  const { locale, t, dir } = useLocale();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelAr: 'الكل', labelEn: 'All' },
    { id: 'camp', labelAr: 'المعسكرات', labelEn: 'Camps' },
    { id: 'training', labelAr: 'التدريبات المعملية', labelEn: 'Trainings' },
    { id: 'conference', labelAr: 'الملتقيات والمؤتمرات', labelEn: 'Conferences' },
    { id: 'session', labelAr: 'الجلسات العلمية', labelEn: 'Sessions' },
    { id: 'workshop', labelAr: 'ورش العمل', labelEn: 'Workshops' },
  ];

  const filtered = activities.filter((act) => {
    const matchesCategory = selectedCategory === 'all' || act.category === selectedCategory;
    const query = search.toLowerCase();
    const matchesSearch = 
      act.title_ar.toLowerCase().includes(query) ||
      act.title_en.toLowerCase().includes(query) ||
      act.summary_ar.toLowerCase().includes(query) ||
      act.summary_en.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-ocean">
          {t('أرشيف الفعاليات', 'Event Archive')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          {t('المشاريع والأنشطة والمعسكرات', 'Projects, Camps & Workshops')}
        </h1>
        <p className="text-base text-gray-600">
          {t(
            'سجل البرامج التدريبية والمعسكرات الريادية التي نظمتها المبادرة أو شاركت في تنظيمها.',
            'Record of training camps, entrepreneurship workshops, and scientific sessions organized or co-organized by Sci Infinity.'
          )}
        </p>
      </div>

      {/* Search & Category Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
        
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
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
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 start-3 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t('ابحث في الأنشطة...', 'Search activities...')}
            className="w-full ps-9 pe-4 py-2 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-purple"
          />
        </div>

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
          {filtered.map((act) => (
            <Link
              key={act.id}
              to={`/${locale}/projects-activities/${act.slug}`}
              className="rounded-3xl bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between p-6 space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple font-bold uppercase">
                    {act.category}
                  </span>
                  <span className="text-gray-500 flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {t(act.date_display_ar, act.date_display_en)}
                  </span>
                </div>

                <h3 className="font-bold text-xl text-gray-900 group-hover:text-brand-ocean transition-colors leading-snug">
                  {t(act.title_ar, act.title_en)}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {t(act.summary_ar, act.summary_en)}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  {act.event_state === 'registration_closed' ? (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-700 font-semibold">
                      {t('التسجيل مغلق', 'Registration Closed')}
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-gray-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                      <span>{t('فعالية مكتملة', 'Completed')}</span>
                    </span>
                  )}
                </div>
                <span className="font-semibold text-brand-ocean flex items-center gap-1">
                  <span>{t('تفاصيل النشاط', 'Read More')}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

    </div>
  );
};
