import Sider from "../Sider";
import { Outlet } from "react-router-dom";
import AdminHeader from "../AdminHeader";
import styled from "styled-components";

const AdminLayout = () => {
  return (
    <Main>
      <Sider />
      <Container>
        <AdminHeader />
        <Outlet />
      </Container>
    </Main>
  );
};

export default AdminLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  width: 100vw;
  display: flex;
`;
