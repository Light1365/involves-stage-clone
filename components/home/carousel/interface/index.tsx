import Image from "next/image";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoChevronBackSharp } from "react-icons/io5";

export interface ClientsCarouselInterface {
  logo: boolean;
  src: any;
  title: any;
  bodyText: any;
  nameText: any;
  roleText: any;
  arrowLeft: boolean;
  arrowRight: boolean;
}

const ClientsCarouselProps = ({
  logo = true,
  src,
  title,
  bodyText,
  nameText,
  roleText,
  arrowLeft = false,
  arrowRight = false,
}: ClientsCarouselInterface) => {
  return (
    <div className="flex flex-row justify-center items-center gap-10 pt-20 pb-20 flex-grow mx-40">
      <div className=" bg-blue-900 w-full flex flex-row py-24 justify-center items-center rounded-xl">
        {logo && (
          <Image
            alt=""
            src={src}
            width={300}
            height={300}
            className="w-96 h-96 object-contain"
          ></Image>
        )}
      </div>
      <div className="w-full flex flex-col justify-between gap-16">
        <h1 className="font-bold text-blue-500 font-sans tracking-[0.20em] text-2xl">
          {title}
        </h1>
        <b className="mt-10 font-sans font-medium text-gray-500 text-lg">
          "{bodyText}"
        </b>
        <div className="mt-10 flex flex-col justify-between">
          <b className="text-blue-500 font-bold font-sans text-xl">
            {nameText}
          </b>
          <b className="text-blue-500 font-semibold font-sans text-lg">
            {roleText}
          </b>
        </div>
      </div>
    </div>
  );
};

export default ClientsCarouselProps;
