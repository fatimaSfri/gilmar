// Gradients: buttons, icon circle, image overlays

const brand = "linear-gradient(229.52deg, #02ADF7 -18.98%, #26E05A 121.29%)";
const glow =
  "radial-gradient(27.92% 100% at 50% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)";

// Darkening from the bottom; only the alpha changes
const overlay = (alpha: number) =>
  `linear-gradient(0deg, rgba(7, 7, 8, ${alpha}) 0%, rgba(7, 7, 8, 0) 100%)`;

export const gradients = {
  // Brand gradient (plain)
  primary: brand,
  // Buttons: brand + glow, exactly as in Figma (glow applied twice)
  button: `${brand}, ${glow}, ${glow}`,

  // Icon circle inside buttons (border only)
  iconCircleBorder: "linear-gradient(161.17deg, #FFFFFF 12.7%, #BAC8D1 91.04%)",

  // Overlays on images (key = alpha in percent)
  imageOverlay: {
    24: overlay(0.24),
    48: overlay(0.48),
    64: overlay(0.64),
    72: overlay(0.72),
    88: overlay(0.88),
  },

  // Purple tint on images (used with background-blend-mode)
  purpleTint: "linear-gradient(215.6deg, #681AFF -32.59%, rgba(104, 26, 255, 0) 51.25%)",
  purpleTintBlendMode: "luminosity",
    // Soft vertical band behind the reviews slider
  reviewsFade:
    "radial-gradient(ellipse at center rgba(105, 118, 135, 0) -4.27%, rgba(105, 118, 135, 0.15) 18.12%, rgba(105, 118, 135, 0.15) 56.99%, rgba(105, 118, 135, 0) 92.3%)",
  // Flat color, not a gradient
  scrim: "#00000014",
};