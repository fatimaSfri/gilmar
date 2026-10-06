"use client";
import { Box } from "@mui/material";

type Props = {
  icon: string; // icon path in the center; differs per section
  src?: string; // background image path
  label?: string;
};

const W = 84;
const H = 52;
const ICON_SIZE = 24; // guessed

export default function IconBadge({
  icon,
  src = "/icons/section/icons-container.png", // test
  label,
}: Props) {
  return (
    <Box
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      sx={{
        position: "relative",
        flexShrink: 0,
        width: W,
        height: H,
        overflow: "hidden",
        display: "grid",
        placeItems: "center", // icon exactly centered
        boxShadow: (t) => t.customShadows.ring4,
        borderRadius: "999px", // from theme
      }}
    >
      <Box
        component="img"
        src={src}
        alt=""
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "inherit", // fills the box edge to edge
          borderRadius: "inherit", // same shape as the badge, no gap to the ring
        }}
      />
      <Box
        component="img"
        src={icon}
        alt=""
        sx={{
          position: "relative", // above the background image
          width: ICON_SIZE,
          height: ICON_SIZE,
          objectFit: "contain",
        }}
      />
    </Box>
  );
}