import React, { useState, useEffect } from "react";

const WriteOutText = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const initialText = `
    import React, { useState, useEffect } from "react";

    const WriteOutText = () => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const initialText = ''
  
  
    const delay = 1;
  
    useEffect(() => {
      if (currentIndex < initialText.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + initialText[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
  
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, delay, initialText]);
  
    const resetTyping = () => {
      setCurrentText("");
      setCurrentIndex(0);
    };
  
    return (
      <div>
        <button onClick={resetTyping}>Restart Typing</button>
        <pre>{currentText}</pre>
      </div>
    );
  };
  
  export default WriteOutText;
  `

  const delay = 1;

  useEffect(() => {
    if (currentIndex < initialText.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + initialText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, initialText]);

  const resetTyping = () => {
    setCurrentText("");
    setCurrentIndex(0);
  };

  return (
    <div style={{background: "#2b2b2b", borderRadius: "5px"}}>
      <button onClick={resetTyping}>Restart Typing</button>
      <pre>{currentText}</pre>
    </div>
  );
};

export default WriteOutText;