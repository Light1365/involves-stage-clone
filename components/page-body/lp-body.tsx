import LpDashboard from "./lp-dashboard-image";
import BrandsLogos from "./brand-logos";
import LpContent, { LpInterface } from "./page-content";
import Image from "next/image";

const imgUrl = "";

const LpBody = () => {
  const lpContent: LpInterface[] = [
    {
      title: true,
      content:
        "A solução completa para execução, gestão e inteligência em trade marketing",
    },
    {
      subtitle: true,
      isLinkAvailable: true,
    },
    {
      bodyText: true,
      content: "testandoooooooooooooo",
    },
    {
      content: "Link",
      isLinkAvailable: true,
    },
    {
      subtitle: true,
      content: "TESTEEE",
    },
    {
      content: "BOTÃO",
      isButton: true,
    },
    {
      hasImage: true,
      imageSource: "https://bpone.group/img/LogoClientes/ambev.png",
    },
  ];
  return (
    <div className="max-w-screen max-h-screen flex flex-col">
      {lpContent.map((item, index) => {
        return <LpContent {...item} key={index} />;
      })}
    </div>
  );
};

export default LpBody;
