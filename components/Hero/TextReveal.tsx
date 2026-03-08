"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(".char");

    if (prefersReduced) {
      gsap.set(chars, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      chars,
      { opacity: 0, y: 50, rotateX: -80 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.025,
        delay,
        ease: "power3.out",
      }
    );
  }, [delay]);

  return (
    <div ref={containerRef} className={`${className} overflow-hidden`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="char inline-block opacity-0"
          style={{ perspective: "500px" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
