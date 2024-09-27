import ShowcaseImage from "./showcase";
import InfoText from "./text";

const InfoComponent = () => {
  return (
    <div
      className="flex flex-row px-96 gap-10 w-full 
    max-[1430px]:px-48 transition ease-in-out 
    max-[1024px]:flex-col 
    max-[610px]:px-0 
    max-[1024px]:gap-0 
    max-[1440px]:pb-0
    max-[2560px]:px-96
    max-[1920px]:px-96
    max-[1720px]:px-96
    max-[1560px]:px-44
    max-[1200px]:px-40
    max-[1150px]:px-36
    max-[1124px]:px-32
    "
    >
      <InfoText />
      <ShowcaseImage />
    </div>
  );
};

export default InfoComponent;
