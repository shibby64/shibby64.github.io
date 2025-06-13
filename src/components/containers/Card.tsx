import React from "react";
import ClassBuilder from "../../lib/ClassBuilder";

interface CardProps {
  header: React.ReactNode;
  children: React.ReactNode;

  // Optional props for additional customization
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = (props) => {
  const classes = ClassBuilder(props.className, "card");

  return (
    <div className={classes} style={props.style} id={props.id}>
      <div className="text-section-header header">{props.header}</div>
      <div className="text-body content">{props.children}</div>
    </div>
  );
};

export default Card;
