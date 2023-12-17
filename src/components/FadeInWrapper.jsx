import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function FadeInWrapper({ children, delay }) {
  const hasVisitedRoot = useSelector((state) => state.visited.hasVisitedRoot);

  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Use a state variable to trigger the fade-in effect with the specified delay
    const timeoutId = setTimeout(() => {
      setFadeIn(true);
    }, delay);

    // Clear the timeout to avoid unexpected behavior when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [delay]);

  return !hasVisitedRoot ? (
    <div className={`fade-in-container ${fadeIn ? "fade-in" : ""}`}
    >
      {children}
    </div>
  ) : (
    <>{children}</>
  );
}

export default FadeInWrapper;
