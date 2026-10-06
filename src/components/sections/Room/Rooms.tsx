import Box from "@mui/material/Box";

import RoomCard, { type RoomData } from "./RoomCard";
import SectionContainer from "@/components/common/SectionContainer";
import SectionTextBlock from "@/components/common/SectionTextBlock";
import IconBadge from "@/components/common/IconBadge";
import CollageImage from "@/components/common/CollageImage";

const ROOMS: RoomData[] = [
  { src: "/images/package-d.png", alt: "توضیح عکس اتاق ۱", title: "خانه‌ی چوبی گیلمار", price: "هر شب اقامت از ۱۳0۰۰۰۰ تومان" },
  { src: "/images/package-a.png", alt: "توضیح عکس اتاق ۲", title: "خانه‌ی چوبی گیلمار", price: "هر شب اقامت از ۱۳0۰۰۰۰ تومان" },
  { src: "/images/package-b.png", alt: "توضیح عکس اتاق ۳", title: "خانه‌ی چوبی گیلمار", price: "هر شب اقامت از ۱۳0۰۰۰۰ تومان" },
  { src: "/images/package-c.png", alt: "توضیح عکس اتاق ۴", title: "خانه‌ی چوبی گیلمار", price: "هر شب اقامت از ۱۳0۰۰۰۰ تومان" },
];

export default function Rooms() {
  return (
    <SectionContainer
      maxWidth={1280} // 4×302 + 3×24
      // TODO: background pattern from theme
      sx={{
        paddingInline: "clamp(16px, 4vw, 32px)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          width: "669.4px",
          height: "393.8px",
          position: "absolute",
          top: "-31px",
          left: "-14.6px",
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
        align="center"
        icon={<IconBadge icon="/icons/section/union.svg" />}
        title="انواع اتاق‌های اقامتگاه گیلمار"
        description="اتاق‌های گیلمار با فضایی دنج و امکانات مناسب، برای اقامتی آرام در دل طبیعت آماده شده‌اند."
        sx={{ marginBottom: "40px" }}
      />

      {/* Room cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
          gap: "clamp(12px, 1.78vw, 24px)",
        }}
      >
        {ROOMS.map((room) => (
          <RoomCard key={room.src} {...room} />
        ))}
      </Box>
    </SectionContainer>
  );
}