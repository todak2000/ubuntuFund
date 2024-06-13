import { GoogleButton } from "../button/googleButton";
import LongCard from "../donate/longCard";

const GoogleComponent = () => (
  <div className="flex flex-col justify-center items-center w-full">
    <GoogleButton otherClass=" bg-black text-white hover:opacity-70" />
  </div>
);

export const ModalChild = (type: string, data: any) => {
  switch (type) {
    case "signin":
      return <GoogleComponent />;
    case "donate":
      return <LongCard card={data} />;

    default:
      return <span>{type}</span>;
  }
};
