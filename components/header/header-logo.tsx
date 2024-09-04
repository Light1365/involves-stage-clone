const HeaderLogo = () => {
  const imgUrl = "https://bpone.group/img/BpFull/Bp-Full-Logo.webp";

  return (
    <div className="flex flex-row justify-start items-center bg-green-500 ml-24">
      <img
        src={imgUrl}
        alt="header-logo"
        className="object-cover max-w-36 max-h-10"
      ></img>
    </div>
  );
};

export default HeaderLogo;
