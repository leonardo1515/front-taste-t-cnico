import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormCreate from "../components/formCreate/FormCreate";

const CreatAccount: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logged = sessionStorage.getItem("userToken");
    if (logged) {
      navigate("/messages");
    }
  }, []);

  return <FormCreate></FormCreate>;
};

export default CreatAccount;
