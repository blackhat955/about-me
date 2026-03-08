"use client";

import { useGSAP } from "@/hooks/useGSAP";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureListProps {
  features: Feature[];
  triggerId: string;
}

export default function FeatureList({ features, triggerId }: FeatureListProps) {
  const containerRef = useGSAP(
    (gsap) => {
      gsap.fromTo(
        `.feature-item-${triggerId}`,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `#${triggerId}`,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    []
  );

  return (
    <div ref={containerRef} id={triggerId} className="space-y-4">
      {features.map((feature, i) => (
        <div
          key={feature.title}
          className={`feature-item-${triggerId} flex items-start gap-4 rounded-xl glass-strong p-4 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]`}
        >
          <span className="text-body-sm font-mono text-apple-gray-400 mt-0.5 shrink-0">{feature.icon}</span>
          <div>
            <h4 className="text-body-sm font-medium text-white">
              {feature.title}
            </h4>
            <p className="text-caption text-apple-gray-400 mt-1">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
