import React from 'react';
import { Link } from 'react-router-dom';


const DashboardCard = ({ title, icon, link, onClick }) => {
    return (
        <div
            onClick={onClick || (() => link && (window.location.href = link))}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
        >
            <div className="flex items-center mb-2">
                {icon}
                <h3 className="ml-2 text-lg font-semibold text-gray-700">{title}</h3>
            </div>
        </div>
    );
};

export default DashboardCard