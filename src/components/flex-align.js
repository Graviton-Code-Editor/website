import React from "react";
import styled from "styled-components";

const FlexAlign = props => (
  <div props={props}>
    <StyledDiv>{props.children}</StyledDiv>
  </div>
);

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "Inter", sans-serif;
`;

export default FlexAlign;
