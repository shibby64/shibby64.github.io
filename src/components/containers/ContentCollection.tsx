import React from "react";

type ContentCollectionProps = {
  type: "row" | "column";
  children: React.ReactNode;
};

const ContentCollection: React.FC<ContentCollectionProps> = (props) => {
  const className = `content-collection ${props.type}`;

  return <div className={className}>{props.children}</div>;
};

export default ContentCollection;
