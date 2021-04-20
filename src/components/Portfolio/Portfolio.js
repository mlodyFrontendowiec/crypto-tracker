import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Portfolio = () => {
  return (
    <StyledView>
      <StyledLink to="/">Back to all</StyledLink>
      <StyledHeader>Portfolio</StyledHeader>
    </StyledView>
  );
};

const StyledView = styled.div`
  max-height: 100vh;
  overflow: hidden;
`;
const StyledLink = styled(Link)`
  position: absolute;
  text-decoration: none;
  top: 20px;
  left: 20px;
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 20px;
  :hover {
    color: #7811f7;
  }
`;

const StyledHeader = styled.h1`
  font-size: 40px;
  color: white;
  font-family: "Roboto", sans-serif;
  text-align: center;
  margin-top: 30px;
`;
export default Portfolio;
