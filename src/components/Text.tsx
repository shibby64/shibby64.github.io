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
    <div id={props.id} style={props.style} className={classes}>
      {props.children}
    </div>
  );
};

export default Text;
