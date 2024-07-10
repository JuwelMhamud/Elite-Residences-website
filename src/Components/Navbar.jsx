import { useContext } from "react";
import { Link } from "react-router-dom";
import auth from "../../Firebase.config";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user , logOutUser } = useContext(AuthContext);

  const handleLogOut = ()=>{
    logOutUser(auth)
    .then()
    .catch()
  }
  const links = (
    <>
      <Link to="/">
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link to="/Estate">
        <li>
          <a>Estate</a>
        </li>
      </Link>
      <Link to="/ContactUs">
        <li>
          <a>Contact Us</a>
        </li>
      </Link>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">Elite Residance</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end" >
          <span>
            {
              user ? <div className="avatar">
              <div className="w-12 mr-4 my-auto rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>: <span></span>
            }
          </span>
          {user ? (
            <Link  >
              <a className="btn" onClick={handleLogOut} >Log Out</a>
            </Link>
          ) : (
            <Link to="/LogIn">
              <a className="btn" >Log In</a>
            </Link>
          )}
        </div>
      </div>
      ;
    </div>
  );
};

export default Navbar;
