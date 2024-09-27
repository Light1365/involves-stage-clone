import ClientsCarousel from "./carousel";
import ClientsLogos from "./diagnostic/clients-logos";
import InfoComponent from "./diagnostic/info";
import PresentationVideo from "./general-stats/presentation-video";
import StatsNumbers from "./general-stats/stats";
import InfoCard from "./info";
import OfferedServices from "./offered-services";

const HomeComponent = () => {
  return (
    <div className="bg-slate-100 w-full">
      <InfoComponent />
      <ClientsLogos />
      <StatsNumbers />
      <OfferedServices />
      <InfoCard />
      <ClientsCarousel />
    </div>
  );
};

export default HomeComponent;
