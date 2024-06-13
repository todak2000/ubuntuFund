import { FC } from "react";
import { SellingCardProps } from "../constants/types";

import { key } from "@/lib/helpers/uniqueKey";
import { cn } from "@/lib/styles/utils";
import Button from "../button/mainButton";

const SellingCard: FC<SellingCardProps> = ({ image, children, index }) => {
  return (
    <div
      className={cn("flex  w-full items-center gap-6 lg:justify-between", {
        "flex-col-reverse  lg:flex-row": index % 2 === 0,
        "flex-col-reverse lg:flex-row-reverse": index % 2 !== 0,
      })}
    >
      <div className=" w-full lg:w-[50%] flex flex-col  justify-center space-y-6">
        {children.map(({ title, text }) => {
          return (
            <div key={key()} id={title === "Culture and Values" ? "features" : ""}>
              <h1 className="my-1 3xl:my-6 font-extrabold text-xl md:text-4xl">
                {title}
              </h1>
              {text.map((i) => {
                return (
                  <p
                    key={key()}
                    className="my-2 3xl:my-8 text-xs md:text-sm 2xl:text-xl"
                  >
                    {i}
                  </p>
                );
              })}
              {title === "Start Selling Today" && (
                <Button
                  text="Sign Up"
                  customClass="mt-12 py-3 2xl:py-6 my-6 2xl:my-16 max-w-[150px] 2xl:max-w-full flex 2xl:w-[300px] flex-row items-center justify-center text-sm 2xl:text-3xl text-white rounded-[6px]"
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full lg:w-[40%] flex flex-col items-center justify-center p-10">
        {image}
      </div>
    </div>
  );
};

export default SellingCard;
