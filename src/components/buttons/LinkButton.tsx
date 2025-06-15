import React from "react";
import { useNavigate } from "react-router";

type LinkButtonProps = {
  linkTo: string;
  buttonClass: "primary" | "secondary" | "warning" | "mystic";
  openExternal?: boolean;

  // generic props
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  let navigate = useNavigate();
  return (
    <button
      onClick={() => {
        props.openExternal ? window.open(props.linkTo, "_blank", "rel=noopener noreferrer") : navigate(props.linkTo);
      }}
      className={`btn ${props.buttonClass} ${props.className || ""}`}
      id={props.id}>
      {props.children}
    </button>
  );
};

export default LinkButton;
