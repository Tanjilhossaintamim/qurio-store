import { Outlet } from "react-router-dom";
import MyNavbar from "../components/shared/Navbar/Navbar";
import { Footer } from "../components/shared/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <MyNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
