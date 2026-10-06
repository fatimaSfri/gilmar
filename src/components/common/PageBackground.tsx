"use client";

import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const FRAME_W = 1440; // Figma page width

// Figma px -> viewport-relative (same proportions as the 1440 design)
const vw = (v: number) => `${(v / FRAME_W) * 100}vw`;

const MIN_SIZE = 320; // guessed: circle never gets smaller than this on mobile
const MIN_BLUR = 120; // guessed: blur never gets weaker than this on mobile

// Global decorative circles behind all sections.
// Data comes from the theme (theme.decor), positions are page-level.
export default function PageBackground() {
  const { size, color, blur, positions } = useTheme().decor.circle;

  return (
    <Box
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        overflow: "hidden", // circles bleed past the page edges
        pointerEvents: "none",
      }}
    >
      {positions.map((p) => (
        <Box
          key={`${p.top}-${p.left}`}
          sx={{
            position: "absolute",
            top: vw(p.top),
            left: vw(p.left), // physical left, matches Figma
            width: `max(${MIN_SIZE}px, ${vw(size)})`,
            aspectRatio: "1",
            borderRadius: "50%",
            backgroundColor: color,
            filter: `blur(max(${MIN_BLUR}px, ${vw(blur)}))`,
          }}
        />
      ))}
    </Box>
  );
}