"use client";

import dynamic from "next/dynamic";
import TextReveal from "./TextReveal";
import { motion } from "framer-motion";
import MetalLogo from "./MetalLogo";

const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <ParticleField />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-black/20 to-black" />

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-body-sm text-apple-gray-300 backdrop-blur-sm">
            Software Engineer
          </span>
        </motion.div>
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            <TextReveal
              text="Durgesh Tiwari"
              className="text-display-lg font-bold md:text-display-xl"
              delay={0.4}
            />
            <MetalLogo />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-display-lg font-bold text-gradient-swift md:text-display-xl"
          >
            Software Engineer
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mx-auto mt-8 max-w-xl text-body-lg text-apple-gray-300"
        >
          Building high-performance systems with Swift, C++, and Metal.
          Focused on GPU-centric rendering, low-latency architecture,
          and experiences that feel effortless.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <button
            onClick={() =>
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full bg-apple-swift px-8 py-3 text-body-sm font-medium text-white transition-all hover:brightness-110 hover:shadow-lg hover:shadow-apple-swift/25"
          >
            View My Work
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full border border-white/20 px-8 py-3 text-body-sm font-medium text-white transition-all hover:bg-white/10"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-caption text-apple-gray-400 uppercase tracking-widest">
              Scroll
            </span>
            <div className="h-10 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
