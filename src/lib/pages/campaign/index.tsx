import AddComment from "@/lib/components/donate/comment";
import LongCard from "@/lib/components/donate/longCard";
import React from "react";
import { campaignData } from "@/lib/components/constants/database";

const DonationDetail = ({ params }: { params: { id: string } }) => {

  const cards: any = campaignData;
  const findUserByEmail = (id: string) => {
    return cards.find((card: any) => card.id === id);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-0 md:px-40">
      <LongCard card={findUserByEmail(params.id as string)} />
      <div className="w-full flex flex-row justify-center items-center">
        <AddComment />
      </div>
    </div>
  );
};

export default DonationDetail;
