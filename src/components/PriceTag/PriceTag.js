import React, { useContext, useState, useEffect } from "react";

import AppContext from "../../context/AppContext";
import { StyledPriceTagContainer } from "./StyledPriceTag";

const PriceTag = () => {
  const { myCurrency, currencyList } = useContext(AppContext);
  const [value, setValue] = useState(0);

  useEffect(() => {
    let totalValue = 0;
    if (myCurrency.length !== 0) {
      myCurrency.forEach((element) => {
        const actualPriceItem = currencyList.find(
          (item) => item.name === element.name
        );
        console.log(element.quantity);
        totalValue += element.quantity * actualPriceItem.current_price;
      });
      console.log(totalValue);
      setValue(totalValue);
    }
  }, [myCurrency, currencyList]);

  return (
    <StyledPriceTagContainer>
      <p>{value.toFixed(2)} $</p>
    </StyledPriceTagContainer>
  );
};

export default PriceTag;
