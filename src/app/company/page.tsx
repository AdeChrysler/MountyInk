import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import HeroCompany from "../components/HeroCompany";
import BrandStory from "../components/BrandStory";
import VisionMission from "../components/VisionMission";
import OurCommitment from "../components/OurCommitment";
import StudioGallery from "../components/StudioGallery";
import TeamFull from "../components/TeamFull";
import Portfolio from "../components/Portfolio";
import HygieneStandards from "../components/HygieneStandards";
import Testimonials from "../components/Testimonials";
import SocialProof from "../components/SocialProof";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About — Company Profile",
  description:
    "Discover the story behind Mounty Ink — Bali's premier tattoo atelier. Meet our artists, explore our studio, and learn what sets us apart.",
  openGraph: {
    title: "About Mounty Ink — Bali's Premier Tattoo Atelier",
    description:
      "Discover the story, meet the artists, and explore the studio behind Bali's most sought-after tattoo experience.",
  },
};

export default function CompanyProfilePage() {
  return (
    <>
      <Navbar variant="company" />
      <main id="main-content">
        <HeroCompany />
        <BrandStory />
        <VisionMission />
        <OurCommitment />
        <StudioGallery />
        <TeamFull />
        <Portfolio />
        <HygieneStandards />
        <Testimonials />
        <SocialProof />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
