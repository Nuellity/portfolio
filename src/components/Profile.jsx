import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Model from "./React";

const skills = [
  "./images/nodejs.png",
  "./images/threejs.png",
  "./images/html.png",
  "./images/css.png",
  "./images/express.png",
  "./images/git.png",
  "./images/jwt.png",
  "./images/mongodb.png",
  "./images/javascript.png",
  "./images/react.png",
  "./images/redux.png",
  "./images/styled.png",
  "./images/mui.png",
  "./images/bootstrap.png",
  "./images/firebase.png",
  "./images/python.png",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;
const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 280px) {
    align-items: center;
    justify-content: flex-start;
    padding-top: 5rem;
  }
  @media only screen and (max-width: 320px) and (min-width: 281px) {
    justify-content: flex-start;
    align-items: center;
    padding-top: 4px;
  }
  @media only screen and (min-width: 360px) and (min-width: 321px) {
    justify-content: flex-start;
    align-items: center;
    padding-top: 2rem;
  }
  @media only screen and (max-width: 393px) and (min-width: 361px) {
    align-items: center;
    justify-content: flex-start;
    padding-top: 2.5rem;
  }
  @media only screen and (max-width: 420px) and (min-width: 395px) {
    align-items: center;
    justify-content: flex-start;
    padding-top: 4rem;
  }
  @media only screen and (max-width: 540px) and (min-width: 421px) {
    align-items: center;
    justify-content: flex-start;
    padding-top: 1rem;
  }
  @media only screen and (max-width: 712px) and (min-width: 541px) {
    align-items: center;
    justify-content: flex-start;
    padding-top: 2rem;
  }
  @media only screen and (max-width: 768px) and (min-width: 713px) {
    align-items: center;
    justify-content: flex-start;
    padding-top: 2rem;
  }

  @media only screen and (max-width: 820px) and (min-width: 769px) {
    align-items: center;
    justify-content: flex-start;
    padding-top: 2rem;
  }
  @media only screen and (max-width: 912px) and (min-width: 821px) {
    align-items: center;
    justify-content: flex-start;
    padding-top: 2rem;
  }
  @media only screen and (max-width: 1024px) and (min-width: 913px) {
    align-items: center;
    justify-content: flex-start;
    padding-top: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 64px;
  @media only screen and (max-width: 420px) {
    text-align: center;
    font-size: 34px;
  }
  @media only screen and (max-width: 540px) and (min-width: 421px) {
    text-align: center;
    font-size: 32px;
  }
  @media only screen and (max-width: 768px) and (min-width: 541px) {
    text-align: center;
    font-size: 34px;
  }
  @media only screen and (max-width: 820px) and (min-width: 769px) {
    text-align: center;
  }

  @media only screen and (max-width: 912px) and (min-width: 821px) {
    text-align: center;
    font-size: 54px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 913px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;

  @media only screen and (max-width: 420px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 540px) and (min-width: 421px) {
    text-align: center;
    font-size: 18px;
  }
  @media only screen and (max-width: 820px) and (min-width: 541px) {
    text-align: center;
    font-size: 20px;
  }

  @media only screen and (max-width: 912px) and (min-width: 821px) {
    text-align: center;
    font-size: 24px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 913px) {
    font-size: 30px;
  }
`;

const Desc = styled.p`
  font-size: 1.2rem;
  line-height: 1.2;
  color: lightgray;

  @media only screen and (max-width: 280px) {
    padding: 10px;
    text-align: center;
    font-size: 11px;
  }

  @media only screen and (max-width: 320px) and (min-width: 281px) {
    padding: 15px;
    text-align: center;
    font-size: 14px;
  }
  @media only screen and (max-width: 768px) and (min-width: 321px) {
    padding: 20px;
    text-align: center;
    font-size: 14px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    padding: 20px;
    text-align: center;
  }
`;

const TextImage = styled.div`
  flex: 1;
  position: relative;
  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    display: none;
  }
`;

const Skill = styled.span`
  color: #da4ea2;
  font-size: 1.4rem;
  @media only screen and (max-width: 280px) {
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 768px) and (min-width: 281px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 820px) and (min-width: 769px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 1024px) and (min-width: 821px) {
    font-size: 1.5rem;
  }
`;

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  @media only screen and (max-width: 420px) {
    justify-content: center;
    z-index: 1;
  }
  @media only screen and (max-width: 768px) and (min-width: 421px) {
    justify-content: center;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    justify-content: center;
  }
`;

const SkillImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  padding: 10px;
  @media only screen and (max-width: 420px) {
    width: 35px;
    height: 35px;
  }
  @media only screen and (max-width: 712px) and (min-width: 421px) {
    width: 50px;
    height: 50px;
  }
  @media only screen and (max-width: 768px) and (min-width: 713px) {
    width: 50px;
    height: 50px;
  }
  @media only screen and (max-width: 820px) and (min-width: 769px) {
    width: 50px;
    height: 50px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 821px) {
    width: 60px;
    height: 60px;
  }
`;

const StyledButton = styled.button`
  width: 8rem;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &:hover {
    color: black;
  }

  &:after {
    content: "";
    background: purple;
    position: absolute;
    z-index: -1;
    left: -20%;
    right: -20%;
    top: 0;
    bottom: 0;
    transform: skewX(-45deg) scale(0, 1);
    transition: all 0.5s;
  }

  &:hover:after {
    transform: skewX(-45deg) scale(1, 1);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }
`;

function Profile() {
  const scrollToSection = (location) => {
    const section = document.getElementById(location);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Section id="skills">
      <Container>
        <TextImage>
          <Canvas>
            <Stage environment="city" intensity={0.6}>
              <Model />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </TextImage>
        <Text>
          <Title>These Are My Skills</Title>
          <WhatWeDo>
            <Line src="./images/line.png" />
            <Subtitle>What do I know </Subtitle>
          </WhatWeDo>
          <Desc>
            With a diverse skill set encompassing <Skill>HTML</Skill>, {""}
            <Skill>CSS</Skill>, <Skill>JavaScript</Skill>,{" "}
            <Skill>Node.js</Skill>, <Skill>React</Skill>,{" "}
            <Skill>Express.js</Skill>, <Skill>Redux</Skill>,{" "}
            <Skill>MongoDB</Skill>, <Skill>Material-UI</Skill>,{" "}
            <Skill>Bootstrap</Skill>, <Skill>Styled-Components</Skill>,
            <Skill>Firebase</Skill>, <Skill>JWT</Skill>, <Skill>Python</Skill>.
            and <Skill>Git</Skill>, I am a highly versatile web developer. I
            excel in crafting well-structured web pages, creating dynamic user
            experiences, and developing scalable server-side applications. With
            expertise in <Skill>React</Skill> and <Skill>Redux</Skill>, I build
            interactive interfaces and ensure smooth state management. I
            leverage <Skill>MongoDB</Skill> for efficient data operations,{" "}
            <Skill>Material-UI</Skill> and <Skill>Bootstrap</Skill> for visually
            appealing designs, and <Skill>Styled-Components</Skill> for modular
            styling. Additionally, my proficiency in <Skill>Firebase</Skill>{" "}
            enables seamless integration of real-time database management and
            authentication, including <Skill>JWT</Skill>-based token
            authentication for secure user sessions. With <Skill>Git</Skill>, I
            ensure efficient collaboration and code management. Overall, my
            versatile skill set allows me to adapt to various web development
            projects and deliver high-quality solutions.
          </Desc>

          <SkillContainer>
            {skills.map((skill, id) => (
              <SkillImg src={skill} key={id} />
            ))}
          </SkillContainer>
          <StyledButton onClick={() => scrollToSection("projects")}>
            See My Projects
          </StyledButton>
        </Text>
      </Container>
    </Section>
  );
}

export default Profile;
