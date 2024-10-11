// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, User } from 'lucide-react'; // Import icons from Lucide React
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';

// const Sidebar = () => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     const toggleProfileDropdown = () => {
//         setIsProfileDropdownOpen(!isProfileDropdownOpen);
//     };

//     const handleSectionClick = (section) => {
//         // Add logic for scrolling to sections if needed
//         console.log(`Navigating to ${section}`);
//         setIsSidebarOpen(false); // Close sidebar after clicking on link in mobile view
//     };

//     const navigate = useNavigate();
//     const handleLogOut = async () => {
//         try {
//             const res = await axios.post('/api/v1/litigant/logout');
//             toast(res.data.message);
//             navigate('/');
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     return (
//         <div className="flex">
//             {/* Hamburger Icon for Mobile View */}
//             <button
//                 className="md:hidden fixed top-4 left-4 z-50 text-orange-600 focus:outline-none"
//                 onClick={toggleSidebar}
//             >
//                 {isSidebarOpen ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
//             </button>

//             {/* Sidebar */}
//             <div
//                 className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//                     } md:translate-x-0`}
//             >
//                 <div className="flex flex-col p-6 space-y-4">
//                     {/* Logo */}
//                     <Link to="/" className="text-2xl font-bold text-orange-600 mb-6">
//                         Law Services
//                     </Link>

//                     {/* Links */}
//                     <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('consultLawyers')}>
//                         Consult Verified Lawyers
//                     </a>
//                     <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('nyaysanhita')}>
//                         Bhartiya Nyaysanhita
//                     </a>
//                     <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('askQuery')}>
//                         Ask a Query
//                     </a>
//                     <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('blogPosts')}>
//                         Lawyer Blog Posts
//                     </a>
//                     <Link to="/aboutus" className="text-orange-500 text-lg py-1" onClick={toggleSidebar}>
//                         About
//                     </Link>
//                     <Link to="/contactus" className="text-orange-500 text-lg py-1" onClick={toggleSidebar}>
//                         Contact Us
//                     </Link>

//                     {/* Profile Section */}
//                     <div className="relative">
//                         <button
//                             className="flex items-center text-orange-600 focus:outline-none"
//                             onClick={toggleProfileDropdown}
//                         >
//                             <User className="text-2xl mr-2" />
//                             <span>Profile</span>
//                         </button>
//                         {isProfileDropdownOpen && (
//                             <div className="mt-2 w-full bg-white shadow-lg rounded-lg py-2">
//                                 <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">
//                                     My Profile
//                                 </Link>
//                                 <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">
//                                     Settings
//                                 </Link>
//                                 <button
//                                     onClick={handleLogOut}
//                                     className="block px-4 py-2 text-gray-800 hover:bg-orange-100"
//                                 >
//                                     Logout
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Desktop View Placeholder for Sidebar */}
//             <div className="hidden md:block w-64 h-full"></div>

//             {/* Main Content Overlay for Mobile */}
//             {isSidebarOpen && (
//                 <div
//                     className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
//                     onClick={toggleSidebar}
//                 />
//             )}
//         </div>
//     );
// };

// export default Sidebar;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Import icons from Lucide React
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [litigant, setLitigant] = useState({
        profilePhoto: '',
        fullName: '',
        email: '',
    })

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // const getinfo = async () => {
    //     // e.preventDefault();
    //     const response = await axios.get("/api/v1/litigant/getalllitigants", {
    //         headers: {
    //             'Authorization': `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })
    //     if (response.status === 200) {
    //         console.log(response.data)
    //         setLitigant(response.data)
    //     }
    // }
    // useEffect(() => {
    //     getinfo();
    // }, [])


    const handleSectionClick = (section) => {
        // Add logic for scrolling to sections if needed
        console.log(`Navigating to ${section}`);
        setIsSidebarOpen(false); // Close sidebar after clicking on link in mobile view
    };

    const navigate = useNavigate();
    const handleLogOut = async () => {
        try {
            const res = await axios.post('/api/v1/litigant/logout');
            toast(res.data.message);
            // localStorage.clear()
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        // Retrieve information from local storage
        const profilePhoto = localStorage.getItem('profilePhoto');
        const fullName = localStorage.getItem('fullName');
        const email = localStorage.getItem('email');

        setLitigant({ profilePhoto, fullName, email });
    }, []);

    return (
        <div className="flex">
            {/* Hamburger Icon for Mobile View */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 text-orange-600 focus:outline-none"
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0`}
            >
                <div className="flex flex-col p-6 space-y-4">
                    {/* Profile Details */}
                    <div className="flex flex-col items-center">
                        <img
                            src={litigant?.profilePhot} // Assuming litigant profile image is available
                            alt="Profile"
                            className="w-20 h-20 rounded-full mb-4"
                        />
                        <span className="text-lg font-semibold text-orange-600">{litigant.fullName}</span>
                    </div>

                    {/* Links */}
                    <Link className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('consultLawyers')}>
                        Consult Verified Lawyers
                    </Link>
                    <Link className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('nyaysanhita')}>
                        Bhartiya Nyaysanhita
                    </Link>
                    <Link className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('askQuery')}>
                        Ask a Query
                    </Link>
                    <Link className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('blogPosts')}>
                        Lawyer Blog Posts
                    </Link>
                    <Link to="/aboutus" className="text-orange-500 text-lg py-1" target='_blank' onClick={toggleSidebar}>
                        About
                    </Link>
                    <Link to="/contactus" className="text-orange-500 text-lg py-1" target='_blank' onClick={toggleSidebar}>
                        Contact Us
                    </Link>

                    {/* Logout Button */}
                    <button
                        onClick={handleLogOut}
                        className="text-orange-500 text-lg py-1"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Desktop View Placeholder for Sidebar */}
            <div className="hidden md:block w-64 h-full"></div>

            {/* Main Content Overlay for Mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                    onClick={toggleSidebar}
                />
            )}
        </div>
    );
};

export default Sidebar;
