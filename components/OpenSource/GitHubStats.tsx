"use client";

import { useGSAP } from "@/hooks/useGSAP";
import { useInView } from "@/hooks/useInView";
import { motion } from "framer-motion";

const repos = [
  {
    name: "high-performance-search-engine",
    description: "Trie + HashMap search engine in C++ with fuzzy matching, multithreading, and in-memory caching",
    language: "C++",
    languageColor: "#659ad2",
    stars: 15,
    forks: 5,
  },
  {
    name: "kahana-vision-prototype",
    description: "GPU-centric rendering pipeline for visionOS with Metal, multi-threaded architecture targeting 90 FPS",
    language: "Swift",
    languageColor: "#f05138",
    stars: 12,
    forks: 3,
  },
  {
    name: "low-latency-trading-sim",
    description: "Lock-free event-driven trading simulator with ring buffers, atomic operations, and order book engine",
    language: "C++",
    languageColor: "#659ad2",
    stars: 28,
    forks: 8,
  },
];

export default function GitHubStats() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const containerRef = useGSAP(
    (gsap) => {
      gsap.fromTo(
        ".github-header",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#opensource",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".github-analytics",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".github-analytics-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".repo-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".repo-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    []
  );

  return (
    <section id="opensource" className="section-padding" ref={containerRef}>
      <div className="section-container">
        <div className="github-header mb-16">
          <span className="text-caption uppercase tracking-[0.2em] text-apple-swift mb-4 block">
            Open Source
          </span>
          <h2 className="text-display-lg mb-6">
            GitHub <span className="text-gradient-swift">Analytics</span>
          </h2>
          <p className="text-body-lg text-apple-gray-300 max-w-2xl">
            Contributing to the developer community through open-source
            projects and shared knowledge.
          </p>
        </div>

        {/* GitHub Stats + Top Languages */}
        <div ref={ref} className="github-analytics-section space-y-8 mb-16">
          <div className="github-analytics flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="rounded-2xl glass-strong p-3 overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats-eight-theta.vercel.app/api?username=blackhat955&show_icons=true&theme=algolia&include_all_commits=true&count_private=true&bg_color=0d1117&hide_border=true&title_color=F05138&icon_color=8DA4BF&text_color=d2d2d7&ring_color=F05138"
                alt="GitHub Stats"
                className="h-[180px] w-auto"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl glass-strong p-3 overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=blackhat955&layout=compact&langs_count=16&theme=algolia&bg_color=0d1117&hide_border=true&title_color=F05138&text_color=d2d2d7"
                alt="Top Languages"
                className="h-[180px] w-auto"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Activity Graph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="github-analytics rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=blackhat955&theme=tokyo-night&hide_border=true&area=true&bg_color=0d1117&color=d2d2d7&line=F05138&point=8DA4BF&area_color=F0513830"
              alt="GitHub Activity Graph"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>


        </div>

        {/* Pinned Repo cards */}
        <div className="mb-4">
          <span className="text-caption uppercase tracking-[0.2em] text-apple-metal mb-6 block">
            Pinned Repositories
          </span>
        </div>
        <div className="repo-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={`https://github.com/blackhat955/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="repo-card group rounded-2xl glass-strong p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40 block"
            >
              <div className="flex items-center gap-2 mb-3">
                <svg
                  className="h-4 w-4 text-apple-gray-400"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9z" />
                </svg>
                <span className="text-body-sm font-semibold text-apple-swift">
                  {repo.name}
                </span>
              </div>
              <p className="text-body-sm text-apple-gray-300 mb-4 line-clamp-3">
                {repo.description}
              </p>
              <div className="flex items-center gap-4 text-caption text-apple-gray-400">
                <span className="flex items-center gap-1">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                  </svg>
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                  </svg>
                  {repo.forks}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
