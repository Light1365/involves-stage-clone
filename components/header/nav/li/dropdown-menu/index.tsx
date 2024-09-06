import HeaderPrimaryDropdownContent, { DropdownInterface } from "./content";

const HeaderPrimaryDropdown = () => {
  const headerPrimaryDropdownContent: DropdownInterface[] = [
    {
      content1: "Como funciona o Involves Stage",
      subcontent1:
        "Veja como otimizar o trabalho das equipes de campo e back office",
      content2: "TESTE5",
      subcontent2: "AGORA FOI",
      redirectLink: "contact",
    },
    {
      content1: "TESTE2",
      subcontent1:
        "rumo à vitória, de encontro com a glória, vivendo o agora, isso já é história",
      content2: "TESTE6",
      subcontent2:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      redirectLink: "",
    },
  ];
  return (
    <div className=" max-[1020px]:hidden w-full bg-blue-500 h-96 absolute left-0 top-24 shadow-xl flex flex-column columns-2 cursor-default">
      {headerPrimaryDropdownContent.map((item, index) => {
        return <HeaderPrimaryDropdownContent {...item} />;
      })}
    </div>

    // <div className="w-full bg-blue-400 h-80 block max-[1020px]:hidden absolute top-24">
    //   <a className="text-white flex flex-column font-bold pt-10 ml-28">TESTE</a>
    //   <a className="text-white opacity-70 ml-28 mt-2">TESTE2</a>

    //   <div>
    //   <a className="text-white flex flex-column font-bold pt-10 ml-28">TESTE3</a>
    //   <a className="text-white opacity-70 ml-28 mt-2">TESTE4</a>
    //   </div>
    // </div>
  );
};
export default HeaderPrimaryDropdown;
