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
  handleSignOut: ()=>void;
  handleModal: (text: string|null)=> void;
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
export interface DeckProps {
  header: string;
  data: ProductCardProps[];
  loader: boolean;
}
export interface WhyDeckProps {
  header: string;
  data: WhyCardProps[];
  loader: boolean;
}
export interface FAQDeckProps {
  header: string;
  subHeader: string;
  data: FAQCardd[];
  loader: boolean;
}
export interface ReferDeckProps {
  header: string;
  subHeader: string;
  data: ReferCardProps[];
  loader: boolean;
}

export interface SellerStore {
  fullAddress: string;
  storeName: string | null;
  lat: number;
  lng: number;
  landmark: string | null;
  postalCode: string | null;
  city: string;
  state: string;
  country: string;
  isDefault: boolean;
  userId: string | null;
  contactPhoneNumber: string;
  storeAvailabilties: any[];
  productCount: number;
  id: string;
  createdOn: string;
}

export interface ContactFormProps {
  firstName: string;
  lastname: string;
  message: string;
  email: string;
  phoneNumber: string;
  subject: string;
}

export interface HeroPropss {
  categories: NavbarItemProps[];
  isLoading: boolean;
}
export interface Seller {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string | null;
}

export interface Product {
  name: string;
  slug: string;
  price: number;
  sellingPrice: number;
  previousPrice: number;
  description: string | null;
  categoryId: string;
  category: string | null;
  imageUrl: string;
  imageUrls: string | null;
  videoUrl: string | null;
  unit: number;
  objectID?: string;
  unitSold: number;
  userId: string | null;
  weight: number;
  status: string;
  pickupOption: string;
  paymentOptions: string | null;
  productImages: string | null;
  videoUrls: string | null;
  productOptions: string | null;
  productShipments: string | null;
  sellerStores: SellerStore[];
  resources: string | null;
  seller: Seller;
  id: string;
  createdOn: string;
}

export interface Category {
  name: string;
  description: string;
  imageUrl: string;
  baseCategoryId: string | null;
  baseCategory: string | null;
  code: string;
  iconUrl: string;
  isTopCategory: boolean;
  orderingNumber: number;
  id: string;
  createdOn: string;
}

export interface ProductCardProps {
  productId: string;
  productImage: string;
  productName: string;
  price: string | number;
  slug: string;
  isSearch?: boolean;
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
export interface FAQCardd {
  title: string;
  text: string;
  index?: number;
}
export interface SellingCardd {
  title: string;
  text: string[];
}
export interface ReferCardd {
  icon: string;
  text: string;
}
export interface IProductService {
  getProducts: (
    query: string
  ) => Promise<{ message: string | null; status: number; data: Product[] }>;
  getProduct: (
    productSlugId: string
  ) => Promise<{ message: string | null; status: number; data: Product }>;
  getCategories: () => Promise<{
    status: number;
    message: string;
    succeeded: boolean;
    data: Category[];
  }>;
  searchProducts?: (
    query: string
  ) => Promise<{ message: string | null; status: number; data: Product[] }>;
  getPromotedProducts?: (
    query: string
  ) => Promise<{ message: string | null; status: number; data: Product[] }>;
  getSuggestedProducts?: (
    objectID: string
  ) => Promise<{ message: string | null; status: number; data: Product[] }>;
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