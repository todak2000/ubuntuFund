"use client";
import Image from "next/image";

import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { headerArr } from "../components/constants/navbar";
import { NavbarItemProps } from "../components/constants/types";
import { key } from "../helpers/uniqueKey";
import useIsMobile from "../hooks/isMobile";
import { RxHamburgerMenu } from "react-icons/rx";
import useMobileSidebar from "../hooks/hamburger";
import DropDown from "../components/mobileDropDown/mobileDropDown";
import { GoogleButton } from "../components/button/googleButton";
import { CiPower } from "react-icons/ci";

import { useUserSession } from "../hooks/session";
import { signInWithGoogle, signOutWithGoogle } from "../firebase/firebase";
import { createSession, removeSession } from "../hooks/serverActions/auth";
import { useDispatch, useSelector } from "react-redux";
import { modal, user } from "../store";
import Modal from "../components/modal/modal";
import { ModalChild } from "../components/modal";
import { setModal } from "../store/slices/modal";
import MobileNav from "../components/mobileNav/mobileNav";
const Header = ({ session }: { session: string | null }) => {
  const userSessionId = useUserSession(session);
  const dispatch = useDispatch();
  const userr = useSelector(user);
  const isMobile = useIsMobile();
  const { showMobileSidebar, setShowMobileSidebar } =
    useMobileSidebar(isMobile);
  // console.log(userSessionId, "userSessionId---", userr, "userrr");

  const handleSignOut = async () => {
    await signOutWithGoogle();
    await removeSession();
  };

  const handleModal = (redirect: string | null) => {
    dispatch(setModal({ open: true, type: "signin", redirect: redirect }));
  };
  const closeModal = () => {
    dispatch(setModal({ open: false, type: "" }));
    if (modall && modall.data && modall.onClose) {
      modall.onClose();
    }
  };
  const modall = useSelector(modal);

  return (
    <>
      {isMobile && session && <MobileNav />}
      <header className="fixed top-0 z-10 w-full bg-white">
        <Modal isOpen={modall.open} onClose={closeModal}>
          {ModalChild(modall.type, modall.data)}
        </Modal>
        <section className="wrapper w-[90%] max-w-[1440px] mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              alt="logo-text image"
              src="/logo.svg"
              width={isMobile ? 100 : 150}
              height={isMobile ? 10 : 40}
              loading="lazy"
            />
          </Link>

          <div className="items-center  flex flex-row justify-evenly lg:min-w-[80%] xl:min-w-[60%] lg:ml-auto">
            <ul className="flex flex-row space-x-4 2xl:space-x-8 items-center w-full">
              {isMobile && showMobileSidebar ? (
                <IoCloseOutline
                  onClick={() => setShowMobileSidebar(false)}
                  className="ml-2 text-2xl cursor-pointer"
                />
              ) : (
                <>
                  {headerArr.map(
                    ({ name, redirect, icon }: NavbarItemProps) => {
                      return (
                        <li
                          key={key()}
                          className="w-full flex flex-row items-center justify-center"
                        >
                          <a
                            className="hidden cursor-pointer w-full lg:flex flex-row items-center justify-center"
                            href={
                              !userSessionId && name === "Recieve Donation"
                                ? undefined
                                : redirect
                            }
                            onClick={
                              !userSessionId && name === "Recieve Donation"
                                ? () =>
                                    handleModal(
                                      name === "Recieve Donation"
                                        ? "/create"
                                        : null
                                    )
                                : () => null
                            }
                          >
                            {icon ? (
                              <Image
                                alt="link image"
                                src={icon}
                                width={14}
                                height={14}
                                className="mr-1"
                                loading="lazy"
                              />
                            ) : null}
                            <span className="hidden lg:flex text-sm 2xl:text-lg hover:opacity-60">
                              {name}
                            </span>
                          </a>
                        </li>
                      );
                    }
                  )}
                  {userSessionId && (
                    <>
                      <li
                        className="hidden lg:flex w-full flex-row items-center justify-center cursor-pointer"
                        onClick={handleSignOut}
                      >
                        <Image
                          alt={userr?.name}
                          src={userr?.photo}
                          width={60}
                          height={60}
                          className="rounded-full mr-2"
                          loading="lazy"
                        />{" "}
                        {userr?.name.split(" ")[0]}
                      </li>
                      <li
                        className="hidden lg:flex w-full flex-row items-center justify-center cursor-pointer"
                        onClick={handleSignOut}
                      >
                        <CiPower className="mr-2 cursor-pointer" /> Signout
                      </li>
                    </>
                  )}
                </>
              )}
            </ul>
          </div>

          {isMobile && !showMobileSidebar && !session && (
            <RxHamburgerMenu
              onClick={() => setShowMobileSidebar(true)}
              className="mr-2 text-2xl cursor-pointer"
            />
          )}
          {isMobile && session && (
            <div className="flex flex-row items-center gap-3">
              <li
                className="flex w-full flex-row items-center justify-center cursor-pointer text-xs"
                onClick={handleSignOut}
              >
                <Image
                  alt={userr?.name}
                  src={userr?.photo}
                  width={30}
                  height={30}
                  className="rounded-full mr-2"
                  loading="lazy"
                />{" "}
                {userr?.name.split(" ")[0]}
              </li>
              <li
                className="flex w-full flex-row items-center justify-center cursor-pointer text-xs"
                onClick={handleSignOut}
              >
                <CiPower className="mr-2 cursor-pointer" /> Signout
              </li>
            </div>
          )}
        </section>
        {showMobileSidebar && (
          <div className="bg-white h-screen w-full absolute z-30 top-[50px] md:top-[107px]">
            <DropDown
              items={headerArr}
              handleModal={handleModal}
              userSessionId={userSessionId}
              handleSignOut={handleSignOut}
            />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
