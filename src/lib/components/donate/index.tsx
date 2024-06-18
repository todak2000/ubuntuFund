"use client";
import React, { useState } from "react";
import { DonateCardProps } from "@/lib/helpers/generateData";
import DonateGrid from "./grid";
import { IoCloseOutline } from "react-icons/io5";
import LongCard from "./longCard";
import useIsMobile from "@/lib/hooks/isMobile";
import HorizontalScroll from "../horizontalScroll/scroll";
import { categoriesArr } from "../constants/categories";

const Donate: React.FC<{ cards: DonateCardProps[] }> = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState<DonateCardProps | null>(
    null
  );
  const [filteredCards, setFilteredCards] = useState<DonateCardProps[]>(cards);
  const [activeCategory, setActiveCategory] = useState("All");
  const isMobile = useIsMobile();
  const handleCardClick = (card: DonateCardProps | null) => {
    setSelectedCard(card);
  };
  const onClose = () => {
    setSelectedCard(null);
  };

  const handleCategory = (text: string) => {
    setActiveCategory(text);

    const newCards =
      text !== "All" ? cards.filter((i) => i.category === text) : cards;
    setFilteredCards(newCards);
  };
  return (
    <>
      <div className="w-full md:w-2/3 mx-auto pt-6">
      
        <HorizontalScroll>
          <p
            className={`py-2 px-6 rounded-full text-xs lg:text-base ${activeCategory === "All" ? "bg-black text-white" : "bg-gray-300"}`}
            onClick={() => handleCategory("All")}
          >
            All
          </p>
          {categoriesArr.map((category, index) => (
            <p
              key={index}
              className={`py-2 px-6 rounded-full text-xs lg:text-base ${activeCategory === category ? "bg-black text-white" : "bg-gray-300"}`}
              onClick={() => handleCategory(category)}
            >
              {category}
            </p>
          ))}
        </HorizontalScroll>
        <p className="font-bold text-3xl mt-6 lg:mt-12">Empower Dreams: Your Gift, Their Future</p>
      <p className="text-sm md:text-base">Browse through heartfelt donation requests and select a campaign that resonates with you. Your contribution can turn aspirations into achievements and support causes that need it most. Start your journey of impact today—every donation creates a ripple of positive change</p>
      </div>
      <div className="w-full py-6 md:p-6 mx-auto flex flex-row">
        <div
          className={`w-full md:w-2/3 ${selectedCard && !isMobile ? "md:w-1/3 h-[1044px] overflow-auto" : ""} mx-auto`}
        >
          <DonateGrid
            data={filteredCards}
            onClick={handleCardClick}
            selectedCard={selectedCard}
            activeCategory={activeCategory}
          />
        </div>
        {selectedCard && !isMobile && (
          <div
            className={`h-full  ${!isMobile ? "w-1/3 md:w-2/3" : "absolute z-50 w-full"}`}
          >
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
    </>
  );
};

export default Donate;
