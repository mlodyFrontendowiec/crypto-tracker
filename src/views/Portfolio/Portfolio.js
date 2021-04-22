import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

import {
  StyledLink,
  StyledView,
  StyledHeader,
  StyledParagraph,
} from "./StyledPortfolio";

const Portfolio = () => {
  const { totalValue } = useContext(AppContext);

  return (
    <StyledView>
      <StyledLink to="/">Back to all</StyledLink>
      <StyledHeader>Portfolio</StyledHeader>
      <StyledParagraph>Total Value: {totalValue} $</StyledParagraph>
    </StyledView>
  );
};

export default Portfolio;
