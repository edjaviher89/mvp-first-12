import Header from '@/components/Header';
import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import PTWSection from '@/components/PTWSection';
import HackathonSection from '@/components/HackathonSection';
import AgendaSection from '@/components/AgendaSection';
import SpeakersSection from '@/components/SpeakersSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <IntroSection />
      <PTWSection />
      <HackathonSection />
      <AgendaSection />
      <SpeakersSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
