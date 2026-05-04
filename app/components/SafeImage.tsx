"use client";

import { useMemo, useState } from "react";

type Props = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src" | "onError" | "loading"
> & {
  src: string;
  fallbackSrc?: string;
};

function makeFallbackDataUrl(label: string) {
  const safe = label.replace(/</g, "").slice(0, 32);
  const svg = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#fbf7f0"/>
          <stop offset="1" stop-color="#efe6d9"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="800" rx="36" fill="url(#g)"/>
      <rect x="64" y="64" width="1072" height="672" rx="28" fill="none" stroke="#d7c8b5" stroke-width="4" opacity="0.7"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial"
        font-size="28" fill="#6a5a46" opacity="0.9">${safe}</text>
    </svg>
  `);
  return `data:image/svg+xml;charset=utf-8,${svg}`;
}

export default function SafeImage({
  src,
  fallbackSrc,
  alt,
  decoding = "async",
  ...rest
}: Props) {
  const [failed, setFailed] = useState(false);

  const computedFallback = useMemo(() => {
    if (fallbackSrc) return fallbackSrc;
    return makeFallbackDataUrl(alt || "NÜMA");
  }, [alt, fallbackSrc]);

  const finalSrc = failed ? computedFallback : src;

  return (
    <img
      {...rest}
      src={finalSrc}
      alt={alt}
      decoding={decoding}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

