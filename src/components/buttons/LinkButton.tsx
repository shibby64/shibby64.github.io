import React from "react";
import { useNavigate } from "react-router";

type ButtonProps = {
  linkTo: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const LinkButton: React.FC<ButtonProps> = ({ linkTo, className, style, children }) => {
  let navigate = useNavigate();
  return (
    <button onClick={() => navigate(linkTo)} style={style} className={`btn ${className || ""}`}>
      {children}
    </button>
  );
};

export default LinkButton;
