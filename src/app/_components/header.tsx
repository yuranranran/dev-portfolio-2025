'use client';

import React, { useState } from "react";
import HeaderLink from "./header-link";
import MobileDropdown from "./header-mobile-dropdown";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white bg-opacity-30 backdrop-blur- z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo with responsive sizing */}
        <img
          src="/assets/home/header-logo.png"
          alt="Logo"
          className="h-16 md:h-20 lg:h-24"
        />

        {/* Navigation for larger screens */}
        <nav className="hidden md:flex space-x-8">
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/projects">Projects</HeaderLink>
          <HeaderLink href="/blogs">Blogs</HeaderLink>
          <HeaderLink href="/about">About Me</HeaderLink>
        </nav>

        {/* Mobile Menu Button (Visible on Small Screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <svg
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <MobileDropdown isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
      </div>
    </header>
  );
};

export default Header;
