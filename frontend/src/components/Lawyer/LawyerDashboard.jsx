// import React from 'react';
// import { Link } from 'react-router-dom';
// import { User, MessageSquare, Edit, Book, HelpCircle, Info, Phone, LogOut } from 'lucide-react';
// import ProfileSection from './ProfileSection';
// import DashboardCard from './DashboardCard';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// const LawyerDashboard = () => {
//     const navigate = useNavigate();
//     const handleLogOut = async () => {
//         try {
//             const res = await axios.post('/api/v1/lawyer/logout');
//             alert(res.data.message);
//             navigate('/');
//             window.scrollTo({
//                 top: 0,
//                 behavior: "instant",
//             });
//         } catch (err) {
//             alert(err);
//         }
//     };
//     return (
//         <div className="bg-gray-100 min-h-screen">
//             <div className="container mx-auto px-4 py-8">
//                 <h1 className="text-3xl font-bold text-orange-600 mb-8">Lawyer Dashboard</h1>

//                 <ProfileSection />
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//                     <DashboardCard
//                         title="Answer Query"
//                         icon={<HelpCircle className="h-8 w-8 text-orange-500" />}
//                         link="/answer-query"
//                     />
//                     <DashboardCard
//                         title="Write Blog"
//                         icon={<Edit className="h-8 w-8 text-orange-500" />}
//                         link="/write-blog"
//                     />
//                     <DashboardCard
//                         title="Chat with Litigant"
//                         icon={<MessageSquare className="h-8 w-8 text-orange-500" />}
//                         link="/chat-litigant"
//                     />
//                     <DashboardCard
//                         title="Nyay Sanhita"
//                         icon={<Book className="h-8 w-8 text-orange-500" />}
//                         // Change the DashboardCard to an anchor tag for opening in a new tab
//                         onClick={() => window.open("/bhartiyanyaySanhita", "_blank", "noopener,noreferrer")}
//                     />
//                     <DashboardCard
//                         title="About Us"
//                         icon={<Info className="h-8 w-8 text-orange-500" />}
//                         // Change the DashboardCard to an anchor tag for opening in a new tab
//                         onClick={() => window.open("/aboutus", "_blank", "noopener,noreferrer")}
//                     />
//                     <DashboardCard
//                         title="Contact Us"
//                         icon={<Phone className="h-8 w-8 text-orange-500" />}
//                         // Change the DashboardCard to an anchor tag for opening in a new tab
//                         onClick={() => window.open("/contactus", "_blank", "noopener,noreferrer")}
//                     />
//                 </div>


//                 <Link
//                     onClick={handleLogOut}
//                     className="mt-8 inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
//                 >
//                     <LogOut className="h-5 w-5 mr-2" />
//                     Logout
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default LawyerDashboard;











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


import React, { useState, useEffect, Profiler } from 'react';
import { X, Menu, User, Book, MessageSquare, FileText, Info, PhoneCall, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import WelcomeSection from './WelcomeSection';
// import ConsultLawyersSection from './ConsultLawyersSection';
// import AskQuerySection from './AskQuerySection';
// import BlogPostsSection from './BlogPostsSection';
import axios from "axios"
import ProfileSection from './ProfileSection';
import WriteBlogPage from './WriteBlogPage';
import QuestionDetail from './QuestionDetail';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {toast} from "sonner"
const LawyerDashboard = () => {
    const [activeSection, setActiveSection] = useState('welcome');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [userData, setUserData] = useState(null);

    const navigate = useNavigate();



    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             const response = await axios.get('/api/v1/lawyer/getlawyerById');
    //             setUserData(response.data.data);
    //         } catch (error) {
    //             console.error('Error fetching user data:', error);
    //         }
    //     };

    //     fetchUserData();
    // }, []);
    const handleLogOut = async () => {
        try {
            const res = await axios.post('/api/v1/lawyer/logout');
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
                return <ProfileSection />;
            // case 'consultLawyers':
            //     return <ConsultLawyersSection />;
            // case 'askQuery':
            //     return <AskQuerySection />
            case 'qna':
            return <QuestionDetail />;
            case 'Write Blogs':
                return <WriteBlogPage />;
            default:
                return <WelcomeSection />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100 overflow-hidden">
            {/* Sidebar */}
            <ToastContainer position="top-right" />
            <aside className={`bg-white w-64 min-h-screen p-4 fixed top-0 left-0 z-20 transform transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-orange-600">Dashboard</h2>
                    <button onClick={toggleSidebar} className="lg:hidden">
                        <X className="h-6 w-6 text-orange-600" />
                    </button>
                </div>
                <nav className="space-y-2">
                    <SidebarLink icon={<User />} label="Your Profile" onClick={() => { setActiveSection('profile'); setIsSidebarOpen(false); }} />

                    <SidebarLink icon={<Book />} label="Nyaysanhita" href='/bhartiyanyaySanhita' target="_blank" />
                    <SidebarLink icon={<MessageSquare />} label="Answer Queries" onClick={() => { setActiveSection('qna'); setIsSidebarOpen(false); }} />
                    <SidebarLink icon={<FileText />} label="Write Blogs" onClick={() => { setActiveSection('Write Blogs'); setIsSidebarOpen(false); }} />
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

export default LawyerDashboard;
