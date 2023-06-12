/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const Container = styled.div`
  display: inline-block;
`;

const Text = styled.span`
  color: #da4ea2;
  font-size: 24px;
  font-weight: bold;
  overflow: hidden;
  border-right: 0.15em solid #da4ea2;
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation: typing 2s steps(${(props) => props.length}, end) forwards;
  @media only screen and (max-width: 767px) {
    font-size: 18px;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 0.1em;
  background-color: #da4ea2;
  margin-left: 0.2em;
  animation: ${blinkAnimation} 1s step-end infinite;
`;

const Typewriter = () => {
  const [text, setText] = useState("");
  const [length, setLength] = useState(0);

  const words = [
    "Web Developer.",
    "Frontend Developer.",
    "Backend Developer.",
    "FullStack Developer.",
    "Software Engineer.",
  ];
  const delay = 200;

  useEffect(() => {
    let timer = null;
    let index = 0;

    const type = () => {
      if (index < words.length) {
        const word = words[index];
        const nextIndex = (index + 1) % words.length;
        const wordLength = word.length;

        setLength(wordLength);
        setText("");
        timer = setTimeout(() => {
          for (let i = 0; i < wordLength; i++) {
            timer = setTimeout(() => {
              setText((prevText) => prevText + word[i]);
            }, i * delay);
          }
          timer = setTimeout(() => {
            setLength(0);
            timer = setTimeout(() => {
              setText(word);
              type();
            }, delay);
          }, wordLength * delay);
        }, delay);
        index = nextIndex;
      }
    };

    type();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container>
      <Text length={length}>{text}</Text>
      <Cursor />
    </Container>
  );
};

export default Typewriter;
