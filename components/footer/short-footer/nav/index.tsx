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
      privacyPolicyContent: "Política de Privacidade",
    },
    {
      language: true,
      languageContent: "Português (BR)",
      redirectLink: "",
      language2: true,
      languageContent2: "English",
      language3: true,
      languageContent3: "Español",
    },

    {
      isSocialMediaIcon: true,
      isSocialMediaRedirectLink:
        "https://www.facebook.com/bponegroup/?locale=pt_BR",
      isSocialMediaRedirectLink2: "https://www.instagram.com/bponegroup/",
      isSocialMediaRedirectLink3: "https://www.instagram.com/bponegroup/",
      isSocialMediaRedirectLink4: "https://www.instagram.com/bponegroup/",
    },
    {
      copyright: true,
    },
  ];

  return (
    <ul className="bg-blue-900 w-full flex flex-row items-center pl-40 mr-40 max-[1020px]:hidden">
      {navItems.map((item, index) => {
        return <UnderFooterNavLi {...item} key={index} />;
      })}
    </ul>
  );
};
export default UnderFooterNav;
