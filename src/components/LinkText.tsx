import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import ClassBuilder from "../lib/ClassBuilder";

interface LinkTextProps {
  href: string;
  openExternal?: boolean;

  // generic props
  className?: string;
  children: React.ReactNode;
}

const LinkText: React.FC<LinkTextProps> = (props) => {
  const classes = ClassBuilder(props.className, "emphasized", "text-body");

  return (
    <a
      href={props.href}
      target={props.openExternal ? "_blank" : undefined}
      rel={props.openExternal ? "noopener noreferrer" : undefined}
      className={classes}>
      {props.children}
      {props.openExternal && <FaExternalLinkAlt />}
    </a>
  );
};

export default LinkText;
