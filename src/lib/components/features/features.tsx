import { FC } from "react";

import WhyDeck from "../why/whyDeck";
import { TbDeviceIpadCheck } from "react-icons/tb";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FiBarChart2 } from "react-icons/fi";


const FeaturesSection: FC = () => {
  const features = [
    {
      reactIcon: <TbDeviceIpadCheck className="size-[48px] text-[#959292]"/>,
      title: "Vetting System",
      text: "a robust vetting system that verifies the authenticity of the requests using AI and physical checks.",
    },
    {
      reactIcon: <RiSecurePaymentFill className="size-[48px] text-[#959292]"/>,
      title: "Secure Payment Gateway",
      text: "Incorporated a secure payment gateway that allows for easy and safe transactions. The use of Blockchain facilitates cross-border payments.",
    },
    {
      reactIcon: <FiBarChart2 className="size-[48px] text-[#959292]"/>,
      title: "Progress Tracking",
      text: "a feature for donors to track the progress of the projects they have funded. This includes updates on how funds are being used.",
    },
  ];
  return (
    <>
      <div id="features" className="flex flex-col lg:flex-row w-full my-10">
        <WhyDeck header="Features" data={features} loader={false} />
      </div>
    </>
  );
};

export default FeaturesSection;
