import { FC, useState, useEffect } from "react";
import { SelectOptions, SelectProps } from "../constants/types";
import { IoIosArrowDown } from "react-icons/io";
import { cn } from "@/lib/styles/utils";
import { FaRegCircleDot } from "react-icons/fa6";

const SelectText: FC<SelectProps> = ({
  options,
  placeholder,
  value,
  onChange,
  customClass,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOptions | null>(
    null
  );

  useEffect(() => {
    if (value) {
      const option = options.find((option) => option.value === value);
      setSelectedOption(option || null);
    }
  }, [value, options]);

  const handleSelect = (option: SelectOptions) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className={cn(
          "w-full py-2 px-3 border-b border-[#8D8D8D] flex flex-row items-center  text-left focus:border-[#1A0F91] focus:outline-none focus:ring-[#1A0F91] text-xs 2xl:text-sm",
          {
            "justify-end": !selectedOption?.label,
            "justify-between": selectedOption?.label,
          }
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <IoIosArrowDown className="text-lg" />
      </button>
      {isOpen && (
        <ul className="absolute w-full mt-1 py-3 z-50 bg-white border-[0.5px] border-[#BDBDBD] rounded-xl max-h-60 overflow-auto">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-3 py-1 flex flex-row items-center hover:bg-[#BDBDBD] cursor-pointer text-xs 2xl:text-sm"
              onClick={() => handleSelect(option)}
            >
              <FaRegCircleDot className="mr-3 text-[#BDBDBD] text-sm" />
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectText;
