// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Navbar = ({ scrollToSection }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);
//     const registerDropdownRef = useRef(null);

//     const navigate = useNavigate();

//     const toggleMenu = () => setIsOpen(!isOpen);
//     const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
//     const toggleRegisterDropdown = () => setIsRegisterDropdownOpen(!isRegisterDropdownOpen);

//     const handleSectionClick = (sectionId) => {
//         scrollToSection(sectionId);
//         setIsDropdownOpen(false);
//         setIsOpen(false);
//     };

//     const handleLitigantClick = () => {
//         navigate('/login')
//         window.scrollTo({
//             top: 0,
//             behavior: 'instant',
//         })
//     };
//     const handleClick = () => {
//         navigate('/register');
//         window.scrollTo({
//             top: 0,
//             behavior: 'instant',
//         })
//     };

//     // Close dropdown when clicking outside of it
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//             }
//             if (registerDropdownRef.current && !registerDropdownRef.current.contains(event.target)) {
//                 setIsRegisterDropdownOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     return (
//         <nav className="bg-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
//             <div className="container mx-auto flex justify-between items-center">
//                 <div className="text-orange-500 font-bold text-xl">
//                     <a href="/">NyaySaarthi</a>
//                 </div>

//                 {/* Desktop Menu */}
//                 <div className="hidden md:flex space-x-8 items-center">
//                     <a href="/aboutus" className="text-orange-500 hover:text-orange-600">About Us</a>

//                     <div className="relative" ref={dropdownRef}>
//                         <button
//                             onClick={toggleDropdown}
//                             className='text-orange-500 hover:text-orange-600 flex items-center'
//                         >
//                             Features
//                             {isDropdownOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
//                         </button>
//                         {isDropdownOpen && (
//                             <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
//                                 <div className="py-1" role="menu" aria-orientation="vertical">
//                                     <a
//                                         className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
//                                         onClick={() => handleSectionClick('consultLawyers')}
//                                     >
//                                         Consult Verified Lawyers
//                                     </a>
//                                     <a
//                                         className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
//                                         onClick={() => handleSectionClick('nyaysanhita')}
//                                     >
//                                         Bhartiya Nyaysanhita
//                                     </a>
//                                     <a
//                                         className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
//                                         onClick={() => handleSectionClick('askQuery')}
//                                     >
//                                         Ask a Query
//                                     </a>
//                                     <a
//                                         className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
//                                         onClick={() => handleSectionClick('blogPosts')}
//                                     >
//                                         Lawyer Blog Posts
//                                     </a>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     <div className="relative" ref={registerDropdownRef}>
//                         <button
//                             onClick={toggleRegisterDropdown}
//                             className="text-orange-500 hover:text-orange-600 flex items-center"
//                         >
//                             Register
//                             {isRegisterDropdownOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
//                         </button>
//                         {isRegisterDropdownOpen && (
//                             <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
//                                 <div className="py-1" role="menu" aria-orientation="vertical">
//                                     <a
//                                         className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
//                                         onClick={handleLitigantClick}
//                                     >
//                                         As a Litigant
//                                     </a>
//                                     <a
//                                         className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
//                                         onClick={handleClick}
//                                     >
//                                         As a Lawyer
//                                     </a>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     <a href="/contactus" className="text-orange-500 hover:text-orange-600">Contact Us</a>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button onClick={toggleMenu} className="md:hidden text-orange-500">
//                     {isOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//             </div>

//             {/* Mobile Drawer */}
//             {isOpen && (
//                 <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
//                     <button onClick={toggleMenu} className="absolute top-4 right-4 text-orange-500">
//                         <X size={24} />
//                     </button>
//                     <a href="/aboutus" className="text-orange-500 text-xl py-2" onClick={toggleMenu}>About Us</a>
//                     <button onClick={toggleDropdown} className="text-orange-500 text-xl py-2">
//                         Features {isDropdownOpen ? <ChevronUp className="ml-1 inline" /> : <ChevronDown className="ml-1 inline" />}
//                     </button>
//                     {isDropdownOpen && (
//                         <div className="flex flex-col items-center">
//                             <a href='/consultverifiedlawyers' className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('consultLawyers')}>Consult Verified Lawyers</a>
//                             <a href='#' className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('nyaysanhita')}>Bhartiya Nyaysanhita</a>
//                             <a href='#' className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('askQuery')}>Ask a Query</a>
//                             <a href='#' className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('blogPosts')}>Lawyer Blog Posts</a>
//                         </div>
//                     )}
//                     <button onClick={toggleRegisterDropdown} className="text-orange-500 text-xl py-2">
//                         Register {isRegisterDropdownOpen ? <ChevronUp className="ml-1 inline" /> : <ChevronDown className="ml-1 inline" />}
//                     </button>
//                     {isRegisterDropdownOpen && (
//                         <div className="flex flex-col items-center">
//                             <a className="text-orange-500 text-lg py-1" onClick={handleLitigantClick}>As a Litigant</a>
//                             <a className="text-orange-500 text-lg py-1" onClick={handleClick}>As a Lawyer</a>
//                         </div>
//                     )}
//                     <a href="/contactus" className="text-orange-500 text-xl py-2" onClick={toggleMenu}>Contact Us</a>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;



// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Navbar = ({ scrollToSection }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);
//     const registerDropdownRef = useRef(null);

//     const navigate = useNavigate();
//     const location = useLocation();

//     const toggleMenu = () => setIsOpen(!isOpen);
//     const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
//     const toggleRegisterDropdown = () => setIsRegisterDropdownOpen(!isRegisterDropdownOpen);

//     const handleSectionClick = (sectionId) => {
//         if (location.pathname !== '/') {
//             navigate('/', { state: { scrollTo: sectionId } });
//         } else if (typeof scrollToSection === 'function') {
//             scrollToSection(sectionId);
//         }
//         setIsDropdownOpen(false);
//         setIsOpen(false);
//     };

//     const handleNavigation = (path) => {
//         navigate(path);
//         window.scrollTo({ top: 0, behavior: 'instant' });
//         setIsOpen(false);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsDropdownOpen(false);
//             }
//             if (registerDropdownRef.current && !registerDropdownRef.current.contains(event.target)) {
//                 setIsRegisterDropdownOpen(false);
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     useEffect(() => {
//         if (location.state && location.state.scrollTo && typeof scrollToSection === 'function') {
//             scrollToSection(location.state.scrollTo);
//             navigate(location.pathname, { replace: true, state: {} });
//         }
//     }, [location, scrollToSection, navigate]);

//     return (
//         <nav className="bg-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
//             <div className="container mx-auto flex justify-between items-center">
//                 <div className="text-orange-500 font-bold text-xl">
//                     <a href="/">NyaySaarthi</a>
//                 </div>

//                 {/* Desktop Menu */}
//                 <div className="hidden md:flex space-x-8 items-center">
//                     <a href="/aboutus" className="text-orange-500 hover:text-orange-600">About Us</a>

//                     <div className="relative" ref={dropdownRef}>
//                         <button
//                             onClick={toggleDropdown}
//                             className='text-orange-500 hover:text-orange-600 flex items-center'
//                         >
//                             Features
//                             {isDropdownOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
//                         </button>
//                         {isDropdownOpen && (
//                             <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
//                                 <div className="py-1" role="menu" aria-orientation="vertical">
//                                     <a
//                                         className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
//                                         onClick={() => handleSectionClick('consultLawyers')}
//                                     >
//                                         Consult Verified Lawyers
//                                     </a>
//                                     <a
//                                         className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
//                                         onClick={() => handleSectionClick('nyaysanhita')}
//                                     >
//                                         Bhartiya Nyaysanhita
//                                     </a>
//                                     <a
//                                         className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
//                                         onClick={() => handleSectionClick('askQuery')}
//                                     >
//                                         Ask a Query
//                                     </a>
//                                     <a
//                                         className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
//                                         onClick={() => handleSectionClick('blogPosts')}
//                                     >
//                                         Lawyer Blog Posts
//                                     </a>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     <div className="relative" ref={registerDropdownRef}>
//                         <button
//                             onClick={toggleRegisterDropdown}
//                             className="text-orange-500 hover:text-orange-600 flex items-center"
//                         >
//                             Register
//                             {isRegisterDropdownOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
//                         </button>
//                         {isRegisterDropdownOpen && (
//                             <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
//                                 <div className="py-1" role="menu" aria-orientation="vertical">
//                                     <a
//                                         className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
//                                         onClick={() => handleNavigation('/login')}
//                                     >
//                                         As a Litigant
//                                     </a>
//                                     <a
//                                         className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
//                                         onClick={() => handleNavigation('/register')}
//                                     >
//                                         As a Lawyer
//                                     </a>
//                                 </div>
//                             </div>
//                         )}
//                     </div>

//                     <a href="/contactus" className="text-orange-500 hover:text-orange-600">Contact Us</a>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button onClick={toggleMenu} className="md:hidden text-orange-500">
//                     {isOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//             </div>

//             {/* Mobile Drawer */}
//             {isOpen && (
//                 <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
//                     <button onClick={toggleMenu} className="absolute top-4 right-4 text-orange-500">
//                         <X size={24} />
//                     </button>
//                     <a href="/aboutus" className="text-orange-500 text-xl py-2" onClick={toggleMenu}>About Us</a>
//                     <button onClick={toggleDropdown} className="text-orange-500 text-xl py-2">
//                         Features {isDropdownOpen ? <ChevronUp className="ml-1 inline" /> : <ChevronDown className="ml-1 inline" />}
//                     </button>
//                     {isDropdownOpen && (
//                         <div className="flex flex-col items-center">
//                             <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('consultLawyers')}>Consult Verified Lawyers</a>
//                             <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('nyaysanhita')}>Bhartiya Nyaysanhita</a>
//                             <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('askQuery')}>Ask a Query</a>
//                             <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('blogPosts')}>Lawyer Blog Posts</a>
//                         </div>
//                     )}
//                     <button onClick={toggleRegisterDropdown} className="text-orange-500 text-xl py-2">
//                         Register {isRegisterDropdownOpen ? <ChevronUp className="ml-1 inline" /> : <ChevronDown className="ml-1 inline" />}
//                     </button>
//                     {isRegisterDropdownOpen && (
//                         <div className="flex flex-col items-center">
//                             <a className="text-orange-500 text-lg py-1" onClick={() => handleNavigation('/login')}>As a Litigant</a>
//                             <a className="text-orange-500 text-lg py-1" onClick={() => handleNavigation('/register')}>As a Lawyer</a>
//                         </div>
//                     )}
//                     <a href="/contactus" className="text-orange-500 text-xl py-2" onClick={toggleMenu}>Contact Us</a>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronUp, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ scrollToSection, isLoggedIn, userType, userName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
    const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const registerDropdownRef = useRef(null);
    const loginDropdownRef = useRef(null);
    const profileDropdownRef = useRef(null);

    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleRegisterDropdown = () => setIsRegisterDropdownOpen(!isRegisterDropdownOpen);
    const toggleLoginDropdown = () => setIsLoginDropdownOpen(!isLoginDropdownOpen);
    const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

    const handleSectionClick = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: sectionId } });
        } else if (typeof scrollToSection === 'function') {
            scrollToSection(sectionId);
        }
        setIsDropdownOpen(false);
        setIsOpen(false);
    };

    const handleNavigation = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'instant' });
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            if (registerDropdownRef.current && !registerDropdownRef.current.contains(event.target)) {
                setIsRegisterDropdownOpen(false);
            }
            if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
                setIsLoginDropdownOpen(false);
            }
            if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
                setIsProfileDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (location.state && location.state.scrollTo && typeof scrollToSection === 'function') {
            scrollToSection(location.state.scrollTo);
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, scrollToSection, navigate]);

    return (
        <nav className="bg-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-orange-500 font-bold text-xl">
                    <a href="/">NyaySaarthi</a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <a href="/aboutus" className="text-orange-500 hover:text-orange-600">About Us</a>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className='text-orange-500 hover:text-orange-600 flex items-center'
                        >
                            Features
                            {isDropdownOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                    <a
                                        className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                        onClick={() => handleSectionClick('consultLawyers')}
                                    >
                                        Consult Verified Lawyers
                                    </a>
                                    <a
                                        className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                        onClick={() => handleSectionClick('nyaysanhita')}
                                    >
                                        Bhartiya Nyaysanhita
                                    </a>
                                    <a
                                        className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                        onClick={() => handleSectionClick('askQuery')}
                                    >
                                        Ask a Query
                                    </a>
                                    <a
                                        className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                        onClick={() => handleSectionClick('blogPosts')}
                                    >
                                        Lawyer Blog Posts
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative" ref={registerDropdownRef}>
                        <button
                            onClick={toggleRegisterDropdown}
                            className="text-orange-500 hover:text-orange-600 flex items-center"
                        >
                            Register
                            {isRegisterDropdownOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                        </button>
                        {isRegisterDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                    <a
                                        className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                        onClick={() => handleNavigation('/registerlitigant')}
                                    >
                                        As a Litigant
                                    </a>
                                    <a
                                        className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                        onClick={() => handleNavigation('/registerlawyer')}
                                    >
                                        As a Lawyer
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {!isLoggedIn && (
                        <div className="relative" ref={loginDropdownRef}>
                            <button
                                onClick={toggleLoginDropdown}
                                className="text-orange-500 hover:text-orange-600 flex items-center"
                            >
                                Login
                                {isLoginDropdownOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                            </button>
                            {isLoginDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                        <a
                                            className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                            onClick={() => handleNavigation('/login')}
                                        >
                                            As a Litigant
                                        </a>
                                        <a
                                            className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                            onClick={() => handleNavigation('/login/lawyer')}
                                        >
                                            As a Lawyer
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {isLoggedIn && (
                        <div className="relative" ref={profileDropdownRef}>
                            <button
                                onClick={toggleProfileDropdown}
                                className="text-orange-500 hover:text-orange-600 flex items-center"
                            >
                                <User className="mr-2" size={20} />
                                {userName}
                                {isProfileDropdownOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                            </button>
                            {isProfileDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                        <a
                                            className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                            onClick={() => handleNavigation('/profile')}
                                        >
                                            View Profile
                                        </a>
                                        <a
                                            className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                            onClick={() => handleNavigation('/settings')}
                                        >
                                            Settings
                                        </a>
                                        <a
                                            className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                            onClick={() => {
                                                // Add logout logic here
                                                handleNavigation('/');
                                            }}
                                        >
                                            Logout
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    <a href="/contactus" className="text-orange-500 hover:text-orange-600">Contact Us</a>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-orange-500">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <nav className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
                    {/* Close button */}
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-orange-500">
                        <X size={24} />
                    </button>

                    {/* About Us link */}
                    <a href="/aboutus" className="text-orange-500 text-xl py-2" onClick={toggleMenu}>About Us</a>

                    {/* Features Dropdown */}
                    <button onClick={toggleDropdown} className="text-orange-500 text-xl py-2">
                        Features {isDropdownOpen ? <ChevronUp className="ml-1 inline" /> : <ChevronDown className="ml-1 inline" />}
                    </button>
                    {isDropdownOpen && (
                        <div className="flex flex-col items-center">
                            <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('consultLawyers')}>Consult Verified Lawyers</a>
                            <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('nyaysanhita')}>Bhartiya Nyaysanhita</a>
                            <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('askQuery')}>Ask a Query</a>
                            <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('blogPosts')}>Lawyer Blog Posts</a>
                        </div>
                    )}

                    {/* Register Dropdown */}
                    <button onClick={toggleRegisterDropdown} className="text-orange-500 text-xl py-2">
                        Register {isRegisterDropdownOpen ? <ChevronUp className="ml-1 inline" /> : <ChevronDown className="ml-1 inline" />}
                    </button>
                    {isRegisterDropdownOpen && (
                        <div className="flex flex-col items-center">
                            <a className="text-orange-500 text-lg py-1" onClick={() => handleNavigation('/register/litigant')}>As a Litigant</a>
                            <a className="text-orange-500 text-lg py-1" onClick={() => handleNavigation('/register/lawyer')}>As a Lawyer</a>
                        </div>
                    )}

                    {/* Conditional login based on authentication */}
                    {!isLoggedIn && (
                        <>
                            {/* Login Dropdown */}
                            <button onClick={toggleLoginDropdown} className="text-orange-500 text-xl py-2">
                                Login {isLoginDropdownOpen ? <ChevronUp className="ml-1 inline" /> : <ChevronDown className="ml-1 inline" />}
                            </button>
                            {isLoginDropdownOpen && (
                                <div className="flex flex-col items-center">
                                    <a className="text-orange-500 text-lg py-1" onClick={() => handleNavigation('/login/litigant')}>As a Litigant</a>
                                    <a className="text-orange-500 text-lg py-1" onClick={() => handleNavigation('/login/lawyer')}>As a Lawyer</a>
                                </div>
                            )}
                        </>
                    )}

                    {/* Profile Dropdown for logged-in users */}
                    {isLoggedIn && (
                        <nav>
                            <button onClick={toggleProfileDropdown} className="text-orange-500 text-xl py-2 flex items-center">
                                <User className="mr-2" size={20} />
                                {userName}
                                {isProfileDropdownOpen ? <ChevronUp className="ml-1 inline" /> : <ChevronDown className="ml-1 inline" />}
                            </button>
                            {isProfileDropdownOpen && (
                                <div className="flex flex-col items-center">
                                    <a className="text-orange-500 text-lg py-1" onClick={() => handleNavigation('/profile')}>View Profile</a>
                                    <a className="text-orange-500 text-lg py-1" onClick={() => handleNavigation('/settings')}>Settings</a>
                                    <a className="text-orange-500 text-lg py-1" onClick={() => handleNavigation('/')}>Logout</a>
                                </div>
                            )}
                        </nav>
                    )}
                </nav>
            )}

        </nav>
    )
}
export default Navbar