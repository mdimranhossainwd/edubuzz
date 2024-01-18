import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Authprovider/AuthProvider";
import Button from "../../Common/Button";

const SignIn = () => {
  const { user, googleAuthentication, createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const profile = form.profile.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        // handleUpdate(name);
        const user = result.user;
        console.log("created user", user);
        // navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => console.log(error));
  };

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
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Full Name :-</span>
                </label>
                <input
                  type="name"
                  placeholder="Type You'r Name Here ... "
                  className="input  input-bordered"
                  name="name"
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
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">
                    Your Profile Image{" "}
                  </span>
                </label>
                <input
                  type="profile"
                  placeholder="You'r Profile Image Link Here ...."
                  className="input input-bordered"
                  required
                  name="profile"
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
                  name="password"
                />
              </div>
              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Login</button> */}
                <Button name="SignUp" />
              </div>
              <div className="form-control">
                {/* <button className="btn btn-primary">Sign With Google</button> */}
                <div onClick={googleAuthentication}>
                  <Button name="Sign With Google" />
                </div>
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
