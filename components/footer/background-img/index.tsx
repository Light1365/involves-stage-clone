import React from "react";
import darkBackground from "../../../public/images/dark-background.png";
import FormNav from "../form";

const DarkModeBackground = () => {
  const imgUrl = { darkBackground };
  return (
    <img src={darkBackground.src} alt="dark-background">
    </img>
  );
};

export default DarkModeBackground;
