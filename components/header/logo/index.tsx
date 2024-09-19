import bpFullLogo from "@/public/images/bp full black resized.png";
import Image from "next/image";

const HeaderLogo = () => {
  const imgUrl = "";

  return (
    <a href="home">
      <Image
        src={bpFullLogo}
        alt="header-logo"
        className=""
        style={{
          width: 125,
          height: 75,
          objectFit: "contain",
        }}
      />
    </a>
  );
};

export default HeaderLogo;
