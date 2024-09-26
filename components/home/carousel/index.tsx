import { IoChevronBackCircleOutline } from "react-icons/io5";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import ClientsCarouselProps, { ClientsCarouselInterface } from "./interface";

const ClientsCarousel = () => {
  const iconItems: ClientsCarouselInterface[] = [
    {
      logo: true,
      src: "/images/dashboard.png",
      title: "O QUE NOSSOS CHEFES FALAM SOBRE O JOÃO",
      bodyText:
        "A decisão da BP Full de contratar o João, pode ter sido a melhor já tomada pela empresa até os dias de hoje. Ele se mostra um exímio funcionário, completamente diferente de tudo que já vi.",
      nameText: "Fábio Borjada",
      roleText: "O cara que me paga",
      arrowLeft: false,
      arrowRight: false,
    },
    // {
    //   logo: true,
    //   src: "/images/dashboard.png",
    //   title: "O QUE NOSSOS CHEFES FALAM SOBRE O JOÃO",
    //   bodyText:
    //     "A decisão da BP Full de contratar o João, pode ter sido a melhor já tomada pela empresa até hoje. Ele se mostra um exímio funcionário, completamente diferente de tudo que já vi.",
    //   nameText: "Fábio Borjada",
    //   roleText: "O cara que me paga",
    //   arrowLeft: false,
    //   arrowRight: false,
    // },
  ];
  return (
    <div className="w-[1920px] h-auto flex flex-row justify-center items-center px-24">
      <button className="pl-20">
        <IoChevronBackCircleOutline
          size={60}
          className="flex flex-row items-center justify-center text-blue-500"
        />
      </button>
      {iconItems.map((item, index) => {
        return <ClientsCarouselProps {...item} key={index} />;
      })}
      <button className="pr-20">
        <IoChevronForwardCircleOutline
          size={60}
          className="flex flex-row items-center justify-center text-blue-500"
        />
      </button>
    </div>
  );
};

export default ClientsCarousel;
