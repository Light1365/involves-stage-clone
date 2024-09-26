import Image from "next/image";
import bpFullLogo from "@/public/images/bp-full-white-logo.png";

const PresentationVideo = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full -translate-y-36 max-[1024px]:translate-y-0 max-[1024px]:pt-24">
      <Image alt="" src={bpFullLogo} className="" height={600} width={600} />
    </div>
  );
};

export default PresentationVideo;
