"use client";
import type { FC } from "react";

import type { ButtonProps } from "../constants/types";
import Loader from "../loader/Loader";
import { cn } from "@/lib/styles/utils";

const FormButton: FC<ButtonProps> = ({
  text,
  loading,
  onClick,
  children,
  customClass,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className={cn(
        "w-full md:max-w-[200px] h-[46px] p-1 my-3 flex flex-row items-center cursor-pointer justify-center space-x-3 text-xs",
        customClass
      )}
    >
      {loading ? <Loader /> : <span onClick={onClick} className="cursor-pointer">{text}</span>}
    </button>
  );
};

export default FormButton;
