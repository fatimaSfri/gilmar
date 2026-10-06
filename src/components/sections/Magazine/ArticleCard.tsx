"use client";

import Link from "next/link";
import { Box, Typography } from "@mui/material";

type Props = {
  href: string;
  src: string;
  title: string;
  description: string;
};

export default function ArticleCard({ href, src, title, description }: Props) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        width: "100%",
        maxWidth: 408,
        marginInline: "auto",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "408 / 482",
          overflow: "hidden",
          color: "common.white",
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={src}
          alt={title}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        />

        {/* Gradient */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "20px",
            background: (t) => t.gradients.imageOverlay[88],
          }}
        />

        {/* Text */}
        <Box
          sx={{
            position: "absolute",
            insetInline: 0,
            insetBlockEnd: 0,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            padding: 3,
          }}
        >
          <Typography
            sx={{ fontWeight: 800, fontSize: "16px", lineHeight: "100%", color: "common.white" }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "32px", color: "#FFFFFFB8" }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}