"use client";

import { useGSAP } from "@/hooks/useGSAP";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

const highlights = [
  {
    number: "4+",
    label: "Years Experience",
    description: "iOS, C++, systems engineering",
  },
  {
    number: "120+",
    label: "GitHub Projects",
    description: "Open source contributions",
  },
  {
    number: "90",
    label: "FPS Target",
    description: "GPU-centric rendering",
  },
  {
    number: "40%",
    label: "Search Speedup",
    description: "Trie + HashMap engine",
  },
];

export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const containerRef = useGSAP(
    (gsap) => {
      gsap.fromTo(
        ".about-text",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".about-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-cards",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    []
  );

  return (
    <section
      id="about"
      className="about-section section-padding relative overflow-hidden"
      ref={containerRef}
    >
      <div className="section-container">
        {/* Section label */}
        <div className="mb-4">
          <span className="text-caption uppercase tracking-[0.2em] text-apple-swift">
            About
          </span>
        </div>

        {/* Main text */}
        <div className="about-text max-w-3xl">
          <h2 className="text-display-lg mb-8">
            I build systems that feel{" "}
            <span className="text-gradient-swift">effortless</span>.
          </h2>
          <p className="text-body-lg text-apple-gray-300 mb-6 leading-relaxed">
            I&apos;m a Software Engineer at Kahana, where I work on GPU-centric
            rendering pipelines, multi-threaded architectures, and AI-assisted
            interactions for spatial computing. My work spans Swift, C++, Metal,
            and real-time systems targeting 90 FPS on visionOS.
          </p>
          <p className="text-body-md text-apple-gray-400 leading-relaxed">
            I hold a Master&apos;s in Data Science from Indiana University
            Bloomington and a B.E. in Information Technology from the University
            of Mumbai. I believe great software is invisible — it just works.
          </p>
        </div>

        {/* Highlight cards */}
        <div ref={ref} className="about-cards mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              className="about-card group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              <div className="text-display-md text-gradient-swift mb-2 font-bold">
                {isInView ? item.number : "0"}
              </div>
              <div className="text-body-sm font-medium text-white mb-1">
                {item.label}
              </div>
              <div className="text-caption text-apple-gray-400">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-apple-swift/[0.03] blur-[120px] pointer-events-none" />
    </section>
  );
}
