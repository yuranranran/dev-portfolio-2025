import React from "react";
import HeaderLink from "./header-link";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white bg-opacity-30 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <img src="/favicon/favicon-48x48.png" alt="Logo" className="h-10 w-10"/>
        <nav className="flex space-x-8">
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/projects">Projects</HeaderLink>
          <HeaderLink href="/blogs">Blogs</HeaderLink>
          <HeaderLink href="/about">About Me</HeaderLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;