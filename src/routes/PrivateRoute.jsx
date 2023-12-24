import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn, loading } = useSelector((state) => state.auth);
  const { pathname } = useLocation();
  if (loading) return <div>loading...</div>;

  return isLoggedIn ? (
    children
  ) : (
    <Navigate state={{ from: pathname }} to={"/login"} />
  );
};

export default PrivateRoute;
