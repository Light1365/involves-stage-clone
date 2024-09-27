import { GoChevronDown } from "react-icons/go";
import { IoIosGlobe } from "react-icons/io";
import { useState } from "react";
import FormFields, { FormInterface } from "./li";
import Image from "next/image";

const FormNav = () => {
  const navItems: FormInterface[] = [
    {
      formTitle: true,
      formTitleContent:
        "Preencha os campos abaixo e solicite agora um diagnóstico da sua operação:",
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
      isSubmitButton: true,
      isTermsText: true,
      isTermsTextContent:
        "A BP Full está comprometida em proteger e respeitar a sua privacidade e tratará seus dados pessoais de acordo com a nossa Política de Privacidade.",
      isTermsCheckbox: true,
      isTermCheckboxText:
        "Confirmo que li e aceito os termos da Política de Privacidade e que estou ciente de que irei receber conteúdos e ofertas da BP Full via e-mail, podendo me descadastrar dessa comunicação a qualquer momento.",
    },
  ];

  return (
    <ul className="bg-blue-900 w-full flex flex-col justify-center items-center max-[1024px]:pb-10">
      <div className="w-10/12 py-10 rounded-xl bg-blue-500 -translate-y-36 flex flex-row justify-center items-center">
        <Image alt="" src={"/images/dashboard.png"} width={350} height={300} className="w-auto h-full object-contain"></Image>
      </div>
      {navItems.map((item, index) => {
        return <FormFields {...item} key={index} />;
      })}
    </ul>
  );
};

export default FormNav;
