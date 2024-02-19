import FeatureList from "@/components/Home/FeatureList";
import FeatureSection from "@/components/Home/FeatureSection";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeatureList />
      <Features />
      <FeatureSection title="Unveiling Our Potential" leftText={true} showHeading={true} />
    </div>
  );
}
