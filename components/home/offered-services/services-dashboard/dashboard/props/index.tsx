import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export interface ServicesDashboardInterface {
  bodyImage: boolean;
  imgSrc: any;
  titleText: any;
  bodyText: any;
  isButton: boolean;
  buttonText: any;
  hasList?: boolean;
  listText1?: any;
  listText2?: any;
  listText3?: any;
}

const ServicesDashboardProps = ({
  bodyImage = true,
  imgSrc,
  titleText,
  bodyText,
  isButton = false,
  buttonText,
  hasList = false,
  listText1,
  listText2,
  listText3,
}: ServicesDashboardInterface) => {
  return (
    <div className="flex flex-row w-full even:flex-row-reverse max-[1024px]:flex-col even:max-[1024px]:flex-col max-[1024px]:px-5">
      {bodyImage && (
        <Image
          alt="teste"
          src={imgSrc}
          width={600}
          height={300}
          className="m-10 text-black"
          style={{ objectFit: "contain" }}
        />
      )}
      <div className="w-full min-h-fit flex flex-row mt-10 max-[1024px]:mt-2 max-[1024px]:mb-10">
        <div className="flex flex-col gap-6 px-20 max-[1120px]:px-10 max-[1040px]:px-0">
          <h1 className="text-black font-sans text-5xl font-bold max-[1024px]:text-xl">
            {titleText}
          </h1>
          <b className="text-gray-500 font-normal text-pretty text-xl font-sans max-[1024px]:text-base">
            {bodyText}
            {hasList && (
              <ul className="list-disc flex flex-col mt-5 justify-center px-10">
                <li>{listText1}</li>
                <li>{listText2}</li>
                <li>{listText3}</li>
              </ul>
            )}
          </b>

          {isButton && (
            <a
              href=""
              className="text-blue-500 font-bold text-xl font-sans flex flex-row items-center gap-2"
            >
              {buttonText}
              <FaArrowRightLong size={17} style={{ marginTop: 4 }} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesDashboardProps;
