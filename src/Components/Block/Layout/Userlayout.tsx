import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sider from "../Sider";
import Footer from "../Footer";
import styled from "styled-components";

const Userlayout = () => {
  return (
    <div>
      <Container>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Container>
    </div>
  );
};

export default Userlayout;

const Main = styled.div`
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
