import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";

const ColorWriteOutText = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [letterColors, setLetterColors] = useState([]);

  const initialText = `
  import React, { useState, useEffect } from "react";
  import randomColor from "randomcolor";
  
  const ColorWriteOutText = () => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [letterColors, setLetterColors] = useState([]);
  
    const initialText = "";
  
    const delay = 1;
  
    useEffect(() => {
      if (currentIndex === 0) {
        const colors = Array.from(initialText, () => randomColor());
        setLetterColors(colors);
      }
  
      if (currentIndex < initialText.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + initialText[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
  
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, currentText, initialText, delay]);
  
    const resetTyping = () => {
      setCurrentText("");
      setCurrentIndex(0);
    };
  
    return (
      <div>
        <button onClick={resetTyping}>Restart Typing</button>
        <pre>
          {currentText.split("").map((letter, index) => (
            <span key={index} style={{ color: letterColors[index] }}>
              {letter}
            </span>
          ))}
        </pre>
      </div>
    );
  };
  
  export default ColorWriteOutText;
  `;

  const delay = 1;

  useEffect(() => {
    if (currentIndex === 0) {
      const colors = Array.from(initialText, () => randomColor());
      setLetterColors(colors);
    }

    if (currentIndex < initialText.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + initialText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentText, initialText, delay]);

  const resetTyping = () => {
    setCurrentText("");
    setCurrentIndex(0);
  };

  return (
    <div style={{height: "100%", background: "#2b2b2b", borderRadius: "5px"}}>
      <button onClick={resetTyping}>Restart Typing</button>
      <pre>
        {currentText.split("").map((letter, index) => (
          <span key={index} style={{ color: letterColors[index] }}>
            {letter}
          </span>
        ))}
      </pre>
    </div>
  );
};

export default ColorWriteOutText;