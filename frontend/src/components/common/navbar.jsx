// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { FaFontAwesome, } from 'react-icons/fa';
// import {
//     faB,
//     faBars,
//     faChevronDown,
//     faChevronUp,
//     faClose,
//     faSignOut,
//     faUser,
// } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => setIsOpen(!isOpen);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);
//     }
//     const [popupVisibility, setPopupVisibility] = useState({
//         popup1: false,
//         popup2: false,
//         popup3: false,
//     });

//     return (
//         <nav className="bg-white p-4">
//             <div className="container mx-auto flex justify-between items-center">
//                 <div className="text-orange-500 font-bold text-xl">
//                     <a href='/' >NyaySaarthi </a></div>

//                 {/* Desktop Menu */}
//                 <div className="hidden md:flex space-x-8">
//                     <a href="/aboutus" className="text-orange-500 hover:text-orange-200">About Us</a>

//                     {/* <a href="#" className="text-orange-500 hover:text-orange-200">Features</a> */}
//                     <button onClick={toggleDropdown} className='text-orange-500 hover:text-orange-200 ' >
//                         Features
//                         <span>
//                             {!popupVisibility.popup1 && (
//                                 <FaFontAwesome icon={faBars} />

//                             )}
//                             {popupVisibility.popup1 && (
//                                 <FaFontAwesome icon={faClose} />
//                             )}
//                         </span>
//                     </button>
//                     {isOpen && (
//                         <div
//                             className="origin-top-right absolute right-0 mt-10 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
//                             // className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
//                             role="menu"
//                             aria-orientation="vertical"
//                             aria-labelledby="menu-button"
//                         >
//                             <div className="py-1" role="none">
//                                 <a
//                                     href="#"
//                                     className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-200"
//                                     role="menuitem"
//                                 >
//                                     As a Litigant
//                                 </a>
//                                 <a
//                                     href="/register"
//                                     className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-200"
//                                     role="menuitem"
//                                 >
//                                     As a Lawyer
//                                 </a>

//                             </div>
//                         </div>
//                     )}

//                     <button onClick={toggleDropdown} className='text-orange-500 hover:text-orange-200 ' >
//                         Register
//                         <span>
//                             {!popupVisibility.popup1 && (
//                                 <FaFontAwesome icon={faBars} />

//                             )}
//                             {popupVisibility.popup1 && (
//                                 <FaFontAwesome icon={faClose} />
//                             )}
//                         </span>
//                     </button>
//                     {isOpen && (
//                         <div
//                             className="origin-top-right absolute right-0 mt-10 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
//                             // className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
//                             role="menu"
//                             aria-orientation="vertical"
//                             aria-labelledby="menu-button"
//                         >
//                             <div className="py-1" role="none">
//                                 <a
//                                     href="#"
//                                     className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-200"
//                                     role="menuitem"
//                                 >
//                                     As a Litigant
//                                 </a>
//                                 <a
//                                     href="/register"
//                                     className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-200"
//                                     role="menuitem"
//                                 >
//                                     As a Lawyer
//                                 </a>

//                             </div>
//                         </div>
//                     )}

//                     <a href="/contactus" className="text-orange-500 hover:text-orange-200">Contact Us</a>
//                 </div>

//                 {/* Mobile Menu Button */}
//                 <button onClick={toggleMenu} className="md:hidden text-orange-500">
//                     {isOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//             </div>

//             {/* Mobile Drawer */}
//             {isOpen && (
//                 <div className="md:hidden fixed inset-0 bg-orange-500 z-50 flex flex-col items-center justify-center">
//                     <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
//                         <X size={24} />
//                     </button>
//                     <a href="/aboutus" className="text-white text-xl py-2" onClick={toggleMenu}>About Us</a>
//                     <a href="#" className="text-white text-xl py-2" onClick={toggleMenu}>Features</a>
//                     <a href="/contactus" className="text-white text-xl py-2" onClick={toggleMenu}>Contact Us</a>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ scrollToSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);

    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const toggleRegisterDropdown = () => setIsRegisterDropdownOpen(!isRegisterDropdownOpen);



    const handleSectionClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsDropdownOpen(false);
        setIsOpen(false);
    };
    const handleLitigantClick = () => {
        navigate('/login')
    }

    const handleClick = () => {
        navigate('/register')

    }
    return (
        <nav className="bg-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-orange-500 font-bold text-xl">
                    <a href='/'>NyaySaarthi</a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <a href="/aboutus" className="text-orange-500 hover:text-orange-600">About Us</a>

                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className='text-orange-500 hover:text-orange-600 flex items-center'
                        >
                            Features
                            {isDropdownOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <a
                                        // href="#"
                                        className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                        onClick={() => handleSectionClick('consultLawyers')}
                                    >
                                        Consult Verified Lawyers
                                    </a>
                                    <a
                                        // href="#"
                                        className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                        onClick={() => handleSectionClick('nyaysanhita')}
                                    >
                                        Bhartiya Nyaysanhita
                                    </a>
                                    <a
                                        // href="#"
                                        className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                        onClick={() => handleSectionClick('askQuery')}
                                    >
                                        Ask a Query
                                    </a>
                                    <a
                                        // href="#"
                                        className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                        onClick={() => handleSectionClick('blogPosts')}
                                    >
                                        Lawyer Blog Posts
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={toggleRegisterDropdown}
                        className="text-orange-500 hover:text-orange-600 flex items-center"
                    >
                        Register
                        {isRegisterDropdownOpen ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                    </button>
                    {isRegisterDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a
                                    className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                    onClick={handleLitigantClick}
                                >
                                    As a Litigant
                                </a>
                                <a
                                    className="block px-4 py-2 text-sm text-orange-500 hover:bg-orange-100"
                                    onClick={handleClick}
                                >
                                    As a Lawyer
                                </a>
                            </div>
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
                <div className="md:hidden fixed inset-0 bg-orange-500 z-50 flex flex-col items-center justify-center">
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
                        <X size={24} />
                    </button>
                    <a href="/aboutus" className="text-white text-xl py-2" onClick={toggleMenu}>About Us</a>
                    <button onClick={toggleDropdown} className="text-white text-xl py-2">
                        Features {isDropdownOpen ? <ChevronUp className="ml-1 inline" /> : <ChevronDown className="ml-1 inline" />}
                    </button>
                    {isDropdownOpen && (
                        <div className="flex flex-col items-center">
                            <a className="text-white text-lg py-1" onClick={() => handleSectionClick('consultLawyers')}>Consult Verified Lawyers</a>
                            <a className="text-white text-lg py-1" onClick={() => handleSectionClick('nyaysanhita')}>Bhartiya Nyaysanhita</a>
                            <a className="text-white text-lg py-1" onClick={() => handleSectionClick('askQuery')}>Ask a Query</a>
                            <a className="text-white text-lg py-1" onClick={() => handleSectionClick('blogPosts')}>Lawyer Blog Posts</a>
                        </div>
                    )}
                    <a href="/contactus" className="text-white text-xl py-2" onClick={toggleMenu}>Contact Us</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;