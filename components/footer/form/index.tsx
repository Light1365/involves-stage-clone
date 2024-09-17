import { GoChevronDown } from "react-icons/go";
import { IoIosGlobe } from "react-icons/io";
import { useState } from "react";
import FormFields, { FormInterface } from "./li";

const FormNav = () => {
  const navItems: FormInterface[] = [
    {
      nameField: true,
      nameFieldTitle: "Nome",
      emailField: true,
      emailFieldTitle: "E-mail",
      telephoneField: true,
      telephoneFieldTitle: "Telefone",
      enterpriseField: true,
      enterpriseFieldTitle: "Empresa",
      countryField: true,
      countryFieldTitle: "País",
    },
  ];

  return (
    <ul className="bg-blue-900 w-full h-full flex flex-row pt-20 pb-10 justify-center max-[1020px]:">
      {navItems.map((item, index) => {
        return <FormFields {...item} key={index} />;
      })}
    </ul>
  );
};

export default FormNav;
