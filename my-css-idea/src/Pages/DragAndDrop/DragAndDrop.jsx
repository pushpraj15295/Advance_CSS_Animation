import React, { useRef, useState } from "react";
import "./DragAndDrop.css";

const DragAndDrop = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const draggableRef = useRef(null);

  const dragStart = (event) => {
    event.dataTransfer.setData("text/plain", "");

    // position of drag element
    const rect = draggableRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    setOffset({ x: offsetX, y: offsetY });
    console.log(offsetY - 36, "offset")
  };

  const dragOver = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    event.preventDefault();

    const x = event.clientX - offset.x;
    let y = event.clientY - offset.y;
    y = y-129

    //new position set
    setPosition({ x, y });
  };

  return (
    <div>
      <div
        className="droppable"
        onDrop={drop}
        onDragOver={dragOver}
      >
        <div
          ref={draggableRef}
          className="draggable"
          style={{
            cursor: "grab",
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          draggable
          onDragStart={dragStart}
        >
          Drag me
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
