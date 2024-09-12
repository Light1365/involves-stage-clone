import { GoChevronDown } from "react-icons/go";
import { IoIosGlobe } from "react-icons/io";
import ShortHeaderNavLi, { ShortLiInterface } from "./li";
import { useState } from "react";

const ShortHeaderNav = () => {
  const navItems: ShortLiInterface[] = [
    {
      content: "Soluções e Serviços",
      isChevronDownAvailable: true,
      chevronGap: 3,
      isLinkAvailable: false,
      isDropdownButton: true,
    },
    {
      content: "Histórias de Sucesso",
    },
    {
      content: "Blog",
    },
    {
      content: "Contato",
    },
    {
      content: "Suporte",
    },
    {
      content: <IoIosGlobe size={30} />,
      isChevronDownAvailable: true,
      isModalButton: true,
      isLinkAvailable: false,
    },
    {
      content: "Demonstração",
      isButtonAvailable: true,
      isLinkAvailable: false,
    },
  ];
  return (
    <ul className="flex flex-col gap-6 min-[1020px]:hidden justify-center bg-blue-500 text-white w-full pt-6 pb-6 pl-10 pr-10">
      {navItems.map((item, index) => {
        return <ShortHeaderNavLi {...item} key={index} />;
      })}
    </ul>
  );
};

export default ShortHeaderNav;
