import Box from "@mui/material/Box";

type MaskedImageProps = {
  src: string;
  mask: string;
  width?: number;
  height: number;
  alt: string;
  freeTop?: number;
  minHeight?: string;
};

export default function MaskedImage({
  src,
  mask,
  width,
  height,
  minHeight,
  alt,
  freeTop = 0,
}: MaskedImageProps) {
  const maskImage = `url(${mask}), linear-gradient(#000, #000)`;
  const maskSize = `100% 100%, 100% ${freeTop}%`

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      width={width}
      height={height}
      sx={{
        display: "block",
        width: width ?? "100%",
        maxWidth: "100%",
        height: "auto",
        aspectRatio: `${width} / ${height}`,
        objectFit: "cover",
        objectPosition: "center",
        minHeight,
        WebkitMaskImage: maskImage,
        maskImage,
        WebkitMaskSize: maskSize,
        maskSize,
        WebkitMaskPosition: "0 0, 0 0",
        maskPosition: "0 0, 0 0",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
    />
  );
}
