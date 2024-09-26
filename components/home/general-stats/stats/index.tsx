import { MdOutlinePersonAddAlt } from "react-icons/md";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { GrCycle } from "react-icons/gr";
import { IoPieChartOutline } from "react-icons/io5";
import { SlGlobeAlt } from "react-icons/sl";
import Stat, { StatPropsInterface } from "./stat";
import StatIcons from "./stat";
import PresentationVideo from "../presentation-video";

const GeneralStats = () => {
  const iconItems: StatPropsInterface[] = [
    {
      icon: <SlGlobeAlt color="rgb(30,58,138)" size={60} />,
      title: "24",
      subtitle: "países",
    },
    {
      icon: <MdOutlinePersonAddAlt color="rgb(30,58,138)" size={60} />,
      title: "+500",
      subtitle: "clientes",
    },
    {
      icon: <GrCycle color="rgb(30,58,138)" size={60} />,
      title: "+85 mil",
      subtitle: "promotores conectados",
    },
    {
      icon: <HiOutlineBuildingStorefront color="rgb(30,58,138)" size={60} />,
      title: "+900",
      subtitle: "marcas atendidas",
    },
    {
      icon: <IoPieChartOutline color="rgb(30,58,138)" size={60} />,
      title: "+3 milhões",
      subtitle: "dados gerados por semana",
    },
  ];
  return (
    <div
      className="flex flex-row gap-10 w-full justify-center flex-wrap px-72  
    max-[1920px]:px-96
    max-[1739px]:px-80
    max-[1610px]:px-72
    max-[1547px]:px-64
    max-[1483px]:px-60
    max-[1451px]:px-52
    max-[1387px]:px-40
    max-[1338px]:px-34
    max-[1291px]:px-28
    max-[1195px]:px-20
    max-[1131px]:px-14
    max-[1083px]:px-10
    max-[1051px]:px-0 
    max-[1024px]:flex-col 
    max-[1024px]:items-start 
    max-[1024px]:mt-10 mt-56 mb-20 bg-white pb-24"
    >
      <PresentationVideo />

      {iconItems.map((item, index) => {
        return <StatIcons {...item} key={index} />;
      })}
      {/* <Stat icon={SlGlobeAlt} />
      <Stat icon={MdOutlinePersonAddAlt} />
      <Stat icon={GrCycle} />
      <Stat icon={HiOutlineBuildingStorefront} />
      <Stat icon={IoPieChartOutline} /> */}
    </div>
  );
};

export default GeneralStats;
