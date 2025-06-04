import React from "react";
import RouteList, { RouteLeaf } from "../../pages/Routes";
import NavItem from "./NavItem";
import NavItemDropdown from "./NavItemDropdown";

const renderLeaf = (leaf: RouteLeaf) => {
  return <NavItem key={leaf.label} route={leaf.route} label={leaf.label} />;
};

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="container">
        <ul className="nav-list">
          {RouteList.map((navItem) => {
            if (navItem.type === "leaf") {
              return renderLeaf(navItem);
            } else if (navItem.type === "nested") {
              return (
                <NavItemDropdown
                  key={navItem.label}
                  label={navItem.label}
                  children={navItem.leaves.map((leaf) => renderLeaf(leaf))}
                />
              );
            }
            return null;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
