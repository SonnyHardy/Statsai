"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export function AnimatedHeadline() {
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headlineRef.current) return

    const chars = headlineRef.current.querySelectorAll(".char")

    gsap.fromTo(
      chars,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.03,
      }
    )
  }, [])

  const words = ["INTELLIGENT", "ANALYTICS,", "FINALLY."]

  return (
    <h1
      ref={headlineRef}
      className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-8 leading-tight tracking-tight"
    >
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="inline-block">
          {word.split("").map((char, charIndex) => (
            <div
              key={`${wordIndex}-${charIndex}`}
              className="inline-block overflow-hidden"
              style={{ verticalAlign: "top" }}
            >
              <span className="char inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            </div>
          ))}
          {wordIndex < words.length - 1 && (
            <>
              <br />
            </>
          )}
        </div>
      ))}
    </h1>
  )
}
