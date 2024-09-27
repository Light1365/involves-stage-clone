import ServicesDashboardProps, { ServicesDashboardInterface } from "../props";
import dashboardImage from "@/public/images/dashboard.png";

const ServicesDashboardComponent = () => {
  const navItems: ServicesDashboardInterface[] = [
    {
      bodyImage: true,
      imgSrc: "/images/dashboard.png",
      titleText: "Gestão estratégica em trade marketing com foco em sell-out",
      bodyText:
        "Além de uma ferramenta inovadora de tecnologia, a BP Full é uma solução completa. Garanta respostas a partir de uma metodologia exclusiva baseada em três pilares: produtividade, execução e inteligência.",
      isButton: true,
      buttonText: "Quero um diagnóstico",
    },
    {
      bodyImage: true,
      imgSrc: "/images/dashboard.png",
      titleText: "Mais de 40 indicadores sobre as principais oportunidades",
      bodyText:
        "Aumento de sell-out em até 20% nas lojas que recebem promotores e redução de 80% o tempo de coleta no ponto de venda com o Reconhecimento por Imagem.",
      hasList: true,
      listText1: "20% do cumprimento de tarefas",
      listText2: "30% no número de visitas",
      listText3: "40% na otimização de roteiro",
      isButton: true,
      buttonText: "Quero um diagnóstico",
    },
    {
      bodyImage: true,
      imgSrc: "/images/dashboard.png",
      titleText: "Análise com Inteligência de dados",
      bodyText:
        "Você acompanha em tempo real os objetivos de cada segmento por canal e sortimento, em detalhes e com precisão. Tenha acesso rápido à sua estratégia desdobrada para cada canal de vendas, região de atuação, e perfil de loja, entre outras segmentações.",
      isButton: true,
      buttonText: "Quero um diagnóstico",
    },
    {
      bodyImage: true,
      imgSrc: "/images/dashboard.png",
      titleText: "Roteirização Inteligente",
      bodyText:
        "A garantia do nível de atendimento e execução dos seus pontos de venda com roteiros mais eficientes para as equipes de campo. Aumente a produtividade do time e tenha dados concretos para uma operação mais estratégica e com custos reduzidos.",
      isButton: true,
      buttonText: "Quero um diagnóstico",
    },
  ];

  return (
    <ul className="flex flex-col gap-6 max-[1024px]:gap-0 items-center">
      {navItems.map((item, index) => {
        return <ServicesDashboardProps {...item} key={index} />;
      })}
    </ul>
  );
};

export default ServicesDashboardComponent;

//NTH-Child
