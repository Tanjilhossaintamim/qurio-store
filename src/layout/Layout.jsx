import { Outlet } from "react-router-dom";
import MyNavbar from "../components/shared/Navbar/Navbar";
import { Footer } from "../components/shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
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
