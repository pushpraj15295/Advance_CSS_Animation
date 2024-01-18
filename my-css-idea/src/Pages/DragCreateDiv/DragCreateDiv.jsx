import React, { useState } from "react";

const DragCreateDiv = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [draggedDivs, setDraggedDivs] = useState([]);

  const handleMouseDown = (event) => {
    if (event.button === 0) {
      setIsDragging(true);
      setStartX(event.clientX);
      setStartY(event.clientY);
    }
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const width = event.clientX - startX;
      const height = event.clientY - startY;

      const newDraggedDivs = [
        ...draggedDivs,
        {
          id: Date.now(),
          style: {
            width: `${width}px`,
            height: `${height}px`,
            position: "absolute",
            left: `${startX}px`,
            top: `${startY}px`,
            border: "1px solid #000",
          },
        },
      ];

      setDraggedDivs(newDraggedDivs);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      setStartX(0);
      setStartY(0);
    }
  };

  return (
    <>
      <h2
        style={{
          textAlign: "center",
          color: "lightyellow",
          border: "2px solid green",
          backgroundColor: "lightgreen",
        }}
      >
        Drag and Create Elements
      </h2>
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          border: "2px solid green",
          backgroundColor: "lightgreen",
        }}
      >
        {draggedDivs.map((div) => (
          <div key={div.id} style={div.style} />
        ))}
        {/* Additional content goes here */}
      </div>
    </>
  );
};

export default DragCreateDiv;
