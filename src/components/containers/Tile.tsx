import React from "react";

interface TileProps {
  className?: string;
  showAccentBar?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
}

const Tile: React.FC<TileProps> = ({ children, showAccentBar, className = "", style, id }) => {
  return (
    <div className={`tile ${showAccentBar && "accentBar"} ${className}`} id={id} style={style}>
      {children}
    </div>
  );
};

export default Tile;
