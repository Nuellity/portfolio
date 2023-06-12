import React, { useState } from "react";
import styled from "styled-components";
import Store from "./Store";
import Dashboard from "./Dashboard";
import Weather from "./Weather";

const data = ["E-commerce Site", "Admin C.M.S", "Weather Map"];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: grey;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex: 1;
    padding: 20px;
    justify-content: center;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    flex: 1;
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 4.5rem;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 420px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  @media only screen and (max-width: 768px) and (min-width: 422px) {
    font-size: 35px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    font-size: 40px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Projects() {
  const [work, setWork] = useState("E-commerce Site");

  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item, id) => (
              <ListItem key={id} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "E-commerce Site" ? (
            <Store />
          ) : work === "Admin C.M.S" ? (
            <Dashboard />
          ) : (
            <Weather />
          )}
        </Right>
      </Container>
    </Section>
  );
}
export default Projects;
