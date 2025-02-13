import React from "react";

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton: React.FC<Props> = ({ isOpen, toggleMenu }) => (
  <button onClick={toggleMenu} className="md:hidden p-2 focus:outline-none">
    <svg
      className="w-8 h-8 text-gray-700"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      )}
    </svg>
  </button>
);

export default MobileMenuButton;
