import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FoundersJourney from '@/components/FoundersJourney';
import StorytellingSection from '@/components/StorytellingSection';
import ServicesSection from '@/components/ServicesSection';
import HowWeShip from '@/components/HowWeShip';
import LocalBusiness from '@/components/LocalBusiness';
import ProductsShowcase from '@/components/ProductsShowcase';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FoundersJourney />
      <StorytellingSection />
      <HowWeShip />
      <ServicesSection />
      <LocalBusiness />
      <ProductsShowcase />
      <ContactSection />
      <Footer />
    </main>
  );
}
