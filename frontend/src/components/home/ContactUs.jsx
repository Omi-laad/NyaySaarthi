import React from 'react';
import contactus from "../../images/contactus.webp"
const ContactUs = () => {
    return (
        <div className="bg-white py-20 px-4 md:px-12 lg:px-24">
            {/* Header Section */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-orange-500 mb-6">Contact Us</h1>
                <p className="text-gray-600 text-lg md:text-xl">
                    We're here to help you with any legal inquiries or guidance you need.
                </p>
            </div>

            {/* Contact Form and Information in a Row */}
            <div className="mt-12 flex flex-col lg:flex-row justify-between gap-8">
                {/* Contact Information Section */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                        Contact Information
                    </h2>
                    <p className="text-gray-700 mb-2">
                        <strong>Email:</strong> contact@yourlegalfirm.com
                    </p>
                    <p className="text-gray-700 mb-2">
                        <strong>Phone:</strong> +1 (123) 456-7890
                    </p>
                    <p className="text-gray-700 mb-6">
                        <strong>Address:</strong> 1234 Legal St, Suite 100, City, Country
                    </p>

                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                        Office Hours
                    </h2>
                    <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-700">
                        Saturday: 10:00 AM - 2:00 PM
                    </p>
                    <p className="text-gray-700 mb-4">
                        Closed on Sundays and public holidays.
                    </p>

                    {/* Contact Us Image */}
                    <img
                        src={contactus} // Replace with an actual image URL
                        alt="Contact Us"
                        className="w-1/2 h-auto rounded-lg shadow-md"
                    />
                </div>

                {/* Contact Form Section */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                        Send Us a Message
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Message</label>
                            <textarea
                                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                                placeholder="Write your message..."
                                rows="6"
                            ></textarea>
                        </div>

                        <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Section */}
            <div className="mt-16 text-center">
                <h2 className="text-xl font-semibold text-orange-500">
                    We're Here to Help
                </h2>
                <p className="text-gray-700 text-lg mt-4 mb-8">
                    Be free to inquire . We'll get back to you as soon as possible.
                </p>
            </div>
        </div>
    );
};

export default ContactUs;
