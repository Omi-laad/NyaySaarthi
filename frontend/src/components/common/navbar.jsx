import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaFontAwesome, } from 'react-icons/fa';
import {
    faB,
    faBars,
    faChevronDown,
    faChevronUp,
    faClose,
    faSignOut,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const [popupVisibility, setPopupVisibility] = useState({
        popup1: false,
        popup2: false,
        popup3: false,
    });

    return (
        <nav className="bg-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-orange-500 font-bold text-xl">
                    <a href='/' >NyaySaarthi </a></div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <a href="/aboutus" className="text-orange-500 hover:text-orange-200">About Us</a>
                    {/* <a href="#" className="text-orange-500 hover:text-orange-200">Features</a> */}
                    <button onClick={toggleDropdown} className='text-orange-500 hover:text-orange-200 ' >
                        Register
                        <span>
                            {!popupVisibility.popup1 && (
                                <FaFontAwesome icon={faChevronDown} />

                            )}
                            {popupVisibility.popup1 && (
                                <FaFontAwesome icon={faChevronUp} />
                            )}
                        </span>
                    </button>
                    {isOpen && (
                        <div
                            className="origin-top-right absolute right-0 mt-10 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                            // className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                        >
                            <div className="py-1" role="none">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-200"
                                    role="menuitem"
                                >
                                    As a Litigant
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-200"
                                    role="menuitem"
                                >
                                    As a Lawyer
                                </a>

                            </div>
                        </div>
                    )}

                    <a href="#" className="text-orange-500 hover:text-orange-200">Contact Us</a>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-orange-500">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-orange-500 z-50 flex flex-col items-center justify-center">
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
                        <X size={24} />
                    </button>
                    <a href="/aboutus" className="text-white text-xl py-2" onClick={toggleMenu}>About Us</a>
                    <a href="#" className="text-white text-xl py-2" onClick={toggleMenu}>Features</a>
                    <a href="#" className="text-white text-xl py-2" onClick={toggleMenu}>Contact Us</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;