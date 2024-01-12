import React, { useState, useRef, useEffect } from 'react';

const MoveBall = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  useEffect(() => {
    const windowElement = windowRef.current;

    const handleMouseMove = (e) => {
      const windowRect = windowElement.getBoundingClientRect();
      const mouseX = e.clientX - windowRect.left;
      const mouseY = e.clientY - windowRect.top;

      setPosition({ x: mouseX, y: mouseY });
    };

    windowElement.addEventListener('mousemove', handleMouseMove);

    return () => {
      windowElement.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="ball-container">
      <div className="ball-window" ref={windowRef}>
        <div
          className="ball"
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
      </div>
    </div>
  );
};

export default MoveBall;