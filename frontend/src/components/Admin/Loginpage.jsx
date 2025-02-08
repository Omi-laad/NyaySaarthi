// import React, { useState } from 'react';
// import axios from 'axios';
// import Logo from "../../images/Logo.png"
// import { useNavigate } from 'react-router-dom';
// import toast from "react-hot-toast"

// import Loading from '../common/Loading';

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (email === "" || password === "") {
//             alert('email password required')
//             return
//         }
//         try {
//             setLoading(true);
//             const response = await axios.post('/admins/login', {
//                 email: email,
//                 password: password
//             });
//             if (response.status == 200) {
//                 localStorage.setItem('token', response.data.accessToken)
//                 localStorage.setItem('refresh', response.data.refreshToken)
//                 alert(response.data.message)
//                 navigate('/admin/dashboard')
//             }
//             else {
//                 toast.sucess("invalid credentials")
//             }
//         } catch (error) {
//             alert("invalid ")
//             console.log(error)
//         }
//         finally {
//             setLoading(false)
//         }

//     }

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//             <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">

//                 {/* Left side with image */}
//                 <div className="hidden md:flex w-1/2 bg-gray-200 justify-center items-center">
//                     <img
//                         src={Logo}
//                         alt="Admin"
//                         className="w-full object-cover"
//                     />
//                 </div>

//                 {/* Right side with form */}
//                 <div className="w-full md:w-1/2 p-8">
//                     <h2 className="text-2xl font-semibold text-orange-600 mb-6">
//                         Sign in to your account
//                     </h2>
//                     <form className="space-y-4">

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
//                         {/* {errorMessage && (
//                             <div className="text-red-500 text-sm">{errorMessage}</div>
//                         )} */}

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
//                             onClick={handleSubmit}
//                             className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300"
//                         >
//                             Login
//                         </button>
//                         <Loading loading={loading} />
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;

//login page
import React, { useState } from "react";
import axios from "axios";
import Logo from "../../images/Logo.png";
import { useNavigate } from "react-router-dom";
import Loading from "../common/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Email and password are required");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post("/api/v1/admins/login", {
        email: email,
        password: password,
      });
      // Accessing response directly
      if (response.data) {
        // localStorage.setItem('token', response.data.accessToken);
        // localStorage.setItem('refresh', response.data.refreshToken);
        toast.success(response.data.message); // Ensure your API returns a message
        setTimeout(() => {
          navigate("/admindashboard");
        }, 2000);
      } else {
        alert("Invalid credentials");
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
        <ToastContainer />
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="hidden md:flex w-1/2 bg-gray-200 justify-center items-center">
          <img src={Logo} alt="Admin" className="w-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-orange-600 mb-6">
            Sign in to your account
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
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
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I accept the{" "}
                <a href="/terms" className="text-orange-600">
                  terms of use
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-orange-600">
                  privacy policy
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300"
            >
              Login
            </button>
            <Loading loading={loading} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
