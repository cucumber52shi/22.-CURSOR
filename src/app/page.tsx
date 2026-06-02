import { BentoGrid } from "@/components/BentoGrid";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProfileSection } from "@/components/ProfileSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <ProfileSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
