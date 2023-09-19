import React, { useState, useEffect } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [targetProgress, setTargetProgress] = useState(0);

  useEffect(() => {
    if (targetProgress !== progress) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const increment = targetProgress > prevProgress ? 1 : -1;
          const newProgress = prevProgress + increment;
          return newProgress;
        });
      }, 10);

      return () => clearInterval(interval);
    }
  }, [targetProgress, progress]);

  const fillProgressBar = (percentage) => {
    setTargetProgress(percentage);
  };

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {progress > 0 && <span className="progress-text">{progress}%</span>}
      </div>
      <div className="button-container">
        <button onClick={() => fillProgressBar(0)}>0</button>
        <button onClick={() => fillProgressBar(33)}>1</button>
        <button onClick={() => fillProgressBar(66)}>2</button>
        <button onClick={() => fillProgressBar(100)}>3</button>
      </div>
    </div>
  );
};

export default ProgressBar;