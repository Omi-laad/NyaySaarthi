
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { User, Mail, Phone } from 'lucide-react';

// const ProfileSection = () => {
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const response = await axios.get('/api/v1/lawyer/getlawyerById');
//                 setUserData(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         fetchUserData();
//     }, []);

//     // Ensure that userData is not null before trying to access its properties
//     if (!userData) {
//         return <div>Loading...</div>; // Optionally show a loading state
//     }

//     return (
//         <div className="bg-white rounded-lg shadow-md p-6 flex">
//             <div className="flex-1">
//                 <h2 className="text-2xl font-semibold text-orange-600 mb-4">Your Profile</h2>
//                 <div className="flex flex-col space-y-3">
//                     <div className="flex items-center">
//                         <User className="h-5 w-5 text-gray-500 mr-3" />
//                         <span>{userData.fullName}</span>
//                     </div>
//                     <div className="flex items-center">
//                         <Mail className="h-5 w-5 text-gray-500 mr-3" />
//                         <span>{userData.email}</span>
//                     </div>
//                     <div className="flex items-center">
//                         <Phone className="h-5 w-5 text-gray-500 mr-3" />
//                         <span>{userData.mobile}</span>
//                     </div>
//                     <div className="flex items-center">
//                         <span className="text-gray-500 mr-3">Address:</span>
//                         <span>{userData.address}</span>
//                     </div>
//                     <div className="flex items-center">
//                         <span className="text-gray-500 mr-3">Verified:</span>
//                         <span>{userData.isProfileVerified ? "Yes" : "No"}</span>
//                     </div>
//                     <div className="flex items-center">
//                         <span className="text-gray-500 mr-3">Type of Law:</span>
//                         <span>{userData.typeOfLaw}</span>
//                     </div>
//                     <div className="flex items-center">
//                         <span className="text-gray-500 mr-3">Court Practices:</span>
//                         <span>{userData.courtPractices}</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="ml-6">
//                 <img
//                     src={userData.profilePhoto}
//                     alt={`${userData.fullName}'s profile`}
//                     className="rounded-full h-24 w-24 object-cover"
//                 />
//             </div>
//         </div>
//     );
// };

// export default ProfileSection;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User, Mail, Phone, CheckCircle, XCircle } from 'lucide-react';

const ProfileSection = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/v1/lawyer/getlawyerById');
                setUserData(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    // Ensure that userData is not null before trying to access its properties
    if (!userData) {
        return <div>Loading...</div>; // Optionally show a loading state
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
                    <div className="flex items-center">
                        <span className="text-gray-500 mr-3">Your Bar Code Number:</span>
                        <span>{userData.barCodeNumber}</span>
                    </div>
                    <div className="flex items-center">
                        {/* Verification Status */}
                        {userData.isProfileVerified ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                            <XCircle className="h-5 w-5 text-red-500 mr-2" />
                        )}
                        <span className="text-gray-500 mr-3">Verified:</span>
                        <span>{userData.isProfileVerified ? "Yes" : "No"}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-500 mr-3">Type of Law:</span>
                        <span>{userData.typeOfLaw}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-500 mr-3">Court Practices:</span>
                        <span>{userData.courtPractices}</span> {/* Ensure this is an array */}
                    </div>
                </div>
            </div>
            <div className="ml-6">
                <img
                    src={userData.profilePhoto}
                    alt={`${userData.fullName}'s profile`}
                    className="rounded-full h-28 w-28 object-fit mr-12"
                />
            </div>
        </div>
    );
};

export default ProfileSection;
