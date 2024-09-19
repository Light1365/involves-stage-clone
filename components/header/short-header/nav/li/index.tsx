"use client";

import { GoChevronDown } from "react-icons/go";
import { useState } from "react";
import { IoIosGlobe } from "react-icons/io";
import LanguageModal from "@/components/header/nav/language-modal";
import ShortHeaderNav from "..";
import { PiHamburger } from "react-icons/pi";
import ShortHeaderPrimaryDropdown from "../short-dropdown-menu";
import ShortLanguageModal from "../short-language-modal";

export interface ShortLiInterface {
  isDropdownButton?: boolean;
  isLinkAvailable?: boolean;
  content: any;
  isChevronDownAvailable?: boolean;
  isButtonAvailable?: boolean;
  chevronGap?: number;
  isModalButton?: boolean;
}

const ShortHeaderNavLi = ({
  isDropdownButton = false,
  isLinkAvailable = true,
  content,
  isChevronDownAvailable = false,
  isButtonAvailable = false,
  chevronGap = 0,
  isModalButton = false,
}: ShortLiInterface) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown() {
    setIsOpen((isOpen) => !isOpen);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  function toggleModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }
  return (
    <li className="font-semibold font-sans">
      {isDropdownButton && (
        <div className="w-full">
          <button
            className="flex flex-column items-center"
            onClick={toggleDropdown}
          >
            {content}
            {isChevronDownAvailable && (
              <GoChevronDown
                style={{
                  marginLeft: chevronGap,
                }}
              />
            )}
          </button>
          {isOpen ? <ShortHeaderPrimaryDropdown /> : null}
        </div>
      )}

      {isLinkAvailable && (
        <a href="" className="flex flex-row items-center">
          {content}
          {isChevronDownAvailable && (
            <GoChevronDown
              style={{
                marginLeft: chevronGap,
              }}
            />
          )}
        </a>
      )}
      {isButtonAvailable && (
        <button className="h-11 w-full font-bold bg-white pl-10 pr-10 rounded-full text-blue-500 hover:ease-in-out duration-300 focus:outline-none focus:ring focus:ring-blue-300">
          {content}
        </button>
      )}
      {isModalButton && (
        <button
          className="flex flex-row justify-center items-center"
          onClick={toggleModal}
        >
          <IoIosGlobe size={30} />
          {isChevronDownAvailable && <GoChevronDown />}
        </button>
      )}
      {isModalOpen ? <ShortLanguageModal /> : null}
    </li>
  );
};

export default ShortHeaderNavLi;
