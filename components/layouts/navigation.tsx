"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-button";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.tripletech.ainote";

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="rounded-xl px-1.5 py-2 bg-linear-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Image
              src="/assets/logo.png"
              alt="Private AI Note"
              width={36}
              height={36}
            />
          </div>
          <span className="text-lg font-bold bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Private AI Note
          </span>
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
