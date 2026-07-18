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
        className="flex h-56 w-56 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-accent to-primary text-4xl font-heading font-semibold tracking-tight text-white shadow-xl ring-4 ring-card hover:scale-105 transition-all duration-300 sm:h-64 sm:w-64"
      >
        {initials}
      </div>
    );
  }

  return (
    <div className="relative h-56 w-56 transition-all duration-500 hover:scale-105 sm:h-64 sm:w-64">
      <Image
        src="/profile-photo.png"
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="(max-width: 640px) 224px, 256px"
        onError={() => setUsePlaceholder(true)}
      />
    </div>
  );
}
