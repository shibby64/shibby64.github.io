import React from "react";
import ClassBuilder from "../../lib/ClassBuilder";

interface TileProps {
  className?: string;
  showAccentBar?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
}

const Tile: React.FC<TileProps> = (props) => {
  const classes = ClassBuilder(props.className, "tile", props.showAccentBar ? "accentBar" : "");
  return (
    <div className={classes} id={props.id} style={props.style}>
      {props.children}
    </div>
  );
};

export default Tile;
