import { useState, useEffect } from "react";
export const usePageBottom = () => {
  const [isBottom, setIsBottom] = useState(false);
  useEffect(() => {
    const handleScrool = () => {
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      const hasReachedBttom = offsetHeight - innerHeight - scrollY < 20;
      setIsBottom(hasReachedBttom);
    };

    window.addEventListener("scroll", handleScrool);

    return () => {
      window.removeEventListener("scroll", handleScrool);
    };
  }, []);

  return isBottom;
};
