import { theme } from "@/theme";
import { Box } from "@mui/material";

type Props = {
  src: string;
  alt?: string;
  top: number;
  left: number;
  width: number;
  height: number;
  zIndex?: number;
  overlay?: boolean; 
  radius?: number; 
};

const FRAME_W = 620;
const FRAME_H = 642;
const DEFAULT_RADIUS = 10; // px
const LAYER_INSET = 4; // px, overlay distance from the image edge

const pct = (v: number, total: number) => `${(v / total) * 100}%`;

// Overlay layer: bottom gradient + inset shadow, kept inside the image
const getOverlaySx = (radius: number) => ({
  boxShadow: theme.customShadows.card,
  "&::after": {
    content: '""',
    position: "absolute",
    inset: `${LAYER_INSET}px`,
    // concentric with the image corners (هیچ‌وقت منفی نمی‌شه)
    borderRadius: `${Math.max(radius - LAYER_INSET, 0)}px`,
    background: theme.gradients.imageOverlay[24],
    boxShadow: theme.customShadows.inset,
    pointerEvents: "none",
  },
});

export default function CollageImage({
  src,
  alt = "",
  top,
  left,
  width,
  height,
  zIndex = 0,
  overlay = false,
  radius = DEFAULT_RADIUS,
}: Props) {
  return (
    <Box
      sx={[
        {
          position: "absolute",
          insetBlockStart: pct(top, FRAME_H),
          insetInlineStart: pct(FRAME_W - left - width, FRAME_W), 
          width: pct(width, FRAME_W),
          height: pct(height, FRAME_H),
          zIndex,
          borderRadius: `${radius}px`, // single source of the radius
        },
        overlay && getOverlaySx(radius),
      ]}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
          borderRadius: "inherit",
        }}
      />
    </Box>
  );
}