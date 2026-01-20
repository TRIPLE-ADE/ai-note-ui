import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Private AI Note - Offline AI-Powered Note Taking",
  description:
    "Powerful on-device AI for smarter thinking. Generate, summarize, chat with your notes—all offline, all private.",
  icons: {
    icon: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
  openGraph: {
    title: "Private AI Note - Offline AI-Powered Note Taking",
    description:
      "Powerful on-device AI for smarter thinking. Generate, summarize, chat with your notes—all offline, all private.",
    images: [
      {
        url: "/assets/featured-image.png",
        width: 1200,
        height: 630,
        alt: "Private AI Note",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private AI Note - Offline AI-Powered Note Taking",
    description:
      "Powerful on-device AI for smarter thinking. Generate, summarize, chat with your notes—all offline, all private.",
    images: ["/assets/featured-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
