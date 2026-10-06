"use client";

import Box from "@mui/material/Box";

type Props = {
  src: string;
  rotate: number; // deg
};


export default function RuleImageCard({ src, rotate }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 160,
        aspectRatio: "160 / 192",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Image: 128x160 */}
      <Box
        sx={{
          width: "80%", // 128 / 160
          height: "83.33%", // 160 / 192
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "24px",
          flexShrink: 0, 
          maxWidth: "none", 
          bgcolor: "common.white",
        boxShadow: (t) => t.customShadows.cardSoft, 
          transform: `rotate(${rotate}deg)`, 
        }}
      >
        <Box
          component="img"
          src={src}
          alt=""
          sx={{
            objectFit: "fill", // stretch to the exact box size
          }}
        />
      </Box>
    </Box>
  );
}