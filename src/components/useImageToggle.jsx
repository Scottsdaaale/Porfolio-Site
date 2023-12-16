import { useState, useEffect } from "react";

function useImageToggle(initialImage, alternateImage) {
  const [currentImage, setCurrentImage] = useState(initialImage);

  useEffect(() => {
    const isMobileDevice = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      // You can use additional logic to determine mobile devices more accurately
      // For example, you might want to check for specific screen sizes using window.innerWidth
    };

    const handleResize = () => {
      if (isMobileDevice()) {
        setCurrentImage(alternateImage);
      } else {
        setCurrentImage(initialImage);
      }
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initialImage, alternateImage]);

  return {
    currentImage,
  };
}

export default useImageToggle;