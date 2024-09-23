import ClientsLogos from "./diagnostic/clients-logos";
import InfoComponent from "./diagnostic/info";

const HomeComponent = () => {
  return (
    <div className="bg-slate-100">
      <InfoComponent />
      <ClientsLogos />
    </div>
  );
};

export default HomeComponent;
