import { IconType } from "react-icons";

export interface StatPropsInterface {
  icon: any;
  title?: any;
  subtitle?: any;
}

const StatIcons = ({ icon, title, subtitle }: StatPropsInterface) => {
  return (
    <div className="flex flex-row justify-between items-center gap-4">
      <div className="bg-slate-300 rounded-full flex flex-row justify-center items-center w-40 h-40 gap-10">
        {icon}
      </div>
      <div className="flex flex-col text-blue-900">
        <h1 className="font-sans text-5xl font-bold max-[1024px]:text-7xl">
          {title}
        </h1>
        <b className="font-sans font-normal max-[1024px]:text-3xl">
          {subtitle}
        </b>
      </div>
    </div>
  );
};

export default StatIcons;
