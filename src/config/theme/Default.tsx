import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(53, 72, 123)",
          marginLeft: "14px",
          borderRadius: "20px",
          fontSize: "10px",
          textAlign: "center",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: " rgb(255, 255, 255)",
          borderRadius: "20px",
          border: " rgb(178, 174, 174)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "rgba(52, 53, 55,0.5)",
        },
      },
    },
  },
});

export default theme;
