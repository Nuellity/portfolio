import React, { useState } from "react";
import styled from "styled-components";

const projects = [
  {
    id: 1,
    image: "./images/admin/S1.png",
  },
  {
    id: 2,
    image: "./images/admin/S2.png",
  },
  {
    id: 3,
    image: "./images/admin/S3.png",
  },
  {
    id: 4,
    image: "./images/admin/S4.png",
  },
  {
    id: 5,
    image: "./images/admin/S5.png",
  },
  {
    id: 6,
    image: "./images/admin/S6.png",
  },
  {
    id: 7,
    image: "./images/admin/S7.png",
  },
  {
    id: 8,
    image: "./images/admin/S8.png",
  },
  {
    id: 9,
    image: "./images/admin/S9.png",
  },
  {
    id: 10,
    image: "./images/admin/S10.png",
  },
  {
    id: 11,
    image: "./images/admin/S11.png",
  },
  {
    id: 12,
    image: "./images/admin/S12.png",
  },
  {
    id: 13,
    image: "./images/admin/S13.png",
  },
  {
    id: 14,
    image: "./images/admin/S14.png",
  },
  {
    id: 15,
    image: "./images/admin/S15.png",
  },
  {
    id: 16,
    image: "./images/admin/S16.png",
  },
  {
    id: 17,
    image: "./images/admin/S17.png",
  },
  {
    id: 18,
    image: "./images/admin/S18.png",
  },
  {
    id: 19,
    image: "./images/admin/S19.png",
  },
  {
    id: 20,
    image: "./images/admin/S20.png",
  },
  {
    id: 21,
    image: "./images/admin/S21.png",
  },
  {
    id: 22,
    image: "./images/admin/S22.png",
  },
  {
    id: 23,
    image: "./images/admin/S23.png",
  },
  {
    id: 24,
    image: "./images/admin/S24.png",
  },
  {
    id: 25,
    image: "./images/admin/S25.png",
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

function Dashboard() {
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
      <CardTitle>CONTENT MANAGEMMENT SYSTEM FOR ONLINE STORE</CardTitle>
      <Desc>
        Achieved remarkable results in optimizing order processing efficiency
        for the online store. Leveraged cutting-edge packages like Mui, Redux,
        Axios, Firebase, React Router, Recharts, and more. Reduced processing
        time by an impressive 50%, resulting in enhanced customer satisfaction.
        Demonstrated exceptional problem-solving skills and a track record of
        delivering impactful solutions.
      </Desc>
    </>
  );
}

export default Dashboard;
