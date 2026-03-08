"use client";

import { useGSAP } from "@/hooks/useGSAP";

const skillRows = [
  [
    { name: "Swift", color: "border-[#F05138]/30 text-[#F05138]" },
    { name: "SwiftUI", color: "border-[#F05138]/25 text-[#FF6F47]" },
    { name: "UIKit", color: "border-[#8DA4BF]/30 text-[#8DA4BF]" },
    { name: "C++", color: "border-[#8DA4BF]/25 text-[#A8B2C1]" },
    { name: "Metal", color: "border-[#B8C5D6]/30 text-[#B8C5D6]" },
    { name: "Python", color: "border-[#A8B2C1]/25 text-[#A8B2C1]" },
    { name: "Combine", color: "border-[#F05138]/20 text-[#F05138]" },
    { name: "CoreData", color: "border-[#8DA4BF]/20 text-[#8DA4BF]" },
  ],
  [
    { name: "MVVM", color: "border-[#A8B2C1]/25 text-[#A8B2C1]" },
    { name: "ARKit", color: "border-[#F05138]/20 text-[#FF6F47]" },
    { name: "RealityKit", color: "border-[#F05138]/20 text-[#FF6F47]" },
    { name: "PostgreSQL", color: "border-[#6B7B8D]/30 text-[#8DA4BF]" },
    { name: "MongoDB", color: "border-[#6B7B8D]/25 text-[#A8B2C1]" },
    { name: "Docker", color: "border-[#8DA4BF]/25 text-[#8DA4BF]" },
    { name: "AWS", color: "border-[#F05138]/20 text-[#F05138]" },
    { name: "Kubernetes", color: "border-[#8DA4BF]/20 text-[#B8C5D6]" },
  ],
];

export default function SkillsMarquee() {
  const containerRef = useGSAP(
    (gsap) => {
      gsap.fromTo(
        ".skills-header",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#skills",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    []
  );

  return (
    <section id="skills" className="section-padding overflow-hidden" ref={containerRef}>
      <div className="section-container mb-16">
        <div className="skills-header">
          <span className="text-caption uppercase tracking-[0.2em] text-apple-swift mb-4 block">
            Skills
          </span>
          <h2 className="text-display-lg mb-6">
            Technologies I{" "}
            <span className="text-gradient-metal">Work With</span>
          </h2>
          <p className="text-body-lg text-apple-gray-300 max-w-2xl">
            From low-level systems programming to modern UI frameworks —
            tools I use to build performant, reliable software.
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-6">
        {skillRows.map((row, rowIndex) => (
          <div key={rowIndex} className="relative overflow-hidden py-2">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

            <div
              className={`flex gap-4 ${
                rowIndex % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"
              }`}
              style={{ width: "fit-content" }}
            >
              {/* Duplicate for seamless loop */}
              {[...row, ...row].map((skill, i) => (
                <div
                  key={`${skill.name}-${i}`}
                  className={`flex-shrink-0 rounded-full border px-6 py-3 text-body-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-white/5 ${skill.color}`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skill categories */}
      <div className="section-container mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "iOS & Mobile",
              description:
                "SwiftUI, UIKit, Combine, CoreData, AVFoundation, CloudKit, ARKit, RealityKit, Auto Layout",
              gradient: "from-apple-swift/10 to-transparent",
            },
            {
              title: "Systems & Performance",
              description:
                "C++ (14/17/20), STL, Metal, CUDA, Multithreading, Smart Pointers, GDB, Valgrind",
              gradient: "from-apple-metal/10 to-transparent",
            },
            {
              title: "Infrastructure & Tools",
              description:
                "Docker, Kubernetes, AWS (S3, Lambda, CloudFront), CI/CD, Git, Linux, RabbitMQ",
              gradient: "from-apple-titanium/10 to-transparent",
            },
          ].map((cat) => (
            <div
              key={cat.title}
              className={`rounded-2xl glass-strong bg-gradient-to-b ${cat.gradient} p-6`}
            >
              <h3 className="text-body-lg font-semibold mb-3">{cat.title}</h3>
              <p className="text-body-sm text-apple-gray-300">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
