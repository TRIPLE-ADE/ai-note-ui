"use client";

import { Zap, MessageSquare, Mic } from "lucide-react";
import { ScrollAnimatedSection } from "@/components/scroll-animated-section";
import { CardHoverAnimation } from "@/components/card-hover-animation";

const features = [
  {
    icon: Zap,
    title: "AI Note Generation",
    description:
      "Describe what you want to create. AI generates structured notes with perfect formatting automatically.",
  },
  {
    icon: MessageSquare,
    title: "Summarize in Seconds",
    description:
      "Auto-generate titles, key points, and summaries from your notes instantly—no cloud required.",
  },
  {
    icon: MessageSquare,
    title: "Chat with Your Notes",
    description:
      "Ask questions and get insights from your own data with an on-device AI assistant.",
  },
  {
    icon: Mic,
    title: "Voice & Transcription",
    description:
      "Record audio and transcribe instantly. Perfect for meetings, lectures, and brainstorms.",
  },
];

export function Features() {
  return (
    <ScrollAnimatedSection
      id="features"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Offline AI{" "}
            <span className="bg-linear-to-r from-primary to-accent-light bg-clip-text text-transparent">
              Superpowers
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need for intelligent note-taking, all processing
            locally on your device.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <CardHoverAnimation
              key={i}
              className="relative p-8 rounded-2xl border border-border-light bg-linear-to-br from-card via-card to-card/50 hover:border-primary/40 transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-20 -mt-20" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </CardHoverAnimation>
          ))}
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
