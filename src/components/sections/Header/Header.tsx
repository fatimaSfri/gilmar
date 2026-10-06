"use client";

import { useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

import type { SxProps, Theme } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavLinks from "./NavLinks";
import LoginButton from "./LoginButton";



const DESKTOP_LINK_SX: SxProps<Theme> = {
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "32px",
  letterSpacing: 0,
  textAlign: "center",
};

const DRAWER_LINK_SX: SxProps<Theme> = {
  fontSize: "17px",
  fontWeight: 500,
};


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        component="header"
        sx={{
          position: "absolute",
          top: { xs: "16px", md: "40px" },
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            width: {
              xs: "calc(100% - 32px)",
              sm: "calc(100% - 48px)",
              md: "calc(100% - 160px)",
            },
            maxWidth: "1280px",
            mx: "auto",
          }}
        >
          <Paper
            variant="pillRing"
            sx={{
              minHeight: { xs: "56px", md: "66px" },
              px: "8px",
              py: { xs: "5px", md: "6.5px" },

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              boxSizing: "border-box",
            }}
          >
            {/* Logo */}
            <Box
              component="img"
              src="/images/logo.png"
              alt="Gilmar"
              sx={{
                width: "مثلاً 120px",
                height: "auto",
                display: "block",
              }}
            />

            {/* Desktop Navigation */}
            <Box
              component="nav"
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: { md: "14px", lg: "32px" , xl:"40px"},
                flexWrap:"wrap",
                justifyContent:"center"
              }}
            >
              <NavLinks sx={DESKTOP_LINK_SX} />
            </Box>

            {/* Desktop Login Button */}
            <LoginButton
              sx={{
                display: { xs: "none", md: "flex" },
                width: "154px",
                minWidth: "154px",
              }}
            />

            {/* Mobile Menu Button */}
            <IconButton
              onClick={() => setOpen(true)}
              aria-label="باز کردن منو"
              sx={{
                display: { xs: "flex", md: "none" },
                width: "44px",
                height: "44px",
                color: "text.primary",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Paper>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="right" aria-hidden open={open} onClose={() => setOpen(false)} >
        <Box
          sx={{
            width: { xs: "280px", sm: "320px" },
            minHeight: "100%",
            p: 3,
            direction: "rtl",
         
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mb: 4,
            }}
          >
            

            <IconButton onClick={() => setOpen(false)} aria-label="بستن منو">
              <CloseIcon />
            </IconButton>
          </Box>

          <Box
            component="nav"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
            }}
          >
            <NavLinks sx={DRAWER_LINK_SX} onClick={() => setOpen(false)} />

            <LoginButton sx={{ mt: 2 }} />
          </Box>
        </Box>
      </Drawer>
    </>
  );
}