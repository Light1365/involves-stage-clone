"use client";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import ClientsCarouselProps, { ClientsCarouselInterface } from "./interface";
import { useState } from "react";

const ClientsCarousel = () => {

  const [activeCard, setActiveCard] = useState(0);
  
  const carouselItems: ClientsCarouselInterface[] = [
    {
      logo: true,
      src: "/images/dashboard.png",
      title: "O QUE NOSSOS CHEFES FALAM SOBRE O JOÃO",
      bodyText:
        "A decisão da BP Full de contratar o João, pode ter sido a melhor já tomada pela empresa até os dias de hoje. Ele se mostra um exímio funcionário, completamente diferente de tudo que já vi.",
      nameText: "Fábio Borjada",
      roleText: "O cara que me paga",
      id: 0,
    },
    {
      logo: true,
      src: "/images/dashboard.png",
      title: "O QUE NOSSOS CHEFES FALAM SOBRE O JOÃO",
      bodyText:
        "A decisão da BP Full de contratar o João, pode ter sido a melhor já tomada pela empresa até os dias de hoje. Ele se mostra um exímio funcionário, completamente diferente de tudo que já vi.",
      nameText: "Fábio Borjada",
      roleText: "O cara que me paga",
      id: 1,
    },
  ];
  return (
    <div className="w-full h-[766px] flex flex-row justify-center items-center px-24">
      <button className="pl-20"
      >
        <IoChevronBackCircleOutline
          size={60}
          className="flex flex-row items-center justify-center text-blue-500 transition ease-in-out hover:scale-110 hover:text-blue-900"
        />
      </button>
      <div className="flex-grow flex flex-row flex-nowrap h-full relative">
        {carouselItems.map((item, index) => {
          return <ClientsCarouselProps isCurrentActiveCard={activeCard} {...item} key={index} />;
        })}
      </div>
      <button className="pr-20">
        <IoChevronForwardCircleOutline
          size={60}
          className="flex flex-row items-center justify-center text-blue-500 transition ease-in-out hover:scale-110 hover:text-blue-900"
        />
      </button>
    </div>
  );
};

export default ClientsCarousel;
