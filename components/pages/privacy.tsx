"use client"

import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const PrivacyPolicy = () => {
  useEffect(() => {
    // Animate page entrance
    gsap.fromTo(".privacy-header", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })

    gsap.fromTo(
      ".privacy-content",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" },
    )

    // Animate sections on scroll
    const sections = document.querySelectorAll(".privacy-section")
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const privacyContent = `# Privacy Policy for Private AI Note

**Last Updated: December 31, 2025**

## Introduction

Private AI Note ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application ("App").

**Important: Our app is designed to be completely offline-first. No user-generated content (notes, audio recordings, or images) is ever transmitted to our servers or any external services.**

## App Permissions & Why We Need Them

Private AI Note requests the following permissions to provide its core functionality. All permissions are optional and you can deny them, though some features may not work without them.

### Microphone Access
- **Permission**: RECORD_AUDIO, MODIFY_AUDIO_SETTINGS
- **Why needed**: To record audio notes and enable voice-to-text transcription using Whisper AI
- **How used**: Audio is processed locally on your device and stored in your notes
- **Data handling**: Audio recordings stay on your device and are never transmitted

### Photos/Media Access
- **Permission**: READ_EXTERNAL_STORAGE, READ_MEDIA_IMAGES
- **Why needed**: To allow you to attach images to your notes
- **How used**: Images are copied to your local note storage
- **Data handling**: Images remain on your device and are not uploaded anywhere

### Background Recording (Android)
- **Permission**: FOREGROUND_SERVICE, FOREGROUND_SERVICE_MICROPHONE, FOREGROUND_SERVICE_MEDIA_PLAYBACK
- **Why needed**: To continue recording audio notes even when the app is in the background
- **How used**: Shows a persistent notification during recording to indicate active recording
- **Data handling**: All audio processing and storage happens locally

**Important:** These permissions are only used for the stated purposes and all data stays on your device. You can revoke permissions at any time through your device settings.

## Information We Collect

### Information Stored Locally on Your Device
- **Notes and Content**: All text notes, audio recordings, images, and AI-generated content you create
- **App Settings**: Your theme preferences and other app configuration
- **AI Models**: Downloaded AI models (LLaMA and Whisper) for offline processing

This data remains entirely on your device and is never transmitted to us or any third parties.

### Information We Collect for App Improvement (Anonymous)
We use Sentry (a third-party error monitoring service) to help us identify and fix crashes and performance issues:

- **Crash Reports**: Anonymous error logs when the app crashes
- **Device Information**: Operating system version, device model, and app version (no personal identifiers)
- **Performance Data**: How the app performs on different devices
- **Session Recordings**: Anonymous recordings of user interactions (collected for 10% of sessions and 100% of error sessions to help fix bugs)

**No personal data, IP addresses, or identifiable information is collected by Sentry.**

## How We Use Information

### Local Data (Stored on Your Device)
- To provide the core functionality of the app (creating, storing, and managing notes)
- To enable AI-powered features like transcription and chat
- To maintain your app preferences and settings

### Anonymous Diagnostic Data (via Sentry)
- To identify and fix app crashes and bugs
- To improve app performance and stability
- To understand how the app works across different devices

## Data Sharing and Third Parties

**We do not share, sell, or transmit your personal data or user-generated content to any third parties.**

The only external service we use is Sentry for crash reporting, and they receive only anonymous diagnostic data as described above.

## Data Security

- All your notes, audio recordings, and images stay on your device
- We do not have access to your data
- AI processing happens locally on your device
- Data is stored using secure local storage (SQLite database)

## Your Rights and Choices

Since your data never leaves your device, you have full control:

- **Delete Data**: You can delete all notes, audio recordings, and AI models through the app settings
- **Export Data**: You can export your notes as JSON files
- **Disable Diagnostics**: The app will continue to work normally even if diagnostic reporting encounters issues

## Children's Privacy

Our app does not collect personal information from children. Since the app works entirely offline and requires no account creation, it is suitable for users of all ages. However, we recommend parental supervision for users under 13.

## Changes to This Privacy Policy

We may update this Privacy Policy occasionally. We will notify users of any material changes through the app or app store updates.

## Contact Us

Since our app operates completely offline, we don't maintain a user database or email support system. For privacy-related questions or concerns:

- Contact us through the app store (Google Play Store or Apple App Store) reviews or support
- Submit issues or questions on our GitHub repository (if available)

## Compliance

This privacy policy is designed to comply with:
- Google Play Data Safety requirements
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)
- Other applicable privacy laws

---

**Private AI Note** is developed as an offline-first application. Your privacy and data security are our highest priorities.`

  const sections = privacyContent.split("\n## ")

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="privacy-header border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="mt-2 text-muted-foreground">Your privacy and data security are our highest priorities.</p>
        </div>
      </header>

      {/* Content */}
      <main className="privacy-content max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="privacy-section mb-12">
          <h2 className="text-3xl font-bold mb-4">Introduction</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Private AI Note ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, and protect your information when you use our mobile application ("App").
          </p>
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-8">
            <p className="text-foreground font-semibold">
              Important: Our app is designed to be completely offline-first. No user-generated content (notes, audio
              recordings, or images) is ever transmitted to our servers or any external services.
            </p>
          </div>
        </div>

        {/* App Permissions Section */}
        <div className="privacy-section mb-12">
          <h2 className="text-3xl font-bold mb-6">App Permissions & Why We Need Them</h2>
          <p className="text-muted-foreground mb-6">
            Private AI Note requests the following permissions to provide its core functionality. All permissions are
            optional and you can deny them, though some features may not work without them.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "Microphone Access",
                permissions: "RECORD_AUDIO, MODIFY_AUDIO_SETTINGS",
                why: "To record audio notes and enable voice-to-text transcription using Whisper AI",
                usage: "Audio is processed locally on your device and stored in your notes",
                handling: "Audio recordings stay on your device and are never transmitted",
              },
              {
                title: "Photos/Media Access",
                permissions: "READ_EXTERNAL_STORAGE, READ_MEDIA_IMAGES",
                why: "To allow you to attach images to your notes",
                usage: "Images are copied to your local note storage",
                handling: "Images remain on your device and are not uploaded anywhere",
              },
              {
                title: "Background Recording (Android)",
                permissions: "FOREGROUND_SERVICE, FOREGROUND_SERVICE_MICROPHONE, FOREGROUND_SERVICE_MEDIA_PLAYBACK",
                why: "To continue recording audio notes even when the app is in the background",
                usage: "Shows a persistent notification during recording to indicate active recording",
                handling: "All audio processing and storage happens locally",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{item.title}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-muted-foreground">Permission: </span>
                    <span className="text-foreground">{item.permissions}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">Why needed: </span>
                    <span className="text-foreground">{item.why}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">How used: </span>
                    <span className="text-foreground">{item.usage}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground">Data handling: </span>
                    <span className="text-foreground">{item.handling}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-6">
            <p className="text-foreground font-semibold">
              Important: These permissions are only used for the stated purposes and all data stays on your device. You
              can revoke permissions at any time through your device settings.
            </p>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="privacy-section mb-12">
          <h2 className="text-3xl font-bold mb-6">Information We Collect</h2>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Information Stored Locally on Your Device</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Notes and Content</strong>: All text notes, audio recordings, images, and AI-generated
                    content you create
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>App Settings</strong>: Your theme preferences and other app configuration
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>AI Models</strong>: Downloaded AI models (LLaMA and Whisper) for offline processing
                  </span>
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                This data remains entirely on your device and is never transmitted to us or any third parties.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Information We Collect for App Improvement (Anonymous)
              </h3>
              <p className="text-foreground mb-4">
                We use Sentry (a third-party error monitoring service) to help us identify and fix crashes and
                performance issues:
              </p>
              <ul className="space-y-2 text-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Crash Reports</strong>: Anonymous error logs when the app crashes
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Device Information</strong>: Operating system version, device model, and app version (no
                    personal identifiers)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Performance Data</strong>: How the app performs on different devices
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Session Recordings</strong>: Anonymous recordings of user interactions (collected for 10% of
                    sessions and 100% of error sessions to help fix bugs)
                  </span>
                </li>
              </ul>
              <p className="text-primary font-semibold mt-4">
                No personal data, IP addresses, or identifiable information is collected by Sentry.
              </p>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="privacy-section mb-12">
          <h2 className="text-3xl font-bold mb-6">How We Use Information</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-primary">Local Data</h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span>Provide the core functionality of the app</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span>Enable AI-powered features like transcription and chat</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span>Maintain your app preferences and settings</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-primary">Anonymous Diagnostic Data</h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span>Identify and fix app crashes and bugs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span>Improve app performance and stability</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">→</span>
                  <span>Understand how the app works across devices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data Sharing */}
        <div className="privacy-section mb-12">
          <h2 className="text-3xl font-bold mb-4">Data Sharing and Third Parties</h2>
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
            <p className="text-foreground font-semibold mb-4">
              We do not share, sell, or transmit your personal data or user-generated content to any third parties.
            </p>
            <p className="text-muted-foreground">
              The only external service we use is Sentry for crash reporting, and they receive only anonymous diagnostic
              data as described above.
            </p>
          </div>
        </div>

        {/* Data Security */}
        <div className="privacy-section mb-12">
          <h2 className="text-3xl font-bold mb-6">Data Security</h2>
          <ul className="space-y-3">
            {[
              "All your notes, audio recordings, and images stay on your device",
              "We do not have access to your data",
              "AI processing happens locally on your device",
              "Data is stored using secure local storage (SQLite database)",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 bg-card border border-border rounded-lg p-4">
                <span className="text-primary font-bold text-lg">✓</span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Your Rights and Choices */}
        <div className="privacy-section mb-12">
          <h2 className="text-3xl font-bold mb-6">Your Rights and Choices</h2>
          <p className="text-muted-foreground mb-6">Since your data never leaves your device, you have full control:</p>
          <div className="space-y-4">
            {[
              {
                title: "Delete Data",
                desc: "You can delete all notes, audio recordings, and AI models through the app settings",
              },
              {
                title: "Export Data",
                desc: "You can export your notes as JSON files",
              },
              {
                title: "Disable Diagnostics",
                desc: "The app will continue to work normally even if diagnostic reporting encounters issues",
              },
            ].map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-4">
                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Children's Privacy */}
        <div className="privacy-section mb-12">
          <h2 className="text-3xl font-bold mb-4">Children's Privacy</h2>
          <p className="text-foreground leading-relaxed">
            Our app does not collect personal information from children. Since the app works entirely offline and
            requires no account creation, it is suitable for users of all ages. However, we recommend parental
            supervision for users under 13.
          </p>
        </div>

        {/* Changes to Policy */}
        <div className="privacy-section mb-12">
          <h2 className="text-3xl font-bold mb-4">Changes to This Privacy Policy</h2>
          <p className="text-foreground leading-relaxed">
            We may update this Privacy Policy occasionally. We will notify users of any material changes through the app
            or app store updates.
          </p>
        </div>

        {/* Contact Us */}
        <div className="privacy-section mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            Since our app operates completely offline, we don't maintain a user database or email support system. For
            privacy-related questions or concerns:
          </p>
          <ul className="space-y-2 text-foreground">
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Contact us through the app store (Google Play Store or Apple App Store) reviews or support</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">•</span>
              <span>Submit issues or questions on our GitHub repository (if available)</span>
            </li>
          </ul>
        </div>

        {/* Compliance */}
        <div className="privacy-section mb-12 pb-12 border-b border-border">
          <h2 className="text-3xl font-bold mb-4">Compliance</h2>
          <p className="text-muted-foreground mb-4">This privacy policy is designed to comply with:</p>
          <ul className="space-y-2 text-foreground">
            <li className="flex gap-3">
              <span className="text-primary">✓</span>
              <span>Google Play Data Safety requirements</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">✓</span>
              <span>General Data Protection Regulation (GDPR)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">✓</span>
              <span>California Consumer Privacy Act (CCPA)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary">✓</span>
              <span>Other applicable privacy laws</span>
            </li>
          </ul>
        </div>

        {/* Footer Note */}
        <div className="privacy-section mt-12 text-center">
          <p className="text-muted-foreground italic">
            <strong>Private AI Note</strong> is developed as an offline-first application.
            <br />
            Your privacy and data security are our highest priorities.
          </p>
        </div>
      </main>

      {/* Bottom CTA */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default PrivacyPolicy
