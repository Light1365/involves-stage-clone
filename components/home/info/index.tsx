import InfoCardItems, { InfoCardPropsInterface } from "./card";

const InfoCard = () => {
  const infoCardProps: InfoCardPropsInterface[] = [
    {
      image: true,
      src: "/images/dashboard.png",
      title: "TESTANDO",
      subtitle: "Soluções de inteligência integradas",
      bodyText:
        "Integração entre relatórios complexos e personalizáveis e disponibilidade de consulta em tempo real.",
      subBodyText:
        "Mais visibilidade dos produtos, aumento de participação nos pontos naturais, mais presença e pontos extras.",
      button: true,
      buttonText: "Quero saber mais",
    },
    {
      image: true,
      src: "/images/dashboard.png",
      title: "TESTANDO",
      subtitle: "Soluções de inteligência integradas",
      bodyText:
        "Integração entre relatórios complexos e personalizáveis e disponibilidade de consulta em tempo real.",
      subBodyText:
        "Mais visibilidade dos produtos, aumento de participação nos pontos naturais, mais presença e pontos extras.",
      button: true,
      buttonText: "Quero saber mais",
    },
  ];
  return (
    <div
      className="w-full bg-blue-500 h-full flex flex-row gap-20 justify-center items-center mt-10 pt-10 pb-10 
    max-[1024px]:flex-col 
    max-[1024px]:items-center 
    max-[1024px]:pt-40
    "
    >
      {infoCardProps.map((item, index) => {
        return <InfoCardItems {...item} key={index} />;
      })}
    </div>
  );
};

export default InfoCard;
