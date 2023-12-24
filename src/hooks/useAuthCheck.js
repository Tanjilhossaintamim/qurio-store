import { useCheckLoginMutation } from "../redux/features/auth/authApi";

const useAuthCheck = () => {
  const [checkLogin, { data, isError, isSuccess }] = useCheckLoginMutation();

  return [checkLogin, data, isError, isSuccess];
};

export default useAuthCheck;
