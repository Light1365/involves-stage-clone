"use client";
import { useState } from "react";

export interface FormInterface {
  //define os tipos de valores aceitos por cada prop
  formTitle?: boolean;
  formTitleContent?: any;
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
  isTermsText?: boolean;
  isTermsTextContent?: any;
  isTermsCheckbox?: boolean;
  isTermCheckboxText?: any;
  isSubmitButton?: boolean;
}

const FormFields = ({
  formTitle = false,
  formTitleContent,
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
  isTermsText = false,
  isTermsTextContent,
  isTermsCheckbox = false,
  isTermCheckboxText,
  isSubmitButton = false,
}: //define os valores iniciais de cada prop

FormInterface) => {
  return (
    <div className="flex items-center flex-col">
      {formTitle && (
        <h1 className="pb-10 w-full max-w-lg text-wrap justify-center flex font-sans text-white opacity-70 text-center text-3xl">
          {formTitleContent}
        </h1>
      )}
      <div className="flex flex-col items-center justify-center">
        <li className="bg-white max-w-screen rounded-2xl w-4/12 justify-center font-sans font-normal text-black pl-16 pr-16">
          {nameField && (
            <div>
              <h1 className="pt-6 font-sans">{nameFieldTitle}</h1>
              <input className="bg-white border-b border-gray-300 focus:outline-none rounded-full w-full pl-3"></input>
            </div>
          )}
          {emailField && (
            <div>
              <h1 className="pt-6 font-sans">{emailFieldTitle}</h1>
              <input className="bg-white border-b border-gray-300 focus:outline-none rounded-full w-full pl-3"></input>
            </div>
          )}
          {telephoneField && (
            <div>
              <h1 className="pt-6 font-sans">{telephoneFieldTitle}</h1>
              <input className="bg-white border-b border-gray-300 focus:outline-none rounded-full w-full pl-3"></input>
            </div>
          )}
          {countryField && (
            <div>
              <h1 className="pt-6 font-sans">{countryFieldTitle}</h1>
              <input className="bg-white border-b border-gray-300 focus:outline-none rounded-full w-full pl-3"></input>
            </div>
          )}
          {enterpriseField && (
            <div>
              <h1 className="pt-6 font-sans">{enterpriseFieldTitle}</h1>
              <input className="bg-white border-b border-gray-300 focus:outline-none rounded-full w-full pl-3"></input>
            </div>
          )}
          {areaActivityField && (
            <div>
              <h1 className="pt-6 font-sans">{areaActivityFieldTitle}</h1>
              <input className="bg-white border-b border-gray-300 focus:outline-none rounded-full w-full pl-3"></input>
            </div>
          )}
          {isTermsText && (
            <h1 className="font-sans pt-6 opacity-90 text-balance text-sm">
              {isTermsTextContent}
            </h1>
          )}
          {isTermsCheckbox && (
            <div className="flex flex-row pt-5 text-balance items-start text-sm">
              <input type="checkbox" className="mt-1 mr-1"></input>
              <h1>{isTermCheckboxText}</h1>
            </div>
          )}
          {isSubmitButton && (
            <button className="h-10 w-20 bg-blue-500 text-white mt-10 mr-10 mb-10 font-sans">
              Enviar
            </button>
          )}
        </li>
      </div>
    </div>
  );
};

export default FormFields;
