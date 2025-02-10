// import React, { useState } from 'react';
// import { X, Menu, User, Book, MessageSquare, FileText, Info, PhoneCall, LogOut } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';
// import WelcomeSection from './WelcomeSection';
// import ConsultLawyersSection from './ConsultLawyersSection';
// import AskQuerySection from './AskQuerySection';
// import BlogPostsSection from './BlogPostsSection';
// import axios from "axios"


// const LitigantDashboard = () => {
//     const [activeSection, setActiveSection] = useState('welcome');
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const navigate = useNavigate();
//     const handleLogOut = async () => {
//         try {
//             const res = await axios.post('/api/v1/litigant/logout');
//             alert(res.data.message);
//             // localStorage.clear()
//             navigate('/');
//         } catch (err) {
//             alert(err);
//         }
//     };
//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     const renderSection = () => {
//         switch (activeSection) {
//             case 'welcome':
//                 return <WelcomeSection />;
//             case 'consultLawyers':
//                 return <ConsultLawyersSection />;
//             case 'askQuery':
//                 return <AskQuerySection />;
//             case 'blogPosts':
//                 return <BlogPostsSection />;
//             default:
//                 return <WelcomeSection />;
//         }
//     };

//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <aside className={`bg-white w-64 min-h-screen p-4 fixed top-0 left-0 z-20 transform transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold text-orange-600">Dashboard</h2>
//                     <button onClick={toggleSidebar} className="md:hidden">
//                         <X className="h-6 w-6 text-orange-600" />
//                     </button>
//                 </div>
//                 <nav>
//                     <SidebarLink icon={<User />} label="Consult Lawyers" onClick={() => setActiveSection('consultLawyers')} />
//                     <SidebarLink icon={<Book />} label="Nyaysanhita" href='/bhartiyanyaySanhita' target="_blank" />
//                     <SidebarLink icon={<MessageSquare />} label="Ask a Query" onClick={() => setActiveSection('askQuery')} />
//                     <SidebarLink icon={<FileText />} label="Blog Posts" onClick={() => setActiveSection('blogPosts')} />
//                     <SidebarLink icon={<Info />} label="About" href="/aboutus" target="_blank" />
//                     <SidebarLink icon={<PhoneCall />} label="Contact Us" href="/contactus" target="_blank" />
//                     <SidebarLink onClick={handleLogOut} className="text-orange-500 text-lg py-1" label={"Logout"} icon={<LogOut />} />
//                 </nav>
//             </aside>

//             {/* Main content */}
//             <main className="flex-1 p-6 md:ml-64">
//                 <button onClick={toggleSidebar} className="md:hidden mb-4">
//                     <Menu className="h-6 w-6 text-orange-600" />
//                 </button>
//                 {renderSection()}
//             </main>
//         </div>
//     );
// };

// const SidebarLink = ({ icon, label, onClick, href, target }) => (
//     href ? (
//         <a
//             href={href}
//             target={target}
//             rel={target === "_blank" ? "noopener noreferrer" : ""}
//             className="flex items-center space-x-2 text-orange-600 hover:bg-orange-100 rounded p-2 mb-2 cursor-pointer"
//         >
//             {icon}
//             <span>{label}</span>
//         </a>
//     ) : (
//         <button
//             onClick={onClick}
//             className="flex items-center space-x-2 text-orange-600 hover:bg-orange-100 rounded p-2 mb-2 cursor-pointer w-full text-left"
//         >
//             {icon}
//             <span>{label}</span>
//         </button>

//     )
// );

// export default LitigantDashboard;

// import React, { useState, useEffect } from 'react';
// import { X, Menu, User, Book, MessageSquare, FileText, Info, PhoneCall, LogOut } from 'lucide-react';
// import { Link, useNavigate } from 'react-router-dom';
// import WelcomeSection from './WelcomeSection';
// import ConsultLawyersSection from './ConsultLawyersSection';
// import AskQuerySection from './AskQuerySection';
// import BlogPostsSection from './BlogPostsSection';
// import axios from "axios";

// const LitigantDashboard = () => {
//     const [activeSection, setActiveSection] = useState('welcome');
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [userData, setUserData] = useState(null);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const response = await axios.get('/api/v1/litigant/getLitigantById');
//                 setUserData(response.data.data);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         fetchUserData();
//     }, []);

//     const handleLogOut = async () => {
//         try {
//             const res = await axios.post('/api/v1/litigant/logout');
//             alert(res.data.message);
//             navigate('/');
//         } catch (err) {
//             alert(err);
//         }
//     };

//     const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//     const renderSection = () => {
//         switch (activeSection) {
//             case 'welcome':
//                 return <WelcomeSection />;
//             case 'consultLawyers':
//                 return <ConsultLawyersSection />;
//             case 'askQuery':
//                 return <AskQuerySection />;
//             case 'blogPosts':
//                 return <BlogPostsSection />;
//             default:
//                 return <WelcomeSection />;
//         }
//     };

//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <aside className={`bg-white w-64 min-h-screen p-4 fixed top-0 left-0 z-20 transform transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold text-orange-600">Dashboard</h2>
//                     <button onClick={toggleSidebar} className="md:hidden">
//                         <X className="h-6 w-6 text-orange-600" />
//                     </button>
//                 </div>
//                 {userData && (
//                     <div className="flex flex-col items-center space-x-3 mb-6">
//                         <img
//                             src={userData.profilePhoto || "/api/placeholder/40/40"}
//                             alt="Profile"
//                             className="w-20 h-20 rounded-full object-fit"
//                         />
//                         <span className="text-sm font-medium text-gray-700">{userData.fullName}</span>
//                     </div>
//                 )}
//                 <nav>
//                     <SidebarLink icon={<User />} label="Consult Lawyers" onClick={() => setActiveSection('consultLawyers')} />
//                     <SidebarLink icon={<Book />} label="Nyaysanhita" href='/bhartiyanyaySanhita' target="_blank" />
//                     <SidebarLink icon={<MessageSquare />} label="Ask a Query" onClick={() => setActiveSection('askQuery')} />
//                     <SidebarLink icon={<FileText />} label="Blog Posts" onClick={() => setActiveSection('blogPosts')} />
//                     <SidebarLink icon={<Info />} label="About" href="/aboutus" target="_blank" />
//                     <SidebarLink icon={<PhoneCall />} label="Contact Us" href="/contactus" target="_blank" />
//                     <SidebarLink onClick={handleLogOut} className="text-orange-500 text-lg py-1" label="Logout" icon={<LogOut />} />
//                 </nav>
//             </aside>

//             {/* Main content */}
//             <main className="flex-1 p-6 md:ml-64">
//                 <button onClick={toggleSidebar} className="md:hidden mb-4">
//                     <Menu className="h-6 w-6 text-orange-600" />
//                 </button>
//                 {renderSection()}
//             </main>
//         </div>
//     );
// };

// const SidebarLink = ({ icon, label, onClick, href, target }) => (
//     href ? (
//         <a
//             href={href}
//             target={target}
//             rel={target === "_blank" ? "noopener noreferrer" : ""}
//             className="flex items-center space-x-2 text-orange-600 hover:bg-orange-100 rounded p-2 mb-2 cursor-pointer"
//         >
//             {icon}
//             <span>{label}</span>
//         </a>
//     ) : (
//         <button
//             onClick={onClick}
//             className="flex items-center space-x-2 text-orange-600 hover:bg-orange-100 rounded p-2 mb-2 cursor-pointer w-full text-left"
//         >
//             {icon}
//             <span>{label}</span>
//         </button>
//     )
// );

// export default LitigantDashboard;


import React, { useState, useEffect } from 'react';
import { X, Menu, User, Book, MessageSquare, FileText, Info, PhoneCall, LogOut, BadgeInfoIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import WelcomeSection from './WelcomeSection';
import ConsultLawyersSection from './ConsultLawyersSection';
import AskQuerySection from './AskQuerySection';
import BlogPostsSection from './BlogPostsSection';
import axios from "axios"
import LitigantProfileSection from './LitigantProfileSection';
import FAQPage from './FAQPage';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_BASE_URL } from '../../config';

const LitigantDashboard = () => {
    const [activeSection, setActiveSection] = useState('welcome');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userData, setUserData] = useState(null);

    const navigate = useNavigate();



    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/v1/litigant/getLitigantById`);
                setUserData(response.data.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);
    const handleLogOut = async () => {
        try {
            const res = await axios.post(`${API_BASE_URL}/api/v1/litigant/logout`);
            toast.success(res.data.message)
            setTimeout(() => {
            localStorage.clear();

                navigate('/');
            }, 2000);
        } catch (err) {
            toast.error(err);
        }
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const renderSection = () => {
        switch (activeSection) {
            case 'welcome':
                return <WelcomeSection />;
            case 'profile':
                return <LitigantProfileSection/>;
            case 'consultLawyers':
                return <ConsultLawyersSection />;
            case 'askQuery':
                return <AskQuerySection />;
            case 'faqs':
                return <FAQPage/>;
            case 'blogPosts':
                return <BlogPostsSection />;
            default:
                return <WelcomeSection />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            {/* Sidebar */}
            <ToastContainer/>
            <aside className={`bg-white w-64 min-h-screen p-4 fixed top-0 left-0 z-20 transform transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-orange-600">Dashboard</h2>
                    <button onClick={toggleSidebar} className="lg:hidden">
                        <X className="h-6 w-6 text-orange-600" />
                    </button>
                </div>
                {userData && (
                    <div className="flex flex-col items-center space-x-3 mb-6">
                        <img
                            src={userData.profilePhoto || "/api/placeholder/40/40"}
                            alt="Profile"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="text-sm font-medium text-gray-700">{userData.fullName}</span>
                    </div>
                )}
                <nav className="space-y-1">
                    <SidebarLink icon={<BadgeInfoIcon />} label="Your Profile" onClick={() => { setActiveSection('profile'); setIsSidebarOpen(false); }} />
                    <SidebarLink icon={<User />} label="Consult Lawyers" onClick={() => { setActiveSection('consultLawyers'); setIsSidebarOpen(false); }} />
                    <SidebarLink icon={<Book />} label="Nyaysanhita" href='/bhartiyanyaySanhita' target="_blank" />
                    <SidebarLink icon={<MessageSquare />} label="Ask a Query" onClick={() => { setActiveSection('askQuery'); setIsSidebarOpen(false); }} />
                    <SidebarLink icon={<MessageSquare />} label="FAQ's" onClick={() => { setActiveSection('faqs'); setIsSidebarOpen(false); }} />
                    <SidebarLink icon={<FileText />} label="Blog Posts" onClick={() => { setActiveSection('blogPosts'); setIsSidebarOpen(false); }} />
                    <SidebarLink icon={<Info />} label="About" href="/aboutus" target="_blank" />
                    <SidebarLink icon={<PhoneCall />} label="Contact Us" href="/contactus" target="_blank" />
                    <SidebarLink onClick={handleLogOut} className="text-orange-500 text-lg py-1" label="Logout" icon={<LogOut />} />
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-6 overflow-y-auto">
                <button onClick={toggleSidebar} className="lg:hidden mb-4">
                    <Menu className="h-6 w-6 text-orange-600" />
                </button>
                {renderSection()}
            </main>
        </div>
    );
};

const SidebarLink = ({ icon, label, onClick, href, target, className }) => {
    const baseClasses = "flex items-center space-x-2 text-gray-700 hover:bg-orange-100 rounded p-2 cursor-pointer transition-colors duration-200";
    const classes = className ? `${baseClasses} ${className}` : baseClasses;

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : ""}
                className={classes}
            >
                {icon}
                <span>{label}</span>
            </a>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            {icon}
            <span>{label}</span>
        </button>
    );
};

export default LitigantDashboard;