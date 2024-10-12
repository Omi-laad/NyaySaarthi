// import React from 'react';

// const LawyerCard = ({ name, specialty, imageSrc }) => (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <img src={imageSrc} alt={name} className="w-full h-48 object-cover" />
//         <div className="p-4">
//             <h3 className="font-semibold text-lg">{name}</h3>
//             <p className="text-gray-600 text-sm">{specialty}</p>
//         </div>
//     </div>
// );

// const LawyerShowcase = () => {
//     const lawyers = [
//         { name: "Sachin Sharma", specialty: "Criminal Lawyer", imageSrc: "/api/placeholder/300/200" },
//         { name: "Sarah Diaz", specialty: "Family Lawyer", imageSrc: "/api/placeholder/300/200" },
//         { name: "Aliya Pandey", specialty: "Bankruptcy Lawyer", imageSrc: "/api/placeholder/300/200" },
//         { name: "Rahul Singh", specialty: "Immigration Lawyer", imageSrc: "/api/placeholder/300/200" },
//     ];

//     return (
//         <div className="bg-gray-100 py-16">
//             <div className="container mx-auto px-4">
//                 <div className="flex flex-col md:flex-row items-start md:items-center mb-12">
//                     <div className="md:w-1/2 mb-8 md:mb-0">
//                         <h2 className="text-4xl font-bold mb-4">Trusted Lawyers, Tailored to Your Case.</h2>
//                         <p className="text-gray-600 mb-4">
//                             Find Your Perfect Legal Partner. With our tailored recommendations,
//                             you can confidently navigate your legal challenges, knowing the
//                             perfect legal partner is just a click away, available whenever and
//                             wherever you need them.
//                         </p>
//                         <div className="flex space-x-1">
//                             {[...Array(18)].map((_, i) => (
//                                 <div key={i} className="w-2 h-2 rounded-full bg-orange-500"></div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {lawyers.map((lawyer, index) => (
//                         <LawyerCard key={index} {...lawyer} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LawyerShowcase;

import React from 'react';
import lawyer1 from "../../images/lawyer1.jpg"
import lawyer2 from "../../images/lawyer2.jpeg"
import lawyer3 from "../../images/lawyer3.jpeg"
import lawyer4 from "../../images/lawyer4.jpeg"



const LawyerCard = ({ name, specialty, imageSrc }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={imageSrc} alt={name} className="w-full h-32 object-fit" />
        <div className="p-3">
            <h3 className="font-semibold text-sm">{name}</h3>
            <p className="text-gray-600 text-xs">{specialty}</p>
        </div>
    </div>
);



const LawyerShowcase = () => {
    const lawyers = [
        { name: "Sachin Sharma", specialty: "Criminal Lawyer", imageSrc: lawyer1 },
        { name: "Sarah Diaz", specialty: "Family Lawyer", imageSrc: lawyer2 },
        { name: "Aliya Pandey", specialty: "Bankruptcy Lawyer", imageSrc: lawyer3 },
        { name: "Rahul Singh", specialty: "Immigration Lawyer", imageSrc: lawyer4 },
    ];

    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-start lg:items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted Lawyers, Tailored to Your Case.</h2>
                        <p className="text-gray-600 mb-4">
                            Find Your Perfect Legal Partner. With our tailored recommendations,
                            you can confidently navigate your legal challenges, knowing the
                            perfect legal partner is just a click away, available whenever and
                            wherever you need them.
                        </p>
                        <div className="flex flex-wrap gap-1">
                            {[...Array(28)].map((_, i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-orange-500"></div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            {lawyers.map((lawyer, index) => (
                                <LawyerCard key={index} {...lawyer} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LawyerShowcase;