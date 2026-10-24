import { Routes, Route, Navigate } from 'react-router-dom';
import { LocaleProvider } from './context/LocaleContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PwaInstallPrompt } from './components/common/PwaInstallPrompt';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ActivitiesView } from './views/ActivitiesView';
import { ActivityDetailView } from './views/ActivityDetailView';
import { TeamView } from './views/TeamView';
import { MagazineView } from './views/MagazineView';
import { PodcastView } from './views/PodcastView';
import { ResearchView } from './views/ResearchView';
import { JoinUsView } from './views/JoinUsView';
import { ContactView } from './views/ContactView';
import { PrivacyView } from './views/PrivacyView';
import { PartnersView } from './views/PartnersView';
import { NotFoundView } from './views/NotFoundView';

export default function App() {
  return (
    <LocaleProvider>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-1 pt-20 bg-white">
          <Routes>
            <Route path="/:locale" element={<HomeView />} />
            <Route path="/:locale/about" element={<AboutView />} />
            <Route path="/:locale/projects-activities" element={<ActivitiesView />} />
            <Route path="/:locale/projects-activities/:slug" element={<ActivityDetailView />} />
            <Route path="/:locale/team" element={<TeamView />} />
            <Route path="/:locale/partners" element={<PartnersView />} />
            <Route path="/:locale/fudul" element={<MagazineView />} />
            <Route path="/:locale/sci-cast" element={<PodcastView />} />
            <Route path="/:locale/research" element={<ResearchView />} />
            <Route path="/:locale/join-us" element={<JoinUsView />} />
            <Route path="/:locale/contact" element={<ContactView />} />
            <Route path="/:locale/privacy" element={<PrivacyView />} />
            <Route path="/" element={<Navigate to="/ar" replace />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </main>
        <Footer />
        <PwaInstallPrompt />
      </div>
    </LocaleProvider>
  );
}
