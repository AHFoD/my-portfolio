import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import BackToTop from './components/BackToTop.jsx';
import ProfessionalLanding from './components/ProfessionalLanding.jsx';
import HobbyLanding from './components/HobbyLanding';
import { usePersona } from './persona/persona-state';

function App() {
  const { persona } = usePersona();
  return (
    <div className="min-h-screen bg-background relative z-0">
      <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\\"0 0 200 200\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cfilter id=\\"noiseFilter\\"%3E%3CfeTurbulence type=\\"fractalNoise\\" baseFrequency=\\"0.85\\" numOctaves=\\"3\\" stitchTiles=\\"stitch\\"%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width=\\"100%25\\" height=\\"100%25\\" filter=\\"url(%23noiseFilter)\\"%3E%3C/rect%3E%3C/svg%3E")' }}></div>
      <Header />
      <main>
        {persona === "professional" ? <ProfessionalLanding /> : <HobbyLanding />}
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <Analytics />
    </div>
  );
}

export default App;
