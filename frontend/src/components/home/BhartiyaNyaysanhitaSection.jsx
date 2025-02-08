// import React from 'react';
// import { Book, FileText, Scale, Users } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const BhartiyaNyaysanhitaSection = React.forwardRef((props, ref) => {
//     const navigate = useNavigate();
//     const handleOnClick = () => {
//         navigate("/BhartiyanyaySanhita");
//     }

//     return (
//         <section ref={ref} className="py-16 bg-white">
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">Bhartiya Nyaysanhita: Understanding Indian Legal Codes</h2>
//                 <p className="text-lg text-center text-orange-700 mb-12">Explore the comprehensive legal framework that shapes India's justice system. Stay informed about recent changes and their impacts on various legal domains.</p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//                     <InfoCard
//                         icon={<Book className="w-10 h-10 text-orange-500" />}
//                         title="Overview"
//                         description="Get a comprehensive overview of the Bhartiya Nyaysanhita, its structure, and its significance in the Indian legal system."
//                     />
//                     <InfoCard
//                         icon={<FileText className="w-10 h-10 text-orange-500" />}
//                         title="Key Provisions"
//                         description="Explore important sections and clauses of the Nyaysanhita, with explanations of their applications and implications."
//                     />
//                     <InfoCard
//                         icon={<Scale className="w-10 h-10 text-orange-500" />}
//                         title="Case Studies"
//                         description="Analyze real-world cases that demonstrate the application of Bhartiya Nyaysanhita in various legal scenarios."
//                     />
//                     <InfoCard
//                         icon={<Users className="w-10 h-10 text-orange-500" />}
//                         title="Expert Commentaries"
//                         description="Read insights and interpretations from leading legal experts on different aspects of the Nyaysanhita."
//                     />
//                 </div>

//                 <div className="bg-white p-6 rounded-lg shadow-md">
//                     <h3 className="text-xl font-semibold text-orange-800 mb-4">Recent Updates</h3>
//                     <ul className="list-disc list-inside text-orange-600 space-y-2">
//                         <li>Amendments to Section 124 regarding cybercrime provisions</li>
//                         <li>New guidelines for environmental protection under Chapter IX</li>
//                         <li>Revised penalties for white-collar crimes in Section 318-322</li>
//                     </ul>
//                 </div>

//                 <div className="mt-12 text-center">
//                     <button onClick={handleOnClick} className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition duration-300">
//                         Start Reading
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// });

// const InfoCard = ({ icon, title, description }) => (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//         <div className="flex items-center mb-4">
//             {icon}
//             <h3 className="text-xl font-semibold text-orange-800 ml-4">{title}</h3>
//         </div>
//         <p className="text-orange-600">{description}</p>
//     </div>
// );

// export default BhartiyaNyaysanhitaSection;
import React from 'react';
import { Book, FileText, Scale, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BhartiyaNyaysanhitaSection = React.forwardRef((props, ref) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/BhartiyanyaySanhita");
    }

    return (
        <section ref={ref} className="py-16 bg-gradient-to-b from-orange-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
                        Legal Knowledge Hub
                    </span>
                    <h2 className="text-4xl font-bold text-orange-900 mb-4">
                        Bhartiya Nyaysanhita: Understanding Indian Legal Codes
                    </h2>
                    <p className="text-lg text-orange-700 max-w-3xl mx-auto">
                        Explore the comprehensive legal framework that shapes India's justice system. Stay informed about recent changes and their impacts on various legal domains.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <InfoCard
                        icon={<Book className="w-12 h-12 text-orange-600" />}
                        title="Overview"
                        description="Get a comprehensive overview of the Bhartiya Nyaysanhita, its structure, and its significance in the Indian legal system."
                    />
                    <InfoCard
                        icon={<FileText className="w-12 h-12 text-orange-600" />}
                        title="Key Provisions"
                        description="Explore important sections and clauses of the Nyaysanhita, with explanations of their applications and implications."
                    />
                    <InfoCard
                        icon={<Scale className="w-12 h-12 text-orange-600" />}
                        title="Case Studies"
                        description="Analyze real-world cases that demonstrate the application of Bhartiya Nyaysanhita in various legal scenarios."
                    />
                    <InfoCard
                        icon={<Users className="w-12 h-12 text-orange-600" />}
                        title="Expert Commentaries"
                        description="Read insights and interpretations from leading legal experts on different aspects of the Nyaysanhita."
                    />
                </div>

                <div className="bg-orange-50 p-8 rounded-xl shadow-sm border border-orange-100">
                    <h3 className="text-2xl font-bold text-orange-900 mb-6">Recent Updates</h3>
                    <ul className="space-y-4">
                        {[
                            "Amendments to Section 124 regarding cybercrime provisions",
                            "New guidelines for environmental protection under Chapter IX",
                            "Revised penalties for white-collar crimes in Section 318-322"
                        ].map((update, index) => (
                            <li key={index} className="flex items-start">
                                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-orange-500 rounded-full"/>
                                <span className="text-orange-700">{update}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-12 text-center">
                    <button 
                        onClick={handleOnClick} 
                        className="group bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Start Reading
                    </button>
                </div>
            </div>
        </section>
    );
});

const InfoCard = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-orange-100">
        <div className="flex items-center mb-4">
            <div className="p-3 bg-orange-50 rounded-lg">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-orange-900 ml-4">{title}</h3>
        </div>
        <p className="text-orange-700 leading-relaxed">{description}</p>
    </div>
);

export default BhartiyaNyaysanhitaSection;