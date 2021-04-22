import React, { useContext } from "react";

import AppContext from "../../context/AppContext";
import { StyledPriceTagContainer } from "./StyledPriceTag";

const PriceTag = () => {
  const { totalValue } = useContext(AppContext);

  return (
    <StyledPriceTagContainer>
      <p>{totalValue.toFixed(2)} $</p>
    </StyledPriceTagContainer>
  );
};

export default PriceTag;
