import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Authprovider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="justify-center flex">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }

  if (!user?.email) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
