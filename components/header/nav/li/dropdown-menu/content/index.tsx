"use client";

export interface DropdownInterface {
  title?: boolean;
  subtitle?: boolean;
  content?: any;
  subtitleContent?: any;
  title2?: boolean;
  subtitle2?: boolean;
  content2?: any;
  subtitleContent2?: any;
  title3?: boolean;
  subtitle3?: boolean;
  content3?: any;
  subtitleContent3?: any;
  title4?: boolean;
  subtitle4?: boolean;
  content4?: any;
  subtitleContent4?: any;
  redirectLink: any;
}

const HeaderPrimaryDropdownContent = ({
  title,
  subtitle,
  content,
  subtitleContent,
  title2,
  subtitle2,
  content2,
  subtitleContent2,
  title3,
  subtitle3,
  content3,
  subtitleContent3,
  title4,
  subtitle4,
  content4,
  subtitleContent4,
  redirectLink,
}: DropdownInterface) => {
  return (
    <div className="w-2/5 z-50 pl-20 z-50 cursor-default">
      {title && (
        <a
          href={redirectLink}
          className="text-wrap mt-5 justify-start flex flex-column text-white font-bold"
        >
          {content}
        </a>
      )}
      {subtitle && (
        <a
          href={redirectLink}
          className="text-wrap flex flex-column pt-1 text-white opacity-60 text-start pb-10"
        >
          {subtitleContent}
        </a>
      )}
      {title2 && (
        <a
          href={redirectLink}
          className="text-wrap justify-start flex flex-column w-full text-white font-bold"
        >
          {content2}
        </a>
      )}
      {subtitle2 && (
        <a
          href={redirectLink}
          className="text-wrap flex flex-column pt-1 text-white opacity-60 text-start pb-10"
        >
          {subtitleContent2}
        </a>
      )}
      {title3 && (
        <a
          href={redirectLink}
          className="text-wrap mt-5 justify-start flex flex-column w-full text-white font-bold"
        >
          {content3}
        </a>
      )}
      {subtitle3 && (
        <a
          href={redirectLink}
          className="text-wrap flex flex-column pt-1 text-white opacity-60  text-start pb-10"
        >
          {subtitleContent3}
        </a>
      )}
      {title4 && (
        <a
          href={redirectLink}
          className="text-wrap justify-start flex flex-column w-full text-white font-bold"
        >
          {content4}
        </a>
      )}
      {subtitle4 && (
        <a
          href={redirectLink}
          className="text-wrap flex flex-column pt-1 text-white opacity-60 text-start pb-10"
        >
          {subtitleContent4}
        </a>
      )}
    </div>
  );
};

export default HeaderPrimaryDropdownContent;
