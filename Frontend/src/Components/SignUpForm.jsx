import React from 'react';
import Justice from '../assets/justice-icon.png'; // Path to the Justice image
import Google from '../assets/google-icon.png'; // Path to the Google icon

const SignUpForm = ({ toggleForm }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-blue-50">
      <div className="bg-white shadow-md rounded-lg p-8 flex items-center max-w-4xl"> {/* Set a max-width for the form */}
        
        {/* Left Side Image */}
        <div className="hidden md:block w-1/2 h-full"> {/* Set full height */}
          <img src={Justice} alt="Justice" className="h-full w-full object-cover" /> {/* Use object-cover to fit the image */}
        </div>
        
        {/* Form Section */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl font-bold mb-4">Create Account</h2>
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
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm">
                I accept the <span className="text-orange-500">terms and conditions</span>
              </label>
            </div>
            <button className="w-full bg-orange-500 text-white rounded-3xl py-2">Sign Up</button>
          </form>

          {/* Social Login Buttons */}
          <div className="mt-4 flex justify-center space-x-4">
            <button className="bg-gray-200 rounded-full p-2 flex items-center">
              <img src={Google} alt="Google" className="h-6 w-6" />
              
            </button>
          </div>

          <p className="text-sm mt-2 text-center">
            Already have an account?{' '}
            <span
              className="text-orange-500 cursor-pointer"
              onClick={toggleForm}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
