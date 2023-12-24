import { Outlet } from "react-router-dom";
import MyNavbar from "../components/shared/Navbar/Navbar";
import { Footer } from "../components/shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const Layout = () => {
  const { isLoading } = useSelector((state) => state.auth);
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <MyNavbar />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
