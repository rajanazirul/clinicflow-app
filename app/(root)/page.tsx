import ClinicSection from "@/components/Home/ClinicSection";
import FeatureList from "@/components/Home/FeatureList";
import FeatureCarousell from "@/components/Home/FeatureCarousell";
import Features from "@/components/Home/Features";
import FeaturesMulti from "@/components/Home/FeaturesMulti";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureList />
      <ClinicSection />
      <Features />
      <FeatureCarousell />
      <FeaturesMulti /> 
    </div>
  );
}
