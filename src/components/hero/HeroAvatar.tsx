"use client";

import React, { useState } from "react";
import Image from "next/image";

interface HeroAvatarProps {
  name?: string;
  src?: string;
  size?: number;
}

export function HeroAvatar({
  name = "Anurag Verma",
  src = "/avatar.jpg",
  size = 56,
}: HeroAvatarProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className="relative rounded-full p-[2px] bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl shrink-0"
      style={{ width: size + 4, height: size + 4 }}
    >
      <div className="relative w-full h-full rounded-full overflow-hidden bg-[#161616] flex items-center justify-center border border-white/10">
        {!imgError ? (
          <Image
            src={src}
            alt={name}
            width={size}
            height={size}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-black flex items-center justify-center relative">
            {/* Subtle backdrop glow */}
            <div className="absolute inset-0 bg-[#e95810]/15 rounded-full blur-xs" />
            {/* Monogram */}
            <span className="relative z-10 font-sans font-bold text-sm tracking-wider text-white">
              AV
            </span>
          </div>
        )}
      </div>

      {/* Subtle outer glow ring */}
      <div className="absolute -inset-1 rounded-full bg-[#e95810]/15 -z-10 blur-sm pointer-events-none" />
    </div>
  );
}
