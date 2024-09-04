const BrandsLogos = () => {
  const imgUrl = "https://bpone.group/img/LogoClientes/ambev.png";

  return (
    <div>
      <img
        src={imgUrl}
        alt="ambev-logo"
        className="object-cover max-w-36 max-h-10"
      ></img>
    </div>
  );
};

export default BrandsLogos;
