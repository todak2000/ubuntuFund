"use client";
import React, { useState } from "react";
import { DonateCardProps } from "@/lib/helpers/generateData";
import DonateGrid from "./grid";
import { IoCloseOutline } from "react-icons/io5";
import LongCard from "./longCard";
import useIsMobile from "@/lib/hooks/isMobile";

const Donate: React.FC<{ cards: DonateCardProps[] }> = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState<DonateCardProps | null>(
    null
  );
const isMobile = useIsMobile()
  const handleCardClick = (card: DonateCardProps|null) => {
    setSelectedCard(card);
  };
  const onClose = () => {
    setSelectedCard(null);
  };


  return (
    <div className="w-full md:mt-[3vh] py-6 md:p-6 mx-auto flex flex-row">
      <div
        className={`w-full md:w-2/3 ${selectedCard && !isMobile ? "md:w-1/3 h-screen overflow-auto" : ""} mx-auto`}
      >
        <DonateGrid
          data={cards}
          onClick={handleCardClick}
          selectedCard={selectedCard}
        />
      </div>
      {selectedCard && !isMobile && (
        <div className={`h-full  ${!isMobile ? 'w-1/3 md:w-2/3': 'absolute z-50 w-full'}`}>
          <div className="bg-transparent px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-transparent font-medium text-black hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent sm:mt-0 sm:ml-3 sm:w-auto text-xl"
              onClick={onClose}
            >
              <IoCloseOutline />
            </button>
          </div>
          {/* Render the selected card details here */}
          <LongCard card={selectedCard} />
        </div>
      )}
    </div>
  );
};

export default Donate;
