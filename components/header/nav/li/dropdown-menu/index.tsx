import HeaderPrimaryDropdownContent, { DropdownInterface } from "./content";

const HeaderPrimaryDropdown = () => {
  const headerPrimaryDropdownContent: DropdownInterface[] = [
    {
      title: true,
      content:
        "Veja como otimizar o trabalho das equipes de campo e back office",
      subtitle: true,
      subtitleContent: "testeaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa",
      redirectLink: "contact",
    },
    {
      title: true,
      content:
        "rumo à vitória, de encontro com a glória, vivendo o agora, isso já é história",
      subtitle: true,
      subtitleContent:
        "rumo à vitória, de encontro com a glória, vivendo o agora, isso já é história",
      redirectLink: "",
    },
  ];
  return (
    <div className="max-[1020px]:hidden w-full bg-blue-500 h-96 absolute left-0 top-24 shadow-xl flex flex-column columns-2 cursor-default pr-20">
      {headerPrimaryDropdownContent.map((item, index) => {
        return <HeaderPrimaryDropdownContent {...item} key={index} />;
      })}
    </div>
  );
};
export default HeaderPrimaryDropdown;
