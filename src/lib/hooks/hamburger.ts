import { useState, useEffect } from 'react';

const useMobileSidebar = (isMobile: boolean) => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  useEffect(() => {
    if (isMobile) {
      if (showMobileSidebar) {
      } else {
        setShowMobileSidebar(false);
      }
    } else {
      setShowMobileSidebar(false);
    }
  }, [isMobile, showMobileSidebar]);

  return { showMobileSidebar, setShowMobileSidebar };
};

export default useMobileSidebar;
