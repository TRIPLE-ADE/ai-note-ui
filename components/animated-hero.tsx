"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Screenshot3D } from "@/components/3d-screenshot-display";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.tripletech.ainote";

export function AnimatedHero() {
  const containerRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .from(badgeRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.6,
          ease: "power2.out",
        })
        .from(
          titleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          buttonsRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div
          ref={badgeRef}
          className="inline-block mb-6 px-3 py-1 rounded-full bg-accent/10 border border-accent/20"
        >
          <span className="text-sm font-medium text-accent">
            100% Offline • No Cloud • Full Privacy
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance"
        >
          Your Notes, Reimagined
        </h1>

        <p
          ref={descRef}
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
        >
          Powerful on-device AI for smarter thinking. Generate, summarize, chat
          with your thoughts all offline, all private.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button asChild variant="accent" size="xl">
            <Link
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl w-full p-6 bg-background border-border">
              <DialogTitle className="sr-only">Watch Demo Video</DialogTitle>
              <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-primary/20 to-accent/20">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-primary ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      Video coming soon
                    </p>
                    <p className="text-sm text-muted-foreground/70">
                      Replace this placeholder with your YouTube embed
                    </p>
                  </div>
                </div>
                {/* Uncomment and replace with your YouTube video embed when ready:
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="YOUR_YOUTUBE_EMBED_URL"
                  title="Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                */}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div ref={imageRef} id="demo" className="relative w-full">
          <Screenshot3D
            image1="/assets/image-1.png"
            image2="/assets/image-2.png"
            alt1="Private AI Note app interface"
            alt2="Private AI Note app features"
          />
        </div>
      </div>
    </section>
  );
}
