import React from 'react';
import judgementhammer from "../../images/judgementhammer.png"
const LegalServicesSection = () => {
    return (
        <div className="bg-white ">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div className="md:w-1/2 mb-8 md:mb-0 -ms-14">
                    {/* <div className=" overflow-hidden shadow-xl"> */}
                    <img
                        src={judgementhammer}
                        alt="Courtroom with gavel"
                        className="w-full h-full object-cover"
                    />
                    {/* </div> */}
                </div>

                {/* Content Section */}
                <div className="h-full md:w-1/2 md:pl-12">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                        Justice Made Simple,<br />Solutions Made Strong.
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Whether you're seeking expert advice, exploring rightful articles, or connecting with top lawyers in your area, we have you covered. Your one-stop solution for all your legal needs.
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            "Instant legal assistance",
                            "Personalized lawyer recommendations based on your legal needs",
                            "Stay informed with the latest legal news and insights",
                            "Find lawyers near you with ease",
                            "Ask legal questions and receive answers from professional lawyers",
                            "Available 24/7 for your legal needs"
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mr-1"></div>
                                <span className="text-base text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalServicesSection;