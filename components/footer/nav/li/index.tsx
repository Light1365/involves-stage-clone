"use client";
import { GoChevronDown } from "react-icons/go";
import { useState } from "react";
import { IoIosGlobe } from "react-icons/io";
import FooterLogo from "../../logo";

export interface FooterLiInterface {
  //define os tipos de valores aceitos por cada prop
  isLinkAvailable?: boolean;
  redirectLink?: any;
  redirectLink1?: any;
  redirectLink2?: any;
  redirectLink3?: any;
  redirectLink4?: any;
  redirectLink5?: any;
  redirectLink6?: any;
  redirect2Link?: any;
  listTitle?: any;
  list2Title?: any;
  listContent1?: any;
  listContent2?: any;
  listContent3?: any;
  listContent4?: any;
  listContent5?: any;
  listContent6?: any;
  list2Content?: any;
  isLogoAvailable?: boolean;
}

const FooterNavLi = ({
  //define os valores iniciais de cada prop
  isLinkAvailable = true,
  redirectLink,
  redirectLink1,
  redirectLink2,
  redirectLink3,
  redirectLink4,
  redirectLink5,
  redirectLink6,
  redirect2Link,
  listTitle,
  list2Title,
  listContent1,
  listContent2,
  listContent3,
  listContent4,
  listContent5,
  listContent6,
  list2Content,
  isLogoAvailable = false,
}: FooterLiInterface) => {
  return (
    <li className="flex flex-col font-sans font-medium text-white px-10 gap-10">
      {isLogoAvailable && <FooterLogo />}
      <h1 className="w-full text-md">{listTitle}</h1>
      <span className="flex w-min flex-col opacity-60 font-normal text-pretty gap-3">
        <a href={redirectLink1} target="_blank" className="">
          {listContent1}
        </a>
        <a href={redirectLink2} className="">
          {listContent2}
        </a>
        <a href={redirectLink3} className="">
          {listContent3}
        </a>
        <a href={redirectLink4} className="">
          {listContent4}
        </a>
        <a href={redirectLink5} className="">
          {listContent5}
        </a>
        <a href={redirectLink6} className="">
          {listContent6}
        </a>
      </span>
      {list2Title && (
        <div className="flex flex-col gap-4">
          <h1 className="text-pretty text-md">{list2Title}</h1>
          <a href={redirect2Link} className="opacity-60 font-normal">
            {list2Content}
          </a>
        </div>
      )}
    </li>
  );
};

export default FooterNavLi;
