"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-body-sm text-apple-gray-400">
          &copy; {new Date().getFullYear()} Durgesh Tiwari. All rights reserved.
        </div>
        <div className="text-caption text-apple-gray-500">
          Built with Next.js, GSAP & Three.js
        </div>
      </div>
    </footer>
  );
}
