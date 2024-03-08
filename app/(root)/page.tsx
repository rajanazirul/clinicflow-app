import ClinicSection from "@/components/Home/ClinicSection";
import FeatureList from "@/components/Home/FeatureList";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureList />
      <ClinicSection />
      <Features />
    </div>
  );
}
