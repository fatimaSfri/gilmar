import { Box } from "@mui/material";
import ImageHero from"./ImageHero"
import HeroText from "./HeroText";

export default function Hero() {
  return (
    
      <Box 
      sx={{
        width:"100%",
        // height:"100vh",
        // display: 'flow-root'
         display:"flex",
        flexDirection:"column",
        alignItems:"center",
      

      }}>
       
        <HeroText/>
        
        <ImageHero/>
      </Box>
    
  );
}