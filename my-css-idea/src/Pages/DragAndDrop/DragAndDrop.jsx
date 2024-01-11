import React, { useRef, useState, useEffect } from "react";
import "./DragAndDrop.css";

const DragAndDrop = () => {
  const draggableRef = useRef(null);
  const yourDivRef = useRef(null);
  const [heightFromTop, setHeightFromTop] = useState(0);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const dragStart = (event) => {
    event.dataTransfer.setData("text/plain", "");

    // position of drag element
    const rect = draggableRef.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    setOffset({ x: offsetX, y: offsetY });
  };

  const dragOver = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    event.preventDefault();

    const x = event.clientX - offset.x;
    let y = event.clientY - offset.y;
    y = y - heightFromTop;

    setPosition({ x, y });
  };

  useEffect(() => {
    const divRect = yourDivRef?.current?.getBoundingClientRect();
    setHeightFromTop(divRect.top);
  }, []);

  return (
    <div ref={yourDivRef}>
      <div className="droppable" onDrop={drop} onDragOver={dragOver}>
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
