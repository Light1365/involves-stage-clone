import Image from "next/image";

export interface InfoCardPropsInterface {
  image: boolean;
  title: any;
  subtitle: any;
  bodyText: any;
  subBodyText: any;
}

const InfoCardProps = ({
  image = true,
  title,
  subtitle,
  bodyText,
  subBodyText,
}: InfoCardPropsInterface) => {
  return (
    <div className="w-full h-96 bg-orange-500">
      {image && <Image alt="" src={""} />}
      <h1 className="text-5xl text-blue-500 font-sans font-semibold">
        {title}
        {subtitle}
        {bodyText}
        {subBodyText}
      </h1>
    </div>
  );
};

export default InfoCardProps;
