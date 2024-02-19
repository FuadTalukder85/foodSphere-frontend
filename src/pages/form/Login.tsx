import Container from "../../components/container/Container";

const Login = () => {
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
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-[#00715D] font-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
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
                  required
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
                    <a
                      className="text-[#FFB606] link font-bold ps-2"
                      href="register"
                    >
                      please register
                    </a>
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
