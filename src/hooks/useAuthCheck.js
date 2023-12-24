import { useCheckLoginMutation } from "../redux/features/auth/authApi";

const useAuthCheck = () => {
  const [checkLogin, { data, isError }] = useCheckLoginMutation();

  return [checkLogin, data, isError];
};

export default useAuthCheck;
