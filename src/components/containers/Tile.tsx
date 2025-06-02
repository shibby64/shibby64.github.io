import React from "react";

interface TileProps {
  headerText?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Tile: React.FC<TileProps> = ({ headerText, children, className = "", style }) => {
  return (
    <div className={`tile ${className}`} id="explanation" style={style}>
      <div className="text-section-header">{headerText}</div>
      <div className="text-body">{children}</div>
    </div>
  );
};

export default Tile;
