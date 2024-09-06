"use client";

export interface DropdownInterface {
  content1?: any;
  content2?: any;
  subcontent1?: any;
  subcontent2?: any;
  redirectLink: any;
}

const HeaderPrimaryDropdownContent = ({
  content1,
  content2,
  subcontent1,
  subcontent2,
  redirectLink,
}: DropdownInterface) => {
  return (
    <div className="pl-28 z-50 cursor-default">
      <a
        href={redirectLink}
        className="mt-10 bg-purple-500 justify-start flex flex-column w-64 text-white font-bold"
      >
        {content1}
      </a>
      <a
        href={redirectLink}
        className="flex flex-column pt-1 text-stone-300 bg-green-500 text-start pb-10"
      >
        {subcontent1}
      </a>
      <a
        href={redirectLink}
        className="mt-10 bg-red-500 justify-start flex flex-column text-white font-bold"
      >
        {content2}
      </a>
      <a
        href={redirectLink}
        className="flex flex pt-1 text-stone-300 bg-black text-start"
      >
        {subcontent2}
      </a>
    </div>
  );
};

export default HeaderPrimaryDropdownContent;
