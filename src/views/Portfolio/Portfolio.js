import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledLink, StyledView, StyledHeader } from "./StyledPortfolio";

const Portfolio = () => {
  return (
    <StyledView>
      <StyledLink to="/">Back to all</StyledLink>
      <StyledHeader>Portfolio</StyledHeader>
    </StyledView>
  );
};

export default Portfolio;
