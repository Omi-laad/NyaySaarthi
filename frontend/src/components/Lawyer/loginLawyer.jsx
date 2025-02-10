// import React, { useState } from 'react';
// import axios from 'axios';
// import { NavLink } from 'react-router-dom';
// import Logo from "../../images/Logo.png"
// import { useNavigate } from 'react-router-dom';
// import Loading from '../common/Loading';
// import toast, { Toaster } from 'react-hot-toast';

// const LoginLawyer = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         if (!email || !password) {
//             alert("Email password required")
//             return
//         }

//         try {
//             setLoading(true);
//             const response = await axios.post("/api/v1/lawyer/login", {
//                 email: email,
//                 password: password
//             });
//             if (response.data) {
//                 const message = response.data.message || "Login Successfull welcome ";
//                 console.log(typeof (message));
//                 toast.success(message); // Ensure your API returns a message

//                 navigate('/lawyer-dashboard');
//             } else {
//                 alert("Invalid credentials");
//             }
//         } catch (error) {
//             const errorMessage = error.response?.data?.message || "Invalid credentials";
//             alert(errorMessage);
//         }
//         finally {
//             setLoading(false);
//         }
//     }
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             {/* <Toaster position="top-right" reverseOrder={false} /> */}

//             <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">

//                 {/* Left side with image */}
//                 <div className="hidden md:flex w-1/2 bg-gray-200 justify-center items-center">
//                     <img
//                         src={Logo}
//                         alt="Logo"
//                         className="w-full object-cover"
//                     />
//                 </div>

//                 {/* Right side with form */}
//                 <div className="w-full md:w-1/2 p-8">
//                     <h2 className="text-2xl font-semibold text-orange-600 mb-6">
//                         Sign in to your account
//                     </h2>
//                     <form onSubmit={handleLogin} className="space-y-4">

//                         {/* Email */}
//                         <div>
//                             <label htmlFor="email" className="text-gray-700">
//                                 Email Address
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
//                                 placeholder="Enter your email"
//                                 required
//                             />
//                         </div>

//                         {/* Password */}
//                         <div>
//                             <label htmlFor="password" className="text-gray-700">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
//                                 placeholder="Enter your password"
//                                 required
//                             />
//                         </div>

//                         {/* Error Message */}
//                         {errorMessage && (
//                             <div className="text-red-500 text-sm">{errorMessage}</div>
//                         )}

//                         {/* Terms and Conditions */}
//                         <div className="flex items-center">
//                             <input
//                                 type="checkbox"
//                                 id="terms"
//                                 className="mr-2"
//                                 required
//                             />
//                             <label htmlFor="terms" className="text-sm text-gray-600">
//                                 I accept the{' '}
//                                 <a href="/terms" className="text-orange-600">
//                                     terms of use
//                                 </a>{' '}
//                                 and{' '}
//                                 <a href="/privacy" className="text-orange-600">
//                                     privacy policy
//                                 </a>
//                             </label>
//                         </div>

//                         {/* Login Button */}
//                         <button
//                             type="submit"
//                             onClick={handleLogin}
//                             className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300"
//                         >
//                             Login
//                         </button>
//                         <div className="flex items-center justify-between text-sm">
//                             <NavLink to="/registerlawyer" className="text-orange-600 hover:text-orange-200">
//                                 Don't have an account? Register
//                             </NavLink>
//                             <NavLink to="/forgot-password" className="text-orange-500 hover:text-orange-200">
//                                 Forgot Password?
//                             </NavLink>
//                         </div>
//                         <Loading loading={loading} />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginLawyer;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { NavLink } from 'react-router-dom';
// import Logo from "../../images/Logo.png";
// import { useNavigate } from 'react-router-dom';
// import Loading from '../common/Loading';
// import toast from 'react-hot-toast';

// const LoginLawyer = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         if (!email || !password) {
//             toast("Email and password are required");
//             return;
//         }

//         try {
//             setLoading(true);
//             const response = await axios.post("/api/v1/lawyer/login", {
//                 email: email,
//                 password: password
//             });

//             // Log the full response for debugging
//             // console.log(response);

//             if (response.data) {
//                 const message = response.data.message || "Login Successful, welcome!";
//                 toast.success(message);

//                 // Access the accessToken from the response data
//                 const accessToken = response.data.data?.accessToken;
//                 if (accessToken) {
//                     localStorage.setItem('accessToken', accessToken); // Store the access token in local storage
//                 } else {
//                     // console.error("Access token is not present in the response");
//                     toast.error("Login failed. Access token not found.");
//                 }

//                 navigate('/lawyer-dashboard');
//             } else {
//                 toast.error("Invalid credentials");
//             }
//         } catch (error) {
//             const errorMessage = error.response?.data?.message || "Invalid credentials";
//             toast.error("Invalid credentials");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
//                 {/* Left side with image */}
//                 <div className="hidden md:flex w-1/2 bg-gray-200 justify-center items-center">
//                     <img src={Logo} alt="Logo" className="w-full object-cover" />
//                 </div>

//                 {/* Right side with form */}
//                 <div className="w-full md:w-1/2 p-8">
//                     <h2 className="text-2xl font-semibold text-orange-600 mb-6">
//                         Sign in to your account
//                     </h2>
//                     <form onSubmit={handleLogin} className="space-y-4">
//                         {/* Email */}
//                         <div>
//                             <label htmlFor="email" className="text-gray-700">
//                                 Email Address
//                             </label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
//                                 placeholder="Enter your email"
//                                 required
//                             />
//                         </div>

//                         {/* Password */}
//                         <div>
//                             <label htmlFor="password" className="text-gray-700">
//                                 Password
//                             </label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
//                                 placeholder="Enter your password"
//                                 required
//                             />
//                         </div>

//                         {/* Login Button */}
//                         <button
//                             type="submit"
//                             className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300"
//                         >
//                             Login
//                         </button>
//                         <div className="flex items-center justify-between text-sm">
//                             <NavLink to="/registerlawyer" className="text-orange-600 hover:text-orange-200">
//                                 Don't have an account? Register
//                             </NavLink>
//                             <NavLink to="/forgot-password" className="text-orange-500 hover:text-orange-200">
//                                 Forgot Password?
//                             </NavLink>
//                         </div>
//                         <Loading loading={loading} />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginLawyer;

import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Logo from "../../images/Logo.png";
import { useNavigate } from "react-router-dom";
import Loading from "../common/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL } from "../../config";
// import {toast} from "sonner"

const LoginLawyer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    try {
      // setLoading(true);
      const response = await axios.post(`${API_BASE_URL}/api/v1/lawyer/login`, {
        email: email,
        password: password,
      });

      if (response.data.message) {
        const message = response?.data?.message || "Login Successful, welcome!";

        const accessToken = response.data.data?.accessToken;
        if (accessToken) {
          localStorage.setItem("accessToken", accessToken);
        } else {
          toast.error("Login failed. Access token not found.");
        }
        toast.success(message);
        setTimeout(() => {
          navigate("/lawyer-dashboard");
        }, 2000);
      } else {
        toast.error("Invalid credentials else block");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Invalid credentials";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer position="top-right" />
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        {/* Left side with image */}
        <div className="hidden md:flex w-1/2 bg-gray-200 justify-center items-center">
          <img src={Logo} alt="Logo" className="w-full object-cover" />
        </div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-orange-600 mb-6">
            Sign in to your account
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300"
            >
              Login
            </button>
            <div className="flex items-center justify-between text-sm">
              <NavLink
                to="/registerlawyer"
                className="text-orange-600 hover:text-orange-200"
              >
                Don't have an account? Register
              </NavLink>
              <NavLink
                to="/forgot-password"
                className="text-orange-500 hover:text-orange-200"
              >
                Forgot Password?
              </NavLink>
            </div>
            <Loading loading={loading} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginLawyer;
