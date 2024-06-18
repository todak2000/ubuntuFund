import { MouseEventHandler, ReactNode } from "react";
import { IconType } from "react-icons/lib";

export interface NavbarItemProps {
  name: string | null;
  redirect: string;
  icon: string | null;
}

export interface DropDownProps {
  items: NavbarItemProps[];
  userSessionId: string | null;
  handleSignOut: () => void;
  handleModal: (text: string | null) => void;
  setShowMobileSidebar: React.Dispatch<React.SetStateAction<boolean>>
}
export interface DropDownItemProps {
  title: string | null;
  children: NavbarItemProps[];
}

export interface HeroProps {
  dropdownItems: NavbarItemProps[];
  imageUrls: string[];
}

export interface HorizontalScrollProps {
  children: ReactNode;
}

export interface BannerProps {
  leftBanner: string;
  rightBanner: string;
  isInverse: boolean;
}

export interface WhyDeckProps {
  header: string;
  data: WhyCardProps[];
  loader: boolean;
}

export interface ReferDeckProps {
  header: string;
  subHeader: string;
  data: ReferCardProps[];
  loader: boolean;
}

export interface HeroPropss {
  categories: NavbarItemProps[];
  isLoading: boolean;
}

export interface WhyCardProps {
  icon?: string;
  reactIcon?: ReactNode;
  title: string;
  text: string;
  header?: string;
}
export interface SellingCardProps {
  index: number;
  image: string | ReactNode;
  children: SellingCardd[];
}

export interface ReferCardProps {
  title: string;
  data: ReferCardd[];
}
export interface SellingCardd {
  title: string;
  text: string[];
}
export interface ReferCardd {
  icon: string;
  text: string;
}

export interface InputTextProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  loading: boolean;
  options?: SelectOptions[];
}

export interface SelectOptions {
  value: string;
  label: string;
}
export interface ButtonProps {
  loading: boolean;
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  customClass: string;
}

export interface SelectProps {
  options: SelectOptions[];
  customClass?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export interface UserProps {
  name: string;
  email: string;
  photo: string;
  uid: string;
  prefferedCurrency?: "USD" | "NGN";
}

export type FormData = {
  name: string;
  type: string;
  note?: string;
  label: string;
  options?: string[];
};
