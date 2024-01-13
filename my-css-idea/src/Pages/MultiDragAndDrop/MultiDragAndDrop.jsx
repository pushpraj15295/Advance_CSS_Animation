import React, { useState } from "react";
import styles from "./MultiDragAndDrop.module.css";
import TestTwo from "./Testtwo";
import TestOne from "./TestOne";

export const MultiDragAndDrop = () => {

  const [elements, setElements] = useState([
    { id: 1, text: TestOne, left: 10, top: 10 },
    { id: 2, text: TestTwo, left: 100, top: 50 },
    //we can add more elements here
  ]);

  const [draggedElement, setDraggedElement] = useState(null);

  const handleStartDrag = (e, id) => {
    setDraggedElement({
      id,
      offsetX: e.clientX - elements[id - 1].left,
      offsetY: e.clientY - elements[id - 1].top,
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    if (!draggedElement) return;

    const updatedElements = elements.map((element) => {
      if (element.id === draggedElement.id) {
        return {
          ...element,
          left: e.clientX - draggedElement.offsetX,
          top: e.clientY - draggedElement.offsetY,
        };
      }
      return element;
    });

    setElements(updatedElements);
    setDraggedElement(null);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={styles.DragAndDropMianContainer}
    >
      {elements.map((element) => (
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
        zIndex: 1000, //just because select element always goes at the top of the web
      }}
    >
      {/* {text} */}
      {text()}
    </div>
  );
};


// --------------------------------------------------------------------------------------------3rd

// import React, { useState } from "react";
// import styles from "./MultiDragAndDrop.module.css";
// import TestTwo from "./Testtwo";
// import TestOne from "./TestOne";

// const DraggableElement = ({ id, text, left, top, onStartDrag }) => {
//   const handleDragStart = (e) => {
//     onStartDrag(e, id);
//   };

//   return (
//     <div
//       draggable
//       onDragStart={handleDragStart}
//       style={{
//         cursor: "grab",
//         padding: "10px",
//         backgroundColor: "#3498db",
//         color: "#fff",
//         borderRadius: "5px",
//         position: "absolute",
//         left: `${left}px`,
//         top: `${top}px`,
//         zIndex: 1000,
//       }}
//     >
//       {text()}
//     </div>
//   );
// };

// export const MultiDragAndDrop = () => {
//   const [leftElements, setLeftElements] = useState([
//     { id: 1, text: TestOne, left: 10, top: 10 },
//     { id: 2, text: TestTwo, left: 100, top: 50 },
//   ]);

//   const [rightElements, setRightElements] = useState([
//     { id: 3, text: TestOne, left: 300, top: 10 },
//     { id: 4, text: TestTwo, left: 400, top: 50 },
//   ]);

//   const [draggedElement, setDraggedElement] = useState(null);

//   const handleStartDrag = (e, id) => {
//     setDraggedElement({
//       id,
//       offsetX: e.clientX - (id <= 2 ? leftElements[id - 1].left : rightElements[id - 3].left),
//       offsetY: e.clientY - (id <= 2 ? leftElements[id - 1].top : rightElements[id - 3].top),
//     });
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDropLeft = (e) => {
//     handleDrop(e, setLeftElements);
//   };

//   const handleDropRight = (e) => {
//     handleDrop(e, setRightElements);
//   };

//   const handleDrop = (e, setElements) => {
//     if (!draggedElement) return;

//     const updatedElements = setElements((elements) =>
//       elements.map((element) => {
//         if (element.id === draggedElement.id) {
//           return {
//             ...element,
//             left: e.clientX - draggedElement.offsetX,
//             top: e.clientY - draggedElement.offsetY,
//           };
//         }
//         return element;
//       })
//     );

//     setDraggedElement(null);
//   };

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       <div
//         style={{
//           position: "relative",
//           flex: 1,
//           backgroundColor: "red",
//         }}
//         onDragOver={handleDragOver}
//         onDrop={handleDropLeft}
//       >
//         {leftElements.map((element) => (
//           <DraggableElement
//             key={element.id}
//             id={element.id}
//             text={element.text}
//             left={element.left}
//             top={element.top}
//             onStartDrag={handleStartDrag}
//           />
//         ))}
//       </div>
//       <div
//         style={{
//           position: "relative",
//           flex: 1,
//           backgroundColor: "green",
//         }}
//         onDragOver={handleDragOver}
//         onDrop={handleDropRight}
//       >
//         {rightElements.map((element) => (
//           <DraggableElement
//             key={element.id}
//             id={element.id}
//             text={element.text}
//             left={element.left}
//             top={element.top}
//             onStartDrag={handleStartDrag}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// -----------------------------------------------------------------------------------------4th one
