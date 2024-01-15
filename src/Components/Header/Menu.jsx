import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Menu = () => {
  const navLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-[#E28519]" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/create"
        className={({ isActive }) => (isActive ? "text-[#E28519]" : "")}
      >
        Create
      </NavLink>

      <NavLink
        to="/allassainments"
        className={({ isActive }) => (isActive ? "text-[#E28519]" : "")}
      >
        All Assainment
      </NavLink>

      <NavLink
        to="/service"
        className={({ isActive }) => (isActive ? "text-[#E28519]" : "")}
      >
        Services
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? "text-[#E28519]" : "float-right block"
        }
      >
        Login
      </NavLink>
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-7 z-[1] p-6 md:p-0 gap-2 md:gap-0 shadow bg-base-300 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="font-bold normal-case text-2xl flex items-center gap-3">
            <Logo />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[17px] font-semibold gap-7">
            {navLink}
          </ul>
        </div>
        {/* <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1522&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Md Imran Hossain</a>
              </li>
              <li>
                <a>webdesign7498@gmail.com</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div> */}

        {/* {user?.email ? (
          <>
            <div className="navbar-end mr-5 md:mr-0">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>{user?.displayName}</a>
                  </li>
                  <li>
                    <a> {user?.email} </a>
                  </li>
                  <li onClick={handleLogOut}>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
};

export default Menu;
