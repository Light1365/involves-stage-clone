"use client";

export interface LpInterface {
  content?: any;
  title?: boolean;
  subtitle?: boolean;
  bodyText?: boolean;
  isLinkAvailable?: boolean;
  isButton?: boolean;
  hasImage?: boolean;
  imageSource?: any;
}

const LpContent = ({
  content,
  title,
  subtitle,
  bodyText,
  isLinkAvailable = false,
  isButton = false,
  hasImage = false,
  imageSource = false,
}: LpInterface) => {
  return (
    <div className="max-w-screen max-h-screen w-screen bg-green-500">
      {title && <h1 className="bg-red-500">{content}</h1>}
      {subtitle && <h2 className="bg-purple-500">{content}</h2>}
      {bodyText && <h3 className="bg-orange-500">{content}</h3>}
      {isLinkAvailable && (
        <a href="" className="">
          {content}
        </a>
      )}

      {hasImage && <img src={imageSource}></img>}
      {isButton && (
        <button className="bg-blue-500 rounded-full h-11 pl-8 pr-8">
          {content}
        </button>
      )}
    </div>
  );
};

export default LpContent;
