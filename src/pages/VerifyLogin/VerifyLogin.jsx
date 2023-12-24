import { useNavigate, useParams } from "react-router-dom";
import { useVerifyMutation } from "../../redux/features/auth/authApi";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const VerifyLogin = () => {
  const { token } = useParams();
  const [verify, { isError, isLoading, isSuccess }] = useVerifyMutation();
  const navigate = useNavigate();

  useEffect(() => {
    verify({ token });
  }, [token, verify]);

  let content = null;
  if (isLoading) {
    content = <p className="mb-6 text-center">checking...</p>;
  }
  if (isError) {
    content = <p className="mb-6 text-center text-red-600">failed</p>;
  }
  if (isSuccess) {
    content = <p className="mb-6 text-center text-green-700">Success</p>;
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Helmet>
        <title>Qrio || Verify</title>
      </Helmet>
      <div className="max-w-md p-8 bg-white shadow-md rounded-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Account Verification
        </h2>
        {content}

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyLogin;
