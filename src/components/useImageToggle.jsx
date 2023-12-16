import { useState, useEffect } from "react";

function useImageToggle(initialImage, alternateImage) {
  const [currentImage, setCurrentImage] = useState(initialImage);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    };

    checkIfMobile();
    if (isMobile) {
      setCurrentImage(alternateImage);
    }
  }, [alternateImage, isMobile]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setCurrentImage(alternateImage);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setCurrentImage(initialImage);
    }
  };

  return isMobile
    ? {
        currentImage,
      }
    : {
        currentImage,
        handleMouseEnter,
        handleMouseLeave,
      };
}

export default useImageToggle;
