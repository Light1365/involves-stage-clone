import Image from "next/image";

export interface ClientsCarouselInterface {
  logo: boolean;
  src: any;
  title: any;
  bodyText: any;
  nameText: any;
  roleText: any;
  id: number;
}

// export interface Props extends ClientsCarouselInterface {
//   isCurrentActiveCard: any;
// }
const ClientsCarouselProps = ({
  logo = true,
  src,
  title,
  bodyText,
  nameText,
  roleText,
  id,
}: // isCurrentActiveCard,
ClientsCarouselInterface) => {
  return (
    <div
      className="flex flex-row max-[1024px]:flex-col justify-start items-center py-20 gap-5 px-20 max-[1024px]:px-5 max-[1024px]:w-full max-[1024px]:gap-0 max-[426px]:px-0"
      // ${id === isCurrentActiveCard ? "visible" : "invisible" }
    >
      <div className="bg-blue-900 w-1/2 h-full flex flex-row justify-center items-center rounded-xl max-[1024px]:w-full max-[426px]:w-full transition ease-in-out">
        {logo && (
          <Image
            alt=""
            src={src}
            width={300}
            height={300}
            className="w-96 h-96 max-[1200px]:h-48 max-[1200px]:scale-90 object-contain"
          ></Image>
        )}
      </div>
      <div className="w-1/2 flex flex-col justify-between gap-16 max-[1024px]:w-full">
        <h1 className="font-bold text-blue-500 font-sans tracking-[0.20em] text-2xl max-[426px]:text-base">
          {title}
        </h1>
        <b className="mt-10 font-sans font-medium text-gray-500 text-lg max-[1024px]:mt-2 max-[425px]:mt-0 max-[426px]:text-base">
          "{bodyText}"
        </b>
        <div className="mt-10 flex flex-col justify-between max-[1024px]:mt-2 max-[426px]:mt-0 max-[426px]:pb-10">
          <b className="text-blue-500 font-bold font-sans text-xl max-[426px]:text-base">
            {nameText}
          </b>
          <b className="text-blue-500 font-semibold font-sans text-lg max-[1024px]:pb-10 max-[426px]:text-base">
            {roleText}
          </b>
        </div>
      </div>
    </div>
  );
};

export default ClientsCarouselProps;
