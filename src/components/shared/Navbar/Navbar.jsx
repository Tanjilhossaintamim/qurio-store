import React, { useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Collapse,
} from "@material-tailwind/react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import logo from "../../../assets/navlogo.png";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../redux/features/auth/authSlice";
import { useLogoutMutation } from "../../../redux/features/auth/authApi";

export default function MyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/"
          className="flex items-center hover:text-teal-500 text-base font-medium text-color-black-1"
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to={"/about"}
          className="flex items-center hover:text-teal-500 text-base font-medium text-color-black-1"
        >
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/blog"
          className="flex items-center hover:text-teal-500 text-base font-medium text-color-black-1"
        >
          blog
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/pages"
          className="flex items-center hover:text-teal-500 text-base font-medium text-color-black-1"
        >
          pages
        </NavLink>
      </Typography>
    </ul>
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handelLogout = () => {
    dispatch(removeUser());
    logout({});
  };

  return (
    <div className="sticky top-0 z-50">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center  max-w-7xl mx-auto justify-between text-blue-gray-900">
          <Link to={"/"} className="mr-4 cursor-pointer py-1.5 font-medium">
            <img src={logo} alt="logo" width={80} height={80} />
          </Link>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center  gap-x-1">
            <div className="lg:flex items-center hidden    gap-4">
              {/* //cart */}
              <Badge content="5">
                <span>
                  <MdOutlineShoppingBag className="text-3xl" />
                </span>
              </Badge>
              {!isLoggedIn ? (
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                  onClick={() => navigate("/login")}
                >
                  <span>Sign in</span>
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  size="sm"
                  className="hidden lg:inline-block border-2 text-teal-500 border-teal-500"
                  onClick={handelLogout}
                >
                  <span>Logout</span>
                </Button>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center hover:text-teal-500 text-base font-medium text-color-black-1 gap-x-1">
            {/* // cart button */}
            <Badge content="5">
              <span>
                <MdOutlineShoppingBag className="text-3xl" />
              </span>
            </Badge>
            {!isLoggedIn ? (
              <Button
                variant="gradient"
                size="sm"
                fullWidth
                className="ml-4"
                onClick={() => navigate("/login")}
              >
                <span>Sign in</span>
              </Button>
            ) : (
              <Button
                variant="outlined"
                size="sm"
                fullWidth
                className="ml-4 text-teal-500 border-2 border-teal-600"
                onClick={handelLogout}
              >
                <span>Logout</span>
              </Button>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
