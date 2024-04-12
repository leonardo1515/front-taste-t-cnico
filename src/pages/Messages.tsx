import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageMessags from "../components/message/Messages";
import { Box } from "@mui/material";

const Messags: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logged = localStorage.getItem("userToken");
    if (!logged) {
      navigate("/");
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <PageMessags />
    </Box>
  );
};

export default Messags;
