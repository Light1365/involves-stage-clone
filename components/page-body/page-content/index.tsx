"use client";
import "@fontsource/roboto-slab";
import BrandLogosSection from "./brands-section/brand-logos-section";

export interface LpInterface {
  title?: boolean;
  titleContent?: any;
  subtitle?: boolean;
  subtitleContent?: any;
  bodyText?: boolean;
  bodyTextContent?: any;
  isLinkAvailable?: boolean;
  isButton?: boolean;
  buttonContent?: any;
  hasImage?: boolean;
  imageSource?: any;
  isLogoSection?: boolean;
}

const LpContent = ({
  title,
  titleContent,
  subtitle,
  subtitleContent,
  bodyText = false,
  bodyTextContent,
  isLinkAvailable = false,
  isButton = false,
  buttonContent,
  hasImage = false,
  imageSource = false,
  isLogoSection = false,
}: LpInterface) => {
  return (
    <div style={{ fontFamily: "Roboto Slab" }} className="px-72 flex flex-col">
     
      {isLogoSection && <BrandLogosSection />}
      {isLogoSection && <BrandLogosSection />}
    </div>
  );
};

export default LpContent;
