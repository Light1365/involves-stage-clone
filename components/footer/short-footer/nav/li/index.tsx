"use client";
import { useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export interface UnderFooterLiInterface {
  //define os tipos de valores aceitos por cada prop
privacyPolicy?: boolean;
privacyPolicyContent?: any,
language?: boolean;
languageContent?: any;
isSocialMediaIcon?: boolean;
isSocialMediaIconSource?: any;
redirectLink?: any;
copyright?: boolean;
}

const UnderFooterNavLi = ({
  //define os valores iniciais de cada prop
 privacyPolicy = false,
 privacyPolicyContent,
 language = false,
 languageContent,
 isSocialMediaIcon = false,
 isSocialMediaIconSource,
 redirectLink,
 copyright = false,
}: UnderFooterLiInterface) => {
  return (
    <li className="font-sans font-sm text-white w-full flex flex-row opacity-60">
     <div>{privacyPolicy && (
        <a href="" className="">{privacyPolicyContent}</a>
     )}</div>
     <div className="">{language && (
<a href={redirectLink} className="">{languageContent}</a>
     )}</div>
    {isSocialMediaIcon && (
        <div className="flex flex-row justify-start gap-2 items-center w-4/12 max-[1024px]:justify-between">
<a href=""><FaSquareFacebook/></a>
<a href=""><FaInstagram/></a>
<a href=""><FaLinkedinIn/></a>
<a href=""><FaYoutube/></a>
</div>)}
{copyright && (
    <div className="flex flex-row items-center justify-center">
        <FaRegCopyright/><h1 className="pl-1">2024 BP Full</h1></div>
)}
    </li>
  );
};

export default UnderFooterNavLi;
