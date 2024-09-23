import ShowcaseImage from "./showcase";
import InfoText from "./text";

const InfoComponent = () => {
  return (
    <div className="flex flex-row px-56 gap-10 w-full max-[1430px]:px-20 transition ease-in-out max-[1024px]:flex-col max-[610px]:px-0 max-[1024px]:gap-0 max-[1440px]:pb-56">
      <InfoText />
      <ShowcaseImage />
    </div>
  );
};

export default InfoComponent;
