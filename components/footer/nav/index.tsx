import { GoChevronDown } from "react-icons/go";
import { IoIosGlobe } from "react-icons/io";
import { useState } from "react";
import FooterNavLi, { FooterLiInterface } from "./li";

const FooterNav = () => {
  const navItems: FooterLiInterface[] = [
    {
      isLogoAvailable: true,
    },
    {
      listTitle: "BRASIL / Sede",
      listContent:
        "Rua Joaquim Antônio Nascimento, 206 - Jardim Canadá, Ribeirão Preto - SP, 14024-180",
    },
    {
      listTitle: "BP Full",
      listContent: "E-Commerce",
      listContent2: "Nossos produtos",
      listContent3: "Trabalhe conosco",
      redirectLink1: "home",
      redirectLink2: "contact",
      redirectLink3: "test",
    },
    {
      listTitle: "Soluções",
      listContent: "Como funciona o E-commerce",
      listContent2: "Metodologia BP Full",
      listContent3: "Data Analytics",
      listContent4: "Loja perfeita",
      listContent5: "Reconhecimento por imagem",
      redirectLink1: "home",
      redirectLink2: "test2",
      redirectLink3: "test3",
      redirectLink4: "test4",
      redirectLink5: "test5",
    },
    {
      listTitle: "Empresa",
      listContent: "Quem somos",
      listContent2: "Carreira",
      listContent3: "Contato",

      list2Title: "Imprensa",
      list2Content: "bpone.group",
    },
  ];

  return (
    <div className="w-full items-center flex flex-col">
      <ul className="bg-blue-800 w-full h-full flex flex-row pt-20 pb-10 justify-center max-[1020px]:hidden">
        {navItems.map((item, index) => {
          return <FooterNavLi {...item} key={index} />;
        })}
      </ul>
      <div className="w-9/12 h-2 bg-red-500 max-[1300px]:w-11/12 max-[1020px]:hidden"></div>
      <ul className="bg-red-800 w-full h-full flex flex-row pt-20 justify-center max-[1020px]:hidden">
        {navItems.map((item, index) => {
          return <FooterNavLi {...item} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default FooterNav;
