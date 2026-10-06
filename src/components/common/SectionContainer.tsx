import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  sx?: SxProps<Theme>;
  innerSx?: SxProps<Theme>;
  maxWidth?: number; 
};

export default function SectionContainer({ children, sx, innerSx, maxWidth = 1280 }: Props) {

  
  return (
    <Box component="section" sx={[ ...(Array.isArray(sx) ? sx : [sx])]}>
      <Box
        sx={[
          { width: "100%", maxWidth, marginInline: "auto" },
          ...(Array.isArray(innerSx) ? innerSx : [innerSx]),
        ]}
      >
        {children}
      </Box>
    </Box>
  );
}