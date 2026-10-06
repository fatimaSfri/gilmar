import { Box } from "@mui/material";
import { ReactNode } from "react";

type BlurredImageProps = {
  src: string;
  blur: string;
  children: ReactNode;

  inset?: string;
  transform?: string;
  mask?: string;
};

const BlurredImage = ({
  src,
  blur,
  children,
  inset = "0",
  transform = "none",
  mask,
}: BlurredImageProps) => {
  return (
    <>
      {/* Back layer: blurred copy */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          zIndex: 0,
          inset,
          transform,
          filter: `blur(${blur})`,
          pointerEvents: "none",
        }}
      >
        <Box
          component="img"
          src={src}
          alt=""
          sx={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",

            ...(mask && {
              WebkitMaskImage: `url(${mask})`,
              maskImage: `url(${mask})`,
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }),
          }}
        />
      </Box>

      {/* Front layer */}
      {children}
    </>
  );
};

export default BlurredImage;