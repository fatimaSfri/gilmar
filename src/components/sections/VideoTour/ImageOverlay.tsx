"use client";

import { Box } from "@mui/material";

type OverlayLevel = 24 | 48 | 64 | 72 | 88;

interface ImageOverlayProps {
  level: OverlayLevel;
  mask?: string; // same mask file as the image underneath
}

export default function ImageOverlay({ level, mask }: ImageOverlayProps) {
  return (
    <Box
      aria-hidden
      sx={(t) => ({
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: t.gradients.imageOverlay[level],
        // Clip the overlay with the same mask so it never leaks outside the shape
        ...(mask
          ? {
              WebkitMaskImage: `url("${mask}")`,
              maskImage: `url("${mask}")`,
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }
          : {}),
      })}
    />
  );
}