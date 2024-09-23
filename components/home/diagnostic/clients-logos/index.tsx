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
  ];
  return (
    <div className="opacity-50 flex flex-row flex-wrap justify-center gap-10 h-full w-full px-6">
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
