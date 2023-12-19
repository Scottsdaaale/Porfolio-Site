import React, { useState, useEffect } from "react";

function SandboxPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the popup should be shown (first-time visitor)
    const hasVisitedBefore = localStorage.getItem("hasVisitedSandbox");
    if (!hasVisitedBefore) {
      setIsOpen(true);

      // Set a flag in localStorage to indicate that the user has visited
      localStorage.setItem("hasVisitedSandbox", "true");
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`welcome-popup ${isOpen ? "open" : "closed"}`}>
      <div className="popup-content">
        <h2>Welcome to the Sandbox page.</h2>
        <p>I sometimes get bored and like to build little things.</p>
        <p>I figured this would be a good place to put them.</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default SandboxPopup;