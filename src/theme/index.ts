import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { typography } from "./typography";
import { gradients } from "./gradients";
import { customShadows } from "./shadows";
import { decor } from "./decor";
import { components } from "./overrides";

// Final theme: combines all parts
export const theme = createTheme({
  direction: "rtl",
  shape: { borderRadius: 8 },
  palette,
  typography,
  components,
  gradients,
  customShadows,
  decor,
});