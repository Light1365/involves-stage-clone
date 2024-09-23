import Image from "next/image";
import ServicesDashboardImage from "./dashboard";
import ServicesDashboardText from "./text";

const ServicesDashboard = () => {
  return (
    <div className="w-full min-h-fit flex flex-row max-[1024px]:flex-col max-[1024px]:justify-center items-center">
      <ServicesDashboardImage />
      <ServicesDashboardText />
    </div>
  );
};

export default ServicesDashboard;
