import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { ReactComponent as Frontend } from "../assets/svg/coding-svgrepo-com.svg";
import { ReactComponent as Backend } from "../assets/svg/node-tree-svgrepo-com.svg";
import BigTitle from "../subComponents/BigTitle";
import LogoComponent from "../subComponents/LogoComponent";
import ParticleComponent from "../subComponents/ParticleComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";

const Box = styled(motion.div)`
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
const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
  @media (max-width: 768px) {
    width: 50vw;
    height: 40vh;
  }
  @media (max-width: 425px) {
    width: 55vw;
    height: 40vh;
  }

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.8rem + 1vw);
  margin: 0 0 30px;
  .skillIcon {
    width: 40px;
    height: 40px;
  }
  h2 {
    margin-left: 20px;
  }
`;
const Description = styled.div`
  font-size: calc(0.5rem + 0.8vw);
  text-align: justify;
  margin: 10px 0;
  width: 100%;

  strong {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  p {
    margin-left: 2rem;
  }
`;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, transform: "scale(0)" },
  visible: { opacity: 1, transform: "scale(1)", transition: { duration: 0.5 } },
};

const MySkills = ({ setThemeDark, theme }) => {
  return (
    <Box variants={container} hidden="hidden" animate="visible">
      <LogoComponent theme={theme} setThemeDark={setThemeDark} />
      <PowerButton />
      <ParticleComponent theme={theme} page={"skills"} />
      <Main variants={item}>
        <Title>
          <Frontend className="skillIcon" />
          <h2>Web Dev</h2>
        </Title>
        <Description>
          Build pixel-perfect websites, develop robust servers, manage REST
          APIs, and efficiently handle databases.
        </Description>
        <Description>
          <strong>Skills</strong>
          <p>ReactJS, Redux, NodeJS, Express, MongoDB, Mongoose, JWT</p>
          <br />
          <strong>Tools</strong>
          <p>Git, Github, Dev Tools, Postman, Heroku</p>
        </Description>
      </Main>
      <Main variants={item}>
        <Title>
          <Backend className="skillIcon" />
          <h2>DSA</h2>
        </Title>
        <Description>
          Proficient in solving complex problems with a strong foundation in
          data structures and algorithms.
        </Description>
        <Description>
          <strong>Links</strong>
          <p>
            <strong>Leetcode (1600+): </strong> 400+ problems
          </p>
          <p>
            <strong>GFG (1700+): </strong> 200+ problems
          </p>
        </Description>
      </Main>
      <SocialIcons />
      <BigTitle top="1%" left="20%" text="SKILLS" />
    </Box>
  );
};

export default MySkills;
