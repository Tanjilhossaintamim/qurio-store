import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h1>footer</h1>
    </div>
  );
};

export default Layout;
