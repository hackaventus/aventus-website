import React, { useState, useEffect } from "react";
import img from "../images/logo.png"; // Import the image

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
  <div
  style={{
    position: "fixed",
    left: 0,
    top: 0,
    pointerEvents: "none",
    zIndex: 9999,
    transform: `translate(${position.x}px, ${position.y}px) translateX(-50%) translateY(-50%)`,
    background: "rgba(0, 0, 0, 0)", // Default transparent background
    padding: "10px",
    borderRadius: "50%",
    transition: "background 0.3s ease",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0, 0, 0, 0.1)")}
  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0, 0, 0, 0)")}
>
  <img
    src={img}
    alt="Custom Cursor"
    style={{
      width: "40px",
      height: "40px",
      userSelect: "none",
      borderRadius: "20px",
    }}
  />
</div>

  );
};

export default CustomCursor;
