import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Form/Login/Login";
import SignIn from "../Components/Form/SignIn/SignIn";
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
  {
    path: "/signup",
    element: <SignIn />,
  },
]);

export default router;
