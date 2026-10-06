import type { Components, Theme } from "@mui/material/styles";

export const components: Components<Theme> = {
  // MUI Button: brand gradient, pill shape, shadows
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "800000px",
        textTransform: "none",
        backgroundImage: theme.gradients.button,
        boxShadow: theme.customShadows.button,
        color: theme.palette.common.white,
        ...theme.typography.buttonLabel,
      }),
    },
  },

  // Paper: repeated pills and cards
  // (size and padding of each one stay in its own section)
  MuiPaper: {
    defaultProps: { elevation: 0 },
    variants: [
      {
        // Plain pill (1280x66 and 1280x56 without ring)
        props: { variant: "pill" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 9999,
        }),
      },
      {
        // Pill with 6px ring (FAQ items and footer bottom box)
        props: { variant: "pillRing" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 9999,
          boxShadow: theme.customShadows.ring6,
        }),
      },
      {
        // Card (footer top box)
        props: { variant: "card" },
        style: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: "20px",
          boxShadow: theme.customShadows.ring6,
        }),
      },
    ],
  },
};