import InfoCardProps, { InfoCardPropsInterface } from "./card";

const InfoCard = () => {
  const infoCardItems: InfoCardPropsInterface[] = [
    {
      image: true,
      title: "AAAAAAAAAAAAAAAAAAAAAAAA",
      subtitle: "TESTE",
      bodyText: "",
      subBodyText: "",
    },
  ];
  return (
    <div className="w-full bg-blue-900 flex flex-col">
      {infoCardItems.map((item, index) => {
        return <InfoCardProps {...item} key={index} />;
      })}
    </div>
  );
};

export default InfoCard;
