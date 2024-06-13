import React from "react";
import ProgressBar from "@/lib/components/progressBar/progressBar";

import { BsFillPersonFill } from "react-icons/bs";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { LuGoal } from "react-icons/lu";
import { TbProgressCheck } from "react-icons/tb";
import { TbCalendarTime } from "react-icons/tb";
import { MdCategory } from "react-icons/md";
import { formatAsMoney } from "@/lib/helpers/formatMoney";
import { DonateCardProps } from "@/lib/helpers/generateData";
import { CgOrganisation } from "react-icons/cg";
import useIsMobile from "@/lib/hooks/isMobile";
import { setModal } from "@/lib/store/slices/modal";
import { useDispatch } from "react-redux";

const DonateCard: React.FC<{
  card: DonateCardProps;
  onClick: (data: DonateCardProps|null) => void;
  selectedCard: DonateCardProps | null;
}> = ({ card, onClick, selectedCard }) => {
  const dispatch = useDispatch();
  const isMobile = useIsMobile();
  const isSelected = selectedCard !== null;

  const handleClick = () => {
    onClick(card);
    if (isMobile) {
      dispatch(
        setModal({
          open: true,
          type: "donate",
          data: card,
          onClose: () => onClick(null),
        })
      );
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer shadow-lg bg-white p-4 flex ${isSelected ? "flex-col" : "flex-col lg:flex-row"} rounded-sm`}
    >
      <img
        src={card.imageUrl}
        alt=""
        className={`w-full ${isSelected && !isMobile ? "md:w-full" : "lg:w-1/2"}  object-cover overflow-hidden`}
      />
      <div className="py-2 md:py-3 md:px-6 w-full">
        <p className="text-sm md:text-lg flex flex-row items-center my-2">
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

        <p className="my-2 text-xs md:text-sm flex flex-row items-center">
          <TbCalendarTime className="mr-3" /> {card.campaignPeriod}
        </p>
        <p className="my-2 mb-6 text-sm md:text-lg flex flex-row items-center">
          <MdCategory className="mr-3" /> {card.category}
        </p>
        <ProgressBar
          total={card.amountToRaise}
          current={card.amountRaised}
          currency={card.currency}
          isSmallCard={true}
        />
      </div>
    </div>
  );
};

export default DonateCard;
