"use client";

import { useId, useState } from "react";
import { Box, ButtonBase, Typography } from "@mui/material";

export type FaqItem = { question: string; answer: string };

export default function FaqList({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <Box
            key={`${item.question}-${i}`}
            sx={{
              boxSizing: "border-box",
              minHeight: 64,
              padding: "23px 15px",
              borderRadius: isOpen ? "20px" : "999px",
              bgcolor: "background.paper",
              boxShadow: (t) => t.customShadows.cardRing,
              display: "flex",
              flexDirection: "column",
              gap: isOpen ? "16px" : "0",
            }}
          >
            {/* Question row */}
            <ButtonBase
              id={btnId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                width: "100%",
                minHeight: 32,
                textAlign: "start",
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontWeight: 800,
                  fontSize: "14px",
                  lineHeight: "32px",
                  color: "text.primary",
                  flex: 1,
                }}
              >
                {item.question}
              </Typography>

              {/* Plus / minus circle */}
              <Box
                component="span"
                sx={{
                  position: "relative",
                  flexShrink: 0,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: (t) => t.gradients.primary,
                  "&::before, &::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    margin: "auto",
                    width: 12,
                    height: 2,
                    borderRadius: 1,
                    bgcolor: "common.white",
                    transition: "transform 250ms ease",
                  },
                  "&::after": {
                    transform: isOpen ? "rotate(0deg)" : "rotate(90deg)",
                  },
                }}
              />
            </ButtonBase>

            {/* Answer panel */}
            <Box
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              sx={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 250ms ease",
              }}
            >
              <Box
                sx={{
                  minHeight: 0,
                  overflow: "hidden",
                  visibility: isOpen ? "visible" : "hidden",
                  transition: isOpen ? "visibility 0s" : "visibility 0s linear 250ms",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "32px",
                    color: "text.secondary",
                  }}
                >
                  {item.answer}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}