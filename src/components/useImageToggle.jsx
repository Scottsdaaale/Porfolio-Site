import { useState } from "react";

function useImageToggle(initialImage, alternateImage) {
  const [currentImage, setCurrentImage] = useState(initialImage);

  const handleMouseEnter = () => {
    setCurrentImage(alternateImage);
  };

  const handleMouseLeave = () => {
    setCurrentImage(initialImage);
  };

  return {
    currentImage,
    handleMouseEnter,
    handleMouseLeave,
  };
}

export default useImageToggle;
