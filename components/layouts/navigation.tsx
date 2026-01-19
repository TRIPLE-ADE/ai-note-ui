"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-button";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.tripletech.testing";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/60 supports-backdrop-filter:bg-background/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="rounded-xl px-1.5 py-2 bg-linear-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg shadow-primary/20">
            <Image
              src="/assets/logo.png"
              alt="Private AI Note"
              width={32}
              height={32}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Private AI Note
            </span>
            <span className="text-[10px] font-medium text-primary uppercase tracking-widest leading-none">
              v1.0 • Offline AI
            </span>
          </div>
        </div>
        <Button asChild variant="gradient">
          <Link
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Early Access
          </Link>
        </Button>
      </div>
    </nav>
  );
}
