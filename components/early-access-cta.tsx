"use client";

import { ArrowRight, Smartphone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollAnimatedSection } from "@/components/scroll-animated-section";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.tripletech.testing";

export function EarlyAccessCTA() {
  return (
    <ScrollAnimatedSection
      id="early-access"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full pointer-events-none">
        <div className="absolute inset-0 bg-primary/10 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Join the Revolution
          </span>
        </div>

        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tighter leading-none">
          Ready to Think{" "}
          <span className="bg-linear-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
            Without Limits?
          </span>
        </h2>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
          Experience the world's most private AI note-taking app. No cloud, no logs, just your intelligence enhanced.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-left">
          {[
            { title: "Full Privacy", desc: "No data leaves your phone" },
            { title: "Offline AI", desc: "Works without internet" },
            { title: "Zero Tracking", desc: "We never see your notes" },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm">
              <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <Button
            asChild
            variant="gradient"
            size="xl"
            className="h-16 px-12 text-xl font-bold shadow-2xl shadow-primary/30"
          >
            <Link
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started for Free
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </Button>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-primary" />
              <span>Available for Android on </span>
              <Link
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-semibold hover:text-primary transition-colors underline underline-offset-4"
              >
                Google Play
              </Link>
            </div>
            <span className="hidden sm:inline opacity-30">|</span>
            <span className="text-sm">iOS version launching Soon</span>
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
