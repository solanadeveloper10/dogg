import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#c7fe03",
      light: "#86de08",
    },
    secondary: {
      main: "#86de08",
    },
    background: {
      default: "#fff",
      paper: "#fff",
    },
    text: {
      primary: "#473732",
      secondary: "#473732",
    },
    divider: "#e0ddd4",
  },
  typography: {
    fontFamily:
      "'SegoePrint', 'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontSize: "3rem", fontWeight: 700 },
    h2: { fontSize: "2.5rem", fontWeight: 600 },
    h3: { fontSize: "2rem", fontWeight: 500 },
    h4: { fontSize: "1.5rem", fontWeight: 500 },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "1rem", fontWeight: "bold" },
    button: { textTransform: "none" },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {},
      },
    },
  },
});
