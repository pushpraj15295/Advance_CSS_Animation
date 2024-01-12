import React, { useState } from "react";
import TestTwo from "./Testtwo";
import TestOne from "./TestOne";

export const CrossBoxDragAndDrop = () => {
  const [leftElements, setLeftElements] = useState([
    { id: 1, text: TestOne, left: 10, top: 10 },
    { id: 2, text: TestTwo, left: 100, top: 50 },
  ]);

  const [rightElements, setRightElements] = useState([
    { id: 3, text: TestOne, left: 300, top: 10 },
    { id: 4, text: TestTwo, left: 400, top: 50 },
  ]);

  const [draggedElement, setDraggedElement] = useState(null);

  const handleStartDrag = (e, id) => {
    const offsetX =
      e.clientX -
      (id <= 2
        ? (leftElements.find((element) => element.id === id) || {}).left
        : (rightElements.find((element) => element.id === id) || {}).left);
    const offsetY =
      e.clientY -
      (id <= 2
        ? (leftElements.find((element) => element.id === id) || {}).top
        : (rightElements.find((element) => element.id === id) || {}).top);

    setDraggedElement({
      id,
      offsetX,
      offsetY,
      area: id <= 2 ? "left" : "right",
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    if (!draggedElement) return;

    const dropTargetRect = e.currentTarget.getBoundingClientRect();
    const dropTargetCenterX = dropTargetRect.left + dropTargetRect.width / 2;
    const isLeftArea = e.clientX < dropTargetCenterX;

    const updatedLeftElements = leftElements.map((element) =>
      element.id === draggedElement.id
        ? {
            ...element,
            left: e.clientX - draggedElement.offsetX,
            top: e.clientY - draggedElement.offsetY,
          }
        : element
    );

    const updatedRightElements = rightElements.map((element) =>
      element.id === draggedElement.id
        ? {
            ...element,
            left: e.clientX - draggedElement.offsetX,
            top: e.clientY - draggedElement.offsetY,
          }
        : element
    );

    setLeftElements(updatedLeftElements);
    setRightElements(updatedRightElements);
    setDraggedElement(null);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          position: "relative",
          flex: 1,
          backgroundColor: "red",
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {leftElements.map((element) => (
          <DraggableElement
            key={element.id}
            id={element.id}
            text={element.text}
            left={element.left}
            top={element.top}
            onStartDrag={handleStartDrag}
          />
        ))}
      </div>
      <div
        style={{
          position: "relative",
          flex: 1,
          backgroundColor: "green",
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {rightElements.map((element) => (
          <DraggableElement
            key={element.id}
            id={element.id}
            text={element.text}
            left={element.left}
            top={element.top}
            onStartDrag={handleStartDrag}
          />
        ))}
      </div>
    </div>
  );
};

const DraggableElement = ({ id, text, left, top, onStartDrag }) => {
  const handleDragStart = (e) => {
    onStartDrag(e, id);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{
        cursor: "grab",
        padding: "10px",
        backgroundColor: "#3498db",
        color: "#fff",
        borderRadius: "5px",
        position: "absolute",
        left: `${left}px`,
        top: `${top}px`,
        zIndex: 1000,
      }}
    >
      {text()}
    </div>
  );
};
