import { key } from "@/lib/helpers/uniqueKey";
import Image from "next/image";
import React from "react";

import { BiSolidDonateHeart } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

interface DonateButtonType {
  toggleDonateButton: () => void;
  showList: boolean;
}

const DonateButton = (props: DonateButtonType) => {
  const { toggleDonateButton, showList } = props;

  const handlePaystack = () => {
    console.log("pay with Paystack");
  };

  const handleCrypto = () => {
    console.log("pay with cypto way");
  };

  const paymentOptionData = [
    {
      title: "Paystack",
      description: "{Pay with card, Ussd, Bank transfer and more}",
      function: () => {
        handlePaystack();
      },
      imgUrl: "/paystack.svg",
    },
    {
      title: "Crypto way",
      description: "{Pay with Crypto}",
      function: () => {
        handleCrypto();
      },
      imgUrl: "/paystack.svg",
    },
  ];
  return (
    <div className={` ${showList ? "z-10" : "z-0"} md:w-1/3 w-3/5`}>
      <div
        onClick={toggleDonateButton}
        className={`flex flex-row relative justify-center bg-white hover:bg-gray-50 rounded-md shadow-md border h-10 w-full  items-center gap-2`}
      >
        <BiSolidDonateHeart /> Donate Now
      </div>
      {showList && (
        <div className="flex flex-col z-10 bottom-48 right-8 md:right-[15.5rem] mx-auto md:mx-0  justify-start border border-gray-400 w-80 md:w-80 h-[25rem] md:h-[25rem] bg-white shadow-lg rounded items-center absolute p-4">
          <span className="flex w-full flex-row justify-between items-center">
            <h5 className="text-base"> How do you wish to pay? </h5>
            <span
              onClick={toggleDonateButton}
              className=" flex flex-row justify-center rounded-full bg-gray-100 hover:bg-bg-gray-200 items-center w-8 h-8"
            >
              <FaTimes className="text-xs" />
            </span>
          </span>
          <div className="flex flex-col my-4 justify-start w-full h-full px-1 overflow-y-auto  items-center gap-4">
            {paymentOptionData.map((pay) => {
              return (
                <span
                  key={key()}
                  onClick={pay.function}
                  className="flex flex-row justify-between my-2 items-center gap-4 border w-full rounded-md hover:bg-gray-50 shadow-md items-center p-2"
                >
                  <span className="flex flex-col justify-evenly items-start">
                    <h3 className="text-base">{pay.title}</h3>
                    <p className="text-[10px]">{pay.description}</p>
                  </span>
                  <span className="flex flex-col justify-center items-center h-full w-1/5">
                    <Image
                      src={`${pay.imgUrl}`}
                      alt="agent"
                      width={50}
                      height={50}
                      priority={true}
                    />
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DonateButton;
