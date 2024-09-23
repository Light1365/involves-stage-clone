import Image from "next/image";
import Header from "@/components/header";
import LpBody from "@/components/page-body/index";
import FooterNav from "@/components/footer/nav";
import ChatIcon from "@/components/page-body/chat-icon";
import FormNav from "@/components/footer/form";
import ShortFooterNav from "@/components/footer/short-footer/nav";
import HomeComponent from "@/components/home";

export default function Home() {
  return (
    <main className="bg-slate-100 flex flex-col justify-between min-h-screen items-center max-w-screen ">
      <Header />
      <HomeComponent />
      <FooterNav />
    </main>
  );
}
