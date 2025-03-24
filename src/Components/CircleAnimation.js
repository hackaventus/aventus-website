import React, { useRef, useEffect } from "react";
import "./css/CircleAnimation.css";

const CircleAnimation = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const moveCircle = (event) => {
      const x = event.clientX - 100;
      const y = event.clientY - 100;
      circleRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", moveCircle);

    return () => {
      window.removeEventListener("mousemove", moveCircle);
    };
  }, []);

  return <div ref={circleRef} className="circle"></div>;
};

export default CircleAnimation;
