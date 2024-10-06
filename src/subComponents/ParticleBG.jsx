import React from "react";
import { darkTheme, lightTheme } from "../components/Themes";
import ParticlesBg from "particles-bg";

const ParticleBG = ({ theme, page }) => {
  let width = window.innerWidth;
  return (
    <ParticlesBg
      color={theme === "dark" ? darkTheme.text : lightTheme.text}
      num={width / 12}
      type="cobweb"
      bg={{
        position: "absolute",
        zIndex: 0,
      }}
    />
  );
};
export default ParticleBG;
