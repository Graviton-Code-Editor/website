import React from "react";
import styled from "styled-components";

const Button = props => (
  <ButtonWrapper props={props} onClick={props.onClick}>
    {props.children}
  </ButtonWrapper>
);

const ButtonWrapper = styled.button`
  transition: 0.25s;
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 8px 20px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Inter", sans-serif;
  background: ${props => props.props.background || "black"};
  color: ${props => props.props.color || "rgb(255, 255, 255)"};
  font-size: ${props => props.props.fontSize || "15px"};
  font-weight: ${props => props.props.fontWeight || "600"};
  border-radius: ${props => props.props.radius || "6px"};
  border: ${props => props.props.border || "none"};
  margin: 5px;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  outline: 0;
  :hover {
    transition: 0.2s;
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
  }
  :active {
    transition: 0.2s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
    transform: scale(0.95);
  }
`;

export default Button;
