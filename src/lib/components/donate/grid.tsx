"use client";

import { DonateCardProps } from "@/lib/helpers/generateData";
import DonateCard from "./card";
import { VscSearchStop } from "react-icons/vsc";
const DonateGrid: React.FC<{
  data: DonateCardProps[];
  onClick: (data: DonateCardProps | null) => void;
  selectedCard: DonateCardProps | null;
  activeCategory: string;
}> = ({ data, onClick, selectedCard, activeCategory }) => (
  <div className="w-full md:mt-[3vh] md:h-screen md:px-2 py-6 md:p-6 mx-auto">
    {data.length > 0 ? (
      <div className="grid grid-flow-row-dense md:grid-cols-1 gap-4">
        {data.map((card, index) => (
          <DonateCard
            key={index}
            card={card}
            onClick={onClick}
            selectedCard={selectedCard}
          />
        ))}
      </div>
    ) : (
      <div className="flex flex-col text-gray-500 items-center justify-center h-[30vh]">
        <VscSearchStop className="text-3xl my-4 "/>
        <p className="text-center text-xs lg:text-base mx-auto w-full">{`Oops! sorry there is no campaign/request ${activeCategory ? `for ${activeCategory} Category` : ""}`}</p>
      </div>
      
    )}
  </div>
);
export default DonateGrid;
