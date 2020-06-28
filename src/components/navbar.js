import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import graviton from "../../static/assets/graviton-logo.png";

function Navbar() {
  return (
    <StyledNavBar>
      <Link to="/" activeClassName="active" className="img">
        <img src={graviton} alt="Graviton Screenshot" />
      </Link>
      <Link to="/" activeClassName="active">
        Home
      </Link>
      <Link to="/blog/" activeClassName="active">
        Blog
      </Link>
      <Link to="/about/" activeClassName="active">
        About
      </Link>
    </StyledNavBar>
  );
}

const StyledNavBar = styled.div`
  display: flex;
  border: 0;
  padding: 15px 40px;
  margin-bottom: 25px;
  align-items: center;
  border-bottom: 1px solid rgb(180, 180, 180);
  .img {
    flex: 4;
    img {
      width: 130px;
      height: auto;
      max-height: 100%;
      margin: 0px;
    }
  }
  a {
    font-family: "Inter", sans-serif;
    padding: 15px 5px;
    margin: 0px 7px;
    border: 0;
    text-decorations: none;
    background: transparent;
    color: rgb(75, 75, 75);
    box-shadow: none;
    outline: 0;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  a.active {
    color: black;
  }

  a:not(.active):hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
    color: gray;
  }
  a.active:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
  }
`;

export { Navbar };
