// import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
// import MaskedImage from "../common/MaskedImage";



// const ImageHero = () => {
//   return (
//     <Box
//       sx={{
//         width: "88.8%",
//         maxWidth:"1280px",
//         // height: "581px",
//         border: "2px solid orange",
//         display: "flex",
//         alignItems: "end",
//         justifyContent: "center",
//         position: "relative",
//         marginBottom:"20px",
//         marginTop:"359px"
//       }}
//     >
//       <MaskedImage
//         src="/images/hero.png"
//         mask="/masks/hero-mask.svg"
//         freeTop={50}
//         height={1}
//         minHeight="39%"
//         alt=""
//       ></MaskedImage>
//       <Box
//         component="img"
//         src="/patterns/hero-overlay.svg"
//         sx={{
//           position: "absolute",
//           zIndex: "5",
//           alignSelf: "flex-start",
//           border: "2px solid green",
//           width: "91%",
//           marginTop: "19px",
//         }}
//       />

//       <Box
//         sx={{
//           position: "absolute",
//           border: "4px solid red",
//           width: "100%",
//           height: "29.77%",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "flex-end",
//         }}
//       >
//         <Box
//           sx={{
//             marginInline: "clamp(2px, 1.15vw, 17px)",
//             marginBlockEnd: "clamp(2px, 1vw, 24px)",
//             width: "20%",
//             maxWidth: 320,
//             fontWeight: 600,
//             fontSize: "clamp(4px, 1vw, 14px)",
//             lineHeight: 2.28,
//           }}
//         >
//           فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال
//         </Box>





//    <Box
//   sx={{
//     '--u': 'clamp(6px, 1vw, 14px)', 
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: 'calc(var(--u) * 0.43)',
//     paddingBlock: 'calc(var(--u) * 0.57)',
//     paddingInlineStart: 'var(--u)',
//     paddingInlineEnd: 'calc(var(--u) * 0.57)',
//     borderRadius: 999,
//     bgcolor: 'common.white',
//     fontSize: 'var(--u)',
//      position: 'absolute',
//   insetInlineEnd: 'clamp(2px, 0.1vw, 17px)', // چپ
//   insetBlockEnd: 'clamp(0px, 0.5vw, 17px)', 
//     boxShadow: '0 10px 41px 0 #0000000A, 0 2px 2px 0 #00000005',
//     '@media (max-width:780px)': {
//         bgcolor: 'transparent',
//   boxShadow: 'none',
//     paddingInline: 0,
//   paddingBlock: 0, // پدینگ بالا و پایین هم حذف شود
//   '& .label': { display: 'none' },
//   '& .MuiAvatar-root:not(:first-of-type)': {
//     marginInlineStart: 'calc(var(--u) * -0.3)', // همپوشانی کمتر از 0.52
//   },
    
//     },
//   }}
// >


//   <AvatarGroup
//     spacing={8.3}
//     sx={{
//       '& .MuiAvatar-root': {
//         width: 'calc(var(--u) * 2.29)',  // 32px در دسکتاپ
//         height: 'calc(var(--u) * 2.29)',
//         fontSize: 'inherit',
//       },
//       '& .MuiAvatar-root:not(:first-of-type)': {
//         marginInlineStart: 'calc(var(--u) * -0.52)', // 7.3px در دسکتاپ
//       },
//     }}
//   >
//     <Box sx={{ display: 'flex' }}>
//   {['/a.jpg', '/b.jpg', '/c.jpg'].map((src, i) => (
//     <Avatar
//       key={src}
//       src={src}
//       sx={{
//         width: 'calc(var(--u) * 2.29)',
//         height: 'calc(var(--u) * 2.29)',
//         marginInlineStart: i === 0 ? 0 : 'calc(var(--u) * -0.52)', // 7.3px در دسکتاپ
//         border: 0,
//         zIndex: 3 - i,
//       }}
//     />
//   ))}
// </Box>
//   </AvatarGroup>
//     <Typography className="label" sx={{ fontSize: 'inherit', whiteSpace: 'nowrap' }}>
//     +۱۲۰ رزرو موفق
//   </Typography>
// </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ImageHero;


import { Avatar, Box, Typography } from "@mui/material";
import MaskedImage from "../../common/MaskedImage";
import BlurredImage from "@/components/common/BlurredImage";

// Moves the glow up. % of the glow's own height, so it scales with the image
const GLOW_SHIFT_Y = "-3%"; // guessed, adjust by eye
const avatars = ["/avatars/e.png", "/avatars/d.png", "/avatars/c.png"];
const ImageHero = () => {
  return (
    <Box
      sx={{
        width: "88.8%",
        maxWidth: "1280px",
        aspectRatio: "1280 / 581", // fixes the height, image and glow share one box
        containerType: "inline-size", // enables cqw units for the glow blur
        position: "relative",
        marginBottom: "20px",
        marginTop: "359px",
      }}
    >
      {/* Back layer: blurred copy of the masked image (Figma: 1216x551.95, inset 2.5% each side, blur 88) */}
      {/* <Box
        aria-hidden
        sx={{
          position: "absolute",
          zIndex: 0,
          inset: "2.5%", // 32/1280 horizontal, 14.53/581 vertical
          transform: `translateY(${GLOW_SHIFT_Y})`, // shifts the glow upward
          filter: "blur(6.875cqw)", // 88 / 1280, scales with the image width
          pointerEvents: "none",
        }}
      >
        <Box
          component="img"
          src="/images/hero.png"
          alt=""
          sx={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            WebkitMaskImage: "url(/masks/hero-mask.svg)",
            maskImage: "url(/masks/hero-mask.svg)",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      </Box> */}

      {/* Front layer: the real image, forced to fill the wrapper (MaskedImage untouched) */}
      {/* <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          "& > img": {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            maxWidth: "none",
            minHeight: 0,
            aspectRatio: "auto",
          },
        }}
      >
        <MaskedImage
          src="/images/hero.png"
          mask="/masks/hero-mask.svg"
          freeTop={50}
          height={1}
          minHeight="39%"
          alt=""
        />
      </Box> */}
      <BlurredImage
  src="/images/hero.png"
  blur="6.875cqw"
  inset="2.5%"
  transform={`translateY(${GLOW_SHIFT_Y})`}
  mask="/masks/hero-mask.svg"
>
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      zIndex: 1,
      "& > img": {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        maxWidth: "none",
        minHeight: 0,
        aspectRatio: "auto",
      },
    }}
  >
    <MaskedImage
      src="/images/hero.png"
      mask="/masks/hero-mask.svg"
      freeTop={50}
      height={1}
      minHeight="39%"
      alt=""
    />
  </Box>
</BlurredImage>

      <Box
        component="img"
        src="/patterns/hero-overlay.svg"
        sx={{
          position: "absolute",
          zIndex: 5,
          insetBlockStart: "19px",
          insetInline: 0,
          marginInline: "auto",
          width: "91%",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          insetInline: 0,
          insetBlockEnd: 0,
          zIndex: 2,
          height: "29.77%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Box
          sx={{
            marginInline: "clamp(2px, 1.15vw, 17px)",
            marginBlockEnd: "clamp(2px, 1vw, 24px)",
            width: "20%",
            maxWidth: 320,
            fontWeight: 600,
            fontSize: "clamp(4px, 1vw, 14px)",
            lineHeight: 2.28,
          }}
        >
          فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال
        </Box>

        <Box
          sx={{
            "--u": "clamp(6px, 1vw, 14px)",
            display: "inline-flex",
            alignItems: "center",
            gap: "calc(var(--u) * 0.43)",
            paddingBlock: "calc(var(--u) * 0.57)",
            paddingInlineStart: "var(--u)",
            paddingInlineEnd: "calc(var(--u) * 0.57)",
            borderRadius: 999,
            bgcolor: "common.white",
            fontSize: "var(--u)",
            position: "absolute",
            insetInlineEnd: "clamp(2px, 0.1vw, 17px)", // left
            insetBlockEnd: "clamp(0px, 0.5vw, 17px)",
            boxShadow: "0 10px 41px 0 #0000000A, 0 2px 2px 0 #00000005",
            "@media (max-width:780px)": {
              bgcolor: "transparent",
              boxShadow: "none",
              paddingInline: 0,
              paddingBlock: 0,
              "& .label": { display: "none" },
              "& .MuiAvatar-root:not(:first-of-type)": {
                marginInlineStart: "calc(var(--u) * -0.3)",
              },
            },
          }}
        >
       

<Box sx={{ display: "flex", alignItems: "center" }}>
  {avatars.map((src, i) => (
    <Avatar
      key={src}
      src={src}
      sx={{
        position: "relative", // لازم برای کار کردن zIndex
        zIndex: avatars.length - i, // اولی (راست‌ترین) بالاترین
        width: "calc(var(--u) * 1.714)", // 24px روی دسکتاپ (u = 14px)
        height: "calc(var(--u) * 1.714)",
        marginInlineStart: i === 0 ? 0 : "calc(var(--u) * -0.52)", // 7.3px روی هم
        border: 0,
      }}
    />
  ))}
</Box>
          <Typography className="label" sx={{ fontSize: "inherit", whiteSpace: "nowrap" }}>
            +۱۲۰ رزرو موفق
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageHero;