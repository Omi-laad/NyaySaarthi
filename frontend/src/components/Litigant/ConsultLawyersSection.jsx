import React from 'react';

const ConsultLawyersSection = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Consult Verified Lawyers</h2>
        <p className="text-gray-700 mb-4">Connect with experienced lawyers for professional legal advice.</p>
        {/* Add lawyer listing or consultation booking form here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example lawyer card */}
            <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-orange-600">John Doe</h3>
                <p className="text-sm text-gray-600">Criminal Law Specialist</p>
                <button className="mt-2 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
                    Book Consultation
                </button>
            </div>
            {/* Add more lawyer cards here */}
        </div>
    </div>
);

export default ConsultLawyersSection;