import React from "react";
import { Box, Typography } from "@mui/material";

const Banner: React.FC = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          component="img"
          src="/1.png"
          sx={{ height: { xs: 300, md: 500 } }}
        />
        <Typography variant="h1" textAlign="center">
          Some Text
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
