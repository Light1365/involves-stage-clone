import { useState } from "react";
import ShortFooterNavLi, { UnderFooterLiInterface } from "./li";
import FormNav from "../../form";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import UnderFooterNavLi from "./li";

const UnderFooterNav = () => {
  const navItems: UnderFooterLiInterface[] = [
    {
      privacyPolicy: true,
      privacyPolicyContent: "Política de Privacidade"
    },
   {
    language:true,
    languageContent: "Português (BR)",
    redirectLink: "",
   },
   {
    language:true,
    languageContent: "English",
    redirectLink: "",
   },
   {
    language:true,
    languageContent: "Español",
    redirectLink: "",
   },
   {
    isSocialMediaIcon: true,
    isSocialMediaIconSource: "{FaSquareFacebook}",
   },
   {
    copyright: true,
   },

  ];

  return (
      <ul className="bg-blue-900 w-full flex flex-row justify-around items-center pl-40 mr-40 max-[1024px]:">
        {navItems.map((item, index) => {
          return <UnderFooterNavLi {...item} key={index} />;
        })}
      </ul>
  );
};
export default UnderFooterNav;
