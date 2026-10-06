
import { Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
const NAV_ITEMS = ["خانه", "سوئیت‌هاواقامت", "درباره گیلمار", "راهنمای مهمان‌ها" ,"مجله گیلمار","تماس با ما"];

// Shared link look; each place adds its own size/weight
const NAV_LINK_BASE_SX: SxProps<Theme> = {
  color: "text.primary",
  textDecoration: "none",
  fontSize:"14px",
  fontWeight:"600px"
};

export default function NavLinks({
  sx,
  onClick,
}: {
  sx: SxProps<Theme>;
  onClick?: () => void;
}) {
  return (
    <>
      {NAV_ITEMS.map((item) => (
        <Typography
          key={item}
          component="a"
          href="#"
          onClick={onClick}
          sx={[NAV_LINK_BASE_SX, ...(Array.isArray(sx) ? sx : [sx])]}
        >
          {item}
        </Typography>
      ))}
    </>
  );
}
