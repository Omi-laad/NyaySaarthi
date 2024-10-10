import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const CustomCard = ({ children, className = '' }) => (
    <div className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${className}`}>
        {children}
    </div>
);

const CustomBadge = ({ children, className = '' }) => (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${className}`}>
        {children}
    </span>
);

const CustomAccordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-t border-orange-200">
            <button
                className="w-full py-4 px-6 text-left text-orange-700 font-semibold focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <span className={`float-right transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
            </button>
            {isOpen && <div className="px-6 pb-4">{children}</div>}
        </div>
    );
};

const LawCard = () => {
    const { id } = useParams();
    const [law, setLaw] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLawDetail = async () => {
            try {
                const response = await axios.get(`/api/v1/laws/${id}`);
                setLaw(response.data.data);
            } catch (err) {
                setError(err.response?.data?.message || 'Failed to load the law details.');
                console.error('Fetch Law Detail:', err);
            }
        };
        fetchLawDetail();
    }, [id]);

    const handleClick = () => {
        navigate(`/readlaw/${law._id}`, { state: { lawId: law.lawName } });
    };

    if (error) {
        return <p className="text-red-600 text-center p-4">{error}</p>;
    }

    if (!law) {
        return <p className="text-center p-4">Loading...</p>;
    }

    return (
        <CustomCard className="max-w-4xl mx-auto my-20">
            <div className="bg-orange-500 text-white px-6 py-4">
                <h2 className="text-2xl font-bold">{law.lawName}</h2>
                <p className="text-sm opacity-80">Code: {law.lawCode}</p>
            </div>

            <div className="p-6 bg-orange-50">
                <p className="text-orange-800 mb-4">{law.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <h3 className="font-semibold text-orange-700">Enacted Year:</h3>
                        <p>{law.enactedYear}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-orange-700">Ministry:</h3>
                        <p>{law.ministry}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-orange-700">Jurisdiction:</h3>
                        <p>{law.jurisdiction}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-orange-700">Status:</h3>
                        <CustomBadge className="bg-green-100 text-green-800">{law.status}</CustomBadge>
                    </div>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold text-orange-700 mb-2">Amendments:</h3>
                    <div className="flex flex-wrap gap-2">
                        {law.amendments.map((amendment, index) => (
                            <CustomBadge key={index} className="bg-orange-200 text-orange-800">{amendment}</CustomBadge>
                        ))}
                    </div>
                </div>

                <CustomAccordion title="Sections">
                    {law.sections.map((section) => (
                        <div key={section._id} className="mb-4 p-4 bg-white rounded-lg">
                            <h4 className="font-semibold text-orange-600">Section {section.sectionNumber}: {section.title}</h4>
                            <p className="text-sm text-gray-600">{section.description}</p>
                        </div>
                    ))}
                </CustomAccordion>
            </div>
            {/* 
            <div className="bg-orange-100 px-6 py-4 flex justify-between items-center">
                <p className="text-sm text-orange-600">Last updated: {new Date(law.updatedAt).toLocaleDateString()}</p>

            </div> */}
        </CustomCard>
    );
};

export default LawCard;