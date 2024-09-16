const FooterLogo = () => {
  const imgUrl = "https://bpone.group/img/BpFull/Bp-Full-Logo.webp";

  return (
    <div>
      <div className="flex justify-start items-center mt-1 w-28">
        <img
          src={imgUrl}
          alt="footer-logo"
          className=""
        ></img>
      </div>
    </div>
  );
};

export default FooterLogo;
