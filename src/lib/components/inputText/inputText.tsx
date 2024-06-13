import { useFormContext, Controller } from "react-hook-form";

import type { InputTextProps, SelectOptions } from "../constants/types";

import { cn } from "@/lib/styles/utils";
import SelectText from "./selectText";

export const InputText: React.FC<InputTextProps> = ({
  name,
  label,
  type,
  placeholder,
  loading,
  options,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const className = cn(
    "relative 2xl:mt-1 block w-full text-xs sm:text-sm 2xl:text-xl border-b bg-transparent  py-1 placeholder:text-[#8D8D8D] focus:border-[#1A0F91] focus:outline-none focus:ring-[#1A0F91] ",
    {
      "border-transparent": loading,
      "border-[#D9D9D9]": !loading,
      "border-red-500": errors[name],
      "border-[#8D8D8D]": !errors[name],
    }
  );

  return (
    <div className=" my-3 lg:my-0">
      <div className=" flex w-full flex-row items-center">
        <label
          htmlFor={name}
          className={cn(
            "block text-xs sm:text-sm 2xl:text-xl font-thin text-[#8D8D8D]",
            {
              "text-red-500": errors[name],
              "text-[#8D8D8D]": !errors[name],
            }
          )}
        >
          {label}
        </label>
      </div>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => {
          if (type === "textarea") {
            return (
              <textarea
                {...field}
                disabled={loading}
                placeholder={placeholder}
                className={className}
              />
            );
          } else if (type === "select") {
            return (
              <SelectText
                {...field}
                customClass={className}
                placeholder={placeholder}
                options={options as SelectOptions[]}
              />
            );
          } else {
            return (
              <input
                {...field}
                disabled={loading}
                placeholder={placeholder}
                className={className}
              />
            );
          }
        }}
      />
      {errors[name] && (
        <div className="mt-1 flex w-full flex-row items-center">
          <span className="text-[0.7rem] text-red-500">
            {errors[name]?.message as string}
          </span>
        </div>
      )}
    </div>
  );
};
