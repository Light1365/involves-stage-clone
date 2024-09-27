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
    <li className="font-sans font-medium text-white px-10">
      {isLogoAvailable && <FooterLogo />}
      {isLinkAvailable && (
        <a href={redirectLink} className="">
          {listTitle}
        </a>
      )}
      {listTitle && (
        <h1 className="flex flex-col opacity-60 font-normal pt-1 text-pretty w-36 gap-3 text-sm">
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
        </h1>
      )}
      {list2Title && (
        <h1 className="flex flex-col font-medium gap-1 text-pretty w-20 text-sm">
          <a className="text-base text-white opacity-100">{list2Title}</a>
          <a href={redirect2Link} className="mt-4 opacity-60 font-normal">
            {list2Content}
          </a>
        </h1>
      )}
    </li>
  );
};

export default FooterNavLi;
