import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo>LOGO</Logo>
          <NavHolder>
            <Nav>About</Nav>
            <Nav>Products</Nav>
            <Nav>Contact</Nav>
          </NavHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;
  color: white;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  height: 100%;
`;

const NavHolder = styled.div`
  display: flex;
`;

const Logo = styled.div``;

// const Container = styled.div``;

const Nav = styled.div`
  margin: 0 10px;
`;
