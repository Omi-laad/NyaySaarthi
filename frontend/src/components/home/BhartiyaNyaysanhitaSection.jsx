import React from 'react';
import { Book, FileText, Scale, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BhartiyaNyaysanhitaSection = React.forwardRef((props, ref) => {

    return (
        <section ref={ref} className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">Bhartiya Nyaysanhita: Understanding Indian Legal Codes</h2>
                <p className="text-lg text-center text-orange-700 mb-12">Explore the comprehensive legal framework that shapes India's justice system. Stay informed about recent changes and their impacts on various legal domains.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <InfoCard
                        icon={<Book className="w-10 h-10 text-orange-500" />}
                        title="Overview"
                        description="Get a comprehensive overview of the Bhartiya Nyaysanhita, its structure, and its significance in the Indian legal system."
                    />
                    <InfoCard
                        icon={<FileText className="w-10 h-10 text-orange-500" />}
                        title="Key Provisions"
                        description="Explore important sections and clauses of the Nyaysanhita, with explanations of their applications and implications."
                    />
                    <InfoCard
                        icon={<Scale className="w-10 h-10 text-orange-500" />}
                        title="Case Studies"
                        description="Analyze real-world cases that demonstrate the application of Bhartiya Nyaysanhita in various legal scenarios."
                    />
                    <InfoCard
                        icon={<Users className="w-10 h-10 text-orange-500" />}
                        title="Expert Commentaries"
                        description="Read insights and interpretations from leading legal experts on different aspects of the Nyaysanhita."
                    />
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-orange-800 mb-4">Recent Updates</h3>
                    <ul className="list-disc list-inside text-orange-600 space-y-2">
                        <li>Amendments to Section 124 regarding cybercrime provisions</li>
                        <li>New guidelines for environmental protection under Chapter IX</li>
                        <li>Revised penalties for white-collar crimes in Section 318-322</li>
                    </ul>
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition duration-300">
                        Start Reading
                    </button>
                </div>
            </div>
        </section>
    );
});

const InfoCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-xl font-semibold text-orange-800 ml-4">{title}</h3>
        </div>
        <p className="text-orange-600">{description}</p>
    </div>
);

export default BhartiyaNyaysanhitaSection;