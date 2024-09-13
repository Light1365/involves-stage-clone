import ShortLanguageModalContent, {
  ShortLanguageModalInterface,
} from "./content";

const ShortLanguageModal = () => {
  const shortLanguageModalContent: ShortLanguageModalInterface[] = [
    {
      language: "Português (BR)",
    },
    {
      language: "English",
    },
    {
      language: "Español",
    },
  ];
  return (
    <div className="min-[1020px]:hidden bg-blue-500 cursor-default">
      {shortLanguageModalContent.map((item, index) => {
        return <ShortLanguageModalContent {...item} key={index} />;
      })}
    </div>
  );
};
export default ShortLanguageModal;
