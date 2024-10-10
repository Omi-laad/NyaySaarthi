import React from 'react';
import { useNavigate } from 'react-router-dom';
import justicebar from "../../../src/images/justice-bar.png"

const HomePage = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/login')

    }
    return (
        <div className="min-h-screen bg-orange-500 relative overflow-hidden">
            {/* White curved shape at the bottom */}
            <div className="absolute -bottom-1 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 120L1440 120V40C1440 40 1320 0 720 0C120 0 0 40 0 40V120Z" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-4 pt-4 md: relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 py-20 md:mb-0 ms-10">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            Your Trusted Partner for Legal Guidance
                        </h1>
                        <p className="text-white text-lg mb-6">
                            Justice made simple with clear, practical solutions tailored to your unique needs. We provide reliable legal guidance and support you can trust, ensuring that your rights are protected and your challenges are met with confidence.
                        </p>
                        <button onClick={handleSubmit} className="bg-white text-orange-500 font-bold py-3 px-8 rounded-lg hover:bg-orange-200 transition duration-300 shadow-lg">
                            Get Started
                        </button>
                    </div>
                    <div className="hidden md:flex md:w-1/2 justify-center">
                        <img
                            src={justicebar}
                            alt="Scales of Justice"
                            className="w-full max-w-md h-full"
                        />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HomePage;