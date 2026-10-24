import fs from 'fs';

const updated = JSON.parse(fs.readFileSync('D:/Hazim/Projects/sci_infinty/website_01/src/data/seedDataUpdated.json', 'utf8'));

let seedData = fs.readFileSync('D:/Hazim/Projects/sci_infinty/website_01/src/data/seedData.ts', 'utf8');

// Replace Activity interface
const oldActivityInterface = `export interface Activity {
  id: string;
  slug: string;
  title_ar: string;
  title_en: string;
  category: 'conference' | 'camp' | 'training' | 'session' | 'workshop';
  event_state: 'upcoming' | 'registration_open' | 'registration_closed' | 'ongoing' | 'completed' | 'archived';
  status: 'draft' | 'in_review' | 'published' | 'archived';
  relationship_role: 'organized' | 'co-organized' | 'contributed' | 'promoted' | 'participated';
  verification_status: 'verified' | 'needs_verification';
  date_display_ar: string;
  date_display_en: string;
  summary_ar: string;
  summary_en: string;
}`;

const newActivityInterface = `export interface Activity {
  id: string;
  slug: string;
  title_ar: string;
  title_en: string;
  category: 'conference' | 'camp' | 'training' | 'session' | 'workshop';
  event_state: 'upcoming' | 'registration_open' | 'registration_closed' | 'ongoing' | 'completed' | 'archived';
  status: 'draft' | 'in_review' | 'published' | 'archived';
  relationship_role: 'organized' | 'co-organized' | 'contributed' | 'promoted' | 'participated';
  verification_status: 'verified' | 'needs_verification';
  date_display_ar: string;
  date_display_en: string;
  location_ar?: string;
  location_en?: string;
  registration_url?: string;
  facebook_url?: string;
  facebook_posts?: { group?: string; label_ar: string; label_en: string; url: string; }[];
  facebook_speaker_urls?: string[];
  youtube_url?: string;
  youtube_playlist_url?: string;
  youtube_videos?: { session_num: number; title_ar: string; title_en: string; url: string; }[];
  facebook_videos?: { label_ar: string; label_en: string; url: string; }[];
  summary_ar: string;
  summary_en: string;
}`;

seedData = seedData.replace(oldActivityInterface, newActivityInterface);

// Replace ResearchPaper interface
const oldResearchInterface = `export interface ResearchPaper {
  id: string;
  slug: string;
  title_ar: string;
  title_en: string;
  authors_ar: string;
  authors_en: string;
  journal_name: string;
  publication_year: string | number;
  doi: string | null;
  verification_status: 'needs_verification';
  summary_ar: string;
  summary_en: string;
  status?: 'draft' | 'published';
}`;

const newResearchInterface = `export interface ResearchPaper {
  id: string;
  slug: string;
  title_ar: string;
  title_en: string;
  authors_ar: string;
  authors_en: string;
  journal_name: string;
  publication_year: string | number;
  doi: string | null;
  facebook_url?: string;
  verification_status: 'verified' | 'needs_verification';
  summary_ar: string;
  summary_en: string;
  status?: 'draft' | 'published';
}`;

seedData = seedData.replace(oldResearchInterface, newResearchInterface);

// Replace PodcastEpisode interface
const oldPodcastInterface = `export interface PodcastEpisode {
  id?: string;
  slug: string;
  episode_number: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  spotify_url?: string;
  youtube_url?: string;
  facebook_url?: string;
  cover_image_url?: string;
  transcript_ar?: string;
  transcript_en?: string;
  status: 'published' | 'draft';
  verification_status: 'verified' | 'needs_verification';
  duration?: string;
  published_date?: string;
  topics?: { title_ar: string; title_en: string }[];
}`;

const newPodcastInterface = `export interface PodcastEpisode {
  id?: string;
  slug: string;
  episode_number: number;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  guest_ar?: string;
  guest_en?: string;
  spotify_url?: string;
  youtube_url?: string;
  facebook_url?: string;
  cover_image_url?: string;
  transcript_ar?: string;
  transcript_en?: string;
  status: 'published' | 'draft';
  verification_status: 'verified' | 'needs_verification';
  duration?: string;
  published_date?: string;
  topics?: { title_ar: string; title_en: string }[];
}`;

seedData = seedData.replace(oldPodcastInterface, newPodcastInterface);

// Now replace export const activities: Activity[] = [...];
const activitiesRegex = /export const activities: Activity\[\] = \[[\s\S]*?\n\];/;
const activitiesCode = `export const activities: Activity[] = ${JSON.stringify(updated.activities, null, 2)};`;
seedData = seedData.replace(activitiesRegex, activitiesCode);

// Replace export const researchAchievements: ResearchPaper[] = [...];
const researchRegex = /export const researchAchievements: ResearchPaper\[\] = \[[\s\S]*?\n\];/;
const researchCode = `export const researchAchievements: ResearchPaper[] = ${JSON.stringify(updated.researchAchievements, null, 2)};`;
seedData = seedData.replace(researchRegex, researchCode);

// Replace export const podcastEpisodes: PodcastEpisode[] = [...];
const podcastRegex = /export const podcastEpisodes: PodcastEpisode\[\] = \[[\s\S]*?\n\];/;
const podcastCode = `export const podcastEpisodes: PodcastEpisode[] = ${JSON.stringify(updated.podcastEpisodes, null, 2)};`;
seedData = seedData.replace(podcastRegex, podcastCode);

fs.writeFileSync('D:/Hazim/Projects/sci_infinty/website_01/src/data/seedData.ts', seedData, 'utf8');
console.log('seedData.ts successfully updated!');
