"use client";

import { useState } from "react";
import { Avatar, Box, ButtonBase, Typography } from "@mui/material";
import CollageImage from "@/components/common/CollageImage";

export type Review = {
  id: number;
  name: string;
  text: string;
  avatar: string;
};

const FRAME_W = 1169;
const FRAME_H = 604;
const BOX_W = 500;
const BOX_H = 264;
const AVATAR_GAP = 20; // main avatar -> card
const DOTS_COUNT = 5;
const DOTS_GAP = 24; // card -> dots

// Gradient band behind the slider
const BAND = { w: 1195.827392578125, h: 597.47998046875, top: 86, left: -13 };

// Mobile frame (test values)
const MOBILE_W = 360;
const MOBILE_H = 150;

const pct = (v: number, total: number) => `${(v / total) * 100}%`;

// slot 0 = main avatar, slot 1..7 = scattered avatars (Figma coords)
const SLOTS = [
  { size: 100, left: 534.5, top: 127 },
  { size: 60, left: 190, top: 128 },
  { size: 50, left: 218, top: 269 },
  { size: 60, left: 98, top: 348 },
  { size: 60, left: 231, top: 483 },
  { size: 60, left: 885, top: 204 },
  { size: 50, left: 1026, top: 288 },
  { size: 60, left: 943, top: 440 },
];

// Card top = main avatar bottom + gap
const BOX_TOP = SLOTS[0].top + SLOTS[0].size + AVATAR_GAP;

// Mobile coords (test)
const MOBILE_SLOTS = [
  { size: 56, left: 152, top: 94 },
  { size: 36, left: 16, top: 8 },
  { size: 28, left: 82, top: 30 },
  { size: 32, left: 28, top: 68 },
  { size: 36, left: 96, top: 76 },
  { size: 36, left: 308, top: 8 },
  { size: 28, left: 250, top: 30 },
  { size: 36, left: 284, top: 72 },
];

const SLOT_STYLES = SLOTS.map(({ size, left, top }) => ({
  width: pct(size, FRAME_W),
  insetInlineStart: pct(FRAME_W - left - size, FRAME_W), // RTL mirror
  insetBlockStart: pct(top, FRAME_H),
}));

const MOBILE_SLOT_STYLES = MOBILE_SLOTS.map(({ size, left, top }) => ({
  width: pct(size, MOBILE_W),
  insetInlineStart: pct(MOBILE_W - left - size, MOBILE_W),
  insetBlockStart: pct(top, MOBILE_H),
}));

// Shared text style of the card
const cardTextSx = { fontSize: "14px", lineHeight: "32px" } as const;

export default function ReviewsSlider({ reviews }: { reviews: Review[] }) {
  // order[slot] = review index currently in that slot
  const [order, setOrder] = useState(() => reviews.map((_, i) => i));
  const active = order[0];
  const current = reviews[active];

  const select = (index: number) =>
    setOrder((prev) => {
      const slot = prev.indexOf(index);
      if (slot <= 0) return prev;
      const next = [...prev];
      [next[0], next[slot]] = [next[slot], next[0]];
      return next;
    });

  return (
    <Box
      sx={{
        position: "relative",
        boxSizing: "border-box",
        width: "100%",
        aspectRatio: { md: `${FRAME_W} / ${FRAME_H}` },
        display: { xs: "flex", md: "block" },
        flexDirection: "column",
        alignItems: "center",
        paddingBlock: { xs: 4, md: 0 },
        paddingInline: { xs: 2, md: 0 },
      }}
    >
      {/* World map */}
      <Box
        sx={{
          width: "1169px",
          height: "604px",
          position: "absolute",
          top: "94px",
          left: "135.5px",
          display: { xs: "none", md: "flex" },
          zIndex: 0,
        }}
      >
        <CollageImage
          src="/patterns/world-map.svg"
          top={0}
          left={0}
          width={620}
          height={642}
          zIndex={1}
        />
      </Box>

      {/* Gradient band */}
      <Box
        aria-hidden
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(5px)",
          width: pct(BAND.w, FRAME_W),
          height: pct(BAND.h, FRAME_H),
          insetInlineStart: pct(FRAME_W - BAND.left - BAND.w, FRAME_W),
          insetBlockStart: pct(BAND.top, FRAME_H),
          backgroundImage: (t) => t.gradients.reviewsFade,
        }}
      />

      {/* Avatars */}
      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          inset: { md: 0 },
          width: { xs: "100%", md: "auto" },
          aspectRatio: { xs: `${MOBILE_W} / ${MOBILE_H}`, md: "auto" },
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {reviews.map((r, i) => {
          const slot = order.indexOf(i);
          const s = SLOT_STYLES[slot];
          const m = MOBILE_SLOT_STYLES[slot];
          return (
            <Avatar
              key={r.id}
              src={r.avatar}
              alt={r.name}
              sx={{
                position: "absolute",
                width: { xs: m.width, md: s.width },
                height: "auto",
                aspectRatio: "1",
                insetInlineStart: { xs: m.insetInlineStart, md: s.insetInlineStart },
                insetBlockStart: { xs: m.insetBlockStart, md: s.insetBlockStart },
                boxSizing: "border-box",
                border: "3px solid",
                borderColor: "common.white",
              }}
            />
          );
        })}
      </Box>

      {/* Card + dots */}
      <Box
        sx={{
          position: { xs: "relative", md: "absolute" },
          insetInline: { md: 0 },
          insetBlockStart: { md: pct(BOX_TOP, FRAME_H) },
          marginBlockStart: { xs: `${AVATAR_GAP}px`, md: 0 },
          width: { xs: "100%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: `${DOTS_GAP}px`,
        }}
      >
        {/* Review card */}
        <Box
          sx={{
            width: { xs: "100%", md: pct(BOX_W, FRAME_W) },
            maxWidth: BOX_W,
            aspectRatio: `${BOX_W} / ${BOX_H}`,
            marginInline: "auto",
            boxSizing: "border-box",
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "16px",
            boxShadow: (t) => t.customShadows.cardRing,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 2,
            padding: 3,
          }}
        >
          <Box component="img" src="/icons/section/qute.svg" />
          <Typography sx={{ ...cardTextSx, fontWeight: 600 }} aria-live="polite">
            {current.text}
          </Typography>
          <Box>
            <Typography sx={{ ...cardTextSx, fontWeight: 800 }}>{current.name}</Typography>
            <Typography sx={{ ...cardTextSx, fontWeight: 600 }}>مهمان</Typography>
          </Box>
        </Box>

        {/* Dots */}
        <Box sx={{ display: "flex", gap: 1 }}>
          {Array.from({ length: DOTS_COUNT }, (_, i) => (
            <ButtonBase
              key={i}
              disableRipple
              aria-label={`نظر ${i + 1}`}
              aria-current={i === active}
              onClick={() => select(i)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                bgcolor: i === active ? "primary.main" : "action.disabled",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}