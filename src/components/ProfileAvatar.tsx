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
        className="flex h-44 w-44 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-accent to-primary text-4xl font-serif font-semibold tracking-tight text-white shadow-xl ring-4 ring-white/80 sm:h-48 sm:w-48"
      >
        {initials}
      </div>
    );
  }

  return (
    <div className="relative h-44 w-44 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white/80 sm:h-48 sm:w-48">
      <Image
        src="/profile.jpg"
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
