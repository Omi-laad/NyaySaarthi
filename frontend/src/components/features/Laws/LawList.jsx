// // src/components/LawList.js
// import React, { useState } from 'react';
// import axios from 'axios';

// // Sample JSON data (you can replace this with an API call)
// const sampleLaws = [
//     {
//         id: 1,
//         lawName: "The Right to Information Act, 2005 (Amended)",
//         lawCode: "RTI2005-A",
//         description: "An Act to provide for setting out the practical regime of right to information for citizens, with amendments.",
//         enactedYear: 2005,
//         ministry: "Ministry of Personnel, Public Grievances and Pensions",
//         jurisdiction: "State",
//         sections: [],
//         amendments: ["2019"],
//         status: "Active",
//         imageUrl: "https://via.placeholder.com/400x250?text=RTI+Act", // Placeholder image
//     },
//     {
//         id: 2,
//         lawName: "The Indian Contract Act, 1872",
//         lawCode: "ICA1872",
//         description: "An Act to define and amend certain parts of the law relating to contracts.",
//         enactedYear: 1872,
//         ministry: "Ministry of Law and Justice",
//         jurisdiction: "Central",
//         sections: [],
//         amendments: [],
//         status: "Active",
//         imageUrl: "https://via.placeholder.com/400x250?text=Contract+Act", // Placeholder image
//     },
//     // Add more sample laws as needed
// ];

// const LawList = () => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const filteredLaws = sampleLaws.filter(law =>
//         law.lawName.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div className="container mx-auto p-20">
//             <input
//                 type="text"
//                 placeholder="Search laws..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="block w-full max-w-md mx-auto mb-6 p-2 border border-orange-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
//             />

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {filteredLaws.map((law) => (
//                     <div key={law.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                         <img src={law.imageUrl} alt={law.lawName} className="w-full h-40 object-cover" />
//                         <div className="p-4">
//                             <h2 className="text-lg font-bold text-orange-600 line-clamp-1">{law.lawName}</h2>
//                             <p className="text-gray-500 text-sm">Enacted Year: {law.enactedYear} </p>
//                             <p className='text-gray-500 text-sm line-clamp-1'>Ministry: {law.ministry}</p>
//                             <p className="text-gray-700 mt-2 line-clamp-2">{law.description}</p>
//                             <div className="mt-4">
//                                 <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors duration-300">
//                                     Read More
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default LawList;


// src/components/LawList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LawList = () => {
    const [laws, setLaws] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLaws = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/laws/getAllLaws');
                setLaws(response.data.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchLaws();
    }, []);

    const filteredLaws = laws.filter(law =>
        law.lawName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <div className="container mx-auto p-20">
            <input
                type="text"
                placeholder="Search laws..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full max-w-md mx-auto mb-6 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredLaws.map((law) => (
                    <div key={law._id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img src={`https://via.placeholder.com/400x250?text=${encodeURIComponent(law.lawName)}`} alt={law.lawName} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-bold text-orange-600">{law.lawName}</h2>
                            <p className="text-gray-500 text-sm">Enacted Year: {law.enactedYear} | Ministry: {law.ministry}</p>
                            <p className="text-gray-700 mt-2">{law.description}</p>
                            <div className="mt-4">
                                <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors duration-300">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LawList;
