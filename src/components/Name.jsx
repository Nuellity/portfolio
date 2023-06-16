import React from "react";
import Navbar from "./ Navbar";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import Typewriter from "./TypeWriter";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 280px) {
    height: 180vh;
  }
  @media only screen and (max-width: 393px) and (min-width: 281px) {
    height: 130vh;
  }
  @media only screen and (max-width: 420px) and (min-width: 394px) {
    height: 110vh;
  }
  @media only screen and (max-width: 540px) and (min-width: 421px) {
    height: 140vh;
  }

  @media only screen and (max-width: 712px) and (min-width: 541px) {
    height: 80vh;
  }
  @media only screen and (max-width: 768px) and (min-width: 713px) {
    height: 100vh;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    height: 100vh;
  }
`;
const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1200px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;
const Text = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 280px) {
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    padding-top: 3rem;
  }
  @media only screen and (max-width: 393px) and (min-width: 281px) {
    flex: 1;
    align-items: center;
  }
  @media only screen and (max-width: 420px) and (min-width: 395px) {
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    padding-top: 8rem;
  }
  @media only screen and (max-width: 712px) {
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    padding-top: 8rem;
  }
  @media only screen and (max-width: 768px) and (min-width: 713px) {
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    padding-top: 8rem;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 64px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 34px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    align-items: center;
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
  @media only screen and (max-width: 280px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 767px) and (min-width: 281px) {
    font-size: 18px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  color: lightgray;
  line-height: 1.5;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
    font-size: 15px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    padding: 20px;
    text-align: center;
  }
`;

const TextImage = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    flex: 1;
    width: 100%;
    justify-content: flex-start;
  }
`;

const Img = styled.img`
  width: 500px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const StyledButton = styled.button`
  width: 7.25rem;
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

function Name() {
  const scrollToSection = (location) => {
    const section = document.getElementById(location);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Section>
      <Navbar />
      <Container>
        <Text>
          <Title>Think. Make. Solve.</Title>
          <WhatWeDo>
            <Line src="./images/line.png" />
            <Subtitle>
              I'm a <Typewriter />
            </Subtitle>
          </WhatWeDo>
          <Desc>
            I am a fullstack developer passionate about creating beautiful and
            interactive web experiences. With a strong foundation in HTML, CSS,
            Javscript and Python, I specialize in building responsive and
            intuitive user interfaces using modern frameworks like React. I am
            dedicated to delivering high-quality code and continuously learning
            and adapting to new technologies to enhance the user experience.
            Let's work together to bring your ideas to life!
          </Desc>
          <StyledButton onClick={() => scrollToSection("skills")}>
            Learn More
          </StyledButton>
        </Text>
        <TextImage>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1.5} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 200, 200]} scale={2.2}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./images/create.png" />
        </TextImage>
      </Container>
    </Section>
  );
}

export default Name;
