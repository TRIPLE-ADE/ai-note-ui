"use client";

import { ScrollAnimatedSection } from "@/components/scroll-animated-section";

const steps = [
  {
    step: "01",
    title: "On-Device AI Processing",
    description:
      "Powerful AI models run directly on your device. No data transmission, no external dependencies. Pure local processing.",
  },
  {
    step: "02",
    title: "Instant Results",
    description:
      "Get instant results without waiting for cloud servers. Experience zero-latency AI powered by cutting-edge local models.",
  },
  {
    step: "03",
    title: "Complete Ownership",
    description:
      "Everything is encrypted and stored locally. You own your data completely, forever. No subscriptions, no hidden storage access.",
  },
];

export function HowItWorks() {
  return (
    <ScrollAnimatedSection className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            How It{" "}
            <span className="bg-linear-to-r from-primary to-accent-light bg-clip-text text-transparent">
              Works
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {steps.map((item, i) => (
            <div key={i} className="relative group cursor-pointer">
              <div className="absolute left-0 top-16 bottom-0 w-1 bg-linear-to-b from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-1" />
              <div className="flex gap-8">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-accent flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-2 group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
