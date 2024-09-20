"use client";
import "@fontsource/roboto-slab";

export interface LpInterface {
  title?: boolean;
  titleContent?: any;
  subtitle?: boolean;
  subtitleContent?: any;
  bodyText?: boolean;
  bodyTextContent?: any;
  isLinkAvailable?: boolean;
  isButton?: boolean;
  buttonContent?: any;
  hasImage?: boolean;
  imageSource?: any;
}

const LpContent = ({
  title,
  titleContent,
  subtitle,
  subtitleContent,
  bodyText = false,
  bodyTextContent,
  isLinkAvailable = false,
  isButton = false,
  buttonContent,
  hasImage = false,
  imageSource = false,
}: LpInterface) => {
  return (
    <div style={{ fontFamily: "Roboto Slab", }} className="pl-96 pr-72 flex flex-row text-5xl">
      {title && (
        <h1 className="text-black font-extrabold pr-10 text-balance">
          {titleContent}
          {bodyText && (
            <div className="font-normal text-lg text-balance pt-10">
              {bodyTextContent}
              {subtitle && (
                <div className="pt-10 font-semibold">{subtitleContent}</div>
              )}
              {isButton && (
                <button className="mt-10 h-12 font-sans rounded-full bg-blue-500 pl-10 pr-10 w-6/12 flex flex-row items-center justify-center text-white font-bold text-base mb-10 hover:bg-blue-900 hover:ease-in-out duration-300 focus:outline-none focus:ring focus:ring-blue-300">
                  {buttonContent}
                </button>
              )}
            </div>
          )}
        </h1>
      )}
      {hasImage && (
        <div className="pt-20 h-90 w-screen">
          {" "}
          <img src={imageSource} className="object-cover"></img>
        </div>
      )}
    </div>
  );
};

export default LpContent;
