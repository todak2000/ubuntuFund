'use client'
import { FC, MouseEventHandler } from "react";
import Link from "next/link";
import { cn } from "@/lib/styles/utils";

interface ButtonProps {
  text: string;
  customClass: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  href?: string;
}

const Button: FC<ButtonProps> = ({
  customClass,
  text,
  href,
  onClick,
}) => {
  const defaultClass = cn(
            "w-full max-w-[200px] h-[46px] p-1 my-3 flex flex-row items-center justify-center space-x-3 text-xs",
            customClass
          )
  if (href) {
    return (
      <Link href={href} className={defaultClass} passHref>
        {text}
      </Link>
    );
  } else {
    
    return (
      <button
        onClick={onClick}
        className={defaultClass}
      >
        {text}
      </button>
    );
  }
};

export default Button;


// import { FC, MouseEventHandler } from "react";

// import Link from "next/link";
// import { cn } from "@/lib/styles/utils";

// interface ButtonProps {
//   text: string;
//   customClass: string;
//   onClick?: MouseEventHandler<HTMLAnchorElement>;
//   href?: string;
// }
// const Button: FC<ButtonProps> = ({
//   customClass,
//   text,
//   href = "",
//   onClick = () => null,
// }) => {

    
//   return (
//     <Link
//       href={href}
//       onClick={handleClick}
//       className={cn(
//         "w-full max-w-[200px] h-[46px] p-1 my-3 flex flex-row items-center justify-center space-x-3 text-xs",
//         customClass
//       )}
//     >
//       {text}
//     </Link>
//   );
// };

// export default Button;
