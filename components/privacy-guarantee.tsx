"use client";

import { Lock, Shield, Smartphone } from "lucide-react";
import { ScrollAnimatedSection } from "@/components/scroll-animated-section";
import { CardHoverAnimation } from "@/components/card-hover-animation";

const guarantees = [
  {
    icon: Lock,
    title: "No Cloud Storage",
    description: "All data stays on your device. Period.",
  },
  {
    icon: Shield,
    title: "No Data Tracking",
    description: "We don't collect, store, or sell your data.",
  },
  {
    icon: Smartphone,
    title: "Offline by Design",
    description: "Works without internet. Works without us.",
  },
];

export function PrivacyGuarantee() {
  return (
    <ScrollAnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-primary/3 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Privacy{" "}
            <span className="bg-linear-to-r from-primary to-accent-light bg-clip-text text-transparent">
              Guarantee
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your data belongs to you. Always.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((item, i) => (
            <CardHoverAnimation
              key={i}
              className="relative p-8 rounded-2xl border border-border-light bg-linear-to-br from-card to-card/50 hover:border-primary/40 transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary/30 to-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
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
