import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import astronaut from "../assets/Images/mee.jpg";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(4rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 12%;
  right: 2%;
  width: 20vw;
  img {
    width: 100%;
    height: auto;
    border-radius:50px;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 63vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  @media (max-width: 30em){
    width: 50vw;
    height: auto;
    backdrop-filter: none;
    margin-top: 2rem;
}
@media (max-width: 40em){
    width: 60vw;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
`;
const AboutPage = () => {
  
  return (
    <ThemeProvider theme={DarkTheme}>
      <Contact
          target="_blank"
          href="https://www.linkedin.com/in/jayesh-wani/"
        >
          <motion.h2
            initial={{
              y: -150,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedinIn />
          </motion.h2>
        </Contact>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          Hello, I'm Jayesh Wani, a passionate Competitive Programmer and Full Stack Developer. 
          <br /> <br />
          With a proven track record of solving over 400 problems across various coding platforms, I have honed my problem-solving skills. I also have hands-on experience developing numerous Frontend and Full Stack Projects.
          <br /> <br />
          I believe that dedication and a systematic approach are key to success; the results will naturally follow from our hard work.
          <br /> <br /> 
          Let's connect on LinkedIn and support each other's growth!
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
