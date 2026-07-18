"use client";

import Image from "next/image";
import { useState } from "react";

type ProfileAvatarProps = {
  alt: string;
  initials: string;
};

export function ProfileAvatar({ alt, initials }: ProfileAvatarProps) {
  const [usePlaceholder, setUsePlaceholder] = useState(false);

  if (usePlaceholder) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="flex h-44 w-44 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-accent to-primary text-4xl font-heading font-semibold tracking-tight text-white shadow-xl ring-4 ring-card hover:scale-105 transition-all duration-300 sm:h-48 sm:w-48"
      >
        {initials}
      </div>
    );
  }

  return (
    <div className="relative h-44 w-44 overflow-hidden rounded-2xl shadow-2xl ring-4 ring-card transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-primary/30 sm:h-48 sm:w-48">
      <Image
        src="/profile-photo.png"
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 640px) 176px, 192px"
        onError={() => setUsePlaceholder(true)}
      />
    </div>
  );
}
