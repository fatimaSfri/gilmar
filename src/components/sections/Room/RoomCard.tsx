"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type RoomData = {
  src?: string; // image path (omit while testing)
  alt: string;
  title: string;
  price: string;
};

export default function RoomCard({ src, alt, title, price }: RoomData) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: "1", // 302×302
        borderRadius: "20px",
        overflow: "hidden",
        bgcolor: "grey.400", // placeholder
        boxShadow: (t) => t.customShadows.card,
      }}
    >
      {/* Image */}
      {src && (
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
      )}

      {/* Overlay */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          background: (t) => t.gradients.imageOverlay[72],
          boxShadow: (t) => t.customShadows.inset,
          pointerEvents: "none",
        }}
      />

      {/* Text */}
      <Box
        sx={{
          position: "absolute",
          insetInlineStart: "5.298%", // 16 / 302
          insetBlockEnd: "5.298%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          textAlign: "start",
          color: "common.white",
        }}
      >
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "clamp(12px, 1.4vw, 16px)", // 16 on desktop
            lineHeight: 2,
            letterSpacing: 0,
            color: "inherit",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "clamp(10px, 1vw, 14px)", // 14 on desktop
            lineHeight: 32 / 14,
            letterSpacing: 0,
            color: "#FFFFFFCC",
          }}
        >
          {price}
        </Typography>
      </Box>
    </Box>
  );
}