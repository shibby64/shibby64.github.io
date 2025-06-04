import React from "react";

export interface NavItemProps {
  label: string;
  children: React.ReactNode[];
}

const NavItemDropdown: React.FC<NavItemProps> = ({ label, children }) => {
  return (
    <li className="nav-item">
      <button>{label}</button>
      <ul>
        {children.map((child: React.ReactNode, index: number) => {
          return child;
        })}
      </ul>
    </li>
  );
};

export default NavItemDropdown;
