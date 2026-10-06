"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

type SlideData = {
  src: string;
  alt: string;
  description: string; // text on the bottom gradient
};

const SLIDES: SlideData[] = [
  { src: "/images/boat.png", alt: "توضیح عکس ۲", description: "قایق سواری" },
  { src: "/images/photographer.png", alt: "توضیح عکس ۱", description: "پرنده نگری" },
  { src: "/images/cyclist.png", alt: "توضیح عکس ۳", description: "دوچرخه سواری" },
];

// Placeholder backgrounds while images load
const COLORS = ["grey.300", "grey.400", "grey.500", "grey.600", "grey.700"];

// Figma sizes; everything else is derived as percentages
const SLIDER = {
  w: 660,
  gap: 24,
  center: { w: 272, h: 346 },
  side: { w: 254, h: 304 },
};
const ARROW_OFFSET = -23;
const ARROW_SIZE = 46;
const SHADOW_ROOM = 96; // vertical room so the card shadow is not clipped
const pct = (v: number) => `${(v / SLIDER.w) * 100}%`;

type SlideProps = {
  index: number;
  variant: "center" | "side";
};

function Slide({ index, variant }: SlideProps) {
  const size = variant === "center" ? SLIDER.center : SLIDER.side;
  const { src, alt, description } = SLIDES[index];

  return (
    <Box
      sx={{
        position: "relative",
        flexShrink: 0,
        width: pct(size.w),
        aspectRatio: `${size.w} / ${size.h}`,
        borderRadius: "clamp(8px, 1.4vw, 20px)", // 20 on desktop
        overflow: "hidden",
        bgcolor: COLORS[index],
        boxShadow: (t) => t.customShadows.card,
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Overlay */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          background: (t) => t.gradients.imageOverlay[64],
          boxShadow: (t) => t.customShadows.inset,
          pointerEvents: "none",
        }}
      />

      {/* Caption */}
      <Box
        sx={{
          position: "absolute",
          insetInline: 0,
          insetBlockEnd: 0,
          padding: "clamp(4px, 1vw, 12px)",
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: "common.white", fontSize: "clamp(9px, 1.2vw, 12px)" }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default function AmenitiesSlider() {
  const [i, setI] = useState(0);
  const n = SLIDES.length;
  const next = (i + 1) % n;
  const prev = (i - 1 + n) % n;

  return (
    // No overflow here, so the arrow can stick out
    <Box sx={{ position: "relative", width: "100%" }}>
      {/* Slides (padding and negative margin cancel out, shadows get room) */}
      <Box
        sx={{
          width: "100%",
          paddingBlock: `${SHADOW_ROOM}px`,
          marginBlock: `-${SHADOW_ROOM}px`,
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start", // starts from the right (RTL)
            columnGap: pct(SLIDER.gap),
            width: "100%",
          }}
        >
          <Slide index={next} variant="side" />
          <Slide index={i} variant="center" />
          <Slide index={prev} variant="side" />
        </Box>
      </Box>

      {/* Next arrow */}
      <ButtonBase
        aria-label="اسلاید بعدی"
        onClick={() => setI(next)}
        sx={{
          position: "absolute",
          zIndex: 2,
          insetBlockStart: "50%",
          insetInlineStart: pct(ARROW_OFFSET), // negative = sticks out
          transform: "translateY(-50%)",
          minWidth: `max(28px, ${pct(ARROW_SIZE)})`,
          aspectRatio: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          background: (t) => t.gradients.primary,
          border: (t) => `3px solid ${t.palette.background.default}`,
        }}
      >
        <Box
          component="img"
          src="/icons/ui/circle-arrow.png"
          alt=""
          sx={{ objectFit: "contain", display: "block", paddingTop: "5px" }}
        />
      </ButtonBase>
    </Box>
  );
}