import React, { useState } from "react";
import styled from "styled-components";

const projects = [
  {
    id: 1,
    image: "./images/weather/S1.png",
  },
  {
    id: 2,
    image: "./images/weather/S2.png",
  },
  {
    id: 3,
    image: "./images/weather/S3.png",
  },
  {
    id: 4,
    image: "./images/weather/S4.png",
  },
  {
    id: 5,
    image: "./images/weather/S5.png",
  },
];

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: 36rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
  @media only screen and (max-width: 420px) {
    height: 17rem;
    width: 22rem;
  }
  @media only screen and (max-width: 768px) and (min-width: 422px) {
    height: 25rem;
    width: 40rem;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    height: 38rem;
    width: 45rem;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
  transition: transform 0.5s;
`;

const CarouselCard = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  width: 100%;
  height: 20rem;
  background-color: #f8f8f8;
  margin: auto;
`;

const CardImage = styled.img`
  width: inherit;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  color: #da4ea2;
  position: absolute;
  bottom: 190px;
  @media only screen and (max-width: 420px) {
    font-size: 1rem;
    top: -110px;
  }
  @media only screen and (max-width: 768px) and (min-width: 422px) {
    font-size: 1.6rem;
    top: -100px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 1.9rem;
    top: -130px;
  }
`;

const NextButton = styled.button`
  position: absolute;
  right: 10px;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: inherit;
  z-index: 1;
`;

const PrevButton = styled.button`
  position: absolute;
  left: 10px;
  border: none;
  cursor: pointer;
  background-color: inherit;
  z-index: 1;
`;

const ArrowImg = styled.img`
  width: 2em;
  height: 2em;
  padding: 0;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  position: absolute;
  top: 150px;
  @media only screen and (max-width: 420px) {
    width: 10rem;
    top: -10px;
  }
  @media only screen and (max-width: 768px) and (min-width: 422px) {
    top: 32px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    top: 55px;
  }
`;

const Link = styled.img`
  width: 3rem;
  height: 3rem;
  @media only screen and (max-width: 420px) {
    width: 2rem;
    height: 2rem;
  }
`;

const Desc = styled.p`
  font-size: 1.2em;
  line-height: 1.2;
  color: lightgray;
  position: absolute;
  text-align: center;
  bottom: 100px;

  @media only screen and (max-width: 420px) {
    font-size: 0.7rem;
    top: -85px;
  }
  @media only screen and (max-width: 768px) and (min-width: 422px) {
    font-size: 1.2rem;
    top: -80px;
    padding: 10px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 1.5rem;
    padding: 10px;
    top: -100px;
  }
`;

function Weather() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <CarouselContainer>
        <CarouselWrapper activeIndex={activeIndex}>
          {projects.map((project) => (
            <CarouselCard key={project.id}>
              <CardImage src={project.image} />
            </CarouselCard>
          ))}
        </CarouselWrapper>
        <PrevButton onClick={handlePrevClick}>
          <ArrowImg src="./images/left.png" />
        </PrevButton>
        <NextButton onClick={handleNextClick}>
          <ArrowImg src="./images/right.png" />
        </NextButton>
      </CarouselContainer>
      <ProjectLinks>
        <Link src="./images/github.png" />
        <Link src="./images/link.png" />
      </ProjectLinks>
      <CardTitle>REAL-TIME WEATHER APP</CardTitle>
      <Desc>
        The Weather React app provides users with real-time weather data for any
        city worldwide. Using the OpenWeatherMap API and packages like Axios,
        HTML, and CSS, the app offers a user-friendly interface. It goes beyond
        functionality by dynamically changing the background to match the
        current weather conditions, enhancing the visual experience.
      </Desc>
    </>
  );
}

export default Weather;
