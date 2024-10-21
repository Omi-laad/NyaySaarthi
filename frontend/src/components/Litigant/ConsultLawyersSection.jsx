// import React from 'react';

// const ConsultLawyersSection = () => (
//     <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-orange-600 mb-4">Consult Verified Lawyers</h2>
//         <p className="text-gray-700 mb-4">Connect with experienced lawyers for professional legal advice.</p>
//         {/* Add lawyer listing or consultation booking form here */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {/* Example lawyer card */}
//             <div className="border border-gray-200 rounded-lg p-4">
//                 <h3 className="text-lg font-semibold text-orange-600">John Doe</h3>
//                 <p className="text-sm text-gray-600">Criminal Law Specialist</p>
//                 <button className="mt-2 bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
//                     Book Consultation
//                 </button>
//             </div>
//             {/* Add more lawyer cards here */}
//         </div>
//     </div>
// );

// export default ConsultLawyersSection;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConsultLawyersSection = () => {
    const [lawyers, setLawyers] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLawyers = async () => {
            try {
                const response = await axios.get('/api/v1/lawyer/getalllawyer');
                if (typeof response.data.data === 'object' && response.data !== null) {
                    setLawyers(response.data.data);
                } else {
                    throw new Error('Data received is not a valid object');
                }
            } catch (err) {
                setError(err.message || 'An error occurred while fetching lawyers');
                console.error('Error fetching lawyers:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchLawyers();
    }, []);

    if (loading) return <div className="text-center p-4">Loading lawyers...</div>;
    if (error) return <div className="text-center p-4 text-red-600">Error: {error}</div>;
    if (Object.keys(lawyers).length === 0) return <div className="text-center p-4">No lawyers found.</div>;

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">Consult Verified Lawyers</h2>
            <p className="text-gray-700 mb-4">Connect with experienced lawyers for professional legal advice.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(lawyers).map(([key, lawyer]) => (
                    <div key={key} className="border border-gray-200 rounded-lg p-4 flex flex-col">
                        <div className="flex items-center mb-2">
                            <img
                                src={lawyer.profilePhoto || "/api/placeholder/100/100"}
                                alt={lawyer.fullName}
                                className="w-12 h-12 rounded-full mr-3"
                            />
                            <div>
                                <h3 className="text-lg font-semibold text-orange-600">{lawyer.fullName}</h3>
                                <p className="text-sm text-gray-600">{lawyer.typeOfLaw}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">Bar Code: {lawyer.barCodeNumber}</p>
                        <p className="text-sm text-gray-700 mb-2">
                            Courts: {lawyer.courtPractices}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">{lawyer.officeAddress}</p>
                        <div className="mt-auto">
                            <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
                                Book Consultation
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConsultLawyersSection;