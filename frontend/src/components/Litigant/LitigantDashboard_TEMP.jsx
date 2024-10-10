import React from 'react';
import Sidebar from './sidebar'; // Assuming you have a Sidebar component

const LitigantDashboard = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-grow py-20 px-8 bg-gray-100">
                <h1 className="text-3xl font-bold mb-4">Welcome to the Litigant Dashboard</h1>
                <p className="text-lg text-gray-700">Here you can manage your profile, view cases, and interact with lawyers.</p>
                {/* Add other components or functionality for the dashboard */}
            </div>
        </div>
    );
};

export default LitigantDashboard;
