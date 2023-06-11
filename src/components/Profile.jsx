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

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 0;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 767px) {
    text-align: center;
    font-size: 34px;
  }
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
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
  @media only screen and (max-width: 767px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    display: 15px;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  line-height: 1.5;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
    font-size: 14px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
  font-size: 1.5rem;
  @media only screen and (max-width: 765px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 1.5rem;
  }
`;

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  @media only screen and (max-width: 767px) {
    justify-content: center;
    padding: 0;
  }
  @media only screen and (max-width: 768px) {
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
  @media only screen and (max-width: 767px) {
    width: 20px;
    height: 20px;
  }
  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 60px;
    height: 60px;
  }
`;

function Profile() {
  return (
    <Section>
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
          <Button>See My Projects</Button>
        </Text>
      </Container>
    </Section>
  );
}

export default Profile;
