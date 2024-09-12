import LanguageModalContent, { LanguageModalInterface } from "./content";

const LanguageModal = () => {
  const languageModalContent: LanguageModalInterface[] = [
    {
      content1: "Português",
    },
    {
      content2: "Inglês",
    },
    {
      content3: "Espanhol",
    },
  ];
  return (
    <div className="bg-white h-42 max-[1020px]:hidden w-36 absolute right-52 top-24 shadow-xl cursor-default shadow-md border border-slate-300 rounded-lg">
      {languageModalContent.map((item, index) => {
        return <LanguageModalContent {...item} key={index} />;
      })}
    </div>
  );
};
export default LanguageModal;
