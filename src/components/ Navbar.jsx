import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
  @media only screen and (max-width: 1024px) and (min-width: 769px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 40px;
  @media only screen and (max-width: 767px) {
    height: 25px;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialButton = styled.div`
  cursor: pointer;
  height: 1.7rem;
  width: 1.7rem;
  font-family: "Titillium Web", sans-serif;
  color: #333;
  border-radius: 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  background: white;
  margin: 5px;
  transition: 0.3s;
  justify-content: center;
  background-color: inherit;

  &:hover {
    width: 150px;
    border-radius: 5px;
  }

  &:hover span {
    padding: 2px;
    width: 80px;
    opacity: 1;
  }
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const Text = styled.span`
  width: 100%;
  overflow: hidden;
  transition: 0.3s;
  text-align: center;
  margin-left: 5px;
  opacity: 0;
  color: purple;
`;

const TwitterButton = styled(SocialButton)`
  ${Icon} {
    fill: #1da1f2;
  }
`;

const LinkedInButton = styled(SocialButton)`
  ${Icon} {
    fill: #0e76a8;
  }
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const GitHubButton = styled(SocialButton)`
  ${Icon} {
    fill: #333;
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

function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./images/logo.png" />
          <List>
            <ListItem>
              <SocialLinks>
                <Link
                  href="https://twitter.com/emmabhu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  <TwitterButton id="twitter">
                    <Icon src="./images/twitter.png" alt="Twitter" />
                    <Text>@emmabhu</Text>
                  </TwitterButton>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/emmanuelabhulimhen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInButton id="linkedin">
                    <Icon src="./images/linkedin.png" alt="LinkedIn" />
                    <Text>in/emmanuelabhulimhen</Text>
                  </LinkedInButton>
                </Link>
                <Link
                  href="https://github.com/Nuellity/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubButton id="github">
                    <Icon src="./images/github.png" alt="GitHub" />
                    <Text>Nuellity</Text>
                  </GitHubButton>
                </Link>
              </SocialLinks>
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Link
            href="https://docs.google.com/document/d/e/2PACX-1vQa6tQqb_yJygmljRbBKH8QKtWWeqfTCunW0vY5hs6n3UeLwKX_wiHqgthADmnTCd8lQyMrTiYg58MC/pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledButton>View Resume</StyledButton>
          </Link>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar;
