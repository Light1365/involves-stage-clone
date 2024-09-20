import LanguageModalContent, { LanguageModalInterface } from "./content";

const LanguageModal = () => {
  const languageModalContent: LanguageModalInterface[] = [
    {
      content1: "Português (BR)",
    },
    {
      content2: "English",
    },
    {
      content3: "Español",
    },
  ];
  return (
    <div className="bg-white h-42 max-[1020px]:hidden w-40 absolute right-52 top-24 shadow-xl cursor-default shadow-md shadow-blue-500/50 border border-slate-300 rounded-lg">
      {languageModalContent.map((item, index) => {
        return <LanguageModalContent {...item} key={index} />;
      })}
    </div>
  );
};
export default LanguageModal;
