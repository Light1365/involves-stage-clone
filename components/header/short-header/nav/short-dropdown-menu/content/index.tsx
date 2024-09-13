"use client";

export interface ShortDropdownInterface {
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
  redirectLink: any;
}

const ShortHeaderPrimaryDropdownContent = ({
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
  redirectLink,
}: ShortDropdownInterface) => {
  return (
    <div className="flex flex-col z-50 cursor-default">
      {title && (
        <a
          href={redirectLink}
          className="text-wrap mt-6 justify-start w-full text-start text-white font-bold text-wrap"
        >
          {content}
        </a>
      )}

      {subtitle && (
        <a
          href={redirectLink}
          className="text-wrap flex flex-column text-stone-300 text-start"
        >
          {subtitleContent}
        </a>
      )}
      {title2 && (
        <a
          href={redirectLink}
          className="text-wrap mt-6 justify-start w-full text-start text-white font-bold text-wrap"
        >
          {content2}
        </a>
      )}

      {subtitle2 && (
        <a
          href={redirectLink}
          className="text-wrap flex flex-column pt-1 text-stone-300 text-start"
        >
          {subtitleContent2}
        </a>
      )}
      {title3 && (
        <a
          href={redirectLink}
          className="text-wrap mt-6 justify-start w-full text-start text-white font-bold text-wrap"
        >
          {content3}
        </a>
      )}

      {subtitle3 && (
        <a
          href={redirectLink}
          className="text-wrap flex flex-column pt-1 text-stone-300 text-start"
        >
          {subtitleContent3}
        </a>
      )}
    </div>
  );
};

export default ShortHeaderPrimaryDropdownContent;
