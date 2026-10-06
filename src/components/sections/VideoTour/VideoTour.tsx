import { Box } from "@mui/material";
import SectionContainer from "@/components/common/SectionContainer";
import MaskedImage from "@/components/common/MaskedImage";
import CollageImage from "@/components/common/CollageImage";
import SectionTextBlock from "@/components/common/SectionTextBlock";
import IconBadge from "@/components/common/IconBadge";
import ActionButton from "@/components/common/ActionButton";
import ImageOverlay from "./ImageOverlay";

// Side-by-side layout starts at 1280px
const DESKTOP = "@media (min-width:1280px)";

// Layout math (side-by-side mode)
const TEXT_WIDTH = 502;
const IMAGE_MAX = 914;
const IMAGE_HEIGHT = 690;
const MAX_OVERLAP = 136; // max px the text may tuck under the image

// Stacked mode
const STACKED_IMAGE_MAX = 800;

export default function VideoTour() {
  return (
    <SectionContainer
      sx={{ paddingInline: 0, position: "relative" }}
      // TODO: background pattern from theme
      innerSx={{
        maxWidth: "none",
        width: "auto",
        marginInline: { xs: 2, md: "80px" }, // left: 80
      }}
    >
      {/* Compass */}
      <Box
        sx={{
          width: "133.99px",
          height: "138.99px",
          position: "absolute",
          top: "584.27px",
          left: "653.27px",
          display: { xs: "none", md: "flex" },
        }}
      >
        <CollageImage
          src="/illustrations/compass.png"
          top={0}
          left={0}
          width={620}
          height={642}
          zIndex={1}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "minmax(1fr, 914px) ",
          alignItems: "center",
          rowGap: "20px",
          [DESKTOP]: {
            gridTemplateColumns: `minmax(0, 1fr) min(${IMAGE_MAX}px, calc(100% - ${TEXT_WIDTH - MAX_OVERLAP}px))`,
            height: IMAGE_HEIGHT,
          },
        }}
      >
        {/* Background pattern */}
        <Box
          sx={{
            width: "669.4px",
            height: "393.8px",
            position: "absolute",
            top: "93.9px",
            left: "711.1px",
            display: { xs: "none", md: "flex" },
          }}
        >
          <CollageImage
            src="/patterns/Squares.png"
            top={0}
            left={0}
            width={620}
            height={642}
            zIndex={1}
          />
        </Box>

        {/* Text */}
        <SectionTextBlock
          align="start"
          icon={<IconBadge icon="/icons/section/clapperboard-play.svg" />}
          title="تور ویدیویی اقامتگاه گیلمار"
          description="در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم اقامتگاه گیلمار را از نزدیک تماشا کنید و پیش از سفر، حال‌وهوای دلنشین آن را تجربه کنید."
          action={<ActionButton> اقامت در گیلمار</ActionButton>}
          sx={{
            maxWidth: "502px",
            minWidth: { md: "502px" },
          }}
        />

        {/* Image column (left in RTL) */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: STACKED_IMAGE_MAX,
            marginInlineStart: "auto",
            marginInlineEnd: 0,
            aspectRatio: "914 / 690",
            [DESKTOP]: {
              height: IMAGE_HEIGHT,
              maxWidth: "none",
              marginInlineStart: 0,
              aspectRatio: "auto",
            },

            // Fill the parent without touching MaskedImage
            "& > img": {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              maxWidth: "none",
              aspectRatio: "auto",
            },
          }}
        >
          <MaskedImage
            src="/images/step-section.png"
            mask="/masks/subtract.svg"
            alt="تور ویدیویی اقامتگاه"
            width={914}
            height={690}
          />
          <ImageOverlay level={64} mask="/masks/subtract.svg" />

          {/* Play button: outer translucent circle + inner white circle */}
          <Box
            sx={{
              position: "absolute",
              insetBlockStart: "50%",
              insetInlineStart: { xs: "45%", md: "70%" },
              transform: "translate(-50%, -50%)",
              width: { xs: 96, md: 120 },
              height: { xs: 96, md: 120 },
              padding: { xs: "16.8px", md: "21px" },
              borderRadius: "50%",
              bgcolor: "#FFFFFF4D",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: 62.5, md: 78.125 },
                height: { xs: 62.5, md: 78.125 },
                paddingBlockStart: { xs: "21.6px", md: "27px" },
                paddingBlockEnd: { xs: "20.8px", md: "26px" },
                paddingInlineStart: { xs: "20.8px", md: "26px" },
                paddingInlineEnd: { xs: "24px", md: "30px" },
                borderRadius: "50%",
                bgcolor: "common.white",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                "& > svg, & > img": {
                  width: "100%",
                  height: "100%",
                  display: "block",
                },
              }}
            >
              <Box component="img" src="/icons/ui/play.svg" alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
}