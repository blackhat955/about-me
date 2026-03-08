import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeInUp = (
  element: gsap.TweenTarget,
  trigger?: Element | string,
  delay = 0
) => {
  return gsap.fromTo(
    element,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: trigger
        ? {
            trigger,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          }
        : undefined,
    }
  );
};

export const staggerFadeInUp = (
  elements: gsap.TweenTarget,
  trigger: Element | string,
  stagger = 0.1
) => {
  return gsap.fromTo(
    elements,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start: "top 85%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const parallax = (
  element: gsap.TweenTarget,
  trigger: Element | string,
  yPercent = -20
) => {
  return gsap.to(element, {
    yPercent,
    ease: "none",
    scrollTrigger: {
      trigger,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
};

export const scaleReveal = (
  element: gsap.TweenTarget,
  trigger: Element | string
) => {
  return gsap.fromTo(
    element,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const horizontalSlide = (
  element: gsap.TweenTarget,
  trigger: Element | string,
  direction: "left" | "right" = "left"
) => {
  const x = direction === "left" ? -100 : 100;
  return gsap.fromTo(
    element,
    { x, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
};

export const textRevealByChar = (
  element: Element,
  trigger: Element | string
) => {
  const text = element.textContent || "";
  element.textContent = "";
  const chars = text.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    span.style.transform = "translateY(40px)";
    element.appendChild(span);
    return span;
  });

  return gsap.to(chars, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.02,
    ease: "power3.out",
    scrollTrigger: trigger
      ? {
          trigger,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      : undefined,
  });
};
