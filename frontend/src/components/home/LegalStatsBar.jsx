
import React from 'react';

const StatItem = ({ number, label, highlight = false }) => (
    <div className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg ${highlight ? 'bg-orange-500 text-white' : 'bg-white'} w-full aspect-video`}>
        <div className={`text-2xl font-bold ${highlight ? 'text-white' : 'text-gray-800'}`}>{number}</div>
        <div className={`text-sm mt-2 text-center ${highlight ? 'text-white' : 'text-gray-600'}`}>{label}</div>
    </div>
);

const LegalStatsBar = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatItem number="10,000+" label="Legal Queries Answered By Chatbot" />
                    <StatItem number="24/7" label="Availability" highlight={true} />
                    <StatItem number="25+" label="Legal Specialities" />
                    <StatItem number="50,000+" label="Questions Resolved" />
                </div>
            </div>
        </div>
    );
};

export default LegalStatsBar;