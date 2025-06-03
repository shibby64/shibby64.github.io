import React from "react";

interface TileProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

const Tile: React.FC<TileProps> = ({ children, className = "", style, id }) => {
  return (
    <div className={`tile ${className}`} id={id} style={style}>
      {children}
    </div>
  );
};

export default Tile;
