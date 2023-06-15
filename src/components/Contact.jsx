import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled, { keyframes } from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 280px) {
    justify-content: flex-start;
    align-items: flex-start;
    width: 3rem;
    padding: 20px;
  }
  @media only screen and (max-width: 393px) and (min-width: 281px) {
    justify-content: center;
  }
  @media only screen and (max-width: 420px) and (min-width: 395px) {
    justify-content: flex-start;
    align-items: flex-start;
    width: 3rem;
    padding: 20px;
  }
  @media only screen and (max-width: 712px) {
    justify-content: center;
  }
  @media only screen and (max-width: 768px) and (min-width: 713px) {
    justify-content: center;
    align-items: flex-start;
    width: 3rem;
    padding: 20px;
  }
  @media only screen and (max-width: 820px) and (min-width: 769px) {
    justify-content: center;
    align-items: flex-start;
    width: 3rem;
    padding: 20px;
  }

  @media only screen and (max-width: 912px) and (min-width: 821px) {
    justify-content: center;
    align-items: flex-start;
    width: 3rem;
    padding: 20px;
  }

  @media only screen and (max-width: 1024px) and (min-width: 913px) {
    justify-content: center;
    align-items: flex-start;
    width: 3rem;
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 350px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    display: none;
  }
`;

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

const starAnimation = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-135rem);
  }
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  height: 3rem;
  background-size: 300% 300%;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: ${gradientAnimation} 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(
      137.48deg,
      #ffdb3b 10%,
      #fe53bb 45%,
      #8f51ea 67%,
      #0044ff 87%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;

  &:hover #container-stars {
    z-index: 1;
    background-color: #212121;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    border: double 4px #fe53bb;
    background-origin: border-box;
    background-clip: content-box, border-box;
    animation: none;
  }

  &:active .circle {
    background: #fe53bb;
  }
`;

const ContainerStars = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
`;

const Strong = styled.strong`
  z-index: 2;
  font-family: "Avalors Personal Use";
  font-size: 12px;
  letter-spacing: 5px;
  color: #ffffff;
  text-shadow: 0 0 4px white;
`;

const Glow = styled.div`
  position: absolute;
  display: flex;
  width: 12rem;
`;

const Circle = styled.div`
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: ${pulseAnimation} 4s infinite;
  z-index: -1;

  &:nth-of-type(1) {
    background: rgba(254, 83, 186, 0.636);
  }

  &:nth-of-type(2) {
    background: rgba(142, 81, 234, 0.704);
  }
`;

const Stars = styled.div`
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;

  &::after {
    content: "";
    position: absolute;
    top: -10rem;
    left: -100rem;
    width: 100%;
    height: 100%;
    animation: ${starAnimation} 90s linear infinite;
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 170%;
    height: 500%;
    animation: ${starAnimation} 60s linear infinite;
    background-image: radial-gradient(#ffffff 1px, transparent 1%);
    background-size: 50px 50px;
    opacity: 0.5;
  }
`;
const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p30imut",
        "template_ueowoj2",
        ref.current,
        "lfPUy5f049OQ2Gqeg"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setSuccess(false);
        }
      );
  };
  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Send Me A Message</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" type="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Btn type="submit" className="btn">
              <Strong>SEND</Strong>
              <ContainerStars id="container-stars">
                <Stars id="stars"></Stars>
              </ContainerStars>
              <Glow id="glow">
                <Circle className="circle"></Circle>
                <Circle className="circle"></Circle>
              </Glow>
            </Btn>
            {success &&
              "Your message has been sent. I'll get back to you soon."}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
