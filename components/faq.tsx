"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ScrollAnimatedSection } from "@/components/scroll-animated-section";
import { cn } from "tailwind-variants";

const faqs = [
    {
        question: "Does this really work 100% offline?",
        answer: "Yes. All AI models (generation, summarization, and chat) are downloaded to your device and run locally. No internet connection is required after the initial model download.",
    },
    {
        question: "Is my data really private?",
        answer: "Absolutely. We don't have servers that store your notes. Everything happens on your device. We don't track your usage or 'see' your content.",
    },
    {
        question: "Which AI models are being used?",
        answer: "We use highly optimized, small language models specifically tuned for on-device performance and efficiency, ensuring a smooth experience even on mid-range smartphones.",
    },
    {
        question: "Will it drain my battery?",
        answer: "On-device AI is computationally intensive, but we've optimized our models to minimize battery impact. Inference only happens when you explicitly trigger it.",
    },
    {
        question: "How do I get early access?",
        answer: "Simply click the 'Get Early Access' button to be directed to our Google Play Store page where you can join the testing program.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <ScrollAnimatedSection
            id="faq"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-background-secondary/30 to-transparent"
        >
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
                        Frequently Asked{" "}
                        <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                            Questions
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Everything you need to know about Private AI Note.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={cn(
                                "group rounded-2xl border border-border/50 bg-card/20 backdrop-blur-sm transition-all duration-300",
                                openIndex === i ? "border-primary/40 bg-card/40" : "hover:border-primary/20"
                            )}
                        >
                            <button
                                type="button"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className="font-bold text-lg">{faq.question}</span>
                                <div className={cn(
                                    "flex items-center justify-center w-8 h-8 rounded-full border border-border/50 group-hover:border-primary/40 transition-colors",
                                    openIndex === i && "bg-primary/10 border-primary/40 text-primary"
                                )}>
                                    {openIndex === i ? (
                                        <Minus className="w-4 h-4" />
                                    ) : (
                                        <Plus className="w-4 h-4" />
                                    )}
                                </div>
                            </button>
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-300 ease-in-out",
                                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ScrollAnimatedSection>
    );
}
