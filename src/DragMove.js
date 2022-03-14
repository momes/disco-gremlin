import React, { useState } from "react";

export default function DragMove(props) {
  const {
    onTouchMove,
    children,
    style,
    className
  } = props;

  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (e) => {
    setIsDragging(true);

    //onTouchStart(e);
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);

    //onTouchEnd(e);
  };

  const handlePointerMove = (e) => {
    console.log(e)
    if (isDragging) onTouchMove(e);
  };

  return (
    <div
    onTouchStart={handlePointerDown}
    onTouchEnd={handlePointerUp}
      onTouchMove={handlePointerMove}
      style={style}
      className={className}
    >
      {children}
    </div>
  );
}

DragMove.defaultProps = {
  onPointerDown: () => {},
  onPointerUp: () => {},
  onPointerMove: () => {}
};
