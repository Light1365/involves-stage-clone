const InfoText = () => {
  return (
    <div className="flex flex-col max-[610px]:px-10 max-[450px]:px-10">
      <h1 className="text-black font-extrabold text-start text-3xl max-[1280px]:text-4xl max-[610px]:text-2xl">
        A solução completa para execução, gestão e inteligência em trade
        marketing
      </h1>
      <h2 className="font-normal text-lg text-justify mt-10 text-gray-500 max-[450px]:text-md max-[450px]:mt-5">
        1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
        mattis risus. Fusce pulvinar a risus sit amet semper. Nullam tincidunt
        vel nisi at sodales. Ut ut turpis a dolor ultrices fringilla et quis
        orci. Integer pellentesque, augue vel efficitur
      </h2>
      <b className="mt-10 font-semibold text-pretty text-black max-[450px]:mt-5 max-[720px]:mt-4">
        Gere resultado e mais sell-out no fim do dia e não apenas no fim do mês.
      </b>

      <button className="mt-10 h-12 font-sans rounded-full bg-blue-500 pl-10 pr-10 w-fit flex flex-row items-center justify-center text-white font-bold text-base mb-10 hover:bg-blue-900 hover:ease-in-out duration-300 focus:outline-none focus:ring focus:ring-blue-300 max-[720px]:mt-5 max-[1024px]:pl-5 max-[1024px]:pr-5">
        Solicitar diagnóstico
      </button>
    </div>
  );
};

export default InfoText;
