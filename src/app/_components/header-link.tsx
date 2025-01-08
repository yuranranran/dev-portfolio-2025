"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href ? true : false;

  return (
    <a
      href={href}
      className={`text-slate-400 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-700 
        ${ isActive ? "text-slate-950 font-bold" : ""}`}
    >
      {children}
    </a>
  );
};

export default HeaderLink;
