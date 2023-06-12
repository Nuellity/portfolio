import React, { useState } from "react";
import styled from "styled-components";

const projects = [
  {
    id: 1,
    image: "./images/store/S1.png",
  },
  {
    id: 2,
    image: "./images/store/S2.png",
  },
  {
    id: 3,
    image: "./images/store/S3.png",
  },
  {
    id: 4,
    image: "./images/store/S4.png",
  },
  {
    id: 5,
    image: "./images/store/S5.png",
  },
  {
    id: 6,
    image: "./images/store/S6.png",
  },
  {
    id: 7,
    image: "./images/store/S7.png",
  },
  {
    id: 8,
    image: "./images/store/S8.png",
  },
  {
    id: 9,
    image: "./images/store/S9.png",
  },
  {
    id: 10,
    image: "./images/store/S10.png",
  },
  {
    id: 11,
    image: "./images/store/S11.png",
  },
  {
    id: 12,
    image: "./images/store/S12.png",
  },
  {
    id: 13,
    image: "./images/store/S13.png",
  },
  {
    id: 14,
    image: "./images/store/S14.png",
  },
  {
    id: 15,
    image: "./images/store/S15.png",
  },
  {
    id: 16,
    image: "./images/store/S16.png",
  },
  {
    id: 17,
    image: "./images/store/S17.png",
  },
  {
    id: 18,
    image: "./images/store/S18.png",
  },
  {
    id: 19,
    image: "./images/store/S19.png",
  },
  {
    id: 20,
    image: "./images/store/S20.png",
  },
  {
    id: 21,
    image: "./images/store/S21.png",
  },
  {
    id: 22,
    image: "./images/store/S22.png",
  },
  {
    id: 23,
    image: "./images/store/S23.png",
  },
  {
    id: 24,
    image: "./images/store/S24.png",
  },
  {
    id: 25,
    image: "./images/store/S25.png",
  },
  {
    id: 26,
    image: "./images/store/S26.png",
  },
  {
    id: 27,
    image: "./images/store/S27.png",
  },
  {
    id: 28,
    image: "./images/store/S28.png",
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
    height: 35rem;
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
    top: 22px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    top: 42px;
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

function Store() {
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
      <CardTitle>TECH-GADGETS ONLINE STORE</CardTitle>
      <Desc>
        The MERN app for the gadget store uses Redux, Stripe Payment, JWT,
        Firebase for Google sign-in, Mui, Axios, React Router-DOM, and
        Animate.css. These packages enable seamless ordering, saving items,
        leaving reviews, and secure payments, providing an enhanced user
        experience.
      </Desc>
    </>
  );
}

export default Store;
