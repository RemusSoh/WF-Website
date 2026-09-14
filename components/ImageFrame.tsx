"use client";

import { useState } from "react";
import Image from "next/image";

type ImageFrameProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function ImageFrame({
  src,
  alt,
  label,
  className = "",
  imageClassName = "object-cover",
  priority = false,
}: ImageFrameProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-[#123c5a] ${className}`}
    >
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          preload={priority}
          quality={75}
          className={imageClassName}
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <div className="absolute inset-0 bg-[#123c5a]">
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="absolute inset-x-5 bottom-5 border border-white/15 bg-[#061827]/80 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f0a45f]">
              Image Placeholder
            </p>
            <p className="mt-2 text-sm leading-6 text-white/76">{label}</p>
          </div>
        </div>
      )}
    </div>
  );
}
