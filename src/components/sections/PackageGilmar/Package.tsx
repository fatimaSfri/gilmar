"use client";

import { Box, Typography } from "@mui/material";

import PackageSlider, { type Slide } from "./PackageSlider";
import SectionContainer from "@/components/common/SectionContainer";
import CollageImage from "@/components/common/CollageImage";
import SectionTextBlock from "@/components/common/SectionTextBlock";
import IconBadge from "@/components/common/IconBadge";
import ActionButton from "@/components/common/ActionButton";

const SLIDES: Slide[] = [
  { src: "/images/package-a.png", alt: "توضیح عکس اول", caption: "تجربه اقامتی در دل طبیعت شمال" },
  { src: "/images/package-b.png", alt: "توضیح عکس دوم", caption: "تجربه اقامتی در دل طبیعت گیلان" },
  { src: "/images/package-c.png", alt: "توضیح عکس سوم", caption: "تجربه اقامتی در دل طبیعت مازندران" },
  { src: "/images/package-d.png", alt: "توضیح عکس چهارم", caption: "تجربه اقامتی در دل طبیعت رشت" },
];

const FEATURES = [
  { src: "/illustrations/camping-tent.png", alt: "boat", title: "1 شب اقامت" },
  { src: "/illustrations/coconut.png", alt: "coconut", title: "صبحانه" },
  { src: "/illustrations/boat.png", alt: "boat", title: "قایق‌سواری" },
  { src: "/illustrations/mountain.png", alt: "camping-tent", title: "تور جنگلی" },
];

export default function Package() {
  return (
    <SectionContainer
      maxWidth={1280}
      // TODO: background pattern from theme
      sx={{ paddingInline: 0 }}
      innerSx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        position: "relative",
      }}
    >
      {/* Text column (right in RTL) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "start" },
          paddingInlineStart: { xs: 2, md: "clamp(16px, 4.17vw, 60px)" }, // right
          paddingInlineEnd: { xs: 2, md: "clamp(16px, 2.78vw, 40px)" }, // to image
          paddingBlock: { xs: 6, md: 0 },
        }}
      >
        {/* Background pattern */}
        <Box
          sx={{
            width: "669.4px",
            height: "393.8px",
            position: "absolute",
            top: "-35.5px",
            left: "791.1px",
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

        <Box
          sx={{
            width: "100%",
            maxWidth: 620,
            display: "flex",
            flexDirection: "column",
            alignItems: "inherit",
            gap: "24px",
          }}
        >
          {/* Header */}
          <SectionTextBlock
            align="start"
            icon={<IconBadge icon="/icons/section/box-minimalistic.svg" />}
            title="پکیج‌های ویژه اقامت در گیلمار"
            description="پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات هیجان‌انگیز در دل طبیعت است."
          />

          {/* Package info */}
          <Box sx={{ borderBlockStart: "1px dashed #4C4C4D1F", paddingBlockStart: "24px", width: "100%" }}>
            <Typography sx={{ fontSize: "16px", fontWeight: 800, lineHeight: "32px" }}>
              پکیج رمانتیک دو نفره
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "32px",
                marginBlockStart: "2px",
                color: "text.secondary",
              }}
            >
              شامل یک شب اقامت، صبحانه، تور جنگلی و قایق‌سواری
            </Typography>
          </Box>

          {/* Feature cards: 4×116 + 3×52 = 620 */}
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, minmax(0, 116px))",
                md: "repeat(4, minmax(0, 116px))",
              },
              justifyContent: { xs: "center", md: "space-between" },
              gap: { xs: 3, md: 0 },
            }}
          >
            {FEATURES.map((f) => (
              <Box
                key={f.title}
                sx={{
                  aspectRatio: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  borderRadius: "12px",
                  boxShadow: (t) => t.customShadows.cardRing,
                }}
              >
                <Box component="img" src={f.src} sx={{ width: "40%", aspectRatio: "1" }} />
                <Typography variant="caption">{f.title}</Typography>
              </Box>
            ))}
          </Box>

          {/* Price and button */}
          <Box
            sx={{
              width: "100%",
              height: 46,
              marginBlockStart: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "16px", fontWeight: 800, lineHeight: "100%", color: "#43A047" }}>
              قیمت: ۲۳0۰۰۰۰ تومان
            </Typography>
            <ActionButton> همین حالا رزرو کن </ActionButton>
          </Box>
        </Box>
      </Box>

      {/* Image column (left in RTL) */}
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: 480, md: "none" },
          marginInline: { xs: "auto", md: 0 },
        }}
      >
        <PackageSlider slides={SLIDES} />
      </Box>
    </SectionContainer>
  );
}