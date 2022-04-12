import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import KunaiImg from "../assets/svg/Kunai_yondaime.svg";
import BigTitle from "../subComponents/BigTitle";
import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponent from "../subComponents/ParticleComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 150px;
  }
`;
const float = keyframes`
0% { transform: translateY(-10px) }       
50% { transform: translateY(55px) translateX(-10px) }
100% { transform: translateY(-10px) }

`;

const Kunai = styled.div`
  position: absolute;
  top: 40%;
  right: -5%;
  width: 45rem;
  animation: ${float} 4s infinite ease;
  @media (max-width: 900px) {
    top: 20%;
    right: -25%;
  }
  @media (max-width: 500px) {
    width: 25rem;
    top: 20%;
    right: -35%;
  }
  img {
    width: 100%;
    height: auto;
    transform: rotate(-55deg) rotate3d(2, 5, 0, 45deg);
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 15%;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  @media (max-width: 425px) {
    left: calc(1.2rem + 5vw);
  }
`;

const About = ({ setThemeDark, theme }) => {
  return (
    <Box>
      <LogoComponent theme={theme} setThemeDark={setThemeDark} />
      <PowerButton />
      <ParticleComponent theme={theme} page={"about"} />
      <Kunai>
        <img src={KunaiImg} alt="" />
      </Kunai>
      <Main>
        <p>
          Hi, I am Abhishek Singh. I'm a Full Stack Developer and a BCA(final
          year) student at Lucknow University.
        </p>
        <p>
          I’ve always been someone who has both a creative and a logical side.
          When I discovered web design in college, I realized it would be the
          perfect fit. I started with Front End Development in 2020, learnt a
          lot of things during the lockdown and in 2021, I picked up backend
          technologies to become a Full Stack Developer.
        </p>
        <p>
          I like trying new things and building great projects that last an
          impression. You can connect with me via email or social links.
        </p>
      </Main>
      <BigTitle top="75%" left="55%" text="ABOUT" />
      <SocialIcons />
    </Box>
  );
};

export default About;
