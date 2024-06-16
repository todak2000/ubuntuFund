"use client";
import { FaTimes } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import { key } from "@/lib/helpers/uniqueKey";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";

interface ShareBtnType {
  showOptions: boolean;
  toggleShareButton: () => void;
  campaign_Id: string;
}

const ShareButton = (props: ShareBtnType) => {
  const { showOptions, toggleShareButton, campaign_Id } = props;
  const [domain, setDomain] = useState("");

  useEffect(() => {
    // Set the domain once the component has mounted
    const domain = window.location.origin;
    const link = `${domain}/campaign/${campaign_Id}`;
    setDomain(link);
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${domain}`);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.error("Error copying link: ", err);
    }
  };

  const socialChannelData = [
    {
      name: "Facebook",
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(domain)}`,
      icon: <FaFacebook className="text-xl" />,
    },
    {
      name: "Twitter",
      link: `https://twitter.com/intent/tweet?url=${encodeURIComponent(domain)}`,
      icon: <FaSquareXTwitter className="text-xl" />,
    },
    {
      name: "Linkedin",
      link: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(domain)}`,
      icon: <FaLinkedin className="text-xl" />,
    },
  ];
  return (
    <div className="relative w-1/3 md:w-1/5">
      <div
        onClick={toggleShareButton}
        className={`flex  flex-row ${showOptions ? "z-10" : "z-0"} cursor-pointer bg-white  hover:text-gray-200 text-black items-center gap-2`}
      >
        <IoShareSocialSharp /> Share
      </div>

      {showOptions && (
        <div className="flex flex-col bottom-20  md:right-0 mx-auto md:mx-0 left-[-20%] md:left-0 justify-start border border-gray-400 w-80 md:w-80 h-80 md:h-60 bg-white shadow-lg rounded items-center absolute p-4">
          <span className="flex w-full flex-row justify-between items-center">
            <h5 className="text-base"> Share </h5>
            <span
              onClick={toggleShareButton}
              className=" flex flex-row justify-center rounded-full bg-gray-100 hover:bg-bg-gray-200 items-center w-8 h-8"
            >
              <FaTimes className="text-xs" />
            </span>
          </span>
          <div className="flex flex-row my-4 justify-start w-full h-20 px-1 overflow-x-auto  items-center gap-4">
            {socialChannelData.map((h) => {
              return (
                <a
                  key={key()}
                  className="flex flex-col justify-evenly items-center hover:shadow-md rounded-lg border-black hover:bg-gray-50 p-2 h-"
                  href={h.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" flex flex-row justify-center rounded-full bg-gray-100 hover:bg-bg-gray-200 items-center w-12 h-12">
                    {h.icon}
                  </span>
                  <span className="text-[12px]">{h.name}</span>
                </a>
              );
            })}
          </div>
          <div className="w-full">
            <span className="text-xs font-semibold">Donation Page Link</span>
            <div className="mt-2 w-full flex items-center">
              <input
                type="text"
                value={domain}
                readOnly
                className="p-1 border text-xs w-11/12  border-gray-400 bg-gray-100 rounded-l"
              />
              <button
                className=" text-black p-1   border border-gray-400 bg-gray-100 rounded-r"
                onClick={copyLink}
              >
                <FaCopy />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
