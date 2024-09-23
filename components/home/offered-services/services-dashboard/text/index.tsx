import DiagButton from "./diag-button";

const ServicesDashboardText = () => {
  return (
    <div className="max-[1024px]:px-10">
      <div className="w-full min-h-fit flex flex-row mt-10">
        <div className="flex flex-col gap-6 pr-20">
          <h1 className="text-black font-sans text-5xl font-bold max-[1024px]:text-xl">
            Gestão estratégica em trade marketing com foco em sell-out
          </h1>
          <b className="text-gray-500 font-normal text-pretty text-xl font-sans max-[1024px]:text-base">
            Além de uma ferramenta inovadora de tecnologia, a BP Full é uma
            solução completa. Garanta respostas a partir de uma metodologia
            exclusiva baseada em três pilares: produtividade, execução e
            inteligência.
          </b>
          <DiagButton isButton={true} text={"Quero um diagnóstico"} />
        </div>
      </div>
    </div>
  );
};

export default ServicesDashboardText;
