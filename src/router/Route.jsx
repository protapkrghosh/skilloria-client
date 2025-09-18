import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

export const router = createBrowserRouter([
   {
      path: "/",
      Component: MainLayout,
      children: [
         {
            index: true,
            Component: Home,
         },
         {
            path: "/login",
            Component: Login,
         },
         {
            path: "/register",
            Component: Register,
         },
      ],
   },
]);
