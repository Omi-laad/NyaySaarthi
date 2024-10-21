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

    const handleClick = (path) => {
        handleNavigation(path);
        toggleMenu();
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
        <nav className="bg-[#0F172A] p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-[#B7935C] font-bold text-xl">
                    <a href="/">NyaySaarthi</a>
                </div>

                {/* Mobile menu button */}
                <button onClick={toggleMenu} className="md:hidden text-[#B7935C]">
                    <Menu size={24} />
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <a href="/aboutus" className="text-[#B7935C] hover:text-orange-600">About Us</a>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className='text-[#B7935C] hover:text-orange-600 flex items-center'
                        >
                            Features
                            {isDropdownOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                    <a
                                        className="block px-4 py-2 text-sm text-[#B7935C] hover:bg-orange-100"
                                        onClick={() => handleSectionClick('consultLawyers')}
                                    >
                                        Consult Verified Lawyers
                                    </a>
                                    <a
                                        className="block px-4 py-2 text-sm text-[#B7935C] hover:bg-orange-100"
                                        onClick={() => handleSectionClick('nyaysanhita')}
                                    >
                                        Bhartiya Nyaysanhita
                                    </a>
                                    <a
                                        className="block px-4 py-2 text-sm text-[#B7935C] hover:bg-orange-100"
                                        onClick={() => handleSectionClick('askQuery')}
                                    >
                                        Ask a Query
                                    </a>
                                    <a
                                        className="block px-4 py-2 text-sm text-[#B7935C] hover:bg-orange-100"
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
                            className="text-[#B7935C] hover:text-orange-600 flex items-center"
                        >
                            Register
                            {isRegisterDropdownOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                        </button>
                        {isRegisterDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                <div className="py-1" role="menu" aria-orientation="vertical">
                                    <a
                                        className="block px-4 py-2 text-sm text-[#B7935C] hover:bg-orange-100"
                                        onClick={() => handleNavigation('/registerlitigant')}
                                    >
                                        As a Litigant
                                    </a>
                                    <a
                                        className="block px-4 py-2 text-sm text-[#B7935C] hover:bg-orange-100"
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
                                className="text-[#B7935C] hover:text-orange-600 flex items-center"
                            >
                                Login
                                {isLoginDropdownOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                            </button>
                            {isLoginDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                        <a
                                            className="block px-4 py-2 text-sm text-[#B7935C] hover:bg-orange-100"
                                            onClick={() => handleNavigation('/login')}
                                        >
                                            As a Litigant
                                        </a>
                                        <a
                                            className="block px-4 py-2 text-sm text-[#B7935C] hover:bg-orange-100"
                                            onClick={() => handleNavigation('/login-lawyer')}
                                        >
                                            As a Lawyer
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* {isLoggedIn && (
                        <div className="relative" ref={profileDropdownRef}>
                            <button
                                onClick={toggleProfileDropdown}
                                className="text-[#B7935C] hover:text-orange-600 flex items-center"
                            >
                                <User className="mr-2" size={20} />
                                {userName}
                                {isProfileDropdownOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                            </button>
                            {isProfileDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                        <a
                                            className="block px-4 py-2 text-sm text-[#B7935C] hover:bg-orange-100"
                                            onClick={() => handleNavigation('/profile')}
                                        >
                                            View Profile
                                        </a>
                                        <a
                                            className="block px-4 py-2 text-sm text-[#B7935C] hover:bg-orange-100"
                                            onClick={() => handleNavigation('/settings')}
                                        >
                                            Settings
                                        </a>
                                        <a
                                            className="block px-4 py-2 text-sm text-[#B7935C] hover:bg-orange-100"
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
                    )} */}

                    <a href="/contactus" className="text-[#B7935C] hover:text-orange-600">Contact Us</a>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
                        <nav className="fixed right-0 top-0 bottom-0 w-64 bg-white shadow-lg overflow-y-auto">
                            <div className="p-4">
                                <button onClick={toggleMenu} className="absolute top-4 right-4 text-[#B7935C] hover:text-orange-700">
                                    <X size={24} />
                                </button>

                                <div className="mt-8 space-y-4">
                                    <a href="/aboutus" className="block text-[#B7935C] hover:text-orange-700 text-lg py-2" onClick={() => handleClick('/aboutus')}>About Us</a>

                                    <div>
                                        <button onClick={toggleDropdown} className="w-full text-left text-[#B7935C] hover:text-orange-700 text-lg py-2 flex items-center justify-between">
                                            Features
                                            {isDropdownOpen ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
                                        </button>
                                        {isDropdownOpen && (
                                            <div className="pl-4 space-y-2 mt-2">
                                                <a className="block text-[#B7935C] hover:text-orange-700" onClick={() => handleSectionClick('consultLawyers')}>Consult Verified Lawyers</a>
                                                <a className="block text-[#B7935C] hover:text-orange-700" onClick={() => handleSectionClick('nyaysanhita')}>Bhartiya Nyaysanhita</a>
                                                <a className="block text-[#B7935C] hover:text-orange-700" onClick={() => handleSectionClick('askQuery')}>Ask a Query</a>
                                                <a className="block text-[#B7935C] hover:text-orange-700" onClick={() => handleSectionClick('blogPosts')}>Lawyer Blog Posts</a>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <button onClick={toggleRegisterDropdown} className="w-full text-left text-[#B7935C] hover:text-orange-700 text-lg py-2 flex items-center justify-between">
                                            Register
                                            {isRegisterDropdownOpen ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
                                        </button>
                                        {isRegisterDropdownOpen && (
                                            <div className="pl-4 space-y-2 mt-2">
                                                <a className="block text-[#B7935C] hover:text-orange-700" onClick={() => handleNavigation('/registerlitigant')}>As a Litigant</a>
                                                <a className="block text-[#B7935C] hover:text-orange-700" onClick={() => handleNavigation('/registerlawyer')}>As a Lawyer</a>
                                            </div>
                                        )}
                                    </div>

                                    {/* {!isLoggedIn && ( */}
                                    <div>
                                        <button onClick={toggleLoginDropdown} className="w-full text-left text-[#B7935C] hover:text-orange-700 text-lg py-2 flex items-center justify-between">
                                            Login
                                            {isLoginDropdownOpen ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
                                        </button>
                                        {/* {isLoginDropdownOpen && ( */}
                                        <div className="pl-4 space-y-2 mt-2">
                                            <a className="block text-[#B7935C] hover:text-orange-700" onClick={() => handleNavigation('/login')}>As a Litigant</a>
                                            <a className="block text-[#B7935C] hover:text-orange-700" onClick={() => handleNavigation('/login-lawyer')}>As a Lawyer</a>
                                        </div>
                                        {/* )} */}
                                    </div>

                                    {/* isLoggedIn && (
                                    <div>
                                        <button onClick={toggleProfileDropdown} className="w-full text-left text-[#B7935C] hover:text-orange-700 text-lg py-2 flex items-center justify-between">
                                            <span className="flex items-center">
                                                <User className="mr-2" size={20} />
                                                {userName}
                                            </span>
                                            {isProfileDropdownOpen ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
                                        </button>
                                        {isProfileDropdownOpen && (
                                            <div className="pl-4 space-y-2 mt-2">
                                                <a className="block text-[#B7935C] hover:text-orange-700" onClick={() => handleNavigation('/profile')}>View Profile</a>
                                                <a className="block text-[#B7935C] hover:text-orange-700" onClick={() => handleNavigation('/settings')}>Settings</a>
                                                <a className="block text-[#B7935C] hover:text-orange-700" onClick={() => {
                                                    // Add logout logic here
                                                    handleNavigation('/');
                                                }}>Logout</a>
                                            </div>
                                        )}
                                    </div> */}


                                    <a href="/contactus" className="block text-[#B7935C] hover:text-orange-700 text-lg py-2" onClick={() => handleNavigation('/contactus')}>Contact Us</a>
                                </div>
                            </div>
                        </nav>

                    </div>
                )}

            </div>
        </nav>
    )
};

export default Navbar;