import React from "react";

type EmbedProps = {
  innerHTML: string;
  className?: string;
};

const Embed: React.FC<EmbedProps> = ({ innerHTML, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: innerHTML }}></div>
);

export default Embed;
