import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Button from "../../Common/Button";

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>EduBuzz || Sign Up Page</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/3v07HyY/6300830-removebg-preview.png"
            alt=""
          />
          <div className="card shrink-0 w-full md:w-2/3 bg-slate-200 ">
            <div>
              <h3 className="text-4xl text-center font-bold mt-8">Sign Up</h3>
            </div>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Full Name :-</span>
                </label>
                <input
                  type="email"
                  placeholder="Type You'r Name Here ... "
                  className="input  input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email Address Here ...."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">
                    Your Profile Image{" "}
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="You'r Profile Image Link Here ...."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="You're password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Login</button> */}
                <Button name="SignUp" />
              </div>
              <div className="form-control">
                {/* <button className="btn btn-primary">Sign With Google</button> */}
                <Button name="Sign With Google" />
              </div>
            </form>
            <div className="text-center text-lg mb-6">
              <p>
                Login You'r Account{" "}
                <Link
                  className="text-[#E28519] underline font-semibold"
                  to="/login"
                >
                  Login In
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
