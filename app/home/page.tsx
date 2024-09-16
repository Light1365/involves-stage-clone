import Image from "next/image";
import Header from "@/components/header";
import LpBody from "@/components/page-body/lp-body";
import BrandLogosSection from "@/components/page-body/brand-logos-section";
import HeaderPrimaryDropdown from "@/components/header/nav/li/dropdown-menu";
import LanguageModal from "@/components/header/nav/language-modal";
import ShortHeaderNav from "@/components/header/short-header/nav";
import ShortLanguageModal from "@/components/header/short-header/nav/short-language-modal";
import FooterNav from "@/components/footer/nav";

export default function Home() {
  return (
    <main className=" text-black bg-white flex flex-col justify-between min-h-screen items-center max-w-screen h-full">
      <Header></Header>
      <LpBody></LpBody>
      {/* <BrandLogosSection></BrandLogosSection> */}
      <FooterNav />
    </main>
  );
}
