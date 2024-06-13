import { FC } from "react";
import { WhyCardProps } from "../constants/types";
import Image from "next/image";
import { cn } from "@/lib/styles/utils";
import { TbDeviceIpadCheck } from "react-icons/tb";

const WhyCard: FC<WhyCardProps> = ({
  icon,
  title,
  text,
  header,
  reactIcon,
}) => {
  return (
    <div
      className="space-y-4 2xl:space-y-6 py-3 px-4 bg-white w-[266px] 2xl:w-[400px] 3xl:w-[550px] h-[208px] 2xl:h-[400px] flex flex-col items-center justify-center "
    >
      {reactIcon ? (
        <>{reactIcon}</>
      ) : (
        <Image
          alt={`${title} image`}
          src={icon}
          width={48}
          height={48}
          loading="lazy"
          className="object-contain"
        />
      )}

      <p
        className="text-sm font-medium md:text-lg 2xl:text-2xl text-center"
      >
        {title}
      </p>
      <p
        className="text-xs 2xl:text-xl text-center"
      >
        {text}
      </p>
    </div>
  );
};

export default WhyCard;
