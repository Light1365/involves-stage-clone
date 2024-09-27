"use client";

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
    <div className="flex items-center flex-col gap-10 mx-40">
      {formTitle && (
        <h1 className="w-full max-w-screen-sm text-wrap justify-center font-sans text-white opacity-70 text-center text-3xl">
          {formTitleContent}
        </h1>
      )}
      <div className="flex flex-col items-center justify-center">
        <li className="bg-white max-w-full rounded-2xl w-[425px] justify-center font-sans font-normal text-black px-10">
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
            <div className="flex flex-row pt-5 items-start text-sm">
              <input type="checkbox" className="mt-1 mr-1"></input>
              <h1>{isTermCheckboxText}</h1>
            </div>
          )}
          {isSubmitButton && (
            <button className="h-11 mb-10 mt-10 w-auto font-bold bg-blue-500 pl-10 pr-10 rounded-full text-white hover:bg-blue-900 hover:ease-in-out duration-300 focus:outline-none focus:ring focus:ring-blue-300">
              Enviar
            </button>
          )}
        </li>
      </div>
    </div>
  );
};

export default FormFields;
