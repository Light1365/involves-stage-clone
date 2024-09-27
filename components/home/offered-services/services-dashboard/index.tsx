import Image from "next/image";
import ServicesDashboardComponent from "./dashboard/component";

const ServicesDashboard = () => {
  return (
    <div className="w-full min-h-fit flex flex-col max-[1024px]:flex-col gap-0 max-[1200px]:gap-0 max-[1300px]:gap-14 max-[1050px]:gap-0">
      <h1 className="transition ease-in-out text-black font-sans text-5xl justify-center items-center font-bold px-40 mx-64 max-[1480px]:px-96 max-[1480px]:mx-0 max-[1420px]:px-[350px] max-[1380px]:px-[320px] max-[1290px]:px-[300px] max-[1248px]:px-[290px] max-[1229px]:px-[250px] max-[1148px]:px-[200px] max-[1048px]:px-[150px] max-[1024px]:px-[0px] max-[1024px]:text-3xl text-center">
        Solução completa para cada PDV da sua operação
      </h1>
      <ServicesDashboardComponent />
    </div>
  );
};

export default ServicesDashboard;
