import React from "react";

type TextProps = {
  textType?: "title" | "section-header" | "body";

  // generic props
  id?: string;
  children: React.ReactNode;
};

const Text: React.FC<TextProps> = (props) => {
  return (
    <span id={props.id} className={props.textType && `text-${props.textType}`}>
      {props.children}
    </span>
  );
};

export default Text;
