import type { CSSProperties } from "react";
import type { gradients } from "./gradients";
import type { customShadows } from "./shadows";
import type { backgrounds } from "./backgrounds";
import type { decor } from "./decor";

declare module "@mui/material/styles" {
  interface Theme {
    gradients: typeof gradients;
    customShadows: typeof customShadows;
    backgrounds: typeof backgrounds;
    decor: typeof decor;
  }
  interface ThemeOptions {
    gradients?: typeof gradients;
    customShadows?: typeof customShadows;
    backgrounds?: typeof backgrounds;
    decor?: typeof decor;
  }
  interface TypographyVariants {
    sectionTitleLg: CSSProperties;
    sectionTitle: CSSProperties;
    sectionDescription: CSSProperties;
    sectionDescriptionJustified: CSSProperties;
    buttonLabel: CSSProperties;
  }
  interface TypographyVariantsOptions {
    sectionTitleLg?: CSSProperties;
    sectionTitle?: CSSProperties;
    sectionDescription?: CSSProperties;
    sectionDescriptionJustified?: CSSProperties;
    buttonLabel?: CSSProperties;
  }
  interface PaletteOptions {
    custom?: { surfaceMuted: string; circleBlue: string };
  }
  interface Palette {
    custom: { surfaceMuted: string; circleBlue: string };
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    sectionTitleLg: true;
    sectionTitle: true;
    sectionDescription: true;
    sectionDescriptionJustified: true;
    buttonLabel: true;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    pill: true;
    pillRing: true;
    card: true;
  }
}