import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
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
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (max-width: 768px) {
  }
`;
const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: rgba(255, 255, 255, 0.1);
  width: 30vw;
  height: fit-content;
  padding: 3rem;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;

  z-index: 3;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 50vw;
  }
  @media (max-width: 425px) {
    width: 55vw;
  }
`;

const Square = styled.div`
  position: absolute;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  animation: animate 10s linear infinite;
  animation-delay: ${(props) => `calc(-1s * ${props.del})`};

  @keyframes animate {
    0%,
    100% {
      transform: translateY(-40px);
    }
    50% {
      transform: translateY(48px);
    }
  }
  &:nth-child(1) {
    top: -50px;
    right: -60px;
    width: 100px;
    height: 100px;
  }
  &:nth-child(2) {
    top: 150px;
    left: -100px;
    width: 120px;
    height: 120px;
  }
  &:nth-child(3) {
    bottom: 50px;
    right: -60px;
    width: 80px;
    height: 80px;
  }
  &:nth-child(4) {
    bottom: -80px;
    left: 100px;
    width: 50px;
    height: 50px;
  }
  &:nth-child(5) {
    top: -80px;
    left: 140px;
    width: 60px;
    height: 60px;
  }
`;

const Form = styled.form`
  position: relative;
  p {
    margin-bottom: 30px;
  }
`;
const Title = styled.h2`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 80px;
    height: 4px;
    background: ${(props) => props.theme.text};
  }
`;
const InputBox = styled.div`
  position: relative;
  margin-top: 20px;
  width: 100%;
  display: flex;
  input,
  textarea {
    background: ${(props) => `rgba(${props.theme.textRgba}, 0.2)`};
    width: 100%;
    margin: auto;
    border: none;
    outline: none;
    padding: 10px 20px;
    border-radius: 35px;
    color: ${(props) => props.theme.text};
    box-shadow: 0 2px 2px ${(props) => `rgba(${props.theme.textRgba}, 0.2)`};
  }
  input[type="submit"] {
    background-color: transparent;
    border: 2px solid ${(props) => `rgba(${props.theme.textRgba}, 0.8)`};
  }
`;

const Contact = ({ setThemeDark, theme }) => {
  return (
    <Box>
      <LogoComponent theme={theme} setThemeDark={setThemeDark} />
      <PowerButton />
      <ParticleComponent theme={theme} page={"about"} />
      <Main>
        <Square del={0}></Square>
        <Square del={1}></Square>
        <Square del={2}></Square>
        <Square del={3}></Square>
        <Square del={4}></Square>
        <Form action="POST" name="contact" data-netlify="true">
          <Title>
            <h2>Drop Me a Message</h2>
          </Title>
          <p>Email: its.abhisheks@outlook.com</p>

          <InputBox>
            <input type="text" placeholder="Name" />
          </InputBox>
          <InputBox>
            <input type="text" placeholder="E-mail" />
          </InputBox>
          <InputBox>
            <textarea type="text" placeholder="Message" />
          </InputBox>
          <InputBox>
            <input type="submit" value="Submit" />
          </InputBox>
        </Form>
      </Main>

      <SocialIcons />
      <BigTitle top="1%" left="20%" text="CONTACT" />
    </Box>
  );
};

export default Contact;
