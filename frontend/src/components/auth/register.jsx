import React, { useState } from 'react';

const Register = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Image Upload Handler
    const handleImageUpload = (event) => {
        setSelectedImage(URL.createObjectURL(event.target.files[0]));
    };

    return (
        <div className="bg-white py-12 px-4 md:px-12 lg:px-24">
            {/* Header Section */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-orange-500 mb-6">Register as a Lawyer</h1>
                <p className="text-gray-600 text-lg md:text-xl">
                    Register with us to manage your legal practice and connect with clients.
                </p>
            </div>

            {/* Registration Form */}
            <div className="mt-12">
                <form className="space-y-6">
                    {/* Image Upload */}
                    <div>
                        <label className="block text-gray-700 mb-1">Profile Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        {selectedImage && (
                            <img
                                src={selectedImage}
                                alt="Profile Preview"
                                className="mt-4 w-32 h-32 rounded-full object-cover"
                            />
                        )}
                    </div>

                    {/* Barcode Number */}
                    <div>
                        <label className="block text-gray-700 mb-1">Barcode Number</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter your barcode number"
                        />
                    </div>

                    {/* Full Name */}
                    <div>
                        <label className="block text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Your Full Name"
                        />
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <label className="block text-gray-700 mb-1">Mobile Number</label>
                        <input
                            type="tel"
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Your Mobile Number"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Your Email Address"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Create a password"
                        />
                    </div>

                    {/* Court Practices */}
                    <div>
                        <label className="block text-gray-700 mb-1">Court Practices</label>
                        <select
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
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

                    {/* Type of Law (Multiple Choice) */}
                    <div>
                        <label className="block text-gray-700 mb-1">Type of Law</label>
                        <select
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"

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

                    {/* Office Address */}
                    <div>
                        <label className="block text-gray-700 mb-1">Office Address</label>
                        <div className="space-y-4">
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Street"
                            />
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="City"
                            />
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="State"
                            />
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Zip Code"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button className="bg-orange-500 text-white px-8 py-2 rounded-md hover:bg-orange-600">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
