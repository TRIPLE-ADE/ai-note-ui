"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

interface Screenshot3DProps {
  image1: string;
  image2: string;
  alt1?: string;
  alt2?: string;
}
export function Screenshot3D({
  image1,
  image2,
  alt1 = "App screenshot 1",
  alt2 = "App screenshot 2",
}: Screenshot3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rect = container.getBoundingClientRect();
    const updateRect = () => {
      rect = container.getBoundingClientRect();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1

      // Apply 3D tilt effect
      if (image1Ref.current) {
        gsap.to(image1Ref.current, {
          rotationY: x * 8,
          rotationX: -y * 8,
          x: x * 20,
          y: y * 20,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (image2Ref.current) {
        gsap.to(image2Ref.current, {
          rotationY: x * -8,
          rotationX: -y * 8,
          x: x * -20,
          y: y * 20,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      if (image1Ref.current) {
        gsap.to(image1Ref.current, {
          rotationY: 0,
          rotationX: 0,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }
      if (image2Ref.current) {
        gsap.to(image2Ref.current, {
          rotationY: 0,
          rotationX: 0,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, { passive: true });

    // Initial animation
    const ctx = gsap.context(() => {
      if (image1Ref.current && image2Ref.current) {
        gsap.from([image1Ref.current, image2Ref.current], {
          opacity: 0,
          scale: 0.8,
          rotationY: -15,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        });
      }
    });

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[750px] sm:h-[850px] perspective-1000"
      style={{ perspective: "1000px" }}
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-3xl opacity-50" />

      <div className="relative w-full h-full flex items-center justify-center gap-8 sm:gap-12">
        <div
          ref={image1Ref}
          className="relative w-[280px] sm:w-[320px] h-[675px] sm:h-[771px] transform-style-preserve-3d"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={image1}
              alt={alt1}
              fill
              priority
              sizes="(max-width: 640px) 280px, 320px"
            />
          </div>
        </div>

        <div
          ref={image2Ref}
          className="relative w-[280px] sm:w-[320px] h-[675px] sm:h-[771px] transform-style-preserve-3d"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={image2}
              alt={alt2}
              fill
              priority
              sizes="(max-width: 640px) 280px, 320px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
