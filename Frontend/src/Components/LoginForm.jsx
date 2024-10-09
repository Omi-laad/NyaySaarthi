import React from 'react';
import Lawyers from '../assets/lawyers.png'; // Path to the Lawyers image
import Google from '../assets/google-icon.png'; // Path to the Google icon

const LoginForm = ({ toggleForm }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-blue-50">
      <div className="bg-white shadow-md rounded-lg p-8 flex items-center max-w-4xl"> {/* Set a max-width for the form */}
        
        {/* Left Side Image */}
        <div className="hidden md:flex md:w-1/2 h-full"> {/* Use flex for better control */}
          <img src={Lawyers} alt="Lawyers" className="h-full w-full object-cover scale-125" /> {/* Increase scale */}
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl font-bold mb-4">Sign in to your account</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-sm">Remember me</label>
              </div>
              <a href="#" className="text-sm text-orange-500">Forgot password?</a>
            </div>
            <button className="w-full bg-orange-500 text-white rounded-3xl py-2">Login</button>
          </form>

          {/* Social Login Buttons */}
          <div className="mt-4 flex justify-center space-x-4">
            {/* Google Button with Icon */}
            <button className="bg-gray-200 rounded-full p-2 flex items-center">
              <img src={Google} alt="Google" className="h-6 w-6" />
            </button>
          </div>

          <p className="text-sm mt-2 text-center">
            Don't have an account?{' '}
            <span
              className="text-orange-500 cursor-pointer"
              onClick={toggleForm}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
