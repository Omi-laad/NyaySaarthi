import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../../config';

const CustomCard = ({ children, className = '' }) => (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${className}`}>
        {children}
    </div>
);

const CustomBadge = ({ children, className = '' }) => (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${className}`}>
        {children}
    </span>
);

const LawList = () => {
    const [laws, setLaws] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleClick = (law) => {
        navigate(`/readlaw/${law._id}`, { state: { lawId: law.lawName } });
    };

    useEffect(() => {
        const fetchLaws = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/v1/laws/getAllLaws`);
                setLaws(response.data.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchLaws();
    }, []);

    // Filter users based on search term (regex filter)
    const filteredLaws = laws.filter((laws) => {
        const searchRegex = new RegExp(searchTerm, "i");
        return (
            searchRegex.test(laws.lawName) ||
            searchRegex.test(laws.lawCode) ||
            searchRegex.test(laws.description) ||
            searchRegex.test(laws.enactedYear) ||
            searchRegex.test(laws.status) ||
            searchRegex.test(laws.jurisdiction) ||
            searchRegex.test(laws.amendments) ||
            searchRegex.test(laws.ministry)
        );
    });


    if (loading) return <div className="text-center py-20 text-2xl text-orange-600">Loading...</div>;
    if (error) return <div className="text-center py-20 text-2xl text-red-500">{error}</div>;

    return (
        <div className="container mx-auto p-4 md:p-8 lg:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-8 mt-8">Indian Laws Database</h1>
            <input
                type="text"
                placeholder="Search laws..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full max-w-md mx-auto mb-8 p-3 border-2 border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredLaws.map((law) => (
                    <CustomCard key={law._id} className="flex flex-col h-full">
                        <div className="bg-orange-500 text-white p-4">
                            <h2 className="text-xl font-bold truncate">{law.lawName}</h2>
                            <p className="text-sm opacity-80">Code: {law.lawCode}</p>
                        </div>
                        <div className="p-4 flex-grow">
                            <p className="text-gray-700 mb-4 line-clamp-3">{law.description}</p>
                            <div className="mb-4">
                                <CustomBadge className="bg-orange-100 text-orange-800 mr-2">
                                    Enacted: {law.enactedYear}
                                </CustomBadge>
                                <CustomBadge className="bg-orange-100 text-orange-800">
                                    {law.jurisdiction}
                                </CustomBadge>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                                <span className="font-semibold">Ministry:</span> {law.ministry}
                            </p>
                            <p className="text-sm text-gray-600 mb-4">
                                <span className="font-semibold">Status:</span> {law.status}
                            </p>
                            {law.amendments && law.amendments.length > 0 && (
                                <div className="mb-4">
                                    <p className="text-sm font-semibold text-gray-700 mb-1">Amendments:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {law.amendments.map((amendment, index) => (
                                            <CustomBadge key={index} className="bg-green-100 text-green-800">
                                                {amendment}
                                            </CustomBadge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="p-4 bg-orange-50">
                            <button
                                onClick={() => handleClick(law)}
                                className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-300"
                            >
                                Read Full Law
                            </button>
                        </div>
                    </CustomCard>
                ))}
            </div>
        </div>
    );
};

export default LawList;