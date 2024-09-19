"use client";

export interface ShortLanguageModalInterface {
  language: any;
}

const ShortLanguageModalContent = ({
  language,
}: ShortLanguageModalInterface) => {
  return (
    <div className="w-ful h-full flex flex-row gap-6 z-50 cursor-default">
      <button className="pt-3">{language}</button>
    </div>
  );
};

export default ShortLanguageModalContent;
