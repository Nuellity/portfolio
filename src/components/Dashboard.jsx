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
    height: 8rem;
    width: 14rem;
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
    width: 20rem;
    top: -750px;
  }
  @media only screen and (max-width: 420px) and (min-width: 395px) {
    height: 10rem;
    width: 18rem;
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
    height: 14rem;
    width: 25rem;
    top: -840px;
  }
  @media only screen and (max-width: 820px) and (min-width: 769px) {
    height: 14rem;
    width: 25rem;
    top: -1050px;
  }
  @media only screen and (max-width: 912px) and (min-width: 821px) {
    height: 15rem;
    width: 27rem;
    top: -1300px;
  }
  @media only screen and (max-width: 1026px) and (min-width: 1024px) {
    height: 17rem;
    width: 34rem;
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
  @media only screen and (max-width: 280px) {
    font-size: 0.8rem;
    padding: 12px;
  }
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
    top: -20px;
  }
  @media only screen and (max-width: 420px) and (min-width: 376px) {
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
            href="https://mern-admin-5vo2.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <CardTitle>ADMIN ACCOUNT DASHBOARD</CardTitle>
          </a>
          <Desc>
            Achieved remarkable results in optimizing order processing
            efficiency for the online store. Leveraged cutting-edge packages
            like Mui, Redux, Axios, Firebase, React Router, Recharts, and more.
            Reduced processing time by an impressive 50%, resulting in enhanced
            customer satisfaction. Demonstrated exceptional problem-solving
            skills and a track record of delivering impactful solutions.
          </Desc>
          <ProjectLinks>
            <a
              href="https://github.com/Nuellity/e-commerce-fullstack"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link src="./images/github.png" />
            </a>
            <a
              href="https://mern-admin-5vo2.onrender.com/"
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

export default Dashboard;
