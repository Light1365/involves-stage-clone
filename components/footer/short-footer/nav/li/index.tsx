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
  privacyPolicyContent?: any;
  language?: boolean;
  language2?: boolean;
  language3?: boolean;
  languageContent?: any;
  languageContent2?: any;
  languageContent3?: any;
  isSocialMediaIcon?: boolean;
  isSocialMediaRedirectLink?: any;
  isSocialMediaRedirectLink2?: any;
  isSocialMediaRedirectLink3?: any;
  isSocialMediaRedirectLink4?: any;
  redirectLink?: any;
  copyright?: boolean;
}

const UnderFooterNavLi = ({
  //define os valores iniciais de cada prop
  privacyPolicy = false,
  privacyPolicyContent,
  language = false,
  language2 = false,
  language3 = false,
  languageContent,
  languageContent2,
  languageContent3,
  isSocialMediaIcon = false,
  isSocialMediaRedirectLink,
  isSocialMediaRedirectLink2,
  isSocialMediaRedirectLink3,
  isSocialMediaRedirectLink4,
  redirectLink,
  copyright = false,
}: UnderFooterLiInterface) => {
  return (
    <li className="font-sans text-sm text-white w-full opacity-60">
      <div className="flex flex-row justify-center">
        {privacyPolicy && (
          <div className="">
            <a href="" className="flex flex-row items-start justify-center">
              {privacyPolicyContent}
            </a>
          </div>
        )}
      </div>
      <div className="flex flex-row gap-6 justify-end">
        {language && (
          <a href={redirectLink} className="">
            {languageContent}
          </a>
        )}
        {language2 && (
          <a href={redirectLink} className="">
            {languageContent2}
          </a>
        )}
        {language3 && (
          <a href={redirectLink} className="">
            {languageContent3}
          </a>
        )}
      </div>
      {isSocialMediaIcon && (
        <div className="flex flex-row justify-end gap-2 items-center w-3/4">
          <a href={isSocialMediaRedirectLink}>
            <FaSquareFacebook />
          </a>
          <a href={isSocialMediaRedirectLink2}>
            <FaInstagram />
          </a>
          <a href={isSocialMediaRedirectLink3}>
            <FaLinkedinIn />
          </a>
          <a href={isSocialMediaRedirectLink4}>
            <FaYoutube />
          </a>
        </div>
      )}
      {copyright && (
        <div className="flex flex-row items-center justify-center">
          <FaRegCopyright />
          <h1 className="pl-1">2024 BP Full</h1>
        </div>
      )}
    </li>
  );
};

export default UnderFooterNavLi;
