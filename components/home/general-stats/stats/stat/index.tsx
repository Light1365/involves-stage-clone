export interface StatPropsInterface {
  icon: any;
  title?: any;
  subtitle?: any;
}

const StatIcons = ({ icon, title, subtitle }: StatPropsInterface) => {
  return (
    <div className="flex flex-row justify-between items-center gap-2">
      <div className="bg-slate-300 rounded-full flex flex-row justify-center items-center w-40 h-40 max-[500px]:h-26 max-[500px]:w-26 max-[450px]:h-24 max-[450px]:w-24">
        {icon}
      </div>
      <div className="flex flex-col text-blue-900">
        <h1 className="font-sans text-5xl flex font-bold max-[1024px]:text-5xl">
          {title}
        </h1>
        <b className="font-sans font-normal flex max-[1024px]:text-3xl max-[450px]:text-2xl">
          {subtitle}
        </b>
      </div>
    </div>
  );
};

export default StatIcons;
