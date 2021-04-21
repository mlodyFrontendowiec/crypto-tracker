import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import AppContext from "../../context/AppContext";

const PriceTag = () => {
  const { myCurrency } = useContext(AppContext);
  const [value, setValue] = useState(0);
  let totalValue = 0;

  useEffect(() => {
    if (myCurrency.length !== 0) {
      myCurrency.forEach((element) => {
        totalValue += element.currentPrice;
      });
      console.log(totalValue);
      setValue(totalValue);
    }
  }, [myCurrency]);

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
