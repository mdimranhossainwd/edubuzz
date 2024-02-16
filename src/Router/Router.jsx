import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Form/Login/Login";
import SignIn from "../Components/Form/SignIn/SignIn";
import HomeLayout from "../Layout/HomeLayout";
import MainLayout from "../Layout/MainLayout";
import ViewDetails from "../Layout/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
      },
      {
        path: "/viewdetails/:_id",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch(`http://localhost:5000/features/`),
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
