import React, { useRef, useEffect } from "react";
import "./css/CircleAnimation.css";

const CircleAnimation = () => {
    const circleRef = useRef(null);

    useEffect(() => {
        const moveCircle = (event) => {
            const x = event.clientX - 25;
            const y = event.clientY - 25;
            circleRef.current.style.transform = `translate(${x}px, ${y}px)`;

            const target = event.target;

            if (target.closest(".component")) {
                circleRef.current.classList.add("large-cursor");
                circleRef.current.classList.remove("small-dot");
            } else if (target.tagName === "BUTTON" || target.tagName === "A" || target.tagName === "INPUT") {
                circleRef.current.classList.add("small-dot");
                circleRef.current.classList.remove("large-cursor");
            } else {
                circleRef.current.classList.remove("small-dot", "large-cursor");
            }
        };

        window.addEventListener("mousemove", moveCircle);

        return () => {
            window.removeEventListener("mousemove", moveCircle);
        };
    }, []);

    return <div ref={circleRef} className="circle"></div>;
};

export default CircleAnimation;
