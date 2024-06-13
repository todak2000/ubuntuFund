'use client'
import { FC, MouseEventHandler } from "react";

import Link from "next/link";
import { cn } from "@/lib/styles/utils";

interface ButtonProps {
  text: string;
  customClass: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  href?: string;
}
const Button: FC<ButtonProps> = ({
  customClass,
  text,
  href = "",
  onClick = () => null,
}) => {

    const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();
        if (onClick) {
          onClick(event);
        }
      };
  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "w-full max-w-[200px] h-[46px] p-1 my-3 flex flex-row items-center justify-center space-x-3 text-xs",
        customClass
      )}
    >
      {text}
    </Link>
  );
};

export default Button;
