"use client";

import dynamic from "next/dynamic";
import { AnimatedHero } from "@/components/animated-hero";
import { Navigation } from "../layouts/navigation";

const WhyOfflineAIMatters = dynamic(() => import("../why-offline-ai-matters").then(mod => mod.WhyOfflineAIMatters));
const Features = dynamic(() => import("../features").then(mod => mod.Features));
const HowItWorks = dynamic(() => import("../how-it-works").then(mod => mod.HowItWorks));
const PerfectForEveryone = dynamic(() => import("../perfect-for-everyone").then(mod => mod.PerfectForEveryone));
const PrivacyGuarantee = dynamic(() => import("../privacy-guarantee").then(mod => mod.PrivacyGuarantee));
const FAQ = dynamic(() => import("../faq").then(mod => mod.FAQ));
const EarlyAccessCTA = dynamic(() => import("../early-access-cta").then(mod => mod.EarlyAccessCTA));
const Footer = dynamic(() => import("../layouts/footer").then(mod => mod.Footer));

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background-secondary to-background text-foreground">
      <Navigation />

      <main>
        <AnimatedHero />

        <WhyOfflineAIMatters />
        <Features />
        <HowItWorks />
        <PerfectForEveryone />
        <PrivacyGuarantee />
        <FAQ />
        <EarlyAccessCTA />
      </main>

      <Footer />
    </div>
  );
}
