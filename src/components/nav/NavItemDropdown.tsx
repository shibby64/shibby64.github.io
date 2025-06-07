import React, { useEffect, useState } from "react";
import { RouteLeaf } from "../../pages/Routes";
import NavItem from "./NavItem";

export interface NavItemProps {
  label: string;
  children: RouteLeaf[];
}

const NavItemDropdown: React.FC<NavItemProps> = ({ label, children }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById(`nav-dropdown-${label}`);
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded, label]);

  return (
    <div className="nav-dropdown" id={`nav-dropdown-${label}`}>
      <li className="nav-item">
        <button className={expanded ? "open" : ""} onClick={toggleExpanded}>
          {label}
          <span className="dropdown-icon">▼</span>
        </button>
      </li>
      <div>
        <div className={`children transition-wrapper ${expanded ? "" : "collapsed"}`}>
          <ul>
            {children.map((leaf) => {
              return (
                <NavItem key={leaf.label} route={leaf.route} label={leaf.label} onClick={() => setExpanded(false)} />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavItemDropdown;
