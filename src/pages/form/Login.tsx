import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/container/Container";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useLoginUsersMutation } from "../../redux/features/auth/AuthApi";
import { useAppDispatch } from "../../redux/Hook";
import { setUser } from "../../redux/features/auth/AuthSlice";
import Cookies from "js-cookie";
import { verifyToken } from "../../utils/VerifyToken";

const Login = () => {
  const location = useLocation();
  const nagivate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const [loggedUser] = useLoginUsersMutation();

  const { from } = location.state || { from: { pathname: "/" } };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await loggedUser(userInfo).unwrap();
      const user = verifyToken(res.token);

      const { token } = res;
      dispatch(setUser({ user: user, token: res.token }));
      localStorage.setItem("token", token);
      Cookies.set("refreshToken", token);
      nagivate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col gap-10">
          {/* lg:flex-row-reverse */}
          <div className="text-center">
            <span className="text-4xl font-bold text-[#00715D]">
              Please Login <span className="text-[#FFB606]">FoodSphere</span>
            </span>
            <p className="py-3 text-[#00715D] font-bold">
              Your Help Turn Into Smiles.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-[#00715D] font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-[#00715D] font-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password")}
                />
                <label className="label">
                  <a
                    href="#"
                    className="text-[#FFB606] font-bold label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
                <label className="label">
                  <p>
                    <span className="font-bold label-text-alt">
                      <span className="text-[#00715D]">
                        Don't have and account?
                      </span>
                    </span>
                    <Link
                      to="/register"
                      className="text-[#FFB606] link font-bold ps-2"
                    >
                      please register
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-[#FFB606] border-none text-white tracking-widest font-bold">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
