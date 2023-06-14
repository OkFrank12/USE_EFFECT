import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>Footer</Main>
      </Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: black;
  color: white;
`;

const Main = styled.div``;
