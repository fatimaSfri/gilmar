import { Box } from "@mui/material";
import SectionContainer from "@/components/common/SectionContainer";
import SectionTextBlock from "@/components/common/SectionTextBlock";
import IconBadge from "@/components/common/IconBadge";
import CollageImage from "@/components/common/CollageImage";
import ArticleCard from "./ArticleCard";

type Article = {
  href: string;
  src: string;
  title: string;
  description: string;
};

const ARTICLES: Article[] = [
  {
    href: "#", // article link
    src: "/Images/magazin.png", // image path
    title: "۱0 تجربه‌ای که نباید در طبیعت شمال از دست بدهید",
    description:
      "از قدم‌زدن در جنگل‌های مه‌آلود تا نوشیدن چای کنار شالیزار، در این مقاله با لذت‌های ساده و آرامش‌بخش طبیعت...",
  },
  {
    href: "#",
    src: "/Images/magazin.png",
    title: "۱0 تجربه‌ای که نباید در طبیعت شمال از دست بدهید",
    description:
      "از قدم‌زدن در جنگل‌های مه‌آلود تا نوشیدن چای کنار شالیزار، در این مقاله با لذت‌های ساده و آرامش‌بخش طبیعت...",
  },
  {
    href: "#",
    src: "/Images/magazin.png",
    title: "۱0 تجربه‌ای که نباید در طبیعت شمال از دست بدهید",
    description:
      "از قدم‌زدن در جنگل‌های مه‌آلود تا نوشیدن چای کنار شالیزار، در این مقاله با لذت‌های ساده و آرامش‌بخش طبیعت...",
  },
];

export default function Magazine() {
  return (
    <SectionContainer
      // TODO: background pattern from theme
      innerSx={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        position: "relative",
        overflow: { xs: "clip", xl: "visible" },
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          width: "669.4px",
          height: "393.8px",
          position: "absolute",
          zIndex: -5,
          top: "-4px",
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
          zIndex={-1}
        />
      </Box>

      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <SectionTextBlock
          align="center"
          icon={<IconBadge icon="/icons/section/plate.svg" />}
          title="مجله و مقالات گیلمار؛ روایت سفر، طبیعت و آرامش"
          description="در مجله گیلمار، خواندنی‌هایی درباره سفر، طبیعت، فرهنگ محلی و تجربه اقامتی دلنشین را دنبال کنید."
        />
      </Box>

      {/* Cards: 3×408 + 2×28 = 1280 */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
          columnGap: { xs: 0, md: "28px" },
          rowGap: "28px",
        }}
      >
        {ARTICLES.map((a, i) => (
          <ArticleCard key={`${a.href}-${i}`} {...a} />
        ))}
      </Box>
    </SectionContainer>
  );
}