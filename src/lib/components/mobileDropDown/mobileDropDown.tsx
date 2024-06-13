import { FC } from "react";
import { DropDownProps, NavbarItemProps } from "../constants/types";
import { GoogleButton } from "../button/googleButton";
import { CiPower } from "react-icons/ci";

const DropDown: FC<DropDownProps> = ({
  items,
  userSessionId,
  handleSignOut,
  handleModal,
}) => {
  return (
    <div className="flex flex-col space-y-4 py-4 px-4">
      {items.map((child: NavbarItemProps, childIndex: number) => (
        <div key={childIndex} className="flex items-center space-x-2">
          {child.icon && (
            <img src={child.icon} alt={child.name || ""} className="" />
          )}
          <a
            // href={child.redirect}
            href={
              !userSessionId && child.name === "Recieve Donation"
                ? undefined
                : child.redirect
            }
            onClick={
              !userSessionId && child.name === "Recieve Donation"
                ? () =>
                    handleModal(
                      child.name === "Recieve Donation" ? "/create" : null
                    )
                : () => null
            }
            className="text-xs"
          >
            {child.name}
          </a>
        </div>
      ))}
      {!userSessionId && (
        <div
          className="hidden lg:flex w-full flex-row items-center justify-center cursor-pointer"
          onClick={handleSignOut}
        >
          <CiPower className="mr-2 cursor-pointer" /> Signout
        </div>
      )}
    </div>
  );
};

export default DropDown;
