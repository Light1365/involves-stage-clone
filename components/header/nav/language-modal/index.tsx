import LanguageModalContent, { LanguageModalInterface } from "./content";

const LanguageModal = () => {
  const languageModalContent: LanguageModalInterface[] = [
    {
      content1: "Português",
    },
    {
      content1: "Inglês",
    },
  ];
  return (
    <div className="max-[1020px]:hidden w-36 h-40 absolute left-0 top-24 shadow-xl cursor-default">
      {languageModalContent.map((item, index) => {
        return <LanguageModalContent {...item} key={index} />;
      })}
    </div>
  );
};
export default LanguageModal;
