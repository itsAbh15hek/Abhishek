import React from "react";
import { darkTheme, lightTheme } from "../components/Themes";
import ParticlesBg from "particles-bg";

const ParticleComponent = ({ theme, page }) => {
  let width = window.innerWidth;
  return (
    <ParticlesBg
      color={theme === "dark" ? darkTheme.text : lightTheme.text}
      num={width / 25}
      type="cobweb"
      bg={{
        position: "absolute",
        zIndex: 0,
      }}
    />
  );
};
export default ParticleComponent;
