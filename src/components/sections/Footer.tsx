"use client";

import Link from "next/link";
import { Box, Typography } from "@mui/material";
import SectionContainer from "@/components/common/SectionContainer";
import MaskedImage from "@/components/common/MaskedImage";

// Breakpoints (ascending)
const B = "@media (min-width:600px)";
const A = "@media (min-width:960px)";

const SHAPE_RATIO = 276 / 364; // shape height / width

const EXPLORE = [
  { label: "سوئیت‌ها و اقامت", href: "/suites" },
  { label: "راهنمای مهمان‌ها", href: "/guide" },
  { label: "درباره گیلمار", href: "/about" },
  { label: "مجله گیلمار", href: "/magazine" },
];

const SOCIALS = [
  "/icons/social/linkdin.png",
  "/icons/social/telegram.png",
  "/icons/social/youtube.png",
  "/icons/social/x.png",
];

// Shared card surface
const cardSx = {
  boxSizing: "border-box",
  bgcolor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
} as const;

// Shared text styles
const bodyTextSx = {
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "32px",
  color: "text.secondary",
} as const;

const headingSx = {
  fontWeight: 800,
  fontSize: "16px",
  lineHeight: "53px",
  color: "text.primary",
} as const;

const contactTextSx = { ...bodyTextSx, color: "#4C4C4C" } as const; // differs from text.secondary by one digit

const linkStyle = { color: "inherit", textDecoration: "none" } as const;

export default function Footer() {
  return (
    <Box component="footer" sx={{ marginBlockEnd: "40px" }}>
      <SectionContainer
        innerSx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Top box */}
        <Box
          sx={{
            ...cardSx,
            position: "relative",
            display: "grid",
            alignItems: "center",
            overflow: "clip",
            borderRadius: 3,
            boxShadow: (t) => t.customShadows.cardRing,

            // Mobile
            "--shape-w": "72%",
            "--fs": "13px",
            "--pad": "16px",
            paddingBlockStart: "var(--pad)",
            paddingInlineStart: "var(--pad)",
            paddingInlineEnd: "var(--pad)",
            paddingBlockEnd: `calc(var(--shape-w) * ${SHAPE_RATIO} + var(--pad))`,

            // Tablet
            [B]: {
              "--shape-w": "min(40%, 364px)",
              "--fs": "13.5px",
              "--pad": "20px",
            },

            // Desktop
            [A]: {
              "--shape-w": "28.44%", // 364 / 1280
              "--fs": "clamp(11px, 0.71vw + 4.7px, 14px)",
              "--pad": "clamp(14px, 1.83vw, 24px)",
              aspectRatio: "1280 / 276",
              paddingBlockEnd: "var(--pad)",
              paddingInlineEnd: "calc(var(--shape-w) + var(--pad))",
            },
          }}
        >
          {/* Content columns */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr)",
              columnGap: "var(--pad)",
              rowGap: "calc(var(--pad) * 1.25)",
              fontSize: "var(--fs)",
              textAlign: "center",
              justifyItems: "center",
              alignItems: "center",
              [B]: {
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                textAlign: "start",
              },
              [A]: {
                gridTemplateColumns: "minmax(0, 1.3fr) minmax(370px, 1fr) minmax(0, 1fr)",
              },
            }}
          >
            {/* Brand */}
            <Box
              sx={{
                maxWidth: "314px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                [B]: { gridColumn: "1 / -1", alignItems: "flex-start" },
                [A]: { gridColumn: "auto" },
              }}
            >
              <Box
                component="img"
                src="/images/logo.png"
                alt="گیلمار"
                sx={{ display: "block", objectFit: "contain" }}
              />
              <Typography sx={{ ...bodyTextSx, textAlign: "justify" }}>
                اقامتگاه بومگردی گیلمان، بزرگ‌ترین مجموعه‌ی شمال کشور با امکانات
                رفاهی و تفریحی متنوع در فضایی منحصربه‌فرد، با مجوز رسمی میراث
                فرهنگی گیلان فعالیت می‌کند.
              </Typography>
            </Box>

            {/* Explore */}
            <Box
              component="ul"
              sx={{
                margin: 0,
                padding: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                "& li": {
                  display: "flex",
                  alignItems: "center",
                },
                "& li::before": {
                  content: '""',
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "black",
                  flexShrink: 0,
                  marginInline: "8px",
                },
              }}
            >
              <Typography sx={headingSx}>کاوش در گیلمار</Typography>
              {EXPLORE.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={linkStyle}>
                    <Typography component="span" sx={bodyTextSx}>
                      {l.label}
                    </Typography>
                  </Link>
                </li>
              ))}
            </Box>

            {/* Contact */}
            <Box
              sx={{
                minWidth: { xs: "300px", lg: "370px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography sx={headingSx}>راه‌های ارتباط با گیلمار</Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography component="div" sx={contactTextSx}>
                  تلفن پشتیبانی: 01334775400 - 01334775411
                </Typography>
                <Typography sx={contactTextSx}>
                  ایمیل: info@gilmar-gilan.com
                </Typography>
                <Typography sx={contactTextSx}>
                  موقعیت گیلمار: گیلان، جاده رشت به فومن، روستای ملاسرا، خیابان
                  کوزه‌گران، اقامتگاه گیلمار
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Map shape (bottom-left corner) */}
          <Box
            sx={{
              position: "absolute",
              insetInlineEnd: "-1px",
              insetBlockEnd: "-1px",
              width: "var(--shape-w)",
              aspectRatio: "364 / 276",
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
              src="/images/map-footer.png"
              mask="/masks/subtract.svg"
              alt="گیلمار"
              width={364}
              height={1}
            />
          </Box>
        </Box>

        {/* Bottom bar */}
        <Box
          sx={{
            ...cardSx,
            boxShadow: (t) => t.customShadows.cardRing,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 2, sm: 3 },
            minHeight: 56,
            paddingBlock: { xs: 2, sm: "8px" },
            paddingInline: { xs: 2, sm: "24px" },
            borderRadius: "28px",
            textAlign: { xs: "center", sm: "start" },
          }}
        >
          <Typography sx={{ fontSize: "14px", lineHeight: "32px", color: "text.secondary" }}>
            © تمامی حقوق برای اقامتگاه بومگردی گیلمار محفوظ است.
          </Typography>

          {/* Socials */}
          <Box
            component="ul"
            sx={{ margin: 0, padding: 0, listStyle: "none", display: "flex", gap: "12px" }}
          >
            {SOCIALS.map((s) => (
              <li key={s}>
                <Box
                  component="a"
                  href="#" // TODO: social link
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: (t) => t.gradients.button,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Box component="img" src={s} />
                </Box>
              </li>
            ))}
          </Box>
        </Box>
      </SectionContainer>
    </Box>
  );
}