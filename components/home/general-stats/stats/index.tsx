import { MdOutlinePersonAddAlt } from "react-icons/md";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { GrCycle } from "react-icons/gr";
import { IoPieChartOutline } from "react-icons/io5";
import { SlGlobeAlt } from "react-icons/sl";
import Stat from "./stat";

const StatsNumbers = () => {
  return (
    <div className="flex flex-row gap-10 w-full justify-center flex-wrap px-72 mt-20 mb-20 bg-white">
      <Stat icon={SlGlobeAlt} />
      <Stat icon={MdOutlinePersonAddAlt} />
      <Stat icon={GrCycle} />
      <Stat icon={HiOutlineBuildingStorefront} />
      <Stat icon={IoPieChartOutline} />

      {/* <MdOutlinePersonAddAlt
        color="rgb(30 58 138)"
        style={{
          height: 40,
          width: 40,
        }}
      />
      <HiOutlineBuildingStorefront
        color="rgb(30 58 138)"
        style={{
          height: 40,
          width: 40,
        }}
      />
      <GrCycle
        color="rgb(30 58 138)"
        style={{
          height: 40,
          width: 40,
        }}
      />
      <IoPieChartOutline
        color="rgb(30 58 138)"
        style={{
          height: 40,
          width: 40,
        }}
      />
      <SlGlobeAlt
        color="rgb(30 58 138)"
        style={{
          height: 40,
          width: 40,
        }}
      /> */}
    </div>
  );
};

export default StatsNumbers;
