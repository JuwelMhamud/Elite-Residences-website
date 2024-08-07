import { FaEyeSlash, FaFacebook } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const LogIn = () => {
  const [showPassword2, setShowPassword2] = useState();
  const {logInUser, googleLogin} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin= (e)=>{
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)


    logInUser(email, password)
    .then(result=>{ console.log(result.user)
      navigate(location?.state ? location.state : '/' )
    })
    .catch(err=> console.log(err))
  }

  const handleGoogleLogIn =()=>{
    googleLogin()
    .then(result=>console.log(result.user))
  }
  return (
    <div className="">
      <div className="mx-auto max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-6 text-3xl font-semibold text-center">
          Login to Your Account
        </h2>
        <form noValidate="" action="" className="space-y-8" onSubmit={handleLogin}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password 
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <div className="border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 "><div className="relative">
              <input
                type={showPassword2 ? "Text" : "password"}
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 "
              />
              <span className="absolute right-3 top-3  cursor-pointer" onClick={()=> setShowPassword2(!showPassword2)}> {showPassword2 ? <FaEyeSlash /> : <FaEye/>}</span>
              </div>
               

              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md text-white bg-green-500"
          >
            Log In
          </button>
        </form>

      
        <div className="my-6 space-y-4">
          <button
            onClick={handleGoogleLogIn}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
         
          <button
            aria-label="Login with Twitter"
            role="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <div className="text-xl ml-3"><FaFacebook /></div>
            <p>Login with Facebook</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>

        <p className="text-sm text-center dark:text-gray-600">
          Dont have account?
         <Link to="/Register"> <a
            href="#"
            rel="noopener noreferrer"
            className="focus:underline underline"
          >
            Register here
          </a></Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
