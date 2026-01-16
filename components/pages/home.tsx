"use client";

import { AnimatedHero } from "@/components/animated-hero";
import { Navigation } from "../layouts/navigation";
import { WhyOfflineAIMatters } from "../why-offline-ai-matters";
import { Features } from "../features";
import { HowItWorks } from "../how-it-works";
import { PerfectForEveryone } from "../perfect-for-everyone";
import { PrivacyGuarantee } from "../privacy-guarantee";
import { EarlyAccessCTA } from "../early-access-cta";
import { Footer } from "../layouts/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background-secondary to-background text-foreground">
      <Navigation />

      <AnimatedHero />

      <WhyOfflineAIMatters />
      <Features />
      <HowItWorks />
      <PerfectForEveryone />
      <PrivacyGuarantee />
      <EarlyAccessCTA />
      <Footer />
    </div>
  );
}
