"use client";

import { useGSAP } from "@/hooks/useGSAP";
import DeviceMockup from "./DeviceMockup";
import FeatureList from "./FeatureList";

const projects = [
  {
    id: "project-1",
    title: "Kahana Vision Browser",
    subtitle: "Software Engineer — Kahana",
    description:
      "A high-performance spatial interaction engine for visionOS. Built a GPU-centric, multi-threaded rendering pipeline achieving sustained 90+ FPS with Metal, processing ML inference asynchronously while maintaining smooth frame pacing.",
    tech: ["Swift", "C++", "Metal", "Obj-C++", "ONNX Runtime", "SwiftUI"],
    gradient: "from-[#2a1510] via-[#1f1815] to-[#1a1210]",
    accentColor: "text-apple-swift",
    device: "desktop" as const,
    features: [
      { icon: "//", title: "90 FPS Rendering", description: "GPU-centric pipeline with Metal command buffers and tile-based rendering" },
      { icon: "//", title: "Multi-Threaded Architecture", description: "Lock-free input, asset, inference, and render threads with snapshot model" },
      { icon: "//", title: "AI Voice Assistant", description: "Command processing with NWPathMonitor for network resilience" },
      { icon: "//", title: "35% Frame Time Reduction", description: "Moved scroll math to vertex shader, reduced CPU uniform updates" },
    ],
    link: "#",
  },
  {
    id: "project-2",
    title: "High-Performance Search Engine",
    subtitle: "Software Engineer — Programmers Army",
    description:
      "Built a C++ middleware search engine using Trie and HashMap-based architecture with fuzzy matching (typo tolerance up to 4 characters). Reduced search time by 40% and memory usage by 30% under heavy traffic.",
    tech: ["C++", "STL", "Multithreading", "Node.js", "GDB", "Valgrind"],
    gradient: "from-[#161b22] via-[#1a2028] to-[#0f1318]",
    accentColor: "text-apple-metal",
    device: "desktop" as const,
    features: [
      { icon: "//", title: "Trie + HashMap Architecture", description: "Prefix matching with constant-time cached lookups" },
      { icon: "//", title: "Fuzzy Matching", description: "Levenshtein distance for typo tolerance up to 4 characters" },
      { icon: "//", title: "Thread-Safe Concurrency", description: "Mutex locks, condition variables, shared_ptr for parallel reads" },
      { icon: "//", title: "Automated Memory Audits", description: "GDB and Valgrind workflows for runtime memory inspection" },
    ],
    link: "#",
  },
  {
    id: "project-3",
    title: "Low-Latency Trading Simulator",
    subtitle: "Systems Project",
    description:
      "An event-driven trading simulator in C++ on Linux with lock-free ring buffers, in-memory order book with price-time priority matching, and microsecond-level latency optimization.",
    tech: ["C++", "Linux", "Atomics", "perf", "Valgrind", "GDB"],
    gradient: "from-[#1a1a20] via-[#1e1e28] to-[#14141a]",
    accentColor: "text-apple-silver",
    device: "desktop" as const,
    features: [
      { icon: "//", title: "Lock-Free Architecture", description: "Ring buffers with atomic operations, zero mutex contention" },
      { icon: "//", title: "Order Book Engine", description: "Price-time priority matching with deterministic execution" },
      { icon: "//", title: "Cache-Optimized Hot Paths", description: "Pre-allocated buffers, cache-line aligned data layout" },
      { icon: "//", title: "Sub-11ms Frame Budget", description: "Profiled with Linux perf for CPU hotspots and branch mispredictions" },
    ],
    link: "#",
  },
  {
    id: "project-4",
    title: "Motion Estimation Pipeline",
    subtitle: "Computer Vision Project",
    description:
      "Frame-to-frame motion estimation using block matching with SAD, CUDA-accelerated GPU kernels, and exponential temporal smoothing for stable real-time optical flow.",
    tech: ["C++", "CUDA", "Image Processing", "GPU Computing"],
    gradient: "from-[#22180f] via-[#1e1610] to-[#18120c]",
    accentColor: "text-apple-swift",
    device: "desktop" as const,
    features: [
      { icon: "//", title: "Block Matching + SAD", description: "16x16 block search with Sum of Absolute Differences" },
      { icon: "//", title: "CUDA Acceleration", description: "One GPU thread per block for parallel motion vector computation" },
      { icon: "//", title: "Temporal Filtering", description: "EMA smoothing with threshold-based gating for noise rejection" },
      { icon: "//", title: "Real-Time Optical Flow", description: "Stable motion field output for camera and object tracking" },
    ],
    link: "#",
  },
  {
    id: "project-5",
    title: "Catalog App",
    subtitle: "iOS Application",
    description:
      "An iOS catalog app integrating UIKit components into SwiftUI via UIViewRepresentable, with CoreData for offline-first persistence of products, favorites, and cart state across sessions.",
    tech: ["SwiftUI", "UIKit", "CoreData", "Combine", "MVVM"],
    gradient: "from-[#18191e] via-[#1c1e24] to-[#121316]",
    accentColor: "text-apple-metal",
    device: "mobile" as const,
    features: [
      { icon: "//", title: "UIKit + SwiftUI Bridge", description: "Custom UIViewRepresentable for dynamic tiles and navigation" },
      { icon: "//", title: "CoreData Persistence", description: "Offline-first storage syncing favorites and cart across launches" },
      { icon: "//", title: "Reusable PersistenceManager", description: "Centralized data layer for consistent access patterns" },
      { icon: "//", title: "Tab Navigation + Search", description: "Dynamic filters and tab-based browsing experience" },
    ],
    link: "#",
  },
];

export default function ProjectShowcase() {
  const containerRef = useGSAP(
    (gsap) => {
      projects.forEach((project) => {
        gsap.fromTo(
          `.${project.id}-content`,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: `#${project.id}`,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          `.${project.id}-device`,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: `#${project.id}`,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    []
  );

  return (
    <section id="projects" className="section-padding" ref={containerRef}>
      <div className="section-container">
        <div className="mb-4">
          <span className="text-caption uppercase tracking-[0.2em] text-apple-swift">
            Projects
          </span>
        </div>
        <h2 className="text-display-lg mb-6">
          Selected <span className="text-gradient-swift">Work</span>
        </h2>
        <p className="text-body-lg text-apple-gray-300 max-w-2xl mb-20">
          From GPU rendering pipelines to high-performance search engines —
          systems built for speed, stability, and scale.
        </p>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={project.id}
              className={`flex flex-col gap-12 lg:gap-20 ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              } items-center`}
            >
              {/* Content */}
              <div className={`${project.id}-content flex-1 space-y-6`}>
                <span
                  className={`text-caption uppercase tracking-[0.15em] ${project.accentColor}`}
                >
                  {project.subtitle}
                </span>
                <h3 className="text-display-sm">{project.title}</h3>
                <p className="text-body-md text-apple-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-caption text-apple-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <FeatureList
                  features={project.features}
                  triggerId={`features-${project.id}`}
                />
              </div>

              {/* Device mockup */}
              <div className={`${project.id}-device flex-1`}>
                <DeviceMockup
                  type={project.device}
                  gradient={project.gradient}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
