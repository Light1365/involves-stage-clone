import { IconType } from "react-icons";

export interface StatPropsInterface {
  icon: any;
  title?: any;
  subtitle?: any;
}

const StatIcons = ({ icon, title, subtitle }: StatPropsInterface) => {
  return (
    <div className="flex flex-row justify-between items-center gap-4 ">
      <div className="bg-slate-300 rounded-full flex flex-row justify-center items-center w-32 h-32 gap-10">
        {icon}
      </div>
      <div className="flex flex-col text-blue-900">
        <h1 className="font-sans text-5xl font-bold">{title}</h1>
        <b className="font-sans font-normal">{subtitle}</b>
      </div>
    </div>
  );
};

export default StatIcons;
