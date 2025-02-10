import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User, Mail, Phone, CheckCircle, XCircle, MapPin } from 'lucide-react';
import { API_BASE_URL } from '../../config';

const LitigantProfileSection = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/v1/litigant/getLitigantById`);

                // Set the mapped data into state
                setUserData(response.data.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    // Loading state
    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6 flex">
            <div className="flex-1">
                <h2 className="text-2xl font-semibold text-orange-600 mb-4">Your Profile</h2>
                <div className="flex flex-col space-y-3">
                    <div className="flex items-center">
                        <User className="h-5 w-5 text-gray-500 mr-3" />
                        <span>{userData.fullName}</span>
                    </div>
                    <div className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-500 mr-3" />
                        <span>{userData.email}</span>
                    </div>
                    <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-500 mr-3" />
                        <span>{userData.mobile}</span>
                    </div>
                    
                   
                </div>
            </div>
            <div className="ml-6">
                <img
                    src={userData.profilePhoto}
                    alt={`${userData.fullName}'s profile`}
                    className="rounded-full h-28 w-28 object-fit"
                />
            </div>
        </div>
    );
};

export default LitigantProfileSection;
