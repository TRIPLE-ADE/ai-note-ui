"use client";

import Image from "next/image";
import Link from "next/link";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.tripletech.ainote";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent to-background-secondary opacity-0 animate-in fade-in duration-700 delay-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-xl px-1.5 py-2 bg-linear-to-br from-primary to-accent flex items-center justify-center">
                <Image
                  src="/assets/logo.png"
                  alt="Private AI Note"
                  width={36}
                  height={36}
                />
              </div>
              <span className="font-bold bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Private AI Note
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Offline AI note-taking. Your data. Your control. Your privacy.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#why-offline-ai-matters"
                  className="hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#demo"
                  className="hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  href="#features"
                  className="hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-foreground hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Private AI Note. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
