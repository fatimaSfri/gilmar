// Shadows and blur: cards, buttons, images

const buttonInset = "0px 1px 0px 0px #FFFFFF29 inset";
const buttonOuter = "0px 1px 2px -1px #92929266";


export const customShadows = {
  // Cards and pills
  card: "0px 24px 48px 0px #002E251F", 
   cardSoft: ` 0px 40px 32px -24px #0F0F0F1F ,${"0px 6px 0px #FFFFFF"}`,
  ring6: "0px 0px 0px 6px #FFFFFF", 
  ring4: "0px 0px 0px 4px #FFFFFF",
  cardRing: "0px 24px 48px 0px #002E251F, 0px 0px 0px 6px #FFFFFF",
 
  buttonInset,
  buttonOuter,
  button: `${buttonInset}, ${buttonOuter}`, 

  // Images
  inset: "0px 10px 30px 0px #00000052 inset",

  // Blur
  blur88: "blur(88px)",
};