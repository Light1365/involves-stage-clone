import { FaArrowRightLong } from "react-icons/fa6";

export interface DiagButtonInterface {
  //define os tipos de valores aceitos por cada prop
  isButton: boolean;
  text: any;
}

const DiagButton = ({
  //define os valores iniciais de cada prop
  isButton = true,
  text,
}: DiagButtonInterface) => {
  return (
    <div className="">
      {isButton && [
        <a
          href=""
          className="text-blue-500 font-bold text-xl font-sans flex flex-row items-center gap-2"
        >
          {text}
          <FaArrowRightLong size={17} style={{marginTop: 4}}/>
        </a>,
      ]}
    </div>
  );
};

export default DiagButton;
