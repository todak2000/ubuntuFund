import { FC } from "react";

import { WhyDeckProps } from "../constants/types";

import { key } from "@/lib/helpers/uniqueKey";

import WhyCard from "./whyCard";
import { cn } from "@/lib/styles/utils";

const WhyDeck: FC<WhyDeckProps> = ({ header, data, loader }) => {
  return (
    <section className="w-full">
      <div className="flex flex-row justify-center items-center sm:my-10 2xl:my-20">
        <h1 className="font-extrabold text-2xl lg:text-4xl 2xl:text-6xl">
          {header}
        </h1>
      </div>

      <div
        className={cn(
          " mx-auto flex flex-row flex-wrap justify-center gap-3 2xl:gap-6 max-w-[1100px] 2xl:max-w-full  3xl:max-w-full"
        )}
      >
        {data.map(({ icon, title, text, reactIcon }) => {
          return (
            <WhyCard
              key={key()}
              icon={icon}
              title={title}
              text={text}
              header={header}
              reactIcon={reactIcon}
            />
          );
        })}
      </div>
    </section>
  );
};

export default WhyDeck;
