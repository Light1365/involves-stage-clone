import footerBpFullLogo from "@public/images/bp-full-white-logo.png";
import Image from "next/image";

const FooterLogo = () => {
  const imgUrl = "";

  return (
    <div>
      <Image
        src={imgUrl}
        alt="footer-logo"
        className=""
        width={10}
        height={10}
        style={{
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default FooterLogo;
