"use client";

import { useEffect, useState } from "react";
import { Box, ButtonBase } from "@mui/material";
import MaskedImage from "@/components/common/MaskedImage";

export type Slide = { src: string; alt: string; caption: string };

// Must match the width/height/viewBox of the mask svg
const SHAPE_W = 620;
const SHAPE_H = 815;
const INTERVAL_MS = 10000;

// Slider bars (relative to the shape)
const BAR_BOX_W = 320;
const BAR_LEFT = 29;
const BAR_BOTTOM = 20;

// Image caption box
const CAP_W = 137;
const CAP_TOP = 89.5;
const CAP_LEFT = 1;
const CAP_FONT = 14;

const pct = (v: number, total: number) => `${(v / total) * 100}%`;

export default function PackageSlider({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);

  // Autoplay, restarts on every change
  useEffect(() => {
    const id = setTimeout(
      () => setActive((a) => (a + 1) % slides.length),
      INTERVAL_MS
    );
    return () => clearTimeout(id);
  }, [active, slides.length]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: SHAPE_W,
        marginInlineStart: "auto",
        aspectRatio: `${SHAPE_W} / ${SHAPE_H}`,
        containerType: "inline-size", // for cqw font size
      }}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <Box
          key={slide.src}
          aria-hidden={i !== active}
          sx={{
            position: "absolute",
            inset: 0,
            opacity: i === active ? 1 : 0,
            transition: "opacity 3s ease",

            // Fill the parent without touching MaskedImage
            "& > img": {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              maxWidth: "none",
              aspectRatio: "auto",
            },
          }}
        >
          <MaskedImage
            src={slide.src}
            mask="/masks/squares-mask.svg"
            alt={slide.alt}
            width={SHAPE_W}
            height={SHAPE_H}
          />

          {/* Caption */}
          <Box
            sx={{
              position: "absolute",
              insetInlineEnd: pct(CAP_LEFT, SHAPE_W),
              insetBlockStart: pct(CAP_TOP, SHAPE_H),
              width: pct(CAP_W, SHAPE_W),
              boxSizing: "border-box",
              overflow: "hidden",
              color: "text.primary",
              fontSize: `${(CAP_FONT / SHAPE_W) * 100}cqw`,
              lineHeight: "32px",
              textAlign: "start",
              fontWeight: "600",
            }}
          >
            <Box
              component="p"
              sx={{
                margin: 0,
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                overflow: "hidden",
              }}
            >
              {slide.caption}
            </Box>
          </Box>
        </Box>
      ))}

      {/* Slider bars */}
      <Box
        sx={{
          position: "absolute",
          insetInlineEnd: pct(BAR_LEFT, SHAPE_W),
          insetBlockEnd: pct(BAR_BOTTOM, SHAPE_H),
          width: pct(BAR_BOX_W, SHAPE_W),
          height: 6,
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: `repeat(${slides.length}, 1fr)`,
          columnGap: "5%",
        }}
      >
        {slides.map((slide, i) => (
          <ButtonBase
            key={slide.src}
            disableRipple
            aria-label={`تصویر ${i + 1}`}
            aria-current={i === active}
            onClick={() => setActive(i)}
            sx={{
              position: "relative",
              height: 6,
              borderRadius: 3,
              bgcolor: "common.white",
              opacity: i === active ? 1 : 0.5,
              transition: "opacity 300ms ease",
              "&::before": {
                content: '""',
                position: "absolute",
                insetInline: 0,
                insetBlock: -8,
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}