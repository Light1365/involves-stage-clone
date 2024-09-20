import LpDashboard from "./lp-dashboard-image";
import BrandsLogos from "./brand-logos";
import LpContent, { LpInterface } from "./page-content";
import Image from "next/image";
import BrandLogosSection from "./brand-logos-section";

const imgUrl = "";

const LpBody = () => {
  const lpContent: LpInterface[] = [
    {
      title: true,
      titleContent:
        "A solução completa para execução, gestão e inteligência em trade marketing",
      bodyText: true,
      bodyTextContent:
        "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in mattis risus. Fusce pulvinar a risus sit amet semper. Nullam tincidunt vel nisi at sodales. Ut ut turpis a dolor ultrices fringilla et quis orci. Integer pellentesque, augue vel efficitur.",
      subtitle: true,
      subtitleContent:
        "Gere resultado e mais sell-out no fim do dia e não apenas no fim do mês.",
      isButton: true,
      buttonContent: "Solicitar diagnóstico",
      hasImage: true,
      imageSource:
        "https://involves.com/stage/wp-content/uploads/2021/07/dashboard.png",
    },
    // {
    //   content: "Link",
    //   isLinkAvailable: true,
    // },
    // {
    //   subtitle: true,
    //   content: "TESTEEE",
    // },
    // {
    //   content: "BOTÃO",
    //   isButton: true,
    // },
    // {
    //   hasImage: true,
    //   imageSource: "https://bpone.group/img/LogoClientes/ambev.png",
    // },
  ];
  return (
    <div className="w-full max-h-screen h-full max-[1020px]:">
      {lpContent.map((item, index) => {
        return <LpContent {...item} key={index} />;
      })}
      <BrandLogosSection />
    </div>
  );
};

export default LpBody;
