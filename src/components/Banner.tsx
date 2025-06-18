import React from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Banner: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box
        height={80}
        display='flex'
        justifyContent={{ xs: "end", md: "space-around" }}
        alignItems='center'
        sx={{ background: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)" }}
        px={2}
      >
        {isMobile ? (
          <>
            <IconButton
              color='inherit'
              onClick={handleMenuOpen}
              sx={{
                background: "#fff",
                color: "#1e3c72",
                borderRadius: "30px",
                mx: 1,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
            >
              <MenuItem onClick={handleMenuClose}>
                <Button
                  variant='contained'
                  fullWidth
                  sx={{
                    background: "#fff",
                    color: "#1e3c72",
                    borderRadius: "30px",
                    boxShadow: "0 4px 20px 0 rgba(30,60,114,0.15)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    px: 4,
                    mx: 1,
                    transition: "all 0.3s",
                    "&:hover": {
                      background: "#e3e9f7",
                      color: "#2a5298",
                      boxShadow: "0 6px 24px 0 rgba(30,60,114,0.25)",
                    },
                  }}
                >
                  Telegram
                </Button>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button
                  variant='contained'
                  fullWidth
                  sx={{
                    background: "#fff",
                    color: "#1e3c72",
                    borderRadius: "30px",
                    boxShadow: "0 4px 20px 0 rgba(30,60,114,0.15)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    px: 4,
                    mx: 1,
                    transition: "all 0.3s",
                    "&:hover": {
                      background: "#e3e9f7",
                      color: "#2a5298",
                      boxShadow: "0 6px 24px 0 rgba(30,60,114,0.25)",
                    },
                  }}
                >
                  Twitter
                </Button>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button
                  variant='contained'
                  fullWidth
                  sx={{
                    background: "#fff",
                    color: "#1e3c72",
                    borderRadius: "30px",
                    boxShadow: "0 4px 20px 0 rgba(30,60,114,0.15)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    px: 4,
                    mx: 1,
                    transition: "all 0.3s",
                    "&:hover": {
                      background: "#e3e9f7",
                      color: "#2a5298",
                      boxShadow: "0 6px 24px 0 rgba(30,60,114,0.25)",
                    },
                  }}
                >
                  Dexscreener
                </Button>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button
                  variant='contained'
                  fullWidth
                  sx={{
                    background: "#fff",
                    color: "#1e3c72",
                    borderRadius: "30px",
                    boxShadow: "0 4px 20px 0 rgba(30,60,114,0.15)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    px: 4,
                    mx: 1,
                    transition: "all 0.3s",
                    "&:hover": {
                      background: "#e3e9f7",
                      color: "#2a5298",
                      boxShadow: "0 6px 24px 0 rgba(30,60,114,0.25)",
                    },
                  }}
                >
                  Dextools
                </Button>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button
              variant='contained'
              sx={{
                background: "#fff",
                color: "#1e3c72",
                borderRadius: "30px",
                boxShadow: "0 4px 20px 0 rgba(30,60,114,0.15)",
                fontWeight: 600,
                fontSize: "1rem",
                px: 4,
                mx: 1,
                transition: "all 0.3s",
                "&:hover": {
                  background: "#e3e9f7",
                  color: "#2a5298",
                  boxShadow: "0 6px 24px 0 rgba(30,60,114,0.25)",
                },
              }}
            >
              Telegram
            </Button>
            <Button
              variant='contained'
              sx={{
                background: "#fff",
                color: "#1e3c72",
                borderRadius: "30px",
                boxShadow: "0 4px 20px 0 rgba(30,60,114,0.15)",
                fontWeight: 600,
                fontSize: "1rem",
                px: 4,
                mx: 1,
                transition: "all 0.3s",
                "&:hover": {
                  background: "#e3e9f7",
                  color: "#2a5298",
                  boxShadow: "0 6px 24px 0 rgba(30,60,114,0.25)",
                },
              }}
            >
              Twitter
            </Button>
            <Button
              variant='contained'
              sx={{
                background: "#fff",
                color: "#1e3c72",
                borderRadius: "30px",
                boxShadow: "0 4px 20px 0 rgba(30,60,114,0.15)",
                fontWeight: 600,
                fontSize: "1rem",
                px: 4,
                mx: 1,
                transition: "all 0.3s",
                "&:hover": {
                  background: "#e3e9f7",
                  color: "#2a5298",
                  boxShadow: "0 6px 24px 0 rgba(30,60,114,0.25)",
                },
              }}
            >
              Dexscreener
            </Button>
            <Button
              variant='contained'
              sx={{
                background: "#fff",
                color: "#1e3c72",
                borderRadius: "30px",
                boxShadow: "0 4px 20px 0 rgba(30,60,114,0.15)",
                fontWeight: 600,
                fontSize: "1rem",
                px: 4,
                mx: 1,
                transition: "all 0.3s",
                "&:hover": {
                  background: "#e3e9f7",
                  color: "#2a5298",
                  boxShadow: "0 6px 24px 0 rgba(30,60,114,0.25)",
                },
              }}
            >
              Dextools
            </Button>
          </>
        )}
      </Box>
      <Box
        height='calc(100vh - 80px)'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Box
          component='img'
          src='/ramka.png'
          position='relative'
          sx={{ height: { xs: 400, md: 600 } }}
        ></Box>
        <Box
          component='img'
          src='/17.png'
          sx={{ position: "absolute", height: { xs: 280, md: 400 } }}
        />
        <Typography
          variant='h3'
          position='absolute'
          sx={{
            bottom: { xs: "calc(50% - 200px)", md: "calc(50% - 280px)" },
            fontSize: { xs: 9, md: 14 },
            fontWeight: "bold",
            zIndex: 111,
          }}
        >
          CA: DBnrkFbEiySXmqjquZtzyFSj5z75Kz1WhK71N9bdRjNF
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
