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
  };

  const dragOver = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    event.preventDefault();

    const x = event.clientX - offset.x;
    const y = event.clientY - offset.y;

    //new position set
    setPosition({ x, y });
  };

  return (
    <div>
      <div
        className="droppable"
        onDrop={drop}
        onDragOver={dragOver}
        style={{
          width: "100%",
          height: "400px",
          position: "relative",
          border: "2px dashed #ccc",
          marginTop: "20px",
          padding: "10px",
        }}
      >
        <div
          ref={draggableRef}
          className="draggable"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3498db",
            color: "#fff",
            textAlign: "center",
            lineHeight: "50px",
            cursor: "grab",
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y}px`,
            transition: "left 0.3s ease, top 0.3s ease", // Apply transitions
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
