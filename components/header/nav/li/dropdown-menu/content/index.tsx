"use client";

export interface DropdownInterface {
  title?: boolean;
  subtitle?: boolean;
  content?: any;
  subtitleContent?: any;
  redirectLink: any;
}

const HeaderPrimaryDropdownContent = ({
  title,
  subtitle,
  content,
  subtitleContent,
  redirectLink,
}: DropdownInterface) => {
  return (
    <div className="pl-28 z-50 cursor-default">
      {title && (
        <a
          href={redirectLink}
          className="text-wrap mt-10 bg-purple-500 justify-start flex flex-column w-full text-white font-bold"
        >
          {content}
        </a>
      )}

      {subtitle && (
        <a
          href={redirectLink}
          className="text-wrap flex flex-column pt-1 text-stone-300 bg-green-500 text-start pb-10"
        >
          {subtitleContent}
        </a>
      )}
      {title && (
        <a
          href={redirectLink}
          className="text-wrap mt-10 bg-red-500 justify-start flex flex-column w-full text-white font-bold"
        >
          {content}
        </a>
      )}

      {subtitle && (
        <a
          href={redirectLink}
          className="text-wrap flex flex-column pt-1 text-stone-300 bg-gray-500 text-start pb-10"
        >
          {subtitleContent}
        </a>
      )}
    </div>
  );
};

export default HeaderPrimaryDropdownContent;
