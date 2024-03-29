import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Form/Login/Login";
import SignIn from "../Components/Form/SignIn/SignIn";
import UpdateForm from "../Components/Form/Update/UpdateForm";
import AllAssainmentPage from "../Layout/AllAssainmentPage";
import CreatePage from "../Layout/CreatePage";
import HomeLayout from "../Layout/HomeLayout";
import MainLayout from "../Layout/MainLayout";
import ViewDetails from "../Layout/ViewDetails";
import PrivateRoute from "../Private/PrivateRoute";

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
        loader: () => fetch(`https://edubuzz-server-side.vercel.app/features`),
      },
      {
        path: "/create",
        element: (
          <PrivateRoute>
            <CreatePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/allassainments",
        element: (
          <PrivateRoute>
            <AllAssainmentPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateform/:id",
        element: <UpdateForm />,
        loader: ({ params }) =>
          fetch(
            `https://edubuzz-server-side.vercel.app/updateassainment/${params.id}`
          ),
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
