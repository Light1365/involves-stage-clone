import Image from "next/image";
import bpFullLogo from "@/public/images/bp-full-white-logo.png";

const PresentationVideo = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <Image alt="" src={bpFullLogo} className="" height={600} width={600} />
    </div>
  );
};

export default PresentationVideo;
