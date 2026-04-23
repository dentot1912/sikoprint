import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import LogoTicker from '@/components/LogoTicker';
import ContentSection from '@/components/ContentSection';
import Feedback from '@/components/Feedback';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeroBanner />
      <ContentSection />
      <Feedback />
      <LogoTicker />
      <Footer />
    </main>
  );
}
