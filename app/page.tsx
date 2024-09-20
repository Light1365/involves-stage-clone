import Image from "next/image";
import Header from "@/components/header";
import LpBody from "@/components/page-body/lp-body";
import FooterNav from "@/components/footer/nav";
import ChatIcon from "@/components/page-body/chat-icon";
import FormNav from "@/components/footer/form";
import ShortFooterNav from "@/components/footer/short-footer/nav";

export default function Home() {
  return (
    <main className="bg-white flex flex-col justify-between min-h-screen items-center max-w-screen ">
      <Header></Header>
      <LpBody></LpBody>
      <ChatIcon />
      {/* <BrandLogosSection></BrandLogosSection> */}
      <FooterNav />
    </main>
  );
}
