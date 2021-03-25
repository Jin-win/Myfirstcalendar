// import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Schedule = (props) => {
  return (
    <Page>
      <h3>완료된 일정보기</h3>
    </Page>
  );
};

const Page = styled.div`
  max-width: 600px;
  min-height: 30vh;
  position: flex;
  height: 60vh;
  background-color: #dcebff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
export default Schedule;
