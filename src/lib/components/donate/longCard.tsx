"use client";

import React, { useState } from "react";
import ProgressBar from "@/lib/components/progressBar/progressBar";

import { BsFillPersonFill } from "react-icons/bs";

import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { LuGoal } from "react-icons/lu";
import { TbProgressCheck } from "react-icons/tb";
import { TbCalendarTime } from "react-icons/tb";
import { MdCategory } from "react-icons/md";
import { formatAsMoney } from "@/lib/helpers/formatMoney";
import { DonateCardProps } from "@/lib/helpers/generateData";
import Carousel from "../carousel/carousel";
import { CgOrganisation } from "react-icons/cg";
import ShareButton from "../button/shareButton";
import DonateButton from "../button/donateButton";
const LongCard: React.FC<{
  card: DonateCardProps;
}> = ({ card }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showList, setShowList] = useState(false);

  const toggleDonateButton = () => {
    setShowList(!showList);
    setShowOptions(false);
  };
  const toggleShareButton = () => {
    setShowOptions(!showOptions);
    setShowList(false);
  };

  return (
    <div
      className={`cursor-pointer shadow-lg bg-white p-4 flex flex-col rounded-sm`}
    >
      <Carousel images={card?.proof ?? []} />

      <div className="py-2 md:p-3 ">
        <ProgressBar
          total={card.amountToRaise}
          current={card.amountRaised}
          currency={card.currency}
          isSmallCard={false}
        />

        <p className=" my-2 text-sm mt-6 md:text-lg flex flex-row items-center">
          {card.recipientQuestion === "Fundraising for a Charity" ? (
            <CgOrganisation className="mr-3" />
          ) : (
            <BsFillPersonFill className="mr-3" />
          )}{" "}
          {card.recipient}
        </p>
        <p className="my-2 text-sm md:text-lg flex flex-row items-center">
          <LiaMapMarkerAltSolid className="mr-3" /> {card.country}
        </p>
        <p className="my-2 text-sm md:text-lg flex flex-row items-center">
          <LuGoal className="mr-3" />
          {card.currency} {formatAsMoney(card.amountToRaise)}{" "}
          <span className="text-xs text-gray-400 ml-2">(Funding Goal)</span>
        </p>
        <p className="my-2 text-sm md:text-lg flex flex-row items-center">
          <TbProgressCheck className="mr-3" /> {card.currency}{" "}
          {formatAsMoney(card.amountRaised)}{" "}
          <span className="text-xs text-gray-400 ml-2">(Funding Recieved)</span>
        </p>
        <p className="my-2 text-xs md:text-sm flex flex-row items-center">
          <TbCalendarTime className="mr-3" /> {card.campaignPeriod}
        </p>
        <p className="my-2 text-sm md:text-lg flex flex-row items-center">
          <MdCategory className="mr-3" /> {card.category}
        </p>
        <p className="my-2 text-xs md:text-sm text-left">{card.description}</p>
        <div className="flex flex-row justify-evenly items-center h-20 w-full bg-gray-100 rounded ">
          <ShareButton
            toggleShareButton={toggleShareButton}
            showOptions={showOptions}
            campaign_Id={card.id}
          />
          <DonateButton
            toggleDonateButton={toggleDonateButton}
            showList={showList}
          />
        </div>
      </div>
    </div>
  );
};

export default LongCard;
