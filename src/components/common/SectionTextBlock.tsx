import type { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

type Props = {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode; // usually <IconBadge icon="..." />
  action?: ReactNode; // usually <ActionButton ... />, placed under the text
  align?: "start" | "center"; // desktop alignment; always centered on mobile
  size?: "default" | "lg"; // desktop title size: default 32px, lg 40px
  titleComponent?: "h1" | "h2" | "h3";
  sx?: SxProps<Theme>;
};

const ICON_GAP = 20; // icon -> title
const TITLE_DESC_GAP = 0; // title -> description
const ACTION_GAP = 16; // text -> action

export default function SectionTextBlock({
  title,
  description,
  icon,
  action,
  align = "center",
  size = "default",
  titleComponent = "h2",
  sx,
}: Props) {
  const isCenter = align === "center";
  const isLg = size === "lg";

  return (
    <Box
      sx={[
        {
          display: "flex",
          flexDirection: "column",
          gap: `${ACTION_GAP}px`,
          alignItems: { xs: "center", md: isCenter ? "center" : "flex-start" },
          textAlign: { xs: "center", md: align },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {/* Icon + text group */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: `${ICON_GAP}px`,
          alignItems: "inherit",
        }}
      >
        {icon}

        {/* Title + description */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: `${TITLE_DESC_GAP}px`,
            alignItems: "inherit",
          }}
        >
          {/* Theme fluid size below md; from md up: 32px (default) or 40px (lg) */}
          <Typography
            variant={isLg ? "sectionTitleLg" : "sectionTitle"}
            component={titleComponent}
            sx={{
              height: "58px",
              fontSize: { md: isLg ? 40 : 32 },
              letterSpacing: { md: isLg ? "-2.4px" : "-1.4px" },
              
            }}
          >
            {title}
          </Typography>

          {description && (
            <Typography
              variant={isCenter ? "sectionDescription" : "sectionDescriptionJustified"}
              component="p"
              sx={{
                fontSize: { md: 14 }, 
                textAlign: { xs: "center", md: isCenter ? "center" : "justify" },
                   paddingLeft:{md: align === "start" ? "70px" : 0}
              }}
            >
              {description}
            </Typography>
          )}
        </Box>
      </Box>

      {action}
    </Box>
  );
}