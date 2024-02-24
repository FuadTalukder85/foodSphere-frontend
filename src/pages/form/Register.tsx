import Container from "../../components/container/Container";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useRegisterUsersMutation } from "../../redux/features/auth/AuthApi";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [users] = useRegisterUsersMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await users(data);
    } catch (error) {
      console.error("Registration failed:", error);
    }

    console.log(data);
  };
  return (
    <Container>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col gap-10">
          {/* lg:flex-row-reverse */}
          <div className="text-center">
            <span className="text-4xl font-bold text-[#00715D]">
              Please Register <span className="text-[#FFB606]">FoodSphere</span>
            </span>
            <p className="py-3 text-[#00715D] font-bold">
              Your Help Turn Into Smiles.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-[#00715D] font-bold">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name")}
                />
              </div>
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
                        Allready have an account?
                      </span>
                    </span>
                    <Link
                      to="/login"
                      className="text-[#FFB606] link font-bold ps-2"
                    >
                      please login
                    </Link>
                  </p>
                </label>
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary bg-[#FFB606] border-none text-white tracking-widest font-bold"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
