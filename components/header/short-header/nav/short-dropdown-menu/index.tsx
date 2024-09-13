import ShortHeaderPrimaryDropdownContent, {
  ShortDropdownInterface,
} from "./content";

const ShortHeaderPrimaryDropdown = () => {
  const shortHeaderPrimaryDropdownContent: ShortDropdownInterface[] = [
    {
      title: true,
      content: "Título 1",
      subtitle: true,
      subtitleContent:
        "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in mattis risus. Fusce pulvinar a risus sit amet semper. Nullam tincidunt vel nisi at sodales. Ut ut turpis a dolor ultrices fringilla et quis orci. Integer pellentesque, augue vel efficitur.",
      redirectLink: "",
    },
    {
      title2: true,
      content2: "Título 2",
      subtitle2: true,
      subtitleContent2:
        "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in mattis risus. Fusce pulvinar a risus sit amet semper. Nullam tincidunt vel nisi at sodales. Ut ut turpis a dolor ultrices fringilla et quis orci. Integer pellentesque, augue vel efficitur.",
      redirectLink: "",
    },
    {
      title3: true,
      content3: "Título 3",
      subtitle3: true,
      subtitleContent3:
        "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in mattis risus. Fusce pulvinar a risus sit amet semper. Nullam tincidunt vel nisi at sodales. Ut ut turpis a dolor ultrices fringilla et quis orci. Integer pellentesque, augue vel efficitur.",
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
