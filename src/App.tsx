import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./theme";
import Banner from "./components/Banner";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        backgroundImage: "url(/bg.png)",
        backgroundAttachment: "fixed",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <CssBaseline />
      <Banner />
      <Section3 />
      {/* <Section1 /> */}

      <Section2 />
    </Box>
  </ThemeProvider>
);

export default App;
