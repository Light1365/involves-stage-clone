"use client";
import { GoChevronDown } from "react-icons/go";
import { useState } from "react";
import HeaderPrimaryDropdown from "./dropdown-menu";
import { IoIosGlobe } from "react-icons/io";
import LanguageModal from "../language-modal";

export interface LiInterface {
  //define os tipos de valores aceitos por cada prop
  isDropdownButton?: boolean;
  isLinkAvailable?: boolean;
  content: any;
  isChevronDownAvailable?: boolean;
  isButtonAvailable?: boolean;
  chevronGap?: number;
  isModalButton?: boolean;
}

const HeaderNavLi = ({
  //define os valores iniciais de cada prop
  isLinkAvailable = true,
  content,
  isChevronDownAvailable = false,
  isButtonAvailable = false,
  chevronGap = 0,
  isDropdownButton = false,
  isModalButton = false,
}: LiInterface) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleDropdown() {
    setIsOpen((isOpen) => !isOpen);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  function toggleModal() {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  }

  return (
    <li className="font-sans font-medium">
      {isDropdownButton && (
        <button className="flex flex-row items-center" onClick={toggleDropdown}>
          {isOpen ? <HeaderPrimaryDropdown /> : null}
          {content}
          {isChevronDownAvailable && (
            <GoChevronDown
              style={{
                marginLeft: chevronGap,
              }}
            />
          )}
        </button>
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
        <button className="h-11 font-bold bg-blue-500 pl-10 pr-10 rounded-full text-white hover:bg-blue-900 hover:ease-in-out duration-300 focus:outline-none focus:ring focus:ring-blue-300">
          {content}
        </button>
      )}
      {isModalButton && (
        <button
          className="flex flex-row justify-center items-center"
          onClick={toggleModal}
        >
          {isModalOpen ? <LanguageModal /> : null}
          <IoIosGlobe size={30} />
          {isChevronDownAvailable && <GoChevronDown />}
        </button>
      )}
    </li>
  );
};

export default HeaderNavLi;
