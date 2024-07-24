// Navbar.jsx

import React from 'react';
import '../styles.css'; // Ensure this path is correct

const Navbar = () => {
    return (
        <nav className="bg-green-700 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a className="text-white text-lg font-bold" href="#">My Website</a>
                <button className="block lg:hidden text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <div className="hidden lg:flex lg:items-center w-full lg:w-auto">
                    <ul className="flex flex-col lg:flex-row lg:ml-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white hover:text-[#547326]" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white hover:text-[#547326]" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white hover:text-[#547326]" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white hover:text-[#547326] contact-link border border-white rounded px-3 py-1" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
