import Image from "next/image";
import Header from "@/components/header";
import LpBody from "@/components/page-body/lp-body";
import BrandLogosSection from "@/components/page-body/brand-logos-section";
import HeaderPrimaryDropdown from "@/components/header/nav/li/dropdown-menu";
import ChatIcon from "@/components/page-body/chat-icon";
import FooterNavLi from "@/components/footer/nav/li";
import FooterNav from "@/components/footer/nav";

export default function Home() {
  return (
    <main className=" text-black bg-white flex min-h-screen flex-col items-center justify-between w-full h-full">
      <Header></Header>
      {/* <HeaderPrimaryDropdown /> */}
      {/* <LpBody></LpBody> */}
      <ChatIcon />
      {/* <BrandLogosSection></BrandLogosSection> */}
      <FooterNav />
    </main>
  );
}
