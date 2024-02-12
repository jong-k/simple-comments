import { useState } from "react";

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: -50,
    y: -50,
  });
  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      onMouseLeave={() => {
        setPosition({
          x: -50,
          y: -50,
        });
      }}
      style={{
        position: "relative",
        width: "600px",
        height: "600px",
        background: "beige",
      }}
    >
      <div
        style={{
          position: "absolute",
          background: "hotpink",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: "20px",
          height: "20px",
          top: -17.5,
          left: -17.5,
        }}
      ></div>
    </div>
  );
}
