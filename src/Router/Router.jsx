import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import HomeLayout from "../Layout/HomeLayout";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
