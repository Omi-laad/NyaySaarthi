import React, { useState } from 'react';

const Register = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = (event) => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="bg-orange-500 px-6 py-8 text-white">
                    <h1 className="text-3xl font-bold text-center">Register as a Lawyer</h1>
                    <p className="mt-2 text-center text-orange-100">
                        Join our platform to manage your legal practice and connect with clients.
                    </p>
                </div>

                <div className="px-6 py-8">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="col-span-2 sm:col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Profile Image
                                </label>
                                <div className="flex items-center justify-center w-full">
                                    <label
                                        className="flex flex-col w-full h-32 border-4 border-orange-200 border-dashed hover:bg-gray-100 hover:border-orange-300 cursor-pointer"
                                    >
                                        <div className="flex flex-col items-center justify-center pt-7">
                                            {selectedImage ? (
                                                <img
                                                    src={selectedImage}
                                                    alt="Profile Preview"
                                                    className="w-24 h-24 rounded-full object-cover"
                                                />
                                            ) : (
                                                <>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                    </svg>
                                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                                        Upload photo
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                        <input type="file" className="opacity-0" accept="image/*" onChange={handleImageUpload} />
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Barcode Number
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="Enter your barcode number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="Your Full Name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="Your Mobile Number"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="Your Email Address"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="Create a password"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Court Practices
                                </label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    required
                                >
                                    <option value="">Select Court</option>
                                    <option value="Supreme Court">Supreme Court</option>
                                    <option value="High Court">High Court</option>
                                    <option value="District Court">District Court</option>
                                    <option value="Family Court">Family Court</option>
                                    <option value="Consumer Court">Consumer Court</option>
                                    <option value="Labour Court">Labour Court</option>
                                    <option value="Tribunal">Tribunal</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Type of Law
                                </label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    required
                                >
                                    <option value="Criminal">Criminal</option>
                                    <option value="Corporate">Corporate</option>
                                    <option value="Divorce">Divorce</option>
                                    <option value="Civil">Civil</option>
                                    <option value="Tax">Tax</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Office Address
                                </label>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="Street"
                                    />
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="City"
                                    />
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="State"
                                    />
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="Zip Code"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;