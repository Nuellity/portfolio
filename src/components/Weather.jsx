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
  height: 400px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  border-radius: 20px;
  margin: auto;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  color: #da4ea2;
  position: absolute;
  bottom: 200px;
`;

const NextButton = styled.button`
  position: absolute;
  right: 10px;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: inherit;
`;

const PrevButton = styled.button`
  position: absolute;
  left: 10px;
  border: none;
  cursor: pointer;
  background-color: inherit;
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
  top: 200px;
`;

const Link = styled.img`
  width: 3rem;
  height: 3rem;
`;

const Desc = styled.p`
  font-size: 20px;
  line-height: 1.2;
  color: lightgray;
  position: absolute;
  bottom: 45px;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    padding: 20px;
    text-align: center;
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
