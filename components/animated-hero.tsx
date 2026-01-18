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
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-accent/15 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            100% Offline • No Cloud Required
          </span>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight text-balance leading-[1.1]"
        >
          Own Your Thoughts.{" "}
          <span className="bg-linear-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
            Private by Design.
          </span>
        </h1>

        <p
          ref={descRef}
          className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-balance leading-relaxed"
        >
          Powerful on-device AI for smarter thinking. Generate, summarize, and chat
          with your notes locally. Your data never leaves your device.
        </p>

        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
        >
          <Button asChild variant="gradient" size="xl" className="group h-14 px-10 text-lg shadow-primary/25">
            <Link
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Early Access
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="xl" className="h-14 px-10 text-lg border-border/50 hover:border-primary/50 backdrop-blur-sm">
                Watch Demo
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl w-full p-6 bg-background/95 backdrop-blur-xl border-border/50">
              <DialogTitle className="sr-only">Watch Demo Video</DialogTitle>
              <div className="relative w-full aspect-video bg-black/40 rounded-2xl overflow-hidden shadow-2xl border border-border/40">
                <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-primary/5 to-accent/5">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-md">
                      <svg
                        className="w-12 h-12 text-primary ml-1.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Video Demo Coming Soon</h3>
                    <p className="text-muted-foreground">
                      Experience the power of local AI note-taking.
                    </p>
                  </div>
                </div>
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
