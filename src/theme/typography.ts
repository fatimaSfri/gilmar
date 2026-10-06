// Text styles: section titles, descriptions, button label

export const fontFamily = '"AbarMidFaNum", system-ui, sans-serif';

const fluid = (min: number, max: number) =>
  `clamp(${min}px, ${min}px + (${max} - ${min}) * ((100vw - 375px) / (1440 - 375)), ${max}px)`;

const title = {
  fontFamily,
  fontWeight: 800,
  lineHeight: "100%",
  color: "#1A1A1A",
};

const description = {
  fontFamily,
  fontWeight: 600,
  fontSize: fluid(13, 14), 
  lineHeight: 32 / 14, 
  letterSpacing: 0,
  color: "#4C4C4D",
};

export const typography = {
  fontFamily,

  // Large section title (centered sections), 40px at 1440
  sectionTitleLg: {
    ...title,
    fontSize: fluid(28, 40), // min is guessed
    letterSpacing: "-0.06em", // -2.4px / 40px
  },

  // Section title (start-aligned sections), 32px at 1440
  sectionTitle: {
    ...title,
    fontSize: fluid(24, 32), // min is guessed
    letterSpacing: "-0.04375em", // -1.4px / 32px
  },

  // Description under the title
  sectionDescription: description,

  // Same description, justified (longer paragraphs)
  sectionDescriptionJustified: {
    ...description,
    textAlign: "justify" as const,
  },

  // Button label (guessed values)
  buttonLabel: {
    fontFamily,
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 1.4,
    color: "#FFFFFF",
  },
};