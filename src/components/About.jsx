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
  font-size: 1.4rem;
  backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 15%;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  text-align: justify;
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
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
          Hello, I'm Abhishek Singh, a Full Stack Web Developer and an MCA
          student at NIT Allahabad.
        </p>
        <p>
          I’ve always been someone who has both a creative and a logical side.
          When I stumbled upon web development during my second year of BCA at
          Lucknow University, I realised that it was the perfect fit for me. I
          initially dived into Front End Development, and as my journey
          continued, I delved into backend technologies during my final year,
          ultimately becoming a Full Stack Developer.
        </p>
        <p>
          I thrive on exploring new horizons and creating impactful projects
          that leave a lasting impression. Feel free to connect with me through
          email or my social links.
        </p>
      </Main>
      <BigTitle top="75%" left="55%" text="ABOUT" />
      <SocialIcons />
    </Box>
  );
};

export default About;
