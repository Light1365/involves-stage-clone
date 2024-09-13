import HeaderPrimaryDropdownContent, { DropdownInterface } from "./content";

const HeaderPrimaryDropdown = () => {
  const headerPrimaryDropdownContent: DropdownInterface[] = [
    {
      title: true,
      content: "Título 1",
      subtitle: true,
      subtitleContent:
        "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in mattis risus. Fusce pulvinar a risus sit amet semper. Nullam tincidunt vel nisi at sodales. Ut ut turpis a dolor ultrices fringilla et quis orci. Integer pellentesque, augue vel efficitur.",
      redirectLink: "contact",
      title2: true,
      content2: "Título 2",
      subtitle2: true,
      subtitleContent2:
        "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in mattis risus. Fusce pulvinar a risus sit amet semper. Nullam tincidunt vel nisi at sodales. Ut ut turpis a dolor ultrices fringilla et quis orci. Integer pellentesque, augue vel efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in mattis risus. Fusce pulvinar a risus sit amet semper. Nullam tincidunt vel nisi at sodales. Ut ut turpis a dolor ultrices fringilla et quis orci. Integer pellentesque, augue vel efficitur.",
    },
    {
      title3: true,
      content3: "Título 3",
      subtitle3: true,
      subtitleContent3:
        "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in mattis risus. Fusce pulvinar a risus sit amet semper. Nullam tincidunt vel nisi at sodales. Ut ut turpis a dolor ultrices fringilla et quis orci. Integer pellentesque, augue vel efficitur.",
      redirectLink: "contact",
      title4: true,
      content4: "Título 4",
      subtitle4: true,
      subtitleContent4:
        "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in mattis risus. Fusce pulvinar a risus sit amet semper. Nullam tincidunt vel nisi at sodales. Ut ut turpis a dolor ultrices fringilla et quis orci. Integer pellentesque, augue vel efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in mattis risus. Fusce pulvinar a risus sit amet semper. Nullam tincidunt vel nisi at sodales. Ut ut turpis a dolor ultrices fringilla et quis orci. Integer pellentesque, augue vel efficitur.",
    },
  ];
  return (
    <div className="max-[1020px]:hidden w-full bg-blue-500 h-96 absolute left-0 top-24 shadow-xl flex flex-column columns-2 cursor-default pr-20 z-50">
      {headerPrimaryDropdownContent.map((item, index) => {
        return <HeaderPrimaryDropdownContent {...item} key={index} />;
      })}
    </div>
  );
};
export default HeaderPrimaryDropdown;
