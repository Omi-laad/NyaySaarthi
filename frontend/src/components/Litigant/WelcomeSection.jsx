import React from 'react';

const WelcomeSection = () => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">Welcome to Your Litigant Dashboard</h1>
        <p className="text-gray-700 mb-4">Here's what you can do:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Consult with verified lawyers for expert legal advice</li>
            <li>Explore the Bhartiya Nyaysanhita for legal information</li>
            <li>Ask queries and get answers from legal professionals</li>
            <li>Read insightful blog posts from experienced lawyers</li>
        </ul>
    </div>
);

export default WelcomeSection;