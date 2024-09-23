import ClientsLogos from "./diagnostic/clients-logos";
import InfoComponent from "./diagnostic/info";

const HomeComponent = () => {
  return (
    <div className="">
      <InfoComponent />
      <ClientsLogos />
    </div>
  );
};

export default HomeComponent;
