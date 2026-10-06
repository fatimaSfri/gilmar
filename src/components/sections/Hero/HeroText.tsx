import { Box, Typography } from "@mui/material";
import ActionButton from "@/components/common/ActionButton";

// Hero text block: title, description, button (centered)
export default function HeroText() {
  return (
    <Box
      sx={{
        width: "80%",
        maxWidth: 732,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: {xs:"10px" , md:"24px"},  
         position:"absolute",
          top:{xs:"140px" , md:"158px"},
          zIndex:"5"
      }}
    >
      {/* Title + description*/}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography variant="sectionTitleLg" component="h1">
          اقامتگاه بومگردی گیلمار جایی که طبیعت خانه است
        </Typography>
        <Typography variant="sectionDescription" component="p">
         اقامتگاه بومگردی گیلمار بزرگ ترین مجموعه اکولوژ شمال کشور دارای امکانات رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی از اداره میراث فرهنگی، صنایع دستی و گردشگری گیلان فعالیت دارد.
        </Typography>
      </Box>

      <ActionButton href="/booking" iconSize={24} fontWeight={900}>
        مهمان گیلمار شو
      </ActionButton>
    </Box>
  );
}