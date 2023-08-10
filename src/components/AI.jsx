import React, { useState } from "react";
import styled from "styled-components";

const projects = [
  {
    id: 1,
    image: "https://imgur.com/oNNycfs.png",
  },
  {
    id: 2,
    image: "https://imgur.com/s01FC1N.png",
  },
  {
    id: 3,
    image: "https://imgur.com/U22xYsh.png",
  },
  {
    id: 4,
    image: "https://imgur.com/zWXvJTY.png",
  },
];

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  width: 33rem;
  position: absolute;
  background-color: inherit;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  overflow: hidden;

  @media only screen and (max-width: 280px) {
    height: 8.3rem;
    width: 15rem;
    top: -500px;
  }

  @media only screen and (max-width: 320px) and (min-width: 281px) {
    height: 9.5rem;
    width: 17.2rem;
    top: -500px;
  }

  @media only screen and (min-width: 360px) and (max-width: 360px) and (min-height: 640px) and (max-height: 640px) {
    height: 10rem;
    width: 18rem;
    top: -450px;
  }

  @media only screen and (min-width: 360px) and (max-width: 360px) and (min-height: 740px) and (max-height: 740px) {
    height: 10rem;
    width: 18rem;
    top: -600px;
  }

  @media only screen and (max-width: 375px) and (min-width: 361px) {
    height: 11rem;
    width: 20rem;
    top: -500px;
  }
  @media only screen and (max-width: 393px) and (min-width: 376px) {
    height: 11rem;
    width: 22rem;
    top: -550px;
  }
  @media only screen and (max-width: 420px) and (min-width: 394px) {
    height: 11rem;
    width: 20rem;
    top: -800px;
  }
  @media only screen and (max-width: 540px) and (min-width: 422px) {
    height: 15rem;
    width: 27rem;
    top: -450px;
  }
  @media only screen and (max-width: 712px) and (min-width: 541px) {
    height: 15rem;
    width: 27rem;
    top: -900px;
  }
  @media only screen and (max-width: 768px) and (min-width: 713px) {
    height: 15rem;
    width: 27rem;
    top: -840px;
  }
  @media only screen and (max-width: 820px) and (min-width: 769px) {
    height: 15rem;
    width: 27rem;
    top: -1050px;
  }
  @media only screen and (max-width: 912px) and (min-width: 821px) {
    height: 15rem;
    width: 27rem;
    top: -1300px;
  }
  @media only screen and (max-width: 1026px) and (min-width: 1024px) {
    height: 17rem;
    width: 30.5rem;
    top: -1350px;
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
  text-align: center;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  margin: auto;
`;

const CardImage = styled.img`
  width: inherit;
  height: 100%;
  object-fit: contain;
  border-radius: 1.25rem;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  color: #da4ea2;
  cursor: pointer;
  @media only screen and (max-width: 420px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 768px) and (min-width: 422px) {
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 1.2rem;
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
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    height: 15rem;
    justify-content: flex-start;
    z-index: 0;
  }
`;

const ArrowImg = styled.img`
  width: 2em;
  height: 2em;
  padding: 0;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media only screen and (max-width: 768px) and (min-width: 422px) {
    width: 70%;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 80%;
  }
`;

const Link = styled.img`
  width: 3rem;
  height: 3rem;

  @media only screen and (max-width: 420px) {
    width: 1.5rem;
    height: 1.5rem;
  }
  @media only screen and (max-width: 768px) and (min-width: 422px) {
    width: 1.7rem;
    height: 1.7rem;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 2rem;
    height: 2rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
  padding-top: 2rem;
  align-items: center;

  @media only screen and (max-width: 320px) {
    top: -40px;
  }

  @media only screen and (min-width: 360px) and (max-width: 360px) and (min-height: 640px) and (max-height: 640px) {
    top: 0;
  }

  @media only screen and (min-width: 360px) and (max-width: 360px) and (min-height: 740px) and (max-height: 740px) {
    top: -60px;
  }

  @media only screen and (max-width: 375px) and (min-width: 361px) {
    top: 10px;
  }
  @media only screen and (max-width: 393px) and (min-width: 376px) {
    top: -10px;
  }
  @media only screen and (max-width: 420px) and (min-width: 394px) {
    top: -80px;
  }
  @media only screen and (max-width: 540px) and (min-width: 422px) {
    top: 50px;
  }
  @media only screen and (max-width: 768px) and (min-width: 541px) {
    top: -65px;
  }
  @media only screen and (max-width: 820px) and (min-width: 769px) {
    top: -140px;
  }
  @media only screen and (max-width: 912px) and (min-width: 821px) {
    top: -185px;
  }
  @media only screen and (max-width: 1026px) and (min-width: 1024px) {
    top: -220px;
  }
`;

const Desc = styled.p`
  font-size: 1.2em;
  line-height: 1.2;
  color: lightgray;
  text-align: center;
  padding: 0.3rem 0;
  @media only screen and (max-width: 420px) {
    font-size: 0.8rem;
    padding: 0 1rem;
  }
  @media only screen and (max-width: 768px) and (min-width: 422px) {
    font-size: 0.8rem;
    padding: 0 1rem;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 1em;
  }
`;

function AI() {
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
      <div>
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
        <Details>
          <a
            href="https://threejs-ai-react.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", textTransform: "uppercase" }}
          >
            <CardTitle>3D AI Shirt Generator</CardTitle>
          </a>
          <Desc>
            This project is an immersive web application that empowers users to
            customize 3D shirt models using a powerful tech stack. The frontend
            is built using Vite, React, and Tailwind CSS, while the backend is
            developed with Express and Node.js. Additionally, the TryLeap AI API
            is seamlessly integrated to generate dynamic shirt designs and
            colors.
          </Desc>
          <ProjectLinks>
            <a
              href="https://github.com/Nuellity/Threejs-AI-React"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link src="./images/github.png" />
            </a>
            <a
              href="https://threejs-ai-react.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link src="./images/link.png" />
            </a>
          </ProjectLinks>
        </Details>
      </div>
    </>
  );
}

export default AI;
