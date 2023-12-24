import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout";
import Details from "../pages/Details/Details";
import LogIn from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import VerifyLogin from "../pages/VerifyLogin/VerifyLogin";
import PublicRoute from "./PublicRoute";
import Cart from "../pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Details />,
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            {" "}
            <LogIn />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/verify/:token",
    element: (
      <PublicRoute>
        <VerifyLogin />
      </PublicRoute>
    ),
  },
]);

export default router;
