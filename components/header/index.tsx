"use client";
import HeaderLogo from "@/components/header/logo";
import { PiHamburger } from "react-icons/pi";
import HeaderNav from "@/components/header/nav";
import { useState } from "react";
import ShortHeaderNav from "./short-header/nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleShortDropdown() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <header className="text-black flex flex-row items-center justify-between w-full p-4 px-24 max-[1120px]:px-10">
      <HeaderLogo />
      <HeaderNav />
      <PiHamburger
        size={32}
        className="hidden max-[1024px]:block cursor-pointer"
        onClick={toggleShortDropdown}
      />{" "}
      {isOpen ? <ShortHeaderNav /> : null}
    </header>
  );
};

export default Header;
