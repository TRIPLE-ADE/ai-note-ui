"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import gsap from "gsap"

interface CardHoverAnimationProps {
  children: React.ReactNode
  className?: string
}

export function CardHoverAnimation({ children, className = "" }: CardHoverAnimationProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        boxShadow: "0 20px 40px rgba(85, 100, 255, 0.15)",
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      })
    }

    card?.addEventListener("mouseenter", handleMouseEnter)
    card?.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      card?.removeEventListener("mouseenter", handleMouseEnter)
      card?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={cardRef} className={className}>
      {children}
    </div>
  )
}
