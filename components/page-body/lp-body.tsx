import LpDashboard from "./lp-dashboard-image";
import BrandsLogos from "./brand-logos";

const LpBody = () => {
  return (
    <div className="max-w-screen">
      <div className="w-full pt-5 pl-20">
        <h1 className="flex flex-row justify-center text-5xl font-bold">
          A solução completa <br /> para execução,
          <br /> gestão e inteligência
          <br /> em trade marketing
        </h1>
        <div className="bg-emerald-500 ml-28 mt-8 mr-28 h-48">
          <h2 className="mb-8">
            Tudo que você precisa para dar um show de sellout em um único lugar.
            Tecnologia e inteligência para gestão de pontos de venda e gestão
            estratégica. Acompanhe sua equipe e indicadores com precisão,
            aumente a produtividade e reduza custos com o Involves Stage.
          </h2>
          <b className="bg-yellow-400 ">
            Gere resultado e mais sell-out no fim do dia e não apenas
            <br /> no fim do mês.
          </b>
        </div>
        <div>
          {" "}
          <button className="lp-diag-button">Solicitar diagnóstico</button>
        </div>
      </div>
      <div className="bg-yellow-500 w-full">
        <LpDashboard />
      </div>
    </div>
  );
};

export default LpBody;
