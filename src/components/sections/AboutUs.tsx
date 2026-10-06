import Box from "@mui/material/Box";
import SectionContainer from "@/components/common/SectionContainer";
import SectionTextBlock from "@/components/common/SectionTextBlock";
import IconBadge from "@/components/common/IconBadge";
import ActionButton from "@/components/common/ActionButton";
import CollageImage from "@/components/common/CollageImage";

// Collage images (Figma coords in the 620x642 frame)
const IMAGES = [
  { src: "/images/b-about.png", top: 0, left: 153, width: 352, height: 352, zIndex: 2, overlay: true, radius: 20 },
  { src: "/images/c-about.png", top: 249, left: 57, width: 256, height: 298, zIndex: 3, overlay: true, radius: 20 },
  { src: "/images/a-about.png", top: 282, left: 345, width: 256, height: 360, zIndex: 1, overlay: true, radius: 20 },
  { src: "/images/text-a.png", top: 128, left: 19, width: 244, height: 72, zIndex: 4 },
  { src: "/images/text-b.png", top: 410, left: 249, width: 249, height: 72, zIndex: 5 },
  { src: "/patterns/dots.png", top: -7, left: 19, width: 620, height: 642, zIndex: 0 },
];

export default function AboutUs() {
  return (
    <SectionContainer
      sx={{ marginInline: { xs: "10px", md: "20px", lg: "80px" } }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "660fr 620fr" }, // 1280 = 660 + 620
          alignItems: "center",
          rowGap: 4,
        }}
      >
        {/* Text column (right in RTL, top on mobile) */}
        <Box
          sx={{
            minHeight: 200,
            height: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Background pattern */}
          <CollageImage
            src="/patterns/Squares.png"
            top={44.5}
            left={60}
            width={669.4}
            height={393.8}
            zIndex={10}
          />

          <SectionTextBlock
            align="start"
            icon={<IconBadge icon="/icons/section/earth.svg" />}
            title="گیلمار؛ آرامش ناب در آغوش طبیعت گیلان"
            description="گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر دسترسی مناسب و انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را به مقصدی متفاوت برای سفر تبدیل کرده است."
            action={<ActionButton> اقامت در گیلمار</ActionButton>}
          />
        </Box>

        {/* Image area: 620x642 */}
        <Box
          sx={{
            width: "100%",
            aspectRatio: "620 / 642",
            position: "relative",
          }}
        >
          {IMAGES.map((img) => (
            <CollageImage key={img.src} {...img} />
          ))}
        </Box>
      </Box>
    </SectionContainer>
  );
}