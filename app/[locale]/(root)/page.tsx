import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import { SignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignIn />
      <Hero />
      <Features />
    </div>
  );
}
