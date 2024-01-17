import React, { useState } from "react";

const DragCreateDiv = () => {
  const [dragState, setDragState] = useState(null);
  const [draggedDivs, setDraggedDivs] = useState([]);

  const handleMouseDown = (event) => {
    if (event.button === 0 && !dragState) {
      const rect = event.currentTarget.getBoundingClientRect();
      const startX = event.clientX - rect.left;
      const startY = event.clientY - rect.top;

      setDragState({
        id: Date.now(),
        startX,
        startY,
        width: 0,
        height: 0,
      });
    }
  };

  const handleMouseMove = (event) => {
    if (dragState) {
      const rect = event.currentTarget.getBoundingClientRect();
      const width = event.clientX - rect.left - dragState.startX;
      const height = event.clientY - rect.top - dragState.startY;

      setDragState((prev) => ({
        ...prev,
        width,
        height,
      }));
    }
  };

  const handleMouseUp = () => {
    if (dragState) {
      setDraggedDivs((prev) => [...prev, dragState]);
      setDragState(null);
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ width: "100%", height: "100vh", position: "relative" }}
    >
      {draggedDivs.map((div) => (
        <div
          key={div.id}
          style={{
            width: `${div.width}px`,
            height: `${div.height}px`,
            position: "absolute",
            left: `${div.startX}px`,
            top: `${div.startY}px`,
            border: "1px solid #000",
          }}
        />
      ))}

      
      {dragState && (
        <div
          style={{
            width: `${dragState.width}px`,
            height: `${dragState.height}px`,
            position: "absolute",
            left: `${dragState.startX}px`,
            top: `${dragState.startY}px`,
            border: "1px solid #000",
          }}
        />
      )}
      {/* Additional content goes here */}
    </div>
  );
};

export default DragCreateDiv;




// if we put at the top of this website --------------------------- >

// import React, { useState } from "react";

// const DragCreateDiv = () => {
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [startY, setStartY] = useState(0);
//   const [draggedDiv, setDraggedDiv] = useState(null);

//   const handleMouseDown = (event) => {
//     if (event.button === 0) {
//       // Check if left mouse button is pressed
//       setIsDragging(true);
//       setStartX(event.clientX);
//       setStartY(event.clientY);

//       const div = document.createElement("div");
//       div.className = "dragged-div";
//       setDraggedDiv(div);
//     }
//   };

//   const handleMouseMove = (event) => {
//     if (isDragging && draggedDiv) {
//       const width = event.clientX - startX;
//       const height = event.clientY - startY;

//       draggedDiv.style.width = `${width}px`;
//       draggedDiv.style.height = `${height}px`;
//       draggedDiv.style.position = "absolute";
//       draggedDiv.style.left = `${startX}px`;
//       draggedDiv.style.top = `${startY}px`;
//       draggedDiv.style.border = "1px solid #000";

//       if (!document.body.contains(draggedDiv)) {
//         document.body.appendChild(draggedDiv);
//       }
//     }
//   };

//   const handleMouseUp = () => {
//     if (isDragging) {
//       setIsDragging(false);
//     }
//   };

//   return (
//     <div
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       style={{ width: "100%", height: "100vh", position: "relative",backgroundColor:"lightgrey" }}
//     >
//       {/* Additional content goes here */}
//     </div>
//   );
// };

// export default DragCreateDiv;

// if we put at the anywhere but repetative code inside itself of this website --------------------------- >
// import React, { useState } from 'react';

// const DragCreateDiv = () => {
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [startY, setStartY] = useState(0);
//   const [draggedDivs, setDraggedDivs] = useState([]);

//   const handleMouseDown = (event) => {
//     if (event.button === 0) {
//       setIsDragging(true);
//       setStartX(event.clientX);
//       setStartY(event.clientY);
//     }
//   };

//   const handleMouseMove = (event) => {
//     if (isDragging) {
//       const width = event.clientX - startX;
//       const height = event.clientY - startY;

//       const newDraggedDivs = [
//         ...draggedDivs,
//         {
//           id: Date.now(),
//           style: {
//             width: `${width}px`,
//             height: `${height}px`,
//             position: 'absolute',
//             left: `${startX}px`,
//             top: `${startY}px`,
//             border: '1px solid #000',
//           },
//         },
//       ];

//       setDraggedDivs(newDraggedDivs);
//     }
//   };

//   const handleMouseUp = () => {
//     if (isDragging) {
//       setIsDragging(false);
//       setStartX(0);
//       setStartY(0);
//     }
//   };

//   return (
//     <div
//       onMouseDown={handleMouseDown}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       style={{ width: '100%', height: '100vh', position: 'relative' }}
//     >
//       {draggedDivs.map((div) => (
//         <div key={div.id} style={div.style} />
//       ))}
//       {/* Additional content goes here */}
//     </div>
//   );
// };

// export default DragCreateDiv;
