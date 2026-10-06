import { Box } from "@mui/material";

import FaqList, { type FaqItem } from "./FaqList";
import SectionContainer from "@/components/common/SectionContainer";
import SectionTextBlock from "@/components/common/SectionTextBlock";
import IconBadge from "@/components/common/IconBadge";
import BlurredImage from "@/components/common/BlurredImage";
import CollageImage from "@/components/common/CollageImage";

const ITEMS: FaqItem[] = Array.from({ length: 5 }, () => ({
  question: "امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!",
  answer:
    "در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر، قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.",
}));

export default function Faq() {
  return (
    <SectionContainer
      // TODO: background pattern from theme
      innerSx={{
        display: "grid",
        gridTemplateColumns: { xs: "0.9fr", md: "0.95fr 0.95fr" },
        justifyContent: "center",
        columnGap: "clamp(15px, 1vw, 40px)",
        rowGap: 6,
        alignItems: "center",
        minHeight: { md: 576 },
        paddingInline: { xs: "15px", lg: "0" },
        position: "relative",
      }}
    >
      {/* Text column (right in RTL) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "start" },
        }}
      >
        {/* Background pattern */}
        <Box
          sx={{
            width: "669.4px",
            height: "393.8px",
            position: "absolute",
            top: "-94.5px",
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

        {/* Header */}
        <SectionTextBlock
          align="start"
          icon={<IconBadge icon="/icons/section/question-circle.svg" />}
          title="سوالات متداول مهمانان گیلمار"
          description="پاسخ رایج‌ترین سوالات درباره رزرو، اقامت و امکانات گیلمار را اینجا پیدا کنید تا با خیال راحت سفر خود را برنامه‌ریزی کنید."
        />

        {/* Illustration */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 420,
            marginInline: "auto",
          }}
        >
          <BlurredImage
            src="/illustrations/binoculars-big.png"
            blur="5.667cqw"
            inset="5.5%"
            transform="translateY(3%)"
          >
            <Box
              component="img"
              src="/illustrations/binoculars-big.png"
              alt="سوالات متداول"
              sx={{
                position: "relative",
                zIndex: 1,
                display: "block",
                width: "100%",
                objectFit: "cover",
                marginInline: "auto",
              }}
            />
          </BlurredImage>
        </Box>
      </Box>

      {/* Questions column (left in RTL) */}
      <Box sx={{ width: "100%", maxWidth: 620, marginInline: "auto" }}>
        <FaqList items={ITEMS} />
      </Box>
    </SectionContainer>
  );
}