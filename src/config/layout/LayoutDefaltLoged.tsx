import React from "react";
import { Grid } from "@mui/material";

interface DefaultLayoutProps {
  page: React.ReactNode;
}

const DefaultLayoutLogged: React.FC<DefaultLayoutProps> = ({ page }) => {
  return (
    <>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          backgroundColor: " rgb(88, 88, 88)",
        }}
      >
        {page}
      </Grid>
    </>
  );
};

export default DefaultLayoutLogged;
