import React from "react";
import RouteList from "../../pages/Routes";
import NavItem from "./NavItem";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="container">
        <ul>
          {RouteList.map((item) => (
            <NavItem key={item.route} label={item.label} route={item.route} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
