// //sign up 


// import Link from "next/link";
// import devlogo from "../../../public/assets/images/devlogo.png";
// import Image from "next/image";
// import GoogleIcon from "@mui/icons-material/Google";
import React from "react";
const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-3">
        <div>
          {/* <Image
            className="mx-auto "
            src={devlogo}
            alt="Logo"
            width={100}
            height={100}
          /> */}
          <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
            Welcome Back to Interview Buddy
          </h2>
          <p className="mt-2 text-center text-2xl font-medium text-gray-900">
            SignUp here
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm space-y-6">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-full relative block w-full px-5 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-full relative block w-full px-5 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor=" password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-full relative block w-full px-5 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>


          <div>
          <a href="">
            <button
              type="submit"
              className="group relative w-full flex justify-center px-5 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              SignUp
            </button>
          </a>
          </div>
        </form>

        <div className="mt-6">
        <div className=" mt-2 ">
            <div className="flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="button"
              className="w-full flex justify-center items-center gap-x-2 px-5 py-3 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Login with Google</span>
              <p className="text-red-500" >
              SignUp with Google</p>
            </button>
          </div>
          <div>
            <p className="text-center pt-3 font-medium">Already have an account? <br/>
          <a href="/login">
            <span className="text-blue-800 font-medium">Login  </span>
            </a>
            here
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;