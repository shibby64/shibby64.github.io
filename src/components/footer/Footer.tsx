import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import IconButton from "../buttons/IconButton";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <span>&copy; {new Date().getFullYear()} Ethan Harris</span>
          <div className="socials">
            <IconButton linkTo="https://www.instagram.com/shibby64/" openExternal>
              <FaInstagram />
            </IconButton>
            <IconButton linkTo="https://soundcloud.com/vitalityedm" openExternal>
              <FaSoundcloud />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
