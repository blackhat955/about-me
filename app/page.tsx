"use client";

import { useLenis } from "@/hooks/useLenis";
import Navigation from "@/components/Navigation";

import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import ProjectShowcase from "@/components/Projects/ProjectShowcase";
import SkillsMarquee from "@/components/Skills/SkillsMarquee";
import Timeline from "@/components/Timeline/Timeline";
import GitHubStats from "@/components/OpenSource/GitHubStats";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useLenis();

  return (
    <>
      <CustomCursor />

      <Navigation />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <ProjectShowcase />
        <div className="divider" />
        <SkillsMarquee />
        <div className="divider" />
        <Timeline />
        <div className="divider" />
        <GitHubStats />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
