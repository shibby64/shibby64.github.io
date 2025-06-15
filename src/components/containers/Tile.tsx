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
  const classesOuter = ClassBuilder("tile");
  const classesInner = ClassBuilder(props.className, "tile-inner", props.showAccentBar ? "border-accent" : undefined);
  return (
    <div className={classesOuter} id={props.id}>
      <div className={classesInner} style={props.style}>
        {props.children}
      </div>
    </div>
  );
};

export default Tile;
