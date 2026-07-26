import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 2rem;
  box-sizing: border-box;
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 8rem 1rem;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 1.5rem;
  width: 25vw;
  min-height: 55vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  @media (max-width: 1200px) {
    width: 75vw;
    min-height: auto;
    margin-bottom: 2rem;
  }
  @media (max-width: 600px) {
    width: 85vw;
    padding: 1rem;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(calc(8rem + 10vw), 1fr));
  grid-gap: calc(1rem + 1.5vw);
  z-index: 3;
  @media (max-width: 1200px) {
    grid-template-columns: 100%;
  }
`;

const Title = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: calc(0.9em + 0.6vw);
  margin-bottom: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.text};
  padding-bottom: 0.5rem;

  ${Main}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  span {
    font-size: 0.85em;
    font-weight: normal;
    opacity: 0.8;
    margin-top: 0.25rem;
  }
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(4rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.55em + 0.5vw);
  padding: 0.25rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    display: block;
  }
  ul {
    padding-left: 1.2rem;
    margin: 0;
  }
  li {
    margin-bottom: 0.5rem;
  }
`;


const ExperiencePage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Contact target="_blank" href="https://www.linkedin.com/in/jayesh-wani/">
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
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <ParticleComponent theme="light" />
        <Grid>
          <Main>
            <Title>
              Edviron
              <span>SDE Intern (Full-time) | Oct 2025 – Mar 2026</span>
            </Title>
            <Description>
              <ul>
                <li>Managed end-to-end delivery of client-facing Fintech Platform features.</li>
                <li>Led integration of ICICI Eazypay payment gateway (callbacks/webhooks).</li>
                <li>Improved API response time by 25% & reduced downtime by 10%.</li>
                <li>Built Jest unit-test suite to stabilize deployments.</li>
              </ul>
            </Description>
          </Main>
          <Main>
            <Title>
              Flock AI
              <span>Full Stack Intern (Part-time) | Aug 2025 – Feb 2026</span>
            </Title>
            <Description>
              <ul>
                <li>Enhanced internal tools for evaluating AI model outputs & debugging.</li>
                <li>Conducted root-cause analysis across model & platform layers.</li>
                <li>Optimized data workflows & APIs for processing large model output datasets.</li>
                <li>Developed SQL tracking systems for error metrics & turnaround time.</li>
              </ul>
            </Description>
          </Main>
          <Main>
            <Title>
              Innovate Content
              <span>Web Dev Intern (Full-time) | Jan 2023 – Sep 2023</span>
            </Title>
            <Description>
              <ul>
                <li>Delivered end-to-end execution of client websites using PHP, MySQL & JS.</li>
                <li>Boosted user engagement by 25% via UX & feature enhancements.</li>
                <li>Implemented event tracking via Google Analytics & Google Tag Manager.</li>
                <li>Resolved performance bottlenecks to improve page-load speed.</li>
              </ul>
            </Description>
          </Main>
        </Grid>

        <BigTitle text="Experience" top="4%" right="-1%" />
      </Box>
    </ThemeProvider>
  );
};

export default ExperiencePage;
