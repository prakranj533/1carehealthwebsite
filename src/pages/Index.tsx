import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { AboutIntro } from "@/components/AboutIntro";
import { HowItWorks } from "@/components/HowItWorks";
import { FourAs } from "@/components/FourAs";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { Stories } from "@/components/Stories";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-20">
      <Hero />
      <Stats />
      <AboutIntro />
      <HowItWorks />
      <FourAs />
      <FeaturesShowcase />
      <Stories />
      <ContactCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
