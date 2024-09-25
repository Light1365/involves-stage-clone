import { MdOutlinePersonAddAlt } from "react-icons/md";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { GrCycle } from "react-icons/gr";
import { IoPieChartOutline } from "react-icons/io5";
import { SlGlobeAlt } from "react-icons/sl";
import Stat, { StatPropsInterface } from "./stat";
import StatIcons from "./stat";

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
    max-[1640px]:px-80
    max-[1500px]:px-72
    max-[1434px]:px-64
    max-[1372px]:px-60
    max-[1338px]:px-52
    max-[1277px]:px-40
    max-[1178px]:px-32
    max-[1114px]:px-28
    max-[1085px]:px-20 
    max-[1024px]:px-0 
    max-[1024px]:flex-col 
    max-[1024px]:items-start 
    max-[1024px]:mt-10 mt-20 mb-20 bg-white py-20"
    >
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
