// Render a list of navigation links for both desktop and mobile views.

import React from "react";
import HeaderLink from "./header-link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about-me", label: "About Me" },
];

const NavLinks: React.FC = () => (
  <>
    {links.map((link) => (
      <HeaderLink key={link.href} href={link.href}>
        {link.label}
      </HeaderLink>
    ))}
  </>
);

export default NavLinks;
