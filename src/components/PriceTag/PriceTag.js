import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import AppContext from "../../context/AppContext";

const PriceTag = () => {
  const { myCurrency, currencyList } = useContext(AppContext);
  const [value, setValue] = useState(0);
  let totalValue = 0;

  useEffect(() => {
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
  }, [currencyList]);

  return (
    <StylePriceTagContainer>
      <p>{value.toFixed(2)} $</p>
    </StylePriceTagContainer>
  );
};

const StylePriceTagContainer = styled.div`
  background-color: #7811f7;
  width: auto;
  position: absolute;
  top: 15px;
  right: 140px;
  padding: 10px;
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 16px;
`;
export default PriceTag;
