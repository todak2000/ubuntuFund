import { FC } from "react";
import Link from "next/link";
import { DropDownProps, NavbarItemProps } from "../constants/types";
import { CiPower } from "react-icons/ci";

const DropDown: FC<DropDownProps> = ({
  items,
  userSessionId,
  handleSignOut,
  handleModal,
  setShowMobileSidebar
}) => {

  const handleItemClick = (child: NavbarItemProps) => {
    if (!userSessionId && child.name === "Recieve Donation") {
      handleModal(child.name === "Recieve Donation" ? "/create" : null);
    }
    // This will hide the dropdown
    setShowMobileSidebar(false);
  };

  return (
    <div className="flex flex-col space-y-4 py-4 px-4">
      {items.map((child: NavbarItemProps, childIndex: number) => (
        <div key={childIndex} className="flex items-center space-x-2">
          {child.icon && (
            <img src={child.icon} alt={child.name || ""} className="" />
          )}
          <Link className="text-sm" href={child.redirect || "#"} passHref onClick={() => handleItemClick(child)}>
          {child.name}
          </Link>
        </div>
      ))}
      {!userSessionId && (
        <div
          className="hidden lg:flex w-full flex-row items-center justify-center cursor-pointer"
          onClick={() => {
            handleSignOut();
            setShowMobileSidebar(false);
          }}
        >
          <CiPower className="mr-2 cursor-pointer" /> Signout
        </div>
      )}
    </div>
  );
};

export default DropDown;


// import { FC } from "react";
// import { DropDownProps, NavbarItemProps } from "../constants/types";
// import { CiPower } from "react-icons/ci";

// const DropDown: FC<DropDownProps> = ({
//   items,
//   userSessionId,
//   handleSignOut,
//   handleModal,
//   setShowMobileSidebar
// }) => {
//   return (
//     <div className="flex flex-col space-y-4 py-4 px-4">
//       {items.map((child: NavbarItemProps, childIndex: number) => (
//         <div key={childIndex} className="flex items-center space-x-2">
//           {child.icon && (
//             <img src={child.icon} alt={child.name || ""} className="" />
//           )}
//           <a
//             href={
//               !userSessionId && child.name === "Recieve Donation"
//                 ? undefined
//                 : child.redirect
//             }
//             onClick={
//               !userSessionId && child.name === "Recieve Donation"
//                 ? () =>
//                     handleModal(
//                       child.name === "Recieve Donation" ? "/create" : null
//                     )
//                 : () => null
//             }
//             className="text-sm"
//           >
//             {child.name}
//           </a>
//         </div>
//       ))}
//       {!userSessionId && (
//         <div
//           className="hidden lg:flex w-full flex-row items-center justify-center cursor-pointer"
//           onClick={handleSignOut}
//         >
//           <CiPower className="mr-2 cursor-pointer" /> Signout
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropDown;
