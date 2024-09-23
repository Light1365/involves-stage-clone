import Image from "next/image";

const imgUrl = "/images/dashboard.png";

const ShowcaseImage = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center max-[1280px]:mt-24 max-[1024px]:mt-0 max-[1024px]:w-full max-[1024px]:h-full">
      <Image
        src={imgUrl}
        width={500}
        height={500}
        alt="dashboard.png"
        className="w-[800px] h-[400px] object-contain max-w-md max-[1280px]:w-[700px] max-[1280px]:h-[350px] max-[1024px]:w-[800px] max-[1024px]:h-[400px] max-[610px]:w-[600px] max-[610px]:h-[250px] max-[450px]:h-11/12 max-[450px]:w-11/12"
      />
    </div>
  );
};

export default ShowcaseImage;
