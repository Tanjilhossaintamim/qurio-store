import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import useAuthCheck from "./hooks/useAuthCheck";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { removeUser, setUser } from "./redux/features/auth/authSlice";

function App() {
  const [checkLogin, data, isError] = useAuthCheck();
  const dispatch = useDispatch();
  useEffect(() => {
    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (data?.payload?._id) {
      dispatch(setUser(data?.payload));
    }
    if (isError) {
      dispatch(removeUser());
    }
  }, [data, dispatch, isError]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
