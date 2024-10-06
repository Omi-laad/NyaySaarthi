import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-white py-12 px-4 md:px-12 lg:px-24">
            {/* Header Section */}
            <div className="text-center">
                <h1 className="text-4xl font-bold text-orange-500 mb-6">About Us</h1>
                <p className="text-gray-600 text-lg md:text-xl">
                    We provide expert legal guidance to help you navigate complex legal matters with confidence.
                </p>
            </div>

            {/* Main Content Section */}
            <div className="mt-12 flex flex-wrap justify-between gap-8">
                {/* Image Section */}
                <div className="w-full md:w-1/2 lg:w-2/5">
                    <img
                        src="https://via.placeholder.com/400x300" // You can replace this with an actual image URL
                        alt="Legal Guidance"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 lg:w-3/5">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                        Our Mission
                    </h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        At NyaySaarthi, our mission is to provide comprehensive legal services that empower individuals and businesses to make informed decisions. Our team of experienced attorneys is dedicated to offering clear, actionable advice tailored to your unique needs.
                    </p>
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                        Why Choose Us?
                    </h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        We pride ourselves on our commitment to transparency, professionalism, and a client-first approach. From civil disputes to corporate law, we are here to guide you every step of the way.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Trust us to simplify the legal process and provide solutions that work for you.
                    </p>
                </div>
            </div>

            {/* Values Section */}
            <div className="mt-16">
                <h2 className="text-2xl font-semibold text-center text-orange-500 mb-8">
                    Our Core Values
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="w-full md:w-1/3 text-center">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">
                            Integrity
                        </h3>
                        <p className="text-gray-700">
                            We adhere to the highest ethical standards, ensuring trust and transparency in all that we do.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 text-center">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">
                            Professionalism
                        </h3>
                        <p className="text-gray-700">
                            Our team is dedicated to providing top-notch legal services with professionalism and respect.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 text-center">
                        <h3 className="text-xl font-semibold text-orange-500 mb-2">
                            Commitment
                        </h3>
                        <p className="text-gray-700">
                            We are committed to achieving the best possible outcome for our clients in every case we handle.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="mt-16 text-center">
                <h2 className="text-xl font-semibold text-orange-500">
                    Ready to Get Started?
                </h2>
                <p className="text-gray-700 text-lg mt-4 mb-8">
                    Contact us today for a consultation and take the first step towards resolving your legal matters with confidence.
                </p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default AboutUs;
