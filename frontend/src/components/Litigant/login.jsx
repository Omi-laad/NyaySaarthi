import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Logo from "../../images/Logo.png"
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('/api/admin/login', {
    //             email,
    //             password,
    //         });
    //         // handle successful login, e.g., redirecting
    //         console.log('Login successful', response.data);
    //     } catch (error) {
    //         setErrorMessage('Invalid login credentials');
    //     }
    // };
    const handleLogin = () => {
        navigate('/navbar')
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">

                {/* Left side with image */}
                <div className="hidden md:flex w-1/2 bg-gray-200 justify-center items-center">
                    <img
                        src={Logo}
                        alt="Logo"
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
