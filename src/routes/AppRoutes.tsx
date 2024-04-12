import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "../config/layout/Default";
import DefaultLayoutLogged from "../config/layout/LayoutDefaltLoged";
import CreateAccount from "../pages/CreateAccount";
import Login from "../pages/Login";
import Messages from "../pages/Messages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout page={<Login />} />,
  },
  {
    path: "/creat-acoount",
    element: <DefaultLayout page={<CreateAccount />} />,
  },
  {
    path: "/messages",
    element: <DefaultLayoutLogged page={<Messages />} />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
