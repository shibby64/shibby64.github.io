import React from "react";
import { NavLink } from "react-router";

export interface NavItemProps {
  label: string;
  route: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, route }) => {
  return (
    <li className="nav-item">
      <NavLink to={route}>{label}</NavLink>
    </li>
  );
};

export default NavItem;
