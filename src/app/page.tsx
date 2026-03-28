import Navbar from "./components/Navbar";
import HeroSales from "./components/HeroSales";
import TrustBar from "./components/TrustBar";
import Portfolio from "./components/Portfolio";
import WhyUs from "./components/WhyUs";
import StylesPricing from "./components/StylesPricing";
import ArtistSpotlight from "./components/ArtistSpotlight";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import BookingCTA from "./components/BookingCTA";
import FAQ from "./components/FAQ";
import SocialProof from "./components/SocialProof";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import MobileBookingBar from "./components/MobileBookingBar";

export default function SalesPage() {
  return (
    <>
      <Navbar variant="sales" />
      <main id="main-content">
        <HeroSales />
        <TrustBar />
        <Portfolio />
        <WhyUs />
        <StylesPricing />
        <ArtistSpotlight />
        <Testimonials />
        <HowItWorks />
        <BookingCTA />
        <FAQ />
        <SocialProof />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileBookingBar />
    </>
  );
}
