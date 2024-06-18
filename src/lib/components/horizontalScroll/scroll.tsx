import React, { useRef, useState, useEffect } from 'react';
import { HorizontalScrollProps } from '../constants/types';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkForScrollPosition = () => {
    const { current } = scrollRef;
    if (current) {
      const maxScrollLeft = current.scrollWidth - current.clientWidth;
      setCanScrollLeft(current.scrollLeft > 0);
      setCanScrollRight(current.scrollLeft < maxScrollLeft);
    }
  };

  useEffect(() => {
    checkForScrollPosition();
    // Optional: Check for scroll position on window resize
    window.addEventListener('resize', checkForScrollPosition);
    return () => window.removeEventListener('resize', checkForScrollPosition);
  }, []);

  const handleArrowClick = (direction: 'left' | 'right') => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -200 : 200; // Adjust as needed
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute bg-white rounded-full left-0 z-5 flex items-center justify-center size-8 lg:size-10 cursor-pointer" onClick={() => handleArrowClick('left')} style={{ visibility: canScrollLeft ? 'visible' : 'hidden' }}>
        <FiArrowLeft className="text-sm lg:text-base" />
      </div>
      <div className="overflow-x-auto hide-scrollbar no-scrollbar lg:grid-cols-4 lg:gap-1 space-x-3" ref={scrollRef} onScroll={checkForScrollPosition}>
        <div className="grid grid-flow-col auto-cols-max gap-2">
          {children}
        </div>
      </div>
      <div className="absolute top-0 bg-white rounded-full right-0 z-5 flex items-center justify-center size-8 lg:size-10 cursor-pointer" onClick={() => handleArrowClick('right')} style={{ visibility: canScrollRight ? 'visible' : 'hidden' }}>
        <FiArrowRight className="text-sm lg:text-base" />
      </div>
    </div>
  );
};

export default HorizontalScroll;
