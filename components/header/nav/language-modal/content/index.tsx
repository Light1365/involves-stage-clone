"use client";

export interface LanguageModalInterface {
  content1?: any;
  content2?: any;
  content3?: any;
}

const LanguageModalContent = ({
  content1,
  content2,
  content3,
}: LanguageModalInterface) => {
  return (
    <div className="cursor-pointer hover:bg-slate-200 h-12 rounded-md flex flex-row text-black justify-start items-center pl-7">
      {content1}
      {content2}
      {content3}
    </div>
  );
};

export default LanguageModalContent;
