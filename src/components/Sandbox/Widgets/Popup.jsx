import React, { useState } from "react";

function PopupButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="center">
    <div className="popup-button-container">
      <button onClick={togglePopup}>Hello :)</button>
  
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Popup Content</h2>
            <p>This is some content in the popup.</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div></div>
  );
}

export default PopupButton;
