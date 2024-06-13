"use client";

import { DonateCardProps } from "@/lib/helpers/generateData";
import DonateCard from "./card";
const DonateGrid: React.FC<{ data: DonateCardProps[], onClick: (data:DonateCardProps|null)=>void, selectedCard: DonateCardProps|null}> = ({ data, onClick, selectedCard }) => (
  <div className="w-full md:mt-[3vh] md:h-screen md:px-2 py-6 md:p-6 mx-auto">
    <div className="grid grid-flow-row-dense md:grid-cols-1 gap-4">
      {data.map((card, index) => (
        <DonateCard key={index} card={card} onClick={onClick} selectedCard={selectedCard}/>
      ))}
    </div>
  </div>
);
export default DonateGrid;
