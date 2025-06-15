import React from "react";
import ClassBuilder from "../lib/ClassBuilder";

type TextProps = {
  textType?: "title" | "section-header" | "body";

  // generic props
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = (props) => {
  const classes = ClassBuilder(props.className, props.textType ? `text-${props.textType}` : "");
  return (
    <span id={props.id} style={props.style} className={classes}>
      {props.children}
    </span>
  );
};

export default Text;
