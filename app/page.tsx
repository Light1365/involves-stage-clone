import Header from "@/components/header";
import FooterNav from "@/components/footer/nav";
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
