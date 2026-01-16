"use client";

import { ArrowRight, Smartphone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollAnimatedSection } from "@/components/scroll-animated-section";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.tripletech.ainote";

export function EarlyAccessCTA() {
  return (
    <ScrollAnimatedSection
      id="early-access"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-accent/5 to-primary/10 pointer-events-none" />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Ready to Think{" "}
          <span className="bg-linear-to-r from-primary to-accent-light bg-clip-text text-transparent">
            Smarter?
          </span>
        </h2>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
          Join thousands of people who trust their private thinking to offline
          AI. Get early access today and shape the future of note-taking.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            variant="gradient"
            size="xl"
            className="hover:shadow-2xl py-6"
          >
            <Link
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Early Access <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>

        <p className="text-muted-foreground mt-8 flex items-center justify-center gap-2">
          <Smartphone className="w-4 h-4" />
          <span>Available on </span>
          <Link
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Google Play
          </Link>
          <span>. iOS coming soon.</span>
        </p>
      </div>
    </ScrollAnimatedSection>
  );
}
