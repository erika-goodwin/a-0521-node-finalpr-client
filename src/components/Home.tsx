import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

const HomeComponent = styled.header`
  padding: 5rem 0;
  height: 70vh;
  background-color: #f48b94;
  background-image: url("https://pngimg.com/uploads/cat/cat_PNG50485.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const TitleComponent = styled.h1`
  font-family: American Typewriter, serif;
`;

function Home() {
  return (
    <HomeComponent>
      <Container>
        <TitleComponent style={{ textAlign: "center" }}>
          Record your expense here
        </TitleComponent>
      </Container>
    </HomeComponent>
  );
}

export default Home;
