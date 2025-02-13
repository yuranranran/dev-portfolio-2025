import React from "react";
import NavLinks from "./nav-links";

interface Props {
  closeMenu: () => void;
}

const MobileDropdown: React.FC<Props> = ({ closeMenu }) => (
  <div className="md:hidden bg-white bg-opacity-95 absolute top-16 left-0 right-0 shadow-lg">
    <nav className="flex flex-col space-y-4 p-6" onClick={closeMenu}>
      <NavLinks />
    </nav>
  </div>
);

export default MobileDropdown;
