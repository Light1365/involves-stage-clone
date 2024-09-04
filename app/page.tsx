import Image from "next/image";
import Header from "@/components/header/header";
import LpBody from "@/components/page-body/lp-body";
import BrandLogosSection from "@/components/page-body/brand-logos-section";

export default function Home() {
  return (
    <div>
      <main className=" text-black bg-white flex min-h-screen flex-col items-center justify-between p-24 w-full h-full">
        <Header></Header>
        <LpBody></LpBody>
        <div>
          <BrandLogosSection></BrandLogosSection>
        </div>
      </main>
    </div>
  );
}
