"use client";
import Image from "next/image";

const ClientsLogos = () => {
  const brandsLogosContent: string[] = [
    "/images/ambev.png",
    "/images/ambev.png",
    "/images/ambev.png",
    "/images/ambev.png",
    "/images/ambev.png",
    "/images/ambev.png",
    "/images/ambev.png",
    "/images/ambev.png",
    "/images/ambev.png",
    "/images/ambev.png",
    "/images/ambev.png",
    "/images/ambev.png",
  ];
  return (
    <div
      className="opacity-50 flex flex-row flex-wrap justify-center gap-10 h-full w-full px-72 
    max-[1920px]:px-[550px]
    max-[1900px]:px-[500px]
    max-[1800px]:px-[450px]
    max-[1700px]:px-[400px]
    max-[1600px]:px-[350px]
    max-[1500px]:px-[300px]
    max-[1400px]:px-[250px]
    max-[1300px]:px-[200px]
    max-[1200px]:px-[150px]
    max-[]:"
    >
      {brandsLogosContent.map((image, index) => {
        return (
          <Image
            key={index}
            alt="company-image"
            src={image}
            width={500}
            height={500}
            className="w-20 h-20 object-contain"
          />
        );
      })}
    </div>
  );
};

export default ClientsLogos;
