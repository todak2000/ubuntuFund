import { APP_NAME } from '@/app/config';

const Footer = () => {
  return (
    <footer className="wrapper mx-auto w-[90%] max-w-[1440px]">
      <div className="flex">
        <p className="text-sm font-normal text-[#959292]">
          © {new Date().getFullYear()} - {APP_NAME} - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
