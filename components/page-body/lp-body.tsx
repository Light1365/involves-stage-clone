import LpDashboard from "./lp-dashboard-image";
import BrandsLogos from "./brand-logos";

const LpBody = () => {
  return (
    <div className="max-w-screen">
      <h1 className="flex flex-row justify-start text-5xl font-bold ml-48 mr-48">
        A solução completa para execução, gestão e inteligência em trade
        marketing
      </h1>
      <div className="text-balance text-black ml-48 mt-4 mr-48 h-48">
        <h2 className="mb-8">
          Tudo que você precisa para dar um show de sellout em um único lugar.
          Tecnologia e inteligência para gestão de pontos de venda e gestão
          estratégica. Acompanhe sua equipe e indicadores com precisão, aumente
          a produtividade e reduza custos com o Involves Stage.
        </h2>
        <a className="text-white font-bold bg-blue-400 w-full rounded-md p-1">
          Gere resultado e mais sell-out no fim do dia e não apenas no fim do
          mês.
        </a>
      </div>
      <div>
        {" "}
        <button className="lp-diag-button">Solicitar diagnóstico</button>
      </div>
      <div className="bg-yellow-500 w-full">
        <LpDashboard />
      </div>
    </div>
  );
};

export default LpBody;
