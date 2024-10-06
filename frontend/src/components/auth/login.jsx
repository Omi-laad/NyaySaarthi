// import React, { useState } from 'react';
// import { NavLink, Link } from 'react-router-dom';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//         if (formData.email === "" || formData.password === "") {
//             alert('Both fields are required');
//             return;
//         }
//         // Handle form submit (to be integrated later)
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-100">
//             <form
//                 onSubmit={handleSubmit}
//                 className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
//             >
//                 <h2 className="text-center text-2xl mb-6 font-semibold">Login</h2>

//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                         Email
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         required
//                     />
//                 </div>

//                 <div className="mb-6">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//                         Password
//                     </label>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                         required
//                     />
//                 </div>

//                 <div className="flex items-center justify-between mb-4">
//                     <NavLink
//                         to='/landingpage'
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     >
//                         Login
//                     </NavLink>
//                 </div>

//                 {/* Links for registration and forgot password */}
//                 <div className="flex items-center justify-between text-sm">
//                     <NavLink to="/register" className="text-blue-500 hover:text-blue-700">
//                         Don't have an account? Register
//                     </NavLink>
//                     <NavLink to="/forgot-password" className="text-blue-500 hover:text-blue-700">
//                         Forgot Password?
//                     </NavLink>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/admin/login', {
                email,
                password,
            });
            // handle successful login, e.g., redirecting
            console.log('Login successful', response.data);
        } catch (error) {
            setErrorMessage('Invalid login credentials');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">

                {/* Left side with image */}
                <div className="hidden md:flex w-1/2 bg-gray-200 justify-center items-center">
                    <img
                        src="https://example.com/admin-image.png"
                        alt="Admin"
                        className="w-full object-cover"
                    />
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

                        {/* Error Message */}
                        {errorMessage && (
                            <div className="text-red-500 text-sm">{errorMessage}</div>
                        )}

                        {/* Terms and Conditions */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="terms"
                                className="mr-2"
                                required
                            />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                                I accept the{' '}
                                <a href="/terms" className="text-orange-600">
                                    terms of use
                                </a>{' '}
                                and{' '}
                                <a href="/privacy" className="text-orange-600">
                                    privacy policy
                                </a>
                            </label>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-500 transition duration-300"
                        >
                            Login
                        </button>
                        <div className="flex items-center justify-between text-sm">
                            <NavLink to="/register" className="text-orange-600 hover:text-orange-200">
                                Don't have an account? Register
                            </NavLink>
                            <NavLink to="/forgot-password" className="text-orange-500 hover:text-orange-200">
                                Forgot Password?
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
