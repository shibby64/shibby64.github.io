import React from "react";
import RouteList from "../../pages/Routes";
import NavItem from "./NavItem";
import NavItemDropdown from "./NavItemDropdown";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="container">
        <ul className="nav-list">
          {RouteList.map((navItem) => {
            if (navItem.type === "leaf") {
              return <NavItem key={navItem.label} route={navItem.route} label={navItem.label} />;
            } else if (navItem.type === "nested") {
              return <NavItemDropdown key={navItem.label} label={navItem.label} children={navItem.leaves} />;
            }
            return null;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
