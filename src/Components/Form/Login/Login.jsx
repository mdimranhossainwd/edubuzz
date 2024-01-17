import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../../Common/Button";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>EduBuzz || Sign In Page</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/3v07HyY/6300830-removebg-preview.png"
            alt=""
          />
          <div className="card shrink-0 md:w-2/3 w-full bg-slate-200 py-4">
            <div>
              <h3 className="text-4xl text-center font-bold mt-8">Sign In</h3>
            </div>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Login</button> */}
                <Button name="Login" />
              </div>
              <div className="form-control">
                {/* <button className="btn btn-primary">Sign With Google</button> */}
                <Button name="Sign With Google" />
              </div>
            </form>
            <div className="text-center text-lg mb-6">
              <p>
                Create an Account{" "}
                <Link
                  className="text-[#E28519] underline font-semibold"
                  to="/signup"
                >
                  Sign Up
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
