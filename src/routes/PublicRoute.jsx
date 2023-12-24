import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { isLoggedIn, loading } = useSelector((state) => state.auth);

  if (loading) return <div>loading...</div>;
  return isLoggedIn ? <Navigate to={"/"} /> : children;
};

export default PublicRoute;
