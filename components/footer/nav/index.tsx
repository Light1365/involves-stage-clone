import { GoChevronDown } from "react-icons/go";
import { IoIosGlobe } from "react-icons/io";
import { useState } from "react";
import FooterNavLi, { FooterLiInterface } from "./li";
import FormNav from "../form";

const FooterNav = () => {
  const navItems: FooterLiInterface[] = [
    {
      isLogoAvailable: true,
    },
    {
      listTitle: "BRASIL / Sede",
      listContent1:
        "Rua Joaquim Antônio Nascimento, 206 - Jardim Canadá, Ribeirão Preto - SP, 14024-180",
      redirectLink1: "https://maps.app.goo.gl/Ufb8Qj48he6hPTgv5",
    },
    {
      listTitle: "BP Full",
      listContent1: "E-Commerce",
      listContent2: "Nossos produtos",
      listContent3: "Trabalhe conosco",
      redirectLink1: "home",
      redirectLink2: "contact",
      redirectLink3: "test",
    },
    {
      listTitle: "Soluções",
      listContent1: "Como funciona o E-commerce",
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
      listContent1: "Quem somos",
      listContent2: "Carreira",
      listContent3: "Contato",
      redirectLink1: "A",
      redirectLink2: "B",
      redirectLink3: "C",

      list2Title: "Imprensa",
      list2Content: "bpone.group",
      redirect2Link: "home",
    },
  ];

  return (
    <div className="w-full items-center flex flex-col">
      <FormNav />
      <ul className="bg-blue-900 w-full flex flex-row pt-20 pb-10 justify-center max-[1020px]:hidden">
        {navItems.map((item, index) => {
          return <FooterNavLi {...item} key={index} />;
        })}
      </ul>
      <div className="w-8/12 h-1 bg-red-500 max-[1300px]:w-11/12 max-[1020px]:hidden"></div>
      <ul className="w-full bg-blue-900 h-28"></ul>
    </div>
  );
};

export default FooterNav;
