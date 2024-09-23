import { IconType } from "react-icons";

interface StatPropsInterface {
  icon: IconType;
  title?: any;
  subtitle?: any;
}

const Stat = (props: StatPropsInterface) => {
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <div className="bg-slate-300 rounded-full flex flex-row justify-center items-center w-20 h-20">
        <props.icon color="rgba(30 58 138)" size={40} />
      </div>
      <div className="flex flex-col text-blue-900">
        <h1 className="font-sans text-5xl font-bold">Título</h1>
        <b className="font-sans font-normal">Subtítulo</b>
      </div>
    </div>
  );
};

export default Stat;
