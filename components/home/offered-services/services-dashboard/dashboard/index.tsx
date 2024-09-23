import Image from "next/image";
import dashboardImage from "@/public/images/dashboard.png";

const ServicesDashboardImage = () => {
  return (
    <Image
      alt="teste"
      src={dashboardImage}
      width={600}
      height={300}
      className="m-10"
      style={{ objectFit: "contain" }}
    />
  );
};

export default ServicesDashboardImage;
