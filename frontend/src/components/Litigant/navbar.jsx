import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react'; // Import icons from Lucide React

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const toggleProfileDropdown = () => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    const handleSectionClick = (section) => {
        // Add logic for scrolling to sections if needed
        console.log(`Navigating to ${section}`);
        setIsDrawerOpen(false); // Close drawer after clicking on link in mobile view
    };

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-orange-600">
                    Law Services
                </Link>

                {/* Links for Desktop View */}
                <div className="hidden md:flex space-x-8">
                    <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('consultLawyers')}>Consult Verified Lawyers</a>
                    <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('nyaysanhita')}>Bhartiya Nyaysanhita</a>
                    <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('askQuery')}>Ask a Query</a>
                    <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('blogPosts')}>Lawyer Blog Posts</a>
                    <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('about')}>About</a>
                    <a className="text-orange-500 text-lg py-1" onClick={() => handleSectionClick('contactus')}>Contact Us</a>
                </div>

                {/* Profile Dropdown for Desktop */}
                <div className="relative hidden md:block">
                    <button
                        className="flex items-center text-orange-600 focus:outline-none"
                        onClick={toggleProfileDropdown}
                    >
                        <User className="text-2xl mr-2" />
                        <span>Profile</span>
                    </button>
                    {isProfileDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                            <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">My Profile</Link>
                            <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Settings</Link>
                            <Link to="/logout" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Logout</Link>
                        </div>
                    )}
                </div>

                {/* Hamburger Icon for Mobile View */}
                <button
                    className="md:hidden flex items-center text-orange-600 focus:outline-none"
                    onClick={toggleDrawer}
                >
                    {isDrawerOpen ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
                </button>
            </div>

            {/* Drawer for Mobile View */}
            {isDrawerOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="flex flex-col space-y-4 py-4 px-6">
                        <a className="text-orange-500 text-lg" onClick={() => handleSectionClick('consultLawyers')}>Consult Verified Lawyers</a>
                        <a className="text-orange-500 text-lg" onClick={() => handleSectionClick('nyaysanhita')}>Bhartiya Nyaysanhita</a>
                        <a className="text-orange-500 text-lg" onClick={() => handleSectionClick('askQuery')}>Ask a Query</a>
                        <a className="text-orange-500 text-lg" onClick={() => handleSectionClick('blogPosts')}>Lawyer Blog Posts</a>
                        <a className="text-orange-500 text-lg" onClick={() => handleSectionClick('about')}>About</a>
                        <a className="text-orange-500 text-lg" onClick={() => handleSectionClick('contactus')}>Contact Us</a>
                        {/* Profile Section */}
                        <div className="relative">
                            <button
                                className="flex items-center text-orange-600 focus:outline-none"
                                onClick={toggleProfileDropdown}
                            >
                                <User className="text-2xl mr-2" />
                                <span>Profile</span>
                            </button>
                            {isProfileDropdownOpen && (
                                <div className="mt-2 w-full bg-white shadow-lg rounded-lg py-2">
                                    <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">My Profile</Link>
                                    <Link to="/settings" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Settings</Link>
                                    <Link to="/logout" className="block px-4 py-2 text-gray-800 hover:bg-orange-100">Logout</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
