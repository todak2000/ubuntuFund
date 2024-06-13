"use client";
import { extractLabels } from "@/lib/helpers/extractLabel";
import { form } from "@/lib/store";
import { IoArrowBackCircle, IoDocument } from "react-icons/io5";
import { useSelector } from "react-redux";
import { formOneArr, formTwoArr } from "../constants/categories";
import { formatAsMoney } from "@/lib/helpers/formatMoney";
import FormButton from "../button/formButton";

const SummaryForm = ({
  setPage,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const data = useSelector(form);
  const handleBack = () => {
    setPage(2);
  };
  const handleSubmit = ()=>{

    console.log(data, 'data to be submited')
  }
  return (
    <>
      <div className="flex flex-row items-center">
        <IoArrowBackCircle
          className="cursor-pointer text-3xl lg:text-5xl"
          onClick={handleBack}
        />
      </div>

      <div className="bg-white p-5 rounded shadow-md">
        {Object.entries(data).map(([key, value], index) => {
          if(key === 'email' || key === 'recipientQuestion'){
            return null
          }
          if (key !== "proof") {
            return (
              <div key={index} className="mb-2">
                <label className="text-gray-700 my-3 text-xs md:text-sm flex flex-row">
                  {extractLabels([...formOneArr, ...formTwoArr], data).map(
                    (obj) => obj[key]
                  )}
                </label>

                {key === 'description' ? 
                <textarea
                name={key}
                value={value as string | number}
                disabled
                rows={5}
                className="w-full px-6 py-2  focus:border-black focus:outline-none focus:ring-black"
              />
                :
                <input
                type="text"
                name={key}
                value={key ==="amountToRaise" ? formatAsMoney(value as string): key ==="country" ? (value as string).split(" -")[0]:value as string | number}
                disabled
                className="w-full font-bold text-xs px-6 py-2 border-0 min-h-[48px] focus:border-black focus:outline-none focus:ring-black"
              />
                }
              </div>
            );
          } else {
            return (
              <>
                <label className=" text-gray-700 my-3 text-xs md:text-sm flex flex-row">
                {extractLabels([...formOneArr, ...formTwoArr], data).map(
                    (obj) => obj[key]
                  )}
                </label>

                <div className="flex gap-3 w-full flex-nowrap overflow-x-auto justify-evenly">
                  {(value as File[]).map((file, index) => {
                    const fileType = file.type.split("/")[0];

                    if (fileType === "image") {
                      return (
                        <a
                          key={index}
                          href={URL.createObjectURL(file)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 "
                        >
                          <img
                            src={URL.createObjectURL(file)}
                            alt="Preview"
                            className="w-[250px] h-[400px]  flex flex-col items-center justify-center border border-gray-300 text-xs text-center text-wrap flex-shrink-0"
                          />
                        </a>
                      );
                    } else if (fileType === "video") {
                      return (
                        <video
                          key={index}
                          src={URL.createObjectURL(file)}
                          className="w-[250px] h-[400px] flex flex-col items-center justify-center border border-gray-300 text-xs text-center text-wrap flex-shrink-0"
                          controls
                        />
                      );
                    } else {
                      return (
                        <div
                          key={index}
                          className="w-[250px] h-[400px] flex flex-col items-center justify-center border border-gray-300 text-xs text-center text-wrap flex-shrink-0"
                        >
                          <IoDocument className="text-2xl" />
                          <p className="text-xs overflow-wrap break-word">
                            {file.name}
                          </p>
                        </div>
                      );
                    }
                  })}
                </div>
              </>
            );
          }
        })}
        <FormButton
          text="Submit"
          loading={false}
          onClick={handleSubmit}
          customClass=" cursor-pointer bg-black text-white hover:opacity-70 mx-auto mb-12"
        />
      </div>
      
    </>
  );
};

export default SummaryForm;
