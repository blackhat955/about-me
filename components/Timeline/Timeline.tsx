"use client";

import { useGSAP } from "@/hooks/useGSAP";

const milestones = [
  {
    year: "Jun 2025 — Present",
    title: "Software Engineer",
    company: "Kahana, Chicago, USA",
    description:
      "Building a GPU-centric rendering pipeline for visionOS achieving 90+ FPS. Developing SwiftUI + Combine reactive views with MVVM, integrating AVFoundation with NWPathMonitor for resilient voice commands, and implementing secure session management with Keychain and CloudKit.",
    tags: ["Swift", "C++", "Metal", "SwiftUI", "visionOS"],
    color: "bg-apple-swift",
  },
  {
    year: "Aug 2024 — May 2025",
    title: "Head Teaching Assistant",
    company: "Indiana University Bloomington, USA",
    description:
      "Mentored 100+ graduate students in iOS development, guiding them through SwiftUI, UIKit, and MVVM architecture. Reduced student error rates by 15% through hands-on debugging and troubleshooting support.",
    tags: ["iOS", "Teaching", "SwiftUI", "UIKit"],
    color: "bg-apple-purple",
  },
  {
    year: "Mar 2022 — Aug 2023",
    title: "Software Engineer",
    company: "Programmers Army, Mumbai, India",
    description:
      "Built a Trie and HashMap-based search engine reducing search time by 40% and memory usage by 30%. Developed multi-threaded programs with shared_ptr, mutex locks, and condition variables. Automated GDB and Valgrind workflows improving throughput by 20%.",
    tags: ["C++", "Node.js", "Multithreading", "Linux"],
    color: "bg-apple-green",
  },
  {
    year: "Aug 2023 — May 2025",
    title: "M.S. in Data Science",
    company: "Indiana University Bloomington",
    description:
      "GPA: 3.6/4.0. Coursework in Applied Algorithms, Software Engineering, Cloud Computing, Applied Machine Learning, and Computer Vision.",
    tags: ["Algorithms", "ML", "Cloud", "Computer Vision"],
    color: "bg-apple-teal",
  },
  {
    year: "Aug 2018 — May 2022",
    title: "B.E. in Information Technology",
    company: "University of Mumbai, India",
    description:
      "GPA: 9.3/10.0. Coursework in Object-Oriented Programming, Computer Networks, Operating Systems, and Statistics.",
    tags: ["OOP", "Networks", "OS", "Statistics"],
    color: "bg-apple-orange",
  },
];

export default function Timeline() {
  const containerRef = useGSAP(
    (gsap) => {
      gsap.fromTo(
        ".timeline-header",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#timeline",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-items",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".timeline-item",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-items",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    []
  );

  return (
    <section id="timeline" className="section-padding" ref={containerRef}>
      <div className="section-container">
        <div className="timeline-header mb-20">
          <span className="text-caption uppercase tracking-[0.2em] text-apple-swift mb-4 block">
            Experience
          </span>
          <h2 className="text-display-lg mb-6">
            My <span className="text-gradient-journey">Journey</span>
          </h2>
          <p className="text-body-lg text-apple-gray-300 max-w-2xl">
            From Mumbai to Bloomington to Chicago — building systems
            that prioritize performance and user experience.
          </p>
        </div>

        <div className="timeline-items relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <div
              className="timeline-line h-full w-full bg-gradient-to-b from-apple-swift via-apple-metal to-apple-titanium origin-top"
            />
          </div>

          {milestones.map((milestone, i) => (
            <div
              key={milestone.year}
              className={`timeline-item relative flex items-start gap-8 mb-16 last:mb-0 ${
                i % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <div
                  className={`h-3 w-3 rounded-full ${milestone.color} ring-4 ring-black`}
                />
              </div>

              {/* Card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="rounded-2xl glass-strong p-6">
                  <span className="text-caption text-apple-gray-400 mb-2 block">
                    {milestone.year}
                  </span>
                  <h3 className="text-body-lg font-semibold mb-1">
                    {milestone.title}
                  </h3>
                  <span className="text-body-sm text-apple-swift mb-3 block">
                    {milestone.company}
                  </span>
                  <p className="text-body-sm text-apple-gray-300 mb-4 leading-relaxed">
                    {milestone.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {milestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-caption text-apple-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
