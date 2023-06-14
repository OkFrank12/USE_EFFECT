import React from "react";
import styled from "styled-components";

const Dashboard = () => {
  return (
    <div>
      <Container>
        <BarHolder>
          {/* <ChartHold> */}
          <Chart>
            <Bar />
          </Chart>
          {/* </ChartHold> */}
          <Title>Title</Title>
        </BarHolder>
      </Container>
    </div>
  );
};

export default Dashboard;

const BarHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;
const Container = styled.div`
  width: 600px;
  height: 300px;
  background-color: silver;
  border-radius: 5px;
  margin: 50px 30px;
  padding: 20px;
`;

const Chart = styled.div`
  background-color: #aeaeae;
  height: 90%;
  width: 5px;
  border-radius: 10px 10px 0px 0px;
  position: relative;
`;
const Title = styled.div`
  font-size: 10px;
  font-weight: bold;
`;

const Bar = styled.div`
  background-color: darkorange;
  height: 90%;
  width: 5px;
  border-radius: 5px 5px 0px 0px;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const ChartHold = styled.div``;