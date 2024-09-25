import Image from "next/image";

export interface InfoCardPropsInterface {
  image: boolean;
  src: any;
  title: any;
  subtitle: any;
  bodyText: any;
  subBodyText: any;
  button: boolean;
  buttonText: any;
}

const InfoCardItems = ({
  image = true,
  src,
  title,
  subtitle,
  bodyText,
  subBodyText,
  button = true,
  buttonText,
}: InfoCardPropsInterface) => {
  return (
    <div className="w-[440px] h-full bg-white flex flex-col justify-center items-center even:mt-64 max-[1024px]:even:mt-28 rounded-2xl relative">
      <div className="pb-10 bg-blue-100 bg-opacity-70 rounded-2xl w-11/12 flex justify-center pt">
        {image && (
          <Image
            alt=""
            width={400}
            height={300}
            src={src}
            className="relative 
          "
          />
        )}
      </div>
      <span className="px-7 pt-7">
        <h1 className="w-full flex flex-row text-blue-500 font-bold text-md font-sans tracking-[0.3em] justify-start items-start">
          {title}
        </h1>
        <b className="w-full flex flex-row text-black font-bold text-4xl font-sans justify-start items-start">
          {subtitle}
        </b>
        <b className="flex flex-row text-gray-500 font-normal mt-10">
          {bodyText}
        </b>
        <div className="flex flex-row w-full border-b border-opacity-20 border-slate-500 border mt-5 justify-center items-center"></div>
        <b className="flex flex-row text-gray-500 font-normal mt-5 pb-10">
          {subBodyText}
        </b>
      </span>
      {button && (
        <button className="h-11 mb-10 font-bold bg-blue-500 pl-10 pr-10 rounded-full text-white hover:bg-blue-900 hover:ease-in-out duration-300 focus:outline-none focus:ring focus:ring-blue-300">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default InfoCardItems;

//TRANSLATE-Y NA FOTO