import Box from "@mui/material/Box";
import PageBackground from "@/components/common/PageBackground";
import Header from "@/components/sections/Header/Header";
import Hero from "@/components/sections/Hero/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Rules from "@/components/sections/RulesSection/Rules";
import Amenities from "@/components/sections/Amenities";
import Rooms from "@/components/sections/Room/Rooms";
import VideoTour from "@/components/sections/VideoTour/VideoTour";
import GuestReviews from "@/components/sections/GuestReviews/GuestReviews";
import Package from "@/components/sections/PackageGilmar/Package";
import Magazine from "@/components/sections/Magazine/Magazine";
import Faq from "@/components/sections/Faq/Faq";
import Footer from "@/components/sections/Footer";



export default function Home() {
  return (
    <Box component="main" sx={{ position: "relative" }}>
      {/* Global decorative circles, behind everything */}
      <PageBackground />

      {/* Content layer, above the circles */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Header />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(64px, 14vw, 140px)",
          }}
        >
          <Hero />
          <AboutUs />
          <Rules />
          <Amenities />
          <Rooms />
          <VideoTour />
          <GuestReviews />
          <Package />
          <Magazine />
          <Faq />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}