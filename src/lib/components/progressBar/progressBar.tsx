import { formatAsMoney } from "@/lib/helpers/formatMoney";
import React from "react";

type ProgressBarProps = {
  total: string;
  current: string;
  currency: string;
  isSmallCard: boolean;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  total,
  current,
  currency,
  isSmallCard,
}) => {
  const totalValue = parseFloat(total);
  const currentValue = parseFloat(current);

  // Calculate the percentage
  const percentage = (currentValue / totalValue) * 100;

  return (
    <div className="w-full bg-gray-200 h-2 rounded-full relative my-6">
      <div
        style={{ width: `${percentage}%` }}
        className="h-full bg-black rounded-full"
      ></div>
      <div className="absolute top-0 right-0 transform translate-y-full text-xs">
        {currency} {formatAsMoney(totalValue)}
      </div>
      <div
        style={{ right: `${100 - percentage}%` }}
        className="absolute top-0 transform -translate-y-full text-xs"
      >
        {!isSmallCard && `${currency} ${formatAsMoney(currentValue)} `}
        
        {`(${percentage.toFixed(1)}%)`}
      </div>
    </div>
  );
};

export default ProgressBar;

// import React from "react";

// type ProgressBarProps = {
//   total: string;
//   current: string;
// };

// const ProgressBar: React.FC<ProgressBarProps> = ({ total, current }) => {
//   // Extract numbers from the strings
// //   const totalValue = parseFloat(total.replace(/[^0-9.-]+/g, ""));
// //   const currentValue = parseFloat(current.replace(/[^0-9.-]+/g, ""));
// const totalValue = parseFloat(total);
//   const currentValue = parseFloat(current);

//   // Calculate the percentage
//   const percentage = (currentValue / totalValue) * 100;

//   return (
//     <div className="w-full bg-gray-200 h-2 rounded-full">
//       <div
//         style={{ width: `${percentage}%` }}
//         className="h-full bg-black rounded-full"
//       ></div>
//     </div>
//   );
// };

// export default ProgressBar;
