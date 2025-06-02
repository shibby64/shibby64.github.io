import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", ...props }) => {
  const className = variant === "primary" ? "btn btn-primary" : "btn btn-secondary";

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
