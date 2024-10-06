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
                <h1 className="text-4xl font-bold text-orange-500 mb-6">Register</h1>
                <p className="text-gray-600 text-lg md:text-xl">
                    Join our platform and manage your legal practice with ease.
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

                    {/* Address */}
                    <div>
                        <label className="block text-gray-700 mb-1">Address</label>
                        <textarea
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Your Address"
                            rows="4"
                        ></textarea>
                    </div>

                    {/* Types of Court Practice */}
                    <div>
                        <label className="block text-gray-700 mb-1">Types of Court Practice</label>
                        <select
                            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        >
                            <option value="" disabled>Select Court Type</option>
                            <option value="criminal">Criminal Court</option>
                            <option value="civil">Civil Court</option>
                            <option value="family">Family Court</option>
                            <option value="labor">Labor Court</option>
                            <option value="high">High Court</option>
                            <option value="supreme">Supreme Court</option>
                        </select>
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
