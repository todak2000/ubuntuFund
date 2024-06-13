import { FC } from "react";

import SellingCard from "./sellingCard";
import { key } from "@/lib/helpers/uniqueKey";
import { LuGoal } from "react-icons/lu";
import { GrTechnology } from "react-icons/gr";
import { GiOnTarget } from "react-icons/gi";
const SellingSection: FC = () => {

const selling = [
  {
    image: <LuGoal className="size-[200px] text-[#959292]"/>,
    children: [
      {
        title: "Our Mission",
        text: [
          `Our mission is to enhance the efficiency and effectiveness of charitable giving. We introduce a robust vetting process for funding requests and ensure the appropriate use of disbursed funds. This increases trust and productivity in the philanthropic sector, enabling more effective allocation of resources to where they are most needed.`,
        ],
      },
    ],
  },
  {
    image: <GrTechnology className="size-[200px] text-[#959292]"/>,
    children: [
      {
        title: "Harnessing the Power of Technology",
        text: [
          `We leverage cutting-edge AI technology for image vetting and Blockchain for cross-border payments. This innovative application of technology increases the trustworthiness of our platform and addresses the challenge of financial transactions across different countries.`,
        ],
      },
    ],
  },
  {
    image: <GiOnTarget className="size-[200px] text-[#959292]"/>,
    children: [
      {
        title: "Impacting Lives",
        text: [
          `By increasing the trustworthiness and efficiency of charitable giving, UbuntuFund is making a significant impact on individual and organizational productivity. We’re enabling better outcomes in areas such as healthcare, education, and project management.`,
        ],
      },
      {
        title: "Join Us",
        text: [
          `UbuntuFund addresses a real-world productivity issue using innovative technology solutions. It has the potential to make a significant impact on individual and organizational productivity in Africa. Join us in making this vision a reality.`,
        ],
      },
    ],
  },
];
  return (
    <div id="mission" className="mb-20">
      {selling.map(({ image, children }, index) => {
        return <SellingCard key={key()} image={image} children={children} index={index} />;
      })}
    </div>
  );
};

export default SellingSection;
