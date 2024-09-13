import ShortHeaderPrimaryDropdownContent, {
  ShortDropdownInterface,
} from "./content";

const ShortHeaderPrimaryDropdown = () => {
  const shortHeaderPrimaryDropdownContent: ShortDropdownInterface[] = [
    {
      title: true,
      content:
        "Veja como NÃO otimizar o trabalho das equipes de campo e back office",
      subtitle: true,
      subtitleContent: "TESTE 1",
      redirectLink: "",
    },
    {
      title2: true,
      content2:
        "Veja como otimizar o trabalho das equipes de campo e back office",
      subtitle2: true,
      subtitleContent2: "TESTE 2",
      redirectLink: "",
    },
    {
      title3: true,
      content3: "aaaaaaaaaaaaaaaAAAAAAAAA",
      subtitle3: true,
      subtitleContent3: "TESTE 3",
      redirectLink: "",
    },
  ];
  return (
    <div className="min-[1020px]:hidden bg-blue-500 cursor-default">
      {shortHeaderPrimaryDropdownContent.map((item, index) => {
        return <ShortHeaderPrimaryDropdownContent {...item} key={index} />;
      })}
    </div>
  );
};
export default ShortHeaderPrimaryDropdown;
