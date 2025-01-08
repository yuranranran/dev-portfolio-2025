'use client';

import React from 'react';
import HeaderLink from './header-link';

interface MobileDropdownProps {
    isOpen: boolean;
    closeMenu: () => void;
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({ isOpen, closeMenu }) => {
    return (
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white bg-opacity-95 backdrop-blur-md absolute top-16 left-0 right-0 shadow-lg`}>
            <nav className="flex flex-col space-y-4 p-6">
                <HeaderLink href="/" onClick={closeMenu}>Home</HeaderLink>
                <HeaderLink href="/projects" onClick={closeMenu}>Projects</HeaderLink>
                <HeaderLink href="/blogs" onClick={closeMenu}>Blogs</HeaderLink>
                <HeaderLink href="/about" onClick={closeMenu}>About Me</HeaderLink>
            </nav>
        </div>
    )
};

export default MobileDropdown;
