"use client";
import { FC } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiBoxList, CiCirclePlus } from "react-icons/ci";
import { PiHandCoinsThin } from "react-icons/pi";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/donate", icon: PiHandCoinsThin, label: "Donate" },
  { href: "/create", icon: CiCirclePlus, label: "Create" },
  { href: "/campaigns", icon: CiBoxList, label: "Campaigns" },
  {
    href: "/notification",
    icon: IoIosNotificationsOutline,
    label: "Notifications",
  },
];

const MobileNav: FC = () => {
  const path = usePathname();

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t-2 border-gray-200 py-2 px-5 flex items-center justify-around z-[1000]">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = path === item.href;
        return (
          <a
            key={index}
            href={item.href}
            className="flex flex-col items-center"
          >
            <Icon
              size={24}
              className={`${isActive ? "text-black" : "text-gray-400"}`}
            />
            <span
              className={`text-xs mt-1 ${isActive ? "text-black" : "text-gray-400"}`}
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default MobileNav;
