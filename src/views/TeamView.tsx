import React from 'react';
import { useLocale } from '../context/LocaleContext';
import { committees, teamMembers } from '../data/seedData';
import { Users, UserCheck } from 'lucide-react';
import { publicAsset } from '../lib/publicAsset';

export const TeamView: React.FC = () => {
  const { t } = useLocale();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-ocean">
          {t('القيادة واللجان', 'Leadership & Committees')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900">
          {t('فريق عمل مبادرة', 'The Team Behind')} <span className="brand-gradient-text">Sci Infinity</span>
        </h1>
        <p className="text-base text-gray-600">
          {t(
            'نخبة من الطلاب والباحثين الطموحين يقودون لجان المبادرة الأكاديمية والتنظيمية والإعلامية.',
            'Dedicated students and researchers driving academic excellence, event operations, and scientific dissemination.'
          )}
        </p>
      </div>

      {/* Committees Loop */}
      <div className="space-y-14">
        {committees.map((comm) => {
          const members = teamMembers.filter((m) => m.committee_id === comm.id);
          if (members.length === 0) return null;

          return (
            <div key={comm.id} className="space-y-6">
              
              {/* Committee Title */}
              <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                <div className="w-8 h-8 rounded-lg bg-brand-purple/15 text-brand-purple flex items-center justify-center font-bold">
                  <Users className="w-4 h-4" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {t(comm.name_ar, comm.name_en)}
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500 font-semibold">
                  {members.length} {t('أعضاء', 'members')}
                </span>
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all flex items-center gap-4"
                  >
                    {/* Photo or Initials Placeholder */}
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-brand-purple/30 bg-gray-100 flex items-center justify-center text-brand-purple font-bold text-lg">
                      {member.photo_url ? (
                        <img 
                          src={publicAsset(member.photo_url)}
                          alt={member.name_ar} 
                          className="w-full h-full object-cover" 
                          onError={(e) => {
                            // If photo fails, fallback to initial
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <UserCheck className="w-7 h-7 text-gray-400" />
                      )}
                    </div>

                    {/* Member Details */}
                    <div className="space-y-1">
                      <h3 className="font-bold text-base text-gray-900 leading-snug">
                        {t(member.name_ar, member.name_en)}
                      </h3>
                      <p className="text-xs font-semibold text-brand-ocean">
                        {t(member.role_ar, member.role_en)}
                      </p>
                      <div className="text-[11px] text-gray-400">
                        {t('عضو معتمد بالمبادرة', 'Verified Initiative Member')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
