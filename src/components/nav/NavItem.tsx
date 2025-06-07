import React from "react";
import { NavLink } from "react-router";

export interface NavItemProps {
  label: string;
  route: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, route, onClick }) => {
  return (
    <li className="nav-item">
      <NavLink to={route} onClick={onClick}>
        {label}
      </NavLink>
    </li>
  );
};

export default NavItem;
