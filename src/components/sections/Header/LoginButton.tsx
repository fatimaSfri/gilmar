import { Box ,Typography} from "@mui/material";
import Button from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/material/styles";

// Login button used in both desktop bar and mobile drawer
export default function LoginButton({ sx }: { sx?: SxProps<Theme> }) {
  return (
    <Button sx={[{ height: "52px" }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Box
          component="img"
          src="/icons/ui/user-icon.svg"
          alt=""
          sx={{ width: 22, height: 22 }}
        />
        <Typography
          component="span"
          sx={{ fontSize: "14px", fontWeight: 800, color: "inherit" }}
        >
          ورود یا ثبت‌نام
        </Typography>

        
      </Box>
    </Button>
  );
}