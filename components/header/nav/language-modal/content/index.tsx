"use client";

export interface LanguageModalInterface {
  content1?: any;
}

const LanguageModalContent = ({ content1 }: LanguageModalInterface) => {
  return (
    <div className="opacity-100 cursor-pointer bg-gray-500 flex flex-column text-white justify-center items-center">
      {content1}
    </div>
  );
};

export default LanguageModalContent;