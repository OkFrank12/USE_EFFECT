import React from "react";
import styled from "styled-components";

const AdminHeader = () => {
  return (
    <Container>
      <Name>Franklin Okoro</Name>
      <Other>
        <InputField>Input</InputField>
      </Other>
    </Container>
  );
};

export default AdminHeader;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: azure;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div``;

const Other = styled.div``;

const InputField = styled.div``;
