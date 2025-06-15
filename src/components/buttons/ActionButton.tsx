import React from "react";

type ActionButtonProps = {
  onClick: () => void;
  buttonClass: "primary" | "secondary" | "warning";

  // generic props
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const ActionButton: React.FC<ActionButtonProps> = (props) => {
  return (
    <button onClick={props.onClick} className={`btn ${props.buttonClass} ${props.className || ""}`} id={props.id}>
      {props.children}
    </button>
  );
};

export default ActionButton;
