import Box from "@mui/material/Box";
import AmenitiesSlider from "./AmenitiesSlider";
import SectionTextBlock from "@/components/common/SectionTextBlock";
import IconBadge from "@/components/common/IconBadge";
import CollageImage from "@/components/common/CollageImage";

const TEXT_W = 660;
const SLIDER_W = 660;

// Pattern (Figma, 1440 frame)
const PATTERN = { w: 669.4, h: 393.8, top: -18.5, left: 791.1 };
const vw = (v: number) => `${(v / 1440) * 100}vw`;

export default function Amenities() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflowX: "clip",
        paddingInlineStart: "clamp(1px, 5.55vw, 80px)", // right: 80 on desktop
        paddingInlineEnd: 0, // left: image goes to the page edge
        paddingBlockEnd: { xs: 4, md: 0 },
      }}
    >
      {/* Background pattern */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          zIndex: 0,
          top: vw(PATTERN.top),
          left: vw(PATTERN.left), // physical left, matches Figma
          width: vw(PATTERN.w),
          height: vw(PATTERN.h),
          pointerEvents: "none",
        }}
      >
        <CollageImage
          src="/patterns/Squares.png"
          top={0}
          left={0}
          width={620}
          height={642}
          zIndex={0}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: `${TEXT_W}fr ${SLIDER_W}fr` },
          columnGap: "clamp(16px, 2.78vw, 40px)",
          rowGap: 3,
          alignItems: "center",
        }}
      >
        {/* Text */}
        <SectionTextBlock
          align="start"
          icon={<IconBadge icon="/icons/section/magic-stick.svg" />}
          title="خدمات رفاهی گیلمار برای اقامتی دلنشین"
          description="در گیلمار، آرامش طبیعت را در کنار خدمات رفاهی کامل تجربه می‌کنید؛ فضایی دنج و صمیمی که برای ساختن لحظاتی آرام، خوش و به‌یادماندنی آماده شده است."
          sx={{ marginInlineStart: { xs: "-20px", lg: 0 } }}
        />
        <AmenitiesSlider />
      </Box>
    </Box>
  );
}