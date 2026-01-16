"use client";

import { Check } from "lucide-react";
import { ScrollAnimatedSection } from "@/components/scroll-animated-section";

const useCases = [
  "Students",
  "Researchers",
  "Developers",
  "Writers",
  "Meeting Notes",
  "Personal Journaling",
];

export function PerfectForEveryone() {
  return (
    <ScrollAnimatedSection className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Perfect{" "}
            <span className="bg-linear-to-r from-primary to-accent-light bg-clip-text text-transparent">
              For Everyone
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a student, researcher, or creative professional
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((useCase, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-xl border border-border-light bg-linear-to-br from-card/50 to-card/25 hover:border-primary/40 hover:bg-card/80 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="relative z-10 flex items-center gap-3">
                <Check className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="font-semibold text-lg">{useCase}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
