import { IoIosGlobe } from "react-icons/io";
import HeaderNavLi, { LiInterface } from "./li";
import { useState } from "react";

const HeaderNav = () => {
  const navItems: LiInterface[] = [
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
    <ul className="flex flex-row gap-6 max-[1024px]:hidden items-center">
      {navItems.map((item, index) => {
        return <HeaderNavLi {...item} key={index} />;
      })}
    </ul>
  );
};

export default HeaderNav;
