// src/components/LawCard.js
import React from 'react';

const LawCard = ({ law, onClick }) => {
    return (
        <div
            className="border-2 border-orange-500 rounded-lg p-4 m-2 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={onClick}
        >
            <h2 className="text-lg font-bold text-orange-600">{law.lawName}</h2>
            <p className="text-gray-700">{law.description}</p>
            <p className="text-sm text-gray-500">Enacted Year: {law.enactedYear}</p>
        </div>
    );
};

export default LawCard;
