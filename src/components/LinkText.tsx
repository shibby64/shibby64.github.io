import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface LinkTextProps {
  href: string;
  openExternal?: boolean;

  // generic props
  className?: string;
  children: React.ReactNode;
}

const LinkText: React.FC<LinkTextProps> = (props) => (
  <a
    href={props.href}
    target={props.openExternal ? "_blank" : undefined}
    rel={props.openExternal ? "noopener noreferrer" : undefined}
    className={`emphasized ${props.className}`}>
    {props.children}
    {props.openExternal && <FaExternalLinkAlt />}
  </a>
);

export default LinkText;
