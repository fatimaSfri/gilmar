import Box from "@mui/material/Box";

import RuleImageCard from "./RuleImageCard";
import SectionContainer from "@/components/common/SectionContainer";
import SectionTextBlock from "@/components/common/SectionTextBlock";
import IconBadge from "@/components/common/IconBadge";
import CollageImage from "@/components/common/CollageImage";
import Typography from "@mui/material/Typography";

const RULES = [
  {
    id: 1,
    src: "/illustrations/camping-tent-r.png",
    rotate: -15,
    title: "مراقبت از وسایل اقامتگاه",
    description: "مهمانان عزیز مسئول نگهداری از تجهیزات هستند.",
  },
  {
    id: 2,
    src: "/illustrations/binoculars.png",
    rotate: 20,
    title: "حفظ آرامش اقامتگاه",
    description:
      "برای حفظ فضای آرام و دلنشین گیلمار، لطفاً از ایجاد سر‌وصدای زیاد به‌ویژه در ساعات شب خودداری کنید.",
  },
  {
    id: 3,
    src: "/illustrations/bus-map.png",
    rotate: -15,
    title: "حفظ طبیعت و محیط زیست",
    description:
      "گیلمار در دل طبیعت قرار دارد؛ لطفاً در حفظ محیط‌زیست، فضای سبز و منابع طبیعی همراه ما باشید.",
  },
];

export default function Rules() {
  return (
    <SectionContainer
      maxWidth={1024}
      sx={{ position: "relative", overflow: "hidden" }}
      innerSx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          width: "600.4px",
          height: "300.8px",
          position: "absolute",
          top: "128px",
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
          zIndex={0}
        />
      </Box>

      {/* Header */}
      <SectionTextBlock
        icon={<IconBadge icon="/icons/section/spark.svg" />}
        title="همراهی برای حفظ آرامش و طبیعت گیلمار"
        description="برای حفظ آرامش، نظم و تجربه‌ای دلنشین برای همه مهمانان، لطفاً قوانین اقامتگاه گیلمار را پیش از رزرو مطالعه و رعایت فرمایید."
        sx={{
          marginBlockEnd: "clamp(24px, 4vw, 40px)",
          marginInline: { xs: "15px" },
        }}
      />

      {/* Rule cards */}
      <Box
        sx={{
          width: "100%",
          height: { lg: "360px" },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(3, minmax(150px,256px))",
          },
          justifyItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Dashed line pattern */}
        <Box
          sx={{
            width: "836.9px",
            height: "153.68px",
            position: "absolute",
            zIndex: -1,
            top: { xs: "auto", sm: "262.5px" },
            bottom: { xs: "262.5px", sm: "auto" },
            transform: { xs: "rotate(90deg)", sm: "none" },
            transformOrigin: "center",
          }}
        >
          <CollageImage
            src="/patterns/dashed-dots-bg.png"
            top={0}
            left={0}
            width={620}
            height={642}
            zIndex={0}
          />
        </Box>

        {RULES.map((rule) => (
          <Box
            key={rule.id}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <RuleImageCard src={rule.src} rotate={rule.rotate} />

            <Box sx={{ textAlign: "center", maxWidth: "256px" }}>
              <Typography
                variant="sectionTitle"
                component="h3"
                sx={{ fontSize: 16, lineHeight: "32px", letterSpacing: 0 }}
              >
                {rule.title}
              </Typography>
              <Typography variant="sectionDescription" component="p">
                {rule.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </SectionContainer>
  );
}