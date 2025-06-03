import React from "react";

interface CardProps {
  headerText: string;
  children: React.ReactNode;

  // Optional props for additional customization
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ headerText, children, className = "", style, id }) => {
  return (
    <div className={`card ${className}`} style={style} id={id}>
      <div className="text-section-header header">{headerText}</div>
      <div className="text-body content">{children}</div>
    </div>
  );
};

export default Card;
