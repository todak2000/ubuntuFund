import React from 'react';
import { HorizontalScrollProps } from '../constants/types';

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  return (
    <div className=" overflow-x-auto hide-scrollbar no-scrollbar lg:grid-cols-4 lg:gap-1 space-x-3">
      <div className="grid grid-flow-col auto-cols-max gap-2">
      {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
