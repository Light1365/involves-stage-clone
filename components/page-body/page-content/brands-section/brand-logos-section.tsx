import BrandsLogos, { BrandsLogosInterface } from "./brands-logos/brand-logos";
import BrandsLogosContent from "./brands-logos/brand-logos";

const BrandLogosSection = () => {
  const brandsLogosContent: BrandsLogosInterface[] = [
    {
      src: "/images/ambev.png",
    },
    {
      src: "/images/ambev.png",
      src2: "/images/ambev.png",
    },
    {
      src: "/images/ambev.png",
      src2: "/images/ambev.png",
    },
    {
      src: "/images/ambev.png",
      src2: "/images/ambev.png",
    },
    {
      src: "/images/ambev.png",
      src2: "/images/ambev.png",
    },
    {
      src: "/images/ambev.png",
      src2: "/images/ambev.png",
    },
    {
      src: "/images/ambev.png",
    },
  ];
  return (
    <div className="opacity-50 flex flex-row justify-center gap-10 max-h-screen h-full w-full max-[1020px]:">
      {brandsLogosContent.map((item, index) => {
        return <BrandsLogosContent {...item} key={index} />;
      })}
    </div>
  );
};

export default BrandLogosSection;
