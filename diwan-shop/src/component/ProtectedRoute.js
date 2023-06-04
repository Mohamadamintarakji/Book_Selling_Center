import { Navigate } from "react-router-dom";
import Loading from "./Loading";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useSelector((state) => state.auth);
  if (loading) return <Loading />;
  console.log(user.isAdmin);
  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
