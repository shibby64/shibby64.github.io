import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        &copy; {new Date().getFullYear()} epic footer moment LLC
      </div>
    </footer>
  );
};

export default Footer;
