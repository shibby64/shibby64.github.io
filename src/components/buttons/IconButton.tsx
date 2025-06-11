import React from "react";

type IconButtonProps = {
  linkTo: string;
  openExternal?: boolean;
  // generic props
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <a
      href={props.linkTo}
      className={props.className}
      target={props.openExternal ? "_blank" : undefined}
      rel={props.openExternal ? "noopener noreferrer" : undefined}
      id={props.id}>
      {props.children}
    </a>
  );
};

export default IconButton;
