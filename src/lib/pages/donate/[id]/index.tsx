import LongCard from "@/lib/components/donate/longCard";
import React from "react";

const DonationDetail = () => {
  return (
    <div>
      <h1>Donation details</h1>
      <LongCard
        card={{
          imageUrl: "",
          category: "",
          recipient: "",
          recipientQuestion: "",
          country: "",
          description: "",
          currency: "",
          amountToRaise: "",
          amountRaised: "",
          campaignPeriod: "",
          proof: [],
          isApproved: false,
        }}
      />
    </div>
  );
};

export default DonationDetail;
