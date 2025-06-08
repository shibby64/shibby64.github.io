import React from "react";
import { useNavigate } from "react-router";

type ButtonProps = {
  linkTo: string;
  buttonClass: "primary" | "secondary" | "warning";

  // generic props
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const LinkButton: React.FC<ButtonProps> = (props) => {
  let navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(props.linkTo)}
      className={`btn ${props.buttonClass} ${props.className || ""}`}
      id={props.id}>
      {props.children}
    </button>
  );
};

export default LinkButton;
