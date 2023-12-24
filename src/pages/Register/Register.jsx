import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
//   import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { useSingupMutation } from "../../redux/features/auth/authApi";
import { useEffect } from "react";
import Swal from "sweetalert2";

export default function Register() {
  const [signup, { data, isLoading, isError, error, isSuccess }] =
    useSingupMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   const { state } = useLocation();

  const handleLogin = (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };
    signup(userInfo);
  };

  useEffect(() => {
    if (isError) {
      toast.error(error.data.message);
      console.log(error);
    }
    if (isSuccess) {
      Swal.fire({
        title: "Success",
        text: "we send a verification link to your email please check !",
        icon: "success"
      });
    }
  }, [data, isError, isSuccess, error]);

  return (
    <div className="flex justify-evenly flex-col-reverse md:flex-row-reverse py-16">
      <Card className="md:w-96">
        <CardHeader
          shadow={false}
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" className="-mb-16">
            Sign UP
          </Typography>
        </CardHeader>
        <form onSubmit={handleSubmit(handleLogin)}>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Name"
              type="text"
              size="lg"
              {...register("name", { required: true })}
              error={typeof errors?.name === "object"}
            />
            {errors && errors?.name?.type === "required" && (
              <Typography
                variant="small"
                className="-mt-2 font-normal"
                color="red"
              >
                This field is required
              </Typography>
            )}
            <Input
              label="Email"
              size="lg"
              {...register("email", { required: true })}
              error={typeof errors?.email === "object"}
            />

            {errors && errors?.email?.type === "required" && (
              <Typography
                variant="small"
                className="-mt-2 font-normal"
                color="red"
              >
                This field is required
              </Typography>
            )}
            <Input
              label="Phone"
              type="tel"
              size="lg"
              {...register("phone", { required: true })}
              error={typeof errors?.phone === "object"}
            />
            {errors && errors?.phone?.type === "required" && (
              <Typography
                variant="small"
                className="-mt-2 font-normal"
                color="red"
              >
                This field is required
              </Typography>
            )}
            <Input
              label="Password"
              type="password"
              size="lg"
              {...register("password", { required: true })}
              error={typeof errors?.password === "object"}
            />
            {errors && errors?.password?.type === "required" && (
              <Typography
                variant="small"
                className="-mt-2 font-normal"
                color="red"
              >
                This field is required
              </Typography>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            <Button color="green" type="submit" variant="gradient" fullWidth>
              {isLoading ? (
                <div className="flex justify-center">
                  <Spinner />
                </div>
              ) : (
                "Sign Up"
              )}
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Link to="/login">
                <Typography
                  as="span"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                >
                  Sign In
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </form>
      </Card>
      {/* <div>
              <Lottie options={{ animationData: Illustration }} width={350} />
            </div> */}
    </div>
  );
}
