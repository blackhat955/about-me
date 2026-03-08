"use client";

import { useGSAP } from "@/hooks/useGSAP";
import { motion } from "framer-motion";

export default function Contact() {
  const containerRef = useGSAP(
    (gsap) => {
      gsap.fromTo(
        ".contact-content",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#contact",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    []
  );

  return (
    <section id="contact" className="section-padding relative" ref={containerRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-apple-swift/[0.03] to-transparent pointer-events-none" />

      <div className="section-container relative">
        <div className="contact-content max-w-3xl mx-auto text-center">
          <span className="text-caption uppercase tracking-[0.2em] text-apple-swift mb-4 block">
            Contact
          </span>
          <h2 className="text-display-lg mb-6">
            Let&apos;s Build Something{" "}
            <span className="text-gradient">Together</span>
          </h2>
          <p className="text-body-lg text-apple-gray-300 mb-4 max-w-xl mx-auto">
            Have a project in mind or just want to chat? I&apos;m always
            open to new opportunities and interesting conversations.
          </p>
          <p className="text-body-md text-apple-gray-400 mb-12">
            +1 999 999-8989
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="mailto:durgeshse98@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full glass-strong px-8 py-4 text-body-md font-medium text-white transition-all"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              durgeshse98@gmail.com
            </motion.a>
            <motion.a
              href="https://github.com/blackhat955"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-full glass-strong px-8 py-4 text-body-md font-medium text-white transition-all"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </motion.a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://linkedin.com/in/durgesh98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm text-apple-gray-400 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/blackhat955"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm text-apple-gray-400 transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
