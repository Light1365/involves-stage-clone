import Header from "@/components/header";
import ChatIcon from "@/components/page-body/chat-icon";
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
