"use client";

import { Lock, Zap, Shield, Smartphone } from "lucide-react";
import { ScrollAnimatedSection } from "@/components/scroll-animated-section";
import { CardHoverAnimation } from "@/components/card-hover-animation";

const features = [
  {
    icon: Lock,
    title: "Complete Privacy",
    description:
      "Your notes never leave your device. No cloud syncing, no tracking, no ads, no middleman.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Instant AI processing with zero latency. No waiting for cloud servers. Pure speed.",
  },
  {
    icon: Smartphone,
    title: "Works Offline",
    description:
      "Fully functional without internet. Build your second brain anywhere, anytime.",
  },
  {
    icon: Shield,
    title: "Full Control",
    description:
      "You own your data completely. Delete what you want, whenever you want. Period.",
  },
];

export function WhyOfflineAIMatters() {
  return (
    <ScrollAnimatedSection
      id="why-offline-ai-matters"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-1 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-xs font-bold text-accent uppercase tracking-widest">
              Built for Security
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Why Offline AI{" "}
            <span className="bg-linear-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Matters
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your data is sacred. Complete control, complete privacy—all
            processing happens on your device, offline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <CardHoverAnimation
              key={i}
              className="p-8 rounded-2xl bg-card/20 border border-border/40 backdrop-blur-sm hover:border-accent/40 transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 border border-accent/20">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </CardHoverAnimation>
          ))}
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
