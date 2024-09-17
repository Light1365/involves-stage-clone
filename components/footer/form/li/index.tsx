"use client";
import { GoChevronDown } from "react-icons/go";
import { useState } from "react";
import { IoIosGlobe } from "react-icons/io";

export interface FormInterface {
  //define os tipos de valores aceitos por cada prop
  nameField?: boolean;
  nameFieldTitle?: any;
  emailField?: boolean;
  emailFieldTitle?: any;
  telephoneField?: boolean;
  telephoneFieldTitle?: any;
  countryField?: boolean;
  countryFieldTitle?: any;
  enterpriseField?: boolean;
  enterpriseFieldTitle?: any;
  areaActivityField?: boolean;
  areaActivityFieldTitle?: any;
}

const FormFields = ({
  nameField = false,
  nameFieldTitle,
  emailField = false,
  emailFieldTitle,
  telephoneField = false,
  telephoneFieldTitle,
  countryField = false,
  countryFieldTitle,
  enterpriseField = false,
  enterpriseFieldTitle,
  areaActivityField = false,
  areaActivityFieldTitle,
}: //define os valores iniciais de cada prop

FormInterface) => {
  return (
    <div className="bg-white max-w-screen h-96 rounded-2xl">
      <li className="font-sans font-normal text-black pl-10 pr-10">
        {nameField && (
          <div>
            <h1 className="pt-6">{nameFieldTitle}</h1>
            <input className="bg-white border-b border-gray-300 focus:outline-none rounded-full w-96 pl-3"></input>
          </div>
        )}
        {emailField && (
          <div>
            <h1 className="pt-6">{emailFieldTitle}</h1>
            <input className="bg-white border-b border-gray-300 focus:outline-none rounded-full w-96 pl-3"></input>
          </div>
        )}
        {telephoneField && (
          <div>
            <h1 className="pt-6">{telephoneFieldTitle}</h1>
            <input className="bg-white border-b border-gray-300 focus:outline-none rounded-full w-96 pl-3"></input>
          </div>
        )}
        {countryField && (
          <div>
            <h1 className="pt-6">{countryFieldTitle}</h1>
            <input className="bg-white border-b border-gray-300 focus:outline-none rounded-full w-96 pl-3"></input>
          </div>
        )}
        {enterpriseField && (
          <div>
            <h1 className="pt-6">{enterpriseFieldTitle}</h1>
            <input className="bg-white border-b border-gray-300 focus:outline-none rounded-full w-96 pl-3"></input>
          </div>
        )}
        {areaActivityField && (
          <div>
            <h1 className="pt-6">{areaActivityFieldTitle}</h1>
            <input className="bg-white border-b border-gray-300 focus:outline-none rounded-full w-96 pl-3"></input>
          </div>
        )}
      </li>
    </div>
  );
};

export default FormFields;
