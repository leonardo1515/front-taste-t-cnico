import { createTheme } from "@mui/material";
import { blue, cyan } from "@mui/material/colors";

export const GlobalTheme = createTheme({
  palette: {
    primary: {
      main: "2f3d63"[700],
      dark: "2f3d63"[800],
      light: "2f3d63"[500],
      contrastText: "#fffff",
    },
    secondary: {
      main: cyan[700],
      dark: cyan[800],
      light: cyan[500],
      contrastText: "#fffff",
    },
    background: {
      default: "#f7f6f3",
      paper: "#fffff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 900,
      lg: 1200,
      xl: 1500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          width: "70px",
          fontSize: "12px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: " rgb(225, 218, 218)",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "100vh",
          backgroundColor: "#f7f6f3",
        },
      },
    },
  },
});
