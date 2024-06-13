"use client";
import Image from "next/image";
import { heroText } from "../constants/hero";
import Button from "../button/mainButton";
import { GoogleButton } from "../button/googleButton";
import { useUserSession } from "@/lib/hooks/session";

const Hero =  ({ session }: { session: string | null }) => {

  const userSessionId = useUserSession(session);
  return (
    <>
      <div className="flex flex-col lg:flex-row w-full items-center">
        <div className=" w-full lg:w-[60%] flex flex-col space-y-6 lg:space-y-0 mt-6 lg:mt-0">
          <h1 className="my-1 font-extrabold text-2xl lg:text-5xl ">
            {heroText.first}, {heroText.second}
          </h1>
          <p className="my-2 text-sm lg:text-lg ">{heroText.subtext}</p>
          <div className="flex w-full lg:space-x-4 flex-row items-center space-x-2">
            {!userSessionId && (
              <GoogleButton otherClass=" bg-black text-white hover:opacity-70" />
            )}
            <Button
              text="Browse Requests"
              href="/"
              customClass="bg-black hover:opacity-65 text-white"
            />
          </div>
        </div>
        <div className="w-full lg:w-[40%] mt-6 lg:mt-0">
          <Image
            alt="heroBg image"
            src="/images/hero-bg3.png"
            width={1030}
            height={741}
            className=""
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
