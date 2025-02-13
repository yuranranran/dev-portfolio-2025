"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
}

const HeaderLink: React.FC<Props> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <a
      href={href}
      className={`text-slate-400 hover:text-slate-900 font-light hover:underline ${
        isActive ? "font-normal text-slate-950" : ""
      }`}
    >
      {children}
    </a>
  );
};

export default HeaderLink;
