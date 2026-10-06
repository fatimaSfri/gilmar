"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { theme } from "@/theme";

type Props = {
  children: ReactNode;
  icon?: string; // icon path inside the circle
  iconSize?: number | string; // icon size inside the circle
  href?: string; // renders a link when set, otherwise a button
  type?: "button" | "submit";
  onClick?: () => void;
  fontWeight?: number;
  sx?: SxProps<Theme>;
};

const MIN_H = 46;
const PAD = 6;
const CIRCLE = 34;
const GAP = 16;
const TEXT_PAD = 20;
const TEXT_NUDGE = "2px"; // optical vertical centering of the label (guessed)
const PILL_RADIUS = "999px";

const BG = theme.gradients.button;

// Circle fill with gradient border
const CIRCLE_BG = `linear-gradient(${theme.palette.custom.surfaceMuted}, ${theme.palette.custom.surfaceMuted}) padding-box, ${theme.gradients.iconCircleBorder} border-box`;

export default function ActionButton({
  children,
  icon = "/icons/ui/arrow-icon.svg",
  iconSize = "20px",
  href,
  type = "button",
  onClick,
  fontWeight = 700,
  sx,
}: Props) {
  const body = (
    <Box
      component={href ? "span" : "button"}
      type={href ? undefined : type}
      onClick={href ? undefined : onClick}
      sx={[
        {
          boxSizing: "border-box",
          display: "inline-flex",
          alignItems: "center",
          gap: `${GAP}px`,
          minHeight: MIN_H,
          padding: `${PAD}px`,
          paddingInlineStart: `${TEXT_PAD}px`,
          border: 0,
          borderRadius: PILL_RADIUS,
          background: BG,
          ...theme.typography.buttonLabel,
          fontWeight,
          whiteSpace: "nowrap",
          cursor: "pointer",
          boxShadow: (t) => t.customShadows.button,
          "&:focus-visible": {
            outline: `2px solid ${theme.palette.text.primary}`,
            outlineOffset: 2,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <span style={{ paddingBlockStart: TEXT_NUDGE }}>{children}</span>

      {/* Icon circle */}
      <Box
        component="span"
        sx={{
          boxSizing: "border-box",
          flexShrink: 0,
          width: CIRCLE,
          height: CIRCLE,
          borderRadius: "50%",
          border: "1.2px solid transparent",
          background: CIRCLE_BG,
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          component="img"
          src={icon}
          alt=""
          sx={{ width: iconSize, height: iconSize, objectFit: "contain" }}
        />
      </Box>
    </Box>
  );

  return href ? (
    <Link
      href={href}
      style={{ display: "inline-block", textDecoration: "none", borderRadius: PILL_RADIUS }}
    >
      {body}
    </Link>
  ) : (
    body
  );
}