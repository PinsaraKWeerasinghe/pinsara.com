"use client";

import Image from "next/image";
import { navLinks } from "@/data/profile";

interface SiteNavProps {
  activeSection?: string;
  scrollProgress?: number;
}

export function SiteNav({ activeSection, scrollProgress = 0 }: SiteNavProps) {
  // Interpolated animation values
  const opacity = scrollProgress;
  const translateX = -12 + scrollProgress * 12; // starts at -12px, slides into 0px
  const scale = 0.85 + scrollProgress * 0.15; // starts at 0.85, scales up to 1.0

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/60 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-3 relative min-h-[53px]">
        
        {/* Left: Sticky Mini Profile (Animated with scroll) */}
        <div
          style={{
            opacity: opacity,
            transform: `translateX(${translateX}px) scale(${scale})`,
            pointerEvents: scrollProgress > 0.5 ? "auto" : "none",
          }}
          className="absolute left-6 hidden md:flex items-center gap-3 transition-shadow duration-300"
        >
          <div className="relative h-7 w-7 overflow-hidden rounded-full border border-border/50 shadow-sm bg-[#dfdede]">
            <Image
              src="/profile-photo.png"
              alt="Pinsara Weerasinghe"
              fill
              className="object-cover"
              sizes="28px"
            />
          </div>
          <span className="font-heading text-sm font-bold text-foreground tracking-tight">
            Pinsara Weerasinghe
          </span>
        </div>

        {/* Center: Top Horizontal Menu */}
        <nav className="flex items-center gap-6" aria-label="Top sections">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-xs sm:text-sm font-semibold tracking-wide transition-colors py-1 ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-foreground/60 hover:text-foreground/90"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-primary to-accent" />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
