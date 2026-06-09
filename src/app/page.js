import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FoundersJourney from '@/components/FoundersJourney';
import ServicesGrid from '@/components/ServicesGrid';
import LocalBusiness from '@/components/LocalBusiness';
import ProductsShowcase from '@/components/ProductsShowcase';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FoundersJourney />
      <ServicesGrid />
      <LocalBusiness />
      <ProductsShowcase />
      <Footer />
    </main>
  );
}
