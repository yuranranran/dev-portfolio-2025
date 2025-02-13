"use client";

import React, { useState } from "react";
import NavLinks from "./nav-links";
import MobileMenuButton from "./mobile-menu-button";
import MobileDropdown from "./mobile-dropdown";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white bg-opacity-30 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="hover:underline font-major-mono text-3xl">
          AYL
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLinks />
        </nav>

        {/* Mobile Menu Button */}
        <MobileMenuButton
          isOpen={isOpen}
          toggleMenu={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Mobile Dropdown */}
      {isOpen && <MobileDropdown closeMenu={() => setIsOpen(false)} />}
    </header>
  );
};

export default Header;
