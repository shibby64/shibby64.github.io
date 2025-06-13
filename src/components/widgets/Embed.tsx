import React from "react";

type EmbedProps = {
  innerHTML: string;
  className?: string;
  style?: React.CSSProperties;
};

const Embed: React.FC<EmbedProps> = ({ innerHTML, className, style }) => (
  <div style={style} className={className} dangerouslySetInnerHTML={{ __html: innerHTML }}></div>
);

export default Embed;
